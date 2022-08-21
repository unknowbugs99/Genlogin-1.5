import{d as X,r as P,aL as it,h as s,aM as ot,aN as U,aO as st,c as lt,g as me,I as dt,j as V,au as ct,K as ft,D as bt,J as ut,av as vt,aP as pt,a as b,A as R,b as T,f as L,Q as ht,u as gt,k as xe,aJ as Y,w as q,C as mt,E as j,m as xt,l as yt,p as de,V as ce,aQ as wt,G as H,am as J,s as E,aR as Rt,aS as Ct,aq as St,aT as Tt}from"./index.6e57c2f1.js";import{A as zt}from"./Add.fbc88024.js";import{u as fe}from"./use-compitable.be4359a7.js";import{u as $t}from"./use-merged-state.14d1217d.js";import{c as Pt,a as be,o as _t}from"./cssr.27de2d53.js";const At=be(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[be("&::-webkit-scrollbar",{width:0,height:0})]),Wt=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function a(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const r=it();return At.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Pt,ssr:r}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...i){var u;(u=e.value)===null||u===void 0||u.scrollTo(...i)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Bt=/\s/;function Lt(e){for(var a=e.length;a--&&Bt.test(e.charAt(a)););return a}var Et=/^\s+/;function kt(e){return e&&e.slice(0,Lt(e)+1).replace(Et,"")}var ue=0/0,jt=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,Ft=parseInt;function ve(e){if(typeof e=="number")return e;if(ot(e))return ue;if(U(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=U(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=kt(e);var r=It.test(e);return r||Ot.test(e)?Ft(e.slice(2),r?2:8):jt.test(e)?ue:+e}var Dt=function(){return st.Date.now()};const Q=Dt;var Mt="Expected a function",Nt=Math.max,Ht=Math.min;function Vt(e,a,r){var l,i,u,v,d,m,x=0,y=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(Mt);a=ve(a)||0,U(r)&&(y=!!r.leading,h="maxWait"in r,u=h?Nt(ve(r.maxWait)||0,a):u,p="trailing"in r?!!r.trailing:p);function w(g){var A=l,W=i;return l=i=void 0,x=g,v=e.apply(W,A),v}function C(g){return x=g,d=setTimeout(z,a),y?w(g):v}function S(g){var A=g-m,W=g-x,k=a-A;return h?Ht(k,u-W):k}function c(g){var A=g-m,W=g-x;return m===void 0||A>=a||A<0||h&&W>=u}function z(){var g=Q();if(c(g))return $(g);d=setTimeout(z,S(g))}function $(g){return d=void 0,p&&l?w(g):(l=i=void 0,v)}function _(){d!==void 0&&clearTimeout(d),x=0,l=m=i=d=void 0}function D(){return d===void 0?v:$(Q())}function F(){var g=Q(),A=c(g);if(l=arguments,i=this,m=g,A){if(d===void 0)return C(m);if(h)return clearTimeout(d),d=setTimeout(z,a),w(m)}return d===void 0&&(d=setTimeout(z,a)),v}return F.cancel=_,F.flush=D,F}var Ut="Expected a function";function Z(e,a,r){var l=!0,i=!0;if(typeof e!="function")throw new TypeError(Ut);return U(r)&&(l="leading"in r?!!r.leading:l,i="trailing"in r?!!r.trailing:i),Vt(e,a,{leading:l,maxWait:a,trailing:i})}const ae=lt("n-tabs"),ye={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ea=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ye,setup(e){const a=me(ae,null);return a||dt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Xt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},pt(ye,["displayDirective"])),te=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Xt,setup(e){const{mergedClsPrefixRef:a,valueRef:r,typeRef:l,closableRef:i,tabStyleRef:u,tabChangeIdRef:v,onBeforeLeaveRef:d,triggerRef:m,handleAdd:x,activateTab:y,handleClose:h}=me(ae);return{trigger:m,mergedClosable:V(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?i.value:p}),style:u,clsPrefix:a,value:r,type:l,handleClose(p){p.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:p}=e,w=++v.id;if(p!==r.value){const{value:C}=d;C?Promise.resolve(C(e.name,r.value)).then(S=>{S&&v.id===w&&y(p)}):y(p)}}}},render(){const{internalAddable:e,clsPrefix:a,name:r,disabled:l,label:i,tab:u,value:v,mergedClosable:d,style:m,trigger:x,$slots:{default:y}}=this,h=i!=null?i:u;return s("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${a}-tabs-tab-pad`}):null,s("div",Object.assign({key:r,"data-name":r,"data-disabled":l?!0:void 0},ct({class:[`${a}-tabs-tab`,v===r&&`${a}-tabs-tab--active`,l&&`${a}-tabs-tab--disabled`,d&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${a}-tabs-tab__label`},e?s(ft,null,s("div",{class:`${a}-tabs-tab__height-placeholder`},"\xA0"),s(bt,{clsPrefix:a},{default:()=>s(zt,null)})):y?y():typeof h=="object"?h:ut(h!=null?h:r)),d&&this.type==="card"?s(vt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:l}):null))}}),Gt=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[R("segment-type",[b("tabs-rail",[T("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),R("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R("shadow-before",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-after",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),T("&::before",`
 left: 0;
 `),T("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),R("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),R("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),R("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),R("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[R("line-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),R("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[R("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ht("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),R("closable","padding-right: 6px;"),R("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),R("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),Kt=Object.assign(Object.assign({},xe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ta=X({name:"Tabs",props:Kt,setup(e,{slots:a}){var r,l,i,u;const{mergedClsPrefixRef:v,inlineThemeDisabled:d}=gt(e),m=xe("Tabs","-tabs",Gt,wt,e,v),x=P(null),y=P(null),h=P(null),p=P(null),w=P(null),C=P(!0),S=P(!0),c=fe(e,["labelSize","size"]),z=fe(e,["activeName","value"]),$=P((l=(r=z.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&l!==void 0?l:a.default?(u=(i=Y(a.default())[0])===null||i===void 0?void 0:i.props)===null||u===void 0?void 0:u.name:null),_=$t(z,$),D={id:0},F=V(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});q(_,()=>{D.id=0,W()});function g(){var t;const{value:n}=_;return n===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${n}"]`)}function A(t){if(e.type==="card")return;const{value:n}=y;if(!!n&&t){const o=`${v.value}-tabs-bar--disabled`,{barWidth:f}=e;if(t.dataset.disabled==="true"?n.classList.add(o):n.classList.remove(o),typeof f=="number"&&t.offsetWidth>=f){const O=Math.floor((t.offsetWidth-f)/2)+t.offsetLeft;n.style.left=`${O}px`,n.style.maxWidth=`${f}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}}function W(){if(e.type==="card")return;const t=g();t&&A(t)}const k=P(null);let G=0,B=null;function we(t){const n=k.value;if(n){G=t.getBoundingClientRect().height;const o=`${G}px`,f=()=>{n.style.height=o,n.style.maxHeight=o};B?(f(),B(),B=null):B=f}}function Re(t){const n=k.value;if(n){const o=t.getBoundingClientRect().height,f=()=>{document.body.offsetHeight,n.style.maxHeight=`${o}px`,n.style.height=`${Math.max(G,o)}px`};B?(B(),B=null,f()):B=f}}function Ce(){const t=k.value;t&&(t.style.maxHeight="",t.style.height="")}const ne={value:[]},re=P("next");function Se(t){const n=_.value;let o="next";for(const f of ne.value){if(f===n)break;if(f===t){o="prev";break}}re.value=o,Te(t)}function Te(t){const{onActiveNameChange:n,onUpdateValue:o,"onUpdate:value":f}=e;n&&H(n,t),o&&H(o,t),f&&H(f,t),$.value=t}function ze(t){const{onClose:n}=e;n&&H(n,t)}function ie(){const{value:t}=y;if(!t)return;const n="transition-disabled";t.classList.add(n),W(),t.classList.remove(n)}let oe=0;function $e(t){var n;if(t.contentRect.width===0&&t.contentRect.height===0||oe===t.contentRect.width)return;oe=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&ie(),o!=="segment"&&K((n=w.value)===null||n===void 0?void 0:n.$el)}const Pe=Z($e,64);q([()=>e.justifyContent,()=>e.size],()=>{J(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ie()})});const M=P(!1);function _e(t){var n;const{target:o,contentRect:{width:f}}=t,O=o.parentElement.offsetWidth;if(!M.value)O<f&&(M.value=!0);else{const{value:N}=p;if(!N)return;O-f>N.$el.offsetWidth&&(M.value=!1)}K((n=w.value)===null||n===void 0?void 0:n.$el)}const Ae=Z(_e,64);function We(){const{onAdd:t}=e;t&&t(),J(()=>{const n=g(),{value:o}=w;!n||!o||o.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function K(t){if(!t)return;const{scrollLeft:n,scrollWidth:o,offsetWidth:f}=t;C.value=n<=0,S.value=n+f>=o}const Be=Z(t=>{K(t.target)},64);mt(ae,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:_,tabChangeIdRef:D,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:Se,handleClose:ze,handleAdd:We}),_t(()=>{W()}),xt(()=>{const{value:t}=h;if(!t)return;const{value:n}=v,o=`${n}-tabs-nav-scroll-wrapper--shadow-before`,f=`${n}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(o):t.classList.add(o),S.value?t.classList.remove(f):t.classList.add(f)});const se=P(null);q(_,()=>{if(e.type==="segment"){const t=se.value;t&&J(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Le={syncBarPosition:()=>{W()}},le=V(()=>{const{value:t}=c,{type:n}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],f=`${t}${o}`,{self:{barColor:O,closeIconColor:N,closeIconColorHover:Ee,closeIconColorPressed:ke,tabColor:je,tabBorderColor:Ie,paneTextColor:Oe,tabFontWeight:Fe,tabBorderRadius:De,tabFontWeightActive:Me,colorSegment:Ne,fontWeightStrong:He,tabColorSegment:Ve,closeSize:Ue,closeIconSize:Xe,closeColorHover:Ge,closeColorPressed:Ke,closeBorderRadius:Ye,[E("panePadding",t)]:qe,[E("tabPadding",f)]:Je,[E("tabGap",f)]:Qe,[E("tabTextColor",n)]:Ze,[E("tabTextColorActive",n)]:et,[E("tabTextColorHover",n)]:tt,[E("tabTextColorDisabled",n)]:at,[E("tabFontSize",t)]:nt},common:{cubicBezierEaseInOut:rt}}=m.value;return{"--n-bezier":rt,"--n-color-segment":Ne,"--n-bar-color":O,"--n-tab-font-size":nt,"--n-tab-text-color":Ze,"--n-tab-text-color-active":et,"--n-tab-text-color-disabled":at,"--n-tab-text-color-hover":tt,"--n-pane-text-color":Oe,"--n-tab-border-color":Ie,"--n-tab-border-radius":De,"--n-close-size":Ue,"--n-close-icon-size":Xe,"--n-close-color-hover":Ge,"--n-close-color-pressed":Ke,"--n-close-border-radius":Ye,"--n-close-icon-color":N,"--n-close-icon-color-hover":Ee,"--n-close-icon-color-pressed":ke,"--n-tab-color":je,"--n-tab-font-weight":Fe,"--n-tab-font-weight-active":Me,"--n-tab-padding":Je,"--n-tab-gap":Qe,"--n-pane-padding":qe,"--n-font-weight-strong":He,"--n-tab-color-segment":Ve}}),I=d?yt("tabs",V(()=>`${c.value[0]}${e.type[0]}`),le,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:_,renderedNames:new Set,tabsRailElRef:se,tabsPaneWrapperRef:k,tabsElRef:x,barElRef:y,addTabInstRef:p,xScrollInstRef:w,scrollWrapperElRef:h,addTabFixed:M,tabWrapperStyle:F,handleNavResize:Pe,mergedSize:c,handleScroll:Be,handleTabsResize:Ae,cssVars:d?void 0:le,themeClass:I==null?void 0:I.themeClass,animationDirection:re,renderNameListRef:ne,onAnimationBeforeLeave:we,onAnimationEnter:Re,onAnimationAfterEnter:Ce,onRender:I==null?void 0:I.onRender},Le)},render(){const{mergedClsPrefix:e,type:a,addTabFixed:r,addable:l,mergedSize:i,renderNameListRef:u,onRender:v,$slots:{default:d,prefix:m,suffix:x}}=this;v==null||v();const y=d?Y(d()).filter(c=>c.type.__TAB_PANE__===!0):[],h=d?Y(d()).filter(c=>c.type.__TAB__===!0):[],p=!h.length,w=a==="card",C=a==="segment",S=!w&&!C&&this.justifyContent;return u.value=[],s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${i}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav`]},de(m,c=>c&&s("div",{class:`${e}-tabs-nav__prefix`},c)),C?s("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?y.map((c,z)=>(u.value.push(c.props.name),s(te,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0}),c.children?{default:c.children.tab}:void 0))):h.map((c,z)=>(u.value.push(c.props.name),z===0?c:ge(c)))):s(ce,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},s(Wt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const c=s("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?y.map(($,_)=>(u.value.push($.props.name),ee(s(te,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&(!S||S==="center"||S==="start"||S==="end")}),$.children?{default:$.children.tab}:void 0)))):h.map(($,_)=>(u.value.push($.props.name),ee(_!==0&&!S?ge($):$))),!r&&l&&w?he(l,(p?y.length:h.length)!==0):null,S?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let z=c;return w&&l&&(z=s(ce,{onResize:this.handleTabsResize},{default:()=>c})),s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},z,w?s("div",{class:`${e}-tabs-pad`}):null,w?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&l&&w?he(l,!0):null,de(x,c=>c&&s("div",{class:`${e}-tabs-nav__suffix`},c))),p&&(this.animated?s("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},pe(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):pe(y,this.mergedValue,this.renderedNames)))}});function pe(e,a,r,l,i,u,v){const d=[];return e.forEach(m=>{const{name:x,displayDirective:y,"display-directive":h}=m.props,p=C=>y===C||h===C,w=a===x;if(m.key!==void 0&&(m.key=x),w||p("show")||p("show:lazy")&&r.has(x)){r.has(x)||r.add(x);const C=!p("if");d.push(C?Rt(m,[[Ct,w]]):m)}}),v?s(St,{name:`${v}-transition`,onBeforeLeave:l,onEnter:i,onAfterEnter:u},{default:()=>d}):d}function he(e,a){return s(te,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function ge(e){const a=Tt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function ee(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ea as _,ta as a,te as b};
