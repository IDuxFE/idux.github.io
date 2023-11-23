import{ai as P,M as F,N as T,af as M,a9 as H,r as V,ab as D,A as L,m as h}from"./index-a1eb659d.js";import{l as N,c as i,p as E,m as R,n as r}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},labels:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},size:String,"onUpdate:checked":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function k(e){const{controlHeightXs:a,controlHeightSm:l,controlHeightMd:u,colorContainerBg:d,paddingSize2Xs:s,colorPrimary:c}=e;return{activeDisabledColor:P(c).l30,heightSm:a,heightMd:l,heightLg:u,handleSizeSm:12,handleSizeMd:20,handleSizeLg:28,iconFontSizeSm:9,iconFontSizeMd:14,iconFontSizeLg:14,handlePadding:s,handleBgColor:d,handleBoxShadow:"none"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=(e,a)=>k(e),G=N({name:"IxSwitch",props:X,setup(e,{expose:a,slots:l}){const u=F("common"),d=F("switch"),{globalHashId:s,hashId:c,registerToken:m}=T("switch");m(j);const g=i(()=>`${u.prefixCls}-switch`),B=M(e,d),{elementRef:z,focus:f,blur:p}=H();a({focus:f,blur:p});const{accessor:t,control:A}=V({valueKey:"checked"});D(A);const C=i(()=>t.value),S=i(()=>t.disabled),w=()=>{if(S.value||e.loading)return;const o=t.value,n=!o;t.setValue(n),h(e.onChange,n,o)},x=o=>{h(e.onFocus,o)},I=o=>{t.markAsBlurred(),h(e.onBlur,o)},$=i(()=>{const{loading:o}=e,n=g.value;return E({[s.value]:!!s.value,[c.value]:!!c.value,[n]:!0,[`${n}-checked`]:C.value,[`${n}-disabled`]:S.value,[`${n}-loading`]:o,[`${n}-${B.value}`]:!0})});return R(()=>e.autofocus&&f()),()=>{var v,y;const o=C.value,n=(y=(v=l.label)==null?void 0:v.call(l,{checked:o}))!=null?y:e.labels[o?0:1],b=g.value;return r("button",{ref:z,type:"button",class:$.value,onClick:w,onFocus:x,onBlur:I},[e.loading&&r("span",{class:`${b}-loading-icon`},[r(L,{name:"loading"},null)]),r("span",{class:`${b}-label`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=G;export{U as I};
