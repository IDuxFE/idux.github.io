import{L as C,M as k,N as R,a8 as z,A,aq as E,K as j,k as q,m as K}from"./index-a1eb659d.js";import{l as G,x as D,c as v,p as H,n as d,d as W,B as L,ab as M}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=Symbol("tag");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U={bordered:{type:Boolean,default:void 0},filled:{type:Boolean,default:void 0},icon:String,number:Number,shape:String,status:{type:String,default:"normal"}},V={activeKeys:{type:Array,default:()=>[]},bordered:{type:Boolean,default:void 0},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},filled:{type:Boolean,default:void 0},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function N(t){const{lineWidth:n,borderRadiusSm:y,tagCompColorAlpha:l,colorSuccessBg:g,colorInfoBg:x,colorWarningBg:b,colorRiskBg:r,colorErrorBg:e,colorFatalBg:i}=t;return{bgColorFilled:"#99acd1",borderWidth:n,borderRadius:y,minWidthRect:40,minWidthRound:48,minWidthNumeric:64,successBgColor:C(g,l),infoBgColor:C(x,l),warningBgColor:C(b,l),riskBgColor:C(r,l),errorBgColor:C(e,l),fatalBgColor:C(i,l)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=(t,n)=>N(t),F=G({name:"IxTag",props:U,setup(t,{slots:n}){const y=k("common"),{globalHashId:l,hashId:g,registerToken:x}=R("tag");x(J);const b=k("tag"),r=z(),{props:e,mergedClosedKeys:i,handleTagClick:h,handleTagClose:I}=D(w,{}),T=v(()=>`${y.prefixCls}-tag`),$=o=>{e!=null&&e.clickable&&(h==null||h(r,o))},a=o=>{e!=null&&e.closable&&(o.stopPropagation(),I==null||I(r))},f=v(()=>{const{shape:o=(e==null?void 0:e.shape)||b.shape,bordered:c=e==null?void 0:e.bordered,filled:s=e==null?void 0:e.filled,number:m,status:B}=t,u=T.value,p=!W(m);return H({[l.value]:!!l.value,[g.value]:!!g.value,[`${u}`]:!0,[`${u}-${B}`]:!0,[`${u}-${o}`]:!p&&o,[`${u}-bordered`]:c,[`${u}-filled`]:s,[`${u}-numeric`]:p})});return()=>{var S;if(i!=null&&i.value.includes(r))return null;const o=T.value,{icon:c,number:s}=t,{closable:m,closeIcon:B}=e||{},u=n.icon?n.icon():c&&d(A,{name:c},null);let p=n.suffix?n.suffix():m&&d(A,{name:B},null);return m&&(p=d("span",{class:`${o}-close-icon`,onClick:a},[p])),d("span",{class:f.value,onClick:$},[O(o,s),u,d("span",{class:`${o}-content`},[(S=n.default)==null?void 0:S.call(n)]),p])}}});function O(t,n){return W(n)?null:d("span",{class:`${t}-numeric-prefix`},[n>9?"9+":n])}const Q=G({name:"IxTagGroup",props:V,setup(t,{slots:n}){const y=k("common"),l=k("tagGroup"),g=v(()=>`${y.prefixCls}-tag-group`),x=v(()=>{var a;return(a=t.gap)!=null?a:l.gap}),b=v(()=>{var a;return(a=t.wrap)!=null?a:l.wrap}),[r,e]=E(t,"activeKeys",()=>[]),[i,h]=j([]);L(w,{props:t,mergedActiveKeys:r,mergedClosedKeys:i,handleTagClick:(a,f)=>{K(t.onClick,a,f);const o=[...r.value],c=o.findIndex(s=>s===a);c===-1?o.push(a):o.splice(c,1),e(o)},handleTagClose:async a=>{if(await K(t.onClose,a)!==!1){const o=r.value,c=o.findIndex(s=>s===a);if(c!==-1){const s=[...o];s.splice(c,1),e(s)}h([...i.value,a])}}});const $=v(()=>{const a=g.value;return{[a]:!0,[`${a}-clickable`]:t.clickable}});return()=>d(q,{class:$.value,size:x.value,wrap:b.value},{default:()=>{var a,f;return[((a=t.dataSource)==null?void 0:a.map((o,c)=>{const{key:s=c,label:m,...B}=o;return d(F,M(B,{key:s}),{default:()=>[m],suffix:n.closeIcon})}))||((f=n.default)==null?void 0:f.call(n))]}})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=F,_=Q;export{Z as I,_ as a};
