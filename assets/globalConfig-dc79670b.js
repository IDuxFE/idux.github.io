import{I as s}from"./index-4efdfd95.js";import{i,ao as m,cW as r,c_ as d,a5 as p}from"./index-da4385ef.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const u={type:"zh-CN",table:{layout:{title:"布局设置",sm:"紧凑",md:"适中",lg:"宽松",placeholder:"搜索关键字",all:"全部",reset:"重置",indexable:"序号",expandable:"展开",selectable:"勾选",startPin:"固定在列首",endPin:"固定在列尾",noPin:"不固定",startPinTitle:"固定在列首",endPinTitle:"固定在列尾",noPinTitle:"不固定"}},tagSelect:{colors:{grey:"灰",green:"绿",blue:"蓝",yellow:"黄",red:"红",orange:"橙"},remove:"删除",createTag:"创建标签",removeTag:"删除标签",maxExceededAlert:"标签已达${0}个上限，请及时清理",empty:"暂无数据",ok:"确定",cancel:"取消"},tree:{expandAll:"展开全部",collapseAll:"收起全部"},search:{keyword:"关键字",keywordFallbackLabel:'以"${0}: ${1}"搜索',ok:"确定",cancel:"取消",selectAll:"全选",allSelected:"全部",placeholder:"点击选择筛选条件, 按回车键确认",switchToDatePanel:"切换日期选择",switchToTimePanel:"切换时间选择"}},f=u;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const c={common:{prefixCls:"ix-pro"},locale:f,form:{ajvOptions:{allErrors:!0,loopEnum:50,code:{esm:!0}},autoId:!0,autoLabelFor:!0,formatComponents:{default:{component:s}},ignoreKeywords:["type","enum"],schemaFormatter:(e,l)=>({fields:e||{},schema:l||{}})},table:{layoutTool:{changeSize:!0,resetable:!0,searchable:!1}},tagSelect:{borderless:!1,clearable:!1,clearIcon:"close-circle",size:"md",suffix:"down"},tree:{clearIcon:"close-circle",collapseIcon:["collapse","expand"]},textarea:{clearable:!1,clearIcon:"close-circle",resize:"none",size:"md",showCount:!1,trim:!1},search:{clearable:!0,clearIcon:"close-circle",searchIcon:"search",size:"md"}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const b=Object.keys(c).map(e=>[e,Symbol(e)]),h=new Map(b);function y(e,l){const o=h.get(e),t=i(o,c[e]);if(!l)return t;const a=m(r(d(t),l));return p(o,a),[a,n=>r(a,n)]}export{y as u};
