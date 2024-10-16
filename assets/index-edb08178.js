import{y as M,U as A,F as E,T as F,aI as R,ab as K,ai as D,aJ as H,al as U,b as G,e as k,ae as w,t as J}from"./index-b2ce1350.js";import{m as z,E as I,c as m,q as O,v as d,s as B,w as V,i as x,b as X,f as _,N as P,z as Q,U as Y,a7 as q,P as Z,ah as ee}from"./vendor-489a52b6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=[Number,String,Object],oe={control:{type:[String,Number,Object,Array],default:void 0},colonless:{type:Boolean,default:void 0},controlCol:N,controlTooltipIcon:String,labelAlign:String,labelCol:N,labelTooltipIcon:String,layout:String,messageTooltip:{type:[Boolean,Object],default:!1},size:String,onSubmit:{type:Function,default:e=>e.preventDefault()}},te={colonless:{type:Boolean,default:void 0},control:{type:[String,Number,Object,Array],default:void 0},controlCol:N,controlTooltip:String,controlTooltipIcon:String,description:String,label:[String,Number],labelAlign:String,labelCol:N,labelFor:[String,Number],labelTooltip:String,labelTooltipIcon:String,required:{type:Boolean,default:!1},message:[String,Function,Object],messageTooltip:{type:[Boolean,Object],default:void 0},status:String},le={control:{type:[String,Number,Object,Array],default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ne(e){const{colorTextInfo:l,colorErrorBg:n,colorErrorText:r,fontSizeSm:i,marginSize2Xs:s,marginSizeSm:c,paddingSizeSm:o}=e;return{labelColor:l,labelRequiredColor:r,labelFontSize:i,labelColonMarginLeft:s,labelColonMarginRight:c,messageTooltipBgColor:n,itemMarginBottom:c,verticalItemLabelPadding:`0 0 ${o}px`,verticalItemLabelMargin:0}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const L=e=>ne(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=z({name:"IxForm",props:oe,setup(e,{slots:l}){const n=M(),{globalHashId:r,hashId:i,registerToken:s}=A("form");s(L),I(E,n);const c=F("common"),o=m(()=>`${c.prefixCls}-form`),a=F("form"),b=m(()=>{var u;return(u=e.layout)!=null?u:a.layout}),f=m(()=>{var u;return(u=e.size)!=null?u:a.size});I(R,{props:e,config:a}),I(K,{size:f});const v=m(()=>{const u=o.value;return O({[r.value]:!!r,[i.value]:!!i.value,[u]:!0,[`${u}-${b.value}`]:!0,[`${u}-${f.value}`]:!0})});return()=>d("form",{class:v.value,onSubmit:e.onSubmit},[l.default&&l.default()])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function re(e){const l=se(),n=D(e,l),r=ie(e,l,n);return{status:n,message:r}}function se(){const e=B();let l,n;I(H,{registerControl:(o,a)=>{n||(l=o,n=P(()=>e.value=a.value))},unregisterControl:o=>{o===l&&(n&&(n(),n=void 0),e.value=void 0)}});const s=M(),c=B();return V([s,e],([o,a])=>{const b=o!=null?o:a;c.value!==b&&(c.value=b)},{immediate:!0}),c}function ie(e,l,n){const r=F("locale");return m(()=>{const i=n.value;if(!i)return;const s=e.message;return s?x(s)?s(l.value):X(s)?s[i]:i==="invalid"?s:void 0:ce(l,r)})}function ce(e,l){const n=e.value;if(!n)return;const r=n.errors.value;for(const i in r){if(!U(r,i))continue;const{message:s,...c}=r[i];if(s){if(_(s))return s;if(x(s))return s(c,n);const o=s[l.type];if(o)return x(o)?o(c,n):o}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=z({name:"IxFormItem",props:te,setup(e,{slots:l}){const n=F("common"),{globalHashId:r,hashId:i,registerToken:s}=A("form");s(L);const c=m(()=>`${n.prefixCls}-form-item`),{props:o,config:a}=Q(R,null)||{},b=m(()=>{var t,g;return(g=(t=e.colonless)!=null?t:o==null?void 0:o.colonless)!=null?g:a==null?void 0:a.colonless}),f=m(()=>{var t,g;return(g=(t=e.labelAlign)!=null?t:o==null?void 0:o.labelAlign)!=null?g:a==null?void 0:a.labelAlign}),v=m(()=>{var t;return j((t=e.labelCol)!=null?t:o==null?void 0:o.labelCol)}),u=m(()=>{var t,g;return(g=(t=e.labelTooltipIcon)!=null?t:o==null?void 0:o.labelTooltipIcon)!=null?g:a==null?void 0:a.labelTooltipIcon}),$=m(()=>{var t;return j((t=e.controlCol)!=null?t:o==null?void 0:o.controlCol)}),T=m(()=>{var t,g;return(g=(t=e.controlTooltipIcon)!=null?t:o==null?void 0:o.controlTooltipIcon)!=null?g:a==null?void 0:a.controlTooltipIcon}),h=m(()=>{var t;return(t=e.messageTooltip)!=null?t:o==null?void 0:o.messageTooltip}),{status:S,message:y}=re(e),C=m(()=>{const t=c.value,g=S.value;return O({[r.value]:!!r.value,[i.value]:!!i.value,[t]:!0,[`${t}-${g}`]:!!g})}),p=m(()=>{const t=c.value;return O({[`${t}-label`]:!0,[`${t}-label-colon`]:!b.value,[`${t}-label-required`]:e.required,[`${t}-label-start`]:f.value==="start"})});return()=>{const t=c.value;return d(G,{class:C.value},{default:()=>[de(e,l,p,v,u,t,i.value),me(e,l,n,$,T,S,y,h,t,i.value)]})}}});function j(e){return Y(e)||_(e)?{span:e}:e}function de(e,l,n,r,i,s,c){const{label:o,labelFor:a,labelTooltip:b}=e,{label:f,labelTooltip:v}=l;if(!(o||f))return;const u=W(v,b,i.value,c);return d(k,q({class:n.value},r.value),{default:()=>[d("label",{for:a},[f?f():o,u&&d("span",{class:`${s}-label-tooltip`},[u])])]})}function me(e,l,n,r,i,s,c,o,a,b){const{controlTooltip:f,description:v}=e,{controlTooltip:u,description:$,message:T}=l,h=W(u,f,i.value,b),S=d("div",{class:`${a}-control-input`},[d("div",{class:`${a}-control-input-content`},[l.default&&l.default()]),h&&d("span",{class:`${a}-control-tooltip`},[h])]),y=ge(o.value,c.value,a,b),C=$?$():v,p=[];if(y){const t={default:()=>S,title:T};p.push(d(w,y,t))}else{p.push(S);const t=T?T():c.value;(!C||t)&&p.push(d("div",{class:`${a}-message`},[d(Z,{name:`${n.prefixCls}-fade-down`},{default:()=>[t&&d("div",{class:`${a}-message-${s.value}`},[t])]})]))}return C&&p.push(d("div",{class:`${a}-description`},[C])),d(k,q({class:`${a}-control`},r.value),{default:()=>[p]})}function ge(e,l,n,r){if(!e)return;const i={class:[`${n}-message-tooltip`,r],offset:[0,6],placement:"bottomStart",title:l};return ee(e)?i:{...i,...e}}function W(e,l,n,r){return e?e():l&&d(w,{class:r,title:l},{default:()=>[d(J,{name:n},null)]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const be=z({name:"IxFormWrapper",props:le,setup(e,{slots:l}){const n=M();return I(E,n),()=>{var r;return(r=l.default)==null?void 0:r.call(l)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const pe=ae,Te=ue,Se=be;export{Te as I,pe as a,Se as b};
