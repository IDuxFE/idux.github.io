import{a as v,_ as k,I as y,b as I,c as x,d as $,e as w}from"./index.01a21eef.js";import{v as z,e as p,i as P,al as T,a9 as l,ab as e,ae as t,y as n,aa as a,F as E,a8 as r,ad as A,ag as _,ah as S,D as V}from"./vendor.71a61ad2.js";const G={zh:{videoErr:"\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002",bannerTitle:"iDux",bannerTitleDesc:"\u4F01\u4E1A\u7EA7\u8BBE\u8BA1\u89C4\u8303 \u9AD8\u6548\u5F00\u53D1\u4F53\u9A8C",start:"\u5F00\u59CB\u4F7F\u7528",github:"GitHub",compProperties:[{title:"\u5168\u65B0 Vue 3.x\uFF0C\u65E0\u5305\u88B1\u66F4\u7EAF\u7CB9",descs:["\u5168\u9762\u62E5\u62B1 Composition API\uFF0C\u4ECE\u6E90\u7801\u5230\u6587\u6863","\u5B8C\u5168\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49"],image:"/icons/comp-properties-1.png"},{title:"\u5F00\u7BB1\u5373\u7528\uFF0C\u5C3D\u4EAB\u9AD8\u6548",descs:["Monorepo\u6A21\u5F0F\uFF1Acdk\uFF0Ccomponents\uFF0Cpro","\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u8D28\u91CF\u7EC4\u4EF6"],image:"/icons/comp-properties-2.png"},{title:"\u767E\u53D8\u767E\u642D\uFF0C\u7075\u6D3B\u5B9A\u5236",descs:["\u7075\u6D3B\u7684\u5168\u5C40\u914D\u7F6E\uFF0C\u6DF1\u5165\u7EC6\u8282\u7684\u4E3B\u9898\u5B9A\u5236\u80FD\u529B","\u56FD\u9645\u5316\u8BED\u8A00\u652F\u6301"],image:"/icons/comp-properties-3.png"},{title:"\u7EC4\u4EF6\u4F53\u9A8C\uFF0C\u6301\u7EED\u8FED\u4EE3",descs:["\u57FA\u4E8E\u4E1A\u52A1\u9700\u6C42\u53CA\u8BBE\u8BA1\u8D8B\u52BF","\u4E13\u4E1A\u56E2\u961F\u6301\u7EED\u7EF4\u62A4\uFF0C\u4E0D\u65AD\u63D0\u5347\u7EC4\u4EF6\u8D28\u91CF"],image:"/icons/comp-properties-4.png"}],sceneDesc:["\u591A\u573A\u666F\u8DE8\u4E1A\u52A1\u4EA7\u54C1\u6848\u4F8B","\u4E91\u8BA1\u7B97&\u5B89\u5168\u591A\u573A\u666F\u843D\u5730\uFF0C\u672A\u6765\u5B9E\u73B0\u96C6\u56E2\u5185\u5168\u4EA7\u54C1\u8986\u76D6"],welcome:["\u540C\u4F19\u4F34\u4E00\u8D77\u6210\u957F","IDUX \u5E0C\u671B\u53C8\u66F4\u591A\u7684\u4F19\u4F34\u52A0\u5165\u8FDB\u6765\uFF0C\u4E00\u8D77\u8FDB\u6B65\u4E00\u8D77\u521B\u65B0\uFF5E"]}},H=z({setup(){const{breakpoints:u,lang:o,org:d,repo:m}=P(v),B=T(),C=p(()=>G[o.value]),c=p(()=>Object.keys(u).find(s=>u[s])),F=p(()=>`https://github.com/${d}/${m}`);return{breakpoints:u,lang:o,locale:C,buttonSize:c,githubUrl:F,gotoPage:s=>{B.push(`${s}/${o.value}`)}}}});const L={class:"home-wrapper"},N={class:"home-banner"},R={class:"home-banner-video",src:"https://idux-cdn.sangfor.com.cn/medias/home-banner.mp4",autoplay:"",loop:"",muted:""},U={class:"home-banner-title"},j={class:"home-banner-title-desc"};function M(u,o,d,m,B,C){const c=x,F=y,D=$,s=I,g=w;return r(),l(E,null,[e("div",L,[e("div",N,[e("video",R,t(u.locale.videoErr),1),e("div",U,[e("div",j,t(u.locale.bannerTitleDesc),1),n(F,{gap:16,size:u.buttonSize,shape:"round"},{default:a(()=>[n(c,{mode:"primary",onClick:o[0]||(o[0]=i=>u.gotoPage("/docs/introduce"))},{default:a(()=>[A(t(u.locale.start),1)]),_:1}),n(c,{mode:"link",href:u.githubUrl,target:"_blank"},{default:a(()=>[A(t(u.locale.github),1)]),_:1},8,["href"])]),_:1},8,["size"])])]),n(s,{class:"home-comp-properties-wrapper"},{default:a(()=>[(r(!0),l(E,null,_(u.locale.compProperties,(i,h)=>(r(),S(D,{key:h,xs:"24",sm:"12",class:"home-comp-properties"},{default:a(()=>[e("dl",null,[e("div",{class:"home-comp-properties-img",style:V({backgroundImage:`url(${i.image})`})},null,4),e("dt",null,t(i.title),1),(r(!0),l(E,null,_(i.descs,(b,f)=>(r(),l("dd",{key:f},t(b),1))),128))])]),_:2},1024))),128))]),_:1})]),n(g)],64)}const q=k(H,[["render",M]]);export{q as default};
