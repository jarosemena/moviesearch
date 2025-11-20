(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hu={exports:{}},ii={},Wu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),Df=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Uf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Qf=Symbol.for("react.memo"),Gf=Symbol.for("react.lazy"),aa=Symbol.iterator;function Yf(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Yu={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=Vn.prototype;function ls(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}var ss=ls.prototype=new Ku;ss.constructor=ls;Gu(ss,Vn.prototype);ss.isPureReactComponent=!0;var ua=Array.isArray,Xu=Object.prototype.hasOwnProperty,as={current:null},Zu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Xu.call(t,r)&&!Zu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Or,type:e,key:i,ref:l,props:o,_owner:as.current}}function Kf(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function Xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ca=/\/+/g;function Ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xf(""+e.key):t.toString(36)}function po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Or:case Df:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ti(l,0):r,ua(o)?(n="",e!=null&&(n=e.replace(ca,"$&/")+"/"),po(o,t,n,"",function(u){return u})):o!=null&&(us(o)&&(o=Kf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ca,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ua(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Ti(i,s);l+=po(i,t,n,a,o)}else if(a=Yf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Ti(i,s++),l+=po(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,t,n){if(e==null)return e;var r=[],o=0;return po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Zf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},ho={transition:null},Jf={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ho,ReactCurrentOwner:as};function bu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Vn;L.Fragment=Of;L.Profiler=Bf;L.PureComponent=ls;L.StrictMode=Af;L.Suspense=Wf;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;L.act=bu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=as.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Xu.call(t,a)&&!Zu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Or,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uf,_context:e},e.Consumer=e};L.createElement=Ju;L.createFactory=function(e){var t=Ju.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Hf,render:e}};L.isValidElement=us;L.lazy=function(e){return{$$typeof:Gf,_payload:{_status:-1,_result:e},_init:Zf}};L.memo=function(e,t){return{$$typeof:Qf,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};L.unstable_act=bu;L.useCallback=function(e,t){return we.current.useCallback(e,t)};L.useContext=function(e){return we.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return we.current.useDeferredValue(e)};L.useEffect=function(e,t){return we.current.useEffect(e,t)};L.useId=function(){return we.current.useId()};L.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return we.current.useMemo(e,t)};L.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};L.useRef=function(e){return we.current.useRef(e)};L.useState=function(e){return we.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return we.current.useTransition()};L.version="18.3.1";Wu.exports=L;var P=Wu.exports;const jn=Ff(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=P,qf=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,np=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rp={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tp.call(t,r)&&!rp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qf,type:e,key:i,ref:l,props:o,_owner:np.current}}ii.Fragment=ep;ii.jsx=qu;ii.jsxs=qu;Hu.exports=ii;var v=Hu.exports,il={},ec={exports:{}},ze={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,I){var z=$.length;$.push(I);e:for(;0<z;){var A=z-1>>>1,B=$[A];if(0<o(B,I))$[A]=I,$[z]=B,z=A;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var I=$[0],z=$.pop();if(z!==I){$[0]=z;e:for(var A=0,B=$.length,lt=B>>>1;A<lt;){var Y=2*(A+1)-1,ie=$[Y],b=Y+1,Fe=$[b];if(0>o(ie,z))b<B&&0>o(Fe,ie)?($[A]=Fe,$[b]=z,A=b):($[A]=ie,$[Y]=z,A=Y);else if(b<B&&0>o(Fe,z))$[A]=Fe,$[b]=z,A=b;else break e}}return I}function o($,I){var z=$.sortIndex-I.sortIndex;return z!==0?z:$.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,h=null,m=3,g=!1,w=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=$)r(u),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(u)}}function y($){if(x=!1,f($),!w)if(n(a)!==null)w=!0,Vt(_);else{var I=n(u);I!==null&&it(y,I.startTime-$)}}function _($,I){w=!1,x&&(x=!1,d(j),j=-1),g=!0;var z=m;try{for(f(I),h=n(a);h!==null&&(!(h.expirationTime>I)||$&&!ue());){var A=h.callback;if(typeof A=="function"){h.callback=null,m=h.priorityLevel;var B=A(h.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?h.callback=B:h===n(a)&&r(a),f(I)}else r(a);h=n(a)}if(h!==null)var lt=!0;else{var Y=n(u);Y!==null&&it(y,Y.startTime-I),lt=!1}return lt}finally{h=null,m=z,g=!1}}var E=!1,S=null,j=-1,D=5,R=-1;function ue(){return!(e.unstable_now()-R<D)}function Me(){if(S!==null){var $=e.unstable_now();R=$;var I=!0;try{I=S(!0,$)}finally{I?yt():(E=!1,S=null)}}else E=!1}var yt;if(typeof c=="function")yt=function(){c(Me)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ot=Le.port2;Le.port1.onmessage=Me,yt=function(){ot.postMessage(null)}}else yt=function(){N(Me,0)};function Vt($){S=$,E||(E=!0,yt())}function it($,I){j=N(function(){$(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Vt(_))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var z=m;m=I;try{return $()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,I){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var z=m;m=$;try{return I()}finally{m=z}},e.unstable_scheduleCallback=function($,I,z){var A=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?A+z:A):z=A,$){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,$={id:p++,callback:I,priorityLevel:$,startTime:z,expirationTime:B,sortIndex:-1},z>A?($.sortIndex=z,t(u,$),n(a)===null&&$===n(u)&&(x?(d(j),j=-1):x=!0,it(y,z-A))):($.sortIndex=B,t(a,$),w||g||(w=!0,Vt(_))),$},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function($){var I=m;return function(){var z=m;m=I;try{return $.apply(this,arguments)}finally{m=z}}}})(nc);tc.exports=nc;var op=tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=P,Ie=op;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,wr={};function ln(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(wr[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,da={},fa={};function sp(e){return ll.call(fa,e)?!0:ll.call(da,e)?!1:lp.test(e)?fa[e]=!0:(da[e]=!0,!1)}function ap(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,t,n,r){if(t===null||typeof t>"u"||ap(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cs,ds);fe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cs,ds);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cs,ds);fe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function fs(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(up(t,n,o,r)&&(n=null),r||o===null?sp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),ps=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),hs=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),pa=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ji;function or(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var Ni=!1;function Ii(e,t){if(!e||Ni)return"";Ni=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ni=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function cp(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case sl:return"Profiler";case ps:return"StrictMode";case al:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case hs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function dp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fp(e){var t=sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=fp(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ha(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uc(e,t){t=t.checked,t!=null&&fs(e,"checked",t,!1)}function fl(e,t){uc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ir(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function cc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function hc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var hp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,En=null,_n=null;function ya(e){if(e=Ur(e)){if(typeof wl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ci(t),wl(e.stateNode,e.type,t))}}function mc(e){En?_n?_n.push(e):_n=[e]:En=e}function vc(){if(En){var e=En,t=_n;if(_n=En=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function gc(e,t){return e(t)}function yc(){}var zi=!1;function wc(e,t,n){if(zi)return e(t,n);zi=!0;try{return gc(e,t,n)}finally{zi=!1,(En!==null||_n!==null)&&(yc(),vc())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var xl=!1;if(pt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{xl=!1}function mp(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var cr=!1,zo=null,Ro=!1,kl=null,vp={onError:function(e){cr=!0,zo=e}};function gp(e,t,n,r,o,i,l,s,a){cr=!1,zo=null,mp.apply(vp,arguments)}function yp(e,t,n,r,o,i,l,s,a){if(gp.apply(this,arguments),cr){if(cr){var u=zo;cr=!1,zo=null}else throw Error(C(198));Ro||(Ro=!0,kl=u)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wa(e){if(sn(e)!==e)throw Error(C(188))}function wp(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return wa(o),e;if(i===r)return wa(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function kc(e){return e=wp(e),e!==null?Sc(e):null}function Sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sc(e);if(t!==null)return t;e=e.sibling}return null}var Cc=Ie.unstable_scheduleCallback,xa=Ie.unstable_cancelCallback,xp=Ie.unstable_shouldYield,kp=Ie.unstable_requestPaint,ee=Ie.unstable_now,Sp=Ie.unstable_getCurrentPriorityLevel,gs=Ie.unstable_ImmediatePriority,Ec=Ie.unstable_UserBlockingPriority,Mo=Ie.unstable_NormalPriority,Cp=Ie.unstable_LowPriority,_c=Ie.unstable_IdlePriority,li=null,nt=null;function Ep(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:$p,_p=Math.log,Pp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(_p(e)/Pp|0)|0}var Xr=64,Zr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=lr(s):(i&=l,i!==0&&(r=lr(i)))}else l=n&~o,l!==0?r=lr(l):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),o=1<<n,r|=e[n],t&=~o;return r}function Tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Tp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ke(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ys(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tc,ws,jc,Nc,Ic,Cl=!1,Jr=[],Tt=null,jt=null,Nt=null,Sr=new Map,Cr=new Map,Et=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ur(t),t!==null&&ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zp(e,t,n,r,o){switch(t){case"focusin":return Tt=Zn(Tt,e,t,n,r,o),!0;case"dragenter":return jt=Zn(jt,e,t,n,r,o),!0;case"mouseover":return Nt=Zn(Nt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Sr.set(i,Zn(Sr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Cr.set(i,Zn(Cr.get(i)||null,e,t,n,r,o)),!0}return!1}function zc(e){var t=Gt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=xc(n),t!==null){e.blockedOn=t,Ic(e.priority,function(){jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=Ur(n),t!==null&&ws(t),e.blockedOn=n,!1;t.shift()}return!0}function Sa(e,t,n){mo(e)&&n.delete(t)}function Rp(){Cl=!1,Tt!==null&&mo(Tt)&&(Tt=null),jt!==null&&mo(jt)&&(jt=null),Nt!==null&&mo(Nt)&&(Nt=null),Sr.forEach(Sa),Cr.forEach(Sa)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Rp)))}function Er(e){function t(o){return Jn(o,e)}if(0<Jr.length){Jn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Jn(Tt,e),jt!==null&&Jn(jt,e),Nt!==null&&Jn(Nt,e),Sr.forEach(t),Cr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)zc(n),n.blockedOn===null&&Et.shift()}var Pn=gt.ReactCurrentBatchConfig,Fo=!0;function Mp(e,t,n,r){var o=U,i=Pn.transition;Pn.transition=null;try{U=1,xs(e,t,n,r)}finally{U=o,Pn.transition=i}}function Lp(e,t,n,r){var o=U,i=Pn.transition;Pn.transition=null;try{U=4,xs(e,t,n,r)}finally{U=o,Pn.transition=i}}function xs(e,t,n,r){if(Fo){var o=El(e,t,n,r);if(o===null)Hi(e,t,r,Do,n),ka(e,r);else if(zp(o,e,t,n,r))r.stopPropagation();else if(ka(e,r),t&4&&-1<Ip.indexOf(e)){for(;o!==null;){var i=Ur(o);if(i!==null&&Tc(i),i=El(e,t,n,r),i===null&&Hi(e,t,r,Do,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Do=null;function El(e,t,n,r){if(Do=null,e=vs(r),e=Gt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function Rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sp()){case gs:return 1;case Ec:return 4;case Mo:case Cp:return 16;case _c:return 536870912;default:return 16}default:return 16}}var Pt=null,ks=null,vo=null;function Mc(){if(vo)return vo;var e,t=ks,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return vo=o.slice(e,1<r?1-r:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Ca(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?br:Ca,this.isPropagationStopped=Ca,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Re(Hn),Br=J({},Hn,{view:0,detail:0}),Fp=Re(Br),Mi,Li,bn,si=J({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Mi=e.screenX-bn.screenX,Li=e.screenY-bn.screenY):Li=Mi=0,bn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),Ea=Re(si),Dp=J({},si,{dataTransfer:0}),Op=Re(Dp),Ap=J({},Br,{relatedTarget:0}),Fi=Re(Ap),Bp=J({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=Re(Bp),Vp=J({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=Re(Vp),Wp=J({},Hn,{data:0}),_a=Re(Wp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Cs(){return Kp}var Xp=J({},Br,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=Re(Xp),Jp=J({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=Re(Jp),bp=J({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),qp=Re(bp),eh=J({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Re(eh),nh=J({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=Re(nh),oh=[9,13,27,32],Es=pt&&"CompositionEvent"in window,dr=null;pt&&"documentMode"in document&&(dr=document.documentMode);var ih=pt&&"TextEvent"in window&&!dr,Lc=pt&&(!Es||dr&&8<dr&&11>=dr),$a=" ",Ta=!1;function Fc(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function lh(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Ta=!0,$a);case"textInput":return e=t.data,e===$a&&Ta?null:e;default:return null}}function sh(e,t){if(fn)return e==="compositionend"||!Es&&Fc(e,t)?(e=Mc(),vo=ks=Pt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function Oc(e,t,n,r){mc(r),t=Oo(t,"onChange"),0<t.length&&(n=new Ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,_r=null;function uh(e){Xc(e,0)}function ai(e){var t=mn(e);if(ac(t))return e}function ch(e,t){if(e==="change")return t}var Ac=!1;if(pt){var Di;if(pt){var Oi="oninput"in document;if(!Oi){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Oi=typeof Na.oninput=="function"}Di=Oi}else Di=!1;Ac=Di&&(!document.documentMode||9<document.documentMode)}function Ia(){fr&&(fr.detachEvent("onpropertychange",Bc),_r=fr=null)}function Bc(e){if(e.propertyName==="value"&&ai(_r)){var t=[];Oc(t,_r,e,vs(e)),wc(uh,t)}}function dh(e,t,n){e==="focusin"?(Ia(),fr=t,_r=n,fr.attachEvent("onpropertychange",Bc)):e==="focusout"&&Ia()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(_r)}function ph(e,t){if(e==="click")return ai(t)}function hh(e,t){if(e==="input"||e==="change")return ai(t)}function mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:mh;function Pr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=Vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(r!==null&&_s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ra(n,i);var l=Ra(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=pt&&"documentMode"in document&&11>=document.documentMode,pn=null,_l=null,pr=null,Pl=!1;function Ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||pn==null||pn!==Io(r)||(r=pn,"selectionStart"in r&&_s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Pr(pr,r)||(pr=r,r=Oo(_l,"onSelect"),0<r.length&&(t=new Ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},Ai={},Hc={};pt&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function ui(e){if(Ai[e])return Ai[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hc)return Ai[e]=t[n];return e}var Wc=ui("animationend"),Qc=ui("animationiteration"),Gc=ui("animationstart"),Yc=ui("transitionend"),Kc=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Kc.set(e,t),ln(t,[e])}for(var Bi=0;Bi<La.length;Bi++){var Ui=La[Bi],yh=Ui.toLowerCase(),wh=Ui[0].toUpperCase()+Ui.slice(1);Ot(yh,"on"+wh)}Ot(Wc,"onAnimationEnd");Ot(Qc,"onAnimationIteration");Ot(Gc,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Yc,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yp(r,t,void 0,e),e.currentTarget=null}function Xc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Fa(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Fa(o,s,u),i=a}}}if(Ro)throw e=kl,Ro=!1,kl=null,e}function H(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Zc(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),Zc(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[eo]){e[eo]=!0,rc.forEach(function(n){n!=="selectionchange"&&(xh.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Vi("selectionchange",!1,t))}}function Zc(e,t,n,r){switch(Rc(t)){case 1:var o=Mp;break;case 4:o=Lp;break;default:o=xs}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}wc(function(){var u=i,p=vs(n),h=[];e:{var m=Kc.get(e);if(m!==void 0){var g=Ss,w=e;switch(e){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":g=Zp;break;case"focusin":w="focus",g=Fi;break;case"focusout":w="blur",g=Fi;break;case"beforeblur":case"afterblur":g=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qp;break;case Wc:case Qc:case Gc:g=Up;break;case Yc:g=th;break;case"scroll":g=Fp;break;case"wheel":g=rh;break;case"copy":case"cut":case"paste":g=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pa}var x=(t&4)!==0,N=!x&&e==="scroll",d=x?m!==null?m+"Capture":null:m;x=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=kr(c,d),y!=null&&x.push(Tr(c,y,f)))),N)break;c=c.return}0<x.length&&(m=new g(m,w,null,n,p),h.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==yl&&(w=n.relatedTarget||n.fromElement)&&(Gt(w)||w[ht]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Gt(w):null,w!==null&&(N=sn(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(x=Ea,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Pa,y="onPointerLeave",d="onPointerEnter",c="pointer"),N=g==null?m:mn(g),f=w==null?m:mn(w),m=new x(y,c+"leave",g,n,p),m.target=N,m.relatedTarget=f,y=null,Gt(p)===u&&(x=new x(d,c+"enter",w,n,p),x.target=f,x.relatedTarget=N,y=x),N=y,g&&w)t:{for(x=g,d=w,c=0,f=x;f;f=an(f))c++;for(f=0,y=d;y;y=an(y))f++;for(;0<c-f;)x=an(x),c--;for(;0<f-c;)d=an(d),f--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=an(x),d=an(d)}x=null}else x=null;g!==null&&Da(h,m,g,x,!1),w!==null&&N!==null&&Da(h,N,w,x,!0)}}e:{if(m=u?mn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var _=ch;else if(ja(m))if(Ac)_=hh;else{_=fh;var E=dh}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=ph);if(_&&(_=_(e,u))){Oc(h,_,n,p);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&pl(m,"number",m.value)}switch(E=u?mn(u):window,e){case"focusin":(ja(E)||E.contentEditable==="true")&&(pn=E,_l=u,pr=null);break;case"focusout":pr=_l=pn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ma(h,n,p);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":Ma(h,n,p)}var S;if(Es)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else fn?Fc(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Lc&&n.locale!=="ko"&&(fn||j!=="onCompositionStart"?j==="onCompositionEnd"&&fn&&(S=Mc()):(Pt=p,ks="value"in Pt?Pt.value:Pt.textContent,fn=!0)),E=Oo(u,j),0<E.length&&(j=new _a(j,e,null,n,p),h.push({event:j,listeners:E}),S?j.data=S:(S=Dc(n),S!==null&&(j.data=S)))),(S=ih?lh(e,n):sh(e,n))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(p=new _a("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=S))}Xc(h,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=kr(e,n),i!=null&&r.unshift(Tr(e,i,o)),i=kr(e,t),i!=null&&r.push(Tr(e,i,o))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=kr(n,i),a!=null&&l.unshift(Tr(n,a,s))):o||(a=kr(n,i),a!=null&&l.push(Tr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Sh,"")}function to(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(C(425))}function Ao(){}var $l=null,Tl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(_h)}:Nl;function _h(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Wn,jr="__reactProps$"+Wn,ht="__reactContainer$"+Wn,Il="__reactEvents$"+Wn,Ph="__reactListeners$"+Wn,$h="__reactHandles$"+Wn;function Gt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[tt])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[tt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ci(e){return e[jr]||null}var zl=[],vn=-1;function At(e){return{current:e}}function G(e){0>vn||(e.current=zl[vn],zl[vn]=null,vn--)}function V(e,t){vn++,zl[vn]=e.current,e.current=t}var Dt={},ve=At(Dt),Ee=At(!1),en=Dt;function In(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Bo(){G(Ee),G(ve)}function Ua(e,t,n){if(ve.current!==Dt)throw Error(C(168));V(ve,t),V(Ee,n)}function Jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,dp(e)||"Unknown",o));return J({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,en=ve.current,V(ve,e),V(Ee,Ee.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Jc(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(ve),V(ve,e)):G(Ee),V(Ee,n)}var ut=null,di=!1,Qi=!1;function bc(e){ut===null?ut=[e]:ut.push(e)}function Th(e){di=!0,bc(e)}function Bt(){if(!Qi&&ut!==null){Qi=!0;var e=0,t=U;try{var n=ut;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,di=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),Cc(gs,Bt),o}finally{U=t,Qi=!1}}return null}var gn=[],yn=0,Vo=null,Ho=0,De=[],Oe=0,tn=null,ct=1,dt="";function Wt(e,t){gn[yn++]=Ho,gn[yn++]=Vo,Vo=e,Ho=t}function qc(e,t,n){De[Oe++]=ct,De[Oe++]=dt,De[Oe++]=tn,tn=e;var r=ct;e=dt;var o=32-Ke(r)-1;r&=~(1<<o),n+=1;var i=32-Ke(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ct=1<<32-Ke(t)+o|n<<o|r,dt=i+e}else ct=1<<i|n<<o|r,dt=e}function Ps(e){e.return!==null&&(Wt(e,1),qc(e,1,0))}function $s(e){for(;e===Vo;)Vo=gn[--yn],gn[yn]=null,Ho=gn[--yn],gn[yn]=null;for(;e===tn;)tn=De[--Oe],De[Oe]=null,dt=De[--Oe],De[Oe]=null,ct=De[--Oe],De[Oe]=null}var Ne=null,je=null,K=!1,Ye=null;function ed(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,je=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,je=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(K){var t=je;if(t){var n=t;if(!Ha(e,t)){if(Rl(e))throw Error(C(418));t=It(n.nextSibling);var r=Ne;t&&Ha(e,t)?ed(r,n):(e.flags=e.flags&-4097|2,K=!1,Ne=e)}}else{if(Rl(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Ne=e}}}function Wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function no(e){if(e!==Ne)return!1;if(!K)return Wa(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=je)){if(Rl(e))throw td(),Error(C(418));for(;t;)ed(e,t),t=It(t.nextSibling)}if(Wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ne?It(e.stateNode.nextSibling):null;return!0}function td(){for(var e=je;e;)e=It(e.nextSibling)}function zn(){je=Ne=null,K=!1}function Ts(e){Ye===null?Ye=[e]:Ye.push(e)}var jh=gt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function nd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Lt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,y){return c===null||c.tag!==6?(c=bi(f,d.mode,y),c.return=d,c):(c=o(c,f),c.return=d,c)}function a(d,c,f,y){var _=f.type;return _===dn?p(d,c,f.props.children,y,f.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===St&&Qa(_)===c.type)?(y=o(c,f.props),y.ref=qn(d,c,f),y.return=d,y):(y=Eo(f.type,f.key,f.props,null,d.mode,y),y.ref=qn(d,c,f),y.return=d,y)}function u(d,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=qi(f,d.mode,y),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,y,_){return c===null||c.tag!==7?(c=Jt(f,d.mode,y,_),c.return=d,c):(c=o(c,f),c.return=d,c)}function h(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bi(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Gr:return f=Eo(c.type,c.key,c.props,null,d.mode,f),f.ref=qn(d,null,c),f.return=d,f;case cn:return c=qi(c,d.mode,f),c.return=d,c;case St:var y=c._init;return h(d,y(c._payload),f)}if(ir(c)||Kn(c))return c=Jt(c,d.mode,f,null),c.return=d,c;ro(d,c)}return null}function m(d,c,f,y){var _=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:s(d,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gr:return f.key===_?a(d,c,f,y):null;case cn:return f.key===_?u(d,c,f,y):null;case St:return _=f._init,m(d,c,_(f._payload),y)}if(ir(f)||Kn(f))return _!==null?null:p(d,c,f,y,null);ro(d,f)}return null}function g(d,c,f,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(c,d,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gr:return d=d.get(y.key===null?f:y.key)||null,a(c,d,y,_);case cn:return d=d.get(y.key===null?f:y.key)||null,u(c,d,y,_);case St:var E=y._init;return g(d,c,f,E(y._payload),_)}if(ir(y)||Kn(y))return d=d.get(f)||null,p(c,d,y,_,null);ro(c,y)}return null}function w(d,c,f,y){for(var _=null,E=null,S=c,j=c=0,D=null;S!==null&&j<f.length;j++){S.index>j?(D=S,S=null):D=S.sibling;var R=m(d,S,f[j],y);if(R===null){S===null&&(S=D);break}e&&S&&R.alternate===null&&t(d,S),c=i(R,c,j),E===null?_=R:E.sibling=R,E=R,S=D}if(j===f.length)return n(d,S),K&&Wt(d,j),_;if(S===null){for(;j<f.length;j++)S=h(d,f[j],y),S!==null&&(c=i(S,c,j),E===null?_=S:E.sibling=S,E=S);return K&&Wt(d,j),_}for(S=r(d,S);j<f.length;j++)D=g(S,d,j,f[j],y),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?j:D.key),c=i(D,c,j),E===null?_=D:E.sibling=D,E=D);return e&&S.forEach(function(ue){return t(d,ue)}),K&&Wt(d,j),_}function x(d,c,f,y){var _=Kn(f);if(typeof _!="function")throw Error(C(150));if(f=_.call(f),f==null)throw Error(C(151));for(var E=_=null,S=c,j=c=0,D=null,R=f.next();S!==null&&!R.done;j++,R=f.next()){S.index>j?(D=S,S=null):D=S.sibling;var ue=m(d,S,R.value,y);if(ue===null){S===null&&(S=D);break}e&&S&&ue.alternate===null&&t(d,S),c=i(ue,c,j),E===null?_=ue:E.sibling=ue,E=ue,S=D}if(R.done)return n(d,S),K&&Wt(d,j),_;if(S===null){for(;!R.done;j++,R=f.next())R=h(d,R.value,y),R!==null&&(c=i(R,c,j),E===null?_=R:E.sibling=R,E=R);return K&&Wt(d,j),_}for(S=r(d,S);!R.done;j++,R=f.next())R=g(S,d,j,R.value,y),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?j:R.key),c=i(R,c,j),E===null?_=R:E.sibling=R,E=R);return e&&S.forEach(function(Me){return t(d,Me)}),K&&Wt(d,j),_}function N(d,c,f,y){if(typeof f=="object"&&f!==null&&f.type===dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Gr:e:{for(var _=f.key,E=c;E!==null;){if(E.key===_){if(_=f.type,_===dn){if(E.tag===7){n(d,E.sibling),c=o(E,f.props.children),c.return=d,d=c;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===St&&Qa(_)===E.type){n(d,E.sibling),c=o(E,f.props),c.ref=qn(d,E,f),c.return=d,d=c;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===dn?(c=Jt(f.props.children,d.mode,y,f.key),c.return=d,d=c):(y=Eo(f.type,f.key,f.props,null,d.mode,y),y.ref=qn(d,c,f),y.return=d,d=y)}return l(d);case cn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=qi(f,d.mode,y),c.return=d,d=c}return l(d);case St:return E=f._init,N(d,c,E(f._payload),y)}if(ir(f))return w(d,c,f,y);if(Kn(f))return x(d,c,f,y);ro(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=bi(f,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return N}var Rn=nd(!0),rd=nd(!1),Wo=At(null),Qo=null,wn=null,js=null;function Ns(){js=wn=Qo=null}function Is(e){var t=Wo.current;G(Wo),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Qo=e,js=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(js!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Qo===null)throw Error(C(308));wn=e,Qo.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Yt=null;function zs(e){Yt===null?Yt=[e]:Yt.push(e)}function od(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zs(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,zs(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ys(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(m=t,g=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=J({},h,m);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=g,a=h):p=p.next=g,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=h}}function Ya(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Vr={},rt=At(Vr),Nr=At(Vr),Ir=At(Vr);function Kt(e){if(e===Vr)throw Error(C(174));return e}function Ms(e,t){switch(V(Ir,t),V(Nr,e),V(rt,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}G(rt),V(rt,t)}function Mn(){G(rt),G(Nr),G(Ir)}function ld(e){Kt(Ir.current);var t=Kt(rt.current),n=ml(t,e.type);t!==n&&(V(Nr,e),V(rt,n))}function Ls(e){Nr.current===e&&(G(rt),G(Nr))}var X=At(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Fs(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var wo=gt.ReactCurrentDispatcher,Yi=gt.ReactCurrentBatchConfig,nn=0,Z=null,re=null,le=null,Ko=!1,hr=!1,zr=0,Nh=0;function pe(){throw Error(C(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Os(e,t,n,r,o,i){if(nn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?Mh:Lh,e=n(r,o),hr){i=0;do{if(hr=!1,zr=0,25<=i)throw Error(C(301));i+=1,le=re=null,t.updateQueue=null,wo.current=Fh,e=n(r,o)}while(hr)}if(wo.current=Xo,t=re!==null&&re.next!==null,nn=0,le=re=Z=null,Ko=!1,t)throw Error(C(300));return e}function As(){var e=zr!==0;return zr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function Ve(){if(re===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(C(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function Rr(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=Ve(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((nn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,Z.lanes|=p,rn|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Je(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sd(){}function ad(e,t){var n=Z,r=Ve(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Bs(dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Mr(9,cd.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(C(349));nn&30||ud(n,t,o)}return o}function ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,r){t.value=n,t.getSnapshot=r,fd(t)&&pd(e)}function dd(e,t,n){return n(function(){fd(t)&&pd(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function pd(e){var t=mt(e,1);t!==null&&Xe(t,e,1,-1)}function Ka(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Rh.bind(null,Z,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hd(){return Ve().memoizedState}function xo(e,t,n,r){var o=qe();Z.flags|=e,o.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(re!==null){var l=re.memoizedState;if(i=l.destroy,r!==null&&Ds(r,l.deps)){o.memoizedState=Mr(t,n,i,r);return}}Z.flags|=e,o.memoizedState=Mr(1|t,n,i,r)}function Xa(e,t){return xo(8390656,8,e,t)}function Bs(e,t){return fi(2048,8,e,t)}function md(e,t){return fi(4,2,e,t)}function vd(e,t){return fi(4,4,e,t)}function gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yd(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,gd.bind(null,t,e),n)}function Us(){}function wd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kd(e,t,n){return nn&21?(Je(n,t)||(n=Pc(),Z.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Ih(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{U=n,Yi.transition=r}}function Sd(){return Ve().memoizedState}function zh(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(e))Ed(t,n);else if(n=od(e,t,n,r),n!==null){var o=ye();Xe(n,e,r,o),_d(n,t,r)}}function Rh(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))Ed(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Je(s,l)){var a=t.interleaved;a===null?(o.next=o,zs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=od(e,t,o,r),n!==null&&(o=ye(),Xe(n,e,r,o),_d(n,t,r))}}function Cd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Ed(e,t){hr=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ys(e,n)}}var Xo={readContext:Ue,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Mh={readContext:Ue,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Ka,useDebugValue:Us,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Ka(!1),t=e[0];return e=Ih.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=qe();if(K){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ae===null)throw Error(C(349));nn&30||ud(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Xa(dd.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,cd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=qe(),t=ae.identifierPrefix;if(K){var n=dt,r=ct;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:Ue,useCallback:wd,useContext:Ue,useEffect:Bs,useImperativeHandle:yd,useInsertionEffect:md,useLayoutEffect:vd,useMemo:xd,useReducer:Ki,useRef:hd,useState:function(){return Ki(Rr)},useDebugValue:Us,useDeferredValue:function(e){var t=Ve();return kd(t,re.memoizedState,e)},useTransition:function(){var e=Ki(Rr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:sd,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1},Fh={readContext:Ue,useCallback:wd,useContext:Ue,useEffect:Bs,useImperativeHandle:yd,useInsertionEffect:md,useLayoutEffect:vd,useMemo:xd,useReducer:Xi,useRef:hd,useState:function(){return Xi(Rr)},useDebugValue:Us,useDeferredValue:function(e){var t=Ve();return re===null?t.memoizedState=e:kd(t,re.memoizedState,e)},useTransition:function(){var e=Xi(Rr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:sd,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),i=ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Xe(t,e,o,r),yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),i=ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Xe(t,e,o,r),yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Mt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=zt(e,o,r),t!==null&&(Xe(t,e,r,n),yo(t,e,r))}};function Za(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function Pd(e,t,n){var r=!1,o=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=_e(t)?en:ve.current,r=t.contextTypes,i=(r=r!=null)?In(e,o):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Rs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=_e(t)?en:ve.current,o.context=In(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pi.enqueueReplaceState(o,o.state,null),Go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=cp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function $d(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jo||(Jo=!0,Kl=r),Ol(e,t)},n}function Td(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jh.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var Oh=gt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?rd(t,null,n,r):Rn(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var i=t.ref;return $n(t,o),r=Os(e,t,n,r,i,o),n=As(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(K&&n&&Ps(t),t.flags|=1,ge(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jd(e,t,i,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,o)}return Al(e,t,n,r,o)}function Nd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(kn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(kn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(kn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(kn,Te),Te|=r;return ge(e,t,o,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,o){var i=_e(n)?en:ve.current;return i=In(t,i),$n(t,o),n=Os(e,t,n,r,i,o),r=As(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(K&&r&&Ps(t),t.flags|=1,ge(e,t,n,o),t.child)}function ru(e,t,n,r,o){if(_e(n)){var i=!0;Uo(t)}else i=!1;if($n(t,o),t.stateNode===null)ko(e,t),Pd(t,n,r),Dl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=_e(n)?en:ve.current,u=In(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ja(t,l,r,u),Ct=!1;var m=t.memoizedState;l.state=m,Go(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Ee.current||Ct?(typeof p=="function"&&(Fl(t,n,p,r),a=t.memoizedState),(s=Ct||Za(t,n,s,r,m,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,id(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Qe(t.type,s),l.props=u,h=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=_e(n)?en:ve.current,a=In(t,a));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Ja(t,l,r,a),Ct=!1,m=t.memoizedState,l.state=m,Go(t,r,l,o);var w=t.memoizedState;s!==h||m!==w||Ee.current||Ct?(typeof g=="function"&&(Fl(t,n,g,r),w=t.memoizedState),(u=Ct||Za(t,n,u,r,m,w,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,i,o)}function Bl(e,t,n,r,o,i){Id(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Va(t,n,!1),vt(e,t,i);r=t.stateNode,Oh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,i),t.child=Rn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,o&&Va(t,n,!0),t.child}function zd(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ms(e,t.containerInfo)}function ou(e,t,n,r,o){return zn(),Ts(o),t.flags|=256,ge(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,t,n){var r=t.pendingProps,o=X.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(X,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=vi(l,r,0,null),e=Jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vl(n),t.memoizedState=Ul,e):Vs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ah(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Lt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Lt(s,i):(i=Jt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Vl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vs(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&Ts(r),Rn(t,e.child,null,n),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ah(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(C(422))),oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=vi({mode:"visible",children:r.children},o,0,null),i=Jt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Rn(t,e.child,null,l),t.child.memoizedState=Vl(l),t.memoizedState=Ul,i);if(!(t.mode&1))return oo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=Zi(i,r,void 0),oo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,mt(e,o),Xe(r,e,o,-1))}return Ks(),r=Zi(Error(C(421))),oo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,je=It(o.nextSibling),Ne=t,K=!0,Ye=null,e!==null&&(De[Oe++]=ct,De[Oe++]=dt,De[Oe++]=tn,ct=e.id,dt=e.overflow,tn=t),t=Vs(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Ji(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Md(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ji(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ji(t,!0,n,null,i);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bh(e,t,n){switch(t.tag){case 3:zd(t),zn();break;case 5:ld(t);break;case 1:_e(t.type)&&Uo(t);break;case 4:Ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Rd(e,t,n):(V(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);V(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Md(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Nd(e,t,n)}return vt(e,t,n)}var Ld,Hl,Fd,Dd;Ld=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};Fd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(rt.current);var i=null;switch(n){case"input":o=dl(e,o),r=dl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=hl(e,o),r=hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}vl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uh(e,t,n){var r=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&Bo(),he(t),null;case 3:return r=t.stateNode,Mn(),G(Ee),G(ve),Fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Jl(Ye),Ye=null))),Hl(e,t),he(t),null;case 5:Ls(t);var o=Kt(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return he(t),null}if(e=Kt(rt.current),no(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tt]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)H(sr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ha(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":va(r,i),H("invalid",r)}vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&to(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&to(r.textContent,s,e),o=["children",""+s]):wr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Yr(r),ma(r,i,!0);break;case"textarea":Yr(r),ga(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ao)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[jr]=r,Ld(e,t,!1,!1),t.stateNode=e;e:{switch(l=gl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)H(sr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":ha(e,r),o=dl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":va(e,r),o=hl(e,r),H("invalid",e);break;default:o=r}vl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?hc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&fs(e,i,a,l))}switch(n){case"input":Yr(e),ma(e,r,!1);break;case"textarea":Yr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Kt(Ir.current),Kt(rt.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return he(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&je!==null&&t.mode&1&&!(t.flags&128))td(),zn(),t.flags|=98560,i=!1;else if(i=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[tt]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ye!==null&&(Jl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?oe===0&&(oe=3):Ks())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Mn(),Hl(e,t),e===null&&$r(t.stateNode.containerInfo),he(t),null;case 10:return Is(t.type._context),he(t),null;case 17:return _e(t.type)&&Bo(),he(t),null;case 19:if(G(X),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)er(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yo(e),l!==null){for(t.flags|=128,er(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Fn&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*ee()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=X.current,V(X,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Vh(e,t){switch($s(t),t.tag){case 1:return _e(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),G(Ee),G(ve),Fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return Mn(),null;case 10:return Is(t.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var io=!1,me=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,T=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){q(e,t,r)}}var lu=!1;function Wh(e,t){if($l=Fo,e=Vc(),_s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var g;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Fo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,N=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),N);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=lu,lu=!1,w}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wl(t,n,i)}o=o.next}while(o!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[jr],delete t[Il],delete t[Ph],delete t[$h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var ce=null,Ge=!1;function xt(e,t,n){for(n=n.child;n!==null;)Bd(e,t,n),n=n.sibling}function Bd(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:me||xn(n,t);case 6:var r=ce,o=Ge;ce=null,xt(e,t,n),ce=r,Ge=o,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Er(e)):Wi(ce,n.stateNode));break;case 4:r=ce,o=Ge,ce=n.stateNode.containerInfo,Ge=!0,xt(e,t,n),ce=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Wl(n,t,l),o=o.next}while(o!==r)}xt(e,t,n);break;case 1:if(!me&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,xt(e,t,n),me=r):xt(e,t,n);break;default:xt(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hh),t.forEach(function(r){var o=qh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,Ge=!1;break e;case 3:ce=s.stateNode.containerInfo,Ge=!0;break e;case 4:ce=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ce===null)throw Error(C(160));Bd(i,l,o),ce=null,Ge=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),be(e),r&4){try{mr(3,e,e.return),hi(3,e)}catch(x){q(e,e.return,x)}try{mr(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:We(t,e),be(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(We(t,e),be(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(x){q(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&uc(o,i),gl(s,l);var u=gl(s,i);for(l=0;l<a.length;l+=2){var p=a[l],h=a[l+1];p==="style"?hc(o,h):p==="dangerouslySetInnerHTML"?fc(o,h):p==="children"?xr(o,h):fs(o,p,h,u)}switch(s){case"input":fl(o,i);break;case"textarea":cc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Cn(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Cn(o,!!i.multiple,i.defaultValue,!0):Cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(x){q(e,e.return,x)}}break;case 6:if(We(t,e),be(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){q(e,e.return,x)}}break;case 3:if(We(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:We(t,e),be(e);break;case 13:We(t,e),be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qs=ee())),r&4&&au(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||p,We(t,e),me=u):We(t,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(h=T=p;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:mr(4,m,m.return);break;case 1:xn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){cu(h);continue}}g!==null?(g.return=m,T=g):cu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pc("display",l))}catch(x){q(e,e.return,x)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){q(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),be(e),r&4&&au(e);break;case 21:break;default:We(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ad(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var i=su(e);Yl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=su(e);Gl(e,s,l);break;default:throw Error(C(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){T=e,Vd(e)}function Vd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||io;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=io;var u=me;if(io=l,(me=a)&&!u)for(T=o;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?du(o):a!==null?(a.return=l,T=a):du(o);for(;i!==null;)T=i,Vd(i),i=i.sibling;T=o,io=s,me=u}uu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):uu(e)}}function uu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ya(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ya(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||t.flags&512&&Ql(t)}catch(m){q(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function cu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function du(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){q(t,o,a)}}var i=t.return;try{Ql(t)}catch(a){q(t,i,a)}break;case 5:var l=t.return;try{Ql(t)}catch(a){q(t,l,a)}}}catch(a){q(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Gh=Math.ceil,Zo=gt.ReactCurrentDispatcher,Hs=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,F=0,ae=null,ne=null,de=0,Te=0,kn=At(0),oe=0,Lr=null,rn=0,mi=0,Ws=0,vr=null,ke=null,Qs=0,Fn=1/0,st=null,Jo=!1,Kl=null,Rt=null,lo=!1,$t=null,bo=0,gr=0,Xl=null,So=-1,Co=0;function ye(){return F&6?ee():So!==-1?So:So=ee()}function Mt(e){return e.mode&1?F&2&&de!==0?de&-de:jh.transition!==null?(Co===0&&(Co=Pc()),Co):(e=U,e!==0||(e=window.event,e=e===void 0?16:Rc(e.type)),e):1}function Xe(e,t,n,r){if(50<gr)throw gr=0,Xl=null,Error(C(185));Ar(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(mi|=n),oe===4&&_t(e,de)),Pe(e,r),n===1&&F===0&&!(t.mode&1)&&(Fn=ee()+500,di&&Bt()))}function Pe(e,t){var n=e.callbackNode;jp(e,t);var r=Lo(e,e===ae?de:0);if(r===0)n!==null&&xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xa(n),t===1)e.tag===0?Th(fu.bind(null,e)):bc(fu.bind(null,e)),Eh(function(){!(F&6)&&Bt()}),n=null;else{switch($c(r)){case 1:n=gs;break;case 4:n=Ec;break;case 16:n=Mo;break;case 536870912:n=_c;break;default:n=Mo}n=Zd(n,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hd(e,t){if(So=-1,Co=0,F&6)throw Error(C(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Lo(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qo(e,r);else{t=r;var o=F;F|=2;var i=Qd();(ae!==e||de!==t)&&(st=null,Fn=ee()+500,Zt(e,t));do try{Xh();break}catch(s){Wd(e,s)}while(!0);Ns(),Zo.current=i,F=o,ne!==null?t=0:(ae=null,de=0,t=oe)}if(t!==0){if(t===2&&(o=Sl(e),o!==0&&(r=o,t=Zl(e,o))),t===1)throw n=Lr,Zt(e,0),_t(e,r),Pe(e,ee()),n;if(t===6)_t(e,r);else{if(o=e.current.alternate,!(r&30)&&!Yh(o)&&(t=qo(e,r),t===2&&(i=Sl(e),i!==0&&(r=i,t=Zl(e,i))),t===1))throw n=Lr,Zt(e,0),_t(e,r),Pe(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Qt(e,ke,st);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Qs+500-ee(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(Qt.bind(null,e,ke,st),t);break}Qt(e,ke,st);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gh(r/1960))-r,10<r){e.timeoutHandle=Nl(Qt.bind(null,e,ke,st),r);break}Qt(e,ke,st);break;case 5:Qt(e,ke,st);break;default:throw Error(C(329))}}}return Pe(e,ee()),e.callbackNode===n?Hd.bind(null,e):null}function Zl(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=qo(e,t),e!==2&&(t=ke,ke=n,t!==null&&Jl(t)),e}function Jl(e){ke===null?ke=e:ke.push.apply(ke,e)}function Yh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~Ws,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(F&6)throw Error(C(327));Tn();var t=Lo(e,0);if(!(t&1))return Pe(e,ee()),null;var n=qo(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=Lr,Zt(e,0),_t(e,t),Pe(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,ke,st),Pe(e,ee()),null}function Gs(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Fn=ee()+500,di&&Bt())}}function on(e){$t!==null&&$t.tag===0&&!(F&6)&&Tn();var t=F;F|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,F=t,!(F&6)&&Bt()}}function Ys(){Te=kn.current,G(kn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ch(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch($s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:Mn(),G(Ee),G(ve),Fs();break;case 5:Ls(r);break;case 4:Mn();break;case 13:G(X);break;case 19:G(X);break;case 10:Is(r.type._context);break;case 22:case 23:Ys()}n=n.return}if(ae=e,ne=e=Lt(e.current,null),de=Te=t,oe=0,Lr=null,Ws=mi=rn=0,ke=vr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function Wd(e,t){do{var n=ne;try{if(Ns(),wo.current=Xo,Ko){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ko=!1}if(nn=0,le=re=Z=null,hr=!1,zr=0,Hs.current=null,n===null||n.return===null){oe=1,Lr=t,ne=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=qa(l);if(g!==null){g.flags&=-257,eu(g,l,s,i,t),g.mode&1&&ba(i,u,t),t=g,a=u;var w=t.updateQueue;if(w===null){var x=new Set;x.add(a),t.updateQueue=x}else w.add(a);break e}else{if(!(t&1)){ba(i,u,t),Ks();break e}a=Error(C(426))}}else if(K&&s.mode&1){var N=qa(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),eu(N,l,s,i,t),Ts(Ln(a,s));break e}}i=a=Ln(a,s),oe!==4&&(oe=2),vr===null?vr=[i]:vr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=$d(i,a,t);Ga(i,d);break e;case 1:s=a;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rt===null||!Rt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Td(i,s,t);Ga(i,y);break e}}i=i.return}while(i!==null)}Yd(n)}catch(_){t=_,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Qd(){var e=Zo.current;return Zo.current=Xo,e===null?Xo:e}function Ks(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(rn&268435455)&&!(mi&268435455)||_t(ae,de)}function qo(e,t){var n=F;F|=2;var r=Qd();(ae!==e||de!==t)&&(st=null,Zt(e,t));do try{Kh();break}catch(o){Wd(e,o)}while(!0);if(Ns(),F=n,Zo.current=r,ne!==null)throw Error(C(261));return ae=null,de=0,oe}function Kh(){for(;ne!==null;)Gd(ne)}function Xh(){for(;ne!==null&&!xp();)Gd(ne)}function Gd(e){var t=Xd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Yd(e):ne=t,Hs.current=null}function Yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vh(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(n=Uh(n,t,Te),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Qt(e,t,n){var r=U,o=Be.transition;try{Be.transition=null,U=1,Zh(e,t,n,r)}finally{Be.transition=o,U=r}return null}function Zh(e,t,n,r){do Tn();while($t!==null);if(F&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Np(e,i),e===ae&&(ne=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Zd(Mo,function(){return Tn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=U;U=1;var s=F;F|=4,Hs.current=null,Wh(e,n),Ud(n,e),vh(Tl),Fo=!!$l,Tl=$l=null,e.current=n,Qh(n),kp(),F=s,U=l,Be.transition=i}else e.current=n;if(lo&&(lo=!1,$t=e,bo=o),i=e.pendingLanes,i===0&&(Rt=null),Ep(n.stateNode),Pe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Jo)throw Jo=!1,e=Kl,Kl=null,e;return bo&1&&e.tag!==0&&Tn(),i=e.pendingLanes,i&1?e===Xl?gr++:(gr=0,Xl=e):gr=0,Bt(),null}function Tn(){if($t!==null){var e=$c(bo),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,bo=0,F&6)throw Error(C(331));var o=F;for(F|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:mr(8,p,i)}var h=p.child;if(h!==null)h.return=p,T=h;else for(;T!==null;){p=T;var m=p.sibling,g=p.return;if(Od(p),p===u){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,T=d;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hi(9,s)}}catch(_){q(s,s.return,_)}if(s===l){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(F=o,Bt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function pu(e,t,n){t=Ln(n,t),t=$d(e,t,1),e=zt(e,t,1),t=ye(),e!==null&&(Ar(e,1,t),Pe(e,t))}function q(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=Ln(n,e),e=Td(t,e,1),t=zt(t,e,1),e=ye(),t!==null&&(Ar(t,1,e),Pe(t,e));break}}t=t.return}}function Jh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(oe===4||oe===3&&(de&130023424)===de&&500>ee()-Qs?Zt(e,0):Ws|=n),Pe(e,t)}function Kd(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=ye();e=mt(e,t),e!==null&&(Ar(e,t,n),Pe(e,n))}function bh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kd(e,n)}function qh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Kd(e,n)}var Xd;Xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Bh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&qc(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=In(t,ve.current);$n(t,n),o=Os(null,t,r,e,o,n);var i=As();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,Uo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rs(t),o.updater=pi,t.stateNode=o,o._reactInternals=t,Dl(t,r,e,n),t=Bl(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Ps(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=tm(r),e=Qe(r,e),o){case 0:t=Al(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,Qe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Al(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ru(e,t,r,o,n);case 3:e:{if(zd(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,id(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ln(Error(C(423)),t),t=ou(e,t,r,n,o);break e}else if(r!==o){o=Ln(Error(C(424)),t),t=ou(e,t,r,n,o);break e}else for(je=It(t.stateNode.containerInfo.firstChild),Ne=t,K=!0,Ye=null,n=rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===o){t=vt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return ld(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,jl(r,o)?l=null:i!==null&&jl(r,i)&&(t.flags|=32),Id(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return Rd(e,t,n);case 4:return Ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),tu(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(Wo,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!Ee.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ft(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ll(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ll(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$n(t,n),o=Ue(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),nu(e,t,r,o,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ko(e,t),t.tag=1,_e(r)?(e=!0,Uo(t)):e=!1,$n(t,n),Pd(t,r,o),Dl(t,r,o,n),Bl(null,t,r,!0,e,n);case 19:return Md(e,t,n);case 22:return Nd(e,t,n)}throw Error(C(156,t.tag))};function Zd(e,t){return Cc(e,t)}function em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new em(e,t,n,r)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return Xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hs)return 11;if(e===ms)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Xs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Jt(n.children,o,i,t);case ps:l=8,o|=8;break;case sl:return e=Ae(12,n,t,o|2),e.elementType=sl,e.lanes=i,e;case al:return e=Ae(13,n,t,o),e.elementType=al,e.lanes=i,e;case ul:return e=Ae(19,n,t,o),e.elementType=ul,e.lanes=i,e;case lc:return vi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:l=10;break e;case ic:l=9;break e;case hs:l=11;break e;case ms:l=14;break e;case St:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ae(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Jt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=lc,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zs(e,t,n,r,o,i,l,s,a){return e=new nm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ae(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(i),e}function rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jd(e){if(!e)return Dt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(_e(n))return Jc(e,n,t)}return t}function bd(e,t,n,r,o,i,l,s,a){return e=Zs(n,r,!0,e,o,i,l,s,a),e.context=Jd(null),n=e.current,r=ye(),o=Mt(n),i=ft(r,o),i.callback=t??null,zt(n,i,o),e.current.lanes=o,Ar(e,o,r),Pe(e,r),e}function gi(e,t,n,r){var o=t.current,i=ye(),l=Mt(o);return n=Jd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(o,t,l),e!==null&&(Xe(e,o,l,i),yo(e,o,l)),l}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function om(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}yi.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));gi(e,t,null,null)};yi.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){gi(null,e,null,null)}),t[ht]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&zc(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function im(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ei(l);i.call(u)}}var l=bd(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=l,e[ht]=l.current,$r(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ei(a);s.call(u)}}var a=Zs(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=a,e[ht]=a.current,$r(e.nodeType===8?e.parentNode:e),on(function(){gi(t,a,n,r)}),a}function xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ei(l);s.call(a)}}gi(t,l,e,o)}else l=im(n,t,e,o,r);return ei(l)}Tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(ys(t,n|1),Pe(t,ee()),!(F&6)&&(Fn=ee()+500,Bt()))}break;case 13:on(function(){var r=mt(e,1);if(r!==null){var o=ye();Xe(r,e,1,o)}}),Js(e,1)}};ws=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}Js(e,134217728)}};jc=function(e){if(e.tag===13){var t=Mt(e),n=mt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}Js(e,t)}};Nc=function(){return U};Ic=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};wl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ci(r);if(!o)throw Error(C(90));ac(r),fl(r,o)}}}break;case"textarea":cc(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};gc=Gs;yc=on;var lm={usingClientEntryPoint:!1,Events:[Ur,mn,ci,mc,vc,Gs]},tr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{li=so.inject(sm),nt=so}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(C(200));return rm(e,t,null,n)};ze.createRoot=function(e,t){if(!qs(e))throw Error(C(299));var n=!1,r="",o=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zs(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,$r(e.nodeType===8?e.parentNode:e),new bs(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=kc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return on(e)};ze.hydrate=function(e,t,n){if(!wi(t))throw Error(C(200));return xi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=qd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=bd(t,null,e,1,n??null,o,!1,i,l),e[ht]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yi(t)};ze.render=function(e,t,n){if(!wi(t))throw Error(C(200));return xi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!wi(e))throw Error(C(40));return e._reactRootContainer?(on(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};ze.unstable_batchedUpdates=Gs;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return xi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function ef(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef)}catch(e){console.error(e)}}ef(),ec.exports=ze;var am=ec.exports,vu=am;il.createRoot=vu.createRoot,il.hydrateRoot=vu.hydrateRoot;const um="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWZjOTlhNTQ3NjYyMDdkMjFjZjU3YzQ4ZGRjOTM2MCIsIm5iZiI6MTc2MzQzMzEzOS40MzM5OTk4LCJzdWIiOiI2OTFiZGFiM2QxMWNiOGRlY2JjN2QxZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uj-SFEvgADnZClHP2pJv9akkq9tQvrnGQobETr6c5nQ",cm="https://api.themoviedb.org/3";class dm{async get(t,n={}){const r=new URL(`${cm}${t}`);r.searchParams.append("language","es-ES"),Object.entries(n).forEach(([i,l])=>{l!=null&&l!==""&&r.searchParams.append(i,l)});const o=await fetch(r,{headers:{Authorization:`Bearer ${um}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`TMDB API Error: ${o.status}`);return o.json()}}class fm{async discoverMovies(t){throw new Error("Method not implemented")}async searchMovies(t){throw new Error("Method not implemented")}async getMovieDetails(t){throw new Error("Method not implemented")}async getGenres(){throw new Error("Method not implemented")}}class _o{constructor({id:t,title:n,overview:r,posterPath:o,backdropPath:i,releaseDate:l,voteAverage:s,voteCount:a,genreIds:u,originalLanguage:p,popularity:h}){this.id=t,this.title=n,this.overview=r,this.posterPath=o,this.backdropPath=i,this.releaseDate=l,this.voteAverage=s,this.voteCount=a,this.genreIds=u,this.originalLanguage=p,this.popularity=h}get year(){return this.releaseDate?new Date(this.releaseDate).getFullYear():null}get posterUrl(){return this.posterPath?`https://image.tmdb.org/t/p/w500${this.posterPath}`:null}get backdropUrl(){return this.backdropPath?`https://image.tmdb.org/t/p/w1280${this.backdropPath}`:null}}class pm{constructor({id:t,name:n}){this.id=t,this.name=n}}class hm extends fm{constructor(t){super(),this.client=t}async discoverMovies(t={}){var o;const n={page:t.page||1,sort_by:t.sortBy||"popularity.desc"};((o=t.genres)==null?void 0:o.length)>0&&(n.with_genres=t.genres.join(",")),(t.yearFrom||t.yearTo)&&(n["primary_release_date.gte"]=`${t.yearFrom||1990}-01-01`,n["primary_release_date.lte"]=`${t.yearTo||new Date().getFullYear()}-12-31`),t.minRating&&(n["vote_average.gte"]=t.minRating,n["vote_count.gte"]=100),t.language&&(n.with_original_language=t.language);const r=await this.client.get("/discover/movie",n);return{results:r.results.map(i=>new _o({id:i.id,title:i.title,overview:i.overview,posterPath:i.poster_path,backdropPath:i.backdrop_path,releaseDate:i.release_date,voteAverage:i.vote_average,voteCount:i.vote_count,genreIds:i.genre_ids,originalLanguage:i.original_language,popularity:i.popularity})),totalPages:r.total_pages,totalResults:r.total_results,page:r.page}}async searchMovies(t,n=1){const r=await this.client.get("/search/movie",{query:t,page:n});return{results:r.results.map(o=>new _o({id:o.id,title:o.title,overview:o.overview,posterPath:o.poster_path,backdropPath:o.backdrop_path,releaseDate:o.release_date,voteAverage:o.vote_average,voteCount:o.vote_count,genreIds:o.genre_ids,originalLanguage:o.original_language,popularity:o.popularity})),totalPages:r.total_pages,totalResults:r.total_results,page:r.page}}async getMovieDetails(t){var r;const n=await this.client.get(`/movie/${t}`);return new _o({id:n.id,title:n.title,overview:n.overview,posterPath:n.poster_path,backdropPath:n.backdrop_path,releaseDate:n.release_date,voteAverage:n.vote_average,voteCount:n.vote_count,genreIds:((r=n.genres)==null?void 0:r.map(o=>o.id))||[],originalLanguage:n.original_language,popularity:n.popularity})}async getGenres(){return(await this.client.get("/genre/movie/list")).genres.map(n=>new pm(n))}}class mm{getFavorites(){throw new Error("Method not implemented")}addFavorite(t){throw new Error("Method not implemented")}removeFavorite(t){throw new Error("Method not implemented")}isFavorite(t){throw new Error("Method not implemented")}}const gu="movie-explorer-favorites";class vm extends mm{getFavorites(){try{const t=localStorage.getItem(gu);return t?JSON.parse(t).map(r=>new _o(r)):[]}catch(t){return console.error("Error reading favorites:",t),[]}}addFavorite(t){const n=this.getFavorites();n.find(r=>r.id===t.id)||(n.push(t),this._save(n))}removeFavorite(t){const r=this.getFavorites().filter(o=>o.id!==t);this._save(r)}isFavorite(t){return this.getFavorites().some(r=>r.id===t)}_save(t){try{localStorage.setItem(gu,JSON.stringify(t))}catch(n){console.error("Error saving favorites:",n)}}}class gm{constructor(t){this.movieRepository=t}async execute(t){return await this.movieRepository.discoverMovies(t)}}class ym{constructor(t){this.movieRepository=t}async execute(t,n=1){return!t||t.trim().length===0?{results:[],totalPages:0,totalResults:0,page:1}:await this.movieRepository.searchMovies(t,n)}}class wm{constructor(t){this.favoritesRepository=t}getFavorites(){return this.favoritesRepository.getFavorites()}addFavorite(t){this.favoritesRepository.addFavorite(t)}removeFavorite(t){this.favoritesRepository.removeFavorite(t)}toggleFavorite(t){return this.favoritesRepository.isFavorite(t.id)?(this.removeFavorite(t.id),!1):(this.addFavorite(t),!0)}isFavorite(t){return this.favoritesRepository.isFavorite(t)}}class xm{constructor(t,n){this.movieRepository=t,this.favoritesRepository=n}async execute(t=[]){const r=this.favoritesRepository.getFavorites().map(u=>u.id),o=[...t,...r],i=Math.floor(Math.random()*10)+1,s=(await this.movieRepository.discoverMovies({page:i,sortBy:"popularity.desc"})).results.filter(u=>!o.includes(u.id));if(s.length===0)return null;const a=Math.floor(Math.random()*s.length);return s[a]}async executeWithCandidates(t=[]){const r=this.favoritesRepository.getFavorites().map(p=>p.id),o=[...t,...r],i=Math.floor(Math.random()*10)+1,s=(await this.movieRepository.discoverMovies({page:i,sortBy:"popularity.desc"})).results.filter(p=>!o.includes(p.id));if(s.length<4)return null;const u=[...s].sort(()=>Math.random()-.5).slice(0,4);return{candidates:u.slice(0,3),final:u[3]}}}const tf=P.createContext(),km=({children:e})=>{const t=new dm,n=new hm(t),r=new vm,o=new gm(n),i=new ym(n),l=new wm(r),s=new xm(n,r),[a,u]=P.useState([]),[p,h]=P.useState([]);P.useEffect(()=>{u(l.getFavorites()),n.getGenres().then(h).catch(console.error)},[]);const m=w=>{const x=l.toggleFavorite(w);return u(l.getFavorites()),x},g=w=>l.isFavorite(w);return v.jsx(tf.Provider,{value:{getMoviesUseCase:o,searchMoviesUseCase:i,getRandomMovieUseCase:s,favorites:a,toggleFavorite:m,isFavorite:g,genres:p},children:e})},Qn=()=>{const e=P.useContext(tf);if(!e)throw new Error("useApp must be used within AppProvider");return e};class Sm{getTheme(){throw new Error("Method not implemented")}saveTheme(t){throw new Error("Method not implemented")}}class ti{constructor(t="dark"){this.mode=this._validateMode(t),this.colors=this._getColors()}_validateMode(t){return t==="light"||t==="dark"?t:"dark"}_getColors(){return this.mode==="light"?{primary:"#e50914",secondary:"#f8f8f8",background:"#ffffff",text:"#1a1a1a",textSecondary:"#666666",cardBg:"#ffffff",cardBorder:"#e0e0e0",cardShadow:"rgba(0, 0, 0, 0.08)",hoverBg:"#f5f5f5",buttonBg:"#e8e8e8",buttonText:"#1a1a1a",buttonHover:"#d0d0d0",buttonActive:"#b8b8b8",inputBorder:"#d0d0d0",inputFocus:"#e50914",overlay:"rgba(0, 0, 0, 0.6)",skeletonBase:"#f0f0f0",skeletonHighlight:"#f8f8f8"}:{primary:"#e50914",secondary:"#221f1f",background:"#141414",text:"#ffffff",textSecondary:"#b3b3b3",cardBg:"#2f2f2f",cardBorder:"#3f3f3f",cardShadow:"rgba(0, 0, 0, 0.3)",hoverBg:"#3a3a3a",buttonBg:"#e50914",buttonText:"#ffffff",buttonHover:"#c40812",buttonActive:"#a00610",inputBorder:"#4a4a4a",inputFocus:"#e50914",overlay:"rgba(0, 0, 0, 0.85)",skeletonBase:"#2a2a2a",skeletonHighlight:"#3a3a3a"}}toggle(){const t=this.mode==="dark"?"light":"dark";return new ti(t)}}const yu="movie-explorer-theme";class Cm extends Sm{getTheme(){try{const t=localStorage.getItem(yu);return new ti(t||"dark")}catch(t){return console.error("Error reading theme from localStorage:",t),new ti("dark")}}saveTheme(t){try{localStorage.setItem(yu,t.mode)}catch(n){console.error("Error saving theme to localStorage:",n)}}}class Em{constructor(t){this.themeRepository=t}getCurrentTheme(){return this.themeRepository.getTheme()}toggleTheme(){const n=this.themeRepository.getTheme().toggle();return this.themeRepository.saveTheme(n),n}}const nf=P.createContext(),_m=({children:e})=>{const t=new Cm,n=new Em(t),[r,o]=P.useState(()=>n.getCurrentTheme());P.useEffect(()=>{const l=document.documentElement,s={primary:"--primary-color",secondary:"--secondary-color",background:"--background-color",text:"--text-color",textSecondary:"--text-secondary",cardBg:"--card-bg",cardBorder:"--card-border",cardShadow:"--card-shadow",hoverBg:"--hover-bg",buttonBg:"--button-bg",buttonText:"--button-text",buttonHover:"--button-hover",buttonActive:"--button-active",inputBorder:"--input-border",inputFocus:"--input-focus",overlay:"--overlay-color",skeletonBase:"--skeleton-base",skeletonHighlight:"--skeleton-highlight"};Object.entries(r.colors).forEach(([a,u])=>{const p=s[a]||`--${a.replace(/([A-Z])/g,"-$1").toLowerCase()}`;l.style.setProperty(p,u)})},[r]);const i=()=>{const l=n.toggleTheme();o(l)};return v.jsx(nf.Provider,{value:{theme:r,toggleTheme:i},children:e})},Pm=()=>{const e=P.useContext(nf);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e};var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function Fr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var W="-ms-",yr="-moz-",O="-webkit-",rf="comm",ki="rule",ea="decl",$m="@import",of="@keyframes",Tm="@layer",lf=Math.abs,ta=String.fromCharCode,bl=Object.assign;function jm(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function sf(e){return e.trim()}function at(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Po(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function Dn(e,t,n){return e.slice(t,n)}function et(e){return e.length}function af(e){return e.length}function ar(e,t){return t.push(e),e}function Nm(e,t){return e.map(t).join("")}function wu(e,t){return e.filter(function(n){return!at(n,t)})}var Si=1,On=1,uf=0,He=0,te=0,Gn="";function Ci(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Si,column:On,length:l,return:"",siblings:s}}function kt(e,t){return bl(Ci("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function un(e){for(;e.root;)e=kt(e.root,{children:[e]});ar(e,e.siblings)}function Im(){return te}function zm(){return te=He>0?se(Gn,--He):0,On--,te===10&&(On=1,Si--),te}function Ze(){return te=He<uf?se(Gn,He++):0,On++,te===10&&(On=1,Si++),te}function bt(){return se(Gn,He)}function $o(){return He}function Ei(e,t){return Dn(Gn,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rm(e){return Si=On=1,uf=et(Gn=e),He=0,[]}function Mm(e){return Gn="",e}function el(e){return sf(Ei(He-1,es(e===91?e+2:e===40?e+1:e)))}function Lm(e){for(;(te=bt())&&te<33;)Ze();return ql(e)>2||ql(te)>3?"":" "}function Fm(e,t){for(;--t&&Ze()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Ei(e,$o()+(t<6&&bt()==32&&Ze()==32))}function es(e){for(;Ze();)switch(te){case e:return He;case 34:case 39:e!==34&&e!==39&&es(te);break;case 40:e===41&&es(e);break;case 92:Ze();break}return He}function Dm(e,t){for(;Ze()&&e+te!==57;)if(e+te===84&&bt()===47)break;return"/*"+Ei(t,He-1)+"*"+ta(e===47?e:Ze())}function Om(e){for(;!ql(bt());)Ze();return Ei(e,He)}function Am(e){return Mm(To("",null,null,null,[""],e=Rm(e),0,[0],e))}function To(e,t,n,r,o,i,l,s,a){for(var u=0,p=0,h=l,m=0,g=0,w=0,x=1,N=1,d=1,c=0,f="",y=o,_=i,E=r,S=f;N;)switch(w=c,c=Ze()){case 40:if(w!=108&&se(S,h-1)==58){Po(S+=M(el(c),"&","&\f"),"&\f",lf(u?s[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=el(c);break;case 9:case 10:case 13:case 32:S+=Lm(w);break;case 92:S+=Fm($o()-1,7);continue;case 47:switch(bt()){case 42:case 47:ar(Bm(Dm(Ze(),$o()),t,n,a),a);break;default:S+="/"}break;case 123*x:s[u++]=et(S)*d;case 125*x:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:d==-1&&(S=M(S,/\f/g,"")),g>0&&et(S)-h&&ar(g>32?ku(S+";",r,n,h-1,a):ku(M(S," ","")+";",r,n,h-2,a),a);break;case 59:S+=";";default:if(ar(E=xu(S,t,n,u,p,o,s,f,y=[],_=[],h,i),i),c===123)if(p===0)To(S,t,E,E,y,i,h,s,_);else switch(m===99&&se(S,3)===110?100:m){case 100:case 108:case 109:case 115:To(e,E,E,r&&ar(xu(e,E,E,0,0,o,s,f,o,y=[],h,_),_),o,_,h,s,r?y:_);break;default:To(S,E,E,E,[""],_,0,s,_)}}u=p=g=0,x=d=1,f=S="",h=l;break;case 58:h=1+et(S),g=w;default:if(x<1){if(c==123)--x;else if(c==125&&x++==0&&zm()==125)continue}switch(S+=ta(c),c*x){case 38:d=p>0?1:(S+="\f",-1);break;case 44:s[u++]=(et(S)-1)*d,d=1;break;case 64:bt()===45&&(S+=el(Ze())),m=bt(),p=h=et(f=S+=Om($o())),c++;break;case 45:w===45&&et(S)==2&&(x=0)}}return i}function xu(e,t,n,r,o,i,l,s,a,u,p,h){for(var m=o-1,g=o===0?i:[""],w=af(g),x=0,N=0,d=0;x<r;++x)for(var c=0,f=Dn(e,m+1,m=lf(N=l[x])),y=e;c<w;++c)(y=sf(N>0?g[c]+" "+f:M(f,/&\f/g,g[c])))&&(a[d++]=y);return Ci(e,t,n,o===0?ki:s,a,u,p,h)}function Bm(e,t,n,r){return Ci(e,t,n,rf,ta(Im()),Dn(e,2,-2),0,r)}function ku(e,t,n,r,o){return Ci(e,t,n,ea,Dn(e,0,r),Dn(e,r+1,-1),r,o)}function cf(e,t,n){switch(jm(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return yr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+yr+e+W+e+e;case 5936:switch(se(e,t+11)){case 114:return O+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+W+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+W+e+e;case 6165:return O+e+W+"flex-"+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return O+e+W+"flex-item-"+M(e,/flex-|-self/g,"")+(at(e,/flex-|baseline/)?"":W+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return O+e+W+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+W+M(e,"shrink","negative")+e;case 5292:return O+e+W+M(e,"basis","preferred-size")+e;case 6060:return O+"box-"+M(e,"-grow","")+O+e+W+M(e,"grow","positive")+e;case 4554:return O+M(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!at(e,/flex-|baseline/))return W+"grid-column-align"+Dn(e,t)+e;break;case 2592:case 3360:return W+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,at(r.props,/grid-\w+-end/)})?~Po(e+(n=n[t].value),"span",0)?e:W+M(e,"-start","")+e+W+"grid-row-span:"+(~Po(n,"span",0)?at(n,/\d+/):+at(n,/\d+/)-+at(e,/\d+/))+";":W+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return at(r.props,/grid-\w+-start/)})?e:W+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+yr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Po(e,"stretch",0)?cf(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return W+o+":"+i+u+(l?W+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(se(e,t+6)===121)return M(e,":",":"+O)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(se(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+W+"$2box$3")+e;case 100:return M(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function ni(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Um(e,t,n,r){switch(e.type){case Tm:if(e.children.length)break;case $m:case ea:return e.return=e.return||e.value;case rf:return"";case of:return e.return=e.value+"{"+ni(e.children,r)+"}";case ki:if(!et(e.value=e.props.join(",")))return""}return et(n=ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function Vm(e){var t=af(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Hm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ea:e.return=cf(e.value,e.length,n);return;case of:return ni([kt(e,{value:M(e.value,"@","@"+O)})],r);case ki:if(e.length)return Nm(n=e.props,function(o){switch(at(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(kt(e,{props:[M(o,/:(read-\w+)/,":"+yr+"$1")]})),un(kt(e,{props:[o]})),bl(e,{props:wu(n,r)});break;case"::placeholder":un(kt(e,{props:[M(o,/:(plac\w+)/,":"+O+"input-$1")]})),un(kt(e,{props:[M(o,/:(plac\w+)/,":"+yr+"$1")]})),un(kt(e,{props:[M(o,/:(plac\w+)/,W+"input-$1")]})),un(kt(e,{props:[o]})),bl(e,{props:wu(n,r)});break}return""})}}var Qm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},An=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",df="active",ff="data-styled-version",_i="6.1.19",na=`/*!sc*/
`,ri=typeof window<"u"&&typeof document<"u",Gm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),Pi=Object.freeze([]),Bn=Object.freeze({});function Ym(e,t,n){return n===void 0&&(n=Bn),e.theme!==n.theme&&e.theme||t||n.theme}var pf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Km=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xm=/(^-|-$)/g;function Su(e){return e.replace(Km,"-").replace(Xm,"")}var Zm=/(a)(d)/gi,ao=52,Cu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ts(e){var t,n="";for(t=Math.abs(e);t>ao;t=t/ao|0)n=Cu(t%ao)+n;return(Cu(t%ao)+n).replace(Zm,"$1-$2")}var tl,hf=5381,Sn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mf=function(e){return Sn(hf,e)};function vf(e){return ts(mf(e)>>>0)}function Jm(e){return e.displayName||e.name||"Component"}function nl(e){return typeof e=="string"&&!0}var gf=typeof Symbol=="function"&&Symbol.for,yf=gf?Symbol.for("react.memo"):60115,bm=gf?Symbol.for("react.forward_ref"):60112,qm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ev={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tv=((tl={})[bm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tl[yf]=wf,tl);function Eu(e){return("type"in(t=e)&&t.type.$$typeof)===yf?wf:"$$typeof"in e?tv[e.$$typeof]:qm;var t}var nv=Object.defineProperty,rv=Object.getOwnPropertyNames,_u=Object.getOwnPropertySymbols,ov=Object.getOwnPropertyDescriptor,iv=Object.getPrototypeOf,Pu=Object.prototype;function xf(e,t,n){if(typeof t!="string"){if(Pu){var r=iv(t);r&&r!==Pu&&xf(e,r,n)}var o=rv(t);_u&&(o=o.concat(_u(t)));for(var i=Eu(e),l=Eu(t),s=0;s<o.length;++s){var a=o[s];if(!(a in ev||n&&n[a]||l&&a in l||i&&a in i)){var u=ov(t,a);try{nv(e,a,u)}catch{}}}}return e}function Un(e){return typeof e=="function"}function ra(e){return typeof e=="object"&&"styledComponentId"in e}function Xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ns(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Dr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rs(e,t,n){if(n===void 0&&(n=!1),!n&&!Dr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rs(e[r],t[r]);else if(Dr(t))for(var r in t)e[r]=rs(e[r],t[r]);return e}function oa(e,t){Object.defineProperty(e,"toString",{value:t})}function Hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Hr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(na);return n},e}(),jo=new Map,oi=new Map,No=1,uo=function(e){if(jo.has(e))return jo.get(e);for(;oi.has(No);)No++;var t=No++;return jo.set(e,t),oi.set(t,e),t},sv=function(e,t){No=t+1,jo.set(e,t),oi.set(t,e)},av="style[".concat(An,"][").concat(ff,'="').concat(_i,'"]'),uv=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},dv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(na),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(uv);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(sv(p,u),cv(e,p,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},$u=function(e){for(var t=document.querySelectorAll(av),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(An)!==df&&(dv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function fv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(An,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(An,df),r.setAttribute(ff,_i);var l=fv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},pv=function(){function e(t){this.element=kf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Hr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hv=function(){function e(t){this.element=kf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Tu=ri,vv={isServer:!ri,useCSSOMInjection:!Gm},Sf=function(){function e(t,n,r){t===void 0&&(t=Bn),n===void 0&&(n={});var o=this;this.options=Ce(Ce({},vv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ri&&Tu&&(Tu=!1,$u(this)),oa(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(h){var m=function(d){return oi.get(d)}(h);if(m===void 0)return"continue";var g=i.names.get(m),w=l.getGroup(h);if(g===void 0||!g.size||w.length===0)return"continue";var x="".concat(An,".g").concat(h,'[id="').concat(m,'"]'),N="";g!==void 0&&g.forEach(function(d){d.length>0&&(N+="".concat(d,","))}),a+="".concat(w).concat(x,'{content:"').concat(N,'"}').concat(na)},p=0;p<s;p++)u(p);return a}(o)})}return e.registerId=function(t){return uo(t)},e.prototype.rehydrate=function(){!this.server&&ri&&$u(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new mv(o):r?new pv(o):new hv(o)}(this.options),new lv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(uo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(uo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(uo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gv=/&/g,yv=/^\s*\/\/.*$/gm;function Cf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Cf(n.children,t)),n})}function wv(e){var t,n,r,o=Bn,i=o.options,l=i===void 0?Bn:i,s=o.plugins,a=s===void 0?Pi:s,u=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},p=a.slice();p.push(function(m){m.type===ki&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(gv,n).replace(r,u))}),l.prefix&&p.push(Wm),p.push(Um);var h=function(m,g,w,x){g===void 0&&(g=""),w===void 0&&(w=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var N=m.replace(yv,""),d=Am(w||g?"".concat(w," ").concat(g," { ").concat(N," }"):N);l.namespace&&(d=Cf(d,l.namespace));var c=[];return ni(d,Vm(p.concat(Hm(function(f){return c.push(f)})))),c};return h.hash=a.length?a.reduce(function(m,g){return g.name||Hr(15),Sn(m,g.name)},hf).toString():"",h}var xv=new Sf,os=wv(),Ef=jn.createContext({shouldForwardProp:void 0,styleSheet:xv,stylis:os});Ef.Consumer;jn.createContext(void 0);function ju(){return P.useContext(Ef)}var _f=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=os);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,oa(this,function(){throw Hr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=os),this.name+t.hash},e}(),kv=function(e){return e>="A"&&e<="Z"};function Nu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;kv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Pf=function(e){return e==null||e===!1||e===""},$f=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Pf(i)&&(Array.isArray(i)&&i.isCss||Un(i)?r.push("".concat(Nu(o),":"),i,";"):Dr(i)?r.push.apply(r,Fr(Fr(["".concat(o," {")],$f(i),!1),["}"],!1)):r.push("".concat(Nu(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qt(e,t,n,r){if(Pf(e))return[];if(ra(e))return[".".concat(e.styledComponentId)];if(Un(e)){if(!Un(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return qt(o,t,n,r)}var i;return e instanceof _f?n?(e.inject(n,r),[e.getName(r)]):[e]:Dr(e)?$f(e):Array.isArray(e)?Array.prototype.concat.apply(Pi,e.map(function(l){return qt(l,t,n,r)})):[e.toString()]}function Sv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!ra(n))return!1}return!0}var Cv=mf(_i),Ev=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sv(t),this.componentId=n,this.baseHash=Sn(Cv,n),this.baseStyle=r,Sf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Xt(o,this.staticRulesId);else{var i=ns(qt(this.rules,t,n,r)),l=ts(Sn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Xt(o,l),this.staticRulesId=l}else{for(var a=Sn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var m=ns(qt(h,t,n,r));a=Sn(a,m+p),u+=m}}if(u){var g=ts(a>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),o=Xt(o,g)}}return o},e}(),Tf=jn.createContext(void 0);Tf.Consumer;var rl={};function _v(e,t,n){var r=ra(e),o=e,i=!nl(e),l=t.attrs,s=l===void 0?Pi:l,a=t.componentId,u=a===void 0?function(y,_){var E=typeof y!="string"?"sc":Su(y);rl[E]=(rl[E]||0)+1;var S="".concat(E,"-").concat(vf(_i+E+rl[E]));return _?"".concat(_,"-").concat(S):S}(t.displayName,t.parentComponentId):a,p=t.displayName,h=p===void 0?function(y){return nl(y)?"styled.".concat(y):"Styled(".concat(Jm(y),")")}(e):p,m=t.displayName&&t.componentId?"".concat(Su(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;w=function(y,_){return x(y,_)&&N(y,_)}}else w=x}var d=new Ev(n,m,r?o.componentStyle:void 0);function c(y,_){return function(E,S,j){var D=E.attrs,R=E.componentStyle,ue=E.defaultProps,Me=E.foldedComponentIds,yt=E.styledComponentId,Le=E.target,ot=jn.useContext(Tf),Vt=ju(),it=E.shouldForwardProp||Vt.shouldForwardProp,$=Ym(S,ot,ue)||Bn,I=function(ie,b,Fe){for(var Yn,Ht=Ce(Ce({},b),{className:void 0,theme:Fe}),$i=0;$i<ie.length;$i+=1){var Wr=Un(Yn=ie[$i])?Yn(Ht):Yn;for(var wt in Wr)Ht[wt]=wt==="className"?Xt(Ht[wt],Wr[wt]):wt==="style"?Ce(Ce({},Ht[wt]),Wr[wt]):Wr[wt]}return b.className&&(Ht.className=Xt(Ht.className,b.className)),Ht}(D,S,$),z=I.as||Le,A={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===$||(B==="forwardedAs"?A.as=I.forwardedAs:it&&!it(B,z)||(A[B]=I[B]));var lt=function(ie,b){var Fe=ju(),Yn=ie.generateAndInjectStyles(b,Fe.styleSheet,Fe.stylis);return Yn}(R,I),Y=Xt(Me,yt);return lt&&(Y+=" "+lt),I.className&&(Y+=" "+I.className),A[nl(z)&&!pf.has(z)?"class":"className"]=Y,j&&(A.ref=j),P.createElement(z,A)}(f,y,_)}c.displayName=h;var f=jn.forwardRef(c);return f.attrs=g,f.componentStyle=d,f.displayName=h,f.shouldForwardProp=w,f.foldedComponentIds=r?Xt(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=m,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(_){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var j=0,D=E;j<D.length;j++)rs(_,D[j],!0);return _}({},o.defaultProps,y):y}}),oa(f,function(){return".".concat(f.styledComponentId)}),i&&xf(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Iu(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var zu=function(e){return Object.assign(e,{isCss:!0})};function jf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||Dr(e))return zu(qt(Iu(Pi,Fr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?qt(r):zu(qt(Iu(r,t)))}function is(e,t,n){if(n===void 0&&(n=Bn),!t)throw Hr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,jf.apply(void 0,Fr([o],i,!1)))};return r.attrs=function(o){return is(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return is(e,t,Ce(Ce({},n),o))},r}var Nf=function(e){return is(_v,e)},k=Nf;pf.forEach(function(e){k[e]=Nf(e)});function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ns(jf.apply(void 0,Fr([e],t,!1))),o=vf(r);return new _f(o,r)}const Pv=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,$v=k.button`
  background: var(--card-bg);
  border: 2px solid var(--secondary);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,Tv=k.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${e=>e.$mode==="dark"?"rotateIn":"rotateOut"} 0.3s ease;

  @keyframes rotateIn {
    from {
      transform: rotate(-180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes rotateOut {
    from {
      transform: rotate(180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,jv=()=>{const{theme:e,toggleTheme:t}=Pm();return v.jsx(Pv,{children:v.jsx($v,{onClick:t,"aria-label":"Toggle theme",children:v.jsx(Tv,{$mode:e.mode,children:e.mode==="dark"?"☀️":"🌙"})})})},Nv=k.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: var(--card-bg);
  border-bottom: 1px solid var(--card-border);
  box-shadow: 0 2px 4px var(--card-shadow);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`,Iv=k.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,Ru=k.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${e=>e.$active?"var(--button-bg)":"transparent"};
  color: ${e=>e.$active?"var(--button-text)":"var(--text-color)"};
  border: 1px solid ${e=>e.$active?"var(--button-bg)":"transparent"};
  border-radius: var(--border-radius);
  transition: var(--transition);
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${e=>e.$active?"var(--button-hover)":"var(--hover-bg)"};
    border-color: ${e=>e.$active?"var(--button-hover)":"var(--card-border)"};
  }

  &:active {
    background: ${e=>e.$active?"var(--button-active)":"var(--hover-bg)"};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`,zv=k.span`
  background: var(--background-color);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid var(--card-border);
`,Rv=({currentView:e,onViewChange:t})=>{const{favorites:n}=Qn();return v.jsxs(Nv,{children:[v.jsxs(Iv,{children:[v.jsx(Ru,{$active:e==="home",onClick:()=>t("home"),children:"🏠 Inicio"}),v.jsxs(Ru,{$active:e==="favorites",onClick:()=>t("favorites"),children:["❤️ Favoritas",n.length>0&&v.jsx(zv,{children:n.length})]})]}),v.jsx(jv,{})]})},Mv=(e,t=300)=>{const[n,r]=P.useState(e);return P.useEffect(()=>{const o=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(o)}},[e,t]),n},Lv=(e,{hasMore:t=!0,isLoading:n=!1,threshold:r=.1,rootMargin:o="100px",scrollKey:i="infinite-scroll-position",debounceMs:l=300,minLoadDelay:s=500}={})=>{const a=P.useRef(null),u=P.useRef(null),p=P.useRef(!1),h=P.useRef(null),m=P.useRef(0),g=P.useRef(!1),w=P.useCallback(x=>{const[N]=x;if(N.isIntersecting&&!n&&!g.current&&t){const c=Date.now()-m.current;h.current&&clearTimeout(h.current),c<s?h.current=setTimeout(()=>{g.current=!0,m.current=Date.now(),e(),setTimeout(()=>{g.current=!1},100)},s-c):h.current=setTimeout(()=>{g.current=!0,m.current=Date.now(),e(),setTimeout(()=>{g.current=!1},100)},l)}},[e,n,t,l,s]);return P.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]),P.useEffect(()=>{const x=()=>{const d=window.scrollY||window.pageYOffset;sessionStorage.setItem(i,d.toString())},N=()=>{x()};return window.addEventListener("scroll",N,{passive:!0}),()=>{window.removeEventListener("scroll",N),x()}},[i]),P.useEffect(()=>{if(!p.current){const x=sessionStorage.getItem(i);x&&requestAnimationFrame(()=>{window.scrollTo({top:parseInt(x,10),behavior:"auto"}),p.current=!0})}},[i]),P.useEffect(()=>{const x={root:null,rootMargin:o,threshold:r};a.current=new IntersectionObserver(w,x);const N=u.current;return N&&a.current.observe(N),()=>{a.current&&a.current.disconnect()}},[w,o,r]),u},Fv=k.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`,Dv=k.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--input-border);
  border-radius: var(--border-radius);
  background: var(--card-bg);
  color: var(--text-color);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`,Ov=k.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: var(--text-secondary);
  font-size: 1.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  &:hover {
    color: var(--text-color);
  }
`,Av=({value:e,onChange:t,placeholder:n="Buscar películas..."})=>v.jsxs(Fv,{children:[v.jsx(Dv,{type:"text",value:e,onChange:r=>t(r.target.value),placeholder:n}),e&&v.jsx(Ov,{onClick:()=>t(""),children:"✕"})]}),Bv=k.div`
  width: 100%;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  padding: 1rem;
  box-shadow: 0 2px 4px var(--card-shadow);
`,Uv=k.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${e=>e.$isOpen?"rotate(90deg)":"rotate(0deg)"};
  }
`,Vv=k.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: ${e=>e.$isOpen?"2000px":"0"};
  overflow: hidden;
  opacity: ${e=>e.$isOpen?"1":"0"};
  margin-top: ${e=>e.$isOpen?"1rem":"0"};
  padding-top: ${e=>e.$isOpen?"1rem":"0"};
  border-top: ${e=>e.$isOpen?"1px solid var(--card-border)":"none"};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height, opacity;
`,nr=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,rr=k.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
`,Mu=k.select`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--input-border);
  border-radius: var(--border-radius);
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
  }

  &:hover {
    border-color: var(--input-focus);
  }
`,Lu=k.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--input-border);
  border-radius: var(--border-radius);
  background: var(--card-bg);
  color: var(--text-color);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
  }

  &:hover {
    border-color: var(--input-focus);
  }
`,Hv=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Wv=k.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${e=>e.$active?"var(--primary-color)":"var(--card-bg)"};
  color: ${e=>e.$active?"#ffffff":"var(--text-color)"};
  border: 1px solid ${e=>e.$active?"var(--primary-color)":"var(--input-border)"};
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
    background: ${e=>e.$active?"#c40812":"var(--hover-bg)"};
  }
`,Qv=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: var(--text-secondary);
  }
`,Gv=k.input`
  width: 100%;
  cursor: pointer;
`,Yv=k.span`
  color: var(--primary-color);
  font-weight: 600;
`,Kv=[{value:"popularity.desc",label:"Más populares"},{value:"vote_average.desc",label:"Mejor valoradas"},{value:"primary_release_date.desc",label:"Más recientes"},{value:"primary_release_date.asc",label:"Más antiguas"}],Xv=[{value:"",label:"Todos"},{value:"es",label:"Español"},{value:"en",label:"Inglés"},{value:"fr",label:"Francés"},{value:"it",label:"Italiano"},{value:"ja",label:"Japonés"},{value:"ko",label:"Coreano"}],Zv=({filters:e,onChange:t})=>{const{genres:n}=Qn(),[r,o]=P.useState(!1),i=new Date().getFullYear(),l=s=>{const a=e.genres.includes(s)?e.genres.filter(u=>u!==s):[...e.genres,s];t({...e,genres:a})};return v.jsxs(Bv,{children:[v.jsxs(Uv,{onClick:()=>o(!r),$isOpen:r,children:[v.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:v.jsx("path",{d:"M2 4l4 4 4-4",stroke:"currentColor",strokeWidth:"2",fill:"none"})}),"Filtros ",e.genres.length>0&&`(${e.genres.length})`]}),v.jsxs(Vv,{$isOpen:r,children:[v.jsxs(nr,{children:[v.jsx(rr,{children:"Ordenar por"}),v.jsx(Mu,{value:e.sortBy,onChange:s=>t({...e,sortBy:s.target.value}),children:Kv.map(s=>v.jsx("option",{value:s.value,children:s.label},s.value))})]}),v.jsxs(nr,{children:[v.jsx(rr,{children:"Géneros"}),v.jsx(Hv,{children:n.map(s=>v.jsx(Wv,{$active:e.genres.includes(s.id),onClick:()=>l(s.id),children:s.name},s.id))})]}),v.jsxs(nr,{children:[v.jsx(rr,{children:"Año"}),v.jsxs(Qv,{children:[v.jsx(Lu,{type:"number",min:"1990",max:i,value:e.yearFrom,onChange:s=>t({...e,yearFrom:s.target.value}),placeholder:"Desde"}),v.jsx("span",{children:"-"}),v.jsx(Lu,{type:"number",min:"1990",max:i,value:e.yearTo,onChange:s=>t({...e,yearTo:s.target.value}),placeholder:"Hasta"})]})]}),v.jsxs(nr,{children:[v.jsxs(rr,{children:["Rating mínimo: ",v.jsx(Yv,{children:e.minRating})]}),v.jsx(Gv,{type:"range",min:"0",max:"10",step:"0.5",value:e.minRating,onChange:s=>t({...e,minRating:parseFloat(s.target.value)})})]}),v.jsxs(nr,{children:[v.jsx(rr,{children:"Idioma original"}),v.jsx(Mu,{value:e.language,onChange:s=>t({...e,language:s.target.value}),children:Xv.map(s=>v.jsx("option",{value:s.value,children:s.label},s.value))})]})]})]})},Jv=(e,t={})=>{const[n,r]=P.useState(!1);return P.useEffect(()=>{if(!e.current)return;const o=new IntersectionObserver(([i])=>{i.isIntersecting&&(r(!0),o.disconnect())},t);return o.observe(e.current),()=>{o.disconnect()}},[e,t]),n},bv=e=>{const[t,n]=P.useState(!1),[r,o]=P.useState(null);return P.useEffect(()=>{if(!e)return;n(!1),o(null);const i=new Image;return i.onload=()=>{n(!0),o(null)},i.onerror=l=>{n(!1),o(l)},i.src=e,()=>{i.onload=null,i.onerror=null}},[e]),{isLoaded:t,error:r}},qv=Ut`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,eg=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--secondary);
`,tg=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${e=>e.$isLoaded?1:0};
  transition: opacity 0.3s ease-in-out;
  animation: ${e=>e.$isLoaded?qv:"none"} 0.3s ease-in-out;
`,ng=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: var(--secondary);
  color: var(--text-secondary);
`,rg=({src:e,alt:t,placeholder:n="🎬"})=>{const r=P.useRef(),o=Jv(r,{threshold:.1}),{isLoaded:i,error:l}=bv(o?e:null);return v.jsxs(eg,{ref:r,children:[o&&!l&&v.jsx(tg,{src:e,alt:t,$isLoaded:i,loading:"lazy"}),(!o||!i||l)&&v.jsx(ng,{children:n})]})},og=k.div`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 8px var(--card-shadow);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px var(--card-shadow);
    background: var(--hover-bg);
  }
`,ig=k.div`
  position: relative;
  width: 100%;
  padding-top: 0%;
  overflow: hidden;
`,lg=k.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: var(--transition);
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.9);
  }
`,sg=k.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ag=k.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ug=k.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
`,cg=k.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,dg=k.span``,fg=k.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`,If=({movie:e,onClick:t})=>{const{toggleFavorite:n,isFavorite:r}=Qn(),o=r(e.id),i=l=>{l.stopPropagation(),n(e)};return v.jsxs(og,{onClick:()=>t==null?void 0:t(e),children:[v.jsxs(ig,{children:[v.jsx(rg,{src:e.posterUrl,alt:e.title,placeholder:"🎬"}),v.jsx(lg,{onClick:i,$isFavorite:o,children:o?"❤️":"🤍"})]}),v.jsxs(sg,{children:[v.jsx(ag,{children:e.title}),v.jsxs(ug,{children:[v.jsxs(cg,{children:["⭐ ",e.voteAverage.toFixed(1)]}),e.year&&v.jsx(dg,{children:e.year})]}),e.overview&&v.jsx(fg,{children:e.overview})]})]})},ia=Ut`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,la=`
  linear-gradient(
    90deg,
    var(--card-bg) 0%,
    var(--secondary) 50%,
    var(--card-bg) 100%
  )
`,pg=k.div`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`,hg=k.div`
  width: 100%;
  padding-top: 150%;
  background: ${la};
  background-size: 2000px 100%;
  animation: ${ia} 2s infinite linear;
`,mg=k.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,vg=k.div`
  height: 1.5rem;
  width: 80%;
  border-radius: 4px;
  background: ${la};
  background-size: 2000px 100%;
  animation: ${ia} 2s infinite linear;
`,gg=k.div`
  display: flex;
  gap: 1rem;
`,co=k.div`
  height: 1rem;
  width: ${e=>e.$width||"100%"};
  border-radius: 4px;
  background: ${la};
  background-size: 2000px 100%;
  animation: ${ia} 2s infinite linear;
`,zf=()=>v.jsxs(pg,{children:[v.jsx(hg,{}),v.jsxs(mg,{children:[v.jsx(vg,{}),v.jsxs(gg,{children:[v.jsx(co,{$width:"60px"}),v.jsx(co,{$width:"40px"})]}),v.jsx(co,{$width:"100%"}),v.jsx(co,{$width:"80%"})]})]}),fo=k.div`
  width: 100%;
  padding: ${e=>e.$invisible?"1px":"2rem 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: ${e=>e.$invisible?"1px":"auto"};
  opacity: ${e=>e.$invisible?"0":"1"};
  pointer-events: ${e=>e.$invisible?"none":"auto"};
`,yg=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`,Fu=k.p`
  font-size: 1rem;
  color: ${e=>e.$error?"var(--primary-color)":"var(--text-secondary)"};
  text-align: center;
  margin: 0;
  padding: 1rem;
`,wg=k.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--button-hover);
    transform: translateY(-2px);
  }

  &:active {
    background: var(--button-active);
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--input-focus);
    outline-offset: 2px;
  }
`,xg=({triggerRef:e,isLoading:t=!1,hasMore:n=!0,error:r=null,onRetry:o=null,skeletonCount:i=6})=>!n&&!t&&!r?v.jsx(fo,{ref:e,role:"status","aria-live":"polite",children:v.jsx(Fu,{children:"No hay más películas para mostrar"})}):r&&!t?v.jsxs(fo,{ref:e,role:"alert","aria-live":"assertive",children:[v.jsxs(Fu,{$error:!0,children:["Error al cargar más películas: ",r.message]}),o&&v.jsx(wg,{onClick:o,"aria-label":"Reintentar carga",children:"Reintentar"})]}):t?v.jsx(fo,{ref:e,role:"status","aria-live":"polite","aria-busy":"true",children:v.jsx(yg,{children:Array.from({length:i}).map((l,s)=>v.jsx(zf,{},`skeleton-${s}`))})}):v.jsx(fo,{ref:e,$invisible:!0,role:"status","aria-live":"polite","aria-label":"Cargando más contenido"}),kg=k.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,Du=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`,Sg=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`,Cg=k.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Eg=k.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
`,Rf=({movies:e,onMovieClick:t,emptyMessage:n="No se encontraron películas",isLoading:r=!1,skeletonCount:o=12,infiniteScrollRef:i=null,hasMore:l=!1,loadingMore:s=!1,error:a=null,onRetry:u=null})=>r&&e.length===0?v.jsx(Du,{children:Array.from({length:o}).map((p,h)=>v.jsx(zf,{},`skeleton-${h}`))}):e.length===0&&!r?v.jsxs(Sg,{children:[v.jsx(Cg,{children:"🎬"}),v.jsx(Eg,{children:n})]}):v.jsxs(kg,{children:[v.jsx(Du,{children:e.map(p=>v.jsx(If,{movie:p,onClick:t},p.id))}),i&&v.jsx(xg,{triggerRef:i,isLoading:s,hasMore:l,error:a,onRetry:u,skeletonCount:6})]}),_g=(e,t={})=>{const{visibleCount:n=6,autoPlay:r=!1,autoPlayInterval:o=5e3}=t,[i,l]=P.useState(0),[s,a]=P.useState(!1),u=P.useRef(null),p=Math.max(0,e.length-n),h=e.slice(i,i+n),m=P.useCallback(()=>{l(d=>d>=p?0:d+1)},[p]),g=P.useCallback(()=>{l(d=>d<=0?p:d-1)},[p]),w=P.useCallback(d=>{const c=Math.max(0,Math.min(d,p));l(c)},[p]),x=P.useCallback(()=>{a(!0)},[]),N=P.useCallback(()=>{a(!1)},[]);return P.useEffect(()=>{if(!(!r||s||e.length<=n))return u.current=setInterval(m,o),()=>{u.current&&clearInterval(u.current)}},[r,s,m,o,e.length,n]),P.useEffect(()=>()=>{u.current&&clearInterval(u.current)},[]),{currentIndex:i,visibleItems:h,next:m,prev:g,goTo:w,pause:x,resume:N,isPaused:s,totalItems:e.length,maxIndex:p}},Pg=k.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 0.375rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }
`,$g=k.button`
  width: ${e=>e.$active?"24px":"8px"};
  height: 8px;
  border-radius: 4px;
  background: ${e=>e.$active?"var(--primary)":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${e=>e.$active?"var(--primary)":"rgba(255, 255, 255, 0.5)"};
  }

  @media (max-width: 768px) {
    width: ${e=>e.$active?"20px":"6px"};
    height: 6px;
  }
`,Tg=({totalItems:e,currentIndex:t,visibleCount:n,onDotClick:r})=>{if(e<=n)return null;const o=e-n,i=Array.from({length:e},(l,s)=>s);return v.jsx(Pg,{children:i.map(l=>{const s=l===t;return l<=o?v.jsx($g,{$active:s,onClick:()=>r(l),"aria-label":`Go to slide ${l+1}`},l):null})})},Mf=k.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0;

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0 !important;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    opacity: 1;
  }
`,jg=k(Mf)`
  left: 0.5rem;
`,Ng=k(Mf)`
  right: 0.5rem;
`,Ig=({onPrev:e,onNext:t,canGoPrev:n,canGoNext:r})=>v.jsxs(v.Fragment,{children:[v.jsx(jg,{onClick:e,disabled:!n,"aria-label":"Previous movies",children:"‹"}),v.jsx(Ng,{onClick:t,disabled:!r,"aria-label":"Next movies",children:"›"})]}),zg=k.div`
  width: 100%;
  margin: 2rem 0;
`,Rg=k.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0 2rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0 1rem;
  }
`,Mg=k.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`,Lg=k.div`
  overflow: hidden;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Fg=k.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>`-${e.$currentIndex*216}px`});

  @media (max-width: 768px) {
    gap: 0.5rem;
    transform: translateX(${e=>`-${e.$currentIndex*158}px`});
  }

  > * {
    flex: 0 0 200px;

    @media (max-width: 768px) {
      flex: 0 0 150px;
    }
  }
`,Dg=({movies:e,title:t="Películas Recomendadas",onMovieClick:n,autoPlay:r=!0})=>{const{currentIndex:o,next:i,prev:l,goTo:s,pause:a,resume:u,totalItems:p}=_g(e,{visibleCount:6,autoPlay:r,autoPlayInterval:5e3});return!e||e.length===0?null:v.jsxs(zg,{children:[v.jsx(Rg,{children:t}),v.jsxs(Mg,{onMouseEnter:a,onMouseLeave:u,children:[v.jsx(Ig,{onPrev:l,onNext:i,canGoPrev:o>0,canGoNext:o<p-6}),v.jsx(Lg,{children:v.jsx(Fg,{$currentIndex:o,children:e.map((h,m)=>v.jsx(If,{movie:h,onClick:n},h.id))})}),v.jsx(Tg,{totalItems:p,currentIndex:o,visibleCount:6,onDotClick:s})]})]})},Q={SEARCHING:"searching",CANDIDATE_1:"candidate1",CANDIDATE_2:"candidate2",CANDIDATE_3:"candidate3",SELECTING:"selecting",FINAL:"final",CANCELLED:"cancelled"},Og={[Q.SEARCHING]:5e3,[Q.CANDIDATE_1]:5e3,[Q.CANDIDATE_2]:5e3,[Q.CANDIDATE_3]:5e3,[Q.SELECTING]:5e3,[Q.FINAL]:5e3},Ag={[Q.SEARCHING]:1500,[Q.CANDIDATE_1]:1500,[Q.CANDIDATE_2]:1500,[Q.CANDIDATE_3]:1500,[Q.SELECTING]:1500,[Q.FINAL]:2e3},ol=[Q.SEARCHING,Q.CANDIDATE_1,Q.CANDIDATE_2,Q.CANDIDATE_3,Q.SELECTING,Q.FINAL],Bg=(e,t,n=!1)=>{const[r,o]=P.useState(Q.SEARCHING),[i,l]=P.useState(0),[s,a]=P.useState(!0),u=P.useRef(Date.now()),p=P.useRef(null),h=P.useRef(null),m=n?Ag:Og,g=Object.values(m).reduce((d,c)=>d+c,0),w=P.useCallback(()=>{if(!e||e.length===0)return null;switch(r){case Q.CANDIDATE_1:return e[0];case Q.CANDIDATE_2:return e[1];case Q.CANDIDATE_3:return e[2];default:return null}},[r,e]),x=P.useCallback(()=>{o(Q.CANCELLED),a(!1),p.current&&cancelAnimationFrame(p.current),h.current&&clearTimeout(h.current)},[]),N=P.useCallback(()=>{if(!s)return;const d=Date.now()-u.current,c=Math.min(d/g*100,100);l(c),c<100&&(p.current=requestAnimationFrame(N))},[s,g]);return P.useEffect(()=>{if(s)return p.current=requestAnimationFrame(N),()=>{p.current&&cancelAnimationFrame(p.current)}},[s,N]),P.useEffect(()=>{if(!s)return;const d=ol.indexOf(r);if(d===-1||d===ol.length-1)return;const c=m[r];return h.current=setTimeout(()=>{const f=ol[d+1];o(f)},c),()=>{h.current&&clearTimeout(h.current)}},[r,s,m]),{currentPhase:r,progress:i,currentCandidate:w(),finalMovie:r===Q.FINAL?t:null,isActive:s,cancel:x,phases:Q}},Ug=k.div`
  width: 100%;
  margin-bottom: 1.5rem;
`,Vg=k.div`
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`,Hg=k.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$progress}%;
    background: linear-gradient(90deg, var(--primary-color), #ff4444);
    transition: width 0.1s linear;
    border-radius: 4px;
  }
`,Wg={searching:"Searching for movies...",candidate1:"Candidate 1",candidate2:"Candidate 2",candidate3:"Candidate 3",selecting:"Making selection...",final:"Your match!"},Qg=({progress:e,currentPhase:t})=>{const n=Wg[t]||"Loading...";return v.jsxs(Ug,{children:[v.jsx(Vg,{children:n}),v.jsx(Hg,{$progress:e})]})},Gg=Ut`
  0% {
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(1000px) rotateY(0deg);
    opacity: 1;
  }
`,Yg=Ut`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,Kg=k.div`
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 280px;
  width: 100%;
  animation: ${e=>e.$reducedMotion?Yg:Gg} 0.6s ease-out;
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
`,Ou=k.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 2/3;
  object-fit: cover;
`,Xg=k.div`
  padding: 1rem;
  background: var(--card-bg);
`,Zg=k.h3`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Jg=k.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
`,Au=({movie:e,prefersReducedMotion:t=!1})=>{const[n,r]=P.useState(!1);if(!e)return null;const o=e.posterUrl||(e.posterPath?`https://image.tmdb.org/t/p/w500${e.posterPath}`:null),i=()=>{r(!0)},l=e.voteAverage||0;return v.jsxs(Kg,{$reducedMotion:t,children:[o&&!n?v.jsx(Ou,{src:o,alt:e.title,onError:i,loading:"eager"}):v.jsx(Ou,{as:"div",style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4rem",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:"🎬"}),v.jsxs(Xg,{children:[v.jsx(Zg,{children:e.title}),v.jsxs(Jg,{children:["⭐ ",l>0?l.toFixed(1):"N/A"]})]})]})},sa=Ut`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,bg=Ut`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,qg=Ut`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Lf=Ut`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,e0=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${sa} 0.3s ease-out;
  padding: 1rem;
`,t0=k.div`
  background: var(--secondary-color);
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 85vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${Lf} 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
    max-height: 90vh;
  }
`,n0=k.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: transform 0.2s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`,r0=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  gap: 1.5rem;
  animation: ${e=>e.$reducedMotion?sa:bg} 2s ease-in-out infinite;
`,Bu=k.div`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  &:first-child {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    &:first-child {
      font-size: 3rem;
    }
  }
`,o0=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  gap: 1.5rem;
  animation: ${e=>e.$reducedMotion?sa:qg} 2s linear infinite;
`,Uu=k.div`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  &:first-child {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    &:first-child {
      font-size: 3rem;
    }
  }
`,i0=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  animation: ${Lf} 0.6s ease-out;
`,l0=k.h2`
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,s0=k.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Vu=k.button`
  flex: 1;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>e.$secondary?"transparent":"var(--button-bg)"};
  color: ${e=>e.$secondary?"var(--text-color)":"var(--button-text)"};
  border: ${e=>e.$secondary?"2px solid var(--button-bg)":"1px solid var(--card-border)"};

  &:hover {
    transform: translateY(-2px);
    background: ${e=>e.$secondary?"var(--hover-bg)":"var(--button-hover)"};
    box-shadow: 0 4px 12px var(--card-shadow);
  }

  &:active {
    transform: translateY(0);
    background: ${e=>e.$secondary?"var(--hover-bg)":"var(--button-active)"};
  }

  &:focus {
    outline: 2px solid var(--input-focus);
    outline-offset: 2px;
  }
`,a0=({candidates:e,finalMovie:t,onClose:n,onViewDetails:r,onStartNew:o})=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,{currentPhase:l,progress:s,currentCandidate:a,finalMovie:u,cancel:p,phases:h}=Bg(e,t,i);P.useEffect(()=>{const w=x=>{x.key==="Escape"&&(p(),n())};return document.addEventListener("keydown",w),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",w),document.body.style.overflow="unset"}},[p,n]);const m=()=>{p(),n()},g=()=>{switch(l){case h.SEARCHING:return v.jsxs(r0,{$reducedMotion:i,children:[v.jsx(Bu,{children:"🎬"}),v.jsx(Bu,{children:"Searching for your perfect match..."})]});case h.CANDIDATE_1:case h.CANDIDATE_2:case h.CANDIDATE_3:return a?v.jsx(Au,{movie:a,prefersReducedMotion:i}):null;case h.SELECTING:return v.jsxs(o0,{$reducedMotion:i,children:[v.jsx(Uu,{children:"🎲"}),v.jsx(Uu,{children:"Making your selection..."})]});case h.FINAL:return u?v.jsxs(i0,{children:[v.jsx(l0,{children:"Your Perfect Match!"}),v.jsx(Au,{movie:u,prefersReducedMotion:i}),v.jsxs(s0,{children:[v.jsx(Vu,{onClick:()=>r(u),children:"View Details"}),v.jsx(Vu,{$secondary:!0,onClick:o,children:"Try Again"})]})]}):null;default:return null}};return v.jsx(e0,{onClick:m,children:v.jsxs(t0,{onClick:w=>w.stopPropagation(),children:[v.jsx(n0,{onClick:m,"aria-label":"Close",children:"✕"}),v.jsx(Qg,{progress:s,currentPhase:l}),g()]})})},u0=k.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,c0=k.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,d0=k.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,f0=k.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`,p0=k.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--button-bg);
  color: var(--button-text);
  border-radius: var(--border-radius);
  transition: var(--transition);
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: var(--button-hover);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    background: var(--button-active);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,h0=k.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  margin: 2rem auto;
  display: block;
  transition: var(--transition);

  &:hover:not(:disabled) {
    background: var(--button-hover);
  }

  &:active:not(:disabled) {
    background: var(--button-active);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,m0=k.div`
  padding: 1rem;
  background: rgba(229, 9, 20, 0.2);
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  text-align: center;
`,v0={genres:[],yearFrom:"",yearTo:"",minRating:0,language:"",sortBy:"popularity.desc"},g0=({onMovieClick:e})=>{const{getMoviesUseCase:t,searchMoviesUseCase:n,getRandomMovieUseCase:r}=Qn(),[o,i]=P.useState(""),[l,s]=P.useState(v0),[a,u]=P.useState([]),[p,h]=P.useState([]),[m,g]=P.useState(!1),[w,x]=P.useState(!1),[N,d]=P.useState(null),[c,f]=P.useState(null),[y,_]=P.useState(1),[E,S]=P.useState(!0),[j,D]=P.useState(!1),[R,ue]=P.useState(null),[Me,yt]=P.useState(!0),Le=Mv(o,300);P.useEffect(()=>{(async()=>{try{const ie=await t.execute({sortBy:"popularity.desc",page:1});h(ie.results.slice(0,12))}catch(ie){console.error("Error loading trending movies:",ie)}})()},[]);const ot=P.useCallback(async(Y,ie=!1)=>{try{ie||a.length===0?(g(!0),d(null)):(x(!0),f(null));let b;Le?b=await n.execute(Le,Y):b=await t.execute({...l,page:Y}),u(Fe=>ie?b.results:[...Fe,...b.results]),S(Y<b.totalPages),_(Y)}catch(b){ie||a.length===0?d("Error al cargar películas. Por favor, intenta de nuevo."):f(b),console.error(b)}finally{g(!1),x(!1)}},[Le,l,a.length,n,t]);P.useEffect(()=>{ot(1,!0)},[Le,l]);const Vt=P.useCallback(()=>{!w&&E&&Me&&(console.log("Infinite scroll triggered - loading page:",y+1),ot(y+1,!1))},[w,E,y,Me,ot]),it=()=>{!m&&!w&&E&&ot(y+1,!1)},$=()=>{f(null),ot(y+1,!1)},I=Lv(Vt,{hasMore:E,isLoading:w,threshold:.1,rootMargin:"200px"}),z=async()=>{try{g(!0);const Y=await r.executeWithCandidates(a.map(ie=>ie.id));Y?(ue(Y),D(!0)):d("No se encontraron suficientes películas para la animación")}catch(Y){d("Error al buscar película aleatoria"),console.error(Y)}finally{g(!1)}},A=()=>{D(!1),ue(null)},B=Y=>{D(!1),e(Y)},lt=()=>{D(!1),ue(null),z()};return v.jsxs(u0,{children:[v.jsxs(c0,{children:[v.jsx(d0,{children:"🎬 Movie Explorer"}),v.jsxs(f0,{children:[v.jsx(Av,{value:o,onChange:i}),v.jsx(p0,{onClick:z,disabled:m,children:"🎲 No sé qué ver"})]})]}),v.jsx(Zv,{filters:l,onChange:s}),!Le&&p.length>0&&v.jsx(Dg,{movies:p,title:"🔥 Tendencias",onMovieClick:e,autoPlay:!0}),N&&v.jsx(m0,{children:N}),v.jsx(Rf,{movies:a,onMovieClick:e,isLoading:m,emptyMessage:Le?`No se encontraron resultados para "${Le}"`:"No se encontraron películas con estos filtros",infiniteScrollRef:Me?I:null,hasMore:E,loadingMore:w,error:c,onRetry:$}),!Me&&E&&a.length>0&&v.jsx(h0,{onClick:it,disabled:m||w,children:w?"Cargando...":"Cargar más"}),j&&R&&v.jsx(a0,{candidates:R.candidates,finalMovie:R.final,onClose:A,onViewDetails:B,onStartNew:lt})]})},y0=k.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,w0=k.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,x0=k.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,k0=k.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  transition: var(--transition);
  align-self: flex-start;

  &:hover {
    background: var(--button-hover);
  }

  &:active {
    background: var(--button-active);
  }
`,S0=({onMovieClick:e,onBack:t})=>{const{favorites:n}=Qn();return v.jsxs(y0,{children:[v.jsxs(w0,{children:[v.jsx(k0,{onClick:t,children:"← Volver"}),v.jsxs(x0,{children:["❤️ Mis Favoritas (",n.length,")"]})]}),v.jsx(Rf,{movies:n,onMovieClick:e,emptyMessage:"No tienes películas favoritas aún. ¡Empieza a agregar algunas!"})]})},C0=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`,E0=k.div`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  max-width: 900px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
    max-width: 100%;
    height: 100%;
  }
`,_0=k.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: var(--transition);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`,P0=k.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`,$0=k.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,T0=k.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,j0=k.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,N0=k.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 1rem;
  color: var(--text-secondary);
`,I0=k.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,z0=k.span``,R0=k.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
`,M0=k.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,L0=k.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${e=>e.$isFavorite?"var(--primary-color)":"var(--button-bg)"};
  color: ${e=>e.$isFavorite?"#ffffff":"var(--button-text)"};
  border: 1px solid ${e=>e.$isFavorite?"var(--primary-color)":"var(--card-border)"};
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: ${e=>e.$isFavorite?"#c40812":"var(--button-hover)"};
  }

  &:active {
    background: ${e=>e.$isFavorite?"#a00610":"var(--button-active)"};
  }
`,F0=({movie:e,onClose:t})=>{const{toggleFavorite:n,isFavorite:r}=Qn(),o=r(e.id),i=()=>{n(e)},l=s=>{s.target===s.currentTarget&&t()};return v.jsx(C0,{onClick:l,children:v.jsxs(E0,{children:[v.jsx(_0,{onClick:t,children:"✕"}),e.backdropUrl&&v.jsx(P0,{src:e.backdropUrl,alt:e.title}),v.jsx($0,{children:v.jsxs(T0,{children:[v.jsx(j0,{children:e.title}),v.jsxs(N0,{children:[v.jsxs(I0,{children:["⭐ ",e.voteAverage.toFixed(1)]}),e.year&&v.jsxs(z0,{children:["📅 ",e.year]}),v.jsxs("span",{children:["🗣️ ",e.originalLanguage.toUpperCase()]})]}),e.overview&&v.jsx(R0,{children:e.overview}),v.jsx(M0,{children:v.jsx(L0,{onClick:i,$isFavorite:o,children:o?"❤️ Quitar de favoritos":"🤍 Agregar a favoritos"})})]})})]})})};function D0(){const[e,t]=P.useState("home"),[n,r]=P.useState(null),o=l=>{r(l)},i=()=>{r(null)};return v.jsx(_m,{children:v.jsxs(km,{children:[v.jsx(Rv,{currentView:e,onViewChange:t}),e==="home"&&v.jsx(g0,{onMovieClick:o}),e==="favorites"&&v.jsx(S0,{onMovieClick:o,onBack:()=>t("home")}),n&&v.jsx(F0,{movie:n,onClose:i})]})})}il.createRoot(document.getElementById("root")).render(v.jsx(jn.StrictMode,{children:v.jsx(D0,{})}));
