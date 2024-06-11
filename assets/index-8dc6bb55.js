import{A as O,aG as N,b5 as w,M as y,N as A,b6 as F,b7 as j,m as P,b8 as S}from"./index-9cb41eac.js";import{l as h,y as D,c as p,q as r,p as G,D as H,a7 as W,r as b}from"./vendor-fe119cfa.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=Symbol("popconfirmToken"),q=h({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:m,okLoading:i,cancel:t,ok:k}=D(I),s=p(()=>{var n;return(n=e.cancelText)!=null?n:a.popconfirm.cancelText}),v=p(()=>{var n;return(n=e.okText)!=null?n:a.popconfirm.okText}),x=p(()=>({size:"xs",...e.cancelButton})),T=p(()=>({size:"xs",...e.okButton}));return()=>{const n=l.value,u=o.icon?o.icon():e.icon?r(O,{name:e.icon},null):void 0,d=o.title?o.title():e.title,f=o.content?o.content():e.content,g=G({[`${n}-wrapper`]:!0,[`${n}-with-icon`]:!!u,[`${n}-with-content`]:!!f});return r("div",{class:g},[(u||d)&&r("div",{class:`${n}-title`},[u,r("span",null,[d])]),f&&r("div",{class:`${n}-content`},[f]),r(N,{class:`${n}-footer`,cancel:t,cancelButton:x.value,cancelLoading:m.value,cancelText:s.value,footer:e.footer,ok:k,okButton:T.value,okLoading:i.value,okText:v.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={...w,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function B(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=(c,o)=>B(c),R=h({name:"IxPopconfirm",props:E,setup(c,{slots:o,expose:e}){const a=y("common"),{globalHashId:l,hashId:m,registerToken:i}=A("popconfirm");i(M);const t=y("locale"),k=y("popconfirm"),s=p(()=>`${a.prefixCls}-popconfirm`),{overlayRef:v,updatePopper:x,visible:T,setVisible:n,overlayProps:u}=F(c,k,s),{cancelLoading:d,okLoading:f,cancel:g,ok:C}=U(c,n);return H(I,{props:c,locale:t,mergedPrefixCls:s,visible:T,cancelLoading:d,okLoading:f,cancel:g,ok:C}),e({updatePopper:x,cancel:g,ok:C}),()=>{const L=s.value,{default:$,...z}=o;return r(j,W({ref:v,class:[L,l.value,m.value],transitionName:`${a.prefixCls}-fade`},u.value),{default:$,content:()=>r(q,null,z)})}}});function U(c,o){const e=b(!1),a=async i=>{let t=P(c.onCancel,i);S(t)&&(e.value=!0,t=await t,e.value=!1),t!==!1&&o(!1)},l=b(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async i=>{let t=P(c.onOk,i);S(t)&&(l.value=!0,t=await t,l.value=!1),t!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=R;export{J as I};
