import{d as A,i as j,c as v,an as _,f as C,q as R,b3 as P,a4 as $,aj as H,R as M,a_ as G,x as L,ah as q,y as D,Q}from"./index-88a96bc2.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=Symbol("resizable");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const U=["top","bottom","start","end","topStart","topEnd","bottomStart","bottomEnd"],J={boundary:{type:[String,Object],default:"parent"},disabled:{type:Boolean,default:!1},free:{type:Boolean,default:!1},handlers:{type:Array,default:()=>U},is:{type:[String,Object],default:"div"},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},minHeight:{type:Number,default:8},minWidth:{type:Number,default:8},onResizeStart:[Function,Array],onResizing:[Function,Array],onResizeEnd:[Function,Array]},K={placement:{type:String,default:"bottomEnd"}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=A({name:"CdkResizableHandle",props:K,setup(n,{slots:e}){const{handleResizeStart:m}=j(F),p=a=>m(n.placement,a),s=v(()=>{const a="cdk-resizable-handle";return _({[a]:!0,[`${a}-${n.placement}`]:!0})});return()=>{var a;return C("div",{class:s.value,onPointerdown:p},[(a=e.default)==null?void 0:a.call(e)])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function V(n,e){const m=R(!1),p=R(),s=R(),a=R({}),z=(d,t)=>{const{width:u,height:r,top:h,left:o,clientX:c,clientY:b}=s.value;let i=u,l=r;switch(d){case"top":l=r+b-t.clientY;break;case"bottom":l=t.clientY-h;break;case"start":i=u+c-t.clientX;break;case"end":i=t.clientX-o;break;case"topStart":i=u+c-t.clientX,l=r+b-t.clientY;break;case"topEnd":i=t.clientX-o,l=r+b-t.clientY;break;case"bottomStart":i=u+c-t.clientX,l=t.clientY-h;break;case"bottomEnd":i=t.clientX-o,l=t.clientY-h;break}return{width:i,height:l}},f=(d,t,u,r)=>{var N,W,B;const{boundary:h="parent",minWidth:o=8,minHeight:c=8}=e;let b=1/0,i=1/0;if(h===window)typeof window<"u"&&(b=window.innerWidth,i=window.innerHeight);else{const x=h==="parent"?(N=H(n))==null?void 0:N.parentElement:H(h);if(x&&x instanceof HTMLElement){const X=x.getBoundingClientRect();b=X.width,i=X.height}}const l=O((W=e.maxWidth)!=null?W:Number.MAX_SAFE_INTEGER,b),E=O((B=e.maxHeight)!=null?B:Number.MAX_SAFE_INTEGER,i);let y,g;return r!==-1?/(start|end)/i.test(d)?(y=Math.min(Math.max(t,o),l),g=Math.min(Math.max(y/r,c),E),(g>=E||g<=c)&&(y=Math.min(Math.max(g*r,o),l))):(g=Math.min(Math.max(u,c),E),y=Math.min(Math.max(g*r,o),l),(y>=l||y<=o)&&(g=Math.min(Math.max(y/r,c),E))):(y=Math.min(Math.max(t,o),l),g=Math.min(Math.max(u,c),E)),{width:y,height:g}},w=(d,t)=>{p.value=d,m.value=!0;const{width:u,height:r,left:h,top:o}=H(n).getBoundingClientRect(),{clientX:c,clientY:b}=t;s.value={width:u,height:r,left:h,top:o,clientX:c,clientY:b};const i={width:u,height:r,offsetWidth:0,offsetHeight:0};a.value=i,M(e.onResizeStart,i,t)},S=d=>{const t=p.value;if(!s.value||!t)return;Z(t);const{width:u,height:r}=z(t,d),{width:h,height:o}=f(t,u,r,-1),{width:c,height:b}=s.value,i={width:h,height:o,offsetWidth:h-c,offsetHeight:o-b};a.value=i,M(e.onResizing,i,d)},k=d=>{s.value&&(ee(),m.value=!1,p.value=void 0,s.value=void 0,M(e.onResizeEnd,G(a.value),d))},I=[P(document,"pointermove",S,!0),P(document,"pointerup",k,!0)],T=()=>{I.forEach(d=>d())};return $(F,{handleResizeStart:w}),{resizing:v(()=>m.value),position:v(()=>a.value),stop:T}}function O(n,e){return n<e?n:e}function Z(n){let e="";switch(n){case"top":case"bottom":e="ns-resize";break;case"start":case"end":e="ew-resize";break;case"topStart":case"bottomEnd":e="nwse-resize";break;case"topEnd":case"bottomStart":e="nesw-resize";break}document.body.style.cursor=e,document.body.style.userSelect="none"}function ee(){document.body.style.cursor="",document.body.style.userSelect=""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=A({name:"CdkResizable",props:J,setup(n,{slots:e}){const m=R(),{resizing:p,position:s}=V(m,n),a=v(()=>{const f="cdk-resizable";return _({[f]:!0,[`${f}-disabled`]:n.disabled,[`${f}-resizing`]:p.value})}),z=v(()=>{if(!n.free)return;const{width:f,height:w}=s.value;return`width: ${f}px;height: ${w}px`});return()=>{const{handlers:f,is:w}=n;return C(w,{ref:m,class:a.value,style:z.value},{default:()=>{var S;return[(S=e.default)==null?void 0:S.call(e),f.map(k=>C(Y,{key:k,placement:k},null))]}})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne={disabled:{type:Boolean,default:!1},is:{type:[String,Object],default:"div"},options:{type:Object,default:void 0},onResize:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=A({name:"CdkResizeObserver",props:ne,setup(n,{slots:e}){const m=R(),p=z=>M(n.onResize,z);let s;const a=()=>{s&&(s(),s=void 0)};return L([()=>n.disabled,()=>n.options],([z,f])=>{a(),z||(s=q(m,p,f))},{immediate:!0,flush:"post"}),D(a),()=>{const z=n.is;return Q(z,{ref:m,class:"cdk-resize-observer"},e)}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=te,re=Y,oe=ae;export{se as C,re as a,oe as b,V as u};
