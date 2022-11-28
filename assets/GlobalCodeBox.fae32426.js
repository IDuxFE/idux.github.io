var ue=Object.defineProperty;var de=(e,i,u)=>i in e?ue(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u;var H=(e,i,u)=>(de(e,typeof i!="symbol"?i+"":i,u),u);import{t as pe,M as fe,l as me,u as J,m as ve,n as ye,p as W,q as V,j as T,F as he,r as ee,a as K,_ as Z,v as q,w as X,L as ge}from"./index.f300137b.js";import{i as F,v as O,e as E,y as k,a1 as oe,b as te,k as xe,z as ne,p as be,a8 as U,ah as se,aa as D,aj as _e,N as Ce,Z as ke,a9 as Q,ab as w,ae as Ae,af as L,ac as Se,I as Ee}from"./vendor.6b73f509.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const $e=()=>{const e=F(fe,null);return e===null?pe("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ae=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const we={control:{type:[String,Number,Object],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Ie={control:{type:[String,Number,Object],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}},Be={sm:"xs",md:"sm",lg:"md"},re=O({name:"IxRadio",inheritAttrs:!1,props:we,setup(e,{attrs:i,expose:u,slots:d}){const x=me(),m=J("common"),y=E(()=>`${m.prefixCls}-radio`),f=J("radio"),{elementRef:o,focus:s,blur:a}=ve();u({focus:s,blur:a});const r=F(he,null),t=F(ae,null),h=E(()=>{var C;return(C=i.name)!=null?C:t==null?void 0:t.props.name}),A=E(()=>{const{value:C}=e;return xe(C)?t?x:void 0:C}),S=E(()=>{var C;return(C=e.buttoned)!=null?C:t==null?void 0:t.props.buttoned}),$=E(()=>{var C,I,P;return(P=(I=(C=e.size)!=null?C:t==null?void 0:t.props.size)!=null?I:r==null?void 0:r.size.value)!=null?P:f.size}),b=E(()=>{var C,I;return(I=(C=e.mode)!=null?C:t==null?void 0:t.props.mode)!=null?I:"default"}),{isChecked:_,isDisabled:g,isFocused:p,handleChange:v,handleBlur:n,handleFocus:l}=De(e,t,o,A),c=E(()=>{const C=S.value,I=_.value,P=C&&I&&b.value==="primary",B=y.value,N=m.prefixCls,G={[B]:!0,[`${B}-checked`]:_.value,[`${B}-disabled`]:g.value,[`${B}-focused`]:p.value,[`${B}-${$.value}`]:C,[`${N}-button`]:C,[`${N}-button-default`]:C&&!P,[`${N}-button-primary`]:P,[`${N}-button-disabled`]:C&&g.value,[`${N}-button-${Be[$.value]}`]:C};return ne([G,i.class])});return()=>{const{autofocus:C,label:I}=e,{class:P,style:B,type:N,tabindex:G,...le}=i,R=y.value,Y=ye(d.default,I);return k("label",{class:c.value,style:B,role:"radio","aria-checked":_.value,"aria-disabled":g.value},[k("span",{class:`${R}-input`},[k("input",oe({ref:o,type:"radio",class:`${R}-input-inner`,"aria-hidden":!0,autofocus:C,checked:_.value,disabled:g.value,name:h.value,value:A.value,onChange:v,onBlur:n,onFocus:l},le),null),!S.value&&k("span",{class:`${R}-input-box`,tabindex:G},null)]),Y&&k("span",{class:`${R}-label`},[Y])])}}}),De=(e,i,u,d)=>{let x,m;const y=te(!1);let f,o;const s=a=>{y.value=!0,T(e.onFocus,a)};if(i){const{accessor:a,props:r}=i;x=E(()=>a.value===d.value),m=E(()=>a.disabled||!!e.disabled),o=t=>{y.value=!1,a.markAsBlurred(),T(e.onBlur,t)},f=t=>{if(u.value){const h=t.target.checked,A=d.value,S=a.value;a.setValue(A),u.value.checked=!1,T(e.onChange,h,!h),T(r.onChange,A,S)}}}else{const{accessor:a,control:r}=W({valueKey:"checked"});V(r),x=E(()=>!!a.value),m=E(()=>a.disabled),o=t=>{y.value=!1,a.markAsBlurred(),T(e.onBlur,t)},f=t=>{if(u.value){const h=t.target.checked;a.setValue(h),u.value.checked=!1,T(e.onChange,h,!h)}}}return{isChecked:x,isDisabled:m,isFocused:y,handleChange:f,handleBlur:o,handleFocus:s}},Pe=O({name:"IxRadioGroup",props:Ie,setup(e,{slots:i}){const u=J("common"),d=E(()=>`${u.prefixCls}-radio-group`),{accessor:x,control:m}=W();V(m),be(ae,{props:e,accessor:x});const y=E(()=>{var o;return(o=e.gap)!=null?o:e.buttoned?0:8}),f=E(()=>{const{buttoned:o}=e,s=y.value,a=d.value;return ne({[a]:!0,[`${u.prefixCls}-button-group`]:o,[`${u.prefixCls}-button-group-compact`]:o&&(!s||s==="0")})});return()=>{const{dataSource:o}=e;let s;return o?s=o.map(a=>{const{key:r,value:t}=a;return k(re,oe(a,{key:r!=null?r:t,value:t!=null?t:r}),null)}):s=i.default?i.default():void 0,k(ee,{class:f.value,size:y.value},{default:()=>[s]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ho=re,go=Pe;var j={},ie={exports:{}};(function(e){var i=function(){var u=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",m={};function y(o,s){if(!m[o]){m[o]={};for(var a=0;a<o.length;a++)m[o][o.charAt(a)]=a}return m[o][s]}var f={compressToBase64:function(o){if(o==null)return"";var s=f._compress(o,6,function(a){return d.charAt(a)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(s){return y(d,o.charAt(s))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(s){return u(s+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(s){return o.charCodeAt(s)-32})},compressToUint8Array:function(o){for(var s=f.compress(o),a=new Uint8Array(s.length*2),r=0,t=s.length;r<t;r++){var h=s.charCodeAt(r);a[r*2]=h>>>8,a[r*2+1]=h%256}return a},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var s=new Array(o.length/2),a=0,r=s.length;a<r;a++)s[a]=o[a*2]*256+o[a*2+1];var t=[];return s.forEach(function(h){t.push(u(h))}),f.decompress(t.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(s){return x.charAt(s)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(s){return y(x,o.charAt(s))}))},compress:function(o){return f._compress(o,16,function(s){return u(s)})},_compress:function(o,s,a){if(o==null)return"";var r,t,h={},A={},S="",$="",b="",_=2,g=3,p=2,v=[],n=0,l=0,c;for(c=0;c<o.length;c+=1)if(S=o.charAt(c),Object.prototype.hasOwnProperty.call(h,S)||(h[S]=g++,A[S]=!0),$=b+S,Object.prototype.hasOwnProperty.call(h,$))b=$;else{if(Object.prototype.hasOwnProperty.call(A,b)){if(b.charCodeAt(0)<256){for(r=0;r<p;r++)n=n<<1,l==s-1?(l=0,v.push(a(n)),n=0):l++;for(t=b.charCodeAt(0),r=0;r<8;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}else{for(t=1,r=0;r<p;r++)n=n<<1|t,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=0;for(t=b.charCodeAt(0),r=0;r<16;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}_--,_==0&&(_=Math.pow(2,p),p++),delete A[b]}else for(t=h[b],r=0;r<p;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;_--,_==0&&(_=Math.pow(2,p),p++),h[$]=g++,b=String(S)}if(b!==""){if(Object.prototype.hasOwnProperty.call(A,b)){if(b.charCodeAt(0)<256){for(r=0;r<p;r++)n=n<<1,l==s-1?(l=0,v.push(a(n)),n=0):l++;for(t=b.charCodeAt(0),r=0;r<8;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}else{for(t=1,r=0;r<p;r++)n=n<<1|t,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=0;for(t=b.charCodeAt(0),r=0;r<16;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1}_--,_==0&&(_=Math.pow(2,p),p++),delete A[b]}else for(t=h[b],r=0;r<p;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;_--,_==0&&(_=Math.pow(2,p),p++)}for(t=2,r=0;r<p;r++)n=n<<1|t&1,l==s-1?(l=0,v.push(a(n)),n=0):l++,t=t>>1;for(;;)if(n=n<<1,l==s-1){v.push(a(n));break}else l++;return v.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(s){return o.charCodeAt(s)})},_decompress:function(o,s,a){var r=[],t=4,h=4,A=3,S="",$=[],b,_,g,p,v,n,l,c={val:a(0),position:s,index:1};for(b=0;b<3;b+=1)r[b]=b;for(g=0,v=Math.pow(2,2),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;switch(g){case 0:for(g=0,v=Math.pow(2,8),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;l=u(g);break;case 1:for(g=0,v=Math.pow(2,16),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;l=u(g);break;case 2:return""}for(r[3]=l,_=l,$.push(l);;){if(c.index>o)return"";for(g=0,v=Math.pow(2,A),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;switch(l=g){case 0:for(g=0,v=Math.pow(2,8),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;r[h++]=u(g),l=h-1,t--;break;case 1:for(g=0,v=Math.pow(2,16),n=1;n!=v;)p=c.val&c.position,c.position>>=1,c.position==0&&(c.position=s,c.val=a(c.index++)),g|=(p>0?1:0)*n,n<<=1;r[h++]=u(g),l=h-1,t--;break;case 2:return $.join("")}if(t==0&&(t=Math.pow(2,A),A++),r[l])S=r[l];else if(l===h)S=_+_.charAt(0);else return null;$.push(S),r[h++]=_+S.charAt(0),t--,_=S,t==0&&(t=Math.pow(2,A),A++)}}};return f}();e!=null&&(e.exports=i)})(ie);Object.defineProperty(j,"__esModule",{value:!0});j.getParameters=void 0;var Ne=ie.exports;function Te(e){return Ne.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Me(e){return Te(JSON.stringify(e))}j.getParameters=Me;var ce=void 0,Fe=j;ce=Fe.getParameters;const Oe=e=>ce({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:He,isBinary:!1},"vite.config.ts":{content:Le,isBinary:!1},"index.html":{content:Re,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:Ue,isBinary:!1},"src/main.ts":{content:ze,isBinary:!1},"src/idux.ts":{content:je,isBinary:!1},"src/env.d.ts":{content:Ge,isBinary:!1}}}),Re=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,ze=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,Ue=`
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
</style>`,je=`
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

export default { install };`,Ge=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,He=`
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
})`,Je=O({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:i}=F(K);return{onClick:()=>{var y;const d=document.createElement("div");d.style.display="none";const m=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${Oe(e.code)}`;d.innerHTML=`<a href=${m} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(y=d.querySelector("a"))==null||y.click(),document.body.removeChild(d)},lang:i}}});function Ke(e,i,u,d,x,m){const y=q,f=X;return U(),se(f,{title:e.lang==="zh"?"\u5728 CodeSandbox \u4E2D\u6253\u5F00":"Open on CodeSandbox"},{default:D(()=>[k(y,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Ze=Z(Je,[["render",Ke]]),qe=O({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:i}=F(K);return{onClick:()=>{var m;const d=document.createElement("div");d.style.display="none";const x=Ye(e.code);d.innerHTML=`<a href=${x} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(m=d.querySelector("a"))==null||m.click(),document.body.removeChild(d)},lang:i}}}),Xe=e=>btoa(unescape(encodeURIComponent(e))),Ye=e=>{const u={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${Xe(JSON.stringify(u))}`};function Qe(e,i,u,d,x,m){const y=q,f=X;return U(),se(f,{title:e.lang==="zh"?"\u5728 Playground \u4E2D\u6253\u5F00":"Open on Playground"},{default:D(()=>[k(y,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const We=Z(qe,[["render",Qe]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class Ve{constructor(i){H(this,"_textarea");const u=this._textarea=document.createElement("textarea"),d=u.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",u.setAttribute("aria-hidden","true"),u.value=i,document.body.appendChild(u)}copy(){const i=this._textarea;let u=!1;try{if(i){const d=document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),u=document.execCommand("copy"),d&&d.focus()}}catch(d){ge.error("cdk/clipboard",d)}return u}destroy(){const i=this._textarea;i&&(i.parentNode&&i.parentNode.removeChild(i),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=class{static getInstance(){return M.instance||(M.instance=new M),M.instance}constructor(){}copy(i){const u=this.beginCopy(i),d=u.copy();return u.destroy(),d}beginCopy(i){return new Ve(i)}};let z=M;H(z,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const eo=()=>{const e=z.getInstance(),i=new Set;let u=!1,d=null;_e(()=>{d!==null&&clearTimeout(d),i.forEach(m=>m.destroy()),i.clear(),u=!0});function x(m,y=1){return new Promise(o=>{if(y>1){let s=y;const a=e.beginCopy(m);i.add(a);const r=()=>{const t=a.copy();!t&&--s&&!u?d=setTimeout(r,1):(d=null,i.delete(a),a.destroy(),o(t))};r()}else{const s=e.copy(m);o(s)}})}return{copy:x}},oo=O({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:i}=F(K),u=E(()=>`${e.packageName}-${e.componentName}-${ke(e.demoName)}`),d=E(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),x=te(!1),m=E(()=>i.value==="zh"?x.value?"\u6536\u8D77\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801":x.value?"Hide Code":"Show Code"),y=()=>{x.value=!x.value},{copy:f}=eo(),{success:o}=$e(),s=Ce(()=>{f(decodeURIComponent(e.code)).then(()=>{o(i.value==="zh"?"\u590D\u5236\u6210\u529F":"copy succeeded")})},300);return{id:u,lang:i,editHref:d,expanded:x,expandedTitle:m,onExpanded:y,onCopy:s}}});const to=["id"],no={class:"global-code-box-title markdown"},so=["href"],ao={class:"global-code-box-description markdown"},ro={class:"global-code-box-content"},io={class:"global-code-box-content-border"},co={class:"global-code-box-raw-code"},lo={class:"global-code-box-tools"},uo=["href"],po={key:0,class:"global-code-box-highlight-code"};function fo(e,i,u,d,x,m){const y=We,f=Ze,o=q,s=X,a=ee;return U(),Q("div",{id:e.id,class:"global-code-box"},[w("div",no,[w("h3",null,[w("span",null,Ae(e.title),1),w("a",{class:"anchor",href:"#"+e.id},"#",8,so)])]),w("div",ao,[L(e.$slots,"description")]),w("div",ro,[w("div",io,[w("div",co,[L(e.$slots,"rawCode"),w("div",lo,[k(a,null,{default:D(()=>[k(y,{code:e.code},null,8,["code"]),k(f,{code:e.code},null,8,["code"]),k(s,{title:e.lang==="zh"?"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u793A\u4F8B":"Edit this demo on GitHub"},{default:D(()=>[w("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[k(o,{name:"edit"})],8,uo)]),_:1},8,["title"]),k(s,{title:e.lang==="zh"?"\u590D\u5236\u4EE3\u7801":"Copy code"},{default:D(()=>[k(o,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),k(s,{title:e.expandedTitle},{default:D(()=>[k(o,{name:e.expanded?"unexpand":"expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),k(Ee,{name:"ix-fade-down"},{default:D(()=>[e.expanded?(U(),Q("div",po,[L(e.$slots,"highlightCode")])):Se("",!0)]),_:3})])])],8,to)}const xo=Z(oo,[["render",fo]]);export{go as I,xo as _,eo as a,ho as b,$e as u};
