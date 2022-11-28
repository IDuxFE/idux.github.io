import{b4 as h,u as f,b5 as p,ax as b,aq as P}from"./index.f300137b.js";import{v as I,e as v,y as d,a1 as g}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x={...h,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},y=I({name:"IxPopover",props:x,setup(e,{slots:o,expose:u}){const t=f("common"),n=f("popover"),a=v(()=>`${t.prefixCls}-popover`),{overlayRef:r,updatePopper:l,overlayProps:s,setVisible:i}=p(e,n,t,a);u({updatePopper:l});const m=v(()=>{var c;return(c=e.closeIcon)!=null?c:n.closeIcon});return()=>{const c=a.value;return d(b,g({ref:r,class:c},s.value,{transitionName:`${t.prefixCls}-fade`}),{default:o.default,content:()=>C(e,o,m,i,c)})}}}),C=(e,o,u,t,n)=>{var l,s,i;if(!(o.header||e.header||o.content||e.content))return null;let a=`${n}-wrapper`;const r=[];return(o.header||e.header)&&(r.push(d(P,{size:"sm",closable:e.closable,closeIcon:u.value,header:(l=e.header)!=null?l:e.title,onClose:()=>t(!1)},{header:o.header})),a+=` ${n}-with-header`),(o.content||e.content)&&r.push(d("div",{class:`${n}-content`},[(i=(s=o.content)==null?void 0:s.call(o))!=null?i:e.content])),d("div",{class:a},[r])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=y;export{S as I};
