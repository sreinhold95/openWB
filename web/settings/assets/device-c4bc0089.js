import{_ as u,p as o,k as p,l as c,A as n,L as l,u as _,q as m,x as f}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"DeviceKostalSEM",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-kostal-sem"},b={class:"small"};function h(t,e,s,x,w,a){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return p(),c("div",v,[n(i,null,{default:l(()=>[_(" Einstellungen für Kostal Smart Energy Meter oder TQ EM 410 "),m("span",b,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>a.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const y=u(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_sem/device.vue"]]);export{y as default};
