import{T as L,ao as B,m as J,A as M,ad as Q,ap as R,M as N,N as U}from"./index-e89cd1aa.js";import{c as m,aD as V,w as q,l as P,x as k,p as o,d as G,am as _,B as H,n as O,ac as X}from"./vendor-cb0c1489.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function W(e,n){return m(()=>{const t=e.value,a=n.value;let l;a<=9?l=y(1,a):l=Y(t,a);const c={type:"prev",disabled:t===1},i={type:"next",disabled:t===a};return[c,...l,i]})}const y=(e,n)=>{const t=[];for(let a=e;a<=n;a++)t.push({index:a,type:"page"});return t},Y=(e,n)=>{let t=[];const a={type:"prev5"},l={type:"next5"};e<5?t=[...y(2,5),l]:e<n-3?t=[a,...y(e-2,e+2),l]:t=[a,...y(n-4,n-1)];const c=y(1,1),i=y(n,n);return[...c,...t,...i]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Z(e,n,t){return V(l=>{const c=l.target,i=Math.floor(L(c.value,e.value));n(i),t.value||(c.value="")},["enter"])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ee(e,n){var r;const[t,a]=B(e,"pageIndex",1),[l,c]=B(e,"pageSize",(r=e.pageSize)!=null?r:n.pageSize),i=m(()=>Math.max(Math.ceil(e.total/l.value),1)),g=p=>{const v=te(p,i.value);v!==t.value&&(a(v),J(e.onChange,v,l.value))},s=p=>{c(p),J(e.onChange,t.value,p)};return q([t,i],([p,v])=>{p>v&&g(v)},{immediate:!0}),{activeIndex:t,activeSize:l,lastIndex:i,changePageIndex:g,changePageSize:s}}const te=(e,n)=>e>n?n:e<1?1:e;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Symbol("paginationToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={pageIndex:Number,pageSize:Number,disabled:{type:Boolean,default:!1},pageSizes:Array,showQuickJumper:{type:Boolean,default:void 0},showSizeChanger:{type:Boolean,default:void 0},showTitle:{type:Boolean,default:void 0},showTotal:{type:Boolean,default:void 0},simple:{type:Boolean,default:void 0},size:String,total:{type:Number,default:0},"onUpdate:pageIndex":[Function,Array],"onUpdate:pageSize":[Function,Array],onChange:[Function,Array]},ae={disabled:{type:Boolean,default:void 0},index:Number,type:{type:String,required:!0}},D={prev:"left",next:"right",prev5:"double-left",next5:"double-right",page:""},le={next:1,prev:-1,prev5:-5,next5:5},j=P({props:ae,setup(e){const{props:n,slots:t,config:a,locale:l,mergedPrefixCls:c,activeIndex:i,changePageIndex:g}=k(b),s=m(()=>i.value===e.index),r=m(()=>e.disabled||n.disabled),p=m(()=>{var d;return(d=n.showTitle)!=null?d:a.showTitle}),v=m(()=>{const d=`${c.value}-item`;return{[d]:!0,[`${d}-${e.type}`]:!0,[`${d}-active`]:s.value,[`${d}-disabled`]:r.value}}),T=m(()=>{if(!p.value)return;const{type:d,index:f}=e;return d==="page"?f:l.pagination[d]}),C=()=>{if(r.value)return;const{type:d,index:f}=e;let x;d==="page"?x=f:x=i.value+le[d],g(x)},I=d=>{r.value||d.code!=="Enter"||C()};return()=>{const d=`${c.value}-item`,{index:f,type:x}=e,w=r.value;let z;e.type==="prev5"||x==="next5"?z=o("span",{class:` ${d}-jumper`},[o(M,{name:D[x]},null),o(M,{class:`${d}-ellipsis`,name:"ellipsis"},null)]):G(f)?z=o(M,{name:D[x]},null):z=_(f);const $=t.item?t.item({index:f,type:x,active:s.value,disabled:w,original:z}):z;return o("li",{class:v.value,tabindex:w?-1:0,title:T.value,onClick:C,onKeydown:I},[o("span",{class:`${d}-content`},[$])])}}}),se=P({setup(){const{props:e,locale:n,mergedPrefixCls:t,mergedSize:a,jumpToIndex:l}=k(b);return()=>{const c=`${t.value}-jumper`,{disabled:i}=e,{jumpTo:g,page:s}=n.pagination;return o("li",{class:c},[g,o(Q,{disabled:i,size:a.value==="lg"?"md":"sm",onKeydown:l},null),s])}}}),F=P({setup(){const{props:e,config:n,locale:t,mergedPrefixCls:a,mergedSize:l,activeSize:c,changePageSize:i}=k(b),g=m(()=>{const{pageSizes:s=n.pageSizes}=e;return s.map(r=>({key:r,label:r}))});return()=>{const s=`${a.value}-sizes`,{itemsPerPage:r,itemsSuffix:p}=t.pagination;return o("li",{class:s},[r,o(R,{disabled:e.disabled,dataSource:g.value,size:l.value==="lg"?"md":"sm",value:c.value,onChange:i},null),p])}}}),ie=P({setup(){const{props:e,slots:n,locale:t,activeIndex:a,activeSize:l,mergedPrefixCls:c}=k(b),i=m(()=>{const g=a.value,s=l.value,r=(g-1)*s+1,p=Math.min(g*s,e.total);return[r,p]});return()=>{const g=`${c.value}-total`,{total:s}=e,{totalPrefix:r,totalSuffix:p}=t.pagination,v=n.total?n.total({total:s,range:i.value,prefix:r,suffix:p}):`${r} ${s} ${p}`;return o("li",{class:g},[v])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(e,n){const{getColorPalette:t}=n,{colorPrimary:a,fontSizeSm:l,fontSizeMd:c,paddingSizeXs:i,heightSm:g,heightMd:s}=e,r=t(a);return{fontSizeSm:l,fontSizeMd:l,fontSizeLg:c,itmePaddingSm:0,itemPaddingMd:i,itemPaddingLg:i,itemContentSizeSm:g,itemContentSizeMd:g,itemContentSizeLg:s,outLineColor:r.l10}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=(e,n,t)=>K(e,t),ue=P({name:"IxPagination",props:ne,setup(e,{slots:n}){const t=N("common"),{globalHashId:a,hashId:l,registerToken:c}=U("pagination");c(oe);const i=m(()=>`${t.prefixCls}-pagination`),g=N("locale"),s=N("pagination"),r=m(()=>{var u;return(u=e.showTotal)!=null?u:s.showTotal}),p=m(()=>{var u;return(u=e.simple)!=null?u:s.simple}),v=m(()=>{var u;return(u=e.size)!=null?u:s.size}),T=m(()=>{var u;return(u=e.showQuickJumper)!=null?u:s.showQuickJumper}),C=m(()=>{var u;return(u=e.showSizeChanger)!=null?u:s.showSizeChanger}),{activeIndex:I,activeSize:d,lastIndex:f,changePageIndex:x,changePageSize:w}=ee(e,s),z=W(I,f),$=Z(I,x,p);H(b,{props:e,slots:n,config:s,locale:g,mergedPrefixCls:i,mergedSize:v,activeIndex:I,activeSize:d,lastIndex:f,changePageIndex:x,changePageSize:w,jumpToIndex:$});const E=m(()=>{const u=i.value;return O({[a.value]:!!a.value,[l.value]:!!l.value,[u]:!0,[`${u}-disabled`]:e.disabled,[`${u}-simple`]:p.value,[`${u}-${v.value}`]:!0})});return()=>{const u=i.value,h=r.value?[o(ie,null,null)]:[];if(p.value){const S=I.value,A=f.value;h.push(o(j,{disabled:S===1,type:"prev"},null)),h.push(o("li",{class:`${u}-item`},[T.value?o(Q,{disabled:e.disabled,size:v.value==="lg"?"md":"sm",value:S.toString(),onKeydown:$},null):S,o("span",{class:`${u}-item-slash`},[_("/")]),o("span",null,[A])])),h.push(o(j,{disabled:S===A,type:"next"},null)),C.value&&h.push(o(F,null,null))}else z.value.forEach(S=>h.push(o(j,X({key:S.type+"-"+S.index},S),null))),C.value&&h.push(o(F,null,null)),T.value&&h.push(o(se,null,null));return o("ul",{class:E.value},[h])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const de=ue;export{de as I};
