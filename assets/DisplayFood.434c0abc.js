import{o as n,c as s,b as t,d as _,h as x,t as c,u as l,j as d,F as u,k as h,l as g,m as w,n as k,p as $,e as m,w as y}from"./index.06a0ff14.js";const b={xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},B=t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"},null,-1),C=[B];function F(e,o){return n(),s("svg",b,C)}var I={render:F};const L={class:"flex justify-between items-center rounded-sm gap-4 p-4 border border-black"},D={key:0,class:"text-xs"},S={class:"font-bold text-lg"},j={class:"flex pt-2"},N={key:0,class:"pt-2"},V={class:"w-1/2"},M=["alt"],O=_({__name:"FoodCard",props:{menuItem:null,imageUrl:null,rating:null,comment:null,date:null},setup(e){const o=e,a=x(()=>{if(o.date)return new Date(o.date).toLocaleDateString()});return(v,f)=>(n(),s("div",L,[t("div",null,[t("ul",null,[t("li",null,[e.date?(n(),s("div",D,c(l(a)),1)):d("",!0),t("div",S,c(e.menuItem),1)])]),t("div",j,[(n(!0),s(u,null,h(e.rating,i=>(n(),g(l(I),{class:"w-6",key:`${i}-star-rating`}))),128))]),e.comment?(n(),s("div",N,'"'+c(e.comment)+'"',1)):d("",!0)]),t("div",V,[t("img",{class:"object-fit",src:"https://via.placeholder.com/150x150",alt:e.menuItem},null,8,M)])]))}}),R={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m15 19-7-7 7-7"},null,-1),E=[z];function H(e,o){return n(),s("svg",R,E)}var U={render:H};const q={class:"flex items-center p-2"},A={class:"pr-2"},G={class:"font-bold text-lg"},J={key:0,class:"flex flex-col gap-4 m-auto p-2"},P=_({__name:"DisplayFood",props:{id:null,restaurant:null},setup(e){const o=e,a=w();return k(async()=>{a.getFoodOrdered(o.id)}),(v,f)=>{const i=$("RouterLink");return n(),s(u,null,[t("header",q,[t("div",A,[m(i,{to:{name:"Home"}},{default:y(()=>[m(l(U),{class:"hover:transition-transform hover:scale-125 hover:ease-in"})]),_:1})]),t("div",G,c(e.restaurant),1)]),l(a).getFoodIsLoading?d("",!0):(n(),s("div",J,[(n(!0),s(u,null,h(l(a).foodOrdered,(r,p)=>(n(),g(O,{key:`${p}-${r.name}`,"menu-item":r.name,rating:r.rating,comment:r.comment,date:r.dateCreated},null,8,["menu-item","rating","comment","date"]))),128))]))],64)}}});export{P as default};
