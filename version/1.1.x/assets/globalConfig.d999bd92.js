import{I as r}from"./index.eb1b0a9c.js";import{i as s,r as i,m as t,c as E,p as m}from"./vendor.994f7e39.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const p={type:"zh-CN",table:{layout:{title:"\u5E03\u5C40\u8BBE\u7F6E",sm:"\u7D27\u51D1",md:"\u9002\u4E2D",lg:"\u5BBD\u677E",placeholder:"\u641C\u7D22\u5173\u952E\u5B57",all:"\u5168\u90E8",reset:"\u91CD\u7F6E",indexable:"\u5E8F\u53F7",expandable:"\u5C55\u5F00",selectable:"\u52FE\u9009",startPin:"\u56FA\u5B9A\u5728\u5217\u9996",endPin:"\u56FA\u5B9A\u5728\u5217\u5C3E",noPin:"\u4E0D\u56FA\u5B9A",startPinTitle:"\u56FA\u5B9A\u5728\u5217\u9996",endPinTitle:"\u56FA\u5B9A\u5728\u5217\u5C3E",noPinTitle:"\u4E0D\u56FA\u5B9A"}},tree:{expandAll:"\u5C55\u5F00\u5168\u90E8",collapseAll:"\u6536\u8D77\u5168\u90E8"},search:{keyword:"\u5173\u952E\u5B57",ok:"\u786E\u5B9A",cancel:"\u53D6\u6D88",selectAll:"\u5168\u9009",placeholder:"\u70B9\u51FB\u9009\u62E9\u7B5B\u9009\u6761\u4EF6, \u6309\u56DE\u8F66\u952E\u786E\u8BA4",switchToDatePanel:"\u5207\u6362\u65E5\u671F\u9009\u62E9",switchToTimePanel:"\u5207\u6362\u65F6\u95F4\u9009\u62E9"}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const n={common:{prefixCls:"ix-pro"},locale:p,form:{ajvOptions:{allErrors:!0,loopEnum:50,code:{esm:!0}},autoId:!0,autoLabelFor:!0,formatComponents:{default:{component:r}},ignoreKeywords:["type","enum"],schemaFormatter:(u,e)=>({fields:u||{},schema:e||{}})},table:{columnIndexable:{align:"center",customCell:({rowIndex:u})=>u},layoutTool:{searchable:!1}},tree:{clearIcon:"close-circle",collapseIcon:["collapse","uncollapse"]},textarea:{clearable:!1,clearIcon:"close-circle",resize:"none",size:"md",showCount:!1,trim:!1},search:{clearable:!0,clearIcon:"close-circle",searchIcon:"search"}};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const F=Object.keys(n).map(u=>[u,Symbol(u)]),d=new Map(F);function A(u,e){const o=d.get(u),a=s(o,n[u]);if(!e)return a;const l=i(t(E(a),e));return m(o,l),[l,c=>t(l,c)]}export{A as u};
