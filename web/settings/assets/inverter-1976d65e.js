import{C as m}from"./HardwareInstallation-775406e1.js";import{_ as d,u as o,k as u,l,G as t,E as i,y as r}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceSigenergyInverter",mixins:[m]},_={class:"device-sigenergy-inverter"};function c(n,e,b,f,v,y){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return u(),l("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für Sigenergy Wechselrichter ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":n.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[r(" Die Standard-Modbus-ID von Sigenergy ist 247 ")])),_:1},8,["model-value"])])}const I=d(g,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sigenergy/sigenergy/inverter.vue"]]);export{I as default};
