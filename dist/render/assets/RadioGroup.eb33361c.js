import{_ as ee,p as oe}from"./Popover.1a4e3ffd.js";import{d as j,k as I,r as R,j as F,h as E,aG as te,c as re,aH as $,g as ne,E as V,L as O,u as A,aI as ae,G as S,a as T,f as m,A as k,b as B,Q as P,C as ie,at as se,l as de,aJ as ue,aK as le,s as U}from"./index.6e57c2f1.js";import{u as D}from"./use-merged-state.14d1217d.js";import{g as ce}from"./Space.2af8f31d.js";const be=Object.assign(Object.assign({},oe),I.props),ke=j({name:"Tooltip",props:be,__popover__:!0,setup(e){const n=I("Tooltip","-tooltip",void 0,te,e),t=R(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(a){t.value.setShow(a)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:F(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return E(ee,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),pe={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(ae("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},G=re("n-radio-group");function fe(e){const n=$(e,{mergedSize(r){const{size:i}=e;if(i!==void 0)return i;if(o){const{mergedSizeRef:{value:l}}=o;if(l!==void 0)return l}return r?r.mergedSize.value:"medium"},mergedDisabled(r){return!!(e.disabled||o!=null&&o.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:d}=n,a=R(null),f=R(null),o=ne(G,null),u=R(e.defaultChecked),b=V(e,"checked"),h=D(b,u),v=O(()=>o?o.valueRef.value===e.value:h.value),x=O(()=>{const{name:r}=e;if(r!==void 0)return r;if(o)return o.nameRef.value}),p=R(!1);function C(){if(o){const{doUpdateValue:r}=o,{value:i}=e;S(r,i)}else{const{onUpdateChecked:r,"onUpdate:checked":i}=e,{nTriggerFormInput:l,nTriggerFormChange:s}=n;r&&S(r,!0),i&&S(i,!0),l(),s(),u.value=!0}}function g(){d.value||v.value||C()}function y(){g()}function _(){p.value=!1}function z(){p.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:A(e).mergedClsPrefixRef,inputRef:a,labelRef:f,mergedName:x,mergedDisabled:d,uncontrolledChecked:u,renderSafeChecked:v,focus:p,mergedSize:t,handleRadioInputChange:y,handleRadioInputBlur:_,handleRadioInputFocus:z}}fe.props=pe;const he=T("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[k("checked",{backgroundColor:"var(--n-button-border-color-active)"}),k("disabled",{opacity:"var(--n-opacity-disabled)"})]),k("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[T("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),T("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[T("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),B("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),B("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),P("disabled",`
 cursor: pointer;
 `,[B("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),P("checked",{color:"var(--n-button-text-color-hover)"})]),k("focus",[B("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),k("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ve(e,n,t){var d;const a=[];let f=!1;for(let o=0;o<e.length;++o){const u=e[o],b=(d=u.type)===null||d===void 0?void 0:d.name;b==="RadioButton"&&(f=!0);const h=u.props;if(b!=="RadioButton"){a.push(u);continue}if(o===0)a.push(u);else{const v=a[a.length-1].props,x=n===v.value,p=v.disabled,C=n===h.value,g=h.disabled,y=(x?2:0)+(p?0:1),_=(C?2:0)+(g?0:1),z={[`${t}-radio-group__splitor--disabled`]:p,[`${t}-radio-group__splitor--checked`]:x},r={[`${t}-radio-group__splitor--disabled`]:g,[`${t}-radio-group__splitor--checked`]:C},i=y<_?r:z;a.push(E("div",{class:[`${t}-radio-group__splitor`,i]}),u)}}return{children:a,isButtonGroup:f}}const ge=Object.assign(Object.assign({},I.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ye=j({name:"RadioGroup",props:ge,setup(e){const n=R(null),{mergedSizeRef:t,mergedDisabledRef:d,nTriggerFormChange:a,nTriggerFormInput:f,nTriggerFormBlur:o,nTriggerFormFocus:u}=$(e),{mergedClsPrefixRef:b,inlineThemeDisabled:h,mergedRtlRef:v}=A(e),x=I("Radio","-radio-group",he,le,e,b),p=R(e.defaultValue),C=V(e,"value"),g=D(C,p);function y(s){const{onUpdateValue:c,"onUpdate:value":w}=e;c&&S(c,s),w&&S(w,s),p.value=s,a(),f()}function _(s){const{value:c}=n;!c||c.contains(s.relatedTarget)||u()}function z(s){const{value:c}=n;!c||c.contains(s.relatedTarget)||o()}ie(G,{mergedClsPrefixRef:b,nameRef:V(e,"name"),valueRef:g,disabledRef:d,mergedSizeRef:t,doUpdateValue:y});const r=se("Radio",v,b),i=F(()=>{const{value:s}=t,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:w,buttonBorderColorActive:H,buttonBorderRadius:M,buttonBoxShadow:K,buttonBoxShadowFocus:N,buttonBoxShadowHover:L,buttonColorActive:J,buttonTextColor:Q,buttonTextColorActive:q,buttonTextColorHover:W,opacityDisabled:X,[U("buttonHeight",s)]:Y,[U("fontSize",s)]:Z}}=x.value;return{"--n-font-size":Z,"--n-bezier":c,"--n-button-border-color":w,"--n-button-border-color-active":H,"--n-button-border-radius":M,"--n-button-box-shadow":K,"--n-button-box-shadow-focus":N,"--n-button-box-shadow-hover":L,"--n-button-color-active":J,"--n-button-text-color":Q,"--n-button-text-color-hover":W,"--n-button-text-color-active":q,"--n-height":Y,"--n-opacity-disabled":X}}),l=h?de("radio-group",F(()=>t.value[0]),i,e):void 0;return{selfElRef:n,rtlEnabled:r,mergedClsPrefix:b,mergedValue:g,handleFocusout:z,handleFocusin:_,cssVars:h?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedValue:n,mergedClsPrefix:t,handleFocusin:d,handleFocusout:a}=this,{children:f,isButtonGroup:o}=ve(ue(ce(this)),n,t);return(e=this.onRender)===null||e===void 0||e.call(this),E("div",{onFocusin:d,onFocusout:a,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,o&&`${t}-radio-group--button-group`],style:this.cssVars},f)}});export{ke as _,ye as a,fe as s};
