import{L as C,M as $,N as R,a6 as z,A,ao as E,K as j,k as D,m as K}from"./index-e0064ebe.js";import{l as G,x as H,c as h,n as L,p as g,d as W,B as M,ad as U}from"./vendor-74fd07a1.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=Symbol("tag");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const V={bordered:{type:Boolean,default:void 0},filled:{type:Boolean,default:void 0},icon:String,number:Number,shape:String,status:{type:String,default:"normal"}},q={activeKeys:{type:Array,default:()=>[]},bordered:{type:Boolean,default:void 0},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},filled:{type:Boolean,default:void 0},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function N(t,o){const{lineWidth:u,borderRadiusSm:m,tagCompColorAlpha:l,colorTextInfo:v,colorSuccessBg:B,colorInfoBg:i,colorWarningBg:a,colorRiskBg:d,colorErrorBg:p,colorFatalBg:y}=t,{getGreyColors:I}=o,T=I();return{bgColorNormal:C(v,l),bgColorFilled:T.base,borderWidth:u,borderRadius:m,minWidthRect:40,minWidthRound:48,minWidthNumeric:64,successBgColor:C(B,l),infoBgColor:C(i,l),warningBgColor:C(a,l),riskBgColor:C(d,l),errorBgColor:C(p,l),fatalBgColor:C(y,l)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=(t,o,u)=>N(t,u),F=G({name:"IxTag",props:V,setup(t,{slots:o}){const u=$("common"),{globalHashId:m,hashId:l,registerToken:v}=R("tag");v(J);const B=$("tag"),i=z(),{props:a,mergedClosedKeys:d,handleTagClick:p,handleTagClose:y}=H(w,{}),I=h(()=>`${u.prefixCls}-tag`),T=n=>{a!=null&&a.clickable&&(p==null||p(i,n))},e=n=>{a!=null&&a.closable&&(n.stopPropagation(),y==null||y(i))},r=h(()=>{const{shape:n=(a==null?void 0:a.shape)||B.shape,bordered:c=a==null?void 0:a.bordered,filled:s=a==null?void 0:a.filled,number:x,status:k}=t,f=I.value,b=!W(x);return L({[m.value]:!!m.value,[l.value]:!!l.value,[`${f}`]:!0,[`${f}-${k}`]:!0,[`${f}-${n}`]:!b&&n,[`${f}-bordered`]:c,[`${f}-filled`]:s,[`${f}-numeric`]:b})});return()=>{var S;if(d!=null&&d.value.includes(i))return null;const n=I.value,{icon:c,number:s}=t,{closable:x,closeIcon:k}=a||{},f=o.icon?o.icon():c&&g(A,{name:c},null);let b=o.suffix?o.suffix():x&&g(A,{name:k},null);return x&&(b=g("span",{class:`${n}-close-icon`,onClick:e},[b])),g("span",{class:r.value,onClick:T},[O(n,s),f,g("span",{class:`${n}-content`},[(S=o.default)==null?void 0:S.call(o)]),b])}}});function O(t,o){return W(o)?null:g("span",{class:`${t}-numeric-prefix`},[o>9?"9+":o])}const Q=G({name:"IxTagGroup",props:q,setup(t,{slots:o}){const u=$("common"),m=$("tagGroup"),l=h(()=>`${u.prefixCls}-tag-group`),v=h(()=>{var e;return(e=t.gap)!=null?e:m.gap}),B=h(()=>{var e;return(e=t.wrap)!=null?e:m.wrap}),[i,a]=E(t,"activeKeys",()=>[]),[d,p]=j([]);M(w,{props:t,mergedActiveKeys:i,mergedClosedKeys:d,handleTagClick:(e,r)=>{K(t.onClick,e,r);const n=[...i.value],c=n.findIndex(s=>s===e);c===-1?n.push(e):n.splice(c,1),a(n)},handleTagClose:async e=>{if(await K(t.onClose,e)!==!1){const n=i.value,c=n.findIndex(s=>s===e);if(c!==-1){const s=[...n];s.splice(c,1),a(s)}p([...d.value,e])}}});const T=h(()=>{const e=l.value,r=v.value;return{[e]:!0,[`${e}-clickable`]:t.clickable,[`${e}-compact`]:!r||r==="0"}});return()=>g(D,{class:T.value,size:v.value,wrap:B.value},{default:()=>{var e,r;return[((e=t.dataSource)==null?void 0:e.map((n,c)=>{const{key:s=c,label:x,...k}=n;return g(F,U(k,{key:s}),{default:()=>[x],suffix:o.closeIcon})}))||((r=o.default)==null?void 0:r.call(o))]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=F,_=Q;export{Z as I,_ as a};
