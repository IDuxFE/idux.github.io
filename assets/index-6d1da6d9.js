import{v as O,aB as S,a$ as I,u as T,b0 as N,at as j,i as C,b1 as P}from"./index-cbb19196.js";import{v as B,e as p,y as c,z as w,i as z,p as A,a2 as F,b}from"./vendor-5869a5c0.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("popconfirmToken"),h=B({name:"IxPopconfirmContent",setup(a,{slots:n}){const{props:e,locale:l,mergedPrefixCls:r,cancelLoading:m,okLoading:t,cancel:o,ok:d}=z(L),v=p(()=>e.cancelText??l.popconfirm.cancelText),x=p(()=>e.okText??l.popconfirm.okText),k=p(()=>({size:"xs",...e.cancelButton})),g=p(()=>({size:"xs",...e.okButton}));return()=>{const s=r.value,i=n.icon?n.icon():e.icon?c(O,{name:e.icon},null):void 0,u=n.title?n.title():e.title,f=n.content?n.content():e.content,y=w({[`${s}-wrapper`]:!0,[`${s}-with-content`]:!!f});return c("div",{class:y},[(i||u)&&c("div",{class:`${s}-title`},[i,c("span",null,[u])]),f&&c("div",{class:`${s}-content`},[f]),c(S,{class:`${s}-footer`,cancel:o,cancelButton:k.value,cancelLoading:m.value,cancelText:v.value,footer:e.footer,ok:d,okButton:g.value,okLoading:t.value,okText:x.value},n)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={...I,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]},G=B({name:"IxPopconfirm",props:E,setup(a,{slots:n,expose:e}){const l=T("common"),r=T("locale"),m=T("popconfirm"),t=p(()=>`${l.prefixCls}-popconfirm`),{overlayRef:o,updatePopper:d,visible:v,setVisible:x,overlayProps:k}=N(a,m,t),{cancelLoading:g,okLoading:s,cancel:i,ok:u}=R(a,x);return A(L,{props:a,locale:r,mergedPrefixCls:t,visible:v,cancelLoading:g,okLoading:s,cancel:i,ok:u}),e({updatePopper:d,cancel:i,ok:u}),()=>{const f=t.value,{default:y,...$}=n;return c(j,F({ref:o,class:f,transitionName:`${l.prefixCls}-fade`},k.value),{default:y,content:()=>c(h,null,$)})}}});function R(a,n){const e=b(!1),l=async t=>{let o=C(a.onCancel,t);P(o)&&(e.value=!0,o=await o,e.value=!1),o!==!1&&n(!1)},r=b(!1);return{cancelLoading:e,okLoading:r,cancel:l,ok:async t=>{let o=C(a.onOk,t);P(o)&&(r.value=!0,o=await o,r.value=!1),o!==!1&&n(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _=G;export{_ as I};
