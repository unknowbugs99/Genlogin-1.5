import{d as M,h,c as Q,a as p,i as Me,b as R,e as Fe,f,u as ee,r as F,g as W,j as k,k as q,w as ao,l as oe,o as je,m as ce,n as so,p as co,q as uo,s as mo,t as vo,V as ho,v as fo,x as po,y as go,z as Ee,A as E,B as Ke,N as De,C as X,D as Ve,E as de,F as ve,G,H as bo,I as Ue,J as Z,K as xe,L as We,M as xo,O as Ce,P as he,Q as le,R as _o,S as yo,T as Co,U as ze,W as ne,X as H,Y as _e,Z as v,_ as O,$ as D,a0 as we,a1 as qe,a2 as fe,a3 as C,a4 as w,a5 as Y,a6 as j,a7 as zo,a8 as Ge,a9 as Se,aa as U,ab as re,ac as Ye,ad as wo,ae as So,af as ae,ag as Xe,ah as Le,ai as Io,aj as Ro,ak as ko}from"./index.6e57c2f1.js";import{l as Po}from"./helpers.34775daf.js";import{u as To}from"./index.9957eceb.js";import{c as $o}from"./chrome-icon.de460a19.js";import{f as Ao}from"./firefox-icon.a50947ef.js";import{_ as No,a as Ho,b as Eo}from"./RadioButton.b5a9ef83.js";import{_ as Je,a as Lo}from"./RadioGroup.eb33361c.js";import{_ as Oo}from"./InputNumber.7f06f099.js";import{_ as Bo}from"./FormItem.5b33b5bf.js";import{_ as Ie}from"./Space.2af8f31d.js";import{_ as Re}from"./Popover.1a4e3ffd.js";import{_ as Mo}from"./text.ab985a40.js";import{_ as Fo}from"./Spin.d2f52ed0.js";import{_ as jo,a as Ko}from"./Tabs.c8819703.js";import{t as Do,c as Vo}from"./Tag.f1f916fe.js";import{C as Uo,_ as Qe}from"./Dropdown.fdbd6883.js";import{_ as Wo}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as ye}from"./use-merged-state.14d1217d.js";import{u as qo}from"./use-compitable.be4359a7.js";import{_ as Go}from"./a.b5248c45.js";import"./Input.bebd1abf.js";import"./Add.fbc88024.js";import"./get.556bbf62.js";import"./cssr.27de2d53.js";import"./next-frame-once.e0fd6a2a.js";const Yo=M({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Xo=!1,Jo=(e={})=>{var o;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}},pe=new WeakMap,ge=new WeakMap,be=new WeakMap,Qo=(e,o,t)=>{if(!e)return()=>{};const n=Jo(o),{root:a}=n.options;let i;const d=pe.get(a);d?i=d:(i=new Map,pe.set(a,i));let s,l;i.has(n.hash)?(l=i.get(n.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(m=>{m.forEach(u=>{if(u.isIntersecting){const T=ge.get(u.target),z=be.get(u.target);T&&T(),z&&(z.value=!0)}})},n.options),s.observe(e),l=[s,new Set([e])],i.set(n.hash,l));let b=!1;const x=()=>{b||(ge.delete(e),be.delete(e),b=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(n.hash),i.size||pe.delete(a))};return ge.set(e,x),be.set(e,t),x},Zo=Q("n-avatar-group"),et=p("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Me(R("&","--n-merged-color: var(--n-color-modal);")),Fe(R("&","--n-merged-color: var(--n-color-popover);")),R("img",`
 width: 100%;
 height: 100%;
 `),f("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),p("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),f("text","line-height: 1.25")]),ot=Object.assign(Object.assign({},q.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),tt=M({name:"Avatar",props:ot,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ee(e),n=F(!1);let a=null;const i=F(null),d=F(null),s=()=>{const{value:_}=i;if(_&&(a===null||a!==_.innerHTML)){a=_.innerHTML;const{value:g}=d;if(g){const{offsetWidth:$,offsetHeight:A}=g,{offsetWidth:y,offsetHeight:P}=_,r=.9,S=Math.min($/y*r,A/P*r,1);_.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},l=W(Zo,null),b=k(()=>{const{size:_}=e;if(_)return _;const{size:g}=l||{};return g||"medium"}),x=q("Avatar","-avatar",et,uo,e,o),m=W(Do,null),u=k(()=>{if(l)return!0;const{round:_,circle:g}=e;return _!==void 0||g!==void 0?_||g:m?m.roundRef.value:!1}),T=k(()=>l?!0:e.bordered||!1),z=_=>{if(!V.value)return;n.value=!0;const{onError:g}=e;g&&g(_)};ao(()=>e.src,()=>n.value=!1);const I=k(()=>{const _=b.value,g=u.value,$=T.value,{color:A}=e,{self:{borderRadius:y,fontSize:P,color:r,border:S,colorModal:B,colorPopover:ue},common:{cubicBezierEaseInOut:me}}=x.value;let te;return typeof _=="number"?te=`${_}px`:te=x.value.self[mo("height",_)],{"--n-font-size":P,"--n-border":$?S:"none","--n-border-radius":g?"50%":y,"--n-color":A||r,"--n-color-modal":A||B,"--n-color-popover":A||ue,"--n-bezier":me,"--n-merged-size":`var(--n-avatar-size-override, ${te})`}}),N=t?oe("avatar",k(()=>{const _=b.value,g=u.value,$=T.value,{color:A}=e;let y="";return _&&(typeof _=="number"?y+=`a${_}`:y+=_[0]),g&&(y+="b"),$&&(y+="c"),A&&(y+=vo(A)),y}),I,e):void 0,L=F(null),V=F(!e.lazy);je(()=>{if(Xo)return;let _;const g=ce(()=>{_==null||_(),_=void 0,e.lazy&&(_=Qo(L.value,e.intersectionObserverOptions,V))});so(()=>{g(),_==null||_()})});const K=F(!e.lazy);return{textRef:i,selfRef:d,mergedRoundRef:u,mergedClsPrefix:o,fitTextTransform:s,cssVars:t?void 0:I,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender,hasLoadError:n,handleError:z,imageRef:L,shouldStartLoading:V,loaded:K,mergedOnLoad:_=>{const{onLoad:g}=e;g==null||g(_),K.value=!0}}},render(){var e,o;const{$slots:t,src:n,mergedClsPrefix:a,lazy:i,onRender:d,mergedOnLoad:s,shouldStartLoading:l,loaded:b}=this;d==null||d();let x;const m=(o=(e=this.$slots).placeholder)===null||o===void 0?void 0:o.call(e);return this.hasLoadError?x=h("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):x=co(t.default,u=>{if(u)return h(ho,{onResize:this.fitTextTransform},{default:()=>h("span",{ref:"textRef",class:`${a}-avatar__text`},u)});if(n)return h("img",{loading:i?"lazy":"eager",ref:"imageRef",src:l||b?n:void 0,onLoad:s,"data-image-src":n,onError:this.handleError,style:[{objectFit:this.objectFit},m&&!b?{height:"0",width:"0",visibility:"hidden"}:""]})}),h("span",{ref:"selfRef",class:[`${a}-avatar`,this.themeClass],style:this.cssVars},x,i&&!b&&m)}}),rt=e=>{const{baseColor:o,textColor2:t,bodyColor:n,cardColor:a,dividerColor:i,actionColor:d,scrollbarColor:s,scrollbarColorHover:l,invertedColor:b}=e;return{textColor:t,textColorInverted:"#FFF",color:n,colorEmbedded:d,headerColor:a,headerColorInverted:b,footerColor:d,footerColorInverted:b,headerBorderColor:i,headerBorderColorInverted:b,footerBorderColor:i,footerBorderColorInverted:b,siderBorderColor:i,siderBorderColorInverted:b,siderColor:a,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:Ee(n,s),siderToggleBarColorHover:Ee(n,l),__invertScrollbar:"true"}},nt=fo({name:"Layout",common:po,peers:{Scrollbar:go},self:rt}),ke=nt,Ze=Q("n-layout-sider"),Pe={type:String,default:"static"},it=p("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[p("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),E("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),lt={embedded:Boolean,position:Pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},eo=Q("n-layout");function oo(e){return M({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},q.props),lt),setup(o){const t=F(null),n=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=ee(o),d=q("Layout","-layout",it,ke,o,a);function s(I,N){if(o.nativeScrollbar){const{value:L}=t;L&&(N===void 0?L.scrollTo(I):L.scrollTo(I,N))}else{const{value:L}=n;L&&L.scrollTo(I,N)}}X(eo,o);let l=0,b=0;const x=I=>{var N;const L=I.target;l=L.scrollLeft,b=L.scrollTop,(N=o.onScroll)===null||N===void 0||N.call(o,I)};Ke(()=>{if(o.nativeScrollbar){const I=t.value;I&&(I.scrollTop=b,I.scrollLeft=l)}});const m={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:s},T=k(()=>{const{common:{cubicBezierEaseInOut:I},self:N}=d.value;return{"--n-bezier":I,"--n-color":o.embedded?N.colorEmbedded:N.color,"--n-text-color":N.textColor}}),z=i?oe("layout",void 0,T,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:m,mergedTheme:d,handleNativeElScroll:x,cssVars:i?void 0:T,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},u)},render(){var o;const{mergedClsPrefix:t,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):h(De,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const at=oo(!1),st=oo(!0),ct=p("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[E("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),E("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),dt={position:Pe,inverted:Boolean,bordered:{type:Boolean,default:!1}},ut=M({name:"LayoutHeader",props:Object.assign(Object.assign({},q.props),dt),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ee(e),n=q("Layout","-layout-header",ct,ke,e,o),a=k(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=n.value,l={"--n-bezier":d};return e.inverted?(l["--n-color"]=s.headerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.headerBorderColorInverted):(l["--n-color"]=s.headerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.headerBorderColor),l}),i=t?oe("layout-header",k(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),mt=p("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[E("bordered",[f("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),f("left-placement",[E("bordered",[f("border",`
 right: 0;
 `)])]),E("right-placement",`
 justify-content: flex-start;
 `,[E("bordered",[f("border",`
 left: 0;
 `)]),E("collapsed",[p("layout-toggle-button",[p("base-icon",`
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",[R("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),p("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[p("base-icon",`
 transform: rotate(0);
 `)]),p("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[R("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),E("collapsed",[p("layout-toggle-bar",[R("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),p("layout-toggle-button",[p("base-icon",`
 transform: rotate(0);
 `)])]),p("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[p("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[f("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),f("bottom",`
 position: absolute;
 top: 34px;
 `),R("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),R("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),p("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),E("show-content",[p("layout-sider-scroll-container",{opacity:1})]),E("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),vt=M({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(Ve,{clsPrefix:e},{default:()=>h(Uo,null)}))}}),ht=M({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ft={position:Pe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},pt=M({name:"LayoutSider",props:Object.assign(Object.assign({},q.props),ft),setup(e){const o=W(eo),t=F(null),n=F(null),a=k(()=>ve(l.value?e.collapsedWidth:e.width)),i=k(()=>e.collapseMode!=="transform"?{}:{minWidth:ve(e.width)}),d=k(()=>o?o.siderPlacement:"left"),s=F(e.defaultCollapsed),l=ye(de(e,"collapsed"),s);function b(g,$){if(e.nativeScrollbar){const{value:A}=t;A&&($===void 0?A.scrollTo(g):A.scrollTo(g,$))}else{const{value:A}=n;A&&A.scrollTo(g,$)}}function x(){const{"onUpdate:collapsed":g,onUpdateCollapsed:$,onExpand:A,onCollapse:y}=e,{value:P}=l;$&&G($,!P),g&&G(g,!P),s.value=!P,P?A&&G(A):y&&G(y)}let m=0,u=0;const T=g=>{var $;const A=g.target;m=A.scrollLeft,u=A.scrollTop,($=e.onScroll)===null||$===void 0||$.call(e,g)};Ke(()=>{if(e.nativeScrollbar){const g=t.value;g&&(g.scrollTop=u,g.scrollLeft=m)}}),X(Ze,{collapsedRef:l,collapseModeRef:de(e,"collapseMode")});const{mergedClsPrefixRef:z,inlineThemeDisabled:I}=ee(e),N=q("Layout","-layout-sider",mt,ke,e,z);function L(g){var $,A;g.propertyName==="max-width"&&(l.value?($=e.onAfterLeave)===null||$===void 0||$.call(e):(A=e.onAfterEnter)===null||A===void 0||A.call(e))}const V={scrollTo:b},K=k(()=>{const{common:{cubicBezierEaseInOut:g},self:$}=N.value,{siderToggleButtonColor:A,siderToggleButtonBorder:y,siderToggleBarColor:P,siderToggleBarColorHover:r}=$,S={"--n-bezier":g,"--n-toggle-button-color":A,"--n-toggle-button-border":y,"--n-toggle-bar-color":P,"--n-toggle-bar-color-hover":r};return e.inverted?(S["--n-color"]=$.siderColorInverted,S["--n-text-color"]=$.textColorInverted,S["--n-border-color"]=$.siderBorderColorInverted,S["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColorInverted,S.__invertScrollbar=$.__invertScrollbar):(S["--n-color"]=$.siderColor,S["--n-text-color"]=$.textColor,S["--n-border-color"]=$.siderBorderColor,S["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColor),S}),_=I?oe("layout-sider",k(()=>e.inverted?"a":"b"),K,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:z,mergedTheme:N,styleMaxWidth:a,mergedCollapsed:l,scrollContainerStyle:i,siderPlacement:d,handleNativeElScroll:T,handleTransitionend:L,handleTriggerClick:x,inlineThemeDisabled:I,cssVars:K,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender},V)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ve(this.width)}]},this.nativeScrollbar?h("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(De,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?h(ht,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(vt,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${o}-layout-sider__border`}):null)}}),gt=R([p("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[E("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[p("list-item",`
 padding: 12px 20px;
 `,[R("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("header, footer",`
 padding: 12px 20px;
 `,[R("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),f("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[R("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),p("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[f("prefix",`
 margin-right: 20px;
 flex: 0;
 `),f("suffix",`
 margin-left: 20px;
 flex: 0;
 `),f("main",`
 flex: 1;
 `),R("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),Me(p("list",`
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Fe(p("list",`
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),bt=Object.assign(Object.assign({},q.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),to=Q("n-list"),xt=M({name:"List",props:bt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ee(e),n=q("List","-list",gt,bo,e,o);X(to,{mergedClsPrefixRef:o});const a=k(()=>{const{common:{cubicBezierEaseInOut:d},self:{fontSize:s,textColor:l,color:b,colorModal:x,colorPopover:m,borderColor:u,borderColorModal:T,borderColorPopover:z,borderRadius:I}}=n.value;return{"--n-font-size":s,"--n-bezier":d,"--n-text-color":l,"--n-color":b,"--n-border-radius":I,"--n-border-color":u,"--n-border-color-modal":T,"--n-border-color-popover":z,"--n-color-modal":x,"--n-color-popover":m}}),i=t?oe("list",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),h("ul",{class:[`${t}-list`,this.bordered&&`${t}-list--bordered`,this.themeClass],style:this.cssVars},o.header?h("div",{class:`${t}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?h("div",{class:`${t}-list__footer`},o.footer()):null)}}),_t=M({name:"ListItem",setup(){const e=W(to,null);return e||Ue("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return h("li",{class:`${o}-list-item`},e.prefix?h("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?h("div",{class:`${o}-list-item__main`},e):null,e.suffix?h("div",{class:`${o}-list-item__suffix`},e.suffix()):null)}}),ie=Q("n-menu"),Te=Q("n-submenu"),$e=Q("n-menu-item-group"),se=8;function Ae(e){const o=W(ie),{props:t,mergedCollapsedRef:n}=o,a=W(Te,null),i=W($e,null),d=k(()=>t.mode==="horizontal"),s=k(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=k(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),b=k(()=>{var u;return!d.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),x=k(()=>{if(d.value)return;const{collapsedWidth:u,indent:T,rootIndent:z}=t,{root:I,isGroup:N}=e,L=z===void 0?T:z;if(I)return n.value?u/2-l.value/2:L;if(i)return T/2+i.paddingLeftRef.value;if(a)return(N?T/2:T)+a.paddingLeftRef.value}),m=k(()=>{const{collapsedWidth:u,indent:T,rootIndent:z}=t,{value:I}=l,{root:N}=e;return d.value||!N||!n.value?se:(z===void 0?T:z)+I+se-(u+I)/2});return{dropdownPlacement:s,activeIconSize:b,maxIconSize:l,paddingLeft:x,iconMarginRight:m,NMenu:o,NSubmenu:a}}const Ne={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ro=Object.assign(Object.assign({},Ne),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),yt=M({name:"MenuOptionGroup",props:ro,setup(e){X(Te,null);const o=Ae(e);X($e,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=W(ie);return function(){const{value:a}=t,i=o.paddingLeft.value,{nodeProps:d}=n,s=d==null?void 0:d(e.tmNode.rawNode);return h("div",{class:`${a}-menu-item-group`,role:"group"},h("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),Z(e.title),e.extra?h(xe,null," ",Z(e.extra)):null),h("div",null,e.tmNodes.map(l=>He(l,n))))}}}),no=M({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=W(ie);return{menuProps:o,style:k(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:k(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:a,expandIcon:i}}=this,d=t?t(o.rawNode):Z(this.icon);return h("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(o.rawNode):Z(this.title),this.extra||a?h("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):Z(this.extra)):null),this.showArrow?h(Ve,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):h(Yo,null)}):null)}}),io=Object.assign(Object.assign({},Ne),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ct=M({name:"Submenu",props:io,setup(e){const o=Ae(e),{NMenu:t,NSubmenu:n}=o,{props:a,mergedCollapsedRef:i,mergedThemeRef:d}=t,s=k(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:u}),l=F(!1);X(Te,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),X($e,null);function b(){const{onClick:u}=e;u&&u()}function x(){s.value||(i.value||t.toggleExpand(e.internalKey),b())}function m(u){l.value=u}return{menuProps:a,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:l,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:We(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:k(()=>a.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:k(()=>!s.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:m,handleClick:x}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,a=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:l,mergedDisabled:b,maxIconSize:x,activeIconSize:m,title:u,childActive:T,icon:z,handleClick:I,menuProps:{nodeProps:N},dropdownShow:L,iconMarginRight:V,tmNode:K,mergedClsPrefix:_}=this,g=N==null?void 0:N(K.rawNode);return h("div",Object.assign({},g,{class:[`${_}-menu-item`,g==null?void 0:g.class],role:"menuitem"}),h(no,{tmNode:K,paddingLeft:s,collapsed:l,disabled:b,iconMarginRight:V,maxIconSize:x,activeIconSize:m,title:u,showArrow:!d,childActive:T,clsPrefix:_,icon:z,hover:L,onClick:I}))},i=()=>h(xo,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:h("div",{class:`${o}-submenu-children`,role:"menu"},d.map(l=>He(l,this.menuProps)))}});return this.root?h(Qe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>h("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:i())}):h("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),i())}}),lo=Object.assign(Object.assign({},Ne),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),zt=M({name:"MenuOption",props:lo,setup(e){const o=Ae(e),{NSubmenu:t,NMenu:n}=o,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:d}=n,s=t?t.mergedDisabledRef:{value:!1},l=k(()=>s.value||e.disabled);function b(m){const{onClick:u}=e;u&&u(m)}function x(m){l.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),b(m))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:We(()=>e.root&&d.value&&a.mode!=="horizontal"&&!l.value),selected:k(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:x}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:a}}=this,i=a==null?void 0:a(t.rawNode);return h("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),h(Je,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):Z(this.title),trigger:()=>h(no,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),wt=M({name:"MenuDivider",setup(){const e=W(ie),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:h("div",{class:`${o.value}-menu-divider`})}}),St=Ce(ro),It=Ce(lo),Rt=Ce(io);function kt(e){return e.type==="divider"||e.type==="render"}function Pt(e){return e.type==="divider"}function He(e,o){const{rawNode:t}=e;if(kt(t))return Pt(t)?h(wt,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=o,{key:a,level:i,isGroup:d}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:a,internalKey:a,level:i,root:i===0,isGroup:d});return e.children?e.isGroup?h(yt,he(s,St,{tmNode:e,tmNodes:e.children,key:a})):h(Ct,he(s,Rt,{key:a,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):h(zt,he(s,It,{key:a,tmNode:e}))}const Oe=[R("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[R("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Be=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[R("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Tt=R([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[E("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[R("&::before","display: none;"),E("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[E("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[R("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),E("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[R("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),le("disabled",[le("selected, child-active",[R("&:focus-within",Be)]),E("selected",[J(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[R("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),E("child-active",[J(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[R("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",Be)]),p("menu-item-content-header",[R("a","color: var(--n-item-text-color-horizontal);")])])]),E("collapsed",[p("menu-item-content",[E("selected",[R("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("> *","z-index: 1;"),R("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),E("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),E("collapsed",[f("arrow","transform: rotate(0);")]),E("selected",[R("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[R("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),E("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[R("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),le("disabled",[le("selected, child-active",[R("&:focus-within",Oe)]),E("selected",[J(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[R("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),E("child-active",[J(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[R("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),E("selected",[J(null,[R("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,Oe)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[R("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[_o({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[R("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,o){return[E("hover",e,o),R("&:hover",e,o)]}const $t=Object.assign(Object.assign({},q.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),At=M({name:"Menu",props:$t,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ee(e),n=q("Menu","-menu",Tt,yo,e,o),a=W(Ze,null),i=k(()=>{var y;const{collapsed:P}=e;if(P!==void 0)return P;if(a){const{collapseModeRef:r,collapsedRef:S}=a;if(r.value==="width")return(y=S.value)!==null&&y!==void 0?y:!1}return!1}),d=k(()=>{const{keyField:y,childrenField:P}=e;return Vo(e.items||e.options,{getChildren(r){return r[P]},getKey(r){var S;return(S=r[y])!==null&&S!==void 0?S:r.name}})}),s=k(()=>new Set(d.value.treeNodes.map(y=>y.key))),{watchProps:l}=e,b=F(null);l!=null&&l.includes("defaultValue")?ce(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const x=de(e,"value"),m=ye(x,b),u=F([]),T=()=>{u.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(m.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?ce(T):T();const z=qo(e,["expandedNames","expandedKeys"]),I=ye(z,u),N=k(()=>d.value.treeNodes),L=k(()=>d.value.getPath(m.value).keyPath);X(ie,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:m,mergedExpandedKeysRef:I,activePathRef:L,mergedClsPrefixRef:o,isHorizontalRef:k(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:V,toggleExpand:_});function V(y,P){const{"onUpdate:value":r,onUpdateValue:S,onSelect:B}=e;S&&G(S,y,P),r&&G(r,y,P),B&&G(B,y,P),b.value=y}function K(y){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:r,onExpandedNamesChange:S,onOpenNamesChange:B}=e;P&&G(P,y),r&&G(r,y),S&&G(S,y),B&&G(B,y),u.value=y}function _(y){const P=Array.from(I.value),r=P.findIndex(S=>S===y);if(~r)P.splice(r,1);else{if(e.accordion&&s.value.has(y)){const S=P.findIndex(B=>s.value.has(B));S>-1&&P.splice(S,1)}P.push(y)}K(P)}const g=y=>{const P=d.value.getPath(y!=null?y:m.value,{includeSelf:!1}).keyPath;if(!P.length)return;const r=Array.from(I.value),S=new Set([...r,...P]);e.accordion&&s.value.forEach(B=>{S.has(B)&&!P.includes(B)&&S.delete(B)}),K(Array.from(S))},$=k(()=>{const{inverted:y}=e,{common:{cubicBezierEaseInOut:P},self:r}=n.value,{borderRadius:S,borderColorHorizontal:B,fontSize:ue,itemHeight:me,dividerColor:te}=r,c={"--n-divider-color":te,"--n-bezier":P,"--n-font-size":ue,"--n-border-color-horizontal":B,"--n-border-radius":S,"--n-item-height":me};return y?(c["--n-group-text-color"]=r.groupTextColorInverted,c["--n-color"]=r.colorInverted,c["--n-item-text-color"]=r.itemTextColorInverted,c["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,c["--n-item-text-color-active"]=r.itemTextColorActiveInverted,c["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,c["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,c["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,c["--n-item-icon-color"]=r.itemIconColorInverted,c["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,c["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,c["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,c["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,c["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,c["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,c["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,c["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,c["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,c["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,c["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,c["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,c["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,c["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,c["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,c["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,c["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,c["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,c["--n-arrow-color"]=r.arrowColorInverted,c["--n-arrow-color-hover"]=r.arrowColorHoverInverted,c["--n-arrow-color-active"]=r.arrowColorActiveInverted,c["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,c["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,c["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,c["--n-item-color-hover"]=r.itemColorHoverInverted,c["--n-item-color-active"]=r.itemColorActiveInverted,c["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,c["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(c["--n-group-text-color"]=r.groupTextColor,c["--n-color"]=r.color,c["--n-item-text-color"]=r.itemTextColor,c["--n-item-text-color-hover"]=r.itemTextColorHover,c["--n-item-text-color-active"]=r.itemTextColorActive,c["--n-item-text-color-child-active"]=r.itemTextColorChildActive,c["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,c["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,c["--n-item-icon-color"]=r.itemIconColor,c["--n-item-icon-color-hover"]=r.itemIconColorHover,c["--n-item-icon-color-active"]=r.itemIconColorActive,c["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,c["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,c["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,c["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,c["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,c["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,c["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,c["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,c["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,c["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,c["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,c["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,c["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,c["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,c["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,c["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,c["--n-arrow-color"]=r.arrowColor,c["--n-arrow-color-hover"]=r.arrowColorHover,c["--n-arrow-color-active"]=r.arrowColorActive,c["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,c["--n-arrow-color-child-active"]=r.arrowColorChildActive,c["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,c["--n-item-color-hover"]=r.itemColorHover,c["--n-item-color-active"]=r.itemColorActive,c["--n-item-color-active-hover"]=r.itemColorActiveHover,c["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),c}),A=t?oe("menu",k(()=>e.inverted?"a":"b"),$,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:z,uncontrolledExpanededKeys:u,mergedExpandedKeys:I,uncontrolledValue:b,mergedValue:m,activePath:L,tmNodes:N,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:$,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender,showOption:g}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;return n==null||n(),h("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>He(a,this.$props)))}});function Nt(){const e=W(Co,null);return e===null&&Ue("use-notification","No outer `n-notification-provider` found."),e}const Ht={name:"DarkModeSwitch"},Et=M({...Ht,setup(e){const o=ze(),{isDarkMode:t}=ne(o),n=()=>o.setTheme(!t.value);return(a,i)=>(H(),_e("div",{class:"flex-center text-18px hover:text-primary cursor-pointer",onClick:n},[v(t)?(H(),O(v(D),{key:0,type:"moon"})):(H(),O(v(D),{key:1,type:"sun"}))]))}}),Lt=j(" Quick profile "),Ot=["src"],Bt=j(" Chrome "),Mt=["src"],Ft=j(" Firefox "),jt=j(" Create "),Kt=M({__name:"QuickProfile",setup(e){const o=we(),t=qe(),{totalProfiles:n,profileLimit:a}=ne(o),i=F(1),d=F(!1),s=k(()=>n.value<a.value),l=F(fe.CHROME),b=async()=>{try{if(!s.value){window.$message.info("Profiles have reached limit.");return}isNaN(i.value)&&(i.value=1);const x=To("active-profile-table-tab","cloud");let m=!1;x.value==="cloud"&&(m=!0);const u=Array.from({length:i.value},(T,z)=>z);d.value=!0,await Promise.allSettled(u.map(async()=>{const T=await t.randomFingerprint(l.value);return await zo(T,m)})),await t.getProfiles(),i.value=1}catch{window.$message.warning("Create profile failed")}finally{d.value=!1}};return(x,m)=>{const u=Ge,T=No,z=Lo,I=Oo,N=Bo,L=Ie,V=Re;return H(),O(V,{trigger:"hover"},{trigger:C(()=>[w(u,{ghost:"",size:"small",type:"primary"},{icon:C(()=>[w(v(D),{type:"plus",size:"22"})]),default:C(()=>[Lt]),_:1})]),default:C(()=>[w(L,{vertical:""},{default:C(()=>[w(z,{value:l.value,"onUpdate:value":m[0]||(m[0]=K=>l.value=K),class:"flex justify-center",size:"large"},{default:C(()=>[w(T,{value:v(fe).CHROME,size:"large"},{default:C(()=>[Y("img",{class:"inline-block",src:v($o),width:"24"},null,8,Ot),Bt]),_:1},8,["value"]),w(T,{value:v(fe).FIREFOX,size:"large"},{default:C(()=>[Y("img",{class:"inline-block",src:v(Ao),width:"24"},null,8,Mt),Ft]),_:1},8,["value"])]),_:1},8,["value"]),w(N,{label:"Amount (Max 10)","label-placement":"left","show-feedback":!1},{default:C(()=>[w(I,{value:i.value,"onUpdate:value":m[1]||(m[1]=K=>i.value=K),min:1,max:10},null,8,["value"])]),_:1}),w(u,{block:"",type:"primary",loading:d.value,onClick:b},{default:C(()=>[jt]),_:1},8,["loading"])]),_:1})]),_:1})}}}),Dt=j(" Resources updating... "),Vt=j(" All resources are latest "),Ut=j(" Genlogin browser "),Wt=j(" Try again "),qt=j(" Firefox browser "),Gt=j(" Try again "),Yt=j(" Fingerprint "),Xt=j(" Try again "),Jt=j(" Proxy tool "),Qt=j(" Try again "),Zt=M({__name:"CheckUpdate",setup(e){const o=Se(),{resources:t,allResourcesUpdated:n}=ne(o);return(a,i)=>{const d=Mo,s=Ie,l=Fo,b=Re;return H(),O(b,{placement:"bottom-start",trigger:"hover"},{trigger:C(()=>[v(n)?(H(),O(d,{key:1,strong:"",type:"success"},{default:C(()=>[Vt]),_:1})):(H(),O(s,{key:0},{default:C(()=>[w(d,{strong:"",type:"warning"},{default:C(()=>[Dt]),_:1})]),_:1}))]),default:C(()=>[Y("ul",null,[Y("li",null,[w(s,null,{default:C(()=>[v(t).chromiumBrowser===v(U).UPDATING?(H(),O(l,{key:0,size:20})):v(t).chromiumBrowser===v(U).FAILED?(H(),O(v(D),{key:1,type:"failed",color:"#f0a020",size:20})):(H(),O(v(D),{key:2,type:"check",color:"#0e7a0d",size:20})),Ut,v(t).chromiumBrowser===v(U).FAILED?(H(),O(d,{key:3,class:"cursor-pointer",underline:"",type:"warning",onClick:v(o).checkUpdateChromeBrowser},{default:C(()=>[Wt]),_:1},8,["onClick"])):re("",!0)]),_:1})]),Y("li",null,[w(s,null,{default:C(()=>[v(t).firefoxBrowser===v(U).UPDATING?(H(),O(l,{key:0,size:20})):v(t).firefoxBrowser===v(U).FAILED?(H(),O(v(D),{key:1,type:"failed",color:"#f0a020",size:20})):(H(),O(v(D),{key:2,type:"check",color:"#0e7a0d",size:20})),qt,v(t).firefoxBrowser===v(U).FAILED?(H(),O(d,{key:3,class:"cursor-pointer",underline:"",type:"warning",onClick:v(o).checkUpdateFirefoxBrowser},{default:C(()=>[Gt]),_:1},8,["onClick"])):re("",!0)]),_:1})]),Y("li",null,[w(s,null,{default:C(()=>[v(t).fingerprint===v(U).UPDATING?(H(),O(l,{key:0,size:20})):v(t).fingerprint===v(U).FAILED?(H(),O(v(D),{key:1,type:"failed",color:"#f0a020",size:20})):(H(),O(v(D),{key:2,type:"check",color:"#0e7a0d",size:20})),Yt,v(t).fingerprint===v(U).FAILED?(H(),O(d,{key:3,class:"cursor-pointer",underline:"",type:"warning",onClick:v(o).checkUpdateFingerprint},{default:C(()=>[Xt]),_:1},8,["onClick"])):re("",!0)]),_:1})]),Y("li",null,[w(s,null,{default:C(()=>[v(t).proxyTool===v(U).UPDATING?(H(),O(l,{key:0,size:20})):v(t).proxyTool===v(U).FAILED?(H(),O(v(D),{key:1,type:"failed",color:"#f0a020",size:20})):(H(),O(v(D),{key:2,type:"check",color:"#0e7a0d",size:20})),Jt,v(t).proxyTool===v(U).FAILED?(H(),O(d,{key:3,class:"cursor-pointer",underline:"",type:"warning",onClick:v(o).checkUpdateProxyTool},{default:C(()=>[Qt]),_:1},8,["onClick"])):re("",!0)]),_:1})])])]),_:1})}}}),er={class:"text-xl"},or=j(" Dashboard help "),tr=M({__name:"LayoutHeader",setup(e){const o=Ye(),t=wo(),n=we(),a=qe(),i=Se(),d=ze(),{userInfo:s,totalProfiles:l,profileLimit:b}=ne(n),x=So({id:s.value.id,name:s.value.first_name||"",planName:s.value.plan.name||"",avatar:"https://avatars.dicebear.com/api/avataaars/xaw.svg"}),m=k(()=>[{key:"me",label:`Hey, ${x.name}!`},{key:"plan",label:x.planName},{key:"profile",label:"My Account"},{key:"settings",label:"Settings"},{key:"divider",type:"divider"},{key:"log",label:"Export log"},{key:"divider",type:"divider"},{key:"logout",label:"Sign out"}]),u=async z=>{if(z==="logout")n.logout(),d.setTheme(null),a.$patch({list:[]});else if(z==="profile")t.push({name:"main.myAccount",query:{tab:"General"}});else if(z==="settings")t.push({name:"main.myAccount",query:{tab:"Settings"}});else if(z==="me")window.$message.success(`Welcome back, ${x.name}!`);else if(z==="log"){const I=s.value.email;await Io(I)}else z==="check-update"?await i.checkUpdate():z==="clean-cache"&&(await Ro(s.value.id)?window.$message.success("Cache cleared!"):window.$message.warning("Clear cache failed!"))},T=()=>{t.push({name:"misc.blankPage",query:{goBack:o.name}})};return(z,I)=>{const N=Ge,L=Je,V=Ho,K=_t,_=xt,g=jo,$=Ko,A=Re,y=tt,P=Qe,r=Ie,S=ut;return H(),O(S,{bordered:""},{default:C(()=>[w(N,{text:"",onClick:T},{default:C(()=>[w(v(D),{type:"refresh",size:"20",depth:2})]),_:1}),w(Zt),w(r,{size:20,align:"center",style:{"line-height":"1"}},{default:C(()=>[w(Kt),Y("span",er,ae(v(l))+" / "+ae(v(b))+" Profiles",1),w(Et),w(L,null,{trigger:C(()=>[w(v(Xe),{to:{name:"main.home"}},{default:C(()=>[w(v(D),{type:"help",size:"22",depth:2})]),_:1},8,["to"])]),default:C(()=>[or]),_:1}),w(A,{trigger:"click",placement:"bottom-end",width:300},{trigger:C(()=>[w(V,{dot:"",processing:""},{default:C(()=>[w(v(D),{type:"notifications",size:"22",depth:2})]),_:1})]),default:C(()=>[w($,{type:"line","justify-content":"space-evenly",style:{"--pane-padding":"0"}},{default:C(()=>[w(g,{name:"notifications",tab:"Notifications (5)"},{default:C(()=>[w(_,{style:{margin:"0"}},{default:C(()=>[(H(),_e(xe,null,Le(5,B=>w(K,{key:B},{default:C(()=>[j(" Notification "+ae(B),1)]),_:2},1024)),64))]),_:1})]),_:1}),w(g,{name:"messages",tab:"Messages (6)"},{default:C(()=>[w(_,{style:{margin:"0"}},{default:C(()=>[(H(),_e(xe,null,Le(6,B=>w(K,{key:B},{default:C(()=>[j(" Message "+ae(B),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),w(P,{placement:"bottom-end","show-arrow":"",options:v(m),onSelect:u},{default:C(()=>[w(y,{size:"small",round:"",src:x==null?void 0:x.avatar},null,8,["src"])]),_:1},8,["options"])]),_:1})]),_:1})}}}),rr=Wo(tr,[["__scopeId","data-v-74f980d9"]]),nr=[{label:"Create Profile",name:"main.profile",icon:"plus"},{label:"Profiles",name:"main.profiles.cloud",icon:"home"},{label:"Automation",name:"main.automation.runScript",icon:"automation"},{label:"My account",name:"main.myAccount",icon:"user"},{label:"Captcha service",name:"main.captchaService",icon:"plugins"},{label:"Market",name:"main.market",icon:"market"},{label:"Support center",name:"main.supportCenter",icon:"comments"}],ir=""+new URL("logo.e2c8f3ac.png",import.meta.url).href,lr=["src"],ar=M({__name:"LayoutSidebar",setup(e){const o=ze(),t=Ye(),n=F(nr),a=x=>x.map(m=>({...m,key:m.name,label:m.name!=null?()=>h(Xe,{to:m},{default:()=>m.label}):m.label,icon:m.icon!=null?()=>h(D,{type:m.icon}):void 0,children:m.children&&a(m.children)})),i=F(""),d=F([]),s=k(()=>n.value?a(n.value):[]),l=x=>{const{meta:{alias:m},params:u,name:T}=t;return m&&m===x.name||T===x.name&&(x.params==null||JSON.stringify(u)===JSON.stringify(x.params))},b=x=>{let m=!1;for(const u of x)u.children!=null&&b(u.children)&&d.value.push(u.name),l(u)&&(i.value=u.name,m=!0);return m};return ce(()=>n.value&&b(n.value)),(x,m)=>{const u=At,T=pt;return H(),O(T,{class:"gen-login-menu",width:220,"native-scrollbar":!1,"collapsed-width":48,collapsed:v(o).menuToggle,"collapse-mode":"width","show-trigger":"arrow-circle",bordered:"","on-update:collapsed":z=>v(o).menuToggle=z},{default:C(()=>[Y("img",{class:"block logo",src:v(ir),alt:""},null,8,lr),w(u,{inverted:"",value:i.value,"default-expanded-keys":d.value,options:v(s),"root-indent":18,"onUpdate:value":m[0]||(m[0]=z=>{i.value=z})},null,8,["value","default-expanded-keys","options"])]),_:1},8,["collapsed","on-update:collapsed"])}}}),sr=j(" Your plan has expired. "),cr=j(" Upgrade here "),Er=M({__name:"LayoutMain",setup(e){const o=Nt(),t=we(),{planExpired:n}=ne(t),a=Se(),i=async()=>{const d=await a.checkUpdateSoft(),{status:s,version:l}=d;s&&o.info({content:`Version ${l} available`,meta:"Downloading...",duration:3e3})};return je(async()=>{await Po(),await i()}),(d,s)=>{const l=Go,b=Eo,x=ko("router-view"),m=st,u=at;return H(),O(u,{position:"absolute","has-sider":""},{default:C(()=>[w(v(ar)),w(u,null,{default:C(()=>[w(v(rr)),w(m,{"content-style":"padding: 12px 24px"},{default:C(()=>[v(n)?(H(),O(b,{key:0,type:"warning"},{default:C(()=>[sr,w(l,{onClick:v(t).upgradePlan},{default:C(()=>[cr]),_:1},8,["onClick"])]),_:1})):re("",!0),w(x)]),_:1})]),_:1})]),_:1})}}});export{Er as default};
