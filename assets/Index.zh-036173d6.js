import{I as h,a as D}from"./index-fa60ee7a.js";import{_ as x,I as S}from"./GlobalCodeBox-993c45a7.js";import{d as I,a9 as y,aa as $,ab as O,ac as W,ad as P,_ as m,o as p,b as k,e as n,t as l,i as K,a as N,z as A,l as w,w as r,A as g,f as c,h as s,F as R,B as z,u as V,q as f,x as q,C,D as _}from"./index-88a96bc2.js";import"./__commonjsHelpers__-725317a4.js";const T=I({setup(){return{isBrowser:y,isBlink:$,isWebKit:O,isIOS:W,isAndroid:P}}});function G(t,a,e,o,d,u){return p(),k("div",null,[a[0]||(a[0]=n("h2",null,"Platform:",-1)),n("p",null,"Is Browser: "+l(t.isBrowser),1),n("p",null,"Is Blink: "+l(t.isBlink),1),n("p",null,"Is Webkit: "+l(t.isWebKit),1),n("p",null,"Is iOS: "+l(t.isIOS),1),n("p",null,"Is Android: "+l(t.isAndroid),1)])}const L=m(T,[["render",G]]),j=I({name:"Basic",components:{"raw-demo":L},setup(){const{lang:t}=K(N);return{lang:t}}}),U={key:0};function H(t,a,e,o,d,u){const i=A("raw-demo"),B=x;return p(),w(B,{packageName:"cdk",componentName:"theme",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch2%3EPlatform%3A%3C%2Fh2%3E%0A%20%20%20%20%3Cp%3EIs%20Browser%3A%20%7B%7B%20isBrowser%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Blink%3A%20%7B%7B%20isBlink%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Webkit%3A%20%7B%7B%20isWebKit%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20iOS%3A%20%7B%7B%20isIOS%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Android%3A%20%7B%7B%20isAndroid%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20isAndroid%2C%20isBlink%2C%20isBrowser%2C%20isIOS%2C%20isWebKit%20%7D%20from%20'%40idux%2Fcdk%2Fplatform'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%20isBrowser%2C%20isBlink%2C%20isWebKit%2C%20isIOS%2C%20isAndroid%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:t.lang==="zh"?"基本使用":"Basic usage"},{description:r(()=>[t.lang==="zh"?(p(),k("p",U,"主题切换")):g("",!0),t.lang==="en"?(p(),k(R,{key:1},[],64)):g("",!0)]),rawCode:r(()=>[c(i)]),highlightCode:r(()=>a[0]||(a[0]=[n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Platform:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is Browser: {{ isBrowser }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is Blink: {{ isBlink }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is Webkit: {{ isWebKit }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is iOS: {{ isIOS }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is Android: {{ isAndroid }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" isAndroid"),n("span",{class:"token punctuation"},","),s(" isBlink"),n("span",{class:"token punctuation"},","),s(" isBrowser"),n("span",{class:"token punctuation"},","),s(" isIOS"),n("span",{class:"token punctuation"},","),s(" isWebKit "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/cdk/platform'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" isBrowser"),n("span",{class:"token punctuation"},","),s(" isBlink"),n("span",{class:"token punctuation"},","),s(" isWebKit"),n("span",{class:"token punctuation"},","),s(" isIOS"),n("span",{class:"token punctuation"},","),s(" isAndroid "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1)])),_:1},8,["title"])}const J=m(j,[["render",H]]),M={},Q={class:"markdown site-doc-api"};function X(t,a){const e=D,o=h;return p(),k("section",Q,[c(o,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[c(e,{href:"#API",title:"API"})]),_:1}),a[0]||(a[0]=n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")],-1))])}const Y=m(M,[["render",X]]),Z={name:"DocsCdkTheme",components:{DemoBasic:J,ApiDocs:Y},setup(){var u;const t=z(),a=V(),e=f((u=t.query.tab)!=null?u:"demo");q(e,i=>{a.push({query:{tab:i}})});const o=[{label:"示例",value:"demo"},{label:"API",value:"api"},,,,].filter(Boolean),d=f(!1);return{checkedDoc:e,docRadioData:o,showDevDemo:d}}},nn={class:"site-doc-wrapper"},sn={class:"markdown site-doc-header"},an={class:"site-doc-demo"};function tn(t,a,e,o,d,u){const i=S,B=D,E=h,F=A("DemoBasic"),v=A("ApiDocs");return p(),k("article",nn,[n("section",sn,[a[1]||(a[1]=n("h1",null,[s("Theme"),n("span",{class:"subtitle"},"主题")],-1)),a[2]||(a[2]=n("div",{class:"markdown site-doc-description"},[n("p",null,[n("code",null,"@idux-vue2/cdk/theme"),s(" 提供了一组用于获取、更新主题的响应式工具")]),n("p",null,"需要对不同主题做兼容性处理时使用")],-1)),c(i,{value:o.checkedDoc,"onUpdate:value":a[0]||(a[0]=b=>o.checkedDoc=b),dataSource:o.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),C(n("section",an,[c(E,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[(o.showDevDemo,p(),w(B,{key:0,href:"#cdk-theme-basic",title:"基本使用"}))]),_:1}),c(F)],512),[[_,o.checkedDoc==="demo"]]),C(c(v,null,null,512),[[_,o.checkedDoc==="api"]])])}const un=m(Z,[["render",tn]]);export{un as default};