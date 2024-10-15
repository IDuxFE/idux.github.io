import{br as T,ac as I,T as B,U as k,t as z,at as D}from"./index-b2ce1350.js";import{m as y,z as E,c as l,q as h,v as o,h as M,E as L,ah as _}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=["red","orange","brown","yellow","canary","bud","green","turquoise","cyan","glacier","blue","indigo","purple","magenta"];function W(e){return w.includes(e)}const q=["primary","info","pending","success","warning","error"];function K(e){return q.includes(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x=Symbol("timelineToken"),N=Symbol("IDUX_TIMELINE_ITEM_KEY");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U={pending:{type:[String,Boolean],default:!1},pendingDot:String,reverse:{type:Boolean,default:!1},placement:{type:String,default:"end"},labelPlacement:{type:String,default:"bottom"},both:{type:Boolean,default:!0}},V={color:{type:String,default:"primary"},dot:String,label:String,placement:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=y({name:"IxTimelineItem",props:V,[N]:!0,setup(e,{slots:n}){const{props:r,mergedPrefixCls:i}=E(x),{vnode:c}=M(),$=l(()=>{const{placement:t}=r,{placement:u}=e,a=c.index;let S;return t==="alternate"?S=u||(a%2?"start":"end"):S=t,S}),s=l(()=>W(e.color)||K(e.color)),m=l(()=>r.labelPlacement==="top"),g=l(()=>{const{color:t}=e;return s.value?{}:{color:t,"border-color":t}}),v=l(()=>s.value?{}:{"background-color":e.color}),p=l(()=>{const t=`${i.value}-item`,u=$.value;return h({[`${t}`]:!0,[`${t}-${u}`]:!0})}),f=l(()=>T(n,"dot")||!!e.dot),d=l(()=>{const t=`${i.value}-item-head`,{color:u}=e;return h({[`${t}-dot`]:!0,[`${t}-dot-custom`]:f.value,[`${t}-dot-${u}`]:s.value})});return()=>{const{label:t,dot:u}=e,a=`${i.value}-item`,S=I(n.dot,u),b=I(n.label,t);return o("li",{class:p.value},[o("div",{class:`${a}-head`},[o("div",{class:`${a}-head-line`},null),o("div",{class:d.value,style:g.value},[S,!f.value&&o("div",{class:`${a}-head-dot-inner`,style:v.value},null)])]),m.value?o("div",{class:`${a}-content ${a}-content-top`},[b&&o("div",{class:`${a}-content-label`},[b]),n.default&&o("div",{class:`${a}-content-desc`},[n.default()])]):o("div",{class:`${a}-content`},[n.default&&o("div",{class:`${a}-content-desc`},[n.default()]),b&&o("div",{class:`${a}-content-label`},[b])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function C(e){const{fontSizeSm:n,marginSizeSm:r,marginSizeLg:i,colorSeparator:c}=e;return{fontSize:n,dotSize:12,dotBorderWidth:2,contentLabelMarginTop:r,lineWidth:2,lineBgColor:c,pendingItemContentMinWidth:40,contentMarginBottom:i}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=(e,n)=>C(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=y({name:"IxTimeline",props:U,setup(e,{slots:n}){const r=B("common"),{globalHashId:i,hashId:c,registerToken:$}=k("timeline");$(j);const s=l(()=>`${r.prefixCls}-timeline`),m=l(()=>e.pending!==!1||T(n,"pending")),g=l(()=>{const{placement:v,reverse:p,both:f}=e,d=s.value;return h({[i.value]:!!i.value,[c.value]:!!c.value,[`${d}`]:!0,[`${d}-${v}`]:!0,[`${d}-reverse`]:p,[`${d}-not-both`]:!f,[`${d}-pending`]:m.value})});return L(x,{props:e,mergedPrefixCls:s}),()=>{const v=O(n,e,m,s);return o("ul",{class:g.value},[v.value])}}});function H(e){return D(e,{key:N}).map((n,r)=>(n.index=r,n))}function O(e,n,r,i){return l(()=>{var p,f;const{pending:c,pendingDot:$,reverse:s}=n,m=((p=e==null?void 0:e.default)==null?void 0:p.call(e))||[];let g=null;if(r.value){const d=((f=e==null?void 0:e.pendingDot)==null?void 0:f.call(e))||$||o(z,{name:"loading"},null);g=o(P,{class:`${i.value}-item-pending`},{default:()=>[I(e.pending,_(c)?"":c)],dot:()=>d})}const v=s?[g,...m.reverse()]:[...m,g];return H(v.filter(Boolean))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const A=G,F=P;export{F as I,A as a};
