import{C as d}from"./HardwareInstallation-a0083e3a.js";import{_ as c,u as n,k as m,l as u,D as r,N as i,y as e,x as l}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceDiscovergyInverter",mixins:[d]},v={class:"device-discovergy-inverter"},f=l("a",{href:"https://api.discovergy.com/public/v1/meters",target:"_blank",rel:"noopener noreferrer"}," https://api.discovergy.com/public/v1/meters ",-1);function g(o,t,b,h,w,x){const s=n("openwb-base-heading"),a=n("openwb-base-text-input");return m(),u("div",v,[r(s,null,{default:i(()=>[e(" Einstellungen für Discovergy Wechselrichter ")]),_:1}),r(a,{title:"Meter-ID",required:"","model-value":o.component.configuration.meter_id,"onUpdate:modelValue":t[0]||(t[0]=p=>o.updateConfiguration(p,"configuration.meter_id"))},{help:i(()=>[e(" Um die ID herauszufinden mit dem Browser die Adresse "),f,e(" aufrufen und dort Benutzername und Passwort eingeben. Hier wird nun u.a. die ID des Zählers angezeigt. ")]),_:1},8,["model-value"])])}const z=c(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/discovergy/inverter.vue"]]);export{z as default};
