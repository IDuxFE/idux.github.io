import{aO as P,T as u,U as T,aP as b,aQ as x,ay as y}from"./index-b2ce1350.js";import{m as C,c as f,v as s,a7 as S}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={...P,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String,showArrow:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function m(e){const{fontSizeSm:o,colorTextInfo:n}=e;return{fontSize:o,color:n,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=(e,o)=>m(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=C({name:"IxPopover",props:O,setup(e,{slots:o,expose:n}){const r=u("common"),{globalHashId:c,hashId:t,registerToken:l}=T("popover");l($);const i=u("popover"),d=f(()=>`${r.prefixCls}-popover`),{overlayRef:h,updatePopper:v,overlayProps:p,setVisible:g}=b(e,i,d);n({updatePopper:v});const I=f(()=>{var a;return(a=e.closeIcon)!=null?a:i.closeIcon});return()=>{const a=d.value;return s(x,S({ref:h,class:[a,c.value,t.value]},p.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>w(e,o,I,g,a)})}}}),w=(e,o,n,r,c)=>{var l;if(!(o.header||e.header||o.content||e.content))return null;const t=[];return(o.header||e.header)&&t.push(s(y,{size:"sm",closable:e.closable,closeIcon:n.value,header:(l=e.header)!=null?l:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&t.push(s("div",{class:`${c}-content`},[o.content?o.content():e.content])),s("div",{class:`${c}-wrapper`},[t])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=k;export{B as I};
