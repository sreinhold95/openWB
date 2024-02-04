#!/usr/bin/env python3
import logging
import time
from typing import Iterable, Union

from modules.common.abstract_device import DeviceDescriptor
from modules.common.component_context import SingleComponentUpdateContext
from modules.common.configurable_device import ComponentFactoryByType, ConfigurableDevice, MultiComponentUpdater
from modules.common.modbus import ModbusDataType, ModbusTcpClient_
from modules.devices.huawei.bat import HuaweiBat
from modules.devices.huawei.config import Huawei, HuaweiBatSetup, HuaweiCounterSetup, HuaweiInverterSetup
from modules.devices.huawei.counter import HuaweiCounter
from modules.devices.huawei.inverter import HuaweiInverter

log = logging.getLogger(__name__)


def create_device(device_config: Huawei):
    def create_bat_component(component_config: HuaweiBatSetup):
        return HuaweiBat(device_config.id, component_config)

    def create_counter_component(component_config: HuaweiCounterSetup):
        return HuaweiCounter(device_config.id, component_config)

    def create_inverter_component(component_config: HuaweiInverterSetup):
        return HuaweiInverter(device_config.id, component_config)

    def update_components(components: Iterable[Union[HuaweiBat, HuaweiCounter, HuaweiInverter]]):
        with client as c:
            modbus_id = device_config.configuration.modbus_id
           
            #---------------------------------------------------------
            # Huawei darf nur mit Regelintervall sehr langsam betrieben werden, daher kann hier eine längere Pause
            # eingelegt werden. Ob auch eine kürzere ausreichend ist, ist nicht getestet.
            #regs = c.read_holding_registers(32064, [ModbusDataType.INT_32]*5701, unit=modbus_id)
            regs = c.read_holding_registers(32064,[ModbusDataType.INT_32]*18,unit=modbus_id)
            time.sleep(0.1)
            regs1 = c.read_holding_registers(37017,[ModbusDataType.INT_32]*32,unit=modbus_id)
            time.sleep(0.1)
            bat_soc_reg = c.read_holding_registers(37760, ModbusDataType.INT_16, unit=modbus_id)  # Int 16 37760
            time.sleep(0.1)
            regs2 = c.read_holding_registers(37765,[ModbusDataType.INT_32],unit=modbus_id)
            inverter_power_reg = regs[0]  # INT32 32064
            counter_currents_reg = regs1[0:6]  # INT 32, 37107-9
            counter_power_reg = regs1[7]  # INT32, 37113
            bat_power_reg = regs2[0]  # INT32, 37765
            #time.sleep(5)
            #bat_soc_reg = c.read_holding_registers(37760, ModbusDataType.INT_16, unit=modbus_id)  # Int 16 37760
            
            for component in components:
                with SingleComponentUpdateContext(component.fault_state):
                    if isinstance(component, HuaweiBat):
                        component.update(bat_power_reg, bat_soc_reg)
                    elif isinstance(component, HuaweiCounter):
                        component.update(counter_currents_reg, counter_power_reg)
                    elif isinstance(component, HuaweiInverter):
                        component.update(inverter_power_reg)

    try:
        client = ModbusTcpClient_(device_config.configuration.ip_address, 502)
        client.delegate.connect()
        #Testweise veringern zwischen connect und Abfrage
        time.sleep(4)
    except Exception:
        log.exception("Fehler in create_device: Connect to Dongle failed")
    return ConfigurableDevice(
        device_config=device_config,
        component_factory=ComponentFactoryByType(
            bat=create_bat_component,
            counter=create_counter_component,
            inverter=create_inverter_component,
        ),
        component_updater=MultiComponentUpdater(update_components)
    )


device_descriptor = DeviceDescriptor(configuration_factory=Huawei)
