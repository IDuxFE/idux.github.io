import{L as h,A as E}from"./index-8bc6cdd3.js";import{a as G,u as L}from"./useInput-ed6e3240.js";import{u as M}from"./useAutoRows-08401d00.js";import{v as O,f as s,x as _,w as q,y as C,a2 as H,z as w}from"./vendor-50817465.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J={...G,autoRows:{type:[Boolean,Object],default:void 0},computeCount:{type:Function,default:void 0},maxCount:{type:[Number,String],default:void 0},resize:{type:String,default:void 0},showCount:{type:Boolean,default:void 0}},K=O({name:"IxTextarea",inheritAttrs:!1,props:J,setup(e,{slots:n,expose:f,attrs:r}){const c=h("common"),u=s(()=>`${c.prefixCls}-textarea`),t=h("textarea"),{elementRef:l,accessor:i,mergedSize:y,mergedStatus:b,clearable:v,clearIcon:z,clearVisible:I,isFocused:$,isComposing:g,focus:R,blur:S,handleInput:P,handleCompositionStart:T,handleCompositionEnd:A,handleClear:F,syncValue:N}=L(e,t);f({focus:R,blur:S});const V=s(()=>{const{showCount:a=t.showCount}=e,m=b.value,o=u.value,d={[o]:!0,[`${o}-${y.value}`]:!0,[`${o}-${m}`]:!!m,[`${o}-clearable`]:v.value,[`${o}-disabled`]:i.disabled,[`${o}-focused`]:$.value,[`${o}-with-count`]:a};return w([d,r.class])}),B=Q(e,t,i),p=s(()=>e.autoRows??t.autoRows),j=s(()=>{const a=e.resize??t.resize;return p.value?a==="horizontal"?"horizontal":"none":a}),k=s(()=>({resize:j.value})),{resizeToFitContent:x}=M(l,p);_(()=>{N(),q(()=>i.value,x,{immediate:!0})});const D=a=>{P(a),g.value&&x()};return()=>{const{class:a,style:m,...o}=r,d=u.value;return C("span",{class:V.value,style:m,"data-count":B.value},[C("textarea",H(o,{ref:l,class:`${d}-inner`,style:k.value,disabled:i.disabled,readonly:e.readonly,onInput:D,onCompositionstart:T,onCompositionend:A}),null),v.value&&C("span",{class:w([`${d}-clear`,I.value?"visible":""]),onClick:F},[n.clearIcon?n.clearIcon():C(E,{name:z.value},null)])])}}});function Q(e,n,f){return s(()=>{const r=e.showCount??n.showCount,c=e.computeCount??n.computeCount,u=e.maxCount??n.maxCount;let t="";if(r){const l=f.value??"";t=l.length,c?t=c(l):u&&(t+=" / "+u)}return t})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=K;export{Z as I};