import{d as p,r as b,o as c,c as V,a as r,t as f,w as g,v,F as x,b as w,e as i,u as s,f as S}from"./index.01f93b69.js";const $=["for"],F=["id","ame"],m=p({__name:"AppTextInput",props:{label:null,id:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:l}){const t=b(e.modelValue),n=a=>{l("update:modelValue",a)};return(a,u)=>(c(),V(x,null,[r("label",{class:"relative -bottom-3 left-4 px-1 bg-white text-sm",for:e.id},f(e.label),9,$),g(r("input",{onChange:u[0]||(u[0]=d=>n(t.value)),"onUpdate:modelValue":u[1]||(u[1]=d=>t.value=d),id:e.id,ame:e.id,class:"py-2 px-4 border border-black w-full",type:"text"},null,40,F),[[v,t.value]])],64))}}),I=["for"],U=["id","ame"],k=p({__name:"AppNumberInput",props:{label:null,id:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:l}){const t=b(e.modelValue),n=a=>{l("update:modelValue",a)};return(a,u)=>(c(),V(x,null,[r("label",{class:"relative -bottom-3 left-4 px-1 bg-white text-sm",for:e.id},f(e.label),9,I),g(r("input",{min:0,max:5,onChange:u[0]||(u[0]=d=>n(t.value)),"onUpdate:modelValue":u[1]||(u[1]=d=>t.value=d),id:e.id,ame:e.id,class:"py-2 px-4 border border-black w-full",type:"number"},null,40,U),[[v,t.value]])],64))}}),C=e=>{const l=localStorage.getItem("data")||"[]",o=JSON.parse(l);return o.length===0?[e]:o.filter(t=>t.restaurant===e.restaurant).length===0?[...o,e]:o.map(t=>t.restaurant===e.restaurant?{...t,meals:[...t.meals,e.meals[0]]}:t)},N={class:"m-auto p-2"},h=["onSubmit"],y=r("button",{class:"mt-4 p-2 border border-black",type:"submit"},"Hinzuf\xFCgen",-1),D=p({__name:"AddFood",setup(e){const l=w(()=>({restaurant:"",cuisine:"",meals:[{name:"",rating:0}]}));b([]);const o=()=>{const t=C(l.value);console.log(t),localStorage.setItem("data",JSON.stringify(t))};return(t,n)=>(c(),V("div",N,[r("form",{onSubmit:S(o,["prevent"])},[i(m,{modelValue:s(l).restaurant,"onUpdate:modelValue":n[0]||(n[0]=a=>s(l).restaurant=a),label:"Restaurant",id:"restaurant-input"},null,8,["modelValue"]),i(m,{modelValue:s(l).cuisine,"onUpdate:modelValue":n[1]||(n[1]=a=>s(l).cuisine=a),label:"K\xFCche",id:"cuisine-input"},null,8,["modelValue"]),i(m,{modelValue:s(l).meals[0].name,"onUpdate:modelValue":n[2]||(n[2]=a=>s(l).meals[0].name=a),label:"Gericht",id:"meal-input"},null,8,["modelValue"]),i(k,{modelValue:s(l).meals[0].rating,"onUpdate:modelValue":n[3]||(n[3]=a=>s(l).meals[0].rating=a),label:"Bewertung",id:"rating-input"},null,8,["modelValue"]),y],40,h)]))}});export{D as default};