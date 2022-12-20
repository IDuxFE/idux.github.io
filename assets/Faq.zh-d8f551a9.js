import{I as l,a as c}from"./index-65dcb36d.js";import{_ as t}from"./index-32d407ed.js";import{a9 as u,y as n,aa as r,ab as o,ad as e,a8 as d}from"./vendor-730bc5d6.js";const p={},i={class:"markdown site-global-docs"},k=o("h1",null,[e("常见问题"),o("span",{class:"subtitle"})],-1),h=o("section",{class:"markdown"},[o("h2",{id:"本地和官方文档的样式不一致？"},[o("span",null,"本地和官方文档的样式不一致？"),o("a",{onclick:"window.location.hash = '本地和官方文档的样式不一致？'",class:"anchor"},"#")]),o("p",null,[e("请确认是否正确引入了组件样式，请参考: "),o("a",{href:"/docs/getting-started/zh"},"快速上手"),e(" 和 "),o("a",{href:"/docs/customize-theme/zh"},"定制主题"),e(" 进行一些必要的配置。")]),o("p",null,[e("需要强调的是，在没有特殊需求的情况下，请使用组件库提供的 reset 样式，"),o("code",null,'"@idux/components/style/core/reset.default.css"'),e("。如果没有引入它，务必确认是否提供了必要的全局样式，参见"),o("a",{href:"https://github.com/IDuxFE/idux/issues/1194",target:"_blank",rel:"noopener"},"#1194"),e("。")]),o("h2",{id:"无法通过 <code>useModal</code> 创建弹窗组件？(<code>useMessage</code>, <code>useDrawer</code>...)"},[o("span",null,[e("无法通过 "),o("code",null,"useModal"),e(" 创建弹窗组件？("),o("code",null,"useMessage"),e(", "),o("code",null,"useDrawer"),e("...)")]),o("a",{onclick:"window.location.hash = '无法通过 <code>useModal</code> 创建弹窗组件？(<code>useMessage</code>, <code>useDrawer</code>...)'",class:"anchor"},"#")]),o("p",null,[e("如果你想通过 useModal 来创建对话框，则你需要把组件包裹在 "),o("code",null,"IxModalProvider"),e(" 内部，因为这样才不会丢失应用的上下文信息, 参见"),o("a",{href:"/components/modal/zh?tab=api#IxModalProvider"},"IxModalProvider"),e("。")]),o("p",null,[e("其他通过 "),o("code",null,"useXxx"),e(" 创建的组件也是如此。")]),o("h2",{id:"在组件外(如：<code>ts</code> 文件/<code>setup</code> 函数外)单独使用 <code>useModal</code>, <code>useMessage</code>, <code>useDrawer</code>..."},[o("span",null,[e("在组件外(如："),o("code",null,"ts"),e(" 文件/"),o("code",null,"setup"),e(" 函数外)单独使用 "),o("code",null,"useModal"),e(", "),o("code",null,"useMessage"),e(", "),o("code",null,"useDrawer"),e("...")]),o("a",{onclick:"window.location.hash = '在组件外(如：<code>ts</code> 文件/<code>setup</code> 函数外)单独使用 <code>useModal</code>, <code>useMessage</code>, <code>useDrawer</code>...'",class:"anchor"},"#")]),o("p",null,[o("code",null,"useXxx"),e(" 的实现原理是利用 "),o("code",null,"provide/inject"),e(" 来拿到 "),o("code",null,"XxxProvider"),e(" 组件提供的方法来创建组件，理论上它只能在组件的 "),o("code",null,"setup"),e(" 中使用。")]),o("p",null,[e("但是我们可以通过 "),o("code",null,"ref"),e(" 将 "),o("code",null,"XxxProvider"),e(" 的实例引用给保存起来，给到外部使用，可以参考："),o("a",{href:"https://github.com/IDuxFE/idux-setup/blob/main/src/utils/iduxProviders.ts",target:"_blank",rel:"noopener"},"iduxProviders.ts"),e(", 然后就可以 "),o("code",null,"import { Modal } from '@utils'"),e(" 来使用了。")]),o("h2",{id:"Modal 和 Drawer 组件在 Chrome 版本 < 87 时，无法正常显示？"},[o("span",null,"Modal 和 Drawer 组件在 Chrome 版本 < 87 时，无法正常显示？"),o("a",{onclick:"window.location.hash = 'Modal 和 Drawer 组件在 Chrome 版本 < 87 时，无法正常显示？'",class:"anchor"},"#")]),o("p",null,[e("如果遇到该问题：请检查一下 "),o("code",null,".ix-modal-wrapper"),e(" 的样式，是不是被压缩成了 "),o("code",null,"inset: 0"),e(", 参见"),o("a",{href:"https://github.com/IDuxFE/idux/issues/1038",target:"_blank",rel:"noopener"},"#1038"),e("。")]),o("h2",{id:"在浮层组件中打开另一个浮层组件，导致原浮层消失？(如：<code>Select</code>, <code>Dropdown</code>, <code>Popover</code>...)"},[o("span",null,[e("在浮层组件中打开另一个浮层组件，导致原浮层消失？(如："),o("code",null,"Select"),e(", "),o("code",null,"Dropdown"),e(", "),o("code",null,"Popover"),e("...)")]),o("a",{onclick:"window.location.hash = '在浮层组件中打开另一个浮层组件，导致原浮层消失？(如：<code>Select</code>, <code>Dropdown</code>, <code>Popover</code>...)'",class:"anchor"},"#")]),o("p",null,[e("可以通过设置 "),o("code",null,"overlayContainer"),e(" 来解决，把浮层插入到当前的 "),o("code",null,"DOM"),e(" 内，而不是默认的 "),o("code",null,"body"),e(" 上。"),o("br"),e("例如你可以设置 "),o("code",null,"<IxSelect :overlayContainer='trigger => trigger.parentElement' />"),e(" 在 Popover 中渲染下拉框组件。"),o("br"),e("你也可以通过在全局配置中设置来进行全局覆盖，例如：")]),o("pre",{class:"language-ts"},[o("code",null,[e(`
`),o("span",{class:"token comment"},"// 需要特别注意的是，这里的 `trigger` 可能为空，因为该配置对于 `Modal, Drawer` 等组件同样生效，此类组件不存在 `trigger` 元素。"),e(`
`),o("span",{class:"token keyword"},"const"),e(),o("span",{class:"token function-variable function"},"overlayContainer"),e(),o("span",{class:"token operator"},"="),e(),o("span",{class:"token punctuation"},"("),e("trigger"),o("span",{class:"token operator"},"?"),o("span",{class:"token operator"},":"),e(" Element"),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(" trigger"),o("span",{class:"token operator"},"?."),e(`parentElement
`),o("span",{class:"token comment"},"// 也可以在局部组件中使用 useGlobalConfig 来设置"),e(`
`),o("span",{class:"token function"},"createGlobalConfig"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e(" common"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" overlayContainer "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")")])]),o("h2",{id:"如何自定义控制浮层的 <code>z-index</code>? 通常在与其他组件库混用，或者使用了微前端框架的情况下需要。"},[o("span",null,[e("如何自定义控制浮层的 "),o("code",null,"z-index"),e("? 通常在与其他组件库混用，或者使用了微前端框架的情况下需要。")]),o("a",{onclick:"window.location.hash = '如何自定义控制浮层的 <code>z-index</code>? 通常在与其他组件库混用，或者使用了微前端框架的情况下需要。'",class:"anchor"},"#")]),o("p",null,[e("首先我们大多数浮层组件都提供了 "),o("code",null,"zIndex"),e(" 的配置（如果没有，可以给我们提供 issue 或者直接 PR），你可以精确的控制它们。"),o("br"),e("如果你觉得控制每一个组件的 "),o("code",null,"zIndex"),e(" 比较麻烦，我们也提供了全局配置以便于你进行全局统一管理，例如：")]),o("pre",{class:"language-ts"},[o("code",null,[o("span",{class:"token keyword"},"const"),e(" initZIndex "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token number"},"1000"),e(`
`),o("span",{class:"token keyword"},"const"),e(" indexCount "),o("span",{class:"token operator"},"="),e(),o("span",{class:"token number"},"0"),e(`
`),o("span",{class:"token keyword"},"const"),e(),o("span",{class:"token function-variable function"},"overlayZIndex"),e(),o("span",{class:"token operator"},"="),e(),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),e(),o("span",{class:"token operator"},"=>"),e(" initZIndex "),o("span",{class:"token operator"},"+"),e(" indexCount"),o("span",{class:"token operator"},"++"),e(`
`),o("span",{class:"token comment"},"// 也可以在局部组件中使用 useGlobalConfig 来设置"),e(`
`),o("span",{class:"token function"},"createGlobalConfig"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e(" common"),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"{"),e(" overlayZIndex "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")")])]),o("h2",{id:"图标不显示？如何更新图标？"},[o("span",null,"图标不显示？如何更新图标？"),o("a",{onclick:"window.location.hash = '图标不显示？如何更新图标？'",class:"anchor"},"#")]),o("p",null,[e("请务必花几分钟时间仔细阅读"),o("a",{href:"/docs/getting-started/zh"},"快速上手"),e(" 和 "),o("a",{href:"/components/icon/zh?tab=api#FAQ"},"图标的动态加载与静态加载"),e(" 进行一些必要的配置。")]),o("p",null,[e("如果你使用了动态加载，可以使用 "),o("code",null,"vite-plugin-static-copy"),e(" 或者 "),o("code",null,"CopyWebpackPlugin"),e(" 来自动更新图标。")]),o("pre",{class:"language-ts"},[o("code",null,[o("span",{class:"token comment"},"// vite.config.ts"),e(`
`),o("span",{class:"token keyword"},"import"),e(),o("span",{class:"token punctuation"},"{"),e(" viteStaticCopy "),o("span",{class:"token punctuation"},"}"),e(),o("span",{class:"token keyword"},"from"),e(),o("span",{class:"token string"},'"vite-plugin-static-copy"'),o("span",{class:"token punctuation"},";"),e(`

`),o("span",{class:"token comment"},"// https://vitejs.dev/config/"),e(`
`),o("span",{class:"token keyword"},"export"),e(),o("span",{class:"token keyword"},"default"),e(),o("span",{class:"token function"},"defineConfig"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e(`
  plugins`),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"["),e(`
    `),o("span",{class:"token operator"},"..."),e(`
    `),o("span",{class:"token function"},"viteStaticCopy"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),e(`
      targets`),o("span",{class:"token operator"},":"),e(),o("span",{class:"token punctuation"},"["),e(`
        `),o("span",{class:"token punctuation"},"{"),e(`
          src`),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},'"./node_modules/@idux/components/icon/assets/*.svg"'),o("span",{class:"token punctuation"},","),e(`
          dest`),o("span",{class:"token operator"},":"),e(),o("span",{class:"token string"},'"idux-icons"'),o("span",{class:"token punctuation"},","),e(),o("span",{class:"token comment"},"// `loadIconDynamically` 设置的目录名称"),e(`
        `),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),e(`
      `),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e(`
    `),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},","),e(`
  `),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),e(`
`),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";")])]),o("h2",{id:"<code>useFormGroup</code> 怎么使用, 如何自定义验证器？(<code>useFormControl</code>, <code>useFormArray</code>)"},[o("span",null,[o("code",null,"useFormGroup"),e(" 怎么使用, 如何自定义验证器？("),o("code",null,"useFormControl"),e(", "),o("code",null,"useFormArray"),e(")")]),o("a",{onclick:"window.location.hash = '<code>useFormGroup</code> 怎么使用, 如何自定义验证器？(<code>useFormControl</code>, <code>useFormArray</code>)'",class:"anchor"},"#")]),o("p",null,[e("请花一点时间仔细阅读 "),o("a",{href:"https://idux.site/cdk/forms/zh?tab=overview",target:"_blank",rel:"noopener"},"Forms 表单"),e(" 的"),o("strong",null,"概要说明"),e("文档。")]),o("h2",{id:"表单输入类组件的 <code>value</code> 和 <code>disabled</code> 设置不生效？"},[o("span",null,[e("表单输入类组件的 "),o("code",null,"value"),e(" 和 "),o("code",null,"disabled"),e(" 设置不生效？")]),o("a",{onclick:"window.location.hash = '表单输入类组件的 <code>value</code> 和 <code>disabled</code> 设置不生效？'",class:"anchor"},"#")]),o("p",null,[e("请确认是否使用了 "),o("code",null,"control"),e(" 来接管了 "),o("code",null,"value"),e(" 和 "),o("code",null,"disabled"),e(" 的控制，此时这两个 API 无效，请使用 "),o("code",null,"FormControl"),e(" 提供的 "),o("code",null,"setValue"),e(", "),o("code",null,"getValue"),e(", "),o("code",null,"watchValue"),e(", "),o("code",null,"enable"),e(", "),o("code",null,"disable"),e(" 等一系列方法来操作和访问状态。")]),o("h2",{id:"缺少 TypeScript 的类型定义？或者虽然定义了但是没有 export？"},[o("span",null,"缺少 TypeScript 的类型定义？或者虽然定义了但是没有 export？"),o("a",{onclick:"window.location.hash = '缺少 TypeScript 的类型定义？或者虽然定义了但是没有 export？'",class:"anchor"},"#")]),o("p",null,"为了给用户提供最佳的使用体验，我们为此付出了诸多努力，基本上能提供的类型我们都提供了，可能会有一些遗漏，欢迎给我们提 issue 或者直接 PR 帮助我们完善。"),o("h2",{id:"文档中没有提供的 API 我可以使用吗？"},[o("span",null,"文档中没有提供的 API 我可以使用吗？"),o("a",{onclick:"window.location.hash = '文档中没有提供的 API 我可以使用吗？'",class:"anchor"},"#")]),o("p",null,"不推荐使用，我们不会对文档中没有公开的 API 保证稳定性，它很可能在某个版本中被移除或者修改。"),o("p",null,"如果你确实需要使用，可以给我们提 issue 让我们开放出来，否则在版本升级后，请自行验证确保升级后隐藏的接口依旧可用。"),o("h2",{id:"业务中怎么调试 <code>@idux</code> 的源码?"},[o("span",null,[e("业务中怎么调试 "),o("code",null,"@idux"),e(" 的源码?")]),o("a",{onclick:"window.location.hash = '业务中怎么调试 <code>@idux</code> 的源码?'",class:"anchor"},"#")]),o("p",null,[e("我们每个组件都会打包成一个单独基于 "),o("code",null,"esm"),e(" 的 "),o("code",null,"js"),e(" 文件, 而且是未经压缩的，是具有可读性的代码，所以只需要像调试业务代码一样就好了。")]),o("ul",null,[o("li",null,"打开控制台，切换到源码面板。"),o("li",null,[e("按 "),o("code",null,"ctrl"),e(" + "),o("code",null,"p"),e(" 搜索你想要调试的组件，例如输入："),o("code",null,"@idux/components/forms/index"),e(" 就能调试 "),o("code",null,"IxForm"),e(" 和 "),o("code",null,"IxFormItem"),e(" 组件以及提供的一些函数。")])])],-1);function m(x,w){const s=c,a=l;return d(),u("article",i,[n(a,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[n(s,{href:"#本地和官方文档的样式不一致？",title:"本地和官方文档的样式不一致？"}),n(s,{href:"#无法通过 `useModal` 创建弹窗组件？(`useMessage`, `useDrawer`...)",title:"无法通过 `useModal` 创建弹窗组件？(`useMessage`, `useDrawer`...)"}),n(s,{href:"#在组件外(如：`ts` 文件/`setup` 函数外)单独使用 `useModal`, `useMessage`, `useDrawer`...",title:"在组件外(如：`ts` 文件/`setup` 函数外)单独使用 `useModal`, `useMessage`, `useDrawer`..."}),n(s,{href:"#Modal 和 Drawer 组件在 Chrome 版本 < 87 时，无法正常显示？",title:"Modal 和 Drawer 组件在 Chrome 版本 < 87 时，无法正常显示？"}),n(s,{href:"#在浮层组件中打开另一个浮层组件，导致原浮层消失？(如：`Select`, `Dropdown`, `Popover`...)",title:"在浮层组件中打开另一个浮层组件，导致原浮层消失？(如：`Select`, `Dropdown`, `Popover`...)"}),n(s,{href:"#如何自定义控制浮层的 `z-index`? 通常在与其他组件库混用，或者使用了微前端框架的情况下需要。",title:"如何自定义控制浮层的 `z-index`? 通常在与其他组件库混用，或者使用了微前端框架的情况下需要。"}),n(s,{href:"#图标不显示？如何更新图标？",title:"图标不显示？如何更新图标？"}),n(s,{href:"#`useFormGroup` 怎么使用, 如何自定义验证器？(`useFormControl`, `useFormArray`)",title:"`useFormGroup` 怎么使用, 如何自定义验证器？(`useFormControl`, `useFormArray`)"}),n(s,{href:"#表单输入类组件的 `value` 和 `disabled` 设置不生效？",title:"表单输入类组件的 `value` 和 `disabled` 设置不生效？"}),n(s,{href:"#缺少 TypeScript 的类型定义？或者虽然定义了但是没有 export？",title:"缺少 TypeScript 的类型定义？或者虽然定义了但是没有 export？"}),n(s,{href:"#文档中没有提供的 API 我可以使用吗？",title:"文档中没有提供的 API 我可以使用吗？"}),n(s,{href:"#业务中怎么调试 `@idux` 的源码?",title:"业务中怎么调试 `@idux` 的源码?"})]),_:1}),k,h])}const b=t(p,[["render",m]]);export{b as default};
