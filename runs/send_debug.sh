#!/bin/bash
OPENWBBASEDIR=$(cd "$(dirname "$0")/../" && pwd)
RAMDISKDIR="${OPENWBBASEDIR}/ramdisk"

debugFile="${RAMDISKDIR}/debug.log"
touch "$debugFile"
{
	echo "$1" | jq -r .message
	debugEmail=$(echo "$1" | jq -r .email)
	echo "$debugEmail"
	echo "$1" | jq -r .serialNumber
	echo "$1" | jq -r .installedComponents
	echo "$1" | jq -r .vehicles
	echo "############################ version ##############"
	cat "${OPENWBBASEDIR}/web/version"
	cat "${OPENWBBASEDIR}/web/lastcommit"
	echo "############################ configuration and state ##############"
	echo "$2"
	echo "############################ system ###############"
	uptime
	free
	echo "############################ retained log ##############"
	tail -500 "${RAMDISKDIR}/main.log"
	echo "############################ info log ##############"
	mosquitto_pub -p 1886 -t "openWB/set/system/debug_level" -m "20"
	sleep 60
	tail -1000 "${RAMDISKDIR}/main.log"
	echo "############################ debug log ##############"
	mosquitto_pub -p 1886 -t "openWB/set/system/debug_level" -m "10"
	sleep 60
	tail -2500 "${RAMDISKDIR}/main.log"
	echo "############################ internal chargepoint log ##############"
	tail -1000 "${RAMDISKDIR}/internal_chargepoint.log"
	echo "############################ mqtt log ##############"
	tail -1000 "${RAMDISKDIR}/mqtt.log"
	

	for currentConfig in /etc/mosquitto/conf.d/99-bridge-*; do
		if [ -f "$currentConfig" ]; then
			echo "############################ mqtt bridge '$currentConfig' ######"
			sudo grep -F -v -e password "$currentConfig" | sed '/^#/ d'
		fi
	done

	echo "############################ broker ##############"
	timeout 1 mosquitto_sub -v -t 'openWB/#'
	echo "############################ storage ###############"
	df -h
	echo "############################ network ##############"
	ifconfig
	# echo "############################ smarthome.log ##############"
	# tail -200 "${RAMDISKDIR}/smarthome.log"
} >>"$debugFile"

echo "***** uploading debug log..." >>"$RAMDISKDIR/main.log"
curl --upload "$debugFile" "https://openwb.de/tools/debug2.php?debugemail=$debugEmail"

echo "***** cleanup..." >>"$RAMDISKDIR/main.log"
rm "$debugFile"

echo "***** debug log end" >>"$RAMDISKDIR/main.log"
