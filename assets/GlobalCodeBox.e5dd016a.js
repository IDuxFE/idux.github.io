import{m as z,t as H,a as P,_ as N,L as G}from"./index.dbdf6cd1.js";import{v as M,l as O,aY as D,aZ as U,aU as F,aV as S,m as I,aR as Z,c as T,r as J,y as X,aW as Y,b1 as k,a$ as q,aX as $,aA as W}from"./vendor.2a6fd3f7.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=()=>{const i=M(z,null);return i===null?H("components/message","<IxMessageProvider> not found."):i};var B={},j={exports:{}};(function(i){var l=function(){var f=String.fromCharCode,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",_={};function g(o,t){if(!_[o]){_[o]={};for(var c=0;c<o.length;c++)_[o][o.charAt(c)]=c}return _[o][t]}var v={compressToBase64:function(o){if(o==null)return"";var t=v._compress(o,6,function(c){return p.charAt(c)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:v._decompress(o.length,32,function(t){return g(p,o.charAt(t))})},compressToUTF16:function(o){return o==null?"":v._compress(o,15,function(t){return f(t+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:v._decompress(o.length,16384,function(t){return o.charCodeAt(t)-32})},compressToUint8Array:function(o){for(var t=v.compress(o),c=new Uint8Array(t.length*2),n=0,r=t.length;n<r;n++){var h=t.charCodeAt(n);c[n*2]=h>>>8,c[n*2+1]=h%256}return c},decompressFromUint8Array:function(o){if(o==null)return v.decompress(o);for(var t=new Array(o.length/2),c=0,n=t.length;c<n;c++)t[c]=o[c*2]*256+o[c*2+1];var r=[];return t.forEach(function(h){r.push(f(h))}),v.decompress(r.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":v._compress(o,6,function(t){return C.charAt(t)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),v._decompress(o.length,32,function(t){return g(C,o.charAt(t))}))},compress:function(o){return v._compress(o,16,function(t){return f(t)})},_compress:function(o,t,c){if(o==null)return"";var n,r,h={},w={},b="",A="",m="",y=2,x=3,d=2,u=[],e=0,a=0,s;for(s=0;s<o.length;s+=1)if(b=o.charAt(s),Object.prototype.hasOwnProperty.call(h,b)||(h[b]=x++,w[b]=!0),A=m+b,Object.prototype.hasOwnProperty.call(h,A))m=A;else{if(Object.prototype.hasOwnProperty.call(w,m)){if(m.charCodeAt(0)<256){for(n=0;n<d;n++)e=e<<1,a==t-1?(a=0,u.push(c(e)),e=0):a++;for(r=m.charCodeAt(0),n=0;n<8;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1}else{for(r=1,n=0;n<d;n++)e=e<<1|r,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=0;for(r=m.charCodeAt(0),n=0;n<16;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1}y--,y==0&&(y=Math.pow(2,d),d++),delete w[m]}else for(r=h[m],n=0;n<d;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1;y--,y==0&&(y=Math.pow(2,d),d++),h[A]=x++,m=String(b)}if(m!==""){if(Object.prototype.hasOwnProperty.call(w,m)){if(m.charCodeAt(0)<256){for(n=0;n<d;n++)e=e<<1,a==t-1?(a=0,u.push(c(e)),e=0):a++;for(r=m.charCodeAt(0),n=0;n<8;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1}else{for(r=1,n=0;n<d;n++)e=e<<1|r,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=0;for(r=m.charCodeAt(0),n=0;n<16;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1}y--,y==0&&(y=Math.pow(2,d),d++),delete w[m]}else for(r=h[m],n=0;n<d;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1;y--,y==0&&(y=Math.pow(2,d),d++)}for(r=2,n=0;n<d;n++)e=e<<1|r&1,a==t-1?(a=0,u.push(c(e)),e=0):a++,r=r>>1;for(;;)if(e=e<<1,a==t-1){u.push(c(e));break}else a++;return u.join("")},decompress:function(o){return o==null?"":o==""?null:v._decompress(o.length,32768,function(t){return o.charCodeAt(t)})},_decompress:function(o,t,c){var n=[],r=4,h=4,w=3,b="",A=[],m,y,x,d,u,e,a,s={val:c(0),position:t,index:1};for(m=0;m<3;m+=1)n[m]=m;for(x=0,u=Math.pow(2,2),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;switch(x){case 0:for(x=0,u=Math.pow(2,8),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;a=f(x);break;case 1:for(x=0,u=Math.pow(2,16),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;a=f(x);break;case 2:return""}for(n[3]=a,y=a,A.push(a);;){if(s.index>o)return"";for(x=0,u=Math.pow(2,w),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;switch(a=x){case 0:for(x=0,u=Math.pow(2,8),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;n[h++]=f(x),a=h-1,r--;break;case 1:for(x=0,u=Math.pow(2,16),e=1;e!=u;)d=s.val&s.position,s.position>>=1,s.position==0&&(s.position=t,s.val=c(s.index++)),x|=(d>0?1:0)*e,e<<=1;n[h++]=f(x),a=h-1,r--;break;case 2:return A.join("")}if(r==0&&(r=Math.pow(2,w),w++),n[a])b=n[a];else if(a===h)b=y+y.charAt(0);else return null;A.push(b),n[h++]=y+b.charAt(0),r--,y=b,r==0&&(r=Math.pow(2,w),w++)}}};return v}();i!=null&&(i.exports=l)})(j);Object.defineProperty(B,"__esModule",{value:!0});B.getParameters=void 0;var Q=j.exports;function V(i){return Q.compressToBase64(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ee(i){return V(JSON.stringify(i))}B.getParameters=ee;var R=void 0,oe=B;R=oe.getParameters;const te=i=>R({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ce,isBinary:!1},"vite.config.ts":{content:le,isBinary:!1},"index.html":{content:ne,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(i),isBinary:!1},"src/App.vue":{content:se,isBinary:!1},"src/main.ts":{content:re,isBinary:!1},"src/idux.ts":{content:ie,isBinary:!1},"src/env.d.ts":{content:ae,isBinary:!1}}}),ne=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,re=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,se=`
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
</style>`,ie=`
import { App } from 'vue';
import IduxCdk from '@idux/cdk';
import IduxComponents from '@idux/components';
import IduxPro from '@idux/pro';

import '@idux/components/default.min.css';
import '@idux/pro/default.min.css';

// import { useLocale, en_US } from '@idux/components/i18n';
// useLocale(en_US);

import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions
} from '@idux/components/icon';

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

const install = (app: App) => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro);
};

export default { install };`,ae=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,ce=`
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
}`,le=`
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
})`,de=O({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(i){const{lang:l}=M(P);return{onClick:()=>{var g;const p=document.createElement("div");p.style.display="none";const _=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${te(i.code)}`;p.innerHTML=`<a href=${_} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(p),(g=p.querySelector("a"))==null||g.click(),document.body.removeChild(p)},lang:l}}});function pe(i,l,f,p,C,_){const g=D("IxIcon"),v=D("IxTooltip");return U(),F(v,{title:i.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:S(()=>[I(g,{name:"code",onClick:i.onClick},null,8,["onClick"])]),_:1},8,["title"])}var ue=N(de,[["render",pe]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class fe{constructor(l){const f=this._textarea=document.createElement("textarea"),p=f.style;p.opacity="0",p.position="absolute",p.left=p.top="-999em",f.setAttribute("aria-hidden","true"),f.value=l,document.body.appendChild(f)}copy(){const l=this._textarea;let f=!1;try{if(l){const p=document.activeElement;l.select(),l.setSelectionRange(0,l.value.length),f=document.execCommand("copy"),p&&p.focus()}}catch(p){G.error("cdk/clipboard",p)}return f}destroy(){const l=this._textarea;l&&(l.parentNode&&l.parentNode.removeChild(l),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const E=class{static getInstance(){return E.instance||(E.instance=new E),E.instance}constructor(){}copy(i){const l=this.beginCopy(i),f=l.copy();return l.destroy(),f}beginCopy(i){return new fe(i)}};let L=E;L.instance=null;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const me=()=>{const i=L.getInstance(),l=new Set;let f=!1,p=null;Z(()=>{p!==null&&clearTimeout(p),l.forEach(_=>_.destroy()),l.clear(),f=!0});function C(_,g=1){return new Promise(o=>{if(g>1){let t=g;const c=i.beginCopy(_);l.add(c);const n=()=>{const r=c.copy();!r&&--t&&!f?p=setTimeout(n,1):(p=null,l.delete(c),c.destroy(),o(r))};n()}else{const t=i.copy(_);o(t)}})}return{copy:C}};const ve=O({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(i){const{lang:l}=M(P),f=T(()=>`${i.packageName}-${i.componentName}-demo-${i.demoName}`),p=T(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${i.packageName}/${i.componentName}/demo/${i.demoName}`}.md`),C=J(!1),_=T(()=>l.value==="zh"?C.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":C.value?"Hide Code":"Show Code"),g=()=>{C.value=!C.value},{copy:v}=me(),{success:o}=K(),t=X(()=>{v(decodeURIComponent(i.code)).then(()=>{o(l.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:f,lang:l,editHref:p,expanded:C,expandedTitle:_,onExpanded:g,onCopy:t}}}),xe=["id"],he={class:"global-code-box-title markdown"},ye={class:"global-code-box-border"},_e={class:"global-code-box"},ge={class:"global-code-box-meta markdown"},Ce={class:"global-code-box-description"},be={class:"global-code-box-actions"},we=["href"],ke={class:"global-code-box-demo"};function Ie(i,l,f,p,C,_){const g=ue,v=D("IxIcon"),o=D("IxTooltip"),t=D("IxSpace");return U(),Y("div",{id:i.id,class:"global-code-box-wrapper"},[k("section",he,[k("h3",null,q(i.title),1)]),k("div",ye,[k("section",_e,[k("section",ge,[k("div",Ce,[$(i.$slots,"description")]),k("div",be,[I(t,null,{default:S(()=>[I(g,{code:i.code},null,8,["code"]),I(o,{title:i.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:S(()=>[k("a",{href:i.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[I(v,{name:"edit"})],8,we)]),_:1},8,["title"]),I(o,{title:i.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:S(()=>[I(v,{name:"copy",onClick:i.onCopy},null,8,["onClick"])]),_:1},8,["title"]),I(o,{title:i.expandedTitle},{default:S(()=>[I(v,{name:i.expanded?"unexpand":"expand",onClick:i.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k("section",ke,[$(i.$slots,"rawCode")]),k("section",{class:W(["highlight-wrapper",{"highlight-wrapper-expand":i.expanded}])},[$(i.$slots,"highlightCode")],2)])])],8,xe)}var Ee=N(ve,[["render",Ie]]);export{Ee as _,me as a,K as u};
