import{N as Ie,m,am as ie,aR as Ne,c as Ke,ac as ke,L as te,as as Be,K as De,r as Le,a9 as Me,ad as Ee,ae as Re,at as Oe,au as Ve,av as Te,aw as Pe,aC as we}from"./index-06edd716.js";import{c as C,an as oe,t as ze,x as ye,l as He,r as re,A,i as $e,w as Ge,y as Ue,q as je,z as qe,a4 as ue}from"./vendor-416b09e5.js";import{I as _e}from"./index-3ac45f70.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,n,l,c){return{mergedNodeMap:C(()=>{const d=new Map,r=fe(e,e.dataSource,n.value,l.value,c.value);return ce(r,d),d})}}function fe(e,n,l,c,s,d){const{treeDisabled:r,loadChildren:u}=e;return n.map(x=>ve(x,l,c,s,r,!!u,d))}function ve(e,n,l,c,s,d,r){var K;const u=l(e),{check:x,drag:i,drop:f,select:g}=Xe(e,s),I=e[n],N=e[c],p=I==null?void 0:I.map(k=>ve(k,n,l,c,s,d,u));return{children:p,label:N,key:u,isLeaf:(K=e.isLeaf)!=null?K:!(p!=null&&p.length||d),parentKey:r,rawData:e,checkDisabled:x,dragDisabled:i,dropDisabled:f,selectDisabled:g}}function Xe(e,n){const l=e.disabled;if(oe(l))return{check:l,drag:l,drop:l,select:l};{let{drag:c,drop:s,select:d}=l!=null?l:{},r;if(n){const u=n(e);oe(u)?(r!=null||(r=u),c!=null||(c=u),s!=null||(s=u),d!=null||(d=u)):(c!=null||(c=u.drag),s!=null||(s=u.drop),d!=null||(d=u.select),r!=null||(r=u.select))}return{check:r,drag:c,drop:s,select:d}}}function ce(e,n){e.forEach(l=>{const{key:c,children:s}=l;n.set(c,l),s&&ce(s,n)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,n,l){const c=C(()=>Ie(n.value)),s=C(()=>{const i=l.value;return c.value.map(f=>i.get(f)).filter(Boolean)}),d=i=>{const f=e.multiple?i:i[0],g=ze(n.value);f!==g&&(n.setValue(f),m(e.onChange,f,g))};return{selectedValue:c,selectedNodes:s,changeSelected:i=>{!e.multiple&&!i.length||d(i)},handleRemove:i=>{d(c.value.filter(f=>i!==f))},handleClear:i=>{d([]),m(e.onClear,i)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ge=Symbol("treeSelectToken"),Qe=ye({setup(){const{config:e,props:n,slots:l,locale:c,mergedPrefixCls:s,mergedChildrenKey:d,mergedGetKey:r,mergedLabelKey:u,mergedNodeMap:x,inputValue:i,setInputValue:f,treeRef:g,expandedKeys:I,setExpandedKeys:N,selectedValue:p,changeSelected:K,handleNodeClick:k}=He(ge),[z,H]=ie(n,"loadedKeys",()=>[]),S=re(!1),M=C(()=>n.multiple&&n.checkable),$=C(()=>M.value?n.cascaderStrategy:"off"),G=(t,o,y)=>{const{onScrolledChange:h}=n;m(h,t,o,y.map(F=>F.rawData))},V=t=>{t.stopPropagation()},T=(t,o)=>{const{onCheck:y}=n;m(y,t,o),k()},U=(t,o)=>{var h;const{onSelect:y}=n;!n.multiple&&((h=p.value)==null?void 0:h[0])!==o.key&&m(y,t,o),k()},j=(t,o)=>{const{onExpand:y}=n;m(y,t,o)},q=(t,o)=>{const{onExpandedChange:y}=n;m(y,t,o),N(t)},_=t=>{var y,h;const o=S.value;o?(y=g.value)==null||y.expandAll():(h=g.value)==null||h.collapseAll(),S.value=!o,t.stopPropagation()},P=async(t,o)=>{const y=d.value,h=u.value,F=r.value,D=o[y],E=F(o),R=x.value,L=R.get(E);if(D.length&&L){const O=fe(n,D,y,F,h,E);ce(O,R),L.rawData[y]=D,L.children=O,H(t),m(n.onLoaded,t,o)}},W=C(()=>{var t;return(t=n.clearIcon)!=null?t:e.clearIcon}),X=t=>{const{value:o}=t.target;f(o),n.searchable&&m(n.onSearch,o)},B=()=>{f(""),n.searchable&&m(n.onSearch,"")};return()=>{const{customAdditional:t,dataSource:o,draggable:y,draggableIcon:h,empty:F,expandIcon:D,multiple:E,leafLineIcon:R,virtual:L,virtualItemHeight:O,searchable:J,showLine:Q,searchPlaceholder:Y,onDragstart:Z,onDragend:ee,onDragenter:ae,onDragleave:a,onDragover:v,onDrop:b,onNodeClick:w,onNodeContextmenu:pe,onScroll:he,onScrolledBottom:me,droppable:Se,treeDisabled:be,loadChildren:Ce,searchFn:ne,overlayRender:de,overlayHeight:xe}=n,Ae=s.value,Fe={label:l.treeLabel,prefix:l.treePrefix,suffix:l.treeSuffix,leafLineIcon:l.leafLineIcon,empty:l.empty,expandIcon:l.expandIcon,draggableIcon:l.draggableIcon},le=[A(_e,{ref:g,blocked:!0,checkOnClick:!0,checkedKeys:p.value,customAdditional:t,expandedKeys:I.value,loadedKeys:z.value,labelKey:u.value,checkable:M.value,cascaderStrategy:$.value,childrenKey:d.value,dataSource:o,draggable:y,draggableIcon:h,droppable:Se,disabled:be,empty:F,expandIcon:D,getKey:r.value,height:xe,loadChildren:Ce,leafLineIcon:R,virtual:L,virtualItemHeight:O,selectable:E?"multiple":!0,selectedKeys:p.value,searchValue:ne!==!1?i.value:void 0,searchFn:$e(ne)?ne:void 0,showLine:Q,onClick:V,onCheck:T,onDragstart:Z,onDragend:ee,onDragenter:ae,onDragleave:a,onDragover:v,onDrop:b,onNodeClick:w,onNodeContextmenu:pe,onExpand:j,onSelect:U,onLoaded:P,onCheckedChange:K,onSelectedChange:M.value?Ne:K,onExpandedChange:q,onScroll:he,onScrolledBottom:me,onScrolledChange:G},Fe)];if(J==="overlay"){const se=i.value;le.unshift(A("div",{class:`${Ae}-overlay-search-wrapper`},[A(Ke,{size:"xs",shape:"square",title:S.value?c.treeSelect.expandAll:c.treeSelect.collapseAll,icon:S.value?"expand-all":"collapse-all",onClick:_},null),A(ke,{clearable:!0,clearIcon:W.value,clearVisible:!!se,size:"sm",suffix:"search",value:se,placeholder:Y,onClear:B,onInput:X},null)]))}return A("div",{tabindex:-1},[de?de(le):le])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ye={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},open:{type:Boolean,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},cascaderStrategy:{type:String,default:"off"},checkable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},draggableIcon:{type:String,default:void 0},droppable:{type:Function,default:void 0},empty:{type:[String,Object],default:"simple"},expandIcon:{type:[String,Function,Array],default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},leafLineIcon:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},offset:Array,overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},searchPlaceholder:{type:String,default:void 0},size:{type:String,default:void 0},spin:{type:[Boolean,Object],default:void 0},showLine:{type:Boolean,default:void 0},status:String,suffix:{type:String,default:void 0},treeDisabled:{type:Function,default:void 0},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:void 0},"onUpdate:value":[Function,Array],"onUpdate:open":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],onCheck:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onDragstart:[Function,Array],onDragend:[Function,Array],onDragenter:[Function,Array],onDragleave:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onNodeClick:[Function,Array],onNodeContextmenu:[Function,Array],onSearch:[Function,Array],onSelect:[Function,Array],onScroll:[Function,Array],onScrolledChange:[Function,Array],onScrolledBottom:[Function,Array],overlayHeight:{type:Number,default:256}},Ze=ye({name:"IxTreeSelect",inheritAttrs:!1,props:Ye,setup(e,{attrs:n,expose:l,slots:c}){const s=te("common"),d=te("locale"),r=te("treeSelect"),u=C(()=>`${s.prefixCls}-tree-select`),x=C(()=>{var a;return(a=e.childrenKey)!=null?a:r.childrenKey}),i=Be(e,r),f=C(()=>{var a;return(a=e.labelKey)!=null?a:r.labelKey}),g=re(),[I,N]=De(""),p=()=>{var a;return(a=g.value)==null?void 0:a.focus()},K=()=>{var a;return(a=g.value)==null?void 0:a.blur()},k=()=>{var a;e.searchable==="overlay"?N(""):(a=g.value)==null||a.clearInput()},[z,H]=ie(e,"expandedKeys",()=>[]),{accessor:S,control:M}=Le();Me(M);const $=Ee(e,r),G=Re(e,M),{mergedNodeMap:V}=We(e,x,i,f),{selectedValue:T,selectedNodes:U,changeSelected:j,handleRemove:q,handleClear:_}=Je(e,S,V),{overlayRef:P,overlayStyle:W,updateOverlay:X,overlayOpened:B,setOverlayOpened:t}=Oe(e,r,g),o=re();l({focus:p,blur:K,collapseAll:()=>{var a;return(a=o.value)==null?void 0:a.collapseAll()},expandAll:()=>{var a;return(a=o.value)==null?void 0:a.expandAll()},scrollTo:a=>{var v;(v=o.value)==null||v.scrollTo(a)},getNode:a=>{var v;return o.value?o.value.getNode(a):(v=V.value.get(a))==null?void 0:v.rawData}}),Ge(B,a=>{a&&p(),k()});const h=()=>{e.searchable!=="overlay"&&setTimeout(p)},F=()=>{e.multiple?k():t(!1)},D=a=>{m(e.onFocus,a)},E=a=>{S.markAsBlurred(),t(!1),m(e.onBlur,a)},{focused:R,bindOverlayMonitor:L,handleFocus:O,handleBlur:J}=Ve(D,E);Ue(()=>{L(P,B)});const Q=a=>{p(),q(a)};je(ge,{props:e,slots:c,config:r,locale:d,mergedPrefixCls:u,mergedChildrenKey:x,mergedGetKey:i,mergedLabelKey:f,expandedKeys:z,mergedNodeMap:V,inputValue:I,setInputValue:N,treeRef:o,accessor:S,setExpandedKeys:H,overlayOpened:B,setOverlayOpened:t,handleNodeClick:F,selectedValue:T,changeSelected:j});const Y=C(()=>{const{overlayClassName:a,multiple:v}=e,b=u.value;return qe({[`${b}-overlay`]:!0,[`${b}-overlay-multiple`]:v,[a||""]:!!a})}),Z=()=>A(Pe,ue({ref:g,className:u.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:e.clearIcon,config:r,dataSource:U.value,disabled:S.disabled,focused:R.value,maxLabel:e.maxLabel,multiple:e.multiple,opened:B.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:$.value,status:G.value,suffix:e.suffix,value:T.value,onFocus:O,onBlur:J,onClear:_,onInputValueChange:N,onItemRemove:Q,onOpenedChange:t,onResize:X,onSearch:e.onSearch},n),c),ee=a=>{const{spin:v}=e,b=oe(v)?{spinning:v}:v;return b?A(we,b,{default:()=>[a]}):a},ae=()=>ee(A(Qe,{onMousedown:h},null));return()=>{var b,w;const a={class:Y.value,style:W.value,clickOutside:!1,container:(b=e.overlayContainer)!=null?b:r.overlayContainer,containerFallback:`.${u.value}-overlay-container`,disabled:S.disabled||e.readonly,offset:(w=e.offset)!=null?w:r.offset,placement:"bottomStart",transitionName:`${s.prefixCls}-slide-auto`,trigger:"manual",triggerId:n.id,visible:B.value,"onUpdate:visible":t},v={default:Z,content:ae};return A(Te,ue({ref:P},a),v)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const la=Ze;export{la as I};