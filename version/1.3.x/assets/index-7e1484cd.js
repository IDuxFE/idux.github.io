import{K as ne,m as D,al as te,ao as le,L as X,N as ie,a6 as fe,k as ve,ap as ye,H as he,aq as ge,ac as pe,ar as me,as as be,r as Se,a9 as xe,ad as Ce,ae as Ke,at as Ie,au as Ee}from"./index-4edbd2bb.js";import{f as u,k as O,b as re,a as Le,t as Ae,v as z,i as J,z as Q,y as I,a2 as T,w as oe,p as we}from"./vendor-1c103b38.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Fe(e,t){const[n,l]=ne(void 0),o=u(()=>{const a=n.value;return a!==void 0?t.value.get(a):void 0});return{activeKey:n,activeData:o,setActiveKey:l}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Oe(e,t,n,l,o){const a=u(()=>se(e,t.value,n.value,l.value,o.value,e.dataSource)),c=u(()=>{const d=new Map;return Y(d,a.value),d});return{mergedData:a,mergedDataMap:c}}function se(e,t,n,l,o,a,c,d){const{loadChildren:i}=e;return a.map(v=>ce(v,t,n,l,o,!!i,c,d))}function ce(e,t,n,l,o,a,c,d){const i=t(e),v=o&&!O(d)?`${d}/${e[l]}`:e[l],p=e[n],g=p==null?void 0:p.map(y=>ce(y,t,n,l,o,a,i,v));return{children:g,key:i,isLeaf:e.isLeaf??!(g!=null&&g.length||a),label:v,parentKey:c,rawData:e}}function Y(e,t){t.forEach(n=>{const{key:l,children:o}=n;e.set(l,n),o&&Y(e,o)})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function $e(e,t,n){if(n){const l=[],o=e.value;t.forEach(a=>{const c=o.get(a);c&&l.push(c.rawData)}),D(n,t,l)}}function Z(e,t){if(!e||!e.children)return[];const n=[];return e.children.forEach(l=>{const{key:o,rawData:a}=l;(!t||!a.disabled)&&(n.push(o),n.push(...Z(l,t)))}),n}function k(e,t,n){const l=[];for(;t&&!O(t.parentKey);){const{parentKey:o,rawData:a}=t;!n||!a.disabled?(l.unshift(o),t=e.get(o)):t=void 0}return l}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ne(e,t,n,l,o,a,c){const d=r=>{if(O(r))return[];const s=a.value,h=s.get(r);return k(s,h,!1)},[i,v]=te(e,"expandedKeys",()=>d(c.value[0])),[p,g]=te(e,"loadedKeys",()=>[]),y=re([]),A=async r=>{const{loadChildren:s}=e;if(y.value.includes(r))return;const f=a.value.get(r);if(f&&(!f.children||f.children.length===0)){if(!s||p.value.includes(r))return;y.value.push(r);const b=f.rawData,L=await s(b);y.value.splice(y.value.indexOf(r),1);const w=a.value;if(L.length){const K=n.value,F=se(e,t.value,K,l.value,o.value,L,r,f.label);Y(w,F),f.rawData[K]=L,f.children=F;const N=[...p.value,r];g(N),D(e.onLoaded,N,b)}else return}const x=i.value.indexOf(r)>=0;if(!x){const b=a.value,L=k(b,b.get(r),!1);L.push(r),E(L,!x,f.rawData)}},E=(r,s,h)=>{v(r);const{onExpand:f,onExpandedChange:m}=e;D(f,s,h),$e(a,r,m)};return{expandedKeys:i,setExpandedKeys:v,handleExpand:A,loadingKeys:y}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Be(e,t,n,l){const o=Pe(e,t),a=u(()=>e.multiple||e.strategy==="off"),c=u(()=>{const i=l.value,v=o.value;if(!i||!v)return le;const p=a.value,g=new Set;return n.value.forEach(y=>{const{key:A,rawData:E}=y;g.has(A)||v(E,i)&&((p||y.isLeaf)&&g.add(A),ue(g,y,p))}),[...g]});return{searchedData:u(()=>{const i=n.value;return c.value.map(v=>i.get(v)).filter(Boolean)})}}function Pe(e,t){return u(()=>{const n=e.searchFn;return Le(n)?n:n?De(t.value):!1})}function De(e){return(t,n)=>{const l=t[e];return l?l.toLowerCase().includes(n.toLowerCase()):!1}}function ue(e,t,n){!t||!t.children||t.children.forEach(l=>{l.rawData.disabled||e.has(l.key)||((n||l.isLeaf)&&e.add(l.key),ue(e,l,n))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e,t,n,l){const o=X("locale"),a=u(()=>{const r=ie(t.value);if(!l.value)return r;if(!e.multiple){const s=r[r.length-1];return O(s)?[]:[s]}return r.map(s=>s[s.length-1]).filter(s=>!O(s))}),c=u(()=>a.value.length>=e.multipleLimit),d=u(()=>c.value?o.select.limitMessage.replace("${0}",`${e.multipleLimit}`):""),i=u(()=>{const r=n.value;return a.value.map(s=>r.get(s)).filter(Boolean)}),v=u(()=>e.multiple&&e.strategy!=="off"),p=u(()=>v.value?ke(n.value,a.value):a.value),g=u(()=>{if(!v.value)return le;const r=new Set,s=p.value,h=n.value;return s.forEach(f=>{let m=h.get(f);for(;m&&!O(m.parentKey);){const x=m.parentKey,b=h.get(x);b&&!b.rawData.disabled&&!s.includes(x)&&r.add(x),m=b}}),[...r]}),y=r=>{let s;if(!l.value)s=e.multiple?r:r[0];else if(e.multiple){const f=n.value;s=r.map(m=>{const x=k(f,f.get(m),!0);return x.push(m),x})}else{const f=r[0],m=n.value;s=k(m,m.get(f),!0),s.push(f)}const h=Ae(t.value);s!==h&&(t.setValue(s),D(e.onChange,s,h))};return{selectedKeys:a,selectedLimit:c,selectedLimitTitle:d,selectedData:i,selectedWithStrategyKeys:p,indeterminateKeys:g,handleSelect:r=>{const{multiple:s}=e,h=p.value,m=h.indexOf(r)>-1;if(!s){!m&&y([r]);return}const x=n.value,b=x.get(r),L=v.value,w=L?Z(b,!0):[],K=new Set(h);m||w.length>0&&w.every(F=>K.has(F)||g.value.includes(F))?(K.delete(r),L&&(k(x,b,!0).forEach(F=>K.delete(F)),w.forEach(F=>K.delete(F)))):(K.add(r),L&&(de(x,b,K),w.forEach(F=>K.add(F)))),y([...Re(x,K,e.strategy)])},handleClear:r=>{r.stopPropagation(),y([]),D(e.onClear,r)}}}function ke(e,t){const n=new Set(t);let l;return t.forEach(o=>{const a=e.get(o);if(!a)return;const{parentKey:c}=a;Z(a,!0).forEach(i=>n.add(i)),c&&l!==c&&(de(e,a,n),l=c)}),[...n]}function de(e,t,n){let l=!0;for(;l&&t&&!O(t.parentKey);){const o=t.parentKey,a=e.get(o);a&&!t.rawData.disabled&&(l=a.children.every(c=>c.rawData.disabled||n.has(c.key)),l&&n.add(t.parentKey)),t=a}}function Re(e,t,n){if(n==="parent"){const l=new Set;return t.forEach(o=>{const a=e.get(o);if(a){const{key:c,parentKey:d}=a;(!d||!t.has(d))&&l.add(c)}}),l}if(n==="child"){const l=new Set;return t.forEach(o=>{const a=e.get(o);a&&a.isLeaf&&l.add(a.key)}),l}return t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const H=Symbol("cascaderToken"),Ve=z({props:{children:{type:Array,default:void 0},index:{type:Number,required:!0},isLeaf:{type:Boolean,required:!0},label:{type:String,required:!0},parentKey:{type:[String,Number,Symbol],default:void 0},rawData:{type:Object,required:!0}},setup(e){const t=fe(),{props:n,slots:l,mergedPrefixCls:o,mergedExpandIcon:a,mergedLabelKey:c,inputValue:d,activeKey:i,setActiveKey:v,expandedKeys:p,setExpandedKeys:g,setOverlayOpened:y,loadingKeys:A,selectedWithStrategyKeys:E,selectedLimit:r,selectedLimitTitle:s,indeterminateKeys:h,handleSelect:f,handleExpand:m}=J(H),x=u(()=>t===i.value),b=u(()=>e.rawData.disabled),L=u(()=>p.value.includes(t)),w=u(()=>A.value.includes(t)),K=u(()=>E.value.includes(t)),F=u(()=>h.value.includes(t)),N=u(()=>{const S=`${o.value}-option`;return Q({[S]:!0,[`${S}-leaf`]:e.isLeaf,[`${S}-active`]:x.value,[`${S}-disabled`]:b.value,[`${S}-expanded`]:L.value,[`${S}-loading`]:w.value,[`${S}-selected`]:K.value})}),U=()=>{if(e.isLeaf){if(!K.value&&r.value)return;f(t),y(!1),O(e.parentKey)&&g([])}else n.strategy==="off"&&f(t),n.expandTrigger==="click"&&m(t)},$=S=>{S.stopPropagation(),f(t)},q=()=>{v(t),!e.isLeaf&&n.expandTrigger==="hover"&&m(t)};return()=>{const{rawData:S,label:R}=e,{multiple:G}=n,B=b.value,P=K.value,M=`${o.value}-option`,V=d.value,_=V?R:S[c.value],j=!(B||P)&&s.value||_,C=n.customAdditional?n.customAdditional({data:S,index:e.index}):void 0;return I("div",T({class:N.value,title:j,onClick:B?void 0:U,onMouseenter:B?void 0:q,"aria-label":R,"aria-selected":P},C),[G&&I(ve,{checked:P,disabled:B||!P&&r.value,indeterminate:F.value,onClick:$},null),I("span",{key:"__label",class:`${M}-label`},[_e(l.optionLabel,_,S,V,M)]),!e.isLeaf&&I("span",{key:"__expand-icon",class:`${M}-expand-icon`},[ye(l.expandIcon,w.value?"loading":a.value,{key:t,expanded:L.value,data:S})])])}}});function _e(e,t,n,l,o){if(e)return e({label:t,data:n,searchValue:l});if(t&&l){const a=t.toUpperCase().indexOf(l.toUpperCase());if(a>-1){const c=a+l.length,d=t.substring(0,a),i=t.substring(c),v=I("span",{class:`${o}-label-highlight`},[t.substring(a,c)]);return[d,v,i]}}return t}const ae=z({props:{dataSource:{type:Array,required:!0}},setup(e){const{props:t,slots:n,mergedPrefixCls:l}=J(H),o=u(()=>{const a=`${l.value}-option-group`;return Q({[a]:!0,[`${a}-empty`]:e.dataSource.length===0})});return()=>{const{dataSource:a}=e;let c;if(a.length>0){const{overlayHeight:d,overlayItemHeight:i,virtual:v}=t;c=I(he,{dataSource:a,getKey:"key",height:d,itemHeight:i,itemRender:({item:g,index:y})=>I(Ve,T({index:y},g),null),virtual:v},null)}else c=I(ge,{empty:t.empty},n);return I("div",{class:o.value},[c])}}}),Te=z({setup(){const{props:e,mergedPrefixCls:t,mergedClearIcon:n,mergedData:l,mergedDataMap:o,searchedData:a,expandedKeys:c,inputValue:d,setInputValue:i,updateOverlay:v}=J(H),p=Symbol(),g=u(()=>{const E=[{key:p,dataSource:l.value}],r=o.value;return c.value.forEach(s=>{const h=r.get(s);h&&h.children&&E.push({key:s,dataSource:h.children})}),E});oe([()=>g.value.length,d],()=>{v()});const y=E=>{const{value:r}=E.target;i(r),e.searchable&&D(e.onSearch,r)},A=()=>i("");return()=>{const{overlayRender:E}=e,r=d.value,s=t.value,h=[];e.searchable==="overlay"&&h.push(I("div",{key:"__search-wrapper",class:`${s}-overlay-search-wrapper`},[I(pe,{clearable:!0,clearIcon:n.value,clearVisible:!!r,size:"sm",suffix:"search",value:r,onClear:A,onInput:y},null)]));const f=r?I(ae,{dataSource:a.value},null):g.value.map(m=>I(ae,m,null));return h.push(I("div",{key:"__content",class:`${s}-overlay-content`},[f])),I("div",null,[E?E(h):h])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ze={control:{type:[String,Number,Object],default:void 0},value:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},open:{type:Boolean,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},size:{type:String,default:void 0},status:String,strategy:{type:String,default:"all"},suffix:{type:String,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:open":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSearch:[Function,Array],overlayHeight:{type:Number,default:256},overlayItemHeight:{type:Number,default:32}},He=[0,4],Ue=z({name:"IxCascader",inheritAttrs:!1,props:ze,setup(e,{attrs:t,expose:n,slots:l}){const o=X("common"),a=X("cascader"),c=u(()=>`${o.prefixCls}-cascader`),d=u(()=>e.childrenKey??a.childrenKey),i=u(()=>e.clearIcon??a.clearIcon),v=u(()=>e.expandIcon??a.expandIcon),p=u(()=>e.fullPath??a.fullPath),g=me(e,a),y=u(()=>e.labelKey??a.labelKey),A=re(),[E,r]=ne(""),s=()=>{var C;return(C=A.value)==null?void 0:C.focus()},h=()=>{var C;return(C=A.value)==null?void 0:C.blur()},f=()=>{var C;e.searchable==="overlay"?r(""):(C=A.value)==null||C.clearInput()};n({focus:s,blur:h});const{overlayRef:m,updateOverlay:x,overlayOpened:b,setOverlayOpened:L}=be(e,a,A),{accessor:w,control:K}=Se();xe(K);const F=Ce(e,a),N=Ke(e,K),{mergedData:U,mergedDataMap:$}=Oe(e,g,d,y,p),q=Fe(e,$),S=Me(e,w,$,p),{searchedData:R}=Be(e,y,$,E),G=Ne(e,g,d,y,p,$,S.selectedKeys);oe(b,C=>{C&&s(),f()});const B=()=>{e.searchable!=="overlay"&&s()},P=()=>w.markAsBlurred(),M=C=>{s(),S.handleSelect(C)};we(H,{props:e,slots:l,config:a,mergedPrefixCls:c,mergedChildrenKey:d,mergedClearIcon:i,mergedExpandIcon:v,mergedFullPath:p,mergedGetKey:g,mergedLabelKey:y,accessor:w,inputValue:E,setInputValue:r,overlayOpened:b,setOverlayOpened:L,updateOverlay:x,mergedData:U,mergedDataMap:$,...q,...S,searchedData:R,...G});const V=u(()=>{const{overlayClassName:C,multiple:W}=e,ee=c.value;return Q({[`${ee}-overlay`]:!0,[`${ee}-overlay-multiple`]:W,[C||""]:!!C})}),_=()=>I(Ee,T({ref:A,className:c.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:e.clearIcon,config:a,dataSource:S.selectedData.value,disabled:w.disabled,maxLabel:e.maxLabel,multiple:e.multiple,opened:b.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:F.value,status:N.value,suffix:e.suffix,value:S.selectedKeys.value,onBlur:P,onClear:S.handleClear,onInputValueChange:r,onItemRemove:M,onOpenedChange:L,onResize:x,onSearch:e.onSearch},t),l),j=()=>I(Te,{onClick:B},null);return()=>{const C={class:V.value,clickOutside:!0,container:e.overlayContainer??a.overlayContainer,containerFallback:`.${c.value}-overlay-container`,disabled:w.disabled||e.readonly,offset:He,placement:"bottomStart",transitionName:`${o.prefixCls}-slide-up`,trigger:"manual",triggerId:t.id,visible:b.value,"onUpdate:visible":L},W={default:_,content:j};return I(Ie,T({ref:m},C),W)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const je=Ue;export{je as I};
