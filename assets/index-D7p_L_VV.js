(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uu(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Be={},oi=[],Bt=()=>{},bE=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hu=t=>t.startsWith("onUpdate:"),it=Object.assign,fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},SE=Object.prototype.hasOwnProperty,we=(t,e)=>SE.call(t,e),ce=Array.isArray,ai=t=>La(t)==="[object Map]",v_=t=>La(t)==="[object Set]",he=t=>typeof t=="function",Je=t=>typeof t=="string",Us=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",E_=t=>(Fe(t)||he(t))&&he(t.then)&&he(t.catch),T_=Object.prototype.toString,La=t=>T_.call(t),PE=t=>La(t).slice(8,-1),I_=t=>La(t)==="[object Object]",du=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_r=uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},NE=/-(\w)/g,gn=Va(t=>t.replace(NE,(e,n)=>n?n.toUpperCase():"")),kE=/\B([A-Z])/g,Pi=Va(t=>t.replace(kE,"-$1").toLowerCase()),Fa=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=Va(t=>t?`on${Fa(t)}`:""),os=(t,e)=>!Object.is(t,e),Ol=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},w_=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},OE=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pf;const A_=()=>Pf||(Pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ua(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Je(s)?LE(s):Ua(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Je(t)||Fe(t))return t}const DE=/;(?![^(]*\))/g,xE=/:([^]+)/,ME=/\/\*[^]*?\*\//g;function LE(t){const e={};return t.replace(ME,"").split(DE).forEach(n=>{if(n){const s=n.split(xE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pu(t){let e="";if(Je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=pu(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const VE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",FE=uu(VE);function R_(t){return!!t||t===""}const UE=t=>Je(t)?t:t==null?"":ce(t)||Fe(t)&&(t.toString===T_||!he(t.toString))?JSON.stringify(t,C_,2):String(t),C_=(t,e)=>e&&e.__v_isRef?C_(t,e.value):ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Dl(s,r)+" =>"]=i,n),{})}:v_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dl(n))}:Us(e)?Dl(e):Fe(e)&&!ce(e)&&!I_(e)?String(e):e,Dl=(t,e="")=>{var n;return Us(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class b_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function S_(t){return new b_(t)}function BE(t,e=kt){e&&e.active&&e.effects.push(t)}function P_(){return kt}function jE(t){kt&&kt.cleanups.push(t)}let bs;class _u{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,BE(this,i)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,hs();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if($E(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),fs()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Zn,n=bs;try{return Zn=!0,bs=this,this._runnings++,Nf(this),this.fn()}finally{kf(this),this._runnings--,bs=n,Zn=e}}stop(){this.active&&(Nf(this),kf(this),this.onStop&&this.onStop(),this.active=!1)}}function $E(t){return t.value}function Nf(t){t._trackId++,t._depsLength=0}function kf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)N_(t.deps[e],t);t.deps.length=t._depsLength}}function N_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Zn=!0,uc=0;const k_=[];function hs(){k_.push(Zn),Zn=!1}function fs(){const t=k_.pop();Zn=t===void 0?!0:t}function mu(){uc++}function gu(){for(uc--;!uc&&hc.length;)hc.shift()()}function O_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&N_(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const hc=[];function D_(t,e,n){mu();for(const s of t.keys()){if(!t.computed&&s.computed&&t.get(s)===s._trackId&&s._runnings>0){s._dirtyLevel=2;continue}let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&hc.push(s.scheduler)))}gu()}const x_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},na=new WeakMap,Ss=Symbol(""),fc=Symbol("");function bt(t,e,n){if(Zn&&bs){let s=na.get(t);s||na.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=x_(()=>s.delete(n))),O_(bs,i)}}function Nn(t,e,n,s,i,r){const o=na.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ce(t)){const c=Number(s);o.forEach((u,f)=>{(f==="length"||!Us(f)&&f>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ce(t)?du(n)&&l.push(o.get("length")):(l.push(o.get(Ss)),ai(t)&&l.push(o.get(fc)));break;case"delete":ce(t)||(l.push(o.get(Ss)),ai(t)&&l.push(o.get(fc)));break;case"set":ai(t)&&l.push(o.get(Ss));break}mu();for(const c of l)c&&D_(c,5);gu()}function qE(t,e){const n=na.get(t);return n&&n.get(e)}const HE=uu("__proto__,__v_isRef,__isVue"),M_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Us)),Of=WE();function WE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=be(this);for(let r=0,o=this.length;r<o;r++)bt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(be)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs(),mu();const s=be(this)[e].apply(this,n);return gu(),fs(),s}}),t}function zE(t){Us(t)||(t=String(t));const e=be(this);return bt(e,"has",t),e.hasOwnProperty(t)}class L_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?rT:B_:r?U_:F_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!i){if(o&&we(Of,n))return Reflect.get(Of,n,s);if(n==="hasOwnProperty")return zE}const l=Reflect.get(e,n,s);return(Us(n)?M_.has(n):HE(n))||(i||bt(e,"get",n),r)?l:ut(l)?o&&du(n)?l:l.value:Fe(l)?i?$_(l):ja(l):l}}class V_ extends L_{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Dr(r);if(!sa(s)&&!Dr(s)&&(r=be(r),s=be(s)),!ce(e)&&ut(r)&&!ut(s))return c?!1:(r.value=s,!0)}const o=ce(e)&&du(n)?Number(n)<e.length:we(e,n),l=Reflect.set(e,n,s,i);return e===be(i)&&(o?os(s,r)&&Nn(e,"set",n,s):Nn(e,"add",n,s)),l}deleteProperty(e,n){const s=we(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Nn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Us(n)||!M_.has(n))&&bt(e,"has",n),s}ownKeys(e){return bt(e,"iterate",ce(e)?"length":Ss),Reflect.ownKeys(e)}}class KE extends L_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const GE=new V_,QE=new KE,YE=new V_(!0);const yu=t=>t,Ba=t=>Reflect.getPrototypeOf(t);function So(t,e,n=!1,s=!1){t=t.__v_raw;const i=be(t),r=be(e);n||(os(e,r)&&bt(i,"get",e),bt(i,"get",r));const{has:o}=Ba(i),l=s?yu:n?Tu:xr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Po(t,e=!1){const n=this.__v_raw,s=be(n),i=be(t);return e||(os(t,i)&&bt(s,"has",t),bt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function No(t,e=!1){return t=t.__v_raw,!e&&bt(be(t),"iterate",Ss),Reflect.get(t,"size",t)}function Df(t){t=be(t);const e=be(this);return Ba(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function xf(t,e){e=be(e);const n=be(this),{has:s,get:i}=Ba(n);let r=s.call(n,t);r||(t=be(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?os(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function Mf(t){const e=be(this),{has:n,get:s}=Ba(e);let i=n.call(e,t);i||(t=be(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Nn(e,"delete",t,void 0),r}function Lf(){const t=be(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function ko(t,e){return function(s,i){const r=this,o=r.__v_raw,l=be(o),c=e?yu:t?Tu:xr;return!t&&bt(l,"iterate",Ss),o.forEach((u,f)=>s.call(i,c(u),c(f),r))}}function Oo(t,e,n){return function(...s){const i=this.__v_raw,r=be(i),o=ai(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),f=n?yu:e?Tu:xr;return!e&&bt(r,"iterate",c?fc:Ss),{next(){const{value:d,done:_}=u.next();return _?{value:d,done:_}:{value:l?[f(d[0]),f(d[1])]:f(d),done:_}},[Symbol.iterator](){return this}}}}function Wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function XE(){const t={get(r){return So(this,r)},get size(){return No(this)},has:Po,add:Df,set:xf,delete:Mf,clear:Lf,forEach:ko(!1,!1)},e={get(r){return So(this,r,!1,!0)},get size(){return No(this)},has:Po,add:Df,set:xf,delete:Mf,clear:Lf,forEach:ko(!1,!0)},n={get(r){return So(this,r,!0)},get size(){return No(this,!0)},has(r){return Po.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:ko(!0,!1)},s={get(r){return So(this,r,!0,!0)},get size(){return No(this,!0)},has(r){return Po.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oo(r,!1,!1),n[r]=Oo(r,!0,!1),e[r]=Oo(r,!1,!0),s[r]=Oo(r,!0,!0)}),[t,n,e,s]}const[JE,ZE,eT,tT]=XE();function vu(t,e){const n=e?t?tT:eT:t?ZE:JE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(we(n,i)&&i in s?n:s,i,r)}const nT={get:vu(!1,!1)},sT={get:vu(!1,!0)},iT={get:vu(!0,!1)};const F_=new WeakMap,U_=new WeakMap,B_=new WeakMap,rT=new WeakMap;function oT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aT(t){return t.__v_skip||!Object.isExtensible(t)?0:oT(PE(t))}function ja(t){return Dr(t)?t:Eu(t,!1,GE,nT,F_)}function j_(t){return Eu(t,!1,YE,sT,U_)}function $_(t){return Eu(t,!0,QE,iT,B_)}function Eu(t,e,n,s,i){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=aT(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function mr(t){return Dr(t)?mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function sa(t){return!!(t&&t.__v_isShallow)}function q_(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function lT(t){return Object.isExtensible(t)&&w_(t,"__v_skip",!0),t}const xr=t=>Fe(t)?ja(t):t,Tu=t=>Fe(t)?$_(t):t;class H_{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _u(()=>e(this._value),()=>Ho(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=be(this);return(!e._cacheable||e.effect.dirty)&&os(e._value,e._value=e.effect.run())&&Ho(e,5),W_(e),e.effect._dirtyLevel>=2&&Ho(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cT(t,e,n=!1){let s,i;const r=he(t);return r?(s=t,i=Bt):(s=t.get,i=t.set),new H_(s,i,r||!i,n)}function W_(t){var e;Zn&&bs&&(t=be(t),O_(bs,(e=t.dep)!=null?e:t.dep=x_(()=>t.dep=void 0,t instanceof H_?t:void 0)))}function Ho(t,e=5,n,s){t=be(t);const i=t.dep;i&&D_(i,e)}function ut(t){return!!(t&&t.__v_isRef===!0)}function li(t){return K_(t,!1)}function z_(t){return K_(t,!0)}function K_(t,e){return ut(t)?t:new uT(t,e)}class uT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:xr(e)}get value(){return W_(this),this._value}set value(e){const n=this.__v_isShallow||sa(e)||Dr(e);e=n?e:be(e),os(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:xr(e),Ho(this,5))}}function Ps(t){return ut(t)?t.value:t}function bn(t){return he(t)?t():Ps(t)}const hT={get:(t,e,n)=>Ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ut(i)&&!ut(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function G_(t){return mr(t)?t:new Proxy(t,hT)}class fT{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qE(be(this._object),this._key)}}class dT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function pT(t,e,n){return ut(t)?t:he(t)?new dT(t):Fe(t)&&arguments.length>1?_T(t,e,n):li(t)}function _T(t,e,n){const s=t[e];return ut(s)?s:new fT(t,e,n)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(t,e,n,s){try{return s?t(...s):t()}catch(i){$a(i,e,n)}}function Zt(t,e,n,s){if(he(t)){const i=es(t,e,n,s);return i&&E_(i)&&i.catch(r=>{$a(r,e,n)}),i}if(ce(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Zt(t[r],e,n,s));return i}}function $a(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){hs(),es(c,null,10,[t,o,l]),fs();return}}mT(t,n,i,s)}function mT(t,e,n,s=!0){console.error(t)}let Mr=!1,dc=!1;const yt=[];let fn=0;const ci=[];let Gn=null,Ts=0;const Q_=Promise.resolve();let Iu=null;function Y_(t){const e=Iu||Q_;return t?e.then(this?t.bind(this):t):e}function gT(t){let e=fn+1,n=yt.length;for(;e<n;){const s=e+n>>>1,i=yt[s],r=Lr(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function wu(t){(!yt.length||!yt.includes(t,Mr&&t.allowRecurse?fn+1:fn))&&(t.id==null?yt.push(t):yt.splice(gT(t.id),0,t),X_())}function X_(){!Mr&&!dc&&(dc=!0,Iu=Q_.then(Z_))}function yT(t){const e=yt.indexOf(t);e>fn&&yt.splice(e,1)}function vT(t){ce(t)?ci.push(...t):(!Gn||!Gn.includes(t,t.allowRecurse?Ts+1:Ts))&&ci.push(t),X_()}function Vf(t,e,n=Mr?fn+1:0){for(;n<yt.length;n++){const s=yt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;yt.splice(n,1),n--,s()}}}function J_(t){if(ci.length){const e=[...new Set(ci)].sort((n,s)=>Lr(n)-Lr(s));if(ci.length=0,Gn){Gn.push(...e);return}for(Gn=e,Ts=0;Ts<Gn.length;Ts++){const n=Gn[Ts];n.active!==!1&&n()}Gn=null,Ts=0}}const Lr=t=>t.id==null?1/0:t.id,ET=(t,e)=>{const n=Lr(t)-Lr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Z_(t){dc=!1,Mr=!0,yt.sort(ET);try{for(fn=0;fn<yt.length;fn++){const e=yt[fn];e&&e.active!==!1&&es(e,null,14)}}finally{fn=0,yt.length=0,J_(),Mr=!1,Iu=null,(yt.length||ci.length)&&Z_()}}function TT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:_}=s[f]||Be;_&&(i=n.map(g=>Je(g)?g.trim():g)),d&&(i=n.map(OE))}let l,c=s[l=kl(e)]||s[l=kl(gn(e))];!c&&r&&(c=s[l=kl(Pi(e))]),c&&Zt(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Zt(u,t,6,i)}}function em(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!he(t)){const c=u=>{const f=em(u,e,!0);f&&(l=!0,it(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Fe(t)&&s.set(t,null),null):(ce(r)?r.forEach(c=>o[c]=null):it(o,r),Fe(t)&&s.set(t,o),o)}function qa(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Pi(e))||we(t,e))}let jt=null,tm=null;function ia(t){const e=jt;return jt=t,tm=t&&t.type.__scopeId||null,e}function IT(t,e=jt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Qf(-1);const r=ia(e);let o;try{o=t(...i)}finally{ia(r),s._d&&Qf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:_,setupState:g,ctx:w,inheritAttrs:N}=t,P=ia(t);let M,F;try{if(n.shapeFlag&4){const q=i||s,ae=q;M=hn(u.call(ae,q,f,d,g,_,w)),F=l}else{const q=e;M=hn(q.length>1?q(d,{attrs:l,slots:o,emit:c}):q(d,null)),F=e.props?l:wT(l)}}catch(q){Er.length=0,$a(q,t,1),M=$t(Vr)}let V=M;if(F&&N!==!1){const q=Object.keys(F),{shapeFlag:ae}=V;q.length&&ae&7&&(r&&q.some(hu)&&(F=AT(F,r)),V=_i(V,F,!1,!0))}return n.dirs&&(V=_i(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),M=V,ia(P),M}const wT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},AT=(t,e)=>{const n={};for(const s in t)(!hu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function RT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ff(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const _=f[d];if(o[_]!==s[_]&&!qa(u,_))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ff(s,o,u):!0:!!o;return!1}function Ff(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!qa(n,r))return!0}return!1}function CT({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bT="components";function ST(t,e){return NT(bT,t,!0,e)||t}const PT=Symbol.for("v-ndc");function NT(t,e,n=!0,s=!1){const i=jt||ot;if(i){const r=i.type;{const l=AI(r,!1);if(l&&(l===e||l===gn(e)||l===Fa(gn(e))))return r}const o=Uf(i[t]||r[t],e)||Uf(i.appContext[t],e);return!o&&s?r:o}}function Uf(t,e){return t&&(t[e]||t[gn(e)]||t[Fa(gn(e))])}const kT=t=>t.__isSuspense;function OT(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):vT(t)}function Ha(t,e,n=ot,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{hs();const l=Jr(n),c=Zt(e,n,t,o);return l(),fs(),c});return s?i.unshift(r):i.push(r),r}}const Vn=t=>(e,n=ot)=>{(!za||t==="sp")&&Ha(t,(...s)=>e(...s),n)},DT=Vn("bm"),xT=Vn("m"),MT=Vn("bu"),LT=Vn("u"),VT=Vn("bum"),nm=Vn("um"),sm=Vn("sp"),FT=Vn("rtg"),UT=Vn("rtc");function BT(t,e=ot){Ha("ec",t,e)}function gs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(hs(),Zt(c,n,8,[t.el,l,t,e]),fs())}}function jT(t,e,n,s){let i;const r=n;if(ce(t)||Je(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(Fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function im(t,e){return he(t)?it({name:t.name},e,{setup:t}):t}const Wo=t=>!!t.type.__asyncLoader,pc=t=>t?Rm(t)?bu(t):pc(t.parent):null,gr=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$emit:t=>t.emit,$options:t=>Au(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wu(t.update)}),$nextTick:t=>t.n||(t.n=Y_.bind(t.proxy)),$watch:t=>aI.bind(t)}),Ml=(t,e)=>t!==Be&&!t.__isScriptSetup&&we(t,e),$T={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ml(s,e))return o[e]=1,s[e];if(i!==Be&&we(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&we(u,e))return o[e]=3,r[e];if(n!==Be&&we(n,e))return o[e]=4,n[e];_c&&(o[e]=0)}}const f=gr[e];let d,_;if(f)return e==="$attrs"&&bt(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Be&&we(n,e))return o[e]=4,n[e];if(_=c.config.globalProperties,we(_,e))return _[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ml(i,e)?(i[e]=n,!0):s!==Be&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Be&&we(t,o)||Ml(e,o)||(l=r[0])&&we(l,o)||we(s,o)||we(gr,o)||we(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function qT(t){const e=Au(t),n=t.proxy,s=t.ctx;_c=!1,e.beforeCreate&&jf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:_,beforeUpdate:g,updated:w,activated:N,deactivated:P,beforeDestroy:M,beforeUnmount:F,destroyed:V,unmounted:q,render:ae,renderTracked:K,renderTriggered:A,errorCaptured:v,serverPrefetch:I,expose:R,inheritAttrs:C,components:b,directives:E,filters:Tt}=e;if(u&&HT(u,s,null),o)for(const ge in o){const de=o[ge];he(de)&&(s[ge]=de.bind(n))}if(i){const ge=i.call(n,n);Fe(ge)&&(t.data=ja(ge))}if(_c=!0,r)for(const ge in r){const de=r[ge],St=he(de)?de.bind(n,n):he(de.get)?de.get.bind(n,n):Bt,Wt=!he(de)&&he(de.set)?de.set.bind(n):Bt,Lt=Kt({get:St,set:Wt});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:$e=>Lt.value=$e})}if(l)for(const ge in l)rm(l[ge],s,n,ge);if(c){const ge=he(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(de=>{zo(de,ge[de])})}f&&jf(f,t,"c");function ze(ge,de){ce(de)?de.forEach(St=>ge(St.bind(n))):de&&ge(de.bind(n))}if(ze(DT,d),ze(xT,_),ze(MT,g),ze(LT,w),ze(lI,N),ze(cI,P),ze(BT,v),ze(UT,K),ze(FT,A),ze(VT,F),ze(nm,q),ze(sm,I),ce(R))if(R.length){const ge=t.exposed||(t.exposed={});R.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:St=>n[de]=St})})}else t.exposed||(t.exposed={});ae&&t.render===Bt&&(t.render=ae),C!=null&&(t.inheritAttrs=C),b&&(t.components=b),E&&(t.directives=E)}function HT(t,e,n=Bt){ce(t)&&(t=mc(t));for(const s in t){const i=t[s];let r;Fe(i)?"default"in i?r=en(i.from||s,i.default,!0):r=en(i.from||s):r=en(i),ut(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function jf(t,e,n){Zt(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function rm(t,e,n,s){const i=s.includes(".")?ym(n,s):()=>n[s];if(Je(t)){const r=e[t];he(r)&&vr(i,r)}else if(he(t))vr(i,t.bind(n));else if(Fe(t))if(ce(t))t.forEach(r=>rm(r,e,n,s));else{const r=he(t.handler)?t.handler.bind(n):e[t.handler];he(r)&&vr(i,r,t)}}function Au(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>ra(c,u,o,!0)),ra(c,e,o)),Fe(e)&&r.set(e,c),c}function ra(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ra(t,r,n,!0),i&&i.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=WT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const WT={data:$f,props:qf,emits:qf,methods:lr,computed:lr,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:lr,directives:lr,watch:KT,provide:$f,inject:zT};function $f(t,e){return e?t?function(){return it(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function zT(t,e){return lr(mc(t),mc(e))}function mc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function lr(t,e){return t?it(Object.create(null),t,e):e}function qf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:it(Object.create(null),Bf(t),Bf(e??{})):e}function KT(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function om(){return{app:null,config:{isNativeTag:bE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GT=0;function QT(t,e){return function(s,i=null){he(s)||(s=it({},s)),i!=null&&!Fe(i)&&(i=null);const r=om(),o=new WeakSet;let l=!1;const c=r.app={_uid:GT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:CI,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&he(u.install)?(o.add(u),u.install(c,...f)):he(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const _=$t(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(_,u):t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,bu(_.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=yr;yr=c;try{return u()}finally{yr=f}}};return c}}let yr=null;function zo(t,e){if(ot){let n=ot.provides;const s=ot.parent&&ot.parent.provides;s===n&&(n=ot.provides=Object.create(s)),n[t]=e}}function en(t,e,n=!1){const s=ot||jt;if(s||yr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:yr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&he(e)?e.call(s&&s.proxy):e}}const am={},lm=()=>Object.create(am),cm=t=>Object.getPrototypeOf(t)===am;function YT(t,e,n,s=!1){const i={},r=lm();t.propsDefaults=Object.create(null),um(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:j_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function XT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=be(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let _=f[d];if(qa(t.emitsOptions,_))continue;const g=e[_];if(c)if(we(r,_))g!==r[_]&&(r[_]=g,u=!0);else{const w=gn(_);i[w]=gc(c,l,w,g,t,!1)}else g!==r[_]&&(r[_]=g,u=!0)}}}else{um(t,e,i,r)&&(u=!0);let f;for(const d in l)(!e||!we(e,d)&&((f=Pi(d))===d||!we(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(i[d]=gc(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!we(e,d))&&(delete r[d],u=!0)}u&&Nn(t.attrs,"set","")}function um(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(_r(c))continue;const u=e[c];let f;i&&we(i,f=gn(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:qa(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=be(n),u=l||Be;for(let f=0;f<r.length;f++){const d=r[f];n[d]=gc(i,c,d,u[d],t,!we(u,d))}}return o}function gc(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=we(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const f=Jr(i);s=u[n]=c.call(null,e),f()}}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Pi(n))&&(s=!0))}return s}function hm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!he(t)){const f=d=>{c=!0;const[_,g]=hm(d,e,!0);it(o,_),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return Fe(t)&&s.set(t,oi),oi;if(ce(r))for(let f=0;f<r.length;f++){const d=gn(r[f]);Hf(d)&&(o[d]=Be)}else if(r)for(const f in r){const d=gn(f);if(Hf(d)){const _=r[f],g=o[d]=ce(_)||he(_)?{type:_}:it({},_);if(g){const w=Kf(Boolean,g.type),N=Kf(String,g.type);g[0]=w>-1,g[1]=N<0||w<N,(w>-1||we(g,"default"))&&l.push(d)}}}const u=[o,l];return Fe(t)&&s.set(t,u),u}function Hf(t){return t[0]!=="$"&&!_r(t)}function Wf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function zf(t,e){return Wf(t)===Wf(e)}function Kf(t,e){return ce(e)?e.findIndex(n=>zf(n,t)):he(e)&&zf(e,t)?0:-1}const fm=t=>t[0]==="_"||t==="$stable",Ru=t=>ce(t)?t.map(hn):[hn(t)],JT=(t,e,n)=>{if(e._n)return e;const s=IT((...i)=>Ru(e(...i)),n);return s._c=!1,s},dm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(fm(i))continue;const r=t[i];if(he(r))e[i]=JT(i,r,s);else if(r!=null){const o=Ru(r);e[i]=()=>o}}},pm=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},ZT=(t,e)=>{const n=t.slots=lm();if(t.vnode.shapeFlag&32){const s=e._;s?(it(n,e),w_(n,"_",s,!0)):dm(e,n)}else e&&pm(t,e)},eI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(it(i,e),!n&&l===1&&delete i._):(r=!e.$stable,dm(e,i)),o=e}else e&&(pm(t,e),o={default:1});if(r)for(const l in i)!fm(l)&&o[l]==null&&delete i[l]};function yc(t,e,n,s,i=!1){if(ce(t)){t.forEach((_,g)=>yc(_,e&&(ce(e)?e[g]:e),n,s,i));return}if(Wo(s)&&!i)return;const r=s.shapeFlag&4?bu(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Be?l.refs={}:l.refs,d=l.setupState;if(u!=null&&u!==c&&(Je(u)?(f[u]=null,we(d,u)&&(d[u]=null)):ut(u)&&(u.value=null)),he(c))es(c,l,12,[o,f]);else{const _=Je(c),g=ut(c);if(_||g){const w=()=>{if(t.f){const N=_?we(d,c)?d[c]:f[c]:c.value;i?ce(N)&&fu(N,r):ce(N)?N.includes(r)||N.push(r):_?(f[c]=[r],we(d,c)&&(d[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else _?(f[c]=o,we(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(w.id=-1,Rt(w,n)):w()}}}const Rt=OT;function tI(t){return nI(t)}function nI(t,e){const n=A_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:_,setScopeId:g=Bt,insertStaticContent:w}=t,N=(y,T,k,L=null,D=null,H=null,G=void 0,$=null,W=!!T.dynamicChildren)=>{if(y===T)return;y&&!er(y,T)&&(L=x(y),$e(y,D,H,!0),y=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:U,ref:X,shapeFlag:se}=T;switch(U){case Wa:P(y,T,k,L);break;case Vr:M(y,T,k,L);break;case Vl:y==null&&F(T,k,L,G);break;case un:b(y,T,k,L,D,H,G,$,W);break;default:se&1?ae(y,T,k,L,D,H,G,$,W):se&6?E(y,T,k,L,D,H,G,$,W):(se&64||se&128)&&U.process(y,T,k,L,D,H,G,$,W,Z)}X!=null&&D&&yc(X,y&&y.ref,H,T||y,!T)},P=(y,T,k,L)=>{if(y==null)s(T.el=l(T.children),k,L);else{const D=T.el=y.el;T.children!==y.children&&u(D,T.children)}},M=(y,T,k,L)=>{y==null?s(T.el=c(T.children||""),k,L):T.el=y.el},F=(y,T,k,L)=>{[y.el,y.anchor]=w(y.children,T,k,L,y.el,y.anchor)},V=({el:y,anchor:T},k,L)=>{let D;for(;y&&y!==T;)D=_(y),s(y,k,L),y=D;s(T,k,L)},q=({el:y,anchor:T})=>{let k;for(;y&&y!==T;)k=_(y),i(y),y=k;i(T)},ae=(y,T,k,L,D,H,G,$,W)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),y==null?K(T,k,L,D,H,G,$,W):I(y,T,D,H,G,$,W)},K=(y,T,k,L,D,H,G,$)=>{let W,U;const{props:X,shapeFlag:se,transition:ne,dirs:te}=y;if(W=y.el=o(y.type,H,X&&X.is,X),se&8?f(W,y.children):se&16&&v(y.children,W,null,L,D,Ll(y,H),G,$),te&&gs(y,null,L,"created"),A(W,y,y.scopeId,G,L),X){for(const Se in X)Se!=="value"&&!_r(Se)&&r(W,Se,null,X[Se],H,y.children,L,D,Ze);"value"in X&&r(W,"value",null,X.value,H),(U=X.onVnodeBeforeMount)&&cn(U,L,y)}te&&gs(y,null,L,"beforeMount");const re=sI(D,ne);re&&ne.beforeEnter(W),s(W,T,k),((U=X&&X.onVnodeMounted)||re||te)&&Rt(()=>{U&&cn(U,L,y),re&&ne.enter(W),te&&gs(y,null,L,"mounted")},D)},A=(y,T,k,L,D)=>{if(k&&g(y,k),L)for(let H=0;H<L.length;H++)g(y,L[H]);if(D){let H=D.subTree;if(T===H){const G=D.vnode;A(y,G,G.scopeId,G.slotScopeIds,D.parent)}}},v=(y,T,k,L,D,H,G,$,W=0)=>{for(let U=W;U<y.length;U++){const X=y[U]=$?Qn(y[U]):hn(y[U]);N(null,X,T,k,L,D,H,G,$)}},I=(y,T,k,L,D,H,G)=>{const $=T.el=y.el;let{patchFlag:W,dynamicChildren:U,dirs:X}=T;W|=y.patchFlag&16;const se=y.props||Be,ne=T.props||Be;let te;if(k&&ys(k,!1),(te=ne.onVnodeBeforeUpdate)&&cn(te,k,T,y),X&&gs(T,y,k,"beforeUpdate"),k&&ys(k,!0),U?R(y.dynamicChildren,U,$,k,L,Ll(T,D),H):G||de(y,T,$,null,k,L,Ll(T,D),H,!1),W>0){if(W&16)C($,T,se,ne,k,L,D);else if(W&2&&se.class!==ne.class&&r($,"class",null,ne.class,D),W&4&&r($,"style",se.style,ne.style,D),W&8){const re=T.dynamicProps;for(let Se=0;Se<re.length;Se++){const Ie=re[Se],We=se[Ie],Pt=ne[Ie];(Pt!==We||Ie==="value")&&r($,Ie,We,Pt,D,y.children,k,L,Ze)}}W&1&&y.children!==T.children&&f($,T.children)}else!G&&U==null&&C($,T,se,ne,k,L,D);((te=ne.onVnodeUpdated)||X)&&Rt(()=>{te&&cn(te,k,T,y),X&&gs(T,y,k,"updated")},L)},R=(y,T,k,L,D,H,G)=>{for(let $=0;$<T.length;$++){const W=y[$],U=T[$],X=W.el&&(W.type===un||!er(W,U)||W.shapeFlag&70)?d(W.el):k;N(W,U,X,null,L,D,H,G,!0)}},C=(y,T,k,L,D,H,G)=>{if(k!==L){if(k!==Be)for(const $ in k)!_r($)&&!($ in L)&&r(y,$,k[$],null,G,T.children,D,H,Ze);for(const $ in L){if(_r($))continue;const W=L[$],U=k[$];W!==U&&$!=="value"&&r(y,$,U,W,G,T.children,D,H,Ze)}"value"in L&&r(y,"value",k.value,L.value,G)}},b=(y,T,k,L,D,H,G,$,W)=>{const U=T.el=y?y.el:l(""),X=T.anchor=y?y.anchor:l("");let{patchFlag:se,dynamicChildren:ne,slotScopeIds:te}=T;te&&($=$?$.concat(te):te),y==null?(s(U,k,L),s(X,k,L),v(T.children||[],k,X,D,H,G,$,W)):se>0&&se&64&&ne&&y.dynamicChildren?(R(y.dynamicChildren,ne,k,D,H,G,$),(T.key!=null||D&&T===D.subTree)&&_m(y,T,!0)):de(y,T,k,X,D,H,G,$,W)},E=(y,T,k,L,D,H,G,$,W)=>{T.slotScopeIds=$,y==null?T.shapeFlag&512?D.ctx.activate(T,k,L,G,W):Tt(T,k,L,D,H,G,W):Mt(y,T,W)},Tt=(y,T,k,L,D,H,G)=>{const $=y.component=vI(y,L,D);if(vm(y)&&($.ctx.renderer=Z),EI($),$.asyncDep){if(D&&D.registerDep($,ze,G),!y.el){const W=$.subTree=$t(Vr);M(null,W,T,k)}}else ze($,y,T,k,D,H,G)},Mt=(y,T,k)=>{const L=T.component=y.component;if(RT(y,T,k))if(L.asyncDep&&!L.asyncResolved){ge(L,T,k);return}else L.next=T,yT(L.update),L.effect.dirty=!0,L.update();else T.el=y.el,L.vnode=T},ze=(y,T,k,L,D,H,G)=>{const $=()=>{if(y.isMounted){let{next:X,bu:se,u:ne,parent:te,vnode:re}=y;{const Vt=mm(y);if(Vt){X&&(X.el=re.el,ge(y,X,G)),Vt.asyncDep.then(()=>{y.isUnmounted||$()});return}}let Se=X,Ie;ys(y,!1),X?(X.el=re.el,ge(y,X,G)):X=re,se&&Ol(se),(Ie=X.props&&X.props.onVnodeBeforeUpdate)&&cn(Ie,te,X,re),ys(y,!0);const We=xl(y),Pt=y.subTree;y.subTree=We,N(Pt,We,d(Pt.el),x(Pt),y,D,H),X.el=We.el,Se===null&&CT(y,We.el),ne&&Rt(ne,D),(Ie=X.props&&X.props.onVnodeUpdated)&&Rt(()=>cn(Ie,te,X,re),D)}else{let X;const{el:se,props:ne}=T,{bm:te,m:re,parent:Se}=y,Ie=Wo(T);if(ys(y,!1),te&&Ol(te),!Ie&&(X=ne&&ne.onVnodeBeforeMount)&&cn(X,Se,T),ys(y,!0),se&&Oe){const We=()=>{y.subTree=xl(y),Oe(se,y.subTree,y,D,null)};Ie?T.type.__asyncLoader().then(()=>!y.isUnmounted&&We()):We()}else{const We=y.subTree=xl(y);N(null,We,k,L,y,D,H),T.el=We.el}if(re&&Rt(re,D),!Ie&&(X=ne&&ne.onVnodeMounted)){const We=T;Rt(()=>cn(X,Se,We),D)}(T.shapeFlag&256||Se&&Wo(Se.vnode)&&Se.vnode.shapeFlag&256)&&y.a&&Rt(y.a,D),y.isMounted=!0,T=k=L=null}},W=y.effect=new _u($,Bt,()=>wu(U),y.scope),U=y.update=()=>{W.dirty&&W.run()};U.id=y.uid,ys(y,!0),U()},ge=(y,T,k)=>{T.component=y;const L=y.vnode.props;y.vnode=T,y.next=null,XT(y,T.props,L,k),eI(y,T.children,k),hs(),Vf(y),fs()},de=(y,T,k,L,D,H,G,$,W=!1)=>{const U=y&&y.children,X=y?y.shapeFlag:0,se=T.children,{patchFlag:ne,shapeFlag:te}=T;if(ne>0){if(ne&128){Wt(U,se,k,L,D,H,G,$,W);return}else if(ne&256){St(U,se,k,L,D,H,G,$,W);return}}te&8?(X&16&&Ze(U,D,H),se!==U&&f(k,se)):X&16?te&16?Wt(U,se,k,L,D,H,G,$,W):Ze(U,D,H,!0):(X&8&&f(k,""),te&16&&v(se,k,L,D,H,G,$,W))},St=(y,T,k,L,D,H,G,$,W)=>{y=y||oi,T=T||oi;const U=y.length,X=T.length,se=Math.min(U,X);let ne;for(ne=0;ne<se;ne++){const te=T[ne]=W?Qn(T[ne]):hn(T[ne]);N(y[ne],te,k,null,D,H,G,$,W)}U>X?Ze(y,D,H,!0,!1,se):v(T,k,L,D,H,G,$,W,se)},Wt=(y,T,k,L,D,H,G,$,W)=>{let U=0;const X=T.length;let se=y.length-1,ne=X-1;for(;U<=se&&U<=ne;){const te=y[U],re=T[U]=W?Qn(T[U]):hn(T[U]);if(er(te,re))N(te,re,k,null,D,H,G,$,W);else break;U++}for(;U<=se&&U<=ne;){const te=y[se],re=T[ne]=W?Qn(T[ne]):hn(T[ne]);if(er(te,re))N(te,re,k,null,D,H,G,$,W);else break;se--,ne--}if(U>se){if(U<=ne){const te=ne+1,re=te<X?T[te].el:L;for(;U<=ne;)N(null,T[U]=W?Qn(T[U]):hn(T[U]),k,re,D,H,G,$,W),U++}}else if(U>ne)for(;U<=se;)$e(y[U],D,H,!0),U++;else{const te=U,re=U,Se=new Map;for(U=re;U<=ne;U++){const It=T[U]=W?Qn(T[U]):hn(T[U]);It.key!=null&&Se.set(It.key,U)}let Ie,We=0;const Pt=ne-re+1;let Vt=!1,Bi=0;const jn=new Array(Pt);for(U=0;U<Pt;U++)jn[U]=0;for(U=te;U<=se;U++){const It=y[U];if(We>=Pt){$e(It,D,H,!0);continue}let Ft;if(It.key!=null)Ft=Se.get(It.key);else for(Ie=re;Ie<=ne;Ie++)if(jn[Ie-re]===0&&er(It,T[Ie])){Ft=Ie;break}Ft===void 0?$e(It,D,H,!0):(jn[Ft-re]=U+1,Ft>=Bi?Bi=Ft:Vt=!0,N(It,T[Ft],k,null,D,H,G,$,W),We++)}const Ws=Vt?iI(jn):oi;for(Ie=Ws.length-1,U=Pt-1;U>=0;U--){const It=re+U,Ft=T[It],zs=It+1<X?T[It+1].el:L;jn[U]===0?N(null,Ft,k,zs,D,H,G,$,W):Vt&&(Ie<0||U!==Ws[Ie]?Lt(Ft,k,zs,2):Ie--)}}},Lt=(y,T,k,L,D=null)=>{const{el:H,type:G,transition:$,children:W,shapeFlag:U}=y;if(U&6){Lt(y.component.subTree,T,k,L);return}if(U&128){y.suspense.move(T,k,L);return}if(U&64){G.move(y,T,k,Z);return}if(G===un){s(H,T,k);for(let se=0;se<W.length;se++)Lt(W[se],T,k,L);s(y.anchor,T,k);return}if(G===Vl){V(y,T,k);return}if(L!==2&&U&1&&$)if(L===0)$.beforeEnter(H),s(H,T,k),Rt(()=>$.enter(H),D);else{const{leave:se,delayLeave:ne,afterLeave:te}=$,re=()=>s(H,T,k),Se=()=>{se(H,()=>{re(),te&&te()})};ne?ne(H,re,Se):Se()}else s(H,T,k)},$e=(y,T,k,L=!1,D=!1)=>{const{type:H,props:G,ref:$,children:W,dynamicChildren:U,shapeFlag:X,patchFlag:se,dirs:ne,memoIndex:te}=y;if($!=null&&yc($,null,k,y,!0),te!=null&&(T.renderCache[te]=void 0),X&256){T.ctx.deactivate(y);return}const re=X&1&&ne,Se=!Wo(y);let Ie;if(Se&&(Ie=G&&G.onVnodeBeforeUnmount)&&cn(Ie,T,y),X&6)ln(y.component,k,L);else{if(X&128){y.suspense.unmount(k,L);return}re&&gs(y,null,T,"beforeUnmount"),X&64?y.type.remove(y,T,k,D,Z,L):U&&(H!==un||se>0&&se&64)?Ze(U,T,k,!1,!0):(H===un&&se&384||!D&&X&16)&&Ze(W,T,k),L&&qe(y)}(Se&&(Ie=G&&G.onVnodeUnmounted)||re)&&Rt(()=>{Ie&&cn(Ie,T,y),re&&gs(y,null,T,"unmounted")},k)},qe=y=>{const{type:T,el:k,anchor:L,transition:D}=y;if(T===un){Bn(k,L);return}if(T===Vl){q(y);return}const H=()=>{i(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:$}=D,W=()=>G(k,H);$?$(y.el,H,W):W()}else H()},Bn=(y,T)=>{let k;for(;y!==T;)k=_(y),i(y),y=k;i(T)},ln=(y,T,k)=>{const{bum:L,scope:D,update:H,subTree:G,um:$,m:W,a:U}=y;Gf(W),Gf(U),L&&Ol(L),D.stop(),H&&(H.active=!1,$e(G,y,T,k)),$&&Rt($,T),Rt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Ze=(y,T,k,L=!1,D=!1,H=0)=>{for(let G=H;G<y.length;G++)$e(y[G],T,k,L,D)},x=y=>y.shapeFlag&6?x(y.component.subTree):y.shapeFlag&128?y.suspense.next():_(y.anchor||y.el);let J=!1;const Y=(y,T,k)=>{y==null?T._vnode&&$e(T._vnode,null,null,!0):N(T._vnode||null,y,T,null,null,null,k),J||(J=!0,Vf(),J_(),J=!1),T._vnode=y},Z={p:N,um:$e,m:Lt,r:qe,mt:Tt,mc:v,pc:de,pbc:R,n:x,o:t};let ye,Oe;return{render:Y,hydrate:ye,createApp:QT(Y,ye)}}function Ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ys({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _m(t,e,n=!1){const s=t.children,i=e.children;if(ce(s)&&ce(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Qn(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&_m(o,l)),l.type===Wa&&(l.el=o.el)}}function iI(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function mm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mm(e)}function Gf(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const rI=Symbol.for("v-scx"),oI=()=>en(rI),Do={};function vr(t,e,n){return gm(t,e,n)}function gm(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=Be){if(e&&r){const K=e;e=(...A)=>{K(...A),ae()}}const c=ot,u=K=>s===!0?K:Is(K,s===!1?1:void 0);let f,d=!1,_=!1;if(ut(t)?(f=()=>t.value,d=sa(t)):mr(t)?(f=()=>u(t),d=!0):ce(t)?(_=!0,d=t.some(K=>mr(K)||sa(K)),f=()=>t.map(K=>{if(ut(K))return K.value;if(mr(K))return u(K);if(he(K))return es(K,c,2)})):he(t)?e?f=()=>es(t,c,2):f=()=>(g&&g(),Zt(t,c,3,[w])):f=Bt,e&&s){const K=f;f=()=>Is(K())}let g,w=K=>{g=V.onStop=()=>{es(K,c,4),g=V.onStop=void 0}},N;if(za)if(w=Bt,e?n&&Zt(e,c,3,[f(),_?[]:void 0,w]):f(),i==="sync"){const K=oI();N=K.__watcherHandles||(K.__watcherHandles=[])}else return Bt;let P=_?new Array(t.length).fill(Do):Do;const M=()=>{if(!(!V.active||!V.dirty))if(e){const K=V.run();(s||d||(_?K.some((A,v)=>os(A,P[v])):os(K,P)))&&(g&&g(),Zt(e,c,3,[K,P===Do?void 0:_&&P[0]===Do?[]:P,w]),P=K)}else V.run()};M.allowRecurse=!!e;let F;i==="sync"?F=M:i==="post"?F=()=>Rt(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),F=()=>wu(M));const V=new _u(f,Bt,F),q=P_(),ae=()=>{V.stop(),q&&fu(q.effects,V)};return e?n?M():P=V.run():i==="post"?Rt(V.run.bind(V),c&&c.suspense):V.run(),N&&N.push(ae),ae}function aI(t,e,n){const s=this.proxy,i=Je(t)?t.includes(".")?ym(s,t):()=>s[t]:t.bind(s,s);let r;he(e)?r=e:(r=e.handler,n=e);const o=Jr(this),l=gm(i,r.bind(s),n);return o(),l}function ym(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Is(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))Is(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)Is(t[s],e,n);else if(v_(t)||ai(t))t.forEach(s=>{Is(s,e,n)});else if(I_(t)){for(const s in t)Is(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Is(t[s],e,n)}return t}const vm=t=>t.type.__isKeepAlive;function lI(t,e){Em(t,"a",e)}function cI(t,e){Em(t,"da",e)}function Em(t,e,n=ot){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ha(e,s,n),n){let i=n.parent;for(;i&&i.parent;)vm(i.parent.vnode)&&uI(s,e,n,i),i=i.parent}}function uI(t,e,n,s){const i=Ha(e,t,s,!0);nm(()=>{fu(s[e],i)},n)}function Tm(t,e){t.shapeFlag&6&&t.component?Tm(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const hI=t=>t.__isTeleport,un=Symbol.for("v-fgt"),Wa=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Vl=Symbol.for("v-stc"),Er=[];let Qt=null;function ni(t=!1){Er.push(Qt=t?null:[])}function fI(){Er.pop(),Qt=Er[Er.length-1]||null}let Fr=1;function Qf(t){Fr+=t}function dI(t){return t.dynamicChildren=Fr>0?Qt||oi:null,fI(),Fr>0&&Qt&&Qt.push(t),t}function si(t,e,n,s,i,r){return dI(ws(t,e,n,s,i,r,!0))}function vc(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const Im=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||ut(t)||he(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function ws(t,e=null,n=null,s=0,i=null,r=t===un?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Im(e),ref:e&&Ko(e),scopeId:tm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jt};return l?(Cu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Fr>0&&!o&&Qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qt.push(c),c}const $t=pI;function pI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===PT)&&(t=Vr),vc(t)){const l=_i(t,e,!0);return n&&Cu(l,n),Fr>0&&!r&&Qt&&(l.shapeFlag&6?Qt[Qt.indexOf(t)]=l:Qt.push(l)),l.patchFlag=-2,l}if(RI(t)&&(t=t.__vccOpts),e){e=_I(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=pu(l)),Fe(c)&&(q_(c)&&!ce(c)&&(c=it({},c)),e.style=Ua(c))}const o=Je(t)?1:kT(t)?128:hI(t)?64:Fe(t)?4:he(t)?2:0;return ws(t,e,n,s,i,o,r,!0)}function _I(t){return t?q_(t)||cm(t)?it({},t):t:null}function _i(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?mI(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Im(u),ref:e&&e.ref?n&&r?ce(r)?r.concat(Ko(e)):[r,Ko(e)]:Ko(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==un?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_i(t.ssContent),ssFallback:t.ssFallback&&_i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Tm(f,c.clone(f)),f}function wm(t=" ",e=0){return $t(Wa,null,t,e)}function hn(t){return t==null||typeof t=="boolean"?$t(Vr):ce(t)?$t(un,null,t.slice()):typeof t=="object"?Qn(t):$t(Wa,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_i(t)}function Cu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Cu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!cm(e)?e._ctx=jt:i===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),s&64?(n=16,e=[wm(e)]):n=8);t.children=e,t.shapeFlag|=n}function mI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=pu([e.class,s.class]));else if(i==="style")e.style=Ua([e.style,s.style]);else if(Ma(i)){const r=e[i],o=s[i];o&&r!==o&&!(ce(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function cn(t,e,n,s=null){Zt(t,e,7,[n,s])}const gI=om();let yI=0;function vI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||gI,r={uid:yI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hm(s,i),emitsOptions:em(s,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=TT.bind(null,r),t.ce&&t.ce(r),r}let ot=null;const Am=()=>ot||jt;let oa,Ec;{const t=A_(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};oa=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),Ec=e("__VUE_SSR_SETTERS__",n=>za=n)}const Jr=t=>{const e=ot;return oa(t),t.scope.on(),()=>{t.scope.off(),oa(e)}},Yf=()=>{ot&&ot.scope.off(),oa(null)};function Rm(t){return t.vnode.shapeFlag&4}let za=!1;function EI(t,e=!1){e&&Ec(e);const{props:n,children:s}=t.vnode,i=Rm(t);YT(t,n,i,e),ZT(t,s);const r=i?TI(t,e):void 0;return e&&Ec(!1),r}function TI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$T);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?wI(t):null,r=Jr(t);hs();const o=es(s,t,0,[t.props,i]);if(fs(),r(),E_(o)){if(o.then(Yf,Yf),e)return o.then(l=>{Xf(t,l,e)}).catch(l=>{$a(l,t,0)});t.asyncDep=o}else Xf(t,o,e)}else Cm(t,e)}function Xf(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=G_(e)),Cm(t,n)}let Jf;function Cm(t,e,n){const s=t.type;if(!t.render){if(!e&&Jf&&!s.render){const i=s.template||Au(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,u=it(it({isCustomElement:r,delimiters:l},o),c);s.render=Jf(i,u)}}t.render=s.render||Bt}{const i=Jr(t);hs();try{qT(t)}finally{fs(),i()}}}const II={get(t,e){return bt(t,"get",""),t[e]}};function wI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,II),slots:t.slots,emit:t.emit,expose:e}}function bu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(G_(lT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)},has(e,n){return n in e||n in gr}})):t.proxy}function AI(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function RI(t){return he(t)&&"__vccOpts"in t}const Kt=(t,e)=>cT(t,e,za);function bm(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!ce(e)?vc(e)?$t(t,null,[e]):$t(t,e):$t(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vc(n)&&(n=[n]),$t(t,e,n))}const CI="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bI="http://www.w3.org/2000/svg",SI="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Zf=Sn&&Sn.createElement("template"),PI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Sn.createElementNS(bI,t):e==="mathml"?Sn.createElementNS(SI,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zf.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Zf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},NI=Symbol("_vtc");function kI(t,e,n){const s=t[NI];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ed=Symbol("_vod"),OI=Symbol("_vsh"),DI=Symbol(""),xI=/(^|;)\s*display\s*:/;function MI(t,e,n){const s=t.style,i=Je(n);let r=!1;if(n&&!i){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Go(s,l,"")}else for(const o in e)n[o]==null&&Go(s,o,"");for(const o in n)o==="display"&&(r=!0),Go(s,o,n[o])}else if(i){if(e!==n){const o=s[DI];o&&(n+=";"+o),s.cssText=n,r=xI.test(n)}}else e&&t.removeAttribute("style");ed in t&&(t[ed]=r?s.display:"",t[OI]&&(s.display="none"))}const td=/\s*!important$/;function Go(t,e,n){if(ce(n))n.forEach(s=>Go(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=LI(t,e);td.test(n)?t.setProperty(Pi(s),n.replace(td,""),"important"):t[s]=n}}const nd=["Webkit","Moz","ms"],Fl={};function LI(t,e){const n=Fl[e];if(n)return n;let s=gn(e);if(s!=="filter"&&s in t)return Fl[e]=s;s=Fa(s);for(let i=0;i<nd.length;i++){const r=nd[i]+s;if(r in t)return Fl[e]=r}return e}const sd="http://www.w3.org/1999/xlink";function id(t,e,n,s,i,r=FE(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n):n==null||r&&!R_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":String(n))}function VI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?"":String(n);(u!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=R_(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function FI(t,e,n,s){t.addEventListener(e,n,s)}function UI(t,e,n,s){t.removeEventListener(e,n,s)}const rd=Symbol("_vei");function BI(t,e,n,s,i=null){const r=t[rd]||(t[rd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=jI(e);if(s){const u=r[e]=HI(s,i);FI(t,l,u,c)}else o&&(UI(t,l,o,c),r[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function jI(t){let e;if(od.test(t)){e={};let s;for(;s=t.match(od);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pi(t.slice(2)),e]}let Ul=0;const $I=Promise.resolve(),qI=()=>Ul||($I.then(()=>Ul=0),Ul=Date.now());function HI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Zt(WI(s,n.value),e,5,[s])};return n.value=t,n.attached=qI(),n}function WI(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zI=(t,e,n,s,i,r,o,l,c)=>{const u=i==="svg";e==="class"?kI(t,s,u):e==="style"?MI(t,n,s):Ma(e)?hu(e)||BI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KI(t,e,s,u))?(VI(t,e,s,r,o,l,c),(e==="value"||e==="checked"||e==="selected")&&id(t,e,s,u,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),id(t,e,s,u))};function KI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ad(e)&&Je(n)?!1:e in t}const GI=it({patchProp:zI},PI);let ld;function QI(){return ld||(ld=tI(GI))}const YI=(...t)=>{const e=QI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=JI(s);if(!i)return;const r=e._component;!he(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,XI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function XI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function JI(t){return Je(t)?document.querySelector(t):t}const Su=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ZI={name:"App"},ew={id:"app"};function tw(t,e,n,s,i,r){const o=ST("router-view");return ni(),si("div",ew,[$t(o)])}const nw=Su(ZI,[["render",tw]]);/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Js=typeof document<"u";function sw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function Bl(t,e){const n={};for(const s in e){const i=e[s];n[s]=nn(i)?i.map(t):t(i)}return n}const Tr=()=>{},nn=Array.isArray,Sm=/#/g,iw=/&/g,rw=/\//g,ow=/=/g,aw=/\?/g,Pm=/\+/g,lw=/%5B/g,cw=/%5D/g,Nm=/%5E/g,uw=/%60/g,km=/%7B/g,hw=/%7C/g,Om=/%7D/g,fw=/%20/g;function Pu(t){return encodeURI(""+t).replace(hw,"|").replace(lw,"[").replace(cw,"]")}function dw(t){return Pu(t).replace(km,"{").replace(Om,"}").replace(Nm,"^")}function Tc(t){return Pu(t).replace(Pm,"%2B").replace(fw,"+").replace(Sm,"%23").replace(iw,"%26").replace(uw,"`").replace(km,"{").replace(Om,"}").replace(Nm,"^")}function pw(t){return Tc(t).replace(ow,"%3D")}function _w(t){return Pu(t).replace(Sm,"%23").replace(aw,"%3F")}function mw(t){return t==null?"":_w(t).replace(rw,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gw=/\/$/,yw=t=>t.replace(gw,"");function jl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Iw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ur(o)}}function vw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ew(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&mi(e.matched[s],n.matched[i])&&Dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tw(t[n],e[n]))return!1;return!0}function Tw(t,e){return nn(t)?ud(t,e):nn(e)?ud(e,t):t===e}function ud(t,e){return nn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Iw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function ww(t){if(!t)if(Js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yw(t)}const Aw=/^[^#]+#/;function Rw(t,e){return t.replace(Aw,"#")+e}function Cw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function bw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Cw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hd(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function Sw(t,e){Ic.set(t,e)}function Pw(t){const e=Ic.get(t);return Ic.delete(t),e}let Nw=()=>location.protocol+"//"+location.host;function xm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),cd(c,"")}return cd(n,t)+s+i}function kw(t,e,n,s){let i=[],r=[],o=null;const l=({state:_})=>{const g=xm(t,location),w=n.value,N=e.value;let P=0;if(_){if(n.value=g,e.value=_,o&&o===w){o=null;return}P=N?_.position-N.position:0}else s(g);i.forEach(M=>{M(n.value,w,{delta:P,type:Br.pop,direction:P?P>0?Ir.forward:Ir.back:Ir.unknown})})};function c(){o=n.value}function u(_){i.push(_);const g=()=>{const w=i.indexOf(_);w>-1&&i.splice(w,1)};return r.push(g),g}function f(){const{history:_}=window;_.state&&_.replaceState(Ne({},_.state,{scroll:Ka()}),"")}function d(){for(const _ of r)_();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function fd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ka():null}}function Ow(t){const{history:e,location:n}=window,s={value:xm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const d=t.indexOf("#"),_=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Nw()+t+c;try{e[f?"replaceState":"pushState"](u,"",_),i.value=u}catch(g){console.error(g),n[f?"replace":"assign"](_)}}function o(c,u){const f=Ne({},e.state,fd(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,f,!0),s.value=c}function l(c,u){const f=Ne({},i.value,e.state,{forward:c,scroll:Ka()});r(f.current,f,!0);const d=Ne({},fd(s.value,c,null),{position:f.position+1},u);r(c,d,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Dw(t){t=ww(t);const e=Ow(t),n=kw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ne({location:"",base:t,go:s,createHref:Rw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function xw(t){return typeof t=="string"||t&&typeof t=="object"}function Mm(t){return typeof t=="string"||typeof t=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lm=Symbol("");var dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dd||(dd={}));function gi(t,e){return Ne(new Error,{type:t,[Lm]:!0},e)}function Rn(t,e){return t instanceof Error&&Lm in t&&(e==null||!!(t.type&e))}const pd="[^/]+?",Mw={sensitive:!1,strict:!1,start:!0,end:!0},Lw=/[.+*?^${}()[\]/\\]/g;function Vw(t,e){const n=Ne({},Mw,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const _=u[d];let g=40+(n.sensitive?.25:0);if(_.type===0)d||(i+="/"),i+=_.value.replace(Lw,"\\$&"),g+=40;else if(_.type===1){const{value:w,repeatable:N,optional:P,regexp:M}=_;r.push({name:w,repeatable:N,optional:P});const F=M||pd;if(F!==pd){g+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${w}" (${F}): `+q.message)}}let V=N?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;d||(V=P&&u.length<2?`(?:/${V})`:"/"+V),P&&(V+="?"),i+=V,g+=20,P&&(g+=-8),N&&(g+=-20),F===".*"&&(g+=-50)}f.push(g)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let _=1;_<f.length;_++){const g=f[_]||"",w=r[_-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(u){let f="",d=!1;for(const _ of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of _)if(g.type===0)f+=g.value;else if(g.type===1){const{value:w,repeatable:N,optional:P}=g,M=w in u?u[w]:"";if(nn(M)&&!N)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const F=nn(M)?M.join("/"):M;if(!F)if(P)_.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);f+=F}}return f||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Fw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Vm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Fw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(_d(s))return 1;if(_d(i))return-1}return i.length-s.length}function _d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Uw={type:0,value:""},Bw=/[a-zA-Z0-9_]/;function jw(t){if(!t)return[[]];if(t==="/")return[[Uw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",f="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function _(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):_();break;case 4:_(),n=s;break;case 1:c==="("?n=2:Bw.test(c)?_():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),i}function $w(t,e,n){const s=Vw(jw(t.path),n),i=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function qw(t,e){const n=[],s=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,_){const g=!_,w=Hw(f);w.aliasOf=_&&_.record;const N=yd(e,f),P=[w];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of V)P.push(Ne({},w,{components:_?_.record.components:w.components,path:q,aliasOf:_?_.record:w}))}let M,F;for(const V of P){const{path:q}=V;if(d&&q[0]!=="/"){const ae=d.record.path,K=ae[ae.length-1]==="/"?"":"/";V.path=d.record.path+(q&&K+q)}if(M=$w(V,d,N),_?_.alias.push(M):(F=F||M,F!==M&&F.alias.push(M),g&&f.name&&!gd(M)&&o(f.name)),Fm(M)&&c(M),w.children){const ae=w.children;for(let K=0;K<ae.length;K++)r(ae[K],M,_&&_.children[K])}_=_||M}return F?()=>{o(F)}:Tr}function o(f){if(Mm(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const d=Kw(f,n);n.splice(d,0,f),f.record.name&&!gd(f)&&s.set(f.record.name,f)}function u(f,d){let _,g={},w,N;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw gi(1,{location:f});N=_.record.name,g=Ne(md(d.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),f.params&&md(f.params,_.keys.map(F=>F.name))),w=_.stringify(g)}else if(f.path!=null)w=f.path,_=n.find(F=>F.re.test(w)),_&&(g=_.parse(w),N=_.record.name);else{if(_=d.name?s.get(d.name):n.find(F=>F.re.test(d.path)),!_)throw gi(1,{location:f,currentLocation:d});N=_.record.name,g=Ne({},d.params,f.params),w=_.stringify(g)}const P=[];let M=_;for(;M;)P.unshift(M.record),M=M.parent;return{name:N,path:w,params:g,matched:P,meta:zw(P)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function md(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ww(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ww(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zw(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Kw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Vm(t,e[r])<0?s=r:n=r+1}const i=Gw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Gw(t){let e=t;for(;e=e.parent;)if(Fm(e)&&Vm(t,e)===0)return e}function Fm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Pm," "),o=r.indexOf("="),l=Ur(o<0?r:r.slice(0,o)),c=o<0?null:Ur(r.slice(o+1));if(l in e){let u=e[l];nn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function vd(t){let e="";for(let n in t){const s=t[n];if(n=pw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(s)?s.map(r=>r&&Tc(r)):[s&&Tc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Yw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Xw=Symbol(""),Ed=Symbol(""),Nu=Symbol(""),Um=Symbol(""),wc=Symbol("");function tr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=_=>{_===!1?c(gi(4,{from:n,to:e})):_ instanceof Error?c(_):xw(_)?c(gi(2,{from:e,to:_})):(o&&s.enterCallbacks[i]===o&&typeof _=="function"&&o.push(_),l())},f=r(()=>t.call(s&&s.instances[i],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(_=>c(_))})}function $l(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Jw(c)){const f=(c.__vccOpts||c)[e];f&&r.push(Yn(f,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const d=sw(f)?f.default:f;o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&Yn(g,n,s,o,l,i)()}))}}return r}function Jw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Td(t){const e=en(Nu),n=en(Um),s=Kt(()=>{const c=Ps(t.to);return e.resolve(c)}),i=Kt(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const _=d.findIndex(mi.bind(null,f));if(_>-1)return _;const g=Id(c[u-2]);return u>1&&Id(f)===g&&d[d.length-1].path!==g?d.findIndex(mi.bind(null,c[u-2])):_}),r=Kt(()=>i.value>-1&&nA(n.params,s.value.params)),o=Kt(()=>i.value>-1&&i.value===n.matched.length-1&&Dm(n.params,s.value.params));function l(c={}){return tA(c)?e[Ps(t.replace)?"replace":"push"](Ps(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:Kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Zw=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Td,setup(t,{slots:e}){const n=ja(Td(t)),{options:s}=en(Nu),i=Kt(()=>({[wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:bm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),eA=Zw;function tA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Id(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t??e??n,sA=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=en(wc),i=Kt(()=>t.route||s.value),r=en(Ed,0),o=Kt(()=>{let u=Ps(r);const{matched:f}=i.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=Kt(()=>i.value.matched[o.value]);zo(Ed,Kt(()=>o.value+1)),zo(Xw,l),zo(wc,i);const c=li();return vr(()=>[c.value,l.value,t.name],([u,f,d],[_,g,w])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===_&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!mi(f,g)||!_)&&(f.enterCallbacks[d]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,d=l.value,_=d&&d.components[f];if(!_)return Ad(n.default,{Component:_,route:u});const g=d.props[f],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=bm(_,Ne({},w,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Ad(n.default,{Component:P,route:u})||P}}});function Ad(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iA=sA;function rA(t){const e=qw(t.routes,t),n=t.parseQuery||Qw,s=t.stringifyQuery||vd,i=t.history,r=tr(),o=tr(),l=tr(),c=z_(zn);let u=zn;Js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bl.bind(null,x=>""+x),d=Bl.bind(null,mw),_=Bl.bind(null,Ur);function g(x,J){let Y,Z;return Mm(x)?(Y=e.getRecordMatcher(x),Z=J):Z=x,e.addRoute(Z,Y)}function w(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(x=>x.record)}function P(x){return!!e.getRecordMatcher(x)}function M(x,J){if(J=Ne({},J||c.value),typeof x=="string"){const T=jl(n,x,J.path),k=e.resolve({path:T.path},J),L=i.createHref(T.fullPath);return Ne(T,k,{params:_(k.params),hash:Ur(T.hash),redirectedFrom:void 0,href:L})}let Y;if(x.path!=null)Y=Ne({},x,{path:jl(n,x.path,J.path).path});else{const T=Ne({},x.params);for(const k in T)T[k]==null&&delete T[k];Y=Ne({},x,{params:d(T)}),J.params=d(J.params)}const Z=e.resolve(Y,J),ye=x.hash||"";Z.params=f(_(Z.params));const Oe=vw(s,Ne({},x,{hash:dw(ye),path:Z.path})),y=i.createHref(Oe);return Ne({fullPath:Oe,hash:ye,query:s===vd?Yw(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:y})}function F(x){return typeof x=="string"?jl(n,x,c.value.path):Ne({},x)}function V(x,J){if(u!==x)return gi(8,{from:J,to:x})}function q(x){return A(x)}function ae(x){return q(Ne(F(x),{replace:!0}))}function K(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let Z=typeof Y=="function"?Y(x):Y;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=F(Z):{path:Z},Z.params={}),Ne({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function A(x,J){const Y=u=M(x),Z=c.value,ye=x.state,Oe=x.force,y=x.replace===!0,T=K(Y);if(T)return A(Ne(F(T),{state:typeof T=="object"?Ne({},ye,T.state):ye,force:Oe,replace:y}),J||Y);const k=Y;k.redirectedFrom=J;let L;return!Oe&&Ew(s,Z,Y)&&(L=gi(16,{to:k,from:Z}),Lt(Z,Z,!0,!1)),(L?Promise.resolve(L):R(k,Z)).catch(D=>Rn(D)?Rn(D,2)?D:Wt(D):de(D,k,Z)).then(D=>{if(D){if(Rn(D,2))return A(Ne({replace:y},F(D.to),{state:typeof D.to=="object"?Ne({},ye,D.to.state):ye,force:Oe}),J||k)}else D=b(k,Z,!0,y,ye);return C(k,Z,D),D})}function v(x,J){const Y=V(x,J);return Y?Promise.reject(Y):Promise.resolve()}function I(x){const J=Bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function R(x,J){let Y;const[Z,ye,Oe]=oA(x,J);Y=$l(Z.reverse(),"beforeRouteLeave",x,J);for(const T of Z)T.leaveGuards.forEach(k=>{Y.push(Yn(k,x,J))});const y=v.bind(null,x,J);return Y.push(y),Ze(Y).then(()=>{Y=[];for(const T of r.list())Y.push(Yn(T,x,J));return Y.push(y),Ze(Y)}).then(()=>{Y=$l(ye,"beforeRouteUpdate",x,J);for(const T of ye)T.updateGuards.forEach(k=>{Y.push(Yn(k,x,J))});return Y.push(y),Ze(Y)}).then(()=>{Y=[];for(const T of Oe)if(T.beforeEnter)if(nn(T.beforeEnter))for(const k of T.beforeEnter)Y.push(Yn(k,x,J));else Y.push(Yn(T.beforeEnter,x,J));return Y.push(y),Ze(Y)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),Y=$l(Oe,"beforeRouteEnter",x,J,I),Y.push(y),Ze(Y))).then(()=>{Y=[];for(const T of o.list())Y.push(Yn(T,x,J));return Y.push(y),Ze(Y)}).catch(T=>Rn(T,8)?T:Promise.reject(T))}function C(x,J,Y){l.list().forEach(Z=>I(()=>Z(x,J,Y)))}function b(x,J,Y,Z,ye){const Oe=V(x,J);if(Oe)return Oe;const y=J===zn,T=Js?history.state:{};Y&&(Z||y?i.replace(x.fullPath,Ne({scroll:y&&T&&T.scroll},ye)):i.push(x.fullPath,ye)),c.value=x,Lt(x,J,Y,y),Wt()}let E;function Tt(){E||(E=i.listen((x,J,Y)=>{if(!ln.listening)return;const Z=M(x),ye=K(Z);if(ye){A(Ne(ye,{replace:!0}),Z).catch(Tr);return}u=Z;const Oe=c.value;Js&&Sw(hd(Oe.fullPath,Y.delta),Ka()),R(Z,Oe).catch(y=>Rn(y,12)?y:Rn(y,2)?(A(y.to,Z).then(T=>{Rn(T,20)&&!Y.delta&&Y.type===Br.pop&&i.go(-1,!1)}).catch(Tr),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),de(y,Z,Oe))).then(y=>{y=y||b(Z,Oe,!1),y&&(Y.delta&&!Rn(y,8)?i.go(-Y.delta,!1):Y.type===Br.pop&&Rn(y,20)&&i.go(-1,!1)),C(Z,Oe,y)}).catch(Tr)}))}let Mt=tr(),ze=tr(),ge;function de(x,J,Y){Wt(x);const Z=ze.list();return Z.length?Z.forEach(ye=>ye(x,J,Y)):console.error(x),Promise.reject(x)}function St(){return ge&&c.value!==zn?Promise.resolve():new Promise((x,J)=>{Mt.add([x,J])})}function Wt(x){return ge||(ge=!x,Tt(),Mt.list().forEach(([J,Y])=>x?Y(x):J()),Mt.reset()),x}function Lt(x,J,Y,Z){const{scrollBehavior:ye}=t;if(!Js||!ye)return Promise.resolve();const Oe=!Y&&Pw(hd(x.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return Y_().then(()=>ye(x,J,Oe)).then(y=>y&&bw(y)).catch(y=>de(y,x,J))}const $e=x=>i.go(x);let qe;const Bn=new Set,ln={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:P,getRoutes:N,resolve:M,options:t,push:q,replace:ae,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:St,install(x){const J=this;x.component("RouterLink",eA),x.component("RouterView",iA),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ps(c)}),Js&&!qe&&c.value===zn&&(qe=!0,q(i.location).catch(ye=>{}));const Y={};for(const ye in zn)Object.defineProperty(Y,ye,{get:()=>c.value[ye],enumerable:!0});x.provide(Nu,J),x.provide(Um,j_(Y)),x.provide(wc,c);const Z=x.unmount;Bn.add(x),x.unmount=function(){Bn.delete(x),Bn.size<1&&(u=zn,E&&E(),E=null,c.value=zn,qe=!1,ge=!1),Z()}}};function Ze(x){return x.reduce((J,Y)=>J.then(()=>I(Y)),Promise.resolve())}return ln}function oA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>mi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>mi(u,c))||i.push(c))}return[n,s,i]}var Rd={};/**
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
 */const Bm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Q=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Bm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const jm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=r>>2,d=(r&3)<<4|l>>4;let _=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(_=64)),s.push(n[f],n[d],n[_],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||d==null)throw new lA;const _=r<<2|l>>4;if(s.push(_),u!==64){const g=l<<4&240|u>>2;if(s.push(g),d!==64){const w=u<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(t){const e=jm(t);return Ga.encodeByteArray(e,!0)},aa=function(t){return $m(t).replace(/\./g,"")},la=function(t){try{return Ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cA(t){return qm(void 0,t)}function qm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uA(n)||(t[n]=qm(t[n],e[n]));return t}function uA(t){return t!=="__proto__"}/**
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
 */function hA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fA=()=>hA().__FIREBASE_DEFAULTS__,dA=()=>{if(typeof process>"u"||typeof Rd>"u")return;const t=Rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&la(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return fA()||dA()||pA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_A=t=>{var e,n;return(n=(e=Qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mA=t=>{const e=_A(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hm=()=>{var t;return(t=Qa())===null||t===void 0?void 0:t.config},gA=t=>{var e;return(e=Qa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function yA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[aa(JSON.stringify(n)),aa(JSON.stringify(o)),""].join(".")}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ku(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function vA(){var t;const e=(t=Qa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zm(){return Bm.NODE_ADMIN===!0}function TA(){return!vA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function IA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const wA="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wA,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?AA(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,s)}}function AA(t,e){return t.replace(RA,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const RA=/\{\$([^}]+)}/g;/**
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
 */function $r(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
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
 */const Gm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$r(la(r[0])||""),n=$r(la(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},CA=function(t){const e=Gm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bA=function(t){const e=Gm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ca(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bd(r)&&bd(o)){if(!Ac(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ou(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class SA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const _=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let d=0;d<80;d++){d<40?d<20?(u=l^r&(o^l),f=1518500249):(u=r^o^l,f=1859775393):d<60?(u=r&o|l&(r|o),f=2400959708):(u=r^o^l,f=3395469782);const _=(i<<5|i>>>27)+u+c+f+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function PA(t,e){const n=new NA(t,e);return n.subscribe.bind(n)}class NA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ql),i.error===void 0&&(i.error=ql),i.complete===void 0&&(i.complete=ql);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}function OA(t,e){return`${t} failed: ${e} argument `}/**
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
 */const DA=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ya=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vs="[DEFAULT]";/**
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
 */class xA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LA(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MA(t){return t===vs?void 0:t}function LA(t){return t.instantiationMode==="EAGER"}/**
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
 */class VA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const FA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},UA=pe.INFO,BA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},jA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=BA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=UA,this._logHandler=jA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $A=(t,e)=>e.some(n=>t instanceof n);let Sd,Pd;function qA(){return Sd||(Sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HA(){return Pd||(Pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,Rc=new WeakMap,Ym=new WeakMap,Hl=new WeakMap,Du=new WeakMap;function WA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ts(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qm.set(n,t)}).catch(()=>{}),Du.set(e,t),e}function zA(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KA(t){Cc=t(Cc)}function GA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wl(this),e,...n);return Ym.set(s,e.sort?e.sort():[e]),ts(s)}:HA().includes(t)?function(...e){return t.apply(Wl(this),e),ts(Qm.get(this))}:function(...e){return ts(t.apply(Wl(this),e))}}function QA(t){return typeof t=="function"?GA(t):(t instanceof IDBTransaction&&zA(t),$A(t,qA())?new Proxy(t,Cc):t)}function ts(t){if(t instanceof IDBRequest)return WA(t);if(Hl.has(t))return Hl.get(t);const e=QA(t);return e!==t&&(Hl.set(t,e),Du.set(e,t)),e}const Wl=t=>Du.get(t);function YA(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ts(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ts(o.result),c.oldVersion,c.newVersion,ts(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const XA=["get","getKey","getAll","getAllKeys","count"],JA=["put","add","delete","clear"],zl=new Map;function Nd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=JA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||XA.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return zl.set(e,r),r}KA(t=>({...t,get:(e,n,s)=>Nd(e,n)||t.get(e,n,s),has:(e,n)=>!!Nd(e,n)||t.has(e,n)}));/**
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
 */class ZA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",kd="0.10.5";/**
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
 */const ks=new Zr("@firebase/app"),tR="@firebase/app-compat",nR="@firebase/analytics-compat",sR="@firebase/analytics",iR="@firebase/app-check-compat",rR="@firebase/app-check",oR="@firebase/auth",aR="@firebase/auth-compat",lR="@firebase/database",cR="@firebase/database-compat",uR="@firebase/functions",hR="@firebase/functions-compat",fR="@firebase/installations",dR="@firebase/installations-compat",pR="@firebase/messaging",_R="@firebase/messaging-compat",mR="@firebase/performance",gR="@firebase/performance-compat",yR="@firebase/remote-config",vR="@firebase/remote-config-compat",ER="@firebase/storage",TR="@firebase/storage-compat",IR="@firebase/firestore",wR="@firebase/vertexai-preview",AR="@firebase/firestore-compat",RR="firebase",CR="10.12.2";/**
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
 */const Sc="[DEFAULT]",bR={[bc]:"fire-core",[tR]:"fire-core-compat",[sR]:"fire-analytics",[nR]:"fire-analytics-compat",[rR]:"fire-app-check",[iR]:"fire-app-check-compat",[oR]:"fire-auth",[aR]:"fire-auth-compat",[lR]:"fire-rtdb",[cR]:"fire-rtdb-compat",[uR]:"fire-fn",[hR]:"fire-fn-compat",[fR]:"fire-iid",[dR]:"fire-iid-compat",[pR]:"fire-fcm",[_R]:"fire-fcm-compat",[mR]:"fire-perf",[gR]:"fire-perf-compat",[yR]:"fire-rc",[vR]:"fire-rc-compat",[ER]:"fire-gcs",[TR]:"fire-gcs-compat",[IR]:"fire-fst",[AR]:"fire-fst-compat",[wR]:"fire-vertex","fire-js":"fire-js",[RR]:"fire-js-all"};/**
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
 */const ua=new Map,SR=new Map,Pc=new Map;function Od(t,e){try{t.container.addComponent(e)}catch(n){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Pc.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of ua.values())Od(n,t);for(const n of SR.values())Od(n,t);return!0}function PR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cr(t){return t.settings!==void 0}/**
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
 */const NR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new ki("app","Firebase",NR);/**
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
 */class kR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=CR;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ns.create("bad-app-name",{appName:String(i)});if(n||(n=Hm()),!n)throw ns.create("no-options");const r=ua.get(i);if(r){if(Ac(n,r.options)&&Ac(s,r.config))return r;throw ns.create("duplicate-app",{appName:i})}const o=new VA(i);for(const c of Pc.values())o.addComponent(c);const l=new kR(n,s,o);return ua.set(i,l),l}function Jm(t=Sc){const e=ua.get(t);if(!e&&t===Sc&&Hm())return Xm();if(!e)throw ns.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let i=(s=bR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(l.join(" "));return}yn(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OR="firebase-heartbeat-database",DR=1,qr="firebase-heartbeat-store";let Kl=null;function Zm(){return Kl||(Kl=YA(OR,DR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ns.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function xR(t){try{const n=(await Zm()).transaction(qr),s=await n.objectStore(qr).get(eg(t));return await n.done,s}catch(e){if(e instanceof Fn)ks.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ks.warn(n.message)}}}async function Dd(t,e){try{const s=(await Zm()).transaction(qr,"readwrite");await s.objectStore(qr).put(e,eg(t)),await s.done}catch(n){if(n instanceof Fn)ks.warn(n.message);else{const s=ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ks.warn(s.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MR=1024,LR=30*24*60*60*1e3;class VR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=LR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xd(),{heartbeatsToSend:s,unsentEntries:i}=FR(this._heartbeatsCache.heartbeats),r=aa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xd(){return new Date().toISOString().substring(0,10)}function FR(t,e=MR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Md(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class UR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?IA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(t){return aa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BR(t){yn(new on("platform-logger",e=>new ZA(e),"PRIVATE")),yn(new on("heartbeat",e=>new VR(e),"PRIVATE")),Ot(bc,kd,t),Ot(bc,kd,"esm2017"),Ot("fire-js","")}BR("");var Ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,tg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function I(){}I.prototype=v.prototype,A.D=v.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(R,C,b){for(var E=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)E[Tt-2]=arguments[Tt];return v.prototype[C].apply(R,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,I){I||(I=0);var R=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)R[C]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(C=0;16>C;++C)R[C]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=A.g[0],I=A.g[1],C=A.g[2];var b=A.g[3],E=v+(b^I&(C^b))+R[0]+3614090360&4294967295;v=I+(E<<7&4294967295|E>>>25),E=b+(C^v&(I^C))+R[1]+3905402710&4294967295,b=v+(E<<12&4294967295|E>>>20),E=C+(I^b&(v^I))+R[2]+606105819&4294967295,C=b+(E<<17&4294967295|E>>>15),E=I+(v^C&(b^v))+R[3]+3250441966&4294967295,I=C+(E<<22&4294967295|E>>>10),E=v+(b^I&(C^b))+R[4]+4118548399&4294967295,v=I+(E<<7&4294967295|E>>>25),E=b+(C^v&(I^C))+R[5]+1200080426&4294967295,b=v+(E<<12&4294967295|E>>>20),E=C+(I^b&(v^I))+R[6]+2821735955&4294967295,C=b+(E<<17&4294967295|E>>>15),E=I+(v^C&(b^v))+R[7]+4249261313&4294967295,I=C+(E<<22&4294967295|E>>>10),E=v+(b^I&(C^b))+R[8]+1770035416&4294967295,v=I+(E<<7&4294967295|E>>>25),E=b+(C^v&(I^C))+R[9]+2336552879&4294967295,b=v+(E<<12&4294967295|E>>>20),E=C+(I^b&(v^I))+R[10]+4294925233&4294967295,C=b+(E<<17&4294967295|E>>>15),E=I+(v^C&(b^v))+R[11]+2304563134&4294967295,I=C+(E<<22&4294967295|E>>>10),E=v+(b^I&(C^b))+R[12]+1804603682&4294967295,v=I+(E<<7&4294967295|E>>>25),E=b+(C^v&(I^C))+R[13]+4254626195&4294967295,b=v+(E<<12&4294967295|E>>>20),E=C+(I^b&(v^I))+R[14]+2792965006&4294967295,C=b+(E<<17&4294967295|E>>>15),E=I+(v^C&(b^v))+R[15]+1236535329&4294967295,I=C+(E<<22&4294967295|E>>>10),E=v+(C^b&(I^C))+R[1]+4129170786&4294967295,v=I+(E<<5&4294967295|E>>>27),E=b+(I^C&(v^I))+R[6]+3225465664&4294967295,b=v+(E<<9&4294967295|E>>>23),E=C+(v^I&(b^v))+R[11]+643717713&4294967295,C=b+(E<<14&4294967295|E>>>18),E=I+(b^v&(C^b))+R[0]+3921069994&4294967295,I=C+(E<<20&4294967295|E>>>12),E=v+(C^b&(I^C))+R[5]+3593408605&4294967295,v=I+(E<<5&4294967295|E>>>27),E=b+(I^C&(v^I))+R[10]+38016083&4294967295,b=v+(E<<9&4294967295|E>>>23),E=C+(v^I&(b^v))+R[15]+3634488961&4294967295,C=b+(E<<14&4294967295|E>>>18),E=I+(b^v&(C^b))+R[4]+3889429448&4294967295,I=C+(E<<20&4294967295|E>>>12),E=v+(C^b&(I^C))+R[9]+568446438&4294967295,v=I+(E<<5&4294967295|E>>>27),E=b+(I^C&(v^I))+R[14]+3275163606&4294967295,b=v+(E<<9&4294967295|E>>>23),E=C+(v^I&(b^v))+R[3]+4107603335&4294967295,C=b+(E<<14&4294967295|E>>>18),E=I+(b^v&(C^b))+R[8]+1163531501&4294967295,I=C+(E<<20&4294967295|E>>>12),E=v+(C^b&(I^C))+R[13]+2850285829&4294967295,v=I+(E<<5&4294967295|E>>>27),E=b+(I^C&(v^I))+R[2]+4243563512&4294967295,b=v+(E<<9&4294967295|E>>>23),E=C+(v^I&(b^v))+R[7]+1735328473&4294967295,C=b+(E<<14&4294967295|E>>>18),E=I+(b^v&(C^b))+R[12]+2368359562&4294967295,I=C+(E<<20&4294967295|E>>>12),E=v+(I^C^b)+R[5]+4294588738&4294967295,v=I+(E<<4&4294967295|E>>>28),E=b+(v^I^C)+R[8]+2272392833&4294967295,b=v+(E<<11&4294967295|E>>>21),E=C+(b^v^I)+R[11]+1839030562&4294967295,C=b+(E<<16&4294967295|E>>>16),E=I+(C^b^v)+R[14]+4259657740&4294967295,I=C+(E<<23&4294967295|E>>>9),E=v+(I^C^b)+R[1]+2763975236&4294967295,v=I+(E<<4&4294967295|E>>>28),E=b+(v^I^C)+R[4]+1272893353&4294967295,b=v+(E<<11&4294967295|E>>>21),E=C+(b^v^I)+R[7]+4139469664&4294967295,C=b+(E<<16&4294967295|E>>>16),E=I+(C^b^v)+R[10]+3200236656&4294967295,I=C+(E<<23&4294967295|E>>>9),E=v+(I^C^b)+R[13]+681279174&4294967295,v=I+(E<<4&4294967295|E>>>28),E=b+(v^I^C)+R[0]+3936430074&4294967295,b=v+(E<<11&4294967295|E>>>21),E=C+(b^v^I)+R[3]+3572445317&4294967295,C=b+(E<<16&4294967295|E>>>16),E=I+(C^b^v)+R[6]+76029189&4294967295,I=C+(E<<23&4294967295|E>>>9),E=v+(I^C^b)+R[9]+3654602809&4294967295,v=I+(E<<4&4294967295|E>>>28),E=b+(v^I^C)+R[12]+3873151461&4294967295,b=v+(E<<11&4294967295|E>>>21),E=C+(b^v^I)+R[15]+530742520&4294967295,C=b+(E<<16&4294967295|E>>>16),E=I+(C^b^v)+R[2]+3299628645&4294967295,I=C+(E<<23&4294967295|E>>>9),E=v+(C^(I|~b))+R[0]+4096336452&4294967295,v=I+(E<<6&4294967295|E>>>26),E=b+(I^(v|~C))+R[7]+1126891415&4294967295,b=v+(E<<10&4294967295|E>>>22),E=C+(v^(b|~I))+R[14]+2878612391&4294967295,C=b+(E<<15&4294967295|E>>>17),E=I+(b^(C|~v))+R[5]+4237533241&4294967295,I=C+(E<<21&4294967295|E>>>11),E=v+(C^(I|~b))+R[12]+1700485571&4294967295,v=I+(E<<6&4294967295|E>>>26),E=b+(I^(v|~C))+R[3]+2399980690&4294967295,b=v+(E<<10&4294967295|E>>>22),E=C+(v^(b|~I))+R[10]+4293915773&4294967295,C=b+(E<<15&4294967295|E>>>17),E=I+(b^(C|~v))+R[1]+2240044497&4294967295,I=C+(E<<21&4294967295|E>>>11),E=v+(C^(I|~b))+R[8]+1873313359&4294967295,v=I+(E<<6&4294967295|E>>>26),E=b+(I^(v|~C))+R[15]+4264355552&4294967295,b=v+(E<<10&4294967295|E>>>22),E=C+(v^(b|~I))+R[6]+2734768916&4294967295,C=b+(E<<15&4294967295|E>>>17),E=I+(b^(C|~v))+R[13]+1309151649&4294967295,I=C+(E<<21&4294967295|E>>>11),E=v+(C^(I|~b))+R[4]+4149444226&4294967295,v=I+(E<<6&4294967295|E>>>26),E=b+(I^(v|~C))+R[11]+3174756917&4294967295,b=v+(E<<10&4294967295|E>>>22),E=C+(v^(b|~I))+R[2]+718787259&4294967295,C=b+(E<<15&4294967295|E>>>17),E=I+(b^(C|~v))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+b&4294967295}s.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var I=v-this.blockSize,R=this.B,C=this.h,b=0;b<v;){if(C==0)for(;b<=I;)i(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<v;)if(R[C++]=A.charCodeAt(b++),C==this.blockSize){i(this,R),C=0;break}}else for(;b<v;)if(R[C++]=A[b++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=v},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var I=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=I&255,I/=256;for(this.u(A),A=Array(16),v=I=0;4>v;++v)for(var R=0;32>R;R+=8)A[I++]=this.g[v]>>>R&255;return A};function r(A,v){var I=l;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=v(A)}function o(A,v){this.h=v;for(var I=[],R=!0,C=A.length-1;0<=C;C--){var b=A[C]|0;R&&b==v||(I[C]=b,R=!1)}this.g=I}var l={};function c(A){return-128<=A&&128>A?r(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return P(u(-A));for(var v=[],I=1,R=0;A>=I;R++)v[R]=A/I|0,I*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return P(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(v,8)),R=d,C=0;C<A.length;C+=8){var b=Math.min(8,A.length-C),E=parseInt(A.substring(C,C+b),v);8>b?(b=u(Math.pow(v,b)),R=R.j(b).add(u(E))):(R=R.j(I),R=R.add(u(E)))}return R}var d=c(0),_=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-P(this).m();for(var A=0,v=1,I=0;I<this.g.length;I++){var R=this.i(I);A+=(0<=R?R:4294967296+R)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(w(this))return"0";if(N(this))return"-"+P(this).toString(A);for(var v=u(Math.pow(A,6)),I=this,R="";;){var C=q(I,v).g;I=M(I,C.j(v));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=C,w(I))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function w(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=M(this,A),N(A)?-1:w(A)?0:1};function P(A){for(var v=A.g.length,I=[],R=0;R<v;R++)I[R]=~A.g[R];return new o(I,~A.h).add(_)}t.abs=function(){return N(this)?P(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0,C=0;C<=v;C++){var b=R+(this.i(C)&65535)+(A.i(C)&65535),E=(b>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);R=E>>>16,b&=65535,E&=65535,I[C]=E<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function M(A,v){return A.add(P(v))}t.j=function(A){if(w(this)||w(A))return d;if(N(this))return N(A)?P(this).j(P(A)):P(P(this).j(A));if(N(A))return P(this.j(P(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,I=[],R=0;R<2*v;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<A.g.length;C++){var b=this.i(R)>>>16,E=this.i(R)&65535,Tt=A.i(C)>>>16,Mt=A.i(C)&65535;I[2*R+2*C]+=E*Mt,F(I,2*R+2*C),I[2*R+2*C+1]+=b*Mt,F(I,2*R+2*C+1),I[2*R+2*C+1]+=E*Tt,F(I,2*R+2*C+1),I[2*R+2*C+2]+=b*Tt,F(I,2*R+2*C+2)}for(R=0;R<v;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=v;R<2*v;R++)I[R]=0;return new o(I,0)};function F(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function V(A,v){this.g=A,this.h=v}function q(A,v){if(w(v))throw Error("division by zero");if(w(A))return new V(d,d);if(N(A))return v=q(P(A),v),new V(P(v.g),P(v.h));if(N(v))return v=q(A,P(v)),new V(P(v.g),v.h);if(30<A.g.length){if(N(A)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var I=_,R=v;0>=R.l(A);)I=ae(I),R=ae(R);var C=K(I,1),b=K(R,1);for(R=K(R,2),I=K(I,2);!w(R);){var E=b.add(R);0>=E.l(A)&&(C=C.add(I),b=E),R=K(R,1),I=K(I,1)}return v=M(A,C.j(v)),new V(C,v)}for(C=d;0<=A.l(v);){for(I=Math.max(1,Math.floor(A.m()/v.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=u(I),E=b.j(v);N(E)||0<E.l(A);)I-=R,b=u(I),E=b.j(v);w(b)&&(b=_),C=C.add(b),A=M(A,E)}return new V(C,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)&A.i(R);return new o(I,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)|A.i(R);return new o(I,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],R=0;R<v;R++)I[R]=this.i(R)^A.i(R);return new o(I,this.h^A.h)};function ae(A){for(var v=A.g.length+1,I=[],R=0;R<v;R++)I[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(I,A.h)}function K(A,v){var I=v>>5;v%=32;for(var R=A.g.length-I,C=[],b=0;b<R;b++)C[b]=0<v?A.i(b+I)>>>v|A.i(b+I+1)<<32-v:A.i(b+I);return new o(C,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,tg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ns=o}).apply(typeof Ld<"u"?Ld:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ng,sg,ur,ig,Qo,Nc,rg,og,ag;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(a,h){if(h)e:{var p=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in p))break e;p=p[S]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var p=0,m=!1,S={next:function(){if(!m&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return r(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(h,S)}}return function(){return a.apply(h,arguments)}}function _(a,h,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,_.apply(null,arguments)}function g(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function w(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,S,O){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return h.prototype[S].apply(m,z)}}function N(a){const h=a.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function P(a,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const S=a.length||0,O=m.length||0;a.length=S+O;for(let z=0;z<O;z++)a[S+z]=m[z]}else a.push(m)}}class M{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ae=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function K(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function A(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let p,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(p in m)a[p]=m[p];for(let O=0;O<I.length;O++)p=I[O],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function E(){var a=St;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Tt{constructor(){this.h=this.g=null}add(h,p){const m=Mt.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Mt=new M(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,de=!1,St=new Tt,Wt=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then(Lt)}};var Lt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){b(p)}var h=Mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}de=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function ln(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{q(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ze[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}w(ln,qe);var Ze={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,h,p,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=S,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,p,m,S){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=y(a,h,m,S);return-1<z?(h=a[z],p||(h.fa=!1)):(h=new Y(h,this.src,O,!!m,S),h.fa=p,a.push(h)),h};function Oe(a,h){var p=h.type;if(p in a.g){var m=a.g[p],S=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=S)&&Array.prototype.splice.call(m,S,1),O&&(Z(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function y(a,h,p,m){for(var S=0;S<a.length;++S){var O=a[S];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==m)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),k={};function L(a,h,p,m,S){if(Array.isArray(h)){for(var O=0;O<h.length;O++)L(a,h[O],p,m,S);return null}return p=ne(p),a&&a[x]?a.K(h,p,u(m)?!!m.capture:!!m,S):D(a,h,p,!1,m,S)}function D(a,h,p,m,S,O){if(!h)throw Error("Invalid event type");var z=u(S)?!!S.capture:!!S,De=X(a);if(De||(a[T]=De=new ye(a)),p=De.add(h,p,m,z,O),p.proxy)return p;if(m=H(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)Bn||(S=z),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(W(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function H(){function a(p){return h.call(a.src,a.listener,p)}const h=U;return a}function G(a,h,p,m,S){if(Array.isArray(h))for(var O=0;O<h.length;O++)G(a,h[O],p,m,S);else m=u(m)?!!m.capture:!!m,p=ne(p),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=y(O,p,m,S),-1<p&&(Z(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=y(h,p,m,S)),(p=-1<a?h[a]:null)&&$(p))}function $(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])Oe(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(W(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=X(h))?(Oe(p,a),p.h==0&&(p.src=null,h[T]=null)):Z(a)}}}function W(a){return a in k?k[a]:k[a]="on"+a}function U(a,h){if(a.da)a=!0;else{h=new ln(h,this);var p=a.listener,m=a.ha||a.src;a.fa&&$(a),a=p.call(m,h)}return a}function X(a){return a=a[T],a instanceof ye?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function te(){$e.call(this),this.i=new ye(this),this.M=this,this.F=null}w(te,$e),te.prototype[x]=!0,te.prototype.removeEventListener=function(a,h,p,m){G(this,a,h,p,m)};function re(a,h){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var S=h;h=new qe(m,a),R(h,S)}if(S=!0,p)for(var O=p.length-1;0<=O;O--){var z=h.g=p[O];S=Se(z,m,!0,h)&&S}if(z=h.g=a,S=Se(z,m,!0,h)&&S,S=Se(z,m,!1,h)&&S,p)for(O=0;O<p.length;O++)z=h.g=p[O],S=Se(z,m,!1,h)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],m=0;m<p.length;m++)Z(p[m]);delete a.g[h],a.h--}}this.F=null},te.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},te.prototype.L=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function Se(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==p){var De=z.listener,rt=z.ha||z.src;z.fa&&Oe(a.i,z),S=De.call(rt,m)!==!1&&S}}return S&&!m.defaultPrevented}function Ie(a,h,p){if(typeof a=="function")p&&(a=_(a,p));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function We(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Pt extends $e{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(a){$e.call(this),this.h=a,this.g={}}w(Vt,$e);var Bi=[];function jn(a){K(a.g,function(h,p){this.g.hasOwnProperty(p)&&$(h)},a),a.g={}}Vt.prototype.N=function(){Vt.aa.N.call(this),jn(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ws=l.JSON.stringify,It=l.JSON.parse,Ft=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function zs(){}zs.prototype.h=null;function Vh(a){return a.h||(a.h=a.i())}function Fh(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gl(){qe.call(this,"d")}w(gl,qe);function yl(){qe.call(this,"c")}w(yl,qe);var ds={},Uh=null;function po(){return Uh=Uh||new te}ds.La="serverreachability";function Bh(a){qe.call(this,ds.La,a)}w(Bh,qe);function $i(a){const h=po();re(h,new Bh(h))}ds.STAT_EVENT="statevent";function jh(a,h){qe.call(this,ds.STAT_EVENT,a),this.stat=h}w(jh,qe);function wt(a){const h=po();re(h,new jh(h,a))}ds.Ma="timingevent";function $h(a,h){qe.call(this,ds.Ma,a),this.size=h}w($h,qe);function qi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function iE(a,h,p,m,S,O){a.info(function(){if(a.g)if(O)for(var z="",De=O.split("&"),rt=0;rt<De.length;rt++){var Ae=De[rt].split("=");if(1<Ae.length){var ht=Ae[0];Ae=Ae[1];var ft=ht.split("_");z=2<=ft.length&&ft[1]=="type"?z+(ht+"="+Ae+"&"):z+(ht+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+p+`
`+z})}function rE(a,h,p,m,S,O,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+p+`
`+O+" "+z})}function Ks(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aE(a,p)+(m?" "+m:"")})}function oE(a,h){a.info(function(){return"TIMEOUT: "+h})}Hi.prototype.info=function(){};function aE(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var O=S[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return Ws(p)}catch{return h}}var _o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vl;function mo(){}w(mo,zs),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},vl=new mo;function $n(a,h,p,m){this.j=a,this.i=h,this.l=p,this.R=m||1,this.U=new Vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hh}function Hh(){this.i=null,this.g="",this.h=!1}var Wh={},El={};function Tl(a,h,p){a.L=1,a.v=Eo(wn(h)),a.m=p,a.P=!0,zh(a,null)}function zh(a,h){a.F=Date.now(),go(a),a.A=wn(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),af(p.i,"t",m),a.C=0,p=a.j.J,a.h=new Hh,a.g=Rf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Pt(_(a.Y,a,a.g),a.O)),h=a.U,p=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Bi[0]=S.toString()),S=Bi);for(var O=0;O<S.length;O++){var z=L(p,S[O],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$i(),iE(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const ft=An(this.g);var h=this.g.Ba();const Ys=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||pf(this.g)))){this.J||ft!=4||h==7||(h==8||0>=Ys?$i(3):$i(2)),Il(this);var p=this.g.Z();this.X=p;t:if(Kh(this)){var m=pf(this.g);a="";var S=m.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),Wi(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(O&&h==S-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,rE(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,rt=this.g;if((De=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(De)){var Ae=De;break t}}Ae=null}if(p=Ae)Ks(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,p);else{this.o=!1,this.s=3,wt(12),ps(this),Wi(this);break e}}if(this.P){p=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=lE(this,z),zt==El){ft==4&&(this.s=4,wt(14),p=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Wh){this.s=4,wt(15),Ks(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Ks(this.i,this.l,zt,null),wl(this,zt);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,wt(16),p=!1),this.o=this.o&&p,!p)Ks(this.i,this.l,z,"[Invalid Chunked Response]"),ps(this),Wi(this);else if(0<z.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Pl(ht),ht.M=!0,wt(11))}}else Ks(this.i,this.l,z,null),wl(this,z);ft==4&&ps(this),this.o&&!this.J&&(ft==4?Tf(this.j,this):(this.o=!1,go(this)))}else RE(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ps(this),Wi(this)}}}catch{}finally{}};function Kh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lE(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?El:(p=Number(h.substring(p,m)),isNaN(p)?Wh:(m+=1,m+p>h.length?El:(h=h.slice(m,m+p),a.C=m+p,h)))}$n.prototype.cancel=function(){this.J=!0,ps(this)};function go(a){a.S=Date.now()+a.I,Gh(a,a.I)}function Gh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qi(_(a.ba,a),h)}function Il(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oE(this.i,this.A),this.L!=2&&($i(),wt(17)),ps(this),this.s=2,Wi(this)):Gh(this,this.S-a)};function Wi(a){a.j.G==0||a.J||Tf(a.j,a)}function ps(a){Il(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,jn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function wl(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Al(p.h,a))){if(!a.K&&Al(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ro(p),wo(p);else break e;Sl(p),wt(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=qi(_(p.Za,p),6e3));if(1>=Xh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ms(p,11)}else if((a.K||p.g==a)&&Ro(p),!F(h))for(S=p.Da.g.parse(h),h=0;h<S.length;h++){let Ae=S[h];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const ht=Ae[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const ft=Ae[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const Ys=Ae[5];Ys!=null&&typeof Ys=="number"&&0<Ys&&(m=1.5*Ys,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const zt=a.g;if(zt){const bo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bo){var O=m.h;O.g||bo.indexOf("spdy")==-1&&bo.indexOf("quic")==-1&&bo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Rl(O,O.h),O.h=null))}if(m.D){const Nl=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nl&&(m.ya=Nl,Me(m.I,m.D,Nl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var z=a;if(m.qa=Af(m,m.J?m.ia:null,m.W),z.K){Jh(m.h,z);var De=z,rt=m.L;rt&&(De.I=rt),De.B&&(Il(De),go(De)),m.g=z}else vf(m);0<p.i.length&&Ao(p)}else Ae[0]!="stop"&&Ae[0]!="close"||ms(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?ms(p,7):bl(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}$i(4)}catch{}}var cE=class{constructor(a,h){this.g=a,this.map=h}};function Qh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xh(a){return a.h?1:a.g?a.g.size:0}function Al(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rl(a,h){a.g?a.g.add(h):a.h=h}function Jh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return N(a.i)}function uE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,m=0;m<p;m++)h.push(a[m]);return h}h=[],p=0;for(m in a)h[p++]=a[m];return h}function hE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const m in a)h[p++]=m;return h}}}function ef(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=hE(a),m=uE(a),S=m.length,O=0;O<S;O++)h.call(void 0,m[O],p&&p[O],a)}var tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),S=null;if(0<=m){var O=a[p].substring(0,m);S=a[p].substring(m+1)}else O=a[p];h(O,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function _s(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _s){this.h=a.h,yo(this,a.j),this.o=a.o,this.g=a.g,vo(this,a.s),this.l=a.l;var h=a.i,p=new Gi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),nf(this,p),this.m=a.m}else a&&(h=String(a).match(tf))?(this.h=!1,yo(this,h[1]||"",!0),this.o=zi(h[2]||""),this.g=zi(h[3]||"",!0),vo(this,h[4]),this.l=zi(h[5]||"",!0),nf(this,h[6]||"",!0),this.m=zi(h[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}_s.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ki(h,sf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ki(h,sf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ki(p,p.charAt(0)=="/"?_E:pE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ki(p,gE)),a.join("")};function wn(a){return new _s(a)}function yo(a,h,p){a.j=p?zi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function vo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function nf(a,h,p){h instanceof Gi?(a.i=h,yE(a.i,a.h)):(p||(h=Ki(h,mE)),a.i=new Gi(h,a.h))}function Me(a,h,p){a.i.set(h,p)}function Eo(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ki(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,dE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sf=/[#\/\?@]/g,pE=/[#\?:]/g,_E=/[#\?]/g,mE=/[#\?@]/g,gE=/#/g;function Gi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&fE(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Gi.prototype,t.add=function(a,h){qn(this),this.i=null,a=Gs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function rf(a,h){qn(a),h=Gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function of(a,h){return qn(a),h=Gs(a,h),a.g.has(h)}t.forEach=function(a,h){qn(this),this.g.forEach(function(p,m){p.forEach(function(S){a.call(h,S,m,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const S=a[m];for(let O=0;O<S.length;O++)p.push(h[m])}return p},t.V=function(a){qn(this);let h=[];if(typeof a=="string")of(this,a)&&(h=h.concat(this.g.get(Gs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return qn(this),this.i=null,a=Gs(this,a),of(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function af(a,h,p){rf(a,h),0<p.length&&(a.i=null,a.g.set(Gs(a,h),N(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const O=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var S=O;z[m]!==""&&(S+="="+encodeURIComponent(String(z[m]))),a.push(S)}}return this.i=a.join("&")};function Gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function yE(a,h){h&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(p,m){var S=m.toLowerCase();m!=S&&(rf(this,m),af(this,S,p))},a)),a.j=h}function vE(a,h){const p=new Hi;if(l.Image){const m=new Image;m.onload=g(Hn,p,"TestLoadImage: loaded",!0,h,m),m.onerror=g(Hn,p,"TestLoadImage: error",!1,h,m),m.onabort=g(Hn,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=g(Hn,p,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function EE(a,h){const p=new Hi,m=new AbortController,S=setTimeout(()=>{m.abort(),Hn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(S),O.ok?Hn(p,"TestPingServer: ok",!0,h):Hn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Hn(p,"TestPingServer: error",!1,h)})}function Hn(a,h,p,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(p)}catch{}}function TE(){this.g=new Ft}function IE(a,h,p){const m=p||"";try{ef(a,function(S,O){let z=S;u(S)&&(z=Ws(S)),h.push(m+O+"="+encodeURIComponent(z))})}catch(S){throw h.push(m+"type="+encodeURIComponent("_badmap")),S}}function Qi(a){this.l=a.Ub||null,this.j=a.eb||!1}w(Qi,zs),Qi.prototype.g=function(){return new To(this.l,this.j)},Qi.prototype.i=function(a){return function(){return a}}({});function To(a,h){te.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(To,te),t=To.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Yi(this):Xi(this),this.readyState==3&&lf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Yi(this))},t.Qa=function(a){this.g&&(this.response=a,Yi(this))},t.ga=function(){this.g&&Yi(this)};function Yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cf(a){let h="";return K(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Cl(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=cf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Me(a,h,p))}function He(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(He,te);var wE=/^https?$/i,AE=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vl.g(),this.v=this.o?Vh(this.o):Vh(vl),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){uf(this,O);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)p.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())p.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AE,h,void 0))||m||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{df(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){uf(this,O)}};function uf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,hf(a),Io(a)}function hf(a){a.A||(a.A=!0,re(a,"complete"),re(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,re(this,"complete"),re(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ff(this):this.bb())},t.bb=function(){ff(this)};function ff(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Ie(a.Ea,0,a);else if(re(a,"readystatechange"),An(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=z===0){var S=String(a.D).match(tf)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!wE.test(S?S.toLowerCase():"")}p=m}if(p)re(a,"complete"),re(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",hf(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){df(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||re(a,"ready");try{p.onreadystatechange=m}catch{}}}function df(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),It(h)}};function pf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RE(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var p=C(a[m]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[S]||[];h[S]=O,O.push(p)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function _f(a){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,a),this.cb=Ji("retryDelaySeedMs",1e4,a),this.Wa=Ji("forwardChannelMaxRetries",2,a),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qh(a&&a.concurrentRequestLimit),this.Da=new TE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_f.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,m){wt(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=Af(this,null,this.W),Ao(this)};function bl(a){if(mf(a),a.G==3){var h=a.U++,p=wn(a.I);if(Me(p,"SID",a.K),Me(p,"RID",h),Me(p,"TYPE","terminate"),Zi(a,p),h=new $n(a,a.j,h),h.L=2,h.v=Eo(wn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Rf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),go(h)}wf(a)}function wo(a){a.g&&(Pl(a),a.g.cancel(),a.g=null)}function mf(a){wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ao(a){if(!Yh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ge||Wt(),de||(ge(),de=!0),St.add(h,a),a.B=0}}function CE(a,h){return Xh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qi(_(a.Ga,a,h),If(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new $n(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(S.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=yf(this,S,h),p=wn(this.I),Me(p,"RID",a),Me(p,"CVER",22),this.D&&Me(p,"X-HTTP-Session-Id",this.D),Zi(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(cf(O)))+"&"+h:this.m&&Cl(p,this.m,O)),Rl(this.h,S),this.Ua&&Me(p,"TYPE","init"),this.P?(Me(p,"$req",h),Me(p,"SID","null"),S.T=!0,Tl(S,p,null)):Tl(S,p,h),this.G=2}}else this.G==3&&(a?gf(this,a):this.i.length==0||Yh(this.h)||gf(this))};function gf(a,h){var p;h?p=h.l:p=a.U++;const m=wn(a.I);Me(m,"SID",a.K),Me(m,"RID",p),Me(m,"AID",a.T),Zi(a,m),a.m&&a.o&&Cl(m,a.m,a.o),p=new $n(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=yf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rl(a.h,p),Tl(p,m,h)}function Zi(a,h){a.H&&K(a.H,function(p,m){Me(h,m,p)}),a.l&&ef({},function(p,m){Me(h,m,p)})}function yf(a,h,p){p=Math.min(a.i.length,p);var m=a.l?_(a.l.Na,a.l,a):null;e:{var S=a.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=S[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let De=!0;for(let rt=0;rt<p;rt++){let Ae=S[rt].g;const ht=S[rt].map;if(Ae-=O,0>Ae)O=Math.max(0,S[rt].g-100),De=!1;else try{IE(ht,z,"req"+Ae+"_")}catch{m&&m(ht)}}if(De){m=z.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,m}function vf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ge||Wt(),de||(ge(),de=!0),St.add(h,a),a.v=0}}function Sl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qi(_(a.Fa,a),If(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ef(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qi(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),wo(this),Ef(this))};function Pl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ef(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Zi(a,h),a.m&&a.o&&Cl(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Eo(wn(h)),p.m=null,p.P=!0,zh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,wo(this),Sl(this),wt(19))};function Ro(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Tf(a,h){var p=null;if(a.g==h){Ro(a),Pl(a),a.g=null;var m=2}else if(Al(a.h,h))p=h.D,Jh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var S=a.B;m=po(),re(m,new $h(m,p)),Ao(a)}else vf(a);else if(S=h.s,S==3||S==0&&0<h.X||!(m==1&&CE(a,h)||m==2&&Sl(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),S){case 1:ms(a,5);break;case 4:ms(a,10);break;case 3:ms(a,6);break;default:ms(a,2)}}}function If(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function ms(a,h){if(a.j.info("Error code "+h),h==2){var p=_(a.fb,a),m=a.Xa;const S=!m;m=new _s(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(m,"https"),Eo(m),S?vE(m.toString(),p):EE(m.toString(),p)}else wt(2);a.G=0,a.l&&a.l.sa(h),wf(a),mf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function wf(a){if(a.G=0,a.ka=[],a.l){const h=Zh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Af(a,h,p){var m=p instanceof _s?wn(p):new _s(p);if(m.g!="")h&&(m.g=h+"."+m.g),vo(m,m.s);else{var S=l.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var O=new _s(null);m&&yo(O,m),h&&(O.g=h),S&&vo(O,S),p&&(O.l=p),m=O}return p=a.D,h=a.ya,p&&h&&Me(m,p,h),Me(m,"VER",a.la),Zi(a,m),m}function Rf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new Qi({eb:p})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cf(){}t=Cf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Co(){}Co.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){te.call(this),this.g=new _f(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qs(this)}w(Nt,te),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){bl(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ws(a),a=p);h.i.push(new cE(h.Ya++,a)),h.G==3&&Ao(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,Nt.aa.N.call(this)};function bf(a){gl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}w(bf,gl);function Sf(){yl.call(this),this.status=1}w(Sf,yl);function Qs(a){this.g=a}w(Qs,Cf),Qs.prototype.ua=function(){re(this.g,"a")},Qs.prototype.ta=function(a){re(this.g,new bf(a))},Qs.prototype.sa=function(a){re(this.g,new Sf)},Qs.prototype.ra=function(){re(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,ag=function(){return new Co},og=function(){return po()},rg=ds,Nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,Qo=_o,qh.COMPLETE="complete",ig=qh,Fh.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",te.prototype.listen=te.prototype.K,ur=Fh,sg=Qi,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,ng=He}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const Vd="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Di="10.12.1";/**
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
 */const Os=new Zr("@firebase/firestore");function nr(){return Os.logLevel}function ee(t,...e){if(Os.logLevel<=pe.DEBUG){const n=e.map(xu);Os.debug(`Firestore (${Di}): ${t}`,...n)}}function Mn(t,...e){if(Os.logLevel<=pe.ERROR){const n=e.map(xu);Os.error(`Firestore (${Di}): ${t}`,...n)}}function vi(t,...e){if(Os.logLevel<=pe.WARN){const n=e.map(xu);Os.warn(`Firestore (${Di}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function xe(t,e){t||le()}function fe(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qR{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new lg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new pt(e)}}class HR{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WR{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new HR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new zR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function GR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class cg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=GR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Qe(0,0))}static max(){return new ue(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hr{constructor(e,n,s){n===void 0?n=0:n>e.length&&le(),s===void 0?s=e.length-n:s>e.length-n&&le(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Hr{construct(e,n,s){return new je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const QR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Hr{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return QR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(je.fromString(e))}static fromName(e){return new oe(je.fromString(e).popFirst(5))}static empty(){return new oe(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new je(e.slice()))}}function YR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new as(i,oe.empty(),e)}function XR(t){return new as(t.readTime,t.key,-1)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(ue.min(),oe.empty(),-1)}static max(){return new as(ue.max(),oe.empty(),-1)}}function JR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function eo(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==ZR)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,s)=>{n(e)})}static reject(e){return new j((n,s)=>{s(e)})}static waitFor(e){return new j((n,s)=>{let i=0,r=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next(i=>i?j.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new j((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===r&&s(o)},f=>i(f))}})}static doWhile(e,n){return new j((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function t0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mu.oe=-1;function Xa(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function n0(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ug(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Ye=class kc{constructor(e,n){this.comparator=e,this.root=n||ss.EMPTY}insert(e,n){return new kc(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ss.BLACK,null,null))}remove(e){return new kc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ss.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}},Mo=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ss=class Cn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Cn.RED,this.left=i??Cn.EMPTY,this.right=r??Cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Cn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Cn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Cn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}};ss.EMPTY=null,ss.RED=!0,ss.BLACK=!1;ss.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,s,i,r){return this}insert(e,n,s){return new ss(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ud(this.data.getIterator())}getIteratorFrom(e){return new Ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new ct(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new hg("Invalid base64 string: "+r):r}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const s0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(xe(!!t),typeof t=="string"){let e=0;const n=s0.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function Lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vu(t){const e=t.mapValue.fields.__previous_value__;return Lu(e)?Vu(e):e}function Wr(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class i0{constructor(e,n,s,i,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:r0(t)?9007199254740991:10:le()}function vn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ls(i.timestampValue),l=ls(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Ds(i.bytesValue).isEqual(Ds(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ge(i.geoPointValue.latitude)===Ge(r.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ge(i.integerValue)===Ge(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ge(i.doubleValue),l=Ge(r.doubleValue);return o===l?ha(o)===ha(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Fd(o)!==Fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!vn(o[c],l[c])))return!1;return!0}(t,e);default:return le()}}function Kr(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=Ge(r.integerValue||r.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(Wr(t),Wr(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(r,o){const l=Ds(r),c=Ds(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Re(l[u],c[u]);if(f!==0)return f}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Re(Ge(r.latitude),Ge(o.latitude));return l!==0?l:Re(Ge(r.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const l=r.values||[],c=o.values||[];for(let u=0;u<l.length&&u<c.length;++u){const f=Ti(l[u],c[u]);if(f)return f}return Re(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Lo.mapValue&&o===Lo.mapValue)return 0;if(r===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const _=Re(c[d],f[d]);if(_!==0)return _;const g=Ti(l[c[d]],u[f[d]]);if(g!==0)return g}return Re(c.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=ls(t),s=ls(e),i=Re(n.seconds,s.seconds);return i!==0?i:Re(n.nanos,s.nanos)}function Ii(t){return Oc(t)}function Oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ls(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Oc(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Oc(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Dc(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function jd(t){return!!t&&"nullValue"in t}function $d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function r0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(n)}setAll(e){let n=lt.emptyPath(),s={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=wr(o):i.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Yo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){xi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ut(wr(this.value))}}function fg(t){const e=[];return xi(t.fields,(n,s)=>{const i=new lt([n]);if(Yo(s)){const r=fg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
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
 */class _t{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,ue.min(),ue.min(),ue.min(),Ut.empty(),0)}static newFoundDocument(e,n,s,i){return new _t(e,1,n,ue.min(),s,i,0)}static newNoDocument(e,n){return new _t(e,2,n,ue.min(),ue.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ue.min(),ue.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function qd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=Ti(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function o0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dg{}class Xe extends dg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new l0(e,n,s):n==="array-contains"?new h0(e,s):n==="in"?new f0(e,s):n==="not-in"?new d0(e,s):n==="array-contains-any"?new p0(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new c0(e,s):new u0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends dg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return pg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pg(t){return t.op==="and"}function _g(t){return a0(t)&&pg(t)}function a0(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function xc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(_g(t))return t.filters.map(e=>xc(e)).join(",");{const e=t.filters.map(n=>xc(n)).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof Xe?function(s,i){return i instanceof Xe&&s.op===i.op&&s.field.isEqual(i.field)&&vn(s.value,i.value)}(t,e):t instanceof En?function(s,i){return i instanceof En&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,l)=>r&&mg(o,i.filters[l]),!0):!1}(t,e):void le()}function gg(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(gg).join(" ,")+"}"}(t):"Filter"}class l0 extends Xe{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class c0 extends Xe{constructor(e,n){super(e,"in",n),this.keys=yg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class u0 extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=yg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>oe.fromName(s.referenceValue))}class h0 extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&Kr(n.arrayValue,this.value)}}class f0 extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kr(this.value.arrayValue,n)}}class d0 extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kr(this.value.arrayValue,n)}}class p0 extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Kr(this.value.arrayValue,s))}}/**
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
 */class _0{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function Wd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new _0(t,e,n,s,i,r,o)}function Uu(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ii(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ii(s)).join(",")),e.ue=n}return e.ue}function Bu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!o0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hd(t.startAt,e.startAt)&&Hd(t.endAt,e.endAt)}function Mc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ja{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function m0(t,e,n,s,i,r,o,l){return new Ja(t,e,n,s,i,r,o,l)}function Za(t){return new Ja(t)}function zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g0(t){return t.collectionGroup!==null}function Ar(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(lt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new da(r,s))}),n.has(lt.keyField().canonicalString())||e.ce.push(new da(lt.keyField(),s))}return e.ce}function _n(t){const e=fe(t);return e.le||(e.le=y0(e,Ar(t))),e.le}function y0(t,e){if(t.limitType==="F")return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new da(i.field,r)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Lc(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function el(t,e){return Bu(_n(t),_n(e))&&t.limitType===e.limitType}function vg(t){return`${Uu(_n(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>gg(i)).join(", ")}]`),Xa(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${s})`}(_n(t))}; limitType=${t.limitType})`}function tl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):oe.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Ar(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,l,c){const u=qd(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Ar(s),i)||s.endAt&&!function(o,l,c){const u=qd(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Ar(s),i))}(t,e)}function v0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eg(t){return(e,n)=>{let s=!1;for(const i of Ar(t)){const r=E0(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function E0(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Ti(c,u):le()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return le()}}/**
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
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ug(this.inner)}size(){return this.innerSize}}/**
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
 */const T0=new Ye(oe.comparator);function Ln(){return T0}const Tg=new Ye(oe.comparator);function hr(...t){let e=Tg;for(const n of t)e=e.insert(n.key,n);return e}function Ig(t){let e=Tg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return Rr()}function wg(){return Rr()}function Rr(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const I0=new Ye(oe.comparator),w0=new ct(oe.comparator);function _e(...t){let e=w0;for(const n of t)e=e.add(n);return e}const A0=new ct(Re);function R0(){return A0}/**
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
 */function Ag(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function Rg(t){return{integerValue:""+t}}function C0(t,e){return n0(e)?Rg(e):Ag(t,e)}/**
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
 */class nl{constructor(){this._=void 0}}function b0(t,e,n){return t instanceof pa?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Lu(r)&&(r=Vu(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Gr?bg(t,e):t instanceof Qr?Sg(t,e):function(i,r){const o=Cg(i,r),l=Kd(o)+Kd(i.Pe);return Dc(o)&&Dc(i.Pe)?Rg(l):Ag(i.serializer,l)}(t,e)}function S0(t,e,n){return t instanceof Gr?bg(t,e):t instanceof Qr?Sg(t,e):n}function Cg(t,e){return t instanceof _a?function(s){return Dc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class pa extends nl{}class Gr extends nl{constructor(e){super(),this.elements=e}}function bg(t,e){const n=Pg(e);for(const s of t.elements)n.some(i=>vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Qr extends nl{constructor(e){super(),this.elements=e}}function Sg(t,e){let n=Pg(e);for(const s of t.elements)n=n.filter(i=>!vn(i,s));return{arrayValue:{values:n}}}class _a extends nl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Kd(t){return Ge(t.integerValue||t.doubleValue)}function Pg(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P0(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Gr&&i instanceof Gr||s instanceof Qr&&i instanceof Qr?Ei(s.elements,i.elements,vn):s instanceof _a&&i instanceof _a?vn(s.Pe,i.Pe):s instanceof pa&&i instanceof pa}(t.transform,e.transform)}class N0{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sl{}function Ng(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Og(t.key,On.none()):new no(t.key,t.data,On.none());{const n=t.data,s=Ut.empty();let i=new ct(lt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Bs(t.key,s,new Yt(i.toArray()),On.none())}}function k0(t,e,n){t instanceof no?function(i,r,o){const l=i.value.clone(),c=Qd(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Bs?function(i,r,o){if(!Xo(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=Qd(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(kg(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,s){return t instanceof no?function(r,o,l,c){if(!Xo(r.precondition,o))return l;const u=r.value.clone(),f=Yd(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bs?function(r,o,l,c){if(!Xo(r.precondition,o))return l;const u=Yd(r.fieldTransforms,c,o),f=o.data;return f.setAll(kg(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(r,o,l){return Xo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function O0(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Cg(s.transform,i||null);r!=null&&(n===null&&(n=Ut.empty()),n.set(s.field,r))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ei(s,i,(r,o)=>P0(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class no extends sl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bs extends sl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function kg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qd(t,e,n){const s=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,S0(o,l,n[i]))}return s}function Yd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,b0(r,o,e))}return s}class Og extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D0 extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class x0{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&k0(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=Ng(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,s)=>Gd(n,s))&&Ei(this.baseMutations,e.baseMutations,(n,s)=>Gd(n,s))}}class ju{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){xe(e.mutations.length===s.length);let i=function(){return I0}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ju(e,n,s,i)}}/**
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
 */class M0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class L0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,ve;function V0(t){switch(t){default:return le();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function Dg(t){if(t===void 0)return Mn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ke.OK:return B.OK;case Ke.CANCELLED:return B.CANCELLED;case Ke.UNKNOWN:return B.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return B.INTERNAL;case Ke.UNAVAILABLE:return B.UNAVAILABLE;case Ke.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ke.NOT_FOUND:return B.NOT_FOUND;case Ke.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ke.ABORTED:return B.ABORTED;case Ke.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ke.DATA_LOSS:return B.DATA_LOSS;default:return le()}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(){return new TextEncoder}/**
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
 */const U0=new Ns([4294967295,4294967295],0);function Xd(t){const e=F0().encode(t),n=new tg;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ns([n,s],0),new Ns([i,r],0)]}class $u{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new fr(`Invalid padding: ${n}`);if(s<0)throw new fr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new fr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ns.fromNumber(this.Ie)}Ee(e,n,s){let i=e.add(n.multiply(Ns.fromNumber(s)));return i.compare(U0)===1&&(i=new Ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Xd(e),[s,i]=Jd(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new $u(r,i,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Xd(e),[s,i]=Jd(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class il{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new il(ue.min(),i,new Ye(Re),Ln(),_e())}}class so{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new so(s,n,_e(),_e(),_e())}}/**
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
 */class Jo{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class xg{constructor(e,n){this.targetId=e,this.me=n}}class Mg{constructor(e,n,s=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Zd{constructor(){this.fe=0,this.ge=tp(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=_e(),n=_e(),s=_e();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:le()}}),new so(this.pe,this.ye,e,n,s)}ve(){this.we=!1,this.ge=tp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class B0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ln(),this.qe=ep(),this.Qe=new Ye(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,s=e.me.count,i=this.Je(n);if(i){const r=i.target;if(Mc(r))if(s===0){const o=new oe(r.path);this.Ue(n,o,_t.newNoDocument(o,ue.min()))}else xe(s===1);else{const o=this.Ye(n);if(o!==s){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Ds(s).toUint8Array()}catch(c){if(c instanceof hg)return vi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $u(o,i,r)}catch(c){return vi(c instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,r,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((r,o)=>{const l=this.Je(o);if(l){if(r.current&&Mc(l.target)){const c=new oe(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,_t.newNoDocument(c,e))}r.be&&(n.set(o,r.Ce()),r.ve())}});let s=_e();this.qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new il(e,n,this.Qe,this.ke,s);return this.ke=Ln(),this.qe=ep(),this.Qe=new Ye(Re),i}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Zd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ep(){return new Ye(oe.comparator)}function tp(){return new Ye(oe.comparator)}const j0={asc:"ASCENDING",desc:"DESCENDING"},$0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},q0={and:"AND",or:"OR"};class H0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function W0(t,e){return ma(t,e.toTimestamp())}function mn(t){return xe(!!t),ue.fromTimestamp(function(n){const s=ls(n);return new Qe(s.seconds,s.nanos)}(t))}function qu(t,e){return Fc(t,e).canonicalString()}function Fc(t,e){const n=function(i){return new je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vg(t){const e=je.fromString(t);return xe($g(e)),e}function Uc(t,e){return qu(t.databaseId,e.path)}function Gl(t,e){const n=Vg(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Ug(n))}function Fg(t,e){return qu(t.databaseId,e)}function z0(t){const e=Vg(t);return e.length===4?je.emptyPath():Ug(e)}function Bc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ug(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function np(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function K0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string"),Et.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?B.UNKNOWN:Dg(u.code);return new ie(f,u.message||"")}(o);n=new Mg(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Gl(t,s.document.name),r=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):ue.min(),l=new Ut({mapValue:{fields:s.document.fields}}),c=_t.newFoundDocument(i,r,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Jo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Gl(t,s.document),r=s.readTime?mn(s.readTime):ue.min(),o=_t.newNoDocument(i,r),l=s.removedTargetIds||[];n=new Jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Gl(t,s.document),r=s.removedTargetIds||[];n=new Jo([],r,i,null)}else{if(!("filter"in e))return le();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new L0(i,r),l=s.targetId;n=new xg(l,o)}}return n}function G0(t,e){let n;if(e instanceof no)n={update:np(t,e.key,e.value)};else if(e instanceof Og)n={delete:Uc(t,e.key)};else if(e instanceof Bs)n={update:np(t,e.key,e.data),updateMask:sC(e.fieldMask)};else{if(!(e instanceof D0))return le();n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const l=o.transform;if(l instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _a)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:W0(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:le()}(t,e.precondition)),n}function Q0(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?mn(i.updateTime):mn(r);return o.isEqual(ue.min())&&(o=mn(r)),new N0(o,i.transformResults||[])}(n,e))):[]}function Y0(t,e){return{documents:[Fg(t,e.path)]}}function X0(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Fg(t,i);const r=function(u){if(u.length!==0)return jg(En.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(_){return{field:ei(_.field),direction:eC(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function J0(t){let e=z0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){xe(s===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(d){const _=Bg(d);return _ instanceof En&&_g(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(_=>function(w){return new da(ti(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(d){let _;return _=typeof d=="object"?d.value:d,Xa(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(d){const _=!!d.before,g=d.values||[];return new fa(g,_)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const _=!d.before,g=d.values||[];return new fa(g,_)}(n.endAt)),m0(e,i,o,r,l,"F",c,u)}function Z0(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ti(n.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ti(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ti(n.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(s=>Bg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function eC(t){return j0[t]}function tC(t){return $0[t]}function nC(t){return q0[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return lt.fromServerFormat(t.fieldPath)}function jg(t){return t instanceof Xe?function(n){if(n.op==="=="){if($d(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(jd(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($d(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(jd(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:tC(n.op),value:n.value}}}(t):t instanceof En?function(n){const s=n.getFilters().map(i=>jg(i));return s.length===1?s[0]:{compositeFilter:{op:nC(n.op),filters:s}}}(t):le()}function sC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $g(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Xn{constructor(e,n,s,i,r=ue.min(),o=ue.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iC{constructor(e){this.ct=e}}function rC(t){const e=J0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
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
 */class oC{constructor(){this._n=new aC}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(as.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ct(je.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ct(je.comparator)).toArray()}}/**
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
 */class wi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new wi(0)}static Ln(){return new wi(-1)}}/**
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
 */class lC{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class uC{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Cr(s.mutation,i,Yt.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const i=As();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=hr();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,i){let r=Ln();const o=Rr(),l=function(){return Rr()}();return n.forEach((c,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Bs)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Cr(f.mutation,u,f.mutation.getFieldMask(),Qe.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return l.set(u,new cC(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Rr();let i=new Ye((o,l)=>o-l),r=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||Yt.empty();f=l.applyToLocalView(u,f),s.set(c,f);const d=(i.get(l.batchId)||_e()).add(c);i=i.insert(l.batchId,d)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=wg();f.forEach(_=>{if(!r.has(_)){const g=Ng(n.get(_),s.get(_));g!==null&&d.set(_,g),r=r.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):g0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):j.resolve(As());let l=-1,c=r;return o.next(u=>j.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),r.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,_e())).next(f=>({batchId:l,changes:Ig(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(s=>{let i=hr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=hr();return this.indexManager.getCollectionParents(e,r).next(l=>j.forEach(l,c=>{const u=function(d,_){return new Ja(_,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(f=>{f.forEach((d,_)=>{o=o.insert(d,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let l=hr();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&Cr(f.mutation,u,Yt.empty(),Qe.now()),tl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class hC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:rC(i.bundledQuery),readTime:mn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class fC{constructor(){this.overlays=new Ye(oe.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return j.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),j.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const i=As(),r=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ye((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=As(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=As(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new M0(n,s));let r=this.hr.get(n);r===void 0&&(r=_e(),this.hr.set(n,r)),this.hr.set(n,r.add(s.key))}}/**
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
 */class Hu{constructor(){this.Pr=new ct(tt.Ir),this.Tr=new ct(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const s=new tt(e,n);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(s=>this.removeReference(s,n))}Vr(e){const n=new oe(new je([])),s=new tt(n,e),i=new tt(n,e+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new je([])),s=new tt(n,e),i=new tt(n,e+1);let r=_e();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new tt(e,0),s=this.Pr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||Re(e.pr,n.pr)}static Er(e,n){return Re(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
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
 */class dC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ct(tt.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x0(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new tt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.br(s),r=i<0?0:i;return j.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const l=this.Sr(o.pr);r.push(l)}),j.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(Re);return n.forEach(i=>{const r=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],l=>{s=s.add(l.pr)})}),j.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;oe.isDocumentKey(r)||(r=r.child(""));const o=new tt(new oe(r),0);let l=new ct(Re);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.pr)),!0)},o),j.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return j.forEach(n.mutations,i=>{const r=new tt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,n){const s=new tt(n,0),i=this.wr.firstAfterOrEqual(s);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pC{constructor(e){this.vr=e,this.docs=function(){return new Ye(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let s=Ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():_t.newInvalidDocument(i))}),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ln();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||JR(XR(f),s)<=0||(i.has(f.key)||tl(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return j.resolve(r)}getAllFromCollectionGroup(e,n,s,i){le()}Fr(e,n){return j.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new _C(this)}getSize(e){return j.resolve(this.size)}}class _C extends lC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class mC{constructor(e){this.persistence=e,this.Mr=new Mi(n=>Uu(n),Bu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Hu,this.targetCount=0,this.Lr=wi.Nn()}forEachTarget(e,n){return this.Mr.forEach((s,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(r).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.Mr.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this.Nr.dr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this.Nr.Rr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Nr.gr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
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
 */class gC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Mu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new mC(this),this.indexManager=new oC,this.remoteDocumentCache=function(i){return new pC(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new iC(n),this.$r=new hC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new dC(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const i=new yC(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,n){return j.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class yC extends e0{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.zr=new Hu,this.jr=null}static Hr(e){return new Wu(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,s){return this.zr.addReference(s,n),this.Jr.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.zr.removeReference(s,n),this.Jr.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,s=>{const i=oe.fromPath(s);return this.Yr(e,i).next(r=>{r||n.removeEntry(i,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(s=>{s?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class zu{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.qi=s,this.Qi=i}static Ki(e,n){let s=_e(),i=_e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zu(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return TA()?8:t0(sn())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ji(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new vC;return this.Ji(e,n,o).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>r.result)}Yi(e,n,s,i){return s.documentReadCount<this.Wi?(nr()<=pe.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(nr()<=pe.DEBUG&&ee("QueryEngine","Query:",Zs(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(nr()<=pe.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):j.resolve())}ji(e,n){if(zd(n))return j.resolve(null);let s=_n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lc(n,null,"F"),s=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=_e(...r);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Zi(n,l);return this.Xi(n,u,o,c.readTime)?this.ji(e,Lc(n,null,"F")):this.es(e,u,n,c)}))})))}Hi(e,n,s,i){return zd(n)||i.isEqual(ue.min())?j.resolve(null):this.zi.getDocuments(e,s).next(r=>{const o=this.Zi(n,r);return this.Xi(n,o,s,i)?j.resolve(null):(nr()<=pe.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.es(e,o,n,YR(i,-1)).next(l=>l))})}Zi(e,n){let s=new ct(Eg(e));return n.forEach((i,r)=>{tl(e,r)&&(s=s.add(r))}),s}Xi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,n,s){return nr()<=pe.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.zi.getDocumentsMatchingQuery(e,n,as.min(),s)}es(e,n,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class TC{constructor(e,n,s,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ye(Re),this.rs=new Mi(r=>Uu(r),Bu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function IC(t,e,n,s){return new TC(t,e,n,s)}async function qg(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],l=[];let c=_e();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:l}))})})}function wC(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,_=d.keys();let g=j.resolve();return _.forEach(w=>{g=g.next(()=>f.getEntry(c,w)).next(N=>{const P=u.docVersions.get(w);xe(P!==null),N.version.compareTo(P)<0&&(d.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Hg(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function AC(t,e){const n=fe(t),s=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((f,d)=>{const _=i.get(d);if(!_)return;l.push(n.Qr.removeMatchingKeys(r,f.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(r,f.addedDocuments,d)));let g=_.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Et.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,s)),i=i.insert(d,g),function(N,P,M){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(_,g,f)&&l.push(n.Qr.updateTargetData(r,g))});let c=Ln(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(RC(r,o,e.documentUpdates).next(f=>{c=f.cs,u=f.ls})),!s.isEqual(ue.min())){const f=n.Qr.getLastRemoteSnapshotVersion(r).next(d=>n.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(f)}return j.waitFor(l).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.ns=i,r))}function RC(t,e,n){let s=_e(),i=_e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ln();return n.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function CC(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bC(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Qr.getTargetData(s,e).next(r=>r?(i=r,j.resolve(i)):n.Qr.allocateTargetId(s).next(o=>(i=new Xn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(s.targetId,s),n.rs.set(e,s.targetId)),s})}async function jc(t,e,n){const s=fe(t),i=s.ns.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function sp(t,e,n){const s=fe(t);let i=ue.min(),r=_e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=fe(c),_=d.rs.get(f);return _!==void 0?j.resolve(d.ns.get(_)):d.Qr.getTargetData(u,f)}(s,o,_n(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>s.ts.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?r:_e())).next(l=>(SC(s,v0(e),l),{documents:l,hs:r})))}function SC(t,e,n){let s=t.ss.get(e)||ue.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.ss.set(e,s)}class ip{constructor(){this.activeTargetIds=R0()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this.no=new ip,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,s){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ip,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NC{io(e){}shutdown(){}}/**
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
 */class rp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo=null;function Ql(){return Vo===null?Vo=function(){return 268435456+Math.round(2147483648*Math.random())}():Vo++,"0x"+Vo.toString(16)}/**
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
 */const kC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const dt="WebChannelConnection";class DC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=s+"://"+n.host,this.So=`projects/${i}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Do(){return!1}Co(n,s,i,r,o){const l=Ql(),c=this.vo(n,s.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,r,o),this.Mo(n,c,u,i).then(f=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw vi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(n,s,i,r,o,l){return this.Co(n,s,i,r,o)}Fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}vo(n,s){const i=kC[n];return`${this.wo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,s,i){const r=Ql();return new Promise((o,l)=>{const c=new ng;c.setWithCredentials(!0),c.listenOnce(ig.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qo.NO_ERROR:const f=c.getResponseJson();ee(dt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case Qo.TIMEOUT:ee(dt,`RPC '${e}' ${r} timed out`),l(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const d=c.getStatus();if(ee(dt,`RPC '${e}' ${r} failed with status:`,d,"response text:",c.getResponseText()),d>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const g=_==null?void 0:_.error;if(g&&g.status&&g.message){const w=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(M)>=0?M:B.UNKNOWN}(g.status);l(new ie(w,g.message))}else l(new ie(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(B.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ee(dt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);ee(dt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Oo(e,n,s){const i=Ql(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ag(),l=og(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new sg({})),this.Fo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=r.join("");ee(dt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const d=o.createWebChannel(f,c);let _=!1,g=!1;const w=new OC({lo:P=>{g?ee(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(_||(ee(dt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),_=!0),ee(dt,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},ho:()=>d.close()}),N=(P,M,F)=>{P.listen(M,V=>{try{F(V)}catch(q){setTimeout(()=>{throw q},0)}})};return N(d,ur.EventType.OPEN,()=>{g||(ee(dt,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),N(d,ur.EventType.CLOSE,()=>{g||(g=!0,ee(dt,`RPC '${e}' stream ${i} transport closed`),w.po())}),N(d,ur.EventType.ERROR,P=>{g||(g=!0,vi(dt,`RPC '${e}' stream ${i} transport errored:`,P),w.po(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),N(d,ur.EventType.MESSAGE,P=>{var M;if(!g){const F=P.data[0];xe(!!F);const V=F,q=V.error||((M=V[0])===null||M===void 0?void 0:M.error);if(q){ee(dt,`RPC '${e}' stream ${i} received error:`,q);const ae=q.status;let K=function(I){const R=Ke[I];if(R!==void 0)return Dg(R)}(ae),A=q.message;K===void 0&&(K=B.INTERNAL,A="Unknown error status: "+ae+" with message "+q.message),g=!0,w.po(new ie(K,A)),d.close()}else ee(dt,`RPC '${e}' stream ${i} received:`,F),w.yo(F)}}),N(l,rg.STAT_EVENT,P=>{P.stat===Nc.PROXY?ee(dt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Nc.NOPROXY&&ee(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function Yl(){return typeof document<"u"?document:null}/**
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
 */function rl(t){return new H0(t,!0)}/**
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
 */class Wg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=n,this.No=s,this.Lo=i,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),s=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-s);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zg{constructor(e,n,s,i,r,o,l,c){this.oi=e,this.Go=s,this.zo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Wg(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.jo===n&&this.u_(s,i)},s=>{e(()=>{const i=new ie(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.c_(i)})})}u_(e,n){const s=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{s(()=>this.listener.Po())}),this.stream.To(()=>{s(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{s(()=>this.c_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xC extends zg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=K0(this.serializer,e),s=function(r){if(!("targetChange"in r))return ue.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?mn(o.readTime):ue.min()}(e);return this.listener.h_(n,s)}P_(e){const n={};n.database=Bc(this.serializer),n.addTarget=function(r,o){let l;const c=o.target;if(l=Mc(c)?{documents:Y0(r,c)}:{query:X0(r,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Lg(r,o.resumeToken);const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=ma(r,o.snapshotVersion.toTimestamp());const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=Z0(this.serializer,e);s&&(n.labels=s),this.i_(n)}I_(e){const n={};n.database=Bc(this.serializer),n.removeTarget=e,this.i_(n)}}class MC extends zg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Q0(e.writeResults,e.commitTime),s=mn(e.commitTime);return this.listener.A_(s,n)}return xe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Bc(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>G0(this.serializer,s))};this.i_(n)}}/**
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
 */class LC extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,Fc(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ie(B.UNKNOWN,r.toString())})}xo(e,n,s,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Fc(n,s),i,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(B.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class VC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Mn(n),this.y_=!1):ee("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class FC{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(o=>{s.enqueueAndForget(async()=>{js(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.M_.add(4),await io(u),u.N_.set("Unknown"),u.M_.delete(4),await ol(u)}(this))})}),this.N_=new VC(s,i)}}async function ol(t){if(js(t))for(const e of t.x_)await e(!0)}async function io(t){for(const e of t.x_)await e(!1)}function Kg(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Yu(n)?Qu(n):Li(n).Xo()&&Gu(n,e))}function Ku(t,e){const n=fe(t),s=Li(n);n.F_.delete(e),s.Xo()&&Gg(n,e),n.F_.size===0&&(s.Xo()?s.n_():js(n)&&n.N_.set("Unknown"))}function Gu(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).P_(e)}function Gg(t,e){t.L_.xe(e),Li(t).I_(e)}function Qu(t){t.L_=new B0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.N_.w_()}function Yu(t){return js(t)&&!Li(t).Zo()&&t.F_.size>0}function js(t){return fe(t).M_.size===0}function Qg(t){t.L_=void 0}async function UC(t){t.N_.set("Online")}async function BC(t){t.F_.forEach((e,n)=>{Gu(t,e)})}async function jC(t,e){Qg(t),Yu(t)?(t.N_.D_(e),Qu(t)):t.N_.set("Unknown")}async function $C(t,e,n){if(t.N_.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const l of r.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(s){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ga(t,s)}else if(e instanceof Jo?t.L_.Ke(e):e instanceof xg?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const s=await Hg(t.localStore);n.compareTo(s)>=0&&await function(r,o){const l=r.L_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.F_.get(u);f&&r.F_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=r.F_.get(c);if(!f)return;r.F_.set(c,f.withResumeToken(Et.EMPTY_BYTE_STRING,f.snapshotVersion)),Gg(r,c);const d=new Xn(f.target,c,u,f.sequenceNumber);Gu(r,d)}),r.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){ee("RemoteStore","Failed to raise snapshot:",s),await ga(t,s)}}async function ga(t,e,n){if(!to(e))throw e;t.M_.add(1),await io(t),t.N_.set("Offline"),n||(n=()=>Hg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ol(t)})}function Yg(t,e){return e().catch(n=>ga(t,n,e))}async function al(t){const e=fe(t),n=cs(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;qC(e);)try{const i=await CC(e.localStore,s);if(i===null){e.v_.length===0&&n.n_();break}s=i.batchId,HC(e,i)}catch(i){await ga(e,i)}Xg(e)&&Jg(e)}function qC(t){return js(t)&&t.v_.length<10}function HC(t,e){t.v_.push(e);const n=cs(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Xg(t){return js(t)&&!cs(t).Zo()&&t.v_.length>0}function Jg(t){cs(t).start()}async function WC(t){cs(t).V_()}async function zC(t){const e=cs(t);for(const n of t.v_)e.d_(n.mutations)}async function KC(t,e,n){const s=t.v_.shift(),i=ju.from(s,e,n);await Yg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await al(t)}async function GC(t,e){e&&cs(t).E_&&await async function(s,i){if(function(o){return V0(o)&&o!==B.ABORTED}(i.code)){const r=s.v_.shift();cs(s).t_(),await Yg(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await al(s)}}(t,e),Xg(t)&&Jg(t)}async function op(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const s=js(n);n.M_.add(3),await io(n),s&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ol(n)}async function QC(t,e){const n=fe(t);e?(n.M_.delete(2),await ol(n)):e||(n.M_.add(2),await io(n),n.N_.set("Unknown"))}function Li(t){return t.B_||(t.B_=function(n,s,i){const r=fe(n);return r.f_(),new xC(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:UC.bind(null,t),To:BC.bind(null,t),Ao:jC.bind(null,t),h_:$C.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Yu(t)?Qu(t):t.N_.set("Unknown")):(await t.B_.stop(),Qg(t))})),t.B_}function cs(t){return t.k_||(t.k_=function(n,s,i){const r=fe(n);return r.f_(),new MC(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:WC.bind(null,t),Ao:GC.bind(null,t),R_:zC.bind(null,t),A_:KC.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await al(t)):(await t.k_.stop(),t.v_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Xu{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Xu(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),to(t))return new ie(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ui{constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=hr(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ui;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ap{constructor(){this.q_=new Ye(oe.comparator)}track(e){const n=e.doc.key,s=this.q_.get(n);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(n,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(n):e.type===1&&s.type===2?this.q_=this.q_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ai{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ai(e,n,ui.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class YC{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class XC{constructor(){this.queries=new Mi(e=>vg(e),el),this.onlineState="Unknown",this.z_=new Set}}async function Zu(t,e){const n=fe(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.W_()&&e.G_()&&(s=2):(r=new YC,s=e.G_()?0:1);try{switch(s){case 0:r.K_=await n.onListen(i,!0);break;case 1:r.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ju(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.U_.push(e),e.j_(n.onlineState),r.K_&&e.H_(r.K_)&&th(n)}async function eh(t,e){const n=fe(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.U_.indexOf(e);o>=0&&(r.U_.splice(o,1),r.U_.length===0?i=e.G_()?0:1:!r.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function JC(t,e){const n=fe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.U_)l.H_(i)&&(s=!0);o.K_=i}}s&&th(n)}function ZC(t,e,n){const s=fe(t),i=s.queries.get(e);if(i)for(const r of i.U_)r.onError(n);s.queries.delete(e)}function th(t){t.z_.forEach(e=>{e.next()})}var $c,lp;(lp=$c||($c={})).J_="default",lp.Cache="cache";class nh{constructor(e,n,s){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ai(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const s=n!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==$c.Cache}}/**
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
 */class Zg{constructor(e){this.key=e}}class ey{constructor(e){this.key=e}}class eb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=_e(),this.mutatedKeys=_e(),this.Ia=Eg(e),this.Ta=new ui(this.Ia)}get Ea(){return this.la}da(e,n){const s=n?n.Aa:new ap,i=n?n.Ta:this.Ta;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,d)=>{const _=i.get(f),g=tl(this.query,d)?d:null,w=!!_&&this.mutatedKeys.has(_.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;_&&g?_.data.isEqual(g.data)?w!==N&&(s.track({type:3,doc:g}),P=!0):this.Ra(_,g)||(s.track({type:2,doc:g}),P=!0,(c&&this.Ia(g,c)>0||u&&this.Ia(g,u)<0)&&(l=!0)):!_&&g?(s.track({type:0,doc:g}),P=!0):_&&!g&&(s.track({type:1,doc:_}),P=!0,(c||u)&&(l=!0)),P&&(g?(o=o.add(g),r=N?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Ta:o,Aa:s,Xi:l,mutatedKeys:r}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,d)=>function(g,w){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return N(g)-N(w)}(f.type,d.type)||this.Ia(f.doc,d.doc)),this.Va(s),i=i!=null&&i;const l=n&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,u=c!==this.ha;return this.ha=c,o.length!==0||u?{snapshot:new Ai(this.query,e.Ta,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ap,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=_e(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const n=[];return e.forEach(s=>{this.Pa.has(s)||n.push(new ey(s))}),this.Pa.forEach(s=>{e.has(s)||n.push(new Zg(s))}),n}pa(e){this.la=e.hs,this.Pa=_e();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ai.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class tb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nb{constructor(e){this.key=e,this.wa=!1}}class sb{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Mi(l=>vg(l),el),this.Da=new Map,this.Ca=new Set,this.va=new Ye(oe.comparator),this.Fa=new Map,this.Ma=new Hu,this.xa={},this.Oa=new Map,this.Na=wi.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ib(t,e,n=!0){const s=oy(t);let i;const r=s.ba.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ya()):i=await ty(s,e,n,!0),i}async function rb(t,e){const n=oy(t);await ty(n,e,!0,!1)}async function ty(t,e,n,s){const i=await bC(t.localStore,_n(e)),r=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return s&&(l=await ob(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Kg(t.remoteStore,i),l}async function ob(t,e,n,s,i){t.Ba=(d,_,g)=>async function(N,P,M,F){let V=P.view.da(M);V.Xi&&(V=await sp(N.localStore,P.query,!1).then(({documents:A})=>P.view.da(A,V)));const q=F&&F.targetChanges.get(P.targetId),ae=F&&F.targetMismatches.get(P.targetId)!=null,K=P.view.applyChanges(V,N.isPrimaryClient,q,ae);return up(N,P.targetId,K.fa),K.snapshot}(t,d,_,g);const r=await sp(t.localStore,e,!0),o=new eb(e,r.hs),l=o.da(r.documents),c=so.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);up(t,n,u.fa);const f=new tb(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function ab(t,e,n){const s=fe(t),i=s.ba.get(e),r=s.Da.get(i.targetId);if(r.length>1)return s.Da.set(i.targetId,r.filter(o=>!el(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await jc(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Ku(s.remoteStore,i.targetId),qc(s,i.targetId)}).catch(eo)):(qc(s,i.targetId),await jc(s.localStore,i.targetId,!0))}async function lb(t,e){const n=fe(t),s=n.ba.get(e),i=n.Da.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ku(n.remoteStore,s.targetId))}async function cb(t,e,n){const s=mb(t);try{const i=await function(o,l){const c=fe(o),u=Qe.now(),f=l.reduce((g,w)=>g.add(w.key),_e());let d,_;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=Ln(),N=_e();return c.os.getEntries(g,f).next(P=>{w=P,w.forEach((M,F)=>{F.isValidDocument()||(N=N.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,w)).next(P=>{d=P;const M=[];for(const F of l){const V=O0(F,d.get(F.key).overlayedDocument);V!=null&&M.push(new Bs(F.key,V,fg(V.value.mapValue),On.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,M,l)}).next(P=>{_=P;const M=P.applyToLocalDocumentSet(d,N);return c.documentOverlayCache.saveOverlays(g,P.batchId,M)})}).then(()=>({batchId:_.batchId,changes:Ig(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.xa[o.currentUser.toKey()];u||(u=new Ye(Re)),u=u.insert(l,c),o.xa[o.currentUser.toKey()]=u}(s,i.batchId,n),await ro(s,i.changes),await al(s.remoteStore)}catch(i){const r=Ju(i,"Failed to persist write");n.reject(r)}}async function ny(t,e){const n=fe(t);try{const s=await AC(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Fa.get(r);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?xe(o.wa):i.removedDocuments.size>0&&(xe(o.wa),o.wa=!1))}),await ro(n,s,e)}catch(s){await eo(s)}}function cp(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ba.forEach((r,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const _ of d.U_)_.j_(l)&&(u=!0)}),u&&th(c)}(s.eventManager,e),i.length&&s.Sa.h_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ub(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Fa.get(e),r=i&&i.key;if(r){let o=new Ye(oe.comparator);o=o.insert(r,_t.newNoDocument(r,ue.min()));const l=_e().add(r),c=new il(ue.min(),new Map,new Ye(Re),o,l);await ny(s,c),s.va=s.va.remove(r),s.Fa.delete(e),sh(s)}else await jc(s.localStore,e,!1).then(()=>qc(s,e,n)).catch(eo)}async function hb(t,e){const n=fe(t),s=e.batch.batchId;try{const i=await wC(n.localStore,e);iy(n,s,null),sy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ro(n,i)}catch(i){await eo(i)}}async function fb(t,e,n){const s=fe(t);try{const i=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(xe(d!==null),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(s.localStore,e);iy(s,e,n),sy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ro(s,i)}catch(i){await eo(i)}}function sy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function iy(t,e,n){const s=fe(t);let i=s.xa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.xa[s.currentUser.toKey()]=i}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Da.get(e))t.ba.delete(s),n&&t.Sa.ka(s,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(s=>{t.Ma.containsKey(s)||ry(t,s)})}function ry(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ku(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),sh(t))}function up(t,e,n){for(const s of n)s instanceof Zg?(t.Ma.addReference(s.key,e),db(t,s)):s instanceof ey?(ee("SyncEngine","Document no longer in limbo: "+s.key),t.Ma.removeReference(s.key,e),t.Ma.containsKey(s.key)||ry(t,s.key)):le()}function db(t,e){const n=e.key,s=n.path.canonicalString();t.va.get(n)||t.Ca.has(s)||(ee("SyncEngine","New document in limbo: "+n),t.Ca.add(s),sh(t))}function sh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new oe(je.fromString(e)),s=t.Na.next();t.Fa.set(s,new nb(n)),t.va=t.va.insert(n,s),Kg(t.remoteStore,new Xn(_n(Za(n.path)),s,"TargetPurposeLimboResolution",Mu.oe))}}async function ro(t,e,n){const s=fe(t),i=[],r=[],o=[];s.ba.isEmpty()||(s.ba.forEach((l,c)=>{o.push(s.Ba(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient){const f=u&&!u.fromCache;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=zu.Ki(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Sa.h_(i),await async function(c,u){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,_=>j.forEach(_.qi,g=>f.persistence.referenceDelegate.addReference(d,_.targetId,g)).next(()=>j.forEach(_.Qi,g=>f.persistence.referenceDelegate.removeReference(d,_.targetId,g)))))}catch(d){if(!to(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const _=d.targetId;if(!d.fromCache){const g=f.ns.get(_),w=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(w);f.ns=f.ns.insert(_,N)}}}(s.localStore,r))}async function pb(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const s=await qg(n.localStore,e);n.currentUser=e,function(r,o){r.Oa.forEach(l=>{l.forEach(c=>{c.reject(new ie(B.CANCELLED,o))})}),r.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ro(n,s.us)}}function _b(t,e){const n=fe(t),s=n.Fa.get(e);if(s&&s.wa)return _e().add(s.key);{let i=_e();const r=n.Da.get(e);if(!r)return i;for(const o of r){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function oy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ub.bind(null,e),e.Sa.h_=JC.bind(null,e.eventManager),e.Sa.ka=ZC.bind(null,e.eventManager),e}function mb(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fb.bind(null,e),e}class hp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IC(this.persistence,new EC,e.initialUser,this.serializer)}createPersistence(e){return new gC(Wu.Hr,this.serializer)}createSharedClientState(e){return new PC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pb.bind(null,this.syncEngine),await QC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XC}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),s=function(r){return new DC(r)}(e.databaseInfo);return function(r,o,l,c){return new LC(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,l){return new FC(s,i,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>cp(this.syncEngine,n,0),function(){return rp.D()?new rp:new NC}())}createSyncEngine(e,n){return function(i,r,o,l,c,u,f){const d=new sb(i,r,o,l,c,u);return f&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const i=fe(s);ee("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await io(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class ih{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yb{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=cg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ee("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ee("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ju(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await qg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Eb(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>op(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>op(e.remoteStore,i)),t._onlineComponents=e}function vb(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Eb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vb(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Xl(t,new hp)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Xl(t,new hp);return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await fp(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await fp(t,new gb))),t._onlineComponents}function Tb(t){return ay(t).then(e=>e.syncEngine)}async function ya(t){const e=await ay(t),n=e.eventManager;return n.onListen=ib.bind(null,e.syncEngine),n.onUnlisten=ab.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lb.bind(null,e.syncEngine),n}function Ib(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new ih({next:_=>{o.enqueueAndForget(()=>eh(r,d));const g=_.docs.has(l);!g&&_.fromCache?u.reject(new ie(B.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&_.fromCache&&c&&c.source==="server"?u.reject(new ie(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),d=new nh(Za(l.path),f,{includeMetadataChanges:!0,ra:!0});return Zu(r,d)}(await ya(t),t.asyncQueue,e,n,s)),s.promise}function wb(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new ih({next:_=>{o.enqueueAndForget(()=>eh(r,d)),_.fromCache&&c.source==="server"?u.reject(new ie(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),d=new nh(l,f,{includeMetadataChanges:!0,ra:!0});return Zu(r,d)}(await ya(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dp=new Map;/**
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
 */function cy(t,e,n){if(!n)throw new ie(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ab(t,e,n,s){if(e===!0&&s===!0)throw new ie(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pp(t){if(!oe.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _p(t){if(oe.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rh(t);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ly((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ll{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jR;switch(s.type){case"firstParty":return new WR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=dp.get(n);s&&(ee("ComponentProvider","Removing Datastore"),dp.delete(n),s.terminate())}(this),Promise.resolve()}}function Rb(t,e,n,s={}){var i;const r=(t=Dn(t,ll))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=pt.MOCK_USER;else{l=yA(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(u)}t._authCredentials=new $R(new lg(l,c))}}/**
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
 */class oo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new oo(this.firestore,e,this._query)}}class Dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class is extends oo{constructor(e,n,s){super(e,n,Za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new oe(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function Cb(t,e,...n){if(t=rn(t),cy("collection","path",e),t instanceof ll){const s=je.fromString(e,...n);return _p(s),new is(t,null,s)}{if(!(t instanceof Dt||t instanceof is))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return _p(s),new is(t.firestore,null,s)}}function bb(t,e,...n){if(t=rn(t),arguments.length===1&&(e=cg.newId()),cy("doc","path",e),t instanceof ll){const s=je.fromString(e,...n);return pp(s),new Dt(t,null,new oe(s))}{if(!(t instanceof Dt||t instanceof is))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return pp(s),new Dt(t.firestore,t instanceof is?t.converter:null,new oe(s))}}/**
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
 */class Sb{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Wg(this,"async_queue_retry"),this.hu=()=>{const n=Yl();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Yl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new kn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!to(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Mn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Xu.createAndSchedule(this,e,n,s,r=>this.Eu(r));return this._u.push(i),i}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function gp(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ri extends ll{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new Sb}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uy(this),this._firestoreClient.terminate()}}function Pb(t,e){const n=typeof t=="object"?t:Jm(),s=typeof t=="string"?t:"(default)",i=PR(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=mA("firestore");r&&Rb(i,...r)}return i}function cl(t){return t._firestoreClient||uy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uy(t){var e,n,s;const i=t._freezeSettings(),r=function(l,c,u,f){return new i0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ly(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new yb(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(Et.fromBase64String(e))}catch(n){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ci(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hy{constructor(e){this._methodName=e}}/**
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
 */class ul{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const Nb=/^__.*__$/;class kb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Bs(e,this.data,this.fieldMask,n,this.fieldTransforms):new no(e,this.data,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class ah{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:s,yu:!1});return i.wu(e),i}Su(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:s,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return va(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(fy(this.fu)&&Nb.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Ob{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||rl(e)}Fu(e,n,s,i=!1){return new ah({fu:e,methodName:n,vu:s,path:lt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Db(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new Ob(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xb(t,e,n,s,i,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,i);my("Data must be an object, but it was:",o,s);const l=py(s,o);let c,u;if(r.merge)c=new Yt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const d of r.mergeFields){const _=Mb(e,d,n);if(!o.contains(_))throw new ie(B.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Vb(f,_)||f.push(_)}c=new Yt(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new kb(new Ut(l),c,u)}function dy(t,e){if(_y(t=rn(t)))return my("Unsupported field value:",e,t),py(t,e);if(t instanceof hy)return function(s,i){if(!fy(i.fu))throw i.Du(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const l of s){let c=dy(l,i.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=rn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return C0(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Qe.fromDate(s);return{timestampValue:ma(i.serializer,r)}}if(s instanceof Qe){const r=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ma(i.serializer,r)}}if(s instanceof ul)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ci)return{bytesValue:Lg(i.serializer,s._byteString)};if(s instanceof Dt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qu(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Du(`Unsupported field value: ${rh(s)}`)}(t,e)}function py(t,e){const n={};return ug(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(s,i)=>{const r=dy(i,e.pu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof ul||t instanceof Ci||t instanceof Dt||t instanceof hy)}function my(t,e,n){if(!_y(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=rh(n);throw s==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+s)}}function Mb(t,e,n){if((e=rn(e))instanceof oh)return e._internalPath;if(typeof e=="string")return gy(t,e);throw va("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lb=new RegExp("[~\\*/\\[\\]]");function gy(t,e,n){if(e.search(Lb)>=0)throw va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oh(...e.split("."))._internalPath}catch{throw va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function va(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ie(B.INVALID_ARGUMENT,l+t+c)}function Vb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fb extends yy{data(){return super.data()}}function vy(t,e){return typeof e=="string"?gy(t,e):e instanceof oh?e._internalPath:e._delegate._internalPath}/**
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
 */function Ey(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ub{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return xi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ul(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const n=ls(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=je.fromString(e);xe($g(s));const i=new zr(s.get(1),s.get(3)),r=new oe(s.popFirst(5));return i.isEqual(n)||Mn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Bb(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class dr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ty extends yy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Zo extends Ty{data(e={}){return super.data(e)}}class Iy{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new dr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Zo(this._firestore,this._userDataWriter,s.key,s,new dr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Zo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new Zo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:jb(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function wy(t){t=Dn(t,Dt);const e=Dn(t.firestore,Ri);return Ib(cl(e),t._key).then(n=>Ay(e,t,n))}class lh extends Ub{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function $b(t){t=Dn(t,oo);const e=Dn(t.firestore,Ri),n=cl(e),s=new lh(e);return Ey(t._query),wb(n,t._query).then(i=>new Iy(e,s,t,i))}function qb(t,e){const n=Dn(t.firestore,Ri),s=bb(t),i=Bb(t.converter,e);return Hb(n,[xb(Db(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,On.exists(!1))]).then(()=>s)}function ch(t,...e){var n,s,i;t=rn(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||gp(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(gp(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let c,u,f;if(t instanceof Dt)u=Dn(t.firestore,Ri),f=Za(t._key.path),c={next:d=>{e[o]&&e[o](Ay(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Dn(t,oo);u=Dn(d.firestore,Ri),f=d._query;const _=new lh(u);c={next:g=>{e[o]&&e[o](new Iy(u,_,d,g))},error:e[o+1],complete:e[o+2]},Ey(t._query)}return function(_,g,w,N){const P=new ih(N),M=new nh(g,P,w);return _.asyncQueue.enqueueAndForget(async()=>Zu(await ya(_),M)),()=>{P.$a(),_.asyncQueue.enqueueAndForget(async()=>eh(await ya(_),M))}}(cl(u),f,l,c)}function Hb(t,e){return function(s,i){const r=new kn;return s.asyncQueue.enqueueAndForget(async()=>cb(await Tb(s),i,r)),r.promise}(cl(t),e)}function Ay(t,e,n){const s=n.docs.get(e._key),i=new lh(t);return new Ty(t,i,e._key,s,new dr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Di=i})(Oi),yn(new on("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new Ri(new qR(s.getProvider("auth-internal")),new KR(s.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(u.options.projectId,f)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Ot(Vd,"4.6.3",e),Ot(Vd,"4.6.3","esm2017")})();var Wb="firebase",zb="10.12.2";/**
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
 */Ot(Wb,zb,"app");const Ry=Xm({apiKey:"AIzaSyBOTQVCXRe3hpL7yTxJe7UQciuz9dXIcww",authDomain:"patches-50288.firebaseapp.com",projectId:"patches-50288",storageBucket:"patches-50288.appspot.com",messagingSenderId:"151697825333",appId:"1:151697825333:web:a39b323b23df2f3d0e1b7c",measurementId:"G-S9R3GQ27YT"}),Kb=Pb(Ry),Gb=Cb(Kb,"patches"),Qb={data(){return{images:[{file:"158.png",name:"ryba"},{file:"3061.png",name:"dystrybutor paliwa"},{file:"3522.png",name:"piłka golfowa"},{file:"3520.png",name:"piłka golfowa"},{file:"73.png",name:"ryba"},{file:"2957.png",name:"dystrybutor paliwa"},{file:"3714.png",name:"spadochron"},{file:"1085.png",name:"odtwarzacz kaset"},{file:"1097.png",name:"odtwarzacz kaset"},{file:"664.png",name:"pies"},{file:"3686.png",name:"spadochron"},{file:"690.png",name:"pies"},{file:"2018.png",name:"trąbka"},{file:"2320.png",name:"trąbka"},{file:"2414.png",name:"śmieciarka"},{file:"2420.png",name:"śmieciarka"},{file:"1509.png",name:"piła"},{file:"1486.png",name:"piła"},{file:"1873.png",name:"kościół"},{file:"1851.png",name:"kościół"}],currentImage:0,patches:[],allImagesDisplayed:!1}},methods:{createPatches(){const t=this.$refs.image,e=t.naturalWidth,n=t.naturalHeight,s=16,i=[];for(let r=0;r<n;r+=s)for(let o=0;o<e;o+=s)i.push({x:o,y:r,style:{top:`${r}px`,left:`${o}px`,width:`${s}px`,height:`${s}px`,position:"absolute",border:"1px solid rgba(0, 0, 0, 0.7)"}});this.patches=i},togglePatchSelection(t){this.patches[t].selected=!this.patches[t].selected,this.patches[t].style["background-color"]=this.patches[t].selected?"rgba(255, 0, 0, 0.7)":"rgba(0, 0, 0, 0)"},saveCurrentSelection(){const t=this.patches.map(n=>n.selected===!0),e={image:this.images[this.currentImage],patches:t};qb(Gb,e),console.log(this.images[this.currentImage],t)},nextImage(){this.saveCurrentSelection(),this.currentImage+1>=this.images.length?this.allImagesDisplayed=!0:(this.currentImage+=1,this.patches=[])}}},Yb={key:0,class:"app-container"},Xb=ws("p",null,"Dziękuję za wypełnienie ankiety!",-1),Jb=[Xb],Zb={key:1,class:"app-container"},eS={class:"image-container"},tS=["src","alt"],nS=["onClick"];function sS(t,e,n,s,i,r){return i.allImagesDisplayed?(ni(),si("div",Yb,Jb)):(ni(),si("div",Zb,[wm(" Wybierz wszystkie pola, wskazujące na to że na obrazku znajduje się: "),ws("b",null,UE(i.images[i.currentImage].name),1),ws("div",eS,[ws("img",{src:i.images[i.currentImage].file,alt:i.images[i.currentImage].name,ref:"image",onLoad:e[0]||(e[0]=(...o)=>r.createPatches&&r.createPatches(...o))},null,40,tS),(ni(!0),si(un,null,jT(i.patches,(o,l)=>(ni(),si("div",{key:l,style:Ua(o.style),class:"patch",onClick:c=>r.togglePatchSelection(l)},null,12,nS))),128))]),ws("button",{onClick:e[1]||(e[1]=(...o)=>r.nextImage&&r.nextImage(...o))},"Następne zdjęcie")]))}const iS=Su(Qb,[["render",sS]]),rS={},oS={style:{width:"100vw",height:"100vh"},src:"poster.pdf"};function aS(t,e){return ni(),si("embed",oS)}const lS=Su(rS,[["render",aS]]),cS=rA({history:Dw(),routes:[{path:"/",component:lS},{path:"/ankieta",component:iS}]});function Cy(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uS=by,Sy=new ki("auth","Firebase",by());/**
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
 */const Ea=new Zr("@firebase/auth");function hS(t,...e){Ea.logLevel<=pe.WARN&&Ea.warn(`Auth (${Oi}): ${t}`,...e)}function ea(t,...e){Ea.logLevel<=pe.ERROR&&Ea.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function yp(t,...e){throw uh(t,...e)}function Py(t,...e){return uh(t,...e)}function Ny(t,e,n){const s=Object.assign(Object.assign({},uS()),{[e]:n});return new ki("auth","Firebase",s).create(e,{appName:t.name})}function ta(t){return Ny(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sy.create(t,...e)}function Ce(t,e,...n){if(!t)throw uh(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Ta(t,e){t||br(e)}function fS(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||EA()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ta(n>e,"Short delay should be less than long delay!"),this.isMobile=ku()||Wm()}get(){return dS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _S(t,e){Ta(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ky{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gS=new ao(3e4,6e4);function Oy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hl(t,e,n,s,i={}){return Dy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Ou(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ky.fetch()(xy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Dy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mS),e);try{const i=new yS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fo(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ny(t,f,u);yp(t,f)}}catch(i){if(i instanceof Fn)throw i;yp(t,"network-request-failed",{message:String(i)})}}function xy(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?_S(t.config,i):`${t.config.apiScheme}://${i}`}class yS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Py(this.auth,"network-request-failed")),gS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Py(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function vS(t,e){return hl(t,"POST","/v1/accounts:delete",e)}async function My(t,e){return hl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ES(t,e=!1){const n=rn(t),s=await n.getIdToken(e),i=Ly(s);Ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Sr(Jl(i.auth_time)),issuedAtTime:Sr(Jl(i.iat)),expirationTime:Sr(Jl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Jl(t){return Number(t)*1e3}function Ly(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=la(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ep(t){const e=Ly(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hc(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&TS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function TS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ia(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Hc(t,My(n,{idToken:s}));Ce(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Vy(r.providerUserInfo):[],l=AS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Wc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function wS(t){const e=rn(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Vy(t){return t.map(e=>{var{providerId:n}=e,s=Cy(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function RS(t,e){const n=await Dy(t,{},async()=>{const s=Ou({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xy(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CS(t,e){return hl(t,"POST","/v2/accounts:revokeToken",Oy(t,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const n=Ep(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await RS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hi;return s&&(Ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function Kn(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Cy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hc(this,this.stsTokenManager.getToken(this.auth,e));return Ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ES(this,e)}reload(){return wS(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(ta(this.auth));const e=await this.getIdToken();return await Hc(this,vS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,c,u,f;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:q,isAnonymous:ae,providerData:K,stsTokenManager:A}=n;Ce(V&&A,e,"internal-error");const v=hi.fromJSON(this.name,A);Ce(typeof V=="string",e,"internal-error"),Kn(d,e.name),Kn(_,e.name),Ce(typeof q=="boolean",e,"internal-error"),Ce(typeof ae=="boolean",e,"internal-error"),Kn(g,e.name),Kn(w,e.name),Kn(N,e.name),Kn(P,e.name),Kn(M,e.name),Kn(F,e.name);const I=new Jn({uid:V,auth:e,email:_,emailVerified:q,displayName:d,isAnonymous:ae,photoURL:w,phoneNumber:g,tenantId:N,stsTokenManager:v,createdAt:M,lastLoginAt:F});return K&&Array.isArray(K)&&(I.providerData=K.map(R=>Object.assign({},R))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,s=!1){const i=new hi;i.updateFromServerResponse(n);const r=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ia(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];Ce(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Vy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new hi;l.updateFromIdToken(s);const c=new Jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Wc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Tp=new Map;function Rs(t){Ta(t instanceof Function,"Expected a class definition");let e=Tp.get(t);return e?(Ta(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tp.set(t,e),e)}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fy.type="NONE";const Ip=Fy;/**
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
 */function Zl(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Zl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Zl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(Rs(Ip),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Rs(Ip);const o=Zl(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const d=Jn._fromJSON(e,f);u!==r&&(l=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new fi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new fi(r,e,s))}}/**
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
 */function wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OS(e))return"Blackberry";if(DS(e))return"Webos";if(SS(e))return"Safari";if((e.includes("chrome/")||PS(e))&&!e.includes("edge/"))return"Chrome";if(kS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bS(t=sn()){return/firefox\//i.test(t)}function SS(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PS(t=sn()){return/crios\//i.test(t)}function NS(t=sn()){return/iemobile/i.test(t)}function kS(t=sn()){return/android/i.test(t)}function OS(t=sn()){return/blackberry/i.test(t)}function DS(t=sn()){return/webos/i.test(t)}/**
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
 */function Uy(t,e=[]){let n;switch(t){case"Browser":n=wp(sn());break;case"Worker":n=`${wp(sn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${s}`}/**
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
 */class xS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e={}){return hl(t,"GET","/v2/passwordPolicy",Oy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=6;class VS{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class FS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new xS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await My(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(ta(this));const n=e?rn(e):null;return n&&Ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(ta(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(ta(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MS(this),n=new VS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await CS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rs(e)||this._popupRedirectResolver;Ce(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function US(t){return rn(t)}class Ap{constructor(e){this.auth=e,this.observer=null,this.addObserver=PA(n=>this.observer=n)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function BS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ao(3e4,6e4);/**
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
 */new ao(2e3,1e4);/**
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
 */new ao(3e4,6e4);/**
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
 */new ao(5e3,15e3);var Rp="@firebase/auth",Cp="1.7.4";/**
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
 */class jS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qS(t){yn(new on("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uy(t)},u=new FS(s,i,r,c);return BS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yn(new on("auth-internal",e=>{const n=US(e.getProvider("auth").getImmediate());return(s=>new jS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Rp,Cp,$S(t)),Ot(Rp,Cp,"esm2017")}/**
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
 */const HS=5*60;gA("authIdTokenMaxAge");qS("Browser");/**
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
 */const WS=new Map,zS={activated:!1,tokenObservers:[]};function an(t){return WS.get(t)||Object.assign({},zS)}const bp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class KS{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new jr,this.pending.promise.catch(n=>{}),await GS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new jr,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function GS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const QS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},wa=new ki("appCheck","AppCheck",QS);function By(t){if(!an(t).activated)throw wa.create("use-before-activation",{appName:t.name})}/**
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
 */const YS="firebase-app-check-database",XS=1,zc="firebase-app-check-store";let Uo=null;function JS(){return Uo||(Uo=new Promise((t,e)=>{try{const n=indexedDB.open(YS,XS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(wa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(zc,{keyPath:"compositeKey"})}}}catch(n){e(wa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Uo)}function ZS(t,e){return eP(tP(t),e)}async function eP(t,e){const s=(await JS()).transaction(zc,"readwrite"),r=s.objectStore(zc).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(wa.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function tP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Kc=new Zr("@firebase/app-check");function Sp(t,e){return Km()?ZS(t,e).catch(n=>{Kc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const nP={error:"UNKNOWN_ERROR"};function sP(t){return Ga.encodeString(JSON.stringify(t),!1)}async function Gc(t,e=!1){const n=t.app;By(n);const s=an(n);let i=s.token,r;if(i&&!pr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(pr(c)?i=c:await Sp(n,void 0))}if(!e&&i&&pr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await an(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Kc.warn(c.message):Kc.error(c),r=c}let l;return i?r?pr(i)?l={token:i.token,internalError:r}:l=Np(r):(l={token:i.token},s.token=i,await Sp(n,i)):l=Np(r),o&&aP(n,l),l}async function iP(t){const e=t.app;By(e);const{provider:n}=an(e);{const{token:s}=await n.getToken();return{token:s}}}function rP(t,e,n,s){const{app:i}=t,r=an(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&pr(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Pp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Pp(t))}function jy(t,e){const n=an(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Pp(t){const{app:e}=t,n=an(e);let s=n.tokenRefresher;s||(s=oP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function oP(t){const{app:e}=t;return new KS(async()=>{const n=an(e);let s;if(n.token?s=await Gc(t,!0):s=await Gc(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=an(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},bp.RETRIAL_MIN_WAIT,bp.RETRIAL_MAX_WAIT)}function aP(t,e){const n=an(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function pr(t){return t.expireTimeMillis-Date.now()>0}function Np(t){return{token:sP(nP),error:t}}/**
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
 */class lP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=an(this.app);for(const n of e)jy(this.app,n.next);return Promise.resolve()}}function cP(t,e){return new lP(t,e)}function uP(t){return{getToken:e=>Gc(t,e),getLimitedUseToken:()=>iP(t),addTokenListener:e=>rP(t,"INTERNAL",e),removeTokenListener:e=>jy(t.app,e)}}const hP="@firebase/app-check",fP="0.8.4",dP="app-check",kp="app-check-internal";function pP(){yn(new on(dP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return cP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(kp).initialize()})),yn(new on(kp,t=>{const e=t.getProvider("app-check").getImmediate();return uP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(hP,fP)}pP();const $y=Symbol("firebaseApp");function hh(t){return Am()&&en($y,null)||Jm(t)}const dn=()=>{};function fh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function _P(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,l)=>o&&o[l],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function $s(t){return!!t&&typeof t=="object"}const mP=Object.prototype;function gP(t){return $s(t)&&Object.getPrototypeOf(t)===mP}function dh(t){return $s(t)&&t.type==="document"}function yP(t){return $s(t)&&t.type==="collection"}function vP(t){return dh(t)||yP(t)}function EP(t){return $s(t)&&t.type==="query"}function TP(t){return $s(t)&&"ref"in t}function IP(t){return $s(t)&&typeof t.bucket=="string"}function wP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const AP=Symbol.for("v-scx");function RP(){return!!en(AP,0)}const Bo=new WeakMap;function CP(t,e){if(!Bo.has(t)){const n=S_(!0);Bo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Bo.delete(t)}}return Bo.get(t)}var Op={};const Dp="@firebase/database",xp="1.0.5";/**
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
 */let qy="";function bP(t){qy=t}/**
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
 */class SP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$r(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class PP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Hy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SP(e)}}catch{}return new PP},Cs=Hy("localStorage"),NP=Hy("sessionStorage");/**
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
 */const di=new Zr("@firebase/database"),kP=function(){let t=1;return function(){return t++}}(),Wy=function(t){const e=DA(t),n=new SA;n.update(e);const s=n.digest();return Ga.encodeByteArray(s)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lo.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let Pr=null,Mp=!0;const OP=function(t,e){Q(!e,"Can't turn on custom loggers persistently."),di.logLevel=pe.VERBOSE,Pr=di.log.bind(di)},mt=function(...t){if(Mp===!0&&(Mp=!1,Pr===null&&NP.get("logging_enabled")===!0&&OP()),Pr){const e=lo.apply(null,t);Pr(e)}},co=function(t){return function(...e){mt(t,...e)}},Qc=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);di.error(e)},Ms=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw di.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+lo(...t);di.warn(e)},DP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",Ls="[MAX_NAME]",Vi=function(t,e){if(t===e)return 0;if(t===bi||e===Ls)return-1;if(e===bi||t===Ls)return 1;{const n=Lp(t),s=Lp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},MP=function(t,e){return t===e?0:t<e?-1:1},sr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},ph=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=at(e[s]),n+=":",n+=ph(t[e[s]]);return n+="}",n},Ky=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gy=function(t){Q(!zy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let d="";for(c=0;c<64;c+=8){let _=parseInt(f.substr(c,8),2).toString(16);_.length===1&&(_="0"+_),d=d+_}return d.toLowerCase()},LP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},FP=new RegExp("^-?(0*)\\d{1,10}$"),UP=-2147483648,BP=2147483647,Lp=function(t){if(FP.test(t)){const e=Number(t);if(e>=UP&&e<=BP)return e}return null},uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},jP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $P{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}/**
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
 */const _h="5",Qy="v",Yy="s",Xy="r",Jy="f",Zy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ev="ls",tv="p",Yc="ac",nv="websocket",sv="long_polling";/**
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
 */class HP{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iv(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===nv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WP(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class zP{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cA(this.counters_)}}/**
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
 */const ec={},tc={};function mh(t){const e=t.toString();return ec[e]||(ec[e]=new zP),ec[e]}function KP(t,e){const n=t.toString();return tc[n]||(tc[n]=e()),tc[n]}/**
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
 */class GP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&uo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vp="start",QP="close",YP="pLPCommand",XP="pRTLPCB",rv="id",ov="pw",av="ser",JP="cb",ZP="seg",eN="ts",tN="d",nN="dframe",lv=1870,cv=30,sN=lv-cv,iN=25e3,rN=3e4;class ii{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=co(e),this.stats_=mh(n),this.urlFn=c=>(this.appCheckToken&&(c[Yc]=this.appCheckToken),iv(n,sv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rN)),xP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gh((...r)=>{const[o,l,c,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vp)this.id=l,this.password=c;else if(o===QP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vp]="t",s[av]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[JP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qy]=_h,this.transportSessionId&&(s[Yy]=this.transportSessionId),this.lastSessionId&&(s[ev]=this.lastSessionId),this.applicationId&&(s[tv]=this.applicationId),this.appCheckToken&&(s[Yc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(s[Xy]=Jy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LP()&&!VP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$m(n),i=Ky(s,sN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nN]="t",s[rv]=e,s[ov]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kP(),window[YP+this.uniqueCallbackIdentifier]=e,window[XP+this.uniqueCallbackIdentifier]=n,this.myIFrame=gh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){mt("frame writing exception"),l.stack&&mt(l.stack),mt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rv]=this.myID,e[ov]=this.myPW,e[av]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cv+s.length<=lv;){const o=this.pendingSegs.shift();s=s+"&"+ZP+i+"="+o.seg+"&"+eN+i+"="+o.ts+"&"+tN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(iN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const oN=16384,aN=45e3;let Aa=null;typeof MozWebSocket<"u"?Aa=MozWebSocket:typeof WebSocket<"u"&&(Aa=WebSocket);class Gt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=co(this.connId),this.stats_=mh(n),this.connURL=Gt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Qy]=_h,typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(o[Xy]=Jy),n&&(o[Yy]=n),s&&(o[ev]=s),i&&(o[Yc]=i),r&&(o[tv]=r),iv(e,nv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let s;zm(),this.mySock=new Aa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Aa!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$r(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ky(n,oN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class Yr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ii,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const i=this.transports_=[];for(const r of Yr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yr.globalTransportInitialized_=!1;/**
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
 */const lN=6e4,cN=5e3,uN=10*1024,hN=100*1024,nc="t",Fp="d",fN="s",Up="r",dN="e",Bp="o",jp="a",$p="n",qp="p",pN="h";class _N{constructor(e,n,s,i,r,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=co("c:"+this.id+":"),this.transportManager_=new Yr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Nr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nc in e){const n=e[nc];n===jp?this.upgradeIfSecondaryHealthy_():n===Up?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=sr("t",e),s=sr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$p,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=sr("t",e),s=sr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=sr(nc,e);if(Fp in e){const s=e[Fp];if(n===pN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$p){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fN?this.onConnectionShutdown_(s):n===Up?this.onReset_(s):n===dN?Qc("Server Error: "+s):n===Bp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_h!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Nr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class uv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class hv{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ra extends hv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ku()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ra}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hp=32,Wp=768;class Ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Ue("")}function Ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function us(t){return t.pieces_.length-t.pieceNum_}function Ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ue(t.pieces_,e)}function fv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ue(e,0)}function st(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ue(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=Ee(t),s=Ee(e);if(n===null)return e;if(n===s)return qt(Ve(t),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _v(t,e){if(us(t)!==us(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(us(t)>us(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gN{constructor(e,n){this.errorPrefix_=n,this.parts_=dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ya(this.parts_[s]);mv(this)}}function yN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ya(e),mv(t)}function vN(t){const e=t.parts_.pop();t.byteLength_-=Ya(e),t.parts_.length>0&&(t.byteLength_-=1)}function mv(t){if(t.byteLength_>Wp)throw new Error(t.errorPrefix_+"has a key path longer than "+Wp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hp+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yh extends hv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yh}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ir=1e3,EN=60*5*1e3,zp=30*1e3,TN=1.3,IN=3e4,wN="server_kill",Kp=3;class xn extends uv{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=xn.nextPersistentConnectionId_++,this.log_=co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ir,this.maxReconnectDelay_=EN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!zm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(at(r)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new jr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;xn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const s=yi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qc("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IN&&(this.reconnectDelay_=ir),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){Q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,_]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=_&&_.token,l=new _N(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{xt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(wN)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xt(d),c())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ph(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kp&&(this.reconnectDelay_=zp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qy.replace(/\./g,"-")]=1,ku()?e["framework.cordova"]=1:Wm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ra.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
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
 */class Te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Te(e,n)}}/**
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
 */class fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Te(bi,e),i=new Te(bi,n);return this.compare(s,i)!==0}minPost(){return Te.MIN}}/**
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
 */let jo;class gv extends fl{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,n){return Vi(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Te.MIN}maxPost(){return new Te(Ls,jo)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new Te(e,jo)}toString(){return".key"}}const pi=new gv;/**
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
 */class $o{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??nt.RED,this.left=i??Ct.EMPTY_NODE,this.right=r??Ct.EMPTY_NODE}copy(e,n,s,i,r){return new nt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class AN{copy(e,n,s,i,r){return this}insert(e,n,s){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $o(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $o(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new AN;/**
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
 */function RN(t,e){return Vi(t.name,e.name)}function vh(t,e){return Vi(t,e)}/**
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
 */let Xc;function CN(t){Xc=t}const yv=function(t){return typeof t=="number"?"number:"+Gy(t):"string:"+t},vv=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else Q(t===Xc||t.isEmpty(),"priority of unexpected type.");Q(t===Xc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gp;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vv(this.priorityNode_)}static set __childrenNodeConstructor(e){Gp=e}static get __childrenNodeConstructor(){return Gp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:Ee(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gy(this.value_):e+=this.value_,this.lazyHash_=Wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(n),r=et.VALUE_TYPE_ORDER.indexOf(s);return Q(i>=0,"Unknown leaf type: "+n),Q(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ev,Tv;function bN(t){Ev=t}function SN(t){Tv=t}class PN extends fl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(Ls,new et("[PRIORITY-POST]",Tv))}makePost(e,n){const s=Ev(e);return new Te(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const vt=new PN;/**
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
 */const NN=Math.log(2);class kN{constructor(e){const n=r=>parseInt(Math.log(r)/NN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ca=function(t,e,n,s){t.sort(e);const i=function(c,u){const f=u-c;let d,_;if(f===0)return null;if(f===1)return d=t[c],_=n?n(d):d,new nt(_,d.node,nt.BLACK,null,null);{const g=parseInt(f/2,10)+c,w=i(c,g),N=i(g+1,u);return d=t[g],_=n?n(d):d,new nt(_,d.node,nt.BLACK,w,N)}},r=function(c){let u=null,f=null,d=t.length;const _=function(w,N){const P=d-w,M=d;d-=w;const F=i(P+1,M),V=t[P],q=n?n(V):V;g(new nt(q,V.node,N,null,F))},g=function(w){u?(u.left=w,u=w):(f=w,u=w)};for(let w=0;w<c.count;++w){const N=c.nextBitIsOne(),P=Math.pow(2,c.count-(w+1));N?_(P,nt.BLACK):(_(P,nt.BLACK),_(P,nt.RED))}return f},o=new kN(t.length),l=r(o);return new Ct(s||e,l)};/**
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
 */let sc;const Xs={};class Pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return Q(Xs&&vt,"ChildrenNode.ts has not been loaded"),sc=sc||new Pn({".priority":Xs},{".priority":vt}),sc}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ca(s,e.getCompare()):l=Xs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new Pn(f,u)}addToIndexes(e,n){const s=ca(this.indexes_,(i,r)=>{const o=yi(this.indexSet_,r);if(Q(o,"Missing index implementation for "+r),i===Xs)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(Te.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Ca(l,o.getCompare())}else return Xs;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new Te(e.name,l))),c.insert(e,e.node)}});return new Pn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ca(this.indexes_,i=>{if(i===Xs)return i;{const r=n.get(e.name);return r?i.remove(new Te(e.name,r)):i}});return new Pn(s,this.indexSet_)}}/**
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
 */let rr;class Pe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vv(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rr||(rr=new Pe(new Ct(vh),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rr}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rr:n}}getChild(e){const n=Ee(e);return n===null?this:this.getImmediateChild(n).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?rr:this.priorityNode_;return new Pe(i,o,r)}}updateChild(e,n){const s=Ee(e);if(s===null)return n;{Q(Ee(e)!==".priority"||us(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(vt,(o,l)=>{n[o]=l.val(e),s++,r&&Pe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yv(this.getPriority().val())+":"),this.forEachChild(vt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ho?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(vt),i=n.getIterator(vt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ON extends Pe{constructor(){super(new Ct(vh),Pe.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const ho=new ON;Object.defineProperties(Te,{MIN:{value:new Te(bi,Pe.EMPTY_NODE)},MAX:{value:new Te(Ls,ho)}});gv.__EMPTY_NODE=Pe.EMPTY_NODE;et.__childrenNodeConstructor=Pe;CN(ho);SN(ho);/**
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
 */const DN=!0;function gt(t,e=null){if(t===null)return Pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,gt(e))}if(!(t instanceof Array)&&DN){const n=[];let s=!1;if(Ht(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=gt(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Te(o,c)))}}),n.length===0)return Pe.EMPTY_NODE;const r=Ca(n,RN,o=>o.name,vh);if(s){const o=Ca(n,vt.getCompare());return new Pe(r,gt(e),new Pn({".priority":o},{".priority":vt}))}else return new Pe(r,gt(e),Pn.Default)}else{let n=Pe.EMPTY_NODE;return Ht(t,(s,i)=>{if(Un(t,s)&&s.substring(0,1)!=="."){const r=gt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(gt(e))}}bN(gt);/**
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
 */class xN extends fl{constructor(e){super(),this.indexPath_=e,Q(!me(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Vi(e.name,n.name):r}makePost(e,n){const s=gt(e),i=Pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Te(n,i)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,ho);return new Te(Ls,e)}toString(){return dv(this.indexPath_,0).join("/")}}/**
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
 */class MN extends fl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,n){const s=gt(e);return new Te(n,s)}toString(){return".value"}}const LN=new MN;/**
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
 */function VN(t){return{type:"value",snapshotNode:t}}function FN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function UN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Eh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ls}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new Eh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vt?n="$priority":t.index_===LN?n="$value":t.index_===pi?n="$key":(Q(t.index_ instanceof xN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=at(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+at(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=at(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
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
 */class ba extends uv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ba.getListenId_(e,s),l={};this.listens_[o]=l;const c=Yp(e._queryParams);this.restRequest_(r+".json",c,(u,f)=>{let d=f;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),yi(this.listens_,o)===l){let _;u?u===401?_="permission_denied":_="rest_error:"+u:_="ok",i(_,null)}})}unlisten(e,n){const s=ba.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yp(e._queryParams),s=e._path.toString(),i=new jr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ou(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=$r(l.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class jN{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Sa(){return{value:null,children:new Map}}function Iv(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ee(e);t.children.has(s)||t.children.set(s,Sa());const i=t.children.get(s);e=Ve(e),Iv(i,e,n)}}function Jc(t,e,n){t.value!==null?n(e,t.value):$N(t,(s,i)=>{const r=new Ue(e.toString()+"/"+s);Jc(i,r,n)})}function $N(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class qN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Jp=10*1e3,HN=30*1e3,WN=5*60*1e3;class zN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qN(e);const s=Jp+(HN-Jp)*Math.random();Nr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&Un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Nr(this.reportStats_.bind(this),Math.floor(Math.random()*2*WN))}}/**
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
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function wv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Av(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pn.ACK_USER_WRITE,this.source=wv()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ue(e));return new Pa(ke(),n,this.revert)}}else return Q(Ee(this.path)===e,"operationForChild called for unrelated child."),new Pa(Ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class Vs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pn.OVERWRITE}operationForChild(e){return me(this.path)?new Vs(this.source,ke(),this.snap.getImmediateChild(e)):new Vs(this.source,Ve(this.path),this.snap)}}/**
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
 */class Xr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pn.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Ue(e));return n.isEmpty()?null:n.value?new Vs(this.source,ke(),n.value):new Xr(this.source,ke(),n)}else return Q(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xr(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Th{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function KN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(BN(o.childName,o.snapshotNode))}),or(t,i,"child_removed",e,s,n),or(t,i,"child_added",e,s,n),or(t,i,"child_moved",r,s,n),or(t,i,"child_changed",e,s,n),or(t,i,"value",e,s,n),i}function or(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>QN(t,l,c)),o.forEach(l=>{const c=GN(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function GN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QN(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const s=new Te(e.childName,e.snapshotNode),i=new Te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Cv(t,e){return{eventCache:t,serverCache:e}}function kr(t,e,n,s){return Cv(new Th(e,n,s),t.serverCache)}function bv(t,e,n,s){return Cv(t.eventCache,new Th(e,n,s))}function Zc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ic;const YN=()=>(ic||(ic=new Ct(MP)),ic);class Le{constructor(e,n=YN()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return Ht(e,(s,i)=>{n=n.set(new Ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(me(e))return null;{const s=Ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ve(e),n);return r!=null?{path:st(new Ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=Ee(e),s=this.children.get(n);return s!==null?s.subtree(Ve(e)):new Le(null)}}set(e,n){if(me(e))return new Le(n,this.children);{const s=Ee(e),r=(this.children.get(s)||new Le(null)).set(Ve(e),n),o=this.children.insert(s,r);return new Le(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=Ee(e),s=this.children.get(n);if(s){const i=s.remove(Ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Le(null):new Le(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const n=Ee(e),s=this.children.get(n);return s?s.get(Ve(e)):null}}setTree(e,n){if(me(e))return n;{const s=Ee(e),r=(this.children.get(s)||new Le(null)).setTree(Ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Le(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(st(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(me(e))return null;{const r=Ee(e),o=this.children.get(r);return o?o.findOnPath_(Ve(e),st(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const i=Ee(e),r=this.children.get(i);return r?r.foreachOnPath_(Ve(e),st(n,i),s):new Le(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(st(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Le(null))}}function Or(t,e,n){if(me(e))return new tn(new Le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=qt(i,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(i,r))}else{const i=new Le(n),r=t.writeTree_.setTree(e,i);return new tn(r)}}}function Zp(t,e,n){let s=t;return Ht(n,(i,r)=>{s=Or(s,st(e,i),r)}),s}function e_(t,e){if(me(e))return tn.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new tn(n)}}function eu(t,e){return qs(t,e)!=null}function qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function t_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(s,i)=>{e.push(new Te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Te(s,i.value))}),e}function rs(t,e){if(me(e))return t;{const n=qs(t,e);return n!=null?new tn(new Le(n)):new tn(t.writeTree_.subtree(e))}}function tu(t){return t.writeTree_.isEmpty()}function Si(t,e){return Sv(ke(),t.writeTree_,e)}function Sv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(Q(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Sv(st(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(st(t,".priority"),s)),n}}/**
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
 */function Pv(t,e){return xv(e,t)}function XN(t,e,n,s,i){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Or(t.visibleWrites,e,n)),t.lastWriteId=s}function JN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ZN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ek(l,s.path)?i=!1:Xt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return tk(t),!0;if(s.snap)t.visibleWrites=e_(t.visibleWrites,s.path);else{const l=s.children;Ht(l,c=>{t.visibleWrites=e_(t.visibleWrites,st(s.path,c))})}return!0}else return!1}function ek(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(st(t.path,n),e))return!0;return!1}function tk(t){t.visibleWrites=Nv(t.allWrites,nk,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nk(t){return t.visible}function Nv(t,e,n){let s=tn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xt(n,o)?(l=qt(n,o),s=Or(s,l,r.snap)):Xt(o,n)&&(l=qt(o,n),s=Or(s,ke(),r.snap.getChild(l)));else if(r.children){if(Xt(n,o))l=qt(n,o),s=Zp(s,l,r.children);else if(Xt(o,n))if(l=qt(o,n),me(l))s=Zp(s,ke(),r.children);else{const c=yi(r.children,Ee(l));if(c){const u=c.getChild(Ve(l));s=Or(s,ke(),u)}}}else throw Ni("WriteRecord should have .snap or .children")}}return s}function kv(t,e,n,s,i){if(!s&&!i){const r=qs(t.visibleWrites,e);if(r!=null)return r;{const o=rs(t.visibleWrites,e);if(tu(o))return n;if(n==null&&!eu(o,ke()))return null;{const l=n||Pe.EMPTY_NODE;return Si(o,l)}}}else{const r=rs(t.visibleWrites,e);if(!i&&tu(r))return n;if(!i&&n==null&&!eu(r,ke()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Xt(u.path,e)||Xt(e,u.path))},l=Nv(t.allWrites,o,e),c=n||Pe.EMPTY_NODE;return Si(l,c)}}}function sk(t,e,n){let s=Pe.EMPTY_NODE;const i=qs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=rs(t.visibleWrites,e);return n.forEachChild(vt,(o,l)=>{const c=Si(rs(r,new Ue(o)),l);s=s.updateImmediateChild(o,c)}),t_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=rs(t.visibleWrites,e);return t_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ik(t,e,n,s,i){Q(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=st(e,n);if(eu(t.visibleWrites,r))return null;{const o=rs(t.visibleWrites,r);return tu(o)?i.getChild(n):Si(o,i.getChild(n))}}function rk(t,e,n,s){const i=st(e,n),r=qs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=rs(t.visibleWrites,i);return Si(o,s.getNode().getImmediateChild(n))}else return null}function ok(t,e){return qs(t.visibleWrites,e)}function ak(t,e,n,s,i,r,o){let l;const c=rs(t.visibleWrites,e),u=qs(c,ke());if(u!=null)l=u;else if(n!=null)l=Si(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),_=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=_.getNext();for(;g&&f.length<i;)d(g,s)!==0&&f.push(g),g=_.getNext();return f}else return[]}function lk(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function nu(t,e,n,s){return kv(t.writeTree,t.treePath,e,n,s)}function Ov(t,e){return sk(t.writeTree,t.treePath,e)}function n_(t,e,n,s){return ik(t.writeTree,t.treePath,e,n,s)}function Na(t,e){return ok(t.writeTree,st(t.treePath,e))}function ck(t,e,n,s,i,r){return ak(t.writeTree,t.treePath,e,n,s,i,r)}function Ih(t,e,n){return rk(t.writeTree,t.treePath,e,n)}function Dv(t,e){return xv(st(t.treePath,e),t.writeTree)}function xv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Qp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,UN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,FN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Qp(s,e.snapshotNode,i.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mv=new hk;class wh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Th(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ih(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fs(this.viewCache_),r=ck(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function fk(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dk(t,e,n,s,i){const r=new uk;let o,l;if(n.type===pn.OVERWRITE){const u=n;u.source.fromUser?o=su(t,e,u.path,u.snap,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!me(u.path),o=ka(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===pn.MERGE){const u=n;u.source.fromUser?o=_k(t,e,u.path,u.children,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=iu(t,e,u.path,u.children,s,i,l,r))}else if(n.type===pn.ACK_USER_WRITE){const u=n;u.revert?o=yk(t,e,u.path,s,i,r):o=mk(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===pn.LISTEN_COMPLETE)o=gk(t,e,n.path,s,r);else throw Ni("Unknown operation type: "+n.type);const c=r.getChanges();return pk(e,o,c),{viewCache:o,changes:c}}function pk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Zc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(VN(Zc(e)))}}function Lv(t,e,n,s,i,r){const o=e.eventCache;if(Na(s,n)!=null)return e;{let l,c;if(me(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Fs(e),f=u instanceof Pe?u:Pe.EMPTY_NODE,d=Ov(s,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=nu(s,Fs(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Ee(n);if(u===".priority"){Q(us(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const d=n_(s,n,f,c);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=Ve(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const _=n_(s,n,o.getNode(),c);_!=null?d=o.getNode().getImmediateChild(u).updateChild(f,_):d=o.getNode().getImmediateChild(u)}else d=Ih(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,f,i,r):l=o.getNode()}}return kr(e,l,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function ka(t,e,n,s,i,r,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(me(n))u=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=f.updateFullNode(c.getNode(),g,null)}else{const g=Ee(n);if(!c.isCompleteForPath(n)&&us(n)>1)return e;const w=Ve(n),P=c.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?u=f.updatePriority(c.getNode(),P):u=f.updateChild(c.getNode(),g,P,w,Mv,null)}const d=bv(e,u,c.isFullyInitialized()||me(n),f.filtersNodes()),_=new wh(i,d,r);return Lv(t,d,n,i,_,l)}function su(t,e,n,s,i,r,o){const l=e.eventCache;let c,u;const f=new wh(i,e,r);if(me(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=kr(e,u,!0,t.filter.filtersNodes());else{const d=Ee(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=kr(e,u,l.isFullyInitialized(),l.isFiltered());else{const _=Ve(n),g=l.getNode().getImmediateChild(d);let w;if(me(_))w=s;else{const N=f.getCompleteChild(d);N!=null?fv(_)===".priority"&&N.getChild(pv(_)).isEmpty()?w=N:w=N.updateChild(_,s):w=Pe.EMPTY_NODE}if(g.equals(w))c=e;else{const N=t.filter.updateChild(l.getNode(),d,w,_,f,o);c=kr(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function s_(t,e){return t.eventCache.isCompleteForChild(e)}function _k(t,e,n,s,i,r,o){let l=e;return s.foreach((c,u)=>{const f=st(n,c);s_(e,Ee(f))&&(l=su(t,l,f,u,i,r,o))}),s.foreach((c,u)=>{const f=st(n,c);s_(e,Ee(f))||(l=su(t,l,f,u,i,r,o))}),l}function i_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function iu(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;me(n)?u=s:u=new Le(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((d,_)=>{if(f.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),w=i_(t,g,_);c=ka(t,c,new Ue(d),w,i,r,o,l)}}),u.children.inorderTraversal((d,_)=>{const g=!e.serverCache.isCompleteForChild(d)&&_.value===null;if(!f.hasChild(d)&&!g){const w=e.serverCache.getNode().getImmediateChild(d),N=i_(t,w,_);c=ka(t,c,new Ue(d),N,i,r,o,l)}}),c}function mk(t,e,n,s,i,r,o){if(Na(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(me(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ka(t,e,n,c.getNode().getChild(n),i,r,l,o);if(me(n)){let u=new Le(null);return c.getNode().forEachChild(pi,(f,d)=>{u=u.set(new Ue(f),d)}),iu(t,e,n,u,i,r,l,o)}else return e}else{let u=new Le(null);return s.foreach((f,d)=>{const _=st(n,f);c.isCompleteForPath(_)&&(u=u.set(f,c.getNode().getChild(_)))}),iu(t,e,n,u,i,r,l,o)}}function gk(t,e,n,s,i){const r=e.serverCache,o=bv(e,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return Lv(t,o,n,s,Mv,i)}function yk(t,e,n,s,i,r){let o;if(Na(s,n)!=null)return e;{const l=new wh(s,e,i),c=e.eventCache.getNode();let u;if(me(n)||Ee(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=nu(s,Fs(e));else{const d=e.serverCache.getNode();Q(d instanceof Pe,"serverChildren would be complete if leaf node"),f=Ov(s,d)}f=f,u=t.filter.updateFullNode(c,f,r)}else{const f=Ee(n);let d=Ih(s,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),d!=null?u=t.filter.updateChild(c,f,d,Ve(n),l,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,Pe.EMPTY_NODE,Ve(n),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nu(s,Fs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Na(s,ke())!=null,kr(e,u,o,t.filter.filtersNodes())}}function vk(t,e){const n=Fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(Ee(e)).isEmpty())?n.getChild(e):null}function r_(t,e,n,s){e.type===pn.MERGE&&e.source.queryId!==null&&(Q(Fs(t.viewCache_),"We should always have a full cache before handling merges"),Q(Zc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=dk(t.processor_,i,e,n,s);return fk(t.processor_,r.viewCache),Q(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ek(t,r.changes,r.viewCache.eventCache.getNode())}function Ek(t,e,n,s){const i=t.eventRegistrations_;return KN(t.eventGenerator_,e,n,i)}/**
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
 */let o_;function Tk(t){Q(!o_,"__referenceConstructor has already been defined"),o_=t}function Ah(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return Q(r!=null,"SyncTree gave us an op for an invalid query."),r_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(r_(o,e,n,s));return r}}function Rh(t,e){let n=null;for(const s of t.views.values())n=n||vk(s,e);return n}/**
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
 */let a_;function Ik(t){Q(!a_,"__referenceConstructor has already been defined"),a_=t}class l_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=lk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wk(t,e,n,s,i){return XN(t.pendingWriteTree_,e,n,s,i),i?pl(t,new Vs(wv(),e,n)):[]}function ri(t,e,n=!1){const s=JN(t.pendingWriteTree_,e);if(ZN(t.pendingWriteTree_,e)){let r=new Le(null);return s.snap!=null?r=r.set(ke(),!0):Ht(s.children,o=>{r=r.set(new Ue(o),!0)}),pl(t,new Pa(s.path,r,n))}else return[]}function dl(t,e,n){return pl(t,new Vs(Av(),e,n))}function Ak(t,e,n){const s=Le.fromObject(n);return pl(t,new Xr(Av(),e,s))}function Rk(t,e,n,s){const i=Bv(t,s);if(i!=null){const r=jv(i),o=r.path,l=r.queryId,c=qt(o,e),u=new Vs(Rv(l),c,n);return $v(t,o,u)}else return[]}function Ck(t,e,n,s){const i=Bv(t,s);if(i){const r=jv(i),o=r.path,l=r.queryId,c=qt(o,e),u=Le.fromObject(n),f=new Xr(Rv(l),c,u);return $v(t,o,f)}else return[]}function Vv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=qt(o,e),u=Rh(l,c);if(u)return u});return kv(i,e,r,n,!0)}function pl(t,e){return Fv(e,t.syncPointTree_,null,Pv(t.pendingWriteTree_,ke()))}function Fv(t,e,n,s){if(me(t.path))return Uv(t,e,n,s);{const i=e.get(ke());n==null&&i!=null&&(n=Rh(i,ke()));let r=[];const o=Ee(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=Dv(s,o);r=r.concat(Fv(l,c,u,f))}return i&&(r=r.concat(Ah(i,t,s,n))),r}}function Uv(t,e,n,s){const i=e.get(ke());n==null&&i!=null&&(n=Rh(i,ke()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Dv(s,o),f=t.operationForChild(o);f&&(r=r.concat(Uv(f,l,c,u)))}),i&&(r=r.concat(Ah(i,t,s,n))),r}function Bv(t,e){return t.tagToQueryMap.get(e)}function jv(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ue(t.substr(0,e))}}function $v(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const i=Pv(t.pendingWriteTree_,e);return Ah(s,n,i,null)}/**
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
 */class Ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ch(n)}node(){return this.node_}}class bh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new bh(this.syncTree_,n)}node(){return Vv(this.syncTree_,this.path_)}}const bk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},c_=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Sk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pk(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Sk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},Pk=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const i=e.node();if(Q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Nk=function(t,e,n,s){return Sh(e,new bh(n,t),s)},kk=function(t,e,n){return Sh(t,new Ch(e),n)};function Sh(t,e,n){const s=t.getPriority().val(),i=c_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=c_(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new et(l,gt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new et(i))),o.forEachChild(vt,(l,c)=>{const u=Sh(c,e.getImmediateChild(l),n);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
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
 */class Ph{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nh(t,e){let n=e instanceof Ue?e:new Ue(e),s=t,i=Ee(n);for(;i!==null;){const r=yi(s.node.children,i)||{children:{},childCount:0};s=new Ph(i,s,r),n=Ve(n),i=Ee(n)}return s}function Fi(t){return t.node.value}function qv(t,e){t.node.value=e,ru(t)}function Hv(t){return t.node.childCount>0}function Ok(t){return Fi(t)===void 0&&!Hv(t)}function _l(t,e){Ht(t.node.children,(n,s)=>{e(new Ph(n,t,s))})}function Wv(t,e,n,s){n&&!s&&e(t),_l(t,i=>{Wv(i,e,!0,s)}),n&&s&&e(t)}function Dk(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fo(t){return new Ue(t.parent===null?t.name:fo(t.parent)+"/"+t.name)}function ru(t){t.parent!==null&&xk(t.parent,t.name,t)}function xk(t,e,n){const s=Ok(n),i=Un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ru(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ru(t))}/**
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
 */const Mk=/[\[\].#$\/\u0000-\u001F\u007F]/,Lk=/[\[\].#$\u0000-\u001F\u007F]/,rc=10*1024*1024,zv=function(t){return typeof t=="string"&&t.length!==0&&!Mk.test(t)},Vk=function(t){return typeof t=="string"&&t.length!==0&&!Lk.test(t)},Fk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vk(t)},Kv=function(t,e,n){const s=n instanceof Ue?new gN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(s));if(typeof e=="function")throw new Error(t+"contains a function "+Es(s)+" with contents = "+e.toString());if(zy(e))throw new Error(t+"contains "+e.toString()+" "+Es(s));if(typeof e=="string"&&e.length>rc/3&&Ya(e)>rc)throw new Error(t+"contains a string greater than "+rc+" utf8 bytes "+Es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!zv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yN(s,o),Kv(t,l,s),vN(s)}),i&&r)throw new Error(t+' contains ".value" child '+Es(s)+" in addition to actual children.")}},Uk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fk(n))throw new Error(OA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Bk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jk(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!_v(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hs(t,e,n){jk(t,n),$k(t,s=>Xt(s,e)||Xt(e,s))}function $k(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Pr&&mt("event: "+n.toString()),uo(s)}}}/**
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
 */const Hk="repo_interrupt",Wk=25;class zk{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sa(),this.transactionQueueTree_=new Ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Kk(t,e,n){if(t.stats_=mh(t.repoInfo_),t.forceRestClient_||jP())t.server_=new ba(t.repoInfo_,(s,i,r,o)=>{u_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>h_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new xn(t.repoInfo_,e,(s,i,r,o)=>{u_(t,s,i,r,o)},s=>{h_(t,s)},s=>{Qk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=KP(t.repoInfo_,()=>new zN(t.stats_,t.server_)),t.infoData_=new jN,t.infoSyncTree_=new l_({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=dl(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),kh(t,"connected",!1),t.serverSyncTree_=new l_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);Hs(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Gk(t){const n=t.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gv(t){return bk({timestamp:Gk(t)})}function u_(t,e,n,s,i){t.dataUpdateCount++;const r=new Ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ca(n,u=>gt(u));o=Ck(t.serverSyncTree_,r,c,i)}else{const c=gt(n);o=Rk(t.serverSyncTree_,r,c,i)}else if(s){const c=ca(n,u=>gt(u));o=Ak(t.serverSyncTree_,r,c)}else{const c=gt(n);o=dl(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Dh(t,r)),Hs(t.eventQueue_,l,o)}function h_(t,e){kh(t,"connected",e),e===!1&&Xk(t)}function Qk(t,e){Ht(e,(n,s)=>{kh(t,n,s)})}function kh(t,e,n){const s=new Ue("/.info/"+e),i=gt(n);t.infoData_.updateSnapshot(s,i);const r=dl(t.infoSyncTree_,s,i);Hs(t.eventQueue_,s,r)}function Yk(t){return t.nextWriteId_++}function Xk(t){Qv(t,"onDisconnectEvents");const e=Gv(t),n=Sa();Jc(t.onDisconnect_,ke(),(i,r)=>{const o=Nk(i,r,t.serverSyncTree_,e);Iv(n,i,o)});let s=[];Jc(n,ke(),(i,r)=>{s=s.concat(dl(t.serverSyncTree_,i,r));const o=tO(t,i);Dh(t,o)}),t.onDisconnect_=Sa(),Hs(t.eventQueue_,ke(),s)}function Jk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Hk)}function Qv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function Yv(t,e,n){return Vv(t.serverSyncTree_,e,n)||Pe.EMPTY_NODE}function Oh(t,e=t.transactionQueueTree_){if(e||ml(t,e),Fi(e)){const n=Jv(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Zk(t,fo(e),n)}else Hv(e)&&_l(e,n=>{Oh(t,n)})}function Zk(t,e,n){const s=n.map(u=>u.currentWriteId),i=Yv(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];Q(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=qt(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,u=>{Qv(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const d=[];for(let _=0;_<n.length;_++)n[_].status=2,f=f.concat(ri(t.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&d.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();ml(t,Nh(t.transactionQueueTree_,e)),Oh(t,t.transactionQueueTree_),Hs(t.eventQueue_,e,f);for(let _=0;_<d.length;_++)uo(d[_])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{xt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Dh(t,e)}},o)}function Dh(t,e){const n=Xv(t,e),s=fo(n),i=Jv(t,n);return eO(t,i,s),s}function eO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=qt(n,c.path);let f=!1,d;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,d=c.abortReason,i=i.concat(ri(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Wk)f=!0,d="maxretry",i=i.concat(ri(t.serverSyncTree_,c.currentWriteId,!0));else{const _=Yv(t,c.path,o);c.currentInputSnapshot=_;const g=e[l].update(_.val());if(g!==void 0){Kv("transaction failed: Data returned ",g,c.path);let w=gt(g);typeof g=="object"&&g!=null&&Un(g,".priority")||(w=w.updatePriority(_.getPriority()));const P=c.currentWriteId,M=Gv(t),F=kk(w,_,M);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=F,c.currentWriteId=Yk(t),o.splice(o.indexOf(P),1),i=i.concat(wk(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(ri(t.serverSyncTree_,P,!0))}else f=!0,d="nodata",i=i.concat(ri(t.serverSyncTree_,c.currentWriteId,!0))}Hs(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(_){setTimeout(_,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}ml(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)uo(s[l]);Oh(t,t.transactionQueueTree_)}function Xv(t,e){let n,s=t.transactionQueueTree_;for(n=Ee(e);n!==null&&Fi(s)===void 0;)s=Nh(s,n),e=Ve(e),n=Ee(e);return s}function Jv(t,e){const n=[];return Zv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zv(t,e,n){const s=Fi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);_l(e,i=>{Zv(t,i,n)})}function ml(t,e){const n=Fi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,qv(e,n.length>0?n:void 0)}_l(e,s=>{ml(t,s)})}function tO(t,e){const n=fo(Xv(t,e)),s=Nh(t.transactionQueueTree_,e);return Dk(s,i=>{oc(t,i)}),oc(t,s),Wv(s,i=>{oc(t,i)}),n}function oc(t,e){const n=Fi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qv(e,void 0):n.length=r+1,Hs(t.eventQueue_,fo(e),i);for(let o=0;o<s.length;o++)uo(s[o])}}/**
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
 */function nO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const f_=function(t,e){const n=iO(t),s=n.namespace;n.domain==="firebase.com"&&Ms(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new HP(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ue(n.pathString)}},iO=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=nO(t.substring(f,d)));const _=sO(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in _&&(r=_.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class xh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:fv(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=Xp(this._queryParams),n=ph(e);return n==="{}"?"default":n}get _queryObject(){return Xp(this._queryParams)}isEqual(e){if(e=rn(e),!(e instanceof xh))return!1;const n=this._repo===e._repo,s=_v(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mN(this._path)}}class Ui extends xh{constructor(e,n){super(e,n,new Eh,!1)}get parent(){const e=pv(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Tk(Ui);Ik(Ui);/**
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
 */const rO="FIREBASE_DATABASE_EMULATOR_HOST",ou={};let oO=!1;function aO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=f_(r,i),l=o.repoInfo,c;typeof process<"u"&&Op&&(c=Op[rO]),c?(r=`http://${c}?ns=${l.namespace}`,o=f_(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new qP(t.name,t.options,e);Uk("Invalid Firebase Database URL",o),me(o.path)||Ms("Database URL must point to the root of a Firebase Database (not including a child path).");const f=cO(l,t,u,new $P(t.name,n));return new uO(f,t)}function lO(t,e){const n=ou[e];(!n||n[t.key]!==t)&&Ms(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Jk(t),delete n[t.key]}function cO(t,e,n,s){let i=ou[e.name];i||(i={},ou[e.name]=i);let r=i[t.toURLString()];return r&&Ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new zk(t,oO,n,s),i[t.toURLString()]=r,r}class uO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Kk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ms("Cannot call "+e+" on a deleted database.")}}/**
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
 */function hO(t){bP(Oi),yn(new on("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return aO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(Dp,xp,t),Ot(Dp,xp,"esm2017")}xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hO();/**
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
 */const eE="firebasestorage.googleapis.com",fO="storageBucket",dO=2*60*1e3,pO=10*60*1e3;/**
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
 */class In extends Fn{constructor(e,n,s=0){super(ac(e),`Firebase Storage: ${n} (${ac(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ac(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tn||(Tn={}));function ac(t){return"storage/"+t}function _O(){const t="An unknown error occurred, please check the error payload for server response.";return new In(Tn.UNKNOWN,t)}function mO(){return new In(Tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gO(){return new In(Tn.CANCELED,"User canceled the upload/download.")}function yO(t){return new In(Tn.INVALID_URL,"Invalid URL '"+t+"'.")}function vO(t){return new In(Tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function d_(t){return new In(Tn.INVALID_ARGUMENT,t)}function tE(){return new In(Tn.APP_DELETED,"The Firebase app was deleted.")}function EO(t){return new In(Tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(s.path==="")return s;throw vO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${i}/o${_}`,"i"),w={bucket:1,path:3},N=n===eE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",M=new RegExp(`^https?://${N}/${i}/${P}`,"i"),V=[{regex:l,indices:c,postModify:r},{regex:g,indices:w,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let q=0;q<V.length;q++){const ae=V[q],K=ae.regex.exec(e);if(K){const A=K[ae.indices.bucket];let v=K[ae.indices.path];v||(v=""),s=new Jt(A,v),ae.postModify(s);break}}if(s==null)throw yO(e);return s}}class TO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function IO(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function d(P){i=setTimeout(()=>{i=null,t(g,c())},P)}function _(){r&&clearTimeout(r)}function g(P,...M){if(u){_();return}if(P){_(),f.call(null,P,...M);return}if(c()||o){_(),f.call(null,P,...M);return}s<64&&(s*=2);let V;l===1?(l=2,V=0):V=(s+Math.random())*1e3,d(V)}let w=!1;function N(P){w||(w=!0,_(),!u&&(i!==null?(P||(l=2),clearTimeout(i),d(0)):P||(l=1)))}return d(0),r=setTimeout(()=>{o=!0,N(!0)},n),N}function wO(t){t(!1)}/**
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
 */function AO(t){return t!==void 0}function p_(t,e,n,s){if(s<e)throw d_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw d_(`Invalid value for '${t}'. Expected ${n} or less.`)}function RO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Oa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oa||(Oa={}));/**
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
 */function CO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class bO{constructor(e,n,s,i,r,o,l,c,u,f,d,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new qo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Oa.NO_ERROR,c=r.getStatus();if(!l||CO(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Oa.ABORT;s(!1,new qo(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new qo(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());AO(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=_O();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?tE():gO();o(c)}else{const c=mO();o(c)}};this.canceled_?n(!1,new qo(!1,null,!0)):this.backoffId_=IO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function SO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OO(t,e,n,s,i,r,o=!0){const l=RO(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return NO(u,e),SO(u,n),PO(u,r),kO(u,s),new bO(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function DO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Da{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Da(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xO(this._location.path)}get storage(){return this._service}get parent(){const e=DO(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Da(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EO(e)}}function __(t,e){const n=e==null?void 0:e[fO];return n==null?null:Jt.makeFromBucketSpec(n,t)}class MO{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=eE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dO,this._maxUploadRetryTime=pO,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=__(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=__(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Da(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new TO(tE());{const o=OO(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const m_="@firebase/storage",g_="0.12.5";/**
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
 */const LO="storage";function VO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new MO(n,s,i,e,Oi)}function FO(){yn(new on(LO,VO,"PUBLIC").setMultipleInstances(!0)),Ot(m_,g_,""),Ot(m_,g_,"esm2017")}FO();const lc=new WeakMap;function nE(t,e){return lc.has(e)||lc.set(e,{f:{},r:{},s:{},u:{}}),lc.get(e)}function UO(t,e,n,s){if(!t)return n;const[i,r]=sE(t);if(!i)return n;const o=nE(void 0,s)[i]||{},l=e||r;return l&&l in o?o[l]:n}function BO(t,e,n,s){if(!t)return;const[i,r]=sE(t);if(!i)return;const o=nE(void 0,s)[i],l=e||r;if(l)return n.then(c=>{o[l]=c}).catch(dn),l}function sE(t){return vP(t)||EP(t)?["f",t.path]:TP(t)?["r",t.toString()]:IP(t)?["s",t.toString()]:[]}const cc=new WeakMap;function jO(t,e,n){const s=hh();cc.has(s)||cc.set(s,new Map);const i=cc.get(s),r=BO(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):dn}const $O={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function au(t,e,n,s){if(!gP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((l,c)=>{const u=n[c];return l[u.path]=u.data(),l},{});function o(l,c,u,f){c=c||{};const[d,_]=f;Object.getOwnPropertyNames(l).forEach(g=>{const w=Object.getOwnPropertyDescriptor(l,g);w&&!w.enumerable&&Object.defineProperty(d,g,w)});for(const g in l){const w=l[g];if(w==null||w instanceof Date||w instanceof Qe||w instanceof ul)d[g]=w;else if(dh(w)){const N=u+g;d[g]=N in n?c[g]:w.path,_[N]=w.converter?w:w.withConverter(s.converter)}else if(Array.isArray(w)){d[g]=Array(w.length);for(let N=0;N<w.length;N++){const P=w[N];P&&P.path in r&&(d[g][N]=r[P.path])}o(w,c[g]||d[g],u+g+".",[d[g],_])}else $s(w)?(d[g]={},o(w,c[g],u+g+".",[d[g],_])):d[g]=w}}return o(t,e,"",i),i}const Mh={reset:!1,wait:!0,maxRefDepth:2,converter:$O,snapshotOptions:{serverTimestamps:"estimate"}};function xa(t){for(const e in t)t[e].unsub()}function lu(t,e,n,s,i,r,o,l,c){const[u,f]=au(s.data(t.snapshotOptions),fh(e,n),i,t);r.set(e,n,u),cu(t,e,n,i,f,r,o,l,c)}function qO({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},l){const c=Object.create(null);let u=dn;return l.once?wy(t).then(f=>{f.exists()?lu(l,e,n,f,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):u=ch(t,f=>{f.exists()?lu(l,e,n,f,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{u(),xa(c)}}function cu(t,e,n,s,i,r,o,l,c){const u=Object.keys(i);if(Object.keys(s).filter(N=>u.indexOf(N)<0).forEach(N=>{s[N].unsub(),delete s[N]}),!u.length||++o>t.maxRefDepth)return l(n);let d=0;const _=u.length,g=Object.create(null);function w(N){N in g&&++d>=_&&l(n)}u.forEach(N=>{const P=s[N],M=i[N],F=`${n}.${N}`;if(g[F]=!0,P)if(P.path!==M.path)P.unsub();else return;s[N]={data:()=>fh(e,F),unsub:qO({ref:M,target:e,path:F,depth:o,ops:r,resolve:w.bind(null,F),reject:c},t),path:M.path}})}function HO(t,e,n,s,i,r){const o=Object.assign({},Mh,r),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:f}=o,d="value";let _=li(u?[]:t.value);u||n.set(t,d,[]);const g=s;let w,N=dn;const P=[],M={added:({newIndex:V,doc:q})=>{P.splice(V,0,Object.create(null));const ae=P[V],[K,A]=au(q.data(c),void 0,ae,o);n.add(bn(_),V,K),cu(o,_,`${d}.${V}`,ae,A,n,0,s.bind(null,q),i)},modified:({oldIndex:V,newIndex:q,doc:ae})=>{const K=bn(_),A=P[V],v=K[V],[I,R]=au(ae.data(c),v,A,o);P.splice(q,0,A),n.remove(K,V),n.add(K,q,I),cu(o,_,`${d}.${q}`,A,R,n,0,s,i)},removed:({oldIndex:V})=>{const q=bn(_);n.remove(q,V),xa(P.splice(V,1)[0])}};function F(V){const q=V.docChanges(l);if(!w&&q.length){w=!0;let ae=0;const K=q.length,A=Object.create(null);for(let v=0;v<K;v++)A[q[v].doc.id]=!0;s=v=>{v&&v.id in A&&++ae>=K&&(u&&(n.set(t,d,bn(_)),_=t),g(bn(_)),s=dn)}}q.forEach(ae=>{M[ae.type](ae)}),q.length||(u&&(n.set(t,d,bn(_)),_=t),s(bn(_)))}return f?$b(e).then(F).catch(i):N=ch(e,F,i),V=>{if(N(),V){const q=typeof V=="function"?V():[];n.set(t,d,q)}P.forEach(xa)}}function WO(t,e,n,s,i,r){const o=Object.assign({},Mh,r),l="value",c=Object.create(null);s=wP(s,()=>fh(t,l));let u=dn;function f(d){d.exists()?lu(o,t,l,d,c,n,0,s,i):(n.set(t,l,null),s(null))}return o.once?wy(e).then(f).catch(i):u=ch(e,f,i),d=>{if(u(),d){const _=typeof d=="function"?d():null;n.set(t,l,_)}xa(c)}}const y_=Symbol();function zO(t,e){let n=dn;const s=Object.assign({},Mh,e),i=bn(t),r=s.target||li();RP()&&(s.once=!0);const o=UO(i,s.ssrKey,y_,hh()),l=o!==y_;l&&(r.value=o);let c=!l;const u=li(!1),f=li(),d=z_(),_=P_();let g=dn;function w(){let M=bn(t);const F=new Promise((V,q)=>{if(n(s.reset),!M)return n=dn,V(null);u.value=c,c=!0,M.converter||(M=M.withConverter(s.converter)),n=(dh(M)?WO:HO)(r,M,KO,V,q,s)}).catch(V=>(d.value===F&&(f.value=V),Promise.reject(V))).finally(()=>{d.value===F&&(u.value=!1)});d.value=F}let N=dn;(ut(t)||typeof t=="function")&&(N=vr(t,w)),w(),i&&(g=jO(d.value,i,s.ssrKey)),Am()&&sm(()=>d.value),_&&jE(P);function P(M=s.reset){N(),g(),n(M)}return Object.defineProperties(r,{error:{get:()=>f},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>P}})}const KO={set:(t,e,n)=>_P(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},ar=new WeakMap;function GO(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const QO={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},YO=function(e,n,s){const i=Object.assign({},QO,n),{bindName:r,unbindName:o}=i,l=e.config.globalProperties;l[o]=function(u,f){GO(u,ar.get(this),f),delete this.$firestoreRefs[u]},l[r]=function(u,f,d){const _=Object.assign({},i,d),g=pT(this.$data,u);ar.has(this)||ar.set(this,{});const w=ar.get(this);w[u]&&w[u](_.reset);const N=CP(s||hh(),e).run(()=>S_()),{promise:P,stop:M}=e.runWithContext(()=>N.run(()=>zO(f,{target:g,..._}))),F=V=>{M(V),N.stop()};return w[u]=F,this.$firestoreRefs[u]=f,P.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,u=typeof c=="function"?c.call(this):c;if(u)for(const f in u)this[r](f,u[f],i)},beforeUnmount(){const c=ar.get(this);if(c)for(const u in c)c[u]();this.$firestoreRefs=null}})};function XO(t){return(e,n)=>YO(n,t,e)}function JO(t,{firebaseApp:e,modules:n=[]}){t.provide($y,e);for(const s of n)s(e,t)}const Lh=YI(nw);Lh.use(cS);Lh.use(JO,{firebaseApp:Ry,modules:[XO()]});Lh.mount("#app");
