import{aM as Q,R as F,bg as oe,c as b,q as B,x as De,y as Ie,bk as Me,Q as be,$ as z,br as $e,bT as Be,bo as Te,H as Pe,d as W,i as Y,f as K,M as Ee,an as Oe,af as ye,as as ke,at as He,bs as qe,a4 as Re,al as Ue,n as _e,Z as ze,bq as je}from"./index-88a96bc2.js";import{u as We}from"./useTreeCheckState-42d24187.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n,t){if(t){const l=[],o=e.value;n.forEach(a=>{const d=o.get(a);d&&l.push(d.rawNode)}),F(t,n,l)}}function Se(e,n){const t=[],{children:l}=e||{};return l&&l.forEach(o=>{const{key:a}=o;n!=null&&n.includes(a)||t.push(o.key),t.push(...Se(o,n))}),t}function we(e,n,t){const l=[];for(;n&&!Q(n.parentKey);){const{parentKey:o}=n;t!=null&&t.includes(n.parentKey)||l.push(o),n=e.get(o)}return l}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ve(e,n,t,l,o){const[a,d]=oe(e,"checkedKeys",()=>[]),c=b(()=>({data:n.value,dataMap:t.value,parentKeyMap:l.value,depthMap:o.value})),g=B("children"),s=B(r=>r.key),f=b(()=>e.cascaderStrategy),h=B(r=>!!r.checkDisabled),{checkStateResolver:i,isChecked:C,isIndeterminate:m,toggle:w}=We(a,c,g,s,f,h),M=r=>{const{checked:v,checkedKeys:k}=w(r);r.checkDisabled||N(v,r.rawNode,k)},N=(r,v,k)=>{const{onCheck:S,onCheckedChange:u}=e;F(S,r,v),d(k),X(t,k,u)};return De(f,()=>{const r=i.appendKeys([],a.value);d(r),X(t,r,e.onCheckedChange)}),{checkedKeys:a,isChecked:C,isIndeterminate:m,handleCheck:M}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e,n,t,l){const o=B({}),a=(i,C)=>{o.value[i]=C},d=i=>o.value[i],c=b(()=>{const i=new Map,C=new Map,m=new Map;return{mergedNodes:Ne(e.dataSource,d,{props:e,childrenKey:n.value,getKey:t.value,labelKey:l.value,parentKey:void 0,parentLevel:-1,parentsDisabled:[]},{dataKeyMap:i,parentKeyMap:C,depthMap:m}),dataKeyMap:i,parentKeyMap:C,depthMap:m}}),g=b(()=>c.value.mergedNodes),s=b(()=>c.value.dataKeyMap),f=b(()=>c.value.parentKeyMap),h=b(()=>c.value.depthMap);return{mergedNodes:g,mergedNodeMap:s,parentKeyMap:f,depthMap:h,setLoadedNodes:a}}function Qe(e,{expandedKeys:n},t,l){const o=b(()=>{const{searchValue:c}=t,g=new Map(n.value.map((h,i)=>[h,i])),s=new Map(l.value.map((h,i)=>[h,i])),f=new Map;return c&&!s.size?{flattedNodes:[],flattenedNodeMap:f}:g.size||s.size?{flattedNodes:Ze(e.value,g,s,f),flattenedNodeMap:f}:{flattedNodes:e.value.map(h=>{const i={...h,expanded:!1,level:0};return f.set(i.key,i),i}),flattenedNodeMap:f}}),a=b(()=>o.value.flattedNodes),d=b(()=>o.value.flattenedNodeMap);return{flattedNodes:a,flattenedNodeMap:d}}function Ne(e,n,t,l){const{props:o,childrenKey:a,getKey:d,labelKey:c,parentKey:g,parentLevel:s,parentsDisabled:f}=t,{cascaderStrategy:h,disabled:i,loadChildren:C}=o,{dataKeyMap:m,parentKeyMap:w,depthMap:M}=l,N=!!C;return e.map((r,v)=>{var O,q,T;const k=d(r),S=Xe(r,i),u=(O=r[a])!=null?O:n(k),y=r[c],D=s+1,L=u&&Ne(u,n,{props:o,childrenKey:a,getKey:d,labelKey:c,parentKey:k,parentLevel:D,parentsDisabled:[S,...f!=null?f:[]]},l),I=Ye(S,f!=null?f:[],(q=L==null?void 0:L.map(R=>({check:R.checkDisabled,drag:R.dragDisabled,drop:R.dropDisabled,select:R.selectDisabled})))!=null?q:[],h!=="off"),E={label:y,key:k,children:L,isFirst:v===0,isLeaf:(T=r.isLeaf)!=null?T:!(u!=null&&u.length||N),isLast:v===e.length-1,parentKey:g,expanded:!1,level:D,rawNode:r,checkDisabled:I.check,dragDisabled:I.drag,dropDisabled:I.drop,selectDisabled:I.select};return m.set(k,E),w.set(k,g),M.set(k,D),E})}function Xe(e,n){const t=e.disabled||{};if(t===!0)return{check:!0,drag:!0,drop:!0,select:!0};let{check:l,drag:o,drop:a,select:d}=t;if(n){const c=n(e)||{};if(c===!0)return{check:!0,drag:!0,drop:!0,select:!0};l=l||c.check,o=o||c.drag,a=a||c.drop,d=d||c.select}return{check:l,drag:o,drop:a,select:d}}function Ye(e,n,t,l){const o=a=>e[a]||l&&(n.some(d=>!!d[a])||!!t.length&&t.every(d=>!!d[a]));return{check:o("check"),drag:o("drag"),drop:o("drop"),select:o("select")}}function Le(e=[],n){const t=[],l=e.length;return e.forEach((o,a)=>{o.isFirst=a===0,o.isLast=a===l-1,n.has(o.key)||n.size==0?(o.hidden=!1,t.push(o)):o.hidden=!0,Le(o.children,n).length>0&&(o.hidden=!1,t.push(o))}),t.length&&(t[0].isFirst=!0,t[t.length-1].isLast=!0),t}function Ze(e,n,t,l){const o=[],a=[];return Le(e,t),e.forEach(d=>{for(a.push({...d});a.length;){const c=a.pop();if(c){const{children:g,key:s,hidden:f}=c,h=n.has(s);if(c.expanded=h,!f&&o.push(c),l.set(c.key,c),g&&h)for(let i=g.length;i>0;i--)!g[i-1].hidden&&a.push(g[i-1])}}}),o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,n,{expandedKeys:t,setExpandedKeys:l}){const o=b(()=>{var u;return(u=e.draggableIcon)!=null?u:n.draggableIcon}),a=B(),d=B(),c=B(),g=B(),s=B();let f;const h=()=>{f&&(clearTimeout(f),f=void 0)};Ie(()=>h());const i=()=>{Q(a.value)||(a.value=void 0,d.value=void 0)},C=()=>{Q(c.value)||(c.value=void 0,g.value=void 0,s.value=void 0)},m=(u,y)=>{var D,L;return{evt:u,node:y.rawNode,dragNode:(D=a.value)==null?void 0:D.rawNode,dropNode:(L=c.value)==null?void 0:L.rawNode,dropType:s.value}},w=u=>{N(u,void 0),window.removeEventListener("dragend",w)},M=(u,y)=>{a.value=y,d.value=Se(y),nn(y.key,t.value,l),window.addEventListener("dragend",w),F(e.onDragstart,m(u,y))},N=(u,y)=>{y&&F(e.onDragend,m(u,y)),i(),C()},r=async(u,y)=>{const D=a.value;if(D){h(),D.key!==y.key&&(f=setTimeout(()=>{var I;a.value&&((I=y.children)!=null&&I.length)&&en(y.key,t.value,l),f=void 0},1e3));const L=await xe(y,D,d.value,u,e.droppable);L?(c.value=y,g.value=L!=="inside"?y.parentKey:void 0,s.value=L):C()}F(e.onDragenter,m(u,y))},v=async(u,y)=>{const D=a.value;if(D){const L=await xe(y,D,d.value,u,e.droppable);L?(c.value=y,g.value=L!=="inside"?y.parentKey:void 0,s.value=L):C()}F(e.onDragover,m(u,y))},k=(u,y)=>{const D=c.value;(D==null?void 0:D.key)===y.key&&!u.currentTarget.contains(u.relatedTarget)&&C(),F(e.onDragleave,m(u,y))},S=(u,y)=>{s.value||C(),F(e.onDrop,m(u,y)),i(),C()};return{draggableIcon:o,dragKey:b(()=>{var u;return(u=a.value)==null?void 0:u.key}),dropKey:b(()=>{var u;return(u=c.value)==null?void 0:u.key}),dropParentKey:g,dropType:s,handleDragstart:M,handleDragend:N,handleDragenter:r,handleDragover:v,handleDragleave:k,handleDrop:S}}function en(e,n,t){n.indexOf(e)===-1&&t([...n,e])}function nn(e,n,t){const l=n.indexOf(e);if(l!==-1){const o=[...n];o.splice(l,1),t(o)}}async function xe(e,n,t,l,o){const{key:a,children:d=[]}=e;if(n.key===a||t&&t.includes(a))return!1;const{clientY:c}=l,{top:g,height:s}=l.target.getBoundingClientRect(),f=c<g+s/2;let h;if(o){const i={evt:l,isTopHalf:f,dragNode:n.rawNode,dropNode:e.rawNode};h=await o(i)}return(h===void 0||h===!0)&&(d.length>0?h="inside":f?h="before":h="after"),h}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tn(e,n,t,{expandedKeys:l,handleExpand:o},{activeKey:a,handleSelect:d}){const c=B(!1);return{focused:c,handleFocus:i=>{c.value=!0,F(e.onFocus,i)},handleBlur:i=>{c.value=!0,F(e.onBlur,i)},handleKeydown:i=>{switch(i.code){case"ArrowUp":case"ArrowDown":i.preventDefault()}F(e.onKeydown,i)},handleKeyup:i=>{const C=i.code,m=a.value,w=t.value,M=w.length;if(m===void 0)["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(C)&&ve(a,w,0,M);else{const N=t.value,r=N.findIndex(v=>v.key===m);if(r===-1)return;switch(C){case"Enter":case"NumpadEnter":d(m);break;case"ArrowDown":ve(a,N,r+1,M);break;case"ArrowUp":ve(a,N,r-1,0,!0);break;case"ArrowLeft":{const{rawNode:v,key:k,parentKey:S}=N[r];if(v.isLeaf||!l.value.includes(k)){const u=S?n.value.get(S):void 0;u&&(a.value=u.key)}else o(k,v)}break;case"ArrowRight":{const{rawNode:v,key:k}=N[r];if(!l.value.includes(k))o(k,v);else for(let S=r+1;S<M;S++){const u=N[S];a.value=u.key;break}}break}}F(e.onKeyup,i)}}}function ve(e,n,t,l,o=!1){let a=t;for(;o?a>=l:a<l;){const d=n[a];if(d.selectDisabled)o?a--:a++;else{e.value=d.key;return}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function an(e,n,t,l,o,a){const d=b(()=>{var r;return(r=e.expandIcon)!=null?r:n.expandIcon}),[c,g]=oe(e,"expandedKeys",()=>[]),[s,f]=oe(e,"loadedKeys",()=>[]),h=B([]),i=({key:r,expanded:v,node:k})=>{if(Me(d.value))return be(z,{name:d.value,rotate:v?90:0});if($e(d.value))return d.value({key:r,expanded:v,node:k});if(Be(d.value))return be(z,{name:v?d.value[0]:d.value[1]})},C=r=>{if(!r||r.length<=0)return;const{onExpandedChange:v}=e,k=l.value,S=new Set(c.value);r.forEach(y=>{we(k,k.get(y)).forEach(D=>S.add(D))});const u=[...S];g(u),X(l,u,v)};De(o,C);const m=async(r,v)=>{var L;const{loadChildren:k}=e;if(h.value.includes(r))return;const S=t.value;if(!((L=v==null?void 0:v[S])!=null&&L.length)){if(!k||h.value.includes(r)||s.value.includes(r))return;h.value.push(r);const I=await k(v);h.value.splice(h.value.indexOf(r),1);const O=l.value.get(r);if(I!=null&&I.length){a(r,I),O.rawNode[S]=I;const q=[...s.value,r];f(q),F(e.onLoaded,q,v)}else return}const u=c.value.indexOf(r),y=u>=0,D=[...c.value];y?D.splice(u,1):D.push(r),w(y,v,D)},w=(r,v,k)=>{const{onExpand:S,onExpandedChange:u}=e;F(S,!r,v),g(k),X(l,k,u)},M=()=>{const r=[],v=[];l.value.forEach(k=>{k.isLeaf||(r.push(k.key),v.push(k.rawNode))}),F(e.onExpandedChange,r,v),g(r)},N=()=>{F(e.onExpandedChange,[],[]),g([])};return o.value.length&&C(o.value),{expandIconRenderer:i,expandedKeys:c,setExpandedKeys:g,expandAll:M,collapseAll:N,handleExpand:m,loadingKeys:h}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function on(e,n,t){const l=ln(e,t);return{searchedKeys:b(()=>{const{searchValue:a}=e;if(!a)return Te;const d=l.value,c=[];return n.value.forEach(g=>{d(g.rawNode,a)&&c.push(g.key)}),c})}}function ln(e,n){return b(()=>{var t;return(t=e.searchFn)!=null?t:rn(n.value)})}function rn(e){return(n,t)=>{const l=n[e];return l?l.toLowerCase().includes(t.toLowerCase()):!1}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function dn(e,n){const[t,l]=oe(e,"selectedKeys",()=>[]),o=b(()=>e.selectable==="multiple"),a=B();Pe(()=>{const s=t.value,f=s.length;a.value=f>0?s[f-1]:void 0});const d=b(()=>{const s=a.value;return s!==void 0?n.value.get(s):void 0}),c=s=>{const h=n.value.get(s);if(!h)return;const i=t.value.indexOf(s),C=i>-1;let m=[...t.value];o.value?C?m.splice(i,1):m.push(s):m=C?[]:[s],g(C,h.rawNode,m)},g=(s,f,h)=>{var w;const{onSelect:i,onSelectedChange:C}=e,m=h.includes((w=f.key)!=null?w:"")?!0:!s;F(i,m,f),l(h),X(n,h,C)};return{activeKey:a,activeNode:d,selectedKeys:t,handleSelect:c}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=Symbol("treeToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const cn={autoHeight:{type:Boolean,default:void 0},checkedKeys:Array,expandedKeys:Array,indeterminateKeys:Array,loadedKeys:Array,selectedKeys:Array,blocked:{type:Boolean,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},childrenKey:String,checkOnClick:{type:Boolean,default:!1},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:Function,draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:Function,empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Function,Array],default:void 0},getKey:{type:[String,Function],default:void 0},height:Number,labelKey:String,leafLineIcon:String,loadChildren:Function,searchFn:Function,searchValue:String,selectable:{type:[Boolean,String],default:!0},showLine:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},virtualScrollMode:{type:String,default:void 0},virtualItemHeight:{type:Number,default:32},"onUpdate:checkedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:selectedKeys":[Function,Array],onCheck:[Function,Array],onCheckedChange:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],onSelectedChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onKeydown:[Function,Array],onKeyup:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},sn={node:{type:Object,required:!0},isLeaf:{type:Boolean,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0},label:String,level:{type:Number,required:!0},rawNode:{type:Object,required:!0},expanded:{type:Boolean,required:!0},children:Array,parentKey:[String,Number,Symbol],checkDisabled:{type:Boolean,default:void 0},dragDisabled:{type:Boolean,default:void 0},dropDisabled:{type:Boolean,default:void 0},selectDisabled:{type:Boolean,default:void 0}},un={node:{type:Object,required:!0},checkDisabled:{type:Boolean,default:void 0}},hn={expanded:{type:Boolean,required:!0},hasTopLine:{type:Boolean,default:void 0},hasBottomLine:{type:Boolean,default:void 0},isLeaf:{type:Boolean,default:void 0},nodeKey:{type:[String,Number,Symbol],required:!0},rawNode:{type:Object,required:!0}},fn={disabled:{type:Boolean,default:void 0},node:{type:Object,required:!0},nodeKey:{type:[String,Number,Symbol],required:!0},label:String,selected:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const gn=W({props:un,setup(e){const{mergedPrefixCls:n,isChecked:t,isIndeterminate:l,handleCheck:o}=Y(V),a=b(()=>t(e.node.key)),d=b(()=>l(e.node.key)),c=()=>o(e.node);return()=>K(Ee,{class:`${n.value}-node-checkbox`,checked:a.value,disabled:e.checkDisabled,indeterminate:d.value,onChange:c},null)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const vn=W({props:fn,setup(e,{slots:n}){const{props:t,mergedPrefixCls:l,mergedCheckOnClick:o,handleSelect:a,handleCheck:d,searchedKeys:c}=Y(V),g=b(()=>c.value.includes(e.nodeKey)),s=h=>{e.disabled||(a(e.nodeKey),o.value&&d(e.node)),F(t.onNodeClick,h,e.node.rawNode)},f=h=>{F(t.onNodeContextmenu,h,e.node.rawNode)};return()=>{var u,y;const{nodeKey:h,label:i,node:C,selected:m}=e,{rawNode:w}=C,{prefix:M,suffix:N}=w,r={key:h,selected:m,node:w},v=((u=n.prefix)==null?void 0:u.call(n,r))||M&&K(z,{name:M},null),k=((y=n.suffix)==null?void 0:y.call(n,r))||N&&K(z,{name:N},null),S=`${l.value}-node-content`;return K("span",{class:S,onClick:s,onContextmenu:f},[v&&K("span",{class:`${S}-prefix`},[v]),K("span",{class:`${S}-label`},[yn(n.label,i,w,t.searchValue,g.value,S)]),k&&K("span",{class:`${S}-suffix`},[k])])}}});function yn(e,n,t,l,o,a){if(e)return e({node:t,searchValue:l,searched:o});if(o&&n&&l){const d=n.toUpperCase().indexOf(l.toUpperCase());if(d>-1){const c=d+l.length,g=n.substring(0,d),s=n.substring(c),f=K("span",{class:`${a}-label-highlight`},[n.substring(d,c)]);return[g,f,s]}}return n}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const pn=W({props:hn,setup(e,{slots:n}){const{mergedPrefixCls:t,expandIconRenderer:l,loadingKeys:o,handleExpand:a}=Y(V),d=b(()=>o.value.includes(e.nodeKey)),c=b(()=>{const s=`${t.value}-node-expand`;return Oe({[s]:!0,[`${s}-noop`]:e.isLeaf})}),g=s=>{a(e.nodeKey,e.rawNode),s.stopPropagation()};return()=>{var h,i;const s=`${t.value}-node-expand`;let f;if(d.value)f=K(z,{name:"loading"},null);else if(!e.isLeaf){const{expanded:C,nodeKey:m,rawNode:w}=e;f=(i=(h=n.expandIcon)!=null?h:l)==null?void 0:i({key:m,expanded:C,node:w})}return K("span",{class:c.value,onClick:g},[e.hasTopLine&&K("div",{class:`${s}-top-line`},null),f,e.hasBottomLine&&K("div",{class:`${s}-bottom-line`},null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const bn=({level:e,noopIdentUnitArr:n,prefixCls:t})=>{const l=[];for(let o=0;o<e;o++)l.push(K("span",{key:o,class:n.includes(o)?`${t}-node-indent-noop-unit`:`${t}-node-indent-unit`},null));return K("span",{"aria-hidden":!0,class:`${t}-node-indent`},[l])},kn=bn;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const xn=W({setup(e,{slots:n}){const{props:t,mergedPrefixCls:l}=Y(V);return()=>{const o=`${l.value}-node-leaf`;let a;return n.leafLineIcon?a=n.leafLineIcon():t.leafLineIcon?a=K(z,{name:t.leafLineIcon},null):a=K("span",{class:`${o}-line`},null),K("span",{class:o},[a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ce=W({props:sn,setup(e,{slots:n}){const{props:t,flattenedNodeMap:l,mergedPrefixCls:o,mergedShowLine:a,activeKey:d,selectedKeys:c,draggableIcon:g,dragKey:s,dropKey:f,dropParentKey:h,dropType:i,handleDragstart:C,handleDragend:m,handleDragenter:w,handleDragover:M,handleDragleave:N,handleDrop:r}=Y(V),v=b(()=>e.node.key),k=b(()=>d.value===v.value),S=b(()=>a.value&&e.isLast),u=b(()=>a.value&&!e.isLeaf&&(!e.isFirst||e.level!==0)),y=b(()=>a.value&&!e.isLeaf&&!e.isLast),D=b(()=>c.value.includes(v.value)),L=b(()=>e.selectDisabled||!t.selectable),I=b(()=>s.value===v.value),E=b(()=>f.value===v.value),O=b(()=>h.value===v.value),q=b(()=>E.value&&i.value==="before"),T=b(()=>E.value&&i.value==="inside"),R=b(()=>E.value&&i.value==="after"),Z=b(()=>{const x=`${o.value}-node`;return{[x]:!0,[`${x}-active`]:k.value,[`${x}-last`]:S.value,[`${x}-disabled`]:L.value,[`${x}-selected`]:D.value,[`${x}-expanded`]:e.expanded,[`${x}-dragging`]:I.value,[`${x}-dropping`]:E.value,[`${x}-drop-parent`]:O.value,[`${x}-drop-before`]:q.value,[`${x}-drop-inside`]:T.value,[`${x}-drop-after`]:R.value}}),J=x=>{var _;x.stopPropagation(),C(x,e.node),(_=x.dataTransfer)==null||_.setData("text/plain","")},le=x=>{x.stopPropagation(),m(x,e.node)},re=x=>{x.preventDefault(),x.stopPropagation(),w(x,e.node)},de=x=>{x.preventDefault(),x.stopPropagation(),M(x,e.node)},ce=x=>{x.stopPropagation(),N(x,e.node)},se=x=>{x.stopPropagation(),r(x,e.node)};return()=>{var ae,U;const x=l.value,{isLeaf:_,label:G,level:ee,rawNode:ne,expanded:ie,checkDisabled:ue,dragDisabled:he,dropDisabled:p,node:A}=e,{checkable:H,draggable:P}=t,$=P&&!he,j=(U=(ae=n.draggableIcon)==null?void 0:ae.call(n))!=null?U:K(z,{name:g.value},null),fe=x.get(v.value),te=[];a.value&&we(x,fe).reverse().forEach((Ae,Fe)=>{var pe;(pe=x.get(Ae))!=null&&pe.isLast&&te.push(Fe)});const ge=t.customAdditional?t.customAdditional({node:ne,level:ee}):void 0;return K("div",ye({class:Z.value,"aria-grabbed":I.value||void 0,"aria-label":G,"aria-selected":D.value,draggable:$||void 0,title:G,onDragstart:$?J:void 0,onDragend:$?le:void 0,onDragenter:$?re:void 0,onDragover:$?de:void 0,onDragleave:$?ce:void 0,onDrop:$&&!p?se:void 0},ge),[K(kn,{level:ee,noopIdentUnitArr:te,prefixCls:o.value},null),$?K("span",{class:`${o.value}-node-draggable-icon`},[j]):P&&K("span",{class:`${o.value}-node-draggable-icon-noop`},null),_&&a.value?K(xn,null,n):K(pn,{expanded:ie,hasTopLine:u.value,hasBottomLine:y.value,isLeaf:_,nodeKey:v.value,rawNode:ne},n),H&&K(gn,{checkDisabled:ue,node:A},null),K(vn,{disabled:L.value,node:A,nodeKey:v.value,label:G,selected:D.value},n)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function me(e){const{heightMd:n,heightSm:t,marginSizeXs:l,colorPrimaryHover:o,colorPrimaryText:a,colorContainerBgHover:d,colorContainerBg:c,colorIconInfo:g}=e;return{dropLineWidth:2,dropLineColor:o,bgColor:c,nodeBgColorHover:d,nodeBgColorSelected:c,nodeColorSelected:a,nodePaddingHorizontal:l,nodePaddingVertical:"0px",nodeContentHeight:n,nodeContentLabelHighlightColor:a,nodeContentPrefixMarginRight:l,nodeCheckboxMarginRight:l,nodeIconWidth:t,expandIconColor:g}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Cn=(e,n)=>me(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ke={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},mn=W({name:"IxTree",props:cn,setup(e,{attrs:n,expose:t,slots:l}){const o=ke("common"),{globalHashId:a,hashId:d,registerToken:c}=He("tree");c(Cn);const g=b(()=>`${o.prefixCls}-tree`),s=ke("tree"),f=b(()=>{var p;return(p=e.autoHeight)!=null?p:s.autoHeight}),h=b(()=>{var p;return(p=e.childrenKey)!=null?p:s.childrenKey}),i=qe(e,s),C=b(()=>{var p;return(p=e.labelKey)!=null?p:s.labelKey}),m=b(()=>{var p;return(p=e.showLine)!=null?p:s.showLine}),w=b(()=>{var p;return(p=e.blocked)!=null?p:s.blocked}),M=b(()=>e.checkable&&e.checkOnClick),{mergedNodes:N,mergedNodeMap:r,parentKeyMap:v,depthMap:k,setLoadedNodes:S}=Ge(e,h,i,C),{searchedKeys:u}=on(e,r,C),y=an(e,s,h,r,u,S),{flattedNodes:D,flattenedNodeMap:L}=Qe(N,y,e,u),I=Ve(e,N,r,v,k),E=Je(e,s,y),O=dn(e,r),{handleCheck:q}=I;Re(V,{props:e,config:s,flattedNodes:D,flattenedNodeMap:L,mergedPrefixCls:g,mergedNodeMap:r,mergedGetKey:i,mergedShowLine:m,mergedCheckOnClick:M,searchedKeys:u,...I,...y,...E,...O});const T=B(),R=B(),{activeKey:Z}=O,{focused:J,handleFocus:le,handleBlur:re,handleKeydown:de,handleKeyup:ce}=tn(e,r,D,y,O),se=b(()=>{const p=g.value;return{[a.value]:!!a.value,[d.value]:!!d.value,[p]:!0,[`${p}-active`]:!Q(Z.value),[`${p}-blocked`]:w.value,[`${p}-virtual`]:e.virtual,[`${p}-auto-height`]:f.value,[`${p}-focused`]:J.value,[`${p}-show-line`]:m.value,[`${p}-empty`]:!D.value.length}}),x=b(()=>{var $,j;const p=Z.value;if(Q(p))return"";const A=r.value;let H=String(p),P=($=A.get(p))==null?void 0:$.parentKey;for(;P;)H=`${String(P)} > ${H}`,P=(j=A.get(P))==null?void 0:j.parentKey;return H}),_=p=>{var A;(A=T==null?void 0:T.value)==null||A.focus(p)},G=()=>{var p;(p=T==null?void 0:T.value)==null||p.blur()},ee=p=>{var A;(A=R.value)==null||A.scrollTo(p)},ne=p=>{var A;return(A=r.value.get(p))==null?void 0:A.rawNode},ie=()=>D.value,ue=p=>{const A=r.value.get(p);A&&q(A)};t({focus:_,blur:G,expandAll:y.expandAll,collapseAll:y.collapseAll,scrollTo:ee,getNode:ne,_getFlattedNodes:ie,_handleCheck:ue});const he=(p,A,H)=>{F(e.onScrolledChange,p,A,H.map(P=>P.rawNode))};return()=>{var H;const p=D.value;let A;if(p.length>0){const P=({item:U})=>K(Ce,ye({node:U},U),l),{height:$,virtual:j,virtualItemHeight:fe,virtualScrollMode:te,onScroll:ge,onScrolledBottom:ae}=e;A=j?K(Ue,{ref:R,class:`${g.value}-content`,dataSource:p,getKey:"key",height:f.value?"100%":$,rowHeight:fe,rowRender:P,virtual:!0,scrollMode:te,onScroll:ge,onScrolledBottom:ae,onScrolledChange:he},null):K("div",{class:`${g.value}-content`,style:_e(f.value?void 0:{maxHeight:ze($)})},[K("div",{class:`${g.value}-content-inner`},[p.map(U=>K(Ce,ye({node:U},U),l))])])}else A=K(je,{empty:e.empty},l);return K("div",{class:se.value,role:"tree"},[J.value&&K("span",{style:Ke,"aria-live":"assertive"},[x.value]),K("input",{ref:T,style:Ke,tabindex:(H=n.tabIndex)!=null?H:0,onFocus:le,onBlur:re,onKeydown:de,onKeyup:ce,value:"","aria-label":"for screen reader"},null),A])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Sn=mn;export{Sn as I};