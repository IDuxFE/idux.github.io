import{u as g,G as S,m as p,p as I,q as z,v as V,j as c}from"./index.f300137b.js";import{v as j,e as l,x as E,y as s,z as G}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N={checked:{type:Boolean,default:void 0},control:[String,Number,Object],autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},P=j({name:"IxSwitch",props:N,setup(o,{expose:b,slots:t}){const v=g("common"),y=g("switch"),u=l(()=>`${v.prefixCls}-switch`),C=S(o,y),{elementRef:F,focus:r,blur:k}=p();b({focus:r,blur:k});const{accessor:a,control:x}=I({valueKey:"checked"});z(x);const i=l(()=>a.value),d=l(()=>a.disabled),B=()=>{if(d.value||o.loading)return;const e=a.value,n=!e;a.setValue(n),c(o.onChange,n,e)},A=e=>{c(o.onFocus,e)},$=e=>{a.markAsBlurred(),c(o.onBlur,e)},w=l(()=>{const{loading:e}=o,n=u.value;return G({[n]:!0,[`${n}-checked`]:i.value,[`${n}-disabled`]:d.value,[`${n}-loading`]:e,[`${n}-${C.value}`]:!0})});return E(()=>o.autofocus&&r()),()=>{var f,h;const e=i.value,n=(h=(f=t.label)==null?void 0:f.call(t,{checked:e}))!=null?h:o.labels[e?0:1],m=u.value;return s("button",{ref:F,type:"button",class:w.value,onClick:B,onFocus:A,onBlur:$},[o.loading&&s("span",{class:`${m}-loading-icon`},[s(V,{name:"loading"},null)]),s("span",{class:`${m}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=P;export{D as I};
