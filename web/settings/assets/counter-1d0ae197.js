import{C as s}from"./HardwareInstallation-775406e1.js";import{_ as d,u as r,k as m,l as g,G as t,E as l,y as u}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceVZLoggerCounter",mixins:[s]},_={class:"device-vzlogger-counter"};function c(n,e,b,v,w,Z){const a=r("openwb-base-heading"),p=r("openwb-base-alert"),i=r("openwb-base-number-input");return m(),g("div",_,[t(a,null,{default:l(()=>e[3]||(e[3]=[u(" Einstellungen für VZLogger Zähler ")])),_:1}),t(p,{subtype:"info"},{default:l(()=>e[4]||(e[4]=[u(' Bitte auf der Shell ausführen: "curl -s IPdesVZLogger:Port | jq .|cat -n" Zählen, in welcher Zeile der gesuchte Wert steht. Bei der ersten Zeile mit 1 anfangen zu zählen. ')])),_:1}),t(i,{title:"Zeile der Leistung",required:"",min:0,"model-value":n.component.configuration.line_power,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.line_power"))},null,8,["model-value"]),t(i,{title:"Zeile der Einspeisung",min:0,"model-value":n.component.configuration.line_exported,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o,"configuration.line_exported"))},null,8,["model-value"]),t(i,{title:"Zeile des Bezugs",min:0,"model-value":n.component.configuration.line_imported,"onUpdate:modelValue":e[2]||(e[2]=o=>n.updateConfiguration(o,"configuration.line_imported"))},null,8,["model-value"])])}const x=d(f,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/vzlogger/vzlogger/counter.vue"]]);export{x as default};
