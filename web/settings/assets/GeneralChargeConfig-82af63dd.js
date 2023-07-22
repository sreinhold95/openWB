import{C as c}from"./index-446020d3.js";import{_ as h,p as a,k as o,l,q as u,A as s,L as r,u as i,y as _,z as f}from"./vendor-c3d409a1.js";import"./vendor-fortawesome-93b6b065.js";import"./vendor-bootstrap-3e797bc8.js";import"./vendor-jquery-bf9f7728.js";import"./vendor-axios-2a1f2fc8.js";import"./vendor-sortablejs-b84c9f86.js";const v={name:"OpenwbGeneralChargeConfig",mixins:[c],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit"]}}},w={class:"generalChargeConfig"},B={name:"generalChargeConfigForm"},C={key:0},z={key:1},k=u("br",null,null,-1);function $(n,e,W,V,S,N){const d=a("openwb-base-alert"),g=a("openwb-base-button-group-input"),m=a("openwb-base-range-input"),p=a("openwb-base-card"),b=a("openwb-base-submit-buttons");return o(),l("div",w,[u("form",B,[s(p,{title:"Allgemein"},{default:r(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(o(),l("div",C,[s(d,{subtype:"info"},{default:r(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),l("div",z,[s(g,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":e[0]||(e[0]=t=>n.updateState("openWB/general/chargemode_config/unbalanced_load",t))},{help:r(()=>[i(" Wenn diese Option aktiviert ist, werden nicht-dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen!"),k,i(' Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. siehe "Konfiguration - Ladepunkte -> elektrischer Anschluss - Phase 1" und "Konfiguration - Fahrzeuge -> Fahrzeugvorlagen" ')]),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(o(),_(m,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateState("openWB/general/chargemode_config/unbalanced_load_limit",t))},{help:r(()=>[i("Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt.")]),_:1},8,["model-value"])):f("v-if",!0)]))]),_:1}),s(b,{formName:"generalChargeConfigForm",onSave:e[2]||(e[2]=t=>n.$emit("save")),onReset:e[3]||(e[3]=t=>n.$emit("reset")),onDefaults:e[4]||(e[4]=t=>n.$emit("defaults"))})])])}const G=h(v,[["render",$],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]);export{G as default};
