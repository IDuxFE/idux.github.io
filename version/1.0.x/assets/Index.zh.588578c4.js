import{I as C,a as w}from"./index.45ee6fe6.js";import{_ as v,I as T}from"./GlobalCodeBox.35a5c9cd.js";import{v as D,b as _,a8 as r,y as a,a9 as c,F as P,aa as n,a7 as l,ac as t,i as I,ag as m,ah as f,ab as g,aq as A,w as S,al as V,ak as z,G as x,H as b}from"./vendor.0e7da6ec.js";import{_ as d,f as y,c as $,a as E}from"./index.3f21dce0.js";const L=D({setup(){const s=_(0),p=o=>{console.log(`Basic Offset status change : ${o}`)},e=_({top:100,left:100});return{numberOffset:s,onChange:p,objectOffset:e}}}),R=n("br",null,null,-1);function G(s,p,e,o,h,k){const u=$,i=y;return l(),r(P,null,[a(i,{offset:s.numberOffset,onChange:s.onChange},{default:c(()=>[a(u,{onClick:p[0]||(p[0]=B=>s.numberOffset+=20)},{default:c(()=>[t("Number Offset")]),_:1})]),_:1},8,["offset","onChange"]),R,a(i,{offset:s.objectOffset},{default:c(()=>[a(u,null,{default:c(()=>[t("Object Offset")]),_:1})]),_:1},8,["offset"])],64)}const M=d(L,[["render",G]]),Q=D({name:"Basic",components:{"raw-demo":M},setup(){const{lang:s}=I(E);return{lang:s}}}),H={key:0},U={key:1},J=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxAffix")]),t(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("numberOffset"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@Change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("numberOffset += 20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Number Offset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxAffix")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxAffix")]),t(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("objectOffset"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t("Object Offset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxAffix")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" numberOffset "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"isAffix"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Basic Offset status change : "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("isAffix"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" objectOffset "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" numberOffset"),n("span",{class:"token punctuation"},","),t(" onChange"),n("span",{class:"token punctuation"},","),t(" objectOffset "),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function K(s,p,e,o,h,k){const u=f("raw-demo"),i=v;return l(),m(i,{packageName:"components",componentName:"affix",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22numberOffset%22%20%40Change%3D%22onChange%22%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22numberOffset%20%2B%3D%2020%22%3ENumber%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22objectOffset%22%3E%0A%20%20%20%20%3CIxButton%3EObject%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberOffset%20%3D%20ref(0)%0A%20%20%20%20const%20onChange%20%3D%20(isAffix%3A%20boolean)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60Basic%20Offset%20status%20change%20%3A%20%24%7BisAffix%7D%60)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20objectOffset%20%3D%20ref(%7B%20top%3A%20100%2C%20left%3A%20100%20%7D)%0A%0A%20%20%20%20return%20%7B%20numberOffset%2C%20onChange%2C%20objectOffset%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:c(()=>[s.lang==="zh"?(l(),r("p",H,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002")):g("",!0),s.lang==="en"?(l(),r("p",U,"The simplest usage.")):g("",!0)]),rawCode:c(()=>[a(u)]),highlightCode:c(()=>[J]),_:1},8,["title"])}const W=d(Q,[["render",K]]);const X={},Y={class:"container"},Z={class:"background"};function nn(s,p){const e=$,o=y;return l(),r("div",Y,[n("div",Z,[a(o,{target:".container",offset:{top:0,left:0}},{default:c(()=>[a(e,{mode:"primary"},{default:c(()=>[t("Custom target container")]),_:1})]),_:1})])])}const tn=d(X,[["render",nn],["__scopeId","data-v-4664c093"]]),sn=D({name:"Target",components:{"raw-demo":tn},setup(){const{lang:s}=I(E);return{lang:s}}}),an={key:0},on=n("code",null,"target",-1),en=n("code",null,"IxAffix",-1),cn=n("code",null,"window",-1),pn={key:1},ln=n("code",null,"IxAffix",-1),un=n("code",null,"window",-1),rn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("background"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxAffix")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(".container"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ top: 0, left: 0 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Custom target container"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxAffix")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" scroll"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token selector"},".background"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"padding-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120%"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),t("200"),n("span",{class:"token punctuation"},","),t(" 200"),n("span",{class:"token punctuation"},","),t(" 200"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function dn(s,p,e,o,h,k){const u=f("raw-demo"),i=v;return l(),m(i,{packageName:"components",componentName:"affix",demoName:"Target",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22background%22%3E%0A%20%20%20%20%20%20%3CIxAffix%20target%3D%22.container%22%20%3Aoffset%3D%22%7B%20top%3A%200%2C%20left%3A%200%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3ECustom%20target%20container%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3C%2FIxAffix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.container%20%7B%0A%20%20height%3A%20100px%3B%0A%20%20overflow%3A%20scroll%3B%0A%0A%20%20.background%20%7B%0A%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20width%3A%20120%25%3B%0A%20%20%20%20background%3A%20rgb(200%2C%20200%2C%20200)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:s.lang==="zh"?"\u81EA\u5B9A\u4E49\u76EE\u6807\u5BB9\u5668":"custom target container"},{description:c(()=>[s.lang==="zh"?(l(),r("p",an,[t("\u901A\u8FC7 "),on,t(" \u8BBE\u7F6E "),en,t(" \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A "),cn,t("\u3002")])):g("",!0),s.lang==="en"?(l(),r("p",pn,[t("Set a target for "),ln,t(", which is listen to scroll event of target element (default is "),un,t(").")])):g("",!0)]),rawCode:c(()=>[a(u)]),highlightCode:c(()=>[rn]),_:1},8,["title"])}const kn=d(sn,[["render",dn]]),fn={},hn={class:"markdown site-doc-api"},_n=n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")],-1),mn=n("h3",{id:"IxAffix"},[n("span",null,"IxAffix"),n("a",{onclick:"window.location.hash = 'IxAffix'",class:"anchor"},"#")],-1),gn=n("h4",{id:"AffixProps"},[n("span",null,"AffixProps"),n("a",{onclick:"window.location.hash = 'AffixProps'",class:"anchor"},"#")],-1),An=A("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>offset</code></td><td>\u8DDD\u79BB\u5BB9\u5668\u9876\u90E8\u7684\u504F\u79FB\u91CF\uFF0C\u5230\u8FBE\u65F6\u4F1A\u89E6\u53D1affix</td><td><code>number | { top:number, bottom:number, left:number, right:number }</code></td><td><code>0</code></td><td>-</td><td>-</td></tr><tr><td><code>target</code></td><td>\u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20</td><td><code>string | HTMLElement | () =&gt; string | HTMLElement</code></td><td><code>window</code></td><td>-</td><td>-</td></tr><tr><td><code>onChange</code></td><td>\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td><td><code>(value: boolean) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1),xn=n("h4",{id:"AffixSlots"},[n("span",null,"AffixSlots"),n("a",{onclick:"window.location.hash = 'AffixSlots'",class:"anchor"},"#")],-1),bn=A("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9</td><td>-</td><td>-</td></tr></tbody></table>",1),Cn=n("h4",{id:"AffixMethods"},[n("span",null,"AffixMethods"),n("a",{onclick:"window.location.hash = 'AffixMethods'",class:"anchor"},"#")],-1),wn=A("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>update</code></td><td>\u91CD\u65B0\u8BA1\u7B97affix\u7684\u6837\u5F0F\u548C\u4F4D\u7F6E</td><td>-</td><td>-</td></tr></tbody></table>",1),Dn=n("h3",{id:"FAQ"},[n("span",null,"FAQ"),n("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")],-1),Bn=n("h3",{id:"Affix\u4F7F\u7528<code>v-show</code>\u8FDB\u884C\u52A8\u6001\u663E\u9690\u65F6\uFF0C\u6837\u5F0F\u7684\u8BA1\u7B97\u4F1A\u6709\u95EE\u9898"},[n("span",null,[t("Affix\u4F7F\u7528"),n("code",null,"v-show"),t("\u8FDB\u884C\u52A8\u6001\u663E\u9690\u65F6\uFF0C\u6837\u5F0F\u7684\u8BA1\u7B97\u4F1A\u6709\u95EE\u9898")]),n("a",{onclick:"window.location.hash = 'Affix\u4F7F\u7528<code>v-show</code>\u8FDB\u884C\u52A8\u6001\u663E\u9690\u65F6\uFF0C\u6837\u5F0F\u7684\u8BA1\u7B97\u4F1A\u6709\u95EE\u9898'",class:"anchor"},"#")],-1),vn=A('<p>\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u76D1\u542C<code>dom</code>\u7684\u6539\u53D8\u91CD\u65B0\u8BA1\u7B97<code>affix</code>\u6837\u5F0F\u4F1A\u5E26\u6765\u8F83\u5927\u7684\u5F00\u9500\uFF0C\u5982\u679C\u5E0C\u671B\u52A8\u6001\u663E\u9690\uFF0C\u53EF\u4EE5\u6539\u7528<code>v-if</code>\u5B9E\u73B0\uFF0C\u6216\u8005\u5728<code>v-show</code>\u53D8\u5316\u540E\uFF0C\u624B\u52A8\u8C03\u7528<code>affix</code>\u7684<code>update</code>\u65B9\u6CD5\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u3002</p><p>\u76F8\u5173issue: <a href="https://github.com/IDuxFE/idux/issues/849" target="_blank" rel="noopener">#849</a></p>',2);function In(s,p){const e=w,o=C;return l(),r("section",hn,[a(o,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[a(e,{href:"#api",title:"API"},{default:c(()=>[a(e,{href:"#ixaffix",title:"IxAffix"}),a(e,{href:"#faq",title:"FAQ"}),a(e,{href:"#affix\u4F7F\u7528`v-show`\u8FDB\u884C\u52A8\u6001\u663E\u9690\u65F6\uFF0C\u6837\u5F0F\u7684\u8BA1\u7B97\u4F1A\u6709\u95EE\u9898",title:"Affix\u4F7F\u7528`v-show`\u8FDB\u884C\u52A8\u6001\u663E\u9690\u65F6\uFF0C\u6837\u5F0F\u7684\u8BA1\u7B97\u4F1A\u6709\u95EE\u9898"})]),_:1})]),_:1}),_n,mn,gn,An,xn,bn,Cn,wn,Dn,Bn,vn])}const yn=d(fn,[["render",In]]),$n={},En={class:"markdown site-doc-design"},Fn=n("h2",{id:"\u7EC4\u4EF6\u5B9A\u4E49"},[n("span",null,"\u7EC4\u4EF6\u5B9A\u4E49"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u5B9A\u4E49'",class:"anchor"},"#")],-1),On=n("p",null,"\u5C06\u5185\u5BB9\u56FA\u9489\u5728\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5BB9\u5668\u7EC4\u4EF6",-1),Nn=n("h2",{id:"\u4F7F\u7528\u573A\u666F"},[n("span",null,"\u4F7F\u7528\u573A\u666F"),n("a",{onclick:"window.location.hash = '\u4F7F\u7528\u573A\u666F'",class:"anchor"},"#")],-1),qn=n("p",null,"\u5BB9\u5668\u6EDA\u52A8\u5230\u67D0\u4E2A\u4F4D\u7F6E\u65F6\uFF0C\u9700\u8981\u56FA\u5B9A\u4F4F\u67D0\u4E9B\u5185\u5BB9\u7684\u4F4D\u7F6E\uFF0C\u7C7B\u4F3C\u4E8Esticky\u7684\u6548\u679C",-1);function jn(s,p){const e=w,o=C;return l(),r("section",En,[a(o,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[a(e,{href:"#\u7EC4\u4EF6\u5B9A\u4E49",title:"\u7EC4\u4EF6\u5B9A\u4E49"}),a(e,{href:"#\u4F7F\u7528\u573A\u666F",title:"\u4F7F\u7528\u573A\u666F"})]),_:1}),Fn,On,Nn,qn])}const Tn=d($n,[["render",jn]]),Pn={name:"Docsaffix",components:{DemoBasic:W,DemoTarget:kn,ApiDocs:yn,DesignDocs:Tn},setup(){var k;const s=V(),p=z(),e=_((k=s.query.tab)!=null?k:"demo");S(e,u=>{p.push({query:{tab:u}})});const o=[{label:"\u793A\u4F8B",value:"demo"},{label:"API",value:"api"},,{label:"\u6307\u5357",value:"design"},,].filter(Boolean),h=_(!1);return{checkedDoc:e,docRadioData:o,showDevDemo:h}}},Sn={class:"site-doc-wrapper"},Vn={class:"markdown site-doc-header"},zn=n("h1",null,[t("Affix"),n("span",{class:"subtitle"},"\u56FA\u9489")],-1),Ln=n("div",{class:"markdown site-doc-description"},null,-1),Rn={class:"site-doc-demo"};function Gn(s,p,e,o,h,k){const u=T,i=w,B=C,F=f("DemoBasic"),O=f("DemoTarget"),N=f("ApiDocs"),q=f("DesignDocs");return l(),r("article",Sn,[n("section",Vn,[zn,Ln,a(u,{value:o.checkedDoc,"onUpdate:value":p[0]||(p[0]=j=>o.checkedDoc=j),dataSource:o.docRadioData,size:"lg",buttoned:""},null,8,["value","dataSource"])]),x(n("section",Rn,[a(B,{class:"site-anchor",affix:"",offset:16},{default:c(()=>[(o.showDevDemo,l(),m(i,{key:0,href:"#components-affix-basic",title:"\u57FA\u672C\u4F7F\u7528"})),(o.showDevDemo,l(),m(i,{key:1,href:"#components-affix-target",title:"\u81EA\u5B9A\u4E49\u76EE\u6807\u5BB9\u5668"}))]),_:1}),a(F),a(O)],512),[[b,o.checkedDoc==="demo"]]),x(a(N,null,null,512),[[b,o.checkedDoc==="api"]]),x(a(q,null,null,512),[[b,o.checkedDoc==="design"]])])}const Jn=d(Pn,[["render",Gn]]);export{Jn as default};