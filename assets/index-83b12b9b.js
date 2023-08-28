import{L as S,ac as A}from"./index-c3e0f9d9.js";import{i as B,u as E}from"./useInput-b7f96a23.js";import{x as R,r as F,y as G,z as L}from"./vendor-2973971e.js";const M=R({name:"IxInput",props:B,setup(e,{slots:a,expose:s}){const t=S("input"),{elementRef:r,accessor:o,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:x,syncValue:C}=E(e,t);s({focus:p,blur:m});const n=F();return G(()=>{r.value=n.value.getInputElement(),C()}),()=>{const{addonAfter:g,addonBefore:h,borderless:y,prefix:V,suffix:z}=e;return L(A,{ref:n,addonAfter:g,addonBefore:h,borderless:y,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:o.disabled,focused:f.value,prefix:V,readonly:e.readonly,size:l.value,status:u.value,suffix:z,value:o.value,onClear:x,onInput:I,onCompositionstart:b,onCompositionend:v},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=M;export{k as I};
