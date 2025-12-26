import{c as v,bb as O,R as x,bc as f,d as F,as as N,at as L,x as P,bd as R,be as V,f as a,$ as k,aL as j,ar as D,b8 as A,aN as G,an as H}from"./index-200961bb.js";import{I as J}from"./index-2caaf0c6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function M(e,n){const l=v(()=>{var s;return(s=e.closable)!=null?s:n.closable}),[i,t]=O(!0);return{closeable:l,visible:i,handleClose:async()=>{await x(e.onBeforeClose)!==!1&&(t(!1),x(e.onClose))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q={banner:{type:Boolean,default:!1},centered:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:{type:String,default:"close"},description:String,icon:String,title:[String,Array],pagination:{type:[Boolean,Object],default:!1},type:{type:String,default:"warning"},onAfterClose:[Function,Array],onBeforeClose:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,n){const{heightMd:l,borderRadiusSm:i,alertCompColorAlpha:t,colorContainerBg:r,colorSuccessText:s,colorSuccessBg:u,colorInfoText:d,colorInfoBg:g,colorErrorText:C,colorErrorBg:I,colorOfflineText:T,colorOffline:B}=e,{getColorPalette:y,getBaseColors:b}=n,p=y(b().bronze);return{height:l,borderRadius:i,successTextColor:s,successBgColor:f(u,t,r),infoTextColor:d,infoBgColor:f(g,t,r),warningTextColor:p.d10,warningBgColor:f(b().gold,t,r),errorTextColor:C,errorBgColor:f(I,t,r),offlineTextColor:T,offlineBgColor:f(B,t,r)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(e,n,l)=>z(e,l);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=F({name:"IxAlert",props:Q,setup(e,{slots:n}){const l=N("common"),{globalHashId:i,hashId:t,registerToken:r}=L("alert");r(q);const s=v(()=>`${l.prefixCls}-alert`),u=N("alert"),[d,g]=O(1),C=v(()=>{if(e.icon!==void 0)return e.icon;const o=u.icon;return A(o)?o[e.type]:o}),{closeable:I,visible:T,handleClose:B}=M(e,u),y=o=>{g(o)};P(()=>e.pagination,o=>{A(o)&&!G(o.pageIndex)&&g(o.pageIndex)},{deep:!0,immediate:!0}),P(d,o=>{const{pagination:h}=e;A(h)&&x(h.onChange,o)});const b=v(()=>{const o=s.value;return H({[i.value]:!!i.value,[t.value]:!!t.value,[o]:!0,[`${o}-${e.type}`]:!0,[`${o}-banner`]:e.banner,[`${o}-centered`]:e.centered||u.centered,[`${o}-with-description`]:n.description||e.description})}),p=()=>x(e.onAfterClose);return()=>{const{title:o,pagination:h}=e,m=n.default?R(n.default()):V(o),$=h&&m.length>1,E=$?m[d.value-1]:m,S=n.icon?n.icon():C.value&&a(k,{name:C.value},null),w=j(n,e,"description"),c=s.value;return a(D,{name:c,onAfterLeave:p},{default:()=>[T.value&&a("div",{class:b.value},[S&&a("span",{class:`${c}-icon`},[S]),a("div",{class:`${c}-content`},[a("div",{class:`${c}-title`},[E]),w&&a("div",{class:`${c}-description`},[w])]),$&&a(J,{class:`${c}-pagination`,total:m.length,simple:!0,pageIndex:d.value,showTotal:!1,showQuickJumper:!1,pageSize:1,onChange:y},null),I.value&&a("span",{class:`${c}-close-icon`,onClick:B},[n.closeIcon?n.closeIcon():a(k,{name:e.closeIcon},null)])])]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=K;export{X as I};
