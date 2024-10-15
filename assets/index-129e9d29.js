import{t as $,aN as N,aO as w,T as C,U as F,aP as j,aQ as A,m as y,aR as S}from"./index-b2ce1350.js";import{m as b,z as E,c as p,v as r,q as H,E as R,a7 as U,r as B}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=Symbol("popconfirmToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=b({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:l,cancelLoading:m,okLoading:i,cancel:t,ok:g}=E(z),s=p(()=>{var n;return(n=e.cancelText)!=null?n:a.popconfirm.cancelText}),k=p(()=>{var n;return(n=e.okText)!=null?n:a.popconfirm.okText}),x=p(()=>({size:"xs",...e.cancelButton})),T=p(()=>({size:"xs",...e.okButton}));return()=>{const n=l.value,u=o.icon?o.icon():e.icon?r($,{name:e.icon},null):void 0,d=o.title?o.title():e.title,f=o.content?o.content():e.content,v=H({[`${n}-wrapper`]:!0,[`${n}-with-icon`]:!!u,[`${n}-with-content`]:!!f});return r("div",{class:v},[(u||d)&&r("div",{class:`${n}-title`},[u,r("span",null,[d])]),f&&r("div",{class:`${n}-content`},[f]),r(N,{class:`${n}-footer`,cancel:t,cancelButton:x.value,cancelLoading:m.value,cancelText:s.value,footer:e.footer,ok:g,okButton:T.value,okLoading:i.value,okText:k.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q={...w,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function h(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:l}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:l,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=(c,o)=>h(c);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=b({name:"IxPopconfirm",props:q,setup(c,{slots:o,expose:e}){const a=C("common"),{globalHashId:l,hashId:m,registerToken:i}=F("popconfirm");i(D);const t=C("locale"),g=C("popconfirm"),s=p(()=>`${a.prefixCls}-popconfirm`),{overlayRef:k,updatePopper:x,visible:T,setVisible:n,overlayProps:u}=j(c,g,s),{cancelLoading:d,okLoading:f,cancel:v,ok:P}=Q(c,n);return R(z,{props:c,locale:t,mergedPrefixCls:s,visible:T,cancelLoading:d,okLoading:f,cancel:v,ok:P}),e({updatePopper:x,cancel:v,ok:P}),()=>{const I=s.value,{default:L,...O}=o;return r(A,U({ref:k,class:[I,l.value,m.value],transitionName:`${a.prefixCls}-fade`},u.value),{default:L,content:()=>r(W,null,O)})}}});function Q(c,o){const e=B(!1),a=async i=>{let t=y(c.onCancel,i);S(t)&&(e.value=!0,t=await t,e.value=!1),t!==!1&&o(!1)},l=B(!1);return{cancelLoading:e,okLoading:l,cancel:a,ok:async i=>{let t=y(c.onOk,i);S(t)&&(l.value=!0,t=await t,l.value=!1),t!==!1&&o(!1)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=G;export{J as I};
