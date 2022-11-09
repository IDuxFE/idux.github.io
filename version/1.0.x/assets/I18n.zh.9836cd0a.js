import{I as c,a as e}from"./index.45ee6fe6.js";import{_ as l}from"./index.3f21dce0.js";import{a8 as p,y as a,a9 as u,aa as n,ac as s,a7 as i}from"./vendor.0e7da6ec.js";const k={},r={class:"markdown site-global-docs"},d=n("h1",null,[s("\u56FD\u9645\u5316"),n("span",{class:"subtitle"})],-1),h=n("section",{class:"markdown"},[n("p",null,[s("\u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587("),n("code",null,"zh-CN"),s(")\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u65F6\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u5207\u6362\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002")]),n("h2",{id:"\u521D\u59CB\u5316"},[n("span",null,"\u521D\u59CB\u5316"),n("a",{onclick:"window.location.hash = '\u521D\u59CB\u5316'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" enUS "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/locales'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" globalConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  locale`),n("span",{class:"token operator"},":"),s(" enUS"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("globalConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n("h2",{id:"\u8FD0\u884C\u65F6\u5207\u6362"},[n("span",null,"\u8FD0\u884C\u65F6\u5207\u6362"),n("a",{onclick:"window.location.hash = '\u8FD0\u884C\u65F6\u5207\u6362'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// MyComponent.vue"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components/config"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" zhCN"),n("span",{class:"token punctuation"},","),s(" enUS "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/locales'"),s(`

`),n("span",{class:"token comment"},"// \u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u82F1\u6587"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("locale"),n("span",{class:"token punctuation"},","),s(" setLocale"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'locale'"),n("span",{class:"token punctuation"},","),s(" enUS"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 3s \u540E\u5207\u6362\u4E3A\u4E2D\u6587"),s(`
`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setLocale"),n("span",{class:"token punctuation"},"("),s("zhCN"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")")])]),n("h2",{id:"\u652F\u6301\u8BED\u8A00"},[n("span",null,"\u652F\u6301\u8BED\u8A00"),n("a",{onclick:"window.location.hash = '\u652F\u6301\u8BED\u8A00'",class:"anchor"},"#")]),n("p",null,[n("code",null,"zh-CN"),s(", "),n("code",null,"en-US"),s(" \u662F\u8BED\u8A00\u5305\u540D\u79F0\u3002")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u8BED\u8A00"),n("th",null,"\u8BED\u8A00\u5305\u540D")])]),n("tbody",null,[n("tr",null,[n("td",null,"\u4E2D\u6587\u7B80\u4F53"),n("td",null,[n("code",null,"zh-CN")])]),n("tr",null,[n("td",null,"\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09"),n("td",null,[n("code",null,"en-US")])])])]),n("p",null,[s("\u8BE6\u7EC6\u7C7B\u578B\u8BF7\u53C2\u89C1: "),n("a",{href:"https://github.com/IDuxFE/idux/tree/main/packages/components/locales",target:"_blank",rel:"noopener"},"Locale")])],-1);function m(f,_){const t=e,o=c;return i(),p("article",r,[a(o,{class:"site-anchor",affix:"",offset:16},{default:u(()=>[a(t,{href:"#\u521D\u59CB\u5316",title:"\u521D\u59CB\u5316"}),a(t,{href:"#\u8FD0\u884C\u65F6\u5207\u6362",title:"\u8FD0\u884C\u65F6\u5207\u6362"}),a(t,{href:"#\u652F\u6301\u8BED\u8A00",title:"\u652F\u6301\u8BED\u8A00"})]),_:1}),d,h])}const y=l(k,[["render",m]]);export{y as default};
