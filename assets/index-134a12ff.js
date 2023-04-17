import{L as z,ac as A}from"./index-f61938a0.js";import{i as B,u as E}from"./useInput-dcbc737c.js";import{v as R,b as F,x as G,y as L}from"./vendor-2234ada1.js";const M=R({name:"IxInput",props:B,setup(e,{slots:n,expose:a}){const s=z("input"),{elementRef:t,accessor:r,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:x,syncValue:C}=E(e,s);a({focus:p,blur:m});const o=F();return G(()=>{t.value=o.value.getInputElement(),C()}),()=>{const{addonAfter:g,addonBefore:h,borderless:y,prefix:V,suffix:S}=e;return L(A,{ref:o,addonAfter:g,addonBefore:h,borderless:y,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:r.disabled,focused:f.value,prefix:V,size:l.value,status:u.value,suffix:S,onClear:x,readonly:e.readonly,onInput:I,onCompositionstart:b,onCompositionend:v},n)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=M;export{k as I};
