import{_ as u,p as s,k as _,l as m,A as t,L as o,u as n,q as e,x as a}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const h={name:"DeviceMqttInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(i,l=void 0){this.$emit("update:configuration",{value:i,object:l})}}},b={class:"device-mqtt-inverter"},f={class:"small"},g=e("br",null,null,-1),v=e("span",{class:"text-info"},"-123",-1),w=e("br",null,null,-1),x=e("br",null,null,-1),z=e("span",{class:"text-info"},"123.45",-1);function k(i,l,r,B,I,y){const p=s("openwb-base-heading"),c=s("openwb-base-copy-to-clipboard"),d=s("openwb-base-alert");return _(),m("div",b,[t(p,null,{default:o(()=>[n(" Einstellungen für MQTT Wechselrichter "),e("span",f,"(Modul: "+a(i.$options.name)+")",1)]),_:1}),t(d,{subtype:"info"},{default:o(()=>[e("ul",null,[e("li",null,[t(c,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[n("openWB/set/pv/"+a(r.componentId)+"/get/power",1)]),_:1}),g,n(" PV-Leistung in Watt als Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen. Produzierte Leistung muss ein negatives Vorzeichen haben. (In bestimmten Konstellationen, z.B. wenn ein Hybridsystem über einen zweiten Wechselrichter geladen wird, hat die Leistung ein positives Vorzeichen.) Beispiel: "),v]),e("li",null,[t(c,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[n("openWB/set/pv/"+a(r.componentId)+"/get/exported",1)]),_:1}),w,n(" Erzeugte Energie in Wh, Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen, nur positiv"),x,n(" Beispiel: "),z])])]),_:1})])}const V=u(h,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mqtt/inverter.vue"]]);export{V as default};
