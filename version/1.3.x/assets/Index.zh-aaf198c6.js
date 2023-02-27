import{I as b,a as $}from"./index-30cd6a35.js";import{_ as C,I as G}from"./GlobalCodeBox-3884ee00.js";import{v as g,b as I,ah as d,aa as l,a8 as c,y as e,i as w,a9 as k,ac as x,ab as t,ad as a,ai as m,aq as F,w as j,am as P,al as L,H as E,I as A}from"./vendor-1c103b38.js";import{j as D,a as f,_}from"./index-4edbd2bb.js";import{I as v}from"./index-2a1f7397.js";import"./useInput-17e753c8.js";import"./useAutoRows-a7e251c5.js";const U=g({__name:"Basic",setup(n){const u=I("");return(o,s)=>{const i=v,h=D;return c(),d(h,{vertical:""},{default:l(()=>[e(i,{value:u.value,"onUpdate:value":s[0]||(s[0]=p=>u.value=p),placeholder:"Basic usage"},null,8,["value"]),e(i,{value:u.value,"onUpdate:value":s[1]||(s[1]=p=>u.value=p),placeholder:"Textarea usage",rows:"4"},null,8,["value"])]),_:1})}}}),H=g({name:"Basic",components:{"raw-demo":U},setup(){const{lang:n}=w(f);return{lang:n}}}),M={key:0},W={key:1},J=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxSpace")]),a(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("valueRef"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Basic usage"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("valueRef"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Textarea usage"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"rows"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("4"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("IxSpace")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),a(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`

`),t("span",{class:"token keyword"},"const"),a(" valueRef "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function K(n,u,o,s,i,h){const p=m("raw-demo"),r=C;return c(),d(r,{packageName:"components",componentName:"textarea",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20v-model%3Avalue%3D%22valueRef%22%20placeholder%3D%22Basic%20usage%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20v-model%3Avalue%3D%22valueRef%22%20placeholder%3D%22Textarea%20usage%22%20rows%3D%224%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20valueRef%20%3D%20ref('')%0A%3C%2Fscript%3E%0A",title:n.lang==="zh"?"基本使用":"Basic usage"},{description:l(()=>[n.lang==="zh"?(c(),k("p",M,"最简单的用法。")):x("",!0),n.lang==="en"?(c(),k("p",W,"Basic usage example.")):x("",!0)]),rawCode:l(()=>[e(p)]),highlightCode:l(()=>[J]),_:1},8,["title"])}const O=_(H,[["render",K]]),Q={};function X(n,u){const o=v,s=D;return c(),d(s,{vertical:""},{default:l(()=>[e(o,{autoRows:"",placeholder:"textarea autoRows"}),e(o,{autoRows:{minRows:3,maxRows:6},placeholder:"textarea autoRows"})]),_:1})}const Y=_(Q,[["render",X]]),Z=g({name:"AutoRows",components:{"raw-demo":Y},setup(){const{lang:n}=w(f);return{lang:n}}}),tt={key:0},at=t("code",null,"IxTextarea",-1),nt=t("code",null,"autoRows",-1),et=t("code",null,"autoRows",-1),st={key:1},ot=t("code",null,"IxTextarea",-1),ct=t("code",null,"autoRows",-1),lt=t("code",null,"autoRows",-1),ut=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxSpace")]),a(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"autoRows"),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("textarea autoRows"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},":autoRows"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("{ minRows: 3, maxRows: 6 }"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("textarea autoRows"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("IxSpace")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function pt(n,u,o,s,i,h){const p=m("raw-demo"),r=C;return c(),d(r,{packageName:"components",componentName:"textarea",demoName:"AutoRows",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20autoRows%20placeholder%3D%22textarea%20autoRows%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20%3AautoRows%3D%22%7B%20minRows%3A%203%2C%20maxRows%3A%206%20%7D%22%20placeholder%3D%22textarea%20autoRows%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:n.lang==="zh"?"文本域自适应高度":"Autosizing the height to fit the content"},{description:l(()=>[n.lang==="zh"?(c(),k("p",tt,[at,a(" 组件可以设置 "),nt,a(" 让组件高度自适应内容变化。另外 "),et,a(" 可以设定为一个对象，指定最小行数和最大行数。")])):x("",!0),n.lang==="en"?(c(),k("p",st,[a("The "),ot,a(" component can be set to "),ct,a(" to make the component highly adaptive to content changes. In addition, "),lt,a(" can be set as an object, specifying the minimum number of rows and the maximum number of rows.")])):x("",!0)]),rawCode:l(()=>[e(p)]),highlightCode:l(()=>[ut]),_:1},8,["title"])}const rt=_(Z,[["render",pt]]),dt=g({__name:"ShowCount",setup(n){const u=o=>`${o.length*2} - 100`;return(o,s)=>{const i=v,h=D;return c(),d(h,{vertical:""},{default:l(()=>[e(i,{showCount:"",placeholder:"Textarea showCount"}),e(i,{showCount:"",maxCount:"100",placeholder:"Textarea showCount with maxCount"}),e(i,{showCount:"",computeCount:u,placeholder:"Textarea showCount with computeCount"})]),_:1})}}}),it=g({name:"ShowCount",components:{"raw-demo":dt},setup(){const{lang:n}=w(f);return{lang:n}}}),kt={key:0},mt={key:1},ht=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxSpace")]),a(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"showCount"),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Textarea showCount"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"showCount"),a(),t("span",{class:"token attr-name"},"maxCount"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("100"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Textarea showCount with maxCount"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"showCount"),a(),t("span",{class:"token attr-name"},":computeCount"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("computeCount"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("Textarea showCount with computeCount"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("IxSpace")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),a(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"computeCount"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),a(" string")]),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),t("span",{class:"token punctuation"},"."),a("length "),t("span",{class:"token operator"},"*"),a(),t("span",{class:"token number"},"2"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," - 100"),t("span",{class:"token template-punctuation string"},"`")]),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function _t(n,u,o,s,i,h){const p=m("raw-demo"),r=C;return c(),d(r,{packageName:"components",componentName:"textarea",demoName:"ShowCount",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20placeholder%3D%22Textarea%20showCount%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20maxCount%3D%22100%22%20placeholder%3D%22Textarea%20showCount%20with%20maxCount%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20%3AcomputeCount%3D%22computeCount%22%20placeholder%3D%22Textarea%20showCount%20with%20computeCount%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aconst%20computeCount%20%3D%20(value%3A%20string)%20%3D%3E%20%60%24%7Bvalue.length%20*%202%7D%20-%20100%60%0A%3C%2Fscript%3E%0A",title:n.lang==="zh"?"文本域带数字统计":"Textarea with character counting"},{description:l(()=>[n.lang==="zh"?(c(),k("p",kt,"展示字数统计。")):x("",!0),n.lang==="en"?(c(),k("p",mt,"Show character counting.")):x("",!0)]),rawCode:l(()=>[e(p)]),highlightCode:l(()=>[ht]),_:1},8,["title"])}const xt=_(it,[["render",_t]]),gt={};function Ct(n,u){const o=v,s=D;return c(),d(s,{vertical:""},{default:l(()=>[e(o,{resize:"none",placeholder:"resize none"}),e(o,{resize:"both",placeholder:"resize both"}),e(o,{resize:"horizontal",placeholder:"resize horizontal"})]),_:1})}const wt=_(gt,[["render",Ct]]),ft=g({name:"Resize",components:{"raw-demo":wt},setup(){const{lang:n}=w(f);return{lang:n}}}),vt={key:0},Dt=t("code",null,"IxTextarea",-1),Et=t("code",null,"resize",-1),At=t("code",null,"vertical",-1),It={key:1},bt=t("code",null,"IxTextarea",-1),$t=t("code",null,"resize",-1),Ft=t("code",null,"vertical",-1),Tt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxSpace")]),a(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"resize"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("none"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("resize none"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"resize"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("both"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("resize both"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"resize"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("horizontal"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("resize horizontal"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("IxSpace")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function zt(n,u,o,s,i,h){const p=m("raw-demo"),r=C;return c(),d(r,{packageName:"components",componentName:"textarea",demoName:"Resize",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22none%22%20placeholder%3D%22resize%20none%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22both%22%20placeholder%3D%22resize%20both%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22horizontal%22%20placeholder%3D%22resize%20horizontal%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:n.lang==="zh"?"缩放文本域":"Resizing Textarea"},{description:l(()=>[n.lang==="zh"?(c(),k("p",vt,[Dt,a(" 组件可以设置 "),Et,a(" 调整可缩放方向，默认为 "),At,a("。")])):x("",!0),n.lang==="en"?(c(),k("p",It,[a("The "),bt,a(" component can be set to "),$t,a(" to adjust the zoomable direction, the default is "),Ft,a(".")])):x("",!0)]),rawCode:l(()=>[e(p)]),highlightCode:l(()=>[Tt]),_:1},8,["title"])}const Rt=_(ft,[["render",zt]]),Bt={};function yt(n,u){const o=v;return c(),d(o,{clearable:"",placeholder:"clearable textarea"})}const St=_(Bt,[["render",yt]]),qt=g({name:"Clearable",components:{"raw-demo":St},setup(){const{lang:n}=w(f);return{lang:n}}}),Nt={key:0},Vt={key:1},Gt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("IxTextarea")]),a(),t("span",{class:"token attr-name"},"clearable"),a(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("clearable textarea"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},"/>")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function jt(n,u,o,s,i,h){const p=m("raw-demo"),r=C;return c(),d(r,{packageName:"components",componentName:"textarea",demoName:"Clearable",code:"%3Ctemplate%3E%0A%20%20%3CIxTextarea%20clearable%20placeholder%3D%22clearable%20textarea%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",title:n.lang==="zh"?"可清除":"Clearable"},{description:l(()=>[n.lang==="zh"?(c(),k("p",Nt,"带清除图标的输入框，点击图标清空输入内容。")):x("",!0),n.lang==="en"?(c(),k("p",Vt,"With the clear icon input box, click the icon to empty the input. ")):x("",!0)]),rawCode:l(()=>[e(p)]),highlightCode:l(()=>[Gt]),_:1},8,["title"])}const Pt=_(qt,[["render",jt]]),Lt={},Ut={class:"markdown site-doc-api"},Ht=t("h3",{id:"IxTextarea"},[t("span",null,"IxTextarea"),t("a",{onclick:"window.location.hash = 'IxTextarea'",class:"anchor"},"#")],-1),Mt=t("h4",{id:"TextareaProps"},[t("span",null,"TextareaProps"),t("a",{onclick:"window.location.hash = 'TextareaProps'",class:"anchor"},"#")],-1),Wt=F('<blockquote><p>除以下表格之外还支持原生 <code>textarea</code> 元素的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" target="_blank" rel="noopener">所有属性</a>。</p></blockquote><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>v-model:value</code></td><td>控件值</td><td><code>string</code></td><td>-</td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>control</code></td><td>控件控制器</td><td><code>string | number | AbstractControl</code></td><td>-</td><td>-</td><td>配合 <code>@idux/cdk/forms</code> 使用, 参考 <a href="/components/form/zh">Form</a></td></tr><tr><td><code>autoRows</code></td><td>是否显示自适应 <code>rows</code></td><td><code>boolean | { minRows?: number, maxRows?: number }</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>clearable</code></td><td>是否显示清除图标</td><td><code>boolean</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>clearIcon</code></td><td>设置清除图标</td><td><code>string | #clearIcon</code></td><td><code>&#39;close-circle&#39;</code></td><td>✅</td><td>-</td></tr><tr><td><code>computeCount</code></td><td>自定义计算字符数的函数</td><td><code>(value: string) =&gt; string</code></td><td>-</td><td>✅</td><td>优先级高于 <code>maxCount</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>maxCount</code></td><td>数字提示显示的最大值</td><td><code>number</code></td><td>-</td><td>✅</td><td>仅用于提示，不做校验控制</td></tr><tr><td><code>readonly</code></td><td>是否只读状态</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>-</td></tr><tr><td><code>resize</code></td><td>缩放方向</td><td><code>none | both | horizontal | vertical</code></td><td><code>vertical</code></td><td>✅</td><td>启用 <code>autoRows</code> 的时，仅 <code>none | horizontal</code> 有效</td></tr><tr><td><code>showCount</code></td><td>是否展示字符数</td><td><code>boolean</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>size</code></td><td>设置大小</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>✅</td><td>-</td></tr><tr><td><code>status</code></td><td>手动指定校验状态</td><td><code>valid | invalid | validating</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>trim</code></td><td>失去焦点后自动去除前后空格</td><td><code>boolean</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>onChange</code></td><td>值发生改变后的回调</td><td><code>(value: string, oldValue: string) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>onClear</code></td><td>清除图标被点击后的回调</td><td><code>(evt: MouseEvent) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>',2);function Jt(n,u){const o=$,s=b;return c(),k("section",Ut,[e(s,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[e(o,{href:"#IxTextarea",title:"IxTextarea"},{default:l(()=>[e(o,{href:"#TextareaProps",title:"TextareaProps"})]),_:1})]),_:1}),Ht,Mt,Wt])}const Kt=_(Lt,[["render",Jt]]),Ot={},Qt={class:"markdown site-doc-design"},Xt=t("h2",{id:"组件定义"},[t("span",null,"组件定义"),t("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),Yt=t("p",null,"支持输入多行文本信息的输入框。",-1),Zt=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),ta=t("p",null,"在表单配置中，对某配置项输入较长的文案信息。",-1),aa=t("h2",{id:"组件构成"},[t("span",null,"组件构成"),t("a",{onclick:"window.location.hash = '组件构成'",class:"anchor"},"#")],-1),na=F("<table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>输入框</td><td>输入框默认高度根据文案最大长度变化，最大默认高度为3行文案高度。 <br> 文案输入至最右侧自动转行。</td></tr><tr><td>字数统计（可选）</td><td>展示当前输入字数与最大限制字数，当前输入字数根据用户输入的文案实时变化。 <br> 仅用于对输入信息有明确长度要求的场景，例如添加描述、备注等。</td></tr><tr><td>拖拽图标（可选）</td><td>长按拖拽图标即可上下拖动，自由变更文本域的高度，高度存在上限。</td></tr></tbody></table>",1),ea=t("h2",{id:"组件类型"},[t("span",null,"组件类型"),t("a",{onclick:"window.location.hash = '组件类型'",class:"anchor"},"#")],-1),sa=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"固定高度"),t("td",null,"固定输入框的高度，内容超框后触发滚动条。")]),t("tr",null,[t("td",null,"自适应高度"),t("td",null,"当输入信息超出输入框默认高度时，高度自动变化来适配输入的信息。")])])],-1),oa=t("h2",{id:"组件状态"},[t("span",null,"组件状态"),t("a",{onclick:"window.location.hash = '组件状态'",class:"anchor"},"#")],-1),ca=t("p",null,"当存在字数统计时，文本域超出字数限制时进行标红报错。若同时存在其他报错信息，与表单规范一样采用底部文字报错形式。",-1);function la(n,u){const o=$,s=b;return c(),k("section",Qt,[e(s,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[e(o,{href:"#组件定义",title:"组件定义"}),e(o,{href:"#使用场景",title:"使用场景"}),e(o,{href:"#组件构成",title:"组件构成"}),e(o,{href:"#组件类型",title:"组件类型"}),e(o,{href:"#组件状态",title:"组件状态"})]),_:1}),Xt,Yt,Zt,ta,aa,na,ea,sa,oa,ca])}const ua=_(Ot,[["render",la]]),pa={name:"DocsComponentsTextarea",components:{DemoBasic:O,DemoAutoRows:rt,DemoShowCount:xt,DemoResize:Rt,DemoClearable:Pt,ApiDocs:Kt,DesignDocs:ua},setup(){const n=P(),u=L(),o=I(n.query.tab??"demo");j(o,h=>{u.push({query:{tab:h}})});const s=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),i=I(!1);return{checkedDoc:o,docRadioData:s,showDevDemo:i}}},ra={class:"site-doc-wrapper"},da={class:"markdown site-doc-header"},ia=t("h1",null,[a("Textarea"),t("span",{class:"subtitle"},"文本域")],-1),ka=t("div",{class:"markdown site-doc-description"},null,-1),ma={class:"site-doc-demo"};function ha(n,u,o,s,i,h){const p=G,r=$,T=b,z=m("DemoBasic"),R=m("DemoAutoRows"),B=m("DemoShowCount"),y=m("DemoResize"),S=m("DemoClearable"),q=m("ApiDocs"),N=m("DesignDocs");return c(),k("article",ra,[t("section",da,[ia,ka,e(p,{value:s.checkedDoc,"onUpdate:value":u[0]||(u[0]=V=>s.checkedDoc=V),dataSource:s.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),E(t("section",ma,[e(T,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[(s.showDevDemo,c(),d(r,{key:0,href:"#components-textarea-basic",title:"基本使用"})),(s.showDevDemo,c(),d(r,{key:1,href:"#components-textarea-auto-rows",title:"文本域自适应高度"})),(s.showDevDemo,c(),d(r,{key:2,href:"#components-textarea-show-count",title:"文本域带数字统计"})),(s.showDevDemo,c(),d(r,{key:3,href:"#components-textarea-resize",title:"缩放文本域"})),(s.showDevDemo,c(),d(r,{key:4,href:"#components-textarea-clearable",title:"可清除"}))]),_:1}),e(z),e(R),e(B),e(y),e(S)],512),[[A,s.checkedDoc==="demo"]]),E(e(q,null,null,512),[[A,s.checkedDoc==="api"]]),E(e(N,null,null,512),[[A,s.checkedDoc==="design"]])])}const Da=_(pa,[["render",ha]]);export{Da as default};
