import{A as $,aG as N,b5 as A,M as y,N as F,b6 as j,ay as w,m as P,b7 as S}from"./index-e89cd1aa.js";import{l as h,x as G,c as f,p as r,n as H,B as W,ac as D,r as b}from"./vendor-cb0c1489.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=Symbol("popconfirmToken"),E=h({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:p,okLoading:s,cancel:n,ok:g}=G(I),i=f(()=>{var t;return(t=e.cancelText)!=null?t:a.popconfirm.cancelText}),k=f(()=>{var t;return(t=e.okText)!=null?t:a.popconfirm.okText}),v=f(()=>({size:"xs",...e.cancelButton})),T=f(()=>({size:"xs",...e.okButton}));return()=>{const t=l.value,m=o.icon?o.icon():e.icon?r($,{name:e.icon},null):void 0,d=o.title?o.title():e.title,u=o.content?o.content():e.content,x=H({[`${t}-wrapper`]:!0,[`${t}-with-content`]:!!u});return r("div",{class:x},[(m||d)&&r("div",{class:`${t}-title`},[m,r("span",null,[d])]),u&&r("div",{class:`${t}-content`},[u]),r(N,{class:`${t}-footer`,cancel:n,cancelButton:v.value,cancelLoading:p.value,cancelText:i.value,footer:e.footer,ok:g,okButton:T.value,okLoading:s.value,okText:k.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M={...A,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function B(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=(c,o)=>B(c),U=h({name:"IxPopconfirm",props:M,setup(c,{slots:o,expose:e}){const a=y("common"),{globalHashId:l,hashId:p,registerToken:s}=F("popconfirm");s(R);const n=y("locale"),g=y("popconfirm"),i=f(()=>`${a.prefixCls}-popconfirm`),{overlayRef:k,updatePopper:v,visible:T,setVisible:t,overlayProps:m}=j(c,g,i),{cancelLoading:d,okLoading:u,cancel:x,ok:C}=V(c,t);return W(I,{props:c,locale:n,mergedPrefixCls:i,visible:T,cancelLoading:d,okLoading:u,cancel:x,ok:C}),e({updatePopper:v,cancel:x,ok:C}),()=>{const L=i.value,{default:z,...O}=o;return r(w,D({ref:k,class:[L,l.value,p.value],transitionName:`${a.prefixCls}-fade`},m.value),{default:z,content:()=>r(E,null,O)})}}});function V(c,o){const e=b(!1),a=async s=>{let n=P(c.onCancel,s);S(n)&&(e.value=!0,n=await n,e.value=!1),n!==!1&&o(!1)},l=b(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async s=>{let n=P(c.onOk,s);S(n)&&(l.value=!0,n=await n,l.value=!1),n!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=U;export{J as I};