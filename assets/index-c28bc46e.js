import{a8 as ne,i as M,ac as te,ao as le,u as X,aa as ie,l as fe,C as ve,ap as ye,a7 as he,aq as ge,E as pe,ar as me,as as be,p as Se,q as xe,G as Ce,H as Ke,at as Ie,au as Ee}from"./index-32d407ed.js";import{e as u,k as B,b as re,a as Le,t as Ae,v as z,i as J,z as Q,y as C,a2 as T,w as oe,p as we}from"./vendor-730bc5d6.js";function Fe(e,t){const[n,l]=ne(void 0),o=u(()=>{const a=n.value;return a!==void 0?t.value.get(a):void 0});return{activeKey:n,activeData:o,setActiveKey:l}}function Oe(e,t,n,l,o){const a=u(()=>se(e,t.value,n.value,l.value,o.value,e.dataSource)),c=u(()=>{const d=new Map;return Y(d,a.value),d});return{mergedData:a,mergedDataMap:c}}function se(e,t,n,l,o,a,c,d){const{loadChildren:f}=e;return a.map(h=>ce(h,t,n,l,o,!!f,c,d))}function ce(e,t,n,l,o,a,c,d){const f=t(e),h=o&&!B(d)?`${d}/${e[l]}`:e[l],p=e[n],g=p==null?void 0:p.map(v=>ce(v,t,n,l,o,a,f,h));return{children:g,key:f,isLeaf:e.isLeaf??!(g!=null&&g.length||a),label:h,parentKey:c,rawData:e}}function Y(e,t){t.forEach(n=>{const{key:l,children:o}=n;e.set(l,n),o&&Y(e,o)})}function $e(e,t,n){if(n){const l=[],o=e.value;t.forEach(a=>{const c=o.get(a);c&&l.push(c.rawData)}),M(n,t,l)}}function Z(e,t){if(!e||!e.children)return[];const n=[];return e.children.forEach(l=>{const{key:o,rawData:a}=l;(!t||!a.disabled)&&(n.push(o),n.push(...Z(l,t)))}),n}function R(e,t,n){const l=[];for(;t&&!B(t.parentKey);){const{parentKey:o,rawData:a}=t;!n||!a.disabled?(l.unshift(o),t=e.get(o)):t=void 0}return l}function Be(e,t,n,l,o,a,c){const d=r=>{if(B(r))return[];const s=a.value,i=s.get(r);return R(s,i,!1)},[f,h]=te(e,"expandedKeys",()=>d(c.value[0])),[p,g]=te(e,"loadedKeys",()=>[]),v=re([]),w=async r=>{const{loadChildren:s}=e;if(v.value.includes(r))return;const y=a.value.get(r);if(y&&(!y.children||y.children.length===0)){if(!s||p.value.includes(r))return;v.value.push(r);const b=y.rawData,K=await s(b);v.value.splice(v.value.indexOf(r),1);const E=a.value;if(K.length){const L=n.value,F=se(e,t.value,L,l.value,o.value,K,r,y.label);Y(E,F),y.rawData[L]=K,y.children=F;const N=[...p.value,r];g(N),M(e.onLoaded,N,b)}else return}const S=f.value.indexOf(r)>=0;if(!S){const b=a.value,K=R(b,b.get(r),!1);K.push(r),x(K,!S,y.rawData)}},x=(r,s,i)=>{h(r);const{onExpand:y,onExpandedChange:m}=e;M(y,s,i),$e(a,r,m)};return{expandedKeys:f,handleExpand:w,loadingKeys:v}}function Ne(e,t,n,l){const o=Pe(e,t),a=u(()=>e.multiple||e.strategy==="off"),c=u(()=>{const f=l.value,h=o.value;if(!f||!h)return le;const p=a.value,g=new Set;return n.value.forEach(v=>{const{key:w,rawData:x}=v;g.has(w)||h(x,f)&&((p||v.isLeaf)&&g.add(w),ue(g,v,p))}),[...g]});return{searchedData:u(()=>{const f=n.value;return c.value.map(h=>f.get(h)).filter(Boolean)})}}function Pe(e,t){return u(()=>{const n=e.searchFn;return Le(n)?n:n?De(t.value):!1})}function De(e){return(t,n)=>{const l=t[e];return l?l.toLowerCase().includes(n.toLowerCase()):!1}}function ue(e,t,n){!t||!t.children||t.children.forEach(l=>{l.rawData.disabled||e.has(l.key)||((n||l.isLeaf)&&e.add(l.key),ue(e,l,n))})}function Me(e,t,n,l){const o=X("locale"),a=u(()=>{const r=ie(t.value);if(!l.value)return r;if(!e.multiple){const s=r[r.length-1];return B(s)?[]:[s]}return r.map(s=>s[s.length-1]).filter(s=>!B(s))}),c=u(()=>a.value.length>=e.multipleLimit),d=u(()=>c.value?o.select.limitMessage.replace("${0}",`${e.multipleLimit}`):""),f=u(()=>{const r=n.value;return a.value.map(s=>r.get(s)).filter(Boolean)}),h=u(()=>e.multiple&&e.strategy!=="off"),p=u(()=>h.value?ke(n.value,a.value):a.value),g=u(()=>{if(!h.value)return le;const r=new Set,s=p.value,i=n.value;return s.forEach(y=>{let m=i.get(y);for(;m&&!B(m.parentKey);){const S=m.parentKey,b=i.get(S);b&&!b.rawData.disabled&&!s.includes(S)&&r.add(S),m=b}}),[...r]}),v=r=>{let s;if(!l.value)s=e.multiple?r:r[0];else if(e.multiple){const y=n.value;s=r.map(m=>{const S=R(y,y.get(m),!0);return S.push(m),S})}else{const y=r[0],m=n.value;s=R(m,m.get(y),!0),s.push(y)}const i=Ae(t.value);s!==i&&(t.setValue(s),M(e.onChange,s,i))};return{selectedKeys:a,selectedLimit:c,selectedLimitTitle:d,selectedData:f,selectedWithStrategyKeys:p,indeterminateKeys:g,handleSelect:r=>{const{multiple:s}=e,i=p.value,m=i.indexOf(r)>-1;if(!s){!m&&v([r]);return}const S=n.value,b=S.get(r),K=h.value,E=K?Z(b,!0):[],L=new Set(i);m||E.length>0&&E.every(F=>L.has(F)||g.value.includes(F))?(L.delete(r),K&&(R(S,b,!0).forEach(F=>L.delete(F)),E.forEach(F=>L.delete(F)))):(L.add(r),K&&(de(S,b,L),E.forEach(F=>L.add(F)))),v([...Re(S,L,e.strategy)])},handleClear:r=>{r.stopPropagation(),v([]),M(e.onClear,r)}}}function ke(e,t){const n=new Set(t);let l;return t.forEach(o=>{const a=e.get(o);if(!a)return;const{parentKey:c}=a;Z(a,!0).forEach(f=>n.add(f)),c&&l!==c&&(de(e,a,n),l=c)}),[...n]}function de(e,t,n){let l=!0;for(;l&&t&&!B(t.parentKey);){const o=t.parentKey,a=e.get(o);a&&!t.rawData.disabled&&(l=a.children.every(c=>c.rawData.disabled||n.has(c.key)),l&&n.add(t.parentKey)),t=a}}function Re(e,t,n){if(n==="parent"){const l=new Set;return t.forEach(o=>{const a=e.get(o);if(a){const{key:c,parentKey:d}=a;(!d||!t.has(d))&&l.add(c)}}),l}if(n==="child"){const l=new Set;return t.forEach(o=>{const a=e.get(o);a&&a.isLeaf&&l.add(a.key)}),l}return t}const q=Symbol("cascaderToken"),Ve=z({props:{children:{type:Array,default:void 0},index:{type:Number,required:!0},isLeaf:{type:Boolean,required:!0},label:{type:String,required:!0},parentKey:{type:[String,Number,Symbol],default:void 0},rawData:{type:Object,required:!0}},setup(e){const t=fe(),{props:n,slots:l,mergedPrefixCls:o,mergedExpandIcon:a,mergedLabelKey:c,inputValue:d,activeKey:f,setActiveKey:h,expandedKeys:p,setOverlayOpened:g,loadingKeys:v,selectedKeys:w,selectedLimit:x,selectedLimitTitle:r,indeterminateKeys:s,handleSelect:i,handleExpand:y}=J(q),m=u(()=>t===f.value),S=u(()=>e.rawData.disabled),b=u(()=>p.value.includes(t)),K=u(()=>v.value.includes(t)),E=u(()=>w.value.includes(t)),L=u(()=>s.value.includes(t)),F=u(()=>{const A=`${o.value}-option`;return Q({[A]:!0,[`${A}-leaf`]:e.isLeaf,[`${A}-active`]:m.value,[`${A}-disabled`]:S.value,[`${A}-expanded`]:b.value,[`${A}-loading`]:K.value,[`${A}-selected`]:E.value})}),N=()=>{if(e.isLeaf){if(!E.value&&x.value)return;i(t),g(!1)}else n.strategy==="off"&&i(t),n.expandTrigger==="click"&&y(t)},G=A=>{A.stopPropagation(),i(t)},$=()=>{h(t),!e.isLeaf&&n.expandTrigger==="hover"&&y(t)};return()=>{const{rawData:A,label:O}=e,{multiple:H}=n,P=S.value,D=E.value,k=`${o.value}-option`,V=d.value,_=V?O:A[c.value],U=!(P||D)&&r.value||_,j=n.customAdditional?n.customAdditional({data:A,index:e.index}):void 0;return C("div",T({class:F.value,title:U,onClick:P?void 0:N,onMouseenter:P?void 0:$,"aria-label":O,"aria-selected":D},j),[H&&C(ve,{checked:D,disabled:P||!D&&x.value,indeterminate:L.value,onClick:G},null),C("span",{key:"__label",class:`${k}-label`},[_e(l.optionLabel,_,A,V,k)]),!e.isLeaf&&C("span",{key:"__expand-icon",class:`${k}-expand-icon`},[ye(l.expandIcon,K.value?"loading":a.value,{key:t,expanded:b.value,data:A})])])}}});function _e(e,t,n,l,o){if(e)return e({label:t,data:n,searchValue:l});if(t&&l){const a=t.toUpperCase().indexOf(l.toUpperCase());if(a>-1){const c=a+l.length,d=t.substring(0,a),f=t.substring(c),h=C("span",{class:`${o}-label-highlight`},[t.substring(a,c)]);return[d,h,f]}}return t}const ae=z({props:{dataSource:{type:Array,required:!0}},setup(e){const{props:t,slots:n,mergedPrefixCls:l}=J(q),o=u(()=>{const a=`${l.value}-option-group`;return Q({[a]:!0,[`${a}-empty`]:e.dataSource.length===0})});return()=>{const{dataSource:a}=e;let c;if(a.length>0){const{overlayHeight:d,overlayItemHeight:f,virtual:h}=t;c=C(he,{dataSource:a,getKey:"key",height:d,itemHeight:f,itemRender:({item:g,index:v})=>C(Ve,T({index:v},g),null),virtual:h},null)}else c=C(ge,{empty:t.empty},n);return C("div",{class:o.value},[c])}}}),Te=z({setup(){const{props:e,mergedPrefixCls:t,mergedClearIcon:n,mergedData:l,mergedDataMap:o,searchedData:a,expandedKeys:c,inputValue:d,setInputValue:f,updateOverlay:h}=J(q),p=Symbol(),g=u(()=>{const x=[{key:p,dataSource:l.value}],r=o.value;return c.value.forEach(s=>{const i=r.get(s);i&&i.children&&x.push({key:s,dataSource:i.children})}),x});oe([()=>g.value.length,d],()=>{h()});const v=x=>{const{value:r}=x.target;f(r),e.searchable&&M(e.onSearch,r)},w=()=>f("");return()=>{const{overlayRender:x}=e,r=d.value,s=t.value,i=[];e.searchable==="overlay"&&i.push(C("div",{key:"__search-wrapper",class:`${s}-overlay-search-wrapper`},[C(pe,{clearable:!0,clearIcon:n.value,clearVisible:!!r,size:"sm",suffix:"search",value:r,onClear:w,onInput:v},null)]));const y=r?C(ae,{dataSource:a.value},null):g.value.map(m=>C(ae,m,null));return i.push(C("div",{key:"__content",class:`${s}-overlay-content`},[y])),C("div",null,[x?x(i):i])}}}),ze={control:{type:[String,Number,Object],default:void 0},value:{type:null,default:void 0},expandedKeys:{type:Array,default:void 0},loadedKeys:{type:Array,default:void 0},open:{type:Boolean,default:void 0},autocomplete:{type:String,default:"off"},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},childrenKey:{type:String,default:void 0},clearable:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},customAdditional:{type:Function,default:void 0},dataSource:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},empty:{type:[String,Object],default:"simple"},expandIcon:{type:String,default:void 0},expandTrigger:{type:String,default:"click"},fullPath:{type:Boolean,default:void 0},getKey:{type:[String,Function],default:void 0},labelKey:{type:String,default:void 0},loadChildren:{type:Function,default:void 0},maxLabel:{type:[Number,String],default:Number.MAX_SAFE_INTEGER},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:Number.MAX_SAFE_INTEGER},overlayClassName:{type:String,default:void 0},overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayMatchWidth:{type:Boolean,default:void 0},overlayRender:{type:Function,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},searchable:{type:[Boolean,String],default:!1},searchFn:{type:[Boolean,Function],default:!0},size:{type:String,default:void 0},status:String,strategy:{type:String,default:"all"},suffix:{type:String,default:void 0},virtual:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:expandedKeys":[Function,Array],"onUpdate:loadedKeys":[Function,Array],"onUpdate:open":[Function,Array],onChange:[Function,Array],onClear:[Function,Array],onExpand:[Function,Array],onExpandedChange:[Function,Array],onLoaded:[Function,Array],onSearch:[Function,Array],overlayHeight:{type:Number,default:256},overlayItemHeight:{type:Number,default:32}},qe=[0,4],Ge=z({name:"IxCascader",inheritAttrs:!1,props:ze,setup(e,{attrs:t,expose:n,slots:l}){const o=X("common"),a=X("cascader"),c=u(()=>`${o.prefixCls}-cascader`),d=u(()=>e.childrenKey??a.childrenKey),f=u(()=>e.clearIcon??a.clearIcon),h=u(()=>e.expandIcon??a.expandIcon),p=u(()=>e.fullPath??a.fullPath),g=me(e,a),v=u(()=>e.labelKey??a.labelKey),w=re(),[x,r]=ne(""),s=()=>{var I;return(I=w.value)==null?void 0:I.focus()},i=()=>{var I;return(I=w.value)==null?void 0:I.blur()},y=()=>{var I;e.searchable==="overlay"?r(""):(I=w.value)==null||I.clearInput()};n({focus:s,blur:i});const{overlayRef:m,updateOverlay:S,overlayOpened:b,setOverlayOpened:K}=be(e,a,w),{accessor:E,control:L}=Se();xe(L);const F=Ce(e,a),N=Ke(e,L),{mergedData:G,mergedDataMap:$}=Oe(e,g,d,v,p),A=Fe(e,$),O=Me(e,E,$,p),{searchedData:H}=Ne(e,v,$,x),P=Be(e,g,d,v,p,$,O.selectedKeys);oe(b,I=>{I&&s(),y()});const D=()=>{e.searchable!=="overlay"&&s()},k=()=>E.markAsBlurred(),V=I=>{s(),O.handleSelect(I)};we(q,{props:e,slots:l,config:a,mergedPrefixCls:c,mergedChildrenKey:d,mergedClearIcon:f,mergedExpandIcon:h,mergedFullPath:p,mergedGetKey:g,mergedLabelKey:v,accessor:E,inputValue:x,setInputValue:r,overlayOpened:b,setOverlayOpened:K,updateOverlay:S,mergedData:G,mergedDataMap:$,...A,...O,searchedData:H,...P});const _=u(()=>{const{overlayClassName:I,multiple:W}=e,ee=c.value;return Q({[`${ee}-overlay`]:!0,[`${ee}-overlay-multiple`]:W,[I||""]:!!I})}),U=()=>C(Ee,T({ref:w,className:c.value,allowInput:!1,autocomplete:e.autocomplete,autofocus:e.autofocus,borderless:e.borderless,clearable:e.clearable,clearIcon:e.clearIcon,config:a,dataSource:O.selectedData.value,disabled:E.disabled,maxLabel:e.maxLabel,multiple:e.multiple,opened:b.value,placeholder:e.placeholder,readonly:e.readonly,searchable:e.searchable,size:F.value,status:N.value,suffix:e.suffix,value:O.selectedKeys.value,onBlur:k,onClear:O.handleClear,onInputValueChange:r,onItemRemove:V,onOpenedChange:K,onResize:S,onSearch:e.onSearch},t),l),j=()=>C(Te,{onClick:D},null);return()=>{const I={class:_.value,clickOutside:!0,container:e.overlayContainer??a.overlayContainer,containerFallback:`.${c.value}-overlay-container`,disabled:E.disabled||e.readonly,offset:qe,placement:"bottomStart",trigger:"manual",triggerId:t.id,visible:b.value,"onUpdate:visible":K},W={default:U,content:j};return C(Ie,T({ref:m},I),W)}}}),je=Ge;export{je as I};
