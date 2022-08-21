import{a as C,A as i,d as $,u as B,k as u,j as c,l as z,h as l,al as T,s as _}from"./index.6e57c2f1.js";import{u as R}from"./use-compitable.be4359a7.js";const S=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),V=Object.assign(Object.assign({},u.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),j=$({name:"Text",props:V,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=B(e),o=u("Typography","-text",S,T,e,r),s=c(()=>{const{depth:a,type:d}=e,h=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:_("textColor",d),{common:{fontWeightStrong:m,fontFamilyMono:g,cubicBezierEaseInOut:f},self:{codeTextColor:x,codeBorderRadius:b,codeColor:v,codeBorder:y,[h]:p}}=o.value;return{"--n-bezier":f,"--n-text-color":p,"--n-font-weight-strong":m,"--n-font-famliy-mono":g,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":v,"--n-code-border":y}}),t=n?z("text",c(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,compitableTag:R(e,["as","tag"]),cssVars:n?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r);return this.code?l("code",{class:s,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:s,style:this.cssVars},t):l(this.compitableTag||"span",{class:s,style:this.cssVars},t)}});export{j as _};
