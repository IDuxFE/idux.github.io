import{d as B,i as O,c as m,f as i,$ as F,an as w,bE as N,bF as j,as as y,at as A,bG as H,a5 as E,af as G,bH as R,q as C,R as P,bI as S}from"./index-639d4621.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=Symbol("popconfirmToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=B({name:"IxPopconfirmContent",setup(c,{slots:o}){const{props:e,locale:a,mergedPrefixCls:s,cancelLoading:r,okLoading:d,cancel:l,ok:t}=O(I),u=m(()=>{var n;return(n=e.cancelText)!=null?n:a.popconfirm.cancelText}),v=m(()=>{var n;return(n=e.okText)!=null?n:a.popconfirm.okText}),x=m(()=>({size:"xs",...e.cancelButton})),T=m(()=>({size:"xs",...e.okButton}));return()=>{const n=s.value,f=o.icon?o.icon():e.icon?i(F,{name:e.icon},null):void 0,g=o.title?o.title():e.title,p=o.content?o.content():e.content,k=w({[`${n}-wrapper`]:!0,[`${n}-with-icon`]:!!f,[`${n}-with-content`]:!!p});return i("div",{class:k},[(f||g)&&i("div",{class:`${n}-title`},[f,i("span",null,[g])]),p&&i("div",{class:`${n}-content`},[p]),i(N,{class:`${n}-footer`,cancel:l,cancelButton:x.value,cancelLoading:r.value,cancelText:u.value,footer:e.footer,ok:t,okButton:T.value,okLoading:d.value,okText:v.value},o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W={...j,cancelButton:Object,cancelText:String,okButton:Object,okText:String,content:String,icon:{type:String,default:"exclamation-circle-filled"},footer:{type:[Boolean,Array,Object],default:!0},"onUpdate:visible":[Function,Array],onCancel:[Function,Array],onOk:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function h(c){const{fontSizeSm:o,fontSizeHeaderSm:e,colorText:a,colorWarningBg:s}=c;return{fontSize:o,titleFontSize:e,color:a,iconColor:s,minWidth:240}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(c,o)=>h(c);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=B({name:"IxPopconfirm",props:W,setup(c,{slots:o,expose:e}){const a=y("common"),{globalHashId:s,hashId:r,registerToken:d}=A("popconfirm");d(q);const l=y("locale"),t=y("popconfirm"),u=m(()=>`${a.prefixCls}-popconfirm`),{overlayRef:v,updatePopper:x,visible:T,setVisible:n,overlayProps:f}=H(c,t,u),{cancelLoading:g,okLoading:p,cancel:k,ok:b}=U(c,n);return E(I,{props:c,locale:l,mergedPrefixCls:u,visible:T,cancelLoading:g,okLoading:p,cancel:k,ok:b}),e({updatePopper:x,cancel:k,ok:b}),()=>{const $=u.value,{default:L,...z}=o;return i(R,G({ref:v,class:[$,s.value,r.value],transitionName:`${a.prefixCls}-fade`},f.value),{default:L,content:()=>i(V,null,z)})}}});function U(c,o){const e=l=>{l!==!1&&o(!1)},a=C(!1),s=async l=>{let t=P(c.onCancel,l);S(t)&&(a.value=!0,t=await t.finally(()=>{a.value=!1})),e(t)},r=C(!1);return{cancelLoading:a,okLoading:r,cancel:s,ok:async l=>{let t=P(c.onOk,l);S(t)&&(r.value=!0,t=await t.finally(()=>{r.value=!1})),e(t)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=D;export{J as I};
