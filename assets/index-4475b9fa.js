import{O as L,ao as B,m as D,A as M,a9 as Q,ap as q,M as N,N as O}from"./index-cd46e9ff.js";import{c as m,aD as R,w as U,l as P,y as k,q as o,d as V,an as _,D as G,p as H,a8 as X}from"./vendor-7ed7823e.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function W(e,n){return m(()=>{const t=e.value,a=n.value;let l;a<=9?l=I(1,a):l=Y(t,a);const u={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[u,...l,i]})}const I=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...I(2,5),l]:e<n-3?t=[a,...I(e-2,e+2),l]:t=[a,...I(n-4,n-1)];const u=I(1,1),i=I(n,n);return[...u,...t,...i]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Z(e,n,t){return R(l=>{const u=l.target,i=Math.floor(L(u.value,e.value));n(i),t.value||(u.value="")},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,n){var d;const[t,a]=B(e,"pageIndex",1),[l,u]=B(e,"pageSize",(d=e.pageSize)!=null?d:n.pageSize),i=m(()=>Math.max(Math.ceil(e.total/l.value),1)),g=p=>{const v=te(p,i.value);v!==t.value&&(a(v),D(e.onChange,v,l.value))},s=p=>{u(p),D(e.onChange,t.value,p)};return U([t,i],([p,v])=>{p>v&&g(v)},{immediate:!0}),{activeIndex:t,activeSize:l,lastIndex:i,changePageIndex:g,changePageSize:s}}const te=(e,n)=>e>n?n:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}},J={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},j=P({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:u,activeIndex:i,changePageIndex:g}=k(b),s=m(()=>i.value===e.index),d=m(()=>e.disabled||n.disabled),p=m(()=>{var r;return(r=n.showTitle)!=null?r:a.showTitle}),v=m(()=>{const r=`${u.value}-item`;return{[r]:!0,[`${r}-${e.type}`]:!0,[`${r}-active`]:s.value,[`${r}-disabled`]:d.value}}),T=m(()=>{if(!p.value)return;const{type:r,index:f}=e;return r==="page"?f:l.pagination[r]}),C=()=>{if(d.value)return;const{type:r,index:f}=e;let h;r==="page"?h=f:h=i.value+le[r],g(h)},y=r=>{d.value||r.code!=="Enter"||C()};return()=>{const r=`${u.value}-item`,{index:f,type:h}=e,w=d.value;let z;e.type==="prev5"||h==="next5"?z=o("span",{class:` ${r}-jumper`},[o(M,{name:J[h]},null),o(M,{class:`${r}-ellipsis`,name:"ellipsis"},null)]):V(f)?z=o(M,{name:J[h]},null):z=_(f);const $=t.item?t.item({index:f,type:h,active:s.value,disabled:w,original:z}):z;return o("li",{class:v.value,tabindex:w?-1:0,title:T.value,onClick:C,onKeydown:y},[o("span",{class:`${r}-content`},[$])])}}}),se=P({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(b);return()=>{const u=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:g,page:s}=n.pagination;return o("li",{class:u},[g,o(Q,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}}),F=P({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:i}=k(b),g=m(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(d=>({key:d,label:d}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:p}=t.pagination;return o("li",{class:s},[d,o(q,{disabled:e.disabled,dataSource:g.value,size:l.value==="lg"?"md":"sm",value:u.value,onChange:i},null),p])}}}),ie=P({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(b),i=m(()=>{const g=a.value,s=l.value,d=(g-1)*s+1,p=Math.min(g*s,e.total);return[d,p]});return()=>{const g=`${u.value}-total`,{total:s}=e,{totalPrefix:d,totalSuffix:p}=t.pagination,v=n.total?n.total({total:s,range:i.value,prefix:d,suffix:p}):`${d} ${s} ${p}`;return o("li",{class:g},[v])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(e,n){const{getColorPalette:t}=n,{colorPrimary:a,fontSizeSm:l,paddingSizeXs:u,heightSm:i,heightMd:g}=e,s=t(a);return{fontSizeSm:l,fontSizeMd:l,fontSizeLg:l,itemPaddingSm:0,itemPaddingMd:u,itemPaddingLg:u,itemContentSizeSm:i,itemContentSizeMd:i,itemContentSizeLg:g,outLineColor:s.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(e,n,t)=>K(e,t),ue=P({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=N("common"),{globalHashId:a,hashId:l,registerToken:u}=O("pagination");u(oe);const i=m(()=>`${t.prefixCls}-pagination`),g=N("locale"),s=N("pagination"),d=m(()=>{var c;return(c=e.showTotal)!=null?c:s.showTotal}),p=m(()=>{var c;return(c=e.simple)!=null?c:s.simple}),v=m(()=>{var c;return(c=e.size)!=null?c:s.size}),T=m(()=>{var c;return(c=e.showQuickJumper)!=null?c:s.showQuickJumper}),C=m(()=>{var c;return(c=e.showSizeChanger)!=null?c:s.showSizeChanger}),{activeIndex:y,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:w}=ee(e,s),z=W(y,f),$=Z(y,h,p);G(b,{props:e,slots:n,config:s,locale:g,mergedPrefixCls:i,mergedSize:v,activeIndex:y,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:w,jumpToIndex:$});const E=m(()=>{const c=i.value;return H({[a.value]:!!a.value,[l.value]:!!l.value,[c]:!0,[`${c}-disabled`]:e.disabled,[`${c}-simple`]:p.value,[`${c}-${v.value}`]:!0})});return()=>{const c=i.value,x=d.value?[o(ie,null,null)]:[];if(p.value){const S=y.value,A=f.value;x.push(o(j,{disabled:S===1,type:"prev"},null)),x.push(o("li",{class:`${c}-item`},[T.value?o(Q,{disabled:e.disabled,size:v.value==="lg"?"md":"sm",value:S.toString(),onKeydown:$},null):S,o("span",{class:`${c}-item-slash`},[_("/")]),o("span",null,[A])])),x.push(o(j,{disabled:S===A,type:"next"},null)),C.value&&x.push(o(F,null,null))}else z.value.forEach(S=>x.push(o(j,X({key:S.type+"-"+S.index},S),null))),C.value&&x.push(o(F,null,null)),T.value&&x.push(o(se,null,null));return o("ul",{class:E.value},[x])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const de=ue;export{de as I};
