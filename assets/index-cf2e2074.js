import{T as b,U as k,av as j,ay as M,m as A,t as D,b as p,e as I,c as E}from"./index-57842767.js";import{m as T,c as u,E as F,q as w,v as d,f as X,j as O,a7 as U,z as V}from"./vendor-95ed6e76.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q={borderless:{type:Boolean,default:void 0},cover:[String,Object],header:[String,Object],hoverable:{type:Boolean,default:void 0},shadow:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},size:String,footer:Array,disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},"onUpdate:selected":[Function,Array],onSelectedChange:[Function,Array]},R={hoverable:{type:Boolean,default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function x(e,a){const{getGreyColors:l}=a,{fontSizeSm:o,fontSizeMd:n,fontSizeXl:r,fontSizeLg:i,marginSizeXs:c,paddingSizeSm:f,paddingSizeLg:s,paddingSizeXl:g}=e,v=l();return{fontSizeSm:o,fontSizeMd:o,fontSizeLg:n,paddingSizeSm:s,paddingSizeMd:s,paddingSizeLg:g,showShadowBorderWidth:0,markWidth:r,markHeight:i,headerPadding:f,loadingSpacing:c,loadingHeight:n,loadingBgSize:"600%",loadingStartColor:v.l40,loadingEndColor:v.l30,gridWidth:"25%"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function J(e,a){const{lineWidth:l}=e;return{...x(e,a),showShadowBorderWidth:l}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=(e,a,l)=>a==="default"?x(e,l):J(e,l),K=T({name:"IxCard",props:q,setup(e,{slots:a}){const l=b("common"),{globalHashId:o,hashId:n,registerToken:r}=k("card");r(G);const i=u(()=>`${l.prefixCls}-card`),c=b("card"),f=u(()=>{var t;return(t=e.hoverable)!=null?t:c.hoverable});F(B,{hoverable:f});const[s,g]=j(e,"selected",!1),v=u(()=>e.disabled),h=u(()=>e.selectable),P=()=>{if(v.value||!h.value)return;const t=!s.value;g(t),A(e.onSelectedChange,t)};return()=>{var $,y;const t=i.value,{borderless:H=c.borderless,loading:L,size:S=c.size,shadow:N=c.shadow}=e,C=(y=($=a.default)==null?void 0:$.call(a))!=null?y:[],m=C.some(z=>z.type&&z.type.name==="IxCardGrid"),W=w({[o.value]:!!o.value,[n.value]:!!n.value,[t]:!0,[`${t}-borderless`]:H,[`${t}-hoverable`]:!m&&f.value,[`${t}-loading`]:L,[`${t}-has-shadow`]:N,[`${t}-has-grid`]:m,[`${t}-${S}`]:!0,[`${t}-selectable`]:h.value,[`${t}-selected`]:h.value&&s.value,[`${t}-disabled`]:v.value});return d("div",{class:W,onClick:P},[Y(e,a,t),d(M,{size:S,header:e.header},a),Z(e,C,m,t),ae(e,a,t),Q(e,t)])}}}),Q=(e,a)=>{if(u(()=>{var o;return(o=e.selectable)!=null?o:!1}).value)return d("div",{class:`${a}-mark-wrap`},[d("div",{class:`${a}-mark`},null),d(D,{name:"check-filled",class:`${a}-mark-icon`,color:"white"},null)])},Y=(e,a,l)=>{let o;if(a.cover)o=a.cover();else if(e.cover){const{cover:n}=e,r=X(n)?{src:n}:n;o=d("img",r,null)}return o?d("div",{class:`${l}-cover`},[o]):void 0},Z=(e,a,l,o)=>{let n;return e.loading?n=ee(o):a.length&&(n=l?d(p,null,{default:()=>[a]}):a),n?d("div",{class:`${o}-body`},[n]):void 0},_=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],ee=e=>{const a=_.map(l=>{const o=l.map(n=>d(I,{span:n,class:`${e}-loading-col`},{default:()=>[d("div",{class:`${e}-loading-block`},null)]}));return d(p,null,{default:()=>[o]})});return d("div",{class:`${e}-loading`},[a])},ae=(e,a,l)=>{if(!a.footer&&!e.footer)return;let o;return a.footer?o=a.footer():o=e.footer.map(n=>{let r;if(O(n))r=n;else{const{text:i,...c}=n;r=d(E,U({class:`${l}-footer-button`,waveless:!0},c),{default:()=>[i]})}return r?d("li",null,[r]):null}),d("ul",{class:`${l}-footer`},[o])},oe=T({name:"IxCardGrid",props:R,setup(e,{slots:a}){const l=b("common"),{globalHashId:o,hashId:n,registerToken:r}=k("card");r(G);const i=u(()=>`${l.prefixCls}-card-grid`),{hoverable:c}=V(B),f=u(()=>{var g;const s=i.value;return w({[o.value]:!!o.value,[n.value]:!!n.value,[s]:!0,[`${s}-hoverable`]:(g=e.hoverable)!=null?g:c.value})});return()=>d(I,{class:f.value},{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=K,de=oe;export{te as I,de as a};
