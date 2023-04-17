import{q as h,L as y,F as M,az as z,a8 as W,ae as q,ah as K,aA as L,b as k,d as w,aa as B,A as D}from"./index-e66ad7a0.js";import{v as x,f,y as m,z as N,p as C,s as A,w as G,a as O,j as J,l as R,Q,i as V,L as H,a3 as _,J as U,am as X}from"./vendor-41461ead.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=[Number,String,Object],Y={control:{type:[String,Number,Object,Array],default:void 0},colonless:{type:Boolean,default:void 0},controlCol:F,controlTooltipIcon:String,labelAlign:String,labelCol:F,labelTooltipIcon:String,layout:String,messageTooltip:{type:[Boolean,Object],default:!1},size:String,onSubmit:{type:Function,default:t=>t.preventDefault()}},Z={colonless:{type:Boolean,default:void 0},control:{type:[String,Number,Object,Array],default:void 0},controlCol:F,controlTooltip:String,controlTooltipIcon:String,description:String,label:[String,Number],labelAlign:String,labelCol:F,labelFor:[String,Number],labelTooltip:String,labelTooltipIcon:String,required:{type:Boolean,default:!1},message:[String,Function,Object],messageTooltip:{type:[Boolean,Object],default:void 0},status:String},P={control:{type:[String,Number,Object,Array],default:void 0}},tt=x({name:"IxForm",props:Y,setup(t,{slots:n}){const a=h();C(M,a);const s=y("common"),e=f(()=>`${s.prefixCls}-form`),o=y("form"),d=f(()=>{var i;return(i=t.layout)!=null?i:o.layout}),r=f(()=>{var i;return(i=t.size)!=null?i:o.size});C(z,{props:t,config:o}),C(W,{size:r});const u=f(()=>{const i=e.value;return N({[i]:!0,[`${i}-${d.value}`]:!0,[`${i}-${r.value}`]:!0})});return()=>m("form",{class:u.value,onSubmit:t.onSubmit},[n.default&&n.default()])}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ot(t){const n=et(),a=q(t,n),s=lt(t,n,a);return{status:a,message:s}}function et(){const t=A();let n,a;C(L,{registerControl:(r,u)=>{a||(n=r,a=Q(()=>t.value=u.value))},unregisterControl:r=>{r===n&&(a&&(a(),a=void 0),t.value=void 0)}});const o=h(),d=A();return G([o,t],([r,u])=>{const i=r!=null?r:u;d.value!==i&&(d.value=i)},{immediate:!0}),d}function lt(t,n,a){const s=y("locale");return f(()=>{const e=a.value;if(!e)return;const o=t.message;return o?O(o)?o(n.value):J(o)?o[e]:e==="invalid"?o:void 0:nt(n,s)})}function nt(t,n){const a=t.value;if(!a)return;const s=a.errors.value;for(const e in s){if(!K(s,e))continue;const{message:o,...d}=s[e];if(o){if(R(o))return o;if(O(o))return o(d,a);const r=o[n.type];if(r)return O(r)?r(d,a):r}}}const at=x({name:"IxFormItem",props:Z,setup(t,{slots:n}){const a=y("common"),s=f(()=>`${a.prefixCls}-form-item`),{props:e,config:o}=V(z,null)||{},d=f(()=>{var l,c;return(c=(l=t.colonless)!=null?l:e==null?void 0:e.colonless)!=null?c:o==null?void 0:o.colonless}),r=f(()=>{var l,c;return(c=(l=t.labelAlign)!=null?l:e==null?void 0:e.labelAlign)!=null?c:o==null?void 0:o.labelAlign}),u=f(()=>{var l;return j((l=t.labelCol)!=null?l:e==null?void 0:e.labelCol)}),i=f(()=>{var l,c;return(c=(l=t.labelTooltipIcon)!=null?l:e==null?void 0:e.labelTooltipIcon)!=null?c:o==null?void 0:o.labelTooltipIcon}),g=f(()=>{var l;return j((l=t.controlCol)!=null?l:e==null?void 0:e.controlCol)}),b=f(()=>{var l,c;return(c=(l=t.controlTooltipIcon)!=null?l:e==null?void 0:e.controlTooltipIcon)!=null?c:o==null?void 0:o.controlTooltipIcon}),S=f(()=>{var l;return(l=t.messageTooltip)!=null?l:e==null?void 0:e.messageTooltip}),{status:p,message:T}=ot(t),I=f(()=>{const l=s.value,c=p.value;return N({[l]:!0,[`${l}-${c}`]:!!c})}),$=f(()=>{const l=s.value;return N({[`${l}-label`]:!0,[`${l}-label-colon`]:!d.value,[`${l}-label-required`]:t.required,[`${l}-label-start`]:r.value==="start"})});return()=>{const l=s.value;return m(k,{class:I.value},{default:()=>[st(t,n,$,u,i,l),rt(t,n,a,g,b,p,T,S,l)]})}}});function j(t){return H(t)||R(t)?{span:t}:t}function st(t,n,a,s,e,o){const{label:d,labelFor:r,labelTooltip:u}=t,{label:i,labelTooltip:g}=n;if(!(d||i))return;const b=E(g,u,e.value);return m(w,_({class:a.value},s.value),{default:()=>[m("label",{for:r},[i?i():d,b&&m("span",{class:`${o}-label-tooltip`},[b])])]})}function rt(t,n,a,s,e,o,d,r,u){const{controlTooltip:i,description:g}=t,{controlTooltip:b,description:S,message:p}=n,T=E(b,i,e.value),I=m("div",{class:`${u}-control-input`},[m("div",{class:`${u}-control-input-content`},[n.default&&n.default()]),T&&m("span",{class:`${u}-control-tooltip`},[T])]),$=it(r.value,d.value,u),l=S?S():g,c=[];if($){const v={default:()=>I,title:p};c.push(m(B,$,v))}else{c.push(I);const v=p?p():d.value;(!l||v)&&c.push(m("div",{class:`${u}-message`},[m(U,{name:`${a.prefixCls}-fade-down`},{default:()=>[v&&m("div",{class:`${u}-message-${o.value}`},[v])]})]))}return l&&c.push(m("div",{class:`${u}-description`},[l])),m(w,_({class:`${u}-control`},s.value),{default:()=>[c]})}function it(t,n,a){if(!t)return;const s={class:`${a}-message-tooltip`,offset:[0,6],placement:"bottomStart",title:n};return X(t)?s:{...s,...t}}function E(t,n,a){return t?t():n&&m(B,{title:n},{default:()=>[m(D,{name:a},null)]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ct=x({name:"IxFormWrapper",props:P,setup(t,{slots:n}){const a=h();return C(M,a),()=>{var s;return(s=n.default)==null?void 0:s.call(n)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const mt=tt,ft=at,bt=ct;export{ft as I,mt as a,bt as b};
