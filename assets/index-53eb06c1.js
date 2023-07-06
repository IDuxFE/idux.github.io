import{N as Ae,m as S,al as oe,aP as Fe,c as Ie,ac as Ne,L as Y,ar as Ke,K as ke,r as Be,a9 as De,ad as Le,ae as Ee,as as Me,at as Re,au as Ve}from"./index-72d58f2a.js";import{c as b,am as le,t as Oe,x as re,p as Te,r as Z,z as A,i as Pe,w as ze,a3 as te,A as we,q as $e}from"./vendor-64a846c1.js";import{I as Ge}from"./index-ad632ef2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ue(e,a,l,c){return{mergedNodeMap:b(()=>{const d=new Map,r=ce(e,e.dataSource,a.value,l.value,c.value);return ee(r,d),d})}}function ce(e,a,l,c,s,d){const{treeDisabled:r,loadChildren:u}=e;return a.map(C=>de(C,l,c,s,r,!!u,d))}function de(e,a,l,c,s,d,r){var N;const u=l(e),{check:C,drag:i,drop:f,select:v}=je(e,s),F=e[a],I=e[c],g=F==null?void 0:F.map(K=>de(K,a,l,c,s,d,u));return{children:g,label:I,key:u,isLeaf:(N=e.isLeaf)!=null?N:!(g!=null&&g.length||d),parentKey:r,rawData:e,checkDisabled:C,dragDisabled:i,dropDisabled:f,selectDisabled:v}}function je(e,a){const l=e.disabled;if(le(l))return{check:l,drag:l,drop:l,select:l};{let{drag:c,drop:s,select:d}=l!=null?l:{},r;if(a){const u=a(e);le(u)?(r!=null||(r=u),c!=null||(c=u),s!=null||(s=u),d!=null||(d=u)):(c!=null||(c=u.drag),s!=null||(s=u.drop),d!=null||(d=u.select),r!=null||(r=u.select))}return{check:r,drag:c,drop:s,select:d}}}function ee(e,a){e.forEach(l=>{const{key:c,children:s}=l;a.set(c,l),s&&ee(s,a)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function He(e,a,l){const c=b(()=>Ae(a.value)),s=b(()=>{const i=l.value;return c.value.map(f=>i.get(f)).filter(Boolean)}),d=i=>{const f=e.multiple?i:i[0],v=Oe(a.value);f!==v&&(a.setValue(f),S(e.onChange,f,v))};return{selectedValue:c,selectedNodes:s,changeSelected:i=>{!e.multiple&&!i.length||d(i)},handleRemove:i=>{d(c.value.filter(f=>i!==f))},handleClear:i=>{d([]),S(e.onClear,i)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=Symbol("treeSelectToken"),qe=re({setup(){const{config:e,props:a,slots:l,locale:c,mergedPrefixCls:s,mergedChildrenKey:d,mergedGetKey:r,mergedLabelKey:u,mergedNodeMap:C,inputValue:i,setInputValue:f,treeRef:v,expandedKeys:F,setExpandedKeys:I,selectedValue:g,changeSelected:N,handleNodeClick:K}=Te(se),[z,w]=oe(a,"loadedKeys",()=>[]),m=Z(!1),L=b(()=>a.multiple&&a.checkable),$=b(()=>L.value?a.cascaderStrategy:"off"),G=(t,o,y)=>{const{onScrolledChange:p}=a;S(p,t,o,y.map(x=>x.rawData))},O=t=>{t.stopPropagation()},T=(t,o)=>{const{onCheck:y}=a;S(y,t,o),K()},U=(t,o)=>{var p;const{onSelect:y}=a;!a.multiple&&((p=g.value)==null?void 0:p[0])!==o.key&&S(y,t,o),K()},j=(t,o)=>{const{onExpand:y}=a;S(y,t,o)},H=(t,o)=>{const{onExpandedChange:y}=a;S(y,t,o),I(t)},q=t=>{var y,p;const o=m.value;o?(y=v.value)==null||y.expandAll():(p=v.value)==null||p.collapseAll(),m.value=!o,t.stopPropagation()},_=async(t,o)=>{const y=d.value,p=u.value,x=r.value,k=o[y],M=x(o),R=C.value,B=R.get(M);if(k.length&&B){const V=ce(a,k,y,x,p,M);ee(V,R),B.rawData[y]=k,B.children=V,w(t),S(a.onLoaded,t,o)}},W=b(()=>{var t;return(t=a.clearIcon)!=null?t:e.clearIcon}),X=t=>{const{value:o}=t.target;f(o),a.searchable&&S(a.onSearch,o)},E=()=>{f(""),a.searchable&&S(a.onSearch,"")};return()=>{const{customAdditional:t,dataSource:o,draggable:y,draggableIcon:p,empty:x,expandIcon:k,multiple:M,leafLineIcon:R,virtual:B,searchable:V,showLine:n,onDragstart:h,onDragend:D,onDragenter:P,onDragleave:ue,onDragover:ie,onDrop:ye,onNodeClick:fe,onNodeContextmenu:ve,onScroll:ge,onScrolledBottom:pe,droppable:he,treeDisabled:me,loadChildren:Se,searchFn:J,overlayRender:ae,overlayHeight:be}=a,Ce=s.value,xe={label:l.treeLabel,prefix:l.treePrefix,suffix:l.treeSuffix,leafLineIcon:l.leafLineIcon,empty:l.empty,expandIcon:l.expandIcon,draggableIcon:l.draggableIcon},Q=[A(Ge,{ref:v,blocked:!0,checkOnClick:!0,checkedKeys:g.value,customAdditional:t,expandedKeys:F.value,loadedKeys:z.value,labelKey:u.value,checkable:L.value,cascaderStrategy:$.value,childrenKey:d.value,dataSource:o,draggable:y,draggableIcon:p,droppable:he,disabled:me,empty:x,expandIcon:k,getKey:r.value,height:be,loadChildren:Se,leafLineIcon:R,virtual:B,selectable:M?"multiple":!0,selectedKeys:g.value,searchValue:J!==!1?i.value:void 0,searchFn:Pe(J)?J:void 0,showLine:n,onClick:O,onCheck:T,onDragstart:h,onDragend:D,onDragenter:P,onDragleave:ue,onDragover:ie,onDrop:ye,onNodeClick:fe,onNodeContextmenu:ve,onExpand:j,onSelect:U,onLoaded:_,onCheckedChange:N,onSelectedChange:L.value?Fe:N,onExpandedChange:H,onScroll:ge,onScrolledBottom:pe,onScrolledChange:G},xe)];if(V==="overlay"){const ne=i.value;Q.unshift(A("div",{class:`${Ce}-overlay-search-wrapper`},[A(Ie,{size:"xs",shape:"square",title:m.value?c.treeSelect.expandAll:c.treeSelect.collapseAll,icon:m.value?"tree-expand":"tree-unexpand",onClick:q},null),A(Ne,{clearable:!0,clearIcon:W.value,clearVisible:!!ne,size:"sm",suffix:"search",value:ne,onClear:E,onInput:X},null)]))}return A("div",null,[ae?ae(Q):Q])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _e={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},open:{type:Boolean,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:{type:Function,default:void 0},empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Function,Array],default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},leafLineIcon:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},offset:Array,overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},size:{type:String,default:void 0},showLine:{type:Boolean,default:void 0},status:String,suffix:{type:String,default:void 0},treeDisabled:{type:Function,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:open":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],onCheck:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onSearch:[Function,Array],onSelect:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array],overlayHeight:{type:Number,default:256}},We=re({name:"IxTreeSelect",inheritAttrs:!1,props:_e,setup(e,{attrs:a,expose:l,slots:c}){const s=Y("common"),d=Y("locale"),r=Y("treeSelect"),u=b(()=>`${s.prefixCls}-tree-select`),C=b(()=>{var n;return(n=e.childrenKey)!=null?n:r.childrenKey}),i=Ke(e,r),f=b(()=>{var n;return(n=e.labelKey)!=null?n:r.labelKey}),v=Z(),[F,I]=ke(""),g=()=>{var n;return(n=v.value)==null?void 0:n.focus()},N=()=>{var n;return(n=v.value)==null?void 0:n.blur()},K=()=>{var n;e.searchable==="overlay"?I(""):(n=v.value)==null||n.clearInput()},[z,w]=oe(e,"expandedKeys",()=>[]),{accessor:m,control:L}=Be();De(L);const $=Le(e,r),G=Ee(e,L),{mergedNodeMap:O}=Ue(e,C,i,f),{selectedValue:T,selectedNodes:U,changeSelected:j,handleRemove:H,handleClear:q}=He(e,m,O),{overlayRef:_,overlayStyle:W,updateOverlay:X,overlayOpened:E,setOverlayOpened:t}=Me(e,r,v),o=Z();l({focus:g,blur:N,collapseAll:()=>{var n;return(n=o.value)==null?void 0:n.collapseAll()},expandAll:()=>{var n;return(n=o.value)==null?void 0:n.expandAll()},scrollTo:n=>{var h;(h=o.value)==null||h.scrollTo(n)},getNode:n=>{var h;return o.value?o.value.getNode(n):(h=O.value.get(n))==null?void 0:h.rawData}}),ze(E,n=>{n&&g(),K()});const p=()=>{e.searchable!=="overlay"&&g()},x=()=>{e.multiple?K():t(!1)},k=()=>m.markAsBlurred(),M=n=>{g(),H(n)};$e(se,{props:e,slots:c,config:r,locale:d,mergedPrefixCls:u,mergedChildrenKey:C,mergedGetKey:i,mergedLabelKey:f,expandedKeys:z,mergedNodeMap:O,inputValue:F,setInputValue:I,treeRef:o,accessor:m,setExpandedKeys:w,overlayOpened:E,setOverlayOpened:t,handleNodeClick:x,selectedValue:T,changeSelected:j});const R=b(()=>{const{overlayClassName:n,multiple:h}=e,D=u.value;return we({[`${D}-overlay`]:!0,[`${D}-overlay-multiple`]:h,[n||""]:!!n})}),B=()=>A(Ve,te({ref:v,className:u.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:e.clearIcon,config:r,dataSource:U.value,disabled:m.disabled,maxLabel:e.maxLabel,multiple:e.multiple,opened:E.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:$.value,status:G.value,suffix:e.suffix,value:T.value,onBlur:k,onClear:q,onInputValueChange:I,onItemRemove:M,onOpenedChange:t,onResize:X,onSearch:e.onSearch},a),c),V=()=>A(qe,{onClick:p},null);return()=>{var D,P;const n={class:R.value,style:W.value,clickOutside:!0,container:(D=e.overlayContainer)!=null?D:r.overlayContainer,containerFallback:`.${u.value}-overlay-container`,disabled:m.disabled||e.readonly,offset:(P=e.offset)!=null?P:r.offset,placement:"bottomStart",transitionName:`${s.prefixCls}-slide-auto`,trigger:"manual",triggerId:a.id,visible:E.value,"onUpdate:visible":t},h={default:B,content:V};return A(Re,te({ref:_},n),h)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ye=We;export{Ye as I};
