import{d as $,ae as q,r as w,a0 as U,ad as C,o as L,ak as T,X as f,Y as v,a5 as c,a4 as n,a3 as a,c2 as y,_ as A,a6 as d,af as B,a8 as E,c5 as F,c6 as I,c3 as P}from"./index.6e57c2f1.js";import{b as V}from"./headers.daf31bae.js";import{_ as M}from"./Input.bebd1abf.js";import{_ as j}from"./FormItem.5b33b5bf.js";import{_ as D}from"./Space.2af8f31d.js";import{_ as H}from"./Form.fcc80893.js";import"./use-merged-state.14d1217d.js";import"./get.556bbf62.js";const O={class:"login-wrapper"},X={class:"login-container"},Y={key:0},Z={class:"block mt-2"},z=d(" Register "),G={class:"block mt-2"},J=d(" Active "),K={class:"mt-5 flex justify-center"},Q=d(" Login "),le=$({__name:"Register",setup(W){const e=q({submitting:!1,firstName:"",lastName:"",email:"",password:"",phone_number:"",social_network:"",verifyToken:"",step:"register"}),g=w(null),k=w(null),h=i=>{try{return Boolean(new URL(i))}catch{return!1}},b=U(),N=C(),x=async()=>{if(e.firstName)if(e.lastName)if(e.email)if(e.password){if(!e.phone_number&&!e.social_network){window.$message.warning("At least input one contact method");return}}else{window.$message.warning("Password cannot be blank");return}else{window.$message.warning("Email cannot be blank");return}else{window.$message.warning("Last name cannot be blank");return}else{window.$message.warning("First name cannot be blank");return}if(e.social_network.length&&!h(e.social_network)){window.$message.warning("Social network must be a valid URL");return}if(e.submitting)return;const{firstName:i,lastName:t,email:o,password:r,phone_number:l,social_network:_}=e,u={first_name:i.trim(),last_name:t.trim(),email:o.trim(),password:r,phone_number:l.trim(),social_network:_.trim()};try{e.submitting=!0;const m=await F(u),{success:p,msg:s}=m.data;if(p){e.step="confirm",window.$message.success("Register success");return}}catch{}finally{e.submitting=!1}},R=async()=>{const i={username:e.email,password:e.password};try{const t=await P(i);if(t){const{data:o}=t.data;b.$patch({keepLogin:!1,keepLoginInfo:null}),await b.setAuth(o),N.push({name:"main.pricing"}),window.$message.success("Login success")}}catch{}finally{e.submitting=!1}},S=async()=>{if(!e.submitting)try{e.submitting=!0;const i={email:e.email,verify_token:e.verifyToken},t=await I(i),{success:o}=t.data;if(o){window.$message.success("Email verified success"),await R();return}}catch{}finally{e.submitting=!1}};return L(()=>{g.value.focus()}),(i,t)=>{const o=M,r=j,l=E,_=D,u=H,m=V,p=T("router-link");return f(),v("div",O,[c("div",X,[e.step==="register"?(f(),v("div",Y,[n(u,{id:"form-login",onSubmit:y(x,["prevent"])},{default:a(()=>[n(r,{required:"",label:"First name"},{default:a(()=>[n(o,{ref_key:"firstInputRef",ref:g,value:e.firstName,"onUpdate:value":t[0]||(t[0]=s=>e.firstName=s),autofocus:"",required:"",type:"text",placeholder:""},null,8,["value"])]),_:1}),n(r,{required:"",label:"Last name"},{default:a(()=>[n(o,{value:e.lastName,"onUpdate:value":t[1]||(t[1]=s=>e.lastName=s),required:"",type:"text",placeholder:""},null,8,["value"])]),_:1}),n(r,{required:"",label:"Email"},{default:a(()=>[n(o,{value:e.email,"onUpdate:value":t[2]||(t[2]=s=>e.email=s),required:"",placeholder:""},null,8,["value"])]),_:1}),n(r,{required:"",label:"Password"},{default:a(()=>[n(o,{value:e.password,"onUpdate:value":t[3]||(t[3]=s=>e.password=s),required:"",type:"password",placeholder:""},null,8,["value"])]),_:1}),n(r,{label:"Phone number"},{default:a(()=>[n(o,{value:e.phone_number,"onUpdate:value":t[4]||(t[4]=s=>e.phone_number=s),type:"text",placeholder:"+84..."},null,8,["value"])]),_:1}),n(r,{label:"Social network"},{default:a(()=>[n(o,{value:e.social_network,"onUpdate:value":t[5]||(t[5]=s=>e.social_network=s),type:"text",placeholder:"Telegram, Skype, Facebook, Zalo..."},null,8,["value"])]),_:1}),n(_,{vertical:""},{default:a(()=>[c("div",Z,[n(l,{"attr-type":"submit",type:"primary",block:"",strong:"",disabled:e.submitting,loading:e.submitting},{default:a(()=>[z]),_:1},8,["disabled","loading"])])]),_:1})]),_:1},8,["onSubmit"])])):(f(),A(u,{key:1,id:"form-login",onSubmit:y(S,["prevent"])},{default:a(()=>[n(m,{class:"text-center"},{default:a(()=>[d(" The activation code was send "+B(e.email),1)]),_:1}),n(r,{required:"",label:"Confirm code"},{default:a(()=>[n(o,{ref_key:"confirmCodeRef",ref:k,value:e.verifyToken,"onUpdate:value":t[6]||(t[6]=s=>e.verifyToken=s),required:"",type:"text",placeholder:""},null,8,["value"])]),_:1}),c("div",G,[n(l,{id:"confirm-button","attr-type":"submit",type:"primary",block:"",strong:"",disabled:e.submitting,loading:e.submitting},{default:a(()=>[J]),_:1},8,["disabled","loading"])])]),_:1},8,["onSubmit"])),c("div",K,[n(p,{to:"/login",class:"text-blue-500"},{default:a(()=>[Q]),_:1})])])])}}});export{le as default};
