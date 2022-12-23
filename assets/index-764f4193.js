import{n as g,af as x,u as N,v as P,a9 as T}from"./index-cbb19196.js";import{i as h,a as B}from"./colors-9a160b11.js";import{v as C,i as D,e as c,y as l,z as $,E,p as _,au as k}from"./vendor-5869a5c0.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=Symbol("timelineToken"),y=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},K={color:{type:String,default:"primary"},dot:String,label:String,placement:String},b=C({name:"IxTimelineItem",props:K,[y]:!0,setup(e,{slots:t}){const{props:d,mergedPrefixCls:r}=D(S),{vnode:u}=E(),f=c(()=>{const{placement:n}=d,{placement:o}=e,a=u.index;let v;return n==="alternate"?v=o||(a%2?"start":"end"):v=n,v}),s=c(()=>h(e.color)||B(e.color)),p=c(()=>{const{color:n}=e;return s.value?{}:{color:n,"border-color":n}}),m=c(()=>{const n=`${r.value}-item`,o=f.value;return $({[`${n}`]:!0,[`${n}-${o}`]:!0})}),i=c(()=>{const n=`${r.value}-item-head`,{dot:o,color:a}=e;return $({[`${n}-dot`]:!0,[`${n}-dot-custom`]:x(t,"dot")||!!o,[`${n}-dot-${a}`]:s.value})});return()=>{const{label:n,dot:o}=e,a=`${r.value}-item`,v=g(t.dot,o),I=g(t.label,n);return l("li",{class:m.value},[l("div",{class:`${a}-head`},[l("div",{class:`${a}-head-line`},null),l("div",{class:i.value,style:p.value},[v])]),l("div",{class:`${a}-content`},[I&&l("div",{class:`${a}-content-label`},[I]),t.default&&l("div",{class:`${a}-content-desc`},[t.default()])])])}}}),M=C({name:"IxTimeline",props:z,setup(e,{slots:t}){const d=N("common"),r=c(()=>`${d.prefixCls}-timeline`),u=c(()=>e.pending!==!1||x(t,"pending")),f=c(()=>{const{placement:s,reverse:p,both:m}=e,i=r.value;return $({[`${i}`]:!0,[`${i}-${s}`]:!0,[`${i}-reverse`]:p,[`${i}-not-both`]:!m,[`${i}-pending`]:u.value})});return _(S,{props:e,mergedPrefixCls:r}),()=>{const s=j(t,e,u,r);return l("ul",{class:f.value},[s.value])}}});function V(e){return T(e,{key:y}).map((t,d)=>(t.index=d,t))}function j(e,t,d,r){return c(()=>{var n,o;const{pending:u,pendingDot:f,reverse:s}=t,p=((n=e==null?void 0:e.default)==null?void 0:n.call(e))||[];let m=null;if(d.value){const a=((o=e==null?void 0:e.pendingDot)==null?void 0:o.call(e))||f||l(P,{name:"loading"},null);m=l(b,{class:`${r.value}-item-pending`},{default:()=>[g(e.pending,k(u)?"":u)],dot:()=>a})}const i=s?[m,...p.reverse()]:[...p,m];return V(i.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=M,X=b;export{U as I,X as a};
