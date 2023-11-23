import{M as z,ae as A}from"./index-a1eb659d.js";import{i as B,u as E}from"./useInput-6d5b8b3a.js";import{l as M,r as R,m as F,n as G}from"./vendor-4aa48d2c.js";const N=M({name:"IxInput",props:B,setup(e,{slots:a,expose:s}){const t=z("input"),{elementRef:r,accessor:n,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:C,syncValue:x}=E(e,t);s({focus:p,blur:m});const o=R();return F(()=>{r.value=o.value.getInputElement(),x()}),()=>{const{addonAfter:g,addonBefore:h,borderless:V,prefix:y,suffix:S}=e;return G(A,{ref:o,addonAfter:g,addonBefore:h,borderless:V,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:n.disabled,focused:f.value,prefix:y,readonly:e.readonly,size:l.value,status:u.value,suffix:S,value:n.value,onClear:C,onInput:I,onCompositionstart:b,onCompositionend:v},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=N;export{q as I};
