import{u as f,af as d,ag as y,ab as x}from"./index-b887bcb8.js";import{v as N,e as r,y as i}from"./vendor-4521613a.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h={count:{type:[String,Number],default:0},showZero:{type:Boolean,default:void 0},overflowCount:Number,dot:{type:Boolean,default:void 0},color:String},B=N({name:"IxBadge",props:h,setup(e,{slots:o}){const u=f("common"),n=r(()=>`${u.prefixCls}-badge`),t=f("badge"),c=r(()=>e.showZero??t.showZero),a=r(()=>e.dot??t.dot),m=r(()=>e.overflowCount??t.overflowCount),g=r(()=>d(o)),l=r(()=>d(o,"count")),b=k(e,g,l,c,a,n),C=Z(e,l,a),$=V(e,l,c,a,m);return()=>{var s,v;const w=n.value;return i("span",{class:`${w}-wrapper`},[(s=o.default)==null?void 0:s.call(o),i("sup",{class:b.value,style:C.value},[((v=o.count)==null?void 0:v.call(o))??$.value])])}}}),V=(e,o,u,n,t)=>r(()=>!o.value&&!n.value?!u.value&&+e.count==0?!1:y(e.count)?e.count>x(t.value,Number.MAX_VALUE)?`${t.value}+`:`${e.count}`:e.count:!1),Z=(e,o,u)=>r(()=>{const n=e.color??"";return o.value?{color:n}:u.value?{backgroundColor:n}:{backgroundColor:n}}),k=(e,o,u,n,t,c)=>r(()=>{const a=c.value;return{[a]:!0,[`${a}-empty`]:!o.value,[`${a}-slot-count`]:u.value,[`${a}-dot`]:!u.value&&t.value,[`${a}-count`]:!u.value&&!t.value,[`${a}-hide-zero`]:!u.value&&!t.value&&!n.value&&+e.count==0}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S=B;export{S as I};
