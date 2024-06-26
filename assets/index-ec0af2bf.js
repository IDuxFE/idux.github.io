import{M as L,N as E,J as q,U as y,W as I,X as A,m as $,Y as F,Z as P}from"./index-2b2b2209.js";import{l as H,c as g,q as k,r as m,D,m as p,M as U,w as N,n as O,y as W}from"./vendor-fe119cfa.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=Symbol("anchorToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const j={affix:{type:Boolean,default:!0},bounds:Number,hideLinkBall:{type:Boolean,default:void 0},offsetTop:Number,target:[String,HTMLElement,Function],targetOffset:Number,onChange:[Function,Array],onClick:[Function,Array]},G={href:{type:String,required:!0},title:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function S(){return{inkBallWidth:2,inkBallHeight:16}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const R=(e,l)=>S(),J=H({name:"IxAnchor",props:j,setup(e,{slots:l}){const o=L("common"),{globalHashId:s,hashId:v,registerToken:n}=E("anchor");n(R);const t=g(()=>`${o.prefixCls}-anchor`),r=L("anchor"),d=g(()=>{var u;return(u=e.hideLinkBall)!=null?u:r.hideLinkBall}),a=g(()=>{const{offsetTop:u}=e;return{maxHeight:u?`calc(100vh - ${u}px)`:"100vh"}}),{activeLink:i}=V(e,r),{anchorRef:c,inkBallElRef:f,inkBallClasses:C,inkBallTop:h}=X(i,t);return()=>{var x;const u=t.value,B=d.value?null:k("span",{class:C.value,style:{top:h.value},ref:f},null),T=k("div",{class:`${u}-wrapper`,style:a.value},[k("div",{class:u,ref:c},[k("div",{class:`${u}-ink`},[B]),(x=l.default)==null?void 0:x.call(l)])]);return e.affix?k(q,{class:[s.value,v.value],target:e.target,offset:e.offsetTop},{default:()=>[T]}):T}}}),V=(e,l)=>{const o=m([]),s=a=>{o.value.includes(a)||o.value.push(a)},v=a=>{const i=o.value.indexOf(a);i!==-1&&o.value.splice(i,1)},n=m(),t=a=>{n.value!==a&&(n.value=a,$(e.onChange,a))},{scrollTo:r}=Z(e,l,o,t);return D(w,{registerLink:s,unregisterLink:v,activeLink:n,handleLinkClick:(a,i)=>{$(e.onClick,a,i),r(i.href)}}),{activeLink:n}},X=(e,l)=>{const o=m(),s=m(),v=g(()=>{const t=l.value;return{[`${t}-ink-ball`]:!0,[`${t}-ink-ball-visible`]:!!e.value}}),n=m();return p(()=>{U(()=>{var i,c,f;const t=(i=o.value)==null?void 0:i.querySelector(`a[data-href="${e.value}"]`);if(!t)return;const r=(f=(c=s.value)==null?void 0:c.getBoundingClientRect().height)!=null?f:9,{offsetTop:d,clientHeight:a}=t;n.value=`${d+a/2-r/2}px`},{flush:"post"})}),{anchorRef:o,inkBallElRef:s,inkBallClasses:v,inkBallTop:n}},M=(e,l)=>{const o=document.getElementById(e.split("#")[1]);if(o){const{top:s}=P(o,l);return s}return null},Y=(e,l,o,s)=>e.length?e.map(n=>{const t=M(n,l);return{link:n,top:t}}).reduce((n,t)=>{const{top:r}=t;return r!==null&&r<o+s&&n.top<r?t:n}).link:"",Z=(e,l,o,s)=>{const v=g(()=>{var c;return(c=e.bounds)!=null?c:l.bounds}),n=m(),t="scroll";let r=!1;const d=g(()=>{var c,f;return(f=(c=e.targetOffset)!=null?c:e.offsetTop)!=null?f:0}),a=()=>{if(r)return;const c=Y(o.value,n.value,d.value,v.value);s(c)},i=c=>{s(c);const f=M(c,n.value);f!==null&&(r=!0,F({amountOfChange:f-d.value,target:n.value,callback:()=>{r=!1}}))};return N(()=>e.target,()=>{y(n.value,t,a),n.value=I(e.target),A(n.value,t,a),a()}),p(()=>{n.value=I(e.target),A(n.value,t,a),a()}),O(()=>{y(n.value,t,a)}),{scrollTo:i}},z=H({name:"IxAnchorLink",props:G,setup(e,{slots:l}){const o=L("common"),{globalHashId:s,hashId:v,registerToken:n}=E("anchor");n(R);const t=g(()=>`${o.prefixCls}-anchor-link`),{registerLink:r,unregisterLink:d,activeLink:a,handleLinkClick:i}=W(w);N(()=>e.href,(h,u)=>{d(u),r(h)}),p(()=>r(e.href)),O(()=>d(e.href));const c=g(()=>a.value===e.href),f=g(()=>{const h=t.value;return{[`${h}-title`]:!0,[`${h}-title-active`]:c.value}}),C=h=>i(h,e);return()=>{var T,x,b;const{href:h,title:u}=e,B=t.value;return k("div",{class:[B,s.value,v.value]},[k("a",{class:f.value,href:h,"data-href":h,title:u,onClick:C},[(x=(T=l.title)==null?void 0:T.call(l))!=null?x:u]),(b=l.default)==null?void 0:b.call(l)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _=J,ee=z;export{_ as I,ee as a};
