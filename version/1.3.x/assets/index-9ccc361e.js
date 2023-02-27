import{q as h,L as F,F as z,az as A,a8 as W,ae as q,ah as K,aA as L,b as k,d as w,aa as B,A as D}from"./index-4edbd2bb.js";import{v as x,f as u,y as c,z as N,p as C,s as j,w as G,a as O,j as J,l as R,Q,i as V,L as H,a2 as _,J as U,av as X}from"./vendor-1c103b38.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=[Number,String,Object],Y={control:{type:[String,Number,Object],default:void 0},colonless:{type:Boolean,default:void 0},controlCol:y,controlTooltipIcon:String,labelAlign:String,labelCol:y,labelTooltipIcon:String,layout:String,messageTooltip:{type:[Boolean,Object],default:!1},size:String,onSubmit:{type:Function,default:t=>t.preventDefault()}},Z={colonless:{type:Boolean,default:void 0},control:{type:[String,Number,Object],default:void 0},controlCol:y,controlTooltip:String,controlTooltipIcon:String,description:String,label:[String,Number],labelAlign:String,labelCol:y,labelFor:[String,Number],labelTooltip:String,labelTooltipIcon:String,required:{type:Boolean,default:!1},message:[String,Function,Object],messageTooltip:{type:[Boolean,Object],default:void 0},status:String},P={control:{type:[String,Number,Object],default:void 0}},tt=x({name:"IxForm",props:Y,setup(t,{slots:l}){const n=h();C(z,n);const a=F("common"),e=u(()=>`${a.prefixCls}-form`),o=F("form"),i=u(()=>t.layout??o.layout),s=u(()=>t.size??o.size);C(A,{props:t,config:o}),C(W,{size:s});const r=u(()=>{const d=e.value;return N({[d]:!0,[`${d}-${i.value}`]:!0,[`${d}-${s.value}`]:!0})});return()=>c("form",{class:r.value,onSubmit:t.onSubmit},[l.default&&l.default()])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ot(t){const l=et(),n=q(t,l),a=lt(t,l,n);return{status:n,message:a}}function et(){const t=j();let l,n;C(L,{registerControl:(s,r)=>{n||(l=s,n=Q(()=>t.value=r.value))},unregisterControl:s=>{s===l&&(n&&(n(),n=void 0),t.value=void 0)}});const o=h(),i=j();return G([o,t],([s,r])=>{const d=s??r;i.value!==d&&(i.value=d)},{immediate:!0}),i}function lt(t,l,n){const a=F("locale");return u(()=>{const e=n.value;if(!e)return;const o=t.message;return o?O(o)?o(l.value):J(o)?o[e]:e==="invalid"?o:void 0:nt(l,a)})}function nt(t,l){const n=t.value;if(!n)return;const a=n.errors.value;for(const e in a){if(!K(a,e))continue;const{message:o,...i}=a[e];if(o){if(R(o))return o;if(O(o))return o(i,n);const s=o[l.type];if(s)return O(s)?s(i,n):s}}}const at=x({name:"IxFormItem",props:Z,setup(t,{slots:l}){const n=F("common"),a=u(()=>`${n.prefixCls}-form-item`),{props:e,config:o}=V(A,null)||{},i=u(()=>t.colonless??(e==null?void 0:e.colonless)??(o==null?void 0:o.colonless)),s=u(()=>t.labelAlign??(e==null?void 0:e.labelAlign)??(o==null?void 0:o.labelAlign)),r=u(()=>M(t.labelCol??(e==null?void 0:e.labelCol))),d=u(()=>t.labelTooltipIcon??(e==null?void 0:e.labelTooltipIcon)??(o==null?void 0:o.labelTooltipIcon)),v=u(()=>M(t.controlCol??(e==null?void 0:e.controlCol))),b=u(()=>t.controlTooltipIcon??(e==null?void 0:e.controlTooltipIcon)??(o==null?void 0:o.controlTooltipIcon)),S=u(()=>t.messageTooltip??(e==null?void 0:e.messageTooltip)),{status:p,message:T}=ot(t),I=u(()=>{const f=a.value,m=p.value;return N({[f]:!0,[`${f}-${m}`]:!!m})}),$=u(()=>{const f=a.value;return N({[`${f}-label`]:!0,[`${f}-label-colon`]:!i.value,[`${f}-label-required`]:t.required,[`${f}-label-start`]:s.value==="start"})});return()=>{const f=a.value;return c(k,{class:I.value},{default:()=>[st(t,l,$,r,d,f),rt(t,l,n,v,b,p,T,S,f)]})}}});function M(t){return H(t)||R(t)?{span:t}:t}function st(t,l,n,a,e,o){const{label:i,labelFor:s,labelTooltip:r}=t,{label:d,labelTooltip:v}=l;if(!(i||d))return;const b=E(v,r,e.value);return c(w,_({class:n.value},a.value),{default:()=>[c("label",{for:s},[d?d():i,b&&c("span",{class:`${o}-label-tooltip`},[b])])]})}function rt(t,l,n,a,e,o,i,s,r){const{controlTooltip:d,description:v}=t,{controlTooltip:b,description:S,message:p}=l,T=E(b,d,e.value),I=c("div",{class:`${r}-control-input`},[c("div",{class:`${r}-control-input-content`},[l.default&&l.default()]),T&&c("span",{class:`${r}-control-tooltip`},[T])]),$=it(s.value,i.value,r),f=S?S():v,m=[];if($){const g={default:()=>I,title:p};m.push(c(B,$,g))}else{m.push(I);const g=p?p():i.value;(!f||g)&&m.push(c("div",{class:`${r}-message`},[c(U,{name:`${n.prefixCls}-fade-down`},{default:()=>[g&&c("div",{class:`${r}-message-${o.value}`},[g])]})]))}return f&&m.push(c("div",{class:`${r}-description`},[f])),c(w,_({class:`${r}-control`},a.value),{default:()=>[m]})}function it(t,l,n){if(!t)return;const a={class:`${n}-message-tooltip`,offset:[0,6],placement:"bottomStart",title:l};return X(t)?a:{...a,...t}}function E(t,l,n){return t?t():l&&c(B,{title:l},{default:()=>[c(D,{name:n},null)]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ct=x({name:"IxFormWrapper",props:P,setup(t,{slots:l}){const n=h();return C(z,n),()=>{var a;return(a=l.default)==null?void 0:a.call(l)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ft=tt,mt=at,bt=ct;export{mt as I,ft as a,bt as b};
