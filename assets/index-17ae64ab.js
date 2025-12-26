import{bc as v,d as G,as as k,at as F,aI as z,c as h,f as m,i as E,$ as N,aN as W,an as j,bg as D,bb as H,a5 as L,af as U,L as V,R as A}from"./index-200961bb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=Symbol("tag");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q={bordered:{type:Boolean,default:void 0},filled:{type:Boolean,default:void 0},icon:String,number:Number,shape:String,status:{type:String,default:"normal"}},J={activeKeys:{type:Array,default:()=>[]},bordered:{type:Boolean,default:void 0},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},filled:{type:Boolean,default:void 0},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function K(t,o){const{lineWidth:d,borderRadiusSm:p,tagCompColorAlpha:l,colorContainerBg:c,colorTextInfo:B,colorSuccessBg:u,colorInfoBg:a,colorWarningBg:f,colorRiskBg:C,colorErrorBg:b,colorFatalBg:I}=t,{getGreyColors:T}=o,e=T();return{bgColorNormal:v(B,l,c),bgColorFilled:e.base,borderWidth:d,borderRadius:p,minWidthRect:40,minWidthRound:48,minWidthNumeric:64,successBgColor:v(u,l,c),infoBgColor:v(a,l,c),warningBgColor:v(f,l,c),riskBgColor:v(C,l,c),errorBgColor:v(b,l,c),fatalBgColor:v(I,l,c)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=(t,o,d)=>K(t,d);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=G({name:"IxTag",props:q,setup(t,{slots:o}){const d=k("common"),{globalHashId:p,hashId:l,registerToken:c}=F("tag");c(M);const B=k("tag"),u=z(),{props:a,mergedClosedKeys:f,handleTagClick:C,handleTagClose:b}=E(w,{}),I=h(()=>`${d.prefixCls}-tag`),T=n=>{a!=null&&a.clickable&&(C==null||C(u,n))},e=n=>{a!=null&&a.closable&&(n.stopPropagation(),b==null||b(u))},i=h(()=>{const{shape:n=(a==null?void 0:a.shape)||B.shape,bordered:s=a==null?void 0:a.bordered,filled:r=a==null?void 0:a.filled,number:y,status:$}=t,g=I.value,x=!W(y);return j({[p.value]:!!p.value,[l.value]:!!l.value,[`${g}`]:!0,[`${g}-${$}`]:!0,[`${g}-${n}`]:!x&&n,[`${g}-bordered`]:s,[`${g}-filled`]:r,[`${g}-numeric`]:x})});return()=>{var S;if(f!=null&&f.value.includes(u))return null;const n=I.value,{icon:s,number:r}=t,{closable:y,closeIcon:$}=a||{},g=o.icon?o.icon():s&&m(N,{name:s},null);let x=o.suffix?o.suffix():y&&m(N,{name:$},null);return y&&(x=m("span",{class:`${n}-close-icon`,onClick:e},[x])),m("span",{class:i.value,onClick:T},[O(n,r),g,m("span",{class:`${n}-content`},[(S=o.default)==null?void 0:S.call(o)]),x])}}});function O(t,o){return W(o)?null:m("span",{class:`${t}-numeric-prefix`},[o>9?"9+":o])}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q=G({name:"IxTagGroup",props:J,setup(t,{slots:o}){const d=k("common"),p=k("tagGroup"),l=h(()=>`${d.prefixCls}-tag-group`),c=h(()=>{var e;return(e=t.gap)!=null?e:p.gap}),B=h(()=>{var e;return(e=t.wrap)!=null?e:p.wrap}),[u,a]=D(t,"activeKeys",()=>[]),[f,C]=H([]);L(w,{props:t,mergedActiveKeys:u,mergedClosedKeys:f,handleTagClick:(e,i)=>{A(t.onClick,e,i);const n=[...u.value],s=n.findIndex(r=>r===e);s===-1?n.push(e):n.splice(s,1),a(n)},handleTagClose:async e=>{if(await A(t.onClose,e)!==!1){const n=u.value,s=n.findIndex(r=>r===e);if(s!==-1){const r=[...n];r.splice(s,1),a(r)}C([...f.value,e])}}});const T=h(()=>{const e=l.value,i=c.value;return{[e]:!0,[`${e}-clickable`]:t.clickable,[`${e}-compact`]:!i||i==="0"}});return()=>m(V,{class:T.value,size:c.value,wrap:B.value},{default:()=>{var e,i;return[((e=t.dataSource)==null?void 0:e.map((n,s)=>{const{key:r=s,label:y,...$}=n;return m(R,U($,{key:r}),{default:()=>[y],suffix:o.closeIcon})}))||((i=o.default)==null?void 0:i.call(o))]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=R,Z=Q;export{Y as I,Z as a};
