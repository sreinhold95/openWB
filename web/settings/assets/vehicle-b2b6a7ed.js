import{_ as s,q as c,k as d,l as p,B as a,M as l,x as u}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const m={name:"VehicleSocHttp",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},h={class:"vehicle-soc-http"};function v(n,e,i,_,f,o){const r=c("openwb-base-text-input");return d(),p("div",h,[a(r,{title:"SoC URL",subtype:"url",required:"","model-value":i.vehicle.configuration.soc_url,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.soc_url"))},{help:l(()=>[u(" Es wird vom Server eine Zahl (Float mit Punkt als Dezimaltrennzeichen oder Integer) erwartet, welche den aktuellen Ladestand in Prozent (0 bis 100) zurückgibt. ")]),_:1},8,["model-value"]),a(r,{title:"Reichweiten URL",subtype:"url","model-value":i.vehicle.configuration.range_url,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.range_url"))},{help:l(()=>[u(" Es wird vom Server eine Zahl (Float mit Punkt als Dezimaltrennzeichen oder Integer) erwartet, welche die aktuelle Reichweite in Kilometern darstellt. Diese Angabe ist optional. ")]),_:1},8,["model-value"])])}const w=s(m,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/http/vehicle.vue"]]);export{w as default};
