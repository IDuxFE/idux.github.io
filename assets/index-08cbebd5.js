import{c as Q,i as He,d as we,f as fe,u as se,g as Ke,ɵ as We,h as Ye,j as Me}from"./index-323ce5f9.js";import{c as P,bb as _,x as U,bg as ge,v as Ee,bT as ue,a7 as dt,aO as vt,aX as pt,aY as ft,be as G,a_ as yt,R as z,d as M,i as N,f as b,bD as Qe,q as X,aW as ye,af as ee,an as Be,aR as mt,$ as pe,as as q,at as te,a4 as oe,br as ht,C as me,D as he,aK as Ge,aw as Ve,bu as Xe,bk as bt,Q as Se}from"./index-2f15ff81.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function _e(e,t){const{getColorPalette:n}=t,{colorPrimary:r,colorPrimaryTextHover:l,colorText:a,colorTextInverse:o,colorTextDisabled:c,colorContainerBgHover:u,colorInfoContainerBg:p,marginSizeLg:s,paddingSizeSm:m,paddingSizeMd:v,paddingSizeLg:i,fontSizeSm:y,fontWeightMd:f,heightMd:C}=e,d=n(r);return{separatorMarginHorizontal:s,overlayWidth:252,overlayPadding:i,overlayFooterPadding:`${m}px ${i}px`,overlayDateInputWidth:120,overlayTimeInputWidth:96,boardWidth:220,boardMaxHeight:260,rangeBoardBorder:"none",rangeOverlayPadding:`${i}px ${i}px 0 ${i}px`,rangeOverlayFooterPadding:`${m}px 0`,rangeOverlaySeparatorWidth:32,rangeOverlaySeparatorFontSize:y,rangeShortcutsItemHeight:C,rangeShortcutsItemFontSize:y,rangeShortcutsItemPadding:`${m}px ${v}px`,panelFontSize:y,panelColor:a,panelCellWidth:28,panelCellHeight:28,panelCellWidthLg:52,panelCellHeightLg:24,panelCellColorActive:o,panelCellColorHover:l,panelCellColorDisabled:c,panelCellBgColorHover:u,panelCellBgColorActive:r,panelCellBgColorInRange:d.l50,panelCellBgColorDisabled:p,panelCellTriggerWidth:20,panelCellTriggerHeight:20,panelCellTriggerWidthLg:52,panelCellTriggerHeightLg:24,panelCellCurrentColor:r,panelCellCurrentBorderColor:d.l40,panelCellCurrentBgColor:r,panelHeaerHeight:C,panelHeaderFontSize:y,panelHeaderFontWeight:f,panelHeaderSpacing:s,panelBodyHeaderBgColor:p}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Pe=(e,t,n)=>_e(e,n);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ue={date:"yyyy-MM-dd",week:"RRRR-II",month:"yyyy-MM",quarter:"yyyy-'Q'Q",year:"yyyy",datetime:"yyyy-MM-dd HH:mm:ss"};function Je(e,t){const n=P(()=>{var m,v,i;const s=e.type;return(i=(v=e.format)!=null?v:(m=t.format)==null?void 0:m[s])!=null?i:Ue[s]}),{hourEnabled:r,hourUse12Hours:l,minuteEnabled:a,secondEnabled:o,use12Hours:c}=gt(e,n),u=P(()=>{var s;return e.type!=="datetime"?n.value:(s=e.dateFormat)!=null?s:Ue.date}),p=P(()=>{if(e.timeFormat)return e.timeFormat;const m=[r.value&&(l.value?"hh":"HH"),a.value&&"mm",o.value&&"ss"].filter(Boolean).join(":");return c.value?`${m} a`:m});return{formatRef:n,dateFormatRef:u,timeFormatRef:p,hourEnabled:r,minuteEnabled:a,secondEnabled:o,use12Hours:c}}function gt(e,t){const n=P(()=>{var r;return(r=e.timeFormat)!=null?r:t.value});return{hourEnabled:P(()=>/[hH]/.test(n.value)),hourUse12Hours:P(()=>/h/.test(n.value)),minuteEnabled:P(()=>/m/.test(n.value)),secondEnabled:P(()=>/s/.test(n.value)),use12Hours:P(()=>/[aA]/.test(n.value))}}function ze(e){return P(()=>{const t=e.value;return{yearEnabled:/[yYR]/.test(t),monthEnabled:/[MQID]/.test(t),dateEnabled:/[dDiEec]/.test(t)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Re(e,t,n,r,l){const{formatRef:a,dateFormatRef:o,timeFormatRef:c,hourEnabled:u,minuteEnabled:p,secondEnabled:s,use12Hours:m}=t,[v,i]=_(""),[y,f]=_(""),[C,d]=_(""),[T,V]=_(void 0),[R,D]=_("datePanel"),[h,k]=_(!1),[x,S]=_(!1),I=ze(a),g=ze(o);function F(w,$=!1){if(!w){i("");return}const{parse:E,format:O}=e;($||E(v.value,a.value).valueOf()!==E(O(w,a.value),a.value).valueOf())&&i(O(w,a.value))}function B(w,$=!1){if(!w){f("");return}const{parse:E,format:O}=e,De=E(y.value,o.value);($||!He(e,De,w,["year","month","date"]))&&f(O(w,o.value))}function H(w,$=!1){if(!w){d("");return}const{parse:E,format:O}=e,De=E(C.value,c.value);($||!He(e,De,w,["hour","minute","second"]))&&d(O(w,c.value))}function A(w=!1){const $=Q(e,r.value,a.value);F($,w),n.value.enableOverlayDateInput&&B($,w),n.value.enableOverlayTimeInput&&H($,w),V($)}U([r,a],()=>A(),{immediate:!0}),U(n,()=>A());function L(w,$,E){return w?e.parse(w,$,E):void 0}function j(w){return!w||e.isValid(w)}let ae;(w=>{w[w.input=0]="input",w[w.timeInput=1]="timeInput",w[w.dateInput=2]="dateInput"})(ae||(ae={}));function ne(w){const{yearEnabled:$,monthEnabled:E,dateEnabled:O}=w;return[!$&&"year",!E&&"month",!O&&"date"].filter(Boolean)}function le(){return[!(u.value||m.value)&&"hour",!p.value&&"minute",!s.value&&"second","millisecond"].filter(Boolean)}function W(w,$,E){if(!w||!$)return w;let O;return E===2?O=[...ne(g.value),"hour","minute","second","millisecond"]:E===1?O=["year","month","date",...le()]:O=[...ne(I.value),...le()],we(e,$,w,O)}function re(w){const $=w.target.value,E=Q(e,r.value,a.value);i($);let O=L($,a.value,E);j(O)&&(O=W(O,E,0),l(O))}function Ce(w){const $=w.target.value,E=Q(e,r.value,a.value);f($);let O=L($,o.value,E);j(O)&&(O=W(O,E,2),l(O),D("datePanel"))}function xe(w){const $=w.target.value,E=Q(e,r.value,a.value);d($);let O=L($,c.value,E);j(O)&&(O=W(O,E,1),l(O),D("timePanel"))}function ke(){f("")}function Te(){d("")}function K(w){l(w)}function J(){D("datePanel"),k(!0)}function Z(){D("timePanel"),S(!0)}function ct(){k(!1)}function it(){S(!1)}return{inputValue:v,dateInputValue:y,timeInputValue:C,dateInputFocused:h,timeInputFocused:x,panelValue:T,visiblePanel:R,setVisiblePanel:D,init:A,handleInput:re,handleDateInput:Ce,handleTimeInput:xe,handleDateInputClear:ke,handleTimeInputClear:Te,handlePanelChange:K,handleDateInputFocus:J,handleTimeInputFocus:Z,handleDateInputBlur:ct,handleTimeInputBlur:it}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ze(e,t){return P(()=>{var r;const n=(r=e.allowInput)!=null?r:t.allowInput;return{allowInput:n,enableInput:n===!0,enableOverlayDateInput:n==="overlay"||e.type==="datetime",enableOverlayTimeInput:e.type==="datetime"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Pt(e,t){return n=>{if(n.code==="Escape"){t(!1);return}if(!e.value&&!["Backspace","Tab"].includes(n.code)){n.preventDefault(),t(!0);return}n.code==="Enter"&&t(!1)}}function It(e,t,n,r){const{bufferUpdated:l,buffer:a}=e;return o=>{if(o.code==="Escape"){n(!1);return}if(!t.value&&!["Backspace","Tab"].includes(o.code)){o.preventDefault(),n(!0);return}o.code==="Enter"&&(l.value&&r(a.value),n(!1))}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function et(e){const[t,n]=ge(e,"open",!1),[r,l]=_(!1);U(t,o=>{o&&l(!0)},{immediate:!0});const a=()=>{t.value||l(!1)};return Ee(()=>{e.autofocus&&n(!0)}),{overlayOpened:t,overlayVisible:r,setOverlayOpened:n,onAfterLeave:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ct(e,t,n,r,l){return P(()=>{var a;return{...Fe((a=e.timePanelOptions)!=null?a:{}),hourEnabled:t.value,minuteEnabled:n.value,secondEnabled:r.value,use12Hours:l.value}})}function xt(e,t,n,r,l){const a=c=>{var u;return(u=ue(e.timePanelOptions)?e.timePanelOptions[c?0:1]:e.timePanelOptions)!=null?u:{}};return P(()=>{const c={hourEnabled:t.value,minuteEnabled:n.value,secondEnabled:r.value,use12Hours:l.value};return[{...Fe(a(!0)),...c},{...Fe(a(!1)),...c}]})}function Fe(e){const{disabledHours:t,disabledMinutes:n,disabledSeconds:r,hideDisabledOptions:l,hourStep:a,minuteStep:o,secondStep:c}=e;return{disabledHours:t,disabledMinutes:n,disabledSeconds:r,hideDisabledOptions:l,hourStep:a,minuteStep:o,secondStep:c}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function kt(e){const{props:t,hourEnabled:n,minuteEnabled:r,secondEnabled:l,use12Hours:a,inputEnableStatus:o,controlContext:{visiblePanel:c,panelValue:u,handlePanelChange:p},overlayVisible:s,setOverlayOpened:m}=e,v=f=>{p(f),o.value.enableOverlayTimeInput||m(!1)},i=Ct(t,n,r,l,a);return P(()=>({cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,value:u.value,type:t.type,timePanelOptions:i.value,visible:s.value&&c.value,onChange:v}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function tt(e,t,n,r){const{accessor:l,control:a}=dt();vt(a);const o=pt(e,t),c=ft(e,a),[u,p]=_(!1),s=P(()=>ue(l.value)?l.value.map(f=>Q(n,f,r.value)):Q(n,l.value,r.value));function m(f){const C=ue(f)?fe(n,f):f;if(G(C).some(T=>{var V;return(V=e.disabledDate)==null?void 0:V.call(e,T)}))return;const d=yt(s.value);l.setValue(C),z(e.onChange,C,d)}function v(f){z(e.onClear,f),m(void 0)}function i(f){p(!0),z(e.onFocus,f)}function y(f){p(!1),l.markAsBlurred(),z(e.onBlur,f)}return{accessor:l,convertedValue:s,mergedSize:o,mergedStatus:c,focused:u,handleChange:m,handleClear:v,handleFocus:i,handleBlur:y}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function at(e){const{props:t,config:n,accessor:r,mergedSize:l,mergedStatus:a,mergedPrefixCls:o,overlayOpened:c,onAfterLeave:u,setOverlayOpened:p,handleFocus:s,handleBlur:m,handleClear:v,handleKeyDown:i}=e;return P(()=>{var y,f,C,d,T;return{autofocus:t.autofocus,borderless:t.borderless,value:r.value,clearable:(y=t.clearable)!=null?y:n.clearable,clearIcon:(f=t.clearIcon)!=null?f:n.clearIcon,disabled:r.disabled,open:c.value,overlayContainer:(C=t.overlayContainer)!=null?C:n.overlayContainer,overlayContainerFallback:`.${o.value}-overlay-container`,overlayTabindex:(d=t.overlayTabindex)!=null?d:n.overlayTabindex,readonly:t.readonly,size:l.value,status:a.value,suffix:(T=t.suffix)!=null?T:n.suffix,suffixRotate:!1,"onUpdate:open":p,onClear:v,onFocus:s,onBlur:m,onKeydown:i,onOverlayAfterLeave:u}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=Symbol("datePickerToken"),de=Symbol("dateRangePickerToken"),nt=Symbol("datePickerPanelPropsToken"),lt=Symbol("dateRangePickerPanelPropsToken"),Tt=Symbol("dateRangePickerPanelSlotsToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Dt=M({name:"IxDatePickerOverlayFooter",setup(e,{slots:t}){const{mergedPrefixCls:n,props:r}=N(ie);return()=>b(Qe,{class:`${n.value}-overlay-footer`,footer:r.footer},t)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function rt(e){return P(()=>{var l,a;const{props:t,config:n,accessor:r}=e;return{borderless:!1,clearable:(l=t.clearable)!=null?l:n.clearable,clearIcon:(a=t.clearIcon)!=null?a:n.clearIcon,disabled:r.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const St=M({name:"IxDatePickerOverlayInputs",setup(e,{slots:t}){const n=N(ie),{mergedPrefixCls:r,dateFormatRef:l,timeFormatRef:a,inputEnableStatus:o,inputRef:c,controlContext:{dateInputValue:u,timeInputValue:p,dateInputFocused:s,timeInputFocused:m,handleDateInput:v,handleTimeInput:i,handleDateInputClear:y,handleTimeInputClear:f,handleDateInputFocus:C,handleTimeInputFocus:d,handleDateInputBlur:T,handleTimeInputBlur:V},handleKeyDown:R,handleClear:D}=n,h=X();Ee(()=>{var g;o.value.allowInput==="overlay"&&(c.value=(g=h.value)==null?void 0:g.getInputElement())});const k=g=>{C(),o.value.allowInput==="overlay"&&(c.value=g.target)},x=g=>{d(),o.value.allowInput==="overlay"&&(c.value=g.target)},S=g=>{o.value.enableOverlayTimeInput||D(g),y()},I=rt(n);return()=>{if(!o.value.enableOverlayDateInput)return null;const g=`${r.value}-overlay-inputs`;return b("div",{class:g},[b(ye,ee({ref:h},I.value,{class:`${g}-date-input`,value:u.value,clearVisible:!!u.value&&!!o.value.allowInput,focused:s.value,placeholder:l.value,readonly:!o.value.allowInput,onInput:v,onFocus:k,onBlur:T,onKeydown:R,onClear:S}),t),o.value.enableOverlayTimeInput&&b(ye,ee(I.value,{class:`${g}-time-input`,value:p.value,clearVisible:!!p.value&&!!o.value.allowInput,focused:m.value,placeholder:a.value,readonly:!o.value.allowInput,onInput:i,onFocus:x,onBlur:V,onKeydown:R,onClear:f}),t)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function wt(e,t,n){const[r,l]=ge(e,"activeDate",()=>t.now()),a=P(()=>{const o=r.value,c=n.value,{startOf:u,set:p,get:s}=t;switch(c){case"date":case"week":return u(u(o,"month"),"week");case"month":return u(u(o,"year"),"month");case"quarter":return u(u(o,"year"),"quarter");case"year":return p(o,parseInt(`${s(o,"year")/10}`,10)*10-1,"year");default:return o}});return{activeDate:r,setActiveDate:l,startActiveDate:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Vt(e){const[t,n]=_(e.type);return U(()=>e.type,n),U(()=>e.visible,r=>r&&n(e.type)),{activeType:t,setActiveType:n}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Rt(e){const t=P(()=>{switch(e.value){case"date":case"week":return 6;case"month":return 4;case"quarter":return 1;case"year":return 4;default:return 0}}),n=P(()=>{switch(e.value){case"date":case"week":return 7;case"month":return 3;case"quarter":return 4;case"year":return 3;default:return 0}});return{maxRowIndex:t,maxCellIndex:n}}/**
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
 */function Y(e){return e==="week"?"date":e}function At(e,t,n,r){const l=Y(t);if(l==="date")return r(e);const a={date:void 0,month:"date",quarter:"month",year:"quarter"},o=[],c=(u,p)=>{const s=a[p];if(!s)return;const[m,v]=["startOf","endOf"].map(i=>n.get(n[i](u,p),s));for(let i=m;i<=v;i++)o.push({date:n.set(u,i,s),type:s})};for(c(e,l);o.length;){const u=o.pop();if(!r(u.date))return!1;c(u.date,u.type)}return!0}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Et={date:"d",week:"d",month:"MMM",quarter:"'Q'Q",year:"yyyy"},Bt=M({props:$t,setup(e){const{props:t,slots:n,mergedPrefixCls:r,dateConfig:l,activeDate:a,setActiveDate:o,startActiveDate:c,activeType:u,setActiveType:p,maxRowIndex:s,maxCellIndex:m}=N(ve),v=P(()=>e.rowIndex*m.value+e.cellIndex),i=P(()=>l.add(c.value,v.value,Y(u.value))),y=P(()=>Ne(l,t.value,u.value,!0)),f=P(()=>Ne(l,t.value,u.value,!1)),C=P(()=>{const g=t.disabledDate;return g?At(i.value,u.value,l,g):!1}),d=P(()=>{var g;return(g=t.cellTooltip)==null?void 0:g.call(t,{value:i.value,disabled:!!C.value})}),T=P(()=>y.value&&l.isSame(y.value,i.value,Y(u.value))),V=P(()=>f.value&&l.isSame(f.value,i.value,Y(u.value))),R=P(()=>l.isSame(i.value,l.now(),Y(u.value))),D=P(()=>{const g=u.value;if(Y(u.value)==="date")return!l.isSame(i.value,a.value,"month");if(g==="year"){const F=v.value;return F===0||F===s.value*m.value}return!1}),h=P(()=>{if(D.value)return!1;const g=Y(u.value);return t.isSelecting?y.value&&l.isSame(y.value,i.value,g):y.value&&l.isSame(y.value,i.value,g)||f.value&&l.isSame(f.value,i.value,g)}),k=P(()=>{const g=Y(u.value),F=l.startOf(i.value,g).valueOf();return!!y.value&&!!f.value&&F>=l.startOf(y.value,g).valueOf()&&F<=l.startOf(f.value,g).valueOf()}),x=P(()=>{const g=`${r.value}-cell`;return Be({[g]:!0,[`${g}-disabled`]:C.value,[`${g}-selected`]:h.value,[`${g}-in-range`]:k.value,[`${g}-current`]:R.value,[`${g}-out-view`]:D.value,[`${g}-start`]:T.value,[`${g}-end`]:V.value})}),S=g=>{g.stopPropagation();const F=i.value;t.type!==u.value?(p(t.type),o(F)):z(t.onCellClick,F)},I=()=>{z(t.onCellMouseenter,i.value)};return()=>{var H,A;const g=i.value,{format:F}=l,B=(A=(H=n.cell)==null?void 0:H.call(n,{date:g}))!=null?A:b("div",{class:`${r.value}-cell-inner`},[b("div",{class:`${r.value}-cell-trigger`},[F(g,Et[u.value])])]);return b("td",{class:x.value,role:"gridcell",onClick:C.value?void 0:S,onMouseenter:C.value?void 0:I},[d.value?b(mt,{title:d.value},{default:()=>[B]}):B])}}});function Ne(e,t,n,r){var a;const l=G(t);return n==="week"?r?e.startOf(l[0],"week"):e.endOf((a=l[1])!=null?a:l[0],"week"):l[r?0:1]}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ht=M({props:Ot,setup(e){const{mergedPrefixCls:t,activeType:n,maxCellIndex:r}=N(ve),l=P(()=>{const{rowIndex:a}=e,o=n.value,c=[],u=r.value;for(let p=0;p<u;p++)c.push({key:`${o}-${p}`,rowIndex:a,cellIndex:p});return c});return()=>{const a=l.value.map(o=>b(Bt,o,null));return b("tr",{role:"row",class:`${t.value}-row`},[a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Mt=M({setup(){const{mergedPrefixCls:e,dateConfig:t,activeType:n,maxRowIndex:r,maxCellIndex:l}=N(ve),a=_t(t,n,l);return()=>{const o=`${e.value}-body`,c=a.value.map(s=>{const{key:m,label:v}=s;return b("th",{role:"columnheader",key:m},[b("div",{class:`${o}-header-cell`},[v])])}),u=r.value,p=[];for(let s=0;s<u;s++)p.push(b(Ht,{key:s,rowIndex:s},null));return b("div",{class:o},[b("table",{role:"grid"},[c.length>0&&b("thead",null,[b("tr",{role:"row"},[c])]),b("tbody",null,[p])])])}}});function _t(e,t,n){return P(()=>{const r=t.value,l=[];if(r==="date"||r==="week"){const a=n.value,o=e.getLocalizedLabels("day",a,"narrow"),c=e.weekStartsOn();for(let u=0;u<a;u++)l.push({key:u,label:o[(u+c)%a]})}return l})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=["month","quarter","year"],Ut=M({setup(){const{locale:e,mergedPrefixCls:t,dateConfig:n,activeDate:r,setActiveDate:l,activeType:a,setActiveType:o}=N(ve),c=zt(a,r,e,n,o),u=()=>{const v=a.value==="year"?-10:-1;l(n.add(r.value,v,"year"))},p=()=>{l(n.add(r.value,-1,"month"))},s=()=>{const v=a.value==="year"?10:1;l(n.add(r.value,v,"year"))},m=()=>{l(n.add(r.value,1,"month"))};return()=>{const{previousDecade:v,previousYear:i,previousMonth:y,nextDecade:f,nextYear:C,nextMonth:d}=e.datePicker,T=a.value,V=!Le.includes(a.value),R=!Le.includes(a.value),D=c.value.map(k=>{const{label:x,...S}=k;return b("button",ee({type:"button",tabindex:"-1"},S),[x])}),h=`${t.value}-header`;return b("div",{class:h},[b("button",{class:`${h}-super-prev visible`,type:"button",tabindex:"-1",title:T==="year"?v:i,onClick:u},[b(pe,{name:"double-left"},null)]),b("button",{class:`${h}-prev${V?" visible":""}`,type:"button",tabindex:"-1",title:y,onClick:p},[b(pe,{name:"left"},null)]),b("div",{class:`${h}-content`},[D]),b("button",{class:`${h}-super-next${R?" visible":""}`,type:"button",tabindex:"-1",title:d,onClick:m},[b(pe,{name:"right"},null)]),b("button",{class:`${h}-super-prev visible`,type:"button",tabindex:"-1",title:T==="year"?f:C,onClick:s},[b(pe,{name:"double-right"},null)])])}}});function zt(e,t,n,r,l){const a=(o,c)=>{o.stopPropagation(),l(c)};return P(()=>{const o=e.value,c=t.value,{yearSelect:u,monthSelect:p,yearFormat:s,monthFormat:m}=n.datePicker,{format:v,get:i}=r;switch(o){case"date":case"week":return[{key:"year",title:u,onClick:y=>a(y,"year"),label:v(c,s)},{key:"month",title:p,onClick:y=>a(y,"month"),label:v(c,m)}];case"month":case"quarter":return[{key:"year",title:u,onClick:y=>a(y,"year"),label:v(c,s)}];case"year":{const y=parseInt(`${i(c,"year")/10}`,10)*10,f=y+9;return[{key:"decade",label:`${y}-${f}`}]}default:return[]}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Nt=M({name:"ɵDatePanel",props:Ft,setup(e,{slots:t}){const n=q("common"),{globalHashId:r}=te(),l=q("locale"),a=P(()=>`${n.prefixCls}-date-panel`),o=se(),{activeType:c,setActiveType:u}=Vt(e),{activeDate:p,setActiveDate:s,startActiveDate:m}=wt(e,o,c),{maxRowIndex:v,maxCellIndex:i}=Rt(c);return oe(ve,{props:e,slots:t,locale:l,mergedPrefixCls:a,dateConfig:o,activeType:c,setActiveType:u,activeDate:p,setActiveDate:s,startActiveDate:m,maxRowIndex:v,maxCellIndex:i}),()=>{const y=a.value;return b("div",{class:`${y} ${y}-${c.value} ${r.value}`},[b(Ut,null,null),b(Mt,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ot=Nt;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Lt(e,t){var l;const[n,r]=ge(t,"activeValue",(l=t.value.value)!=null?l:e.now());return U(()=>t.value.value,a=>r(a!=null?a:e.now())),{activeValue:n,setActiveValue:r}}const je={date:"month",datetime:"month",week:"month",month:"year",quarter:"year",year:"year"};function jt(e,t,n,r){var R,D;const{set:l,get:a}=e,o=e.now(),c=P(()=>je[t.value.type]),u=P(()=>t.value.type==="year"?12:1),p=P(()=>{var h;return(h=n.value)==null?void 0:h[0]}),s=P(()=>{var h;return(h=n.value)==null?void 0:h[1]}),m=(h,k)=>{if(!h||!k)return!1;const x=a(h,c.value),S=a(k,c.value);return t.value.type==="year"?x<S-u.value:(()=>{const I=a(h,"year"),g=a(k,"year");return I>g?!1:I<g||x<S})()},v=(h,k,x)=>{const S=g=>l(g,a(g,c.value)+(x==="from"?-u.value:u.value),c.value);if(!h)return x==="from"?o:S(o);if(!k)return x==="from"?h:S(h);const I=m(h,k);return x==="from"?I?h:S(k):I?k:S(h)},i=()=>{var S,I,g;if(r.value)return;const h=(I=(S=n.value)==null?void 0:S[0])!=null?I:o,k=(g=n.value)==null?void 0:g[1];[h,k].every(F=>{if(!F)return!0;const B=a(F,"year");if(je[t.value.type]==="year")return[C,d].map(A=>a(A.value,"year")).includes(B);const H=a(F,"month");return[C,d].some(A=>B===a(A.value,"year")&&H===a(A.value,"month"))})&&m(C.value,d.value)||f([h,v(h,k,"to")])},[y,f]=ge(t,"activeValue",[(R=p.value)!=null?R:o,v((D=p.value)!=null?D:o,s.value,"to")]),C=P(()=>y.value[0]),d=P(()=>y.value[1]);return U([n,()=>t.value.visible,()=>t.value.type],i),{fromActiveValue:C,toActiveValue:d,setFromActiveValue:h=>{f([h,v(h,d.value,"to")])},setToActiveValue:h=>{f([v(C.value,h,"from"),h])}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ut={control:{type:[String,Number,Object,Array],default:void 0},cellTooltip:Function,open:{type:Boolean,default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,disabled:{type:Boolean,default:!1},disabledDate:Function,format:String,dateFormat:String,timeFormat:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayTabindex:{type:Number,default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,type:{type:String,default:"date"},"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},qt={...ut,value:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,timePanelOptions:Object,onChange:[Function,Array],onInput:[Function,Array],"onUpdate:value":[Function,Array]},Kt={...ut,value:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],shortcuts:[Array,Object],timePanelOptions:[Object,Array],onChange:[Function,Array],onInput:[Function,Array],onSelect:[Function,Array],"onUpdate:value":[Function,Array]},Wt={activeValue:Date,cellTooltip:Function,disabledDate:Function,value:Date,type:{type:String,default:void 0},timePanelOptions:{type:Object,default:void 0},visible:{type:[String,Boolean],default:void 0},onChange:[Function,Array],"onUpdate:activeValue":[Function,Array]},Yt={activeValue:Array,cellTooltip:Function,disabledDate:Function,value:Array,type:{type:String,default:void 0},timePanelOptions:{type:Array,default:void 0},visible:{type:[String,Boolean],default:void 0},onChange:[Function,Array],onSelect:[Function,Array],"onUpdate:activeValue":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ie(e){return e==="datetime"?"date":e}const ce=24*60*60*1e3;function Qt(e,t){const{now:n,startOf:r,endOf:l}=e;switch(t){case"today":default:return()=>{const a=n();return[r(a,"date"),l(a,"date")]};case"yesterday":return()=>{const a=n(),o=new Date(a.valueOf()-ce);return[r(o,"date"),l(o,"date")]};case"last24h":return()=>{const a=n(),o=l(a,"hour");return[new Date(o.valueOf()-ce),o]};case"last7d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*7),o]};case"last30d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*30),o]};case"last180d":return()=>{const a=n(),o=l(a,"date");return[new Date(o.valueOf()-ce*180),o]}}}function Oe(e){const t=e.value;if(t)return ht(t)?t():t}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const st=M({name:"IxDatePanel",props:Wt,setup(e,{slots:t}){const n=N(nt,null),r=q("common"),{globalHashId:l,hashId:a,registerToken:o}=te("datePicker"),{registerToken:c}=te("timePicker");o(Pe),c(Ke);const u=P(()=>`${r.prefixCls}-date-picker-panel`),p=se(),s=P(()=>{var T;if(!n)return e;const d={};return Object.keys(e).forEach(V=>{var R;d[V]=(R=e[V])!=null?R:n.value[V]}),d.type=(T=d.type)!=null?T:"date",d}),{activeValue:m,setActiveValue:v}=Lt(p,s);function i(d){z(s.value.onChange,d)}function y(d){i(s.value.value?we(p,s.value.value,d,["hour","minute","second","millisecond"]):d)}function f(d){i(s.value.value?we(p,s.value.value,d,["year","month","date"]):d)}const C=d=>{y(d)};return()=>{const d=s.value,T=Ie(d.type),V={cellTooltip:d.cellTooltip,disabledDate:d.disabledDate,type:T,value:d.value,visible:d.type==="datetime"?d.visible==="datePanel":!!d.visible,activeDate:m.value,onCellClick:C,"onUpdate:activeDate":v},R={...d.timePanelOptions,activeValue:m.value,value:d.value,visible:d.type==="datetime"?d.visible==="timePanel":!1,onChange:f,"onUpdate:activeValue":v};return b("div",{class:[u.value,l.value,a.value]},[me(b(ot,V,t),[[he,d.visible!=="timePanel"]]),d.type==="datetime"&&me(b(We,R,null),[[he,d.visible==="timePanel"]])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Gt=M({setup(e,{slots:t}){const n=N(ie),{props:r,mergedPrefixCls:l}=n;return()=>{if(t.overlay)return t.overlay();const a=[b(St,null,t),b(st,null,t),b(Dt,null,t)];return r.overlayRender?r.overlayRender(a):b("div",{class:`${l.value}-overlay-content`},[a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Xt=M({inheritAttrs:!1,setup(e,{expose:t,slots:n}){const r=N(ie),{accessor:l,props:a,locale:o,controlContext:{inputValue:c,handleInput:u},mergedPrefixCls:p,formatRef:s,inputEnableStatus:m,inputRef:v}=r,i=X(),y=P(()=>{var T;return(T=a.placeholder)!=null?T:o.datePicker[`${a.type}Placeholder`]}),f=P(()=>Math.max(10,s.value.length)+2);t({focus:()=>{var T;(T=(m.value.allowInput==="overlay"?i:v).value)==null||T.focus()}});const d=T=>{u(T),z(a.onInput,T)};return()=>{var T,V;return b("div",{class:`${p.value}-input`},[(V=(T=n.triggerContent)==null?void 0:T.call(n,{inputValue:c.value,placeholder:y.value,readonly:a.readonly||m.value.enableInput===!1,disabled:l.disabled,handleInput:d}))!=null?V:b("input",{ref:m.value.allowInput==="overlay"?i:v,class:`${p.value}-input-inner`,autocomplete:"off",disabled:l.disabled,placeholder:y.value,readonly:a.readonly||m.value.enableInput===!1,size:f.value,value:c.value,onInput:d},null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Jt=M({name:"IxDatePicker",inheritAttrs:!1,props:qt,setup(e,{attrs:t,expose:n,slots:r}){const l=q("common"),a=q("locale"),{globalHashId:o,hashId:c,registerToken:u}=te("datePicker");u(Pe);const p=P(()=>`${l.prefixCls}-date-picker`),s=q("datePicker"),m=se(),v=X(),{elementRef:i,focus:y,blur:f}=Ge();n({focus:y,blur:f});const{overlayOpened:C,overlayVisible:d,onAfterLeave:T,setOverlayOpened:V}=et(e),R=Ze(e,s),D=Je(e,s),h=tt(e,s,m,D.formatRef),{accessor:k,focused:x,handleFocus:S,handleBlur:I,handleChange:g}=h,F=Re(m,D,R,Ve(k,"value"),g),B=Pt(C,V),H={props:e,slots:r,common:l,locale:a,config:s,mergedPrefixCls:p,dateConfig:m,inputRef:i,inputEnableStatus:R,overlayOpened:C,overlayVisible:d,onAfterLeave:T,setOverlayOpened:V,handleKeyDown:B,controlContext:F,...D,...h,handleFocus:S,handleBlur:I},A=at(H),L=kt(H);oe(ie,H),oe(nt,L),U(C,le=>{var W;le?setTimeout(()=>{var re;(re=i.value)==null||re.focus()}):(F.init(!0),x.value&&((W=v.value)==null||W.focus()))});const j=()=>b(Xt,{ref:v},r),ae=()=>b(Gt,null,r),ne=P(()=>Be([`${p.value}-overlay`,o.value,c.value,e.overlayClassName]));return()=>b(Xe,ee(A.value,{class:`${p.value} ${o.value} ${c.value}`,overlayClassName:ne.value},t),{default:j,overlay:ae,suffix:r.suffix,clearIcon:r.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Zt(e,t,n,r,l){const{formatRef:a,hourEnabled:o,secondEnabled:c,minuteEnabled:u}=t,p=P(()=>G(r.value).map(I=>Q(e,I,a.value))),[s,m]=_(p.value),[v,i]=_(!1),y=I=>{m(fe(e,ea(e,I,a.value),"date")),i(!0)},[f,C]=_("datePanel"),d=I=>{f.value!==I&&C(I),k.visiblePanel.value!==I&&k.setVisiblePanel(I),x.visiblePanel.value!==I&&x.setVisiblePanel(I)},T=P(()=>G(s.value)),V=P(()=>T.value[0]),R=P(()=>T.value[1]);U([r,a],([I])=>{y(I)});const D=(I,g)=>{var F,B,H,A;return g?Me(e,I,(F=s.value)==null?void 0:F[1],"date")>0?[I,I]:[I,(B=s.value)==null?void 0:B[1]]:Me(e,I,(H=s.value)==null?void 0:H[0],"date")<0?[I,I]:[(A=s.value)==null?void 0:A[0],I]},h=(I,g)=>{const F=c.value?"second":u.value?"minute":o.value?"hour":Ie(l.value);return Ye(e,D(I,g),p.value,F)},k=Re(e,t,n,V,I=>{m(h(I,!0)),i(!0)}),x=Re(e,t,n,R,I=>{m(h(I,!1)),i(!0)});return U(k.visiblePanel,d),U(x.visiblePanel,d),{buffer:s,bufferUpdated:v,visiblePanel:f,setVisiblePanel:d,fromControl:k,toControl:x,init:(I=!1)=>{y(r.value),i(!1),k.init(I),x.init(I)},handlePanelChange:y}}function ea(e,t,n){return G(t).map(r=>Q(e,r,n))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ta(e){const{props:t,hourEnabled:n,minuteEnabled:r,secondEnabled:l,use12Hours:a,rangeControlContext:{buffer:o,visiblePanel:c,handlePanelChange:u},overlayVisible:p}=e,s=xt(t,n,r,l,a);return P(()=>({value:o.value,cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,type:t.type,timePanelOptions:s.value,visible:p.value&&c.value,onChange:u,onSelect:t.onSelect}))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $e=M({name:"IxDateRangePickerFooter",setup(e,{slots:t}){const{locale:n,mergedPrefixCls:r,props:l,rangeControlContext:{buffer:a,bufferUpdated:o},handleChange:c,setOverlayOpened:u}=N(de),p=()=>{o.value&&c(a.value),u(!1)};return()=>b(Qe,{class:`${r.value}-overlay-footer`,footer:l.footer,okText:n.dateRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:p},t)}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ae=M({name:"IxDateRangePickerOverlayInputs",setup(e,{slots:t}){const n=N(de),{dateFormatRef:r,timeFormatRef:l,rangeControlContext:{fromControl:a,toControl:o},mergedPrefixCls:c,inputEnableStatus:u,inputRef:p,handleKeyDown:s,renderSeparator:m}=n,v=X();Ee(()=>{var f;u.value.allowInput==="overlay"&&(p.value=(f=v.value)==null?void 0:f.getInputElement())});const i=rt(n),y=(f,C)=>{const{enableOverlayTimeInput:d}=u.value,{dateInputValue:T,timeInputValue:V,dateInputFocused:R,timeInputFocused:D,handleDateInput:h,handleTimeInput:k,handleDateInputClear:x,handleTimeInputClear:S,handleDateInputFocus:I,handleTimeInputFocus:g,handleDateInputBlur:F,handleTimeInputBlur:B}=C?a:o,H=L=>{I(),u.value.allowInput==="overlay"&&(p.value=L.target)},A=L=>{g(),u.value.allowInput==="overlay"&&(p.value=L.target)};return b("div",{class:`${f}-side`},[b(ye,ee({ref:C?v:void 0},i.value,{class:`${f}-date-input`,value:T.value,clearVisible:!!T.value&&!!u.value.allowInput,focused:R.value,placeholder:r.value,readonly:!u.value.allowInput,onInput:h,onFocus:H,onBlur:F,onKeydown:s,onClear:x}),t),d&&b(ye,ee(i.value,{class:`${f}-time-input`,value:V.value,clearVisible:!!V.value&&!!u.value.allowInput,focused:D.value,placeholder:l.value,readonly:!u.value.allowInput,onInput:k,onFocus:A,onBlur:B,onKeydown:s,onClear:S}),t)])};return()=>{const f=`${c.value}-overlay`,C=`${f}-inputs`;return u.value.enableOverlayDateInput?b("div",{class:C},[y(C,!0),b("div",{class:`${f}-separator`},[m()]),y(C,!1)]):null}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function aa(e,t){const[n,r]=_(e.value.value),[l,a]=_(!1);U(()=>e.value.visible,s=>{a(!1),s||z(e.value.onSelect,e.value.value)});const o=P(()=>l.value?fe(t,[...G(n.value)],"date"):G(e.value.value)),c=s=>{z(e.value.onChange,s),z(e.value.onSelect,s)};return{panelValue:o,isSelecting:l,handleChange:c,handleDatePanelCellClick:s=>{if(!l.value)a(!0),r([s,void 0]),z(e.value.onSelect,[s,void 0]);else{const m=G(e.value.value),v=fe(t,[n.value[0],s],"date");c(Ye(t,v,m,Ie(e.value.type))),a(!1)}},handleDatePanelCellMouseenter:s=>{var m;l.value&&r([(m=n.value)==null?void 0:m[0],s])}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const be=M({name:"IxDateRangePanel",props:Yt,setup(e,{slots:t}){const n=N(lt,null),r=q("common"),{globalHashId:l,hashId:a,registerToken:o}=te("datePicker"),{registerToken:c}=te("timePicker");o(Pe),c(Ke);const u=P(()=>`${r.prefixCls}-date-range-picker-panel`),p=se(),s=P(()=>{var h;if(!n)return e;const D={};return Object.keys(e).forEach(k=>{var x;D[k]=(x=e[k])!=null?x:n.value[k]}),D.type=(h=D.type)!=null?h:"date",D}),{handleChange:m,handleDatePanelCellClick:v,handleDatePanelCellMouseenter:i,panelValue:y,isSelecting:f}=aa(s,p),{fromActiveValue:C,toActiveValue:d,setFromActiveValue:T,setToActiveValue:V}=jt(p,s,y,f),R=D=>{var B,H;const h=s.value,k=(B=y.value)==null?void 0:B[D?0:1],x=Ie(h.type),S=D?C.value:d.value,I=A=>{var L,j;m(D?[A,(L=y.value)==null?void 0:L[1]]:[(j=y.value)==null?void 0:j[0],A])},g={cellTooltip:h.cellTooltip,disabledDate:h.disabledDate,type:x,value:y.value,visible:h.type==="datetime"?h.visible==="datePanel":!!h.visible,activeDate:S,onCellClick:v,onCellMouseenter:i,"onUpdate:activeDate":D?T:V},F={...(H=ue(h.timePanelOptions)?h.timePanelOptions[D?0:1]:h.timePanelOptions)!=null?H:{},activeValue:k!=null?k:S,value:k,visible:h.type==="datetime"?h.visible==="timePanel":!1,onChange:I,"onUpdate:activeValue":D?T:V};return b("div",{class:`${u.value}-side`},[me(b(ot,g,t),[[he,h.visible!=="timePanel"]]),h.type==="datetime"&&me(b(We,F,null),[[he,h.visible==="timePanel"]])])};return()=>{var h,k;const D=u.value;return b("div",{class:[D,l.value,a.value]},[R(!0),(k=(h=t.separator)==null?void 0:h.call(t))!=null?k:b("div",{class:`${D}-separator`},null),R(!1)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const qe=e=>[Se(Ae,null,e.slots),Se(be),Se($e,null,e.slots)];function na(e,t,n,r=qe){const l=se(),{dateRangePicker:a}=q("locale"),[o,c]=_(void 0),u=P(()=>{var v;return ue(e.value)?!1:!!((v=e.value)!=null&&v.showPanel)}),p=P(()=>{var y;if(!e.value)return[];let v=[],i=!1;return ue(e.value)?(v=e.value,i=!1):(v=e.value.shortcuts,i=(y=e.value.showPanel)!=null?y:i),v.map(f=>{var d;if(bt(f))return la(l,f,a,i,r);const C=(d=f.panelRenderer)!=null?d:i&&f.value?qe:void 0;return{...f,confirmOnSelect:C?f.confirmOnSelect:!0,panelRenderer:C}}).filter(Boolean)}),s=P(()=>p.value.find(v=>v.key==="custom")),m=()=>{var i;const v=t.value;if(v)return(i=p.value.find(y=>y.value&&(v==null?void 0:v.every((f,C)=>{var d;return y&&((d=Oe(y))==null?void 0:d[C].valueOf())===(f==null?void 0:f.valueOf())}))))!=null?i:s.value};return U(t,()=>{const v=m();(v!=null&&v.value||o.value)&&c(v)},{flush:"pre",immediate:!0}),U(n,v=>{var y;if(v)return;const i=m();((y=o.value)==null?void 0:y.key)!==(i==null?void 0:i.key)&&c(i)},{flush:"pre"}),{shortcuts:p,selectedShortcut:o,showShortcutPanel:u,setSelectedShortcut:c}}function la(e,t,n,r,l){if(t==="custom")return{key:"custom",label:n.shortcuts.custom,panelRenderer:l};const a=Qt(e,t);if(a)return{key:t,value:a,label:n.shortcuts[t],confirmOnSelect:!r,selectedLabel:n.shortcuts[t],panelRenderer:r?l:void 0}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ra=M({props:{prefixCls:String,selectedShortcut:[String,Number,Symbol],shortcuts:Array,onChange:Function},setup(e){return()=>{var r;const t=`${e.prefixCls}-shortcuts`,n=(l,a)=>{var o,c;(o=a.onClick)==null||o.call(a,l),(c=e.onChange)==null||c.call(e,a)};return b("ul",{class:t},[(r=e.shortcuts)==null?void 0:r.map(l=>b("li",{key:l.key,class:[`${t}-item`,e.selectedShortcut===l.key?`${t}-item-selected`:void 0],onClick:a=>n(a,l)},[b("span",{class:`${t}-item-label`},[l.label])]))])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oa=M({setup(e,{slots:t}){const n=N(de),{props:r,mergedPrefixCls:l,shortcuts:a,selectedShortcut:o,showShortcutPanel:c,setSelectedShortcut:u,rangeControlContext:{buffer:p,bufferUpdated:s,handlePanelChange:m},handleChange:v,setOverlayOpened:i}=n,y=d=>{u(d),d.value&&(d.confirmOnSelect?(v(Oe(d)),i(!1)):m(Oe(d)))},f=()=>{s.value&&v(p.value),i(!1)},C=()=>{i(!1)};return()=>{var R,D,h;if(t.overlay)return t.overlay();let d;const T=P(()=>{const k=`${l.value}-overlay-content`;return{[k]:!0,[`${k}-with-shortcuts`]:!!a.value.length}}),V={slots:t,setBuffer:m,setValue:v,ok:f,cancel:C};return a.value.length?d=[b(ra,{class:{[`${l.value}-shortcuts-with-panel`]:c.value||!!((R=o.value)!=null&&R.panelRenderer)},prefixCls:l.value,shortcuts:a.value,selectedShortcut:(D=o.value)==null?void 0:D.key,onChange:y},null),(h=o.value)!=null&&h.panelRenderer?b("div",{class:`${l.value}-shortcuts-panel`},[o.value.panelRenderer(V)]):c.value?b("div",{class:`${l.value}-shortcuts-panel`},[b(Ae,null,t),b(be,null,null),b($e,null,t)]):void 0]:d=[b(Ae,null,t),b(be,null,null),b($e,null,t)],r.overlayRender?r.overlayRender(d):b("div",{class:T.value},[d])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ua=M({inheritAttrs:!1,setup(e,{expose:t,slots:n}){const r=N(de),{accessor:l,props:a,locale:o,rangeControlContext:{fromControl:c,toControl:u},mergedPrefixCls:p,formatRef:s,inputRef:m,inputEnableStatus:v,selectedShortcut:i,renderSeparator:y}=r,f=X(),C=X(),d=X(),T=P(()=>{var x,S,I,g;return[(S=(x=a.placeholder)==null?void 0:x[0])!=null?S:o.dateRangePicker[`${a.type}Placeholder`][0],(g=(I=a.placeholder)==null?void 0:I[1])!=null?g:o.dateRangePicker[`${a.type}Placeholder`][1]]}),V=P(()=>Math.max(10,s.value.length)+2),R=x=>{c.handleInput(x),z(a.onInput,!0,x)},D=x=>{u.handleInput(x),z(a.onInput,!1,x)};t({focus:()=>{var S;const x=(v.value.allowInput==="overlay"?f:m).value;x?x.focus():(S=d.value)==null||S.focus()}}),U(()=>{var x;return(x=i.value)==null?void 0:x.selectedLabel},x=>{var S;x&&(document.activeElement===f.value||document.activeElement===C.value||document.activeElement===m.value)&&((S=d.value)==null||S.focus())});const k=x=>{const S=p.value,{inputValue:I}=x?c:u,g=T.value[x?0:1],F=x?R:D;return b("input",{ref:x?v.value.allowInput==="overlay"?f:m:C,class:`${S}-input-inner`,autocomplete:"off",disabled:l.disabled,placeholder:g,readonly:a.readonly||v.value.enableInput===!1,size:V.value,value:I.value,onInput:F},null)};return()=>{var x,S,I,g;return b("div",{ref:d,class:`${p.value}-input`,tabindex:-1},[(g=(I=(x=n.triggerContent)==null?void 0:x.call(n,{selectedShortcut:i.value,inputValue:[c.inputValue.value,u.inputValue.value],placeholder:T.value,readonly:a.readonly||v.value.enableInput===!1,disabled:l.disabled,handleFromInput:R,handleToInput:D}))!=null?I:(S=i.value)==null?void 0:S.selectedLabel)!=null?g:[k(!0),b("span",{class:`${p.value}-input-separator`},[y()]),k(!1)]])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const sa=M({name:"IxDateRangePicker",inheritAttrs:!1,props:Kt,setup(e,{attrs:t,expose:n,slots:r}){const l=q("common"),a=q("locale"),{globalHashId:o,hashId:c,registerToken:u}=te("datePicker");u(Pe);const p=P(()=>`${l.prefixCls}-date-range-picker`),s=q("datePicker"),m=se(),v=X(),{elementRef:i,focus:y,blur:f}=Ge();n({focus:y,blur:f});const{overlayOpened:C,overlayVisible:d,onAfterLeave:T,setOverlayOpened:V}=et(e),R=Ze(e,s),D=Je(e,s),h=tt(e,s,m,D.formatRef),{accessor:k,convertedValue:x,focused:S,handleFocus:I,handleBlur:g,handleChange:F}=h,B=Zt(m,D,R,Ve(k,"value"),Ve(e,"type")),H=na(P(()=>e.shortcuts),x,C),A=It(B,C,V,F),j={props:e,slots:r,common:l,locale:a,config:s,mergedPrefixCls:p,dateConfig:m,inputRef:i,inputEnableStatus:R,overlayOpened:C,overlayVisible:d,onAfterLeave:T,setOverlayOpened:V,rangeControlContext:B,renderSeparator:()=>{var K,J,Z;return(Z=(J=(K=r.separator)==null?void 0:K.call(r))!=null?J:e.separator)!=null?Z:a.dateRangePicker.separator},handleKeyDown:A,...D,...h,...H,handleFocus:I,handleBlur:g},{shortcuts:ae,selectedShortcut:ne,showShortcutPanel:le}=H,W=at(j),re=ta(j),Ce={cell:r.cell,separator:R.value.enableOverlayDateInput?()=>b("div",{class:`${p.value}-overlay-separator`},null):void 0};oe(de,j),oe(lt,re),oe(Tt,Ce),U(C,K=>{var J;K?setTimeout(()=>{var Z;S.value||(Z=i.value)==null||Z.focus()}):(B.init(!0),S.value&&((J=v.value)==null||J.focus()))});const xe=()=>b(ua,{ref:v},r),ke=()=>b(oa,null,r),Te=P(()=>Be([`${p.value}-overlay`,o.value,c.value,e.overlayClassName]));return()=>{var K;return b(Xe,ee(W.value,{class:`${p.value} ${o.value} ${c.value}`,overlayClassName:Te.value,overlayMatchWidth:!!ae.value.length&&!le.value&&!((K=ne.value)!=null&&K.panelRenderer)},t),{default:xe,overlay:ke,suffix:r.suffix,clearIcon:r.clearIcon})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const da=Jt,va=st,pa=sa,fa=be;export{da as I,Ae as _,pa as a,fa as b,$e as c,Pe as d,va as e,Oe as f,Qt as g,na as u,ra as ɵ};
