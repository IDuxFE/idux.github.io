import{m as L,al as Y,ao as Ie,k as Ne,A as _,a6 as Be,L as pe,ar as Ee,H as Pe,aF as Te,aq as Oe}from"./index-f61938a0.js";import{k as P,f as x,b as E,O as qe,w as Ue,Q as je,v as R,y as m,i as W,P as ze,z as He,a3 as de,p as Me,B as _e}from"./vendor-2234ada1.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function J(e,n,a){if(a){const o=[],t=e.value;n.forEach(l=>{const r=t.get(l);r&&o.push(r.rawNode)}),L(a,n,o)}}function X(e,n){const a=[],{children:o}=e||{};return o&&o.forEach(t=>{const{key:l}=t;n!=null&&n.includes(l)||a.push(t.key),a.push(...X(t,n))}),a}function Z(e,n,a){const o=[];for(;n&&!P(n.parentKey);){const{parentKey:t}=n;a!=null&&a.includes(n.parentKey)||o.push(t),n=e.get(t)}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Re(e,n){const[a,o]=Y(e,"checkedKeys",()=>[]),t=x(()=>{const d=[];return e.checkable&&n.value.forEach((f,i)=>{f.checkDisabled&&d.push(i)}),d}),l=x(()=>e.cascaderStrategy!=="off"?Ge(n.value,a.value,t.value):a.value),r=x(()=>{const d=l.value;if(d.length===0||e.cascaderStrategy==="off")return[];const f=new Set,i=n.value;return d.forEach(h=>{const{parentKey:b}=i.get(h)||{};if(!P(b)){let k=i.get(b);if(k&&!d.includes(k.key))for(f.add(b);k&&!P(k.parentKey);)f.add(k.parentKey),k=i.get(k.parentKey)}}),[...f]}),s=d=>{const f=d.key,i=n.value,h=t.value,b=e.cascaderStrategy,k=b!=="off",K=k?X(d,h):[],F=l.value.indexOf(f);let C=[...l.value];const v=F>-1||!!K.length&&K.every(y=>C.includes(y)||r.value.includes(y));if(v){const y=k?Z(i,d,h):[];C.splice(F,1),C=C.filter(D=>!y.includes(D)&&!K.includes(D))}else C.push(f),k&&Ce(i,d,C,h),C.push(...K);g(v,d.rawNode,Ve(b,C,i,h))},g=(d,f,i)=>{const{onCheck:h,onCheckedChange:b}=e;L(h,!d,f),o(i),J(n,i,b)};return{checkedKeys:a,allCheckedKeys:l,checkDisabledKeys:t,indeterminateKeys:r,handleCheck:s}}function Ce(e,n,a,o){let t=!0;for(;t&&n&&!P(n.parentKey);){const l=e.get(n.parentKey);l&&!o.includes(n.parentKey)&&(t=l.children.every(r=>o.includes(r.key)||a.includes(r.key)),t&&a.push(n.parentKey)),n=l}}function Ve(e,n,a,o){if(e==="off")return[...new Set(n)];let t=[];n=Ke(a,n,o),o.length&&(t=n.filter(l=>o.includes(l)));for(const l of n){const r=a.get(l);if(r){const s=r.key,g=r.parentKey;e==="parent"?n.includes(g)||t.push(s):e==="child"?r.isLeaf&&t.push(s):t.push(s)}}return[...new Set(t)]}function Ge(e,n,a){let o=[...n],t;for(const l of n){const r=e.get(l),s=r==null?void 0:r.parentKey,g=X(r,a);o=o.concat(g),!P(s)&&t!==s&&(Ce(e,r,o,a),t=s)}return o=Ke(e,[...new Set(o)],a),o}function Ke(e,n,a){let o=[...n];if(a.length){for(const t of a)if(!o.includes(t)){const l=e.get(t),r=Z(e,l,a);o=o.filter(s=>!r.includes(s))}}return o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,n,a,o){const t=x(()=>me(e,e.dataSource,n.value,a.value,o.value)),l=x(()=>{const r=new Map;return ie(t.value,r),r});return{mergedNodes:t,mergedNodeMap:l}}function Qe(e,{expandedKeys:n},a,o){return x(()=>{const{searchValue:t}=a,l=new Map(n.value.map((s,g)=>[s,g])),r=new Map(o.value.map((s,g)=>[s,g]));return t&&!r.size?[]:l.size||r.size?Je(e.value,l,r):e.value.map(s=>({...s,expanded:!1,level:0}))})}function me(e,n,a,o,t,l,r){const{disabled:s,loadChildren:g}=e,d=P(r)?-1:r;return n.map((f,i)=>De(f,a,o,t,s,!!g,i===0,i===n.length-1,d,l))}function De(e,n,a,o,t,l,r,s,g,d){var v;const f=a(e),{check:i,drag:h,drop:b,select:k}=Ye(e,t),K=e[n],F=e[o];g++;const C=K==null?void 0:K.map((y,D)=>De(y,n,a,o,t,l,D===0,D===K.length-1,g,f));return{children:C,label:F,key:f,isFirst:r,isLeaf:(v=e.isLeaf)!=null?v:!(C!=null&&C.length||l),isLast:s,parentKey:d,expanded:!1,level:g,rawNode:e,checkDisabled:i,dragDisabled:h,dropDisabled:b,selectDisabled:k}}function Ye(e,n){const a=e.disabled||{};if(a===!0)return{check:!0,drag:!0,drop:!0,select:!0};let{check:o,drag:t,drop:l,select:r}=a;if(n){const s=n(e)||{};if(s===!0)return{check:!0,drag:!0,drop:!0,select:!0};o=o||s.check,t=t||s.drag,l=l||s.drop,r=r||s.select}return{check:o,drag:t,drop:l,select:r}}function ie(e,n){e.forEach(a=>{const{key:o,children:t}=a;n.set(o,a),t&&ie(t,n)})}function Se(e=[],n){const a=[],o=e.length;return e.forEach((t,l)=>{t.isFirst=l===0,t.isLast=l===o-1,n.has(t.key)||n.size==0?(t.hidden=!1,a.push(t)):t.hidden=!0,Se(t.children,n).length>0&&(t.hidden=!1,a.push(t))}),a.length&&(a[0].isFirst=!0,a[a.length-1].isLast=!0),a}function Je(e,n,a){const o=[],t=[];return Se(e,a),e.forEach(l=>{for(t.push(l);t.length;){const r=t.pop();if(r){const{children:s,key:g,hidden:d}=r,f=n.has(g);if(r.expanded=f,!d&&o.push(r),s&&f)for(let i=s.length;i>0;i--)!s[i-1].hidden&&t.push(s[i-1])}}}),o}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Xe(e,n,{expandedKeys:a,setExpandedKeys:o}){const t=x(()=>{var u;return(u=e.draggableIcon)!=null?u:n.draggableIcon}),l=E(),r=E(),s=E(),g=E(),d=E();let f;const i=()=>{f&&(clearTimeout(f),f=void 0)};qe(()=>i());const h=()=>{P(l.value)||(l.value=void 0,r.value=void 0)},b=()=>{P(s.value)||(s.value=void 0,g.value=void 0,d.value=void 0)},k=(u,p)=>{var A,$;return{evt:u,node:p.rawNode,dragNode:(A=l.value)==null?void 0:A.rawNode,dropNode:($=s.value)==null?void 0:$.rawNode,dropType:d.value}},K=u=>{C(u,void 0),window.removeEventListener("dragend",K)},F=(u,p)=>{l.value=p,r.value=X(p),en(p.key,a.value,o),window.addEventListener("dragend",K),L(e.onDragstart,k(u,p))},C=(u,p)=>{p&&L(e.onDragend,k(u,p)),h(),b()},v=async(u,p)=>{const A=l.value;if(A){i(),A.key!==p.key&&(f=setTimeout(()=>{var I;l.value&&((I=p.children)!=null&&I.length)&&Ze(p.key,a.value,o),f=void 0},1e3));const $=await be(p,A,r.value,u,e.droppable);$?(s.value=p,g.value=$!=="inside"?p.parentKey:void 0,d.value=$):b()}L(e.onDragenter,k(u,p))},y=async(u,p)=>{const A=l.value;if(A){const $=await be(p,A,r.value,u,e.droppable);$?(s.value=p,g.value=$!=="inside"?p.parentKey:void 0,d.value=$):b()}L(e.onDragover,k(u,p))},D=(u,p)=>{const A=s.value;(A==null?void 0:A.key)===p.key&&!u.currentTarget.contains(u.relatedTarget)&&b(),L(e.onDragleave,k(u,p))},S=(u,p)=>{d.value||b(),L(e.onDrop,k(u,p)),h(),b()};return{draggableIcon:t,dragKey:x(()=>{var u;return(u=l.value)==null?void 0:u.key}),dropKey:x(()=>{var u;return(u=s.value)==null?void 0:u.key}),dropParentKey:g,dropType:d,handleDragstart:F,handleDragend:C,handleDragenter:v,handleDragover:y,handleDragleave:D,handleDrop:S}}function Ze(e,n,a){n.indexOf(e)===-1&&a([...n,e])}function en(e,n,a){const o=n.indexOf(e);if(o!==-1){const t=[...n];t.splice(o,1),a(t)}}async function be(e,n,a,o,t){const{key:l,children:r=[]}=e;if(n.key===l||a&&a.includes(l))return!1;const{clientY:s}=o,{top:g,height:d}=o.target.getBoundingClientRect(),f=s<g+d/2;let i;if(t){const h={evt:o,isTopHalf:f,dragNode:n.rawNode,dropNode:e.rawNode};i=await t(h)}return(i===void 0||i===!0)&&(r.length>0?i="inside":f?i="before":i="after"),i}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function nn(e,n,a,{expandedKeys:o,handleExpand:t},{activeKey:l,handleSelect:r}){const s=E(!1);return{focused:s,handleFocus:h=>{s.value=!0,L(e.onFocus,h)},handleBlur:h=>{s.value=!0,L(e.onBlur,h)},handleKeydown:h=>{switch(h.code){case"ArrowUp":case"ArrowDown":h.preventDefault()}L(e.onKeydown,h)},handleKeyup:h=>{const b=h.code,k=l.value,K=a.value,F=K.length;if(k===void 0)["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(b)&&se(l,K,0,F);else{const C=a.value,v=C.findIndex(y=>y.key===k);if(v===-1)return;switch(b){case"Enter":case"NumpadEnter":r(k);break;case"ArrowDown":se(l,C,v+1,F);break;case"ArrowUp":se(l,C,v-1,0,!0);break;case"ArrowLeft":{const{rawNode:y,key:D,parentKey:S}=C[v];if(y.isLeaf||!o.value.includes(D)){const u=S?n.value.get(S):void 0;u&&(l.value=u.key)}else t(D,y)}break;case"ArrowRight":{const{rawNode:y,key:D}=C[v];if(!o.value.includes(D))t(D,y);else for(let S=v+1;S<F;S++){const u=C[S];l.value=u.key;break}}break}}L(e.onKeyup,h)}}}function se(e,n,a,o,t=!1){let l=a;for(;t?l>=o:l<o;){const r=n[l];if(r.selectDisabled)t?l--:l++;else{e.value=r.key;return}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tn(e,n,a,o,t,l,r){const s=x(()=>{var v;return(v=e.expandIcon)!=null?v:n.expandIcon}),[g,d]=Y(e,"expandedKeys",()=>[]),[f,i]=Y(e,"loadedKeys",()=>[]),h=E([]),b=v=>{if(!v||v.length<=0)return;const{onExpandedChange:y}=e,D=l.value,S=new Set(g.value);v.forEach(p=>{Z(D,D.get(p)).forEach(A=>S.add(A))});const u=[...S];d(u),J(l,u,y)};Ue(r,b);const k=async(v,y)=>{var $;const{loadChildren:D}=e;if(h.value.includes(v))return;const S=a.value;if(!(($=y==null?void 0:y[S])!=null&&$.length)){if(!D||h.value.includes(v)||f.value.includes(v))return;h.value.push(v);const I=await D(y);h.value.splice(h.value.indexOf(v),1);const j=l.value,q=j.get(v);if(I!=null&&I.length){const G=q.level,z=me(e,I,S,o.value,t.value,v,G);ie(z,j),q.rawNode[S]=I,q.children=z;const H=[...f.value,v];i(H),L(e.onLoaded,H,y)}else return}const u=g.value.indexOf(v),p=u>=0,A=[...g.value];p?A.splice(u,1):A.push(v),K(p,y,A)},K=(v,y,D)=>{const{onExpand:S,onExpandedChange:u}=e;L(S,!v,y),d(D),J(l,D,u)},F=()=>{const v=[],y=[];l.value.forEach(D=>{D.isLeaf||(v.push(D.key),y.push(D.rawNode))}),L(e.onExpandedChange,v,y),d(v)},C=()=>{L(e.onExpandedChange,[],[]),d([])};return r.value.length&&b(r.value),{expandIcon:s,expandedKeys:g,setExpandedKeys:d,expandAll:F,collapseAll:C,handleExpand:k,loadingKeys:h}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function an(e,n,a){const o=on(e,a);return{searchedKeys:x(()=>{const{searchValue:l}=e;if(!l)return Ie;const r=o.value,s=[];return n.value.forEach(g=>{r(g.rawNode,l)&&s.push(g.key)}),s})}}function on(e,n){return x(()=>{var a;return(a=e.searchFn)!=null?a:ln(n.value)})}function ln(e){return(n,a)=>{const o=n[e];return o?o.toLowerCase().includes(a.toLowerCase()):!1}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rn(e,n){const[a,o]=Y(e,"selectedKeys",()=>[]),t=x(()=>e.selectable==="multiple"),l=E();je(()=>{const d=a.value,f=d.length;l.value=f>0?d[f-1]:void 0});const r=x(()=>{const d=l.value;return d!==void 0?n.value.get(d):void 0}),s=d=>{const i=n.value.get(d);if(!i)return;const h=a.value.indexOf(d),b=h>-1;let k=[...a.value];t.value?b?k.splice(h,1):k.push(d):k=b?[]:[d],g(b,i.rawNode,k)},g=(d,f,i)=>{var K;const{onSelect:h,onSelectedChange:b}=e,k=i.includes((K=f.key)!=null?K:"")?!0:!d;L(h,k,f),o(i),J(n,i,b)};return{activeKey:l,activeNode:r,selectedKeys:a,handleSelect:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=Symbol("treeToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const cn={autoHeight:{type:Boolean,default:void 0},checkedKeys:Array,expandedKeys:Array,indeterminateKeys:Array,loadedKeys:Array,selectedKeys:Array,blocked:{type:Boolean,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},childrenKey:String,checkOnClick:{type:Boolean,default:!1},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:Function,draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:Function,empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Array],default:void 0},getKey:{type:[String,Function],default:void 0},height:Number,labelKey:String,leafLineIcon:String,loadChildren:Function,searchFn:Function,searchValue:String,selectable:{type:[Boolean,String],default:!0},showLine:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:checkedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:selectedKeys":[Function,Array],onCheck:[Function,Array],onCheckedChange:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],onSelectedChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onKeydown:[Function,Array],onKeyup:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},sn={node:{type:Object,required:!0},isLeaf:{type:Boolean,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0},label:String,level:{type:Number,required:!0},rawNode:{type:Object,required:!0},expanded:{type:Boolean,required:!0},children:Array,parentKey:[String,Number,Symbol],checkDisabled:{type:Boolean,default:void 0},dragDisabled:{type:Boolean,default:void 0},dropDisabled:{type:Boolean,default:void 0},selectDisabled:{type:Boolean,default:void 0}},dn={node:{type:Object,required:!0},checkDisabled:{type:Boolean,default:void 0}},un={expanded:{type:Boolean,required:!0},hasTopLine:{type:Boolean,default:void 0},isLeaf:{type:Boolean,default:void 0},nodeKey:{type:[String,Number,Symbol],required:!0},rawNode:{type:Object,required:!0}},fn={disabled:{type:Boolean,default:void 0},node:{type:Object,required:!0},nodeKey:{type:[String,Number,Symbol],required:!0},label:String,selected:{type:Boolean,default:void 0}},hn=R({props:dn,setup(e){const{mergedPrefixCls:n,allCheckedKeys:a,indeterminateKeys:o,handleCheck:t}=W(V),l=x(()=>a.value.includes(e.node.key)),r=x(()=>o.value.includes(e.node.key)),s=()=>t(e.node);return()=>m(Ne,{class:`${n.value}-node-checkbox`,checked:l.value,disabled:e.checkDisabled,indeterminate:r.value,onChange:s},null)}}),vn=R({props:fn,setup(e){const{props:n,mergedPrefixCls:a,mergedCheckOnClick:o,slots:t,handleSelect:l,handleCheck:r,searchedKeys:s}=W(V),g=x(()=>s.value.includes(e.nodeKey)),d=i=>{e.disabled||(l(e.nodeKey),o.value&&r(e.node)),L(n.onNodeClick,i,e.node.rawNode)},f=i=>{L(n.onNodeContextmenu,i,e.node.rawNode)};return()=>{var u,p;const{nodeKey:i,label:h,node:b,selected:k}=e,{rawNode:K}=b,{prefix:F,suffix:C}=K,v={key:i,selected:k,node:K},y=((u=t.prefix)==null?void 0:u.call(t,v))||F&&m(_,{name:F},null),D=((p=t.suffix)==null?void 0:p.call(t,v))||C&&m(_,{name:C},null),S=`${a.value}-node-content`;return m("span",{class:S,onClick:d,onContextmenu:f},[y&&m("span",{class:`${S}-prefix`},[y]),m("span",{class:`${S}-label`},[gn(t.label,h,K,n.searchValue,g.value,S)]),D&&m("span",{class:`${S}-suffix`},[D])])}}});function gn(e,n,a,o,t,l){if(e)return e({node:a,searchValue:o,searched:t});if(t&&n&&o){const r=n.toUpperCase().indexOf(o.toUpperCase());if(r>-1){const s=r+o.length,g=n.substring(0,r),d=n.substring(s),f=m("span",{class:`${l}-label-highlight`},[n.substring(r,s)]);return[g,f,d]}}return n}const yn=R({props:un,setup(e){const{mergedPrefixCls:n,slots:a,expandIcon:o,loadingKeys:t,handleExpand:l}=W(V),r=x(()=>t.value.includes(e.nodeKey)),s=x(()=>{const d=`${n.value}-node-expand`;return He({[d]:!0,[`${d}-noop`]:e.isLeaf})}),g=d=>{l(e.nodeKey,e.rawNode),d.stopPropagation()};return()=>{const d=`${n.value}-node-expand`;let f;if(r.value)f=m(_,{name:"loading"},null);else if(!e.isLeaf){const{expanded:i}=e;if(a.expandIcon){const{nodeKey:h,rawNode:b}=e;f=a.expandIcon({key:h,expanded:i,node:b})}else{const h=o.value,b=ze(h);f=m(_,{name:b?i?h[0]:h[1]:h,rotate:i&&!b?90:0},null)}}return m("span",{class:s.value,onClick:g},[e.hasTopLine&&m("div",{class:`${d}-top-line`},null),f])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const pn=({level:e,noopIdentUnitArr:n,prefixCls:a})=>{const o=[];for(let t=0;t<e;t++)o.push(m("span",{key:t,class:n.includes(t)?`${a}-node-indent-noop-unit`:`${a}-node-indent-unit`},null));return m("span",{"aria-hidden":!0,class:`${a}-node-indent`},[o])},bn=pn,xn=R({setup(){const{props:e,mergedPrefixCls:n,slots:a}=W(V);return()=>{const o=`${n.value}-node-leaf`;let t;return a.leafLineIcon?t=a.leafLineIcon():e.leafLineIcon?t=m(_,{name:e.leafLineIcon},null):t=m("span",{class:`${o}-line`},null),m("span",{class:o},[t])}}}),xe=R({props:sn,setup(e){const{props:n,flattedNodes:a,mergedPrefixCls:o,mergedShowLine:t,activeKey:l,selectedKeys:r,slots:s,draggableIcon:g,dragKey:d,dropKey:f,dropParentKey:i,dropType:h,handleDragstart:b,handleDragend:k,handleDragenter:K,handleDragover:F,handleDragleave:C,handleDrop:v}=W(V),y=Be(),D=x(()=>l.value===y),S=x(()=>t.value&&e.isLast),u=x(()=>t.value&&!e.isLeaf&&e.level!==0&&e.isFirst),p=x(()=>r.value.includes(y)),A=x(()=>e.selectDisabled||!n.selectable),$=x(()=>d.value===y),I=x(()=>f.value===y),j=x(()=>i.value===y),q=x(()=>I.value&&h.value==="before"),G=x(()=>I.value&&h.value==="inside"),z=x(()=>I.value&&h.value==="after"),H=x(()=>{const c=`${o.value}-node`;return{[c]:!0,[`${c}-active`]:D.value,[`${c}-last`]:S.value,[`${c}-disabled`]:A.value,[`${c}-selected`]:p.value,[`${c}-expanded`]:e.expanded,[`${c}-dragging`]:$.value,[`${c}-dropping`]:I.value,[`${c}-drop-parent`]:j.value,[`${c}-drop-before`]:q.value,[`${c}-drop-inside`]:G.value,[`${c}-drop-after`]:z.value}}),ee=c=>{var w;c.stopPropagation(),b(c,e.node),(w=c.dataTransfer)==null||w.setData("text/plain","")},ne=c=>{c.stopPropagation(),k(c,e.node)},te=c=>{c.preventDefault(),c.stopPropagation(),K(c,e.node)},ae=c=>{c.preventDefault(),c.stopPropagation(),F(c,e.node)},oe=c=>{c.stopPropagation(),C(c,e.node)},le=c=>{c.stopPropagation(),v(c,e.node)};return()=>{var ve,ge;const c=new Map;a.value.forEach(Q=>{c.set(Q.key,Q)});const{isLeaf:w,label:N,level:B,rawNode:T,expanded:M,checkDisabled:re,dragDisabled:ce,dropDisabled:U,node:ue}=e,{checkable:Ae,draggable:fe}=n,O=fe&&!ce,we=(ge=(ve=s.draggableIcon)==null?void 0:ve.call(s))!=null?ge:m(_,{name:g.value},null),Fe=c.get(y),he=[];t.value&&Z(c,Fe).reverse().forEach((Q,$e)=>{var ye;(ye=c.get(Q))!=null&&ye.isLast&&he.push($e)});const Le=n.customAdditional?n.customAdditional({node:T,level:B}):void 0;return m("div",de({class:H.value,"aria-grabbed":$.value||void 0,"aria-label":N,"aria-selected":p.value,draggable:O||void 0,title:N,onDragstart:O?ee:void 0,onDragend:O?ne:void 0,onDragenter:O?te:void 0,onDragover:O?ae:void 0,onDragleave:O?oe:void 0,onDrop:O&&!U?le:void 0},Le),[m(bn,{level:B,noopIdentUnitArr:he,prefixCls:o.value},null),O?m("span",{class:`${o.value}-node-draggable-icon`},[we]):fe&&m("span",{class:`${o.value}-node-draggable-icon-noop`},null),w&&t.value?m(xn,null,null):m(yn,{expanded:M,hasTopLine:u.value,isLeaf:w,nodeKey:y,rawNode:T},null),Ae&&m(hn,{checkDisabled:re,node:ue},null),m(vn,{disabled:A.value,node:ue,nodeKey:y,label:N,selected:p.value},null)])}}}),ke={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},kn=R({name:"IxTree",props:cn,setup(e,{attrs:n,expose:a,slots:o}){const t=pe("common"),l=x(()=>`${t.prefixCls}-tree`),r=pe("tree"),s=x(()=>{var c;return(c=e.autoHeight)!=null?c:r.autoHeight}),g=x(()=>{var c;return(c=e.childrenKey)!=null?c:r.childrenKey}),d=Ee(e,r),f=x(()=>{var c;return(c=e.labelKey)!=null?c:r.labelKey}),i=x(()=>{var c;return(c=e.showLine)!=null?c:r.showLine}),h=x(()=>{var c;return(c=e.blocked)!=null?c:r.blocked}),b=x(()=>e.checkable&&e.checkOnClick),{mergedNodes:k,mergedNodeMap:K}=We(e,g,d,f),{searchedKeys:F}=an(e,K,f),C=tn(e,r,g,d,f,K,F),v=Qe(k,C,e,F),y=Re(e,K),D=Xe(e,r,C),S=rn(e,K);Me(V,{props:e,slots:o,config:r,flattedNodes:v,mergedPrefixCls:l,mergedNodeMap:K,mergedGetKey:d,mergedShowLine:i,mergedCheckOnClick:b,searchedKeys:F,...y,...C,...D,...S});const u=E(),p=E(),{activeKey:A}=S,{focused:$,handleFocus:I,handleBlur:j,handleKeydown:q,handleKeyup:G}=nn(e,K,v,C,S),z=x(()=>{const c=l.value;return{[c]:!0,[`${c}-active`]:!P(A.value),[`${c}-blocked`]:h.value,[`${c}-virtual`]:e.virtual,[`${c}-auto-height`]:s.value,[`${c}-focused`]:$.value,[`${c}-show-line`]:i.value,[`${c}-empty`]:!v.value.length}}),H=x(()=>{var T,M;const c=A.value;if(P(c))return"";const w=K.value;let N=String(c),B=(T=w.get(c))==null?void 0:T.parentKey;for(;B;)N=`${String(B)} > ${N}`,B=(M=w.get(B))==null?void 0:M.parentKey;return N}),ee=c=>{var w;(w=u==null?void 0:u.value)==null||w.focus(c)},ne=()=>{var c;(c=u==null?void 0:u.value)==null||c.blur()},te=c=>{var w;(w=p.value)==null||w.scrollTo(c)},ae=c=>{var w;return(w=K.value.get(c))==null?void 0:w.rawNode},oe=()=>v.value;a({focus:ee,blur:ne,expandAll:C.expandAll,collapseAll:C.collapseAll,scrollTo:te,getNode:ae,_getFlattedNodes:oe});const le=(c,w,N)=>{L(e.onScrolledChange,c,w,N.map(B=>B.rawNode))};return()=>{var N;const c=v.value;let w;if(c.length>0){const B=({item:U})=>m(xe,de({node:U},U),null),{height:T,virtual:M,onScroll:re,onScrolledBottom:ce}=e;w=M?m(Pe,{ref:p,class:`${l.value}-content`,dataSource:c,getKey:"key",height:s.value?"100%":T,itemHeight:28,itemRender:B,virtual:!0,onScroll:re,onScrolledBottom:ce,onScrolledChange:le},null):m("div",{class:`${l.value}-content`,style:_e(s.value?void 0:{maxHeight:Te(T)})},[m("div",{class:`${l.value}-content-inner`},[c.map(U=>m(xe,de({node:U},U),null))])])}else w=m(Oe,{empty:e.empty},o);return m("div",{class:z.value,role:"tree"},[$.value&&m("span",{style:ke,"aria-live":"assertive"},[H.value]),m("input",{ref:u,style:ke,tabindex:(N=n.tabIndex)!=null?N:0,onFocus:I,onBlur:j,onKeydown:q,onKeyup:G,value:"","aria-label":"for screen reader"},null),w])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const mn=kn;export{mn as I};