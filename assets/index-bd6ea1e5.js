import{d as $,as as v,at as C,c as f,an as x,aN as T,f as p}from"./index-2f15ff81.js";/**
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
 */const L=(a,i)=>z(a);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=$({name:"IxDivider",props:I,setup(a,{slots:i}){const c=v("common"),{globalHashId:o,hashId:r,registerToken:m}=C("divider");m(L);const s=f(()=>`${c.prefixCls}-divider`),l=v("divider"),d=f(()=>{const{dashed:t=l.dashed,label:n,labelPlacement:S=l.labelPlacement,plain:h=l.plain,size:b=l.size,vertical:u}=a,g=!!n||!!i.default,e=s.value;return x({[o.value]:!!o.value,[r.value]:!!r.value,[`${e}`]:!0,[`${e}-${b}`]:!0,[`${e}-dashed`]:t,[`${e}-horizontal`]:!u,[`${e}-vertical`]:u,[`${e}-plain`]:g&&h,[`${e}-with-label`]:g,[`${e}-with-label-${S}`]:g})});return()=>{const t=s.value,n=T(i.default,a.label);return p("div",{class:d.value},[n&&p("span",{class:`${t}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=P;export{B as I};
