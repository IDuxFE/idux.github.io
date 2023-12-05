import{am as H,m as w,N as Me,ap as ee,a6 as Be,j as $e,aq as Oe,H as _e,ar as Te,K as ue,L as G,as as de,at as Re,r as Ve,a9 as Ue,ad as He,ae as Ge,au as ke,av as ze,aw as qe,ac as je}from"./index-06edd716.js";import{c as f,d as P,t as ie,x as X,l as te,z as ae,A,a4 as W,r as ye,i as We,q as fe,a3 as T,w as Xe,y as Je}from"./vendor-416b09e5.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ve(e){return f(()=>{const{disableData:t}=e;return a=>a.disabled||(t?t(a):!1)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function he(e,t,a,n,r){const l=f(()=>ge(e,t.value,a.value,n.value,r.value,e.dataSource)),o=f(()=>{const c=new Map;return ne(c,l.value),c});return{mergedData:l,mergedDataMap:o}}function ge(e,t,a,n,r,l,o,c){const{loadChildren:v,separator:i}=e;return l.map(m=>me(m,t,a,n,i,r,!!v,o,c))}function me(e,t,a,n,r,l,o,c,v){var s;const i=t(e),m=l&&!P(v)?`${v}${r}${e[n]}`:e[n],p=e[a],K=p==null?void 0:p.map(y=>me(y,t,a,n,r,l,o,i,m));return{children:K,key:i,isLeaf:(s=e.isLeaf)!=null?s:!(K!=null&&K.length||o),label:m,parentKey:c,rawData:e}}function ne(e,t){t.forEach(a=>{const{key:n,children:r}=a;e.set(n,a),r&&ne(e,r)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Qe(e,t,a){const[n,r]=H(e,"expandedKeys"),[l,o]=H(e,"loadedKeys"),c=()=>{e.multiple||a(!1)};return f(()=>({expandedKeys:n.value,loadedKeys:l.value,childrenKey:e.childrenKey,customAdditional:e.customAdditional,disableData:e.disableData,empty:e.empty,expandIcon:e.expandIcon,expandTrigger:e.expandTrigger,fullPath:e.fullPath,getKey:e.getKey,labelKey:e.labelKey,loadChildren:e.loadChildren,maxLabel:e.maxLabel,multiple:e.multiple,multipleLimit:e.multipleLimit,searchable:e.searchable,searchFn:e.searchFn,searchValue:t.value,strategy:e.strategy,virtual:e.virtual,virtualItemHeight:e.virtualItemHeight,"onUpdate:expandedKeys":r,"onUpdate:loadedKeys":o,onSelect:c}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ye(e,t){return f(()=>{const a=t.value;return e.value.map(n=>a.get(n)).filter(Boolean)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,t,a){if(a){const n=[],r=e.value;t.forEach(l=>{const o=r.get(l);o&&n.push(o.rawData)}),w(a,t,n)}}function le(e,t,a){if(!e||!e.children)return[];const n=[];return e.children.forEach(r=>{const{key:l,rawData:o}=r;(!t||!a(o))&&(n.push(l),n.push(...le(r,t,a)))}),n}function U(e,t,a,n){const r=[];for(;t&&!P(t.parentKey);){const{parentKey:l,rawData:o}=t;!a||!n(o)?(r.unshift(l),t=e.get(l)):t=void 0}return r}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function pe(e,t,a,n,r,l,o){const c=f(()=>{const s=Me(l.value);if(!t.value)return s;if(!n.value){const y=s[s.length-1];return P(y)?[]:[y]}return s.map(y=>y[y.length-1]).filter(y=>!P(y))}),v=f(()=>n.value&&r.value!=="off"),i=f(()=>v.value?et(e.value,c.value,a.value):c.value),m=f(()=>{if(!v.value)return ee;const s=new Set,y=i.value,C=e.value,h=a.value;return y.forEach(S=>{let x=C.get(S);for(;x&&!P(x.parentKey);){const d=x.parentKey,F=C.get(d);F&&!h(F.rawData)&&!y.includes(d)&&s.add(d),x=F}}),[...s]}),p=s=>{let y;if(!t.value)y=n.value?s:s[0];else{const h=a.value;if(n.value){const S=e.value;y=s.map(x=>{const d=U(S,S.get(x),!0,h);return d.push(x),d})}else{const S=s[0],x=e.value;y=U(x,x.get(S),!0,h),y.push(S)}}const C=ie(l.value);y!==C&&o(y)};return{resolvedSelectedKeys:c,selectedWithStrategyKeys:i,strategyEnabled:v,handleSelect:s=>{const y=i.value,h=y.indexOf(s)>-1;if(!n.value){!h&&p([s]);return}const S=e.value,x=S.get(s),d=v.value,F=a.value,E=d?le(x,!0,F):[],b=new Set(y);h||E.length>0&&E.every(g=>b.has(g)||m.value.includes(g))?(b.delete(s),d&&(U(S,x,!0,F).forEach(g=>b.delete(g)),E.forEach(g=>b.delete(g)))):(b.add(s),d&&(Se(S,x,b,F),E.forEach(g=>b.add(g)))),p([...tt(S,b,r.value)])},setValue:p}}function et(e,t,a){const n=new Set(t);let r;return t.forEach(l=>{const o=e.get(l);if(!o)return;const{parentKey:c}=o;le(o,!0,a).forEach(i=>n.add(i)),c&&r!==c&&(Se(e,o,n,a),r=c)}),[...n]}function Se(e,t,a,n){let r=!0;for(;r&&t&&!P(t.parentKey);){const l=t.parentKey,o=e.get(l);o&&!n(t.rawData)&&(r=o.children.every(c=>n(c.rawData)||a.has(c.key)),r&&a.add(t.parentKey)),t=o}}function tt(e,t,a){if(a==="parent"){const n=new Set;return t.forEach(r=>{const l=e.get(r);if(l){const{key:o,parentKey:c}=l;(!c||!t.has(c))&&n.add(o)}}),n}if(a==="child"){const n=new Set;return t.forEach(r=>{const l=e.get(r);l&&l.isLeaf&&n.add(l.key)}),n}return t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ke=Symbol("CASCADER_PANEL_DATA_TOKEN"),re=Symbol("cascaderPanelToken"),at=X({props:{children:{type:Array,default:void 0},index:{type:Number,required:!0},isLeaf:{type:Boolean,required:!0},label:{type:String,required:!0},parentKey:{type:[String,Number,Symbol],default:void 0},rawData:{type:Object,required:!0}},setup(e){const t=Be(),{props:a,slots:n,mergedPrefixCls:r,mergedExpandIcon:l,mergedGetDisabled:o,mergedLabelKey:c,activeKey:v,setActiveKey:i,expandedKeys:m,setExpandedKeys:p,loadingKeys:K,selectedWithStrategyKeys:s,selectedLimit:y,selectedLimitTitle:C,indeterminateKeys:h,handleSelect:S,handleExpand:x}=te(re),d=f(()=>t===v.value),F=f(()=>o.value(e.rawData)),E=f(()=>m.value.includes(t)),b=f(()=>K.value.includes(t)),g=f(()=>s.value.includes(t)),B=f(()=>h.value.includes(t)),$=f(()=>{const I=`${r.value}-option`;return ae({[I]:!0,[`${I}-leaf`]:e.isLeaf,[`${I}-active`]:d.value,[`${I}-disabled`]:F.value,[`${I}-expanded`]:E.value,[`${I}-loading`]:b.value,[`${I}-selected`]:g.value})}),N=()=>{S(t),w(a.onSelect,e.rawData,g.value)},D=()=>{if(e.isLeaf){if(!g.value&&y.value)return;N(),P(e.parentKey)&&p([])}else a.strategy==="off"&&N(),a.expandTrigger==="click"&&x(t)},k=I=>{I.stopPropagation(),N()},R=()=>{i(t),!e.isLeaf&&a.expandTrigger==="hover"&&x(t)};return()=>{const{rawData:I,label:z}=e,{multiple:J}=a,O=F.value,_=g.value,V=`${r.value}-option`,q=a.searchValue,j=q?z:I[c.value],Q=!(O||_)&&C.value||j,Y=a.customAdditional?a.customAdditional({data:I,index:e.index}):void 0;return A("div",W({class:$.value,title:Q,onClick:O?void 0:D,onMouseenter:O?void 0:R,"aria-label":z,"aria-selected":_},Y),[J&&A($e,{checked:_,disabled:O||!_&&y.value,indeterminate:B.value,onClick:k},null),A("span",{key:"__label",class:`${V}-label`},[nt(n.optionLabel,j,I,q,V)]),!e.isLeaf&&A("span",{key:"__expand-icon",class:`${V}-expand-icon`},[Oe(n.expandIcon,b.value?"loading":l.value,{key:t,expanded:E.value,data:I})])])}}});function nt(e,t,a,n,r){if(e)return e({label:t,data:a,searchValue:n});if(t&&n){const l=t.toUpperCase().indexOf(n.toUpperCase());if(l>-1){const o=l+n.length,c=t.substring(0,l),v=t.substring(o),i=A("span",{class:`${r}-label-highlight`},[t.substring(l,o)]);return[c,i,v]}}return t}const se=X({props:{dataSource:{type:Array,required:!0}},setup(e){const{props:t,slots:a,mergedPrefixCls:n}=te(re),r=f(()=>{const l=`${n.value}-option-group`;return ae({[l]:!0,[`${l}-empty`]:e.dataSource.length===0})});return()=>{const{dataSource:l}=e;let o;if(l.length>0){const{_virtualScrollHeight:c,virtualItemHeight:v,virtual:i}=t;o=A(_e,{dataSource:l,getKey:"key",height:c,itemHeight:v,itemRender:({item:p,index:K})=>A(at,W({index:K},p),null),virtual:i},null)}else o=A(Te,{empty:t.empty},a);return A("div",{class:r.value},[o])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function lt(e){const[t,a]=ue(void 0),n=f(()=>{const r=t.value;return r!==void 0?e.value.get(r):void 0});return{activeKey:t,activeData:n,setActiveKey:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rt(e,t,a,n,r,l,o,c){const v=h=>{if(P(h))return[];const S=o.value,x=S.get(h);return U(S,x,!1,a.value)},[i,m]=H(e,"expandedKeys",()=>v(c.value[0])),[p,K]=H(e,"loadedKeys",()=>[]),s=ye([]),y=async h=>{const{loadChildren:S}=e;if(s.value.includes(h))return;const d=o.value.get(h);if(d&&(!d.children||d.children.length===0)){if(!S||p.value.includes(h))return;s.value.push(h);const b=d.rawData,g=await S(b);s.value.splice(s.value.indexOf(h),1);const B=o.value;if(g.length){const $=n.value,N=ge(e,t.value,$,r.value,l.value,g,h,d.label);ne(B,N),d.rawData[$]=g,d.children=N;const D=[...p.value,h];K(D),w(e.onLoaded,D,b)}else return}const E=i.value.indexOf(h)>=0;if(!E){const b=o.value,g=U(b,b.get(h),!1,a.value);g.push(h),C(g,!E,d.rawData)}},C=(h,S,x)=>{m(h);const{onExpand:d,onExpandedChange:F}=e;w(d,S,x),Ze(o,h,F)};return{expandedKeys:i,setExpandedKeys:m,handleExpand:y,loadingKeys:s}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ot(e,t,a,n){return f(()=>{if(!n.value)return ee;const r=new Set,l=t.value,o=e.value,c=a.value;return l.forEach(v=>{let i=o.get(v);for(;i&&!P(i.parentKey);){const m=i.parentKey,p=o.get(m);p&&!c(p.rawData)&&!l.includes(m)&&r.add(m),i=p}}),[...r]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ct(e,t,a,n,r){const l=st(e,n),o=f(()=>e.multiple||e.strategy==="off"),c=f(()=>{const i=e.searchValue,m=l.value;if(!i||!m)return ee;const p=o.value,K=r.value,s=new Set;return t.value.forEach(y=>xe(s,y,m,i,p,K)),[...s]});return{searchedData:f(()=>{const i=a.value;return c.value.map(m=>i.get(m)).filter(Boolean)})}}function st(e,t){return f(()=>{const a=e.searchFn;return We(a)?a:a?ut(t.value):!1})}function ut(e){return(t,a)=>{const n=t[e];return n?n.toLowerCase().includes(a.toLowerCase()):!1}}function xe(e,t,a,n,r,l){const{key:o,rawData:c}=t;e.has(o)||l(c)||(a(c,n)?((r||t.isLeaf)&&e.add(o),be(e,t,r,l)):t.children&&t.children.forEach(v=>xe(e,v,a,n,r,l)))}function be(e,t,a,n){!t||!t.children||t.children.forEach(r=>{e.has(r.key)||n(r.rawData)||((a||r.isLeaf)&&e.add(r.key),be(e,r,a,n))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function dt(e,t){const a=G("locale"),n=f(()=>e.value.length>=t.value),r=f(()=>n.value?a.select.limitMessage.replace("${0}",`${t.value}`):"");return{selectedLimit:n,selectedLimitTitle:r}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const it={selectedKeys:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},childrenKey:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disableData:{type:Function},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},searchValue:String,separator:{type:String,default:"/"},strategy:{type:String,default:"all"},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:32},"onUpdate:selectedKeys":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSelect:[Function,Array],_virtualScrollHeight:{type:Number,default:256}},yt={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},open:{type:Boolean,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disableData:{type:Function},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},searchPlaceholder:{type:String,default:void 0},separator:{type:String,default:"/"},size:{type:String,default:void 0},status:String,strategy:{type:String,default:"all"},suffix:{type:String,default:void 0},virtual:{type:Boolean,default:!1},virtualItemHeight:{type:Number,default:void 0},"onUpdate:value":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:open":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSearch:[Function,Array]},Ce=X({props:it,setup(e,{slots:t}){const a=G("common"),n=G("cascader"),r=f(()=>`${a.prefixCls}-cascader`),l=ft(e,n),{mergedData:o,mergedDataMap:c,expandedKeys:v,searchedData:i}=l,m=Symbol(),p=f(()=>{const K=[{key:m,dataSource:o.value}],s=c.value;return v.value.forEach(y=>{const C=s.get(y);C&&C.children&&K.push({key:y,dataSource:C.children})}),K});return fe(re,{...l,props:e,config:n,slots:t,mergedPrefixCls:r}),()=>A("div",{class:`${r.value}-panel`},[e.searchValue?A(se,{dataSource:i.value},null):p.value.map(K=>A(se,K,null))])}});function ft(e,t){let a=te(Ke,null);const n=f(()=>{var d;return(d=e.childrenKey)!=null?d:t.childrenKey}),r=f(()=>{var d;return(d=e.expandIcon)!=null?d:t.expandIcon}),l=f(()=>{var d;return(d=e.fullPath)!=null?d:t.fullPath}),o=de(e,t),c=ve(e),v=f(()=>{var d;return(d=e.labelKey)!=null?d:t.labelKey});if(!a){const[d,F]=H(e,"selectedKeys"),E=he(e,o,n,v,l),{mergedDataMap:b}=E,g=pe(b,l,c,T(e,"multiple"),T(e,"strategy"),d,F);a={...E,...g}}const{resolvedSelectedKeys:i,selectedWithStrategyKeys:m,strategyEnabled:p,mergedDataMap:K,mergedData:s}=a,y=dt(i,T(e,"multipleLimit")),C=rt(e,o,c,n,v,l,K,i),h=ot(K,m,c,p),S=ct(e,s,K,v,c);return{...lt(K),...a,...C,...y,...S,mergedChildrenKey:n,mergedExpandIcon:r,mergedFullPath:l,mergedGetKey:o,mergedGetDisabled:c,mergedLabelKey:v,indeterminateKeys:h}}const vt=[0,4],ht=X({name:"IxCascader",inheritAttrs:!1,props:yt,setup(e,{attrs:t,expose:a,slots:n}){const r=G("common"),l=G("cascader"),o=f(()=>`${r.prefixCls}-cascader`),c=f(()=>{var u;return(u=e.childrenKey)!=null?u:l.childrenKey}),v=f(()=>{var u;return(u=e.clearIcon)!=null?u:l.clearIcon}),i=f(()=>{var u;return(u=e.fullPath)!=null?u:l.fullPath}),m=de(e,l),p=ve(e),K=f(()=>{var u;return(u=e.labelKey)!=null?u:l.labelKey}),s=ye(),[y,C]=ue(""),h=()=>{var u;return(u=s.value)==null?void 0:u.focus()},S=()=>{var u;return(u=s.value)==null?void 0:u.blur()},x=()=>{var u;e.searchable==="overlay"?C(""):(u=s.value)==null||u.clearInput()};a({focus:h,blur:S});const{overlayRef:d,updateOverlay:F,overlayOpened:E,setOverlayOpened:b}=Re(e,l,s),{accessor:g,control:B}=Ve();Ue(B);const $=He(e,l),N=Ge(e,B),D=he(e,m,c,K,i),{mergedDataMap:k}=D,R=pe(k,i,p,T(e,"multiple"),T(e,"strategy"),T(g,"value"),u=>{const L=ie(g.value);g.setValue(u),w(e.onChange,u,L)}),{resolvedSelectedKeys:I,setValue:z}=R,J=Ye(I,k);Xe(E,u=>{u&&h(),x()});const O=()=>{e.searchable!=="overlay"&&setTimeout(h)},_=u=>{w(e.onFocus,u)},V=u=>{g.markAsBlurred(),b(!1),w(e.onBlur,u)},{focused:q,handleFocus:j,handleBlur:Q,bindOverlayMonitor:Y}=ke(_,V);Je(()=>{Y(d,E)});const Ae=u=>{h(),R.handleSelect(u)},Ee=u=>{z([]),w(e.onClear,u)};fe(Ke,{...D,...R});const Fe=f(()=>{const{overlayClassName:u,multiple:L}=e,M=o.value;return ae({[`${M}-overlay`]:!0,[`${M}-overlay-multiple`]:L,[u||""]:!!u})}),Ie=()=>A(qe,W({ref:s,className:o.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:v.value,config:l,dataSource:J.value,disabled:g.disabled,focused:q.value,maxLabel:e.maxLabel,multiple:e.multiple,opened:E.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:$.value,status:N.value,suffix:e.suffix,value:I.value,onFocus:j,onBlur:Q,onClear:Ee,onInputValueChange:C,onItemRemove:Ae,onOpenedChange:b,onResize:F,onSearch:e.onSearch},t),n),Le=Qe(e,y,b),we=u=>{const{value:L}=u.target;C(L),e.searchable&&w(e.onSearch,L)},Pe=()=>{C(""),e.searchable&&w(e.onSearch,"")},Ne=()=>{const{searchable:u,overlayRender:L,searchPlaceholder:M}=e,oe=y.value,ce=o.value,De={empty:n.empty,optionLabel:n.optionLabel},Z=[A("div",{key:"__content",class:`${ce}-overlay-content`},[A(Ce,Le.value,De)])];return u==="overlay"&&Z.unshift(A("div",{key:"__search-wrapper",class:`${ce}-overlay-search-wrapper`},[A(je,{clearable:!0,clearIcon:v.value,clearVisible:!!oe,size:"sm",suffix:"search",value:oe,placeholder:M,onClear:Pe,onInput:we},null)])),A("div",{tabindex:-1,onMousedown:O},[L?L(Z):Z])};return()=>{var M;const u={class:Fe.value,clickOutside:!1,container:(M=e.overlayContainer)!=null?M:l.overlayContainer,containerFallback:`.${o.value}-overlay-container`,disabled:g.disabled||e.readonly,offset:vt,placement:"bottomStart",transitionName:`${r.prefixCls}-slide-auto`,trigger:"manual",triggerId:t.id,visible:E.value,"onUpdate:visible":b},L={default:Ie,content:Ne};return A(ze,W({ref:d},u),L)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const pt=ht,St=Ce;export{pt as I,St as a};