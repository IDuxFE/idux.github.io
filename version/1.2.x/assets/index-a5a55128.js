import{a$ as p,u as s,b0 as h,at as P,am as b}from"./index-5a6244f3.js";import{v as I,e as i,y as r,a2 as g}from"./vendor-8302379e.js";const C={...p,closable:{type:Boolean,default:!1},closeIcon:[String,Object],header:[String,Object],content:String},x=I({name:"IxPopover",props:C,setup(e,{slots:o,expose:c}){const t=s("common"),a=s("popover"),n=i(()=>`${t.prefixCls}-popover`),{overlayRef:d,updatePopper:f,overlayProps:u,setVisible:m}=h(e,a,t,n);c({updatePopper:f});const v=i(()=>e.closeIcon??a.closeIcon);return()=>{const l=n.value;return r(P,g({ref:d,class:l},u.value,{transitionName:`${t.prefixCls}-fade`}),{default:o.default,content:()=>y(e,o,v,m,l)})}}}),y=(e,o,c,t,a)=>{if(!(o.header||e.header||o.content||e.content))return null;const n=[];return(o.header||e.header)&&n.push(r(b,{size:"sm",closable:e.closable,closeIcon:c.value,header:e.header??e.title,onClose:()=>t(!1)},{header:o.header})),(o.content||e.content)&&n.push(r("div",{class:`${a}-content`},[o.content?o.content():e.content])),r("div",{class:`${a}-wrapper`},[n])},S=x;export{S as I};
