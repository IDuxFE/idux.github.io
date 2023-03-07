import{L as g,ad as S,a7 as I,r as p,a9 as z,A as V,m as c}from"./index-c8a1b625.js";import{v as E,f as l,x as N,y as s,z as P}from"./vendor-3e7796bf.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R={checked:{type:Boolean,default:void 0},control:[String,Number,Object],autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},j=E({name:"IxSwitch",props:R,setup(a,{expose:b,slots:t}){const v=g("common"),y=g("switch"),u=l(()=>`${v.prefixCls}-switch`),C=S(a,y),{elementRef:F,focus:r,blur:k}=I();b({focus:r,blur:k});const{accessor:o,control:x}=p({valueKey:"checked"});z(x);const i=l(()=>o.value),d=l(()=>o.disabled),A=()=>{if(d.value||a.loading)return;const e=o.value,n=!e;o.setValue(n),c(a.onChange,n,e)},B=e=>{c(a.onFocus,e)},$=e=>{o.markAsBlurred(),c(a.onBlur,e)},w=l(()=>{const{loading:e}=a,n=u.value;return P({[n]:!0,[`${n}-checked`]:i.value,[`${n}-disabled`]:d.value,[`${n}-loading`]:e,[`${n}-${C.value}`]:!0})});return N(()=>a.autofocus&&r()),()=>{var f,h;const e=i.value,n=(h=(f=t.label)==null?void 0:f.call(t,{checked:e}))!=null?h:a.labels[e?0:1],m=u.value;return s("button",{ref:F,type:"button",class:w.value,onClick:A,onFocus:B,onBlur:$},[a.loading&&s("span",{class:`${m}-loading-icon`},[s(V,{name:"loading"},null)]),s("span",{class:`${m}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=j;export{K as I};
