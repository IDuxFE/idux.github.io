import{e as C,L as I,ax as S,aq as h,ay as L,b as P}from"./index-9409c3e1.js";import{x as p,l as z,c as v,z as a,F as j,q as F,A as G}from"./vendor-5e807b09.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},q={title:String,content:String,extra:String},B=p({name:"IxListItem",props:q,setup(r,{slots:e}){const{props:x,mergedPrefixCls:s}=z(y),d=v(()=>`${s.value}-item`),o=(t,n)=>{const i=t[n];if(typeof i=="number")return Math.floor(24/i)},b=t=>{const n=o(t,"column");return{xs:o(t,"xs")||n,sm:o(t,"sm")||n,md:o(t,"md")||n,ld:o(t,"lg")||n,xl:o(t,"xl")||n}};return()=>{var u,f,m,g,$;const t=x.grid&&b(x.grid),n=(f=r.title)!=null?f:(u=e.title)==null?void 0:u.call(e),i=(g=r.content)!=null?g:(m=e.default)==null?void 0:m.call(e),c=($=e.extra)==null?void 0:$.call(e),l=a(j,null,[n&&a("div",{class:`${d.value}-title`},[n]),a("div",{class:`${d.value}-content`},[i]),c&&a("div",{class:`${d.value}-extra`},[c])]);return t?a(C,t,{default:()=>[l]}):a("div",{class:`${d.value}`},[l])}}}),N=p({name:"IxList",props:O,setup(r,{slots:e}){const x=I("common"),s=v(()=>`${x.prefixCls}-list`),d=I("list");F(y,{props:r,mergedPrefixCls:s});const o=v(()=>typeof r.loading=="boolean"?{spinning:r.loading}:r.loading),b=v(()=>{var c,l;const t=s.value,n=(c=r.borderless)!=null?c:d.borderless,i=(l=r.size)!=null?l:d.size;return G({[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${i}`]:!0,[`${t}-border`]:!n})});return()=>{var u,f,m,g;const t=(f=r.header)!=null?f:(u=e.header)==null?void 0:u.call(e),n=(g=r.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),i=e.default?e.default():[],c=S(i)?i:a(h,{empty:r.empty},e),l=()=>r.grid?a(P,{gutter:r.grid.gutter},{default:()=>[c]}):a("div",null,[c]);return a("div",{class:b.value},[t&&a("div",{class:`${s.value}-header`},[t]),a(L,o.value,{default:()=>[l()]}),n&&a("div",{class:`${s.value}-footer`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=B,A=N;export{A as I,w as a};
