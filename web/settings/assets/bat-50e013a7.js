import{_ as c,q as n,k as p,l as d,B as o,M as s,x as a,u,y as _}from"./vendor-f0f38b48.js";import"./vendor-sortablejs-cbf37f8f.js";const l={name:"DeviceZCSBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-azzurro_zcs"},m={class:"small"};function b(e,t,g,h,v,z){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für Azzurro ZCS Batteriespeicher "),u("span",m,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/azzurro_zcs/bat.vue"]]);export{$ as default};
