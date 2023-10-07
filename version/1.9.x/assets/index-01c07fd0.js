import{c as oe,L as Q,N as le,m as L,as as Fe,am as J,j as fe,O as xe,A as re,aG as ve,H as Be,ar as Ie,K as Re,aO as ue,ac as we,aB as $e}from"./index-22ebbaf3.js";import{u as Ee,x as H,l as N,z as S,f as Se,H as Oe,av as Le,r as M,c as h,Q as Ne,an as me,a8 as ze,w as Y,G as Ve,P as se,A as W,q,D as ye,a3 as be,y as ke,ay as _e,b as He,d as Me}from"./vendor-a14e3fe7.js";import{I as je}from"./index-841c4683.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=Symbol("transferContext"),Ke=Symbol("transferListContext"),Z=Symbol("TRANSFER_SOURCE_TOKEN"),p=Symbol("TRANSFER_TARGET_TOKEN"),ee=Symbol("TRANSFER_OPERATIONS_TOKEN");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function te(e){const t={};return Object.keys(e).forEach(n=>{t[n]=Ee(e[n])}),t}const Ue=H({setup(){const{slots:e,props:t,mergedPrefixCls:n}=N(j),s=N(ee),{appendDisabled:c,removeDisabled:l,triggerAppend:a,triggerRemove:o}=s,g=()=>{a()},u=()=>{o()},f=(v,P,A,D)=>Se(P)?S(oe,{class:`${v}-btn`,icon:P,disabled:A,onClick:D},null):Oe(S(oe,{class:`${v}-btn`,disabled:A,onClick:D},null),[[Le("slos"),{icon:()=>P}]]),K=v=>{if(e.operations)return e.operations(te(s));if(t.mode!=="immediate")return S("div",{class:`${v}-inner`},[f(v,"double-right",c.value,g),f(v,"double-left",l.value,u)])};return()=>{const v=`${n.value}-operations`;return S("div",{class:v},[K(v)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e){const t=Q("pagination");return{sourcePagination:ie(e,t,!0),targetPagination:ie(e,t,!1)}}function ie(e,t,n){const s=M(),c=M(),l=h(()=>{const o=e.pagination;if(!o)return null;if(o===!0)return{};const g=n?0:1,u=le(o.pageIndex),f=le(o.pageSize),K=le(o.total);return{pageIndex:u==null?void 0:u[g],pageSize:f==null?void 0:f[g],disabled:e.disabled||o.disabled,total:K==null?void 0:K[g],onChange:(v,P)=>{var A;return(A=o.onChange)==null?void 0:A.call(o,n,v,P)}}});Ne(()=>{var g,u;const o=l.value;s.value=(g=o==null?void 0:o.pageIndex)!=null?g:1,c.value=(u=o==null?void 0:o.pageSize)!=null?u:t.pageSize});const a=o=>{s.value=o};return h(()=>{const o=l.value;if(o!==null)return{simple:!0,showTotal:!1,showQuickJumper:!0,...o,pageIndex:s.value,pageSize:c.value,"onUpdate:pageIndex":a}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function qe(e,t){return{source:h(()=>de(e,t,!0)),target:h(()=>de(e,t,!1))}}function de(e,t,n){var l;const s=t.searchPlaceholder[n?0:1],c=Se(e.searchPlaceholder)?e.searchPlaceholder:(l=e.searchPlaceholder)==null?void 0:l[n?0:1];return c!=null?c:s}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Qe(e,t){return{source:h(()=>he(e,t,!0)),target:h(()=>he(e,t,!1))}}function he(e,t,n){var c;const s=(c=e.searchable)!=null?c:t.searchable;return!s||me(s)?!!s:n?s.source:s.target}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,t,n,s,c,l,a,o,g,u){const{dataSource:f,sourceData:K,targetData:v,targetKeySet:P,dataKeyMap:A,disabledKeys:D,disabledSourceKeys:i,disabledTargetKeys:T,filteredDataSource:C,filteredSourceData:F,filteredTargetData:I,paginatedDataSource:m,paginatedSourceData:x,paginatedTargetData:b,sourceSearchValue:w,setSourceSearchValue:E,targetSearchValue:k,setTargetSearchValue:_,getKey:$}=t,{sourceSelectedKeys:O,targetSelectedKeys:V,sourceSelectedKeySet:y,targetSelectedKeySet:r,sourceSelectAllStatus:d,targetSelectAllStatus:R,sourceSelectAllDisabled:z,targetSelectAllDisabled:X,handleSourceSelectChange:U,handleTargetSelectChange:B,handleSourceSelectAll:Ce,handleTargetSelectAll:De}=s,{triggerAppend:Te,triggerRemove:Pe}=n,ce={dataSource:f,dataKeyMap:A,disabledDataSourceKeys:D,filteredDataSource:C,paginatedDataSource:m,targetKeySet:P,showSelectAll:l,triggerAppend:Te,triggerRemove:Pe,getKey:$};return{sourceBindings:{data:K,filteredData:F,paginatedData:x,pagination:c.sourcePagination,disabledKeys:i,selectedKeys:O,selectedKeySet:y,selectAllDisabled:z,selectAllStatus:d,searchable:a,searchPlaceholder:o,selectAll:Ce,handleSelectChange:U,searchValue:w,handleSearchChange:G=>{E(G),L(e.onSearch,!0,G)},...ce},targetBindings:{data:v,filteredData:I,paginatedData:b,pagination:c.targetPagination,disabledKeys:T,selectedKeys:V,selectedKeySet:r,selectAllDisabled:X,selectAllStatus:R,searchable:g,searchPlaceholder:u,selectAll:De,handleSelectChange:B,searchValue:k,handleSearchChange:G=>{_(G),L(e.onSearch,!1,G)},...ce}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,t,n,s){const c=Fe(e,t),l=h(()=>r=>{var d;return(d=c.value(r))!=null?d:r.key}),a=h(()=>e.dataSource),o=h(()=>n.value.genDataKeyMap(a.value,l.value)),[g,u]=J(e,"value",()=>[]),[f,K]=J(e,"sourceSearchValue",""),[v,P]=J(e,"targetSearchValue",""),A=h(()=>new Set(g.value)),D=r=>{const d=g.value;u(r),L(e.onChange,r,d)},i=h(()=>n.value.separateDataSource(a.value,o.value,A.value,l.value)),T=h(()=>i.value.sourceData),C=h(()=>i.value.targetData),F=h(()=>n.value.genDataKeys(T.value,l.value)),I=h(()=>n.value.genDataKeys(C.value,l.value)),m=h(()=>n.value.dataFilter(a.value,f.value,(r,d)=>!e.searchFn||e.searchFn(!0,r,d))),x=h(()=>n.value.dataFilter(T.value,f.value,(r,d)=>!e.searchFn||e.searchFn(!0,r,d))),b=h(()=>n.value.dataFilter(C.value,v.value,(r,d)=>!e.searchFn||e.searchFn(!1,r,d))),w=h(()=>ne(m.value,s.sourcePagination.value)),E=h(()=>ne(x.value,s.sourcePagination.value)),k=h(()=>ne(b.value,s.targetPagination.value)),_=(r,d)=>{let R=g.value;r.length>0&&(R=n.value.remove(r,R,l.value)),d.length>0&&(R=n.value.append(d,R,l.value)),D(R)},$=()=>{D(Array.from(V.value))},O=h(()=>n.value.genDisabledKeys(a.value,l.value)),V=h(()=>{const r=n.value.genDisabledKeys(C.value,l.value);return A.value.forEach(d=>{O.value.has(d)&&r.add(d)}),r}),y=h(()=>n.value.genDisabledKeys(T.value,l.value));return{dataSource:a,dataKeyMap:o,sourceData:T,targetData:C,sourceDataKeys:F,targetDataKeys:I,filteredDataSource:m,filteredSourceData:x,filteredTargetData:b,paginatedDataSource:w,paginatedSourceData:E,paginatedTargetData:k,targetKeys:g,targetKeySet:A,changeTargetKeys:_,clear:$,getKey:l,disabledKeys:O,disabledSourceKeys:y,disabledTargetKeys:V,sourceSearchValue:f,setSourceSearchValue:K,targetSearchValue:v,setTargetSearchValue:P}}function ne(e,t){if(!t||!t.pageSize)return e;const{total:n}=t;if(n&&e.length<n)return e;const s=t.pageSize,c=(t.pageIndex-1)*s;return e.slice(c,c+s)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Xe(e){const t=new Map;ze(()=>{t.clear()});const n=(s,c)=>new Set(s.map(l=>c(l)));return{genDataKeys:n,genDataKeyMap:(s,c)=>{const l=new Map;return s.forEach(a=>{l.set(c(a),a)}),l},genDisabledKeys:(s,c)=>{const l=new Set;return s.forEach(a=>{a.disabled&&l.add(c(a))}),l},getAllSelectedKeys:(s,c,l,a,o)=>{let g;return s?(g=n(c,o),a.forEach(u=>{!l.has(u)&&g.delete(u)})):(g=new Set,a.forEach(u=>{l.has(u)&&g.add(u)})),Array.from(g)},separateDataSource:(s,c,l,a)=>{const o=s.filter(u=>!l.has(a(u))),g=[];l.forEach(u=>{var K,v;const f=(v=(K=c.get(u))!=null?K:t.get(u))!=null?v:e==null?void 0:e.find(P=>a(P)===u);f&&!t.has(u)&&t.set(u,f),g.push(f!=null?f:{key:u})});for(const u of t.keys())l.has(u)||t.delete(u);return{sourceData:o,targetData:g}},dataFilter:(s,c,l)=>c?s.filter(a=>l(a,c)):s,append:(s,c)=>{const l=new Set(c);return s.forEach(a=>{l.add(a)}),Array.from(l)},remove:(s,c)=>{const l=new Set(c);return s.forEach(a=>{l.delete(a)}),Array.from(l)}}}function Ye(e){var s;const t=Xe((s=e.defaultTargetData)!=null?s:[]);return h(()=>e.dataStrategy?{...t,...e.dataStrategy}:t)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,t,n){const{dataKeyMap:s,sourceData:c,targetData:l,disabledSourceKeys:a,disabledTargetKeys:o,changeTargetKeys:g,clear:u,getKey:f}=t,{sourceSelectedKeys:K,targetSelectedKeys:v}=n,P=h(()=>e.disabled||K.value.length<=0),A=h(()=>e.disabled||v.value.length<=0),D=h(()=>e.disabled||c.value.every(m=>a.value.has(f.value(m)))),i=h(()=>e.disabled||l.value.every(m=>o.value.has(f.value(m))));return{appendDisabled:P,removeDisabled:A,appendAllDisabled:D,clearDisabled:i,triggerAppend:m=>{!m&&P.value||m&&e.disabled||g([],(m!=null?m:Array.from(K.value)).filter(x=>!a.value.has(x)))},triggerRemove:m=>{!m&&A.value||m&&e.disabled||g((m!=null?m:Array.from(v.value)).filter(x=>!o.value.has(x)),[])},triggerAppendAll:()=>{D.value||g([],Array.from(s.value.keys()).filter(m=>!a.value.has(m)))},triggerClear:()=>{i.value||(u(),L(e.onClear))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function pe(e,t,n){const[s,c]=J(e,"sourceSelectedKeys",()=>[]),[l,a]=J(e,"targetSelectedKeys",()=>[]),o=h(()=>new Set(s.value)),g=h(()=>new Set(l.value)),{dataKeyMap:u,dataSource:f,sourceData:K,targetData:v,sourceDataKeys:P,targetDataKeys:A,targetKeySet:D,disabledKeys:i,disabledSourceKeys:T,disabledTargetKeys:C,getKey:F}=t,I=h(()=>{const y=e.mode==="immediate"?u.value.size:P.value.size,r=e.mode==="immediate"?i.value.size:T.value.size;return y-r}),m=h(()=>A.value.size-C.value.size),x=y=>{const r=n.value.getAllSelectedKeys(!0,y?e.mode==="immediate"?f.value:K.value:v.value,new Set,new Set,F.value),d=(y?s:l).value.length,R=y?o.value:g.value;return{checked:d>0,indeterminate:(r.length!==d||r.some(z=>!R.has(z)))&&d>0}},b=h(()=>x(!0)),w=h(()=>x(!1));let E=!1;Y(o,(y,r)=>{if(e.mode==="immediate"){if(E)return;et(r,y,t)}}),Y([I,u,i,D],(y,[,,,r])=>{const d=new Set(s.value),R=new Set,z=new Set,X=B=>{d.has(B)||(d.add(B),z.add(B),R.delete(B))},U=B=>{d.has(B)&&(d.delete(B),R.add(B),z.delete(B))};s.value.forEach(B=>{if(!u.value.has(B)||i.value.has(B)){U(B);return}e.mode==="default"&&D.value.has(B)&&U(B)}),e.mode==="immediate"&&(D.value.forEach(B=>{u.value.has(B)&&X(B)}),r==null||r.forEach(B=>{D.value.has(B)||U(B)})),(z.size>0||R.size>0)&&(c(Array.from(d)),E=!0,Ve(()=>{E=!1}))},{immediate:!0,flush:"post"}),Y([m,A,C],()=>{const y=new Set(l.value);l.value.forEach(r=>{(!A.value.has(r)||C.value.has(r))&&y.delete(r)}),a(Array.from(y))},{immediate:!0,flush:"post"});const k=y=>{e.disabled||c(se(y)?y:Array.from(y))},_=y=>{e.disabled||a(se(y)?y:Array.from(y))},$=(y=!0,r=!0)=>{if(e.disabled)return;const d=r?e.mode==="default"?K.value:f.value:v.value,R=r?e.mode==="default"?T:i:C,z=r?o:g;(r?c:a)(n.value.getAllSelectedKeys(y,d,z.value,R.value,F.value)),L(e.onSelectAll,r,y)},O=h(()=>e.disabled||I.value<=0),V=h(()=>e.disabled||m.value<=0);return{sourceSelectedKeys:s,targetSelectedKeys:l,sourceSelectedKeySet:o,targetSelectedKeySet:g,handleSourceSelectChange:k,handleTargetSelectChange:_,sourceSelectAllStatus:b,targetSelectAllStatus:w,handleSourceSelectAll:y=>$(y,!0),handleTargetSelectAll:y=>$(y,!1),sourceSelectAllDisabled:O,targetSelectAllDisabled:V,setSourceSelectedKeys:c,setTargetSelectedKeys:a}}function et(e,t,n){const{changeTargetKeys:s}=n,c=[],l=[];for(const a of e.values())t.has(a)||l.push(a);for(const a of t.values())e.has(a)||c.push(a);s(l,c)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const tt={value:Array,sourceSelectedKeys:Array,targetSelectedKeys:Array,sourceSearchValue:String,targetSearchValue:String,clearable:{type:Boolean,default:void 0},clearIcon:String,customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},dataStrategy:Object,defaultTargetData:Array,disabled:{type:Boolean,default:!1},empty:{type:[String,Object],default:"simple"},getKey:[String,Function],mode:{type:String,default:"default"},pagination:{type:[Boolean,Object],default:void 0},scroll:Object,searchable:{type:[Boolean,Object],default:void 0},searchFn:Function,searchPlaceholder:[String,Array],spin:{type:[Boolean,Object],default:void 0},showSelectAll:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:void 0},"onUpdate:value":[Function,Array],"onUpdate:sourceSelectedKeys":[Function,Array],"onUpdate:targetSelectedKeys":[Function,Array],"onUpdate:sourceSearchValue":[Function,Array],"onUpdate:targetSearchValue":[Function,Array],onChange:[Function,Array],onSearch:[Function,Array],onSelectAll:[Function,Array],onClear:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},ae={isSource:{type:Boolean,required:!0}},at=ae,lt=ae,nt=ae,rt={dataSource:Array,checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},checked:Function,customAdditional:{type:Function,default:void 0},disabled:Function,getKey:Function,labelKey:String,scroll:Object,virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:32},onCheckChange:[Function,Array],onRemove:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},st={checked:{type:Boolean,default:!1},checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:String,value:{type:[String,Number,Symbol],required:!0},onCheckChange:[Function,Array],onRemove:[Function,Array]},ct=H({props:st,setup(e,{slots:t}){const{mergedPrefixCls:n}=N(Ke),s=a=>{L(e.onCheckChange,!!a)},c=()=>{L(e.onRemove)},l=h(()=>{const a=`${n.value}-item`;return W({[a]:!0,[`${a}-disabled`]:e.disabled})});return()=>{const a=`${n.value}-item`,o=[];if(e.checkable)o.push(S(fe,{class:`${a}-checkbox`,label:e.label,value:e.value,checked:e.checked,disabled:e.disabled,onChange:s},t));else{const g=xe(t.default,e.label);o.push(S("label",{class:`${a}-label`},[g]))}return e.removable&&!e.disabled&&o.push(S("div",{class:`${a}-close-icon`,onClick:c},[S(re,{name:"close"},null)])),S("li",{class:l.value},[o])}}}),Ae=H({name:"IxTransferList",props:rt,setup(e,{slots:t,expose:n}){const s=Q("common"),c=h(()=>`${s.prefixCls}-transfer-list`),l=h(()=>{var i;return(i=e.labelKey)!=null?i:"label"}),a=M();q(Ke,{mergedPrefixCls:c}),n({scrollTo:i=>{var T;return(T=a.value)==null?void 0:T.scrollTo(i)}});const g=i=>{var T,C;return(C=(T=e.getKey)==null?void 0:T.call(e,i))!=null?C:i.key},u=i=>{L(e.onScroll,i)},f=()=>{L(e.onScrolledBottom)},K=(i,T,C)=>{L(e.onScrolledChange,i,T,C)},v=({item:i,index:T})=>{var x,b;const C=g(i),F=w=>{L(e.onCheckChange,i,w)},I=()=>{L(e.onRemove,i)},m=e.customAdditional?e.customAdditional({data:i,index:T}):void 0;return S(ct,be({key:C,value:C,label:i[l.value],checked:!!((x=e.checked)!=null&&x.call(e,i)),disabled:!!((b=e.disabled)!=null&&b.call(e,i)),checkable:e.checkable,removable:e.removable,onCheckChange:F,onRemove:I},m),{default:t.label&&(()=>{var w;return(w=t.label)==null?void 0:w.call(t,i)})})},P=()=>{var m;const{dataSource:i,virtual:T,virtualItemHeight:C,scroll:F}=e,I=i!=null?i:[];if(!(I.length<=0))return T?S(Be,{ref:a,dataSource:I,fullHeight:!!(F!=null&&F.fullHeight),getKey:g,height:(m=F==null?void 0:F.height)!=null?m:"100%",itemHeight:C,itemRender:v,virtual:!0,onScroll:u,onScrolledBottom:f,onScrolledChange:K},null):S("ul",{class:`${c.value}-inner`},[I.map((x,b)=>v({item:x,index:b}))])},A=h(()=>{const i=c.value;return W({[i]:!0,[`${i}-virtual`]:!!e.virtual})}),D=h(()=>{const i=e.scroll;return i&&ye({[i.fullHeight?"height":"maxHeight"]:ve(i.height)})});return()=>S("div",{class:A.value,style:D.value,onScroll:u},[P()])}}),ot=H({props:at,setup(e){const{props:t,slots:n,mergedPrefixCls:s,sourceTransferListRef:c,targetTransferListRef:l,getKey:a}=N(j),o=e.isSource?N(Z):N(p),{paginatedDataSource:g,paginatedData:u,selectedKeySet:f,disabledDataSourceKeys:K,disabledKeys:v,handleSelectChange:P}=o,{triggerRemove:A}=N(ee),D=e.isSource?c:l,i=b=>{L(t.onScroll,e.isSource,b)},T=()=>{L(t.onScrolledBottom,e.isSource)},C=(b,w,E)=>{L(t.onScrolledChange,e.isSource,b,w,E)},F=h(()=>e.isSource&&t.mode==="immediate"?g.value:u.value),I=h(()=>e.isSource&&t.mode==="immediate"?K.value:v.value),m=b=>{if((e.isSource&&t.mode==="immediate"?g.value:u.value).length<=0)return S("div",{class:`${b}-empty-wrapper`},[S(Ie,{empty:t.empty},n)]);const E=($,O)=>{const V=a.value($),y=new Set(f.value);O?y.add(V):y.delete(V),P(y)},k=$=>{const O=a.value($);A([O])},_={label:n.label&&($=>{var O;return(O=n.label)==null?void 0:O.call(n,{item:$,isSource:e.isSource})})};return S(Ae,{ref:D,dataSource:F.value,getKey:a.value,checked:$=>f.value.has(a.value($)),disabled:$=>t.disabled||I.value.has(a.value($)),checkable:e.isSource||t.mode==="default",removable:!e.isSource&&t.mode==="immediate",virtual:t.virtual,virtualItemHeight:t.virtualItemHeight,scroll:t.scroll,onCheckChange:E,onRemove:k,onScroll:i,onScrolledChange:C,onScrolledBottom:T},_)},x=b=>n.default?n.default({...te(o),isSource:e.isSource}):m(b);return()=>{const b=`${s.value}-body`;return S("div",{class:`${s.value}-body`},[x(b)])}}}),ut=H({props:nt,setup(e){const{slots:t,props:n,mergedPrefixCls:s}=N(j),c=e.isSource?N(Z):N(p),{pagination:l,filteredData:a,filteredDataSource:o}=c,g=u=>{var K,v;if(t.footer)return t.footer({...te(c),isSource:e.isSource});if(!l.value)return;const f=(v=(K=l.value)==null?void 0:K.total)!=null?v:e.isSource&&n.mode==="immediate"?o.value.length:a.value.length;return S("div",{class:`${u}-inner`},[S(je,be({class:`${u}-pagination`},l.value,{total:f}),null)])};return()=>{const u=`${s.value}-footer`,f=g(u);if(!(!f||se(f)&&f.length<=0))return S("div",{class:u},[f])}}}),it=H({props:lt,setup(e){const{props:t,slots:n,config:s,locale:c,mergedPrefixCls:l}=N(j),a=e.isSource?N(Z):N(p),{clearDisabled:o,triggerClear:g}=N(ee),{showSelectAll:u,data:f,selectAllDisabled:K,selectAllStatus:v,searchable:P,searchPlaceholder:A,searchValue:D,handleSearchChange:i,selectAll:T}=a,[C,F]=Re(""),I=M(),m=()=>{var d;const r=(d=I.value)==null?void 0:d.getInputElement();r&&r.value!==D.value&&(r.value=D.value),C.value!==D.value&&F(D.value)};ke(()=>{m()}),Y(D,()=>{m()});const x=()=>{i(C.value)},b=r=>{const d=r.target.value;F(d),d||x()},w=_e(()=>{x()},["enter"]),E=r=>{T(!!r)},k=r=>{if(!(!u.value||!e.isSource&&t.mode==="immediate"))return S(fe,{class:`${r}-check-all`,checked:v.value.checked,indeterminate:v.value.indeterminate,disabled:K.value,onChange:E},null)},_=r=>{let d;return n.headerLabel?d=n.headerLabel({data:f.value,isSource:e.isSource}):d=`${e.isSource?c.toSelect:c.selected} (${f.value.length})`,S("span",{class:`${r}-label`},[d])},$=r=>{if(!P.value)return;const d={suffix:()=>S(re,{class:`${r}-search-icon`,name:"search",onClick:x},null)};return S(we,{ref:I,class:`${r}-search-input`,disabled:t.disabled,type:"text",size:"sm",placeholder:A.value,onInput:b,onKeydown:w},d)},O=r=>{var R,z;if(e.isSource||!((R=t.clearable)!=null?R:s.clearable))return;const d=W({[`${r}-clear-icon`]:!0,[`${r}-clear-icon-disabled`]:o.value});return S("span",{class:d,onClick:g},[n.clearIcon?n.clearIcon():S(re,{name:(z=t.clearIcon)!=null?z:s.clearIcon},null)])},V=r=>{var R;const d=(R=n.headerSuffix)==null?void 0:R.call(n,{isSource:e.isSource});if(!ue(d))return S("span",{class:`${r}-suffix`},[d])},y=r=>n.header?n.header({...te(a),isSource:e.isSource}):S("div",{class:`${r}-inner`},[k(r),_(r),$(r),O(r),V(r)]);return()=>{const r=`${l.value}-header`,d=y(r);if(!ue(d))return S("div",{class:r},[d])}}}),ge=H({props:ae,setup(e){const{props:t,mergedPrefixCls:n}=N(j),s=h(()=>{const a=`${n.value}-content`;return W({[a]:!0,[`${a}-${e.isSource?"source":"target"}`]:!0,[`${a}-disabled`]:t.disabled})}),c=h(()=>{var g;const a=(g=t.scroll)==null?void 0:g.width;let o;if(He(a)?o=e.isSource?a.source:a.target:o=a,!!o)return ye({width:ve(o)})}),l=h(()=>{if(!Me(t.spin))return me(t.spin)?{spinning:!!t.spin}:{spinning:e.isSource?t.spin.source:t.spin.target}});return()=>{const a=[S(it,{isSource:e.isSource},null),S(ot,{isSource:e.isSource},null),S(ut,{isSource:e.isSource},null)];return S("div",{class:s.value,style:c.value},[l.value?S($e,l.value,{default:()=>[a]}):a])}}}),dt=H({name:"IxTransfer",props:tt,setup(e,{slots:t,expose:n}){const s=Q("common"),c=Q("transfer"),l=Q("locale").transfer,a=h(()=>`${s.prefixCls}-transfer`),o=h(()=>{var b;return(b=e.showSelectAll)!=null?b:c.showSelectAll}),{source:g,target:u}=Qe(e,c),{source:f,target:K}=qe(e,l),v=Ye(e),P=Ge(e),A=We(e,c,v,P),D=pe(e,A,v),i=Ze(e,A,D),{sourceBindings:T,targetBindings:C}=Je(e,A,i,D,P,o,g,f,u,K),F=M(),I=M();n({scrollTo:(b,...w)=>{var E;return(E=(b?F:I).value)==null?void 0:E.scrollTo(...w)}}),q(j,{props:e,slots:t,locale:l,config:c,mergedPrefixCls:a,sourceTransferListRef:F,targetTransferListRef:I,showSelectAll:o,getKey:A.getKey}),q(Z,T),q(p,C),q(ee,i);const x=h(()=>{var w;const b=a.value;return W({[b]:!0,[`${b}-fit-content`]:!!((w=e.scroll)!=null&&w.height)})});return()=>S("div",{class:x.value},[S(ge,{isSource:!0},null),S(Ue,null,null),S(ge,{isSource:!1},null)])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const vt=dt,St=Ae;export{vt as I,Z as T,p as a,St as b};
