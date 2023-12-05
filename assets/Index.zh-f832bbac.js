import{I as b,a as D}from"./index-85bedc5a.js";import{_ as v,I as S}from"./GlobalCodeBox-e39a8517.js";import{l as w,r as g,ag as l,ah as i,p as s,ai as c,am as n,F as M,ak as t,x as I,ar as k,aq as A,al as x,ay as C,ax as V,aj as z,w as L,S as _,U as m}from"./vendor-deae6a9f.js";import{_ as d,c as $,J as y,a as E}from"./index-c73ba825.js";const P=w({setup(){const a=g(0),p=e=>{console.log(`Basic Offset status change : ${e}`)},o=g({top:100,left:100});return{numberOffset:a,onChange:p,objectOffset:o}}}),R=t("br",null,null,-1);function Q(a,p,o,e,h,f){const u=$,r=y;return l(),i(M,null,[s(r,{offset:a.numberOffset,onChange:a.onChange},{default:c(()=>[s(u,{onClick:p[0]||(p[0]=B=>a.numberOffset+=20)},{default:c(()=>[n("Number Offset")]),_:1})]),_:1},8,["offset","onChange"]),R,s(r,{offset:a.objectOffset},{default:c(()=>[s(u,null,{default:c(()=>[n("Object Offset")]),_:1})]),_:1},8,["offset"])],64)}const G=d(P,[["render",Q]]),H=w({name:"Basic",components:{"raw-demo":G},setup(){const{lang:a}=I(E);return{lang:a}}}),U={key:0},J={key:1},K=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1);function W(a,p,o,e,h,f){const u=k("raw-demo"),r=v;return l(),A(r,{packageName:"components",componentName:"affix",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22numberOffset%22%20%40Change%3D%22onChange%22%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22numberOffset%20%2B%3D%2020%22%3ENumber%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22objectOffset%22%3E%0A%20%20%20%20%3CIxButton%3EObject%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberOffset%20%3D%20ref(0)%0A%20%20%20%20const%20onChange%20%3D%20(isAffix%3A%20boolean)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60Basic%20Offset%20status%20change%20%3A%20%24%7BisAffix%7D%60)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20objectOffset%20%3D%20ref(%7B%20top%3A%20100%2C%20left%3A%20100%20%7D)%0A%0A%20%20%20%20return%20%7B%20numberOffset%2C%20onChange%2C%20objectOffset%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"基本使用":"Basic usage"},{description:c(()=>[a.lang==="zh"?(l(),i("p",U,"最简单的用法。")):x("",!0),a.lang==="en"?(l(),i("p",J,"The simplest usage.")):x("",!0)]),rawCode:c(()=>[s(u)]),highlightCode:c(()=>[K]),_:1},8,["title"])}const X=d(H,[["render",W]]);const Y={},Z={class:"container"},tt={class:"background"};function nt(a,p){const o=$,e=y;return l(),i("div",Z,[t("div",tt,[s(e,{target:".container",offset:{top:0,left:0}},{default:c(()=>[s(o,{mode:"primary"},{default:c(()=>[n("Custom target container")]),_:1})]),_:1})])])}const st=d(Y,[["render",nt],["__scopeId","data-v-4664c093"]]),at=w({name:"Target",components:{"raw-demo":st},setup(){const{lang:a}=I(E);return{lang:a}}}),ot={key:0},et=t("code",null,"target",-1),ct=t("code",null,"IxAffix",-1),pt=t("code",null,"window",-1),lt={key:1},ut=t("code",null,"IxAffix",-1),it=t("code",null,"window",-1),rt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1);function dt(a,p,o,e,h,f){const u=k("raw-demo"),r=v;return l(),A(r,{packageName:"components",componentName:"affix",demoName:"Target",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22background%22%3E%0A%20%20%20%20%20%20%3CIxAffix%20target%3D%22.container%22%20%3Aoffset%3D%22%7B%20top%3A%200%2C%20left%3A%200%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3ECustom%20target%20container%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3C%2FIxAffix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.container%20%7B%0A%20%20height%3A%20100px%3B%0A%20%20overflow%3A%20scroll%3B%0A%0A%20%20.background%20%7B%0A%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20width%3A%20120%25%3B%0A%20%20%20%20background%3A%20rgb(200%2C%20200%2C%20200)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:a.lang==="zh"?"自定义目标容器":"custom target container"},{description:c(()=>[a.lang==="zh"?(l(),i("p",ot,[n("通过 "),et,n(" 设置 "),ct,n(" 需要监听其滚动事件的元素，默认为 "),pt,n("。")])):x("",!0),a.lang==="en"?(l(),i("p",lt,[n("Set a target for "),ut,n(", which is listen to scroll event of target element (default is "),it,n(").")])):x("",!0)]),rawCode:c(()=>[s(u)]),highlightCode:c(()=>[rt]),_:1},8,["title"])}const kt=d(at,[["render",dt]]),ft={},ht={class:"markdown site-doc-api"},_t=t("h3",{id:"IxAffix"},[t("span",null,"IxAffix"),t("a",{onclick:"window.location.hash = 'IxAffix'",class:"anchor"},"#")],-1),mt=t("h4",{id:"AffixProps"},[t("span",null,"AffixProps"),t("a",{onclick:"window.location.hash = 'AffixProps'",class:"anchor"},"#")],-1),gt=C("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>offset</code></td><td>距离容器顶部的偏移量，到达时会触发affix</td><td><code>number | { top:number, bottom:number, left:number, right:number }</code></td><td><code>0</code></td><td>-</td><td>-</td></tr><tr><td><code>target</code></td><td>需要监听其滚动事件的元素</td><td><code>string | HTMLElement | () =&gt; string | HTMLElement</code></td><td><code>window</code></td><td>-</td><td>-</td></tr><tr><td><code>onChange</code></td><td>固定状态改变时触发</td><td><code>(value: boolean) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1),At=t("h4",{id:"AffixSlots"},[t("span",null,"AffixSlots"),t("a",{onclick:"window.location.hash = 'AffixSlots'",class:"anchor"},"#")],-1),xt=C("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义显示内容</td><td>-</td><td>-</td></tr></tbody></table>",1),bt=t("h4",{id:"AffixMethods"},[t("span",null,"AffixMethods"),t("a",{onclick:"window.location.hash = 'AffixMethods'",class:"anchor"},"#")],-1),Ct=C("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>update</code></td><td>重新计算affix的样式和位置</td><td>-</td><td>-</td></tr></tbody></table>",1),Dt=t("h3",{id:"FAQ"},[t("span",null,"FAQ"),t("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")],-1),wt=t("h4",{id:"Affix 使用<code>v-show</code>进行动态显隐时，样式的计算会有问题"},[t("span",null,[n("Affix 使用"),t("code",null,"v-show"),n("进行动态显隐时，样式的计算会有问题")]),t("a",{onclick:"window.location.hash = 'Affix 使用<code>v-show</code>进行动态显隐时，样式的计算会有问题'",class:"anchor"},"#")],-1),Bt=C('<p>从性能角度考虑，监听<code>dom</code>的改变重新计算<code>affix</code>样式会带来较大的开销，如果希望动态显隐，可以改用<code>v-if</code>实现，或者在<code>v-show</code>变化后，手动调用<code>affix</code>的<code>update</code>方法重新计算样式。</p><p>相关issue: <a href="https://github.com/IDuxFE/idux/issues/849" target="_blank" rel="noopener">#849</a></p>',2);function vt(a,p){const o=D,e=b;return l(),i("section",ht,[s(e,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[s(o,{href:"#IxAffix",title:"IxAffix"},{default:c(()=>[s(o,{href:"#AffixProps",title:"AffixProps"}),s(o,{href:"#AffixSlots",title:"AffixSlots"}),s(o,{href:"#AffixMethods",title:"AffixMethods"})]),_:1}),s(o,{href:"#FAQ",title:"FAQ"},{default:c(()=>[s(o,{href:"#Affix 使用`v-show`进行动态显隐时，样式的计算会有问题",title:"Affix 使用`v-show`进行动态显隐时，样式的计算会有问题"})]),_:1})]),_:1}),_t,mt,gt,At,xt,bt,Ct,Dt,wt,Bt])}const It=d(ft,[["render",vt]]),$t={},yt={class:"markdown site-doc-design"},Et=t("h2",{id:"组件定义"},[t("span",null,"组件定义"),t("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),Ft=t("p",null,"将内容固钉在某个位置的容器组件",-1),Ot=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),Nt=t("p",null,"容器滚动到某个位置时，需要固定住某些内容的位置，类似于sticky的效果",-1);function Tt(a,p){const o=D,e=b;return l(),i("section",yt,[s(e,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[s(o,{href:"#组件定义",title:"组件定义"}),s(o,{href:"#使用场景",title:"使用场景"})]),_:1}),Et,Ft,Ot,Nt])}const jt=d($t,[["render",Tt]]),qt={},St={class:"markdown site-doc-theme"},Mt=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"default"),t("th",null,"seer"),t("th",null,"备注")])])],-1);function Vt(a,p){const o=b;return l(),i("section",St,[s(o,{class:"site-anchor",affix:"",offset:16}),Mt])}const zt=d(qt,[["render",Vt]]),Lt={name:"DocsComponentsAffix",components:{DemoBasic:X,DemoTarget:kt,ApiDocs:It,DesignDocs:jt,ThemeDocs:zt},setup(){var f;const a=V(),p=z(),o=g((f=a.query.tab)!=null?f:"demo");L(o,u=>{p.push({query:{tab:u}})});const e=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},{label:"主题",value:"theme"}].filter(Boolean),h=g(!1);return{checkedDoc:o,docRadioData:e,showDevDemo:h}}},Pt={class:"site-doc-wrapper"},Rt={class:"markdown site-doc-header"},Qt=t("h1",null,[n("Affix"),t("span",{class:"subtitle"},"固钉")],-1),Gt=t("div",{class:"markdown site-doc-description"},null,-1),Ht={class:"site-doc-demo"};function Ut(a,p,o,e,h,f){const u=S,r=D,B=b,F=k("DemoBasic"),O=k("DemoTarget"),N=k("ApiDocs"),T=k("DesignDocs"),j=k("ThemeDocs");return l(),i("article",Pt,[t("section",Rt,[Qt,Gt,s(u,{value:e.checkedDoc,"onUpdate:value":p[0]||(p[0]=q=>e.checkedDoc=q),dataSource:e.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),_(t("section",Ht,[s(B,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[(e.showDevDemo,l(),A(r,{key:0,href:"#components-affix-basic",title:"基本使用"})),(e.showDevDemo,l(),A(r,{key:1,href:"#components-affix-target",title:"自定义目标容器"}))]),_:1}),s(F),s(O)],512),[[m,e.checkedDoc==="demo"]]),_(s(N,null,null,512),[[m,e.checkedDoc==="api"]]),_(s(T,null,null,512),[[m,e.checkedDoc==="design"]]),_(s(j,null,null,512),[[m,e.checkedDoc==="theme"]])])}const Yt=d(Lt,[["render",Ut]]);export{Yt as default};