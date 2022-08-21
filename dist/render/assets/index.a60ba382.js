import{d as y,a0 as L,W as S,ca as U,ae as M,X as $,Y as I,a4 as e,a3 as a,a5 as r,af as k,Z as u,K as z,a6 as w,dj as G,a8 as A,c9 as T,dd as R,_ as N,h as x,$ as B,ci as F,dk as V,aj as j,ac as D,r as Y,o as K}from"./index.6e57c2f1.js";import{_ as O,a as E}from"./Grid.aa914ce4.js";import{_ as W}from"./a.b5248c45.js";import{_ as v}from"./Space.2af8f31d.js";import{_ as X}from"./Input.bebd1abf.js";import{_ as Z}from"./Divider.b8e6dbcc.js";import{a as H,_ as J}from"./Popconfirm.82d98610.js";import{_ as Q}from"./Spin.d2f52ed0.js";import{_ as ee}from"./InputNumber.7f06f099.js";import{_ as ae}from"./FormItemGridItem.51c65ddc.js";import{_ as se,a as te}from"./Tabs.c8819703.js";import"./next-frame-once.e0fd6a2a.js";import"./FormItem.5b33b5bf.js";import"./get.556bbf62.js";import"./use-merged-state.14d1217d.js";import"./Checkbox.cf4db95d.js";import"./RadioGroup.eb33361c.js";import"./Popover.1a4e3ffd.js";import"./cssr.27de2d53.js";import"./use-compitable.be4359a7.js";import"./Dropdown.fdbd6883.js";import"./Tag.f1f916fe.js";import"./Select.cca7837d.js";import"./Add.fbc88024.js";const ne=r("span",{class:"profile-summary-label"},"Account email",-1),oe={class:"profile-summary-data"},ie=r("span",{class:"profile-summary-label"},"Password",-1),re=w(" Change password "),le=r("span",{class:"profile-summary-label"},"Plan",-1),ce={class:"profile-summary-data"},de=w(" Upgrade "),_e=w(" Logout "),ue={class:"d-flex flex-row mt-3 mb-2 align-items-center"},pe={class:"d-flex flex-row mt-3 mb-2 align-items-center"},me={class:"d-flex flex-row mt-3 mb-2 align-items-center"},fe=w(" Cancel "),ge=w(" Submit "),we={name:"General"},he=y({...we,setup(b){const l=L(),{user:c}=S(l),{email:o,plan:m}=U(c.value),t=M({changePassword:{showModal:!1,submitting:!1,oldPassword:"",newPassword:"",confirmNewPassword:""}}),f=()=>{t.changePassword={showModal:!1,submitting:!1,oldPassword:"",newPassword:"",confirmNewPassword:""}},p=async()=>{const{oldPassword:h,newPassword:s,confirmNewPassword:n}=U(t.changePassword);if(!h.value)window.$message.warning("Old password is required");else if(!s.value)window.$message.warning("New password is required");else if(s.value!==n.value)window.$message.warning("New password is not match");else try{t.changePassword.submitting=!0;const i=await G({old_password:h.value,new_password:s.value}),{success:d,data:_}=i.data;d?(window.$message.success("Password changed"),f()):_==="Sai m\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i!"&&window.$message.error("Invalid old password")}catch{}finally{t.changePassword.submitting=!1}};return(h,s)=>{const n=O,i=E,d=W,_=A,g=v,C=X,q=T;return $(),I(z,null,[e(g,{vertical:""},{default:a(()=>[e(i,{cols:12},{default:a(()=>[e(n,{span:"2"},{default:a(()=>[ne]),_:1}),e(n,{span:"10"},{default:a(()=>[r("span",oe,k(u(o)),1)]),_:1})]),_:1}),e(i,{cols:12},{default:a(()=>[e(n,{span:"2"},{default:a(()=>[ie]),_:1}),e(n,{span:"10"},{default:a(()=>[e(d,{onClick:s[0]||(s[0]=P=>t.changePassword.showModal=!0)},{default:a(()=>[re]),_:1})]),_:1})]),_:1}),e(i,{cols:12},{default:a(()=>[e(n,{span:"2"},{default:a(()=>[le]),_:1}),e(n,{span:"10"},{default:a(()=>[e(g,null,{default:a(()=>[r("span",ce,k(u(m).name),1),r("span",null,"("+k(u(m).profile_limit)+" Profiles)",1),e(_,{type:"primary",onClick:u(l).upgradePlan},{default:a(()=>[de]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(_,{type:"error",ghost:"",onClick:u(l).logout},{default:a(()=>[_e]),_:1},8,["onClick"])]),_:1}),e(q,{show:t.changePassword.showModal,"onUpdate:show":s[4]||(s[4]=P=>t.changePassword.showModal=P),"transform-origin":"center",preset:"dialog",title:"Change your password"},{action:a(()=>[e(g,null,{default:a(()=>[e(_,{size:"small",disabled:t.changePassword.submitting,onClick:f},{default:a(()=>[fe]),_:1},8,["disabled"]),e(_,{size:"small",type:"primary",disabled:t.changePassword.submitting,loading:t.changePassword.submitting,onClick:p},{default:a(()=>[ge]),_:1},8,["disabled","loading"])]),_:1})]),default:a(()=>[r("div",ue,[e(C,{value:t.changePassword.oldPassword,"onUpdate:value":s[1]||(s[1]=P=>t.changePassword.oldPassword=P),type:"password",placeholder:"Your password"},null,8,["value"])]),r("div",pe,[e(C,{value:t.changePassword.newPassword,"onUpdate:value":s[2]||(s[2]=P=>t.changePassword.newPassword=P),type:"password",placeholder:"New password"},null,8,["value"])]),r("div",me,[e(C,{value:t.changePassword.confirmNewPassword,"onUpdate:value":s[3]||(s[3]=P=>t.changePassword.confirmNewPassword=P),type:"password",placeholder:"Confirm new password"},null,8,["value"])])]),_:1},8,["show"])],64)}}}),Pe=async()=>await R.get("affiliate"),be=async()=>await R.post("affiliate/create"),ve=w(" Create Link "),ye={name:"Affiliate"},$e=y({...ye,setup(b,{expose:l}){const c="https://affiliate.genlogin.com/",o=M({loading:!1,submitted:!1,affiliateList:[]}),m=[{title:"#",key:"index",render(s,n){return n+1},width:100},{title:"Link",key:"link",render(s,n){const{affiliate_code:i}=s,d=c+i;return x(v,{},{default:()=>[x("span",d),x(B,{type:"copy",size:"20",class:"cursor-pointer",onClick:()=>h(d)})]})}},{title:"Clicks",key:"click"}],t={pageSize:20},f=async()=>{try{o.loading=!0;const s=await Pe(),{success:n,data:i,msg:d}=s.data;if(n){const{affiliates:_}=i;o.affiliateList=_}}catch{}finally{o.loading=!1}};f();const p=async()=>{try{o.submitted=!0;const s=await be(),{affiliate_code:n}=s.data;window.$message.success("New code created"),await f()}catch{}finally{o.submitted=!1}},h=async(s="")=>{await navigator.clipboard.writeText(s),window.$message.success("Copied to clipboard")};return l({AFFILIATE_URL:c}),(s,n)=>{const i=A,d=Z,_=H,g=Q;return $(),N(u(v),{vertical:""},{default:a(()=>[e(i,{type:"primary",loading:o.submitted,disabled:o.submitted,onClick:p},{default:a(()=>[ve]),_:1},8,["loading","disabled"]),e(d),e(g,{show:o.loading},{default:a(()=>[e(_,{columns:m,data:o.affiliateList,pagination:t,bordered:!0,"max-height":700},null,8,["data"])]),_:1},8,["show"])]),_:1})}}}),Ce=F("settings",{state:()=>({portRange:{min:2e3,max:5e4}}),actions:{async updatePortRange(){const{min:b,max:l}=this.$state.portRange;b>l?window.$message.warning("Invalid port range"):b===l?window.$message.warning("Max port must be larger than min port"):(await V(b,l),window.$message.success("Updated port range"))}},persist:!0}),ke=Ce,xe=r("div",null,[r("strong",{class:"text-xl"},"Cache"),r("hr")],-1),Se=w(" Clear storage "),Ae=w(" Are you sure to clear all cache storages? "),Ne=r("div",null,[r("strong",{class:"text-xl"},"Port range"),r("hr")],-1),Ue=w(" Update "),Le=y({__name:"Settings",setup(b){const l=ke(),{portRange:c}=S(l),o=L(),{userInfo:m}=S(o),t=async()=>{await j(m.value.id)?window.$message.success("Cache cleared!"):window.$message.warning("Clear cache failed!")};return(f,p)=>{const h=A,s=J,n=v,i=ee,d=ae,_=E;return $(),N(n,{vertical:""},{default:a(()=>[e(n,{vertical:""},{default:a(()=>[xe,e(s,{placement:"bottom",onPositiveClick:t},{trigger:a(()=>[e(h,{type:"primary"},{default:a(()=>[Se]),_:1})]),default:a(()=>[Ae]),_:1})]),_:1}),e(n,{vertical:""},{default:a(()=>[Ne,e(_,{span:12,"x-gap":12},{default:a(()=>[e(d,{span:3,label:"Min Port","show-feedback":!1,"show-require-mark":!1},{default:a(()=>[e(i,{value:u(c).min,"onUpdate:value":p[0]||(p[0]=g=>u(c).min=g),clearable:"",placeholder:"E.g: 5000",min:2e3},null,8,["value"])]),_:1}),e(d,{span:3,label:"Max Port","show-feedback":!1,"show-require-mark":!1},{default:a(()=>[e(i,{value:u(c).max,"onUpdate:value":p[1]||(p[1]=g=>u(c).max=g),clearable:"",placeholder:"E.g: 20000",min:u(c).min,max:5e4},null,8,["value","min"])]),_:1})]),_:1}),e(h,{type:"primary",onClick:u(l).updatePortRange},{default:a(()=>[Ue]),_:1},8,["onClick"])]),_:1})]),_:1})}}}),Me={name:"MyAccount"},ta=y({...Me,setup(b){const l=D(),c=Y("General");return K(()=>{const{tab:o}=l.query;o&&(c.value=o)}),(o,m)=>{const t=se,f=te;return $(),N(f,{value:c.value,"onUpdate:value":m[0]||(m[0]=p=>c.value=p),"default-value":"General",size:"large"},{default:a(()=>[e(t,{name:"General",tab:"General"},{default:a(()=>[e(he)]),_:1}),e(t,{name:"Affiliate Program",tab:"Affiliate Program"},{default:a(()=>[e($e)]),_:1}),e(t,{name:"Settings",tab:"Settings"},{default:a(()=>[e(Le)]),_:1})]),_:1},8,["value"])}}});export{ta as default};
