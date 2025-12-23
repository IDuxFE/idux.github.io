import{d as x,as as g,at as h,c as d,f as y,b8 as H,an as L,bg as A,a5 as B,b$ as b,K as D,x as F,H as E,af as N,i as O,bk as _,$ as j,k as w}from"./index-da4385ef.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={fixed:{type:[Boolean,Object],default:!1},floatSider:{type:Boolean,default:!1}},W={},V={},z={},G={collapsed:{type:Boolean,default:void 0},breakpoint:String,pointer:{type:Boolean,default:!1},pointerDelay:{type:[Number,Array],default:()=>[0,100]},"onUpdate:collapsed":[Function,Array]},R={icon:{type:[String,Array],default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function S(){return{siderWidth:224,siderCollapsedWidth:44}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=(r,e)=>S();/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=x({name:"IxLayout",props:K,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s,registerToken:l}=h("layout");l(U);const u=d(()=>`${f.prefixCls}-layout`),t=d(()=>{const{fixed:n}=r;if(H(n)){const{header:a=!1,sider:c=!1}=n;return{header:a,sider:c}}return{header:n,sider:n}}),m=d(()=>{const n=u.value,{header:a,sider:c}=t.value;return L({[o.value]:!!o.value,[s.value]:!!s.value,[n]:!0,[`${n}-fixed-header`]:a,[`${n}-fixed-sider`]:c,[`${n}-float-sider`]:r.floatSider})});return()=>{var n;return y("section",{class:m.value},[(n=e.default)==null?void 0:n.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=x({name:"IxLayoutContent",props:V,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=h("layout"),l=d(()=>`${f.prefixCls}-layout-content`);return()=>{var t;const u=l.value;return y("main",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=x({name:"IxLayoutFooter",props:z,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=h("layout"),l=d(()=>`${f.prefixCls}-layout-footer`);return()=>{var t;const u=l.value;return y("footer",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=x({name:"IxLayoutHeader",props:W,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=h("layout"),l=d(()=>`${f.prefixCls}-layout-header`);return()=>{var t;const u=l.value;return y("header",{class:[u,o.value,s.value]},[(t=e.default)==null?void 0:t.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=Symbol("layoutSider");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=x({name:"IxLayoutSider",props:G,setup(r,{slots:e}){const f=g("common"),{globalHashId:o,hashId:s}=h("layout"),l=d(()=>`${f.prefixCls}-layout-sider`),[u,t]=A(r,"collapsed",!1);B(k,{mergedPrefixCls:l,collapsed:u,setCollapsed:t});const m=d(()=>{const{breakpoint:i}=r;return i?b.indexOf(i):-1}),n=d(()=>m.value>-1),a=D();let c;F(n,i=>{c==null||c(),i&&(c=E(()=>{const v=b.findIndex(I=>a[I]);t(v<=m.value,"breakpoint")}))},{immediate:!0});let p;const C=i=>{const{pointerDelay:v}=r,[I,$]=Array.isArray(v)?v:[v,v];p&&clearTimeout(p),p=setTimeout(()=>{t(i,"pointer"),p=void 0},i?I:$)},P=d(()=>{if(r.pointer)return{onPointerenter:()=>C(!1),onPointerleave:()=>C(!0)}}),T=d(()=>{const i=l.value;return L({[o.value]:!!o.value,[s.value]:!!s.value,[i]:!0,[`${i}-collapsed`]:u.value})});return()=>{var i;return y("aside",N({class:T.value},P.value),[(i=e.default)==null?void 0:i.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=x({name:"IxLayoutSiderTrigger",props:R,setup(r,{slots:e}){const{mergedPrefixCls:f,collapsed:o,setCollapsed:s}=O(k),{globalHashId:l,hashId:u}=h("layout"),t=d(()=>{const{icon:a}=r,[c="menu-fold",p="menu-unfold"]=Array.isArray(a)?a:[a,a];return o.value?c:p}),m=d(()=>{const a=`${f.value}-trigger`;return{[l.value]:!!l.value,[u.value]:!!u.value,[a]:!0,[`${a}-collapsed`]:o.value}}),n=()=>{s(!o.value,"trigger")};return()=>{var c;let a;if(e.icon)a=e.icon({collapsed:o.value});else{const p=t.value;a=_(p)?y(j,{name:p},null):p}return y("div",{class:m.value},[y("span",null,[(c=e.default)==null?void 0:c.call(e)]),y(w,{mode:"text",onClick:n},{icon:()=>a})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ee=Y,ae=q,oe=J,te=M,ne=Q,re=X;export{ee as I,te as a,ne as b,ae as c,oe as d,re as e};
