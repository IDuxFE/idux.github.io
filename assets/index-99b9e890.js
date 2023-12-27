import{L as C,M as k,N as R,a6 as z,A,ao as E,K as j,k as D,m as K}from"./index-6cd2cabb.js";import{l as G,x as H,c as v,n as L,p as d,d as W,B as M,ad as U}from"./vendor-4146ff73.js";/**
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
 */function N(t){const{lineWidth:o,borderRadiusSm:y,tagCompColorAlpha:l,colorSuccessBg:g,colorInfoBg:x,colorWarningBg:b,colorRiskBg:r,colorErrorBg:e,colorFatalBg:i}=t;return{bgColorFilled:"#99acd1",borderWidth:o,borderRadius:y,minWidthRect:40,minWidthRound:48,minWidthNumeric:64,successBgColor:C(g,l),infoBgColor:C(x,l),warningBgColor:C(b,l),riskBgColor:C(r,l),errorBgColor:C(e,l),fatalBgColor:C(i,l)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=(t,o)=>N(t),F=G({name:"IxTag",props:V,setup(t,{slots:o}){const y=k("common"),{globalHashId:l,hashId:g,registerToken:x}=R("tag");x(J);const b=k("tag"),r=z(),{props:e,mergedClosedKeys:i,handleTagClick:h,handleTagClose:I}=H(w,{}),T=v(()=>`${y.prefixCls}-tag`),$=n=>{e!=null&&e.clickable&&(h==null||h(r,n))},a=n=>{e!=null&&e.closable&&(n.stopPropagation(),I==null||I(r))},f=v(()=>{const{shape:n=(e==null?void 0:e.shape)||b.shape,bordered:c=e==null?void 0:e.bordered,filled:s=e==null?void 0:e.filled,number:m,status:B}=t,u=T.value,p=!W(m);return L({[l.value]:!!l.value,[g.value]:!!g.value,[`${u}`]:!0,[`${u}-${B}`]:!0,[`${u}-${n}`]:!p&&n,[`${u}-bordered`]:c,[`${u}-filled`]:s,[`${u}-numeric`]:p})});return()=>{var S;if(i!=null&&i.value.includes(r))return null;const n=T.value,{icon:c,number:s}=t,{closable:m,closeIcon:B}=e||{},u=o.icon?o.icon():c&&d(A,{name:c},null);let p=o.suffix?o.suffix():m&&d(A,{name:B},null);return m&&(p=d("span",{class:`${n}-close-icon`,onClick:a},[p])),d("span",{class:f.value,onClick:$},[O(n,s),u,d("span",{class:`${n}-content`},[(S=o.default)==null?void 0:S.call(o)]),p])}}});function O(t,o){return W(o)?null:d("span",{class:`${t}-numeric-prefix`},[o>9?"9+":o])}const Q=G({name:"IxTagGroup",props:q,setup(t,{slots:o}){const y=k("common"),l=k("tagGroup"),g=v(()=>`${y.prefixCls}-tag-group`),x=v(()=>{var a;return(a=t.gap)!=null?a:l.gap}),b=v(()=>{var a;return(a=t.wrap)!=null?a:l.wrap}),[r,e]=E(t,"activeKeys",()=>[]),[i,h]=j([]);M(w,{props:t,mergedActiveKeys:r,mergedClosedKeys:i,handleTagClick:(a,f)=>{K(t.onClick,a,f);const n=[...r.value],c=n.findIndex(s=>s===a);c===-1?n.push(a):n.splice(c,1),e(n)},handleTagClose:async a=>{if(await K(t.onClose,a)!==!1){const n=r.value,c=n.findIndex(s=>s===a);if(c!==-1){const s=[...n];s.splice(c,1),e(s)}h([...i.value,a])}}});const $=v(()=>{const a=g.value;return{[a]:!0,[`${a}-clickable`]:t.clickable}});return()=>d(D,{class:$.value,size:x.value,wrap:b.value},{default:()=>{var a,f;return[((a=t.dataSource)==null?void 0:a.map((n,c)=>{const{key:s=c,label:m,...B}=n;return d(F,U(B,{key:s}),{default:()=>[m],suffix:o.closeIcon})}))||((f=o.default)==null?void 0:f.call(o))]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=F,_=Q;export{Z as I,_ as a};
