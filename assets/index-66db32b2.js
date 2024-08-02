import{t as O,aN as N,be as w,T as C,U as F,bf as j,bg as A,m as P,bh as S}from"./index-18117b83.js";import{m as B,z as E,c as p,v as r,q as H,E as U,a7 as W,r as b}from"./vendor-6c299d42.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=Symbol("popconfirmToken"),q=B({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:m,okLoading:i,cancel:t,ok:v}=E(z),s=p(()=>{var n;return(n=e.cancelText)!=null?n:a.popconfirm.cancelText}),k=p(()=>{var n;return(n=e.okText)!=null?n:a.popconfirm.okText}),x=p(()=>({size:"xs",...e.cancelButton})),T=p(()=>({size:"xs",...e.okButton}));return()=>{const n=l.value,u=o.icon?o.icon():e.icon?r(O,{name:e.icon},null):void 0,d=o.title?o.title():e.title,f=o.content?o.content():e.content,g=H({[`${n}-wrapper`]:!0,[`${n}-with-icon`]:!!u,[`${n}-with-content`]:!!f});return r("div",{class:g},[(u||d)&&r("div",{class:`${n}-title`},[u,r("span",null,[d])]),f&&r("div",{class:`${n}-content`},[f]),r(N,{class:`${n}-footer`,cancel:t,cancelButton:x.value,cancelLoading:m.value,cancelText:s.value,footer:e.footer,ok:v,okButton:T.value,okLoading:i.value,okText:k.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D={...w,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function h(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=(c,o)=>h(c),R=B({name:"IxPopconfirm",props:D,setup(c,{slots:o,expose:e}){const a=C("common"),{globalHashId:l,hashId:m,registerToken:i}=F("popconfirm");i(G);const t=C("locale"),v=C("popconfirm"),s=p(()=>`${a.prefixCls}-popconfirm`),{overlayRef:k,updatePopper:x,visible:T,setVisible:n,overlayProps:u}=j(c,v,s),{cancelLoading:d,okLoading:f,cancel:g,ok:y}=V(c,n);return U(z,{props:c,locale:t,mergedPrefixCls:s,visible:T,cancelLoading:d,okLoading:f,cancel:g,ok:y}),e({updatePopper:x,cancel:g,ok:y}),()=>{const I=s.value,{default:L,...$}=o;return r(A,W({ref:k,class:[I,l.value,m.value],transitionName:`${a.prefixCls}-fade`},u.value),{default:L,content:()=>r(q,null,$)})}}});function V(c,o){const e=b(!1),a=async i=>{let t=P(c.onCancel,i);S(t)&&(e.value=!0,t=await t,e.value=!1),t!==!1&&o(!1)},l=b(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async i=>{let t=P(c.onOk,i);S(t)&&(l.value=!0,t=await t,l.value=!1),t!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=R;export{K as I};
