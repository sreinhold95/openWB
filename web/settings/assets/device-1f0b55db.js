import{D as r}from"./HardwareInstallation-a0083e3a.js";import{_ as p,u as i,k as d,l as u,D as t,N as l,y as m}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSunways",mixins:[r]},f={class:"device-sunways"};function _(e,o,v,w,b,g){const a=i("openwb-base-heading"),s=i("openwb-base-text-input");return d(),u("div",f,[t(a,null,{default:l(()=>[m(" Einstellungen für Sunways ")]),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":o[0]||(o[0]=n=>e.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(s,{title:"Passwort",subtype:"password",required:"","model-value":e.device.configuration.password,"onUpdate:modelValue":o[1]||(o[1]=n=>e.updateConfiguration(n,"configuration.password"))},null,8,["model-value"])])}const h=p(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sunways/sunways/device.vue"]]);export{h as default};
