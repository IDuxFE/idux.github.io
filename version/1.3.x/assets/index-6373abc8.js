import{a$ as p,L as s,b0 as h,at as P,an as b}from"./index-4edbd2bb.js";import{v as I,f as i,y as r,a2 as g}from"./vendor-1c103b38.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C={...p,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},x=I({name:"IxPopover",props:C,setup(e,{slots:o,expose:c}){const a=s("common"),t=s("popover"),n=i(()=>`${a.prefixCls}-popover`),{overlayRef:d,updatePopper:f,overlayProps:u,setVisible:v}=h(e,t,n);c({updatePopper:f});const m=i(()=>e.closeIcon??t.closeIcon);return()=>{const l=n.value;return r(P,g({ref:d,class:l},u.value,{transitionName:`${a.prefixCls}-fade`}),{default:o.default,content:()=>y(e,o,m,v,l)})}}}),y=(e,o,c,a,t)=>{if(!(o.header||e.header||o.content||e.content))return null;const n=[];return(o.header||e.header)&&n.push(r(b,{size:"sm",closable:e.closable,closeIcon:c.value,header:e.header??e.title,onClose:()=>a(!1)},{header:o.header})),(o.content||e.content)&&n.push(r("div",{class:`${t}-content`},[o.content?o.content():e.content])),r("div",{class:`${t}-wrapper`},[n])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=x;export{S as I};
