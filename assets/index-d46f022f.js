import{L as y,A as E}from"./index-c8a1b625.js";import{a as G,u as L}from"./useInput-ad1571b4.js";import{u as M}from"./useAutoRows-1d07c395.js";import{v as O,f as l,x as _,w as q,y as p,a2 as H,z as b}from"./vendor-3e7796bf.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J={...G,autoRows:{type:[Boolean,Object],default:void 0},computeCount:{type:Function,default:void 0},maxCount:{type:[Number,String],default:void 0},resize:{type:String,default:void 0},showCount:{type:Boolean,default:void 0}},K=O({name:"IxTextarea",inheritAttrs:!1,props:J,setup(e,{slots:u,expose:x,attrs:m}){const d=y("common"),r=l(()=>`${d.prefixCls}-textarea`),t=y("textarea"),{elementRef:c,accessor:n,mergedSize:C,mergedStatus:f,clearable:i,clearIcon:z,clearVisible:I,isFocused:$,isComposing:g,focus:R,blur:S,handleInput:P,handleCompositionStart:T,handleCompositionEnd:A,handleClear:F,syncValue:N}=L(e,t);x({focus:R,blur:S});const V=l(()=>{const{showCount:o=t.showCount}=e,s=f.value,a=r.value,v={[a]:!0,[`${a}-${C.value}`]:!0,[`${a}-${s}`]:!!s,[`${a}-clearable`]:i.value,[`${a}-disabled`]:n.disabled,[`${a}-focused`]:$.value,[`${a}-with-count`]:o};return b([v,m.class])}),B=Q(e,t,n),h=l(()=>{var o;return(o=e.autoRows)!=null?o:t.autoRows}),j=l(()=>{var s;const o=(s=e.resize)!=null?s:t.resize;return h.value?o==="horizontal"?"horizontal":"none":o}),k=l(()=>({resize:j.value})),{resizeToFitContent:w}=M(c,h);_(()=>{N(),q(()=>n.value,w,{immediate:!0})});const D=o=>{P(o),g.value&&w()};return()=>{const{class:o,style:s,...a}=m,v=r.value;return p("span",{class:V.value,style:s,"data-count":B.value},[p("textarea",H(a,{ref:c,class:`${v}-inner`,style:k.value,disabled:n.disabled,readonly:e.readonly,onInput:D,onCompositionstart:T,onCompositionend:A}),null),i.value&&p("span",{class:b([`${v}-clear`,I.value?"visible":""]),onClick:F},[u.clearIcon?u.clearIcon():p(E,{name:z.value},null)])])}}});function Q(e,u,x){return l(()=>{var c,n,C,f;const m=(c=e.showCount)!=null?c:u.showCount,d=(n=e.computeCount)!=null?n:u.computeCount,r=(C=e.maxCount)!=null?C:u.maxCount;let t="";if(m){const i=(f=x.value)!=null?f:"";t=i.length,d?t=d(i):r&&(t+=" / "+r)}return t})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=K;export{Z as I};
