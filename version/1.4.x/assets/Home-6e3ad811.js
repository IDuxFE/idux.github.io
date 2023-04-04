import{a as $,_ as B,I as C,b as w,c as z,d as D,e as P}from"./index-7e609792.js";import{v as T,f as d,i as S,al as V,a9 as p,ab as o,ae as s,y as a,aa as r,F as m,a8 as c,ad as E,ag as f,ah as F,B as G}from"./vendor-50817465.js";const H={zh:{videoErr:"您的浏览器不支持 video 标签。",bannerTitle:"iDux",bannerTitleDesc:"企业级设计规范 高效开发体验",start:"开始使用",github:"GitHub",compProperties:[{title:"全新 Vue 3.x，无包袱更纯粹",descs:["全面拥抱 Composition API，从源码到文档","完全使用 TypeScript 开发，提供完整的类型定义"],image:"/version/1.4.x/icons/comp-properties-1.png"},{title:"开箱即用，尽享高效",descs:["Monorepo模式：cdk，components，pro","开箱即用的高质量组件"],image:"/version/1.4.x/icons/comp-properties-2.png"},{title:"百变百搭，灵活定制",descs:["灵活的全局配置，深入细节的主题定制能力","国际化语言支持"],image:"/version/1.4.x/icons/comp-properties-3.png"},{title:"组件体验，持续迭代",descs:["基于业务需求及设计趋势","专业团队持续维护，不断提升组件质量"],image:"/version/1.4.x/icons/comp-properties-4.png"}],sceneDesc:["多场景跨业务产品案例","云计算&安全多场景落地，未来实现集团内全产品覆盖"],welcome:["同伙伴一起成长","IDUX 希望又更多的伙伴加入进来，一起进步一起创新～"]}},L=T({setup(){const{breakpoints:e,lang:t,org:_,repo:g}=S($),h=V(),b=d(()=>H[t.value]),i=d(()=>Object.keys(e).find(n=>e[n])),u=d(()=>`https://github.com/${_}/${g}`);return{breakpoints:e,lang:t,locale:b,buttonSize:i,githubUrl:u,gotoPage:n=>{h.push(`${n}/${t.value}`)}}}});const N={class:"home-wrapper"},R={class:"home-banner"},U={class:"home-banner-video",src:"https://idux-cdn.sangfor.com.cn/medias/home-banner.mp4",autoplay:"",loop:"",muted:""},j={class:"home-banner-title"},A={class:"home-banner-title-desc"},M=["href"];function O(e,t,_,g,h,b){const i=z,u=C,v=D,n=w,x=P;return c(),p(m,null,[o("div",N,[o("div",R,[o("video",U,s(e.locale.videoErr),1),o("div",j,[o("div",A,s(e.locale.bannerTitleDesc),1),a(u,{gap:16,size:e.buttonSize,shape:"round"},{default:r(()=>[a(i,{mode:"primary",onClick:t[0]||(t[0]=l=>e.gotoPage("/docs/introduce"))},{default:r(()=>[E(s(e.locale.start),1)]),_:1}),a(i,null,{default:r(()=>[o("a",{href:e.githubUrl,target:"_blank"},s(e.locale.github),9,M)]),_:1})]),_:1},8,["size"])])]),a(n,{class:"home-comp-properties-wrapper"},{default:r(()=>[(c(!0),p(m,null,f(e.locale.compProperties,(l,y)=>(c(),F(v,{key:y,xs:"24",sm:"12",class:"home-comp-properties"},{default:r(()=>[o("dl",null,[o("div",{class:"home-comp-properties-img",style:G({backgroundImage:`url(${l.image})`})},null,4),o("dt",null,s(l.title),1),(c(!0),p(m,null,f(l.descs,(k,I)=>(c(),p("dd",{key:I},s(k),1))),128))])]),_:2},1024))),128))]),_:1})]),a(x)],64)}const J=B(L,[["render",O]]);export{J as default};