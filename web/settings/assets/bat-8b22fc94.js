import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const _={name:"DeviceSiemensBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},m={class:"device-siemens-bat"},f={class:"small"};function b(e,t,g,h,v,B){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",m,[o(i,null,{default:s(()=>[a(" Einstellungen für Siemens Batteriespeicher "),u("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/siemens/bat.vue"]]);export{x as default};
