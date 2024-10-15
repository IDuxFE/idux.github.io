import{T as S,U as b,av as P,a8 as H,aK as K,aL as N,t as E,ax as M}from"./index-b2ce1350.js";import{m as T,c as t,E as D,q as y,v as C,z as j,a8 as w,a9 as A,f as F,a7 as L}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=Symbol("collapseToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={expandedKeys:Array,accordion:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},expandIcon:String,ghost:{type:Boolean,default:void 0},size:{type:String,default:void 0},"onUpdate:expandedKeys":[Function,Array]},U={disabled:{type:Boolean,default:!1},header:[String,Object]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function $(n){const{colorContainerBg:a,colorInfoContainerBg:d,fontSizeHeaderSm:o,fontSizeXl:r,fontSize2xl:f,paddingSizeMd:l,paddingSizeLg:s}=n;return{fontSizeSm:o,fontSizeMd:o,expandIconSizeSm:r,expandIconSizeMd:f,paddingHorizontalSm:l,paddingHorizontalMd:s,panelHeaderBgColor:a,panelContentBgColor:d}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function V(n){const{colorContainerBg:a,colorInfoContainerBg:d}=n;return{...$(n),panelHeaderBgColor:d,panelContentBgColor:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=(n,a)=>a==="default"?$(n):V(n);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=T({name:"IxCollapse",props:O,setup(n,{slots:a}){const d=S("common"),{globalHashId:o,hashId:r,registerToken:f}=b("collapse");f(k);const l=t(()=>`${d.prefixCls}-collapse`),s=S("collapse"),x=t(()=>{var e;return(e=n.accordion)!=null?e:s.accordion}),i=t(()=>{var e;return(e=n.borderless)!=null?e:s.borderless}),I=t(()=>{var e;return(e=n.expandIcon)!=null?e:s.expandIcon}),m=t(()=>{var e;return(e=n.ghost)!=null?e:s.ghost}),u=t(()=>{var e;return(e=n.size)!=null?e:s.size}),[v,c]=P(n,"expandedKeys",()=>[]);D(B,{props:n,slots:a,mergedSize:u,expandedKeys:v,expandIcon:I,handleExpand:e=>{let g=[...v.value];const h=g.indexOf(e);x.value?g=h>-1?[]:[e]:h>-1?g.splice(h,1):g.push(e),c(g)}});const p=t(()=>{const e=l.value;return y({[o.value]:!!o.value,[r.value]:!!r.value,[e]:!0,[`${e}-${u.value}`]:!0,[`${e}-borderless`]:i.value,[`${e}-ghost`]:m.value})});return()=>{var e;return C("div",{class:p.value},[(e=a.default)==null?void 0:e.call(a)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=T({name:"IxCollapsePanel",props:U,setup(n,{slots:a}){const d=S("common"),{globalHashId:o,hashId:r,registerToken:f}=b("collapse");f(k);const l=t(()=>`${d.prefixCls}-collapse-panel`),{slots:s,mergedSize:x,expandedKeys:i,expandIcon:I,handleExpand:m}=j(B),u=H(),v=t(()=>i.value.includes(u)),c=t(()=>{const p=l.value;return y({[o.value]:!!o.value,[r.value]:!!r.value,[`${p}`]:!0,[`${p}-disabled`]:n.disabled,[`${p}-expanded`]:v.value})}),z=()=>{n.disabled||m(u)};return()=>{const p=v.value,e=l.value,g=X(n,a,e,s,u,x,p,I,z);return C("div",{class:c.value},[g,C(K,{appear:!0},{default:()=>{var h;return[w(C("div",{class:`${e}-content`},[C("div",{class:`${e}-content-box`},[(h=a.default)==null?void 0:h.call(a)])]),[[A,p]])]}})])}}});function X(n,a,d,o,r,f,l,s,x){if(a.header)return a.header({expanded:l,onClick:x,changeExpand:x});let i;if(o.expandIcon){const c=o.expandIcon({key:r,expanded:l});N(c)&&(i=c)}else{const c=s.value;i=c?C(E,{class:`${d}-expand-icon`,name:c,rotate:l?90:0},null):void 0}const I=i?{prefix:()=>i}:void 0,{header:m,disabled:u}=n,v=F(m)?{title:m}:m;return C(M,L({disabled:u,size:f.value,onClick:x},v),I)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=q,W=G;export{W as I,R as a};
