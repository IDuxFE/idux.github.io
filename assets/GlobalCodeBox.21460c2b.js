var L=Object.defineProperty;var J=(n,l,u)=>l in n?L(n,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[l]=u;var P=(n,l,u)=>(J(n,typeof l!="symbol"?l+"":l,u),u);import{L as Z,A as q,i as T,B as X,C as Y,d as U,a as j,_ as R,r as S,o as B,j as F,w as A,f as w,c as N,m as K,D as Q,E as W,b as G,e as k,t as V,G as O,v as ee,T as oe}from"./index.06ed4487.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class ne{constructor(l){P(this,"_textarea");const u=this._textarea=document.createElement("textarea"),d=u.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",u.setAttribute("aria-hidden","true"),u.value=l,document.body.appendChild(u)}copy(){const l=this._textarea;let u=!1;try{if(l){const d=document.activeElement;l.select(),l.setSelectionRange(0,l.value.length),u=document.execCommand("copy"),d&&d.focus()}}catch(d){Z.error("cdk/clipboard",d)}return u}destroy(){const l=this._textarea;l&&(l.parentNode&&l.parentNode.removeChild(l),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=class{static getInstance(){return D.instance||(D.instance=new D),D.instance}constructor(){}copy(l){const u=this.beginCopy(l),d=u.copy();return u.destroy(),d}beginCopy(l){return new ne(l)}};let $=D;P($,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const te=()=>{const n=$.getInstance(),l=new Set;let u=!1,d=null;q(()=>{d!==null&&clearTimeout(d),l.forEach(x=>x.destroy()),l.clear(),u=!0});function _(x,C=1){return new Promise(o=>{if(C>1){let t=C;const a=n.beginCopy(x);l.add(a);const r=()=>{const s=a.copy();!s&&--t&&!u?d=setTimeout(r,1):(d=null,l.delete(a),a.destroy(),o(s))};r()}else{const t=n.copy(x);o(t)}})}return{copy:_}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re=()=>{const n=T(Y,null);return n===null?X("components/message","<IxMessageProvider> not found."):n};var M={},H={exports:{}};(function(n){var l=function(){var u=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",x={};function C(o,t){if(!x[o]){x[o]={};for(var a=0;a<o.length;a++)x[o][o.charAt(a)]=a}return x[o][t]}var v={compressToBase64:function(o){if(o==null)return"";var t=v._compress(o,6,function(a){return d.charAt(a)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:v._decompress(o.length,32,function(t){return C(d,o.charAt(t))})},compressToUTF16:function(o){return o==null?"":v._compress(o,15,function(t){return u(t+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:v._decompress(o.length,16384,function(t){return o.charCodeAt(t)-32})},compressToUint8Array:function(o){for(var t=v.compress(o),a=new Uint8Array(t.length*2),r=0,s=t.length;r<s;r++){var g=t.charCodeAt(r);a[r*2]=g>>>8,a[r*2+1]=g%256}return a},decompressFromUint8Array:function(o){if(o==null)return v.decompress(o);for(var t=new Array(o.length/2),a=0,r=t.length;a<r;a++)t[a]=o[a*2]*256+o[a*2+1];var s=[];return t.forEach(function(g){s.push(u(g))}),v.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":v._compress(o,6,function(t){return _.charAt(t)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),v._decompress(o.length,32,function(t){return C(_,o.charAt(t))}))},compress:function(o){return v._compress(o,16,function(t){return u(t)})},_compress:function(o,t,a){if(o==null)return"";var r,s,g={},I={},b="",E="",m="",y=2,h=3,p=2,f=[],e=0,c=0,i;for(i=0;i<o.length;i+=1)if(b=o.charAt(i),Object.prototype.hasOwnProperty.call(g,b)||(g[b]=h++,I[b]=!0),E=m+b,Object.prototype.hasOwnProperty.call(g,E))m=E;else{if(Object.prototype.hasOwnProperty.call(I,m)){if(m.charCodeAt(0)<256){for(r=0;r<p;r++)e=e<<1,c==t-1?(c=0,f.push(a(e)),e=0):c++;for(s=m.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<p;r++)e=e<<1|s,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=0;for(s=m.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete I[m]}else for(s=g[m],r=0;r<p;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;y--,y==0&&(y=Math.pow(2,p),p++),g[E]=h++,m=String(b)}if(m!==""){if(Object.prototype.hasOwnProperty.call(I,m)){if(m.charCodeAt(0)<256){for(r=0;r<p;r++)e=e<<1,c==t-1?(c=0,f.push(a(e)),e=0):c++;for(s=m.charCodeAt(0),r=0;r<8;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}else{for(s=1,r=0;r<p;r++)e=e<<1|s,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=0;for(s=m.charCodeAt(0),r=0;r<16;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1}y--,y==0&&(y=Math.pow(2,p),p++),delete I[m]}else for(s=g[m],r=0;r<p;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;y--,y==0&&(y=Math.pow(2,p),p++)}for(s=2,r=0;r<p;r++)e=e<<1|s&1,c==t-1?(c=0,f.push(a(e)),e=0):c++,s=s>>1;for(;;)if(e=e<<1,c==t-1){f.push(a(e));break}else c++;return f.join("")},decompress:function(o){return o==null?"":o==""?null:v._decompress(o.length,32768,function(t){return o.charCodeAt(t)})},_decompress:function(o,t,a){var r=[],s=4,g=4,I=3,b="",E=[],m,y,h,p,f,e,c,i={val:a(0),position:t,index:1};for(m=0;m<3;m+=1)r[m]=m;for(h=0,f=Math.pow(2,2),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;switch(h){case 0:for(h=0,f=Math.pow(2,8),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;c=u(h);break;case 1:for(h=0,f=Math.pow(2,16),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;c=u(h);break;case 2:return""}for(r[3]=c,y=c,E.push(c);;){if(i.index>o)return"";for(h=0,f=Math.pow(2,I),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;switch(c=h){case 0:for(h=0,f=Math.pow(2,8),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;r[g++]=u(h),c=g-1,s--;break;case 1:for(h=0,f=Math.pow(2,16),e=1;e!=f;)p=i.val&i.position,i.position>>=1,i.position==0&&(i.position=t,i.val=a(i.index++)),h|=(p>0?1:0)*e,e<<=1;r[g++]=u(h),c=g-1,s--;break;case 2:return E.join("")}if(s==0&&(s=Math.pow(2,I),I++),r[c])b=r[c];else if(c===g)b=y+y.charAt(0);else return null;E.push(b),r[g++]=y+b.charAt(0),s--,y=b,s==0&&(s=Math.pow(2,I),I++)}}};return v}();n!=null&&(n.exports=l)})(H);Object.defineProperty(M,"__esModule",{value:!0});M.getParameters=void 0;var se=H.exports;function ie(n){return se.compressToBase64(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ce(n){return ie(JSON.stringify(n))}M.getParameters=ce;var z=void 0,ae=M;z=ae.getParameters;const le=n=>z({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:ve,isBinary:!1},"vite.config.ts":{content:he,isBinary:!1},"index.html":{content:de,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(n),isBinary:!1},"src/App.vue":{content:pe,isBinary:!1},"src/main.ts":{content:ue,isBinary:!1},"src/idux.ts":{content:fe,isBinary:!1},"src/env.d.ts":{content:me,isBinary:!1}}}),de=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,ue=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,pe=`
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
</style>`,fe=`
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

export default { install };`,me=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,ve=`
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
}`,he=`
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
})`,xe=U({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(n){const{lang:l}=T(j);return{onClick:()=>{var C;const d=document.createElement("div");d.style.display="none";const x=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${le(n.code)}`;d.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(C=d.querySelector("a"))==null||C.click(),document.body.removeChild(d)},lang:l}}});function ge(n,l,u,d,_,x){const C=S("IxIcon"),v=S("IxTooltip");return B(),F(v,{title:n.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:A(()=>[w(C,{name:"code",onClick:n.onClick},null,8,["onClick"])]),_:1},8,["title"])}const ye=R(xe,[["render",ge]]),_e=U({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(n){const{lang:l}=T(j);return{onClick:()=>{var x;const d=document.createElement("div");d.style.display="none";const _=be(n.code);d.innerHTML=`<a href=${_} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(x=d.querySelector("a"))==null||x.click(),document.body.removeChild(d)},lang:l}}}),Ce=n=>btoa(unescape(encodeURIComponent(n))),be=n=>{const u={"App.vue":decodeURIComponent(n)};return`https://playground.idux.site/#${Ce(JSON.stringify(u))}`};function we(n,l,u,d,_,x){const C=S("IxIcon"),v=S("IxTooltip");return B(),F(v,{title:n.lang==="zh"?"\u5728 Playground \u4E2D\u6253\u5F00":"Open on Playground"},{default:A(()=>[w(C,{name:"bug",onClick:n.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Ie=R(_e,[["render",we]]),ke=U({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(n){const{lang:l}=T(j),u=N(()=>`${n.packageName}-${n.componentName}-${W(n.demoName)}`),d=N(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${n.packageName}/${n.componentName}/demo/${n.demoName}`}.md`),_=K(!1),x=N(()=>l.value==="zh"?_.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":_.value?"Hide Code":"Show Code"),C=()=>{_.value=!_.value},{copy:v}=te(),{success:o}=re(),t=Q(()=>{v(decodeURIComponent(n.code)).then(()=>{o(l.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:u,lang:l,editHref:d,expanded:_,expandedTitle:x,onExpanded:C,onCopy:t}}});const Ee=["id"],Ae={class:"global-code-box-title markdown"},Se=["href"],De={class:"global-code-box-description"},$e={class:"global-code-box-content"},Be={class:"global-code-box-content-border"},Te={class:"global-code-box-raw-code"},Me={class:"global-code-box-tools"},Pe=["href"],Ne={key:0,class:"global-code-box-highlight-code"};function Oe(n,l,u,d,_,x){const C=Ie,v=ye,o=S("IxIcon"),t=S("IxTooltip"),a=S("IxSpace");return B(),G("div",{id:n.id,class:"global-code-box"},[k("div",Ae,[k("h3",null,[k("span",null,V(n.title),1),k("a",{class:"anchor",href:"#"+n.id},"#",8,Se)])]),k("div",De,[O(n.$slots,"description")]),k("div",$e,[k("div",Be,[k("div",Te,[O(n.$slots,"rawCode"),k("div",Me,[w(a,null,{default:A(()=>[w(C,{code:n.code},null,8,["code"]),w(v,{code:n.code},null,8,["code"]),w(t,{title:n.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:A(()=>[k("a",{href:n.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[w(o,{name:"edit"})],8,Pe)]),_:1},8,["title"]),w(t,{title:n.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:A(()=>[w(o,{name:"copy",onClick:n.onCopy},null,8,["onClick"])]),_:1},8,["title"]),w(t,{title:n.expandedTitle},{default:A(()=>[w(o,{name:n.expanded?"unexpand":"expand",onClick:n.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),w(oe,{name:"ix-fade-down"},{default:A(()=>[n.expanded?(B(),G("div",Ne,[O(n.$slots,"highlightCode")])):ee("",!0)]),_:3})])])],8,Ee)}const Re=R(ke,[["render",Oe]]);export{Re as _,te as a,re as u};
