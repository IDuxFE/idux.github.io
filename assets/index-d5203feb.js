import{v as T,aI as V,ab as P,u as S}from"./index-cbb19196.js";import{e as a,a as B,v as x,i as y,y as d,l as X,b as W,a2 as b,j as D,p as Y}from"./vendor-5869a5c0.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I={success:"check",exception:"close"};function q(t,e){return a(()=>{var o,n,c,r;return{success:((o=t.icons)==null?void 0:o.success)??((n=e.icon)==null?void 0:n.success)??I.success,exception:((c=t.icons)==null?void 0:c.exception)??((r=e.icon)==null?void 0:r.exception)??I.exception}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const m=100;function w(t){return!t||t<0?0:t>m?m:parseInt(t,10)}const j=t=>{const e=[];return Object.keys(t).forEach(o=>{const n=parseFloat(o.replace(/%/g,""));isNaN(n)||e.push({key:n,value:t[o]})}),e.sort((o,n)=>o.key-n.key)},K=(t,e)=>{const{from:o=e?getComputedStyle(e).getPropertyValue("--ix-color-primary"):"#1c6eff",to:n=e?getComputedStyle(e).getPropertyValue("--ix-color-primary"):"#1c6eff",direction:c="to right",...r}=t;if(Object.keys(r).length!==0){const s=j(r).map(({key:l,value:i})=>`${i} ${l}%`).join(", ");return`linear-gradient(${c}, ${s})`}return`linear-gradient(${c}, ${o}, ${n})`},R=t=>j(t).map(({key:e,value:o})=>({offset:`${e}%`,color:o}));/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=(t,e,o,n,c)=>{const r=t.format??e.format,s=a(()=>r(n.value,c.value.percent)),l=a(()=>o.value==="success"||o.value==="normal"&&n.value===m),i=a(()=>o.value==="exception"),u=a(()=>B(t.format)||!(l.value||i.value));return{formattedText:s,showFormat:u,showSuccessIcon:l,showExceptionIcon:i}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("progressContext"),L=x({setup(){const{props:t,config:e,slots:o,mergedPrefixCls:n,status:c,percent:r,formattedSuccess:s}=y($),{formattedText:l,showSuccessIcon:i,showExceptionIcon:u,showFormat:g}=H(t,e,c,r,s),h=q(t,e),v=()=>{if(g.value)return l.value;const f=n.value;return i.value?G(h.value.success,`${f}-success-icon`):u.value?G(h.value.exception,`${f}-exception-icon`):null};return()=>{if(t.hideInfo)return null;const f=o.format??o.default;return d("div",{class:`${n.value}-info`},[f?f({percent:r.value,successPercent:s.value.percent}):v()])}}});function G(t,e){return X(t)?d(T,{class:e,name:t},null):t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function N(t,e){return a(()=>({...t,size:t.size??e.size,strokeWidth:t.strokeWidth??e.strokeWidth,strokeLinecap:t.strokeLinecap??e.strokeLinecap}))}const J=6,Q=x({name:"IxProgressCircle",setup(){const{props:t,config:e,mergedPrefixCls:o,percent:n,formattedSuccess:c}=y($),r=a(()=>`${o.value}-circle`),s=N(t,e),l=a(()=>P(s.value.strokeWidth??e.defaultCircleStrokeWidth,J)),i=a(()=>D(s.value.strokeColor)),u=W(`ix-progress-gradient-${V()}`),g=a(()=>{const p=s.value.type==="circle",C=50-l.value/2;return{isGradient:i.value,percent:n.value,linearGradientId:u.value,radius:C,gapPosition:s.value.gapPosition??(p?"top":"bottom"),len:Math.PI*2*C,gapDegree:P(s.value.gapDegree??(p?0:75))}}),h=a(()=>i.value?R(s.value.strokeColor):[]),v=U(g),f=Z(g),k=_(g,s.value,n,c),z=a(()=>({stroke:s.value.trailColor??"#f5f5f5","fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":l.value,d:v.value})),F=a(()=>({"fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":s.value.percent?l.value:0,d:v.value})),O=a(()=>{const p=r.value;return{[p]:!0,[`${p}-gradient`]:i.value}}),M=a(()=>({width:s.value.width&&`${s.value.width}px`,height:s.value.width&&`${s.value.width}px`,fontSize:s.value.width&&`${P(s.value.width)*.15+6}px`})),A=()=>i.value?d("defs",null,[d("linearGradient",{id:u.value,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[h.value.map(p=>d("stop",{offset:p.offset,"stop-color":p.color},null))])]):null,E=()=>k.value.map(p=>d("path",b({class:[`${r.value}-path`,...p.strokeClasses],style:p.strokePathStyle,stroke:p.stroke},F.value),null));return()=>d("div",{class:O.value,style:M.value},[d("svg",{viewBox:"0 0 100 100"},[A(),d("path",b({class:`${r.value}-trail`,style:f.value},z.value),null),E()]),d(L,null,null)])}});function U(t){return a(()=>{const{radius:e,gapPosition:o}=t.value;let n=0,c=-e,r=0,s=e*-2;switch(o){case"left":n=-e,c=0,r=e*2,s=0;break;case"right":n=e,c=0,r=e*-2,s=0;break;case"bottom":c=e,s=e*2;break}return`M 50,50 m ${n},${c}
       a ${e},${e} 0 1 1 ${r},${-s}
       a ${e},${e} 0 1 1 ${-r},${s}`})}function Z(t){return a(()=>{const{len:e,gapDegree:o}=t.value;return{strokeDasharray:`${e-o}px ${e}px`,strokeDashoffset:`-${o/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}})}function _(t,e,o,n){return a(()=>{var h;const c=n.value.percent,{gapDegree:r,len:s,isGradient:l,linearGradientId:i}=t.value,u=c>0?[c,o.value]:[o.value],g=(h=e.success)==null?void 0:h.strokeColor;return u.map((v,f)=>{const k=u.length>1&&f===0;return{stroke:l&&!k?`url(#${i})`:void 0,strokeClasses:[!l&&k?"ix-progress-circle-success":"",l?"":"ix-progress-circle-bg"],strokePathStyle:{stroke:l?void 0:k?g:e.strokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${v/100*(s-r)}px ${s}px`,strokeDashoffset:`-${r/2}px`}}}).reverse()})}const ee=x({name:"IxProgressLine",setup(){const{props:t,config:e,mergedPrefixCls:o,percent:n,formattedSuccess:c}=y($),r=N(t,e),s=a(()=>`${o.value}-line`),l=W(),i=a(()=>{const v=s.value;return{[v]:!0,[`${v}-${r.value.size}`]:!0,[`${v}-round`]:r.value.strokeLinecap==="round"}}),u=a(()=>({background:r.value.trailColor??""})),g=a(()=>({height:r.value.strokeWidth&&`${r.value.strokeWidth}px`,width:`${c.value.percent??0}%`,background:c.value.strokeColor??""})),h=a(()=>({height:r.value.strokeWidth&&`${r.value.strokeWidth}px`,width:`${n.value}%`,background:D(r.value.strokeColor)?K(r.value.strokeColor,l.value):r.value.strokeColor??""}));return()=>{var f;const v=s.value;return d("div",{ref:l,class:i.value},[d("div",{class:`${v}-outer`},[d("div",{class:`${v}-inner`,style:u.value},[((f=r.value.success)==null?void 0:f.percent)&&d("div",{class:`${v}-success-bg`,style:g.value},null),d("div",{class:`${v}-bg`,style:h.value},null)])]),d(L,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=["normal","success","exception","active"],se={type:{type:String,default:"line"},format:Function,percent:{type:[String,Number],default:0},status:String,hideInfo:{type:Boolean,default:!1},success:Object,trailColor:String,strokeColor:[String,Object],strokeLinecap:String,strokeWidth:[String,Number],gapDegree:[String,Number],gapPosition:String,width:{type:[String,Number],default:132},size:String,icons:Object};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function re(t,e,o){return a(()=>!te.includes(t.status)&&(e.value>=m||o.value.percent>=m)?"success":t.status??"normal")}const oe=x({name:"IxProgress",props:se,setup(t,{slots:e}){const o=S("progress"),n=S("common"),c=a(()=>`${n.prefixCls}-progress`),r=a(()=>w(t.percent)),s=a(()=>{var u;return{...t.success,percent:w((u=t.success)==null?void 0:u.percent)}}),l=re(t,r,s),i=a(()=>{const u=c.value;return{[u]:!0,[`${u}-${l.value}`]:!!l.value}});return Y($,{props:t,config:o,slots:e,mergedPrefixCls:c,percent:r,formattedSuccess:s,status:l}),()=>{const u=t.type==="line"?ee:Q;return d(u,{class:i.value},null)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ce=oe;export{ce as I};
