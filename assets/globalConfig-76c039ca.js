import{I as s}from"./index-eb0c9932.js";import{i,r as m,m as n,c as p,p as u}from"./vendor-730bc5d6.js";const d={type:"zh-CN",table:{layout:{title:"布局设置",sm:"紧凑",md:"适中",lg:"宽松",placeholder:"搜索关键字",all:"全部",reset:"重置",indexable:"序号",expandable:"展开",selectable:"勾选",startPin:"固定在列首",endPin:"固定在列尾",noPin:"不固定",startPinTitle:"固定在列首",endPinTitle:"固定在列尾",noPinTitle:"不固定"}},tree:{expandAll:"展开全部",collapseAll:"收起全部"},search:{keyword:"关键字",ok:"确定",cancel:"取消",selectAll:"全选",placeholder:"点击选择筛选条件, 按回车键确认",switchToDatePanel:"切换日期选择",switchToTimePanel:"切换时间选择"}},f=d,c={common:{prefixCls:"ix-pro"},locale:f,form:{ajvOptions:{allErrors:!0,loopEnum:50,code:{esm:!0}},autoId:!0,autoLabelFor:!0,formatComponents:{default:{component:s}},ignoreKeywords:["type","enum"],schemaFormatter:(e,l)=>({fields:e||{},schema:l||{}})},table:{columnIndexable:{align:"center",customCell:({rowIndex:e})=>e},layoutTool:{searchable:!1}},tree:{clearIcon:"close-circle",collapseIcon:["collapse","uncollapse"]},textarea:{clearable:!1,clearIcon:"close-circle",resize:"none",size:"md",showCount:!1,trim:!1},search:{clearable:!0,clearIcon:"close-circle",searchIcon:"search"}},h=Object.keys(c).map(e=>[e,Symbol(e)]),b=new Map(h);function x(e,l){const a=b.get(e),t=i(a,c[e]);if(!l)return t;const o=m(n(p(t),l));return u(a,o),[o,r=>n(o,r)]}export{x as u};
