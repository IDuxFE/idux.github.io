import{u as h,v as E}from"./index-32d407ed.js";import{a as G,u as M}from"./useInput-5bdc582b.js";import{u as O}from"./useAutoRows-589ea576.js";import{v as _,e as s,x as q,w as H,y as C,a2 as J,z as w}from"./vendor-730bc5d6.js";const K={...G,autoRows:{type:[Boolean,Object],default:void 0},computeCount:{type:Function,default:void 0},maxCount:{type:[Number,String],default:void 0},resize:{type:String,default:void 0},showCount:{type:Boolean,default:void 0}},L=_({name:"IxTextarea",inheritAttrs:!1,props:K,setup(e,{slots:n,expose:v,attrs:r}){const c=h("common"),u=s(()=>`${c.prefixCls}-textarea`),t=h("textarea"),{elementRef:l,accessor:i,mergedSize:y,mergedStatus:b,clearable:f,clearIcon:z,clearVisible:I,isFocused:$,isComposing:g,focus:R,blur:S,handleInput:P,handleCompositionStart:T,handleCompositionEnd:F,handleClear:N,syncValue:V}=M(e,t);v({focus:R,blur:S});const A=s(()=>{const{showCount:a=t.showCount}=e,m=b.value,o=u.value,d={[o]:!0,[`${o}-${y.value}`]:!0,[`${o}-${m}`]:!!m,[`${o}-clearable`]:f.value,[`${o}-disabled`]:i.disabled,[`${o}-focused`]:$.value,[`${o}-with-count`]:a};return w([d,r.class])}),B=Q(e,t,i),p=s(()=>e.autoRows??t.autoRows),j=s(()=>{const a=e.resize??t.resize;return p.value?a==="horizontal"?"horizontal":"none":a}),k=s(()=>({resize:j.value})),{resizeToFitContent:x}=O(l,p);q(()=>{V(),H(()=>i.value,x,{immediate:!0})});const D=a=>{P(a),g.value&&x()};return()=>{const{class:a,style:m,...o}=r,d=u.value;return C("span",{class:A.value,style:m,"data-count":B.value},[C("textarea",J(o,{ref:l,class:`${d}-inner`,style:k.value,disabled:i.disabled,readonly:e.readonly,onInput:D,onCompositionstart:T,onCompositionend:F}),null),f.value&&C("span",{class:w([`${d}-clear`,I.value?"visible":""]),onClick:N},[n.clearIcon?n.clearIcon():C(E,{name:z.value},null)])])}}});function Q(e,n,v){return s(()=>{const r=e.showCount??n.showCount,c=e.computeCount??n.computeCount,u=e.maxCount??n.maxCount;let t="";if(r){const l=v.value??"";t=l.length,c?t=c(l):u&&(t+=" / "+u)}return t})}const Z=L;export{Z as I};
