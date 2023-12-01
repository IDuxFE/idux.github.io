import{e as y,M as $,N as S,aF as h,av as P,aG as L,b as z}from"./index-c73ba825.js";import{l as p,x as j,c as b,p as a,F,B as G,n as B}from"./vendor-deae6a9f.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const C=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},O={title:String,content:String,extra:String},T=p({name:"IxListItem",props:O,setup(n,{slots:e}){const{props:v,mergedPrefixCls:x}=j(C),i=b(()=>`${x.value}-item`),o=(r,t)=>{const l=r[t];if(typeof l=="number")return Math.floor(24/l)},I=r=>{const t=o(r,"column");return{xs:o(r,"xs")||t,sm:o(r,"sm")||t,md:o(r,"md")||t,ld:o(r,"lg")||t,xl:o(r,"xl")||t}};return()=>{var d,u,f,m,g;const r=v.grid&&I(v.grid),t=(u=n.title)!=null?u:(d=e.title)==null?void 0:d.call(e),l=(m=n.content)!=null?m:(f=e.default)==null?void 0:f.call(e),s=(g=e.extra)==null?void 0:g.call(e),c=a(F,null,[t&&a("div",{class:`${i.value}-title`},[t]),a("div",{class:`${i.value}-content`},[l]),s&&a("div",{class:`${i.value}-extra`},[s])]);return r?a(y,r,{default:()=>[c]}):a("div",{class:`${i.value}`},[c])}}}),k=p({name:"IxList",props:N,setup(n,{slots:e}){const v=$("common"),{globalHashId:x}=S(),i=b(()=>`${v.prefixCls}-list`),o=$("list");G(C,{props:n,mergedPrefixCls:i});const I=b(()=>typeof n.loading=="boolean"?{spinning:n.loading}:n.loading),r=b(()=>{var c,d;const t=i.value,l=(c=n.borderless)!=null?c:o.borderless,s=(d=n.size)!=null?d:o.size;return B({[x.value]:!x.value,[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${s}`]:!0,[`${t}-border`]:!l})});return()=>{var u,f,m,g;const t=(f=n.header)!=null?f:(u=e.header)==null?void 0:u.call(e),l=(g=n.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),s=e.default?e.default():[],c=h(s)?s:a(P,{empty:n.empty},e),d=()=>n.grid?a(z,{gutter:n.grid.gutter},{default:()=>[c]}):a("div",null,[c]);return a("div",{class:r.value},[t&&a("div",{class:`${i.value}-header`},[t]),a(L,I.value,{default:()=>[d()]}),l&&a("div",{class:`${i.value}-footer`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=T,E=k;export{E as I,w as a};
