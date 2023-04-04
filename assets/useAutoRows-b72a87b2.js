import{D as j,ak as x}from"./index-8eabcae2.js";import{a5 as P,w as m,f as H,am as $,N as O,x as G,a8 as I,j as U,L as _,G as V}from"./vendor-1bb87fc9.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function E(e){const{boxSizing:i,paddingBottom:r,paddingTop:n,borderBottom:o,borderTop:a}=window.getComputedStyle(e),s=parseFloat(n),c=parseFloat(r),g=parseFloat(a),u=parseFloat(o);return{boxSizing:i,paddingSize:s+c,borderSize:g+u,paddingTop:s,paddingBottom:c,borderTop:g,borderBottom:u}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function z(e,i,r=!0){let n;const o=e;o.__cdk_measure_textarea?n=o.__cdk_measure_textarea:(n=e.cloneNode(!1),r&&(o.__cdk_measure_textarea=n)),Object.keys(T).forEach(s=>{n.style.setProperty(s,T[s],"important")}),e.parentNode.appendChild(n);const a=i(n);return n.parentNode&&n.parentNode.removeChild(n),a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e){let i=0;return P((r,n)=>(m(e,()=>{i=y(e.value),n()}),{get(){if(!e.value)return 0;const o=i||(i=y(e.value));return r(),o},set(){}}))}function y(e){return!e||!e.parentNode?0:z(e,i=>{const r=i.rows,{paddingSize:n}=E(i);i.rows=1,i.value="x";const o=i.scrollHeight-n;return i.rows=r,o>0?o:0},!1)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=e=>U(e)&&(_(e.minRows)||_(e.maxRows));function J(e,i){let r,n,o,a=!1,s,c;const g=H(()=>S(i.value)||$(i.value)&&!!i.value),u=H(()=>S(i.value)?i.value.minRows:void 0),b=H(()=>S(i.value)?i.value.maxRows:void 0),d=X(e),h=H(()=>e.value?E(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function N(){return z(e.value,l=>(l.value=e.value.value,l.scrollHeight,w(l.scrollHeight,h.value)))}function F(){return!e.value||!e.value.placeholder?0:(c||z(e.value,t=>{t.style.height="",t.value=t.placeholder,t.scrollHeight,c=w(t.scrollHeight,h.value)}),c)}function f(l=!1){if(!g.value||!d.value)return;const t=e.value,v=t.value;if(!l&&u.value===n&&v===r)return;t.style.lineHeight=`${d.value}px`;const M=Math.max(N(),F());t.style.height=`${M}px`,s=s!=null?s:t.style.overflow,t.style.overflow="hidden",V(()=>x(()=>{A(t),t.style.overflow=s!=null?s:"",s=void 0})),r=v,n=u.value}function C(){if(!e.value)return;const l=u.value&&d.value?u.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function k(){if(!e.value)return;const l=b.value&&d.value?b.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function A(l){const{selectionStart:t,selectionEnd:v}=l;a&&document.activeElement===l&&l.setSelectionRange(t,v)}function D(){o!==void 0&&e.value&&(e.value.style.height=o)}let p;const L=O(()=>{c=void 0,f(!0)},16);return G(()=>{const l=[m(e,()=>{e.value&&(o=e.value.style.height)},{immediate:!0}),m(i,()=>{g.value?f(!0):D()},{immediate:!0}),m(u,()=>{C()},{immediate:!0}),m(b,()=>{k()},{immediate:!0})],t=j(e,L);p=()=>{l.forEach(v=>v()),t()},a=!0}),I(()=>{p==null||p(),a=!1}),{resizeToFitContent:f,lineHeight:d,boxSizingData:h}}function w(e,i){const{borderSize:r,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+r:e-n}function B(e,i){const{borderSize:r,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+r+n:e+n}export{z as m,J as u};
