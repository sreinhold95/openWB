import{l as J,X,Y as Q,F,R as Y,K as ee,z as te,a4 as ne,a5 as oe,a6 as ae}from"./vendor-fortawesome-81d2adb8.js";import{_ as U,C as re}from"./index-6111949f.js";import{_ as I}from"./dynamic-import-helper-be004503.js";import{_ as B,q as c,k as l,l as g,z as h,M as o,x as a,y as f,B as n,u,a1 as j,a2 as M,I as G,A as _}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const ie={name:"WebThemeFallback",emits:["update:configuration"],props:{webTheme:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},le={class:"web-theme-fallback"},se={key:1};function ue(e,t,s,W,y,p){const m=c("openwb-base-alert"),r=c("openwb-base-textarea");return l(),g("div",le,[Object.keys(s.webTheme.configuration).length==0?(l(),h(m,{key:0,subtype:"info"},{default:o(()=>[a(' Das Web Theme "'+f(s.webTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),g("div",se,[n(m,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das Web Theme "'+f(s.webTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(r,{title:"Theme Konfiguration",subtype:"json","model-value":s.webTheme.configuration,"onUpdate:modelValue":t[0]||(t[0]=v=>p.updateConfiguration(v,"configuration"))},{help:o(()=>[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(m,{subtype:"info"},{default:o(()=>[u("pre",null,f(JSON.stringify(s.webTheme.configuration,void 0,2)),1)]),_:1})]))])}const de=B(ie,[["render",ue],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeFallback.vue"]]);J.add(X,Q);const pe={name:"OpenwbWebThemeProxy",emits:["update:configuration"],props:{webTheme:{type:Object,required:!0}},components:{FontAwesomeIcon:F},computed:{myComponent(){return console.debug(`loading web theme: ${this.webTheme.name}`),j({loader:()=>I(Object.assign({}),`./${this.webTheme.type}/webTheme.vue`),errorComponent:de})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function ge(e,t,s,W,y,p){const m=c("font-awesome-icon"),r=c("openwb-base-alert"),v=c("openwb-base-heading");return l(),g(G,null,[s.webTheme.official?(l(),h(r,{key:0,subtype:"success"},{default:o(()=>[n(m,{"fixed-width":"",icon:["fas","certificate"]}),a(' Das ausgewählte Web Theme "'+f(s.webTheme.name)+'" wird von openWB gepflegt. ',1)]),_:1})):(l(),h(r,{key:1,subtype:"info"},{default:o(()=>[n(m,{"fixed-width":"",icon:["fas","people-group"]}),a(" Das ausgewählte Theme wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. ")]),_:1})),n(v,null,{default:o(()=>[a(' Einstellungen für Web Theme "'+f(s.webTheme.name)+'" ',1)]),_:1}),(l(),h(M(p.myComponent),{webTheme:s.webTheme,"onUpdate:configuration":t[0]||(t[0]=w=>p.updateConfiguration(w))},null,40,["webTheme"]))],64)}const me=B(pe,[["render",ge],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeProxy.vue"]]),ce={name:"RippleControlReceiverConfigFallback",emits:["update:configuration"],props:{rippleControlReceiver:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},be={class:"ripple-control-receiver-fallback"},fe={key:1};function _e(e,t,s,W,y,p){const m=c("openwb-base-alert"),r=c("openwb-base-textarea");return l(),g("div",be,[Object.keys(s.rippleControlReceiver.configuration).length==0?(l(),h(m,{key:0,subtype:"info"},{default:o(()=>[a(' Das RSE-Modul "'+f(s.rippleControlReceiver.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),g("div",fe,[n(m,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das RSE-Modul "'+f(s.rippleControlReceiver.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(r,{title:"Konfiguration",subtype:"json","model-value":s.rippleControlReceiver.configuration,"onUpdate:modelValue":t[0]||(t[0]=v=>p.updateConfiguration(v,"configuration"))},{help:o(()=>[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(m,{subtype:"info"},{default:o(()=>[u("pre",null,f(JSON.stringify(s.rippleControlReceiver.configuration,void 0,2)),1)]),_:1})]))])}const he=B(ce,[["render",_e],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/OpenwbRippleControlReceiverConfigFallback.vue"]]),ve={name:"OpenwbRippleControlReceiverProxy",emits:["update:configuration","sendCommand"],props:{rippleControlReceiver:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading backup cloud: ${this.rippleControlReceiver.type}`),j({loader:()=>I(Object.assign({"./dimm_kit/ripple_control_receiver.vue":()=>U(()=>import("./ripple_control_receiver-0fec0f83.js"),["assets/ripple_control_receiver-0fec0f83.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./gpio/ripple_control_receiver.vue":()=>U(()=>import("./ripple_control_receiver-a6a97d4e.js"),["assets/ripple_control_receiver-a6a97d4e.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"])}),`./${this.rippleControlReceiver.type}/ripple_control_receiver.vue`),errorComponent:he})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)},sendCommand(e){this.$emit("sendCommand",e)}}};function we(e,t,s,W,y,p){const m=c("openwb-base-heading");return l(),g(G,null,[n(m,null,{default:o(()=>[a(' Einstellungen für RSE-Modul "'+f(s.rippleControlReceiver.name)+'" ',1)]),_:1}),(l(),h(M(p.myComponent),{rippleControlReceiver:s.rippleControlReceiver,"onUpdate:configuration":t[0]||(t[0]=r=>p.updateConfiguration(r)),onSendCommand:t[1]||(t[1]=r=>p.sendCommand(r))},null,40,["rippleControlReceiver"]))],64)}const Be=B(ve,[["render",we],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/OpenwbRippleControlReceiverProxy.vue"]]);J.add(Y,ee,te,ne,oe,ae);const We={name:"OpenwbGeneralConfigView",mixins:[re],components:{OpenwbWebThemeProxy:me,OpenwbRippleControlReceiverProxy:Be,FontAwesomeIcon:F},props:{installAssistantActive:{type:Boolean,required:!1,default:!1}},data(){return{mqttTopicsToSubscribe:["openWB/general/charge_log_data_config","openWB/general/control_interval","openWB/general/extern","openWB/general/external_buttons_hw","openWB/general/grid_protection_configured","openWB/general/http_api","openWB/general/modbus_control","openWB/general/notifications/configuration","openWB/general/notifications/plug","openWB/general/notifications/selected","openWB/general/notifications/smart_home","openWB/general/notifications/start_charging","openWB/general/notifications/stop_charging","openWB/general/price_kwh","openWB/general/range_unit","openWB/general/ripple_control_receiver/module","openWB/general/web_theme","openWB/system/configurable/ripple_control_receivers","openWB/system/configurable/web_themes","openWB/system/ip_address"]}},computed:{webThemeList:{get(){return this.$store.state.mqtt["openWB/system/configurable/web_themes"]}},webThemeGroupList:{get(){let e=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.webThemeList.forEach(t=>{t.official===!0?e[0].options.push(t):e[1].options.push(t)}),e}},rippleControlReceiverList(){return this.$store.state.mqtt["openWB/system/configurable/ripple_control_receivers"]}},methods:{getIpAddress(){return this.$store.state.mqtt["openWB/system/ip_address"]},getWebThemeDefaults(e){const t=this.webThemeList.find(s=>s.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...JSON.parse(JSON.stringify(t.defaults))}:(console.warn("no default configuration found for web theme type!",e),{})},updateSelectedWebTheme(e){this.updateState("openWB/general/web_theme",this.getWebThemeDefaults(e))},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)},getRippleControlReceiverDefaultConfiguration(e){const t=this.rippleControlReceiverList.find(s=>s.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...t.defaults}:(console.warn("no default configuration found for electricity tariff type!",e),{})},updateSelectedRippleControlReceiverModule(e){this.updateState("openWB/general/ripple_control_receiver/module",e,"type"),this.updateState("openWB/general/ripple_control_receiver/module",this.getRippleControlReceiverDefaultConfiguration(e))}}},ye={class:"generalConfig"},Se={name:"generalConfigForm"},ke=u("p",null,' Wird für den Steuerungsmodus "primary" gewählt, übernimmt diese openWB die alleinige Regelung und steuert ggf. vorhandene weitere openWB (z.B. externe openWB im Steuermodus secondary, openWB Pro, Satellit u.a.) fern. Sie werden in den Ladepunkt-Einstellungen der primary-openWB hinzugefügt. ',-1),Ve=u("p",null,[a(' Wird für den Steuerungsmodus "secondary" gewählt, übernimmt diese openWB keine Regelung und muss von einer anderen primary openWB ferngesteuert werden. Wichtig ist, dass in der secondary-openWB eine "interne openWB" mit der korrekten Bauart (= openWB-Hardwarevariante z.B. "Custom, Standard, Standard+, Duo, Buchse") konfiguriert ist. Bei einer Duo sind zwei "interne openWB" zu konfigurieren. Im "secondary"-Modus bleiben alle ausgeblendeten Einstellungen unbeachtet.'),u("br"),a(" Eine bebilderte Anleitung zur Konfiguration der Ladepunkte findest Du auf der "),u("a",{href:"https://openwb.de/main/?page_id=1025",target:"_blank",rel:"noopener noreferrer"}," Homepage "),a(". ")],-1),Ce={key:0},Re=u("a",{href:"https://openwb.de/main/wp-content/uploads/2023/10/ModbusTCP-openWB-series2-Pro-1.pdf",target:"_blank",rel:"noopener noreferrer"}," hier ",-1),Te={key:1},qe={key:1},$e=u("p",null," Mit der HTTP-API kann man den Wert eines MQTT-Topics per HTTPs (Port 8443) abfragen oder neu setzen. Topics können über GET oder POST abgefragt, neue Werte nur mit POST gesetzt werden. ",-1),ze=u("p",null," Beispiel 1: Abfrage des aktuellen Systemzeitstempels ",-1),De=u("br",null,null,-1),Oe=u("br",null,null,-1),Ee=u("p",null," Die zurückgegebenen Daten sind im JSON-Format. Der Inhalt ist nach folgendem Schema aufgebaut: ",-1),xe={class:"border border-info w-100 p-1"},Ne=u("p",null,' Im Fehlerfall wird der Status auf "failed" gesetzt und eine Fehlermeldung zurückgegeben. ',-1),Ae=u("p",null,"Beispiel 2: integriertes Display abschalten",-1),Le=u("br",null,null,-1),Pe=u("p",null," Die zurückgegebenen Daten sind im JSON-Format. Der Inhalt ist nach folgendem Schema aufgebaut: ",-1),Ue={class:"border border-info w-100 p-1"},Je={key:0},Fe={key:1},Ie={key:0},je=u("br",null,null,-1),Me=u("span",{class:"text-danger"},' Nicht nur die Regelung der PV geführten Ladung, sondern auch die Ladestromänderung, beispielsweise “Stop“ etc., werden dann nur noch in diesem Intervall ausgeführt. Die Regelung wird insgesamt träger. Solange es keinen triftigen Grund gibt, sollte "Normal" gewählt werden. ',-1),Ge=u("br",null,null,-1),Ke=u("span",{class:"text-danger"}," Die Option ist nur aktiv, wenn der EVU-Zähler die Frequenz übermittelt. ",-1),He=u("hr",null,null,-1),Ze={key:2},Xe={key:0},Qe={key:0},Ye={key:1},et={key:0},tt={key:0},nt={key:1};function ot(e,t,s,W,y,p){const m=c("openwb-base-alert"),r=c("openwb-base-button-group-input"),v=c("openwb-base-copy-to-clipboard"),w=c("openwb-base-card"),S=c("openwb-base-heading"),k=c("openwb-base-select-input"),K=c("openwb-ripple-control-receiver-proxy"),H=c("openwb-web-theme-proxy"),b=c("font-awesome-icon"),Z=c("openwb-base-submit-buttons");return l(),g("div",ye,[u("form",Se,[n(w,{title:"Steuerungsmodus"},{default:o(()=>[n(m,{subtype:"info"},{default:o(()=>[ke,Ve]),_:1}),n(r,{title:"Steuerungsmodus",buttons:[{buttonValue:!1,text:"primary",class:"btn-outline-danger"},{buttonValue:!0,text:"secondary",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/extern"],"onUpdate:modelValue":t[0]||(t[0]=d=>e.updateState("openWB/general/extern",d))},null,8,["model-value"]),s.installAssistantActive?_("",!0):(l(),g("div",Ce,[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),h(r,{key:0,title:"Steuerung über Modbus als secondary",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/modbus_control"],"onUpdate:modelValue":t[1]||(t[1]=d=>e.updateState("openWB/general/modbus_control",d))},{help:o(()=>[a(" Im secondary-Modus kann die openWB über die Modbus-Schnittstelle gesteuert werden. Die Register sind "),Re,a(" dokumentiert. Bei aktivierter Modbus-Schnittstelle darf die openWB nicht von einer primary-openWB gesteuert werden. ")]),_:1},8,["model-value"])):_("",!0),e.$store.state.mqtt["openWB/general/extern"]===!0&&e.$store.state.mqtt["openWB/general/modbus_control"]!==!0?(l(),g("div",Te,[n(m,{subtype:"info"},{default:o(()=>[a(' Wenn die Steuerung über Modbus auf "Aus" geändert wird, muss danach ein Neustart durchgeführt werden! ')]),_:1})])):_("",!0)])),s.installAssistantActive?_("",!0):(l(),g("div",qe,[n(r,{title:"HTTP-API",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/http_api"],"onUpdate:modelValue":t[2]||(t[2]=d=>e.updateState("openWB/general/http_api",d))},{help:o(()=>[$e,ze,u("ul",null,[u("li",null,[a(" GET-Request:"),De,n(v,{class:"text-info",tooltip:"URL kopieren"},{default:o(()=>[a(" https://"+f(p.getIpAddress())+":8443/v1/?topic=openWB/system/time ",1)]),_:1})]),u("li",null,[a(" POST-Request über 'curl' mit privatem SSL-Zertifikat und Verarbeitung durch 'jq':"),Oe,n(v,{class:"text-info",tooltip:"Befehl kopieren"},{default:o(()=>[a(` curl -k -s -X POST --data '{"topic":"openWB/system/time"}' https://`+f(p.getIpAddress())+":8443/v1/ | jq . ",1)]),_:1})])]),Ee,u("pre",xe,f(JSON.stringify({status:"success",topic:"openWB/system/time",message:1721287000646975e-6},null,4)),1),Ne,Ae,u("ul",null,[u("li",null,[a(" POST-Request über 'curl' mit privatem SSL-Zertifikat und Verarbeitung durch 'jq':"),Le,n(v,{class:"text-info",tooltip:"Befehl kopieren"},{default:o(()=>[a(` curl -k -s -X POST --data '{"topic": "openWB/set/optional/int_display/active", "message": false}' https://`+f(p.getIpAddress())+":8443/v1/ | jq . ",1)]),_:1})])]),Pe,u("pre",Ue,f(JSON.stringify({status:"success",topic:"openWB/set/optional/int_display/active",message:!1},null,4)),1)]),_:1},8,["model-value"])]))]),_:1}),n(w,{title:"Hardware"},{default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),g("div",Je,[n(m,{subtype:"info"},{default:o(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):_("",!0),s.installAssistantActive?_("",!0):(l(),g("div",Fe,[e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("div",Ie,[n(r,{title:"Geschwindigkeit Regelintervall",buttons:[{buttonValue:10,text:"Normal",class:"btn-outline-success"},{buttonValue:20,text:"Langsam",class:"btn-outline-warning"},{buttonValue:60,text:"Sehr Langsam",class:"btn-outline-danger"}],"model-value":e.$store.state.mqtt["openWB/general/control_interval"],"onUpdate:modelValue":t[3]||(t[3]=d=>e.updateState("openWB/general/control_interval",d))},{help:o(()=>[a(' Sollten Probleme oder Fehlermeldungen auftauchen, stelle bitte zunächst das Regelintervall auf "Normal". Werden Module genutzt, welche z.B. eine Online-API zur Abfrage nutzen (höhere Latenzzeiten) oder möchte man weniger Regeleingriffe, so kann man das Regelintervall auf "Langsam" (20 Sekunden) herabsetzen. Die Einstellung „Sehr Langsam“ führt zu einer Regelzeit von 60 Sekunden.'),je,Me]),_:1},8,["model-value"]),n(r,{title:"Netzschutz",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/grid_protection_configured"],"onUpdate:modelValue":t[4]||(t[4]=d=>e.updateState("openWB/general/grid_protection_configured",d))},{help:o(()=>[a(' Diese Option ist standardmäßig aktiviert und sollte so belassen werden. Bei Unterschreitung einer kritischen Frequenz des Stromnetzes wird die Ladung nach einer zufälligen Zeit zwischen 1 und 90 Sekunden pausiert. Der Lademodus wechselt auf "Stop". Sobald die Frequenz wieder in einem normalen Bereich ist wird automatisch der zuletzt gewählte Lademodus wieder aktiviert. Ebenso wird die Ladung bei Überschreiten von 51,8 Hz unterbrochen. Dies ist dann der Fall, wenn der Energieversorger Wartungsarbeiten am (Teil-)Netz durchführt und auf einen vorübergehenden Generator-Betrieb umschaltet. Die Erhöhung der Frequenz wird durchgeführt, um die PV Anlagen abzuschalten.'),Ge,Ke]),_:1},8,["model-value"])])):_("",!0),He])),e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("div",Ze,[n(S,{class:"mt-0"},{default:o(()=>[a(" Steuerbare Verbrauchseinrichtung ")]),_:1}),n(m,{sub_type:"info"},{default:o(()=>[a(' Aktuell unterstützt openWB die eingehende Steuerung als "Steuerbare Verbrauchseinrichtung" nur über potentialfreie Kontakte (Rundsteuerempfänger, RSE). Ebenfalls können derzeit bei Auslösung des RSE nur alle Ladevorgänge komplett beendet werden. Die Unterstützung von "Dimmung" im Sinne von §14a EnWG wird umgesetzt, sobald wir weitere Informationen von den Netzbetreibern erhalten, wie die Ansteuerung technisch umgesetzt wird. ')]),_:1}),n(k,{class:"mb-2",title:"Anbindung RSE-Kontakt",options:p.rippleControlReceiverList,"model-value":e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"]?e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"].type:"","onUpdate:modelValue":t[5]||(t[5]=d=>p.updateSelectedRippleControlReceiverModule(d))},null,8,["options","model-value"]),e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"]&&e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"].type?(l(),g("div",Xe,[n(K,{rippleControlReceiver:e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"],"onUpdate:configuration":t[6]||(t[6]=d=>p.updateConfiguration("openWB/general/ripple_control_receiver/module",d))},null,8,["rippleControlReceiver"])])):_("",!0)])):_("",!0)]),_:1}),s.installAssistantActive?_("",!0):(l(),h(w,{key:0,title:"Darstellung"},{default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),g("div",Qe,[n(m,{subtype:"info"},{default:o(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),g("div",Ye,[n(S,{class:"mt-0"},{default:o(()=>[a(" Hauptseite ")]),_:1}),e.$store.state.mqtt["openWB/general/web_theme"]!==void 0?(l(),g("div",et,[n(k,{class:"mb-2",title:"Theme",groups:p.webThemeGroupList,"model-value":e.$store.state.mqtt["openWB/general/web_theme"].type,"onUpdate:modelValue":t[7]||(t[7]=d=>p.updateSelectedWebTheme(d))},null,8,["groups","model-value"]),e.$store.state.mqtt["openWB/general/web_theme"].type?(l(),h(H,{key:0,webTheme:e.$store.state.mqtt["openWB/general/web_theme"],"onUpdate:configuration":t[8]||(t[8]=d=>p.updateConfiguration("openWB/general/web_theme",d))},null,8,["webTheme"])):_("",!0)])):_("",!0)]))]),_:1})),s.installAssistantActive?_("",!0):(l(),h(w,{key:1,title:"Lade-Log"},{default:o(()=>{var d,V,C,R,T,q,$,z,D,O,E,x,N,A,L,P;return[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),g("div",tt,[n(m,{subtype:"info"},{default:o(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),g("div",nt,[n(r,{title:"Einheit für Entfernungen","model-value":e.$store.state.mqtt["openWB/general/range_unit"],"onUpdate:modelValue":t[9]||(t[9]=i=>e.updateState("openWB/general/range_unit",i)),buttons:[{buttonValue:"km",text:"Kilometer"},{buttonValue:"mi",text:"Meilen"}]},null,8,["model-value"]),n(S,null,{default:o(()=>[a(" Auswahl der Datenfelder ")]),_:1}),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(d=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:d.time_begin,"onUpdate:modelValue":t[10]||(t[10]=i=>e.updateState("openWB/general/charge_log_data_config",i,"time_begin"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","calendar"]}),a(" Beginn ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(V=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:V.time_end,"onUpdate:modelValue":t[11]||(t[11]=i=>e.updateState("openWB/general/charge_log_data_config",i,"time_end"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","calendar"]}),a(" Ende ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(C=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:C.time_time_charged,"onUpdate:modelValue":t[12]||(t[12]=i=>e.updateState("openWB/general/charge_log_data_config",i,"time_time_charged"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","clock"]}),a(" Dauer ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(R=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:R.data_costs,"onUpdate:modelValue":t[13]||(t[13]=i=>e.updateState("openWB/general/charge_log_data_config",i,"data_costs"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","coins"]}),a(" Kosten ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(T=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:T.data_power_source,"onUpdate:modelValue":t[14]||(t[14]=i=>e.updateState("openWB/general/charge_log_data_config",i,"data_power_source"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","pie-chart"]}),a(" Energieaufteilung ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(q=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:q.vehicle_name,"onUpdate:modelValue":t[15]||(t[15]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_name"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" Name ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":($=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:$.vehicle_chargemode,"onUpdate:modelValue":t[16]||(t[16]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_chargemode"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" Lademodus ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(z=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:z.vehicle_prio,"onUpdate:modelValue":t[17]||(t[17]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_prio"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" Priorität ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(D=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:D.vehicle_rfid,"onUpdate:modelValue":t[18]||(t[18]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_rfid"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" ID-Tag ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(O=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:O.vehicle_soc_at_start,"onUpdate:modelValue":t[19]||(t[19]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_soc_at_start"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" SoC bei Ladebeginn ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(E=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:E.vehicle_soc_at_end,"onUpdate:modelValue":t[20]||(t[20]=i=>e.updateState("openWB/general/charge_log_data_config",i,"vehicle_soc_at_end"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","car"]}),a(" SoC bei Ladende ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(x=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:x.chargepoint_name,"onUpdate:modelValue":t[21]||(t[21]=i=>e.updateState("openWB/general/charge_log_data_config",i,"chargepoint_name"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),a(" Name ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(N=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:N.chargepoint_serial_number,"onUpdate:modelValue":t[22]||(t[22]=i=>e.updateState("openWB/general/charge_log_data_config",i,"chargepoint_serial_number"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),a(" Seriennummer ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(A=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:A.data_imported_since_mode_switch,"onUpdate:modelValue":t[23]||(t[23]=i=>e.updateState("openWB/general/charge_log_data_config",i,"data_imported_since_mode_switch"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),a(" Geladene Energie ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(L=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:L.chargepoint_imported_at_start,"onUpdate:modelValue":t[24]||(t[24]=i=>e.updateState("openWB/general/charge_log_data_config",i,"chargepoint_imported_at_start"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),a(" Zählerstand bei Ladebeginn ")]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(P=e.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:P.chargepoint_imported_at_end,"onUpdate:modelValue":t[25]||(t[25]=i=>e.updateState("openWB/general/charge_log_data_config",i,"chargepoint_imported_at_end"))},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),a(" Zählerstand bei Ladeende ")]),_:1},8,["model-value"])]))]}),_:1})),n(Z,{formName:"generalConfigForm",onSave:t[26]||(t[26]=d=>e.$emit("save")),onReset:t[27]||(t[27]=d=>e.$emit("reset")),onDefaults:t[28]||(t[28]=d=>e.$emit("defaults"))})])])}const gt=B(We,[["render",ot],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralConfig.vue"]]);export{gt as default};
