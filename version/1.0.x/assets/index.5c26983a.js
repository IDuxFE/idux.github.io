import{c as oe,u as J,ad as le,j as O,aw as Ae,ag as W,C as ge,ae as Ce,w as se,aa as De,v as he,au as Te,ab as Fe,\u0275 as xe}from"./index.3f21dce0.js";import{u as Be,v as _,y as m,i as L,l as Re,G as Pe,at as Ie,b as j,e as d,P as we,a3 as fe,ai as $e,w as Y,J as Ee,N as Z,z as Q,p as q,a0 as ve,ap as Se,x as Oe,au as Le,h as ze,k as Ne}from"./vendor.0e7da6ec.js";import{I as Ve}from"./index.bb89acd9.js";import{I as ke}from"./index.d8bb9495.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=Symbol("transferContext"),me=Symbol("transferListContext"),p=Symbol("TRANSFER_SOURCE_TOKEN"),ee=Symbol("TRANSFER_TARGET_TOKEN"),ae=Symbol("TRANSFER_OPERATIONS_TOKEN");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function te(e){const t={};return Object.keys(e).forEach(r=>{t[r]=Be(e[r])}),t}const _e=_({setup(){const{slots:e,props:t,mergedPrefixCls:r}=L(U),l=L(ae),{appendDisabled:s,removeDisabled:n,triggerAppend:a,triggerRemove:c}=l,g=()=>{a()},i=()=>{c()},v=(S,D,y,x)=>Re(D)?m(oe,{class:`${S}-btn`,icon:D,disabled:y,onClick:x},null):Pe(m(oe,{class:`${S}-btn`,disabled:y,onClick:x},null),[[Ie("slos"),{icon:()=>D}]]),C=S=>{if(e.operations)return e.operations(te(l));if(t.mode!=="immediate")return m("div",{class:`${S}-inner`},[v(S,"right-double",s.value,g),v(S,"left-double",n.value,i)])};return()=>{const S=`${r.value}-operations`;return m("div",{class:S},[C(S)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e){const t=J("pagination");return{sourcePagination:ue(e,t,!0),targetPagination:ue(e,t,!1)}}function ue(e,t,r){const l=j(),s=j(),n=d(()=>{const c=e.pagination;if(!c)return null;if(c===!0)return{};const g=r?0:1,i=le(c.pageIndex),v=le(c.pageSize),C=le(c.total);return{pageIndex:i==null?void 0:i[g],pageSize:v==null?void 0:v[g],disabled:e.disabled||c.disabled,total:C==null?void 0:C[g],onChange:(S,D)=>{var y;return(y=c.onChange)==null?void 0:y.call(c,r,S,D)}}});we(()=>{var g,i;const c=n.value;l.value=(g=c==null?void 0:c.pageIndex)!=null?g:1,s.value=(i=c==null?void 0:c.pageSize)!=null?i:t.pageSize});const a=c=>{l.value=c};return d(()=>{const c=n.value;if(c!==null)return{simple:!0,showTotal:!1,...c,pageIndex:l.value,pageSize:s.value,"onUpdate:pageIndex":a}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function je(e,t){return{source:d(()=>ie(e,t,!0)),target:d(()=>ie(e,t,!1))}}function ie(e,t,r){var s;const l=(s=e.searchable)!=null?s:t.searchable;return!l||fe(l)?!!l:r?l.source:l.target}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ue(e,t,r,l,s,n,a,c){const{dataSource:g,sourceData:i,targetData:v,targetKeySet:C,dataKeyMap:S,disabledKeys:D,disabledSourceKeys:y,disabledTargetKeys:x,filteredDataSource:h,filteredSourceData:b,filteredTargetData:K,paginatedDataSource:R,paginatedSourceData:P,paginatedTargetData:f,sourceSearchValue:T,setSourceSearchValue:F,targetSearchValue:$,setTargetSearchValue:z,getKey:V}=t,{sourceSelectedKeys:k,targetSelectedKeys:I,sourceSelectedKeySet:E,targetSelectedKeySet:N,sourceSelectAllStatus:o,targetSelectAllStatus:u,sourceSelectAllDisabled:A,targetSelectAllDisabled:w,handleSourceSelectChange:M,handleTargetSelectChange:X,handleSourceSelectAll:H,handleTargetSelectAll:B}=l,{triggerAppend:be,triggerRemove:Ke}=r,ce={dataSource:g,dataKeyMap:S,disabledDataSourceKeys:D,filteredDataSource:h,paginatedDataSource:R,targetKeySet:C,showSelectAll:n,triggerAppend:be,triggerRemove:Ke,getKey:V};return{sourceBindings:{data:i,filteredData:b,paginatedData:P,pagination:s.sourcePagination,disabledKeys:y,selectedKeys:k,selectedKeySet:E,selectAllDisabled:A,selectAllStatus:o,searchable:a,selectAll:H,handleSelectChange:M,searchValue:T,handleSearchChange:G=>{F(G),O(e.onSearch,!0,G)},...ce},targetBindings:{data:v,filteredData:K,paginatedData:f,pagination:s.targetPagination,disabledKeys:x,selectedKeys:I,selectedKeySet:N,selectAllDisabled:w,selectAllStatus:u,searchable:c,selectAll:B,handleSelectChange:X,searchValue:$,handleSearchChange:G=>{z(G),O(e.onSearch,!1,G)},...ce}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function He(e,t,r,l){const s=Ae(e,t),n=d(()=>u=>{var A;return(A=s.value(u))!=null?A:u.key}),a=d(()=>e.dataSource),c=d(()=>r.value.genDataKeyMap(a.value,n.value)),[g,i]=W(e,"value",()=>[]),[v,C]=W(e,"sourceSearchValue",""),[S,D]=W(e,"targetSearchValue",""),y=d(()=>new Set(g.value)),x=u=>{const A=g.value;i(u),O(e.onChange,u,A)},h=d(()=>r.value.separateDataSource(a.value,c.value,y.value,n.value)),b=d(()=>h.value.sourceData),K=d(()=>h.value.targetData),R=d(()=>r.value.genDataKeys(b.value,n.value)),P=d(()=>r.value.genDataKeys(K.value,n.value)),f=d(()=>r.value.dataFilter(a.value,v.value,(u,A)=>!e.searchFn||e.searchFn(!0,u,A))),T=d(()=>r.value.dataFilter(b.value,v.value,(u,A)=>!e.searchFn||e.searchFn(!0,u,A))),F=d(()=>r.value.dataFilter(K.value,S.value,(u,A)=>!e.searchFn||e.searchFn(!1,u,A))),$=d(()=>re(f.value,l.sourcePagination.value)),z=d(()=>re(T.value,l.sourcePagination.value)),V=d(()=>re(F.value,l.targetPagination.value)),k=(u,A)=>{let w=g.value;u.length>0&&(w=r.value.remove(u,w,n.value)),A.length>0&&(w=r.value.append(A,w,n.value)),x(w)},I=()=>{x(Array.from(N.value))},E=d(()=>r.value.genDisabledKeys(a.value,n.value)),N=d(()=>{const u=r.value.genDisabledKeys(K.value,n.value);return y.value.forEach(A=>{E.value.has(A)&&u.add(A)}),u}),o=d(()=>r.value.genDisabledKeys(b.value,n.value));return{dataSource:a,dataKeyMap:c,sourceData:b,targetData:K,sourceDataKeys:R,targetDataKeys:P,filteredDataSource:f,filteredSourceData:T,filteredTargetData:F,paginatedDataSource:$,paginatedSourceData:z,paginatedTargetData:V,targetKeys:g,targetKeySet:y,changeTargetKeys:k,clear:I,getKey:n,disabledKeys:E,disabledSourceKeys:o,disabledTargetKeys:N,sourceSearchValue:v,setSourceSearchValue:C,targetSearchValue:S,setTargetSearchValue:D}}function re(e,t){if(!t||!t.pageSize)return e;const{total:r}=t;if(r&&e.length<r)return e;const l=t.pageSize,s=(t.pageIndex-1)*l;return e.slice(s,s+l)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e){const t=new Map;$e(()=>{t.clear()});const r=(l,s)=>new Set(l.map(n=>s(n)));return{genDataKeys:r,genDataKeyMap:(l,s)=>{const n=new Map;return l.forEach(a=>{n.set(s(a),a)}),n},genDisabledKeys:(l,s)=>{const n=new Set;return l.forEach(a=>{a.disabled&&n.add(s(a))}),n},getAllSelectedKeys:(l,s,n,a,c)=>{let g;return l?(g=r(s,c),a.forEach(i=>{!n.has(i)&&g.delete(i)})):(g=new Set,a.forEach(i=>{n.has(i)&&g.add(i)})),Array.from(g)},separateDataSource:(l,s,n,a)=>{const c=l.filter(i=>!n.has(a(i))),g=[];n.forEach(i=>{var C,S;const v=(S=(C=s.get(i))!=null?C:t.get(i))!=null?S:e==null?void 0:e.find(D=>a(D)===i);v&&!t.has(i)&&t.set(i,v),g.push(v!=null?v:{key:i})});for(const i of t.keys())n.has(i)||t.delete(i);return{sourceData:c,targetData:g}},dataFilter:(l,s,n)=>s?l.filter(a=>n(a,s)):l,append:(l,s)=>{const n=new Set(s);return l.forEach(a=>{n.add(a)}),Array.from(n)},remove:(l,s)=>{const n=new Set(s);return l.forEach(a=>{n.delete(a)}),Array.from(n)}}}function qe(e){var l;const t=Ge((l=e.defaultTargetData)!=null?l:[]);return d(()=>e.dataStrategy?{...t,...e.dataStrategy}:t)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,t,r){const{dataKeyMap:l,sourceData:s,targetData:n,disabledSourceKeys:a,disabledTargetKeys:c,changeTargetKeys:g,clear:i,getKey:v}=t,{sourceSelectedKeys:C,targetSelectedKeys:S}=r,D=d(()=>e.disabled||C.value.length<=0),y=d(()=>e.disabled||S.value.length<=0),x=d(()=>e.disabled||s.value.every(f=>a.value.has(v.value(f)))),h=d(()=>e.disabled||n.value.every(f=>c.value.has(v.value(f))));return{appendDisabled:D,removeDisabled:y,appendAllDisabled:x,clearDisabled:h,triggerAppend:f=>{!f&&D.value||f&&e.disabled||g([],(f!=null?f:Array.from(C.value)).filter(T=>!a.value.has(T)))},triggerRemove:f=>{!f&&y.value||f&&e.disabled||g((f!=null?f:Array.from(S.value)).filter(T=>!c.value.has(T)),[])},triggerAppendAll:()=>{x.value||g([],Array.from(l.value.keys()).filter(f=>!a.value.has(f)))},triggerClear:()=>{h.value||(i(),O(e.onClear))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,t,r){const[l,s]=W(e,"sourceSelectedKeys",()=>[]),[n,a]=W(e,"targetSelectedKeys",()=>[]),c=d(()=>new Set(l.value)),g=d(()=>new Set(n.value)),{dataKeyMap:i,sourceData:v,targetData:C,sourceDataKeys:S,targetDataKeys:D,targetKeySet:y,disabledKeys:x,disabledSourceKeys:h,disabledTargetKeys:b,getKey:K}=t,R=d(()=>e.mode==="immediate"?i.value.size:S.value.size),P=d(()=>D.value.size),f=d(()=>{const o=e.mode==="immediate"?x.value.size:h.value.size;return R.value-o}),T=d(()=>D.value.size-b.value.size),F=d(()=>({checked:R.value>=l.value.length&&l.value.length>0,indeterminate:R.value>l.value.length&&l.value.length>0})),$=d(()=>({checked:P.value>=n.value.length&&n.value.length>0,indeterminate:P.value>n.value.length&&n.value.length>0}));let z=!1;Y(c,(o,u)=>{if(e.mode==="immediate"){if(z)return;Qe(u,o,t)}}),Y([f,i,x,y],(o,[,,,u])=>{const A=new Set(l.value),w=new Set,M=new Set,X=B=>{A.has(B)||(A.add(B),M.add(B),w.delete(B))},H=B=>{A.has(B)&&(A.delete(B),w.add(B),M.delete(B))};l.value.forEach(B=>{if(!i.value.has(B)||x.value.has(B)){H(B);return}e.mode==="default"&&y.value.has(B)&&H(B)}),e.mode==="immediate"&&(y.value.forEach(B=>{i.value.has(B)&&X(B)}),u==null||u.forEach(B=>{y.value.has(B)||H(B)})),(M.size>0||w.size>0)&&(s(Array.from(A)),z=!0,Ee(()=>{z=!1}))},{immediate:!0,flush:"post"}),Y([T,D,b],()=>{const o=new Set(n.value);n.value.forEach(u=>{(!D.value.has(u)||b.value.has(u))&&o.delete(u)}),a(Array.from(o))},{immediate:!0,flush:"post"});const V=o=>{e.disabled||s(Z(o)?o:Array.from(o))},k=o=>{e.disabled||a(Z(o)?o:Array.from(o))},I=(o=!0,u=!0)=>{if(e.disabled)return;const A=u?v.value:C.value,w=u?e.mode==="default"?h:x:b,M=u?c:g;(u?s:a)(r.value.getAllSelectedKeys(o,A,M.value,w.value,K.value)),O(e.onSelectAll,u,o)},E=d(()=>e.disabled||f.value<=0),N=d(()=>e.disabled||T.value<=0);return{sourceSelectedKeys:l,targetSelectedKeys:n,sourceSelectedKeySet:c,targetSelectedKeySet:g,handleSourceSelectChange:V,handleTargetSelectChange:k,sourceSelectAllStatus:F,targetSelectAllStatus:$,handleSourceSelectAll:o=>I(o,!0),handleTargetSelectAll:o=>I(o,!1),sourceSelectAllDisabled:E,targetSelectAllDisabled:N,setSourceSelectedKeys:s,setTargetSelectedKeys:a}}function Qe(e,t,r){const{changeTargetKeys:l}=r,s=[],n=[];for(const a of e.values())t.has(a)||n.push(a);for(const a of t.values())e.has(a)||s.push(a);l(n,s)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Xe={value:Array,sourceSelectedKeys:Array,targetSelectedKeys:Array,sourceSearchValue:String,targetSearchValue:String,clearable:{type:Boolean,default:void 0},clearIcon:String,customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},dataStrategy:Object,defaultTargetData:Array,disabled:{type:Boolean,default:!1},empty:[String,Object],getKey:[String,Function],mode:{type:String,default:"default"},pagination:{type:[Boolean,Object],default:void 0},scroll:Object,searchable:{type:[Boolean,Object],default:void 0},searchFn:Function,spin:{type:[Boolean,Object],default:void 0},showSelectAll:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:sourceSelectedKeys":[Function,Array],"onUpdate:targetSelectedKeys":[Function,Array],"onUpdate:sourceSearchValue":[Function,Array],"onUpdate:targetSearchValue":[Function,Array],onChange:[Function,Array],onSearch:[Function,Array],onSelectAll:[Function,Array],onClear:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},ne={isSource:{type:Boolean,required:!0}},Ye=ne,Ze=ne,pe=ne,ea={dataSource:Array,checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},checked:Function,customAdditional:{type:Function,default:void 0},disabled:Function,getKey:Function,labelKey:String,virtual:{type:Boolean,default:!1},scroll:Object,onCheckChange:[Function,Array],onRemove:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},aa={checked:{type:Boolean,default:!1},checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:String,value:{type:[String,Number,Symbol],required:!0},onCheckChange:[Function,Array],onRemove:[Function,Array]},ta=_({props:aa,setup(e,{slots:t}){const{mergedPrefixCls:r}=L(me),l=a=>{O(e.onCheckChange,!!a)},s=()=>{O(e.onRemove)},n=d(()=>{const a=`${r.value}-item`;return Q({[a]:!0,[`${a}-disabled`]:e.disabled})});return()=>{const a=`${r.value}-item`,c=[];if(e.checkable)c.push(m(ge,{class:`${a}-checkbox`,label:e.label,value:e.value,checked:e.checked,disabled:e.disabled,onChange:l},t));else{const g=Ce(t.default,e.label);c.push(m("label",{class:`${a}-label`},[g]))}return e.removable&&!e.disabled&&c.push(m("div",{class:`${a}-close-icon`,onClick:s},[m(se,{name:"close"},null)])),m("li",{class:n.value},[c])}}}),ye=_({name:"IxTransferList",props:ea,setup(e,{slots:t,expose:r}){const l=J("common"),s=d(()=>`${l.prefixCls}-transfer-list`),n=d(()=>{var h;return(h=e.labelKey)!=null?h:"label"}),a=j();q(me,{mergedPrefixCls:s}),r({scrollTo:h=>{var b;return(b=a.value)==null?void 0:b.scrollTo(h)}});const g=h=>{var b,K;return(K=(b=e.getKey)==null?void 0:b.call(e,h))!=null?K:h.key},i=h=>{O(e.onScroll,h)},v=()=>{O(e.onScrolledBottom)},C=(h,b,K)=>{O(e.onScrolledChange,h,b,K)},S=({item:h,index:b})=>{var T,F;const K=g(h),R=$=>{O(e.onCheckChange,h,$)},P=()=>{O(e.onRemove,h)},f=e.customAdditional?e.customAdditional({data:h,index:b}):void 0;return m(ta,ve({key:K,value:K,label:h[n.value],checked:!!((T=e.checked)!=null&&T.call(e,h)),disabled:!!((F=e.disabled)!=null&&F.call(e,h)),checkable:e.checkable,removable:e.removable,onCheckChange:R,onRemove:P},f),{default:t.label&&(()=>{var $;return($=t.label)==null?void 0:$.call(t,h)})})},D=()=>{var P;const{dataSource:h,virtual:b,scroll:K}=e,R=h!=null?h:[];if(!(R.length<=0))return b?m(De,{ref:a,dataSource:R,fullHeight:!!(K!=null&&K.fullHeight),getKey:g,height:(P=K==null?void 0:K.height)!=null?P:"100%",itemHeight:32,itemRender:S,virtual:!0,onScroll:i,onScrolledBottom:v,onScrolledChange:C},null):m("ul",{class:`${s.value}-inner`},[R.map((f,T)=>S({item:f,index:T}))])},y=d(()=>{const h=s.value;return Q({[h]:!0,[`${h}-virtual`]:!!e.virtual})}),x=d(()=>{const h=e.scroll;return h&&Se({[h.fullHeight?"height":"maxHeight"]:he(h.height)})});return()=>m("div",{class:y.value,style:x.value,onScroll:i},[D()])}}),na=_({props:Ye,setup(e){const{props:t,slots:r,mergedPrefixCls:l,sourceTransferListRef:s,targetTransferListRef:n,getKey:a}=L(U),c=e.isSource?L(p):L(ee),{paginatedDataSource:g,paginatedData:i,selectedKeySet:v,disabledDataSourceKeys:C,disabledKeys:S,handleSelectChange:D}=c,{triggerRemove:y}=L(ae),x=e.isSource?s:n,h=F=>{O(t.onScroll,e.isSource,F)},b=()=>{O(t.onScrolledBottom,e.isSource)},K=(F,$,z)=>{O(t.onScrolledChange,e.isSource,F,$,z)},R=d(()=>e.isSource&&t.mode==="immediate"?g.value:i.value),P=d(()=>e.isSource&&t.mode==="immediate"?C.value:S.value),f=F=>{if((e.isSource&&t.mode==="immediate"?g.value:i.value).length<=0)return m("div",{class:`${F}-empty-wrapper`},[m(Te,{empty:t.empty},r)]);const z=(I,E)=>{const N=a.value(I),o=new Set(v.value);E?o.add(N):o.delete(N),D(o)},V=I=>{const E=a.value(I);y([E])},k={label:r.label&&(I=>{var E;return(E=r.label)==null?void 0:E.call(r,{item:I,isSource:e.isSource})})};return m(ye,{ref:x,dataSource:R.value,getKey:a.value,checked:I=>v.value.has(a.value(I)),disabled:I=>t.disabled||P.value.has(a.value(I)),checkable:e.isSource||t.mode==="default",removable:!e.isSource&&t.mode==="immediate",virtual:t.virtual,scroll:t.scroll,onCheckChange:z,onRemove:V,onScroll:h,onScrolledChange:K,onScrolledBottom:b},k)},T=F=>r.default?r.default({...te(c),isSource:e.isSource}):f(F);return()=>{const F=`${l.value}-body`;return m("div",{class:`${l.value}-body`},[T(F)])}}}),la=_({props:pe,setup(e){const{slots:t,props:r,mergedPrefixCls:l}=L(U),s=e.isSource?L(p):L(ee),{pagination:n,filteredData:a,filteredDataSource:c}=s,g=i=>{var C,S;if(t.footer)return t.footer({...te(s),isSource:e.isSource});if(!n.value)return;const v=(S=(C=n.value)==null?void 0:C.total)!=null?S:e.isSource&&r.mode==="immediate"?c.value.length:a.value.length;return m("div",{class:`${i}-inner`},[m(ke,ve({class:`${i}-pagination`},n.value,{total:v}),null)])};return()=>{const i=`${l.value}-footer`,v=g(i);if(!(!v||Z(v)&&v.length<=0))return m("div",{class:i},[v])}}}),ra=_({props:Ze,setup(e){const{props:t,slots:r,config:l,locale:s,mergedPrefixCls:n}=L(U),a=e.isSource?L(p):L(ee),{clearDisabled:c,triggerClear:g}=L(ae),{showSelectAll:i,data:v,selectAllDisabled:C,selectAllStatus:S,searchable:D,searchValue:y,handleSearchChange:x,selectAll:h}=a,[b,K]=Fe(""),R=j(),P=()=>{var u;const o=(u=R.value)==null?void 0:u.getInputElement();o&&o.value!==y.value&&(o.value=y.value),b.value!==y.value&&K(y.value)};Oe(()=>{P()}),Y(y,()=>{P()});const f=()=>{x(b.value)},T=o=>{const u=o.target.value;K(u),u||f()},F=Le(()=>{f()},["enter"]),$=o=>{h(!!o)},z=o=>{if(!(!i.value||!e.isSource&&t.mode==="immediate"))return m(ge,{class:`${o}-check-all`,checked:S.value.checked,indeterminate:S.value.indeterminate,disabled:C.value,onChange:$},null)},V=o=>{let u;return r.headerLabel?u=r.headerLabel({data:v.value,isSource:e.isSource}):u=`${e.isSource?s.toSelect:s.selected} (${v.value.length})`,m("span",{class:`${o}-label`},[u])},k=o=>{if(!D.value)return;const u={suffix:()=>m(se,{class:`${o}-search-icon`,name:"search",onClick:f},null)};return m(xe,{ref:R,class:`${o}-search-input`,disabled:t.disabled,type:"text",size:"sm",placeholder:s.searchPlaceholder[e.isSource?0:1],onInput:T,onKeydown:F},u)},I=o=>{var A,w;if(e.isSource||!((A=t.clearable)!=null?A:l.clearable))return;const u=Q({[`${o}-clear-icon`]:!0,[`${o}-clear-icon-disabled`]:c.value});return m("span",{class:u,onClick:g},[r.clearIcon?r.clearIcon():m(se,{name:(w=t.clearIcon)!=null?w:l.clearIcon},null)])},E=o=>{var A;const u=(A=r.headerSuffix)==null?void 0:A.call(r,{isSource:e.isSource});return u&&m("span",{class:`${o}-suffix`},[u])},N=o=>r.header?r.header({...te(a),isSource:e.isSource}):m("div",{class:`${o}-inner`},[z(o),V(o),k(o),I(o),E(o)]);return()=>{const o=`${n.value}-header`,u=N(o);if(!(!u||Z(u)&&u.length<=0))return m("div",{class:o},[u])}}}),de=_({props:ne,setup(e){const{props:t,mergedPrefixCls:r}=L(U),l=d(()=>{const a=`${r.value}-content`;return Q({[a]:!0,[`${a}-${e.isSource?"source":"target"}`]:!0,[`${a}-disabled`]:t.disabled})}),s=d(()=>{var g;const a=(g=t.scroll)==null?void 0:g.width;let c;if(ze(a)?c=e.isSource?a.source:a.target:c=a,!!c)return Se({width:he(c)})}),n=d(()=>{if(!Ne(t.spin))return fe(t.spin)?{spinning:!!t.spin}:{spinning:e.isSource?t.spin.source:t.spin.target}});return()=>{const a=[m(ra,{isSource:e.isSource},null),m(na,{isSource:e.isSource},null),m(la,{isSource:e.isSource},null)];return m("div",{class:l.value,style:s.value},[n.value?m(Ve,n.value,{default:()=>[a]}):a])}}}),sa=_({name:"IxTransfer",props:Xe,setup(e,{slots:t,expose:r}){const l=J("common"),s=J("transfer"),n=J("locale").transfer,a=d(()=>`${l.prefixCls}-transfer`),c=d(()=>{var f;return(f=e.showSelectAll)!=null?f:s.showSelectAll}),{source:g,target:i}=je(e,s),v=qe(e),C=Me(e),S=He(e,s,v,C),D=We(e,S,v),y=Je(e,S,D),{sourceBindings:x,targetBindings:h}=Ue(e,S,y,D,C,c,g,i),b=j(),K=j();r({scrollTo:(f,...T)=>{var F;return(F=(f?b:K).value)==null?void 0:F.scrollTo(...T)}}),q(U,{props:e,slots:t,locale:n,config:s,mergedPrefixCls:a,sourceTransferListRef:b,targetTransferListRef:K,showSelectAll:c,getKey:S.getKey}),q(p,x),q(ee,h),q(ae,y);const P=d(()=>{var T;const f=a.value;return Q({[f]:!0,[`${f}-fit-content`]:!!((T=e.scroll)!=null&&T.height)})});return()=>m("div",{class:P.value},[m(de,{isSource:!0},null),m(_e,null,null),m(de,{isSource:!1},null)])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const da=sa,ga=ye;export{da as I,p as T,ee as a,ga as b};