import{L as M,m as S,S as Y,aC as k,aD as q,ak as B,aE as z,al as $,u as L,A as H}from"./index-baf87496.js";import{l as T,aH as _,aI as K,aJ as Q,aK as R,aL as G,aM as U,aN as j,aO as p,aP as J,aQ as X,aR as Z,aS as ee,aT as ne,aU as ae,aV as te,aW as se,aX as re,aY as le,aE as ue,aZ as ce,aF as oe,a_ as ie,a$ as de,aB as fe,b0 as me,b1 as ve,b2 as he,b3 as ge,b4 as be,b5 as ye,aD as Se,b6 as Ce,b7 as Pe,b8 as Ae,b9 as Oe,ba as De,bb as we,bc as xe,bd as ke,be as Me,bf as Te,bg as Ve,ay as Fe,d as Be,f as $e,bh as He,bi as Ie,x as O,c as C,z as h,r as V,Q as Ne,G as D,w as E,q as Ee,a3 as We,y as Ye,O as qe,A as ze}from"./vendor-96982764.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=Symbol("DATE_CONFIG_TOKEN");let w;function _e(){const e=T(Le,null);return e||(w||(w=Ke()),w)}function Ke(){const e=M("locale"),t=()=>new Date,c=(n,a)=>Ie(n,a,t(),{locale:e.date});return{now:t,weekStartsOn:()=>{var n,a;return(a=(n=e.date.options)==null?void 0:n.weekStartsOn)!=null?a:1},get:(n,a)=>{switch(a){case"year":return J(n);case"quarter":return p(n);case"month":return j(n);case"week":return U(n,{locale:e.date});case"date":return G(n);case"day":return R(n);case"hour":return Q(n);case"minute":return K(n);case"second":return _(n)}},set:(n,a,s)=>{switch(s){case"year":return le(n,a);case"quarter":return re(n,a);case"month":return se(n,a);case"week":return te(n,a,{locale:e.date});case"date":return ae(n,a);case"day":return ne(n,a,{locale:e.date});case"hour":return ee(n,a);case"minute":return Z(n,a);case"second":return X(n,a)}},add:(n,a,s)=>{switch(s){case"year":return de(n,a);case"quarter":return ie(n,a);case"month":return oe(n,a);case"week":return ce(n,a);case"date":case"day":return ue(n,a)}},startOf:(n,a)=>{switch(a){case"year":return ge(n);case"quarter":return he(n);case"month":return ve(n);case"week":return me(n,{locale:e.date});case"date":case"day":return fe(n)}},endOf:(n,a)=>{switch(a){case"year":return Pe(n);case"quarter":return Ce(n);case"month":return Se(n);case"week":return ye(n,{locale:e.date});case"date":case"day":return be(n)}},isSame:(n,a,s)=>{switch(s){case"year":return Te(n,a);case"quarter":return Me(n,a);case"month":return ke(n,a);case"week":return xe(n,a,{locale:e.date});case"date":case"day":return we(n,a);case"hour":return De(n,a);case"minute":return Oe(n,a);case"second":return Ae(n,a)}},isValid:n=>Ve(n),format:(n,a)=>Fe(n,a,{locale:e.date}),parse:c,convert:(n,a)=>Be(n)?t():$e(n)?c(n,a):He(n),getLocalizedLabels:(n,a,s)=>{const d=e.date.localize;switch(n){case"month":return Array.from({length:a}).map((m,l)=>d.month(l,{width:s}));case"day":return Array.from({length:a}).map((m,l)=>d.day(l,{width:s}));case"dayPeriod":return Array.from({length:a}).map((m,l)=>d.dayPeriod(l,{width:s}))}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=Symbol("timePanelContext");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Qe={disabledHours:{type:Function,default:()=>[]},disabledMinutes:{type:Function,default:()=>[]},disabledSeconds:{type:Function,default:()=>[]},hideDisabledOptions:{type:Boolean,default:!1},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1}},Re={...Qe,value:Date,activeValue:Date,visible:{type:Boolean,default:!1},hourEnabled:{type:Boolean,default:!0},minuteEnabled:{type:Boolean,default:!0},secondEnabled:{type:Boolean,default:!0},use12Hours:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],"onUpdate:activeValue":[Function,Array],onChange:[Function,Array]},Ge={selectedValue:[String,Number],activeValue:{type:[String,Number],required:!0},options:{type:Array,require:!0},visible:{type:Boolean,default:!1},onActiveChange:[Function,Array]},Ue={disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},value:{type:[String,Number],required:!0},onActive:[Function,Array]},je=O({props:Ue,setup(e){const{mergedPrefixCls:t}=T(F),c=C(()=>{const s=`${t.value}-cell`;return{[s]:!0,[`${s}-disabled`]:e.disabled,[`${s}-selected`]:e.selected}}),n=s=>{s.stopPropagation(),!e.disabled&&!e.selected&&S(e.onActive,{value:e.value,disabled:e.disabled})},a=C(()=>pe(e.value));return()=>h("li",{class:c.value,onClick:n},[a.value])}});function pe(e){return Y(e)?e.toString().padStart(2,"0"):e}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Je(e,t,c,n){const a=C(()=>{var l,u;return(u=(l=e.options)==null?void 0:l.findIndex(o=>o.value===e.activeValue))!=null?u:-1});return{handleWheel:l=>{var o;if(l.preventDefault(),l.shiftKey||!t.value||!e.options||a.value>=e.options.length)return;const u=(o=e.options)==null?void 0:o[a.value+(l.deltaY>0?1:-1)];u&&S(e.onActiveChange,u)},handleClick:l=>{var o,f;const u=(o=t.value)==null?void 0:o.children;if(u){l.preventDefault();for(let r=0;r<u.length;r++){const v=u[r].getBoundingClientRect().y,i=(f=u[r+1])==null?void 0:f.getBoundingClientRect().y;if(v<l.clientY&&(!i||i>l.clientY)){u[r].dispatchEvent(new Event("click"));return}}}},handleScroll:()=>{if(n.value)return;const l=c();l&&S(e.onActiveChange,l)}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Xe(e,t,c){const{frameRunning:n,scrollTo:a}=Ze(t),s=()=>{var u,o,f;return(f=(o=(u=t.value)==null?void 0:u.querySelector(`li.${c.value}-cell`))==null?void 0:o.offsetHeight)!=null?f:0},d=(u,o=200)=>{const f=t.value;if(!f)return;const r=Math.max(u*s(),0);r!==k(f).scrollTop&&a(r,o)};return{adjustPanel:d,scrollToActive:u=>{const o=e.options.findIndex(f=>f.value===e.activeValue);d(o,u)},getTargetByScrollTop:()=>{const u=t.value;if(!u)return;const o=Math.min(Math.round(k(u).scrollTop/s()),e.options.length-1);return e.options[o]},frameRunning:n}}function Ze(e){const t=V(!1);let c,n,a,s,d;const m=o=>{if(!e.value)return;const f=o>s?s:o,r=n-a,v=z(f,a,r,s);e.value.scrollTop=v},l=()=>{q(c),c=B(()=>{t.value=!0;const o=Date.now()-d;m(o),o<s?l():(n=0,s=0,d=0,B(()=>{t.value=!1}))})};return{frameRunning:t,scrollTo:(o,f=100)=>{e.value&&(s=f,n=o,a=k(e.value).scrollTop,t.value||(d=Date.now()),l())}}}const en=O({props:Ge,setup(e){const{mergedPrefixCls:t}=T(F),c=V(void 0),{scrollToActive:n,getTargetByScrollTop:a,frameRunning:s}=Xe(e,c,t);function d(i){S(e.onActiveChange,i)}function m(){n()}const{handleWheel:l,handleClick:u,handleScroll:o}=Je(e,c,a,s),f=i=>{i.preventDefault()};let r=!1;const v=()=>{r=!0,o(),D(()=>{r=!1})};return Ne(()=>{e.visible&&D(()=>n(0))}),E(()=>e.activeValue,()=>{!r&&D(n)}),()=>h("div",{class:`${t.value}-column`,onMouseleave:m,onMouseenter:m,onWheel:l,onClick:u},[h("ul",{ref:c,class:`${t.value}-column-inner`,onScroll:v,onWheel:f},[e.options.map((i,g)=>{const{disabled:b,value:y}=i;return h(je,{key:g,disabled:b,selected:e.selectedValue===y,value:y,onActive:d},null)})])])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function W(e,t=!1){if(t)return e>=12?"pm":"am"}function I(e,t){return t&&(e>12&&(e-=12),e===0&&(e=12)),e}function N(e,t){return t&&(t=t.toLowerCase(),t==="am"&&e>=12&&(e-=12),t==="pm"&&e<12&&(e+=12)),e}function nn(e,t,c,n,a){const{get:s,set:d}=e,m=Number(a),l=new Date(t);switch(c){case"hour":return d(l,N(m,W(s(t,"hour"),n)),"hour");case"minute":return d(l,m,"minute");case"second":return d(l,m,"second");case"AM/PM":return d(l,N(s(l,"hour"),a.toString()),"hour")}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function an(e,t){const{get:c}=t,[n,a]=$(e,"activeValue",()=>t.now()),[s,d]=$(e,"value"),m=C(()=>s.value&&I(c(s.value,"hour"),e.use12Hours)),l=i=>i&&W(c(i,"hour"),e.use12Hours),u=C(()=>l(s.value));function o(i){const g=()=>{const b=x(e.use12Hours?12:24,e.hourStep,e.disabledHours(u.value),e.hideDisabledOptions);if(e.use12Hours){const y=b.find(P=>P.value===0);y&&(y.value=12)}return b};switch(i){case"AM/PM":return tn("",e.hideDisabledOptions);case"second":return x(60,e.secondStep,e.disabledSeconds(m.value,s.value&&c(s.value,"minute"),u.value),e.hideDisabledOptions);case"minute":return x(60,e.minuteStep,e.disabledMinutes(m.value,u.value),e.hideDisabledOptions);case"hour":return g();default:return[]}}function f(i,g){switch(g){case"AM/PM":return l(i);case"hour":default:return I(c(i,"hour"),e.use12Hours);case"minute":return c(i,"minute");case"second":return c(i,"second")}}function r(i){const g=(b,y)=>{var A;const P=nn(t,(A=s.value)!=null?A:n.value,b,e.use12Hours,y.value);a(P),y.disabled||(d(P),S(e.onChange,P))};return b=>g(i,b)}const v=i=>C(()=>({activeValue:f(n.value,i),selectedValue:s.value&&f(s.value,i),options:o(i),onActiveChange:r(i)}));return{hourOptionsProps:v("hour"),minuteOptionsProps:v("minute"),secondOptionsProps:v("second"),amPmOptionsProps:v("AM/PM")}}function x(e,t,c,n){const a=[];for(let s=0;s<e;s+=t){const d=c.includes(s);(!d||!n)&&a.push({value:s,disabled:d})}return a}function tn(e,t){return e=e.toLowerCase(),["am","pm"].map(c=>({disabled:e===c,value:c})).filter(c=>!t||!c.disabled)}const sn=O({name:"ɵTimePanel",props:Re,setup(e){const t=M("common"),c=C(()=>`${t.prefixCls}-time-panel`),n=_e(),{hourOptionsProps:a,minuteOptionsProps:s,secondOptionsProps:d,amPmOptionsProps:m}=an(e,n);Ee(F,{mergedPrefixCls:c});const l=C(()=>{const u=[];return e.hourEnabled&&u.push(a.value),e.minuteEnabled&&u.push(s.value),e.secondEnabled&&u.push(d.value),e.use12Hours&&u.push(m.value),u});return()=>h("div",{class:`${c.value}`},[l.value.map((u,o)=>h(en,We({key:o},u,{visible:e.visible}),null))])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const on=sn;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const rn={borderless:Boolean,clearable:Boolean,clearIcon:String,className:String,disabled:Boolean,focused:Boolean,readonly:Boolean,size:String,status:String,suffix:String,onClick:[Array,Function],onClear:[Array,Function],onFocus:[Array,Function],onBlur:[Array,Function],onKeyDown:[Array,Function]},ln=O({props:rn,setup(e,{slots:t}){const c=M("common"),n=C(()=>`${c.prefixCls}-trigger`),a=L(),s=V();Ye(()=>{E(a.monitor(s.value,!0),r=>{const{origin:v,event:i}=r;i&&(v?S(e.onFocus,i):S(e.onBlur,i))})}),qe(()=>a.stopMonitoring(s.value));const d=C(()=>{const r=n.value,{className:v,size:i,status:g,borderless:b,disabled:y,focused:P,readonly:A}=e;return ze({[`${v}`]:!!v,[r]:!0,[`${r}-${i}`]:!0,[`${r}-${g}`]:!!g,[`${r}-borderless`]:b,[`${r}-disabled`]:y,[`${r}-focused`]:P,[`${r}-readonly`]:A})}),m=r=>{e.disabled||S(e.onClick,r)},l=r=>{e.disabled||S(e.onKeyDown,r)},u=r=>{e.disabled||(r.stopPropagation(),S(e.onClear,r))},o=()=>{var r,v;return t.suffix||e.suffix?h("div",{class:`${n.value}-suffix`},[(v=(r=t.suffix)==null?void 0:r.call(t))!=null?v:e.suffix&&h(H,{name:e.suffix},null)]):null},f=()=>!e.clearable||e.disabled||!e.clearIcon&&!t.clearIcon?null:h("span",{class:`${n.value}-clear-icon`,onClick:u},[t.clearIcon?t.clearIcon():e.clearIcon&&h(H,{name:e.clearIcon},null)]);return()=>{var r;return h("div",{ref:s,class:d.value,onClick:m,onKeydown:l},[(r=t.default)==null?void 0:r.call(t),o(),f()])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const dn=ln;export{Le as D,dn as a,Qe as b,I as c,W as n,_e as u,on as ɵ};
