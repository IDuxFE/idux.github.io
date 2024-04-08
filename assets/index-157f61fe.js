import{e as C,M as $,N as S,aE as h,av as P,aF as L,b as z}from"./index-55847558.js";import{l as p,y as j,c as b,q as a,F,D as G,p as N}from"./vendor-d701f15d.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},T={title:String,content:String,extra:String},k=p({name:"IxListItem",props:T,setup(n,{slots:e}){const{props:v,mergedPrefixCls:x}=j(y),i=b(()=>`${x.value}-item`),o=(r,t)=>{const l=r[t];if(typeof l=="number")return Math.floor(24/l)},I=r=>{const t=o(r,"column");return{xs:o(r,"xs")||t,sm:o(r,"sm")||t,md:o(r,"md")||t,ld:o(r,"lg")||t,xl:o(r,"xl")||t}};return()=>{var d,u,f,m,g;const r=v.grid&&I(v.grid),t=(u=n.title)!=null?u:(d=e.title)==null?void 0:d.call(e),l=(m=n.content)!=null?m:(f=e.default)==null?void 0:f.call(e),s=(g=e.extra)==null?void 0:g.call(e),c=a(F,null,[t&&a("div",{class:`${i.value}-title`},[t]),a("div",{class:`${i.value}-content`},[l]),s&&a("div",{class:`${i.value}-extra`},[s])]);return r?a(C,r,{default:()=>[c]}):a("div",{class:`${i.value}`},[c])}}}),B=p({name:"IxList",props:O,setup(n,{slots:e}){const v=$("common"),{globalHashId:x}=S(),i=b(()=>`${v.prefixCls}-list`),o=$("list");G(y,{props:n,mergedPrefixCls:i});const I=b(()=>typeof n.loading=="boolean"?{spinning:n.loading}:n.loading),r=b(()=>{var c,d;const t=i.value,l=(c=n.borderless)!=null?c:o.borderless,s=(d=n.size)!=null?d:o.size;return N({[x.value]:!x.value,[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${s}`]:!0,[`${t}-border`]:!l})});return()=>{var u,f,m,g;const t=(f=n.header)!=null?f:(u=e.header)==null?void 0:u.call(e),l=(g=n.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),s=e.default?e.default():[],c=h(s)?s:a(P,{empty:n.empty},e),d=()=>n.grid?a(z,{gutter:n.grid.gutter},{default:()=>[c]}):a("div",null,[c]);return a("div",{class:r.value},[t&&a("div",{class:`${i.value}-header`},[t]),a(L,I.value,{default:()=>[d()]}),l&&a("div",{class:`${i.value}-footer`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=k,q=B;export{q as I,V as a};
