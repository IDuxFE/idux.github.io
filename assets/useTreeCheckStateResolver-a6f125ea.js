import{d as D,P as V,c as N,b as O}from"./vendor-95c13cf7.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function b(g,o,e,p="pre"){const v=(l,s)=>{for(let h=0;h<l.length;h++){const m=l[h];p==="pre"&&e(m,s),m[o]&&v(m[o],[m,...s]),p==="post"&&e(m,s)}};v(g,[])}function J(g,o,e,p="or"){const v=(l,s)=>{var m;const h=[];for(let w=0;w<l.length;w++){let A;const M=l[w];M[o]&&(A=v(M[o],[M,...s]));let E=e(M,s,A);const P=A&&A.length>0||!((m=M[o])!=null&&m.length)&&E;E=p==="and"?P&&E:P||E,E&&h.push({...M,[o]:M[o]&&A})}return h};return v(g,[])}function z(g,o,e,p){var l;const v=g.map(s=>({...s}));for(const s of o){const h=v.find(m=>{const w=p(s),A=p(m);return!D(w)&&!D(A)&&w===A});if(!h){v.push({...s});continue}for(const m of[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)])m!==e&&(h[m]=s[m]);V(s[e])&&(h[e]=z((l=h[e])!=null?l:[],s[e],e,p))}return v}function L(g,o,e,p=!1){const v=[];return b(g,o,l=>{if(!p||!l[o]||l[o].length<=0){const s=e?e(l):l;s&&v.push(s)}}),v}function S(g,o,e,p=!1){const v=[];return b(g,o,l=>{var s;(!p||!((s=l[o])!=null&&s.length))&&v.push(e(l))}),v}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Q(g,o,e,p){const v=t=>{if(!V(t))return t;const n=new Map,f=new Map,r=new Map;return b(t,o.value,(a,c)=>{const i=e.value(a),u=c[0];n.set(i,a),r.set(i,c.length),u&&f.set(i,e.value(u))}),{data:t,dataMap:n,parentKeyMap:f,depthMap:r}},l=N(()=>{var t;return(t=p==null?void 0:p.value)!=null?t:"all"}),s=N(()=>v(g.value)),h=(t,n)=>{const{parentKeyMap:f,dataMap:r}=n,a=[];let c=t;for(;f.has(c);){const i=f.get(c),u=r.get(i);u&&a.push(u),c=i}return a},m=()=>{const{data:t,parentKeyMap:n,dataMap:f}=s.value;if(t)return t;const r=[];for(const a of n.keys())!n.has(a)&&f.has(a)&&r.push(f.get(a));return r},w=(t,n,f)=>{if(!n.length)return Array.from(t);if(l.value==="off")return Array.from(new Set([...t,...n]));const{dataMap:r}=f,a=new Set(t);return n.forEach(c=>{if(!r.has(c))return;const i=r.get(c);S([i],o.value,e.value,l.value==="child").forEach(u=>{a.add(u)})}),l.value==="child"?Array.from(a).filter(c=>{var i,u;return!((u=(i=r.get(c))==null?void 0:i[o.value])!=null&&u.length)}):(n.forEach(c=>{h(c,f).forEach(i=>{var u;(u=i[o.value])!=null&&u.every(I=>a.has(e.value(I)))&&a.add(c)})}),l.value==="all"||a.forEach(c=>{var u;if(!a.has(c))return;const i=(u=r.get(c))==null?void 0:u[o.value];i&&b(i,o.value,I=>{a.delete(e.value(I))})}),Array.from(a))},A=(t,n,f)=>{if(!n.length)return Array.from(t);const r=new Set(t);if(l.value==="off")return n.forEach(u=>{r.delete(u)}),Array.from(r);const{dataMap:a}=f,c=new Set,i=u=>{c.add(u),r.delete(u)};return n.forEach(u=>{if(!a.has(u))return;S([a.get(u)],o.value,e.value).forEach(T=>{i(T)});const I=h(u,f);if(l.value==="parent"){const j=[u,...I.map(e.value)].findIndex(_=>r.has(_));j>-1&&I.slice(0,j).forEach(_=>{_[o.value]&&(_[o.value].forEach(q=>{const x=e.value(q);c.has(x)||r.add(x)}),i(e.value(_)))})}else I.forEach(T=>{i(e.value(T))})}),Array.from(r)},M=(t,n)=>w(t,n,s.value),E=(t,n)=>A(t,n,s.value),P=(t,n)=>{const f=t!=null?t:m(),r=l.value==="parent"?f.map(e.value):new Set(S(f,o.value,e.value,l.value==="child"));return A(r,n,t?v(t):s.value)},R=(t,n)=>w([],n,t?v(t):s.value);return{appendKeys:M,removeKeys:E,getAllCheckedKeys:(t,n)=>{const f=(r=>O(r==null?void 0:r[0]))(t);return P(f?t:void 0,n!=null?n:f?[]:t!=null?t:[])},getAllUncheckedKeys:(t,n)=>{const f=(r=>O(r==null?void 0:r[0]))(t);return R(f?t:void 0,n!=null?n:f?[]:t!=null?t:[])}}}export{L as a,J as f,S as g,z as m,b as t,Q as u};
