import{I as y,a as D}from"./index-7ea5d894.js";import{_ as S,I as $}from"./GlobalCodeBox-52c4d4dd.js";import{v as B,b as d,x as V,w as M,O as T,aa as r,ab as m,ad as n,y as a,ac as l,af as s,ag as b,F,i as L,ak as h,aj as C,ae as w,as as _,ao as N,an as q,H as A,I as v}from"./vendor-6b27028c.js";import{u as R,c as H,_ as f,a as U}from"./index-ab43774a.js";const Q={class:"example-focus-monitor"},z={class:"example-focus-monitor"},j=B({__name:"FocusMonitor",setup(p){const e=d(),t=d(),o=d(null),k=d(null),u=R();return V(()=>{setInterval(()=>{o.value?u.blurVia(e.value):u.focusVia(e.value,"program")},3e3),M(u.monitor(e),({origin:c,event:i})=>{o.value=c,console.log(c,i)}),M(u.monitor(t,!0),({origin:c,event:i})=>{k.value=c,console.log(c,i)})}),T(()=>{u.stopMonitoring(e),u.stopMonitoring(t)}),(c,i)=>{const g=H;return r(),m(F,null,[n("div",Q,[a(g,{ref_key:"element",ref:e,ghost:""},{default:l(()=>[s("Focus Monitored Element ("+b(o.value)+")",1)]),_:1},512)]),n("div",z,[n("div",{ref_key:"subtree",ref:t},[n("p",null,"Focus Monitored Subtree ("+b(k.value)+")",1),a(g,{ghost:""},{default:l(()=>[s("Child Button 1")]),_:1}),a(g,{ghost:""},{default:l(()=>[s("Child Button 2")]),_:1})],512)])],64)}}});const G=f(j,[["__scopeId","data-v-fb0d5b68"]]),P=B({name:"FocusMonitor",components:{"raw-demo":G},setup(){const{lang:p}=L(U);return{lang:p}}}),Y=n("p",null,[n("code",null,"FocusMonitor"),s(" 可以用来监听元素焦点状态的变化。")],-1),J=n("p",null,"你可以尝试使用鼠标或者键盘来获取按钮的焦点。",-1),K=n("p",null,[n("code",null,"FocusMonitor"),s(" can be used to listen for changes in the focus state of an element.")],-1),W=n("p",null,"You can try using the mouse or keyboard to get the focus of the button.",-1),X=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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
`)])])],-1);function Z(p,e,t,o,k,u){const c=h("raw-demo"),i=S;return r(),C(i,{packageName:"cdk",componentName:"a11y",demoName:"FocusMonitor",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22example-focus-monitor%22%3E%0A%20%20%20%20%3CIxButton%20ref%3D%22element%22%20ghost%3EFocus%20Monitored%20Element%20(%7B%7B%20elementOrigin%20%7D%7D)%3C%2FIxButton%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22example-focus-monitor%22%3E%0A%20%20%20%20%3Cdiv%20ref%3D%22subtree%22%3E%0A%20%20%20%20%20%20%3Cp%3EFocus%20Monitored%20Subtree%20(%7B%7B%20subtreeOrigin%20%7D%7D)%3C%2Fp%3E%0A%20%20%20%20%20%20%3CIxButton%20ghost%3EChild%20Button%201%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3CIxButton%20ghost%3EChild%20Button%202%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20onBeforeUnmount%2C%20onMounted%2C%20ref%2C%20watch%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20FocusOrigin%2C%20useSharedFocusMonitor%20%7D%20from%20'%40idux%2Fcdk%2Fa11y'%0A%0Aconst%20element%20%3D%20ref%3CHTMLElement%3E()%0Aconst%20subtree%20%3D%20ref%3CHTMLElement%3E()%0A%0Aconst%20elementOrigin%20%3D%20ref%3CFocusOrigin%3E(null)%0Aconst%20subtreeOrigin%20%3D%20ref%3CFocusOrigin%3E(null)%0A%0Aconst%20focusMonitor%20%3D%20useSharedFocusMonitor()%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20setInterval(()%20%3D%3E%20%7B%0A%20%20%20%20if%20(elementOrigin.value)%20%7B%0A%20%20%20%20%20%20focusMonitor.blurVia(element.value)%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20focusMonitor.focusVia(element.value%2C%20'program')%0A%20%20%20%20%7D%0A%20%20%7D%2C%203000)%0A%0A%20%20watch(focusMonitor.monitor(element)%2C%20(%7B%20origin%2C%20event%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20elementOrigin.value%20%3D%20origin%0A%20%20%20%20console.log(origin%2C%20event)%0A%20%20%7D)%0A%0A%20%20watch(focusMonitor.monitor(subtree%2C%20true)%2C%20(%7B%20origin%2C%20event%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20subtreeOrigin.value%20%3D%20origin%0A%20%20%20%20console.log(origin%2C%20event)%0A%20%20%7D)%0A%7D)%0A%0AonBeforeUnmount(()%20%3D%3E%20%7B%0A%20%20focusMonitor.stopMonitoring(element)%0A%20%20focusMonitor.stopMonitoring(subtree)%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%0A.example-focus-monitor%20%7B%0A%20%20background-color%3A%20%40color-grey%3B%0A%20%20padding%3A%2020px%3B%0A%0A%20%20.cdk-mouse-focused%20%7B%0A%20%20%20%20background%3A%20%40color-blue%3B%0A%20%20%7D%0A%0A%20%20.cdk-keyboard-focused%20%7B%0A%20%20%20%20background%3A%20%40color-green%3B%0A%20%20%7D%0A%0A%20%20.cdk-touch-focused%20%7B%0A%20%20%20%20background%3A%20%40color-magenta%3B%0A%20%20%7D%0A%0A%20%20.cdk-program-focused%20%7B%0A%20%20%20%20background%3A%20%40color-red%3B%0A%20%20%7D%0A%0A%20%20.ix-button%20%7B%0A%20%20%20%20margin-right%3A%2012px%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",title:p.lang==="zh"?"焦点管理器":"FocusMonitor"},{description:l(()=>[p.lang==="zh"?(r(),m(F,{key:0},[Y,J],64)):w("",!0),p.lang==="en"?(r(),m(F,{key:1},[K,W],64)):w("",!0)]),rawCode:l(()=>[a(c)]),highlightCode:l(()=>[X]),_:1},8,["title"])}const nn=f(P,[["render",Z]]),sn={},on={class:"markdown site-doc-api"},an=n("h3",{id:"FocusMonitor"},[n("span",null,"FocusMonitor"),n("a",{onclick:"window.location.hash = 'FocusMonitor'",class:"anchor"},"#")],-1),tn=_(`<p>监视鼠标和键盘事件以确定焦点事件的原因。</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitor</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * 监视元素的焦点，并应用适当的 CSS 类
   *
   * @param element 要监听的元素
   * @param checkChildren 当子元素获得焦点时是否要计入这个焦点
   * @returns 会在元素的焦点状态更改时发出新值的计算属性
   */</span>
  <span class="token function">monitor</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">,</span> checkChildren<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>FocusMonitorEvent<span class="token operator">&gt;</span>

  <span class="token comment">/**
   * 停止监听元素的焦点，并移除所有被添加的 CSS 类
   *
   * @param element 停止监听的元素
   */</span>
  <span class="token function">stopMonitoring</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

  <span class="token comment">/**
   * 通过指定的焦点来源对元素进行聚焦
   *
   * @param element 要获取焦点的元素
   * @param origin 焦点来源
   * @param options 可用于配置焦点行为的参数
   */</span>
  <span class="token function">focusVia</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">,</span> origin<span class="token operator">:</span> FocusOrigin<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> FocusOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

    <span class="token comment">/**
   * 让元素失去焦点.
   *
   * @param element 要失去焦点的元素.
   */</span>
  <span class="token function-variable function">blurVia</span><span class="token operator">:</span> <span class="token punctuation">(</span>element<span class="token operator">:</span> ElementType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 元素的类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ElementType</span> <span class="token operator">=</span> Ref<span class="token operator">&lt;</span>ComponentPublicInstance <span class="token operator">|</span> HTMLElement<span class="token operator">&gt;</span> <span class="token operator">|</span> ComponentPublicInstance <span class="token operator">|</span> HTMLElement

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitorEvent</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * 焦点来源
   * 
   * **mouse**: 表示该元素是通过鼠标获得焦点的
   * **keyboard**: 表示该元素是通过键盘获得焦点的
   * **touch**: 表示该元素是通过触摸屏获得焦点的
   * **program**: 表示该元素是通过编程方式获得焦点的
   * **null**: 表示该元素失去了焦点
   */</span>
  origin<span class="token operator">:</span> FocusOrigin

  <span class="token comment">/**
   * 焦点事件，如果焦点由 \`focusVia\` 触发，它可能是 \`undefined\`
   */</span>
  event<span class="token operator">?</span><span class="token operator">:</span> FocusEvent
<span class="token punctuation">}</span></code></pre>`,2),en=n("h4",{id:"useFocusMonitor"},[n("span",null,"useFocusMonitor"),n("a",{onclick:"window.location.hash = 'useFocusMonitor'",class:"anchor"},"#")],-1),cn=_(`<p>创建一个焦点管理器。</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFocusMonitor</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> FocusMonitorOptions<span class="token punctuation">)</span><span class="token operator">:</span> FocusMonitor

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FocusMonitorOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * 用于指定焦点事件来源的检测模式。  
   *
   * **immediate**: 任何在前一个标记或当前标记中发生的鼠标下拉、按下或触摸开始事件都将更新焦点事件的来源(鼠标、键盘或触摸)。这是默认的配置。  
   *
   * **eventual**: 焦点事件的来源总是最后一个相应的鼠标按下、按下或触摸开始事件，无论它发生在多久以前。  
   */</span>
  detectionMode<span class="token operator">?</span><span class="token operator">:</span> FocusMonitorDetectionMode

  <span class="token comment">/**
   * 用于指定检测用户输入模式的探测器。
   *
   * 如果不指定，默认会使用 \`useSharedInputModalityDetector\` 创建一个全局的探测器。
   */</span>
  inputModalityDetector<span class="token operator">?</span><span class="token operator">:</span> InputModalityDetector
<span class="token punctuation">}</span></code></pre>`,2),pn=n("h4",{id:"useSharedFocusMonitor"},[n("span",null,"useSharedFocusMonitor"),n("a",{onclick:"window.location.hash = 'useSharedFocusMonitor'",class:"anchor"},"#")],-1),un=_('<p>通过 <code>createSharedComposable</code> 创建的全局共享的 <code>useFocusMonitor</code>。</p><pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSharedFocusMonitor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> FocusMonitor</code></pre>',2),ln=n("h3",{id:"FAQ"},[n("span",null,"FAQ"),n("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")],-1),rn=n("h4",{id:"更多的使用细节和文档？"},[n("span",null,"更多的使用细节和文档？"),n("a",{onclick:"window.location.hash = '更多的使用细节和文档？'",class:"anchor"},"#")],-1),kn=n("p",null,[s("参见 "),n("a",{href:"https://material.angular.cn/cdk/a11y/overview",target:"_blank",rel:"noopener"},"material.angular.cn")],-1);function dn(p,e){const t=D,o=y;return r(),m("section",on,[a(o,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[a(t,{href:"#FocusMonitor",title:"FocusMonitor"},{default:l(()=>[a(t,{href:"#useFocusMonitor",title:"useFocusMonitor"}),a(t,{href:"#useSharedFocusMonitor",title:"useSharedFocusMonitor"})]),_:1}),a(t,{href:"#FAQ",title:"FAQ"},{default:l(()=>[a(t,{href:"#更多的使用细节和文档？",title:"更多的使用细节和文档？"})]),_:1})]),_:1}),an,tn,en,cn,pn,un,ln,rn,kn])}const mn=f(sn,[["render",dn]]),gn={},fn={class:"markdown site-doc-overview"},hn=n("p",null,[n("code",null,"@idux/cdk/a11y"),s(" 提供了许多提高无障碍性（可访问性）的工具。")],-1),_n=n("h2",{id:"FocusMonitor（焦点管理器）"},[n("span",null,"FocusMonitor（焦点管理器）"),n("a",{onclick:"window.location.hash = 'FocusMonitor（焦点管理器）'",class:"anchor"},"#")],-1),An=_("<p><code>FocusMonitor</code> 可以用来监听元素焦点状态的变化。</p><p>它比单纯监听 focus 或 blur 事件更有意义，因为它会告诉你该元素是如何获得焦点的（通过鼠标，键盘，触摸或编程方式）。如果需要，它还允许监听各级子元素。</p><p>要监听某个元素的焦点变化，可以调用 <code>monitor</code> 方法, 指定要监控的元素(<code>element</code>)和是否检查子元素(<code>checkChildren</code>)。如果 <code>checkChildren</code> 为 <code>true</code>, 那么该元素的任何各级子元素有焦点，就认为该元素有焦点。 <code>monitor</code> 方法返回的是一个计算属性 <code>FocusMonitorEvent</code>, 当焦点状态改变时，会得到一个新的值。</p><p><code>FocusMonitor</code> 还会自动对有焦点的元素元素应用一些 CSS 类。如果该元素拥有焦点，它会添加 <code>.cdk-focused</code> 类，并进一步添加 <code>.cdk-${origin}-focused</code> 类来表明元素是如何获得焦点的 (<code>origin</code> 是 <code>mouse</code>、<code>keyboard</code>、<code>touch</code> 或 <code>program</code> 之一)。</p>",4);function vn(p,e){const t=D,o=y;return r(),m("section",fn,[a(o,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[a(t,{href:"#FocusMonitor（焦点管理器）",title:"FocusMonitor（焦点管理器）"})]),_:1}),hn,_n,An])}const Mn=f(gn,[["render",vn]]),Fn={name:"DocsCdkA11y",components:{DemoFocusMonitor:nn,ApiDocs:mn,OverviewDocs:Mn},setup(){var u;const p=N(),e=q(),t=d((u=p.query.tab)!=null?u:"demo");M(t,c=>{e.push({query:{tab:c}})});const o=[{label:"示例",value:"demo"},{label:"API",value:"api"},{label:"概述",value:"overview"},,,].filter(Boolean),k=d(!1);return{checkedDoc:t,docRadioData:o,showDevDemo:k}}},yn={class:"site-doc-wrapper"},Dn={class:"markdown site-doc-header"},bn=n("h1",null,[s("Accessibility"),n("span",{class:"subtitle"},"无障碍性")],-1),wn=n("div",{class:"markdown site-doc-description"},null,-1),Bn={class:"site-doc-demo"};function Cn(p,e,t,o,k,u){const c=$,i=D,g=y,x=h("DemoFocusMonitor"),E=h("ApiDocs"),I=h("OverviewDocs");return r(),m("article",yn,[n("section",Dn,[bn,wn,a(c,{value:o.checkedDoc,"onUpdate:value":e[0]||(e[0]=O=>o.checkedDoc=O),dataSource:o.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),A(n("section",Bn,[a(g,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[(o.showDevDemo,r(),C(i,{key:0,href:"#cdk-a11y-focus-monitor",title:"焦点管理器"}))]),_:1}),a(x)],512),[[v,o.checkedDoc==="demo"]]),A(a(E,null,null,512),[[v,o.checkedDoc==="api"]]),A(a(I,null,null,512),[[v,o.checkedDoc==="overview"]])])}const Sn=f(Fn,[["render",Cn]]);export{Sn as default};
