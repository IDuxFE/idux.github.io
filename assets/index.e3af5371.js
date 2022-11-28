import{v as L,aG as O,b4 as $,u as g,b5 as j,ax as I,j as y,b6 as T}from"./index.f300137b.js";import{v as b,e as f,y as l,i as N,a1 as S,b as P,p as A}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C=Symbol("popconfirmToken"),F=b({setup(){const{props:e,slots:o,locale:a,mergedPrefixCls:s,cancelLoading:r,okLoading:p,cancel:c,ok:n}=N(C),d=f(()=>{var t;return(t=e.cancelText)!=null?t:a.popconfirm.cancelText}),v=f(()=>{var t;return(t=e.okText)!=null?t:a.popconfirm.okText}),x=f(()=>({size:"xs",...e.cancelButton})),k=f(()=>({size:"xs",...e.okButton}));return()=>{const t=s.value,m=o.icon?o.icon():e.icon?l(L,{name:e.icon},null):void 0,i=o.title?o.title():e.title,u=o.content?o.content():e.content;return l("div",{class:`${t}-wrapper`},[(m||i)&&l("div",{class:`${t}-title`},[m,l("span",null,[i])]),u&&l("div",{class:`${t}-content`},[u]),l(O,{class:`${t}-footer`,cancel:c,cancelButton:x.value,cancelLoading:r.value,cancelText:d.value,footer:e.footer,ok:n,okButton:k.value,okLoading:p.value,okText:v.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w={...$,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]},z=b({name:"IxPopconfirm",props:w,setup(e,{slots:o,expose:a}){const s=g("common"),r=g("locale"),p=g("popconfirm"),c=f(()=>`${s.prefixCls}-popconfirm`),{overlayRef:n,updatePopper:d,visible:v,setVisible:x,overlayProps:k}=j(e,p,s,c),{cancelLoading:t,okLoading:m,cancel:i,ok:u}=G(e,x);return A(C,{props:e,slots:o,locale:r,mergedPrefixCls:c,visible:v,cancelLoading:t,okLoading:m,cancel:i,ok:u}),a({updatePopper:d,cancel:i,ok:u}),()=>{const B=c.value;return l(I,S({ref:n,class:B,transitionName:`${s.prefixCls}-fade`},k.value),{default:o.default,content:()=>l(F,null,null)})}}});function G(e,o){const a=P(!1),s=async c=>{let n=y(e.onCancel,c);T(n)&&(a.value=!0,n=await n,a.value=!1),n!==!1&&o(!1)},r=P(!1);return{cancelLoading:a,okLoading:r,cancel:s,ok:async c=>{let n=y(e.onOk,c);T(n)&&(r.value=!0,n=await n,r.value=!1),n!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=z;export{U as I};
