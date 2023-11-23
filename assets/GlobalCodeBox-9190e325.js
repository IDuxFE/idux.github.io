var be=Object.defineProperty;var _e=(e,r,c)=>r in e?be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[r]=c;var L=(e,r,c)=>(_e(e,typeof r!="symbol"?r+"":r,c),c);import{a6 as Ce,a7 as ke,a8 as Se,M as Z,N as q,a9 as $e,aa as we,Q as Ie,ɵ as ne,r as re,ab as le,m as M,k as ie,a as Y,_ as Q,A as W,ac as V,ad as Ae}from"./index-a1eb659d.js";import{x as R,l as O,c as I,r as ee,n as $,ab as J,d as ce,p as F,B as Be,s as Ee,m as Te,aD as De,ag as j,aq as de,ai as T,L as Pe,Y as Ne,K as Me,ah as se,ak as A,an as Re,ao as K,al as Oe,U as Ue}from"./vendor-4aa48d2c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ze=()=>{const e=R(Ce,null);return e===null?ke("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ue=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Fe={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},waveless:{type:Boolean,default:!1},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},je={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ae(e){const{paddingSizeXs:r,controlBorderRadiusSm:c,colorInfoContainerBg:d,colorBorderSecondary:S}=e;return{labelPadding:`0 ${r}px`,fieldsetBorderRadius:c,fieldsetBgColor:d,fieldsetBorderColor:S}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const He=(e,r)=>ae(e),Ge={sm:"xs",md:"sm",lg:"md"},pe=O({name:"IxRadio",inheritAttrs:!1,props:Fe,setup(e,{attrs:r,expose:c,slots:d}){const S=Se(),x=Z("common"),{globalHashId:_,hashId:h,registerToken:t}=q("radio"),{hashId:n}=q("button");t(He);const l=I(()=>`${x.prefixCls}-radio`),a=Z("radio"),{elementRef:s,focus:m,blur:y}=$e(),g=ee();c({focus:m,blur:y});const w=R(we,null),p=R(ue,null),C=I(()=>{var k;return(k=r.name)!=null?k:p==null?void 0:p.props.name}),b=I(()=>{const{value:k}=e;return ce(k)?p?S:void 0:k}),f=I(()=>{var k;return(k=e.buttoned)!=null?k:p==null?void 0:p.props.buttoned}),v=I(()=>{var k,B,P;return(P=(B=(k=e.size)!=null?k:p==null?void 0:p.props.size)!=null?B:w==null?void 0:w.size.value)!=null?P:a.size}),o=I(()=>{var k;return(k=e.waveless)!=null?k:a.waveless}),u=I(()=>{var k,B;return(B=(k=e.mode)!=null?k:p==null?void 0:p.props.mode)!=null?B:"default"}),{isChecked:i,isDisabled:U,isFocused:me,handleChange:ve,handleBlur:he,handleFocus:ye}=Le(e,p,s,b,g,o),ge=I(()=>{const k=f.value,B=i.value,P=k&&B&&u.value==="primary",E=l.value,N=x.prefixCls,G={[_.value]:!!_.value,[n.value]:!!n.value,[h.value]:!!h.value,[E]:!0,[`${E}-checked`]:i.value,[`${E}-disabled`]:U.value,[`${E}-focused`]:me.value,[`${E}-${v.value}`]:k,[`${N}-button`]:k,[`${N}-button-default`]:k&&!P,[`${N}-button-primary`]:P,[`${N}-button-disabled`]:k&&U.value,[`${N}-button-${Ge[v.value]}`]:k};return F([G,r.class])});return()=>{const{autofocus:k,label:B}=e,{class:P,style:E,type:N,tabindex:G,...xe}=r,z=l.value,te=Ie(d.default,B);return $("label",{class:ge.value,style:E,role:"radio","aria-checked":i.value,"aria-disabled":U.value},[$("span",{class:`${z}-input`},[$("input",J({ref:s,type:"radio",class:`${z}-input-inner`,"aria-hidden":!0,autofocus:k,checked:i.value,disabled:U.value,name:C.value,value:b.value,onChange:ve,onBlur:he,onFocus:ye},xe),null),!f.value&&$("span",{class:`${z}-input-box`,tabindex:G},[!o.value&&$(ne,{ref:g},null)])]),f.value&&!o.value&&$(ne,{ref:g},null),te&&$("span",{class:`${z}-label`},[te])])}}}),Le=(e,r,c,d,S,x)=>{let _,h;const t=ee(!1);let n,l;const a=s=>{t.value=!0,M(e.onFocus,s)};if(r){const{accessor:s,props:m}=r;_=I(()=>s.value===d.value),h=I(()=>s.disabled||!!e.disabled),l=y=>{t.value=!1,s.markAsBlurred(),M(e.onBlur,y)},n=y=>{var g;if(c.value){const w=y.target.checked,p=d.value,C=s.value;s.setValue(p),c.value.checked=!1,M(e.onChange,w,!w),M(m.onChange,p,C),!x.value&&((g=S.value)==null||g.play())}}}else{const{accessor:s,control:m}=re({valueKey:"checked"});le(m),_=I(()=>!!s.value),h=I(()=>s.disabled),l=y=>{t.value=!1,s.markAsBlurred(),M(e.onBlur,y)},n=y=>{var g;if(c.value){const w=y.target.checked;s.setValue(w),c.value.checked=!1,M(e.onChange,w,!w),!x.value&&((g=S.value)==null||g.play())}}}return{isChecked:_,isDisabled:h,isFocused:t,handleChange:n,handleBlur:l,handleFocus:a}},Ke=O({name:"IxRadioGroup",inheritAttrs:!1,props:je,setup(e,{attrs:r,slots:c}){const d=Z("common"),{globalHashId:S,hashId:x}=q("radio"),_=I(()=>`${d.prefixCls}-radio-group`),{accessor:h,control:t}=re();le(t),Be(ue,{props:e,accessor:h});const n=I(()=>{var m;return(m=e.gap)!=null?m:e.buttoned?0:8}),l=Ee(),a=()=>{const m=l.value;if(!m)return;const y=`.${d.prefixCls}-radio-checked`,g=m.querySelector(y);g&&m.style.setProperty("--ix-radio-group-fieldset-arrow-offset",`${g.offsetLeft}px`)};Te(()=>a()),De(()=>a());const s=I(()=>{const{buttoned:m}=e,y=n.value,g=_.value;return F({[g]:!0,[`${d.prefixCls}-button-group`]:m,[`${d.prefixCls}-button-group-compact`]:m&&(!y||y==="0")})});return()=>{const{dataSource:m}=e,y=_.value,{class:g,style:w,...p}=r;let C;m?C=m.map(f=>{const{key:v,value:o}=f;return $(pe,J(f,{key:v!=null?v:o,value:o!=null?o:v}),null)}):C=c.default?c.default():void 0;const b=$(ie,J({class:c.fieldset?s.value:F([s.value,g]),style:c.fieldset?void 0:w,size:n.value},p),{default:()=>[C]});if(c.fieldset){const f=h.value;return $("div",{ref:l,class:[`${y}-wrapper`,S.value,x.value],style:w},[b,$("div",{class:F([`${y}-fieldset`,ce(f)?`${y}-fieldset-hidden`:""])},[c.fieldset({value:f})])])}return b}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const To=pe,Do=Ke;var H={},oe={exports:{}};oe.exports;(function(e){var r=function(){var c=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",x={};function _(t,n){if(!x[t]){x[t]={};for(var l=0;l<t.length;l++)x[t][t.charAt(l)]=l}return x[t][n]}var h={compressToBase64:function(t){if(t==null)return"";var n=h._compress(t,6,function(l){return d.charAt(l)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:h._decompress(t.length,32,function(n){return _(d,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":h._compress(t,15,function(n){return c(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:h._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=h.compress(t),l=new Uint8Array(n.length*2),a=0,s=n.length;a<s;a++){var m=n.charCodeAt(a);l[a*2]=m>>>8,l[a*2+1]=m%256}return l},decompressFromUint8Array:function(t){if(t==null)return h.decompress(t);for(var n=new Array(t.length/2),l=0,a=n.length;l<a;l++)n[l]=t[l*2]*256+t[l*2+1];var s=[];return n.forEach(function(m){s.push(c(m))}),h.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":h._compress(t,6,function(n){return S.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),h._decompress(t.length,32,function(n){return _(S,t.charAt(n))}))},compress:function(t){return h._compress(t,16,function(n){return c(n)})},_compress:function(t,n,l){if(t==null)return"";var a,s,m={},y={},g="",w="",p="",C=2,b=3,f=2,v=[],o=0,u=0,i;for(i=0;i<t.length;i+=1)if(g=t.charAt(i),Object.prototype.hasOwnProperty.call(m,g)||(m[g]=b++,y[g]=!0),w=p+g,Object.prototype.hasOwnProperty.call(m,w))p=w;else{if(Object.prototype.hasOwnProperty.call(y,p)){if(p.charCodeAt(0)<256){for(a=0;a<f;a++)o=o<<1,u==n-1?(u=0,v.push(l(o)),o=0):u++;for(s=p.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1}else{for(s=1,a=0;a<f;a++)o=o<<1|s,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=0;for(s=p.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1}C--,C==0&&(C=Math.pow(2,f),f++),delete y[p]}else for(s=m[p],a=0;a<f;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1;C--,C==0&&(C=Math.pow(2,f),f++),m[w]=b++,p=String(g)}if(p!==""){if(Object.prototype.hasOwnProperty.call(y,p)){if(p.charCodeAt(0)<256){for(a=0;a<f;a++)o=o<<1,u==n-1?(u=0,v.push(l(o)),o=0):u++;for(s=p.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1}else{for(s=1,a=0;a<f;a++)o=o<<1|s,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=0;for(s=p.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1}C--,C==0&&(C=Math.pow(2,f),f++),delete y[p]}else for(s=m[p],a=0;a<f;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1;C--,C==0&&(C=Math.pow(2,f),f++)}for(s=2,a=0;a<f;a++)o=o<<1|s&1,u==n-1?(u=0,v.push(l(o)),o=0):u++,s=s>>1;for(;;)if(o=o<<1,u==n-1){v.push(l(o));break}else u++;return v.join("")},decompress:function(t){return t==null?"":t==""?null:h._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,l){var a=[],s=4,m=4,y=3,g="",w=[],p,C,b,f,v,o,u,i={val:l(0),position:n,index:1};for(p=0;p<3;p+=1)a[p]=p;for(b=0,v=Math.pow(2,2),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;switch(b){case 0:for(b=0,v=Math.pow(2,8),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;u=c(b);break;case 1:for(b=0,v=Math.pow(2,16),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;u=c(b);break;case 2:return""}for(a[3]=u,C=u,w.push(u);;){if(i.index>t)return"";for(b=0,v=Math.pow(2,y),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;switch(u=b){case 0:for(b=0,v=Math.pow(2,8),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;a[m++]=c(b),u=m-1,s--;break;case 1:for(b=0,v=Math.pow(2,16),o=1;o!=v;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=l(i.index++)),b|=(f>0?1:0)*o,o<<=1;a[m++]=c(b),u=m-1,s--;break;case 2:return w.join("")}if(s==0&&(s=Math.pow(2,y),y++),a[u])g=a[u];else if(u===m)g=C+C.charAt(0);else return null;w.push(g),a[m++]=C+g.charAt(0),s--,C=g,s==0&&(s=Math.pow(2,y),y++)}}};return h}();e!=null?e.exports=r:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return r})})(oe);var Ze=oe.exports;Object.defineProperty(H,"__esModule",{value:!0});H.getParameters=void 0;var qe=Ze;function Je(e){return qe.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Xe(e){return Je(JSON.stringify(e))}H.getParameters=Xe;var fe=void 0,Ye=H;fe=Ye.getParameters;const Qe=e=>fe({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:no,isBinary:!1},"vite.config.ts":{content:so,isBinary:!1},"index.html":{content:We,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:eo,isBinary:!1},"src/main.ts":{content:Ve,isBinary:!1},"src/idux.ts":{content:oo,isBinary:!1},"src/env.d.ts":{content:to,isBinary:!1}}}),We=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,Ve=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,eo=`
<template>
  <IxDrawerProvider ref="drawerProviderRef">
  <IxModalProvider ref="modalProviderRef">
    <IxNotificationProvider>
      <IxMessageProvider>
        <Demo />
      </IxMessageProvider>
    </IxNotificationProvider>
  </IxModalProvider>
  </IxDrawerProvider>
</template>
<script>
import { defineComponent } from 'vue';
import Demo from './Demo.vue';

export default defineComponent({
  components: {
    Demo,
  },
});
<\/script>
<style>
#app {
  margin-top: 40px;
  margin-left: 20px;
}
</style>`,oo=`
import { App } from 'vue';
import IduxCdk from '@idux/cdk';
import IduxComponents from '@idux/components';
import IduxPro from '@idux/pro';

import '@idux/components/default.css';
import '@idux/pro/default.css';

import { createGlobalConfig } from "@idux/components/config";
import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions
} from '@idux/components/icon';
// import { enUS } from "@idux/components/locales";

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

const loadIconDynamically = (iconName: string) => {
  return fetch(\`https://idux-cdn.sangfor.com.cn/icons/\${iconName}.svg\`).then((res) => res.text());
};

const globalConfig = createGlobalConfig({
  // 默认为中文，可以打开注释设置为其他语言
  // locale: enUS,
  icon: { loadIconDynamically },
});

const install = (app: App): void => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig);
};

export default { install };`,to=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,no=`
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}`,so=`
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: "@import '@idux/components/style/variable/index.less';",
      },
    },
  },
})`,ao=O({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:r}=R(Y);return{onClick:()=>{var _;const d=document.createElement("div");d.style.display="none";const x=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${Qe(e.code)}`;d.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(_=d.querySelector("a"))==null||_.click(),document.body.removeChild(d)},lang:r}}});function ro(e,r,c,d,S,x){const _=W,h=V;return j(),de(h,{title:e.lang==="zh"?"在 CodeSandbox 中打开":"Open on CodeSandbox"},{default:T(()=>[$(_,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const lo=Q(ao,[["render",ro]]),io=O({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:r}=R(Y);return{onClick:()=>{var x;const d=document.createElement("div");d.style.display="none";const S=uo(e.code);d.innerHTML=`<a href=${S} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(x=d.querySelector("a"))==null||x.click(),document.body.removeChild(d)},lang:r}}}),co=e=>btoa(unescape(encodeURIComponent(e))),uo=e=>{const c={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${co(JSON.stringify(c))}`};function po(e,r,c,d,S,x){const _=W,h=V;return j(),de(h,{title:e.lang==="zh"?"在 Playground 中打开":"Open on Playground"},{default:T(()=>[$(_,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const fo=Q(io,[["render",po]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class mo{constructor(r){L(this,"_textarea");const c=this._textarea=document.createElement("textarea"),d=c.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",c.setAttribute("aria-hidden","true"),c.value=r,document.body.appendChild(c)}copy(){const r=this._textarea;let c=!1;try{if(r){const d=document.activeElement;r.select(),r.setSelectionRange(0,r.value.length),c=document.execCommand("copy"),d&&d.focus()}}catch(d){Ae.error("cdk/clipboard",d)}return c}destroy(){const r=this._textarea;r&&(r.parentNode&&r.parentNode.removeChild(r),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=class D{static getInstance(){return D.instance||(D.instance=new D),D.instance}constructor(){}copy(r){const c=this.beginCopy(r),d=c.copy();return c.destroy(),d}beginCopy(r){return new mo(r)}};L(D,"instance",null);let X=D;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const vo=()=>{const e=X.getInstance(),r=new Set;let c=!1,d=null;Pe(()=>{d!==null&&clearTimeout(d),r.forEach(x=>x.destroy()),r.clear(),c=!0});function S(x,_=1){return new Promise(t=>{if(_>1){let n=_;const l=e.beginCopy(x);r.add(l);const a=()=>{const s=l.copy();!s&&--n&&!c?d=setTimeout(a,1):(d=null,r.delete(l),l.destroy(),t(s))};a()}else{const n=e.copy(x);t(n)}})}return{copy:S}},ho=O({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:r}=R(Y),c=I(()=>`${e.packageName}-${e.componentName}-${Me(e.demoName)}`),d=I(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),S=ee(!1),x=I(()=>r.value==="zh"?S.value?"收起代码":"显示代码":S.value?"Hide Code":"Show Code"),_=()=>{S.value=!S.value},{copy:h}=vo(),{success:t}=ze(),n=Ne(()=>{h(decodeURIComponent(e.code)).then(()=>{t(r.value==="zh"?"复制成功":"copy succeeded")})},300);return{id:c,lang:r,editHref:d,expanded:S,expandedTitle:x,onExpanded:_,onCopy:n}}});const yo=["id"],go={class:"global-code-box-title markdown"},xo=["href"],bo={class:"global-code-box-description markdown"},_o={class:"global-code-box-content"},Co={class:"global-code-box-content-border"},ko={class:"global-code-box-raw-code"},So={class:"global-code-box-tools"},$o=["href"],wo={key:0,class:"global-code-box-highlight-code"};function Io(e,r,c,d,S,x){const _=fo,h=lo,t=W,n=V,l=ie;return j(),se("div",{id:e.id,class:"global-code-box"},[A("div",go,[A("h3",null,[A("span",null,Re(e.title),1),A("a",{class:"anchor",href:"#"+e.id},"#",8,xo)])]),A("div",bo,[K(e.$slots,"description")]),A("div",_o,[A("div",Co,[A("div",ko,[K(e.$slots,"rawCode"),A("div",So,[$(l,null,{default:T(()=>[$(_,{code:e.code},null,8,["code"]),$(h,{code:e.code},null,8,["code"]),$(n,{title:e.lang==="zh"?"在 GitHub 上编辑此示例":"Edit this demo on GitHub"},{default:T(()=>[A("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[$(t,{name:"edit"})],8,$o)]),_:1},8,["title"]),$(n,{title:e.lang==="zh"?"复制代码":"Copy code"},{default:T(()=>[$(t,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),$(n,{title:e.expandedTitle},{default:T(()=>[$(t,{name:e.expanded?"custom:collapse":"custom:expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),$(Ue,{name:"ix-fade-down"},{default:T(()=>[e.expanded?(j(),se("div",wo,[K(e.$slots,"highlightCode")])):Oe("",!0)]),_:3})])])],8,yo)}const Po=Q(ho,[["render",Io]]);export{Do as I,Po as _,vo as a,To as b,ze as u};
