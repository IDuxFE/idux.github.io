import{I as C,a as D}from"./index-cb8bfbe1.js";import{_ as b,I as $}from"./GlobalCodeBox-360c330d.js";import{l as I,ag as p,ah as k,ak as n,an as l,x as S,ar as B,aq as w,ai as r,al as g,p as c,am as s,F as y,ax as O,aj as W,r as h,w as P,S as A,U as f}from"./vendor-cb0c1489.js";import{s as K,v as N,w as R,x as V,y as q,_ as m,a as z}from"./index-e89cd1aa.js";const T=I({setup(){return{isBrowser:K,isBlink:N,isWebKit:R,isIOS:V,isAndroid:q}}}),j=n("h2",null,"Platform:",-1);function G(a,o,e,t,d,i){return p(),k("div",null,[j,n("p",null,"Is Browser: "+l(a.isBrowser),1),n("p",null,"Is Blink: "+l(a.isBlink),1),n("p",null,"Is Webkit: "+l(a.isWebKit),1),n("p",null,"Is iOS: "+l(a.isIOS),1),n("p",null,"Is Android: "+l(a.isAndroid),1)])}const L=m(T,[["render",G]]),U=I({name:"Basic",components:{"raw-demo":L},setup(){const{lang:a}=S(z);return{lang:a}}}),H={key:0},J=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
`)])])],-1);function M(a,o,e,t,d,i){const u=B("raw-demo"),_=b;return p(),w(_,{packageName:"cdk",componentName:"theme",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch2%3EPlatform%3A%3C%2Fh2%3E%0A%20%20%20%20%3Cp%3EIs%20Browser%3A%20%7B%7B%20isBrowser%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Blink%3A%20%7B%7B%20isBlink%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Webkit%3A%20%7B%7B%20isWebKit%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20iOS%3A%20%7B%7B%20isIOS%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EIs%20Android%3A%20%7B%7B%20isAndroid%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20isAndroid%2C%20isBlink%2C%20isBrowser%2C%20isIOS%2C%20isWebKit%20%7D%20from%20'%40idux%2Fcdk%2Fplatform'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%20isBrowser%2C%20isBlink%2C%20isWebKit%2C%20isIOS%2C%20isAndroid%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"基本使用":"Basic usage"},{description:r(()=>[a.lang==="zh"?(p(),k("p",H,"主题切换")):g("",!0),a.lang==="en"?(p(),k(y,{key:1},[],64)):g("",!0)]),rawCode:r(()=>[c(u)]),highlightCode:r(()=>[J]),_:1},8,["title"])}const Q=m(U,[["render",M]]),X={},Y={class:"markdown site-doc-api"},Z=n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")],-1);function nn(a,o){const e=D,t=C;return p(),k("section",Y,[c(t,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[c(e,{href:"#API",title:"API"})]),_:1}),Z])}const sn=m(X,[["render",nn]]),an={name:"DocsCdkTheme",components:{DemoBasic:Q,ApiDocs:sn},setup(){var i;const a=O(),o=W(),e=h((i=a.query.tab)!=null?i:"demo");P(e,u=>{o.push({query:{tab:u}})});const t=[{label:"示例",value:"demo"},{label:"API",value:"api"},,,,].filter(Boolean),d=h(!1);return{checkedDoc:e,docRadioData:t,showDevDemo:d}}},tn={class:"site-doc-wrapper"},on={class:"markdown site-doc-header"},en=n("h1",null,[s("Theme"),n("span",{class:"subtitle"},"主题")],-1),cn=n("div",{class:"markdown site-doc-description"},[n("p",null,[n("code",null,"@idux-vue2/cdk/theme"),s(" 提供了一组用于获取、更新主题的响应式工具")]),n("p",null,"需要对不同主题做兼容性处理时使用")],-1),pn={class:"site-doc-demo"};function un(a,o,e,t,d,i){const u=$,_=D,E=C,F=B("DemoBasic"),v=B("ApiDocs");return p(),k("article",tn,[n("section",on,[en,cn,c(u,{value:t.checkedDoc,"onUpdate:value":o[0]||(o[0]=x=>t.checkedDoc=x),dataSource:t.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),A(n("section",pn,[c(E,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[(t.showDevDemo,p(),w(_,{key:0,href:"#cdk-theme-basic",title:"基本使用"}))]),_:1}),c(F)],512),[[f,t.checkedDoc==="demo"]]),A(c(v,null,null,512),[[f,t.checkedDoc==="api"]])])}const mn=m(an,[["render",un]]);export{mn as default};
