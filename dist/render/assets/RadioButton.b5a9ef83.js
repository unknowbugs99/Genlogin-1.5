import{d as _,r as $,j as S,w as L,E as N,h as r,am as A,b as f,an as ne,a as m,ao as te,A as x,f as g,ap as re,M as F,aq as ae,x as Y,ar as se,z,as as R,R as le,u as M,k,at as D,l as j,au as ie,av as ce,aw as V,p as q,ax as de,s as C,D as ue,ay as fe,az as me,aA as he,aB as be,aC as W,o as pe,aD as ve,aE as ge,aF as Ce,t as xe}from"./index.6e57c2f1.js";import{g as ye}from"./Tag.f1f916fe.js";import{s as O}from"./RadioGroup.eb33361c.js";const H=_({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const o=$(null),a=$(e.value),u=$(e.value),n=$("up"),t=$(!1),h=S(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${n.value}-scroll`:null),c=S(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${n.value}-scroll`:null);L(N(e,"value"),(l,d)=>{a.value=d,u.value=l,A(b)});function b(){const l=e.newOriginalNumber,d=e.oldOriginalNumber;d===void 0||l===void 0||(l>d?p("up"):d>l&&p("down"))}function p(l){n.value=l,t.value=!1,A(()=>{var d;(d=o.value)===null||d===void 0||d.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:l}=e;return r("span",{ref:o,class:`${l}-base-slot-machine-number`},a.value!==null?r("span",{class:[`${l}-base-slot-machine-old-number ${l}-base-slot-machine-old-number--top`,c.value]},a.value):null,r("span",{class:[`${l}-base-slot-machine-current-number`,h.value]},r("span",{ref:"numberWrapper",class:[`${l}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${l}-base-slot-machine-current-number__inner--not-number`]},u.value)),a.value!==null?r("span",{class:[`${l}-base-slot-machine-old-number ${l}-base-slot-machine-old-number--bottom`,c.value]},a.value):null)}}}),{cubicBezierEaseOut:E}=ne;function we({duration:e=".2s"}={}){return[f("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${E},
 max-width ${e} ${E},
 transform ${e} ${E}
 `}),f("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${E},
 max-width ${e} ${E},
 transform ${e} ${E}
 `}),f("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),f("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),f("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),f("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const $e=f([f("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),f("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),f("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),f("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),m("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[m("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[we({duration:".2s"}),te({duration:".2s",delay:"0s"}),m("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[x("top",{transform:"translateY(-100%)"}),x("bottom",{transform:"translateY(100%)"}),x("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),m("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[x("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),g("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[x("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Ie=_({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){re("-base-slot-machine",$e,N(e,"clsPrefix"));const o=$(),a=$(),u=S(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const n=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)n.push(t%10),t/=10,t=Math.floor(t);return n.reverse(),n});return L(N(e,"value"),(n,t)=>{typeof n=="string"?(a.value=void 0,o.value=void 0):typeof t=="string"?(a.value=n,o.value=void 0):(a.value=n,o.value=t)}),()=>{const{value:n,clsPrefix:t}=e;return typeof n=="number"?r("span",{class:`${t}-base-slot-machine`},r(ae,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((h,c)=>r(H,{clsPrefix:t,key:u.value.length-c-1,oldOriginalNumber:o.value,newOriginalNumber:a.value,value:h}))}),r(F,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<n?r(H,{clsPrefix:t,value:"+"}):null})):r("span",{class:`${t}-base-slot-machine`},n)}}}),ze=e=>{const{lineHeight:o,borderRadius:a,fontWeightStrong:u,baseColor:n,dividerColor:t,actionColor:h,textColor1:c,textColor2:b,closeColorHover:p,closeColorPressed:l,closeIconColor:d,closeIconColorHover:i,closeIconColorPressed:s,infoColor:v,successColor:y,warningColor:P,errorColor:I,fontSize:T}=e;return Object.assign(Object.assign({},se),{fontSize:T,lineHeight:o,titleFontWeight:u,borderRadius:a,border:`1px solid ${t}`,color:h,titleTextColor:c,iconColor:b,contentTextColor:b,closeBorderRadius:a,closeColorHover:p,closeColorPressed:l,closeIconColor:d,closeIconColorHover:i,closeIconColorPressed:s,borderInfo:`1px solid ${z(n,R(v,{alpha:.25}))}`,colorInfo:z(n,R(v,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:v,contentTextColorInfo:b,closeColorHoverInfo:p,closeColorPressedInfo:l,closeIconColorInfo:d,closeIconColorHoverInfo:i,closeIconColorPressedInfo:s,borderSuccess:`1px solid ${z(n,R(y,{alpha:.25}))}`,colorSuccess:z(n,R(y,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:y,contentTextColorSuccess:b,closeColorHoverSuccess:p,closeColorPressedSuccess:l,closeIconColorSuccess:d,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:s,borderWarning:`1px solid ${z(n,R(P,{alpha:.33}))}`,colorWarning:z(n,R(P,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:P,contentTextColorWarning:b,closeColorHoverWarning:p,closeColorPressedWarning:l,closeIconColorWarning:d,closeIconColorHoverWarning:i,closeIconColorPressedWarning:s,borderError:`1px solid ${z(n,R(I,{alpha:.25}))}`,colorError:z(n,R(I,{alpha:.08})),titleTextColorError:c,iconColorError:I,contentTextColorError:b,closeColorHoverError:p,closeColorPressedError:l,closeIconColorError:d,closeIconColorHoverError:i,closeIconColorPressedError:s})},Re={name:"Alert",common:Y,self:ze},Se=Re,Pe=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[x("closable",[m("alert-body",[g("title",`
 padding-right: 24px;
 `)])]),g("icon",{color:"var(--n-icon-color)"}),m("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[g("title",{color:"var(--n-title-text-color)"}),g("content",{color:"var(--n-content-text-color)"})]),le({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),g("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),g("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),x("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[g("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[f("& +",[g("content",{marginTop:"9px"})])]),g("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),g("icon",{transition:"color .3s var(--n-bezier)"})]),Ee=Object.assign(Object.assign({},k.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),He=_({name:"Alert",inheritAttrs:!1,props:Ee,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a,mergedRtlRef:u}=M(e),n=k("Alert","-alert",Pe,Se,e,o),t=D("Alert",u,o),h=S(()=>{const{common:{cubicBezierEaseInOut:i},self:s}=n.value,{fontSize:v,borderRadius:y,titleFontWeight:P,lineHeight:I,iconSize:T,iconMargin:B,iconMarginRtl:X,closeIconSize:U,closeBorderRadius:Z,closeSize:G,closeMargin:K,closeMarginRtl:J,padding:Q}=s,{type:w}=e,{left:ee,right:oe}=de(B);return{"--n-bezier":i,"--n-color":s[C("color",w)],"--n-close-icon-size":U,"--n-close-border-radius":Z,"--n-close-color-hover":s[C("closeColorHover",w)],"--n-close-color-pressed":s[C("closeColorPressed",w)],"--n-close-icon-color":s[C("closeIconColor",w)],"--n-close-icon-color-hover":s[C("closeIconColorHover",w)],"--n-close-icon-color-pressed":s[C("closeIconColorPressed",w)],"--n-icon-color":s[C("iconColor",w)],"--n-border":s[C("border",w)],"--n-title-text-color":s[C("titleTextColor",w)],"--n-content-text-color":s[C("contentTextColor",w)],"--n-line-height":I,"--n-border-radius":y,"--n-font-size":v,"--n-title-font-weight":P,"--n-icon-size":T,"--n-icon-margin":B,"--n-icon-margin-rtl":X,"--n-close-size":G,"--n-close-margin":K,"--n-close-margin-rtl":J,"--n-padding":Q,"--n-icon-margin-left":ee,"--n-icon-margin-right":oe}}),c=a?j("alert",S(()=>e.type[0]),h,e):void 0,b=$(!0),p=()=>{const{onAfterLeave:i,onAfterHide:s}=e;i&&i(),s&&s()};return{rtlEnabled:t,mergedClsPrefix:o,visible:b,handleCloseClick:()=>{var i;Promise.resolve((i=e.onClose)===null||i===void 0?void 0:i.call(e)).then(s=>{s!==!1&&(b.value=!1)})},handleAfterLeave:()=>{p()},mergedTheme:n,cssVars:a?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),r(F,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:a}=this,u={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},ie(this.$attrs,u)),this.closable&&r(ce,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&r("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},V(a.icon,()=>[r(ue,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return r(be,null);case"info":return r(he,null);case"warning":return r(me,null);case"error":return r(fe,null);default:return null}}})])),r("div",{class:`${o}-alert-body`},q(a.header,n=>{const t=n||this.title;return t?r("div",{class:`${o}-alert-body__title`},t):null}),a.default&&r("div",{class:`${o}-alert-body__content`},a))):null}})}}),Te=e=>{const{errorColor:o,infoColor:a,successColor:u,warningColor:n,fontFamily:t}=e;return{color:o,colorInfo:a,colorSuccess:u,colorError:o,colorWarning:n,fontSize:"12px",fontFamily:t}},_e={name:"Badge",common:Y,self:Te},Be=_e,ke=f([f("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),m("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[x("as-is",[m("badge-sup",{position:"static",transform:"translateX(0)"},[W({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),x("dot",[m("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[f("::before","border-radius: 4px;")])]),m("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[W({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),m("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),f("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ne=Object.assign(Object.assign({},k.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String}),Le=_({name:"Badge",props:Ne,setup(e,{slots:o}){const{mergedClsPrefixRef:a,inlineThemeDisabled:u,mergedRtlRef:n}=M(e),t=k("Badge","-badge",ke,Be,e,a),h=$(!1),c=()=>{h.value=!0},b=()=>{h.value=!1},p=S(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!Ce(o.value)));pe(()=>{p.value&&(h.value=!0)});const l=D("Badge",n,a),d=S(()=>{const{type:s,color:v}=e,{common:{cubicBezierEaseInOut:y,cubicBezierEaseOut:P},self:{[C("color",s)]:I,fontFamily:T,fontSize:B}}=t.value;return{"--n-font-size":B,"--n-font-family":T,"--n-color":v||I,"--n-ripple-color":v||I,"--n-bezier":y,"--n-ripple-bezier":P}}),i=u?j("badge",S(()=>{let s="";const{type:v,color:y}=e;return v&&(s+=v[0]),y&&(s+=xe(y)),s}),d,e):void 0;return{rtlEnabled:l,mergedClsPrefix:a,appeared:h,showBadge:p,handleAfterEnter:c,handleAfterLeave:b,cssVars:u?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o,onRender:a,themeClass:u,$slots:n}=this;a==null||a();const t=(e=n.default)===null||e===void 0?void 0:e.call(n);return r("div",{class:[`${o}-badge`,this.rtlEnabled&&`${o}-badge--rtl`,u,{[`${o}-badge--dot`]:this.dot,[`${o}-badge--as-is`]:!t}],style:this.cssVars},t,r(ve,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?r("sup",{class:`${o}-badge-sup`,title:ye(this.value)},V(n.value,()=>[this.dot?null:r(Ie,{clsPrefix:o,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?r(ge,{clsPrefix:o}):null):null}))}}),Fe=_({name:"RadioButton",props:O.props,setup(e){return O(e)},render(){const{mergedClsPrefix:e}=this;return r("label",{class:[`${e}-radio-button`,{[`${e}-radio-button--disabled`]:this.mergedDisabled,[`${e}-radio-button--checked`]:this.renderSafeChecked,[`${e}-radio-button--focus`]:this.focus}]},r("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),r("div",{class:`${e}-radio-button__state-border`}),q(this.$slots.default,o=>!o&&!this.label?null:r("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}});export{Fe as _,Le as a,He as b};
