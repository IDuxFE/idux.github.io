import{d as h,i as O,c as p,f as r,$ as F,an as w,bD as N,bE as j,as as C,at as A,bF as H,a4 as D,af as E,bG as G,q as y,R as P,bH as S}from"./index-88a96bc2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("popconfirmToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=h({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:m,okLoading:i,cancel:t,ok:k}=O($),s=p(()=>{var n;return(n=e.cancelText)!=null?n:a.popconfirm.cancelText}),v=p(()=>{var n;return(n=e.okText)!=null?n:a.popconfirm.okText}),x=p(()=>({size:"xs",...e.cancelButton})),T=p(()=>({size:"xs",...e.okButton}));return()=>{const n=l.value,u=o.icon?o.icon():e.icon?r(F,{name:e.icon},null):void 0,d=o.title?o.title():e.title,f=o.content?o.content():e.content,g=w({[`${n}-wrapper`]:!0,[`${n}-with-icon`]:!!u,[`${n}-with-content`]:!!f});return r("div",{class:g},[(u||d)&&r("div",{class:`${n}-title`},[u,r("span",null,[d])]),f&&r("div",{class:`${n}-content`},[f]),r(N,{class:`${n}-footer`,cancel:t,cancelButton:x.value,cancelLoading:m.value,cancelText:s.value,footer:e.footer,ok:k,okButton:T.value,okLoading:i.value,okText:v.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W={...j,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function B(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(c,o)=>B(c);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=h({name:"IxPopconfirm",props:W,setup(c,{slots:o,expose:e}){const a=C("common"),{globalHashId:l,hashId:m,registerToken:i}=A("popconfirm");i(q);const t=C("locale"),k=C("popconfirm"),s=p(()=>`${a.prefixCls}-popconfirm`),{overlayRef:v,updatePopper:x,visible:T,setVisible:n,overlayProps:u}=H(c,k,s),{cancelLoading:d,okLoading:f,cancel:g,ok:b}=V(c,n);return D($,{props:c,locale:t,mergedPrefixCls:s,visible:T,cancelLoading:d,okLoading:f,cancel:g,ok:b}),e({updatePopper:x,cancel:g,ok:b}),()=>{const I=s.value,{default:L,...z}=o;return r(G,E({ref:v,class:[I,l.value,m.value],transitionName:`${a.prefixCls}-fade`},u.value),{default:L,content:()=>r(R,null,z)})}}});function V(c,o){const e=y(!1),a=async i=>{let t=P(c.onCancel,i);S(t)&&(e.value=!0,t=await t,e.value=!1),t!==!1&&o(!1)},l=y(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async i=>{let t=P(c.onOk,i);S(t)&&(l.value=!0,t=await t,l.value=!1),t!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=U;export{J as I};
