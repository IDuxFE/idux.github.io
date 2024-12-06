import{cP as ce,as as X,c as C,bT as Y,bk as k,b8 as q,bb as S,aV as de,R as pe,Q as G,$ as _,br as oe,b9 as fe,aS as re,v as ve,x as xe,ah as me,a$ as ye,bg as he,b7 as K,d as ge,at as be,aP as z,f as g,bd as Ie,aR as Z,an as Ce,h as Te,bA as Ne}from"./index-2f15ff81.js";import{a as Re}from"./GlobalCodeBox-bea190c3.js";import{i as Ee}from"./isNaN-6b5ccfaf.js";var ee=1/0,Se=17976931348623157e292;function we(e){if(!e)return e===0?e:0;if(e=ce(e),e===ee||e===-ee){var n=e<0?-1:1;return n*Se}return e===e?e:0}function $e(e){var n=we(e),t=n%1;return n===n?t?n-t:n:0}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e){const{text:n}=X("locale");return C(()=>{const{copyTooltip:o}=e;if(o)return Y(o)?n.copyText.map((i,a)=>{const l=o[a];return k(l)?{title:l}:{title:i,...l}}):q(o)?n.copyText.map(i=>({title:i,...o})):n.copyText.map(i=>({title:i}))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ke(e,n){const t=C(()=>{var d;return(d=e.copyIcon)!=null?d:n.copyIcon}),[o,i]=S(!1),{copy:a}=Re(),l=de(d=>{!d||o.value||a(d).then(b=>{b&&(i(!0),setTimeout(()=>i(!1),3e3)),pe(e.onCopy,b,d)})},300);return{copied:o,copy:l,copyIconRenderer:({copied:d})=>{if(t.value){if(k(t.value))return G(_,{name:t.value});if(oe(t.value))return t.value({copied:d});if(Y(t.value))return G(_,{name:d?t.value[1]:t.value[0]})}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function le(e){return k(e.children)?e.children.length:1}function Be(e){if(!e)return 0;let n=0;return e.forEach(t=>{n+=le(t)}),n}function ne(e,n,t){return k(e.children)?{...e,children:e.children.slice(n,t)}:e}function te(e,n,t){if(!e)return;let o=0,i=0;const a=[];for(;o<t&&i<e.length;){const l=e[i],s=le(l);o<n?o+s>n&&a.push(ne(l,n-o)):o+s<=t?a.push(l):a.push(ne(l,0,t-o)),o+=s,i++}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Le(e,n,t,o,i,a){const[l,s]=S(0),[d,b]=S(0),[x,T]=S(0),[A,F]=S(0),[H,w]=S(!1),[N,I]=S("none");let m;const y=C(()=>{const{ellipsis:r,lineClamp:p}=e;if(r===!0)return 1;if(r&&fe(r.rows))return r.rows;if(p){re.warn("components/text","The `lineClamp` prop is deprecated, use `ellipsis` instead");const f=$e(p);return Ee(f)?0:f}return 0}),R=C(()=>y.value===1&&!n.value),Q=r=>{s(Be(r))},U=()=>{N.value!=="none"&&(m==null||m())},O=(r,p=!1)=>p?N.value==="preparing"?r:te(r,0,x.value):te(r,0,d.value),P=()=>{let r=0,p=0,f=0,u=l.value;T(u),m=void 0;const c=h=>{h&&T(h),m=()=>{ye(v)}},v=()=>{var $,V,E,M,W,L;const h=(V=($=i.value)==null?void 0:$.offsetHeight)!=null?V:0,j=(M=(E=t.value)==null?void 0:E.offsetHeight)!=null?M:0;if(N.value==="preparing"){if(!a.value)return;p=(L=(W=a.value)==null?void 0:W.offsetHeight)!=null?L:0,r=y.value*p,j<=r||h<=r?(w(!1),b(l.value),m=void 0,I("none")):(I("measuring"),c(Math.ceil(l.value/2)))}else h<=r?f=x.value:u=x.value,f===u||f===u-1?h>r?c(x.value-1):(m=void 0,w(!0),b(x.value),I("none")):c(Math.ceil((f+u)/2))};I("preparing"),c()},B=()=>{if(!(!l.value||!A.value)){if(!y.value){w(!1);return}if(R.value){w(!!o.value&&o.value.scrollWidth>o.value.clientWidth);return}P()}};return ve(()=>{xe([l,y],B,{flush:"post",immediate:!0}),me(t,()=>{var p,f;if(N.value!=="none")return;const r=(f=(p=t.value)==null?void 0:p.offsetWidth)!=null?f:0;r!==A.value&&(F(r),B())})}),{isEllipsis:H,isSimple:R,measureStatus:N,onRender:Q,onMeasureRender:U,renderClampedContent:O}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ae(e,n){const[t,o]=he(e,"expanded",!1),i=C(()=>{const s=q(e.ellipsis)?e.ellipsis.expandable:void 0;return K(s)?s:K(e.expandable)?(re.warn("components/text","The `expandable` prop is deprecated, use `ellipsis` instead"),e.expandable):!1}),a=C(()=>{var s;return(s=e.expandIcon)!=null?s:n.expandIcon});return{expandIconRenderer:C(()=>{if(a.value)return({expanded:s})=>{if(k(a.value))return G(_,{name:a.value});if(oe(a.value))return a.value({expanded:s});if(Y(a.value))return G(_,{name:s?a.value[1]:a.value[0]})}}),expanded:t,expandable:i,setExpanded:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Fe={copyable:{type:Boolean,default:!1},copyIcon:{type:[String,Function,Array],default:void 0},copyTooltip:{type:[Boolean,Array,Object],default:!0},expanded:{type:Boolean,default:void 0},expandable:{type:Boolean,default:void 0},expandIcon:{type:[String,Function,Array],default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},lineClamp:{type:[String,Number],default:void 0},tag:{type:[String,Object],default:"span"},tooltip:{type:[Boolean,String,Object],default:!0},onCopy:[Function,Array],"onUpdate:expanded":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie={display:"block",position:"absolute",visibility:"hidden",top:"-100px",left:"-100px"},He={...ie,wordBreak:"keep-all",whiteSpace:"nowrap"},Oe=ge({name:"IxText",props:Fe,setup(e,{slots:n}){const t=X("common"),{globalHashId:o}=be(),i=X("text"),a=C(()=>`${t.prefixCls}-text`),l=z(),s=z(),d=z(),b=z(),{expanded:x,expandable:T,setExpanded:A,expandIconRenderer:F}=Ae(e,i),{copied:H,copy:w,copyIconRenderer:N}=ke(e,i),I=Me(e),{isSimple:m,isEllipsis:y,measureStatus:R,onRender:Q,onMeasureRender:U,renderClampedContent:O}=Le(e,T,l,s,d,b),P=()=>{const u=!x.value;A(u)},B=()=>{var u,c;return g("span",{class:`${a.value}-ellipsis`},[(c=(u=n.ellipsis)==null?void 0:u.call(n))!=null?c:"..."])},r=()=>{var c;if(!e.copyable)return;const u=g("span",{class:`${a.value}-copy-icon`,onClick:()=>w(ae(n.default))},[((c=n.copyIcon)!=null?c:N)({copied:H.value})]);return I.value?g(Z,H.value?I.value[1]:I.value[0],{default:()=>[u]}):u},p=u=>{const{tag:c}=e;return g(c,{ref:d,class:`${a.value}-inner`,style:ie},{default:()=>{var v;return[O(u,!0),B(),(v=n.suffix)==null?void 0:v.call(n),r()]}})},f=()=>{const{tag:u}=e;return g(u,{ref:b,class:`${a.value}-inner`,style:He},{default:()=>[Te("lg")]})};return()=>{var L,D,J;const{tag:u,tooltip:c}=e,v=a.value,h=c==="native",j=n.title||n.default,$=!!n.expandIcon||!!F.value,V=T.value&&$?g("div",{class:`${v}-expand-icon`,onClick:P},[((L=n.expandIcon)!=null?L:F.value)({expanded:x.value})]):void 0,E=Ie((D=n.default)==null?void 0:D.call(n));let M=g(u,{ref:s,class:`${v}-inner`,title:h&&y.value?ae(j):void 0,onClick:T.value&&!$?P:void 0},{default:()=>[!m.value&&y.value&&!x.value&&R.value==="none"?O(E):E,!m.value&&y.value&&!x.value&&B()]});if(y.value&&!x.value&&c&&!h){const ue=q(c)?c:{},se=function(){return M}();M=g(Z,ue,{default:()=>[se],title:j})}const W=Ce({[o.value]:o.value,[v]:!0,[`${v}-simple`]:m.value,[`${v}-ellipsis`]:y.value,[`${v}-expandable`]:T.value,[`${v}-has-expand-icon`]:$});return Q(E),R.value!=="none"&&U(),g("div",{ref:l,class:W},[M,(J=n.suffix)==null?void 0:J.call(n),r(),y.value&&V,R.value!=="none"&&p(E),R.value==="preparing"&&f()])}}});function ae(e){const n=Ne(e==null?void 0:e());if(!n)return"";const{children:t}=n;return k(t)?t:""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const We=Oe;export{We as I};
