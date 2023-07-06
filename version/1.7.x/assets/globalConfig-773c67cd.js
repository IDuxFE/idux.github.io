import{I as s}from"./index-289501e6.js";import{l as i,m as p,n,p as u,q as m}from"./vendor-5e807b09.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const d={type:"zh-CN",table:{layout:{title:"布局设置",sm:"紧凑",md:"适中",lg:"宽松",placeholder:"搜索关键字",all:"全部",reset:"重置",indexable:"序号",expandable:"展开",selectable:"勾选",startPin:"固定在列首",endPin:"固定在列尾",noPin:"不固定",startPinTitle:"固定在列首",endPinTitle:"固定在列尾",noPinTitle:"不固定"}},tree:{expandAll:"展开全部",collapseAll:"收起全部"},search:{keyword:"关键字",ok:"确定",cancel:"取消",selectAll:"全选",placeholder:"点击选择筛选条件, 按回车键确认",switchToDatePanel:"切换日期选择",switchToTimePanel:"切换时间选择"}},f=d;/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const r={common:{prefixCls:"ix-pro"},locale:f,form:{ajvOptions:{allErrors:!0,loopEnum:50,code:{esm:!0}},autoId:!0,autoLabelFor:!0,formatComponents:{default:{component:s}},ignoreKeywords:["type","enum"],schemaFormatter:(e,l)=>({fields:e||{},schema:l||{}})},table:{layoutTool:{changeSize:!0,resetable:!0,searchable:!1}},tree:{clearIcon:"close-circle",collapseIcon:["collapse","uncollapse"]},textarea:{clearable:!1,clearIcon:"close-circle",resize:"none",size:"md",showCount:!1,trim:!1},search:{clearable:!0,clearIcon:"close-circle",searchIcon:"search"}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const h=Object.keys(r).map(e=>[e,Symbol(e)]),b=new Map(h);function g(e,l){const t=b.get(e),a=i(t,r[e]);if(!l)return a;const o=p(n(u(a),l));return m(t,o),[o,c=>n(o,c)]}export{g as u};
