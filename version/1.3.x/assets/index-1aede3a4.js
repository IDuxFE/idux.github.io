import{L as d,O as $}from"./index-4edbd2bb.js";import{v as h,f as c,y as p,z as g}from"./vendor-1c103b38.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x={dashed:{type:Boolean,default:void 0},label:String,labelPlacement:String,plain:{type:Boolean,default:void 0},size:String,vertical:{type:Boolean,default:void 0}},C=h({name:"IxDivider",props:x,setup(o,{slots:n}){const v=d("common"),s=c(()=>`${v.prefixCls}-divider`),a=d("divider"),m=c(()=>{const{dashed:t=a.dashed,label:l,labelPlacement:u=a.labelPlacement,plain:f=a.plain,size:b=a.size,vertical:r}=o,i=!!l||!!n.default,e=s.value;return g({[`${e}`]:!0,[`${e}-${b}`]:!0,[`${e}-dashed`]:t,[`${e}-horizontal`]:!r,[`${e}-vertical`]:r,[`${e}-plain`]:i&&f,[`${e}-with-label`]:i,[`${e}-with-label-${u}`]:i})});return()=>{const t=s.value,l=$(n.default,o.label);return p("div",{class:m.value},[l&&p("span",{class:`${t}-label`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=C;export{y as I};
