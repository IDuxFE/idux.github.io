import{b1 as v,L as i,b2 as h,au as b,ao as P}from"./index-22ebbaf3.js";import{x as I,c as d,z as l,a3 as g}from"./vendor-a14e3fe7.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x={...v,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},C=I({name:"IxPopover",props:x,setup(e,{slots:o,expose:s}){const c=i("common"),t=i("popover"),n=d(()=>`${c.prefixCls}-popover`),{overlayRef:r,updatePopper:f,overlayProps:u,setVisible:m}=h(e,t,n);s({updatePopper:f});const p=d(()=>{var a;return(a=e.closeIcon)!=null?a:t.closeIcon});return()=>{const a=n.value;return l(b,g({ref:r,class:a},u.value,{transitionName:`${c.prefixCls}-fade`}),{default:o.default,content:()=>y(e,o,p,m,a)})}}}),y=(e,o,s,c,t)=>{var r;if(!(o.header||e.header||o.content||e.content))return null;const n=[];return(o.header||e.header)&&n.push(l(P,{size:"sm",closable:e.closable,closeIcon:s.value,header:(r=e.header)!=null?r:e.title,onClose:()=>c(!1)},{header:o.header})),(o.content||e.content)&&n.push(l("div",{class:`${t}-content`},[o.content?o.content():e.content])),l("div",{class:`${t}-wrapper`},[n])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=C;export{S as I};
