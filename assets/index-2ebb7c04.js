import{bf as h,Q as $,M as P,N as B,A as k,O as D}from"./index-a1eb659d.js";import{l as y,x as M,c as a,p as S,n as o,h as z,B as E,at as _}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=["red","orange","brown","yellow","canary","bud","green","turquoise","cyan","glacier","blue","indigo","purple","magenta"];function W(e){return w.includes(e)}const K=["primary","info","pending","success","warning","error"];function L(e){return K.includes(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=Symbol("timelineToken"),x=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},V={color:{type:String,default:"primary"},dot:String,label:String,placement:String},N=y({name:"IxTimelineItem",props:V,[x]:!0,setup(e,{slots:t}){const{props:l,mergedPrefixCls:r}=M(T),{vnode:u}=z(),v=a(()=>{const{placement:n}=l,{placement:c}=e,s=u.index;let I;return n==="alternate"?I=c||(s%2?"start":"end"):I=n,I}),i=a(()=>W(e.color)||L(e.color)),d=a(()=>{const{color:n}=e;return i.value?{}:{color:n,"border-color":n}}),m=a(()=>i.value?{}:{"background-color":e.color}),g=a(()=>{const n=`${r.value}-item`,c=v.value;return S({[`${n}`]:!0,[`${n}-${c}`]:!0})}),f=a(()=>h(t,"dot")||!!e.dot),p=a(()=>{const n=`${r.value}-item-head`,{color:c}=e;return S({[`${n}-dot`]:!0,[`${n}-dot-custom`]:f.value,[`${n}-dot-${c}`]:i.value})});return()=>{const{label:n,dot:c}=e,s=`${r.value}-item`,I=$(t.dot,c),C=$(t.label,n);return o("li",{class:g.value},[o("div",{class:`${s}-head`},[o("div",{class:`${s}-head-line`},null),o("div",{class:p.value,style:d.value},[I,!f.value&&o("div",{class:`${s}-head-dot-inner`,style:m.value},null)])]),o("div",{class:`${s}-content`},[t.default&&o("div",{class:`${s}-content-desc`},[t.default()]),C&&o("div",{class:`${s}-content-label`},[C])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function b(e){const{fontSizeSm:t,marginSizeSm:l,colorSeparator:r}=e;return{fontSize:t,dotSize:12,dotBorderWidth:2,contentLabelMarginTop:l,lineWidth:2,lineBgColor:r,pendingItemContentMinWidth:40,contentMarginBottom:20}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=(e,t)=>b(e),q=y({name:"IxTimeline",props:O,setup(e,{slots:t}){const l=P("common"),{globalHashId:r,hashId:u,registerToken:v}=B("timeline");v(j);const i=a(()=>`${l.prefixCls}-timeline`),d=a(()=>e.pending!==!1||h(t,"pending")),m=a(()=>{const{placement:g,reverse:f,both:p}=e,n=i.value;return S({[r.value]:!!r.value,[u.value]:!!u.value,[`${n}`]:!0,[`${n}-${g}`]:!0,[`${n}-reverse`]:f,[`${n}-not-both`]:!p,[`${n}-pending`]:d.value})});return E(T,{props:e,mergedPrefixCls:i}),()=>{const g=G(t,e,d,i);return o("ul",{class:m.value},[g.value])}}});function A(e){return D(e,{key:x}).map((t,l)=>(t.index=l,t))}function G(e,t,l,r){return a(()=>{var f,p;const{pending:u,pendingDot:v,reverse:i}=t,d=((f=e==null?void 0:e.default)==null?void 0:f.call(e))||[];let m=null;if(l.value){const n=((p=e==null?void 0:e.pendingDot)==null?void 0:p.call(e))||v||o(k,{name:"loading"},null);m=o(N,{class:`${r.value}-item-pending`},{default:()=>[$(e.pending,_(u)?"":u)],dot:()=>n})}const g=i?[m,...d.reverse()]:[...d,m];return A(g.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=q,X=N;export{X as I,U as a};
