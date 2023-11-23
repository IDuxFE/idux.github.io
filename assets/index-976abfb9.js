import{b7 as I,M as u,N as P,b8 as T,az as x,as as C}from"./index-a1eb659d.js";import{l as S,c as f,n as l,ab as y}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z={...I,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function m(e){const{fontSizeSm:o,colorTextInfo:n}=e;return{fontSize:o,color:n,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O=(e,o)=>m(e),$=S({name:"IxPopover",props:z,setup(e,{slots:o,expose:n}){const r=u("common"),{globalHashId:c,hashId:t,registerToken:s}=P("popover");s(O);const i=u("popover"),d=f(()=>`${r.prefixCls}-popover`),{overlayRef:h,updatePopper:v,overlayProps:p,setVisible:b}=T(e,i,d);n({updatePopper:v});const g=f(()=>{var a;return(a=e.closeIcon)!=null?a:i.closeIcon});return()=>{const a=d.value;return l(x,y({ref:h,class:[a,c.value,t.value]},p.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>k(e,o,g,b,a)})}}}),k=(e,o,n,r,c)=>{var s;if(!(o.header||e.header||o.content||e.content))return null;const t=[];return(o.header||e.header)&&t.push(l(C,{size:"sm",closable:e.closable,closeIcon:n.value,header:(s=e.header)!=null?s:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&t.push(l("div",{class:`${c}-content`},[o.content?o.content():e.content])),l("div",{class:`${c}-wrapper`},[t])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=$;export{H as I};
