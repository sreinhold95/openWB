import{D as a}from"./HardwareInstallation-a0083e3a.js";import{_ as p,u as t,k as d,l,D as n,N as c,y as _}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const m={name:"DeviceSolarWorld",mixins:[a]},u={class:"device-solar_world"};function f(e,o,v,b,w,g){const i=t("openwb-base-heading"),s=t("openwb-base-text-input");return d(),l("div",u,[n(i,null,{default:c(()=>[_(" Einstellungen für SolarWorld ")]),_:1}),n(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":o[0]||(o[0]=r=>e.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const W=p(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_world/solar_world/device.vue"]]);export{W as default};
