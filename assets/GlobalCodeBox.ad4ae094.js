import{a as C,_ as b,L as E,c as $}from"./index.57b654b0.js";import{g as S}from"./async-vendor.5cd88270.js";import{l as h,p as I,aS as f,aT as k,aY as N,aZ as x,m as l,aQ as P,c as g,r as B,v as T,aU as w,aV as r,b0 as A,a_ as v,aR as j}from"./vendor.fb1a49dd.js";const F=e=>S({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:z,isBinary:!1},"vite.config.ts":{content:G,isBinary:!1},"index.html":{content:M,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:H,isBinary:!1},"src/main.ts":{content:U,isBinary:!1},"src/idux.ts":{content:L,isBinary:!1},"src/env.d.ts":{content:R,isBinary:!1}}}),M=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,U=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,H=`
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
</style>`,L=`
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

export default { install };`,R=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,z=`
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
}`,G=`
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
})`,O=h({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:o}=I(C);return{onClick:()=>{var s;const t=document.createElement("div");t.style.display="none";const i=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${F(e.code)}`;t.innerHTML=`<a href=${i} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(t),(s=t.querySelector("a"))==null||s.click(),document.body.removeChild(t)},lang:o}}});function V(e,o,n,t,a,i){const s=f("IxIcon"),c=f("IxTooltip");return k(),N(c,{title:e.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:x(()=>[l(s,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}var J=b(O,[["render",V]]);class X{constructor(o){const n=this._textarea=document.createElement("textarea"),t=n.style;t.opacity="0",t.position="absolute",t.left=t.top="-999em",n.setAttribute("aria-hidden","true"),n.value=o,document.body.appendChild(n)}copy(){const o=this._textarea;let n=!1;try{if(o){const t=document.activeElement;o.select(),o.setSelectionRange(0,o.value.length),n=document.execCommand("copy"),t&&t.focus()}}catch(t){E.error("cdk/clipboard",t)}return n}destroy(){const o=this._textarea;o&&(o.parentNode&&o.parentNode.removeChild(o),this._textarea=void 0)}}const m=class{static getInstance(){return m.instance||(m.instance=new m),m.instance}constructor(){}copy(e){const o=this.beginCopy(e),n=o.copy();return o.destroy(),n}beginCopy(e){return new X(e)}};let D=m;D.instance=null;const Y=()=>{const e=D.getInstance(),o=new Set;let n=!1,t=null;P(()=>{t!==null&&clearTimeout(t),o.forEach(i=>i.destroy()),o.clear(),n=!0});function a(i,s=1){return new Promise(d=>{if(s>1){let p=s;const u=e.beginCopy(i);o.add(u);const y=()=>{const _=u.copy();!_&&--p&&!n?t=setTimeout(y,1):(t=null,o.delete(u),u.destroy(),d(_))};y()}else{const p=e.copy(i);d(p)}})}return{copy:a}};const q=h({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:o}=I(C),n=g(()=>`${e.packageName}-${e.componentName}-demo-${e.demoName}`),t=g(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),a=B(!1),i=g(()=>o.value==="zh"?a.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":a.value?"Hide Code":"Show Code"),s=()=>{a.value=!a.value},{copy:c}=Y(),{success:d}=$(),p=T(()=>{c(decodeURIComponent(e.code)).then(()=>{d(o.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:n,lang:o,editHref:t,expanded:a,expandedTitle:i,onExpanded:s,onCopy:p}}}),Q=["id"],Z={class:"global-code-box-title markdown"},K={class:"global-code-box-border"},W={class:"global-code-box"},ee={class:"global-code-box-meta markdown"},oe={class:"global-code-box-description"},te={class:"global-code-box-actions"},ne=["href"],se={class:"global-code-box-demo"};function ae(e,o,n,t,a,i){const s=J,c=f("IxIcon"),d=f("IxTooltip");return k(),w("div",{id:e.id,class:"global-code-box-wrapper"},[r("section",Z,[r("h3",null,A(e.title),1)]),r("div",K,[r("section",W,[r("section",ee,[r("div",oe,[v(e.$slots,"description")]),r("div",te,[l(s,{code:e.code},null,8,["code"]),l(d,{title:e.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:x(()=>[r("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[l(c,{name:"edit"})],8,ne)]),_:1},8,["title"]),l(d,{title:e.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:x(()=>[l(c,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),l(d,{title:e.expandedTitle},{default:x(()=>[l(c,{name:e.expanded?"unexpand":"expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])])]),r("section",se,[v(e.$slots,"rawCode")]),r("section",{class:j(["highlight-wrapper",{"highlight-wrapper-expand":e.expanded}])},[v(e.$slots,"highlightCode")],2)])])],8,Q)}var de=b(q,[["render",ae]]);export{de as _,Y as u};
