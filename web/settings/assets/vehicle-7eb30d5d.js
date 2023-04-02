import{_ as c,p as u,k as p,l as m,A as o,L as i,u as a,q as _,x as h}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"VehicleSocHttp",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},f={class:"vehicle-soc-http"},v={class:"small"};function b(t,e,r,w,k,l){const d=u("openwb-base-heading"),s=u("openwb-base-text-input");return p(),m("div",f,[o(d,null,{default:i(()=>[a(" Einstellungen für HTTP SoC "),_("span",v,"(Modul: "+h(t.$options.name)+")",1)]),_:1}),o(s,{title:"SoC URL",subtype:"url",required:"","model-value":r.configuration.soc_url,"onUpdate:modelValue":e[0]||(e[0]=n=>l.updateConfiguration(n,"configuration.soc_url"))},{help:i(()=>[a(" Es wird vom Server eine Zahl (Float mit Punkt als Dezimaltrennzeichen oder Integer) erwartet, welche den aktuellen Ladestand in Prozent (0 bis 100) zurückgibt. ")]),_:1},8,["model-value"]),o(s,{title:"Reichweiten URL",subtype:"url","model-value":r.configuration.range_url,"onUpdate:modelValue":e[1]||(e[1]=n=>l.updateConfiguration(n,"configuration.range_url"))},{help:i(()=>[a(" Es wird vom Server eine Zahl (Float mit Punkt als Dezimaltrennzeichen oder Integer) erwartet, welche die aktuelle Reichweite in Kilometern darstellt. Diese Angabe ist optional. ")]),_:1},8,["model-value"])])}const z=c(g,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/http/vehicle.vue"]]);export{z as default};
