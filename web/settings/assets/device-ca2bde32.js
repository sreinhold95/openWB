import{D as p}from"./HardwareInstallation-a0083e3a.js";import{_ as d,u as t,k as u,l,D as i,N as m,y as _}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceFoxEss",mixins:[p]},f={class:"device-fox_ess"};function b(e,o,v,g,x,w){const s=t("openwb-base-heading"),a=t("openwb-base-text-input"),r=t("openwb-base-number-input");return u(),l("div",f,[i(s,null,{default:m(()=>[_("Einstellungen für FoxEss")]),_:1}),i(a,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":o[0]||(o[0]=n=>e.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(r,{title:"Port",required:"",min:1,max:65535,"model-value":e.device.configuration.port,"onUpdate:modelValue":o[1]||(o[1]=n=>e.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])])}const q=d(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fox_ess/fox_ess/device.vue"]]);export{q as default};
