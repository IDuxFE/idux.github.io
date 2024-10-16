import{T as D,ar as E,m as se,t as z,af as ae,L as ce,av as de,U as pe,at as fe,ae as Y,aL as ve}from"./index-b2ce1350.js";import{c as C,k as J,f as M,b as K,ae as xe,y as q,i as oe,U as me,bS as ye,aT as he,n as ge,w as Ie,V as be,ah as Z,m as Ce,s as U,v as g,q as Te,aE as Ne}from"./vendor-489a52b6.js";import{a as Se}from"./GlobalCodeBox-1bb87d6f.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function we(e){const{text:n}=D("locale");return C(()=>{const{copyTooltip:o}=e;if(o)return J(o)?n.copyText.map((i,a)=>{const r=o[a];return M(r)?{title:r}:{title:i,...r}}):K(o)?n.copyText.map(i=>({title:i,...o})):n.copyText.map(i=>({title:i}))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Ee(e,n){const t=C(()=>{var d;return(d=e.copyIcon)!=null?d:n.copyIcon}),[o,i]=E(!1),{copy:a}=Se(),r=xe(d=>{!d||o.value||a(d).then(I=>{I&&(i(!0),setTimeout(()=>i(!1),3e3)),se(e.onCopy,I,d)})},300);return{copied:o,copy:r,copyIconRenderer:({copied:d})=>{if(t.value){if(M(t.value))return q(z,{name:t.value});if(oe(t.value))return t.value({copied:d});if(J(t.value))return q(z,{name:d?t.value[1]:t.value[0]})}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function le(e){return M(e.children)?e.children.length:1}function Re(e){if(!e)return 0;let n=0;return e.forEach(t=>{n+=le(t)}),n}function ee(e,n,t){return M(e.children)?{...e,children:e.children.slice(n,t)}:e}function ne(e,n,t){if(!e)return;let o=0,i=0;const a=[];for(;o<t&&i<e.length;){const r=e[i],s=le(r);o<n?o+s>n&&a.push(ee(r,n-o)):o+s<=t?a.push(r):a.push(ee(r,0,t-o)),o+=s,i++}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Le(e,n,t,o,i,a){const[r,s]=E(0),[d,I]=E(0),[x,T]=E(0),[H,A]=E(0),[F,R]=E(!1),[N,b]=E("none");let m;const y=C(()=>{const{ellipsis:l,lineClamp:p}=e;if(l===!0)return 1;if(l&&me(l.rows))return l.rows;if(p){ae.warn("components/text","The `lineClamp` prop is deprecated, use `ellipsis` instead");const f=ye(p);return he(f)?0:f}return 0}),S=C(()=>y.value===1&&!n.value),G=l=>{s(Re(l))},_=()=>{N.value!=="none"&&(m==null||m())},O=(l,p=!1)=>p?N.value==="preparing"?l:ne(l,0,x.value):ne(l,0,d.value),j=()=>{let l=0,p=0,f=0,u=r.value;T(u),m=void 0;const c=h=>{h&&T(h),m=()=>{be(v)}},v=()=>{var L,V,w,$,W,B;const h=(V=(L=i.value)==null?void 0:L.offsetHeight)!=null?V:0,P=($=(w=t.value)==null?void 0:w.offsetHeight)!=null?$:0;if(N.value==="preparing"){if(!a.value)return;p=(B=(W=a.value)==null?void 0:W.offsetHeight)!=null?B:0,l=y.value*p,P<=l||h<=l?(R(!1),I(r.value),m=void 0,b("none")):(b("measuring"),c(Math.ceil(r.value/2)))}else h<=l?f=x.value:u=x.value,f===u||f===u-1?h>l?c(x.value-1):(m=void 0,R(!0),I(x.value),b("none")):c(Math.ceil((f+u)/2))};b("preparing"),c()},k=()=>{if(!(!r.value||!H.value)){if(!y.value){R(!1);return}if(S.value){R(!!o.value&&o.value.scrollWidth>o.value.clientWidth);return}j()}};return ge(()=>{Ie([r,y],k,{flush:"post",immediate:!0}),ce(t,()=>{var p,f;if(N.value!=="none")return;const l=(f=(p=t.value)==null?void 0:p.offsetWidth)!=null?f:0;l!==H.value&&(A(l),k())})}),{isEllipsis:F,isSimple:S,measureStatus:N,onRender:G,onMeasureRender:_,renderClampedContent:O}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function $e(e,n){const[t,o]=de(e,"expanded",!1),i=C(()=>{const s=K(e.ellipsis)?e.ellipsis.expandable:void 0;return Z(s)?s:Z(e.expandable)?(ae.warn("components/text","The `expandable` prop is deprecated, use `ellipsis` instead"),e.expandable):!1}),a=C(()=>{var s;return(s=e.expandIcon)!=null?s:n.expandIcon});return{expandIconRenderer:C(()=>{if(a.value)return({expanded:s})=>{if(M(a.value))return q(z,{name:a.value});if(oe(a.value))return a.value({expanded:s});if(J(a.value))return q(z,{name:s?a.value[1]:a.value[0]})}}),expanded:t,expandable:i,setExpanded:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Me={copyable:{type:Boolean,default:!1},copyIcon:{type:[String,Function,Array],default:void 0},copyTooltip:{type:[Boolean,Array,Object],default:!0},expanded:{type:Boolean,default:void 0},expandable:{type:Boolean,default:void 0},expandIcon:{type:[String,Function,Array],default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},lineClamp:{type:[String,Number],default:void 0},tag:{type:[String,Object],default:"span"},tooltip:{type:[Boolean,String,Object],default:!0},onCopy:[Function,Array],"onUpdate:expanded":[Function,Array]};/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const re={display:"block",position:"absolute",visibility:"hidden",top:"-100px",left:"-100px"},ke={...re,wordBreak:"keep-all",whiteSpace:"nowrap"},Be=Ce({name:"IxText",props:Me,setup(e,{slots:n}){const t=D("common"),{globalHashId:o}=pe(),i=D("text"),a=C(()=>`${t.prefixCls}-text`),r=U(),s=U(),d=U(),I=U(),{expanded:x,expandable:T,setExpanded:H,expandIconRenderer:A}=$e(e,i),{copied:F,copy:R,copyIconRenderer:N}=Ee(e,i),b=we(e),{isSimple:m,isEllipsis:y,measureStatus:S,onRender:G,onMeasureRender:_,renderClampedContent:O}=Le(e,T,r,s,d,I),j=()=>{const u=!x.value;H(u)},k=()=>{var u,c;return g("span",{class:`${a.value}-ellipsis`},[(c=(u=n.ellipsis)==null?void 0:u.call(n))!=null?c:"..."])},l=()=>{var c;if(!e.copyable)return;const u=g("span",{class:`${a.value}-copy-icon`,onClick:()=>R(te(n.default))},[((c=n.copyIcon)!=null?c:N)({copied:F.value})]);return b.value?g(Y,F.value?b.value[1]:b.value[0],{default:()=>[u]}):u},p=u=>{const{tag:c}=e;return g(c,{ref:d,class:`${a.value}-inner`,style:re},{default:()=>{var v;return[O(u,!0),k(),(v=n.suffix)==null?void 0:v.call(n),l()]}})},f=()=>{const{tag:u}=e;return g(u,{ref:I,class:`${a.value}-inner`,style:ke},{default:()=>[Ne("lg")]})};return()=>{var B,Q,X;const{tag:u,tooltip:c}=e,v=a.value,h=c==="native",P=n.title||n.default,L=!!n.expandIcon||!!A.value,V=T.value&&L?g("div",{class:`${v}-expand-icon`,onClick:j},[((B=n.expandIcon)!=null?B:A.value)({expanded:x.value})]):void 0,w=fe((Q=n.default)==null?void 0:Q.call(n));let $=g(u,{ref:s,class:`${v}-inner`,title:h&&y.value?te(P):void 0,onClick:T.value&&!L?j:void 0},{default:()=>[!m.value&&y.value&&!x.value&&S.value==="none"?O(w):w,!m.value&&y.value&&!x.value&&k()]});if(y.value&&!x.value&&c&&!h){const ie=K(c)?c:{},ue=function(){return $}();$=g(Y,ie,{default:()=>[ue],title:P})}const W=Te({[o.value]:o.value,[v]:!0,[`${v}-simple`]:m.value,[`${v}-ellipsis`]:y.value,[`${v}-expandable`]:T.value,[`${v}-has-expand-icon`]:L});return G(w),S.value!=="none"&&_(),g("div",{ref:r,class:W},[$,(X=n.suffix)==null?void 0:X.call(n),l(),y.value&&V,S.value!=="none"&&p(w),S.value==="preparing"&&f()])}}});function te(e){const n=ve(e==null?void 0:e());if(!n)return"";const{children:t}=n;return M(t)?t:""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Oe=Be;export{Oe as I};
