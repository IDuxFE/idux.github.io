import{M as m,N as p,aq as j,as as A,m as F,A as W,b as I,e as B,c as X}from"./index-a1eb659d.js";import{l as x,c as u,B as D,p as w,n as d,f as O,j as V,ab as q,x as E}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R={borderless:{type:Boolean,default:void 0},cover:[String,Object],header:[String,Object],hoverable:{type:Boolean,default:void 0},shadow:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},size:String,footer:Array,disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},"onUpdate:selected":[Function,Array],onSelectedChange:[Function,Array]},U={hoverable:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function k(e){const{fontSizeSm:a,fontSizeMd:t,fontSizeXl:o,fontSizeLg:n,marginSizeXs:r,paddingSizeSm:i,paddingSizeLg:s,paddingSizeXl:f}=e;return{fontSizeSm:a,fontSizeMd:a,fontSizeLg:t,paddingSizeSm:s,paddingSizeMd:s,paddingSizeLg:f,showShadowBorderWidth:0,markWidth:o,markHeight:n,headerPadding:i,loadingSpacing:r,loadingHeight:t,loadingBgSize:"600%",gridWidth:"25%"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=(e,a)=>k(e),J=x({name:"IxCard",props:R,setup(e,{slots:a}){const t=m("common"),{globalHashId:o,hashId:n,registerToken:r}=p("card");r(P);const i=u(()=>`${t.prefixCls}-card`),s=m("card"),f=u(()=>{var l;return(l=e.hoverable)!=null?l:s.hoverable});D(T,{hoverable:f});const[c,g]=j(e,"selected",!1),b=u(()=>e.disabled),v=u(()=>e.selectable),G=()=>{if(b.value||!v.value)return;const l=!c.value;g(l),F(e.onSelectedChange,l)};return()=>{var C,z;const l=i.value,{borderless:N=s.borderless,loading:H,size:S=s.size,shadow:L=s.shadow}=e,$=(z=(C=a.default)==null?void 0:C.call(a))!=null?z:[],h=$.some(y=>y.type&&y.type.name==="IxCardGrid"),M=w({[o.value]:!!o.value,[n.value]:!!n.value,[l]:!0,[`${l}-borderless`]:N,[`${l}-hoverable`]:!h&&f.value,[`${l}-loading`]:H,[`${l}-has-shadow`]:L,[`${l}-has-grid`]:h,[`${l}-${S}`]:!0,[`${l}-selectable`]:v.value,[`${l}-selected`]:v.value&&c.value,[`${l}-disabled`]:b.value});return d("div",{class:M,onClick:G},[Q(e,a,l),d(A,{size:S,header:e.header},a),Y(e,$,h,l),ee(e,a,l),K(e,l)])}}}),K=(e,a)=>{if(u(()=>{var o;return(o=e.selectable)!=null?o:!1}).value)return d("div",{class:`${a}-mark-wrap`},[d("div",{class:`${a}-mark`},null),d(W,{name:"check-filled",class:`${a}-mark-icon`,color:"white"},null)])},Q=(e,a,t)=>{let o;if(a.cover)o=a.cover();else if(e.cover){const{cover:n}=e,r=O(n)?{src:n}:n;o=d("img",r,null)}return o?d("div",{class:`${t}-cover`},[o]):void 0},Y=(e,a,t,o)=>{let n;return e.loading?n=_(o):a.length&&(n=t?d(I,null,{default:()=>[a]}):a),n?d("div",{class:`${o}-body`},[n]):void 0},Z=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],_=e=>{const a=Z.map(t=>{const o=t.map(n=>d(B,{span:n,class:`${e}-loading-col`},{default:()=>[d("div",{class:`${e}-loading-block`},null)]}));return d(I,null,{default:()=>[o]})});return d("div",{class:`${e}-loading`},[a])},ee=(e,a,t)=>{if(!a.footer&&!e.footer)return;let o;return a.footer?o=a.footer():o=e.footer.map(n=>{let r;if(V(n))r=n;else{const{text:i,...s}=n;r=d(X,q({class:`${t}-footer-button`,waveless:!0},s),{default:()=>[i]})}return r?d("li",null,[r]):null}),d("ul",{class:`${t}-footer`},[o])},ae=x({name:"IxCardGrid",props:U,setup(e,{slots:a}){const t=m("common"),{globalHashId:o,hashId:n,registerToken:r}=p("card");r(P);const i=u(()=>`${t.prefixCls}-card-grid`),{hoverable:s}=E(T),f=u(()=>{var g;const c=i.value;return w({[o.value]:!!o.value,[n.value]:!!n.value,[c]:!0,[`${c}-hoverable`]:(g=e.hoverable)!=null?g:s.value})});return()=>d(B,{class:f.value},{default:()=>{var c;return[(c=a.default)==null?void 0:c.call(a)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const le=J,de=ae;export{le as I,de as a};
