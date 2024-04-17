import{c as h,l as j,b as I,w as x,d as z,p as E,q as l,P as L}from"./vendor-7ed7823e.js";import{ak as T,m as v,al as u,M as y,N as M,am as R,an as q,A as $,a5 as D}from"./index-cd46e9ff.js";import{I as G}from"./index-4475b9fa.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function H(e,o){const r=h(()=>{var s;return(s=e.closable)!=null?s:o.closable}),[a,t]=T(!0);return{closeable:r,visible:a,handleClose:async()=>{await v(e.onBeforeClose)!==!1&&(t(!1),v(e.onClose))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J={banner:{type:Boolean,default:!1},closable:{type:Boolean,default:void 0},closeIcon:{type:String,default:"close"},description:String,icon:String,title:[String,Array],pagination:{type:[Boolean,Object],default:!1},type:{type:String,default:"warning"},onAfterClose:[Function,Array],onBeforeClose:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function S(e){const{heightMd:o,borderRadiusSm:r,alertCompColorAlpha:a,colorContainerBg:t,colorSuccessBg:d,colorInfoBg:s,colorWarningBg:g,colorErrorBg:c,colorOffline:f}=e;return{height:o,borderRadius:r,successBgColor:u(d,a,t),infoBgColor:u(s,a,t),warningBgColor:u(g,a,t),errorBgColor:u(c,a,t),offlineBgColor:u(f,a,t)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=(e,o)=>S(e),W=j({name:"IxAlert",props:J,setup(e,{slots:o}){const r=y("common"),{globalHashId:a,hashId:t,registerToken:d}=M("alert");d(Q);const s=h(()=>`${r.prefixCls}-alert`),g=y("alert"),[c,f]=T(1),b=h(()=>{if(e.icon!==void 0)return e.icon;const n=g.icon;return I(n)?n[e.type]:n}),{closeable:w,visible:N,handleClose:P}=H(e,g),k=n=>{f(n)};x(()=>e.pagination,n=>{I(n)&&!z(n.pageIndex)&&f(n.pageIndex)},{deep:!0,immediate:!0}),x(c,n=>{const{pagination:C}=e;I(C)&&v(C.onChange,n)});const F=h(()=>{const n=s.value;return E({[a.value]:!!a.value,[t.value]:!!t.value,[n]:!0,[`${n}-${e.type}`]:!0,[`${n}-banner`]:e.banner,[`${n}-with-description`]:o.description||e.description})}),O=()=>v(e.onAfterClose);return()=>{const{title:n,pagination:C}=e,m=o.default?R(o.default()):q(n),p=C&&m.length>1,V=p?m[c.value-1]:m,A=o.icon?o.icon():b.value&&l($,{name:b.value},null),B=D(o,e,"description"),i=s.value;return l(L,{name:i,onAfterLeave:O},{default:()=>[N.value&&l("div",{class:F.value},[A&&l("span",{class:`${i}-icon`},[A]),l("div",{class:`${i}-content`},[l("div",{class:`${i}-title`},[V]),B&&l("div",{class:`${i}-description`},[B])]),p&&l(G,{class:`${i}-pagination`,total:m.length,simple:!0,pageIndex:c.value,showTotal:!1,showQuickJumper:!1,pageSize:1,onChange:k},null),w.value&&l("span",{class:`${i}-close-icon`,onClick:P},[o.closeIcon?o.closeIcon():l($,{name:e.closeIcon},null)])])]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=W;export{Y as I};
