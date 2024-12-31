import{c as v,bb as O,R as x,bc as d,d as F,as as N,at as R,b8 as A,x as P,aM as V,an as j,bd as L,be as M,f as a,$ as k,aN as D,ar as G}from"./index-88a96bc2.js";import{I as H}from"./index-e82be143.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function J(e,n){const l=v(()=>{var r;return(r=e.closable)!=null?r:n.closable}),[i,t]=O(!0);return{closeable:l,visible:i,handleClose:async()=>{await x(e.onBeforeClose)!==!1&&(t(!1),x(e.onClose))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q={banner:{type:Boolean,default:!1},closable:{type:Boolean,default:void 0},closeIcon:{type:String,default:"close"},description:String,icon:String,title:[String,Array],pagination:{type:[Boolean,Object],default:!1},type:{type:String,default:"warning"},onAfterClose:[Function,Array],onBeforeClose:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,n){const{heightMd:l,borderRadiusSm:i,alertCompColorAlpha:t,colorContainerBg:s,colorSuccessText:r,colorSuccessBg:f,colorInfoText:u,colorInfoBg:g,colorErrorText:C,colorErrorBg:I,colorOfflineText:T,colorOffline:p}=e,{getColorPalette:B,getBaseColors:b}=n,y=B(b().bronze);return{height:l,borderRadius:i,successTextColor:r,successBgColor:d(f,t,s),infoTextColor:u,infoBgColor:d(g,t,s),warningTextColor:y.d10,warningBgColor:d(b().gold,t,s),errorTextColor:C,errorBgColor:d(I,t,s),offlineTextColor:T,offlineBgColor:d(p,t,s)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(e,n,l)=>z(e,l);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=F({name:"IxAlert",props:Q,setup(e,{slots:n}){const l=N("common"),{globalHashId:i,hashId:t,registerToken:s}=R("alert");s(q);const r=v(()=>`${l.prefixCls}-alert`),f=N("alert"),[u,g]=O(1),C=v(()=>{if(e.icon!==void 0)return e.icon;const o=f.icon;return A(o)?o[e.type]:o}),{closeable:I,visible:T,handleClose:p}=J(e,f),B=o=>{g(o)};P(()=>e.pagination,o=>{A(o)&&!V(o.pageIndex)&&g(o.pageIndex)},{deep:!0,immediate:!0}),P(u,o=>{const{pagination:h}=e;A(h)&&x(h.onChange,o)});const b=v(()=>{const o=r.value;return j({[i.value]:!!i.value,[t.value]:!!t.value,[o]:!0,[`${o}-${e.type}`]:!0,[`${o}-banner`]:e.banner,[`${o}-with-description`]:n.description||e.description})}),y=()=>x(e.onAfterClose);return()=>{const{title:o,pagination:h}=e,m=n.default?L(n.default()):M(o),$=h&&m.length>1,E=$?m[u.value-1]:m,S=n.icon?n.icon():C.value&&a(k,{name:C.value},null),w=D(n,e,"description"),c=r.value;return a(G,{name:c,onAfterLeave:y},{default:()=>[T.value&&a("div",{class:b.value},[S&&a("span",{class:`${c}-icon`},[S]),a("div",{class:`${c}-content`},[a("div",{class:`${c}-title`},[E]),w&&a("div",{class:`${c}-description`},[w])]),$&&a(H,{class:`${c}-pagination`,total:m.length,simple:!0,pageIndex:u.value,showTotal:!1,showQuickJumper:!1,pageSize:1,onChange:B},null),I.value&&a("span",{class:`${c}-close-icon`,onClick:p},[n.closeIcon?n.closeIcon():a(k,{name:e.closeIcon},null)])])]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=K;export{X as I};
