import{_ as r,p as o,k as p,l as c,A as a,L as m,u as _,q as f,x as b}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const v={name:"DeviceOpenwbFlexCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-openwb-flex-counter"},x={class:"small"};function w(n,e,i,M,h,u){const s=o("openwb-base-heading"),l=o("openwb-base-select-input"),d=o("openwb-base-number-input");return p(),c("div",g,[a(s,null,{default:m(()=>[_(" Einstellungen für openWB-Flex Zähler "),f("span",x,"(Modul: "+b(n.$options.name)+")",1)]),_:1}),a(l,{title:"Zählermodell",notSelected:"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"Lovato"},{value:2,text:"SDM630/SDM72D-M"}],"model-value":i.configuration.version,"onUpdate:modelValue":e[0]||(e[0]=t=>u.updateConfiguration(t,"configuration.version"))},null,8,["model-value"]),a(d,{title:"Modbus-ID",required:"",min:1,max:255,"model-value":i.configuration.id,"onUpdate:modelValue":e[1]||(e[1]=t=>u.updateConfiguration(t,"configuration.id"))},null,8,["model-value"])])}const D=r(v,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_flex/counter.vue"]]);export{D as default};
