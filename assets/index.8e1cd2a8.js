import{u,ag as x,aW as d,B as y}from"./index.fa1c17ad.js";import{v as l,e as c,y as p,w as C,z as I,Q as L}from"./vendor.71a61ad2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P={},v={},g={},S={},$={collapsed:{type:Boolean,default:void 0},breakpoint:String,"onUpdate:collapsed":[Function,Array]},b=l({name:"IxLayout",props:P,setup(s,{slots:e}){const n=u("common"),t=c(()=>`${n.prefixCls}-layout`);return()=>{var a;return p("section",{class:t.value},[(a=e.default)==null?void 0:a.call(e)])}}}),k=l({name:"IxLayoutContent",props:g,setup(s,{slots:e}){const n=u("common"),t=c(()=>`${n.prefixCls}-layout-content`);return()=>{var o;const a=t.value;return p("main",{class:`${a}`},[(o=e.default)==null?void 0:o.call(e)])}}}),h=l({name:"IxLayoutFooter",props:S,setup(s,{slots:e}){const n=u("common"),t=c(()=>`${n.prefixCls}-layout-footer`);return()=>{var o;const a=t.value;return p("footer",{class:a},[(o=e.default)==null?void 0:o.call(e)])}}}),B=l({name:"IxLayoutHeader",props:v,setup(s,{slots:e}){const n=u("common"),t=c(()=>`${n.prefixCls}-layout-header`);return()=>{var o;const a=t.value;return p("header",{class:a},[(o=e.default)==null?void 0:o.call(e)])}}}),F=l({name:"IxLayoutSider",props:$,setup(s,{slots:e}){const n=u("common"),t=c(()=>`${n.prefixCls}-layout-sider`),a=_(s),o=c(()=>{const r=t.value;return I({[r]:!0,[`${r}-collapsed`]:a.value})});return()=>{var r;return p("aside",{class:o.value},[(r=e.default)==null?void 0:r.call(e)])}}}),_=s=>{const[e,n]=x(s,"collapsed",!1),t=c(()=>{const{breakpoint:r}=s;return r?d.indexOf(r):-1}),a=c(()=>t.value>-1);let o;return C(a,r=>{if(o==null||o(),r){const i=y();o=L(()=>{const m=d.findIndex(f=>i[f]);n(m<=t.value)})}},{immediate:!0}),e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E=b,z=k,A=h,K=B,N=F;export{E as I,K as a,N as b,z as c,A as d};
