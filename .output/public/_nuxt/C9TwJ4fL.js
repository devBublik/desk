import{m as z,k as u,_ as $,p as j,t as U,v as x,j as A,y as N,z as O,d as r,M as k,N as w,B as c,A as g,W as H,c as n,a as L,J as h,e as f,ae as q,w as E,K as M,q as V,af as D,ag as F,ah as G,F as C,r as B,C as y,D as p,ai as R}from"./BaT5g_0Y.js";const T={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},W={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"},Q={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},X=z(u.ui.strategy,u.ui.container,W),Y=j({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=U("container",x(e,"ui"),X),o=A(()=>N(O(t.value.base,t.value.padding,t.value.constrained),e.class));return{ui:t,attrs:s,containerClass:o}}});function Z(e,t,s,o,d,m){return r(),k(H(e.as),g({class:e.containerClass},e.attrs),{default:w(()=>[c(e.$slots,"default")]),_:3},16,["class"])}const ee=$(Y,[["render",Z]]),te={},ae={class:"bg-green-500 flex-0 py-2 px-4"},re={class:"text-gray-00"};function se(e,t){const s=q;return r(),n("footer",ae,[L("div",re,[t[1]||(t[1]=h(" Сделано ")),f(s,{to:"https://github.com/Bublik1805"},{default:w(()=>t[0]||(t[0]=[h("Бубликовой Евгенией ")])),_:1})])])}const oe=$(te,[["render",se]]),l=z(u.ui.strategy,u.ui.badge,T),ne=j({inheritAttrs:!1,props:{size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...u.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=U("badge",x(e,"ui"),l),{size:o,rounded:d}=E({ui:t,props:e}),m=A(()=>{var v,_;const b=((_=(v=t.value.color)==null?void 0:v[e.color])==null?void 0:_[e.variant])||t.value.variant[e.variant];return N(O(t.value.base,t.value.font,d.value,t.value.size[o.value],b==null?void 0:b.replaceAll("{color}",e.color)),e.class)});return{attrs:s,badgeClass:m}}});function ie(e,t,s,o,d,m){return r(),n("span",g({class:e.badgeClass},e.attrs),[c(e.$slots,"default",{},()=>[h(M(e.label),1)])],16)}const I=$(ne,[["render",ie]]),le=z(u.ui.strategy,u.ui.horizontalNavigation,Q),ce=j({components:{UIcon:V,UAvatar:D,UBadge:I,ULink:F},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=U("horizontalNavigation",x(e,"ui"),le,x(e,"class")),o=A(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:t,attrs:s,sections:o,getULinkProps:G,twMerge:N,twJoin:O}}}),ue={key:0,class:"sr-only"};function de(e,t,s,o,d,m){const b=D,v=V,_=I,J=F;return r(),n("nav",g({class:e.ui.wrapper},e.attrs),[(r(!0),n(C,null,B(e.sections,(K,S)=>(r(),n("ul",{key:`section${S}`,class:y(e.ui.container)},[(r(!0),n(C,null,B(K,(a,P)=>(r(),n("li",{key:`section${S}-${P}`,class:y(e.ui.inner)},[f(J,g({ref_for:!0},e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:t[0]||(t[0]=R(i=>i.target.blur(),["enter"]))}),{default:w(({isActive:i})=>[c(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),k(b,g({key:0,ref_for:!0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):p("",!0)]),c(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),k(v,{key:0,name:a.icon,class:y(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):p("",!0)]),c(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),n("span",{key:0,class:y(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),n("span",ue," Current page: ")):p("",!0),h(" "+M(a.label),1)],2)):p("",!0)]),c(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),k(_,g({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):p("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const ge=$(ce,[["render",de]]),fe={__name:"CustomHeader",setup(e){const t=[{label:"Главная",icon:"i-heroicons-home",to:"/"},{label:"Настройки",icon:"i-heroicons-cog-8-tooth",to:"/settings"}];return(s,o)=>{const d=ge;return r(),n("div",{class:y(["flex items-center flex-end bg-white border-t border-boulder-100 py-2 px-4 rounded-b-lg",s.isCompact?"mb-2":"mb-8"]),ui:{inner:"flex-end"}},[f(d,{links:t,class:"border-b border-gray-200 dark:border-gray-800 flex-end"})],2)}}},be={class:"content"},ye={__name:"default",setup(e){return(t,s)=>{const o=ee;return r(),n(C,null,[L("div",be,[f(fe),f(o,{class:"flex flex-col pb-12 text-xs"},{default:w(()=>[c(t.$slots,"default")]),_:3})]),f(oe)],64)}}};export{ye as default};
