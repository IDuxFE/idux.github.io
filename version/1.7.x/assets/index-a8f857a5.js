import{L as x,al as b,aG as v,h as $,A as k,c as A}from"./index-9409c3e1.js";import{x as y,c as s,b as B,A as I,z as f,q as T,w as F,Q as D,a3 as w,l as E,f as H}from"./vendor-5e807b09.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N={fixed:{type:[Boolean,Object],default:!1},floatSider:{type:Boolean,default:!1}},O={},_={},j={},z={collapsed:{type:Boolean,default:void 0},breakpoint:String,pointer:{type:Boolean,default:!1},pointerDelay:{type:[Number,Array],default:()=>[0,100]},"onUpdate:collapsed":[Function,Array]},G={icon:{type:[String,Array],default:void 0}},K=y({name:"IxLayout",props:N,setup(u,{slots:e}){const l=x("common"),a=s(()=>`${l.prefixCls}-layout`),c=s(()=>{const{fixed:o}=u;if(B(o)){const{header:p=!1,sider:t=!1}=o;return{header:p,sider:t}}return{header:o,sider:o}}),r=s(()=>{const o=a.value,{header:p,sider:t}=c.value;return I({[o]:!0,[`${o}-fixed-header`]:p,[`${o}-fixed-sider`]:t,[`${o}-float-sider`]:u.floatSider})});return()=>{var o;return f("section",{class:r.value},[(o=e.default)==null?void 0:o.call(e)])}}}),V=y({name:"IxLayoutContent",props:_,setup(u,{slots:e}){const l=x("common"),a=s(()=>`${l.prefixCls}-layout-content`);return()=>{var r;const c=a.value;return f("main",{class:`${c}`},[(r=e.default)==null?void 0:r.call(e)])}}}),q=y({name:"IxLayoutFooter",props:j,setup(u,{slots:e}){const l=x("common"),a=s(()=>`${l.prefixCls}-layout-footer`);return()=>{var r;const c=a.value;return f("footer",{class:c},[(r=e.default)==null?void 0:r.call(e)])}}}),Q=y({name:"IxLayoutHeader",props:O,setup(u,{slots:e}){const l=x("common"),a=s(()=>`${l.prefixCls}-layout-header`);return()=>{var r;const c=a.value;return f("header",{class:c},[(r=e.default)==null?void 0:r.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("layoutSider"),R=y({name:"IxLayoutSider",props:z,setup(u,{slots:e}){const l=x("common"),a=s(()=>`${l.prefixCls}-layout-sider`),[c,r]=b(u,"collapsed",!1);T(L,{mergedPrefixCls:a,collapsed:c,setCollapsed:r});const o=s(()=>{const{breakpoint:n}=u;return n?v.indexOf(n):-1}),p=s(()=>o.value>-1),t=$();let d;F(p,n=>{d==null||d(),n&&(d=D(()=>{const m=v.findIndex(C=>t[C]);r(m<=o.value,"breakpoint")}))},{immediate:!0});let i;const g=n=>{const{pointerDelay:m}=u,[C,h]=Array.isArray(m)?m:[m,m];i&&clearTimeout(i),i=setTimeout(()=>{r(n,"pointer"),i=void 0},n?C:h)},S=s(()=>{if(u.pointer)return{onPointerenter:()=>g(!1),onPointerleave:()=>g(!0)}}),P=s(()=>{const n=a.value;return I({[n]:!0,[`${n}-collapsed`]:c.value})});return()=>{var n;return f("aside",w({class:P.value},S.value),[(n=e.default)==null?void 0:n.call(e)])}}}),U=y({name:"IxLayoutSiderTrigger",props:G,setup(u,{slots:e}){const{mergedPrefixCls:l,collapsed:a,setCollapsed:c}=E(L),r=s(()=>{const{icon:t}=u,[d="menu-fold",i="menu-unfold"]=Array.isArray(t)?t:[t,t];return a.value?d:i}),o=s(()=>{const t=`${l.value}-trigger`;return{[t]:!0,[`${t}-collapsed`]:a.value}}),p=()=>{c(!a.value,"trigger")};return()=>{var d;let t;if(e.icon)t=e.icon({collapsed:a.value});else{const i=r.value;t=H(i)?f(k,{name:i},null):i}return f("div",{class:o.value},[f("span",null,[(d=e.default)==null?void 0:d.call(e)]),f(A,{mode:"text",onClick:p},{icon:()=>t})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=K,M=V,X=q,Z=Q,ee=R,oe=U;export{Z as I,ee as a,M as b,X as c,J as d,oe as e};