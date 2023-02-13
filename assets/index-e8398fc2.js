import{d as I,u as b,aw as y,ap as C,ax as S,b as h}from"./index-42aa140a.js";import{v as p,i as P,e as g,y as a,F as z,p as L,z as j}from"./vendor-6c4e542b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F={header:String,footer:String,empty:{type:[String,Object],default:"default"},borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},G={title:String,content:String,extra:String},O=p({name:"IxListItem",props:G,setup(r,{slots:e}){const{props:f,mergedPrefixCls:d}=P($),c=g(()=>`${d.value}-item`),o=(t,n)=>{const i=t[n];if(typeof i=="number")return Math.floor(24/i)},v=t=>{const n=o(t,"column");return{xs:o(t,"xs")||n,sm:o(t,"sm")||n,md:o(t,"md")||n,ld:o(t,"lg")||n,xl:o(t,"xl")||n}};return()=>{var s,u,x;const t=f.grid&&v(f.grid),n=r.title??((s=e.title)==null?void 0:s.call(e)),i=r.content??((u=e.default)==null?void 0:u.call(e)),l=(x=e.extra)==null?void 0:x.call(e),m=a(z,null,[n&&a("div",{class:`${c.value}-title`},[n]),a("div",{class:`${c.value}-content`},[i]),l&&a("div",{class:`${c.value}-extra`},[l])]);return t?a(I,t,{default:()=>[m]}):a("div",{class:`${c.value}`},[m])}}}),w=p({name:"IxList",props:F,setup(r,{slots:e}){const f=b("common"),d=g(()=>`${f.prefixCls}-list`),c=b("list");L($,{props:r,mergedPrefixCls:d});const o=g(()=>typeof r.loading=="boolean"?{spinning:r.loading}:r.loading),v=g(()=>{const t=d.value,n=r.borderless??c.borderless,i=r.size??c.size;return j({[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${i}`]:!0,[`${t}-border`]:!n})});return()=>{var s,u;const t=r.header??((s=e.header)==null?void 0:s.call(e)),n=r.footer??((u=e.footer)==null?void 0:u.call(e)),i=e.default?e.default():[],l=y(i)?i:a(C,{empty:r.empty},e),m=()=>r.grid?a(h,{gutter:r.grid.gutter},{default:()=>[l]}):a("div",null,[l]);return a("div",{class:v.value},[t&&a("div",{class:`${d.value}-header`},[t]),a(S,o.value,{default:()=>[m()]}),n&&a("div",{class:`${d.value}-footer`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V=O,k=w;export{k as I,V as a};
