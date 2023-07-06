import{I as W,a as X}from"./index-f938fb0e.js";import{_ as N,I as dt}from"./GlobalCodeBox-762835f0.js";import{x as A,r as I,c as R,z as o,A as kt,aa as s,aj as m,l as z,ak as v,ac as r,ab as g,ae as h,ad as t,af as n,ag as mt,as as _t,ao as gt,an as ft,w as vt,H as L,I as K}from"./vendor-5e807b09.js";import{aa as ht,L as nt,ad as At,a7 as Ct,r as Dt,a9 as xt,R as at,A as wt,m as O,a as S,_ as x,k as et}from"./index-9409c3e1.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const bt={control:{type:[String,Number,Object,Array],default:void 0},value:[Number,String],allowHalf:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},count:[Number,String],disabled:{type:Boolean,default:!1},icon:String,tooltips:{type:Array,default:()=>[]},size:String,color:{type:String,default:void 0},"onUpdate:value":[Function,Array],onChange:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onKeyDown:[Function,Array]},$t={count:{type:Number,required:!0},disabled:{type:Boolean,required:!0},focused:{type:Boolean,required:!0},index:{type:Number,required:!0},prefixCls:{type:String,required:!0},tooltip:String,value:{type:Number,required:!0},color:String,onClick:{type:Function,required:!0},onMouseMove:{type:Function,required:!0}},Ft=A({props:$t,setup(a,{slots:u}){const l=I(),e=p=>a.onClick(p,l.value,a.index),d=p=>{p.code==="Enter"&&e(p)},k=p=>a.onMouseMove(p,l.value,a.index),i=R(()=>{const{focused:p,index:w,prefixCls:C,value:D}=a,f=w+1,$=D+.5>=f&&D<f,E=!$&&f<=D,y=!E&&!$;return{[C]:!0,[`${C}-focused`]:p&&($||D===f||w===0&&D===0),[`${C}-full`]:E,[`${C}-half`]:$,[`${C}-zero`]:y}});return()=>{const{count:p,disabled:w,index:C,prefixCls:D,tooltip:f,value:$,color:E}=a,y=u.default(),B=o("li",{ref:l,class:i.value,style:`color: ${E}`},[o("span",{"aria-checked":$>C,"aria-posinset":C+1,"aria-setsize":p,role:"radio",tabindex:w?-1:0,onClick:w?void 0:e,onKeydown:w?void 0:d,onMousemove:w?void 0:k},[o("span",{class:`${D}-first`},[y]),o("span",{class:`${D}-second`},[y])])]);return f?o(ht,{title:f},{default:()=>[B]}):B}}}),It=A({name:"IxRate",props:bt,setup(a,{attrs:u,expose:l,slots:e}){const d=nt("common"),k=R(()=>`${d.prefixCls}-rate`),i=nt("rate"),p=At(a,i),{elementRef:w,focus:C,blur:D}=Ct();l({focus:C,blur:D});const{accessor:f,control:$}=Dt();xt($);const E=R(()=>{var c;return at((c=a.count)!=null?c:i.count)}),y=R(()=>{var c;return(c=a.icon)!=null?c:i.icon}),B=R(()=>{var c;return(c=a.allowHalf)!=null?c:i.allowHalf}),P=R(()=>{var c;return(c=a.clearable)!=null?c:i.clearable}),M=R(()=>f.disabled),V=I(!1),T=I(),j=c=>{f.setValue(c),O(a.onChange,c)},Y=(c,_,F)=>{let b=F+1;return B.value&&c.offsetX<_.clientWidth/2&&(b-=.5),b},st=(c,_,F)=>{const b=f.value,G=Y(c,_,F),U=P.value&&b===G;j(U?0:G)},ot=(c,_,F)=>{const b=Y(c,_,F);T.value=b},ct=c=>{V.value=!0,O(a.onFocus,c)},lt=c=>{V.value=!1,f.markAsBlurred(),O(a.onBlur,c)},ut=c=>{const _=f.value,F=E.value,b=B.value;switch(c.code){case"ArrowRight":case"ArrowUp":_<F&&(j(_+(b?.5:1)),c.preventDefault());break;case"ArrowLeft":case"ArrowDown":_>0&&(j(_-(b?.5:1)),c.preventDefault());break}},pt=()=>{T.value=void 0},rt=R(()=>{const c=k.value;return kt({[c]:!0,[`${c}-disabled`]:M.value,[`${c}-focused`]:V.value,[`${c}-${p.value}`]:!0})});return()=>{var J;const c=E.value,_=M.value,F=V.value,b=at((J=T.value)!=null?J:f.value),G=`${k.value}-item`,{tooltips:U,color:it}=a,Z=[];for(let H=0;H<c;H++)Z.push(o(Ft,{key:H,count:c,disabled:_,focused:F,index:H,prefixCls:G,tooltip:U[H],color:it,value:b,onClick:st,onMouseMove:ot},{default:()=>{var Q,tt;return[(tt=(Q=e.icon)==null?void 0:Q.call(e,{disabled:_,focused:F,index:H}))!=null?tt:o(wt,{name:y.value},null)]}}));return o("ul",{ref:w,class:rt.value,tabindex:_?-1:u.tabindex,onFocus:_?void 0:ct,onBlur:_?void 0:lt,onKeydown:_?void 0:ut,onMouseleave:_?void 0:pt,role:"radiogroup"},[Z])}}});/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const q=It,Et=A({__name:"Basic",setup(a){const u=I(3);return(l,e)=>{const d=q;return s(),m(d,{value:u.value,"onUpdate:value":e[0]||(e[0]=k=>u.value=k)},null,8,["value"])}}}),yt=A({name:"Basic",components:{"raw-demo":Et},setup(){const{lang:a}=z(S);return{lang:a}}}),Rt={key:0},Bt={key:1},Nt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function zt(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(3)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"基本使用":"Basic usage"},{description:r(()=>[a.lang==="zh"?(s(),g("p",Rt,"最简单的用法。")):h("",!0),a.lang==="en"?(s(),g("p",Bt,"The simplest usage.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[Nt]),_:1},8,["title"])}const St=x(yt,[["render",zt]]),qt=A({__name:"AllowHalf",setup(a){const u=I(3.5);return(l,e)=>{const d=q;return s(),m(d,{value:u.value,"onUpdate:value":e[0]||(e[0]=k=>u.value=k),allowHalf:""},null,8,["value"])}}}),Vt=A({name:"AllowHalf",components:{"raw-demo":qt},setup(){const{lang:a}=z(S);return{lang:a}}}),Ht={key:0},Gt={key:1},Mt=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"allowHalf"),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3.5"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Pt(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"AllowHalf",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20allowHalf%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(3.5)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"支持半选":"Support half star"},{description:r(()=>[a.lang==="zh"?(s(),g("p",Ht,"支持选中半星。")):h("",!0),a.lang==="en"?(s(),g("p",Gt,"Support select half star.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[Mt]),_:1},8,["title"])}const Tt=x(Vt,[["render",Pt]]),jt=A({__name:"Tooltips",setup(a){const u=I(3),l=["Poor","Fair","Average","Good","Excellent"];return(e,d)=>{const k=q;return s(),m(k,{value:u.value,"onUpdate:value":d[0]||(d[0]=i=>u.value=i),tooltips:l},null,8,["value"])}}}),Ut=A({name:"Tooltips",components:{"raw-demo":jt},setup(){const{lang:a}=z(S);return{lang:a}}}),Lt={key:0},Kt={key:1},Ot=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":tooltips"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tooltips"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`

`),t("span",{class:"token keyword"},"const"),n(" tooltips "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'Poor'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Fair'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Average'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Good'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Excellent'"),t("span",{class:"token punctuation"},"]"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Wt(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Tooltips",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20%3Atooltips%3D%22tooltips%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(3)%0A%0Aconst%20tooltips%20%3D%20%5B'Poor'%2C%20'Fair'%2C%20'Average'%2C%20'Good'%2C%20'Excellent'%5D%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"文案提示":"Show tooltip"},{description:r(()=>[a.lang==="zh"?(s(),g("p",Lt,"显示文案提示。")):h("",!0),a.lang==="en"?(s(),g("p",Kt,"Add tooltip in rate.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[Ot]),_:1},8,["title"])}const Xt=x(Ut,[["render",Wt]]),Yt=A({__name:"Disabled",setup(a){const u=I(3);return(l,e)=>{const d=q;return s(),m(d,{value:u.value,"onUpdate:value":e[0]||(e[0]=k=>u.value=k),disabled:""},null,8,["value"])}}}),Zt=A({name:"Disabled",components:{"raw-demo":Yt},setup(){const{lang:a}=z(S);return{lang:a}}}),Jt={key:0},Qt={key:1},tn=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function nn(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Disabled",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20disabled%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(3)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"禁用状态":"Disabled"},{description:r(()=>[a.lang==="zh"?(s(),g("p",Jt,"禁用状态，无法进行鼠标交互。")):h("",!0),a.lang==="en"?(s(),g("p",Qt,"Disabled state, can't use mouse to interact.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[tn]),_:1},8,["title"])}const an=x(Zt,[["render",nn]]),en={};function sn(a,u){const l=q,e=et;return s(),m(e,{vertical:""},{default:r(()=>[o(l,{size:"sm"}),o(l),o(l,{size:"lg"})]),_:1})}const on=x(en,[["render",sn]]),cn=A({name:"Size",components:{"raw-demo":on},setup(){const{lang:a}=z(S);return{lang:a}}}),ln={key:0},un=t("code",null,"sm",-1),pn=t("code",null,"md",-1),rn=t("code",null,"lg",-1),dn=t("code",null,"md",-1),kn={key:1},mn=t("code",null,"sm",-1),_n=t("code",null,"md",-1),gn=t("code",null,"lg",-1),fn=t("code",null,"md",-1),vn=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSpace")]),n(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSpace")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function hn(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Size",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxRate%20size%3D%22sm%22%3E%3C%2FIxRate%3E%0A%20%20%20%20%3CIxRate%3E%3C%2FIxRate%3E%0A%20%20%20%20%3CIxRate%20size%3D%22lg%22%3E%3C%2FIxRate%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"尺寸":"Size"},{description:r(()=>[a.lang==="zh"?(s(),g("p",ln,[n("开关共有三种尺寸: "),un,n("、"),pn,n(" 和 "),rn,n("，默认为 "),dn,n("。")])):h("",!0),a.lang==="en"?(s(),g("p",kn,[n("The rate has three sizes, "),mn,n(", "),_n,n(" and "),gn,n(", and the default is "),fn,n(".")])):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[vn]),_:1},8,["title"])}const An=x(cn,[["render",hn]]),Cn=A({__name:"Clearable",setup(a){const u=I(3);return(l,e)=>{const d=q;return s(),m(d,{value:u.value,"onUpdate:value":e[0]||(e[0]=k=>u.value=k),clearable:""},null,8,["value"])}}}),Dn=A({name:"Clearable",components:{"raw-demo":Cn},setup(){const{lang:a}=z(S);return{lang:a}}}),xn={key:0},wn={key:1},bn=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"clearable"),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function $n(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Clearable",code:"%3Ctemplate%3E%0A%20%20%3CIxRate%20v-model%3Avalue%3D%22value%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(3)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"可清除的":"Clearable"},{description:r(()=>[a.lang==="zh"?(s(),g("p",xn,"支持清除，当再次被点击时。")):h("",!0),a.lang==="en"?(s(),g("p",wn,"Support set allow to clear star when click again.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[bn]),_:1},8,["title"])}const Fn=x(Dn,[["render",$n]]),In={};function En(a,u){const l=q,e=et;return s(),m(e,{vertical:""},{default:r(()=>[o(l,{value:3,icon:"star"}),o(l,{value:3},{icon:r(()=>[n("A")]),_:1}),o(l,{value:3},{icon:r(({index:d})=>[n(mt(d+1),1)]),_:1})]),_:1})}const yn=x(In,[["render",En]]),Rn=A({name:"Icon",components:{"raw-demo":yn},setup(){const{lang:a}=z(S);return{lang:a}}}),Bn={key:0},Nn={key:1},zn=t("div",null,[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxSpace")]),n(),t("span",{class:"token attr-name"},"vertical"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("star"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#icon"),t("span",{class:"token punctuation"},">")]),n("A"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IxRate")]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ index }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ index + 1 }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxRate")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("IxSpace")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function Sn(a,u,l,e,d,k){const i=v("raw-demo"),p=N;return s(),m(p,{packageName:"components",componentName:"rate",demoName:"Icon",code:"%3Ctemplate%3E%0A%20%20%3CIxSpace%20vertical%3E%0A%20%20%20%20%3CIxRate%20%3Avalue%3D%223%22%20icon%3D%22star%22%20%2F%3E%0A%20%20%20%20%3CIxRate%20%3Avalue%3D%223%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23icon%3EA%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxRate%3E%0A%20%20%20%20%3CIxRate%20%3Avalue%3D%223%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23icon%3D%22%7B%20index%20%7D%22%3E%7B%7B%20index%20%2B%201%20%7D%7D%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FIxRate%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A",title:a.lang==="zh"?"自定义图标":"Customize icon"},{description:r(()=>[a.lang==="zh"?(s(),g("p",Bn,"可以更改默认的图标，也可以使用字母或数字。")):h("",!0),a.lang==="en"?(s(),g("p",Nn,"You can change the default icon or use alphabet, digit.")):h("",!0)]),rawCode:r(()=>[o(i)]),highlightCode:r(()=>[zn]),_:1},8,["title"])}const qn=x(Rn,[["render",Sn]]),Vn={},Hn={class:"markdown site-doc-api"},Gn=t("h3",{id:"IxRate"},[t("span",null,"IxRate"),t("a",{onclick:"window.location.hash = 'IxRate'",class:"anchor"},"#")],-1),Mn=t("h4",{id:"RateProps"},[t("span",null,"RateProps"),t("a",{onclick:"window.location.hash = 'RateProps'",class:"anchor"},"#")],-1),Pn=_t('<table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>全局配置</th><th>备注</th></tr></thead><tbody><tr><td><code>v-model:value</code></td><td>高亮的数目（分数）</td><td><code>number</code></td><td>-</td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>control</code></td><td>控件控制器</td><td><code>string | number | (string | number)[] | AbstractControl</code></td><td>-</td><td>-</td><td>配合 <code>@idux/cdk/forms</code> 使用, 参考 <a href="/components/form/zh">Form</a></td></tr><tr><td><code>allowHalf</code></td><td>支持半分（选）</td><td><code>boolean</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>clearable</code></td><td>二次点击元素后清除选择</td><td><code>boolean</code></td><td><code>false</code></td><td>✅</td><td>-</td></tr><tr><td><code>count</code></td><td>图标数目</td><td><code>number</code></td><td><code>5</code></td><td>✅</td><td>-</td></tr><tr><td><code>disabled</code></td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>使用 <code>control</code> 时，此配置无效</td></tr><tr><td><code>icon</code></td><td>自定义图标</td><td><code>string | #icon={disabled, focused, index}</code></td><td><code>&#39;star-filled&#39;</code></td><td>✅</td><td>-</td></tr><tr><td><code>size</code></td><td>设置大小</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>✅</td><td>-</td></tr><tr><td><code>color</code></td><td>高亮图标的颜色</td><td><code>string</code></td><td>undefined</td><td>-</td><td>-</td></tr><tr><td><code>tooltips</code></td><td>悬浮提示信息数组</td><td><code>string[]</code></td><td><code>[]</code></td><td>-</td><td>-</td></tr><tr><td><code>onChange</code></td><td>值发生改变时的回调</td><td><code>(value: number) =&gt; void</code></td><td>-</td><td>-</td><td>-</td></tr></tbody></table>',1);function Tn(a,u){const l=X,e=W;return s(),g("section",Hn,[o(e,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[o(l,{href:"#IxRate",title:"IxRate"},{default:r(()=>[o(l,{href:"#RateProps",title:"RateProps"})]),_:1})]),_:1}),Gn,Mn,Pn])}const jn=x(Vn,[["render",Tn]]),Un={},Ln={class:"markdown site-doc-design"},Kn=t("h2",{id:"组件定义"},[t("span",null,"组件定义"),t("a",{onclick:"window.location.hash = '组件定义'",class:"anchor"},"#")],-1),On=t("p",null,"对某个内容进行评分或展示评分",-1);function Wn(a,u){const l=X,e=W;return s(),g("section",Ln,[o(e,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[o(l,{href:"#组件定义",title:"组件定义"})]),_:1}),Kn,On])}const Xn=x(Un,[["render",Wn]]),Yn={name:"DocsComponentsRate",components:{DemoBasic:St,DemoAllowHalf:Tt,DemoTooltips:Xt,DemoDisabled:an,DemoSize:An,DemoClearable:Fn,DemoIcon:qn,ApiDocs:jn,DesignDocs:Xn},setup(){var k;const a=gt(),u=ft(),l=I((k=a.query.tab)!=null?k:"demo");vt(l,i=>{u.push({query:{tab:i}})});const e=[{label:"示例",value:"demo"},{label:"API",value:"api"},,{label:"指南",value:"design"},,].filter(Boolean),d=I(!1);return{checkedDoc:l,docRadioData:e,showDevDemo:d}}},Zn={class:"site-doc-wrapper"},Jn={class:"markdown site-doc-header"},Qn=t("h1",null,[n("Rate"),t("span",{class:"subtitle"},"评分")],-1),ta=t("div",{class:"markdown site-doc-description"},null,-1),na={class:"site-doc-demo"};function aa(a,u,l,e,d,k){const i=dt,p=X,w=W,C=v("DemoBasic"),D=v("DemoAllowHalf"),f=v("DemoTooltips"),$=v("DemoDisabled"),E=v("DemoSize"),y=v("DemoClearable"),B=v("DemoIcon"),P=v("ApiDocs"),M=v("DesignDocs");return s(),g("article",Zn,[t("section",Jn,[Qn,ta,o(i,{value:e.checkedDoc,"onUpdate:value":u[0]||(u[0]=V=>e.checkedDoc=V),dataSource:e.docRadioData,size:"lg",gap:"16px",mode:"primary",buttoned:""},null,8,["value","dataSource"])]),L(t("section",na,[o(w,{class:"site-anchor",affix:"",offset:16},{default:r(()=>[(e.showDevDemo,s(),m(p,{key:0,href:"#components-rate-basic",title:"基本使用"})),(e.showDevDemo,s(),m(p,{key:1,href:"#components-rate-allow-half",title:"支持半选"})),(e.showDevDemo,s(),m(p,{key:2,href:"#components-rate-tooltips",title:"文案提示"})),(e.showDevDemo,s(),m(p,{key:3,href:"#components-rate-disabled",title:"禁用状态"})),(e.showDevDemo,s(),m(p,{key:4,href:"#components-rate-size",title:"尺寸"})),(e.showDevDemo,s(),m(p,{key:5,href:"#components-rate-clearable",title:"可清除的"})),(e.showDevDemo,s(),m(p,{key:6,href:"#components-rate-icon",title:"自定义图标"}))]),_:1}),o(C),o(D),o(f),o($),o(E),o(y),o(B)],512),[[K,e.checkedDoc==="demo"]]),L(o(P,null,null,512),[[K,e.checkedDoc==="api"]]),L(o(M,null,null,512),[[K,e.checkedDoc==="design"]])])}const la=x(Yn,[["render",aa]]);export{la as default};