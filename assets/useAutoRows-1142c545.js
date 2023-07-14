import{D as $,ak as j}from"./index-b0d11a60.js";import{a5 as x,w as m,c as b,am as O,N as G,y as I,a8 as U,b as V,L as y,G as X}from"./vendor-c8ffbcb8.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function E(e){const{boxSizing:i,paddingBottom:r,paddingTop:n,borderBottom:o,borderTop:a}=window.getComputedStyle(e),u=H(n),c=H(r),g=H(a),s=H(o);return{boxSizing:i,paddingSize:u+c,borderSize:g+s,paddingTop:u,paddingBottom:c,borderTop:g,borderBottom:s}}function H(e){const i=parseFloat(e);return Number.isNaN(i)?0:i}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function _(e,i,r=!0){let n;const o=e;o.__cdk_measure_textarea?n=o.__cdk_measure_textarea:(n=e.cloneNode(!1),r&&(o.__cdk_measure_textarea=n)),Object.keys(T).forEach(u=>{n.style.setProperty(u,T[u],"important")}),e.parentNode.appendChild(n);const a=i(n);return n.parentNode&&n.parentNode.removeChild(n),a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(e){let i=0;return x((r,n)=>(m(e,()=>{i=w(e.value),n()}),{get(){if(!e.value)return 0;const o=i||(i=w(e.value));return r(),o},set(){}}))}function w(e){return!e||!e.parentNode?0:_(e,i=>{const r=i.rows,{paddingSize:n}=E(i);i.rows=1,i.value="x";const o=i.scrollHeight-n;return i.rows=r,o>0?o:0},!1)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=e=>V(e)&&(y(e.minRows)||y(e.maxRows));function K(e,i){let r,n,o,a=!1,u,c;const g=b(()=>z(i.value)||O(i.value)&&!!i.value),s=b(()=>z(i.value)?i.value.minRows:void 0),S=b(()=>z(i.value)?i.value.maxRows:void 0),d=Y(e),h=b(()=>e.value?E(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function C(){return _(e.value,l=>(l.value=e.value.value,l.scrollHeight,N(l.scrollHeight,h.value)))}function k(){return!e.value||!e.value.placeholder?0:(c||_(e.value,t=>{t.style.height="",t.value=t.placeholder,t.scrollHeight,c=N(t.scrollHeight,h.value)}),c)}function f(l=!1){if(!g.value||!d.value)return;const t=e.value,v=t.value;if(!l&&s.value===n&&v===r)return;t.style.lineHeight=`${d.value}px`;const P=Math.max(C(),k());t.style.height=`${P}px`,u=u!=null?u:t.style.overflow,t.style.overflow="hidden",X(()=>j(()=>{L(t),t.style.overflow=u!=null?u:"",u=void 0})),r=v,n=s.value}function A(){if(!e.value)return;const l=s.value&&d.value?s.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function D(){if(!e.value)return;const l=S.value&&d.value?S.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function L(l){const{selectionStart:t,selectionEnd:v}=l;a&&document.activeElement===l&&l.setSelectionRange(t,v)}function M(){o!==void 0&&e.value&&(e.value.style.height=o)}let p;const F=G(()=>{c=void 0,f(!0)},16);return I(()=>{const l=[m(e,()=>{e.value&&(o=e.value.style.height)},{immediate:!0}),m(i,()=>{g.value?f(!0):M()},{immediate:!0}),m(s,()=>{A()},{immediate:!0}),m(S,()=>{D()},{immediate:!0})],t=$(e,F);p=()=>{l.forEach(v=>v()),t()},a=!0}),U(()=>{p==null||p(),a=!1}),{resizeToFitContent:f,lineHeight:d,boxSizingData:h}}function N(e,i){const{borderSize:r,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+r:e-n}function B(e,i){const{borderSize:r,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+r+n:e+n}export{_ as m,K as u};
