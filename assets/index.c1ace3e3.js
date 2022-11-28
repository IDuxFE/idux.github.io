import{u as i,ai as m,aj as x,ae as N}from"./index.f300137b.js";import{v as h,e as c,y as g}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B={count:{type:[String,Number],default:0},showZero:{type:Boolean,default:void 0},overflowCount:Number,dot:{type:Boolean,default:void 0},color:String},V=h({name:"IxBadge",props:B,setup(e,{slots:o}){const n=i("common"),t=c(()=>`${n.prefixCls}-badge`),u=i("badge"),l=c(()=>{var r;return(r=e.showZero)!=null?r:u.showZero}),a=c(()=>{var r;return(r=e.dot)!=null?r:u.dot}),C=c(()=>{var r;return(r=e.overflowCount)!=null?r:u.overflowCount}),b=c(()=>m(o)),s=c(()=>m(o,"count")),$=p(e,b,s,l,a,t),w=k(e,s,a),y=Z(e,s,l,a,C);return()=>{var v,f,d;const r=t.value;return g("span",{class:`${r}-wrapper`},[(v=o.default)==null?void 0:v.call(o),g("sup",{class:$.value,style:w.value},[(d=(f=o.count)==null?void 0:f.call(o))!=null?d:y.value])])}}}),Z=(e,o,n,t,u)=>c(()=>!o.value&&!t.value?!n.value&&+e.count==0?!1:x(e.count)?e.count>N(u.value,Number.MAX_VALUE)?`${u.value}+`:`${e.count}`:e.count:!1),k=(e,o,n)=>c(()=>{var u;const t=(u=e.color)!=null?u:"";return o.value?{color:t}:n.value?{backgroundColor:t}:{backgroundColor:t}}),p=(e,o,n,t,u,l)=>c(()=>{const a=l.value;return{[a]:!0,[`${a}-empty`]:!o.value,[`${a}-slot-count`]:n.value,[`${a}-dot`]:!n.value&&u.value,[`${a}-count`]:!n.value&&!u.value,[`${a}-hide-zero`]:!n.value&&!u.value&&!t.value&&+e.count==0}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const A=V;export{A as I};
