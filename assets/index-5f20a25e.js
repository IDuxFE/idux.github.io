import{d as x,i as b,c as o,f as u,br as A,bk as V,$ as _,af as G,au as C,b8 as j,c4 as q,q as R,at as X,as as D,a5 as Y}from"./index-068e057b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=Symbol("progressContext");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=100;function L(s){return!s||s<0?0:s>S?S:s}const N=s=>{const t=[];return Object.keys(s).forEach(e=>{const n=parseFloat(e.replace(/%/g,""));isNaN(n)||t.push({key:n,value:s[e]})}),t.sort((e,n)=>e.key-n.key)},H=(s,t)=>{const{from:e=t?getComputedStyle(t).getPropertyValue("--ix-color-primary"):"#1c6eff",to:n=t?getComputedStyle(t).getPropertyValue("--ix-color-primary"):"#1c6eff",direction:l="to right",...a}=s;if(Object.keys(a).length!==0){const c=N(a).map(({key:i,value:v})=>`${v} ${i}%`).join(", ");return`linear-gradient(${l}, ${c})`}return`linear-gradient(${l}, ${e}, ${n})`},K=s=>N(s).map(({key:t,value:e})=>({offset:`${t}%`,color:e}));/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=x({setup(s,{slots:t}){const{props:e,config:n,mergedPrefixCls:l,status:a,percent:c,successPercent:i}=b(P),v=o(()=>{var d;return(d=e.format)!=null?d:n.format}),f=o(()=>v.value(c.value,i.value)),h=o(()=>a.value==="success"||a.value==="normal"&&c.value===S),p=o(()=>a.value==="exception"),k=o(()=>A(e.format)||!(h.value||p.value)),m=o(()=>{var d,$;return($=(d=e.icons)==null?void 0:d.success)!=null?$:n.icon.success}),r=o(()=>{var d,$;return($=(d=e.icons)==null?void 0:d.exception)!=null?$:n.icon.exception}),y=()=>{if(k.value)return f.value;const d=l.value;return h.value&&m.value?T(m.value,`${d}-success-icon`):p.value&&r.value?T(r.value,`${d}-exception-icon`):null};return()=>{var $;if(e.hideInfo)return null;const d=($=t.format)!=null?$:t.default;return u("div",{class:`${l.value}-info`},[d?d({percent:c.value,successPercent:i.value}):y()])}}});function T(s,t){return V(s)?u(_,{class:t,name:s},null):s}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=6,Q=x({name:"IxProgressCircle",setup(s,{slots:t}){const{props:e,mergedPrefixCls:n,mergedStrokeLinecap:l,percent:a,successPercent:c}=b(P),i=o(()=>`${n.value}-circle`),v=o(()=>C(e.strokeWidth,J)),f=o(()=>j(e.strokeColor)),h=o(()=>`${n.value}-gradient-${q()}`),p=o(()=>{var w,z;const g=e.type==="circle",I=50-v.value/2;return{isGradient:f.value,percent:a.value,linearGradientId:h.value,radius:I,gapPosition:(w=e.gapPosition)!=null?w:g?"top":"bottom",len:Math.PI*2*I,gapDegree:C((z=e.gapDegree)!=null?z:g?0:75)}}),k=o(()=>f.value?K(e.strokeColor):[]),m=U(p),r=Z(p),y=ee(p,i,e,a,c),d=o(()=>({stroke:e.trailColor,"fill-opacity":"0","stroke-linecap":l.value,"stroke-width":v.value,d:m.value})),$=o(()=>({"fill-opacity":"0","stroke-linecap":l.value,"stroke-width":a.value?v.value:0,d:m.value})),M=o(()=>{const g=i.value;return{[g]:!0,[`${g}-gradient`]:f.value}}),O=o(()=>({width:e.width&&`${e.width}px`,height:e.width&&`${e.width}px`,fontSize:e.width&&`${C(e.width)*.15+6}px`})),B=()=>f.value?u("defs",null,[u("linearGradient",{id:h.value,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[k.value.map(g=>u("stop",{offset:g.offset,"stop-color":g.color},null))])]):null,E=()=>y.value.map(g=>u("path",G({class:[`${i.value}-path`,...g.strokeClasses],style:g.strokePathStyle,stroke:g.stroke},$.value),null));return()=>u("div",{class:M.value,style:O.value},[u("svg",{viewBox:"0 0 100 100"},[B(),u("path",G({class:`${i.value}-trail`,style:r.value},d.value),null),E()]),u(W,null,t)])}});function U(s){return o(()=>{const{radius:t,gapPosition:e}=s.value;let n=0,l=-t,a=0,c=t*-2;switch(e){case"left":n=-t,l=0,a=t*2,c=0;break;case"right":n=t,l=0,a=t*-2,c=0;break;case"bottom":l=t,c=t*2;break}return`M 50,50 m ${n},${l}
       a ${t},${t} 0 1 1 ${a},${-c}
       a ${t},${t} 0 1 1 ${-a},${c}`})}function Z(s){return o(()=>{const{len:t,gapDegree:e}=s.value;return{strokeDasharray:`${t-e}px ${t}px`,strokeDashoffset:`-${e/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}})}function ee(s,t,e,n,l){return o(()=>{var p;const{gapDegree:a,len:c,isGradient:i,linearGradientId:v}=s.value,f=l.value>0?[l.value,n.value]:[n.value],h=(p=e.success)==null?void 0:p.strokeColor;return f.map((k,m)=>{const r=f.length>1&&m===0;return{stroke:i&&!r?`url(#${v})`:void 0,strokeClasses:[!i&&r?`${t.value}-success`:"",i?"":`${t.value}-bg`],strokePathStyle:{stroke:i?void 0:r?h:e.strokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${k/100*(c-a)}px ${c}px`,strokeDashoffset:`-${a/2}px`}}}).reverse()})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=x({name:"IxProgressLine",setup(s,{slots:t}){const{props:e,mergedPrefixCls:n,mergedSize:l,mergedStrokeLinecap:a,percent:c,successPercent:i}=b(P),v=o(()=>`${n.value}-line`),f=R(),h=o(()=>{const r=v.value;return{[r]:!0,[`${r}-${l.value}`]:!0,[`${r}-round`]:a.value==="round"}}),p=o(()=>({background:e.trailColor})),k=o(()=>{var r;return{height:`${e.strokeWidth}px`,width:`${i.value}%`,background:(r=e.success)==null?void 0:r.strokeColor}}),m=o(()=>({height:`${e.strokeWidth}px`,width:`${c.value}%`,background:j(e.strokeColor)?H(e.strokeColor,f.value):e.strokeColor}));return()=>{const r=v.value;return u("div",{ref:f,class:h.value},[u("div",{class:`${r}-outer`},[u("div",{class:`${r}-inner`,style:p.value},[!!i.value&&u("div",{class:`${r}-success-bg`,style:k.value},null),u("div",{class:`${r}-bg`,style:m.value},null)])]),u(W,null,t)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=["normal","success","exception","active"],re={type:{type:String,default:"line"},format:Function,percent:{type:Number,default:0},status:String,hideInfo:{type:Boolean,default:!1},success:Object,trailColor:String,strokeColor:[String,Object],strokeLinecap:String,strokeWidth:Number,gapDegree:Number,gapPosition:String,width:{type:Number,default:132},size:String,icons:Object};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function F(s){const{colorEmphasizedContainerBg:t,fontSizeSm:e,fontSizeMd:n,fontSize2xl:l,paddingSizeSm:a}=s;return{trailBgColor:t,textWidth:36,borderRadius:100,lineSizeSm:2,lineSizeMd:6,lineSizeLg:8,lineFontSizeSm:e,lineFontSizeMd:e,lineFontSizeLg:n,lineTextPadding:`0 0 0 ${a}px`,circleWidth:120,circleFontSize:l}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(s,t)=>F(s);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne=x({name:"IxProgress",props:re,setup(s,{slots:t}){const{globalHashId:e,hashId:n,registerToken:l}=X("progress");l(oe);const a=D("progress"),c=D("common"),i=o(()=>`${c.prefixCls}-progress`),v=o(()=>L(s.percent)),f=o(()=>{var r;return L((r=s.success)==null?void 0:r.percent)}),h=o(()=>{var r;return(r=s.size)!=null?r:a.size}),p=o(()=>{var r;return(r=s.strokeLinecap)!=null?r:a.strokeLinecap}),k=o(()=>{var r;return!se.includes(s.status)&&(v.value>=S||f.value>=S)?"success":(r=s.status)!=null?r:"normal"}),m=o(()=>{const r=i.value;return{[e.value]:!!e.value,[n.value]:!!n.value,[r]:!0,[`${r}-${k.value}`]:!!k.value}});return Y(P,{props:s,config:a,mergedPrefixCls:i,mergedSize:h,mergedStrokeLinecap:p,percent:v,successPercent:f,status:k}),()=>{const r=s.type==="line"?te:Q;return u(r,{class:m.value},t)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const le=ne;export{le as I};
