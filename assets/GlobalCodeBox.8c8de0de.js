import{x as R,C as G,i as S,y as H,z as F,d as M,a as P,_ as O,r as A,o as U,j as N,w as D,f as I,c as B,m as L,A as J,b as Z,e as k,t as q,B as T,D as X}from"./index.366c2146.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=()=>{const t=G.getInstance(),h=new Set;let v=!1,u=null;R(()=>{u!==null&&clearTimeout(u),h.forEach(x=>x.destroy()),h.clear(),v=!0});function y(x,C=1){return new Promise(o=>{if(C>1){let n=C;const a=t.beginCopy(x);h.add(a);const r=()=>{const s=a.copy();!s&&--n&&!v?u=setTimeout(r,1):(u=null,h.delete(a),a.destroy(),o(s))};r()}else{const n=t.copy(x);o(n)}})}return{copy:y}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=()=>{const t=S(F,null);return t===null?H("components/message","<IxMessageProvider> not found."):t};var $={},j={exports:{}};(function(t){var h=function(){var v=String.fromCharCode,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",x={};function C(o,n){if(!x[o]){x[o]={};for(var a=0;a<o.length;a++)x[o][o.charAt(a)]=a}return x[o][n]}var f={compressToBase64:function(o){if(o==null)return"";var n=f._compress(o,6,function(a){return u.charAt(a)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(n){return C(u,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(n){return v(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=f.compress(o),a=new Uint8Array(n.length*2),r=0,s=n.length;r<s;r++){var g=n.charCodeAt(r);a[r*2]=g>>>8,a[r*2+1]=g%256}return a},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var n=new Array(o.length/2),a=0,r=n.length;a<r;a++)n[a]=o[a*2]*256+o[a*2+1];var s=[];return n.forEach(function(g){s.push(v(g))}),f.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(n){return y.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(n){return C(y,o.charAt(n))}))},compress:function(o){return f._compress(o,16,function(n){return v(n)})},_compress:function(o,n,a){if(o==null)return"";var r,s,g={},w={},b="",E="",p="",_=2,m=3,l=2,d=[],e=0,c=0,i;for(i=0;i<o.length;i+=1)if(b=o.charAt(i),Object.prototype.hasOwnProperty.call(g,b)||(g[b]=m++,w[b]=!0),E=p+b,Object.prototype.hasOwnProperty.call(g,E))p=E;else{if(Object.prototype.hasOwnProperty.call(w,p)){if(p.charCodeAt(0)<256){for(r=0;r<l;r++)e=e<<1,c==n-1?(c=0,d.push(a(e)),e=0):c++;for(s=p.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<l;r++)e=e<<1|s,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=0;for(s=p.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1}_--,_==0&&(_=Math.pow(2,l),l++),delete w[p]}else for(s=g[p],r=0;r<l;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1;_--,_==0&&(_=Math.pow(2,l),l++),g[E]=m++,p=String(b)}if(p!==""){if(Object.prototype.hasOwnProperty.call(w,p)){if(p.charCodeAt(0)<256){for(r=0;r<l;r++)e=e<<1,c==n-1?(c=0,d.push(a(e)),e=0):c++;for(s=p.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<l;r++)e=e<<1|s,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=0;for(s=p.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1}_--,_==0&&(_=Math.pow(2,l),l++),delete w[p]}else for(s=g[p],r=0;r<l;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1;_--,_==0&&(_=Math.pow(2,l),l++)}for(s=2,r=0;r<l;r++)e=e<<1|s&1,c==n-1?(c=0,d.push(a(e)),e=0):c++,s=s>>1;for(;;)if(e=e<<1,c==n-1){d.push(a(e));break}else c++;return d.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,a){var r=[],s=4,g=4,w=3,b="",E=[],p,_,m,l,d,e,c,i={val:a(0),position:n,index:1};for(p=0;p<3;p+=1)r[p]=p;for(m=0,d=Math.pow(2,2),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;switch(m){case 0:for(m=0,d=Math.pow(2,8),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;c=v(m);break;case 1:for(m=0,d=Math.pow(2,16),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;c=v(m);break;case 2:return""}for(r[3]=c,_=c,E.push(c);;){if(i.index>o)return"";for(m=0,d=Math.pow(2,w),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;switch(c=m){case 0:for(m=0,d=Math.pow(2,8),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;r[g++]=v(m),c=g-1,s--;break;case 1:for(m=0,d=Math.pow(2,16),e=1;e!=d;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),m|=(l>0?1:0)*e,e<<=1;r[g++]=v(m),c=g-1,s--;break;case 2:return E.join("")}if(s==0&&(s=Math.pow(2,w),w++),r[c])b=r[c];else if(c===g)b=_+_.charAt(0);else return null;E.push(b),r[g++]=_+b.charAt(0),s--,_=b,s==0&&(s=Math.pow(2,w),w++)}}};return f}();t!=null&&(t.exports=h)})(j);Object.defineProperty($,"__esModule",{value:!0});$.getParameters=void 0;var Q=j.exports;function W(t){return Q.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function V(t){return W(JSON.stringify(t))}$.getParameters=V;var z=void 0,ee=$;z=ee.getParameters;const oe=t=>z({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ce,isBinary:!1},"vite.config.ts":{content:ae,isBinary:!1},"index.html":{content:ne,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(t),isBinary:!1},"src/App.vue":{content:re,isBinary:!1},"src/main.ts":{content:te,isBinary:!1},"src/idux.ts":{content:se,isBinary:!1},"src/env.d.ts":{content:ie,isBinary:!1}}}),ne=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,te=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,re=`
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
</style>`,se=`
import { App } from 'vue';
import IduxCdk from '@idux/cdk';
import IduxComponents from '@idux/components';
import IduxPro from '@idux/pro';

import '@idux/components/default.min.css';
import '@idux/pro/default.min.css';

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
  // \u9ED8\u8BA4\u4E3A\u4E2D\u6587\uFF0C\u53EF\u4EE5\u6253\u5F00\u6CE8\u91CA\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u8BED\u8A00
  // locale: enUS,
  icon: { loadIconDynamically },
});

const install = (app: App): void => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig);
};

export default { install };`,ie=`
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
}`,ae=`
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
})`,le=M({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(t){const{lang:h}=S(P);return{onClick:()=>{var C;const u=document.createElement("div");u.style.display="none";const x=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${oe(t.code)}`;u.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(C=u.querySelector("a"))==null||C.click(),document.body.removeChild(u)},lang:h}}});function de(t,h,v,u,y,x){const C=A("IxIcon"),f=A("IxTooltip");return U(),N(f,{title:t.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:D(()=>[I(C,{name:"code",onClick:t.onClick},null,8,["onClick"])]),_:1},8,["title"])}const ue=O(le,[["render",de]]),pe=M({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(t){const{lang:h}=S(P);return{onClick:()=>{var x;const u=document.createElement("div");u.style.display="none";const y=me(t.code);u.innerHTML=`<a href=${y} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(x=u.querySelector("a"))==null||x.click(),document.body.removeChild(u)},lang:h}}}),fe=t=>btoa(unescape(encodeURIComponent(t))),me=t=>{const v={"App.vue":decodeURIComponent(t)};return`https://playground.idux.site/#${fe(JSON.stringify(v))}`};function ve(t,h,v,u,y,x){const C=A("IxIcon"),f=A("IxTooltip");return U(),N(f,{title:t.lang==="zh"?"\u5728 Playground \u4E2D\u6253\u5F00":"Open on Playground"},{default:D(()=>[I(C,{name:"bug",onClick:t.onClick},null,8,["onClick"])]),_:1},8,["title"])}const xe=O(pe,[["render",ve]]),he=M({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(t){const{lang:h}=S(P),v=B(()=>`${t.packageName}-${t.componentName}-demo-${t.demoName}`),u=B(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${t.packageName}/${t.componentName}/demo/${t.demoName}`}.md`),y=L(!1),x=B(()=>h.value==="zh"?y.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":y.value?"Hide Code":"Show Code"),C=()=>{y.value=!y.value},{copy:f}=Y(),{success:o}=K(),n=J(()=>{f(decodeURIComponent(t.code)).then(()=>{o(h.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:v,lang:h,editHref:u,expanded:y,expandedTitle:x,onExpanded:C,onCopy:n}}});const ge=["id"],_e={class:"global-code-box-title markdown"},ye={class:"global-code-box-border"},Ce={class:"global-code-box"},be={class:"global-code-box-meta markdown"},we={class:"global-code-box-description"},Ie={class:"global-code-box-actions"},ke=["href"],Ee={class:"global-code-box-demo"};function Ae(t,h,v,u,y,x){const C=xe,f=ue,o=A("IxIcon"),n=A("IxTooltip"),a=A("IxSpace");return U(),Z("div",{id:t.id,class:"global-code-box-wrapper"},[k("section",_e,[k("h3",null,q(t.title),1)]),k("div",ye,[k("section",Ce,[k("section",be,[k("div",we,[T(t.$slots,"description")]),k("div",Ie,[I(a,null,{default:D(()=>[I(C,{code:t.code},null,8,["code"]),I(f,{code:t.code},null,8,["code"]),I(n,{title:t.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:D(()=>[k("a",{href:t.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[I(o,{name:"edit"})],8,ke)]),_:1},8,["title"]),I(n,{title:t.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:D(()=>[I(o,{name:"copy",onClick:t.onCopy},null,8,["onClick"])]),_:1},8,["title"]),I(n,{title:t.expandedTitle},{default:D(()=>[I(o,{name:t.expanded?"unexpand":"expand",onClick:t.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k("section",Ee,[T(t.$slots,"rawCode")]),k("section",{class:X(["highlight-wrapper",{"highlight-wrapper-expand":t.expanded}])},[T(t.$slots,"highlightCode")],2)])])],8,ge)}const Se=O(he,[["render",Ae]]);export{Se as _,Y as a,K as u};
