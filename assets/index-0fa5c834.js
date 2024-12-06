import{d as h,c as r,an as b,f as o,ar as C,as as S,at as k,au as w,av as B}from"./index-2f15ff81.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={color:{type:String},count:{type:[String,Number],default:0},dot:{type:[Boolean,String],default:void 0},overflowCount:{type:[String,Number]},showZero:{type:Boolean,default:void 0},status:{type:String,default:"error"},processing:{type:Boolean,default:!1},title:{type:String}},Z={count:{type:Number,required:!0},dot:{type:Boolean,required:!0},overflowCount:{type:Number,required:!0},prefixCls:{type:String,required:!0},showZero:{type:Boolean,required:!0},status:{type:String,required:!0},text:{type:String},title:{type:String}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=h({name:"IxBadgeSub",props:Z,setup(e,{slots:u}){const c=r(()=>e.count.toString().split("").map(n=>+n)),f=r(()=>e.overflowCount.toString().split("")),d=r(()=>{const{prefixCls:n,dot:s}=e;return b({[`${n}-sub`]:!0,[`${n}-dot`]:s,[`${n}-count`]:!s,[`${n}-count-multiple`]:!s&&c.value.length>1})});return()=>{const{prefixCls:n,dot:s,text:a}=e;if(s||a)return o(C,{name:`${n}-sub`,appear:!0},{default:()=>[o("sup",{class:d.value,title:e.title},[a&&o("span",{class:`${n}-sub-text`},[a])])]});const l=e.count,{title:i=l,showZero:m,overflowCount:y}=e;let g;return u.default?g=u.default():(l!==0||m)&&(g=A(n,l,y,c,f)),o(C,{name:`${n}-sub`,appear:!0},{default:()=>[g&&o("sup",{class:d.value,title:i},[o("span",{class:`${n}-count-track-wrapper`},[g])])]})}}}),I=[0,1,2,3,4,5,6,7,8,9];function A(e,u,c,f,d){if(u>c)return`${c}+`;const n=f.value;return d.value.map((s,a)=>{const l=n[a];if(l!==void 0)return o("span",{key:a,class:`${e}-count-track`,style:`transform: translateY(${-l*100}%);`},[I.map(i=>{const m=b({[`${e}-count-unit`]:!0,[`${e}-count-current`]:i===l});return o("span",{key:i,class:m},[i])})])})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function x(){return{dotSize:6,countSize:16}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=(e,u)=>x();/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=h({name:"IxBadge",props:T,setup(e,{slots:u}){const c=S("common"),{globalHashId:f,hashId:d,registerToken:n}=k("badge");n(z);const s=S("badge"),a=r(()=>`${c.prefixCls}-badge`),l=r(()=>{var t;return(t=e.dot)!=null?t:s.dot}),i=r(()=>{var t;return(t=e.showZero)!=null?t:s.showZero}),m=r(()=>Math.max(0,w(e.count,0))),y=r(()=>{var t;return Math.max(0,w((t=e.overflowCount)!=null?t:s.overflowCount,Number.MAX_VALUE))}),g=r(()=>{const{count:t}=e;return B(t)?void 0:t}),N=r(()=>{const t=a.value,{status:v,processing:p}=e;return b({[f.value]:!!f.value,[d.value]:!!d.value,[t]:!0,[`${t}-${v}`]:!0,[`${t}-processing`]:p})}),$=r(()=>{const{color:t}=e;return t?`background-color: ${t}`:void 0});return()=>{const t=l.value,v=a.value,p=u.default&&u.default();return o("span",{class:N.value},[t==="inline"&&o("span",{class:`${v}-dot`,style:$.value},null),p&&o("span",{class:`${v}-content`},[p]),t!=="inline"&&o(q,{style:$.value,count:m.value,dot:t,overflowCount:y.value,prefixCls:v,showZero:i.value,status:e.status,text:g.value,title:e.title},{default:u.count})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=M;export{D as I};
