import{A as S,aC as $,b1 as A,L as T,b2 as I,au as N,m as y,b3 as P}from"./index-33a11537.js";import{x as B,l as j,c as p,z as a,A as w,q as z,a3 as F,r as b}from"./vendor-1d4f43eb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("popconfirmToken"),h=B({name:"IxPopconfirmContent",setup(l,{slots:t}){const{props:e,locale:r,mergedPrefixCls:s,cancelLoading:m,okLoading:c,cancel:o,ok:d}=j(L),x=p(()=>{var n;return(n=e.cancelText)!=null?n:r.popconfirm.cancelText}),v=p(()=>{var n;return(n=e.okText)!=null?n:r.popconfirm.okText}),k=p(()=>({size:"xs",...e.cancelButton})),g=p(()=>({size:"xs",...e.okButton}));return()=>{const n=s.value,i=t.icon?t.icon():e.icon?a(S,{name:e.icon},null):void 0,u=t.title?t.title():e.title,f=t.content?t.content():e.content,C=w({[`${n}-wrapper`]:!0,[`${n}-with-content`]:!!f});return a("div",{class:C},[(i||u)&&a("div",{class:`${n}-title`},[i,a("span",null,[u])]),f&&a("div",{class:`${n}-content`},[f]),a($,{class:`${n}-footer`,cancel:o,cancelButton:k.value,cancelLoading:m.value,cancelText:x.value,footer:e.footer,ok:d,okButton:g.value,okLoading:c.value,okText:v.value},t)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q={...A,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]},E=B({name:"IxPopconfirm",props:q,setup(l,{slots:t,expose:e}){const r=T("common"),s=T("locale"),m=T("popconfirm"),c=p(()=>`${r.prefixCls}-popconfirm`),{overlayRef:o,updatePopper:d,visible:x,setVisible:v,overlayProps:k}=I(l,m,c),{cancelLoading:g,okLoading:n,cancel:i,ok:u}=G(l,v);return z(L,{props:l,locale:s,mergedPrefixCls:c,visible:x,cancelLoading:g,okLoading:n,cancel:i,ok:u}),e({updatePopper:d,cancel:i,ok:u}),()=>{const f=c.value,{default:C,...O}=t;return a(N,F({ref:o,class:f,transitionName:`${r.prefixCls}-fade`},k.value),{default:C,content:()=>a(h,null,O)})}}});function G(l,t){const e=b(!1),r=async c=>{let o=y(l.onCancel,c);P(o)&&(e.value=!0,o=await o,e.value=!1),o!==!1&&t(!1)},s=b(!1);return{cancelLoading:e,okLoading:s,cancel:r,ok:async c=>{let o=y(l.onOk,c);P(o)&&(s.value=!0,o=await o,s.value=!1),o!==!1&&t(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=E;export{V as I};
