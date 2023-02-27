import{I as B,a as R}from"./index-30cd6a35.js";import{_ as I,I as Y}from"./GlobalCodeBox-3884ee00.js";import{v as x,f as v,y as o,l as L,ah as r,aa as l,a8 as u,ad as n,i as C,a9 as k,ac as g,ab as t,ai as _,aq as N,b as F,w as O,am as j,al as H,H as A,I as E}from"./vendor-1c103b38.js";import{A as G,L as S,_ as m,c as w,a as b}from"./index-4edbd2bb.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const M={icon:[String,Object],status:String,subtitle:String,title:String},U={success:"check-circle-filled",error:"close-circle-filled",info:"info-circle-filled",warning:"exclamation-circle-filled"},J=x({name:"IxResult",components:{IxIcon:G},props:M,setup(s,{slots:c}){const a=S("common"),e=v(()=>`${a.prefixCls}-result`),i=S("result"),h=Q(s,e,i),d=X(s,i);return()=>{const p=e.value,{title:$,subtitle:y}=s;return o("div",{class:h.value},[K(p,c.icon,d.value),f(`${p}-title`,c.title,$),f(`${p}-subtitle`,c.subtitle,y),f(`${p}-extra`,c.extra),f(`${p}-content`,c.default)])}}});function f(s,c,a){if(!c&&!a)return null;const e=c?c():a;return e?o("div",{class:s},[e]):null}function K(s,c,a){const e=L(a)?o(G,{name:a},null):a;return f(`${s}-icon`,c,e)}function Q(s,c,a){return v(()=>{const e=c.value,i=s.status??a.status;return{[e]:!0,[`${e}-${i}`]:!!i}})}function X(s,c){return v(()=>{var e;const a=s.status??c.status;return s.icon??((e=c.icon)==null?void 0:e[a])??U[a]})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const D=J,Z={};function tt(s,c){const a=w,e=D;return u(),r(e,{status:"success",title:"Successfully watch the website.",subtitle:"Welcome again"},{extra:l(()=>[o(a,{mode:"primary"},{default:l(()=>[n("Go console")]),_:1}),o(a,null,{default:l(()=>[n("Buy Again")]),_:1})]),_:1})}const nt=m(Z,[["render",tt]]),st=x({name:"Success",components:{"raw-demo":nt},setup(){const{lang:s}=C(b);return{lang:s}}}),at={key:0},et={key:1},ot=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxResult")]),n(),t("span",{class:"token attr-name"},"status"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Successfully watch the website."),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"subtitle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Welcome again"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Go console"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n("Buy Again"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxResult")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function ct(s,c,a,e,i,h){const d=_("raw-demo"),p=I;return u(),r(p,{packageName:"components",componentName:"result",demoName:"Success",code:"%3Ctemplate%3E%0A%20%20%3CIxResult%20status%3D%22success%22%20title%3D%22Successfully%20watch%20the%20website.%22%20subtitle%3D%22Welcome%20again%22%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3EGo%20console%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3CIxButton%3EBuy%20Again%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2FIxResult%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"成功":"Success"},{description:l(()=>[s.lang==="zh"?(u(),k("p",at,"成功的结果。")):g("",!0),s.lang==="en"?(u(),k("p",et,"The result of success.")):g("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>[ot]),_:1},8,["title"])}const lt=m(st,[["render",ct]]),ut={};function pt(s,c){const a=w,e=D;return u(),r(e,{title:"Your operation has been executed"},{extra:l(()=>[o(a,{mode:"primary"},{default:l(()=>[n("Go console")]),_:1})]),_:1})}const it=m(ut,[["render",pt]]),rt=x({name:"Info",components:{"raw-demo":it},setup(){const{lang:s}=C(b);return{lang:s}}}),dt={key:0},kt={key:1},mt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxResult")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Your operation has been executed"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Go console"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxResult")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function _t(s,c,a,e,i,h){const d=_("raw-demo"),p=I;return u(),r(p,{packageName:"components",componentName:"result",demoName:"Info",code:"%3Ctemplate%3E%0A%20%20%3CIxResult%20title%3D%22Your%20operation%20has%20been%20executed%22%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3EGo%20console%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2FIxResult%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"信息":"Info"},{description:l(()=>[s.lang==="zh"?(u(),k("p",dt,"展示处理的结果。")):g("",!0),s.lang==="en"?(u(),k("p",kt,"Show the results of processing.")):g("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>[mt]),_:1},8,["title"])}const ht=m(rt,[["render",_t]]),gt={};function ft(s,c){const a=w,e=D;return u(),r(e,{status:"warning",title:"There are some problems with your operation."},{extra:l(()=>[o(a,{mode:"primary"},{default:l(()=>[n("Go console")]),_:1})]),_:1})}const xt=m(gt,[["render",ft]]),It=x({name:"Warning",components:{"raw-demo":xt},setup(){const{lang:s}=C(b);return{lang:s}}}),Ct={key:0},wt={key:1},bt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxResult")]),n(),t("span",{class:"token attr-name"},"status"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("There are some problems with your operation."),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Go console"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxResult")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Dt(s,c,a,e,i,h){const d=_("raw-demo"),p=I;return u(),r(p,{packageName:"components",componentName:"result",demoName:"Warning",code:"%3Ctemplate%3E%0A%20%20%3CIxResult%20status%3D%22warning%22%20title%3D%22There%20are%20some%20problems%20with%20your%20operation.%22%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3EGo%20console%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2FIxResult%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"警告":"warning"},{description:l(()=>[s.lang==="zh"?(u(),k("p",Ct,"警告类型的结果。")):g("",!0),s.lang==="en"?(u(),k("p",wt,"The result of the warning type.")):g("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>[bt]),_:1},8,["title"])}const $t=m(It,[["render",Dt]]),yt={},At=t("ul",null,[t("li",null,"Your account has been frozen."),t("li",null,"Your account is not yet eligible to apply.")],-1);function Et(s,c){const a=w,e=D;return u(),r(e,{status:"error",title:"Submission Failed",subtitle:"Please check and modify the following information before resubmitting."},{extra:l(()=>[o(a,{mode:"primary"},{default:l(()=>[n("Go console")]),_:1}),o(a,null,{default:l(()=>[n("Bug again")]),_:1})]),default:l(()=>[n(" The content you submitted has the following error: "),At]),_:1})}const Bt=m(yt,[["render",Et]]),Rt=x({name:"Error",components:{"raw-demo":Bt},setup(){const{lang:s}=C(b);return{lang:s}}}),vt={key:0},Ft={key:1},St=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxResult")]),n(`
    `),t("span",{class:"token attr-name"},"status"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Submission Failed"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"subtitle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Please check and modify the following information before resubmitting."),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Go console"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n("Bug again"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token comment"},"<!-- TODO use Typography -->"),n(`
    The content you submitted has the following error:
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n("Your account has been frozen."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n("Your account is not yet eligible to apply."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxResult")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Nt(s,c,a,e,i,h){const d=_("raw-demo"),p=I;return u(),r(p,{packageName:"components",componentName:"result",demoName:"Error",code:"%3Ctemplate%3E%0A%20%20%3CIxResult%0A%20%20%20%20status%3D%22error%22%0A%20%20%20%20title%3D%22Submission%20Failed%22%0A%20%20%20%20subtitle%3D%22Please%20check%20and%20modify%20the%20following%20information%20before%20resubmitting.%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%3CIxButton%20mode%3D%22primary%22%3EGo%20console%3C%2FIxButton%3E%0A%20%20%20%20%20%20%3CIxButton%3EBug%20again%3C%2FIxButton%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C!--%20TODO%20use%20Typography%20--%3E%0A%20%20%20%20The%20content%20you%20submitted%20has%20the%20following%20error%3A%0A%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%3Cli%3EYour%20account%20has%20been%20frozen.%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%3EYour%20account%20is%20not%20yet%20eligible%20to%20apply.%3C%2Fli%3E%0A%20%20%20%20%3C%2Ful%3E%0A%20%20%3C%2FIxResult%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"错误":"Error"},{description:l(()=>[s.lang==="zh"?(u(),k("p",vt,"复杂的错误反馈。")):g("",!0),s.lang==="en"?(u(),k("p",Ft,"Complex error feedback.")):g("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>[St]),_:1},8,["title"])}const Gt=m(Rt,[["render",Nt]]),qt={},Tt={class:"markdown site-doc-api"},zt=t("h3",{id:"IxResult"},[t("span",null,"IxResult"),t("a",{onclick:"window.location.hash = 'IxResult'",class:"anchor"},"#")],-1),Pt=t("h4",{id:"ResultProps"},[t("span",null,"ResultProps"),t("a",{onclick:"window.location.hash = 'ResultProps'",class:"anchor"},"#")],-1),Vt=N('<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>icon</code></td><td>自定义图标</td><td><code>string | VNode | #icon</code></td><td>-</td><td>✅</td><td>-</td></tr><tr><td><code>status</code></td><td>当前结果的状态</td><td><code>ResultStatus</code></td><td>-</td><td>✅</td><td>结果的状态，决定图标和颜色</td></tr><tr><td><code>subtitle</code></td><td>subtitle 文字</td><td><code>string | #subtitle</code></td><td>-</td><td>-</td><td><code>slot</code>形式优先级高于<code>prop</code></td></tr><tr><td><code>title</code></td><td>title文字</td><td><code>string | #title</code></td><td>-</td><td>-</td><td><code>slot</code>形式优先级高于<code>prop</code></td></tr></tbody></table><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ResultStatus</span> <span class="token operator">=</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span></code></pre>',2),Wt=t("h4",{id:"ResultSlots"},[t("span",null,"ResultSlots"),t("a",{onclick:"window.location.hash = 'ResultSlots'",class:"anchor"},"#")],-1),Yt=N("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>default</code></td><td>复杂的情况说明，用于显示更多的信息</td><td>-</td><td>-</td></tr><tr><td><code>extra</code></td><td>操作区</td><td>-</td><td>-</td></tr></tbody></table>",1);function Lt(s,c){const a=R,e=B;return u(),k("section",Tt,[o(e,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[o(a,{href:"#IxResult",title:"IxResult"},{default:l(()=>[o(a,{href:"#ResultProps",title:"ResultProps"}),o(a,{href:"#ResultSlots",title:"ResultSlots"})]),_:1})]),_:1}),zt,Pt,Vt,Wt,Yt])}const Ot=m(qt,[["render",Lt]]),jt={},Ht={class:"markdown site-doc-design"},Mt=t("h2",{id:"介绍"},[t("span",null,"介绍"),t("a",{onclick:"window.location.hash = '介绍'",class:"anchor"},"#")],-1),Ut=t("p",null,"用于反馈各类操作任务结果的页面。",-1),Jt=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),Kt=t("ul",null,[t("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。"),t("li",null,"遇到特殊情况导致无法反馈结果时，会反馈错误原因：服务器错误、页面未找到等")],-1),Qt=t("h2",{id:"构成"},[t("span",null,"构成"),t("a",{onclick:"window.location.hash = '构成'",class:"anchor"},"#")],-1),Xt=t("h3",{id:"图标（必选）"},[t("span",null,"图标（必选）"),t("a",{onclick:"window.location.hash = '图标（必选）'",class:"anchor"},"#")],-1),Zt=t("p",null,"表示当前结果的图标，一般有：成功、失败、告警、普通信息等，根据业务可加入自定义图标。",-1),tn=t("h3",{id:"结果标题（必选）"},[t("span",null,"结果标题（必选）"),t("a",{onclick:"window.location.hash = '结果标题（必选）'",class:"anchor"},"#")],-1),nn=t("p",null,"用简要的文案告知用户当前的结果。",-1),sn=t("h3",{id:"结果文案（可选）"},[t("span",null,"结果文案（可选）"),t("a",{onclick:"window.location.hash = '结果文案（可选）'",class:"anchor"},"#")],-1),an=t("p",null,"辅助说明当前结果的详细信息的文案。",-1),en=t("h3",{id:"按钮（可选）"},[t("span",null,"按钮（可选）"),t("a",{onclick:"window.location.hash = '按钮（可选）'",class:"anchor"},"#")],-1),on=t("p",null,"根据当前结果可以进行的后续操作。",-1);function cn(s,c){const a=R,e=B;return u(),k("section",Ht,[o(e,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[o(a,{href:"#介绍",title:"介绍"}),o(a,{href:"#使用场景",title:"使用场景"}),o(a,{href:"#构成",title:"构成"},{default:l(()=>[o(a,{href:"#图标（必选）",title:"图标（必选）"}),o(a,{href:"#结果标题（必选）",title:"结果标题（必选）"}),o(a,{href:"#结果文案（可选）",title:"结果文案（可选）"}),o(a,{href:"#按钮（可选）",title:"按钮（可选）"})]),_:1})]),_:1}),Mt,Ut,Jt,Kt,Qt,Xt,Zt,tn,nn,sn,an,en,on])}const ln=m(jt,[["render",cn]]),un={name:"DocsComponentsResult",components:{DemoSuccess:lt,DemoInfo:ht,DemoWarning:$t,DemoError:Gt,ApiDocs:Ot,DesignDocs:ln},setup(){const s=j(),c=H(),a=F(s.query.tab??"demo");O(a,h=>{c.push({query:{tab:h}})});const e=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),i=F(!1);return{checkedDoc:a,docRadioData:e,showDevDemo:i}}},pn={class:"site-doc-wrapper"},rn={class:"markdown site-doc-header"},dn=t("h1",null,[n("Result"),t("span",{class:"subtitle"},"结果")],-1),kn=t("div",{class:"markdown site-doc-description"},null,-1),mn={class:"site-doc-demo"};function _n(s,c,a,e,i,h){const d=Y,p=R,$=B,y=_("DemoSuccess"),q=_("DemoInfo"),T=_("DemoWarning"),z=_("DemoError"),P=_("ApiDocs"),V=_("DesignDocs");return u(),k("article",pn,[t("section",rn,[dn,kn,o(d,{value:e.checkedDoc,"onUpdate:value":c[0]||(c[0]=W=>e.checkedDoc=W),dataSource:e.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),A(t("section",mn,[o($,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[(e.showDevDemo,u(),r(p,{key:0,href:"#components-result-success",title:"成功"})),(e.showDevDemo,u(),r(p,{key:1,href:"#components-result-info",title:"信息"})),(e.showDevDemo,u(),r(p,{key:2,href:"#components-result-warning",title:"警告"})),(e.showDevDemo,u(),r(p,{key:3,href:"#components-result-error",title:"错误"}))]),_:1}),o(y),o(q),o(T),o(z)],512),[[E,e.checkedDoc==="demo"]]),A(o(P,null,null,512),[[E,e.checkedDoc==="api"]]),A(o(V,null,null,512),[[E,e.checkedDoc==="design"]])])}const In=m(un,[["render",_n]]);export{In as default};
