import{I as C,a as D}from"./index-7ea5d894.js";import{_ as v,I as T}from"./GlobalCodeBox-52c4d4dd.js";import{v as w,b as _,aa as l,ab as r,y as a,ac as c,af as n,F as S,ad as t,i as I,ak as f,aj as m,ae as g,as as A,ao as M,an as V,w as z,H as x,I as b}from"./vendor-6b27028c.js";import{_ as d,c as y,J as $,a as E}from"./index-ab43774a.js";const L=w({setup(){const s=_(0),p=o=>{console.log(`Basic Offset status change : ${o}`)},e=_({top:100,left:100});return{numberOffset:s,onChange:p,objectOffset:e}}}),P=t("br",null,null,-1);function R(s,p,e,o,h,k){const u=y,i=$;return l(),r(S,null,[a(i,{offset:s.numberOffset,onChange:s.onChange},{default:c(()=>[a(u,{onClick:p[0]||(p[0]=B=>s.numberOffset+=20)},{default:c(()=>[n("Number Offset")]),_:1})]),_:1},8,["offset","onChange"]),P,a(i,{offset:s.objectOffset},{default:c(()=>[a(u,null,{default:c(()=>[n("Object Offset")]),_:1})]),_:1},8,["offset"])],64)}const Q=d(L,[["render",R]]),G=w({name:"Basic",components:{"raw-demo":Q},setup(){const{lang:s}=I(E);return{lang:s}}}),H={key:0},J={key:1},U=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxAffix")]),n(),t("span",{class:"token attr-name"},":offset"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("numberOffset"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@Change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onChange"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("numberOffset += 20"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Number Offset"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxAffix")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("br")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxAffix")]),n(),t("span",{class:"token attr-name"},":offset"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("objectOffset"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n("Object Offset"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxAffix")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" numberOffset "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onChange"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"isAffix"),t("span",{class:"token operator"},":"),n(" boolean")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"Basic Offset status change : "),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("isAffix"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" objectOffset "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"top"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"left"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"100"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(" numberOffset"),t("span",{class:"token punctuation"},","),n(" onChange"),t("span",{class:"token punctuation"},","),n(" objectOffset "),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function K(s,p,e,o,h,k){const u=f("raw-demo"),i=v;return l(),m(i,{packageName:"components",componentName:"affix",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22numberOffset%22%20%40Change%3D%22onChange%22%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22numberOffset%20%2B%3D%2020%22%3ENumber%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22objectOffset%22%3E%0A%20%20%20%20%3CIxButton%3EObject%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberOffset%20%3D%20ref(0)%0A%20%20%20%20const%20onChange%20%3D%20(isAffix%3A%20boolean)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60Basic%20Offset%20status%20change%20%3A%20%24%7BisAffix%7D%60)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20objectOffset%20%3D%20ref(%7B%20top%3A%20100%2C%20left%3A%20100%20%7D)%0A%0A%20%20%20%20return%20%7B%20numberOffset%2C%20onChange%2C%20objectOffset%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"基本使用":"Basic usage"},{description:c(()=>[s.lang==="zh"?(l(),r("p",H,"最简单的用法。")):g("",!0),s.lang==="en"?(l(),r("p",J,"The simplest usage.")):g("",!0)]),rawCode:c(()=>[a(u)]),highlightCode:c(()=>[U]),_:1},8,["title"])}const W=d(G,[["render",K]]);const X={},Y={class:"container"},Z={class:"background"};function tt(s,p){const e=y,o=$;return l(),r("div",Y,[t("div",Z,[a(o,{target:".container",offset:{top:0,left:0}},{default:c(()=>[a(e,{mode:"primary"},{default:c(()=>[n("Custom target container")]),_:1})]),_:1})])])}const nt=d(X,[["render",tt],["__scopeId","data-v-4664c093"]]),st=w({name:"Target",components:{"raw-demo":nt},setup(){const{lang:s}=I(E);return{lang:s}}}),at={key:0},ot=t("code",null,"target",-1),et=t("code",null,"IxAffix",-1),ct=t("code",null,"window",-1),pt={key:1},lt=t("code",null,"IxAffix",-1),ut=t("code",null,"window",-1),it=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("container"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("background"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxAffix")]),n(),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(".container"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":offset"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ top: 0, left: 0 }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Custom target container"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxAffix")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("less"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"scoped"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".container"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"overflow"),t("span",{class:"token punctuation"},":"),n(" scroll"),t("span",{class:"token punctuation"},";"),n(`

  `),t("span",{class:"token selector"},".background"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"padding-top"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"padding-left"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 300px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 120%"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"rgb"),t("span",{class:"token punctuation"},"("),n("200"),t("span",{class:"token punctuation"},","),n(" 200"),t("span",{class:"token punctuation"},","),n(" 200"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function rt(s,p,e,o,h,k){const u=f("raw-demo"),i=v;return l(),m(i,{packageName:"components",componentName:"affix",demoName:"Target",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22background%22%3E%0A%20%20%20%20%20%20%3CIxAffix%20target%3D%22.container%22%20%3Aoffset%3D%22%7B%20top%3A%200%2C%20left%3A%200%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3ECustom%20target%20container%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3C%2FIxAffix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.container%20%7B%0A%20%20height%3A%20100px%3B%0A%20%20overflow%3A%20scroll%3B%0A%0A%20%20.background%20%7B%0A%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20width%3A%20120%25%3B%0A%20%20%20%20background%3A%20rgb(200%2C%20200%2C%20200)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:s.lang==="zh"?"自定义目标容器":"custom target container"},{description:c(()=>[s.lang==="zh"?(l(),r("p",at,[n("通过 "),ot,n(" 设置 "),et,n(" 需要监听其滚动事件的元素，默认为 "),ct,n("。")])):g("",!0),s.lang==="en"?(l(),r("p",pt,[n("Set a target for "),lt,n(", which is listen to scroll event of target element (default is "),ut,n(").")])):g("",!0)]),rawCode:c(()=>[a(u)]),highlightCode:c(()=>[it]),_:1},8,["title"])}const dt=d(st,[["render",rt]]),kt={},ft={class:"markdown site-doc-api"},ht=t("h3",{id:"IxAffix"},[t("span",null,"IxAffix"),t("a",{onclick:"window.location.hash = 'IxAffix'",class:"anchor"},"#")],-1),_t=t("h4",{id:"AffixProps"},[t("span",null,"AffixProps"),t("a",{onclick:"window.location.hash = 'AffixProps'",class:"anchor"},"#")],-1),mt=A("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>offset</code></td><td>距离容器顶部的偏移量，到达时会触发affix</td><td><code>number | { top:number, bottom:number, left:number, right:number }</code></td><td><code>0</code></td><td>-</td><td>-</td></tr><tr><td><code>target</code></td><td>需要监听其滚动事件的元素</td><td><code>string | HTMLElement | () =&gt; string | HTMLElement</code></td><td><code>window</code></td><td>-</td><td>-</td></tr><tr><td><code>onChange</code></td><td>固定状态改变时触发</td><td><code>(value: boolean) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1),gt=t("h4",{id:"AffixSlots"},[t("span",null,"AffixSlots"),t("a",{onclick:"window.location.hash = 'AffixSlots'",class:"anchor"},"#")],-1),At=A("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义显示内容</td><td>-</td><td>-</td></tr></tbody></table>",1),xt=t("h4",{id:"AffixMethods"},[t("span",null,"AffixMethods"),t("a",{onclick:"window.location.hash = 'AffixMethods'",class:"anchor"},"#")],-1),bt=A("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>update</code></td><td>重新计算affix的样式和位置</td><td>-</td><td>-</td></tr></tbody></table>",1),Ct=t("h3",{id:"FAQ"},[t("span",null,"FAQ"),t("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")],-1),Dt=t("h4",{id:"Affix 使用<code>v-show</code>进行动态显隐时，样式的计算会有问题"},[t("span",null,[n("Affix 使用"),t("code",null,"v-show"),n("进行动态显隐时，样式的计算会有问题")]),t("a",{onclick:"window.location.hash = 'Affix 使用<code>v-show</code>进行动态显隐时，样式的计算会有问题'",class:"anchor"},"#")],-1),wt=A('<p>从性能角度考虑，监听<code>dom</code>的改变重新计算<code>affix</code>样式会带来较大的开销，如果希望动态显隐，可以改用<code>v-if</code>实现，或者在<code>v-show</code>变化后，手动调用<code>affix</code>的<code>update</code>方法重新计算样式。</p><p>相关issue: <a href="https://github.com/IDuxFE/idux/issues/849" target="_blank" rel="noopener">#849</a></p>',2);function Bt(s,p){const e=D,o=C;return l(),r("section",ft,[a(o,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[a(e,{href:"#IxAffix",title:"IxAffix"},{default:c(()=>[a(e,{href:"#AffixProps",title:"AffixProps"}),a(e,{href:"#AffixSlots",title:"AffixSlots"}),a(e,{href:"#AffixMethods",title:"AffixMethods"})]),_:1}),a(e,{href:"#FAQ",title:"FAQ"},{default:c(()=>[a(e,{href:"#Affix 使用`v-show`进行动态显隐时，样式的计算会有问题",title:"Affix 使用`v-show`进行动态显隐时，样式的计算会有问题"})]),_:1})]),_:1}),ht,_t,mt,gt,At,xt,bt,Ct,Dt,wt])}const vt=d(kt,[["render",Bt]]),It={},yt={class:"markdown site-doc-design"},$t=t("h2",{id:"组件定义"},[t("span",null,"组件定义"),t("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),Et=t("p",null,"将内容固钉在某个位置的容器组件",-1),Ft=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),Ot=t("p",null,"容器滚动到某个位置时，需要固定住某些内容的位置，类似于sticky的效果",-1);function Nt(s,p){const e=D,o=C;return l(),r("section",yt,[a(o,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[a(e,{href:"#组件定义",title:"组件定义"}),a(e,{href:"#使用场景",title:"使用场景"})]),_:1}),$t,Et,Ft,Ot])}const jt=d(It,[["render",Nt]]),qt={name:"DocsComponentsAffix",components:{DemoBasic:W,DemoTarget:dt,ApiDocs:vt,DesignDocs:jt},setup(){var k;const s=M(),p=V(),e=_((k=s.query.tab)!=null?k:"demo");z(e,u=>{p.push({query:{tab:u}})});const o=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),h=_(!1);return{checkedDoc:e,docRadioData:o,showDevDemo:h}}},Tt={class:"site-doc-wrapper"},St={class:"markdown site-doc-header"},Mt=t("h1",null,[n("Affix"),t("span",{class:"subtitle"},"固钉")],-1),Vt=t("div",{class:"markdown site-doc-description"},null,-1),zt={class:"site-doc-demo"};function Lt(s,p,e,o,h,k){const u=T,i=D,B=C,F=f("DemoBasic"),O=f("DemoTarget"),N=f("ApiDocs"),j=f("DesignDocs");return l(),r("article",Tt,[t("section",St,[Mt,Vt,a(u,{value:o.checkedDoc,"onUpdate:value":p[0]||(p[0]=q=>o.checkedDoc=q),dataSource:o.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),x(t("section",zt,[a(B,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[(o.showDevDemo,l(),m(i,{key:0,href:"#components-affix-basic",title:"基本使用"})),(o.showDevDemo,l(),m(i,{key:1,href:"#components-affix-target",title:"自定义目标容器"}))]),_:1}),a(F),a(O)],512),[[b,o.checkedDoc==="demo"]]),x(a(N,null,null,512),[[b,o.checkedDoc==="api"]]),x(a(j,null,null,512),[[b,o.checkedDoc==="design"]])])}const Ht=d(qt,[["render",Lt]]);export{Ht as default};
