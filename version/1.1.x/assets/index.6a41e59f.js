import{j as U,x as le,b7 as I,n as ue,p as ie,q as oe,o as T,b8 as se,ak as W,h as O,u as re}from"./index.2ba5520c.js";import{v as L,e as k,y as w,L as Y,P as ce,l as de,n as ve,a as p,D as me,i as H,b as B,bi as fe,a1 as he,w as Z,t as be,H as _,p as ge,bm as ye}from"./vendor.994f7e39.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const S={ltr:"left",rtl:"right",btt:"bottom",ttb:"top"},X=Symbol("sliderToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const xe={control:{type:[String,Number,Object],default:void 0},value:{type:[Number,Array],default:void 0},disabled:{type:Boolean,default:!1},dots:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!0},marks:{type:Object,default:void 0},max:{type:Number,default:100},min:{type:Number,default:0},range:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},step:{type:Number,default:1},tooltipFormatter:{type:Function,default:void 0},tooltipPlacement:{type:String,default:void 0},tooltipVisible:{type:Boolean,default:void 0},vertical:{type:Boolean,default:!1},"onUpdate:value":[Function,Array],onChange:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array]},Me={value:{type:Number,default:void 0},onFocus:[Function,Array],onBlur:[Function,Array]},we={onClickMark:[Function,Array]},ke=L({name:"IxSliderMarks",props:we,setup(e){const{values:c,marks:b,max:v,min:l,prefixCls:d,range:u,reverse:i,vertical:o}=H(X),h=k(()=>`${d.value}-mark`);return()=>w("div",{class:h.value},[Fe(e,c.value,b.value,v.value,l.value,h.value,u.value,i.value,o.value)])}});function Fe(e,c,b,v,l,d,u,i,o){if(Y(b))return;const h=v-l;return Object.keys(b).map(parseFloat).sort((s,r)=>s-r).map(s=>{const r=b[s],y=ce(r);let x;if(de(r)||ve(r)?x=r:p(r)?x=r():y&&(x=r.label),Y(x))return null;const A=u?!(s<c[0]||s>c[1]):s<=c[0],$={[`${d}-label`]:!0,[`${d}-label-active`]:A},F=o?{marginBottom:"-50%",[i?S.ttb:S.btt]:`${(s-l)/h*100}%`}:{transform:`translateX(${i?"50%":"-50%"})`,[i?S.rtl:S.ltr]:`${(s-l)/h*100}%`},C=y?me([F,r==null?void 0:r.style]):F,R=D=>U(e.onClickMark,D,s);return w("span",{key:s,class:$,style:C,onMousedown:R,onTouchstart:R},[x])})}const Se=L({name:"IxSliderSteps",setup(){const{values:e,dots:c,marks:b,max:v,min:l,prefixCls:d,range:u,reverse:i,step:o,vertical:h}=H(X);return()=>w("div",{class:`${d.value}-step`},[Ae(e.value,c.value,b.value,v.value,l.value,d.value,u.value,i.value,o.value,h.value)])}});function Ae(e,c,b,v,l,d,u,i,o,h){const s=v-l;return $e(c,b,v,l,o).map(r=>{const y=`${Math.abs(r-l)/s*100}%`,x=u?!(r<e[0]||r>e[1]):r<=e[0],A=h?{[i?S.ttb:S.btt]:y}:{[i?S.rtl:S.ltr]:y},$={[`${d}-dot`]:!0,[`${d}-dot-active`]:x,[`${d}-dot-reverse`]:i};return w("span",{key:r,class:$,style:A},null)})}function $e(e,c,b,v,l){const d=Object.keys(c!=null?c:{}).map(parseFloat).sort((u,i)=>u-i);if(e&&l)for(let u=v;u<=b;u+=l)d.indexOf(u)===-1&&d.push(u);return d}const Be=L({name:"IxSliderThumb",inheritAttrs:!1,props:Me,setup(e,{attrs:c,expose:b}){var g;const{disabled:v,dragging:l,prefixCls:d,tooltipVisible:u,tooltipPlacement:i,tooltipFormatter:o}=H(X),h=B((g=u.value)!=null?g:!1),s=B(!1),r=B(null),y=B(null),x=k(()=>`${d.value}-thumb`),A=()=>u.value!==!1&&(h.value=!0),$=()=>u.value!==!0&&(h.value=!1);fe(()=>{var M;return h.value&&((M=r.value)==null?void 0:M.updatePopper())});function F(){s.value=!0,A()}function C(){s.value=!1,l.value||$()}function R(M){A(),l.value||U(e.onFocus,M)}function D(M){$(),l.value||U(e.onBlur,M)}return b({tooltipRef:r,thumbRef:y,isHovering:s,showTooltip:A,hideTooltip:$}),()=>w(le,{ref:r,visible:h.value,placement:i.value,trigger:"manual",onMouseenter:F,onMouseleave:C},{default:()=>[w("div",he(c,{ref:y,class:x.value,onMouseenter:F,onMouseleave:C,onFocus:v.value?I:R,onBlur:v.value?I:D}),null)],title:()=>p(o.value)?o.value(e.value):w("span",null,[e.value])})}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ce(e){const{elementRef:c,focus:b,blur:v}=ue(),{accessor:l,control:d}=ie();oe(d);const u=B([e.min,e.min]),i=B([]),o=B(-1),h=B(null),s=B(!1),r=k(()=>l.disabled),y=k(()=>{const t=[e.min,e.max,e.step].map(n=>{const a=`${n}`.split(".")[1];return a?a.length:0});return Math.max(...t)}),x=k(()=>{const t=`${e.step}`.split(".")[1];return t?t.length:0}),A=k(()=>e.vertical?e.reverse?S.ttb:S.btt:e.reverse?S.rtl:S.ltr);function $(t){return n=>{t===0&&(c.value=n==null?void 0:n.thumbRef),i.value[t]=n}}function F(t){var a,m;const n=i.value.findIndex(f=>(f==null?void 0:f.thumbRef)===t.target);if(n!==-1)t.preventDefault(),o.value=n,(m=(a=i.value[n])==null?void 0:a.thumbRef)==null||m.focus(),D();else{const f=q(t);K(f),N(f)}}function C(t){if(e.keyboard){const n=i.value.findIndex(a=>(a==null?void 0:a.thumbRef)===t.target);if(n!==-1){let a=null;t.code==="ArrowUp"||t.code==="ArrowRight"?(o.value=n,a=J(1)):(t.code==="ArrowDown"||t.code==="ArrowLeft")&&(o.value=n,a=J(-1)),a!==null&&(t.preventDefault(),N(a),z(a))}}}function R(t,n){t.stopPropagation(),K(n),N(n)}function D(){s.value||(s.value=!0,T(window,"mousemove",M),T(window,"touchmove",M),T(window,"mouseup",V),T(window,"touchend",V),T(window,"contextmenu",V))}function g(){if(s.value){const t=i.value[o.value];s.value=!1,o.value=-1,t!=null&&t.isHovering||_(()=>t==null?void 0:t.hideTooltip()),O(window,"mousemove",M),O(window,"touchmove",M),O(window,"mouseup",V),O(window,"touchend",V),O(window,"contextmenu",V)}}function M(t){if(!s.value){g();return}const n=q(t);N(n),z(n)}function V(){g()}function ee(){var n,a;const{value:t}=o;t!==-1&&((a=(n=i.value[t])==null?void 0:n.thumbRef)==null||a.focus())}function N(t){const{value:n}=o;if(u.value[n]!==t){const a=u.value.slice();a[n]=t;const m=be(l.value),f=e.range?a:a[0];l.setValue(f),U(e.onChange,f,m),_(()=>E())}}function K(t){const{value:n}=u;o.value=e.range?Math.abs(n[0]-t)<Math.abs(n[1]-t)?0:1:0}function z(t){var n,a;if(e.range){const{value:m}=u;let f=o.value;t>m[1]?f=1:t<m[0]&&(f=0),f!==o.value&&(o.value=f,(a=(n=i.value[o.value])==null?void 0:n.thumbRef)==null||a.focus())}}function q(t){const n=se(t),a=h.value.getBoundingClientRect();let m;return e.vertical?m=(a.bottom-n.clientY)/a.height:m=(n.clientX-a.left)/a.width,e.reverse&&(m=1-m),G(m*(e.max-e.min)+e.min)}function G(t){var j,Q;t=Math.max(e.min,Math.min(e.max,t));const n=(j=e.marks)!=null?j:{},a=Object.keys(n).map(parseFloat);if(e.step!==null){const P=Math.pow(10,y.value),te=Math.floor((e.max*P-e.min*P)/(e.step*P)),ne=Math.min((t-e.min)/e.step,te),ae=Math.round(ne)*e.step+e.min;a.push(parseFloat(ae.toFixed(y.value)))}const m=a.map(P=>Math.abs(t-P)),f=m.indexOf(Math.min(...m));return(Q=a[f])!=null?Q:e.min}function J(t){if(e.step!==null){const n=t<0?-e.step:+e.step,a=u.value[o.value];return Math.max(e.min,Math.min(e.max,parseFloat((a+n).toFixed(x.value))))}return e.min}Z(()=>l.value,(t,n)=>{s.value||Array.isArray(t)&&Array.isArray(n)&&t.every((a,m)=>a===n[m])||E()},{immediate:!0}),Z(()=>[e.max,e.min,e.range,e.step],()=>{E()});function E(){var a,m;if(e.min>e.max)return;const{value:t=0}=l;let n;if(e.range){if(!Array.isArray(t))return;n=[(a=t[0])!=null?a:e.min,(m=t[1])!=null?m:e.min]}else{if(!W(t))return;n=[t]}u.value=n.map(f=>W(f)?G(f):e.min).sort((f,j)=>f-j)}return{valuesRef:u,thumbListRef:i,railRef:h,direction:A,isDisabled:r,isDragging:s,focus:b,blur:v,setThumbRefs:$,handleMouseDown:F,handleMouseUp:ee,handleKeyDown:C,handleMarkClick:R}}const Re=L({name:"IxSlider",props:xe,setup(e,{expose:c}){const b=re("common"),{direction:v,isDisabled:l,isDragging:d,valuesRef:u,railRef:i,setThumbRefs:o,handleMouseDown:h,handleMouseUp:s,handleKeyDown:r,handleMarkClick:y,focus:x,blur:A}=Ce(e),{trackStyle:$}=Ve(e,u,v),F=k(()=>`${b.prefixCls}-slider`),C=k(()=>u.value.slice(0,e.range?2:1)),R=k(()=>e.vertical?e.reverse?"translateY(-50%)":"translateY(50%)":e.reverse?"translateX(50%)":"translateX(-50%)"),D=k(()=>{const g=F.value;return{[g]:!0,[`${g}-disabled`]:l.value,[`${g}-vertical`]:e.vertical,[`${g}-with-marks`]:!Y(e.marks)}});return ge(X,{...ye(e),direction:v,dragging:d,values:u,disabled:l,prefixCls:F}),c({focus:x,blur:A}),()=>w("div",{class:D.value,onMousedown:l.value?I:h,onTouchstart:l.value?I:h,onMouseup:l.value?I:s,onKeydown:l.value?I:r},[w("div",{ref:i,class:`${F.value}-rail`},null),w("div",{class:`${F.value}-track`,style:$.value},null),w(Se,null,null),C.value.map((g,M)=>{const V=(g-e.min)/(e.max-e.min)*100;return w(Be,{ref:o(M),value:g,role:"slider",tabindex:l.value?-1:0,"aria-label":"Slider","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":g,"aria-readonly":l.value,"aria-orientation":e.vertical?"vertical":"horizontal",onFocus:e.onFocus,onBlur:e.onBlur,style:{transform:R.value,[v.value]:`${V}%`}},null)}),w(ke,{onClickMark:l.value?I:y},null)])}});function Ve(e,c,b){const v=k(()=>Math.max(...c.value)),l=k(()=>Math.min(...c.value));return{trackStyle:k(()=>({[b.value]:e.range?`${(l.value-e.min)/(e.max-e.min)*100}%`:"0%",[e.vertical?"height":"width"]:e.range?`${(v.value-l.value)/(e.max-e.min)*100}%`:`${(+c.value[0]-e.min)/(e.max-e.min)*100}%`}))}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Pe=Re;export{Pe as I};
