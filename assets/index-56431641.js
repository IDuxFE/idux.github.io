import{cP as ce,as as Y,c as C,bU as q,bk as B,b8 as D,bb as S,aU as de,R as pe,P as z,$ as G,br as oe,b9 as fe,aS as re,v as ve,x as xe,ah as me,a$ as ye,bg as he,b7 as Q,d as ge,at as be,aP as V,f as g,bd as Ie,aR as Z,an as Ce,h as Ne,bB as Te}from"./index-da4385ef.js";import{a as Re}from"./GlobalCodeBox-0f73b872.js";import{i as Ee}from"./isNaN-37bb08c3.js";var ee=1/0,Se=17976931348623157e292;function we(e){if(!e)return e===0?e:0;if(e=ce(e),e===ee||e===-ee){var n=e<0?-1:1;return n*Se}return e===e?e:0}function $e(e){var n=we(e),t=n%1;return n===n?t?n-t:n:0}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e){const{text:n}=Y("locale");return C(()=>{const{copyTooltip:o}=e;if(o)return q(o)?n.copyText.map((i,a)=>{const l=o[a];return B(l)?{title:l}:{title:i,...l}}):D(o)?n.copyText.map(i=>({title:i,...o})):n.copyText.map(i=>({title:i}))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Be(e,n){const t=C(()=>{var d;return(d=e.copyIcon)!=null?d:n.copyIcon}),[o,i]=S(!1),{copy:a}=Re(),l=de(d=>{!d||o.value||a(d).then(b=>{b&&(i(!0),setTimeout(()=>i(!1),3e3)),pe(e.onCopy,b,d)})},300);return{copied:o,copy:l,copyIconRenderer:({copied:d})=>{if(t.value){if(B(t.value))return z(G,{name:t.value});if(oe(t.value))return t.value({copied:d});if(q(t.value))return z(G,{name:d?t.value[1]:t.value[0]})}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function le(e){return B(e.children)?e.children.length:1}function ke(e){if(!e)return 0;let n=0;return e.forEach(t=>{n+=le(t)}),n}function ne(e,n,t){return B(e.children)?{...e,children:e.children.slice(n,t)}:e}function te(e,n,t){if(!e)return;let o=0,i=0;const a=[];for(;o<t&&i<e.length;){const l=e[i],s=le(l);o<n?o+s>n&&a.push(ne(l,n-o)):o+s<=t?a.push(l):a.push(ne(l,0,t-o)),o+=s,i++}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Le(e,n,t,o,i,a){const[l,s]=S(0),[d,b]=S(0),[x,N]=S(0),[H,A]=S(0),[k,w]=S(!1),[T,I]=S("none");let m;const y=C(()=>{const{ellipsis:r,lineClamp:f}=e;if(r===!0)return 1;if(r&&fe(r.rows))return r.rows;if(f){re.warn("components/text","The `lineClamp` prop is deprecated, use `ellipsis` instead");const v=$e(f);return Ee(v)?0:v}return 0}),R=C(()=>y.value===1&&!n.value),_=r=>{s(ke(r))},X=()=>{T.value!=="none"&&(m==null||m())},P=(r,f=!1)=>f?T.value==="preparing"?r:te(r,0,x.value):te(r,0,d.value),O=()=>{let r=0,f=0,v=0,u=l.value;N(u),m=void 0;const c=h=>{h&&N(h),m=()=>{ye(p)}},p=()=>{var $,W,E,M,U,F;const h=(W=($=i.value)==null?void 0:$.offsetHeight)!=null?W:0,j=(M=(E=t.value)==null?void 0:E.offsetHeight)!=null?M:0;if(T.value==="preparing"){if(!a.value)return;f=(F=(U=a.value)==null?void 0:U.offsetHeight)!=null?F:0,r=y.value*f,j<=r||h<=r?(w(!1),b(l.value),m=void 0,I("none")):(I("measuring"),c(Math.ceil(l.value/2)))}else h<=r?v=x.value:u=x.value,v===u||v===u-1?h>r?c(x.value-1):(m=void 0,w(!0),b(x.value),I("none")):c(Math.ceil((v+u)/2))};I("preparing"),c()},L=()=>{if(!(!l.value||!H.value)){if(!y.value){w(!1);return}if(R.value){w(!!o.value&&o.value.scrollWidth>o.value.clientWidth);return}O()}};return ve(()=>{xe([l,y],L,{flush:"post",immediate:!0}),me(t,()=>{var f,v;if(T.value!=="none")return;const r=(v=(f=t.value)==null?void 0:f.offsetWidth)!=null?v:0;r!==H.value&&(A(r),L())})}),{isEllipsis:k,isSimple:R,measureStatus:T,onRender:_,onMeasureRender:X,renderClampedContent:P}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Fe(e,n){const[t,o]=he(e,"expanded",!1),i=C(()=>{const s=D(e.ellipsis)?e.ellipsis.expandable:void 0;return Q(s)?s:Q(e.expandable)?(re.warn("components/text","The `expandable` prop is deprecated, use `ellipsis` instead"),e.expandable):!1}),a=C(()=>{var s;return(s=e.expandIcon)!=null?s:n.expandIcon});return{expandIconRenderer:C(()=>{if(a.value)return({expanded:s})=>{if(B(a.value))return z(G,{name:a.value});if(oe(a.value))return a.value({expanded:s});if(q(a.value))return z(G,{name:s?a.value[1]:a.value[0]})}}),expanded:t,expandable:i,setExpanded:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const He={copyable:{type:Boolean,default:!1},copyIcon:{type:[String,Function,Array],default:void 0},copyTooltip:{type:[Boolean,Array,Object],default:!0},expanded:{type:Boolean,default:void 0},expandable:{type:Boolean,default:void 0},expandIcon:{type:[String,Function,Array],default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},lineClamp:{type:[String,Number],default:void 0},tag:{type:[String,Object],default:"span"},tooltip:{type:[Boolean,String,Object],default:!0},onCopy:[Function,Array],"onUpdate:expanded":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ie={display:"block",position:"absolute",visibility:"hidden",top:"-100px",left:"-100px"},Ae={...ie,wordBreak:"keep-all",whiteSpace:"nowrap"},Pe=ge({name:"IxText",props:He,setup(e,{slots:n}){const t=Y("common"),{globalHashId:o}=be(),i=Y("text"),a=C(()=>`${t.prefixCls}-text`),l=V(),s=V(),d=V(),b=V(),{expanded:x,expandable:N,setExpanded:H,expandIconRenderer:A}=Fe(e,i),{copied:k,copy:w,copyIconRenderer:T}=Be(e,i),I=Me(e),{isSimple:m,isEllipsis:y,measureStatus:R,onRender:_,onMeasureRender:X,renderClampedContent:P}=Le(e,N,l,s,d,b),O=()=>{const u=!x.value;H(u)},L=()=>{var u,c;return g("span",{class:`${a.value}-ellipsis`},[(c=(u=n.ellipsis)==null?void 0:u.call(n))!=null?c:"..."])},r=()=>{var c;if(!e.copyable)return;const u=g("span",{class:`${a.value}-copy-icon`,onClick:()=>w(ae(n.default))},[((c=n.copyIcon)!=null?c:T)({copied:k.value})]);return I.value?g(Z,k.value?I.value[1]:I.value[0],{default:()=>[u]}):u},f=u=>{const{tag:c}=e;return g(c,{ref:d,class:`${a.value}-inner`,style:ie},{default:()=>{var p;return[P(u,!0),L(),(p=n.suffix)==null?void 0:p.call(n),r()]}})},v=()=>{const{tag:u}=e;return g(u,{ref:b,class:`${a.value}-inner`,style:Ae},{default:()=>[Ne("lg")]})};return()=>{var F,J,K;const{tag:u,tooltip:c}=e,p=a.value,h=c==="native",j=n.title||n.default,$=!!n.expandIcon||!!A.value,W=N.value&&$?g("div",{class:`${p}-expand-icon`,onClick:O},[((F=n.expandIcon)!=null?F:A.value)({expanded:x.value})]):void 0,E=Ie((J=n.default)==null?void 0:J.call(n));let M=g(u,{ref:s,class:`${p}-inner`,title:h&&y.value?ae(j):void 0,onClick:N.value&&!$?O:void 0},{default:()=>[!m.value&&y.value&&!x.value&&R.value==="none"?P(E):E,!m.value&&y.value&&!x.value&&L()]});if(y.value&&!x.value&&c&&!h){const ue=D(c)?c:{},se=function(){return M}();M=g(Z,ue,{default:()=>[se],title:j})}const U=Ce({[o.value]:o.value,[p]:!0,[`${p}-simple`]:m.value,[`${p}-copied`]:k.value,[`${p}-ellipsis`]:y.value,[`${p}-expandable`]:N.value,[`${p}-has-expand-icon`]:$});return _(E),R.value!=="none"&&X(),g("div",{ref:l,class:U},[M,(K=n.suffix)==null?void 0:K.call(n),r(),y.value&&W,R.value!=="none"&&f(E),R.value==="preparing"&&v()])}}});function ae(e){const n=Te(e==null?void 0:e());if(!n)return"";const{children:t}=n;return B(t)?t:""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Ue=Pe;export{Ue as I};
