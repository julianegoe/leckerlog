const am=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};am();function ac(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=ac(cm);function Xh(t){return!!t||t===""}function cc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?fm(s):cc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Me(t))return t;if(De(t))return t}}const um=/;(?![^(]*\))/g,hm=/:(.+)/;function fm(t){const e={};return t.split(um).forEach(n=>{if(n){const s=n.split(hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function lc(t){let e="";if(Me(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=lc(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vl=t=>Me(t)?t:t==null?"":K(t)||De(t)&&(t.toString===ef||!X(t.toString))?JSON.stringify(t,Yh,2):String(t),Yh=(t,e)=>e&&e.__v_isRef?Yh(t,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Jh(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!K(e)&&!tf(e)?String(e):e,ge={},as=[],_t=()=>{},dm=()=>!1,pm=/^on[^a-z]/,Zi=t=>pm.test(t),uc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gm=Object.prototype.hasOwnProperty,se=(t,e)=>gm.call(t,e),K=Array.isArray,cs=t=>eo(t)==="[object Map]",Jh=t=>eo(t)==="[object Set]",X=t=>typeof t=="function",Me=t=>typeof t=="string",fc=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Zh=t=>De(t)&&X(t.then)&&X(t.catch),ef=Object.prototype.toString,eo=t=>ef.call(t),mm=t=>eo(t).slice(8,-1),tf=t=>eo(t)==="[object Object]",dc=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ym=/-(\w)/g,Dt=to(t=>t.replace(ym,(e,n)=>n?n.toUpperCase():"")),vm=/\B([A-Z])/g,As=to(t=>t.replace(vm,"-$1").toLowerCase()),no=to(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bo=to(t=>t?`on${no(t)}`:""),rr=(t,e)=>!Object.is(t,e),ui=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ii=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bl;const wm=()=>Bl||(Bl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let St;class _m{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&St&&(this.parent=St,this.index=(St.scopes||(St.scopes=[])).push(this)-1)}run(e){if(this.active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Em(t,e=St){e&&e.active&&e.effects.push(t)}const pc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nf=t=>(t.w&pn)>0,sf=t=>(t.n&pn)>0,bm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pn},Im=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];nf(r)&&!sf(r)?r.delete(t):e[n++]=r,r.w&=~pn,r.n&=~pn}e.length=n}},da=new WeakMap;let $s=0,pn=1;const pa=30;let vt;const On=Symbol(""),ga=Symbol("");class gc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Em(this,s)}run(){if(!this.active)return this.fn();let e=vt,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,on=!0,pn=1<<++$s,$s<=pa?bm(this):$l(this),this.fn()}finally{$s<=pa&&Im(this),pn=1<<--$s,vt=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&($l(this),this.onStop&&this.onStop(),this.active=!1)}}function $l(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const rf=[];function ks(){rf.push(on),on=!1}function Rs(){const t=rf.pop();on=t===void 0?!0:t}function at(t,e,n){if(on&&vt){let s=da.get(t);s||da.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=pc()),of(r)}}function of(t,e){let n=!1;$s<=pa?sf(t)||(t.n|=pn,n=!nf(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function $t(t,e,n,s,r,i){const o=da.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?dc(n)&&a.push(o.get("length")):(a.push(o.get(On)),cs(t)&&a.push(o.get(ga)));break;case"delete":K(t)||(a.push(o.get(On)),cs(t)&&a.push(o.get(ga)));break;case"set":cs(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&ma(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ma(pc(c))}}function ma(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&jl(s);for(const s of n)s.computed||jl(s)}function jl(t,e){(t!==vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tm=ac("__proto__,__v_isRef,__isVue"),af=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fc)),Sm=mc(),Cm=mc(!1,!0),Am=mc(!0),ql=km();function km(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ks();const s=oe(this)[e].apply(this,n);return Rs(),s}}),t}function mc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Hm:ff:e?hf:uf).get(s))return s;const o=K(s);if(!t&&o&&se(ql,r))return Reflect.get(ql,r,i);const a=Reflect.get(s,r,i);return(fc(r)?af.has(r):Tm(r))||(t||at(s,"get",r),e)?a:Ge(a)?o&&dc(r)?a:a.value:De(a)?t?df(a):Sr(a):a}}const Rm=cf(),Nm=cf(!0);function cf(t=!1){return function(n,s,r,i){let o=n[s];if(ir(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&!ir(r)&&(ya(r)||(r=oe(r),o=oe(o)),!K(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=K(n)&&dc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?rr(r,o)&&$t(n,"set",s,r):$t(n,"add",s,r)),c}}function Dm(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&$t(t,"delete",e,void 0),s}function Om(t,e){const n=Reflect.has(t,e);return(!fc(e)||!af.has(e))&&at(t,"has",e),n}function xm(t){return at(t,"iterate",K(t)?"length":On),Reflect.ownKeys(t)}const lf={get:Sm,set:Rm,deleteProperty:Dm,has:Om,ownKeys:xm},Pm={get:Am,set(t,e){return!0},deleteProperty(t,e){return!0}},Mm=Xe({},lf,{get:Cm,set:Nm}),yc=t=>t,so=t=>Reflect.getPrototypeOf(t);function Xr(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=so(r),a=s?yc:n?_c:or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Yr(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Jr(t,e=!1){return t=t.__v_raw,!e&&at(oe(t),"iterate",On),Reflect.get(t,"size",t)}function Hl(t){t=oe(t);const e=oe(this);return so(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Kl(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=so(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?rr(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function zl(t){const e=oe(this),{has:n,get:s}=so(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&$t(e,"delete",t,void 0),i}function Wl(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function Zr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?yc:t?_c:or;return!t&&at(a,"iterate",On),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ei(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=cs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?yc:e?_c:or;return!e&&at(i,"iterate",c?ga:On),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:this}}function Lm(){const t={get(i){return Xr(this,i)},get size(){return Jr(this)},has:Yr,add:Hl,set:Kl,delete:zl,clear:Wl,forEach:Zr(!1,!1)},e={get(i){return Xr(this,i,!1,!0)},get size(){return Jr(this)},has:Yr,add:Hl,set:Kl,delete:zl,clear:Wl,forEach:Zr(!1,!0)},n={get(i){return Xr(this,i,!0)},get size(){return Jr(this,!0)},has(i){return Yr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Zr(!0,!1)},s={get(i){return Xr(this,i,!0,!0)},get size(){return Jr(this,!0)},has(i){return Yr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ei(i,!1,!1),n[i]=ei(i,!0,!1),e[i]=ei(i,!1,!0),s[i]=ei(i,!0,!0)}),[t,n,e,s]}const[Fm,Um,Vm,Bm]=Lm();function vc(t,e){const n=e?t?Bm:Vm:t?Um:Fm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const $m={get:vc(!1,!1)},jm={get:vc(!1,!0)},qm={get:vc(!0,!1)},uf=new WeakMap,hf=new WeakMap,ff=new WeakMap,Hm=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Km(mm(t))}function Sr(t){return ir(t)?t:wc(t,!1,lf,$m,uf)}function Wm(t){return wc(t,!1,Mm,jm,hf)}function df(t){return wc(t,!0,Pm,qm,ff)}function wc(t,e,n,s,r){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=zm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ls(t){return ir(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ya(t){return!!(t&&t.__v_isShallow)}function pf(t){return ls(t)||ir(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function gf(t){return Ii(t,"__v_skip",!0),t}const or=t=>De(t)?Sr(t):t,_c=t=>De(t)?df(t):t;function mf(t){on&&vt&&(t=oe(t),of(t.dep||(t.dep=pc())))}function yf(t,e){t=oe(t),t.dep&&ma(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function vf(t){return wf(t,!1)}function Gm(t){return wf(t,!0)}function wf(t,e){return Ge(t)?t:new Qm(t,e)}class Qm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:or(e)}get value(){return mf(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),rr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:or(e),yf(this))}}function Ks(t){return Ge(t)?t.value:t}const Xm={get:(t,e,n)=>Ks(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function _f(t){return ls(t)?t:new Proxy(t,Xm)}class Ym{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new gc(e,()=>{this._dirty||(this._dirty=!0,yf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return mf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Jm(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=_t):(s=t.get,r=t.set),new Ym(s,r,i||!r,n)}function an(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ro(i,e,n)}return r}function pt(t,e,n,s){if(X(t)){const i=an(t,e,n,s);return i&&Zh(i)&&i.catch(o=>{ro(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(pt(t[i],e,n,s));return r}function ro(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){an(c,null,10,[t,o,a]);return}}Zm(t,n,r,s)}function Zm(t,e,n,s=!0){console.error(t)}let Ti=!1,va=!1;const ot=[];let Mt=0;const zs=[];let js=null,es=0;const Ws=[];let Jt=null,ts=0;const Ef=Promise.resolve();let Ec=null,wa=null;function bf(t){const e=Ec||Ef;return t?e.then(this?t.bind(this):t):e}function ey(t){let e=Mt+1,n=ot.length;for(;e<n;){const s=e+n>>>1;ar(ot[s])<t?e=s+1:n=s}return e}function If(t){(!ot.length||!ot.includes(t,Ti&&t.allowRecurse?Mt+1:Mt))&&t!==wa&&(t.id==null?ot.push(t):ot.splice(ey(t.id),0,t),Tf())}function Tf(){!Ti&&!va&&(va=!0,Ec=Ef.then(Af))}function ty(t){const e=ot.indexOf(t);e>Mt&&ot.splice(e,1)}function Sf(t,e,n,s){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Tf()}function ny(t){Sf(t,js,zs,es)}function sy(t){Sf(t,Jt,Ws,ts)}function io(t,e=null){if(zs.length){for(wa=e,js=[...new Set(zs)],zs.length=0,es=0;es<js.length;es++)js[es]();js=null,es=0,wa=null,io(t,e)}}function Cf(t){if(io(),Ws.length){const e=[...new Set(Ws)];if(Ws.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>ar(n)-ar(s)),ts=0;ts<Jt.length;ts++)Jt[ts]();Jt=null,ts=0}}const ar=t=>t.id==null?1/0:t.id;function Af(t){va=!1,Ti=!0,io(t),ot.sort((n,s)=>ar(n)-ar(s));const e=_t;try{for(Mt=0;Mt<ot.length;Mt++){const n=ot[Mt];n&&n.active!==!1&&an(n,null,14)}}finally{Mt=0,ot.length=0,Cf(),Ti=!1,Ec=null,(ot.length||zs.length||Ws.length)&&Af(t)}}function ry(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ge;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(fa))}let a,c=s[a=Bo(e)]||s[a=Bo(Dt(e))];!c&&i&&(c=s[a=Bo(As(e))]),c&&pt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(l,t,6,r)}}function kf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=kf(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Xe(o,i),s.set(t,o),o)}function oo(t,e){return!t||!Zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,As(e))||se(t,e))}let dt=null,Rf=null;function Si(t){const e=dt;return dt=t,Rf=t&&t.type.__scopeId||null,e}function Ci(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ru(-1);const i=Si(e),o=t(...r);return Si(i),s._d&&ru(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function $o(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:S}=t;let b,C;const x=Si(t);try{if(n.shapeFlag&4){const Q=r||s;b=Ct(u.call(Q,Q,h,i,g,f,y)),C=c}else{const Q=e;b=Ct(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),C=e.props?c:iy(c)}}catch(Q){Gs.length=0,ro(Q,t,1),b=je(Et)}let q=b;if(C&&S!==!1){const Q=Object.keys(C),{shapeFlag:le}=q;Q.length&&le&7&&(o&&Q.some(uc)&&(C=oy(C,o)),q=gn(q,C))}return n.dirs&&(q=gn(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),b=q,Si(x),b}const iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zi(n))&&((e||(e={}))[n]=t[n]);return e},oy=(t,e)=>{const n={};for(const s in t)(!uc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ay(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!oo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gl(s,o,l):!0:!!o;return!1}function Gl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!oo(n,i))return!0}return!1}function cy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ly=t=>t.__isSuspense;function uy(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):sy(t)}function hi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function cn(t,e,n=!1){const s=Pe||dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Ql={};function fi(t,e,n){return Nf(t,e,n)}function Nf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=Pe;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=ya(t)):ls(t)?(c=()=>t,s=!0):K(t)?(u=!0,l=t.some(C=>ls(C)||ya(C)),c=()=>t.map(C=>{if(Ge(C))return C.value;if(ls(C))return kn(C);if(X(C))return an(C,a,2)})):X(t)?e?c=()=>an(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),pt(t,a,3,[f])}:c=_t,e&&s){const C=c;c=()=>kn(C())}let h,f=C=>{h=b.onStop=()=>{an(C,a,4)}};if(lr)return f=_t,e?n&&pt(e,a,3,[c(),u?[]:void 0,f]):c(),_t;let g=u?[]:Ql;const y=()=>{if(!!b.active)if(e){const C=b.run();(s||l||(u?C.some((x,q)=>rr(x,g[q])):rr(C,g)))&&(h&&h(),pt(e,a,3,[C,g===Ql?void 0:g,f]),g=C)}else b.run()};y.allowRecurse=!!e;let S;r==="sync"?S=y:r==="post"?S=()=>nt(y,a&&a.suspense):S=()=>ny(y);const b=new gc(c,S);return e?n?y():g=b.run():r==="post"?nt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&hc(a.scope.effects,b)}}function hy(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?Df(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Pe;ps(this);const a=Nf(r,i.bind(s),n);return o?ps(o):Pn(),a}function Df(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function kn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))kn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)kn(t[n],e);else if(Jh(t)||cs(t))t.forEach(n=>{kn(n,e)});else if(tf(t))for(const n in t)kn(t[n],e);return t}function fy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bc(()=>{t.isMounted=!0}),Mf(()=>{t.isUnmounting=!0}),t}const ut=[Function,Array],dy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},setup(t,{slots:e}){const n=ev(),s=fy();let r;return()=>{const i=e.default&&xf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Et){o=S;break}}const a=oe(t),{mode:c}=a;if(s.isLeaving)return jo(o);const l=Xl(o);if(!l)return jo(o);const u=_a(l,a,s,n);Ea(l,u);const h=n.subTree,f=h&&Xl(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const S=y();r===void 0?r=S:S!==r&&(r=S,g=!0)}if(f&&f.type!==Et&&(!Cn(l,f)||g)){const S=_a(f,a,s,n);if(Ea(f,S),c==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},jo(o);c==="in-out"&&l.type!==Et&&(S.delayLeave=(b,C,x)=>{const q=Of(s,f);q[String(f.key)]=f,b._leaveCb=()=>{C(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},py=dy;function Of(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _a(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:S,onAppear:b,onAfterAppear:C,onAppearCancelled:x}=e,q=String(t.key),Q=Of(n,t),le=(Z,ce)=>{Z&&pt(Z,s,9,ce)},Ie=(Z,ce)=>{const we=ce[1];le(Z,ce),K(Z)?Z.every(Ue=>Ue.length<=1)&&we():Z.length<=1&&we()},Ae={mode:i,persisted:o,beforeEnter(Z){let ce=a;if(!n.isMounted)if(r)ce=S||a;else return;Z._leaveCb&&Z._leaveCb(!0);const we=Q[q];we&&Cn(t,we)&&we.el._leaveCb&&we.el._leaveCb(),le(ce,[Z])},enter(Z){let ce=c,we=l,Ue=u;if(!n.isMounted)if(r)ce=b||c,we=C||l,Ue=x||u;else return;let Ve=!1;const mt=Z._enterCb=Wt=>{Ve||(Ve=!0,Wt?le(Ue,[Z]):le(we,[Z]),Ae.delayedLeave&&Ae.delayedLeave(),Z._enterCb=void 0)};ce?Ie(ce,[Z,mt]):mt()},leave(Z,ce){const we=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return ce();le(h,[Z]);let Ue=!1;const Ve=Z._leaveCb=mt=>{Ue||(Ue=!0,ce(),mt?le(y,[Z]):le(g,[Z]),Z._leaveCb=void 0,Q[we]===t&&delete Q[we])};Q[we]=t,f?Ie(f,[Z,Ve]):Ve()},clone(Z){return _a(Z,e,n,s)}};return Ae}function jo(t){if(ao(t))return t=gn(t),t.children=null,t}function Xl(t){return ao(t)?t.children?t.children[0]:void 0:t}function Ea(t,e){t.shapeFlag&6&&t.component?Ea(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ht?(o.patchFlag&128&&r++,s=s.concat(xf(o.children,e,a))):(e||o.type!==Et)&&s.push(a!=null?gn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Cr(t){return X(t)?{setup:t,name:t.name}:t}const di=t=>!!t.type.__asyncLoader,ao=t=>t.type.__isKeepAlive;function gy(t,e){Pf(t,"a",e)}function my(t,e){Pf(t,"da",e)}function Pf(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(co(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ao(r.parent.vnode)&&yy(s,e,n,r),r=r.parent}}function yy(t,e,n,s){const r=co(e,t,s,!0);Lf(()=>{hc(s[e],r)},n)}function co(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ks(),ps(n);const a=pt(e,n,t,o);return Pn(),Rs(),a});return s?r.unshift(i):r.push(i),i}}const zt=t=>(e,n=Pe)=>(!lr||t==="sp")&&co(t,e,n),vy=zt("bm"),bc=zt("m"),wy=zt("bu"),_y=zt("u"),Mf=zt("bum"),Lf=zt("um"),Ey=zt("sp"),by=zt("rtg"),Iy=zt("rtc");function Ty(t,e=Pe){co("ec",t,e)}function OC(t,e){const n=dt;if(n===null)return t;const s=uo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ge]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&kn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function bn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ks(),pt(c,n,8,[t.el,a,t,e]),Rs())}}const Ff="components";function Ic(t,e){return Cy(Ff,t,!0,e)||t}const Sy=Symbol();function Cy(t,e,n=!0,s=!1){const r=dt||Pe;if(r){const i=r.type;if(t===Ff){const a=iv(i,!1);if(a&&(a===e||a===Dt(e)||a===no(Dt(e))))return i}const o=Yl(r[t]||i[t],e)||Yl(r.appContext[t],e);return!o&&s?i:o}}function Yl(t,e){return t&&(t[e]||t[Dt(e)]||t[no(Dt(e))])}function Ay(t,e,n,s){let r;const i=n&&n[s];if(K(t)||Me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ba=t=>t?Qf(t)?uo(t)||t.proxy:ba(t.parent):null,Ai=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ba(t.parent),$root:t=>ba(t.root),$emit:t=>t.emit,$options:t=>Vf(t),$forceUpdate:t=>t.f||(t.f=()=>If(t.update)),$nextTick:t=>t.n||(t.n=bf.bind(t.proxy)),$watch:t=>hy.bind(t)}),ky={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ge&&se(s,e))return o[e]=1,s[e];if(r!==ge&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==ge&&se(n,e))return o[e]=4,n[e];Ia&&(o[e]=0)}}const u=Ai[e];let h,f;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&se(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ge&&se(r,e)?(r[e]=n,!0):s!==ge&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&se(t,o)||e!==ge&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Ai,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ia=!0;function Ry(t){const e=Vf(t),n=t.proxy,s=t.ctx;Ia=!1,e.beforeCreate&&Jl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:S,deactivated:b,beforeDestroy:C,beforeUnmount:x,destroyed:q,unmounted:Q,render:le,renderTracked:Ie,renderTriggered:Ae,errorCaptured:Z,serverPrefetch:ce,expose:we,inheritAttrs:Ue,components:Ve,directives:mt,filters:Wt}=e;if(l&&Ny(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const ue=o[me];X(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);De(me)&&(t.data=Sr(me))}if(Ia=!0,i)for(const me in i){const ue=i[me],rt=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):_t,Xn=!X(ue)&&X(ue.set)?ue.set.bind(n):_t,Pt=At({get:rt,set:Xn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:bt=>Pt.value=bt})}if(a)for(const me in a)Uf(a[me],s,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{hi(ue,me[ue])})}u&&Jl(u,t,"c");function ke(me,ue){K(ue)?ue.forEach(rt=>me(rt.bind(n))):ue&&me(ue.bind(n))}if(ke(vy,h),ke(bc,f),ke(wy,g),ke(_y,y),ke(gy,S),ke(my,b),ke(Ty,Z),ke(Iy,Ie),ke(by,Ae),ke(Mf,x),ke(Lf,Q),ke(Ey,ce),K(we))if(we.length){const me=t.exposed||(t.exposed={});we.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:rt=>n[ue]=rt})})}else t.exposed||(t.exposed={});le&&t.render===_t&&(t.render=le),Ue!=null&&(t.inheritAttrs=Ue),Ve&&(t.components=Ve),mt&&(t.directives=mt)}function Ny(t,e,n=_t,s=!1){K(t)&&(t=Ta(t));for(const r in t){const i=t[r];let o;De(i)?"default"in i?o=cn(i.from||r,i.default,!0):o=cn(i.from||r):o=cn(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Jl(t,e,n){pt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uf(t,e,n,s){const r=s.includes(".")?Df(n,s):()=>n[s];if(Me(t)){const i=e[t];X(i)&&fi(r,i)}else if(X(t))fi(r,t.bind(n));else if(De(t))if(K(t))t.forEach(i=>Uf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&fi(r,i,t)}}function Vf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ki(c,l,o,!0)),ki(c,e,o)),i.set(e,c),c}function ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ki(t,i,n,!0),r&&r.forEach(o=>ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Dy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dy={data:Zl,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Tn,directives:Tn,watch:xy,provide:Zl,inject:Oy};function Zl(t,e){return e?t?function(){return Xe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Oy(t,e){return Tn(Ta(t),Ta(e))}function Ta(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function xy(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Py(t,e,n,s=!1){const r={},i={};Ii(i,lo,1),t.propsDefaults=Object.create(null),Bf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function My(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(oo(t.emitsOptions,f))continue;const g=e[f];if(c)if(se(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Dt(f);r[y]=Sa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Bf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=As(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Sa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h)&&!0)&&(delete i[h],l=!0)}l&&$t(t,"set","$attrs")}function Bf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(li(c))continue;const l=e[c];let u;r&&se(r,u=Dt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||ge;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Sa(r,c,h,l[h],t,!se(l,h))}}return o}function Sa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ps(r),s=l[n]=c.call(null,e),Pn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===As(n))&&(s=!0))}return s}function $f(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=$f(h,e,!0);Xe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,as),as;if(K(i))for(let u=0;u<i.length;u++){const h=Dt(i[u]);eu(h)&&(o[h]=ge)}else if(i)for(const u in i){const h=Dt(u);if(eu(h)){const f=i[u],g=o[h]=K(f)||X(f)?{type:f}:f;if(g){const y=su(Boolean,g.type),S=su(String,g.type);g[0]=y>-1,g[1]=S<0||y<S,(y>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function eu(t){return t[0]!=="$"}function tu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nu(t,e){return tu(t)===tu(e)}function su(t,e){return K(e)?e.findIndex(n=>nu(n,t)):X(e)&&nu(e,t)?0:-1}const jf=t=>t[0]==="_"||t==="$stable",Tc=t=>K(t)?t.map(Ct):[Ct(t)],Ly=(t,e,n)=>{if(e._n)return e;const s=Ci((...r)=>Tc(e(...r)),n);return s._c=!1,s},qf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(jf(r))continue;const i=t[r];if(X(i))e[r]=Ly(r,i,s);else if(i!=null){const o=Tc(i);e[r]=()=>o}}},Hf=(t,e)=>{const n=Tc(e);t.slots.default=()=>n},Fy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ii(e,"_",n)):qf(e,t.slots={})}else t.slots={},e&&Hf(t,e);Ii(t.slots,lo,1)},Uy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,qf(e,r)),o=e}else e&&(Hf(t,e),o={default:1});if(i)for(const a in r)!jf(a)&&!(a in o)&&delete r[a]};function Kf(){return{app:null,config:{isNativeTag:dm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vy=0;function By(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!De(r)&&(r=null);const i=Kf(),o=new Set;let a=!1;const c=i.app={_uid:Vy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:av,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=je(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,uo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ca(t,e,n,s,r=!1){if(K(t)){t.forEach((f,g)=>Ca(f,e&&(K(e)?e[g]:e),n,s,r));return}if(di(s)&&!r)return;const i=s.shapeFlag&4?uo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,se(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),X(c))an(c,a,12,[o,u]);else{const f=Me(c),g=Ge(c);if(f||g){const y=()=>{if(t.f){const S=f?u[c]:c.value;r?K(S)&&hc(S,i):K(S)?S.includes(i)||S.push(i):f?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,nt(y,n)):y()}}}const nt=uy;function $y(t){return jy(t)}function jy(t,e){const n=wm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=_t,cloneNode:y,insertStaticContent:S}=t,b=(d,p,m,E=null,w=null,k=null,D=!1,A=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Cn(d,p)&&(E=U(d),lt(d,w,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:B,shapeFlag:P}=p;switch(I){case Sc:C(d,p,m,E);break;case Et:x(d,p,m,E);break;case qo:d==null&&q(p,m,E,D);break;case ht:mt(d,p,m,E,w,k,D,A,R);break;default:P&1?Ie(d,p,m,E,w,k,D,A,R):P&6?Wt(d,p,m,E,w,k,D,A,R):(P&64||P&128)&&I.process(d,p,m,E,w,k,D,A,R,ye)}B!=null&&w&&Ca(B,d&&d.ref,k,p||d,!p)},C=(d,p,m,E)=>{if(d==null)s(p.el=a(p.children),m,E);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},x=(d,p,m,E)=>{d==null?s(p.el=c(p.children||""),m,E):p.el=d.el},q=(d,p,m,E)=>{[d.el,d.anchor]=S(d.children,p,m,E,d.el,d.anchor)},Q=({el:d,anchor:p},m,E)=>{let w;for(;d&&d!==p;)w=f(d),s(d,m,E),d=w;s(p,m,E)},le=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},Ie=(d,p,m,E,w,k,D,A,R)=>{D=D||p.type==="svg",d==null?Ae(p,m,E,w,k,D,A,R):we(d,p,w,k,D,A,R)},Ae=(d,p,m,E,w,k,D,A)=>{let R,I;const{type:B,props:P,shapeFlag:$,transition:H,patchFlag:re,dirs:fe}=d;if(d.el&&y!==void 0&&re===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,k,P&&P.is,P),$&8?u(R,d.children):$&16&&ce(d.children,R,null,E,w,k&&B!=="foreignObject",D,A),fe&&bn(d,null,E,"created"),P){for(const _e in P)_e!=="value"&&!li(_e)&&i(R,_e,null,P[_e],k,d.children,E,w,N);"value"in P&&i(R,"value",null,P.value),(I=P.onVnodeBeforeMount)&&Tt(I,E,d)}Z(R,d,d.scopeId,D,E)}fe&&bn(d,null,E,"beforeMount");const de=(!w||w&&!w.pendingBranch)&&H&&!H.persisted;de&&H.beforeEnter(R),s(R,p,m),((I=P&&P.onVnodeMounted)||de||fe)&&nt(()=>{I&&Tt(I,E,d),de&&H.enter(R),fe&&bn(d,null,E,"mounted")},w)},Z=(d,p,m,E,w)=>{if(m&&g(d,m),E)for(let k=0;k<E.length;k++)g(d,E[k]);if(w){let k=w.subTree;if(p===k){const D=w.vnode;Z(d,D,D.scopeId,D.slotScopeIds,w.parent)}}},ce=(d,p,m,E,w,k,D,A,R=0)=>{for(let I=R;I<d.length;I++){const B=d[I]=A?Zt(d[I]):Ct(d[I]);b(null,B,p,m,E,w,k,D,A)}},we=(d,p,m,E,w,k,D)=>{const A=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:B}=p;R|=d.patchFlag&16;const P=d.props||ge,$=p.props||ge;let H;m&&In(m,!1),(H=$.onVnodeBeforeUpdate)&&Tt(H,m,p,d),B&&bn(p,d,m,"beforeUpdate"),m&&In(m,!0);const re=w&&p.type!=="foreignObject";if(I?Ue(d.dynamicChildren,I,A,m,E,re,k):D||rt(d,p,A,null,m,E,re,k,!1),R>0){if(R&16)Ve(A,p,P,$,m,E,w);else if(R&2&&P.class!==$.class&&i(A,"class",null,$.class,w),R&4&&i(A,"style",P.style,$.style,w),R&8){const fe=p.dynamicProps;for(let de=0;de<fe.length;de++){const _e=fe[de],yt=P[_e],Yn=$[_e];(Yn!==yt||_e==="value")&&i(A,_e,yt,Yn,w,d.children,m,E,N)}}R&1&&d.children!==p.children&&u(A,p.children)}else!D&&I==null&&Ve(A,p,P,$,m,E,w);((H=$.onVnodeUpdated)||B)&&nt(()=>{H&&Tt(H,m,p,d),B&&bn(p,d,m,"updated")},E)},Ue=(d,p,m,E,w,k,D)=>{for(let A=0;A<p.length;A++){const R=d[A],I=p[A],B=R.el&&(R.type===ht||!Cn(R,I)||R.shapeFlag&70)?h(R.el):m;b(R,I,B,null,E,w,k,D,!0)}},Ve=(d,p,m,E,w,k,D)=>{if(m!==E){for(const A in E){if(li(A))continue;const R=E[A],I=m[A];R!==I&&A!=="value"&&i(d,A,I,R,D,p.children,w,k,N)}if(m!==ge)for(const A in m)!li(A)&&!(A in E)&&i(d,A,m[A],null,D,p.children,w,k,N);"value"in E&&i(d,"value",m.value,E.value)}},mt=(d,p,m,E,w,k,D,A,R)=>{const I=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:$,slotScopeIds:H}=p;H&&(A=A?A.concat(H):H),d==null?(s(I,m,E),s(B,m,E),ce(p.children,m,B,w,k,D,A,R)):P>0&&P&64&&$&&d.dynamicChildren?(Ue(d.dynamicChildren,$,m,w,k,D,A),(p.key!=null||w&&p===w.subTree)&&zf(d,p,!0)):rt(d,p,m,B,w,k,D,A,R)},Wt=(d,p,m,E,w,k,D,A,R)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?w.ctx.activate(p,m,E,D,R):Qn(p,m,E,w,k,D,R):ke(d,p,R)},Qn=(d,p,m,E,w,k,D)=>{const A=d.component=Zy(d,E,w);if(ao(d)&&(A.ctx.renderer=ye),tv(A),A.asyncDep){if(w&&w.registerDep(A,me),!d.el){const R=A.subTree=je(Et);x(null,R,p,m)}return}me(A,d,p,m,w,k,D)},ke=(d,p,m)=>{const E=p.component=d.component;if(ay(d,p,m))if(E.asyncDep&&!E.asyncResolved){ue(E,p,m);return}else E.next=p,ty(E.update),E.update();else p.el=d.el,E.vnode=p},me=(d,p,m,E,w,k,D)=>{const A=()=>{if(d.isMounted){let{next:B,bu:P,u:$,parent:H,vnode:re}=d,fe=B,de;In(d,!1),B?(B.el=re.el,ue(d,B,D)):B=re,P&&ui(P),(de=B.props&&B.props.onVnodeBeforeUpdate)&&Tt(de,H,B,re),In(d,!0);const _e=$o(d),yt=d.subTree;d.subTree=_e,b(yt,_e,h(yt.el),U(yt),d,w,k),B.el=_e.el,fe===null&&cy(d,_e.el),$&&nt($,w),(de=B.props&&B.props.onVnodeUpdated)&&nt(()=>Tt(de,H,B,re),w)}else{let B;const{el:P,props:$}=p,{bm:H,m:re,parent:fe}=d,de=di(p);if(In(d,!1),H&&ui(H),!de&&(B=$&&$.onVnodeBeforeMount)&&Tt(B,fe,p),In(d,!0),P&&Y){const _e=()=>{d.subTree=$o(d),Y(P,d.subTree,d,w,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=$o(d);b(null,_e,m,E,d,w,k),p.el=_e.el}if(re&&nt(re,w),!de&&(B=$&&$.onVnodeMounted)){const _e=p;nt(()=>Tt(B,fe,_e),w)}(p.shapeFlag&256||fe&&di(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&nt(d.a,w),d.isMounted=!0,p=m=E=null}},R=d.effect=new gc(A,()=>If(I),d.scope),I=d.update=()=>R.run();I.id=d.uid,In(d,!0),I()},ue=(d,p,m)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,My(d,p.props,E,m),Uy(d,p.children,m),ks(),io(void 0,d.update),Rs()},rt=(d,p,m,E,w,k,D,A,R=!1)=>{const I=d&&d.children,B=d?d.shapeFlag:0,P=p.children,{patchFlag:$,shapeFlag:H}=p;if($>0){if($&128){Pt(I,P,m,E,w,k,D,A,R);return}else if($&256){Xn(I,P,m,E,w,k,D,A,R);return}}H&8?(B&16&&N(I,w,k),P!==I&&u(m,P)):B&16?H&16?Pt(I,P,m,E,w,k,D,A,R):N(I,w,k,!0):(B&8&&u(m,""),H&16&&ce(P,m,E,w,k,D,A,R))},Xn=(d,p,m,E,w,k,D,A,R)=>{d=d||as,p=p||as;const I=d.length,B=p.length,P=Math.min(I,B);let $;for($=0;$<P;$++){const H=p[$]=R?Zt(p[$]):Ct(p[$]);b(d[$],H,m,null,w,k,D,A,R)}I>B?N(d,w,k,!0,!1,P):ce(p,m,E,w,k,D,A,R,P)},Pt=(d,p,m,E,w,k,D,A,R)=>{let I=0;const B=p.length;let P=d.length-1,$=B-1;for(;I<=P&&I<=$;){const H=d[I],re=p[I]=R?Zt(p[I]):Ct(p[I]);if(Cn(H,re))b(H,re,m,null,w,k,D,A,R);else break;I++}for(;I<=P&&I<=$;){const H=d[P],re=p[$]=R?Zt(p[$]):Ct(p[$]);if(Cn(H,re))b(H,re,m,null,w,k,D,A,R);else break;P--,$--}if(I>P){if(I<=$){const H=$+1,re=H<B?p[H].el:E;for(;I<=$;)b(null,p[I]=R?Zt(p[I]):Ct(p[I]),m,re,w,k,D,A,R),I++}}else if(I>$)for(;I<=P;)lt(d[I],w,k,!0),I++;else{const H=I,re=I,fe=new Map;for(I=re;I<=$;I++){const it=p[I]=R?Zt(p[I]):Ct(p[I]);it.key!=null&&fe.set(it.key,I)}let de,_e=0;const yt=$-re+1;let Yn=!1,Ll=0;const Us=new Array(yt);for(I=0;I<yt;I++)Us[I]=0;for(I=H;I<=P;I++){const it=d[I];if(_e>=yt){lt(it,w,k,!0);continue}let It;if(it.key!=null)It=fe.get(it.key);else for(de=re;de<=$;de++)if(Us[de-re]===0&&Cn(it,p[de])){It=de;break}It===void 0?lt(it,w,k,!0):(Us[It-re]=I+1,It>=Ll?Ll=It:Yn=!0,b(it,p[It],m,null,w,k,D,A,R),_e++)}const Fl=Yn?qy(Us):as;for(de=Fl.length-1,I=yt-1;I>=0;I--){const it=re+I,It=p[it],Ul=it+1<B?p[it+1].el:E;Us[I]===0?b(null,It,m,Ul,w,k,D,A,R):Yn&&(de<0||I!==Fl[de]?bt(It,m,Ul,2):de--)}}},bt=(d,p,m,E,w=null)=>{const{el:k,type:D,transition:A,children:R,shapeFlag:I}=d;if(I&6){bt(d.component.subTree,p,m,E);return}if(I&128){d.suspense.move(p,m,E);return}if(I&64){D.move(d,p,m,ye);return}if(D===ht){s(k,p,m);for(let P=0;P<R.length;P++)bt(R[P],p,m,E);s(d.anchor,p,m);return}if(D===qo){Q(d,p,m);return}if(E!==2&&I&1&&A)if(E===0)A.beforeEnter(k),s(k,p,m),nt(()=>A.enter(k),w);else{const{leave:P,delayLeave:$,afterLeave:H}=A,re=()=>s(k,p,m),fe=()=>{P(k,()=>{re(),H&&H()})};$?$(k,re,fe):fe()}else s(k,p,m)},lt=(d,p,m,E=!1,w=!1)=>{const{type:k,props:D,ref:A,children:R,dynamicChildren:I,shapeFlag:B,patchFlag:P,dirs:$}=d;if(A!=null&&Ca(A,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const H=B&1&&$,re=!di(d);let fe;if(re&&(fe=D&&D.onVnodeBeforeUnmount)&&Tt(fe,p,d),B&6)L(d.component,m,E);else{if(B&128){d.suspense.unmount(m,E);return}H&&bn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,w,ye,E):I&&(k!==ht||P>0&&P&64)?N(I,p,m,!1,!0):(k===ht&&P&384||!w&&B&16)&&N(R,p,m),E&&Vo(d)}(re&&(fe=D&&D.onVnodeUnmounted)||H)&&nt(()=>{fe&&Tt(fe,p,d),H&&bn(d,null,p,"unmounted")},m)},Vo=d=>{const{type:p,el:m,anchor:E,transition:w}=d;if(p===ht){v(m,E);return}if(p===qo){le(d);return}const k=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:A}=w,R=()=>D(m,k);A?A(d.el,k,R):R()}else k()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},L=(d,p,m)=>{const{bum:E,scope:w,update:k,subTree:D,um:A}=d;E&&ui(E),w.stop(),k&&(k.active=!1,lt(D,d,p,m)),A&&nt(A,p),nt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,E=!1,w=!1,k=0)=>{for(let D=k;D<d.length;D++)lt(d[D],p,m,E,w)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,m)=>{d==null?p._vnode&&lt(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,m),Cf(),p._vnode=d},ye={p:b,um:lt,m:bt,r:Vo,mt:Qn,mc:ce,pc:rt,pbc:Ue,n:U,o:t};let ee,Y;return e&&([ee,Y]=e(ye)),{render:he,hydrate:ee,createApp:By(he,ee)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zf(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Zt(r[i]),a.el=o.el),n||zf(o,a))}}function qy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hy=t=>t.__isTeleport,ht=Symbol(void 0),Sc=Symbol(void 0),Et=Symbol(void 0),qo=Symbol(void 0),Gs=[];let wt=null;function xn(t=!1){Gs.push(wt=t?null:[])}function Ky(){Gs.pop(),wt=Gs[Gs.length-1]||null}let cr=1;function ru(t){cr+=t}function Wf(t){return t.dynamicChildren=cr>0?wt||as:null,Ky(),cr>0&&wt&&wt.push(t),t}function Ri(t,e,n,s,r,i){return Wf(ln(t,e,n,s,r,i,!0))}function Cc(t,e,n,s,r){return Wf(je(t,e,n,s,r,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const lo="__vInternal",Gf=({key:t})=>t!=null?t:null,pi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Ge(t)||X(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function ln(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gf(e),ref:e&&pi(e),scopeId:Rf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ac(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),cr>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const je=zy;function zy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Sy)&&(t=Et),Aa(t)){const a=gn(t,e,!0);return n&&Ac(a,n),cr>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(ov(t)&&(t=t.__vccOpts),e){e=Wy(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=lc(a)),De(c)&&(pf(c)&&!K(c)&&(c=Xe({},c)),e.style=cc(c))}const o=Me(t)?1:ly(t)?128:Hy(t)?64:De(t)?4:X(t)?2:0;return ln(t,e,n,s,r,o,i,!0)}function Wy(t){return t?pf(t)||lo in t?Xe({},t):t:null}function gn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Xy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gf(a),ref:e&&e.ref?n&&r?K(r)?r.concat(pi(e)):[r,pi(e)]:pi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gn(t.ssContent),ssFallback:t.ssFallback&&gn(t.ssFallback),el:t.el,anchor:t.anchor}}function Gy(t=" ",e=0){return je(Sc,null,t,e)}function Qy(t="",e=!1){return e?(xn(),Cc(Et,null,t)):je(Et,null,t)}function Ct(t){return t==null||typeof t=="boolean"?je(Et):K(t)?je(ht,null,t.slice()):typeof t=="object"?Zt(t):je(Sc,null,String(t))}function Zt(t){return t.el===null||t.memo?t:gn(t)}function Ac(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ac(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(lo in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Gy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=lc([e.class,s.class]));else if(r==="style")e.style=cc([e.style,s.style]);else if(Zi(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){pt(t,e,7,[n,s])}const Yy=Kf();let Jy=0;function Zy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yy,i={uid:Jy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$f(s,r),emitsOptions:kf(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ry.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const ev=()=>Pe||dt,ps=t=>{Pe=t,t.scope.on()},Pn=()=>{Pe&&Pe.scope.off(),Pe=null};function Qf(t){return t.vnode.shapeFlag&4}let lr=!1;function tv(t,e=!1){lr=e;const{props:n,children:s}=t.vnode,r=Qf(t);Py(t,n,r,e),Fy(t,s);const i=r?nv(t,e):void 0;return lr=!1,i}function nv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gf(new Proxy(t.ctx,ky));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?rv(t):null;ps(t),ks();const i=an(s,t,0,[t.props,r]);if(Rs(),Pn(),Zh(i)){if(i.then(Pn,Pn),e)return i.then(o=>{iu(t,o,e)}).catch(o=>{ro(o,t,0)});t.asyncDep=i}else iu(t,i,e)}else Xf(t,e)}function iu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=_f(e)),Xf(t,n)}let ou;function Xf(t,e,n){const s=t.type;if(!t.render){if(!e&&ou&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=ou(r,l)}}t.render=s.render||_t}ps(t),ks(),Ry(t),Rs(),Pn()}function sv(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function rv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sv(t))},slots:t.slots,emit:t.emit,expose:e}}function uo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_f(gf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)}}))}function iv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function ov(t){return X(t)&&"__vccOpts"in t}const At=(t,e)=>Jm(t,e,lr);function Yf(t,e,n){const s=arguments.length;return s===2?De(e)&&!K(e)?Aa(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Aa(n)&&(n=[n]),je(t,e,n))}const av="3.2.37",cv="http://www.w3.org/2000/svg",An=typeof document!="undefined"?document:null,au=An&&An.createElement("template"),lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?An.createElementNS(cv,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{au.innerHTML=s?`<svg>${t}</svg>`:t;const a=au.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hv(t,e,n){const s=t.style,r=Me(n);if(n&&!r){for(const i in n)ka(s,i,n[i]);if(e&&!Me(e))for(const i in e)n[i]==null&&ka(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const cu=/\s*!important$/;function ka(t,e,n){if(K(n))n.forEach(s=>ka(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fv(t,e);cu.test(n)?t.setProperty(As(s),n.replace(cu,""),"important"):t[s]=n}}const lu=["Webkit","Moz","ms"],Ho={};function fv(t,e){const n=Ho[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return Ho[e]=s;s=no(s);for(let r=0;r<lu.length;r++){const i=lu[r]+s;if(i in t)return Ho[e]=i}return e}const uu="http://www.w3.org/1999/xlink";function dv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(uu,e.slice(6,e.length)):t.setAttributeNS(uu,e,n);else{const i=lm(e);n==null||i&&!Xh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function pv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Jf,gv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ra=0;const mv=Promise.resolve(),yv=()=>{Ra=0},vv=()=>Ra||(mv.then(yv),Ra=Jf());function ns(t,e,n,s){t.addEventListener(e,n,s)}function wv(t,e,n,s){t.removeEventListener(e,n,s)}function _v(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ev(e);if(s){const l=i[e]=bv(s,r);ns(t,a,l,c)}else o&&(wv(t,a,o,c),i[e]=void 0)}}const hu=/(?:Once|Passive|Capture)$/;function Ev(t){let e;if(hu.test(t)){e={};let n;for(;n=t.match(hu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[As(t.slice(2)),e]}function bv(t,e){const n=s=>{const r=s.timeStamp||Jf();(gv||r>=n.attached-1)&&pt(Iv(s,n.value),e,5,[s])};return n.value=t,n.attached=vv(),n}function Iv(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const fu=/^on[a-z]/,Tv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?uv(t,s,r):e==="style"?hv(t,n,s):Zi(e)?uc(e)||_v(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sv(t,e,s,r))?pv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dv(t,e,s,r))};function Sv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fu.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fu.test(e)&&Me(n)?!1:e in t}const Cv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};py.props;const du=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>ui(e,n):e};function Av(t){t.target.composing=!0}function pu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xC={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=du(r);const i=s||r.props&&r.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fa(a)),t._assign(a)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",Av),ns(t,"compositionend",pu),ns(t,"change",pu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=du(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&fa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},kv=["ctrl","shift","alt","meta"],Rv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kv.some(n=>t[`${n}Key`]&&!e.includes(n))},PC=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Rv[e[r]];if(i&&i(n,e))return}return t(n,...s)},Nv=Xe({patchProp:Tv},lv);let gu;function Dv(){return gu||(gu=$y(Nv))}const Ov=(...t)=>{const e=Dv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=xv(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xv(t){return Me(t)?document.querySelector(t):t}const Pv="modulepreload",mu={},Mv="./",yu=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Mv}${s}`,s in mu)return;mu[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Pv,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ns=t=>Zf?Symbol(t):"_vr_"+t,Lv=Ns("rvlm"),vu=Ns("rvd"),kc=Ns("r"),ed=Ns("rl"),Na=Ns("rvl"),ss=typeof window!="undefined";function Fv(t){return t.__esModule||Zf&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Ko(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Qs=()=>{},Uv=/\/$/,Vv=t=>t.replace(Uv,"");function zo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=qv(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Bv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $v(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&gs(e.matched[s],n.matched[r])&&td(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function td(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jv(t[n],e[n]))return!1;return!0}function jv(t,e){return Array.isArray(t)?_u(t,e):Array.isArray(e)?_u(e,t):t===e}function _u(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function qv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ur;(function(t){t.pop="pop",t.push="push"})(ur||(ur={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function Hv(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vv(t)}const Kv=/^[^#]+#/;function zv(t,e){return t.replace(Kv,"#")+e}function Wv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ho=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Wv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Eu(t,e){return(history.state?history.state.position-e:-1)+t}const Da=new Map;function Qv(t,e){Da.set(t,e)}function Xv(t){const e=Da.get(t);return Da.delete(t),e}let Yv=()=>location.protocol+"//"+location.host;function nd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),wu(c,"")}return wu(n,t)+s+r}function Jv(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=nd(t,location),y=n.value,S=e.value;let b=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}b=S?f.position-S.position:0}else s(g);r.forEach(C=>{C(n.value,y,{delta:b,type:ur.pop,direction:b?b>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:ho()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function bu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ho():null}}function Zv(t){const{history:e,location:n}=window,s={value:nd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Yv()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,bu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=pe({},r.value,e.state,{forward:c,scroll:ho()});i(u.current,u,!0);const h=pe({},bu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function ew(t){t=Hv(t);const e=Zv(t),n=Jv(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:zv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function tw(t){return typeof t=="string"||t&&typeof t=="object"}function sd(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rd=Ns("nf");var Iu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Iu||(Iu={}));function ms(t,e){return pe(new Error,{type:t,[rd]:!0},e)}function Xt(t,e){return t instanceof Error&&rd in t&&(e==null||!!(t.type&e))}const Tu="[^/]+?",nw={sensitive:!1,strict:!1,start:!0,end:!0},sw=/[.+*?^${}()[\]/\\]/g;function rw(t,e){const n=pe({},nw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(sw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:S,optional:b,regexp:C}=f;i.push({name:y,repeatable:S,optional:b});const x=C||Tu;if(x!==Tu){g+=10;try{new RegExp(`(${x})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+Q.message)}}let q=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(q=b&&l.length<2?`(?:/${q})`:"/"+q),b&&(q+="?"),r+=q,g+=20,b&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:S,optional:b}=g,C=y in l?l[y]:"";if(Array.isArray(C)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(C)?C.join("/"):C;if(!x)if(b)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function iw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ow(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=iw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Su(s))return 1;if(Su(r))return-1}return r.length-s.length}function Su(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aw={type:0,value:""},cw=/[a-zA-Z0-9_]/;function lw(t){if(!t)return[[]];if(t==="/")return[[aw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:cw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function uw(t,e,n){const s=rw(lw(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function hw(t,e){const n=[],s=new Map;e=Au({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=dw(u);y.aliasOf=f&&f.record;const S=Au(e,u),b=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of q)b.push(pe({},y,{components:f?f.record.components:y.components,path:Q,aliasOf:f?f.record:y}))}let C,x;for(const q of b){const{path:Q}=q;if(h&&Q[0]!=="/"){const le=h.record.path,Ie=le[le.length-1]==="/"?"":"/";q.path=h.record.path+(Q&&Ie+Q)}if(C=uw(q,h,S),f?f.alias.push(C):(x=x||C,x!==C&&x.alias.push(C),g&&u.name&&!Cu(C)&&o(u.name)),"children"in y){const le=y.children;for(let Ie=0;Ie<le.length;Ie++)i(le[Ie],C,f&&f.children[Ie])}f=f||C,c(C)}return x?()=>{o(x)}:Qs}function o(u){if(sd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ow(u,n[h])>=0&&(u.record.path!==n[h].record.path||!id(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cu(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ms(1,{location:u});S=f.record.name,g=pe(fw(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(x=>x.re.test(y)),f&&(g=f.parse(y),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw ms(1,{location:u,currentLocation:h});S=f.record.name,g=pe({},h.params,u.params),y=f.stringify(g)}const b=[];let C=f;for(;C;)b.unshift(C.record),C=C.parent;return{name:S,path:y,params:g,matched:b,meta:gw(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function fw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Cu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gw(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Au(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function id(t,e){return e.children.some(n=>n===t||id(t,n))}const od=/#/g,mw=/&/g,yw=/\//g,vw=/=/g,ww=/\?/g,ad=/\+/g,_w=/%5B/g,Ew=/%5D/g,cd=/%5E/g,bw=/%60/g,ld=/%7B/g,Iw=/%7C/g,ud=/%7D/g,Tw=/%20/g;function Rc(t){return encodeURI(""+t).replace(Iw,"|").replace(_w,"[").replace(Ew,"]")}function Sw(t){return Rc(t).replace(ld,"{").replace(ud,"}").replace(cd,"^")}function Oa(t){return Rc(t).replace(ad,"%2B").replace(Tw,"+").replace(od,"%23").replace(mw,"%26").replace(bw,"`").replace(ld,"{").replace(ud,"}").replace(cd,"^")}function Cw(t){return Oa(t).replace(vw,"%3D")}function Aw(t){return Rc(t).replace(od,"%23").replace(ww,"%3F")}function kw(t){return t==null?"":Aw(t).replace(yw,"%2F")}function Ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ad," "),o=i.indexOf("="),a=Ni(o<0?i:i.slice(0,o)),c=o<0?null:Ni(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ku(t){let e="";for(let n in t){const s=t[n];if(n=Cw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Oa(i)):[s&&Oa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Nw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Vs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ms(4,{from:n,to:e})):h instanceof Error?a(h):tw(h)?a(ms(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Wo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Dw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(en(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Fv(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&en(f,n,s,i,o)()}))}}return r}function Dw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ru(t){const e=cn(kc),n=cn(ed),s=At(()=>e.resolve(Ks(t.to))),r=At(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(gs.bind(null,u));if(f>-1)return f;const g=Nu(c[l-2]);return l>1&&Nu(u)===g&&h[h.length-1].path!==g?h.findIndex(gs.bind(null,c[l-2])):f}),i=At(()=>r.value>-1&&Mw(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&td(n.params,s.value.params));function a(c={}){return Pw(c)?e[Ks(t.replace)?"replace":"push"](Ks(t.to)).catch(Qs):Promise.resolve()}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Ow=Cr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ru,setup(t,{slots:e}){const n=Sr(Ru(t)),{options:s}=cn(kc),r=At(()=>({[Du(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Du(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),xw=Ow;function Pw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Du=(t,e,n)=>t!=null?t:e!=null?e:n,Lw=Cr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=cn(Na),r=At(()=>t.route||s.value),i=cn(vu,0),o=At(()=>r.value.matched[i]);hi(vu,i+1),hi(Lv,o),hi(Na,r);const a=vf();return fi(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!gs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Ou(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,S=Yf(u,pe({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ou(n.default,{Component:S,route:c})||S}}});function Ou(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fw=Lw;function Uw(t){const e=hw(t.routes,t),n=t.parseQuery||Rw,s=t.stringifyQuery||ku,r=t.history,i=Vs(),o=Vs(),a=Vs(),c=Gm(Qt);let l=Qt;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ko.bind(null,v=>""+v),h=Ko.bind(null,kw),f=Ko.bind(null,Ni);function g(v,L){let N,U;return sd(v)?(N=e.getRecordMatcher(v),U=L):U=v,e.addRoute(U,N)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function S(){return e.getRoutes().map(v=>v.record)}function b(v){return!!e.getRecordMatcher(v)}function C(v,L){if(L=pe({},L||c.value),typeof v=="string"){const Y=zo(n,v,L.path),d=e.resolve({path:Y.path},L),p=r.createHref(Y.fullPath);return pe(Y,d,{params:f(d.params),hash:Ni(Y.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=pe({},v,{path:zo(n,v.path,L.path).path});else{const Y=pe({},v.params);for(const d in Y)Y[d]==null&&delete Y[d];N=pe({},v,{params:h(v.params)}),L.params=h(L.params)}const U=e.resolve(N,L),he=v.hash||"";U.params=u(f(U.params));const ye=Bv(s,pe({},v,{hash:Sw(he),path:U.path})),ee=r.createHref(ye);return pe({fullPath:ye,hash:he,query:s===ku?Nw(v.query):v.query||{}},U,{redirectedFrom:void 0,href:ee})}function x(v){return typeof v=="string"?zo(n,v,c.value.path):pe({},v)}function q(v,L){if(l!==v)return ms(8,{from:L,to:v})}function Q(v){return Ae(v)}function le(v){return Q(pe(x(v),{replace:!0}))}function Ie(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let U=typeof N=="function"?N(v):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),pe({query:v.query,hash:v.hash,params:v.params},U)}}function Ae(v,L){const N=l=C(v),U=c.value,he=v.state,ye=v.force,ee=v.replace===!0,Y=Ie(N);if(Y)return Ae(pe(x(Y),{state:he,force:ye,replace:ee}),L||N);const d=N;d.redirectedFrom=L;let p;return!ye&&$v(s,U,N)&&(p=ms(16,{to:d,from:U}),Xn(U,U,!0,!1)),(p?Promise.resolve(p):ce(d,U)).catch(m=>Xt(m)?Xt(m,2)?m:rt(m):me(m,d,U)).then(m=>{if(m){if(Xt(m,2))return Ae(pe(x(m.to),{state:he,force:ye,replace:ee}),L||d)}else m=Ue(d,U,!0,ee,he);return we(d,U,m),m})}function Z(v,L){const N=q(v,L);return N?Promise.reject(N):Promise.resolve()}function ce(v,L){let N;const[U,he,ye]=Vw(v,L);N=Wo(U.reverse(),"beforeRouteLeave",v,L);for(const Y of U)Y.leaveGuards.forEach(d=>{N.push(en(d,v,L))});const ee=Z.bind(null,v,L);return N.push(ee),Jn(N).then(()=>{N=[];for(const Y of i.list())N.push(en(Y,v,L));return N.push(ee),Jn(N)}).then(()=>{N=Wo(he,"beforeRouteUpdate",v,L);for(const Y of he)Y.updateGuards.forEach(d=>{N.push(en(d,v,L))});return N.push(ee),Jn(N)}).then(()=>{N=[];for(const Y of v.matched)if(Y.beforeEnter&&!L.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)N.push(en(d,v,L));else N.push(en(Y.beforeEnter,v,L));return N.push(ee),Jn(N)}).then(()=>(v.matched.forEach(Y=>Y.enterCallbacks={}),N=Wo(ye,"beforeRouteEnter",v,L),N.push(ee),Jn(N))).then(()=>{N=[];for(const Y of o.list())N.push(en(Y,v,L));return N.push(ee),Jn(N)}).catch(Y=>Xt(Y,8)?Y:Promise.reject(Y))}function we(v,L,N){for(const U of a.list())U(v,L,N)}function Ue(v,L,N,U,he){const ye=q(v,L);if(ye)return ye;const ee=L===Qt,Y=ss?history.state:{};N&&(U||ee?r.replace(v.fullPath,pe({scroll:ee&&Y&&Y.scroll},he)):r.push(v.fullPath,he)),c.value=v,Xn(v,L,N,ee),rt()}let Ve;function mt(){Ve||(Ve=r.listen((v,L,N)=>{const U=C(v),he=Ie(U);if(he){Ae(pe(he,{replace:!0}),U).catch(Qs);return}l=U;const ye=c.value;ss&&Qv(Eu(ye.fullPath,N.delta),ho()),ce(U,ye).catch(ee=>Xt(ee,12)?ee:Xt(ee,2)?(Ae(ee.to,U).then(Y=>{Xt(Y,20)&&!N.delta&&N.type===ur.pop&&r.go(-1,!1)}).catch(Qs),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(ee,U,ye))).then(ee=>{ee=ee||Ue(U,ye,!1),ee&&(N.delta?r.go(-N.delta,!1):N.type===ur.pop&&Xt(ee,20)&&r.go(-1,!1)),we(U,ye,ee)}).catch(Qs)}))}let Wt=Vs(),Qn=Vs(),ke;function me(v,L,N){rt(v);const U=Qn.list();return U.length?U.forEach(he=>he(v,L,N)):console.error(v),Promise.reject(v)}function ue(){return ke&&c.value!==Qt?Promise.resolve():new Promise((v,L)=>{Wt.add([v,L])})}function rt(v){return ke||(ke=!v,mt(),Wt.list().forEach(([L,N])=>v?N(v):L()),Wt.reset()),v}function Xn(v,L,N,U){const{scrollBehavior:he}=t;if(!ss||!he)return Promise.resolve();const ye=!N&&Xv(Eu(v.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return bf().then(()=>he(v,L,ye)).then(ee=>ee&&Gv(ee)).catch(ee=>me(ee,v,L))}const Pt=v=>r.go(v);let bt;const lt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:b,getRoutes:S,resolve:C,options:t,push:Q,replace:le,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Qn.add,isReady:ue,install(v){const L=this;v.component("RouterLink",xw),v.component("RouterView",Fw),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ks(c)}),ss&&!bt&&c.value===Qt&&(bt=!0,Q(r.location).catch(he=>{}));const N={};for(const he in Qt)N[he]=At(()=>c.value[he]);v.provide(kc,L),v.provide(ed,Sr(N)),v.provide(Na,c);const U=v.unmount;lt.add(v),v.unmount=function(){lt.delete(v),lt.size<1&&(l=Qt,Ve&&Ve(),Ve=null,c.value=Qt,bt=!1,ke=!1),U()}}}}function Jn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Vw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gs(l,c))||r.push(c))}return[n,s,r]}const Bw={class:"text-lg font-bold pb-2"},$w=Cr({__name:"RestaurantCard",props:{leckerLog:null,docId:null},setup(t){return(e,n)=>{const s=Ic("RouterLink");return xn(),Cc(s,{to:{name:"Food",params:{id:t.docId,restaurant:t.leckerLog.name}}},{default:Ci(()=>[ln("div",null,[ln("h1",Bw,Vl(t.leckerLog.name),1),ln("div",null,Vl(t.leckerLog.cuisine),1)])]),_:1},8,["to"])}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qw=function(t){const e=hd(t);return fd.encodeByteArray(e,!0)},dd=function(t){return qw(t).replace(/\./g,"")},Hw=function(t){try{return fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function gd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zw(){return Le().indexOf("Electron/")>=0}function yd(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ww(){return Le().indexOf("MSAppHost/")>=0}function Gw(){return typeof indexedDB=="object"}function Qw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xw,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Yw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Kn(r,a,s)}}function Yw(t,e){return t.replace(Jw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jw=/\{\$([^}]+)}/g;function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Di(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(xu(i)&&xu(o)){if(!Di(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function e0(t,e){const n=new t0(t,e);return n.subscribe.bind(n)}class t0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");n0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Go),r.error===void 0&&(r.error=Go),r.complete===void 0&&(r.complete=Go);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Go(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(t){return t===Sn?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const a0={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},c0=ie.INFO,l0={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},u0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=l0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const h0=(t,e)=>e.some(n=>t instanceof n);let Pu,Mu;function f0(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d0(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,xa=new WeakMap,wd=new WeakMap,Qo=new WeakMap,Dc=new WeakMap;function p0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vd.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function g0(t){if(xa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xa.set(t,e)}let Pa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){Pa=t(Pa)}function y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xo(this),e,...n);return wd.set(s,e.sort?e.sort():[e]),un(s)}:d0().includes(t)?function(...e){return t.apply(Xo(this),e),un(vd.get(this))}:function(...e){return un(t.apply(Xo(this),e))}}function v0(t){return typeof t=="function"?y0(t):(t instanceof IDBTransaction&&g0(t),h0(t,f0())?new Proxy(t,Pa):t)}function un(t){if(t instanceof IDBRequest)return p0(t);if(Qo.has(t))return Qo.get(t);const e=v0(t);return e!==t&&(Qo.set(t,e),Dc.set(e,t)),e}const Xo=t=>Dc.get(t);function w0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",c=>{s(un(o.result),c.oldVersion,c.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const _0=["get","getKey","getAll","getAllKeys","count"],E0=["put","add","delete","clear"],Yo=new Map;function Lu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yo.get(e))return Yo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=E0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Yo.set(e,i),i}m0(t=>({...t,get:(e,n,s)=>Lu(e,n)||t.get(e,n,s),has:(e,n)=>!!Lu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function I0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ma="@firebase/app",Fu="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Nc("@firebase/app"),T0="@firebase/app-compat",S0="@firebase/analytics-compat",C0="@firebase/analytics",A0="@firebase/app-check-compat",k0="@firebase/app-check",R0="@firebase/auth",N0="@firebase/auth-compat",D0="@firebase/database",O0="@firebase/database-compat",x0="@firebase/functions",P0="@firebase/functions-compat",M0="@firebase/installations",L0="@firebase/installations-compat",F0="@firebase/messaging",U0="@firebase/messaging-compat",V0="@firebase/performance",B0="@firebase/performance-compat",$0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",K0="@firebase/firestore",z0="@firebase/firestore-compat",W0="firebase",G0="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="[DEFAULT]",Q0={[Ma]:"fire-core",[T0]:"fire-core-compat",[C0]:"fire-analytics",[S0]:"fire-analytics-compat",[k0]:"fire-app-check",[A0]:"fire-app-check-compat",[R0]:"fire-auth",[N0]:"fire-auth-compat",[D0]:"fire-rtdb",[O0]:"fire-rtdb-compat",[x0]:"fire-fn",[P0]:"fire-fn-compat",[M0]:"fire-iid",[L0]:"fire-iid-compat",[F0]:"fire-fcm",[U0]:"fire-fcm-compat",[V0]:"fire-perf",[B0]:"fire-perf-compat",[$0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[K0]:"fire-fst",[z0]:"fire-fst-compat","fire-js":"fire-js",[W0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Map,La=new Map;function X0(t,e){try{t.container.addComponent(e)}catch(n){Oc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(La.has(e))return Oc.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,t);for(const n of Oi.values())X0(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Un=new Ar("app","Firebase",Y0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=G0;function Z0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_d,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});const r=Oi.get(s);if(r){if(Di(t,r.options)&&Di(n,r.config))return r;throw Un.create("duplicate-app",{appName:s})}const i=new o0(s);for(const a of La.values())i.addComponent(a);const o=new J0(t,n,i);return Oi.set(s,o),o}function Ed(t=_d){const e=Oi.get(t);if(!e)throw Un.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let r=(s=Q0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oc.warn(a.join(" "));return}ys(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebase-heartbeat-database",t_=1,hr="firebase-heartbeat-store";let Jo=null;function bd(){return Jo||(Jo=w0(e_,t_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}}}).catch(t=>{throw Un.create("storage-open",{originalErrorMessage:t.message})})),Jo}async function n_(t){var e;try{return(await bd()).transaction(hr).objectStore(hr).get(Id(t))}catch(n){throw Un.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Uu(t,e){var n;try{const r=(await bd()).transaction(hr,"readwrite");return await r.objectStore(hr).put(e,Id(t)),r.done}catch(s){throw Un.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Id(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=1024,r_=30*24*60*60*1e3;class i_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=r_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vu(),{heartbeatsToSend:n,unsentEntries:s}=o_(this._heartbeatsCache.heartbeats),r=dd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vu(){return new Date().toISOString().substring(0,10)}function o_(t,e=s_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Bu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class a_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bu(t){return dd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){ys(new Fn("platform-logger",e=>new b0(e),"PRIVATE")),ys(new Fn("heartbeat",e=>new i_(e),"PRIVATE")),hn(Ma,Fu,t),hn(Ma,Fu,"esm2017"),hn("fire-js","")}c_("");var l_="firebase",u_="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(l_,u_,"app");function Pc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Td(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h_=Td,Sd=new Ar("auth","Firebase",Td());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Nc("@firebase/auth");function gi(t,...e){$u.logLevel<=ie.ERROR&&$u.error(`Auth (${Rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Mc(t,...e)}function kt(t,...e){return Mc(t,...e)}function f_(t,e,n){const s=Object.assign(Object.assign({},h_()),{[e]:n});return new Ar("auth","Firebase",s).create(e,{appName:t.name})}function Mc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sd.create(t,...e)}function z(t,e,...n){if(!t)throw Mc(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gi(e),new Error(e)}function qt(t,e){t||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map;function Ft(t){qt(t instanceof Function,"Expected a class definition");let e=ju.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ju.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){const n=xc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Di(i,e!=null?e:{}))return r;jt(r,"already-initialized")}return n.initialize({options:e})}function p_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function g_(){return qu()==="http:"||qu()==="https:"}function qu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g_()||gd()||"connection"in navigator)?navigator.onLine:!0}function y_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=pd()||md()}get(){return m_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Nr(3e4,6e4);function __(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fo(t,e,n,s,r={}){return Ad(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=kr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cd.fetch()(kd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ad(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},v_),e);try{const r=new b_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ti(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ti(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw f_(t,u,l);jt(t,u)}}catch(r){if(r instanceof Kn)throw r;jt(t,"network-request-failed")}}async function E_(t,e,n,s,r={}){const i=await fo(t,e,n,s,r);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Lc(t.config,r):`${t.config.apiScheme}://${r}`}class b_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),w_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=kt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e){return fo(t,"POST","/v1/accounts:delete",e)}async function T_(t,e){return fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S_(t,e=!1){const n=Ot(t),s=await n.getIdToken(e),r=Fc(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ys(Zo(r.auth_time)),issuedAtTime:Ys(Zo(r.iat)),expirationTime:Ys(Zo(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zo(t){return Number(t)*1e3}function Fc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hw(n);return r?JSON.parse(r):(gi("Failed to decode base64 JWT payload"),null)}catch(r){return gi("Caught error parsing JWT payload as JSON",r),null}}function C_(t){const e=Fc(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kn&&A_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function A_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fr(t,T_(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?D_(i.providerUserInfo):[],a=N_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function R_(t){const e=Ot(t);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function D_(t){return t.map(e=>{var{providerId:n}=e,s=Pc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){const n=await Ad(t,{},async()=>{const s=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=kd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):C_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await O_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new dr;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S_(this,e)}reload(){return R_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,I_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:Q,isAnonymous:le,providerData:Ie,stsTokenManager:Ae}=n;z(q&&Ae,e,"internal-error");const Z=dr.fromJSON(this.name,Ae);z(typeof q=="string",e,"internal-error"),Yt(h,e.name),Yt(f,e.name),z(typeof Q=="boolean",e,"internal-error"),z(typeof le=="boolean",e,"internal-error"),Yt(g,e.name),Yt(y,e.name),Yt(S,e.name),Yt(b,e.name),Yt(C,e.name),Yt(x,e.name);const ce=new Mn({uid:q,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:le,photoURL:y,phoneNumber:g,tenantId:S,stsTokenManager:Z,createdAt:C,lastLoginAt:x});return Ie&&Array.isArray(Ie)&&(ce.providerData=Ie.map(we=>Object.assign({},we))),b&&(ce._redirectEventId=b),ce}static async _fromIdTokenResponse(e,n,s=!1){const r=new dr;r.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await xi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nd.type="NONE";const Hu=Nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=mi(this.userKey,r.apiKey,i),this.fullPersistenceKey=mi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new us(Ft(Hu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ft(Hu);const o=mi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Mn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new us(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Md(e))return"Blackberry";if(Ld(e))return"Webos";if(Uc(e))return"Safari";if((e.includes("chrome/")||Od(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dd(t=Le()){return/firefox\//i.test(t)}function Uc(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Od(t=Le()){return/crios\//i.test(t)}function xd(t=Le()){return/iemobile/i.test(t)}function Pd(t=Le()){return/android/i.test(t)}function Md(t=Le()){return/blackberry/i.test(t)}function Ld(t=Le()){return/webos/i.test(t)}function po(t=Le()){return/iphone|ipad|ipod/i.test(t)}function x_(t=Le()){var e;return po(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P_(){return yd()&&document.documentMode===10}function Fd(t=Le()){return po(t)||Pd(t)||Ld(t)||Md(t)||/windows phone/i.test(t)||xd(t)}function M_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e=[]){let n;switch(t){case"Browser":n=Ku(Le());break;case"Worker":n=`${Ku(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new L_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ud(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vd(t){return Ot(t)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=e0(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return E_(t,"POST","/v1/accounts:signInWithIdp",__(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="http://localhost";class Vn extends Bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Pc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:U_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends $d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Dr{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Dr{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Dr{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Mn._fromIdTokenResponse(e,s,r),o=Wu(s);return new vs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Wu(s);return new vs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Wu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Kn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Pi(e,n,s,r)}}function jd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(t,i,e,s):i})}async function V_(t,e,n=!1){const s=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fr(t,jd(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=Fc(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),vs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(t,e,n=!1){const s="signIn",r=await jd(t,s,e),i=await vs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}const Mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){const t=Le();return Uc(t)||po(t)}const q_=1e3,H_=10;class Hd extends qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=j_()&&M_(),this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);P_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,H_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hd.type="LOCAL";const K_=Hd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kd.type="SESSION";const zd=Kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await z_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Vc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function G_(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return typeof Rt().WorkerGlobalScope!="undefined"&&typeof Rt().importScripts=="function"}async function Q_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Y_(){return Wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebaseLocalStorageDb",J_=1,Li="firebaseLocalStorage",Qd="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function Z_(){const t=indexedDB.deleteDatabase(Gd);return new Or(t).toPromise()}function Ua(){const t=indexedDB.open(Gd,J_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Li,{keyPath:Qd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Li)?e(s):(s.close(),await Z_(),e(await Ua()))})})}async function Gu(t,e,n){const s=mo(t,!0).put({[Qd]:e,value:n});return new Or(s).toPromise()}async function eE(t,e){const n=mo(t,!1).get(e),s=await new Or(n).toPromise();return s===void 0?null:s.value}function Qu(t,e){const n=mo(t,!0).delete(e);return new Or(n).toPromise()}const tE=800,nE=3;class Xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(Y_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q_(),!this.activeServiceWorker)return;this.sender=new W_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ua();return await Gu(e,Mi,"1"),await Qu(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=mo(r,!1).getAll();return new Or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xd.type="LOCAL";const sE=Xd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=kt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rE().appendChild(s)})}function oE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return e?Ft(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cE(t){return $_(t.auth,new Bc(t),t.bypassAuthState)}function lE(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),B_(n,new Bc(t),t.bypassAuthState)}async function uE(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),V_(n,new Bc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:jt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Nr(2e3,1e4);class rs extends Yd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hE.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="pendingRedirect",yi=new Map;class dE extends Yd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const s=await pE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pE(t,e){const n=yE(e),s=mE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function gE(t,e){yi.set(t._key(),e)}function mE(t){return Ft(t._redirectPersistence)}function yE(t){return mi(fE,t.config.apiKey,t.name)}async function vE(t,e,n=!1){const s=Vd(t),r=aE(s,e),o=await new dE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=10*60*1e3;class _E{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,e={}){return fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TE=/^https?/;async function SE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bE(t);for(const n of e)try{if(CE(n))return}catch{}jt(t,"unauthorized-domain")}function CE(t){const e=Fa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TE.test(n))return!1;if(IE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new Nr(3e4,6e4);function Yu(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kE(t){return new Promise((e,n)=>{var s,r,i;function o(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),n(kt(t,"network-request-failed"))},timeout:AE.get()})}if(!((r=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Rt().gapi)===null||i===void 0)&&i.load)o();else{const a=oE("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},iE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vi=null,e})}let vi=null;function RE(t){return vi=vi||kE(t),vi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new Nr(5e3,15e3),DE="__/auth/iframe",OE="emulator/auth/iframe",xE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ME(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lc(e,OE):`https://${t.config.authDomain}/${DE}`,s={apiKey:e.apiKey,appName:t.name,v:Rr},r=PE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${kr(s).slice(1)}`}async function LE(t){const e=await RE(t),n=Rt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:ME(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=Rt().setTimeout(()=>{i(o)},NE.get());function c(){Rt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UE=500,VE=600,BE="_blank",$E="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jE(t,e,n,s=UE,r=VE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},FE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Le().toLowerCase();n&&(a=Od(l)?BE:n),Dd(l)&&(e=e||$E,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(x_(l)&&a!=="_self")return qE(e||"",a),new Ju(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Ju(h)}function qE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="__/auth/handler",KE="emulator/auth/handler";function Zu(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rr,eventId:r};if(e instanceof $d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Dr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${zE(t)}?${kr(a).slice(1)}`}function zE({config:t}){return t.emulator?Lc(t,KE):`https://${t.authDomain}/${HE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="webStorageSupport";class WE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=vE,this._overrideRedirectResult=gE}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zu(e,n,s,Fa(),r);return jE(e,o,Vc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),G_(Zu(e,n,s,Fa(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LE(e),s=new _E(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ea,{type:ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ea];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fd()||Uc()||po()}}const GE=WE;var eh="@firebase/auth",th="0.20.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YE(t){ys(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ud(t)},u=new F_(a,c,l);return p_(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ys(new Fn("auth-internal",e=>{const n=Vd(e.getProvider("auth").getImmediate());return(s=>new QE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(eh,th,XE(t)),hn(eh,th,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t=Ed()){const e=xc(t,"auth");return e.isInitialized()?e.getImmediate():d_(t,{popupRedirectResolver:GE,persistence:[sE,K_,zd]})}YE("Browser");var ZE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,$c=$c||{},j=ZE||self;function Fi(){}function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eb(t){return Object.prototype.hasOwnProperty.call(t,ta)&&t[ta]||(t[ta]=++tb)}var ta="closure_uid_"+(1e9*Math.random()>>>0),tb=0;function nb(t,e,n){return t.call.apply(t.bind,arguments)}function sb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=nb:qe=sb,qe.apply(null,arguments)}function ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function _n(){this.s=this.s,this.o=this.o}var rb=0;_n.prototype.s=!1;_n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rb!=0)&&eb(this)};_n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ep=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function ib(t){e:{var e=Xb;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function nh(t){return Array.prototype.concat.apply([],arguments)}function jc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ui(t){return/^[\s\xa0]*$/.test(t)}var sh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function na(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var rh=j.navigator;if(rh){var ih=rh.userAgent;if(ih){Ze=ih;break e}}Ze=""}function qc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function tp(t){const e={};for(const n in t)e[n]=t[n];return e}var oh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function np(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<oh.length;i++)n=oh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Hc(t){return Hc[" "](t),t}Hc[" "]=Fi;function ob(t){var e=lb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ab=Je(Ze,"Opera"),ws=Je(Ze,"Trident")||Je(Ze,"MSIE"),sp=Je(Ze,"Edge"),Ba=sp||ws,rp=Je(Ze,"Gecko")&&!(Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge"))&&!(Je(Ze,"Trident")||Je(Ze,"MSIE"))&&!Je(Ze,"Edge"),cb=Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge");function ip(){var t=j.document;return t?t.documentMode:void 0}var Vi;e:{var sa="",ra=function(){var t=Ze;if(rp)return/rv:([^\);]+)(\)|;)/.exec(t);if(sp)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cb)return/WebKit\/(\S+)/.exec(t);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ra&&(sa=ra?ra[1]:""),ws){var ia=ip();if(ia!=null&&ia>parseFloat(sa)){Vi=String(ia);break e}}Vi=sa}var lb={};function ub(){return ob(function(){let t=0;const e=sh(String(Vi)).split("."),n=sh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=na(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||na(r[2].length==0,i[2].length==0)||na(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var $a;if(j.document&&ws){var ah=ip();$a=ah||parseInt(Vi,10)||void 0}else $a=void 0;var hb=$a,fb=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Fi,e),j.removeEventListener("test",Fi,e)}catch{}return t}();function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};function pr(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rp){e:{try{Hc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:db[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.Z.h.call(this)}}ze(pr,Qe);var db={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pr="closure_listenable_"+(1e6*Math.random()|0),pb=0;function gb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++pb,this.ca=this.fa=!1}function yo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function vo(t){this.src=t,this.g={},this.h=0}vo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=qa(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new gb(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function ja(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Zd(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(yo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),oa={};function op(t,e,n,s,r){if(s&&s.once)return cp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)op(t,e[i],n,s,r);return null}return n=Gc(n),t&&t[Pr]?t.N(e,n,xr(s)?!!s.capture:!!s,r):ap(t,e,n,!1,s,r)}function ap(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xr(r)?!!r.capture:!!r,a=Wc(t);if(a||(t[Kc]=a=new vo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=mb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)fb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(up(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mb(){function t(n){return e.call(t.src,t.listener,n)}var e=yb;return t}function cp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cp(t,e[i],n,s,r);return null}return n=Gc(n),t&&t[Pr]?t.O(e,n,xr(s)?!!s.capture:!!s,r):ap(t,e,n,!0,s,r)}function lp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)lp(t,e[i],n,s,r);else s=xr(s)?!!s.capture:!!s,n=Gc(n),t&&t[Pr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=qa(i,n,s,r),-1<n&&(yo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qa(e,n,s,r)),(n=-1<t?e[t]:null)&&zc(n))}function zc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Pr])ja(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(up(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wc(e))?(ja(n,t),n.h==0&&(n.src=null,e[Kc]=null)):yo(t)}}}function up(t){return t in oa?oa[t]:oa[t]="on"+t}function yb(t,e){if(t.ca)t=!0;else{e=new pr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&zc(t),t=n.call(s,e)}return t}function Wc(t){return t=t[Kc],t instanceof vo?t:null}var aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(t){return typeof t=="function"?t:(t[aa]||(t[aa]=function(e){return t.handleEvent(e)}),t[aa])}function Fe(){_n.call(this),this.i=new vo(this),this.P=this,this.I=null}ze(Fe,_n);Fe.prototype[Pr]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){lp(this,t,e,n,s)};function He(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var r=e;e=new Qe(s,t),np(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=si(o,s,!0,e)&&r}if(o=e.g=t,r=si(o,s,!0,e)&&r,r=si(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=si(o,s,!1,e)&&r}Fe.prototype.M=function(){if(Fe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)yo(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function si(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ja(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Qc=j.JSON.stringify;function vb(){var t=fp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wb{constructor(){this.h=this.g=null}add(e,n){const s=hp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _b,t=>t.reset());class _b{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Eb(t){j.setTimeout(()=>{throw t},0)}function Xc(t,e){Ha||bb(),Ka||(Ha(),Ka=!0),fp.add(t,e)}var Ha;function bb(){var t=j.Promise.resolve(void 0);Ha=function(){t.then(Ib)}}var Ka=!1,fp=new wb;function Ib(){for(var t;t=vb();){try{t.h.call(t.g)}catch(n){Eb(n)}var e=hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ka=!1}function wo(t,e){Fe.call(this),this.h=t||1,this.g=e||j,this.j=qe(this.kb,this),this.l=Date.now()}ze(wo,Fe);O=wo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),He(this,"tick"),this.da&&(Yc(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){wo.Z.M.call(this),Yc(this),delete this.g};function Jc(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function dp(t){t.g=Jc(()=>{t.g=null,t.i&&(t.i=!1,dp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Tb extends _n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dp(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){_n.call(this),this.h=t,this.g={}}ze(gr,_n);var ch=[];function pp(t,e,n,s){Array.isArray(n)||(n&&(ch[0]=n.toString()),n=ch);for(var r=0;r<n.length;r++){var i=op(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gp(t){qc(t.g,function(e,n){this.g.hasOwnProperty(n)&&zc(e)},t),t.g={}}gr.prototype.M=function(){gr.Z.M.call(this),gp(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _o(){this.g=!0}_o.prototype.Aa=function(){this.g=!1};function Sb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Cb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function is(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kb(t,n)+(s?" "+s:"")})}function Ab(t,e){t.info(function(){return"TIMEOUT: "+e})}_o.prototype.info=function(){};function kb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Qc(n)}catch{return e}}var zn={},lh=null;function Eo(){return lh=lh||new Fe}zn.Ma="serverreachability";function mp(t){Qe.call(this,zn.Ma,t)}ze(mp,Qe);function mr(t){const e=Eo();He(e,new mp(e))}zn.STAT_EVENT="statevent";function yp(t,e){Qe.call(this,zn.STAT_EVENT,t),this.stat=e}ze(yp,Qe);function et(t){const e=Eo();He(e,new yp(e,t))}zn.Na="timingevent";function vp(t,e){Qe.call(this,zn.Na,t),this.size=e}ze(vp,Qe);function Mr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var bo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},wp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zc(){}Zc.prototype.h=null;function uh(t){return t.h||(t.h=t.i())}function _p(){}var Lr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function el(){Qe.call(this,"d")}ze(el,Qe);function tl(){Qe.call(this,"c")}ze(tl,Qe);var za;function Io(){}ze(Io,Zc);Io.prototype.g=function(){return new XMLHttpRequest};Io.prototype.i=function(){return{}};za=new Io;function Fr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new gr(this),this.P=Rb,t=Ba?125:void 0,this.W=new wo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ep}function Ep(){this.i=null,this.g="",this.h=!1}var Rb=45e3,Wa={},Bi={};O=Fr.prototype;O.setTimeout=function(t){this.P=t};function Ga(t,e,n){t.K=1,t.v=So(Ht(e)),t.s=n,t.U=!0,bp(t,null)}function bp(t,e){t.F=Date.now(),Ur(t),t.A=Ht(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Rp(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ep,t.g=Qp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Tb(qe(t.Ia,t,t.g),t.O)),pp(t.V,t.g,"readystatechange",t.gb),e=t.H?tp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mr(),Sb(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Ut(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Ut(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ba||this.g&&(this.h.h||this.g.ga()||ph(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?mr(3):mr(2)),To(this);var n=this.g.ba();this.N=n;t:if(Ip(this)){var s=ph(this.g);t="";var r=s.length,i=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Rn(this),Js(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Cb(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ui(a)){var l=a;break t}}l=null}if(n=l)is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qa(this,n);else{this.i=!1,this.o=3,et(12),Rn(this),Js(this);break e}}this.U?(Tp(this,u,o),Ba&&this.i&&u==3&&(pp(this.V,this.W,"tick",this.fb),this.W.start())):(is(this.j,this.m,o,null),Qa(this,o)),u==4&&Rn(this),this.i&&!this.I&&(u==4?Kp(this.l,this):(this.i=!1,Ur(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Rn(this),Js(this)}}}catch{}finally{}};function Ip(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Tp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Nb(t,n),r==Bi){e==4&&(t.o=4,et(14),s=!1),is(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Wa){t.o=4,et(15),is(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else is(t.j,t.m,r,null),Qa(t,r);Ip(t)&&r!=Bi&&r!=Wa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ul(e),e.L=!0,et(11))):(is(t.j,t.m,n,"[Invalid Chunked Response]"),Rn(t),Js(t))}O.fb=function(){if(this.g){var t=Ut(this.g),e=this.g.ga();this.C<e.length&&(To(this),Tp(this,t,e),this.i&&t!=4&&Ur(this))}};function Nb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Bi:(n=Number(e.substring(n,s)),isNaN(n)?Wa:(s+=1,s+n>e.length?Bi:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Rn(this)};function Ur(t){t.Y=Date.now()+t.P,Sp(t,t.P)}function Sp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mr(qe(t.eb,t),e)}function To(t){t.B&&(j.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ab(this.j,this.A),this.K!=2&&(mr(),et(17)),Rn(this),this.o=2,Js(this)):Sp(this,this.Y-t)};function Js(t){t.l.G==0||t.I||Kp(t.l,t)}function Rn(t){To(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Yc(t.W),gp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xa(n.i,t))){if(n.I=t.N,!t.J&&Xa(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hi(n),ko(n);else break e;ll(n),et(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Mr(qe(n.ab,n),6e3));if(1>=Op(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nn(n,11)}else if((t.J||n.g==t)&&Hi(n),!Ui(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Je(y,"spdy")||Je(y,"quic")||Je(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(rl(i,i.h),i.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.sa=S,be(s.F,s.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Gp(s,s.H?s.la:null,s.W),o.J){xp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(To(a),Ur(a)),s.g=o}else qp(s);0<n.l.length&&Ro(n)}else l[0]!="stop"&&l[0]!="close"||Nn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Nn(n,7):cl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}mr(4)}catch{}}function Db(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function nl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")ep(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Va(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Db(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ds(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ds)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Ds.prototype;O.R=function(){sl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return sl(this),this.g.concat()};function sl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Bn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Bn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Bn(this.h,t)?this.h[t]:e};O.set=function(t,e){Bn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Cp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ob(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $n(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $n){this.g=e!==void 0?e:t.g,$i(this,t.j),this.s=t.s,ji(this,t.i),qi(this,t.m),this.l=t.l,e=t.h;var n=new yr;n.i=e.i,e.g&&(n.g=new Ds(e.g),n.h=e.h),hh(this,n),this.o=t.o}else t&&(n=String(t).match(Cp))?(this.g=!!e,$i(this,n[1]||"",!0),this.s=Zs(n[2]||""),ji(this,n[3]||"",!0),qi(this,n[4]),this.l=Zs(n[5]||"",!0),hh(this,n[6]||"",!0),this.o=Zs(n[7]||"")):(this.g=!!e,this.h=new yr(null,this.g))}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qs(e,fh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qs(e,fh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(qs(n,n.charAt(0)=="/"?Fb:Lb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qs(n,Vb)),t.join("")};function Ht(t){return new $n(t)}function $i(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ji(t,e,n){t.i=n?Zs(e,!0):e}function qi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hh(t,e,n){e instanceof yr?(t.h=e,Bb(t.h,t.g)):(n||(e=qs(e,Ub)),t.h=new yr(e,t.g))}function be(t,e,n){t.h.set(e,n)}function So(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xb(t){return t instanceof $n?Ht(t):new $n(t,void 0)}function Pb(t,e,n,s){var r=new $n(null,void 0);return t&&$i(r,t),e&&ji(r,e),n&&qi(r,n),s&&(r.l=s),r}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Mb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Mb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fh=/[#\/\?@]/g,Lb=/[#\?:]/g,Fb=/[#\?]/g,Ub=/[#\?@]/g,Vb=/#/g;function yr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function En(t){t.g||(t.g=new Ds,t.h=0,t.i&&Ob(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=yr.prototype;O.add=function(t,e){En(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ap(t,e){En(t),e=Os(t,e),Bn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Bn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&sl(t)))}function kp(t,e){return En(t),e=Os(t,e),Bn(t.g.h,e)}O.forEach=function(t,e){En(this),this.g.forEach(function(n,s){ep(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){En(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){En(this);var e=[];if(typeof t=="string")kp(this,t)&&(e=nh(e,this.g.get(Os(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=nh(e,t[n])}return e};O.set=function(t,e){return En(this),this.i=null,t=Os(this,t),kp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Rp(t,e,n){Ap(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),jc(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bb(t,e){e&&!t.j&&(En(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ap(this,s),Rp(this,r,n))},t)),t.j=e}var $b=class{constructor(t,e){this.h=t,this.g=e}};function Np(t){this.l=t||jb,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jb=10;function Dp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Op(t){return t.h?1:t.g?t.g.size:0}function Xa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rl(t,e){t.g?t.g.add(e):t.h=e}function xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Np.prototype.cancel=function(){if(this.i=Pp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Pp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jc(t.i)}function il(){}il.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};il.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function qb(){this.g=new il}function Hb(t,e,n){const s=n||"";try{nl(t,function(r,i){let o=r;xr(r)&&(o=Qc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Kb(t,e){const n=new _o;if(j.Image){const s=new Image;s.onload=ni(ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ni(ri,n,s,"TestLoadImage: error",!1,e),s.onabort=ni(ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ni(ri,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ri(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Vr(t){this.l=t.$b||null,this.j=t.ib||!1}ze(Vr,Zc);Vr.prototype.g=function(){return new Co(this.l,this.j)};Vr.prototype.i=function(t){return function(){return t}}({});function Co(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ol,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Co,Fe);var ol=0;O=Co.prototype;O.open=function(t,e){if(this.readyState!=ol)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=ol};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Mp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Br(this):vr(this),this.readyState==3&&Mp(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Br(this))};O.Ta=function(t){this.g&&(this.response=t,Br(this))};O.ha=function(){this.g&&Br(this)};function Br(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zb=j.JSON.parse;function Ce(t){Fe.call(this),this.headers=new Ds,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lp,this.K=this.L=!1}ze(Ce,Fe);var Lp="",Wb=/^https?$/i,Gb=["POST","PUT"];O=Ce.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():za.g(),this.C=this.u?uh(this.u):uh(za),this.g.onreadystatechange=qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){dh(this,i);return}t=n||"";const r=new Ds(this.headers);s&&nl(s,function(i,o){r.set(o,i)}),s=ib(r.T()),n=j.FormData&&t instanceof j.FormData,!(0<=Zd(Gb,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vp(this),0<this.B&&((this.K=Qb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.pa,this)):this.A=Jc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){dh(this,i)}};function Qb(t){return ws&&ub()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Xb(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof $c!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function dh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fp(t),Ao(t)}function Fp(t){t.D||(t.D=!0,He(t,"complete"),He(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),Ao(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ao(this,!0)),Ce.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Up(this):this.cb())};O.cb=function(){Up(this)};function Up(t){if(t.h&&typeof $c!="undefined"&&(!t.C[1]||Ut(t)!=4||t.ba()!=2)){if(t.v&&Ut(t)==4)Jc(t.Fa,0,t);else if(He(t,"readystatechange"),Ut(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Cp)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!Wb.test(r?r.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<Ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Fp(t)}}finally{Ao(t)}}}}function Ao(t,e){if(t.g){Vp(t);const n=t.g,s=t.C[0]?Fi:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch{}}}function Vp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function Ut(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zb(e)}};function ph(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yb(t){let e="";return qc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function al(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Yb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bp(t){this.za=0,this.l=[],this.h=new _o,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bs("baseRetryDelayMs",5e3,t),this.$a=Bs("retryDelaySeedMs",1e4,t),this.Ya=Bs("forwardChannelMaxRetries",2,t),this.ra=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Np(t&&t.concurrentRequestLimit),this.Ca=new qb,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Bp.prototype;O.ma=8;O.G=1;function cl(t){if($p(t),t.G==3){var e=t.V++,n=Ht(t.F);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),$r(t,n),e=new Fr(t,t.h,e,void 0),e.K=2,e.v=So(Ht(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ur(e)}Wp(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ko(t){t.g&&(ul(t),t.g.cancel(),t.g=null)}function $p(t){ko(t),t.u&&(j.clearTimeout(t.u),t.u=null),Hi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function ca(t,e){t.l.push(new $b(t.Za++,e)),t.G==3&&Ro(t)}function Ro(t){Dp(t.i)||t.m||(t.m=!0,Xc(t.Ha,t),t.C=0)}function Jb(t,e){return Op(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Mr(qe(t.Ha,t,e),zp(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Fr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=tp(i),np(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jp(this,r,e),n=Ht(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),$r(this,n),this.o&&i&&al(n,this.o,i),rl(this.i,r),this.Ra&&be(n,"TYPE","init"),this.ja?(be(n,"$req",e),be(n,"SID","null"),r.$=!0,Ga(r,n,null)):Ga(r,n,e),this.G=2}}else this.G==3&&(t?gh(this,t):this.l.length==0||Dp(this.i)||gh(this))};function gh(t,e){var n;e?n=e.m:n=t.V++;const s=Ht(t.F);be(s,"SID",t.J),be(s,"RID",n),be(s,"AID",t.U),$r(t,s),t.o&&t.s&&al(s,t.o,t.s),n=new Fr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=jp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),rl(t.i,n),Ga(n,s,e)}function $r(t,e){t.j&&nl({},function(n,s){be(e,s,n)})}function jp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?qe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Hb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function qp(t){t.g||t.u||(t.Y=1,Xc(t.Ga,t),t.A=0)}function ll(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Mr(qe(t.Ga,t),zp(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Hp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Mr(qe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),ko(this),Hp(this))};function ul(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Hp(t){t.g=new Fr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ht(t.oa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.N?"0":"1"),be(e,"AID",t.U),$r(t,e),be(e,"TYPE","xmlhttp"),t.o&&t.s&&al(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=So(Ht(e)),n.s=null,n.U=!0,bp(n,t)}O.ab=function(){this.v!=null&&(this.v=null,ko(this),ll(this),et(19))};function Hi(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Kp(t,e){var n=null;if(t.g==e){Hi(t),ul(t),t.g=null;var s=2}else if(Xa(t.i,e))n=e.D,xp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Eo(),He(s,new vp(s,n)),Ro(t)}else qp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&Jb(t,e)||s==2&&ll(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}}function zp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Nn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=qe(t.jb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||$i(n,"https"),So(n)),Kb(n.toString(),s)}else et(2);t.G=0,t.j&&t.j.va(e),Wp(t),$p(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function Wp(t){t.G=0,t.I=-1,t.j&&((Pp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,jc(t.l),t.l.length=0),t.j.ua())}function Gp(t,e,n){let s=xb(n);if(s.i!="")e&&ji(s,e+"."+s.i),qi(s,s.m);else{const r=j.location;s=Pb(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&qc(t.aa,function(r,i){be(s,i,r)}),e=t.D,n=t.sa,e&&n&&be(s,e,n),be(s,"VER",t.ma),$r(t,s),s}function Qp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ce(new Vr({ib:!0})):new Ce(t.qa),e.L=t.H,e}function Xp(){}O=Xp.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Ki(){if(ws&&!(10<=Number(hb)))throw Error("Environmental error: no available transport.")}Ki.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Fe.call(this),this.g=new Bp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ui(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}ze(ct,Fe);ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xc(qe(t.hb,t,e))),et(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gp(t,null,t.W),Ro(t)};ct.prototype.close=function(){cl(this.g)};ct.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ca(this.g,e)}else this.v?(e={},e.__data__=Qc(t),ca(this.g,e)):ca(this.g,t)};ct.prototype.M=function(){this.g.j=null,delete this.j,cl(this.g),delete this.g,ct.Z.M.call(this)};function Yp(t){el.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(Yp,el);function Jp(){tl.call(this),this.status=1}ze(Jp,tl);function xs(t){this.g=t}ze(xs,Xp);xs.prototype.xa=function(){He(this.g,"a")};xs.prototype.wa=function(t){He(this.g,new Yp(t))};xs.prototype.va=function(t){He(this.g,new Jp)};xs.prototype.ua=function(){He(this.g,"b")};Ki.prototype.createWebChannel=Ki.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;bo.NO_ERROR=0;bo.TIMEOUT=8;bo.HTTP_ERROR=6;wp.COMPLETE="complete";_p.EventType=Lr;Lr.OPEN="a";Lr.CLOSE="b";Lr.ERROR="c";Lr.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.La;Ce.prototype.getLastErrorCode=Ce.prototype.Da;Ce.prototype.getStatus=Ce.prototype.ba;Ce.prototype.getResponseJson=Ce.prototype.Qa;Ce.prototype.getResponseText=Ce.prototype.ga;Ce.prototype.send=Ce.prototype.ea;var Zb=function(){return new Ki},eI=function(){return Eo()},la=bo,tI=wp,nI=zn,mh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sI=Vr,ii=_p,rI=Ce;const yh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Nc("@firebase/firestore");function vh(){return jn.logLevel}function F(t,...e){if(jn.logLevel<=ie.DEBUG){const n=e.map(hl);jn.debug(`Firestore (${Ps}): ${t}`,...n)}}function mn(t,...e){if(jn.logLevel<=ie.ERROR){const n=e.map(hl);jn.error(`Firestore (${Ps}): ${t}`,...n)}}function wh(t,...e){if(jn.logLevel<=ie.WARN){const n=e.map(hl);jn.warn(`Firestore (${Ps}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function ve(t,e){t||W()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class aI{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new iI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new st(e)}}class cI{constructor(e,n,s){this.type="FirstParty",this.user=st.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class lI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new cI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new uI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=fI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ae(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Re(0,0))}static max(){return new J(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends wr{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const dI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends wr{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return dI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Ee.fromString(e))}static fromName(e){return new V(Ee.fromString(e).popFirst(5))}static empty(){return new V(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Ee(e.slice()))}}function pI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new yn(r,V.empty(),e)}function gI(t){return new yn(t.readTime,t.key,-1)}class yn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new yn(J.min(),V.empty(),-1)}static max(){return new yn(J.max(),V.empty(),-1)}}function mI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==yI)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fl.ot=-1;class Oe{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}}class oi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Be.RED,this.left=r!=null?r:Be.EMPTY,this.right=i!=null?i:Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eh(this.data.getIterator())}getIteratorFrom(e){return new Eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ne(this.comparator);return n.data=e,n}}class Eh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ne(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const wI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=wI.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ng(t){const e=t.mapValue.fields.__previous_value__;return tg(e)?ng(e):e}function _r(t){const e=vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){return t==null}function zi(t){return t===0&&1/t==-1/0}function EI(t){return typeof t=="number"&&Number.isInteger(t)&&!zi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tg(t)?4:bI(t)?9007199254740991:10:W()}function xt(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=vn(s.timestampValue),o=vn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Es(s.bytesValue).isEqual(Es(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?zi(i)===zi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(_h(i)!==_h(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!xt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Er(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=qn(t),s=qn(e);if(n!==s)return ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bh(t.timestampValue,e.timestampValue);case 4:return bh(_r(t),_r(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Es(r),a=Es(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ae(o[c],a[c]);if(l!==0)return l}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ae(Se(r.latitude),Se(i.latitude));return o!==0?o:ae(Se(r.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Is(o[c],a[c]);if(l)return l}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ai.mapValue&&i===ai.mapValue)return 0;if(r===ai.mapValue)return 1;if(i===ai.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ae(a[u],l[u]);if(h!==0)return h;const f=Is(o[a[u]],c[l[u]]);if(f!==0)return f}return ae(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function bh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=vn(t),s=vn(e),r=ae(n.seconds,s.seconds);return r!==0?r:ae(n.nanos,s.nanos)}function fs(t){return Ya(t)}function Ya(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=vn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ya(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ya(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Ih(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ja(t){return!!t&&"integerValue"in t}function dl(t){return!!t&&"arrayValue"in t}function Th(t){return!!t&&"nullValue"in t}function Sh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wi(t){return!!t&&"mapValue"in t}function er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=er(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(n)}setAll(e){let n=We.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=er(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ms(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ft(er(this.value))}}function sg(t){const e=[];return Ms(t.fields,(n,s)=>{const r=new We([n]);if(wi(s)){const i=sg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new $e(e,0,J.min(),J.min(),ft.empty(),0)}static newFoundDocument(e,n,s){return new $e(e,1,n,J.min(),s,0)}static newNoDocument(e,n){return new $e(e,2,n,J.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,J.min(),ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Ch(t,e=null,n=[],s=[],r=null,i=null,o=null){return new II(t,e,n,s,r,i,o)}function pl(t){const e=G(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+fs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),No(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fs(s)).join(",")),e.ut=n}return e.ut}function TI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${fs(s.value)}`;var s}).join(", ")}]`),No(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fs(n)).join(",")),`Target(${e})`}function gl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!OI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!xt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kh(t.startAt,e.startAt)&&kh(t.endAt,e.endAt)}function Za(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class tt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new SI(e,n,s):n==="array-contains"?new kI(e,s):n==="in"?new RI(e,s):n==="not-in"?new NI(e,s):n==="array-contains-any"?new DI(e,s):new tt(e,n,s)}static ct(e,n,s){return n==="in"?new CI(e,s):new AI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Is(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.at(Is(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class SI extends tt{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.at(n)}}class CI extends tt{constructor(e,n){super(e,"in",n),this.keys=rg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AI extends tt{constructor(e,n){super(e,"not-in",n),this.keys=rg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class kI extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dl(n)&&Er(n.arrayValue,this.value)}}class RI extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Er(this.value.arrayValue,n)}}class NI extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Er(this.value.arrayValue,n)}}class DI extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Er(this.value.arrayValue,s))}}class Wi{constructor(e,n){this.position=e,this.inclusive=n}}class tr{constructor(e,n="asc"){this.field=e,this.dir=n}}function OI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ah(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=Is(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function xI(t,e,n,s,r,i,o,a){return new Hr(t,e,n,s,r,i,o,a)}function ig(t){return new Hr(t)}function PI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function og(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ag(t){for(const e of t.filters)if(e.ht())return e.field;return null}function cg(t){return t.collectionGroup!==null}function br(t){const e=G(t);if(e.lt===null){e.lt=[];const n=ag(e),s=og(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new tr(n)),e.lt.push(new tr(We.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new tr(We.keyField(),i))}}}return e.lt}function Hn(t){const e=G(t);if(!e.ft)if(e.limitType==="F")e.ft=Ch(e.path,e.collectionGroup,br(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of br(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new tr(i.field,o))}const s=e.endAt?new Wi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Wi(e.startAt.position,e.startAt.inclusive):null;e.ft=Ch(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function MI(t,e,n){return new Hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Do(t,e){return gl(Hn(t),Hn(e))&&t.limitType===e.limitType}function lg(t){return`${pl(Hn(t))}|lt:${t.limitType}`}function ec(t){return`Query(target=${TI(Hn(t))}; limitType=${t.limitType})`}function ml(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ah(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,br(n),s)||n.endAt&&!function(r,i,o){const a=Ah(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,br(n),s))}(t,e)}function LI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ug(t){return(e,n)=>{let s=!1;for(const r of br(t)){const i=FI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FI(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Is(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(e)?"-0":e}}function fg(t){return{integerValue:""+t}}function UI(t,e){return EI(e)?fg(e):hg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function VI(t,e,n){return t instanceof Gi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ir?pg(t,e):t instanceof Tr?gg(t,e):function(s,r){const i=dg(s,r),o=Rh(i)+Rh(s._t);return Ja(i)&&Ja(s._t)?fg(o):hg(s.wt,o)}(t,e)}function BI(t,e,n){return t instanceof Ir?pg(t,e):t instanceof Tr?gg(t,e):n}function dg(t,e){return t instanceof Qi?Ja(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Gi extends Oo{}class Ir extends Oo{constructor(e){super(),this.elements=e}}function pg(t,e){const n=mg(e);for(const s of t.elements)n.some(r=>xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Tr extends Oo{constructor(e){super(),this.elements=e}}function gg(t,e){let n=mg(e);for(const s of t.elements)n=n.filter(r=>!xt(r,s));return{arrayValue:{values:n}}}class Qi extends Oo{constructor(e,n){super(),this.wt=e,this._t=n}}function Rh(t){return Se(t.integerValue||t.doubleValue)}function mg(t){return dl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $I(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ir&&s instanceof Ir||n instanceof Tr&&s instanceof Tr?_s(n.elements,s.elements,xt):n instanceof Qi&&s instanceof Qi?xt(n._t,s._t):n instanceof Gi&&s instanceof Gi}(t.transform,e.transform)}class jI{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _i(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xo{}function yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wg(t.key,Vt.none()):new Kr(t.key,t.data,Vt.none());{const n=t.data,s=ft.empty();let r=new Ne(We.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Wn(t.key,s,new Nt(r.toArray()),Vt.none())}}function qI(t,e,n){t instanceof Kr?function(s,r,i){const o=s.value.clone(),a=Dh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wn?function(s,r,i){if(!_i(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Dh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function nr(t,e,n,s){return t instanceof Kr?function(r,i,o,a){if(!_i(r.precondition,i))return o;const c=r.value.clone(),l=Oh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wn?function(r,i,o,a){if(!_i(r.precondition,i))return o;const c=Oh(r.fieldTransforms,a,i),l=i.data;return l.setAll(vg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _i(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function HI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=dg(s.transform,r||null);i!=null&&(n===null&&(n=ft.empty()),n.set(s.field,i))}return n||null}function Nh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_s(n,s,(r,i)=>$I(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kr extends xo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wn extends xo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dh(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,BI(o,a,n[r]))}return s}function Oh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,VI(i,o,e))}return s}class wg extends xo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends xo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ne;function WI(t){switch(t){default:return W();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function _g(t){if(t===void 0)return mn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Te.OK:return _.OK;case Te.CANCELLED:return _.CANCELLED;case Te.UNKNOWN:return _.UNKNOWN;case Te.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Te.INTERNAL:return _.INTERNAL;case Te.UNAVAILABLE:return _.UNAVAILABLE;case Te.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Te.NOT_FOUND:return _.NOT_FOUND;case Te.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Te.ABORTED:return _.ABORTED;case Te.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Te.DATA_LOSS:return _.DATA_LOSS;default:return W()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return eg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new Oe(V.comparator);function Kt(){return GI}const Eg=new Oe(V.comparator);function Hs(...t){let e=Eg;for(const n of t)e=e.insert(n.key,n);return e}function bg(t){let e=Eg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Dn(){return sr()}function Ig(){return sr()}function sr(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const QI=new Oe(V.comparator),XI=new Ne(V.comparator);function te(...t){let e=XI;for(const n of t)e=e.add(n);return e}const YI=new Ne(ae);function Tg(){return YI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,zr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Po(J.min(),s,Tg(),Kt(),te())}}class zr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new zr(Ke.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class Sg{constructor(e,n){this.targetId=e,this.It=n}}class Cg{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class xh{constructor(){this.Tt=0,this.Et=Mh(),this.At=Ke.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=te(),n=te(),s=te();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new zr(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Mh()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class JI{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Kt(),this.Bt=Ph(),this.Lt=new Ne(ae)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Za(i))if(s===0){const o=new V(i.path);this.Kt(n,o,$e.newNoDocument(o,J.min()))}else ve(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Za(a.target)){const c=new V(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,$e.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=te();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Po(e,n,this.Lt,this.$t,s);return this.$t=Kt(),this.Bt=Ph(),this.Lt=new Ne(ae),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new xh,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ne(ae),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new xh),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Ph(){return new Oe(V.comparator)}function Mh(){return new Oe(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class tT{constructor(e,n){this.databaseId=e,this.dt=n}}function Xi(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.dt?e.toBase64():e.toUint8Array()}function nT(t,e){return Xi(t,e.toTimestamp())}function Bt(t){return ve(!!t),J.fromTimestamp(function(e){const n=vn(e);return new Re(n.seconds,n.nanos)}(t))}function yl(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kg(t){const e=Ee.fromString(t);return ve(Dg(e)),e}function tc(t,e){return yl(t.databaseId,e.path)}function ua(t,e){const n=kg(e);if(n.get(1)!==t.databaseId.projectId)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Rg(n))}function nc(t,e){return yl(t.databaseId,e)}function sT(t){const e=kg(t);return e.length===4?Ee.emptyPath():Rg(e)}function sc(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lh(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function rT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(ve(l===void 0||typeof l=="string"),Ke.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:_g(c.code);return new M(l,c.message||"")}(o);n=new Cg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ua(t,s.document.name),i=Bt(s.document.updateTime),o=new ft({mapValue:{fields:s.document.fields}}),a=$e.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ei(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ua(t,s.document),i=s.readTime?Bt(s.readTime):J.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ei([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ua(t,s.document),i=s.removedTargetIds||[];n=new Ei([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new zI(r),o=s.targetId;n=new Sg(o,i)}}return n}function iT(t,e){let n;if(e instanceof Kr)n={update:Lh(t,e.key,e.value)};else if(e instanceof wg)n={delete:tc(t,e.key)};else if(e instanceof Wn)n={update:Lh(t,e.key,e.data),updateMask:gT(e.fieldMask)};else{if(!(e instanceof KI))return W();n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Gi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ir)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qi)return{fieldPath:i.field.canonicalString(),increment:o._t};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function oT(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Bt(s.updateTime):Bt(r);return i.isEqual(J.min())&&(i=Bt(r)),new jI(i,s.transformResults||[])}(n,e))):[]}function aT(t,e){return{documents:[nc(t,e.path)]}}function cT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=nc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Sh(h.value))return{unaryFilter:{field:Zn(h.field),op:"IS_NAN"}};if(Th(h.value))return{unaryFilter:{field:Zn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Sh(h.value))return{unaryFilter:{field:Zn(h.field),op:"IS_NOT_NAN"}};if(Th(h.value))return{unaryFilter:{field:Zn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(h.field),op:fT(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Zn(u.field),direction:hT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||No(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function lT(t){let e=sT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ng(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new tr(os(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,No(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Wi(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Wi(f,h)}(n.endAt)),xI(e,r,o,i,a,"F",c,l)}function uT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ng(t){return t?t.unaryFilter!==void 0?[pT(t)]:t.fieldFilter!==void 0?[dT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ng(e)).reduce((e,n)=>e.concat(n)):W():[]}function hT(t){return ZI[t]}function fT(t){return eT[t]}function Zn(t){return{fieldPath:t.canonicalString()}}function os(t){return We.fromServerFormat(t.fieldPath)}function dT(t){return tt.create(os(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function pT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=os(t.unaryFilter.field);return tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=os(t.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=os(t.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=os(t.unaryFilter.field);return tt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function gT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&qI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=nr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=nr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ig();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=yg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,s)=>Nh(n,s))&&_s(this.baseMutations,e.baseMutations,(n,s)=>Nh(n,s))}}class vl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=QI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new vl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,s,r,i=J.min(),o=J.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.ne=e}}function wT(t){const e=lT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?MI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.ze=new ET}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(yn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class ET{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ne(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ne(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ts(0)}static Rn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&nr(s.mutation,r,Nt.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Kt();const o=sr(),a=sr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Wn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),nr(u.mutation,l,u.mutation.getFieldMask(),Re.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new IT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=sr();let r=new Oe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Nt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ig();u.forEach(f=>{if(!i.has(f)){const g=yg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Dn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:bg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(s=>{let r=Hs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Hs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Hr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,$e.newInvalidDocument(l)))});let o=Hs();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&nr(l.mutation,c,Nt.empty(),Re.now()),ml(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve($e.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Bt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:wT(s.bundledQuery),readTime:Bt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.overlays=new Oe(V.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Dn(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Dn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yT(n,s));let i=this.Xn.get(n);i===void 0&&(i=te(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.Zn=new Ne(xe.ts),this.es=new Ne(xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new xe(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new xe(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new V(new Ee([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new V(new Ee([])),s=new xe(n,e),r=new xe(n,e+1);let i=te();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return V.comparator(e.key,n.key)||ae(e.ls,n.ls)}static ns(e,n){return ae(e.ls,n.ls)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ne(xe.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ne(ae);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),T.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new xe(new V(i),0);let a=new Ne(ae);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return T.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new xe(n,0),r=this.ds.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.ps=e,this.docs=new Oe(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=Kt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=Kt();const i=new V(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||mI(gI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}Is(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new RT(this)}getSize(e){return T.resolve(this.size)}}class RT extends bT{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.persistence=e,this.Ts=new Ls(n=>pl(n),gl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new wl,this.targetCount=0,this.Rs=Ts.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.bs={},this.overlays={},this.Ps=new fl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new NT(this),this.indexManager=new _T,this.remoteDocumentCache=function(s){return new kT(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new vT(n),this.Ds=new ST(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new AT(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new OT(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class OT extends vI{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.ks=new wl,this.Os=null}static Ms(e){return new _l(e)}get Fs(){if(this.Os)return this.Os;throw W()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,s=>{const r=V.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new El(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return T.resolve(null)}xi(e,n,s,r){return PI(n)||r.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(vh()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ec(n)),this.Mi(e,o,n,pI(r,-1)))})}ki(e,n){let s=new Ne(ug(e));return n.forEach((r,i)=>{ml(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return vh()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ec(n)),this.Di.getDocumentsMatchingQuery(e,n,yn.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Oe(ae),this.Bi=new Ls(i=>pl(i),gl),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TT(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function MT(t,e,n,s){return new PT(t,e,n,s)}async function Og(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function LT(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=T.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const S=c.docVersions.get(g);ve(S!==null),y.version.compareTo(S)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function xg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function FT(t,e){const n=G(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,S,b){return y.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=Kt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(UT(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(J.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=r,i))}function UT(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Kt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function VT(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function BT(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Ln(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function rc(t,e,n){const s=G(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Fh(t,e,n){const s=G(t);let r=J.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Bi.get(l);return h!==void 0?T.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,Hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:te())).next(a=>($T(s,LI(e),a),{documents:a,ji:i})))}function $T(t,e,n){let s=J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class Uh{constructor(){this.activeTargetIds=Tg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jT{constructor(){this.Fr=new Uh,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Uh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw wh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ps,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=HT[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new rI;a.listenOnce(tI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case la.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case la.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new M(_.DEADLINE_EXCEEDED,"Request time out"));break;case la.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new M(f,h.message))}else o(new M(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(_.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Zb(),o=eI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sI({})),this.uo(a.initMessageHeaders,n,s),pd()||md()||zw()||yd()||Ww()||gd()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new KT({jr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",y),l.send(y))},Wr:()=>l.close()}),g=(y,S,b)=>{y.listen(S,C=>{try{b(C)}catch(x){setTimeout(()=>{throw x},0)}})};return g(l,ii.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,ii.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.eo())}),g(l,ii.EventType.ERROR,y=>{h||(h=!0,wh("Connection","WebChannel transport errored:",y),f.eo(new M(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,ii.EventType.MESSAGE,y=>{var S;if(!h){const b=y.data[0];ve(!!b);const C=b,x=C.error||((S=C[0])===null||S===void 0?void 0:S.error);if(x){F("Connection","WebChannel received error:",x);const q=x.status;let Q=function(Ie){const Ae=Te[Ie];if(Ae!==void 0)return _g(Ae)}(q),le=x.message;Q===void 0&&(Q=_.INTERNAL,le="Unknown error status: "+q+" with message "+x.message),h=!0,f.eo(new M(Q,le)),l.close()}else F("Connection","WebChannel received:",b),f.no(b)}}),g(o,nI.STAT_EVENT,y=>{y.stat===mh.PROXY?F("Connection","Detected buffering proxy"):y.stat===mh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ha(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return new tT(t,!0)}class Pg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new M(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WT extends Mg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=rT(this.wt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Bt(i.readTime):J.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=sc(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Za(a)?{documents:aT(r,a)}:{query:cT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ag(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Xi(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=uT(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=sc(this.wt),n.removeTarget=e,this.Mo(n)}}class GT extends Mg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=oT(e.writeResults,e.commitTime),s=Bt(e.commitTime);return this.listener.Jo(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=sc(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>iT(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(_.UNKNOWN,r.toString())})}ao(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(_.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class XT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(mn(n),this.su=!1):F("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Gn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.lu.add(4),await Wr(c),c._u.set("Unknown"),c.lu.delete(4),await Lo(c)}(this))})}),this._u=new XT(s,r)}}async function Lo(t){if(Gn(t))for(const e of t.fu)await e(!0)}async function Wr(t){for(const e of t.fu)await e(!1)}function Lg(t,e){const n=G(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Tl(n)?Il(n):Fs(n).Co()&&bl(n,e))}function Fg(t,e){const n=G(t),s=Fs(n);n.hu.delete(e),s.Co()&&Ug(n,e),n.hu.size===0&&(s.Co()?s.ko():Gn(n)&&n._u.set("Unknown"))}function bl(t,e){t.wu.Nt(e.targetId),Fs(t).Qo(e)}function Ug(t,e){t.wu.Nt(e),Fs(t).jo(e)}function Il(t){t.wu=new JI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Fs(t).start(),t._u.iu()}function Tl(t){return Gn(t)&&!Fs(t).Do()&&t.hu.size>0}function Gn(t){return G(t).lu.size===0}function Vg(t){t.wu=void 0}async function JT(t){t.hu.forEach((e,n)=>{bl(t,e)})}async function ZT(t,e){Vg(t),Tl(t)?(t._u.uu(e),Il(t)):t._u.set("Unknown")}async function eS(t,e,n){if(t._u.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yi(t,s)}else if(e instanceof Ei?t.wu.Ut(e):e instanceof Sg?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const s=await xg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Ug(r,a);const l=new Ln(c.target,a,1,c.sequenceNumber);bl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await Yi(t,s)}}async function Yi(t,e,n){if(!qr(e))throw e;t.lu.add(1),await Wr(t),t._u.set("Offline"),n||(n=()=>xg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Lo(t)})}function Bg(t,e){return e().catch(n=>Yi(t,n,e))}async function Fo(t){const e=G(t),n=wn(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;tS(e);)try{const r=await VT(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,nS(e,r)}catch(r){await Yi(e,r)}$g(e)&&jg(e)}function tS(t){return Gn(t)&&t.au.length<10}function nS(t,e){t.au.push(e);const n=wn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function $g(t){return Gn(t)&&!wn(t).Do()&&t.au.length>0}function jg(t){wn(t).start()}async function sS(t){wn(t).Xo()}async function rS(t){const e=wn(t);for(const n of t.au)e.Ho(n.mutations)}async function iS(t,e,n){const s=t.au.shift(),r=vl.from(s,e,n);await Bg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fo(t)}async function oS(t,e){e&&wn(t).zo&&await async function(n,s){if(r=s.code,WI(r)&&r!==_.ABORTED){const i=n.au.shift();wn(n).No(),await Bg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(n)}var r}(t,e),$g(t)&&jg(t)}async function Bh(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=Gn(n);n.lu.add(3),await Wr(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Lo(n)}async function aS(t,e){const n=G(t);e?(n.lu.delete(2),await Lo(n)):e||(n.lu.add(2),await Wr(n),n._u.set("Unknown"))}function Fs(t){return t.mu||(t.mu=function(e,n,s){const r=G(e);return r.tu(),new WT(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:JT.bind(null,t),Jr:ZT.bind(null,t),Go:eS.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Tl(t)?Il(t):t._u.set("Unknown")):(await t.mu.stop(),Vg(t))})),t.mu}function wn(t){return t.gu||(t.gu=function(e,n,s){const r=G(e);return r.tu(),new GT(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:sS.bind(null,t),Jr:oS.bind(null,t),Yo:rS.bind(null,t),Jo:iS.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Fo(t)):(await t.gu.stop(),t.au.length>0&&(F("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Sl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cl(t,e){if(mn("AsyncQueue",`${e}: ${t}`),qr(t))return new M(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=Hs(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.yu=new Oe(V.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ss{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ss(e,n,ds.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.Iu=void 0,this.listeners=[]}}class lS{constructor(){this.queries=new Ls(e=>lg(e),Do),this.onlineState="Unknown",this.Tu=new Set}}async function uS(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new cS),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Cl(o,`Initialization of query '${ec(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Al(n)}async function hS(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function fS(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Al(n)}function dS(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Al(t){t.Tu.forEach(e=>{e.next()})}class pS{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ss(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class Hg{constructor(e){this.key=e}}class gS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=te(),this.mutatedKeys=te(),this.Lu=ug(e),this.Uu=new ds(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new $h,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=ml(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;f&&g?f.data.isEqual(g.data)?y!==S&&(s.track({type:3,doc:g}),b=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),b=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),b=!0):f&&!g&&(s.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Ss(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new $h,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=te(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Hg(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new qg(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=te();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ss.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class mS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yS{constructor(e){this.key=e,this.Xu=!1}}class vS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Ls(a=>lg(a),Do),this.ec=new Map,this.nc=new Set,this.sc=new Oe(V.comparator),this.ic=new Map,this.rc=new wl,this.oc={},this.uc=new Map,this.cc=Ts.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function wS(t,e){const n=RS(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await BT(n.localStore,Hn(e));n.isPrimaryClient&&Lg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await _S(n,e,s,a==="current")}return r}async function _S(t,e,n,s){t.hc=(u,h,f)=>async function(g,y,S,b){let C=y.view.Ku(S);C.Oi&&(C=await Fh(g.localStore,y.query,!1).then(({documents:Q})=>y.view.Ku(Q,C)));const x=b&&b.targetChanges.get(y.targetId),q=y.view.applyChanges(C,g.isPrimaryClient,x);return qh(g,y.targetId,q.zu),q.snapshot}(t,u,h,f);const r=await Fh(t.localStore,e,!0),i=new gS(e,r.ji),o=i.Ku(r.documents),a=zr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);qh(t,n,c.zu);const l=new mS(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function ES(t,e){const n=G(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!Do(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Fg(n.remoteStore,s.targetId),ic(n,s.targetId)}).catch(jr)):(ic(n,s.targetId),await rc(n.localStore,s.targetId,!0))}async function bS(t,e,n){const s=NS(t);try{const r=await function(i,o){const a=G(i),c=Re.now(),l=o.reduce((f,g)=>f.add(g.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Kt(),y=te();return a.Ui.getEntries(f,l).next(S=>{g=S,g.forEach((b,C)=>{C.isValidDocument()||(y=y.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(S=>{u=S;const b=[];for(const C of o){const x=HI(C,u.get(C.key).overlayedDocument);x!=null&&b.push(new Wn(C.key,x,sg(x.value.mapValue),Vt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(S=>{h=S;const b=S.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,S.batchId,b)})}).then(()=>({batchId:h.batchId,changes:bg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Oe(ae)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Gr(s,r.changes),await Fo(s.remoteStore)}catch(r){const i=Cl(r,"Failed to persist write");n.reject(i)}}async function Kg(t,e){const n=G(t);try{const s=await FT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?ve(o.Xu):r.removedDocuments.size>0&&(ve(o.Xu),o.Xu=!1))}),await Gr(n,s,e)}catch(s){await jr(s)}}function jh(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Al(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function IS(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new Oe(V.comparator);o=o.insert(i,$e.newNoDocument(i,J.min()));const a=te().add(i),c=new Po(J.min(),new Map,new Ne(ae),o,a);await Kg(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),kl(s)}else await rc(s.localStore,e,!1).then(()=>ic(s,e,n)).catch(jr)}async function TS(t,e){const n=G(t),s=e.batch.batchId;try{const r=await LT(n.localStore,e);Wg(n,s,null),zg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Gr(n,r)}catch(r){await jr(r)}}async function SS(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Wg(s,e,n),zg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Gr(s,r)}catch(r){await jr(r)}}function zg(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Wg(t,e,n){const s=G(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||Gg(t,s)})}function Gg(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Fg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),kl(t))}function qh(t,e,n){for(const s of n)s instanceof qg?(t.rc.addReference(s.key,e),CS(t,s)):s instanceof Hg?(F("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Gg(t,s.key)):W()}function CS(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.nc.add(s),kl(t))}function kl(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new V(Ee.fromString(e)),s=t.cc.next();t.ic.set(s,new yS(n)),t.sc=t.sc.insert(n,s),Lg(t.remoteStore,new Ln(Hn(ig(n.path)),s,2,fl.ot))}}async function Gr(t,e,n){const s=G(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=El.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Pi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>T.forEach(h.vi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!qr(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.$i.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,y)}}}(s.localStore,i))}async function AS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await Og(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(_.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gr(n,s.Ki)}}function kS(t,e){const n=G(t),s=n.ic.get(e);if(s&&s.Xu)return te().add(s.key);{let r=te();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function RS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.Zu.Go=fS.bind(null,e.eventManager),e.Zu.lc=dS.bind(null,e.eventManager),e}function NS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SS.bind(null,e),e}class DS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return MT(this.persistence,new xT,e.initialUser,this.wt)}_c(e){return new DT(_l.Ms,this.wt)}dc(e){return new jT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=AS.bind(null,this.syncEngine),await aS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lS}createDatastore(e){const n=Mo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new zT(r));var r;return function(i,o,a,c){return new QT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>jh(this.syncEngine,a,0),o=Vh.V()?new Vh:new qT,new YT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new vS(s,r,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);F("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Wr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=Zp.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function MS(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Og(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FS(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Bh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bh(e.remoteStore,i)),t.onlineComponents=e}async function FS(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await MS(t,new DS)),t.offlineComponents}async function Qg(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await LS(t,new OS)),t.onlineComponents}function US(t){return Qg(t).then(e=>e.syncEngine)}async function VS(t){const e=await Qg(t),n=e.eventManager;return n.onListen=wS.bind(null,e.syncEngine),n.onUnlisten=ES.bind(null,e.syncEngine),n}function BS(t,e,n={}){const s=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new xS({next:h=>{i.enqueueAndForget(()=>hS(r,u)),h.fromCache&&a.source==="server"?c.reject(new M(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new pS(o,l,{includeMetadataChanges:!0,Du:!0});return uS(r,u)}(await VS(t),t.asyncQueue,e,n,s)),s.promise}const Hh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e,n){if(!n)throw new M(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $S(t,e,n,s){if(e===!0&&s===!0)throw new M(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kh(t){if(!V.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zh(t){if(V.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function oc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uo(t);throw new M(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,e instanceof bs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oI;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new lI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hh.get(e);n&&(F("ComponentProvider","Removing Datastore"),Hh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Qr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class dn extends Qr{constructor(e,n,s){super(e,n,ig(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new V(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function jS(t,e,...n){if(t=Ot(t),Xg("collection","path",e),t instanceof Rl){const s=Ee.fromString(e,...n);return zh(s),new dn(t,null,s)}{if(!(t instanceof gt||t instanceof dn))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return zh(s),new dn(t.firestore,null,s)}}function qS(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=Zp.I()),Xg("doc","path",e),t instanceof Rl){const s=Ee.fromString(e,...n);return Kh(s),new gt(t,null,new V(s))}{if(!(t instanceof gt||t instanceof dn))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Kh(s),new gt(t.firestore,t instanceof dn?t.converter:null,new V(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pg(this,"async_queue_retry"),this.Kc=()=>{const n=ha();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ha();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new fn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!qr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Sl.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Nl extends Rl{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new HS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Jg(this),this._firestoreClient.terminate()}}function KS(t=Ed()){return xc(t,"firestore").getImmediate()}function Yg(t){return t._firestoreClient||Jg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new _I(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new PS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(Ke.fromBase64String(e))}catch(n){throw new M(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=/^__.*__$/;class WS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kr(e,this.data,n,this.fieldTransforms)}}function em(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class xl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ji(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(em(this.Zc)&&zS.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class GS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Mo(e)}aa(e,n,s,r=!1){return new xl({Zc:e,methodName:n,ca:s,path:We.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function tm(t){const e=t._freezeSettings(),n=Mo(t._databaseId);return new GS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QS(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);rm("Data must be an object, but it was:",o,s);const a=nm(s,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=YS(e,h,n);if(!o.contains(f))throw new M(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ZS(u,f)||u.push(f)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new WS(new ft(a),c,l)}function XS(t,e,n,s=!1){return Pl(n,t.aa(s?4:3,e))}function Pl(t,e){if(sm(t=Ot(t)))return rm("Unsupported field value:",e,t),nm(t,e);if(t instanceof Zg)return function(n,s){if(!em(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Pl(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UI(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:Xi(s.wt,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xi(s.wt,r)}}if(n instanceof Ol)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cs)return{bytesValue:Ag(s.wt,n._byteString)};if(n instanceof gt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Uo(n)}`)}(t,e)}function nm(t,e){const n={};return eg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(s,r)=>{const i=Pl(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Ol||t instanceof Cs||t instanceof gt||t instanceof Zg)}function rm(t,e,n){if(!sm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uo(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function YS(t,e,n){if((e=Ot(e))instanceof Dl)return e._internalPath;if(typeof e=="string")return im(t,e);throw Ji("Field path arguments must be of type string or ",t,!1,void 0,n)}const JS=new RegExp("[~\\*/\\[\\]]");function im(t,e,n){if(e.search(JS)>=0)throw Ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch{throw Ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ji(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(_.INVALID_ARGUMENT,a+t+c)}function ZS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ml("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eC extends om{data(){return super.data()}}function Ml(t,e){return typeof e=="string"?im(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tC extends om{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ml("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bi extends tC{data(e={}){return super.data(e)}}class nC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ci(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new bi(this._firestore,this._userDataWriter,s.key,s,new ci(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:sC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iC{}function oC(t,...e){for(const n of e)t=n._apply(t);return t}class aC extends iC{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=tm(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Qh(u,l);const g=[];for(const y of u)g.push(Gh(a,r,y));h={arrayValue:{values:g}}}else h=Gh(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Qh(u,l),h=XS(o,i,u,l==="in"||l==="not-in");const f=tt.create(c,l,h);return function(g,y){if(y.ht()){const b=ag(g);if(b!==null&&!b.isEqual(y.field))throw new M(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${y.field.toString()}'`);const C=og(g);C!==null&&lC(g,y.field,C)}const S=function(b,C){for(const x of b.filters)if(C.indexOf(x.op)>=0)return x.op;return null}(g,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(S!==null)throw S===y.op?new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${S.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Qr(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function cC(t,e,n){const s=e,r=Ml("where",t);return new aC(r,s,n)}function Gh(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new M(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cg(e)&&n.indexOf("/")!==-1)throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ee.fromString(n));if(!V.isDocumentKey(s))throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ih(t,new V(s))}if(n instanceof gt)return Ih(t,n._key);throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uo(n)}.`)}function Qh(t,e){if(!Array.isArray(t)||t.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function lC(t,e,n){if(!n.isEqual(e))throw new M(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return Ms(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ol(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ng(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=vn(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);ve(Dg(s));const r=new bs(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class fC extends uC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function dC(t){t=oc(t,Qr);const e=oc(t.firestore,Nl),n=Yg(e),s=new fC(e);return rC(t._query),BS(n,t._query).then(r=>new nC(e,s,t,r))}function MC(t,e){const n=oc(t.firestore,Nl),s=qS(t),r=hC(t.converter,e);return pC(n,[QS(tm(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Vt.exists(!1))]).then(()=>s)}function pC(t,e){return function(n,s){const r=new fn;return n.asyncQueue.enqueueAndForget(async()=>bS(await US(n),s,r)),r.promise}(Yg(t),e)}(function(t,e=!0){(function(n){Ps=n})(Rr),ys(new Fn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Nl(r,new aI(n.getProvider("auth-internal")),new hI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),hn(yh,"3.4.10",t),hn(yh,"3.4.10","esm2017")})();const gC={apiKey:"AIzaSyAwLrq8bXpR7la5EhSEfCSMWxNpJNs1r14",authDomain:"leckerlog.firebaseapp.com",projectId:"leckerlog",storageBucket:"leckerlog.appspot.com",messagingSenderId:"218172068678",appId:"1:218172068678:web:9c6a1fd7066f0659b88b47"},mC=Z0(gC),yC=JE(),vC=KS(mC);yC.languageCode="de";const wC={key:0,class:"flex flex-col gap-4 m-auto p-2"},_C=Cr({__name:"DisplayRestaurants",setup(t){const e=vf([]);return bc(async()=>{const n=oC(jS(vC,"Restaurants"),cC("userId","==","test"));(await dC(n)).forEach(r=>{e.value.push({...r.data(),restaurantId:r.id})})}),(n,s)=>e.value.length>0?(xn(),Ri("div",wC,[(xn(!0),Ri(ht,null,Ay(e.value,(r,i)=>(xn(),Cc($w,{key:`${i}-entry`,"lecker-log":r,"doc-id":r.restaurantId},null,8,["lecker-log","doc-id"]))),128))])):Qy("",!0)}}),EC=[{path:"/",name:"Home",component:_C},{path:"/food/:id",name:"Food",component:()=>yu(()=>import("./DisplayFood.31551996.js"),[]),props:!0},{path:"/add",name:"AddFood",component:()=>yu(()=>import("./AddFood.ed13d67b.js"),[])}],bC=Uw({history:ew(),routes:EC});var IC=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const TC={},SC={class:"w-full h-20 bg-gray-200 flex justify-around items-center"},CC=ln("button",{class:"p-2 cursor-pointer"},"Hinzuf\xFCgen",-1),AC=ln("button",{class:"p-2 cursor-pointer"},"Liste",-1);function kC(t,e){const n=Ic("router-link");return xn(),Ri("footer",SC,[je(n,{to:{name:"AddFood"}},{default:Ci(()=>[CC]),_:1}),je(n,{to:{name:"Home"}},{default:Ci(()=>[AC]),_:1})])}var RC=IC(TC,[["render",kC]]);const NC={class:"h-[calc(100vh-5rem)] overflow-y-scroll"},DC=Cr({__name:"App",setup(t){return(e,n)=>{const s=Ic("router-view");return xn(),Ri(ht,null,[ln("main",NC,[je(s)]),je(RC)],64)}}});Ov(DC).use(bC).mount("#app");export{ht as F,cC as K,MC as T,oC as U,jS as V,ln as a,At as b,Ri as c,Cr as d,Qy as e,Cc as f,Sr as g,bc as h,vC as i,je as j,Ci as k,Ic as l,Gy as m,vf as n,xn as o,OC as p,PC as q,Ay as r,Vl as t,Ks as u,xC as v,dC as w};
