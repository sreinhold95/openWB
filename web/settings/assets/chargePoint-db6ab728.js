import{C as r}from"./ChargePointInstallation-fba1b24e.js";import{_ as i,u as p,k as s,l as a,D as m}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"ChargePointOpenwbPro",mixins:[r]},d={class:"charge-point-openwb-pro"};function u(o,e,_,l,f,g){const t=p("openwb-base-text-input");return s(),a("div",d,[m(t,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.chargePoint.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"])])}const B=i(c,[["render",u],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_pro/chargePoint.vue"]]);export{B as default};
