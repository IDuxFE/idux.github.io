import{b6 as b,M as u,N as P,b7 as T,az as x,ar as C}from"./index-c73ba825.js";import{l as S,c as f,p as s,ac as y}from"./vendor-deae6a9f.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z={...b,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function m(e){const{fontSizeSm:o,colorTextInfo:n}=e;return{fontSize:o,color:n,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O=(e,o)=>m(e),$=S({name:"IxPopover",props:z,setup(e,{slots:o,expose:n}){const r=u("common"),{globalHashId:c,hashId:t,registerToken:l}=P("popover");l(O);const i=u("popover"),d=f(()=>`${r.prefixCls}-popover`),{overlayRef:h,updatePopper:p,overlayProps:v,setVisible:g}=T(e,i,d);n({updatePopper:p});const I=f(()=>{var a;return(a=e.closeIcon)!=null?a:i.closeIcon});return()=>{const a=d.value;return s(x,y({ref:h,class:[a,c.value,t.value]},v.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>k(e,o,I,g,a)})}}}),k=(e,o,n,r,c)=>{var l;if(!(o.header||e.header||o.content||e.content))return null;const t=[];return(o.header||e.header)&&t.push(s(C,{size:"sm",closable:e.closable,closeIcon:n.value,header:(l=e.header)!=null?l:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&t.push(s("div",{class:`${c}-content`},[o.content?o.content():e.content])),s("div",{class:`${c}-wrapper`},[t])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=$;export{H as I};
