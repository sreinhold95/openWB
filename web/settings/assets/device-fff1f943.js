import{_ as l,p as n,k as _,l as m,A as o,L as s,u as a,q as f,x as b}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"DeviceSiemensSentron",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-siemens-sentron"},h={class:"small"};function w(t,e,i,x,S,r){const d=n("openwb-base-heading"),p=n("openwb-base-alert"),u=n("openwb-base-text-input");return _(),m("div",v,[o(d,null,{default:s(()=>[a(" Einstellungen für Siemens Sentron "),f("span",h,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),o(p,{subtype:"info"},{default:s(()=>[a(' Derzeit werden nur Messgeräte vom Typ "7KM PAC2200" mit Ethernet-Schnittstelle unterstützt. ')]),_:1}),o(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=c=>r.updateConfiguration(c,"configuration.ip_address"))},null,8,["model-value"])])}const q=l(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/siemens_sentron/device.vue"]]);export{q as default};
