import{c as v,bf as L,au as R,bg as B,x as U,R as J,d as C,i as k,f as o,$ as M,aM as V,h as Q,aW as _,bh as q,as as j,at as G,a4 as H,an as O,af as W}from"./index-8aa71336.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n){return v(()=>{const t=e.value,a=n.value;let l;a<=9?l=I(1,a):l=Y(t,a);const u={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[u,...l,i]})}const I=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...I(2,5),l]:e<n-3?t=[a,...I(e-2,e+2),l]:t=[a,...I(n-4,n-1)];const u=I(1,1),i=I(n,n);return[...u,...t,...i]};/**
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
 */const P=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},N=C({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:u,activeIndex:i,changePageIndex:p}=k(P),s=v(()=>i.value===e.index),d=v(()=>e.disabled||n.disabled),g=v(()=>{var r;return(r=n.showTitle)!=null?r:a.showTitle}),m=v(()=>{const r=`${u.value}-item`;return{[r]:!0,[`${r}-${e.type}`]:!0,[`${r}-active`]:s.value,[`${r}-disabled`]:d.value}}),T=v(()=>{if(!g.value)return;const{type:r,index:f}=e;return r==="page"?f:l.pagination[r]}),b=()=>{if(d.value)return;const{type:r,index:f}=e;let h;r==="page"?h=f:h=i.value+le[r],p(h)},y=r=>{d.value||r.code!=="Enter"||b()};return()=>{const r=`${u.value}-item`,{index:f,type:h}=e,$=d.value;let z;e.type==="prev5"||h==="next5"?z=o("span",{class:` ${r}-jumper`},[o(M,{name:F[h]},null),o(M,{class:`${r}-ellipsis`,name:"ellipsis"},null)]):V(f)?z=o(M,{name:F[h]},null):z=Q(f);const w=t.item?t.item({index:f,type:h,active:s.value,disabled:$,original:z}):z;return o("li",{class:m.value,tabindex:$?-1:0,title:T.value,onClick:b,onKeydown:y},[o("span",{class:`${r}-content`},[w])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=C({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(P);return()=>{const u=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:p,page:s}=n.pagination;return o("li",{class:u},[p,o(_,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=C({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:u,changePageSize:i}=k(P),p=v(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(d=>({key:d,label:d}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:d,itemsSuffix:g}=t.pagination;return o("li",{class:s},[d,o(q,{disabled:e.disabled,dataSource:p.value,size:l.value==="lg"?"md":"sm",value:u.value,onChange:i},null),g])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=C({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:u}=k(P),i=v(()=>{const p=a.value,s=l.value,d=(p-1)*s+1,g=Math.min(p*s,e.total);return[d,g]});return()=>{const p=`${u.value}-total`,{total:s}=e,{totalPrefix:d,totalSuffix:g}=t.pagination,m=n.total?n.total({total:s,range:i.value,prefix:d,suffix:g}):`${d} ${s} ${g}`;return o("li",{class:p},[m])}}});/**
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
 */const ue=C({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=j("common"),{globalHashId:a,hashId:l,registerToken:u}=G("pagination");u(oe);const i=v(()=>`${t.prefixCls}-pagination`),p=j("locale"),s=j("pagination"),d=v(()=>{var c;return(c=e.showTotal)!=null?c:s.showTotal}),g=v(()=>{var c;return(c=e.simple)!=null?c:s.simple}),m=v(()=>{var c;return(c=e.size)!=null?c:s.size}),T=v(()=>{var c;return(c=e.showQuickJumper)!=null?c:s.showQuickJumper}),b=v(()=>{var c;return(c=e.showSizeChanger)!=null?c:s.showSizeChanger}),{activeIndex:y,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:$}=ee(e,s),z=X(y,f),w=Z(y,h,g);H(P,{props:e,slots:n,config:s,locale:p,mergedPrefixCls:i,mergedSize:m,activeIndex:y,activeSize:r,lastIndex:f,changePageIndex:h,changePageSize:$,jumpToIndex:w});const E=v(()=>{const c=i.value;return O({[a.value]:!!a.value,[l.value]:!!l.value,[c]:!0,[`${c}-disabled`]:e.disabled,[`${c}-simple`]:g.value,[`${c}-${m.value}`]:!0})});return()=>{const c=i.value,x=d.value?[o(ie,null,null)]:[];if(g.value){const S=y.value,A=f.value;x.push(o(N,{disabled:S===1,type:"prev"},null)),x.push(o("li",{class:`${c}-item`},[T.value?o(_,{disabled:e.disabled,size:m.value==="lg"?"md":"sm",value:S.toString(),onKeydown:w},null):S,o("span",{class:`${c}-item-slash`},[Q("/")]),o("span",null,[A])])),x.push(o(N,{disabled:S===A,type:"next"},null)),b.value&&x.push(o(K,null,null))}else z.value.forEach(S=>x.push(o(N,W({key:S.type+"-"+S.index},S),null))),b.value&&x.push(o(K,null,null)),T.value&&x.push(o(se,null,null));return o("ul",{class:E.value},[x])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re=ue;export{re as I};
