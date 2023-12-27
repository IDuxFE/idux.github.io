import{T as L,ao as B,m as J,A as M,ad as Q,ap as R,M as N,N as U}from"./index-6cd2cabb.js";import{c as m,aD as V,w as q,l as P,x as k,p as o,d as G,an as _,B as H,n as O,ad as X}from"./vendor-4146ff73.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function W(e,n){return m(()=>{const t=e.value,a=n.value;let l;a<=9?l=y(1,a):l=Y(t,a);const u={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[u,...l,i]})}const y=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...y(2,5),l]:e<n-3?t=[a,...y(e-2,e+2),l]:t=[a,...y(n-4,n-1)];const u=y(1,1),i=y(n,n);return[...u,...t,...i]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Z(e,n,t){return V(l=>{const u=l.target,i=Math.floor(L(u.value,e.value));n(i),t.value||(u.value="")},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,n){var d;const[t,a]=B(e,"pageIndex",1),[l,u]=B(e,"pageSize",(d=e.pageSize)!=null?d:n.pageSize),i=m(()=>Math.max(Math.ceil(e.total/l.value),1)),g=p=>{const v=te(p,i.value);v!==t.value&&(a(v),J(e.onChange,v,l.value))},s=p=>{u(p),J(e.onChange,t.value,p)};return q([t,i],([p,v])=>{p>v&&g(v)},{immediate:!0}),{activeIndex:t,activeSize:l,lastIndex:i,changePageIndex:g,changePageSize:s}}const te=(e,n)=>e>n?n:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}},D={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},j=P({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:u,activeIndex:i,changePageIndex:g}=k(b),s=m(()=>i.value===e.index),d=m(()=>e.disabled||n.disabled),p=m(()=>{var r;return(r=n.showTitle)!=null?r:a.showTitle}),v=m(()=>{const r=`${u.value}-item`;return{[r]:!0,[`${r}-${e.type}`]:!0,[`${r}-active`]:s.value,[`${r}-disabled`]:d.value}}),T=m(()=>{if(!p.value)return;const{type:r,index:f}=e;return r==="page"?f:l.pagination[r]}),C=()=>{if(d.value)return;const{type:r,index:f}=e;let x;r==="page"?x=f:x=i.value+le[r],g(x)},I=r=>{d.value||r.code!=="Enter"||C()};return()=>{const r=`${u.value}-item`,{index:f,type:x}=e,w=d.value;let z;e.type==="prev5"||x==="next5"?z=o("span",{class:` ${r}-jumper`},[o(M,{name:D[x]},null),o(M,{class:`${r}-ellipsis`,name:"ellipsis"},null)]):G(f)?z=o(M,{name:D[x]},null):z=_(f);const $=t.item?t.item({index:f,type:x,active:s.value,disabled:w,original:z}):z;return o("li",{class:v.value,tabindex:w?-1:0,title:T.value,onClick:C,onKeydown:I},[o("span",{class:`${r}-content`},[$])])}}}),se=P({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(b);return()=>{const u=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:g,page:s}=n.pagination;return o("li",{class:u},[g,o(Q,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}}),F=P({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:i}=k(b),g=m(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(d=>({key:d,label:d}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:p}=t.pagination;return o("li",{class:s},[d,o(R,{disabled:e.disabled,dataSource:g.value,size:l.value==="lg"?"md":"sm",value:u.value,onChange:i},null),p])}}}),ie=P({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(b),i=m(()=>{const g=a.value,s=l.value,d=(g-1)*s+1,p=Math.min(g*s,e.total);return[d,p]});return()=>{const g=`${u.value}-total`,{total:s}=e,{totalPrefix:d,totalSuffix:p}=t.pagination,v=n.total?n.total({total:s,range:i.value,prefix:d,suffix:p}):`${d} ${s} ${p}`;return o("li",{class:g},[v])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(e,n){const{getColorPalette:t}=n,{colorPrimary:a,fontSizeSm:l,paddingSizeXs:u,heightSm:i,heightMd:g}=e,s=t(a);return{fontSizeSm:l,fontSizeMd:l,fontSizeLg:l,itemPaddingSm:0,itemPaddingMd:u,itemPaddingLg:u,itemContentSizeSm:i,itemContentSizeMd:i,itemContentSizeLg:g,outLineColor:s.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(e,n,t)=>K(e,t),ue=P({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=N("common"),{globalHashId:a,hashId:l,registerToken:u}=U("pagination");u(oe);const i=m(()=>`${t.prefixCls}-pagination`),g=N("locale"),s=N("pagination"),d=m(()=>{var c;return(c=e.showTotal)!=null?c:s.showTotal}),p=m(()=>{var c;return(c=e.simple)!=null?c:s.simple}),v=m(()=>{var c;return(c=e.size)!=null?c:s.size}),T=m(()=>{var c;return(c=e.showQuickJumper)!=null?c:s.showQuickJumper}),C=m(()=>{var c;return(c=e.showSizeChanger)!=null?c:s.showSizeChanger}),{activeIndex:I,activeSize:r,lastIndex:f,changePageIndex:x,changePageSize:w}=ee(e,s),z=W(I,f),$=Z(I,x,p);H(b,{props:e,slots:n,config:s,locale:g,mergedPrefixCls:i,mergedSize:v,activeIndex:I,activeSize:r,lastIndex:f,changePageIndex:x,changePageSize:w,jumpToIndex:$});const E=m(()=>{const c=i.value;return O({[a.value]:!!a.value,[l.value]:!!l.value,[c]:!0,[`${c}-disabled`]:e.disabled,[`${c}-simple`]:p.value,[`${c}-${v.value}`]:!0})});return()=>{const c=i.value,h=d.value?[o(ie,null,null)]:[];if(p.value){const S=I.value,A=f.value;h.push(o(j,{disabled:S===1,type:"prev"},null)),h.push(o("li",{class:`${c}-item`},[T.value?o(Q,{disabled:e.disabled,size:v.value==="lg"?"md":"sm",value:S.toString(),onKeydown:$},null):S,o("span",{class:`${c}-item-slash`},[_("/")]),o("span",null,[A])])),h.push(o(j,{disabled:S===A,type:"next"},null)),C.value&&h.push(o(F,null,null))}else z.value.forEach(S=>h.push(o(j,X({key:S.type+"-"+S.index},S),null))),C.value&&h.push(o(F,null,null)),T.value&&h.push(o(se,null,null));return o("ul",{class:E.value},[h])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const de=ue;export{de as I};
