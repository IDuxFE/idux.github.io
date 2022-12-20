import{I as b,a as C}from"./index-65dcb36d.js";import{_ as S,I as $}from"./GlobalCodeBox-3d144be5.js";import{v as I,a9 as l,ab as t,ae as d,F as w,a8 as p,i as y,ah as D,aa as i,ac as g,y as c,ad as n,ai as _,aq as W,b as f,w as O,am as K,al as N,H as A,I as B}from"./vendor-730bc5d6.js";import{W as P,X as z,Y as G,Z as L,$ as R,_ as k,a as V}from"./index-32d407ed.js";const q=I({setup(){return{isBrowser:P,isBlink:z,isWebKit:G,isIOS:L,isAndroid:R}}}),T=t("h2",null,"Platform:",-1);function j(s,a,e,o,r,u){return p(),l(w,null,[T,t("p",null,"Is Browser: "+d(s.isBrowser),1),t("p",null,"Is Blink: "+d(s.isBlink),1),t("p",null,"Is Webkit: "+d(s.isWebKit),1),t("p",null,"Is iOS: "+d(s.isIOS),1),t("p",null,"Is Android: "+d(s.isAndroid),1)],64)}const M=k(q,[["render",j]]),H=I({name:"Basic",components:{"raw-demo":M},setup(){const{lang:s}=y(V);return{lang:s}}}),U={key:0},X=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h2")]),t("span",{class:"token punctuation"},">")]),n("Platform:"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h2")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("Is Browser: {{ isBrowser }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("Is Blink: {{ isBlink }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("Is Webkit: {{ isWebKit }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("Is iOS: {{ isIOS }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("Is Android: {{ isAndroid }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" isAndroid"),t("span",{class:"token punctuation"},","),n(" isBlink"),t("span",{class:"token punctuation"},","),n(" isBrowser"),t("span",{class:"token punctuation"},","),n(" isIOS"),t("span",{class:"token punctuation"},","),n(" isWebKit "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@idux/cdk/platform'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(" isBrowser"),t("span",{class:"token punctuation"},","),n(" isBlink"),t("span",{class:"token punctuation"},","),n(" isWebKit"),t("span",{class:"token punctuation"},","),n(" isIOS"),t("span",{class:"token punctuation"},","),n(" isAndroid "),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Y(s,a,e,o,r,u){const m=_("raw-demo"),h=S;return p(),D(h,{packageName:"cdk",componentName:"platform",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Ch2%3EPlatform%3A%3C%2Fh2%3E%0A%20%20%3Cp%3EIs%20Browser%3A%20%7B%7B%20isBrowser%20%7D%7D%3C%2Fp%3E%0A%20%20%3Cp%3EIs%20Blink%3A%20%7B%7B%20isBlink%20%7D%7D%3C%2Fp%3E%0A%20%20%3Cp%3EIs%20Webkit%3A%20%7B%7B%20isWebKit%20%7D%7D%3C%2Fp%3E%0A%20%20%3Cp%3EIs%20iOS%3A%20%7B%7B%20isIOS%20%7D%7D%3C%2Fp%3E%0A%20%20%3Cp%3EIs%20Android%3A%20%7B%7B%20isAndroid%20%7D%7D%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20isAndroid%2C%20isBlink%2C%20isBrowser%2C%20isIOS%2C%20isWebKit%20%7D%20from%20'%40idux%2Fcdk%2Fplatform'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%20isBrowser%2C%20isBlink%2C%20isWebKit%2C%20isIOS%2C%20isAndroid%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"基本使用":"Basic usage"},{description:i(()=>[s.lang==="zh"?(p(),l("p",U,"平台环境信息")):g("",!0),s.lang==="en"?(p(),l(w,{key:1},[],64)):g("",!0)]),rawCode:i(()=>[c(m)]),highlightCode:i(()=>[X]),_:1},8,["title"])}const Z=k(H,[["render",Y]]),J={},Q={class:"markdown site-doc-api"},tt=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),nt=W('<p>需要对不同环境做兼容性处理时使用</p><p><code>@idux/cdk/platform</code> 提供了一组用于判断当前浏览器环境的工具</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>备注</th></tr></thead><tbody><tr><td><code>isBrowser</code></td><td>是否为浏览器环境</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isEdge</code></td><td>是否为 <code>Microsoft Edge</code> 浏览器</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isTrident</code></td><td>是否为 <code>Microsoft Trident</code> 渲染引擎</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isBlink</code></td><td>是否为 <code>Blink</code> 渲染引擎</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isWebKit</code></td><td>是否为 <code>WebKit</code> 渲染引擎</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isFirefox</code></td><td>是否为 <code>Firefox</code> 浏览器</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isSafari</code></td><td>是否为 <code>Safari</code> 浏览器</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isIOS</code></td><td>是否为 <code>IOS</code> 平台</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>isAndroid</code></td><td>是否为 <code>Android</code> 平台</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>supportsFlexGap</code></td><td>检查用户的浏览器是否支持 flex 的 gap 配置</td><td><code>() =&gt; boolean</code></td><td>参见<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7" target="_blank" rel="noopener">gap</a></td></tr><tr><td><code>supportsPassiveEventListeners</code></td><td>检查用户的浏览器是否支持被动事件侦听器</td><td><code>() =&gt; boolean</code></td><td>参见 <a href="https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md" target="_blank" rel="noopener">https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md</a></td></tr></tbody></table>',3);function st(s,a){const e=C,o=b;return p(),l("section",Q,[c(o,{class:"site-anchor",affix:"",offset:16},{default:i(()=>[c(e,{href:"#使用场景",title:"使用场景"})]),_:1}),tt,nt])}const ot=k(J,[["render",st]]),at={name:"DocsCdkPlatform",components:{DemoBasic:Z,ApiDocs:ot},setup(){const s=K(),a=N(),e=f(s.query.tab??"demo");O(e,u=>{a.push({query:{tab:u}})});const o=[{label:"示例",value:"demo"},{label:"API",value:"api"},,,,].filter(Boolean),r=f(!1);return{checkedDoc:e,docRadioData:o,showDevDemo:r}}},et={class:"site-doc-wrapper"},ct={class:"markdown site-doc-header"},pt=t("h1",null,[n("Platform"),t("span",{class:"subtitle"},"平台")],-1),dt=t("div",{class:"markdown site-doc-description"},null,-1),it={class:"site-doc-demo"};function lt(s,a,e,o,r,u){const m=$,h=C,E=b,F=_("DemoBasic"),x=_("ApiDocs");return p(),l("article",et,[t("section",ct,[pt,dt,c(m,{value:o.checkedDoc,"onUpdate:value":a[0]||(a[0]=v=>o.checkedDoc=v),dataSource:o.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),A(t("section",it,[c(E,{class:"site-anchor",affix:"",offset:16},{default:i(()=>[(o.showDevDemo,p(),D(h,{key:0,href:"#cdk-platform-basic",title:"基本使用"}))]),_:1}),c(F)],512),[[B,o.checkedDoc==="demo"]]),A(c(x,null,null,512),[[B,o.checkedDoc==="api"]])])}const ht=k(at,[["render",lt]]);export{ht as default};
