import{a as c,d,u,k as r,j as m,l as h,h as f,al as p}from"./index.6e57c2f1.js";const v=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),C=Object.assign({},r.props),g=d({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=u(e),a=r("Typography","-a",v,p,e,o),t=m(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=n?h("a",void 0,t,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:t,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as _};
