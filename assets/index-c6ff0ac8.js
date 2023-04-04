import{A as S,aB as $,b0 as I,L as T,b1 as A,at as N,m as C,b2 as P}from"./index-d51c97d1.js";import{v as B,f as p,y as a,z as j,i as w,a3 as z,b,p as F}from"./vendor-3b101b8c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("popconfirmToken"),h=B({name:"IxPopconfirmContent",setup(l,{slots:t}){const{props:e,locale:r,mergedPrefixCls:s,cancelLoading:m,okLoading:c,cancel:o,ok:d}=w(L),v=p(()=>{var n;return(n=e.cancelText)!=null?n:r.popconfirm.cancelText}),x=p(()=>{var n;return(n=e.okText)!=null?n:r.popconfirm.okText}),k=p(()=>({size:"xs",...e.cancelButton})),g=p(()=>({size:"xs",...e.okButton}));return()=>{const n=s.value,i=t.icon?t.icon():e.icon?a(S,{name:e.icon},null):void 0,u=t.title?t.title():e.title,f=t.content?t.content():e.content,y=j({[`${n}-wrapper`]:!0,[`${n}-with-content`]:!!f});return a("div",{class:y},[(i||u)&&a("div",{class:`${n}-title`},[i,a("span",null,[u])]),f&&a("div",{class:`${n}-content`},[f]),a($,{class:`${n}-footer`,cancel:o,cancelButton:k.value,cancelLoading:m.value,cancelText:v.value,footer:e.footer,ok:d,okButton:g.value,okLoading:c.value,okText:x.value},t)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={...I,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]},G=B({name:"IxPopconfirm",props:E,setup(l,{slots:t,expose:e}){const r=T("common"),s=T("locale"),m=T("popconfirm"),c=p(()=>`${r.prefixCls}-popconfirm`),{overlayRef:o,updatePopper:d,visible:v,setVisible:x,overlayProps:k}=A(l,m,c),{cancelLoading:g,okLoading:n,cancel:i,ok:u}=R(l,x);return F(L,{props:l,locale:s,mergedPrefixCls:c,visible:v,cancelLoading:g,okLoading:n,cancel:i,ok:u}),e({updatePopper:d,cancel:i,ok:u}),()=>{const f=c.value,{default:y,...O}=t;return a(N,z({ref:o,class:f,transitionName:`${r.prefixCls}-fade`},k.value),{default:y,content:()=>a(h,null,O)})}}});function R(l,t){const e=b(!1),r=async c=>{let o=C(l.onCancel,c);P(o)&&(e.value=!0,o=await o,e.value=!1),o!==!1&&t(!1)},s=b(!1);return{cancelLoading:e,okLoading:s,cancel:r,ok:async c=>{let o=C(l.onOk,c);P(o)&&(s.value=!0,o=await o,s.value=!1),o!==!1&&t(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _=G;export{_ as I};
