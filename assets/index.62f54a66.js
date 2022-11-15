import{u as d,ae as $}from"./index.01a21eef.js";import{v as h,e as c,y as p,z as g}from"./vendor.71a61ad2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x={dashed:{type:Boolean,default:void 0},label:String,labelPlacement:String,plain:{type:Boolean,default:void 0},size:String,vertical:{type:Boolean,default:void 0}},C=h({name:"IxDivider",props:x,setup(o,{slots:n}){const v=d("common"),s=c(()=>`${v.prefixCls}-divider`),a=d("divider"),u=c(()=>{const{dashed:t=a.dashed,label:l,labelPlacement:m=a.labelPlacement,plain:f=a.plain,size:b=a.size,vertical:r}=o,i=!!l||!!n.default,e=s.value;return g({[`${e}`]:!0,[`${e}-${b}`]:!0,[`${e}-dashed`]:t,[`${e}-horizontal`]:!r,[`${e}-vertical`]:r,[`${e}-plain`]:i&&f,[`${e}-with-label`]:i,[`${e}-with-label-${m}`]:i})});return()=>{const t=s.value,l=$(n.default,o.label);return p("div",{class:u.value},[l&&p("span",{class:`${t}-label`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=C;export{y as I};
