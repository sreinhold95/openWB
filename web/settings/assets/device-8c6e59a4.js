import{_ as m,q as s,k as c,l as g,B as n,M as d,x as r,u as _,y as b}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const f={name:"DeviceSolax",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solax"},x={class:"small"};function h(o,e,i,w,B,a){const l=s("openwb-base-heading"),p=s("openwb-base-text-input"),u=s("openwb-base-number-input");return c(),g("div",v,[n(l,null,{default:d(()=>[r(" Einstellungen für Solax "),_("span",x,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),n(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=t=>a.updateConfiguration(t,"configuration.ip_address"))},null,8,["model-value"]),n(u,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=t=>a.updateConfiguration(t,"configuration.port"))},null,8,["model-value"]),n(u,{title:"Modbus-ID",required:"",min:0,max:255,"model-value":i.configuration.modbus_id,"onUpdate:modelValue":e[2]||(e[2]=t=>a.updateConfiguration(t,"configuration.modbus_id"))},{help:d(()=>[r(" Laut der Schnittstellenbeschreibung ist die ID bei Solax ab Werk auf 1 gesetzt. Entgegen der Beschreibung ist meist für Gen4 eine ID größer als 2 eingestellt. Bei Gen3 sogar (gegen jeglicher Modbus Standards) eine 0. ")]),_:1},8,["model-value"])])}const S=m(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solax/device.vue"]]);export{S as default};
