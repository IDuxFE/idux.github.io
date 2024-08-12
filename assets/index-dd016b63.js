import{br as b,ac as S,T as P,U as B,t as k,at as z}from"./index-65f16f37.js";import{m as T,z as D,c as a,q as $,v as o,h as E,E as M,ah as _}from"./vendor-97d35b92.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=["red","orange","brown","yellow","canary","bud","green","turquoise","cyan","glacier","blue","indigo","purple","magenta"];function L(e){return w.includes(e)}const W=["primary","info","pending","success","warning","error"];function q(e){return W.includes(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=Symbol("timelineToken"),x=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},both:{type:Boolean,default:!0}},U={color:{type:String,default:"primary"},dot:String,label:String,placement:String},N=T({name:"IxTimelineItem",props:U,[x]:!0,setup(e,{slots:t}){const{props:l,mergedPrefixCls:r}=D(y),{vnode:i}=E(),p=a(()=>{const{placement:n}=l,{placement:s}=e,u=i.index;let I;return n==="alternate"?I=s||(u%2?"start":"end"):I=n,I}),c=a(()=>L(e.color)||q(e.color)),d=a(()=>{const{color:n}=e;return c.value?{}:{color:n,"border-color":n}}),m=a(()=>c.value?{}:{"background-color":e.color}),g=a(()=>{const n=`${r.value}-item`,s=p.value;return $({[`${n}`]:!0,[`${n}-${s}`]:!0})}),v=a(()=>b(t,"dot")||!!e.dot),f=a(()=>{const n=`${r.value}-item-head`,{color:s}=e;return $({[`${n}-dot`]:!0,[`${n}-dot-custom`]:v.value,[`${n}-dot-${s}`]:c.value})});return()=>{const{label:n,dot:s}=e,u=`${r.value}-item`,I=S(t.dot,s),h=S(t.label,n);return o("li",{class:g.value},[o("div",{class:`${u}-head`},[o("div",{class:`${u}-head-line`},null),o("div",{class:f.value,style:d.value},[I,!v.value&&o("div",{class:`${u}-head-dot-inner`,style:m.value},null)])]),o("div",{class:`${u}-content`},[t.default&&o("div",{class:`${u}-content-desc`},[t.default()]),h&&o("div",{class:`${u}-content-label`},[h])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function C(e){const{fontSizeSm:t,marginSizeSm:l,marginSizeLg:r,colorSeparator:i}=e;return{fontSize:t,dotSize:12,dotBorderWidth:2,contentLabelMarginTop:l,lineWidth:2,lineBgColor:i,pendingItemContentMinWidth:40,contentMarginBottom:r}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=(e,t)=>C(e),j=T({name:"IxTimeline",props:K,setup(e,{slots:t}){const l=P("common"),{globalHashId:r,hashId:i,registerToken:p}=B("timeline");p(V);const c=a(()=>`${l.prefixCls}-timeline`),d=a(()=>e.pending!==!1||b(t,"pending")),m=a(()=>{const{placement:g,reverse:v,both:f}=e,n=c.value;return $({[r.value]:!!r.value,[i.value]:!!i.value,[`${n}`]:!0,[`${n}-${g}`]:!0,[`${n}-reverse`]:v,[`${n}-not-both`]:!f,[`${n}-pending`]:d.value})});return M(y,{props:e,mergedPrefixCls:c}),()=>{const g=H(t,e,d,c);return o("ul",{class:m.value},[g.value])}}});function G(e){return z(e,{key:x}).map((t,l)=>(t.index=l,t))}function H(e,t,l,r){return a(()=>{var v,f;const{pending:i,pendingDot:p,reverse:c}=t,d=((v=e==null?void 0:e.default)==null?void 0:v.call(e))||[];let m=null;if(l.value){const n=((f=e==null?void 0:e.pendingDot)==null?void 0:f.call(e))||p||o(k,{name:"loading"},null);m=o(N,{class:`${r.value}-item-pending`},{default:()=>[S(e.pending,_(i)?"":i)],dot:()=>n})}const g=c?[m,...d.reverse()]:[...d,m];return G(g.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=j,A=N;export{A as I,Y as a};
