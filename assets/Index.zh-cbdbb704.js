import{I,a as A}from"./index-31c0fa9f.js";import{a as B,_ as $,I as F}from"./GlobalCodeBox-ca5536d2.js";import{x as v,r as h,aa as i,aj as x,ac as p,z as e,af as s,l as E,ak as f,ab as d,ae as C,ad as n,as as S,ao as N,an as q,w as R,H as b,I as y}from"./vendor-95c13cf7.js";import{c as V,k as z,a as j,_ as g}from"./index-42dbc838.js";import{I as G}from"./index-584d09c6.js";import"./useInput-74d528c3.js";const L=v({__name:"Basic",setup(t){const o=h(""),{copy:c}=B(),a=()=>{c(o.value).then(r=>{console.log("onCopy",r)})};return(r,l)=>{const u=G,k=V,m=z;return i(),x(m,null,{default:p(()=>[e(u,{value:o.value,"onUpdate:value":l[0]||(l[0]=_=>o.value=_),style:{width:"200px"}},null,8,["value"]),e(k,{onClick:a},{default:p(()=>[s("Copy")]),_:1})]),_:1})}}}),T=v({name:"Basic",components:{"raw-demo":L},setup(){const{lang:t}=E(j);return{lang:t}}}),P={key:0},U={key:1},H=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxSpace")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxInput")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxInput")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCopy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Copy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxSpace")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useClipboard "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/cdk/clipboard'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" text "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" copy "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useClipboard"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onCopy"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"copy"),n("span",{class:"token punctuation"},"("),s("text"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onCopy'"),n("span",{class:"token punctuation"},","),s(" success"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function J(t,o,c,a,r,l){const u=f("raw-demo"),k=$;return i(),x(k,{packageName:"cdk",componentName:"clipboard",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxInput%20v-model%3Avalue%3D%22text%22%20style%3D%22width%3A%20200px%22%3E%3C%2FIxInput%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22onCopy%22%3ECopy%3C%2FIxButton%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useClipboard%20%7D%20from%20'%40idux%2Fcdk%2Fclipboard'%0A%0Aconst%20text%20%3D%20ref('')%0A%0Aconst%20%7B%20copy%20%7D%20%3D%20useClipboard()%0Aconst%20onCopy%20%3D%20()%20%3D%3E%20%7B%0A%20%20copy(text.value).then(success%20%3D%3E%20%7B%0A%20%20%20%20console.log('onCopy'%2C%20success)%0A%20%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A",title:t.lang==="zh"?"基本使用":"Basic usage"},{description:p(()=>[t.lang==="zh"?(i(),d("p",P,"最简单的用法。")):C("",!0),t.lang==="en"?(i(),d("p",U,"The simplest usage.")):C("",!0)]),rawCode:p(()=>[e(u)]),highlightCode:p(()=>[H]),_:1},8,["title"])}const K=g(T,[["render",J]]),M={},O={class:"markdown site-doc-api"},Q=n("p",null,[n("code",null,"@idux/cdk/a11y"),s(" 对系统剪贴板进行了简单封装，更加方便使用。")],-1),W=n("h2",{id:"使用场景"},[n("span",null,"使用场景"),n("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),X=n("p",null,[s("对于简单的文本可以直接复制，但是对于较长的文本，浏览器需要时间来填充中间 "),n("code",null,"textarea"),s(" 元素并复制内容。在这种情况下，直接调用可能会失败，因此可以通过传入 "),n("code",null,"attempts"),s(" 进行多次尝试。")],-1),Y=n("h3",{id:"useClipboard"},[n("span",null,"useClipboard"),n("a",{onclick:"window.location.hash = 'useClipboard'",class:"anchor"},"#")],-1),Z=S('<pre class="language-ts"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useClipboard</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function-variable function">copy</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> attempts<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span></code></pre><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>需要复制的文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>attempts</code></td><td>尝试次数</td><td><code>number</code></td><td><code>1</code></td></tr></tbody></table>',2);function nn(t,o){const c=A,a=I;return i(),d("section",O,[e(a,{class:"site-anchor",affix:"",offset:16},{default:p(()=>[e(c,{href:"#使用场景",title:"使用场景"},{default:p(()=>[e(c,{href:"#useClipboard",title:"useClipboard"})]),_:1})]),_:1}),Q,W,X,Y,Z])}const sn=g(M,[["render",nn]]),an={name:"DocsCdkClipboard",components:{DemoBasic:K,ApiDocs:sn},setup(){var l;const t=N(),o=q(),c=h((l=t.query.tab)!=null?l:"demo");R(c,u=>{o.push({query:{tab:u}})});const a=[{label:"示例",value:"demo"},{label:"API",value:"api"},,,,].filter(Boolean),r=h(!1);return{checkedDoc:c,docRadioData:a,showDevDemo:r}}},tn={class:"site-doc-wrapper"},on={class:"markdown site-doc-header"},en=n("h1",null,[s("Clipboard"),n("span",{class:"subtitle"},"剪贴板")],-1),cn=n("div",{class:"markdown site-doc-description"},null,-1),pn={class:"site-doc-demo"};function ln(t,o,c,a,r,l){const u=F,k=A,m=I,_=f("DemoBasic"),D=f("ApiDocs");return i(),d("article",tn,[n("section",on,[en,cn,e(u,{value:a.checkedDoc,"onUpdate:value":o[0]||(o[0]=w=>a.checkedDoc=w),dataSource:a.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),b(n("section",pn,[e(m,{class:"site-anchor",affix:"",offset:16},{default:p(()=>[(a.showDevDemo,i(),x(k,{key:0,href:"#cdk-clipboard-basic",title:"基本使用"}))]),_:1}),e(_)],512),[[y,a.checkedDoc==="demo"]]),b(e(D,null,null,512),[[y,a.checkedDoc==="api"]])])}const hn=g(an,[["render",ln]]);export{hn as default};
