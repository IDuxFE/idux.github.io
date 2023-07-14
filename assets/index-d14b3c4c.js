import{b7 as S,O as I,L as P,A as T,M as D}from"./index-b0d11a60.js";import{i as B,a as k}from"./colors-9a160b11.js";import{x as b,l as E,c as a,A as x,z as o,h as _,q as M,am as z}from"./vendor-c8ffbcb8.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=Symbol("timelineToken"),N=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const A={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},K={color:{type:String,default:"primary"},dot:String,label:String,placement:String},h=b({name:"IxTimelineItem",props:K,[N]:!0,setup(e,{slots:t}){const{props:d,mergedPrefixCls:l}=E(y),{vnode:u}=_(),f=a(()=>{const{placement:n}=d,{placement:c}=e,s=u.index;let g;return n==="alternate"?g=c||(s%2?"start":"end"):g=n,g}),r=a(()=>B(e.color)||k(e.color)),v=a(()=>{const{color:n}=e;return r.value?{}:{color:n,"border-color":n}}),m=a(()=>r.value?{}:{"background-color":e.color}),i=a(()=>{const n=`${l.value}-item`,c=f.value;return x({[`${n}`]:!0,[`${n}-${c}`]:!0})}),p=a(()=>S(t,"dot")||!!e.dot),$=a(()=>{const n=`${l.value}-item-head`,{color:c}=e;return x({[`${n}-dot`]:!0,[`${n}-dot-custom`]:p.value,[`${n}-dot-${c}`]:r.value})});return()=>{const{label:n,dot:c}=e,s=`${l.value}-item`,g=I(t.dot,c),C=I(t.label,n);return o("li",{class:i.value},[o("div",{class:`${s}-head`},[o("div",{class:`${s}-head-line`},null),o("div",{class:$.value,style:v.value},[g,!p.value&&o("div",{class:`${s}-head-dot-inner`,style:m.value},null)])]),o("div",{class:`${s}-content`},[t.default&&o("div",{class:`${s}-content-desc`},[t.default()]),C&&o("div",{class:`${s}-content-label`},[C])])])}}}),L=b({name:"IxTimeline",props:A,setup(e,{slots:t}){const d=P("common"),l=a(()=>`${d.prefixCls}-timeline`),u=a(()=>e.pending!==!1||S(t,"pending")),f=a(()=>{const{placement:r,reverse:v,both:m}=e,i=l.value;return x({[`${i}`]:!0,[`${i}-${r}`]:!0,[`${i}-reverse`]:v,[`${i}-not-both`]:!m,[`${i}-pending`]:u.value})});return M(y,{props:e,mergedPrefixCls:l}),()=>{const r=V(t,e,u,l);return o("ul",{class:f.value},[r.value])}}});function O(e){return D(e,{key:N}).map((t,d)=>(t.index=d,t))}function V(e,t,d,l){return a(()=>{var p,$;const{pending:u,pendingDot:f,reverse:r}=t,v=((p=e==null?void 0:e.default)==null?void 0:p.call(e))||[];let m=null;if(d.value){const n=(($=e==null?void 0:e.pendingDot)==null?void 0:$.call(e))||f||o(T,{name:"loading"},null);m=o(h,{class:`${l.value}-item-pending`},{default:()=>[I(e.pending,z(u)?"":u)],dot:()=>n})}const i=r?[m,...v.reverse()]:[...v,m];return O(i.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=L,X=h;export{X as I,U as a};
