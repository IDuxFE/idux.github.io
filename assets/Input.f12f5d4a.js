import{p as z,q as R,H as w,J as j,K as k,j as l,u as K,\u0275 as M}from"./index.c56724f3.js";import{e as y,b as A,w as N,t as P,K as T,v as q,x as G,y as H}from"./vendor.32cbbd74.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J={control:{type:[String,Number,Object],default:void 0},value:{type:String,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},size:{type:String,default:void 0},status:String,trim:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onCompositionStart:[Function,Array],onCompositionEnd:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},O={...J,addonAfter:{type:String,default:void 0},addonBefore:{type:String,default:void 0},borderless:{type:Boolean,default:void 0},prefix:{type:String,default:void 0},suffix:{type:String,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function U(n,s){const{accessor:o,control:d}=z();R(d);const p=w(n,s),C=j(n,d),b=y(()=>{var e;return(e=n.clearable)!=null?e:s.clearable}),g=y(()=>{var e;return(e=n.clearIcon)!=null?e:s.clearIcon}),S=y(()=>!o.disabled&&!n.readonly&&!!o.value),I=y(()=>{var e;return(e=n.trim)!=null?e:s.trim}),r=A(!1),c=e=>{r.value=!0,l(n.onFocus,e)},f=e=>{r.value=!1,o.markAsBlurred(),l(n.onBlur,e),I.value&&v(e.target.value.trim())},{elementRef:m,focus:F,blur:h}=k({handleFocus:c,handleBlur:f}),v=e=>{const t=P(o.value);e!==t&&(o.setValue(e),l(n.onChange,e,t),T(()=>u()))},u=()=>{var E;const e=m.value,t=(E=o.value)!=null?E:"";e&&e.value!==t&&(e.value=t)};N(()=>o.value,()=>u());const a=A(!1),i=(e,t=!0)=>{t&&l(n.onInput,e),!a.value&&v(e.target.value)};return{elementRef:m,accessor:o,mergedSize:p,mergedStatus:C,clearable:b,clearIcon:g,clearVisible:S,isFocused:r,isComposing:a,focus:F,blur:h,handleInput:i,handleCompositionStart:e=>{a.value=!0,l(n.onCompositionStart,e)},handleCompositionEnd:e=>{l(n.onCompositionEnd,e),a.value&&(a.value=!1,i(e,!1))},handleFocus:c,handleBlur:f,handleClear:e=>{o.setValue(""),l(n.onClear,e)},syncValue:u}}const Q=q({name:"IxInput",props:O,setup(n,{slots:s,expose:o}){const d=K("input"),{elementRef:p,accessor:C,mergedSize:b,mergedStatus:g,clearable:S,clearIcon:I,clearVisible:r,isFocused:c,focus:f,blur:m,handleInput:F,handleCompositionStart:h,handleCompositionEnd:v,handleClear:u,syncValue:a}=U(n,d);o({focus:f,blur:m});const i=A();return G(()=>{p.value=i.value.getInputElement(),a()}),()=>{const{addonAfter:B,addonBefore:x,borderless:V,prefix:e,suffix:t}=n;return H(M,{ref:i,addonAfter:B,addonBefore:x,borderless:V,clearable:S.value,clearIcon:I.value,clearVisible:r.value,disabled:C.disabled,focused:c.value,prefix:e,size:b.value,status:g.value,suffix:t,onClear:u,readonly:n.readonly,onInput:F,onCompositionstart:h,onCompositionend:v},s)}}});export{Q as I,J as i,U as u};