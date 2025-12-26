import{c as Q,i as He,d as we,s as fe,u as se,g as We,ɵ as Ke,f as Ye,h as Me}from"./index-468f4f15.js";import{c as g,bb as U,x as z,bg as ge,v as Ee,bW as ue,a7 as dt,aO as vt,aX as pt,aY as ft,be as G,a_ as yt,R as N,d as M,i as j,f as b,bE as Qe,q as X,aW as ye,af as ee,an as Be,aR as mt,$ as pe,as as q,at as te,a5 as oe,br as ht,C as me,D as he,aK as Ge,aw as Ve,bu as Xe,bk as bt,P as Se}from"./index-200961bb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function _e(e,t){const{getColorPalette:n}=t,{colorPrimary:r,colorPrimaryTextHover:l,colorText:a,colorTextInverse:o,colorTextDisabled:c,colorContainerBgHover:u,colorInfoContainerBg:p,marginSizeLg:s,paddingSizeSm:h,paddingSizeMd:v,paddingSizeLg:i,fontSizeSm:y,fontWeightMd:f,heightMd:I}=e,d=n(r);return{separatorMarginHorizontal:s,overlayWidth:252,overlayPadding:i,overlayFooterPadding:`${h}px ${i}px`,overlayDateInputWidth:120,overlayTimeInputWidth:96,boardWidth:220,boardMaxHeight:260,rangeBoardBorder:"none",rangeOverlayPadding:`${i}px ${i}px 0 ${i}px`,rangeOverlayFooterPadding:`${h}px 0`,rangeOverlaySeparatorWidth:32,rangeOverlaySeparatorFontSize:y,rangeShortcutsItemHeight:I,rangeShortcutsItemFontSize:y,rangeShortcutsItemPadding:`${h}px ${v}px`,panelFontSize:y,panelColor:a,panelCellWidth:28,panelCellHeight:28,panelCellWidthLg:52,panelCellHeightLg:24,panelCellColorActive:o,panelCellColorHover:l,panelCellColorDisabled:c,panelCellBgColorHover:u,panelCellBgColorActive:r,panelCellBgColorInRange:d.l50,panelCellBgColorDisabled:p,panelCellTriggerWidth:20,panelCellTriggerHeight:20,panelCellTriggerWidthLg:52,panelCellTriggerHeightLg:24,panelCellCurrentColor:r,panelCellCurrentBorderColor:d.l40,panelCellCurrentBgColor:r,panelHeaerHeight:I,panelHeaderFontSize:y,panelHeaderFontWeight:f,panelHeaderSpacing:s,panelBodyHeaderBgColor:p}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Pe=(e,t,n)=>_e(e,n);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ue={date:"yyyy-MM-dd",week:"RRRR-II",month:"yyyy-MM",quarter:"yyyy-'Q'Q",year:"yyyy",datetime:"yyyy-MM-dd HH:mm:ss"};function Je(e,t){const n=g(()=>{var h,v,i;const s=e.type;return(i=(v=e.format)!=null?v:(h=t.format)==null?void 0:h[s])!=null?i:Ue[s]}),{hourEnabled:r,hourUse12Hours:l,minuteEnabled:a,secondEnabled:o,use12Hours:c}=gt(e,n),u=g(()=>{var s;return e.type!=="datetime"?n.value:(s=e.dateFormat)!=null?s:Ue.date}),p=g(()=>{if(e.timeFormat)return e.timeFormat;const h=[r.value&&(l.value?"hh":"HH"),a.value&&"mm",o.value&&"ss"].filter(Boolean).join(":");return c.value?`${h} a`:h});return{formatRef:n,dateFormatRef:u,timeFormatRef:p,hourEnabled:r,minuteEnabled:a,secondEnabled:o,use12Hours:c}}function gt(e,t){const n=g(()=>{var r;return(r=e.timeFormat)!=null?r:t.value});return{hourEnabled:g(()=>/[hH]/.test(n.value)),hourUse12Hours:g(()=>/h/.test(n.value)),minuteEnabled:g(()=>/m/.test(n.value)),secondEnabled:g(()=>/s/.test(n.value)),use12Hours:g(()=>/[aA]/.test(n.value))}}function ze(e){return g(()=>{const t=e.value;return{yearEnabled:/[yYR]/.test(t),monthEnabled:/[MQID]/.test(t),dateEnabled:/[dDiEec]/.test(t)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Re(e,t,n,r,l){const{formatRef:a,dateFormatRef:o,timeFormatRef:c,hourEnabled:u,minuteEnabled:p,secondEnabled:s,use12Hours:h}=t,[v,i]=U(""),[y,f]=U(""),[I,d]=U(""),[x,R]=U(void 0),[F,D]=U("datePanel"),[m,k]=U(!1),[C,w]=U(!1),P=ze(a),S=ze(o);function E(V,A=!1){if(!V){i("");return}const{parse:H,format:$}=e;(A||H(v.value,a.value).valueOf()!==H($(V,a.value),a.value).valueOf())&&i($(V,a.value))}function T(V,A=!1){if(!V){f("");return}const{parse:H,format:$}=e,De=H(y.value,o.value);(A||!He(e,De,V,["year","month","date"]))&&f($(V,o.value))}function O(V,A=!1){if(!V){d("");return}const{parse:H,format:$}=e,De=H(I.value,c.value);(A||!He(e,De,V,["hour","minute","second"]))&&d($(V,c.value))}function B(V=!1){const A=Q(e,r.value,a.value);E(A,V),n.value.enableOverlayDateInput&&T(A,V),n.value.enableOverlayTimeInput&&O(A,V),R(A)}z([r,a],()=>B(),{immediate:!0}),z(n,()=>B());function _(V,A,H){return V?e.parse(V,A,H):void 0}function L(V){return!V||e.isValid(V)}let ae;(V=>{V[V.input=0]="input",V[V.timeInput=1]="timeInput",V[V.dateInput=2]="dateInput"})(ae||(ae={}));function ne(V){const{yearEnabled:A,monthEnabled:H,dateEnabled:$}=V;return[!A&&"year",!H&&"month",!$&&"date"].filter(Boolean)}function le(){return[!(u.value||h.value)&&"hour",!p.value&&"minute",!s.value&&"second","millisecond"].filter(Boolean)}function K(V,A,H){if(!V||!A)return V;let $;return H===2?$=[...ne(S.value),"hour","minute","second","millisecond"]:H===1?$=["year","month","date",...le()]:$=[...ne(P.value),...le()],we(e,A,V,$)}function re(V){const A=V.target.value,H=Q(e,r.value,a.value);i(A);let $=_(A,a.value,H);L($)&&($=K($,H,0),l($))}function Ce(V){const A=V.target.value,H=Q(e,r.value,a.value);f(A);let $=_(A,o.value,H);L($)&&($=K($,H,2),l($),D("datePanel"))}function xe(V){const A=V.target.value,H=Q(e,r.value,a.value);d(A);let $=_(A,c.value,H);L($)&&($=K($,H,1),l($),D("timePanel"))}function ke(){f("")}function Te(){d("")}function W(V){l(V)}function J(){D("datePanel"),k(!0)}function Z(){D("timePanel"),w(!0)}function ct(){k(!1)}function it(){w(!1)}return{inputValue:v,dateInputValue:y,timeInputValue:I,dateInputFocused:m,timeInputFocused:C,panelValue:x,visiblePanel:F,setVisiblePanel:D,init:B,handleInput:re,handleDateInput:Ce,handleTimeInput:xe,handleDateInputClear:ke,handleTimeInputClear:Te,handlePanelChange:W,handleDateInputFocus:J,handleTimeInputFocus:Z,handleDateInputBlur:ct,handleTimeInputBlur:it}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,t){return g(()=>{var r;const n=(r=e.allowInput)!=null?r:t.allowInput;return{allowInput:n,enableInput:n===!0,enableOverlayDateInput:n==="overlay"||e.type==="datetime",enableOverlayTimeInput:e.type==="datetime"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Pt(e,t){return n=>{if(n.code==="Escape"){t(!1);return}if(!e.value&&!["Backspace","Tab"].includes(n.code)){n.preventDefault(),t(!0);return}n.code==="Enter"&&t(!1)}}function It(e,t,n,r){const{bufferUpdated:l,buffer:a}=e;return o=>{if(o.code==="Escape"){n(!1);return}if(!t.value&&!["Backspace","Tab"].includes(o.code)){o.preventDefault(),n(!0);return}o.code==="Enter"&&(l.value&&r(a.value),n(!1))}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function et(e){const[t,n]=ge(e,"open",!1),[r,l]=U(!1);z(t,o=>{o&&l(!0)},{immediate:!0});const a=()=>{t.value||l(!1)};return Ee(()=>{e.autofocus&&n(!0)}),{overlayOpened:t,overlayVisible:r,setOverlayOpened:n,onAfterLeave:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ct(e,t,n,r,l){return g(()=>{var a;return{...Fe((a=e.timePanelOptions)!=null?a:{}),hourEnabled:t.value,minuteEnabled:n.value,secondEnabled:r.value,use12Hours:l.value}})}function xt(e,t,n,r,l){const a=c=>{var u;return(u=ue(e.timePanelOptions)?e.timePanelOptions[c?0:1]:e.timePanelOptions)!=null?u:{}};return g(()=>{const c={hourEnabled:t.value,minuteEnabled:n.value,secondEnabled:r.value,use12Hours:l.value};return[{...Fe(a(!0)),...c},{...Fe(a(!1)),...c}]})}function Fe(e){const{disabledHours:t,disabledMinutes:n,disabledSeconds:r,hideDisabledOptions:l,hourStep:a,minuteStep:o,secondStep:c}=e;return{disabledHours:t,disabledMinutes:n,disabledSeconds:r,hideDisabledOptions:l,hourStep:a,minuteStep:o,secondStep:c}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function kt(e){const{props:t,hourEnabled:n,minuteEnabled:r,secondEnabled:l,use12Hours:a,inputEnableStatus:o,controlContext:{visiblePanel:c,panelValue:u,handlePanelChange:p},overlayVisible:s,setOverlayOpened:h}=e,v=f=>{p(f),o.value.enableOverlayTimeInput||h(!1)},i=Ct(t,n,r,l,a);return g(()=>({cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,value:u.value,type:t.type,timePanelOptions:i.value,visible:s.value&&c.value,onChange:v}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tt(e,t,n,r){const{accessor:l,control:a}=dt();vt(a);const o=pt(e,t),c=ft(e,a),[u,p]=U(!1),s=g(()=>ue(l.value)?l.value.map(f=>Q(n,f,r.value)):Q(n,l.value,r.value));function h(f){const I=ue(f)?fe(n,f):f;if(G(I).some(x=>{var R;return(R=e.disabledDate)==null?void 0:R.call(e,x)}))return;const d=yt(s.value);l.setValue(I),N(e.onChange,I,d)}function v(f){N(e.onClear,f),h(void 0)}function i(f){p(!0),N(e.onFocus,f)}function y(f){p(!1),l.markAsBlurred(),N(e.onBlur,f)}return{accessor:l,convertedValue:s,mergedSize:o,mergedStatus:c,focused:u,handleChange:h,handleClear:v,handleFocus:i,handleBlur:y}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function at(e){const{props:t,config:n,accessor:r,mergedSize:l,mergedStatus:a,mergedPrefixCls:o,overlayOpened:c,onAfterLeave:u,setOverlayOpened:p,handleFocus:s,handleBlur:h,handleClear:v,handleKeyDown:i}=e;return g(()=>{var y,f,I,d,x;return{autofocus:t.autofocus,borderless:t.borderless,value:r.value,clearable:(y=t.clearable)!=null?y:n.clearable,clearIcon:(f=t.clearIcon)!=null?f:n.clearIcon,disabled:r.disabled,open:c.value,overlayContainer:(I=t.overlayContainer)!=null?I:n.overlayContainer,overlayContainerFallback:`.${o.value}-overlay-container`,overlayTabindex:(d=t.overlayTabindex)!=null?d:n.overlayTabindex,readonly:t.readonly,size:l.value,status:a.value,suffix:(x=t.suffix)!=null?x:n.suffix,suffixRotate:!1,"onUpdate:open":p,onClear:v,onFocus:s,onBlur:h,onKeydown:i,onOverlayAfterLeave:u}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=Symbol("datePickerToken"),de=Symbol("dateRangePickerToken"),nt=Symbol("datePickerPanelPropsToken"),lt=Symbol("dateRangePickerPanelPropsToken"),Tt=Symbol("dateRangePickerPanelSlotsToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Dt=M({name:"IxDatePickerOverlayFooter",setup(e,{slots:t}){const{mergedPrefixCls:n,props:r}=j(ie);return()=>b(Qe,{class:`${n.value}-overlay-footer`,footer:r.footer},t)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rt(e){return g(()=>{var l,a;const{props:t,config:n,accessor:r}=e;return{borderless:!1,clearable:(l=t.clearable)!=null?l:n.clearable,clearIcon:(a=t.clearIcon)!=null?a:n.clearIcon,disabled:r.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const St=M({name:"IxDatePickerOverlayInputs",setup(e,{slots:t}){const n=j(ie),{mergedPrefixCls:r,dateFormatRef:l,timeFormatRef:a,inputEnableStatus:o,inputRef:c,controlContext:{dateInputValue:u,timeInputValue:p,dateInputFocused:s,timeInputFocused:h,handleDateInput:v,handleTimeInput:i,handleDateInputClear:y,handleTimeInputClear:f,handleDateInputFocus:I,handleTimeInputFocus:d,handleDateInputBlur:x,handleTimeInputBlur:R},handleKeyDown:F,handleClear:D}=n,m=X();Ee(()=>{var S;o.value.allowInput==="overlay"&&(c.value=(S=m.value)==null?void 0:S.getInputElement())});const k=S=>{I(),o.value.allowInput==="overlay"&&(c.value=S.target)},C=S=>{d(),o.value.allowInput==="overlay"&&(c.value=S.target)},w=S=>{o.value.enableOverlayTimeInput||D(S),y()},P=rt(n);return()=>{if(!o.value.enableOverlayDateInput)return null;const S=`${r.value}-overlay-inputs`;return b("div",{class:S},[b(ye,ee({ref:m},P.value,{class:`${S}-date-input`,value:u.value,clearVisible:!!u.value&&!!o.value.allowInput,focused:s.value,placeholder:l.value,readonly:!o.value.allowInput,onInput:v,onFocus:k,onBlur:x,onKeydown:F,onClear:w}),t),o.value.enableOverlayTimeInput&&b(ye,ee(P.value,{class:`${S}-time-input`,value:p.value,clearVisible:!!p.value&&!!o.value.allowInput,focused:h.value,placeholder:a.value,readonly:!o.value.allowInput,onInput:i,onFocus:C,onBlur:R,onKeydown:F,onClear:f}),t)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function wt(e,t,n){const[r,l]=ge(e,"activeDate",()=>t.now()),a=g(()=>{const o=r.value,c=n.value,{startOf:u,set:p,get:s}=t;switch(c){case"date":case"week":return u(u(o,"month"),"week");case"month":return u(u(o,"year"),"month");case"quarter":return u(u(o,"year"),"quarter");case"year":return p(o,parseInt(`${s(o,"year")/10}`,10)*10-1,"year");default:return o}});return{activeDate:r,setActiveDate:l,startActiveDate:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Vt(e){const[t,n]=U(e.type);return z(()=>e.type,n),z(()=>e.visible,r=>r&&n(e.type)),{activeType:t,setActiveType:n}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Rt(e){const t=g(()=>{switch(e.value){case"date":case"week":return 6;case"month":return 4;case"quarter":return 1;case"year":return 4;default:return 0}}),n=g(()=>{switch(e.value){case"date":case"week":return 7;case"month":return 3;case"quarter":return 4;case"year":return 3;default:return 0}});return{maxRowIndex:t,maxCellIndex:n}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ve=Symbol("datePanelToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ft={cellTooltip:Function,disabledDate:Function,type:{type:String,default:"date"},value:[Date,Array],activeDate:Date,visible:{type:Boolean,default:void 0},isSelecting:{type:Boolean,default:void 0},onCellClick:[Function,Array],onCellMouseenter:[Function,Array],"onUpdate:activeDate":[Function,Array]},Ot={rowIndex:{type:Number,required:!0}},$t={rowIndex:{type:Number,required:!0},cellIndex:{type:Number,required:!0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Y(e){return e==="week"?"date":e}function At(e,t,n,r){const l=Y(t);if(l==="date")return r(e);const a={date:void 0,month:"date",quarter:"month",year:"quarter"},o=[],c=(u,p)=>{const s=a[p];if(!s)return;const[h,v]=["startOf","endOf"].map(i=>n.get(n[i](u,p),s));for(let i=h;i<=v;i++)o.push({date:n.set(u,i,s),type:s})};for(c(e,l);o.length;){const u=o.pop();if(!r(u.date))return!1;c(u.date,u.type)}return!0}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Et={date:"d",week:"d",month:"MMM",quarter:"'Q'Q",year:"yyyy"},Bt=M({props:$t,setup(e){const{props:t,slots:n,mergedPrefixCls:r,dateConfig:l,activeDate:a,setActiveDate:o,startActiveDate:c,activeType:u,setActiveType:p,maxRowIndex:s,maxCellIndex:h}=j(ve),v=g(()=>e.rowIndex*h.value+e.cellIndex),i=g(()=>l.add(c.value,v.value,Y(u.value))),y=g(()=>Le(l,t.value,u.value,!0)),f=g(()=>Le(l,t.value,u.value,!1)),I=g(()=>{const T=t.disabledDate;return T?At(i.value,u.value,l,T):!1}),d=g(()=>{var T;return(T=t.cellTooltip)==null?void 0:T.call(t,{value:i.value,disabled:!!I.value})}),x=g(()=>y.value&&l.isSame(y.value,i.value,Y(u.value))),R=g(()=>f.value&&l.isSame(f.value,i.value,Y(u.value))),F=g(()=>l.isSame(i.value,l.now(),Y(u.value))),D=g(()=>{const T=u.value;if(Y(u.value)==="date")return!l.isSame(i.value,a.value,"month");if(T==="year"){const O=v.value;return O===0||O===s.value*h.value}return!1}),m=g(()=>{if(D.value)return!1;const T=Y(u.value);return t.isSelecting?y.value&&l.isSame(y.value,i.value,T):y.value&&l.isSame(y.value,i.value,T)||f.value&&l.isSame(f.value,i.value,T)}),k=g(()=>{const T=Y(u.value),O=l.startOf(i.value,T).valueOf();return!!y.value&&!!f.value&&O>=l.startOf(y.value,T).valueOf()&&O<=l.startOf(f.value,T).valueOf()}),C=g(()=>{const T=`${r.value}-cell`;return Be({[T]:!0,[`${T}-disabled`]:I.value,[`${T}-selected`]:m.value,[`${T}-in-range`]:k.value,[`${T}-current`]:F.value,[`${T}-out-view`]:D.value,[`${T}-start`]:x.value,[`${T}-end`]:R.value})}),w=g(()=>String(!!m.value)),P=g(()=>[l.format(i.value,"d"),F.value&&"today",x.value&&"start-date",R.value&&"end-date"].filter(Boolean).join(",")),S=T=>{T.stopPropagation();const O=i.value;t.type!==u.value?(p(t.type),o(O)):N(t.onCellClick,O)},E=()=>{N(t.onCellMouseenter,i.value)};return()=>{var _,L;const T=i.value,{format:O}=l,B=(L=(_=n.cell)==null?void 0:_.call(n,{date:T}))!=null?L:b("div",{class:`${r.value}-cell-inner`},[b("div",{class:`${r.value}-cell-trigger`},[O(T,Et[u.value])])]);return b("td",{class:C.value,role:"gridcell","aria-selected":w.value,"aria-label":P.value,onClick:I.value?void 0:S,onMouseenter:I.value?void 0:E},[d.value?b(mt,{title:d.value},{default:()=>[B]}):B])}}});function Le(e,t,n,r){var a;const l=G(t);return n==="week"?r?e.startOf(l[0],"week"):e.endOf((a=l[1])!=null?a:l[0],"week"):l[r?0:1]}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ht=M({props:Ot,setup(e){const{mergedPrefixCls:t,activeType:n,maxCellIndex:r}=j(ve),l=g(()=>{const{rowIndex:a}=e,o=n.value,c=[],u=r.value;for(let p=0;p<u;p++)c.push({key:`${o}-${p}`,rowIndex:a,cellIndex:p});return c});return()=>{const a=l.value.map(o=>b(Bt,o,null));return b("tr",{role:"row",class:`${t.value}-row`},[a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Mt=M({setup(){const{mergedPrefixCls:e,dateConfig:t,activeType:n,maxRowIndex:r,maxCellIndex:l}=j(ve),a=_t(t,n,l);return()=>{const o=`${e.value}-body`,c=a.value.map(s=>{const{key:h,label:v}=s;return b("th",{role:"columnheader",key:h},[b("div",{class:`${o}-header-cell`},[v])])}),u=r.value,p=[];for(let s=0;s<u;s++)p.push(b(Ht,{key:s,rowIndex:s},null));return b("div",{class:o},[b("table",{role:"grid"},[c.length>0&&b("thead",null,[b("tr",{role:"row"},[c])]),b("tbody",null,[p])])])}}});function _t(e,t,n){return g(()=>{const r=t.value,l=[];if(r==="date"||r==="week"){const a=n.value,o=e.getLocalizedLabels("day",a,"narrow"),c=e.weekStartsOn();for(let u=0;u<a;u++)l.push({key:u,label:o[(u+c)%a]})}return l})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ne=["month","quarter","year"],Ut=M({setup(){const{locale:e,mergedPrefixCls:t,dateConfig:n,activeDate:r,setActiveDate:l,activeType:a,setActiveType:o}=j(ve),c=zt(a,r,e,n,o),u=()=>{const v=a.value==="year"?-10:-1;l(n.add(r.value,v,"year"))},p=()=>{l(n.add(r.value,-1,"month"))},s=()=>{const v=a.value==="year"?10:1;l(n.add(r.value,v,"year"))},h=()=>{l(n.add(r.value,1,"month"))};return()=>{const{previousDecade:v,previousYear:i,previousMonth:y,nextDecade:f,nextYear:I,nextMonth:d}=e.datePicker,x=a.value,R=!Ne.includes(a.value),F=!Ne.includes(a.value),D=c.value.map(k=>{const{label:C,...w}=k;return b("button",ee({type:"button",tabindex:"-1"},w),[C])}),m=`${t.value}-header`;return b("div",{class:m},[b("button",{class:`${m}-super-prev visible`,type:"button",tabindex:"-1",title:x==="year"?v:i,onClick:u},[b(pe,{name:"double-left"},null)]),b("button",{class:`${m}-prev${R?" visible":""}`,type:"button",tabindex:"-1",title:y,onClick:p},[b(pe,{name:"left"},null)]),b("div",{class:`${m}-content`},[D]),b("button",{class:`${m}-super-next${F?" visible":""}`,type:"button",tabindex:"-1",title:d,onClick:h},[b(pe,{name:"right"},null)]),b("button",{class:`${m}-super-prev visible`,type:"button",tabindex:"-1",title:x==="year"?f:I,onClick:s},[b(pe,{name:"double-right"},null)])])}}});function zt(e,t,n,r,l){const a=(o,c)=>{o.stopPropagation(),l(c)};return g(()=>{const o=e.value,c=t.value,{yearSelect:u,monthSelect:p,yearFormat:s,monthFormat:h}=n.datePicker,{format:v,get:i}=r;switch(o){case"date":case"week":return[{key:"year",title:u,onClick:y=>a(y,"year"),label:v(c,s)},{key:"month",title:p,onClick:y=>a(y,"month"),label:v(c,h)}];case"month":case"quarter":return[{key:"year",title:u,onClick:y=>a(y,"year"),label:v(c,s)}];case"year":{const y=parseInt(`${i(c,"year")/10}`,10)*10,f=y+9;return[{key:"decade",label:`${y}-${f}`}]}default:return[]}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Lt=M({name:"ɵDatePanel",props:Ft,setup(e,{slots:t}){const n=q("common"),{globalHashId:r}=te(),l=q("locale"),a=g(()=>`${n.prefixCls}-date-panel`),o=se(),{activeType:c,setActiveType:u}=Vt(e),{activeDate:p,setActiveDate:s,startActiveDate:h}=wt(e,o,c),{maxRowIndex:v,maxCellIndex:i}=Rt(c);return oe(ve,{props:e,slots:t,locale:l,mergedPrefixCls:a,dateConfig:o,activeType:c,setActiveType:u,activeDate:p,setActiveDate:s,startActiveDate:h,maxRowIndex:v,maxCellIndex:i}),()=>{const y=a.value;return b("div",{class:`${y} ${y}-${c.value} ${r.value}`},[b(Ut,null,null),b(Mt,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ot=Lt;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Nt(e,t){var l;const[n,r]=ge(t,"activeValue",(l=t.value.value)!=null?l:e.now());return z(()=>t.value.value,a=>r(a!=null?a:e.now())),{activeValue:n,setActiveValue:r}}const je={date:"month",datetime:"month",week:"month",month:"year",quarter:"year",year:"year"};function jt(e,t,n,r){var F,D;const{set:l,get:a}=e,o=e.now(),c=g(()=>je[t.value.type]),u=g(()=>t.value.type==="year"?12:1),p=g(()=>{var m;return(m=n.value)==null?void 0:m[0]}),s=g(()=>{var m;return(m=n.value)==null?void 0:m[1]}),h=(m,k)=>{if(!m||!k)return!1;const C=a(m,c.value),w=a(k,c.value);return t.value.type==="year"?C<w-u.value:(()=>{const P=a(m,"year"),S=a(k,"year");return P>S?!1:P<S||C<w})()},v=(m,k,C)=>{const w=S=>l(S,a(S,c.value)+(C==="from"?-u.value:u.value),c.value);if(!m)return C==="from"?o:w(o);if(!k)return C==="from"?m:w(m);const P=h(m,k);return C==="from"?P?m:w(k):P?k:w(m)},i=()=>{var w,P,S;if(r.value)return;const m=(P=(w=n.value)==null?void 0:w[0])!=null?P:o,k=(S=n.value)==null?void 0:S[1];[m,k].every(E=>{if(!E)return!0;const T=a(E,"year");if(je[t.value.type]==="year")return[I,d].map(B=>a(B.value,"year")).includes(T);const O=a(E,"month");return[I,d].some(B=>T===a(B.value,"year")&&O===a(B.value,"month"))})&&h(I.value,d.value)||f([m,v(m,k,"to")])},[y,f]=ge(t,"activeValue",[(F=p.value)!=null?F:o,v((D=p.value)!=null?D:o,s.value,"to")]),I=g(()=>y.value[0]),d=g(()=>y.value[1]);return z([n,()=>t.value.visible,()=>t.value.type],i),{fromActiveValue:I,toActiveValue:d,setFromActiveValue:m=>{f([m,v(m,d.value,"to")])},setToActiveValue:m=>{f([v(I.value,m,"from"),m])}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ut={control:{type:[String,Number,Object,Array],default:void 0},cellTooltip:Function,open:{type:Boolean,default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,disabled:{type:Boolean,default:!1},disabledDate:Function,format:String,dateFormat:String,timeFormat:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayTabindex:{type:Number,default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,type:{type:String,default:"date"},"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},qt={...ut,value:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,timePanelOptions:Object,onChange:[Function,Array],onInput:[Function,Array],"onUpdate:value":[Function,Array]},Wt={...ut,value:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],shortcuts:[Array,Object],timePanelOptions:[Object,Array],onChange:[Function,Array],onInput:[Function,Array],onSelect:[Function,Array],"onUpdate:value":[Function,Array]},Kt={activeValue:Date,cellTooltip:Function,disabledDate:Function,value:Date,type:{type:String,default:void 0},timePanelOptions:{type:Object,default:void 0},visible:{type:[String,Boolean],default:void 0},onChange:[Function,Array],"onUpdate:activeValue":[Function,Array]},Yt={activeValue:Array,cellTooltip:Function,disabledDate:Function,value:Array,type:{type:String,default:void 0},timePanelOptions:{type:Array,default:void 0},visible:{type:[String,Boolean],default:void 0},onChange:[Function,Array],onSelect:[Function,Array],"onUpdate:activeValue":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ie(e){return e==="datetime"?"date":e}const ce=24*60*60*1e3;function Qt(e,t){const{now:n,startOf:r,endOf:l}=e;switch(t){case"today":default:return()=>{const a=n();return[r(a,"date"),l(a,"date")]};case"yesterday":return()=>{const a=n(),o=new Date(a.valueOf()-ce);return[r(o,"date"),l(o,"date")]};case"last24h":return()=>{const a=n(),o=l(a,"hour");return[new Date(o.valueOf()-ce),o]};case"last7d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*7),o]};case"last30d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*30),o]};case"last180d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*180),o]}}}function Oe(e){const t=e.value;if(t)return ht(t)?t():t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const st=M({name:"IxDatePanel",props:Kt,setup(e,{slots:t}){const n=j(nt,null),r=q("common"),{globalHashId:l,hashId:a,registerToken:o}=te("datePicker"),{registerToken:c}=te("timePicker");o(Pe),c(We);const u=g(()=>`${r.prefixCls}-date-picker-panel`),p=se(),s=g(()=>{var x;if(!n)return e;const d={};return Object.keys(e).forEach(R=>{var F;d[R]=(F=e[R])!=null?F:n.value[R]}),d.type=(x=d.type)!=null?x:"date",d}),{activeValue:h,setActiveValue:v}=Nt(p,s);function i(d){N(s.value.onChange,d)}function y(d){i(s.value.value?we(p,s.value.value,d,["hour","minute","second","millisecond"]):d)}function f(d){i(s.value.value?we(p,s.value.value,d,["year","month","date"]):d)}const I=d=>{y(d)};return()=>{const d=s.value,x=Ie(d.type),R={cellTooltip:d.cellTooltip,disabledDate:d.disabledDate,type:x,value:d.value,visible:d.type==="datetime"?d.visible==="datePanel":!!d.visible,activeDate:h.value,onCellClick:I,"onUpdate:activeDate":v},F={...d.timePanelOptions,activeValue:h.value,value:d.value,visible:d.type==="datetime"?d.visible==="timePanel":!1,onChange:f,"onUpdate:activeValue":v};return b("div",{class:[u.value,l.value,a.value]},[me(b(ot,R,t),[[he,d.visible!=="timePanel"]]),d.type==="datetime"&&me(b(Ke,F,null),[[he,d.visible==="timePanel"]])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Gt=M({setup(e,{slots:t}){const n=j(ie),{props:r,mergedPrefixCls:l}=n;return()=>{if(t.overlay)return t.overlay();const a=[b(St,null,t),b(st,null,t),b(Dt,null,t)];return r.overlayRender?r.overlayRender(a):b("div",{class:`${l.value}-overlay-content`},[a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Xt=M({inheritAttrs:!1,setup(e,{expose:t,slots:n}){const r=j(ie),{accessor:l,props:a,locale:o,controlContext:{inputValue:c,handleInput:u},mergedPrefixCls:p,formatRef:s,inputEnableStatus:h,inputRef:v}=r,i=X(),y=g(()=>{var x;return(x=a.placeholder)!=null?x:o.datePicker[`${a.type}Placeholder`]}),f=g(()=>Math.max(10,s.value.length)+2);t({focus:()=>{var x;(x=(h.value.allowInput==="overlay"?i:v).value)==null||x.focus()}});const d=x=>{u(x),N(a.onInput,x)};return()=>{var x,R;return b("div",{class:`${p.value}-input`},[(R=(x=n.triggerContent)==null?void 0:x.call(n,{inputValue:c.value,placeholder:y.value,readonly:a.readonly||h.value.enableInput===!1,disabled:l.disabled,handleInput:d}))!=null?R:b("input",{ref:h.value.allowInput==="overlay"?i:v,class:`${p.value}-input-inner`,autocomplete:"off",disabled:l.disabled,placeholder:y.value,readonly:a.readonly||h.value.enableInput===!1,size:f.value,value:c.value,onInput:d},null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Jt=M({name:"IxDatePicker",inheritAttrs:!1,props:qt,setup(e,{attrs:t,expose:n,slots:r}){const l=q("common"),a=q("locale"),{globalHashId:o,hashId:c,registerToken:u}=te("datePicker");u(Pe);const p=g(()=>`${l.prefixCls}-date-picker`),s=q("datePicker"),h=se(),v=X(),{elementRef:i,focus:y,blur:f}=Ge();n({focus:y,blur:f});const{overlayOpened:I,overlayVisible:d,onAfterLeave:x,setOverlayOpened:R}=et(e),F=Ze(e,s),D=Je(e,s),m=tt(e,s,h,D.formatRef),{accessor:k,focused:C,handleFocus:w,handleBlur:P,handleChange:S}=m,E=Re(h,D,F,Ve(k,"value"),S),T=Pt(I,R),O={props:e,slots:r,common:l,locale:a,config:s,mergedPrefixCls:p,dateConfig:h,inputRef:i,inputEnableStatus:F,overlayOpened:I,overlayVisible:d,onAfterLeave:x,setOverlayOpened:R,handleKeyDown:T,controlContext:E,...D,...m,handleFocus:w,handleBlur:P},B=at(O),_=kt(O);oe(ie,O),oe(nt,_),z(I,le=>{var K;le?setTimeout(()=>{var re;(re=i.value)==null||re.focus()}):(E.init(!0),C.value&&((K=v.value)==null||K.focus()))});const L=()=>b(Xt,{ref:v},r),ae=()=>b(Gt,null,r),ne=g(()=>Be([`${p.value}-overlay`,o.value,c.value,e.overlayClassName]));return()=>b(Xe,ee(B.value,{class:`${p.value} ${o.value} ${c.value}`,overlayClassName:ne.value},t),{default:L,overlay:ae,suffix:r.suffix,clearIcon:r.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Zt(e,t,n,r,l){const{formatRef:a,hourEnabled:o,secondEnabled:c,minuteEnabled:u}=t,p=g(()=>G(r.value).map(P=>Q(e,P,a.value))),[s,h]=U(p.value),[v,i]=U(!1),y=P=>{h(fe(e,ea(e,P,a.value),"date")),i(!0)},[f,I]=U("datePanel"),d=P=>{f.value!==P&&I(P),k.visiblePanel.value!==P&&k.setVisiblePanel(P),C.visiblePanel.value!==P&&C.setVisiblePanel(P)},x=g(()=>G(s.value)),R=g(()=>x.value[0]),F=g(()=>x.value[1]);z([r,a],([P])=>{y(P)});const D=(P,S)=>{var E,T,O,B;return S?Me(e,P,(E=s.value)==null?void 0:E[1],"date")>0?[P,P]:[P,(T=s.value)==null?void 0:T[1]]:Me(e,P,(O=s.value)==null?void 0:O[0],"date")<0?[P,P]:[(B=s.value)==null?void 0:B[0],P]},m=(P,S)=>{const E=c.value?"second":u.value?"minute":o.value?"hour":Ie(l.value);return Ye(e,D(P,S),p.value,E)},k=Re(e,t,n,R,P=>{h(m(P,!0)),i(!0)}),C=Re(e,t,n,F,P=>{h(m(P,!1)),i(!0)});return z(k.visiblePanel,d),z(C.visiblePanel,d),{buffer:s,bufferUpdated:v,visiblePanel:f,setVisiblePanel:d,fromControl:k,toControl:C,init:(P=!1)=>{y(r.value),i(!1),k.init(P),C.init(P)},handlePanelChange:y}}function ea(e,t,n){return G(t).map(r=>Q(e,r,n))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ta(e){const{props:t,hourEnabled:n,minuteEnabled:r,secondEnabled:l,use12Hours:a,rangeControlContext:{buffer:o,visiblePanel:c,handlePanelChange:u},overlayVisible:p}=e,s=xt(t,n,r,l,a);return g(()=>({value:o.value,cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,type:t.type,timePanelOptions:s.value,visible:p.value&&c.value,onChange:u,onSelect:t.onSelect}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $e=M({name:"IxDateRangePickerFooter",setup(e,{slots:t}){const{locale:n,mergedPrefixCls:r,props:l,rangeControlContext:{buffer:a,bufferUpdated:o},handleChange:c,setOverlayOpened:u}=j(de),p=()=>{o.value&&c(a.value),u(!1)};return()=>b(Qe,{class:`${r.value}-overlay-footer`,footer:l.footer,okText:n.dateRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:p},t)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ae=M({name:"IxDateRangePickerOverlayInputs",setup(e,{slots:t}){const n=j(de),{dateFormatRef:r,timeFormatRef:l,rangeControlContext:{fromControl:a,toControl:o},mergedPrefixCls:c,inputEnableStatus:u,inputRef:p,handleKeyDown:s,renderSeparator:h}=n,v=X();Ee(()=>{var f;u.value.allowInput==="overlay"&&(p.value=(f=v.value)==null?void 0:f.getInputElement())});const i=rt(n),y=(f,I)=>{const{enableOverlayTimeInput:d}=u.value,{dateInputValue:x,timeInputValue:R,dateInputFocused:F,timeInputFocused:D,handleDateInput:m,handleTimeInput:k,handleDateInputClear:C,handleTimeInputClear:w,handleDateInputFocus:P,handleTimeInputFocus:S,handleDateInputBlur:E,handleTimeInputBlur:T}=I?a:o,O=_=>{P(),u.value.allowInput==="overlay"&&(p.value=_.target)},B=_=>{S(),u.value.allowInput==="overlay"&&(p.value=_.target)};return b("div",{class:`${f}-side`},[b(ye,ee({ref:I?v:void 0},i.value,{class:`${f}-date-input`,value:x.value,clearVisible:!!x.value&&!!u.value.allowInput,focused:F.value,placeholder:r.value,readonly:!u.value.allowInput,onInput:m,onFocus:O,onBlur:E,onKeydown:s,onClear:C}),t),d&&b(ye,ee(i.value,{class:`${f}-time-input`,value:R.value,clearVisible:!!R.value&&!!u.value.allowInput,focused:D.value,placeholder:l.value,readonly:!u.value.allowInput,onInput:k,onFocus:B,onBlur:T,onKeydown:s,onClear:w}),t)])};return()=>{const f=`${c.value}-overlay`,I=`${f}-inputs`;return u.value.enableOverlayDateInput?b("div",{class:I},[y(I,!0),b("div",{class:`${f}-separator`},[h()]),y(I,!1)]):null}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function aa(e,t){const[n,r]=U(e.value.value),[l,a]=U(!1);z(()=>e.value.visible,s=>{a(!1),s||N(e.value.onSelect,e.value.value)});const o=g(()=>l.value?fe(t,[...G(n.value)],"date"):G(e.value.value)),c=s=>{N(e.value.onChange,s),N(e.value.onSelect,s)};return{panelValue:o,isSelecting:l,handleChange:c,handleDatePanelCellClick:s=>{if(!l.value)a(!0),r([s,void 0]),N(e.value.onSelect,[s,void 0]);else{const h=G(e.value.value),v=fe(t,[n.value[0],s],"date");c(Ye(t,v,h,Ie(e.value.type))),a(!1)}},handleDatePanelCellMouseenter:s=>{var h;l.value&&r([(h=n.value)==null?void 0:h[0],s])}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const be=M({name:"IxDateRangePanel",props:Yt,setup(e,{slots:t}){const n=j(lt,null),r=q("common"),{globalHashId:l,hashId:a,registerToken:o}=te("datePicker"),{registerToken:c}=te("timePicker");o(Pe),c(We);const u=g(()=>`${r.prefixCls}-date-range-picker-panel`),p=se(),s=g(()=>{var m;if(!n)return e;const D={};return Object.keys(e).forEach(k=>{var C;D[k]=(C=e[k])!=null?C:n.value[k]}),D.type=(m=D.type)!=null?m:"date",D}),{handleChange:h,handleDatePanelCellClick:v,handleDatePanelCellMouseenter:i,panelValue:y,isSelecting:f}=aa(s,p),{fromActiveValue:I,toActiveValue:d,setFromActiveValue:x,setToActiveValue:R}=jt(p,s,y,f),F=D=>{var T,O;const m=s.value,k=(T=y.value)==null?void 0:T[D?0:1],C=Ie(m.type),w=D?I.value:d.value,P=B=>{var _,L;h(D?[B,(_=y.value)==null?void 0:_[1]]:[(L=y.value)==null?void 0:L[0],B])},S={cellTooltip:m.cellTooltip,disabledDate:m.disabledDate,type:C,value:y.value,visible:m.type==="datetime"?m.visible==="datePanel":!!m.visible,activeDate:w,onCellClick:v,onCellMouseenter:i,"onUpdate:activeDate":D?x:R},E={...(O=ue(m.timePanelOptions)?m.timePanelOptions[D?0:1]:m.timePanelOptions)!=null?O:{},activeValue:k!=null?k:w,value:k,visible:m.type==="datetime"?m.visible==="timePanel":!1,onChange:P,"onUpdate:activeValue":D?x:R};return b("div",{class:`${u.value}-side`},[me(b(ot,S,t),[[he,m.visible!=="timePanel"]]),m.type==="datetime"&&me(b(Ke,E,null),[[he,m.visible==="timePanel"]])])};return()=>{var m,k;const D=u.value;return b("div",{class:[D,l.value,a.value]},[F(!0),(k=(m=t.separator)==null?void 0:m.call(t))!=null?k:b("div",{class:`${D}-separator`},null),F(!1)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const qe=e=>[Se(Ae,null,e.slots),Se(be),Se($e,null,e.slots)];function na(e,t,n,r=qe){const l=se(),{dateRangePicker:a}=q("locale"),[o,c]=U(void 0),u=g(()=>{var v;return ue(e.value)?!1:!!((v=e.value)!=null&&v.showPanel)}),p=g(()=>{var y;if(!e.value)return[];let v=[],i=!1;return ue(e.value)?(v=e.value,i=!1):(v=e.value.shortcuts,i=(y=e.value.showPanel)!=null?y:i),v.map(f=>{var d;if(bt(f))return la(l,f,a,i,r);const I=(d=f.panelRenderer)!=null?d:i&&f.value?qe:void 0;return{...f,confirmOnSelect:I?f.confirmOnSelect:!0,panelRenderer:I}}).filter(Boolean)}),s=g(()=>p.value.find(v=>v.key==="custom")),h=()=>{var i;const v=t.value;if(v)return(i=p.value.find(y=>y.value&&(v==null?void 0:v.every((f,I)=>{var d;return y&&((d=Oe(y))==null?void 0:d[I].valueOf())===(f==null?void 0:f.valueOf())}))))!=null?i:s.value};return z(t,()=>{const v=h();(v!=null&&v.value||o.value)&&c(v)},{flush:"pre",immediate:!0}),z(n,v=>{var y;if(v)return;const i=h();((y=o.value)==null?void 0:y.key)!==(i==null?void 0:i.key)&&c(i)},{flush:"pre"}),{shortcuts:p,selectedShortcut:o,showShortcutPanel:u,setSelectedShortcut:c}}function la(e,t,n,r,l){if(t==="custom")return{key:"custom",label:n.shortcuts.custom,panelRenderer:l};const a=Qt(e,t);if(a)return{key:t,value:a,label:n.shortcuts[t],confirmOnSelect:!r,selectedLabel:n.shortcuts[t],panelRenderer:r?l:void 0}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ra=M({props:{prefixCls:String,selectedShortcut:[String,Number,Symbol],shortcuts:Array,onChange:Function},setup(e){return()=>{var r;const t=`${e.prefixCls}-shortcuts`,n=(l,a)=>{var o,c;(o=a.onClick)==null||o.call(a,l),(c=e.onChange)==null||c.call(e,a)};return b("ul",{class:t},[(r=e.shortcuts)==null?void 0:r.map(l=>b("li",{key:l.key,class:[`${t}-item`,e.selectedShortcut===l.key?`${t}-item-selected`:void 0],onClick:a=>n(a,l)},[b("span",{class:`${t}-item-label`},[l.label])]))])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oa=M({setup(e,{slots:t}){const n=j(de),{props:r,mergedPrefixCls:l,shortcuts:a,selectedShortcut:o,showShortcutPanel:c,setSelectedShortcut:u,rangeControlContext:{buffer:p,bufferUpdated:s,handlePanelChange:h},handleChange:v,setOverlayOpened:i}=n,y=d=>{u(d),d.value&&(d.confirmOnSelect?(v(Oe(d)),i(!1)):h(Oe(d)))},f=()=>{s.value&&v(p.value),i(!1)},I=()=>{i(!1)};return()=>{var F,D,m;if(t.overlay)return t.overlay();let d;const x=g(()=>{const k=`${l.value}-overlay-content`;return{[k]:!0,[`${k}-with-shortcuts`]:!!a.value.length}}),R={slots:t,setBuffer:h,setValue:v,ok:f,cancel:I};return a.value.length?d=[b(ra,{class:{[`${l.value}-shortcuts-with-panel`]:c.value||!!((F=o.value)!=null&&F.panelRenderer)},prefixCls:l.value,shortcuts:a.value,selectedShortcut:(D=o.value)==null?void 0:D.key,onChange:y},null),(m=o.value)!=null&&m.panelRenderer?b("div",{class:`${l.value}-shortcuts-panel`},[o.value.panelRenderer(R)]):c.value?b("div",{class:`${l.value}-shortcuts-panel`},[b(Ae,null,t),b(be,null,null),b($e,null,t)]):void 0]:d=[b(Ae,null,t),b(be,null,null),b($e,null,t)],r.overlayRender?r.overlayRender(d):b("div",{class:x.value},[d])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ua=M({inheritAttrs:!1,setup(e,{expose:t,slots:n}){const r=j(de),{accessor:l,props:a,locale:o,rangeControlContext:{fromControl:c,toControl:u},mergedPrefixCls:p,formatRef:s,inputRef:h,inputEnableStatus:v,selectedShortcut:i,renderSeparator:y}=r,f=X(),I=X(),d=X(),x=g(()=>{var C,w,P,S;return[(w=(C=a.placeholder)==null?void 0:C[0])!=null?w:o.dateRangePicker[`${a.type}Placeholder`][0],(S=(P=a.placeholder)==null?void 0:P[1])!=null?S:o.dateRangePicker[`${a.type}Placeholder`][1]]}),R=g(()=>Math.max(10,s.value.length)+2),F=C=>{c.handleInput(C),N(a.onInput,!0,C)},D=C=>{u.handleInput(C),N(a.onInput,!1,C)};t({focus:()=>{var w;const C=(v.value.allowInput==="overlay"?f:h).value;C?C.focus():(w=d.value)==null||w.focus()}}),z(()=>{var C;return(C=i.value)==null?void 0:C.selectedLabel},C=>{var w;C&&(document.activeElement===f.value||document.activeElement===I.value||document.activeElement===h.value)&&((w=d.value)==null||w.focus())});const k=C=>{const w=p.value,{inputValue:P}=C?c:u,S=x.value[C?0:1],E=C?F:D;return b("input",{ref:C?v.value.allowInput==="overlay"?f:h:I,class:`${w}-input-inner`,autocomplete:"off",disabled:l.disabled,placeholder:S,readonly:a.readonly||v.value.enableInput===!1,size:R.value,value:P.value,onInput:E},null)};return()=>{var C,w,P,S;return b("div",{ref:d,class:`${p.value}-input`,tabindex:-1},[(S=(P=(C=n.triggerContent)==null?void 0:C.call(n,{selectedShortcut:i.value,inputValue:[c.inputValue.value,u.inputValue.value],placeholder:x.value,readonly:a.readonly||v.value.enableInput===!1,disabled:l.disabled,handleFromInput:F,handleToInput:D}))!=null?P:(w=i.value)==null?void 0:w.selectedLabel)!=null?S:[k(!0),b("span",{class:`${p.value}-input-separator`},[y()]),k(!1)]])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const sa=M({name:"IxDateRangePicker",inheritAttrs:!1,props:Wt,setup(e,{attrs:t,expose:n,slots:r}){const l=q("common"),a=q("locale"),{globalHashId:o,hashId:c,registerToken:u}=te("datePicker");u(Pe);const p=g(()=>`${l.prefixCls}-date-range-picker`),s=q("datePicker"),h=se(),v=X(),{elementRef:i,focus:y,blur:f}=Ge();n({focus:y,blur:f});const{overlayOpened:I,overlayVisible:d,onAfterLeave:x,setOverlayOpened:R}=et(e),F=Ze(e,s),D=Je(e,s),m=tt(e,s,h,D.formatRef),{accessor:k,convertedValue:C,focused:w,handleFocus:P,handleBlur:S,handleChange:E}=m,T=Zt(h,D,F,Ve(k,"value"),Ve(e,"type")),O=na(g(()=>e.shortcuts),C,I),B=It(T,I,R,E),L={props:e,slots:r,common:l,locale:a,config:s,mergedPrefixCls:p,dateConfig:h,inputRef:i,inputEnableStatus:F,overlayOpened:I,overlayVisible:d,onAfterLeave:x,setOverlayOpened:R,rangeControlContext:T,renderSeparator:()=>{var W,J,Z;return(Z=(J=(W=r.separator)==null?void 0:W.call(r))!=null?J:e.separator)!=null?Z:a.dateRangePicker.separator},handleKeyDown:B,...D,...m,...O,handleFocus:P,handleBlur:S},{shortcuts:ae,selectedShortcut:ne,showShortcutPanel:le}=O,K=at(L),re=ta(L),Ce={cell:r.cell,separator:F.value.enableOverlayDateInput?()=>b("div",{class:`${p.value}-overlay-separator`},null):void 0};oe(de,L),oe(lt,re),oe(Tt,Ce),z(I,W=>{var J;W?setTimeout(()=>{var Z;w.value||(Z=i.value)==null||Z.focus()}):(T.init(!0),w.value&&((J=v.value)==null||J.focus()))});const xe=()=>b(ua,{ref:v},r),ke=()=>b(oa,null,r),Te=g(()=>Be([`${p.value}-overlay`,o.value,c.value,e.overlayClassName]));return()=>{var W;return b(Xe,ee(K.value,{class:`${p.value} ${o.value} ${c.value}`,overlayClassName:Te.value,overlayMatchWidth:!!ae.value.length&&!le.value&&!((W=ne.value)!=null&&W.panelRenderer)},t),{default:xe,overlay:ke,suffix:r.suffix,clearIcon:r.clearIcon})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const da=Jt,va=st,pa=sa,fa=be;export{da as I,Ae as _,pa as a,fa as b,$e as c,Pe as d,va as e,Oe as f,Qt as g,na as u,ra as ɵ};
