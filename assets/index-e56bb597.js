import{bg as h,a5 as S,M as P,N as B,A as D,am as k}from"./index-c8d09f7e.js";import{l as y,y as z,c as a,p as $,q as o,h as M,D as E,au as _}from"./vendor-754a3ca4.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=["red","orange","brown","yellow","canary","bud","green","turquoise","cyan","glacier","blue","indigo","purple","magenta"];function L(e){return w.includes(e)}const W=["primary","info","pending","success","warning","error"];function q(e){return W.includes(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=Symbol("timelineToken"),x=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},V={color:{type:String,default:"primary"},dot:String,label:String,placement:String},N=y({name:"IxTimelineItem",props:V,[x]:!0,setup(e,{slots:t}){const{props:l,mergedPrefixCls:r}=z(T),{vnode:i}=M(),v=a(()=>{const{placement:n}=l,{placement:s}=e,u=i.index;let I;return n==="alternate"?I=s||(u%2?"start":"end"):I=n,I}),c=a(()=>L(e.color)||q(e.color)),d=a(()=>{const{color:n}=e;return c.value?{}:{color:n,"border-color":n}}),m=a(()=>c.value?{}:{"background-color":e.color}),g=a(()=>{const n=`${r.value}-item`,s=v.value;return $({[`${n}`]:!0,[`${n}-${s}`]:!0})}),f=a(()=>h(t,"dot")||!!e.dot),p=a(()=>{const n=`${r.value}-item-head`,{color:s}=e;return $({[`${n}-dot`]:!0,[`${n}-dot-custom`]:f.value,[`${n}-dot-${s}`]:c.value})});return()=>{const{label:n,dot:s}=e,u=`${r.value}-item`,I=S(t.dot,s),C=S(t.label,n);return o("li",{class:g.value},[o("div",{class:`${u}-head`},[o("div",{class:`${u}-head-line`},null),o("div",{class:p.value,style:d.value},[I,!f.value&&o("div",{class:`${u}-head-dot-inner`,style:m.value},null)])]),o("div",{class:`${u}-content`},[t.default&&o("div",{class:`${u}-content-desc`},[t.default()]),C&&o("div",{class:`${u}-content-label`},[C])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function b(e){const{fontSizeSm:t,marginSizeSm:l,marginSizeLg:r,colorSeparator:i}=e;return{fontSize:t,dotSize:12,dotBorderWidth:2,contentLabelMarginTop:l,lineWidth:2,lineBgColor:i,pendingItemContentMinWidth:40,contentMarginBottom:r}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=(e,t)=>b(e),A=y({name:"IxTimeline",props:K,setup(e,{slots:t}){const l=P("common"),{globalHashId:r,hashId:i,registerToken:v}=B("timeline");v(j);const c=a(()=>`${l.prefixCls}-timeline`),d=a(()=>e.pending!==!1||h(t,"pending")),m=a(()=>{const{placement:g,reverse:f,both:p}=e,n=c.value;return $({[r.value]:!!r.value,[i.value]:!!i.value,[`${n}`]:!0,[`${n}-${g}`]:!0,[`${n}-reverse`]:f,[`${n}-not-both`]:!p,[`${n}-pending`]:d.value})});return E(T,{props:e,mergedPrefixCls:c}),()=>{const g=H(t,e,d,c);return o("ul",{class:m.value},[g.value])}}});function G(e){return k(e,{key:x}).map((t,l)=>(t.index=l,t))}function H(e,t,l,r){return a(()=>{var f,p;const{pending:i,pendingDot:v,reverse:c}=t,d=((f=e==null?void 0:e.default)==null?void 0:f.call(e))||[];let m=null;if(l.value){const n=((p=e==null?void 0:e.pendingDot)==null?void 0:p.call(e))||v||o(D,{name:"loading"},null);m=o(N,{class:`${r.value}-item-pending`},{default:()=>[S(e.pending,_(i)?"":i)],dot:()=>n})}const g=c?[m,...d.reverse()]:[...d,m];return G(g.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=A,Y=N;export{Y as I,X as a};
