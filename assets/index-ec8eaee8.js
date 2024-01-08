import{r as j,aa as G,ae as O,af as T,m as P,M as R,ag as q,A as E,ad as H}from"./index-e0064ebe.js";import{r as D,c as s,w as K,t as J,R as L,l as Q,n as $,m as W,p as y}from"./vendor-74fd07a1.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X={value:[Number,null],control:{type:[String,Number,Object,Array],default:void 0},disabled:{type:Boolean,default:!1},keyboard:{type:Boolean,default:void 0},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},placeholder:String,precision:Number,readonly:{type:Boolean,default:!1},size:String,status:String,step:{type:Number,default:1},"onUpdate:value":[Function,Array],onChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(a,i){const{accessor:l,control:N}=j();G(N);const w=O(a,i),A=T(a,N),t=D(""),f=D(!0),r=s(()=>{var e;return(e=l.value)!=null?e:void 0}),S=s(()=>{var e;return(e=a.keyboard)!=null?e:i.keyboard}),c=s(()=>l.disabled),C=s(()=>a.readonly||!!r.value&&r.value<=a.min),p=s(()=>a.readonly||!!r.value&&r.value>=a.max),d=s(()=>{const e=U(a.step);return a.precision!==void 0?a.precision:Math.max(U(l.value),e)}),M=s(()=>m(-a.step)<a.min),k=s(()=>m(a.step)>a.max);function m(e){const{value:n}=l;let u=e;return typeof n=="number"&&!Number.isNaN(n)&&(u=parseFloat((n+e).toFixed(d.value))),Math.max(a.min,Math.min(a.max,u))}function v(){const{value:e}=l;if(!e&&e!==0||!String(e).trim())t.value="";else if(Number.isNaN(Number(e))||typeof e!="number"&&typeof e!="string")t.value="";else{const n=Number(e);(t.value===""||n!==Number(t.value))&&(t.value=n.toFixed(d.value))}}function g(){const{value:e}=t,n=parseFloat(Number(e).toFixed(d.value));if(e==="")o(null);else if(Number.isNaN(n))v();else{const u=Math.max(a.min,Math.min(a.max,n));t.value=u.toFixed(d.value),o(u)}}function o(e){const n=J(l.value);e!==n&&(l.setValue(e),P(a.onChange,e,n),L(()=>{e!==l.value&&v()}))}function B(e){const{value:n}=e.target,u=n.trim().replace(/。/g,".");if(t.value=u,u===""){o(null);return}const V=Number(u);Number.isNaN(V)||V>=a.min&&V<=a.max&&o(V)}function x(){if(a.readonly||c.value||M.value)return;const e=m(-a.step);o(e)}function h(){if(a.readonly||c.value||k.value)return;const e=m(a.step);o(e)}function I(e){S.value&&(e.code==="Enter"||e.code==="NumpadEnter"?g():e.code==="ArrowUp"?(e.preventDefault(),h()):e.code==="ArrowDown"&&(e.preventDefault(),x()))}const b=D(!1);function F(e){b.value=!0,P(a.onFocus,e)}function z(e){b.value=!1,g(),l.markAsBlurred(),P(a.onBlur,e)}return K(t,e=>{if(e!==""){const n=Number(e);f.value=Number.isNaN(n)||n<a.min||n>a.max}else f.value=!1},{immediate:!0}),K(()=>l.value,()=>v(),{immediate:!0}),{mergedSize:w,mergedStatus:A,displayValue:t,isIllegal:f,isDisabled:c,isDisabledDec:C,isDisabledInc:p,isFocused:b,nowValue:r,handleKeyDown:I,handleDec:x,handleInc:h,handleInput:B,handleFocus:F,handleBlur:z}}function U(a){if(a==null)return 0;const i=String(a).split(".")[1];return i?i.length:0}const Z=Q({name:"IxInputNumber",props:X,setup(a,{expose:i,slots:l}){const N=R("common"),w=R("inputNumber"),{mergedSize:A,mergedStatus:t,displayValue:f,nowValue:r,isIllegal:S,isDisabled:c,isDisabledDec:C,isDisabledInc:p,isFocused:d,handleInput:M,handleFocus:k,handleBlur:m,handleKeyDown:v,handleDec:g,handleInc:o}=Y(a,w),{elementRef:B,focus:x,blur:h}=q({handleBlur:m,handleFocus:k});i({focus:x,blur:h});const I=s(()=>`${N.prefixCls}-input-number`),b=s(()=>{const n=I.value;return $({[n]:!0,[`${n}-illegal`]:S.value})}),F=D();W(()=>{B.value=F.value.getInputElement()});const z=n=>{n.stopPropagation(),o()},e=n=>{n.stopPropagation(),g()};return()=>{const n=I.value,u={...l,suffix:()=>[y("span",{key:"increase",class:$({[`${n}-increase`]:!0,[`${n}-increase-disabled`]:c.value||p.value}),role:"button",onClick:z},[y(E,{name:"up"},null)]),y("span",{key:"decrease",class:$({[`${n}-decrease`]:!0,[`${n}-decrease-disabled`]:c.value||C.value}),role:"button",onClick:e},[y(E,{name:"down"},null)])]};return y(H,{class:b.value,ref:F,type:"text",autocomplete:"off","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":r.value,disabled:c.value,focused:d.value,readonly:a.readonly,placeholder:a.placeholder,size:A.value,status:t.value,value:f.value,onInput:M,onKeydown:v},u)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=Z;export{ae as I};
