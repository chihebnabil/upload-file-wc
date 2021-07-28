/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,h="?"+r,l=`<${h}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,f=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,y=/'/g,g=/"/g,b=/^(?:script|style|textarea)$/i,m=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),S=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),$=new WeakMap,C=a.createTreeWalker(a,129,null,!1);class k{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let a=0,c=0;const u=t.length-1,m=this.parts,[S,x]=((t,i)=>{const s=t.length-1,e=[];let n,h=2===i?"<svg>":"",a=v;for(let i=0;i<s;i++){const s=t[i];let o,d,c=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),null!==d);)u=a.lastIndex,a===v?"!--"===d[1]?a=p:void 0!==d[1]?a=f:void 0!==d[2]?(b.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=w):void 0!==d[3]&&(a=w):a===w?">"===d[0]?(a=null!=n?n:v,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,o=d[1],a=void 0===d[3]?w:'"'===d[3]?g:y):a===g||a===y?a=w:a===p||a===f?a=v:(a=w,n=void 0);const m=a===w&&t[i+1].startsWith("/>")?" ":"";h+=a===v?s+l:c>=0?(e.push(o),s.slice(0,c)+"$lit$"+s.slice(c)+r+m):s+r+(-2===c?(e.push(void 0),i):m)}const d=h+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==o?o.createHTML(d):d,e]})(t,i);if(this.el=k.createElement(S,s),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=C.nextNode())&&m.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=x[c++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);m.push({type:1,index:a,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?_:"@"===i[1]?j:E})}else m.push({type:6,index:a})}for(const i of t)e.removeAttribute(i)}if(b.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=n?n.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),C.nextNode(),m.push({type:2,index:++a});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===h)m.push({type:2,index:a});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)m.push({type:7,index:a}),t+=r.length-1}a++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function A(t,i,s=t,e){var n,o,r,h;if(i===S)return i;let l=void 0!==e?null===(n=s.Σi)||void 0===n?void 0:n[e]:s.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(t),l.T(t,s,e)),void 0!==e?(null!==(r=(h=s).Σi)&&void 0!==r?r:h.Σi=[])[e]=l:s.Σo=l),void 0!==l&&(i=A(t,l.S(t,i.values),l,e)),i}class T{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);C.currentNode=n;let o=C.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new M(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new O(o,this,t)),this.l.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(o=C.nextNode(),r++)}return n}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class M{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=A(this,t,i),c(t)?t===x||null==t||""===t?(this.H!==x&&this.R(),this.H=x):t!==this.H&&t!==S&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=k.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(s);else{const t=new T(n,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new k(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const n of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(n),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class E{constructor(t,i,s,e,n){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(x),this.strings=s):this.H=x}get tagName(){return this.element.tagName}I(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=A(this,t,i,0),o=!c(t)||t!==this.H&&t!==S,o&&(this.H=t);else{const e=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=A(this,e[s+r],i,r),h===S&&(h=this.H[r]),o||(o=!c(h)||h!==this.H[r]),h===x?t=x:t!==x&&(t+=(null!=h?h:"")+n[r+1]),this.H[r]=h}o&&!e&&this.W(t)}W(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends E{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===x?void 0:t}}class _ extends E{constructor(){super(...arguments),this.type=4}W(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class j extends E{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=A(this,t,i,0))&&void 0!==s?s:x)===S)return;const e=this.H,n=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==x&&(e===x||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class O{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){A(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,k,M),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol();class F{constructor(t,i){if(i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return U&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const N=new Map,P=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof F)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=N.get(s);return void 0===e&&N.set(s,e=new F(s,z)),e},I=U?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new F(t+"",z))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var W,D,L,B;const q={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},H=(t,i)=>i!==t&&(i==i||t==t),J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:H};class V extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=J){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(I(t))}else void 0!==t&&i.push(I(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{U?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=J){var e,n;const o=this.constructor.Πp(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:q.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,i){var s,e,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),h=t.converter,l=null!==(n=null!==(e=null===(s=h)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof h?h:null)&&void 0!==n?n:q.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||H)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,K,G,Q,X,Y;V.finalized=!0,V.shadowRootOptions={mode:"open"},null===(D=(W=globalThis).reactiveElementPlatformSupport)||void 0===D||D.call(W,{ReactiveElement:V}),(null!==(L=(B=globalThis).reactiveElementVersions)&&void 0!==L?L:B.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(Z=(Y=globalThis).litElementVersions)&&void 0!==Z?Z:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends V{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new M(i.insertBefore(d(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return S}}tt.finalized=!0,tt._$litElement$=!0,null===(G=(K=globalThis).litElementHydrateSupport)||void 0===G||G.call(K,{LitElement:tt}),null===(X=(Q=globalThis).litElementPlatformSupport)||void 0===X||X.call(Q,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=2;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t,i)=>{var s,e;const n=t.N;if(void 0===n)return!1;for(const t of n)null===(e=(s=t).O)||void 0===e||e.call(s,i,!1),st(t,i);return!0},et=t=>{let i,s;do{if(void 0===(i=t.M))break;s=i.N,s.delete(t),t=i}while(0===(null==s?void 0:s.size))},nt=t=>{for(let i;i=t.M;t=i){let s=i.N;if(void 0===s)i.N=s=new Set;else if(s.has(t))break;s.add(t),ht(i)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){void 0!==this.N?(et(this),this.M=t,nt(this)):this.M=t}function rt(t,i=!1,s=0){const e=this.H,n=this.N;if(void 0!==n&&0!==n.size)if(i)if(Array.isArray(e))for(let t=s;t<e.length;t++)st(e[t],!1),et(e[t]);else null!=e&&(st(e,!1),et(e));else st(this,t)}const ht=t=>{var i,s,e,n;t.type==it&&(null!==(i=(e=t).P)&&void 0!==i||(e.P=rt),null!==(s=(n=t).Q)&&void 0!==s||(n.Q=ot))};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=()=>new at;class at{}const dt=new WeakMap,ct=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(){super(...arguments),this.isConnected=!0,this.ut=S,this.N=void 0}T(t,i,s){super.T(t,i,s),nt(this)}O(t,i=!0){this.at(t),i&&(st(this,t),et(this))}at(t){var i,s;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==S&&(this.setValue(this.ut),this.ut=S),null===(i=this.reconnected)||void 0===i||i.call(this)):(this.isConnected=!1,null===(s=this.disconnected)||void 0===s||s.call(this)))}S(t,i){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(t,i)}setValue(t){if(this.isConnected)if((t=>void 0===t.strings)(this.Σdt))this.Σdt.I(t,this);else{const i=[...this.Σdt.H];i[this.Σct]=t,this.Σdt.I(i,this,0)}else this.ut=t}disconnected(){}reconnected(){}}{render(t){return x}update(t,[i]){var s;const e=i!==this.gt;return e&&void 0!==this.gt&&this.xt(void 0),(e||this.Tt!==this.Et)&&(this.gt=i,this.At=null===(s=t.options)||void 0===s?void 0:s.host,this.xt(this.Et=t.element)),x}xt(t){"function"==typeof this.gt?(void 0!==dt.get(this.gt)&&this.gt.call(this.At,void 0),dt.set(this.gt,t),void 0!==t&&this.gt.call(this.At,t)):this.gt.value=t}get Tt(){var t;return"function"==typeof this.gt?dt.get(this.gt):null===(t=this.gt)||void 0===t?void 0:t.value}disconnected(){this.Tt===this.Et&&this.xt(void 0)}reconnected(){this.xt(this.Et)}}),ut=t=>new Promise(((i,s)=>{const e=new FileReader;e.readAsDataURL(t),e.onload=()=>i(e.result),e.onerror=t=>s(t)})),vt=t=>{for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="",e=0;e<t;e++)s+=i.charAt(Math.floor(Math.random()*i.length));return s},pt=t=>t.split(",")[0].split(":")[1].split(";")[0],ft=(t,i)=>{for(var s=t.split(","),e=s[0].match(/:(.*?);/)[1],n=atob(s[1]),o=n.length,r=new Uint8Array(o);o--;)r[o]=n.charCodeAt(o);return new File([r],i,{type:e})},wt=async t=>{let i=await fetch(t),s=await i.blob(),e={type:s.type};return new Promise(((t,i)=>{t(new File([s],vt(7)+"."+s.type.split("/")[1],e))}))};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yt extends tt{static get styles(){return P`
    `}static get properties(){return{name:{type:String},label:{type:String},accept:{type:String},multiple:{type:Boolean,default:!0},data:{type:Array}}}constructor(){super(),this.fileInput=lt(),this.fileLabel=lt(),this.fileWrapper=lt(),this.files=new Array}connectedCallback(){super.connectedCallback(),console.log("data parse",this.data),this.prepareFiles()}async prepareFiles(){if(Array.isArray(this.data)&&this.data.length>0)for(let t=0;t<this.data.length;t++){const i=this.data[t];let s=await wt(i);this.files.push(s),this.addImages(await ut(s))}}_dragEnter(t){t.preventDefault()}_dragOver(t){t.preventDefault()}_onUpdateFiles(){this.fileInput.value.files=(t=>{for(var i=new ClipboardEvent("").clipboardData||new DataTransfer,s=0,e=t.length;s<e;s++)i.items.add(t[s]);return i.files})(this.files)}_onFileWrapperClick(t){(t.target.classList.contains("file-upload")||t.target.classList.contains("file-label")||t.target.classList.contains("file-wrapper"))&&this.fileInput.value.click()}addImages(t){this.fileLabel.value.style.display="none";let i=document.createElement("div");i.setAttribute("data-index",this.files.length),i.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),i.remove();let s=parseInt(this.getAttribute("data-index"));this.files.splice(s,1),this._onUpdateFiles(),0==this.files.length&&(this.fileLabel.value.style.display="flex")}));let s=document.createElement("img");s.src=t,s.style.width="100px",s.style.height="100px",i.appendChild(s),this.fileWrapper.value.appendChild(i),this._onUpdateFiles()}_onFileChange(t){t.stopPropagation(),t.preventDefault();let i=new Array;if(i=t.target.files||t.dataTransfer.files,i.length>0)for(var s=0;s<i.length;s++){var e=i[s],n=new FileReader;n.onload=t=>{let i=t.target.result;this.files.push(ft(i,vt(7)+"."+pt(i).split("/")[1])),this.addImages(i)},n.readAsDataURL(e)}}render(){return m`
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
