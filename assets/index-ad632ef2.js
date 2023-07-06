import{m as $,al as J,A as z,ao as Ie,k as Be,a6 as Ee,L as pe,ar as Pe,H as Te,aF as Oe,aq as qe}from"./index-72d58f2a.js";import{d as P,c as b,r as E,O as Ue,w as je,f as ze,B as be,i as He,P as Me,Q as Re,x as G,z as D,p as Q,A as _e,a3 as de,q as Ge,D as Ve}from"./vendor-64a846c1.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n,a){if(a){const o=[],t=e.value;n.forEach(l=>{const r=t.get(l);r&&o.push(r.rawNode)}),$(a,n,o)}}function Z(e,n){const a=[],{children:o}=e||{};return o&&o.forEach(t=>{const{key:l}=t;n!=null&&n.includes(l)||a.push(t.key),a.push(...Z(t,n))}),a}function ee(e,n,a){const o=[];for(;n&&!P(n.parentKey);){const{parentKey:t}=n;a!=null&&a.includes(n.parentKey)||o.push(t),n=e.get(t)}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,n){const[a,o]=J(e,"checkedKeys",()=>[]),t=b(()=>{const d=[];return e.checkable&&n.value.forEach((h,i)=>{h.checkDisabled&&d.push(i)}),d}),l=b(()=>e.cascaderStrategy!=="off"?Ye(n.value,a.value,t.value):a.value),r=b(()=>{const d=l.value;if(d.length===0||e.cascaderStrategy==="off")return[];const h=new Set,i=n.value;return d.forEach(v=>{const{parentKey:K}=i.get(v)||{};if(!P(K)){let p=i.get(K);if(p&&!d.includes(p.key))for(h.add(K);p&&!P(p.parentKey);)h.add(p.parentKey),p=i.get(p.parentKey)}}),[...h]}),s=d=>{const h=d.key,i=n.value,v=t.value,K=e.cascaderStrategy,p=K!=="off",k=p?Z(d,v):[],L=l.value.indexOf(h);let C=[...l.value];const S=L>-1||!!k.length&&k.every(u=>C.includes(u)||r.value.includes(u));if(S){const u=p?ee(i,d,v):[];C.splice(L,1),C=C.filter(x=>!u.includes(x)&&!k.includes(x))}else C.push(h),p&&Ke(i,d,C,v),C.push(...k);g(S,d.rawNode,Qe(K,C,i,v))},g=(d,h,i)=>{const{onCheck:v,onCheckedChange:K}=e;$(v,!d,h),o(i),X(n,i,K)};return{checkedKeys:a,allCheckedKeys:l,checkDisabledKeys:t,indeterminateKeys:r,handleCheck:s}}function Ke(e,n,a,o){let t=!0;for(;t&&n&&!P(n.parentKey);){const l=e.get(n.parentKey);l&&!o.includes(n.parentKey)&&(t=l.children.every(r=>o.includes(r.key)||a.includes(r.key)),t&&a.push(n.parentKey)),n=l}}function Qe(e,n,a,o){if(e==="off")return[...new Set(n)];let t=[];n=me(a,n,o),o.length&&(t=n.filter(l=>o.includes(l)));for(const l of n){const r=a.get(l);if(r){const s=r.key,g=r.parentKey;e==="parent"?n.includes(g)||t.push(s):e==="child"?r.isLeaf&&t.push(s):t.push(s)}}return[...new Set(t)]}function Ye(e,n,a){let o=[...n],t;for(const l of n){const r=e.get(l),s=r==null?void 0:r.parentKey,g=Z(r,a);o=o.concat(g),!P(s)&&t!==s&&(Ke(e,r,o,a),t=s)}return o=me(e,[...new Set(o)],a),o}function me(e,n,a){let o=[...n];if(a.length){for(const t of a)if(!o.includes(t)){const l=e.get(t),r=ee(e,l,a);o=o.filter(s=>!r.includes(s))}}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,n,a,o){const t=b(()=>De(e,e.dataSource,n.value,a.value,o.value)),l=b(()=>{const r=new Map;return ie(t.value,r),r});return{mergedNodes:t,mergedNodeMap:l}}function Xe(e,{expandedKeys:n},a,o){return b(()=>{const{searchValue:t}=a,l=new Map(n.value.map((s,g)=>[s,g])),r=new Map(o.value.map((s,g)=>[s,g]));return t&&!r.size?[]:l.size||r.size?en(e.value,l,r):e.value.map(s=>({...s,expanded:!1,level:0}))})}function De(e,n,a,o,t,l,r){const{disabled:s,loadChildren:g}=e,d=P(r)?-1:r;return n.map((h,i)=>Se(h,a,o,t,s,!!g,i===0,i===n.length-1,d,l))}function Se(e,n,a,o,t,l,r,s,g,d){var S;const h=a(e),{check:i,drag:v,drop:K,select:p}=Ze(e,t),k=e[n],L=e[o];g++;const C=k==null?void 0:k.map((u,x)=>Se(u,n,a,o,t,l,x===0,x===k.length-1,g,h));return{children:C,label:L,key:h,isFirst:r,isLeaf:(S=e.isLeaf)!=null?S:!(C!=null&&C.length||l),isLast:s,parentKey:d,expanded:!1,level:g,rawNode:e,checkDisabled:i,dragDisabled:v,dropDisabled:K,selectDisabled:p}}function Ze(e,n){const a=e.disabled||{};if(a===!0)return{check:!0,drag:!0,drop:!0,select:!0};let{check:o,drag:t,drop:l,select:r}=a;if(n){const s=n(e)||{};if(s===!0)return{check:!0,drag:!0,drop:!0,select:!0};o=o||s.check,t=t||s.drag,l=l||s.drop,r=r||s.select}return{check:o,drag:t,drop:l,select:r}}function ie(e,n){e.forEach(a=>{const{key:o,children:t}=a;n.set(o,a),t&&ie(t,n)})}function Ae(e=[],n){const a=[],o=e.length;return e.forEach((t,l)=>{t.isFirst=l===0,t.isLast=l===o-1,n.has(t.key)||n.size==0?(t.hidden=!1,a.push(t)):t.hidden=!0,Ae(t.children,n).length>0&&(t.hidden=!1,a.push(t))}),a.length&&(a[0].isFirst=!0,a[a.length-1].isLast=!0),a}function en(e,n,a){const o=[],t=[];return Ae(e,a),e.forEach(l=>{for(t.push(l);t.length;){const r=t.pop();if(r){const{children:s,key:g,hidden:d}=r,h=n.has(g);if(r.expanded=h,!d&&o.push(r),s&&h)for(let i=s.length;i>0;i--)!s[i-1].hidden&&t.push(s[i-1])}}}),o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function nn(e,n,{expandedKeys:a,setExpandedKeys:o}){const t=b(()=>{var f;return(f=e.draggableIcon)!=null?f:n.draggableIcon}),l=E(),r=E(),s=E(),g=E(),d=E();let h;const i=()=>{h&&(clearTimeout(h),h=void 0)};Ue(()=>i());const v=()=>{P(l.value)||(l.value=void 0,r.value=void 0)},K=()=>{P(s.value)||(s.value=void 0,g.value=void 0,d.value=void 0)},p=(f,y)=>{var A,F;return{evt:f,node:y.rawNode,dragNode:(A=l.value)==null?void 0:A.rawNode,dropNode:(F=s.value)==null?void 0:F.rawNode,dropType:d.value}},k=f=>{C(f,void 0),window.removeEventListener("dragend",k)},L=(f,y)=>{l.value=y,r.value=Z(y),an(y.key,a.value,o),window.addEventListener("dragend",k),$(e.onDragstart,p(f,y))},C=(f,y)=>{y&&$(e.onDragend,p(f,y)),v(),K()},S=async(f,y)=>{const A=l.value;if(A){i(),A.key!==y.key&&(h=setTimeout(()=>{var N;l.value&&((N=y.children)!=null&&N.length)&&tn(y.key,a.value,o),h=void 0},1e3));const F=await xe(y,A,r.value,f,e.droppable);F?(s.value=y,g.value=F!=="inside"?y.parentKey:void 0,d.value=F):K()}$(e.onDragenter,p(f,y))},u=async(f,y)=>{const A=l.value;if(A){const F=await xe(y,A,r.value,f,e.droppable);F?(s.value=y,g.value=F!=="inside"?y.parentKey:void 0,d.value=F):K()}$(e.onDragover,p(f,y))},x=(f,y)=>{const A=s.value;(A==null?void 0:A.key)===y.key&&!f.currentTarget.contains(f.relatedTarget)&&K(),$(e.onDragleave,p(f,y))},m=(f,y)=>{d.value||K(),$(e.onDrop,p(f,y)),v(),K()};return{draggableIcon:t,dragKey:b(()=>{var f;return(f=l.value)==null?void 0:f.key}),dropKey:b(()=>{var f;return(f=s.value)==null?void 0:f.key}),dropParentKey:g,dropType:d,handleDragstart:L,handleDragend:C,handleDragenter:S,handleDragover:u,handleDragleave:x,handleDrop:m}}function tn(e,n,a){n.indexOf(e)===-1&&a([...n,e])}function an(e,n,a){const o=n.indexOf(e);if(o!==-1){const t=[...n];t.splice(o,1),a(t)}}async function xe(e,n,a,o,t){const{key:l,children:r=[]}=e;if(n.key===l||a&&a.includes(l))return!1;const{clientY:s}=o,{top:g,height:d}=o.target.getBoundingClientRect(),h=s<g+d/2;let i;if(t){const v={evt:o,isTopHalf:h,dragNode:n.rawNode,dropNode:e.rawNode};i=await t(v)}return(i===void 0||i===!0)&&(r.length>0?i="inside":h?i="before":i="after"),i}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function on(e,n,a,{expandedKeys:o,handleExpand:t},{activeKey:l,handleSelect:r}){const s=E(!1);return{focused:s,handleFocus:v=>{s.value=!0,$(e.onFocus,v)},handleBlur:v=>{s.value=!0,$(e.onBlur,v)},handleKeydown:v=>{switch(v.code){case"ArrowUp":case"ArrowDown":v.preventDefault()}$(e.onKeydown,v)},handleKeyup:v=>{const K=v.code,p=l.value,k=a.value,L=k.length;if(p===void 0)["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(K)&&se(l,k,0,L);else{const C=a.value,S=C.findIndex(u=>u.key===p);if(S===-1)return;switch(K){case"Enter":case"NumpadEnter":r(p);break;case"ArrowDown":se(l,C,S+1,L);break;case"ArrowUp":se(l,C,S-1,0,!0);break;case"ArrowLeft":{const{rawNode:u,key:x,parentKey:m}=C[S];if(u.isLeaf||!o.value.includes(x)){const f=m?n.value.get(m):void 0;f&&(l.value=f.key)}else t(x,u)}break;case"ArrowRight":{const{rawNode:u,key:x}=C[S];if(!o.value.includes(x))t(x,u);else for(let m=S+1;m<L;m++){const f=C[m];l.value=f.key;break}}break}}$(e.onKeyup,v)}}}function se(e,n,a,o,t=!1){let l=a;for(;t?l>=o:l<o;){const r=n[l];if(r.selectDisabled)t?l--:l++;else{e.value=r.key;return}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ln(e,n,a,o,t,l,r){const s=b(()=>{var u;return(u=e.expandIcon)!=null?u:n.expandIcon}),[g,d]=J(e,"expandedKeys",()=>[]),[h,i]=J(e,"loadedKeys",()=>[]),v=E([]),K=({key:u,expanded:x,node:m})=>{if(ze(s.value))return be(z,{name:s.value,rotate:x?90:0});if(He(s.value))return s.value({key:u,expanded:x,node:m});if(Me(s.value))return be(z,{name:x?s.value[0]:s.value[1]})},p=u=>{if(!u||u.length<=0)return;const{onExpandedChange:x}=e,m=l.value,f=new Set(g.value);u.forEach(A=>{ee(m,m.get(A)).forEach(F=>f.add(F))});const y=[...f];d(y),X(l,y,x)};je(r,p);const k=async(u,x)=>{var N;const{loadChildren:m}=e;if(v.value.includes(u))return;const f=a.value;if(!((N=x==null?void 0:x[f])!=null&&N.length)){if(!m||v.value.includes(u)||h.value.includes(u))return;v.value.push(u);const T=await m(x);v.value.splice(v.value.indexOf(u),1);const H=l.value,U=H.get(u);if(T!=null&&T.length){const W=U.level,M=De(e,T,f,o.value,t.value,u,W);ie(M,H),U.rawNode[f]=T,U.children=M;const R=[...h.value,u];i(R),$(e.onLoaded,R,x)}else return}const y=g.value.indexOf(u),A=y>=0,F=[...g.value];A?F.splice(y,1):F.push(u),L(A,x,F)},L=(u,x,m)=>{const{onExpand:f,onExpandedChange:y}=e;$(f,!u,x),d(m),X(l,m,y)},C=()=>{const u=[],x=[];l.value.forEach(m=>{m.isLeaf||(u.push(m.key),x.push(m.rawNode))}),$(e.onExpandedChange,u,x),d(u)},S=()=>{$(e.onExpandedChange,[],[]),d([])};return r.value.length&&p(r.value),{expandIconRenderer:K,expandedKeys:g,setExpandedKeys:d,expandAll:C,collapseAll:S,handleExpand:k,loadingKeys:v}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rn(e,n,a){const o=cn(e,a);return{searchedKeys:b(()=>{const{searchValue:l}=e;if(!l)return Ie;const r=o.value,s=[];return n.value.forEach(g=>{r(g.rawNode,l)&&s.push(g.key)}),s})}}function cn(e,n){return b(()=>{var a;return(a=e.searchFn)!=null?a:sn(n.value)})}function sn(e){return(n,a)=>{const o=n[e];return o?o.toLowerCase().includes(a.toLowerCase()):!1}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function dn(e,n){const[a,o]=J(e,"selectedKeys",()=>[]),t=b(()=>e.selectable==="multiple"),l=E();Re(()=>{const d=a.value,h=d.length;l.value=h>0?d[h-1]:void 0});const r=b(()=>{const d=l.value;return d!==void 0?n.value.get(d):void 0}),s=d=>{const i=n.value.get(d);if(!i)return;const v=a.value.indexOf(d),K=v>-1;let p=[...a.value];t.value?K?p.splice(v,1):p.push(d):p=K?[]:[d],g(K,i.rawNode,p)},g=(d,h,i)=>{var k;const{onSelect:v,onSelectedChange:K}=e,p=i.includes((k=h.key)!=null?k:"")?!0:!d;$(v,p,h),o(i),X(n,i,K)};return{activeKey:l,activeNode:r,selectedKeys:a,handleSelect:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=Symbol("treeToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const un={autoHeight:{type:Boolean,default:void 0},checkedKeys:Array,expandedKeys:Array,indeterminateKeys:Array,loadedKeys:Array,selectedKeys:Array,blocked:{type:Boolean,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},childrenKey:String,checkOnClick:{type:Boolean,default:!1},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:Function,draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:Function,empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Object,Function,Array],default:void 0},getKey:{type:[String,Function],default:void 0},height:Number,labelKey:String,leafLineIcon:String,loadChildren:Function,searchFn:Function,searchValue:String,selectable:{type:[Boolean,String],default:!0},showLine:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:checkedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:selectedKeys":[Function,Array],onCheck:[Function,Array],onCheckedChange:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],onSelectedChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onKeydown:[Function,Array],onKeyup:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},fn={node:{type:Object,required:!0},isLeaf:{type:Boolean,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0},label:String,level:{type:Number,required:!0},rawNode:{type:Object,required:!0},expanded:{type:Boolean,required:!0},children:Array,parentKey:[String,Number,Symbol],checkDisabled:{type:Boolean,default:void 0},dragDisabled:{type:Boolean,default:void 0},dropDisabled:{type:Boolean,default:void 0},selectDisabled:{type:Boolean,default:void 0}},hn={node:{type:Object,required:!0},checkDisabled:{type:Boolean,default:void 0}},vn={expanded:{type:Boolean,required:!0},hasTopLine:{type:Boolean,default:void 0},isLeaf:{type:Boolean,default:void 0},nodeKey:{type:[String,Number,Symbol],required:!0},rawNode:{type:Object,required:!0}},gn={disabled:{type:Boolean,default:void 0},node:{type:Object,required:!0},nodeKey:{type:[String,Number,Symbol],required:!0},label:String,selected:{type:Boolean,default:void 0}},yn=G({props:hn,setup(e){const{mergedPrefixCls:n,allCheckedKeys:a,indeterminateKeys:o,handleCheck:t}=Q(V),l=b(()=>a.value.includes(e.node.key)),r=b(()=>o.value.includes(e.node.key)),s=()=>t(e.node);return()=>D(Be,{class:`${n.value}-node-checkbox`,checked:l.value,disabled:e.checkDisabled,indeterminate:r.value,onChange:s},null)}}),pn=G({props:gn,setup(e){const{props:n,mergedPrefixCls:a,mergedCheckOnClick:o,slots:t,handleSelect:l,handleCheck:r,searchedKeys:s}=Q(V),g=b(()=>s.value.includes(e.nodeKey)),d=i=>{e.disabled||(l(e.nodeKey),o.value&&r(e.node)),$(n.onNodeClick,i,e.node.rawNode)},h=i=>{$(n.onNodeContextmenu,i,e.node.rawNode)};return()=>{var f,y;const{nodeKey:i,label:v,node:K,selected:p}=e,{rawNode:k}=K,{prefix:L,suffix:C}=k,S={key:i,selected:p,node:k},u=((f=t.prefix)==null?void 0:f.call(t,S))||L&&D(z,{name:L},null),x=((y=t.suffix)==null?void 0:y.call(t,S))||C&&D(z,{name:C},null),m=`${a.value}-node-content`;return D("span",{class:m,onClick:d,onContextmenu:h},[u&&D("span",{class:`${m}-prefix`},[u]),D("span",{class:`${m}-label`},[bn(t.label,v,k,n.searchValue,g.value,m)]),x&&D("span",{class:`${m}-suffix`},[x])])}}});function bn(e,n,a,o,t,l){if(e)return e({node:a,searchValue:o,searched:t});if(t&&n&&o){const r=n.toUpperCase().indexOf(o.toUpperCase());if(r>-1){const s=r+o.length,g=n.substring(0,r),d=n.substring(s),h=D("span",{class:`${l}-label-highlight`},[n.substring(r,s)]);return[g,h,d]}}return n}const xn=G({props:vn,setup(e){const{mergedPrefixCls:n,slots:a,expandIconRenderer:o,loadingKeys:t,handleExpand:l}=Q(V),r=b(()=>t.value.includes(e.nodeKey)),s=b(()=>{const d=`${n.value}-node-expand`;return _e({[d]:!0,[`${d}-noop`]:e.isLeaf})}),g=d=>{l(e.nodeKey,e.rawNode),d.stopPropagation()};return()=>{var i,v;const d=`${n.value}-node-expand`;let h;if(r.value)h=D(z,{name:"loading"},null);else if(!e.isLeaf){const{expanded:K,nodeKey:p,rawNode:k}=e;h=(v=(i=a.expandIcon)!=null?i:o)==null?void 0:v({key:p,expanded:K,node:k})}return D("span",{class:s.value,onClick:g},[e.hasTopLine&&D("div",{class:`${d}-top-line`},null),h])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const kn=({level:e,noopIdentUnitArr:n,prefixCls:a})=>{const o=[];for(let t=0;t<e;t++)o.push(D("span",{key:t,class:n.includes(t)?`${a}-node-indent-noop-unit`:`${a}-node-indent-unit`},null));return D("span",{"aria-hidden":!0,class:`${a}-node-indent`},[o])},Cn=kn,Kn=G({setup(){const{props:e,mergedPrefixCls:n,slots:a}=Q(V);return()=>{const o=`${n.value}-node-leaf`;let t;return a.leafLineIcon?t=a.leafLineIcon():e.leafLineIcon?t=D(z,{name:e.leafLineIcon},null):t=D("span",{class:`${o}-line`},null),D("span",{class:o},[t])}}}),ke=G({props:fn,setup(e){const{props:n,flattedNodes:a,mergedPrefixCls:o,mergedShowLine:t,activeKey:l,selectedKeys:r,slots:s,draggableIcon:g,dragKey:d,dropKey:h,dropParentKey:i,dropType:v,handleDragstart:K,handleDragend:p,handleDragenter:k,handleDragover:L,handleDragleave:C,handleDrop:S}=Q(V),u=Ee(),x=b(()=>l.value===u),m=b(()=>t.value&&e.isLast),f=b(()=>t.value&&!e.isLeaf&&e.level!==0&&e.isFirst),y=b(()=>r.value.includes(u)),A=b(()=>e.selectDisabled||!n.selectable),F=b(()=>d.value===u),N=b(()=>h.value===u),T=b(()=>i.value===u),H=b(()=>N.value&&v.value==="before"),U=b(()=>N.value&&v.value==="inside"),W=b(()=>N.value&&v.value==="after"),M=b(()=>{const c=`${o.value}-node`;return{[c]:!0,[`${c}-active`]:x.value,[`${c}-last`]:m.value,[`${c}-disabled`]:A.value,[`${c}-selected`]:y.value,[`${c}-expanded`]:e.expanded,[`${c}-dragging`]:F.value,[`${c}-dropping`]:N.value,[`${c}-drop-parent`]:T.value,[`${c}-drop-before`]:H.value,[`${c}-drop-inside`]:U.value,[`${c}-drop-after`]:W.value}}),R=c=>{var w;c.stopPropagation(),K(c,e.node),(w=c.dataTransfer)==null||w.setData("text/plain","")},ne=c=>{c.stopPropagation(),p(c,e.node)},te=c=>{c.preventDefault(),c.stopPropagation(),k(c,e.node)},ae=c=>{c.preventDefault(),c.stopPropagation(),L(c,e.node)},oe=c=>{c.stopPropagation(),C(c,e.node)},le=c=>{c.stopPropagation(),S(c,e.node)};return()=>{var ve,ge;const c=new Map;a.value.forEach(Y=>{c.set(Y.key,Y)});const{isLeaf:w,label:I,level:B,rawNode:O,expanded:_,checkDisabled:re,dragDisabled:ce,dropDisabled:j,node:ue}=e,{checkable:we,draggable:fe}=n,q=fe&&!ce,Fe=(ge=(ve=s.draggableIcon)==null?void 0:ve.call(s))!=null?ge:D(z,{name:g.value},null),Le=c.get(u),he=[];t.value&&ee(c,Le).reverse().forEach((Y,Ne)=>{var ye;(ye=c.get(Y))!=null&&ye.isLast&&he.push(Ne)});const $e=n.customAdditional?n.customAdditional({node:O,level:B}):void 0;return D("div",de({class:M.value,"aria-grabbed":F.value||void 0,"aria-label":I,"aria-selected":y.value,draggable:q||void 0,title:I,onDragstart:q?R:void 0,onDragend:q?ne:void 0,onDragenter:q?te:void 0,onDragover:q?ae:void 0,onDragleave:q?oe:void 0,onDrop:q&&!j?le:void 0},$e),[D(Cn,{level:B,noopIdentUnitArr:he,prefixCls:o.value},null),q?D("span",{class:`${o.value}-node-draggable-icon`},[Fe]):fe&&D("span",{class:`${o.value}-node-draggable-icon-noop`},null),w&&t.value?D(Kn,null,null):D(xn,{expanded:_,hasTopLine:f.value,isLeaf:w,nodeKey:u,rawNode:O},null),we&&D(yn,{checkDisabled:re,node:ue},null),D(pn,{disabled:A.value,node:ue,nodeKey:u,label:I,selected:y.value},null)])}}}),Ce={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},mn=G({name:"IxTree",props:un,setup(e,{attrs:n,expose:a,slots:o}){const t=pe("common"),l=b(()=>`${t.prefixCls}-tree`),r=pe("tree"),s=b(()=>{var c;return(c=e.autoHeight)!=null?c:r.autoHeight}),g=b(()=>{var c;return(c=e.childrenKey)!=null?c:r.childrenKey}),d=Pe(e,r),h=b(()=>{var c;return(c=e.labelKey)!=null?c:r.labelKey}),i=b(()=>{var c;return(c=e.showLine)!=null?c:r.showLine}),v=b(()=>{var c;return(c=e.blocked)!=null?c:r.blocked}),K=b(()=>e.checkable&&e.checkOnClick),{mergedNodes:p,mergedNodeMap:k}=Je(e,g,d,h),{searchedKeys:L}=rn(e,k,h),C=ln(e,r,g,d,h,k,L),S=Xe(p,C,e,L),u=We(e,k),x=nn(e,r,C),m=dn(e,k);Ge(V,{props:e,slots:o,config:r,flattedNodes:S,mergedPrefixCls:l,mergedNodeMap:k,mergedGetKey:d,mergedShowLine:i,mergedCheckOnClick:K,searchedKeys:L,...u,...C,...x,...m});const f=E(),y=E(),{activeKey:A}=m,{focused:F,handleFocus:N,handleBlur:T,handleKeydown:H,handleKeyup:U}=on(e,k,S,C,m),W=b(()=>{const c=l.value;return{[c]:!0,[`${c}-active`]:!P(A.value),[`${c}-blocked`]:v.value,[`${c}-virtual`]:e.virtual,[`${c}-auto-height`]:s.value,[`${c}-focused`]:F.value,[`${c}-show-line`]:i.value,[`${c}-empty`]:!S.value.length}}),M=b(()=>{var O,_;const c=A.value;if(P(c))return"";const w=k.value;let I=String(c),B=(O=w.get(c))==null?void 0:O.parentKey;for(;B;)I=`${String(B)} > ${I}`,B=(_=w.get(B))==null?void 0:_.parentKey;return I}),R=c=>{var w;(w=f==null?void 0:f.value)==null||w.focus(c)},ne=()=>{var c;(c=f==null?void 0:f.value)==null||c.blur()},te=c=>{var w;(w=y.value)==null||w.scrollTo(c)},ae=c=>{var w;return(w=k.value.get(c))==null?void 0:w.rawNode},oe=()=>S.value;a({focus:R,blur:ne,expandAll:C.expandAll,collapseAll:C.collapseAll,scrollTo:te,getNode:ae,_getFlattedNodes:oe});const le=(c,w,I)=>{$(e.onScrolledChange,c,w,I.map(B=>B.rawNode))};return()=>{var I;const c=S.value;let w;if(c.length>0){const B=({item:j})=>D(ke,de({node:j},j),null),{height:O,virtual:_,onScroll:re,onScrolledBottom:ce}=e;w=_?D(Te,{ref:y,class:`${l.value}-content`,dataSource:c,getKey:"key",height:s.value?"100%":O,itemHeight:28,itemRender:B,virtual:!0,onScroll:re,onScrolledBottom:ce,onScrolledChange:le},null):D("div",{class:`${l.value}-content`,style:Ve(s.value?void 0:{maxHeight:Oe(O)})},[D("div",{class:`${l.value}-content-inner`},[c.map(j=>D(ke,de({node:j},j),null))])])}else w=D(qe,{empty:e.empty},o);return D("div",{class:W.value,role:"tree"},[F.value&&D("span",{style:Ce,"aria-live":"assertive"},[M.value]),D("input",{ref:f,style:Ce,tabindex:(I=n.tabIndex)!=null?I:0,onFocus:N,onBlur:T,onKeydown:H,onKeyup:U,value:"","aria-label":"for screen reader"},null),w])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const An=mn;export{An as I};
