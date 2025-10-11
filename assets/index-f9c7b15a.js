import{d as z,as as b,at as y,c as t,bg as P,a5 as H,f as C,an as T,i as K,aI as N,bz as D,C as M,D as A,bA as E,$ as j,bk as w,af as F,bi as O}from"./index-068e057b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("collapseToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V={expandedKeys:Array,accordion:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},expandIcon:String,ghost:{type:Boolean,default:void 0},size:{type:String,default:void 0},"onUpdate:expandedKeys":[Function,Array]},G={disabled:{type:Boolean,default:!1},header:[String,Object]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function k(n){const{colorContainerBg:a,colorInfoContainerBg:d,fontSizeHeaderSm:o,fontSizeXl:r,fontSize2xl:f,paddingSizeMd:l,paddingSizeLg:s}=n;return{fontSizeSm:o,fontSizeMd:o,expandIconSizeSm:r,expandIconSizeMd:f,paddingHorizontalSm:l,paddingHorizontalMd:s,panelHeaderBgColor:a,panelContentBgColor:d}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function L(n){const{colorContainerBg:a,colorInfoContainerBg:d}=n;return{...k(n),panelHeaderBgColor:d,panelContentBgColor:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=(n,a)=>a==="default"?k(n):L(n);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=z({name:"IxCollapse",props:V,setup(n,{slots:a}){const d=b("common"),{globalHashId:o,hashId:r,registerToken:f}=y("collapse");f(B);const l=t(()=>`${d.prefixCls}-collapse`),s=b("collapse"),x=t(()=>{var e;return(e=n.accordion)!=null?e:s.accordion}),i=t(()=>{var e;return(e=n.borderless)!=null?e:s.borderless}),I=t(()=>{var e;return(e=n.expandIcon)!=null?e:s.expandIcon}),g=t(()=>{var e;return(e=n.ghost)!=null?e:s.ghost}),u=t(()=>{var e;return(e=n.size)!=null?e:s.size}),[v,c]=P(n,"expandedKeys",()=>[]);H($,{props:n,slots:a,mergedSize:u,expandedKeys:v,expandIcon:I,handleExpand:e=>{let m=[...v.value];const h=m.indexOf(e);x.value?m=h>-1?[]:[e]:h>-1?m.splice(h,1):m.push(e),c(m)}});const p=t(()=>{const e=l.value;return T({[o.value]:!!o.value,[r.value]:!!r.value,[e]:!0,[`${e}-${u.value}`]:!0,[`${e}-borderless`]:i.value,[`${e}-ghost`]:g.value})});return()=>{var e;return C("div",{class:p.value},[(e=a.default)==null?void 0:e.call(a)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=z({name:"IxCollapsePanel",props:G,setup(n,{slots:a}){const d=b("common"),{globalHashId:o,hashId:r,registerToken:f}=y("collapse");f(B);const l=t(()=>`${d.prefixCls}-collapse-panel`),{slots:s,mergedSize:x,expandedKeys:i,expandIcon:I,handleExpand:g}=K($),u=N(),v=t(()=>i.value.includes(u)),c=t(()=>{const p=l.value;return T({[o.value]:!!o.value,[r.value]:!!r.value,[`${p}`]:!0,[`${p}-disabled`]:n.disabled,[`${p}-expanded`]:v.value})}),S=()=>{n.disabled||g(u)};return()=>{const p=v.value,e=l.value,m=q(n,a,e,s,u,x,p,I,S);return C("div",{class:c.value},[m,C(D,{appear:!0},{default:()=>{var h;return[M(C("div",{class:`${e}-content`},[C("div",{class:`${e}-content-box`},[(h=a.default)==null?void 0:h.call(a)])]),[[A,p]])]}})])}}});function q(n,a,d,o,r,f,l,s,x){if(a.header)return a.header({expanded:l,onClick:x,changeExpand:x});let i;if(o.expandIcon){const c=o.expandIcon({key:r,expanded:l});E(c)&&(i=c)}else{const c=s.value;i=c?C(j,{class:`${d}-expand-icon`,name:c,rotate:l?90:0},null):void 0}const I=i?{prefix:()=>i}:void 0,{header:g,disabled:u}=n,v=w(g)?{title:g}:g;return C(O,F({disabled:u,size:f.value,onClick:x},v),I)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=U,R=X;export{Q as I,R as a};
