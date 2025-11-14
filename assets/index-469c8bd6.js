import{d as P,as as k,at as T,c as r,aX as M,aK as H,a7 as V,aO as D,v as L,f as u,$ as R,R as m,an as X}from"./index-639d4621.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,t){const{getColorPalette:a}=t,{colorWhite:d,controlHeightXs:h,controlHeightSm:c,controlHeightMd:s,paddingSize2Xs:g,colorPrimary:i}=e;return{activeDisabledColor:a(i).l30,heightSm:h,heightMd:c,heightLg:s,handleSizeSm:12,handleSizeMd:20,handleSizeLg:28,iconFontSizeSm:9,iconFontSizeMd:14,iconFontSizeLg:14,handlePadding:g,handleBgColor:d,handleBoxShadow:"none"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=(e,t,a)=>z(e,a);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=P({name:"IxSwitch",props:E,setup(e,{expose:t,slots:a}){const d=k("common"),h=k("switch"),{globalHashId:c,hashId:s,registerToken:g}=T("switch");g(K);const i=r(()=>`${d.prefixCls}-switch`),f=M(e,h),{elementRef:B,focus:v,blur:w}=H();t({focus:v,blur:w});const{accessor:l,control:x}=V({valueKey:"checked"});D(x);const S=r(()=>l.value),C=r(()=>l.disabled),A=()=>{if(C.value||e.loading)return;const o=l.value,n=!o;l.setValue(n),m(e.onChange,n,o)},$=o=>{m(e.onFocus,o)},p=o=>{l.markAsBlurred(),m(e.onBlur,o)},I=r(()=>{const{loading:o}=e,n=i.value;return X({[c.value]:!!c.value,[s.value]:!!s.value,[n]:!0,[`${n}-checked`]:S.value,[`${n}-disabled`]:C.value,[`${n}-loading`]:o,[`${n}-${f.value}`]:!0})});return L(()=>e.autofocus&&v()),()=>{var y,F;const o=S.value,n=(F=(y=a.label)==null?void 0:y.call(a,{checked:o}))!=null?F:e.labels[o?0:1],b=i.value;return u("button",{ref:B,type:"button",class:I.value,onClick:A,onFocus:$,onBlur:p},[e.loading&&u("span",{class:`${b}-loading-icon`},[u(R,{name:"loading"},null)]),u("span",{class:`${b}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=N;export{j as I};
