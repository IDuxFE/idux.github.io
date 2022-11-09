import{v as x,e as c,y as l,i as N,z as g,G as P,p as T,a4 as h}from"./vendor.32cbbd74.js";import{ae as $,aj as C,u as B,w as D,ac as E}from"./index.c56724f3.js";import{i as _,a as k}from"./colors.25f39b34.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=Symbol("timelineToken"),y=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},z={color:{type:String,default:"primary"},dot:String,label:String,placement:String},b=x({name:"IxTimelineItem",props:z,[y]:!0,setup(e,{slots:t}){const{props:d,mergedPrefixCls:r}=N(S),{vnode:u}=P(),f=c(()=>{const{placement:n}=d,{placement:o}=e,a=u.index;let v;return n==="alternate"?v=o||(a%2?"start":"end"):v=n,v}),s=c(()=>_(e.color)||k(e.color)),p=c(()=>{const{color:n}=e;return s.value?{}:{color:n,"border-color":n}}),m=c(()=>{const n=`${r.value}-item`,o=f.value;return g({[`${n}`]:!0,[`${n}-${o}`]:!0})}),i=c(()=>{const n=`${r.value}-item-head`,{dot:o,color:a}=e;return g({[`${n}-dot`]:!0,[`${n}-dot-custom`]:C(t,"dot")||!!o,[`${n}-dot-${a}`]:s.value})});return()=>{const{label:n,dot:o}=e,a=`${r.value}-item`,v=$(t.dot,o),I=$(t.label,n);return l("li",{class:m.value},[l("div",{class:`${a}-head`},[l("div",{class:`${a}-head-line`},null),l("div",{class:i.value,style:p.value},[v])]),l("div",{class:`${a}-content`},[I&&l("div",{class:`${a}-content-label`},[I]),t.default&&l("div",{class:`${a}-content-desc`},[t.default()])])])}}}),G=x({name:"IxTimeline",props:j,setup(e,{slots:t}){const d=B("common"),r=c(()=>`${d.prefixCls}-timeline`),u=c(()=>e.pending!==!1||C(t,"pending")),f=c(()=>{const{placement:s,reverse:p,both:m}=e,i=r.value;return g({[`${i}`]:!0,[`${i}-${s}`]:!0,[`${i}-reverse`]:p,[`${i}-not-both`]:!m,[`${i}-pending`]:u.value})});return T(S,{props:e,mergedPrefixCls:r}),()=>{const s=M(t,e,u,r);return l("ul",{class:f.value},[s.value])}}});function K(e){return E(e,{key:y}).map((t,d)=>(t.index=d,t))}function M(e,t,d,r){return c(()=>{var n,o;const{pending:u,pendingDot:f,reverse:s}=t,p=((n=e==null?void 0:e.default)==null?void 0:n.call(e))||[];let m=null;if(d.value){const a=((o=e==null?void 0:e.pendingDot)==null?void 0:o.call(e))||f||l(D,{name:"loading"},null);m=l(b,{class:`${r.value}-item-pending`},{default:()=>[$(e.pending,h(u)?"":u)],dot:()=>a})}const i=s?[m,...p.reverse()]:[...p,m];return K(i.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O=G,U=b;export{O as I,U as a};
