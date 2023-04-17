import{b0 as p,L as i,b1 as h,at as b,an as P}from"./index-e66ad7a0.js";import{v as I,f as d,y as l,a3 as g}from"./vendor-41461ead.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C={...p,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},x=I({name:"IxPopover",props:C,setup(e,{slots:o,expose:s}){const r=i("common"),t=i("popover"),n=d(()=>`${r.prefixCls}-popover`),{overlayRef:c,updatePopper:f,overlayProps:u,setVisible:v}=h(e,t,n);s({updatePopper:f});const m=d(()=>{var a;return(a=e.closeIcon)!=null?a:t.closeIcon});return()=>{const a=n.value;return l(b,g({ref:c,class:a},u.value,{transitionName:`${r.prefixCls}-fade`}),{default:o.default,content:()=>y(e,o,m,v,a)})}}}),y=(e,o,s,r,t)=>{var c;if(!(o.header||e.header||o.content||e.content))return null;const n=[];return(o.header||e.header)&&n.push(l(P,{size:"sm",closable:e.closable,closeIcon:s.value,header:(c=e.header)!=null?c:e.title,onClose:()=>r(!1)},{header:o.header})),(o.content||e.content)&&n.push(l("div",{class:`${t}-content`},[o.content?o.content():e.content])),l("div",{class:`${t}-wrapper`},[n])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=x;export{S as I};
