import{T as L,aq as B,m as J,A as M,ae as E,ar as q,ai as R,M as N,N as U}from"./index-a1eb659d.js";import{c as m,aE as V,w as G,l as P,x as k,n as o,d as H,am as Q,B as O,p as X,ab as W}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(e,t){return m(()=>{const n=e.value,a=t.value;let l;a<=9?l=y(1,a):l=Z(n,a);const u={type:"prev",disabled:n===1},s={type:"next",disabled:n===a};return[u,...l,s]})}const y=(e,t)=>{const n=[];for(let a=e;a<=t;a++)n.push({index:a,type:"page"});return n},Z=(e,t)=>{let n=[];const a={type:"prev5"},l={type:"next5"};e<5?n=[...y(2,5),l]:e<t-3?n=[a,...y(e-2,e+2),l]:n=[a,...y(t-4,t-1)];const u=y(1,1),s=y(t,t);return[...u,...n,...s]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,t,n){return V(l=>{const u=l.target,s=Math.floor(L(u.value,e.value));t(s),n.value||(u.value="")},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function te(e,t){var d;const[n,a]=B(e,"pageIndex",1),[l,u]=B(e,"pageSize",(d=e.pageSize)!=null?d:t.pageSize),s=m(()=>Math.max(Math.ceil(e.total/l.value),1)),p=g=>{const v=ne(g,s.value);v!==n.value&&(a(v),J(e.onChange,v,l.value))},i=g=>{u(g),J(e.onChange,n.value,g)};return G([n,s],([g,v])=>{g>v&&p(v)},{immediate:!0}),{activeIndex:n,activeSize:l,lastIndex:s,changePageIndex:p,changePageSize:i}}const ne=(e,t)=>e>t?t:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},le={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}},F={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},se={next:1,prev:-1,prev5:-5,next5:5},j=P({props:le,setup(e){const{props:t,slots:n,config:a,locale:l,mergedPrefixCls:u,activeIndex:s,changePageIndex:p}=k(b),i=m(()=>s.value===e.index),d=m(()=>e.disabled||t.disabled),g=m(()=>{var c;return(c=t.showTitle)!=null?c:a.showTitle}),v=m(()=>{const c=`${u.value}-item`;return{[c]:!0,[`${c}-${e.type}`]:!0,[`${c}-active`]:i.value,[`${c}-disabled`]:d.value}}),T=m(()=>{if(!g.value)return;const{type:c,index:f}=e;return c==="page"?f:l.pagination[c]}),C=()=>{if(d.value)return;const{type:c,index:f}=e;let h;c==="page"?h=f:h=s.value+se[c],p(h)},I=c=>{d.value||c.code!=="Enter"||C()};return()=>{const c=`${u.value}-item`,{index:f,type:h}=e,w=d.value;let z;e.type==="prev5"||h==="next5"?z=o("span",{class:` ${c}-jumper`},[o(M,{name:F[h]},null),o(M,{class:`${c}-ellipsis`,name:"ellipsis"},null)]):H(f)?z=o(M,{name:F[h]},null):z=Q(f);const $=n.item?n.item({index:f,type:h,active:i.value,disabled:w,original:z}):z;return o("li",{class:v.value,tabindex:w?-1:0,title:T.value,onClick:C,onKeydown:I},[o("span",{class:`${c}-content`},[$])])}}}),ie=P({setup(){const{props:e,locale:t,mergedPrefixCls:n,mergedSize:a,jumpToIndex:l}=k(b);return()=>{const u=`${n.value}-jumper`,{disabled:s}=e,{jumpTo:p,page:i}=t.pagination;return o("li",{class:u},[p,o(E,{disabled:s,size:a.value==="lg"?"md":"sm",onKeydown:l},null),i])}}}),K=P({setup(){const{props:e,config:t,locale:n,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:s}=k(b),p=m(()=>{const{pageSizes:i=t.pageSizes}=e;return i.map(d=>({key:d,label:d}))});return()=>{const i=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:g}=n.pagination;return o("li",{class:i},[d,o(q,{disabled:e.disabled,dataSource:p.value,size:l.value==="lg"?"md":"sm",value:u.value,onChange:s},null),g])}}}),oe=P({setup(){const{props:e,slots:t,locale:n,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(b),s=m(()=>{const p=a.value,i=l.value,d=(p-1)*i+1,g=Math.min(p*i,e.total);return[d,g]});return()=>{const p=`${u.value}-total`,{total:i}=e,{totalPrefix:d,totalSuffix:g}=n.pagination,v=t.total?t.total({total:i,range:s.value,prefix:d,suffix:g}):`${d} ${i} ${g}`;return o("li",{class:p},[v])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function D(e){const{colorPrimary:t,fontSizeSm:n,fontSizeMd:a,paddingSizeXs:l,heightSm:u,heightMd:s}=e,p=R(t);return{fontSizeSm:n,fontSizeMd:n,fontSizeLg:a,itmePaddingSm:0,itemPaddingMd:l,itemPaddingLg:l,itemContentSizeSm:u,itemContentSizeMd:u,itemContentSizeLg:s,outLineColor:p.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=(e,t)=>D(e),re=P({name:"IxPagination",props:ae,setup(e,{slots:t}){const n=N("common"),{globalHashId:a,hashId:l,registerToken:u}=U("pagination");u(ue);const s=m(()=>`${n.prefixCls}-pagination`),p=N("locale"),i=N("pagination"),d=m(()=>{var r;return(r=e.showTotal)!=null?r:i.showTotal}),g=m(()=>{var r;return(r=e.simple)!=null?r:i.simple}),v=m(()=>{var r;return(r=e.size)!=null?r:i.size}),T=m(()=>{var r;return(r=e.showQuickJumper)!=null?r:i.showQuickJumper}),C=m(()=>{var r;return(r=e.showSizeChanger)!=null?r:i.showSizeChanger}),{activeIndex:I,activeSize:c,lastIndex:f,changePageIndex:h,changePageSize:w}=te(e,i),z=Y(I,f),$=ee(I,h,g);O(b,{props:e,slots:t,config:i,locale:p,mergedPrefixCls:s,mergedSize:v,activeIndex:I,activeSize:c,lastIndex:f,changePageIndex:h,changePageSize:w,jumpToIndex:$});const _=m(()=>{const r=s.value;return X({[a.value]:!!a.value,[l.value]:!!l.value,[r]:!0,[`${r}-disabled`]:e.disabled,[`${r}-simple`]:g.value,[`${r}-${v.value}`]:!0})});return()=>{const r=s.value,x=d.value?[o(oe,null,null)]:[];if(g.value){const S=I.value,A=f.value;x.push(o(j,{disabled:S===1,type:"prev"},null)),x.push(o("li",{class:`${r}-item`},[T.value?o(E,{disabled:e.disabled,size:v.value==="lg"?"md":"sm",value:S.toString(),onKeydown:$},null):S,o("span",{class:`${r}-item-slash`},[Q("/")]),o("span",null,[A])])),x.push(o(j,{disabled:S===A,type:"next"},null)),C.value&&x.push(o(K,null,null))}else z.value.forEach(S=>x.push(o(j,W({key:S.type+"-"+S.index},S),null))),C.value&&x.push(o(K,null,null)),T.value&&x.push(o(ie,null,null));return o("ul",{class:_.value},[x])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ge=re;export{ge as I};
