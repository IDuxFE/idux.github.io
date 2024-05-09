import{A as $,aG as N,b5 as A,M as y,N as F,b6 as j,b7 as w,m as P,b8 as S}from"./index-a29fd331.js";import{l as h,y as D,c as f,q as r,p as G,D as H,a7 as W,r as b}from"./vendor-4501f550.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=Symbol("popconfirmToken"),q=h({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:p,okLoading:s,cancel:n,ok:k}=D(I),i=f(()=>{var t;return(t=e.cancelText)!=null?t:a.popconfirm.cancelText}),v=f(()=>{var t;return(t=e.okText)!=null?t:a.popconfirm.okText}),x=f(()=>({size:"xs",...e.cancelButton})),T=f(()=>({size:"xs",...e.okButton}));return()=>{const t=l.value,m=o.icon?o.icon():e.icon?r($,{name:e.icon},null):void 0,d=o.title?o.title():e.title,u=o.content?o.content():e.content,g=G({[`${t}-wrapper`]:!0,[`${t}-with-content`]:!!u});return r("div",{class:g},[(m||d)&&r("div",{class:`${t}-title`},[m,r("span",null,[d])]),u&&r("div",{class:`${t}-content`},[u]),r(N,{class:`${t}-footer`,cancel:n,cancelButton:x.value,cancelLoading:p.value,cancelText:i.value,footer:e.footer,ok:k,okButton:T.value,okLoading:s.value,okText:v.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={...A,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function B(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=(c,o)=>B(c),R=h({name:"IxPopconfirm",props:E,setup(c,{slots:o,expose:e}){const a=y("common"),{globalHashId:l,hashId:p,registerToken:s}=F("popconfirm");s(M);const n=y("locale"),k=y("popconfirm"),i=f(()=>`${a.prefixCls}-popconfirm`),{overlayRef:v,updatePopper:x,visible:T,setVisible:t,overlayProps:m}=j(c,k,i),{cancelLoading:d,okLoading:u,cancel:g,ok:C}=U(c,t);return H(I,{props:c,locale:n,mergedPrefixCls:i,visible:T,cancelLoading:d,okLoading:u,cancel:g,ok:C}),e({updatePopper:x,cancel:g,ok:C}),()=>{const L=i.value,{default:z,...O}=o;return r(w,W({ref:v,class:[L,l.value,p.value],transitionName:`${a.prefixCls}-fade`},m.value),{default:z,content:()=>r(q,null,O)})}}});function U(c,o){const e=b(!1),a=async s=>{let n=P(c.onCancel,s);S(n)&&(e.value=!0,n=await n,e.value=!1),n!==!1&&o(!1)},l=b(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async s=>{let n=P(c.onOk,s);S(n)&&(l.value=!0,n=await n,l.value=!1),n!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=R;export{J as I};
