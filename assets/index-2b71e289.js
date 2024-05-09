import{M as v,N as $,a5 as C}from"./index-a29fd331.js";import{l as x,c as f,p as T,q as p}from"./vendor-4501f550.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I={dashed:{type:Boolean,default:void 0},label:String,labelPlacement:String,plain:{type:Boolean,default:void 0},size:String,vertical:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(a){const{lineWidth:i,colorBorder:c,fontSizeSm:o,fontSizeMd:r,fontSizeLg:m,marginSizeXs:s,marginSizeSm:l,marginSizeMd:d,marginSizeLg:t,marginSizeXl:n}=a;return{lineWidth:i,lineColor:c,fontSizeSm:o,fontSizeMd:r,fontSizeLg:m,marginVerticalSm:d,marginVerticalMd:t,marginVerticalLg:n,marginHorizontalSm:s,marginHorizontalMd:l,marginHorizontalLg:d}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=(a,i)=>z(a),M=x({name:"IxDivider",props:I,setup(a,{slots:i}){const c=v("common"),{globalHashId:o,hashId:r,registerToken:m}=$("divider");m(L);const s=f(()=>`${c.prefixCls}-divider`),l=v("divider"),d=f(()=>{const{dashed:t=l.dashed,label:n,labelPlacement:S=l.labelPlacement,plain:h=l.plain,size:b=l.size,vertical:u}=a,g=!!n||!!i.default,e=s.value;return T({[o.value]:!!o.value,[r.value]:!!r.value,[`${e}`]:!0,[`${e}-${b}`]:!0,[`${e}-dashed`]:t,[`${e}-horizontal`]:!u,[`${e}-vertical`]:u,[`${e}-plain`]:g&&h,[`${e}-with-label`]:g,[`${e}-with-label-${S}`]:g})});return()=>{const t=s.value,n=C(i.default,a.label);return p("div",{class:d.value},[n&&p("span",{class:`${t}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=M;export{B as I};
