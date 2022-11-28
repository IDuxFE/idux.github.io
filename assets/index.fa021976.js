import{v as B,aN as X,ae as P,u as I}from"./index.f300137b.js";import{e as c,a as Y,v as x,y as v,i as y,l as q,b as L,a1 as w,h as N,p as K}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G={success:"check",exception:"close"};function R(t,e){return c(()=>{var r,n,a,o,s,l,d,u;return{success:(o=(a=(r=t.icons)==null?void 0:r.success)!=null?a:(n=e.icon)==null?void 0:n.success)!=null?o:G.success,exception:(u=(d=(s=t.icons)==null?void 0:s.exception)!=null?d:(l=e.icon)==null?void 0:l.exception)!=null?u:G.exception}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const m=100;function W(t){return!t||t<0?0:t>m?m:parseInt(t,10)}const j=t=>{const e=[];return Object.keys(t).forEach(r=>{const n=parseFloat(r.replace(/%/g,""));isNaN(n)||e.push({key:n,value:t[r]})}),e.sort((r,n)=>r.key-n.key)},H=(t,e)=>{const{from:r=e?getComputedStyle(e).getPropertyValue("--ix-color-primary"):"#1c6eff",to:n=e?getComputedStyle(e).getPropertyValue("--ix-color-primary"):"#1c6eff",direction:a="to right",...o}=t;if(Object.keys(o).length!==0){const s=j(o).map(({key:l,value:d})=>`${d} ${l}%`).join(", ");return`linear-gradient(${a}, ${s})`}return`linear-gradient(${a}, ${r}, ${n})`},J=t=>j(t).map(({key:e,value:r})=>({offset:`${e}%`,color:r}));/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=(t,e,r,n,a)=>{var p;const o=(p=t.format)!=null?p:e.format,s=c(()=>o(n.value,a.value.percent)),l=c(()=>r.value==="success"||r.value==="normal"&&n.value===m),d=c(()=>r.value==="exception"),u=c(()=>Y(t.format)||!(l.value||d.value));return{formattedText:s,showFormat:u,showSuccessIcon:l,showExceptionIcon:d}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("progressContext"),z=x({setup(){const{props:t,config:e,slots:r,mergedPrefixCls:n,status:a,percent:o,formattedSuccess:s}=y($),{formattedText:l,showSuccessIcon:d,showExceptionIcon:u,showFormat:p}=Q(t,e,a,o,s),i=R(t,e),g=()=>{if(p.value)return l.value;const h=n.value;return d.value?D(i.value.success,`${h}-success-icon`):u.value?D(i.value.exception,`${h}-exception-icon`):null};return()=>{var k;if(t.hideInfo)return null;const h=(k=r.format)!=null?k:r.default;return v("div",{class:`${n.value}-info`},[h?h({percent:o.value,successPercent:s.value.percent}):g()])}}});function D(t,e){return q(t)?v(B,{class:e,name:t},null):t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function F(t,e){return c(()=>{var r,n,a;return{...t,size:(r=t.size)!=null?r:e.size,strokeWidth:(n=t.strokeWidth)!=null?n:e.strokeWidth,strokeLinecap:(a=t.strokeLinecap)!=null?a:e.strokeLinecap}})}const U=6,Z=x({name:"IxProgressCircle",setup(){const{props:t,config:e,mergedPrefixCls:r,percent:n,formattedSuccess:a}=y($),o=c(()=>`${r.value}-circle`),s=F(t,e),l=c(()=>{var f;return P((f=s.value.strokeWidth)!=null?f:e.defaultCircleStrokeWidth,U)}),d=c(()=>N(s.value.strokeColor)),u=L(`ix-progress-gradient-${X()}`),p=c(()=>{var S,b;const f=s.value.type==="circle",C=50-l.value/2;return{isGradient:d.value,percent:n.value,linearGradientId:u.value,radius:C,gapPosition:(S=s.value.gapPosition)!=null?S:f?"top":"bottom",len:Math.PI*2*C,gapDegree:P((b=s.value.gapDegree)!=null?b:f?0:75)}}),i=c(()=>d.value?J(s.value.strokeColor):[]),g=_(p),h=ee(p),k=te(p,s.value,n,a),O=c(()=>({stroke:"#f5f5f5","fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":l.value,d:g.value})),M=c(()=>({"fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":s.value.percent?l.value:0,d:g.value})),A=c(()=>{const f=o.value;return{[f]:!0,[`${f}-gradient`]:d.value}}),E=c(()=>({width:s.value.width&&`${s.value.width}px`,height:s.value.width&&`${s.value.width}px`,fontSize:s.value.width&&`${P(s.value.width)*.15+6}px`})),T=()=>d.value?v("defs",null,[v("linearGradient",{id:u.value,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[i.value.map(f=>v("stop",{offset:f.offset,"stop-color":f.color},null))])]):null,V=()=>k.value.map(f=>v("path",w({class:[`${o.value}-path`,...f.strokeClasses],style:f.strokePathStyle,stroke:f.stroke},M.value),null));return()=>v("div",{class:A.value,style:E.value},[v("svg",{viewBox:"0 0 100 100"},[T(),v("path",w({class:`${o.value}-trail`,style:h.value},O.value),null),V()]),v(z,null,null)])}});function _(t){return c(()=>{const{radius:e,gapPosition:r}=t.value;let n=0,a=-e,o=0,s=e*-2;switch(r){case"left":n=-e,a=0,o=e*2,s=0;break;case"right":n=e,a=0,o=e*-2,s=0;break;case"bottom":a=e,s=e*2;break}return`M 50,50 m ${n},${a}
       a ${e},${e} 0 1 1 ${o},${-s}
       a ${e},${e} 0 1 1 ${-o},${s}`})}function ee(t){return c(()=>{const{len:e,gapDegree:r}=t.value;return{strokeDasharray:`${e-r}px ${e}px`,strokeDashoffset:`-${r/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}})}function te(t,e,r,n){return c(()=>{var i;const a=n.value.percent,{gapDegree:o,len:s,isGradient:l,linearGradientId:d}=t.value,u=a>0?[a,r.value]:[r.value],p=(i=e.success)==null?void 0:i.strokeColor;return u.map((g,h)=>{const k=u.length>1&&h===0;return{stroke:l&&!k?`url(#${d})`:void 0,strokeClasses:[!l&&k?"ix-progress-circle-success":"",l?"":"ix-progress-circle-bg"],strokePathStyle:{stroke:l?void 0:k?p:e.strokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${g/100*(s-o)}px ${s}px`,strokeDashoffset:`-${o/2}px`}}}).reverse()})}const se=x({name:"IxProgressLine",setup(){const{props:t,config:e,mergedPrefixCls:r,percent:n,formattedSuccess:a}=y($),o=F(t,e),s=c(()=>`${r.value}-line`),l=L(),d=c(()=>{const i=s.value;return{[i]:!0,[`${i}-${o.value.size}`]:!0,[`${i}-round`]:o.value.strokeLinecap==="round"}}),u=c(()=>{var i,g;return{height:o.value.strokeWidth&&`${o.value.strokeWidth}px`,width:`${(i=a.value.percent)!=null?i:0}%`,background:(g=a.value.strokeColor)!=null?g:""}}),p=c(()=>{var i;return{height:o.value.strokeWidth&&`${o.value.strokeWidth}px`,width:`${n.value}%`,background:N(o.value.strokeColor)?H(o.value.strokeColor,l.value):(i=o.value.strokeColor)!=null?i:""}});return()=>{var g;const i=s.value;return v("div",{ref:l,class:d.value},[v("div",{class:`${i}-outer`},[v("div",{class:`${i}-inner`},[((g=o.value.success)==null?void 0:g.percent)&&v("div",{class:`${i}-success-bg`,style:u.value},null),v("div",{class:`${i}-bg`,style:p.value},null)])]),v(z,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re=["normal","success","exception","active"],oe={type:{type:String,default:"line"},format:Function,percent:{type:[String,Number],default:0},status:String,hideInfo:{type:Boolean,default:!1},success:Object,trailColor:String,strokeColor:[String,Object],strokeLinecap:String,strokeWidth:[String,Number],gapDegree:[String,Number],gapPosition:String,width:{type:[String,Number],default:132},size:String,icons:Object};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ne(t,e,r){return c(()=>{var n;return!re.includes(t.status)&&(e.value>=m||r.value.percent>=m)?"success":(n=t.status)!=null?n:"normal"})}const ae=x({name:"IxProgress",props:oe,setup(t,{slots:e}){const r=I("progress"),n=I("common"),a=c(()=>`${n.prefixCls}-progress`),o=c(()=>W(t.percent)),s=c(()=>{var u;return{...t.success,percent:W((u=t.success)==null?void 0:u.percent)}}),l=ne(t,o,s),d=c(()=>{const u=a.value;return{[u]:!0,[`${u}-${l.value}`]:!!l.value}});return K($,{props:t,config:r,slots:e,mergedPrefixCls:a,percent:o,formattedSuccess:s,status:l}),()=>{const u=t.type==="line"?se:Z;return v(u,{class:d.value},null)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=ae;export{ue as I};
