import{v as O,aA as S,a_ as I,u as T,a$ as A,as as N,i as C,b0 as P}from"./index-42aa140a.js";import{v as B,e as p,y as c,z as j,i as w,p as z,a2 as F,b}from"./vendor-6c4e542b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("popconfirmToken"),_=B({name:"IxPopconfirmContent",setup(a,{slots:n}){const{props:e,locale:l,mergedPrefixCls:r,cancelLoading:m,okLoading:t,cancel:o,ok:d}=w(L),v=p(()=>e.cancelText??l.popconfirm.cancelText),x=p(()=>e.okText??l.popconfirm.okText),k=p(()=>({size:"xs",...e.cancelButton})),g=p(()=>({size:"xs",...e.okButton}));return()=>{const s=r.value,i=n.icon?n.icon():e.icon?c(O,{name:e.icon},null):void 0,u=n.title?n.title():e.title,f=n.content?n.content():e.content,y=j({[`${s}-wrapper`]:!0,[`${s}-with-content`]:!!f});return c("div",{class:y},[(i||u)&&c("div",{class:`${s}-title`},[i,c("span",null,[u])]),f&&c("div",{class:`${s}-content`},[f]),c(S,{class:`${s}-footer`,cancel:o,cancelButton:k.value,cancelLoading:m.value,cancelText:v.value,footer:e.footer,ok:d,okButton:g.value,okLoading:t.value,okText:x.value},n)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h={...I,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]},E=B({name:"IxPopconfirm",props:h,setup(a,{slots:n,expose:e}){const l=T("common"),r=T("locale"),m=T("popconfirm"),t=p(()=>`${l.prefixCls}-popconfirm`),{overlayRef:o,updatePopper:d,visible:v,setVisible:x,overlayProps:k}=A(a,m,t),{cancelLoading:g,okLoading:s,cancel:i,ok:u}=G(a,x);return z(L,{props:a,locale:r,mergedPrefixCls:t,visible:v,cancelLoading:g,okLoading:s,cancel:i,ok:u}),e({updatePopper:d,cancel:i,ok:u}),()=>{const f=t.value,{default:y,...$}=n;return c(N,F({ref:o,class:f,transitionName:`${l.prefixCls}-fade`},k.value),{default:y,content:()=>c(_,null,$)})}}});function G(a,n){const e=b(!1),l=async t=>{let o=C(a.onCancel,t);P(o)&&(e.value=!0,o=await o,e.value=!1),o!==!1&&n(!1)},r=b(!1);return{cancelLoading:e,okLoading:r,cancel:l,ok:async t=>{let o=C(a.onOk,t);P(o)&&(r.value=!0,o=await o,r.value=!1),o!==!1&&n(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=E;export{V as I};
