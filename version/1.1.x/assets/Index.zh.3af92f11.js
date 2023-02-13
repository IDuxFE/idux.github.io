import{I as y,a as D}from"./index.88b15bfa.js";import{_ as S,I as $}from"./GlobalCodeBox.5c092ce5.js";import{v as B,b as d,x as V,w as M,A as T,a9 as m,ab as n,y as a,aa as l,ae as b,F,a8 as r,ad as s,i as q,ah as C,ai as h,ac as w,aq as _,am as L,al as N,J as A,K as v}from"./vendor.994f7e39.js";import{k as R,c as P,_ as f,a as H}from"./index.2ba5520c.js";const U={class:"example-focus-monitor"},z={class:"example-focus-monitor"},Q=B({__name:"FocusMonitor",setup(p){const e=d(),t=d(),o=d(null),k=d(null),u=R();return V(()=>{setInterval(()=>{o.value?u.blurVia(e.value):u.focusVia(e.value,"program")},3e3),M(u.monitor(e),({origin:c,event:i})=>{o.value=c,console.log(c,i)}),M(u.monitor(t,!0),({origin:c,event:i})=>{k.value=c,console.log(c,i)})}),T(()=>{u.stopMonitoring(e),u.stopMonitoring(t)}),(c,i)=>{const g=P;return r(),m(F,null,[n("div",U,[a(g,{ref_key:"element",ref:e,ghost:""},{default:l(()=>[s("Focus Monitored Element ("+b(o.value)+")",1)]),_:1},512)]),n("div",z,[n("div",{ref_key:"subtree",ref:t},[n("p",null,"Focus Monitored Subtree ("+b(k.value)+")",1),a(g,{ghost:""},{default:l(()=>[s("Child Button 1")]),_:1}),a(g,{ghost:""},{default:l(()=>[s("Child Button 2")]),_:1})],512)])],64)}}});const G=f(Q,[["__scopeId","data-v-fb0d5b68"]]),j=B({name:"FocusMonitor",components:{"raw-demo":G},setup(){const{lang:p}=q(H);return{lang:p}}}),J=n("p",null,[n("code",null,"FocusMonitor"),s(" \u53EF\u4EE5\u7528\u6765\u76D1\u542C\u5143\u7D20\u7126\u70B9\u72B6\u6001\u7684\u53D8\u5316\u3002")],-1),K=n("p",null,"\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u9F20\u6807\u6216\u8005\u952E\u76D8\u6765\u83B7\u53D6\u6309\u94AE\u7684\u7126\u70B9\u3002",-1),Y=n("p",null,[n("code",null,"FocusMonitor"),s(" can be used to listen for changes in the focus state of an element.")],-1),W=n("p",null,"You can try using the mouse or keyboard to get the focus of the button.",-1),X=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("example-focus-monitor"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("element"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ghost"),n("span",{class:"token punctuation"},">")]),s("Focus Monitored Element ({{ elementOrigin }})"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("example-focus-monitor"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("subtree"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Focus Monitored Subtree ({{ subtreeOrigin }})"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"ghost"),n("span",{class:"token punctuation"},">")]),s("Child Button 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"ghost"),n("span",{class:"token punctuation"},">")]),s("Child Button 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onBeforeUnmount"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" FocusOrigin"),n("span",{class:"token punctuation"},","),s(" useSharedFocusMonitor "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/cdk/a11y'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" element "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("HTMLElement"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" subtree "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("HTMLElement"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" elementOrigin "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("FocusOrigin"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" subtreeOrigin "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("FocusOrigin"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" focusMonitor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSharedFocusMonitor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("elementOrigin"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      focusMonitor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"blurVia"),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      focusMonitor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"focusVia"),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'program'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("focusMonitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"monitor"),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" origin"),n("span",{class:"token punctuation"},","),s(" event "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    elementOrigin`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` origin
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("focusMonitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"monitor"),n("span",{class:"token punctuation"},"("),s("subtree"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" origin"),n("span",{class:"token punctuation"},","),s(" event "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    subtreeOrigin`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` origin
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  focusMonitor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopMonitoring"),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},")"),s(`
  focusMonitor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopMonitoring"),n("span",{class:"token punctuation"},"("),s("subtree"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".example-focus-monitor"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@color-grey"),n("span",{class:"token punctuation"},";")]),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},".cdk-mouse-focused"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@color-blue"),n("span",{class:"token punctuation"},";")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".cdk-keyboard-focused"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@color-green"),n("span",{class:"token punctuation"},";")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".cdk-touch-focused"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@color-magenta"),n("span",{class:"token punctuation"},";")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".cdk-program-focused"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@color-red"),n("span",{class:"token punctuation"},";")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},".ix-button"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function Z(p,e,t,o,k,u){const c=h("raw-demo"),i=S;return r(),C(i,{packageName:"cdk",componentName:"a11y",demoName:"FocusMonitor",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22example-focus-monitor%22%3E%0A%20%20%20%20%3CIxButton%20ref%3D%22element%22%20ghost%3EFocus%20Monitored%20Element%20(%7B%7B%20elementOrigin%20%7D%7D)%3C%2FIxButton%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22example-focus-monitor%22%3E%0A%20%20%20%20%3Cdiv%20ref%3D%22subtree%22%3E%0A%20%20%20%20%20%20%3Cp%3EFocus%20Monitored%20Subtree%20(%7B%7B%20subtreeOrigin%20%7D%7D)%3C%2Fp%3E%0A%20%20%20%20%20%20%3CIxButton%20ghost%3EChild%20Button%201%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3CIxButton%20ghost%3EChild%20Button%202%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20onBeforeUnmount%2C%20onMounted%2C%20ref%2C%20watch%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20FocusOrigin%2C%20useSharedFocusMonitor%20%7D%20from%20'%40idux%2Fcdk%2Fa11y'%0A%0Aconst%20element%20%3D%20ref%3CHTMLElement%3E()%0Aconst%20subtree%20%3D%20ref%3CHTMLElement%3E()%0A%0Aconst%20elementOrigin%20%3D%20ref%3CFocusOrigin%3E(null)%0Aconst%20subtreeOrigin%20%3D%20ref%3CFocusOrigin%3E(null)%0A%0Aconst%20focusMonitor%20%3D%20useSharedFocusMonitor()%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20setInterval(()%20%3D%3E%20%7B%0A%20%20%20%20if%20(elementOrigin.value)%20%7B%0A%20%20%20%20%20%20focusMonitor.blurVia(element.value)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20focusMonitor.focusVia(element.value%2C%20'program')%0A%20%20%20%20%7D%0A%20%20%7D%2C%203000)%0A%0A%20%20watch(focusMonitor.monitor(element)%2C%20(%7B%20origin%2C%20event%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20elementOrigin.value%20%3D%20origin%0A%20%20%20%20console.log(origin%2C%20event)%0A%20%20%7D)%0A%0A%20%20watch(focusMonitor.monitor(subtree%2C%20true)%2C%20(%7B%20origin%2C%20event%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20subtreeOrigin.value%20%3D%20origin%0A%20%20%20%20console.log(origin%2C%20event)%0A%20%20%7D)%0A%7D)%0A%0AonBeforeUnmount(()%20%3D%3E%20%7B%0A%20%20focusMonitor.stopMonitoring(element)%0A%20%20focusMonitor.stopMonitoring(subtree)%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%0A.example-focus-monitor%20%7B%0A%20%20background-color%3A%20%40color-grey%3B%0A%20%20padding%3A%2020px%3B%0A%0A%20%20.cdk-mouse-focused%20%7B%0A%20%20%20%20background%3A%20%40color-blue%3B%0A%20%20%7D%0A%0A%20%20.cdk-keyboard-focused%20%7B%0A%20%20%20%20background%3A%20%40color-green%3B%0A%20%20%7D%0A%0A%20%20.cdk-touch-focused%20%7B%0A%20%20%20%20background%3A%20%40color-magenta%3B%0A%20%20%7D%0A%0A%20%20.cdk-program-focused%20%7B%0A%20%20%20%20background%3A%20%40color-red%3B%0A%20%20%7D%0A%0A%20%20.ix-button%20%7B%0A%20%20%20%20margin-right%3A%2012px%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:p.lang==="zh"?"\u7126\u70B9\u7BA1\u7406\u5668":"FocusMonitor"},{description:l(()=>[p.lang==="zh"?(r(),m(F,{key:0},[J,K],64)):w("",!0),p.lang==="en"?(r(),m(F,{key:1},[Y,W],64)):w("",!0)]),rawCode:l(()=>[a(c)]),highlightCode:l(()=>[X]),_:1},8,["title"])}const nn=f(j,[["render",Z]]),sn={},on={class:"markdown site-doc-api"},an=n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")],-1),tn=n("h3",{id:"FocusMonitor"},[n("span",null,"FocusMonitor"),n("a",{onclick:"window.location.hash = 'FocusMonitor'",class:"anchor"},"#")],-1),en=_(`<p>\u76D1\u89C6\u9F20\u6807\u548C\u952E\u76D8\u4E8B\u4EF6\u4EE5\u786E\u5B9A\u7126\u70B9\u4E8B\u4EF6\u7684\u539F\u56E0\u3002</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitor</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u76D1\u89C6\u5143\u7D20\u7684\u7126\u70B9\uFF0C\u5E76\u5E94\u7528\u9002\u5F53\u7684 CSS \u7C7B
   *
   * @param element \u8981\u76D1\u542C\u7684\u5143\u7D20
   * @param checkChildren \u5F53\u5B50\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u662F\u5426\u8981\u8BA1\u5165\u8FD9\u4E2A\u7126\u70B9
   * @returns \u4F1A\u5728\u5143\u7D20\u7684\u7126\u70B9\u72B6\u6001\u66F4\u6539\u65F6\u53D1\u51FA\u65B0\u503C\u7684\u8BA1\u7B97\u5C5E\u6027
   */</span>
  <span class="token function">monitor</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">,</span> checkChildren<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>FocusMonitorEvent<span class="token operator">&gt;</span>

  <span class="token comment">/**
   * \u505C\u6B62\u76D1\u542C\u5143\u7D20\u7684\u7126\u70B9\uFF0C\u5E76\u79FB\u9664\u6240\u6709\u88AB\u6DFB\u52A0\u7684 CSS \u7C7B
   *
   * @param element \u505C\u6B62\u76D1\u542C\u7684\u5143\u7D20
   */</span>
  <span class="token function">stopMonitoring</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

  <span class="token comment">/**
   * \u901A\u8FC7\u6307\u5B9A\u7684\u7126\u70B9\u6765\u6E90\u5BF9\u5143\u7D20\u8FDB\u884C\u805A\u7126
   *
   * @param element \u8981\u83B7\u53D6\u7126\u70B9\u7684\u5143\u7D20
   * @param origin \u7126\u70B9\u6765\u6E90
   * @param options \u53EF\u7528\u4E8E\u914D\u7F6E\u7126\u70B9\u884C\u4E3A\u7684\u53C2\u6570
   */</span>
  <span class="token function">focusVia</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">,</span> origin<span class="token operator">:</span> FocusOrigin<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> FocusOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

    <span class="token comment">/**
   * \u8BA9\u5143\u7D20\u5931\u53BB\u7126\u70B9.
   *
   * @param element \u8981\u5931\u53BB\u7126\u70B9\u7684\u5143\u7D20.
   */</span>
  <span class="token function-variable function">blurVia</span><span class="token operator">:</span> <span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5143\u7D20\u7684\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ElementType</span> <span class="token operator">=</span> Ref<span class="token operator">&lt;</span>ComponentPublicInstance <span class="token operator">|</span> HTMLElement<span class="token operator">&gt;</span> <span class="token operator">|</span> ComponentPublicInstance <span class="token operator">|</span> HTMLElement

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitorEvent</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u7126\u70B9\u6765\u6E90
   * 
   * **mouse**: \u8868\u793A\u8BE5\u5143\u7D20\u662F\u901A\u8FC7\u9F20\u6807\u83B7\u5F97\u7126\u70B9\u7684
   * **keyboard**: \u8868\u793A\u8BE5\u5143\u7D20\u662F\u901A\u8FC7\u952E\u76D8\u83B7\u5F97\u7126\u70B9\u7684
   * **touch**: \u8868\u793A\u8BE5\u5143\u7D20\u662F\u901A\u8FC7\u89E6\u6478\u5C4F\u83B7\u5F97\u7126\u70B9\u7684
   * **program**: \u8868\u793A\u8BE5\u5143\u7D20\u662F\u901A\u8FC7\u7F16\u7A0B\u65B9\u5F0F\u83B7\u5F97\u7126\u70B9\u7684
   * **null**: \u8868\u793A\u8BE5\u5143\u7D20\u5931\u53BB\u4E86\u7126\u70B9
   */</span>
  origin<span class="token operator">:</span> FocusOrigin

  <span class="token comment">/**
   * \u7126\u70B9\u4E8B\u4EF6\uFF0C\u5982\u679C\u7126\u70B9\u7531 \`focusVia\` \u89E6\u53D1\uFF0C\u5B83\u53EF\u80FD\u662F \`undefined\`
   */</span>
  event<span class="token operator">?</span><span class="token operator">:</span> FocusEvent
<span class="token punctuation">}</span></code></pre>`,2),cn=n("h4",{id:"useFocusMonitor"},[n("span",null,"useFocusMonitor"),n("a",{onclick:"window.location.hash = 'useFocusMonitor'",class:"anchor"},"#")],-1),pn=_(`<p>\u521B\u5EFA\u4E00\u4E2A\u7126\u70B9\u7BA1\u7406\u5668\u3002</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFocusMonitor</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> FocusMonitorOptions<span class="token punctuation">)</span><span class="token operator">:</span> FocusMonitor

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitorOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u7528\u4E8E\u6307\u5B9A\u7126\u70B9\u4E8B\u4EF6\u6765\u6E90\u7684\u68C0\u6D4B\u6A21\u5F0F\u3002  
   *
   * **immediate**: \u4EFB\u4F55\u5728\u524D\u4E00\u4E2A\u6807\u8BB0\u6216\u5F53\u524D\u6807\u8BB0\u4E2D\u53D1\u751F\u7684\u9F20\u6807\u4E0B\u62C9\u3001\u6309\u4E0B\u6216\u89E6\u6478\u5F00\u59CB\u4E8B\u4EF6\u90FD\u5C06\u66F4\u65B0\u7126\u70B9\u4E8B\u4EF6\u7684\u6765\u6E90(\u9F20\u6807\u3001\u952E\u76D8\u6216\u89E6\u6478)\u3002\u8FD9\u662F\u9ED8\u8BA4\u7684\u914D\u7F6E\u3002  
   *
   * **eventual**: \u7126\u70B9\u4E8B\u4EF6\u7684\u6765\u6E90\u603B\u662F\u6700\u540E\u4E00\u4E2A\u76F8\u5E94\u7684\u9F20\u6807\u6309\u4E0B\u3001\u6309\u4E0B\u6216\u89E6\u6478\u5F00\u59CB\u4E8B\u4EF6\uFF0C\u65E0\u8BBA\u5B83\u53D1\u751F\u5728\u591A\u4E45\u4EE5\u524D\u3002  
   */</span>
  detectionMode<span class="token operator">?</span><span class="token operator">:</span> FocusMonitorDetectionMode

  <span class="token comment">/**
   * \u7528\u4E8E\u6307\u5B9A\u68C0\u6D4B\u7528\u6237\u8F93\u5165\u6A21\u5F0F\u7684\u63A2\u6D4B\u5668\u3002
   *
   * \u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528 \`useSharedInputModalityDetector\` \u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684\u63A2\u6D4B\u5668\u3002
   */</span>
  inputModalityDetector<span class="token operator">?</span><span class="token operator">:</span> InputModalityDetector
<span class="token punctuation">}</span></code></pre>`,2),un=n("h4",{id:"useSharedFocusMonitor"},[n("span",null,"useSharedFocusMonitor"),n("a",{onclick:"window.location.hash = 'useSharedFocusMonitor'",class:"anchor"},"#")],-1),ln=_('<p>\u901A\u8FC7 <code>createSharedComposable</code> \u521B\u5EFA\u7684\u5168\u5C40\u5171\u4EAB\u7684 <code>useFocusMonitor</code>\u3002</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSharedFocusMonitor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> FocusMonitor</code></pre>',2),rn=n("h2",{id:"FAQ"},[n("span",null,"FAQ"),n("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")],-1),kn=n("h3",{id:"\u66F4\u591A\u7684\u4F7F\u7528\u7EC6\u8282\u548C\u6587\u6863\uFF1F"},[n("span",null,"\u66F4\u591A\u7684\u4F7F\u7528\u7EC6\u8282\u548C\u6587\u6863\uFF1F"),n("a",{onclick:"window.location.hash = '\u66F4\u591A\u7684\u4F7F\u7528\u7EC6\u8282\u548C\u6587\u6863\uFF1F'",class:"anchor"},"#")],-1),dn=n("p",null,[s("\u53C2\u89C1 "),n("a",{href:"https://material.angular.cn/cdk/a11y/overview",target:"_blank",rel:"noopener"},"material.angular.cn")],-1);function mn(p,e){const t=D,o=y;return r(),m("section",on,[a(o,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[a(t,{href:"#api",title:"API"},{default:l(()=>[a(t,{href:"#focusmonitor",title:"FocusMonitor"})]),_:1}),a(t,{href:"#faq",title:"FAQ"},{default:l(()=>[a(t,{href:"#\u66F4\u591A\u7684\u4F7F\u7528\u7EC6\u8282\u548C\u6587\u6863\uFF1F",title:"\u66F4\u591A\u7684\u4F7F\u7528\u7EC6\u8282\u548C\u6587\u6863\uFF1F"})]),_:1})]),_:1}),an,tn,en,cn,pn,un,ln,rn,kn,dn])}const gn=f(sn,[["render",mn]]),fn={},hn={class:"markdown site-doc-overview"},_n=n("p",null,[n("code",null,"@idux/cdk/a11y"),s(" \u63D0\u4F9B\u4E86\u8BB8\u591A\u63D0\u9AD8\u65E0\u969C\u788D\u6027\uFF08\u53EF\u8BBF\u95EE\u6027\uFF09\u7684\u5DE5\u5177\u3002")],-1),An=n("h2",{id:"FocusMonitor\uFF08\u7126\u70B9\u7BA1\u7406\u5668\uFF09"},[n("span",null,"FocusMonitor\uFF08\u7126\u70B9\u7BA1\u7406\u5668\uFF09"),n("a",{onclick:"window.location.hash = 'FocusMonitor\uFF08\u7126\u70B9\u7BA1\u7406\u5668\uFF09'",class:"anchor"},"#")],-1),vn=_("<p><code>FocusMonitor</code> \u53EF\u4EE5\u7528\u6765\u76D1\u542C\u5143\u7D20\u7126\u70B9\u72B6\u6001\u7684\u53D8\u5316\u3002</p><p>\u5B83\u6BD4\u5355\u7EAF\u76D1\u542C focus \u6216 blur \u4E8B\u4EF6\u66F4\u6709\u610F\u4E49\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u544A\u8BC9\u4F60\u8BE5\u5143\u7D20\u662F\u5982\u4F55\u83B7\u5F97\u7126\u70B9\u7684\uFF08\u901A\u8FC7\u9F20\u6807\uFF0C\u952E\u76D8\uFF0C\u89E6\u6478\u6216\u7F16\u7A0B\u65B9\u5F0F\uFF09\u3002\u5982\u679C\u9700\u8981\uFF0C\u5B83\u8FD8\u5141\u8BB8\u76D1\u542C\u5404\u7EA7\u5B50\u5143\u7D20\u3002</p><p>\u8981\u76D1\u542C\u67D0\u4E2A\u5143\u7D20\u7684\u7126\u70B9\u53D8\u5316\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>monitor</code> \u65B9\u6CD5, \u6307\u5B9A\u8981\u76D1\u63A7\u7684\u5143\u7D20(<code>element</code>)\u548C\u662F\u5426\u68C0\u67E5\u5B50\u5143\u7D20(<code>checkChildren</code>)\u3002\u5982\u679C <code>checkChildren</code> \u4E3A <code>true</code>, \u90A3\u4E48\u8BE5\u5143\u7D20\u7684\u4EFB\u4F55\u5404\u7EA7\u5B50\u5143\u7D20\u6709\u7126\u70B9\uFF0C\u5C31\u8BA4\u4E3A\u8BE5\u5143\u7D20\u6709\u7126\u70B9\u3002 <code>monitor</code> \u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027 <code>FocusMonitorEvent</code>, \u5F53\u7126\u70B9\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u4F1A\u5F97\u5230\u4E00\u4E2A\u65B0\u7684\u503C\u3002</p><p><code>FocusMonitor</code> \u8FD8\u4F1A\u81EA\u52A8\u5BF9\u6709\u7126\u70B9\u7684\u5143\u7D20\u5143\u7D20\u5E94\u7528\u4E00\u4E9B CSS \u7C7B\u3002\u5982\u679C\u8BE5\u5143\u7D20\u62E5\u6709\u7126\u70B9\uFF0C\u5B83\u4F1A\u6DFB\u52A0 <code>.cdk-focused</code> \u7C7B\uFF0C\u5E76\u8FDB\u4E00\u6B65\u6DFB\u52A0 <code>.cdk-${origin}-focused</code> \u7C7B\u6765\u8868\u660E\u5143\u7D20\u662F\u5982\u4F55\u83B7\u5F97\u7126\u70B9\u7684 (<code>origin</code> \u662F <code>mouse</code>\u3001<code>keyboard</code>\u3001<code>touch</code> \u6216 <code>program</code> \u4E4B\u4E00)\u3002</p>",4);function Mn(p,e){const t=D,o=y;return r(),m("section",hn,[a(o,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[a(t,{href:"#focusmonitor\uFF08\u7126\u70B9\u7BA1\u7406\u5668\uFF09",title:"FocusMonitor\uFF08\u7126\u70B9\u7BA1\u7406\u5668\uFF09"})]),_:1}),_n,An,vn])}const Fn=f(fn,[["render",Mn]]),yn={name:"DocsCdkA11y",components:{DemoFocusMonitor:nn,ApiDocs:gn,OverviewDocs:Fn},setup(){var u;const p=L(),e=N(),t=d((u=p.query.tab)!=null?u:"demo");M(t,c=>{e.push({query:{tab:c}})});const o=[{label:"\u793A\u4F8B",value:"demo"},{label:"API",value:"api"},{label:"\u6982\u8FF0",value:"overview"},,,].filter(Boolean),k=d(!1);return{checkedDoc:t,docRadioData:o,showDevDemo:k}}},Dn={class:"site-doc-wrapper"},bn={class:"markdown site-doc-header"},wn=n("h1",null,[s("Accessibility"),n("span",{class:"subtitle"},"\u65E0\u969C\u788D\u6027")],-1),Bn=n("div",{class:"markdown site-doc-description"},null,-1),Cn={class:"site-doc-demo"};function xn(p,e,t,o,k,u){const c=$,i=D,g=y,x=h("DemoFocusMonitor"),E=h("ApiDocs"),I=h("OverviewDocs");return r(),m("article",Dn,[n("section",bn,[wn,Bn,a(c,{value:o.checkedDoc,"onUpdate:value":e[0]||(e[0]=O=>o.checkedDoc=O),dataSource:o.docRadioData,size:"lg",buttoned:""},null,8,["value","dataSource"])]),A(n("section",Cn,[a(g,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[(o.showDevDemo,r(),C(i,{key:0,href:"#cdk-a11y-focus-monitor",title:"\u7126\u70B9\u7BA1\u7406\u5668"}))]),_:1}),a(x)],512),[[v,o.checkedDoc==="demo"]]),A(a(E,null,null,512),[[v,o.checkedDoc==="api"]]),A(a(I,null,null,512),[[v,o.checkedDoc==="overview"]])])}const $n=f(yn,[["render",xn]]);export{$n as default};