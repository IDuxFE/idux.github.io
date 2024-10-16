import{c as Te,a as Ee,n as Fe,e as $e,ɵ as le,f as Be,g as oe,u as re}from"./index-3aaad17b.js";import{ar as O,av as Re,z as Oe,ad as we,ah as De,ai as ze,m as U,au as L,ag as ue,aN as se,T as H,U as ce,aa as ie,aF as de}from"./index-b2ce1350.js";import{c as x,f as Ue,w as K,n as X,k as te,t as He,m as j,z as J,r as M,af as pe,v as C,a7 as z,a6 as fe,E as ve,q as me}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function N(e,n,a){if(n)return e.convert(n,a)}function Ne(e){return e.sort((n,a)=>n?a?n.valueOf()-a.valueOf():0:1)}function he(e){return/[hH]/.test(e)}function be(e){return/m/.test(e)}function ge(e){return/s/.test(e)}function Y(e){return/[aA]/.test(e)}function Ke(e){return/A/.test(e)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function W(e,n,a,t){const[l,u]=O(void 0),[i,d]=O(!1),[p,o]=O(void 0),{parse:c,format:h}=e,v=x(()=>Te(e,t.value,n.value)),I=x(()=>Ue(t.value)?t.value:v.value?h(v.value,n.value):""),f=x(()=>({hourEnabled:he(n.value)||Y(n.value),minuteEnabled:be(n.value),secondEnabled:ge(n.value)}));function m(y=!1){(y||!l.value||c(l.value,n.value).valueOf()!==c(I.value,n.value).valueOf())&&u(I.value),o(v.value)}K([t,n],()=>m(),{immediate:!0});function b(y){if(!y||!v.value)return y;const{hourEnabled:P,minuteEnabled:A,secondEnabled:k}=f.value,E=["year","month","date",!P&&"hour",!A&&"minute",!k&&"second","millisecond"].filter(Boolean);return Ee(e,v.value,y,E)}function s(y,P,A){return y?e.parse(y,P,A):void 0}function r(y){return!y||e.isValid(y)}function g(y){const P=y.target.value;u(P);const A=s(P,n.value,v.value);r(A)&&a(l.value?b(A):void 0)}function V(){u("")}function S(){d(!0)}function T(){d(!1)}function B(y){a(y)}return{inputValue:l,panelValue:p,inputFocused:i,setInputValue:u,setPanelValue:o,init:m,handleInput:g,handleInputClear:V,handleInputFocus:S,handleInputBlur:T,handlePanelChange:B}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ye(e,n){return x(()=>{var t;const a=(t=e.allowInput)!=null?t:n.allowInput;return{enableExternalInput:a===!0,enableInternalInput:a==="overlay"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function je(e,n){return a=>{if(a.code==="Escape"){n(!1);return}if(!e.value&&!["Backspace","Tab"].includes(a.code)){a.preventDefault(),n(!0);return}a.code==="Enter"&&n(!1)}}function Me(e,n,a,t){const{bufferUpdated:l,buffer:u}=e;return i=>{if(i.code==="Escape"){a(!1);return}if(!n.value&&!["Backspace","Tab"].includes(i.code)){i.preventDefault(),a(!0);return}switch(i.code){case"Enter":l.value&&t(u.value),a(!1);break}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ie(e,n){const[a,t]=Re(e,"open",!1);return X(()=>{e.autofocus&&n()}),{overlayOpened:a,setOverlayOpened:t}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ce(e,n,a,t){const{accessor:l,control:u}=Oe();we(u);const i=De(e,n),d=ze(e,u),[p,o]=O(!1),c=m=>{const{get:b}=a,s=Y(t.value);return L(m).some(r=>{const g=b(r,"hour"),V=Fe(g,s),S=$e(g,!!s),T=b(r,"minute"),B=b(r,"second");return e.disabledHours(V).includes(S)||e.disabledMinutes(S,V).includes(T)||e.disabledSeconds(S,T,V).includes(B)})};function h(m){const b=te(m)?Ne(m):m;if(c(b))return;let s=He(l.value);s=te(s)?s.map(r=>N(a,r,t.value)):N(a,s,t.value),l.setValue(b),U(e.onChange,b,s)}function v(m){h(void 0),U(e.onClear,m)}function I(m){o(!0),U(e.onFocus,m)}function f(m){o(!1),l.markAsBlurred(),U(e.onBlur,m)}return{accessor:l,mergedSize:i,mergedStatus:d,focused:p,handleChange:h,handleClear:v,handleFocus:I,handleBlur:f}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function xe(e){const{props:n,config:a,accessor:t,mergedSize:l,mergedStatus:u,mergedPrefixCls:i,focused:d,handleBlur:p,handleFocus:o,handleClear:c,handleKeyDown:h,overlayOpened:v,setOverlayOpened:I}=e;return x(()=>{var f,m,b,s,r;return{autofocus:n.autofocus,borderless:n.borderless,value:t.value,clearable:(f=n.clearable)!=null?f:a.clearable,clearIcon:(m=n.clearIcon)!=null?m:a.clearIcon,disabled:t.disabled,focused:d.value,open:v.value,overlayContainer:(b=n.overlayContainer)!=null?b:a.overlayContainer,overlayContainerFallback:`.${i.value}-overlay-container`,overlayTabindex:(s=n.overlayTabindex)!=null?s:a.overlayTabindex,readonly:n.readonly,size:l.value,status:u.value,suffix:(r=n.suffix)!=null?r:a.suffix,suffixRotate:!1,"onUpdate:open":I,onClear:c,onFocus:o,onBlur:p,onKeydown:h}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Pe(e){return x(()=>{var l,u;const{props:n,config:a,accessor:t}=e;return{borderless:!1,clearable:(l=n.clearable)!=null?l:a.clearable,clearIcon:(u=n.clearIcon)!=null?u:a.clearIcon,disabled:t.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function _e(e,n,a,t){const l=x(()=>N(n,e.defaultOpenValue,a.value)),[u,i]=O(()=>{var d;return(d=t.value)!=null?d:l.value});return K(t,d=>{i(d!=null?d:l.value)}),{activeValue:u,setActiveValue:i}}function qe(e,n,a,t){const l=x(()=>L(e.defaultOpenValue).map(o=>N(n,o,a.value))),[u,i]=O(()=>{var o,c;return(c=(o=t.value)==null?void 0:o[0])!=null?c:l.value[0]}),[d,p]=O(()=>{var o,c;return(c=(o=t.value)==null?void 0:o[1])!=null?c:l.value[1]});return K(t,o=>{var c,h;i((c=o==null?void 0:o[0])!=null?c:l.value[0]),p((h=o==null?void 0:o[1])!=null?h:l.value[1])}),{fromActiveValue:u,toActiveValue:d,setFromActiveValue:i,setToActiveValue:p}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ke(e,n){return x(()=>{const{disabledHours:a,disabledMinutes:t,disabledSeconds:l,hideDisabledOptions:u,hourStep:i,minuteStep:d,secondStep:p}=e,o=n.value;return{disabledHours:a,disabledMinutes:t,disabledSeconds:l,hideDisabledOptions:u,hourStep:i,minuteStep:d,secondStep:p,hourEnabled:he(o),minuteEnabled:be(o),secondEnabled:ge(o),use12Hours:Y(o),amPmCapital:Ke(o)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=Symbol("timePickerContext"),ee=Symbol("timeRangePickerContext");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ge=j({setup(){const e=J(Z),{slots:n,props:a,locale:t,formatRef:l,dateConfig:u,inputRef:i,inputEnableStatus:d,mergedPrefixCls:p,overlayOpened:o,handleClear:c,handleKeyDown:h,controlContext:{inputValue:v,panelValue:I,inputFocused:f,handleInput:m,handleInputFocus:b,handleInputBlur:s,handlePanelChange:r}}=e,g=M(),V=()=>{var P;d.value.enableInternalInput&&(i.value=(P=g.value)==null?void 0:P.getInputElement())};X(V),pe(V);const S=Pe(e),T=ke(a,l),{activeValue:B,setActiveValue:y}=_e(a,u,l,I);return()=>{var F;const P=`${p.value}-overlay`,A=`${p.value}-board`,k={...T.value,activeValue:B.value,visible:o.value,value:I.value,onChange:r,"onUpdate:activeValue":y},E=[C("div",{class:`${P}-body ${A}`},[d.value.enableInternalInput&&C(ue,z({ref:g,class:`${A}-input`},S.value,{clearVisible:!!v.value,value:v.value,readonly:a.readonly,focused:f.value,placeholder:(F=a.placeholder)!=null?F:t.timePicker.placeholder,onInput:m,onClear:c,onFocus:b,onBlur:s,onKeydown:h}),n),C(le,z(k,{class:`${A}-panel`,tabindex:-1}),null)]),C(se,{class:`${P}-footer`,footer:a.footer},n)];return a.overlayRender?a.overlayRender(E):C("div",null,[E])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=j({inheritAttrs:!1,setup(e,{expose:n}){const a=J(Z),{accessor:t,props:l,locale:u,mergedPrefixCls:i,formatRef:d,inputRef:p,inputEnableStatus:o,controlContext:{inputValue:c,handleInput:h}}=a,v=M(),I=x(()=>{var s;return(s=l.placeholder)!=null?s:u.timePicker.placeholder}),f=x(()=>Math.max(10,d.value.length)+2),m=s=>{h(s),U(l.onInput,s)};return n({focus:()=>{var s;(s=(o.value.enableExternalInput?p:v).value)==null||s.focus()}}),()=>C("input",{ref:o.value.enableExternalInput?p:v,class:`${i.value}-input`,autocomplete:"off",disabled:t.disabled,placeholder:I.value,readonly:l.readonly||!o.value.enableExternalInput,size:f.value,value:c.value,onInput:m},null)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ve={...Be,open:{type:Boolean,default:void 0},control:{type:[String,Number,Object,Array],default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,clearText:String,disabled:{type:Boolean,default:!1},format:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayTabindex:{type:Number,default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},Je={...Ve,value:[String,Date,Number],defaultOpenValue:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]},Qe={...Ve,value:Array,defaultOpenValue:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],"onUpdate:value":[Function,Array],onChange:[Function,Array],onInput:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const We=j({name:"IxTimePicker",inheritAttrs:!1,props:Je,setup(e,{attrs:n,expose:a,slots:t}){const l=H("common"),{globalHashId:u,hashId:i,registerToken:d}=ce("timePicker");d(oe);const p=x(()=>`${l.prefixCls}-time-picker`),o=H("locale"),c=H("timePicker"),h=re(),v=M(),{elementRef:I,focus:f,blur:m}=ie(),b=x(()=>{var w;return(w=e.format)!=null?w:c.format}),{overlayOpened:s,setOverlayOpened:r}=Ie(e,f),g=Ce(e,c,h,b),{accessor:V,focused:S,handleFocus:T,handleBlur:B,handleChange:y}=g,P=W(h,b,y,fe(V,"value")),A=ye(e,c),k=je(s,r),E={props:e,slots:t,dateConfig:h,common:l,locale:o,config:c,mergedPrefixCls:p,formatRef:b,handleKeyDown:k,inputRef:I,inputEnableStatus:A,overlayOpened:s,setOverlayOpened:r,controlContext:P,...g,handleFocus:T,handleBlur:B};ve(Z,E);const F=xe(E);a({focus:f,blur:m}),K(s,w=>{var $;w?setTimeout(()=>{var R;(R=I.value)==null||R.focus()}):(P.init(!0),S.value&&(($=v.value)==null||$.focus()))});const _=()=>C(Le,z({ref:v},n),null),q=()=>C(Ge,null,null),G=x(()=>me([`${p.value}-overlay`,u.value,i.value,e.overlayClassName]));return()=>C(de,z(F.value,{class:`${p.value} ${u.value} ${i.value}`,overlayClassName:G.value},n),{default:_,overlay:q,suffix:t.suffix,clearIcon:t.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Xe(e,n,a){const[t,l]=O(L(a.value).map(f=>N(e,f,n.value))),[u,i]=O(!1),d=f=>{l(Ye(e,f,n.value)),i(!0)};K([a,n],([f])=>{d(f)});const p=x(()=>L(t.value)),o=x(()=>p.value[0]),c=x(()=>p.value[1]),h=W(e,n,f=>{d([f,c.value])},o),v=W(e,n,f=>{d([o.value,f])},c);return{buffer:t,bufferUpdated:u,fromControl:h,toControl:v,init:(f=!1)=>{d(a.value),i(!1),h.init(f),v.init(f)}}}function Ye(e,n,a){return L(n).map(t=>N(e,t,a))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ze=j({setup(){const e=J(ee),{props:n,slots:a,dateConfig:t,locale:l,mergedPrefixCls:u,formatRef:i,inputRef:d,inputEnableStatus:p,overlayOpened:o,handleChange:c,handleKeyDown:h,renderSeparator:v,setOverlayOpened:I,rangeControlContext:{buffer:f,fromControl:m,toControl:b}}=e,s=M(),r=()=>{var k;p.value.enableInternalInput&&(d.value=(k=s.value)==null?void 0:k.getInputElement())};X(r),pe(r);const g=Pe(e),V=ke(n,i),{fromActiveValue:S,toActiveValue:T,setFromActiveValue:B,setToActiveValue:y}=qe(n,t,i,x(()=>[m.panelValue.value,b.panelValue.value])),P=()=>{c(f.value),I(!1)};function A(k){var ne,ae;const{inputValue:E,inputFocused:F,panelValue:_,handleInput:q,handleInputClear:G,handleInputFocus:w,handleInputBlur:$,handlePanelChange:R}=k?m:b,D=k?0:1,Se=(ae=(ne=n.placeholder)==null?void 0:ne[D])!=null?ae:l.timeRangePicker.placeholder[D],Q=`${u.value}-board`,Ae={...V.value,activeValue:k?S.value:T.value,visible:o.value,value:_.value,onChange:R,"onUpdate:activeValue":k?B:y};return C("div",{class:Q},[p.value.enableInternalInput&&C(ue,z({ref:k?s:void 0,class:`${Q}-input`},g.value,{clearVisible:!!E.value,value:E.value,readonly:n.readonly,focused:F.value,placeholder:Se,onInput:q,onClear:G,onFocus:w,onBlur:$,onKeydown:h}),a),C(le,z(Ae,{class:`${Q}-panel`,tabindex:-1}),null)])}return()=>{const k=`${u.value}-overlay`,E={[`${k}-separator`]:!0,[`${k}-separator-line`]:!p.value.enableInternalInput},F=[C("div",{class:`${k}-body`},[A(!0),C("div",{class:E},[p.value.enableInternalInput&&v()]),A(!1)]),C(se,{class:`${k}-footer`,footer:n.footer,okText:l.timeRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:P},a)];return n.overlayRender?n.overlayRender(F):C("div",null,[F])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const en=j({inheritAttrs:!1,setup(e,{expose:n}){const a=J(ee),{accessor:t,props:l,locale:u,mergedPrefixCls:i,inputRef:d,inputEnableStatus:p,renderSeparator:o,rangeControlContext:{fromControl:c,toControl:h}}=a,v=M(),I=x(()=>{var r,g,V,S;return[(g=(r=l.placeholder)==null?void 0:r[0])!=null?g:u.timeRangePicker.placeholder[0],(S=(V=l.placeholder)==null?void 0:V[1])!=null?S:u.timeRangePicker.placeholder[1]]});n({focus:()=>{var r;(r=(p.value.enableExternalInput?d:v).value)==null||r.focus()}});const m=r=>{c.handleInput(r),U(l.onInput,!0,r)},b=r=>{h.handleInput(r),U(l.onInput,!1,r)};function s(r,g){const{inputValue:V}=g?c:h,S=I.value[g?0:1],T=g?m:b;return C("input",{ref:g?p.value.enableExternalInput?d:v:void 0,class:`${r}-input-inner`,autocomplete:"off",disabled:t.disabled,value:V.value,placeholder:S,readonly:l.readonly||!p.value.enableExternalInput,onInput:T},null)}return()=>{const r=i.value;return C("span",{class:`${r}-input`},[s(r,!0),C("span",{class:`${r}-input-separator`},[o()]),s(r,!1)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const nn=j({name:"IxTimeRangePicker",inheritAttrs:!1,props:Qe,setup(e,{attrs:n,expose:a,slots:t}){const l=H("common"),{globalHashId:u,hashId:i,registerToken:d}=ce("timePicker");d(oe);const p=x(()=>`${l.prefixCls}-time-range-picker`),o=H("locale"),c=H("timePicker"),h=re(),v=M(),{elementRef:I,focus:f,blur:m}=ie(),b=x(()=>{var $;return($=e.format)!=null?$:c.format}),{overlayOpened:s,setOverlayOpened:r}=Ie(e,f),g=Ce(e,c,h,b),{accessor:V,focused:S,handleFocus:T,handleBlur:B,handleChange:y}=g,P=Xe(h,b,fe(V,"value")),A=ye(e,c),k=Me(P,s,r,y),F={props:e,slots:t,dateConfig:h,common:l,locale:o,config:c,mergedPrefixCls:p,formatRef:b,handleKeyDown:k,inputRef:I,inputEnableStatus:A,overlayOpened:s,setOverlayOpened:r,renderSeparator:()=>{var $,R,D;return(D=(R=($=t.separator)==null?void 0:$.call(t))!=null?R:e.separator)!=null?D:o.timeRangePicker.separator},rangeControlContext:P,...g,handleFocus:T,handleBlur:B},_=xe(F);ve(ee,F),a({focus:f,blur:m}),K(s,$=>{var R;$?setTimeout(()=>{var D;(D=I.value)==null||D.focus()}):(P.init(!0),S.value&&((R=v.value)==null||R.focus()))});const q=()=>C(en,z({ref:v},n),null),G=()=>C(Ze,null,null),w=x(()=>me([`${p.value}-overlay`,u.value,i.value,e.overlayClassName]));return()=>C(de,z(_.value,{class:`${p.value} ${u.value} ${i.value}`,overlayClassName:w.value},n),{default:q,overlay:G,suffix:t.suffix,clearIcon:t.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const on=We,rn=nn;export{on as I,rn as a};
