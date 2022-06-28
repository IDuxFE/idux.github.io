import{x as z,C as R,i as $,y as F,z as G,d as M,a as P,_ as N,r as D,o as O,k as H,w as I,f as E,c as B,m as L,A as J,b as Z,e as k,t as X,B as T,D as q}from"./index.09888550.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=()=>{const l=R.getInstance(),b=new Set;let v=!1,g=null;z(()=>{g!==null&&clearTimeout(g),b.forEach(h=>h.destroy()),b.clear(),v=!0});function y(h,_=1){return new Promise(o=>{if(_>1){let n=_;const a=l.beginCopy(h);b.add(a);const t=()=>{const r=a.copy();!r&&--n&&!v?g=setTimeout(t,1):(g=null,b.delete(a),a.destroy(),o(r))};t()}else{const n=l.copy(h);o(n)}})}return{copy:y}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const K=()=>{const l=$(F,null);return l===null?G("components/message","<IxMessageProvider> not found."):l};var S={},j={exports:{}};(function(l){var b=function(){var v=String.fromCharCode,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",h={};function _(o,n){if(!h[o]){h[o]={};for(var a=0;a<o.length;a++)h[o][o.charAt(a)]=a}return h[o][n]}var u={compressToBase64:function(o){if(o==null)return"";var n=u._compress(o,6,function(a){return g.charAt(a)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:u._decompress(o.length,32,function(n){return _(g,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":u._compress(o,15,function(n){return v(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:u._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=u.compress(o),a=new Uint8Array(n.length*2),t=0,r=n.length;t<r;t++){var m=n.charCodeAt(t);a[t*2]=m>>>8,a[t*2+1]=m%256}return a},decompressFromUint8Array:function(o){if(o==null)return u.decompress(o);for(var n=new Array(o.length/2),a=0,t=n.length;a<t;a++)n[a]=o[a*2]*256+o[a*2+1];var r=[];return n.forEach(function(m){r.push(v(m))}),u.decompress(r.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":u._compress(o,6,function(n){return y.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),u._decompress(o.length,32,function(n){return _(y,o.charAt(n))}))},compress:function(o){return u._compress(o,16,function(n){return v(n)})},_compress:function(o,n,a){if(o==null)return"";var t,r,m={},C={},w="",A="",p="",x=2,f=3,c=2,d=[],e=0,s=0,i;for(i=0;i<o.length;i+=1)if(w=o.charAt(i),Object.prototype.hasOwnProperty.call(m,w)||(m[w]=f++,C[w]=!0),A=p+w,Object.prototype.hasOwnProperty.call(m,A))p=A;else{if(Object.prototype.hasOwnProperty.call(C,p)){if(p.charCodeAt(0)<256){for(t=0;t<c;t++)e=e<<1,s==n-1?(s=0,d.push(a(e)),e=0):s++;for(r=p.charCodeAt(0),t=0;t<8;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1}else{for(r=1,t=0;t<c;t++)e=e<<1|r,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=0;for(r=p.charCodeAt(0),t=0;t<16;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1}x--,x==0&&(x=Math.pow(2,c),c++),delete C[p]}else for(r=m[p],t=0;t<c;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1;x--,x==0&&(x=Math.pow(2,c),c++),m[A]=f++,p=String(w)}if(p!==""){if(Object.prototype.hasOwnProperty.call(C,p)){if(p.charCodeAt(0)<256){for(t=0;t<c;t++)e=e<<1,s==n-1?(s=0,d.push(a(e)),e=0):s++;for(r=p.charCodeAt(0),t=0;t<8;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1}else{for(r=1,t=0;t<c;t++)e=e<<1|r,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=0;for(r=p.charCodeAt(0),t=0;t<16;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1}x--,x==0&&(x=Math.pow(2,c),c++),delete C[p]}else for(r=m[p],t=0;t<c;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1;x--,x==0&&(x=Math.pow(2,c),c++)}for(r=2,t=0;t<c;t++)e=e<<1|r&1,s==n-1?(s=0,d.push(a(e)),e=0):s++,r=r>>1;for(;;)if(e=e<<1,s==n-1){d.push(a(e));break}else s++;return d.join("")},decompress:function(o){return o==null?"":o==""?null:u._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,a){var t=[],r=4,m=4,C=3,w="",A=[],p,x,f,c,d,e,s,i={val:a(0),position:n,index:1};for(p=0;p<3;p+=1)t[p]=p;for(f=0,d=Math.pow(2,2),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;switch(f){case 0:for(f=0,d=Math.pow(2,8),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;s=v(f);break;case 1:for(f=0,d=Math.pow(2,16),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;s=v(f);break;case 2:return""}for(t[3]=s,x=s,A.push(s);;){if(i.index>o)return"";for(f=0,d=Math.pow(2,C),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;switch(s=f){case 0:for(f=0,d=Math.pow(2,8),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;t[m++]=v(f),s=m-1,r--;break;case 1:for(f=0,d=Math.pow(2,16),e=1;e!=d;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),f|=(c>0?1:0)*e,e<<=1;t[m++]=v(f),s=m-1,r--;break;case 2:return A.join("")}if(r==0&&(r=Math.pow(2,C),C++),t[s])w=t[s];else if(s===m)w=x+x.charAt(0);else return null;A.push(w),t[m++]=x+w.charAt(0),r--,x=w,r==0&&(r=Math.pow(2,C),C++)}}};return u}();l!=null&&(l.exports=b)})(j);Object.defineProperty(S,"__esModule",{value:!0});S.getParameters=void 0;var Q=j.exports;function W(l){return Q.compressToBase64(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function V(l){return W(JSON.stringify(l))}S.getParameters=V;var U=void 0,ee=S;U=ee.getParameters;const oe=l=>U({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ae,isBinary:!1},"vite.config.ts":{content:le,isBinary:!1},"index.html":{content:ne,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(l),isBinary:!1},"src/App.vue":{content:re,isBinary:!1},"src/main.ts":{content:te,isBinary:!1},"src/idux.ts":{content:ie,isBinary:!1},"src/env.d.ts":{content:se,isBinary:!1}}}),ne=`
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
})`,ce=M({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(l){const{lang:b}=$(P);return{onClick:()=>{var _;const g=document.createElement("div");g.style.display="none";const h=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${oe(l.code)}`;g.innerHTML=`<a href=${h} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(g),(_=g.querySelector("a"))==null||_.click(),document.body.removeChild(g)},lang:b}}});function de(l,b,v,g,y,h){const _=D("IxIcon"),u=D("IxTooltip");return O(),H(u,{title:l.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:I(()=>[E(_,{name:"code",onClick:l.onClick},null,8,["onClick"])]),_:1},8,["title"])}var pe=N(ce,[["render",de]]);const ue=M({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(l){const{lang:b}=$(P),v=B(()=>`${l.packageName}-${l.componentName}-demo-${l.demoName}`),g=B(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${l.packageName}/${l.componentName}/demo/${l.demoName}`}.md`),y=L(!1),h=B(()=>b.value==="zh"?y.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":y.value?"Hide Code":"Show Code"),_=()=>{y.value=!y.value},{copy:u}=Y(),{success:o}=K(),n=J(()=>{u(decodeURIComponent(l.code)).then(()=>{o(b.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:v,lang:b,editHref:g,expanded:y,expandedTitle:h,onExpanded:_,onCopy:n}}}),fe=["id"],me={class:"global-code-box-title markdown"},xe={class:"global-code-box-border"},ge={class:"global-code-box"},ve={class:"global-code-box-meta markdown"},he={class:"global-code-box-description"},be={class:"global-code-box-actions"},_e=["href"],ye={class:"global-code-box-demo"};function we(l,b,v,g,y,h){const _=pe,u=D("IxIcon"),o=D("IxTooltip"),n=D("IxSpace");return O(),Z("div",{id:l.id,class:"global-code-box-wrapper"},[k("section",me,[k("h3",null,X(l.title),1)]),k("div",xe,[k("section",ge,[k("section",ve,[k("div",he,[T(l.$slots,"description")]),k("div",be,[E(n,null,{default:I(()=>[E(_,{code:l.code},null,8,["code"]),E(o,{title:l.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:I(()=>[k("a",{href:l.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[E(u,{name:"edit"})],8,_e)]),_:1},8,["title"]),E(o,{title:l.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:I(()=>[E(u,{name:"copy",onClick:l.onCopy},null,8,["onClick"])]),_:1},8,["title"]),E(o,{title:l.expandedTitle},{default:I(()=>[E(u,{name:l.expanded?"unexpand":"expand",onClick:l.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k("section",ye,[T(l.$slots,"rawCode")]),k("section",{class:q(["highlight-wrapper",{"highlight-wrapper-expand":l.expanded}])},[T(l.$slots,"highlightCode")],2)])])],8,fe)}var ke=N(ue,[["render",we]]);export{ke as _,Y as a,K as u};
