import{_ as c,p as n,k as p,l as u,A as o,L as s,u as a,q as d,x as l}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const _={name:"DeviceSolarViewCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-solar-view-counter"},m={class:"small"};function b(e,t,g,v,w,h){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),u("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für SolarView Zähler "),d("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const V=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_view/counter.vue"]]);export{V as default};
