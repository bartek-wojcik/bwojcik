(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yc(n,e){const t=new Set(n.split(","));return s=>t.has(s)}const Ue={},ti=[],Ut=()=>{},Gv=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xc=n=>n.startsWith("onUpdate:"),nt=Object.assign,Jc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Qv=Object.prototype.hasOwnProperty,Te=(n,e)=>Qv.call(n,e),le=Array.isArray,ni=n=>Ia(n)==="[object Map]",rg=n=>Ia(n)==="[object Set]",ue=n=>typeof n=="function",Ye=n=>typeof n=="string",Vs=n=>typeof n=="symbol",Ve=n=>n!==null&&typeof n=="object",og=n=>(Ve(n)||ue(n))&&ue(n.then)&&ue(n.catch),ag=Object.prototype.toString,Ia=n=>ag.call(n),Yv=n=>Ia(n).slice(8,-1),lg=n=>Ia(n)==="[object Object]",Zc=n=>Ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cr=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Xv=/-(\w)/g,dn=Aa(n=>n.replace(Xv,(e,t)=>t?t.toUpperCase():"")),Jv=/\B([A-Z])/g,Ai=Aa(n=>n.replace(Jv,"-$1").toLowerCase()),Ca=Aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),gl=Aa(n=>n?`on${Ca(n)}`:""),ss=(n,e)=>!Object.is(n,e),ml=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cg=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Zv=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let pf;const ug=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ra(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=Ye(s)?sE(s):Ra(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ye(n)||Ve(n))return n}const eE=/;(?![^(]*\))/g,tE=/:([^]+)/,nE=/\/\*[^]*?\*\//g;function sE(n){const e={};return n.replace(nE,"").split(eE).forEach(t=>{if(t){const s=t.split(tE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function eu(n){let e="";if(Ye(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const s=eu(n[t]);s&&(e+=s+" ")}else if(Ve(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const iE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rE=Yc(iE);function hg(n){return!!n||n===""}const oE=n=>Ye(n)?n:n==null?"":le(n)||Ve(n)&&(n.toString===ag||!ue(n.toString))?JSON.stringify(n,fg,2):String(n),fg=(n,e)=>e&&e.__v_isRef?fg(n,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],r)=>(t[_l(s,r)+" =>"]=i,t),{})}:rg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_l(t))}:Vs(e)?_l(e):Ve(e)&&!le(e)&&!lg(e)?String(e):e,_l=(n,e="")=>{var t;return Vs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function pg(n){return new dg(n)}function aE(n,e=kt){e&&e.active&&e.effects.push(n)}function gg(){return kt}function lE(n){kt&&kt.cleanups.push(n)}let As;class tu{constructor(e,t,s,i){this.fn=e,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,aE(this,i)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,ls();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed){if(t.computed.effect._dirtyLevel===2)return!0;if(cE(t.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),cs()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Qn,t=As;try{return Qn=!0,As=this,this._runnings++,gf(this),this.fn()}finally{mf(this),this._runnings--,As=t,Qn=e}}stop(){this.active&&(gf(this),mf(this),this.onStop&&this.onStop(),this.active=!1)}}function cE(n){return n.value}function gf(n){n._trackId++,n._depsLength=0}function mf(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)mg(n.deps[e],n);n.deps.length=n._depsLength}}function mg(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Qn=!0,Ql=0;const _g=[];function ls(){_g.push(Qn),Qn=!1}function cs(){const n=_g.pop();Qn=n===void 0?!0:n}function nu(){Ql++}function su(){for(Ql--;!Ql&&Yl.length;)Yl.shift()()}function yg(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const s=n.deps[n._depsLength];s!==e?(s&&mg(s,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Yl=[];function vg(n,e,t){nu();for(const s of n.keys()){if(!n.computed&&s.computed&&n.get(s)===s._trackId&&s._runnings>0){s._dirtyLevel=2;continue}let i;s._dirtyLevel<e&&(i??(i=n.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=n.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&Yl.push(s.scheduler)))}su()}const Eg=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Wo=new WeakMap,Cs=Symbol(""),Xl=Symbol("");function St(n,e,t){if(Qn&&As){let s=Wo.get(n);s||Wo.set(n,s=new Map);let i=s.get(t);i||s.set(t,i=Eg(()=>s.delete(t))),yg(As,i)}}function Sn(n,e,t,s,i,r){const o=Wo.get(n);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(t==="length"&&le(n)){const c=Number(s);o.forEach((u,f)=>{(f==="length"||!Vs(f)&&f>=c)&&l.push(u)})}else switch(t!==void 0&&l.push(o.get(t)),e){case"add":le(n)?Zc(t)&&l.push(o.get("length")):(l.push(o.get(Cs)),ni(n)&&l.push(o.get(Xl)));break;case"delete":le(n)||(l.push(o.get(Cs)),ni(n)&&l.push(o.get(Xl)));break;case"set":ni(n)&&l.push(o.get(Cs));break}nu();for(const c of l)c&&vg(c,5);su()}function uE(n,e){const t=Wo.get(n);return t&&t.get(e)}const hE=Yc("__proto__,__v_isRef,__isVue"),Tg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vs)),_f=fE();function fE(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const s=Re(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...t);return i===-1||i===!1?s[e](...t.map(Re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ls(),nu();const s=Re(this)[e].apply(this,t);return su(),cs(),s}}),n}function dE(n){Vs(n)||(n=String(n));const e=Re(this);return St(e,"has",n),e.hasOwnProperty(n)}class wg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?RE:Rg:r?Cg:Ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=le(e);if(!i){if(o&&Te(_f,t))return Reflect.get(_f,t,s);if(t==="hasOwnProperty")return dE}const l=Reflect.get(e,t,s);return(Vs(t)?Tg.has(t):hE(t))||(i||St(e,"get",t),r)?l:lt(l)?o&&Zc(t)?l:l.value:Ve(l)?i?bg(l):ba(l):l}}class Ig extends wg{constructor(e=!1){super(!1,e)}set(e,t,s,i){let r=e[t];if(!this._isShallow){const c=Sr(r);if(!Ko(s)&&!Sr(s)&&(r=Re(r),s=Re(s)),!le(e)&&lt(r)&&!lt(s))return c?!1:(r.value=s,!0)}const o=le(e)&&Zc(t)?Number(t)<e.length:Te(e,t),l=Reflect.set(e,t,s,i);return e===Re(i)&&(o?ss(s,r)&&Sn(e,"set",t,s):Sn(e,"add",t,s)),l}deleteProperty(e,t){const s=Te(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Sn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!Vs(t)||!Tg.has(t))&&St(e,"has",t),s}ownKeys(e){return St(e,"iterate",le(e)?"length":Cs),Reflect.ownKeys(e)}}class pE extends wg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gE=new Ig,mE=new pE,_E=new Ig(!0);const iu=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function vo(n,e,t=!1,s=!1){n=n.__v_raw;const i=Re(n),r=Re(e);t||(ss(e,r)&&St(i,"get",e),St(i,"get",r));const{has:o}=Sa(i),l=s?iu:t?au:br;if(o.call(i,e))return l(n.get(e));if(o.call(i,r))return l(n.get(r));n!==i&&n.get(e)}function Eo(n,e=!1){const t=this.__v_raw,s=Re(t),i=Re(n);return e||(ss(n,i)&&St(s,"has",n),St(s,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function To(n,e=!1){return n=n.__v_raw,!e&&St(Re(n),"iterate",Cs),Reflect.get(n,"size",n)}function yf(n){n=Re(n);const e=Re(this);return Sa(e).has.call(e,n)||(e.add(n),Sn(e,"add",n,n)),this}function vf(n,e){e=Re(e);const t=Re(this),{has:s,get:i}=Sa(t);let r=s.call(t,n);r||(n=Re(n),r=s.call(t,n));const o=i.call(t,n);return t.set(n,e),r?ss(e,o)&&Sn(t,"set",n,e):Sn(t,"add",n,e),this}function Ef(n){const e=Re(this),{has:t,get:s}=Sa(e);let i=t.call(e,n);i||(n=Re(n),i=t.call(e,n)),s&&s.call(e,n);const r=e.delete(n);return i&&Sn(e,"delete",n,void 0),r}function Tf(){const n=Re(this),e=n.size!==0,t=n.clear();return e&&Sn(n,"clear",void 0,void 0),t}function wo(n,e){return function(s,i){const r=this,o=r.__v_raw,l=Re(o),c=e?iu:n?au:br;return!n&&St(l,"iterate",Cs),o.forEach((u,f)=>s.call(i,c(u),c(f),r))}}function Io(n,e,t){return function(...s){const i=this.__v_raw,r=Re(i),o=ni(r),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...s),f=t?iu:e?au:br;return!e&&St(r,"iterate",c?Xl:Cs),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function yE(){const n={get(r){return vo(this,r)},get size(){return To(this)},has:Eo,add:yf,set:vf,delete:Ef,clear:Tf,forEach:wo(!1,!1)},e={get(r){return vo(this,r,!1,!0)},get size(){return To(this)},has:Eo,add:yf,set:vf,delete:Ef,clear:Tf,forEach:wo(!1,!0)},t={get(r){return vo(this,r,!0)},get size(){return To(this,!0)},has(r){return Eo.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:wo(!0,!1)},s={get(r){return vo(this,r,!0,!0)},get size(){return To(this,!0)},has(r){return Eo.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Io(r,!1,!1),t[r]=Io(r,!0,!1),e[r]=Io(r,!1,!0),s[r]=Io(r,!0,!0)}),[n,t,e,s]}const[vE,EE,TE,wE]=yE();function ru(n,e){const t=e?n?wE:TE:n?EE:vE;return(s,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(Te(t,i)&&i in s?t:s,i,r)}const IE={get:ru(!1,!1)},AE={get:ru(!1,!0)},CE={get:ru(!0,!1)};const Ag=new WeakMap,Cg=new WeakMap,Rg=new WeakMap,RE=new WeakMap;function SE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bE(n){return n.__v_skip||!Object.isExtensible(n)?0:SE(Yv(n))}function ba(n){return Sr(n)?n:ou(n,!1,gE,IE,Ag)}function Sg(n){return ou(n,!1,_E,AE,Cg)}function bg(n){return ou(n,!0,mE,CE,Rg)}function ou(n,e,t,s,i){if(!Ve(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=i.get(n);if(r)return r;const o=bE(n);if(o===0)return n;const l=new Proxy(n,o===2?s:t);return i.set(n,l),l}function ur(n){return Sr(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function Sr(n){return!!(n&&n.__v_isReadonly)}function Ko(n){return!!(n&&n.__v_isShallow)}function Pg(n){return n?!!n.__v_raw:!1}function Re(n){const e=n&&n.__v_raw;return e?Re(e):n}function PE(n){return Object.isExtensible(n)&&cg(n,"__v_skip",!0),n}const br=n=>Ve(n)?ba(n):n,au=n=>Ve(n)?bg(n):n;class Ng{constructor(e,t,s,i){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new tu(()=>e(this._value),()=>Mo(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Re(this);return(!e._cacheable||e.effect.dirty)&&ss(e._value,e._value=e.effect.run())&&Mo(e,5),kg(e),e.effect._dirtyLevel>=2&&Mo(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function NE(n,e,t=!1){let s,i;const r=ue(n);return r?(s=n,i=Ut):(s=n.get,i=n.set),new Ng(s,i,r||!i,t)}function kg(n){var e;Qn&&As&&(n=Re(n),yg(As,(e=n.dep)!=null?e:n.dep=Eg(()=>n.dep=void 0,n instanceof Ng?n:void 0)))}function Mo(n,e=5,t,s){n=Re(n);const i=n.dep;i&&vg(i,e)}function lt(n){return!!(n&&n.__v_isRef===!0)}function si(n){return Dg(n,!1)}function Og(n){return Dg(n,!0)}function Dg(n,e){return lt(n)?n:new kE(n,e)}class kE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:br(e)}get value(){return kg(this),this._value}set value(e){const t=this.__v_isShallow||Ko(e)||Sr(e);e=t?e:Re(e),ss(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:br(e),Mo(this,5))}}function Rs(n){return lt(n)?n.value:n}function In(n){return ue(n)?n():Rs(n)}const OE={get:(n,e,t)=>Rs(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return lt(i)&&!lt(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function xg(n){return ur(n)?n:new Proxy(n,OE)}class DE{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uE(Re(this._object),this._key)}}class xE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ME(n,e,t){return lt(n)?n:ue(n)?new xE(n):Ve(n)&&arguments.length>1?LE(n,e,t):si(n)}function LE(n,e,t){const s=n[e];return lt(s)?s:new DE(n,e,t)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yn(n,e,t,s){try{return s?n(...s):n()}catch(i){Pa(i,e,t)}}function Xt(n,e,t,s){if(ue(n)){const i=Yn(n,e,t,s);return i&&og(i)&&i.catch(r=>{Pa(r,e,t)}),i}if(le(n)){const i=[];for(let r=0;r<n.length;r++)i.push(Xt(n[r],e,t,s));return i}}function Pa(n,e,t,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){ls(),Yn(c,null,10,[n,o,l]),cs();return}}VE(n,t,i,s)}function VE(n,e,t,s=!0){console.error(n)}let Pr=!1,Jl=!1;const mt=[];let ln=0;const ii=[];let $n=null,vs=0;const Mg=Promise.resolve();let lu=null;function Lg(n){const e=lu||Mg;return n?e.then(this?n.bind(this):n):e}function FE(n){let e=ln+1,t=mt.length;for(;e<t;){const s=e+t>>>1,i=mt[s],r=Nr(i);r<n||r===n&&i.pre?e=s+1:t=s}return e}function cu(n){(!mt.length||!mt.includes(n,Pr&&n.allowRecurse?ln+1:ln))&&(n.id==null?mt.push(n):mt.splice(FE(n.id),0,n),Vg())}function Vg(){!Pr&&!Jl&&(Jl=!0,lu=Mg.then(Ug))}function UE(n){const e=mt.indexOf(n);e>ln&&mt.splice(e,1)}function BE(n){le(n)?ii.push(...n):(!$n||!$n.includes(n,n.allowRecurse?vs+1:vs))&&ii.push(n),Vg()}function wf(n,e,t=Pr?ln+1:0){for(;t<mt.length;t++){const s=mt[t];if(s&&s.pre){if(n&&s.id!==n.uid)continue;mt.splice(t,1),t--,s()}}}function Fg(n){if(ii.length){const e=[...new Set(ii)].sort((t,s)=>Nr(t)-Nr(s));if(ii.length=0,$n){$n.push(...e);return}for($n=e,vs=0;vs<$n.length;vs++){const t=$n[vs];t.active!==!1&&t()}$n=null,vs=0}}const Nr=n=>n.id==null?1/0:n.id,$E=(n,e)=>{const t=Nr(n)-Nr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ug(n){Jl=!1,Pr=!0,mt.sort($E);try{for(ln=0;ln<mt.length;ln++){const e=mt[ln];e&&e.active!==!1&&Yn(e,null,14)}}finally{ln=0,mt.length=0,Fg(),Pr=!1,lu=null,(mt.length||ii.length)&&Ug()}}function jE(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Ue;let i=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=s[f]||Ue;g&&(i=t.map(v=>Ye(v)?v.trim():v)),p&&(i=t.map(Zv))}let l,c=s[l=gl(e)]||s[l=gl(dn(e))];!c&&r&&(c=s[l=gl(Ai(e))]),c&&Xt(c,n,6,i);const u=s[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Xt(u,n,6,i)}}function Bg(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const r=n.emits;let o={},l=!1;if(!ue(n)){const c=u=>{const f=Bg(u,e,!0);f&&(l=!0,nt(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!l?(Ve(n)&&s.set(n,null),null):(le(r)?r.forEach(c=>o[c]=null):nt(o,r),Ve(n)&&s.set(n,o),o)}function Na(n,e){return!n||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,Ai(e))||Te(n,e))}let Bt=null,$g=null;function Go(n){const e=Bt;return Bt=n,$g=n&&n.type.__scopeId||null,e}function qE(n,e=Bt,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&xf(-1);const r=Go(e);let o;try{o=n(...i)}finally{Go(r),s._d&&xf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function yl(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:v,ctx:C,inheritAttrs:P}=n,N=Go(n);let V,F;try{if(t.shapeFlag&4){const j=i||s,oe=j;V=an(u.call(oe,j,f,p,v,g,C)),F=l}else{const j=e;V=an(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),F=e.props?l:HE(l)}}catch(j){pr.length=0,Pa(j,n,1),V=$t(kr)}let L=V;if(F&&P!==!1){const j=Object.keys(F),{shapeFlag:oe}=L;j.length&&oe&7&&(r&&j.some(Xc)&&(F=zE(F,r)),L=fi(L,F,!1,!0))}return t.dirs&&(L=fi(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),V=L,Go(N),V}const HE=n=>{let e;for(const t in n)(t==="class"||t==="style"||wa(t))&&((e||(e={}))[t]=n[t]);return e},zE=(n,e)=>{const t={};for(const s in n)(!Xc(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function WE(n,e,t){const{props:s,children:i,component:r}=n,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?If(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==s[g]&&!Na(u,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?If(s,o,u):!0:!!o;return!1}function If(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==n[r]&&!Na(t,r))return!0}return!1}function KE({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const GE="components";function QE(n,e){return XE(GE,n,!0,e)||n}const YE=Symbol.for("v-ndc");function XE(n,e,t=!0,s=!1){const i=Bt||rt;if(i){const r=i.type;{const l=zT(r,!1);if(l&&(l===e||l===dn(e)||l===Ca(dn(e))))return r}const o=Af(i[n]||r[n],e)||Af(i.appContext[n],e);return!o&&s?r:o}}function Af(n,e){return n&&(n[e]||n[dn(e)]||n[Ca(dn(e))])}const JE=n=>n.__isSuspense;function ZE(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):BE(n)}function ka(n,e,t=rt,s=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ls();const l=zr(t),c=Xt(e,t,n,o);return l(),cs(),c});return s?i.unshift(r):i.push(r),r}}const Nn=n=>(e,t=rt)=>{(!Da||n==="sp")&&ka(n,(...s)=>e(...s),t)},eT=Nn("bm"),tT=Nn("m"),nT=Nn("bu"),sT=Nn("u"),iT=Nn("bum"),jg=Nn("um"),qg=Nn("sp"),rT=Nn("rtg"),oT=Nn("rtc");function aT(n,e=rt){ka("ec",n,e)}function gs(n,e,t,s){const i=n.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(ls(),Xt(c,t,8,[n.el,l,n,e]),cs())}}function lT(n,e,t,s){let i;const r=t;if(le(n)||Ye(n)){i=new Array(n.length);for(let o=0,l=n.length;o<l;o++)i[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,r)}else if(Ve(n))if(n[Symbol.iterator])i=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];i[l]=e(n[u],u,l,r)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function Hg(n,e){return ue(n)?nt({name:n.name},e,{setup:n}):n}const Lo=n=>!!n.type.__asyncLoader,Zl=n=>n?hm(n)?du(n):Zl(n.parent):null,hr=nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zl(n.parent),$root:n=>Zl(n.root),$emit:n=>n.emit,$options:n=>uu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,cu(n.update)}),$nextTick:n=>n.n||(n.n=Lg.bind(n.proxy)),$watch:n=>bT.bind(n)}),vl=(n,e)=>n!==Ue&&!n.__isScriptSetup&&Te(n,e),cT={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(vl(s,e))return o[e]=1,s[e];if(i!==Ue&&Te(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Te(u,e))return o[e]=3,r[e];if(t!==Ue&&Te(t,e))return o[e]=4,t[e];ec&&(o[e]=0)}}const f=hr[e];let p,g;if(f)return e==="$attrs"&&St(n.attrs,"get",""),f(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ue&&Te(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Te(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:r}=n;return vl(i,e)?(i[e]=t,!0):s!==Ue&&Te(s,e)?(s[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!t[o]||n!==Ue&&Te(n,o)||vl(e,o)||(l=r[0])&&Te(l,o)||Te(s,o)||Te(hr,o)||Te(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cf(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ec=!0;function uT(n){const e=uu(n),t=n.proxy,s=n.ctx;ec=!1,e.beforeCreate&&Rf(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:C,activated:P,deactivated:N,beforeDestroy:V,beforeUnmount:F,destroyed:L,unmounted:j,render:oe,renderTracked:K,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:R,components:S,directives:E,filters:vt}=e;if(u&&hT(u,s,null),o)for(const ge in o){const fe=o[ge];ue(fe)&&(s[ge]=fe.bind(t))}if(i){const ge=i.call(t,t);Ve(ge)&&(n.data=ba(ge))}if(ec=!0,r)for(const ge in r){const fe=r[ge],bt=ue(fe)?fe.bind(t,t):ue(fe.get)?fe.get.bind(t,t):Ut,zt=!ue(fe)&&ue(fe.set)?fe.set.bind(t):Ut,Mt=Ft({get:bt,set:zt});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Be=>Mt.value=Be})}if(l)for(const ge in l)zg(l[ge],s,t,ge);if(c){const ge=ue(c)?c.call(t):c;Reflect.ownKeys(ge).forEach(fe=>{Vo(fe,ge[fe])})}f&&Rf(f,n,"c");function ze(ge,fe){le(fe)?fe.forEach(bt=>ge(bt.bind(t))):fe&&ge(fe.bind(t))}if(ze(eT,p),ze(tT,g),ze(nT,v),ze(sT,C),ze(PT,P),ze(NT,N),ze(aT,y),ze(oT,K),ze(rT,I),ze(iT,F),ze(jg,j),ze(qg,w),le(A))if(A.length){const ge=n.exposed||(n.exposed={});A.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>t[fe],set:bt=>t[fe]=bt})})}else n.exposed||(n.exposed={});oe&&n.render===Ut&&(n.render=oe),R!=null&&(n.inheritAttrs=R),S&&(n.components=S),E&&(n.directives=E)}function hT(n,e,t=Ut){le(n)&&(n=tc(n));for(const s in n){const i=n[s];let r;Ve(i)?"default"in i?r=qt(i.from||s,i.default,!0):r=qt(i.from||s):r=qt(i),lt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Rf(n,e,t){Xt(le(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function zg(n,e,t,s){const i=s.includes(".")?im(t,s):()=>t[s];if(Ye(n)){const r=e[n];ue(r)&&dr(i,r)}else if(ue(n))dr(i,n.bind(t));else if(Ve(n))if(le(n))n.forEach(r=>zg(r,e,t,s));else{const r=ue(n.handler)?n.handler.bind(t):e[n.handler];ue(r)&&dr(i,r,n)}}function uu(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(u=>Qo(c,u,o,!0)),Qo(c,e,o)),Ve(e)&&r.set(e,c),c}function Qo(n,e,t,s=!1){const{mixins:i,extends:r}=e;r&&Qo(n,r,t,!0),i&&i.forEach(o=>Qo(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const l=fT[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const fT={data:Sf,props:bf,emits:bf,methods:nr,computed:nr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:nr,directives:nr,watch:pT,provide:Sf,inject:dT};function Sf(n,e){return e?n?function(){return nt(ue(n)?n.call(this,this):n,ue(e)?e.call(this,this):e)}:e:n}function dT(n,e){return nr(tc(n),tc(e))}function tc(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?nt(Object.create(null),n,e):e}function bf(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:nt(Object.create(null),Cf(n),Cf(e??{})):e}function pT(n,e){if(!n)return e;if(!e)return n;const t=nt(Object.create(null),n);for(const s in e)t[s]=wt(n[s],e[s]);return t}function Wg(){return{app:null,config:{isNativeTag:Gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gT=0;function mT(n,e){return function(s,i=null){ue(s)||(s=nt({},s)),i!=null&&!Ve(i)&&(i=null);const r=Wg(),o=new WeakSet;let l=!1;const c=r.app={_uid:gT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:KT,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...f)):ue(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,p){if(!l){const g=$t(s,i);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,u):n(g,u,p),l=!0,c._container=u,u.__vue_app__=c,du(g.component)}},unmount(){l&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=fr;fr=c;try{return u()}finally{fr=f}}};return c}}let fr=null;function Vo(n,e){if(rt){let t=rt.provides;const s=rt.parent&&rt.parent.provides;s===t&&(t=rt.provides=Object.create(s)),t[n]=e}}function qt(n,e,t=!1){const s=rt||Bt;if(s||fr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:fr._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&ue(e)?e.call(s&&s.proxy):e}}const Kg={},Gg=()=>Object.create(Kg),Qg=n=>Object.getPrototypeOf(n)===Kg;function _T(n,e,t,s=!1){const i={},r=Gg();n.propsDefaults=Object.create(null),Yg(n,e,i,r);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=s?i:Sg(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function yT(n,e,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=n,l=Re(i),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Na(n.emitsOptions,g))continue;const v=e[g];if(c)if(Te(r,g))v!==r[g]&&(r[g]=v,u=!0);else{const C=dn(g);i[C]=nc(c,l,C,v,n,!1)}else v!==r[g]&&(r[g]=v,u=!0)}}}else{Yg(n,e,i,r)&&(u=!0);let f;for(const p in l)(!e||!Te(e,p)&&((f=Ai(p))===p||!Te(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(i[p]=nc(c,l,p,void 0,n,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!Te(e,p))&&(delete r[p],u=!0)}u&&Sn(n.attrs,"set","")}function Yg(n,e,t,s){const[i,r]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(cr(c))continue;const u=e[c];let f;i&&Te(i,f=dn(c))?!r||!r.includes(f)?t[f]=u:(l||(l={}))[f]=u:Na(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Re(t),u=l||Ue;for(let f=0;f<r.length;f++){const p=r[f];t[p]=nc(i,c,p,u[p],n,!Te(u,p))}}return o}function nc(n,e,t,s,i,r){const o=n[t];if(o!=null){const l=Te(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ue(c)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const f=zr(i);s=u[t]=c.call(null,e),f()}}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Ai(t))&&(s=!0))}return s}function Xg(n,e,t=!1){const s=e.propsCache,i=s.get(n);if(i)return i;const r=n.props,o={},l=[];let c=!1;if(!ue(n)){const f=p=>{c=!0;const[g,v]=Xg(p,e,!0);nt(o,g),v&&l.push(...v)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!r&&!c)return Ve(n)&&s.set(n,ti),ti;if(le(r))for(let f=0;f<r.length;f++){const p=dn(r[f]);Pf(p)&&(o[p]=Ue)}else if(r)for(const f in r){const p=dn(f);if(Pf(p)){const g=r[f],v=o[p]=le(g)||ue(g)?{type:g}:nt({},g);if(v){const C=Of(Boolean,v.type),P=Of(String,v.type);v[0]=C>-1,v[1]=P<0||C<P,(C>-1||Te(v,"default"))&&l.push(p)}}}const u=[o,l];return Ve(n)&&s.set(n,u),u}function Pf(n){return n[0]!=="$"&&!cr(n)}function Nf(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function kf(n,e){return Nf(n)===Nf(e)}function Of(n,e){return le(e)?e.findIndex(t=>kf(t,n)):ue(e)&&kf(e,n)?0:-1}const Jg=n=>n[0]==="_"||n==="$stable",hu=n=>le(n)?n.map(an):[an(n)],vT=(n,e,t)=>{if(e._n)return e;const s=qE((...i)=>hu(e(...i)),t);return s._c=!1,s},Zg=(n,e,t)=>{const s=n._ctx;for(const i in n){if(Jg(i))continue;const r=n[i];if(ue(r))e[i]=vT(i,r,s);else if(r!=null){const o=hu(r);e[i]=()=>o}}},em=(n,e)=>{const t=hu(e);n.slots.default=()=>t},ET=(n,e)=>{const t=n.slots=Gg();if(n.vnode.shapeFlag&32){const s=e._;s?(nt(t,e),cg(t,"_",s,!0)):Zg(e,t)}else e&&em(n,e)},TT=(n,e,t)=>{const{vnode:s,slots:i}=n;let r=!0,o=Ue;if(s.shapeFlag&32){const l=e._;l?t&&l===1?r=!1:(nt(i,e),!t&&l===1&&delete i._):(r=!e.$stable,Zg(e,i)),o=e}else e&&(em(n,e),o={default:1});if(r)for(const l in i)!Jg(l)&&o[l]==null&&delete i[l]};function sc(n,e,t,s,i=!1){if(le(n)){n.forEach((g,v)=>sc(g,e&&(le(e)?e[v]:e),t,s,i));return}if(Lo(s)&&!i)return;const r=s.shapeFlag&4?du(s.component):s.el,o=i?null:r,{i:l,r:c}=n,u=e&&e.r,f=l.refs===Ue?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(Ye(u)?(f[u]=null,Te(p,u)&&(p[u]=null)):lt(u)&&(u.value=null)),ue(c))Yn(c,l,12,[o,f]);else{const g=Ye(c),v=lt(c);if(g||v){const C=()=>{if(n.f){const P=g?Te(p,c)?p[c]:f[c]:c.value;i?le(P)&&Jc(P,r):le(P)?P.includes(r)||P.push(r):g?(f[c]=[r],Te(p,c)&&(p[c]=f[c])):(c.value=[r],n.k&&(f[n.k]=c.value))}else g?(f[c]=o,Te(p,c)&&(p[c]=o)):v&&(c.value=o,n.k&&(f[n.k]=o))};o?(C.id=-1,Ct(C,t)):C()}}}const Ct=ZE;function wT(n){return IT(n)}function IT(n,e){const t=ug();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=Ut,insertStaticContent:C}=n,P=(_,T,k,M=null,D=null,q=null,G=void 0,$=null,H=!!T.dynamicChildren)=>{if(_===T)return;_&&!Gi(_,T)&&(M=x(_),Be(_,D,q,!0),_=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:U,ref:X,shapeFlag:se}=T;switch(U){case Oa:N(_,T,k,M);break;case kr:V(_,T,k,M);break;case Tl:_==null&&F(T,k,M,G);break;case on:S(_,T,k,M,D,q,G,$,H);break;default:se&1?oe(_,T,k,M,D,q,G,$,H):se&6?E(_,T,k,M,D,q,G,$,H):(se&64||se&128)&&U.process(_,T,k,M,D,q,G,$,H,Z)}X!=null&&D&&sc(X,_&&_.ref,q,T||_,!T)},N=(_,T,k,M)=>{if(_==null)s(T.el=l(T.children),k,M);else{const D=T.el=_.el;T.children!==_.children&&u(D,T.children)}},V=(_,T,k,M)=>{_==null?s(T.el=c(T.children||""),k,M):T.el=_.el},F=(_,T,k,M)=>{[_.el,_.anchor]=C(_.children,T,k,M,_.el,_.anchor)},L=({el:_,anchor:T},k,M)=>{let D;for(;_&&_!==T;)D=g(_),s(_,k,M),_=D;s(T,k,M)},j=({el:_,anchor:T})=>{let k;for(;_&&_!==T;)k=g(_),i(_),_=k;i(T)},oe=(_,T,k,M,D,q,G,$,H)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),_==null?K(T,k,M,D,q,G,$,H):w(_,T,D,q,G,$,H)},K=(_,T,k,M,D,q,G,$)=>{let H,U;const{props:X,shapeFlag:se,transition:ne,dirs:te}=_;if(H=_.el=o(_.type,q,X&&X.is,X),se&8?f(H,_.children):se&16&&y(_.children,H,null,M,D,El(_,q),G,$),te&&gs(_,null,M,"created"),I(H,_,_.scopeId,G,M),X){for(const Se in X)Se!=="value"&&!cr(Se)&&r(H,Se,null,X[Se],q,_.children,M,D,Xe);"value"in X&&r(H,"value",null,X.value,q),(U=X.onVnodeBeforeMount)&&rn(U,M,_)}te&&gs(_,null,M,"beforeMount");const ie=AT(D,ne);ie&&ne.beforeEnter(H),s(H,T,k),((U=X&&X.onVnodeMounted)||ie||te)&&Ct(()=>{U&&rn(U,M,_),ie&&ne.enter(H),te&&gs(_,null,M,"mounted")},D)},I=(_,T,k,M,D)=>{if(k&&v(_,k),M)for(let q=0;q<M.length;q++)v(_,M[q]);if(D){let q=D.subTree;if(T===q){const G=D.vnode;I(_,G,G.scopeId,G.slotScopeIds,D.parent)}}},y=(_,T,k,M,D,q,G,$,H=0)=>{for(let U=H;U<_.length;U++){const X=_[U]=$?jn(_[U]):an(_[U]);P(null,X,T,k,M,D,q,G,$)}},w=(_,T,k,M,D,q,G)=>{const $=T.el=_.el;let{patchFlag:H,dynamicChildren:U,dirs:X}=T;H|=_.patchFlag&16;const se=_.props||Ue,ne=T.props||Ue;let te;if(k&&ms(k,!1),(te=ne.onVnodeBeforeUpdate)&&rn(te,k,T,_),X&&gs(T,_,k,"beforeUpdate"),k&&ms(k,!0),U?A(_.dynamicChildren,U,$,k,M,El(T,D),q):G||fe(_,T,$,null,k,M,El(T,D),q,!1),H>0){if(H&16)R($,T,se,ne,k,M,D);else if(H&2&&se.class!==ne.class&&r($,"class",null,ne.class,D),H&4&&r($,"style",se.style,ne.style,D),H&8){const ie=T.dynamicProps;for(let Se=0;Se<ie.length;Se++){const Ee=ie[Se],He=se[Ee],Pt=ne[Ee];(Pt!==He||Ee==="value")&&r($,Ee,He,Pt,D,_.children,k,M,Xe)}}H&1&&_.children!==T.children&&f($,T.children)}else!G&&U==null&&R($,T,se,ne,k,M,D);((te=ne.onVnodeUpdated)||X)&&Ct(()=>{te&&rn(te,k,T,_),X&&gs(T,_,k,"updated")},M)},A=(_,T,k,M,D,q,G)=>{for(let $=0;$<T.length;$++){const H=_[$],U=T[$],X=H.el&&(H.type===on||!Gi(H,U)||H.shapeFlag&70)?p(H.el):k;P(H,U,X,null,M,D,q,G,!0)}},R=(_,T,k,M,D,q,G)=>{if(k!==M){if(k!==Ue)for(const $ in k)!cr($)&&!($ in M)&&r(_,$,k[$],null,G,T.children,D,q,Xe);for(const $ in M){if(cr($))continue;const H=M[$],U=k[$];H!==U&&$!=="value"&&r(_,$,U,H,G,T.children,D,q,Xe)}"value"in M&&r(_,"value",k.value,M.value,G)}},S=(_,T,k,M,D,q,G,$,H)=>{const U=T.el=_?_.el:l(""),X=T.anchor=_?_.anchor:l("");let{patchFlag:se,dynamicChildren:ne,slotScopeIds:te}=T;te&&($=$?$.concat(te):te),_==null?(s(U,k,M),s(X,k,M),y(T.children||[],k,X,D,q,G,$,H)):se>0&&se&64&&ne&&_.dynamicChildren?(A(_.dynamicChildren,ne,k,D,q,G,$),(T.key!=null||D&&T===D.subTree)&&tm(_,T,!0)):fe(_,T,k,X,D,q,G,$,H)},E=(_,T,k,M,D,q,G,$,H)=>{T.slotScopeIds=$,_==null?T.shapeFlag&512?D.ctx.activate(T,k,M,G,H):vt(T,k,M,D,q,G,H):xt(_,T,H)},vt=(_,T,k,M,D,q,G)=>{const $=_.component=BT(_,M,D);if(rm(_)&&($.ctx.renderer=Z),$T($),$.asyncDep){if(D&&D.registerDep($,ze,G),!_.el){const H=$.subTree=$t(kr);V(null,H,T,k)}}else ze($,_,T,k,D,q,G)},xt=(_,T,k)=>{const M=T.component=_.component;if(WE(_,T,k))if(M.asyncDep&&!M.asyncResolved){ge(M,T,k);return}else M.next=T,UE(M.update),M.effect.dirty=!0,M.update();else T.el=_.el,M.vnode=T},ze=(_,T,k,M,D,q,G)=>{const $=()=>{if(_.isMounted){let{next:X,bu:se,u:ne,parent:te,vnode:ie}=_;{const Lt=nm(_);if(Lt){X&&(X.el=ie.el,ge(_,X,G)),Lt.asyncDep.then(()=>{_.isUnmounted||$()});return}}let Se=X,Ee;ms(_,!1),X?(X.el=ie.el,ge(_,X,G)):X=ie,se&&ml(se),(Ee=X.props&&X.props.onVnodeBeforeUpdate)&&rn(Ee,te,X,ie),ms(_,!0);const He=yl(_),Pt=_.subTree;_.subTree=He,P(Pt,He,p(Pt.el),x(Pt),_,D,q),X.el=He.el,Se===null&&KE(_,He.el),ne&&Ct(ne,D),(Ee=X.props&&X.props.onVnodeUpdated)&&Ct(()=>rn(Ee,te,X,ie),D)}else{let X;const{el:se,props:ne}=T,{bm:te,m:ie,parent:Se}=_,Ee=Lo(T);if(ms(_,!1),te&&ml(te),!Ee&&(X=ne&&ne.onVnodeBeforeMount)&&rn(X,Se,T),ms(_,!0),se&&Oe){const He=()=>{_.subTree=yl(_),Oe(se,_.subTree,_,D,null)};Ee?T.type.__asyncLoader().then(()=>!_.isUnmounted&&He()):He()}else{const He=_.subTree=yl(_);P(null,He,k,M,_,D,q),T.el=He.el}if(ie&&Ct(ie,D),!Ee&&(X=ne&&ne.onVnodeMounted)){const He=T;Ct(()=>rn(X,Se,He),D)}(T.shapeFlag&256||Se&&Lo(Se.vnode)&&Se.vnode.shapeFlag&256)&&_.a&&Ct(_.a,D),_.isMounted=!0,T=k=M=null}},H=_.effect=new tu($,Ut,()=>cu(U),_.scope),U=_.update=()=>{H.dirty&&H.run()};U.id=_.uid,ms(_,!0),U()},ge=(_,T,k)=>{T.component=_;const M=_.vnode.props;_.vnode=T,_.next=null,yT(_,T.props,M,k),TT(_,T.children,k),ls(),wf(_),cs()},fe=(_,T,k,M,D,q,G,$,H=!1)=>{const U=_&&_.children,X=_?_.shapeFlag:0,se=T.children,{patchFlag:ne,shapeFlag:te}=T;if(ne>0){if(ne&128){zt(U,se,k,M,D,q,G,$,H);return}else if(ne&256){bt(U,se,k,M,D,q,G,$,H);return}}te&8?(X&16&&Xe(U,D,q),se!==U&&f(k,se)):X&16?te&16?zt(U,se,k,M,D,q,G,$,H):Xe(U,D,q,!0):(X&8&&f(k,""),te&16&&y(se,k,M,D,q,G,$,H))},bt=(_,T,k,M,D,q,G,$,H)=>{_=_||ti,T=T||ti;const U=_.length,X=T.length,se=Math.min(U,X);let ne;for(ne=0;ne<se;ne++){const te=T[ne]=H?jn(T[ne]):an(T[ne]);P(_[ne],te,k,null,D,q,G,$,H)}U>X?Xe(_,D,q,!0,!1,se):y(T,k,M,D,q,G,$,H,se)},zt=(_,T,k,M,D,q,G,$,H)=>{let U=0;const X=T.length;let se=_.length-1,ne=X-1;for(;U<=se&&U<=ne;){const te=_[U],ie=T[U]=H?jn(T[U]):an(T[U]);if(Gi(te,ie))P(te,ie,k,null,D,q,G,$,H);else break;U++}for(;U<=se&&U<=ne;){const te=_[se],ie=T[ne]=H?jn(T[ne]):an(T[ne]);if(Gi(te,ie))P(te,ie,k,null,D,q,G,$,H);else break;se--,ne--}if(U>se){if(U<=ne){const te=ne+1,ie=te<X?T[te].el:M;for(;U<=ne;)P(null,T[U]=H?jn(T[U]):an(T[U]),k,ie,D,q,G,$,H),U++}}else if(U>ne)for(;U<=se;)Be(_[U],D,q,!0),U++;else{const te=U,ie=U,Se=new Map;for(U=ie;U<=ne;U++){const Et=T[U]=H?jn(T[U]):an(T[U]);Et.key!=null&&Se.set(Et.key,U)}let Ee,He=0;const Pt=ne-ie+1;let Lt=!1,xi=0;const xn=new Array(Pt);for(U=0;U<Pt;U++)xn[U]=0;for(U=te;U<=se;U++){const Et=_[U];if(He>=Pt){Be(Et,D,q,!0);continue}let Vt;if(Et.key!=null)Vt=Se.get(Et.key);else for(Ee=ie;Ee<=ne;Ee++)if(xn[Ee-ie]===0&&Gi(Et,T[Ee])){Vt=Ee;break}Vt===void 0?Be(Et,D,q,!0):(xn[Vt-ie]=U+1,Vt>=xi?xi=Vt:Lt=!0,P(Et,T[Vt],k,null,D,q,G,$,H),He++)}const js=Lt?CT(xn):ti;for(Ee=js.length-1,U=Pt-1;U>=0;U--){const Et=ie+U,Vt=T[Et],qs=Et+1<X?T[Et+1].el:M;xn[U]===0?P(null,Vt,k,qs,D,q,G,$,H):Lt&&(Ee<0||U!==js[Ee]?Mt(Vt,k,qs,2):Ee--)}}},Mt=(_,T,k,M,D=null)=>{const{el:q,type:G,transition:$,children:H,shapeFlag:U}=_;if(U&6){Mt(_.component.subTree,T,k,M);return}if(U&128){_.suspense.move(T,k,M);return}if(U&64){G.move(_,T,k,Z);return}if(G===on){s(q,T,k);for(let se=0;se<H.length;se++)Mt(H[se],T,k,M);s(_.anchor,T,k);return}if(G===Tl){L(_,T,k);return}if(M!==2&&U&1&&$)if(M===0)$.beforeEnter(q),s(q,T,k),Ct(()=>$.enter(q),D);else{const{leave:se,delayLeave:ne,afterLeave:te}=$,ie=()=>s(q,T,k),Se=()=>{se(q,()=>{ie(),te&&te()})};ne?ne(q,ie,Se):Se()}else s(q,T,k)},Be=(_,T,k,M=!1,D=!1)=>{const{type:q,props:G,ref:$,children:H,dynamicChildren:U,shapeFlag:X,patchFlag:se,dirs:ne,memoIndex:te}=_;if($!=null&&sc($,null,k,_,!0),te!=null&&(T.renderCache[te]=void 0),X&256){T.ctx.deactivate(_);return}const ie=X&1&&ne,Se=!Lo(_);let Ee;if(Se&&(Ee=G&&G.onVnodeBeforeUnmount)&&rn(Ee,T,_),X&6)sn(_.component,k,M);else{if(X&128){_.suspense.unmount(k,M);return}ie&&gs(_,null,T,"beforeUnmount"),X&64?_.type.remove(_,T,k,D,Z,M):U&&(q!==on||se>0&&se&64)?Xe(U,T,k,!1,!0):(q===on&&se&384||!D&&X&16)&&Xe(H,T,k),M&&$e(_)}(Se&&(Ee=G&&G.onVnodeUnmounted)||ie)&&Ct(()=>{Ee&&rn(Ee,T,_),ie&&gs(_,null,T,"unmounted")},k)},$e=_=>{const{type:T,el:k,anchor:M,transition:D}=_;if(T===on){Dn(k,M);return}if(T===Tl){j(_);return}const q=()=>{i(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:$}=D,H=()=>G(k,q);$?$(_.el,q,H):H()}else q()},Dn=(_,T)=>{let k;for(;_!==T;)k=g(_),i(_),_=k;i(T)},sn=(_,T,k)=>{const{bum:M,scope:D,update:q,subTree:G,um:$,m:H,a:U}=_;Df(H),Df(U),M&&ml(M),D.stop(),q&&(q.active=!1,Be(G,_,T,k)),$&&Ct($,T),Ct(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Xe=(_,T,k,M=!1,D=!1,q=0)=>{for(let G=q;G<_.length;G++)Be(_[G],T,k,M,D)},x=_=>_.shapeFlag&6?x(_.component.subTree):_.shapeFlag&128?_.suspense.next():g(_.anchor||_.el);let J=!1;const Y=(_,T,k)=>{_==null?T._vnode&&Be(T._vnode,null,null,!0):P(T._vnode||null,_,T,null,null,null,k),J||(J=!0,wf(),Fg(),J=!1),T._vnode=_},Z={p:P,um:Be,m:Mt,r:$e,mt:vt,mc:y,pc:fe,pbc:A,n:x,o:n};let me,Oe;return{render:Y,hydrate:me,createApp:mT(Y,me)}}function El({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ms({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function AT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function tm(n,e,t=!1){const s=n.children,i=e.children;if(le(s)&&le(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=jn(i[r]),l.el=o.el),!t&&l.patchFlag!==-2&&tm(o,l)),l.type===Oa&&(l.el=o.el)}}function CT(n){const e=n.slice(),t=[0];let s,i,r,o,l;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(i=t[t.length-1],n[i]<u){e[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,n[t[l]]<u?r=l+1:o=l;u<n[t[r]]&&(r>0&&(e[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function nm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nm(e)}function Df(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const RT=Symbol.for("v-scx"),ST=()=>qt(RT),Ao={};function dr(n,e,t){return sm(n,e,t)}function sm(n,e,{immediate:t,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=Ue){if(e&&r){const K=e;e=(...I)=>{K(...I),oe()}}const c=rt,u=K=>s===!0?K:Es(K,s===!1?1:void 0);let f,p=!1,g=!1;if(lt(n)?(f=()=>n.value,p=Ko(n)):ur(n)?(f=()=>u(n),p=!0):le(n)?(g=!0,p=n.some(K=>ur(K)||Ko(K)),f=()=>n.map(K=>{if(lt(K))return K.value;if(ur(K))return u(K);if(ue(K))return Yn(K,c,2)})):ue(n)?e?f=()=>Yn(n,c,2):f=()=>(v&&v(),Xt(n,c,3,[C])):f=Ut,e&&s){const K=f;f=()=>Es(K())}let v,C=K=>{v=L.onStop=()=>{Yn(K,c,4),v=L.onStop=void 0}},P;if(Da)if(C=Ut,e?t&&Xt(e,c,3,[f(),g?[]:void 0,C]):f(),i==="sync"){const K=ST();P=K.__watcherHandles||(K.__watcherHandles=[])}else return Ut;let N=g?new Array(n.length).fill(Ao):Ao;const V=()=>{if(!(!L.active||!L.dirty))if(e){const K=L.run();(s||p||(g?K.some((I,y)=>ss(I,N[y])):ss(K,N)))&&(v&&v(),Xt(e,c,3,[K,N===Ao?void 0:g&&N[0]===Ao?[]:N,C]),N=K)}else L.run()};V.allowRecurse=!!e;let F;i==="sync"?F=V:i==="post"?F=()=>Ct(V,c&&c.suspense):(V.pre=!0,c&&(V.id=c.uid),F=()=>cu(V));const L=new tu(f,Ut,F),j=gg(),oe=()=>{L.stop(),j&&Jc(j.effects,L)};return e?t?V():N=L.run():i==="post"?Ct(L.run.bind(L),c&&c.suspense):L.run(),P&&P.push(oe),oe}function bT(n,e,t){const s=this.proxy,i=Ye(n)?n.includes(".")?im(s,n):()=>s[n]:n.bind(s,s);let r;ue(e)?r=e:(r=e.handler,t=e);const o=zr(this),l=sm(i,r.bind(s),t);return o(),l}function im(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}function Es(n,e=1/0,t){if(e<=0||!Ve(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,lt(n))Es(n.value,e,t);else if(le(n))for(let s=0;s<n.length;s++)Es(n[s],e,t);else if(rg(n)||ni(n))n.forEach(s=>{Es(s,e,t)});else if(lg(n)){for(const s in n)Es(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Es(n[s],e,t)}return n}const rm=n=>n.type.__isKeepAlive;function PT(n,e){om(n,"a",e)}function NT(n,e){om(n,"da",e)}function om(n,e,t=rt){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(ka(e,s,t),t){let i=t.parent;for(;i&&i.parent;)rm(i.parent.vnode)&&kT(s,e,t,i),i=i.parent}}function kT(n,e,t,s){const i=ka(e,n,s,!0);jg(()=>{Jc(s[e],i)},t)}function am(n,e){n.shapeFlag&6&&n.component?am(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}const OT=n=>n.__isTeleport,on=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),Tl=Symbol.for("v-stc"),pr=[];let Gt=null;function Hn(n=!1){pr.push(Gt=n?null:[])}function DT(){pr.pop(),Gt=pr[pr.length-1]||null}let Or=1;function xf(n){Or+=n}function xT(n){return n.dynamicChildren=Or>0?Gt||ti:null,DT(),Or>0&&Gt&&Gt.push(n),n}function zn(n,e,t,s,i,r){return xT(Cn(n,e,t,s,i,r,!0))}function ic(n){return n?n.__v_isVNode===!0:!1}function Gi(n,e){return n.type===e.type&&n.key===e.key}const lm=({key:n})=>n??null,Fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ye(n)||lt(n)||ue(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function Cn(n,e=null,t=null,s=0,i=null,r=n===on?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&lm(e),ref:e&&Fo(e),scopeId:$g,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Bt};return l?(fu(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Ye(t)?8:16),Or>0&&!o&&Gt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Gt.push(c),c}const $t=MT;function MT(n,e=null,t=null,s=0,i=null,r=!1){if((!n||n===YE)&&(n=kr),ic(n)){const l=fi(n,e,!0);return t&&fu(l,t),Or>0&&!r&&Gt&&(l.shapeFlag&6?Gt[Gt.indexOf(n)]=l:Gt.push(l)),l.patchFlag=-2,l}if(WT(n)&&(n=n.__vccOpts),e){e=LT(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=eu(l)),Ve(c)&&(Pg(c)&&!le(c)&&(c=nt({},c)),e.style=Ra(c))}const o=Ye(n)?1:JE(n)?128:OT(n)?64:Ve(n)?4:ue(n)?2:0;return Cn(n,e,t,s,i,o,r,!0)}function LT(n){return n?Pg(n)||Qg(n)?nt({},n):n:null}function fi(n,e,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=n,u=e?VT(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&lm(u),ref:e&&e.ref?t&&r?le(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==on?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fi(n.ssContent),ssFallback:n.ssFallback&&fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&am(f,c.clone(f)),f}function cm(n=" ",e=0){return $t(Oa,null,n,e)}function an(n){return n==null||typeof n=="boolean"?$t(kr):le(n)?$t(on,null,n.slice()):typeof n=="object"?jn(n):$t(Oa,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fi(n)}function fu(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fu(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Qg(e)?e._ctx=Bt:i===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),s&64?(t=16,e=[cm(e)]):t=8);n.children=e,n.shapeFlag|=t}function VT(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=eu([e.class,s.class]));else if(i==="style")e.style=Ra([e.style,s.style]);else if(wa(i)){const r=e[i],o=s[i];o&&r!==o&&!(le(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rn(n,e,t,s=null){Xt(n,e,7,[t,s])}const FT=Wg();let UT=0;function BT(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||FT,r={uid:UT++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xg(s,i),emitsOptions:Bg(s,i),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=jE.bind(null,r),n.ce&&n.ce(r),r}let rt=null;const um=()=>rt||Bt;let Yo,rc;{const n=ug(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Yo=e("__VUE_INSTANCE_SETTERS__",t=>rt=t),rc=e("__VUE_SSR_SETTERS__",t=>Da=t)}const zr=n=>{const e=rt;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(e)}},Mf=()=>{rt&&rt.scope.off(),Yo(null)};function hm(n){return n.vnode.shapeFlag&4}let Da=!1;function $T(n,e=!1){e&&rc(e);const{props:t,children:s}=n.vnode,i=hm(n);_T(n,t,i,e),ET(n,s);const r=i?jT(n,e):void 0;return e&&rc(!1),r}function jT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cT);const{setup:s}=t;if(s){const i=n.setupContext=s.length>1?HT(n):null,r=zr(n);ls();const o=Yn(s,n,0,[n.props,i]);if(cs(),r(),og(o)){if(o.then(Mf,Mf),e)return o.then(l=>{Lf(n,l,e)}).catch(l=>{Pa(l,n,0)});n.asyncDep=o}else Lf(n,o,e)}else fm(n,e)}function Lf(n,e,t){ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ve(e)&&(n.setupState=xg(e)),fm(n,t)}let Vf;function fm(n,e,t){const s=n.type;if(!n.render){if(!e&&Vf&&!s.render){const i=s.template||uu(n).template;if(i){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:l,compilerOptions:c}=s,u=nt(nt({isCustomElement:r,delimiters:l},o),c);s.render=Vf(i,u)}}n.render=s.render||Ut}{const i=zr(n);ls();try{uT(n)}finally{cs(),i()}}}const qT={get(n,e){return St(n,"get",""),n[e]}};function HT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,qT),slots:n.slots,emit:n.emit,expose:e}}function du(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xg(PE(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hr)return hr[t](n)},has(e,t){return t in e||t in hr}})):n.proxy}function zT(n,e=!0){return ue(n)?n.displayName||n.name:n.name||e&&n.__name}function WT(n){return ue(n)&&"__vccOpts"in n}const Ft=(n,e)=>NE(n,e,Da);function dm(n,e,t){const s=arguments.length;return s===2?Ve(e)&&!le(e)?ic(e)?$t(n,null,[e]):$t(n,e):$t(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ic(t)&&(t=[t]),$t(n,e,t))}const KT="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const GT="http://www.w3.org/2000/svg",QT="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Ff=An&&An.createElement("template"),YT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?An.createElementNS(GT,n):e==="mathml"?An.createElementNS(QT,n):t?An.createElement(n,{is:t}):An.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>An.createTextNode(n),createComment:n=>An.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>An.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Ff.innerHTML=s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n;const l=Ff.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},XT=Symbol("_vtc");function JT(n,e,t){const s=n[XT];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uf=Symbol("_vod"),ZT=Symbol("_vsh"),ew=Symbol(""),tw=/(^|;)\s*display\s*:/;function nw(n,e,t){const s=n.style,i=Ye(t);let r=!1;if(t&&!i){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Uo(s,l,"")}else for(const o in e)t[o]==null&&Uo(s,o,"");for(const o in t)o==="display"&&(r=!0),Uo(s,o,t[o])}else if(i){if(e!==t){const o=s[ew];o&&(t+=";"+o),s.cssText=t,r=tw.test(t)}}else e&&n.removeAttribute("style");Uf in n&&(n[Uf]=r?s.display:"",n[ZT]&&(s.display="none"))}const Bf=/\s*!important$/;function Uo(n,e,t){if(le(t))t.forEach(s=>Uo(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=sw(n,e);Bf.test(t)?n.setProperty(Ai(s),t.replace(Bf,""),"important"):n[s]=t}}const $f=["Webkit","Moz","ms"],wl={};function sw(n,e){const t=wl[e];if(t)return t;let s=dn(e);if(s!=="filter"&&s in n)return wl[e]=s;s=Ca(s);for(let i=0;i<$f.length;i++){const r=$f[i]+s;if(r in n)return wl[e]=r}return e}const jf="http://www.w3.org/1999/xlink";function qf(n,e,t,s,i,r=rE(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jf,e.slice(6,e.length)):n.setAttributeNS(jf,e,t):t==null||r&&!hg(t)?n.removeAttribute(e):n.setAttribute(e,r?"":String(t))}function iw(n,e,t,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),n[e]=t??"";return}const l=n.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?n.getAttribute("value")||"":n.value,f=t==null?"":String(t);(u!==f||!("_value"in n))&&(n.value=f),t==null&&n.removeAttribute(e),n._value=t;return}let c=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=hg(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function rw(n,e,t,s){n.addEventListener(e,t,s)}function ow(n,e,t,s){n.removeEventListener(e,t,s)}const Hf=Symbol("_vei");function aw(n,e,t,s,i=null){const r=n[Hf]||(n[Hf]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=lw(e);if(s){const u=r[e]=hw(s,i);rw(n,l,u,c)}else o&&(ow(n,l,o,c),r[e]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function lw(n){let e;if(zf.test(n)){e={};let s;for(;s=n.match(zf);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ai(n.slice(2)),e]}let Il=0;const cw=Promise.resolve(),uw=()=>Il||(cw.then(()=>Il=0),Il=Date.now());function hw(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Xt(fw(s,t.value),e,5,[s])};return t.value=n,t.attached=uw(),t}function fw(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Wf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dw=(n,e,t,s,i,r,o,l,c)=>{const u=i==="svg";e==="class"?JT(n,s,u):e==="style"?nw(n,t,s):wa(e)?Xc(e)||aw(n,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pw(n,e,s,u))?(iw(n,e,s,r,o,l,c),(e==="value"||e==="checked"||e==="selected")&&qf(n,e,s,u,o,e!=="value")):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),qf(n,e,s,u))};function pw(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wf(e)&&ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Wf(e)&&Ye(t)?!1:e in n}const gw=nt({patchProp:dw},YT);let Kf;function mw(){return Kf||(Kf=wT(gw))}const _w=(...n)=>{const e=mw().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=vw(s);if(!i)return;const r=e._component;!ue(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,yw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yw(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vw(n){return Ye(n)?document.querySelector(n):n}const xa=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},Ew={name:"App"},Tw={id:"app"};function ww(n,e,t,s,i,r){const o=QE("router-view");return Hn(),zn("div",Tw,[$t(o)])}const Iw=xa(Ew,[["render",ww]]);/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function Aw(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function Al(n,e){const t={};for(const s in e){const i=e[s];t[s]=Zt(i)?i.map(n):n(i)}return t}const gr=()=>{},Zt=Array.isArray,pm=/#/g,Cw=/&/g,Rw=/\//g,Sw=/=/g,bw=/\?/g,gm=/\+/g,Pw=/%5B/g,Nw=/%5D/g,mm=/%5E/g,kw=/%60/g,_m=/%7B/g,Ow=/%7C/g,ym=/%7D/g,Dw=/%20/g;function pu(n){return encodeURI(""+n).replace(Ow,"|").replace(Pw,"[").replace(Nw,"]")}function xw(n){return pu(n).replace(_m,"{").replace(ym,"}").replace(mm,"^")}function oc(n){return pu(n).replace(gm,"%2B").replace(Dw,"+").replace(pm,"%23").replace(Cw,"%26").replace(kw,"`").replace(_m,"{").replace(ym,"}").replace(mm,"^")}function Mw(n){return oc(n).replace(Sw,"%3D")}function Lw(n){return pu(n).replace(pm,"%23").replace(bw,"%3F")}function Vw(n){return n==null?"":Lw(n).replace(Rw,"%2F")}function Dr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Fw=/\/$/,Uw=n=>n.replace(Fw,"");function Cl(n,e,t="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=n(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=qw(s??e,t),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Dr(o)}}function Bw(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Gf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $w(n,e,t){const s=e.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&di(e.matched[s],t.matched[i])&&vm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function di(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function vm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!jw(n[t],e[t]))return!1;return!0}function jw(n,e){return Zt(n)?Qf(n,e):Zt(e)?Qf(e,n):n===e}function Qf(n,e){return Zt(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function qw(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=t.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var xr;(function(n){n.pop="pop",n.push="push"})(xr||(xr={}));var mr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(mr||(mr={}));function Hw(n){if(!n)if(Qs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Uw(n)}const zw=/^[^#]+#/;function Ww(n,e){return n.replace(zw,"#")+e}function Kw(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function Gw(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=Kw(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yf(n,e){return(history.state?history.state.position-e:-1)+n}const ac=new Map;function Qw(n,e){ac.set(n,e)}function Yw(n){const e=ac.get(n);return ac.delete(n),e}let Xw=()=>location.protocol+"//"+location.host;function Em(n,e){const{pathname:t,search:s,hash:i}=e,r=n.indexOf("#");if(r>-1){let l=i.includes(n.slice(r))?n.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Gf(c,"")}return Gf(t,n)+s+i}function Jw(n,e,t,s){let i=[],r=[],o=null;const l=({state:g})=>{const v=Em(n,location),C=t.value,P=e.value;let N=0;if(g){if(t.value=v,e.value=g,o&&o===C){o=null;return}N=P?g.position-P.position:0}else s(v);i.forEach(V=>{V(t.value,C,{delta:N,type:xr.pop,direction:N?N>0?mr.forward:mr.back:mr.unknown})})};function c(){o=t.value}function u(g){i.push(g);const v=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return r.push(v),v}function f(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:Ma()}),"")}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Xf(n,e,t,s=!1,i=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:i?Ma():null}}function Zw(n){const{history:e,location:t}=window,s={value:Em(n,t)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const p=n.indexOf("#"),g=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+c:Xw()+n+c;try{e[f?"replaceState":"pushState"](u,"",g),i.value=u}catch(v){console.error(v),t[f?"replace":"assign"](g)}}function o(c,u){const f=Ne({},e.state,Xf(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,f,!0),s.value=c}function l(c,u){const f=Ne({},i.value,e.state,{forward:c,scroll:Ma()});r(f.current,f,!0);const p=Ne({},Xf(s.value,c,null),{position:f.position+1},u);r(c,p,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function eI(n){n=Hw(n);const e=Zw(n),t=Jw(n,e.state,e.location,e.replace);function s(r,o=!0){o||t.pauseListeners(),history.go(r)}const i=Ne({location:"",base:n,go:s,createHref:Ww.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function tI(n){return typeof n=="string"||n&&typeof n=="object"}function Tm(n){return typeof n=="string"||typeof n=="symbol"}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wm=Symbol("");var Jf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Jf||(Jf={}));function pi(n,e){return Ne(new Error,{type:n,[wm]:!0},e)}function Tn(n,e){return n instanceof Error&&wm in n&&(e==null||!!(n.type&e))}const Zf="[^/]+?",nI={sensitive:!1,strict:!1,start:!0,end:!0},sI=/[.+*?^${}()[\]/\\]/g;function iI(n,e){const t=Ne({},nI,e),s=[];let i=t.start?"^":"";const r=[];for(const u of n){const f=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=40+(t.sensitive?.25:0);if(g.type===0)p||(i+="/"),i+=g.value.replace(sI,"\\$&"),v+=40;else if(g.type===1){const{value:C,repeatable:P,optional:N,regexp:V}=g;r.push({name:C,repeatable:P,optional:N});const F=V||Zf;if(F!==Zf){v+=10;try{new RegExp(`(${F})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+j.message)}}let L=P?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(L=N&&u.length<2?`(?:/${L})`:"/"+L),N&&(L+="?"),i+=L,v+=20,N&&(v+=-8),P&&(v+=-20),F===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",C=r[g-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const g of n){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===0)f+=v.value;else if(v.type===1){const{value:C,repeatable:P,optional:N}=v,V=C in u?u[C]:"";if(Zt(V)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=Zt(V)?V.join("/"):V;if(!F)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=F}}return f||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function rI(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Im(n,e){let t=0;const s=n.score,i=e.score;for(;t<s.length&&t<i.length;){const r=rI(s[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-s.length)===1){if(ed(s))return 1;if(ed(i))return-1}return i.length-s.length}function ed(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const oI={type:0,value:""},aI=/[a-zA-Z0-9_]/;function lI(n){if(!n)return[[]];if(n==="/")return[[oI]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(v){throw new Error(`ERR (${t})/"${u}": ${v}`)}let t=0,s=t;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",f="";function p(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:aI.test(c)?g():(p(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:t=3:f+=c;break;case 3:p(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}function cI(n,e,t){const s=iI(lI(n.path),t),i=Ne(s,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function uI(n,e){const t=[],s=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,p,g){const v=!g,C=hI(f);C.aliasOf=g&&g.record;const P=sd(e,f),N=[C];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of L)N.push(Ne({},C,{components:g?g.record.components:C.components,path:j,aliasOf:g?g.record:C}))}let V,F;for(const L of N){const{path:j}=L;if(p&&j[0]!=="/"){const oe=p.record.path,K=oe[oe.length-1]==="/"?"":"/";L.path=p.record.path+(j&&K+j)}if(V=cI(L,p,P),g?g.alias.push(V):(F=F||V,F!==V&&F.alias.push(V),v&&f.name&&!nd(V)&&o(f.name)),Am(V)&&c(V),C.children){const oe=C.children;for(let K=0;K<oe.length;K++)r(oe[K],V,g&&g.children[K])}g=g||V}return F?()=>{o(F)}:gr}function o(f){if(Tm(f)){const p=s.get(f);p&&(s.delete(f),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(f);p>-1&&(t.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return t}function c(f){const p=pI(f,t);t.splice(p,0,f),f.record.name&&!nd(f)&&s.set(f.record.name,f)}function u(f,p){let g,v={},C,P;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw pi(1,{location:f});P=g.record.name,v=Ne(td(p.params,g.keys.filter(F=>!F.optional).concat(g.parent?g.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),f.params&&td(f.params,g.keys.map(F=>F.name))),C=g.stringify(v)}else if(f.path!=null)C=f.path,g=t.find(F=>F.re.test(C)),g&&(v=g.parse(C),P=g.record.name);else{if(g=p.name?s.get(p.name):t.find(F=>F.re.test(p.path)),!g)throw pi(1,{location:f,currentLocation:p});P=g.record.name,v=Ne({},p.params,f.params),C=g.stringify(v)}const N=[];let V=g;for(;V;)N.unshift(V.record),V=V.parent;return{name:P,path:C,params:v,matched:N,meta:dI(N)}}return n.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function td(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function hI(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:fI(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function fI(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function nd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function dI(n){return n.reduce((e,t)=>Ne(e,t.meta),{})}function sd(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function pI(n,e){let t=0,s=e.length;for(;t!==s;){const r=t+s>>1;Im(n,e[r])<0?s=r:t=r+1}const i=gI(n);return i&&(s=e.lastIndexOf(i,s-1)),s}function gI(n){let e=n;for(;e=e.parent;)if(Am(e)&&Im(n,e)===0)return e}function Am({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function mI(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gm," "),o=r.indexOf("="),l=Dr(o<0?r:r.slice(0,o)),c=o<0?null:Dr(r.slice(o+1));if(l in e){let u=e[l];Zt(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function id(n){let e="";for(let t in n){const s=n[t];if(t=Mw(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zt(s)?s.map(r=>r&&oc(r)):[s&&oc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function _I(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Zt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const yI=Symbol(""),rd=Symbol(""),gu=Symbol(""),mu=Symbol(""),lc=Symbol("");function Qi(){let n=[];function e(s){return n.push(s),()=>{const i=n.indexOf(s);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function qn(n,e,t,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(pi(4,{from:t,to:e})):g instanceof Error?c(g):tI(g)?c(pi(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},f=r(()=>n.call(s&&s.instances[i],e,t,u));let p=Promise.resolve(f);n.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Rl(n,e,t,s,i=r=>r()){const r=[];for(const o of n)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(vI(c)){const f=(c.__vccOpts||c)[e];f&&r.push(qn(f,t,s,o,l,i))}else{let u=c();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const p=Aw(f)?f.default:f;o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&qn(v,t,s,o,l,i)()}))}}return r}function vI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function od(n){const e=qt(gu),t=qt(mu),s=Ft(()=>{const c=Rs(n.to);return e.resolve(c)}),i=Ft(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=t.matched;if(!f||!p.length)return-1;const g=p.findIndex(di.bind(null,f));if(g>-1)return g;const v=ad(c[u-2]);return u>1&&ad(f)===v&&p[p.length-1].path!==v?p.findIndex(di.bind(null,c[u-2])):g}),r=Ft(()=>i.value>-1&&II(t.params,s.value.params)),o=Ft(()=>i.value>-1&&i.value===t.matched.length-1&&vm(t.params,s.value.params));function l(c={}){return wI(c)?e[Rs(n.replace)?"replace":"push"](Rs(n.to)).catch(gr):Promise.resolve()}return{route:s,href:Ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const EI=Hg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(n,{slots:e}){const t=ba(od(n)),{options:s}=qt(gu),i=Ft(()=>({[ld(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ld(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:dm("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),TI=EI;function wI(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function II(n,e){for(const t in e){const s=e[t],i=n[t];if(typeof s=="string"){if(s!==i)return!1}else if(!Zt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ad(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ld=(n,e,t)=>n??e??t,AI=Hg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=qt(lc),i=Ft(()=>n.route||s.value),r=qt(rd,0),o=Ft(()=>{let u=Rs(r);const{matched:f}=i.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Ft(()=>i.value.matched[o.value]);Vo(rd,Ft(()=>o.value+1)),Vo(yI,l),Vo(lc,i);const c=si();return dr(()=>[c.value,l.value,n.name],([u,f,p],[g,v,C])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!di(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=i.value,f=n.name,p=l.value,g=p&&p.components[f];if(!g)return cd(t.default,{Component:g,route:u});const v=p.props[f],C=v?v===!0?u.params:typeof v=="function"?v(u):v:null,N=dm(g,Ne({},C,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return cd(t.default,{Component:N,route:u})||N}}});function cd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const CI=AI;function RI(n){const e=uI(n.routes,n),t=n.parseQuery||mI,s=n.stringifyQuery||id,i=n.history,r=Qi(),o=Qi(),l=Qi(),c=Og(Un);let u=Un;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Al.bind(null,x=>""+x),p=Al.bind(null,Vw),g=Al.bind(null,Dr);function v(x,J){let Y,Z;return Tm(x)?(Y=e.getRecordMatcher(x),Z=J):Z=x,e.addRoute(Z,Y)}function C(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function P(){return e.getRoutes().map(x=>x.record)}function N(x){return!!e.getRecordMatcher(x)}function V(x,J){if(J=Ne({},J||c.value),typeof x=="string"){const T=Cl(t,x,J.path),k=e.resolve({path:T.path},J),M=i.createHref(T.fullPath);return Ne(T,k,{params:g(k.params),hash:Dr(T.hash),redirectedFrom:void 0,href:M})}let Y;if(x.path!=null)Y=Ne({},x,{path:Cl(t,x.path,J.path).path});else{const T=Ne({},x.params);for(const k in T)T[k]==null&&delete T[k];Y=Ne({},x,{params:p(T)}),J.params=p(J.params)}const Z=e.resolve(Y,J),me=x.hash||"";Z.params=f(g(Z.params));const Oe=Bw(s,Ne({},x,{hash:xw(me),path:Z.path})),_=i.createHref(Oe);return Ne({fullPath:Oe,hash:me,query:s===id?_I(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:_})}function F(x){return typeof x=="string"?Cl(t,x,c.value.path):Ne({},x)}function L(x,J){if(u!==x)return pi(8,{from:J,to:x})}function j(x){return I(x)}function oe(x){return j(Ne(F(x),{replace:!0}))}function K(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let Z=typeof Y=="function"?Y(x):Y;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=F(Z):{path:Z},Z.params={}),Ne({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function I(x,J){const Y=u=V(x),Z=c.value,me=x.state,Oe=x.force,_=x.replace===!0,T=K(Y);if(T)return I(Ne(F(T),{state:typeof T=="object"?Ne({},me,T.state):me,force:Oe,replace:_}),J||Y);const k=Y;k.redirectedFrom=J;let M;return!Oe&&$w(s,Z,Y)&&(M=pi(16,{to:k,from:Z}),Mt(Z,Z,!0,!1)),(M?Promise.resolve(M):A(k,Z)).catch(D=>Tn(D)?Tn(D,2)?D:zt(D):fe(D,k,Z)).then(D=>{if(D){if(Tn(D,2))return I(Ne({replace:_},F(D.to),{state:typeof D.to=="object"?Ne({},me,D.to.state):me,force:Oe}),J||k)}else D=S(k,Z,!0,_,me);return R(k,Z,D),D})}function y(x,J){const Y=L(x,J);return Y?Promise.reject(Y):Promise.resolve()}function w(x){const J=Dn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function A(x,J){let Y;const[Z,me,Oe]=SI(x,J);Y=Rl(Z.reverse(),"beforeRouteLeave",x,J);for(const T of Z)T.leaveGuards.forEach(k=>{Y.push(qn(k,x,J))});const _=y.bind(null,x,J);return Y.push(_),Xe(Y).then(()=>{Y=[];for(const T of r.list())Y.push(qn(T,x,J));return Y.push(_),Xe(Y)}).then(()=>{Y=Rl(me,"beforeRouteUpdate",x,J);for(const T of me)T.updateGuards.forEach(k=>{Y.push(qn(k,x,J))});return Y.push(_),Xe(Y)}).then(()=>{Y=[];for(const T of Oe)if(T.beforeEnter)if(Zt(T.beforeEnter))for(const k of T.beforeEnter)Y.push(qn(k,x,J));else Y.push(qn(T.beforeEnter,x,J));return Y.push(_),Xe(Y)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),Y=Rl(Oe,"beforeRouteEnter",x,J,w),Y.push(_),Xe(Y))).then(()=>{Y=[];for(const T of o.list())Y.push(qn(T,x,J));return Y.push(_),Xe(Y)}).catch(T=>Tn(T,8)?T:Promise.reject(T))}function R(x,J,Y){l.list().forEach(Z=>w(()=>Z(x,J,Y)))}function S(x,J,Y,Z,me){const Oe=L(x,J);if(Oe)return Oe;const _=J===Un,T=Qs?history.state:{};Y&&(Z||_?i.replace(x.fullPath,Ne({scroll:_&&T&&T.scroll},me)):i.push(x.fullPath,me)),c.value=x,Mt(x,J,Y,_),zt()}let E;function vt(){E||(E=i.listen((x,J,Y)=>{if(!sn.listening)return;const Z=V(x),me=K(Z);if(me){I(Ne(me,{replace:!0}),Z).catch(gr);return}u=Z;const Oe=c.value;Qs&&Qw(Yf(Oe.fullPath,Y.delta),Ma()),A(Z,Oe).catch(_=>Tn(_,12)?_:Tn(_,2)?(I(_.to,Z).then(T=>{Tn(T,20)&&!Y.delta&&Y.type===xr.pop&&i.go(-1,!1)}).catch(gr),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),fe(_,Z,Oe))).then(_=>{_=_||S(Z,Oe,!1),_&&(Y.delta&&!Tn(_,8)?i.go(-Y.delta,!1):Y.type===xr.pop&&Tn(_,20)&&i.go(-1,!1)),R(Z,Oe,_)}).catch(gr)}))}let xt=Qi(),ze=Qi(),ge;function fe(x,J,Y){zt(x);const Z=ze.list();return Z.length?Z.forEach(me=>me(x,J,Y)):console.error(x),Promise.reject(x)}function bt(){return ge&&c.value!==Un?Promise.resolve():new Promise((x,J)=>{xt.add([x,J])})}function zt(x){return ge||(ge=!x,vt(),xt.list().forEach(([J,Y])=>x?Y(x):J()),xt.reset()),x}function Mt(x,J,Y,Z){const{scrollBehavior:me}=n;if(!Qs||!me)return Promise.resolve();const Oe=!Y&&Yw(Yf(x.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return Lg().then(()=>me(x,J,Oe)).then(_=>_&&Gw(_)).catch(_=>fe(_,x,J))}const Be=x=>i.go(x);let $e;const Dn=new Set,sn={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,hasRoute:N,getRoutes:P,resolve:V,options:n,push:j,replace:oe,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:bt,install(x){const J=this;x.component("RouterLink",TI),x.component("RouterView",CI),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Rs(c)}),Qs&&!$e&&c.value===Un&&($e=!0,j(i.location).catch(me=>{}));const Y={};for(const me in Un)Object.defineProperty(Y,me,{get:()=>c.value[me],enumerable:!0});x.provide(gu,J),x.provide(mu,Sg(Y)),x.provide(lc,c);const Z=x.unmount;Dn.add(x),x.unmount=function(){Dn.delete(x),Dn.size<1&&(u=Un,E&&E(),E=null,c.value=Un,$e=!1,ge=!1),Z()}}};function Xe(x){return x.reduce((J,Y)=>J.then(()=>w(Y)),Promise.resolve())}return sn}function SI(n,e){const t=[],s=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(n.matched.find(u=>di(u,l))?s.push(l):t.push(l));const c=n.matched[o];c&&(e.matched.find(u=>di(u,c))||i.push(c))}return[t,s,i]}function bI(){return qt(mu)}var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(n,e){if(!n)throw Ci(e)},Ci=function(n){return new Error("Firebase Database ("+Cm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},PI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),s.push(t[f],t[p],t[g],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):PI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new NI;const g=r<<2|l>>4;if(s.push(g),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const C=u<<6&192|p;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class NI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sm=function(n){const e=Rm(n);return La.encodeByteArray(e,!0)},Xo=function(n){return Sm(n).replace(/\./g,"")},Jo=function(n){try{return La.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n){return bm(void 0,n)}function bm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!OI(t)||(n[t]=bm(n[t],e[t]));return n}function OI(n){return n!=="__proto__"}/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xI=()=>DI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof ud>"u")return;const n=ud.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},LI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jo(n[1]);return e&&JSON.parse(e)},Va=()=>{try{return xI()||MI()||LI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},VI=n=>{var e,t;return(t=(e=Va())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},FI=n=>{const e=VI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Pm=()=>{var n;return(n=Va())===null||n===void 0?void 0:n.config},UI=n=>{var e;return(e=Va())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function BI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xo(JSON.stringify(t)),Xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _u(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function $I(){var n;const e=(n=Va())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function km(){return Cm.NODE_ADMIN===!0}function qI(){return!$I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Om(){try{return typeof indexedDB=="object"}catch{return!1}}function HI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="FirebaseError";class kn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?WI(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,s)}}function WI(n,e){return n.replace(KI,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const KI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return JSON.parse(n)}function ot(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Lr(Jo(r[0])||""),t=Lr(Jo(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},GI=function(n){const e=Dm(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},QI=function(n){const e=Dm(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function gi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zo(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function cc(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(fd(r)&&fd(o)){if(!cc(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function fd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=l^r&(o^l),f=1518500249):(u=r^o^l,f=1859775393):p<60?(u=r&o|l&(r|o),f=2400959708):(u=r^o^l,f=3395469782);const g=(i<<5|i>>>27)+u+c+f+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function XI(n,e){const t=new JI(n,e);return t.subscribe.bind(t)}class JI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Sl),i.error===void 0&&(i.error=Sl),i.complete===void 0&&(i.complete=Sl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sl(){}function eA(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,Q(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fa=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Fs(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _s="[DEFAULT]";/**
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
 */class nA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Mr;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(n){return n===_s?void 0:n}function iA(n){return n.instantiationMode==="EAGER"}/**
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
 */class rA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const oA={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},aA=de.INFO,lA={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},cA=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=lA[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wr{constructor(e){this.name=e,this._logLevel=aA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const uA=(n,e)=>e.some(t=>n instanceof t);let dd,pd;function hA(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fA(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xm=new WeakMap,uc=new WeakMap,Mm=new WeakMap,bl=new WeakMap,vu=new WeakMap;function dA(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Xn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xm.set(t,n)}).catch(()=>{}),vu.set(e,n),e}function pA(n){if(uc.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});uc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gA(n){hc=n(hc)}function mA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Pl(this),e,...t);return Mm.set(s,e.sort?e.sort():[e]),Xn(s)}:fA().includes(n)?function(...e){return n.apply(Pl(this),e),Xn(xm.get(this))}:function(...e){return Xn(n.apply(Pl(this),e))}}function _A(n){return typeof n=="function"?mA(n):(n instanceof IDBTransaction&&pA(n),uA(n,hA())?new Proxy(n,hc):n)}function Xn(n){if(n instanceof IDBRequest)return dA(n);if(bl.has(n))return bl.get(n);const e=_A(n);return e!==n&&(bl.set(n,e),vu.set(e,n)),e}const Pl=n=>vu.get(n);function yA(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Xn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],Nl=new Map;function gd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=EA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vA.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),i&&c.done]))[0]};return Nl.set(e,r),r}gA(n=>({...n,get:(e,t,s)=>gd(e,t)||n.get(e,t,s),has:(e,t)=>!!gd(e,t)||n.has(e,t)}));/**
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
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wA(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",md="0.10.5";/**
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
 */const Ps=new Wr("@firebase/app"),IA="@firebase/app-compat",AA="@firebase/analytics-compat",CA="@firebase/analytics",RA="@firebase/app-check-compat",SA="@firebase/app-check",bA="@firebase/auth",PA="@firebase/auth-compat",NA="@firebase/database",kA="@firebase/database-compat",OA="@firebase/functions",DA="@firebase/functions-compat",xA="@firebase/installations",MA="@firebase/installations-compat",LA="@firebase/messaging",VA="@firebase/messaging-compat",FA="@firebase/performance",UA="@firebase/performance-compat",BA="@firebase/remote-config",$A="@firebase/remote-config-compat",jA="@firebase/storage",qA="@firebase/storage-compat",HA="@firebase/firestore",zA="@firebase/vertexai-preview",WA="@firebase/firestore-compat",KA="firebase",GA="10.12.2";/**
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
 */const dc="[DEFAULT]",QA={[fc]:"fire-core",[IA]:"fire-core-compat",[CA]:"fire-analytics",[AA]:"fire-analytics-compat",[SA]:"fire-app-check",[RA]:"fire-app-check-compat",[bA]:"fire-auth",[PA]:"fire-auth-compat",[NA]:"fire-rtdb",[kA]:"fire-rtdb-compat",[OA]:"fire-fn",[DA]:"fire-fn-compat",[xA]:"fire-iid",[MA]:"fire-iid-compat",[LA]:"fire-fcm",[VA]:"fire-fcm-compat",[FA]:"fire-perf",[UA]:"fire-perf-compat",[BA]:"fire-rc",[$A]:"fire-rc-compat",[jA]:"fire-gcs",[qA]:"fire-gcs-compat",[HA]:"fire-fst",[WA]:"fire-fst-compat",[zA]:"fire-vertex","fire-js":"fire-js",[KA]:"fire-js-all"};/**
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
 */const ea=new Map,YA=new Map,pc=new Map;function _d(n,e){try{n.container.addComponent(e)}catch(t){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(pc.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,n);for(const t of ea.values())_d(t,n);for(const t of YA.values())_d(t,n);return!0}function XA(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sr(n){return n.settings!==void 0}/**
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
 */const JA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ri("app","Firebase",JA);/**
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
 */class ZA{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Si=GA;function Lm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(t||(t=Pm()),!t)throw Jn.create("no-options");const r=ea.get(i);if(r){if(cc(t,r.options)&&cc(s,r.config))return r;throw Jn.create("duplicate-app",{appName:i})}const o=new rA(i);for(const c of pc.values())o.addComponent(c);const l=new ZA(t,s,o);return ea.set(i,l),l}function Vm(n=dc){const e=ea.get(n);if(!e&&n===dc&&Pm())return Lm();if(!e)throw Jn.create("no-app",{appName:n});return e}function Ot(n,e,t){var s;let i=(s=QA[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(l.join(" "));return}pn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const e0="firebase-heartbeat-database",t0=1,Vr="firebase-heartbeat-store";let kl=null;function Fm(){return kl||(kl=yA(e0,t0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Jn.create("idb-open",{originalErrorMessage:n.message})})),kl}async function n0(n){try{const t=(await Fm()).transaction(Vr),s=await t.objectStore(Vr).get(Um(n));return await t.done,s}catch(e){if(e instanceof kn)Ps.warn(e.message);else{const t=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(t.message)}}}async function yd(n,e){try{const s=(await Fm()).transaction(Vr,"readwrite");await s.objectStore(Vr).put(e,Um(n)),await s.done}catch(t){if(t instanceof kn)Ps.warn(t.message);else{const s=Jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ps.warn(s.message)}}}function Um(n){return`${n.name}!${n.options.appId}`}/**
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
 */const s0=1024,i0=30*24*60*60*1e3;class r0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new a0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=i0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vd(),{heartbeatsToSend:s,unsentEntries:i}=o0(this._heartbeatsCache.heartbeats),r=Xo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vd(){return new Date().toISOString().substring(0,10)}function o0(n,e=s0){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ed(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ed(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Om()?HI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await n0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ed(n){return Xo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function l0(n){pn(new tn("platform-logger",e=>new TA(e),"PRIVATE")),pn(new tn("heartbeat",e=>new r0(e),"PRIVATE")),Ot(fc,md,n),Ot(fc,md,"esm2017"),Ot("fire-js","")}l0("");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ss,Bm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,R,S){for(var E=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)E[vt-2]=arguments[vt];return y.prototype[R].apply(A,E)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;16>R;++R)A[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],R=I.g[2];var S=I.g[3],E=y+(S^w&(R^S))+A[0]+3614090360&4294967295;y=w+(E<<7&4294967295|E>>>25),E=S+(R^y&(w^R))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(w^S&(y^w))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=w+(y^R&(S^y))+A[3]+3250441966&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(S^w&(R^S))+A[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(R^y&(w^R))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(w^S&(y^w))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=w+(y^R&(S^y))+A[7]+4249261313&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(S^w&(R^S))+A[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(R^y&(w^R))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(w^S&(y^w))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=w+(y^R&(S^y))+A[11]+2304563134&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(S^w&(R^S))+A[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=S+(R^y&(w^R))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(w^S&(y^w))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=w+(y^R&(S^y))+A[15]+1236535329&4294967295,w=R+(E<<22&4294967295|E>>>10),E=y+(R^S&(w^R))+A[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^R&(y^w))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(S^y))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(R^S))+A[0]+3921069994&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(w^R))+A[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^R&(y^w))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(S^y))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(R^S))+A[4]+3889429448&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(w^R))+A[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^R&(y^w))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(S^y))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(R^S))+A[8]+1163531501&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(w^R))+A[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=S+(w^R&(y^w))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^w&(S^y))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=w+(S^y&(R^S))+A[12]+2368359562&4294967295,w=R+(E<<20&4294967295|E>>>12),E=y+(w^R^S)+A[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^R)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^w)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=w+(R^S^y)+A[14]+4259657740&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^S)+A[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^R)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^w)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=w+(R^S^y)+A[10]+3200236656&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^S)+A[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^R)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^w)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=w+(R^S^y)+A[6]+76029189&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(w^R^S)+A[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=S+(y^w^R)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^w)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=w+(R^S^y)+A[2]+3299628645&4294967295,w=R+(E<<23&4294967295|E>>>9),E=y+(R^(w|~S))+A[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~R))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~w))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=w+(S^(R|~y))+A[5]+4237533241&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~S))+A[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~R))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~w))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=w+(S^(R|~y))+A[1]+2240044497&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~S))+A[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~R))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~w))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=w+(S^(R|~y))+A[13]+1309151649&4294967295,w=R+(E<<21&4294967295|E>>>11),E=y+(R^(w|~S))+A[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=S+(w^(y|~R))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~w))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=w+(S^(R|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+S&4294967295}s.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=w;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(A[R++]=I.charCodeAt(S++),R==this.blockSize){i(this,A),R=0;break}}else for(;S<y;)if(A[R++]=I[S++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)I[w++]=this.g[y]>>>A&255;return I};function r(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],A=!0,R=I.length-1;0<=R;R--){var S=I[R]|0;A&&S==y||(w[R]=S,A=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?r(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(u(-I));for(var y=[],w=1,A=0;I>=w;A++)y[A]=I/w|0,w*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=p,R=0;R<I.length;R+=8){var S=Math.min(8,I.length-R),E=parseInt(I.substring(R,R+S),y);8>S?(S=u(Math.pow(y,S)),A=A.j(S).add(u(E))):(A=A.j(w),A=A.add(u(E)))}return A}var p=c(0),g=c(1),v=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-N(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(P(this))return"-"+N(this).toString(I);for(var y=u(Math.pow(I,6)),w=this,A="";;){var R=j(w,y).g;w=V(w,R.j(y));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=R,C(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=V(this,I),P(I)?-1:C(I)?0:1};function N(I){for(var y=I.g.length,w=[],A=0;A<y;A++)w[A]=~I.g[A];return new o(w,~I.h).add(g)}n.abs=function(){return P(this)?N(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(I.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,w[R]=E<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(I,y){return I.add(N(y))}n.j=function(I){if(C(this)||C(I))return p;if(P(this))return P(I)?N(this).j(N(I)):N(N(this).j(I));if(P(I))return N(this.j(N(I)));if(0>this.l(v)&&0>I.l(v))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,vt=I.i(R)>>>16,xt=I.i(R)&65535;w[2*A+2*R]+=E*xt,F(w,2*A+2*R),w[2*A+2*R+1]+=S*xt,F(w,2*A+2*R+1),w[2*A+2*R+1]+=E*vt,F(w,2*A+2*R+1),w[2*A+2*R+2]+=S*vt,F(w,2*A+2*R+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function F(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function L(I,y){this.g=I,this.h=y}function j(I,y){if(C(y))throw Error("division by zero");if(C(I))return new L(p,p);if(P(I))return y=j(N(I),y),new L(N(y.g),N(y.h));if(P(y))return y=j(I,N(y)),new L(N(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=y;0>=A.l(I);)w=oe(w),A=oe(A);var R=K(w,1),S=K(A,1);for(A=K(A,2),w=K(w,2);!C(A);){var E=S.add(A);0>=E.l(I)&&(R=R.add(w),S=E),A=K(A,1),w=K(w,1)}return y=V(I,R.j(y)),new L(R,y)}for(R=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=u(w),E=S.j(y);P(E)||0<E.l(I);)w-=A,S=u(w),E=S.j(y);C(S)&&(S=g),R=R.add(S),I=V(I,E)}return new L(R,I)}n.A=function(I){return j(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function oe(I){for(var y=I.g.length+1,w=[],A=0;A<y;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function K(I,y){var w=y>>5;y%=32;for(var A=I.g.length-w,R=[],S=0;S<A;S++)R[S]=0<y?I.i(S+w)>>>y|I.i(S+w+1)<<32-y:I.i(S+w);return new o(R,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Bm=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ss=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $m,jm,ir,qm,Bo,gc,Hm,zm,Wm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(a,h){if(h)e:{var d=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return r(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,O){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return h.prototype[b].apply(m,z)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const b=a.length||0,O=m.length||0;a.length=b+O;for(let z=0;z<O;z++)a[b+z]=m[z]}else a.push(m)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var oe=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function K(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function S(a){l.setTimeout(()=>{throw a},0)}function E(){var a=bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class vt{constructor(){this.h=this.g=null}add(h,d){const m=xt.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var xt=new V(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,bt=new vt,zt=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){S(d)}var h=xt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}fe=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function sn(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{j(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Xe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}C(sn,$e);var Xe={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,h,d,m,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=b,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,m,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=_(a,h,m,b);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new Y(h,this.src,O,!!m,b),h.fa=d,a.push(h)),h};function Oe(a,h){var d=h.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(m,b,1),O&&(Z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _(a,h,d,m){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==m)return b}return-1}var T="closure_lm_"+(1e6*Math.random()|0),k={};function M(a,h,d,m,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)M(a,h[O],d,m,b);return null}return d=ne(d),a&&a[x]?a.K(h,d,u(m)?!!m.capture:!!m,b):D(a,h,d,!1,m,b)}function D(a,h,d,m,b,O){if(!h)throw Error("Invalid event type");var z=u(b)?!!b.capture:!!b,De=X(a);if(De||(a[T]=De=new me(a)),d=De.add(h,d,m,z,O),d.proxy)return d;if(m=q(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Dn||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),m,b);else if(a.attachEvent)a.attachEvent(H(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q(){function a(d){return h.call(a.src,a.listener,d)}const h=U;return a}function G(a,h,d,m,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)G(a,h[O],d,m,b);else m=u(m)?!!m.capture:!!m,d=ne(d),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=_(O,d,m,b),-1<d&&(Z(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=_(h,d,m,b)),(d=-1<a?h[a]:null)&&$(d))}function $(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])Oe(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(H(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=X(h))?(Oe(d,a),d.h==0&&(d.src=null,h[T]=null)):Z(a)}}}function H(a){return a in k?k[a]:k[a]="on"+a}function U(a,h){if(a.da)a=!0;else{h=new sn(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&$(a),a=d.call(m,h)}return a}function X(a){return a=a[T],a instanceof me?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function te(){Be.call(this),this.i=new me(this),this.M=this,this.F=null}C(te,Be),te.prototype[x]=!0,te.prototype.removeEventListener=function(a,h,d,m){G(this,a,h,d,m)};function ie(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var b=h;h=new $e(m,a),A(h,b)}if(b=!0,d)for(var O=d.length-1;0<=O;O--){var z=h.g=d[O];b=Se(z,m,!0,h)&&b}if(z=h.g=a,b=Se(z,m,!0,h)&&b,b=Se(z,m,!1,h)&&b,d)for(O=0;O<d.length;O++)z=h.g=d[O],b=Se(z,m,!1,h)&&b}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)Z(d[m]);delete a.g[h],a.h--}}this.F=null},te.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},te.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Se(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==d){var De=z.listener,it=z.ha||z.src;z.fa&&Oe(a.i,z),b=De.call(it,m)!==!1&&b}}return b&&!m.defaultPrevented}function Ee(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function He(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,He(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Pt extends Be{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(a){Be.call(this),this.h=a,this.g={}}C(Lt,Be);var xi=[];function xn(a){K(a.g,function(h,d){this.g.hasOwnProperty(d)&&$(h)},a),a.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),xn(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=l.JSON.stringify,Et=l.JSON.parse,Vt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qs(){}qs.prototype.h=null;function wh(a){return a.h||(a.h=a.i())}function Ih(){}var Mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){$e.call(this,"d")}C(tl,$e);function nl(){$e.call(this,"c")}C(nl,$e);var hs={},Ah=null;function io(){return Ah=Ah||new te}hs.La="serverreachability";function Ch(a){$e.call(this,hs.La,a)}C(Ch,$e);function Li(a){const h=io();ie(h,new Ch(h))}hs.STAT_EVENT="statevent";function Rh(a,h){$e.call(this,hs.STAT_EVENT,a),this.stat=h}C(Rh,$e);function Tt(a){const h=io();ie(h,new Rh(h,a))}hs.Ma="timingevent";function Sh(a,h){$e.call(this,hs.Ma,a),this.size=h}C(Sh,$e);function Vi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function Cv(a,h,d,m,b,O){a.info(function(){if(a.g)if(O)for(var z="",De=O.split("&"),it=0;it<De.length;it++){var Ae=De[it].split("=");if(1<Ae.length){var ct=Ae[0];Ae=Ae[1];var ut=ct.split("_");z=2<=ut.length&&ut[1]=="type"?z+(ct+"="+Ae+"&"):z+(ct+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function Rv(a,h,d,m,b,O,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+h+`
`+d+`
`+O+" "+z})}function Hs(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+bv(a,d)+(m?" "+m:"")})}function Sv(a,h){a.info(function(){return"TIMEOUT: "+h})}Fi.prototype.info=function(){};function bv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return js(d)}catch{return h}}var ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sl;function oo(){}C(oo,qs),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},sl=new oo;function Mn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}var Nh={},il={};function rl(a,h,d){a.L=1,a.v=uo(vn(h)),a.m=d,a.P=!0,kh(a,null)}function kh(a,h){a.F=Date.now(),ao(a),a.A=vn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),zh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Ph,a.g=uf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Pt(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(xi[0]=b.toString()),b=xi);for(var O=0;O<b.length;O++){var z=M(d,b[O],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Li(),Cv(a.i,a.u,a.A,a.l,a.R,a.m)}Mn.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=En(this.g);var h=this.g.Ba();const Ks=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Jh(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Ks?Li(3):Li(2)),ol(this);var d=this.g.Z();this.X=d;t:if(Oh(this)){var m=Jh(this.g);a="";var b=m.length,O=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),Ui(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(O&&h==b-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Rv(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var De,it=this.g;if((De=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(De)){var Ae=De;break t}}Ae=null}if(d=Ae)Hs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,d);else{this.o=!1,this.s=3,Tt(12),fs(this),Ui(this);break e}}if(this.P){d=!0;let Wt;for(;!this.J&&this.C<z.length;)if(Wt=Pv(this,z),Wt==il){ut==4&&(this.s=4,Tt(14),d=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Nh){this.s=4,Tt(15),Hs(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Hs(this.i,this.l,Wt,null),al(this,Wt);if(Oh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Hs(this.i,this.l,z,"[Invalid Chunked Response]"),fs(this),Ui(this);else if(0<z.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),dl(ct),ct.M=!0,Tt(11))}}else Hs(this.i,this.l,z,null),al(this,z);ut==4&&fs(this),this.o&&!this.J&&(ut==4?of(this.j,this):(this.o=!1,ao(this)))}else Wv(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),fs(this),Ui(this)}}}catch{}finally{}};function Oh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Pv(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?il:(d=Number(h.substring(d,m)),isNaN(d)?Nh:(m+=1,m+d>h.length?il:(h=h.slice(m,m+d),a.C=m+d,h)))}Mn.prototype.cancel=function(){this.J=!0,fs(this)};function ao(a){a.S=Date.now()+a.I,Dh(a,a.I)}function Dh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(g(a.ba,a),h)}function ol(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Sv(this.i,this.A),this.L!=2&&(Li(),Tt(17)),fs(this),this.s=2,Ui(this)):Dh(this,this.S-a)};function Ui(a){a.j.G==0||a.J||of(a.j,a)}function fs(a){ol(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function al(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ll(d.h,a))){if(!a.K&&ll(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)mo(d),po(d);else break e;fl(d),Tt(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Vi(g(d.Za,d),6e3));if(1>=Lh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ps(d,11)}else if((a.K||d.g==a)&&mo(d),!F(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let Ae=b[h];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const ct=Ae[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const ut=Ae[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const Ks=Ae[5];Ks!=null&&typeof Ks=="number"&&0<Ks&&(m=1.5*Ks,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Wt=a.g;if(Wt){const yo=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var O=m.h;O.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(cl(O,O.h),O.h=null))}if(m.D){const pl=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(m.ya=pl,xe(m.I,m.D,pl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=cf(m,m.J?m.ia:null,m.W),z.K){Vh(m.h,z);var De=z,it=m.L;it&&(De.I=it),De.B&&(ol(De),ao(De)),m.g=z}else sf(m);0<d.i.length&&go(d)}else Ae[0]!="stop"&&Ae[0]!="close"||ps(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?ps(d,7):hl(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}Li(4)}catch{}}var Nv=class{constructor(a,h){this.g=a,this.map=h}};function xh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lh(a){return a.h?1:a.g?a.g.size:0}function ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cl(a,h){a.g?a.g.add(h):a.h=h}function Vh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xh.prototype.cancel=function(){if(this.i=Fh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function kv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function Ov(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Uh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Ov(a),m=kv(a),b=m.length,O=0;O<b;O++)h.call(void 0,m[O],d&&d[O],a)}var Bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var O=a[d].substring(0,m);b=a[d].substring(m+1)}else O=a[d];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ds){this.h=a.h,lo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.s),this.l=a.l;var h=a.i,d=new ji;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),$h(this,d),this.m=a.m}else a&&(h=String(a).match(Bh))?(this.h=!1,lo(this,h[1]||"",!0),this.o=Bi(h[2]||""),this.g=Bi(h[3]||"",!0),co(this,h[4]),this.l=Bi(h[5]||"",!0),$h(this,h[6]||"",!0),this.m=Bi(h[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}ds.prototype.toString=function(){var a=[],h=this.j;h&&a.push($i(h,jh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push($i(h,jh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push($i(d,d.charAt(0)=="/"?Lv:Mv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",$i(d,Fv)),a.join("")};function vn(a){return new ds(a)}function lo(a,h,d){a.j=d?Bi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $h(a,h,d){h instanceof ji?(a.i=h,Uv(a.i,a.h)):(d||(h=$i(h,Vv)),a.i=new ji(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function uo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,xv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jh=/[#\/\?@]/g,Mv=/[#\?:]/g,Lv=/[#\?]/g,Vv=/[#\?@]/g,Fv=/#/g;function ji(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&Dv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=ji.prototype,n.add=function(a,h){Ln(this),this.i=null,a=zs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qh(a,h){Ln(a),h=zs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Hh(a,h){return Ln(a),h=zs(a,h),a.g.has(h)}n.forEach=function(a,h){Ln(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(h,b,m,this)},this)},this)},n.na=function(){Ln(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const b=a[m];for(let O=0;O<b.length;O++)d.push(h[m])}return d},n.V=function(a){Ln(this);let h=[];if(typeof a=="string")Hh(this,a)&&(h=h.concat(this.g.get(zs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},n.set=function(a,h){return Ln(this),this.i=null,a=zs(this,a),Hh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function zh(a,h,d){qh(a,h),0<d.length&&(a.i=null,a.g.set(zs(a,h),P(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const O=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var b=O;z[m]!==""&&(b+="="+encodeURIComponent(String(z[m]))),a.push(b)}}return this.i=a.join("&")};function zs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Uv(a,h){h&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(qh(this,m),zh(this,b,d))},a)),a.j=h}function Bv(a,h){const d=new Fi;if(l.Image){const m=new Image;m.onload=v(Vn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=v(Vn,d,"TestLoadImage: error",!1,h,m),m.onabort=v(Vn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(Vn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function $v(a,h){const d=new Fi,m=new AbortController,b=setTimeout(()=>{m.abort(),Vn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(b),O.ok?Vn(d,"TestPingServer: ok",!0,h):Vn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Vn(d,"TestPingServer: error",!1,h)})}function Vn(a,h,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function jv(){this.g=new Vt}function qv(a,h,d){const m=d||"";try{Uh(a,function(b,O){let z=b;u(b)&&(z=js(b)),h.push(m+O+"="+encodeURIComponent(z))})}catch(b){throw h.push(m+"type="+encodeURIComponent("_badmap")),b}}function qi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(qi,qs),qi.prototype.g=function(){return new ho(this.l,this.j)},qi.prototype.i=function(a){return function(){return a}}({});function ho(a,h){te.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ho,te),n=ho.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,zi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Hi(this):zi(this),this.readyState==3&&Wh(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Hi(this))},n.Qa=function(a){this.g&&(this.response=a,Hi(this))},n.ga=function(){this.g&&Hi(this)};function Hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zi(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kh(a){let h="";return K(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function ul(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Kh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function je(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(je,te);var Hv=/^https?$/i,zv=["POST","PUT"];n=je.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?wh(this.o):wh(sl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Gh(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zv,h,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Gh(this,O)}};function Gh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Qh(a),fo(a)}function Qh(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),fo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Yh(this):this.bb())},n.bb=function(){Yh(this)};function Yh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)Ee(a.Ea,0,a);else if(ie(a,"readystatechange"),En(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=z===0){var b=String(a.D).match(Bh)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!Hv.test(b?b.toLowerCase():"")}d=m}if(d)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var O=2<En(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Qh(a)}}finally{fo(a)}}}}function fo(a,h){if(a.g){Xh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ie(a,"ready");try{d.onreadystatechange=m}catch{}}}function Xh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Et(h)}};function Jh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wv(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=R(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[b]||[];h[b]=O,O.push(d)}I(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Zh(a){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,a),this.cb=Wi("retryDelaySeedMs",1e4,a),this.Wa=Wi("forwardChannelMaxRetries",2,a),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xh(a&&a.concurrentRequestLimit),this.Da=new jv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zh.prototype,n.la=8,n.G=1,n.connect=function(a,h,d,m){Tt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=cf(this,null,this.W),go(this)};function hl(a){if(ef(a),a.G==3){var h=a.U++,d=vn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),Ki(a,d),h=new Mn(a,a.j,h),h.L=2,h.v=uo(vn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=uf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ao(h)}lf(a)}function po(a){a.g&&(dl(a),a.g.cancel(),a.g=null)}function ef(a){po(a),a.u&&(l.clearTimeout(a.u),a.u=null),mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function go(a){if(!Mh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ge||zt(),fe||(ge(),fe=!0),bt.add(h,a),a.B=0}}function Kv(a,h){return Lh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(g(a.Ga,a,h),af(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Mn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=nf(this,b,h),d=vn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),Ki(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(Kh(O)))+"&"+h:this.m&&ul(d,this.m,O)),cl(this.h,b),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),b.T=!0,rl(b,d,null)):rl(b,d,h),this.G=2}}else this.G==3&&(a?tf(this,a):this.i.length==0||Mh(this.h)||tf(this))};function tf(a,h){var d;h?d=h.l:d=a.U++;const m=vn(a.I);xe(m,"SID",a.K),xe(m,"RID",d),xe(m,"AID",a.T),Ki(a,m),a.m&&a.o&&ul(m,a.m,a.o),d=new Mn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=nf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cl(a.h,d),rl(d,m,h)}function Ki(a,h){a.H&&K(a.H,function(d,m){xe(h,m,d)}),a.l&&Uh({},function(d,m){xe(h,m,d)})}function nf(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=b[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let De=!0;for(let it=0;it<d;it++){let Ae=b[it].g;const ct=b[it].map;if(Ae-=O,0>Ae)O=Math.max(0,b[it].g-100),De=!1;else try{qv(ct,z,"req"+Ae+"_")}catch{m&&m(ct)}}if(De){m=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function sf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ge||zt(),fe||(ge(),fe=!0),bt.add(h,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(g(a.Fa,a),af(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),po(this),rf(this))};function dl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rf(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Ki(a,h),a.m&&a.o&&ul(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=uo(vn(h)),d.m=null,d.P=!0,kh(d,a)}n.Za=function(){this.C!=null&&(this.C=null,po(this),fl(this),Tt(19))};function mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function of(a,h){var d=null;if(a.g==h){mo(a),dl(a),a.g=null;var m=2}else if(ll(a.h,h))d=h.D,Vh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;m=io(),ie(m,new Sh(m,d)),go(a)}else sf(a);else if(b=h.s,b==3||b==0&&0<h.X||!(m==1&&Kv(a,h)||m==2&&fl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:ps(a,5);break;case 4:ps(a,10);break;case 3:ps(a,6);break;default:ps(a,2)}}}function af(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function ps(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const b=!m;m=new ds(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(m,"https"),uo(m),b?Bv(m.toString(),d):$v(m.toString(),d)}else Tt(2);a.G=0,a.l&&a.l.sa(h),lf(a),ef(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function lf(a){if(a.G=0,a.ka=[],a.l){const h=Fh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function cf(a,h,d){var m=d instanceof ds?vn(d):new ds(d);if(m.g!="")h&&(m.g=h+"."+m.g),co(m,m.s);else{var b=l.location;m=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new ds(null);m&&lo(O,m),h&&(O.g=h),b&&co(O,b),d&&(O.l=d),m=O}return d=a.D,h=a.ya,d&&h&&xe(m,d,h),xe(m,"VER",a.la),Ki(a,m),m}function uf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new qi({eb:d})):new je(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hf(){}n=hf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){te.call(this),this.g=new Zh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ws(this)}C(Nt,te),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){hl(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=js(a),a=d);h.i.push(new Nv(h.Ya++,a)),h.G==3&&go(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,Nt.aa.N.call(this)};function ff(a){tl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(ff,tl);function df(){nl.call(this),this.status=1}C(df,nl);function Ws(a){this.g=a}C(Ws,hf),Ws.prototype.ua=function(){ie(this.g,"a")},Ws.prototype.ta=function(a){ie(this.g,new ff(a))},Ws.prototype.sa=function(a){ie(this.g,new df)},Ws.prototype.ra=function(){ie(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Wm=function(){return new _o},zm=function(){return io()},Hm=hs,gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,Bo=ro,bh.COMPLETE="complete",qm=bh,Ih.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",te.prototype.listen=te.prototype.K,ir=Ih,jm=qi,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,$m=je}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Wr("@firebase/firestore");function Yi(){return Ns.logLevel}function ee(n,...e){if(Ns.logLevel<=de.DEBUG){const t=e.map(Eu);Ns.debug(`Firestore (${bi}): ${n}`,...t)}}function Pn(n,...e){if(Ns.logLevel<=de.ERROR){const t=e.map(Eu);Ns.error(`Firestore (${bi}): ${n}`,...t)}}function mi(n,...e){if(Ns.logLevel<=de.WARN){const t=e.map(Eu);Ns.warn(`Firestore (${bi}): ${n}`,...t)}}function Eu(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+n;throw Pn(e),new Error(e)}function Ge(n,e){n||he()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ft.UNAUTHENTICATED))}shutdown(){}}class u0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class h0{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new Km(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new ft(e)}}class f0{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new f0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const s=r=>{r.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string"),this.R=t.token,new p0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function m0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=m0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function be(n,e){return n<e?-1:n>e?1:0}function _i(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new At(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new At(0,0))}static max(){return new ce(new At(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,s){t===void 0?t=0:t>e.length&&he(),s===void 0?s=e.length-t:s>e.length-t&&he(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class qe extends Fr{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Fr{construct(e,t,s){return new It(e,t,s)}static isValidIdentifier(e){return y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(qe.fromString(e))}static fromName(e){return new ae(qe.fromString(e).popFirst(5))}static empty(){return new ae(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new qe(e.slice()))}}function v0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(s===1e9?new At(t+1,0):new At(t,s));return new is(i,ae.empty(),e)}function E0(n){return new is(n.readTime,n.key,-1)}class is{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new is(ce.min(),ae.empty(),-1)}static max(){return new is(ce.max(),ae.empty(),-1)}}function T0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
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
 */const w0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==w0)throw n;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let i=0,r=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(i=>i?B.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new B((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(f=>{o[u]=f,++l,l===r&&s(o)},f=>i(f))}})}static doWhile(e,t){return new B((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function A0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wu.oe=-1;function Ua(n){return n==null}function mc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ba(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function C0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class _c{constructor(e,t){this.comparator=e,this.root=t||es.EMPTY}insert(e,t){return new _c(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,es.BLACK,null,null))}remove(e){return new _c(this.comparator,this.root.remove(e,this.comparator).copy(null,null,es.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}},Ro=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},es=class wn{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??wn.RED,this.left=i??wn.EMPTY,this.right=r??wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new wn(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return wn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}};es.EMPTY=null,es.RED=!0,es.BLACK=!1;es.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,t,s,i,r){return this}insert(e,t,s){return new es(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ad(this.data.getIterator())}getIteratorFrom(e){return new Ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new at(this.comparator);return t.data=e,t}}class Ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new at(It.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Gm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Gm("Invalid base64 string: "+r):r}}(e);return new yt(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const R0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(n){if(Ge(!!n),typeof n=="string"){let e=0;const t=R0.exec(n);if(Ge(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(n.seconds),nanos:Ke(n.nanos)}}function Ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ks(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
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
 */function Iu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Au(n){const e=n.mapValue.fields.__previous_value__;return Iu(e)?Au(e):e}function Ur(n){const e=rs(n.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t,s,i,r,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Br{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Iu(n)?4:b0(n)?9007199254740991:10:he()}function gn(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ur(n).isEqual(Ur(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=rs(i.timestampValue),l=rs(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return ks(i.bytesValue).isEqual(ks(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Ke(i.geoPointValue.latitude)===Ke(r.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ke(i.integerValue)===Ke(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ke(i.doubleValue),l=Ke(r.doubleValue);return o===l?mc(o)===mc(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return _i(n.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Id(o)!==Id(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!gn(o[c],l[c])))return!1;return!0}(n,e);default:return he()}}function $r(n,e){return(n.values||[]).find(t=>gn(t,e))!==void 0}function yi(n,e){if(n===e)return 0;const t=Os(n),s=Os(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=Ke(r.integerValue||r.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Cd(n.timestampValue,e.timestampValue);case 4:return Cd(Ur(n),Ur(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(r,o){const l=ks(r),c=ks(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=be(l[u],c[u]);if(f!==0)return f}return be(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=be(Ke(r.latitude),Ke(o.latitude));return l!==0?l:be(Ke(r.longitude),Ke(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const l=r.values||[],c=o.values||[];for(let u=0;u<l.length&&u<c.length;++u){const f=yi(l[u],c[u]);if(f)return f}return be(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===So.mapValue&&o===So.mapValue)return 0;if(r===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=be(c[p],f[p]);if(g!==0)return g;const v=yi(l[c[p]],u[f[p]]);if(v!==0)return v}return be(c.length,f.length)}(n.mapValue,e.mapValue);default:throw he()}}function Cd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=rs(n),s=rs(e),i=be(t.seconds,s.seconds);return i!==0?i:be(t.nanos,s.nanos)}function vi(n){return yc(n)}function yc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=rs(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ks(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ae.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=yc(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${yc(t.fields[o])}`;return i+"}"}(n.mapValue):he()}function vc(n){return!!n&&"integerValue"in n}function Cu(n){return!!n&&"arrayValue"in n}function Rd(n){return!!n&&"nullValue"in n}function Sd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ol(n){return!!n&&"mapValue"in n}function _r(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ba(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=_r(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_r(n.arrayValue.values[t]);return e}return Object.assign({},n)}function b0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ol(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(t)}setAll(e){let t=It.emptyPath(),s={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=l.popLast()}o?s[l.lastSegment()]=_r(o):i.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Ol(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Ba(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new cn(_r(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,s,i,r,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ce.min(),ce.min(),ce.min(),cn.empty(),0)}static newFoundDocument(e,t,s,i){return new dt(e,1,t,ce.min(),s,i,0)}static newNoDocument(e,t){return new dt(e,2,t,ce.min(),ce.min(),cn.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,ce.min(),ce.min(),cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,t){this.position=e,this.inclusive=t}}function bd(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),t.key):s=yi(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class na{constructor(e,t="asc"){this.field=e,this.dir=t}}function P0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qm{}class Qe extends Qm{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new k0(e,t,s):t==="array-contains"?new x0(e,s):t==="in"?new M0(e,s):t==="not-in"?new L0(e,s):t==="array-contains-any"?new V0(e,s):new Qe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new O0(e,s):new D0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yi(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(yi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends Qm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new mn(e,t)}matches(e){return Ym(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ym(n){return n.op==="and"}function Xm(n){return N0(n)&&Ym(n)}function N0(n){for(const e of n.filters)if(e instanceof mn)return!1;return!0}function Ec(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+vi(n.value);if(Xm(n))return n.filters.map(e=>Ec(e)).join(",");{const e=n.filters.map(t=>Ec(t)).join(",");return`${n.op}(${e})`}}function Jm(n,e){return n instanceof Qe?function(s,i){return i instanceof Qe&&s.op===i.op&&s.field.isEqual(i.field)&&gn(s.value,i.value)}(n,e):n instanceof mn?function(s,i){return i instanceof mn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,l)=>r&&Jm(o,i.filters[l]),!0):!1}(n,e):void he()}function Zm(n){return n instanceof Qe?function(t){return`${t.field.canonicalString()} ${t.op} ${vi(t.value)}`}(n):n instanceof mn?function(t){return t.op.toString()+" {"+t.getFilters().map(Zm).join(" ,")+"}"}(n):"Filter"}class k0 extends Qe{constructor(e,t,s){super(e,t,s),this.key=ae.fromName(s.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class O0 extends Qe{constructor(e,t){super(e,"in",t),this.keys=e_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class D0 extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=e_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ae.fromName(s.referenceValue))}class x0 extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cu(t)&&$r(t.arrayValue,this.value)}}class M0 extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class L0 extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$r(this.value.arrayValue,t)}}class V0 extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$r(this.value.arrayValue,s))}}/**
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
 */class F0{constructor(e,t=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function Nd(n,e=null,t=[],s=[],i=null,r=null,o=null){return new F0(n,e,t,s,i,r,o)}function Ru(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ec(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>vi(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>vi(s)).join(",")),e.ue=t}return e.ue}function Su(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!P0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pd(n.startAt,e.startAt)&&Pd(n.endAt,e.endAt)}function Tc(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function U0(n,e,t,s,i,r,o,l){return new $a(n,e,t,s,i,r,o,l)}function ja(n){return new $a(n)}function kd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function B0(n){return n.collectionGroup!==null}function yr(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(It.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new na(r,s))}),t.has(It.keyField().canonicalString())||e.ce.push(new na(It.keyField(),s))}return e.ce}function fn(n){const e=Ie(n);return e.le||(e.le=$0(e,yr(n))),e.le}function $0(n,e){if(n.limitType==="F")return Nd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new na(i.field,r)});const t=n.endAt?new ta(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ta(n.startAt.position,n.startAt.inclusive):null;return Nd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function wc(n,e,t){return new $a(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qa(n,e){return Su(fn(n),fn(e))&&n.limitType===e.limitType}function t_(n){return`${Ru(fn(n))}|lt:${n.limitType}`}function Ys(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>Zm(i)).join(", ")}]`),Ua(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>vi(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>vi(i)).join(",")),`Target(${s})`}(fn(n))}; limitType=${n.limitType})`}function Ha(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ae.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of yr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,l,c){const u=bd(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,yr(s),i)||s.endAt&&!function(o,l,c){const u=bd(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,yr(s),i))}(n,e)}function j0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function n_(n){return(e,t)=>{let s=!1;for(const i of yr(n)){const r=q0(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function q0(n,e,t){const s=n.field.isKeyField()?ae.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?yi(c,u):he()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ba(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new st(ae.comparator);function os(){return H0}const s_=new st(ae.comparator);function rr(...n){let e=s_;for(const t of n)e=e.insert(t.key,t);return e}function z0(n){let e=s_;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ts(){return vr()}function i_(){return vr()}function vr(){return new Pi(n=>n.toString(),(n,e)=>n.isEqual(e))}const W0=new at(ae.comparator);function we(...n){let e=W0;for(const t of n)e=e.add(t);return e}const K0=new at(be);function G0(){return K0}/**
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
 */function Q0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function Y0(n){return{integerValue:""+n}}/**
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
 */class za{constructor(){this._=void 0}}function X0(n,e,t){return n instanceof Ic?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Iu(r)&&(r=Au(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof sa?r_(n,e):n instanceof ia?o_(n,e):function(i,r){const o=Z0(i,r),l=Od(o)+Od(i.Pe);return vc(o)&&vc(i.Pe)?Y0(l):Q0(i.serializer,l)}(n,e)}function J0(n,e,t){return n instanceof sa?r_(n,e):n instanceof ia?o_(n,e):t}function Z0(n,e){return n instanceof Ac?function(s){return vc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ic extends za{}class sa extends za{constructor(e){super(),this.elements=e}}function r_(n,e){const t=a_(e);for(const s of n.elements)t.some(i=>gn(i,s))||t.push(s);return{arrayValue:{values:t}}}class ia extends za{constructor(e){super(),this.elements=e}}function o_(n,e){let t=a_(e);for(const s of n.elements)t=t.filter(i=>!gn(i,s));return{arrayValue:{values:t}}}class Ac extends za{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Od(n){return Ke(n.integerValue||n.doubleValue)}function a_(n){return Cu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function eC(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof sa&&i instanceof sa||s instanceof ia&&i instanceof ia?_i(s.elements,i.elements,gn):s instanceof Ac&&i instanceof Ac?gn(s.Pe,i.Pe):s instanceof Ic&&i instanceof Ic}(n.transform,e.transform)}class bs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bs}static exists(e){return new bs(void 0,e)}static updateTime(e){return new bs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bu{}function l_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nC(n.key,bs.none()):new Pu(n.key,n.data,bs.none());{const t=n.data,s=cn.empty();let i=new at(It.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wa(n.key,s,new Wn(i.toArray()),bs.none())}}function tC(n,e,t){n instanceof Pu?function(i,r,o){const l=i.value.clone(),c=xd(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Wa?function(i,r,o){if(!$o(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=xd(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(c_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,s){return n instanceof Pu?function(r,o,l,c){if(!$o(r.precondition,o))return l;const u=r.value.clone(),f=Md(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Wa?function(r,o,l,c){if(!$o(r.precondition,o))return l;const u=Md(r.fieldTransforms,c,o),f=o.data;return f.setAll(c_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(r,o,l){return $o(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Dd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&_i(s,i,(r,o)=>eC(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pu extends bu{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wa extends bu{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function c_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function xd(n,e,t){const s=new Map;Ge(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,J0(o,l,t[i]))}return s}function Md(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,X0(r,o,e))}return s}class nC extends bu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&tC(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Er(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Er(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=i_();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(i.key)?null:l;const c=l_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),we())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(t,s)=>Dd(t,s))&&_i(this.baseMutations,e.baseMutations,(t,s)=>Dd(t,s))}}/**
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
 */class iC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,_e;function u_(n){if(n===void 0)return Pn("GRPC error has no .code"),W.UNKNOWN;switch(n){case We.OK:return W.OK;case We.CANCELLED:return W.CANCELLED;case We.UNKNOWN:return W.UNKNOWN;case We.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case We.INTERNAL:return W.INTERNAL;case We.UNAVAILABLE:return W.UNAVAILABLE;case We.UNAUTHENTICATED:return W.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case We.NOT_FOUND:return W.NOT_FOUND;case We.ALREADY_EXISTS:return W.ALREADY_EXISTS;case We.PERMISSION_DENIED:return W.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case We.ABORTED:return W.ABORTED;case We.OUT_OF_RANGE:return W.OUT_OF_RANGE;case We.UNIMPLEMENTED:return W.UNIMPLEMENTED;case We.DATA_LOSS:return W.DATA_LOSS;default:return he()}}(_e=We||(We={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oC(){return new TextEncoder}/**
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
 */const aC=new Ss([4294967295,4294967295],0);function Ld(n){const e=oC().encode(n),t=new Bm;return t.update(e),new Uint8Array(t.digest())}function Vd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ss([t,s],0),new Ss([i,r],0)]}class Nu{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(s<0)throw new or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ss.fromNumber(this.Ie)}Ee(e,t,s){let i=e.add(t.multiply(Ss.fromNumber(s)));return i.compare(aC)===1&&(i=new Ss([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ld(e),[s,i]=Vd(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Nu(r,i,t);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Ld(e),[s,i]=Vd(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Gr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ka(ce.min(),i,new st(be),os(),we())}}class Gr{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Gr(s,t,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,s,i){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=i}}class h_{constructor(e,t){this.targetId=e,this.me=t}}class f_{constructor(e,t,s=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Fd{constructor(){this.fe=0,this.ge=Bd(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=we(),t=we(),s=we();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:he()}}),new Gr(this.pe,this.ye,e,t,s)}ve(){this.we=!1,this.ge=Bd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lC{constructor(e){this.Le=e,this.Be=new Map,this.ke=os(),this.qe=Ud(),this.Qe=new st(be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:he()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,s=e.me.count,i=this.Je(t);if(i){const r=i.target;if(Tc(r))if(s===0){const o=new ae(r.path);this.Ue(t,o,dt.newNoDocument(o,ce.min()))}else Ge(s===1);else{const o=this.Ye(t);if(o!==s){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,l;try{o=ks(s).toUint8Array()}catch(c){if(c instanceof Gm)return mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nu(o,i,r)}catch(c){return mi(c instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((r,o)=>{const l=this.Je(o);if(l){if(r.current&&Tc(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,dt.newNoDocument(c,e))}r.be&&(t.set(o,r.Ce()),r.ve())}});let s=we();this.qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new Ka(e,t,this.Qe,this.ke,s);return this.ke=os(),this.qe=Ud(),this.Qe=new st(be),i}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new at(be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ee("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ud(){return new st(ae.comparator)}function Bd(){return new st(ae.comparator)}const cC={asc:"ASCENDING",desc:"DESCENDING"},uC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hC={and:"AND",or:"OR"};class fC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cc(n,e){return n.useProto3Json||Ua(e)?e:{value:e}}function dC(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ri(n){return Ge(!!n),ce.fromTimestamp(function(t){const s=rs(t);return new At(s.seconds,s.nanos)}(n))}function gC(n,e){return Rc(n,e).canonicalString()}function Rc(n,e){const t=function(i){return new qe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function d_(n){const e=qe.fromString(n);return Ge(y_(e)),e}function Dl(n,e){const t=d_(e);if(t.get(1)!==n.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(g_(t))}function p_(n,e){return gC(n.databaseId,e)}function mC(n){const e=d_(n);return e.length===4?qe.emptyPath():g_(e)}function $d(n){return new qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function g_(n){return Ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _C(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(Ge(f===void 0||typeof f=="string"),yt.fromBase64String(f||"")):(Ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),yt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?W.UNKNOWN:u_(u.code);return new re(f,u.message||"")}(o);t=new f_(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Dl(n,s.document.name),r=ri(s.document.updateTime),o=s.document.createTime?ri(s.document.createTime):ce.min(),l=new cn({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(i,r,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];t=new jo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Dl(n,s.document),r=s.readTime?ri(s.readTime):ce.min(),o=dt.newNoDocument(i,r),l=s.removedTargetIds||[];t=new jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Dl(n,s.document),r=s.removedTargetIds||[];t=new jo([],r,i,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new rC(i,r),l=s.targetId;t=new h_(l,o)}}return t}function yC(n,e){return{documents:[p_(n,e.path)]}}function vC(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=p_(n,i);const r=function(u){if(u.length!==0)return __(mn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Xs(g.field),direction:wC(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Cc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:i}}function EC(n){let e=mC(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Ge(s===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(p){const g=m_(p);return g instanceof mn&&Xm(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(C){return new na(Js(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ua(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new ta(v,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new ta(v,g)}(t.endAt)),U0(e,i,o,r,l,"F",c,u)}function TC(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function m_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Js(t.unaryFilter.field);return Qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Js(t.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Js(t.unaryFilter.field);return Qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(t.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(n):n.fieldFilter!==void 0?function(t){return Qe.create(Js(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return mn.create(t.compositeFilter.filters.map(s=>m_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(t.compositeFilter.op))}(n):he()}function wC(n){return cC[n]}function IC(n){return uC[n]}function AC(n){return hC[n]}function Xs(n){return{fieldPath:n.canonicalString()}}function Js(n){return It.fromServerFormat(n.fieldPath)}function __(n){return n instanceof Qe?function(t){if(t.op==="=="){if(Sd(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NAN"}};if(Rd(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sd(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NOT_NAN"}};if(Rd(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(t.field),op:IC(t.op),value:t.value}}}(n):n instanceof mn?function(t){const s=t.getFilters().map(i=>__(i));return s.length===1?s[0]:{compositeFilter:{op:AC(t.op),filters:s}}}(n):he()}function y_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,s,i,r=ce.min(),o=ce.min(),l=yt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.ct=e}}function RC(n){const e=EC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class SC{constructor(){this._n=new bC}addToCollectionParentIndex(e,t){return this._n.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(is.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(is.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class bC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new at(qe.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new at(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ei(0)}static Ln(){return new Ei(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changes=new Pi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Er(s.mutation,i,Wn.empty(),At.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,t,s=we()){const i=Ts();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=rr();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Ts();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,we()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,s,i){let r=os();const o=vr(),l=function(){return vr()}();return t.forEach((c,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Wa)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Er(f.mutation,u,f.mutation.getFieldMask(),At.now())):o.set(u.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),t.forEach((u,f)=>{var p;return l.set(u,new NC(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const s=vr();let i=new st((o,l)=>o-l),r=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let f=s.get(c)||Wn.empty();f=l.applyToLocalView(u,f),s.set(c,f);const p=(i.get(l.batchId)||we()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=i_();f.forEach(g=>{if(!r.has(g)){const v=l_(t.get(g),s.get(g));v!==null&&p.set(g,v),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):B0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):B.resolve(Ts());let l=-1,c=r;return o.next(u=>B.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,we())).next(f=>({batchId:l,changes:z0(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next(s=>{let i=rr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=rr();return this.indexManager.getCollectionParents(e,r).next(l=>B.forEach(l,c=>{const u=function(p,g){return new $a(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=rr();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&Er(f.mutation,u,Wn.empty(),At.now()),Ha(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class OC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return B.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ri(i.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:RC(i.bundledQuery),readTime:ri(i.readTime)}}(t)),B.resolve()}}/**
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
 */class DC{constructor(){this.overlays=new st(ae.comparator),this.hr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ts();return B.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ht(e,t,r)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const i=Ts(),r=t.length+1,o=new ae(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new st((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=Ts(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ts(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return B.resolve(l)}ht(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iC(t,s));let r=this.hr.get(t);r===void 0&&(r=we(),this.hr.set(t,r)),this.hr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.Pr=new at(Ze.Ir),this.Tr=new at(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const s=new Ze(e,t);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Ar(new Ze(e,t))}Rr(e,t){e.forEach(s=>this.removeReference(s,t))}Vr(e){const t=new ae(new qe([])),s=new Ze(t,e),i=new Ze(t,e+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new ae(new qe([])),s=new Ze(t,e),i=new Ze(t,e+1);let r=we();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Ze(e,0),s=this.Pr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ze{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return ae.comparator(e.key,t.key)||be(e.pr,t.pr)}static Er(e,t){return be(e.pr,t.pr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new at(Ze.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sC(r,t,s,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Ze(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,t){return B.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.br(s),r=i<0?0:i;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ze(t,0),i=new Ze(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const l=this.Sr(o.pr);r.push(l)}),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new at(be);return t.forEach(i=>{const r=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],l=>{s=s.add(l.pr)})}),B.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;ae.isDocumentKey(r)||(r=r.child(""));const o=new Ze(new ae(r),0);let l=new at(be);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.pr)),!0)},o),B.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ge(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return B.forEach(t.mutations,i=>{const r=new Ze(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,t){const s=new Ze(t,0),i=this.wr.firstAfterOrEqual(s);return B.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.vr=e,this.docs=function(){return new st(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let s=os();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():dt.newInvalidDocument(i))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=os();const o=t.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||T0(E0(f),s)<=0||(i.has(f.key)||Ha(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(e,t,s,i){he()}Fr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new LC(this)}getSize(e){return B.resolve(this.size)}}class LC extends PC{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.persistence=e,this.Mr=new Pi(t=>Ru(t),Su),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ku,this.targetCount=0,this.Lr=Ei.Nn()}forEachTarget(e,t){return this.Mr.forEach((s,i)=>t(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Or&&(this.Or=t),B.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Ei(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.qn(t),B.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(r).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Mr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.Nr.dr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.Nr.Rr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Nr.gr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t){this.Br={},this.overlays={},this.kr=new wu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VC(this),this.indexManager=new SC,this.remoteDocumentCache=function(i){return new MC(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new CC(t),this.$r=new OC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Br[e.toKey()];return s||(s=new xC(t,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,s){ee("MemoryPersistence","Starting transaction:",e);const i=new UC(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,t){return B.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,t)))}}class UC extends I0{constructor(e){super(),this.currentSequenceNumber=e}}class Ou{constructor(e){this.persistence=e,this.zr=new ku,this.jr=null}static Hr(e){return new Ou(e)}get Jr(){if(this.jr)return this.jr;throw he()}addReference(e,t,s){return this.zr.addReference(s,t),this.Jr.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.zr.removeReference(s,t),this.Jr.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),B.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,s=>{const i=ae.fromPath(s);return this.Yr(e,i).next(r=>{r||t.removeEntry(i,ce.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(s=>{s?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return B.or([()=>B.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.qi=s,this.Qi=i}static Ki(e,t){let s=we(),i=we();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Du(e,t.fromCache,s,i)}}/**
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
 */class BC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $C{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return qI()?8:A0(en())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ji(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new BC;return this.Ji(e,t,o).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,t,o,l.size)})}).next(()=>r.result)}Yi(e,t,s,i){return s.documentReadCount<this.Wi?(Yi()<=de.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ys(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(Yi()<=de.DEBUG&&ee("QueryEngine","Query:",Ys(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(Yi()<=de.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ys(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(t))):B.resolve())}ji(e,t){if(kd(t))return B.resolve(null);let s=fn(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=wc(t,null,"F"),s=fn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=we(...r);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Zi(t,l);return this.Xi(t,u,o,c.readTime)?this.ji(e,wc(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,s,i){return kd(t)||i.isEqual(ce.min())?B.resolve(null):this.zi.getDocuments(e,s).next(r=>{const o=this.Zi(t,r);return this.Xi(t,o,s,i)?B.resolve(null):(Yi()<=de.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ys(t)),this.es(e,o,t,v0(i,-1)).next(l=>l))})}Zi(e,t){let s=new at(n_(e));return t.forEach((i,r)=>{Ha(e,r)&&(s=s.add(r))}),s}Xi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,s){return Yi()<=de.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ys(t)),this.zi.getDocumentsMatchingQuery(e,t,is.min(),s)}es(e,t,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class jC{constructor(e,t,s,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new st(be),this.rs=new Pi(r=>Ru(r),Su),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function qC(n,e,t,s){return new jC(n,e,t,s)}async function v_(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t._s(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],l=[];let c=we();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(s,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:l}))})})}function E_(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function HC(n,e){const t=Ie(n),s=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(t.Qr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(r,f.addedDocuments,p)));let v=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(yt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,s)),i=i.insert(p,v),function(P,N,V){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,v,f)&&l.push(t.Qr.updateTargetData(r,v))});let c=os(),u=we();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(zC(r,o,e.documentUpdates).next(f=>{c=f.cs,u=f.ls})),!s.isEqual(ce.min())){const f=t.Qr.getLastRemoteSnapshotVersion(r).next(p=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(f)}return B.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.ns=i,r))}function zC(n,e,t){let s=we(),i=we();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=os();return t.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function WC(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Qr.getTargetData(s,e).next(r=>r?(i=r,B.resolve(i)):t.Qr.allocateTargetId(s).next(o=>(i=new Kn(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(s.targetId,s),t.rs.set(e,s.targetId)),s})}async function Sc(n,e,t){const s=Ie(n),i=s.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function jd(n,e,t){const s=Ie(n);let i=ce.min(),r=we();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=Ie(c),g=p.rs.get(f);return g!==void 0?B.resolve(p.ns.get(g)):p.Qr.getTargetData(u,f)}(s,o,fn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>s.ts.getDocumentsMatchingQuery(o,e,t?i:ce.min(),t?r:we())).next(l=>(KC(s,j0(e),l),{documents:l,hs:r})))}function KC(n,e,t){let s=n.ss.get(e)||ce.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.ss.set(e,s)}class qd{constructor(){this.activeTargetIds=G0()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GC{constructor(){this.no=new qd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,s){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new qd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QC{io(e){}shutdown(){}}/**
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
 */class Hd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bo=null;function xl(){return bo===null?bo=function(){return 268435456+Math.round(2147483648*Math.random())}():bo++,"0x"+bo.toString(16)}/**
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
 */const YC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class JC extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=s+"://"+t.host,this.So=`projects/${i}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Do(){return!1}Co(t,s,i,r,o){const l=xl(),c=this.vo(t,s.toUriEncodedString());ee("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,r,o),this.Mo(t,c,u,i).then(f=>(ee("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw mi("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(t,s,i,r,o,l){return this.Co(t,s,i,r,o)}Fo(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>t[o]=r),i&&i.headers.forEach((r,o)=>t[o]=r)}vo(t,s){const i=YC[t];return`${this.wo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,s,i){const r=xl();return new Promise((o,l)=>{const c=new $m;c.setWithCredentials(!0),c.listenOnce(qm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bo.NO_ERROR:const f=c.getResponseJson();ee(ht,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case Bo.TIMEOUT:ee(ht,`RPC '${e}' ${r} timed out`),l(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const p=c.getStatus();if(ee(ht,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const C=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(V)>=0?V:W.UNKNOWN}(v.status);l(new re(C,v.message))}else l(new re(W.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(W.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(ht,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);ee(ht,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}Oo(e,t,s){const i=xl(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Wm(),l=zm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new jm({})),this.Fo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const f=r.join("");ee(ht,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,v=!1;const C=new XC({lo:N=>{v?ee(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(ee(ht,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),ee(ht,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),P=(N,V,F)=>{N.listen(V,L=>{try{F(L)}catch(j){setTimeout(()=>{throw j},0)}})};return P(p,ir.EventType.OPEN,()=>{v||(ee(ht,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),P(p,ir.EventType.CLOSE,()=>{v||(v=!0,ee(ht,`RPC '${e}' stream ${i} transport closed`),C.po())}),P(p,ir.EventType.ERROR,N=>{v||(v=!0,mi(ht,`RPC '${e}' stream ${i} transport errored:`,N),C.po(new re(W.UNAVAILABLE,"The operation could not be completed")))}),P(p,ir.EventType.MESSAGE,N=>{var V;if(!v){const F=N.data[0];Ge(!!F);const L=F,j=L.error||((V=L[0])===null||V===void 0?void 0:V.error);if(j){ee(ht,`RPC '${e}' stream ${i} received error:`,j);const oe=j.status;let K=function(w){const A=We[w];if(A!==void 0)return u_(A)}(oe),I=j.message;K===void 0&&(K=W.INTERNAL,I="Unknown error status: "+oe+" with message "+j.message),v=!0,C.po(new re(K,I)),p.close()}else ee(ht,`RPC '${e}' stream ${i} received:`,F),C.yo(F)}}),P(l,Hm.STAT_EVENT,N=>{N.stat===gc.PROXY?ee(ht,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===gc.NOPROXY&&ee(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Ml(){return typeof document<"u"?document:null}/**
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
 */function T_(n){return new fC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=s,this.Lo=i,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),s=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-s);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,s,i,r,o,l,c){this.oi=e,this.Go=s,this.zo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new w_(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Pn(t.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.jo===t&&this.u_(s,i)},s=>{e(()=>{const i=new re(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.c_(i)})})}u_(e,t){const s=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{s(()=>this.listener.Po())}),this.stream.To(()=>{s(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{s(()=>this.c_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eR extends ZC{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=_C(this.serializer,e),s=function(r){if(!("targetChange"in r))return ce.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?ri(o.readTime):ce.min()}(e);return this.listener.h_(t,s)}P_(e){const t={};t.database=$d(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=Tc(c)?{documents:yC(r,c)}:{query:vC(r,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=pC(r,o.resumeToken);const u=Cc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=dC(r,o.snapshotVersion.toTimestamp());const u=Cc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=TC(this.serializer,e);s&&(t.labels=s),this.i_(t)}I_(e){const t={};t.database=$d(this.serializer),t.removeTarget=e,this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,Rc(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new re(W.UNKNOWN,r.toString())})}xo(e,t,s,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Rc(t,s),i,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(W.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class nR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Pn(t),this.y_=!1):ee("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(o=>{s.enqueueAndForget(async()=>{Yr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Ie(c);u.M_.add(4),await Qr(u),u.N_.set("Unknown"),u.M_.delete(4),await Ga(u)}(this))})}),this.N_=new nR(s,i)}}async function Ga(n){if(Yr(n))for(const e of n.x_)await e(!0)}async function Qr(n){for(const e of n.x_)await e(!1)}function I_(n,e){const t=Ie(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Vu(t)?Lu(t):Ni(t).Xo()&&Mu(t,e))}function xu(n,e){const t=Ie(n),s=Ni(t);t.F_.delete(e),s.Xo()&&A_(t,e),t.F_.size===0&&(s.Xo()?s.n_():Yr(t)&&t.N_.set("Unknown"))}function Mu(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ni(n).P_(e)}function A_(n,e){n.L_.xe(e),Ni(n).I_(e)}function Lu(n){n.L_=new lC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ni(n).start(),n.N_.w_()}function Vu(n){return Yr(n)&&!Ni(n).Zo()&&n.F_.size>0}function Yr(n){return Ie(n).M_.size===0}function C_(n){n.L_=void 0}async function iR(n){n.N_.set("Online")}async function rR(n){n.F_.forEach((e,t)=>{Mu(n,e)})}async function oR(n,e){C_(n),Vu(n)?(n.N_.D_(e),Lu(n)):n.N_.set("Unknown")}async function aR(n,e,t){if(n.N_.set("Online"),e instanceof f_&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const l of r.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(s){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zd(n,s)}else if(e instanceof jo?n.L_.Ke(e):e instanceof h_?n.L_.He(e):n.L_.We(e),!t.isEqual(ce.min()))try{const s=await E_(n.localStore);t.compareTo(s)>=0&&await function(r,o){const l=r.L_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.F_.get(u);f&&r.F_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=r.F_.get(c);if(!f)return;r.F_.set(c,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),A_(r,c);const p=new Kn(f.target,c,u,f.sequenceNumber);Mu(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){ee("RemoteStore","Failed to raise snapshot:",s),await zd(n,s)}}async function zd(n,e,t){if(!Kr(e))throw e;n.M_.add(1),await Qr(n),n.N_.set("Offline"),t||(t=()=>E_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Ga(n)})}async function Wd(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const s=Yr(t);t.M_.add(3),await Qr(t),s&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Ga(t)}async function lR(n,e){const t=Ie(n);e?(t.M_.delete(2),await Ga(t)):e||(t.M_.add(2),await Qr(t),t.N_.set("Unknown"))}function Ni(n){return n.B_||(n.B_=function(t,s,i){const r=Ie(t);return r.f_(),new eR(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:iR.bind(null,n),To:rR.bind(null,n),Ao:oR.bind(null,n),h_:aR.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),Vu(n)?Lu(n):n.N_.set("Unknown")):(await n.B_.stop(),C_(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,l=new Fu(e,t,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function R_(n,e){if(Pn("AsyncQueue",`${e}: ${n}`),Kr(n))return new re(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(t,s)=>e(t,s)||ae.comparator(t.key,s.key):(t,s)=>ae.comparator(t.key,s.key),this.keyedMap=rr(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.q_=new st(ae.comparator)}track(e){const t=e.doc.key,s=this.q_.get(t);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(t,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(t):e.type===1&&s.type===2?this.q_=this.q_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):he():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ti{constructor(e,t,s,i,r,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,t,oi.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class uR{constructor(){this.queries=new Pi(e=>t_(e),qa),this.onlineState="Unknown",this.z_=new Set}}async function Uu(n,e){const t=Ie(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.W_()&&e.G_()&&(s=2):(r=new cR,s=e.G_()?0:1);try{switch(s){case 0:r.K_=await t.onListen(i,!0);break;case 1:r.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=R_(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.U_.push(e),e.j_(t.onlineState),r.K_&&e.H_(r.K_)&&$u(t)}async function Bu(n,e){const t=Ie(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.U_.indexOf(e);o>=0&&(r.U_.splice(o,1),r.U_.length===0?i=e.G_()?0:1:!r.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function hR(n,e){const t=Ie(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const l of o.U_)l.H_(i)&&(s=!0);o.K_=i}}s&&$u(t)}function fR(n,e,t){const s=Ie(n),i=s.queries.get(e);if(i)for(const r of i.U_)r.onError(t);s.queries.delete(e)}function $u(n){n.z_.forEach(e=>{e.next()})}var bc,Gd;(Gd=bc||(bc={})).J_="default",Gd.Cache="cache";class ju{constructor(e,t,s){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ti(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const s=t!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.key=e}}class b_{constructor(e){this.key=e}}class dR{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=we(),this.mutatedKeys=we(),this.Ia=n_(e),this.Ta=new oi(this.Ia)}get Ea(){return this.la}da(e,t){const s=t?t.Aa:new Kd,i=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),v=Ha(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?C!==P&&(s.track({type:3,doc:v}),N=!0):this.Ra(g,v)||(s.track({type:2,doc:v}),N=!0,(c&&this.Ia(v,c)>0||u&&this.Ia(v,u)<0)&&(l=!0)):!g&&v?(s.track({type:0,doc:v}),N=!0):g&&!v&&(s.track({type:1,doc:g}),N=!0,(c||u)&&(l=!0)),N&&(v?(o=o.add(v),r=P?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Ta:o,Aa:s,Xi:l,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(v,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return P(v)-P(C)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(s),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,u=c!==this.ha;return this.ha=c,o.length!==0||u?{snapshot:new Ti(this.query,e.Ta,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Kd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=we(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const t=[];return e.forEach(s=>{this.Pa.has(s)||t.push(new b_(s))}),this.Pa.forEach(s=>{e.has(s)||t.push(new S_(s))}),t}pa(e){this.la=e.hs,this.Pa=we();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Ti.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class pR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gR{constructor(e){this.key=e,this.wa=!1}}class mR{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Pi(l=>t_(l),qa),this.Da=new Map,this.Ca=new Set,this.va=new st(ae.comparator),this.Fa=new Map,this.Ma=new ku,this.xa={},this.Oa=new Map,this.Na=Ei.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function _R(n,e,t=!0){const s=D_(n);let i;const r=s.ba.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ya()):i=await P_(s,e,t,!0),i}async function yR(n,e){const t=D_(n);await P_(t,e,!0,!1)}async function P_(n,e,t,s){const i=await WC(n.localStore,fn(e)),r=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return s&&(l=await vR(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&I_(n.remoteStore,i),l}async function vR(n,e,t,s,i){n.Ba=(p,g,v)=>async function(P,N,V,F){let L=N.view.da(V);L.Xi&&(L=await jd(P.localStore,N.query,!1).then(({documents:I})=>N.view.da(I,L)));const j=F&&F.targetChanges.get(N.targetId),oe=F&&F.targetMismatches.get(N.targetId)!=null,K=N.view.applyChanges(L,P.isPrimaryClient,j,oe);return Yd(P,N.targetId,K.fa),K.snapshot}(n,p,g,v);const r=await jd(n.localStore,e,!0),o=new dR(e,r.hs),l=o.da(r.documents),c=Gr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(l,n.isPrimaryClient,c);Yd(n,t,u.fa);const f=new pR(e,t,o);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),u.snapshot}async function ER(n,e,t){const s=Ie(n),i=s.ba.get(e),r=s.Da.get(i.targetId);if(r.length>1)return s.Da.set(i.targetId,r.filter(o=>!qa(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Sc(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&xu(s.remoteStore,i.targetId),Pc(s,i.targetId)}).catch(Tu)):(Pc(s,i.targetId),await Sc(s.localStore,i.targetId,!0))}async function TR(n,e){const t=Ie(n),s=t.ba.get(e),i=t.Da.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),xu(t.remoteStore,s.targetId))}async function N_(n,e){const t=Ie(n);try{const s=await HC(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Fa.get(r);o&&(Ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ge(o.wa):i.removedDocuments.size>0&&(Ge(o.wa),o.wa=!1))}),await O_(t,s,e)}catch(s){await Tu(s)}}function Qd(n,e,t){const s=Ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ba.forEach((r,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=Ie(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.U_)g.j_(l)&&(u=!0)}),u&&$u(c)}(s.eventManager,e),i.length&&s.Sa.h_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wR(n,e,t){const s=Ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Fa.get(e),r=i&&i.key;if(r){let o=new st(ae.comparator);o=o.insert(r,dt.newNoDocument(r,ce.min()));const l=we().add(r),c=new Ka(ce.min(),new Map,new st(be),o,l);await N_(s,c),s.va=s.va.remove(r),s.Fa.delete(e),qu(s)}else await Sc(s.localStore,e,!1).then(()=>Pc(s,e,t)).catch(Tu)}function Pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Da.get(e))n.ba.delete(s),t&&n.Sa.ka(s,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(s=>{n.Ma.containsKey(s)||k_(n,s)})}function k_(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(xu(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),qu(n))}function Yd(n,e,t){for(const s of t)s instanceof S_?(n.Ma.addReference(s.key,e),IR(n,s)):s instanceof b_?(ee("SyncEngine","Document no longer in limbo: "+s.key),n.Ma.removeReference(s.key,e),n.Ma.containsKey(s.key)||k_(n,s.key)):he()}function IR(n,e){const t=e.key,s=t.path.canonicalString();n.va.get(t)||n.Ca.has(s)||(ee("SyncEngine","New document in limbo: "+t),n.Ca.add(s),qu(n))}function qu(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new ae(qe.fromString(e)),s=n.Na.next();n.Fa.set(s,new gR(t)),n.va=n.va.insert(t,s),I_(n.remoteStore,new Kn(fn(ja(t.path)),s,"TargetPurposeLimboResolution",wu.oe))}}async function O_(n,e,t){const s=Ie(n),i=[],r=[],o=[];s.ba.isEmpty()||(s.ba.forEach((l,c)=>{o.push(s.Ba(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient){const f=u&&!u.fromCache;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Du.Ki(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Sa.h_(i),await async function(c,u){const f=Ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,g=>B.forEach(g.qi,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>B.forEach(g.Qi,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Kr(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=f.ns.get(g),C=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(g,P)}}}(s.localStore,r))}async function AR(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const s=await v_(t.localStore,e);t.currentUser=e,function(r,o){r.Oa.forEach(l=>{l.forEach(c=>{c.reject(new re(W.CANCELLED,o))})}),r.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await O_(t,s.us)}}function CR(n,e){const t=Ie(n),s=t.Fa.get(e);if(s&&s.wa)return we().add(s.key);{let i=we();const r=t.Da.get(e);if(!r)return i;for(const o of r){const l=t.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function D_(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=N_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wR.bind(null,e),e.Sa.h_=hR.bind(null,e.eventManager),e.Sa.ka=fR.bind(null,e.eventManager),e}class Xd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=T_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return qC(this.persistence,new $C,e.initialUser,this.serializer)}createPersistence(e){return new FC(Ou.Hr,this.serializer)}createSharedClientState(e){return new GC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RR{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=AR.bind(null,this.syncEngine),await lR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uR}()}createDatastore(e){const t=T_(e.databaseInfo.databaseId),s=function(r){return new JC(r)}(e.databaseInfo);return function(r,o,l,c){return new tR(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,l){return new sR(s,i,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Qd(this.syncEngine,t,0),function(){return Hd.D()?new Hd:new QC}())}createSyncEngine(e,t){return function(i,r,o,l,c,u,f){const p=new mR(i,r,o,l,c,u);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(s){const i=Ie(s);ee("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Qr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=_0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ee("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ee("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=R_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ll(n,e){n.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await v_(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PR(n);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Wd(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Wd(e.remoteStore,i)),n._onlineComponents=e}function bR(n){return n.name==="FirebaseError"?n.code===W.FAILED_PRECONDITION||n.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function PR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bR(t))throw t;mi("Error using user provided cache. Falling back to memory cache: "+t),await Ll(n,new Xd)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Ll(n,new Xd);return n._offlineComponents}async function NR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Jd(n,n._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Jd(n,new RR))),n._onlineComponents}async function ra(n){const e=await NR(n),t=e.eventManager;return t.onListen=_R.bind(null,e.syncEngine),t.onUnlisten=ER.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TR.bind(null,e.syncEngine),t}function kR(n,e,t={}){const s=new Zn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new Hu({next:g=>{o.enqueueAndForget(()=>Bu(r,p));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new ju(ja(l.path),f,{includeMetadataChanges:!0,ra:!0});return Uu(r,p)}(await ra(n),n.asyncQueue,e,t,s)),s.promise}function OR(n,e,t={}){const s=new Zn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const f=new Hu({next:g=>{o.enqueueAndForget(()=>Bu(r,p)),g.fromCache&&c.source==="server"?u.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new ju(l,f,{includeMetadataChanges:!0,ra:!0});return Uu(r,p)}(await ra(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function x_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zd=new Map;function DR(n,e,t,s){if(e===!0&&s===!0)throw new re(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ep(n){if(ae.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xR(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":he()}function ts(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xR(n);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class tp{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zu{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new c0;switch(s.type){case"firstParty":return new d0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Zd.get(t);s&&(ee("ComponentProvider","Removing Datastore"),Zd.delete(t),s.terminate())}(this),Promise.resolve()}}function MR(n,e,t,s={}){var i;const r=(n=ts(n,zu))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=ft.MOCK_USER;else{l=BI(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(u)}n._authCredentials=new u0(new Km(l,c))}}/**
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
 */class Xr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class us{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new us(this.firestore,e,this._key)}}class ai extends Xr{constructor(e,t,s){super(e,t,ja(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new us(this.firestore,null,new ae(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function LR(n,e,...t){if(n=Fs(n),n instanceof zu){const s=qe.fromString(e,...t);return ep(s),new ai(n,null,s)}{if(!(n instanceof us||n instanceof ai))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(qe.fromString(e,...t));return ep(s),new ai(n.firestore,null,s)}}/**
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
 */class VR{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new w_(this,"async_queue_retry"),this.hu=()=>{const t=Ml();t&&ee("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Ml();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Ml();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Kr(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Pn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.uu=!1,s))));return this.iu=t,t}enqueueAfterDelay(e,t,s){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Fu.createAndSchedule(this,e,t,s,r=>this.Eu(r));return this._u.push(i),i}Pu(){this.au&&he()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function np(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class jr extends zu{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=function(){return new VR}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M_(this),this._firestoreClient.terminate()}}function FR(n,e){const t=typeof n=="object"?n:Vm(),s=typeof n=="string"?n:"(default)",i=XA(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=FI("firestore");r&&MR(i,...r)}return i}function Wu(n){return n._firestoreClient||M_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function M_(n){var e,t,s;const i=n._freezeSettings(),r=function(l,c,u,f){return new S0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,x_(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new SR(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(yt.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oa(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class L_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}const UR=new RegExp("[~\\*/\\[\\]]");function BR(n,e,t){if(e.search(UR)>=0)throw sp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new L_(...e.split("."))._internalPath}catch{throw sp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function sp(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new re(W.INVALID_ARGUMENT,r+n+o)}/**
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
 */class F_{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new us(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $R(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(U_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $R extends F_{data(){return super.data()}}function U_(n,e){return typeof e=="string"?BR(n,e):e instanceof L_?e._internalPath:e._delegate._internalPath}/**
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
 */function B_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jR{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw he()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ba(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new V_(Ke(e.latitude),Ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Au(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ur(e));default:return null}}convertTimestamp(e){const t=rs(e);return new At(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Ge(y_(s));const i=new Br(s.get(1),s.get(3)),r=new ae(s.popFirst(5));return i.isEqual(t)||Pn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $_ extends F_{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(U_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class qo extends $_{data(e={}){return super.data(e)}}class j_{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ar(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new qo(this._firestore,this._userDataWriter,s.key,s,new ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new qo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new qo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:qR(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function q_(n){n=ts(n,us);const e=ts(n.firestore,jr);return kR(Wu(e),n._key).then(t=>z_(e,n,t))}class Ku extends jR{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new us(this.firestore,null,t)}}function H_(n){n=ts(n,Xr);const e=ts(n.firestore,jr),t=Wu(e),s=new Ku(e);return B_(n._query),OR(t,n._query).then(i=>new j_(e,s,n,i))}function Gu(n,...e){var t,s,i;n=Fs(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||np(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(np(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(n instanceof us)u=ts(n.firestore,jr),f=ja(n._key.path),c={next:p=>{e[o]&&e[o](z_(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=ts(n,Xr);u=ts(p.firestore,jr),f=p._query;const g=new Ku(u);c={next:v=>{e[o]&&e[o](new j_(u,g,p,v))},error:e[o+1],complete:e[o+2]},B_(n._query)}return function(g,v,C,P){const N=new Hu(P),V=new ju(v,N,C);return g.asyncQueue.enqueueAndForget(async()=>Uu(await ra(g),V)),()=>{N.$a(),g.asyncQueue.enqueueAndForget(async()=>Bu(await ra(g),V))}}(Wu(u),f,l,c)}function z_(n,e,t){const s=t.docs.get(e._key),i=new Ku(n);return new $_(n,i,e._key,s,new ar(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){bi=i})(Si),pn(new tn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new jr(new h0(s.getProvider("auth-internal")),new g0(s.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(u.options.projectId,f)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Ot(wd,"4.6.3",e),Ot(wd,"4.6.3","esm2017")})();var HR="firebase",zR="10.12.2";/**
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
 */Ot(HR,zR,"app");const W_=Lm({apiKey:"AIzaSyBOTQVCXRe3hpL7yTxJe7UQciuz9dXIcww",authDomain:"patches-50288.firebaseapp.com",projectId:"patches-50288",storageBucket:"patches-50288.appspot.com",messagingSenderId:"151697825333",appId:"1:151697825333:web:a39b323b23df2f3d0e1b7c",measurementId:"G-S9R3GQ27YT"}),WR=FR(W_),KR=LR(WR,"patches"),GR={data(){return{images:[{file:"158.png",name:"ryba"},{file:"3061.png",name:"dystrybutor paliwa"},{file:"3522.png",name:"piłka golfowa"},{file:"3520.png",name:"piłka golfowa"},{file:"73.png",name:"ryba"},{file:"2957.png",name:"dystrybutor paliwa"},{file:"3714.png",name:"spadochron"},{file:"1085.png",name:"odtwarzacz kaset"},{file:"1097.png",name:"odtwarzacz kaset"},{file:"664.png",name:"pies"},{file:"3686.png",name:"spadochron"},{file:"690.png",name:"pies"},{file:"2018.png",name:"trąbka"},{file:"2320.png",name:"trąbka"},{file:"2414.png",name:"śmieciarka"},{file:"2420.png",name:"śmieciarka"},{file:"1509.png",name:"piła"},{file:"1486.png",name:"piła"},{file:"1873.png",name:"kościół"},{file:"1851.png",name:"kościół"}],currentImage:0,patches:[],allImagesDisplayed:!1}},methods:{createPatches(){const n=this.$refs.image,e=n.naturalWidth,t=n.naturalHeight,s=16,i=[];for(let r=0;r<t;r+=s)for(let o=0;o<e;o+=s)i.push({x:o,y:r,style:{top:`${r}px`,left:`${o}px`,width:`${s}px`,height:`${s}px`,position:"absolute",border:"1px solid rgba(0, 0, 0, 0.7)"}});this.patches=i},togglePatchSelection(n){this.patches[n].selected=!this.patches[n].selected,this.patches[n].style["background-color"]=this.patches[n].selected?"rgba(255, 0, 0, 0.7)":"rgba(0, 0, 0, 0)"},saveCurrentSelection(){const n=this.patches.map(e=>e.selected===!0);console.log(this.images[this.currentImage],n)},nextImage(){this.saveCurrentSelection(),this.currentImage+1>=this.images.length?this.allImagesDisplayed=!0:(this.currentImage+=1,this.patches=[])}}},QR={key:0,class:"app-container"},YR=Cn("p",null,"Dziękuję za wypełnienie ankiety!",-1),XR=[YR],JR={key:1,class:"app-container"},ZR={class:"image-container"},eS=["src","alt"],tS=["onClick"];function nS(n,e,t,s,i,r){return i.allImagesDisplayed?(Hn(),zn("div",QR,XR)):(Hn(),zn("div",JR,[cm(" Wybierz wszystkie pola, wskazujące na to że na obrazku znajduje się: "),Cn("b",null,oE(i.images[i.currentImage].name),1),Cn("div",ZR,[Cn("img",{src:i.images[i.currentImage].file,alt:i.images[i.currentImage].name,ref:"image",onLoad:e[0]||(e[0]=(...o)=>r.createPatches&&r.createPatches(...o))},null,40,eS),(Hn(!0),zn(on,null,lT(i.patches,(o,l)=>(Hn(),zn("div",{key:l,style:Ra(o.style),class:"patch",onClick:c=>r.togglePatchSelection(l)},null,12,tS))),128))]),Cn("button",{onClick:e[1]||(e[1]=(...o)=>r.nextImage&&r.nextImage(...o))},"Następne zdjęcie")]))}const sS=xa(GR,[["render",nS]]),iS={},rS={style:{width:"100vw",height:"100vh"},src:"poster.pdf"};function oS(n,e){return Hn(),zn("embed",rS)}const aS=xa(iS,[["render",oS]]),lS={methods:{exportVotes:async()=>{const n=[];(await H_(KR)).forEach(o=>{n.push(o.data())});const t=JSON.stringify(n),s=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(s),r=document.createElement("a");r.href=i,r.download="votes.json",r.click()}}},cS=Cn("h1",null,"Export Votes",-1);function uS(n,e,t,s,i,r){return Hn(),zn("div",null,[cS,Cn("button",{onClick:e[0]||(e[0]=(...o)=>r.exportVotes&&r.exportVotes(...o))},"Export Votes")])}const hS=xa(lS,[["render",uS]]),fS=["src"],dS={__name:"FileViewer",setup(n){const e=bI(),t=Ft(()=>e.params.fileName||"default.pdf");return(s,i)=>(Hn(),zn("embed",{style:{width:"100vw",height:"100vh"},src:t.value,type:"application/pdf"},null,8,fS))}},pS=RI({history:eI(),routes:[{path:"/",component:aS},{path:"/ankieta",component:sS},{path:"/export",component:hS},{path:"/file/:fileName",component:dS}]});function K_(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function G_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=G_,Q_=new Ri("auth","Firebase",G_());/**
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
 */const aa=new Wr("@firebase/auth");function mS(n,...e){aa.logLevel<=de.WARN&&aa.warn(`Auth (${Si}): ${n}`,...e)}function Ho(n,...e){aa.logLevel<=de.ERROR&&aa.error(`Auth (${Si}): ${n}`,...e)}/**
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
 */function ip(n,...e){throw Qu(n,...e)}function Y_(n,...e){return Qu(n,...e)}function X_(n,e,t){const s=Object.assign(Object.assign({},gS()),{[e]:t});return new Ri("auth","Firebase",s).create(e,{appName:n.name})}function zo(n){return X_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Q_.create(n,...e)}function Ce(n,e,...t){if(!n)throw Qu(e,...t)}function Tr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ho(e),new Error(e)}function la(n,e){n||Tr(e)}function _S(){return rp()==="http:"||rp()==="https:"}function rp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_S()||jI()||"connection"in navigator)?navigator.onLine:!0}function vS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Jr{constructor(e,t){this.shortDelay=e,this.longDelay=t,la(t>e,"Short delay should be less than long delay!"),this.isMobile=_u()||Nm()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ES(n,e){la(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class J_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wS=new Jr(3e4,6e4);function Z_(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qa(n,e,t,s,i={}){return ey(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=yu(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),J_.fetch()(ty(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ey(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},TS),e);try{const i=new IS(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Po(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Po(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Po(n,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw X_(n,f,u);ip(n,f)}}catch(i){if(i instanceof kn)throw i;ip(n,"network-request-failed",{message:String(i)})}}function ty(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?ES(n.config,i):`${n.config.apiScheme}://${i}`}class IS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Y_(this.auth,"network-request-failed")),wS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Y_(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function AS(n,e){return Qa(n,"POST","/v1/accounts:delete",e)}async function ny(n,e){return Qa(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(n,e=!1){const t=Fs(n),s=await t.getIdToken(e),i=sy(s);Ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:wr(Vl(i.auth_time)),issuedAtTime:wr(Vl(i.iat)),expirationTime:wr(Vl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Vl(n){return Number(n)*1e3}function sy(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jo(t);return i?JSON.parse(i):(Ho("Failed to decode base64 JWT payload"),null)}catch(i){return Ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function op(n){const e=sy(n);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kn&&RS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function RS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class SS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Nc(n,ny(t,{idToken:s}));Ce(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?iy(r.providerUserInfo):[],l=PS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new kc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function bS(n){const e=Fs(n);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PS(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function iy(n){return n.map(e=>{var{providerId:t}=e,s=K_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function NS(n,e){const t=await ey(n,{},async()=>{const s=yu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=ty(n,i,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kS(n,e){return Qa(n,"POST","/v2/accounts:revokeToken",Z_(n,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=op(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await NS(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new li;return s&&(Ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function Bn(n,e){Ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=K_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Nc(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sr(this.auth.app))return Promise.reject(zo(this.auth));const e=await this.getIdToken();return await Nc(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,l,c,u,f;const p=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:j,isAnonymous:oe,providerData:K,stsTokenManager:I}=t;Ce(L&&I,e,"internal-error");const y=li.fromJSON(this.name,I);Ce(typeof L=="string",e,"internal-error"),Bn(p,e.name),Bn(g,e.name),Ce(typeof j=="boolean",e,"internal-error"),Ce(typeof oe=="boolean",e,"internal-error"),Bn(v,e.name),Bn(C,e.name),Bn(P,e.name),Bn(N,e.name),Bn(V,e.name),Bn(F,e.name);const w=new Gn({uid:L,auth:e,email:g,emailVerified:j,displayName:p,isAnonymous:oe,photoURL:C,phoneNumber:v,tenantId:P,stsTokenManager:y,createdAt:V,lastLoginAt:F});return K&&Array.isArray(K)&&(w.providerData=K.map(A=>Object.assign({},A))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,t,s=!1){const i=new li;i.updateFromServerResponse(t);const r=new Gn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ca(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];Ce(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?iy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new li;l.updateFromIdToken(s);const c=new Gn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const ap=new Map;function ws(n){la(n instanceof Function,"Expected a class definition");let e=ap.get(n);return e?(la(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ap.set(n,e),e)}/**
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
 */class ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ry.type="NONE";const lp=ry;/**
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
 */function Fl(n,e,t){return`firebase:${n}:${e}:${t}`}class ci{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Fl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Fl("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ci(ws(lp),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ws(lp);const o=Fl(s,e.config.apiKey,e.name);let l=null;for(const u of t)try{const f=await u._get(o);if(f){const p=Gn._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ci(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ci(r,e,s))}}/**
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
 */function cp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VS(e))return"Blackberry";if(FS(e))return"Webos";if(DS(e))return"Safari";if((e.includes("chrome/")||xS(e))&&!e.includes("edge/"))return"Chrome";if(LS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function OS(n=en()){return/firefox\//i.test(n)}function DS(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xS(n=en()){return/crios\//i.test(n)}function MS(n=en()){return/iemobile/i.test(n)}function LS(n=en()){return/android/i.test(n)}function VS(n=en()){return/blackberry/i.test(n)}function FS(n=en()){return/webos/i.test(n)}/**
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
 */function oy(n,e=[]){let t;switch(n){case"Browser":t=cp(en());break;case"Worker":t=`${cp(en())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Si}/${s}`}/**
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
 */class US{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function BS(n,e={}){return Qa(n,"GET","/v2/passwordPolicy",Z_(n,e))}/**
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
 */const $S=6;class jS{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:$S,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class qS{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new up(this),this.idTokenSubscription=new up(this),this.beforeStateQueue=new US(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ws(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ny(this,{idToken:e}),s=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(sr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sr(this.app))return Promise.reject(zo(this));const t=e?Fs(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sr(this.app)?Promise.reject(zo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sr(this.app)?Promise.reject(zo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ws(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),t=new jS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ws(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[ws(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function HS(n){return Fs(n)}class up{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function zS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ws);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Jr(3e4,6e4);/**
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
 */new Jr(2e3,1e4);/**
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
 */new Jr(3e4,6e4);/**
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
 */new Jr(5e3,15e3);var hp="@firebase/auth",fp="1.7.4";/**
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
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GS(n){pn(new tn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(n)},u=new qS(s,i,r,c);return zS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pn(new tn("auth-internal",e=>{const t=HS(e.getProvider("auth").getImmediate());return(s=>new WS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(hp,fp,KS(n)),Ot(hp,fp,"esm2017")}/**
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
 */const QS=5*60;UI("authIdTokenMaxAge");GS("Browser");/**
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
 */const YS=new Map,XS={activated:!1,tokenObservers:[]};function nn(n){return YS.get(n)||Object.assign({},XS)}const dp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class JS{constructor(e,t,s,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Mr,this.pending.promise.catch(t=>{}),await ZS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Mr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function ZS(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const eb={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ua=new Ri("appCheck","AppCheck",eb);function ay(n){if(!nn(n).activated)throw ua.create("use-before-activation",{appName:n.name})}/**
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
 */const tb="firebase-app-check-database",nb=1,Oc="firebase-app-check-store";let No=null;function sb(){return No||(No=new Promise((n,e)=>{try{const t=indexedDB.open(tb,nb);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;e(ua.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Oc,{keyPath:"compositeKey"})}}}catch(t){e(ua.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),No)}function ib(n,e){return rb(ob(n),e)}async function rb(n,e){const s=(await sb()).transaction(Oc,"readwrite"),r=s.objectStore(Oc).put({compositeKey:n,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(ua.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function ob(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Dc=new Wr("@firebase/app-check");function pp(n,e){return Om()?ib(n,e).catch(t=>{Dc.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const ab={error:"UNKNOWN_ERROR"};function lb(n){return La.encodeString(JSON.stringify(n),!1)}async function xc(n,e=!1){const t=n.app;ay(t);const s=nn(t);let i=s.token,r;if(i&&!lr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(lr(c)?i=c:await pp(t,void 0))}if(!e&&i&&lr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await nn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Dc.warn(c.message):Dc.error(c),r=c}let l;return i?r?lr(i)?l={token:i.token,internalError:r}:l=mp(r):(l={token:i.token},s.token=i,await pp(t,i)):l=mp(r),o&&fb(t,l),l}async function cb(n){const e=n.app;ay(e);const{provider:t}=nn(e);{const{token:s}=await t.getToken();return{token:s}}}function ub(n,e,t,s){const{app:i}=n,r=nn(i),o={next:t,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&lr(r.token)){const l=r.token;Promise.resolve().then(()=>{t({token:l.token}),gp(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>gp(n))}function ly(n,e){const t=nn(n),s=t.tokenObservers.filter(i=>i.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function gp(n){const{app:e}=n,t=nn(e);let s=t.tokenRefresher;s||(s=hb(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function hb(n){const{app:e}=n;return new JS(async()=>{const t=nn(e);let s;if(t.token?s=await xc(n,!0):s=await xc(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=nn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},dp.RETRIAL_MIN_WAIT,dp.RETRIAL_MAX_WAIT)}function fb(n,e){const t=nn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function lr(n){return n.expireTimeMillis-Date.now()>0}function mp(n){return{token:lb(ab),error:n}}/**
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
 */class db{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=nn(this.app);for(const t of e)ly(this.app,t.next);return Promise.resolve()}}function pb(n,e){return new db(n,e)}function gb(n){return{getToken:e=>xc(n,e),getLimitedUseToken:()=>cb(n),addTokenListener:e=>ub(n,"INTERNAL",e),removeTokenListener:e=>ly(n.app,e)}}const mb="@firebase/app-check",_b="0.8.4",yb="app-check",_p="app-check-internal";function vb(){pn(new tn(yb,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return pb(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(_p).initialize()})),pn(new tn(_p,n=>{const e=n.getProvider("app-check").getImmediate();return gb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(mb,_b)}vb();const cy=Symbol("firebaseApp");function Yu(n){return um()&&qt(cy,null)||Vm(n)}const un=()=>{};function Xu(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function Eb(n,e,t){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,l)=>o&&o[l],n);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,t):r[i]=t}function Us(n){return!!n&&typeof n=="object"}const Tb=Object.prototype;function wb(n){return Us(n)&&Object.getPrototypeOf(n)===Tb}function Ju(n){return Us(n)&&n.type==="document"}function Ib(n){return Us(n)&&n.type==="collection"}function Ab(n){return Ju(n)||Ib(n)}function Cb(n){return Us(n)&&n.type==="query"}function Rb(n){return Us(n)&&"ref"in n}function Sb(n){return Us(n)&&typeof n.bucket=="string"}function bb(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const Pb=Symbol.for("v-scx");function Nb(){return!!qt(Pb,0)}const ko=new WeakMap;function kb(n,e){if(!ko.has(n)){const t=pg(!0);ko.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),ko.delete(n)}}return ko.get(n)}var yp={};const vp="@firebase/database",Ep="1.0.5";/**
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
 */let uy="";function Ob(n){uy=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Lr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Db(e)}}catch{}return new xb},Is=hy("localStorage"),Mb=hy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Wr("@firebase/database"),Lb=function(){let n=1;return function(){return n++}}(),fy=function(n){const e=tA(n),t=new YI;t.update(e);const s=t.digest();return La.encodeByteArray(s)},Zr=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zr.apply(null,s):typeof s=="object"?e+=ot(s):e+=s,e+=" "}return e};let Ir=null,Tp=!0;const Vb=function(n,e){Q(!e,"Can't turn on custom loggers persistently."),ui.logLevel=de.VERBOSE,Ir=ui.log.bind(ui)},pt=function(...n){if(Tp===!0&&(Tp=!1,Ir===null&&Mb.get("logging_enabled")===!0&&Vb()),Ir){const e=Zr.apply(null,n);Ir(e)}},eo=function(n){return function(...e){pt(n,...e)}},Mc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zr(...n);ui.error(e)},Ds=function(...n){const e=`FIREBASE FATAL ERROR: ${Zr(...n)}`;throw ui.error(e),new Error(e)},Dt=function(...n){const e="FIREBASE WARNING: "+Zr(...n);ui.warn(e)},Fb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dy=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ub=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},wi="[MIN_NAME]",xs="[MAX_NAME]",ki=function(n,e){if(n===e)return 0;if(n===wi||e===xs)return-1;if(e===wi||n===xs)return 1;{const t=wp(n),s=wp(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Bb=function(n,e){return n===e?0:n<e?-1:1},Xi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ot(e))},Zu=function(n){if(typeof n!="object"||n===null)return ot(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ot(e[s]),t+=":",t+=Zu(n[e[s]]);return t+="}",t},py=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ht(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gy=function(n){Q(!dy(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},$b=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},qb=new RegExp("^-?(0*)\\d{1,10}$"),Hb=-2147483648,zb=2147483647,wp=function(n){if(qb.test(n)){const e=Number(n);if(e>=Hb&&e<=zb)return e}return null},to=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Dt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Wb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ar=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Kb{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="5",my="v",_y="s",yy="r",vy="f",Ey=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ty="ls",wy="p",Lc="ac",Iy="websocket",Ay="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t,s,i,r=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Cy(n,e,t){Q(typeof e=="string","typeof type must == string"),Q(typeof t=="object","typeof params must == object");let s;if(e===Iy)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ay)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yb(n)&&(t.ns=n.namespace);const i=[];return Ht(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.counters_={}}incrementCounter(e,t=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={},Bl={};function th(n){const e=n.toString();return Ul[e]||(Ul[e]=new Xb),Ul[e]}function Jb(n,e){const t=n.toString();return Bl[t]||(Bl[t]=e()),Bl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&to(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="start",eP="close",tP="pLPCommand",nP="pRTLPCB",Ry="id",Sy="pw",by="ser",sP="cb",iP="seg",rP="ts",oP="d",aP="dframe",Py=1870,Ny=30,lP=Py-Ny,cP=25e3,uP=3e4;class Zs{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=th(t),this.urlFn=c=>(this.appCheckToken&&(c[Lc]=this.appCheckToken),Cy(t,Ay,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Zb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uP)),Ub(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nh((...r)=>{const[o,l,c,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ip)this.id=l,this.password=c;else if(o===eP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ip]="t",s[by]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[my]=eh,this.transportSessionId&&(s[_y]=this.transportSessionId),this.lastSessionId&&(s[Ty]=this.lastSessionId),this.applicationId&&(s[wy]=this.applicationId),this.appCheckToken&&(s[Lc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ey.test(location.hostname)&&(s[yy]=vy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zs.forceAllow_=!0}static forceDisallow(){Zs.forceDisallow_=!0}static isAvailable(){return Zs.forceAllow_?!0:!Zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$b()&&!jb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ot(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Sm(t),i=py(s,lP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[aP]="t",s[Ry]=e,s[Sy]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ot(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nh{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lb(),window[tP+this.uniqueCallbackIdentifier]=e,window[nP+this.uniqueCallbackIdentifier]=t,this.myIFrame=nh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pt("frame writing exception"),l.stack&&pt(l.stack),pt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ry]=this.myID,e[Sy]=this.myPW,e[by]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ny+s.length<=Py;){const o=this.pendingSegs.shift();s=s+"&"+iP+i+"="+o.seg+"&"+rP+i+"="+o.ts+"&"+oP+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(cP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=16384,fP=45e3;let ha=null;typeof MozWebSocket<"u"?ha=MozWebSocket:typeof WebSocket<"u"&&(ha=WebSocket);class Kt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=th(t),this.connURL=Kt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[my]=eh,typeof location<"u"&&location.hostname&&Ey.test(location.hostname)&&(o[yy]=vy),t&&(o[_y]=t),s&&(o[Ty]=s),i&&(o[Lc]=i),r&&(o[wy]=r),Cy(e,Iy,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Is.set("previous_websocket_failure",!0);try{let s;km(),this.mySock=new ha(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ha!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Is.isInMemoryStorage||Is.get("previous_websocket_failure")===!0}markConnectionHealthy(){Is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Lr(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ot(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=py(t,hP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zs,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Kt&&Kt.isAvailable();let s=t&&!Kt.previouslyFailed();if(e.webSocketOnly&&(t||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const i=this.transports_=[];for(const r of qr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=6e4,pP=5e3,gP=10*1024,mP=100*1024,$l="t",Ap="d",_P="s",Cp="r",yP="e",Rp="o",Sp="a",bp="n",Pp="p",vP="h";class EP{constructor(e,t,s,i,r,o,l,c,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new qr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ar(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($l in e){const t=e[$l];t===Sp?this.upgradeIfSecondaryHealthy_():t===Cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Xi("t",e),s=Xi("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Xi("t",e),s=Xi("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Xi($l,e);if(Ap in e){const s=e[Ap];if(t===vP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===bp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_P?this.onConnectionShutdown_(s):t===Cp?this.onReset_(s):t===yP?Mc("Server Error: "+s):t===Rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),eh!==s&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ar(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ar(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Oy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_u()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fa}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=32,kp=768;class Fe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ke(){return new Fe("")}function ye(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function as(n){return n.pieces_.length-n.pieceNum_}function Le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Fe(n.pieces_,e)}function Dy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xy(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function My(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Fe(e,0)}function tt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Fe(t,0)}function pe(n){return n.pieceNum_>=n.pieces_.length}function jt(n,e){const t=ye(n),s=ye(e);if(t===null)return e;if(t===s)return jt(Le(n),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ly(n,e){if(as(n)!==as(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Qt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(as(n)>as(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wP{constructor(e,t){this.errorPrefix_=t,this.parts_=xy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fa(this.parts_[s]);Vy(this)}}function IP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fa(e),Vy(n)}function AP(n){const e=n.parts_.pop();n.byteLength_-=Fa(e),n.parts_.length>0&&(n.byteLength_-=1)}function Vy(n){if(n.byteLength_>kp)throw new Error(n.errorPrefix_+"has a key path longer than "+kp+" bytes ("+n.byteLength_+").");if(n.parts_.length>Np)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Np+") or object contains a cycle "+ys(n))}function ys(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends Oy{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new sh}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=1e3,CP=60*5*1e3,Op=30*1e3,RP=1.3,SP=3e4,bP="server_kill",Dp=3;class bn extends ky{constructor(e,t,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=bn.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ji,this.maxReconnectDelay_=CP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!km())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ot(r)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Mr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;bn.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&On(e,"w")){const s=gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Op)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=GI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Mc("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SP&&(this.reconnectDelay_=Ji),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(p){Q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new EP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,v=>{Dt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(bP)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Dt(p),c())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hd(this.interruptReasons_)&&(this.reconnectDelay_=Ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Zu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){pt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dp&&(this.reconnectDelay_=Op,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+uy.replace(/\./g,"-")]=1,_u()?e["framework.cordova"]=1:Nm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fa.getInstance().currentlyOnline();return hd(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ve(wi,e),i=new ve(wi,t);return this.compare(s,i)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;class Fy extends Ya{static get __EMPTY_NODE(){return Oo}static set __EMPTY_NODE(e){Oo=e}compare(e,t){return ki(e.name,t.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ve.MIN}maxPost(){return new ve(xs,Oo)}makePost(e,t){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,Oo)}toString(){return".key"}}const hi=new Fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class et{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??et.RED,this.left=i??Rt.EMPTY_NODE,this.right=r??Rt.EMPTY_NODE}copy(e,t,s,i,r){return new et(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}et.RED=!0;et.BLACK=!1;class PP{copy(e,t,s,i,r){return this}insert(e,t,s){return new et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,et.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,et.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Do(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Do(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Do(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Do(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new PP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(n,e){return ki(n.name,e.name)}function ih(n,e){return ki(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;function kP(n){Vc=n}const Uy=function(n){return typeof n=="number"?"number:"+gy(n):"string:"+n},By=function(n){if(n.isLeafNode()){const e=n.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else Q(n===Vc||n.isEmpty(),"priority of unexpected type.");Q(n===Vc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp;class Je{constructor(e,t=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),By(this.priorityNode_)}static set __childrenNodeConstructor(e){xp=e}static get __childrenNodeConstructor(){return xp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ye(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ye(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||as(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gy(this.value_):e+=this.value_,this.lazyHash_=fy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(t),r=Je.VALUE_TYPE_ORDER.indexOf(s);return Q(i>=0,"Unknown leaf type: "+t),Q(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $y,jy;function OP(n){$y=n}function DP(n){jy=n}class xP extends Ya{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ki(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(xs,new Je("[PRIORITY-POST]",jy))}makePost(e,t){const s=$y(e);return new ve(t,new Je("[PRIORITY-POST]",s))}toString(){return".priority"}}const _t=new xP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=Math.log(2);class LP{constructor(e){const t=r=>parseInt(Math.log(r)/MP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const da=function(n,e,t,s){n.sort(e);const i=function(c,u){const f=u-c;let p,g;if(f===0)return null;if(f===1)return p=n[c],g=t?t(p):p,new et(g,p.node,et.BLACK,null,null);{const v=parseInt(f/2,10)+c,C=i(c,v),P=i(v+1,u);return p=n[v],g=t?t(p):p,new et(g,p.node,et.BLACK,C,P)}},r=function(c){let u=null,f=null,p=n.length;const g=function(C,P){const N=p-C,V=p;p-=C;const F=i(N+1,V),L=n[N],j=t?t(L):L;v(new et(j,L.node,P,null,F))},v=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<c.count;++C){const P=c.nextBitIsOne(),N=Math.pow(2,c.count-(C+1));P?g(N,et.BLACK):(g(N,et.BLACK),g(N,et.RED))}return f},o=new LP(n.length),l=r(o);return new Rt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;const Gs={};class Rn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Q(Gs&&_t,"ChildrenNode.ts has not been loaded"),jl=jl||new Rn({".priority":Gs},{".priority":_t}),jl}get(e){const t=gi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,t){Q(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ve.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=da(s,e.getCompare()):l=Gs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new Rn(f,u)}addToIndexes(e,t){const s=Zo(this.indexes_,(i,r)=>{const o=gi(this.indexSet_,r);if(Q(o,"Missing index implementation for "+r),i===Gs)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(ve.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),da(l,o.getCompare())}else return Gs;else{const l=t.get(e.name);let c=i;return l&&(c=c.remove(new ve(e.name,l))),c.insert(e,e.node)}});return new Rn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Zo(this.indexes_,i=>{if(i===Gs)return i;{const r=t.get(e.name);return r?i.remove(new ve(e.name,r)):i}});return new Rn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class Pe{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&By(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zi||(Zi=new Pe(new Rt(ih),null,Rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zi}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Zi:t}}getChild(e){const t=ye(e);return t===null?this:this.getImmediateChild(t).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ve(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zi:this.priorityNode_;return new Pe(i,o,r)}}updateChild(e,t){const s=ye(e);if(s===null)return t;{Q(ye(e)!==".priority"||as(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Le(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(_t,(o,l)=>{t[o]=l.val(e),s++,r&&Pe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uy(this.getPriority().val())+":"),this.forEachChild(_t,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":fy(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ve(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ve(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===no?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(_t),i=t.getIterator(_t);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VP extends Pe{constructor(){super(new Rt(ih),Pe.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const no=new VP;Object.defineProperties(ve,{MIN:{value:new ve(wi,Pe.EMPTY_NODE)},MAX:{value:new ve(xs,no)}});Fy.__EMPTY_NODE=Pe.EMPTY_NODE;Je.__childrenNodeConstructor=Pe;kP(no);DP(no);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=!0;function gt(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Je(t,gt(e))}if(!(n instanceof Array)&&FP){const t=[];let s=!1;if(Ht(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=gt(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new ve(o,c)))}}),t.length===0)return Pe.EMPTY_NODE;const r=da(t,NP,o=>o.name,ih);if(s){const o=da(t,_t.getCompare());return new Pe(r,gt(e),new Rn({".priority":o},{".priority":_t}))}else return new Pe(r,gt(e),Rn.Default)}else{let t=Pe.EMPTY_NODE;return Ht(n,(s,i)=>{if(On(n,s)&&s.substring(0,1)!=="."){const r=gt(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(gt(e))}}OP(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP extends Ya{constructor(e){super(),this.indexPath_=e,Q(!pe(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ki(e.name,t.name):r}makePost(e,t){const s=gt(e),i=Pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(t,i)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,no);return new ve(xs,e)}toString(){return xy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP extends Ya{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ki(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,t){const s=gt(e);return new ve(t,s)}toString(){return".value"}}const $P=new BP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n){return{type:"value",snapshotNode:n}}function qP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function HP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mp(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function zP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new rh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_t?t="$priority":n.index_===$P?t="$value":n.index_===hi?t="$key":(Q(n.index_ instanceof UP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ot(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ot(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ot(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ot(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ot(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_t&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends ky{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=eo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pa.getListenId_(e,s),l={};this.listens_[o]=l;const c=Lp(e._queryParams);this.restRequest_(r+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,s),gi(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,t){const s=pa.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Lp(e._queryParams),s=e._path.toString(),i=new Mr;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Lr(l.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){return{value:null,children:new Map}}function qy(n,e,t){if(pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ye(e);n.children.has(s)||n.children.set(s,ga());const i=n.children.get(s);e=Le(e),qy(i,e,t)}}function Fc(n,e,t){n.value!==null?t(e,n.value):KP(n,(s,i)=>{const r=new Fe(e.toString()+"/"+s);Fc(i,r,t)})}function KP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=10*1e3,QP=30*1e3,YP=5*60*1e3;class XP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new GP(e);const s=Fp+(QP-Fp)*Math.random();Ar(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ht(e,(i,r)=>{r>0&&On(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ar(this.reportStats_.bind(this),Math.floor(Math.random()*2*YP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function Hy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=Hy()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Fe(e));return new ma(ke(),t,this.revert)}}else return Q(ye(this.path)===e,"operationForChild called for unrelated child."),new ma(Le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return pe(this.path)?new Ms(this.source,ke(),this.snap.getImmediateChild(e)):new Ms(this.source,Le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=hn.MERGE}operationForChild(e){if(pe(this.path)){const t=this.children.subtree(new Fe(e));return t.isEmpty()?null:t.value?new Ms(this.source,ke(),t.value):new Hr(this.source,ke(),t)}else return Q(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hr(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ye(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function JP(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(zP(o.childName,o.snapshotNode))}),er(n,i,"child_removed",e,s,t),er(n,i,"child_added",e,s,t),er(n,i,"child_moved",r,s,t),er(n,i,"child_changed",e,s,t),er(n,i,"value",e,s,t),i}function er(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,c)=>eN(n,l,c)),o.forEach(l=>{const c=ZP(n,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function ZP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function eN(n,e,t){if(e.childName==null||t.childName==null)throw Ci("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),i=new ve(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n,e){return{eventCache:n,serverCache:e}}function Cr(n,e,t,s){return Ky(new oh(e,t,s),n.serverCache)}function Gy(n,e,t,s){return Ky(n.eventCache,new oh(e,t,s))}function Uc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ls(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;const tN=()=>(ql||(ql=new Rt(Bb)),ql);class Me{constructor(e,t=tN()){this.value=e,this.children=t}static fromObject(e){let t=new Me(null);return Ht(e,(s,i)=>{t=t.set(new Fe(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ke(),value:this.value};if(pe(e))return null;{const s=ye(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Le(e),t);return r!=null?{path:tt(new Fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const t=ye(e),s=this.children.get(t);return s!==null?s.subtree(Le(e)):new Me(null)}}set(e,t){if(pe(e))return new Me(t,this.children);{const s=ye(e),r=(this.children.get(s)||new Me(null)).set(Le(e),t),o=this.children.insert(s,r);return new Me(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const t=ye(e),s=this.children.get(t);if(s){const i=s.remove(Le(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Me(null):new Me(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const t=ye(e),s=this.children.get(t);return s?s.get(Le(e)):null}}setTree(e,t){if(pe(e))return t;{const s=ye(e),r=(this.children.get(s)||new Me(null)).setTree(Le(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Me(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ke(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(pe(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(Le(e),tt(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ke(),t)}foreachOnPath_(e,t,s){if(pe(e))return this;{this.value&&s(t,this.value);const i=ye(e),r=this.children.get(i);return r?r.foreachOnPath_(Le(e),tt(t,i),s):new Me(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Me(null))}}function Rr(n,e,t){if(pe(e))return new Jt(new Me(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=jt(i,e);return r=r.updateChild(o,t),new Jt(n.writeTree_.set(i,r))}else{const i=new Me(t),r=n.writeTree_.setTree(e,i);return new Jt(r)}}}function Up(n,e,t){let s=n;return Ht(t,(i,r)=>{s=Rr(s,tt(e,i),r)}),s}function Bp(n,e){if(pe(e))return Jt.empty();{const t=n.writeTree_.setTree(e,new Me(null));return new Jt(t)}}function Bc(n,e){return Bs(n,e)!=null}function Bs(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(jt(t.path,e)):null}function $p(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_t,(s,i)=>{e.push(new ve(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ve(s,i.value))}),e}function ns(n,e){if(pe(e))return n;{const t=Bs(n,e);return t!=null?new Jt(new Me(t)):new Jt(n.writeTree_.subtree(e))}}function $c(n){return n.writeTree_.isEmpty()}function Ii(n,e){return Qy(ke(),n.writeTree_,e)}function Qy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(Q(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Qy(tt(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(tt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n,e){return tv(e,n)}function nN(n,e,t,s,i){Q(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Rr(n.visibleWrites,e,t)),n.lastWriteId=s}function sN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function iN(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);Q(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&rN(l,s.path)?i=!1:Qt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return oN(n),!0;if(s.snap)n.visibleWrites=Bp(n.visibleWrites,s.path);else{const l=s.children;Ht(l,c=>{n.visibleWrites=Bp(n.visibleWrites,tt(s.path,c))})}return!0}else return!1}function rN(n,e){if(n.snap)return Qt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Qt(tt(n.path,t),e))return!0;return!1}function oN(n){n.visibleWrites=Xy(n.allWrites,aN,ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function aN(n){return n.visible}function Xy(n,e,t){let s=Jt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Qt(t,o)?(l=jt(t,o),s=Rr(s,l,r.snap)):Qt(o,t)&&(l=jt(o,t),s=Rr(s,ke(),r.snap.getChild(l)));else if(r.children){if(Qt(t,o))l=jt(t,o),s=Up(s,l,r.children);else if(Qt(o,t))if(l=jt(o,t),pe(l))s=Up(s,ke(),r.children);else{const c=gi(r.children,ye(l));if(c){const u=c.getChild(Le(l));s=Rr(s,ke(),u)}}}else throw Ci("WriteRecord should have .snap or .children")}}return s}function Jy(n,e,t,s,i){if(!s&&!i){const r=Bs(n.visibleWrites,e);if(r!=null)return r;{const o=ns(n.visibleWrites,e);if($c(o))return t;if(t==null&&!Bc(o,ke()))return null;{const l=t||Pe.EMPTY_NODE;return Ii(o,l)}}}else{const r=ns(n.visibleWrites,e);if(!i&&$c(r))return t;if(!i&&t==null&&!Bc(r,ke()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Qt(u.path,e)||Qt(e,u.path))},l=Xy(n.allWrites,o,e),c=t||Pe.EMPTY_NODE;return Ii(l,c)}}}function lN(n,e,t){let s=Pe.EMPTY_NODE;const i=Bs(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_t,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ns(n.visibleWrites,e);return t.forEachChild(_t,(o,l)=>{const c=Ii(ns(r,new Fe(o)),l);s=s.updateImmediateChild(o,c)}),$p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ns(n.visibleWrites,e);return $p(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cN(n,e,t,s,i){Q(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,t);if(Bc(n.visibleWrites,r))return null;{const o=ns(n.visibleWrites,r);return $c(o)?i.getChild(t):Ii(o,i.getChild(t))}}function uN(n,e,t,s){const i=tt(e,t),r=Bs(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ns(n.visibleWrites,i);return Ii(o,s.getNode().getImmediateChild(t))}else return null}function hN(n,e){return Bs(n.visibleWrites,e)}function fN(n,e,t,s,i,r,o){let l;const c=ns(n.visibleWrites,e),u=Bs(c,ke());if(u!=null)l=u;else if(t!=null)l=Ii(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let v=g.getNext();for(;v&&f.length<i;)p(v,s)!==0&&f.push(v),v=g.getNext();return f}else return[]}function dN(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function jc(n,e,t,s){return Jy(n.writeTree,n.treePath,e,t,s)}function Zy(n,e){return lN(n.writeTree,n.treePath,e)}function jp(n,e,t,s){return cN(n.writeTree,n.treePath,e,t,s)}function _a(n,e){return hN(n.writeTree,tt(n.treePath,e))}function pN(n,e,t,s,i,r){return fN(n.writeTree,n.treePath,e,t,s,i,r)}function ah(n,e,t){return uN(n.writeTree,n.treePath,e,t)}function ev(n,e){return tv(tt(n.treePath,e),n.writeTree)}function tv(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;Q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,HP(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,qP(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mp(s,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const nv=new mN;class lh{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new oh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ah(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ls(this.viewCache_),r=pN(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function _N(n,e){Q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function yN(n,e,t,s,i){const r=new gN;let o,l;if(t.type===hn.OVERWRITE){const u=t;u.source.fromUser?o=qc(n,e,u.path,u.snap,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!pe(u.path),o=ya(n,e,u.path,u.snap,s,i,l,r))}else if(t.type===hn.MERGE){const u=t;u.source.fromUser?o=EN(n,e,u.path,u.children,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hc(n,e,u.path,u.children,s,i,l,r))}else if(t.type===hn.ACK_USER_WRITE){const u=t;u.revert?o=IN(n,e,u.path,s,i,r):o=TN(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===hn.LISTEN_COMPLETE)o=wN(n,e,t.path,s,r);else throw Ci("Unknown operation type: "+t.type);const c=r.getChanges();return vN(e,o,c),{viewCache:o,changes:c}}function vN(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Uc(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(jP(Uc(e)))}}function sv(n,e,t,s,i,r){const o=e.eventCache;if(_a(s,t)!=null)return e;{let l,c;if(pe(t))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ls(e),f=u instanceof Pe?u:Pe.EMPTY_NODE,p=Zy(s,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=jc(s,Ls(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ye(t);if(u===".priority"){Q(as(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=jp(s,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=o.getNode()}else{const f=Le(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=jp(s,t,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(f,g):p=o.getNode().getImmediateChild(u)}else p=ah(s,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,f,i,r):l=o.getNode()}}return Cr(e,l,o.isFullyInitialized()||pe(t),n.filter.filtersNodes())}}function ya(n,e,t,s,i,r,o,l){const c=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(pe(t))u=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const v=c.getNode().updateChild(t,s);u=f.updateFullNode(c.getNode(),v,null)}else{const v=ye(t);if(!c.isCompleteForPath(t)&&as(t)>1)return e;const C=Le(t),N=c.getNode().getImmediateChild(v).updateChild(C,s);v===".priority"?u=f.updatePriority(c.getNode(),N):u=f.updateChild(c.getNode(),v,N,C,nv,null)}const p=Gy(e,u,c.isFullyInitialized()||pe(t),f.filtersNodes()),g=new lh(i,p,r);return sv(n,p,t,i,g,l)}function qc(n,e,t,s,i,r,o){const l=e.eventCache;let c,u;const f=new lh(i,e,r);if(pe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Cr(e,u,!0,n.filter.filtersNodes());else{const p=ye(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=Cr(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Le(t),v=l.getNode().getImmediateChild(p);let C;if(pe(g))C=s;else{const P=f.getCompleteChild(p);P!=null?Dy(g)===".priority"&&P.getChild(My(g)).isEmpty()?C=P:C=P.updateChild(g,s):C=Pe.EMPTY_NODE}if(v.equals(C))c=e;else{const P=n.filter.updateChild(l.getNode(),p,C,g,f,o);c=Cr(e,P,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function qp(n,e){return n.eventCache.isCompleteForChild(e)}function EN(n,e,t,s,i,r,o){let l=e;return s.foreach((c,u)=>{const f=tt(t,c);qp(e,ye(f))&&(l=qc(n,l,f,u,i,r,o))}),s.foreach((c,u)=>{const f=tt(t,c);qp(e,ye(f))||(l=qc(n,l,f,u,i,r,o))}),l}function Hp(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hc(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;pe(t)?u=s:u=new Me(null).setTree(t,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),C=Hp(n,v,g);c=ya(n,c,new Fe(p),C,i,r,o,l)}}),u.children.inorderTraversal((p,g)=>{const v=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!v){const C=e.serverCache.getNode().getImmediateChild(p),P=Hp(n,C,g);c=ya(n,c,new Fe(p),P,i,r,o,l)}}),c}function TN(n,e,t,s,i,r,o){if(_a(i,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(pe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ya(n,e,t,c.getNode().getChild(t),i,r,l,o);if(pe(t)){let u=new Me(null);return c.getNode().forEachChild(hi,(f,p)=>{u=u.set(new Fe(f),p)}),Hc(n,e,t,u,i,r,l,o)}else return e}else{let u=new Me(null);return s.foreach((f,p)=>{const g=tt(t,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),Hc(n,e,t,u,i,r,l,o)}}function wN(n,e,t,s,i){const r=e.serverCache,o=Gy(e,r.getNode(),r.isFullyInitialized()||pe(t),r.isFiltered());return sv(n,o,t,s,nv,i)}function IN(n,e,t,s,i,r){let o;if(_a(s,t)!=null)return e;{const l=new lh(s,e,i),c=e.eventCache.getNode();let u;if(pe(t)||ye(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=jc(s,Ls(e));else{const p=e.serverCache.getNode();Q(p instanceof Pe,"serverChildren would be complete if leaf node"),f=Zy(s,p)}f=f,u=n.filter.updateFullNode(c,f,r)}else{const f=ye(t);let p=ah(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=n.filter.updateChild(c,f,p,Le(t),l,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(c,f,Pe.EMPTY_NODE,Le(t),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jc(s,Ls(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||_a(s,ke())!=null,Cr(e,u,o,n.filter.filtersNodes())}}function AN(n,e){const t=Ls(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!pe(e)&&!t.getImmediateChild(ye(e)).isEmpty())?t.getChild(e):null}function zp(n,e,t,s){e.type===hn.MERGE&&e.source.queryId!==null&&(Q(Ls(n.viewCache_),"We should always have a full cache before handling merges"),Q(Uc(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=yN(n.processor_,i,e,t,s);return _N(n.processor_,r.viewCache),Q(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,CN(n,r.changes,r.viewCache.eventCache.getNode())}function CN(n,e,t,s){const i=n.eventRegistrations_;return JP(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wp;function RN(n){Q(!Wp,"__referenceConstructor has already been defined"),Wp=n}function ch(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return Q(r!=null,"SyncTree gave us an op for an invalid query."),zp(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(zp(o,e,t,s));return r}}function uh(n,e){let t=null;for(const s of n.views.values())t=t||AN(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;function SN(n){Q(!Kp,"__referenceConstructor has already been defined"),Kp=n}class Gp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=dN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bN(n,e,t,s,i){return nN(n.pendingWriteTree_,e,t,s,i),i?Ja(n,new Ms(Hy(),e,t)):[]}function ei(n,e,t=!1){const s=sN(n.pendingWriteTree_,e);if(iN(n.pendingWriteTree_,e)){let r=new Me(null);return s.snap!=null?r=r.set(ke(),!0):Ht(s.children,o=>{r=r.set(new Fe(o),!0)}),Ja(n,new ma(s.path,r,t))}else return[]}function Xa(n,e,t){return Ja(n,new Ms(zy(),e,t))}function PN(n,e,t){const s=Me.fromObject(t);return Ja(n,new Hr(zy(),e,s))}function NN(n,e,t,s){const i=av(n,s);if(i!=null){const r=lv(i),o=r.path,l=r.queryId,c=jt(o,e),u=new Ms(Wy(l),c,t);return cv(n,o,u)}else return[]}function kN(n,e,t,s){const i=av(n,s);if(i){const r=lv(i),o=r.path,l=r.queryId,c=jt(o,e),u=Me.fromObject(t),f=new Hr(Wy(l),c,u);return cv(n,o,f)}else return[]}function iv(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=jt(o,e),u=uh(l,c);if(u)return u});return Jy(i,e,r,t,!0)}function Ja(n,e){return rv(e,n.syncPointTree_,null,Yy(n.pendingWriteTree_,ke()))}function rv(n,e,t,s){if(pe(n.path))return ov(n,e,t,s);{const i=e.get(ke());t==null&&i!=null&&(t=uh(i,ke()));let r=[];const o=ye(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,f=ev(s,o);r=r.concat(rv(l,c,u,f))}return i&&(r=r.concat(ch(i,n,s,t))),r}}function ov(n,e,t,s){const i=e.get(ke());t==null&&i!=null&&(t=uh(i,ke()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=ev(s,o),f=n.operationForChild(o);f&&(r=r.concat(ov(f,l,c,u)))}),i&&(r=r.concat(ch(i,n,s,t))),r}function av(n,e){return n.tagToQueryMap.get(e)}function lv(n){const e=n.indexOf("$");return Q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Fe(n.substr(0,e))}}function cv(n,e,t){const s=n.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const i=Yy(n.pendingWriteTree_,e);return ch(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hh(t)}node(){return this.node_}}class fh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tt(this.path_,e);return new fh(this.syncTree_,t)}node(){return iv(this.syncTree_,this.path_)}}const ON=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Qp=function(n,e,t){if(!n||typeof n!="object")return n;if(Q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return DN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xN(n[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},DN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Q(!1,"Unexpected server value: "+n)}},xN=function(n,e,t){n.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const i=e.node();if(Q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},MN=function(n,e,t,s){return dh(e,new fh(t,n),s)},LN=function(n,e,t){return dh(n,new hh(e),t)};function dh(n,e,t){const s=n.getPriority().val(),i=Qp(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Qp(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Je(l,gt(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Je(i))),o.forEachChild(_t,(l,c)=>{const u=dh(c,e.getImmediateChild(l),t);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function gh(n,e){let t=e instanceof Fe?e:new Fe(e),s=n,i=ye(t);for(;i!==null;){const r=gi(s.node.children,i)||{children:{},childCount:0};s=new ph(i,s,r),t=Le(t),i=ye(t)}return s}function Oi(n){return n.node.value}function uv(n,e){n.node.value=e,zc(n)}function hv(n){return n.node.childCount>0}function VN(n){return Oi(n)===void 0&&!hv(n)}function Za(n,e){Ht(n.node.children,(t,s)=>{e(new ph(t,n,s))})}function fv(n,e,t,s){t&&!s&&e(n),Za(n,i=>{fv(i,e,!0,s)}),t&&s&&e(n)}function FN(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function so(n){return new Fe(n.parent===null?n.name:so(n.parent)+"/"+n.name)}function zc(n){n.parent!==null&&UN(n.parent,n.name,n)}function UN(n,e,t){const s=VN(t),i=On(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,zc(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=/[\[\].#$\/\u0000-\u001F\u007F]/,$N=/[\[\].#$\u0000-\u001F\u007F]/,Hl=10*1024*1024,dv=function(n){return typeof n=="string"&&n.length!==0&&!BN.test(n)},jN=function(n){return typeof n=="string"&&n.length!==0&&!$N.test(n)},qN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jN(n)},pv=function(n,e,t){const s=t instanceof Fe?new wP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ys(s));if(typeof e=="function")throw new Error(n+"contains a function "+ys(s)+" with contents = "+e.toString());if(dy(e))throw new Error(n+"contains "+e.toString()+" "+ys(s));if(typeof e=="string"&&e.length>Hl/3&&Fa(e)>Hl)throw new Error(n+"contains a string greater than "+Hl+" utf8 bytes "+ys(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dv(o)))throw new Error(n+" contains an invalid key ("+o+") "+ys(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IP(s,o),pv(n,l,s),AP(s)}),i&&r)throw new Error(n+' contains ".value" child '+ys(s)+" in addition to actual children.")}},HN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!qN(t))throw new Error(eA(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WN(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ly(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function $s(n,e,t){WN(n,t),KN(n,s=>Qt(s,e)||Qt(e,s))}function KN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(GN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function GN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ir&&pt("event: "+t.toString()),to(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="repo_interrupt",YN=25;class XN{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ga(),this.transactionQueueTree_=new ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JN(n,e,t){if(n.stats_=th(n.repoInfo_),n.forceRestClient_||Wb())n.server_=new pa(n.repoInfo_,(s,i,r,o)=>{Yp(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Xp(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new bn(n.repoInfo_,e,(s,i,r,o)=>{Yp(n,s,i,r,o)},s=>{Xp(n,s)},s=>{ek(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Jb(n.repoInfo_,()=>new XP(n.stats_,n.server_)),n.infoData_=new WP,n.infoSyncTree_=new Gp({startListening:(s,i,r,o)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=Xa(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mh(n,"connected",!1),n.serverSyncTree_=new Gp({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);$s(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ZN(n){const t=n.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function gv(n){return ON({timestamp:ZN(n)})}function Yp(n,e,t,s,i){n.dataUpdateCount++;const r=new Fe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Zo(t,u=>gt(u));o=kN(n.serverSyncTree_,r,c,i)}else{const c=gt(t);o=NN(n.serverSyncTree_,r,c,i)}else if(s){const c=Zo(t,u=>gt(u));o=PN(n.serverSyncTree_,r,c)}else{const c=gt(t);o=Xa(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=yh(n,r)),$s(n.eventQueue_,l,o)}function Xp(n,e){mh(n,"connected",e),e===!1&&nk(n)}function ek(n,e){Ht(e,(t,s)=>{mh(n,t,s)})}function mh(n,e,t){const s=new Fe("/.info/"+e),i=gt(t);n.infoData_.updateSnapshot(s,i);const r=Xa(n.infoSyncTree_,s,i);$s(n.eventQueue_,s,r)}function tk(n){return n.nextWriteId_++}function nk(n){mv(n,"onDisconnectEvents");const e=gv(n),t=ga();Fc(n.onDisconnect_,ke(),(i,r)=>{const o=MN(i,r,n.serverSyncTree_,e);qy(t,i,o)});let s=[];Fc(t,ke(),(i,r)=>{s=s.concat(Xa(n.serverSyncTree_,i,r));const o=ok(n,i);yh(n,o)}),n.onDisconnect_=ga(),$s(n.eventQueue_,ke(),s)}function sk(n){n.persistentConnection_&&n.persistentConnection_.interrupt(QN)}function mv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pt(t,...e)}function _v(n,e,t){return iv(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function _h(n,e=n.transactionQueueTree_){if(e||el(n,e),Oi(e)){const t=vv(n,e);Q(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ik(n,so(e),t)}else hv(e)&&Za(e,t=>{_h(n,t)})}function ik(n,e,t){const s=t.map(u=>u.currentWriteId),i=_v(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const f=t[u];Q(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=jt(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,u=>{mv(n,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(ei(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();el(n,gh(n.transactionQueueTree_,e)),_h(n,n.transactionQueueTree_),$s(n.eventQueue_,e,f);for(let g=0;g<p.length;g++)to(p[g])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Dt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}yh(n,e)}},o)}function yh(n,e){const t=yv(n,e),s=so(t),i=vv(n,t);return rk(n,i,s),s}function rk(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=jt(t,c.path);let f=!1,p;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,i=i.concat(ei(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=YN)f=!0,p="maxretry",i=i.concat(ei(n.serverSyncTree_,c.currentWriteId,!0));else{const g=_v(n,c.path,o);c.currentInputSnapshot=g;const v=e[l].update(g.val());if(v!==void 0){pv("transaction failed: Data returned ",v,c.path);let C=gt(v);typeof v=="object"&&v!=null&&On(v,".priority")||(C=C.updatePriority(g.getPriority()));const N=c.currentWriteId,V=gv(n),F=LN(C,g,V);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=F,c.currentWriteId=tk(n),o.splice(o.indexOf(N),1),i=i.concat(bN(n.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(ei(n.serverSyncTree_,N,!0))}else f=!0,p="nodata",i=i.concat(ei(n.serverSyncTree_,c.currentWriteId,!0))}$s(n.eventQueue_,t,i),i=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}el(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)to(s[l]);_h(n,n.transactionQueueTree_)}function yv(n,e){let t,s=n.transactionQueueTree_;for(t=ye(e);t!==null&&Oi(s)===void 0;)s=gh(s,t),e=Le(e),t=ye(e);return s}function vv(n,e){const t=[];return Ev(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ev(n,e,t){const s=Oi(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Za(e,i=>{Ev(n,i,t)})}function el(n,e){const t=Oi(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,uv(e,t.length>0?t:void 0)}Za(e,s=>{el(n,s)})}function ok(n,e){const t=so(yv(n,e)),s=gh(n.transactionQueueTree_,e);return FN(s,i=>{zl(n,i)}),zl(n,s),fv(s,i=>{zl(n,i)}),t}function zl(n,e){const t=Oi(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Q(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(Q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ei(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uv(e,void 0):t.length=r+1,$s(n.eventQueue_,so(e),i);for(let o=0;o<s.length;o++)to(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lk(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Jp=function(n,e){const t=ck(n),s=t.namespace;t.domain==="firebase.com"&&Ds(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Fb();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qb(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Fe(t.pathString)}},ck=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=ak(n.substring(f,p)));const g=lk(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class vh{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return pe(this._path)?null:Dy(this._path)}get ref(){return new Di(this._repo,this._path)}get _queryIdentifier(){const e=Vp(this._queryParams),t=Zu(e);return t==="{}"?"default":t}get _queryObject(){return Vp(this._queryParams)}isEqual(e){if(e=Fs(e),!(e instanceof vh))return!1;const t=this._repo===e._repo,s=Ly(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TP(this._path)}}class Di extends vh{constructor(e,t){super(e,t,new rh,!1)}get parent(){const e=My(this._path);return e===null?null:new Di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}RN(Di);SN(Di);/**
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
 */const uk="FIREBASE_DATABASE_EMULATOR_HOST",Wc={};let hk=!1;function fk(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Jp(r,i),l=o.repoInfo,c;typeof process<"u"&&yp&&(c=yp[uk]),c?(r=`http://${c}?ns=${l.namespace}`,o=Jp(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new Gb(n.name,n.options,e);HN("Invalid Firebase Database URL",o),pe(o.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const f=pk(l,n,u,new Kb(n.name,t));return new gk(f,n)}function dk(n,e){const t=Wc[e];(!t||t[n.key]!==n)&&Ds(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sk(n),delete t[n.key]}function pk(n,e,t,s){let i=Wc[e.name];i||(i={},Wc[e.name]=i);let r=i[n.toURLString()];return r&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new XN(n,hk,t,s),i[n.toURLString()]=r,r}class gk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Di(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ds("Cannot call "+e+" on a deleted database.")}}/**
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
 */function mk(n){Ob(Si),pn(new tn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fk(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ot(vp,Ep,n),Ot(vp,Ep,"esm2017")}bn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};bn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="firebasestorage.googleapis.com",_k="storageBucket",yk=2*60*1e3,vk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends kn{constructor(e,t,s=0){super(Wl(e),`Firebase Storage: ${t} (${Wl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _n;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_n||(_n={}));function Wl(n){return"storage/"+n}function Ek(){const n="An unknown error occurred, please check the error payload for server response.";return new yn(_n.UNKNOWN,n)}function Tk(){return new yn(_n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wk(){return new yn(_n.CANCELED,"User canceled the upload/download.")}function Ik(n){return new yn(_n.INVALID_URL,"Invalid URL '"+n+"'.")}function Ak(n){return new yn(_n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Zp(n){return new yn(_n.INVALID_ARGUMENT,n)}function wv(){return new yn(_n.APP_DELETED,"The Firebase app was deleted.")}function Ck(n){return new yn(_n.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Yt.makeFromUrl(e,t)}catch{return new Yt(e,"")}if(s.path==="")return s;throw Ak(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},P=t===Tv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",V=new RegExp(`^https?://${P}/${i}/${N}`,"i"),L=[{regex:l,indices:c,postModify:r},{regex:v,indices:C,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<L.length;j++){const oe=L[j],K=oe.regex.exec(e);if(K){const I=K[oe.indices.bucket];let y=K[oe.indices.path];y||(y=""),s=new Yt(I,y),oe.postModify(s);break}}if(s==null)throw Ik(e);return s}}class Rk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n,e,t){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...N){u||(u=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,n(v,c())},N)}function g(){r&&clearTimeout(r)}function v(N,...V){if(u){g();return}if(N){g(),f.call(null,N,...V);return}if(c()||o){g(),f.call(null,N,...V);return}s<64&&(s*=2);let L;l===1?(l=2,L=0):L=(s+Math.random())*1e3,p(L)}let C=!1;function P(N){C||(C=!0,g(),!u&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function bk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n){return n!==void 0}function eg(n,e,t,s){if(s<e)throw Zp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Zp(`Invalid value for '${n}'. Expected ${t} or less.`)}function Nk(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(va||(va={}));/**
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
 */function kk(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,t,s,i,r,o,l,c,u,f,p,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new xo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===va.NO_ERROR,c=r.getStatus();if(!l||kk(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===va.ABORT;s(!1,new xo(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new xo(u,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Pk(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=Ek();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?wv():wk();o(c)}else{const c=Tk();o(c)}};this.canceled_?t(!1,new xo(!1,null,!0)):this.backoffId_=Sk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Dk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Mk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Lk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Vk(n,e,t,s,i,r,o=!0){const l=Nk(n.urlParams),c=n.url+l,u=Object.assign({},n.headers);return Mk(u,e),Dk(u,t),xk(u,r),Lk(u,s),new Ok(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Uk(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Ea{constructor(e,t){this._service=e,t instanceof Yt?this._location=t:this._location=Yt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ea(e,t)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uk(this._location.path)}get storage(){return this._service}get parent(){const e=Fk(this._location.path);if(e===null)return null;const t=new Yt(this._location.bucket,e);return new Ea(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ck(e)}}function tg(n,e){const t=e==null?void 0:e[_k];return t==null?null:Yt.makeFromBucketSpec(t,n)}class Bk{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Tv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yk,this._maxUploadRetryTime=vk,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ea(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new Rk(wv());{const o=Vk(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const ng="@firebase/storage",sg="0.12.5";/**
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
 */const $k="storage";function jk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Bk(t,s,i,e,Si)}function qk(){pn(new tn($k,jk,"PUBLIC").setMultipleInstances(!0)),Ot(ng,sg,""),Ot(ng,sg,"esm2017")}qk();const Kl=new WeakMap;function Iv(n,e){return Kl.has(e)||Kl.set(e,{f:{},r:{},s:{},u:{}}),Kl.get(e)}function Hk(n,e,t,s){if(!n)return t;const[i,r]=Av(n);if(!i)return t;const o=Iv(void 0,s)[i]||{},l=e||r;return l&&l in o?o[l]:t}function zk(n,e,t,s){if(!n)return;const[i,r]=Av(n);if(!i)return;const o=Iv(void 0,s)[i],l=e||r;if(l)return t.then(c=>{o[l]=c}).catch(un),l}function Av(n){return Ab(n)||Cb(n)?["f",n.path]:Rb(n)?["r",n.toString()]:Sb(n)?["s",n.toString()]:[]}const Gl=new WeakMap;function Wk(n,e,t){const s=Yu();Gl.has(s)||Gl.set(s,new Map);const i=Gl.get(s),r=zk(e,t,n,s);return r&&i.set(r,n),r?()=>i.delete(r):un}const Kk={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Kc(n,e,t,s){if(!wb(n))return[n,{}];const i=[{},{}],r=Object.keys(t).reduce((l,c)=>{const u=t[c];return l[u.path]=u.data(),l},{});function o(l,c,u,f){c=c||{};const[p,g]=f;Object.getOwnPropertyNames(l).forEach(v=>{const C=Object.getOwnPropertyDescriptor(l,v);C&&!C.enumerable&&Object.defineProperty(p,v,C)});for(const v in l){const C=l[v];if(C==null||C instanceof Date||C instanceof At||C instanceof V_)p[v]=C;else if(Ju(C)){const P=u+v;p[v]=P in t?c[v]:C.path,g[P]=C.converter?C:C.withConverter(s.converter)}else if(Array.isArray(C)){p[v]=Array(C.length);for(let P=0;P<C.length;P++){const N=C[P];N&&N.path in r&&(p[v][P]=r[N.path])}o(C,c[v]||p[v],u+v+".",[p[v],g])}else Us(C)?(p[v]={},o(C,c[v],u+v+".",[p[v],g])):p[v]=C}}return o(n,e,"",i),i}const Eh={reset:!1,wait:!0,maxRefDepth:2,converter:Kk,snapshotOptions:{serverTimestamps:"estimate"}};function Ta(n){for(const e in n)n[e].unsub()}function Gc(n,e,t,s,i,r,o,l,c){const[u,f]=Kc(s.data(n.snapshotOptions),Xu(e,t),i,n);r.set(e,t,u),Qc(n,e,t,i,f,r,o,l,c)}function Gk({ref:n,target:e,path:t,depth:s,resolve:i,reject:r,ops:o},l){const c=Object.create(null);let u=un;return l.once?q_(n).then(f=>{f.exists()?Gc(l,e,t,f,c,o,s,i,r):(o.set(e,t,null),i())}).catch(r):u=Gu(n,f=>{f.exists()?Gc(l,e,t,f,c,o,s,i,r):(o.set(e,t,null),i())},r),()=>{u(),Ta(c)}}function Qc(n,e,t,s,i,r,o,l,c){const u=Object.keys(i);if(Object.keys(s).filter(P=>u.indexOf(P)<0).forEach(P=>{s[P].unsub(),delete s[P]}),!u.length||++o>n.maxRefDepth)return l(t);let p=0;const g=u.length,v=Object.create(null);function C(P){P in v&&++p>=g&&l(t)}u.forEach(P=>{const N=s[P],V=i[P],F=`${t}.${P}`;if(v[F]=!0,N)if(N.path!==V.path)N.unsub();else return;s[P]={data:()=>Xu(e,F),unsub:Gk({ref:V,target:e,path:F,depth:o,ops:r,resolve:C.bind(null,F),reject:c},n),path:V.path}})}function Qk(n,e,t,s,i,r){const o=Object.assign({},Eh,r),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:f}=o,p="value";let g=si(u?[]:n.value);u||t.set(n,p,[]);const v=s;let C,P=un;const N=[],V={added:({newIndex:L,doc:j})=>{N.splice(L,0,Object.create(null));const oe=N[L],[K,I]=Kc(j.data(c),void 0,oe,o);t.add(In(g),L,K),Qc(o,g,`${p}.${L}`,oe,I,t,0,s.bind(null,j),i)},modified:({oldIndex:L,newIndex:j,doc:oe})=>{const K=In(g),I=N[L],y=K[L],[w,A]=Kc(oe.data(c),y,I,o);N.splice(j,0,I),t.remove(K,L),t.add(K,j,w),Qc(o,g,`${p}.${j}`,I,A,t,0,s,i)},removed:({oldIndex:L})=>{const j=In(g);t.remove(j,L),Ta(N.splice(L,1)[0])}};function F(L){const j=L.docChanges(l);if(!C&&j.length){C=!0;let oe=0;const K=j.length,I=Object.create(null);for(let y=0;y<K;y++)I[j[y].doc.id]=!0;s=y=>{y&&y.id in I&&++oe>=K&&(u&&(t.set(n,p,In(g)),g=n),v(In(g)),s=un)}}j.forEach(oe=>{V[oe.type](oe)}),j.length||(u&&(t.set(n,p,In(g)),g=n),s(In(g)))}return f?H_(e).then(F).catch(i):P=Gu(e,F,i),L=>{if(P(),L){const j=typeof L=="function"?L():[];t.set(n,p,j)}N.forEach(Ta)}}function Yk(n,e,t,s,i,r){const o=Object.assign({},Eh,r),l="value",c=Object.create(null);s=bb(s,()=>Xu(n,l));let u=un;function f(p){p.exists()?Gc(o,n,l,p,c,t,0,s,i):(t.set(n,l,null),s(null))}return o.once?q_(e).then(f).catch(i):u=Gu(e,f,i),p=>{if(u(),p){const g=typeof p=="function"?p():null;t.set(n,l,g)}Ta(c)}}const ig=Symbol();function Xk(n,e){let t=un;const s=Object.assign({},Eh,e),i=In(n),r=s.target||si();Nb()&&(s.once=!0);const o=Hk(i,s.ssrKey,ig,Yu()),l=o!==ig;l&&(r.value=o);let c=!l;const u=si(!1),f=si(),p=Og(),g=gg();let v=un;function C(){let V=In(n);const F=new Promise((L,j)=>{if(t(s.reset),!V)return t=un,L(null);u.value=c,c=!0,V.converter||(V=V.withConverter(s.converter)),t=(Ju(V)?Yk:Qk)(r,V,Jk,L,j,s)}).catch(L=>(p.value===F&&(f.value=L),Promise.reject(L))).finally(()=>{p.value===F&&(u.value=!1)});p.value=F}let P=un;(lt(n)||typeof n=="function")&&(P=dr(n,C)),C(),i&&(v=Wk(p.value,i,s.ssrKey)),um()&&qg(()=>p.value),g&&lE(N);function N(V=s.reset){P(),v(),t(V)}return Object.defineProperties(r,{error:{get:()=>f},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>p},stop:{get:()=>N}})}const Jk={set:(n,e,t)=>Eb(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)},tr=new WeakMap;function Zk(n,e,t){e&&e[n]&&(e[n](t),delete e[n])}const eO={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},tO=function(e,t,s){const i=Object.assign({},eO,t),{bindName:r,unbindName:o}=i,l=e.config.globalProperties;l[o]=function(u,f){Zk(u,tr.get(this),f),delete this.$firestoreRefs[u]},l[r]=function(u,f,p){const g=Object.assign({},i,p),v=ME(this.$data,u);tr.has(this)||tr.set(this,{});const C=tr.get(this);C[u]&&C[u](g.reset);const P=kb(s||Yu(),e).run(()=>pg()),{promise:N,stop:V}=e.runWithContext(()=>P.run(()=>Xk(f,{target:v,...g}))),F=L=>{V(L),P.stop()};return C[u]=F,this.$firestoreRefs[u]=f,N.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,u=typeof c=="function"?c.call(this):c;if(u)for(const f in u)this[r](f,u[f],i)},beforeUnmount(){const c=tr.get(this);if(c)for(const u in c)c[u]();this.$firestoreRefs=null}})};function nO(n){return(e,t)=>tO(t,n,e)}function sO(n,{firebaseApp:e,modules:t=[]}){n.provide(cy,e);for(const s of t)s(e,n)}const Th=_w(Iw);Th.use(pS);Th.use(sO,{firebaseApp:W_,modules:[nO()]});Th.mount("#app");
