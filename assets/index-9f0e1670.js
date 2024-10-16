import{T as C,U as k,W as S,X as B}from"./index-b2ce1350.js";import{m as h,c as r,q as b,v as o,P as w}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T={color:{type:String},count:{type:[String,Number],default:0},dot:{type:[Boolean,String],default:void 0},overflowCount:{type:[String,Number]},showZero:{type:Boolean,default:void 0},status:{type:String,default:"error"},processing:{type:Boolean,default:!1},title:{type:String}},q={count:{type:Number,required:!0},dot:{type:Boolean,required:!0},overflowCount:{type:Number,required:!0},prefixCls:{type:String,required:!0},showZero:{type:Boolean,required:!0},status:{type:String,required:!0},text:{type:String},title:{type:String}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=h({name:"IxBadgeSub",props:q,setup(e,{slots:u}){const c=r(()=>e.count.toString().split("").map(n=>+n)),f=r(()=>e.overflowCount.toString().split("")),i=r(()=>{const{prefixCls:n,dot:s}=e;return b({[`${n}-sub`]:!0,[`${n}-dot`]:s,[`${n}-count`]:!s,[`${n}-count-multiple`]:!s&&c.value.length>1})});return()=>{const{prefixCls:n,dot:s,text:a}=e;if(s||a)return o(w,{name:`${n}-sub`,appear:!0},{default:()=>[o("sup",{class:i.value,title:e.title},[a&&o("span",{class:`${n}-sub-text`},[a])])]});const l=e.count,{title:d=l,showZero:g,overflowCount:y}=e;let m;return u.default?m=u.default():(l!==0||g)&&(m=A(n,l,y,c,f)),o(w,{name:`${n}-sub`,appear:!0},{default:()=>[m&&o("sup",{class:i.value,title:d},[o("span",{class:`${n}-count-track-wrapper`},[m])])]})}}}),I=[0,1,2,3,4,5,6,7,8,9];function A(e,u,c,f,i){if(u>c)return`${c}+`;const n=f.value;return i.value.map((s,a)=>{const l=n[a];if(l!==void 0)return o("span",{key:a,class:`${e}-count-track`,style:`transform: translateY(${-l*100}%);`},[I.map(d=>{const g=b({[`${e}-count-unit`]:!0,[`${e}-count-current`]:d===l});return o("span",{key:d,class:g},[d])})])})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function x(){return{dotSize:6,countSize:16}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=(e,u)=>x();/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const z=h({name:"IxBadge",props:T,setup(e,{slots:u}){const c=C("common"),{globalHashId:f,hashId:i,registerToken:n}=k("badge");n(P);const s=C("badge"),a=r(()=>`${c.prefixCls}-badge`),l=r(()=>{var t;return(t=e.dot)!=null?t:s.dot}),d=r(()=>{var t;return(t=e.showZero)!=null?t:s.showZero}),g=r(()=>Math.max(0,S(e.count,0))),y=r(()=>{var t;return Math.max(0,S((t=e.overflowCount)!=null?t:s.overflowCount,Number.MAX_VALUE))}),m=r(()=>{const{count:t}=e;return B(t)?void 0:t}),N=r(()=>{const t=a.value,{status:v,processing:p}=e;return b({[f.value]:!!f.value,[i.value]:!!i.value,[t]:!0,[`${t}-${v}`]:!0,[`${t}-processing`]:p})}),$=r(()=>{const{color:t}=e;return t?`background-color: ${t}`:void 0});return()=>{const t=l.value,v=a.value,p=u.default&&u.default();return o("span",{class:N.value},[t==="inline"&&o("span",{class:`${v}-dot`,style:$.value},null),p&&o("span",{class:`${v}-content`},[p]),t!=="inline"&&o(Z,{style:$.value,count:g.value,dot:t,overflowCount:y.value,prefixCls:v,showZero:d.value,status:e.status,text:m.value,title:e.title},{default:u.count})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const O=z;export{O as I};
