import{M as _,ak as S,m as se,A as D,a8 as ae,D as ce,ao as de,N as pe,am as fe,a7 as Y,aE as ve}from"./index-55847558.js";import{c as C,U as J,f as k,b as K,ad as xe,x as U,i as oe,V as me,bD as ye,bE as ge,m as he,w as Ie,W as be,au as Z,l as Ce,s as z,q as h,p as Te,an as Ne}from"./vendor-d701f15d.js";import{a as Ee}from"./GlobalCodeBox-8665adfd.js";/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function we(e){const{text:n}=_("locale");return C(()=>{const{copyTooltip:o}=e;if(o)return J(o)?n.copyText.map((i,a)=>{const r=o[a];return k(r)?{title:r}:{title:i,...r}}):K(o)?n.copyText.map(i=>({title:i,...o})):n.copyText.map(i=>({title:i}))})}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Se(e,n){const t=C(()=>{var d;return(d=e.copyIcon)!=null?d:n.copyIcon}),[o,i]=S(!1),{copy:a}=Ee(),r=xe(d=>{!d||o.value||a(d).then(I=>{I&&(i(!0),setTimeout(()=>i(!1),3e3)),se(e.onCopy,I,d)})},300);return{copied:o,copy:r,copyIconRenderer:({copied:d})=>{if(t.value){if(k(t.value))return U(D,{name:t.value});if(oe(t.value))return t.value({copied:d});if(J(t.value))return U(D,{name:d?t.value[1]:t.value[0]})}}}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function le(e){return k(e.children)?e.children.length:1}function Re(e){if(!e)return 0;let n=0;return e.forEach(t=>{n+=le(t)}),n}function ee(e,n,t){return k(e.children)?{...e,children:e.children.slice(n,t)}:e}function ne(e,n,t){if(!e)return;let o=0,i=0;const a=[];for(;o<t&&i<e.length;){const r=e[i],s=le(r);o<n?o+s>n&&a.push(ee(r,n-o)):o+s<=t?a.push(r):a.push(ee(r,0,t-o)),o+=s,i++}return a}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function Me(e,n,t,o,i,a){const[r,s]=S(0),[d,I]=S(0),[x,T]=S(0),[H,A]=S(0),[F,R]=S(!1),[N,b]=S("none");let m;const y=C(()=>{const{ellipsis:l,lineClamp:p}=e;if(l===!0)return 1;if(l&&me(l.rows))return l.rows;if(p){ae.warn("components/text","The `lineClamp` prop is deprecated, use `ellipsis` instead");const f=ye(p);return ge(f)?0:f}return 0}),E=C(()=>y.value===1&&!n.value),q=l=>{s(Re(l))},G=()=>{N.value!=="none"&&(m==null||m())},O=(l,p=!1)=>p?N.value==="preparing"?l:ne(l,0,x.value):ne(l,0,d.value),j=()=>{let l=0,p=0,f=0,u=r.value;T(u),m=void 0;const c=g=>{g&&T(g),m=()=>{be(v)}},v=()=>{var M,P,w,$,V,L;const g=(P=(M=i.value)==null?void 0:M.offsetHeight)!=null?P:0,W=($=(w=t.value)==null?void 0:w.offsetHeight)!=null?$:0;if(N.value==="preparing"){if(!a.value)return;p=(L=(V=a.value)==null?void 0:V.offsetHeight)!=null?L:0,l=y.value*p,W<=l||g<=l?(R(!1),I(r.value),m=void 0,b("none")):(b("measuring"),c(Math.ceil(r.value/2)))}else g<=l?f=x.value:u=x.value,f===u||f===u-1?g>l?c(x.value-1):(m=void 0,R(!0),I(x.value),b("none")):c(Math.ceil((f+u)/2))};b("preparing"),c()},B=()=>{if(!(!r.value||!H.value)){if(!y.value){R(!1);return}if(E.value){R(!!o.value&&o.value.scrollWidth>o.value.clientWidth);return}j()}};return he(()=>{Ie([r,y],B,{flush:"post",immediate:!0}),ce(t,()=>{var p,f;if(N.value!=="none")return;const l=(f=(p=t.value)==null?void 0:p.offsetWidth)!=null?f:0;l!==H.value&&(A(l),B())})}),{isEllipsis:F,isSimple:E,measureStatus:N,onRender:q,onMeasureRender:G,renderClampedContent:O}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */function $e(e,n){const[t,o]=de(e,"expanded",!1),i=C(()=>{const s=K(e.ellipsis)?e.ellipsis.expandable:void 0;return Z(s)?s:Z(e.expandable)?(ae.warn("components/text","The `expandable` prop is deprecated, use `ellipsis` instead"),e.expandable):!1}),a=C(()=>{var s;return(s=e.expandIcon)!=null?s:n.expandIcon});return{expandIconRenderer:C(()=>{if(a.value)return({expanded:s})=>{if(k(a.value))return U(D,{name:a.value});if(oe(a.value))return a.value({expanded:s});if(J(a.value))return U(D,{name:s?a.value[1]:a.value[0]})}}),expanded:t,expandable:i,setExpanded:o}}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const ke={copyable:{type:Boolean,default:!1},copyIcon:{type:[String,Function,Array],default:void 0},copyTooltip:{type:[Boolean,Array,Object],default:!0},expanded:{type:Boolean,default:void 0},expandable:{type:Boolean,default:void 0},expandIcon:{type:[String,Function,Array],default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},lineClamp:{type:[String,Number],default:void 0},tag:{type:[String,Object],default:"span"},tooltip:{type:[Boolean,String,Object],default:!0},onCopy:[Function,Array],"onUpdate:expanded":[Function,Array]},re={display:"block",position:"absolute",visibility:"hidden",top:"-100px",left:"-100px"},Be={...re,wordBreak:"keep-all",whiteSpace:"nowrap"},Le=Ce({name:"IxText",props:ke,setup(e,{slots:n}){const t=_("common"),{globalHashId:o}=pe(),i=_("text"),a=C(()=>`${t.prefixCls}-text`),r=z(),s=z(),d=z(),I=z(),{expanded:x,expandable:T,setExpanded:H,expandIconRenderer:A}=$e(e,i),{copied:F,copy:R,copyIconRenderer:N}=Se(e,i),b=we(e),{isSimple:m,isEllipsis:y,measureStatus:E,onRender:q,onMeasureRender:G,renderClampedContent:O}=Me(e,T,r,s,d,I),j=()=>{const u=!x.value;H(u)},B=()=>{var u,c;return h("span",{class:`${a.value}-ellipsis`},[(c=(u=n.ellipsis)==null?void 0:u.call(n))!=null?c:"..."])},l=()=>{var c;if(!e.copyable)return;const u=h("span",{class:`${a.value}-copy-icon`,onClick:()=>R(te(n.default))},[((c=n.copyIcon)!=null?c:N)({copied:F.value})]);return b.value?h(Y,F.value?b.value[1]:b.value[0],{default:()=>[u]}):u},p=u=>{const{tag:c}=e;return h(c,{ref:d,class:`${a.value}-inner`,style:re},{default:()=>{var v;return[O(u,!0),B(),(v=n.suffix)==null?void 0:v.call(n),l()]}})},f=()=>{const{tag:u}=e;return h(u,{ref:I,class:`${a.value}-inner`,style:Be},{default:()=>[Ne("lg")]})};return()=>{var L,Q,X;const{tag:u,tooltip:c}=e,v=a.value,g=c==="native",W=n.title||n.default,M=!!n.expandIcon||!!A.value,P=T.value&&M?h("div",{class:`${v}-expand-icon`,onClick:j},[((L=n.expandIcon)!=null?L:A.value)({expanded:x.value})]):void 0,w=fe((Q=n.default)==null?void 0:Q.call(n));let $=h(u,{ref:s,class:`${v}-inner`,title:g&&y.value?te(W):void 0,onClick:T.value&&!M?j:void 0},{default:()=>[!m.value&&y.value&&!x.value&&E.value==="none"?O(w):w,!m.value&&y.value&&!x.value&&B()]});if(y.value&&!x.value&&c&&!g){const ie=K(c)?c:{},ue=function(){return $}();$=h(Y,ie,{default:()=>[ue],title:W})}const V=Te({[o.value]:o.value,[v]:!0,[`${v}-simple`]:m.value,[`${v}-ellipsis`]:y.value,[`${v}-expandable`]:T.value,[`${v}-has-expand-icon`]:M});return q(w),E.value!=="none"&&G(),h("div",{ref:r,class:V},[$,(X=n.suffix)==null?void 0:X.call(n),l(),y.value&&P,E.value!=="none"&&p(w),E.value==="preparing"&&f()])}}});function te(e){const n=ve(e==null?void 0:e());if(!n)return"";const{children:t}=n;return k(t)?t:""}/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */const Oe=Le;export{Oe as I};