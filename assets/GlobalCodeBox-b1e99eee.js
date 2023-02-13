var fe=Object.defineProperty;var me=(e,i,u)=>i in e?fe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u;var H=(e,i,u)=>(me(e,typeof i!="symbol"?i+"":i,u),u);import{M as ve,t as ye,l as he,u as J,m as ge,F as xe,n as be,ɵ as V,p as oe,q as te,i as P,r as ne,a as Z,_ as q,v as X,w as W,L as _e}from"./index-42aa140a.js";import{i as N,v as T,e as $,b as Y,y as S,a2 as se,k as Ce,z as ae,p as ke,a8 as F,ah as re,aa as E,aj as Se,M as we,Z as $e,a9 as ee,ab as A,ae as Ie,af as L,ac as Ae,J as Be}from"./vendor-6c4e542b.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ee=()=>{const e=N(ve,null);return e===null?ye("components/message","<IxMessageProvider> not found."):e};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie=Symbol("radioGroupToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const De={control:{type:[String,Number,Object],default:void 0},checked:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:!1},buttoned:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},label:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:void 0},value:{type:null,default:void 0},waveless:{type:Boolean,default:!1},"onUpdate:checked":{type:[Function,Array]},onChange:{type:[Function,Array]},onBlur:{type:[Function,Array]},onFocus:{type:[Function,Array]}},Pe={control:{type:[String,Number,Object],default:void 0},value:{type:null,default:void 0},buttoned:{type:Boolean,default:!1},dataSource:{type:Array},disabled:{type:Boolean,default:!1},gap:{type:[Number,String],default:void 0},name:{type:String,default:void 0},mode:{type:String,default:void 0},size:{type:String,default:"md"},"onUpdate:value":{type:[Function,Array]},onChange:{type:[Function,Array]}},Me={sm:"xs",md:"sm",lg:"md"},le=T({name:"IxRadio",inheritAttrs:!1,props:De,setup(e,{attrs:i,expose:u,slots:d}){const b=he(),h=J("common"),g=$(()=>`${h.prefixCls}-radio`),v=J("radio"),{elementRef:o,focus:n,blur:r}=ge(),a=Y();u({focus:n,blur:r});const s=N(xe,null),p=N(ie,null),C=$(()=>i.name??(p==null?void 0:p.props.name)),k=$(()=>{const{value:I}=e;return Ce(I)?p?b:void 0:I}),w=$(()=>e.buttoned??(p==null?void 0:p.props.buttoned)),y=$(()=>e.size??(p==null?void 0:p.props.size)??(s==null?void 0:s.size.value)??v.size),x=$(()=>e.waveless??v.waveless),_=$(()=>e.mode??(p==null?void 0:p.props.mode)??"default"),{isChecked:f,isDisabled:m,isFocused:t,handleChange:c,handleBlur:l,handleFocus:ue}=Ne(e,p,o,k,a,x),de=$(()=>{const I=w.value,U=f.value,j=I&&U&&_.value==="primary",B=g.value,D=h.prefixCls,G={[B]:!0,[`${B}-checked`]:f.value,[`${B}-disabled`]:m.value,[`${B}-focused`]:t.value,[`${B}-${y.value}`]:I,[`${D}-button`]:I,[`${D}-button-default`]:I&&!j,[`${D}-button-primary`]:j,[`${D}-button-disabled`]:I&&m.value,[`${D}-button-${Me[y.value]}`]:I};return ae([G,i.class])});return()=>{const{autofocus:I,label:U}=e,{class:j,style:B,type:D,tabindex:G,...pe}=i,O=g.value,Q=be(d.default,U);return S("label",{class:de.value,style:B,role:"radio","aria-checked":f.value,"aria-disabled":m.value},[S("span",{class:`${O}-input`},[S("input",se({ref:o,type:"radio",class:`${O}-input-inner`,"aria-hidden":!0,autofocus:I,checked:f.value,disabled:m.value,name:C.value,value:k.value,onChange:c,onBlur:l,onFocus:ue},pe),null),!w.value&&S("span",{class:`${O}-input-box`,tabindex:G},[!x.value&&S(V,{ref:a},null)])]),w.value&&!x.value&&S(V,{ref:a},null),Q&&S("span",{class:`${O}-label`},[Q])])}}}),Ne=(e,i,u,d,b,h)=>{let g,v;const o=Y(!1);let n,r;const a=s=>{o.value=!0,P(e.onFocus,s)};if(i){const{accessor:s,props:p}=i;g=$(()=>s.value===d.value),v=$(()=>s.disabled||!!e.disabled),r=C=>{o.value=!1,s.markAsBlurred(),P(e.onBlur,C)},n=C=>{var k;if(u.value){const w=C.target.checked,y=d.value,x=s.value;s.setValue(y),u.value.checked=!1,P(e.onChange,w,!w),P(p.onChange,y,x),!h.value&&((k=b.value)==null||k.play())}}}else{const{accessor:s,control:p}=oe({valueKey:"checked"});te(p),g=$(()=>!!s.value),v=$(()=>s.disabled),r=C=>{o.value=!1,s.markAsBlurred(),P(e.onBlur,C)},n=C=>{var k;if(u.value){const w=C.target.checked;s.setValue(w),u.value.checked=!1,P(e.onChange,w,!w),!h.value&&((k=b.value)==null||k.play())}}}return{isChecked:g,isDisabled:v,isFocused:o,handleChange:n,handleBlur:r,handleFocus:a}},Te=T({name:"IxRadioGroup",props:Pe,setup(e,{slots:i}){const u=J("common"),d=$(()=>`${u.prefixCls}-radio-group`),{accessor:b,control:h}=oe();te(h),ke(ie,{props:e,accessor:b});const g=$(()=>e.gap??(e.buttoned?0:8)),v=$(()=>{const{buttoned:o}=e,n=g.value,r=d.value;return ae({[r]:!0,[`${u.prefixCls}-button-group`]:o,[`${u.prefixCls}-button-group-compact`]:o&&(!n||n==="0")})});return()=>{const{dataSource:o}=e;let n;return o?n=o.map(r=>{const{key:a,value:s}=r;return S(le,se(r,{key:a??s,value:s??a}),null)}):n=i.default?i.default():void 0,S(ne,{class:v.value,size:g.value},{default:()=>[n]})}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const _o=le,Co=Te;var R={},K={},Oe={get exports(){return K},set exports(e){K=e}};(function(e){var i=function(){var u=String.fromCharCode,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",h={};function g(o,n){if(!h[o]){h[o]={};for(var r=0;r<o.length;r++)h[o][o.charAt(r)]=r}return h[o][n]}var v={compressToBase64:function(o){if(o==null)return"";var n=v._compress(o,6,function(r){return d.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:v._decompress(o.length,32,function(n){return g(d,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":v._compress(o,15,function(n){return u(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:v._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=v.compress(o),r=new Uint8Array(n.length*2),a=0,s=n.length;a<s;a++){var p=n.charCodeAt(a);r[a*2]=p>>>8,r[a*2+1]=p%256}return r},decompressFromUint8Array:function(o){if(o==null)return v.decompress(o);for(var n=new Array(o.length/2),r=0,a=n.length;r<a;r++)n[r]=o[r*2]*256+o[r*2+1];var s=[];return n.forEach(function(p){s.push(u(p))}),v.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":v._compress(o,6,function(n){return b.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),v._decompress(o.length,32,function(n){return g(b,o.charAt(n))}))},compress:function(o){return v._compress(o,16,function(n){return u(n)})},_compress:function(o,n,r){if(o==null)return"";var a,s,p={},C={},k="",w="",y="",x=2,_=3,f=2,m=[],t=0,c=0,l;for(l=0;l<o.length;l+=1)if(k=o.charAt(l),Object.prototype.hasOwnProperty.call(p,k)||(p[k]=_++,C[k]=!0),w=y+k,Object.prototype.hasOwnProperty.call(p,w))y=w;else{if(Object.prototype.hasOwnProperty.call(C,y)){if(y.charCodeAt(0)<256){for(a=0;a<f;a++)t=t<<1,c==n-1?(c=0,m.push(r(t)),t=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}else{for(s=1,a=0;a<f;a++)t=t<<1|s,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}x--,x==0&&(x=Math.pow(2,f),f++),delete C[y]}else for(s=p[y],a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;x--,x==0&&(x=Math.pow(2,f),f++),p[w]=_++,y=String(k)}if(y!==""){if(Object.prototype.hasOwnProperty.call(C,y)){if(y.charCodeAt(0)<256){for(a=0;a<f;a++)t=t<<1,c==n-1?(c=0,m.push(r(t)),t=0):c++;for(s=y.charCodeAt(0),a=0;a<8;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}else{for(s=1,a=0;a<f;a++)t=t<<1|s,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=0;for(s=y.charCodeAt(0),a=0;a<16;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1}x--,x==0&&(x=Math.pow(2,f),f++),delete C[y]}else for(s=p[y],a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;x--,x==0&&(x=Math.pow(2,f),f++)}for(s=2,a=0;a<f;a++)t=t<<1|s&1,c==n-1?(c=0,m.push(r(t)),t=0):c++,s=s>>1;for(;;)if(t=t<<1,c==n-1){m.push(r(t));break}else c++;return m.join("")},decompress:function(o){return o==null?"":o==""?null:v._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,r){var a=[],s=4,p=4,C=3,k="",w=[],y,x,_,f,m,t,c,l={val:r(0),position:n,index:1};for(y=0;y<3;y+=1)a[y]=y;for(_=0,m=Math.pow(2,2),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;switch(_){case 0:for(_=0,m=Math.pow(2,8),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;c=u(_);break;case 1:for(_=0,m=Math.pow(2,16),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;c=u(_);break;case 2:return""}for(a[3]=c,x=c,w.push(c);;){if(l.index>o)return"";for(_=0,m=Math.pow(2,C),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;switch(c=_){case 0:for(_=0,m=Math.pow(2,8),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;a[p++]=u(_),c=p-1,s--;break;case 1:for(_=0,m=Math.pow(2,16),t=1;t!=m;)f=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=r(l.index++)),_|=(f>0?1:0)*t,t<<=1;a[p++]=u(_),c=p-1,s--;break;case 2:return w.join("")}if(s==0&&(s=Math.pow(2,C),C++),a[c])k=a[c];else if(c===p)k=x+x.charAt(0);else return null;w.push(k),a[p++]=x+k.charAt(0),s--,x=k,s==0&&(s=Math.pow(2,C),C++)}}};return v}();e!=null&&(e.exports=i)})(Oe);Object.defineProperty(R,"__esModule",{value:!0});R.getParameters=void 0;var ze=K;function Fe(e){return ze.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Re(e){return Fe(JSON.stringify(e))}R.getParameters=Re;var ce=void 0,Ue=R;ce=Ue.getParameters;const je=e=>ce({template:"node",files:{"package.json":{content:{scripts:{dev:"vite"},dependencies:{vue:"next","@idux/components":"latest","@idux/pro":"latest","@idux/cdk":"latest"},devDependencies:{"@vitejs/plugin-vue":"latest",less:"latest",typescript:"latest",vite:"latest"}},isBinary:!1},"tsconfig.json":{content:Ze,isBinary:!1},"vite.config.ts":{content:qe,isBinary:!1},"index.html":{content:Ge,isBinary:!1},"src/Demo.vue":{content:decodeURIComponent(e),isBinary:!1},"src/App.vue":{content:Le,isBinary:!1},"src/main.ts":{content:He,isBinary:!1},"src/idux.ts":{content:Je,isBinary:!1},"src/env.d.ts":{content:Ke,isBinary:!1}}}),Ge=`
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`,He=`
import { createApp } from 'vue';
import Idux from './idux';
import App from './App.vue';
createApp(App).use(Idux).mount('#app');`,Le=`
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

export default { install };`,Ke=`
/// <reference types="vite/client" />
/// <reference types="@idux/cdk/types" />
/// <reference types="@idux/components/types" />
/// <reference types="@idux/pro/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}`,Ze=`
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
})`,Xe=T({name:"GlobalCodeSandbox",props:{code:{type:String,default:""}},setup(e){const{lang:i}=N(Z);return{onClick:()=>{var g;const d=document.createElement("div");d.style.display="none";const h=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${je(e.code)}`;d.innerHTML=`<a href=${h} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(g=d.querySelector("a"))==null||g.click(),document.body.removeChild(d)},lang:i}}});function We(e,i,u,d,b,h){const g=X,v=W;return F(),re(v,{title:e.lang==="zh"?"在 CodeSandbox 中打开":"Open on CodeSandbox"},{default:E(()=>[S(g,{name:"code",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const Ye=q(Xe,[["render",We]]),Qe=T({name:"GlobalPlayground",props:{code:{type:String,default:""}},setup(e){const{lang:i}=N(Z);return{onClick:()=>{var h;const d=document.createElement("div");d.style.display="none";const b=eo(e.code);d.innerHTML=`<a href=${b} target="_blank" rel="noopener noreferrer"></a>`,document.body.appendChild(d),(h=d.querySelector("a"))==null||h.click(),document.body.removeChild(d)},lang:i}}}),Ve=e=>btoa(unescape(encodeURIComponent(e))),eo=e=>{const u={"App.vue":decodeURIComponent(e)};return`https://playground.idux.site/#${Ve(JSON.stringify(u))}`};function oo(e,i,u,d,b,h){const g=X,v=W;return F(),re(v,{title:e.lang==="zh"?"在 Playground 中打开":"Open on Playground"},{default:E(()=>[S(g,{name:"bug",onClick:e.onClick},null,8,["onClick"])]),_:1},8,["title"])}const to=q(Qe,[["render",oo]]);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */class no{constructor(i){H(this,"_textarea");const u=this._textarea=document.createElement("textarea"),d=u.style;d.opacity="0",d.position="absolute",d.left=d.top="-999em",u.setAttribute("aria-hidden","true"),u.value=i,document.body.appendChild(u)}copy(){const i=this._textarea;let u=!1;try{if(i){const d=document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),u=document.execCommand("copy"),d&&d.focus()}}catch(d){_e.error("cdk/clipboard",d)}return u}destroy(){const i=this._textarea;i&&(i.parentNode&&i.parentNode.removeChild(i),this._textarea=void 0)}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M=class{static getInstance(){return M.instance||(M.instance=new M),M.instance}constructor(){}copy(i){const u=this.beginCopy(i),d=u.copy();return u.destroy(),d}beginCopy(i){return new no(i)}};let z=M;H(z,"instance",null);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const so=()=>{const e=z.getInstance(),i=new Set;let u=!1,d=null;Se(()=>{d!==null&&clearTimeout(d),i.forEach(h=>h.destroy()),i.clear(),u=!0});function b(h,g=1){return new Promise(o=>{if(g>1){let n=g;const r=e.beginCopy(h);i.add(r);const a=()=>{const s=r.copy();!s&&--n&&!u?d=setTimeout(a,1):(d=null,i.delete(r),r.destroy(),o(s))};a()}else{const n=e.copy(h);o(n)}})}return{copy:b}},ao=T({name:"GlobalCodeBox",props:{title:{type:String,default:""},packageName:{type:String,default:""},componentName:{type:String,default:""},demoName:{type:String,default:""},copied:{type:Boolean,default:!1},code:{type:String,default:""}},setup(e){const{lang:i}=N(Z),u=$(()=>`${e.packageName}-${e.componentName}-${$e(e.demoName)}`),d=$(()=>`https://github.com/IDuxFE/idux/edit/main/packages/${`${e.packageName}/${e.componentName}/demo/${e.demoName}`}.md`),b=Y(!1),h=$(()=>i.value==="zh"?b.value?"收起代码":"显示代码":b.value?"Hide Code":"Show Code"),g=()=>{b.value=!b.value},{copy:v}=so(),{success:o}=Ee(),n=we(()=>{v(decodeURIComponent(e.code)).then(()=>{o(i.value==="zh"?"复制成功":"copy succeeded")})},300);return{id:u,lang:i,editHref:d,expanded:b,expandedTitle:h,onExpanded:g,onCopy:n}}});const ro=["id"],io={class:"global-code-box-title markdown"},lo=["href"],co={class:"global-code-box-description markdown"},uo={class:"global-code-box-content"},po={class:"global-code-box-content-border"},fo={class:"global-code-box-raw-code"},mo={class:"global-code-box-tools"},vo=["href"],yo={key:0,class:"global-code-box-highlight-code"};function ho(e,i,u,d,b,h){const g=to,v=Ye,o=X,n=W,r=ne;return F(),ee("div",{id:e.id,class:"global-code-box"},[A("div",io,[A("h3",null,[A("span",null,Ie(e.title),1),A("a",{class:"anchor",href:"#"+e.id},"#",8,lo)])]),A("div",co,[L(e.$slots,"description")]),A("div",uo,[A("div",po,[A("div",fo,[L(e.$slots,"rawCode"),A("div",mo,[S(r,null,{default:E(()=>[S(g,{code:e.code},null,8,["code"]),S(v,{code:e.code},null,8,["code"]),S(n,{title:e.lang==="zh"?"在 GitHub 上编辑此示例":"Edit this demo on GitHub"},{default:E(()=>[A("a",{href:e.editHref,class:"global-code-box-edit",target:"_blank",rel:"noopener noreferrer"},[S(o,{name:"edit"})],8,vo)]),_:1},8,["title"]),S(n,{title:e.lang==="zh"?"复制代码":"Copy code"},{default:E(()=>[S(o,{name:"copy",onClick:e.onCopy},null,8,["onClick"])]),_:1},8,["title"]),S(n,{title:e.expandedTitle},{default:E(()=>[S(o,{name:e.expanded?"unexpand":"expand",onClick:e.onExpanded},null,8,["name","onClick"])]),_:1},8,["title"])]),_:1})])]),S(Be,{name:"ix-fade-down"},{default:E(()=>[e.expanded?(F(),ee("div",yo,[L(e.$slots,"highlightCode")])):Ae("",!0)]),_:3})])])],8,ro)}const ko=q(ao,[["render",ho]]);export{Co as I,ko as _,so as a,_o as b,Ee as u};