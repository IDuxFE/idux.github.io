import{D,ak as L}from"./index-8bc6cdd3.js";import{a4 as P,w as m,f as H,av as $,M as x,x as G,aj as I,j as U,L as _,G as V}from"./vendor-50817465.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function E(e){const{boxSizing:n,paddingBottom:r,paddingTop:i,borderBottom:o,borderTop:a}=window.getComputedStyle(e),u=parseFloat(i),c=parseFloat(r),g=parseFloat(a),s=parseFloat(o);return{boxSizing:n,paddingSize:u+c,borderSize:g+s,paddingTop:u,paddingBottom:c,borderTop:g,borderBottom:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function z(e,n,r=!0){let i;const o=e;o.__cdk_measure_textarea?i=o.__cdk_measure_textarea:(i=e.cloneNode(!1),r&&(o.__cdk_measure_textarea=i)),Object.keys(T).forEach(u=>{i.style.setProperty(u,T[u],"important")}),e.parentNode.appendChild(i);const a=n(i);return e.parentNode.removeChild(i),a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e){let n=0;return P((r,i)=>(m(e,()=>{n=w(e.value),i()}),{get(){if(!e.value)return 0;const o=n||(n=w(e.value));return r(),o},set(){}}))}function w(e){return!e||!e.parentNode?0:z(e,n=>{const r=n.rows,{paddingSize:i}=E(n);n.rows=1,n.value="x";const o=n.scrollHeight-i;return n.rows=r,o>0?o:0},!1)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=e=>U(e)&&(_(e.minRows)||_(e.maxRows));function J(e,n){let r,i,o,a=!1,u,c;const g=H(()=>S(n.value)||$(n.value)&&!!n.value),s=H(()=>S(n.value)?n.value.minRows:void 0),b=H(()=>S(n.value)?n.value.maxRows:void 0),d=X(e),h=H(()=>e.value?E(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function F(){return z(e.value,l=>(l.value=e.value.value,l.scrollHeight,y(l.scrollHeight,h.value)))}function C(){return!e.value||!e.value.placeholder?0:(c||z(e.value,t=>{t.style.height="",t.value=t.placeholder,t.scrollHeight,c=y(t.scrollHeight,h.value)}),c)}function f(l=!1){if(!g.value||!d.value)return;const t=e.value,v=t.value;if(!l&&s.value===i&&v===r)return;t.style.lineHeight=`${d.value}px`;const A=Math.max(F(),C());t.style.height=`${A}px`,u=u??t.style.overflow,t.style.overflow="hidden",V(()=>L(()=>{O(t),t.style.overflow=u??"",u=void 0})),r=v,i=s.value}function M(){if(!e.value)return;const l=s.value&&d.value?s.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function N(){if(!e.value)return;const l=b.value&&d.value?b.value*d.value:null,t=l?`${B(l,h.value)}px`:"";e.value.style.maxHeight=t}function O(l){const{selectionStart:t,selectionEnd:v}=l;a&&document.activeElement===l&&l.setSelectionRange(t,v)}function j(){o!==void 0&&e.value&&(e.value.style.height=o)}let p;const k=x(()=>{c=void 0,f(!0)},16);return G(()=>{const l=[m(e,()=>{e.value&&(o=e.value.style.height)},{immediate:!0}),m(n,()=>{g.value?f(!0):j()},{immediate:!0}),m(s,()=>{M()},{immediate:!0}),m(b,()=>{N()},{immediate:!0})],t=D(e,k);p=()=>{l.forEach(v=>v()),t()},a=!0}),I(()=>{p==null||p(),a=!1}),{resizeToFitContent:f,lineHeight:d,boxSizingData:h}}function y(e,n){const{borderSize:r,paddingSize:i,boxSizing:o}=n;return o==="border-box"?e+r:e-i}function B(e,n){const{borderSize:r,paddingSize:i,boxSizing:o}=n;return o==="border-box"?e+r+i:e+i}export{z as m,J as u};
