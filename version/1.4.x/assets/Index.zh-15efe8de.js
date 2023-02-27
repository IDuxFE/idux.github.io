import{I as $,a as N}from"./index-af5a73a5.js";import{_ as E,I as G}from"./GlobalCodeBox-e7c7dcff.js";import{v as C,b,ah as i,a8 as c,i as D,aa as p,a9 as m,ac as g,y as e,ab as n,ad as t,ai as h,u as P,aq as V,w as O,am as j,al as M,H as y,I as v}from"./vendor-50817465.js";import{a as B,_,j as z,A as K,r as U,a9 as H}from"./index-7e609792.js";import{I as F}from"./index-610d5491.js";import{I as J}from"./index-bc3b8f07.js";const Q=C({__name:"Basic",setup(s){const l=b(!0);return(a,o)=>{const r=F;return c(),i(r,{checked:l.value,"onUpdate:checked":o[0]||(o[0]=d=>l.value=d)},null,8,["checked"])}}}),W=C({name:"Basic",components:{"raw-demo":Q},setup(){const{lang:s}=D(B);return{lang:s}}}),X={key:0},Y={key:1},Z=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checked"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" checked "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function nn(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxSwitch%20v-model%3Achecked%3D%22checked%22%3E%3C%2FIxSwitch%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checked%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"基本使用":"Basic usage"},{description:p(()=>[s.lang==="zh"?(c(),m("p",X,"最简单的用法。")):g("",!0),s.lang==="en"?(c(),m("p",Y,"The simplest usage.")):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[Z]),_:1},8,["title"])}const tn=_(W,[["render",nn]]),sn={};function an(s,l){const a=F;return c(),i(a,{disabled:""})}const on=_(sn,[["render",an]]),en=C({name:"Disabled",components:{"raw-demo":on},setup(){const{lang:s}=D(B);return{lang:s}}}),cn={key:0},pn={key:1},ln=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function un(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Disabled",code:"%3Ctemplate%3E%0A%20%20%3CIxSwitch%20disabled%3E%3C%2FIxSwitch%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"禁用":"Disabled"},{description:p(()=>[s.lang==="zh"?(c(),m("p",cn,"将开关设为禁用状态。")):g("",!0),s.lang==="en"?(c(),m("p",pn,"Set the switch to disabled.")):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[ln]),_:1},8,["title"])}const rn=_(en,[["render",un]]),dn={};function kn(s,l){const a=F,o=K,r=z;return c(),i(r,null,{default:p(()=>[e(a,{labels:["开","关"]}),e(a,{labels:["1","0"]}),e(a,null,{label:p(({checked:d})=>[e(o,{name:d?"check":"close"},null,8,["name"])]),_:1})]),_:1})}const mn=_(dn,[["render",kn]]),hn=C({name:"Content",components:{"raw-demo":mn},setup(){const{lang:s}=D(B);return{lang:s}}}),_n={key:0},gn={key:1},An=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},":labels"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['开', '关']"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},":labels"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['1', '0']"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ checked }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxIcon")]),t(),n("span",{class:"token attr-name"},":name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checked ? 'check' : 'close'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Cn(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Content",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxSwitch%20%3Alabels%3D%22%5B'%E5%BC%80'%2C%20'%E5%85%B3'%5D%22%3E%3C%2FIxSwitch%3E%0A%20%20%20%20%3CIxSwitch%20%3Alabels%3D%22%5B'1'%2C%20'0'%5D%22%3E%3C%2FIxSwitch%3E%0A%20%20%20%20%3CIxSwitch%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23label%3D%22%7B%20checked%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3CIxIcon%20%3Aname%3D%22checked%20%3F%20'check'%20%3A%20'close'%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxSwitch%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"文案":"Label"},{description:p(()=>[s.lang==="zh"?(c(),m("p",_n,"向开关中加入文案。")):g("",!0),s.lang==="en"?(c(),m("p",gn,"Add label to the switch.")):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[An]),_:1},8,["title"])}const fn=_(hn,[["render",Cn]]),wn={};function En(s,l){const a=F,o=z;return c(),i(o,null,{default:p(()=>[e(a,{size:"sm"}),e(a),e(a,{size:"lg"})]),_:1})}const Dn=_(wn,[["render",En]]),Bn=C({name:"Size",components:{"raw-demo":Dn},setup(){const{lang:s}=D(B);return{lang:s}}}),Fn={key:0},bn=n("code",null,"sm",-1),xn=n("code",null,"md",-1),In=n("code",null,"lg",-1),Sn=n("code",null,"md",-1),yn={key:1},vn=n("code",null,"sm",-1),$n=n("code",null,"md",-1),Nn=n("code",null,"lg",-1),zn=n("code",null,"md",-1),Pn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Vn(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Size",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxSwitch%20size%3D%22sm%22%3E%3C%2FIxSwitch%3E%0A%20%20%20%20%3CIxSwitch%3E%3C%2FIxSwitch%3E%0A%20%20%20%20%3CIxSwitch%20size%3D%22lg%22%3E%3C%2FIxSwitch%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"尺寸":"Size"},{description:p(()=>[s.lang==="zh"?(c(),m("p",Fn,[t("开关共有三种尺寸: "),bn,t("、"),xn,t(" 和 "),In,t("，默认为 "),Sn,t("。")])):g("",!0),s.lang==="en"?(c(),m("p",yn,[t("The switch has three sizes, "),vn,t(", "),$n,t(" and "),Nn,t(", and the default is "),zn,t(".")])):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[Pn]),_:1},8,["title"])}const qn=_(Bn,[["render",Vn]]),Rn={};function Ln(s,l){const a=F,o=z;return c(),i(o,null,{default:p(()=>[e(a,{loading:""}),e(a,{checked:"",loading:""})]),_:1})}const Tn=_(Rn,[["render",Ln]]),Gn=C({name:"Loading",components:{"raw-demo":Tn},setup(){const{lang:s}=D(B);return{lang:s}}}),On={key:0},jn=n("code",null,"loading",-1),Mn={key:1},Kn=n("code",null,"loading",-1),Un=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},"checked"),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSwitch")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxSpace")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Hn(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Loading",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxSwitch%20loading%3E%3C%2FIxSwitch%3E%0A%20%20%20%20%3CIxSwitch%20checked%20loading%3E%3C%2FIxSwitch%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:s.lang==="zh"?"加载状态":"Loading state"},{description:p(()=>[s.lang==="zh"?(c(),m("p",On,[t("处于 "),jn,t(" 状态的开关会置灰不可操作。")])):g("",!0),s.lang==="en"?(c(),m("p",Mn,[t("A switch in "),Kn,t(" becomes unavailable.")])):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[Un]),_:1},8,["title"])}const Jn=_(Gn,[["render",Hn]]),Qn=C({__name:"Confirm",props:{checked:{type:Boolean,default:void 0},control:{type:[String,Number,Object],default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"all"}},setup(s){const l=s,{accessor:a,control:o}=U({valueKey:"checked"});H(o),a.setValue(!0);const r=b(!1),d=b(!1),k=()=>{a.setValue(d.value)},u=f=>{const{mode:A}=l,w=A==="all"||A==="checked"&&f||A==="unchecked"&&!f;w?d.value=f:a.setValue(f),r.value=w},x=()=>{a.markAsBlurred()};return(f,A)=>{const w=F,I=J;return c(),i(I,{visible:r.value,"onUpdate:visible":A[0]||(A[0]=S=>r.value=S),title:d.value?"确定开启？":"确定禁用？",onOk:k},{default:p(()=>[n("span",null,[e(w,{checked:P(a).value,disabled:P(a).disabled,onBlur:x,onChange:u},null,8,["checked","disabled"])])]),_:1},8,["visible","title"])}}}),Wn=C({name:"Confirm",components:{"raw-demo":Qn},setup(){const{lang:s}=D(B);return{lang:s}}}),Xn={key:0},Yn=n("br",null,null,-1),Zn={key:1},nt=n("br",null,null,-1),tt=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxPopconfirm")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tempChecked ? '确定开启？' : '确定禁用？'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IxSwitch")]),t(),n("span",{class:"token attr-name"},":checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accessor.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accessor.disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onBlur"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("IxPopconfirm")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" PropType"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" AbstractControl"),n("span",{class:"token punctuation"},","),t(" useAccessorAndControl "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@idux/cdk/forms'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useFormItemRegister "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@idux/components/form'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" props "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"defineProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(" Boolean"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"control"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t("String"),n("span",{class:"token punctuation"},","),t(" Number"),n("span",{class:"token punctuation"},","),t(" Object"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token keyword"},"as"),t(" PropType"),n("span",{class:"token operator"},"<"),t("string "),n("span",{class:"token operator"},"|"),t(" number "),n("span",{class:"token operator"},"|"),t(" AbstractControl"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(" Boolean"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(" String "),n("span",{class:"token keyword"},"as"),t(" PropType"),n("span",{class:"token operator"},"<"),n("span",{class:"token string"},"'all'"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token string"},"'checked'"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token string"},"'unchecked'"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token string"},"'none'"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" accessor"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"control"),n("span",{class:"token operator"},":"),t(" controlRef "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useAccessorAndControl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"valueKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checked'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token function"},"useFormItemRegister"),n("span",{class:"token punctuation"},"("),t("controlRef"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// 这里为了演示效果，需要手动设置一个初始值"),t(`
`),n("span",{class:"token comment"},"// 如果是二次封装组件，务必删除下面这行代码"),t(`
accessor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" tempChecked "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  accessor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),t("tempChecked"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"currValue"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" mode "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(` props
  `),n("span",{class:"token keyword"},"const"),t(" showPopconfirm "),n("span",{class:"token operator"},"="),t(" mode "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'all'"),t(),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token punctuation"},"("),t("mode "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'checked'"),t(),n("span",{class:"token operator"},"&&"),t(" currValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token punctuation"},"("),t("mode "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'unchecked'"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("currValue"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("showPopconfirm"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    accessor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),t("currValue"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
    tempChecked`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` currValue
  `),n("span",{class:"token punctuation"},"}"),t(`
  visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` showPopconfirm
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onBlur"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  accessor`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"markAsBlurred"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function st(s,l,a,o,r,d){const k=h("raw-demo"),u=E;return c(),i(u,{packageName:"components",componentName:"switch",demoName:"Confirm",code:"%3Ctemplate%3E%0A%20%20%3CIxPopconfirm%20v-model%3Avisible%3D%22visible%22%20%3Atitle%3D%22tempChecked%20%3F%20'%E7%A1%AE%E5%AE%9A%E5%BC%80%E5%90%AF%EF%BC%9F'%20%3A%20'%E7%A1%AE%E5%AE%9A%E7%A6%81%E7%94%A8%EF%BC%9F'%22%20%40ok%3D%22onOk%22%3E%0A%20%20%20%20%3Cspan%3E%0A%20%20%20%20%20%20%3CIxSwitch%20%3Achecked%3D%22accessor.value%22%20%3Adisabled%3D%22accessor.disabled%22%20%40blur%3D%22onBlur%22%20%40change%3D%22onChange%22%20%2F%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2FIxPopconfirm%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20PropType%2C%20ref%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20AbstractControl%2C%20useAccessorAndControl%20%7D%20from%20'%40idux%2Fcdk%2Fforms'%0Aimport%20%7B%20useFormItemRegister%20%7D%20from%20'%40idux%2Fcomponents%2Fform'%0A%0Aconst%20props%20%3D%20defineProps(%7B%0A%20%20checked%3A%20%7B%0A%20%20%20%20type%3A%20Boolean%2C%0A%20%20%20%20default%3A%20undefined%2C%0A%20%20%7D%2C%0A%20%20control%3A%20%7B%0A%20%20%20%20type%3A%20%5BString%2C%20Number%2C%20Object%5D%20as%20PropType%3Cstring%20%7C%20number%20%7C%20AbstractControl%3E%2C%0A%20%20%20%20default%3A%20undefined%2C%0A%20%20%7D%2C%0A%20%20disabled%3A%20%7B%0A%20%20%20%20type%3A%20Boolean%2C%0A%20%20%20%20default%3A%20false%2C%0A%20%20%7D%2C%0A%20%20mode%3A%20%7B%0A%20%20%20%20type%3A%20String%20as%20PropType%3C'all'%20%7C%20'checked'%20%7C%20'unchecked'%20%7C%20'none'%3E%2C%0A%20%20%20%20default%3A%20'all'%2C%0A%20%20%7D%2C%0A%7D)%0A%0Aconst%20%7B%20accessor%2C%20control%3A%20controlRef%20%7D%20%3D%20useAccessorAndControl(%7B%20valueKey%3A%20'checked'%20%7D)%0AuseFormItemRegister(controlRef)%0A%2F%2F%20%E8%BF%99%E9%87%8C%E4%B8%BA%E4%BA%86%E6%BC%94%E7%A4%BA%E6%95%88%E6%9E%9C%EF%BC%8C%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE%E4%B8%80%E4%B8%AA%E5%88%9D%E5%A7%8B%E5%80%BC%0A%2F%2F%20%E5%A6%82%E6%9E%9C%E6%98%AF%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%8A%A1%E5%BF%85%E5%88%A0%E9%99%A4%E4%B8%8B%E9%9D%A2%E8%BF%99%E8%A1%8C%E4%BB%A3%E7%A0%81%0Aaccessor.setValue(true)%0A%0Aconst%20visible%20%3D%20ref(false)%0Aconst%20tempChecked%20%3D%20ref(false)%0A%0Aconst%20onOk%20%3D%20()%20%3D%3E%20%7B%0A%20%20accessor.setValue(tempChecked.value)%0A%7D%0A%0Aconst%20onChange%20%3D%20(currValue%3A%20boolean)%20%3D%3E%20%7B%0A%20%20const%20%7B%20mode%20%7D%20%3D%20props%0A%20%20const%20showPopconfirm%20%3D%20mode%20%3D%3D%3D%20'all'%20%7C%7C%20(mode%20%3D%3D%3D%20'checked'%20%26%26%20currValue)%20%7C%7C%20(mode%20%3D%3D%3D%20'unchecked'%20%26%26%20!currValue)%0A%20%20if%20(!showPopconfirm)%20%7B%0A%20%20%20%20accessor.setValue(currValue)%0A%20%20%7D%20else%20%7B%0A%20%20%20%20tempChecked.value%20%3D%20currValue%0A%20%20%7D%0A%20%20visible.value%20%3D%20showPopconfirm%0A%7D%0A%0Aconst%20onBlur%20%3D%20()%20%3D%3E%20%7B%0A%20%20accessor.markAsBlurred()%0A%7D%0A%3C%2Fscript%3E%0A",title:s.lang==="zh"?"二次确认":"Confirm"},{description:p(()=>[s.lang==="zh"?(c(),m("p",Xn,[t("开启或者关闭时，需要进行二次确认。"),Yn,t("可以作为一个二次封装的组件使用，指定不同的时机弹出确认框。")])):g("",!0),s.lang==="en"?(c(),m("p",Zn,[t("Confirmation is required when turning on or off."),nt,t("It can be used as a component, and a confirmation box will pop up at different timings.")])):g("",!0)]),rawCode:p(()=>[e(k)]),highlightCode:p(()=>[tt]),_:1},8,["title"])}const at=_(Wn,[["render",st]]),ot={},et={class:"markdown site-doc-api"},ct=n("h3",{id:"IxSwitch"},[n("span",null,"IxSwitch"),n("a",{onclick:"window.location.hash = 'IxSwitch'",class:"anchor"},"#")],-1),pt=n("h4",{id:"SwitchProps"},[n("span",null,"SwitchProps"),n("a",{onclick:"window.location.hash = 'SwitchProps'",class:"anchor"},"#")],-1),lt=V('<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>control</code></td><td>控件控制器</td><td><code>string | number | AbstractControl</code></td><td>-</td><td>-</td><td>配合 <code>@idux/cdk/forms</code> 使用, 参考 <a href="/components/form/zh">Form</a></td></tr><tr><td><code>v-model:checked</code></td><td>是否开启</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>autofocus</code></td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁止操作</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>labels</code></td><td>开关的文案</td><td><code>string[] | #label={checked}</code></td><td>-</td><td>-</td><td>当传入一个数组时，第 1 个元素为开启的文案，第 2 个元素为未开启时的文案</td></tr><tr><td><code>loading</code></td><td>是否处于加载中</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>加载时不允许改变当前状态</td></tr><tr><td><code>size</code></td><td>切换器的大小</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>✅</td><td>-</td></tr><tr><td><code>onChange</code></td><td>开关状态发生改变后的回调</td><td><code>(checked: boolean) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>onFocus</code></td><td>获取焦点后触发的回调</td><td><code>(evt: FocusEvent) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td><code>onBlur</code></td><td>失去焦点后触发的回调</td><td><code>(evt: FocusEvent) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>',1),ut=n("h4",{id:"SwitchMethods"},[n("span",null,"SwitchMethods"),n("a",{onclick:"window.location.hash = 'SwitchMethods'",class:"anchor"},"#")],-1),it=V("<table><thead><tr><th>名称</th><th>说明</th><th>参数类型</th><th>备注</th></tr></thead><tbody><tr><td><code>blur()</code></td><td>失去焦点</td><td>-</td><td>-</td></tr><tr><td><code>focus()</code></td><td>获得焦点</td><td>-</td><td>-</td></tr></tbody></table>",1);function rt(s,l){const a=N,o=$;return c(),m("section",et,[e(o,{class:"site-anchor",affix:"",offset:16},{default:p(()=>[e(a,{href:"#IxSwitch",title:"IxSwitch"},{default:p(()=>[e(a,{href:"#SwitchProps",title:"SwitchProps"}),e(a,{href:"#SwitchMethods",title:"SwitchMethods"})]),_:1})]),_:1}),ct,pt,lt,ut,it])}const dt=_(ot,[["render",rt]]),kt={},mt={class:"markdown site-doc-design"},ht=n("h2",{id:"组件定义"},[n("span",null,"组件定义"),n("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),_t=n("p",null,"两种互斥状态间的状态快速切换。常用于“开/关”、“显示/隐藏”、“启用/禁用”，及打开或关闭某特性、模式或功能。",-1),gt=n("h2",{id:"组件状态"},[n("span",null,"组件状态"),n("a",{onclick:"window.location.hash = '组件状态'",class:"anchor"},"#")],-1),At=n("p",null,"Switch一般与标题搭配，表达对某对象的“开/关”、“显示/隐藏”、“启用/禁用”。标题应为名词，不应带有表示当前状态的词语，会让人模糊当前控件是表示操作还是表示状态。",-1),Ct=n("p",null,"Switch开关用于控制界面某部分内容，则切换后应立即引起该内容的变化，例如变成显示/隐藏或可点/禁用。",-1);function ft(s,l){const a=N,o=$;return c(),m("section",mt,[e(o,{class:"site-anchor",affix:"",offset:16},{default:p(()=>[e(a,{href:"#组件定义",title:"组件定义"}),e(a,{href:"#组件状态",title:"组件状态"})]),_:1}),ht,_t,gt,At,Ct])}const wt=_(kt,[["render",ft]]),Et={name:"DocsComponentsSwitch",components:{DemoBasic:tn,DemoDisabled:rn,DemoContent:fn,DemoSize:qn,DemoLoading:Jn,DemoConfirm:at,ApiDocs:dt,DesignDocs:wt},setup(){const s=j(),l=M(),a=b(s.query.tab??"demo");O(a,d=>{l.push({query:{tab:d}})});const o=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),r=b(!1);return{checkedDoc:a,docRadioData:o,showDevDemo:r}}},Dt={class:"site-doc-wrapper"},Bt={class:"markdown site-doc-header"},Ft=n("h1",null,[t("Switch"),n("span",{class:"subtitle"},"开关")],-1),bt=n("div",{class:"markdown site-doc-description"},null,-1),xt={class:"site-doc-demo"};function It(s,l,a,o,r,d){const k=G,u=N,x=$,f=h("DemoBasic"),A=h("DemoDisabled"),w=h("DemoContent"),I=h("DemoSize"),S=h("DemoLoading"),q=h("DemoConfirm"),R=h("ApiDocs"),L=h("DesignDocs");return c(),m("article",Dt,[n("section",Bt,[Ft,bt,e(k,{value:o.checkedDoc,"onUpdate:value":l[0]||(l[0]=T=>o.checkedDoc=T),dataSource:o.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),y(n("section",xt,[e(x,{class:"site-anchor",affix:"",offset:16},{default:p(()=>[(o.showDevDemo,c(),i(u,{key:0,href:"#components-switch-basic",title:"基本使用"})),(o.showDevDemo,c(),i(u,{key:1,href:"#components-switch-disabled",title:"禁用"})),(o.showDevDemo,c(),i(u,{key:2,href:"#components-switch-content",title:"文案"})),(o.showDevDemo,c(),i(u,{key:3,href:"#components-switch-size",title:"尺寸"})),(o.showDevDemo,c(),i(u,{key:4,href:"#components-switch-loading",title:"加载状态"})),(o.showDevDemo,c(),i(u,{key:5,href:"#components-switch-confirm",title:"二次确认"}))]),_:1}),e(f),e(A),e(w),e(I),e(S),e(q)],512),[[v,o.checkedDoc==="demo"]]),y(e(R,null,null,512),[[v,o.checkedDoc==="api"]]),y(e(L,null,null,512),[[v,o.checkedDoc==="design"]])])}const Pt=_(Et,[["render",It]]);export{Pt as default};
