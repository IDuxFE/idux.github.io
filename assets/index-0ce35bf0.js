import{L as v,am as z,ao as A,m as N,A as j,b as y,e as S,c as F}from"./index-3710a49b.js";import{x,c,q as L,A as I,z as r,f as O,j as T,a3 as V,l as q}from"./vendor-1d4f43eb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D={borderless:{type:Boolean,default:void 0},cover:[String,Object],header:[String,Object],hoverable:{type:Boolean,default:void 0},shadow:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},size:String,footer:Array,disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},"onUpdate:selected":[Function,Array],onSelectedChange:[Function,Array]},E={hoverable:{type:Boolean,default:void 0}},H=x({name:"IxCard",props:D,setup(e,{slots:a}){const t=v("common"),l=c(()=>`${t.prefixCls}-card`),o=v("card"),d=c(()=>{var n;return(n=e.hoverable)!=null?n:o.hoverable});L(k,{hoverable:d});const[s,i]=z(e,"selected",!1),m=c(()=>e.disabled),u=c(()=>e.selectable),B=()=>{if(m.value||!u.value)return;const n=!s.value;i(n),N(e.onSelectedChange,n)};return()=>{var h,$;const n=l.value,{borderless:w=o.borderless,loading:p,size:b=o.size,shadow:G=o.shadow}=e,g=($=(h=a.default)==null?void 0:h.call(a))!=null?$:[],f=g.some(C=>C.type&&C.type.name==="IxCardGrid"),P=I({[n]:!0,[`${n}-borderless`]:w,[`${n}-hoverable`]:!f&&d.value,[`${n}-loading`]:p,[`${n}-has-shadow`]:G,[`${n}-has-grid`]:f,[`${n}-${b}`]:!0,[`${n}-selectable`]:u.value,[`${n}-selected`]:u.value&&s.value,[`${n}-disabled`]:m.value});return r("div",{class:P,onClick:B},[R(e,a,n),r(A,{size:b,header:e.header},a),U(e,g,f,n),Q(e,a,n),M(e,n)])}}}),M=(e,a)=>{if(c(()=>{var l;return(l=e.selectable)!=null?l:!1}).value)return r("div",{class:`${a}-mark-wrap`},[r("div",{class:`${a}-mark`},null),r(j,{name:"check-filled",class:`${a}-mark-icon`,color:"white"},null)])},R=(e,a,t)=>{let l;if(a.cover)l=a.cover();else if(e.cover){const{cover:o}=e,d=O(o)?{src:o}:o;l=r("img",d,null)}return l?r("div",{class:`${t}-cover`},[l]):void 0},U=(e,a,t,l)=>{let o;return e.loading?o=K(l):a.length&&(o=t?r(y,null,{default:()=>[a]}):a),o?r("div",{class:`${l}-body`},[o]):void 0},J=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],K=e=>{const a=J.map(t=>{const l=t.map(o=>r(S,{span:o,class:`${e}-loading-col`},{default:()=>[r("div",{class:`${e}-loading-block`},null)]}));return r(y,null,{default:()=>[l]})});return r("div",{class:`${e}-loading`},[a])},Q=(e,a,t)=>{if(!a.footer&&!e.footer)return;let l;return a.footer?l=a.footer():l=e.footer.map(o=>{let d;if(T(o))d=o;else{const{text:s,...i}=o;d=r(F,V({class:`${t}-footer-button`,waveless:!0},i),{default:()=>[s]})}return d?r("li",null,[d]):null}),r("ul",{class:`${t}-footer`},[l])},W=x({name:"IxCardGrid",props:E,setup(e,{slots:a}){const t=v("common"),l=c(()=>`${t.prefixCls}-card-grid`),{hoverable:o}=q(k),d=c(()=>{var i;const s=l.value;return I({[s]:!0,[`${s}-hoverable`]:(i=e.hoverable)!=null?i:o.value})});return()=>r(S,{class:d.value},{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=H,_=W;export{Z as I,_ as a};
