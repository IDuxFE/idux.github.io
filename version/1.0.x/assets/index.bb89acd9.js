import{v as g,e as d,y as i,ap as x,z as v}from"./vendor.0e7da6ec.js";import{u as $,aj as N,w as z}from"./index.3f21dce0.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const I={strokeWidth:{type:Number,default:4},radius:{type:Number,default:14},duration:{type:Number,default:2}},W=g({name:"\u0275Loading",props:I,setup(t){const a=$("common"),l=d(()=>`${a.prefixCls}-loading`);return()=>{const r=l.value,{duration:u,strokeWidth:e,radius:n}=t,o=`${u}s`,m=n*2,s=Math.PI*2*n,p=.23*s,f=.11*s;return i("div",{class:r,role:"img","aria-label":"loading"},[i("svg",{class:`${r}-icon`,viewBox:`0 0 ${m} ${m}`},[i("g",{id:"loading-48",fill:"none","fill-rule":"evenodd",transform:`rotate(-90,${n},${n})`},[i("circle",{class:`${r}-snd-arch`,cx:n,cy:n,r:n-e/2,"stroke-width":e,"stroke-linecap":"round","stroke-dasharray":`${f} ${s+1}`},[i("animate",{attributeName:"stroke-dashoffset",values:`${f};${f};${-s}`,dur:o,begin:"0s",repeatCount:"indefinite",calcMode:"spline",keyTimes:"0;0.3333;1",keySplines:"0 0 0 0;0.42 0 0.58 1;"},null)]),i("circle",{class:`${r}-fst-arch`,cx:n,cy:n,r:n-e/2,"stroke-width":e,"stroke-linecap":"round","stroke-dasharray":`${p} ${s+1}`},[i("animate",{attributeName:"stroke-dashoffset",values:`${p};${p};${-s};${-s}`,dur:o,begin:"0s",repeatCount:"indefinite",calcMode:"spline",keyTimes:"0;0.3333;0.7;1",keySplines:"0 0 0 0;0.42 0 0.58 1;0 0 0 0"},null)]),i("circle",{class:`${r}-bg-circle`,cx:n,cy:n,r:n-e/2,"stroke-width":e,"stroke-linecap":"round","stroke-dasharray":`${s} ${s+1}`},[i("animate",{attributeName:"stroke-dashoffset",values:`${s};0;${-s};${-s}`,dur:o,begin:"0s",repeatCount:"indefinite",calcMode:"spline",keyTimes:"0;0.3333;0.666;1",keySplines:"0.6 0 0.4 1;0.6 0 0.4 1;0,0,0,0"},null)])])])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const w=W;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const A={strokeWidth:Number,radius:Number,duration:Number,spinning:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},icon:String,tip:String,tipAlign:String,size:String},L={sm:3,md:3,lg:4},P={sm:14,md:14,lg:24},T=g({name:"IxSpin",props:A,setup(t,{slots:a}){const l=$("common"),r=d(()=>`${l.prefixCls}-spin`),u=$("spin"),{size:e,strokeWidth:n,radius:o}=B(t,u),m=d(()=>N(a)),s=d(()=>{var c;return(c=t.icon)!=null?c:u.icon}),p=d(()=>{var c;return(c=t.tip)!=null?c:u.tip}),{spinnerClassName:f,containerClassName:h}=M(t,u,e,m,r),k=()=>a.default?i("div",{class:h.value},[a.default()]):null,y=()=>p.value?i("div",{class:`${r.value}-spinner-tip`},[p.value]):null,C=()=>{const c=`${r.value}-spinner-icon`;if(a.icon)return i("div",{class:c},[a.icon()]);if(s.value){const b=x(t.duration&&{animationDuration:`${t.duration}s`});return i("div",{class:[c,t.rotate&&`${c}--rotate`],style:b},[i(z,{name:s.value},null)])}return i("div",{class:c},[i(w,{strokeWidth:n.value,radius:o.value,duration:t.duration},null)])},S=()=>t.spinning?i("div",{class:f.value},[C(),y()]):null;return()=>i("div",{class:r.value},[S(),k()])}}),B=(t,a)=>{const l=d(()=>{var e;return(e=t.size)!=null?e:a.size}),r=d(()=>{var e,n,o;return(o=(n=t.strokeWidth)!=null?n:(e=a.strokeWidth)==null?void 0:e[l.value])!=null?o:L[l.value]}),u=d(()=>{var e,n,o;return(o=(n=t.radius)!=null?n:(e=a.radius)==null?void 0:e[l.value])!=null?o:P[l.value]});return{size:l,strokeWidth:r,radius:u}},M=(t,a,l,r,u)=>{const e=u.value,n=d(()=>{var s;const m=(s=t.tipAlign)!=null?s:a.tipAlign;return v([`${e}-spinner`,`${e}-spinner-tip-${m}`,`${e}-spinner-${l.value}`])}),o=d(()=>r.value?v([`${e}-container`,t.spinning?`${e}-container-blur`:""]):[]);return{spinnerClassName:n,containerClassName:o}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const G=T;export{G as I};
