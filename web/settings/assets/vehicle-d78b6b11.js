import{V as s}from"./VehicleConfig-5050794d.js";import{_ as p,u,k as d,l as v,D as a,N as n,y as l}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const m={name:"VehicleSocEVCC",mixins:[s]},c={class:"vehicle-soc-evcc"};function g(e,t,x,f,h,V){const i=u("openwb-base-text-input"),r=u("openwb-base-select-input");return d(),v("div",c,[a(i,{title:"EVCC Sponsor Token",subtype:"password",required:"","model-value":e.vehicle.configuration.sponsor_token,"onUpdate:modelValue":t[0]||(t[0]=o=>e.updateConfiguration(o,"configuration.sponsor_token"))},{help:n(()=>[l(" EVCC Sponsor Token angeben, dies ist notwendig um SoC über EVCC abrufen zu können. https://sponsor.evcc.io/ ")]),_:1},8,["model-value"]),a(i,{title:"Benutzername",subtype:"text",required:"","model-value":e.vehicle.configuration.user_id,"onUpdate:modelValue":t[1]||(t[1]=o=>e.updateConfiguration(o,"configuration.user_id"))},{help:n(()=>[l(" Benutzername beim Fahrzeughersteller. ")]),_:1},8,["model-value"]),a(i,{title:"Kennwort",subtype:"password",required:"","model-value":e.vehicle.configuration.password,"onUpdate:modelValue":t[2]||(t[2]=o=>e.updateConfiguration(o,"configuration.password"))},{help:n(()=>[l(" Kennwort beim Fahrzeughersteller. ")]),_:1},8,["model-value"]),a(r,{title:"Marke",required:"",notSelected:"Bitte auswählen",options:[{value:"aiways",text:"Aiways"},{value:"audi",text:"Audi"},{value:"etron",text:"Audi e-tron"},{value:"bmw",text:"BMW"},{value:"dacia",text:"Dacia"},{value:"fiat",text:"Fiat"},{value:"ford",text:"Ford"},{value:"hyundai",text:"Hyundai"},{value:"jaguar",text:"Jaguar"},{value:"kia",text:"Kia"},{value:"landrover",text:"Landrover"},{value:"mg",text:"Mg"},{value:"mini",text:"Mini"},{value:"nissan",text:"Nissan"},{value:"carwings",text:"Nissan (Leaf pre 2019)"},{value:"ovms",text:"OVMS"},{value:"polestar",text:"Polestar"},{value:"porsche",text:"Porsche"},{value:"renault",text:"Renault"},{value:"seat",text:"Seat"},{value:"cupra",text:"Seat Cupra"},{value:"skoda",text:"Škoda"},{value:"enyaq",text:"Škoda Enyaq"},{value:"smart",text:"Smart"},{value:"smart-hello",text:"Smart-Hello"},{value:"template",text:"Template"},{value:"volvo",text:"Volvo"},{value:"volvo-connected",text:"Volvo-Connected"},{value:"vw",text:"VW"},{value:"id",text:"VW ID"}],"model-value":e.vehicle.configuration.vehicle_type,"onUpdate:modelValue":t[3]||(t[3]=o=>e.updateConfiguration(o,"configuration.vehicle_type"))},{help:n(()=>[l(" Marke aus des Fahrzeugs.")]),_:1},8,["model-value"]),a(i,{title:"VIN",subtype:"text","model-value":e.vehicle.configuration.VIN,"onUpdate:modelValue":t[4]||(t[4]=o=>e.updateConfiguration(o,"configuration.VIN"))},{help:n(()=>[l(" Fahrgestellnummer (VIN) des Fahrzeugs. Notwendig falls mehrere Fahrzeuge im Account des Herstellers vorhanden sind. ")]),_:1},8,["model-value"])])}const F=p(m,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/evcc/vehicle.vue"]]);export{F as default};
