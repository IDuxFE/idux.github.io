import{I as l,a as c}from"./index-14e2dfc5.js";import{_ as p}from"./index-b887bcb8.js";import{a9 as u,y as a,aa as o,ab as s,ad as n,a8 as i}from"./vendor-4521613a.js";const r={},k={class:"markdown site-global-docs"},d=s("h1",null,[n("定制主题"),s("span",{class:"subtitle"})],-1),m=s("section",{class:"markdown"},[s("p",null,"我们所有的组件都支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。"),s("p",null,[n("我们使用了 "),s("a",{href:"https://lesscss.org/",target:"_blank",rel:"noopener"},"Less"),n(" 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，在每个组件的文档中都会有说明哪些变量支持定制。")]),s("h2",{id:"官方主题"},[s("span",null,"官方主题"),s("a",{onclick:"window.location.hash = '官方主题'",class:"anchor"},"#")]),s("p",null,"我们提供了 2 种官方主题，欢迎在项目中试用，并且给我们提供反馈。"),s("ul",null,[s("li",null,[s("code",null,"default"),n(": 默认主题")]),s("li",null,[s("code",null,"seer"),n(": 安全主题")])]),s("p",null,[n("默认的 "),s("code",null,"@idux/components/(default|seer).full.(css|less)"),n(" 文件中已经包含了内置的 "),s("code",null,"reset"),n(" 样式，如果不需要的话，可以替换成相应的 "),s("code",null,"@idux/components/(default|seer).(css|less)"),n(" 文件，同时应该提供最基础的 reset 样式，参见："),s("a",{href:"https://github.com/IDuxFE/idux/issues/1194",target:"_blank",rel:"noopener"},"#1194"),n(".")]),s("h3",{id:"方式一: 使用 CSS"},[s("span",null,"方式一: 使用 CSS"),s("a",{onclick:"window.location.hash = '方式一: 使用 CSS'",class:"anchor"},"#")]),s("p",null,[n("如果项目不使用 Less，可在入口的 CSS 文件(如："),s("code",null,"style.css"),n(")或者 ts 文件(如："),s("code",null,"idux.ts"),n("/"),s("code",null,"main.ts"),n(")中，全量引入主题样式文件。")]),s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token comment"},"/* 默认主题*/"),n(`
`),s("span",{class:"token atrule"},[s("span",{class:"token rule"},"@import"),n(),s("span",{class:"token string"},'"@idux/components/default.full.css"'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"token atrule"},[s("span",{class:"token rule"},"@import"),n(),s("span",{class:"token string"},'"@idux/pro/default.css"'),s("span",{class:"token punctuation"},";")]),n(`

`),s("span",{class:"token comment"},"/* 安全主题 */"),n(`
`),s("span",{class:"token comment"},'/* @import "@idux/components/seer.full.css" */'),n(`
`),s("span",{class:"token comment"},'/* @import "@idux/pro/seer.css" */')])]),s("h3",{id:"方式二：使用 Less"},[s("span",null,"方式二：使用 Less"),s("a",{onclick:"window.location.hash = '方式二：使用 Less'",class:"anchor"},"#")]),s("p",null,[n("可在入口的 Less 文件(如："),s("code",null,"style.less"),n(")或者 ts 文件(如："),s("code",null,"idux.ts"),n("/"),s("code",null,"main.ts"),n(")中，全量引入主题样式文件, 同时还需要在构建工具中配置 less。")]),s("pre",{class:"language-less"},[s("code",null,[s("span",{class:"token comment"},"/* 默认主题*/"),n(`
`),s("span",{class:"token variable"},"@import"),n(),s("span",{class:"token string"},'"@idux/components/default.full.less"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token variable"},"@import"),n(),s("span",{class:"token string"},'"@idux/pro/default.less"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token comment"},"/* 安全主题 */"),n(`
`),s("span",{class:"token comment"},'/* @import "@idux/components/seer.full.less" */'),n(`
`),s("span",{class:"token comment"},'/* @import "@idux/pro/seer.less" */')])]),s("p",null,[n("配置 less, 以 vite 为例，修改 "),s("code",null,"vite.config.ts"),n(":")]),s("pre",{class:"language-ts"},[s("code",null,[s("span",{class:"token comment"},"// https://vitejs.dev/config/"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token operator"},"..."),n(`
  css`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    preprocessorOptions`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      less`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        javascriptEnabled`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("h2",{id:"自定义主题"},[s("span",null,"自定义主题"),s("a",{onclick:"window.location.hash = '自定义主题'",class:"anchor"},"#")]),s("h3",{id:"方式一：在 Less 文件中覆盖主题变量"},[s("span",null,"方式一：在 Less 文件中覆盖主题变量"),s("a",{onclick:"window.location.hash = '方式一：在 Less 文件中覆盖主题变量'",class:"anchor"},"#")]),s("p",null,[n("在 "),s("code",null,"styles.less"),n(" 里引入官方主题文件，再根据实际需求自定义覆盖主题样式变量的参数。")]),s("p",null,[n("例如，在以下样例中通过修改 "),s("code",null,"@primary-color"),n(" 的数值将预定义默认主题的基础色修改为 "),s("code",null,"#f5222d"),n("：")]),s("pre",{class:"language-less"},[s("code",null,[s("span",{class:"token comment"},"// -------- 引入官方提供的 less 样式入口文件 -----------"),n(`
`),s("span",{class:"token variable"},"@import"),n(),s("span",{class:"token string"},'"@idux/components/default.less"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token variable"},"@import"),n(),s("span",{class:"token string"},'"@idux/pro/default.less"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token comment"},"// -------- 自定义参数覆盖 -----------"),n(`
`),s("span",{class:"token variable"},[n("@primary-color"),s("span",{class:"token punctuation"},":")]),n(" #f5222d"),s("span",{class:"token punctuation"},";"),n(`
...`)])]),s("h3",{id:"方式二：构建工具中覆盖主题变量"},[s("span",null,"方式二：构建工具中覆盖主题变量"),s("a",{onclick:"window.location.hash = '方式二：构建工具中覆盖主题变量'",class:"anchor"},"#")]),s("p",null,[n("以 vite 为例，修改 "),s("code",null,"vite.config.ts"),n(":")]),s("pre",{class:"language-ts"},[s("code",null,[s("span",{class:"token comment"},"// https://vitejs.dev/config/"),n(`
`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token operator"},"..."),n(`
  css`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    preprocessorOptions`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      less`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        javascriptEnabled`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
        modifyVars`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token string-property property"},"'primary-color'"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'#f5222d'"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token operator"},"..."),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("h2",{id:"动态切换主题"},[s("span",null,"动态切换主题"),s("a",{onclick:"window.location.hash = '动态切换主题'",class:"anchor"},"#")]),s("p",null,"TODO: 待补充")],-1);function h(f,g){const t=c,e=l;return i(),u("article",k,[a(e,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[a(t,{href:"#官方主题",title:"官方主题"},{default:o(()=>[a(t,{href:"#方式一: 使用 CSS",title:"方式一: 使用 CSS"}),a(t,{href:"#方式二：使用 Less",title:"方式二：使用 Less"})]),_:1}),a(t,{href:"#自定义主题",title:"自定义主题"},{default:o(()=>[a(t,{href:"#方式一：在 Less 文件中覆盖主题变量",title:"方式一：在 Less 文件中覆盖主题变量"}),a(t,{href:"#方式二：构建工具中覆盖主题变量",title:"方式二：构建工具中覆盖主题变量"})]),_:1}),a(t,{href:"#动态切换主题",title:"动态切换主题"})]),_:1}),d,m])}const b=p(r,[["render",h]]);export{b as default};
