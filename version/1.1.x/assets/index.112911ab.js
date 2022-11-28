import{d as z,aD as C,c as L,aE as y,u as S,aC as j,b as B}from"./index.2ba5520c.js";import{v as P,e as I,y as a,F,i as G,p as E,z as N}from"./vendor.994f7e39.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O={header:String,footer:String,empty:String,borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},V={title:String,content:String,extra:String},k=P({name:"IxListItem",props:V,setup(r,{slots:e}){const{props:v,mergedPrefixCls:l}=G(h),d=I(()=>`${l.value}-item`),c=(t,n)=>{const i=t[n];if(typeof i=="number")return Math.floor(24/i)},p=t=>{const n=c(t,"column");return{xs:c(t,"xs")||n,sm:c(t,"sm")||n,md:c(t,"md")||n,ld:c(t,"lg")||n,xl:c(t,"xl")||n}};return()=>{var m,f,s,g,x;const t=v.grid&&p(v.grid),n=(f=r.title)!=null?f:(m=e.title)==null?void 0:m.call(e),i=(g=r.content)!=null?g:(s=e.default)==null?void 0:s.call(e),u=(x=e.extra)==null?void 0:x.call(e),o=a(F,null,[n&&a("div",{class:`${d.value}-title`},[n]),a("div",{class:`${d.value}-content`},[i]),u&&a("div",{class:`${d.value}-extra`},[u])]);return t?a(z,t,{default:()=>[o]}):a("div",{class:`${d.value}`},[o])}}}),w=P({name:"IxList",components:{IxSpin:C,IxButton:L,IxEmpty:y},props:O,setup(r,{slots:e}){const v=S("common"),l=I(()=>`${v.prefixCls}-list`),d=S("list");E(h,{props:r,mergedPrefixCls:l});const c=I(()=>typeof r.loading=="boolean"?{spinning:r.loading}:r.loading),p=I(()=>{var u,o;const t=l.value,n=(u=r.borderless)!=null?u:d.borderless,i=(o=r.size)!=null?o:d.size;return N({[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${i}`]:!0,[`${t}-border`]:!n})});return()=>{var o,m,f,s,g,x,$,b;const t=(m=r.header)!=null?m:(o=e.header)==null?void 0:o.call(e),n=(s=r.footer)!=null?s:(f=e.footer)==null?void 0:f.call(e),i=j((g=e.default)==null?void 0:g.call(e))?(x=e.default)==null?void 0:x.call(e):(b=($=e.empty)==null?void 0:$.call(e))!=null?b:a(y,{description:r.empty},null),u=()=>r.grid?a(B,{gutter:r.grid.gutter},{default:()=>[i]}):a("div",null,[i]);return a("div",{class:p.value},[t&&a("div",{class:`${l.value}-header`},[t]),a(C,c.value,{default:()=>[u()]}),n&&a("div",{class:`${l.value}-footer`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=k,T=w;export{T as I,R as a};
