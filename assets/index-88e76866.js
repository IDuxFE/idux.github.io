import{d as z,as as A,q as B,v as E,f as R,aW as q}from"./index-8aa71336.js";import{i as F,u as G}from"./useInput-e52213de.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=z({name:"IxInput",props:F,setup(e,{slots:o,expose:s}){const t=A("input"),{elementRef:l,accessor:a,mergedSize:r,mergedStatus:u,clearable:d,clearIcon:i,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:v,handleCompositionEnd:b,handleClear:C,syncValue:x}=G(e,t);s({focus:p,blur:m});const n=B();return E(()=>{l.value=n.value.getInputElement(),x()}),()=>{const{addonAfter:g,addonBefore:h,borderless:V,prefix:y,suffix:S}=e;return R(q,{ref:n,addonAfter:g,addonBefore:h,borderless:V,clearable:d.value,clearIcon:i.value,clearVisible:c.value,disabled:a.disabled,focused:f.value,prefix:y,readonly:e.readonly,size:r.value,status:u.value,suffix:S,value:a.value,onClear:C,onInput:I,onCompositionstart:v,onCompositionend:b},o)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=M;export{W as I};
