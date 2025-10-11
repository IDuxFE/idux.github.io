import{d as C,i as p,c as b,f as r,F as y,l as h,as as $,at as P,a5 as L,bA as z,bq as j,bS as F,an as G,g as O}from"./index-068e057b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},k={title:String,content:String,extra:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B=C({name:"IxListItem",props:k,setup(n,{slots:e}){const{props:v,mergedPrefixCls:x}=p(S),i=b(()=>`${x.value}-item`),o=(a,t)=>{const l=a[t];if(typeof l=="number")return Math.floor(24/l)},I=a=>{const t=o(a,"column");return{xs:o(a,"xs")||t,sm:o(a,"sm")||t,md:o(a,"md")||t,ld:o(a,"lg")||t,xl:o(a,"xl")||t}};return()=>{var d,u,f,m,g;const a=v.grid&&I(v.grid),t=(u=n.title)!=null?u:(d=e.title)==null?void 0:d.call(e),l=(m=n.content)!=null?m:(f=e.default)==null?void 0:f.call(e),s=(g=e.extra)==null?void 0:g.call(e),c=r(y,null,[t&&r("div",{class:`${i.value}-title`},[t]),r("div",{class:`${i.value}-content`},[l]),s&&r("div",{class:`${i.value}-extra`},[s])]);return a?r(h,a,{default:()=>[c]}):r("div",{class:`${i.value}`},[c])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=C({name:"IxList",props:T,setup(n,{slots:e}){const v=$("common"),{globalHashId:x}=P(),i=b(()=>`${v.prefixCls}-list`),o=$("list");L(S,{props:n,mergedPrefixCls:i});const I=b(()=>typeof n.loading=="boolean"?{spinning:n.loading}:n.loading),a=b(()=>{var c,d;const t=i.value,l=(c=n.borderless)!=null?c:o.borderless,s=(d=n.size)!=null?d:o.size;return G({[x.value]:!x.value,[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${s}`]:!0,[`${t}-border`]:!l})});return()=>{var u,f,m,g;const t=(f=n.header)!=null?f:(u=e.header)==null?void 0:u.call(e),l=(g=n.footer)!=null?g:(m=e.footer)==null?void 0:m.call(e),s=e.default?e.default():[],c=z(s)?s:r(j,{empty:n.empty},e),d=()=>n.grid?r(O,{gutter:n.grid.gutter},{default:()=>[c]}):r("div",null,[c]);return r("div",{class:a.value},[t&&r("div",{class:`${i.value}-header`},[t]),r(F,I.value,{default:()=>[d()]}),l&&r("div",{class:`${i.value}-footer`},[l])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=B,w=N;export{w as I,q as a};
