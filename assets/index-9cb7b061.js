import{c as v,bf as L,au as R,bg as B,x as U,R as J,d as P,i as k,f as o,$ as M,aN as V,h as Q,aW as _,bh as q,as as N,at as G,a5 as H,af as O,an as W}from"./index-639d4621.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n){return v(()=>{const t=e.value,a=n.value;let l;a<=9?l=b(1,a):l=Y(t,a);const u={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[u,...l,i]})}const b=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...b(2,5),l]:e<n-3?t=[a,...b(e-2,e+2),l]:t=[a,...b(n-4,n-1)];const u=b(1,1),i=b(n,n);return[...u,...t,...i]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Z(e,n,t){return L(l=>{const u=l.target,i=Math.floor(R(u.value,e.value));n(i),u.value=t.value?`${e.value}`:""},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,n){var d;const[t,a]=B(e,"pageIndex",1),[l,u]=B(e,"pageSize",(d=e.pageSize)!=null?d:n.pageSize),i=v(()=>Math.max(Math.ceil(e.total/l.value),1)),p=g=>{const m=te(g,i.value);m!==t.value&&(a(m),J(e.onChange,m,l.value))},s=g=>{u(g),J(e.onChange,t.value,g)};return U([t,i],([g,m])=>{g>m&&p(m)},{immediate:!0}),{activeIndex:t,activeSize:l,lastIndex:i,changePageIndex:p,changePageSize:s}}const te=(e,n)=>e>n?n:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},j=P({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:u,activeIndex:i,changePageIndex:p}=k(T),s=v(()=>i.value===e.index),d=v(()=>e.disabled||n.disabled),g=v(()=>{var c;return(c=n.showTitle)!=null?c:a.showTitle}),m=v(()=>{const c=`${u.value}-item`;return{[c]:!0,[`${c}-${e.type}`]:!0,[`${c}-active`]:s.value,[`${c}-disabled`]:d.value}}),$=v(()=>{if(!g.value)return;const{type:c,index:h}=e;return c==="page"?h:l.pagination[c]}),I=()=>{if(d.value)return;const{type:c,index:h}=e;let f;c==="page"?f=h:f=i.value+le[c],p(f)},z=c=>{d.value||c.code!=="Enter"||I()};return()=>{const c=`${u.value}-item`,{index:h,type:f}=e,C=d.value;let y;e.type==="prev5"||f==="next5"?y=o("span",{class:` ${c}-jumper`},[o(M,{name:K[f]},null),o(M,{class:`${c}-ellipsis`,name:"ellipsis"},null)]):V(h)?y=o(M,{name:K[f],role:"button","aria-label":f==="prev"?"paging-prev":"paging-next"},null):y=Q(h);const w=t.item?t.item({index:h,type:f,active:s.value,disabled:C,original:y}):y;return o("li",{class:m.value,tabindex:C?-1:0,title:$.value,onClick:I,onKeydown:z,role:"gridcell","aria-selected":s.value?"true":void 0,"aria-disabled":C?"true":void 0},[o("span",{class:`${c}-content`},[w])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=P({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(T);return()=>{const u=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:p,page:s}=n.pagination;return o("li",{class:u},[p,o(_,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=P({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:i}=k(T),p=v(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(d=>({key:d,label:d}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:g}=t.pagination;return o("li",{class:s},[d,o(q,{disabled:e.disabled,dataSource:p.value,getKey:"key",size:l.value==="lg"?"md":"sm",value:u.value,onChange:i},null),g])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=P({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(T),i=v(()=>{const p=a.value,s=l.value,d=(p-1)*s+1,g=Math.min(p*s,e.total);return[d,g]});return()=>{const p=`${u.value}-total`,{total:s}=e,{totalPrefix:d,totalSuffix:g}=t.pagination,m=n.total?n.total({total:s,range:i.value,prefix:d,suffix:g}):`${d} ${s} ${g}`;return o("li",{class:p},[m])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function D(e,n){const{getColorPalette:t}=n,{colorPrimary:a,fontSizeSm:l,paddingSizeXs:u,heightSm:i,heightMd:p}=e,s=t(a);return{fontSizeSm:l,fontSizeMd:l,fontSizeLg:l,itemPaddingSm:0,itemPaddingMd:u,itemPaddingLg:u,itemContentSizeSm:i,itemContentSizeMd:i,itemContentSizeLg:p,outLineColor:s.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(e,n,t)=>D(e,t);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=P({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=N("common"),{globalHashId:a,hashId:l,registerToken:u}=G("pagination");u(oe);const i=v(()=>`${t.prefixCls}-pagination`),p=N("locale"),s=N("pagination"),d=v(()=>{var r;return(r=e.showTotal)!=null?r:s.showTotal}),g=v(()=>{var r;return(r=e.simple)!=null?r:s.simple}),m=v(()=>{var r;return(r=e.size)!=null?r:s.size}),$=v(()=>{var r;return(r=e.showQuickJumper)!=null?r:s.showQuickJumper}),I=v(()=>{var r;return(r=e.showSizeChanger)!=null?r:s.showSizeChanger}),{activeIndex:z,activeSize:c,lastIndex:h,changePageIndex:f,changePageSize:C}=ee(e,s),y=X(z,h),w=Z(z,f,g);H(T,{props:e,slots:n,config:s,locale:p,mergedPrefixCls:i,mergedSize:m,activeIndex:z,activeSize:c,lastIndex:h,changePageIndex:f,changePageSize:C,jumpToIndex:w});const E=v(()=>{const r=i.value;return W({[a.value]:!!a.value,[l.value]:!!l.value,[r]:!0,[`${r}-disabled`]:e.disabled,[`${r}-simple`]:g.value,[`${r}-${m.value}`]:!0})});return()=>{const r=i.value,x=d.value?[o(ie,null,null)]:[];if(g.value){const S=z.value,A=h.value;x.push(o(j,{disabled:S===1,type:"prev"},null)),x.push(o("li",{class:`${r}-item`},[$.value?o(_,{disabled:e.disabled,size:m.value==="lg"?"md":"sm",value:S.toString(),onKeydown:w},null):S,o("span",{class:`${r}-item-slash`},[Q("/")]),o("span",null,[A])])),x.push(o(j,{disabled:S===A,type:"next"},null)),I.value&&x.push(o(F,null,null))}else y.value.forEach(S=>x.push(o(j,O({key:S.type+"-"+S.index},S),null))),I.value&&x.push(o(F,null,null)),$.value&&x.push(o(se,null,null));return o("ul",{class:E.value},[x])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ce=ue;export{ce as I};
