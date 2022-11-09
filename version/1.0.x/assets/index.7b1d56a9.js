import{p as J,q as U,H as $,J as q,j as P,u as K,K as G,w as E,\u0275 as H}from"./index.3f21dce0.js";import{b as D,e as u,w as R,t as O,J as T,v as L,x as Q,y,z as W}from"./vendor.0e7da6ec.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X={value:[Number,null],control:{type:[String,Number,Object],default:void 0},disabled:{type:Boolean,default:!1},keyboard:{type:Boolean,default:void 0},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},placeholder:String,precision:Number,readonly:{type:Boolean,default:!1},size:String,status:String,step:{type:Number,default:1},"onUpdate:value":[Function,Array],onChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(a,s){const{accessor:l,control:N}=J();U(N);const V=$(a,s),w=q(a,N),t=D(""),m=D(!0),r=u(()=>{var e;return(e=l.value)!=null?e:void 0}),p=u(()=>{var e;return(e=a.keyboard)!=null?e:s.keyboard}),f=u(()=>l.disabled),S=u(()=>a.readonly||!!r.value&&r.value<=a.min),A=u(()=>a.readonly||!!r.value&&r.value>=a.max),c=u(()=>{const e=j(a.step);return a.precision!==void 0?a.precision:Math.max(j(l.value),e)}),C=u(()=>d(-a.step)<a.min),M=u(()=>d(a.step)>a.max);function d(e){const{value:n}=l;let i=e;return typeof n=="number"&&!Number.isNaN(n)&&(i=parseFloat((n+e).toFixed(c.value))),Math.max(a.min,Math.min(a.max,i))}function v(){const{value:e}=l;e==null||Number.isNaN(e)?t.value="":(t.value===""||e!==Number(t.value))&&(t.value=e.toFixed(c.value))}function x(){const{value:e}=t,n=parseFloat(Number(e).toFixed(c.value));if(e==="")o(null);else if(Number.isNaN(n))v();else{const i=Math.max(a.min,Math.min(a.max,n));t.value=i.toFixed(c.value),o(i)}}function o(e){const n=O(l.value);e!==n&&(l.setValue(e),P(a.onChange,e,n),T(()=>{e!==l.value&&v()}))}function B(e){const{value:n}=e.target,i=n.trim().replace(/。/g,".");if(t.value=i,i===""){o(null);return}const F=Number(i);Number.isNaN(F)||F>=a.min&&F<=a.max&&o(F)}function h(){if(a.readonly||f.value||C.value)return;const e=d(-a.step);o(e)}function I(){if(a.readonly||f.value||M.value)return;const e=d(a.step);o(e)}function k(e){p.value&&(e.code==="Enter"||e.code==="NumpadEnter"?x():e.code==="ArrowUp"?(e.preventDefault(),I()):e.code==="ArrowDown"&&(e.preventDefault(),h()))}const b=D(!1);function g(e){b.value=!0,P(a.onFocus,e)}function z(e){b.value=!1,x(),l.markAsBlurred(),P(a.onBlur,e)}return R(t,e=>{if(e!==""){const n=Number(e);m.value=Number.isNaN(n)||n<a.min||n>a.max}else m.value=!1},{immediate:!0}),R(()=>l.value,()=>v(),{immediate:!0}),{mergedSize:V,mergedStatus:w,displayValue:t,isIllegal:m,isDisabled:f,isDisabledDec:S,isDisabledInc:A,isFocused:b,nowValue:r,handleKeyDown:k,handleDec:h,handleInc:I,handleInput:B,handleFocus:g,handleBlur:z}}function j(a){if(a==null)return 0;const s=String(a).split(".")[1];return s?s.length:0}const Z=L({name:"IxInputNumber",props:X,setup(a,{expose:s,slots:l}){const N=K("common"),V=K("inputNumber"),{mergedSize:w,mergedStatus:t,displayValue:m,nowValue:r,isIllegal:p,isDisabled:f,isDisabledDec:S,isDisabledInc:A,isFocused:c,handleInput:C,handleFocus:M,handleBlur:d,handleKeyDown:v,handleDec:x,handleInc:o}=Y(a,V),{elementRef:B,focus:h,blur:I}=G({handleBlur:d,handleFocus:M});s({focus:h,blur:I});const k=u(()=>`${N.prefixCls}-input-number`),b=u(()=>{const n=k.value;return W({[n]:!0,[`${n}-illegal`]:p.value})}),g=D();Q(()=>{B.value=g.value.getInputElement()});const z=n=>{n.stopPropagation(),o()},e=n=>{n.stopPropagation(),x()};return()=>{const n={...l,prefix:()=>y("span",{class:["ix-input-number-increase",A.value?"ix-input-number-increase--disabled":""],role:"button",onClick:z},[y(E,{name:"up"},null)]),suffix:()=>y("span",{class:["ix-input-number-decrease",S.value?"ix-input-number-decrease--disabled":""],role:"button",onClick:e},[y(E,{name:"down"},null)])};return y(H,{class:b.value,ref:g,type:"text",autocomplete:"off","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":r.value,disabled:f.value,focused:c.value,readonly:a.readonly,placeholder:a.placeholder,size:w.value,status:t.value,value:m.value,onInput:C,onKeydown:v},n)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=Z;export{ae as I};
