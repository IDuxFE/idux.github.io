import{c as Te,d as Ee,n as Fe,k as $e,ɵ as le,l as Be,g as oe,u as re}from"./index-e07829c4.js";import{bb as O,c as x,bk as Re,x as N,bg as Oe,v as Y,a7 as De,aO as we,aX as Ue,aY as ze,bT as te,a_ as He,R as z,be as L,d as _,i as Q,q as j,aQ as ue,f as C,aW as se,af as U,bD as ce,as as H,at as ie,aK as de,aw as pe,a4 as fe,an as ve,bu as me}from"./index-ab797f89.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(e,n,a){if(n)return e.convert(n,a)}function Ke(e){return e.sort((n,a)=>n?a?n.valueOf()-a.valueOf():0:1)}function be(e){return/[hH]/.test(e)}function he(e){return/m/.test(e)}function ge(e){return/s/.test(e)}function J(e){return/[aA]/.test(e)}function Ne(e){return/A/.test(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function X(e,n,a,t){const[l,u]=O(void 0),[i,d]=O(!1),[p,o]=O(void 0),{parse:c,format:b}=e,v=x(()=>Te(e,t.value,n.value)),I=x(()=>Re(t.value)?t.value:v.value?b(v.value,n.value):""),f=x(()=>({hourEnabled:be(n.value)||J(n.value),minuteEnabled:he(n.value),secondEnabled:ge(n.value)}));function m(y=!1){(y||!l.value||c(l.value,n.value).valueOf()!==c(I.value,n.value).valueOf())&&u(I.value),o(v.value)}N([t,n],()=>m(),{immediate:!0});function h(y){if(!y||!v.value)return y;const{hourEnabled:P,minuteEnabled:A,secondEnabled:k}=f.value,E=["year","month","date",!P&&"hour",!A&&"minute",!k&&"second","millisecond"].filter(Boolean);return Ee(e,v.value,y,E)}function s(y,P,A){return y?e.parse(y,P,A):void 0}function r(y){return!y||e.isValid(y)}function g(y){const P=y.target.value;u(P);const A=s(P,n.value,v.value);r(A)&&a(l.value?h(A):void 0)}function V(){u("")}function S(){d(!0)}function T(){d(!1)}function B(y){a(y)}return{inputValue:l,panelValue:p,inputFocused:i,setInputValue:u,setPanelValue:o,init:m,handleInput:g,handleInputClear:V,handleInputFocus:S,handleInputBlur:T,handlePanelChange:B}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ye(e,n){return x(()=>{var t;const a=(t=e.allowInput)!=null?t:n.allowInput;return{enableExternalInput:a===!0,enableInternalInput:a==="overlay"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function _e(e,n){return a=>{if(a.code==="Escape"){n(!1);return}if(!e.value&&!["Backspace","Tab"].includes(a.code)){a.preventDefault(),n(!0);return}a.code==="Enter"&&n(!1)}}function je(e,n,a,t){const{bufferUpdated:l,buffer:u}=e;return i=>{if(i.code==="Escape"){a(!1);return}if(!n.value&&!["Backspace","Tab"].includes(i.code)){i.preventDefault(),a(!0);return}switch(i.code){case"Enter":l.value&&t(u.value),a(!1);break}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ie(e,n){const[a,t]=Oe(e,"open",!1);return Y(()=>{e.autofocus&&n()}),{overlayOpened:a,setOverlayOpened:t}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ce(e,n,a,t){const{accessor:l,control:u}=De();we(u);const i=Ue(e,n),d=ze(e,u),[p,o]=O(!1),c=m=>{const{get:h}=a,s=J(t.value);return L(m).some(r=>{const g=h(r,"hour"),V=Fe(g,s),S=$e(g,!!s),T=h(r,"minute"),B=h(r,"second");return e.disabledHours(V).includes(S)||e.disabledMinutes(S,V).includes(T)||e.disabledSeconds(S,T,V).includes(B)})};function b(m){const h=te(m)?Ke(m):m;if(c(h))return;let s=He(l.value);s=te(s)?s.map(r=>K(a,r,t.value)):K(a,s,t.value),l.setValue(h),z(e.onChange,h,s)}function v(m){b(void 0),z(e.onClear,m)}function I(m){o(!0),z(e.onFocus,m)}function f(m){o(!1),l.markAsBlurred(),z(e.onBlur,m)}return{accessor:l,mergedSize:i,mergedStatus:d,focused:p,handleChange:b,handleClear:v,handleFocus:I,handleBlur:f}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function xe(e){const{props:n,config:a,accessor:t,mergedSize:l,mergedStatus:u,mergedPrefixCls:i,focused:d,handleBlur:p,handleFocus:o,handleClear:c,handleKeyDown:b,overlayOpened:v,setOverlayOpened:I}=e;return x(()=>{var f,m,h,s,r;return{autofocus:n.autofocus,borderless:n.borderless,value:t.value,clearable:(f=n.clearable)!=null?f:a.clearable,clearIcon:(m=n.clearIcon)!=null?m:a.clearIcon,disabled:t.disabled,focused:d.value,open:v.value,overlayContainer:(h=n.overlayContainer)!=null?h:a.overlayContainer,overlayContainerFallback:`.${i.value}-overlay-container`,overlayTabindex:(s=n.overlayTabindex)!=null?s:a.overlayTabindex,readonly:n.readonly,size:l.value,status:u.value,suffix:(r=n.suffix)!=null?r:a.suffix,suffixRotate:!1,"onUpdate:open":I,onClear:c,onFocus:o,onBlur:p,onKeydown:b}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Pe(e){return x(()=>{var l,u;const{props:n,config:a,accessor:t}=e;return{borderless:!1,clearable:(l=n.clearable)!=null?l:a.clearable,clearIcon:(u=n.clearIcon)!=null?u:a.clearIcon,disabled:t.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e,n,a,t){const l=x(()=>K(n,e.defaultOpenValue,a.value)),[u,i]=O(()=>{var d;return(d=t.value)!=null?d:l.value});return N(t,d=>{i(d!=null?d:l.value)}),{activeValue:u,setActiveValue:i}}function qe(e,n,a,t){const l=x(()=>L(e.defaultOpenValue).map(o=>K(n,o,a.value))),[u,i]=O(()=>{var o,c;return(c=(o=t.value)==null?void 0:o[0])!=null?c:l.value[0]}),[d,p]=O(()=>{var o,c;return(c=(o=t.value)==null?void 0:o[1])!=null?c:l.value[1]});return N(t,o=>{var c,b;i((c=o==null?void 0:o[0])!=null?c:l.value[0]),p((b=o==null?void 0:o[1])!=null?b:l.value[1])}),{fromActiveValue:u,toActiveValue:d,setFromActiveValue:i,setToActiveValue:p}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ke(e,n){return x(()=>{const{disabledHours:a,disabledMinutes:t,disabledSeconds:l,hideDisabledOptions:u,hourStep:i,minuteStep:d,secondStep:p}=e,o=n.value;return{disabledHours:a,disabledMinutes:t,disabledSeconds:l,hideDisabledOptions:u,hourStep:i,minuteStep:d,secondStep:p,hourEnabled:be(o),minuteEnabled:he(o),secondEnabled:ge(o),use12Hours:J(o),amPmCapital:Ne(o)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=Symbol("timePickerContext"),ee=Symbol("timeRangePickerContext");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ge=_({setup(){const e=Q(Z),{slots:n,props:a,locale:t,formatRef:l,dateConfig:u,inputRef:i,inputEnableStatus:d,mergedPrefixCls:p,overlayOpened:o,handleClear:c,handleKeyDown:b,controlContext:{inputValue:v,panelValue:I,inputFocused:f,handleInput:m,handleInputFocus:h,handleInputBlur:s,handlePanelChange:r}}=e,g=j(),V=()=>{var P;d.value.enableInternalInput&&(i.value=(P=g.value)==null?void 0:P.getInputElement())};Y(V),ue(V);const S=Pe(e),T=ke(a,l),{activeValue:B,setActiveValue:y}=Me(a,u,l,I);return()=>{var F;const P=`${p.value}-overlay`,A=`${p.value}-board`,k={...T.value,activeValue:B.value,visible:o.value,value:I.value,onChange:r,"onUpdate:activeValue":y},E=[C("div",{class:`${P}-body ${A}`},[d.value.enableInternalInput&&C(se,U({ref:g,class:`${A}-input`},S.value,{clearVisible:!!v.value,value:v.value,readonly:a.readonly,focused:f.value,placeholder:(F=a.placeholder)!=null?F:t.timePicker.placeholder,onInput:m,onClear:c,onFocus:h,onBlur:s,onKeydown:b}),n),C(le,U(k,{class:`${A}-panel`,tabindex:-1}),null)]),C(ce,{class:`${P}-footer`,footer:a.footer},n)];return a.overlayRender?a.overlayRender(E):C("div",null,[E])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=_({inheritAttrs:!1,setup(e,{expose:n}){const a=Q(Z),{accessor:t,props:l,locale:u,mergedPrefixCls:i,formatRef:d,inputRef:p,inputEnableStatus:o,controlContext:{inputValue:c,handleInput:b}}=a,v=j(),I=x(()=>{var s;return(s=l.placeholder)!=null?s:u.timePicker.placeholder}),f=x(()=>Math.max(10,d.value.length)+2),m=s=>{b(s),z(l.onInput,s)};return n({focus:()=>{var s;(s=(o.value.enableExternalInput?p:v).value)==null||s.focus()}}),()=>C("input",{ref:o.value.enableExternalInput?p:v,class:`${i.value}-input`,autocomplete:"off",disabled:t.disabled,placeholder:I.value,readonly:l.readonly||!o.value.enableExternalInput,size:f.value,value:c.value,onInput:m},null)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ve={...Be,open:{type:Boolean,default:void 0},control:{type:[String,Number,Object,Array],default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,clearText:String,disabled:{type:Boolean,default:!1},format:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayTabindex:{type:Number,default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},Qe={...Ve,value:[String,Date,Number],defaultOpenValue:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]},We={...Ve,value:Array,defaultOpenValue:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Xe=_({name:"IxTimePicker",inheritAttrs:!1,props:Qe,setup(e,{attrs:n,expose:a,slots:t}){const l=H("common"),{globalHashId:u,hashId:i,registerToken:d}=ie("timePicker");d(oe);const p=x(()=>`${l.prefixCls}-time-picker`),o=H("locale"),c=H("timePicker"),b=re(),v=j(),{elementRef:I,focus:f,blur:m}=de(),h=x(()=>{var D;return(D=e.format)!=null?D:c.format}),{overlayOpened:s,setOverlayOpened:r}=Ie(e,f),g=Ce(e,c,b,h),{accessor:V,focused:S,handleFocus:T,handleBlur:B,handleChange:y}=g,P=X(b,h,y,pe(V,"value")),A=ye(e,c),k=_e(s,r),E={props:e,slots:t,dateConfig:b,common:l,locale:o,config:c,mergedPrefixCls:p,formatRef:h,handleKeyDown:k,inputRef:I,inputEnableStatus:A,overlayOpened:s,setOverlayOpened:r,controlContext:P,...g,handleFocus:T,handleBlur:B};fe(Z,E);const F=xe(E);a({focus:f,blur:m}),N(s,D=>{var $;D?setTimeout(()=>{var R;(R=I.value)==null||R.focus()}):(P.init(!0),S.value&&(($=v.value)==null||$.focus()))});const M=()=>C(Le,U({ref:v},n),null),q=()=>C(Ge,null,null),G=x(()=>ve([`${p.value}-overlay`,u.value,i.value,e.overlayClassName]));return()=>C(me,U(F.value,{class:`${p.value} ${u.value} ${i.value}`,overlayClassName:G.value},n),{default:M,overlay:q,suffix:t.suffix,clearIcon:t.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ye(e,n,a){const[t,l]=O(L(a.value).map(f=>K(e,f,n.value))),[u,i]=O(!1),d=f=>{l(Je(e,f,n.value)),i(!0)};N([a,n],([f])=>{d(f)});const p=x(()=>L(t.value)),o=x(()=>p.value[0]),c=x(()=>p.value[1]),b=X(e,n,f=>{d([f,c.value])},o),v=X(e,n,f=>{d([o.value,f])},c);return{buffer:t,bufferUpdated:u,fromControl:b,toControl:v,init:(f=!1)=>{d(a.value),i(!1),b.init(f),v.init(f)}}}function Je(e,n,a){return L(n).map(t=>K(e,t,a))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ze=_({setup(){const e=Q(ee),{props:n,slots:a,dateConfig:t,locale:l,mergedPrefixCls:u,formatRef:i,inputRef:d,inputEnableStatus:p,overlayOpened:o,handleChange:c,handleKeyDown:b,renderSeparator:v,setOverlayOpened:I,rangeControlContext:{buffer:f,fromControl:m,toControl:h}}=e,s=j(),r=()=>{var k;p.value.enableInternalInput&&(d.value=(k=s.value)==null?void 0:k.getInputElement())};Y(r),ue(r);const g=Pe(e),V=ke(n,i),{fromActiveValue:S,toActiveValue:T,setFromActiveValue:B,setToActiveValue:y}=qe(n,t,i,x(()=>[m.panelValue.value,h.panelValue.value])),P=()=>{c(f.value),I(!1)};function A(k){var ne,ae;const{inputValue:E,inputFocused:F,panelValue:M,handleInput:q,handleInputClear:G,handleInputFocus:D,handleInputBlur:$,handlePanelChange:R}=k?m:h,w=k?0:1,Se=(ae=(ne=n.placeholder)==null?void 0:ne[w])!=null?ae:l.timeRangePicker.placeholder[w],W=`${u.value}-board`,Ae={...V.value,activeValue:k?S.value:T.value,visible:o.value,value:M.value,onChange:R,"onUpdate:activeValue":k?B:y};return C("div",{class:W},[p.value.enableInternalInput&&C(se,U({ref:k?s:void 0,class:`${W}-input`},g.value,{clearVisible:!!E.value,value:E.value,readonly:n.readonly,focused:F.value,placeholder:Se,onInput:q,onClear:G,onFocus:D,onBlur:$,onKeydown:b}),a),C(le,U(Ae,{class:`${W}-panel`,tabindex:-1}),null)])}return()=>{const k=`${u.value}-overlay`,E={[`${k}-separator`]:!0,[`${k}-separator-line`]:!p.value.enableInternalInput},F=[C("div",{class:`${k}-body`},[A(!0),C("div",{class:E},[p.value.enableInternalInput&&v()]),A(!1)]),C(ce,{class:`${k}-footer`,footer:n.footer,okText:l.timeRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:P},a)];return n.overlayRender?n.overlayRender(F):C("div",null,[F])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const en=_({inheritAttrs:!1,setup(e,{expose:n}){const a=Q(ee),{accessor:t,props:l,locale:u,mergedPrefixCls:i,inputRef:d,inputEnableStatus:p,renderSeparator:o,rangeControlContext:{fromControl:c,toControl:b}}=a,v=j(),I=x(()=>{var r,g,V,S;return[(g=(r=l.placeholder)==null?void 0:r[0])!=null?g:u.timeRangePicker.placeholder[0],(S=(V=l.placeholder)==null?void 0:V[1])!=null?S:u.timeRangePicker.placeholder[1]]});n({focus:()=>{var r;(r=(p.value.enableExternalInput?d:v).value)==null||r.focus()}});const m=r=>{c.handleInput(r),z(l.onInput,!0,r)},h=r=>{b.handleInput(r),z(l.onInput,!1,r)};function s(r,g){const{inputValue:V}=g?c:b,S=I.value[g?0:1],T=g?m:h;return C("input",{ref:g?p.value.enableExternalInput?d:v:void 0,class:`${r}-input-inner`,autocomplete:"off",disabled:t.disabled,value:V.value,placeholder:S,readonly:l.readonly||!p.value.enableExternalInput,onInput:T},null)}return()=>{const r=i.value;return C("span",{class:`${r}-input`},[s(r,!0),C("span",{class:`${r}-input-separator`},[o()]),s(r,!1)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const nn=_({name:"IxTimeRangePicker",inheritAttrs:!1,props:We,setup(e,{attrs:n,expose:a,slots:t}){const l=H("common"),{globalHashId:u,hashId:i,registerToken:d}=ie("timePicker");d(oe);const p=x(()=>`${l.prefixCls}-time-range-picker`),o=H("locale"),c=H("timePicker"),b=re(),v=j(),{elementRef:I,focus:f,blur:m}=de(),h=x(()=>{var $;return($=e.format)!=null?$:c.format}),{overlayOpened:s,setOverlayOpened:r}=Ie(e,f),g=Ce(e,c,b,h),{accessor:V,focused:S,handleFocus:T,handleBlur:B,handleChange:y}=g,P=Ye(b,h,pe(V,"value")),A=ye(e,c),k=je(P,s,r,y),F={props:e,slots:t,dateConfig:b,common:l,locale:o,config:c,mergedPrefixCls:p,formatRef:h,handleKeyDown:k,inputRef:I,inputEnableStatus:A,overlayOpened:s,setOverlayOpened:r,renderSeparator:()=>{var $,R,w;return(w=(R=($=t.separator)==null?void 0:$.call(t))!=null?R:e.separator)!=null?w:o.timeRangePicker.separator},rangeControlContext:P,...g,handleFocus:T,handleBlur:B},M=xe(F);fe(ee,F),a({focus:f,blur:m}),N(s,$=>{var R;$?setTimeout(()=>{var w;(w=I.value)==null||w.focus()}):(P.init(!0),S.value&&((R=v.value)==null||R.focus()))});const q=()=>C(en,U({ref:v},n),null),G=()=>C(Ze,null,null),D=x(()=>ve([`${p.value}-overlay`,u.value,i.value,e.overlayClassName]));return()=>C(me,U(M.value,{class:`${p.value} ${u.value} ${i.value}`,overlayClassName:D.value},n),{default:q,overlay:G,suffix:t.suffix,clearIcon:t.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ln=Xe,on=nn;export{ln as I,on as a};
