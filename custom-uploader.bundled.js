/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,e,i,s;const n=globalThis.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,l="?"+o,a=`<${l}>`,h=document,d=(t="")=>h.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,y=/'/g,m=/"/g,b=/^(?:script|style|textarea)$/i,w=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),x=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),C=new WeakMap,$=h.createTreeWalker(h,129,null,!1);class A{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let h=0,c=0;const p=t.length-1,w=this.parts,[x,S]=((t,e)=>{const i=t.length-1,s=[];let n,l=2===e?"<svg>":"",h=u;for(let e=0;e<i;e++){const i=t[e];let r,d,c=-1,p=0;for(;p<i.length&&(h.lastIndex=p,d=h.exec(i),null!==d);)p=h.lastIndex,h===u?"!--"===d[1]?h=v:void 0!==d[1]?h=f:void 0!==d[2]?(b.test(d[2])&&(n=RegExp("</"+d[2],"g")),h=g):void 0!==d[3]&&(h=g):h===g?">"===d[0]?(h=null!=n?n:u,c=-1):void 0===d[1]?c=-2:(c=h.lastIndex-d[2].length,r=d[1],h=void 0===d[3]?g:'"'===d[3]?m:y):h===m||h===y?h=g:h===v||h===f?h=u:(h=g,n=void 0);const w=h===g&&t[e+1].startsWith("/>")?" ":"";l+=h===u?i+a:c>=0?(s.push(r),i.slice(0,c)+"$lit$"+i.slice(c)+o+w):i+o+(-2===c?(s.push(void 0),e):w)}const d=l+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==r?r.createHTML(d):d,s]})(t,e);if(this.el=A.createElement(x,i),$.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=$.nextNode())&&w.length<p;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const i=S[c++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(i);w.push({type:1,index:h,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?k:"@"===e[1]?N:T})}else w.push({type:6,index:h})}for(const e of t)s.removeAttribute(e)}if(b.test(s.tagName)){const t=s.textContent.split(o),e=t.length-1;if(e>0){s.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],d()),$.nextNode(),w.push({type:2,index:++h});s.append(t[e],d())}}}else if(8===s.nodeType)if(s.data===l)w.push({type:2,index:h});else{let t=-1;for(;-1!==(t=s.data.indexOf(o,t+1));)w.push({type:7,index:h}),t+=o.length-1}h++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function E(t,e,i=t,s){var n,r,o,l;if(e===x)return e;let a=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a.O)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,s)),void 0!==s?(null!==(o=(l=i).Σi)&&void 0!==o?o:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=E(t,a.S(t,e.values),a,s)),e}class P{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);$.currentNode=n;let r=$.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new U(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new R(r,this,t)),this.l.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=$.nextNode(),o++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class U{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=E(this,t,e),c(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==x&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(h.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=A.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new P(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new A(t)),e}g(t){p(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new U(this.k(d()),this.k(d()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class T{constructor(t,e,i,s,n){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(S),this.strings=i):this.H=S}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=E(this,t,e,0),r=!c(t)||t!==this.H&&t!==x,r&&(this.H=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=E(this,s[i+o],e,o),l===x&&(l=this.H[o]),r||(r=!c(l)||l!==this.H[o]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}r&&!s&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends T{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class k extends T{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class N extends T{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=E(this,t,e,0))&&void 0!==i?i:S)===x)return;const s=this.H,n=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class R{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){E(this,t)}}null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,A,U),(null!==(i=(s=globalThis).litHtmlVersions)&&void 0!==i?i:s.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol();class L{constructor(t,e){if(e!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return O&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const M=new Map,I=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof L)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=M.get(i);return void 0===s&&M.set(i,s=new L(i,_)),s},D=O?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new L(t+"",_))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var z,B,W,F;const j={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},V=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:V};class J extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(D(t))}else void 0!==t&&e.push(D(t));return e}static Πp(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{O?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}Πj(t,e,i=q){var s,n;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:j.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var i,s,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:j.fromAttribute;this.Πh=o,this[o]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||V)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Q,Z,G,X,Y;J.finalized=!0,J.shadowRootOptions={mode:"open"},null===(B=(z=globalThis).reactiveElementPlatformSupport)||void 0===B||B.call(z,{ReactiveElement:J}),(null!==(W=(F=globalThis).reactiveElementVersions)&&void 0!==W?W:F.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(K=(Y=globalThis).litElementVersions)&&void 0!==K?K:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new U(e.insertBefore(d(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x}}tt.finalized=!0,tt._$litElement$=!0,null===(Z=(Q=globalThis).litElementHydrateSupport)||void 0===Z||Z.call(Q,{LitElement:tt}),null===(X=(G=globalThis).litElementPlatformSupport)||void 0===X||X.call(G,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=2;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=(t,e)=>{var i,s;const n=t.N;if(void 0===n)return!1;for(const t of n)null===(s=(i=t).O)||void 0===s||s.call(i,e,!1),it(t,e);return!0},st=t=>{let e,i;do{if(void 0===(e=t.M))break;i=e.N,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},nt=t=>{for(let e;e=t.M;t=e){let i=e.N;if(void 0===i)e.N=i=new Set;else if(i.has(t))break;i.add(t),lt(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){void 0!==this.N?(st(this),this.M=t,nt(this)):this.M=t}function ot(t,e=!1,i=0){const s=this.H,n=this.N;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)it(s[t],!1),st(s[t]);else null!=s&&(it(s,!1),st(s));else it(this,t)}const lt=t=>{var e,i,s,n;t.type==et&&(null!==(e=(s=t).P)&&void 0!==e||(s.P=ot),null!==(i=(n=t).Q)&&void 0!==i||(n.Q=rt))};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=()=>new ht;class ht{}const dt=new WeakMap,ct=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this.isConnected=!0,this.ut=x,this.N=void 0}T(t,e,i){super.T(t,e,i),nt(this)}O(t,e=!0){this.at(t),e&&(it(this,t),st(this))}at(t){var e,i;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==x&&(this.setValue(this.ut),this.ut=x),null===(e=this.reconnected)||void 0===e||e.call(this)):(this.isConnected=!1,null===(i=this.disconnected)||void 0===i||i.call(this)))}S(t,e){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(t,e)}setValue(t){if(this.isConnected)if((t=>void 0===t.strings)(this.Σdt))this.Σdt.I(t,this);else{const e=[...this.Σdt.H];e[this.Σct]=t,this.Σdt.I(e,this,0)}else this.ut=t}disconnected(){}reconnected(){}}{render(t){return S}update(t,[e]){var i;const s=e!==this.gt;return s&&void 0!==this.gt&&this.xt(void 0),(s||this.Tt!==this.Et)&&(this.gt=e,this.At=null===(i=t.options)||void 0===i?void 0:i.host,this.xt(this.Et=t.element)),S}xt(t){"function"==typeof this.gt?(void 0!==dt.get(this.gt)&&this.gt.call(this.At,void 0),dt.set(this.gt,t),void 0!==t&&this.gt.call(this.At,t)):this.gt.value=t}get Tt(){var t;return"function"==typeof this.gt?dt.get(this.gt):null===(t=this.gt)||void 0===t?void 0:t.value}disconnected(){this.Tt===this.Et&&this.xt(void 0)}reconnected(){this.xt(this.Et)}}),pt=t=>new Promise(((e,i)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(s.result),s.onerror=t=>i(t)})),ut=t=>{for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i="",s=0;s<t;s++)i+=e.charAt(Math.floor(Math.random()*e.length));return i},vt=t=>t.split(",")[0].split(":")[1].split(";")[0],ft=(t,e)=>{for(var i=t.split(","),s=i[0].match(/:(.*?);/)[1],n=atob(i[1]),r=n.length,o=new Uint8Array(r);r--;)o[r]=n.charCodeAt(r);return new File([o],e,{type:s})},gt=async t=>{let e=await fetch(t),i=await e.blob(),s={type:i.type};return new Promise(((t,e)=>{t(new File([i],ut(7)+"."+i.type.split("/")[1],s))}))};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yt extends tt{static get styles(){return I`
    `}static get properties(){return{name:{type:String},label:{type:String},accept:{type:String},multiple:{type:Boolean,default:!0},data:{type:Array}}}constructor(){super(),this.fileInput=at(),this.fileLabel=at(),this.fileWrapper=at(),this.files=new Array}connectedCallback(){super.connectedCallback(),console.log("data parse",this.data),this.prepareFiles()}async prepareFiles(){if(Array.isArray(this.data)&&this.data.length>0)for(let t=0;t<this.data.length;t++){const e=this.data[t];let i=await gt(e);this.files.push(i),this.addImages(await pt(i))}}_dragEnter(t){t.preventDefault()}_dragOver(t){t.preventDefault()}_onUpdateFiles(){this.fileInput.value.files=(t=>{for(var e=new ClipboardEvent("").clipboardData||new DataTransfer,i=0,s=t.length;i<s;i++)e.items.add(t[i]);return e.files})(this.files)}_onFileWrapperClick(t){(t.target.classList.contains("file-upload")||t.target.classList.contains("file-label")||t.target.classList.contains("file-wrapper"))&&this.fileInput.value.click()}addImages(t){this.fileLabel.value.style.display="none";let e=document.createElement("div");e.setAttribute("data-index",this.files.length),e.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e.remove();let i=parseInt(this.getAttribute("data-index"));this.files.splice(i,1),this._onUpdateFiles(),0==this.files.length&&(this.fileLabel.value.style.display="flex")}));let i=document.createElement("img");i.src=t,i.style.width="100px",i.style.height="100px",e.appendChild(i),this.fileWrapper.value.appendChild(e),this._onUpdateFiles()}_onFileChange(t){t.stopPropagation(),t.preventDefault();let e=new Array;if(e=t.target.files||t.dataTransfer.files,e.length>0)for(var i=0;i<e.length;i++){var s=e[i],n=new FileReader;n.onload=t=>{let e=t.target.result;this.files.push(ft(e,ut(7)+"."+vt(e).split("/")[1])),this.addImages(e)},n.readAsDataURL(s)}}render(){return w`
        <style>
          .file-wrapper{
    width: 100%;
    height : 150px;
    border: 0.5px dashed grey;
    position: relative;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
}
.file-wrapper label{
    display: flex;
    color: grey;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 14px;
}
.file-upload {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: none;
}

.file-wrapper > div > img{
    display: flex;
    flex-direction: row;
    object-fit: cover;
    padding: 5px;
    
}
.file-wrapper > div {
    position: relative;
}
.file-wrapper > div:after{
    content: 'x';
    background-color : #488ce6;
    font-family: sans-serif;
    font-size :12px;
    transform-origin: center;
    line-height: 20px;
    position: absolute;
    top : 0;
    right : 0;
    width: 20px;
    height: 20px;
    color: white;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
}
        </style>
         <div 
         @dragover="${this._dragOver}" 
         @dragenter="${this._dragEnter}" 
         @drop="${this._onFileChange}"   
         @click="${this._onFileWrapperClick}"  ${ct(this.fileWrapper)} 
         class="file-wrapper">
            <label ${ct(this.fileLabel)}  class="file-label">
                ${this.label}
            </label>
            <input ?multiple="${this.multiple}" 
             ${ct(this.fileInput)} 
             @change="${this._onFileChange}"
             type="file" 
             class="file-upload"
             accept="${this.accept}"
             name="${this.name}">
        </div>
       
    `}createRenderRoot(){return this}}window.customElements.define("custom-uploader",yt);export{yt as CustomUploader};
