import{L as g,ad as S,a7 as p,r as I,a9 as z,A as V,m as c}from"./index-9308d97a.js";import{x as E,c as l,z as N,y as P,A as t}from"./vendor-63a43443.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},j=E({name:"IxSwitch",props:R,setup(n,{expose:b,slots:s}){const y=g("common"),v=g("switch"),u=l(()=>`${y.prefixCls}-switch`),C=S(n,v),{elementRef:A,focus:r,blur:F}=p();b({focus:r,blur:F});const{accessor:o,control:k}=I({valueKey:"checked"});z(k);const i=l(()=>o.value),d=l(()=>o.disabled),x=()=>{if(d.value||n.loading)return;const e=o.value,a=!e;o.setValue(a),c(n.onChange,a,e)},B=e=>{c(n.onFocus,e)},$=e=>{o.markAsBlurred(),c(n.onBlur,e)},w=l(()=>{const{loading:e}=n,a=u.value;return N({[a]:!0,[`${a}-checked`]:i.value,[`${a}-disabled`]:d.value,[`${a}-loading`]:e,[`${a}-${C.value}`]:!0})});return P(()=>n.autofocus&&r()),()=>{var f,h;const e=i.value,a=(h=(f=s.label)==null?void 0:f.call(s,{checked:e}))!=null?h:n.labels[e?0:1],m=u.value;return t("button",{ref:A,type:"button",class:w.value,onClick:x,onFocus:B,onBlur:$},[n.loading&&t("span",{class:`${m}-loading-icon`},[t(V,{name:"loading"},null)]),t("span",{class:`${m}-label`},[a])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=j;export{K as I};
