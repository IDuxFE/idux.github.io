import{k as p,O}from"./vendor-50817465.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function I(u,o,e,r="pre"){const n=(t,s)=>{for(let f=0;f<t.length;f++){const i=t[f];r==="pre"&&e(i,s),i[o]&&n(i[o],[i,...s]),r==="post"&&e(i,s)}};n(u,[])}function k(u,o,e,r="or"){const n=(t,s)=>{var i;const f=[];for(let a=0;a<t.length;a++){let l;const c=t[a];c[o]&&(l=n(c[o],[c,...s]));let m=e(c,s,l);const g=l&&l.length>0||!((i=c[o])!=null&&i.length)&&m;m=r==="and"?g&&m:g||m,m&&f.push({...c,[o]:c[o]&&l})}return f};return n(u,[])}function T(u,o,e,r){const n=u.map(t=>({...t}));for(const t of o){const s=n.find(f=>{const i=r(t),a=r(f);return!p(i)&&!p(a)&&i===a});if(!s){n.push({...t});continue}for(const f of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])f!==e&&(s[f]=t[f]);O(t[e])&&(s[e]=T(s[e]??[],t[e],e,r))}return n}function v(u,o,e,r=!1){const n=[];return I(u,o,t=>{if(!r||!t[o]||t[o].length<=0){const s=e?e(t):t;s&&n.push(s)}}),n}function x(u,o,e,r=!1){const n=[];return I(u,o,t=>{var s;(!r||!((s=t[o])!=null&&s.length))&&n.push(e(t))}),n}export{v as a,k as f,x as g,T as m,I as t};
