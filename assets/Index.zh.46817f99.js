import{I as D,a as F}from"./index.55676803.js";import{_ as E,I as V}from"./GlobalCodeBox.1b09467d.js";import{a9 as i,y as e,aa as o,F as f,a8 as c,ad as n,v as g,i as I,ah as m,ai as k,ac as _,ab as t,aq as T,b as H,w as R,am as G,al as M,I as v,J as A}from"./vendor.32cbbd74.js";import{_ as r,aq as w,a as $,w as L,c as U}from"./index.c56724f3.js";const j={};function Y(a,l){const s=w;return c(),i(f,null,[e(s,{title:"Title",description:"This is a description"}),e(s,null,{description:o(()=>[n(" This is a description ")]),default:o(()=>[n(" Title ")]),_:1})],64)}const J=r(j,[["render",Y]]),K=g({name:"Basic",components:{"raw-demo":J},setup(){const{lang:a}=I($);return{lang:a}}}),O={key:0},Q={key:1},W=t("code",null,"title",-1),X=t("code",null,"description",-1),Z=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Title"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
    Title
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#description"),t("span",{class:"token punctuation"},">")]),n(" This is a description "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function tt(a,l,s,d,x,h){const p=k("raw-demo"),u=E;return c(),m(u,{packageName:"components",componentName:"header",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxHeader%20title%3D%22Title%22%20description%3D%22This%20is%20a%20description%22%20%2F%3E%0A%20%20%3CIxHeader%3E%0A%20%20%20%20Title%0A%20%20%20%20%3Ctemplate%20%23description%3E%20This%20is%20a%20description%20%3C%2Ftemplate%3E%0A%20%20%3C%2FIxHeader%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:o(()=>[a.lang==="zh"?(c(),i("p",O,"\u663E\u793A\u6807\u9898\u4EE5\u53CA\u63CF\u8FF0\u6587\u5B57\u3002")):_("",!0),a.lang==="en"?(c(),i("p",Q,[n("Display "),W,n(" and "),X,n(".")])):_("",!0)]),rawCode:o(()=>[e(p)]),highlightCode:o(()=>[Z]),_:1},8,["title"])}const nt=r(K,[["render",tt]]),at=g({setup(){return{onPrefixClick:s=>console.log(s),onSuffixClick:s=>console.log(s)}}});function et(a,l,s,d,x,h){const p=w,u=L,C=U;return c(),i(f,null,[e(p,{description:"This is a description",prefix:"arrow-left",suffix:"setting",onPrefixClick:a.onPrefixClick,onSuffixClick:a.onSuffixClick},{default:o(()=>[n(" Title ")]),_:1},8,["onPrefixClick","onSuffixClick"]),e(p,{description:"This is a description"},{prefix:o(()=>[e(u,{name:"caret-left-filled",onClick:a.onPrefixClick},null,8,["onClick"])]),suffix:o(()=>[e(C,{icon:"setting",mode:"text",size:"xs",onClick:a.onSuffixClick},null,8,["onClick"]),e(C,{icon:"menu",mode:"text",size:"xs",onClick:a.onSuffixClick},null,8,["onClick"])]),default:o(()=>[n(" Title ")]),_:1})],64)}const st=r(at,[["render",et]]),ot=g({name:"PrefixSuffix",components:{"raw-demo":st},setup(){const{lang:a}=I($);return{lang:a}}}),ct=t("p",null,"\u6807\u9898\u524D\u7F00, \u901A\u5E38\u7528\u4E8E\u8FD4\u56DE\u4E0A\u4E00\u9875\u3002",-1),dt=t("p",null,"\u5728\u6807\u9898\u7684\u53F3\u4FA7\u53EF\u4EE5\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6309\u94AE\u3002",-1),lt=t("p",null,"The title prefix, usually used to return to the previous page.",-1),it=t("p",null,"You can customize the operation buttons on the right side of the title.",-1),pt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(`
    `),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"prefix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("arrow-left"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("setting"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@prefixClick"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onPrefixClick"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@suffixClick"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSuffixClick"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    Title
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    Title
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxIcon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("caret-left-filled"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onPrefixClick"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("setting"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("xs"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSuffixClick"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("menu"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("xs"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSuffixClick"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onPrefixClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"evt"),t("span",{class:"token operator"},":"),n(" MouseEvent")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(" console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("evt"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onSuffixClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"evt"),t("span",{class:"token operator"},":"),n(" MouseEvent")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(" console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("evt"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(" onPrefixClick"),t("span",{class:"token punctuation"},","),n(" onSuffixClick "),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function ut(a,l,s,d,x,h){const p=k("raw-demo"),u=E;return c(),m(u,{packageName:"components",componentName:"header",demoName:"PrefixSuffix",code:"%3Ctemplate%3E%0A%20%20%3CIxHeader%0A%20%20%20%20description%3D%22This%20is%20a%20description%22%0A%20%20%20%20prefix%3D%22arrow-left%22%0A%20%20%20%20suffix%3D%22setting%22%0A%20%20%20%20%40prefixClick%3D%22onPrefixClick%22%0A%20%20%20%20%40suffixClick%3D%22onSuffixClick%22%0A%20%20%3E%0A%20%20%20%20Title%0A%20%20%3C%2FIxHeader%3E%0A%20%20%3CIxHeader%20description%3D%22This%20is%20a%20description%22%3E%0A%20%20%20%20Title%0A%20%20%20%20%3Ctemplate%20%23prefix%3E%0A%20%20%20%20%20%20%3CIxIcon%20name%3D%22caret-left-filled%22%20%40click%3D%22onPrefixClick%22%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%3CIxButton%20icon%3D%22setting%22%20mode%3D%22text%22%20size%3D%22xs%22%20%40click%3D%22onSuffixClick%22%20%2F%3E%0A%20%20%20%20%20%20%3CIxButton%20icon%3D%22menu%22%20mode%3D%22text%22%20size%3D%22xs%22%20%40click%3D%22onSuffixClick%22%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2FIxHeader%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20onPrefixClick%20%3D%20(evt%3A%20MouseEvent)%20%3D%3E%20console.log(evt)%0A%20%20%20%20const%20onSuffixClick%20%3D%20(evt%3A%20MouseEvent)%20%3D%3E%20console.log(evt)%0A%0A%20%20%20%20return%20%7B%20onPrefixClick%2C%20onSuffixClick%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u524D\u7F00\u548C\u540E\u7F00":"Prefix and suffix"},{description:o(()=>[a.lang==="zh"?(c(),i(f,{key:0},[ct,dt],64)):_("",!0),a.lang==="en"?(c(),i(f,{key:1},[lt,it],64)):_("",!0)]),rawCode:o(()=>[e(p)]),highlightCode:o(()=>[pt]),_:1},8,["title"])}const rt=r(ot,[["render",ut]]),kt={};function ht(a,l){const s=w;return c(),i(f,null,[e(s,{avatar:{src:"/images/avatar/1.png"},description:"This is a description"},{default:o(()=>[n(" Title ")]),_:1},8,["avatar"]),e(s,{avatar:{text:"USER"},description:"This is a description"},{default:o(()=>[n(" Title ")]),_:1}),e(s,{avatar:"user",description:"This is a description"},{default:o(()=>[n(" Title ")]),_:1})],64)}const mt=r(kt,[["render",ht]]),ft=g({name:"Avatar",components:{"raw-demo":mt},setup(){const{lang:a}=I($);return{lang:a}}}),_t={key:0},xt=t("code",null,"avatar",-1),gt={key:1},Ct=t("code",null,"avatar",-1),vt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},":avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ src: '/images/avatar/1.png' }"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},":avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ text: 'USER' }"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("user"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"description"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("This is a description"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function At(a,l,s,d,x,h){const p=k("raw-demo"),u=E;return c(),m(u,{packageName:"components",componentName:"header",demoName:"Avatar",code:"%3Ctemplate%3E%0A%20%20%3CIxHeader%20%3Aavatar%3D%22%7B%20src%3A%20'%2Fimages%2Favatar%2F1.png'%20%7D%22%20description%3D%22This%20is%20a%20description%22%3E%20Title%20%3C%2FIxHeader%3E%0A%20%20%3CIxHeader%20%3Aavatar%3D%22%7B%20text%3A%20'USER'%20%7D%22%20description%3D%22This%20is%20a%20description%22%3E%20Title%20%3C%2FIxHeader%3E%0A%20%20%3CIxHeader%20avatar%3D%22user%22%20description%3D%22This%20is%20a%20description%22%3E%20Title%20%3C%2FIxHeader%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u5934\u50CF":"Avatar"},{description:o(()=>[a.lang==="zh"?(c(),i("p",_t,[n("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),xt,n(" \u6765\u81EA\u5B9A\u4E49\u5934\u50CF\u3002")])):_("",!0),a.lang==="en"?(c(),i("p",gt,[n("The avatar can be customized by setting "),Ct,n(".")])):_("",!0)]),rawCode:o(()=>[e(p)]),highlightCode:o(()=>[vt]),_:1},8,["title"])}const Dt=r(ft,[["render",At]]),Et={};function It(a,l){const s=w;return c(),i(f,null,[e(s,{showBar:"",size:"lg"},{default:o(()=>[n(" Title ")]),_:1}),e(s,{showBar:""},{default:o(()=>[n(" Title ")]),_:1}),e(s,{showBar:"",size:"sm"},{default:o(()=>[n(" Title ")]),_:1})],64)}const wt=r(Et,[["render",It]]),$t=g({name:"SizeBar",components:{"raw-demo":wt},setup(){const{lang:a}=I($);return{lang:a}}}),Ft=t("p",null,"\u6807\u9898\u5171\u5206\u4E3A 3 \u79CD\uFF1A\u5927\u3001\u4E2D \u548C \u5C0F, \u9ED8\u8BA4\u4E3A\u4E2D\u53F7\u3002",-1),Tt=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"showBar"),n(" \u6765\u663E\u793A\u4E00\u4E2A\u7AD6\u6761\uFF0C\u907F\u514D\u6807\u9898\u5355\u8C03\u3002")],-1),Ht=t("p",null,[n("There are 3 types of titles: "),t("code",null,"lg"),n(", "),t("code",null,"md"),n(" and "),t("code",null,"sm"),n(". The default is "),t("code",null,"md"),n(".")],-1),Bt=t("p",null,[n("You can display a vertical bar by setting "),t("code",null,"showBar"),n(" to avoid monotonous title.")],-1),bt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"showBar"),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"showBar"),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxHeader")]),n(),t("span",{class:"token attr-name"},"showBar"),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" Title "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxHeader")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function zt(a,l,s,d,x,h){const p=k("raw-demo"),u=E;return c(),m(u,{packageName:"components",componentName:"header",demoName:"SizeBar",code:"%3Ctemplate%3E%0A%20%20%3CIxHeader%20showBar%20size%3D%22lg%22%3E%20Title%20%3C%2FIxHeader%3E%0A%20%20%3CIxHeader%20showBar%3E%20Title%20%3C%2FIxHeader%3E%0A%20%20%3CIxHeader%20showBar%20size%3D%22sm%22%3E%20Title%20%3C%2FIxHeader%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u5927\u5C0F\u548C\u7AD6\u6761":"Size and bar"},{description:o(()=>[a.lang==="zh"?(c(),i(f,{key:0},[Ft,Tt],64)):_("",!0),a.lang==="en"?(c(),i(f,{key:1},[Ht,Bt],64)):_("",!0)]),rawCode:o(()=>[e(p)]),highlightCode:o(()=>[bt]),_:1},8,["title"])}const yt=r($t,[["render",zt]]),St={},qt={class:"markdown site-doc-api"},Pt=t("h3",{id:"IxHeader"},[t("span",null,"IxHeader"),t("a",{onclick:"window.location.hash = 'IxHeader'",class:"anchor"},"#")],-1),Nt=t("h4",{id:"HeaderProps"},[t("span",null,"HeaderProps"),t("a",{onclick:"window.location.hash = 'HeaderProps'",class:"anchor"},"#")],-1),Vt=T("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>avatar</code></td><td>\u8BBE\u7F6E\u5934\u50CF</td><td><code>string | AvatarProps</code></td><td>-</td><td>-</td><td>\u4F20\u5165 <code>string</code> \u65F6\uFF0C\u4E3A\u5934\u50CF\u7684\u56FE\u6807</td></tr><tr><td><code>description</code></td><td>\u6807\u9898\u4E0B\u65B9\u7684\u8BF4\u660E\u6587\u5B57</td><td><code>string</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>-</td></tr><tr><td><code>prefix</code></td><td>\u6807\u9898\u524D\u7F00\u56FE\u6807</td><td><code>string | VNode</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>size</code></td><td>\u6807\u9898\u5927\u5C0F</td><td><code>&#39;lg&#39; | &#39;md&#39; | &#39;sm&#39;</code></td><td><code>&#39;md&#39;</code></td><td>-</td><td>-</td></tr><tr><td><code>showBar</code></td><td>\u662F\u5426\u663E\u793A\u6807\u9898\u524D\u7684\u7AD6\u6761</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>-</td></tr><tr><td><code>suffix</code></td><td>\u6807\u9898\u540E\u7F00\u56FE\u6807</td><td><code>string | VNode</code></td><td>-</td><td>-</td><td>\u901A\u5E38\u7528\u4E8E\u989D\u5916\u64CD\u4F5C</td></tr><tr><td><code>title</code></td><td>\u6807\u9898\u6587\u5B57</td><td><code>string | #default</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>onPrefixClick</code></td><td>\u524D\u7F00\u56FE\u6807\u88AB\u70B9\u51FB</td><td><code>(evt: MouseEvent) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>onSuffixClick</code></td><td>\u540E\u7F00\u56FE\u6807\u88AB\u70B9\u51FB</td><td><code>(evt: MouseEvent) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1),Rt=t("h4",{id:"HeaderSlots"},[t("span",null,"HeaderSlots"),t("a",{onclick:"window.location.hash = 'HeaderSlots'",class:"anchor"},"#")],-1),Gt=T("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>avatar</code></td><td>\u81EA\u5B9A\u4E49\u5934\u50CF</td><td>-</td><td>-</td></tr><tr><td><code>description</code></td><td>\u81EA\u5B9A\u4E49\u8BF4\u660E\u6587\u5B57</td><td>-</td><td>-</td></tr><tr><td><code>prefix</code></td><td>\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td>-</td><td>-</td></tr><tr><td><code>suffix</code></td><td>\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</td><td>-</td><td>-</td></tr><tr><td><code>title</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u6587\u5B57</td><td>-</td><td>-</td></tr></tbody></table>",1);function Mt(a,l){const s=F,d=D;return c(),i("section",qt,[e(d,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[e(s,{href:"#ixheader",title:"IxHeader"},{default:o(()=>[e(s,{href:"#headerprops",title:"HeaderProps"}),e(s,{href:"#headerslots",title:"HeaderSlots"})]),_:1})]),_:1}),Pt,Nt,Vt,Rt,Gt])}const Lt=r(St,[["render",Mt]]),Ut={},jt={class:"markdown site-doc-design"},Yt=t("h2",{id:"\u7EC4\u4EF6\u5B9A\u4E49"},[t("span",null,"\u7EC4\u4EF6\u5B9A\u4E49"),t("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u5B9A\u4E49'",class:"anchor"},"#")],-1),Jt=t("p",null,"\u9875\u5934\u7528\u4E8E\u5404\u4E2D\u5BB9\u5668\u7684\u9876\u90E8\uFF0C\u8D77\u5230\u4E86\u5185\u5BB9\u6982\u89C8\u548C\u5F15\u5BFC\u64CD\u4F5C\u7684\u4F5C\u7528\u3002",-1),Kt=t("h2",{id:"\u4F7F\u7528\u573A\u666F"},[t("span",null,"\u4F7F\u7528\u573A\u666F"),t("a",{onclick:"window.location.hash = '\u4F7F\u7528\u573A\u666F'",class:"anchor"},"#")],-1),Ot=t("p",null,"\u5F53\u9700\u8981\u4F7F\u7528\u6237\u5FEB\u901F\u7406\u89E3\u5F53\u524D\u5BB9\u5668\u662F\u4EC0\u4E48\u4EE5\u53CA\u63D0\u4F9B\u4E00\u4E9B\u5FEB\u6377\u64CD\u4F5C\u3002",-1);function Qt(a,l){const s=F,d=D;return c(),i("section",jt,[e(d,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[e(s,{href:"#\u7EC4\u4EF6\u5B9A\u4E49",title:"\u7EC4\u4EF6\u5B9A\u4E49"}),e(s,{href:"#\u4F7F\u7528\u573A\u666F",title:"\u4F7F\u7528\u573A\u666F"})]),_:1}),Yt,Jt,Kt,Ot])}const Wt=r(Ut,[["render",Qt]]),Xt={},Zt={class:"markdown site-doc-theme"},tn=T("<table><thead><tr><th>\u540D\u79F0</th><th>default</th><th>seer</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>@header-height-sm</code></td><td><code>var(--ix-height-lg)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-height-md</code></td><td><code>var(--ix-height-xl)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-height-lg</code></td><td><code>var(--ix-height-2xl)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-height-xl</code></td><td><code>var(--ix-height-3xl)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-font-size-sm</code></td><td><code>var(--ix-font-size-md)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-font-size-md</code></td><td><code>var(--ix-font-size-lg)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-font-size-lg</code></td><td><code>var(--ix-font-size-xl)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-font-size-xl</code></td><td><code>var(--ix-font-size-2xl)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-color</code></td><td><code>var(--ix-text-color-title)</code></td><td><code>var(--ix-text-color)</code></td><td>-</td></tr><tr><td><code>@header-color-hover</code></td><td><code>var(--ix-color-primary-l10)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-color-active</code></td><td><code>var(--ix-color-primary-d10)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-color-disabled</code></td><td><code>var(--ix-text-color-disabled)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-background-color</code></td><td><code>var(--ix-background-color)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-bar-width</code></td><td><code>4px</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-bar-background-color</code></td><td><code>var(--ix-color-primary)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-title-font-weight</code></td><td><code>var(--ix-font-weight-lg)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-sub-title-color</code></td><td><code>var(--ix-text-color-title-secondary)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-sub-title-font-size</code></td><td><code>var(--ix-font-size-md)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-suffix-color</code></td><td><code>var(--ix-text-color-title-secondary)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-description-color</code></td><td><code>var(--ix-text-color-info)</code></td><td>-</td><td>-</td></tr><tr><td><code>@header-description-font-size</code></td><td><code>var(--ix-font-size-md)</code></td><td><code>var(--ix-font-size-sm)</code></td><td>-</td></tr><tr><td><code>@header-icon-font-size</code></td><td><code>inherit</code></td><td><code>var(--ix-font-size-lg)</code></td><td>-</td></tr></tbody></table>",1);function nn(a,l){const s=D;return c(),i("section",Zt,[e(s,{class:"site-anchor",affix:"",offset:16}),tn])}const an=r(Xt,[["render",nn]]),en={name:"DocsComponentsHeader",components:{DemoBasic:nt,DemoPrefixSuffix:rt,DemoAvatar:Dt,DemoSizeBar:yt,ApiDocs:Lt,DesignDocs:Wt,ThemeDocs:an},setup(){var h;const a=G(),l=M(),s=H((h=a.query.tab)!=null?h:"demo");R(s,p=>{l.push({query:{tab:p}})});const d=[{label:"\u793A\u4F8B",value:"demo"},{label:"API",value:"api"},,{label:"\u6307\u5357",value:"design"},{label:"\u4E3B\u9898",value:"theme"}].filter(Boolean),x=H(!1);return{checkedDoc:s,docRadioData:d,showDevDemo:x}}},sn={class:"site-doc-wrapper"},on={class:"markdown site-doc-header"},cn=t("h1",null,[n("Header"),t("span",{class:"subtitle"},"\u9875\u5934")],-1),dn=t("div",{class:"markdown site-doc-description"},null,-1),ln={class:"site-doc-demo"};function pn(a,l,s,d,x,h){const p=V,u=F,C=D,B=k("DemoBasic"),b=k("DemoPrefixSuffix"),z=k("DemoAvatar"),y=k("DemoSizeBar"),S=k("ApiDocs"),q=k("DesignDocs"),P=k("ThemeDocs");return c(),i("article",sn,[t("section",on,[cn,dn,e(p,{value:d.checkedDoc,"onUpdate:value":l[0]||(l[0]=N=>d.checkedDoc=N),dataSource:d.docRadioData,size:"lg",buttoned:""},null,8,["value","dataSource"])]),v(t("section",ln,[e(C,{class:"site-anchor",affix:"",offset:16},{default:o(()=>[(d.showDevDemo,c(),m(u,{key:0,href:"#components-header-basic",title:"\u57FA\u672C\u4F7F\u7528"})),(d.showDevDemo,c(),m(u,{key:1,href:"#components-header-prefix-suffix",title:"\u524D\u7F00\u548C\u540E\u7F00"})),(d.showDevDemo,c(),m(u,{key:2,href:"#components-header-avatar",title:"\u5934\u50CF"})),(d.showDevDemo,c(),m(u,{key:3,href:"#components-header-size-bar",title:"\u5927\u5C0F\u548C\u7AD6\u6761"}))]),_:1}),e(B),e(b),e(z),e(y)],512),[[A,d.checkedDoc==="demo"]]),v(e(S,null,null,512),[[A,d.checkedDoc==="api"]]),v(e(q,null,null,512),[[A,d.checkedDoc==="design"]]),v(e(P,null,null,512),[[A,d.checkedDoc==="theme"]])])}const mn=r(en,[["render",pn]]);export{mn as default};