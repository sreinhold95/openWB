import{_ as c,p as t,k as p,l as u,A as o,L as s,u as a,q as d,x as _}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const l={name:"DeviceSunnyBoyBatSmartEnergy",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},m={class:"device-sunnyboy-bat-smart-energy"},b={class:"small"};function f(e,n,g,y,h,v){const r=t("openwb-base-heading"),i=t("openwb-base-alert");return p(),u("div",m,[o(r,null,{default:s(()=>[a(" Einstellungen für SMA Sunny Boy Smart Energy Batteriespeicher "),d("span",b,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const S=c(l,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/bat_smart_energy.vue"]]);export{S as default};
