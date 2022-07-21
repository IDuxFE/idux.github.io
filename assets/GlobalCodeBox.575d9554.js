import{x as z,C as R,y as F,i as $,z as G,d as M,h as P,_ as N,r as D,o as O,k as H,w as I,e as k,c as B,m as L,A as J,a as Z,b as E,t as X,B as T,D as q}from"./index.efd98de3.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=()=>{const c=R.getInstance(),_=new Set;let h=!1,x=null;z(()=>{x!==null&&clearTimeout(x),_.forEach(g=>g.destroy()),_.clear(),h=!0});function C(g,y=1){return new Promise(o=>{if(y>1){let n=y;const a=c.beginCopy(g);_.add(a);const t=()=>{const r=a.copy();!r&&--n&&!h?x=setTimeout(t,1):(x=null,_.delete(a),a.destroy(),o(r))};t()}else{const n=c.copy(g);o(n)}})}return{copy:C}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=()=>{const c=$(G,null);return c===null?F("components/message","<IxMessageProvider> not found."):c};var S={},j={exports:{}};(function(c){var _=function(){var h=String.fromCharCode,x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g={};function y(o,n){if(!g[o]){g[o]={};for(var a=0;a<o.length;a++)g[o][o.charAt(a)]=a}return g[o][n]}var p={compressToBase64:function(o){if(o==null)return"";var n=p._compress(o,6,function(a){return x.charAt(a)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:p._decompress(o.length,32,function(n){return y(x,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":p._compress(o,15,function(n){return h(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:p._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=p.compress(o),a=new Uint8Array(n.length*2),t=0,r=n.length;t<r;t++){var m=n.charCodeAt(t);a[t*2]=m>>>8,a[t*2+1]=m%256}return a},decompressFromUint8Array:function(o){if(o==null)return p.decompress(o);for(var n=new Array(o.length/2),a=0,t=n.length;a<t;a++)n[a]=o[a*2]*256+o[a*2+1];var r=[];return n.forEach(function(m){r.push(h(m))}),p.decompress(r.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":p._compress(o,6,function(n){return C.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),p._decompress(o.length,32,function(n){return y(C,o.charAt(n))}))},compress:function(o){return p._compress(o,16,function(n){return h(n)})},_compress:function(o,n,a){if(o==null)return"";var t,r,m={},b={},w="",A="",d="",v=2,f=3,l=2,u=[],e=0,s=0,i;for(i=0;i<o.length;i+=1)if(w=o.charAt(i),Object.prototype.hasOwnProperty.call(m,w)||(m[w]=f++,b[w]=!0),A=d+w,Object.prototype.hasOwnProperty.call(m,A))d=A;else{if(Object.prototype.hasOwnProperty.call(b,d)){if(d.charCodeAt(0)<256){for(t=0;t<l;t++)e=e<<1,s==n-1?(s=0,u.push(a(e)),e=0):s++;for(r=d.charCodeAt(0),t=0;t<8;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1}else{for(r=1,t=0;t<l;t++)e=e<<1|r,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=0;for(r=d.charCodeAt(0),t=0;t<16;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1}v--,v==0&&(v=Math.pow(2,l),l++),delete b[d]}else for(r=m[d],t=0;t<l;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1;v--,v==0&&(v=Math.pow(2,l),l++),m[A]=f++,d=String(w)}if(d!==""){if(Object.prototype.hasOwnProperty.call(b,d)){if(d.charCodeAt(0)<256){for(t=0;t<l;t++)e=e<<1,s==n-1?(s=0,u.push(a(e)),e=0):s++;for(r=d.charCodeAt(0),t=0;t<8;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1}else{for(r=1,t=0;t<l;t++)e=e<<1|r,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=0;for(r=d.charCodeAt(0),t=0;t<16;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1}v--,v==0&&(v=Math.pow(2,l),l++),delete b[d]}else for(r=m[d],t=0;t<l;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1;v--,v==0&&(v=Math.pow(2,l),l++)}for(r=2,t=0;t<l;t++)e=e<<1|r&1,s==n-1?(s=0,u.push(a(e)),e=0):s++,r=r>>1;for(;;)if(e=e<<1,s==n-1){u.push(a(e));break}else s++;return u.join("")},decompress:function(o){return o==null?"":o==""?null:p._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,a){var t=[],r=4,m=4,b=3,w="",A=[],d,v,f,l,u,e,s,i={val:a(0),position:n,index:1};for(d=0;d<3;d+=1)t[d]=d;for(f=0,u=Math.pow(2,2),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;switch(f){case 0:for(f=0,u=Math.pow(2,8),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;s=h(f);break;case 1:for(f=0,u=Math.pow(2,16),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;s=h(f);break;case 2:return""}for(t[3]=s,v=s,A.push(s);;){if(i.index>o)return"";for(f=0,u=Math.pow(2,b),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;switch(s=f){case 0:for(f=0,u=Math.pow(2,8),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;t[m++]=h(f),s=m-1,r--;break;case 1:for(f=0,u=Math.pow(2,16),e=1;e!=u;)l=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(l>0?1:0)*e,e<<=1;t[m++]=h(f),s=m-1,r--;break;case 2:return A.join("")}if(r==0&&(r=Math.pow(2,b),b++),t[s])w=t[s];else if(s===m)w=v+v.charAt(0);else return null;A.push(w),t[m++]=v+w.charAt(0),r--,v=w,r==0&&(r=Math.pow(2,b),b++)}}};return p}();c!=null&&(c.exports=_)})(j);Object.defineProperty(S,"__esModule",{value:!0});S.getParameters=void 0;var Q=j.exports;function W(c){return Q.compressToBase64(c).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function V(c){return W(JSON.stringify(c))}S.getParameters=V;var U=void 0,ee=S;U=ee.getParameters;const oe=c=>U({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ae,isBinary:!1},"vite.config.ts":{content:ce,isBinary:!1},"index.html":{content:ne,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(c),isBinary:!1},"src/App.vue":{content:re,isBinary:!1},"src/main.ts":{content:te,isBinary:!1},"src/idux.ts":{content:ie,isBinary:!1},"src/env.d.ts":{content:se,isBinary:!1}}}),ne=`
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
</style>`,ie=`
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

export default { install };`,se=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,ae=`
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
}`,ce=`
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
})`,le=M({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(c){const{lang:_}=$(P);return{onClick:()=>{var y;const x=document.createElement("div");x.style.display="none";const g=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${oe(c.code)}`;x.innerHTML=`<a href=${g} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(x),(y=x.querySelector("a"))==null||y.click(),document.body.removeChild(x)},lang:_}}});function ue(c,_,h,x,C,g){const y=D("IxIcon"),p=D("IxTooltip");return O(),H(p,{title:c.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:I(()=>[k(y,{name:"code",onClick:c.onClick},null,8,["onClick"])]),_:1},8,["title"])}var de=N(le,[["render",ue]]);const pe=M({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(c){const{lang:_}=$(P),h=B(()=>`${c.packageName}-${c.componentName}-demo-${c.demoName}`),x=B(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${c.packageName}/${c.componentName}/demo/${c.demoName}`}.md`),C=L(!1),g=B(()=>_.value==="zh"?C.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":C.value?"Hide Code":"Show Code"),y=()=>{C.value=!C.value},{copy:p}=Y(),{success:o}=K(),n=J(()=>{p(decodeURIComponent(c.code)).then(()=>{o(_.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:h,lang:_,editHref:x,expanded:C,expandedTitle:g,onExpanded:y,onCopy:n}}}),fe=["id"],me={class:"global-code-box-title markdown"},ve={class:"global-code-box-border"},xe={class:"global-code-box"},he={class:"global-code-box-meta markdown"},ge={class:"global-code-box-description"},_e={class:"global-code-box-actions"},ye=["href"],Ce={class:"global-code-box-demo"};function we(c,_,h,x,C,g){const y=de,p=D("IxIcon"),o=D("IxTooltip"),n=D("IxSpace");return O(),Z("div",{id:c.id,class:"global-code-box-wrapper"},[E("section",me,[E("h3",null,X(c.title),1)]),E("div",ve,[E("section",xe,[E("section",he,[E("div",ge,[T(c.$slots,"description")]),E("div",_e,[k(n,null,{default:I(()=>[k(y,{code:c.code},null,8,["code"]),k(o,{title:c.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:I(()=>[E("a",{href:c.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[k(p,{name:"edit"})],8,ye)]),_:1},8,["title"]),k(o,{title:c.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:I(()=>[k(p,{name:"copy",onClick:c.onCopy},null,8,["onClick"])]),_:1},8,["title"]),k(o,{title:c.expandedTitle},{default:I(()=>[k(p,{name:c.expanded?"unexpand":"expand",onClick:c.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),E("section",Ce,[T(c.$slots,"rawCode")]),E("section",{class:q(["highlight-wrapper",{"highlight-wrapper-expand":c.expanded}])},[T(c.$slots,"highlightCode")],2)])])],8,fe)}var Ee=N(pe,[["render",we]]);export{Ee as _,Y as a,K as u};
