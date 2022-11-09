var pe=Object.defineProperty;var fe=(e,i,d)=>i in e?pe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[i]=d;var j=(e,i,d)=>(fe(e,typeof i!="symbol"?i+"":i,d),d);import{t as me,m as ve,l as ye,u as z,n as he,p as W,q as Y,j as P,F as ge,r as Q,v as xe,a as H,_ as G,w as L,x as J,L as _e}from"./index.c56724f3.js";import{i as N,v as F,e as S,y as k,a1 as V,b as ee,k as oe,z as te,p as be,a8 as O,ah as ne,aa as B,aj as Ce,N as ke,Z as Ae,a9 as X,ab as I,ae as we,af as R,ac as Se,H as Ee}from"./vendor.32cbbd74.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $e=()=>{const e=N(ve,null);return e===null?me("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const se=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ie={control:{type:[String,Number,Object],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Be={control:{type:[String,Number,Object],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},vertical:{type:Boolean,default:!1},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}},ae=F({name:"IxRadio",inheritAttrs:!1,props:Ie,setup(e,{attrs:i,expose:d,slots:u}){const x=ye(),y=z("common"),h=S(()=>`${y.prefixCls}-radio`),m=z("radio"),{elementRef:o,focus:s,blur:a}=he();d({focus:s,blur:a});const r=N(ge,null),t=N(se,null),p=S(()=>{var b;return(b=i.name)!=null?b:t==null?void 0:t.props.name}),A=S(()=>{const{value:b}=e;return oe(b)?t?x:void 0:b}),w=S(()=>{var b;return(b=e.buttoned)!=null?b:t==null?void 0:t.props.buttoned}),$=S(()=>{var b,E,D;return(D=(E=(b=e.size)!=null?b:t==null?void 0:t.props.size)!=null?E:r==null?void 0:r.size.value)!=null?D:m.size}),_=S(()=>{var b,E;return(E=(b=e.mode)!=null?b:t==null?void 0:t.props.mode)!=null?E:"default"}),{isChecked:C,isDisabled:g,isFocused:f,handleChange:v,handleBlur:n,handleFocus:l}=De(e,t,o,A),c=S(()=>{const b=w.value,E=h.value,D={[E]:!0,[`${E}-button`]:b,[`${E}-checked`]:C.value,[`${E}-disabled`]:g.value,[`${E}-focused`]:f.value,[`${E}-${_.value}`]:b,[`${E}-${$.value}`]:b};return te([D,i.class])});return()=>{var q,K;const b=h.value,{autofocus:E,label:D}=e,Z=(K=(q=u.default)==null?void 0:q.call(u))!=null?K:D,ce=Z&&k("span",{class:`${b}-label`},[Z]),{class:mo,style:le,type:vo,tabindex:ue,...de}=i;return k("label",{class:c.value,style:le,role:"radio","aria-checked":C.value,"aria-disabled":g.value},[k("span",{class:`${b}-input`},[k("input",V({ref:o,type:"radio",class:`${b}-input-inner`,"aria-hidden":!0,autofocus:E,checked:C.value,disabled:g.value,name:p.value,value:A.value,onChange:v,onBlur:n,onFocus:l},de),null),w.value?null:k("span",{class:`${b}-input-box`,tabindex:ue},null)]),ce])}}}),De=(e,i,d,u)=>{let x,y;const h=ee(!1);let m,o;const s=a=>{h.value=!0,P(e.onFocus,a)};if(i){const{accessor:a,props:r}=i;x=S(()=>a.value===u.value),y=S(()=>a.disabled||!!e.disabled),o=t=>{h.value=!1,a.markAsBlurred(),P(e.onBlur,t)},m=t=>{if(d.value){const p=t.target.checked,A=u.value,w=a.value;a.setValue(A),d.value.checked=!1,P(e.onChange,p,!p),P(r.onChange,A,w)}}}else{const{accessor:a,control:r}=W({valueKey:"checked"});Y(r),x=S(()=>!!a.value),y=S(()=>a.disabled),o=t=>{h.value=!1,a.markAsBlurred(),P(e.onBlur,t)},m=t=>{if(d.value){const p=t.target.checked;a.setValue(p),d.value.checked=!1,P(e.onChange,p,!p)}}}return{isChecked:x,isDisabled:y,isFocused:h,handleChange:m,handleBlur:o,handleFocus:s}},Pe=F({name:"IxRadioGroup",props:Be,setup(e,{slots:i}){const{accessor:d,control:u}=W();Y(u),be(se,{props:e,accessor:d});const x=z("common"),y=S(()=>`${x.prefixCls}-radio-group`),h=S(()=>{const{gap:o}=e,s=y.value;return te({[s]:!0,[`${s}-with-gap`]:!oe(o)})}),m=S(()=>{const{gap:o}=e;return o!=null?`gap: ${xe(o)};`:void 0});return()=>{const{dataSource:o,vertical:s}=e;let a;return o?a=o.map(r=>{const{key:t,value:p}=r;return k(ae,V(r,{key:t!=null?t:p,value:p!=null?p:t}),null)}):a=i.default?i.default():void 0,k("div",{class:h.value,style:m.value},[s?k(Q,{vertical:!0},{default:()=>[a]}):a])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const xo=ae,_o=Pe;var U={},re={exports:{}};(function(e){var i=function(){var d=String.fromCharCode,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",y={};function h(o,s){if(!y[o]){y[o]={};for(var a=0;a<o.length;a++)y[o][o.charAt(a)]=a}return y[o][s]}var m={compressToBase64:function(o){if(o==null)return"";var s=m._compress(o,6,function(a){return u.charAt(a)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:m._decompress(o.length,32,function(s){return h(u,o.charAt(s))})},compressToUTF16:function(o){return o==null?"":m._compress(o,15,function(s){return d(s+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:m._decompress(o.length,16384,function(s){return o.charCodeAt(s)-32})},compressToUint8Array:function(o){for(var s=m.compress(o),a=new Uint8Array(s.length*2),r=0,t=s.length;r<t;r++){var p=s.charCodeAt(r);a[r*2]=p>>>8,a[r*2+1]=p%256}return a},decompressFromUint8Array:function(o){if(o==null)return m.decompress(o);for(var s=new Array(o.length/2),a=0,r=s.length;a<r;a++)s[a]=o[a*2]*256+o[a*2+1];var t=[];return s.forEach(function(p){t.push(d(p))}),m.decompress(t.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":m._compress(o,6,function(s){return x.charAt(s)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),m._decompress(o.length,32,function(s){return h(x,o.charAt(s))}))},compress:function(o){return m._compress(o,16,function(s){return d(s)})},_compress:function(o,s,a){if(o==null)return"";var r,t,p={},A={},w="",$="",_="",C=2,g=3,f=2,v=[],n=0,l=0,c;for(c=0;c<o.length;c+=1)if(w=o.charAt(c),Object.prototype.hasOwnProperty.call(p,w)||(p[w]=g++,A[w]=!0),$=_+w,Object.prototype.hasOwnProperty.call(p,$))_=$;else{if(Object.prototype.hasOwnProperty.call(A,_)){if(_.charCodeAt(0)<256){for(r=0;r<f;r++)n=n<<1,l==s-1?(l=0,v.push(a(n)),n=0):l++;for(t=_.charCodeAt(0),r=0;r<8;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}else{for(t=1,r=0;r<f;r++)n=n<<1|t,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=0;for(t=_.charCodeAt(0),r=0;r<16;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}C--,C==0&&(C=Math.pow(2,f),f++),delete A[_]}else for(t=p[_],r=0;r<f;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;C--,C==0&&(C=Math.pow(2,f),f++),p[$]=g++,_=String(w)}if(_!==""){if(Object.prototype.hasOwnProperty.call(A,_)){if(_.charCodeAt(0)<256){for(r=0;r<f;r++)n=n<<1,l==s-1?(l=0,v.push(a(n)),n=0):l++;for(t=_.charCodeAt(0),r=0;r<8;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}else{for(t=1,r=0;r<f;r++)n=n<<1|t,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=0;for(t=_.charCodeAt(0),r=0;r<16;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}C--,C==0&&(C=Math.pow(2,f),f++),delete A[_]}else for(t=p[_],r=0;r<f;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;C--,C==0&&(C=Math.pow(2,f),f++)}for(t=2,r=0;r<f;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;for(;;)if(n=n<<1,l==s-1){v.push(a(n));break}else l++;return v.join("")},decompress:function(o){return o==null?"":o==""?null:m._decompress(o.length,32768,function(s){return o.charCodeAt(s)})},_decompress:function(o,s,a){var r=[],t=4,p=4,A=3,w="",$=[],_,C,g,f,v,n,l,c={val:a(0),position:s,index:1};for(_=0;_<3;_+=1)r[_]=_;for(g=0,v=Math.pow(2,2),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;switch(g){case 0:for(g=0,v=Math.pow(2,8),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;l=d(g);break;case 1:for(g=0,v=Math.pow(2,16),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;l=d(g);break;case 2:return""}for(r[3]=l,C=l,$.push(l);;){if(c.index>o)return"";for(g=0,v=Math.pow(2,A),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;switch(l=g){case 0:for(g=0,v=Math.pow(2,8),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;r[p++]=d(g),l=p-1,t--;break;case 1:for(g=0,v=Math.pow(2,16),n=1;n!=v;)f=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(f>0?1:0)*n,n<<=1;r[p++]=d(g),l=p-1,t--;break;case 2:return $.join("")}if(t==0&&(t=Math.pow(2,A),A++),r[l])w=r[l];else if(l===p)w=C+C.charAt(0);else return null;$.push(w),r[p++]=C+w.charAt(0),t--,C=w,t==0&&(t=Math.pow(2,A),A++)}}};return m}();e!=null&&(e.exports=i)})(re);Object.defineProperty(U,"__esModule",{value:!0});U.getParameters=void 0;var Te=re.exports;function Ne(e){return Te.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Fe(e){return Ne(JSON.stringify(e))}U.getParameters=Fe;var ie=void 0,Me=U;ie=Me.getParameters;const Oe=e=>ie({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:Ge,isBinary:!1},"vite.config.ts":{content:Le,isBinary:!1},"index.html":{content:Ue,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:Re,isBinary:!1},"src/main.ts":{content:je,isBinary:!1},"src/idux.ts":{content:ze,isBinary:!1},"src/env.d.ts":{content:He,isBinary:!1}}}),Ue=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,je=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,Re=`
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
</style>`,ze=`
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

export default { install };`,He=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,Ge=`
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
}`,Le=`
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
})`,Je=F({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:i}=N(H);return{onClick:()=>{var h;const u=document.createElement("div");u.style.display="none";const y=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${Oe(e.code)}`;u.innerHTML=`<a href=${y} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(h=u.querySelector("a"))==null||h.click(),document.body.removeChild(u)},lang:i}}});function Ze(e,i,d,u,x,y){const h=L,m=J;return O(),ne(m,{title:e.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:B(()=>[k(h,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const qe=G(Je,[["render",Ze]]),Ke=F({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:i}=N(H);return{onClick:()=>{var y;const u=document.createElement("div");u.style.display="none";const x=We(e.code);u.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(u),(y=u.querySelector("a"))==null||y.click(),document.body.removeChild(u)},lang:i}}}),Xe=e=>btoa(unescape(encodeURIComponent(e))),We=e=>{const d={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${Xe(JSON.stringify(d))}`};function Ye(e,i,d,u,x,y){const h=L,m=J;return O(),ne(m,{title:e.lang==="zh"?"\u5728 Playground \u4E2D\u6253\u5F00":"Open on Playground"},{default:B(()=>[k(h,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Qe=G(Ke,[["render",Ye]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class Ve{constructor(i){j(this,"_textarea");const d=this._textarea=document.createElement("textarea"),u=d.style;u.opacity="0",u.position="absolute",u.left=u.top="-999em",d.setAttribute("aria-hidden","true"),d.value=i,document.body.appendChild(d)}copy(){const i=this._textarea;let d=!1;try{if(i){const u=document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),d=document.execCommand("copy"),u&&u.focus()}}catch(u){_e.error("cdk/clipboard",u)}return d}destroy(){const i=this._textarea;i&&(i.parentNode&&i.parentNode.removeChild(i),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const T=class{static getInstance(){return T.instance||(T.instance=new T),T.instance}constructor(){}copy(i){const d=this.beginCopy(i),u=d.copy();return d.destroy(),u}beginCopy(i){return new Ve(i)}};let M=T;j(M,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const eo=()=>{const e=M.getInstance(),i=new Set;let d=!1,u=null;Ce(()=>{u!==null&&clearTimeout(u),i.forEach(y=>y.destroy()),i.clear(),d=!0});function x(y,h=1){return new Promise(o=>{if(h>1){let s=h;const a=e.beginCopy(y);i.add(a);const r=()=>{const t=a.copy();!t&&--s&&!d?u=setTimeout(r,1):(u=null,i.delete(a),a.destroy(),o(t))};r()}else{const s=e.copy(y);o(s)}})}return{copy:x}},oo=F({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:i}=N(H),d=S(()=>`${e.packageName}-${e.componentName}-${Ae(e.demoName)}`),u=S(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),x=ee(!1),y=S(()=>i.value==="zh"?x.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":x.value?"Hide Code":"Show Code"),h=()=>{x.value=!x.value},{copy:m}=eo(),{success:o}=$e(),s=ke(()=>{m(decodeURIComponent(e.code)).then(()=>{o(i.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:d,lang:i,editHref:u,expanded:x,expandedTitle:y,onExpanded:h,onCopy:s}}});const to=["id"],no={class:"global-code-box-title markdown"},so=["href"],ao={class:"global-code-box-description markdown"},ro={class:"global-code-box-content"},io={class:"global-code-box-content-border"},co={class:"global-code-box-raw-code"},lo={class:"global-code-box-tools"},uo=["href"],po={key:0,class:"global-code-box-highlight-code"};function fo(e,i,d,u,x,y){const h=Qe,m=qe,o=L,s=J,a=Q;return O(),X("div",{id:e.id,class:"global-code-box"},[I("div",no,[I("h3",null,[I("span",null,we(e.title),1),I("a",{class:"anchor",href:"#"+e.id},"#",8,so)])]),I("div",ao,[R(e.$slots,"description")]),I("div",ro,[I("div",io,[I("div",co,[R(e.$slots,"rawCode"),I("div",lo,[k(a,null,{default:B(()=>[k(h,{code:e.code},null,8,["code"]),k(m,{code:e.code},null,8,["code"]),k(s,{title:e.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:B(()=>[I("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[k(o,{name:"edit"})],8,uo)]),_:1},8,["title"]),k(s,{title:e.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:B(()=>[k(o,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),k(s,{title:e.expandedTitle},{default:B(()=>[k(o,{name:e.expanded?"unexpand":"expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k(Ee,{name:"ix-fade-down"},{default:B(()=>[e.expanded?(O(),X("div",po,[R(e.$slots,"highlightCode")])):Se("",!0)]),_:3})])])],8,to)}const bo=G(oo,[["render",fo]]);export{_o as I,bo as _,eo as a,xo as b,$e as u};
