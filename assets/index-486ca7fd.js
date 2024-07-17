import{T as g,U as x,av as H,aR as S,h as A,t as B,c as D}from"./index-57842767.js";import{m as h,c as d,b as F,q as L,v as m,E,w as N,N as w,a7 as O,z as _,f as j}from"./vendor-95ed6e76.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W={fixed:{type:[Boolean,Object],default:!1},floatSider:{type:Boolean,default:!1}},z={},K={},R={},U={collapsed:{type:Boolean,default:void 0},breakpoint:String,pointer:{type:Boolean,default:!1},pointerDelay:{type:[Number,Array],default:()=>[0,100]},"onUpdate:collapsed":[Function,Array]},V={icon:{type:[String,Array],default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function b(){return{siderWidth:224,siderCollapsedWidth:44}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=(r,e)=>b(),G=h({name:"IxLayout",props:W,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s,registerToken:l}=x("layout");l(q);const u=d(()=>`${f.prefixCls}-layout`),t=d(()=>{const{fixed:n}=r;if(F(n)){const{header:a=!1,sider:c=!1}=n;return{header:a,sider:c}}return{header:n,sider:n}}),y=d(()=>{const n=u.value,{header:a,sider:c}=t.value;return L({[o.value]:!!o.value,[s.value]:!!s.value,[n]:!0,[`${n}-fixed-header`]:a,[`${n}-fixed-sider`]:c,[`${n}-float-sider`]:r.floatSider})});return()=>{var n;return m("section",{class:y.value},[(n=e.default)==null?void 0:n.call(e)])}}}),Y=h({name:"IxLayoutContent",props:K,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=x("layout"),l=d(()=>`${f.prefixCls}-layout-content`);return()=>{var t;const u=l.value;return m("main",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}}),J=h({name:"IxLayoutFooter",props:R,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=x("layout"),l=d(()=>`${f.prefixCls}-layout-footer`);return()=>{var t;const u=l.value;return m("footer",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}}),M=h({name:"IxLayoutHeader",props:z,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=x("layout"),l=d(()=>`${f.prefixCls}-layout-header`);return()=>{var t;const u=l.value;return m("header",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=Symbol("layoutSider"),Q=h({name:"IxLayoutSider",props:U,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=x("layout"),l=d(()=>`${f.prefixCls}-layout-sider`),[u,t]=H(r,"collapsed",!1);E(P,{mergedPrefixCls:l,collapsed:u,setCollapsed:t});const y=d(()=>{const{breakpoint:i}=r;return i?S.indexOf(i):-1}),n=d(()=>y.value>-1),a=A();let c;N(n,i=>{c==null||c(),i&&(c=w(()=>{const v=S.findIndex(I=>a[I]);t(v<=y.value,"breakpoint")}))},{immediate:!0});let p;const C=i=>{const{pointerDelay:v}=r,[I,$]=Array.isArray(v)?v:[v,v];p&&clearTimeout(p),p=setTimeout(()=>{t(i,"pointer"),p=void 0},i?I:$)},T=d(()=>{if(r.pointer)return{onPointerenter:()=>C(!1),onPointerleave:()=>C(!0)}}),k=d(()=>{const i=l.value;return L({[o.value]:!!o.value,[s.value]:!!s.value,[i]:!0,[`${i}-collapsed`]:u.value})});return()=>{var i;return m("aside",O({class:k.value},T.value),[(i=e.default)==null?void 0:i.call(e)])}}}),X=h({name:"IxLayoutSiderTrigger",props:V,setup(r,{slots:e}){const{mergedPrefixCls:f,collapsed:o,setCollapsed:s}=_(P),{globalHashId:l,hashId:u}=x("layout"),t=d(()=>{const{icon:a}=r,[c="menu-fold",p="menu-unfold"]=Array.isArray(a)?a:[a,a];return o.value?c:p}),y=d(()=>{const a=`${f.value}-trigger`;return{[l.value]:!!l.value,[u.value]:!!u.value,[a]:!0,[`${a}-collapsed`]:o.value}}),n=()=>{s(!o.value,"trigger")};return()=>{var c;let a;if(e.icon)a=e.icon({collapsed:o.value});else{const p=t.value;a=j(p)?m(B,{name:p},null):p}return m("div",{class:y.value},[m("span",null,[(c=e.default)==null?void 0:c.call(e)]),m(D,{mode:"text",onClick:n},{icon:()=>a})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=G,oe=Y,te=J,ne=M,re=Q,se=X;export{ne as I,re as a,oe as b,te as c,ae as d,se as e};
