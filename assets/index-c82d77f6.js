import{b9 as S,O as I,L as T,A as h,M as D}from"./index-e8c93a86.js";import{i as B,a as E}from"./colors-9a160b11.js";import{v as y,i as k,f as a,z as x,y as o,E as _,am as M,p as z}from"./vendor-41461ead.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("timelineToken"),N=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},L={color:{type:String,default:"primary"},dot:String,label:String,placement:String},P=y({name:"IxTimelineItem",props:L,[N]:!0,setup(e,{slots:t}){const{props:d,mergedPrefixCls:l}=k(b),{vnode:u}=_(),f=a(()=>{const{placement:n}=d,{placement:c}=e,s=u.index;let g;return n==="alternate"?g=c||(s%2?"start":"end"):g=n,g}),r=a(()=>B(e.color)||E(e.color)),v=a(()=>{const{color:n}=e;return r.value?{}:{color:n,"border-color":n}}),m=a(()=>r.value?{}:{"background-color":e.color}),i=a(()=>{const n=`${l.value}-item`,c=f.value;return x({[`${n}`]:!0,[`${n}-${c}`]:!0})}),p=a(()=>S(t,"dot")||!!e.dot),$=a(()=>{const n=`${l.value}-item-head`,{color:c}=e;return x({[`${n}-dot`]:!0,[`${n}-dot-custom`]:p.value,[`${n}-dot-${c}`]:r.value})});return()=>{const{label:n,dot:c}=e,s=`${l.value}-item`,g=I(t.dot,c),C=I(t.label,n);return o("li",{class:i.value},[o("div",{class:`${s}-head`},[o("div",{class:`${s}-head-line`},null),o("div",{class:$.value,style:v.value},[g,!p.value&&o("div",{class:`${s}-head-dot-inner`,style:m.value},null)])]),o("div",{class:`${s}-content`},[t.default&&o("div",{class:`${s}-content-desc`},[t.default()]),C&&o("div",{class:`${s}-content-label`},[C])])])}}}),O=y({name:"IxTimeline",props:K,setup(e,{slots:t}){const d=T("common"),l=a(()=>`${d.prefixCls}-timeline`),u=a(()=>e.pending!==!1||S(t,"pending")),f=a(()=>{const{placement:r,reverse:v,both:m}=e,i=l.value;return x({[`${i}`]:!0,[`${i}-${r}`]:!0,[`${i}-reverse`]:v,[`${i}-not-both`]:!m,[`${i}-pending`]:u.value})});return z(b,{props:e,mergedPrefixCls:l}),()=>{const r=j(t,e,u,l);return o("ul",{class:f.value},[r.value])}}});function V(e){return D(e,{key:N}).map((t,d)=>(t.index=d,t))}function j(e,t,d,l){return a(()=>{var p,$;const{pending:u,pendingDot:f,reverse:r}=t,v=((p=e==null?void 0:e.default)==null?void 0:p.call(e))||[];let m=null;if(d.value){const n=(($=e==null?void 0:e.pendingDot)==null?void 0:$.call(e))||f||o(h,{name:"loading"},null);m=o(P,{class:`${l.value}-item-pending`},{default:()=>[I(e.pending,M(u)?"":u)],dot:()=>n})}const i=r?[m,...v.reverse()]:[...v,m];return V(i.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=O,Y=P;export{X as I,Y as a};
