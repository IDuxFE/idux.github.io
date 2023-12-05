import{L as b,R as $,S}from"./index-06edd716.js";import{x,c as r,z as y,A as o,L as C}from"./vendor-416b09e5.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w={color:{type:String},count:{type:[String,Number],default:0},dot:{type:[Boolean,String],default:void 0},overflowCount:{type:[String,Number]},showZero:{type:Boolean,default:void 0},status:{type:String,default:"error"},processing:{type:Boolean,default:!1},title:{type:String}},N={count:{type:Number,required:!0},dot:{type:Boolean,required:!0},overflowCount:{type:Number,required:!0},prefixCls:{type:String,required:!0},showZero:{type:Boolean,required:!0},status:{type:String,required:!0},text:{type:String},title:{type:String}},B=x({name:"IxBadgeSub",props:N,setup(t,{slots:s}){const c=r(()=>t.count.toString().split("").map(n=>+n)),i=r(()=>t.overflowCount.toString().split("")),d=r(()=>{const{prefixCls:n,dot:a}=t;return y({[`${n}-sub`]:!0,[`${n}-dot`]:a,[`${n}-count`]:!a,[`${n}-count-multiple`]:!a&&c.value.length>1})});return()=>{const{prefixCls:n,dot:a,text:l}=t;if(a||l)return o(C,{name:`${n}-sub`,appear:!0},{default:()=>[o("sup",{class:d.value,title:t.title},[l&&o("span",{class:`${n}-sub-text`},[l])])]});const u=t.count,{title:f=u,showZero:m,overflowCount:p}=t;let e;return s.default?e=s.default():(u!==0||m)&&(e=Z(n,u,p,c,i)),o(C,{name:`${n}-sub`,appear:!0},{default:()=>[e&&o("sup",{class:d.value,title:f},[o("span",{class:`${n}-count-track-wrapper`},[e])])]})}}}),h=[0,1,2,3,4,5,6,7,8,9];function Z(t,s,c,i,d){if(s>c)return`${c}+`;const n=i.value;return d.value.map((a,l)=>{const u=n[l];if(u!==void 0)return o("span",{key:l,class:`${t}-count-track`,style:`transform: translateY(${-u*100}%);`},[h.map(f=>{const m=y({[`${t}-count-unit`]:!0,[`${t}-count-current`]:f===u});return o("span",{key:f,class:m},[f])})])})}const q=x({name:"IxBadge",props:w,setup(t,{slots:s}){const c=b("common"),i=b("badge"),d=r(()=>`${c.prefixCls}-badge`),n=r(()=>{var e;return(e=t.dot)!=null?e:i.dot}),a=r(()=>{var e;return(e=t.showZero)!=null?e:i.showZero}),l=r(()=>Math.max(0,$(t.count,0))),u=r(()=>{var e;return Math.max(0,$((e=t.overflowCount)!=null?e:i.overflowCount,Number.MAX_VALUE))}),f=r(()=>{const{count:e}=t;return S(e)?void 0:e}),m=r(()=>{const e=d.value,{status:g,processing:v}=t;return y({[e]:!0,[`${e}-${g}`]:!0,[`${e}-processing`]:v})}),p=r(()=>{const{color:e}=t;return e?`background-color: ${e}`:void 0});return()=>{const e=n.value,g=d.value,v=s.default&&s.default();return o("span",{class:m.value},[e==="inline"&&o("span",{class:`${g}-dot`,style:p.value},null),v&&o("span",{class:`${g}-content`},[v]),e!=="inline"&&o(B,{style:p.value,count:l.value,dot:e,overflowCount:u.value,prefixCls:g,showZero:a.value,status:t.status,text:f.value,title:t.title},{default:s.count})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I=q;export{I};
