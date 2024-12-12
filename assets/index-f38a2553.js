import{d as T,i as B,c as l,an as I,cU as h,aN as C,f as o,cV as k,as as D,at as z,a4 as M,$ as E,b7 as L,bd as _}from"./index-ab797f89.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=["red","orange","brown","yellow","canary","bud","green","turquoise","cyan","glacier","blue","indigo","purple","magenta"];function V(e){return w.includes(e)}const W=["primary","info","pending","success","warning","error"];function K(e){return W.includes(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x=Symbol("timelineToken"),N=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},labelPlacement:{type:String,default:"bottom"},both:{type:Boolean,default:!0}},j={color:{type:String,default:"primary"},dot:String,label:String,placement:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=T({name:"IxTimelineItem",props:j,[N]:!0,setup(e,{slots:n}){const{props:r,mergedPrefixCls:i}=B(x),{vnode:c}=k(),$=l(()=>{const{placement:t}=r,{placement:u}=e,a=c.index;let b;return t==="alternate"?b=u||(a%2?"start":"end"):b=t,b}),s=l(()=>V(e.color)||K(e.color)),m=l(()=>r.labelPlacement==="top"),g=l(()=>{const{color:t}=e;return s.value?{}:{color:t,"border-color":t}}),v=l(()=>s.value?{}:{"background-color":e.color}),p=l(()=>{const t=`${i.value}-item`,u=$.value;return I({[`${t}`]:!0,[`${t}-${u}`]:!0})}),f=l(()=>h(n,"dot")||!!e.dot),d=l(()=>{const t=`${i.value}-item-head`,{color:u}=e;return I({[`${t}-dot`]:!0,[`${t}-dot-custom`]:f.value,[`${t}-dot-${u}`]:s.value})});return()=>{const{label:t,dot:u}=e,a=`${i.value}-item`,b=C(n.dot,u),S=C(n.label,t);return o("li",{class:p.value},[o("div",{class:`${a}-head`},[o("div",{class:`${a}-head-line`},null),o("div",{class:d.value,style:g.value},[b,!f.value&&o("div",{class:`${a}-head-dot-inner`,style:v.value},null)])]),m.value?o("div",{class:`${a}-content ${a}-content-top`},[S&&o("div",{class:`${a}-content-label`},[S]),n.default&&o("div",{class:`${a}-content-desc`},[n.default()])]):o("div",{class:`${a}-content`},[n.default&&o("div",{class:`${a}-content-desc`},[n.default()]),S&&o("div",{class:`${a}-content-label`},[S])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function y(e){const{fontSizeSm:n,marginSizeSm:r,marginSizeLg:i,colorSeparator:c}=e;return{fontSize:n,dotSize:12,dotBorderWidth:2,contentLabelMarginTop:r,lineWidth:2,lineBgColor:c,pendingItemContentMinWidth:40,contentMarginBottom:i}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(e,n)=>y(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=T({name:"IxTimeline",props:U,setup(e,{slots:n}){const r=D("common"),{globalHashId:i,hashId:c,registerToken:$}=z("timeline");$(q);const s=l(()=>`${r.prefixCls}-timeline`),m=l(()=>e.pending!==!1||h(n,"pending")),g=l(()=>{const{placement:v,reverse:p,both:f}=e,d=s.value;return I({[i.value]:!!i.value,[c.value]:!!c.value,[`${d}`]:!0,[`${d}-${v}`]:!0,[`${d}-reverse`]:p,[`${d}-not-both`]:!f,[`${d}-pending`]:m.value})});return M(x,{props:e,mergedPrefixCls:s}),()=>{const v=O(n,e,m,s);return o("ul",{class:g.value},[v.value])}}});function H(e){return _(e,{key:N}).map((n,r)=>(n.index=r,n))}function O(e,n,r,i){return l(()=>{var p,f;const{pending:c,pendingDot:$,reverse:s}=n,m=((p=e==null?void 0:e.default)==null?void 0:p.call(e))||[];let g=null;if(r.value){const d=((f=e==null?void 0:e.pendingDot)==null?void 0:f.call(e))||$||o(E,{name:"loading"},null);g=o(P,{class:`${i.value}-item-pending`},{default:()=>[C(e.pending,L(c)?"":c)],dot:()=>d})}const v=s?[g,...m.reverse()]:[...m,g];return H(v.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=G,A=P;export{A as I,Y as a};
