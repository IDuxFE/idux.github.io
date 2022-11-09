import{w as B,aN as X,af as P,u as I}from"./index.3f21dce0.js";import{e as c,a as Y,v as $,y as v,i as C,l as q,b as K,a0 as w,h as L,p as V}from"./vendor.0e7da6ec.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G={success:"check",exception:"close"};function H(e,t){return c(()=>{var r,o,a,n,s,u,d,i;return{success:(n=(a=(r=e.icons)==null?void 0:r.success)!=null?a:(o=t.icon)==null?void 0:o.success)!=null?n:G.success,exception:(i=(d=(s=e.icons)==null?void 0:s.exception)!=null?d:(u=t.icon)==null?void 0:u.exception)!=null?i:G.exception}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const m=100;function W(e){return!e||e<0?0:e>m?m:parseInt(e,10)}const N=e=>{const t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t.sort((r,o)=>r.key-o.key)},J=e=>{const{from:t="#3366ff",to:r="#3366ff",direction:o="to right",...a}=e;if(Object.keys(a).length!==0){const n=N(a).map(({key:s,value:u})=>`${u} ${s}%`).join(", ");return`linear-gradient(${o}, ${n})`}return`linear-gradient(${o}, ${t}, ${r})`},Q=e=>N(e).map(({key:t,value:r})=>({offset:`${t}%`,color:r}));/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=(e,t,r,o,a)=>{var l;const n=(l=e.format)!=null?l:t.format,s=c(()=>n(o.value,a.value.percent)),u=c(()=>r.value==="success"||r.value==="normal"&&o.value===m),d=c(()=>r.value==="exception"),i=c(()=>Y(e.format)||!(u.value||d.value));return{formattedText:s,showFormat:i,showSuccessIcon:u,showExceptionIcon:d}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x=Symbol("progressContext"),j=$({setup(){const{props:e,config:t,slots:r,mergedPrefixCls:o,status:a,percent:n,formattedSuccess:s}=C(x),{formattedText:u,showSuccessIcon:d,showExceptionIcon:i,showFormat:l}=R(e,t,a,n,s),p=H(e,t),k=()=>{if(l.value)return u.value;const h=o.value;return d.value?D(p.value.success,`${h}-success-icon`):i.value?D(p.value.exception,`${h}-exception-icon`):null};return()=>{var g;if(e.hideInfo)return null;const h=(g=r.format)!=null?g:r.default;return v("div",{class:`${o.value}-info`},[h?h({percent:n.value,successPercent:s.value.percent}):k()])}}});function D(e,t){return q(e)?v(B,{class:t,name:e},null):e}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,t){return c(()=>{var r,o,a;return{...e,size:(r=e.size)!=null?r:t.size,strokeWidth:(o=e.strokeWidth)!=null?o:t.strokeWidth,strokeLinecap:(a=e.strokeLinecap)!=null?a:t.strokeLinecap}})}const U=6,Z=$({name:"IxProgressCircle",setup(){const{props:e,config:t,mergedPrefixCls:r,percent:o,formattedSuccess:a}=C(x),n=c(()=>`${r.value}-circle`),s=z(e,t),u=c(()=>{var f;return P((f=s.value.strokeWidth)!=null?f:t.defaultCircleStrokeWidth,U)}),d=c(()=>L(s.value.strokeColor)),i=K(`ix-progress-gradient-${X()}`),l=c(()=>{var S,b;const f=s.value.type==="circle",y=50-u.value/2;return{isGradient:d.value,percent:o.value,linearGradientId:i.value,radius:y,gapPosition:(S=s.value.gapPosition)!=null?S:f?"top":"bottom",len:Math.PI*2*y,gapDegree:P((b=s.value.gapDegree)!=null?b:f?0:75)}}),p=c(()=>d.value?Q(s.value.strokeColor):[]),k=_(l),h=ee(l),g=te(l,s.value,o,a),F=c(()=>({stroke:"#f5f5f5","fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":u.value,d:k.value})),O=c(()=>({"fill-opacity":"0","stroke-linecap":s.value.strokeLinecap,"stroke-width":s.value.percent?u.value:0,d:k.value})),M=c(()=>{const f=n.value;return{[f]:!0,[`${f}-gradient`]:d.value}}),A=c(()=>({width:s.value.width&&`${s.value.width}px`,height:s.value.width&&`${s.value.width}px`,fontSize:s.value.width&&`${P(s.value.width)*.15+6}px`})),E=()=>d.value?v("defs",null,[v("linearGradient",{id:i.value,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[p.value.map(f=>v("stop",{offset:f.offset,"stop-color":f.color},null))])]):null,T=()=>g.value.map(f=>v("path",w({class:[`${n.value}-path`,...f.strokeClasses],style:f.strokePathStyle,stroke:f.stroke},O.value),null));return()=>v("div",{class:M.value,style:A.value},[v("svg",{viewBox:"0 0 100 100"},[E(),v("path",w({class:`${n.value}-trail`,style:h.value},F.value),null),T()]),v(j,null,null)])}});function _(e){return c(()=>{const{radius:t,gapPosition:r}=e.value;let o=0,a=-t,n=0,s=t*-2;switch(r){case"left":o=-t,a=0,n=t*2,s=0;break;case"right":o=t,a=0,n=t*-2,s=0;break;case"bottom":a=t,s=t*2;break}return`M 50,50 m ${o},${a}
       a ${t},${t} 0 1 1 ${n},${-s}
       a ${t},${t} 0 1 1 ${-n},${s}`})}function ee(e){return c(()=>{const{len:t,gapDegree:r}=e.value;return{strokeDasharray:`${t-r}px ${t}px`,strokeDashoffset:`-${r/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}})}function te(e,t,r,o){return c(()=>{var p;const a=o.value.percent,{gapDegree:n,len:s,isGradient:u,linearGradientId:d}=e.value,i=a>0?[a,r.value]:[r.value],l=(p=t.success)==null?void 0:p.strokeColor;return i.map((k,h)=>{const g=i.length>1&&h===0;return{stroke:u&&!g?`url(#${d})`:void 0,strokeClasses:[!u&&g?"ix-progress-circle-success":"",u?"":"ix-progress-circle-bg"],strokePathStyle:{stroke:u?void 0:g?l:t.strokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${k/100*(s-n)}px ${s}px`,strokeDashoffset:`-${n/2}px`}}}).reverse()})}const se=$({name:"IxProgressLine",setup(){const{props:e,config:t,mergedPrefixCls:r,percent:o,formattedSuccess:a}=C(x),n=z(e,t),s=c(()=>`${r.value}-line`),u=c(()=>{const l=s.value;return{[l]:!0,[`${l}-${n.value.size}`]:!0,[`${l}-round`]:n.value.strokeLinecap==="round"}}),d=c(()=>{var l,p;return{height:n.value.strokeWidth&&`${n.value.strokeWidth}px`,width:`${(l=a.value.percent)!=null?l:0}%`,background:(p=a.value.strokeColor)!=null?p:""}}),i=c(()=>{var l;return{height:n.value.strokeWidth&&`${n.value.strokeWidth}px`,width:`${o.value}%`,background:L(n.value.strokeColor)?J(n.value.strokeColor):(l=n.value.strokeColor)!=null?l:""}});return()=>{var p;const l=s.value;return v("div",{class:u.value},[v("div",{class:`${l}-outer`},[v("div",{class:`${l}-inner`},[((p=n.value.success)==null?void 0:p.percent)&&v("div",{class:`${l}-success-bg`,style:d.value},null),v("div",{class:`${l}-bg`,style:i.value},null)])]),v(j,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re=["normal","success","exception","active"],oe={type:{type:String,default:"line"},format:Function,percent:{type:[String,Number],default:0},status:String,hideInfo:{type:Boolean,default:!1},success:Object,trailColor:String,strokeColor:[String,Object],strokeLinecap:String,strokeWidth:[String,Number],gapDegree:[String,Number],gapPosition:String,width:{type:[String,Number],default:132},size:String,icons:Object};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ne(e,t,r){return c(()=>{var o;return!re.includes(e.status)&&(t.value>=m||r.value.percent>=m)?"success":(o=e.status)!=null?o:"normal"})}const ae=$({name:"IxProgress",props:oe,setup(e,{slots:t}){const r=I("progress"),o=I("common"),a=c(()=>`${o.prefixCls}-progress`),n=c(()=>W(e.percent)),s=c(()=>{var i;return{...e.success,percent:W((i=e.success)==null?void 0:i.percent)}}),u=ne(e,n,s),d=c(()=>{const i=a.value;return{[i]:!0,[`${i}-${u.value}`]:!!u.value}});return V(x,{props:e,config:r,slots:t,mergedPrefixCls:a,percent:n,formattedSuccess:s,status:u}),()=>{const i=e.type==="line"?se:Z;return v(i,{class:d.value},null)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=ae;export{ue as I};
