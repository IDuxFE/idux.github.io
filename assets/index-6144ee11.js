import{d as M,a3 as z,at as A,a5 as I,as as F,c as m,f as d,a6 as R,bx as k,aM as K,an as N,aY as H,aP as B,by as D,x as G,br as O,b8 as V,b1 as X,bk as E,H as Y,i as J,g as P,b9 as Q,af as w,l as _,aR as L,ar as U,b7 as Z,$ as ee}from"./index-da4385ef.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const x=[Number,String,Object],oe={control:{type:[String,Number,Object,Array],default:void 0},colonless:{type:Boolean,default:void 0},controlCol:x,controlTooltipIcon:String,labelAlign:String,labelCol:x,labelTooltipIcon:String,layout:String,messageTooltip:{type:[Boolean,Object],default:!1},size:String,onSubmit:{type:Function,default:e=>e.preventDefault()}},te={colonless:{type:Boolean,default:void 0},control:{type:[String,Number,Object,Array],default:void 0},controlCol:x,controlTooltip:String,controlTooltipIcon:String,description:String,label:[String,Number],labelAlign:String,labelCol:x,labelFor:[String,Number],labelTooltip:String,labelTooltipIcon:String,required:{type:Boolean,default:!1},message:[String,Function,Object],messageTooltip:{type:[Boolean,Object],default:void 0},status:String},le={control:{type:[String,Number,Object,Array],default:void 0}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ne(e){const{colorTextInfo:l,colorErrorBg:n,colorErrorText:r,fontSizeSm:i,marginSize2Xs:s,marginSizeSm:c,paddingSizeSm:o}=e;return{labelColor:l,labelRequiredColor:r,labelFontSize:i,labelColonMarginLeft:s,labelColonMarginRight:c,messageTooltipBgColor:n,itemMarginBottom:c,verticalItemLabelPadding:`0 0 ${o}px`,verticalItemLabelMargin:0}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=e=>ne(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=M({name:"IxForm",props:oe,setup(e,{slots:l}){const n=z(),{globalHashId:r,hashId:i,registerToken:s}=A("form");s(W),I(R,n);const c=F("common"),o=m(()=>`${c.prefixCls}-form`),a=F("form"),g=m(()=>{var u;return(u=e.layout)!=null?u:a.layout}),f=m(()=>{var u;return(u=e.size)!=null?u:a.size});I(k,{props:e,config:a}),I(K,{size:f});const v=m(()=>{const u=o.value;return N({[r.value]:!!r,[i.value]:!!i.value,[u]:!0,[`${u}-${g.value}`]:!0,[`${u}-${f.value}`]:!0})});return()=>d("form",{class:v.value,onSubmit:e.onSubmit},[l.default&&l.default()])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function re(e){const l=se(),n=H(e,l),r=ie(e,l,n);return{status:n,message:r}}function se(){const e=B();let l,n;I(D,{registerControl:(o,a)=>{n||(l=o,n=Y(()=>e.value=a.value))},unregisterControl:o=>{o===l&&(n&&(n(),n=void 0),e.value=void 0)}});const s=z(),c=B();return G([s,e],([o,a])=>{const g=o!=null?o:a;c.value!==g&&(c.value=g)},{immediate:!0}),c}function ie(e,l,n){const r=F("locale");return m(()=>{const i=n.value;if(!i)return;const s=e.message;return s?O(s)?s(l.value):V(s)?s[i]:i==="invalid"?s:void 0:ce(l,r)})}function ce(e,l){const n=e.value;if(!n)return;const r=n.errors.value;for(const i in r){if(!X(r,i))continue;const{message:s,...c}=r[i];if(s){if(E(s))return s;if(O(s))return s(c,n);const o=s[l.type];if(o)return O(o)?o(c,n):o}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=M({name:"IxFormItem",props:te,setup(e,{slots:l}){const n=F("common"),{globalHashId:r,hashId:i,registerToken:s}=A("form");s(W);const c=m(()=>`${n.prefixCls}-form-item`),{props:o,config:a}=J(k,null)||{},g=m(()=>{var t,b;return(b=(t=e.colonless)!=null?t:o==null?void 0:o.colonless)!=null?b:a==null?void 0:a.colonless}),f=m(()=>{var t,b;return(b=(t=e.labelAlign)!=null?t:o==null?void 0:o.labelAlign)!=null?b:a==null?void 0:a.labelAlign}),v=m(()=>{var t;return j((t=e.labelCol)!=null?t:o==null?void 0:o.labelCol)}),u=m(()=>{var t,b;return(b=(t=e.labelTooltipIcon)!=null?t:o==null?void 0:o.labelTooltipIcon)!=null?b:a==null?void 0:a.labelTooltipIcon}),$=m(()=>{var t;return j((t=e.controlCol)!=null?t:o==null?void 0:o.controlCol)}),T=m(()=>{var t,b;return(b=(t=e.controlTooltipIcon)!=null?t:o==null?void 0:o.controlTooltipIcon)!=null?b:a==null?void 0:a.controlTooltipIcon}),y=m(()=>{var t;return(t=e.messageTooltip)!=null?t:o==null?void 0:o.messageTooltip}),{status:S,message:h}=re(e),C=m(()=>{const t=c.value,b=S.value;return N({[r.value]:!!r.value,[i.value]:!!i.value,[t]:!0,[`${t}-${b}`]:!!b})}),p=m(()=>{const t=c.value;return N({[`${t}-label`]:!0,[`${t}-label-colon`]:!g.value,[`${t}-label-required`]:e.required,[`${t}-label-start`]:f.value==="start"})});return()=>{const t=c.value;return d(P,{class:C.value},{default:()=>[de(e,l,p,v,u,t,i.value),me(e,l,n,$,T,S,h,y,t,i.value)]})}}});function j(e){return Q(e)||E(e)?{span:e}:e}function de(e,l,n,r,i,s,c){const{label:o,labelFor:a,labelTooltip:g}=e,{label:f,labelTooltip:v}=l;if(!(o||f))return;const u=q(v,g,i.value,c);return d(_,w({class:n.value},r.value),{default:()=>[d("label",{for:a},[f?f():o,u&&d("span",{class:`${s}-label-tooltip`},[u])])]})}function me(e,l,n,r,i,s,c,o,a,g){const{controlTooltip:f,description:v}=e,{controlTooltip:u,description:$,message:T}=l,y=q(u,f,i.value,g),S=d("div",{class:`${a}-control-input`},[d("div",{class:`${a}-control-input-content`},[l.default&&l.default()]),y&&d("span",{class:`${a}-control-tooltip`},[y])]),h=be(o.value,c.value,a,g),C=$?$():v,p=[];if(h){const t={default:()=>S,title:T};p.push(d(L,h,t))}else{p.push(S);const t=T?T():c.value;(!C||t)&&p.push(d("div",{class:`${a}-message`},[d(U,{name:`${n.prefixCls}-fade-down`},{default:()=>[t&&d("div",{class:`${a}-message-${s.value}`},[t])]})]))}return C&&p.push(d("div",{class:`${a}-description`},[C])),d(_,w({class:`${a}-control`},r.value),{default:()=>[p]})}function be(e,l,n,r){if(!e)return;const i={class:[`${n}-message-tooltip`,r],offset:[0,6],placement:"bottomStart",title:l};return Z(e)?i:{...i,...e}}function q(e,l,n,r){return e?e():l&&d(L,{class:r,title:l},{default:()=>[d(ee,{name:n},null)]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ge=M({name:"IxFormWrapper",props:le,setup(e,{slots:l}){const n=z();return I(R,n),()=>{var r;return(r=l.default)==null?void 0:r.call(l)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ve=ae,pe=ue,Te=ge;export{pe as I,ve as a,Te as b};
