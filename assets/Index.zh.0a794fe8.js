import{_ as E}from"./GlobalCodeBox.e5dd016a.js";import{_ as g,a as F}from"./index.dbdf6cd1.js";import{l as B,r as _,aY as c,aZ as p,aW as f,m as s,aV as u,F as O,a_ as t,b1 as n,v as b,aU as m,b0 as h}from"./vendor.2a6fd3f7.js";const T=B({setup(){const a=_(0),o=e=>{console.log(`Basic Offset status change : ${e}`)},i=_({top:100,left:100});return{numberOffset:a,onChange:o,objectOffset:i}}}),j=t("Number Offset"),N=n("br",null,null,-1),q=t("Object Offset");function L(a,o,i,e,d,x){const r=c("IxButton"),l=c("IxAffix");return p(),f(O,null,[s(l,{offset:a.numberOffset,onChange:a.onChange},{default:u(()=>[s(r,{onClick:o[0]||(o[0]=A=>a.numberOffset+=20)},{default:u(()=>[j]),_:1})]),_:1},8,["offset","onChange"]),N,s(l,{offset:a.objectOffset},{default:u(()=>[s(r,null,{default:u(()=>[q]),_:1})]),_:1},8,["offset"])],64)}var P=g(T,[["render",L]]);const z=B({name:"components-affix-Basic",components:{"raw-demo":P},setup(){const{lang:a}=b(F);return{lang:a}}}),V={key:0},S={key:1},H=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1);function K(a,o,i,e,d,x){const r=c("raw-demo"),l=E;return p(),m(l,{packageName:"components",componentName:"affix",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22numberOffset%22%20%40Change%3D%22onChange%22%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22numberOffset%20%2B%3D%2020%22%3ENumber%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxAffix%20%3Aoffset%3D%22objectOffset%22%3E%0A%20%20%20%20%3CIxButton%3EObject%20Offset%3C%2FIxButton%3E%0A%20%20%3C%2FIxAffix%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberOffset%20%3D%20ref(0)%0A%20%20%20%20const%20onChange%20%3D%20(isAffix%3A%20boolean)%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log(%60Basic%20Offset%20status%20change%20%3A%20%24%7BisAffix%7D%60)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20objectOffset%20%3D%20ref(%7B%20top%3A%20100%2C%20left%3A%20100%20%7D)%0A%0A%20%20%20%20return%20%7B%20numberOffset%2C%20onChange%2C%20objectOffset%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:u(()=>[a.lang==="zh"?(p(),f("p",V,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002")):h("",!0),a.lang==="en"?(p(),f("p",S,"The simplest usage.")):h("",!0)]),rawCode:u(()=>[s(r)]),highlightCode:u(()=>[H]),_:1},8,["title"])}var M=g(z,[["render",K]]);const R={},U={class:"container"},G={class:"background"},W=t("Custom target container");function Y(a,o){const i=c("IxButton"),e=c("IxAffix");return p(),f("div",U,[n("div",G,[s(e,{target:".container",offset:{top:0,left:0}},{default:u(()=>[s(i,{mode:"primary"},{default:u(()=>[W]),_:1})]),_:1})])])}var Z=g(R,[["render",Y],["__scopeId","data-v-590fb934"]]);const J=B({name:"components-affix-Target",components:{"raw-demo":Z},setup(){const{lang:a}=b(F);return{lang:a}}}),Q={key:0},X=t("\u901A\u8FC7 "),nn=n("code",null,"target",-1),tn=t(" \u8BBE\u7F6E "),sn=n("code",null,"IxAffix",-1),an=t(" \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A "),on=n("code",null,"window",-1),en=t("\u3002"),un=[X,nn,tn,sn,an,on,en],cn={key:1},ln=t("Set a target for "),pn=n("code",null,"IxAffix",-1),rn=t(", which is listen to scroll event of target element (default is "),kn=n("code",null,"window",-1),fn=t(")."),dn=[ln,pn,rn,kn,fn],_n=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1);function mn(a,o,i,e,d,x){const r=c("raw-demo"),l=E;return p(),m(l,{packageName:"components",componentName:"affix",demoName:"Target",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22background%22%3E%0A%20%20%20%20%20%20%3CIxAffix%20target%3D%22.container%22%20%3Aoffset%3D%22%7B%20top%3A%200%2C%20left%3A%200%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3ECustom%20target%20container%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3C%2FIxAffix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.container%20%7B%0A%20%20height%3A%20100px%3B%0A%20%20overflow%3A%20scroll%3B%0A%0A%20%20.background%20%7B%0A%20%20%20%20padding-top%3A%2020px%3B%0A%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20width%3A%20120%25%3B%0A%20%20%20%20background%3A%20rgb(200%2C%20200%2C%20200)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:a.lang==="zh"?"\u81EA\u5B9A\u4E49\u76EE\u6807\u5BB9\u5668":"custom target container"},{description:u(()=>[a.lang==="zh"?(p(),f("p",Q,un)):h("",!0),a.lang==="en"?(p(),f("p",cn,dn)):h("",!0)]),rawCode:u(()=>[s(r)]),highlightCode:u(()=>[_n]),_:1},8,["title"])}var gn=g(J,[["render",mn]]);const An={name:"Demoaffix",components:{Basic:M,Target:gn},setup(){const a=d=>{window&&(window.location.hash=d)},o=_("develop"),i=_(!1),e=_(!1);return{goLink:a,selectedTab:o,expanded:i,showDevDemo:e}}},hn={class:"component-wrapper"},xn={class:"markdown component-header"},Bn=t("Affix"),Cn=n("span",{class:"subtitle"},"\u56FA\u9489",-1),En={class:"edit-button","aria-label":"Edit this page on GitHub",href:"https://github.com/IDuxFE/idux/edit/main/components/affix/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},Fn=n("section",{class:"markdown"},null,-1),bn=t(),Dn=t(),In={class:"component-develop-header"},wn=t(" \u4EE3\u7801\u6F14\u793A "),vn={class:"component-develop-header-tools"},yn={class:"component-develop-examples"},$n=n("section",{class:"markdown component-develop-api"},[n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"IxAffix"},[n("span",null,"IxAffix"),n("a",{onclick:"window.location.hash = 'IxAffix'",class:"anchor"},"#")]),n("h4",{id:"AffixProps"},[n("span",null,"AffixProps"),n("a",{onclick:"window.location.hash = 'AffixProps'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u5168\u5C40\u914D\u7F6E"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"offset")]),n("td",null,"\u8DDD\u79BB\u5BB9\u5668\u9876\u90E8\u7684\u504F\u79FB\u91CF\uFF0C\u5230\u8FBE\u65F6\u4F1A\u89E6\u53D1affix"),n("td",null,[n("code",null,"number | { top:number. bottom:number, left:number, right:number}")]),n("td",null,[n("code",null,"0")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"target")]),n("td",null,"\u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20"),n("td",null,[n("code",null,"string | HTMLElement | () => string | HTMLElement")]),n("td",null,[n("code",null,"window")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"onChange")]),n("td",null,"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1"),n("td",null,[n("code",null,"(value: boolean) => void")]),n("td",null,"-"),n("td",null,"-"),n("td",null,"-")])])]),n("h4",{id:"AffixSlots"},[n("span",null,"AffixSlots"),n("a",{onclick:"window.location.hash = 'AffixSlots'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u53C2\u6570\u7C7B\u578B"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"default")]),n("td",null,"\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9"),n("td",null,"-"),n("td",null,"-")])])])],-1),On=n("section",{class:"markdown"},[n("h2",{id:"\u7EC4\u4EF6\u5B9A\u4E49"},[n("span",null,"\u7EC4\u4EF6\u5B9A\u4E49"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u5B9A\u4E49'",class:"anchor"},"#")]),n("p",null,"\u5C06\u5185\u5BB9\u56FA\u9489\u5728\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5BB9\u5668\u7EC4\u4EF6"),n("h2",{id:"\u4F7F\u7528\u573A\u666F"},[n("span",null,"\u4F7F\u7528\u573A\u666F"),n("a",{onclick:"window.location.hash = '\u4F7F\u7528\u573A\u666F'",class:"anchor"},"#")]),n("p",null,"\u5BB9\u5668\u6EDA\u52A8\u5230\u67D0\u4E2A\u4F4D\u7F6E\u65F6\uFF0C\u9700\u8981\u56FA\u5B9A\u4F4F\u67D0\u4E9B\u5185\u5BB9\u7684\u4F4D\u7F6E\uFF0C\u7C7B\u4F3C\u4E8Esticky\u7684\u6548\u679C")],-1);function Tn(a,o,i,e,d,x){const r=c("IxIcon"),l=c("IxAnchorLink"),A=c("IxAnchor"),D=c("IxTooltip"),I=c("Basic"),w=c("Target"),v=c("IxCol"),y=c("IxRow"),C=c("IxTab"),$=c("IxTabs");return p(),f("article",hn,[n("section",xn,[n("h1",null,[Bn,Cn,n("a",En,[s(r,{name:"edit"})])]),Fn]),e.selectedTab==="develop"?(p(),m(A,{key:0,class:"toc-wrapper",affix:"",offset:"16",onClick:o[0]||(o[0]=k=>e.goLink(k))},{default:u(()=>[s(l,{href:"#components-affix-demo-Basic",title:"\u57FA\u672C\u4F7F\u7528"}),bn,s(l,{href:"#components-affix-demo-Target",title:"\u81EA\u5B9A\u4E49\u76EE\u6807\u5BB9\u5668"}),Dn,s(l,{href:"#API",title:"API"})]),_:1})):e.selectedTab==="design"?(p(),m(A,{key:1,class:"toc-wrapper",affix:"",offset:"16",onClick:o[1]||(o[1]=k=>e.goLink(k))},{default:u(()=>[s(l,{href:"#\u7EC4\u4EF6\u5B9A\u4E49",title:"\u7EC4\u4EF6\u5B9A\u4E49"}),s(l,{href:"#\u4F7F\u7528\u573A\u666F",title:"\u4F7F\u7528\u573A\u666F"})]),_:1})):(p(),m(A,{key:2,class:"toc-wrapper",affix:"",offset:"16",onClick:o[2]||(o[2]=k=>e.goLink(k))})),s($,{selectedKey:e.selectedTab,"onUpdate:selectedKey":o[4]||(o[4]=k=>e.selectedTab=k),type:"line",class:"component-tabs"},{default:u(()=>[s(C,{key:"develop",title:"\u5F00\u53D1\u6307\u5357"},{default:u(()=>[n("h2",In,[wn,n("span",vn,[s(D,{title:e.showDevDemo?"\u9690\u85CF\u5F00\u53D1\u4E13\u7528\u6F14\u793A":"\u663E\u793A\u5F00\u53D1\u4E13\u7528\u6F14\u793A"},{default:u(()=>[s(r,{name:e.showDevDemo?"bug-filled":"bug",onClick:o[3]||(o[3]=k=>e.showDevDemo=!e.showDevDemo)},null,8,["name"])]),_:1},8,["title"])])]),n("section",yn,[s(y,{gutter:"8"},{default:u(()=>[s(v,{span:"24"},{default:u(()=>[s(I),s(w)]),_:1})]),_:1})]),$n]),_:1}),s(C,{key:"design",title:"\u8BBE\u8BA1\u6307\u5357"},{default:u(()=>[On]),_:1})]),_:1},8,["selectedKey"])])}var Ln=g(An,[["render",Tn]]);export{Ln as default};