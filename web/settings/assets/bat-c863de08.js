import{_ as d,p as n,k as c,l as p,A as o,L as s,u as a,q as u,x as l}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const _={name:"DeviceStuderBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-studer-bat"},m={class:"small"};function b(e,t,g,h,v,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return c(),p("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für Studer Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=d(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/studer/bat.vue"]]);export{x as default};
