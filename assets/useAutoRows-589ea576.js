import{a2 as A,a6 as L}from"./index-32d407ed.js";import{e as m,M as k,x as D,w as b,aj as P,au as $,G,j as I,L as _}from"./vendor-730bc5d6.js";function B(e){const{boxSizing:i,paddingBottom:l,paddingTop:t,borderBottom:r,borderTop:a}=window.getComputedStyle(e),u=parseFloat(t),c=parseFloat(l),g=parseFloat(a),s=parseFloat(r);return{boxSizing:i,paddingSize:u+c,borderSize:g+s,paddingTop:u,paddingBottom:c,borderTop:g,borderBottom:s}}const T={height:"0","min-height":"0","max-height":"none",visibility:"hidden",overflow:"hidden",transition:"none"};function z(e,i,l=!0){let t;const r=e;r.__cdk_measure_textarea?t=r.__cdk_measure_textarea:(t=e.cloneNode(!1),l&&(r.__cdk_measure_textarea=t)),Object.keys(T).forEach(u=>{t.style.setProperty(u,T[u],"important")}),e.parentNode.appendChild(t);const a=i(t);return e.parentNode.removeChild(t),a}function U(e){return m(()=>V(e.value))}function V(e){return!e||!e.parentNode?0:z(e,i=>{const l=i.rows,{paddingSize:t}=B(i);i.rows=1,i.value="x";const r=i.scrollHeight-t;return i.rows=l,r},!1)}const S=e=>I(e)&&(_(e.minRows)||_(e.maxRows));function q(e,i){let l,t,r,a=!1,u,c;const g=m(()=>S(i.value)||$(i.value)&&!!i.value),s=m(()=>S(i.value)?i.value.minRows:void 0),H=m(()=>S(i.value)?i.value.maxRows:void 0),d=U(e),h=m(()=>e.value?B(e.value):{paddingSize:0,borderSize:0,boxSizing:""});function E(){return z(e.value,o=>(o.value=e.value.value,o.scrollHeight,w(o.scrollHeight,h.value)))}function F(){return!e.value||!e.value.placeholder?0:(c||z(e.value,n=>{n.style.height="",n.value=n.placeholder,n.scrollHeight,c=w(n.scrollHeight,h.value)}),c)}function f(o=!1){if(!g.value||!d.value)return;const n=e.value,v=n.value;if(!o&&s.value===t&&v===l)return;n.style.lineHeight=`${d.value}px`;const j=Math.max(E(),F());n.style.height=`${j}px`,u=u??n.style.overflow,n.style.overflow="hidden",G(()=>L(()=>{M(n),n.style.overflow=u??"",u=void 0})),l=v,t=s.value}function x(){if(!e.value)return;const o=s.value&&d.value?s.value*d.value:null,n=o?`${y(o,h.value)}px`:"";e.value.style.maxHeight=n}function C(){if(!e.value)return;const o=H.value&&d.value?H.value*d.value:null,n=o?`${y(o,h.value)}px`:"";e.value.style.maxHeight=n}function M(o){const{selectionStart:n,selectionEnd:v}=o;a&&document.activeElement===o&&o.setSelectionRange(n,v)}function N(){r!==void 0&&e.value&&(e.value.style.height=r)}let p;const O=k(()=>{c=void 0,f(!0)},16);return D(()=>{const o=[b(e,()=>{e.value&&(r=e.value.style.height)},{immediate:!0}),b(i,()=>{g.value?f(!0):N()},{immediate:!0}),b(s,()=>{x()},{immediate:!0}),b(H,()=>{C()},{immediate:!0})],n=A(e,O);p=()=>{o.forEach(v=>v()),n()},a=!0}),P(()=>{p==null||p(),a=!1}),{resizeToFitContent:f,lineHeight:d,boxSizingData:h}}function w(e,i){const{borderSize:l,paddingSize:t,boxSizing:r}=i;return r==="border-box"?e+l:e-t}function y(e,i){const{borderSize:l,paddingSize:t,boxSizing:r}=i;return r==="border-box"?e+l+t:e+t}export{z as m,q as u};
