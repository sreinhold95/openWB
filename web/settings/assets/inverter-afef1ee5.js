import{_ as c,q as n,k as d,l,B as o,M as s,x as a,u as p,y as u}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const _={name:"DeviceSolarLogInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-solar_log-inverter"},m={class:"small"};function g(e,t,b,v,h,w){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),l("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für Solar-Log Wechselrichter "),p("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_log/inverter.vue"]]);export{B as default};
