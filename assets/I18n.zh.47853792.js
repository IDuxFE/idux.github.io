import{_ as r}from"./index.504b8eff.js";import{aW as k,b1 as n,m as s,aV as d,a_ as u,aY as t,aZ as F}from"./vendor.da080947.js";const h={setup(){return{goLink:a=>{window&&(window.location.hash=a)}}}},E={class:"markdown"},m=u("\u56FD\u9645\u5316"),C=n("span",{class:"subtitle"},null,-1),D={class:"edit-button","aria-label":"Edit this page on GitHub",href:"https://github.com/IDuxFE/idux/edit/main/docs/I18n.zh.md",target:"_blank",rel:"noopener noreferrer"},f=n("section",{class:"markdown"},[n("p",null,[u("\u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587("),n("code",null,"zh-CN"),u(")\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u65F6\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u5207\u6362\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002")]),n("h2",{id:"\u521D\u59CB\u5316"},[n("span",null,"\u521D\u59CB\u5316"),n("a",{onclick:"window.location.hash = '\u521D\u59CB\u5316'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),u(`
`),n("span",{class:"token keyword"},"import"),u(),n("span",{class:"token punctuation"},"{"),u(" enUS "),n("span",{class:"token punctuation"},"}"),u(),n("span",{class:"token keyword"},"from"),u(),n("span",{class:"token string"},"'@idux/components/locales'"),u(`

`),n("span",{class:"token keyword"},"const"),u(" globalConfig "),n("span",{class:"token operator"},"="),u(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),u(`
  locale`),n("span",{class:"token operator"},":"),u(" enUS"),n("span",{class:"token punctuation"},","),u(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),u(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),u("globalConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n("h2",{id:"\u8FD0\u884C\u65F6\u5207\u6362"},[n("span",null,"\u8FD0\u884C\u65F6\u5207\u6362"),n("a",{onclick:"window.location.hash = '\u8FD0\u884C\u65F6\u5207\u6362'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// MyComponent.vue"),u(`
`),n("span",{class:"token keyword"},"import"),u(),n("span",{class:"token punctuation"},"{"),u(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),u(),n("span",{class:"token keyword"},"from"),u(),n("span",{class:"token string"},'"@idux/components/config"'),n("span",{class:"token punctuation"},";"),u(`
`),n("span",{class:"token keyword"},"import"),u(),n("span",{class:"token punctuation"},"{"),u(" zhCN"),n("span",{class:"token punctuation"},","),u(" enUS "),n("span",{class:"token punctuation"},"}"),u(),n("span",{class:"token keyword"},"from"),u(),n("span",{class:"token string"},"'@idux/components/locales'"),u(`

`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u82F1\u6587"),u(`
`),n("span",{class:"token keyword"},"const"),u(),n("span",{class:"token punctuation"},"["),u("locale"),n("span",{class:"token punctuation"},","),u(" setLocale"),n("span",{class:"token punctuation"},"]"),u(),n("span",{class:"token operator"},"="),u(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'locale'"),n("span",{class:"token punctuation"},","),u(" enUS"),n("span",{class:"token punctuation"},")"),u(`

`),n("span",{class:"token comment"},"// 3s \u540E\u5207\u6362\u4E3A\u4E2D\u6587"),u(`
`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),u(),n("span",{class:"token function"},"setLocale"),n("span",{class:"token punctuation"},"("),u("zhCN"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),u(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")")])]),n("h2",{id:"\u652F\u6301\u8BED\u8A00"},[n("span",null,"\u652F\u6301\u8BED\u8A00"),n("a",{onclick:"window.location.hash = '\u652F\u6301\u8BED\u8A00'",class:"anchor"},"#")]),n("p",null,[n("code",null,"zh-CN"),u(", "),n("code",null,"en-US"),u(" \u662F\u8BED\u8A00\u5305\u540D\u79F0\u3002")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u8BED\u8A00"),n("th",null,"\u8BED\u8A00\u5305\u540D")])]),n("tbody",null,[n("tr",null,[n("td",null,"\u4E2D\u6587\u7B80\u4F53"),n("td",null,[n("code",null,"zh-CN")])]),n("tr",null,[n("td",null,"\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09"),n("td",null,[n("code",null,"en-US")])])])]),n("p",null,[u("\u8BE6\u7EC6\u7C7B\u578B\u8BF7\u53C2\u89C1: "),n("a",{href:"https://github.com/IDuxFE/idux/tree/main/packages/components/locales",target:"_blank",rel:"noopener"},"Locale")])],-1);function B(e,a,_,c,g,w){const l=t("IxIcon"),o=t("IxAnchorLink"),p=t("IxAnchor");return F(),k("article",E,[n("h1",null,[m,C,n("a",D,[s(l,{name:"edit"})])]),s(p,{class:"toc-wrapper",affix:"",offset:"16",onClick:a[0]||(a[0]=i=>c.goLink(i))},{default:d(()=>[s(o,{href:"#\u521D\u59CB\u5316",title:"\u521D\u59CB\u5316"}),s(o,{href:"#\u8FD0\u884C\u65F6\u5207\u6362",title:"\u8FD0\u884C\u65F6\u5207\u6362"}),s(o,{href:"#\u652F\u6301\u8BED\u8A00",title:"\u652F\u6301\u8BED\u8A00"})]),_:1}),f])}var A=r(h,[["render",B]]);export{A as default};
