import{_ as c,p as t,k as p,l as m,A as o,L as i,u as s,q as _,x as f}from"./vendor-8521f8a3.js";import"./vendor-sortablejs-5d1612dc.js";const g={name:"DeviceSungrowCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},b={class:"device-sungrow-counter"},v={class:"small"};function h(n,e,a,w,S,r){const u=t("openwb-base-heading"),d=t("openwb-base-select-input");return p(),m("div",b,[o(u,null,{default:i(()=>[s(" Einstellungen für Sungrow Zähler "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(d,{title:"Version",options:[{value:0,text:"SH (Hybrid)"},{value:1,text:"SG (kein Hybrid)"},{value:2,text:"SG (kein Hybrid) mit WiNet Dongle"}],"model-value":a.configuration.version,"onUpdate:modelValue":e[0]||(e[0]=l=>r.updateConfiguration(l,"configuration.version"))},{help:i(()=>[s(" Die Variante SH ist nur über die LAN-IP mit openWB nutzbar. Hierzu hinter dem WiNet-S Dongle den Lan Anschluss nutzen. Den WiNet-S Dongle zusätzlich ins Heimnetz (per Lan oder Wlan) einbinden, um ISolarCloud nutzen zu können. ")]),_:1},8,["options","model-value"])])}const D=c(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/counter.vue"]]);export{D as default};
