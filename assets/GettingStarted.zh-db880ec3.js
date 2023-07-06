import{I as c,a as l}from"./index-93527f47.js";import{_ as p}from"./index-baf87496.js";import{aa as u,ab as i,z as t,ac as o,ad as n,af as s}from"./vendor-96982764.js";const k={},r={class:"markdown site-global-docs"},d=n("h1",null,[s("快速上手"),n("span",{class:"subtitle"})],-1),m=n("section",{class:"markdown"},[n("p",null,[n("code",null,"@idux"),s(" 致力于提供给程序员"),n("strong",null,"愉悦"),s("的开发体验。")]),n("blockquote",null,[n("p",null,[s("在开始之前，推荐先学习 "),n("a",{href:"https://v3.vuejs.org",target:"_blank",rel:"noopener"},"Vue 3.x"),s(" 和 "),n("a",{href:"https://babeljs.io/docs/en/learn",target:"_blank",rel:"noopener"},"ES2015"),s("，并正确安装和配置了 "),n("a",{href:"https://nodejs.org",target:"_blank",rel:"noopener"},"Node.js"),s(" v12 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 3.x 及配套设施的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。")])]),n("h2",{id:"在线演示"},[n("span",null,"在线演示"),n("a",{onclick:"window.location.hash = '在线演示'",class:"anchor"},"#")]),n("p",null,[s("最简单的使用方式参照以下 CodeSandbox 或者 StackBlitz 演示，也推荐 Fork 示例来进行 "),n("code",null,"Bug Report"),s("，也可以将其下载下来作为项目初始化模板。")]),n("ul",null,[n("li",null,[n("a",{href:"https://codesandbox.io/s/idux-starter-7o9lv",target:"_blank",rel:"noopener"},"CodeSandbox: idux-starter")]),n("li",null,[n("a",{href:"https://stackblitz.com/edit/idux-starter",target:"_blank",rel:"noopener"},"StackBlitz: idux-starter")])]),n("h2",{id:"使用 vite"},[n("span",null,"使用 vite"),n("a",{onclick:"window.location.hash = '使用 vite'",class:"anchor"},"#")]),n("p",null,"实际项目开发中，你会需要对 Vue 和 TypeScript 代码的构建、调试、代理、打包部署等一系列工程化的需求。"),n("p",null,[s("我们强烈建议使用 "),n("a",{href:"https://vitejs.dev",target:"_blank",rel:"noopener"},"vite"),s(" 及其工具链辅助进行开发，下面我们用一个简单的实例来说明。")]),n("h3",{id:"创建一个项目"},[n("span",null,"创建一个项目"),n("a",{onclick:"window.location.hash = '创建一个项目'",class:"anchor"},"#")]),n("blockquote",null,[n("p",null,[s("如果你想了解更多 vite 及其工具链的功能和命令，建议访问 "),n("a",{href:"https://vitejs.dev",target:"_blank",rel:"noopener"},"vite"),s(" 了解更多。")])]),n("p",null,[s("执行以下命令并跟随提示操作，"),n("code",null,"vite"),s(" 会在当前目录下新建一个名称为 "),n("code",null,"vite-project"),s(" （如果你没有指定的话）的文件夹。")]),n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` create vite@latest

`),n("span",{class:"token builtin class-name"},"cd"),s(` vite-project

`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install")])]),n("h3",{id:"安装组件"},[n("span",null,"安装组件"),n("a",{onclick:"window.location.hash = '安装组件'",class:"anchor"},"#")]),n("p",null,[s("根据你的需求决定是否需要安装 "),n("code",null,"@idux/pro"),s("。")]),n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" @idux/cdk @idux/components @idux/pro")])]),n("h3",{id:"初始化配置"},[n("span",null,"初始化配置"),n("a",{onclick:"window.location.hash = '初始化配置'",class:"anchor"},"#")]),n("p",null,[s("参考下面的代码，新建一个 "),n("code",null,"idux.ts"),s(" 文件，对 "),n("code",null,"@idux"),s(" 进行初始化配置，包括引入国际化文件，导入模块，引入样式文件等工作。 ")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// idux.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"App"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 示例导入的是 default 主题，如果需要使用其他主题或者定制主题，请参考定制主题的文档"),s(`
`),n("span",{class:"token comment"},"// 如果需要 css 按需加载，移除下面 2 行代码"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"@idux/components/default.full.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"@idux/pro/default.css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 如果需要 css 按需加载，则按需添加下面的代码"),s(`
`),n("span",{class:"token comment"},'// import "@idux/cdk/index.css";'),s(`
`),n("span",{class:"token comment"},'// import "@idux/components/style/core/reset.default.css";'),s(`
`),n("span",{class:"token comment"},'// import "@idux/components/style/core/reset-scroll.default.css";'),s(`

`),n("span",{class:"token comment"},"// 如果需要 js 按需加载，移除下面 3 行代码"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IduxCdk "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/cdk"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IduxComponents "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IduxPro "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/pro"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components/config"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token constant"},"IDUX_ICON_DEPENDENCIES"),n("span",{class:"token punctuation"},","),s(" addIconDefinitions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components/icon"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},'// import { enUS } from "@idux/components/locales";'),s(`

`),n("span",{class:"token comment"},"// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。"),s(`
`),n("span",{class:"token function"},"addIconDefinitions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"IDUX_ICON_DEPENDENCIES"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载"),s(`
`),n("span",{class:"token comment"},"// 注意：请确认图标的 svg 资源被正确放入到 `public/idux-icons` 目录中, 可以参考下面的 vite 配置"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loadIconDynamically"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("iconName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/idux-icons/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("iconName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".svg"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"text"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" customConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" loadIconDynamically "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 如果是 seer 主题"),s(`
`),n("span",{class:"token comment"},"// customConfig = merge(seerConfig, { icon: { loadIconDynamically } })"),s(`
`),n("span",{class:"token keyword"},"const"),s(" globalConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),s("customConfig"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" install "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("app"),n("span",{class:"token operator"},":"),s(" App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("IduxCdk"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("IduxComponents"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("IduxPro"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("globalConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(" install "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n("p",null,[s("在 "),n("code",null,"main.ts"),s(" 中引入 "),n("code",null,"idux.ts")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Idux "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./idux"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./App.vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("Idux"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#app"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n("p",null,[s("修改 "),n("code",null,"vite.config.ts"),s(", 以支持图标资源的动态加载，如果你不需要用到动态加载图标，无需配置此项。")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// vite.config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" viteStaticCopy "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vite-plugin-static-copy"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token operator"},"..."),s(`
    `),n("span",{class:"token function"},"viteStaticCopy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      targets`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          src`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"./node_modules/@idux/components/icon/assets/*.svg"'),n("span",{class:"token punctuation"},","),s(`
          dest`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"idux-icons"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n("h3",{id:"类型提示"},[n("span",null,"类型提示"),n("a",{onclick:"window.location.hash = '类型提示'",class:"anchor"},"#")]),n("p",null,"我们提供了所有组件的类型定义，你可以参考下面的代码进行导入类型声明。"),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// env.d.ts"),s(`
`),n("span",{class:"token comment"},'/// <reference types="vite/client" />'),s(`
`),n("span",{class:"token comment"},'/// <reference types="@idux/cdk/types" />'),s(`
`),n("span",{class:"token comment"},'/// <reference types="@idux/components/types" />'),s(`
`),n("span",{class:"token comment"},'/// <reference types="@idux/pro/types" />')])]),n("h3",{id:"文档提示"},[n("span",null,"文档提示"),n("a",{onclick:"window.location.hash = '文档提示'",class:"anchor"},"#")]),n("p",null,[s("我们开发一套在 IDE（VSCode/Webstorm）中提供组件文档提示的扩展——"),n("a",{href:"https://github.com/IDuxFE/idux-coder/releases",target:"_blank",rel:"noopener"},"iDux-Coder")]),n("p",null,"用于提供代码即文档的开发体验，实现在 IDE 中组件参数即查即用，而无需组件文档网站与 IDE 的来回切换，并支持高度自由的数据配置定制，是 iDux-Coder 但不仅仅只是 iDux。"),n("h3",{id:"开发调试"},[n("span",null,"开发调试"),n("a",{onclick:"window.location.hash = '开发调试'",class:"anchor"},"#")]),n("p",null,"一键启动调试，运行成功后显示欢迎页面。"),n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" run dev")])]),n("p",null,[s("然后你可以将此文档中的任意示例复制到 "),n("code",null,"App.vue"),s(" 中，他们都可以正常运行。")]),n("h2",{id:"使用 @vue/cli"},[n("span",null,"使用 @vue/cli"),n("a",{onclick:"window.location.hash = '使用 @vue/cli'",class:"anchor"},"#")]),n("p",null,[s("除了创建项目的步骤外，其他步骤与使用 "),n("code",null,"vite"),s(" 没有任何不同，建议访问 "),n("a",{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"Vue CLI"),s(" 了解更多。")]),n("h2",{id:"按需加载"},[n("span",null,"按需加载"),n("a",{onclick:"window.location.hash = '按需加载'",class:"anchor"},"#")]),n("p",null,[s("当你只用到 "),n("code",null,"@idux"),s(" 的部分组件且比较在意包体积大小时，可以只加载用到的组件。")]),n("p",null,[s("推荐"),n("strong",null,"仅按需加载 js 代码"),s("，css 代码无需按需加载, 首先你需要修改 "),n("code",null,"idux.ts"),s(" 中的代码。")]),n("pre",{class:"language-diff"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import IduxCdk from "@idux/cdk";
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import IduxComponents from "@idux/components";
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import IduxPro from "@idux/pro";
`)]),s(`
const install = (app: App): void => {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig);
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  app.use(globalConfig)
`)]),s("};")])]),n("p",null,"然后可以选择以下任意一种方式进行加载组件代码。"),n("ul",null,[n("li",null,"Vite:")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// vite.config"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IduxResolver "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/resolvers'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/vite'"),s(`

`),n("span",{class:"token comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"/* ... */"),s(`
    `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      resolvers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"IduxResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// 可以通过指定 `importStyle` 来按需加载 css 或 less 代码, 也支持不同的主题"),s(`
      `),n("span",{class:"token comment"},"// 别忘了修改 idux.ts 中的样式导入代码"),s(`
      `),n("span",{class:"token comment"},"// resolvers: [IduxResolver({ importStyle: 'css', importStyleTheme: 'default' })],"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n("ul",null,[n("li",null,"Webpack:")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// webpack.config"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IduxResolver "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/resolvers'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/webpack'"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"/* ... */"),s(`
    `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      resolvers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"IduxResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n("ul",null,[n("li",null,"手动加载")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// App.vue or other components"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IxButton "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@idux/components/button"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"@idux/components/button/style/themes/default_css"')])]),n("h2",{id:"其他"},[n("span",null,"其他"),n("a",{onclick:"window.location.hash = '其他'",class:"anchor"},"#")]),n("ul",null,[n("li",null,[n("a",{href:"/docs/global-config/zh"},"全局配置")]),n("li",null,[n("a",{href:"/docs/i18n/zh"},"国际化配置")]),n("li",null,[n("a",{href:"/docs/customize-theme/zh"},"定制主题")]),n("li",null,[n("a",{href:"/components/icon/zh#FAQ"},"使用图标")])])],-1);function f(g,h){const a=l,e=c;return u(),i("article",r,[t(e,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[t(a,{href:"#在线演示",title:"在线演示"}),t(a,{href:"#使用 vite",title:"使用 vite"},{default:o(()=>[t(a,{href:"#创建一个项目",title:"创建一个项目"}),t(a,{href:"#安装组件",title:"安装组件"}),t(a,{href:"#初始化配置",title:"初始化配置"}),t(a,{href:"#类型提示",title:"类型提示"}),t(a,{href:"#文档提示",title:"文档提示"}),t(a,{href:"#开发调试",title:"开发调试"})]),_:1}),t(a,{href:"#使用 @vue/cli",title:"使用 @vue/cli"}),t(a,{href:"#按需加载",title:"按需加载"}),t(a,{href:"#其他",title:"其他"})]),_:1}),d,m])}const v=p(k,[["render",f]]);export{v as default};
