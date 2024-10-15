import{W as L,av as B,m as J,t as M,ag as D,aw as R,T as j,U}from"./index-b2ce1350.js";import{c as m,aR as q,w as V,m as P,z as k,v as o,d as G,aE as Q,E as H,q as O,a7 as W}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n){return m(()=>{const t=e.value,a=n.value;let l;a<=9?l=y(1,a):l=Y(t,a);const u={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[u,...l,i]})}const y=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...y(2,5),l]:e<n-3?t=[a,...y(e-2,e+2),l]:t=[a,...y(n-4,n-1)];const u=y(1,1),i=y(n,n);return[...u,...t,...i]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Z(e,n,t){return q(l=>{const u=l.target,i=Math.floor(L(u.value,e.value));n(i),t.value||(u.value="")},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,n){var d;const[t,a]=B(e,"pageIndex",1),[l,u]=B(e,"pageSize",(d=e.pageSize)!=null?d:n.pageSize),i=m(()=>Math.max(Math.ceil(e.total/l.value),1)),p=g=>{const v=te(g,i.value);v!==t.value&&(a(v),J(e.onChange,v,l.value))},s=g=>{u(g),J(e.onChange,t.value,g)};return V([t,i],([g,v])=>{g>v&&p(v)},{immediate:!0}),{activeIndex:t,activeSize:l,lastIndex:i,changePageIndex:p,changePageSize:s}}const te=(e,n)=>e>n?n:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},N=P({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:u,activeIndex:i,changePageIndex:p}=k(b),s=m(()=>i.value===e.index),d=m(()=>e.disabled||n.disabled),g=m(()=>{var r;return(r=n.showTitle)!=null?r:a.showTitle}),v=m(()=>{const r=`${u.value}-item`;return{[r]:!0,[`${r}-${e.type}`]:!0,[`${r}-active`]:s.value,[`${r}-disabled`]:d.value}}),T=m(()=>{if(!g.value)return;const{type:r,index:f}=e;return r==="page"?f:l.pagination[r]}),C=()=>{if(d.value)return;const{type:r,index:f}=e;let h;r==="page"?h=f:h=i.value+le[r],p(h)},I=r=>{d.value||r.code!=="Enter"||C()};return()=>{const r=`${u.value}-item`,{index:f,type:h}=e,w=d.value;let z;e.type==="prev5"||h==="next5"?z=o("span",{class:` ${r}-jumper`},[o(M,{name:E[h]},null),o(M,{class:`${r}-ellipsis`,name:"ellipsis"},null)]):G(f)?z=o(M,{name:E[h]},null):z=Q(f);const $=t.item?t.item({index:f,type:h,active:s.value,disabled:w,original:z}):z;return o("li",{class:v.value,tabindex:w?-1:0,title:T.value,onClick:C,onKeydown:I},[o("span",{class:`${r}-content`},[$])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=P({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(b);return()=>{const u=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:p,page:s}=n.pagination;return o("li",{class:u},[p,o(D,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=P({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:i}=k(b),p=m(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(d=>({key:d,label:d}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:g}=t.pagination;return o("li",{class:s},[d,o(R,{disabled:e.disabled,dataSource:p.value,size:l.value==="lg"?"md":"sm",value:u.value,onChange:i},null),g])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=P({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(b),i=m(()=>{const p=a.value,s=l.value,d=(p-1)*s+1,g=Math.min(p*s,e.total);return[d,g]});return()=>{const p=`${u.value}-total`,{total:s}=e,{totalPrefix:d,totalSuffix:g}=t.pagination,v=n.total?n.total({total:s,range:i.value,prefix:d,suffix:g}):`${d} ${s} ${g}`;return o("li",{class:p},[v])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(e,n){const{getColorPalette:t}=n,{colorPrimary:a,fontSizeSm:l,paddingSizeXs:u,heightSm:i,heightMd:p}=e,s=t(a);return{fontSizeSm:l,fontSizeMd:l,fontSizeLg:l,itemPaddingSm:0,itemPaddingMd:u,itemPaddingLg:u,itemContentSizeSm:i,itemContentSizeMd:i,itemContentSizeLg:p,outLineColor:s.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(e,n,t)=>K(e,t);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=P({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=j("common"),{globalHashId:a,hashId:l,registerToken:u}=U("pagination");u(oe);const i=m(()=>`${t.prefixCls}-pagination`),p=j("locale"),s=j("pagination"),d=m(()=>{var c;return(c=e.showTotal)!=null?c:s.showTotal}),g=m(()=>{var c;return(c=e.simple)!=null?c:s.simple}),v=m(()=>{var c;return(c=e.size)!=null?c:s.size}),T=m(()=>{var c;return(c=e.showQuickJumper)!=null?c:s.showQuickJumper}),C=m(()=>{var c;return(c=e.showSizeChanger)!=null?c:s.showSizeChanger}),{activeIndex:I,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:w}=ee(e,s),z=X(I,f),$=Z(I,h,g);H(b,{props:e,slots:n,config:s,locale:p,mergedPrefixCls:i,mergedSize:v,activeIndex:I,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:w,jumpToIndex:$});const _=m(()=>{const c=i.value;return O({[a.value]:!!a.value,[l.value]:!!l.value,[c]:!0,[`${c}-disabled`]:e.disabled,[`${c}-simple`]:g.value,[`${c}-${v.value}`]:!0})});return()=>{const c=i.value,x=d.value?[o(ie,null,null)]:[];if(g.value){const S=I.value,A=f.value;x.push(o(N,{disabled:S===1,type:"prev"},null)),x.push(o("li",{class:`${c}-item`},[T.value?o(D,{disabled:e.disabled,size:v.value==="lg"?"md":"sm",value:S.toString(),onKeydown:$},null):S,o("span",{class:`${c}-item-slash`},[Q("/")]),o("span",null,[A])])),x.push(o(N,{disabled:S===A,type:"next"},null)),C.value&&x.push(o(F,null,null))}else z.value.forEach(S=>x.push(o(N,W({key:S.type+"-"+S.index},S),null))),C.value&&x.push(o(F,null,null)),T.value&&x.push(o(se,null,null));return o("ul",{class:_.value},[x])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const de=ue;export{de as I};
