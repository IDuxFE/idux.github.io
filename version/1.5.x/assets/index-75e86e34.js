import{L as v,A as S,aF as A,m as I}from"./index-e66ad7a0.js";import{i as w,a as K}from"./colors-9a160b11.js";import{v as P,f as t,y as l,z as F,k as h}from"./vendor-41461ead.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const B={color:String,icon:String,number:Number,shape:String},z={activeKeys:{type:Array,default:()=>[]},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]},G=P({name:"IxTag",props:B,setup(n,{slots:o}){const i=v("common"),u=t(()=>`${i.prefixCls}-tag`),g=v("tag"),d=t(()=>{const a=n.color;return a?w(a)||K(a):!1}),y=t(()=>{const{shape:a=g.shape,color:s,number:f}=n,e=u.value,r=d.value,c=!h(f);return F({[`${e}`]:!0,[`${e}-${a}`]:!c&&a,[`${e}-${s}`]:r,[`${e}-numeric`]:c,[`${e}-has-color`]:!r&&s})}),C=t(()=>({backgroundColor:d.value?void 0:n.color}));return()=>{var r,c;const a=u.value,{icon:s,number:f}=n,e=o.icon?o.icon():s&&l(S,{name:s},null);return l("span",{class:y.value,style:C.value},[U(a,f,C.value),e,l("span",{class:`${a}-content`},[(r=o.default)==null?void 0:r.call(o)]),(c=o.suffix)==null?void 0:c.call(o)])}}});function U(n,o,i){return h(o)?null:l("span",{class:`${n}-numeric-prefix`,style:i},[o>9?"9+":o])}const E=P({name:"IxTagGroup",props:z,setup(n,{slots:o}){const i=v("common"),u=t(()=>`${i.prefixCls}-tag-group`),g=v("tagGroup"),d=t(()=>{var e;return(e=n.gap)!=null?e:g.gap}),y=t(()=>{var e;return(e=n.wrap)!=null?e:g.wrap}),C=t(()=>{const e=u.value;return{[e]:!0,[`${e}-clickable`]:n.clickable,[`${e}-nowrap`]:!y.value}}),a=t(()=>({gap:`8px ${A(d.value)}`})),s=(e,r)=>{if(n.clickable){I(n.onClick,e,r);const c=n.activeKeys,m=c.findIndex(x=>x===e);m===-1?c.push(e):c.splice(m,1),I(n["onUpdate:activeKeys"],c)}},f=(e,r)=>{I(n.onClose,e,r)};return()=>{var c,m,x;const e=u.value,r=(m=(c=o.closeIcon)==null?void 0:c.call(o))!=null?m:l(S,{name:n.closeIcon},null);return l("div",{class:C.value,style:a.value},[(x=n.dataSource)==null?void 0:x.map((p,N)=>{var k;const $=(k=p.key)!=null?k:N,T={suffix:()=>l("span",{class:`${e}-close-icon`,onClick:b=>f($,b)},[r])};return l(G,{key:$,shape:n.shape,color:p.color,number:p.number,icon:p.icon,onClick:b=>s($,b)},{default:()=>p.label,...n.closable&&T})})])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j=G,q=E;export{j as I,q as a};