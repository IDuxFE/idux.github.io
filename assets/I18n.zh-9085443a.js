import{I as c,a as e}from"./index-65dcb36d.js";import{_ as l}from"./index-32d407ed.js";import{a9 as p,y as a,aa as u,ab as n,ad as s,a8 as i}from"./vendor-730bc5d6.js";const k={},r={class:"markdown site-global-docs"},d=n("h1",null,[s("国际化"),n("span",{class:"subtitle"})],-1),h=n("section",{class:"markdown"},[n("p",null,[s("目前的默认文案是中文("),n("code",null,"zh-CN"),s(")，如果需要使用其他语言，可以在初始化时进行配置，也可以在运行时切换，可以参考下面的方案。")]),n("h2",{id:"初始化"},[n("span",null,"初始化"),n("a",{onclick:"window.location.hash = '初始化'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" enUS "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/locales'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" globalConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  locale`),n("span",{class:"token operator"},":"),s(" enUS"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("globalConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n("h2",{id:"运行时切换"},[n("span",null,"运行时切换"),n("a",{onclick:"window.location.hash = '运行时切换'",class:"anchor"},"#")]),n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// MyComponent.vue"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components/config"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" zhCN"),n("span",{class:"token punctuation"},","),s(" enUS "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/locales'"),s(`

`),n("span",{class:"token comment"},"// 默认设置为英文"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("locale"),n("span",{class:"token punctuation"},","),s(" setLocale"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'locale'"),n("span",{class:"token punctuation"},","),s(" enUS"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 3s 后切换为中文"),s(`
`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setLocale"),n("span",{class:"token punctuation"},"("),s("zhCN"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")")])]),n("h2",{id:"支持语言"},[n("span",null,"支持语言"),n("a",{onclick:"window.location.hash = '支持语言'",class:"anchor"},"#")]),n("p",null,[n("code",null,"zh-CN"),s(", "),n("code",null,"en-US"),s(" 是语言包名称。")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"语言"),n("th",null,"语言包名")])]),n("tbody",null,[n("tr",null,[n("td",null,"中文简体"),n("td",null,[n("code",null,"zh-CN")])]),n("tr",null,[n("td",null,"英语（美式）"),n("td",null,[n("code",null,"en-US")])])])]),n("p",null,[s("详细类型请参见: "),n("a",{href:"https://github.com/IDuxFE/idux/tree/main/packages/components/locales",target:"_blank",rel:"noopener"},"Locale")])],-1);function m(f,_){const t=e,o=c;return i(),p("article",r,[a(o,{class:"site-anchor",affix:"",offset:16},{default:u(()=>[a(t,{href:"#初始化",title:"初始化"}),a(t,{href:"#运行时切换",title:"运行时切换"}),a(t,{href:"#支持语言",title:"支持语言"})]),_:1}),d,h])}const b=l(k,[["render",m]]);export{b as default};
