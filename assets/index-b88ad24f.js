import{a_ as p,u as l,a$ as h,as as P,am as I}from"./index-42aa140a.js";import{v as b,e as i,y as r,a2 as g}from"./vendor-6c4e542b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C={...p,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},x=b({name:"IxPopover",props:C,setup(e,{slots:o,expose:c}){const a=l("common"),t=l("popover"),n=i(()=>`${a.prefixCls}-popover`),{overlayRef:d,updatePopper:f,overlayProps:u,setVisible:m}=h(e,t,n);c({updatePopper:f});const v=i(()=>e.closeIcon??t.closeIcon);return()=>{const s=n.value;return r(P,g({ref:d,class:s},u.value,{transitionName:`${a.prefixCls}-fade`}),{default:o.default,content:()=>y(e,o,v,m,s)})}}}),y=(e,o,c,a,t)=>{if(!(o.header||e.header||o.content||e.content))return null;const n=[];return(o.header||e.header)&&n.push(r(I,{size:"sm",closable:e.closable,closeIcon:c.value,header:e.header??e.title,onClose:()=>a(!1)},{header:o.header})),(o.content||e.content)&&n.push(r("div",{class:`${t}-content`},[o.content?o.content():e.content])),r("div",{class:`${t}-wrapper`},[n])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=x;export{S as I};
