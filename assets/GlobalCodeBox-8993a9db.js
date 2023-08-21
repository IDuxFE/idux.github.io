var me=Object.defineProperty;var ve=(e,i,l)=>i in e?me(e,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[i]=l;var H=(e,i,l)=>(ve(e,typeof i!="symbol"?i+"":i,l),l);import{a4 as ye,a5 as he,a6 as ge,L as Z,a7 as xe,O as be,ɵ as ee,a8 as _e,r as te,a9 as ne,m as T,j as se,a as K,_ as X,A as W,aa as Y,ab as Ce}from"./index-1c0402c5.js";import{p as O,x as R,c as A,r as Q,z as w,a3 as q,d as ae,A as z,s as ke,y as Se,ax as $e,q as we,aa as j,ak as re,ac as P,a8 as Ae,N as Ie,_ as Be,ab as oe,ae as I,ah as Ee,ai as J,af as Pe,J as De}from"./vendor-155018f6.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ne=()=>{const e=O(he,null);return e===null?ye("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Te={control:{type:[String,Number,Object,Array],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},waveless:{type:Boolean,default:!1},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Me={control:{type:[String,Number,Object,Array],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}},Oe={sm:"xs",md:"sm",lg:"md"},le=R({name:"IxRadio",inheritAttrs:!1,props:Te,setup(e,{attrs:i,expose:l,slots:d}){const C=ge(),g=Z("common"),_=A(()=>`${g.prefixCls}-radio`),m=Z("radio"),{elementRef:t,focus:a,blur:r}=xe(),s=Q();l({focus:a,blur:r});const o=O(_e,null),p=O(ie,null),k=A(()=>{var b;return(b=i.name)!=null?b:p==null?void 0:p.props.name}),S=A(()=>{const{value:b}=e;return ae(b)?p?C:void 0:b}),$=A(()=>{var b;return(b=e.buttoned)!=null?b:p==null?void 0:p.props.buttoned}),v=A(()=>{var b,B,D;return(D=(B=(b=e.size)!=null?b:p==null?void 0:p.props.size)!=null?B:o==null?void 0:o.size.value)!=null?D:m.size}),h=A(()=>{var b;return(b=e.waveless)!=null?b:m.waveless}),x=A(()=>{var b,B;return(B=(b=e.mode)!=null?b:p==null?void 0:p.props.mode)!=null?B:"default"}),{isChecked:f,isDisabled:y,isFocused:n,handleChange:u,handleBlur:c,handleFocus:de}=Re(e,p,t,S,s,h),pe=A(()=>{const b=$.value,B=f.value,D=b&&B&&x.value==="primary",E=_.value,N=g.prefixCls,G={[E]:!0,[`${E}-checked`]:f.value,[`${E}-disabled`]:y.value,[`${E}-focused`]:n.value,[`${E}-${v.value}`]:b,[`${N}-button`]:b,[`${N}-button-default`]:b&&!D,[`${N}-button-primary`]:D,[`${N}-button-disabled`]:b&&y.value,[`${N}-button-${Oe[v.value]}`]:b};return z([G,i.class])});return()=>{const{autofocus:b,label:B}=e,{class:D,style:E,type:N,tabindex:G,...fe}=i,U=_.value,V=be(d.default,B);return w("label",{class:pe.value,style:E,role:"radio","aria-checked":f.value,"aria-disabled":y.value},[w("span",{class:`${U}-input`},[w("input",q({ref:t,type:"radio",class:`${U}-input-inner`,"aria-hidden":!0,autofocus:b,checked:f.value,disabled:y.value,name:k.value,value:S.value,onChange:u,onBlur:c,onFocus:de},fe),null),!$.value&&w("span",{class:`${U}-input-box`,tabindex:G},[!h.value&&w(ee,{ref:s},null)])]),$.value&&!h.value&&w(ee,{ref:s},null),V&&w("span",{class:`${U}-label`},[V])])}}}),Re=(e,i,l,d,C,g)=>{let _,m;const t=Q(!1);let a,r;const s=o=>{t.value=!0,T(e.onFocus,o)};if(i){const{accessor:o,props:p}=i;_=A(()=>o.value===d.value),m=A(()=>o.disabled||!!e.disabled),r=k=>{t.value=!1,o.markAsBlurred(),T(e.onBlur,k)},a=k=>{var S;if(l.value){const $=k.target.checked,v=d.value,h=o.value;o.setValue(v),l.value.checked=!1,T(e.onChange,$,!$),T(p.onChange,v,h),!g.value&&((S=C.value)==null||S.play())}}}else{const{accessor:o,control:p}=te({valueKey:"checked"});ne(p),_=A(()=>!!o.value),m=A(()=>o.disabled),r=k=>{t.value=!1,o.markAsBlurred(),T(e.onBlur,k)},a=k=>{var S;if(l.value){const $=k.target.checked;o.setValue($),l.value.checked=!1,T(e.onChange,$,!$),!g.value&&((S=C.value)==null||S.play())}}}return{isChecked:_,isDisabled:m,isFocused:t,handleChange:a,handleBlur:r,handleFocus:s}},Ue=R({name:"IxRadioGroup",inheritAttrs:!1,props:Me,setup(e,{attrs:i,slots:l}){const d=Z("common"),C=A(()=>`${d.prefixCls}-radio-group`),{accessor:g,control:_}=te();ne(_),we(ie,{props:e,accessor:g});const m=A(()=>{var s;return(s=e.gap)!=null?s:e.buttoned?0:8}),t=ke(),a=()=>{const s=t.value;if(!s)return;const o=`.${d.prefixCls}-radio-checked`,p=s.querySelector(o);p&&(console.log(p.offsetLeft),s.style.setProperty("--ix-radio-group-fieldset-arrow-offset",`${p.offsetLeft}px`))};Se(()=>a()),$e(()=>a());const r=A(()=>{const{buttoned:s}=e,o=m.value,p=C.value;return z({[p]:!0,[`${d.prefixCls}-button-group`]:s,[`${d.prefixCls}-button-group-compact`]:s&&(!o||o==="0")})});return()=>{const{dataSource:s}=e,o=C.value,{class:p,style:k,...S}=i;let $;s?$=s.map(h=>{const{key:x,value:f}=h;return w(le,q(h,{key:x!=null?x:f,value:f!=null?f:x}),null)}):$=l.default?l.default():void 0;const v=w(se,q({class:l.fieldset?r.value:z([r.value,p]),style:l.fieldset?void 0:k,size:m.value},S),{default:()=>[$]});if(l.fieldset){const h=g.value;return w("div",{ref:t,class:`${o}-wrapper`,style:k},[v,w("div",{class:z([`${o}-fieldset`,ae(h)?`${o}-fieldset-hidden`:""])},[l.fieldset({value:h})])])}return v}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ko=le,So=Ue;var L={},ce={exports:{}};(function(e){var i=function(){var l=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g={};function _(t,a){if(!g[t]){g[t]={};for(var r=0;r<t.length;r++)g[t][t.charAt(r)]=r}return g[t][a]}var m={compressToBase64:function(t){if(t==null)return"";var a=m._compress(t,6,function(r){return d.charAt(r)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:m._decompress(t.length,32,function(a){return _(d,t.charAt(a))})},compressToUTF16:function(t){return t==null?"":m._compress(t,15,function(a){return l(a+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:m._decompress(t.length,16384,function(a){return t.charCodeAt(a)-32})},compressToUint8Array:function(t){for(var a=m.compress(t),r=new Uint8Array(a.length*2),s=0,o=a.length;s<o;s++){var p=a.charCodeAt(s);r[s*2]=p>>>8,r[s*2+1]=p%256}return r},decompressFromUint8Array:function(t){if(t==null)return m.decompress(t);for(var a=new Array(t.length/2),r=0,s=a.length;r<s;r++)a[r]=t[r*2]*256+t[r*2+1];var o=[];return a.forEach(function(p){o.push(l(p))}),m.decompress(o.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":m._compress(t,6,function(a){return C.charAt(a)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),m._decompress(t.length,32,function(a){return _(C,t.charAt(a))}))},compress:function(t){return m._compress(t,16,function(a){return l(a)})},_compress:function(t,a,r){if(t==null)return"";var s,o,p={},k={},S="",$="",v="",h=2,x=3,f=2,y=[],n=0,u=0,c;for(c=0;c<t.length;c+=1)if(S=t.charAt(c),Object.prototype.hasOwnProperty.call(p,S)||(p[S]=x++,k[S]=!0),$=v+S,Object.prototype.hasOwnProperty.call(p,$))v=$;else{if(Object.prototype.hasOwnProperty.call(k,v)){if(v.charCodeAt(0)<256){for(s=0;s<f;s++)n=n<<1,u==a-1?(u=0,y.push(r(n)),n=0):u++;for(o=v.charCodeAt(0),s=0;s<8;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1}else{for(o=1,s=0;s<f;s++)n=n<<1|o,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=0;for(o=v.charCodeAt(0),s=0;s<16;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1}h--,h==0&&(h=Math.pow(2,f),f++),delete k[v]}else for(o=p[v],s=0;s<f;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1;h--,h==0&&(h=Math.pow(2,f),f++),p[$]=x++,v=String(S)}if(v!==""){if(Object.prototype.hasOwnProperty.call(k,v)){if(v.charCodeAt(0)<256){for(s=0;s<f;s++)n=n<<1,u==a-1?(u=0,y.push(r(n)),n=0):u++;for(o=v.charCodeAt(0),s=0;s<8;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1}else{for(o=1,s=0;s<f;s++)n=n<<1|o,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=0;for(o=v.charCodeAt(0),s=0;s<16;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1}h--,h==0&&(h=Math.pow(2,f),f++),delete k[v]}else for(o=p[v],s=0;s<f;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1;h--,h==0&&(h=Math.pow(2,f),f++)}for(o=2,s=0;s<f;s++)n=n<<1|o&1,u==a-1?(u=0,y.push(r(n)),n=0):u++,o=o>>1;for(;;)if(n=n<<1,u==a-1){y.push(r(n));break}else u++;return y.join("")},decompress:function(t){return t==null?"":t==""?null:m._decompress(t.length,32768,function(a){return t.charCodeAt(a)})},_decompress:function(t,a,r){var s=[],o=4,p=4,k=3,S="",$=[],v,h,x,f,y,n,u,c={val:r(0),position:a,index:1};for(v=0;v<3;v+=1)s[v]=v;for(x=0,y=Math.pow(2,2),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;switch(x){case 0:for(x=0,y=Math.pow(2,8),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;u=l(x);break;case 1:for(x=0,y=Math.pow(2,16),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;u=l(x);break;case 2:return""}for(s[3]=u,h=u,$.push(u);;){if(c.index>t)return"";for(x=0,y=Math.pow(2,k),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;switch(u=x){case 0:for(x=0,y=Math.pow(2,8),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;s[p++]=l(x),u=p-1,o--;break;case 1:for(x=0,y=Math.pow(2,16),n=1;n!=y;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=a,c.val=r(c.index++)),x|=(f>0?1:0)*n,n<<=1;s[p++]=l(x),u=p-1,o--;break;case 2:return $.join("")}if(o==0&&(o=Math.pow(2,k),k++),s[u])S=s[u];else if(u===p)S=h+h.charAt(0);else return null;$.push(S),s[p++]=h+S.charAt(0),o--,h=S,o==0&&(o=Math.pow(2,k),k++)}}};return m}();e!=null?e.exports=i:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return i})})(ce);Object.defineProperty(L,"__esModule",{value:!0});L.getParameters=void 0;var ze=ce.exports;function Fe(e){return ze.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function je(e){return Fe(JSON.stringify(e))}L.getParameters=je;var ue=void 0,Le=L;ue=Le.getParameters;const Ge=e=>ue({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:Xe,isBinary:!1},"vite.config.ts":{content:We,isBinary:!1},"index.html":{content:He,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:Ze,isBinary:!1},"src/main.ts":{content:Je,isBinary:!1},"src/idux.ts":{content:qe,isBinary:!1},"src/env.d.ts":{content:Ke,isBinary:!1}}}),He=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,Je=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,Ze=`
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
</style>`,qe=`
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

export default { install };`,Ke=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,Xe=`
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
}`,We=`
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
})`,Ye=R({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:i}=O(K);return{onClick:()=>{var _;const d=document.createElement("div");d.style.display="none";const g=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${Ge(e.code)}`;d.innerHTML=`<a href=${g} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(_=d.querySelector("a"))==null||_.click(),document.body.removeChild(d)},lang:i}}});function Qe(e,i,l,d,C,g){const _=W,m=Y;return j(),re(m,{title:e.lang==="zh"?"在 CodeSandbox 中打开":"Open on CodeSandbox"},{default:P(()=>[w(_,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Ve=X(Ye,[["render",Qe]]),eo=R({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:i}=O(K);return{onClick:()=>{var g;const d=document.createElement("div");d.style.display="none";const C=to(e.code);d.innerHTML=`<a href=${C} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(g=d.querySelector("a"))==null||g.click(),document.body.removeChild(d)},lang:i}}}),oo=e=>btoa(unescape(encodeURIComponent(e))),to=e=>{const l={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${oo(JSON.stringify(l))}`};function no(e,i,l,d,C,g){const _=W,m=Y;return j(),re(m,{title:e.lang==="zh"?"在 Playground 中打开":"Open on Playground"},{default:P(()=>[w(_,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const so=X(eo,[["render",no]]);/**
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
 */class ao{constructor(i){H(this,"_textarea");const l=this._textarea=document.createElement("textarea"),d=l.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",l.setAttribute("aria-hidden","true"),l.value=i,document.body.appendChild(l)}copy(){const i=this._textarea;let l=!1;try{if(i){const d=document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),l=document.execCommand("copy"),d&&d.focus()}}catch(d){Ce.error("cdk/clipboard",d)}return l}destroy(){const i=this._textarea;i&&(i.parentNode&&i.parentNode.removeChild(i),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=class{static getInstance(){return M.instance||(M.instance=new M),M.instance}constructor(){}copy(i){const l=this.beginCopy(i),d=l.copy();return l.destroy(),d}beginCopy(i){return new ao(i)}};let F=M;H(F,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ro=()=>{const e=F.getInstance(),i=new Set;let l=!1,d=null;Ae(()=>{d!==null&&clearTimeout(d),i.forEach(g=>g.destroy()),i.clear(),l=!0});function C(g,_=1){return new Promise(t=>{if(_>1){let a=_;const r=e.beginCopy(g);i.add(r);const s=()=>{const o=r.copy();!o&&--a&&!l?d=setTimeout(s,1):(d=null,i.delete(r),r.destroy(),t(o))};s()}else{const a=e.copy(g);t(a)}})}return{copy:C}},io=R({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:i}=O(K),l=A(()=>`${e.packageName}-${e.componentName}-${Be(e.demoName)}`),d=A(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),C=Q(!1),g=A(()=>i.value==="zh"?C.value?"收起代码":"显示代码":C.value?"Hide Code":"Show Code"),_=()=>{C.value=!C.value},{copy:m}=ro(),{success:t}=Ne(),a=Ie(()=>{m(decodeURIComponent(e.code)).then(()=>{t(i.value==="zh"?"复制成功":"copy succeeded")})},300);return{id:l,lang:i,editHref:d,expanded:C,expandedTitle:g,onExpanded:_,onCopy:a}}});const lo=["id"],co={class:"global-code-box-title markdown"},uo=["href"],po={class:"global-code-box-description markdown"},fo={class:"global-code-box-content"},mo={class:"global-code-box-content-border"},vo={class:"global-code-box-raw-code"},yo={class:"global-code-box-tools"},ho=["href"],go={key:0,class:"global-code-box-highlight-code"};function xo(e,i,l,d,C,g){const _=so,m=Ve,t=W,a=Y,r=se;return j(),oe("div",{id:e.id,class:"global-code-box"},[I("div",co,[I("h3",null,[I("span",null,Ee(e.title),1),I("a",{class:"anchor",href:"#"+e.id},"#",8,uo)])]),I("div",po,[J(e.$slots,"description")]),I("div",fo,[I("div",mo,[I("div",vo,[J(e.$slots,"rawCode"),I("div",yo,[w(r,null,{default:P(()=>[w(_,{code:e.code},null,8,["code"]),w(m,{code:e.code},null,8,["code"]),w(a,{title:e.lang==="zh"?"在 GitHub 上编辑此示例":"Edit this demo on GitHub"},{default:P(()=>[I("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[w(t,{name:"edit"})],8,ho)]),_:1},8,["title"]),w(a,{title:e.lang==="zh"?"复制代码":"Copy code"},{default:P(()=>[w(t,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),w(a,{title:e.expandedTitle},{default:P(()=>[w(t,{name:e.expanded?"custom:collapse":"custom:expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),w(De,{name:"ix-fade-down"},{default:P(()=>[e.expanded?(j(),oe("div",go,[J(e.$slots,"highlightCode")])):Pe("",!0)]),_:3})])])],8,lo)}const $o=X(io,[["render",xo]]);export{So as I,$o as _,ro as a,ko as b,Ne as u};
