import{e as y,T as $,U as S,aL as h,aC as L,aM as P,b as z}from"./index-aefa1c8c.js";import{m as C,z as j,c as b,v as a,F as T,E as F,q as G}from"./vendor-8437ffb6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const p=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},k={title:String,content:String,extra:String},B=C({name:"IxListItem",props:k,setup(n,{slots:e}){const{props:v,mergedPrefixCls:x}=j(p),i=b(()=>`${x.value}-item`),o=(r,t)=>{const c=r[t];if(typeof c=="number")return Math.floor(24/c)},I=r=>{const t=o(r,"column");return{xs:o(r,"xs")||t,sm:o(r,"sm")||t,md:o(r,"md")||t,ld:o(r,"lg")||t,xl:o(r,"xl")||t}};return()=>{var d,u,f,m,g;const r=v.grid&&I(v.grid),t=(u=n.title)!=null?u:(d=e.title)==null?void 0:d.call(e),c=(m=n.content)!=null?m:(f=e.default)==null?void 0:f.call(e),s=(g=e.extra)==null?void 0:g.call(e),l=a(T,null,[t&&a("div",{class:`${i.value}-title`},[t]),a("div",{class:`${i.value}-content`},[c]),s&&a("div",{class:`${i.value}-extra`},[s])]);return r?a(y,r,{default:()=>[l]}):a("div",{class:`${i.value}`},[l])}}}),E=C({name:"IxList",props:O,setup(n,{slots:e}){const v=$("common"),{globalHashId:x}=S(),i=b(()=>`${v.prefixCls}-list`),o=$("list");F(p,{props:n,mergedPrefixCls:i});const I=b(()=>typeof n.loading=="boolean"?{spinning:n.loading}:n.loading),r=b(()=>{var l,d;const t=i.value,c=(l=n.borderless)!=null?l:o.borderless,s=(d=n.size)!=null?d:o.size;return G({[x.value]:!x.value,[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${s}`]:!0,[`${t}-border`]:!c})});return()=>{var u,f,m,g;const t=(f=n.header)!=null?f:(u=e.header)==null?void 0:u.call(e),c=(g=n.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),s=e.default?e.default():[],l=h(s)?s:a(L,{empty:n.empty},e),d=()=>n.grid?a(z,{gutter:n.grid.gutter},{default:()=>[l]}):a("div",null,[l]);return a("div",{class:r.value},[t&&a("div",{class:`${i.value}-header`},[t]),a(P,I.value,{default:()=>[d()]}),c&&a("div",{class:`${i.value}-footer`},[c])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=B,q=E;export{q as I,V as a};
