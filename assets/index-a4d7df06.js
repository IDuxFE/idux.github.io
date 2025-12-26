import{d as C,i as y,c as b,f as r,F as S,l as h,as as $,at as P,a5 as L,bB as z,bq as j,bU as B,an as F,g as G}from"./index-200961bb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const p=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},T={title:String,content:String,extra:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const k=C({name:"IxListItem",props:T,setup(n,{slots:e}){const{props:v,mergedPrefixCls:x}=y(p),i=b(()=>`${x.value}-item`),o=(a,t)=>{const l=a[t];if(typeof l=="number")return Math.floor(24/l)},I=a=>{const t=o(a,"column");return{xs:o(a,"xs")||t,sm:o(a,"sm")||t,md:o(a,"md")||t,ld:o(a,"lg")||t,xl:o(a,"xl")||t}};return()=>{var d,u,f,m,g;const a=v.grid&&I(v.grid),t=(u=n.title)!=null?u:(d=e.title)==null?void 0:d.call(e),l=(m=n.content)!=null?m:(f=e.default)==null?void 0:f.call(e),s=(g=e.extra)==null?void 0:g.call(e),c=r(S,null,[t&&r("div",{class:`${i.value}-title`},[t]),r("div",{class:`${i.value}-content`},[l]),s&&r("div",{class:`${i.value}-extra`},[s])]);return a?r(h,a,{default:()=>[c]}):r("div",{class:`${i.value}`},[c])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=C({name:"IxList",props:O,setup(n,{slots:e}){const v=$("common"),{globalHashId:x}=P(),i=b(()=>`${v.prefixCls}-list`),o=$("list");L(p,{props:n,mergedPrefixCls:i});const I=b(()=>typeof n.loading=="boolean"?{spinning:n.loading}:n.loading),a=b(()=>{var c,d;const t=i.value,l=(c=n.borderless)!=null?c:o.borderless,s=(d=n.size)!=null?d:o.size;return F({[x.value]:!x.value,[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${s}`]:!0,[`${t}-border`]:!l})});return()=>{var u,f,m,g;const t=(f=n.header)!=null?f:(u=e.header)==null?void 0:u.call(e),l=(g=n.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),s=e.default?e.default():[],c=z(s)?s:r(j,{empty:n.empty},e),d=()=>n.grid?r(G,{gutter:n.grid.gutter},{default:()=>[c]}):r("div",null,[c]);return r("div",{class:a.value},[t&&r("div",{class:`${i.value}-header`},[t]),r(B,I.value,{default:()=>[d()]}),l&&r("div",{class:`${i.value}-footer`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=k,w=N;export{w as I,q as a};
