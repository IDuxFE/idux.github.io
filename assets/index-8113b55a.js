import{d as E,as as L,at as H,c as g,f as k,am as q,q as m,a4 as P,v as b,H as D,x as O,aB as y,aC as I,aD as A,y as R,R as $,aE as M,aF as j,i as G}from"./index-ab797f89.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=Symbol("anchorToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U={affix:{type:Boolean,default:!0},bounds:Number,hideLinkBall:{type:Boolean,default:void 0},offsetTop:Number,target:[String,HTMLElement,Function],targetOffset:Number,onChange:[Function,Array],onClick:[Function,Array]},V={href:{type:String,required:!0},title:String};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function S(){return{inkBallWidth:2,inkBallHeight:16}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=(e,l)=>S();/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=E({name:"IxAnchor",props:U,setup(e,{slots:l}){const o=L("common"),{globalHashId:s,hashId:v,registerToken:n}=H("anchor");n(w);const t=g(()=>`${o.prefixCls}-anchor`),c=L("anchor"),d=g(()=>{var u;return(u=e.hideLinkBall)!=null?u:c.hideLinkBall}),a=g(()=>{const{offsetTop:u}=e;return{maxHeight:u?`calc(100vh - ${u}px)`:"100vh"}}),{activeLink:i}=z(e,c),{anchorRef:r,inkBallElRef:f,inkBallClasses:C,inkBallTop:h}=J(i,t);return()=>{var x;const u=t.value,B=d.value?null:k("span",{class:C.value,style:{top:h.value},ref:f},null),T=k("div",{class:`${u}-wrapper`,style:a.value},[k("div",{class:u,ref:r},[k("div",{class:`${u}-ink`},[B]),(x=l.default)==null?void 0:x.call(l)])]);return e.affix?k(q,{class:[s.value,v.value],target:e.target,offset:e.offsetTop},{default:()=>[T]}):T}}}),z=(e,l)=>{const o=m([]),s=a=>{o.value.includes(a)||o.value.push(a)},v=a=>{const i=o.value.indexOf(a);i!==-1&&o.value.splice(i,1)},n=m(),t=a=>{n.value!==a&&(n.value=a,$(e.onChange,a))},{scrollTo:c}=Q(e,l,o,t);return P(N,{registerLink:s,unregisterLink:v,activeLink:n,handleLinkClick:(a,i)=>{$(e.onClick,a,i),c(i.href)}}),{activeLink:n}},J=(e,l)=>{const o=m(),s=m(),v=g(()=>{const t=l.value;return{[`${t}-ink-ball`]:!0,[`${t}-ink-ball-visible`]:!!e.value}}),n=m();return b(()=>{D(()=>{var i,r,f;const t=(i=o.value)==null?void 0:i.querySelector(`a[data-href="${e.value}"]`);if(!t)return;const c=(f=(r=s.value)==null?void 0:r.getBoundingClientRect().height)!=null?f:9,{offsetTop:d,clientHeight:a}=t;n.value=`${d+a/2-c/2}px`},{flush:"post"})}),{anchorRef:o,inkBallElRef:s,inkBallClasses:v,inkBallTop:n}},F=(e,l)=>{const o=document.getElementById(e.split("#")[1]);if(o){const{top:s}=j(o,l);return s}return null},K=(e,l,o,s)=>e.length?e.map(n=>{const t=F(n,l);return{link:n,top:t}}).reduce((n,t)=>{const{top:c}=t;return c!==null&&c<o+s&&n.top<c?t:n}).link:"",Q=(e,l,o,s)=>{const v=g(()=>{var r;return(r=e.bounds)!=null?r:l.bounds}),n=m(),t="scroll";let c=!1;const d=g(()=>{var r,f;return(f=(r=e.targetOffset)!=null?r:e.offsetTop)!=null?f:0}),a=()=>{if(c)return;const r=K(o.value,n.value,d.value,v.value);s(r)},i=r=>{s(r);const f=F(r,n.value);f!==null&&(c=!0,M({amountOfChange:f-d.value,target:n.value,callback:()=>{c=!1}}))};return O(()=>e.target,()=>{y(n.value,t,a),n.value=I(e.target),A(n.value,t,a),a()}),b(()=>{n.value=I(e.target),A(n.value,t,a),a()}),R(()=>{y(n.value,t,a)}),{scrollTo:i}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const X=E({name:"IxAnchorLink",props:V,setup(e,{slots:l}){const o=L("common"),{globalHashId:s,hashId:v,registerToken:n}=H("anchor");n(w);const t=g(()=>`${o.prefixCls}-anchor-link`),{registerLink:c,unregisterLink:d,activeLink:a,handleLinkClick:i}=G(N);O(()=>e.href,(h,u)=>{d(u),c(h)}),b(()=>c(e.href)),R(()=>d(e.href));const r=g(()=>a.value===e.href),f=g(()=>{const h=t.value;return{[`${h}-title`]:!0,[`${h}-title-active`]:r.value}}),C=h=>i(h,e);return()=>{var T,x,p;const{href:h,title:u}=e,B=t.value;return k("div",{class:[B,s.value,v.value]},[k("a",{class:f.value,href:h,"data-href":h,title:u,onClick:C},[(x=(T=l.title)==null?void 0:T.call(l))!=null?x:u]),(p=l.default)==null?void 0:p.call(l)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=W,_=X;export{Z as I,_ as a};
