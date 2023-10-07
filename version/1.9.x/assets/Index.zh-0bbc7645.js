import{I as x,a as E}from"./index-ae8731f7.js";import{_ as P,I as $}from"./GlobalCodeBox-7a51f28b.js";import{x as v,aa as l,ak as A,ac as e,z as a,ag as t,u as g,l as y,al as h,ab as k,af as D,ae as n,as as L,ao as S,ad as N,r as C,w as q,H as B,I as f}from"./vendor-a14e3fe7.js";import{aW as R,c as T,k as V,a as z,_}from"./index-22ebbaf3.js";const M=v({__name:"Basic",setup(c){const{start:i,finish:o,error:s}=R();function r(){i({mask:!0}),setTimeout(()=>o(),4e3)}return(d,u)=>{const p=T,m=V;return l(),A(m,null,{default:e(()=>[a(p,{onClick:u[0]||(u[0]=I=>g(i)())},{default:e(()=>[t("开始")]),_:1}),a(p,{onClick:g(o)},{default:e(()=>[t("结束")]),_:1},8,["onClick"]),a(p,{onClick:g(s)},{default:e(()=>[t("错误")]),_:1},8,["onClick"]),a(p,{onClick:r},{default:e(()=>[t("开始有遮罩，4s后自动结束")]),_:1})]),_:1})}}}),G=v({name:"Basic",components:{"raw-demo":M},setup(){const{lang:c}=y(z);return{lang:c}}}),j={key:0},H={key:1},O=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("start()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("开始"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("finish"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("结束"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("错误"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("autoExit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("开始有遮罩，4s后自动结束"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useLoadingBar "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@idux/components/loading-bar'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" start"),n("span",{class:"token punctuation"},","),t(" finish"),n("span",{class:"token punctuation"},","),t(" error "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useLoadingBar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"autoExit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"mask"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"finish"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"4000"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function U(c,i,o,s,r,d){const u=h("raw-demo"),p=P;return l(),A(p,{packageName:"components",componentName:"loading-bar",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22start()%22%3E%E5%BC%80%E5%A7%8B%3C%2FIxButton%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22finish%22%3E%E7%BB%93%E6%9D%9F%3C%2FIxButton%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22error%22%3E%E9%94%99%E8%AF%AF%3C%2FIxButton%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22autoExit%22%3E%E5%BC%80%E5%A7%8B%E6%9C%89%E9%81%AE%E7%BD%A9%EF%BC%8C4s%E5%90%8E%E8%87%AA%E5%8A%A8%E7%BB%93%E6%9D%9F%3C%2FIxButton%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20'%40idux%2Fcomponents%2Floading-bar'%0Aconst%20%7B%20start%2C%20finish%2C%20error%20%7D%20%3D%20useLoadingBar()%0Afunction%20autoExit()%20%7B%0A%20%20start(%7B%20mask%3A%20true%20%7D)%0A%20%20setTimeout(()%20%3D%3E%20finish()%2C%204000)%0A%7D%0A%3C%2Fscript%3E%0A",title:c.lang==="zh"?"基本使用":"Basic usage"},{description:e(()=>[c.lang==="zh"?(l(),k("p",j,"最简单的用法。")):D("",!0),c.lang==="en"?(l(),k("p",H,"The simplest usage.")):D("",!0)]),rawCode:e(()=>[a(u)]),highlightCode:e(()=>[O]),_:1},8,["title"])}const W=_(G,[["render",U]]),J={},K={class:"markdown site-doc-api"},Q=n("p",null,[t("使用 LoadingBar 只有一种方法，在 IxLoadingBarProvider 组件里面嵌套使用 "),n("code",null,"useLoadingBar")],-1),X=n("h3",{id:"IxLoadingProviderBar"},[n("span",null,"IxLoadingProviderBar"),n("a",{onclick:"window.location.hash = 'IxLoadingProviderBar'",class:"anchor"},"#")],-1),Y=n("p",null,[t("如果你想通过 "),n("code",null,"useLoadingBar"),t(" 来创建提示框，则你需要把组件包裹在 "),n("code",null,"IxLoadingBarProvider"),t(" 内部，因为这样才不会丢失应用的上下文信息。")],-1),Z=n("h4",{id:"LoadingBarProviderProps"},[n("span",null,"LoadingBarProviderProps"),n("a",{onclick:"window.location.hash = 'LoadingBarProviderProps'",class:"anchor"},"#")],-1),nn=L("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td>mask</td><td><code>start()</code>后是否同时显示遮罩</td><td>-</td><td>false</td><td>✅</td><td>-</td></tr></tbody></table>",1),tn=n("h4",{id:"LoadingBarProviderMethods"},[n("span",null,"LoadingBarProviderMethods"),n("a",{onclick:"window.location.hash = 'LoadingBarProviderMethods'",class:"anchor"},"#")],-1),an=L("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始</td><td>(LoadingBarOptions) =&gt; void</td><td>加载并显示进度条到80%暂停</td></tr><tr><td><code>finish</code></td><td>结束</td><td>-</td><td>继续加载进度条到100%，然后隐藏</td></tr><tr><td><code>error</code></td><td>错误</td><td>-</td><td>加载并显示，进度条继续加载到100，然后隐藏</td></tr></tbody></table>",1);function sn(c,i){const o=E,s=x;return l(),k("section",K,[a(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[a(o,{href:"#IxLoadingProviderBar",title:"IxLoadingProviderBar"},{default:e(()=>[a(o,{href:"#LoadingBarProviderProps",title:"LoadingBarProviderProps"}),a(o,{href:"#LoadingBarProviderMethods",title:"LoadingBarProviderMethods"})]),_:1})]),_:1}),Q,X,Y,Z,nn,tn,an])}const on=_(J,[["render",sn]]),en={},cn={class:"markdown site-doc-design"},un=n("h2",{id:"组件定义"},[n("span",null,"组件定义"),n("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),pn=n("h2",{id:"使用场景"},[n("span",null,"使用场景"),n("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1);function ln(c,i){const o=E,s=x;return l(),k("section",cn,[a(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[a(o,{href:"#组件定义",title:"组件定义"}),a(o,{href:"#使用场景",title:"使用场景"})]),_:1}),un,pn])}const rn=_(en,[["render",ln]]),dn={name:"DocsComponentsLoading-bar",components:{DemoBasic:W,ApiDocs:on,DesignDocs:rn},setup(){var d;const c=S(),i=N(),o=C((d=c.query.tab)!=null?d:"demo");q(o,u=>{i.push({query:{tab:u}})});const s=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),r=C(!1);return{checkedDoc:o,docRadioData:s,showDevDemo:r}}},kn={class:"site-doc-wrapper"},hn={class:"markdown site-doc-header"},_n=n("h1",null,[t("LoadingBar"),n("span",{class:"subtitle"},"加载进度条")],-1),mn=n("div",{class:"markdown site-doc-description"},null,-1),gn={class:"site-doc-demo"};function Bn(c,i,o,s,r,d){const u=$,p=E,m=x,I=h("DemoBasic"),w=h("ApiDocs"),F=h("DesignDocs");return l(),k("article",kn,[n("section",hn,[_n,mn,a(u,{value:s.checkedDoc,"onUpdate:value":i[0]||(i[0]=b=>s.checkedDoc=b),dataSource:s.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),B(n("section",gn,[a(m,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[(s.showDevDemo,l(),A(p,{key:0,href:"#components-loading-bar-basic",title:"基本使用"}))]),_:1}),a(I)],512),[[f,s.checkedDoc==="demo"]]),B(a(w,null,null,512),[[f,s.checkedDoc==="api"]]),B(a(F,null,null,512),[[f,s.checkedDoc==="design"]])])}const In=_(dn,[["render",Bn]]);export{In as default};
