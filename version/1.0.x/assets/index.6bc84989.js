import{ab as w,av as Oe,ag as Ae,p as Ee,q as Fe,H as we,J as Re,j as $,ad as U,\u0275 as X,aH as Y,u as M,n as Z,ay as ee}from"./index.3f21dce0.js";import{c as Be,n as Te,\u0275 as ne,a as te,b as $e,u as ae}from"./index.beb55b33.js";import{e as P,w as H,l as De,x as _,N as W,t as Me,v as z,b as oe,bh as le,y as C,a0 as B,i as N,$ as re,p as ue,J as se,z as ce}from"./vendor.0e7da6ec.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function D(e,n,t){if(!!n)return e.convert(n,t)}function He(e){return e.sort((n,t)=>n?t?n.valueOf()-t.valueOf():0:1)}function ze(e){return/[hH]/.test(e)}function Ue(e){return/m/.test(e)}function Ne(e){return/s/.test(e)}function ie(e){return/[aA]/.test(e)}function Ke(e){return/A/.test(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function j(e,n,t,a){const[o,r]=w(void 0),[p,u]=w(!1),[i,l]=w(void 0),{parse:f,format:h}=e,g=P(()=>D(e,a.value,n.value)),x=P(()=>De(a.value)?a.value:g.value?h(g.value,n.value):"");function v(I=!1){var S;(I||!o.value||f(o.value,n.value).valueOf()!==((S=g.value)==null?void 0:S.valueOf()))&&r(x.value),l(g.value)}H([a,n],()=>v(),{immediate:!0});function d(I,S){return I?e.parse(I,S):void 0}function m(I){return!I||e.isValid(I)}function c(I){const S=I.target.value;r(S);const F=d(S,n.value);m(F)&&t(o.value?F:void 0)}function s(){r("")}function y(){u(!0)}function V(){u(!1)}function k(I){t(I)}return{inputValue:o,panelValue:i,inputFocused:p,setInputValue:r,setPanelValue:l,init:v,handleInput:c,handleInputClear:s,handleInputFocus:y,handleInputBlur:V,handlePanelChange:k}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function de(e,n){return P(()=>{var a;const t=(a=e.allowInput)!=null?a:n.allowInput;return{enableExternalInput:t===!0,enableInternalInput:t==="overlay"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function je(e){return n=>{(n.code==="Escape"||n.code==="Enter")&&e(!1)}}function _e(e,n,t){const{bufferUpdated:a,buffer:o}=e;return r=>{switch(r.code){case"Escape":n(!1);break;case"Enter":a.value&&t(o.value),n(!1);break}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=[0,8];function pe(e){const{props:n,common:t,config:a,accessor:o,mergedPrefixCls:r,overlayOpened:p,setOverlayOpened:u}=e,i=Oe(n,a,t,r);return P(()=>({clickOutside:!0,container:i.value,disabled:o.disabled||n.readonly,offset:Le,placement:"bottomStart",transitionName:`${t.prefixCls}-fade`,trigger:"manual",visible:p.value,"onUpdate:visible":u}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function fe(e,n){const[t,a]=Ae(e,"open",!1),o=r=>{a(r),r||n.init(!0)};return _(()=>{e.autofocus&&a(!0)}),{overlayOpened:t,setOverlayOpened:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ve(e,n,t,a){const{accessor:o,control:r}=Ee();Fe(r);const p=we(e,n),u=Re(e,r),[i,l]=w(!1),f=d=>{const{get:m}=t,c=ie(a.value);return U(d).some(s=>{const y=m(s,"hour"),V=Te(y,c),k=Be(y,!!c),I=m(s,"minute"),S=m(s,"second");return e.disabledHours(V).includes(k)||e.disabledMinutes(k,V).includes(I)||e.disabledSeconds(k,I,V).includes(S)})};function h(d){const m=W(d)?He(d):d;if(f(m))return;let c=Me(o.value);c=W(c)?c.map(s=>D(t,s,a.value)):D(t,c,a.value),o.setValue(m),$(e.onChange,m,c)}function g(d){h(void 0),$(e.onClear,d)}function x(d){l(!0),$(e.onFocus,d)}function v(d){l(!1),o.markAsBlurred(),$(e.onBlur,d)}return{accessor:o,mergedSize:p,mergedStatus:u,isFocused:i,handleChange:h,handleClear:g,handleFocus:x,handleBlur:v}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function me(e){return P(()=>{var o,r;const{props:n,config:t,accessor:a}=e;return{borderless:!1,clearable:(o=n.clearable)!=null?o:t.clearable,clearIcon:(r=n.clearIcon)!=null?r:t.clearIcon,disabled:a.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,n,t,a){const o=P(()=>D(n,e.defaultOpenValue,t.value)),[r,p]=w(()=>{var u;return(u=a.value)!=null?u:o.value});return H(a,u=>{p(u!=null?u:o.value)}),{activeValue:r,setActiveValue:p}}function qe(e,n,t,a){const o=P(()=>U(e.defaultOpenValue).map(l=>D(n,l,t.value))),[r,p]=w(()=>{var l,f;return(f=(l=a.value)==null?void 0:l[0])!=null?f:o.value[0]}),[u,i]=w(()=>{var l,f;return(f=(l=a.value)==null?void 0:l[1])!=null?f:o.value[1]});return H(a,l=>{var f,h;p((f=l==null?void 0:l[0])!=null?f:o.value[0]),i((h=l==null?void 0:l[1])!=null?h:o.value[1])}),{fromActiveValue:r,toActiveValue:u,setFromActiveValue:p,setToActiveValue:i}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ge(e,n){return P(()=>{const{disabledHours:t,disabledMinutes:a,disabledSeconds:o,hideDisabledOptions:r,hourStep:p,minuteStep:u,secondStep:i}=e,l=n.value;return{disabledHours:t,disabledMinutes:a,disabledSeconds:o,hideDisabledOptions:r,hourStep:p,minuteStep:u,secondStep:i,hourEnabled:ze(l),minuteEnabled:Ue(l),secondEnabled:Ne(l),use12Hours:ie(l),amPmCapital:Ke(l)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=Symbol("timePickerContext"),J=Symbol("timeRangePickerContext"),Ge=z({setup(){const e=N(L),{slots:n,props:t,locale:a,formatRef:o,dateConfig:r,inputRef:p,inputEnableStatus:u,mergedPrefixCls:i,overlayOpened:l,handleClear:f,handleKeyDown:h,controlContext:{inputValue:g,panelValue:x,inputFocused:v,handleInput:d,handleInputFocus:m,handleInputBlur:c,handlePanelChange:s}}=e,y=oe(),V=()=>{var O;u.value.enableInternalInput&&(p.value=(O=y.value)==null?void 0:O.getInputElement())};_(V),le(V);const k=me(e),I=ge(t,o),{activeValue:S,setActiveValue:F}=Je(t,r,o,x),R=O=>{O.target instanceof HTMLInputElement||O.preventDefault()};return()=>{var T;const O=`${i.value}-overlay`,A=`${i.value}-board`,b={...I.value,activeValue:S.value,visible:l.value,value:x.value,onChange:s,"onUpdate:activeValue":F},E=[C("div",{class:`${O}-body ${A}`,tabindex:-1,onMousedown:R},[u.value.enableInternalInput&&C(X,B({ref:y,class:`${A}-input`},k.value,{clearVisible:!!g.value,value:g.value,readonly:t.readonly,focused:v.value,placeholder:(T=t.placeholder)!=null?T:a.timePicker.placeholder,onInput:d,onClear:f,onFocus:m,onBlur:c,onKeydown:h}),n),C(ne,B(b,{class:`${A}-panel`,tabindex:-1}),null)]),C(Y,{class:`${O}-footer`,footer:t.footer},n)];return t.overlayRender?t.overlayRender(E):C("div",{onMousedown:R},[E])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function he(e){const{props:n,config:t,accessor:a,mergedSize:o,mergedStatus:r,isFocused:p,handleBlur:u,handleFocus:i,handleClear:l,handleKeyDown:f,overlayOpened:h,setOverlayOpened:g,inputEnableStatus:x}=e,v=()=>{const d=h.value;d||a.disabled||g(!d)};return P(()=>{var d,m,c;return{borderless:n.borderless,clearable:!n.readonly&&!a.disabled&&((d=n.clearable)!=null?d:t.clearable)&&!!a.value,clearIcon:(m=n.clearIcon)!=null?m:t.clearIcon,disabled:a.disabled,focused:p.value,readonly:n.readonly||!x.value.enableExternalInput,size:o.value,status:r.value,suffix:(c=n.suffix)!=null?c:t.suffix,onClick:v,onClear:l,onFocus:i,onBlur:u,onKeyDown:f}})}const Qe=z({inheritAttrs:!1,setup(e,{attrs:n}){const t=N(L),{props:a,slots:o,locale:r,mergedPrefixCls:p,formatRef:u,inputRef:i,inputEnableStatus:l,controlContext:{inputValue:f,handleInput:h}}=t,g=P(()=>{var c;return(c=a.placeholder)!=null?c:r.timePicker.placeholder}),x=P(()=>Math.max(10,u.value.length)+2),v=c=>{h(c),$(a.onInput,c)},d=he(t),m=c=>{const{readonly:s,disabled:y}=d.value;return C("input",{ref:l.value.enableExternalInput?i:void 0,class:`${c}-input`,autocomplete:"off",disabled:y,placeholder:g.value,readonly:s,size:x.value,value:f.value,onInput:v},null)};return()=>{const c=p.value,s={default:()=>m(c),suffix:o.suffix,clearIcon:o.clearIcon};return C(te,B({className:c},d.value,n),s)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const be={...$e,open:{type:Boolean,default:void 0},control:{type:[String,Number,Object],default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,clearText:String,disabled:{type:Boolean,default:!1},format:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},We={...be,value:[String,Date,Number],defaultOpenValue:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]},Xe={...be,value:Array,defaultOpenValue:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]},Ye=z({name:"IxTimePicker",inheritAttrs:!1,props:We,setup(e,{attrs:n,expose:t,slots:a}){const o=M("common"),r=P(()=>`${o.prefixCls}-time-picker`),p=M("locale"),u=M("timePicker"),i=ae(),{elementRef:l,focus:f,blur:h}=Z(),g=P(()=>{var O;return(O=e.format)!=null?O:u.format}),x=ve(e,u,i,g),{accessor:v,handleChange:d}=x,m=j(i,g,d,re(v,"value")),{overlayOpened:c,setOverlayOpened:s}=fe(e,m),y=de(e,u),V=je(s),k={props:e,slots:a,dateConfig:i,common:o,locale:p,config:u,mergedPrefixCls:r,formatRef:g,handleKeyDown:V,inputRef:l,inputEnableStatus:y,overlayOpened:c,setOverlayOpened:s,controlContext:m,...x};ue(L,k),t({focus:f,blur:h}),H(c,O=>{se(()=>{var A,b;O?(f(),(A=l.value)==null||A.dispatchEvent(new FocusEvent("focus"))):(h(),(b=l.value)==null||b.dispatchEvent(new FocusEvent("blur")))})});const I=()=>C(Qe,n,null),S=()=>C(Ge,null,null),F=pe(k),R=P(()=>ce([`${r.value}-overlay`,e.overlayClassName]));return()=>C(ee,B(F.value,{class:R.value,triggerId:n.id}),{default:I,content:S})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,n,t){const[a,o]=w(U(t.value).map(v=>D(e,v,n.value))),[r,p]=w(!1),u=v=>{o(en(e,v,n.value)),p(!0)};H([t,n],([v])=>{u(v)});const i=P(()=>U(a.value)),l=P(()=>i.value[0]),f=P(()=>i.value[1]),h=j(e,n,v=>{u([v,f.value])},l),g=j(e,n,v=>{u([l.value,v])},f);return{buffer:a,bufferUpdated:r,fromControl:h,toControl:g,init:(v=!1)=>{u(t.value),p(!1),h.init(v),g.init(v)}}}function en(e,n,t){return U(n).map(a=>D(e,a,t))}const nn=z({setup(){const e=N(J),{props:n,slots:t,dateConfig:a,locale:o,mergedPrefixCls:r,formatRef:p,inputRef:u,inputEnableStatus:i,overlayOpened:l,handleChange:f,handleKeyDown:h,renderSeparator:g,setOverlayOpened:x,rangeControlContext:{buffer:v,fromControl:d,toControl:m}}=e,c=oe(),s=()=>{var b;i.value.enableInternalInput&&(u.value=(b=c.value)==null?void 0:b.getInputElement())};_(s),le(s);const y=me(e),V=ge(n,p),{fromActiveValue:k,toActiveValue:I,setFromActiveValue:S,setToActiveValue:F}=qe(n,a,p,P(()=>[d.panelValue.value,m.panelValue.value])),R=()=>{f(v.value),x(!1)},O=b=>{b.target instanceof HTMLInputElement||b.preventDefault()};function A(b){var G,Q;const{inputValue:E,inputFocused:T,panelValue:ye,handleInput:Ie,handleInputClear:Ce,handleInputFocus:Pe,handleInputBlur:xe,handlePanelChange:Ve}=b?d:m,q=b?0:1,Se=(Q=(G=n.placeholder)==null?void 0:G[q])!=null?Q:o.timeRangePicker.placeholder[q],K=`${r.value}-board`,ke={...V.value,activeValue:b?k.value:I.value,visible:l.value,value:ye.value,onChange:Ve,"onUpdate:activeValue":b?S:F};return C("div",{class:K},[i.value.enableInternalInput&&C(X,B({ref:b?c:void 0,class:`${K}-input`},y.value,{clearVisible:!!E.value,value:E.value,readonly:n.readonly,focused:T.value,placeholder:Se,onInput:Ie,onClear:Ce,onFocus:Pe,onBlur:xe,onKeydown:h}),t),C(ne,B(ke,{class:`${K}-panel`,tabindex:-1}),null)])}return()=>{const b=`${r.value}-overlay`,E={[`${b}-separator`]:!0,[`${b}-separator-line`]:!i.value.enableInternalInput},T=[C("div",{class:`${b}-body`,onMousedown:O},[A(!0),C("div",{class:E},[i.value.enableInternalInput&&g()]),A(!1)]),C(Y,{class:`${b}-footer`,footer:n.footer,okText:o.timeRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:R},t)];return n.overlayRender?n.overlayRender(T):C("div",{onMousedown:O},[T])}}}),tn=z({inheritAttrs:!1,setup(e,{attrs:n}){const t=N(J),{props:a,slots:o,locale:r,mergedPrefixCls:p,inputRef:u,inputEnableStatus:i,renderSeparator:l,rangeControlContext:{fromControl:f,toControl:h}}=t,g=P(()=>{var s,y,V,k;return[(y=(s=a.placeholder)==null?void 0:s[0])!=null?y:r.timeRangePicker.placeholder[0],(k=(V=a.placeholder)==null?void 0:V[1])!=null?k:r.timeRangePicker.placeholder[1]]}),x=s=>{f.handleInput(s),$(a.onInput,!0,s)},v=s=>{h.handleInput(s),$(a.onInput,!1,s)};function d(s,y){const{inputValue:V}=y?f:h,{disabled:k,readonly:I}=m.value,S=g.value[y?0:1],F=y?x:v;return C("input",{ref:y&&i.value.enableExternalInput?u:void 0,class:`${s}-input-inner`,autocomplete:"off",disabled:k,value:V.value,placeholder:S,readonly:I,onInput:F},null)}const m=he(t),c=s=>C("span",{class:`${s}-input`},[d(s,!0),C("span",{class:`${s}-input-separator`},[l()]),d(s,!1)]);return()=>{const s=p.value,y={default:()=>c(s),suffix:o.suffix,clearIcon:o.clearIcon};return C(te,B({className:s},m.value,n),y)}}}),an=z({name:"IxTimeRangePicker",inheritAttrs:!1,props:Xe,setup(e,{attrs:n,expose:t,slots:a}){const o=M("common"),r=P(()=>`${o.prefixCls}-time-range-picker`),p=M("locale"),u=M("timePicker"),i=ae(),{elementRef:l,focus:f,blur:h}=Z(),g=P(()=>{var A;return(A=e.format)!=null?A:u.format}),x=ve(e,u,i,g),{accessor:v,handleChange:d}=x,m=Ze(i,g,re(v,"value")),{overlayOpened:c,setOverlayOpened:s}=fe(e,m),y=de(e,u),V=_e(m,s,d),I={props:e,slots:a,dateConfig:i,common:o,locale:p,config:u,mergedPrefixCls:r,formatRef:g,handleKeyDown:V,inputRef:l,inputEnableStatus:y,overlayOpened:c,setOverlayOpened:s,renderSeparator:()=>{var A,b,E;return(E=(b=(A=a.separator)==null?void 0:A.call(a))!=null?b:e.separator)!=null?E:p.timeRangePicker.separator},rangeControlContext:m,...x};ue(J,I),t({focus:f,blur:h}),H(c,A=>{se(()=>{var b,E;A?(f(),(b=l.value)==null||b.dispatchEvent(new FocusEvent("focus"))):(h(),(E=l.value)==null||E.dispatchEvent(new FocusEvent("blur")))})});const S=()=>C(tn,n,null),F=()=>C(nn,null,null),R=pe(I),O=P(()=>ce([`${r.value}-overlay`,e.overlayClassName]));return()=>C(ee,B(R.value,{class:O.value,triggerId:n.id}),{default:S,content:F})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const un=Ye,sn=an;export{un as I,sn as a};
