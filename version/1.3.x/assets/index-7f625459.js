import{m as F,al as Q,ao as $e,k as Ie,A as _,a6 as Ne,L as ve,ar as Be,H as Ee,aJ as Pe,aq as Te}from"./index-4edbd2bb.js";import{k as P,f as x,b as E,N as Oe,w as qe,Q as Ue,v as R,y as C,i as W,O as je,z as ze,a2 as ce,p as He,B as Me}from"./vendor-1c103b38.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(e,n,o){if(o){const a=[],t=e.value;n.forEach(l=>{const r=t.get(l);r&&a.push(r.rawNode)}),F(o,n,a)}}function X(e,n){const o=[],{children:a}=e||{};return a&&a.forEach(t=>{const{key:l}=t;n!=null&&n.includes(l)||o.push(t.key),o.push(...X(t,n))}),o}function Z(e,n,o){const a=[];for(;n&&!P(n.parentKey);){const{parentKey:t}=n;o!=null&&o.includes(n.parentKey)||a.push(t),n=e.get(t)}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function _e(e,n){const[o,a]=Q(e,"checkedKeys",()=>[]),t=x(()=>{const s=[];return e.checkable&&n.value.forEach((u,d)=>{u.checkDisabled&&s.push(d)}),s}),l=x(()=>e.cascaderStrategy!=="off"?Ve(n.value,o.value,t.value):o.value),r=x(()=>{const s=l.value;if(s.length===0||e.cascaderStrategy==="off")return[];const u=new Set,d=n.value;return s.forEach(f=>{const{parentKey:b}=d.get(f)||{};if(!P(b)){let k=d.get(b);if(k&&!s.includes(k.key))for(u.add(b);k&&!P(k.parentKey);)u.add(k.parentKey),k=d.get(k.parentKey)}}),[...u]}),c=s=>{const u=s.key,d=n.value,f=t.value,b=e.cascaderStrategy,k=b!=="off",K=k?X(s,f):[],L=l.value.indexOf(u),m=L>-1;let v=[...l.value];if(m||K.length&&K.every(y=>v.includes(y)||r.value.includes(y))){const y=k?Z(d,s,f):[];v.splice(L,1),v=v.filter(D=>!y.includes(D)&&!K.includes(D))}else v.push(u),k&&be(d,s,v,f),v.push(...K);g(m,s.rawNode,Re(b,v,d,f))},g=(s,u,d)=>{const{onCheck:f,onCheckedChange:b}=e;F(f,!s,u),a(d),Y(n,d,b)};return{checkedKeys:o,allCheckedKeys:l,checkDisabledKeys:t,indeterminateKeys:r,handleCheck:c}}function be(e,n,o,a){let t=!0;for(;t&&n&&!P(n.parentKey);){const l=e.get(n.parentKey);l&&!a.includes(n.parentKey)&&(t=l.children.every(r=>a.includes(r.key)||o.includes(r.key)),t&&o.push(n.parentKey)),n=l}}function Re(e,n,o,a){if(e==="off")return[...new Set(n)];let t=[];n=xe(o,n,a),a.length&&(t=n.filter(l=>a.includes(l)));for(const l of n){const r=o.get(l);if(r){const c=r.key,g=r.parentKey;e==="parent"?n.includes(g)||t.push(c):e==="child"?r.isLeaf&&t.push(c):t.push(c)}}return[...new Set(t)]}function Ve(e,n,o){let a=[...n],t;for(const l of n){const r=e.get(l),c=r==null?void 0:r.parentKey,g=X(r,o);a=a.concat(g),!P(c)&&t!==c&&(be(e,r,a,o),t=c)}return a=xe(e,[...new Set(a)],o),a}function xe(e,n,o){let a=[...n];if(o.length){for(const t of o)if(!a.includes(t)){const l=e.get(t),r=Z(e,l,o);a=a.filter(c=>!r.includes(c))}}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e,n,o,a){const t=x(()=>ke(e,e.dataSource,n.value,o.value,a.value)),l=x(()=>{const r=new Map;return se(t.value,r),r});return{mergedNodes:t,mergedNodeMap:l}}function We(e,{expandedKeys:n},o,a){return x(()=>{const{searchValue:t}=o,l=new Map(n.value.map((c,g)=>[c,g])),r=new Map(a.value.map((c,g)=>[c,g]));return t&&!r.size?[]:l.size||r.size?Qe(e.value,l,r):e.value.map(c=>({...c,expanded:!1,level:0}))})}function ke(e,n,o,a,t,l,r){const{disabled:c,loadChildren:g}=e,s=P(r)?-1:r;return n.map((u,d)=>Ce(u,o,a,t,c,!!g,d===0,d===n.length-1,s,l))}function Ce(e,n,o,a,t,l,r,c,g,s){const u=o(e),{check:d,drag:f,drop:b,select:k}=Je(e,t),K=e[n],L=e[a];g++;const m=K==null?void 0:K.map((v,y)=>Ce(v,n,o,a,t,l,y===0,y===K.length-1,g,u));return{children:m,label:L,key:u,isFirst:r,isLeaf:e.isLeaf??!(m!=null&&m.length||l),isLast:c,parentKey:s,expanded:!1,level:g,rawNode:e,checkDisabled:d,dragDisabled:f,dropDisabled:b,selectDisabled:k}}function Je(e,n){const o=e.disabled||{};if(o===!0)return{check:!0,drag:!0,drop:!0,select:!0};let{check:a,drag:t,drop:l,select:r}=o;if(n){const c=n(e)||{};if(c===!0)return{check:!0,drag:!0,drop:!0,select:!0};a=a||c.check,t=t||c.drag,l=l||c.drop,r=r||c.select}return{check:a,drag:t,drop:l,select:r}}function se(e,n){e.forEach(o=>{const{key:a,children:t}=o;n.set(a,o),t&&se(t,n)})}function Ke(e=[],n){const o=[],a=e.length;return e.forEach((t,l)=>{t.isFirst=l===0,t.isLast=l===a-1,n.has(t.key)||n.size==0?(t.hidden=!1,o.push(t)):t.hidden=!0,Ke(t.children,n).length>0&&(t.hidden=!1,o.push(t))}),o.length&&(o[0].isFirst=!0,o[o.length-1].isLast=!0),o}function Qe(e,n,o){const a=[],t=[];return Ke(e,o),e.forEach(l=>{for(t.push(l);t.length;){const r=t.pop();if(r){const{children:c,key:g,hidden:s}=r,u=n.has(g);if(r.expanded=u,!s&&a.push(r),c&&u)for(let d=c.length;d>0;d--)!c[d-1].hidden&&t.push(c[d-1])}}}),a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ye(e,n,{expandedKeys:o,setExpandedKeys:a}){const t=x(()=>e.draggableIcon??n.draggableIcon),l=E(),r=E(),c=E(),g=E(),s=E();let u;const d=()=>{u&&(clearTimeout(u),u=void 0)};Oe(()=>d());const f=()=>{P(l.value)||(l.value=void 0,r.value=void 0)},b=()=>{P(c.value)||(c.value=void 0,g.value=void 0,s.value=void 0)},k=(h,p)=>{var w,$;return{evt:h,node:p.rawNode,dragNode:(w=l.value)==null?void 0:w.rawNode,dropNode:($=c.value)==null?void 0:$.rawNode,dropType:s.value}},K=h=>{m(h,void 0),window.removeEventListener("dragend",K)},L=(h,p)=>{l.value=p,r.value=X(p),Ze(p.key,o.value,a),window.addEventListener("dragend",K),F(e.onDragstart,k(h,p))},m=(h,p)=>{p&&F(e.onDragend,k(h,p)),f(),b()},v=async(h,p)=>{const w=l.value;if(w){d(),w.key!==p.key&&(u=setTimeout(()=>{var I;l.value&&((I=p.children)!=null&&I.length)&&Xe(p.key,o.value,a),u=void 0},1e3));const $=await ge(p,w,r.value,h,e.droppable);$?(c.value=p,g.value=$!=="inside"?p.parentKey:void 0,s.value=$):b()}F(e.onDragenter,k(h,p))},y=async(h,p)=>{const w=l.value;if(w){const $=await ge(p,w,r.value,h,e.droppable);$?(c.value=p,g.value=$!=="inside"?p.parentKey:void 0,s.value=$):b()}F(e.onDragover,k(h,p))},D=(h,p)=>{const w=c.value;(w==null?void 0:w.key)===p.key&&!h.currentTarget.contains(h.relatedTarget)&&b(),F(e.onDragleave,k(h,p))},S=(h,p)=>{s.value||b(),F(e.onDrop,k(h,p)),f(),b()};return{draggableIcon:t,dragKey:x(()=>{var h;return(h=l.value)==null?void 0:h.key}),dropKey:x(()=>{var h;return(h=c.value)==null?void 0:h.key}),dropParentKey:g,dropType:s,handleDragstart:L,handleDragend:m,handleDragenter:v,handleDragover:y,handleDragleave:D,handleDrop:S}}function Xe(e,n,o){n.indexOf(e)===-1&&o([...n,e])}function Ze(e,n,o){const a=n.indexOf(e);if(a!==-1){const t=[...n];t.splice(a,1),o(t)}}async function ge(e,n,o,a,t){const{key:l,children:r=[]}=e;if(n.key===l||o&&o.includes(l))return!1;const{clientY:c}=a,{top:g,height:s}=a.target.getBoundingClientRect(),u=c<g+s/2;let d;if(t){const f={evt:a,isTopHalf:u,dragNode:n.rawNode,dropNode:e.rawNode};d=await t(f)}return(d===void 0||d===!0)&&(r.length>0?d="inside":u?d="before":d="after"),d}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function en(e,n,o,{expandedKeys:a,handleExpand:t},{activeKey:l,handleSelect:r}){const c=E(!1);return{focused:c,handleFocus:f=>{c.value=!0,F(e.onFocus,f)},handleBlur:f=>{c.value=!0,F(e.onBlur,f)},handleKeydown:f=>{switch(f.code){case"ArrowUp":case"ArrowDown":f.preventDefault()}F(e.onKeydown,f)},handleKeyup:f=>{const b=f.code,k=l.value,K=o.value,L=K.length;if(k===void 0)["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(b)&&re(l,K,0,L);else{const m=o.value,v=m.findIndex(y=>y.key===k);if(v===-1)return;switch(b){case"Enter":case"NumpadEnter":r(k);break;case"ArrowDown":re(l,m,v+1,L);break;case"ArrowUp":re(l,m,v-1,0,!0);break;case"ArrowLeft":{const{rawNode:y,key:D,parentKey:S}=m[v];if(y.isLeaf||!a.value.includes(D)){const h=S?n.value.get(S):void 0;h&&(l.value=h.key)}else t(D,y)}break;case"ArrowRight":{const{rawNode:y,key:D}=m[v];if(!a.value.includes(D))t(D,y);else for(let S=v+1;S<L;S++){const h=m[S];l.value=h.key;break}}break}}F(e.onKeyup,f)}}}function re(e,n,o,a,t=!1){let l=o;for(;t?l>=a:l<a;){const r=n[l];if(r.selectDisabled)t?l--:l++;else{e.value=r.key;return}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function nn(e,n,o,a,t,l,r){const c=x(()=>e.expandIcon??n.expandIcon),[g,s]=Q(e,"expandedKeys",()=>[]),[u,d]=Q(e,"loadedKeys",()=>[]),f=E([]),b=v=>{if(!v||v.length<=0)return;const{onExpandedChange:y}=e,D=l.value,S=new Set(g.value);v.forEach(p=>{Z(D,D.get(p)).forEach(w=>S.add(w))});const h=[...S];s(h),Y(l,h,y)};qe(r,b);const k=async(v,y)=>{var $;const{loadChildren:D}=e;if(f.value.includes(v))return;const S=o.value;if(!(($=y==null?void 0:y[S])!=null&&$.length)){if(!D||f.value.includes(v)||u.value.includes(v))return;f.value.push(v);const I=await D(y);f.value.splice(f.value.indexOf(v),1);const z=l.value,O=z.get(v);if(I!=null&&I.length){const G=O.level,H=ke(e,I,S,a.value,t.value,v,G);se(H,z),O.rawNode[S]=I,O.children=H;const M=[...u.value,v];d(M),F(e.onLoaded,M,y)}else return}const h=g.value.indexOf(v),p=h>=0,w=[...g.value];p?w.splice(h,1):w.push(v),K(p,y,w)},K=(v,y,D)=>{const{onExpand:S,onExpandedChange:h}=e;F(S,!v,y),s(D),Y(l,D,h)},L=()=>{const v=[],y=[];l.value.forEach(D=>{D.isLeaf||(v.push(D.key),y.push(D.rawNode))}),F(e.onExpandedChange,v,y),s(v)},m=()=>{F(e.onExpandedChange,[],[]),s([])};return r.value.length&&b(r.value),{expandIcon:c,expandedKeys:g,setExpandedKeys:s,expandAll:L,collapseAll:m,handleExpand:k,loadingKeys:f}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tn(e,n,o){const a=an(e,o);return{searchedKeys:x(()=>{const{searchValue:l}=e;if(!l)return $e;const r=a.value,c=[];return n.value.forEach(g=>{r(g.rawNode,l)&&c.push(g.key)}),c})}}function an(e,n){return x(()=>e.searchFn??on(n.value))}function on(e){return(n,o)=>{const a=n[e];return a?a.toLowerCase().includes(o.toLowerCase()):!1}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ln(e,n){const[o,a]=Q(e,"selectedKeys",()=>[]),t=x(()=>e.selectable==="multiple"),l=E();Ue(()=>{const s=o.value,u=s.length;l.value=u>0?s[u-1]:void 0});const r=x(()=>{const s=l.value;return s!==void 0?n.value.get(s):void 0}),c=s=>{const d=n.value.get(s);if(!d)return;const f=o.value.indexOf(s),b=f>-1;let k=[...o.value];t.value?b?k.splice(f,1):k.push(s):k=b?[]:[s],g(b,d.rawNode,k)},g=(s,u,d)=>{const{onSelect:f,onSelectedChange:b}=e,k=d.includes(u.key??"")?!0:!s;F(f,k,u),a(d),Y(n,d,b)};return{activeKey:l,activeNode:r,selectedKeys:o,handleSelect:c}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=Symbol("treeToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const rn={autoHeight:{type:Boolean,default:void 0},checkedKeys:Array,expandedKeys:Array,indeterminateKeys:Array,loadedKeys:Array,selectedKeys:Array,blocked:{type:Boolean,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},childrenKey:String,checkOnClick:{type:Boolean,default:!1},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:Function,draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:Function,empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Array],default:void 0},getKey:{type:[String,Function],default:void 0},height:Number,labelKey:String,leafLineIcon:String,loadChildren:Function,searchFn:Function,searchValue:String,selectable:{type:[Boolean,String],default:!0},showLine:{type:Boolean,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:checkedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:selectedKeys":[Function,Array],onCheck:[Function,Array],onCheckedChange:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],onSelectedChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onKeydown:[Function,Array],onKeyup:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array]},cn={node:{type:Object,required:!0},isLeaf:{type:Boolean,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0},label:String,level:{type:Number,required:!0},rawNode:{type:Object,required:!0},expanded:{type:Boolean,required:!0},children:Array,parentKey:[String,Number,Symbol],checkDisabled:{type:Boolean,default:void 0},dragDisabled:{type:Boolean,default:void 0},dropDisabled:{type:Boolean,default:void 0},selectDisabled:{type:Boolean,default:void 0}},sn={node:{type:Object,required:!0},checkDisabled:{type:Boolean,default:void 0}},dn={expanded:{type:Boolean,required:!0},hasTopLine:{type:Boolean,default:void 0},isLeaf:{type:Boolean,default:void 0},nodeKey:{type:[String,Number,Symbol],required:!0},rawNode:{type:Object,required:!0}},un={disabled:{type:Boolean,default:void 0},node:{type:Object,required:!0},nodeKey:{type:[String,Number,Symbol],required:!0},label:String,selected:{type:Boolean,default:void 0}},fn=R({props:sn,setup(e){const{mergedPrefixCls:n,allCheckedKeys:o,indeterminateKeys:a,handleCheck:t}=W(V),l=x(()=>o.value.includes(e.node.key)),r=x(()=>a.value.includes(e.node.key)),c=()=>t(e.node);return()=>C(Ie,{class:`${n.value}-node-checkbox`,checked:l.value,disabled:e.checkDisabled,indeterminate:r.value,onChange:c},null)}}),hn=R({props:un,setup(e){const{props:n,mergedPrefixCls:o,mergedCheckOnClick:a,slots:t,handleSelect:l,handleCheck:r,searchedKeys:c}=W(V),g=x(()=>c.value.includes(e.nodeKey)),s=d=>{e.disabled||(l(e.nodeKey),a.value&&r(e.node)),F(n.onNodeClick,d,e.node.rawNode)},u=d=>{F(n.onNodeContextmenu,d,e.node.rawNode)};return()=>{var h,p;const{nodeKey:d,label:f,node:b,selected:k}=e,{rawNode:K}=b,{prefix:L,suffix:m}=K,v={key:d,selected:k,node:K},y=((h=t.prefix)==null?void 0:h.call(t,v))||L&&C(_,{name:L},null),D=((p=t.suffix)==null?void 0:p.call(t,v))||m&&C(_,{name:m},null),S=`${o.value}-node-content`;return C("span",{class:S,onClick:s,onContextmenu:u},[y&&C("span",{class:`${S}-prefix`},[y]),C("span",{class:`${S}-label`},[vn(t.label,f,K,n.searchValue,g.value,S)]),D&&C("span",{class:`${S}-suffix`},[D])])}}});function vn(e,n,o,a,t,l){if(e)return e({node:o,searchValue:a,searched:t});if(t&&n&&a){const r=n.toUpperCase().indexOf(a.toUpperCase());if(r>-1){const c=r+a.length,g=n.substring(0,r),s=n.substring(c),u=C("span",{class:`${l}-label-highlight`},[n.substring(r,c)]);return[g,u,s]}}return n}const gn=R({props:dn,setup(e){const{mergedPrefixCls:n,slots:o,expandIcon:a,loadingKeys:t,handleExpand:l}=W(V),r=x(()=>t.value.includes(e.nodeKey)),c=x(()=>{const s=`${n.value}-node-expand`;return ze({[s]:!0,[`${s}-noop`]:e.isLeaf})}),g=s=>{l(e.nodeKey,e.rawNode),s.stopPropagation()};return()=>{const s=`${n.value}-node-expand`;let u;if(r.value)u=C(_,{name:"loading"},null);else if(!e.isLeaf){const{expanded:d}=e;if(o.expandIcon){const{nodeKey:f,rawNode:b}=e;u=o.expandIcon({key:f,expanded:d,node:b})}else{const f=a.value,b=je(f);u=C(_,{name:b?d?f[0]:f[1]:f,rotate:d&&!b?90:0},null)}}return C("span",{class:c.value,onClick:g},[e.hasTopLine&&C("div",{class:`${s}-top-line`},null),u])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const yn=({level:e,noopIdentUnitArr:n,prefixCls:o})=>{const a=[];for(let t=0;t<e;t++)a.push(C("span",{key:t,class:n.includes(t)?`${o}-node-indent-noop-unit`:`${o}-node-indent-unit`},null));return C("span",{"aria-hidden":!0,class:`${o}-node-indent`},[a])},pn=yn,bn=R({setup(){const{props:e,mergedPrefixCls:n,slots:o}=W(V);return()=>{const a=`${n.value}-node-leaf`;let t;return o.leafLineIcon?t=o.leafLineIcon():e.leafLineIcon?t=C(_,{name:e.leafLineIcon},null):t=C("span",{class:`${a}-line`},null),C("span",{class:a},[t])}}}),ye=R({props:cn,setup(e){const{props:n,flattedNodes:o,mergedPrefixCls:a,mergedShowLine:t,activeKey:l,selectedKeys:r,slots:c,draggableIcon:g,dragKey:s,dropKey:u,dropParentKey:d,dropType:f,handleDragstart:b,handleDragend:k,handleDragenter:K,handleDragover:L,handleDragleave:m,handleDrop:v}=W(V),y=Ne(),D=x(()=>l.value===y),S=x(()=>t.value&&e.isLast),h=x(()=>t.value&&!e.isLeaf&&e.level!==0&&e.isFirst),p=x(()=>r.value.includes(y)),w=x(()=>e.selectDisabled||!n.selectable),$=x(()=>s.value===y),I=x(()=>u.value===y),z=x(()=>d.value===y),O=x(()=>I.value&&f.value==="before"),G=x(()=>I.value&&f.value==="inside"),H=x(()=>I.value&&f.value==="after"),M=x(()=>{const i=`${a.value}-node`;return{[i]:!0,[`${i}-active`]:D.value,[`${i}-last`]:S.value,[`${i}-disabled`]:w.value,[`${i}-selected`]:p.value,[`${i}-expanded`]:e.expanded,[`${i}-dragging`]:$.value,[`${i}-dropping`]:I.value,[`${i}-drop-parent`]:z.value,[`${i}-drop-before`]:O.value,[`${i}-drop-inside`]:G.value,[`${i}-drop-after`]:H.value}}),ee=i=>{var N;i.stopPropagation(),b(i,e.node),(N=i.dataTransfer)==null||N.setData("text/plain","")},ne=i=>{i.stopPropagation(),k(i,e.node)},te=i=>{i.preventDefault(),i.stopPropagation(),K(i,e.node)},ae=i=>{i.preventDefault(),i.stopPropagation(),L(i,e.node)},oe=i=>{i.stopPropagation(),m(i,e.node)},A=i=>{i.stopPropagation(),v(i,e.node)};return()=>{var fe;const i=new Map;o.value.forEach(J=>{i.set(J.key,J)});const{isLeaf:N,label:B,level:q,rawNode:U,expanded:le,checkDisabled:j,dragDisabled:me,dropDisabled:De,node:de}=e,{checkable:Se,draggable:ie}=n,T=ie&&!me,Ae=((fe=c.draggableIcon)==null?void 0:fe.call(c))??C(_,{name:g.value},null),we=i.get(y),ue=[];t.value&&Z(i,we).reverse().forEach((J,Fe)=>{var he;(he=i.get(J))!=null&&he.isLast&&ue.push(Fe)});const Le=n.customAdditional?n.customAdditional({node:U,level:q}):void 0;return C("div",ce({class:M.value,"aria-grabbed":$.value||void 0,"aria-label":B,"aria-selected":p.value,draggable:T||void 0,title:B,onDragstart:T?ee:void 0,onDragend:T?ne:void 0,onDragenter:T?te:void 0,onDragover:T?ae:void 0,onDragleave:T?oe:void 0,onDrop:T&&!De?A:void 0},Le),[C(pn,{level:q,noopIdentUnitArr:ue,prefixCls:a.value},null),T?C("span",{class:`${a.value}-node-draggable-icon`},[Ae]):ie&&C("span",{class:`${a.value}-node-draggable-icon-noop`},null),N&&t.value?C(bn,null,null):C(gn,{expanded:le,hasTopLine:h.value,isLeaf:N,nodeKey:y,rawNode:U},null),Se&&C(fn,{checkDisabled:j,node:de},null),C(hn,{disabled:w.value,node:de,nodeKey:y,label:B,selected:p.value},null)])}}}),pe={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},xn=R({name:"IxTree",props:rn,setup(e,{attrs:n,expose:o,slots:a}){const t=ve("common"),l=x(()=>`${t.prefixCls}-tree`),r=ve("tree"),c=x(()=>e.autoHeight??r.autoHeight),g=x(()=>e.childrenKey??r.childrenKey),s=Be(e,r),u=x(()=>e.labelKey??r.labelKey),d=x(()=>e.showLine??r.showLine),f=x(()=>e.blocked??r.blocked),b=x(()=>e.checkable&&e.checkOnClick),{mergedNodes:k,mergedNodeMap:K}=Ge(e,g,s,u),{searchedKeys:L}=tn(e,K,u),m=nn(e,r,g,s,u,K,L),v=We(k,m,e,L),y=_e(e,K),D=Ye(e,r,m),S=ln(e,K);He(V,{props:e,slots:a,config:r,flattedNodes:v,mergedPrefixCls:l,mergedNodeMap:K,mergedGetKey:s,mergedShowLine:d,mergedCheckOnClick:b,searchedKeys:L,...y,...m,...D,...S});const h=E(),p=E(),{activeKey:w}=S,{focused:$,handleFocus:I,handleBlur:z,handleKeydown:O,handleKeyup:G}=en(e,K,v,m,S),H=x(()=>{const A=l.value;return{[A]:!0,[`${A}-active`]:!P(w.value),[`${A}-blocked`]:f.value,[`${A}-virtual`]:e.virtual,[`${A}-auto-height`]:c.value,[`${A}-focused`]:$.value,[`${A}-show-line`]:d.value}}),M=x(()=>{var q,U;const A=w.value;if(P(A))return"";const i=K.value;let N=String(A),B=(q=i.get(A))==null?void 0:q.parentKey;for(;B;)N=`${String(B)} > ${N}`,B=(U=i.get(B))==null?void 0:U.parentKey;return N}),ee=A=>{var i;(i=h==null?void 0:h.value)==null||i.focus(A)},ne=()=>{var A;(A=h==null?void 0:h.value)==null||A.blur()},te=A=>{var i;(i=p.value)==null||i.scrollTo(A)},ae=A=>{var i;return(i=K.value.get(A))==null?void 0:i.rawNode};o({focus:ee,blur:ne,expandAll:m.expandAll,collapseAll:m.collapseAll,scrollTo:te,getNode:ae});const oe=(A,i,N)=>{F(e.onScrolledChange,A,i,N.map(B=>B.rawNode))};return()=>{const A=v.value;let i;if(A.length>0){const N=({item:j})=>C(ye,ce({node:j},j),null),{height:B,virtual:q,onScroll:U,onScrolledBottom:le}=e;i=q?C(Ee,{ref:p,class:`${l.value}-content`,dataSource:A,getKey:"key",height:c.value?"100%":B,itemHeight:28,itemRender:N,virtual:!0,onScroll:U,onScrolledBottom:le,onScrolledChange:oe},null):C("div",{class:`${l.value}-content`,style:Me(c.value?void 0:{maxHeight:Pe(B)})},[C("div",{class:`${l.value}-content-inner`},[A.map(j=>C(ye,ce({node:j},j),null))])])}else i=C(Te,{empty:e.empty},a);return C("div",{class:H.value,role:"tree"},[$.value&&C("span",{style:pe,"aria-live":"assertive"},[M.value]),C("input",{ref:h,style:pe,tabindex:n.tabIndex??0,onFocus:I,onBlur:z,onKeydown:O,onKeyup:G,value:"","aria-label":"for screen reader"},null),i])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Kn=xn;export{Kn as I};
