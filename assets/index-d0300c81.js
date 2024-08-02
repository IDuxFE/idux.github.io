import{T as k,U as $,ah as P,aa as M,z as H,ad as V,t as D,m as g}from"./index-18117b83.js";import{m as L,c as r,q as E,n as N,v as u}from"./vendor-6c299d42.js";/**
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
 */const U=(e,t,a)=>z(e,a),X=L({name:"IxSwitch",props:R,setup(e,{expose:t,slots:a}){const d=k("common"),h=k("switch"),{globalHashId:c,hashId:s,registerToken:m}=$("switch");m(U);const i=r(()=>`${d.prefixCls}-switch`),f=P(e,h),{elementRef:B,focus:v,blur:p}=M();t({focus:v,blur:p});const{accessor:l,control:w}=H({valueKey:"checked"});V(w);const S=r(()=>l.value),C=r(()=>l.disabled),x=()=>{if(C.value||e.loading)return;const o=l.value,n=!o;l.setValue(n),g(e.onChange,n,o)},A=o=>{g(e.onFocus,o)},I=o=>{l.markAsBlurred(),g(e.onBlur,o)},T=r(()=>{const{loading:o}=e,n=i.value;return E({[c.value]:!!c.value,[s.value]:!!s.value,[n]:!0,[`${n}-checked`]:S.value,[`${n}-disabled`]:C.value,[`${n}-loading`]:o,[`${n}-${f.value}`]:!0})});return N(()=>e.autofocus&&v()),()=>{var y,F;const o=S.value,n=(F=(y=a.label)==null?void 0:y.call(a,{checked:o}))!=null?F:e.labels[o?0:1],b=i.value;return u("button",{ref:B,type:"button",class:T.value,onClick:x,onFocus:A,onBlur:I},[e.loading&&u("span",{class:`${b}-loading-icon`},[u(D,{name:"loading"},null)]),u("span",{class:`${b}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=X;export{G as I};
