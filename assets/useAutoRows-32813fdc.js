import{ak as P,D as j,al as x}from"./index-27b04ecd.js";import{a5 as F,w as h,c as p,an as O,N as G,y as I,a8 as U,b as V,L as y,G as X}from"./vendor-1d4f43eb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function N(e){const i=P(e),{paddingBottom:u,paddingTop:n,borderBottom:o,borderTop:r}=i;return{...i,paddingSize:n+u,borderSize:r+o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function S(e,i,u=!0){let n;const o=e;o.__cdk_measure_textarea?n=o.__cdk_measure_textarea:(n=e.cloneNode(!1),u&&(o.__cdk_measure_textarea=n)),Object.keys(_).forEach(s=>{n.style.setProperty(s,_[s],"important")}),e.parentNode.appendChild(n);const r=i(n);return n.parentNode&&n.parentNode.removeChild(n),r}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(e){let i=0;return F((u,n)=>(h(e,()=>{i=T(e.value),n()}),{get(){if(!e.value)return 0;const o=i||(i=T(e.value));return u(),o},set(){}}))}function T(e){return!e||!e.parentNode?0:S(e,i=>{const u=i.rows,{paddingSize:n}=N(i);i.rows=1,i.value="x";const o=i.scrollHeight-n;return i.rows=u,o>0?o:0},!1)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const f=e=>V(e)&&(y(e.minRows)||y(e.maxRows));function K(e,i){let u,n,o,r=!1,s,g;const z=p(()=>f(i.value)||O(i.value)&&!!i.value),d=p(()=>f(i.value)?i.value.minRows:void 0),H=p(()=>f(i.value)?i.value.maxRows:void 0),a=Y(e),v=p(()=>e.value?N(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function B(){return S(e.value,l=>(l.value=e.value.value,l.scrollHeight,w(l.scrollHeight,v.value)))}function D(){return!e.value||!e.value.placeholder?0:(g||S(e.value,t=>{t.style.height="",t.value=t.placeholder,t.scrollHeight,g=w(t.scrollHeight,v.value)}),g)}function b(l=!1){if(!z.value||!a.value)return;const t=e.value,c=t.value;if(!l&&d.value===n&&c===u)return;t.style.lineHeight=`${a.value}px`;const $=Math.max(B(),D());t.style.height=`${$}px`,s=s!=null?s:t.style.overflow,t.style.overflow="hidden",X(()=>x(()=>{C(t),t.style.overflow=s!=null?s:"",s=void 0})),u=c,n=d.value}function k(){if(!e.value)return;const l=d.value&&a.value?d.value*a.value:null,t=l?`${E(l,v.value)}px`:"";e.value.style.maxHeight=t}function A(){if(!e.value)return;const l=H.value&&a.value?H.value*a.value:null,t=l?`${E(l,v.value)}px`:"";e.value.style.maxHeight=t}function C(l){const{selectionStart:t,selectionEnd:c}=l;r&&document.activeElement===l&&l.setSelectionRange(t,c)}function L(){o!==void 0&&e.value&&(e.value.style.height=o)}let m;const M=G(()=>{g=void 0,b(!0)},16);return I(()=>{const l=[h(e,()=>{e.value&&(o=e.value.style.height)},{immediate:!0}),h(i,()=>{z.value?b(!0):L()},{immediate:!0}),h(d,()=>{k()},{immediate:!0}),h(H,()=>{A()},{immediate:!0})],t=j(e,M);m=()=>{l.forEach(c=>c()),t()},r=!0}),U(()=>{m==null||m(),r=!1}),{resizeToFitContent:b,lineHeight:a,boxSizingData:v}}function w(e,i){const{borderSize:u,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+u:e-n}function E(e,i){const{borderSize:u,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+u+n:e+n}export{S as m,K as u};
