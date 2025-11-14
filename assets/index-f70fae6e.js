import{d as y,as as S,at as T,c,bg as H,a5 as K,f as m,an as B,i as N,aI as D,bz as M,bA as A,C as E,D as j,bB as w,$ as F,bk as O,af as V,bi as q}from"./index-639d4621.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $=Symbol("collapseToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G={expandedKeys:Array,accordion:{type:Boolean,default:void 0},borderless:{type:Boolean,default:void 0},expandIcon:String,ghost:{type:Boolean,default:void 0},size:{type:String,default:void 0},"onUpdate:expandedKeys":[Function,Array]},L={disabled:{type:Boolean,default:!1},header:[String,Object]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function k(n){const{colorContainerBg:o,colorInfoContainerBg:i,fontSizeHeaderSm:s,fontSizeXl:u,fontSize2xl:g,paddingSizeMd:d,paddingSizeLg:l}=n;return{fontSizeSm:s,fontSizeMd:s,expandIconSizeSm:u,expandIconSizeMd:g,paddingHorizontalSm:d,paddingHorizontalMd:l,panelHeaderBgColor:o,panelContentBgColor:i}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function U(n){const{colorContainerBg:o,colorInfoContainerBg:i}=n;return{...k(n),panelHeaderBgColor:i,panelContentBgColor:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=(n,o)=>o==="default"?k(n):U(n);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=y({name:"IxCollapse",props:G,setup(n,{slots:o}){const i=S("common"),{globalHashId:s,hashId:u,registerToken:g}=T("collapse");g(P);const d=c(()=>`${i.prefixCls}-collapse`),l=S("collapse"),x=c(()=>{var e;return(e=n.accordion)!=null?e:l.accordion}),C=c(()=>{var e;return(e=n.borderless)!=null?e:l.borderless}),p=c(()=>{var e;return(e=n.expandIcon)!=null?e:l.expandIcon}),h=c(()=>{var e;return(e=n.ghost)!=null?e:l.ghost}),r=c(()=>{var e;return(e=n.size)!=null?e:l.size}),[v,I]=H(n,"expandedKeys",()=>[]);K($,{props:n,slots:o,mergedSize:r,expandedKeys:v,expandIcon:p,handleExpand:e=>{let f=[...v.value];const b=f.indexOf(e);x.value?f=b>-1?[]:[e]:b>-1?f.splice(b,1):f.push(e),I(f)}});const t=c(()=>{const e=d.value;return B({[s.value]:!!s.value,[u.value]:!!u.value,[e]:!0,[`${e}-${r.value}`]:!0,[`${e}-borderless`]:C.value,[`${e}-ghost`]:h.value})});return()=>{var e;return m("div",{class:t.value},[(e=o.default)==null?void 0:e.call(o)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=y({name:"IxCollapsePanel",props:L,setup(n,{slots:o}){const i=S("common"),{globalHashId:s,hashId:u,registerToken:g}=T("collapse");g(P);const d=c(()=>`${i.prefixCls}-collapse-panel`),{slots:l,mergedSize:x,expandedKeys:C,expandIcon:p,handleExpand:h}=N($),r=D(),v=c(()=>C.value.includes(r)),I=c(()=>{const t=d.value;return B({[s.value]:!!s.value,[u.value]:!!u.value,[`${t}`]:!0,[`${t}-disabled`]:n.disabled,[`${t}-expanded`]:v.value})}),a=()=>{n.disabled||h(r)};return()=>{const t=v.value,e=d.value,f=M("control-collapse-panel"),b=Q(n,o,e,l,r,x,t,p,a,f);return m("div",{class:I.value},[b,m(A,{appear:!0},{default:()=>{var z;return[E(m("div",{class:`${e}-content`,id:f},[m("div",{class:`${e}-content-box`},[(z=o.default)==null?void 0:z.call(o)])]),[[j,t]])]}})])}}});function Q(n,o,i,s,u,g,d,l,x,C){if(o.header){const a=o.header({expanded:d,onClick:x,changeExpand:x});if(a!=null&&a.length){const t=a[0];t.props={...t.props,"aria-controls":C}}return a}let p;if(s.expandIcon){const a=s.expandIcon({key:u,expanded:d});w(a)&&(p=a)}else{const a=l.value;p=a?m(F,{class:`${i}-expand-icon`,name:a,rotate:d?90:0},null):void 0}const h=p?{prefix:()=>p}:void 0,{header:r,disabled:v}=n,I=O(r)?{title:r}:r;return m(q,V({disabled:v,size:g.value,onClick:x,"aria-controls":C},I),h)}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=X,Y=J;export{W as I,Y as a};
