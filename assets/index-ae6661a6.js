import{ao as I,T,U as H,t as M}from"./index-65f16f37.js";import{a as _,u as J}from"./useInput-621b0a62.js";import{u as K}from"./useAutoRows-e8f56f17.js";import{m as L,c as r,q as b,n as Q,w as W,v as h,a7 as X}from"./vendor-97d35b92.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y={..._,autoRows:{type:[Boolean,Object],default:void 0},computeCount:{type:Function,default:void 0},maxCount:{type:[Number,String],default:void 0},resize:{type:String,default:void 0},showCount:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function y(e){const{colorTextPlaceholder:t}=e;return{countBottom:1,countRight:8,countOpacity:.9,countColor:t}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z={countBottom:e=>I(e,"px"),countRight:e=>I(e,"px")};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ee=(e,t)=>y(e),te=L({name:"IxTextarea",inheritAttrs:!1,props:Y,setup(e,{slots:t,expose:p,attrs:d}){const C=T("common"),{globalHashId:c,hashId:s,registerToken:f}=H("textarea");f(ee,Z);const i=r(()=>`${C.prefixCls}-textarea`),n=T("textarea"),{elementRef:m,accessor:u,mergedSize:z,mergedStatus:$,clearable:x,clearIcon:R,clearVisible:S,isFocused:P,isComposing:k,focus:B,blur:F,handleInput:N,handleCompositionStart:V,handleCompositionEnd:A,handleClear:D,syncValue:O}=J(e,n);p({focus:B,blur:F});const U=r(()=>{const{showCount:o=n.showCount}=e,l=$.value,a=i.value,v={[c.value]:c.value,[s.value]:s.value,[a]:!0,[`${a}-${z.value}`]:!0,[`${a}-${l}`]:!!l,[`${a}-clearable`]:x.value,[`${a}-disabled`]:u.disabled,[`${a}-focused`]:P.value,[`${a}-with-count`]:o};return b([v,d.class])}),j=oe(e,n,u),g=r(()=>{var o;return(o=e.autoRows)!=null?o:n.autoRows}),q=r(()=>{var l;const o=(l=e.resize)!=null?l:n.resize;return g.value?o==="horizontal"?"horizontal":"none":o}),E=r(()=>({resize:q.value})),{resizeToFitContent:w}=K(m,g);Q(()=>{O(),W(()=>u.value,w,{immediate:!0})});const G=o=>{N(o),k.value&&w()};return()=>{const{class:o,style:l,...a}=d,v=i.value;return h("span",{class:U.value,style:l,"data-count":j.value},[h("textarea",X(a,{ref:m,class:`${v}-inner`,style:E.value,disabled:u.disabled,readonly:e.readonly,onInput:G,onCompositionstart:V,onCompositionend:A}),null),x.value&&h("span",{class:b([`${v}-clear`,S.value?"visible":""]),onClick:D},[t.clearIcon?t.clearIcon():h(M,{name:R.value},null)])])}}});function oe(e,t,p){return r(()=>{var f,i,n,m;const d=(f=e.showCount)!=null?f:t.showCount,C=(i=e.computeCount)!=null?i:t.computeCount,c=(n=e.maxCount)!=null?n:t.maxCount;let s="";if(d){const u=(m=p.value)!=null?m:"";s=u.length,C?s=C(u):c&&(s+=" / "+c)}return s})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const le=te;export{le as I};
