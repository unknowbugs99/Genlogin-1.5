import{d as z,X as m,Y as b,a5 as C,W as N,r as A,j as Q,_ as M,a3 as o,a4 as e,Z as s,c9 as ee,a1 as oe,ca as se,cb as ne,ab as G,c8 as le,a6 as n,af as I,K as te,a_ as ae,a8 as ie}from"./index.6e57c2f1.js";import{F as re,_ as ce}from"./ProfileSummary.vue_vue_type_style_index_0_lang.8714f0d0.js";import{u as K,a as R,b as ue,C as _e,S as pe,c as de,A as fe,D as me,d as ge,e as he,f as we,_ as ke,g as ve,h as Pe}from"./ShareOnCloud.vue_vue_type_script_setup_true_lang.0e4e89b5.js";import{_ as ye}from"./Select.cca7837d.js";import{I as Ce}from"./IosMore.7ba500b7.js";import{_ as Se,a as $e,b as xe}from"./Popconfirm.82d98610.js";import{_ as Be}from"./Input.bebd1abf.js";import{_ as be}from"./Dropdown.fdbd6883.js";import{_ as Ae}from"./Space.2af8f31d.js";import{_ as Me,a as ze}from"./Grid.aa914ce4.js";const Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ge=C("path",{d:"M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22c18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0 0 11.37-9.15a156.24 156.24 0 0 1 42.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 0 1 107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0 0 12.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432z",fill:"currentColor"},null,-1),Ie=[Ge],O=z({name:"Cloud",render:function(_,k){return m(),b("svg",Te,Ie)}}),Oe=C("div",null,"Assign to group",-1),Ne={class:"d-flex flex-row mt-3 mb-2 align-items-center"},Ke=z({__name:"AssignBulkProfilesToGroupModal",setup(w){const{showModals:_}=K(),{checkedRowKeys:k}=R(),t=ue(),{list:a}=N(t),p=A([]),S=Q(()=>a.value.map((l,u)=>({label:l.name,value:l.id}))),v=()=>{p.value=[],_.assignBulkProfiles=!1},P=async()=>{try{window.$message.loading("Assigning..."),await Promise.allSettled(k.value.map(async l=>await t.addProfileToGroup([l],p.value))),window.$message.destroyAll(),window.$message.success("Profile assigned"),v()}catch{window.$message.info("Profile assign failed")}finally{window.$message.destroyAll()}};return(l,u)=>{const d=ye,$=ee;return m(),M($,{id:"modal-assign-profiles",show:s(_).assignBulkProfiles,"onUpdate:show":u[1]||(u[1]=g=>s(_).assignBulkProfiles=g),"transform-origin":"center",preset:"dialog",title:"","positive-text":"Assign","negative-text":"Cancel","mask-closable":!1,onPositiveClick:P,onNegativeClick:v},{header:o(()=>[Oe]),default:o(()=>[C("div",Ne,[e(d,{value:p.value,"onUpdate:value":u[0]||(u[0]=g=>p.value=g),filterable:"",options:s(S)},null,8,["value","options"])])]),_:1},8,["show"])}}});const Re={key:0,class:"bulk-actions py-2"},Ue=n(" Start "),De=n(" Stop "),Fe=n(" New fingerprint "),Ve=n(" Confirm to change fingerprint selected profiles? "),je=n(" Share on cloud "),Ee=n(" Confirm share on cloud selected profiles? "),He=n(" Stop share on cloud "),We=n(" Confirm stop share on cloud selected profiles? "),Xe=n(" Assign to group "),Ye={class:"flex mt-2"},io=z({__name:"ProfileTable",props:{profiles:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(w,{expose:_}){const k=w,t=oe(),{pagination:a}=N(t),{profiles:p}=se(k),{rowProps:S,profileColumns:v,selectedProfile:P,selectedProfiles:l}=K(),{bulkMoreActions:u,checkedRowKeys:d,cancelBulk:$,startBulkProfiles:g,stopBulkProfiles:U,handleSelectBulkMore:D,assignProfilesToGroup:F,shareProfilesOnCloud:Ze,stopShareProfilesOnCloud:qe,newFingerPrint:V}=R(),j=A(1),y=A(""),E=async()=>{const i=a.value.limit*(j.value-1);await t.getProfiles({offset:i,search:y.value})},H=async i=>{const f=a.value.limit*(i-1);await t.getProfiles({offset:f,search:y.value})},W=async()=>{try{await t.shareOnCloudProfiles(d.value),window.$message.success("Shared profiles on cloud")}catch{window.$message.warning("Share profiles on cloud failed")}},X=async()=>{try{await t.shareOnCloudProfiles(d.value,!1),window.$message.success("Stopped share profiles on cloud")}catch{window.$message.warning("Stop share profiles on cloud failed")}};return _({checkedRowKeys:d}),(i,f)=>{const Y=Be,r=ae,c=ie,x=Se,Z=be,B=Ae,q=$e,J=xe,T=Me,L=ze;return m(),b(te,null,[e(B,null,{default:o(()=>[e(Y,{value:y.value,"onUpdate:value":f[0]||(f[0]=h=>y.value=h),type:"text",placeholder:"Search...",clearable:"",onKeyup:ne(E,["enter"])},null,8,["value","onKeyup"]),e(L,{"x-gap":"12",cols:3},{default:o(()=>[e(T,{span:"2"},{default:o(()=>[s(d).length?(m(),b("div",Re,[e(B,null,{default:o(()=>[e(c,{size:"small",ghost:"",onClick:s($)},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(_e))]),_:1})]),_:1},8,["onClick"]),e(c,{size:"small",type:"primary",onClick:s(g)},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(pe))]),_:1})]),default:o(()=>[Ue]),_:1},8,["onClick"]),e(c,{size:"small",ghost:"",type:"error",onClick:s(U)},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(de))]),_:1})]),default:o(()=>[De]),_:1},8,["onClick"]),e(x,{onPositiveClick:s(V)},{trigger:o(()=>[e(c,{size:"small",ghost:"",type:"success"},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(re))]),_:1})]),default:o(()=>[Fe]),_:1})]),default:o(()=>[Ve]),_:1},8,["onPositiveClick"]),i.$route.name==="main.profiles.local"?(m(),M(x,{key:0,onPositiveClick:W},{trigger:o(()=>[e(c,{size:"small",ghost:"",type:"success"},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(O))]),_:1})]),default:o(()=>[je]),_:1})]),default:o(()=>[Ee]),_:1})):i.$route.name==="main.profiles.cloud"?(m(),M(x,{key:1,onPositiveClick:X},{trigger:o(()=>[e(c,{size:"small",ghost:"",type:"error"},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(O))]),_:1})]),default:o(()=>[He]),_:1})]),default:o(()=>[We]),_:1})):G("",!0),e(c,{size:"small",ghost:"",onClick:s(F)},{icon:o(()=>[e(r,null,{default:o(()=>[e(s(fe))]),_:1})]),default:o(()=>[Xe]),_:1},8,["onClick"]),e(Z,{trigger:"hover",options:s(u),onSelect:s(D)},{default:o(()=>[e(c,{size:"small"},{default:o(()=>[e(r,null,{default:o(()=>[e(s(Ce))]),_:1})]),_:1})]),_:1},8,["options","onSelect"])]),_:1})])):G("",!0),e(B,{vertical:""},{default:o(()=>[e(q,{"checked-row-keys":s(l),"onUpdate:checked-row-keys":f[1]||(f[1]=h=>le(l)?l.value=h:null),columns:s(v),data:s(p),"row-props":s(S),"row-key":h=>h.id,loading:w.loading,"max-height":700},null,8,["checked-row-keys","columns","data","row-props","row-key","loading"]),C("div",Ye,[e(J,{class:"order-2 ml-auto","item-count":s(a).total,"page-size":s(a).limit,"on-update:page":H},{prefix:o(()=>[n(" Total is "+I(s(a).total),1)]),suffix:o(()=>[n(I(s(a).limit)+" / page ",1)]),_:1},8,["item-count","page-size"])])]),_:1})]),_:1}),e(T,null,{default:o(()=>[e(ce,{profile:s(P)?s(P):void 0},null,8,["profile"])]),_:1})]),_:1})]),_:1}),e(me),e(ge),e(he),e(we),e(ke),e(ve),e(Ke),e(Pe)],64)}}});export{io as _};