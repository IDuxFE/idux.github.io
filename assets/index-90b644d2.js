import{u as h,G as w,m as S,p,q as I,v as z,i as c}from"./index-cbb19196.js";import{v as V,e as l,x as E,y as s,z as G}from"./vendor-5869a5c0.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N={checked:{type:Boolean,default:void 0},control:[String,Number,Object],autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]},P=V({name:"IxSwitch",props:N,setup(o,{expose:g,slots:t}){const b=h("common"),v=h("switch"),u=l(()=>`${b.prefixCls}-switch`),y=w(o,v),{elementRef:C,focus:r,blur:F}=S();g({focus:r,blur:F});const{accessor:a,control:k}=p({valueKey:"checked"});I(k);const i=l(()=>a.value),d=l(()=>a.disabled),x=()=>{if(d.value||o.loading)return;const e=a.value,n=!e;a.setValue(n),c(o.onChange,n,e)},B=e=>{c(o.onFocus,e)},A=e=>{a.markAsBlurred(),c(o.onBlur,e)},$=l(()=>{const{loading:e}=o,n=u.value;return G({[n]:!0,[`${n}-checked`]:i.value,[`${n}-disabled`]:d.value,[`${n}-loading`]:e,[`${n}-${y.value}`]:!0})});return E(()=>o.autofocus&&r()),()=>{var f;const e=i.value,n=((f=t.label)==null?void 0:f.call(t,{checked:e}))??o.labels[e?0:1],m=u.value;return s("button",{ref:C,type:"button",class:$.value,onClick:x,onFocus:B,onBlur:A},[o.loading&&s("span",{class:`${m}-loading-icon`},[s(z,{name:"loading"},null)]),s("span",{class:`${m}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=P;export{q as I};
