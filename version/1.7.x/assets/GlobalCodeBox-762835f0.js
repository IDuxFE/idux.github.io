var fe=Object.defineProperty;var me=(e,i,u)=>i in e?fe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u;var G=(e,i,u)=>(me(e,typeof i!="symbol"?i+"":i,u),u);import{a4 as ve,a5 as ye,a6 as ge,L as H,a7 as he,a8 as xe,O as be,ɵ as V,r as oe,a9 as te,m as M,k as ne,a as Z,_ as K,A as q,aa as X,ab as _e}from"./index-9409c3e1.js";import{l as O,x as z,c as $,r as W,z as w,a3 as se,d as Ce,A as ae,q as ke,aa as F,aj as re,ac as D,a8 as Se,N as we,_ as Ae,ab as ee,ad as I,ag as $e,ah as L,ae as Ie,J as Be}from"./vendor-5e807b09.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ee=()=>{const e=O(ve,null);return e===null?ye("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const De={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},waveless:{type:Boolean,default:!1},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Pe={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}},Ne={sm:"xs",md:"sm",lg:"md"},le=z({name:"IxRadio",inheritAttrs:!1,props:De,setup(e,{attrs:i,expose:u,slots:d}){const _=ge(),g=H("common"),h=$(()=>`${g.prefixCls}-radio`),v=H("radio"),{elementRef:o,focus:n,blur:r}=he(),a=W();u({focus:n,blur:r});const s=O(xe,null),p=O(ie,null),k=$(()=>{var x;return(x=i.name)!=null?x:p==null?void 0:p.props.name}),S=$(()=>{const{value:x}=e;return Ce(x)?p?_:void 0:x}),A=$(()=>{var x;return(x=e.buttoned)!=null?x:p==null?void 0:p.props.buttoned}),y=$(()=>{var x,B,N;return(N=(B=(x=e.size)!=null?x:p==null?void 0:p.props.size)!=null?B:s==null?void 0:s.size.value)!=null?N:v.size}),b=$(()=>{var x;return(x=e.waveless)!=null?x:v.waveless}),C=$(()=>{var x,B;return(B=(x=e.mode)!=null?x:p==null?void 0:p.props.mode)!=null?B:"default"}),{isChecked:f,isDisabled:m,isFocused:t,handleChange:c,handleBlur:l,handleFocus:ue}=Te(e,p,o,S,a,b),de=$(()=>{const x=A.value,B=f.value,N=x&&B&&C.value==="primary",E=h.value,T=g.prefixCls,j={[E]:!0,[`${E}-checked`]:f.value,[`${E}-disabled`]:m.value,[`${E}-focused`]:t.value,[`${E}-${y.value}`]:x,[`${T}-button`]:x,[`${T}-button-default`]:x&&!N,[`${T}-button-primary`]:N,[`${T}-button-disabled`]:x&&m.value,[`${T}-button-${Ne[y.value]}`]:x};return ae([j,i.class])});return()=>{const{autofocus:x,label:B}=e,{class:N,style:E,type:T,tabindex:j,...pe}=i,R=h.value,Q=be(d.default,B);return w("label",{class:de.value,style:E,role:"radio","aria-checked":f.value,"aria-disabled":m.value},[w("span",{class:`${R}-input`},[w("input",se({ref:o,type:"radio",class:`${R}-input-inner`,"aria-hidden":!0,autofocus:x,checked:f.value,disabled:m.value,name:k.value,value:S.value,onChange:c,onBlur:l,onFocus:ue},pe),null),!A.value&&w("span",{class:`${R}-input-box`,tabindex:j},[!b.value&&w(V,{ref:a},null)])]),A.value&&!b.value&&w(V,{ref:a},null),Q&&w("span",{class:`${R}-label`},[Q])])}}}),Te=(e,i,u,d,_,g)=>{let h,v;const o=W(!1);let n,r;const a=s=>{o.value=!0,M(e.onFocus,s)};if(i){const{accessor:s,props:p}=i;h=$(()=>s.value===d.value),v=$(()=>s.disabled||!!e.disabled),r=k=>{o.value=!1,s.markAsBlurred(),M(e.onBlur,k)},n=k=>{var S;if(u.value){const A=k.target.checked,y=d.value,b=s.value;s.setValue(y),u.value.checked=!1,M(e.onChange,A,!A),M(p.onChange,y,b),!g.value&&((S=_.value)==null||S.play())}}}else{const{accessor:s,control:p}=oe({valueKey:"checked"});te(p),h=$(()=>!!s.value),v=$(()=>s.disabled),r=k=>{o.value=!1,s.markAsBlurred(),M(e.onBlur,k)},n=k=>{var S;if(u.value){const A=k.target.checked;s.setValue(A),u.value.checked=!1,M(e.onChange,A,!A),!g.value&&((S=_.value)==null||S.play())}}}return{isChecked:h,isDisabled:v,isFocused:o,handleChange:n,handleBlur:r,handleFocus:a}},Me=z({name:"IxRadioGroup",props:Pe,setup(e,{slots:i}){const u=H("common"),d=$(()=>`${u.prefixCls}-radio-group`),{accessor:_,control:g}=oe();te(g),ke(ie,{props:e,accessor:_});const h=$(()=>{var o;return(o=e.gap)!=null?o:e.buttoned?0:8}),v=$(()=>{const{buttoned:o}=e,n=h.value,r=d.value;return ae({[r]:!0,[`${u.prefixCls}-button-group`]:o,[`${u.prefixCls}-button-group-compact`]:o&&(!n||n==="0")})});return()=>{const{dataSource:o}=e;let n;return o?n=o.map(r=>{const{key:a,value:s}=r;return w(le,se(r,{key:a!=null?a:s,value:s!=null?s:a}),null)}):n=i.default?i.default():void 0,w(ne,{class:v.value,size:h.value},{default:()=>[n]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _o=le,Co=Me;var U={},Y={exports:{}};Y.exports;(function(e){var i=function(){var u=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g={};function h(o,n){if(!g[o]){g[o]={};for(var r=0;r<o.length;r++)g[o][o.charAt(r)]=r}return g[o][n]}var v={compressToBase64:function(o){if(o==null)return"";var n=v._compress(o,6,function(r){return d.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:v._decompress(o.length,32,function(n){return h(d,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":v._compress(o,15,function(n){return u(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:v._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=v.compress(o),r=new Uint8Array(n.length*2),a=0,s=n.length;a<s;a++){var p=n.charCodeAt(a);r[a*2]=p>>>8,r[a*2+1]=p%256}return r},decompressFromUint8Array:function(o){if(o==null)return v.decompress(o);for(var n=new Array(o.length/2),r=0,a=n.length;r<a;r++)n[r]=o[r*2]*256+o[r*2+1];var s=[];return n.forEach(function(p){s.push(u(p))}),v.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":v._compress(o,6,function(n){return _.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),v._decompress(o.length,32,function(n){return h(_,o.charAt(n))}))},compress:function(o){return v._compress(o,16,function(n){return u(n)})},_compress:function(o,n,r){if(o==null)return"";var a,s,p={},k={},S="",A="",y="",b=2,C=3,f=2,m=[],t=0,c=0,l;for(l=0;l<o.length;l+=1)if(S=o.charAt(l),Object.prototype.hasOwnProperty.call(p,S)||(p[S]=C++,k[S]=!0),A=y+S,Object.prototype.hasOwnProperty.call(p,A))y=A;else{if(Object.prototype.hasOwnProperty.call(k,y)){if(y.charCodeAt(0)<256){for(a=0;a<f;a++)t=t<<1,c==n-1?(c=0,m.push(r(t)),t=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}else{for(s=1,a=0;a<f;a++)t=t<<1|s,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete k[y]}else for(s=p[y],a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;b--,b==0&&(b=Math.pow(2,f),f++),p[A]=C++,y=String(S)}if(y!==""){if(Object.prototype.hasOwnProperty.call(k,y)){if(y.charCodeAt(0)<256){for(a=0;a<f;a++)t=t<<1,c==n-1?(c=0,m.push(r(t)),t=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}else{for(s=1,a=0;a<f;a++)t=t<<1|s,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete k[y]}else for(s=p[y],a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;b--,b==0&&(b=Math.pow(2,f),f++)}for(s=2,a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;for(;;)if(t=t<<1,c==n-1){m.push(r(t));break}else c++;return m.join("")},decompress:function(o){return o==null?"":o==""?null:v._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,r){var a=[],s=4,p=4,k=3,S="",A=[],y,b,C,f,m,t,c,l={val:r(0),position:n,index:1};for(y=0;y<3;y+=1)a[y]=y;for(C=0,m=Math.pow(2,2),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;switch(C){case 0:for(C=0,m=Math.pow(2,8),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;c=u(C);break;case 1:for(C=0,m=Math.pow(2,16),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;c=u(C);break;case 2:return""}for(a[3]=c,b=c,A.push(c);;){if(l.index>o)return"";for(C=0,m=Math.pow(2,k),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;switch(c=C){case 0:for(C=0,m=Math.pow(2,8),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;a[p++]=u(C),c=p-1,s--;break;case 1:for(C=0,m=Math.pow(2,16),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),C|=(f>0?1:0)*t,t<<=1;a[p++]=u(C),c=p-1,s--;break;case 2:return A.join("")}if(s==0&&(s=Math.pow(2,k),k++),a[c])S=a[c];else if(c===p)S=b+b.charAt(0);else return null;A.push(S),a[p++]=b+S.charAt(0),s--,b=S,s==0&&(s=Math.pow(2,k),k++)}}};return v}();e!=null?e.exports=i:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return i})})(Y);var Oe=Y.exports;Object.defineProperty(U,"__esModule",{value:!0});U.getParameters=void 0;var ze=Oe;function Re(e){return ze.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Fe(e){return Re(JSON.stringify(e))}U.getParameters=Fe;var ce=void 0,Ue=U;ce=Ue.getParameters;const je=e=>ce({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:Ke,isBinary:!1},"vite.config.ts":{content:qe,isBinary:!1},"index.html":{content:Ge,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:He,isBinary:!1},"src/main.ts":{content:Le,isBinary:!1},"src/idux.ts":{content:Je,isBinary:!1},"src/env.d.ts":{content:Ze,isBinary:!1}}}),Ge=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,Le=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,He=`
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
</style>`,Je=`
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

export default { install };`,Ze=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,Ke=`
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
}`,qe=`
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
})`,Xe=z({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:i}=O(Z);return{onClick:()=>{var h;const d=document.createElement("div");d.style.display="none";const g=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${je(e.code)}`;d.innerHTML=`<a href=${g} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(h=d.querySelector("a"))==null||h.click(),document.body.removeChild(d)},lang:i}}});function We(e,i,u,d,_,g){const h=q,v=X;return F(),re(v,{title:e.lang==="zh"?"在 CodeSandbox 中打开":"Open on CodeSandbox"},{default:D(()=>[w(h,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Ye=K(Xe,[["render",We]]),Qe=z({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:i}=O(Z);return{onClick:()=>{var g;const d=document.createElement("div");d.style.display="none";const _=eo(e.code);d.innerHTML=`<a href=${_} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(g=d.querySelector("a"))==null||g.click(),document.body.removeChild(d)},lang:i}}}),Ve=e=>btoa(unescape(encodeURIComponent(e))),eo=e=>{const u={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${Ve(JSON.stringify(u))}`};function oo(e,i,u,d,_,g){const h=q,v=X;return F(),re(v,{title:e.lang==="zh"?"在 Playground 中打开":"Open on Playground"},{default:D(()=>[w(h,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const to=K(Qe,[["render",oo]]);/**
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
 */class no{constructor(i){G(this,"_textarea");const u=this._textarea=document.createElement("textarea"),d=u.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",u.setAttribute("aria-hidden","true"),u.value=i,document.body.appendChild(u)}copy(){const i=this._textarea;let u=!1;try{if(i){const d=document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),u=document.execCommand("copy"),d&&d.focus()}}catch(d){_e.error("cdk/clipboard",d)}return u}destroy(){const i=this._textarea;i&&(i.parentNode&&i.parentNode.removeChild(i),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const P=class P{static getInstance(){return P.instance||(P.instance=new P),P.instance}constructor(){}copy(i){const u=this.beginCopy(i),d=u.copy();return u.destroy(),d}beginCopy(i){return new no(i)}};G(P,"instance",null);let J=P;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const so=()=>{const e=J.getInstance(),i=new Set;let u=!1,d=null;Se(()=>{d!==null&&clearTimeout(d),i.forEach(g=>g.destroy()),i.clear(),u=!0});function _(g,h=1){return new Promise(o=>{if(h>1){let n=h;const r=e.beginCopy(g);i.add(r);const a=()=>{const s=r.copy();!s&&--n&&!u?d=setTimeout(a,1):(d=null,i.delete(r),r.destroy(),o(s))};a()}else{const n=e.copy(g);o(n)}})}return{copy:_}},ao=z({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:i}=O(Z),u=$(()=>`${e.packageName}-${e.componentName}-${Ae(e.demoName)}`),d=$(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),_=W(!1),g=$(()=>i.value==="zh"?_.value?"收起代码":"显示代码":_.value?"Hide Code":"Show Code"),h=()=>{_.value=!_.value},{copy:v}=so(),{success:o}=Ee(),n=we(()=>{v(decodeURIComponent(e.code)).then(()=>{o(i.value==="zh"?"复制成功":"copy succeeded")})},300);return{id:u,lang:i,editHref:d,expanded:_,expandedTitle:g,onExpanded:h,onCopy:n}}});const ro=["id"],io={class:"global-code-box-title markdown"},lo=["href"],co={class:"global-code-box-description markdown"},uo={class:"global-code-box-content"},po={class:"global-code-box-content-border"},fo={class:"global-code-box-raw-code"},mo={class:"global-code-box-tools"},vo=["href"],yo={key:0,class:"global-code-box-highlight-code"};function go(e,i,u,d,_,g){const h=to,v=Ye,o=q,n=X,r=ne;return F(),ee("div",{id:e.id,class:"global-code-box"},[I("div",io,[I("h3",null,[I("span",null,$e(e.title),1),I("a",{class:"anchor",href:"#"+e.id},"#",8,lo)])]),I("div",co,[L(e.$slots,"description")]),I("div",uo,[I("div",po,[I("div",fo,[L(e.$slots,"rawCode"),I("div",mo,[w(r,null,{default:D(()=>[w(h,{code:e.code},null,8,["code"]),w(v,{code:e.code},null,8,["code"]),w(n,{title:e.lang==="zh"?"在 GitHub 上编辑此示例":"Edit this demo on GitHub"},{default:D(()=>[I("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[w(o,{name:"edit"})],8,vo)]),_:1},8,["title"]),w(n,{title:e.lang==="zh"?"复制代码":"Copy code"},{default:D(()=>[w(o,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),w(n,{title:e.expandedTitle},{default:D(()=>[w(o,{name:e.expanded?"unexpand":"expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),w(Be,{name:"ix-fade-down"},{default:D(()=>[e.expanded?(F(),ee("div",yo,[L(e.$slots,"highlightCode")])):Ie("",!0)]),_:3})])])],8,ro)}const ko=K(ao,[["render",go]]);export{Co as I,ko as _,so as a,_o as b,Ee as u};
