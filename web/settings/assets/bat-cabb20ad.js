import{_ as r,q as n,k as p,l as d,B as o,M as s,x as a,u,y as l}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const _={name:"DeviceLGBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-lg-bat"},m={class:"small"};function b(e,t,g,h,v,B){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für LG ESS V1.0 Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=r(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/lg/bat.vue"]]);export{x as default};
