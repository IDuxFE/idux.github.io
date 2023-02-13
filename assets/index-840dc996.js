import{u as v,ac as P,am as z,i as N,v as j,b as C,d as y,c as A}from"./index-42aa140a.js";import{v as S,e as c,p as F,z as x,y as r,l as O,n as T,a2 as V,i as D}from"./vendor-6c4e542b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E={borderless:{type:Boolean,default:void 0},cover:[String,Object],header:[String,Object],hoverable:{type:Boolean,default:void 0},shadow:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},size:String,footer:Array,disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},"onUpdate:selected":[Function,Array],onSelectedChange:[Function,Array]},H={hoverable:{type:Boolean,default:void 0}},L=S({name:"IxCard",props:E,setup(e,{slots:a}){const t=v("common"),l=c(()=>`${t.prefixCls}-card`),o=v("card"),s=c(()=>e.hoverable??o.hoverable);F(I,{hoverable:s});const[d,i]=P(e,"selected",!1),m=c(()=>e.disabled),u=c(()=>e.selectable),p=()=>{if(m.value||!u.value)return;const n=!d.value;i(n),N(e.onSelectedChange,n)};return()=>{var h;const n=l.value,{borderless:B=o.borderless,loading:k,size:b=o.size,shadow:w}=e,g=((h=a.default)==null?void 0:h.call(a))??[],f=g.some($=>$.type&&$.type.name==="IxCardGrid"),G=x({[n]:!0,[`${n}-borderless`]:B,[`${n}-hoverable`]:!f&&s.value,[`${n}-loading`]:k,[`${n}-has-shadow`]:w,[`${n}-has-grid`]:f,[`${n}-${b}`]:!0,[`${n}-selectable`]:u.value,[`${n}-selected`]:u.value&&d.value,[`${n}-disabled`]:m.value});return r("div",{class:G,onClick:p},[R(e,a,n),r(z,{size:b,header:e.header},a),U(e,g,f,n),K(e,a,n),M(e,n)])}}}),M=(e,a)=>{if(c(()=>e.selectable??!1).value)return r("div",{class:`${a}-mark-wrap`},[r("div",{class:`${a}-mark`},null),r(j,{name:"success",class:`${a}-mark-icon`,color:"white"},null)])},R=(e,a,t)=>{let l;if(a.cover)l=a.cover();else if(e.cover){const{cover:o}=e,s=O(o)?{src:o}:o;l=r("img",s,null)}return l?r("div",{class:`${t}-cover`},[l]):void 0},U=(e,a,t,l)=>{let o;return e.loading?o=J(l):a.length&&(o=t?r(C,null,{default:()=>[a]}):a),o?r("div",{class:`${l}-body`},[o]):void 0},q=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],J=e=>{const a=q.map(t=>{const l=t.map(o=>r(y,{span:o,class:`${e}-loading-col`},{default:()=>[r("div",{class:`${e}-loading-block`},null)]}));return r(C,null,{default:()=>[l]})});return r("div",{class:`${e}-loading`},[a])},K=(e,a,t)=>{if(!a.footer&&!e.footer)return;let l;return a.footer?l=a.footer():l=e.footer.map(o=>{let s;if(T(o))s=o;else{const{text:d,...i}=o;s=r(A,V({waveless:!0},i),{default:()=>[d]})}return s?r("li",null,[s]):null}),r("ul",{class:`${t}-footer`},[l])},Q=S({name:"IxCardGrid",props:H,setup(e,{slots:a}){const t=v("common"),l=c(()=>`${t.prefixCls}-card-grid`),{hoverable:o}=D(I),s=c(()=>{const d=l.value;return x({[d]:!0,[`${d}-hoverable`]:e.hoverable??o.value})});return()=>r(y,{class:s.value},{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=L,Z=Q;export{Y as I,Z as a};