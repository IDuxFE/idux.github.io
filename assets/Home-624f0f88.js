import{a as $,_ as B,I as z,b as C,c as T,d as w,e as D}from"./index-4a5449a2.js";import{m as P,z as S,aB as E,c as _,ay as a,az as p,aC as o,aF as s,v as r,aA as c,F as g,aE as F,aH as y,aI as H,Q as V}from"./vendor-e200cecb.js";import"./__commonjsHelpers__-725317a4.js";const G={zh:{videoErr:"您的浏览器不支持 video 标签。",bannerTitle:"iDux",bannerTitleDesc:"企业级设计规范 高效开发体验",start:"开始使用",github:"GitHub",compProperties:[{title:"全新 Vue 3.x，无包袱更纯粹",descs:["全面拥抱 Composition API，从源码到文档","完全使用 TypeScript 开发，提供完整的类型定义"],image:"/icons/comp-properties-1.png"},{title:"开箱即用，尽享高效",descs:["Monorepo模式：cdk，components，pro","开箱即用的高质量组件"],image:"/icons/comp-properties-2.png"},{title:"百变百搭，灵活定制",descs:["灵活的全局配置，深入细节的主题定制能力","国际化语言支持"],image:"/icons/comp-properties-3.png"},{title:"组件体验，持续迭代",descs:["基于业务需求及设计趋势","专业团队持续维护，不断提升组件质量"],image:"/icons/comp-properties-4.png"}],sceneDesc:["多场景跨业务产品案例","云计算&安全多场景落地，未来实现集团内全产品覆盖"],welcome:["同伙伴一起成长","IDUX 希望又更多的伙伴加入进来，一起进步一起创新～"]}},L=P({setup(){const{breakpoints:e,lang:t,org:h,repo:b,setTheme:f}=S($),v=E(),i=_(()=>G[t.value]),u=_(()=>Object.keys(e).find(n=>e[n])),m=_(()=>`https://github.com/${h}/${b}`),d=n=>{v.push(`${n}/${t.value}`)};return f("default"),{breakpoints:e,lang:t,locale:i,buttonSize:u,githubUrl:m,gotoPage:d}}});const N={class:"home-wrapper"},R={class:"home-banner"},U={class:"home-banner-video",src:"https://idux-cdn.sangfor.com.cn/medias/home-banner.mp4",autoplay:"",loop:"",muted:""},j={class:"home-banner-title"},A={class:"home-banner-title-desc"},M=["href"];function O(e,t,h,b,f,v){const i=T,u=z,m=D,d=C,n=w;return a(),p(g,null,[o("div",N,[o("div",R,[o("video",U,s(e.locale.videoErr),1),o("div",j,[o("div",A,s(e.locale.bannerTitleDesc),1),r(u,{gap:16,size:e.buttonSize,shape:"round"},{default:c(()=>[r(i,{mode:"primary",onClick:t[0]||(t[0]=l=>e.gotoPage("/docs/introduce"))},{default:c(()=>[F(s(e.locale.start),1)]),_:1}),r(i,null,{default:c(()=>[o("a",{href:e.githubUrl,target:"_blank"},s(e.locale.github),9,M)]),_:1})]),_:1},8,["size"])])]),r(d,{class:"home-comp-properties-wrapper"},{default:c(()=>[(a(!0),p(g,null,y(e.locale.compProperties,(l,I)=>(a(),H(m,{key:I,xs:"24",sm:"12",class:"home-comp-properties"},{default:c(()=>[o("dl",null,[o("div",{class:"home-comp-properties-img",style:V({backgroundImage:`url(${l.image})`})},null,4),o("dt",null,s(l.title),1),(a(!0),p(g,null,y(l.descs,(k,x)=>(a(),p("dd",{key:x},s(k),1))),128))])]),_:2},1024))),128))]),_:1})]),r(n)],64)}const J=B(L,[["render",O]]);export{J as default};
