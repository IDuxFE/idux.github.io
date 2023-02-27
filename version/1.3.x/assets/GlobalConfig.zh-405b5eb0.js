import{I as e,a as l}from"./index-30cd6a35.js";import{_ as p}from"./index-4edbd2bb.js";import{a9 as u,y as s,aa as o,ab as n,ad as a,a8 as i}from"./vendor-1c103b38.js";const k={},r={class:"markdown site-global-docs"},g=n("h1",null,[a("全局配置"),n("span",{class:"subtitle"})],-1),f=n("section",{class:"markdown"},[n("p",null,[a("我们给众多组件添加了"),n("strong",null,"全局配置"),a("功能。")]),n("p",null,"可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码。"),n("p",null,"支持在初始化时设置全局配置项，同时也支持局部覆盖全局配置项。"),n("h2",{id:"如何使用"},[n("span",null,"如何使用"),n("a",{onclick:"window.location.hash = '如何使用'",class:"anchor"},"#")]),n("h3",{id:"初始化设置"},[n("span",null,"初始化设置"),n("a",{onclick:"window.location.hash = '初始化设置'",class:"anchor"},"#")]),n("p",null,[a("如果你想要在全局范围内为某个组件提供默认配置项，请在使用 "),n("code",null,"createGlobalConfig"),a(", 进行覆盖，例如：")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createApp "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" merge "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'lodash-es'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createGlobalConfig"),n("span",{class:"token punctuation"},","),a(" seerConfig "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@idux/components/config'"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loadIconDynamically"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("iconName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/idux-icons/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("iconName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".svg"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),a("res "),n("span",{class:"token operator"},"=>"),a(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"text"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"const"),a(" customConfig "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" loadIconDynamically "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token comment"},"// 如果是 seer 主题"),a(`
`),n("span",{class:"token comment"},"// customConfig = merge(seerConfig, { icon: { loadIconDynamically } })"),a(`
`),n("span",{class:"token keyword"},"const"),a(" globalConfig "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),a("customConfig"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),a("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("globalConfig"),n("span",{class:"token punctuation"},")")])]),n("h3",{id:"局部覆盖"},[n("span",null,"局部覆盖"),n("a",{onclick:"window.location.hash = '局部覆盖'",class:"anchor"},"#")]),n("p",null,[a("如果你只想要在某个组件内提供默认配置项，就在当前组件内使用 "),n("code",null,"useGlobalConfig"),a(" 进行覆盖，请参考下面的示例：")]),n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Default size of form: {{ formConfig.size }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxSpace")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxButton")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("changeFormConfig({ size: 'sm' })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxButton")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxButton")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("changeFormConfig({ size: 'md' })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Medium"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxButton")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxButton")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("changeFormConfig({ size: 'lg' })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxButton")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxSpace")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxForm")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxFormItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxInput")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxFormItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxFormItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxInput")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxFormItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxForm")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@idux/components/config'"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("formConfig"),n("span",{class:"token punctuation"},","),a(" changeFormConfig"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'form'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lg'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"createGlobalConfig"},[n("span",null,"createGlobalConfig"),n("a",{onclick:"window.location.hash = 'createGlobalConfig'",class:"anchor"},"#")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"DeepPartialGlobalConfig"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"K"),a(),n("span",{class:"token keyword"},"in"),a(" GlobalConfigKey"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Partial"),n("span",{class:"token operator"},"<"),a("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"K"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},`/**
 * 创建全局配置插件
 *
 * @param config 用于覆盖默认的全局配置
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"createGlobalConfig"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("config"),n("span",{class:"token operator"},":"),a(" DeepPartialGlobalConfig"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" Plugin")])]),n("h3",{id:"useGlobalConfig"},[n("span",null,"useGlobalConfig"),n("a",{onclick:"window.location.hash = 'useGlobalConfig'",class:"anchor"},"#")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},`/**
 *
 * @param compName 组件名称
 * @param change 可选的参数，用于覆盖某个组件的全局配置，仅在当前组件(调用者)作用域内生效
 */`),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),a(),n("span",{class:"token keyword"},"extends"),a(" GlobalConfigKey"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),a("compName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(" Readonly"),n("span",{class:"token operator"},"<"),a("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),a(),n("span",{class:"token keyword"},"extends"),a(" GlobalConfigKey"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),a(`
  compName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),a(`
  config`),n("span",{class:"token operator"},":"),a(" Partial"),n("span",{class:"token operator"},"<"),a("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Readonly"),n("span",{class:"token operator"},"<"),a("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("config"),n("span",{class:"token operator"},":"),a(" Partial"),n("span",{class:"token operator"},"<"),a("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"]")])]),n("blockquote",null,[n("p",null,[a("需要注意的是: "),n("code",null,"useGlobalConfig"),a(" 参数类型不同的返回结果也不同。")])]),n("h2",{id:"FAQ"},[n("span",null,"FAQ"),n("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")]),n("h3",{id:"优先级说明"},[n("span",null,"优先级说明"),n("a",{onclick:"window.location.hash = '优先级说明'",class:"anchor"},"#")]),n("p",null,"对于任何一个属性来说，各个来源的值的优先级如下："),n("ol",null,[n("li",null,[a("组件的某个实例单独设置的值, 例如："),n("code",null,'<IxButton size="sm" />')]),n("li",null,[a("业务组件通过 "),n("code",null,"useGlobalConfig"),a(" 覆盖的全局配置, 例如代码演示中的示例")]),n("li",null,[a("通过 "),n("code",null,"createGlobalConfig"),a(" 设置的全局配置")]),n("li",null,[n("code",null,"@idux"),a(" 提供的默认全局配置")])]),n("h3",{id:"设置 <code>@idux/pro</code> 中组件的全局配置"},[n("span",null,[a("设置 "),n("code",null,"@idux/pro"),a(" 中组件的全局配置")]),n("a",{onclick:"window.location.hash = '设置 <code>@idux/pro</code> 中组件的全局配置'",class:"anchor"},"#")]),n("p",null,[a("在 "),n("code",null,"@idux/pro"),a(" 中也同样提供了 "),n("code",null,"createGlobalConfig"),a(" 和 "),n("code",null,"useGlobalConfig"),a(" 两个 API。")]),n("p",null,[a("也就是说，把上面例子中的 "),n("code",null,"@idux/components/config"),a(" 替换成 "),n("code",null,"@idux/pro/config"),a(" 即可。")]),n("h3",{id:"查看所有可用的全局配置项"},[n("span",null,"查看所有可用的全局配置项"),n("a",{onclick:"window.location.hash = '查看所有可用的全局配置项'",class:"anchor"},"#")]),n("p",null,"下列接口提供的类型定义信息能够帮助你找到所有支持全局配置项的组件和属性。"),n("ul",null,[n("li",null,[a("对于 "),n("code",null,"@idux/components"),a(" 的组件，可以查看"),n("a",{href:"https://github.com/IDuxFE/idux/blob/master/packages/components/config/src/types.ts",target:"_blank",rel:"noopener"},"GlobalConfig")]),n("li",null,[a("对于 "),n("code",null,"@idux/pro"),a(" 的组件，可以查看"),n("a",{href:"https://github.com/IDuxFE/idux/blob/master/packages/pro/config/src/types.ts",target:"_blank",rel:"noopener"},"GlobalConfig")])]),n("p",null,"另外，每个组件的文档都会指出哪些属性可以通过全局配置项的方式指定。")],-1);function d(m,h){const t=l,c=e;return i(),u("article",r,[s(c,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[s(t,{href:"#如何使用",title:"如何使用"},{default:o(()=>[s(t,{href:"#初始化设置",title:"初始化设置"}),s(t,{href:"#局部覆盖",title:"局部覆盖"})]),_:1}),s(t,{href:"#API",title:"API"},{default:o(()=>[s(t,{href:"#createGlobalConfig",title:"createGlobalConfig"}),s(t,{href:"#useGlobalConfig",title:"useGlobalConfig"})]),_:1}),s(t,{href:"#FAQ",title:"FAQ"},{default:o(()=>[s(t,{href:"#优先级说明",title:"优先级说明"}),s(t,{href:"#设置 `@idux/pro` 中组件的全局配置",title:"设置 `@idux/pro` 中组件的全局配置"}),s(t,{href:"#查看所有可用的全局配置项",title:"查看所有可用的全局配置项"})]),_:1})]),_:1}),g,f])}const w=p(k,[["render",d]]);export{w as default};
