import{_,p as n,k as m,l as b,A as t,L as u,u as r,q as f,x as g}from"./vendor-c3d409a1.js";import"./vendor-sortablejs-b84c9f86.js";const w={name:"DeviceSungrow",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-sungrow"},h={class:"small"};function x(o,e,s,q,B,i){const d=n("openwb-base-heading"),l=n("openwb-base-alert"),p=n("openwb-base-text-input"),c=n("openwb-base-number-input");return m(),b("div",v,[t(d,null,{default:u(()=>[r(" Einstellungen für Sungrow "),f("span",h,"(Modul: "+g(o.$options.name)+")",1)]),_:1}),t(l,{subtype:"info"},{default:u(()=>[r(" Bitte zur Fehlervermeidung die Firmware des Sungrow Wechselrichters und WiNet-S Dongels aktuell halten. ")]),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=a=>i.updateConfiguration(a,"configuration.ip_address"))},null,8,["model-value"]),t(c,{title:"Geräteadresse",required:"",min:1,max:255,"model-value":s.configuration.modbus_id,"onUpdate:modelValue":e[1]||(e[1]=a=>i.updateConfiguration(a,"configuration.modbus_id"))},null,8,["model-value"])])}const V=_(w,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/device.vue"]]);export{V as default};
