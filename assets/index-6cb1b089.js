import{L as h,ad as w,a7 as S,r as I,a9 as p,A as z,m as c}from"./index-d79199e1.js";import{v as V,f as l,x as E,y as s,z as N}from"./vendor-50817465.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P={checked:{type:Boolean,default:void 0},control:[String,Number,Object],autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},R=V({name:"IxSwitch",props:P,setup(a,{expose:g,slots:t}){const b=h("common"),v=h("switch"),u=l(()=>`${b.prefixCls}-switch`),y=w(a,v),{elementRef:C,focus:r,blur:F}=S();g({focus:r,blur:F});const{accessor:o,control:k}=I({valueKey:"checked"});p(k);const i=l(()=>o.value),d=l(()=>o.disabled),x=()=>{if(d.value||a.loading)return;const e=o.value,n=!e;o.setValue(n),c(a.onChange,n,e)},A=e=>{c(a.onFocus,e)},B=e=>{o.markAsBlurred(),c(a.onBlur,e)},$=l(()=>{const{loading:e}=a,n=u.value;return N({[n]:!0,[`${n}-checked`]:i.value,[`${n}-disabled`]:d.value,[`${n}-loading`]:e,[`${n}-${y.value}`]:!0})});return E(()=>a.autofocus&&r()),()=>{var f;const e=i.value,n=((f=t.label)==null?void 0:f.call(t,{checked:e}))??a.labels[e?0:1],m=u.value;return s("button",{ref:C,type:"button",class:$.value,onClick:x,onFocus:A,onBlur:B},[a.loading&&s("span",{class:`${m}-loading-icon`},[s(z,{name:"loading"},null)]),s("span",{class:`${m}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=R;export{G as I};
