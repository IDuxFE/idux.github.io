import{I as a,a as u}from"./index-85bedc5a.js";import{_ as c}from"./index-c73ba825.js";import{ag as i,ah as r,p as o,ai as s,ak as l,am as n}from"./vendor-deae6a9f.js";const p={},d={class:"markdown site-global-docs"},h=l("h1",null,[n("贡献指南"),l("span",{class:"subtitle"})],-1),m=l("section",{class:"markdown"},[l("p",null,[n("这篇指南会指导你如何为 "),l("code",null,"@idux"),n(" 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。")]),l("h2",{id:"行为准则"},[l("span",null,"行为准则"),l("a",{onclick:"window.location.hash = '行为准则'",class:"anchor"},"#")]),l("p",null,[n("我们有一份 "),l("a",{href:"https://github.com/IDuxFE/idux/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener"},"行为准则"),n(" ，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。")]),l("h2",{id:"透明的开发"},[l("span",null,"透明的开发"),l("a",{onclick:"window.location.hash = '透明的开发'",class:"anchor"},"#")]),l("p",null,[n("我们所有的工作都会放在 "),l("a",{href:"https://github.com/IDuxFE/idux",target:"_blank",rel:"noopener"},"GitHub"),n(" 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要进过同样流程的 review。")]),l("h2",{id:"Bugs"},[l("span",null,"Bugs"),l("a",{onclick:"window.location.hash = 'Bugs'",class:"anchor"},"#")]),l("p",null,[n("我们使用 "),l("a",{href:"https://github.com/IDuxFE/idux/issues",target:"_blank",rel:"noopener"},"Issues"),n(" 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，最好的办法就是通过我们提供的 "),l("a",{href:"./"},"issue 助手(TODO)"),n(" 来提 issue。 并且能使用这个 "),l("a",{href:"./"},"模板(TODO)"),n(" 来提供重现。")]),l("p",null,[n("在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 "),l("a",{href:"./"},"常见问题(TODO)"),n("。")]),l("h2",{id:"Features"},[l("span",null,"Features"),l("a",{onclick:"window.location.hash = 'Features'",class:"anchor"},"#")]),l("p",null,[n("如果你有改进我们的 API 或者新增功能的想法，我们同样推荐你使用我们提供的 "),l("a",{href:"./"},"issue 助手(TODO)"),n(" 来新建一个添加新功能的 issue。")]),l("h2",{id:"第一次贡献"},[l("span",null,"第一次贡献"),l("a",{onclick:"window.location.hash = '第一次贡献'",class:"anchor"},"#")]),l("p",null,"如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这些文章来学习："),l("ul",null,[l("li",null,[l("a",{href:"https://opensource.guide/zh-cn/how-to-contribute/",target:"_blank",rel:"noopener"},"如何为开源做贡献")]),l("li",null,[l("a",{href:"https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md",target:"_blank",rel:"noopener"},"第一次参与开源")])]),l("p",null,[n("为了能帮助你开始你的第一次尝试，我们用 "),l("a",{href:"https://github.com/IDuxFE/idux/labels/good%20first%20issue",target:"_blank",rel:"noopener"},"Good First Issue"),n(" 标记了一些比较容易修复的 bug 和小功能。这些 issue 可以很好地做为你的首次尝试。")]),l("p",null,"如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。"),l("p",null,"如果之前有人留言说会处理这个 issue 但是一两个星期都没有动静，那么你也可以接手处理这个 issue，当然还是需要留言告知其他人。"),l("h2",{id:"贡献代码"},[l("span",null,"贡献代码"),l("a",{onclick:"window.location.hash = '贡献代码'",class:"anchor"},"#")]),l("p",null,[l("code",null,"IDuxFE"),n(" 团队会关注所有的 Pull Request，我们会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。")]),l("p",null,[l("strong",null,"在你发送 Pull Request 之前"),n("，请确认你是按照下面的步骤来做的：")]),l("ul",null,[l("li",null,[n("在项目根目录下运行了 "),l("code",null,"npm install"),n(" ；")]),l("li",null,"如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要；"),l("li",null,[n("确认所有的测试都是通过的 "),l("code",null,"npm run test"),n(" ；")]),l("li",null,[n("确保你的代码通过了 lint 检查 "),l("code",null,"npm run lint"),n(" ；")]),l("li",null,[n("确保你的代码在提交之前经过了正确的 "),l("a",{href:"https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request",target:"_blank",rel:"noopener"},"Rebase"),n(" ；")]),l("li",null,[n("确保你的提交信息符合"),l("a",{href:"#commit"},"我们的 commit 规范"),n(" 。")])]),l("h2",{id:"如何提出 Pull Request"},[l("span",null,"如何提出 Pull Request"),l("a",{onclick:"window.location.hash = '如何提出 Pull Request'",class:"anchor"},"#")]),l("ul",null,[l("li",null,"fork 此仓库，以下所有操作均在 fork 之后的仓库上执行；"),l("li",null,[n("在 "),l("code",null,"main"),n(" 分支运行："),l("code",null,"git remote add upstream https://github.com/IDuxFE/idux.git"),n(" ；")]),l("li",null,[n("在 "),l("code",null,"main"),n(" 分支运行: "),l("code",null,"git pull upstream main"),n(" ；")]),l("li",null,[n("在 "),l("code",null,"main"),n(" 分支运行: "),l("code",null,"git push origin main"),n(" ；")]),l("li",null,[n("切换到你要工作的 feature 分支 (例如有一个分支叫 "),l("code",null,"docs-fix"),n("): "),l("code",null,"git checkout docs-fix"),n(" ；")]),l("li",null,[n("在 "),l("code",null,"docs-fix"),n(" 分支运行: "),l("code",null,"git rebase main"),n(" 或 "),l("code",null,"git rebase main -i"),n(" ；")]),l("li",null,[n("在 "),l("code",null,"docs-fix"),n(" 分支修改代码，使用 "),l("code",null,"git add"),n(" 添加要提交的文件后，然后 commit: 请按照 "),l("a",{href:"#commit"},"我们的 commit 规范"),n(" 进行填写；")]),l("li",null,[n("推送代码 "),l("code",null,"git push"),n(" (如果进行了 Rebase 操作，可能需要 "),l("code",null,"-f"),n(")；")]),l("li",null,"在 GitHub 上发起 Pull Request 请求。")]),l("h2",{id:"开发流程"},[l("span",null,"开发流程"),l("a",{onclick:"window.location.hash = '开发流程'",class:"anchor"},"#")]),l("ul",null,[l("li",null,"clone fork 后的仓库"),l("li",null,[n("安装依赖："),l("code",null,"pnpm install")]),l("li",null,[n("常用的命令："),l("ul",null,[l("li",null,[l("code",null,"npm start"),n(" 在本地运行文档网站。")]),l("li",null,[l("code",null,"npm run lint"),n(" 检查代码风格(tips: 使用 "),l("code",null,"npm run lint-fix"),n(" 可以修复简单格式错误)。")]),l("li",null,[l("code",null,"npm run test"),n(" 运行单元测试(tips: 修改 "),l("code",null,"vitest.config.ts"),n(" 的 "),l("code",null,"root"),n(" 配置可以调整单元测试范围)。")]),l("li",null,[l("code",null,"npm run gen"),n(" 通过图形化界面快速创建模板。")])])])]),l("h2",{id:"代码风格"},[l("span",null,"代码风格"),l("a",{onclick:"window.location.hash = '代码风格'",class:"anchor"},"#")]),l("p",null,[n("我们使用了 "),l("code",null,"eslint"),n(", "),l("code",null,"stylelint"),n(", "),l("code",null,"markdownlint"),n(" 以及 "),l("code",null,"ls-lint"),n(" 来保证整体的代码风格一致。并且在 commit hooks 中配置了自动格式化和 lint, 只要提交通过即可。")]),l("h2",{id:"Commit"},[l("span",null,"Commit"),l("a",{onclick:"window.location.hash = 'Commit'",class:"anchor"},"#")]),l("p",null,"对于如何提交 git commit message，我们有非常精确的规则。我们希望所有的 commit message 更具可读性，这样在查看项目历史记录会变得容易，同时我们使用 commit message 生成 Changelog."),l("p",null,[n("本项目使用了 "),l("code",null,"@commitlint"),n(" 作为 commit lint 工具，并使用 "),l("a",{href:"https://www.npmjs.com/package/@commitlint/config-angular",target:"_blank",rel:"noopener"},[l("code",null,"@commitlint/config-angular")]),n("作为基础规则，请使用下面任意一种方式提交你的 commit.")]),l("ul",null,[l("li",null,[n("全局安装 "),l("code",null,"npm install -g commitizen"),n("，然后使用 "),l("code",null,"cz"),n(" 提交")]),l("li",null,[n("使用 "),l("code",null,"git commit -a"),n(" 提交，请注意 message 符合我们的要求")])]),l("h3",{id:"提交格式"},[l("span",null,"提交格式"),l("a",{onclick:"window.location.hash = '提交格式'",class:"anchor"},"#")]),l("p",null,[n("每个 commit message 包括 "),l("strong",null,"header"),n(", "),l("strong",null,"body"),n(" 和 "),l("strong",null,"footer"),n(".")]),l("p",null,[n("header 具有特殊的格式，包括 "),l("strong",null,"type"),n(", "),l("strong",null,"scope"),n(" 和 "),l("strong",null,"subject"),n(", type 和 subject 是必须的，scope 是可选的。")]),l("pre",{class:"language-vim"},[l("code",null,[l("span",{class:"token operator"},"<"),n("type"),l("span",{class:"token operator"},">"),l("span",{class:"token punctuation"},"("),l("span",{class:"token operator"},"<"),n("scope"),l("span",{class:"token operator"},">"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},":"),n(),l("span",{class:"token operator"},"<"),n("subject"),l("span",{class:"token operator"},">"),n(`
`),l("span",{class:"token operator"},"<"),n("BLANK LINE"),l("span",{class:"token operator"},">"),n(`
`),l("span",{class:"token operator"},"<"),n("body"),l("span",{class:"token operator"},">"),n(`
`),l("span",{class:"token operator"},"<"),n("BLANK LINE"),l("span",{class:"token operator"},">"),n(`
`),l("span",{class:"token operator"},"<"),n("footer"),l("span",{class:"token operator"},">")])]),l("p",null,"提交 message 的任何行不能超过 100 个字符！确保 message 在 GitHub 以及各种 git 工具中更易于阅读。"),l("p",null,[n("注脚应该包含 "),l("a",{href:"https://help.github.com/articles/closing-issues-via-commit-messages/",target:"_blank",rel:"noopener"},"closing reference to an issue"),n(" 如果有的话.")]),l("p",null,[n("示例: ("),l("a",{href:"https://github.com/IDuxFE/idux/commits/main",target:"_blank",rel:"noopener"},"更多示例"),n(")")]),l("pre",{class:"language-vim"},[l("code",null,[l("span",{class:"token function"},"docs"),l("span",{class:"token punctuation"},"("),n("changelog"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},":"),n(),l("span",{class:"token keyword"},"update"),n(),l("span",{class:"token keyword"},"change"),n(" log "),l("span",{class:"token keyword"},"to"),n(" beta"),l("span",{class:"token operator"},"."),l("span",{class:"token number"},"5")])]),l("pre",{class:"language-vim"},[l("code",null,[l("span",{class:"token function"},"fix"),l("span",{class:"token punctuation"},"("),n("component"),l("span",{class:"token punctuation"},":"),n("button"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},":"),n(),l("span",{class:"token keyword"},"change"),n(` type not work

Button doesn'`),l("span",{class:"token keyword"},"t"),n(" work when setting its type dynamically"),l("span",{class:"token operator"},"."),n(`

`),l("span",{class:"token keyword"},"fix"),n(" #"),l("span",{class:"token number"},"123")])]),l("h3",{id:"Type"},[l("span",null,"Type"),l("a",{onclick:"window.location.hash = 'Type'",class:"anchor"},"#")]),l("p",null,"必须是以下选项之一:"),l("ul",null,[l("li",null,[l("strong",null,"feat"),n(": 一个新特性")]),l("li",null,[l("strong",null,"fix"),n(": 一次 bug 修复")]),l("li",null,[l("strong",null,"docs"),n(": 只是对文档进行修改")]),l("li",null,[l("strong",null,"style"),n(": 不影响代码本身含义的代码风格修改 (white-space, formatting, missing semi-colons, etc)")]),l("li",null,[l("strong",null,"refactor"),n(": 既不属于新特性又不是 bug 修改的代码修改")]),l("li",null,[l("strong",null,"perf"),n(": 性能优化")]),l("li",null,[l("strong",null,"test"),n(": 添加或修改测试用例")]),l("li",null,[l("strong",null,"build"),n(": 修改构建工具 (example scopes: gulp, broccoli, npm)")]),l("li",null,[l("strong",null,"ci"),n(": 修改自动化脚本 (example scopes: Circle, BrowserStack, SauceLabs)")]),l("li",null,[l("strong",null,"revert"),n(": 回滚提交")])]),l("h3",{id:"Scope"},[l("span",null,"Scope"),l("a",{onclick:"window.location.hash = 'Scope'",class:"anchor"},"#")]),l("p",null,"Scope 应该是本次修改所影响模块的名称（文件夹名称或其他有意义的单词），必要时还应该使用模块前缀（例如：cdk, comp, pro）。"),l("pre",{class:"language-vim"},[l("code",null,[l("span",{class:"token operator"},"<"),n("prefix"),l("span",{class:"token punctuation"},":"),n("name"),l("span",{class:"token operator"},">"),n(`
`),l("span",{class:"token operator"},"<"),n("prefix"),l("span",{class:"token punctuation"},":"),n("name1"),l("span",{class:"token punctuation"},","),n("name2"),l("span",{class:"token operator"},">")])]),l("p",null,"以下是一些示例:"),l("ul",null,[l("li",null,[l("strong",null,"cdk:clickOutside")]),l("li",null,[l("strong",null,"cdk:clipboard")]),l("li",null,[l("strong",null,"comp:alert")]),l("li",null,[l("strong",null,"comp:badge,button")]),l("li",null,[l("strong",null,"comp:OTHER_COMPONENT_NAME")])]),l("p",null,"以下模块不需要使用前缀："),l("ul",null,[l("li",null,[l("strong",null,"release"),n(": 用于版本发布")]),l("li",null,[l("strong",null,"packaging"),n(": 用于改变 npm 包的结构、路径等")]),l("li",null,[l("strong",null,"changelog"),n(": 用于修改 CHANGELOG.md")])]),l("p",null,"其他情况可以忽略 scope:"),l("ul",null,[l("li",null,[n("使用 "),l("code",null,"docs"),n(", "),l("code",null,"build"),n(" 或 "),l("code",null,"ci"),n(" 等全局修改(例如:"),l("code",null,"docs: add missing type"),n(").")])]),l("h3",{id:"Subject"},[l("span",null,"Subject"),l("a",{onclick:"window.location.hash = 'Subject'",class:"anchor"},"#")]),l("p",null,"Subject 是本次修改的简洁描述:"),l("ul",null,[l("li",null,'使用祈使句、现在时，例如：使用 "change" 而不是 "changed"、"changes"'),l("li",null,"不大写第一个字母"),l("li",null,"不以小数点(.)结尾")]),l("h3",{id:"Body"},[l("span",null,"Body"),l("a",{onclick:"window.location.hash = 'Body'",class:"anchor"},"#")]),l("p",null,"Body 应包含修改的动机，并对比这与以前的行为，是本次修改的详细描述："),l("ul",null,[l("li",null,'使用祈使句、现在时，例如：使用 "change" 而不是 "changed"、"changes"')]),l("h3",{id:"Footer"},[l("span",null,"Footer"),l("a",{onclick:"window.location.hash = 'Footer'",class:"anchor"},"#")]),l("p",null,[n("Footer 应包含 "),l("strong",null,"Breaking Changes"),n(" 和关闭或关联的 "),l("strong",null,"Issues")]),l("ul",null,[l("li",null,[l("strong",null,"Breaking Changes"),n(" 应该以 "),l("code",null,"BREAKING CHANGE:"),n(" 开头")]),l("li",null,[n("关闭或关联的 "),l("strong",null,"Issues"),n(" 使用 "),l("code",null,"fix #123"),n(" 或者 "),l("code",null,"re #123")])]),l("p",null,[n("详细的解释可以在"),l("a",{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#",target:"_blank",rel:"noopener"},"document commit-message-format"),n("中找到。")])],-1);function g(k,f){const e=u,t=a;return i(),r("article",d,[o(t,{class:"site-anchor",affix:"",offset:16},{default:s(()=>[o(e,{href:"#行为准则",title:"行为准则"}),o(e,{href:"#透明的开发",title:"透明的开发"}),o(e,{href:"#Bugs",title:"Bugs"}),o(e,{href:"#Features",title:"Features"}),o(e,{href:"#第一次贡献",title:"第一次贡献"}),o(e,{href:"#贡献代码",title:"贡献代码"}),o(e,{href:"#如何提出 Pull Request",title:"如何提出 Pull Request"}),o(e,{href:"#开发流程",title:"开发流程"}),o(e,{href:"#代码风格",title:"代码风格"}),o(e,{href:"#Commit",title:"Commit"},{default:s(()=>[o(e,{href:"#提交格式",title:"提交格式"}),o(e,{href:"#Type",title:"Type"}),o(e,{href:"#Scope",title:"Scope"}),o(e,{href:"#Subject",title:"Subject"}),o(e,{href:"#Body",title:"Body"}),o(e,{href:"#Footer",title:"Footer"})]),_:1})]),_:1}),h,m])}const x=c(p,[["render",g]]);export{x as default};