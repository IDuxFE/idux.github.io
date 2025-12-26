import{b4 as y,d as U,as as I,at as _,c as r,v as q,x as J,f as h,af as K,an as w,$ as L}from"./index-200961bb.js";import{a as Q,u as W}from"./useInput-7049aeb1.js";import{u as X}from"./useAutoRows-cd0022d5.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y={...Q,autoRows:{type:[Boolean,Object],default:void 0},computeCount:{type:Function,default:void 0},maxCount:{type:[Number,String],default:void 0},resize:{type:String,default:void 0},showCount:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function T(e){const{colorTextPlaceholder:t}=e;return{countBottom:1,countRight:8,countOpacity:.9,countColor:t}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z={countBottom:e=>y(e,"px"),countRight:e=>y(e,"px")};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ee=(e,t)=>T(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=U({name:"IxTextarea",inheritAttrs:!1,props:Y,setup(e,{slots:t,expose:x,attrs:m}){const C=I("common"),{globalHashId:c,hashId:u,registerToken:f}=_("textarea");f(ee,Z);const i=r(()=>`${C.prefixCls}-textarea`),n=I("textarea"),{elementRef:d,accessor:s,mergedSize:$,mergedStatus:z,clearable:p,clearIcon:R,clearVisible:S,isFocused:P,isComposing:k,focus:B,blur:F,handleInput:N,handleCompositionStart:V,handleCompositionEnd:A,handleClear:D,syncValue:O}=W(e,n);x({focus:B,blur:F});const j=r(()=>{const{showCount:o=n.showCount}=e,l=z.value,a=i.value,v={[c.value]:c.value,[u.value]:u.value,[a]:!0,[`${a}-${$.value}`]:!0,[`${a}-${l}`]:!!l,[`${a}-clearable`]:p.value,[`${a}-disabled`]:s.disabled,[`${a}-focused`]:P.value,[`${a}-with-count`]:o};return w([v,m.class])}),E=oe(e,n,s),b=r(()=>{var o;return(o=e.autoRows)!=null?o:n.autoRows}),G=r(()=>{var l;const o=(l=e.resize)!=null?l:n.resize;return b.value?o==="horizontal"?"horizontal":"none":o}),H=r(()=>({resize:G.value})),{resizeToFitContent:g}=X(d,b);q(()=>{O(),J(()=>s.value,g,{immediate:!0})});const M=o=>{N(o),k.value&&g()};return()=>{const{class:o,style:l,...a}=m,v=i.value;return h("span",{class:j.value,style:l,"data-count":E.value},[h("textarea",K(a,{ref:d,class:`${v}-inner`,style:H.value,disabled:s.disabled,readonly:e.readonly,"aria-disabled":String(!!s.disabled),"aria-readonly":String(!!e.readonly),onInput:M,onCompositionstart:V,onCompositionend:A}),null),p.value&&h("span",{class:w([`${v}-clear`,S.value?"visible":""]),role:"button","aria-label":"clear",onClick:D},[t.clearIcon?t.clearIcon():h(L,{name:R.value},null)])])}}});function oe(e,t,x){return r(()=>{var f,i,n,d;const m=(f=e.showCount)!=null?f:t.showCount,C=(i=e.computeCount)!=null?i:t.computeCount,c=(n=e.maxCount)!=null?n:t.maxCount;let u="";if(m){const s=(d=x.value)!=null?d:"";u=s.length,C?u=C(s):c&&(u+=" / "+c)}return u})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=te;export{ue as I};
