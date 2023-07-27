import{r as V,a9 as E,ad as x,ae as w,af as z,m as n}from"./index-1a3b5fbe.js";import{c as u,r as F,w as R,t as k,G as P}from"./vendor-96982764.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={control:{type:[String,Number,Object,Array],default:void 0},value:{type:String,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},size:{type:String,default:void 0},status:String,trim:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onCompositionStart:[Function,Array],onCompositionEnd:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},U={...T,addonAfter:{type:String,default:void 0},addonBefore:{type:String,default:void 0},borderless:{type:Boolean,default:void 0},prefix:{type:String,default:void 0},suffix:{type:String,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function q(t,r){const{accessor:a,control:c}=V();E(c);const S=x(t,r),g=w(t,c),A=u(()=>{var e;return(e=t.clearable)!=null?e:r.clearable}),h=u(()=>{var e;return(e=t.clearIcon)!=null?e:r.clearIcon}),p=u(()=>!a.disabled&&!t.readonly&&!!a.value),b=u(()=>{var e;return(e=t.trim)!=null?e:r.trim}),s=F(!1),d=e=>{s.value=!0,n(t.onFocus,e)},m=e=>{s.value=!1,a.markAsBlurred(),n(t.onBlur,e),b.value&&v(e.target.value.trim())},{elementRef:f,focus:B,blur:I}=z({handleFocus:d,handleBlur:m}),v=e=>{const o=k(a.value);e!==o&&(a.setValue(e),n(t.onChange,e,o),P(()=>i()))},i=()=>{var C;const e=f.value,o=(C=a.value)!=null?C:"";e&&e.value!==o&&(e.value=o)};R(()=>a.value,()=>i());const l=F(!1),y=(e,o=!0)=>{o&&n(t.onInput,e),!l.value&&v(e.target.value)};return{elementRef:f,accessor:a,mergedSize:S,mergedStatus:g,clearable:A,clearIcon:h,clearVisible:p,isFocused:s,isComposing:l,focus:B,blur:I,handleInput:y,handleCompositionStart:e=>{l.value=!0,n(t.onCompositionStart,e)},handleCompositionEnd:e=>{n(t.onCompositionEnd,e),l.value&&(l.value=!1,y(e,!1))},handleFocus:d,handleBlur:m,handleClear:e=>{a.setValue(""),n(t.onClear,e)},syncValue:i}}export{T as a,U as i,q as u};
