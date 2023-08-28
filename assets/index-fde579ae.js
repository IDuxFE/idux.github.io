import{m as $,am as J,A as H,ap as Ne,j as Be,a6 as Ee,L as pe,as as Pe,H as Te,aG as Oe,ar as qe}from"./index-c3e0f9d9.js";import{d as T,c as x,r as P,O as je,w as Ue,f as He,B as be,i as ze,P as _e,Q as Me,x as G,l as Q,z as D,A as Re,a3 as ie,q as Ge,D as Ve}from"./vendor-2973971e.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n,a){if(a){const o=[],t=e.value;n.forEach(l=>{const r=t.get(l);r&&o.push(r.rawNode)}),$(a,n,o)}}function Z(e,n){const a=[],{children:o}=e||{};return o&&o.forEach(t=>{const{key:l}=t;n!=null&&n.includes(l)||a.push(t.key),a.push(...Z(t,n))}),a}function ee(e,n,a){const o=[];for(;n&&!T(n.parentKey);){const{parentKey:t}=n;a!=null&&a.includes(n.parentKey)||o.push(t),n=e.get(t)}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,n){const[a,o]=J(e,"checkedKeys",()=>[]),t=x(()=>{const d=[];return e.checkable&&n.value.forEach((h,i)=>{h.checkDisabled&&d.push(i)}),d}),l=x(()=>e.cascaderStrategy!=="off"?Ye(n.value,a.value,t.value):a.value),r=x(()=>{const d=l.value;if(d.length===0||e.cascaderStrategy==="off")return[];const h=new Set,i=n.value;return d.forEach(g=>{const{parentKey:k}=i.get(g)||{};if(!T(k)){let v=i.get(k);if(v&&!d.includes(v.key))for(h.add(k);v&&!T(v.parentKey);)h.add(v.parentKey),v=i.get(v.parentKey)}}),[...h]}),s=d=>{const h=d.key,i=n.value,g=t.value,k=e.cascaderStrategy,v=k!=="off",m=v?Z(d,g):[],A=l.value.indexOf(h);let K=[...l.value];const S=A>-1||!!m.length&&m.every(u=>K.includes(u)||r.value.includes(u));if(S){const u=v?ee(i,d,g):[];K.splice(A,1),K=K.filter(b=>!u.includes(b)&&!m.includes(b))}else K.push(h),v&&Ke(i,d,K,g),K.push(...m);y(S,d.rawNode,Qe(k,K,i,g))},y=(d,h,i)=>{const{onCheck:g,onCheckedChange:k}=e;$(g,!d,h),o(i),X(n,i,k)};return{checkedKeys:a,allCheckedKeys:l,checkDisabledKeys:t,indeterminateKeys:r,handleCheck:s}}function Ke(e,n,a,o){let t=!0;for(;t&&n&&!T(n.parentKey);){const l=e.get(n.parentKey);l&&!o.includes(n.parentKey)&&(t=l.children.every(r=>o.includes(r.key)||a.includes(r.key)),t&&a.push(n.parentKey)),n=l}}function Qe(e,n,a,o){if(e==="off")return[...new Set(n)];let t=[];n=me(a,n,o),o.length&&(t=n.filter(l=>o.includes(l)));for(const l of n){const r=a.get(l);if(r){const s=r.key,y=r.parentKey;e==="parent"?n.includes(y)||t.push(s):e==="child"?r.isLeaf&&t.push(s):t.push(s)}}return[...new Set(t)]}function Ye(e,n,a){let o=[...n],t;for(const l of n){const r=e.get(l),s=r==null?void 0:r.parentKey,y=Z(r,a);o=o.concat(y),!T(s)&&t!==s&&(Ke(e,r,o,a),t=s)}return o=me(e,[...new Set(o)],a),o}function me(e,n,a){let o=[...n];if(a.length){for(const t of a)if(!o.includes(t)){const l=e.get(t),r=ee(e,l,a);o=o.filter(s=>!r.includes(s))}}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,n,a,o){const t=x(()=>De(e,e.dataSource,n.value,a.value,o.value)),l=x(()=>{const r=new Map;return ue(t.value,r),r});return{mergedNodes:t,mergedNodeMap:l}}function Xe(e,{expandedKeys:n},a,o){return x(()=>{const{searchValue:t}=a,l=new Map(n.value.map((s,y)=>[s,y])),r=new Map(o.value.map((s,y)=>[s,y]));return t&&!r.size?[]:l.size||r.size?nn(e.value,l,r):e.value.map(s=>({...s,expanded:!1,level:0}))})}function De(e,n,a,o,t,l,r,s){const{cascaderStrategy:y,disabled:d,loadChildren:h}=e,i=T(r)?-1:r;return n.map((g,k)=>Se(g,a,o,t,d,!!h,k===0,k===n.length-1,i,y,s?[s]:[],l))}function Se(e,n,a,o,t,l,r,s,y,d,h,i){var S,u;const g=a(e),k=Ze(e,t),v=e[n],m=e[o];y++;const A=v==null?void 0:v.map((b,C)=>Se(b,n,a,o,t,l,C===0,C===v.length-1,y,d,[k,...h],g)),K=en(k,h,(S=A==null?void 0:A.map(b=>({check:b.checkDisabled,drag:b.dragDisabled,drop:b.dropDisabled,select:b.selectDisabled})))!=null?S:[],d!=="off");return{label:m,key:g,children:A,isFirst:r,isLeaf:(u=e.isLeaf)!=null?u:!(v!=null&&v.length||l),isLast:s,parentKey:i,expanded:!1,level:y,rawNode:e,checkDisabled:K.check,dragDisabled:K.drag,dropDisabled:K.drop,selectDisabled:K.select}}function Ze(e,n){const a=e.disabled||{};if(a===!0)return{check:!0,drag:!0,drop:!0,select:!0};let{check:o,drag:t,drop:l,select:r}=a;if(n){const s=n(e)||{};if(s===!0)return{check:!0,drag:!0,drop:!0,select:!0};o=o||s.check,t=t||s.drag,l=l||s.drop,r=r||s.select}return{check:o,drag:t,drop:l,select:r}}function en(e,n,a,o){const t=l=>e[l]||o&&(n.some(r=>!!r[l])||!!a.length&&a.every(r=>!!r[l]));return{check:t("check"),drag:t("drag"),drop:t("drop"),select:t("drag")}}function ue(e,n){e.forEach(a=>{const{key:o,children:t}=a;n.set(o,a),t&&ue(t,n)})}function Ae(e=[],n){const a=[],o=e.length;return e.forEach((t,l)=>{t.isFirst=l===0,t.isLast=l===o-1,n.has(t.key)||n.size==0?(t.hidden=!1,a.push(t)):t.hidden=!0,Ae(t.children,n).length>0&&(t.hidden=!1,a.push(t))}),a.length&&(a[0].isFirst=!0,a[a.length-1].isLast=!0),a}function nn(e,n,a){const o=[],t=[];return Ae(e,a),e.forEach(l=>{for(t.push(l);t.length;){const r=t.pop();if(r){const{children:s,key:y,hidden:d}=r,h=n.has(y);if(r.expanded=h,!d&&o.push(r),s&&h)for(let i=s.length;i>0;i--)!s[i-1].hidden&&t.push(s[i-1])}}}),o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tn(e,n,{expandedKeys:a,setExpandedKeys:o}){const t=x(()=>{var f;return(f=e.draggableIcon)!=null?f:n.draggableIcon}),l=P(),r=P(),s=P(),y=P(),d=P();let h;const i=()=>{h&&(clearTimeout(h),h=void 0)};je(()=>i());const g=()=>{T(l.value)||(l.value=void 0,r.value=void 0)},k=()=>{T(s.value)||(s.value=void 0,y.value=void 0,d.value=void 0)},v=(f,p)=>{var w,L;return{evt:f,node:p.rawNode,dragNode:(w=l.value)==null?void 0:w.rawNode,dropNode:(L=s.value)==null?void 0:L.rawNode,dropType:d.value}},m=f=>{K(f,void 0),window.removeEventListener("dragend",m)},A=(f,p)=>{l.value=p,r.value=Z(p),on(p.key,a.value,o),window.addEventListener("dragend",m),$(e.onDragstart,v(f,p))},K=(f,p)=>{p&&$(e.onDragend,v(f,p)),g(),k()},S=async(f,p)=>{const w=l.value;if(w){i(),w.key!==p.key&&(h=setTimeout(()=>{var I;l.value&&((I=p.children)!=null&&I.length)&&an(p.key,a.value,o),h=void 0},1e3));const L=await ke(p,w,r.value,f,e.droppable);L?(s.value=p,y.value=L!=="inside"?p.parentKey:void 0,d.value=L):k()}$(e.onDragenter,v(f,p))},u=async(f,p)=>{const w=l.value;if(w){const L=await ke(p,w,r.value,f,e.droppable);L?(s.value=p,y.value=L!=="inside"?p.parentKey:void 0,d.value=L):k()}$(e.onDragover,v(f,p))},b=(f,p)=>{const w=s.value;(w==null?void 0:w.key)===p.key&&!f.currentTarget.contains(f.relatedTarget)&&k(),$(e.onDragleave,v(f,p))},C=(f,p)=>{d.value||k(),$(e.onDrop,v(f,p)),g(),k()};return{draggableIcon:t,dragKey:x(()=>{var f;return(f=l.value)==null?void 0:f.key}),dropKey:x(()=>{var f;return(f=s.value)==null?void 0:f.key}),dropParentKey:y,dropType:d,handleDragstart:A,handleDragend:K,handleDragenter:S,handleDragover:u,handleDragleave:b,handleDrop:C}}function an(e,n,a){n.indexOf(e)===-1&&a([...n,e])}function on(e,n,a){const o=n.indexOf(e);if(o!==-1){const t=[...n];t.splice(o,1),a(t)}}async function ke(e,n,a,o,t){const{key:l,children:r=[]}=e;if(n.key===l||a&&a.includes(l))return!1;const{clientY:s}=o,{top:y,height:d}=o.target.getBoundingClientRect(),h=s<y+d/2;let i;if(t){const g={evt:o,isTopHalf:h,dragNode:n.rawNode,dropNode:e.rawNode};i=await t(g)}return(i===void 0||i===!0)&&(r.length>0?i="inside":h?i="before":i="after"),i}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ln(e,n,a,{expandedKeys:o,handleExpand:t},{activeKey:l,handleSelect:r}){const s=P(!1);return{focused:s,handleFocus:g=>{s.value=!0,$(e.onFocus,g)},handleBlur:g=>{s.value=!0,$(e.onBlur,g)},handleKeydown:g=>{switch(g.code){case"ArrowUp":case"ArrowDown":g.preventDefault()}$(e.onKeydown,g)},handleKeyup:g=>{const k=g.code,v=l.value,m=a.value,A=m.length;if(v===void 0)["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(k)&&de(l,m,0,A);else{const K=a.value,S=K.findIndex(u=>u.key===v);if(S===-1)return;switch(k){case"Enter":case"NumpadEnter":r(v);break;case"ArrowDown":de(l,K,S+1,A);break;case"ArrowUp":de(l,K,S-1,0,!0);break;case"ArrowLeft":{const{rawNode:u,key:b,parentKey:C}=K[S];if(u.isLeaf||!o.value.includes(b)){const f=C?n.value.get(C):void 0;f&&(l.value=f.key)}else t(b,u)}break;case"ArrowRight":{const{rawNode:u,key:b}=K[S];if(!o.value.includes(b))t(b,u);else for(let C=S+1;C<A;C++){const f=K[C];l.value=f.key;break}}break}}$(e.onKeyup,g)}}}function de(e,n,a,o,t=!1){let l=a;for(;t?l>=o:l<o;){const r=n[l];if(r.selectDisabled)t?l--:l++;else{e.value=r.key;return}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rn(e,n,a,o,t,l,r){const s=x(()=>{var u;return(u=e.expandIcon)!=null?u:n.expandIcon}),[y,d]=J(e,"expandedKeys",()=>[]),[h,i]=J(e,"loadedKeys",()=>[]),g=P([]),k=({key:u,expanded:b,node:C})=>{if(He(s.value))return be(H,{name:s.value,rotate:b?90:0});if(ze(s.value))return s.value({key:u,expanded:b,node:C});if(_e(s.value))return be(H,{name:b?s.value[0]:s.value[1]})},v=u=>{if(!u||u.length<=0)return;const{onExpandedChange:b}=e,C=l.value,f=new Set(y.value);u.forEach(w=>{ee(C,C.get(w)).forEach(L=>f.add(L))});const p=[...f];d(p),X(l,p,b)};Ue(r,v);const m=async(u,b)=>{var I;const{loadChildren:C}=e;if(g.value.includes(u))return;const f=a.value;if(!((I=b==null?void 0:b[f])!=null&&I.length)){if(!C||g.value.includes(u)||h.value.includes(u))return;g.value.push(u);const O=await C(b);g.value.splice(g.value.indexOf(u),1);const z=l.value,B=z.get(u);if(O!=null&&O.length){const W=B.level,_=De(e,O,f,o.value,t.value,u,W,{check:!!B.checkDisabled,drag:!!B.dragDisabled,drop:!!B.dropDisabled,select:!!B.selectDisabled});ue(_,z),B.rawNode[f]=O,B.children=_;const M=[...h.value,u];i(M),$(e.onLoaded,M,b)}else return}const p=y.value.indexOf(u),w=p>=0,L=[...y.value];w?L.splice(p,1):L.push(u),A(w,b,L)},A=(u,b,C)=>{const{onExpand:f,onExpandedChange:p}=e;$(f,!u,b),d(C),X(l,C,p)},K=()=>{const u=[],b=[];l.value.forEach(C=>{C.isLeaf||(u.push(C.key),b.push(C.rawNode))}),$(e.onExpandedChange,u,b),d(u)},S=()=>{$(e.onExpandedChange,[],[]),d([])};return r.value.length&&v(r.value),{expandIconRenderer:k,expandedKeys:y,setExpandedKeys:d,expandAll:K,collapseAll:S,handleExpand:m,loadingKeys:g}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function cn(e,n,a){const o=sn(e,a);return{searchedKeys:x(()=>{const{searchValue:l}=e;if(!l)return Ne;const r=o.value,s=[];return n.value.forEach(y=>{r(y.rawNode,l)&&s.push(y.key)}),s})}}function sn(e,n){return x(()=>{var a;return(a=e.searchFn)!=null?a:dn(n.value)})}function dn(e){return(n,a)=>{const o=n[e];return o?o.toLowerCase().includes(a.toLowerCase()):!1}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function un(e,n){const[a,o]=J(e,"selectedKeys",()=>[]),t=x(()=>e.selectable==="multiple"),l=P();Me(()=>{const d=a.value,h=d.length;l.value=h>0?d[h-1]:void 0});const r=x(()=>{const d=l.value;return d!==void 0?n.value.get(d):void 0}),s=d=>{const i=n.value.get(d);if(!i)return;const g=a.value.indexOf(d),k=g>-1;let v=[...a.value];t.value?k?v.splice(g,1):v.push(d):v=k?[]:[d],y(k,i.rawNode,v)},y=(d,h,i)=>{var m;const{onSelect:g,onSelectedChange:k}=e,v=i.includes((m=h.key)!=null?m:"")?!0:!d;$(g,v,h),o(i),X(n,i,k)};return{activeKey:l,activeNode:r,selectedKeys:a,handleSelect:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=Symbol("treeToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const fn={autoHeight:{type:Boolean,default:void 0},checkedKeys:Array,expandedKeys:Array,indeterminateKeys:Array,loadedKeys:Array,selectedKeys:Array,blocked:{type:Boolean,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},childrenKey:String,checkOnClick:{type:Boolean,default:!1},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:Function,draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:Function,empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Object,Function,Array],default:void 0},getKey:{type:[String,Function],default:void 0},height:Number,labelKey:String,leafLineIcon:String,loadChildren:Function,searchFn:Function,searchValue:String,selectable:{type:[Boolean,String],default:!0},showLine:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:28},"onUpdate:checkedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:selectedKeys":[Function,Array],onCheck:[Function,Array],onCheckedChange:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],onSelectedChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onKeydown:[Function,Array],onKeyup:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},hn={node:{type:Object,required:!0},isLeaf:{type:Boolean,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0},label:String,level:{type:Number,required:!0},rawNode:{type:Object,required:!0},expanded:{type:Boolean,required:!0},children:Array,parentKey:[String,Number,Symbol],checkDisabled:{type:Boolean,default:void 0},dragDisabled:{type:Boolean,default:void 0},dropDisabled:{type:Boolean,default:void 0},selectDisabled:{type:Boolean,default:void 0}},gn={node:{type:Object,required:!0},checkDisabled:{type:Boolean,default:void 0}},vn={expanded:{type:Boolean,required:!0},hasTopLine:{type:Boolean,default:void 0},isLeaf:{type:Boolean,default:void 0},nodeKey:{type:[String,Number,Symbol],required:!0},rawNode:{type:Object,required:!0}},yn={disabled:{type:Boolean,default:void 0},node:{type:Object,required:!0},nodeKey:{type:[String,Number,Symbol],required:!0},label:String,selected:{type:Boolean,default:void 0}},pn=G({props:gn,setup(e){const{mergedPrefixCls:n,allCheckedKeys:a,indeterminateKeys:o,handleCheck:t}=Q(V),l=x(()=>a.value.includes(e.node.key)),r=x(()=>o.value.includes(e.node.key)),s=()=>t(e.node);return()=>D(Be,{class:`${n.value}-node-checkbox`,checked:l.value,disabled:e.checkDisabled,indeterminate:r.value,onChange:s},null)}}),bn=G({props:yn,setup(e){const{props:n,mergedPrefixCls:a,mergedCheckOnClick:o,slots:t,handleSelect:l,handleCheck:r,searchedKeys:s}=Q(V),y=x(()=>s.value.includes(e.nodeKey)),d=i=>{e.disabled||(l(e.nodeKey),o.value&&r(e.node)),$(n.onNodeClick,i,e.node.rawNode)},h=i=>{$(n.onNodeContextmenu,i,e.node.rawNode)};return()=>{var f,p;const{nodeKey:i,label:g,node:k,selected:v}=e,{rawNode:m}=k,{prefix:A,suffix:K}=m,S={key:i,selected:v,node:m},u=((f=t.prefix)==null?void 0:f.call(t,S))||A&&D(H,{name:A},null),b=((p=t.suffix)==null?void 0:p.call(t,S))||K&&D(H,{name:K},null),C=`${a.value}-node-content`;return D("span",{class:C,onClick:d,onContextmenu:h},[u&&D("span",{class:`${C}-prefix`},[u]),D("span",{class:`${C}-label`},[kn(t.label,g,m,n.searchValue,y.value,C)]),b&&D("span",{class:`${C}-suffix`},[b])])}}});function kn(e,n,a,o,t,l){if(e)return e({node:a,searchValue:o,searched:t});if(t&&n&&o){const r=n.toUpperCase().indexOf(o.toUpperCase());if(r>-1){const s=r+o.length,y=n.substring(0,r),d=n.substring(s),h=D("span",{class:`${l}-label-highlight`},[n.substring(r,s)]);return[y,h,d]}}return n}const xn=G({props:vn,setup(e){const{mergedPrefixCls:n,slots:a,expandIconRenderer:o,loadingKeys:t,handleExpand:l}=Q(V),r=x(()=>t.value.includes(e.nodeKey)),s=x(()=>{const d=`${n.value}-node-expand`;return Re({[d]:!0,[`${d}-noop`]:e.isLeaf})}),y=d=>{l(e.nodeKey,e.rawNode),d.stopPropagation()};return()=>{var i,g;const d=`${n.value}-node-expand`;let h;if(r.value)h=D(H,{name:"loading"},null);else if(!e.isLeaf){const{expanded:k,nodeKey:v,rawNode:m}=e;h=(g=(i=a.expandIcon)!=null?i:o)==null?void 0:g({key:v,expanded:k,node:m})}return D("span",{class:s.value,onClick:y},[e.hasTopLine&&D("div",{class:`${d}-top-line`},null),h])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Cn=({level:e,noopIdentUnitArr:n,prefixCls:a})=>{const o=[];for(let t=0;t<e;t++)o.push(D("span",{key:t,class:n.includes(t)?`${a}-node-indent-noop-unit`:`${a}-node-indent-unit`},null));return D("span",{"aria-hidden":!0,class:`${a}-node-indent`},[o])},Kn=Cn,mn=G({setup(){const{props:e,mergedPrefixCls:n,slots:a}=Q(V);return()=>{const o=`${n.value}-node-leaf`;let t;return a.leafLineIcon?t=a.leafLineIcon():e.leafLineIcon?t=D(H,{name:e.leafLineIcon},null):t=D("span",{class:`${o}-line`},null),D("span",{class:o},[t])}}}),xe=G({props:hn,setup(e){const{props:n,flattedNodes:a,mergedPrefixCls:o,mergedShowLine:t,activeKey:l,selectedKeys:r,slots:s,draggableIcon:y,dragKey:d,dropKey:h,dropParentKey:i,dropType:g,handleDragstart:k,handleDragend:v,handleDragenter:m,handleDragover:A,handleDragleave:K,handleDrop:S}=Q(V),u=Ee(),b=x(()=>l.value===u),C=x(()=>t.value&&e.isLast),f=x(()=>t.value&&!e.isLeaf&&e.level!==0&&e.isFirst),p=x(()=>r.value.includes(u)),w=x(()=>e.selectDisabled||!n.selectable),L=x(()=>d.value===u),I=x(()=>h.value===u),O=x(()=>i.value===u),z=x(()=>I.value&&g.value==="before"),B=x(()=>I.value&&g.value==="inside"),W=x(()=>I.value&&g.value==="after"),_=x(()=>{const c=`${o.value}-node`;return{[c]:!0,[`${c}-active`]:b.value,[`${c}-last`]:C.value,[`${c}-disabled`]:w.value,[`${c}-selected`]:p.value,[`${c}-expanded`]:e.expanded,[`${c}-dragging`]:L.value,[`${c}-dropping`]:I.value,[`${c}-drop-parent`]:O.value,[`${c}-drop-before`]:z.value,[`${c}-drop-inside`]:B.value,[`${c}-drop-after`]:W.value}}),M=c=>{var F;c.stopPropagation(),k(c,e.node),(F=c.dataTransfer)==null||F.setData("text/plain","")},ne=c=>{c.stopPropagation(),v(c,e.node)},te=c=>{c.preventDefault(),c.stopPropagation(),m(c,e.node)},ae=c=>{c.preventDefault(),c.stopPropagation(),A(c,e.node)},oe=c=>{c.stopPropagation(),K(c,e.node)},le=c=>{c.stopPropagation(),S(c,e.node)};return()=>{var ge,ve;const c=new Map;a.value.forEach(Y=>{c.set(Y.key,Y)});const{isLeaf:F,label:N,level:E,rawNode:q,expanded:R,checkDisabled:re,dragDisabled:ce,dropDisabled:se,node:j}=e,{checkable:we,draggable:fe}=n,U=fe&&!ce,Fe=(ve=(ge=s.draggableIcon)==null?void 0:ge.call(s))!=null?ve:D(H,{name:y.value},null),Le=c.get(u),he=[];t.value&&ee(c,Le).reverse().forEach((Y,Ie)=>{var ye;(ye=c.get(Y))!=null&&ye.isLast&&he.push(Ie)});const $e=n.customAdditional?n.customAdditional({node:q,level:E}):void 0;return D("div",ie({class:_.value,"aria-grabbed":L.value||void 0,"aria-label":N,"aria-selected":p.value,draggable:U||void 0,title:N,onDragstart:U?M:void 0,onDragend:U?ne:void 0,onDragenter:U?te:void 0,onDragover:U?ae:void 0,onDragleave:U?oe:void 0,onDrop:U&&!se?le:void 0},$e),[D(Kn,{level:E,noopIdentUnitArr:he,prefixCls:o.value},null),U?D("span",{class:`${o.value}-node-draggable-icon`},[Fe]):fe&&D("span",{class:`${o.value}-node-draggable-icon-noop`},null),F&&t.value?D(mn,null,null):D(xn,{expanded:R,hasTopLine:f.value,isLeaf:F,nodeKey:u,rawNode:q},null),we&&D(pn,{checkDisabled:re,node:j},null),D(bn,{disabled:w.value,node:j,nodeKey:u,label:N,selected:p.value},null)])}}}),Ce={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Dn=G({name:"IxTree",props:fn,setup(e,{attrs:n,expose:a,slots:o}){const t=pe("common"),l=x(()=>`${t.prefixCls}-tree`),r=pe("tree"),s=x(()=>{var c;return(c=e.autoHeight)!=null?c:r.autoHeight}),y=x(()=>{var c;return(c=e.childrenKey)!=null?c:r.childrenKey}),d=Pe(e,r),h=x(()=>{var c;return(c=e.labelKey)!=null?c:r.labelKey}),i=x(()=>{var c;return(c=e.showLine)!=null?c:r.showLine}),g=x(()=>{var c;return(c=e.blocked)!=null?c:r.blocked}),k=x(()=>e.checkable&&e.checkOnClick),{mergedNodes:v,mergedNodeMap:m}=Je(e,y,d,h),{searchedKeys:A}=cn(e,m,h),K=rn(e,r,y,d,h,m,A),S=Xe(v,K,e,A),u=We(e,m),b=tn(e,r,K),C=un(e,m);Ge(V,{props:e,slots:o,config:r,flattedNodes:S,mergedPrefixCls:l,mergedNodeMap:m,mergedGetKey:d,mergedShowLine:i,mergedCheckOnClick:k,searchedKeys:A,...u,...K,...b,...C});const f=P(),p=P(),{activeKey:w}=C,{focused:L,handleFocus:I,handleBlur:O,handleKeydown:z,handleKeyup:B}=ln(e,m,S,K,C),W=x(()=>{const c=l.value;return{[c]:!0,[`${c}-active`]:!T(w.value),[`${c}-blocked`]:g.value,[`${c}-virtual`]:e.virtual,[`${c}-auto-height`]:s.value,[`${c}-focused`]:L.value,[`${c}-show-line`]:i.value,[`${c}-empty`]:!S.value.length}}),_=x(()=>{var q,R;const c=w.value;if(T(c))return"";const F=m.value;let N=String(c),E=(q=F.get(c))==null?void 0:q.parentKey;for(;E;)N=`${String(E)} > ${N}`,E=(R=F.get(E))==null?void 0:R.parentKey;return N}),M=c=>{var F;(F=f==null?void 0:f.value)==null||F.focus(c)},ne=()=>{var c;(c=f==null?void 0:f.value)==null||c.blur()},te=c=>{var F;(F=p.value)==null||F.scrollTo(c)},ae=c=>{var F;return(F=m.value.get(c))==null?void 0:F.rawNode},oe=()=>S.value;a({focus:M,blur:ne,expandAll:K.expandAll,collapseAll:K.collapseAll,scrollTo:te,getNode:ae,_getFlattedNodes:oe});const le=(c,F,N)=>{$(e.onScrolledChange,c,F,N.map(E=>E.rawNode))};return()=>{var N;const c=S.value;let F;if(c.length>0){const E=({item:j})=>D(xe,ie({node:j},j),null),{height:q,virtual:R,virtualItemHeight:re,onScroll:ce,onScrolledBottom:se}=e;F=R?D(Te,{ref:p,class:`${l.value}-content`,dataSource:c,getKey:"key",height:s.value?"100%":q,itemHeight:re,itemRender:E,virtual:!0,onScroll:ce,onScrolledBottom:se,onScrolledChange:le},null):D("div",{class:`${l.value}-content`,style:Ve(s.value?void 0:{maxHeight:Oe(q)})},[D("div",{class:`${l.value}-content-inner`},[c.map(j=>D(xe,ie({node:j},j),null))])])}else F=D(qe,{empty:e.empty},o);return D("div",{class:W.value,role:"tree"},[L.value&&D("span",{style:Ce,"aria-live":"assertive"},[_.value]),D("input",{ref:f,style:Ce,tabindex:(N=n.tabIndex)!=null?N:0,onFocus:I,onBlur:O,onKeydown:z,onKeyup:B,value:"","aria-label":"for screen reader"},null),F])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const wn=Dn;export{wn as I};
