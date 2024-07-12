import{c as x,m as F,b as A,w as P,d as V,q as j,v as a,P as L}from"./vendor-e200cecb.js";import{ar as O,m as b,as as d,T as N,U as R,at as q,au as D,t as k,ac as G}from"./index-4a5449a2.js";import{I as H}from"./index-df79b9ec.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function J(e,n){const l=x(()=>{var s;return(s=e.closable)!=null?s:n.closable}),[i,t]=O(!0);return{closeable:l,visible:i,handleClose:async()=>{await b(e.onBeforeClose)!==!1&&(t(!1),b(e.onClose))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M={banner:{type:Boolean,default:!1},closable:{type:Boolean,default:void 0},closeIcon:{type:String,default:"close"},description:String,icon:String,title:[String,Array],pagination:{type:[Boolean,Object],default:!1},type:{type:String,default:"warning"},onAfterClose:[Function,Array],onBeforeClose:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,n){const{heightMd:l,borderRadiusSm:i,alertCompColorAlpha:t,colorContainerBg:r,colorSuccessText:s,colorSuccessBg:f,colorInfoText:u,colorInfoBg:g,colorErrorText:C,colorErrorBg:I,colorOfflineText:T,colorOffline:p}=e,{getColorPalette:B,getBaseColors:m}=n,y=B(m().bronze);return{height:l,borderRadius:i,successTextColor:s,successBgColor:d(f,t,r),infoTextColor:u,infoBgColor:d(g,t,r),warningTextColor:y.d10,warningBgColor:d(m().gold,t,r),errorTextColor:C,errorBgColor:d(I,t,r),offlineTextColor:T,offlineBgColor:d(p,t,r)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=(e,n,l)=>z(e,l),U=F({name:"IxAlert",props:M,setup(e,{slots:n}){const l=N("common"),{globalHashId:i,hashId:t,registerToken:r}=R("alert");r(Q);const s=x(()=>`${l.prefixCls}-alert`),f=N("alert"),[u,g]=O(1),C=x(()=>{if(e.icon!==void 0)return e.icon;const o=f.icon;return A(o)?o[e.type]:o}),{closeable:I,visible:T,handleClose:p}=J(e,f),B=o=>{g(o)};P(()=>e.pagination,o=>{A(o)&&!V(o.pageIndex)&&g(o.pageIndex)},{deep:!0,immediate:!0}),P(u,o=>{const{pagination:h}=e;A(h)&&b(h.onChange,o)});const m=x(()=>{const o=s.value;return j({[i.value]:!!i.value,[t.value]:!!t.value,[o]:!0,[`${o}-${e.type}`]:!0,[`${o}-banner`]:e.banner,[`${o}-with-description`]:n.description||e.description})}),y=()=>b(e.onAfterClose);return()=>{const{title:o,pagination:h}=e,v=n.default?q(n.default()):D(o),S=h&&v.length>1,E=S?v[u.value-1]:v,$=n.icon?n.icon():C.value&&a(k,{name:C.value},null),w=G(n,e,"description"),c=s.value;return a(L,{name:c,onAfterLeave:y},{default:()=>[T.value&&a("div",{class:m.value},[$&&a("span",{class:`${c}-icon`},[$]),a("div",{class:`${c}-content`},[a("div",{class:`${c}-title`},[E]),w&&a("div",{class:`${c}-description`},[w])]),S&&a(H,{class:`${c}-pagination`,total:v.length,simple:!0,pageIndex:u.value,showTotal:!1,showQuickJumper:!1,pageSize:1,onChange:B},null),I.value&&a("span",{class:`${c}-close-icon`,onClick:p},[n.closeIcon?n.closeIcon():a(k,{name:e.closeIcon},null)])])]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=U;export{Y as I};
