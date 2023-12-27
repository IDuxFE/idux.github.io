import{M as z,ad as A}from"./index-6cd2cabb.js";import{i as B,u as E}from"./useInput-e301324f.js";import{l as M,r as R,m as F,p as G}from"./vendor-4146ff73.js";const N=M({name:"IxInput",props:B,setup(e,{slots:a,expose:s}){const t=z("input"),{elementRef:r,accessor:o,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:p,isFocused:c,focus:f,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:C,syncValue:x}=E(e,t);s({focus:f,blur:m});const n=R();return F(()=>{r.value=n.value.getInputElement(),x()}),()=>{const{addonAfter:g,addonBefore:h,borderless:V,prefix:y,suffix:S}=e;return G(A,{ref:n,addonAfter:g,addonBefore:h,borderless:V,clearable:i.value,clearIcon:d.value,clearVisible:p.value,disabled:o.disabled,focused:c.value,prefix:y,readonly:e.readonly,size:l.value,status:u.value,suffix:S,value:o.value,onClear:C,onInput:I,onCompositionstart:b,onCompositionend:v},a)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=N;export{q as I};
