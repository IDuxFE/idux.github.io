import{u as S,E as z}from"./index-42aa140a.js";import{i as A,u as B}from"./useInput-6810619e.js";import{v as R,b as F,x as G,y as M}from"./vendor-6c4e542b.js";const N=R({name:"IxInput",props:A,setup(e,{slots:n,expose:a}){const s=S("input"),{elementRef:t,accessor:r,mergedSize:l,mergedStatus:u,clearable:i,clearIcon:d,clearVisible:c,isFocused:f,focus:p,blur:m,handleInput:I,handleCompositionStart:b,handleCompositionEnd:v,handleClear:x,syncValue:C}=B(e,s);a({focus:p,blur:m});const o=F();return G(()=>{t.value=o.value.getInputElement(),C()}),()=>{const{addonAfter:g,addonBefore:h,borderless:y,prefix:V,suffix:E}=e;return M(z,{ref:o,addonAfter:g,addonBefore:h,borderless:y,clearable:i.value,clearIcon:d.value,clearVisible:c.value,disabled:r.disabled,focused:f.value,prefix:V,size:l.value,status:u.value,suffix:E,onClear:x,readonly:e.readonly,onInput:I,onCompositionstart:b,onCompositionend:v},n)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=N;export{q as I};
