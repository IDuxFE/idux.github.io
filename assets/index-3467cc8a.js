import{d as z,as as b,at as I,c as u,a4 as W,bg as M,an as p,f as d,bj as A,R as D,$ as F,bk as X,g as T,m as w,bl as E,af as O,j as R,i as V}from"./index-88a96bc2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=Symbol("cardToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U={borderless:{type:Boolean,default:void 0},cover:[String,Object],header:[String,Object],hoverable:{type:Boolean,default:void 0},shadow:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},size:String,footer:Array,disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},"onUpdate:selected":[Function,Array],onSelectedChange:[Function,Array]},q={hoverable:{type:Boolean,default:void 0}};/**
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
 */const G=(e,a,l)=>a==="default"?x(e,l):J(e,l);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=z({name:"IxCard",props:U,setup(e,{slots:a}){const l=b("common"),{globalHashId:o,hashId:n,registerToken:r}=I("card");r(G);const i=u(()=>`${l.prefixCls}-card`),c=b("card"),f=u(()=>{var t;return(t=e.hoverable)!=null?t:c.hoverable});W(B,{hoverable:f});const[s,g]=M(e,"selected",!1),v=u(()=>e.disabled),h=u(()=>e.selectable),P=()=>{if(v.value||!h.value)return;const t=!s.value;g(t),D(e.onSelectedChange,t)};return()=>{var $,k;const t=i.value,{borderless:j=c.borderless,loading:H,size:S=c.size,shadow:L=c.shadow}=e,C=(k=($=a.default)==null?void 0:$.call(a))!=null?k:[],m=C.some(y=>y.type&&y.type.name==="IxCardGrid"),N=p({[o.value]:!!o.value,[n.value]:!!n.value,[t]:!0,[`${t}-borderless`]:j,[`${t}-hoverable`]:!m&&f.value,[`${t}-loading`]:H,[`${t}-has-shadow`]:L,[`${t}-has-grid`]:m,[`${t}-${S}`]:!0,[`${t}-selectable`]:h.value,[`${t}-selected`]:h.value&&s.value,[`${t}-disabled`]:v.value});return d("div",{class:N,onClick:P},[Y(e,a,t),d(A,{size:S,header:e.header},a),Z(e,C,m,t),ae(e,a,t),Q(e,t)])}}}),Q=(e,a)=>{if(u(()=>{var o;return(o=e.selectable)!=null?o:!1}).value)return d("div",{class:`${a}-mark-wrap`},[d("div",{class:`${a}-mark`},null),d(F,{name:"check-filled",class:`${a}-mark-icon`,color:"white"},null)])},Y=(e,a,l)=>{let o;if(a.cover)o=a.cover();else if(e.cover){const{cover:n}=e,r=X(n)?{src:n}:n;o=d("img",r,null)}return o?d("div",{class:`${l}-cover`},[o]):void 0},Z=(e,a,l,o)=>{let n;return e.loading?n=ee(o):a.length&&(n=l?d(T,null,{default:()=>[a]}):a),n?d("div",{class:`${o}-body`},[n]):void 0},_=[[22],[8,15],[6,18],[13,9],[4,3,16],[8,6,8]],ee=e=>{const a=_.map(l=>{const o=l.map(n=>d(w,{span:n,class:`${e}-loading-col`},{default:()=>[d("div",{class:`${e}-loading-block`},null)]}));return d(T,null,{default:()=>[o]})});return d("div",{class:`${e}-loading`},[a])},ae=(e,a,l)=>{if(!a.footer&&!e.footer)return;let o;return a.footer?o=a.footer():o=e.footer.map(n=>{let r;if(E(n))r=n;else{const{text:i,...c}=n;r=d(R,O({class:`${l}-footer-button`,waveless:!0},c),{default:()=>[i]})}return r?d("li",null,[r]):null}),d("ul",{class:`${l}-footer`},[o])};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=z({name:"IxCardGrid",props:q,setup(e,{slots:a}){const l=b("common"),{globalHashId:o,hashId:n,registerToken:r}=I("card");r(G);const i=u(()=>`${l.prefixCls}-card-grid`),{hoverable:c}=V(B),f=u(()=>{var g;const s=i.value;return p({[o.value]:!!o.value,[n.value]:!!n.value,[s]:!0,[`${s}-hoverable`]:(g=e.hoverable)!=null?g:c.value})});return()=>d(w,{class:f.value},{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a)]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const le=K,te=oe;export{le as I,te as a};
