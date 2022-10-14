var H=Object.defineProperty;var L=(t,l,d)=>l in t?H(t,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[l]=d;var M=(t,l,d)=>(L(t,typeof l!="symbol"?l+"":l,d),d);import{L as J,x as Z,i as B,y as q,z as X,d as O,a as U,_ as j,r as A,o as R,j as z,w as S,f as I,c as P,m as Y,A as K,b as Q,e as k,t as W,B as N,C as V}from"./index.c53a58ee.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class ee{constructor(l){M(this,"_textarea");const d=this._textarea=document.createElement("textarea"),u=d.style;u.opacity="0",u.position="absolute",u.left=u.top="-999em",d.setAttribute("aria-hidden","true"),d.value=l,document.body.appendChild(d)}copy(){const l=this._textarea;let d=!1;try{if(l){const u=document.activeElement;l.select(),l.setSelectionRange(0,l.value.length),d=document.execCommand("copy"),u&&u.focus()}}catch(u){J.error("cdk/clipboard",u)}return d}destroy(){const l=this._textarea;l&&(l.parentNode&&l.parentNode.removeChild(l),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=class{static getInstance(){return D.instance||(D.instance=new D),D.instance}constructor(){}copy(l){const d=this.beginCopy(l),u=d.copy();return d.destroy(),u}beginCopy(l){return new ee(l)}};let $=D;M($,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const oe=()=>{const t=$.getInstance(),l=new Set;let d=!1,u=null;Z(()=>{u!==null&&clearTimeout(u),l.forEach(h=>h.destroy()),l.clear(),d=!0});function _(h,C=1){return new Promise(o=>{if(C>1){let n=C;const a=t.beginCopy(h);l.add(a);const r=()=>{const s=a.copy();!s&&--n&&!d?u=setTimeout(r,1):(u=null,l.delete(a),a.destroy(),o(s))};r()}else{const n=t.copy(h);o(n)}})}return{copy:_}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ne=()=>{const t=B(X,null);return t===null?q("components/message","<IxMessageProvider> not found."):t};var T={},F={exports:{}};(function(t){var l=function(){var d=String.fromCharCode,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",h={};function C(o,n){if(!h[o]){h[o]={};for(var a=0;a<o.length;a++)h[o][o.charAt(a)]=a}return h[o][n]}var v={compressToBase64:function(o){if(o==null)return"";var n=v._compress(o,6,function(a){return u.charAt(a)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:v._decompress(o.length,32,function(n){return C(u,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":v._compress(o,15,function(n){return d(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:v._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=v.compress(o),a=new Uint8Array(n.length*2),r=0,s=n.length;r<s;r++){var g=n.charCodeAt(r);a[r*2]=g>>>8,a[r*2+1]=g%256}return a},decompressFromUint8Array:function(o){if(o==null)return v.decompress(o);for(var n=new Array(o.length/2),a=0,r=n.length;a<r;a++)n[a]=o[a*2]*256+o[a*2+1];var s=[];return n.forEach(function(g){s.push(d(g))}),v.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":v._compress(o,6,function(n){return _.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),v._decompress(o.length,32,function(n){return C(_,o.charAt(n))}))},compress:function(o){return v._compress(o,16,function(n){return d(n)})},_compress:function(o,n,a){if(o==null)return"";var r,s,g={},w={},b="",E="",m="",y=2,x=3,p=2,f=[],e=0,c=0,i;for(i=0;i<o.length;i+=1)if(b=o.charAt(i),Object.prototype.hasOwnProperty.call(g,b)||(g[b]=x++,w[b]=!0),E=m+b,Object.prototype.hasOwnProperty.call(g,E))m=E;else{if(Object.prototype.hasOwnProperty.call(w,m)){if(m.charCodeAt(0)<256){for(r=0;r<p;r++)e=e<<1,c==n-1?(c=0,f.push(a(e)),e=0):c++;for(s=m.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<p;r++)e=e<<1|s,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=0;for(s=m.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete w[m]}else for(s=g[m],r=0;r<p;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;y--,y==0&&(y=Math.pow(2,p),p++),g[E]=x++,m=String(b)}if(m!==""){if(Object.prototype.hasOwnProperty.call(w,m)){if(m.charCodeAt(0)<256){for(r=0;r<p;r++)e=e<<1,c==n-1?(c=0,f.push(a(e)),e=0):c++;for(s=m.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<p;r++)e=e<<1|s,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=0;for(s=m.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete w[m]}else for(s=g[m],r=0;r<p;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;y--,y==0&&(y=Math.pow(2,p),p++)}for(s=2,r=0;r<p;r++)e=e<<1|s&1,c==n-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;for(;;)if(e=e<<1,c==n-1){f.push(a(e));break}else c++;return f.join("")},decompress:function(o){return o==null?"":o==""?null:v._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,a){var r=[],s=4,g=4,w=3,b="",E=[],m,y,x,p,f,e,c,i={val:a(0),position:n,index:1};for(m=0;m<3;m+=1)r[m]=m;for(x=0,f=Math.pow(2,2),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;switch(x){case 0:for(x=0,f=Math.pow(2,8),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;c=d(x);break;case 1:for(x=0,f=Math.pow(2,16),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;c=d(x);break;case 2:return""}for(r[3]=c,y=c,E.push(c);;){if(i.index>o)return"";for(x=0,f=Math.pow(2,w),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;switch(c=x){case 0:for(x=0,f=Math.pow(2,8),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;r[g++]=d(x),c=g-1,s--;break;case 1:for(x=0,f=Math.pow(2,16),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=n,i.val=a(i.index++)),x|=(p>0?1:0)*e,e<<=1;r[g++]=d(x),c=g-1,s--;break;case 2:return E.join("")}if(s==0&&(s=Math.pow(2,w),w++),r[c])b=r[c];else if(c===g)b=y+y.charAt(0);else return null;E.push(b),r[g++]=y+b.charAt(0),s--,y=b,s==0&&(s=Math.pow(2,w),w++)}}};return v}();t!=null&&(t.exports=l)})(F);Object.defineProperty(T,"__esModule",{value:!0});T.getParameters=void 0;var te=F.exports;function re(t){return te.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function se(t){return re(JSON.stringify(t))}T.getParameters=se;var G=void 0,ie=T;G=ie.getParameters;const ce=t=>G({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:fe,isBinary:!1},"vite.config.ts":{content:me,isBinary:!1},"index.html":{content:ae,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(t),isBinary:!1},"src/App.vue":{content:ue,isBinary:!1},"src/main.ts":{content:le,isBinary:!1},"src/idux.ts":{content:de,isBinary:!1},"src/env.d.ts":{content:pe,isBinary:!1}}}),ae=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,le=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,ue=`
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
</style>`,de=`
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

export default { install };`,pe=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,fe=`
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
}`,me=`
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
})`,ve=O({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(t){const{lang:l}=B(U);return{onClick:()=>{var C;const u=document.createElement("div");u.style.display="none";const h=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${ce(t.code)}`;u.innerHTML=`<a href=${h} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(C=u.querySelector("a"))==null||C.click(),document.body.removeChild(u)},lang:l}}});function xe(t,l,d,u,_,h){const C=A("IxIcon"),v=A("IxTooltip");return R(),z(v,{title:t.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:S(()=>[I(C,{name:"code",onClick:t.onClick},null,8,["onClick"])]),_:1},8,["title"])}const he=j(ve,[["render",xe]]),ge=O({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(t){const{lang:l}=B(U);return{onClick:()=>{var h;const u=document.createElement("div");u.style.display="none";const _=_e(t.code);u.innerHTML=`<a href=${_} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(h=u.querySelector("a"))==null||h.click(),document.body.removeChild(u)},lang:l}}}),ye=t=>btoa(unescape(encodeURIComponent(t))),_e=t=>{const d={"App.vue":decodeURIComponent(t)};return`https://playground.idux.site/#${ye(JSON.stringify(d))}`};function Ce(t,l,d,u,_,h){const C=A("IxIcon"),v=A("IxTooltip");return R(),z(v,{title:t.lang==="zh"?"\u5728 Playground \u4E2D\u6253\u5F00":"Open on Playground"},{default:S(()=>[I(C,{name:"bug",onClick:t.onClick},null,8,["onClick"])]),_:1},8,["title"])}const be=j(ge,[["render",Ce]]),we=O({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(t){const{lang:l}=B(U),d=P(()=>`${t.packageName}-${t.componentName}-demo-${t.demoName}`),u=P(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${t.packageName}/${t.componentName}/demo/${t.demoName}`}.md`),_=Y(!1),h=P(()=>l.value==="zh"?_.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":_.value?"Hide Code":"Show Code"),C=()=>{_.value=!_.value},{copy:v}=oe(),{success:o}=ne(),n=K(()=>{v(decodeURIComponent(t.code)).then(()=>{o(l.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:d,lang:l,editHref:u,expanded:_,expandedTitle:h,onExpanded:C,onCopy:n}}});const Ie=["id"],ke={class:"global-code-box-title markdown"},Ee={class:"global-code-box-border"},Ae={class:"global-code-box"},Se={class:"global-code-box-meta markdown"},De={class:"global-code-box-description"},$e={class:"global-code-box-actions"},Be=["href"],Te={class:"global-code-box-demo"};function Me(t,l,d,u,_,h){const C=be,v=he,o=A("IxIcon"),n=A("IxTooltip"),a=A("IxSpace");return R(),Q("div",{id:t.id,class:"global-code-box-wrapper"},[k("section",ke,[k("h3",null,W(t.title),1)]),k("div",Ee,[k("section",Ae,[k("section",Se,[k("div",De,[N(t.$slots,"description")]),k("div",$e,[I(a,null,{default:S(()=>[I(C,{code:t.code},null,8,["code"]),I(v,{code:t.code},null,8,["code"]),I(n,{title:t.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:S(()=>[k("a",{href:t.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[I(o,{name:"edit"})],8,Be)]),_:1},8,["title"]),I(n,{title:t.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:S(()=>[I(o,{name:"copy",onClick:t.onCopy},null,8,["onClick"])]),_:1},8,["title"]),I(n,{title:t.expandedTitle},{default:S(()=>[I(o,{name:t.expanded?"unexpand":"expand",onClick:t.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k("section",Te,[N(t.$slots,"rawCode")]),k("section",{class:V(["highlight-wrapper",{"highlight-wrapper-expand":t.expanded}])},[N(t.$slots,"highlightCode")],2)])])],8,Ie)}const Oe=j(we,[["render",Me]]);export{Oe as _,oe as a,ne as u};
