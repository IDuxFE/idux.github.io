import{_ as h}from"./GlobalCodeBox.3a8d5e77.js";import{_,a as B}from"./index.034ab50d.js";import{aS as u,aT as p,aU as r,m as a,F as C,l as v,p as I,aY as A,aZ as e,aX as g,aV as n,a$ as t,r as F,bj as $,bk as N}from"./vendor.09b48ac1.js";const U={};function T(s,o){const k=u("IxStatistic");return p(),r(C,null,[a(k,{title:"Active Users",value:"321321"}),a(k,{title:"Account Balance (CNY)",precision:2,value:112893}),a(k,{title:"Account Balance (CNY)",precision:2,value:112893.116},null,8,["value"])],64)}var P=_(U,[["render",T]]);const Y=v({name:"components-statistic-Basic",components:{"raw-demo":P},setup(){const{lang:s}=I(B);return{lang:s}}}),j={key:0},z=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Active Users"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("321321"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Account Balance (CNY)"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":precision"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("112893"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Account Balance (CNY)"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":precision"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("112893.116"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function L(s,o,k,c,m,f){const i=u("raw-demo"),l=h;return p(),A(l,{packageName:"components",componentName:"statistic",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxStatistic%20title%3D%22Active%20Users%22%20value%3D%22321321%22%20%2F%3E%0A%20%20%3CIxStatistic%20title%3D%22Account%20Balance%20(CNY)%22%20%3Aprecision%3D%222%22%20%3Avalue%3D%22112893%22%20%2F%3E%0A%20%20%3CIxStatistic%20title%3D%22Account%20Balance%20(CNY)%22%20%3Aprecision%3D%222%22%20%3Avalue%3D%22112893.116%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:e(()=>[s.lang==="zh"?(p(),r("p",j,"\u7B80\u5355\u5C55\u793A")):g("",!0),s.lang==="en"?(p(),r(C,{key:1},[],64)):g("",!0)]),rawCode:e(()=>[a(i)]),highlightCode:e(()=>[z]),_:1},8,["title"])}var V=_(Y,[["render",L]]);const K=v({setup(){const s=F(2);return{precision:s,add:()=>s.value++}}}),G=s=>($("data-v-f4ae24d2"),s=s(),N(),s),R={class:"statistic-demo-unit"},X=G(()=>n("span",null," / 100",-1));function Z(s,o,k,c,m,f){const i=u("IxIcon"),l=u("IxStatistic");return p(),r("div",R,[a(l,{title:"Feedback",value:1128},{suffix:e(()=>[a(i,{name:"book-mark"})]),_:1}),a(l,{title:"Unmerged",value:93,class:"demo-class"},{suffix:e(()=>[X]),_:1}),a(l,{title:"Feedback",value:11.28,precision:2,suffix:"%",class:"unit-up"},{prefix:e(()=>[a(i,{name:"arrow-up"})]),_:1},8,["value"]),a(l,{title:"Idle",value:9.3,precision:2,suffix:"%",class:"unit-down"},{prefix:e(()=>[a(i,{name:"arrow-down"})]),_:1},8,["value"])])}var H=_(K,[["render",Z],["__scopeId","data-v-f4ae24d2"]]);const J=v({name:"components-statistic-Unit",components:{"raw-demo":H},setup(){const{lang:s}=I(B);return{lang:s}}}),M={key:0},O=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("statistic-demo-unit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Feedback"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1128"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxIcon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("book-mark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxStatistic")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Unmerged"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("93"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-class"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(" / 100"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxStatistic")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Feedback"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("11.28"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":precision"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"suffix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unit-up"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prefix"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxIcon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("arrow-up"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxStatistic")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxStatistic")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Idle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9.3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":precision"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"suffix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unit-down"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#prefix"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxIcon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("arrow-down"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxStatistic")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" precision "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"add"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" precision"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"++"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" precision"),n("span",{class:"token punctuation"},","),t(" add "),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".statistic-demo-unit"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".unit-up"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token selector"},":deep(.ix-statistic-content)"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".unit-down"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token selector"},":deep(.ix-statistic-content)"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" green"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Q(s,o,k,c,m,f){const i=u("raw-demo"),l=h;return p(),A(l,{packageName:"components",componentName:"statistic",demoName:"Unit",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22statistic-demo-unit%22%3E%0A%20%20%20%20%3CIxStatistic%20title%3D%22Feedback%22%20%3Avalue%3D%221128%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%20%20%3CIxIcon%20name%3D%22book-mark%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxStatistic%3E%0A%20%20%20%20%3CIxStatistic%20title%3D%22Unmerged%22%20%3Avalue%3D%2293%22%20class%3D%22demo-class%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3E%20%2F%20100%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxStatistic%3E%0A%20%20%20%20%3CIxStatistic%20title%3D%22Feedback%22%20%3Avalue%3D%2211.28%22%20%3Aprecision%3D%222%22%20suffix%3D%22%25%22%20class%3D%22unit-up%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0A%20%20%20%20%20%20%20%20%3CIxIcon%20name%3D%22arrow-up%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxStatistic%3E%0A%20%20%20%20%3CIxStatistic%20title%3D%22Idle%22%20%3Avalue%3D%229.3%22%20%3Aprecision%3D%222%22%20suffix%3D%22%25%22%20class%3D%22unit-down%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0A%20%20%20%20%20%20%20%20%3CIxIcon%20name%3D%22arrow-down%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxStatistic%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20precision%20%3D%20ref(2)%0A%20%20%20%20const%20add%20%3D%20()%20%3D%3E%20precision.value%2B%2B%0A%20%20%20%20return%20%7B%20precision%2C%20add%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.statistic-demo-unit%20%7B%0A%20%20.unit-up%20%7B%0A%20%20%20%20%3Adeep(.ix-statistic-content)%20%7B%0A%20%20%20%20%20%20color%3A%20red%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.unit-down%20%7B%0A%20%20%20%20%3Adeep(.ix-statistic-content)%20%7B%0A%20%20%20%20%20%20color%3A%20green%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:s.lang==="zh"?"\u5355\u4F4D":"prefix/suffix usage"},{description:e(()=>[s.lang==="zh"?(p(),r("p",M,"\u901A\u8FC7\u524D\u7F00\u548C\u540E\u7F00\u6DFB\u52A0\u5355\u4F4D\u3002")):g("",!0),s.lang==="en"?(p(),r(C,{key:1},[],64)):g("",!0)]),rawCode:e(()=>[a(i)]),highlightCode:e(()=>[O]),_:1},8,["title"])}var W=_(J,[["render",Q]]);const nn={name:"Demostatistic",components:{Basic:V,Unit:W},setup(){const s=m=>{window&&(window.location.hash=m)},o=F("develop"),k=F(!1),c=F(!1);return{goLink:s,selectedTab:o,expanded:k,showDevDemo:c}}},tn={class:"component-wrapper"},an={class:"markdown component-header"},sn=t("Statistic"),en=n("span",{class:"subtitle"},"\u7EDF\u8BA1\u6570\u503C",-1),on={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/components/statistic/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},un=n("section",{class:"markdown"},null,-1),cn=t(),ln=t(),pn={class:"component-develop-header"},kn=t(" \u4EE3\u7801\u6F14\u793A "),rn={class:"component-develop-header-tools"},dn={class:"component-develop-examples"},mn=n("section",{class:"markdown component-develop-api"},[n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"IxStatistic"},[n("span",null,"IxStatistic"),n("a",{onclick:"window.location.hash = 'IxStatistic'",class:"anchor"},"#")]),n("h4",{id:"StatisticProps"},[n("span",null,"StatisticProps"),n("a",{onclick:"window.location.hash = 'StatisticProps'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u5168\u5C40\u914D\u7F6E"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"formatter")]),n("td",null,"\u81EA\u5B9A\u4E49\u6570\u503C\u5C55\u793A"),n("td",null,"v-slot"),n("td",null,[n("code",null,"(value, precision) => { value: string, int: string, decimal: string }")]),n("td",null,"\u2705"),n("td",null,"\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684value\u503C\u8868\u793A\u683C\u5F0F\u5316\u540E\u7684\u5B8C\u6574\u5B57\u7B26\u4E32\uFF0Cint\u4E3A\u6574\u6570\u90E8\u5206\uFF0Cdecimal\u4E3A\u5C0F\u6570\u90E8\u5206\uFF0C\u82E5\u683C\u5F0F\u5316\u540E\u7684\u5B57\u7B26\u4E32\u4E0D\u662F\u5408\u6CD5\u7684\u6570\u5B57\u5B57\u7B26\u4E32\uFF0C\u8BF7\u5C06int\u548Cdecimal\u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\u4E32")]),n("tr",null,[n("td",null,[n("code",null,"precision")]),n("td",null,"\u6570\u503C\u7CBE\u5EA6"),n("td",null,"number"),n("td",null,"-"),n("td",null,"\u2705"),n("td")]),n("tr",null,[n("td",null,[n("code",null,"prefix")]),n("td",null,"\u8BBE\u7F6E\u6570\u503C\u7684\u524D\u7F00"),n("td",null,"string"),n("td",null,"v-slot"),n("td",null,"-"),n("td")]),n("tr",null,[n("td",null,[n("code",null,"suffix")]),n("td",null,"\u8BBE\u7F6E\u6570\u503C\u7684\u540E\u7F00"),n("td",null,"string"),n("td",null,"v-slot"),n("td",null,"-"),n("td")]),n("tr",null,[n("td",null,[n("code",null,"title")]),n("td",null,"\u6570\u503C\u7684\u6807\u9898"),n("td",null,"string"),n("td",null,"v-slot"),n("td",null,"-"),n("td")]),n("tr",null,[n("td",null,[n("code",null,"value")]),n("td",null,"\u6570\u503C\u5185\u5BB9"),n("td",null,"string"),n("td",null,"number"),n("td",null,"-"),n("td")])])]),n("h3",{id:"StatisticSlots"},[n("span",null,"StatisticSlots"),n("a",{onclick:"window.location.hash = 'StatisticSlots'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u53C2\u6570\u7C7B\u578B"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"title")]),n("td",null,"\u81EA\u5B9A\u4E49\u6807\u9898"),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"defalut")]),n("td",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"prefix")]),n("td",null,"\u81EA\u5B9A\u4E49\u524D\u7F00"),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"suffix")]),n("td",null,"\u81EA\u5B9A\u4E49\u540E\u7F00"),n("td",null,"-"),n("td",null,"-")])])])],-1),_n=n("section",{class:"markdown"},[n("p",null,"\u5C55\u793A\u7EDF\u8BA1\u6570\u503C\u3002"),n("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},[n("span",null,"\u4F55\u65F6\u4F7F\u7528"),n("a",{onclick:"window.location.hash = '\u4F55\u65F6\u4F7F\u7528'",class:"anchor"},"#")]),n("ul",null,[n("li",null,"\u5F53\u9700\u8981\u7A81\u51FA\u67D0\u4E2A\u6216\u67D0\u7EC4\u6570\u5B57\u65F6"),n("li",null,"\u5F53\u9700\u8981\u5C55\u793A\u5E26\u63CF\u8FF0\u7684\u7EDF\u8BA1\u7C7B\u6570\u636E\u65F6\u4F7F\u7528")])],-1);function An(s,o,k,c,m,f){const i=u("IxIcon"),l=u("IxAnchorLink"),x=u("IxAnchor"),D=u("IxTooltip"),w=u("Basic"),b=u("Unit"),S=u("IxCol"),y=u("IxRow"),E=u("IxTab"),q=u("IxTabs");return p(),r("article",tn,[n("section",an,[n("h1",null,[sn,en,n("a",on,[a(i,{name:"edit"})])]),un]),c.selectedTab==="develop"?(p(),A(x,{key:0,class:"toc-wrapper",affix:"",offset:"16",onClick:o[0]||(o[0]=d=>c.goLink(d))},{default:e(()=>[a(l,{href:"#components-statistic-demo-Basic",title:"\u57FA\u672C\u4F7F\u7528"}),cn,a(l,{href:"#components-statistic-demo-Unit",title:"\u5355\u4F4D"}),ln,a(l,{href:"#API",title:"API"})]),_:1})):(p(),A(x,{key:1,class:"toc-wrapper",affix:"",offset:"16",onClick:o[1]||(o[1]=d=>c.goLink(d))},{default:e(()=>[a(l,{href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"})]),_:1})),a(q,{selectedKey:c.selectedTab,"onUpdate:selectedKey":o[3]||(o[3]=d=>c.selectedTab=d),type:"line",class:"component-tabs"},{default:e(()=>[a(E,{key:"develop",title:"\u5F00\u53D1\u6307\u5357"},{default:e(()=>[n("h2",pn,[kn,n("span",rn,[a(D,{title:c.showDevDemo?"\u9690\u85CF\u5F00\u53D1\u4E13\u7528\u6F14\u793A":"\u663E\u793A\u5F00\u53D1\u4E13\u7528\u6F14\u793A"},{default:e(()=>[a(i,{name:c.showDevDemo?"bug-filled":"bug",onClick:o[2]||(o[2]=d=>c.showDevDemo=!c.showDevDemo)},null,8,["name"])]),_:1},8,["title"])])]),n("section",dn,[a(y,{gutter:"8"},{default:e(()=>[a(S,{span:"24"},{default:e(()=>[a(w),a(b)]),_:1})]),_:1})]),mn]),_:1}),a(E,{key:"design",title:"\u8BBE\u8BA1\u6307\u5357"},{default:e(()=>[_n]),_:1})]),_:1},8,["selectedKey"])])}var Cn=_(nn,[["render",An]]);export{Cn as default};
