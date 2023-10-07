import{x as A,l as j,c as v,A as F,z as C,r as R,q as $,t as G,w as D,O as L,B as q}from"./vendor-5c3e2579.js";import{aj as O,o as H,m as M,D as U}from"./index-30b90d3b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=Symbol("resizable");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const J=["top","bottom","start","end","topStart","topEnd","bottomStart","bottomEnd"],K={boundary:{type:[String,Object],default:"parent"},disabled:{type:Boolean,default:!1},free:{type:Boolean,default:!1},handlers:{type:Array,default:()=>J},is:{type:[String,Object],default:"div"},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},minHeight:{type:Number,default:8},minWidth:{type:Number,default:8},onResizeStart:[Function,Array],onResizing:[Function,Array],onResizeEnd:[Function,Array]},Q={placement:{type:String,default:"bottomEnd"}},_=A({name:"CdkResizableHandle",props:Q,setup(n,{slots:e}){const{handleResizeStart:m}=j(Y),p=a=>m(n.placement,a),s=v(()=>{const a="cdk-resizable-handle";return F({[a]:!0,[`${a}-${n.placement}`]:!0})});return()=>{var a;return C("div",{class:s.value,onPointerdown:p},[(a=e.default)==null?void 0:a.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function V(n,e){const m=R(!1),p=R(),s=R(),a=R({}),z=(d,t)=>{const{width:u,height:r,top:h,left:o,clientX:c,clientY:b}=s.value;let i=u,l=r;switch(d){case"top":l=r+b-t.clientY;break;case"bottom":l=t.clientY-h;break;case"start":i=u+c-t.clientX;break;case"end":i=t.clientX-o;break;case"topStart":i=u+c-t.clientX,l=r+b-t.clientY;break;case"topEnd":i=t.clientX-o,l=r+b-t.clientY;break;case"bottomStart":i=u+c-t.clientX,l=t.clientY-h;break;case"bottomEnd":i=t.clientX-o,l=t.clientY-h;break}return{width:i,height:l}},f=(d,t,u,r)=>{var B,N,W;const{boundary:h="parent",minWidth:o=8,minHeight:c=8}=e;let b=1/0,i=1/0;if(h===window)typeof window<"u"&&(b=window.innerWidth,i=window.innerHeight);else{const x=h==="parent"?(B=H(n))==null?void 0:B.parentElement:H(h);if(x&&x instanceof HTMLElement){const X=x.getBoundingClientRect();b=X.width,i=X.height}}const l=P((N=e.maxWidth)!=null?N:Number.MAX_SAFE_INTEGER,b),E=P((W=e.maxHeight)!=null?W:Number.MAX_SAFE_INTEGER,i);let g,y;return r!==-1?/(start|end)/i.test(d)?(g=Math.min(Math.max(t,o),l),y=Math.min(Math.max(g/r,c),E),(y>=E||y<=c)&&(g=Math.min(Math.max(y*r,o),l))):(y=Math.min(Math.max(u,c),E),g=Math.min(Math.max(y*r,o),l),(g>=l||g<=o)&&(y=Math.min(Math.max(g/r,c),E))):(g=Math.min(Math.max(t,o),l),y=Math.min(Math.max(u,c),E)),{width:g,height:y}},w=(d,t)=>{p.value=d;const{width:u,height:r,left:h,top:o}=H(n).getBoundingClientRect(),{clientX:c,clientY:b}=t;s.value={width:u,height:r,left:h,top:o,clientX:c,clientY:b};const i={width:u,height:r,offsetWidth:0,offsetHeight:0};M(e.onResizeStart,i,t)},S=d=>{const t=p.value;if(!s.value||!t)return;Z(t),m.value=!0;const{width:u,height:r}=z(t,d),{width:h,height:o}=f(t,u,r,-1),{width:c,height:b}=s.value,i={width:h,height:o,offsetWidth:h-c,offsetHeight:o-b};a.value=i,M(e.onResizing,i,d)},k=d=>{s.value&&(ee(),m.value=!1,p.value=void 0,s.value=void 0,M(e.onResizeEnd,G(a.value),d))},I=[O(document,"pointermove",S,!0),O(document,"pointerup",k,!0)],T=()=>{I.forEach(d=>d())};return $(Y,{handleResizeStart:w}),{resizing:v(()=>m.value),position:v(()=>a.value),stop:T}}function P(n,e){return n<e?n:e}function Z(n){let e="";switch(n){case"top":case"bottom":e="ns-resize";break;case"start":case"end":e="ew-resize";break;case"topStart":case"bottomEnd":e="nwse-resize";break;case"topEnd":case"bottomStart":e="nesw-resize";break}document.body.style.cursor=e,document.body.style.userSelect="none"}function ee(){document.body.style.cursor="",document.body.style.userSelect=""}const te=A({name:"CdkResizable",props:K,setup(n,{slots:e}){const m=R(),{resizing:p,position:s}=V(m,n),a=v(()=>{const f="cdk-resizable";return F({[f]:!0,[`${f}-disabled`]:n.disabled,[`${f}-resizing`]:p.value})}),z=v(()=>{if(!n.free)return;const{width:f,height:w}=s.value;return`width: ${f}px;height: ${w}px`});return()=>{const{handlers:f,is:w}=n;return C(w,{ref:m,class:a.value,style:z.value},{default:()=>{var S;return[(S=e.default)==null?void 0:S.call(e),f.map(k=>C(_,{key:k,placement:k},null))]}})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={disabled:{type:Boolean,default:!1},is:{type:[String,Object],default:"div"},options:{type:Object,default:void 0},onResize:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=A({name:"CdkResizeObserver",props:ne,setup(n,{slots:e}){const m=R(),p=z=>M(n.onResize,z);let s;const a=()=>{s&&(s(),s=void 0)};return D([()=>n.disabled,()=>n.options],([z,f])=>{a(),z||(s=U(m,p,f))},{immediate:!0,flush:"post"}),L(a),()=>{const z=n.is;return q(z,{ref:m,class:"cdk-resize-observer"},e)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re=te,oe=_,ce=ae;export{re as C,oe as a,ce as b,V as u};
