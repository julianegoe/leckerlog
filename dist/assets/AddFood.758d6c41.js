import{d as c,r as v,o as b,c as V,b as s,t as g,q as C,v as I,F as O,f as h,U,K as $,V as m,x as p,y as F,T as x,z as w,h as D,e as i,u as o,A as R}from"./index.06a0ff14.js";const T=["for"],k=["id","ame"],f=c({__name:"AppTextInput",props:{label:null,id:null,modelValue:null},emits:["update:modelValue"],setup(t,{emit:n}){const d=v(t.modelValue),u=a=>{n("update:modelValue",a)};return(a,e)=>(b(),V(O,null,[s("label",{class:"relative -bottom-3 left-4 px-1 bg-white text-sm",for:t.id},g(t.label),9,T),C(s("input",{onChange:e[0]||(e[0]=r=>u(d.value)),"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),id:t.id,ame:t.id,class:"py-2 px-4 border border-black w-full",type:"text"},null,40,k),[[I,d.value]])],64))}}),y=["for"],S=["id","ame"],A=c({__name:"AppNumberInput",props:{label:null,id:null,modelValue:null},emits:["update:modelValue"],setup(t,{emit:n}){const d=v(t.modelValue),u=a=>{n("update:modelValue",a)};return(a,e)=>(b(),V(O,null,[s("label",{class:"relative -bottom-3 left-4 px-1 bg-white text-sm",for:t.id},g(t.label),9,y),C(s("input",{min:0,max:5,onChange:e[0]||(e[0]=r=>u(d.value)),"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),id:t.id,ame:t.id,class:"py-2 px-4 border border-black w-full",type:"number"},null,40,S),[[I,d.value]])],64))}}),B=h(),z=async t=>{const n=U(m(p,"Restaurants"),$("userId","==",B.userId),$("name","==",t.restaurant.name)),l=await F(n);let d;if(l.forEach(u=>{d=u.id}),d){const u=`Restaurants/${d}/foodOrdered`;try{await x(m(p,u),{...t.restaurant.foodOrdered[0],dateCreated:w.fromDate(new Date(t.restaurant.foodOrdered[0].dateCreated))}),window.alert("Gericht hinzugef\xFCgt")}catch(a){console.log(a)}}else{const a=await x(m(p,"Restaurants"),{name:t.restaurant.name,cuisine:t.restaurant.cuisine,userId:t.restaurant.userId,dateCreated:t.restaurant.dateCreated});try{await x(m(p,`Restaurants/${a.id}/foodOrdered`),t.restaurant.foodOrdered[0]),window.alert("Gericht hinzugef\xFCgt")}catch(e){console.log(e)}}},K=["for"],q=["id","ame"],G=c({__name:"AppDateInput",props:{label:null,id:null,modelValue:null},emits:["update:modelValue"],setup(t,{emit:n}){const d=v(t.modelValue),u=a=>{n("update:modelValue",a)};return(a,e)=>(b(),V(O,null,[s("label",{class:"relative -bottom-3 left-4 px-1 bg-white text-sm",for:t.id},g(t.label),9,K),C(s("input",{onChange:e[0]||(e[0]=r=>u(d.value)),"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),id:t.id,ame:t.id,class:"py-2 px-4 border border-black w-full",type:"date"},null,40,q),[[I,d.value]])],64))}}),N={class:"m-auto p-2"},M=["onSubmit"],H=s("button",{class:"mt-4 p-2 border border-black",type:"submit"},"Hinzuf\xFCgen",-1),J=c({__name:"AddFood",setup(t){const n=h(),l=D(()=>({restaurant:{restaurantId:"",dateCreated:w.fromDate(new Date),name:"",userId:n.userId,cuisine:"",foodOrdered:[{userId:n.userId,dateCreated:null,name:"",rating:0,comment:""}]}})),d=()=>{z(l.value)};return(u,a)=>(b(),V("div",N,[s("form",{onSubmit:R(d,["prevent"])},[i(f,{modelValue:o(l).restaurant.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o(l).restaurant.name=e),label:"Restaurant",id:"restaurant-input"},null,8,["modelValue"]),i(f,{modelValue:o(l).restaurant.cuisine,"onUpdate:modelValue":a[1]||(a[1]=e=>o(l).restaurant.cuisine=e),label:"K\xFCche",id:"cuisine-input"},null,8,["modelValue"]),i(f,{modelValue:o(l).restaurant.foodOrdered[0].name,"onUpdate:modelValue":a[2]||(a[2]=e=>o(l).restaurant.foodOrdered[0].name=e),label:"Gericht",id:"meal-input"},null,8,["modelValue"]),i(G,{modelValue:o(l).restaurant.foodOrdered[0].dateCreated,"onUpdate:modelValue":a[3]||(a[3]=e=>o(l).restaurant.foodOrdered[0].dateCreated=e),label:"Bestellt am",id:"date-input"},null,8,["modelValue"]),i(A,{modelValue:o(l).restaurant.foodOrdered[0].rating,"onUpdate:modelValue":a[4]||(a[4]=e=>o(l).restaurant.foodOrdered[0].rating=e),label:"Bewertung",id:"rating-input"},null,8,["modelValue"]),i(f,{modelValue:o(l).restaurant.foodOrdered[0].comment,"onUpdate:modelValue":a[5]||(a[5]=e=>o(l).restaurant.foodOrdered[0].comment=e),label:"Kommentar",id:"comment-input"},null,8,["modelValue"]),H],40,M)]))}});export{J as default};