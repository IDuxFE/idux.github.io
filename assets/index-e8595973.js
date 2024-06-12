import{M as z,a9 as A}from"./index-2b2b2209.js";import{i as B,u as E}from"./useInput-00c68345.js";import{l as M,r as R,m as q,q as F}from"./vendor-fe119cfa.js";const G=M({name:"IxInput",props:B,setup(e,{slots:a,expose:s}){const t=z("input"),{elementRef:r,accessor:o,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:C,syncValue:x}=E(e,t);s({focus:p,blur:m});const n=R();return q(()=>{r.value=n.value.getInputElement(),x()}),()=>{const{addonAfter:g,addonBefore:h,borderless:V,prefix:y,suffix:S}=e;return F(A,{ref:n,addonAfter:g,addonBefore:h,borderless:V,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:o.disabled,focused:f.value,prefix:y,readonly:e.readonly,size:l.value,status:u.value,suffix:S,value:o.value,onClear:C,onInput:I,onCompositionstart:b,onCompositionend:v},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=G;export{k as I};
