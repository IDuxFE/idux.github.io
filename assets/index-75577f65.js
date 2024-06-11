import{c as x,l as F,b as y,w as N,d as V,p as j,q as a,O as L}from"./vendor-fe119cfa.js";import{ak as z,m as b,al as d,M as P,N as M,am as R,an as q,A as k,a5 as D}from"./index-9cb41eac.js";import{I as G}from"./index-92bb74bf.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function H(e,n){const l=x(()=>{var s;return(s=e.closable)!=null?s:n.closable}),[i,t]=z(!0);return{closeable:l,visible:i,handleClose:async()=>{await b(e.onBeforeClose)!==!1&&(t(!1),b(e.onClose))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J={banner:{type:Boolean,default:!1},closable:{type:Boolean,default:void 0},closeIcon:{type:String,default:"close"},description:String,icon:String,title:[String,Array],pagination:{type:[Boolean,Object],default:!1},type:{type:String,default:"warning"},onAfterClose:[Function,Array],onBeforeClose:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function O(e,n){const{heightMd:l,borderRadiusSm:i,alertCompColorAlpha:t,colorContainerBg:r,colorSuccessText:s,colorSuccessBg:f,colorInfoText:u,colorInfoBg:g,colorErrorText:C,colorErrorBg:I,colorOfflineText:T,colorOffline:p}=e,{getColorPalette:A,getBaseColors:m}=n,B=A(m().bronze);return{height:l,borderRadius:i,successTextColor:s,successBgColor:d(f,t,r),infoTextColor:u,infoBgColor:d(g,t,r),warningTextColor:B.d10,warningBgColor:d(m().gold,t,r),errorTextColor:C,errorBgColor:d(I,t,r),offlineTextColor:T,offlineBgColor:d(p,t,r)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=(e,n,l)=>O(e,l),K=F({name:"IxAlert",props:J,setup(e,{slots:n}){const l=P("common"),{globalHashId:i,hashId:t,registerToken:r}=M("alert");r(Q);const s=x(()=>`${l.prefixCls}-alert`),f=P("alert"),[u,g]=z(1),C=x(()=>{if(e.icon!==void 0)return e.icon;const o=f.icon;return y(o)?o[e.type]:o}),{closeable:I,visible:T,handleClose:p}=H(e,f),A=o=>{g(o)};N(()=>e.pagination,o=>{y(o)&&!V(o.pageIndex)&&g(o.pageIndex)},{deep:!0,immediate:!0}),N(u,o=>{const{pagination:h}=e;y(h)&&b(h.onChange,o)});const m=x(()=>{const o=s.value;return j({[i.value]:!!i.value,[t.value]:!!t.value,[o]:!0,[`${o}-${e.type}`]:!0,[`${o}-banner`]:e.banner,[`${o}-with-description`]:n.description||e.description})}),B=()=>b(e.onAfterClose);return()=>{const{title:o,pagination:h}=e,v=n.default?R(n.default()):q(o),S=h&&v.length>1,E=S?v[u.value-1]:v,$=n.icon?n.icon():C.value&&a(k,{name:C.value},null),w=D(n,e,"description"),c=s.value;return a(L,{name:c,onAfterLeave:B},{default:()=>[T.value&&a("div",{class:m.value},[$&&a("span",{class:`${c}-icon`},[$]),a("div",{class:`${c}-content`},[a("div",{class:`${c}-title`},[E]),w&&a("div",{class:`${c}-description`},[w])]),S&&a(G,{class:`${c}-pagination`,total:v.length,simple:!0,pageIndex:u.value,showTotal:!1,showQuickJumper:!1,pageSize:1,onChange:A},null),I.value&&a("span",{class:`${c}-close-icon`,onClick:p},[n.closeIcon?n.closeIcon():a(k,{name:e.closeIcon},null)])])]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=K;export{Y as I};
