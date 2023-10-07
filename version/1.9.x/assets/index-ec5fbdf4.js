import{am as k,m as N,N as Fe,ap as ee,a6 as Pe,j as we,aq as Ne,H as De,ar as $e,K as ue,L as H,as as de,at as _e,r as Be,a9 as Me,ad as Oe,ae as Te,au as Re,av as Ve,ac as Ue}from"./index-22ebbaf3.js";import{c as f,d as P,t as ie,x as X,l as te,A as ae,z as A,a3 as W,r as ye,i as ke,q as fe,a2 as T,w as He}from"./vendor-a14e3fe7.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ve(e){return f(()=>{const{disableData:t}=e;return a=>a.disabled||(t?t(a):!1)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function he(e,t,a,n,r){const l=f(()=>ge(e,t.value,a.value,n.value,r.value,e.dataSource)),c=f(()=>{const o=new Map;return ne(o,l.value),o});return{mergedData:l,mergedDataMap:c}}function ge(e,t,a,n,r,l,c,o){const{loadChildren:v,separator:i}=e;return l.map(m=>me(m,t,a,n,i,r,!!v,c,o))}function me(e,t,a,n,r,l,c,o,v){var s;const i=t(e),m=l&&!P(v)?`${v}${r}${e[n]}`:e[n],p=e[a],K=p==null?void 0:p.map(y=>me(y,t,a,n,r,l,c,i,m));return{children:K,key:i,isLeaf:(s=e.isLeaf)!=null?s:!(K!=null&&K.length||c),label:m,parentKey:o,rawData:e}}function ne(e,t){t.forEach(a=>{const{key:n,children:r}=a;e.set(n,a),r&&ne(e,r)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e,t,a){const[n,r]=k(e,"expandedKeys"),[l,c]=k(e,"loadedKeys"),o=()=>{e.multiple||a(!1)};return f(()=>({expandedKeys:n.value,loadedKeys:l.value,childrenKey:e.childrenKey,customAdditional:e.customAdditional,disableData:e.disableData,empty:e.empty,expandIcon:e.expandIcon,expandTrigger:e.expandTrigger,fullPath:e.fullPath,getKey:e.getKey,labelKey:e.labelKey,loadChildren:e.loadChildren,maxLabel:e.maxLabel,multiple:e.multiple,multipleLimit:e.multipleLimit,searchable:e.searchable,searchFn:e.searchFn,searchValue:t.value,strategy:e.strategy,virtual:e.virtual,virtualItemHeight:e.virtualItemHeight,"onUpdate:expandedKeys":r,"onUpdate:loadedKeys":c,onSelect:o}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ze(e,t){return f(()=>{const a=t.value;return e.value.map(n=>a.get(n)).filter(Boolean)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function qe(e,t,a){if(a){const n=[],r=e.value;t.forEach(l=>{const c=r.get(l);c&&n.push(c.rawData)}),N(a,t,n)}}function le(e,t,a){if(!e||!e.children)return[];const n=[];return e.children.forEach(r=>{const{key:l,rawData:c}=r;(!t||!a(c))&&(n.push(l),n.push(...le(r,t,a)))}),n}function U(e,t,a,n){const r=[];for(;t&&!P(t.parentKey);){const{parentKey:l,rawData:c}=t;!a||!n(c)?(r.unshift(l),t=e.get(l)):t=void 0}return r}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function pe(e,t,a,n,r,l,c){const o=f(()=>{const s=Fe(l.value);if(!t.value)return s;if(!n.value){const y=s[s.length-1];return P(y)?[]:[y]}return s.map(y=>y[y.length-1]).filter(y=>!P(y))}),v=f(()=>n.value&&r.value!=="off"),i=f(()=>v.value?je(e.value,o.value,a.value):o.value),m=f(()=>{if(!v.value)return ee;const s=new Set,y=i.value,C=e.value,h=a.value;return y.forEach(S=>{let x=C.get(S);for(;x&&!P(x.parentKey);){const u=x.parentKey,E=C.get(u);E&&!h(E.rawData)&&!y.includes(u)&&s.add(u),x=E}}),[...s]}),p=s=>{let y;if(!t.value)y=n.value?s:s[0];else{const h=a.value;if(n.value){const S=e.value;y=s.map(x=>{const u=U(S,S.get(x),!0,h);return u.push(x),u})}else{const S=s[0],x=e.value;y=U(x,x.get(S),!0,h),y.push(S)}}const C=ie(l.value);y!==C&&c(y)};return{resolvedSelectedKeys:o,selectedWithStrategyKeys:i,strategyEnabled:v,handleSelect:s=>{const y=i.value,h=y.indexOf(s)>-1;if(!n.value){!h&&p([s]);return}const S=e.value,x=S.get(s),u=v.value,E=a.value,I=u?le(x,!0,E):[],b=new Set(y);h||I.length>0&&I.every(g=>b.has(g)||m.value.includes(g))?(b.delete(s),u&&(U(S,x,!0,E).forEach(g=>b.delete(g)),I.forEach(g=>b.delete(g)))):(b.add(s),u&&(Se(S,x,b,E),I.forEach(g=>b.add(g)))),p([...We(S,b,r.value)])},setValue:p}}function je(e,t,a){const n=new Set(t);let r;return t.forEach(l=>{const c=e.get(l);if(!c)return;const{parentKey:o}=c;le(c,!0,a).forEach(i=>n.add(i)),o&&r!==o&&(Se(e,c,n,a),r=o)}),[...n]}function Se(e,t,a,n){let r=!0;for(;r&&t&&!P(t.parentKey);){const l=t.parentKey,c=e.get(l);c&&!n(t.rawData)&&(r=c.children.every(o=>n(o.rawData)||a.has(o.key)),r&&a.add(t.parentKey)),t=c}}function We(e,t,a){if(a==="parent"){const n=new Set;return t.forEach(r=>{const l=e.get(r);if(l){const{key:c,parentKey:o}=l;(!o||!t.has(o))&&n.add(c)}}),n}if(a==="child"){const n=new Set;return t.forEach(r=>{const l=e.get(r);l&&l.isLeaf&&n.add(l.key)}),n}return t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ke=Symbol("CASCADER_PANEL_DATA_TOKEN"),re=Symbol("cascaderPanelToken"),Xe=X({props:{children:{type:Array,default:void 0},index:{type:Number,required:!0},isLeaf:{type:Boolean,required:!0},label:{type:String,required:!0},parentKey:{type:[String,Number,Symbol],default:void 0},rawData:{type:Object,required:!0}},setup(e){const t=Pe(),{props:a,slots:n,mergedPrefixCls:r,mergedExpandIcon:l,mergedGetDisabled:c,mergedLabelKey:o,activeKey:v,setActiveKey:i,expandedKeys:m,setExpandedKeys:p,loadingKeys:K,selectedWithStrategyKeys:s,selectedLimit:y,selectedLimitTitle:C,indeterminateKeys:h,handleSelect:S,handleExpand:x}=te(re),u=f(()=>t===v.value),E=f(()=>c.value(e.rawData)),I=f(()=>m.value.includes(t)),b=f(()=>K.value.includes(t)),g=f(()=>s.value.includes(t)),_=f(()=>h.value.includes(t)),B=f(()=>{const L=`${r.value}-option`;return ae({[L]:!0,[`${L}-leaf`]:e.isLeaf,[`${L}-active`]:u.value,[`${L}-disabled`]:E.value,[`${L}-expanded`]:I.value,[`${L}-loading`]:b.value,[`${L}-selected`]:g.value})}),w=()=>{S(t),N(a.onSelect,e.rawData,g.value)},D=()=>{if(e.isLeaf){if(!g.value&&y.value)return;w(),P(e.parentKey)&&p([])}else a.strategy==="off"&&w(),a.expandTrigger==="click"&&x(t)},G=L=>{L.stopPropagation(),w()},R=()=>{i(t),!e.isLeaf&&a.expandTrigger==="hover"&&x(t)};return()=>{const{rawData:L,label:z}=e,{multiple:J}=a,M=E.value,O=g.value,V=`${r.value}-option`,q=a.searchValue,j=q?z:L[o.value],Q=!(M||O)&&C.value||j,Y=a.customAdditional?a.customAdditional({data:L,index:e.index}):void 0;return A("div",W({class:B.value,title:Q,onClick:M?void 0:D,onMouseenter:M?void 0:R,"aria-label":z,"aria-selected":O},Y),[J&&A(we,{checked:O,disabled:M||!O&&y.value,indeterminate:_.value,onClick:G},null),A("span",{key:"__label",class:`${V}-label`},[Je(n.optionLabel,j,L,q,V)]),!e.isLeaf&&A("span",{key:"__expand-icon",class:`${V}-expand-icon`},[Ne(n.expandIcon,b.value?"loading":l.value,{key:t,expanded:I.value,data:L})])])}}});function Je(e,t,a,n,r){if(e)return e({label:t,data:a,searchValue:n});if(t&&n){const l=t.toUpperCase().indexOf(n.toUpperCase());if(l>-1){const c=l+n.length,o=t.substring(0,l),v=t.substring(c),i=A("span",{class:`${r}-label-highlight`},[t.substring(l,c)]);return[o,i,v]}}return t}const se=X({props:{dataSource:{type:Array,required:!0}},setup(e){const{props:t,slots:a,mergedPrefixCls:n}=te(re),r=f(()=>{const l=`${n.value}-option-group`;return ae({[l]:!0,[`${l}-empty`]:e.dataSource.length===0})});return()=>{const{dataSource:l}=e;let c;if(l.length>0){const{_virtualScrollHeight:o,virtualItemHeight:v,virtual:i}=t;c=A(De,{dataSource:l,getKey:"key",height:o,itemHeight:v,itemRender:({item:p,index:K})=>A(Xe,W({index:K},p),null),virtual:i},null)}else c=A($e,{empty:t.empty},a);return A("div",{class:r.value},[c])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Qe(e){const[t,a]=ue(void 0),n=f(()=>{const r=t.value;return r!==void 0?e.value.get(r):void 0});return{activeKey:t,activeData:n,setActiveKey:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ye(e,t,a,n,r,l,c,o){const v=h=>{if(P(h))return[];const S=c.value,x=S.get(h);return U(S,x,!1,a.value)},[i,m]=k(e,"expandedKeys",()=>v(o.value[0])),[p,K]=k(e,"loadedKeys",()=>[]),s=ye([]),y=async h=>{const{loadChildren:S}=e;if(s.value.includes(h))return;const u=c.value.get(h);if(u&&(!u.children||u.children.length===0)){if(!S||p.value.includes(h))return;s.value.push(h);const b=u.rawData,g=await S(b);s.value.splice(s.value.indexOf(h),1);const _=c.value;if(g.length){const B=n.value,w=ge(e,t.value,B,r.value,l.value,g,h,u.label);ne(_,w),u.rawData[B]=g,u.children=w;const D=[...p.value,h];K(D),N(e.onLoaded,D,b)}else return}const I=i.value.indexOf(h)>=0;if(!I){const b=c.value,g=U(b,b.get(h),!1,a.value);g.push(h),C(g,!I,u.rawData)}},C=(h,S,x)=>{m(h);const{onExpand:u,onExpandedChange:E}=e;N(u,S,x),qe(c,h,E)};return{expandedKeys:i,setExpandedKeys:m,handleExpand:y,loadingKeys:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,t,a,n){return f(()=>{if(!n.value)return ee;const r=new Set,l=t.value,c=e.value,o=a.value;return l.forEach(v=>{let i=c.get(v);for(;i&&!P(i.parentKey);){const m=i.parentKey,p=c.get(m);p&&!o(p.rawData)&&!l.includes(m)&&r.add(m),i=p}}),[...r]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function et(e,t,a,n,r){const l=tt(e,n),c=f(()=>e.multiple||e.strategy==="off"),o=f(()=>{const i=e.searchValue,m=l.value;if(!i||!m)return ee;const p=c.value,K=r.value,s=new Set;return t.value.forEach(y=>xe(s,y,m,i,p,K)),[...s]});return{searchedData:f(()=>{const i=a.value;return o.value.map(m=>i.get(m)).filter(Boolean)})}}function tt(e,t){return f(()=>{const a=e.searchFn;return ke(a)?a:a?at(t.value):!1})}function at(e){return(t,a)=>{const n=t[e];return n?n.toLowerCase().includes(a.toLowerCase()):!1}}function xe(e,t,a,n,r,l){const{key:c,rawData:o}=t;e.has(c)||l(o)||(a(o,n)?((r||t.isLeaf)&&e.add(c),be(e,t,r,l)):t.children&&t.children.forEach(v=>xe(e,v,a,n,r,l)))}function be(e,t,a,n){!t||!t.children||t.children.forEach(r=>{e.has(r.key)||n(r.rawData)||((a||r.isLeaf)&&e.add(r.key),be(e,r,a,n))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function nt(e,t){const a=H("locale"),n=f(()=>e.value.length>=t.value),r=f(()=>n.value?a.select.limitMessage.replace("${0}",`${t.value}`):"");return{selectedLimit:n,selectedLimitTitle:r}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const lt={selectedKeys:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},childrenKey:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disableData:{type:Function},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},searchValue:String,separator:{type:String,default:"/"},strategy:{type:String,default:"all"},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:32},"onUpdate:selectedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],_virtualScrollHeight:{type:Number,default:256}},rt={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},open:{type:Boolean,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disableData:{type:Function},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},searchPlaceholder:{type:String,default:void 0},separator:{type:String,default:"/"},size:{type:String,default:void 0},status:String,strategy:{type:String,default:"all"},suffix:{type:String,default:void 0},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:void 0},"onUpdate:value":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:open":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSearch:[Function,Array]},Ce=X({props:lt,setup(e,{slots:t}){const a=H("common"),n=H("cascader"),r=f(()=>`${a.prefixCls}-cascader`),l=ct(e,n),{mergedData:c,mergedDataMap:o,expandedKeys:v,searchedData:i}=l,m=Symbol(),p=f(()=>{const K=[{key:m,dataSource:c.value}],s=o.value;return v.value.forEach(y=>{const C=s.get(y);C&&C.children&&K.push({key:y,dataSource:C.children})}),K});return fe(re,{...l,props:e,config:n,slots:t,mergedPrefixCls:r}),()=>A("div",{class:`${r.value}-panel`},[e.searchValue?A(se,{dataSource:i.value},null):p.value.map(K=>A(se,K,null))])}});function ct(e,t){let a=te(Ke,null);const n=f(()=>{var u;return(u=e.childrenKey)!=null?u:t.childrenKey}),r=f(()=>{var u;return(u=e.expandIcon)!=null?u:t.expandIcon}),l=f(()=>{var u;return(u=e.fullPath)!=null?u:t.fullPath}),c=de(e,t),o=ve(e),v=f(()=>{var u;return(u=e.labelKey)!=null?u:t.labelKey});if(!a){const[u,E]=k(e,"selectedKeys"),I=he(e,c,n,v,l),{mergedDataMap:b}=I,g=pe(b,l,o,T(e,"multiple"),T(e,"strategy"),u,E);a={...I,...g}}const{resolvedSelectedKeys:i,selectedWithStrategyKeys:m,strategyEnabled:p,mergedDataMap:K,mergedData:s}=a,y=nt(i,T(e,"multipleLimit")),C=Ye(e,c,o,n,v,l,K,i),h=Ze(K,m,o,p),S=et(e,s,K,v,o);return{...Qe(K),...a,...C,...y,...S,mergedChildrenKey:n,mergedExpandIcon:r,mergedFullPath:l,mergedGetKey:c,mergedGetDisabled:o,mergedLabelKey:v,indeterminateKeys:h}}const ot=[0,4],st=X({name:"IxCascader",inheritAttrs:!1,props:rt,setup(e,{attrs:t,expose:a,slots:n}){const r=H("common"),l=H("cascader"),c=f(()=>`${r.prefixCls}-cascader`),o=f(()=>{var d;return(d=e.childrenKey)!=null?d:l.childrenKey}),v=f(()=>{var d;return(d=e.clearIcon)!=null?d:l.clearIcon}),i=f(()=>{var d;return(d=e.fullPath)!=null?d:l.fullPath}),m=de(e,l),p=ve(e),K=f(()=>{var d;return(d=e.labelKey)!=null?d:l.labelKey}),s=ye(),[y,C]=ue(""),h=()=>{var d;return(d=s.value)==null?void 0:d.focus()},S=()=>{var d;return(d=s.value)==null?void 0:d.blur()},x=()=>{var d;e.searchable==="overlay"?C(""):(d=s.value)==null||d.clearInput()};a({focus:h,blur:S});const{overlayRef:u,updateOverlay:E,overlayOpened:I,setOverlayOpened:b}=_e(e,l,s),{accessor:g,control:_}=Be();Me(_);const B=Oe(e,l),w=Te(e,_),D=he(e,m,o,K,i),{mergedDataMap:G}=D,R=pe(G,i,p,T(e,"multiple"),T(e,"strategy"),T(g,"value"),d=>{const F=ie(g.value);g.setValue(d),N(e.onChange,d,F)}),{resolvedSelectedKeys:L,setValue:z}=R,J=ze(L,G);He(I,d=>{d&&h(),x()});const M=()=>{e.searchable!=="overlay"&&h()},O=()=>g.markAsBlurred(),V=d=>{h(),R.handleSelect(d)},q=d=>{z([]),N(e.onClear,d)};fe(Ke,{...D,...R});const j=f(()=>{const{overlayClassName:d,multiple:F}=e,$=c.value;return ae({[`${$}-overlay`]:!0,[`${$}-overlay-multiple`]:F,[d||""]:!!d})}),Q=()=>A(Ve,W({ref:s,className:c.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:v.value,config:l,dataSource:J.value,disabled:g.disabled,maxLabel:e.maxLabel,multiple:e.multiple,opened:I.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:B.value,status:w.value,suffix:e.suffix,value:L.value,onBlur:O,onClear:q,onInputValueChange:C,onItemRemove:V,onOpenedChange:b,onResize:E,onSearch:e.onSearch},t),n),Y=Ge(e,y,b),Ae=d=>{const{value:F}=d.target;C(F),e.searchable&&N(e.onSearch,F)},Ee=()=>{C(""),e.searchable&&N(e.onSearch,"")},Ie=()=>{const{searchable:d,overlayRender:F,searchPlaceholder:$}=e,ce=y.value,oe=c.value,Le={empty:n.empty,optionLabel:n.optionLabel},Z=[A("div",{key:"__content",class:`${oe}-overlay-content`},[A(Ce,Y.value,Le)])];return d==="overlay"&&Z.unshift(A("div",{key:"__search-wrapper",class:`${oe}-overlay-search-wrapper`},[A(Ue,{clearable:!0,clearIcon:v.value,clearVisible:!!ce,size:"sm",suffix:"search",value:ce,placeholder:$,onClear:Ee,onInput:Ae},null)])),A("div",{onClick:M},[F?F(Z):Z])};return()=>{var $;const d={class:j.value,clickOutside:!0,container:($=e.overlayContainer)!=null?$:l.overlayContainer,containerFallback:`.${c.value}-overlay-container`,disabled:g.disabled||e.readonly,offset:ot,placement:"bottomStart",transitionName:`${r.prefixCls}-slide-auto`,trigger:"manual",triggerId:t.id,visible:I.value,"onUpdate:visible":b},F={default:Q,content:Ie};return A(Re,W({ref:u},d),F)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const it=st,yt=Ce;export{it as I,yt as a};
