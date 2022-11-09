import{u as g,H as S,n as p,p as I,q as z,w as V,j as c}from"./index.3f21dce0.js";import{v as j,e as l,x as E,y as s,z as N}from"./vendor.0e7da6ec.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P={checked:{type:Boolean,default:void 0},control:[String,Number,Object],autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},R=j({name:"IxSwitch",props:P,setup(o,{expose:b,slots:t}){const v=g("common"),y=g("switch"),u=l(()=>`${v.prefixCls}-switch`),C=S(o,y),{elementRef:F,focus:r,blur:k}=p();b({focus:r,blur:k});const{accessor:a,control:x}=I({valueKey:"checked"});z(x);const i=l(()=>a.value),d=l(()=>a.disabled),B=()=>{if(d.value||o.loading)return;const e=a.value,n=!e;a.setValue(n),c(o.onChange,n,e)},w=e=>{c(o.onFocus,e)},A=e=>{a.markAsBlurred(),c(o.onBlur,e)},$=l(()=>{const{loading:e}=o,n=u.value;return N({[n]:!0,[`${n}-checked`]:i.value,[`${n}-disabled`]:d.value,[`${n}-loading`]:e,[`${n}-${C.value}`]:!0})});return E(()=>o.autofocus&&r()),()=>{var f,h;const e=i.value,n=(h=(f=t.label)==null?void 0:f.call(t,{checked:e}))!=null?h:o.labels[e?0:1],m=u.value;return s("button",{ref:F,type:"button",class:$.value,onClick:B,onFocus:w,onBlur:A},[o.loading&&s("span",{class:`${m}-loading-icon`},[s(V,{name:"loading"},null)]),s("span",{class:`${m}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=R;export{G as I};
