import{p as U,q as $,H as q,J as G,j as K,u as P,K as H,w as E,\u0275 as J}from"./index.c56724f3.js";import{b as V,e as l,w as R,t as O,K as T,v as L,x as Q,y,z as W}from"./vendor.32cbbd74.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X={value:[Number,null],control:{type:[String,Number,Object],default:void 0},disabled:{type:Boolean,default:!1},keyboard:{type:Boolean,default:void 0},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},placeholder:String,precision:Number,readonly:{type:Boolean,default:!1},size:String,status:String,step:{type:Number,default:1},"onUpdate:value":[Function,Array],onChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(n,s){const{accessor:t,control:N}=U();$(N);const D=q(n,s),w=G(n,N),u=V(""),m=V(!0),r=l(()=>{var e;return(e=t.value)!=null?e:void 0}),p=l(()=>{var e;return(e=n.keyboard)!=null?e:s.keyboard}),f=l(()=>t.disabled),S=l(()=>n.readonly||!!r.value&&r.value<=n.min),A=l(()=>n.readonly||!!r.value&&r.value>=n.max),c=l(()=>{const e=j(n.step);return n.precision!==void 0?n.precision:Math.max(j(t.value),e)}),C=l(()=>d(-n.step)<n.min),M=l(()=>d(n.step)>n.max);function d(e){const{value:a}=t;let i=e;return typeof a=="number"&&!Number.isNaN(a)&&(i=parseFloat((a+e).toFixed(c.value))),Math.max(n.min,Math.min(n.max,i))}function b(){const{value:e}=t;if(!e&&e!==0||!String(e).trim())u.value="";else if(Number.isNaN(Number(e))||typeof e!="number"&&typeof e!="string")u.value="";else{const a=Number(e);(u.value===""||a!==Number(u.value))&&(u.value=a.toFixed(c.value))}}function x(){const{value:e}=u,a=parseFloat(Number(e).toFixed(c.value));if(e==="")o(null);else if(Number.isNaN(a))b();else{const i=Math.max(n.min,Math.min(n.max,a));u.value=i.toFixed(c.value),o(i)}}function o(e){const a=O(t.value);e!==a&&(t.setValue(e),K(n.onChange,e,a),T(()=>{e!==t.value&&b()}))}function B(e){const{value:a}=e.target,i=a.trim().replace(/。/g,".");if(u.value=i,i===""){o(null);return}const F=Number(i);Number.isNaN(F)||F>=n.min&&F<=n.max&&o(F)}function g(){if(n.readonly||f.value||C.value)return;const e=d(-n.step);o(e)}function h(){if(n.readonly||f.value||M.value)return;const e=d(n.step);o(e)}function k(e){p.value&&(e.code==="Enter"||e.code==="NumpadEnter"?x():e.code==="ArrowUp"?(e.preventDefault(),h()):e.code==="ArrowDown"&&(e.preventDefault(),g()))}const v=V(!1);function I(e){v.value=!0,K(n.onFocus,e)}function z(e){v.value=!1,x(),t.markAsBlurred(),K(n.onBlur,e)}return R(u,e=>{if(e!==""){const a=Number(e);m.value=Number.isNaN(a)||a<n.min||a>n.max}else m.value=!1},{immediate:!0}),R(()=>t.value,()=>b(),{immediate:!0}),{mergedSize:D,mergedStatus:w,displayValue:u,isIllegal:m,isDisabled:f,isDisabledDec:S,isDisabledInc:A,isFocused:v,nowValue:r,handleKeyDown:k,handleDec:g,handleInc:h,handleInput:B,handleFocus:I,handleBlur:z}}function j(n){if(n==null)return 0;const s=String(n).split(".")[1];return s?s.length:0}const Z=L({name:"IxInputNumber",props:X,setup(n,{expose:s,slots:t}){const N=P("common"),D=P("inputNumber"),{mergedSize:w,mergedStatus:u,displayValue:m,nowValue:r,isIllegal:p,isDisabled:f,isDisabledDec:S,isDisabledInc:A,isFocused:c,handleInput:C,handleFocus:M,handleBlur:d,handleKeyDown:b,handleDec:x,handleInc:o}=Y(n,D),{elementRef:B,focus:g,blur:h}=H({handleBlur:d,handleFocus:M});s({focus:g,blur:h});const k=l(()=>`${N.prefixCls}-input-number`),v=l(()=>{const a=k.value;return W({[a]:!0,[`${a}-illegal`]:p.value})}),I=V();Q(()=>{B.value=I.value.getInputElement()});const z=a=>{a.stopPropagation(),o()},e=a=>{a.stopPropagation(),x()};return()=>{const a={...t,prefix:()=>y("span",{class:["ix-input-number-increase",A.value?"ix-input-number-increase--disabled":""],role:"button",onClick:z},[y(E,{name:"up"},null)]),suffix:()=>y("span",{class:["ix-input-number-decrease",S.value?"ix-input-number-decrease--disabled":""],role:"button",onClick:e},[y(E,{name:"down"},null)])};return y(J,{class:v.value,ref:I,type:"text",autocomplete:"off","aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":r.value,disabled:f.value,focused:c.value,readonly:n.readonly,placeholder:n.placeholder,size:w.value,status:u.value,value:m.value,onInput:C,onKeydown:b},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne=Z;export{ne as I};
