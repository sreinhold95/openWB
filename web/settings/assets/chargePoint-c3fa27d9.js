import{_ as c,p as u,k as p,l as _,A as n,L as l,u as t,q as e,x as s}from"./vendor-c3d409a1.js";import"./vendor-sortablejs-b84c9f86.js";const h={name:"ChargePointMqtt",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0}},methods:{updateConfiguration(a,r=void 0){this.$emit("update:configuration",{value:a,object:r})}}},g={class:"charge-point-mqtt"},f=e("br",null,null,-1),b=e("br",null,null,-1),m=e("br",null,null,-1),k=e("span",{class:"text-info"},"12.34",-1),B=e("br",null,null,-1),x=e("br",null,null,-1),v=e("span",{class:"text-info"},"1",-1),w=e("br",null,null,-1),W=e("br",null,null,-1),T=e("span",{class:"text-info"},"[6.78,6.89,6.94]",-1),P=e("br",null,null,-1),z=e("br",null,null,-1),L=e("span",{class:"text-info"},"123.45",-1),I=e("br",null,null,-1),y=e("br",null,null,-1),F=e("span",{class:"text-info"},"true",-1),A=e("br",null,null,-1),N=e("br",null,null,-1),Z=e("span",{class:"text-info"},"true",-1),D=e("br",null,null,-1),S=e("br",null,null,-1),E=e("span",{class:"text-info"},"3",-1),q=e("br",null,null,-1),M=e("br",null,null,-1),V=e("br",null,null,-1),C=e("span",{class:"text-info"},"123.45",-1),G=e("br",null,null,-1),j=e("br",null,null,-1),O=e("br",null,null,-1),J=e("span",{class:"text-info"},"123.45",-1),K=e("br",null,null,-1),Q=e("br",null,null,-1),H=e("br",null,null,-1),R=e("span",{class:"text-info"},"[230.12,231.08,232.54]",-1),U=e("br",null,null,-1),X=e("br",null,null,-1),Y=e("br",null,null,-1),$=e("span",{class:"text-info"},"[-0.87,0.96,1.0]",-1),ee=e("br",null,null,-1),te=e("br",null,null,-1),ne=e("span",{class:"text-info"},'"123654"',-1);function le(a,r,i,ie,oe,se){const d=u("openwb-base-alert"),o=u("openwb-base-copy-to-clipboard");return p(),_("div",g,[n(d,{subtype:"danger"},{default:l(()=>[t(" Dieser Ladepunkt-Typ darf nur in Kombination mit dem Simulator zur Fehleranalyse genutzt werden. Eine andere Verwendung ist laut den Nutzungsbedingungen untersagt. ")]),_:1}),n(d,{subtype:"info"},{default:l(()=>[t(" Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet, dass die Daten von speziellen Topics im Broker gelesen bzw. geschrieben werden."),f,t(" Alle Daten werden als gültiges JSON gesendet und auch so erwartet! Zahlen mit Nachkommastellen (Float) verwenden einen Punkt als Dezimaltrenner (internationales Format). "),e("ol",null,[e("li",null,[t(" von openWB gesendete Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/chargepoint/"+s(i.chargePointId)+"/set/current",1)]),_:1}),b,t(" Sollwert des Ladestroms, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),m,t(" Beispiel: "),k]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/chargepoint/"+s(i.chargePointId)+"/set/phases_to_use",1)]),_:1}),B,t(" Sollwert für die Anzahl Phasen als Ganzzahl (Integer). Mögliche Werte: 1 oder 3"),x,t(" Beispiel: "),v])])]),e("li",null,[t(" von openWB zwingend erwartete Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/currents",1)]),_:1}),w,t(" Aktuelle Phasenströme des Ladepunktes, Array mit drei Zahlen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),W,t(" Beispiel: "),T]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/power",1)]),_:1}),P,t(" Leistung in Watt, mit Nachkommastellen (Float), positiv (laden) oder negativ (entladen, falls vom Ladepunkt unterstützt)."),z,t(" Beispiel: "),L]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/plug_state",1)]),_:1}),I,t(" Zeigt an, ob aktuell ein Fahrzeug angesteckt ist, Wahrheitswert (Bool)."),y,t(" Beispiel: "),F]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/charge_state",1)]),_:1}),A,t(" Zeigt an, ob ein Ladevorgang aktiv ist, Wahrheitswert (Bool)."),N,t(" Beispiel: "),Z]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/phases_in_use",1)]),_:1}),D,t(" Anzahl der Phasen, mit denen geladen wird, Ganzzahl (Integer). Mögliche Werte: 0 bis 3"),S,t(" Beispiel: "),E])])]),e("li",null,[t(" optionale Topics "),e("ul",null,[e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/imported",1)]),_:1}),q,t(" Geladene Energie in Wh, mit Nachkommastellen (Float), nur positiv"),M,t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert."),V,t(" Beispiel: "),C]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/exported",1)]),_:1}),G,t(" Entladene Energie in Wh, mit Nachkommastellen (Float), nur positiv"),j,t(" Wird dieses Topic nicht vom Ladepunkt gesendet, so wird intern ein Zählerstand anhand der Leistung simuliert."),O,t(" Beispiel: "),J]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/voltages",1)]),_:1}),K,t(" Aktuelle Phasenspannungen des Ladepunktes, Array mit drei Zahlen (Float), nur positiv."),Q,t(" Die Spannungen werden nicht verarbeitet, sondern lediglich im Status angezeigt."),H,t(" Beispiel: "),R]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/power_factors",1)]),_:1}),U,t(" Aktuelle Leistungsfaktoren des Ladepunktes, Array mit drei Zahlen (Float), Wertebereich von -1 bis 1."),X,t(" Die Leistungsfaktoren werden nicht verarbeitet, sondern lediglich im Status angezeigt."),Y,t(" Beispiel: "),$]),e("li",null,[n(o,{class:"text-info",tooltip:"Topic kopieren"},{default:l(()=>[t(" openWB/set/chargepoint/"+s(i.chargePointId)+"/get/rfid_tag",1)]),_:1}),ee,t(" Eine Zeichenfolge, die einen eingelesenen Tag für openWB repräsentiert."),te,t(" Beispiel: "),ne])])])])]),_:1})])}const de=c(h,[["render",le],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/mqtt/chargePoint.vue"]]);export{de as default};
