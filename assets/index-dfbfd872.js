import{b4 as I,d as U,as as w,at as _,c as r,an as y,v as q,x as J,f as h,af as K,$ as L}from"./index-2f15ff81.js";import{a as Q,u as W}from"./useInput-1d98a3da.js";import{u as X}from"./useAutoRows-c6c19e6f.js";/**
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
 */const Z={countBottom:e=>I(e,"px"),countRight:e=>I(e,"px")};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ee=(e,t)=>T(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=U({name:"IxTextarea",inheritAttrs:!1,props:Y,setup(e,{slots:t,expose:p,attrs:d}){const C=w("common"),{globalHashId:c,hashId:s,registerToken:f}=_("textarea");f(ee,Z);const i=r(()=>`${C.prefixCls}-textarea`),n=w("textarea"),{elementRef:m,accessor:u,mergedSize:$,mergedStatus:z,clearable:x,clearIcon:R,clearVisible:S,isFocused:P,isComposing:k,focus:B,blur:F,handleInput:N,handleCompositionStart:V,handleCompositionEnd:A,handleClear:D,syncValue:O}=W(e,n);p({focus:B,blur:F});const j=r(()=>{const{showCount:o=n.showCount}=e,l=z.value,a=i.value,v={[c.value]:c.value,[s.value]:s.value,[a]:!0,[`${a}-${$.value}`]:!0,[`${a}-${l}`]:!!l,[`${a}-clearable`]:x.value,[`${a}-disabled`]:u.disabled,[`${a}-focused`]:P.value,[`${a}-with-count`]:o};return y([v,d.class])}),E=oe(e,n,u),b=r(()=>{var o;return(o=e.autoRows)!=null?o:n.autoRows}),G=r(()=>{var l;const o=(l=e.resize)!=null?l:n.resize;return b.value?o==="horizontal"?"horizontal":"none":o}),H=r(()=>({resize:G.value})),{resizeToFitContent:g}=X(m,b);q(()=>{O(),J(()=>u.value,g,{immediate:!0})});const M=o=>{N(o),k.value&&g()};return()=>{const{class:o,style:l,...a}=d,v=i.value;return h("span",{class:j.value,style:l,"data-count":E.value},[h("textarea",K(a,{ref:m,class:`${v}-inner`,style:H.value,disabled:u.disabled,readonly:e.readonly,onInput:M,onCompositionstart:V,onCompositionend:A}),null),x.value&&h("span",{class:y([`${v}-clear`,S.value?"visible":""]),onClick:D},[t.clearIcon?t.clearIcon():h(L,{name:R.value},null)])])}}});function oe(e,t,p){return r(()=>{var f,i,n,m;const d=(f=e.showCount)!=null?f:t.showCount,C=(i=e.computeCount)!=null?i:t.computeCount,c=(n=e.maxCount)!=null?n:t.maxCount;let s="";if(d){const u=(m=p.value)!=null?m:"";s=u.length,C?s=C(u):c&&(s+=" / "+c)}return s})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=te;export{ue as I};
