import{ao as H,a6 as J,A as C,M as x,N as U,aY as Q,aZ as ee,C as oe,a_ as te,m as B}from"./index-c73ba825.js";import{c as u,r as k,M as ae,N as E,n as h,p as v,l as K,ab as D,m as ne,_ as re,w as W,V as le,ac as se}from"./vendor-deae6a9f.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=10,y=1,N=0,ie=.2,ue=90;function ce(e,o,t,n,a,r,l){const s=()=>e("next"),i=()=>e("previous"),g=()=>o("left"),f=()=>o("right"),d=()=>t("out"),m=()=>t("in"),w=()=>n(!1);return u(()=>[{key:"goPrevious",icon:"left",opr:i,disabled:r.value.previous,visible:l.value},{key:"goNext",icon:"right",opr:s,disabled:r.value.next,visible:l.value},{key:"rotateLeft",icon:"rotate-left",opr:g,visible:!0},{key:"rotateRight",icon:"rotate-right",opr:f,visible:!0},{key:"zoomOut",icon:"zoom-out",opr:d,disabled:a.value.out,visible:!0},{key:"zoomIn",icon:"zoom-in",opr:m,disabled:a.value.in,visible:!0},{key:"close",icon:"close",opr:w,visible:!0}])}function ve(e){const o=k(y),t=k(N),n={left:-1,right:1},a={in:1,out:-1},r=u(()=>{const[d,m]=e.value;return d>y?d:m<y?m:y});ae(()=>o.value=r.value);const l=u(()=>{const[d,m]=e.value;return{in:o.value>=m,out:o.value<=d}}),s=u(()=>({transform:`scale(${o.value}) rotate(${t.value}deg)`})),i=E((d="left",m=ue)=>{t.value=t.value+m*n[d]},F),g=E((d,m=ie)=>{l.value[d]||(o.value=o.value+m*a[d])},F);return{transformStyle:s,scaleDisabled:l,rotateHandle:i,scaleHandle:g,resetTransform:()=>{o.value=r.value,t.value=N}}}function de(e,o){const[t,n]=H(e,"activeIndex",0),a=u(()=>({previous:!o.value&&t.value===0,next:!o.value&&t.value===e.images.length-1})),r=u(()=>e.images.length>1),l=E((s="next")=>{if(s==="next"){if(a.value.next||a.value.previous)return;n(t.value>=e.images.length-1?0:t.value+1);return}n(t.value<=0?e.images.length-1:t.value-1)},F);return{activeIndex:t,switchDisabled:a,switchVisible:r,goHandle:l}}const me=e=>{const{disabled:o,icon:t,prefixCls:n,opr:a}=e,r=J(),l=u(()=>h({[`${n}-opr-item`]:!0,[`${n}-opr-item-disabled`]:o}));return v(C,{class:l.value,name:t,onClick:a,key:r},null)},fe=me;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ge={visible:{type:Boolean,default:void 0},activeIndex:Number,container:{type:[String,HTMLElement,Function],default:void 0},images:{type:Array,default:()=>[]},zoom:{type:Array,validator:e=>e.length===2},loop:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},zIndex:Number,"onUpdate:visible":[Function,Array],"onUpdate:activeIndex":[Function,Array]},we={src:{type:String,required:!0},preview:{type:Boolean,default:void 0},imageViewer:Object,onLoad:[Function,Array],onError:[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function M(e){const{colorWhite:o,fontSizeXl:t}=e;return{minWidth:96,minHeight:96,objectFit:"contain",previewBgColor:"rgba(0, 0, 0, 0.5)",previewIconColor:o,previewIconSize:t,viewerBgColor:"rgba(0, 0, 0, 0.45)",viewerOprColor:o,viewerOprColorDisabled:"rgba(255, 255, 255, 0.35)",viewerOprHeight:48,viewerOprMarginBottom:48,viewerOprFontSize:t,viewerOprBgColor:"rgba(0, 0, 0, 0.1)",viewerOprItemMargin:"0 24px"}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Z=(e,o)=>M(e),R=te?"DOMMouseScroll":"mousewheel",j=K({name:"IxImageViewer",props:ge,setup(e){const o=x("common"),{globalHashId:t,hashId:n,registerToken:a}=U("image");a(Z);const r=x("imageViewer"),l=u(()=>`${o.prefixCls}-image-viewer`),s=Q(e,r,o,l),[i,g]=H(e,"visible",!1),f=ee(D(e,"zIndex"),D(o,"overlayZIndex"),i),d=u(()=>{var c;return(c=e.zoom)!=null?c:r.zoom}),m=u(()=>{var c;return(c=e.loop)!=null?c:r.loop}),w=u(()=>{var c;return(c=e.maskClosable)!=null?c:r.maskClosable}),{transformStyle:z,scaleDisabled:$,rotateHandle:S,scaleHandle:p,resetTransform:V}=ve(d),{activeIndex:I,switchDisabled:L,switchVisible:O,goHandle:b}=de(e,m),_=()=>w.value&&g(!1),q=ce(b,S,p,g,$,L,O),{onWheelScroll:A,onKeydown:P}=pe(i,g,p,b);ne(()=>{window.addEventListener(R,A,{passive:!1,capture:!1}),window.addEventListener("keydown",P,!1)}),re(()=>{window.removeEventListener(R,A),window.removeEventListener("keydown",P)}),W([i,I],([c])=>{c&&V()});const G=u(()=>`z-index: ${f.value}`);return()=>{const c=l.value,X=e.images[I.value];return v(oe,{target:s.value,load:i.value},{default:()=>[v(le,{name:`${o.prefixCls}-zoom`,appear:!0},{default:()=>[i.value&&v("div",{class:[c,t.value,n.value],style:G.value},[v("div",{class:`${c}-opr`},[q.value.filter(T=>T.visible).map(T=>{const Y={...T,prefixCls:c};return v(fe,Y,null)})]),v("div",{class:`${c}-preview`,onClick:_},[v("img",{class:`${c}-preview-img`,src:X,style:z.value},null)])])]})]})}}});function pe(e,o,t,n){const a=s=>{var f;if(!e.value)return;const i=s;i.preventDefault(),((f=i.wheelDelta)!=null?f:-i.detail)>0?t("in",.2):t("out",.2)},r={ArrowUp:()=>t("in",.2),ArrowDown:()=>t("out",.2),ArrowLeft:()=>n("previous"),ArrowRight:()=>n("next"),Escape:()=>o(!1)};return{onWheelScroll:a,onKeydown:s=>{e.value&&(s.preventDefault(),s.code in r&&r[s.code]())}}}const be=K({name:"IxImage",inheritAttrs:!1,props:we,setup(e,{attrs:o,slots:t}){const{class:n,style:a,...r}=o,l=x("common"),{globalHashId:s,hashId:i,registerToken:g}=U("image");g(Z);const f=u(()=>`${l.prefixCls}-image`),d=x("image"),m=Ce(e,d),{status:w,setFailed:z,setLoaded:$}=ze(e),[S,p]=xe(),{outerClasses:V,overLayerClasses:I,imageClasses:L}=ke(f,s,i,n,w,m);return()=>{var b;const O={visible:S.value,"onUpdate:visible":p,images:[e.src],...(b=e.imageViewer)!=null?b:{}};return v("div",{class:V.value,style:a},[v("div",{class:I.value},[Ie(e,t,f,w,m,p),ye(t,f,w),he(t,f,w),v(j,O,null)]),v("img",se(r,{src:e.src,class:L.value,onLoad:$,onError:z}),null)])}}});function Ie(e,o,t,n,a,r){var l,s;return n.value==="loaded"&&a.value&&v("span",{class:`${t.value}-preview-wrapper`,onClick:()=>r(!0)},[(s=(l=o.previewIcon)==null?void 0:l.call(o))!=null?s:v(C,{class:`${t.value}-preview-icon`,name:"zoom-in"},null)])}function ye(e,o,t){var n,a;return t.value==="loading"&&((a=(n=e.placeholder)==null?void 0:n.call(e))!=null?a:v(C,{class:`${o.value}-placeholder`,name:"loading"},null))}function he(e,o,t){var n,a;return t.value==="failed"&&((a=(n=e.fallback)==null?void 0:n.call(e))!=null?a:v(C,{class:`${o.value}-fallback`,name:"file-image"},null))}function xe(){const e=k(!1);return[e,t=>{e.value=t}]}function ke(e,o,t,n,a,r){const l=u(()=>h([e.value,o.value,t.value,n,`${e.value}-${a.value}`,{[`${e.value}-preview`]:r.value}])),s=u(()=>h(`${e.value}-layer`)),i=u(()=>h([`${e.value}-inner`,{[`${e.value}-inner-hidden`]:a.value!=="loaded"}]));return{outerClasses:l,overLayerClasses:s,imageClasses:i}}function Ce(e,o){return u(()=>{var t;return(t=e.preview)!=null?t:o.preview})}function ze(e){const o=k("loading"),t=a=>{o.value="loaded",B(e.onLoad,a)},n=a=>{o.value="failed",B(e.onError,a)};return W(()=>e.src,()=>{o.value="loading"},{immediate:!0}),{status:o,setLoaded:t,setFailed:n}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ve=be,Le=j;export{Ve as I,Le as a};