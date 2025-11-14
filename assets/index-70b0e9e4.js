import{bF as I,d as P,as as f,at as T,c as u,bG as x,f as l,af as C,bH as y,bj as S}from"./index-639d4621.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={...I,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String,showArrow:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function h(e){const{fontSizeSm:o,colorTextInfo:n}=e;return{fontSize:o,color:n,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=(e,o)=>h(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=P({name:"IxPopover",props:O,setup(e,{slots:o,expose:n}){const r=f("common"),{globalHashId:c,hashId:t,registerToken:s}=T("popover");s($);const i=f("popover"),d=u(()=>`${r.prefixCls}-popover`),{overlayRef:v,updatePopper:m,overlayProps:p,setVisible:b}=x(e,i,d);n({updatePopper:m});const g=u(()=>{var a;return(a=e.closeIcon)!=null?a:i.closeIcon});return()=>{const a=d.value;return l(y,C({ref:v,class:[a,c.value,t.value]},p.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>k(e,o,g,b,a)})}}}),k=(e,o,n,r,c)=>{var s;if(!(o.header||e.header||o.content||e.content))return null;const t=[];return(o.header||e.header)&&t.push(l(S,{size:"sm",closable:e.closable,closeIcon:n.value,header:(s=e.header)!=null?s:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&t.push(l("div",{class:`${c}-content`},[o.content?o.content():e.content])),l("div",{class:`${c}-wrapper`},[t])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=j;export{z as I};
