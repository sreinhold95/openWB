import{C as g}from"./index-446020d3.js";import{_,p as o,k as r,l as w,q as u,A as s,L as a,y as d,u as p,z as m}from"./vendor-c3d409a1.js";import"./vendor-fortawesome-93b6b065.js";import"./vendor-bootstrap-3e797bc8.js";import"./vendor-jquery-bf9f7728.js";import"./vendor-axios-2a1f2fc8.js";import"./vendor-sortablejs-b84c9f86.js";const f={name:"OpenwbDataProtection",mixins:[g],data(){return{mqttTopicsToSubscribe:["openWB/system/dataprotection_acknowledged"]}}},k={class:"dataProtection"},h={name:"dataProtectionForm"},v=u("iframe",{src:"dataProtection-usageTerms.html",width:"100%",height:"400px",class:"bg-light"},null,-1),B=u("hr",null,null,-1);function y(e,t,z,V,W,$){const i=o("openwb-base-button-group-input"),l=o("openwb-base-alert"),c=o("openwb-base-submit-buttons"),b=o("openwb-base-card");return r(),w("div",k,[u("form",h,[s(b,{title:"Nutzungsbedingungen & Datenschutzerklärung"},{footer:a(()=>[s(c,{formName:"dataProtectionForm",hideReset:!0,hideDefaults:!0,onSave:t[2]||(t[2]=n=>e.$emit("save"))})]),default:a(()=>[v,B,s(i,{title:"Nutzungsbedingungen",buttons:[{buttonValue:!1,text:"Ablehnen",class:"btn-outline-danger"},{buttonValue:!0,text:"Akzeptieren",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/system/usage_terms_acknowledged"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/system/usage_terms_acknowledged",n))},null,8,["model-value"]),e.$store.state.mqtt["openWB/system/usage_terms_acknowledged"]?m("v-if",!0):(r(),d(l,{key:0,subtype:"danger"},{default:a(()=>[p(" Sie müssen die Nutzungsbedingungen akzeptieren, bevor openWB eingesetzt werden kann. ")]),_:1})),s(i,{title:"Datenschutzerklärung",buttons:[{buttonValue:!1,text:"Ablehnen",class:"btn-outline-danger"},{buttonValue:!0,text:"Akzeptieren",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/system/dataprotection_acknowledged"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/system/dataprotection_acknowledged",n))},null,8,["model-value"]),e.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]?m("v-if",!0):(r(),d(l,{key:1,subtype:"warning"},{default:a(()=>[p(" Wenn sie nicht einwilligen, wird eine ggf. konfigurierte Cloud Anbindung gelöscht. Die openWB arbeitet autark wie gewohnt weiter. Fernzugriff und Remote Support sind dann nicht mehr möglich! ")]),_:1}))]),_:1})])])}const x=_(f,[["render",y],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LegalSettings.vue"]]);export{x as default};
