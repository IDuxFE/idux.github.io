import{cP as ce,as as Y,c as C,bT as q,bk as k,b8 as D,bb as S,aU as de,R as pe,P as G,$ as U,br as oe,b9 as fe,aS as re,v as ve,x as xe,ah as me,a$ as ye,bg as he,b7 as Q,d as ge,at as be,aP as z,f as g,bd as Ie,aR as Z,an as Ce,h as Te,bA as Ne}from"./index-068e057b.js";import{a as Re}from"./GlobalCodeBox-87c4ab0e.js";import{i as Ee}from"./isNaN-1715f2c1.js";var ee=1/0,Se=17976931348623157e292;function we(e){if(!e)return e===0?e:0;if(e=ce(e),e===ee||e===-ee){var n=e<0?-1:1;return n*Se}return e===e?e:0}function $e(e){var n=we(e),t=n%1;return n===n?t?n-t:n:0}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e){const{text:n}=Y("locale");return C(()=>{const{copyTooltip:o}=e;if(o)return q(o)?n.copyText.map((i,a)=>{const l=o[a];return k(l)?{title:l}:{title:i,...l}}):D(o)?n.copyText.map(i=>({title:i,...o})):n.copyText.map(i=>({title:i}))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function ke(e,n){const t=C(()=>{var d;return(d=e.copyIcon)!=null?d:n.copyIcon}),[o,i]=S(!1),{copy:a}=Re(),l=de(d=>{!d||o.value||a(d).then(b=>{b&&(i(!0),setTimeout(()=>i(!1),3e3)),pe(e.onCopy,b,d)})},300);return{copied:o,copy:l,copyIconRenderer:({copied:d})=>{if(t.value){if(k(t.value))return G(U,{name:t.value});if(oe(t.value))return t.value({copied:d});if(q(t.value))return G(U,{name:d?t.value[1]:t.value[0]})}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function le(e){return k(e.children)?e.children.length:1}function Be(e){if(!e)return 0;let n=0;return e.forEach(t=>{n+=le(t)}),n}function ne(e,n,t){return k(e.children)?{...e,children:e.children.slice(n,t)}:e}function te(e,n,t){if(!e)return;let o=0,i=0;const a=[];for(;o<t&&i<e.length;){const l=e[i],s=le(l);o<n?o+s>n&&a.push(ne(l,n-o)):o+s<=t?a.push(l):a.push(ne(l,0,t-o)),o+=s,i++}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Le(e,n,t,o,i,a){const[l,s]=S(0),[d,b]=S(0),[x,T]=S(0),[F,H]=S(0),[B,w]=S(!1),[N,I]=S("none");let m;const y=C(()=>{const{ellipsis:r,lineClamp:f}=e;if(r===!0)return 1;if(r&&fe(r.rows))return r.rows;if(f){re.warn("components/text","The `lineClamp` prop is deprecated, use `ellipsis` instead");const v=$e(f);return Ee(v)?0:v}return 0}),R=C(()=>y.value===1&&!n.value),_=r=>{s(Be(r))},X=()=>{N.value!=="none"&&(m==null||m())},P=(r,f=!1)=>f?N.value==="preparing"?r:te(r,0,x.value):te(r,0,d.value),O=()=>{let r=0,f=0,v=0,u=l.value;T(u),m=void 0;const c=h=>{h&&T(h),m=()=>{ye(p)}},p=()=>{var $,W,E,M,V,A;const h=(W=($=i.value)==null?void 0:$.offsetHeight)!=null?W:0,j=(M=(E=t.value)==null?void 0:E.offsetHeight)!=null?M:0;if(N.value==="preparing"){if(!a.value)return;f=(A=(V=a.value)==null?void 0:V.offsetHeight)!=null?A:0,r=y.value*f,j<=r||h<=r?(w(!1),b(l.value),m=void 0,I("none")):(I("measuring"),c(Math.ceil(l.value/2)))}else h<=r?v=x.value:u=x.value,v===u||v===u-1?h>r?c(x.value-1):(m=void 0,w(!0),b(x.value),I("none")):c(Math.ceil((v+u)/2))};I("preparing"),c()},L=()=>{if(!(!l.value||!F.value)){if(!y.value){w(!1);return}if(R.value){w(!!o.value&&o.value.scrollWidth>o.value.clientWidth);return}O()}};return ve(()=>{xe([l,y],L,{flush:"post",immediate:!0}),me(t,()=>{var f,v;if(N.value!=="none")return;const r=(v=(f=t.value)==null?void 0:f.offsetWidth)!=null?v:0;r!==F.value&&(H(r),L())})}),{isEllipsis:B,isSimple:R,measureStatus:N,onRender:_,onMeasureRender:X,renderClampedContent:P}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ae(e,n){const[t,o]=he(e,"expanded",!1),i=C(()=>{const s=D(e.ellipsis)?e.ellipsis.expandable:void 0;return Q(s)?s:Q(e.expandable)?(re.warn("components/text","The `expandable` prop is deprecated, use `ellipsis` instead"),e.expandable):!1}),a=C(()=>{var s;return(s=e.expandIcon)!=null?s:n.expandIcon});return{expandIconRenderer:C(()=>{if(a.value)return({expanded:s})=>{if(k(a.value))return G(U,{name:a.value});if(oe(a.value))return a.value({expanded:s});if(q(a.value))return G(U,{name:s?a.value[1]:a.value[0]})}}),expanded:t,expandable:i,setExpanded:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Fe={copyable:{type:Boolean,default:!1},copyIcon:{type:[String,Function,Array],default:void 0},copyTooltip:{type:[Boolean,Array,Object],default:!0},expanded:{type:Boolean,default:void 0},expandable:{type:Boolean,default:void 0},expandIcon:{type:[String,Function,Array],default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},lineClamp:{type:[String,Number],default:void 0},tag:{type:[String,Object],default:"span"},tooltip:{type:[Boolean,String,Object],default:!0},onCopy:[Function,Array],"onUpdate:expanded":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie={display:"block",position:"absolute",visibility:"hidden",top:"-100px",left:"-100px"},He={...ie,wordBreak:"keep-all",whiteSpace:"nowrap"},Pe=ge({name:"IxText",props:Fe,setup(e,{slots:n}){const t=Y("common"),{globalHashId:o}=be(),i=Y("text"),a=C(()=>`${t.prefixCls}-text`),l=z(),s=z(),d=z(),b=z(),{expanded:x,expandable:T,setExpanded:F,expandIconRenderer:H}=Ae(e,i),{copied:B,copy:w,copyIconRenderer:N}=ke(e,i),I=Me(e),{isSimple:m,isEllipsis:y,measureStatus:R,onRender:_,onMeasureRender:X,renderClampedContent:P}=Le(e,T,l,s,d,b),O=()=>{const u=!x.value;F(u)},L=()=>{var u,c;return g("span",{class:`${a.value}-ellipsis`},[(c=(u=n.ellipsis)==null?void 0:u.call(n))!=null?c:"..."])},r=()=>{var c;if(!e.copyable)return;const u=g("span",{class:`${a.value}-copy-icon`,onClick:()=>w(ae(n.default))},[((c=n.copyIcon)!=null?c:N)({copied:B.value})]);return I.value?g(Z,B.value?I.value[1]:I.value[0],{default:()=>[u]}):u},f=u=>{const{tag:c}=e;return g(c,{ref:d,class:`${a.value}-inner`,style:ie},{default:()=>{var p;return[P(u,!0),L(),(p=n.suffix)==null?void 0:p.call(n),r()]}})},v=()=>{const{tag:u}=e;return g(u,{ref:b,class:`${a.value}-inner`,style:He},{default:()=>[Te("lg")]})};return()=>{var A,J,K;const{tag:u,tooltip:c}=e,p=a.value,h=c==="native",j=n.title||n.default,$=!!n.expandIcon||!!H.value,W=T.value&&$?g("div",{class:`${p}-expand-icon`,onClick:O},[((A=n.expandIcon)!=null?A:H.value)({expanded:x.value})]):void 0,E=Ie((J=n.default)==null?void 0:J.call(n));let M=g(u,{ref:s,class:`${p}-inner`,title:h&&y.value?ae(j):void 0,onClick:T.value&&!$?O:void 0},{default:()=>[!m.value&&y.value&&!x.value&&R.value==="none"?P(E):E,!m.value&&y.value&&!x.value&&L()]});if(y.value&&!x.value&&c&&!h){const ue=D(c)?c:{},se=function(){return M}();M=g(Z,ue,{default:()=>[se],title:j})}const V=Ce({[o.value]:o.value,[p]:!0,[`${p}-simple`]:m.value,[`${p}-copied`]:B.value,[`${p}-ellipsis`]:y.value,[`${p}-expandable`]:T.value,[`${p}-has-expand-icon`]:$});return _(E),R.value!=="none"&&X(),g("div",{ref:l,class:V},[M,(K=n.suffix)==null?void 0:K.call(n),r(),y.value&&W,R.value!=="none"&&f(E),R.value==="preparing"&&v()])}}});function ae(e){const n=Ne(e==null?void 0:e());if(!n)return"";const{children:t}=n;return k(t)?t:""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ve=Pe;export{Ve as I};
