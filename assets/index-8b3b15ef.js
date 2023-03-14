import{b9 as x,O as g,L as N,A as P,M as T}from"./index-cbea949a.js";import{i as h,a as B}from"./colors-9a160b11.js";import{v as C,i as D,f as c,z as $,y as l,E,al as _,p as k}from"./vendor-334c0a91.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=Symbol("timelineToken"),b=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},z={color:{type:String,default:"primary"},dot:String,label:String,placement:String},y=C({name:"IxTimelineItem",props:z,[b]:!0,setup(e,{slots:t}){const{props:d,mergedPrefixCls:r}=D(S),{vnode:u}=E(),f=c(()=>{const{placement:n}=d,{placement:o}=e,a=u.index;let v;return n==="alternate"?v=o||(a%2?"start":"end"):v=n,v}),s=c(()=>h(e.color)||B(e.color)),p=c(()=>{const{color:n}=e;return s.value?{}:{color:n,"border-color":n}}),m=c(()=>{const n=`${r.value}-item`,o=f.value;return $({[`${n}`]:!0,[`${n}-${o}`]:!0})}),i=c(()=>{const n=`${r.value}-item-head`,{dot:o,color:a}=e;return $({[`${n}-dot`]:!0,[`${n}-dot-custom`]:x(t,"dot")||!!o,[`${n}-dot-${a}`]:s.value})});return()=>{const{label:n,dot:o}=e,a=`${r.value}-item`,v=g(t.dot,o),I=g(t.label,n);return l("li",{class:m.value},[l("div",{class:`${a}-head`},[l("div",{class:`${a}-head-line`},null),l("div",{class:i.value,style:p.value},[v])]),l("div",{class:`${a}-content`},[I&&l("div",{class:`${a}-content-label`},[I]),t.default&&l("div",{class:`${a}-content-desc`},[t.default()])])])}}}),K=C({name:"IxTimeline",props:M,setup(e,{slots:t}){const d=N("common"),r=c(()=>`${d.prefixCls}-timeline`),u=c(()=>e.pending!==!1||x(t,"pending")),f=c(()=>{const{placement:s,reverse:p,both:m}=e,i=r.value;return $({[`${i}`]:!0,[`${i}-${s}`]:!0,[`${i}-reverse`]:p,[`${i}-not-both`]:!m,[`${i}-pending`]:u.value})});return k(S,{props:e,mergedPrefixCls:r}),()=>{const s=O(t,e,u,r);return l("ul",{class:f.value},[s.value])}}});function L(e){return T(e,{key:b}).map((t,d)=>(t.index=d,t))}function O(e,t,d,r){return c(()=>{var n,o;const{pending:u,pendingDot:f,reverse:s}=t,p=((n=e==null?void 0:e.default)==null?void 0:n.call(e))||[];let m=null;if(d.value){const a=((o=e==null?void 0:e.pendingDot)==null?void 0:o.call(e))||f||l(P,{name:"loading"},null);m=l(y,{class:`${r.value}-item-pending`},{default:()=>[g(e.pending,_(u)?"":u)],dot:()=>a})}const i=s?[m,...p.reverse()]:[...p,m];return L(i.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=K,U=y;export{G as I,U as a};
