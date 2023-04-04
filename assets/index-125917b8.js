import{L as g,ad as S,a7 as p,r as I,a9 as z,A as V,m as c}from"./index-d27ba677.js";import{v as E,f as l,x as N,y as t,z as P}from"./vendor-1bb87fc9.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},j=E({name:"IxSwitch",props:R,setup(n,{expose:b,slots:s}){const y=g("common"),v=g("switch"),u=l(()=>`${y.prefixCls}-switch`),C=S(n,v),{elementRef:F,focus:r,blur:A}=p();b({focus:r,blur:A});const{accessor:o,control:k}=I({valueKey:"checked"});z(k);const i=l(()=>o.value),d=l(()=>o.disabled),x=()=>{if(d.value||n.loading)return;const e=o.value,a=!e;o.setValue(a),c(n.onChange,a,e)},B=e=>{c(n.onFocus,e)},$=e=>{o.markAsBlurred(),c(n.onBlur,e)},w=l(()=>{const{loading:e}=n,a=u.value;return P({[a]:!0,[`${a}-checked`]:i.value,[`${a}-disabled`]:d.value,[`${a}-loading`]:e,[`${a}-${C.value}`]:!0})});return N(()=>n.autofocus&&r()),()=>{var m,h;const e=i.value,a=(h=(m=s.label)==null?void 0:m.call(s,{checked:e}))!=null?h:n.labels[e?0:1],f=u.value;return t("button",{ref:F,type:"button",class:w.value,onClick:x,onFocus:B,onBlur:$},[n.loading&&t("span",{class:`${f}-loading-icon`},[t(V,{name:"loading"},null)]),t("span",{class:`${f}-label`},[a])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=j;export{K as I};
