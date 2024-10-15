import{T as z,ag as A}from"./index-b2ce1350.js";import{i as B,u as E}from"./useInput-d92065f4.js";import{m as R,r as F,n as G,v as M}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=R({name:"IxInput",props:B,setup(e,{slots:a,expose:s}){const t=z("input"),{elementRef:r,accessor:n,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:v,handleCompositionEnd:b,handleClear:C,syncValue:x}=E(e,t);s({focus:p,blur:m});const o=F();return G(()=>{r.value=o.value.getInputElement(),x()}),()=>{const{addonAfter:g,addonBefore:h,borderless:V,prefix:y,suffix:S}=e;return M(A,{ref:o,addonAfter:g,addonBefore:h,borderless:V,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:n.disabled,focused:f.value,prefix:y,readonly:e.readonly,size:l.value,status:u.value,suffix:S,value:n.value,onClear:C,onInput:I,onCompositionstart:v,onCompositionend:b},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=N;export{k as I};
