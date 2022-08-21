import{d as re,aL as mt,o as ke,cV as Yt,cT as Xt,j as k,r as T,L as Ne,bE as nt,bX as Ee,h as r,au as Zt,V as st,am as lt,cW as Jt,cX as dt,n as wt,a as _,f as N,b as le,u as yt,k as he,cY as Qt,g as rt,bN as en,s as de,l as We,D as xt,J as Ce,aD as Ct,A as te,Q as ot,aC as St,E as Q,cZ as tn,w as Me,ax as Ze,C as ut,p as nn,bR as on,N as ln,aw as rn,c_ as an,m as sn,c$ as dn,K as un,d0 as cn,aH as fn,b6 as hn,aR as vn,aS as gn,by as ct,d1 as bn,G as ae}from"./index.6e57c2f1.js";import{u as ft}from"./use-merged-state.14d1217d.js";import{a as pn,h as De,N as Je,g as mn,c as wn}from"./Tag.f1f916fe.js";import{u as Rt,a as yn}from"./FormItem.5b33b5bf.js";import{u as xn}from"./use-compitable.be4359a7.js";import{c as Ft,a as Le}from"./cssr.27de2d53.js";import{i as at,c as Cn,_ as Sn,u as it,V as Rn,a as Fn,b as Tn}from"./Popover.1a4e3ffd.js";import{b as On}from"./next-frame-once.e0fd6a2a.js";function Qe(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}function ht(e){return e&-e}class zn{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let s=0;s<n+1;++s)l[s]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:s}=this;for(n+=1;n<=l;)s[n]+=o,n+=ht(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:s}=this;if(n>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*l;for(;n>0;)c+=o[n],n-=ht(n);return c}getBound(n){let o=0,l=this.l;for(;l>o;){const s=Math.floor((o+l)/2),c=this.sum(s);if(c>n){l=s;continue}else if(c<n){if(o===s)return this.sum(o+1)<=n?o+1:s;o=s}else return s}return o}}let Ae;function Mn(){return Ae===void 0&&("matchMedia"in window?Ae=window.matchMedia("(pointer:coarse)").matches:Ae=!1),Ae}let et;function vt(){return et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et}const kn=Le(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Le("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Le("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Pn=re({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=mt();kn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ft,ssr:n}),ke(()=>{const{defaultScrollIndex:h,defaultScrollKey:v}=e;h!=null?p({index:h}):v!=null&&p({key:v})});let o=!1,l=!1;Yt(()=>{if(o=!1,!l){l=!0;return}p({top:S.value,left:m})}),Xt(()=>{o=!0,l||(l=!0)});const s=k(()=>{const h=new Map,{keyField:v}=e;return e.items.forEach((I,W)=>{h.set(I[v],W)}),h}),c=T(null),b=T(void 0),a=new Map,R=k(()=>{const{items:h,itemSize:v,keyField:I}=e,W=new zn(h.length,v);return h.forEach((H,V)=>{const $=H[I],j=a.get($);j!==void 0&&W.add(V,j)}),W}),w=T(0);let m=0;const S=T(0),O=Ne(()=>Math.max(R.value.getBound(S.value-nt(e.paddingTop))-1,0)),B=k(()=>{const{value:h}=b;if(h===void 0)return[];const{items:v,itemSize:I}=e,W=O.value,H=Math.min(W+Math.ceil(h/I+1),v.length-1),V=[];for(let $=W;$<=H;++$)V.push(v[$]);return V}),p=(h,v)=>{if(typeof h=="number"){x(h,v,"auto");return}const{left:I,top:W,index:H,key:V,position:$,behavior:j,debounce:i=!0}=h;if(I!==void 0||W!==void 0)x(I,W,j);else if(H!==void 0)C(H,j,i);else if(V!==void 0){const f=s.value.get(V);f!==void 0&&C(f,j,i)}else $==="bottom"?x(0,Number.MAX_SAFE_INTEGER,j):$==="top"&&x(0,0,j)};let F,L=null;function C(h,v,I){const{value:W}=R,H=W.sum(h)+nt(e.paddingTop);if(!I)c.value.scrollTo({left:0,top:H,behavior:v});else{F=h,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{F=void 0,L=null},16);const{scrollTop:V,offsetHeight:$}=c.value;if(H>V){const j=W.get(h);H+j<=V+$||c.value.scrollTo({left:0,top:H+j-$,behavior:v})}else c.value.scrollTo({left:0,top:H,behavior:v})}}function x(h,v,I){c.value.scrollTo({left:h,top:v,behavior:I})}function U(h,v){var I,W,H;if(o||e.ignoreItemResize||ne(v.target))return;const{value:V}=R,$=s.value.get(h),j=V.get($),i=(H=(W=(I=v.borderBoxSize)===null||I===void 0?void 0:I[0])===null||W===void 0?void 0:W.blockSize)!==null&&H!==void 0?H:v.contentRect.height;if(i===j)return;i-e.itemSize===0?a.delete(h):a.set(h,i-e.itemSize);const A=i-j;if(A===0)return;V.add($,A);const Z=c.value;if(Z!=null){if(F===void 0){const se=V.sum($);Z.scrollTop>se&&Z.scrollBy(0,A)}else if($<F)Z.scrollBy(0,A);else if($===F){const se=V.sum($);i+se>Z.scrollTop+Z.offsetHeight&&Z.scrollBy(0,A)}ie()}w.value++}const Y=!Mn();let G=!1;function D(h){var v;(v=e.onScroll)===null||v===void 0||v.call(e,h),(!Y||!G)&&ie()}function q(h){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,h),Y){const I=c.value;if(I!=null){if(h.deltaX===0&&(I.scrollTop===0&&h.deltaY<=0||I.scrollTop+I.offsetHeight>=I.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),I.scrollTop+=h.deltaY/vt(),I.scrollLeft+=h.deltaX/vt(),ie(),G=!0,On(()=>{G=!1})}}}function J(h){if(o||ne(h.target)||h.contentRect.height===b.value)return;b.value=h.contentRect.height;const{onResize:v}=e;v!==void 0&&v(h)}function ie(){const{value:h}=c;h!=null&&(S.value=h.scrollTop,m=h.scrollLeft)}function ne(h){let v=h;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:b,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:k(()=>{const{itemResizable:h}=e,v=Ee(R.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":v,minHeight:h?v:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(w.value,{transform:`translateY(${Ee(R.value.sum(O.value))})`})),viewportItems:B,listElRef:c,itemsElRef:T(null),scrollTo:p,handleListResize:J,handleListScroll:D,handleListWheel:q,handleItemResize:U}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return r(st,{onResize:this.handleListResize},{default:()=>{var s,c;return r("div",Zt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(b=>{const a=b[n],R=o.get(a),w=this.$slots.default({item:b,index:R})[0];return e?r(st,{key:a,onResize:m=>this.handleItemResize(a,m)},{default:()=>w}):(w.key=a,w)})})]):(c=(s=this.$slots).empty)===null||c===void 0?void 0:c.call(s)])}})}}),be="v-hidden",In=Le("[v-hidden]",{display:"none!important"}),gt=re({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=T(null),l=T(null);function s(){const{value:b}=o,{getCounter:a,getTail:R}=e;let w;if(a!==void 0?w=a():w=l.value,!b||!w)return;w.hasAttribute(be)&&w.removeAttribute(be);const{children:m}=b,S=b.offsetWidth,O=[],B=n.tail?R==null?void 0:R():null;let p=B?B.offsetWidth:0,F=!1;const L=b.children.length-(n.tail?1:0);for(let x=0;x<L-1;++x){if(x<0)continue;const U=m[x];if(F){U.hasAttribute(be)||U.setAttribute(be,"");continue}else U.hasAttribute(be)&&U.removeAttribute(be);const Y=U.offsetWidth;if(p+=Y,O[x]=Y,p>S){const{updateCounter:G}=e;for(let D=x;D>=0;--D){const q=L-1-D;G!==void 0?G(q):w.textContent=`${q}`;const J=w.offsetWidth;if(p-=O[D],p+J<=S||D===0){F=!0,x=D-1,B&&(x===-1?(B.style.maxWidth=`${S-J}px`,B.style.boxSizing="border-box"):B.style.maxWidth="");break}}}}const{onUpdateOverflow:C}=e;F?C!==void 0&&C(!0):(C!==void 0&&C(!1),w.setAttribute(be,""))}const c=mt();return In.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ft,ssr:c}),ke(s),{selfRef:o,counterRef:l,sync:s}},render(){const{$slots:e}=this;return lt(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[Jt(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Tt(e,n){n&&(ke(()=>{const{value:o}=e;o&&dt.registerHandler(o,n)}),wt(()=>{const{value:o}=e;o&&dt.unregisterHandler(o)}))}const _n=re({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Bn=re({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),$n=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),En=_("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[N("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[N("description",`
 margin-top: 8px;
 `)])]),N("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),An=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Nn=re({name:"Empty",props:An,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=yt(e),l=he("Empty","-empty",En,Qt,e,n),{localeRef:s}=Rt("Empty"),c=rt(en,null),b=k(()=>{var m,S,O;return(m=e.description)!==null&&m!==void 0?m:(O=(S=c==null?void 0:c.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||O===void 0?void 0:O.description}),a=k(()=>{var m,S;return((S=(m=c==null?void 0:c.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>r(Bn,null))}),R=k(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:S},self:{[de("iconSize",m)]:O,[de("fontSize",m)]:B,textColor:p,iconColor:F,extraTextColor:L}}=l.value;return{"--n-icon-size":O,"--n-font-size":B,"--n-bezier":S,"--n-text-color":p,"--n-icon-color":F,"--n-extra-text-color":L}}),w=o?We("empty",k(()=>{let m="";const{size:S}=e;return m+=S[0],m}),R,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:k(()=>b.value||s.value.description),cssVars:o?void 0:R,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),r("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${n}-empty__icon`},e.icon?e.icon():r(xt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Ln=r(_n);function Dn(e,n){return r(Ct,{name:"fade-in-scale-up-transition"},{default:()=>e?r(xt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>Ln}):null})}const bt=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:s,renderLabelRef:c,renderOptionRef:b,labelFieldRef:a,valueFieldRef:R,showCheckmarkRef:w,nodePropsRef:m,handleOptionClick:S,handleOptionMouseEnter:O}=rt(at),B=Ne(()=>{const{value:C}=o;return C?e.tmNode.key===C.key:!1});function p(C){const{tmNode:x}=e;x.disabled||S(C,x)}function F(C){const{tmNode:x}=e;x.disabled||O(C,x)}function L(C){const{tmNode:x}=e,{value:U}=B;x.disabled||U||O(C,x)}return{multiple:l,isGrouped:Ne(()=>{const{tmNode:C}=e,{parent:x}=C;return x&&x.rawNode.type==="group"}),showCheckmark:w,nodeProps:m,isPending:B,isSelected:Ne(()=>{const{value:C}=n,{value:x}=l;if(C===null)return!1;const U=e.tmNode.rawNode[R.value];if(x){const{value:Y}=s;return Y.has(U)}else return C===U}),labelField:a,renderLabel:c,renderOption:b,handleMouseMove:L,handleMouseEnter:F,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:s,showCheckmark:c,nodeProps:b,renderOption:a,renderLabel:R,handleClick:w,handleMouseEnter:m,handleMouseMove:S}=this,O=Dn(o,e),B=R?[R(n,o),c&&O]:[Ce(n[this.labelField],n,o),c&&O],p=b==null?void 0:b(n),F=r("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:c}],style:[(p==null?void 0:p.style)||"",n.style||""],onClick:Qe([w,p==null?void 0:p.onClick]),onMouseenter:Qe([m,p==null?void 0:p.onMouseenter]),onMousemove:Qe([S,p==null?void 0:p.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},B));return n.render?n.render({node:F,option:n,selected:o}):a?a({node:F,option:n,selected:o}):F}}),pt=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=rt(at);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:s}}=this,c=l==null?void 0:l(s),b=n?n(s,!1):Ce(s[this.labelField],s,!1),a=r("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),b);return s.render?s.render({node:a,option:s}):o?o({node:a,option:s,selected:!1}):a}}),Vn=_("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("scrollbar",`
 max-height: var(--n-height);
 `),_("virtual-list",`
 max-height: var(--n-height);
 `),_("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),_("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),_("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),_("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[te("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),te("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),te("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),te("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),te("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),te("disabled",`
 cursor: not-allowed;
 `,[ot("selected",`
 color: var(--n-option-text-color-disabled);
 `),te("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[St({enterScale:"0.5"})])])]),Wn=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=he("InternalSelectMenu","-internal-select-menu",Vn,tn,e,Q(e,"clsPrefix")),o=T(null),l=T(null),s=T(null),c=k(()=>e.treeMate.getFlattenedNodes()),b=k(()=>pn(c.value)),a=T(null);function R(){const{treeMate:i}=e;let f=null;const{value:A}=e;A===null?f=i.getFirstAvailableNode():(e.multiple?f=i.getNode((A||[])[(A||[]).length-1]):f=i.getNode(A),(!f||f.disabled)&&(f=i.getFirstAvailableNode())),h(f||null)}function w(){const{value:i}=a;i&&!e.treeMate.getNode(i.key)&&(a.value=null)}let m;Me(()=>e.show,i=>{i?m=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?R():w(),lt(v)):w()},{immediate:!0}):m==null||m()},{immediate:!0}),wt(()=>{m==null||m()});const S=k(()=>nt(n.value.self[de("optionHeight",e.size)])),O=k(()=>Ze(n.value.self[de("padding",e.size)])),B=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=k(()=>{const i=c.value;return i&&i.length===0});function F(i){const{onToggle:f}=e;f&&f(i)}function L(i){const{onScroll:f}=e;f&&f(i)}function C(i){var f;(f=s.value)===null||f===void 0||f.sync(),L(i)}function x(){var i;(i=s.value)===null||i===void 0||i.sync()}function U(){const{value:i}=a;return i||null}function Y(i,f){f.disabled||h(f,!1)}function G(i,f){f.disabled||F(f)}function D(i){var f;De(i,"action")||(f=e.onKeyup)===null||f===void 0||f.call(e,i)}function q(i){var f;De(i,"action")||(f=e.onKeydown)===null||f===void 0||f.call(e,i)}function J(i){var f;(f=e.onMousedown)===null||f===void 0||f.call(e,i),!e.focusable&&i.preventDefault()}function ie(){const{value:i}=a;i&&h(i.getNext({loop:!0}),!0)}function ne(){const{value:i}=a;i&&h(i.getPrev({loop:!0}),!0)}function h(i,f=!1){a.value=i,f&&v()}function v(){var i,f;const A=a.value;if(!A)return;const Z=b.value(A.key);Z!==null&&(e.virtualScroll?(i=l.value)===null||i===void 0||i.scrollTo({index:Z}):(f=s.value)===null||f===void 0||f.scrollTo({index:Z,elSize:S.value}))}function I(i){var f,A;!((f=o.value)===null||f===void 0)&&f.contains(i.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,i))}function W(i){var f,A;!((f=o.value)===null||f===void 0)&&f.contains(i.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,i)}ut(at,{handleOptionMouseEnter:Y,handleOptionClick:G,valueSetRef:B,pendingTmNodeRef:a,nodePropsRef:Q(e,"nodeProps"),showCheckmarkRef:Q(e,"showCheckmark"),multipleRef:Q(e,"multiple"),valueRef:Q(e,"value"),renderLabelRef:Q(e,"renderLabel"),renderOptionRef:Q(e,"renderOption"),labelFieldRef:Q(e,"labelField"),valueFieldRef:Q(e,"valueField")}),ut(Cn,o),ke(()=>{const{value:i}=s;i&&i.sync()});const H=k(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:f},self:{height:A,borderRadius:Z,color:se,groupHeaderTextColor:Se,actionDividerColor:Re,optionTextColorPressed:pe,optionTextColor:me,optionTextColorDisabled:ue,optionTextColorActive:ee,optionOpacityDisabled:we,optionCheckColor:ce,actionTextColor:Fe,optionColorPending:ve,optionColorActive:ge,loadingColor:Te,loadingSize:Oe,optionColorActivePending:ze,[de("optionFontSize",i)]:ye,[de("optionHeight",i)]:xe,[de("optionPadding",i)]:oe}}=n.value;return{"--n-height":A,"--n-action-divider-color":Re,"--n-action-text-color":Fe,"--n-bezier":f,"--n-border-radius":Z,"--n-color":se,"--n-option-font-size":ye,"--n-group-header-text-color":Se,"--n-option-check-color":ce,"--n-option-color-pending":ve,"--n-option-color-active":ge,"--n-option-color-active-pending":ze,"--n-option-height":xe,"--n-option-opacity-disabled":we,"--n-option-text-color":me,"--n-option-text-color-active":ee,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":pe,"--n-option-padding":oe,"--n-option-padding-left":Ze(oe,"left"),"--n-option-padding-right":Ze(oe,"right"),"--n-loading-color":Te,"--n-loading-size":Oe}}),{inlineThemeDisabled:V}=e,$=V?We("internal-select-menu",k(()=>e.size[0]),H,e):void 0,j={selfRef:o,next:ie,prev:ne,getPendingTmNode:U};return Tt(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:l,scrollbarRef:s,itemSize:S,padding:O,flattenedNodes:c,empty:p,virtualListContainer(){const{value:i}=l;return i==null?void 0:i.listElRef},virtualListContent(){const{value:i}=l;return i==null?void 0:i.itemsElRef},doScroll:L,handleFocusin:I,handleFocusout:W,handleKeyUp:D,handleKeyDown:q,handleMouseDown:J,handleVirtualListResize:x,handleVirtualListScroll:C,cssVars:V?void 0:H,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},j)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:s,onRender:c}=this;return c==null||c(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,s,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(on,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},rn(e.empty,()=>[r(Nn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])):r(ln,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?r(Pn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:b})=>b.isGroup?r(pt,{key:b.key,clsPrefix:o,tmNode:b}):b.ignored?null:r(bt,{clsPrefix:o,key:b.key,tmNode:b})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(b=>b.isGroup?r(pt,{key:b.key,clsPrefix:o,tmNode:b}):r(bt,{clsPrefix:o,key:b.key,tmNode:b})))}),nn(e.action,b=>b&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},b),r($n,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Hn=le([_("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[_("base-loading",`
 color: var(--n-loading-color);
 `),_("base-selection-tags","min-height: var(--n-height);"),N("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),N("state-border",`
 z-index: 1;
 border-color: #0000;
 `),_("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[N("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),_("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[N("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),_("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),_("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),_("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[_("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[N("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),N("render-label",`
 color: var(--n-text-color);
 `)]),ot("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),te("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),te("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),_("base-selection-label","background-color: var(--n-color-active);"),_("base-selection-tags","background-color: var(--n-color-active);")])]),te("disabled","cursor: not-allowed;",[N("arrow",`
 color: var(--n-arrow-color-disabled);
 `),_("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[_("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),N("render-label",`
 color: var(--n-text-color-disabled);
 `)]),_("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),_("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),_("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[N("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),N("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>te(`${e}-status`,[N("state-border",`border: var(--n-border-${e});`),ot("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),te("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),_("base-selection-label",`background-color: var(--n-color-active-${e});`),_("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),te("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),_("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),_("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[N("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),jn=re({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const n=T(null),o=T(null),l=T(null),s=T(null),c=T(null),b=T(null),a=T(null),R=T(null),w=T(null),m=T(null),S=T(!1),O=T(!1),B=T(!1),p=he("InternalSelection","-internal-selection",Hn,an,e,Q(e,"clsPrefix")),F=k(()=>e.clearable&&!e.disabled&&(B.value||e.active)),L=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=k(()=>{const d=e.selectedOption;if(!!d)return d[e.labelField]}),x=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var d;const{value:g}=n;if(g){const{value:K}=o;K&&(K.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=w.value)===null||d===void 0||d.sync()))}}function Y(){const{value:d}=m;d&&(d.style.display="none")}function G(){const{value:d}=m;d&&(d.style.display="inline-block")}Me(Q(e,"active"),d=>{d||Y()}),Me(Q(e,"pattern"),()=>{e.multiple&&lt(U)});function D(d){const{onFocus:g}=e;g&&g(d)}function q(d){const{onBlur:g}=e;g&&g(d)}function J(d){const{onDeleteOption:g}=e;g&&g(d)}function ie(d){const{onClear:g}=e;g&&g(d)}function ne(d){const{onPatternInput:g}=e;g&&g(d)}function h(d){var g;(!d.relatedTarget||!(!((g=l.value)===null||g===void 0)&&g.contains(d.relatedTarget)))&&D(d)}function v(d){var g;!((g=l.value)===null||g===void 0)&&g.contains(d.relatedTarget)||q(d)}function I(d){ie(d)}function W(){B.value=!0}function H(){B.value=!1}function V(d){!e.active||!e.filterable||d.target!==o.value&&d.preventDefault()}function $(d){J(d)}function j(d){if(d.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&$(g[g.length-1])}}const i=T(!1);let f=null;function A(d){const{value:g}=n;if(g){const K=d.target.value;g.textContent=K,U()}i.value?f=d:ne(d)}function Z(){i.value=!0}function se(){i.value=!1,ne(f),f=null}function Se(d){var g;O.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,d)}function Re(d){var g;O.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,d)}function pe(){var d,g;if(e.filterable)O.value=!1,(d=b.value)===null||d===void 0||d.blur(),(g=o.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:K}=s;K==null||K.blur()}else{const{value:K}=c;K==null||K.blur()}}function me(){var d,g,K;e.filterable?(O.value=!1,(d=b.value)===null||d===void 0||d.focus()):e.multiple?(g=s.value)===null||g===void 0||g.focus():(K=c.value)===null||K===void 0||K.focus()}function ue(){const{value:d}=o;d&&(G(),d.focus())}function ee(){const{value:d}=o;d&&d.blur()}function we(d){const{value:g}=a;g&&g.setTextContent(`+${d}`)}function ce(){const{value:d}=R;return d}function Fe(){return o.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function Te(){e.disabled||e.active||(ge(),ve=window.setTimeout(()=>{S.value=!0},100))}function Oe(){ge()}function ze(d){d||(ge(),S.value=!1)}ke(()=>{sn(()=>{const d=b.value;!d||(d.tabIndex=e.disabled||O.value?-1:0)})}),Tt(l,e.onResize);const{inlineThemeDisabled:ye}=e,xe=k(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:g},self:{borderRadius:K,color:Pe,placeholderColor:He,textColor:je,paddingSingle:Ke,paddingMultiple:Ue,caretColor:Ie,colorDisabled:_e,textColorDisabled:Ge,placeholderColorDisabled:qe,colorActive:Ye,boxShadowFocus:Be,boxShadowActive:fe,boxShadowHover:t,border:u,borderFocus:y,borderHover:E,borderActive:z,arrowColor:P,arrowColorDisabled:M,loadingColor:X,colorActiveWarning:$e,boxShadowFocusWarning:Xe,boxShadowActiveWarning:zt,boxShadowHoverWarning:Mt,borderWarning:kt,borderFocusWarning:Pt,borderHoverWarning:It,borderActiveWarning:_t,colorActiveError:Bt,boxShadowFocusError:$t,boxShadowActiveError:Et,boxShadowHoverError:At,borderError:Nt,borderFocusError:Lt,borderHoverError:Dt,borderActiveError:Vt,clearColor:Wt,clearColorHover:Ht,clearColorPressed:jt,clearSize:Kt,arrowSize:Ut,[de("height",d)]:Gt,[de("fontSize",d)]:qt}}=p.value;return{"--n-bezier":g,"--n-border":u,"--n-border-active":z,"--n-border-focus":y,"--n-border-hover":E,"--n-border-radius":K,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Be,"--n-box-shadow-hover":t,"--n-caret-color":Ie,"--n-color":Pe,"--n-color-active":Ye,"--n-color-disabled":_e,"--n-font-size":qt,"--n-height":Gt,"--n-padding-single":Ke,"--n-padding-multiple":Ue,"--n-placeholder-color":He,"--n-placeholder-color-disabled":qe,"--n-text-color":je,"--n-text-color-disabled":Ge,"--n-arrow-color":P,"--n-arrow-color-disabled":M,"--n-loading-color":X,"--n-color-active-warning":$e,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":zt,"--n-box-shadow-hover-warning":Mt,"--n-border-warning":kt,"--n-border-focus-warning":Pt,"--n-border-hover-warning":It,"--n-border-active-warning":_t,"--n-color-active-error":Bt,"--n-box-shadow-focus-error":$t,"--n-box-shadow-active-error":Et,"--n-box-shadow-hover-error":At,"--n-border-error":Nt,"--n-border-focus-error":Lt,"--n-border-hover-error":Dt,"--n-border-active-error":Vt,"--n-clear-size":Kt,"--n-clear-color":Wt,"--n-clear-color-hover":Ht,"--n-clear-color-pressed":jt,"--n-arrow-size":Ut}}),oe=ye?We("internal-selection",k(()=>e.size[0]),xe,e):void 0;return{mergedTheme:p,mergedClearable:F,patternInputFocused:O,filterablePlaceholder:L,label:C,selected:x,showTagsPanel:S,isCompositing:i,counterRef:a,counterWrapperRef:R,patternInputMirrorRef:n,patternInputRef:o,selfRef:l,multipleElRef:s,singleElRef:c,patternInputWrapperRef:b,overflowRef:w,inputTagElRef:m,handleMouseDown:V,handleFocusin:h,handleClear:I,handleMouseEnter:W,handleMouseLeave:H,handleDeleteOption:$,handlePatternKeyDown:j,handlePatternInputInput:A,handlePatternInputBlur:Re,handlePatternInputFocus:Se,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Oe,handleFocusout:v,handleCompositionEnd:se,handleCompositionStart:Z,onPopoverUpdateShow:ze,focus:me,focusInput:ue,blur:pe,blurInput:ee,updateCounter:we,getCounter:ce,getTail:Fe,renderLabel:e.renderLabel,cssVars:ye?void 0:xe,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:s,maxTagCount:c,bordered:b,clsPrefix:a,onRender:R,renderTag:w,renderLabel:m}=this;R==null||R();const S=c==="responsive",O=typeof c=="number",B=S||O,p=r(dn,null,{default:()=>r(yn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var L,C;return(C=(L=this.$slots).arrow)===null||C===void 0?void 0:C.call(L)}})});let F;if(n){const{labelField:L}=this,C=v=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:v.value},w?w({option:v,handleClose:()=>this.handleDeleteOption(v)}):r(Je,{size:o,closable:!v.disabled,disabled:l,onClose:()=>this.handleDeleteOption(v),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>m?m(v,!0):Ce(v[L],v,!0)})),x=(O?this.selectedOptions.slice(0,c):this.selectedOptions).map(C),U=s?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,Y=S?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let G;if(O){const v=this.selectedOptions.length-c;v>0&&(G=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${v}`})))}const D=S?s?r(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>x,counter:Y,tail:()=>U}):r(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>x,counter:Y}):O?x.concat(G):x,q=B?()=>r("div",{class:`${a}-base-selection-popover`},S?x:this.selectedOptions.map(C)):void 0,J=B?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,ne=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},this.placeholder):null,h=s?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},D,S?null:U,p):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},D,p);F=r(un,null,B?r(Sn,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>h,default:q}):h,ne)}else if(s){const L=this.pattern||this.isCompositing,C=this.active?!L:!this.selected,x=this.active?!1:this.selected;F=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),x?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,C?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else F=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:mn(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},this.placeholder),p);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,b?r("div",{class:`${a}-base-selection__border`}):null,b?r("div",{class:`${a}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function Ot(e){return e.type==="ignored"}function tt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Kn(e,n){return{getIsGroup:Ve,getIgnored:Ot,getKey(l){return Ve(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function Un(e,n,o,l){if(!n)return e;function s(c){if(!Array.isArray(c))return[];const b=[];for(const a of c)if(Ve(a)){const R=s(a[l]);R.length&&b.push(Object.assign({},a,{[l]:R}))}else{if(Ot(a))continue;n(o,a)&&b.push(a)}return b}return s(e)}function Gn(e,n,o){const l=new Map;return e.forEach(s=>{Ve(s)?s[o].forEach(c=>{l.set(c[n],c)}):l.set(s[n],s)}),l}const qn=le([_("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),_("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[St({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Yn=Object.assign(Object.assign({},he.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),io=re({name:"Select",props:Yn,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:s}=yt(e),c=he("Select","-select",qn,cn,e,n),b=T(e.defaultValue),a=Q(e,"value"),R=ft(a,b),w=T(!1),m=T(""),S=k(()=>{const{valueField:t,childrenField:u}=e,y=Kn(t,u);return wn(v.value,y)}),O=k(()=>Gn(ne.value,e.valueField,e.childrenField)),B=T(!1),p=ft(Q(e,"show"),B),F=T(null),L=T(null),C=T(null),{localeRef:x}=Rt("Select"),U=k(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:x.value.placeholder}),Y=xn(e,["items","options"]),G=[],D=T([]),q=T([]),J=T(new Map),ie=k(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:y}=e;return E=>({[u]:String(E),[y]:E})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),ne=k(()=>q.value.concat(D.value).concat(Y.value)),h=k(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:y}=e;return(E,z)=>{if(!z)return!1;const P=z[u];if(typeof P=="string")return tt(E,P);const M=z[y];return typeof M=="string"?tt(E,M):typeof M=="number"?tt(E,String(M)):!1}}),v=k(()=>{if(e.remote)return Y.value;{const{value:t}=ne,{value:u}=m;return!u.length||!e.filterable?t:Un(t,h.value,u,e.childrenField)}});function I(t){const u=e.remote,{value:y}=J,{value:E}=O,{value:z}=ie,P=[];return t.forEach(M=>{if(E.has(M))P.push(E.get(M));else if(u&&y.has(M))P.push(y.get(M));else if(z){const X=z(M);X&&P.push(X)}}),P}const W=k(()=>{if(e.multiple){const{value:t}=R;return Array.isArray(t)?I(t):[]}return null}),H=k(()=>{const{value:t}=R;return!e.multiple&&!Array.isArray(t)?t===null?null:I([t])[0]||null:null}),V=fn(e),{mergedSizeRef:$,mergedDisabledRef:j,mergedStatusRef:i}=V;function f(t,u){const{onChange:y,"onUpdate:value":E,onUpdateValue:z}=e,{nTriggerFormChange:P,nTriggerFormInput:M}=V;y&&ae(y,t,u),z&&ae(z,t,u),E&&ae(E,t,u),b.value=t,P(),M()}function A(t){const{onBlur:u}=e,{nTriggerFormBlur:y}=V;u&&ae(u,t),y()}function Z(){const{onClear:t}=e;t&&ae(t)}function se(t){const{onFocus:u}=e,{nTriggerFormFocus:y}=V;u&&ae(u,t),y()}function Se(t){const{onSearch:u}=e;u&&ae(u,t)}function Re(t){const{onScroll:u}=e;u&&ae(u,t)}function pe(){var t;const{remote:u,multiple:y}=e;if(u){const{value:E}=J;if(y){const{valueField:z}=e;(t=W.value)===null||t===void 0||t.forEach(P=>{E.set(P[z],P)})}else{const z=H.value;z&&E.set(z[e.valueField],z)}}}function me(t){const{onUpdateShow:u,"onUpdate:show":y}=e;u&&ae(u,t),y&&ae(y,t),B.value=t}function ue(){j.value||(me(!0),B.value=!0,e.filterable&&Ge())}function ee(){me(!1)}function we(){m.value="",q.value=G}const ce=T(!1);function Fe(){e.filterable&&(ce.value=!0)}function ve(){e.filterable&&(ce.value=!1,p.value||we())}function ge(){j.value||(p.value?e.filterable||ee():ue())}function Te(t){var u,y;!((y=(u=C.value)===null||u===void 0?void 0:u.selfRef)===null||y===void 0)&&y.contains(t.relatedTarget)||(w.value=!1,A(t),ee())}function Oe(t){se(t),w.value=!0}function ze(t){w.value=!0}function ye(t){var u;!((u=F.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(w.value=!1,A(t),ee())}function xe(){var t;(t=F.value)===null||t===void 0||t.focus(),ee()}function oe(t){var u;p.value&&(!((u=F.value)===null||u===void 0)&&u.$el.contains(t.target)||ee())}function d(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:u}=e,{value:y}=O;if(u){const{value:E}=J;return t.filter(z=>y.has(z)||E.has(z))}else return t.filter(E=>y.has(E))}}function g(t){K(t.rawNode)}function K(t){if(j.value)return;const{tag:u,remote:y,clearFilterAfterSelect:E,valueField:z}=e;if(u&&!y){const{value:P}=q,M=P[0]||null;if(M){const X=D.value;X.length?X.push(M):D.value=[M],q.value=G}}if(y&&J.value.set(t[z],t),e.multiple){const P=d(R.value),M=P.findIndex(X=>X===t[z]);if(~M){if(P.splice(M,1),u&&!y){const X=Pe(t[z]);~X&&(D.value.splice(X,1),E&&(m.value=""))}}else P.push(t[z]),E&&(m.value="");f(P,I(P))}else{if(u&&!y){const P=Pe(t[z]);~P?D.value=[D.value[P]]:D.value=G}_e(),ee(),f(t[z],t)}}function Pe(t){return D.value.findIndex(y=>y[e.valueField]===t)}function He(t){p.value||ue();const{value:u}=t.target;m.value=u;const{tag:y,remote:E}=e;if(Se(u),y&&!E){if(!u){q.value=G;return}const{onCreate:z}=e,P=z?z(u):{[e.labelField]:u,[e.valueField]:u},{valueField:M}=e;Y.value.some(X=>X[M]===P[M])||D.value.some(X=>X[M]===P[M])?q.value=G:q.value=[P]}}function je(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&ee(),Z(),u?f([],[]):f(null,null)}function Ke(t){!De(t,"action")&&!De(t,"empty")&&t.preventDefault()}function Ue(t){Re(t)}function Ie(t){var u,y,E,z,P;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=F.value)===null||u===void 0)&&u.isCompositing)){if(p.value){const M=(y=C.value)===null||y===void 0?void 0:y.getPendingTmNode();M?g(M):e.filterable||(ee(),_e())}else if(ue(),e.tag&&ce.value){const M=q.value[0];if(M){const X=M[e.valueField],{value:$e}=R;e.multiple&&Array.isArray($e)&&$e.some(Xe=>Xe===X)||K(M)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((E=C.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(z=C.value)===null||z===void 0||z.next():ue();break;case"Escape":p.value&&(bn(t),ee()),(P=F.value)===null||P===void 0||P.focus();break}}function _e(){var t;(t=F.value)===null||t===void 0||t.focus()}function Ge(){var t;(t=F.value)===null||t===void 0||t.focusInput()}function qe(){var t;!p.value||(t=L.value)===null||t===void 0||t.syncPosition()}pe(),Me(Q(e,"options"),pe);const Ye={focus:()=>{var t;(t=F.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=F.value)===null||t===void 0||t.blur()}},Be=k(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),fe=s?We("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:i,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:S,isMounted:hn(),triggerRef:F,menuRef:C,pattern:m,uncontrolledShow:B,mergedShow:p,adjustedTo:it(e),uncontrolledValue:b,mergedValue:R,followerRef:L,localizedPlaceholder:U,selectedOption:H,selectedOptions:W,mergedSize:$,mergedDisabled:j,focused:w,activeWithoutMenuOpen:ce,inlineThemeDisabled:s,onTriggerInputFocus:Fe,onTriggerInputBlur:ve,handleTriggerOrMenuResize:qe,handleMenuFocus:ze,handleMenuBlur:ye,handleMenuTabOut:xe,handleTriggerClick:ge,handleToggle:g,handleDeleteOption:K,handlePatternInput:He,handleClear:je,handleTriggerBlur:Te,handleTriggerFocus:Oe,handleKeydown:Ie,handleMenuAfterLeave:we,handleMenuClickOutside:oe,handleMenuScroll:Ue,handleMenuKeydown:Ie,handleMenuMousedown:Ke,mergedTheme:c,cssVars:s?void 0:Be,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Rn,null,{default:()=>[r(Fn,null,{default:()=>r(jn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),r(Tn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),vn(r(Wn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,s;return[(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)]},action:()=>{var l,s;return[(s=(l=this.$slots).action)===null||s===void 0?void 0:s.call(l)]}}),this.displayDirective==="show"?[[gn,this.mergedShow],[ct,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ct,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Wn as N,Pn as V,io as _,Nn as a,Kn as c,Qe as m};
