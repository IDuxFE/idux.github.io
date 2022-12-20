import{u as v,v as I,i as b,aJ as N}from"./index-5a6244f3.js";import{i as T,a as w}from"./colors-239874dd.js";import{v as k,e as t,y as l,k as S,z as A}from"./vendor-8302379e.js";const K={color:String,icon:String,number:Number,shape:String},B={activeKeys:{type:Array,default:()=>[]},clickable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},dataSource:Array,gap:[Number,String],wrap:{type:Boolean,default:void 0},shape:String,"onUpdate:activeKeys":[Function,Array],onClick:[Function,Array],onClose:[Function,Array]},P=k({name:"IxTag",props:K,setup(n,{slots:o}){const u=v("common"),f=t(()=>`${u.prefixCls}-tag`),g=v("tag"),d=t(()=>{const a=n.color;return a?T(a)||w(a):!1}),x=t(()=>{const{shape:a=g.shape,color:s,number:m}=n,e=f.value,r=d.value,c=!S(m);return A({[`${e}`]:!0,[`${e}-${a}`]:!c&&a,[`${e}-${s}`]:r,[`${e}-numeric`]:c,[`${e}-has-color`]:!r&&s})}),C=t(()=>({backgroundColor:d.value?void 0:n.color}));return()=>{var r,c;const a=f.value,{icon:s,number:m}=n,e=o.icon?o.icon():s&&l(I,{name:s},null);return l("span",{class:x.value,style:C.value},[F(a,m,C.value),e,l("span",{class:`${a}-content`},[(r=o.default)==null?void 0:r.call(o)]),(c=o.suffix)==null?void 0:c.call(o)])}}});function F(n,o,u){return S(o)?null:l("span",{class:`${n}-numeric-prefix`,style:u},[o>9?"9+":o])}const z=k({name:"IxTagGroup",props:B,setup(n,{slots:o}){const u=v("common"),f=t(()=>`${u.prefixCls}-tag-group`),g=v("tagGroup"),d=t(()=>n.gap??g.gap),x=t(()=>n.wrap??g.wrap),C=t(()=>{const e=f.value;return{[e]:!0,[`${e}-clickable`]:n.clickable,[`${e}-nowrap`]:!x.value}}),a=t(()=>({gap:`8px ${N(d.value)}`})),s=(e,r)=>{if(n.clickable){b(n.onClick,e,r);const c=n.activeKeys,p=c.findIndex(i=>i===e);p===-1?c.push(e):c.splice(p,1),b(n["onUpdate:activeKeys"],c)}},m=(e,r)=>{b(n.onClose,e,r)};return()=>{var c,p;const e=f.value,r=((c=o.closeIcon)==null?void 0:c.call(o))??l(I,{name:n.closeIcon},null);return l("div",{class:C.value,style:a.value},[(p=n.dataSource)==null?void 0:p.map((i,h)=>{const y=i.key??h,G={suffix:()=>l("span",{class:`${e}-close-icon`,onClick:$=>m(y,$)},[r])};return l(P,{key:y,shape:n.shape,color:i.color,number:i.number,icon:i.icon,onClick:$=>s(y,$)},{default:()=>i.label,...n.closable&&G})})])}}}),O=P,V=z;export{O as I,V as a};
