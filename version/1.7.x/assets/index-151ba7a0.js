import{r as U,a9 as j,ad as L,ae as O,m as P,L as E,af as T,A as K,ac as q}from"./index-9409c3e1.js";import{r as D,c as s,w as R,t as H,G as J,x as Q,A as $,y as W,z as y}from"./vendor-5e807b09.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X={value:[Number,null],control:{type:[String,Number,Object,Array],default:void 0},disabled:{type:Boolean,default:!1},keyboard:{type:Boolean,default:void 0},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},placeholder:String,precision:Number,readonly:{type:Boolean,default:!1},size:String,status:String,step:{type:Number,default:1},"onUpdate:value":[Function,Array],onChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(a,i){const{accessor:t,control:N}=U();j(N);const w=L(a,i),A=O(a,N),l=D(""),f=D(!0),r=s(()=>{var e;return(e=t.value)!=null?e:void 0}),S=s(()=>{var e;return(e=a.keyboard)!=null?e:i.keyboard}),c=s(()=>t.disabled),C=s(()=>a.readonly||!!r.value&&r.value<=a.min),p=s(()=>a.readonly||!!r.value&&r.value>=a.max),d=s(()=>{const e=G(a.step);return a.precision!==void 0?a.precision:Math.max(G(t.value),e)}),k=s(()=>m(-a.step)<a.min),M=s(()=>m(a.step)>a.max);function m(e){const{value:n}=t;let u=e;return typeof n=="number"&&!Number.isNaN(n)&&(u=parseFloat((n+e).toFixed(d.value))),Math.max(a.min,Math.min(a.max,u))}function v(){const{value:e}=t;if(!e&&e!==0||!String(e).trim())l.value="";else if(Number.isNaN(Number(e))||typeof e!="number"&&typeof e!="string")l.value="";else{const n=Number(e);(l.value===""||n!==Number(l.value))&&(l.value=n.toFixed(d.value))}}function x(){const{value:e}=l,n=parseFloat(Number(e).toFixed(d.value));if(e==="")o(null);else if(Number.isNaN(n))v();else{const u=Math.max(a.min,Math.min(a.max,n));l.value=u.toFixed(d.value),o(u)}}function o(e){const n=H(t.value);e!==n&&(t.setValue(e),P(a.onChange,e,n),J(()=>{e!==t.value&&v()}))}function B(e){const{value:n}=e.target,u=n.trim().replace(/。/g,".");if(l.value=u,u===""){o(null);return}const V=Number(u);Number.isNaN(V)||V>=a.min&&V<=a.max&&o(V)}function g(){if(a.readonly||c.value||k.value)return;const e=m(-a.step);o(e)}function h(){if(a.readonly||c.value||M.value)return;const e=m(a.step);o(e)}function I(e){S.value&&(e.code==="Enter"||e.code==="NumpadEnter"?x():e.code==="ArrowUp"?(e.preventDefault(),h()):e.code==="ArrowDown"&&(e.preventDefault(),g()))}const b=D(!1);function F(e){b.value=!0,P(a.onFocus,e)}function z(e){b.value=!1,x(),t.markAsBlurred(),P(a.onBlur,e)}return R(l,e=>{if(e!==""){const n=Number(e);f.value=Number.isNaN(n)||n<a.min||n>a.max}else f.value=!1},{immediate:!0}),R(()=>t.value,()=>v(),{immediate:!0}),{mergedSize:w,mergedStatus:A,displayValue:l,isIllegal:f,isDisabled:c,isDisabledDec:C,isDisabledInc:p,isFocused:b,nowValue:r,handleKeyDown:I,handleDec:g,handleInc:h,handleInput:B,handleFocus:F,handleBlur:z}}function G(a){if(a==null)return 0;const i=String(a).split(".")[1];return i?i.length:0}const Z=Q({name:"IxInputNumber",props:X,setup(a,{expose:i,slots:t}){const N=E("common"),w=E("inputNumber"),{mergedSize:A,mergedStatus:l,displayValue:f,nowValue:r,isIllegal:S,isDisabled:c,isDisabledDec:C,isDisabledInc:p,isFocused:d,handleInput:k,handleFocus:M,handleBlur:m,handleKeyDown:v,handleDec:x,handleInc:o}=Y(a,w),{elementRef:B,focus:g,blur:h}=T({handleBlur:m,handleFocus:M});i({focus:g,blur:h});const I=s(()=>`${N.prefixCls}-input-number`),b=s(()=>{const n=I.value;return $({[n]:!0,[`${n}-illegal`]:S.value})}),F=D();W(()=>{B.value=F.value.getInputElement()});const z=n=>{n.stopPropagation(),o()},e=n=>{n.stopPropagation(),x()};return()=>{const n=I.value,u={...t,suffix:()=>[y("span",{key:"increase",class:$({[`${n}-increase`]:!0,[`${n}-increase-disabled`]:c.value||p.value}),role:"button",onClick:z},[y(K,{name:"up"},null)]),y("span",{key:"decrease",class:$({[`${n}-decrease`]:!0,[`${n}-decrease-disabled`]:c.value||C.value}),role:"button",onClick:e},[y(K,{name:"down"},null)])]};return y(q,{class:b.value,ref:F,type:"text",autocomplete:"off","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":r.value,disabled:c.value,focused:d.value,readonly:a.readonly,placeholder:a.placeholder,size:A.value,status:l.value,value:f.value,onInput:k,onKeydown:v},u)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=Z;export{ae as I};
