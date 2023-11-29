import{L as $,a6 as z,A,am as F,K as P,k as j,m as T}from"./index-30b90d3b.js";import{i as q,a as E}from"./colors-9a160b11.js";import{x as N,l as L,c as u,A as O,z as i,d as B,q as U,a3 as V}from"./vendor-5c3e2579.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=Symbol("tag");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W={bordered:{type:Boolean,default:void 0},color:String,filled:{type:Boolean,default:void 0},icon:String,number:Number,shape:String,status:{type:String,default:"normal"}},D={activeKeys:{type:Array,default:()=>[]},bordered:{type:Boolean,default:void 0},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},filled:{type:Boolean,default:void 0},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]},w=N({name:"IxTag",props:W,setup(o,{slots:t}){const I=$("common"),x=$("tag"),m=z(),{props:n,mergedClosedKeys:g,handleTagClick:d,handleTagClose:f}=L(G,{}),p=u(()=>`${I.prefixCls}-tag`),b=u(()=>{const a=o.color;return a?q(a)||E(a):!1}),k=a=>{n!=null&&n.clickable&&(d==null||d(m,a))},h=a=>{n!=null&&n.closable&&(a.stopPropagation(),f==null||f(m))},S=u(()=>{const{shape:a=(n==null?void 0:n.shape)||x.shape,bordered:c=n==null?void 0:n.bordered,color:s,filled:l=n==null?void 0:n.filled,number:v,status:y}=o,r=p.value,C=b.value,K=!B(v);return O({[`${r}`]:!0,[`${r}-${y}`]:!0,[`${r}-${a}`]:!K&&a,[`${r}-${s}`]:C,[`${r}-bordered`]:c,[`${r}-filled`]:l,[`${r}-numeric`]:K,[`${r}-has-color`]:!C&&s})}),e=u(()=>({backgroundColor:b.value?void 0:o.color}));return()=>{var C;if(g!=null&&g.value.includes(m))return null;const a=p.value,{icon:c,number:s}=o,{closable:l,closeIcon:v}=n||{},y=t.icon?t.icon():c&&i(A,{name:c},null);let r=t.suffix?t.suffix():l&&i(A,{name:v},null);return l&&(r=i("span",{class:`${a}-close-icon`,onClick:h},[r])),i("span",{class:S.value,style:e.value,onClick:k},[H(a,s),y,i("span",{class:`${a}-content`},[(C=t.default)==null?void 0:C.call(t)]),r])}}});function H(o,t){return B(t)?null:i("span",{class:`${o}-numeric-prefix`},[t>9?"9+":t])}const J=N({name:"IxTagGroup",props:D,setup(o,{slots:t}){const I=$("common"),x=$("tagGroup"),m=u(()=>`${I.prefixCls}-tag-group`),n=u(()=>{var e;return(e=o.gap)!=null?e:x.gap}),g=u(()=>{var e;return(e=o.wrap)!=null?e:x.wrap}),[d,f]=F(o,"activeKeys",()=>[]),[p,b]=P([]);U(G,{props:o,mergedActiveKeys:d,mergedClosedKeys:p,handleTagClick:(e,a)=>{T(o.onClick,e,a);const c=[...d.value],s=c.findIndex(l=>l===e);s===-1?c.push(e):c.splice(s,1),f(c)},handleTagClose:async e=>{if(await T(o.onClose,e)!==!1){const c=d.value,s=c.findIndex(l=>l===e);if(s!==-1){const l=[...c];l.splice(s,1),f(l)}b([...p.value,e])}}});const S=u(()=>{const e=m.value;return{[e]:!0,[`${e}-clickable`]:o.clickable}});return()=>i(j,{class:S.value,size:n.value,wrap:g.value},{default:()=>{var e,a;return[((e=o.dataSource)==null?void 0:e.map((c,s)=>{const{key:l=s,label:v,...y}=c;return i(w,V(y,{key:l}),{default:()=>[v],suffix:t.closeIcon})}))||((a=t.default)==null?void 0:a.call(t))]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=w,Y=J;export{X as I,Y as a};