import{I as v,a as P}from"./index-fa60ee7a.js";import{_ as S,I as j}from"./GlobalCodeBox-993c45a7.js";import{d as B,as as V,at as M,c as N,an as H,Z as z,f as o,af as X,_ as g,o as u,b as p,F,i as I,a as w,z as m,l as A,w as l,A as _,e as t,h as n,q as T,p as L,B as Z,u as J,x as K,C as f,D as x}from"./index-88a96bc2.js";import{I as O}from"./index-09eb03f7.js";import"./__commonjsHelpers__-725317a4.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Q={animated:{type:Boolean,default:void 0},loading:{type:Boolean,default:!0},type:{type:String,default:"text"},width:[String,Number],height:[String,Number],repeat:{type:Number,default:1}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function G(s,a){const{getGreyColors:e}=a,{marginSizeSm:c,marginSizeXs:k}=s,i=e();return{marginBottom:c,loaderMarginBottom:k,startColor:i.l40,endColor:i.l30}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const W=(s,a,e)=>G(s,e);/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y=B({name:"IxSkeleton",inheritAttrs:!1,props:Q,setup(s,{slots:a,attrs:e}){const c=V("common"),{globalHashId:k,hashId:i,registerToken:d}=M("skeleton");d(W);const r=N(()=>`${c.prefixCls}-skeleton`),$=V("skeleton"),b=N(()=>{var E;const h=r.value;return H({[`${h}-loader`]:!0,[`${h}-${s.type}`]:!0,[`${h}-animated`]:(E=s.animated)!=null?E:$.animated})}),q=N(()=>{const{width:h,height:E,type:D}=s;if(D==="circle"){const C=z(h||E);return{width:C,height:C}}return{width:z(h),height:z(E)}});return()=>{var C;if(!s.loading)return(C=a.default)==null?void 0:C.call(a);const h=r.value,E=o("div",{class:b.value,style:q.value},null),D=Array.from({length:s.repeat}).map(()=>E);return o("div",X({class:[h,k.value,i.value]},e),[D])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const y=Y,tt={};function nt(s,a){const e=y;return u(),p(F,null,[o(e),o(e,{type:"rect",height:40}),o(e,{type:"circle",width:50}),o(e,{type:"round",height:40})],64)}const at=g(tt,[["render",nt]]),st=B({name:"Basic",components:{"raw-demo":at},setup(){const{lang:s}=I(w);return{lang:s}}}),et={key:0};function ot(s,a,e,c,k,i){const d=m("raw-demo"),r=S;return u(),A(r,{packageName:"components",componentName:"skeleton",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSkeleton%3E%3C%2FIxSkeleton%3E%0A%20%20%3CIxSkeleton%20type%3D%22rect%22%20%3Aheight%3D%2240%22%3E%3C%2FIxSkeleton%3E%0A%20%20%3CIxSkeleton%20type%3D%22circle%22%20%3Awidth%3D%2250%22%3E%3C%2FIxSkeleton%3E%0A%20%20%3CIxSkeleton%20type%3D%22round%22%20%3Aheight%3D%2240%22%3E%3C%2FIxSkeleton%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"基本使用":"Basic usage"},{description:l(()=>[s.lang==="zh"?(u(),p("p",et,"一共有四种骨架类型：文本、矩形、圆角矩形、圆形。")):_("",!0),s.lang==="en"?(u(),p(F,{key:1},[],64)):_("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>a[0]||(a[0]=[t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rect"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("40"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("circle"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("50"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("round"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("40"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1)])),_:1},8,["title"])}const ct=g(st,[["render",ot]]),ut="/images/avatar/0.png",lt={key:1,src:ut},pt=B({__name:"Loading",setup(s){const a=T(!0);return(e,c)=>{const k=O,i=y;return u(),p(F,null,[o(k,{checked:a.value,"onUpdate:checked":c[0]||(c[0]=d=>a.value=d)},null,8,["checked"]),o(i,{loading:a.value,repeat:3,style:{margin:"16px 0"}},{default:l(()=>c[1]||(c[1]=[t("div",null," 人生在世，你只要知道两件事。一：这世界上绝对存在不需要读书也很聪明的人，不需要努力也过得很好的人，甚至不需要钱就能很快乐的人。二：这个人绝对不是你！ ",-1)])),_:1},8,["loading"]),a.value?(u(),A(i,{key:0,type:"rect",width:192,height:192})):(u(),p("img",lt))],64)}}}),it=B({name:"Loading",components:{"raw-demo":pt},setup(){const{lang:s}=I(w);return{lang:s}}}),dt={key:0};function rt(s,a,e,c,k,i){const d=m("raw-demo"),r=S;return u(),A(r,{packageName:"components",componentName:"skeleton",demoName:"Loading",code:"%3Ctemplate%3E%0A%20%20%3CIxSwitch%20v-model%3Achecked%3D%22loading%22%3E%3C%2FIxSwitch%3E%0A%20%20%3CIxSkeleton%20%3Aloading%3D%22loading%22%20%3Arepeat%3D%223%22%20style%3D%22margin%3A%2016px%200%22%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%E4%BA%BA%E7%94%9F%E5%9C%A8%E4%B8%96%EF%BC%8C%E4%BD%A0%E5%8F%AA%E8%A6%81%E7%9F%A5%E9%81%93%E4%B8%A4%E4%BB%B6%E4%BA%8B%E3%80%82%E4%B8%80%EF%BC%9A%E8%BF%99%E4%B8%96%E7%95%8C%E4%B8%8A%E7%BB%9D%E5%AF%B9%E5%AD%98%E5%9C%A8%E4%B8%8D%E9%9C%80%E8%A6%81%E8%AF%BB%E4%B9%A6%E4%B9%9F%E5%BE%88%E8%81%AA%E6%98%8E%E7%9A%84%E4%BA%BA%EF%BC%8C%E4%B8%8D%E9%9C%80%E8%A6%81%E5%8A%AA%E5%8A%9B%E4%B9%9F%E8%BF%87%E5%BE%97%E5%BE%88%E5%A5%BD%E7%9A%84%E4%BA%BA%EF%BC%8C%E7%94%9A%E8%87%B3%E4%B8%8D%E9%9C%80%E8%A6%81%E9%92%B1%E5%B0%B1%E8%83%BD%E5%BE%88%E5%BF%AB%E4%B9%90%E7%9A%84%E4%BA%BA%E3%80%82%E4%BA%8C%EF%BC%9A%E8%BF%99%E4%B8%AA%E4%BA%BA%E7%BB%9D%E5%AF%B9%E4%B8%8D%E6%98%AF%E4%BD%A0%EF%BC%81%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2FIxSkeleton%3E%0A%0A%20%20%3CIxSkeleton%20v-if%3D%22loading%22%20type%3D%22rect%22%20%3Awidth%3D%22192%22%20%3Aheight%3D%22192%22%3E%3C%2FIxSkeleton%3E%0A%20%20%3Cimg%20v-else%20src%3D%22%2Fimages%2Favatar%2F0.png%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20loading%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"加载结束后切换UI":"undefined"},{description:l(()=>[s.lang==="zh"?(u(),p("p",dt,a[0]||(a[0]=[n("支持使用"),t("code",null,"v-if",-1),n("或者默认插槽实现切换UI，默认插槽实现会额外生成一个div。")]))):_("",!0),s.lang==="en"?(u(),p(F,{key:1},[],64)):_("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>a[1]||(a[1]=[t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSwitch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSwitch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},":loading"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":repeat"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin"),t("span",{class:"token punctuation"},":"),n(" 16px 0")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      人生在世，你只要知道两件事。一：这世界上绝对存在不需要读书也很聪明的人，不需要努力也过得很好的人，甚至不需要钱就能很快乐的人。二：这个人绝对不是你！
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rect"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("192"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("192"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("img")]),n(),t("span",{class:"token attr-name"},"v-else"),n(),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/images/avatar/0.png"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" loading "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1)])),_:1},8,["title"])}const kt=g(it,[["render",rt]]),mt={};function gt(s,a){const e=y;return u(),p(F,null,[o(e,{type:"rect",height:80}),o(e,{type:"rect",height:80,animated:!1})],64)}const ht=g(mt,[["render",gt]]),Et=B({name:"Animated",components:{"raw-demo":ht},setup(){const{lang:s}=I(w);return{lang:s}}}),At={key:0};function _t(s,a,e,c,k,i){const d=m("raw-demo"),r=S;return u(),A(r,{packageName:"components",componentName:"skeleton",demoName:"Animated",code:"%3Ctemplate%3E%0A%20%20%3CIxSkeleton%20type%3D%22rect%22%20%3Aheight%3D%2280%22%3E%3C%2FIxSkeleton%3E%0A%20%20%3CIxSkeleton%20type%3D%22rect%22%20%3Aheight%3D%2280%22%20%3Aanimated%3D%22false%22%3E%3C%2FIxSkeleton%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"动画效果":"undefined"},{description:l(()=>[s.lang==="zh"?(u(),p("p",At,"支持配置是否开启骨架屏的加载动画。")):_("",!0),s.lang==="en"?(u(),p(F,{key:1},[],64)):_("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>a[0]||(a[0]=[t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rect"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("80"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rect"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("80"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":animated"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1)])),_:1},8,["title"])}const Ct=g(Et,[["render",_t]]),Ft={},Bt={style:{display:"flex"}};function Dt(s,a){const e=y;return u(),p("div",Bt,[o(e,{type:"circle",width:40}),t("div",null,[o(e,{width:"60%"}),o(e,{repeat:3,width:400})])])}const ft=g(Ft,[["render",Dt]]),xt=B({name:"Custom",components:{"raw-demo":ft},setup(){const{lang:s}=I(w);return{lang:s}}}),vt={key:0};function St(s,a,e,c,k,i){const d=m("raw-demo"),r=S;return u(),A(r,{packageName:"components",componentName:"skeleton",demoName:"Custom",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22display%3A%20flex%22%3E%0A%20%20%20%20%3CIxSkeleton%20type%3D%22circle%22%20%3Awidth%3D%2240%22%3E%3C%2FIxSkeleton%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3CIxSkeleton%20width%3D%2260%25%22%3E%3C%2FIxSkeleton%3E%0A%20%20%20%20%20%20%3CIxSkeleton%20%3Arepeat%3D%223%22%20%3Awidth%3D%22400%22%3E%3C%2FIxSkeleton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"自定义":"undefined"},{description:l(()=>[s.lang==="zh"?(u(),p("p",vt,"自定义宽高，通过“搭积木”的形式搭建自己想要的骨架屏效果。")):_("",!0),s.lang==="en"?(u(),p(F,{key:1},[],64)):_("",!0)]),rawCode:l(()=>[o(d)]),highlightCode:l(()=>a[0]||(a[0]=[t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("circle"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("40"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("60%"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSkeleton")]),n(),t("span",{class:"token attr-name"},":repeat"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("400"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSkeleton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1)])),_:1},8,["title"])}const It=g(xt,[["render",St]]),wt={},yt={class:"markdown site-doc-api"};function $t(s,a){const e=P,c=v;return u(),p("section",yt,[o(c,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[o(e,{href:"#IxSkeleton",title:"IxSkeleton"},{default:l(()=>[o(e,{href:"#SkeletonProps",title:"SkeletonProps"}),o(e,{href:"#SkeletonSlots",title:"SkeletonSlots"})]),_:1})]),_:1}),a[0]||(a[0]=t("h3",{id:"IxSkeleton"},[t("span",null,"IxSkeleton"),t("a",{onclick:"window.location.hash = 'IxSkeleton'",class:"anchor"},"#")],-1)),a[1]||(a[1]=t("h4",{id:"SkeletonProps"},[t("span",null,"SkeletonProps"),t("a",{onclick:"window.location.hash = 'SkeletonProps'",class:"anchor"},"#")],-1)),a[2]||(a[2]=L("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>animated</code></td><td>是否开启动画</td><td><code>boolean</code></td><td><code>true</code></td><td>✅</td><td>-</td></tr><tr><td><code>loading</code></td><td>是否显示加载结束后的UI</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>-</td></tr><tr><td><code>repeat</code></td><td>骨架的重复次数</td><td><code>number</code></td><td><code>1</code></td><td>-</td><td>-</td></tr><tr><td><code>type</code></td><td>骨架的类型</td><td><code>&#39;text&#39; | &#39;rect&#39; | &#39;round&#39; | &#39;circle&#39;</code></td><td><code>text</code></td><td>-</td><td>-</td></tr><tr><td><code>width</code></td><td>骨架的宽度</td><td><code>string | number</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>height</code></td><td>骨架的高度</td><td><code>string | number</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1)),a[3]||(a[3]=t("h4",{id:"SkeletonSlots"},[t("span",null,"SkeletonSlots"),t("a",{onclick:"window.location.hash = 'SkeletonSlots'",class:"anchor"},"#")],-1)),a[4]||(a[4]=L("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>default</code></td><td>展示加载结束后的UI</td><td>-</td><td>-</td></tr></tbody></table>",1))])}const bt=g(wt,[["render",$t]]),qt={},Nt={class:"markdown site-doc-design"};function zt(s,a){const e=P,c=v;return u(),p("section",Nt,[o(c,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[o(e,{href:"#组件定义",title:"组件定义"}),o(e,{href:"#使用场景",title:"使用场景"})]),_:1}),a[0]||(a[0]=t("h2",{id:"组件定义"},[t("span",null,"组件定义"),t("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1)),a[1]||(a[1]=t("p",null,"在需要等待加载数据的UI位置提供一个占位图。",-1)),a[2]||(a[2]=t("h2",{id:"使用场景"},[t("span",null,"使用场景"),t("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1)),a[3]||(a[3]=t("ul",null,[t("li",null,"网络较慢，需要长时间等待加载处理的情况下。"),t("li",null,"图文信息内容较多的列表/卡片中。"),t("li",null,"只在第一次加载数据的时候使用。")],-1))])}const Tt=g(qt,[["render",zt]]),Lt={},Pt={class:"markdown site-doc-theme"};function Vt(s,a){const e=v;return u(),p("section",Pt,[o(e,{class:"site-anchor",affix:"",offset:16}),a[0]||(a[0]=L("<table><thead><tr><th>名称</th><th>描述</th><th>类型</th><th>default</th><th>dark</th></tr></thead><tbody><tr><td><code>endColor</code></td><td></td><td><code>string</code></td><td><code>#e1e5eb</code></td><td><code>#1F2329</code></td></tr><tr><td><code>loaderMarginBottom</code></td><td></td><td><code>number</code></td><td><code>4</code></td><td><code>4</code></td></tr><tr><td><code>marginBottom</code></td><td></td><td><code>number</code></td><td><code>8</code></td><td><code>8</code></td></tr><tr><td><code>startColor</code></td><td></td><td><code>string</code></td><td><code>#edf1f7</code></td><td><code>#171A1F</code></td></tr></tbody></table>",1))])}const Gt=g(Lt,[["render",Vt]]),Ut={name:"DocsComponentsSkeleton",components:{DemoBasic:ct,DemoLoading:kt,DemoAnimated:Ct,DemoCustom:It,ApiDocs:bt,DesignDocs:Tt,ThemeDocs:Gt},setup(){var i;const s=Z(),a=J(),e=T((i=s.query.tab)!=null?i:"demo");K(e,d=>{a.push({query:{tab:d}})});const c=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},{label:"主题",value:"theme"}].filter(Boolean),k=T(!1);return{checkedDoc:e,docRadioData:c,showDevDemo:k}}},Rt={class:"site-doc-wrapper"},jt={class:"markdown site-doc-header"},Mt={class:"site-doc-demo"};function Ht(s,a,e,c,k,i){const d=j,r=P,$=v,b=m("DemoBasic"),q=m("DemoLoading"),h=m("DemoAnimated"),E=m("DemoCustom"),D=m("ApiDocs"),C=m("DesignDocs"),U=m("ThemeDocs");return u(),p("article",Rt,[t("section",jt,[a[1]||(a[1]=t("h1",null,[n("Skeleton"),t("span",{class:"subtitle"},"骨架屏")],-1)),a[2]||(a[2]=t("div",{class:"markdown site-doc-description"},null,-1)),o(d,{value:c.checkedDoc,"onUpdate:value":a[0]||(a[0]=R=>c.checkedDoc=R),dataSource:c.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),f(t("section",Mt,[o($,{class:"site-anchor",affix:"",offset:16},{default:l(()=>[(c.showDevDemo,u(),A(r,{key:0,href:"#components-skeleton-basic",title:"基本使用"})),(c.showDevDemo,u(),A(r,{key:1,href:"#components-skeleton-loading",title:"加载结束后切换UI"})),(c.showDevDemo,u(),A(r,{key:2,href:"#components-skeleton-animated",title:"动画效果"})),(c.showDevDemo,u(),A(r,{key:3,href:"#components-skeleton-custom",title:"自定义"}))]),_:1}),o(b),o(q),o(h),o(E)],512),[[x,c.checkedDoc==="demo"]]),f(o(D,null,null,512),[[x,c.checkedDoc==="api"]]),f(o(C,null,null,512),[[x,c.checkedDoc==="design"]]),f(o(U,null,null,512),[[x,c.checkedDoc==="theme"]])])}const Qt=g(Ut,[["render",Ht]]);export{Qt as default};