import{a8 as we,a9 as ve,aI as Ve,ab as ke,i as z,u as le,aJ as M,aK as ce,K as X,s as Ye,a1 as ie,a7 as oe,h as ee,o as G,j as ge,v as te,C as he,ap as Ge,ak as Be,aj as Ke,c as be,w as Je,a2 as Qe,a3 as Ze,a6 as et,aL as tt,ar as lt,am as nt,ay as ot}from"./index-5a6244f3.js";import{j as Ee,l as j,L as st,T as at,e as g,r as ye,b as O,w as L,a7 as $e,Q as Te,k as J,N as Q,x as se,bi as rt,P as ct,v as I,z as Y,y as b,i as R,ad as it,a as V,a2 as Z,p as Oe,Z as ut,au as dt}from"./vendor-8302379e.js";import{b as We}from"./GlobalCodeBox-d53764b9.js";import{I as ft}from"./index-900c4851.js";const Pe=Symbol("IxTableColumn"),pe=()=>{};pe.displayName="IxTableColumn";pe[Pe]=!0;function Re(e,t,l){if(!e||Ee(e)&&e.title===!1)return;if(j(t)||st(t))return t;const o=we(t).find(n=>n.type===at);return o?o.children:l}function vt(e){return e.key?e.key:e.dataKey?ve(e.dataKey).join("-"):e.type?`__IDUX_table_column_key_${e.type}`:Ve("__IDUX_table_column_key_")}function ht(e,t,l,o){const n=g(()=>{var m;const{columns:w}=e;return w&&w.length>0?ue(e.columns,l.columnBase,l.columnExpandable):ue(Ie((m=t.default)==null?void 0:m.call(t)),l.columnBase,l.columnExpandable)}),{flattedColumns:a,scrollBarColumn:s,flattedColumnsWithScrollBar:r}=pt(n,o),c=mt(r),i=g(()=>!!e.ellipsis||a.value.some(w=>w.ellipsis)),u=g(()=>a.value.some(w=>w.fixed)),{columnWidths:d,columnWidthsWithScrollBar:v,changeColumnWidth:p}=gt(a,s),{columnOffsets:y,columnOffsetsWithScrollBar:C}=bt(d,v),x=g(()=>St(n.value,s.value));return{flattedColumns:a,scrollBarColumn:s,flattedColumnsWithScrollBar:r,fixedColumnKeys:c,hasEllipsis:i,hasFixed:u,columnWidths:d,columnWidthsWithScrollBar:v,changeColumnWidth:p,columnOffsets:y,columnOffsetsWithScrollBar:C,mergedRows:x}}function ue(e,t,l){return e.map(o=>yt(o,t,l))}function Ie(e){const t=[];return we(e,{key:Pe}).forEach((l,o)=>{const{props:n,children:a}=l,{key:s=o,editable:r,ellipsis:c,...i}=n||{};i.key=s,i.editable=r||r==="",i.ellipsis=c||c==="";const{default:u,cell:d,title:v,expand:p,icon:y}=a||{};u&&(i.children=Ie(u())),d&&(i.customCell=d),v&&(i.customTitle=v),p&&(i.customExpand=p),y&&(i.customIcon=y),t.push(i)}),t}function yt(e,t,l){const{align:o=t.align}=e,n=vt(e);if("type"in e){const{type:a}=e;if(a==="expandable"){const{icon:s=l.icon}=e;return{...e,key:n,align:o,icon:s}}if(a==="selectable"){const s=e.multiple??!0;return{...e,key:n,align:o,multiple:s}}return{...e,key:n,align:o}}else{const{sortable:a,filterable:s,children:r}=e,c={...e,key:n,align:o};return a&&(c.sortable={...t.sortable,...a}),s&&(c.filterable={...t.filterable,...s}),r!=null&&r.length&&(c.children=ue(r,t,l)),c}}function pt(e,t){const l=g(()=>Fe(e.value)),o=g(()=>{const a=t.value;if(a===0)return;const s=l.value,r=s[s.length-1];return{key:"__IDUX_table_column_key_scroll-bar",type:"scroll-bar",fixed:r&&r.fixed,width:a}}),n=g(()=>{const a=l.value;if(a.length===0)return a;const s=o.value;return s?[...a,s]:a});return{flattedColumns:l,scrollBarColumn:o,flattedColumnsWithScrollBar:n}}function Fe(e){const t=[];return e.forEach(l=>{const{fixed:o,children:n}=l;if(n!=null&&n.length){let a=Fe(n);o&&(a=a.map(s=>({fixed:o,...s}))),t.push(...a)}else t.push(l)}),t}function mt(e){return g(()=>{let t,l;return e.value.forEach(o=>{const{fixed:n,key:a}=o;n==="start"?t=a:n==="end"&&(l||(l=a))}),{lastStartKey:t,firstEndKey:l}})}function gt(e,t){const l=ye({}),o=O(),n=O([]);L(o,$e(r=>{n.value=r?r.split("-").map(Number):[]},16)),Te(()=>{const r=Object.keys(l),c=e.value;if(r.length!==c.length){o.value=void 0;return}o.value=c.map(i=>l[i.key]).join("-")});const a=g(()=>{const r=n.value;if(r.length===0)return r;const c=t.value;return c?[...r,c.width]:r});return{columnWidths:n,columnWidthsWithScrollBar:a,changeColumnWidth:(r,c)=>{c===!1?delete l[r]:l[r]=c}}}function bt(e,t){const l=g(()=>Se(e.value)),o=g(()=>Se(t.value));return{columnOffsets:l,columnOffsetsWithScrollBar:o}}function Se(e){const t=e.length,l=[],o=[];let n=0,a=0;for(let s=0;s<t;s++){l[s]=n,n+=e[s]||0;const r=t-s-1;o[r]=a,a+=e[r]||0}return{starts:l,ends:o}}function St(e,t){const l=[];function o(s,r,c){l[c]??(l[c]=[]);let i=r;return s.map(d=>{let v=d.titleColSpan??1,p=!1;const y=d.children;if(y!=null&&y.length){p=!0;const x=o(y,i,c+1);J(d.titleColSpan)&&(v=x.reduce((w,m)=>w+m))}const C=i+v-1;return l[c].push({...d,titleColSpan:v,colStart:i,colEnd:C,hasChildren:p}),i+=v,v})}const n=t?[...e,t]:e;o(n,0,0);const a=l.length;return l.forEach((s,r)=>{s.forEach(c=>{c.hasChildren||(c.titleRowSpan=a-r)})}),l}function xt(e,t,l,o,n,a,s){const r=g(()=>{const y=t.value,C=l.value;return e.dataSource.map(x=>Ae(x,C,y))}),c=g(()=>{const y=new Map;return de(r.value,y),y}),i=g(()=>_e(r.value,n.value,a.value)),u=g(()=>He(i.value,o.value,a.value)),d=g(()=>{const y=s.value,C=u.value;if(y===null||!y.pageSize)return C;{const{total:x}=y;if(x&&C.length<x)return C;const w=y.pageSize,m=(y.pageIndex-1)*w;return C.slice(m,m+w)}}),v=g(()=>{const y=new Map;return de(d.value,y),y}),p=g(()=>{const y=a.value;return y.length>0?ze(d.value,y,0):d.value});return{filteredData:i,flattedData:p,mergedMap:c,paginatedMap:v}}function Ae(e,t,l,o){const n=t(e),a={record:e,rowKey:n,parentKey:o},s=e[l];return s&&(a.children=s.map(r=>Ae(r,t,l,n))),a}function de(e,t){e.forEach(l=>{const{rowKey:o,children:n}=l;t.set(o,l),n&&de(n,t)})}function He(e,t,l){const o=t.filter(s=>s.sorter),n=o.length;if(n===0)return e;const a=e.slice();return a.forEach(s=>{l.includes(s.rowKey)&&s.children&&s.children.length>0&&(s.children=He(s.children,t,l))}),a.sort((s,r)=>{for(let c=0;c<n;c++){const{orderBy:i,sorter:u}=o[c],d=u(s.record,r.record);if(d!==0)return i==="ascend"?d:-d}return 0})}function _e(e,t,l){const o=t.filter(n=>n.filter);return o.length===0?e:e.map(n=>{const a=o.every(({filter:u,filterBy:d})=>u(d,n.record)),{rowKey:s,children:r}=n,c=l.includes(s);let i=n;if(c&&r&&r.length){const u=_e(r,t,l);u.length!==r.length&&(i={...n,children:u})}return a||c&&i.children&&i.children.length?i:null}).filter(n=>n!==null)}function ze(e,t,l){return e.reduce((o,n)=>{const{children:a,parentKey:s,record:r,rowKey:c}=n,i=t.includes(c);if(o.push({children:a,parentKey:s,record:r,rowKey:c,level:l,expanded:i}),i&&n.children){const u=ze(n.children,t,l+1);o.push(...u)}return o},[])}function Ct(e,t){const l=g(()=>t.value.find(r=>"type"in r&&r.type==="expandable")),[o,n]=ke(e,"expandedRowKeys",()=>[]);return{expandable:l,expandedRowKeys:o,setExpandedRowKeys:n,checkExpandDisabled:r=>{if(!l.value)return!0;const{disabled:c,customExpand:i}=l.value,{record:u}=r;return c!=null&&c(u)?!0:!(i||r.children&&r.children.length>0)},handleExpandChange:(r,c)=>{const{onChange:i,onExpand:u}=l.value||{},d=[...o.value],v=d.indexOf(r),p=v>=0;p?d.splice(v,1):d.push(r),z(u,!p,c),n(d),z(i,d)}}}function wt(e){const t=g(()=>e.value.filter(a=>a.filterable)),l=ye({});L(t,(a,s)=>{a.forEach(r=>{const{key:c,filterable:i}=r,u=i.filterBy;if(u||l[c]===void 0){l[c]=u||[];return}const d=s?s.find(p=>p.key===c):void 0;(d==null?void 0:d.filterable.filterBy)&&(l[c]=[])})},{immediate:!0});const o=g(()=>t.value.map(a=>{const{key:s,filterable:r}=a,{filter:c,filterBy:i=l[s]}=r;return{key:s,filter:c,filterBy:i}}).filter(a=>a.filter&&a.filterBy.length>0));return{activeFilters:o,activeFilterByMap:l,handleFilter:(a,s,r)=>{const{onChange:c}=s;l[a]=r,z(c,r,o.value)}}}function kt(e,t,l){var i,u;const o=le("pagination"),n=g(()=>{const{pagination:d}=e;return d===!1?null:d===!0?{}:d}),a=O(((i=n.value)==null?void 0:i.pageIndex)??1),s=O(((u=n.value)==null?void 0:u.pageSize)??t.pagination.pageSize??o.pageSize),r=(d,v)=>{var p;a.value=d,s.value=v,z((p=n.value)==null?void 0:p.onChange,d,v)};return{mergedPagination:g(()=>{const d=n.value;return d===null?null:{...t.pagination,...d,pageIndex:d.pageIndex??a.value,pageSize:d.pageSize??s.value,size:l.value,onChange:r}})}}function Bt(e,t,{setStickyScrollLeft:l}){const o=O(),n=O(),a=O(),s=O(),r=O();L(o,w=>{w&&(a.value=w.holderRef.value)});const{handleScroll:c,pingedStart:i,pingedEnd:u}=Kt(n,a,r,l),d=Et(e,t,a,s),v=g(()=>{var w;return M((w=e.scroll)==null?void 0:w.width)}),p=g(()=>{var m;let w=M((m=e.scroll)==null?void 0:m.height);return!w&&t.value&&(e.virtual||d.value)&&(w="auto"),w}),y=g(()=>ce(X(a))),C=g(()=>p.value?y.value:0);return{virtualScrollRef:o,scrollHeadRef:n,scrollBodyRef:a,scrollContentRef:s,scrollFootRef:r,handleScroll:c,scrollTo:w=>{var m;e.virtual?(m=o.value)==null||m.scrollTo(w):typeof w=="number"&&Ye({target:X(a),top:w,duration:200})},pingedStart:i,pingedEnd:u,scrollWidth:v,scrollHeight:p,scrollBarSize:y,scrollBarSizeOnFixedHolder:C}}function Kt(e,t,l,o){const n=O(!1),a=O(!1);let s;const r=()=>{s&&(clearTimeout(s),s=void 0)};Q(()=>r());const c=O(),i=p=>{c.value=p,r(),s=setTimeout(()=>{c.value=void 0,s=void 0},100)},u=(p,y)=>{y&&y.scrollLeft!==p&&(y.scrollLeft=p)},d=p=>{const y=X(t);if(!y)return;const{clientWidth:C,scrollWidth:x}=y;o(p/x*C||0)};return{handleScroll:(p,y)=>{const C=p==null?void 0:p.currentTarget,x=y??C.scrollLeft,w=c.value;if((!w||w===C)&&(i(C),u(x,e.value),u(x,X(t)),u(x,l.value),d(x)),C){const{scrollWidth:m,clientWidth:f}=C;n.value=x>0,a.value=x<m-f}},pingedStart:n,pingedEnd:a}}function Et(e,t,l,o){const n=O(!0),a=()=>{const c=X(l.value);c?n.value=c.scrollHeight>c.clientHeight:n.value=!1};let s=[];const r=()=>s.forEach(c=>c());return se(()=>{L([t,()=>e.virtual],([c,i])=>{r(),c&&!i&&(s=[ie(l,a),ie(o,a)])},{immediate:!0})}),Q(()=>r()),n}function $t(e,t,l,o,n,a){const s=g(()=>e.scrollToTopOnChange??t.scrollToTopOnChange);let r=[];const c=()=>{r=[L([()=>{var u;return(u=l.value)==null?void 0:u.pageIndex},()=>{var u;return(u=l.value)==null?void 0:u.pageSize}],()=>a(0)),L([n,o],([u,d],[v,p])=>{(!Tt(u,v)||!Ot(d,p))&&a(0)})]},i=()=>{r.forEach(u=>u())};L(s,u=>{i(),u&&c()},{immediate:!0})}function Tt(e,t){return e.length===t.length&&e.every(l=>{const o=t.find(n=>n.key===l.key);return o?l.filter===o.filter&&l.filterBy.length===o.filterBy.length&&l.filterBy.every(n=>o.filterBy.includes(n)):!1})}function Ot(e,t){return e.length===t.length&&e.every(l=>{const o=t.find(n=>n.key===l.key);return o?l.sorter===o.sorter&&l.orderBy===o.orderBy&&l.multiple===o.multiple:!1})}function Wt(e,t,l,{mergedMap:o,paginatedMap:n}){const a=g(()=>l.value.find(m=>"type"in m&&m.type==="selectable")),[s,r]=ke(e,"selectedRowKeys",()=>[]),c=g(()=>{const{disabled:m}=a.value||{},f=[],h=[];return n.value.forEach((S,B)=>{m!=null&&m(S.record)?h.push(B):f.push(B)}),{enabledRowKeys:f,disabledRowKeys:h}}),i=g(()=>{const m=new Set,f=s.value,{disabledRowKeys:h}=c.value,S=o.value;return f.forEach(B=>{const{parentKey:E}=S.get(B)||{};if(!J(E)){let k=S.get(E);if(k&&!f.includes(k.rowKey))for(;k&&!J(k==null?void 0:k.rowKey);)h.includes(k.rowKey)||m.add(k.rowKey),k=J(k.parentKey)?void 0:S.get(k.parentKey)}}),[...m]}),u=g(()=>{const m=s.value,{disabledRowKeys:f}=c.value;let h=0;return n.value.forEach((S,B)=>{!f.includes(B)&&m.includes(B)&&h++},0),h}),d=g(()=>{const m=n.value.size,f=c.value.disabledRowKeys.length;return m===0||m===f?!1:m===f+u.value}),v=g(()=>!d.value&&u.value>0),p=m=>{r(m);const f=o.value,{onChange:h}=a.value||{};if(h){const S=[];m.forEach(B=>{const E=f.get(B);E&&S.push(E.record)}),z(h,m,S)}},y=(m,f)=>{const h=o.value,{disabledRowKeys:S}=c.value,{multiple:B,onSelect:E}=a.value||{};let k=[...s.value];const $=k.indexOf(m),F=$>=0;if(B){const A=h.get(m),H=Me(A,S);if(F){k.splice($,1);const W=Pt(h,A,S);k=k.filter(K=>!W.includes(K)&&!H.includes(K))}else k.push(m),k.push(...H);Rt(h,A,k,S)}else k=F?[]:[m];z(E,!F,f),p(k)},C=()=>{const{enabledRowKeys:m}=c.value,f=new Set(s.value);d.value?m.forEach(h=>f.delete(h)):m.forEach(h=>f.add(h)),p([...f])},x=It(a,t),w=Ft(a,o,n,s,p);return{selectable:a,selectedRowKeys:s,indeterminateRowKeys:i,currentPageRowKeys:c,currentPageAllSelected:d,currentPageSomeSelected:v,handleSelectChange:y,handleHeadSelectChange:C,mergedSelectableMenus:x,handleSelectableMenuClick:w}}function Me(e,t){const l=[],{children:o}=e||{};return o&&o.forEach(n=>{const{rowKey:a}=n;t.includes(a)||l.push(n.rowKey),l.push(...Me(n,t))}),l}function Pt(e,t,l){const o=[];for(;t!=null&&t.parentKey;){const{parentKey:n}=t;l.includes(t.parentKey)||o.push(n),t=e.get(n)}return o}function Rt(e,t,l,o){let n=!0;for(;n&&t&&!J(t.parentKey);){const a=e.get(t.parentKey);if(a&&!o.includes(t.parentKey)){n=a.children.every(r=>o.includes(r.rowKey)||l.includes(r.rowKey));const s=l.findIndex(r=>r===t.parentKey);n?s<0&&l.push(t.parentKey):s>-1&&l.splice(s,1)}t=a}}const Le=Symbol("IDUX_TABLE_KEY_selectable-all"),De=Symbol("IDUX_TABLE_KEY_selectable-invert"),Ne=Symbol("IDUX_TABLE_KEY_selectable-none"),je=Symbol("IDUX_TABLE_KEY_selectable-pageInvert");function It(e,t){return g(()=>{const{menus:l}=e.value||{};if(!l||l.length===0)return[];const{selectAll:o,selectInvert:n,selectNone:a,selectPageInvert:s}=t.table;return l.map(r=>j(r)?r==="all"?{type:"item",key:Le,label:o}:r==="invert"?{type:"item",key:De,label:n}:r==="none"?{type:"item",key:Ne,label:a}:r==="pageInvert"?{type:"item",key:je,label:s}:{type:"item",key:r,label:r}:r)})}function Ft(e,t,l,o,n){const a=()=>{const{disabled:u,onSelectAll:d}=e.value||{},v=[];t.value.forEach((p,y)=>{u!=null&&u(p.record)||v.push(y)}),z(d,v),n(v)},s=()=>{const{disabled:u,onSelectInvert:d}=e.value||{},v=[...o.value];t.value.forEach((p,y)=>{if(u!=null&&u(p.record))return;const C=v.indexOf(y);C>=0?v.splice(C,1):v.push(y)}),n(v),z(d,v)},r=()=>{const{onSelectNone:u}=e.value||{};z(u),n([])},c=()=>{const{disabled:u,onSelectPageInvert:d}=e.value||{},v=[],p=o.value;l.value.forEach((y,C)=>{u!=null&&u(y.record)||p.includes(C)||v.push(C)}),z(d,v),n(v)},i=new Map([[Le,a],[De,s],[Ne,r],[je,c]]);return u=>{const d=u.key;if(rt(d)&&i.has(d)){i.get(d)();return}const{disabled:v,onMenuClick:p}=e.value||{};if(!p)return;const y=[];l.value.forEach((C,x)=>{v!=null&&v(C.record)||y.push(x)}),z(p,u,y)}}function At(e){const t=g(()=>e.value.filter(s=>s.sortable)),l=ye({}),o=g(()=>t.value.some(s=>s.sortable.multiple!==void 0));L(t,(s,r)=>{s.forEach(c=>{const{key:i,sortable:u}=c,d=u.orderBy;if(d||l[i]===void 0){l[i]=d;return}const v=r?r.find(y=>y.key===i):void 0;(v==null?void 0:v.sortable.orderBy)&&(l[i]=void 0)})},{immediate:!0});const n=g(()=>t.value.map(s=>{const{key:r,sortable:c}=s,{multiple:i=0,orderBy:u=l[r],sorter:d}=c;return{key:r,multiple:i,orderBy:u,sorter:d}}).filter(s=>s.orderBy).sort((s,r)=>r.multiple-s.multiple));return{activeSorters:n,activeOrderByMap:l,handleSort:(s,r)=>{const{orders:c,onChange:i}=r,u=l[s],d=u?xe(c,u):xe(c);o.value?l[s]=d:Object.keys(l).forEach(v=>{s===v?l[v]=d:l[v]=void 0}),z(i,d,n.value)}}}function xe(e,t){return t?e[e.indexOf(t)+1]:e[0]}function Ht(e){const t=g(()=>!!e.sticky),l=g(()=>{const{sticky:a}=e,{offsetTop:s=0,offsetBottom:r=0,offsetScroll:c=0,container:i=window}=ct(a)?a:{};return{offsetTop:s,offsetBottom:r,offsetScroll:c,container:i}}),[o,n]=oe(0);return{isSticky:t,mergedSticky:l,stickyScrollLeft:o,setStickyScrollLeft:n}}function _t(e,{hasEllipsis:t,hasFixed:l},{scrollWidth:o,scrollHeight:n},a,s){return g(()=>e.tableLayout?e.tableLayout:o.value&&l.value?o.value==="max-content"?"auto":"fixed":n.value||s.value||a.value||t.value||e.virtual?"fixed":"auto")}const _=Symbol("TABLE_TOKEN"),me=Symbol("tableBodyToken"),ne=I({props:{isFixedHolder:Boolean},setup(e){const{flattedColumns:t,flattedColumnsWithScrollBar:l,columnWidthsWithScrollBar:o,mergedSelectableMenus:n,mergedPrefixCls:a}=R(_);return()=>{const{isFixedHolder:s}=e,r=s?l.value:t.value;if(r.every(u=>!u.width&&!u.type))return;const c=a.value,i=r.map((u,d)=>{const{key:v,type:p}=u,y=s?o.value[d]:u.width,C=p?Y({[`${c}-col-${p}`]:!0,[`${c}-col-with-dropdown`]:p==="selectable"&&n.value.length>0}):void 0;let x;return s?x=y?`width: ${M(y)}`:void 0:x={width:M(y),minWidth:M(u.minWidth),maxWidth:M(u.maxWidth)},b("col",{key:v,class:C,style:x},null)});return b("colgroup",null,[i])}}}),zt=I({props:{offsetTop:{type:Number,default:void 0},offsetBottom:{type:Number,default:void 0}},setup(e,{slots:t}){const{mergedPrefixCls:l,scrollHeadRef:o,handleScroll:n,scrollWidth:a,flattedData:s,isSticky:r,columnWidths:c}=R(_);Mt(o,n);const i=g(()=>a.value==="max-content"),u=g(()=>s.value.length>0),d=g(()=>{const y=l.value;return{[`${y}-fixed-holder`]:!0,[`${y}-sticky-holder`]:r.value}}),v=g(()=>{const y=r.value,{offsetTop:C,offsetBottom:x}=e;return{overflow:"hidden",top:y?M(C):void 0,bottom:y?M(x):void 0}}),p=g(()=>({tableLayout:"fixed",visibility:u.value&&!c.value.length?"hidden":void 0}));return()=>b("div",{class:d.value,style:v.value,ref:o},[b("table",{style:p.value},[(u.value||!i.value)&&b(ne,{isFixedHolder:!0},null),t.default&&t.default()])])}});function Mt(e,t){const l=o=>{const n=o.deltaX,a=o.currentTarget;if(n){const s=a.scrollLeft+n;t(o,s),o.preventDefault()}};se(()=>ee(e.value,"wheel",l,{passive:!0})),Q(()=>G(e.value,"wheel",l))}const Lt=I({setup(){const{mergedPrefixCls:e,scrollBodyRef:t,handleScroll:l,mergedSticky:o,stickyScrollLeft:n,setStickyScrollLeft:a}=R(_),s=O(!1),r=O(!1),c=O(0),i=O(0),u=O(0),d=g(()=>{const f=i.value,h=u.value;return h&&f*(f/h)});Te(()=>{const f=X(t);if(f&&s.value){const{clientWidth:h,scrollWidth:S,scrollLeft:B}=f;a(B/S*h),i.value=h,u.value=S}});const v=g(()=>({height:ce(),width:i.value,bottom:o.value.offsetScroll})),p=g(()=>{const f=e.value;return{[`${f}-sticky-scrollbar-thumb`]:!0,[`${f}-sticky-scrollbar-thumb-active`]:r.value}}),y=g(()=>({width:`${d.value}px`,transform:`translate3d(${n.value}px, 0, 0)`})),C=()=>r.value=!1,x=f=>{c.value=f.pageX-n.value,r.value=!0,f.preventDefault()},w=f=>{if(!r.value)return;const{buttons:h}=f||window.event;if(h===0){r.value=!1;return}let S=f.pageX-c.value;S<=0&&(S=0);const B=i.value,E=u.value,k=d.value;S+k>=B&&(S=B-k);const $=S/B*(E+2);l(f,$)},m=()=>{const f=X(t),h=ge(f).top,S=h+f.offsetHeight,{container:B,offsetScroll:E}=o.value,k=B===window?document.documentElement.scrollTop+window.innerHeight:ge(B).top+B.clientHeight;S-ce()<=k||h>=k-E?s.value=!1:s.value=!0};return se(()=>{ee(document.body,"mouseup",C),ee(document.body,"mousemove",w),ee(window,"resize",m),L(()=>o.value.container,(f,h)=>{G(h,"scroll",m),ee(f,"scroll",m)},{immediate:!0}),m()}),Q(()=>{G(document.body,"mouseup",C),G(document.body,"mousemove",w),G(window,"resize",m),G(o.value.container,"scroll",m)}),()=>!t.value||!s.value||u.value<=i.value||!d.value?null:b("div",{class:`${e.value}-sticky-scrollbar`,style:v.value},[b("div",{class:p.value,style:y.value,onMousedown:x},null)])}}),fe=I({props:{isEmpty:Boolean},setup(e,{slots:t}){const{mergedPrefixCls:l,flattedColumns:o,hasFixed:n,scrollWidth:a,scrollBarColumn:s}=R(_),{mainTableWidth:r}=R(me),c=g(()=>o.value.length);return()=>{let i=t.default();if(e.isEmpty?a.value:n.value){const u=s.value;i=b("div",{class:`${l.value}-fixed-row`,style:{width:M(r.value-(u?u.width:0)),position:"sticky",left:0,overflow:"hidden"}},[i])}return b("tr",null,[b("td",{colSpan:c.value},[i])])}}}),Dt={expandedRowKeys:{type:Array,default:void 0},selectedRowKeys:{type:Array,default:void 0},autoHeight:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},columns:{type:Array,default:()=>[]},customAdditional:{type:Object,default:void 0},customTag:{type:Object,default:void 0},dataSource:{type:Array,default:()=>[]},ellipsis:{type:[Boolean,Object],default:!1},empty:{type:[String,Object],default:"default"},emptyCell:{type:[String,Function],default:void 0},getKey:{type:[String,Function],default:void 0},header:{type:[String,Object],default:void 0},headless:{type:Boolean,default:void 0},pagination:{type:[Boolean,Object],default:!0},scroll:{type:Object,default:void 0},size:{type:String,default:void 0},spin:{type:[Boolean,Object],default:void 0},sticky:{type:[Boolean,Object],default:void 0},scrollToTopOnChange:{type:Boolean,default:void 0},tableLayout:{type:String,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:expandedRowKeys":[Function,Array],"onUpdate:selectedRowKeys":[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},Nt={columns:{type:Array,required:!0}},jt={column:{type:Object,required:!0}},Ut={expanded:{type:Boolean,default:void 0},rowIndex:{type:Number,required:!0},level:{type:Number,default:void 0},record:{type:Object,required:!0},rowData:{type:Object,required:!0},rowKey:{type:[String,Number,Symbol],required:!0}},qt={column:{type:Object,required:!0},colIndex:{type:Number,required:!0},level:{type:Number,default:void 0},record:{type:Object,required:!0},rowIndex:{type:Number,required:!0},disabled:{type:Boolean,default:void 0},expanded:{type:Boolean,default:void 0},handleExpend:{type:Function,default:void 0},selected:{type:Boolean,default:void 0},indeterminate:{type:Boolean,default:void 0},handleSelect:{type:Function,default:void 0}},Xt={cellKey:{type:[String,Number,Symbol],required:!0},changeColumnWidth:{type:Function,required:!0}},Vt={activeFilterBy:{type:Array,required:!0},filterable:{type:Object,required:!0},onUpdateFilterBy:{type:Function,required:!0}},Yt={activeOrderBy:{type:String,default:void 0},sortable:{type:Object,required:!0}},Gt=I({props:Xt,setup(e){const t=O();return ie(t,o=>{const{offsetWidth:n}=o.target;e.changeColumnWidth(e.cellKey,n)}),Q(()=>{e.changeColumnWidth(e.cellKey,!1)}),()=>b("td",{ref:t,style:{padding:0,border:0,height:0}},[b("div",{style:{height:0,overflow:"hidden"}},[it(" ")])])}}),Jt=I({setup(){const{mergedPrefixCls:e,flattedColumns:t}=R(_),{changeColumnWidth:l}=R(me);return()=>{const o=t.value.map(n=>{const{key:a}=n;return b(Gt,{key:a,cellKey:a,changeColumnWidth:l},null)});return b("tr",{class:`${e.value}-measure-row`,style:{fontSize:0,height:0},"aria-hidden":!0},[o])}}}),Qt=I({props:qt,setup(e){const{props:t,slots:l,mergedPrefixCls:o,mergedEmptyCell:n,activeOrderByMap:a,fixedColumnKeys:s,columnOffsets:r,isSticky:c,expandable:i,selectable:u}=R(_),d=g(()=>a[e.column.key]),v=Zt(e),p=g(()=>s.value.lastStartKey===e.column.key),y=g(()=>s.value.firstEndKey===e.column.key),C=g(()=>{const{type:f,ellipsis:h}=e.column;return f?h:h??t.ellipsis}),x=g(()=>{const{fixed:f,align:h}=e.column,S=o.value;let B={[`${S}-cell`]:!0,[`${S}-cell-sorted`]:!!d.value,[`${S}-cell-align-${h}`]:!!h&&h!="start",[`${S}-cell-ellipsis`]:!!C.value};return f&&(B={...B,[`${S}-fix-start`]:f==="start",[`${S}-fix-start-last`]:p.value,[`${S}-fix-end`]:f==="end",[`${S}-fix-end-first`]:y.value,[`${S}-fix-sticky`]:c.value}),Y(B)}),w=g(()=>{const{fixed:f}=e.column;if(!f)return;const{starts:h,ends:S}=r.value,E=M((f==="start"?h:S)[e.colIndex]);return{position:"sticky",left:f==="start"?E:void 0,right:f==="end"?E:void 0}}),m=f=>{f.stopPropagation()};return()=>{var F,A;const{column:f}=e,{type:h}=f;let S,B;if(h==="selectable")S=ll(e,l,u,m);else{const H=v.value;if(S=el(e,l,H),B=Re(C.value,S,H),!h&&(J(S)||S==="")){const W=l.emptyCell||n.value;S=V(W)?W({column:f,record:e.record,rowIndex:e.rowIndex}):W}}e.column.fixed&&C.value&&(p.value||y.value)&&(S=b("span",{class:`${o.value}-cell-content`},[S]));const E=(F=t.customAdditional)==null?void 0:F.bodyCell,k=E?E({column:f,record:e.record,rowIndex:e.rowIndex}):void 0,$=((A=t.customTag)==null?void 0:A.bodyCell)??"td";return b($,Z({class:x.value,style:w.value,title:B},k),{default:()=>[h==="expandable"&&tl(e,l,i,o.value),S]})}}});function Zt(e){return g(()=>{const{column:t,record:l}=e,o=ve(t.dataKey);if(o.length<=0)return;let n=l;for(let a=0;a<o.length&&n;a++){const s=o[a];n=n[s]}return n})}function el(e,t,l){const{record:o,rowIndex:n,column:a}=e,{customCell:s}=a,r=j(s)?t[s]:s;return r?r({value:l,record:o,rowIndex:n}):l}function tl(e,t,l,o){const{icon:n,customIcon:a,indent:s}=l.value,{record:r,expanded:c,level:i=0,disabled:u}=e,d={marginLeft:s?M(i*s):void 0};let v;return u?v=null:V(a)?v=a({expanded:!!c,record:r}):j(a)&&t[a]?v=t[a]({expanded:c,record:r}):(v=V(n)?n({expanded:c,record:r}):n,j(v)&&(v=b(te,{name:v,rotate:c?90:0},null))),b("button",{class:`${o}-expandable-trigger`,style:d,type:"button",onClick:e.handleExpend},[v])}function ll(e,t,l,o){const{selected:n,indeterminate:a,disabled:s,handleSelect:r}=e,{multiple:c,customCell:i}=l.value,u=j(i)?t[i]:i;if(c){const d={checked:n,disabled:s,indeterminate:a,onChange:r,onClick:o};return u?u(d):b(he,d,null)}else{const d={checked:n,disabled:s,onChange:r,onClick:o};return u?u(d):b(We,d,null)}}const nl=I({props:Ut,setup(e){const{props:t,mergedPrefixCls:l,flattedColumns:o,expandable:n,handleExpandChange:a,checkExpandDisabled:s,selectable:r,selectedRowKeys:c,indeterminateRowKeys:i,handleSelectChange:u,currentPageRowKeys:d}=R(_),{expandDisabled:v,handleExpend:p,selectDisabled:y,handleSelect:C,clickEvents:x}=ol(e,n,s,a,r,u,d),w=g(()=>c.value.includes(e.rowKey)),m=g(()=>i.value.includes(e.rowKey)),f=g(()=>{const h=`${l.value}-row`,{level:S,expanded:B}=e;return Y({[`${h}`]:!0,[`${h}-level-${S}`]:!!S,[`${h}-selected`]:w.value,[`${h}-expanded`]:B})});return()=>{var E,k;const h=(E=t.customAdditional)==null?void 0:E.bodyRow,S=h?h({record:e.record,rowIndex:e.rowIndex}):void 0,B=((k=t.customTag)==null?void 0:k.bodyRow)??"tr";return b(B,Z({class:f.value},x.value,S),{default:()=>[sl(e,o,v.value,p,w,m,y,C)]})}}});function ol(e,t,l,o,n,a,s){const r=g(()=>l(e.rowData)),c=g(()=>{var x;return(x=t.value)==null?void 0:x.trigger}),i=()=>{const{rowKey:x,record:w}=e;o(x,w)},u=g(()=>s.value.disabledRowKeys.includes(e.rowKey)),d=g(()=>{var x;return(x=n.value)==null?void 0:x.trigger}),v=()=>{const{rowKey:x,record:w}=e;a(x,w)},p=()=>{c.value==="click"&&!r.value&&i(),d.value==="click"&&!u.value&&v()},y=()=>{c.value==="dblclick"&&!r.value&&i(),d.value==="dblclick"&&!u.value&&v()},C=g(()=>{const x=c.value==="click"||d.value==="click"?p:void 0,w=c.value==="dblclick"||d.value==="dblclick"?y:void 0;return{onClick:x,onDblclick:w}});return{expandDisabled:r,handleExpend:i,selectDisabled:u,handleSelect:v,clickEvents:C}}function sl(e,t,l,o,n,a,s,r){const c=[],{rowIndex:i,record:u,level:d}=e;return t.value.forEach((v,p)=>{const{type:y,colSpan:C,rowSpan:x,key:w}=v,m=C==null?void 0:C(u,i),f=x==null?void 0:x(u,i);if(m===0||f===0)return;const h={colSpan:m===1?void 0:m,rowSpan:f===1?void 0:f,rowIndex:i,colIndex:p,record:u,column:v,level:d,key:w};y==="expandable"?(h.expanded=e.expanded,h.disabled=l,h.handleExpend=o):y==="selectable"&&(h.selected=n.value,h.indeterminate=a.value,h.disabled=s.value,h.handleSelect=r),c.push(b(Qt,h,null))}),c}function Ue(e,t,l,o,n){const{expanded:a,level:s,record:r,rowKey:c}=e,i={key:c,expanded:a,level:s,record:r,rowData:e,rowIndex:t,rowKey:c},u=b(nl,i,null),d=a&&al(i,l,o,n);return d?[u,d]:u}function al(e,t,l,o){const{customExpand:n}=l||{},{record:a,rowIndex:s}=e;let r;return V(n)?r=n({record:a,rowIndex:s}):j(n)&&t[n]&&(r=t[n]({record:a,rowIndex:s})),r&&b(fe,{class:`${o}-expanded-row`},{default:()=>[r]})}const re=I({setup(e,{slots:t}){const{props:l,slots:o,mergedPrefixCls:n,mergedAutoHeight:a,flattedData:s,expandable:r,scrollWidth:c,scrollHeight:i,isSticky:u}=R(_),d=g(()=>a.value||c.value||i.value||u.value);return()=>{const v=n.value,p=[];o.alert&&p.push(b(fe,{class:`${v}-alert-row`},{default:()=>[o.alert()]}));const y=s.value;return y.length>0?t.default?p.push(...t.default()):y.forEach((C,x)=>{p.push(...ve(Ue(C,x,o,r.value,v)))}):p.push(b(fe,{class:`${v}-empty-row`,isEmpty:!0},{default:()=>[b(Ge,{empty:l.empty},o)]})),b("tbody",{class:`${n.value}-tbody`},[d.value&&b(Jt,null,null),p])}}}),rl=I({props:Vt,setup(e){const{slots:t,config:l,locale:o,mergedPrefixCls:n}=R(_),a=g(()=>e.filterable.multiple??l.columnBase.filterable.multiple),s=g(()=>e.filterable.footer??l.columnBase.filterable.footer),r=e.activeFilterBy,[c,i]=oe(()=>r);L(()=>e.activeFilterBy,f=>i(f));const[u,d]=oe(!1),v=f=>{d(f),f||e.onUpdateFilterBy(c.value)},p=()=>{d(!1),e.onUpdateFilterBy(c.value)},y=()=>{i(r)},C=f=>{const h=`${n.value}-filterable-menu-label`,S=a.value?he:We;return b("span",{class:h},[b(S,{checked:f.selected,disabled:f.disabled},null),b("span",{class:`${h}-content`},[f.label])])},x=()=>{const f=[],{customMenu:h,menus:S}=e.filterable;return V(h)?f.push(h()):j(h)&&t[h]?f.push(t[h]()):f.push(cl(S,a,c,i,C)),s.value&&f.push(il(o,n,p,y)),f},w=g(()=>{const f=`${n.value}-filterable-trigger`;return Y({[f]:!0,[`${f}-active`]:e.activeFilterBy.length>0})}),m=()=>{const{customTrigger:f}=e.filterable;return V(f)?f():j(f)&&t[f]?t[f]():b("span",{class:w.value,onClick:h=>h.stopPropagation()},[b(te,{name:"filter-filled"},null)])};return()=>{const f={visible:u.value,hideOnClick:!s.value,placement:"bottomEnd",trigger:"click","onUpdate:visible":v};return b(Be,f,{default:m,overlay:x})}}}),cl=(e,t,l,o,n)=>{const a={dataSource:e,multiple:t.value,selectable:!0,selectedKeys:l.value,"onUpdate:selectedKeys":o};return b(Ke,a,{itemLabel:n})},il=(e,t,l,o)=>{const{filterConfirm:n,filterReset:a}=e.table;return b("div",{class:`${t.value}-filterable-trigger-footer`},[b(be,{mode:"primary",size:"xs",onClick:l},{default:()=>[n]}),b(be,{size:"xs",onClick:o},{default:()=>[a]})])},ul=I({setup(){const{mergedPrefixCls:e,paginatedMap:t,selectable:l,currentPageRowKeys:o,currentPageAllSelected:n,currentPageSomeSelected:a,handleHeadSelectChange:s,mergedSelectableMenus:r,handleSelectableMenuClick:c}=R(_),i=g(()=>{const x=t.value.size;return x===0||x===o.value.disabledRowKeys.length}),[u,d]=oe(!1),v={"onUpdate:visible":d,trigger:"click"},p=()=>b(Ke,{dataSource:r.value,onClick:c},null),y=()=>b(te,{class:`${e.value}-selectable-trigger`,name:"down",rotate:u.value?180:0},null),C=()=>{if(r.value.length!==0)return b(Be,v,{default:y,overlay:p})};return()=>{const{multiple:x}=l.value;if(x)return b("span",{class:`${e.value}-cell-triggers`},[b(he,{checked:n.value,indeterminate:a.value,disabled:i.value,onChange:s},null),C()])}}}),dl=I({props:Yt,setup(e){const{locale:t,mergedPrefixCls:l}=R(_);return()=>{const{activeOrderBy:o,sortable:n}=e,{orders:a,nextTooltip:s}=n,r=s&&fl(t.table,a,o),c=vl(l,a,o);return r?b(Je,{title:r},{default:()=>[c]}):c}}});function fl(e,t,l){const o=l?t[t.indexOf(l)+1]:t[0],{sortCancel:n,sortAsc:a,sortDesc:s}=e;return o?o==="ascend"?a:s:n}function vl(e,t,l){const o=e.value,n=`${o}-sortable-trigger-active`,a=t.includes("ascend")&&b(te,{name:"caret-up-filled",class:l==="ascend"?n:void 0},null),s=t.includes("descend")&&b(te,{name:"caret-down-filled",class:l==="descend"?n:void 0},null);return b("span",{class:`${o}-sortable-trigger`},[a,s])}const hl=I({props:jt,setup(e){const{props:t,slots:l,mergedPrefixCls:o,fixedColumnKeys:n,columnOffsetsWithScrollBar:a,isSticky:s,handleSort:r,activeOrderByMap:c,activeFilterByMap:i,handleFilter:u}=R(_),d=g(()=>{const{type:m,ellipsis:f}=e.column,h=m?f:f??t.ellipsis;return Ee(h)&&h.head===!1?void 0:h}),v=g(()=>{const{type:m,align:f,fixed:h,hasChildren:S,key:B,sortable:E,filterable:k}=e.column,$=o.value;let F={[`${$}-cell`]:!0,[`${$}-cell-${m}`]:!!m,[`${$}-cell-filterable`]:!!k,[`${$}-cell-sortable`]:!!E,[`${$}-cell-align-center`]:S||f==="center",[`${$}-cell-align-end`]:!S&&f==="end",[`${$}-cell-ellipsis`]:!!d.value};if(h){const{lastStartKey:A,firstEndKey:H}=n.value;F={...F,[`${$}-fix-start`]:h==="start",[`${$}-fix-start-last`]:A===B,[`${$}-fix-end`]:h==="end",[`${$}-fix-end-first`]:H===B,[`${$}-fix-sticky`]:s.value}}return Y(F)}),p=g(()=>{const{fixed:m,colStart:f,colEnd:h}=e.column;if(!m)return;const{starts:S,ends:B}=a.value,$=M((m==="start"?S:B)[m==="start"?f:h]);return{position:"sticky",left:m==="start"?$:void 0,right:m==="end"?$:void 0}}),y=g(()=>c[e.column.key]),C=g(()=>i[e.column.key]),x=m=>{const{key:f,filterable:h}=e.column;u(f,h,m)},w=()=>{const{key:m,sortable:f}=e.column;f&&r(m,f)};return()=>{var H,W;const{column:m}=e,{type:f,titleColSpan:h,titleRowSpan:S}=m;if(f==="scroll-bar")return b("th",{class:v.value,style:p.value,colspan:h===1?void 0:h,rowspan:S===1?void 0:S,onClick:w},null);const B=o.value;let E,k;if(f==="selectable")k=b(ul,null,null);else{const{title:K,customTitle:T,sortable:P,filterable:U}=m,D=d.value;k=yl(K,T,l),E=Re(D,k,K);const N=pl(P,y,U,C,x);N.length>0?k=b("span",{class:`${B}-cell-triggers`},[b("span",{class:`${B}-cell-title`},[k]),N]):D&&(k=b("span",{class:`${B}-cell-title`},[k]))}const $=(H=t.customAdditional)==null?void 0:H.headCell,F=$?$({column:m}):void 0,A=((W=t.customTag)==null?void 0:W.headCell)??"th";return b(A,Z({class:v.value,style:p.value,colSpan:h===1?void 0:h,rowSpan:S===1?void 0:S,title:E},F,{onClick:w}),{default:()=>[k]})}}});function yl(e,t,l){let o=e;return V(t)?o=t({title:e}):j(t)&&l[t]&&(o=l[t]({title:e})),o}function pl(e,t,l,o,n){const a=[];return e&&a.push(b(dl,{activeOrderBy:t.value,sortable:e},null)),l&&a.push(b(rl,{activeFilterBy:o.value,filterable:l,onUpdateFilterBy:n},null)),a}const ml=I({props:Nt,setup(e){const{props:t,mergedPrefixCls:l}=R(_);return()=>{var r,c;const{columns:o}=e,n=(r=t.customAdditional)==null?void 0:r.headRow,a=n?n({columns:o}):void 0,s=((c=t.customTag)==null?void 0:c.headRow)??"tr";return b(s,Z({class:`${l.value}-row`},a),{default:()=>[o.filter(i=>i.titleColSpan!==0).map(i=>b(hl,{key:i.key,column:i},null))]})}}}),Ce=I({setup(){const{props:e,mergedRows:t,mergedPrefixCls:l}=R(_);return()=>{var r,c;const o=t.value,n=(r=e.customAdditional)==null?void 0:r.head,a=n?n({rows:o}):void 0,s=((c=e.customTag)==null?void 0:c.head)??"thead";return b(s,Z({class:`${l.value}-thead`},a),{default:()=>[o.map((i,u)=>b(ml,{key:u,columns:i},null))]})}}}),gl=I({setup(){const{props:e,slots:t,expandable:l,mergedPrefixCls:o,mergedVirtualItemHeight:n,mergedAutoHeight:a,columnWidths:s,changeColumnWidth:r,flattedData:c,isSticky:i,mergedSticky:u,virtualScrollRef:d,scrollBodyRef:v,scrollContentRef:p,handleScroll:y,pingedStart:C,pingedEnd:x,scrollWidth:w,scrollHeight:m,hasFixed:f,tableLayout:h}=R(_),S=O(),B=O(0);Oe(me,{mainTableWidth:B,changeColumnWidth:(K,T)=>{tt(S.value)&&r(K,T)}});const k=()=>{const K=X(v);K&&y({currentTarget:K})},$=K=>{const{offsetWidth:T}=K.target;T!==B.value&&(B.value=T)};se(()=>{k(),L([()=>e.dataSource,w],([,T])=>{T&&k()}),L(s,$e(()=>{var P;((P=X(v))==null?void 0:P.scrollLeft)===0&&k()},16)),Qe(S.value,$)}),Q(()=>Ze(S.value,$));const F=g(()=>{const K=o.value;return Y({[`${K}-container`]:!0,[`${K}-ping-start`]:C.value,[`${K}-ping-end`]:x.value,[`${K}-fixed-layout`]:h.value==="fixed",[`${K}-fixed-column`]:f.value,[`${K}-scroll-horizontal`]:w.value,[`${K}-scroll-vertical`]:m.value})}),A=g(()=>{var N;const K=w.value,T=m.value,P=K?"auto":void 0,U=e.virtual?"hidden":T?"scroll":K?"hidden":void 0,D=(N=e.scroll)==null?void 0:N.fullHeight;return{overflowX:P,overflowY:U,[D?"height":"maxHeight"]:T}}),H=g(()=>({tableLayout:h.value,width:w.value,minWidth:w.value?"100%":void 0})),W=(K,T,P)=>{z(e.onScrolledChange,K,T,P.map(U=>U.record))};return()=>{const K=o.value,T=a.value,P=t.default?t.default():[];if(T||m.value||i.value){const{offsetTop:U}=u.value;if(e.headless||P.push(b(zt,{offsetTop:U},{default:()=>[b(Ce,null,null)]})),e.virtual&&(e.scroll||T)){const D=({item:ae,index:Xe})=>Ue(ae,Xe,t,l.value,K),N=ae=>b("table",{ref:p,class:`${K}-table`,style:H.value},[b(ne,null,null),b(re,null,{default:()=>[ae]}),!1]),{scroll:q,onScrolledBottom:qe}=e;P.push(b(et,{ref:d,style:A.value,dataSource:c.value,fullHeight:q==null?void 0:q.fullHeight,getKey:"rowKey",height:a.value?"100%":q==null?void 0:q.height,itemHeight:n.value,itemRender:D,contentRender:N,virtual:!0,onScroll:y,onScrolledBottom:qe,onScrolledChange:W},null))}else P.push(b("div",{ref:v,class:`${K}-content`,style:A.value,onScroll:y},[b("table",{ref:p,class:`${K}-table`,style:H.value},[b(ne,null,null),b(re,null,null),!1])]));i.value&&P.push(b(Lt,null,null))}else P.push(b("div",{ref:v,class:`${K}-content`,style:A.value,onScroll:y},[b("table",{ref:p,class:`${K}-table`,style:H.value},[b(ne,null,null),!e.headless&&b(Ce,null,null),b(re,null,null),!1])]));return b("div",{ref:S,class:F.value},[P])}}});function bl(e,t){return e.footer?b("div",{class:`${t}-footer`},[e.footer()]):null}function Sl(e,t,l){let o=null,n=null;if(e!==null){const{position:a}=e,[s,r]=ut(a).split("-"),c=`${l}-pagination ${l}-pagination-${r}`,i=b(ft,Z({class:c,total:t.length},e),null);o=s==="top"?i:null,n=s==="bottom"?i:null}return[o,n]}const xl={sm:32,md:40,lg:56},Cl={sm:40,md:48,lg:56},wl=I({name:"IxTable",props:Dt,setup(e,{expose:t,slots:l}){const o=le("common"),n=g(()=>`${o.prefixCls}-table`),a=le("locale"),s=le("table"),r=g(()=>e.autoHeight??s.autoHeight),c=g(()=>e.childrenKey??s.childrenKey),i=lt(e,s),u=g(()=>e.emptyCell??s.emptyCell),d=g(()=>e.size??s.size),v=g(()=>o.theme==="seer"?xl[d.value]:Cl[d.value]),{mergedPagination:p}=kt(e,s,d),y=Ht(e),C=Bt(e,r,y),x=ht(e,l,s,C.scrollBarSizeOnFixedHolder),w=At(x.flattedColumns),m=wt(x.flattedColumns),f=Ct(e,x.flattedColumns),h=_t(e,x,C,y.isSticky,r),{activeSorters:S}=w,{activeFilters:B}=m,E=xt(e,c,i,S,B,f.expandedRowKeys,p),k=Wt(e,a,x.flattedColumns,E);$t(e,s,p,S,B,C.scrollTo);const $={props:e,slots:l,config:s,locale:a,mergedPrefixCls:n,mergedEmptyCell:u,mergedVirtualItemHeight:v,mergedAutoHeight:r,...x,...C,...w,...m,...y,tableLayout:h,mergedPagination:p,...f,...E,...k};Oe(_,$),t({scrollTo:C.scrollTo});const{flattedData:F,filteredData:A}=E,H=g(()=>{const W=n.value,{borderless:K=s.borderless,scroll:T}=e;return Y({[W]:!0,[`${W}-auto-height`]:r.value,[`${W}-borderless`]:K,[`${W}-empty`]:F.value.length===0,[`${W}-full-height`]:T==null?void 0:T.fullHeight,[`${W}-${d.value}`]:!0})});return()=>{const W=n.value,K=b(nt,{header:e.header},l),T=bl(l,W),[P,U]=Sl(p.value,A.value,W),D=[K],N=[P,b(gl,null,null),T,U].filter(Boolean),q=kl(e.spin);return q?D.push(b(ot,q,{default:()=>[N]})):D.push(...N),b("div",{class:H.value},[D])}}});function kl(e){return dt(e)?{spinning:e}:e}const Tl=wl,Ol=pe;export{Tl as I,Ol as a,vt as g};
