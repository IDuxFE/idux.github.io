import{d as z,c as L,aD as C,u as y,aC as j,b as B}from"./index.3f21dce0.js";import{v as P,e as I,y as a,F,i as G,p as N,z as O}from"./vendor.0e7da6ec.js";import{I as S}from"./index.bb89acd9.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=Symbol("list");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V={header:String,footer:String,empty:String,borderless:{type:Boolean,default:void 0},loading:{type:[Boolean,Object],default:!1},size:String,grid:Object},k={title:String,content:String,extra:String},w=P({name:"IxListItem",props:k,setup(r,{slots:e}){const{props:v,mergedPrefixCls:l}=G(h),d=I(()=>`${l.value}-item`),o=(t,n)=>{const i=t[n];if(typeof i=="number")return Math.floor(24/i)},p=t=>{const n=o(t,"column");return{xs:o(t,"xs")||n,sm:o(t,"sm")||n,md:o(t,"md")||n,ld:o(t,"lg")||n,xl:o(t,"xl")||n}};return()=>{var m,f,s,g,x;const t=v.grid&&p(v.grid),n=(f=r.title)!=null?f:(m=e.title)==null?void 0:m.call(e),i=(g=r.content)!=null?g:(s=e.default)==null?void 0:s.call(e),u=(x=e.extra)==null?void 0:x.call(e),c=a(F,null,[n&&a("div",{class:`${d.value}-title`},[n]),a("div",{class:`${d.value}-content`},[i]),u&&a("div",{class:`${d.value}-extra`},[u])]);return t?a(z,t,{default:()=>[c]}):a("div",{class:`${d.value}`},[c])}}}),D=P({name:"IxList",components:{IxSpin:S,IxButton:L,IxEmpty:C},props:V,setup(r,{slots:e}){const v=y("common"),l=I(()=>`${v.prefixCls}-list`),d=y("list");N(h,{props:r,mergedPrefixCls:l});const o=I(()=>typeof r.loading=="boolean"?{spinning:r.loading}:r.loading),p=I(()=>{var u,c;const t=l.value,n=(u=r.borderless)!=null?u:d.borderless,i=(c=r.size)!=null?c:d.size;return O({[`${t}`]:!0,[`${t}-split`]:!0,[`${t}-${i}`]:!0,[`${t}-border`]:!n})});return()=>{var c,m,f,s,g,x,$,b;const t=(m=r.header)!=null?m:(c=e.header)==null?void 0:c.call(e),n=(s=r.footer)!=null?s:(f=e.footer)==null?void 0:f.call(e),i=j((g=e.default)==null?void 0:g.call(e))?(x=e.default)==null?void 0:x.call(e):(b=($=e.empty)==null?void 0:$.call(e))!=null?b:a(C,{description:r.empty},null),u=()=>r.grid?a(B,{gutter:r.grid.gutter},{default:()=>[i]}):a("div",null,[i]);return a("div",{class:p.value},[t&&a("div",{class:`${l.value}-header`},[t]),a(S,o.value,{default:()=>[u()]}),n&&a("div",{class:`${l.value}-footer`},[n])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=w,q=D;export{q as I,T as a};
