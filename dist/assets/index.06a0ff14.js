const $v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};$v();function Tu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=Tu(jv);function Qf(t){return!!t||t===""}function Su(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?Hv(r):Su(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(qe(t))return t;if(Be(t))return t}}const Kv=/;(?![^(]*\))/g,zv=/:(.+)/;function Hv(t){const e={};return t.split(Kv).forEach(n=>{if(n){const r=n.split(zv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cu(t){let e="";if(qe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=Cu(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hh=t=>qe(t)?t:t==null?"":Y(t)||Be(t)&&(t.toString===Zf||!re(t.toString))?JSON.stringify(t,Xf,2):String(t),Xf=(t,e)=>e&&e.__v_isRef?Xf(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yf(e)?{[`Set(${e.size})`]:[...e.values()]}:Be(e)&&!Y(e)&&!ep(e)?String(e):e,Ie={},jr=[],Lt=()=>{},Gv=()=>!1,Wv=/^on[^a-z]/,sa=t=>Wv.test(t),Au=t=>t.startsWith("onUpdate:"),et=Object.assign,xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qv=Object.prototype.hasOwnProperty,ue=(t,e)=>Qv.call(t,e),Y=Array.isArray,qr=t=>ia(t)==="[object Map]",Yf=t=>ia(t)==="[object Set]",re=t=>typeof t=="function",qe=t=>typeof t=="string",ku=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Jf=t=>Be(t)&&re(t.then)&&re(t.catch),Zf=Object.prototype.toString,ia=t=>Zf.call(t),Xv=t=>ia(t).slice(8,-1),ep=t=>ia(t)==="[object Object]",Du=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,uo=Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yv=/-(\w)/g,Wt=oa(t=>t.replace(Yv,(e,n)=>n?n.toUpperCase():"")),Jv=/\B([A-Z])/g,ls=oa(t=>t.replace(Jv,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=oa(t=>t?`on${aa(t)}`:""),Ys=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dh;const Zv=()=>dh||(dh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let mt;class tp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mt&&(this.parent=mt,this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function np(t){return new tp(t)}function ew(t,e=mt){e&&e.active&&e.effects.push(t)}function tw(){return mt}function nw(t){mt&&mt.cleanups.push(t)}const Nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rp=t=>(t.w&Pn)>0,sp=t=>(t.n&Pn)>0,rw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},sw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];rp(s)&&!sp(s)?s.delete(t):e[n++]=s,s.w&=~Pn,s.n&=~Pn}e.length=n}},Sc=new WeakMap;let Ns=0,Pn=1;const Cc=30;let Ot;const cr=Symbol(""),Ac=Symbol("");class Ru{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ew(this,r)}run(){if(!this.active)return this.fn();let e=Ot,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,Cn=!0,Pn=1<<++Ns,Ns<=Cc?rw(this):fh(this),this.fn()}finally{Ns<=Cc&&sw(this),Pn=1<<--Ns,Ot=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(fh(this),this.onStop&&this.onStop(),this.active=!1)}}function fh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const ip=[];function hs(){ip.push(Cn),Cn=!1}function ds(){const t=ip.pop();Cn=t===void 0?!0:t}function Et(t,e,n){if(Cn&&Ot){let r=Sc.get(t);r||Sc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Nu()),op(s)}}function op(t,e){let n=!1;Ns<=Cc?sp(t)||(t.n|=Pn,n=!rp(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function an(t,e,n,r,s,i){const o=Sc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Du(n)&&a.push(o.get("length")):(a.push(o.get(cr)),qr(t)&&a.push(o.get(Ac)));break;case"delete":Y(t)||(a.push(o.get(cr)),qr(t)&&a.push(o.get(Ac)));break;case"set":qr(t)&&a.push(o.get(cr));break}if(a.length===1)a[0]&&xc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);xc(Nu(c))}}function xc(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&ph(r);for(const r of n)r.computed||ph(r)}function ph(t,e){(t!==Ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const iw=Tu("__proto__,__v_isRef,__isVue"),ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ku)),ow=Ou(),aw=Ou(!1,!0),cw=Ou(!0),gh=uw();function uw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const r=de(this)[e].apply(this,n);return ds(),r}}),t}function Ou(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Sw:dp:e?hp:lp).get(r))return r;const o=Y(r);if(!t&&o&&ue(gh,s))return Reflect.get(gh,s,i);const a=Reflect.get(r,s,i);return(ku(s)?ap.has(s):iw(s))||(t||Et(r,"get",s),e)?a:De(a)?o&&Du(s)?a:a.value:Be(a)?t?fp(a):fs(a):a}}const lw=cp(),hw=cp(!0);function cp(t=!1){return function(n,r,s,i){let o=n[r];if(Js(o)&&De(o)&&!De(s))return!1;if(!t&&!Js(s)&&(kc(s)||(s=de(s),o=de(o)),!Y(n)&&De(o)&&!De(s)))return o.value=s,!0;const a=Y(n)&&Du(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===de(i)&&(a?Ys(s,o)&&an(n,"set",r,s):an(n,"add",r,s)),c}}function dw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&an(t,"delete",e,void 0),r}function fw(t,e){const n=Reflect.has(t,e);return(!ku(e)||!ap.has(e))&&Et(t,"has",e),n}function pw(t){return Et(t,"iterate",Y(t)?"length":cr),Reflect.ownKeys(t)}const up={get:ow,set:lw,deleteProperty:dw,has:fw,ownKeys:pw},gw={get:cw,set(t,e){return!0},deleteProperty(t,e){return!0}},mw=et({},up,{get:aw,set:hw}),Pu=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Gi(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);n||(e!==i&&Et(s,"get",e),Et(s,"get",i));const{has:o}=ca(s),a=r?Pu:n?Fu:Zs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return e||(t!==s&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Qi(t,e=!1){return t=t.__v_raw,!e&&Et(de(t),"iterate",cr),Reflect.get(t,"size",t)}function mh(t){t=de(t);const e=de(this);return ca(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function yh(t,e){e=de(e);const n=de(this),{has:r,get:s}=ca(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ys(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function vh(t){const e=de(this),{has:n,get:r}=ca(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&an(e,"delete",t,void 0),i}function wh(){const t=de(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Xi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),c=e?Pu:t?Fu:Zs;return!t&&Et(a,"iterate",cr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Yi(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Pu:e?Fu:Zs;return!e&&Et(i,"iterate",c?Ac:cr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function yw(){const t={get(i){return Gi(this,i)},get size(){return Qi(this)},has:Wi,add:mh,set:yh,delete:vh,clear:wh,forEach:Xi(!1,!1)},e={get(i){return Gi(this,i,!1,!0)},get size(){return Qi(this)},has:Wi,add:mh,set:yh,delete:vh,clear:wh,forEach:Xi(!1,!0)},n={get(i){return Gi(this,i,!0)},get size(){return Qi(this,!0)},has(i){return Wi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Xi(!0,!1)},r={get(i){return Gi(this,i,!0,!0)},get size(){return Qi(this,!0)},has(i){return Wi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yi(i,!1,!1),n[i]=Yi(i,!0,!1),e[i]=Yi(i,!1,!0),r[i]=Yi(i,!0,!0)}),[t,n,e,r]}const[vw,ww,bw,Iw]=yw();function Mu(t,e){const n=e?t?Iw:bw:t?ww:vw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Ew={get:Mu(!1,!1)},_w={get:Mu(!1,!0)},Tw={get:Mu(!0,!1)},lp=new WeakMap,hp=new WeakMap,dp=new WeakMap,Sw=new WeakMap;function Cw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Aw(t){return t.__v_skip||!Object.isExtensible(t)?0:Cw(Xv(t))}function fs(t){return Js(t)?t:Lu(t,!1,up,Ew,lp)}function xw(t){return Lu(t,!1,mw,_w,hp)}function fp(t){return Lu(t,!0,gw,Tw,dp)}function Lu(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Aw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function An(t){return Js(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Js(t){return!!(t&&t.__v_isReadonly)}function kc(t){return!!(t&&t.__v_isShallow)}function pp(t){return An(t)||Js(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Qr(t){return Co(t,"__v_skip",!0),t}const Zs=t=>Be(t)?fs(t):t,Fu=t=>Be(t)?fp(t):t;function gp(t){Cn&&Ot&&(t=de(t),op(t.dep||(t.dep=Nu())))}function mp(t,e){t=de(t),t.dep&&xc(t.dep)}function De(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return yp(t,!1)}function kw(t){return yp(t,!0)}function yp(t,e){return De(t)?t:new Dw(t,e)}class Dw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Zs(e)}get value(){return gp(this),this._value}set value(e){e=this.__v_isShallow?e:de(e),Ys(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Zs(e),mp(this))}}function on(t){return De(t)?t.value:t}const Nw={get:(t,e,n)=>on(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vp(t){return An(t)?t:new Proxy(t,Nw)}function Rw(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Pw(t,n);return e}class Ow{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Pw(t,e,n){const r=t[e];return De(r)?r:new Ow(t,e,n)}class Mw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ru(e,()=>{this._dirty||(this._dirty=!0,mp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return gp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lw(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new Mw(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ua(i,e,n)}return s}function kt(t,e,n,r){if(re(t)){const i=xn(t,e,n,r);return i&&Jf(i)&&i.catch(o=>{ua(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function ua(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}Fw(t,n,s,r)}function Fw(t,e,n,r=!0){console.error(t)}let Ao=!1,Dc=!1;const vt=[];let en=0;const Ls=[];let Rs=null,Mr=0;const Fs=[];let yn=null,Lr=0;const wp=Promise.resolve();let Vu=null,Nc=null;function Uu(t){const e=Vu||wp;return t?e.then(this?t.bind(this):t):e}function Vw(t){let e=en+1,n=vt.length;for(;e<n;){const r=e+n>>>1;ei(vt[r])<t?e=r+1:n=r}return e}function bp(t){(!vt.length||!vt.includes(t,Ao&&t.allowRecurse?en+1:en))&&t!==Nc&&(t.id==null?vt.push(t):vt.splice(Vw(t.id),0,t),Ip())}function Ip(){!Ao&&!Dc&&(Dc=!0,Vu=wp.then(Tp))}function Uw(t){const e=vt.indexOf(t);e>en&&vt.splice(e,1)}function Ep(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ip()}function Bw(t){Ep(t,Rs,Ls,Mr)}function $w(t){Ep(t,yn,Fs,Lr)}function la(t,e=null){if(Ls.length){for(Nc=e,Rs=[...new Set(Ls)],Ls.length=0,Mr=0;Mr<Rs.length;Mr++)Rs[Mr]();Rs=null,Mr=0,Nc=null,la(t,e)}}function _p(t){if(la(),Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((n,r)=>ei(n)-ei(r)),Lr=0;Lr<yn.length;Lr++)yn[Lr]();yn=null,Lr=0}}const ei=t=>t.id==null?1/0:t.id;function Tp(t){Dc=!1,Ao=!0,la(t),vt.sort((n,r)=>ei(n)-ei(r));const e=Lt;try{for(en=0;en<vt.length;en++){const n=vt[en];n&&n.active!==!1&&xn(n,null,14)}}finally{en=0,vt.length=0,_p(),Ao=!1,Vu=null,(vt.length||Ls.length||Fs.length)&&Tp(t)}}function jw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ie;d&&(s=n.map(p=>p.trim())),h&&(s=n.map(Tc))}let a,c=r[a=Xa(e)]||r[a=Xa(Wt(e))];!c&&i&&(c=r[a=Xa(ls(e))]),c&&kt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(u,t,6,s)}}function Sp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=u=>{const l=Sp(u,e,!0);l&&(a=!0,et(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):et(o,i),r.set(t,o),o)}function ha(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,ls(e))||ue(t,e))}let Je=null,Cp=null;function xo(t){const e=Je;return Je=t,Cp=t&&t.type.__scopeId||null,e}function ti(t,e=Je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dh(-1);const i=xo(e),o=t(...s);return xo(i),r._d&&Dh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ya(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:I}=t;let w,S;const O=xo(t);try{if(n.shapeFlag&4){const K=s||r;w=jt(l.call(K,K,h,i,p,d,m)),S=c}else{const K=e;w=jt(K.length>1?K(i,{attrs:c,slots:a,emit:u}):K(i,null)),S=e.props?c:qw(c)}}catch(K){Us.length=0,ua(K,t,1),w=Ue(Dt)}let V=w;if(S&&I!==!1){const K=Object.keys(S),{shapeFlag:q}=V;K.length&&q&7&&(o&&K.some(Au)&&(S=Kw(S,o)),V=Mn(V,S))}return n.dirs&&(V=Mn(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),w=V,xo(O),w}const qw=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},Kw=(t,e)=>{const n={};for(const r in t)(!Au(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!ha(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bh(r,o,u):!0:!!o;return!1}function bh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function Hw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gw=t=>t.__isSuspense;function Ww(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):$w(t)}function ho(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=je||Je;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r.proxy):e}}const Ih={};function Kr(t,e,n){return Ap(t,e,n)}function Ap(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const a=je;let c,u=!1,l=!1;if(De(t)?(c=()=>t.value,u=kc(t)):An(t)?(c=()=>t,r=!0):Y(t)?(l=!0,u=t.some(S=>An(S)||kc(S)),c=()=>t.map(S=>{if(De(S))return S.value;if(An(S))return sr(S);if(re(S))return xn(S,a,2)})):re(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(t,a,3,[d])}:c=Lt,e&&r){const S=c;c=()=>sr(S())}let h,d=S=>{h=w.onStop=()=>{xn(S,a,4)}};if(ri)return d=Lt,e?n&&kt(e,a,3,[c(),l?[]:void 0,d]):c(),Lt;let p=l?[]:Ih;const m=()=>{if(!!w.active)if(e){const S=w.run();(r||u||(l?S.some((O,V)=>Ys(O,p[V])):Ys(S,p)))&&(h&&h(),kt(e,a,3,[S,p===Ih?void 0:p,d]),p=S)}else w.run()};m.allowRecurse=!!e;let I;s==="sync"?I=m:s==="post"?I=()=>ct(m,a&&a.suspense):I=()=>Bw(m);const w=new Ru(c,I);return e?n?m():p=w.run():s==="post"?ct(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&xu(a.scope.effects,w)}}function Qw(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?xp(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=je;Jr(this);const a=Ap(s,i.bind(r),n);return o?Jr(o):ur(),a}function xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function sr(t,e){if(!Be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))sr(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)sr(t[n],e);else if(Yf(t)||qr(t))t.forEach(n=>{sr(n,e)});else if(ep(t))for(const n in t)sr(t[n],e);return t}function Xw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bu(()=>{t.isMounted=!0}),Rp(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],Yw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},setup(t,{slots:e}){const n=Hu(),r=Xw();let s;return()=>{const i=e.default&&Dp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==Dt){o=I;break}}const a=de(t),{mode:c}=a;if(r.isLeaving)return Ja(o);const u=Eh(o);if(!u)return Ja(o);const l=Rc(u,a,r,n);Oc(u,l);const h=n.subTree,d=h&&Eh(h);let p=!1;const{getTransitionKey:m}=u.type;if(m){const I=m();s===void 0?s=I:I!==s&&(s=I,p=!0)}if(d&&d.type!==Dt&&(!Jn(u,d)||p)){const I=Rc(d,a,r,n);if(Oc(d,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update()},Ja(o);c==="in-out"&&u.type!==Dt&&(I.delayLeave=(w,S,O)=>{const V=kp(r,d);V[String(d.key)]=d,w._leaveCb=()=>{S(),w._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=O})}return o}}},Jw=Yw;function kp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:I,onAppear:w,onAfterAppear:S,onAppearCancelled:O}=e,V=String(t.key),K=kp(n,t),q=(L,ie)=>{L&&kt(L,r,9,ie)},W=(L,ie)=>{const fe=ie[1];q(L,ie),Y(L)?L.every(Ce=>Ce.length<=1)&&fe():L.length<=1&&fe()},z={mode:i,persisted:o,beforeEnter(L){let ie=a;if(!n.isMounted)if(s)ie=I||a;else return;L._leaveCb&&L._leaveCb(!0);const fe=K[V];fe&&Jn(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),q(ie,[L])},enter(L){let ie=c,fe=u,Ce=l;if(!n.isMounted)if(s)ie=w||c,fe=S||u,Ce=O||l;else return;let Le=!1;const ft=L._enterCb=at=>{Le||(Le=!0,at?q(Ce,[L]):q(fe,[L]),z.delayedLeave&&z.delayedLeave(),L._enterCb=void 0)};ie?W(ie,[L,ft]):ft()},leave(L,ie){const fe=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return ie();q(h,[L]);let Ce=!1;const Le=L._leaveCb=ft=>{Ce||(Ce=!0,ie(),ft?q(m,[L]):q(p,[L]),L._leaveCb=void 0,K[fe]===t&&delete K[fe])};K[fe]=t,d?W(d,[L,Le]):Le()},clone(L){return Rc(L,e,n,r)}};return z}function Ja(t){if(da(t))return t=Mn(t),t.children=null,t}function Eh(t){return da(t)?t.children?t.children[0]:void 0:t}function Oc(t,e){t.shapeFlag&6&&t.component?Oc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(Dp(o.children,e,a))):(e||o.type!==Dt)&&r.push(a!=null?Mn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _i(t){return re(t)?{setup:t,name:t.name}:t}const Vs=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function Zw(t,e){Np(t,"a",e)}function eb(t,e){Np(t,"da",e)}function Np(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)da(s.parent.vnode)&&tb(r,e,n,s),s=s.parent}}function tb(t,e,n,r){const s=fa(e,t,r,!0);$u(()=>{xu(r[e],s)},n)}function fa(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),Jr(n);const a=kt(e,n,t,o);return ur(),ds(),a});return r?s.unshift(i):s.push(i),i}}const hn=t=>(e,n=je)=>(!ri||t==="sp")&&fa(t,e,n),nb=hn("bm"),Bu=hn("m"),rb=hn("bu"),sb=hn("u"),Rp=hn("bum"),$u=hn("um"),ib=hn("sp"),ob=hn("rtg"),ab=hn("rtc");function cb(t,e=je){fa("ec",t,e)}function Zk(t,e){const n=Je;if(n===null)return t;const r=ga(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ie]=e[i];re(o)&&(o={mounted:o,updated:o}),o.deep&&sr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function zn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hs(),kt(c,n,8,[t.el,a,t,e]),ds())}}const Op="components";function ju(t,e){return lb(Op,t,!0,e)||t}const ub=Symbol();function lb(t,e,n=!0,r=!1){const s=Je||je;if(s){const i=s.type;if(t===Op){const a=qb(i,!1);if(a&&(a===e||a===Wt(e)||a===aa(Wt(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[Wt(e)]||t[aa(Wt(e))])}function hb(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||qe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function db(t,e,n={},r,s){if(Je.isCE||Je.parent&&Vs(Je.parent)&&Je.parent.isCE)return Ue("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),At();const o=i&&Pp(i(n)),a=Yr(lt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Pp(t){return t.some(e=>No(e)?!(e.type===Dt||e.type===lt&&!Pp(e.children)):!0)?t:null}const Pc=t=>t?Hp(t)?ga(t)||t.proxy:Pc(t.parent):null,ko=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pc(t.parent),$root:t=>Pc(t.root),$emit:t=>t.emit,$options:t=>Lp(t),$forceUpdate:t=>t.f||(t.f=()=>bp(t.update)),$nextTick:t=>t.n||(t.n=Uu.bind(t.proxy)),$watch:t=>Qw.bind(t)}),fb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ie&&ue(r,e))return o[e]=1,r[e];if(s!==Ie&&ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ue(u,e))return o[e]=3,i[e];if(n!==Ie&&ue(n,e))return o[e]=4,n[e];Mc&&(o[e]=0)}}const l=ko[e];let h,d;if(l)return e==="$attrs"&&Et(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ue(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ie&&ue(s,e)?(s[e]=n,!0):r!==Ie&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ue(t,o)||e!==Ie&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(ko,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Mc=!0;function pb(t){const e=Lp(t),n=t.proxy,r=t.ctx;Mc=!1,e.beforeCreate&&Th(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:I,deactivated:w,beforeDestroy:S,beforeUnmount:O,destroyed:V,unmounted:K,render:q,renderTracked:W,renderTriggered:z,errorCaptured:L,serverPrefetch:ie,expose:fe,inheritAttrs:Ce,components:Le,directives:ft,filters:at}=e;if(u&&gb(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const me=o[Ee];re(me)&&(r[Ee]=me.bind(n))}if(s){const Ee=s.call(n,n);Be(Ee)&&(t.data=fs(Ee))}if(Mc=!0,i)for(const Ee in i){const me=i[Ee],pt=re(me)?me.bind(n,n):re(me.get)?me.get.bind(n,n):Lt,xr=!re(me)&&re(me.set)?me.set.bind(n):Lt,Jt=Pt({get:pt,set:xr});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Ut=>Jt.value=Ut})}if(a)for(const Ee in a)Mp(a[Ee],r,n,Ee);if(c){const Ee=re(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(me=>{ho(me,Ee[me])})}l&&Th(l,t,"c");function Ve(Ee,me){Y(me)?me.forEach(pt=>Ee(pt.bind(n))):me&&Ee(me.bind(n))}if(Ve(nb,h),Ve(Bu,d),Ve(rb,p),Ve(sb,m),Ve(Zw,I),Ve(eb,w),Ve(cb,L),Ve(ab,W),Ve(ob,z),Ve(Rp,O),Ve($u,K),Ve(ib,ie),Y(fe))if(fe.length){const Ee=t.exposed||(t.exposed={});fe.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>n[me],set:pt=>n[me]=pt})})}else t.exposed||(t.exposed={});q&&t.render===Lt&&(t.render=q),Ce!=null&&(t.inheritAttrs=Ce),Le&&(t.components=Le),ft&&(t.directives=ft)}function gb(t,e,n=Lt,r=!1){Y(t)&&(t=Lc(t));for(const s in t){const i=t[s];let o;Be(i)?"default"in i?o=Ft(i.from||s,i.default,!0):o=Ft(i.from||s):o=Ft(i),De(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Th(t,e,n){kt(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mp(t,e,n,r){const s=r.includes(".")?xp(n,r):()=>n[r];if(qe(t)){const i=e[t];re(i)&&Kr(s,i)}else if(re(t))Kr(s,t.bind(n));else if(Be(t))if(Y(t))t.forEach(i=>Mp(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Kr(s,i,t)}}function Lp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Do(c,u,o,!0)),Do(c,e,o)),i.set(e,c),c}function Do(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Do(t,i,n,!0),s&&s.forEach(o=>Do(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mb={data:Sh,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Qn,directives:Qn,watch:vb,provide:Sh,inject:yb};function Sh(t,e){return e?t?function(){return et(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function yb(t,e){return Qn(Lc(t),Lc(e))}function Lc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?et(et(Object.create(null),t),e):e}function vb(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=tt(t[r],e[r]);return n}function wb(t,e,n,r=!1){const s={},i={};Co(i,pa,1),t.propsDefaults=Object.create(null),Fp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ha(t.emitsOptions,d))continue;const p=e[d];if(c)if(ue(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const m=Wt(d);s[m]=Fc(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Fp(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!ue(e,h)&&((l=ls(h))===h||!ue(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Fc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],u=!0)}u&&an(t,"set","$attrs")}function Fp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(uo(c))continue;const u=e[c];let l;s&&ue(s,l=Wt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ha(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=de(n),u=a||Ie;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Fc(s,c,h,u[h],t,!ue(u,h))}}return o}function Fc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Jr(s),r=u[n]=c.call(null,e),ur())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function Vp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const l=h=>{c=!0;const[d,p]=Vp(h,e,!0);et(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,jr),jr;if(Y(i))for(let l=0;l<i.length;l++){const h=Wt(i[l]);Ch(h)&&(o[h]=Ie)}else if(i)for(const l in i){const h=Wt(l);if(Ch(h)){const d=i[l],p=o[h]=Y(d)||re(d)?{type:d}:d;if(p){const m=kh(Boolean,p.type),I=kh(String,p.type);p[0]=m>-1,p[1]=I<0||m<I,(m>-1||ue(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function Ch(t){return t[0]!=="$"}function Ah(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xh(t,e){return Ah(t)===Ah(e)}function kh(t,e){return Y(e)?e.findIndex(n=>xh(n,t)):re(e)&&xh(e,t)?0:-1}const Up=t=>t[0]==="_"||t==="$stable",qu=t=>Y(t)?t.map(jt):[jt(t)],Ib=(t,e,n)=>{if(e._n)return e;const r=ti((...s)=>qu(e(...s)),n);return r._c=!1,r},Bp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Up(s))continue;const i=t[s];if(re(i))e[s]=Ib(s,i,r);else if(i!=null){const o=qu(i);e[s]=()=>o}}},$p=(t,e)=>{const n=qu(e);t.slots.default=()=>n},Eb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Co(e,"_",n)):Bp(e,t.slots={})}else t.slots={},e&&$p(t,e);Co(t.slots,pa,1)},_b=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Bp(e,s)),o=e}else e&&($p(t,e),o={default:1});if(i)for(const a in s)!Up(a)&&!(a in o)&&delete s[a]};function jp(){return{app:null,config:{isNativeTag:Gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function Sb(t,e){return function(r,s=null){re(r)||(r=Object.assign({},r)),s!=null&&!Be(s)&&(s=null);const i=jp(),o=new Set;let a=!1;const c=i.app={_uid:Tb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zb,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&re(u.install)?(o.add(u),u.install(c,...l)):re(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ue(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,ga(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Vc(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,p)=>Vc(d,e&&(Y(e)?e[p]:e),n,r,s));return}if(Vs(r)&&!s)return;const i=r.shapeFlag&4?ga(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(qe(u)?(l[u]=null,ue(h,u)&&(h[u]=null)):De(u)&&(u.value=null)),re(c))xn(c,a,12,[o,l]);else{const d=qe(c),p=De(c);if(d||p){const m=()=>{if(t.f){const I=d?l[c]:c.value;s?Y(I)&&xu(I,i):Y(I)?I.includes(i)||I.push(i):d?(l[c]=[i],ue(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ue(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,ct(m,n)):m()}}}const ct=Ww;function Cb(t){return Ab(t)}function Ab(t,e){const n=Zv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=Lt,cloneNode:m,insertStaticContent:I}=t,w=(f,g,v,T=null,_=null,k=null,P=!1,x=null,D=!!g.dynamicChildren)=>{if(f===g)return;f&&!Jn(f,g)&&(T=j(f),St(f,_,k,!0),f=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:C,ref:H,shapeFlag:U}=g;switch(C){case Ku:S(f,g,v,T);break;case Dt:O(f,g,v,T);break;case fo:f==null&&V(g,v,T,P);break;case lt:ft(f,g,v,T,_,k,P,x,D);break;default:U&1?W(f,g,v,T,_,k,P,x,D):U&6?at(f,g,v,T,_,k,P,x,D):(U&64||U&128)&&C.process(f,g,v,T,_,k,P,x,D,_e)}H!=null&&_&&Vc(H,f&&f.ref,k,g||f,!g)},S=(f,g,v,T)=>{if(f==null)r(g.el=a(g.children),v,T);else{const _=g.el=f.el;g.children!==f.children&&u(_,g.children)}},O=(f,g,v,T)=>{f==null?r(g.el=c(g.children||""),v,T):g.el=f.el},V=(f,g,v,T)=>{[f.el,f.anchor]=I(f.children,g,v,T,f.el,f.anchor)},K=({el:f,anchor:g},v,T)=>{let _;for(;f&&f!==g;)_=d(f),r(f,v,T),f=_;r(g,v,T)},q=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=d(f),s(f),f=v;s(g)},W=(f,g,v,T,_,k,P,x,D)=>{P=P||g.type==="svg",f==null?z(g,v,T,_,k,P,x,D):fe(f,g,_,k,P,x,D)},z=(f,g,v,T,_,k,P,x)=>{let D,C;const{type:H,props:U,shapeFlag:G,transition:J,patchFlag:le,dirs:ve}=f;if(f.el&&m!==void 0&&le===-1)D=f.el=m(f.el);else{if(D=f.el=o(f.type,k,U&&U.is,U),G&8?l(D,f.children):G&16&&ie(f.children,D,null,T,_,k&&H!=="foreignObject",P,x),ve&&zn(f,null,T,"created"),U){for(const Te in U)Te!=="value"&&!uo(Te)&&i(D,Te,null,U[Te],k,f.children,T,_,N);"value"in U&&i(D,"value",null,U.value),(C=U.onVnodeBeforeMount)&&$t(C,T,f)}L(D,f,f.scopeId,P,T)}ve&&zn(f,null,T,"beforeMount");const we=(!_||_&&!_.pendingBranch)&&J&&!J.persisted;we&&J.beforeEnter(D),r(D,g,v),((C=U&&U.onVnodeMounted)||we||ve)&&ct(()=>{C&&$t(C,T,f),we&&J.enter(D),ve&&zn(f,null,T,"mounted")},_)},L=(f,g,v,T,_)=>{if(v&&p(f,v),T)for(let k=0;k<T.length;k++)p(f,T[k]);if(_){let k=_.subTree;if(g===k){const P=_.vnode;L(f,P,P.scopeId,P.slotScopeIds,_.parent)}}},ie=(f,g,v,T,_,k,P,x,D=0)=>{for(let C=D;C<f.length;C++){const H=f[C]=x?vn(f[C]):jt(f[C]);w(null,H,g,v,T,_,k,P,x)}},fe=(f,g,v,T,_,k,P)=>{const x=g.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:H}=g;D|=f.patchFlag&16;const U=f.props||Ie,G=g.props||Ie;let J;v&&Hn(v,!1),(J=G.onVnodeBeforeUpdate)&&$t(J,v,g,f),H&&zn(g,f,v,"beforeUpdate"),v&&Hn(v,!0);const le=_&&g.type!=="foreignObject";if(C?Ce(f.dynamicChildren,C,x,v,T,le,k):P||pt(f,g,x,null,v,T,le,k,!1),D>0){if(D&16)Le(x,g,U,G,v,T,_);else if(D&2&&U.class!==G.class&&i(x,"class",null,G.class,_),D&4&&i(x,"style",U.style,G.style,_),D&8){const ve=g.dynamicProps;for(let we=0;we<ve.length;we++){const Te=ve[we],Rt=U[Te],kr=G[Te];(kr!==Rt||Te==="value")&&i(x,Te,Rt,kr,_,f.children,v,T,N)}}D&1&&f.children!==g.children&&l(x,g.children)}else!P&&C==null&&Le(x,g,U,G,v,T,_);((J=G.onVnodeUpdated)||H)&&ct(()=>{J&&$t(J,v,g,f),H&&zn(g,f,v,"updated")},T)},Ce=(f,g,v,T,_,k,P)=>{for(let x=0;x<g.length;x++){const D=f[x],C=g[x],H=D.el&&(D.type===lt||!Jn(D,C)||D.shapeFlag&70)?h(D.el):v;w(D,C,H,null,T,_,k,P,!0)}},Le=(f,g,v,T,_,k,P)=>{if(v!==T){for(const x in T){if(uo(x))continue;const D=T[x],C=v[x];D!==C&&x!=="value"&&i(f,x,C,D,P,g.children,_,k,N)}if(v!==Ie)for(const x in v)!uo(x)&&!(x in T)&&i(f,x,v[x],null,P,g.children,_,k,N);"value"in T&&i(f,"value",v.value,T.value)}},ft=(f,g,v,T,_,k,P,x,D)=>{const C=g.el=f?f.el:a(""),H=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:G,slotScopeIds:J}=g;J&&(x=x?x.concat(J):J),f==null?(r(C,v,T),r(H,v,T),ie(g.children,v,H,_,k,P,x,D)):U>0&&U&64&&G&&f.dynamicChildren?(Ce(f.dynamicChildren,G,v,_,k,P,x),(g.key!=null||_&&g===_.subTree)&&qp(f,g,!0)):pt(f,g,v,H,_,k,P,x,D)},at=(f,g,v,T,_,k,P,x,D)=>{g.slotScopeIds=x,f==null?g.shapeFlag&512?_.ctx.activate(g,v,T,P,D):Fe(g,v,T,_,k,P,D):Ve(f,g,D)},Fe=(f,g,v,T,_,k,P)=>{const x=f.component=Vb(f,T,_);if(da(f)&&(x.ctx.renderer=_e),Ub(x),x.asyncDep){if(_&&_.registerDep(x,Ee),!f.el){const D=x.subTree=Ue(Dt);O(null,D,g,v)}return}Ee(x,f,g,v,_,k,P)},Ve=(f,g,v)=>{const T=g.component=f.component;if(zw(f,g,v))if(T.asyncDep&&!T.asyncResolved){me(T,g,v);return}else T.next=g,Uw(T.update),T.update();else g.el=f.el,T.vnode=g},Ee=(f,g,v,T,_,k,P)=>{const x=()=>{if(f.isMounted){let{next:H,bu:U,u:G,parent:J,vnode:le}=f,ve=H,we;Hn(f,!1),H?(H.el=le.el,me(f,H,P)):H=le,U&&lo(U),(we=H.props&&H.props.onVnodeBeforeUpdate)&&$t(we,J,H,le),Hn(f,!0);const Te=Ya(f),Rt=f.subTree;f.subTree=Te,w(Rt,Te,h(Rt.el),j(Rt),f,_,k),H.el=Te.el,ve===null&&Hw(f,Te.el),G&&ct(G,_),(we=H.props&&H.props.onVnodeUpdated)&&ct(()=>$t(we,J,H,le),_)}else{let H;const{el:U,props:G}=g,{bm:J,m:le,parent:ve}=f,we=Vs(g);if(Hn(f,!1),J&&lo(J),!we&&(H=G&&G.onVnodeBeforeMount)&&$t(H,ve,g),Hn(f,!0),U&&se){const Te=()=>{f.subTree=Ya(f),se(U,f.subTree,f,_,null)};we?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=Ya(f);w(null,Te,v,T,f,_,k),g.el=Te.el}if(le&&ct(le,_),!we&&(H=G&&G.onVnodeMounted)){const Te=g;ct(()=>$t(H,ve,Te),_)}(g.shapeFlag&256||ve&&Vs(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&ct(f.a,_),f.isMounted=!0,g=v=T=null}},D=f.effect=new Ru(x,()=>bp(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,Hn(f,!0),C()},me=(f,g,v)=>{g.component=f;const T=f.vnode.props;f.vnode=g,f.next=null,bb(f,g.props,T,v),_b(f,g.children,v),hs(),la(void 0,f.update),ds()},pt=(f,g,v,T,_,k,P,x,D=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,U=g.children,{patchFlag:G,shapeFlag:J}=g;if(G>0){if(G&128){Jt(C,U,v,T,_,k,P,x,D);return}else if(G&256){xr(C,U,v,T,_,k,P,x,D);return}}J&8?(H&16&&N(C,_,k),U!==C&&l(v,U)):H&16?J&16?Jt(C,U,v,T,_,k,P,x,D):N(C,_,k,!0):(H&8&&l(v,""),J&16&&ie(U,v,T,_,k,P,x,D))},xr=(f,g,v,T,_,k,P,x,D)=>{f=f||jr,g=g||jr;const C=f.length,H=g.length,U=Math.min(C,H);let G;for(G=0;G<U;G++){const J=g[G]=D?vn(g[G]):jt(g[G]);w(f[G],J,v,null,_,k,P,x,D)}C>H?N(f,_,k,!0,!1,U):ie(g,v,T,_,k,P,x,D,U)},Jt=(f,g,v,T,_,k,P,x,D)=>{let C=0;const H=g.length;let U=f.length-1,G=H-1;for(;C<=U&&C<=G;){const J=f[C],le=g[C]=D?vn(g[C]):jt(g[C]);if(Jn(J,le))w(J,le,v,null,_,k,P,x,D);else break;C++}for(;C<=U&&C<=G;){const J=f[U],le=g[G]=D?vn(g[G]):jt(g[G]);if(Jn(J,le))w(J,le,v,null,_,k,P,x,D);else break;U--,G--}if(C>U){if(C<=G){const J=G+1,le=J<H?g[J].el:T;for(;C<=G;)w(null,g[C]=D?vn(g[C]):jt(g[C]),v,le,_,k,P,x,D),C++}}else if(C>G)for(;C<=U;)St(f[C],_,k,!0),C++;else{const J=C,le=C,ve=new Map;for(C=le;C<=G;C++){const gt=g[C]=D?vn(g[C]):jt(g[C]);gt.key!=null&&ve.set(gt.key,C)}let we,Te=0;const Rt=G-le+1;let kr=!1,ch=0;const Es=new Array(Rt);for(C=0;C<Rt;C++)Es[C]=0;for(C=J;C<=U;C++){const gt=f[C];if(Te>=Rt){St(gt,_,k,!0);continue}let Bt;if(gt.key!=null)Bt=ve.get(gt.key);else for(we=le;we<=G;we++)if(Es[we-le]===0&&Jn(gt,g[we])){Bt=we;break}Bt===void 0?St(gt,_,k,!0):(Es[Bt-le]=C+1,Bt>=ch?ch=Bt:kr=!0,w(gt,g[Bt],v,null,_,k,P,x,D),Te++)}const uh=kr?xb(Es):jr;for(we=uh.length-1,C=Rt-1;C>=0;C--){const gt=le+C,Bt=g[gt],lh=gt+1<H?g[gt+1].el:T;Es[C]===0?w(null,Bt,v,lh,_,k,P,x,D):kr&&(we<0||C!==uh[we]?Ut(Bt,v,lh,2):we--)}}},Ut=(f,g,v,T,_=null)=>{const{el:k,type:P,transition:x,children:D,shapeFlag:C}=f;if(C&6){Ut(f.component.subTree,g,v,T);return}if(C&128){f.suspense.move(g,v,T);return}if(C&64){P.move(f,g,v,_e);return}if(P===lt){r(k,g,v);for(let U=0;U<D.length;U++)Ut(D[U],g,v,T);r(f.anchor,g,v);return}if(P===fo){K(f,g,v);return}if(T!==2&&C&1&&x)if(T===0)x.beforeEnter(k),r(k,g,v),ct(()=>x.enter(k),_);else{const{leave:U,delayLeave:G,afterLeave:J}=x,le=()=>r(k,g,v),ve=()=>{U(k,()=>{le(),J&&J()})};G?G(k,le,ve):ve()}else r(k,g,v)},St=(f,g,v,T=!1,_=!1)=>{const{type:k,props:P,ref:x,children:D,dynamicChildren:C,shapeFlag:H,patchFlag:U,dirs:G}=f;if(x!=null&&Vc(x,null,v,f,!0),H&256){g.ctx.deactivate(f);return}const J=H&1&&G,le=!Vs(f);let ve;if(le&&(ve=P&&P.onVnodeBeforeUnmount)&&$t(ve,g,f),H&6)B(f.component,v,T);else{if(H&128){f.suspense.unmount(v,T);return}J&&zn(f,null,g,"beforeUnmount"),H&64?f.type.remove(f,g,v,_,_e,T):C&&(k!==lt||U>0&&U&64)?N(C,g,v,!1,!0):(k===lt&&U&384||!_&&H&16)&&N(D,g,v),T&&Qa(f)}(le&&(ve=P&&P.onVnodeUnmounted)||J)&&ct(()=>{ve&&$t(ve,g,f),J&&zn(f,null,g,"unmounted")},v)},Qa=f=>{const{type:g,el:v,anchor:T,transition:_}=f;if(g===lt){E(v,T);return}if(g===fo){q(f);return}const k=()=>{s(v),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:x}=_,D=()=>P(v,k);x?x(f.el,k,D):D()}else k()},E=(f,g)=>{let v;for(;f!==g;)v=d(f),s(f),f=v;s(g)},B=(f,g,v)=>{const{bum:T,scope:_,update:k,subTree:P,um:x}=f;T&&lo(T),_.stop(),k&&(k.active=!1,St(P,f,g,v)),x&&ct(x,g),ct(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(f,g,v,T=!1,_=!1,k=0)=>{for(let P=k;P<f.length;P++)St(f[P],g,v,T,_)},j=f=>f.shapeFlag&6?j(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ye=(f,g,v)=>{f==null?g._vnode&&St(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,v),_p(),g._vnode=f},_e={p:w,um:St,m:Ut,r:Qa,mt:Fe,mc:ie,pc:pt,pbc:Ce,n:j,o:t};let ae,se;return e&&([ae,se]=e(_e)),{render:ye,hydrate:ae,createApp:Sb(ye,ae)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qp(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=vn(s[i]),a.el=o.el),n||qp(o,a))}}function xb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const kb=t=>t.__isTeleport,lt=Symbol(void 0),Ku=Symbol(void 0),Dt=Symbol(void 0),fo=Symbol(void 0),Us=[];let Mt=null;function At(t=!1){Us.push(Mt=t?null:[])}function Db(){Us.pop(),Mt=Us[Us.length-1]||null}let ni=1;function Dh(t){ni+=t}function Kp(t){return t.dynamicChildren=ni>0?Mt||jr:null,Db(),ni>0&&Mt&&Mt.push(t),t}function Xr(t,e,n,r,s,i){return Kp(kn(t,e,n,r,s,i,!0))}function Yr(t,e,n,r,s){return Kp(Ue(t,e,n,r,s,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const pa="__vInternal",zp=({key:t})=>t!=null?t:null,po=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||De(t)||re(t)?{i:Je,r:t,k:e,f:!!n}:t:null;function kn(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zp(e),ref:e&&po(e),scopeId:Cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(zu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ni>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const Ue=Nb;function Nb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ub)&&(t=Dt),No(t)){const a=Mn(t,e,!0);return n&&zu(a,n),ni>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(Kb(t)&&(t=t.__vccOpts),e){e=Rb(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Cu(a)),Be(c)&&(pp(c)&&!Y(c)&&(c=et({},c)),e.style=Su(c))}const o=qe(t)?1:Gw(t)?128:kb(t)?64:Be(t)?4:re(t)?2:0;return kn(t,e,n,r,s,o,i,!0)}function Rb(t){return t?pp(t)||pa in t?et({},t):t:null}function Mn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Mb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zp(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ob(t=" ",e=0){return Ue(Ku,null,t,e)}function eD(t,e){const n=Ue(fo,null,t);return n.staticCount=e,n}function Pb(t="",e=!1){return e?(At(),Yr(Dt,null,t)):Ue(Dt,null,t)}function jt(t){return t==null||typeof t=="boolean"?Ue(Dt):Y(t)?Ue(lt,null,t.slice()):typeof t=="object"?vn(t):Ue(Ku,null,String(t))}function vn(t){return t.el===null||t.memo?t:Mn(t)}function zu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(pa in e)?e._ctx=Je:s===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),r&64?(n=16,e=[Ob(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cu([e.class,r.class]));else if(s==="style")e.style=Su([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){kt(t,e,7,[n,r])}const Lb=jp();let Fb=0;function Vb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Lb,i={uid:Fb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:Sp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jw.bind(null,i),t.ce&&t.ce(i),i}let je=null;const Hu=()=>je||Je,Jr=t=>{je=t,t.scope.on()},ur=()=>{je&&je.scope.off(),je=null};function Hp(t){return t.vnode.shapeFlag&4}let ri=!1;function Ub(t,e=!1){ri=e;const{props:n,children:r}=t.vnode,s=Hp(t);wb(t,n,s,e),Eb(t,r);const i=s?Bb(t,e):void 0;return ri=!1,i}function Bb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qr(new Proxy(t.ctx,fb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?jb(t):null;Jr(t),hs();const i=xn(r,t,0,[t.props,s]);if(ds(),ur(),Jf(i)){if(i.then(ur,ur),e)return i.then(o=>{Nh(t,o,e)}).catch(o=>{ua(o,t,0)});t.asyncDep=i}else Nh(t,i,e)}else Gp(t,e)}function Nh(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=vp(e)),Gp(t,n)}let Rh;function Gp(t,e,n){const r=t.type;if(!t.render){if(!e&&Rh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=et(et({isCustomElement:i,delimiters:a},o),c);r.render=Rh(s,u)}}t.render=r.render||Lt}Jr(t),hs(),pb(t),ds(),ur()}function $b(t){return new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}})}function jb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=$b(t))},slots:t.slots,emit:t.emit,expose:e}}function ga(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vp(Qr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ko)return ko[n](t)}}))}function qb(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function Kb(t){return re(t)&&"__vccOpts"in t}const Pt=(t,e)=>Lw(t,e,ri);function Wp(t,e,n){const r=arguments.length;return r===2?Be(e)&&!Y(e)?No(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&No(n)&&(n=[n]),Ue(t,e,n))}const zb="3.2.37",Hb="http://www.w3.org/2000/svg",Zn=typeof document!="undefined"?document:null,Oh=Zn&&Zn.createElement("template"),Gb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Zn.createElementNS(Hb,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Wb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Qb(t,e,n){const r=t.style,s=qe(n);if(n&&!s){for(const i in n)Uc(r,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&Uc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ph=/\s*!important$/;function Uc(t,e,n){if(Y(n))n.forEach(r=>Uc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xb(t,e);Ph.test(n)?t.setProperty(ls(r),n.replace(Ph,""),"important"):t[r]=n}}const Mh=["Webkit","Moz","ms"],Za={};function Xb(t,e){const n=Za[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Za[e]=r;r=aa(r);for(let s=0;s<Mh.length;s++){const i=Mh[s]+r;if(i in t)return Za[e]=i}return e}const Lh="http://www.w3.org/1999/xlink";function Yb(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lh,e.slice(6,e.length)):t.setAttributeNS(Lh,e,n);else{const i=qv(e);n==null||i&&!Qf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Jb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Qf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Qp,Zb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Bc=0;const e0=Promise.resolve(),t0=()=>{Bc=0},n0=()=>Bc||(e0.then(t0),Bc=Qp());function Fr(t,e,n,r){t.addEventListener(e,n,r)}function r0(t,e,n,r){t.removeEventListener(e,n,r)}function s0(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=i0(e);if(r){const u=i[e]=o0(r,s);Fr(t,a,u,c)}else o&&(r0(t,a,o,c),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function i0(t){let e;if(Fh.test(t)){e={};let n;for(;n=t.match(Fh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ls(t.slice(2)),e]}function o0(t,e){const n=r=>{const s=r.timeStamp||Qp();(Zb||s>=n.attached-1)&&kt(a0(r,n.value),e,5,[r])};return n.value=t,n.attached=n0(),n}function a0(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vh=/^on[a-z]/,c0=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Wb(t,r,s):e==="style"?Qb(t,n,r):sa(e)?Au(e)||s0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u0(t,e,r,s))?Jb(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yb(t,e,r,s))};function u0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Vh.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vh.test(e)&&qe(n)?!1:e in t}const l0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jw.props;const Uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>lo(e,n):e};function h0(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Uh(s);const i=r||s.props&&s.props.type==="number";Fr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Tc(a)),t._assign(a)}),n&&Fr(t,"change",()=>{t.value=t.value.trim()}),e||(Fr(t,"compositionstart",h0),Fr(t,"compositionend",Bh),Fr(t,"change",Bh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Uh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Tc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},d0=["ctrl","shift","alt","meta"],f0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>d0.some(n=>t[`${n}Key`]&&!e.includes(n))},nD=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=f0[e[s]];if(i&&i(n,e))return}return t(n,...r)},p0=et({patchProp:c0},Gb);let $h;function g0(){return $h||($h=Cb(p0))}const m0=(...t)=>{const e=g0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=y0(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function y0(t){return qe(t)?document.querySelector(t):t}const v0="modulepreload",jh={},w0="./",ec=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${w0}${r}`,r in jh)return;jh[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":v0,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ps=t=>Xp?Symbol(t):"_vr_"+t,b0=ps("rvlm"),qh=ps("rvd"),ma=ps("r"),Gu=ps("rl"),$c=ps("rvl"),Vr=typeof window!="undefined";function I0(t){return t.__esModule||Xp&&t[Symbol.toStringTag]==="Module"}const be=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Bs=()=>{},E0=/\/$/,_0=t=>t.replace(E0,"");function nc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=A0(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function T0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function S0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&Yp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!C0(t[n],e[n]))return!1;return!0}function C0(t,e){return Array.isArray(t)?zh(t,e):Array.isArray(e)?zh(e,t):t===e}function zh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function A0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var si;(function(t){t.pop="pop",t.push="push"})(si||(si={}));var $s;(function(t){t.back="back",t.forward="forward",t.unknown=""})($s||($s={}));function x0(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_0(t)}const k0=/^[^#]+#/;function D0(t,e){return t.replace(k0,"#")+e}function N0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ya=()=>({left:window.pageXOffset,top:window.pageYOffset});function R0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=N0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const jc=new Map;function O0(t,e){jc.set(t,e)}function P0(t){const e=jc.get(t);return jc.delete(t),e}let M0=()=>location.protocol+"//"+location.host;function Jp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Kh(c,"")}return Kh(n,t)+r+s}function L0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Jp(t,location),m=n.value,I=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}w=I?d.position-I.position:0}else r(p);s.forEach(S=>{S(n.value,m,{delta:w,type:si.pop,direction:w?w>0?$s.forward:$s.back:$s.unknown})})};function c(){o=n.value}function u(d){s.push(d);const p=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(p),p}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:ya()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Gh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ya():null}}function F0(t){const{history:e,location:n}=window,r={value:Jp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:M0()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Gh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=be({},s.value,e.state,{forward:c,scroll:ya()});i(l.current,l,!0);const h=be({},Gh(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function V0(t){t=x0(t);const e=F0(t),n=L0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:D0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function U0(t){return typeof t=="string"||t&&typeof t=="object"}function Zp(t){return typeof t=="string"||typeof t=="symbol"}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eg=ps("nf");var Wh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wh||(Wh={}));function es(t,e){return be(new Error,{type:t,[eg]:!0},e)}function pn(t,e){return t instanceof Error&&eg in t&&(e==null||!!(t.type&e))}const Qh="[^/]+?",B0={sensitive:!1,strict:!1,start:!0,end:!0},$0=/[.+*?^${}()[\]/\\]/g;function j0(t,e){const n=be({},B0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace($0,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:I,optional:w,regexp:S}=d;i.push({name:m,repeatable:I,optional:w});const O=S||Qh;if(O!==Qh){p+=10;try{new RegExp(`(${O})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+K.message)}}let V=I?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(V=w&&u.length<2?`(?:/${V})`:"/"+V),w&&(V+="?"),s+=V,p+=20,w&&(p+=-8),I&&(p+=-20),O===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:m,repeatable:I,optional:w}=p,S=m in u?u[m]:"";if(Array.isArray(S)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(S)?S.join("/"):S;if(!O)if(w)d.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=O}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function q0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function K0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=q0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xh(r))return 1;if(Xh(s))return-1}return s.length-r.length}function Xh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z0={type:0,value:""},H0=/[a-zA-Z0-9_]/;function G0(t){if(!t)return[[]];if(t==="/")return[[z0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:H0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function W0(t,e,n){const r=j0(G0(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Q0(t,e){const n=[],r=new Map;e=Jh({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,m=Y0(l);m.aliasOf=d&&d.record;const I=Jh(e,l),w=[m];if("alias"in l){const V=typeof l.alias=="string"?[l.alias]:l.alias;for(const K of V)w.push(be({},m,{components:d?d.record.components:m.components,path:K,aliasOf:d?d.record:m}))}let S,O;for(const V of w){const{path:K}=V;if(h&&K[0]!=="/"){const q=h.record.path,W=q[q.length-1]==="/"?"":"/";V.path=h.record.path+(K&&W+K)}if(S=W0(V,h,I),d?d.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),p&&l.name&&!Yh(S)&&o(l.name)),"children"in m){const q=m.children;for(let W=0;W<q.length;W++)i(q[W],S,d&&d.children[W])}d=d||S,c(S)}return O?()=>{o(O)}:Bs}function o(l){if(Zp(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&K0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!tg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Yh(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},m,I;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw es(1,{location:l});I=d.record.name,p=be(X0(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),l.params),m=d.stringify(p)}else if("path"in l)m=l.path,d=n.find(O=>O.re.test(m)),d&&(p=d.parse(m),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw es(1,{location:l,currentLocation:h});I=d.record.name,p=be({},h.params,l.params),m=d.stringify(p)}const w=[];let S=d;for(;S;)w.unshift(S.record),S=S.parent;return{name:I,path:m,params:p,matched:w,meta:Z0(w)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function X0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Y0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:J0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function J0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Yh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Z0(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Jh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tg(t,e){return e.children.some(n=>n===t||tg(t,n))}const ng=/#/g,eI=/&/g,tI=/\//g,nI=/=/g,rI=/\?/g,rg=/\+/g,sI=/%5B/g,iI=/%5D/g,sg=/%5E/g,oI=/%60/g,ig=/%7B/g,aI=/%7C/g,og=/%7D/g,cI=/%20/g;function Wu(t){return encodeURI(""+t).replace(aI,"|").replace(sI,"[").replace(iI,"]")}function uI(t){return Wu(t).replace(ig,"{").replace(og,"}").replace(sg,"^")}function qc(t){return Wu(t).replace(rg,"%2B").replace(cI,"+").replace(ng,"%23").replace(eI,"%26").replace(oI,"`").replace(ig,"{").replace(og,"}").replace(sg,"^")}function lI(t){return qc(t).replace(nI,"%3D")}function hI(t){return Wu(t).replace(ng,"%23").replace(rI,"%3F")}function dI(t){return t==null?"":hI(t).replace(tI,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rg," "),o=i.indexOf("="),a=Ro(o<0?i:i.slice(0,o)),c=o<0?null:Ro(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Zh(t){let e="";for(let n in t){const r=t[n];if(n=lI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&qc(i)):[r&&qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function _s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(es(4,{from:n,to:e})):h instanceof Error?a(h):U0(h)?a(es(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function rc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gI(a)){const u=(a.__vccOpts||a)[e];u&&s.push(wn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=I0(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&wn(d,n,r,i,o)()}))}}return s}function gI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ed(t){const e=Ft(ma),n=Ft(Gu),r=Pt(()=>e.resolve(on(t.to))),s=Pt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Zr.bind(null,l));if(d>-1)return d;const p=td(c[u-2]);return u>1&&td(l)===p&&h[h.length-1].path!==p?h.findIndex(Zr.bind(null,c[u-2])):d}),i=Pt(()=>s.value>-1&&wI(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&Yp(n.params,r.value.params));function a(c={}){return vI(c)?e[on(t.replace)?"replace":"push"](on(t.to)).catch(Bs):Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mI=_i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ed,setup(t,{slots:e}){const n=fs(ed(t)),{options:r}=Ft(ma),s=Pt(()=>({[nd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yI=mI;function vI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nd=(t,e,n)=>t!=null?t:e!=null?e:n,bI=_i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ft($c),s=Pt(()=>t.route||r.value),i=Ft(qh,0),o=Pt(()=>s.value.matched[i]);ho(qh,i+1),ho(b0,o),ho($c,s);const a=yt();return Kr(()=>[a.value,o.value,t.name],([c,u,l],[h,d,p])=>{u&&(u.instances[l]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Zr(u,d)||!h)&&(u.enterCallbacks[l]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return rd(n.default,{Component:l,route:c});const d=u.props[t.name],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,I=Wp(l,be({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return rd(n.default,{Component:I,route:c})||I}}});function rd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const II=bI;function EI(t){const e=Q0(t.routes,t),n=t.parseQuery||fI,r=t.stringifyQuery||Zh,s=t.history,i=_s(),o=_s(),a=_s(),c=kw(fn);let u=fn;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=tc.bind(null,E=>""+E),h=tc.bind(null,dI),d=tc.bind(null,Ro);function p(E,B){let N,j;return Zp(E)?(N=e.getRecordMatcher(E),j=B):j=E,e.addRoute(j,N)}function m(E){const B=e.getRecordMatcher(E);B&&e.removeRoute(B)}function I(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function S(E,B){if(B=be({},B||c.value),typeof E=="string"){const se=nc(n,E,B.path),f=e.resolve({path:se.path},B),g=s.createHref(se.fullPath);return be(se,f,{params:d(f.params),hash:Ro(se.hash),redirectedFrom:void 0,href:g})}let N;if("path"in E)N=be({},E,{path:nc(n,E.path,B.path).path});else{const se=be({},E.params);for(const f in se)se[f]==null&&delete se[f];N=be({},E,{params:h(E.params)}),B.params=h(B.params)}const j=e.resolve(N,B),ye=E.hash||"";j.params=l(d(j.params));const _e=T0(r,be({},E,{hash:uI(ye),path:j.path})),ae=s.createHref(_e);return be({fullPath:_e,hash:ye,query:r===Zh?pI(E.query):E.query||{}},j,{redirectedFrom:void 0,href:ae})}function O(E){return typeof E=="string"?nc(n,E,c.value.path):be({},E)}function V(E,B){if(u!==E)return es(8,{from:B,to:E})}function K(E){return z(E)}function q(E){return K(be(O(E),{replace:!0}))}function W(E){const B=E.matched[E.matched.length-1];if(B&&B.redirect){const{redirect:N}=B;let j=typeof N=="function"?N(E):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=O(j):{path:j},j.params={}),be({query:E.query,hash:E.hash,params:E.params},j)}}function z(E,B){const N=u=S(E),j=c.value,ye=E.state,_e=E.force,ae=E.replace===!0,se=W(N);if(se)return z(be(O(se),{state:ye,force:_e,replace:ae}),B||N);const f=N;f.redirectedFrom=B;let g;return!_e&&S0(r,j,N)&&(g=es(16,{to:f,from:j}),xr(j,j,!0,!1)),(g?Promise.resolve(g):ie(f,j)).catch(v=>pn(v)?pn(v,2)?v:pt(v):Ee(v,f,j)).then(v=>{if(v){if(pn(v,2))return z(be(O(v.to),{state:ye,force:_e,replace:ae}),B||f)}else v=Ce(f,j,!0,ae,ye);return fe(f,j,v),v})}function L(E,B){const N=V(E,B);return N?Promise.reject(N):Promise.resolve()}function ie(E,B){let N;const[j,ye,_e]=_I(E,B);N=rc(j.reverse(),"beforeRouteLeave",E,B);for(const se of j)se.leaveGuards.forEach(f=>{N.push(wn(f,E,B))});const ae=L.bind(null,E,B);return N.push(ae),Dr(N).then(()=>{N=[];for(const se of i.list())N.push(wn(se,E,B));return N.push(ae),Dr(N)}).then(()=>{N=rc(ye,"beforeRouteUpdate",E,B);for(const se of ye)se.updateGuards.forEach(f=>{N.push(wn(f,E,B))});return N.push(ae),Dr(N)}).then(()=>{N=[];for(const se of E.matched)if(se.beforeEnter&&!B.matched.includes(se))if(Array.isArray(se.beforeEnter))for(const f of se.beforeEnter)N.push(wn(f,E,B));else N.push(wn(se.beforeEnter,E,B));return N.push(ae),Dr(N)}).then(()=>(E.matched.forEach(se=>se.enterCallbacks={}),N=rc(_e,"beforeRouteEnter",E,B),N.push(ae),Dr(N))).then(()=>{N=[];for(const se of o.list())N.push(wn(se,E,B));return N.push(ae),Dr(N)}).catch(se=>pn(se,8)?se:Promise.reject(se))}function fe(E,B,N){for(const j of a.list())j(E,B,N)}function Ce(E,B,N,j,ye){const _e=V(E,B);if(_e)return _e;const ae=B===fn,se=Vr?history.state:{};N&&(j||ae?s.replace(E.fullPath,be({scroll:ae&&se&&se.scroll},ye)):s.push(E.fullPath,ye)),c.value=E,xr(E,B,N,ae),pt()}let Le;function ft(){Le||(Le=s.listen((E,B,N)=>{const j=S(E),ye=W(j);if(ye){z(be(ye,{replace:!0}),j).catch(Bs);return}u=j;const _e=c.value;Vr&&O0(Hh(_e.fullPath,N.delta),ya()),ie(j,_e).catch(ae=>pn(ae,12)?ae:pn(ae,2)?(z(ae.to,j).then(se=>{pn(se,20)&&!N.delta&&N.type===si.pop&&s.go(-1,!1)}).catch(Bs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Ee(ae,j,_e))).then(ae=>{ae=ae||Ce(j,_e,!1),ae&&(N.delta?s.go(-N.delta,!1):N.type===si.pop&&pn(ae,20)&&s.go(-1,!1)),fe(j,_e,ae)}).catch(Bs)}))}let at=_s(),Fe=_s(),Ve;function Ee(E,B,N){pt(E);const j=Fe.list();return j.length?j.forEach(ye=>ye(E,B,N)):console.error(E),Promise.reject(E)}function me(){return Ve&&c.value!==fn?Promise.resolve():new Promise((E,B)=>{at.add([E,B])})}function pt(E){return Ve||(Ve=!E,ft(),at.list().forEach(([B,N])=>E?N(E):B()),at.reset()),E}function xr(E,B,N,j){const{scrollBehavior:ye}=t;if(!Vr||!ye)return Promise.resolve();const _e=!N&&P0(Hh(E.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return Uu().then(()=>ye(E,B,_e)).then(ae=>ae&&R0(ae)).catch(ae=>Ee(ae,E,B))}const Jt=E=>s.go(E);let Ut;const St=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:I,resolve:S,options:t,push:K,replace:q,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Fe.add,isReady:me,install(E){const B=this;E.component("RouterLink",yI),E.component("RouterView",II),E.config.globalProperties.$router=B,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>on(c)}),Vr&&!Ut&&c.value===fn&&(Ut=!0,K(s.location).catch(ye=>{}));const N={};for(const ye in fn)N[ye]=Pt(()=>c.value[ye]);E.provide(ma,B),E.provide(Gu,fs(N)),E.provide($c,c);const j=E.unmount;St.add(E),E.unmount=function(){St.delete(E),St.size<1&&(u=fn,Le&&Le(),Le=null,c.value=fn,Ut=!1,Ve=!1),j()}}}}function Dr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function _I(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Zr(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Zr(u,c))||s.push(c))}return[n,r,s]}function rD(){return Ft(ma)}function TI(){return Ft(Gu)}var SI=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ag;const va=t=>ag=t,cg=Symbol();function Kc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(js||(js={}));function CI(){const t=np(!0),e=t.run(()=>yt({}));let n=[],r=[];const s=Qr({install(i){va(s),s._a=i,i.provide(cg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!SI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ug=()=>{};function sd(t,e,n,r=ug){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Hu()&&$u(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}function zc(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kc(s)&&Kc(r)&&t.hasOwnProperty(n)&&!De(r)&&!An(r)?t[n]=zc(s,r):t[n]=r}return t}const AI=Symbol();function xI(t){return!Kc(t)||!t.hasOwnProperty(AI)}const{assign:Zt}=Object;function kI(t){return!!(De(t)&&t.effect)}function DI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=Rw(n.state.value[t]);return Zt(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Qr(Pt(()=>{va(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=lg(t,u,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(d=>{Zt(d,h)})},c}function lg(t,e,n={},r,s,i){let o;const a=Zt({actions:{}},n),c={deep:!0};let u,l,h=Qr([]),d=Qr([]),p;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),yt({});let I;function w(z){let L;u=l=!1,typeof z=="function"?(z(r.state.value[t]),L={type:js.patchFunction,storeId:t,events:p}):(zc(r.state.value[t],z),L={type:js.patchObject,payload:z,storeId:t,events:p});const ie=I=Symbol();Uu().then(()=>{I===ie&&(u=!0)}),l=!0,Nr(h,L,r.state.value[t])}const S=ug;function O(){o.stop(),h=[],d=[],r._s.delete(t)}function V(z,L){return function(){va(r);const ie=Array.from(arguments),fe=[],Ce=[];function Le(Fe){fe.push(Fe)}function ft(Fe){Ce.push(Fe)}Nr(d,{args:ie,name:z,store:q,after:Le,onError:ft});let at;try{at=L.apply(this&&this.$id===t?this:q,ie)}catch(Fe){throw Nr(Ce,Fe),Fe}return at instanceof Promise?at.then(Fe=>(Nr(fe,Fe),Fe)).catch(Fe=>(Nr(Ce,Fe),Promise.reject(Fe))):(Nr(fe,at),at)}}const K={_p:r,$id:t,$onAction:sd.bind(null,d),$patch:w,$reset:S,$subscribe(z,L={}){const ie=sd(h,z,L.detached,()=>fe()),fe=o.run(()=>Kr(()=>r.state.value[t],Ce=>{(L.flush==="sync"?l:u)&&z({storeId:t,type:js.direct,events:p},Ce)},Zt({},c,L)));return ie},$dispose:O},q=fs(Zt({},K));r._s.set(t,q);const W=r._e.run(()=>(o=np(),o.run(()=>e())));for(const z in W){const L=W[z];if(De(L)&&!kI(L)||An(L))i||(m&&xI(L)&&(De(L)?L.value=m[z]:zc(L,m[z])),r.state.value[t][z]=L);else if(typeof L=="function"){const ie=V(z,L);W[z]=ie,a.actions[z]=L}}return Zt(q,W),Zt(de(q),W),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:z=>{w(L=>{Zt(L,z)})}}),r._p.forEach(z=>{Zt(q,o.run(()=>z({store:q,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(q.$state,m),u=!0,l=!0,q}function hg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Hu();return a=a||u&&Ft(cg),a&&va(a),a=ag,a._s.has(r)||(i?lg(r,e,s,a):DI(r,s,a)),a._s.get(r)}return o.$id=r,o}const Qu=hg("user",{state:()=>({isAuthenticated:!1,userId:"",displayName:"",email:""})}),NI={class:"text-lg font-bold pb-2"},RI=_i({__name:"RestaurantCard",props:{leckerLog:null,docId:null},setup(t){return(e,n)=>{const r=ju("RouterLink");return At(),Yr(r,{to:{name:"Food",params:{id:t.docId,restaurant:t.leckerLog.name}}},{default:ti(()=>[kn("div",null,[kn("h1",NI,hh(t.leckerLog.name),1),kn("div",null,hh(t.leckerLog.cuisine),1)])]),_:1},8,["to"])}}});var Xu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const OI={},PI={class:"border border-black rouned-md p-4 text-center"};function MI(t,e){return At(),Xr("div",PI," Hier ist noch nichts. F\xFCge ein paar Restaurants und Gerichte zum LeckerLog hinzu. ")}var LI=Xu(OI,[["render",MI]]);/**
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
 */const dg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},VI=function(t){const e=dg(t);return fg.encodeByteArray(e,!0)},pg=function(t){return VI(t).replace(/\./g,"")},UI=function(t){try{return fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function $I(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jI(){return Ne().indexOf("Electron/")>=0}function vg(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qI(){return Ne().indexOf("MSAppHost/")>=0}function KI(){return!$I()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wg(){return typeof indexedDB=="object"}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const HI="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HI,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tr(s,a,r)}}function GI(t,e){return t.replace(WI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WI=/\{\$([^}]+)}/g;function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(id(i)&&id(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function id(t){return t!==null&&typeof t=="object"}/**
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
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XI(t,e){const n=new YI(t,e);return n.subscribe.bind(n)}class YI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
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
 */function Qt(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tE(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eE(t){return t===Xn?void 0:t}function tE(t){return t.instantiationMode==="EAGER"}/**
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
 */class nE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const rE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},sE=he.INFO,iE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},oE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=sE,this._logHandler=oE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const aE=(t,e)=>e.some(n=>t instanceof n);let od,ad;function cE(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uE(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,Hc=new WeakMap,Ig=new WeakMap,ic=new WeakMap,Ju=new WeakMap;function lE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bg.set(n,t)}).catch(()=>{}),Ju.set(e,t),e}function hE(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dE(t){Gc=t(Gc)}function fE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Ig.set(r,e.sort?e.sort():[e]),Dn(r)}:uE().includes(t)?function(...e){return t.apply(oc(this),e),Dn(bg.get(this))}:function(...e){return Dn(t.apply(oc(this),e))}}function pE(t){return typeof t=="function"?fE(t):(t instanceof IDBTransaction&&hE(t),aE(t,cE())?new Proxy(t,Gc):t)}function Dn(t){if(t instanceof IDBRequest)return lE(t);if(ic.has(t))return ic.get(t);const e=pE(t);return e!==t&&(ic.set(t,e),Ju.set(e,t)),e}const oc=t=>Ju.get(t);function gE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const mE=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],ac=new Map;function cd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ac.set(e,i),i}dE(t=>({...t,get:(e,n,r)=>cd(e,n)||t.get(e,n,r),has:(e,n)=>!!cd(e,n)||t.has(e,n)}));/**
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
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",ud="0.7.26";/**
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
 */const Zu=new Yu("@firebase/app"),bE="@firebase/app-compat",IE="@firebase/analytics-compat",EE="@firebase/analytics",_E="@firebase/app-check-compat",TE="@firebase/app-check",SE="@firebase/auth",CE="@firebase/auth-compat",AE="@firebase/database",xE="@firebase/database-compat",kE="@firebase/functions",DE="@firebase/functions-compat",NE="@firebase/installations",RE="@firebase/installations-compat",OE="@firebase/messaging",PE="@firebase/messaging-compat",ME="@firebase/performance",LE="@firebase/performance-compat",FE="@firebase/remote-config",VE="@firebase/remote-config-compat",UE="@firebase/storage",BE="@firebase/storage-compat",$E="@firebase/firestore",jE="@firebase/firestore-compat",qE="firebase",KE="9.8.3";/**
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
 */const Eg="[DEFAULT]",zE={[Wc]:"fire-core",[bE]:"fire-core-compat",[EE]:"fire-analytics",[IE]:"fire-analytics-compat",[TE]:"fire-app-check",[_E]:"fire-app-check-compat",[SE]:"fire-auth",[CE]:"fire-auth-compat",[AE]:"fire-rtdb",[xE]:"fire-rtdb-compat",[kE]:"fire-fn",[DE]:"fire-fn-compat",[NE]:"fire-iid",[RE]:"fire-iid-compat",[OE]:"fire-fcm",[PE]:"fire-fcm-compat",[ME]:"fire-perf",[LE]:"fire-perf-compat",[FE]:"fire-rc",[VE]:"fire-rc-compat",[UE]:"fire-gcs",[BE]:"fire-gcs-compat",[$E]:"fire-fst",[jE]:"fire-fst-compat","fire-js":"fire-js",[qE]:"fire-js-all"};/**
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
 */const Po=new Map,Qc=new Map;function HE(t,e){try{t.container.addComponent(e)}catch(n){Zu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Qc.has(e))return Zu.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,t);for(const n of Po.values())HE(n,t);return!0}function el(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const GE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},fr=new Ti("app","Firebase",GE);/**
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
 */class WE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=KE;function QE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Eg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw fr.create("bad-app-name",{appName:String(r)});const s=Po.get(r);if(s){if(Oo(t,s.options)&&Oo(n,s.config))return s;throw fr.create("duplicate-app",{appName:r})}const i=new nE(r);for(const a of Qc.values())i.addComponent(a);const o=new WE(t,n,i);return Po.set(r,o),o}function _g(t=Eg){const e=Po.get(t);if(!e)throw fr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let s=(r=zE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zu.warn(a.join(" "));return}ts(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",YE=1,ii="firebase-heartbeat-store";let cc=null;function Tg(){return cc||(cc=gE(XE,YE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}}).catch(t=>{throw fr.create("storage-open",{originalErrorMessage:t.message})})),cc}async function JE(t){var e;try{return(await Tg()).transaction(ii).objectStore(ii).get(Sg(t))}catch(n){throw fr.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function ld(t,e){var n;try{const s=(await Tg()).transaction(ii,"readwrite");return await s.objectStore(ii).put(e,Sg(t)),s.done}catch(r){throw fr.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Sg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZE=1024,e_=30*24*60*60*1e3;class t_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=e_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hd(),{heartbeatsToSend:n,unsentEntries:r}=n_(this._heartbeatsCache.heartbeats),s=pg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hd(){return new Date().toISOString().substring(0,10)}function n_(t,e=ZE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class r_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wg()?zI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dd(t){return pg(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function s_(t){ts(new dr("platform-logger",e=>new vE(e),"PRIVATE")),ts(new dr("heartbeat",e=>new t_(e),"PRIVATE")),Nn(Wc,ud,t),Nn(Wc,ud,"esm2017"),Nn("fire-js","")}s_("");var i_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},F,tl=tl||{},X=i_||self;function Mo(){}function Xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ai(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o_(t){return Object.prototype.hasOwnProperty.call(t,uc)&&t[uc]||(t[uc]=++a_)}var uc="closure_uid_"+(1e9*Math.random()>>>0),a_=0;function c_(t,e,n){return t.call.apply(t.bind,arguments)}function u_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=c_:Qe=u_,Qe.apply(null,arguments)}function Ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var l_=0;Bn.prototype.s=!1;Bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),l_!=0)&&o_(this)};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ag=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function h_(t){e:{var e=nT;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function fd(t){return Array.prototype.concat.apply([],arguments)}function nl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Lo(t){return/^[\s\xa0]*$/.test(t)}var pd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rt(t,e){return t.indexOf(e)!=-1}function lc(t,e){return t<e?-1:t>e?1:0}var st;e:{var gd=X.navigator;if(gd){var md=gd.userAgent;if(md){st=md;break e}}st=""}function rl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}var yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<yd.length;i++)n=yd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function sl(t){return sl[" "](t),t}sl[" "]=Mo;function d_(t){var e=g_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var f_=rt(st,"Opera"),ns=rt(st,"Trident")||rt(st,"MSIE"),Dg=rt(st,"Edge"),Yc=Dg||ns,Ng=rt(st,"Gecko")&&!(rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge"))&&!(rt(st,"Trident")||rt(st,"MSIE"))&&!rt(st,"Edge"),p_=rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge");function Rg(){var t=X.document;return t?t.documentMode:void 0}var Fo;e:{var hc="",dc=function(){var t=st;if(Ng)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dg)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(p_)return/WebKit\/(\S+)/.exec(t);if(f_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(dc&&(hc=dc?dc[1]:""),ns){var fc=Rg();if(fc!=null&&fc>parseFloat(hc)){Fo=String(fc);break e}}Fo=hc}var g_={};function m_(){return d_(function(){let t=0;const e=pd(String(Fo)).split("."),n=pd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=lc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||lc(s[2].length==0,i[2].length==0)||lc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Jc;if(X.document&&ns){var vd=Rg();Jc=vd||parseInt(Fo,10)||void 0}else Jc=void 0;var y_=Jc,v_=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Mo,e),X.removeEventListener("test",Mo,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function oi(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ng){e:{try{sl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:w_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.Z.h.call(this)}}Ye(oi,Ze);var w_={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),b_=0;function I_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++b_,this.ca=this.fa=!1}function wa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ba(t){this.src=t,this.g={},this.h=0}ba.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=eu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new I_(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Zc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Cg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var il="closure_lm_"+(1e6*Math.random()|0),pc={};function Og(t,e,n,r,s){if(r&&r.once)return Mg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Og(t,e[i],n,r,s);return null}return n=cl(n),t&&t[xi]?t.N(e,n,Ai(r)?!!r.capture:!!r,s):Pg(t,e,n,!1,r,s)}function Pg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ai(s)?!!s.capture:!!s,a=al(t);if(a||(t[il]=a=new ba(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=E_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)v_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Fg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function E_(){function t(n){return e.call(t.src,t.listener,n)}var e=__;return t}function Mg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mg(t,e[i],n,r,s);return null}return n=cl(n),t&&t[xi]?t.O(e,n,Ai(r)?!!r.capture:!!r,s):Pg(t,e,n,!0,r,s)}function Lg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Lg(t,e[i],n,r,s);else r=Ai(r)?!!r.capture:!!r,n=cl(n),t&&t[xi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=eu(i,n,r,s),-1<n&&(wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=al(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eu(e,n,r,s)),(n=-1<t?e[t]:null)&&ol(n))}function ol(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xi])Zc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Fg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=al(e))?(Zc(n,t),n.h==0&&(n.src=null,e[il]=null)):wa(t)}}}function Fg(t){return t in pc?pc[t]:pc[t]="on"+t}function __(t,e){if(t.ca)t=!0;else{e=new oi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ol(t),t=n.call(r,e)}return t}function al(t){return t=t[il],t instanceof ba?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function Ke(){Bn.call(this),this.i=new ba(this),this.P=this,this.I=null}Ye(Ke,Bn);Ke.prototype[xi]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){Lg(this,t,e,n,r)};function Xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(r,t),kg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Zi(o,r,!0,e)&&s}if(o=e.g=t,s=Zi(o,r,!0,e)&&s,s=Zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Zi(o,r,!1,e)&&s}Ke.prototype.M=function(){if(Ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wa(n[r]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Zc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ul=X.JSON.stringify;function T_(){var t=Ug;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class S_{constructor(){this.h=this.g=null}add(e,n){const r=Vg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Vg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new C_,t=>t.reset());class C_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function A_(t){X.setTimeout(()=>{throw t},0)}function ll(t,e){tu||x_(),nu||(tu(),nu=!0),Ug.add(t,e)}var tu;function x_(){var t=X.Promise.resolve(void 0);tu=function(){t.then(k_)}}var nu=!1,Ug=new S_;function k_(){for(var t;t=T_();){try{t.h.call(t.g)}catch(n){A_(n)}var e=Vg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nu=!1}function Ia(t,e){Ke.call(this),this.h=t||1,this.g=e||X,this.j=Qe(this.kb,this),this.l=Date.now()}Ye(Ia,Ke);F=Ia.prototype;F.da=!1;F.S=null;F.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xe(this,"tick"),this.da&&(hl(this),this.start()))}};F.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}F.M=function(){Ia.Z.M.call(this),hl(this),delete this.g};function dl(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Bg(t){t.g=dl(()=>{t.g=null,t.i&&(t.i=!1,Bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class D_ extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bg(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){Bn.call(this),this.h=t,this.g={}}Ye(ai,Bn);var wd=[];function $g(t,e,n,r){Array.isArray(n)||(n&&(wd[0]=n.toString()),n=wd);for(var s=0;s<n.length;s++){var i=Og(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jg(t){rl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ol(e)},t),t.g={}}ai.prototype.M=function(){ai.Z.M.call(this),jg(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Aa=function(){this.g=!1};function N_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function R_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+P_(t,n)+(r?" "+r:"")})}function O_(t,e){t.info(function(){return"TIMEOUT: "+e})}Ea.prototype.info=function(){};function P_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ul(n)}catch{return e}}var Sr={},bd=null;function _a(){return bd=bd||new Ke}Sr.Ma="serverreachability";function qg(t){Ze.call(this,Sr.Ma,t)}Ye(qg,Ze);function ci(t){const e=_a();Xe(e,new qg(e))}Sr.STAT_EVENT="statevent";function Kg(t,e){Ze.call(this,Sr.STAT_EVENT,t),this.stat=e}Ye(Kg,Ze);function it(t){const e=_a();Xe(e,new Kg(e,t))}Sr.Na="timingevent";function zg(t,e){Ze.call(this,Sr.Na,t),this.size=e}Ye(zg,Ze);function ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Hg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fl(){}fl.prototype.h=null;function Id(t){return t.h||(t.h=t.i())}function Gg(){}var Di={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pl(){Ze.call(this,"d")}Ye(pl,Ze);function gl(){Ze.call(this,"c")}Ye(gl,Ze);var ru;function Sa(){}Ye(Sa,fl);Sa.prototype.g=function(){return new XMLHttpRequest};Sa.prototype.i=function(){return{}};ru=new Sa;function Ni(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ai(this),this.P=M_,t=Yc?125:void 0,this.W=new Ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wg}function Wg(){this.i=null,this.g="",this.h=!1}var M_=45e3,su={},Vo={};F=Ni.prototype;F.setTimeout=function(t){this.P=t};function iu(t,e,n){t.K=1,t.v=Aa(cn(e)),t.s=n,t.U=!0,Qg(t,null)}function Qg(t,e){t.F=Date.now(),Ri(t),t.A=cn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),nm(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Wg,t.g=Em(t.l,n?e:null,!t.s),0<t.O&&(t.L=new D_(Qe(t.Ia,t,t.g),t.O)),$g(t.V,t.g,"readystatechange",t.gb),e=t.H?xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ci(),N_(t.j,t.u,t.A,t.m,t.X,t.s)}F.gb=function(t){t=t.target;const e=this.L;e&&tn(t)==3?e.l():this.Ia(t)};F.Ia=function(t){try{if(t==this.g)e:{const l=tn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Yc||this.g&&(this.h.h||this.g.ga()||Sd(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ci(3):ci(2)),Ca(this);var n=this.g.ba();this.N=n;t:if(Xg(this)){var r=Sd(this.g);t="";var s=r.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ir(this),qs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,R_(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lo(a)){var u=a;break t}}u=null}if(n=u)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ou(this,n);else{this.i=!1,this.o=3,it(12),ir(this),qs(this);break e}}this.U?(Yg(this,l,o),Yc&&this.i&&l==3&&($g(this.V,this.W,"tick",this.fb),this.W.start())):(Br(this.j,this.m,o,null),ou(this,o)),l==4&&ir(this),this.i&&!this.I&&(l==4?vm(this.l,this):(this.i=!1,Ri(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),ir(this),qs(this)}}}catch{}finally{}};function Xg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Yg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=L_(t,n),s==Vo){e==4&&(t.o=4,it(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==su){t.o=4,it(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),ou(t,s);Xg(t)&&s!=Vo&&s!=su&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tl(e),e.L=!0,it(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),ir(t),qs(t))}F.fb=function(){if(this.g){var t=tn(this.g),e=this.g.ga();this.C<e.length&&(Ca(this),Yg(this,t,e),this.i&&t!=4&&Ri(this))}};function L_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vo:(n=Number(e.substring(n,r)),isNaN(n)?su:(r+=1,r+n>e.length?Vo:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,ir(this)};function Ri(t){t.Y=Date.now()+t.P,Jg(t,t.P)}function Jg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ki(Qe(t.eb,t),e)}function Ca(t){t.B&&(X.clearTimeout(t.B),t.B=null)}F.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(O_(this.j,this.A),this.K!=2&&(ci(),it(17)),ir(this),this.o=2,qs(this)):Jg(this,this.Y-t)};function qs(t){t.l.G==0||t.I||vm(t.l,t)}function ir(t){Ca(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hl(t.W),jg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ou(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||au(n.i,t))){if(n.I=t.N,!t.J&&au(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)jo(n),Da(n);else break e;_l(n),it(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ki(Qe(n.ab,n),6e3));if(1>=im(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else or(n,11)}else if((t.J||n.g==t)&&jo(n),!Lo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(rt(m,"spdy")||rt(m,"quic")||rt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(vl(i,i.h),i.h=null))}if(r.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,Se(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Im(r,r.H?r.la:null,r.W),o.J){om(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ca(a),Ri(a)),r.g=o}else mm(r);0<n.l.length&&Na(n)}else u[0]!="stop"&&u[0]!="close"||or(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?or(n,7):El(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ci(4)}catch{}}function F_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ml(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xc(t)||typeof t=="string")Ag(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=F_(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function gs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof gs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}F=gs.prototype;F.R=function(){yl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};F.T=function(){return yl(this),this.g.concat()};function yl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];pr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],pr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}F.get=function(t,e){return pr(this.h,t)?this.h[t]:e};F.set=function(t,e){pr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};F.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Zg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function V_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function gr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof gr){this.g=e!==void 0?e:t.g,Uo(this,t.j),this.s=t.s,Bo(this,t.i),$o(this,t.m),this.l=t.l,e=t.h;var n=new ui;n.i=e.i,e.g&&(n.g=new gs(e.g),n.h=e.h),Ed(this,n),this.o=t.o}else t&&(n=String(t).match(Zg))?(this.g=!!e,Uo(this,n[1]||"",!0),this.s=Ks(n[2]||""),Bo(this,n[3]||"",!0),$o(this,n[4]),this.l=Ks(n[5]||"",!0),Ed(this,n[6]||"",!0),this.o=Ks(n[7]||"")):(this.g=!!e,this.h=new ui(null,this.g))}gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,_d,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,_d,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?q_:j_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,z_)),t.join("")};function cn(t){return new gr(t)}function Uo(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bo(t,e,n){t.i=n?Ks(e,!0):e}function $o(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ed(t,e,n){e instanceof ui?(t.h=e,H_(t.h,t.g)):(n||(e=Os(e,K_)),t.h=new ui(e,t.g))}function Se(t,e,n){t.h.set(e,n)}function Aa(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function U_(t){return t instanceof gr?cn(t):new gr(t,void 0)}function B_(t,e,n,r){var s=new gr(null,void 0);return t&&Uo(s,t),e&&Bo(s,e),n&&$o(s,n),r&&(s.l=r),s}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _d=/[#\/\?@]/g,j_=/[#\?:]/g,q_=/[#\?]/g,K_=/[#\?@]/g,z_=/#/g;function ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new gs,t.h=0,t.i&&V_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=ui.prototype;F.add=function(t,e){$n(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function em(t,e){$n(t),e=ms(t,e),pr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,pr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&yl(t)))}function tm(t,e){return $n(t),e=ms(t,e),pr(t.g.h,e)}F.forEach=function(t,e){$n(this),this.g.forEach(function(n,r){Ag(n,function(s){t.call(e,s,r,this)},this)},this)};F.T=function(){$n(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};F.R=function(t){$n(this);var e=[];if(typeof t=="string")tm(this,t)&&(e=fd(e,this.g.get(ms(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=fd(e,t[n])}return e};F.set=function(t,e){return $n(this),this.i=null,t=ms(this,t),tm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function nm(t,e,n){em(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),nl(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H_(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(em(this,r),nm(this,s,n))},t)),t.j=e}var G_=class{constructor(t,e){this.h=t,this.g=e}};function rm(t){this.l=t||W_,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var W_=10;function sm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function im(t){return t.h?1:t.g?t.g.size:0}function au(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vl(t,e){t.g?t.g.add(e):t.h=e}function om(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rm.prototype.cancel=function(){if(this.i=am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function am(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return nl(t.i)}function wl(){}wl.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};wl.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function Q_(){this.g=new wl}function X_(t,e,n){const r=n||"";try{ml(t,function(s,i){let o=s;Ai(s)&&(o=ul(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Y_(t,e){const n=new Ea;if(X.Image){const r=new Image;r.onload=Ji(eo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ji(eo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ji(eo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ji(eo,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function eo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Oi(t){this.l=t.$b||null,this.j=t.ib||!1}Ye(Oi,fl);Oi.prototype.g=function(){return new xa(this.l,this.j)};Oi.prototype.i=function(t){return function(){return t}}({});function xa(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(xa,Ke);var bl=0;F=xa.prototype;F.open=function(t,e){if(this.readyState!=bl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,li(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=bl};F.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function cm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}F.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pi(this):li(this),this.readyState==3&&cm(this)}};F.Ua=function(t){this.g&&(this.response=this.responseText=t,Pi(this))};F.Ta=function(t){this.g&&(this.response=t,Pi(this))};F.ha=function(){this.g&&Pi(this)};function Pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,li(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var J_=X.JSON.parse;function Pe(t){Ke.call(this),this.headers=new gs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=um,this.K=this.L=!1}Ye(Pe,Ke);var um="",Z_=/^https?$/i,eT=["POST","PUT"];F=Pe.prototype;F.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ru.g(),this.C=this.u?Id(this.u):Id(ru),this.g.onreadystatechange=Qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Td(this,i);return}t=n||"";const s=new gs(this.headers);r&&ml(r,function(i,o){s.set(o,i)}),r=h_(s.T()),n=X.FormData&&t instanceof X.FormData,!(0<=Cg(eT,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dm(this),0<this.B&&((this.K=tT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.pa,this)):this.A=dl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Td(this,i)}};function tT(t){return ns&&m_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function nT(t){return t.toLowerCase()=="content-type"}F.pa=function(){typeof tl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lm(t),ka(t)}function lm(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),ka(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ka(this,!0)),Pe.Z.M.call(this)};F.Fa=function(){this.s||(this.F||this.v||this.l?hm(this):this.cb())};F.cb=function(){hm(this)};function hm(t){if(t.h&&typeof tl!="undefined"&&(!t.C[1]||tn(t)!=4||t.ba()!=2)){if(t.v&&tn(t)==4)dl(t.Fa,0,t);else if(Xe(t,"readystatechange"),tn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Zg)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!Z_.test(s?s.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",lm(t)}}finally{ka(t)}}}}function ka(t,e){if(t.g){dm(t);const n=t.g,r=t.C[0]?Mo:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function dm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function tn(t){return t.g?t.g.readyState:0}F.ba=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};F.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),J_(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case um:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Da=function(){return this.m};F.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function rT(t){let e="";return rl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Il(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fm(t){this.za=0,this.l=[],this.h=new Ea,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ts("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ts("baseRetryDelayMs",5e3,t),this.$a=Ts("retryDelaySeedMs",1e4,t),this.Ya=Ts("forwardChannelMaxRetries",2,t),this.ra=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new rm(t&&t.concurrentRequestLimit),this.Ca=new Q_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}F=fm.prototype;F.ma=8;F.G=1;function El(t){if(pm(t),t.G==3){var e=t.V++,n=cn(t.F);Se(n,"SID",t.J),Se(n,"RID",e),Se(n,"TYPE","terminate"),Mi(t,n),e=new Ni(t,t.h,e,void 0),e.K=2,e.v=Aa(cn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Em(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ri(e)}bm(t)}F.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Da(t){t.g&&(Tl(t),t.g.cancel(),t.g=null)}function pm(t){Da(t),t.u&&(X.clearTimeout(t.u),t.u=null),jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function mc(t,e){t.l.push(new G_(t.Za++,e)),t.G==3&&Na(t)}function Na(t){sm(t.i)||t.m||(t.m=!0,ll(t.Ha,t),t.C=0)}function sT(t,e){return im(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ki(Qe(t.Ha,t,e),wm(t,t.C)),t.C++,!0)}F.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ni(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=xg(i),kg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gm(this,s,e),n=cn(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),Mi(this,n),this.o&&i&&Il(n,this.o,i),vl(this.i,s),this.Ra&&Se(n,"TYPE","init"),this.ja?(Se(n,"$req",e),Se(n,"SID","null"),s.$=!0,iu(s,n,null)):iu(s,n,e),this.G=2}}else this.G==3&&(t?Cd(this,t):this.l.length==0||sm(this.i)||Cd(this))};function Cd(t,e){var n;e?n=e.m:n=t.V++;const r=cn(t.F);Se(r,"SID",t.J),Se(r,"RID",n),Se(r,"AID",t.U),Mi(t,r),t.o&&t.s&&Il(r,t.o,t.s),n=new Ni(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),vl(t.i,n),iu(n,r,e)}function Mi(t,e){t.j&&ml({},function(n,r){Se(e,r,n)})}function gm(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Qe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{X_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function mm(t){t.g||t.u||(t.Y=1,ll(t.Ga,t),t.A=0)}function _l(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ki(Qe(t.Ga,t),wm(t,t.A)),t.A++,!0)}F.Ga=function(){if(this.u=null,ym(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ki(Qe(this.bb,this),t)}};F.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),Da(this),ym(this))};function Tl(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function ym(t){t.g=new Ni(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=cn(t.oa);Se(e,"RID","rpc"),Se(e,"SID",t.J),Se(e,"CI",t.N?"0":"1"),Se(e,"AID",t.U),Mi(t,e),Se(e,"TYPE","xmlhttp"),t.o&&t.s&&Il(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Aa(cn(e)),n.s=null,n.U=!0,Qg(n,t)}F.ab=function(){this.v!=null&&(this.v=null,Da(this),_l(this),it(19))};function jo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function vm(t,e){var n=null;if(t.g==e){jo(t),Tl(t),t.g=null;var r=2}else if(au(t.i,e))n=e.D,om(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=_a(),Xe(r,new zg(r,n)),Na(t)}else mm(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&sT(t,e)||r==2&&_l(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}}function wm(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function or(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Qe(t.jb,t);n||(n=new gr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Uo(n,"https"),Aa(n)),Y_(n.toString(),r)}else it(2);t.G=0,t.j&&t.j.va(e),bm(t),pm(t)}F.jb=function(t){t?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function bm(t){t.G=0,t.I=-1,t.j&&((am(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,nl(t.l),t.l.length=0),t.j.ua())}function Im(t,e,n){let r=U_(n);if(r.i!="")e&&Bo(r,e+"."+r.i),$o(r,r.m);else{const s=X.location;r=B_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&rl(t.aa,function(s,i){Se(r,i,s)}),e=t.D,n=t.sa,e&&n&&Se(r,e,n),Se(r,"VER",t.ma),Mi(t,r),r}function Em(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Pe(new Oi({ib:!0})):new Pe(t.qa),e.L=t.H,e}function _m(){}F=_m.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Oa=function(){};function qo(){if(ns&&!(10<=Number(y_)))throw Error("Environmental error: no available transport.")}qo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Ke.call(this),this.g=new fm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}Ye(_t,Ke);_t.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ll(Qe(t.hb,t,e))),it(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Im(t,null,t.W),Na(t)};_t.prototype.close=function(){El(this.g)};_t.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mc(this.g,e)}else this.v?(e={},e.__data__=ul(t),mc(this.g,e)):mc(this.g,t)};_t.prototype.M=function(){this.g.j=null,delete this.j,El(this.g),delete this.g,_t.Z.M.call(this)};function Tm(t){pl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Tm,pl);function Sm(){gl.call(this),this.status=1}Ye(Sm,gl);function ys(t){this.g=t}Ye(ys,_m);ys.prototype.xa=function(){Xe(this.g,"a")};ys.prototype.wa=function(t){Xe(this.g,new Tm(t))};ys.prototype.va=function(t){Xe(this.g,new Sm)};ys.prototype.ua=function(){Xe(this.g,"b")};qo.prototype.createWebChannel=qo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;Hg.COMPLETE="complete";Gg.EventType=Di;Di.OPEN="a";Di.CLOSE="b";Di.ERROR="c";Di.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.La;Pe.prototype.getLastErrorCode=Pe.prototype.Da;Pe.prototype.getStatus=Pe.prototype.ba;Pe.prototype.getResponseJson=Pe.prototype.Qa;Pe.prototype.getResponseText=Pe.prototype.ga;Pe.prototype.send=Pe.prototype.ea;var iT=function(){return new qo},oT=function(){return _a()},yc=Ta,aT=Hg,cT=Sr,Ad={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},uT=Oi,to=Gg,lT=Pe;const xd="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let vs="9.8.3";/**
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
 */const mr=new Yu("@firebase/firestore");function cu(){return mr.logLevel}function A(t,...e){if(mr.logLevel<=he.DEBUG){const n=e.map(Sl);mr.debug(`Firestore (${vs}): ${t}`,...n)}}function ht(t,...e){if(mr.logLevel<=he.ERROR){const n=e.map(Sl);mr.error(`Firestore (${vs}): ${t}`,...n)}}function kd(t,...e){if(mr.logLevel<=he.WARN){const n=e.map(Sl);mr.warn(`Firestore (${vs}): ${t}`,...n)}}function Sl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw ht(e),new Error(e)}function Z(t,e){t||$()}function te(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class fT{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new hT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new nt(e)}}class pT{constructor(e,n,r){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class gT{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.p=n.token,new mT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Cm{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function Am(t){return t+"\0"}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new xe(0,0))}static max(){return new Q(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends hi{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const wT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends hi{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return wT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(pe.fromString(e))}static fromName(e){return new R(pe.fromString(e).popFirst(5))}static empty(){return new R(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new pe(e.slice()))}}/**
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
 */class xm{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function uu(t){return t.fields.find(e=>e.kind===2)}function Yn(t){return t.fields.filter(e=>e.kind!==2)}xm.UNKNOWN_ID=-1;class bT{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ko{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ko(0,Tt.min())}}function IT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Tt(s,R.empty(),e)}function km(t){return new Tt(t.readTime,t.key,-1)}class Tt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tt(Q.min(),R.empty(),-1)}static max(){return new Tt(Q.max(),R.empty(),-1)}}function Cl(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Dm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Cr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Dm)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(s=>s?y.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new y((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new y((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Ra{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.T=new zt,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{n.error?this.T.reject(new zs(e,n.error)):this.T.resolve()},this.transaction.onerror=r=>{const s=Al(r.target.error);this.T.reject(new zs(e,s))}}static open(e,n,r,s){try{return new Ra(n,e.transaction(s,r))}catch(i){throw new zs(n,i)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new _T(n)}}class nn{constructor(e,n,r){this.name=e,this.version=n,this.P=r,nn.v(Ne())===12.2&&ht("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),er(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!wg())return!1;if(nn.S())return!0;const e=Ne(),n=nn.v(e),r=0<n&&n<10,s=nn.D(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static S(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.C)==="YES"}static N(e,n){return e.store(n)}static v(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static D(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async k(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new zs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new M(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zs(e,o))},s.onupgradeneeded=i=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.P.O(o,s.transaction,i.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.M&&(this.db.onversionchange=n=>this.M(n)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Ra.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.R(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.A,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ET{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return er(this.$.delete())}}class zs extends M{constructor(e,n){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function jn(t){return t.name==="IndexedDbTransactionError"}class _T{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),er(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),er(this.store.add(e))}get(e){return er(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),er(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),er(this.store.count())}K(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.G(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new y((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}W(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Y(e){const n=this.cursor({});return new y((r,s)=>{n.onerror=i=>{const o=Al(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new y((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new ET(a),u=n(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?s():c.U===null?a.continue():a.continue(c.U)}}).next(()=>y.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function er(t){return new y((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Al(r.target.error);n(s)}})}let Dd=!1;function Al(t){const e=nn.v(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dd||(Dd=!0,setTimeout(()=>{throw r},0)),r}}return t}class TT{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Z(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(n){jn(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Cr(n)}await this.Z(1)})}}class ST{constructor(e,n){this.localStore=e,this.persistence=n}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.et(n,e))}et(e,n){const r=new Set;let s=n,i=!0;return y.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.nt(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}nt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.st(s,i)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}st(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=km(i);Cl(o,r)>0&&(r=o)}),new Tt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class xt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */xt.ot=-1;class Me{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ge.RED,this.left=s!=null?s:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Rr(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ge(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const CT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(Z(!!t),typeof t=="string"){let e=0;const n=CT.exec(t);if(Z(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
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
 */function Om(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pm(t){const e=t.mapValue.fields.__previous_value__;return Om(e)?Pm(e):e}function di(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class AT{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Fn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Oa(t){return t==null}function fi(t){return t===0&&1/t==-1/0}function xT(t){return typeof t=="number"&&Number.isInteger(t)&&!fi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},go={nullValue:"NULL_VALUE"};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Om(t)?4:Mm(t)?9007199254740991:10:$()}function Xt(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Ln(r.timestampValue),o=Ln(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return yr(r.bytesValue).isEqual(yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ke(r.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ke(r.integerValue)===ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ke(r.doubleValue),o=ke(s.doubleValue);return i===o?fi(i)===fi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Nd(i)!==Nd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xt(i[a],o[a])))return!1;return!0}(t,e);default:return $()}}function pi(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Vn(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ke(s.integerValue||s.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Od(t.timestampValue,e.timestampValue);case 4:return Od(di(t),di(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,i){const o=yr(s),a=yr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ne(o[c],a[c]);if(u!==0)return u}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ne(ke(s.latitude),ke(i.latitude));return o!==0?o:ne(ke(s.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Vn(o[c],a[c]);if(u)return u}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Sn.mapValue&&i===Sn.mapValue)return 0;if(s===Sn.mapValue)return 1;if(i===Sn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ne(a[l],u[l]);if(h!==0)return h;const d=Vn(o[a[l]],c[u[l]]);if(d!==0)return d}return ne(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Od(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Ln(t),r=Ln(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function zr(t){return lu(t)}function lu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Ln(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=lu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${lu(r.fields[a])}`;return i+"}"}(t.mapValue):$();var e,n}function gi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hu(t){return!!t&&"integerValue"in t}function mi(t){return!!t&&"arrayValue"in t}function Pd(t){return!!t&&"nullValue"in t}function Md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mo(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kT(t){return"nullValue"in t?go:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?gi(Fn.empty(),R.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function DT(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?gi(Fn.empty(),R.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Sn:$()}function Ld(t,e){const n=Vn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Fd(t,e){const n=Vn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=Oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Hs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(Hs(this.value))}}function Lm(t){const e=[];return ws(t.fields,(n,r)=>{const s=new Oe([n]);if(mo(r)){const i=Lm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
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
 */class Ae{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ae(e,0,Q.min(),Q.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Ae(e,1,n,Q.min(),r,0)}static newNoDocument(e,n){return new Ae(e,2,n,Q.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,Q.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class NT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Vd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NT(t,e,n,r,s,i,o)}function wr(t){const e=te(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+zr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zr(r)).join(",")),e.ut=n}return e.ut}function RT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${zr(r.value)}`;var r}).join(", ")}]`),Oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zr(n)).join(",")),`Target(${e})`}function Li(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!BT(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Xt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jd(t.startAt,e.startAt)&&jd(t.endAt,e.endAt)}function zo(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ho(t,e){return t.filters.filter(n=>n instanceof We&&n.field.isEqual(e))}function Ud(t,e,n){let r=go,s=!0;for(const i of Ho(t,e)){let o=go,a=!0;switch(i.op){case"<":case"<=":o=kT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=go}Ld({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Ld({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Bd(t,e,n){let r=Sn,s=!0;for(const i of Ho(t,e)){let o=Sn,a=!0;switch(i.op){case">=":case">":o=DT(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Sn}Fd({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Fd({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}class We extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new OT(e,n,r):n==="array-contains"?new LT(e,r):n==="in"?new FT(e,r):n==="not-in"?new VT(e,r):n==="array-contains-any"?new UT(e,r):new We(e,n,r)}static ct(e,n,r){return n==="in"?new PT(e,r):new MT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Vn(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.at(Vn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class OT extends We{constructor(e,n,r){super(e,n,r),this.key=R.fromName(r.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.at(n)}}class PT extends We{constructor(e,n){super(e,"in",n),this.keys=Fm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MT extends We{constructor(e,n){super(e,"not-in",n),this.keys=Fm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>R.fromName(r.referenceValue))}class LT extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mi(n)&&pi(n.arrayValue,this.value)}}class FT extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class VT extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class UT extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}class ss{constructor(e,n){this.position=e,this.inclusive=n}}class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function BT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $d(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),n.key):r=Vn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function $T(t,e,n,r,s,i,o,a){return new Fi(t,e,n,r,s,i,o,a)}function xl(t){return new Fi(t)}function jT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Um(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Bm(t){return t.collectionGroup!==null}function yi(t){const e=te(t);if(e.lt===null){e.lt=[];const n=Um(e),r=Vm(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Gs(n)),e.lt.push(new Gs(Oe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Gs(Oe.keyField(),i))}}}return e.lt}function un(t){const e=te(t);if(!e.ft)if(e.limitType==="F")e.ft=Vd(e.path,e.collectionGroup,yi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of yi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gs(i.field,o))}const r=e.endAt?new ss(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ss(e.startAt.position,e.startAt.inclusive):null;e.ft=Vd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function qT(t,e,n){return new Fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return Li(un(t),un(e))&&t.limitType===e.limitType}function $m(t){return`${wr(un(t))}|lt:${t.limitType}`}function du(t){return`Query(target=${RT(un(t))}; limitType=${t.limitType})`}function kl(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):R.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=$d(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,yi(n),r)||n.endAt&&!function(s,i,o){const a=$d(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,yi(n),r))}(t,e)}function KT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jm(t){return(e,n)=>{let r=!1;for(const s of yi(t)){const i=zT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zT(t,e,n){const r=t.field.isKeyField()?R.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Vn(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */function qm(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fi(e)?"-0":e}}function Km(t){return{integerValue:""+t}}function HT(t,e){return xT(e)?Km(e):qm(t,e)}/**
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
 */class Ma{constructor(){this._=void 0}}function GT(t,e,n){return t instanceof vi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof is?Hm(t,e):t instanceof os?Gm(t,e):function(r,s){const i=zm(r,s),o=qd(i)+qd(r._t);return hu(i)&&hu(r._t)?Km(o):qm(r.wt,o)}(t,e)}function WT(t,e,n){return t instanceof is?Hm(t,e):t instanceof os?Gm(t,e):n}function zm(t,e){return t instanceof wi?hu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vi extends Ma{}class is extends Ma{constructor(e){super(),this.elements=e}}function Hm(t,e){const n=Wm(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class os extends Ma{constructor(e){super(),this.elements=e}}function Gm(t,e){let n=Wm(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class wi extends Ma{constructor(e,n){super(),this.wt=e,this._t=n}}function qd(t){return ke(t.integerValue||t.doubleValue)}function Wm(t){return mi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class QT{constructor(e,n){this.field=e,this.transform=n}}function XT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof is&&r instanceof is||n instanceof os&&r instanceof os?rs(n.elements,r.elements,Xt):n instanceof wi&&r instanceof wi?Xt(n._t,r._t):n instanceof vi&&r instanceof vi}(t.transform,e.transform)}class YT{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class La{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dl(t.key,wt.none()):new bs(t.key,t.data,wt.none());{const n=t.data,r=dt.empty();let s=new ge(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qn(t.key,r,new Vt(s.toArray()),wt.none())}}function JT(t,e,n){t instanceof bs?function(r,s,i){const o=r.value.clone(),a=zd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qn?function(r,s,i){if(!yo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=zd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Xm(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof bs?function(s,i,o,a){if(!yo(s.precondition,i))return o;const c=s.value.clone(),u=Hd(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof qn?function(s,i,o,a){if(!yo(s.precondition,i))return o;const c=Hd(s.fieldTransforms,a,i),u=i.data;return u.setAll(Xm(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return yo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function ZT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zm(r.transform,s||null);i!=null&&(n===null&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&rs(n,r,(s,i)=>XT(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bs extends La{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends La{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zd(t,e,n){const r=new Map;Z(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,WT(o,a,n[s]))}return r}function Hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,GT(i,o,e))}return r}class Dl extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ym extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eS{constructor(e){this.count=e}}/**
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
 */var Re,ce;function tS(t){switch(t){default:return $();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Jm(t){if(t===void 0)return ht("GRPC error has no .code"),b.UNKNOWN;switch(t){case Re.OK:return b.OK;case Re.CANCELLED:return b.CANCELLED;case Re.UNKNOWN:return b.UNKNOWN;case Re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Re.INTERNAL:return b.INTERNAL;case Re.UNAVAILABLE:return b.UNAVAILABLE;case Re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Re.NOT_FOUND:return b.NOT_FOUND;case Re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Re.ABORTED:return b.ABORTED;case Re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Re.DATA_LOSS:return b.DATA_LOSS;default:return $()}}(ce=Re||(Re={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Rm(this.inner)}size(){return this.innerSize}}/**
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
 */const nS=new Me(R.comparator);function bt(){return nS}const Zm=new Me(R.comparator);function Ps(...t){let e=Zm;for(const n of t)e=e.insert(n.key,n);return e}function ey(t){let e=Zm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qt(){return Qs()}function ty(){return Qs()}function Qs(){return new Kn(t=>t.toString(),(t,e)=>t.isEqual(e))}const rS=new Me(R.comparator),sS=new ge(R.comparator);function oe(...t){let e=sS;for(const n of t)e=e.add(n);return e}const iS=new ge(ne);function ny(){return iS}/**
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
 */class Fa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fa(Q.min(),r,ny(),bt(),oe())}}class Vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Vi(ze.EMPTY_BYTE_STRING,n,oe(),oe(),oe())}}/**
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
 */class vo{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class ry{constructor(e,n){this.targetId=e,this.It=n}}class sy{constructor(e,n,r=ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.Tt=0,this.Et=Qd(),this.At=ze.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=oe(),n=oe(),r=oe();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Vi(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Qd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class oS{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=bt(),this.Bt=Wd(),this.Lt=new ge(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(zo(i))if(r===0){const o=new R(i.path);this.Kt(n,o,Ae.newNoDocument(o,Q.min()))}else Z(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&zo(a.target)){const c=new R(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ae.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=oe();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new Fa(e,n,this.Lt,this.$t,r);return this.$t=bt(),this.Bt=Wd(),this.Lt=new ge(ne),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Gd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ge(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Gd),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Wd(){return new Me(R.comparator)}function Qd(){return new Me(R.comparator)}/**
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
 */const aS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class uS{constructor(e,n){this.databaseId=e,this.dt=n}}function bi(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iy(t,e){return t.dt?e.toBase64():e.toUint8Array()}function lS(t,e){return bi(t,e.toTimestamp())}function It(t){return Z(!!t),Q.fromTimestamp(function(e){const n=Ln(e);return new xe(n.seconds,n.nanos)}(t))}function Nl(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oy(t){const e=pe.fromString(t);return Z(fy(e)),e}function Go(t,e){return Nl(t.databaseId,e.path)}function lr(t,e){const n=oy(e);if(n.get(1)!==t.databaseId.projectId)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(cy(n))}function fu(t,e){return Nl(t.databaseId,e)}function ay(t){const e=oy(t);return e.length===4?pe.emptyPath():cy(e)}function pu(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cy(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xd(t,e,n){return{name:Go(t,e),fields:n.value.mapValue.fields}}function hS(t,e,n){const r=lr(t,e.name),s=It(e.updateTime),i=new dt({mapValue:{fields:e.fields}}),o=Ae.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function dS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(Z(u===void 0||typeof u=="string"),ze.fromBase64String(u||"")):(Z(u===void 0||u instanceof Uint8Array),ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Jm(c.code);return new M(u,c.message||"")}(o);n=new sy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lr(t,r.document.name),i=It(r.document.updateTime),o=new dt({mapValue:{fields:r.document.fields}}),a=Ae.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new vo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lr(t,r.document),i=r.readTime?It(r.readTime):Q.min(),o=Ae.newNoDocument(s,i),a=r.removedTargetIds||[];n=new vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lr(t,r.document),i=r.removedTargetIds||[];n=new vo([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new eS(s),o=r.targetId;n=new ry(o,i)}}return n}function Wo(t,e){let n;if(e instanceof bs)n={update:Xd(t,e.key,e.value)};else if(e instanceof Dl)n={delete:Go(t,e.key)};else if(e instanceof qn)n={update:Xd(t,e.key,e.data),updateMask:wS(e.fieldMask)};else{if(!(e instanceof Ym))return $();n={verify:Go(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof vi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof is)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof os)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wi)return{fieldPath:i.field.canonicalString(),increment:o._t};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:lS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(t,e.precondition)),n}function gu(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?wt.updateTime(It(s.updateTime)):s.exists!==void 0?wt.exists(s.exists):wt.none()}(e.currentDocument):wt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)Z(o.setToServerValue==="REQUEST_TIME"),a=new vi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new is(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new os(u)}else"increment"in o?a=new wi(i,o.increment):$();const c=Oe.fromServerFormat(o.fieldPath);return new QT(c,a)}(t,s)):[];if(e.update){e.update.name;const s=lr(t,e.update.name),i=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Vt(c.map(u=>Oe.fromServerFormat(u)))}(e.updateMask);return new qn(s,i,o,n,r)}return new bs(s,i,n,r)}if(e.delete){const s=lr(t,e.delete);return new Dl(s,n)}if(e.verify){const s=lr(t,e.verify);return new Ym(s,n)}return $()}function fS(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?It(r.updateTime):It(s);return i.isEqual(Q.min())&&(i=It(s)),new YT(i,r.transformResults||[])}(n,e))):[]}function uy(t,e){return{documents:[fu(t,e.path)]}}function ly(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Md(h.value))return{unaryFilter:{field:Or(h.field),op:"IS_NAN"}};if(Pd(h.value))return{unaryFilter:{field:Or(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Md(h.value))return{unaryFilter:{field:Or(h.field),op:"IS_NOT_NAN"}};if(Pd(h.value))return{unaryFilter:{field:Or(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(h.field),op:mS(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Or(l.field),direction:gS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||Oa(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function hy(t){let e=ay(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Z(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=dy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Gs($r(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Oa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ss(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ss(d,h)}(n.endAt)),$T(e,s,o,i,a,"F",c,u)}function pS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function dy(t){return t?t.unaryFilter!==void 0?[vS(t)]:t.fieldFilter!==void 0?[yS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>dy(e)).reduce((e,n)=>e.concat(n)):$():[]}function gS(t){return aS[t]}function mS(t){return cS[t]}function Or(t){return{fieldPath:t.canonicalString()}}function $r(t){return Oe.fromServerFormat(t.fieldPath)}function yS(t){return We.create($r(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function vS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$r(t.unaryFilter.field);return We.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$r(t.unaryFilter.field);return We.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$r(t.unaryFilter.field);return We.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$r(t.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function wS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yd(e)),e=bS(t.get(n),e);return Yd(e)}function bS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Yd(t){return t+""}function Kt(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),pe.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:$()}i=o+2}return new pe(r)}/**
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
 */const Jd=["userId","batchId"];/**
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
 */function wo(t,e){return[t,ot(e)]}function py(t,e,n){return[t,ot(e),n]}const IS={},ES=["prefixPath","collectionGroup","readTime","documentId"],_S=["prefixPath","collectionGroup","documentId"],TS=["collectionGroup","readTime","prefixPath","documentId"],SS=["canonicalId","targetId"],CS=["targetId","path"],AS=["path","targetId"],xS=["collectionId","parent"],kS=["indexId","uid"],DS=["uid","sequenceNumber"],NS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],RS=["indexId","uid","orderedDocumentKey"],OS=["userId","collectionPath","documentId"],PS=["userId","collectionPath","largestBatchId"],MS=["userId","collectionGroup","largestBatchId"],gy=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LS=[...gy,"documentOverlays"],my=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yy=my,FS=[...yy,"indexConfiguration","indexState","indexEntries"];/**
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
 */class mu extends Nm{constructor(e,n){super(),this.ee=e,this.currentSequenceNumber=n}}function He(t,e){const n=te(t);return nn.N(n.ee,e)}/**
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
 */class Rl{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ty();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Qm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>Kd(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>Kd(n,r))}}class Ol{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Z(e.mutations.length===r.length);let s=rS;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ol(e,n,r,s)}}/**
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
 */class Pl{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Rn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class vy{constructor(e){this.ne=e}}function VS(t,e){let n;if(e.document)n=hS(t.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=R.fromSegments(e.noDocument.path),s=Ir(e.noDocument.readTime);n=Ae.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=R.fromSegments(e.unknownDocument.path),s=Ir(e.unknownDocument.version);n=Ae.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new xe(r[0],r[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function Zd(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Qo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:Go(s,i.key),fields:i.data.value.mapValue.fields,updateTime:bi(s,i.version.toTimestamp())}}(t.ne,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:br(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:br(e.version)}}return r}function Qo(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function br(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ir(t){const e=new xe(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function tr(t,e){const n=(e.baseMutations||[]).map(i=>gu(t.ne,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>gu(t.ne,i)),s=xe.fromMillis(e.localWriteTimeMs);return new Rl(e.batchId,s,n,r)}function Ms(t){const e=Ir(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ir(t.lastLimboFreeSnapshotVersion):Q.min();let r;var s;return t.query.documents!==void 0?(Z((s=t.query).documents.length===1),r=un(xl(ay(s.documents[0])))):r=function(i){return un(hy(i))}(t.query),new Rn(r,t.targetId,0,t.lastListenSequenceNumber,e,n,ze.fromBase64String(t.resumeToken))}function wy(t,e){const n=br(e.snapshotVersion),r=br(e.lastLimboFreeSnapshotVersion);let s;s=zo(e.target)?uy(t.ne,e.target):ly(t.ne,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wr(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function by(t){const e=hy({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qT(e,e.limit,"L"):e}function vc(t,e){return new Pl(e.largestBatchId,gu(t.ne,e.overlayMutation))}function ef(t,e){const n=e.path.lastSegment();return[t,ot(e.path.popLast()),n]}function tf(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:br(r.readTime),documentKey:ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class US{getBundleMetadata(e,n){return nf(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Ir(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return nf(e).put({bundleId:(r=n).id,createTime:br(It(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return rf(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:by(s.bundledQuery),readTime:Ir(s.readTime)};var s})}saveNamedQuery(e,n){return rf(e).put(function(r){return{name:r.name,readTime:br(It(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function nf(t){return He(t,"bundles")}function rf(t){return He(t,"namedQueries")}/**
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
 */class Va{constructor(e,n){this.wt=e,this.userId=n}static se(e,n){const r=n.uid||"";return new Va(e,r)}getOverlay(e,n){return Ss(e).get(ef(this.userId,n)).next(r=>r?vc(this.wt,r):null)}getOverlays(e,n){const r=qt();return y.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Pl(n,o);s.push(this.ie(e,a))}),y.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(ot(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Ss(e).W("collectionPathOverlayIndex",a))}),y.waitFor(i)}getOverlaysForCollection(e,n,r){const s=qt(),i=ot(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ss(e).K("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=vc(this.wt,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=qt();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ss(e).J({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=vc(this.wt,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ie(e,n){return Ss(e).put(function(r,s,i){const[o,a,c]=ef(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Wo(r.ne,i.mutation)}}(this.wt,this.userId,n))}}function Ss(t){return He(t,"documentOverlays")}/**
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
 */class nr{constructor(){}re(e,n){this.oe(e,n),n.ue()}oe(e,n){if("nullValue"in e)this.ce(n,5);else if("booleanValue"in e)this.ce(n,10),n.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(n,15),n.ae(ke(e.integerValue));else if("doubleValue"in e){const r=ke(e.doubleValue);isNaN(r)?this.ce(n,13):(this.ce(n,15),fi(r)?n.ae(0):n.ae(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ce(n,20),typeof r=="string"?n.he(r):(n.he(`${r.seconds||""}`),n.ae(r.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,n),this.fe(n);else if("bytesValue"in e)this.ce(n,30),n.de(yr(e.bytesValue)),this.fe(n);else if("referenceValue"in e)this._e(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ce(n,45),n.ae(r.latitude||0),n.ae(r.longitude||0)}else"mapValue"in e?Mm(e)?this.ce(n,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,n),this.fe(n)):"arrayValue"in e?(this.me(e.arrayValue,n),this.fe(n)):$()}le(e,n){this.ce(n,25),this.ge(e,n)}ge(e,n){n.he(e)}we(e,n){const r=e.fields||{};this.ce(n,55);for(const s of Object.keys(r))this.le(s,n),this.oe(r[s],n)}me(e,n){const r=e.values||[];this.ce(n,50);for(const s of r)this.oe(s,n)}_e(e,n){this.ce(n,37),R.fromName(e).path.forEach(r=>{this.ce(n,60),this.ge(r,n)})}ce(e,n){e.ae(n)}fe(e){e.ae(2)}}nr.ye=new nr;function BS(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function sf(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=BS(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class $S{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ie(r.value),r=n.next();this.Te()}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ie(r);else if(r<2048)this.Ie(960|r>>>6),this.Ie(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ie(480|r>>>12),this.Ie(128|63&r>>>6),this.Ie(128|63&r);else{const s=n.codePointAt(0);this.Ie(240|s>>>18),this.Ie(128|63&s>>>12),this.Ie(128|63&s>>>6),this.Ie(128|63&s)}}this.Te()}Pe(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const s=n.codePointAt(0);this.Ae(240|s>>>18),this.Ae(128|63&s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s)}}this.Re()}ve(e){const n=this.Ve(e),r=sf(n);this.Se(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}De(e){const n=this.Ve(e),r=sf(n);this.Se(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ie(e){const n=255&e;n===0?(this.xe(0),this.xe(255)):n===255?(this.xe(255),this.xe(0)):this.xe(n)}Ae(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class jS{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class qS{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class Cs{constructor(){this.Me=new $S,this.Fe=new jS(this.Me),this.$e=new qS(this.Me)}seed(e){this.Me.seed(e)}Be(e){return e===0?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}/**
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
 */class rr{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Le(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new rr(this.indexId,this.documentKey,this.arrayValue,r)}}function Gn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=of(t.arrayValue,e.arrayValue),n!==0?n:(n=of(t.directionalValue,e.directionalValue),n!==0?n:R.comparator(t.documentKey,e.documentKey)))}function of(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class KS{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const n of e.filters){const r=n;r.ht()?this.Ke=r:this.qe.push(r)}}Ge(e){const n=uu(e);if(n!==void 0&&!this.Qe(n))return!1;const r=Yn(e);let s=0,i=0;for(;s<r.length&&this.Qe(r[s]);++s);if(s===r.length)return!0;if(this.Ke!==void 0){const o=r[s];if(!this.je(this.Ke,o)||!this.We(this.Ue[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}Qe(e){for(const n of this.qe)if(this.je(n,e))return!0;return!1}je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}We(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class zS{constructor(){this.ze=new Ml}addToCollectionParentIndex(e,n){return this.ze.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(Tt.min())}updateCollectionGroup(e,n,r){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Ml{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ge(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(pe.comparator)).toArray()}}/**
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
 */const ro=new Uint8Array(0);class HS{constructor(e,n){this.user=e,this.databaseId=n,this.He=new Ml,this.Je=new Kn(r=>wr(r),(r,s)=>Li(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.He.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.He.add(n)});const i={collectionId:r,parent:ot(s)};return af(e).put(i)}return y.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[Am(n),""],!1,!0);return af(e).K(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(Kt(o.parent))}return r})}addFieldIndex(e,n){const r=so(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=xs(e);return i.next(a=>{o.put(tf(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=so(e),s=xs(e),i=As(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=As(e);let s=!0;const i=new Map;return y.forEach(this.Ye(n),o=>this.Xe(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=oe();const a=[];return y.forEach(i,(c,u)=>{var l;A("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`} to execute ${wr(n)}`);const h=function(V,K){const q=uu(K);if(q===void 0)return null;for(const W of Ho(V,q.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(u,c),d=function(V,K){const q=new Map;for(const W of Yn(K))for(const z of Ho(V,W.fieldPath))switch(z.op){case"==":case"in":q.set(W.fieldPath.canonicalString(),z.value);break;case"not-in":case"!=":return q.set(W.fieldPath.canonicalString(),z.value),Array.from(q.values())}return null}(u,c),p=function(V,K){const q=[];let W=!0;for(const z of Yn(K)){const L=z.kind===0?Ud(V,z.fieldPath,V.startAt):Bd(V,z.fieldPath,V.startAt);q.push(L.value),W&&(W=L.inclusive)}return new ss(q,W)}(u,c),m=function(V,K){const q=[];let W=!0;for(const z of Yn(K)){const L=z.kind===0?Bd(V,z.fieldPath,V.endAt):Ud(V,z.fieldPath,V.endAt);q.push(L.value),W&&(W=L.inclusive)}return new ss(q,W)}(u,c),I=this.Ze(c,u,p),w=this.Ze(c,u,m),S=this.tn(c,u,d),O=this.en(c.indexId,h,I,p.inclusive,w,m.inclusive,S);return y.forEach(O,V=>r.j(V,n.limit).next(K=>{K.forEach(q=>{const W=R.fromSegments(q.documentKey);o.has(W)||(o=o.add(W),a.push(W))})}))}).next(()=>a)}return y.resolve(null)})}Ye(e){let n=this.Je.get(e);return n||(n=[e],this.Je.set(e,n),n)}en(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.nn(n[h/u]):ro,p=this.sn(e,d,r[h%u],s),m=this.rn(e,d,i[h%u],o),I=a.map(w=>this.sn(e,d,w,!0));l.push(...this.createRange(p,m,I))}return l}sn(e,n,r,s){const i=new rr(e,R.empty(),n,r);return s?i:i.Le()}rn(e,n,r,s){const i=new rr(e,R.empty(),n,r);return s?i.Le():i}Xe(e,n){const r=new KS(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.Ge(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return y.forEach(this.Ye(n),s=>this.Xe(e,s).next(i=>{i?r!==0&&i.fields.length<function(o){let a=new ge(Oe.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>r)}on(e,n){const r=new Cs;for(const s of Yn(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.Be(s.kind);nr.ye.re(i,o)}return r.Oe()}nn(e){const n=new Cs;return nr.ye.re(e,n.Be(0)),n.Oe()}un(e,n){const r=new Cs;return nr.ye.re(gi(this.databaseId,n),r.Be(function(s){const i=Yn(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Oe()}tn(e,n,r){if(r===null)return[];let s=[];s.push(new Cs);let i=0;for(const o of Yn(e)){const a=r[i++];for(const c of s)if(this.cn(n,o.fieldPath)&&mi(a))s=this.an(s,o,a);else{const u=c.Be(o.kind);nr.ye.re(a,u)}}return this.hn(s)}Ze(e,n,r){return this.tn(e,n,r.position)}hn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Oe();return n}an(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Cs;c.seed(a.Oe()),nr.ye.re(o,c.Be(n.kind)),i.push(c)}return i}cn(e,n){return!!e.filters.find(r=>r instanceof We&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=so(e),s=xs(e);return(n?r.K("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.K()).next(i=>{const o=[];return y.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ko(l.sequenceNumber,new Tt(Ir(l.readTime),new R(Kt(l.documentKey)),l.largestBatchId)):Ko.empty(),d=u.fields.map(([p,m])=>new bT(Oe.fromServerFormat(p),m));return new xm(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ne(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=so(e),i=xs(e);return this.ln(e).next(o=>s.K("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>y.forEach(a,c=>i.put(tf(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return y.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),y.forEach(a,c=>this.fn(e,s,c).next(u=>{const l=this.dn(i,c);return u.isEqual(l)?y.resolve():this._n(e,i,c,u,l)}))))})}wn(e,n,r,s){return As(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.un(r,n.key),documentKey:n.key.path.toArray()})}mn(e,n,r,s){return As(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.un(r,n.key),n.key.path.toArray()])}fn(e,n,r){const s=As(e);let i=new ge(Gn);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.un(r,n)])},(o,a)=>{i=i.add(new rr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}dn(e,n){let r=new ge(Gn);const s=this.on(n,e);if(s==null)return r;const i=uu(n);if(i!=null){const o=e.data.field(i.fieldPath);if(mi(o))for(const a of o.arrayValue.values||[])r=r.add(new rr(n.indexId,e.key,this.nn(a),s))}else r=r.add(new rr(n.indexId,e.key,ro,s));return r}_n(e,n,r,s,i){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let m=Rr(d),I=Rr(p);for(;m||I;){let w=!1,S=!1;if(m&&I){const O=u(m,I);O<0?S=!0:O>0&&(w=!0)}else m!=null?S=!0:w=!0;w?(l(I),I=Rr(p)):S?(h(m),m=Rr(d)):(m=Rr(d),I=Rr(p))}}(s,i,Gn,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.mn(e,n,r,a))}),y.waitFor(o)}ln(e){let n=1;return xs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Gn(o,a)).filter((o,a,c)=>!a||Gn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Gn(o,e),c=Gn(o,n);if(a===0)s[0]=e.Le();else if(a>0&&c<0)s.push(o),s.push(o.Le());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2)i.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ro,[]],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ro,[]]));return i}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(cf)}getMinOffset(e,n){return y.mapArray(this.Ye(n),r=>this.Xe(e,r).next(s=>s||$())).next(cf)}}function af(t){return He(t,"collectionParents")}function As(t){return He(t,"indexEntries")}function so(t){return He(t,"indexConfiguration")}function xs(t){return He(t,"indexState")}function cf(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Cl(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Tt(e.readTime,e.documentKey,n)}/**
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
 */const uf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ut{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Iy(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{Z(a===1)}));const u=[];for(const l of n.mutations){const h=py(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return y.waitFor(i).next(()=>u)}function Xo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(41943040,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);class Ua{constructor(e,n,r,s){this.userId=e,this.wt=n,this.indexManager=r,this.referenceDelegate=s,this.gn={}}static se(e,n,r,s){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ua(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gn(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=Ur(e),o=gn(e);return o.add({}).next(a=>{Z(typeof a=="number");const c=new Rl(a,n,r,s),u=function(d,p,m){const I=m.baseMutations.map(S=>Wo(d.ne,S)),w=m.mutations.map(S=>Wo(d.ne,S));return{userId:p,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:I,mutations:w}}(this.wt,this.userId,c),l=[];let h=new ge((d,p)=>ne(d.canonicalString(),p.canonicalString()));for(const d of s){const p=py(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,IS))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.gn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return gn(e).get(n).next(r=>r?(Z(r.userId===this.userId),tr(this.wt,r)):null)}yn(e,n){return this.gn[n]?y.resolve(this.gn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.gn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return gn(e).J({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(Z(a.batchId>=r),i=tr(this.wt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return gn(e).J({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gn(e).K("userMutationsIndex",n).next(r=>r.map(s=>tr(this.wt,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=wo(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return Ur(e).J({range:s},(o,a,c)=>{const[u,l,h]=o,d=Kt(l);if(u===this.userId&&n.path.isEqual(d))return gn(e).get(h).next(p=>{if(!p)throw $();Z(p.userId===this.userId),i.push(tr(this.wt,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);const s=[];return n.forEach(i=>{const o=wo(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Ur(e).J({range:a},(u,l,h)=>{const[d,p,m]=u,I=Kt(p);d===this.userId&&i.path.isEqual(I)?r=r.add(m):h.done()});s.push(c)}),y.waitFor(s).next(()=>this.pn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=wo(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ge(ne);return Ur(e).J({range:o},(c,u,l)=>{const[h,d,p]=c,m=Kt(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(p)):l.done()}).next(()=>this.pn(e,a))}pn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(gn(e).get(i).next(o=>{if(o===null)throw $();Z(o.userId===this.userId),r.push(tr(this.wt,o))}))}),y.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return Iy(e.ee,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.In(n.batchId)}),y.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return y.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Ur(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Kt(i[1]);s.push(c)}else a.done()}).next(()=>{Z(s.length===0)})})}containsKey(e,n){return Ey(e,this.userId,n)}Tn(e){return _y(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ey(t,e,n){const r=wo(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ur(t).J({range:i,H:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function gn(t){return He(t,"mutations")}function Ur(t){return He(t,"documentMutations")}function _y(t){return He(t,"mutationQueues")}/**
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
 */class Er{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Er(0)}static Rn(){return new Er(-1)}}/**
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
 */class GS{constructor(e,n){this.referenceDelegate=e,this.wt=n}allocateTargetId(e){return this.bn(e).next(n=>{const r=new Er(n.highestTargetId);return n.highestTargetId=r.next(),this.Pn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.bn(e).next(n=>Q.fromTimestamp(new xe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.bn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Pn(e,s)))}addTargetData(e,n){return this.vn(e,n).next(()=>this.bn(e).next(r=>(r.targetCount+=1,this.Vn(n,r),this.Pn(e,r))))}updateTargetData(e,n){return this.vn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Pr(e).delete(n.targetId)).next(()=>this.bn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.Pn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Pr(e).J((o,a)=>{const c=Ms(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Pr(e).J((r,s)=>{const i=Ms(s);n(i)})}bn(e){return lf(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}Pn(e,n){return lf(e).put("targetGlobalKey",n)}vn(e,n){return Pr(e).put(wy(this.wt,n))}Vn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=wr(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Pr(e).J({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=Ms(a);Li(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=bn(e);return n.forEach(o=>{const a=ot(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(s)}removeMatchingKeys(e,n,r){const s=bn(e);return y.forEach(n,i=>{const o=ot(i.path);return y.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=bn(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=bn(e);let i=oe();return s.J({range:r,H:!0},(o,a,c)=>{const u=Kt(o[1]),l=new R(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=ot(n.path),s=IDBKeyRange.bound([r],[Am(r)],!1,!0);let i=0;return bn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}te(e,n){return Pr(e).get(n).next(r=>r?Ms(r):null)}}function Pr(t){return He(t,"targets")}function lf(t){return He(t,"targetGlobal")}function bn(t){return He(t,"targetDocuments")}/**
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
 */function hf([t,e],[n,r]){const s=ne(t,n);return s===0?ne(e,r):s}class WS{constructor(e){this.Sn=e,this.buffer=new ge(hf),this.Dn=0}Cn(){return++this.Dn}xn(e){const n=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();hf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Nn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return this.Nn!==null}kn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jn(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Cr(n)}await this.kn(3e5)})}}class XS{constructor(e,n){this.On=e,this.params=n}calculateTargetCount(e,n){return this.On.Mn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return y.resolve(xt.ot);const r=new WS(n);return this.On.forEachTarget(e,s=>r.xn(s.sequenceNumber)).next(()=>this.On.Fn(e,s=>r.xn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.On.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.On.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(uf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uf):this.$n(e,n))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),cu()<=he.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class YS{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new XS(r,s)}(this,n)}Mn(e){const n=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Bn(e){let n=0;return this.Fn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Fn(e,n){return this.Ln(e,(r,s)=>n(s))}addReference(e,n,r){return io(e,r)}removeReference(e,n,r){return io(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return io(e,n)}Un(e,n){return function(r,s){let i=!1;return _y(r).Y(o=>Ey(r,o,s).next(a=>(a&&(i=!0),y.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Ln(e,(o,a)=>{if(a<=n){const c=this.Un(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),bn(e).delete([0,ot(o.path)])))});s.push(c)}}).next(()=>y.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return io(e,n)}Ln(e,n){const r=bn(e);let s,i=xt.ot;return r.J({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==xt.ot&&n(new R(Kt(s)),i),i=u,s=c):i=xt.ot}).next(()=>{i!==xt.ot&&n(new R(Kt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function io(t,e){return bn(t).put(function(n,r){return{targetId:0,path:ot(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class Ty{constructor(){this.changes=new Kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JS{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Wn(e).put(r)}removeEntry(e,n,r){return Wn(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Qo(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.qn(e,r)))}getEntry(e,n){let r=Ae.newInvalidDocument(n);return Wn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ks(n))},(s,i)=>{r=this.Kn(n,i)}).next(()=>r)}Gn(e,n){let r={size:0,document:Ae.newInvalidDocument(n)};return Wn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ks(n))},(s,i)=>{r={document:this.Kn(n,i),size:Xo(i)}}).next(()=>r)}getEntries(e,n){let r=bt();return this.Qn(e,n,(s,i)=>{const o=this.Kn(s,i);r=r.insert(s,o)}).next(()=>r)}jn(e,n){let r=bt(),s=new Me(R.comparator);return this.Qn(e,n,(i,o)=>{const a=this.Kn(i,o);r=r.insert(i,a),s=s.insert(i,Xo(o))}).next(()=>({documents:r,Wn:s}))}Qn(e,n,r){if(n.isEmpty())return y.resolve();let s=new ge(pf);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ks(s.first()),ks(s.last())),o=s.getIterator();let a=o.getNext();return Wn(e).J({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=R.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&pf(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.q(ks(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const s=[n.popLast().toArray(),n.lastSegment(),Qo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wn(e).K(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=bt();for(const c of o){const u=this.Kn(R.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,s){let i=bt();const o=ff(n,r),a=ff(n,Tt.max());return Wn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Kn(R.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new ZS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return df(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}qn(e,n){return df(e).put("remoteDocumentGlobalKey",n)}Kn(e,n){if(n){const r=VS(this.wt,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ae.newInvalidDocument(e)}}function Sy(t){return new JS(t)}class ZS extends Ty{constructor(e,n){super(),this.zn=e,this.trackRemovals=n,this.Hn=new Kn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new ge((i,o)=>ne(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Hn.get(i);if(n.push(this.zn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Zd(this.zn.wt,o);s=s.add(i.path.popLast()),r+=Xo(c)-a.size,n.push(this.zn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Zd(this.zn.wt,o.convertToNoDocument(Q.min()));n.push(this.zn.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.zn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.zn.updateMetadata(e,r)),y.waitFor(n)}getFromCache(e,n){return this.zn.Gn(e,n).next(r=>(this.Hn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.zn.jn(e,n).next(({documents:r,Wn:s})=>(s.forEach((i,o)=>{this.Hn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function df(t){return He(t,"remoteDocumentGlobal")}function Wn(t){return He(t,"remoteDocumentsV14")}function ks(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ff(t,e){const n=e.documentKey.path.toArray();return[t,Qo(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function pf(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ne(n[i],r[i]),s)return s;return s=ne(n.length,r.length),s||(s=ne(n[n.length-2],r[r.length-2]),s||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class eC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Cy{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Ws(r.mutation,s,Vt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=qt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ps();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bt();const o=Qs(),a=Qs();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof qn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Ws(l.mutation,u,l.mutation.getFieldMask(),xe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new eC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let s=new Me((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Vt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ty();l.forEach(d=>{if(!i.has(d)){const p=Qm(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return R.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):y.resolve(qt());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,oe())).next(l=>({batchId:a,changes:ey(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(r=>{let s=Ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ps();return this.indexManager.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Fi(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ae.newInvalidDocument(u)))});let o=Ps();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ws(u.mutation,c,Vt.empty(),xe.now()),kl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):y.resolve(Ae.newInvalidDocument(n))}}/**
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
 */class tC{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return y.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:It(r.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:by(r.bundledQuery),readTime:It(r.readTime)}}(n)),y.resolve()}}/**
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
 */class nC{constructor(){this.overlays=new Me(R.comparator),this.Xn=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qt();return y.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),y.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),y.resolve()}getOverlaysForCollection(e,n,r){const s=qt(),i=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return y.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=qt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return y.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pl(n,r));let i=this.Xn.get(n);i===void 0&&(i=oe(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
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
 */class Ll{constructor(){this.Zn=new ge($e.ts),this.es=new ge($e.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new $e(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new R(new pe([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new R(new pe([])),r=new $e(n,e),s=new $e(n,e+1);let i=oe();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return R.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||R.comparator(e.key,n.key)}}/**
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
 */class rC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ge($e.ts)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rl(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),y.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;R.isDocumentKey(i)||(i=i.child(""));const o=new $e(new R(i),0);let a=new ge(ne);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ls)),!0)},o),y.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Z(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return y.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new $e(n,0),s=this.ds.firstAfterOrEqual(r);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sC{constructor(e){this.ps=e,this.docs=new Me(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let r=bt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),y.resolve(r)}getAllFromCollection(e,n,r){let s=bt();const i=new R(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Cl(km(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(e,n,r,s){$()}Is(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iC(this)}getSize(e){return y.resolve(this.size)}}class iC extends Ty{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class oC{constructor(e){this.persistence=e,this.Ts=new Kn(n=>wr(n),Li),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Es=0,this.As=new Ll,this.targetCount=0,this.Rs=Er.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),y.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Er(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.vn(n),y.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.As.containsKey(n))}}/**
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
 */class Ay{constructor(e,n){this.bs={},this.overlays={},this.Ps=new xt(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new oC(this),this.indexManager=new zS,this.remoteDocumentCache=function(r){return new sC(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new vy(n),this.Ds=new tC(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new rC(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const s=new aC(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return y.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class aC extends Nm{constructor(e){super(),this.currentSequenceNumber=e}}class Ba{constructor(e){this.persistence=e,this.ks=new Ll,this.Os=null}static Ms(e){return new Ba(e)}get Fs(){if(this.Os)return this.Os;throw $()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),y.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Fs,r=>{const s=R.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return y.or([()=>y.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class cC{constructor(e){this.wt=e}O(e,n,r,s){const i=new Ra("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jd,{unique:!0}),a.createObjectStore("documentMutations")}(e),gf(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),gf(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").K().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jd,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return y.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Bs(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(i)))),r<7&&s>=7&&(o=o.next(()=>this.Us(i))),r<8&&s>=8&&(o=o.next(()=>this.qs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Ks(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:OS});c.createIndex("collectionPathOverlayIndex",PS,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",MS,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:ES});c.createIndex("documentKeyIndex",_S),c.createIndex("collectionGroupIndex",TS)}(e)).next(()=>this.Gs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.Qs(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:kS}).createIndex("sequenceNumberIndex",DS,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:NS}).createIndex("documentKeyIndex",RS,{unique:!1})}(e))),o}Ls(e){let n=0;return e.store("remoteDocuments").J((r,s)=>{n+=Xo(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Bs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.K().next(s=>y.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.K("userMutationsIndex",o).next(a=>y.forEach(a,c=>{Z(c.userId===i.userId);const u=tr(this.wt,c);return Iy(e,i.userId,u).next(()=>{})}))}))}Us(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const c=new pe(o),u=function(l){return[0,ot(l)]}(c);i.push(n.get(u).next(l=>l?y.resolve():(h=>n.put({targetId:0,path:ot(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(i))})}qs(e,n){e.createObjectStore("collectionParents",{keyPath:xS});const r=n.store("collectionParents"),s=new Ml,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:ot(c)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const c=new pe(o);return i(c.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,c],u)=>{const l=Kt(a);return i(l.popLast())}))}Ks(e){const n=e.store("targets");return n.J((r,s)=>{const i=Ms(s),o=wy(this.wt,i);return n.put(o)})}Gs(e,n){const r=n.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new R(pe.fromString(u.document.name).popFirst(5)):u.noDocument?R.fromSegments(u.noDocument.path):u.unknownDocument?R.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>y.waitFor(s))}Qs(e,n){const r=n.store("mutations"),s=Sy(this.wt),i=new Ay(Ba.Ms,this.wt.ne);return r.K().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:oe();tr(this.wt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new nt(u),h=Va.se(this.wt,l),d=i.getIndexManager(l),p=Ua.se(l,this.wt,d,i.referenceDelegate);return new Cy(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new mu(n,xt.ot),c).next()})})}}function gf(t){t.createObjectStore("targetDocuments",{keyPath:CS}).createIndex("documentTargetsIndex",AS,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",SS,{unique:!0}),t.createObjectStore("targetGlobal")}const wc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fl{constructor(e,n,r,s,i,o,a,c,u,l,h=14){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.js=i,this.window=o,this.document=a,this.Ws=u,this.zs=l,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=d=>Promise.resolve(),!Fl.V())throw new M(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new YS(this,s),this.ei=n+"main",this.wt=new vy(c),this.ni=new nn(this.ei,this.Hs,new cC(this.wt)),this.Vs=new GS(this.referenceDelegate,this.wt),this.remoteDocumentCache=Sy(this.wt),this.Ds=new US,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,l===!1&&ht("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(b.FAILED_PRECONDITION,wc);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Vs.getHighestSequenceNumber(e))}).then(e=>{this.Ps=new xt(e,this.Ws)}).then(()=>{this.vs=!0}).catch(e=>(this.ni&&this.ni.close(),Promise.reject(e)))}ci(e){return this.ti=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>oo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(e).next(n=>{n||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(e)).next(n=>this.isPrimary&&!n?this.li(e).next(()=>!1):!!n&&this.fi(e).next(()=>!0))).catch(e=>{if(jn(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.js.enqueueRetryable(()=>this.ti(e)),this.isPrimary=e})}ai(e){return Ds(e).get("owner").next(n=>y.resolve(this.di(n)))}_i(e){return oo(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=He(n,"clientMetadata");return r.K().next(s=>{const i=this.gi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.si)for(const n of e)this.si.removeItem(this.yi(n.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?y.resolve(!0):Ds(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)){if(this.di(n)&&this.networkEnabled)return!0;if(!this.di(n)){if(!n.allowTabSynchronization)throw new M(b.FAILED_PRECONDITION,wc);return!1}}return!(!this.networkEnabled||!this.inForeground)||oo(e).K().next(r=>this.gi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new mu(e,xt.ot);return this.li(n).next(()=>this._i(n))}),this.ni.close(),this.Ai()}gi(e,n){return e.filter(r=>this.mi(r.updateTimeMs,n)&&!this.pi(r.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",e=>oo(e).K().next(n=>this.gi(n,18e5).map(r=>r.clientId)))}get started(){return this.vs}getMutationQueue(e,n){return Ua.se(e,this.wt,n,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new HS(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Va.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.Hs)===15?FS:o===14?yy:o===13?my:o===12?LS:o===11?gy:void $();var o;let a;return this.ni.runTransaction(e,s,i,c=>(a=new mu(c,this.Ps?this.Ps.next():xt.ot),n==="readwrite-primary"?this.ai(a).next(u=>!!u||this.hi(a)).next(u=>{if(!u)throw ht(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new M(b.FAILED_PRECONDITION,Dm);return r(a)}).next(u=>this.fi(a).next(()=>u)):this.bi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}bi(e){return Ds(e).get("owner").next(n=>{if(n!==null&&this.mi(n.leaseTimestampMs,5e3)&&!this.pi(n.ownerId)&&!this.di(n)&&!(this.zs||this.allowTabSynchronization&&n.allowTabSynchronization))throw new M(b.FAILED_PRECONDITION,wc)})}fi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ds(e).put("owner",n)}static V(){return nn.V()}li(e){const n=Ds(e);return n.get("owner").next(r=>this.di(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):y.resolve())}mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ht(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground=this.document.visibilityState==="visible")}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Js=()=>{this.Ii(),KI()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var n;try{const r=((n=this.si)===null||n===void 0?void 0:n.getItem(this.yi(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ht("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){ht("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch{}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ds(t){return He(t,"owner")}function oo(t){return He(t,"clientMetadata")}function uC(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,n.fromCache,r,s)}}/**
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
 */class xy{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){return y.resolve(null)}xi(e,n,r,s){return jT(n)||s.isEqual(Q.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,r,s)?this.Ni(e,n):(cu()<=he.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),du(n)),this.Mi(e,o,n,IT(s,-1)))})}ki(e,n){let r=new ge(jm(e));return n.forEach((s,i)=>{kl(e,i)&&(r=r.add(i))}),r}Oi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return cu()<=he.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",du(n)),this.Di.getDocumentsMatchingQuery(e,n,Tt.min())}Mi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class lC{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Me(ne),this.Bi=new Kn(i=>wr(i),Li),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cy(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function ky(t,e,n,r){return new lC(t,e,n,r)}async function Dy(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function hC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const I=c.docVersions.get(p);Z(I!==null),m.version.compareTo(I)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ny(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function dC(t,e){const n=te(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ze.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(m,I,w){return m.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,l)&&a.push(n.Vs.updateTargetData(i,p))});let c=bt(),u=oe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(fC(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!r.isEqual(Q.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=s,i))}function fC(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function pC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Rn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function yu(t,e,n){const r=te(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jn(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function mf(t,e,n){const r=te(t);let s=Q.min(),i=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=te(a),h=l.Bi.get(u);return h!==void 0?y.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(r,o,un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:oe())).next(a=>(mC(r,KT(e),a),{documents:a,ji:i})))}function mC(t,e,n){let r=Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class yf{constructor(){this.activeTargetIds=ny()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ry{constructor(){this.Fr=new yf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new yf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yC{Br(e){}shutdown(){}}/**
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
 */class vf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class wC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class bC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);A("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(A("RestConnection","Received: ",c),c),c=>{throw kd("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=vC[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new lT;a.listenOnce(aT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yc.NO_ERROR:const u=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(u)),i(u);break;case yc.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new M(b.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const l=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(b.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=iT(),o=oT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new uT({})),this.uo(a.initMessageHeaders,n,r),gg()||yg()||jI()||vg()||qI()||mg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");A("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new wC({jr:m=>{h?A("Connection","Not sending because WebChannel is closed:",m):(l||(A("Connection","Opening WebChannel transport."),u.open(),l=!0),A("Connection","WebChannel sending:",m),u.send(m))},Wr:()=>u.close()}),p=(m,I,w)=>{m.listen(I,S=>{try{w(S)}catch(O){setTimeout(()=>{throw O},0)}})};return p(u,to.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),p(u,to.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.eo())}),p(u,to.EventType.ERROR,m=>{h||(h=!0,kd("Connection","WebChannel transport errored:",m),d.eo(new M(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,to.EventType.MESSAGE,m=>{var I;if(!h){const w=m.data[0];Z(!!w);const S=w,O=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(O){A("Connection","WebChannel received error:",O);const V=O.status;let K=function(W){const z=Re[W];if(z!==void 0)return Jm(z)}(V),q=O.message;K===void 0&&(K=b.INTERNAL,q="Unknown error status: "+V+" with message "+O.message),h=!0,d.eo(new M(K,q)),u.close()}else A("Connection","WebChannel received:",w),d.no(w)}}),p(o,cT.STAT_EVENT,m=>{m.stat===Ad.PROXY?A("Connection","Detected buffering proxy"):m.stat===Ad.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
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
 */function IC(){return typeof window!="undefined"?window:null}function bo(){return typeof document!="undefined"?document:null}/**
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
 */function $a(t){return new uS(t,!0)}class Oy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&A("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Py{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Oy(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new M(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EC extends Py{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=dS(this.wt,e),r=function(s){if(!("targetChange"in s))return Q.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?It(i.readTime):Q.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=pu(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=zo(a)?{documents:uy(s,a)}:{query:ly(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=iy(s,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=bi(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=pS(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=pu(this.wt),n.removeTarget=e,this.Mo(n)}}class _C extends Py{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=fS(e.writeResults,e.commitTime),r=It(e.commitTime);return this.listener.Jo(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=pu(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Wo(this.wt,r))};this.Mo(n)}}/**
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
 */class TC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(b.UNKNOWN,s.toString())})}ao(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(b.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class SC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ht(n),this.su=!1):A("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class CC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.lu.add(4),await Ui(c),c._u.set("Unknown"),c.lu.delete(4),await ja(c)}(this))})}),this._u=new SC(r,s)}}async function ja(t){if(Ar(t))for(const e of t.fu)await e(!0)}async function Ui(t){for(const e of t.fu)await e(!1)}function My(t,e){const n=te(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),$l(n)?Bl(n):Is(n).Co()&&Ul(n,e))}function Ly(t,e){const n=te(t),r=Is(n);n.hu.delete(e),r.Co()&&Fy(n,e),n.hu.size===0&&(r.Co()?r.ko():Ar(n)&&n._u.set("Unknown"))}function Ul(t,e){t.wu.Nt(e.targetId),Is(t).Qo(e)}function Fy(t,e){t.wu.Nt(e),Is(t).jo(e)}function Bl(t){t.wu=new oS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Is(t).start(),t._u.iu()}function $l(t){return Ar(t)&&!Is(t).Do()&&t.hu.size>0}function Ar(t){return te(t).lu.size===0}function Vy(t){t.wu=void 0}async function AC(t){t.hu.forEach((e,n)=>{Ul(t,e)})}async function xC(t,e){Vy(t),$l(t)?(t._u.uu(e),Bl(t)):t._u.set("Unknown")}async function kC(t,e,n){if(t._u.set("Online"),e instanceof sy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yo(t,r)}else if(e instanceof vo?t.wu.Ut(e):e instanceof ry?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Q.min()))try{const r=await Ny(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.hu.get(c);u&&s.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(ze.EMPTY_BYTE_STRING,c.snapshotVersion)),Fy(s,a);const u=new Rn(c.target,a,1,c.sequenceNumber);Ul(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await Yo(t,r)}}async function Yo(t,e,n){if(!jn(e))throw e;t.lu.add(1),await Ui(t),t._u.set("Offline"),n||(n=()=>Ny(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ja(t)})}function Uy(t,e){return e().catch(n=>Yo(t,n,e))}async function Bi(t){const e=te(t),n=Un(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;DC(e);)try{const s=await pC(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,NC(e,s)}catch(s){await Yo(e,s)}By(e)&&$y(e)}function DC(t){return Ar(t)&&t.au.length<10}function NC(t,e){t.au.push(e);const n=Un(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function By(t){return Ar(t)&&!Un(t).Do()&&t.au.length>0}function $y(t){Un(t).start()}async function RC(t){Un(t).Xo()}async function OC(t){const e=Un(t);for(const n of t.au)e.Ho(n.mutations)}async function PC(t,e,n){const r=t.au.shift(),s=Ol.from(r,e,n);await Uy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Bi(t)}async function MC(t,e){e&&Un(t).zo&&await async function(n,r){if(s=r.code,tS(s)&&s!==b.ABORTED){const i=n.au.shift();Un(n).No(),await Uy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Bi(n)}var s}(t,e),By(t)&&$y(t)}async function wf(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.lu.add(3),await Ui(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ja(n)}async function LC(t,e){const n=te(t);e?(n.lu.delete(2),await ja(n)):e||(n.lu.add(2),await Ui(n),n._u.set("Unknown"))}function Is(t){return t.mu||(t.mu=function(e,n,r){const s=te(e);return s.tu(),new EC(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:AC.bind(null,t),Jr:xC.bind(null,t),Go:kC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),$l(t)?Bl(t):t._u.set("Unknown")):(await t.mu.stop(),Vy(t))})),t.mu}function Un(t){return t.gu||(t.gu=function(e,n,r){const s=te(e);return s.tu(),new _C(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:RC.bind(null,t),Jr:MC.bind(null,t),Yo:OC.bind(null,t),Jo:PC.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Bi(t)):(await t.gu.stop(),t.au.length>0&&(A("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new jl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(t,e){if(ht("AsyncQueue",`${e}: ${t}`),jn(t))return new M(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||R.comparator(n.key,r.key):(n,r)=>R.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bf{constructor(){this.yu=new Me(R.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):$():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new as(e,n,Hr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class FC{constructor(){this.Iu=void 0,this.listeners=[]}}class VC{constructor(){this.queries=new Kn(e=>$m(e),Pa),this.onlineState="Unknown",this.Tu=new Set}}async function UC(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new FC),s)try{i.Iu=await n.onListen(r)}catch(o){const a=ql(o,`Initialization of query '${du(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Kl(n)}async function BC(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function $C(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Kl(n)}function jC(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Kl(t){t.Tu.forEach(e=>{e.next()})}class qC{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class jy{constructor(e){this.key=e}}class qy{constructor(e){this.key=e}}class KC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=oe(),this.mutatedKeys=oe(),this.Lu=jm(e),this.Uu=new Hr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new bf,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=kl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==I&&(r.track({type:3,doc:p}),w=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.Lu(p,c)>0||u&&this.Lu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(p?(o=o.add(p),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new as(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new bf,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=oe(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new qy(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new jy(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=oe();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return as.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class zC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HC{constructor(e){this.key=e,this.Xu=!1}}class GC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Kn(a=>$m(a),Pa),this.ec=new Map,this.nc=new Set,this.sc=new Me(R.comparator),this.ic=new Map,this.rc=new Ll,this.oc={},this.uc=new Map,this.cc=Er.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function WC(t,e){const n=sA(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await gC(n.localStore,un(e));n.isPrimaryClient&&My(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await QC(n,e,r,a==="current")}return s}async function QC(t,e,n,r){t.hc=(l,h,d)=>async function(p,m,I,w){let S=m.view.Ku(I);S.Oi&&(S=await mf(p.localStore,m.query,!1).then(({documents:K})=>m.view.Ku(K,S)));const O=w&&w.targetChanges.get(m.targetId),V=m.view.applyChanges(S,p.isPrimaryClient,O);return Ef(p,m.targetId,V.zu),V.snapshot}(t,l,h,d);const s=await mf(t.localStore,e,!0),i=new KC(e,s.ji),o=i.Ku(s.documents),a=Vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Ef(t,n,c.zu);const u=new zC(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function XC(t,e){const n=te(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Pa(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ly(n.remoteStore,r.targetId),vu(n,r.targetId)}).catch(Cr)):(vu(n,r.targetId),await yu(n.localStore,r.targetId,!0))}async function YC(t,e,n){const r=Wy(t);try{const s=await function(i,o){const a=te(i),c=xe.now(),u=o.reduce((d,p)=>d.add(p.key),oe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=bt(),m=oe();return a.Ui.getEntries(d,u).next(I=>{p=I,p.forEach((w,S)=>{S.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(I=>{l=I;const w=[];for(const S of o){const O=ZT(S,l.get(S.key).overlayedDocument);O!=null&&w.push(new qn(S.key,O,Lm(O.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(I=>{h=I;const w=I.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,I.batchId,w)})}).then(()=>({batchId:h.batchId,changes:ey(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Me(ne)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await $i(r,s.changes),await Bi(r.remoteStore)}catch(s){const i=ql(s,"Failed to persist write");n.reject(i)}}async function Ky(t,e){const n=te(t);try{const r=await dC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?Z(o.Xu):s.removedDocuments.size>0&&(Z(o.Xu),o.Xu=!1))}),await $i(n,r,e)}catch(r){await Cr(r)}}function If(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Kl(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JC(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Me(R.comparator);o=o.insert(i,Ae.newNoDocument(i,Q.min()));const a=oe().add(i),c=new Fa(Q.min(),new Map,new ge(ne),o,a);await Ky(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),zl(r)}else await yu(r.localStore,e,!1).then(()=>vu(r,e,n)).catch(Cr)}async function ZC(t,e){const n=te(t),r=e.batch.batchId;try{const s=await hC(n.localStore,e);Hy(n,r,null),zy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $i(n,s)}catch(s){await Cr(s)}}async function eA(t,e,n){const r=te(t);try{const s=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Z(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Hy(r,e,n),zy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $i(r,s)}catch(s){await Cr(s)}}function zy(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Hy(t,e,n){const r=te(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Gy(t,r)})}function Gy(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ly(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),zl(t))}function Ef(t,e,n){for(const r of n)r instanceof jy?(t.rc.addReference(r.key,e),tA(t,r)):r instanceof qy?(A("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Gy(t,r.key)):$()}function tA(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(A("SyncEngine","New document in limbo: "+n),t.nc.add(r),zl(t))}function zl(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new R(pe.fromString(e)),r=t.cc.next();t.ic.set(r,new HC(n)),t.sc=t.sc.insert(n,r),My(t.remoteStore,new Rn(un(xl(n.path)),r,2,xt.ot))}}async function $i(t,e,n){const r=te(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=Vl.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const u=te(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!jn(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.$i.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(h,m)}}}(r.localStore,i))}async function nA(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await Dy(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(b.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $i(n,r.Ki)}}function rA(t,e){const n=te(t),r=n.ic.get(e);if(r&&r.Xu)return oe().add(r.key);{let s=oe();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function sA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JC.bind(null,e),e.Zu.Go=$C.bind(null,e.eventManager),e.Zu.lc=jC.bind(null,e.eventManager),e}function Wy(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eA.bind(null,e),e}class Qy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=$a(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return ky(this.persistence,new xy,e.initialUser,this.wt)}_c(e){return new Ay(Ba.Ms,this.wt)}dc(e){return new Ry}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iA extends Qy{constructor(e,n,r){super(),this.yc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Wy(this.yc.syncEngine),await Bi(this.yc.remoteStore),await this.persistence.ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wc(e){return ky(this.persistence,new xy,e.initialUser,this.wt)}mc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new QS(r,e.asyncQueue,n)}gc(e,n){const r=new ST(n,this.persistence);return new TT(e.asyncQueue,r)}_c(e){const n=uC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Fl(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,IC(),bo(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new Ry}}class Xy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>If(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nA.bind(null,this.syncEngine),await LC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VC}createDatastore(e){const n=$a(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new bC(s));var s;return function(i,o,a,c){return new TC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>If(this.syncEngine,a,0),o=vf.V()?new vf:new yC,new CC(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new GC(r,s,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);A("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ui(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class oA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class aA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Cm.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ql(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cA(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>wf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>wf(e.remoteStore,i)),t.onlineComponents=e}async function cA(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await Yy(t,new Qy)),t.offlineComponents}async function Zy(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await Jy(t,new Xy)),t.onlineComponents}function uA(t){return Zy(t).then(e=>e.syncEngine)}async function lA(t){const e=await Zy(t),n=e.eventManager;return n.onListen=WC.bind(null,e.syncEngine),n.onUnlisten=XC.bind(null,e.syncEngine),n}function hA(t,e,n={}){const r=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new oA({next:h=>{i.enqueueAndForget(()=>BC(s,l)),h.fromCache&&a.source==="server"?c.reject(new M(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new qC(o,u,{includeMetadataChanges:!0,Du:!0});return UC(s,l)}(await lA(t),t.asyncQueue,e,n,r)),r.promise}const _f=new Map;/**
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
 */function ev(t,e,n){if(!n)throw new M(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dA(t,e,n,r){if(e===!0&&r===!0)throw new M(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!R.isDocumentKey(t))throw new M(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(R.isDocumentKey(t))throw new M(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Jo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qa(t);throw new M(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Hl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1,e instanceof Fn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new M(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(s.options.projectId)}(e))}get app(){if(!this._app)throw new M(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dT;switch(n.type){case"gapi":const r=n.client;return Z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new gT(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_f.get(e);n&&(A("ComponentProvider","Removing Datastore"),_f.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class On extends ji{constructor(e,n,r){super(e,n,xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new R(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Af(t,e,...n){if(t=Qt(t),ev("collection","path",e),t instanceof Hl){const r=pe.fromString(e,...n);return Sf(r),new On(t,null,r)}{if(!(t instanceof Nt||t instanceof On))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Sf(r),new On(t.firestore,null,r)}}function fA(t,e,...n){if(t=Qt(t),arguments.length===1&&(e=Cm.I()),ev("doc","path",e),t instanceof Hl){const r=pe.fromString(e,...n);return Tf(r),new Nt(t,null,new R(r))}{if(!(t instanceof Nt||t instanceof On))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Tf(r),new Nt(t.firestore,t instanceof On?t.converter:null,new R(r))}}/**
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
 */class pA{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Oy(this,"async_queue_retry"),this.Kc=()=>{const n=bo();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=bo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=bo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new zt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!jn(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ht("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=jl.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&$()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ka extends Hl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new pA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||tv(this),this._firestoreClient.terminate()}}function gA(t=_g()){return el(t,"firestore").getImmediate()}function Gl(t){return t._firestoreClient||tv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tv(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new AT(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aA(t._authCredentials,t._appCheckCredentials,t._queue,r)}function mA(t,e){vA(t=Jo(t,Ka));const n=Gl(t),r=t._freezeSettings(),s=new Xy;return yA(n,s,new iA(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function yA(t,e,n){const r=new zt;return t.asyncQueue.enqueue(async()=>{try{await Yy(t,n),await Jy(t,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function vA(t){if(t._initialized||t._terminated)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(ze.fromBase64String(e))}catch(n){throw new M(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nv{constructor(e){this._methodName=e}}/**
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
 */class Ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const wA=/^__.*__$/;class bA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new bs(e,this.data,n,this.fieldTransforms)}}function rv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Xl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Zo(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(rv(this.Zc)&&wA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class IA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||$a(e)}aa(e,n,r,s=!1){return new Xl({Zc:e,methodName:n,ca:r,path:Oe.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function sv(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new IA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EA(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);av("Data must be an object, but it was:",o,r);const a=iv(r,o);let c,u;if(i.merge)c=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=TA(e,h,n);if(!o.contains(d))throw new M(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);CA(l,d)||l.push(d)}c=new Vt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bA(new dt(a),c,u)}function _A(t,e,n,r=!1){return Yl(n,t.aa(r?4:3,e))}function Yl(t,e){if(ov(t=Qt(t)))return av("Unsupported field value:",e,t),iv(t,e);if(t instanceof nv)return function(n,r){if(!rv(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Yl(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HT(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=xe.fromDate(n);return{timestampValue:bi(r.wt,s)}}if(n instanceof xe){const s=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bi(r.wt,s)}}if(n instanceof Ql)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cs)return{bytesValue:iy(r.wt,n._byteString)};if(n instanceof Nt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${qa(n)}`)}(t,e)}function iv(t,e){const n={};return Rm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,s)=>{const i=Yl(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ov(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Ql||t instanceof cs||t instanceof Nt||t instanceof nv)}function av(t,e,n){if(!ov(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=qa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function TA(t,e,n){if((e=Qt(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return cv(t,e);throw Zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const SA=new RegExp("[~\\*/\\[\\]]");function cv(t,e,n){if(e.search(SA)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(b.INVALID_ARGUMENT,a+t+c)}function CA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AA extends uv{data(){return super.data()}}function Jl(t,e){return typeof e=="string"?cv(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
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
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xA extends uv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Io extends xA{data(e={}){return super.data(e)}}class kA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Io(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:DA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function NA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RA{}function xf(t,...e){for(const n of e)t=n._apply(t);return t}class OA extends RA{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=sv(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Df(l,u);const p=[];for(const m of l)p.push(kf(a,s,m));h={arrayValue:{values:p}}}else h=kf(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Df(l,u),h=_A(o,i,l,u==="in"||u==="not-in");const d=We.create(c,u,h);return function(p,m){if(m.ht()){const w=Um(p);if(w!==null&&!w.isEqual(m.field))throw new M(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const S=Vm(p);S!==null&&MA(p,m.field,S)}const I=function(w,S){for(const O of w.filters)if(S.indexOf(O.op)>=0)return O.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(I!==null)throw I===m.op?new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${I.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new ji(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Fi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function PA(t,e,n){const r=e,s=Jl("where",t);return new OA(s,r,n)}function kf(t,e,n){if(typeof(n=Qt(n))=="string"){if(n==="")throw new M(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bm(e)&&n.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!R.isDocumentKey(r))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gi(t,new R(r))}if(n instanceof Nt)return gi(t,n._key);throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qa(n)}.`)}function Df(t,e){if(!Array.isArray(t)||t.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function MA(t,e,n){if(!n.isEqual(e))throw new M(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class LA{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return ws(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ql(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);Z(fy(r));const s=new Fn(r.get(1),r.get(3)),i=new R(r.popFirst(5));return s.isEqual(n)||ht(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function FA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class VA extends LA{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Nf(t){t=Jo(t,ji);const e=Jo(t.firestore,Ka),n=Gl(e),r=new VA(e);return NA(t._query),hA(n,t._query).then(s=>new kA(e,r,t,s))}function sD(t,e){const n=Jo(t.firestore,Ka),r=fA(t),s=FA(t.converter,e);return UA(n,[EA(sv(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function UA(t,e){return function(n,r){const s=new zt;return n.asyncQueue.enqueueAndForget(async()=>YC(await uA(n),r,s)),s.promise}(Gl(t),e)}(function(t,e=!0){(function(n){vs=n})(Ci),ts(new dr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Ka(s,new fT(n.getProvider("auth-internal")),new yT(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Nn(xd,"3.4.10",t),Nn(xd,"3.4.10","esm2017")})();var BA="firebase",$A="9.8.3";/**
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
 */Nn(BA,$A,"app");function Zl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function lv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=lv,hv=new Ti("auth","Firebase",lv());/**
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
 */const Rf=new Yu("@firebase/auth");function Eo(t,...e){Rf.logLevel<=he.ERROR&&Rf.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw eh(t,...e)}function Ht(t,...e){return eh(t,...e)}function dv(t,e,n){const r=Object.assign(Object.assign({},jA()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function qA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),dv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hv.create(t,...e)}function ee(t,e,...n){if(!t)throw eh(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function ln(t,e){t||rn(e)}/**
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
 */const Of=new Map;function sn(t){ln(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
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
 */function KA(t,e){const n=el(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oo(i,e!=null?e:{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function wu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function GA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||mg()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=gg()||yg()}get(){return GA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function th(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const XA=new qi(3e4,6e4);function YA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function za(t,e,n,r,s={}){return pv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Si(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fv.fetch()(gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},QA),e);try{const s=new ZA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dv(t,l,u);Yt(t,l)}}catch(s){if(s instanceof Tr)throw s;Yt(t,"network-request-failed")}}async function JA(t,e,n,r,s={}){const i=await za(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?th(t.config,s):`${t.config.apiScheme}://${s}`}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),XA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ht(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ex(t,e){return za(t,"POST","/v1/accounts:delete",e)}async function tx(t,e){return za(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nx(t,e=!1){const n=Qt(t),r=await n.getIdToken(e),s=nh(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(bc(s.auth_time)),issuedAtTime:Xs(bc(s.iat)),expirationTime:Xs(bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=UI(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s),null}}function rx(t){const e=nh(t);return ee(e,"internal-error"),ee(typeof e.exp!="undefined","internal-error"),ee(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tr&&sx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ix{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ii(t,tx(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cx(i.providerUserInfo):[],a=ax(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mv(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function ox(t){const e=Qt(t);await ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ax(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cx(t){return t.map(e=>{var{providerId:n}=e,r=Zl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ux(t,e){const n=await pv(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken!="undefined","internal-error"),ee(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):rx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ux(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function mn(t,e){ee(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ix(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nx(this,e)}reload(){return ox(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ii(this,ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:K,isAnonymous:q,providerData:W,stsTokenManager:z}=n;ee(V&&z,e,"internal-error");const L=Ei.fromJSON(this.name,z);ee(typeof V=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),ee(typeof K=="boolean",e,"internal-error"),ee(typeof q=="boolean",e,"internal-error"),mn(p,e.name),mn(m,e.name),mn(I,e.name),mn(w,e.name),mn(S,e.name),mn(O,e.name);const ie=new hr({uid:V,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:L,createdAt:S,lastLoginAt:O});return W&&Array.isArray(W)&&(ie.providerData=W.map(fe=>Object.assign({},fe))),w&&(ie._redirectEventId=w),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ea(i),i}}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const Mf=yv;/**
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
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_o(this.userKey,s.apiKey,i),this.fullPersistenceKey=_o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(sn(Mf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||sn(Mf);const o=_o(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=hr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Gr(i,e,r))}}/**
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
 */function Lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ev(e))return"Blackberry";if(_v(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||wv(e))&&!e.includes("edge/"))return"Chrome";if(Iv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vv(t=Ne()){return/firefox\//i.test(t)}function rh(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wv(t=Ne()){return/crios\//i.test(t)}function bv(t=Ne()){return/iemobile/i.test(t)}function Iv(t=Ne()){return/android/i.test(t)}function Ev(t=Ne()){return/blackberry/i.test(t)}function _v(t=Ne()){return/webos/i.test(t)}function Ha(t=Ne()){return/iphone|ipad|ipod/i.test(t)}function lx(t=Ne()){var e;return Ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hx(){return vg()&&document.documentMode===10}function Tv(t=Ne()){return Ha(t)||Iv(t)||_v(t)||Ev(t)||/windows phone/i.test(t)||bv(t)}function dx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sv(t,e=[]){let n;switch(t){case"Browser":n=Lf(Ne());break;case"Worker":n=`${Lf(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
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
 */class fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class px{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ff(this),this.idTokenSubscription=new Ff(this),this.beforeStateQueue=new fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ea(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function sh(t){return Qt(t)}class Ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Cv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
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
 */async function Wr(t,e){return JA(t,"POST","/v1/accounts:signInWithIdp",YA(t,e))}/**
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
 */const gx="http://localhost";class _r extends Cv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:gx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
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
 */class ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends Ki{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class En extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class _n extends Ki{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */class Tn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=Vf(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vf(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ta extends Tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ta(e,n,r,s)}}function Av(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ta._fromErrorAndOperation(t,i,e,r):i})}async function mx(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function yx(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ii(t,Av(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=nh(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function vx(t,e,n=!1){const r="signIn",s=await Av(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const na="__sak";/**
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
 */class xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wx(){const t=Ne();return rh(t)||Ha(t)}const bx=1e3,Ix=10;class kv extends xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wx()&&dx(),this.fallbackToPolling=Tv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ix):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const Ex=kv;/**
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
 */class Dv extends xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dv.type="SESSION";const Nv=Dv;/**
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
 */function _x(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await _x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
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
 */function oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=oh("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function Sx(t){Gt().location.href=t}/**
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
 */function Rv(){return typeof Gt().WorkerGlobalScope!="undefined"&&typeof Gt().importScripts=="function"}async function Cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ax(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xx(){return Rv()?self:null}/**
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
 */const Ov="firebaseLocalStorageDb",kx=1,ra="firebaseLocalStorage",Pv="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function Dx(){const t=indexedDB.deleteDatabase(Ov);return new zi(t).toPromise()}function bu(){const t=indexedDB.open(Ov,kx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ra,{keyPath:Pv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ra)?e(r):(r.close(),await Dx(),e(await bu()))})})}async function Uf(t,e,n){const r=Wa(t,!0).put({[Pv]:e,value:n});return new zi(r).toPromise()}async function Nx(t,e){const n=Wa(t,!1).get(e),r=await new zi(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=Wa(t,!0).delete(e);return new zi(n).toPromise()}const Rx=800,Ox=3;class Mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ox)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(xx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cx(),!this.activeServiceWorker)return;this.sender=new Tx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ax()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await Uf(e,na,"1"),await Bf(e,na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wa(s,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mv.type="LOCAL";const Px=Mv;/**
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
 */function Mx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Lx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Mx().appendChild(r)})}function Fx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qi(3e4,6e4);/**
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
 */function Lv(t,e){return e?sn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ah extends Cv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vx(t){return vx(t.auth,new ah(t),t.bypassAuthState)}function Ux(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),yx(n,new ah(t),t.bypassAuthState)}async function Bx(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),mx(n,new ah(t),t.bypassAuthState)}/**
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
 */class Fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vx;case"linkViaPopup":case"linkViaRedirect":return Bx;case"reauthViaPopup":case"reauthViaRedirect":return Ux;default:Yt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $x=new qi(2e3,1e4);async function iD(t,e,n){const r=sh(t);qA(t,e,ih);const s=Lv(r,n);return new ar(r,"signInViaPopup",e,s).executeNotNull()}class ar extends Fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$x.get())};e()}}ar.currentPopupAction=null;/**
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
 */const jx="pendingRedirect",To=new Map;class qx extends Fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await Kx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kx(t,e){const n=Gx(e),r=Hx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zx(t,e){To.set(t._key(),e)}function Hx(t){return sn(t._redirectPersistence)}function Gx(t){return _o(jx,t.config.apiKey,t.name)}async function Wx(t,e,n=!1){const r=sh(t),s=Lv(r,e),o=await new qx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qx=10*60*1e3;class Xx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qx&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vv(t);default:return!1}}/**
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
 */async function Jx(t,e={}){return za(t,"GET","/v1/projects",e)}/**
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
 */const Zx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jx(t);for(const n of e)try{if(nk(n))return}catch{}Yt(t,"unauthorized-domain")}function nk(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ek.test(n))return!1;if(Zx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rk=new qi(3e4,6e4);function jf(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sk(t){return new Promise((e,n)=>{var r,s,i;function o(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(Ht(t,"network-request-failed"))},timeout:rk.get()})}if(!((s=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=Fx("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},Lx(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw So=null,e})}let So=null;function ik(t){return So=So||sk(t),So}/**
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
 */const ok=new qi(5e3,15e3),ak="__/auth/iframe",ck="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?th(e,ck):`https://${t.config.authDomain}/${ak}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},s=lk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Si(r).slice(1)}`}async function dk(t){const e=await ik(t),n=Gt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},ok.get());function c(){Gt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,gk=600,mk="_blank",yk="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vk(t,e,n,r=pk,s=gk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fk),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ne().toLowerCase();n&&(a=wv(u)?mk:n),vv(u)&&(e=e||yk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(lx(u)&&a!=="_self")return wk(e||"",a),new qf(null);const h=window.open(e||"",a,l);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new qf(h)}function wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bk="__/auth/handler",Ik="emulator/auth/handler";function Kf(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:s};if(e instanceof ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ki){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ek(t)}?${Si(a).slice(1)}`}function Ek({config:t}){return t.emulator?th(t,Ik):`https://${t.authDomain}/${bk}`}/**
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
 */const Ic="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=Wx,this._overrideRedirectResult=zx}async _openPopup(e,n,r,s){var i;ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Kf(e,n,r,wu(),s);return vk(e,o,oh())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Sx(Kf(e,n,r,wu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dk(e),r=new Xx(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tv()||rh()||Ha()}}const Tk=_k;var zf="@firebase/auth",Hf="0.20.3";/**
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
 */class Sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ak(t){ts(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(t)},l=new px(a,c,u);return zA(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new dr("auth-internal",e=>{const n=sh(e.getProvider("auth").getImmediate());return(r=>new Sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(zf,Hf,Ck(t)),Nn(zf,Hf,"esm2017")}/**
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
 */function xk(t=_g()){const e=el(t,"auth");return e.isInitialized()?e.getImmediate():KA(t,{popupRedirectResolver:Tk,persistence:[Px,Ex,Nv]})}Ak("Browser");function kk(t){return tw()?(nw(t),!0):!1}var Gf;const Hi=typeof window!="undefined",Dk=t=>typeof t=="string",Ec=()=>{};Hi&&((Gf=window==null?void 0:window.navigator)==null?void 0:Gf.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Nk(t){var e;const n=on(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Uv=Hi?window:void 0;Hi&&window.document;Hi&&window.navigator;Hi&&window.location;function _c(...t){let e,n,r,s;if(Dk(t[0])?([n,r,s]=t,e=Uv):[e,n,r,s]=t,!e)return Ec;let i=Ec;const o=Kr(()=>Nk(e),c=>{i(),c&&(c.addEventListener(n,r,s),i=()=>{c.removeEventListener(n,r,s),i=Ec})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return kk(a),a}const Iu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Eu="__vueuse_ssr_handlers__";Iu[Eu]=Iu[Eu]||{};Iu[Eu];function Rk(t={}){const{window:e=Uv}=t,n=e==null?void 0:e.navigator,r=Boolean(n&&"connection"in n),s=yt(!0),i=yt(!1),o=yt(void 0),a=yt(void 0),c=yt(void 0),u=yt(void 0),l=yt(void 0),h=yt(void 0),d=yt("unknown"),p=r&&n.connection;function m(){!n||(s.value=n.onLine,o.value=s.value?void 0:Date.now(),a.value=s.value?Date.now():void 0,p&&(c.value=p.downlink,u.value=p.downlinkMax,h.value=p.effectiveType,l.value=p.rtt,i.value=p.saveData,d.value=p.type))}return e&&(_c(e,"offline",()=>{s.value=!1,o.value=Date.now()}),_c(e,"online",()=>{s.value=!0,a.value=Date.now()})),p&&_c(p,"change",m,!1),m(),{isSupported:r,isOnline:s,saveData:i,offlineAt:o,onlineAt:a,downlink:c,downlinkMax:u,effectiveType:h,rtt:l,type:d}}var Wf;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Wf||(Wf={}));Rk();const Ok={apiKey:"AIzaSyAwLrq8bXpR7la5EhSEfCSMWxNpJNs1r14",authDomain:"leckerlog.firebaseapp.com",projectId:"leckerlog",storageBucket:"leckerlog.appspot.com",messagingSenderId:"218172068678",appId:"1:218172068678:web:9c6a1fd7066f0659b88b47"},Pk=QE(Ok),Mk=xk(),_u=gA(Pk);Mk.languageCode="de";mA(_u).catch(t=>{console.log(t.code),t.code=="failed-precondition"||t.code=="unimplemented"});const Lk=hg("food",{state:()=>({restaurants:[],foodOrdered:[],getFoodIsLoading:!0,getRestaurantsIsLoading:!0}),actions:{async getFoodOrdered(t){this.getFoodIsLoading=!0,this.foodOrdered=[];const e=Af(_u,`Restaurants/${t}/foodOrdered`),n=xf(e),r=await Nf(n),s=[];r.forEach(i=>{s.push(i.data())}),this.foodOrdered=s,this.getFoodIsLoading=!1},async getRestaurants(){this.getRestaurantsIsLoading=!0;const t=Qu(),e=xf(Af(_u,"Restaurants"),PA("userId","==",t.userId)),n=await Nf(e),r=[];n.forEach(s=>{r.push({...s.data(),restaurantId:s.id}),this.restaurants=r,this.getRestaurantsIsLoading=!1})}}}),Fk={key:0,class:"flex flex-col gap-4 m-auto p-2"},Vk=_i({__name:"DisplayRestaurants",setup(t){Qu();const e=Lk();return yt([]),Bu(async()=>{e.getRestaurants()}),(n,r)=>on(e).getRestaurantsIsLoading?(At(),Yr(LI,{key:1})):(At(),Xr("div",Fk,[(At(!0),Xr(lt,null,hb(on(e).restaurants,(s,i)=>(At(),Yr(RI,{key:`${i}-entry`,"lecker-log":s,"doc-id":s.restaurantId},null,8,["lecker-log","doc-id"]))),128))]))}}),Uk=[{path:"/",name:"Home",component:Vk},{path:"/login",name:"Login",component:()=>ec(()=>import("./Login.871729c6.js"),[])},{path:"/food/:id",name:"Food",component:()=>ec(()=>import("./DisplayFood.434c0abc.js"),[]),props:!0},{path:"/add",name:"AddFood",component:()=>ec(()=>import("./AddFood.758d6c41.js"),[])}],Bv=EI({history:V0(),routes:Uk});Bv.beforeEach(async(t,e)=>{const n=Qu();return t.name!=="Login"&&!n.isAuthenticated?{name:"Login"}:!0});const Bk={},$k={class:"w-full h-20 bg-gray-200 flex justify-around items-center"},jk=kn("button",{class:"p-2 cursor-pointer"},"Hinzuf\xFCgen",-1),qk=kn("button",{class:"p-2 cursor-pointer"},"Liste",-1);function Kk(t,e){const n=ju("router-link");return At(),Xr("footer",$k,[Ue(n,{to:{name:"AddFood"}},{default:ti(()=>[jk]),_:1}),Ue(n,{to:{name:"Home"}},{default:ti(()=>[qk]),_:1})])}var zk=Xu(Bk,[["render",Kk]]);const Hk={},Gk={class:"p-2 flex-col items-center justify-center"};function Wk(t,e){return At(),Xr("div",Gk,[db(t.$slots,"default")])}var Qk=Xu(Hk,[["render",Wk]]);const Xk={class:"h-[calc(100vh-5rem)] overflow-y-scroll"},Yk=_i({__name:"App",setup(t){const e=TI();return(n,r)=>{const s=ju("RouterView");return At(),Xr(lt,null,[kn("main",Xk,[Ue(Qk,null,{default:ti(()=>[Ue(s)]),_:1})]),on(e).name!=="Login"?(At(),Yr(zk,{key:0})):Pb("",!0)],64)}}});const Jk=CI();m0(Yk).use(Jk).use(Bv).mount("#app");export{nD as A,lt as F,En as G,PA as K,sD as T,xf as U,Af as V,eD as a,kn as b,Xr as c,_i as d,Ue as e,Qu as f,rD as g,Pt as h,Mk as i,Pb as j,hb as k,Yr as l,Lk as m,nb as n,At as o,ju as p,Zk as q,yt as r,iD as s,hh as t,on as u,tD as v,ti as w,_u as x,Nf as y,xe as z};
