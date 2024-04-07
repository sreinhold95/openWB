import{_ as r,q as u,k as p,l as m,B as n,M as c,x as _,u as f,y as b}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const g={name:"DeviceQCells",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-qcells"},x={class:"small"};function w(t,e,i,C,q,a){const s=u("openwb-base-heading"),l=u("openwb-base-text-input"),d=u("openwb-base-number-input");return p(),m("div",v,[n(s,null,{default:c(()=>[_(" Einstellungen für QCells ESS "),f("span",x,"(Modul: "+b(t.$options.name)+")",1)]),_:1}),n(l,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>a.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),n(d,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>a.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),n(d,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>a.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"])])}const y=r(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/qcells/device.vue"]]);export{y as default};
