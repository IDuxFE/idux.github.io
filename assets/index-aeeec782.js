import{c as X,i as $e,a as Te,s as de,u as se,g as ze,ɵ as Ne,b as Le,d as Re}from"./index-c1c98ee8.js";import{ak as L,ao as ye,r as nt,a6 as lt,aa as ot,ab as ut,an as Z,m as _,a7 as rt,A as ie,M as G,N as te,aG as qe,a9 as ve,a3 as _e,ay as Ke}from"./index-ab015422.js";import{c as b,w as K,m as Se,S as fe,t as st,l as j,y as ee,p as we,q as p,a8 as ae,D as Ve,a9 as pe,aa as me,r as le,a6 as De}from"./vendor-885c608a.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Oe={date:"yyyy-MM-dd",week:"RRRR-II",month:"yyyy-MM",quarter:"yyyy-'Q'Q",year:"yyyy",datetime:"yyyy-MM-dd HH:mm:ss"};function je(e,t){const a=b(()=>{var f,d,v;const u=e.type;return(v=(d=e.format)!=null?d:(f=t.format)==null?void 0:f[u])!=null?v:Oe[u]}),{hourEnabled:n,hourUse12Hours:l,minuteEnabled:o,secondEnabled:s,use12Hours:c}=ct(e,a),r=b(()=>{var u;return e.type!=="datetime"?a.value:(u=e.dateFormat)!=null?u:Oe.date}),m=b(()=>{if(e.timeFormat)return e.timeFormat;const f=[n.value&&(l.value?"hh":"HH"),o.value&&"mm",s.value&&"ss"].filter(Boolean).join(":");return c.value?`${f} a`:f});return{formatRef:a,dateFormatRef:r,timeFormatRef:m,hourEnabled:n,minuteEnabled:o,secondEnabled:s,use12Hours:c}}function ct(e,t){const a=b(()=>{var n;return(n=e.timeFormat)!=null?n:t.value});return{hourEnabled:b(()=>/[hH]/.test(a.value)),hourUse12Hours:b(()=>/h/.test(a.value)),minuteEnabled:b(()=>/m/.test(a.value)),secondEnabled:b(()=>/s/.test(a.value)),use12Hours:b(()=>/[aA]/.test(a.value))}}function Be(e){return b(()=>{const t=e.value;return{yearEnabled:/[yYR]/.test(t),monthEnabled:/[MQID]/.test(t),dateEnabled:/[dDiEec]/.test(t)}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function xe(e,t,a,n,l){const{formatRef:o,dateFormatRef:s,timeFormatRef:c,hourEnabled:r,minuteEnabled:m,secondEnabled:u,use12Hours:f}=t,[d,v]=L(""),[y,T]=L(""),[i,P]=L(""),[R,B]=L(void 0),[C,k]=L("datePanel"),[h,x]=L(!1),[V,F]=L(!1),I=Be(o),g=Be(s);function S(D,O=!1){if(!D){v("");return}const{parse:H,format:$}=e;(O||H(d.value,o.value).valueOf()!==H($(D,o.value),o.value).valueOf())&&v($(D,o.value))}function w(D,O=!1){if(!D){T("");return}const{parse:H,format:$}=e,Ce=H(y.value,s.value);(O||!$e(e,Ce,D,["year","month","date"]))&&T($(D,s.value))}function E(D,O=!1){if(!D){P("");return}const{parse:H,format:$}=e,Ce=H(i.value,c.value);(O||!$e(e,Ce,D,["hour","minute","second"]))&&P($(D,c.value))}function A(D=!1){const O=X(e,n.value,o.value);S(O,D),a.value.enableOverlayDateInput&&w(O,D),a.value.enableOverlayTimeInput&&E(O,D),B(O)}K([n,o],()=>A(),{immediate:!0}),K(a,()=>A());function q(D,O,H){return D?e.parse(D,O,H):void 0}function z(D){return!D||e.isValid(D)}let Y;(D=>{D[D.input=0]="input",D[D.timeInput=1]="timeInput",D[D.dateInput=2]="dateInput"})(Y||(Y={}));function Q(D){const{yearEnabled:O,monthEnabled:H,dateEnabled:$}=D;return[!O&&"year",!H&&"month",!$&&"date"].filter(Boolean)}function N(){return[!(r.value||f.value)&&"hour",!m.value&&"minute",!u.value&&"second","millisecond"].filter(Boolean)}function U(D,O,H){if(!D||!O)return D;let $;return H===2?$=[...Q(g.value),"hour","minute","second","millisecond"]:H===1?$=["year","month","date",...N()]:$=[...Q(I.value),...N()],Te(e,O,D,$)}function W(D){const O=D.target.value,H=X(e,n.value,o.value);v(O);let $=q(O,o.value,H);z($)&&($=U($,H,0),l($))}function M(D){const O=D.target.value,H=X(e,n.value,o.value);T(O);let $=q(O,s.value,H);z($)&&($=U($,H,2),l($),k("datePanel"))}function oe(D){const O=D.target.value,H=X(e,n.value,o.value);P(O);let $=q(O,c.value,H);z($)&&($=U($,H,1),l($),k("timePanel"))}function ue(){T("")}function ne(){P("")}function ge(D){l(D)}function Ie(){k("datePanel"),x(!0)}function Pe(){k("timePanel"),F(!0)}function re(){x(!1)}function at(){F(!1)}return{inputValue:d,dateInputValue:y,timeInputValue:i,dateInputFocused:h,timeInputFocused:V,panelValue:R,visiblePanel:C,setVisiblePanel:k,init:A,handleInput:W,handleDateInput:M,handleTimeInput:oe,handleDateInputClear:ue,handleTimeInputClear:ne,handlePanelChange:ge,handleDateInputFocus:Ie,handleTimeInputFocus:Pe,handleDateInputBlur:re,handleTimeInputBlur:at}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function We(e,t){return b(()=>{var n;const a=(n=e.allowInput)!=null?n:t.allowInput;return{allowInput:a,enableInput:a===!0,enableOverlayDateInput:a==="overlay"||e.type==="datetime",enableOverlayTimeInput:e.type==="datetime"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function it(e,t){return a=>{if(a.code==="Escape"){t(!1);return}if(!e.value&&!["Backspace","Tab"].includes(a.code)){a.preventDefault(),t(!0);return}a.code==="Enter"&&t(!1)}}function dt(e,t,a,n){const{bufferUpdated:l,buffer:o}=e;return s=>{if(s.code==="Escape"){a(!1);return}if(!t.value&&!["Backspace","Tab"].includes(s.code)){s.preventDefault(),a(!0);return}s.code==="Enter"&&(l.value&&n(o.value),a(!1))}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ye(e){const[t,a]=ye(e,"open",!1),[n,l]=L(!1);K(t,s=>{s&&l(!0)},{immediate:!0});const o=()=>{t.value||l(!1)};return Se(()=>{e.autofocus&&a(!0)}),{overlayOpened:t,overlayVisible:n,setOverlayOpened:a,onAfterLeave:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Qe(e,t,a,n){const{accessor:l,control:o}=nt();lt(o);const s=ot(e,t),c=ut(e,o),[r,m]=L(!1);function u(y){const T=fe(y)?de(a,y):y;if(Z(T).some(P=>{var R;return(R=e.disabledDate)==null?void 0:R.call(e,P)}))return;let i=st(l.value);i=fe(i)?i.map(P=>X(a,P,n.value)):X(a,i,n.value),l.setValue(T),_(e.onChange,T,i)}function f(y){_(e.onClear,y),u(void 0)}function d(y){m(!0),_(e.onFocus,y)}function v(y){m(!1),l.markAsBlurred(),_(e.onBlur,y)}return{accessor:l,mergedSize:s,mergedStatus:c,focused:r,handleChange:u,handleClear:f,handleFocus:d,handleBlur:v}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ge(e){const{props:t,config:a,accessor:n,mergedSize:l,mergedStatus:o,mergedPrefixCls:s,overlayOpened:c,onAfterLeave:r,setOverlayOpened:m,handleFocus:u,handleBlur:f,handleClear:d,handleKeyDown:v}=e;return b(()=>{var y,T,i,P;return{autofocus:t.autofocus,borderless:t.borderless,value:n.value,clearable:(y=t.clearable)!=null?y:a.clearable,clearIcon:(T=t.clearIcon)!=null?T:a.clearIcon,disabled:n.disabled,open:c.value,overlayContainer:(i=t.overlayContainer)!=null?i:a.overlayContainer,overlayContainerFallback:`.${s.value}-overlay-container`,readonly:t.readonly,size:l.value,status:o.value,suffix:(P=t.suffix)!=null?P:a.suffix,suffixRotate:!1,"onUpdate:open":m,onClear:d,onFocus:u,onBlur:f,onKeydown:v,onOverlayAfterLeave:r}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e){return b(()=>{var l,o;const{props:t,config:a,accessor:n}=e;return{borderless:!1,clearable:(l=t.clearable)!=null?l:a.clearable,clearIcon:(o=t.clearIcon)!=null?o:a.clearIcon,disabled:n.disabled,size:"sm"}})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function vt(e,t,a,n,l){return b(()=>{var o;return{...ke((o=e.timePanelOptions)!=null?o:{}),hourEnabled:t.value,minuteEnabled:a.value,secondEnabled:n.value,use12Hours:l.value}})}function ft(e,t,a,n,l){const o=c=>{var r;return(r=fe(e.timePanelOptions)?e.timePanelOptions[c?0:1]:e.timePanelOptions)!=null?r:{}};return b(()=>{const c={hourEnabled:t.value,minuteEnabled:a.value,secondEnabled:n.value,use12Hours:l.value};return[{...ke(o(!0)),...c},{...ke(o(!1)),...c}]})}function ke(e){const{disabledHours:t,disabledMinutes:a,disabledSeconds:n,hideDisabledOptions:l,hourStep:o,minuteStep:s,secondStep:c}=e;return{disabledHours:t,disabledMinutes:a,disabledSeconds:n,hideDisabledOptions:l,hourStep:o,minuteStep:s,secondStep:c}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function pt(e,t,a){const[n,l]=ye(e,"activeDate",()=>t.now()),o=b(()=>{const s=n.value,c=a.value,{startOf:r,set:m,get:u}=t;switch(c){case"date":case"week":return r(r(s,"month"),"week");case"month":return r(r(s,"year"),"month");case"quarter":return r(r(s,"year"),"quarter");case"year":return m(s,parseInt(`${u(s,"year")/10}`,10)*10-1,"year");default:return s}});return{activeDate:n,setActiveDate:l,startActiveDate:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function mt(e){const[t,a]=L(e.type);return K(()=>e.type,a),K(()=>e.visible,n=>n&&a(e.type)),{activeType:t,setActiveType:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function yt(e){const t=b(()=>{switch(e.value){case"date":case"week":return 6;case"month":return 4;case"quarter":return 1;case"year":return 4;default:return 0}}),a=b(()=>{switch(e.value){case"date":case"week":return 7;case"month":return 3;case"quarter":return 4;case"year":return 3;default:return 0}});return{maxRowIndex:t,maxCellIndex:a}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ce=Symbol("datePanelToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ht={cellTooltip:Function,disabledDate:Function,type:{type:String,default:"date"},value:[Date,Array],activeDate:Date,visible:{type:Boolean,default:void 0},isSelecting:{type:Boolean,default:void 0},onCellClick:[Function,Array],onCellMouseenter:[Function,Array],"onUpdate:activeDate":[Function,Array]},bt={rowIndex:{type:Number,required:!0}},gt={rowIndex:{type:Number,required:!0},cellIndex:{type:Number,required:!0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function J(e){return e==="week"?"date":e}function It(e,t,a,n){const l=J(t);if(l==="date")return n(e);const o={date:void 0,month:"date",quarter:"month",year:"quarter"},s=[],c=(r,m)=>{const u=o[m];if(!u)return;const[f,d]=["startOf","endOf"].map(v=>a.get(a[v](r,m),u));for(let v=f;v<=d;v++)s.push({date:a.set(r,v,u),type:u})};for(c(e,l);s.length;){const r=s.pop();if(!n(r.date))return!1;c(r.date,r.type)}return!0}const Pt={date:"d",week:"d",month:"MMM",quarter:"'Q'Q",year:"yyyy"},Ct=j({props:gt,setup(e){const{props:t,slots:a,mergedPrefixCls:n,dateConfig:l,activeDate:o,setActiveDate:s,startActiveDate:c,activeType:r,setActiveType:m,maxRowIndex:u,maxCellIndex:f}=ee(ce),d=b(()=>e.rowIndex*f.value+e.cellIndex),v=b(()=>l.add(c.value,d.value,J(r.value))),y=b(()=>Ee(l,t.value,r.value,!0)),T=b(()=>Ee(l,t.value,r.value,!1)),i=b(()=>{const g=t.disabledDate;return g?It(v.value,r.value,l,g):!1}),P=b(()=>{var g;return(g=t.cellTooltip)==null?void 0:g.call(t,{value:v.value,disabled:!!i.value})}),R=b(()=>y.value&&l.isSame(y.value,v.value,J(r.value))),B=b(()=>T.value&&l.isSame(T.value,v.value,J(r.value))),C=b(()=>l.isSame(v.value,l.now(),J(r.value))),k=b(()=>{const g=r.value;if(J(r.value)==="date")return!l.isSame(v.value,o.value,"month");if(g==="year"){const S=d.value;return S===0||S===u.value*f.value}return!1}),h=b(()=>{if(k.value)return!1;const g=J(r.value);return t.isSelecting?y.value&&l.isSame(y.value,v.value,g):y.value&&l.isSame(y.value,v.value,g)||T.value&&l.isSame(T.value,v.value,g)}),x=b(()=>{const g=J(r.value),S=l.startOf(v.value,g).valueOf();return!!y.value&&!!T.value&&S>=l.startOf(y.value,g).valueOf()&&S<=l.startOf(T.value,g).valueOf()}),V=b(()=>{const g=`${n.value}-cell`;return we({[g]:!0,[`${g}-disabled`]:i.value,[`${g}-selected`]:h.value,[`${g}-in-range`]:x.value,[`${g}-current`]:C.value,[`${g}-out-view`]:k.value,[`${g}-start`]:R.value,[`${g}-end`]:B.value})}),F=g=>{g.stopPropagation();const S=v.value;t.type!==r.value?(m(t.type),s(S)):_(t.onCellClick,S)},I=()=>{_(t.onCellMouseenter,v.value)};return()=>{var E,A;const g=v.value,{format:S}=l,w=(A=(E=a.cell)==null?void 0:E.call(a,{date:g}))!=null?A:p("div",{class:`${n.value}-cell-inner`},[p("div",{class:`${n.value}-cell-trigger`},[S(g,Pt[r.value])])]);return p("td",{class:V.value,role:"gridcell",onClick:i.value?void 0:F,onMouseenter:i.value?void 0:I},[P.value?p(rt,{title:P.value},{default:()=>[w]}):w])}}});function Ee(e,t,a,n){var o;const l=Z(t);return a==="week"?n?e.startOf(l[0],"week"):e.endOf((o=l[1])!=null?o:l[0],"week"):l[n?0:1]}const Tt=j({props:bt,setup(e){const{mergedPrefixCls:t,activeType:a,maxCellIndex:n}=ee(ce),l=b(()=>{const{rowIndex:o}=e,s=a.value,c=[],r=n.value;for(let m=0;m<r;m++)c.push({key:`${s}-${m}`,rowIndex:o,cellIndex:m});return c});return()=>{const o=l.value.map(s=>p(Ct,s,null));return p("tr",{role:"row",class:`${t.value}-row`},[o])}}}),Dt=j({setup(){const{mergedPrefixCls:e,dateConfig:t,activeType:a,maxRowIndex:n,maxCellIndex:l}=ee(ce),o=xt(t,a,l);return()=>{const s=`${e.value}-body`,c=o.value.map(u=>{const{key:f,label:d}=u;return p("th",{role:"columnheader",key:f},[p("div",{class:`${s}-header-cell`},[d])])}),r=n.value,m=[];for(let u=0;u<r;u++)m.push(p(Tt,{key:u,rowIndex:u},null));return p("div",{class:s},[p("table",{role:"grid"},[c.length>0&&p("thead",null,[p("tr",{role:"row"},[c])]),p("tbody",null,[m])])])}}});function xt(e,t,a){return b(()=>{const n=t.value,l=[];if(n==="date"||n==="week"){const o=a.value,s=e.getLocalizedLabels("day",o,"narrow"),c=e.weekStartsOn();for(let r=0;r<o;r++)l.push({key:r,label:s[(r+c)%o]})}return l})}const Me=["month","quarter","year"],kt=j({setup(){const{locale:e,mergedPrefixCls:t,dateConfig:a,activeDate:n,setActiveDate:l,activeType:o,setActiveType:s}=ee(ce),c=St(o,n,e,a,s),r=()=>{const d=o.value==="year"?-10:-1;l(a.add(n.value,d,"year"))},m=()=>{l(a.add(n.value,-1,"month"))},u=()=>{const d=o.value==="year"?10:1;l(a.add(n.value,d,"year"))},f=()=>{l(a.add(n.value,1,"month"))};return()=>{const{previousDecade:d,previousYear:v,previousMonth:y,nextDecade:T,nextYear:i,nextMonth:P}=e.datePicker,R=o.value,B=!Me.includes(o.value),C=!Me.includes(o.value),k=c.value.map(x=>{const{label:V,...F}=x;return p("button",ae({type:"button",tabindex:"-1"},F),[V])}),h=`${t.value}-header`;return p("div",{class:h},[p("button",{class:`${h}-super-prev visible`,type:"button",tabindex:"-1",title:R==="year"?d:v,onClick:r},[p(ie,{name:"double-left"},null)]),p("button",{class:`${h}-prev${B?" visible":""}`,type:"button",tabindex:"-1",title:y,onClick:m},[p(ie,{name:"left"},null)]),p("div",{class:`${h}-content`},[k]),p("button",{class:`${h}-super-next${C?" visible":""}`,type:"button",tabindex:"-1",title:P,onClick:f},[p(ie,{name:"right"},null)]),p("button",{class:`${h}-super-prev visible`,type:"button",tabindex:"-1",title:R==="year"?T:i,onClick:u},[p(ie,{name:"double-right"},null)])])}}});function St(e,t,a,n,l){const o=(s,c)=>{s.stopPropagation(),l(c)};return b(()=>{const s=e.value,c=t.value,{yearSelect:r,monthSelect:m,yearFormat:u,monthFormat:f}=a.datePicker,{format:d,get:v}=n;switch(s){case"date":case"week":return[{key:"year",title:r,onClick:y=>o(y,"year"),label:d(c,u)},{key:"month",title:m,onClick:y=>o(y,"month"),label:d(c,f)}];case"month":case"quarter":return[{key:"year",title:r,onClick:y=>o(y,"year"),label:d(c,u)}];case"year":{const y=parseInt(`${v(c,"year")/10}`,10)*10,T=y+9;return[{key:"decade",label:`${y}-${T}`}]}default:return[]}})}const wt=j({name:"ɵDatePanel",props:ht,setup(e,{slots:t}){const a=G("common"),{globalHashId:n}=te(),l=G("locale"),o=b(()=>`${a.prefixCls}-date-panel`),s=se(),{activeType:c,setActiveType:r}=mt(e),{activeDate:m,setActiveDate:u,startActiveDate:f}=pt(e,s,c),{maxRowIndex:d,maxCellIndex:v}=yt(c);return Ve(ce,{props:e,slots:t,locale:l,mergedPrefixCls:o,dateConfig:s,activeType:c,setActiveType:r,activeDate:m,setActiveDate:u,startActiveDate:f,maxRowIndex:d,maxCellIndex:v}),()=>{const y=o.value;return p("div",{class:`${y} ${y}-${c.value} ${n.value}`},[p(kt,null,null),p(Dt,null,null)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Xe=wt;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function He(e,t){const{getColorPalette:a}=t,{colorPrimary:n,colorPrimaryTextHover:l,colorText:o,colorTextInverse:s,colorTextDisabled:c,colorContainerBgHover:r,colorInfoContainerBg:m,marginSizeLg:u,paddingSizeSm:f,paddingSizeLg:d,fontSizeSm:v,fontWeightMd:y,heightMd:T}=e,i=a(n);return{separatorMarginHorizontal:u,overlayWidth:252,overlayPadding:d,overlayFooterPadding:`${f}px ${d}px`,overlayDateInputWidth:120,overlayTimeInputWidth:96,boardWidth:220,boardMaxHeight:260,rangeBoardBorder:"none",rangeOverlayPadding:`${d}px ${d}px 0 ${d}px`,rangeOverlayFooterPadding:`${f}px 0`,rangeOverlaySeparatorWidth:32,rangeOverlaySeparatorFontSize:v,panelFontSize:v,panelColor:o,panelCellWidth:28,panelCellHeight:28,panelCellWidthLg:52,panelCellHeightLg:24,panelCellColorActive:s,panelCellColorHover:l,panelCellColorDisabled:c,panelCellBgColorHover:r,panelCellBgColorActive:n,panelCellBgColorInRange:i.l50,panelCellBgColorDisabled:m,panelCellTriggerWidth:20,panelCellTriggerHeight:20,panelCellTriggerWidthLg:52,panelCellTriggerHeightLg:24,panelCellCurrentColor:n,panelCellCurrentBorderColor:i.l40,panelCellCurrentBgColor:n,panelHeaerHeight:T,panelHeaderFontSize:v,panelHeaderFontWeight:y,panelHeaderSpacing:u,panelBodyHeaderBgColor:m}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const he=(e,t,a)=>He(e,a);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Vt(e,t){var l;const[a,n]=ye(t,"activeValue",(l=t.value)!=null?l:e.now());return K(()=>t.value,o=>n(o!=null?o:e.now())),{activeValue:a,setActiveValue:n}}const Ue={date:"month",datetime:"month",week:"month",month:"year",quarter:"year",year:"year"};function Ft(e,t,a,n){var C,k;const{set:l,get:o}=e,s=e.now(),c=b(()=>Ue[t.type]),r=b(()=>t.type==="year"?12:1),m=b(()=>{var h;return(h=a.value)==null?void 0:h[0]}),u=b(()=>{var h;return(h=a.value)==null?void 0:h[1]}),f=(h,x)=>{if(!h||!x)return!1;const V=o(h,c.value),F=o(x,c.value);return t.type==="year"?V<F-r.value:(()=>{const I=o(h,"year"),g=o(x,"year");return I>g?!1:I<g||V<F})()},d=(h,x,V)=>{const F=g=>l(g,o(g,c.value)+(V==="from"?-r.value:r.value),c.value);if(!h)return V==="from"?s:F(s);if(!x)return V==="from"?h:F(h);const I=f(h,x);return V==="from"?I?h:F(x):I?x:F(h)},v=()=>{var F,I,g;if(n.value)return;const h=(I=(F=a.value)==null?void 0:F[0])!=null?I:s,x=(g=a.value)==null?void 0:g[1];[h,x].every(S=>{if(!S)return!0;const w=o(S,"year");if(Ue[t.type]==="year")return[i,P].map(A=>o(A.value,"year")).includes(w);const E=o(S,"month");return[i,P].some(A=>w===o(A.value,"year")&&E===o(A.value,"month"))})&&f(i.value,P.value)||T([h,d(h,x,"to")])},[y,T]=ye(t,"activeValue",[(C=m.value)!=null?C:s,d((k=m.value)!=null?k:s,u.value,"to")]),i=b(()=>y.value[0]),P=b(()=>y.value[1]);return K([a,()=>t.visible,()=>t.type],v),{fromActiveValue:i,toActiveValue:P,setFromActiveValue:h=>{T([h,d(h,P.value,"to")])},setToActiveValue:h=>{T([d(i.value,h,"from"),h])}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ze={control:{type:[String,Number,Object,Array],default:void 0},cellTooltip:Function,open:{type:Boolean,default:void 0},allowInput:{type:[Boolean,String],default:void 0},autofocus:{type:Boolean,default:!1},borderless:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},clearIcon:String,disabled:{type:Boolean,default:!1},disabledDate:Function,format:String,dateFormat:String,timeFormat:String,overlayClassName:String,overlayContainer:{type:[String,HTMLElement,Function],default:void 0},overlayRender:Function,readonly:{type:Boolean,default:!1},size:String,status:String,suffix:String,type:{type:String,default:"date"},"onUpdate:open":[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},At={...Ze,value:[String,Date,Number],footer:{type:[Boolean,Array,Object],default:!1},placeholder:String,timePanelOptions:Object,onChange:[Function,Array],onInput:[Function,Array],"onUpdate:value":[Function,Array]},$t={...Ze,value:Array,footer:{type:[Boolean,Array,Object],default:!0},placeholder:Array,separator:[String,Object],timePanelOptions:[Object,Array],onChange:[Function,Array],onInput:[Function,Array],onSelect:[Function,Array],"onUpdate:value":[Function,Array]},Rt={activeValue:Date,cellTooltip:Function,disabledDate:Function,value:Date,type:{type:String,default:"date"},timePanelOptions:{type:Object,default:()=>({})},visible:[String,Boolean],onChange:[Function,Array],"onUpdate:activeValue":[Function,Array]},Ot={activeValue:Array,cellTooltip:Function,disabledDate:Function,value:Array,type:{type:String,default:"date"},timePanelOptions:{type:Array,default:()=>[]},visible:[String,Boolean],onChange:[Function,Array],onSelect:[Function,Array],"onUpdate:activeValue":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function be(e){return e==="datetime"?"date":e}const et=j({name:"IxDatePanel",props:Rt,setup(e,{slots:t}){const a=G("common"),{globalHashId:n,hashId:l,registerToken:o}=te("datePicker"),{registerToken:s}=te("timePicker");o(he),s(ze);const c=b(()=>`${a.prefixCls}-date-picker-panel`),r=se(),{activeValue:m,setActiveValue:u}=Vt(r,e);function f(i){_(e.onChange,i)}function d(i){f(e.value?Te(r,e.value,i,["hour","minute","second","millisecond"]):i)}function v(i){f(e.value?Te(r,e.value,i,["year","month","date"]):i)}const y=i=>{d(i)},T=i=>{i.target instanceof HTMLInputElement||i.preventDefault()};return()=>{const i=be(e.type),P={cellTooltip:e.cellTooltip,disabledDate:e.disabledDate,type:i,value:e.value,visible:e.type==="datetime"?e.visible==="datePanel":!!e.visible,activeDate:m.value,onCellClick:y,"onUpdate:activeDate":u},R={...e.timePanelOptions,activeValue:m.value,value:e.value,visible:e.type==="datetime"?e.visible==="timePanel":!1,onChange:v,"onUpdate:activeValue":u};return p("div",{class:[c.value,n.value,l.value],tabindex:-1,onMousedown:T},[pe(p(Xe,P,t),[[me,e.visible!=="timePanel"]]),e.type==="datetime"&&pe(p(Ne,R,null),[[me,e.visible==="timePanel"]])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Fe=Symbol("datePickerToken"),Ae=Symbol("dateRangePickerToken"),Bt=j({setup(){const e=ee(Fe),{props:t,mergedPrefixCls:a,dateFormatRef:n,timeFormatRef:l,hourEnabled:o,minuteEnabled:s,secondEnabled:c,use12Hours:r,slots:m,inputEnableStatus:u,inputRef:f,controlContext:{dateInputValue:d,timeInputValue:v,visiblePanel:y,panelValue:T,dateInputFocused:i,timeInputFocused:P,handleDateInput:R,handleTimeInput:B,handleDateInputClear:C,handleTimeInputClear:k,handleDateInputFocus:h,handleTimeInputFocus:x,handleDateInputBlur:V,handleTimeInputBlur:F,handlePanelChange:I},overlayVisible:g,setOverlayOpened:S,handleKeyDown:w,handleClear:E}=e,A=le();Se(()=>{var M;u.value.allowInput==="overlay"&&(f.value=(M=A.value)==null?void 0:M.getInputElement())});const q=M=>{h(),u.value.allowInput==="overlay"&&(f.value=M.target)},z=M=>{x(),u.value.allowInput==="overlay"&&(f.value=M.target)},Y=M=>{I(M),u.value.enableOverlayTimeInput||S(!1)},Q=M=>{u.value.enableOverlayTimeInput||E(M),C()},N=Je(e),U=vt(t,o,s,c,r),W=M=>{if(u.value.enableOverlayDateInput)return p("div",{class:M},[p(ve,ae({ref:A},N.value,{class:`${M}-date-input`,value:d.value,clearVisible:!!d.value&&!!u.value.allowInput,focused:i.value,placeholder:n.value,readonly:!u.value.allowInput,onInput:R,onFocus:q,onBlur:V,onKeydown:w,onClear:Q}),m),u.value.enableOverlayTimeInput&&p(ve,ae(N.value,{class:`${M}-time-input`,value:v.value,clearVisible:!!v.value&&!!u.value.allowInput,focused:P.value,placeholder:l.value,readonly:!u.value.allowInput,onInput:B,onFocus:z,onBlur:F,onKeydown:w,onClear:k}),m)])};return()=>{const M=`${a.value}-overlay`,oe=`${M}-inputs`,ue={cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,value:T.value,type:t.type,timePanelOptions:U.value,visible:g.value&&y.value,onChange:Y},ne=[p("div",{class:`${M}-body`,tabindex:-1},[W(oe),p(et,ue,m)]),p(qe,{class:`${M}-footer`,footer:t.footer},m)];return t.overlayRender?t.overlayRender(ne):p("div",null,[ne])}}}),Et=j({inheritAttrs:!1,setup(e,{expose:t}){const a=ee(Fe),{accessor:n,props:l,locale:o,controlContext:{inputValue:s,handleInput:c},mergedPrefixCls:r,formatRef:m,inputEnableStatus:u,inputRef:f}=a,d=le(),v=b(()=>{var P;return(P=l.placeholder)!=null?P:o.datePicker[`${l.type}Placeholder`]}),y=b(()=>Math.max(10,m.value.length)+2);t({focus:()=>{var P;(P=(u.value.allowInput==="overlay"?d:f).value)==null||P.focus()}});const i=P=>{c(P),_(l.onInput,P)};return()=>p("div",{class:`${r.value}-input`},[p("input",{ref:u.value.allowInput==="overlay"?d:f,class:`${r.value}-input-inner`,autocomplete:"off",disabled:n.disabled,placeholder:v.value,readonly:l.readonly||u.value.enableInput===!1,size:y.value,value:s.value,onInput:i},null)])}}),Mt=j({name:"IxDatePicker",inheritAttrs:!1,props:At,setup(e,{attrs:t,expose:a,slots:n}){const l=G("common"),o=G("locale"),{globalHashId:s,hashId:c,registerToken:r}=te("datePicker");r(he);const m=b(()=>`${l.prefixCls}-date-picker`),u=G("datePicker"),f=se(),d=le(),{elementRef:v,focus:y,blur:T}=_e();a({focus:y,blur:T});const{overlayOpened:i,overlayVisible:P,onAfterLeave:R,setOverlayOpened:B}=Ye(e),C=We(e,u),k=je(e,u),h=Qe(e,u,f,k.formatRef),{accessor:x,focused:V,handleFocus:F,handleBlur:I,handleChange:g}=h,S=xe(f,k,C,De(x,"value"),g),w=it(i,B),E={props:e,slots:n,common:l,locale:o,config:u,mergedPrefixCls:m,dateConfig:f,inputRef:v,inputEnableStatus:C,overlayOpened:i,overlayVisible:P,onAfterLeave:R,setOverlayOpened:B,handleKeyDown:w,controlContext:S,...k,...h,handleFocus:F,handleBlur:I},A=Ge(E);Ve(Fe,E),K(i,Q=>{var N;Q?setTimeout(()=>{var U;(U=v.value)==null||U.focus()}):(S.init(!0),V.value&&((N=d.value)==null||N.focus()))});const q=()=>p(Et,{ref:d},null),z=()=>p(Bt,null,null),Y=b(()=>we([`${m.value}-overlay`,s.value,c.value,e.overlayClassName]));return()=>p(Ke,ae(A.value,{class:`${m.value} ${s.value} ${c.value}`,overlayClassName:Y.value},t),{default:q,overlay:z,suffix:n.suffix,clearIcon:n.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ht(e,t,a,n,l){const{formatRef:o,hourEnabled:s,secondEnabled:c,minuteEnabled:r}=t,m=b(()=>Z(n.value).map(I=>X(e,I,o.value))),[u,f]=L(m.value),[d,v]=L(!1),y=I=>{f(de(e,Ut(e,I,o.value),"date")),v(!0)},[T,i]=L("datePanel"),P=I=>{T.value!==I&&i(I),x.visiblePanel.value!==I&&x.setVisiblePanel(I),V.visiblePanel.value!==I&&V.setVisiblePanel(I)},R=b(()=>Z(u.value)),B=b(()=>R.value[0]),C=b(()=>R.value[1]);K([n,o],([I])=>{y(I)});const k=(I,g)=>{var S,w,E,A;return g?Re(e,I,(S=u.value)==null?void 0:S[1],"date")>0?[I,I]:[I,(w=u.value)==null?void 0:w[1]]:Re(e,I,(E=u.value)==null?void 0:E[0],"date")<0?[I,I]:[(A=u.value)==null?void 0:A[0],I]},h=(I,g)=>{const S=c.value?"second":r.value?"minute":s.value?"hour":be(l.value);return Le(e,k(I,g),m.value,S)},x=xe(e,t,a,B,I=>{f(h(I,!0)),v(!0)}),V=xe(e,t,a,C,I=>{f(h(I,!1)),v(!0)});return K(x.visiblePanel,P),K(V.visiblePanel,P),{buffer:u,bufferUpdated:d,visiblePanel:T,setVisiblePanel:P,fromControl:x,toControl:V,init:(I=!1)=>{y(n.value),v(!1),x.init(I),V.init(I)},handlePanelChange:y}}function Ut(e,t,a){return Z(t).map(n=>X(e,n,a))}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function zt(e,t){const[a,n]=L(e.value),[l,o]=L(!1);K(()=>e.visible,u=>{o(!1),u||_(e.onSelect,e.value)});const s=b(()=>l.value?de(t,[...Z(a.value)],"date"):Z(e.value)),c=u=>{_(e.onChange,u),_(e.onSelect,u)};return{panelValue:s,isSelecting:l,handleChange:c,handleDatePanelCellClick:u=>{if(!l.value)o(!0),n([u,void 0]),_(e.onSelect,[u,void 0]);else{const f=Z(e.value),d=de(t,[a.value[0],u],"date");c(Le(t,d,f,be(e.type))),o(!1)}},handleDatePanelCellMouseenter:u=>{var f;l.value&&n([(f=a.value)==null?void 0:f[0],u])}}}const tt=j({name:"IxDateRangePanel",props:Ot,setup(e,{slots:t}){const a=G("common"),{globalHashId:n,hashId:l,registerToken:o}=te("datePicker"),{registerToken:s}=te("timePicker");o(he),s(ze);const c=b(()=>`${a.prefixCls}-date-range-picker-panel`),r=se(),{handleChange:m,handleDatePanelCellClick:u,handleDatePanelCellMouseenter:f,panelValue:d,isSelecting:v}=zt(e,r),{fromActiveValue:y,toActiveValue:T,setFromActiveValue:i,setToActiveValue:P}=Ft(r,e,d,v),R=C=>{C.target instanceof HTMLInputElement||C.preventDefault()},B=C=>{var g,S;const k=(g=d.value)==null?void 0:g[C?0:1],h=be(e.type),x=C?y.value:T.value,V=w=>{var E,A;m(C?[w,(E=d.value)==null?void 0:E[1]]:[(A=d.value)==null?void 0:A[0],w])},F={cellTooltip:e.cellTooltip,disabledDate:e.disabledDate,type:h,value:d.value,visible:e.type==="datetime"?e.visible==="datePanel":!!e.visible,activeDate:x,onCellClick:u,onCellMouseenter:f,"onUpdate:activeDate":C?i:P},I={...(S=fe(e.timePanelOptions)?e.timePanelOptions[C?0:1]:e.timePanelOptions)!=null?S:{},activeValue:k!=null?k:x,value:k,visible:e.type==="datetime"?e.visible==="timePanel":!1,onChange:V,"onUpdate:activeValue":C?i:P};return p("div",{class:`${c.value}-side`},[pe(p(Xe,F,t),[[me,e.visible!=="timePanel"]]),e.type==="datetime"&&pe(p(Ne,I,null),[[me,e.visible==="timePanel"]])])};return()=>{var k,h;const C=c.value;return p("div",{class:[C,n.value,l.value],tabindex:-1,onMousedown:R},[B(!0),(h=(k=t.separator)==null?void 0:k.call(t))!=null?h:p("div",{class:`${C}-separator`},null),B(!1)])}}}),Nt=j({setup(){const e=ee(Ae),{props:t,locale:a,slots:n,dateFormatRef:l,timeFormatRef:o,hourEnabled:s,minuteEnabled:c,secondEnabled:r,use12Hours:m,rangeControlContext:{buffer:u,visiblePanel:f,fromControl:d,toControl:v,handlePanelChange:y},mergedPrefixCls:T,inputEnableStatus:i,inputRef:P,handleChange:R,handleKeyDown:B,overlayVisible:C,renderSeparator:k,setOverlayOpened:h}=e,x=le();Se(()=>{var w;i.value.allowInput==="overlay"&&(P.value=(w=x.value)==null?void 0:w.getInputElement())});const V=()=>{R(u.value),h(!1)},F=w=>{w.target instanceof HTMLInputElement||w.preventDefault()},I=Je(e),g=ft(t,s,c,r,m),S=(w,E)=>{const{enableOverlayTimeInput:A}=i.value,{dateInputValue:q,timeInputValue:z,dateInputFocused:Y,timeInputFocused:Q,handleDateInput:N,handleTimeInput:U,handleDateInputClear:W,handleTimeInputClear:M,handleDateInputFocus:oe,handleTimeInputFocus:ue,handleDateInputBlur:ne,handleTimeInputBlur:ge}=E?d:v,Ie=re=>{oe(),i.value.allowInput==="overlay"&&(P.value=re.target)},Pe=re=>{ue(),i.value.allowInput==="overlay"&&(P.value=re.target)};return p("div",{class:`${w}-side`},[p(ve,ae({ref:E?x:void 0},I.value,{class:`${w}-date-input`,value:q.value,clearVisible:!!q.value&&!!i.value.allowInput,focused:Y.value,placeholder:l.value,readonly:!i.value.allowInput,onInput:N,onFocus:Ie,onBlur:ne,onKeydown:B,onClear:W}),n),A&&p(ve,ae(I.value,{class:`${w}-time-input`,value:z.value,clearVisible:!!z.value&&!!i.value.allowInput,focused:Q.value,placeholder:o.value,readonly:!i.value.allowInput,onInput:U,onFocus:Pe,onBlur:ge,onKeydown:B,onClear:M}),n)])};return()=>{const w=`${T.value}-overlay`,E=`${w}-inputs`,A={value:u.value,cellTooltip:t.cellTooltip,disabledDate:t.disabledDate,type:t.type,timePanelOptions:g.value,visible:C.value&&f.value,onChange:y,onSelect:t.onSelect},q={cell:n.cell,separator:i.value.enableOverlayDateInput?()=>p("div",{class:`${w}-separator`},null):void 0},z=[p("div",{class:`${w}-body`,tabindex:-1,onMousedown:F},[i.value.enableOverlayDateInput&&p("div",{class:E},[S(E,!0),p("div",{class:`${w}-separator`},[k()]),S(E,!1)]),p(tt,A,q)]),p(qe,{class:`${w}-footer`,footer:t.footer,okText:a.dateRangePicker.okText,okButton:{size:"xs",mode:"primary"},cancelVisible:!1,ok:V},n)];return t.overlayRender?t.overlayRender(z):p("div",{onMousedown:F},[z])}}}),Lt=j({inheritAttrs:!1,setup(e,{expose:t}){const a=ee(Ae),{accessor:n,props:l,locale:o,rangeControlContext:{fromControl:s,toControl:c},mergedPrefixCls:r,formatRef:m,inputRef:u,inputEnableStatus:f,renderSeparator:d}=a,v=le(),y=b(()=>{var C,k,h,x;return[(k=(C=l.placeholder)==null?void 0:C[0])!=null?k:o.dateRangePicker[`${l.type}Placeholder`][0],(x=(h=l.placeholder)==null?void 0:h[1])!=null?x:o.dateRangePicker[`${l.type}Placeholder`][1]]}),T=b(()=>Math.max(10,m.value.length)+2),i=C=>{s.handleInput(C),_(l.onInput,!0,C)},P=C=>{c.handleInput(C),_(l.onInput,!1,C)};t({focus:()=>{var C;(C=(f.value.allowInput==="overlay"?v:u).value)==null||C.focus()}});const B=C=>{const k=r.value,{inputValue:h}=C?s:c,x=y.value[C?0:1],V=C?i:P;return p("input",{ref:C?f.value.allowInput==="overlay"?v:u:void 0,class:`${k}-input-inner`,autocomplete:"off",disabled:n.disabled,placeholder:x,readonly:l.readonly||f.value.enableInput===!1,size:T.value,value:h.value,onInput:V},null)};return()=>p("div",{class:`${r.value}-input`},[B(!0),p("span",{class:`${r.value}-input-separator`},[d()]),B(!1)])}}),qt=j({name:"IxDateRangePicker",inheritAttrs:!1,props:$t,setup(e,{attrs:t,expose:a,slots:n}){const l=G("common"),o=G("locale"),{globalHashId:s,hashId:c,registerToken:r}=te("datePicker");r(he);const m=b(()=>`${l.prefixCls}-date-range-picker`),u=G("datePicker"),f=se(),d=le(),{elementRef:v,focus:y,blur:T}=_e();a({focus:y,blur:T});const{overlayOpened:i,overlayVisible:P,onAfterLeave:R,setOverlayOpened:B}=Ye(e),C=We(e,u),k=je(e,u),h=Qe(e,u,f,k.formatRef),{accessor:x,focused:V,handleFocus:F,handleBlur:I,handleChange:g}=h,S=Ht(f,k,C,De(x,"value"),De(e,"type")),w=dt(S,i,B,g),A={props:e,slots:n,common:l,locale:o,config:u,mergedPrefixCls:m,dateConfig:f,inputRef:v,inputEnableStatus:C,overlayOpened:i,overlayVisible:P,onAfterLeave:R,setOverlayOpened:B,rangeControlContext:S,renderSeparator:()=>{var N,U,W;return(W=(U=(N=n.separator)==null?void 0:N.call(n))!=null?U:e.separator)!=null?W:o.dateRangePicker.separator},handleKeyDown:w,...k,...h,handleFocus:F,handleBlur:I},q=Ge(A);Ve(Ae,A),K(i,N=>{var U;N?setTimeout(()=>{var W;V.value||(W=v.value)==null||W.focus()}):(S.init(!0),V.value&&((U=d.value)==null||U.focus()))});const z=()=>p(Lt,{ref:d},null),Y=()=>p(Nt,null,null),Q=b(()=>we([`${m.value}-overlay`,s.value,c.value,e.overlayClassName]));return()=>p(Ke,ae(q.value,{class:`${m.value} ${s.value} ${c.value}`,overlayClassName:Q.value},t),{default:z,overlay:Y,suffix:n.suffix,clearIcon:n.clearIcon})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Wt=Mt,Yt=et,Qt=qt,Gt=tt;export{Wt as I,Qt as a,Yt as b,Gt as c};
