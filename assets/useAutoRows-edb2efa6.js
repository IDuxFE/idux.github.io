import{ao as P,D as j,ap as x}from"./index-a1eb659d.js";import{O as F,w as h,c as p,at as O,Y,m as I,L as Q,b as U,W as y,Q as V}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function B(e){const i=P(e),{paddingBottom:u,paddingTop:n,borderBottom:o,borderTop:r}=i;return{...i,paddingSize:n+u,borderSize:r+o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function S(e,i,u=!0){let n;const o=e;o.__cdk_measure_textarea?n=o.__cdk_measure_textarea:(n=e.cloneNode(!1),u&&(o.__cdk_measure_textarea=n)),Object.keys(_).forEach(s=>{n.style.setProperty(s,_[s],"important")}),e.parentNode.appendChild(n);const r=i(n);return n.parentNode&&n.parentNode.removeChild(n),r}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e){let i=0;return F((u,n)=>(h(e,()=>{i=T(e.value),n()}),{get(){if(!e.value)return 0;const o=i||(i=T(e.value));return u(),o},set(){}}))}function T(e){return!e||!e.parentNode?0:S(e,i=>{const u=i.rows,{paddingSize:n}=B(i);i.rows=1,i.value="x";const o=i.scrollHeight-n;return i.rows=u,o>0?o:0},!1)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const f=e=>U(e)&&(y(e.minRows)||y(e.maxRows));function J(e,i){let u,n,o,r=!1,s,g;const z=p(()=>f(i.value)||O(i.value)&&!!i.value),d=p(()=>f(i.value)?i.value.minRows:void 0),H=p(()=>f(i.value)?i.value.maxRows:void 0),a=X(e),v=p(()=>e.value?B(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function N(){return S(e.value,l=>(l.value=e.value.value,l.scrollHeight,w(l.scrollHeight,v.value)))}function D(){return!e.value||!e.value.placeholder?0:(g||S(e.value,t=>{t.style.height="",t.value=t.placeholder,t.scrollHeight,g=w(t.scrollHeight,v.value)}),g)}function b(l=!1){if(!z.value||!a.value)return;const t=e.value,c=t.value;if(!l&&d.value===n&&c===u)return;t.style.lineHeight=`${a.value}px`;const k=Math.max(N(),D());t.style.height=`${k}px`,s=s!=null?s:t.style.overflow,t.style.overflow="hidden",V(()=>x(()=>{L(t),t.style.overflow=s!=null?s:"",s=void 0})),u=c,n=d.value}function A(){if(!e.value)return;const l=d.value&&a.value?d.value*a.value:null,t=l?`${E(l,v.value)}px`:"";e.value.style.maxHeight=t}function C(){if(!e.value)return;const l=H.value&&a.value?H.value*a.value:null,t=l?`${E(l,v.value)}px`:"";e.value.style.maxHeight=t}function L(l){const{selectionStart:t,selectionEnd:c}=l;r&&document.activeElement===l&&l.setSelectionRange(t,c)}function M(){o!==void 0&&e.value&&(e.value.style.height=o)}let m;const $=Y(()=>{g=void 0,b(!0)},16);return I(()=>{const l=[h(e,()=>{e.value&&(o=e.value.style.height)},{immediate:!0}),h(i,()=>{z.value?b(!0):M()},{immediate:!0}),h(d,()=>{A()},{immediate:!0}),h(H,()=>{C()},{immediate:!0})],t=j(e,$);m=()=>{l.forEach(c=>c()),t()},r=!0}),Q(()=>{m==null||m(),r=!1}),{resizeToFitContent:b,lineHeight:a,boxSizingData:v}}function w(e,i){const{borderSize:u,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+u:e-n}function E(e,i){const{borderSize:u,paddingSize:n,boxSizing:o}=i;return o==="border-box"?e+u+n:e+n}export{S as m,J as u};
