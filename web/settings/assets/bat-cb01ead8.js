import{_ as c,q as n,k as d,l as p,B as o,M as a,x as s,u,y as l}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const _={name:"DeviceSonnenbatterieBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-sonnenbatterie-bat"},b={class:"small"};function m(e,t,g,h,v,B){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:a(()=>[s(" Einstellungen für SonnenBatterie Speicher "),u("span",b,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnenbatterie/bat.vue"]]);export{x as default};
