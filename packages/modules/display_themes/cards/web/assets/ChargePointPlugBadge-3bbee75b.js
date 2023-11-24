import{o as n,e as h,i as m,F as P,A as y,z as _,j as x,Q as C,l as d,n as w,p as S,s as v,x as u}from"./vendor-caccd77e.js";import{_ as p}from"./vendor-inkline-7939cbce.js";import{u as k}from"./index-9556a549.js";import{l as N,j as b,k as B,m as D,F as I}from"./vendor-fortawesome-63041232.js";const l={props:{data:{required:!1,type:Array},socData:{required:!1,type:Array},width:{Number,default:250},height:{Number,default:70},gap:{Number,default:3},stroke:{Number,default:3},min:{Number,default:0},max:{Number,default:1},color:{String,default:"var(--color--primary)"},colorNegative:{String,default:void 0}},computed:{highestPoint(){return Math.max(1,this.max,...this.slicedData)},lowestPoint(){return Math.min(0,this.min,...this.slicedData)},maxPoints(){return Math.floor(this.width/(this.stroke+this.gap))},slicedData(){if(this.data)return this.data.slice(-this.maxPoints)},slicedSocData(){if(this.socData)return this.socData.slice(-this.maxPoints)},zeroHeight(){return this.height-(0-this.lowestPoint)/(this.highestPoint-this.lowestPoint)*this.height},coordinates(){if(this.data)return this.calculateCoordinates(this.slicedData,this.lowestPoint,this.highestPoint)},socCoordinates(){if(this.socData)return this.calculateCoordinates(this.slicedSocData,0,100)},bars(){if(this.coordinates){const t=[];return this.coordinates.forEach(s=>{const e=s.x,r=s.y,o=this.stroke,a=Math.min(r,this.zeroHeight),i=Math.abs(r-this.zeroHeight),c=r>this.zeroHeight;t.push({x:e,y:a,width:o,height:i,negative:c})}),t}},socPath(){if(this.socCoordinates&&this.socCoordinates.length>0){let s=this.socCoordinates.slice(0,1)[0],e=this.socCoordinates.slice(-1)[0];var t=`M 0,${this.height}`;return t+=` L 0,${s.y}`,this.socCoordinates.forEach(r=>{t+=` L ${r.x+this.stroke/2},${r.y}`}),t+=` L ${e.x+this.stroke},${e.y} L ${e.x+this.stroke},${this.height} Z`,t}}},methods:{calculateCoordinates(t,s,e){const r=[];return t.forEach((o,a)=>{const i=a*this.width/this.maxPoints+1,c=this.height-(o-s)/(e-s)*this.height;r.push({x:i,y:c})}),r}}},g=()=>{C(t=>({"fc7172b1-color":t.color,"fc7172b1-colorNegative":t.colorNegative}))},f=l.setup;l.setup=f?(t,s)=>(g(),f(t,s)):g;const z=["viewBox"],q=["d"],M=["x","y","width","height"],L=["y1","x2","y2"];function A(t,s,e,r,o,a){return n(),h("svg",{class:"spark-line",viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",preserveAspectRatio:"xMinYMin"},[e.socData?(n(),h("path",{key:0,class:"soc-path",d:a.socPath},null,8,q)):m("v-if",!0),(n(!0),h(P,null,y(a.bars,i=>(n(),h("rect",{key:i.x,x:i.x,y:i.y,width:i.width,height:i.height,class:_(e.colorNegative&&i.negative?"negative":"")},null,10,M))),128)),x("line",{class:"zero-line",x1:0,y1:a.zeroHeight,x2:e.width,y2:a.zeroHeight},null,8,L)],8,z)}const Q=p(l,[["render",A],["__scopeId","data-v-fc7172b1"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/SparkLine.vue"]]);N.add(b,B,D);const E={name:"ChargePointStateBadge",props:{chargePointId:{required:!0,type:Array}},data(){return{mqttStore:k()}},components:{FontAwesomeIcon:I},computed:{plugState(){var t=!1;return this.chargePointId.forEach(s=>{t|=this.mqttStore.getChargePointPlugState(s)}),t},chargeState(){var t=!1;return this.chargePointId.forEach(s=>{t|=this.mqttStore.getChargePointChargeState(s)}),t},stateIcon(){return this.plugState?this.chargeState?["fas","fa-plug-circle-bolt"]:["fas","fa-plug-circle-check"]:["fas","fa-plug-circle-xmark"]},stateClass(){return this.plugState?this.chargeState?"_color:success":"_color:warning":"_color:gray"}}},H={key:0,class:"_padding-left:1"};function $(t,s,e,r,o,a){const i=d("font-awesome-icon"),c=d("i-badge");return n(),w(c,{size:"lg"},{default:S(()=>[v(i,{"fixed-width":"",icon:a.stateIcon,class:_(a.stateClass)},null,8,["icon","class"]),a.plugState?(n(),h("span",H,u(o.mqttStore.getChargePointImportedSincePlugged(e.chargePointId).energy)+" / "+u(o.mqttStore.getChargePointImportedSincePlugged(e.chargePointId).range),1)):m("v-if",!0)]),_:1})}const R=p(E,[["render",$],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/ChargePointPlugBadge.vue"]]);export{R as C,Q as S};
