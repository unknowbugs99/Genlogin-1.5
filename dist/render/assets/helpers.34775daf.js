import"./index.6e57c2f1.js";const c=()=>{const e=window.navigator.userAgent,t=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],s=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"];let o=null;return n.includes(t)?o="Mac OS":i.includes(t)?o="iOS":s.includes(t)?o="Windows":/Android/.test(e)?o="Android":!o&&/Linux/.test(t)&&(o="Linux"),o},r=()=>Intl.DateTimeFormat().resolvedOptions().timeZone,d=async()=>{const e=document.createElement("script");e.text=`
  (function(d,t) {
var BASE_URL="https://chat.genlogin.com";
var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=BASE_URL+"/packs/js/sdk.js";
g.defer = true;
g.async = true;
s.parentNode.insertBefore(g,s);
g.onload=function(){
window.chatwootSDK.run({
websiteToken: 'Lc7yP48dszLmeefgswoyoMJE',
baseUrl: BASE_URL
})
}
})(document,"script");`,document.head.appendChild(e)},l=e=>!/ /g.test(e),g=async e=>{try{const{id:t}=e;await navigator.clipboard.writeText(t.toString()),window.$message.success("Profile Id copied")}catch(t){console.log(t)}};export{r as a,g as c,c as g,d as l,l as n};
