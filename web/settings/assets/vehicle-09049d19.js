import{_ as p,p as d,k as m,l as c,A as t,L as o,u as a,q as f,x as _}from"./vendor-c3d409a1.js";import"./vendor-sortablejs-b84c9f86.js";const g={name:"VehicleSocSmarteq",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(r,e=void 0){this.$emit("update:configuration",{value:r,object:e})}}},v={class:"vehicle-soc-smarteq"},b={class:"small"};function h(r,e,i,w,q,s){const l=d("openwb-base-heading"),u=d("openwb-base-text-input");return m(),c("div",v,[t(l,null,{default:o(()=>[a(" Einstellungen für SmartEQ SoC "),f("span",b,"(Modul: "+_(r.$options.name)+")",1)]),_:1}),t(u,{title:"Benutzername",required:"",subtype:"user","model-value":i.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.user_id"))},{help:o(()=>[a(" Der Benutzername für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),t(u,{title:"Kennwort",required:"",subtype:"password","model-value":i.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.password"))},{help:o(()=>[a(" Das Passwort für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),t(u,{title:"VIN",required:"","model-value":i.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=n=>s.updateConfiguration(n,"configuration.vin"))},{help:o(()=>[a(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const C=p(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/smarteq/vehicle.vue"]]);export{C as default};
