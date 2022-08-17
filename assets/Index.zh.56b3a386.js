import{_ as C}from"./GlobalCodeBox.505c46ae.js";import{d as x,m as w,j as k,w as s,r as o,o as c,f as u,i as g,a as A,_ as F,b as m,v as h,e as n,g as t}from"./index.830f2220.js";const S=x({__name:"Basic",setup(a){const l=w("");return(r,e)=>{const i=o("IxTextarea"),_=o("IxSpace");return c(),k(_,{vertical:""},{default:s(()=>[u(i,{value:l.value,"onUpdate:value":e[0]||(e[0]=d=>l.value=d),placeholder:"Basic usage"},null,8,["value"]),u(i,{value:l.value,"onUpdate:value":e[1]||(e[1]=d=>l.value=d),placeholder:"Textarea usage",rows:"4"},null,8,["value"])]),_:1})}}}),q=x({name:"components-textarea-Basic",components:{"raw-demo":S},setup(){const{lang:a}=g(A);return{lang:a}}}),N={key:0},P={key:1},L=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),t(),n("span",{class:"token attr-name"},"vertical"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic usage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valueRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Textarea usage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" valueRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function j(a,l,r,e,i,_){const d=o("raw-demo"),p=C;return c(),k(p,{packageName:"components",componentName:"textarea",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20v-model%3Avalue%3D%22valueRef%22%20placeholder%3D%22Basic%20usage%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20v-model%3Avalue%3D%22valueRef%22%20placeholder%3D%22Textarea%20usage%22%20rows%3D%224%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20valueRef%20%3D%20ref('')%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:s(()=>[a.lang==="zh"?(c(),m("p",N,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002")):h("",!0),a.lang==="en"?(c(),m("p",P,"Basic usage example.")):h("",!0)]),rawCode:s(()=>[u(d)]),highlightCode:s(()=>[L]),_:1},8,["title"])}const V=F(q,[["render",j]]),U={};function K(a,l){const r=o("IxTextarea"),e=o("IxSpace");return c(),k(e,{vertical:""},{default:s(()=>[u(r,{autoRows:"",placeholder:"textarea autoRows"}),u(r,{autoRows:{minRows:3,maxRows:6},placeholder:"textarea autoRows"})]),_:1})}const H=F(U,[["render",K]]),M=x({name:"components-textarea-AutoRows",components:{"raw-demo":H},setup(){const{lang:a}=g(A);return{lang:a}}}),W={key:0},G=n("code",null,"IxTextarea",-1),J=t(" \u7EC4\u4EF6\u53EF\u4EE5\u8BBE\u7F6E "),O=n("code",null,"autoRows",-1),Q=t(" \u8BA9\u7EC4\u4EF6\u9AD8\u5EA6\u81EA\u9002\u5E94\u5185\u5BB9\u53D8\u5316\u3002\u53E6\u5916 "),X=n("code",null,"autoRows",-1),Y=t(" \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002"),Z=[G,J,O,Q,X,Y],nn={key:1},tn=t("The "),un=n("code",null,"IxTextarea",-1),an=t(" component can be set to "),en=n("code",null,"autoRows",-1),ln=t(" to make the component highly adaptive to content changes. In addition, "),on=n("code",null,"autoRows",-1),sn=t(" can be set as an object, specifying the minimum number of rows and the maximum number of rows."),cn=[tn,un,an,en,ln,on,sn],pn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),t(),n("span",{class:"token attr-name"},"vertical"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"autoRows"),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("textarea autoRows"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},":autoRows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ minRows: 3, maxRows: 6 }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("textarea autoRows"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function rn(a,l,r,e,i,_){const d=o("raw-demo"),p=C;return c(),k(p,{packageName:"components",componentName:"textarea",demoName:"AutoRows",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20autoRows%20placeholder%3D%22textarea%20autoRows%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20%3AautoRows%3D%22%7B%20minRows%3A%203%2C%20maxRows%3A%206%20%7D%22%20placeholder%3D%22textarea%20autoRows%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u6587\u672C\u57DF\u81EA\u9002\u5E94\u9AD8\u5EA6":"Autosizing the height to fit the content"},{description:s(()=>[a.lang==="zh"?(c(),m("p",W,Z)):h("",!0),a.lang==="en"?(c(),m("p",nn,cn)):h("",!0)]),rawCode:s(()=>[u(d)]),highlightCode:s(()=>[pn]),_:1},8,["title"])}const dn=F(M,[["render",rn]]),kn=x({__name:"ShowCount",setup(a){const l=r=>`${r.length*2} - 100`;return(r,e)=>{const i=o("IxTextarea"),_=o("IxSpace");return c(),k(_,{vertical:""},{default:s(()=>[u(i,{showCount:"",placeholder:"Textarea showCount"}),u(i,{showCount:"",maxCount:"100",placeholder:"Textarea showCount with maxCount"}),u(i,{showCount:"",computeCount:l,placeholder:"Textarea showCount with computeCount"})]),_:1})}}}),mn=x({name:"components-textarea-ShowCount",components:{"raw-demo":kn},setup(){const{lang:a}=g(A);return{lang:a}}}),hn={key:0},_n={key:1},Fn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),t(),n("span",{class:"token attr-name"},"vertical"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"showCount"),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Textarea showCount"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"showCount"),t(),n("span",{class:"token attr-name"},"maxCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Textarea showCount with maxCount"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"showCount"),t(),n("span",{class:"token attr-name"},":computeCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("computeCount"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Textarea showCount with computeCount"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"computeCount"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - 100"),n("span",{class:"token template-punctuation string"},"`")]),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function En(a,l,r,e,i,_){const d=o("raw-demo"),p=C;return c(),k(p,{packageName:"components",componentName:"textarea",demoName:"ShowCount",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20placeholder%3D%22Textarea%20showCount%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20maxCount%3D%22100%22%20placeholder%3D%22Textarea%20showCount%20with%20maxCount%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20showCount%20%3AcomputeCount%3D%22computeCount%22%20placeholder%3D%22Textarea%20showCount%20with%20computeCount%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aconst%20computeCount%20%3D%20(value%3A%20string)%20%3D%3E%20%60%24%7Bvalue.length%20*%202%7D%20-%20100%60%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u6587\u672C\u57DF\u5E26\u6570\u5B57\u7EDF\u8BA1":"Textarea with character counting"},{description:s(()=>[a.lang==="zh"?(c(),m("p",hn,"\u5C55\u793A\u5B57\u6570\u7EDF\u8BA1\u3002")):h("",!0),a.lang==="en"?(c(),m("p",_n,"Show character counting.")):h("",!0)]),rawCode:s(()=>[u(d)]),highlightCode:s(()=>[Fn]),_:1},8,["title"])}const xn=F(mn,[["render",En]]),Cn={};function gn(a,l){const r=o("IxTextarea"),e=o("IxSpace");return c(),k(e,{vertical:""},{default:s(()=>[u(r,{resize:"none",placeholder:"resize none"}),u(r,{resize:"both",placeholder:"resize both"}),u(r,{resize:"horizontal",placeholder:"resize horizontal"})]),_:1})}const An=F(Cn,[["render",gn]]),wn=x({name:"components-textarea-Resize",components:{"raw-demo":An},setup(){const{lang:a}=g(A);return{lang:a}}}),fn={key:0},Bn=n("code",null,"IxTextarea",-1),Dn=t(" \u7EC4\u4EF6\u53EF\u4EE5\u8BBE\u7F6E "),vn=n("code",null,"resize",-1),bn=t(" \u8C03\u6574\u53EF\u7F29\u653E\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A "),In=n("code",null,"vertical",-1),$n=t("\u3002"),Tn=[Bn,Dn,vn,bn,In,$n],zn={key:1},Rn=t("The "),yn=n("code",null,"IxTextarea",-1),Sn=t(" component can be set to "),qn=n("code",null,"resize",-1),Nn=t(" to adjust the zoomable direction, the default is "),Pn=n("code",null,"vertical",-1),Ln=t("."),jn=[Rn,yn,Sn,qn,Nn,Pn,Ln],Vn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),t(),n("span",{class:"token attr-name"},"vertical"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("none"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resize none"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("both"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resize both"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("horizontal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("resize horizontal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Un(a,l,r,e,i,_){const d=o("raw-demo"),p=C;return c(),k(p,{packageName:"components",componentName:"textarea",demoName:"Resize",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22none%22%20placeholder%3D%22resize%20none%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22both%22%20placeholder%3D%22resize%20both%22%20%2F%3E%0A%20%20%20%20%3CIxTextarea%20resize%3D%22horizontal%22%20placeholder%3D%22resize%20horizontal%22%20%2F%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u7F29\u653E\u6587\u672C\u57DF":"Resizing Textarea"},{description:s(()=>[a.lang==="zh"?(c(),m("p",fn,Tn)):h("",!0),a.lang==="en"?(c(),m("p",zn,jn)):h("",!0)]),rawCode:s(()=>[u(d)]),highlightCode:s(()=>[Vn]),_:1},8,["title"])}const Kn=F(wn,[["render",Un]]),Hn={};function Mn(a,l){const r=o("IxTextarea");return c(),k(r,{clearable:"",placeholder:"clearable textarea"})}const Wn=F(Hn,[["render",Mn]]),Gn=x({name:"components-textarea-Clearable",components:{"raw-demo":Wn},setup(){const{lang:a}=g(A);return{lang:a}}}),Jn={key:0},On={key:1},Qn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxTextarea")]),t(),n("span",{class:"token attr-name"},"clearable"),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearable textarea"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Xn(a,l,r,e,i,_){const d=o("raw-demo"),p=C;return c(),k(p,{packageName:"components",componentName:"textarea",demoName:"Clearable",code:"%3Ctemplate%3E%0A%20%20%3CIxTextarea%20clearable%20placeholder%3D%22clearable%20textarea%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"\u53EF\u6E05\u9664":"Clearable"},{description:s(()=>[a.lang==="zh"?(c(),m("p",Jn,"\u5E26\u6E05\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846\uFF0C\u70B9\u51FB\u56FE\u6807\u6E05\u7A7A\u8F93\u5165\u5185\u5BB9\u3002")):h("",!0),a.lang==="en"?(c(),m("p",On,"With the clear icon input box, click the icon to empty the input.")):h("",!0)]),rawCode:s(()=>[u(d)]),highlightCode:s(()=>[Qn]),_:1},8,["title"])}const Yn=F(Gn,[["render",Xn]]),Zn={name:"Demotextarea",components:{Basic:V,AutoRows:dn,ShowCount:xn,Resize:Kn,Clearable:Yn},setup(){const a=i=>{window&&(window.location.hash=i)},l=w("develop"),r=w(!1),e=w(!1);return{goLink:a,selectedTab:l,expanded:r,showDevDemo:e}}},nt={class:"component-wrapper"},tt={class:"markdown component-header"},ut=t("Textarea"),at=n("span",{class:"subtitle"},"\u6587\u672C\u57DF",-1),et={class:"edit-button","aria-label":"Edit this page on GitHub",href:"https://github.com/IDuxFE/idux/edit/main/packages/components/textarea/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},lt=n("section",{class:"markdown"},null,-1),ot=t(),st=t(),ct=t(),pt=t(),rt=t(),dt={class:"component-develop-header"},it=t(" \u4EE3\u7801\u6F14\u793A "),kt={class:"component-develop-header-tools"},mt={class:"component-develop-examples"},ht=n("section",{class:"markdown component-develop-api"},[n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"IxTextarea"},[n("span",null,"IxTextarea"),n("a",{onclick:"window.location.hash = 'IxTextarea'",class:"anchor"},"#")]),n("h4",{id:"TextareaProps"},[n("span",null,"TextareaProps"),n("a",{onclick:"window.location.hash = 'TextareaProps'",class:"anchor"},"#")]),n("blockquote",null,[n("p",null,[t("\u9664\u4EE5\u4E0B\u8868\u683C\u4E4B\u5916\u8FD8\u652F\u6301\u539F\u751F "),n("code",null,"textarea"),t(" \u5143\u7D20\u7684"),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",rel:"noopener"},"\u6240\u6709\u5C5E\u6027"),t("\u3002")])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u5168\u5C40\u914D\u7F6E"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"v-model:value")]),n("td",null,"\u63A7\u4EF6\u503C"),n("td",null,[n("code",null,"string")]),n("td",null,"-"),n("td",null,"-"),n("td",null,[t("\u4F7F\u7528 "),n("code",null,"control"),t(" \u65F6\uFF0C\u6B64\u914D\u7F6E\u65E0\u6548")])]),n("tr",null,[n("td",null,[n("code",null,"control")]),n("td",null,"\u63A7\u4EF6\u63A7\u5236\u5668"),n("td",null,[n("code",null,"string | number | AbstractControl")]),n("td",null,"-"),n("td",null,"-"),n("td",null,[t("\u914D\u5408 "),n("code",null,"@idux/cdk/forms"),t(" \u4F7F\u7528, \u53C2\u8003 "),n("a",{href:"/components/form/zh"},"Form")])]),n("tr",null,[n("td",null,[n("code",null,"autoRows")]),n("td",null,[t("\u662F\u5426\u663E\u793A\u81EA\u9002\u5E94 "),n("code",null,"rows")]),n("td",null,[n("code",null,"boolean | { minRows: number, maxRows: number }")]),n("td",null,[n("code",null,"false")]),n("td",null,"\u2705"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"clearable")]),n("td",null,"\u662F\u5426\u663E\u793A\u6E05\u9664\u56FE\u6807"),n("td",null,[n("code",null,"boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,"\u2705"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"clearIcon")]),n("td",null,"\u8BBE\u7F6E\u6E05\u9664\u56FE\u6807"),n("td",null,[n("code",null,"string | #clearIcon")]),n("td",null,[n("code",null,"'close-circle'")]),n("td",null,"\u2705"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"computeCount")]),n("td",null,"\u81EA\u5B9A\u4E49\u8BA1\u7B97\u5B57\u7B26\u6570\u7684\u51FD\u6570"),n("td",null,[n("code",null,"(value: string) => string")]),n("td",null,"-"),n("td",null,"\u2705"),n("td",null,[t("\u4F18\u5148\u7EA7\u9AD8\u4E8E "),n("code",null,"maxCount")])]),n("tr",null,[n("td",null,[n("code",null,"disabled")]),n("td",null,"\u662F\u5426\u7981\u7528\u72B6\u6001"),n("td",null,[n("code",null,"boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,"-"),n("td",null,[t("\u4F7F\u7528 "),n("code",null,"control"),t(" \u65F6\uFF0C\u6B64\u914D\u7F6E\u65E0\u6548")])]),n("tr",null,[n("td",null,[n("code",null,"maxCount")]),n("td",null,"\u6570\u5B57\u63D0\u793A\u663E\u793A\u7684\u6700\u5927\u503C"),n("td",null,[n("code",null,"number")]),n("td",null,"-"),n("td",null,"\u2705"),n("td",null,"\u4EC5\u7528\u4E8E\u63D0\u793A\uFF0C\u4E0D\u505A\u6821\u9A8C\u63A7\u5236")]),n("tr",null,[n("td",null,[n("code",null,"readonly")]),n("td",null,"\u662F\u5426\u53EA\u8BFB\u72B6\u6001"),n("td",null,[n("code",null,"boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"resize")]),n("td",null,"\u7F29\u653E\u65B9\u5411"),n("td",null,[n("code",null,"none | both | horizontal | vertical")]),n("td",null,[n("code",null,"vertical")]),n("td",null,"\u2705"),n("td",null,[t("\u542F\u7528 "),n("code",null,"autoRows"),t(" \u7684\u65F6\uFF0C\u4EC5 "),n("code",null,"none | horizontal"),t(" \u6709\u6548")])]),n("tr",null,[n("td",null,[n("code",null,"showCount")]),n("td",null,"\u662F\u5426\u5C55\u793A\u5B57\u7B26\u6570"),n("td",null,[n("code",null,"boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,"\u2705"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"size")]),n("td",null,"\u8BBE\u7F6E\u5927\u5C0F"),n("td",null,[n("code",null,"'sm' | 'md' | 'lg'")]),n("td",null,[n("code",null,"'md'")]),n("td",null,"\u2705"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"trim")]),n("td",null,"\u5931\u53BB\u7126\u70B9\u540E\u81EA\u52A8\u53BB\u9664\u524D\u540E\u7A7A\u683C"),n("td",null,[n("code",null,"boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"onChange")]),n("td",null,"\u503C\u53D1\u751F\u6539\u53D8\u540E\u7684\u56DE\u8C03"),n("td",null,[n("code",null,"(value: string, oldValue: string) => void")]),n("td",null,"-"),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"onClear")]),n("td",null,"\u6E05\u9664\u56FE\u6807\u88AB\u70B9\u51FB\u540E\u7684\u56DE\u8C03"),n("td",null,[n("code",null,"(evt: MouseEvent) => void")]),n("td",null,"-"),n("td",null,"-"),n("td",null,"-")])])]),n("h2",{id:"\u4E3B\u9898\u53D8\u91CF"},[n("span",null,"\u4E3B\u9898\u53D8\u91CF"),n("a",{onclick:"window.location.hash = '\u4E3B\u9898\u53D8\u91CF'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"default"),n("th",null,"seer"),n("th",null,"\u5907\u6CE8")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"@textarea-font-size-sm")]),n("td",null,[n("code",null,"@form-font-size-sm")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-font-size-md")]),n("td",null,[n("code",null,"@form-font-size-md")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-font-size-lg")]),n("td",null,[n("code",null,"@form-font-size-lg")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-line-height")]),n("td",null,[n("code",null,"@form-line-height")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-horizontal-sm")]),n("td",null,[n("code",null,"@form-padding-horizontal-sm")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-horizontal-md")]),n("td",null,[n("code",null,"@form-padding-horizontal-md")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-horizontal-lg")]),n("td",null,[n("code",null,"@form-padding-horizontal-lg")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-vertical-sm")]),n("td",null,[n("code",null,"@form-padding-vertical-sm")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-vertical-md")]),n("td",null,[n("code",null,"@form-padding-vertical-md")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-padding-vertical-lg")]),n("td",null,[n("code",null,"@form-padding-vertical-lg")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-border-width")]),n("td",null,[n("code",null,"@form-border-width")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-border-style")]),n("td",null,[n("code",null,"@form-border-style")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-border-color")]),n("td",null,[n("code",null,"@form-border-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-border-radius")]),n("td",null,[n("code",null,"@border-radius-md")]),n("td",null,[n("code",null,"@border-radius-sm")]),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-color")]),n("td",null,[n("code",null,"@form-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-color-secondary")]),n("td",null,[n("code",null,"@form-color-secondary")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-background-color")]),n("td",null,[n("code",null,"@form-background-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-placeholder-color")]),n("td",null,[n("code",null,"@form-placeholder-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-hover-color")]),n("td",null,[n("code",null,"@form-hover-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-active-color")]),n("td",null,[n("code",null,"@form-active-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-active-box-shadow")]),n("td",null,[n("code",null,"@form-active-box-shadow")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-disabled-color")]),n("td",null,[n("code",null,"@form-disabled-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-disabled-background-color")]),n("td",null,[n("code",null,"@form-disabled-background-color")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-count-bottom")]),n("td",null,[n("code",null,"1px")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-count-right")]),n("td",null,[n("code",null,"8px")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-count-opacity")]),n("td",null,[n("code",null,"0.9")]),n("td",null,"-"),n("td",null,"-")]),n("tr",null,[n("td",null,[n("code",null,"@textarea-count-color")]),n("td",null,[n("code",null,"@textarea-placeholder-color")]),n("td",null,"-"),n("td",null,"-")])])])],-1),_t=n("section",{class:"markdown"},[n("h2",{id:"\u7EC4\u4EF6\u5B9A\u4E49"},[n("span",null,"\u7EC4\u4EF6\u5B9A\u4E49"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u5B9A\u4E49'",class:"anchor"},"#")]),n("p",null,"\u652F\u6301\u8F93\u5165\u591A\u884C\u6587\u672C\u4FE1\u606F\u7684\u8F93\u5165\u6846\u3002"),n("h2",{id:"\u4F7F\u7528\u573A\u666F"},[n("span",null,"\u4F7F\u7528\u573A\u666F"),n("a",{onclick:"window.location.hash = '\u4F7F\u7528\u573A\u666F'",class:"anchor"},"#")]),n("p",null,"\u5728\u8868\u5355\u914D\u7F6E\u4E2D\uFF0C\u5BF9\u67D0\u914D\u7F6E\u9879\u8F93\u5165\u8F83\u957F\u7684\u6587\u6848\u4FE1\u606F\u3002"),n("h2",{id:"\u7EC4\u4EF6\u6784\u6210"},[n("span",null,"\u7EC4\u4EF6\u6784\u6210"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u6784\u6210'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",null,"\u8F93\u5165\u6846"),n("td",null,[t("\u8F93\u5165\u6846\u9ED8\u8BA4\u9AD8\u5EA6\u6839\u636E\u6587\u6848\u6700\u5927\u957F\u5EA6\u53D8\u5316\uFF0C\u6700\u5927\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A3\u884C\u6587\u6848\u9AD8\u5EA6\u3002 "),n("br"),t(" \u6587\u6848\u8F93\u5165\u81F3\u6700\u53F3\u4FA7\u81EA\u52A8\u8F6C\u884C\u3002")])]),n("tr",null,[n("td",null,"\u5B57\u6570\u7EDF\u8BA1\uFF08\u53EF\u9009\uFF09"),n("td",null,[t("\u5C55\u793A\u5F53\u524D\u8F93\u5165\u5B57\u6570\u4E0E\u6700\u5927\u9650\u5236\u5B57\u6570\uFF0C\u5F53\u524D\u8F93\u5165\u5B57\u6570\u6839\u636E\u7528\u6237\u8F93\u5165\u7684\u6587\u6848\u5B9E\u65F6\u53D8\u5316\u3002 "),n("br"),t(" \u4EC5\u7528\u4E8E\u5BF9\u8F93\u5165\u4FE1\u606F\u6709\u660E\u786E\u957F\u5EA6\u8981\u6C42\u7684\u573A\u666F\uFF0C\u4F8B\u5982\u6DFB\u52A0\u63CF\u8FF0\u3001\u5907\u6CE8\u7B49\u3002")])]),n("tr",null,[n("td",null,"\u62D6\u62FD\u56FE\u6807\uFF08\u53EF\u9009\uFF09"),n("td",null,"\u957F\u6309\u62D6\u62FD\u56FE\u6807\u5373\u53EF\u4E0A\u4E0B\u62D6\u52A8\uFF0C\u81EA\u7531\u53D8\u66F4\u6587\u672C\u57DF\u7684\u9AD8\u5EA6\uFF0C\u9AD8\u5EA6\u5B58\u5728\u4E0A\u9650\u3002")])])]),n("h2",{id:"\u7EC4\u4EF6\u7C7B\u578B"},[n("span",null,"\u7EC4\u4EF6\u7C7B\u578B"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u7C7B\u578B'",class:"anchor"},"#")]),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",null,"\u56FA\u5B9A\u9AD8\u5EA6"),n("td",null,"\u56FA\u5B9A\u8F93\u5165\u6846\u7684\u9AD8\u5EA6\uFF0C\u5185\u5BB9\u8D85\u6846\u540E\u89E6\u53D1\u6EDA\u52A8\u6761\u3002")]),n("tr",null,[n("td",null,"\u81EA\u9002\u5E94\u9AD8\u5EA6"),n("td",null,"\u5F53\u8F93\u5165\u4FE1\u606F\u8D85\u51FA\u8F93\u5165\u6846\u9ED8\u8BA4\u9AD8\u5EA6\u65F6\uFF0C\u9AD8\u5EA6\u81EA\u52A8\u53D8\u5316\u6765\u9002\u914D\u8F93\u5165\u7684\u4FE1\u606F\u3002")])])]),n("h2",{id:"\u7EC4\u4EF6\u72B6\u6001"},[n("span",null,"\u7EC4\u4EF6\u72B6\u6001"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u72B6\u6001'",class:"anchor"},"#")]),n("p",null,"\u5F53\u5B58\u5728\u5B57\u6570\u7EDF\u8BA1\u65F6\uFF0C\u6587\u672C\u57DF\u8D85\u51FA\u5B57\u6570\u9650\u5236\u65F6\u8FDB\u884C\u6807\u7EA2\u62A5\u9519\u3002\u82E5\u540C\u65F6\u5B58\u5728\u5176\u4ED6\u62A5\u9519\u4FE1\u606F\uFF0C\u4E0E\u8868\u5355\u89C4\u8303\u4E00\u6837\u91C7\u7528\u5E95\u90E8\u6587\u5B57\u62A5\u9519\u5F62\u5F0F\u3002")],-1);function Ft(a,l,r,e,i,_){const d=o("IxIcon"),p=o("IxAnchorLink"),f=o("IxAnchor"),D=o("IxTooltip"),v=o("Basic"),b=o("AutoRows"),I=o("ShowCount"),$=o("Resize"),T=o("Clearable"),z=o("IxCol"),R=o("IxRow"),B=o("IxTab"),y=o("IxTabs");return c(),m("article",nt,[n("section",tt,[n("h1",null,[ut,at,n("a",et,[u(d,{name:"edit"})])]),lt]),e.selectedTab==="develop"?(c(),k(f,{key:0,class:"toc-wrapper",affix:"",offset:"16",onClick:l[0]||(l[0]=E=>e.goLink(E))},{default:s(()=>[u(p,{href:"#components-textarea-demo-Basic",title:"\u57FA\u672C\u4F7F\u7528"}),ot,u(p,{href:"#components-textarea-demo-AutoRows",title:"\u6587\u672C\u57DF\u81EA\u9002\u5E94\u9AD8\u5EA6"}),st,u(p,{href:"#components-textarea-demo-ShowCount",title:"\u6587\u672C\u57DF\u5E26\u6570\u5B57\u7EDF\u8BA1"}),ct,u(p,{href:"#components-textarea-demo-Resize",title:"\u7F29\u653E\u6587\u672C\u57DF"}),pt,u(p,{href:"#components-textarea-demo-Clearable",title:"\u53EF\u6E05\u9664"}),rt,u(p,{href:"#API",title:"API"})]),_:1})):e.selectedTab==="design"?(c(),k(f,{key:1,class:"toc-wrapper",affix:"",offset:"16",onClick:l[1]||(l[1]=E=>e.goLink(E))},{default:s(()=>[u(p,{href:"#\u7EC4\u4EF6\u5B9A\u4E49",title:"\u7EC4\u4EF6\u5B9A\u4E49"}),u(p,{href:"#\u4F7F\u7528\u573A\u666F",title:"\u4F7F\u7528\u573A\u666F"}),u(p,{href:"#\u7EC4\u4EF6\u6784\u6210",title:"\u7EC4\u4EF6\u6784\u6210"}),u(p,{href:"#\u7EC4\u4EF6\u7C7B\u578B",title:"\u7EC4\u4EF6\u7C7B\u578B"}),u(p,{href:"#\u7EC4\u4EF6\u72B6\u6001",title:"\u7EC4\u4EF6\u72B6\u6001"})]),_:1})):(c(),k(f,{key:2,class:"toc-wrapper",affix:"",offset:"16",onClick:l[2]||(l[2]=E=>e.goLink(E))})),u(y,{selectedKey:e.selectedTab,"onUpdate:selectedKey":l[4]||(l[4]=E=>e.selectedTab=E),type:"line",class:"component-tabs"},{default:s(()=>[u(B,{key:"develop",title:"\u5F00\u53D1\u6307\u5357"},{default:s(()=>[n("h2",dt,[it,n("span",kt,[u(D,{title:e.showDevDemo?"\u9690\u85CF\u5F00\u53D1\u4E13\u7528\u6F14\u793A":"\u663E\u793A\u5F00\u53D1\u4E13\u7528\u6F14\u793A"},{default:s(()=>[u(d,{name:e.showDevDemo?"bug-filled":"bug",onClick:l[3]||(l[3]=E=>e.showDevDemo=!e.showDevDemo)},null,8,["name"])]),_:1},8,["title"])])]),n("section",mt,[u(R,{gutter:"8"},{default:s(()=>[u(z,{span:"24"},{default:s(()=>[u(v),u(b),u(I),u($),u(T)]),_:1})]),_:1})]),ht]),_:1}),u(B,{key:"design",title:"\u8BBE\u8BA1\u6307\u5357"},{default:s(()=>[_t]),_:1})]),_:1},8,["selectedKey"])])}const Ct=F(Zn,[["render",Ft]]);export{Ct as default};
