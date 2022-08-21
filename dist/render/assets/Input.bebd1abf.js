import{d as Z,h as i,c as er,r as b,w as ue,g as or,j as F,b_ as rr,a as g,f as s,b as y,A,Q as H,u as tr,k as ze,E as nr,aH as ar,L as pe,o as ir,b3 as lr,m as ge,C as sr,at as cr,l as ur,p as q,aw as se,N as dr,K as hr,V as fr,bK as vr,am as be,aY as xe,s as ce,ax as pr,D as me,G as m,aW as we}from"./index.6e57c2f1.js";import{u as gr,N as ye,a as br}from"./FormItem.5b33b5bf.js";import{u as xr}from"./use-merged-state.14d1217d.js";const mr=Z({name:"Eye",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),i("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),wr=Z({name:"EyeOff",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),i("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),i("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),i("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),i("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Ae=er("n-input");function yr(r){let v=0;for(const a of r)v++;return v}function J(r){return r===""||r==null}function Cr(r){const v=b(null);function a(){const{value:p}=r;if(!p||!p.focus){S();return}const{selectionStart:l,selectionEnd:t,value:c}=p;if(l==null||t==null){S();return}v.value={start:l,end:t,beforeText:c.slice(0,l),afterText:c.slice(t)}}function _(){var p;const{value:l}=v,{value:t}=r;if(!l||!t)return;const{value:c}=t,{start:x,beforeText:d,afterText:C}=l;let w=c.length;if(c.endsWith(C))w=c.length-C.length;else if(c.startsWith(d))w=d.length;else{const j=d[x-1],z=c.indexOf(j,x-1);z!==-1&&(w=z+1)}(p=t.setSelectionRange)===null||p===void 0||p.call(t,w,w)}function S(){v.value=null}return ue(r,S),{recordCursor:a,restoreCursor:_}}const Ce=Z({name:"InputWordCount",setup(r,{slots:v}){const{mergedValueRef:a,maxlengthRef:_,mergedClsPrefixRef:S}=or(Ae),p=F(()=>{const{value:l}=a;return l===null||Array.isArray(l)?0:yr(l)});return()=>{const{value:l}=_,{value:t}=a;return i("span",{class:`${S.value}-input-word-count`},rr(v.default,{value:t===null||Array.isArray(t)?"":t},()=>[l===void 0?p.value:`${p.value} / ${l}`]))}}}),zr=g("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[y("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),y("&::placeholder","color: #0000;"),y("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),A("round",[H("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[y("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[s("placeholder","overflow: visible;")]),H("autosize","width: 100%;"),A("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),g("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),H("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[g("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[g("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea",`
 position: static;
 `),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[g("icon",`
 color: var(--n-icon-color);
 `),g("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),s("suffix, prefix","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),H("disabled",[s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[y("&:hover",`
 color: var(--n-icon-color-hover);
 `),y("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),y("&:hover",[s("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[g("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),g("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[g("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),y(">",[g("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),g("base-icon",`
 font-size: var(--n-icon-size);
 `)]),g("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>A(`${r}-status`,[H("disabled",[g("base-loading",`
 color: var(--n-loading-color-${r})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),s("state-border",`
 border: var(--n-border-${r});
 `),y("&:hover",[s("state-border",`
 border: var(--n-border-hover-${r});
 `)]),y("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Ar=Object.assign(Object.assign({},ze.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Fr=Z({name:"Input",props:Ar,setup(r){const{mergedClsPrefixRef:v,mergedBorderedRef:a,inlineThemeDisabled:_,mergedRtlRef:S}=tr(r),p=ze("Input","-input",zr,vr,r,v),l=b(null),t=b(null),c=b(null),x=b(null),d=b(null),C=b(null),w=b(null),j=Cr(w),z=b(null),{localeRef:_e}=gr("Input"),K=b(r.defaultValue),Se=nr(r,"value"),R=xr(Se,K),M=ar(r),{mergedSizeRef:ee,mergedDisabledRef:k,mergedStatusRef:Re}=M,I=b(!1),V=b(!1),B=b(!1),W=b(!1);let oe=null;const re=F(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[_e.value.placeholder]:[e]}),Fe=F(()=>{const{value:e}=B,{value:o}=R,{value:n}=re;return!e&&(J(o)||Array.isArray(o)&&J(o[0]))&&n[0]}),Be=F(()=>{const{value:e}=B,{value:o}=R,{value:n}=re;return!e&&n[1]&&(J(o)||Array.isArray(o)&&J(o[1]))}),te=pe(()=>r.internalForceFocus||I.value),Pe=pe(()=>{if(k.value||r.readonly||!r.clearable||!te.value&&!V.value)return!1;const{value:e}=R,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(V.value||o):!!e&&(V.value||o)}),ne=F(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),D=b(!1),$e=F(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=b(void 0),Ee=()=>{var e,o;if(r.type==="textarea"){const{autosize:n}=r;if(n&&(de.value=(o=(e=z.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!t.value||typeof n=="boolean")return;const{paddingTop:u,paddingBottom:h,lineHeight:f}=window.getComputedStyle(t.value),P=Number(u.slice(0,-2)),$=Number(h.slice(0,-2)),E=Number(f.slice(0,-2)),{value:O}=c;if(!O)return;if(n.minRows){const N=Math.max(n.minRows,1),le=`${P+$+E*N}px`;O.style.minHeight=le}if(n.maxRows){const N=`${P+$+E*n.maxRows}px`;O.style.maxHeight=N}}},ke=F(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});ir(()=>{const{value:e}=R;Array.isArray(e)||ie(e)});const Ie=lr().proxy;function L(e){const{onUpdateValue:o,"onUpdate:value":n,onInput:u}=r,{nTriggerFormInput:h}=M;o&&m(o,e),n&&m(n,e),u&&m(u,e),K.value=e,h()}function U(e){const{onChange:o}=r,{nTriggerFormChange:n}=M;o&&m(o,e),K.value=e,n()}function Te(e){const{onBlur:o}=r,{nTriggerFormBlur:n}=M;o&&m(o,e),n()}function Me(e){const{onFocus:o}=r,{nTriggerFormFocus:n}=M;o&&m(o,e),n()}function Ve(e){const{onClear:o}=r;o&&m(o,e)}function We(e){const{onInputBlur:o}=r;o&&m(o,e)}function De(e){const{onInputFocus:o}=r;o&&m(o,e)}function Oe(){const{onDeactivate:e}=r;e&&m(e)}function Ne(){const{onActivate:e}=r;e&&m(e)}function He(e){const{onClick:o}=r;o&&m(o,e)}function je(e){const{onWrapperFocus:o}=r;o&&m(o,e)}function Ke(e){const{onWrapperBlur:o}=r;o&&m(o,e)}function Le(){B.value=!0}function Ue(e){B.value=!1,e.target===C.value?Y(e,1):Y(e,0)}function Y(e,o=0,n="input"){const u=e.target.value;if(ie(u),r.type==="textarea"){const{value:f}=z;f&&f.syncUnifiedContainer()}if(oe=u,B.value)return;j.recordCursor();const h=Ye(u);if(h)if(!r.pair)n==="input"?L(u):U(u);else{let{value:f}=R;Array.isArray(f)?f=[f[0],f[1]]:f=["",""],f[o]=u,n==="input"?L(f):U(f)}Ie.$forceUpdate(),h||be(j.restoreCursor)}function Ye(e){const{allowInput:o}=r;return typeof o=="function"?o(e):!0}function Xe(e){We(e),e.relatedTarget===l.value&&Oe(),e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===C.value||e.relatedTarget===t.value)||(W.value=!1),X(e,"blur"),w.value=null}function Ge(e,o){De(e),I.value=!0,W.value=!0,Ne(),X(e,"focus"),o===0?w.value=d.value:o===1?w.value=C.value:o===2&&(w.value=t.value)}function Qe(e){r.passivelyActivated&&(Ke(e),X(e,"blur"))}function qe(e){r.passivelyActivated&&(I.value=!0,je(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===C.value||e.relatedTarget===t.value||e.relatedTarget===l.value)||(o==="focus"?(Me(e),I.value=!0):o==="blur"&&(Te(e),I.value=!1))}function Je(e,o){Y(e,o,"change")}function Ze(e){He(e)}function eo(e){Ve(e),r.pair?(L(["",""]),U(["",""])):(L(""),U(""))}function oo(e){const{onMousedown:o}=r;o&&o(e);const{tagName:n}=e.target;if(n!=="INPUT"&&n!=="TEXTAREA"){if(r.resizable){const{value:u}=l;if(u){const{left:h,top:f,width:P,height:$}=u.getBoundingClientRect(),E=14;if(h+P-E<e.clientX&&e.clientY<h+P&&f+$-E<e.clientY&&e.clientY<f+$)return}}e.preventDefault(),I.value||he()}}function ro(){var e;V.value=!0,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function to(){var e;V.value=!1,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function no(){k.value||ne.value==="click"&&(D.value=!D.value)}function ao(e){if(k.value)return;e.preventDefault();const o=u=>{u.preventDefault(),we("mouseup",document,o)};if(xe("mouseup",document,o),ne.value!=="mousedown")return;D.value=!0;const n=()=>{D.value=!1,we("mouseup",document,n)};xe("mouseup",document,n)}function io(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":ae();break;case"Enter":lo(e);break}}function lo(e){var o,n;if(r.passivelyActivated){const{value:u}=W;if(u){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=t.value)===null||o===void 0||o.focus():(n=d.value)===null||n===void 0||n.focus()}}function ae(){r.passivelyActivated&&(W.value=!1,be(()=>{var e;(e=l.value)===null||e===void 0||e.focus()}))}function he(){var e,o,n;k.value||(r.passivelyActivated?(e=l.value)===null||e===void 0||e.focus():((o=t.value)===null||o===void 0||o.focus(),(n=d.value)===null||n===void 0||n.focus()))}function so(){var e;!((e=l.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function co(){var e,o;(e=t.value)===null||e===void 0||e.select(),(o=d.value)===null||o===void 0||o.select()}function uo(){k.value||(t.value?t.value.focus():d.value&&d.value.focus())}function ho(){const{value:e}=l;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&ae()}function ie(e){const{type:o,pair:n,autosize:u}=r;if(!n&&u)if(o==="textarea"){const{value:h}=c;h&&(h.textContent=(e!=null?e:"")+`\r
`)}else{const{value:h}=x;h&&(e?h.textContent=e:h.innerHTML="&nbsp;")}}function fo(){Ee()}const fe=b({top:"0"});function vo(e){var o;const{scrollTop:n}=e.target;fe.value.top=`${-n}px`,(o=z.value)===null||o===void 0||o.syncUnifiedContainer()}let G=null;ge(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?G=ue(R,n=>{!Array.isArray(n)&&n!==oe&&ie(n)}):G==null||G()});let Q=null;ge(()=>{r.type==="textarea"?Q=ue(R,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=z.value)===null||o===void 0||o.syncUnifiedContainer())}):Q==null||Q()}),sr(Ae,{mergedValueRef:R,maxlengthRef:ke,mergedClsPrefixRef:v});const po={wrapperElRef:l,inputElRef:d,textareaElRef:t,isCompositing:B,focus:he,blur:so,select:co,deactivate:ho,activate:uo},go=cr("Input",S,v),ve=F(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:n,borderRadius:u,textColor:h,caretColor:f,caretColorError:P,caretColorWarning:$,textDecorationColor:E,border:O,borderDisabled:N,borderHover:le,borderFocus:bo,placeholderColor:xo,placeholderColorDisabled:mo,lineHeightTextarea:wo,colorDisabled:yo,colorFocus:Co,textColorDisabled:zo,boxShadowFocus:Ao,iconSize:_o,colorFocusWarning:So,boxShadowFocusWarning:Ro,borderWarning:Fo,borderFocusWarning:Bo,borderHoverWarning:Po,colorFocusError:$o,boxShadowFocusError:Eo,borderError:ko,borderFocusError:Io,borderHoverError:To,clearSize:Mo,clearColor:Vo,clearColorHover:Wo,clearColorPressed:Do,iconColor:Oo,iconColorDisabled:No,suffixTextColor:Ho,countTextColor:jo,iconColorHover:Ko,iconColorPressed:Lo,loadingColor:Uo,loadingColorError:Yo,loadingColorWarning:Xo,[ce("padding",e)]:Go,[ce("fontSize",e)]:Qo,[ce("height",e)]:qo}}=p.value,{left:Jo,right:Zo}=pr(Go);return{"--n-bezier":o,"--n-count-text-color":jo,"--n-color":n,"--n-font-size":Qo,"--n-border-radius":u,"--n-height":qo,"--n-padding-left":Jo,"--n-padding-right":Zo,"--n-text-color":h,"--n-caret-color":f,"--n-text-decoration-color":E,"--n-border":O,"--n-border-disabled":N,"--n-border-hover":le,"--n-border-focus":bo,"--n-placeholder-color":xo,"--n-placeholder-color-disabled":mo,"--n-icon-size":_o,"--n-line-height-textarea":wo,"--n-color-disabled":yo,"--n-color-focus":Co,"--n-text-color-disabled":zo,"--n-box-shadow-focus":Ao,"--n-loading-color":Uo,"--n-caret-color-warning":$,"--n-color-focus-warning":So,"--n-box-shadow-focus-warning":Ro,"--n-border-warning":Fo,"--n-border-focus-warning":Bo,"--n-border-hover-warning":Po,"--n-loading-color-warning":Xo,"--n-caret-color-error":P,"--n-color-focus-error":$o,"--n-box-shadow-focus-error":Eo,"--n-border-error":ko,"--n-border-focus-error":Io,"--n-border-hover-error":To,"--n-loading-color-error":Yo,"--n-clear-color":Vo,"--n-clear-size":Mo,"--n-clear-color-hover":Wo,"--n-clear-color-pressed":Do,"--n-icon-color":Oo,"--n-icon-color-hover":Ko,"--n-icon-color-pressed":Lo,"--n-icon-color-disabled":No,"--n-suffix-text-color":Ho}}),T=_?ur("input",F(()=>{const{value:e}=ee;return e[0]}),ve,r):void 0;return Object.assign(Object.assign({},po),{wrapperElRef:l,inputElRef:d,inputMirrorElRef:x,inputEl2Ref:C,textareaElRef:t,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:go,uncontrolledValue:K,mergedValue:R,passwordVisible:D,mergedPlaceholder:re,showPlaceholder1:Fe,showPlaceholder2:Be,mergedFocus:te,isComposing:B,activated:W,showClearButton:Pe,mergedSize:ee,mergedDisabled:k,textDecorationStyle:$e,mergedClsPrefix:v,mergedBordered:a,mergedShowPasswordOn:ne,placeholderStyle:fe,mergedStatus:Re,textAreaScrollContainerWidth:de,handleTextAreaScroll:vo,handleCompositionStart:Le,handleCompositionEnd:Ue,handleInput:Y,handleInputBlur:Xe,handleInputFocus:Ge,handleWrapperBlur:Qe,handleWrapperFocus:qe,handleMouseEnter:ro,handleMouseLeave:to,handleMouseDown:oo,handleChange:Je,handleClick:Ze,handleClear:eo,handlePasswordToggleClick:no,handlePasswordToggleMousedown:ao,handleWrapperKeydown:io,handleTextAreaMirrorResize:fo,getTextareaScrollContainer:()=>t.value,mergedTheme:p,cssVars:_?void 0:ve,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var r,v;const{mergedClsPrefix:a,mergedStatus:_,themeClass:S,onRender:p}=this,l=this.$slots;return p==null||p(),i("div",{ref:"wrapperElRef",class:[`${a}-input`,S,_&&`${a}-input--${_}-status`,{[`${a}-input--rtl`]:this.rtlEnabled,[`${a}-input--disabled`]:this.mergedDisabled,[`${a}-input--textarea`]:this.type==="textarea",[`${a}-input--resizable`]:this.resizable&&!this.autosize,[`${a}-input--autosize`]:this.autosize,[`${a}-input--round`]:this.round&&this.type!=="textarea",[`${a}-input--pair`]:this.pair,[`${a}-input--focus`]:this.mergedFocus,[`${a}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},i("div",{class:`${a}-input-wrapper`},q(l.prefix,t=>t&&i("div",{class:`${a}-input__prefix`},t)),this.type==="textarea"?i(dr,{ref:"textareaScrollbarInstRef",class:`${a}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var t,c;const{textAreaScrollContainerWidth:x}=this,d={width:this.autosize&&x&&`${x}px`};return i(hr,null,i("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${a}-input__textarea-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(c=this.inputProps)===null||c===void 0?void 0:c.style,d],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?i("div",{class:`${a}-input__placeholder`,style:[this.placeholderStyle,d],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?i(fr,{onResize:this.handleTextAreaMirrorResize},{default:()=>i("div",{ref:"textareaMirrorElRef",class:`${a}-input__textarea-mirror`,key:"mirror"})}):null)}}):i("div",{class:`${a}-input__input`},i("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${a}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:t=>this.handleInputFocus(t,0),onInput:t=>this.handleInput(t,0),onChange:t=>this.handleChange(t,0)})),this.showPlaceholder1?i("div",{class:`${a}-input__placeholder`},i("span",null,this.mergedPlaceholder[0])):null,this.autosize?i("div",{class:`${a}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&q(l.suffix,t=>t||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?i("div",{class:`${a}-input__suffix`},[q(l["clear-icon-placeholder"],c=>(this.clearable||c)&&i(ye,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>c,icon:()=>{var x,d;return(d=(x=this.$slots)["clear-icon"])===null||d===void 0?void 0:d.call(x)}})),this.internalLoadingBeforeSuffix?null:t,this.loading!==void 0?i(br,{clsPrefix:a,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?t:null,this.showCount&&this.type!=="textarea"?i(Ce,null,{default:c=>{var x;return(x=l.count)===null||x===void 0?void 0:x.call(l,c)}}):null,this.mergedShowPasswordOn&&this.type==="password"?i("div",{class:`${a}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?se(l["password-visible-icon"],()=>[i(me,{clsPrefix:a},{default:()=>i(mr,null)})]):se(l["password-invisible-icon"],()=>[i(me,{clsPrefix:a},{default:()=>i(wr,null)})])):null]):null)),this.pair?i("span",{class:`${a}-input__separator`},se(l.separator,()=>[this.separator])):null,this.pair?i("div",{class:`${a}-input-wrapper`},i("div",{class:`${a}-input__input`},i("input",{ref:"inputEl2Ref",type:this.type,class:`${a}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:t=>this.handleInputFocus(t,1),onInput:t=>this.handleInput(t,1),onChange:t=>this.handleChange(t,1)}),this.showPlaceholder2?i("div",{class:`${a}-input__placeholder`},i("span",null,this.mergedPlaceholder[1])):null),q(l.suffix,t=>(this.clearable||t)&&i("div",{class:`${a}-input__suffix`},[this.clearable&&i(ye,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var c;return(c=l["clear-icon"])===null||c===void 0?void 0:c.call(l)},placeholder:()=>{var c;return(c=l["clear-icon-placeholder"])===null||c===void 0?void 0:c.call(l)}}),t]))):null,this.mergedBordered?i("div",{class:`${a}-input__border`}):null,this.mergedBordered?i("div",{class:`${a}-input__state-border`}):null,this.showCount&&this.type==="textarea"?i(Ce,null,{default:t=>{var c;return(c=l.count)===null||c===void 0?void 0:c.call(l,t)}}):null)}});export{Fr as _};
