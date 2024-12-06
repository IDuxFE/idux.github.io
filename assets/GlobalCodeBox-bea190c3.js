var _e=Object.defineProperty;var Ce=(e,r,i)=>r in e?_e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var J=(e,r,i)=>(Ce(e,typeof r!="symbol"?r+"":r,i),i);import{i as R,aG as ke,aH as Se,d as O,aI as $e,as as Z,at as q,aJ as we,c as I,aK as Ie,q as W,aL as Ae,aM as le,an as j,aN as Be,f as $,af as X,ɵ as se,a7 as ie,aO as ce,R as M,a4 as Te,aP as Ee,v as Pe,aQ as De,N as de,a as Y,_ as V,o as H,l as ue,w as E,$ as ee,aR as oe,aS as Ne,aT as Me,aU as Re,aV as Oe,b as ae,e as A,t as Ue,a6 as K,A as ze,ar as Fe}from"./index-2f15ff81.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const je=()=>{const e=R(ke,null);return e===null?Se("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const pe=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const He={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},waveless:{type:Boolean,default:!1},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Ge={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function re(e){const{paddingSizeXs:r,controlBorderRadiusSm:i,colorInfoContainerBg:u,colorBorderSecondary:S}=e;return{labelPadding:`0 ${r}px`,fieldsetBorderRadius:i,fieldsetBgColor:u,fieldsetBorderColor:S}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Le=(e,r)=>re(e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Je={sm:"xs",md:"sm",lg:"md"},fe=O({name:"IxRadio",inheritAttrs:!1,props:He,setup(e,{attrs:r,expose:i,slots:u}){const S=$e(),x=Z("common"),{globalHashId:_,hashId:h,registerToken:t}=q("radio"),{hashId:n,registerToken:l}=q("button");t(Le),l(we);const a=I(()=>`${x.prefixCls}-radio`),s=Z("radio"),{elementRef:f,focus:g,blur:b}=Ie(),w=W();i({focus:g,blur:b});const y=R(Ae,null),p=R(pe,null),C=I(()=>{var k;return(k=r.name)!=null?k:p==null?void 0:p.props.name}),m=I(()=>{const{value:k}=e;return le(k)?p?S:void 0:k}),v=I(()=>{var k;return(k=e.buttoned)!=null?k:p==null?void 0:p.props.buttoned}),o=I(()=>{var k,B,D;return(D=(B=(k=e.size)!=null?k:p==null?void 0:p.props.size)!=null?B:y==null?void 0:y.size.value)!=null?D:s.size}),c=I(()=>{var k;return(k=e.waveless)!=null?k:s.waveless}),d=I(()=>{var k,B;return(B=(k=e.mode)!=null?k:p==null?void 0:p.props.mode)!=null?B:"default"}),{isChecked:U,isDisabled:z,isFocused:ve,handleChange:he,handleBlur:ge,handleFocus:ye}=Ke(e,p,f,m,w,c),xe=I(()=>{const k=v.value,B=U.value,D=k&&B&&d.value==="primary",T=a.value,N=x.prefixCls,L={[_.value]:!!_.value,[n.value]:!!n.value,[h.value]:!!h.value,[T]:!0,[`${T}-checked`]:U.value,[`${T}-disabled`]:z.value,[`${T}-focused`]:ve.value,[`${T}-${o.value}`]:k,[`${N}-button`]:k,[`${N}-button-default`]:k&&!D,[`${N}-button-primary`]:D,[`${N}-button-disabled`]:k&&z.value,[`${N}-button-${Je[o.value]}`]:k};return j([L,r.class])});return()=>{const{autofocus:k,label:B}=e,{class:D,style:T,type:N,tabindex:L,...be}=r,F=a.value,ne=Be(u.default,B);return $("label",{class:xe.value,style:T,role:"radio","aria-checked":U.value,"aria-disabled":z.value},[$("span",{class:`${F}-input`},[$("input",X({ref:f,type:"radio",class:`${F}-input-inner`,"aria-hidden":!0,autofocus:k,checked:U.value,disabled:z.value,name:C.value,value:m.value,onChange:he,onBlur:ge,onFocus:ye},be),null),!v.value&&$("span",{class:`${F}-input-box`,tabindex:L},[!c.value&&$(se,{ref:w},null)])]),v.value&&!c.value&&$(se,{ref:w},null),ne&&$("span",{class:`${F}-label`},[ne])])}}}),Ke=(e,r,i,u,S,x)=>{let _,h;const t=W(!1);let n,l;const a=s=>{t.value=!0,M(e.onFocus,s)};if(r){const{accessor:s,props:f}=r;_=I(()=>s.value===u.value),h=I(()=>s.disabled||!!e.disabled),l=g=>{t.value=!1,s.markAsBlurred(),M(e.onBlur,g)},n=g=>{var b;if(i.value){const w=g.target.checked,y=u.value,p=s.value;s.setValue(y),i.value.checked=!1,M(e.onChange,w,!w),M(f.onChange,y,p),!x.value&&((b=S.value)==null||b.play())}}}else{const{accessor:s,control:f}=ie({valueKey:"checked"});ce(f),_=I(()=>!!s.value),h=I(()=>s.disabled),l=g=>{t.value=!1,s.markAsBlurred(),M(e.onBlur,g)},n=g=>{var b;if(i.value){const w=g.target.checked;s.setValue(w),i.value.checked=!1,M(e.onChange,w,!w),!x.value&&((b=S.value)==null||b.play())}}}return{isChecked:_,isDisabled:h,isFocused:t,handleChange:n,handleBlur:l,handleFocus:a}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ze=O({name:"IxRadioGroup",inheritAttrs:!1,props:Ge,setup(e,{attrs:r,slots:i}){const u=Z("common"),{globalHashId:S,hashId:x}=q("radio"),_=I(()=>`${u.prefixCls}-radio-group`),{accessor:h,control:t}=ie();ce(t),Te(pe,{props:e,accessor:h});const n=I(()=>{var f;return(f=e.gap)!=null?f:e.buttoned?0:8}),l=Ee(),a=()=>{const f=l.value;if(!f)return;const g=`.${u.prefixCls}-radio-checked`,b=f.querySelector(g);b&&f.style.setProperty("--ix-radio-group-fieldset-arrow-offset",`${b.offsetLeft}px`)};Pe(()=>a()),De(()=>a());const s=I(()=>{const{buttoned:f}=e,g=n.value,b=_.value;return j({[b]:!0,[`${u.prefixCls}-button-group`]:f,[`${u.prefixCls}-button-group-compact`]:f&&(!g||g==="0"||g==="0px")})});return()=>{const{dataSource:f}=e,g=_.value,{class:b,style:w,...y}=r;let p;f?p=f.map(m=>{const{key:v,value:o}=m;return $(fe,X(m,{key:v!=null?v:o,value:o!=null?o:v}),null)}):p=i.default?i.default():void 0;const C=$(de,X({class:i.fieldset?s.value:j([s.value,b]),style:i.fieldset?void 0:w,size:n.value},y),{default:()=>[p]});if(i.fieldset){const m=h.value;return $("div",{ref:l,class:[`${g}-wrapper`,S.value,x.value],style:w},[C,$("div",{class:j([`${g}-fieldset`,le(m)?`${g}-fieldset-hidden`:""])},[i.fieldset({value:m})])])}return C}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Po=fe,Do=Ze;var G={},te={exports:{}};te.exports;(function(e){var r=function(){var i=String.fromCharCode,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",x={};function _(t,n){if(!x[t]){x[t]={};for(var l=0;l<t.length;l++)x[t][t.charAt(l)]=l}return x[t][n]}var h={compressToBase64:function(t){if(t==null)return"";var n=h._compress(t,6,function(l){return u.charAt(l)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:h._decompress(t.length,32,function(n){return _(u,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":h._compress(t,15,function(n){return i(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:h._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=h.compress(t),l=new Uint8Array(n.length*2),a=0,s=n.length;a<s;a++){var f=n.charCodeAt(a);l[a*2]=f>>>8,l[a*2+1]=f%256}return l},decompressFromUint8Array:function(t){if(t==null)return h.decompress(t);for(var n=new Array(t.length/2),l=0,a=n.length;l<a;l++)n[l]=t[l*2]*256+t[l*2+1];var s=[];return n.forEach(function(f){s.push(i(f))}),h.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":h._compress(t,6,function(n){return S.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),h._decompress(t.length,32,function(n){return _(S,t.charAt(n))}))},compress:function(t){return h._compress(t,16,function(n){return i(n)})},_compress:function(t,n,l){if(t==null)return"";var a,s,f={},g={},b="",w="",y="",p=2,C=3,m=2,v=[],o=0,c=0,d;for(d=0;d<t.length;d+=1)if(b=t.charAt(d),Object.prototype.hasOwnProperty.call(f,b)||(f[b]=C++,g[b]=!0),w=y+b,Object.prototype.hasOwnProperty.call(f,w))y=w;else{if(Object.prototype.hasOwnProperty.call(g,y)){if(y.charCodeAt(0)<256){for(a=0;a<m;a++)o=o<<1,c==n-1?(c=0,v.push(l(o)),o=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1}else{for(s=1,a=0;a<m;a++)o=o<<1|s,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1}p--,p==0&&(p=Math.pow(2,m),m++),delete g[y]}else for(s=f[y],a=0;a<m;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1;p--,p==0&&(p=Math.pow(2,m),m++),f[w]=C++,y=String(b)}if(y!==""){if(Object.prototype.hasOwnProperty.call(g,y)){if(y.charCodeAt(0)<256){for(a=0;a<m;a++)o=o<<1,c==n-1?(c=0,v.push(l(o)),o=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1}else{for(s=1,a=0;a<m;a++)o=o<<1|s,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1}p--,p==0&&(p=Math.pow(2,m),m++),delete g[y]}else for(s=f[y],a=0;a<m;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1;p--,p==0&&(p=Math.pow(2,m),m++)}for(s=2,a=0;a<m;a++)o=o<<1|s&1,c==n-1?(c=0,v.push(l(o)),o=0):c++,s=s>>1;for(;;)if(o=o<<1,c==n-1){v.push(l(o));break}else c++;return v.join("")},decompress:function(t){return t==null?"":t==""?null:h._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,l){var a=[],s=4,f=4,g=3,b="",w=[],y,p,C,m,v,o,c,d={val:l(0),position:n,index:1};for(y=0;y<3;y+=1)a[y]=y;for(C=0,v=Math.pow(2,2),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;switch(C){case 0:for(C=0,v=Math.pow(2,8),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;c=i(C);break;case 1:for(C=0,v=Math.pow(2,16),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;c=i(C);break;case 2:return""}for(a[3]=c,p=c,w.push(c);;){if(d.index>t)return"";for(C=0,v=Math.pow(2,g),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;switch(c=C){case 0:for(C=0,v=Math.pow(2,8),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;a[f++]=i(C),c=f-1,s--;break;case 1:for(C=0,v=Math.pow(2,16),o=1;o!=v;)m=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=l(d.index++)),C|=(m>0?1:0)*o,o<<=1;a[f++]=i(C),c=f-1,s--;break;case 2:return w.join("")}if(s==0&&(s=Math.pow(2,g),g++),a[c])b=a[c];else if(c===f)b=p+p.charAt(0);else return null;w.push(b),a[f++]=p+b.charAt(0),s--,p=b,s==0&&(s=Math.pow(2,g),g++)}}};return h}();e!=null?e.exports=r:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return r})})(te);var qe=te.exports;Object.defineProperty(G,"__esModule",{value:!0});G.getParameters=void 0;var Xe=qe;function Qe(e){return Xe.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function We(e){return Qe(JSON.stringify(e))}G.getParameters=We;var me=void 0,Ye=G;me=Ye.getParameters;const Ve=e=>me({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ao,isBinary:!1},"vite.config.ts":{content:ro,isBinary:!1},"index.html":{content:eo,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:to,isBinary:!1},"src/main.ts":{content:oo,isBinary:!1},"src/idux.ts":{content:no,isBinary:!1},"src/env.d.ts":{content:so,isBinary:!1}}}),eo=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,oo=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,to=`
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
</style>`,no=`
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

export default { install };`,so=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,ao=`
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
}`,ro=`
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
})`,lo=O({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:r}=R(Y);return{onClick:()=>{var _;const u=document.createElement("div");u.style.display="none";const x=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${Ve(e.code)}`;u.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(_=u.querySelector("a"))==null||_.click(),document.body.removeChild(u)},lang:r}}});function io(e,r,i,u,S,x){const _=ee,h=oe;return H(),ue(h,{title:e.lang==="zh"?"在 CodeSandbox 中打开":"Open on CodeSandbox"},{default:E(()=>[$(_,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const co=V(lo,[["render",io]]),uo=O({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:r}=R(Y);return{onClick:()=>{var x;const u=document.createElement("div");u.style.display="none";const S=fo(e.code);u.innerHTML=`<a href=${S} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(x=u.querySelector("a"))==null||x.click(),document.body.removeChild(u)},lang:r}}}),po=e=>btoa(unescape(encodeURIComponent(e))),fo=e=>{const i={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${po(JSON.stringify(i))}`};function mo(e,r,i,u,S,x){const _=ee,h=oe;return H(),ue(h,{title:e.lang==="zh"?"在 Playground 中打开":"Open on Playground"},{default:E(()=>[$(_,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const vo=V(uo,[["render",mo]]);/**
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
 */class ho{constructor(r){J(this,"_textarea");const i=this._textarea=document.createElement("textarea"),u=i.style;u.opacity="0",u.position="absolute",u.left=u.top="-999em",i.setAttribute("aria-hidden","true"),i.value=r,document.body.appendChild(i)}copy(){const r=this._textarea;let i=!1;try{if(r){const u=document.activeElement;r.select(),r.setSelectionRange(0,r.value.length),i=document.execCommand("copy"),u&&u.focus()}}catch(u){Ne.error("cdk/clipboard",u)}return i}destroy(){const r=this._textarea;r&&(r.parentNode&&r.parentNode.removeChild(r),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=class P{static getInstance(){return P.instance||(P.instance=new P),P.instance}constructor(){}copy(r){const i=this.beginCopy(r),u=i.copy();return i.destroy(),u}beginCopy(r){return new ho(r)}};J(P,"instance",null);let Q=P;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const go=()=>{const e=Q.getInstance(),r=new Set;let i=!1,u=null;Me(()=>{u!==null&&clearTimeout(u),r.forEach(x=>x.destroy()),r.clear(),i=!0});function S(x,_=1){return new Promise(t=>{if(_>1){let n=_;const l=e.beginCopy(x);r.add(l);const a=()=>{const s=l.copy();!s&&--n&&!i?u=setTimeout(a,1):(u=null,r.delete(l),l.destroy(),t(s))};a()}else{const n=e.copy(x);t(n)}})}return{copy:S}},yo=O({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:r}=R(Y),i=I(()=>`${e.packageName}-${e.componentName}-${Re(e.demoName)}`),u=I(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),S=W(!1),x=I(()=>r.value==="zh"?S.value?"收起代码":"显示代码":S.value?"Hide Code":"Show Code"),_=()=>{S.value=!S.value},{copy:h}=go(),{success:t}=je(),n=Oe(()=>{h(decodeURIComponent(e.code)).then(()=>{t(r.value==="zh"?"复制成功":"copy succeeded")})},300);return{id:i,lang:r,editHref:u,expanded:S,expandedTitle:x,onExpanded:_,onCopy:n}}});const xo=["id"],bo={class:"global-code-box-title markdown"},_o=["href"],Co={class:"global-code-box-description markdown"},ko={class:"global-code-box-content"},So={class:"global-code-box-content-border"},$o={class:"global-code-box-raw-code"},wo={class:"global-code-box-tools"},Io=["href"],Ao={key:0,class:"global-code-box-highlight-code"};function Bo(e,r,i,u,S,x){const _=vo,h=co,t=ee,n=oe,l=de;return H(),ae("div",{id:e.id,class:"global-code-box"},[A("div",bo,[A("h3",null,[A("span",null,Ue(e.title),1),A("a",{class:"anchor",href:"#"+e.id},"#",8,_o)])]),A("div",Co,[K(e.$slots,"description")]),A("div",ko,[A("div",So,[A("div",$o,[K(e.$slots,"rawCode"),A("div",wo,[$(l,null,{default:E(()=>[$(_,{code:e.code},null,8,["code"]),$(h,{code:e.code},null,8,["code"]),$(n,{title:e.lang==="zh"?"在 GitHub 上编辑此示例":"Edit this demo on GitHub"},{default:E(()=>[A("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[$(t,{name:"edit"})],8,Io)]),_:1},8,["title"]),$(n,{title:e.lang==="zh"?"复制代码":"Copy code"},{default:E(()=>[$(t,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),$(n,{title:e.expandedTitle},{default:E(()=>[$(t,{name:e.expanded?"custom:collapse":"custom:expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),$(Fe,{name:"ix-fade-down"},{default:E(()=>[e.expanded?(H(),ae("div",Ao,[K(e.$slots,"highlightCode")])):ze("",!0)]),_:3})])])],8,xo)}const No=V(yo,[["render",Bo]]);export{Do as I,No as _,go as a,Po as b,je as u};
