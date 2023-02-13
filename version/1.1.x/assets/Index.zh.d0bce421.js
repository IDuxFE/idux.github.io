import{I as E,a as f}from"./index.88b15bfa.js";import{_ as A,I as G}from"./GlobalCodeBox.5c092ce5.js";import{v as g,e as T,p as L,a0 as j,y as t,i as b,ah as m,aa as e,a8 as p,ad as a,ab as n,ai as _,a9 as k,ac as h,F as y,aq as D,b as v,w as J,am as K,al as U,J as B,K as C}from"./vendor.994f7e39.js";import{u as H,_ as I,w as M,a as w,am as O,an as Q,ao as W,ap as X}from"./index.2ba5520c.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const N=Symbol("breadcrumbToken");/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Y={separator:{type:String,default:"/"}},Z={separator:String},nn=g({name:"IxBreadcrumb",props:Y,setup(c,{slots:u}){const o=H("common"),s=T(()=>`${o.prefixCls}-breadcrumb`);return L(N,{mergedPrefixCls:s,separatorRef:j(c,"separator")}),()=>{var l;return t("nav",{class:s.value,"aria-label":"Breadcrumb"},[t("ol",null,[(l=u.default)==null?void 0:l.call(u)])])}}}),an=g({name:"IxBreadcrumbItem",props:Z,setup(c,{slots:u}){const o=b(N,null);if(!o)return()=>null;const{mergedPrefixCls:s,separatorRef:l}=o;return()=>{var i,r;return t("li",{class:`${s.value}-item`},[t("span",{class:`${s.value}-item-link`},[(i=u.default)==null?void 0:i.call(u)]),t("span",{class:`${s.value}-item-separator`,"aria-hidden":"true"},[u.separator?u.separator():(r=c.separator)!=null?r:l.value])])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=nn,$=an,tn={},sn={href:"#"};function en(c,u){const o=M,s=$,l=F;return p(),m(l,null,{default:e(()=>[t(s,null,{default:e(()=>[t(o,{name:"transmit"}),a(" \u5DF4\u9ECE")]),_:1}),t(s,null,{default:e(()=>[t(o,{name:"cloud"}),a(" \u5317\u4EAC")]),_:1}),t(s,null,{default:e(()=>[n("a",sn,[t(o,{name:"link"}),a(" \u70ED\u60C5\u7684\u5C9B\u5C7F")])]),_:1}),t(s,null,{default:e(()=>[t(o,{name:"tag"}),a(" \u571F\u8033\u5176")]),_:1})]),_:1})}const on=I(tn,[["render",en]]),cn=g({name:"Basic",components:{"raw-demo":on},setup(){const{lang:c}=b(w);return{lang:c}}}),un={key:0},pn={key:1},ln=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("transmit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" \u5DF4\u9ECE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" \u5317\u4EAC"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("link"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" \u70ED\u60C5\u7684\u5C9B\u5C7F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxIcon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tag"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(" \u571F\u8033\u5176"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function rn(c,u,o,s,l,i){const r=_("raw-demo"),d=A;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22transmit%22%20%2F%3E%20%E5%B7%B4%E9%BB%8E%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22cloud%22%20%2F%3E%20%E5%8C%97%E4%BA%AC%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22%23%22%3E%3CIxIcon%20name%3D%22link%22%20%2F%3E%20%E7%83%AD%E6%83%85%E7%9A%84%E5%B2%9B%E5%B1%BF%3C%2Fa%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%3CIxIcon%20name%3D%22tag%22%20%2F%3E%20%E5%9C%9F%E8%80%B3%E5%85%B6%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:e(()=>[c.lang==="zh"?(p(),k("p",un,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002")):h("",!0),c.lang==="en"?(p(),k("p",pn,"The simplest usage.")):h("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[ln]),_:1},8,["title"])}const dn=I(cn,[["render",rn]]),mn={},kn=n("a",{href:"#"},"\u65C5\u9014",-1);function In(c,u){const o=$,s=F;return p(),m(s,{separator:">"},{default:e(()=>[t(o,null,{default:e(()=>[a("\u9AD8\u67B6\u6865")]),_:1}),t(o,{separator:"~"},{default:e(()=>[a("\u8DEF\u53E3")]),_:1}),t(o,null,{separator:e(()=>[a("\u2192")]),default:e(()=>[kn]),_:1}),t(o,null,{default:e(()=>[a("\u8DEF\u706F")]),_:1})]),_:1})}const _n=I(mn,[["render",In]]),hn=g({name:"Custom",components:{"raw-demo":_n},setup(){const{lang:c}=b(w);return{lang:c}}}),gn={key:0},bn=n("code",null,"separator",-1),xn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(">"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a("\u9AD8\u67B6\u6865"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("~"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u8DEF\u53E3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),a("\u2192"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u65C5\u9014"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a("\u8DEF\u706F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumbItem")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("IxBreadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function Bn(c,u,o,s,l,i){const r=_("raw-demo"),d=A;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Custom",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%20separator%3D%22%3E%22%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%E9%AB%98%E6%9E%B6%E6%A1%A5%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%20separator%3D%22~%22%3E%E8%B7%AF%E5%8F%A3%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23separator%3E%E2%86%92%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22%23%22%3E%E6%97%85%E9%80%94%3C%2Fa%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%E8%B7%AF%E7%81%AF%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26":"Customized Separator"},{description:e(()=>[c.lang==="zh"?(p(),k("p",gn,[a("\u4F7F\u7528 "),bn,a(" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002")])):h("",!0),c.lang==="en"?(p(),k(y,{key:1},[],64)):h("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[xn]),_:1},8,["title"])}const Cn=I(hn,[["render",Bn]]),En={},fn={class:"ix-dropdown-trigger"};function An(c,u){const o=$,s=M,l=O,i=Q,r=W,d=X,x=F;return p(),m(x,null,{default:e(()=>[t(o,null,{default:e(()=>[a("Somewhere")]),_:1}),t(o,null,{default:e(()=>[t(d,null,{overlay:e(()=>[t(r,null,{default:e(()=>[t(l,{key:"one"},{default:e(()=>[a("skies are blue")]),_:1}),t(l,{key:"two"},{default:e(()=>[a("wish upon a star")]),_:1}),t(i),t(l,{key:"three",disabled:""},{default:e(()=>[a("troubles melt like lemon drops")]),_:1})]),_:1})]),default:e(()=>[n("a",fn,[a("over the rainbow "),t(s,{name:"down"})])]),_:1})]),_:1})]),_:1})}const Dn=I(En,[["render",An]]),wn=g({name:"Dropdown",components:{"raw-demo":Dn},setup(){const{lang:c}=b(w);return{lang:c}}}),Fn={key:0},$n=n("a",{href:"/components/dropdown/zh"},"\u4E0B\u62C9\u83DC\u5355",-1),vn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1);function yn(c,u,o,s,l,i){const r=_("raw-demo"),d=A;return p(),m(d,{packageName:"components",componentName:"breadcrumb",demoName:"Dropdown",code:"%3Ctemplate%3E%0A%20%20%3CIxBreadcrumb%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3ESomewhere%3C%2FIxBreadcrumbItem%3E%0A%20%20%20%20%3CIxBreadcrumbItem%3E%0A%20%20%20%20%20%20%3CIxDropdown%3E%0A%20%20%20%20%20%20%20%20%3Ca%20class%3D%22ix-dropdown-trigger%22%3Eover%20the%20rainbow%20%3CIxIcon%20name%3D%22down%22%3E%3C%2FIxIcon%3E%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23overlay%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIxMenu%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22one%22%3Eskies%20are%20blue%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22two%22%3Ewish%20upon%20a%20star%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIxMenuItem%20key%3D%22three%22%20disabled%3Etroubles%20melt%20like%20lemon%20drops%3C%2FIxMenuItem%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FIxMenu%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2FIxDropdown%3E%0A%20%20%20%20%3C%2FIxBreadcrumbItem%3E%0A%20%20%3C%2FIxBreadcrumb%3E%0A%3C%2Ftemplate%3E%0A",title:c.lang==="zh"?"\u4E0B\u62C9\u83DC\u5355":"Dropdown"},{description:e(()=>[c.lang==="zh"?(p(),k("p",Fn,[a("\u548C "),$n,a(" \u4E00\u8D77\u4F7F\u7528\u3002")])):h("",!0),c.lang==="en"?(p(),k(y,{key:1},[],64)):h("",!0)]),rawCode:e(()=>[t(r)]),highlightCode:e(()=>[vn]),_:1},8,["title"])}const Mn=I(wn,[["render",yn]]),Nn={},qn={class:"markdown site-doc-api"},Pn=n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")],-1),Sn=n("h3",{id:"IxBreadcrumb"},[n("span",null,"IxBreadcrumb"),n("a",{onclick:"window.location.hash = 'IxBreadcrumb'",class:"anchor"},"#")],-1),zn=n("h4",{id:"BreadcrumbProps"},[n("span",null,"BreadcrumbProps"),n("a",{onclick:"window.location.hash = 'BreadcrumbProps'",class:"anchor"},"#")],-1),Rn=D("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>separator</code></td><td>\u5206\u9694\u7B26</td><td><code>string</code></td><td><code>/</code></td><td>-</td><td>-</td></tr></tbody></table>",1),Vn=n("h4",{id:"BreadcrumbItemProps"},[n("span",null,"BreadcrumbItemProps"),n("a",{onclick:"window.location.hash = 'BreadcrumbItemProps'",class:"anchor"},"#")],-1),Gn=D("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>separator</code></td><td>\u5206\u9694\u7B26</td><td><code>string | #separator</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>",1);function Tn(c,u){const o=f,s=E;return p(),k("section",qn,[t(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[t(o,{href:"#api",title:"API"},{default:e(()=>[t(o,{href:"#ixbreadcrumb",title:"IxBreadcrumb"})]),_:1})]),_:1}),Pn,Sn,zn,Rn,Vn,Gn])}const Ln=I(Nn,[["render",Tn]]),jn={},Jn={class:"markdown site-doc-design"},Kn=n("h2",{id:"\u7EC4\u4EF6\u5B9A\u4E49"},[n("span",null,"\u7EC4\u4EF6\u5B9A\u4E49"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u5B9A\u4E49'",class:"anchor"},"#")],-1),Un=n("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002",-1),Hn=n("h2",{id:"\u4F7F\u7528\u573A\u666F"},[n("span",null,"\u4F7F\u7528\u573A\u666F"),n("a",{onclick:"window.location.hash = '\u4F7F\u7528\u573A\u666F'",class:"anchor"},"#")],-1),On=n("ul",null,[n("li",null,"\u5F53\u67D0\u6A21\u5757\u7684\u6700\u5927\u5C42\u7EA7\u6570\uFF1E2\u65F6\uFF0C\u6574\u4E2A\u6A21\u5757\u4F7F\u7528\u9762\u5305\u5C51\u7EC4\u4EF6\u3002 "),n("li",null,"\u5F53\u67D0\u6A21\u5757\u7684\u6700\u5927\u5C42\u7EA7\u6570\u22642\u65F6\uFF0C\u6574\u4E2A\u6A21\u5757\u4F7F\u7528\u3010\u9875\u5934\u3011\u7EC4\u4EF6\u3002")],-1),Qn=n("h2",{id:"\u7EC4\u4EF6\u6784\u6210"},[n("span",null,"\u7EC4\u4EF6\u6784\u6210"),n("a",{onclick:"window.location.hash = '\u7EC4\u4EF6\u6784\u6210'",class:"anchor"},"#")],-1),Wn=D("<table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u8FD4\u56DE</td><td>\u70B9\u51FB\u8FD4\u56DE\u5F53\u524D\u9875\u9762\u7684\u4E0A\u4E00\u5C42\u7EA7\u3002</td></tr><tr><td>\u4E00\u7EA7\u9875\u9762\u540D\u79F0</td><td>\u672C\u6A21\u5757\u7684\u7B2C\u4E00\u4E2A\u9875\u9762\u540D\u79F0\uFF0C\u53EF\u70B9\u51FB\u8DF3\u8F6C\u6B64\u9875\u9762\u3002</td></tr><tr><td>\u4E2D\u95F4\u9875\u9762\u8DEF\u5F84</td><td>\u663E\u793A\u4ECE\u7B2C\u4E00\u4E2A\u9875\u9762\u5230\u5F53\u524D\u9875\u9762\u7684\u6240\u6709\u4E2D\u95F4\u9875\u9762\u8DEF\u5F84\uFF08\u5EFA\u8BAE\u6700\u6DF1\u9875\u9762\u5C42\u7EA7\u4E0D\u8981\u8D85\u8FC74\u7EA7\uFF09\uFF0C\u70B9\u51FB\u53EF\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u9875\u9762\uFF08\u53EF\u7ED3\u5408\u573A\u666F\u8BC9\u6C42\u505A\u7981\u7528\uFF09\u3002</td></tr><tr><td>\u5F53\u524D\u9875\u9762\u6807\u9898</td><td>\u663E\u793A\u5F53\u524D\u9875\u9762\u540D\u79F0\uFF0C\u65E0\u9700\u5728\u9875\u9762\u4E2D\u91CD\u590D\u663E\u793A\u9875\u9762\u6807\u9898\u3002</td></tr></tbody></table>",1);function Xn(c,u){const o=f,s=E;return p(),k("section",Jn,[t(s,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[t(o,{href:"#\u7EC4\u4EF6\u5B9A\u4E49",title:"\u7EC4\u4EF6\u5B9A\u4E49"}),t(o,{href:"#\u4F7F\u7528\u573A\u666F",title:"\u4F7F\u7528\u573A\u666F"}),t(o,{href:"#\u7EC4\u4EF6\u6784\u6210",title:"\u7EC4\u4EF6\u6784\u6210"})]),_:1}),Kn,Un,Hn,On,Qn,Wn])}const Yn=I(jn,[["render",Xn]]),Zn={name:"DocsComponentsBreadcrumb",components:{DemoBasic:dn,DemoCustom:Cn,DemoDropdown:Mn,ApiDocs:Ln,DesignDocs:Yn},setup(){var i;const c=K(),u=U(),o=v((i=c.query.tab)!=null?i:"demo");J(o,r=>{u.push({query:{tab:r}})});const s=[{label:"\u793A\u4F8B",value:"demo"},{label:"API",value:"api"},,{label:"\u6307\u5357",value:"design"},,].filter(Boolean),l=v(!1);return{checkedDoc:o,docRadioData:s,showDevDemo:l}}},na={class:"site-doc-wrapper"},aa={class:"markdown site-doc-header"},ta=n("h1",null,[a("Breadcrumb"),n("span",{class:"subtitle"},"\u9762\u5305\u5C51")],-1),sa=n("div",{class:"markdown site-doc-description"},null,-1),ea={class:"site-doc-demo"};function oa(c,u,o,s,l,i){const r=G,d=f,x=E,q=_("DemoBasic"),P=_("DemoCustom"),S=_("DemoDropdown"),z=_("ApiDocs"),R=_("DesignDocs");return p(),k("article",na,[n("section",aa,[ta,sa,t(r,{value:s.checkedDoc,"onUpdate:value":u[0]||(u[0]=V=>s.checkedDoc=V),dataSource:s.docRadioData,size:"lg",buttoned:""},null,8,["value","dataSource"])]),B(n("section",ea,[t(x,{class:"site-anchor",affix:"",offset:16},{default:e(()=>[(s.showDevDemo,p(),m(d,{key:0,href:"#components-breadcrumb-basic",title:"\u57FA\u672C\u4F7F\u7528"})),(s.showDevDemo,p(),m(d,{key:1,href:"#components-breadcrumb-custom",title:"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26"})),(s.showDevDemo,p(),m(d,{key:2,href:"#components-breadcrumb-dropdown",title:"\u4E0B\u62C9\u83DC\u5355"}))]),_:1}),t(q),t(P),t(S)],512),[[C,s.checkedDoc==="demo"]]),B(t(z,null,null,512),[[C,s.checkedDoc==="api"]]),B(t(R,null,null,512),[[C,s.checkedDoc==="design"]])])}const ra=I(Zn,[["render",oa]]);export{ra as default};