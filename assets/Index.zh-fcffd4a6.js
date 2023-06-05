import{I as E,a as f}from"./index-31c0fa9f.js";import{_ as D,I as G}from"./GlobalCodeBox-ca5536d2.js";import{x as h,c as T,q as L,a2 as j,z as t,l as b,aa as p,aj as m,ac as e,af as a,ad as n,ak as _,ab as k,ae as g,F as y,as as A,ao as U,an as H,r as v,w as W,H as B,I as C}from"./vendor-95c13cf7.js";import{L as X,_ as I,A as M,a as w,T as J,U as K,W as O,X as Q}from"./index-42dbc838.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=Symbol("breadcrumbToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y={separator:{type:String,default:"/"}},Z={separator:String},nn=h({name:"IxBreadcrumb",props:Y,setup(c,{slots:u}){const o=X("common"),s=T(()=>`${o.prefixCls}-breadcrumb`);return L(N,{mergedPrefixCls:s,separatorRef:j(c,"separator")}),()=>{var l;return t("nav",{class:s.value,"aria-label":"Breadcrumb"},[t("ol",null,[(l=u.default)==null?void 0:l.call(u)])])}}}),an=h({name:"IxBreadcrumbItem",props:Z,setup(c,{slots:u}){const o=b(N,null);if(!o)return()=>null;const{mergedPrefixCls:s,separatorRef:l}=o;return()=>{var i,r;return t("li",{class:`${s.value}-item`},[t("span",{class:`${s.value}-item-link`},[(i=u.default)==null?void 0:i.call(u)]),t("span",{class:`${s.value}-item-separator`,"aria-hidden":"true"},[u.separator?u.separator():(r=c.separator)!=null?r:l.value])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=nn,$=an,tn={},sn={href:"#"};function en(c,u){const o=M,s=$,l=F;return p(),m(l,null,{default:e(()=>[t(s,null,{default:e(()=>[t(o,{name:"transmit"}),a(" 巴黎")]),_:1}),t(s,null,{default:e(()=>[t(o,{name:"cloud"}),a(" 北京")]),_:1}),t(s,null,{default:e(()=>[n("a",sn,[t(o,{name:"link"}),a(" 热情的岛屿")])]),_:1}),t(s,null,{default:e(()=>[t(o,{name:"tag"}),a(" 土耳其")]),_:1})]),_:1})}const on=I(tn,[["render",en]]),cn=h({name:"Basic",components:{"raw-demo":on},setup(){const{lang:c}=b(w);return{lang:c}}}),un={key:0},pn={key:1},ln=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("transmit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" 巴黎"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" 北京"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("link"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" 热情的岛屿"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tag"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" 土耳其"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function rn(c,u,o,s,l,i){const r=_("raw-demo"),d=D;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22transmit%22%20%2F%3E%20%E5%B7%B4%E9%BB%8E%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22cloud%22%20%2F%3E%20%E5%8C%97%E4%BA%AC%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22%23%22%3E%3CIxIcon%20name%3D%22link%22%20%2F%3E%20%E7%83%AD%E6%83%85%E7%9A%84%E5%B2%9B%E5%B1%BF%3C%2Fa%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22tag%22%20%2F%3E%20%E5%9C%9F%E8%80%B3%E5%85%B6%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"基本使用":"Basic usage"},{description:e(()=>[c.lang==="zh"?(p(),k("p",un,"最简单的用法。")):g("",!0),c.lang==="en"?(p(),k("p",pn,"The simplest usage.")):g("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[ln]),_:1},8,["title"])}const dn=I(cn,[["render",rn]]),mn={},kn=n("a",{href:"#"},"旅途",-1);function In(c,u){const o=$,s=F;return p(),m(s,{separator:">"},{default:e(()=>[t(o,null,{default:e(()=>[a("高架桥")]),_:1}),t(o,{separator:"~"},{default:e(()=>[a("路口")]),_:1}),t(o,null,{separator:e(()=>[a("→")]),default:e(()=>[kn]),_:1}),t(o,null,{default:e(()=>[a("路灯")]),_:1})]),_:1})}const _n=I(mn,[["render",In]]),gn=h({name:"Custom",components:{"raw-demo":_n},setup(){const{lang:c}=b(w);return{lang:c}}}),hn={key:0},bn=n("code",null,"separator",-1),xn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(">"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a("高架桥"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("~"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("路口"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),a("→"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("旅途"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a("路灯"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function Bn(c,u,o,s,l,i){const r=_("raw-demo"),d=D;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Custom",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%20separator%3D%22%3E%22%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%E9%AB%98%E6%9E%B6%E6%A1%A5%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%20separator%3D%22~%22%3E%E8%B7%AF%E5%8F%A3%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23separator%3E%E2%86%92%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22%23%22%3E%E6%97%85%E9%80%94%3C%2Fa%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%E8%B7%AF%E7%81%AF%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"自定义分隔符":"Customized Separator"},{description:e(()=>[c.lang==="zh"?(p(),k("p",hn,[a("使用 "),bn,a(" 可以自定义分隔符。")])):g("",!0),c.lang==="en"?(p(),k(y,{key:1},[],64)):g("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[xn]),_:1},8,["title"])}const Cn=I(gn,[["render",Bn]]),En={},fn={class:"ix-dropdown-trigger"};function Dn(c,u){const o=$,s=M,l=J,i=K,r=O,d=Q,x=F;return p(),m(x,null,{default:e(()=>[t(o,null,{default:e(()=>[a("Somewhere")]),_:1}),t(o,null,{default:e(()=>[t(d,null,{overlay:e(()=>[t(r,null,{default:e(()=>[t(l,{key:"one"},{default:e(()=>[a("skies are blue")]),_:1}),t(l,{key:"two"},{default:e(()=>[a("wish upon a star")]),_:1}),t(i),t(l,{key:"three",disabled:""},{default:e(()=>[a("troubles melt like lemon drops")]),_:1})]),_:1})]),default:e(()=>[n("a",fn,[a("over the rainbow "),t(s,{name:"down"})])]),_:1})]),_:1})]),_:1})}const An=I(En,[["render",Dn]]),wn=h({name:"Dropdown",components:{"raw-demo":An},setup(){const{lang:c}=b(w);return{lang:c}}}),Fn={key:0},$n=n("a",{href:"/components/dropdown/zh"},"下拉菜单",-1),vn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a("Somewhere"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxDropdown")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ix-dropdown-trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("over the rainbow "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("down"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxIcon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxMenu")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxMenuItem")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("one"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("skies are blue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxMenuItem")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxMenuItem")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("two"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("wish upon a star"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxMenuItem")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxMenuDivider")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxMenuItem")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("three"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),a("troubles melt like lemon drops"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxMenuItem")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxMenu")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxDropdown")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function yn(c,u,o,s,l,i){const r=_("raw-demo"),d=D;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Dropdown",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3ESomewhere%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3CIxDropdown%3E%0A%20%20%20%20%20%20%20%20%3Ca%20class%3D%22ix-dropdown-trigger%22%3Eover%20the%20rainbow%20%3CIxIcon%20name%3D%22down%22%3E%3C%2FIxIcon%3E%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23overlay%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIxMenu%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22one%22%3Eskies%20are%20blue%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22two%22%3Ewish%20upon%20a%20star%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22three%22%20disabled%3Etroubles%20melt%20like%20lemon%20drops%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FIxMenu%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2FIxDropdown%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"下拉菜单":"Dropdown"},{description:e(()=>[c.lang==="zh"?(p(),k("p",Fn,[a("和 "),$n,a(" 一起使用。")])):g("",!0),c.lang==="en"?(p(),k(y,{key:1},[],64)):g("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[vn]),_:1},8,["title"])}const Mn=I(wn,[["render",yn]]),Nn={},qn={class:"markdown site-doc-api"},Pn=n("h3",{id:"IxBreadcrumb"},[n("span",null,"IxBreadcrumb"),n("a",{onclick:"window.location.hash = 'IxBreadcrumb'",class:"anchor"},"#")],-1),zn=n("h4",{id:"BreadcrumbProps"},[n("span",null,"BreadcrumbProps"),n("a",{onclick:"window.location.hash = 'BreadcrumbProps'",class:"anchor"},"#")],-1),Sn=A("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>separator</code></td><td>分隔符</td><td><code>string</code></td><td><code>/</code></td><td>-</td><td>-</td></tr></tbody></table>",1),Rn=n("h4",{id:"BreadcrumbItemProps"},[n("span",null,"BreadcrumbItemProps"),n("a",{onclick:"window.location.hash = 'BreadcrumbItemProps'",class:"anchor"},"#")],-1),Vn=A("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>separator</code></td><td>分隔符</td><td><code>string | #separator</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1);function Gn(c,u){const o=f,s=E;return p(),k("section",qn,[t(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[t(o,{href:"#IxBreadcrumb",title:"IxBreadcrumb"},{default:e(()=>[t(o,{href:"#BreadcrumbProps",title:"BreadcrumbProps"}),t(o,{href:"#BreadcrumbItemProps",title:"BreadcrumbItemProps"})]),_:1})]),_:1}),Pn,zn,Sn,Rn,Vn])}const Tn=I(Nn,[["render",Gn]]),Ln={},jn={class:"markdown site-doc-design"},Un=n("h2",{id:"组件定义"},[n("span",null,"组件定义"),n("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),Hn=n("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1),Wn=n("h2",{id:"使用场景"},[n("span",null,"使用场景"),n("a",{onclick:"window.location.hash = '使用场景'",class:"anchor"},"#")],-1),Xn=n("ul",null,[n("li",null,"当某模块的最大层级数＞2时，整个模块使用面包屑组件。 "),n("li",null,"当某模块的最大层级数≤2时，整个模块使用【页头】组件。")],-1),Jn=n("h2",{id:"组件构成"},[n("span",null,"组件构成"),n("a",{onclick:"window.location.hash = '组件构成'",class:"anchor"},"#")],-1),Kn=A("<table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>返回</td><td>点击返回当前页面的上一层级。</td></tr><tr><td>一级页面名称</td><td>本模块的第一个页面名称，可点击跳转此页面。</td></tr><tr><td>中间页面路径</td><td>显示从第一个页面到当前页面的所有中间页面路径（建议最深页面层级不要超过4级），点击可跳转到对应的页面（可结合场景诉求做禁用）。</td></tr><tr><td>当前页面标题</td><td>显示当前页面名称，无需在页面中重复显示页面标题。</td></tr></tbody></table>",1);function On(c,u){const o=f,s=E;return p(),k("section",jn,[t(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[t(o,{href:"#组件定义",title:"组件定义"}),t(o,{href:"#使用场景",title:"使用场景"}),t(o,{href:"#组件构成",title:"组件构成"})]),_:1}),Un,Hn,Wn,Xn,Jn,Kn])}const Qn=I(Ln,[["render",On]]),Yn={name:"DocsComponentsBreadcrumb",components:{DemoBasic:dn,DemoCustom:Cn,DemoDropdown:Mn,ApiDocs:Tn,DesignDocs:Qn},setup(){var i;const c=U(),u=H(),o=v((i=c.query.tab)!=null?i:"demo");W(o,r=>{u.push({query:{tab:r}})});const s=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),l=v(!1);return{checkedDoc:o,docRadioData:s,showDevDemo:l}}},Zn={class:"site-doc-wrapper"},na={class:"markdown site-doc-header"},aa=n("h1",null,[a("Breadcrumb"),n("span",{class:"subtitle"},"面包屑")],-1),ta=n("div",{class:"markdown site-doc-description"},null,-1),sa={class:"site-doc-demo"};function ea(c,u,o,s,l,i){const r=G,d=f,x=E,q=_("DemoBasic"),P=_("DemoCustom"),z=_("DemoDropdown"),S=_("ApiDocs"),R=_("DesignDocs");return p(),k("article",Zn,[n("section",na,[aa,ta,t(r,{value:s.checkedDoc,"onUpdate:value":u[0]||(u[0]=V=>s.checkedDoc=V),dataSource:s.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),B(n("section",sa,[t(x,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[(s.showDevDemo,p(),m(d,{key:0,href:"#components-breadcrumb-basic",title:"基本使用"})),(s.showDevDemo,p(),m(d,{key:1,href:"#components-breadcrumb-custom",title:"自定义分隔符"})),(s.showDevDemo,p(),m(d,{key:2,href:"#components-breadcrumb-dropdown",title:"下拉菜单"}))]),_:1}),t(q),t(P),t(z)],512),[[C,s.checkedDoc==="demo"]]),B(t(S,null,null,512),[[C,s.checkedDoc==="api"]]),B(t(R,null,null,512),[[C,s.checkedDoc==="design"]])])}const la=I(Yn,[["render",ea]]);export{la as default};
