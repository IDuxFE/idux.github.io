import{L as C,J as N,S as T,Q as p,R as b,U as O,m as y,a3 as R}from"./index-c8a1b625.js";import{v as A,f as h,y as d,b as g,p as w,x as L,P as H,w as S,N as $,i as P}from"./vendor-3e7796bf.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E=Symbol("anchorToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F={affix:{type:Boolean,default:!0},bounds:Number,hideLinkBall:{type:Boolean,default:void 0},offsetTop:Number,target:[String,HTMLElement,Function],targetOffset:Number,onChange:[Function,Array],onClick:[Function,Array]},q={href:{type:String,required:!0},title:String},M=A({name:"IxAnchor",props:F,setup(e,{slots:c}){const r=C("common"),i=h(()=>`${r.prefixCls}-anchor`),f=C("anchor"),n=h(()=>{var l;return(l=e.hideLinkBall)!=null?l:f.hideLinkBall}),o=h(()=>{const{offsetTop:l}=e;return{maxHeight:l?`calc(100vh - ${l}px)`:"100vh"}}),{activeLink:s}=U(e,f),{anchorRef:v,inkBallElRef:a,inkBallClasses:u,inkBallTop:t}=j(s,i);return()=>{var m;const l=i.value,x=n.value?null:d("span",{class:u.value,style:{top:t.value},ref:a},null),k=d("div",{class:`${l}-wrapper`,style:o.value},[d("div",{class:l,ref:v},[d("div",{class:`${l}-ink`},[x]),(m=c.default)==null?void 0:m.call(c)])]);return e.affix?d(N,{target:e.target,offset:e.offsetTop},{default:()=>[k]}):k}}}),U=(e,c)=>{const r=g([]),i=a=>{r.value.includes(a)||r.value.push(a)},f=a=>{const u=r.value.indexOf(a);u!==-1&&r.value.splice(u,1)},n=g(),o=a=>{n.value!==a&&(n.value=a,y(e.onChange,a))},{scrollTo:s}=J(e,c,r,o);return w(E,{registerLink:i,unregisterLink:f,activeLink:n,handleLinkClick:(a,u)=>{y(e.onClick,a,u),s(u.href)}}),{activeLink:n}},j=(e,c)=>{const r=g(),i=g(),f=h(()=>{const o=c.value;return{[`${o}-ink-ball`]:!0,[`${o}-ink-ball-visible`]:!!e.value}}),n=g();return L(()=>{H(()=>{var u,t,l;const o=(u=r.value)==null?void 0:u.querySelector(`a[data-href="${e.value}"]`);if(!o)return;const s=(l=(t=i.value)==null?void 0:t.getBoundingClientRect().height)!=null?l:9,{offsetTop:v,clientHeight:a}=o;n.value=`${v+a/2-s/2}px`},{flush:"post"})}),{anchorRef:r,inkBallElRef:i,inkBallClasses:f,inkBallTop:n}},I=(e,c)=>{const r=document.getElementById(e.split("#")[1]);if(r){const{top:i}=R(r,c);return i}return null},G=(e,c,r,i)=>e.length?e.map(n=>{const o=I(n,c);return{link:n,top:o}}).reduce((n,o)=>{const{top:s}=o;return s!==null&&s<r+i&&n.top<s?o:n}).link:"",J=(e,c,r,i)=>{const f=h(()=>{var t;return(t=e.bounds)!=null?t:c.bounds}),n=g(),o="scroll";let s=!1;const v=h(()=>{var t,l;return(l=(t=e.targetOffset)!=null?t:e.offsetTop)!=null?l:0}),a=()=>{if(s)return;const t=G(r.value,n.value,v.value,f.value);i(t)},u=t=>{i(t);const l=I(t,n.value);l!==null&&(s=!0,O({amountOfChange:l-v.value,target:n.value,callback:()=>{s=!1}}))};return S(()=>e.target,()=>{T(n.value,o,a),n.value=p(e.target),b(n.value,o,a),a()}),L(()=>{n.value=p(e.target),b(n.value,o,a),a()}),$(()=>{T(n.value,o,a)}),{scrollTo:u}},Q=A({name:"IxAnchorLink",props:q,setup(e,{slots:c}){const r=C("common"),i=h(()=>`${r.prefixCls}-anchor-link`),{registerLink:f,unregisterLink:n,activeLink:o,handleLinkClick:s}=P(E);S(()=>e.href,(t,l)=>{n(l),f(t)}),L(()=>f(e.href)),$(()=>n(e.href));const v=h(()=>o.value===e.href),a=h(()=>{const t=i.value;return{[`${t}-title`]:!0,[`${t}-title-active`]:v.value}}),u=t=>s(t,e);return()=>{var k,m,B;const{href:t,title:l}=e,x=i.value;return d("div",{class:x},[d("a",{class:a.value,href:t,"data-href":t,title:l,onClick:u},[(m=(k=c.title)==null?void 0:k.call(c))!=null?m:l]),(B=c.default)==null?void 0:B.call(c)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=M,K=Q;export{D as I,K as a};
