import{M as k,N as P,ae as T,a8 as M,r as H,aa as V,A as D,m as g}from"./index-c73ba825.js";import{l as L,c as r,n as N,m as E,p as u}from"./vendor-deae6a9f.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function z(e,t){const{getColorPalette:a}=t,{colorWhite:d,controlHeightXs:h,controlHeightSm:c,controlHeightMd:s,paddingSize2Xs:m,colorPrimary:i}=e;return{activeDisabledColor:a(i).l30,heightSm:h,heightMd:c,heightLg:s,handleSizeSm:12,handleSizeMd:20,handleSizeLg:28,iconFontSizeSm:9,iconFontSizeMd:14,iconFontSizeLg:14,handlePadding:m,handleBgColor:d,handleBoxShadow:"none"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=(e,t,a)=>z(e,a),j=L({name:"IxSwitch",props:R,setup(e,{expose:t,slots:a}){const d=k("common"),h=k("switch"),{globalHashId:c,hashId:s,registerToken:m}=P("switch");m(X);const i=r(()=>`${d.prefixCls}-switch`),f=T(e,h),{elementRef:B,focus:S,blur:p}=M();t({focus:S,blur:p});const{accessor:l,control:A}=H({valueKey:"checked"});V(A);const v=r(()=>l.value),C=r(()=>l.disabled),w=()=>{if(C.value||e.loading)return;const o=l.value,n=!o;l.setValue(n),g(e.onChange,n,o)},x=o=>{g(e.onFocus,o)},I=o=>{l.markAsBlurred(),g(e.onBlur,o)},$=r(()=>{const{loading:o}=e,n=i.value;return N({[c.value]:!!c.value,[s.value]:!!s.value,[n]:!0,[`${n}-checked`]:v.value,[`${n}-disabled`]:C.value,[`${n}-loading`]:o,[`${n}-${f.value}`]:!0})});return E(()=>e.autofocus&&S()),()=>{var y,F;const o=v.value,n=(F=(y=a.label)==null?void 0:y.call(a,{checked:o}))!=null?F:e.labels[o?0:1],b=i.value;return u("button",{ref:B,type:"button",class:$.value,onClick:w,onFocus:x,onBlur:I},[e.loading&&u("span",{class:`${b}-loading-icon`},[u(D,{name:"loading"},null)]),u("span",{class:`${b}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O=j;export{O as I};
