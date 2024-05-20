import{b5 as I,M as u,N as P,b6 as T,b7 as x,ar as C}from"./index-a9f5cd08.js";import{l as S,c as f,q as s,a7 as y}from"./vendor-4501f550.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={...I,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function m(e){const{fontSizeSm:o,colorTextInfo:n}=e;return{fontSize:o,color:n,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=(e,o)=>m(e),k=S({name:"IxPopover",props:O,setup(e,{slots:o,expose:n}){const r=u("common"),{globalHashId:c,hashId:t,registerToken:l}=P("popover");l($);const i=u("popover"),d=f(()=>`${r.prefixCls}-popover`),{overlayRef:h,updatePopper:v,overlayProps:p,setVisible:b}=T(e,i,d);n({updatePopper:v});const g=f(()=>{var a;return(a=e.closeIcon)!=null?a:i.closeIcon});return()=>{const a=d.value;return s(x,y({ref:h,class:[a,c.value,t.value]},p.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>z(e,o,g,b,a)})}}}),z=(e,o,n,r,c)=>{var l;if(!(o.header||e.header||o.content||e.content))return null;const t=[];return(o.header||e.header)&&t.push(s(C,{size:"sm",closable:e.closable,closeIcon:n.value,header:(l=e.header)!=null?l:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&t.push(s("div",{class:`${c}-content`},[o.content?o.content():e.content])),s("div",{class:`${c}-wrapper`},[t])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=k;export{H as I};
