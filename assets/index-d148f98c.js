import{c as oe,L as Q,N as le,m as L,ar as Fe,al as J,j as ge,O as xe,A as re,aF as ve,H as Be,aq as Re,K as we,aO as ue,ac as Ie,ay as $e}from"./index-42dbc838.js";import{u as Ee,x as M,l as N,z as S,f as Se,H as Oe,av as Le,r as j,c as h,Q as Ne,am as me,a8 as ze,w as Y,G as Ve,P as se,A as W,q,D as ye,a3 as be,y as ke,ax as _e,b as Me,d as je}from"./vendor-95c13cf7.js";import{I as He}from"./index-d6fdab7b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=Symbol("transferContext"),Ke=Symbol("transferListContext"),Z=Symbol("TRANSFER_SOURCE_TOKEN"),p=Symbol("TRANSFER_TARGET_TOKEN"),ee=Symbol("TRANSFER_OPERATIONS_TOKEN");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ae(e){const a={};return Object.keys(e).forEach(n=>{a[n]=Ee(e[n])}),a}const Ue=M({setup(){const{slots:e,props:a,mergedPrefixCls:n}=N(H),s=N(ee),{appendDisabled:c,removeDisabled:l,triggerAppend:t,triggerRemove:o}=s,f=()=>{t()},u=()=>{o()},g=(v,P,A,D)=>Se(P)?S(oe,{class:`${v}-btn`,icon:P,disabled:A,onClick:D},null):Oe(S(oe,{class:`${v}-btn`,disabled:A,onClick:D},null),[[Le("slos"),{icon:()=>P}]]),K=v=>{if(e.operations)return e.operations(ae(s));if(a.mode!=="immediate")return S("div",{class:`${v}-inner`},[g(v,"right-double",c.value,f),g(v,"left-double",l.value,u)])};return()=>{const v=`${n.value}-operations`;return S("div",{class:v},[K(v)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e){const a=Q("pagination");return{sourcePagination:ie(e,a,!0),targetPagination:ie(e,a,!1)}}function ie(e,a,n){const s=j(),c=j(),l=h(()=>{const o=e.pagination;if(!o)return null;if(o===!0)return{};const f=n?0:1,u=le(o.pageIndex),g=le(o.pageSize),K=le(o.total);return{pageIndex:u==null?void 0:u[f],pageSize:g==null?void 0:g[f],disabled:e.disabled||o.disabled,total:K==null?void 0:K[f],onChange:(v,P)=>{var A;return(A=o.onChange)==null?void 0:A.call(o,n,v,P)}}});Ne(()=>{var f,u;const o=l.value;s.value=(f=o==null?void 0:o.pageIndex)!=null?f:1,c.value=(u=o==null?void 0:o.pageSize)!=null?u:a.pageSize});const t=o=>{s.value=o};return h(()=>{const o=l.value;if(o!==null)return{simple:!0,showTotal:!1,showQuickJumper:!0,...o,pageIndex:s.value,pageSize:c.value,"onUpdate:pageIndex":t}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function qe(e,a){return{source:h(()=>de(e,a,!0)),target:h(()=>de(e,a,!1))}}function de(e,a,n){var l;const s=a.searchPlaceholder[n?0:1],c=Se(e.searchPlaceholder)?e.searchPlaceholder:(l=e.searchPlaceholder)==null?void 0:l[n?0:1];return c!=null?c:s}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Qe(e,a){return{source:h(()=>he(e,a,!0)),target:h(()=>he(e,a,!1))}}function he(e,a,n){var c;const s=(c=e.searchable)!=null?c:a.searchable;return!s||me(s)?!!s:n?s.source:s.target}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,a,n,s,c,l,t,o,f,u){const{dataSource:g,sourceData:K,targetData:v,targetKeySet:P,dataKeyMap:A,disabledKeys:D,disabledSourceKeys:i,disabledTargetKeys:T,filteredDataSource:b,filteredSourceData:B,filteredTargetData:w,paginatedDataSource:y,paginatedSourceData:F,paginatedTargetData:C,sourceSearchValue:I,setSourceSearchValue:E,targetSearchValue:k,setTargetSearchValue:_,getKey:$}=a,{sourceSelectedKeys:O,targetSelectedKeys:V,sourceSelectedKeySet:m,targetSelectedKeySet:r,sourceSelectAllStatus:d,targetSelectAllStatus:R,sourceSelectAllDisabled:z,targetSelectAllDisabled:X,handleSourceSelectChange:U,handleTargetSelectChange:x,handleSourceSelectAll:Ce,handleTargetSelectAll:De}=s,{triggerAppend:Te,triggerRemove:Pe}=n,ce={dataSource:g,dataKeyMap:A,disabledDataSourceKeys:D,filteredDataSource:b,paginatedDataSource:y,targetKeySet:P,showSelectAll:l,triggerAppend:Te,triggerRemove:Pe,getKey:$};return{sourceBindings:{data:K,filteredData:B,paginatedData:F,pagination:c.sourcePagination,disabledKeys:i,selectedKeys:O,selectedKeySet:m,selectAllDisabled:z,selectAllStatus:d,searchable:t,searchPlaceholder:o,selectAll:Ce,handleSelectChange:U,searchValue:I,handleSearchChange:G=>{E(G),L(e.onSearch,!0,G)},...ce},targetBindings:{data:v,filteredData:w,paginatedData:C,pagination:c.targetPagination,disabledKeys:T,selectedKeys:V,selectedKeySet:r,selectAllDisabled:X,selectAllStatus:R,searchable:f,searchPlaceholder:u,selectAll:De,handleSelectChange:x,searchValue:k,handleSearchChange:G=>{_(G),L(e.onSearch,!1,G)},...ce}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,a,n,s){const c=Fe(e,a),l=h(()=>r=>{var d;return(d=c.value(r))!=null?d:r.key}),t=h(()=>e.dataSource),o=h(()=>n.value.genDataKeyMap(t.value,l.value)),[f,u]=J(e,"value",()=>[]),[g,K]=J(e,"sourceSearchValue",""),[v,P]=J(e,"targetSearchValue",""),A=h(()=>new Set(f.value)),D=r=>{const d=f.value;u(r),L(e.onChange,r,d)},i=h(()=>n.value.separateDataSource(t.value,o.value,A.value,l.value)),T=h(()=>i.value.sourceData),b=h(()=>i.value.targetData),B=h(()=>n.value.genDataKeys(T.value,l.value)),w=h(()=>n.value.genDataKeys(b.value,l.value)),y=h(()=>n.value.dataFilter(t.value,g.value,(r,d)=>!e.searchFn||e.searchFn(!0,r,d))),F=h(()=>n.value.dataFilter(T.value,g.value,(r,d)=>!e.searchFn||e.searchFn(!0,r,d))),C=h(()=>n.value.dataFilter(b.value,v.value,(r,d)=>!e.searchFn||e.searchFn(!1,r,d))),I=h(()=>ne(y.value,s.sourcePagination.value)),E=h(()=>ne(F.value,s.sourcePagination.value)),k=h(()=>ne(C.value,s.targetPagination.value)),_=(r,d)=>{let R=f.value;r.length>0&&(R=n.value.remove(r,R,l.value)),d.length>0&&(R=n.value.append(d,R,l.value)),D(R)},$=()=>{D(Array.from(V.value))},O=h(()=>n.value.genDisabledKeys(t.value,l.value)),V=h(()=>{const r=n.value.genDisabledKeys(b.value,l.value);return A.value.forEach(d=>{O.value.has(d)&&r.add(d)}),r}),m=h(()=>n.value.genDisabledKeys(T.value,l.value));return{dataSource:t,dataKeyMap:o,sourceData:T,targetData:b,sourceDataKeys:B,targetDataKeys:w,filteredDataSource:y,filteredSourceData:F,filteredTargetData:C,paginatedDataSource:I,paginatedSourceData:E,paginatedTargetData:k,targetKeys:f,targetKeySet:A,changeTargetKeys:_,clear:$,getKey:l,disabledKeys:O,disabledSourceKeys:m,disabledTargetKeys:V,sourceSearchValue:g,setSourceSearchValue:K,targetSearchValue:v,setTargetSearchValue:P}}function ne(e,a){if(!a||!a.pageSize)return e;const{total:n}=a;if(n&&e.length<n)return e;const s=a.pageSize,c=(a.pageIndex-1)*s;return e.slice(c,c+s)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Xe(e){const a=new Map;ze(()=>{a.clear()});const n=(s,c)=>new Set(s.map(l=>c(l)));return{genDataKeys:n,genDataKeyMap:(s,c)=>{const l=new Map;return s.forEach(t=>{l.set(c(t),t)}),l},genDisabledKeys:(s,c)=>{const l=new Set;return s.forEach(t=>{t.disabled&&l.add(c(t))}),l},getAllSelectedKeys:(s,c,l,t,o)=>{let f;return s?(f=n(c,o),t.forEach(u=>{!l.has(u)&&f.delete(u)})):(f=new Set,t.forEach(u=>{l.has(u)&&f.add(u)})),Array.from(f)},separateDataSource:(s,c,l,t)=>{const o=s.filter(u=>!l.has(t(u))),f=[];l.forEach(u=>{var K,v;const g=(v=(K=c.get(u))!=null?K:a.get(u))!=null?v:e==null?void 0:e.find(P=>t(P)===u);g&&!a.has(u)&&a.set(u,g),f.push(g!=null?g:{key:u})});for(const u of a.keys())l.has(u)||a.delete(u);return{sourceData:o,targetData:f}},dataFilter:(s,c,l)=>c?s.filter(t=>l(t,c)):s,append:(s,c)=>{const l=new Set(c);return s.forEach(t=>{l.add(t)}),Array.from(l)},remove:(s,c)=>{const l=new Set(c);return s.forEach(t=>{l.delete(t)}),Array.from(l)}}}function Ye(e){var s;const a=Xe((s=e.defaultTargetData)!=null?s:[]);return h(()=>e.dataStrategy?{...a,...e.dataStrategy}:a)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,a,n){const{dataKeyMap:s,sourceData:c,targetData:l,disabledSourceKeys:t,disabledTargetKeys:o,changeTargetKeys:f,clear:u,getKey:g}=a,{sourceSelectedKeys:K,targetSelectedKeys:v}=n,P=h(()=>e.disabled||K.value.length<=0),A=h(()=>e.disabled||v.value.length<=0),D=h(()=>e.disabled||c.value.every(y=>t.value.has(g.value(y)))),i=h(()=>e.disabled||l.value.every(y=>o.value.has(g.value(y))));return{appendDisabled:P,removeDisabled:A,appendAllDisabled:D,clearDisabled:i,triggerAppend:y=>{!y&&P.value||y&&e.disabled||f([],(y!=null?y:Array.from(K.value)).filter(F=>!t.value.has(F)))},triggerRemove:y=>{!y&&A.value||y&&e.disabled||f((y!=null?y:Array.from(v.value)).filter(F=>!o.value.has(F)),[])},triggerAppendAll:()=>{D.value||f([],Array.from(s.value.keys()).filter(y=>!t.value.has(y)))},triggerClear:()=>{i.value||(u(),L(e.onClear))}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function pe(e,a,n){const[s,c]=J(e,"sourceSelectedKeys",()=>[]),[l,t]=J(e,"targetSelectedKeys",()=>[]),o=h(()=>new Set(s.value)),f=h(()=>new Set(l.value)),{dataKeyMap:u,dataSource:g,sourceData:K,targetData:v,sourceDataKeys:P,targetDataKeys:A,targetKeySet:D,disabledKeys:i,disabledSourceKeys:T,disabledTargetKeys:b,getKey:B}=a,w=h(()=>{const m=e.mode==="immediate"?u.value.size:P.value.size,r=e.mode==="immediate"?i.value.size:T.value.size;return m-r}),y=h(()=>A.value.size-b.value.size),F=m=>{const r=n.value.getAllSelectedKeys(!0,m?e.mode==="immediate"?g.value:K.value:v.value,new Set,new Set,B.value),d=(m?s:l).value.length,R=m?o.value:f.value;return{checked:d>0,indeterminate:(r.length!==d||r.some(z=>!R.has(z)))&&d>0}},C=h(()=>F(!0)),I=h(()=>F(!1));let E=!1;Y(o,(m,r)=>{if(e.mode==="immediate"){if(E)return;ea(r,m,a)}}),Y([w,u,i,D],(m,[,,,r])=>{const d=new Set(s.value),R=new Set,z=new Set,X=x=>{d.has(x)||(d.add(x),z.add(x),R.delete(x))},U=x=>{d.has(x)&&(d.delete(x),R.add(x),z.delete(x))};s.value.forEach(x=>{if(!u.value.has(x)||i.value.has(x)){U(x);return}e.mode==="default"&&D.value.has(x)&&U(x)}),e.mode==="immediate"&&(D.value.forEach(x=>{u.value.has(x)&&X(x)}),r==null||r.forEach(x=>{D.value.has(x)||U(x)})),(z.size>0||R.size>0)&&(c(Array.from(d)),E=!0,Ve(()=>{E=!1}))},{immediate:!0,flush:"post"}),Y([y,A,b],()=>{const m=new Set(l.value);l.value.forEach(r=>{(!A.value.has(r)||b.value.has(r))&&m.delete(r)}),t(Array.from(m))},{immediate:!0,flush:"post"});const k=m=>{e.disabled||c(se(m)?m:Array.from(m))},_=m=>{e.disabled||t(se(m)?m:Array.from(m))},$=(m=!0,r=!0)=>{if(e.disabled)return;const d=r?e.mode==="default"?K.value:g.value:v.value,R=r?e.mode==="default"?T:i:b,z=r?o:f;(r?c:t)(n.value.getAllSelectedKeys(m,d,z.value,R.value,B.value)),L(e.onSelectAll,r,m)},O=h(()=>e.disabled||w.value<=0),V=h(()=>e.disabled||y.value<=0);return{sourceSelectedKeys:s,targetSelectedKeys:l,sourceSelectedKeySet:o,targetSelectedKeySet:f,handleSourceSelectChange:k,handleTargetSelectChange:_,sourceSelectAllStatus:C,targetSelectAllStatus:I,handleSourceSelectAll:m=>$(m,!0),handleTargetSelectAll:m=>$(m,!1),sourceSelectAllDisabled:O,targetSelectAllDisabled:V,setSourceSelectedKeys:c,setTargetSelectedKeys:t}}function ea(e,a,n){const{changeTargetKeys:s}=n,c=[],l=[];for(const t of e.values())a.has(t)||l.push(t);for(const t of a.values())e.has(t)||c.push(t);s(l,c)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const aa={value:Array,sourceSelectedKeys:Array,targetSelectedKeys:Array,sourceSearchValue:String,targetSearchValue:String,clearable:{type:Boolean,default:void 0},clearIcon:String,customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},dataStrategy:Object,defaultTargetData:Array,disabled:{type:Boolean,default:!1},empty:{type:[String,Object],default:"simple"},getKey:[String,Function],mode:{type:String,default:"default"},pagination:{type:[Boolean,Object],default:void 0},scroll:Object,searchable:{type:[Boolean,Object],default:void 0},searchFn:Function,searchPlaceholder:[String,Array],spin:{type:[Boolean,Object],default:void 0},showSelectAll:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:sourceSelectedKeys":[Function,Array],"onUpdate:targetSelectedKeys":[Function,Array],"onUpdate:sourceSearchValue":[Function,Array],"onUpdate:targetSearchValue":[Function,Array],onChange:[Function,Array],onSearch:[Function,Array],onSelectAll:[Function,Array],onClear:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},te={isSource:{type:Boolean,required:!0}},ta=te,la=te,na=te,ra={dataSource:Array,checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},checked:Function,customAdditional:{type:Function,default:void 0},disabled:Function,getKey:Function,labelKey:String,virtual:{type:Boolean,default:!1},scroll:Object,onCheckChange:[Function,Array],onRemove:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},sa={checked:{type:Boolean,default:!1},checkable:{type:Boolean,default:!0},removable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:String,value:{type:[String,Number,Symbol],required:!0},onCheckChange:[Function,Array],onRemove:[Function,Array]},ca=M({props:sa,setup(e,{slots:a}){const{mergedPrefixCls:n}=N(Ke),s=t=>{L(e.onCheckChange,!!t)},c=()=>{L(e.onRemove)},l=h(()=>{const t=`${n.value}-item`;return W({[t]:!0,[`${t}-disabled`]:e.disabled})});return()=>{const t=`${n.value}-item`,o=[];if(e.checkable)o.push(S(ge,{class:`${t}-checkbox`,label:e.label,value:e.value,checked:e.checked,disabled:e.disabled,onChange:s},a));else{const f=xe(a.default,e.label);o.push(S("label",{class:`${t}-label`},[f]))}return e.removable&&!e.disabled&&o.push(S("div",{class:`${t}-close-icon`,onClick:c},[S(re,{name:"close"},null)])),S("li",{class:l.value},[o])}}}),Ae=M({name:"IxTransferList",props:ra,setup(e,{slots:a,expose:n}){const s=Q("common"),c=h(()=>`${s.prefixCls}-transfer-list`),l=h(()=>{var i;return(i=e.labelKey)!=null?i:"label"}),t=j();q(Ke,{mergedPrefixCls:c}),n({scrollTo:i=>{var T;return(T=t.value)==null?void 0:T.scrollTo(i)}});const f=i=>{var T,b;return(b=(T=e.getKey)==null?void 0:T.call(e,i))!=null?b:i.key},u=i=>{L(e.onScroll,i)},g=()=>{L(e.onScrolledBottom)},K=(i,T,b)=>{L(e.onScrolledChange,i,T,b)},v=({item:i,index:T})=>{var F,C;const b=f(i),B=I=>{L(e.onCheckChange,i,I)},w=()=>{L(e.onRemove,i)},y=e.customAdditional?e.customAdditional({data:i,index:T}):void 0;return S(ca,be({key:b,value:b,label:i[l.value],checked:!!((F=e.checked)!=null&&F.call(e,i)),disabled:!!((C=e.disabled)!=null&&C.call(e,i)),checkable:e.checkable,removable:e.removable,onCheckChange:B,onRemove:w},y),{default:a.label&&(()=>{var I;return(I=a.label)==null?void 0:I.call(a,i)})})},P=()=>{var w;const{dataSource:i,virtual:T,scroll:b}=e,B=i!=null?i:[];if(!(B.length<=0))return T?S(Be,{ref:t,dataSource:B,fullHeight:!!(b!=null&&b.fullHeight),getKey:f,height:(w=b==null?void 0:b.height)!=null?w:"100%",itemHeight:32,itemRender:v,virtual:!0,onScroll:u,onScrolledBottom:g,onScrolledChange:K},null):S("ul",{class:`${c.value}-inner`},[B.map((y,F)=>v({item:y,index:F}))])},A=h(()=>{const i=c.value;return W({[i]:!0,[`${i}-virtual`]:!!e.virtual})}),D=h(()=>{const i=e.scroll;return i&&ye({[i.fullHeight?"height":"maxHeight"]:ve(i.height)})});return()=>S("div",{class:A.value,style:D.value,onScroll:u},[P()])}}),oa=M({props:ta,setup(e){const{props:a,slots:n,mergedPrefixCls:s,sourceTransferListRef:c,targetTransferListRef:l,getKey:t}=N(H),o=e.isSource?N(Z):N(p),{paginatedDataSource:f,paginatedData:u,selectedKeySet:g,disabledDataSourceKeys:K,disabledKeys:v,handleSelectChange:P}=o,{triggerRemove:A}=N(ee),D=e.isSource?c:l,i=C=>{L(a.onScroll,e.isSource,C)},T=()=>{L(a.onScrolledBottom,e.isSource)},b=(C,I,E)=>{L(a.onScrolledChange,e.isSource,C,I,E)},B=h(()=>e.isSource&&a.mode==="immediate"?f.value:u.value),w=h(()=>e.isSource&&a.mode==="immediate"?K.value:v.value),y=C=>{if((e.isSource&&a.mode==="immediate"?f.value:u.value).length<=0)return S("div",{class:`${C}-empty-wrapper`},[S(Re,{empty:a.empty},n)]);const E=($,O)=>{const V=t.value($),m=new Set(g.value);O?m.add(V):m.delete(V),P(m)},k=$=>{const O=t.value($);A([O])},_={label:n.label&&($=>{var O;return(O=n.label)==null?void 0:O.call(n,{item:$,isSource:e.isSource})})};return S(Ae,{ref:D,dataSource:B.value,getKey:t.value,checked:$=>g.value.has(t.value($)),disabled:$=>a.disabled||w.value.has(t.value($)),checkable:e.isSource||a.mode==="default",removable:!e.isSource&&a.mode==="immediate",virtual:a.virtual,scroll:a.scroll,onCheckChange:E,onRemove:k,onScroll:i,onScrolledChange:b,onScrolledBottom:T},_)},F=C=>n.default?n.default({...ae(o),isSource:e.isSource}):y(C);return()=>{const C=`${s.value}-body`;return S("div",{class:`${s.value}-body`},[F(C)])}}}),ua=M({props:na,setup(e){const{slots:a,props:n,mergedPrefixCls:s}=N(H),c=e.isSource?N(Z):N(p),{pagination:l,filteredData:t,filteredDataSource:o}=c,f=u=>{var K,v;if(a.footer)return a.footer({...ae(c),isSource:e.isSource});if(!l.value)return;const g=(v=(K=l.value)==null?void 0:K.total)!=null?v:e.isSource&&n.mode==="immediate"?o.value.length:t.value.length;return S("div",{class:`${u}-inner`},[S(He,be({class:`${u}-pagination`},l.value,{total:g}),null)])};return()=>{const u=`${s.value}-footer`,g=f(u);if(!(!g||se(g)&&g.length<=0))return S("div",{class:u},[g])}}}),ia=M({props:la,setup(e){const{props:a,slots:n,config:s,locale:c,mergedPrefixCls:l}=N(H),t=e.isSource?N(Z):N(p),{clearDisabled:o,triggerClear:f}=N(ee),{showSelectAll:u,data:g,selectAllDisabled:K,selectAllStatus:v,searchable:P,searchPlaceholder:A,searchValue:D,handleSearchChange:i,selectAll:T}=t,[b,B]=we(""),w=j(),y=()=>{var d;const r=(d=w.value)==null?void 0:d.getInputElement();r&&r.value!==D.value&&(r.value=D.value),b.value!==D.value&&B(D.value)};ke(()=>{y()}),Y(D,()=>{y()});const F=()=>{i(b.value)},C=r=>{const d=r.target.value;B(d),d||F()},I=_e(()=>{F()},["enter"]),E=r=>{T(!!r)},k=r=>{if(!(!u.value||!e.isSource&&a.mode==="immediate"))return S(ge,{class:`${r}-check-all`,checked:v.value.checked,indeterminate:v.value.indeterminate,disabled:K.value,onChange:E},null)},_=r=>{let d;return n.headerLabel?d=n.headerLabel({data:g.value,isSource:e.isSource}):d=`${e.isSource?c.toSelect:c.selected} (${g.value.length})`,S("span",{class:`${r}-label`},[d])},$=r=>{if(!P.value)return;const d={suffix:()=>S(re,{class:`${r}-search-icon`,name:"search",onClick:F},null)};return S(Ie,{ref:w,class:`${r}-search-input`,disabled:a.disabled,type:"text",size:"sm",placeholder:A.value,onInput:C,onKeydown:I},d)},O=r=>{var R,z;if(e.isSource||!((R=a.clearable)!=null?R:s.clearable))return;const d=W({[`${r}-clear-icon`]:!0,[`${r}-clear-icon-disabled`]:o.value});return S("span",{class:d,onClick:f},[n.clearIcon?n.clearIcon():S(re,{name:(z=a.clearIcon)!=null?z:s.clearIcon},null)])},V=r=>{var R;const d=(R=n.headerSuffix)==null?void 0:R.call(n,{isSource:e.isSource});if(!ue(d))return S("span",{class:`${r}-suffix`},[d])},m=r=>n.header?n.header({...ae(t),isSource:e.isSource}):S("div",{class:`${r}-inner`},[k(r),_(r),$(r),O(r),V(r)]);return()=>{const r=`${l.value}-header`,d=m(r);if(!ue(d))return S("div",{class:r},[d])}}}),fe=M({props:te,setup(e){const{props:a,mergedPrefixCls:n}=N(H),s=h(()=>{const t=`${n.value}-content`;return W({[t]:!0,[`${t}-${e.isSource?"source":"target"}`]:!0,[`${t}-disabled`]:a.disabled})}),c=h(()=>{var f;const t=(f=a.scroll)==null?void 0:f.width;let o;if(Me(t)?o=e.isSource?t.source:t.target:o=t,!!o)return ye({width:ve(o)})}),l=h(()=>{if(!je(a.spin))return me(a.spin)?{spinning:!!a.spin}:{spinning:e.isSource?a.spin.source:a.spin.target}});return()=>{const t=[S(ia,{isSource:e.isSource},null),S(oa,{isSource:e.isSource},null),S(ua,{isSource:e.isSource},null)];return S("div",{class:s.value,style:c.value},[l.value?S($e,l.value,{default:()=>[t]}):t])}}}),da=M({name:"IxTransfer",props:aa,setup(e,{slots:a,expose:n}){const s=Q("common"),c=Q("transfer"),l=Q("locale").transfer,t=h(()=>`${s.prefixCls}-transfer`),o=h(()=>{var C;return(C=e.showSelectAll)!=null?C:c.showSelectAll}),{source:f,target:u}=Qe(e,c),{source:g,target:K}=qe(e,l),v=Ye(e),P=Ge(e),A=We(e,c,v,P),D=pe(e,A,v),i=Ze(e,A,D),{sourceBindings:T,targetBindings:b}=Je(e,A,i,D,P,o,f,g,u,K),B=j(),w=j();n({scrollTo:(C,...I)=>{var E;return(E=(C?B:w).value)==null?void 0:E.scrollTo(...I)}}),q(H,{props:e,slots:a,locale:l,config:c,mergedPrefixCls:t,sourceTransferListRef:B,targetTransferListRef:w,showSelectAll:o,getKey:A.getKey}),q(Z,T),q(p,b),q(ee,i);const F=h(()=>{var I;const C=t.value;return W({[C]:!0,[`${C}-fit-content`]:!!((I=e.scroll)!=null&&I.height)})});return()=>S("div",{class:F.value},[S(fe,{isSource:!0},null),S(Ue,null,null),S(fe,{isSource:!1},null)])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const va=da,Sa=Ae;export{va as I,Z as T,p as a,Sa as b};
