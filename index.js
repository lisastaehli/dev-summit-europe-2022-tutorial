/*! For license information please see index.js.LICENSE.txt */
(()=>{var e,t,i={77210:(e,t,i)=>{"use strict";i.d(t,{Z5:()=>Pe,mv:()=>f,AA:()=>R,yM:()=>Q,xE:()=>oe,K3:()=>me,h:()=>M,GH:()=>fe,YY:()=>ge});let r,s,n,o=!1,a=!1,l=!1,c=!1,u=null,h=!1;const d="undefined"!=typeof window?window:{},p=d.document||{head:{}},f=d.HTMLElement||class{},m={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,r)=>e.addEventListener(t,i,r),rel:(e,t,i,r)=>e.removeEventListener(t,i,r),ce:(e,t)=>new CustomEvent(e,t)},g=(()=>{let e=!1;try{p.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),y=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),_=(e,t,i,r)=>{i&&i.map((([i,r,s])=>{const n=b(e,i),o=v(t,s),a=w(i);m.ael(n,r,o,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>m.rel(n,r,o,a)))}))},v=(e,t)=>i=>{try{e.$hostElement$[t](i)}catch(e){we(e)}},b=(e,t)=>4&t?p:8&t?d:16&t?p.body:e,w=e=>g?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),x="http://www.w3.org/1999/xlink",C=new WeakMap,T=(e,t,i,r)=>{let s=S(t,i),n=xe.get(s);if(e=11===e.nodeType?e:p,n)if("string"==typeof n){e=e.head||e;let t,i=C.get(e);i||C.set(e,i=new Set),i.has(s)||(t=p.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),i&&i.add(s))}else!e.adoptedStyleSheets.includes(n)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return s},S=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),E={},A=e=>"object"==(e=typeof e)||"function"===e,M=(e,t,...i)=>{let r=null,s=null,n=null,o=!1,a=!1,l=[];const c=t=>{for(let i=0;i<t.length;i++)r=t[i],Array.isArray(r)?c(r):null!=r&&"boolean"!=typeof r&&((o="function"!=typeof e&&!A(r))&&(r=String(r)),o&&a?l[l.length-1].$text$+=r:l.push(o?O(null,r):r),a=o)};if(c(i),t&&(t.key&&(s=t.key),t.name&&(n=t.name),true)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,l,I);const u=O(e,null);return u.$attrs$=t,l.length>0&&(u.$children$=l),u.$key$=s,u.$name$=n,u},O=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null};return i},R={},P=e=>e&&e.$tag$===R,I={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(D)},L=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),D=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),M(e.vtag,t,...e.vchildren||[])}const t=O(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},N=(e,t,i,r,s,n)=>{if(i!==r){let o=be(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=k(i),n=k(r);t.remove(...s.filter((e=>e&&!n.includes(e)))),t.add(...n.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in i)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)i&&r[t]===i[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){{const l=A(r);if((o||l&&null!==r)&&!s)try{if(e.tagName.includes("-"))e[t]=r;else{let s=null==r?"":r;"list"===t?o=!1:null!=i&&e[t]==s||(e[t]=s)}}catch(e){}let c=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(x,t):e.removeAttribute(t)):(!o||4&n||s)&&!l&&(r=!0===r?"":r,c?e.setAttributeNS(x,t,r):e.setAttribute(t,r))}}else t="-"===t[2]?t.slice(3):be(d,a)?a.slice(2):a[2]+t.slice(3),i&&m.rel(e,t,i,!1),r&&m.ael(e,t,r,!1)}},F=/\s/,k=e=>e?e.split(F):[],U=(e,t,i,r)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,n=e&&e.$attrs$||E,o=t.$attrs$||E;for(r in n)r in o||N(s,r,n[r],void 0,i,t.$flags$);for(r in o)N(s,r,n[r],o[r],i,t.$flags$)},V=(e,t,i,a)=>{let u,h,d,f=t.$children$[i],m=0;if(!o&&(l=!0,"slot"===f.$tag$&&(r&&a.classList.add(r+"-s"),f.$flags$|=f.$children$?2:1)),null!==f.$text$)u=f.$elm$=p.createTextNode(f.$text$);else if(1&f.$flags$)u=f.$elm$=p.createTextNode("");else{if(!c&&(c="svg"===f.$tag$),u=f.$elm$=p.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&f.$flags$?"slot-fb":f.$tag$),c&&"foreignObject"===f.$tag$&&(c=!1),U(null,f,c),null!=r&&u["s-si"]!==r&&u.classList.add(u["s-si"]=r),f.$children$)for(m=0;m<f.$children$.length;++m)h=V(e,f,m,u),h&&u.appendChild(h);"svg"===f.$tag$?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=n,3&f.$flags$&&(u["s-sr"]=!0,u["s-cr"]=s,u["s-sn"]=f.$name$||"",d=e&&e.$children$&&e.$children$[i],d&&d.$tag$===f.$tag$&&e.$elm$&&z(e.$elm$,!1)),u},z=(e,t)=>{m.$flags$|=1;const i=e.childNodes;for(let e=i.length-1;e>=0;e--){const r=i[e];r["s-hn"]!==n&&r["s-ol"]&&(W(r).insertBefore(r,G(r)),r["s-ol"].remove(),r["s-ol"]=void 0,l=!0),t&&z(r,t)}m.$flags$&=-2},B=(e,t,i,r,s,o)=>{let a,l=e["s-cr"]&&e["s-cr"].parentNode||e;for(l.shadowRoot&&l.tagName===n&&(l=l.shadowRoot);s<=o;++s)r[s]&&(a=V(null,i,s,e),a&&(r[s].$elm$=a,l.insertBefore(a,G(t))))},H=(e,t,i,r,s)=>{for(;t<=i;++t)(r=e[t])&&(s=r.$elm$,J(r),a=!0,s["s-ol"]?s["s-ol"].remove():z(s,!0),s.remove())},j=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),G=e=>e&&e["s-ol"]||e,W=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Z=(e,t)=>{const i=t.$elm$=e.$elm$,r=e.$children$,s=t.$children$,n=t.$tag$,o=t.$text$;let a;null!==o?(a=i["s-cr"])?a.parentNode.textContent=o:e.$text$!==o&&(i.data=o):(c="svg"===n||"foreignObject"!==n&&c,"slot"===n||U(e,t,c),null!==r&&null!==s?((e,t,i,r)=>{let s,n,o=0,a=0,l=0,c=0,u=t.length-1,h=t[0],d=t[u],p=r.length-1,f=r[0],m=r[p];for(;o<=u&&a<=p;)if(null==h)h=t[++o];else if(null==d)d=t[--u];else if(null==f)f=r[++a];else if(null==m)m=r[--p];else if(j(h,f))Z(h,f),h=t[++o],f=r[++a];else if(j(d,m))Z(d,m),d=t[--u],m=r[--p];else if(j(h,m))"slot"!==h.$tag$&&"slot"!==m.$tag$||z(h.$elm$.parentNode,!1),Z(h,m),e.insertBefore(h.$elm$,d.$elm$.nextSibling),h=t[++o],m=r[--p];else if(j(d,f))"slot"!==h.$tag$&&"slot"!==m.$tag$||z(d.$elm$.parentNode,!1),Z(d,f),e.insertBefore(d.$elm$,h.$elm$),d=t[--u],f=r[++a];else{for(l=-1,c=o;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){l=c;break}l>=0?(n=t[l],n.$tag$!==f.$tag$?s=V(t&&t[a],i,l,e):(Z(n,f),t[l]=void 0,s=n.$elm$),f=r[++a]):(s=V(t&&t[a],i,a,e),f=r[++a]),s&&W(h.$elm$).insertBefore(s,G(h.$elm$))}o>u?B(e,null==r[p+1]?null:r[p+1].$elm$,i,r,a,p):a>p&&H(t,o,u)})(i,r,t,s):null!==s?(null!==e.$text$&&(i.textContent=""),B(i,null,t,s,0,s.length-1)):null!==r&&H(r,0,r.length-1),c&&"svg"===n&&(c=!1))},q=e=>{let t,i,r,s,n,o,a=e.childNodes;for(i=0,r=a.length;i<r;i++)if(t=a[i],1===t.nodeType){if(t["s-sr"])for(n=t["s-sn"],t.hidden=!1,s=0;s<r;s++)if(o=a[s].nodeType,a[s]["s-hn"]!==t["s-hn"]||""!==n){if(1===o&&n===a[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===o||3===o&&""!==a[s].textContent.trim()){t.hidden=!0;break}q(t)}},$=[],Y=e=>{let t,i,r,s,n,o,l=0,c=e.childNodes,u=c.length;for(;l<u;l++){if(t=c[l],t["s-sr"]&&(i=t["s-cr"])&&i.parentNode)for(r=i.parentNode.childNodes,s=t["s-sn"],o=r.length-1;o>=0;o--)i=r[o],i["s-cn"]||i["s-nr"]||i["s-hn"]===t["s-hn"]||(X(i,s)?(n=$.find((e=>e.$nodeToRelocate$===i)),a=!0,i["s-sn"]=i["s-sn"]||s,n?n.$slotRefNode$=t:$.push({$slotRefNode$:t,$nodeToRelocate$:i}),i["s-sr"]&&$.map((e=>{X(e.$nodeToRelocate$,i["s-sn"])&&(n=$.find((e=>e.$nodeToRelocate$===i)),n&&!e.$slotRefNode$&&(e.$slotRefNode$=n.$slotRefNode$))}))):$.some((e=>e.$nodeToRelocate$===i))||$.push({$nodeToRelocate$:i}));1===t.nodeType&&Y(t)}},X=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,J=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(J)},K=(e,t)=>{const i=e.$hostElement$,c=e.$cmpMeta$,u=e.$vnode$||O(null,null),h=P(t)?t:M(null,null,t);if(n=i.tagName,c.$attrsToReflect$&&(h.$attrs$=h.$attrs$||{},c.$attrsToReflect$.map((([e,t])=>h.$attrs$[t]=i[e]))),h.$tag$=null,h.$flags$|=4,e.$vnode$=h,h.$elm$=u.$elm$=i.shadowRoot||i,r=i["s-sc"],s=i["s-cr"],o=0!=(1&c.$flags$),a=!1,Z(u,h),m.$flags$|=1,l){let e,t,i,r,s,n;Y(h.$elm$);let o=0;for(;o<$.length;o++)e=$[o],t=e.$nodeToRelocate$,t["s-ol"]||(i=p.createTextNode(""),i["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=i,t));for(o=0;o<$.length;o++)if(e=$[o],t=e.$nodeToRelocate$,e.$slotRefNode$){for(r=e.$slotRefNode$.parentNode,s=e.$slotRefNode$.nextSibling,i=t["s-ol"];i=i.previousSibling;)if(n=i["s-nr"],n&&n["s-sn"]===t["s-sn"]&&r===n.parentNode&&(n=n.nextSibling,!n||!n["s-nr"])){s=n;break}(!s&&r!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),r.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}a&&q(h.$elm$),m.$flags$&=-2,$.length=0},Q=(e,t,i)=>{const r=e;return{emit:e=>ee(r,t,{bubbles:!!(4&i),composed:!!(2&i),cancelable:!!(1&i),detail:e})}},ee=(e,t,i)=>{const r=m.ce(t,i);return e.dispatchEvent(r),r},te=(e,t)=>{e.$flags$|=16,e.$ancestorComponent$;const i=()=>ie(e,t);return Re(i)},ie=(e,t)=>{const i=e.$hostElement$,r=(e.$cmpMeta$.$tagName$,()=>{}),s=i;let n;return t?(ce(i,"componentWillLoad"),n=ae(s,"componentWillLoad")):(ce(i,"componentWillUpdate"),n=ae(s,"componentWillUpdate")),ce(i,"componentWillRender"),n=le(n,(()=>ae(s,"componentWillRender"))),r(),le(n,(()=>re(e,s,t)))},re=async(e,t,i)=>{const r=e.$hostElement$,s=(e.$cmpMeta$.$tagName$,()=>{});r["s-rc"];i&&(e=>{const t=e.$cmpMeta$,i=e.$hostElement$,r=t.$flags$,s=(t.$tagName$,()=>{}),n=T(i.shadowRoot?i.shadowRoot:i.getRootNode(),t,e.$modeName$);10&r&&(i["s-sc"]=n,i.classList.add(n+"-h"),2&r&&i.classList.add(n+"-s")),s()})(e);const n=(e.$cmpMeta$.$tagName$,()=>{});se(e,t,r),n(),s(),ne(e)},se=(e,t,i)=>{try{u=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,K(e,t)}catch(t){we(t,e.$hostElement$)}return u=null,null},ne=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,i=()=>{},r=t;e.$ancestorComponent$;ae(r,"componentDidRender"),ce(t,"componentDidRender"),64&e.$flags$?(ae(r,"componentDidUpdate"),ce(t,"componentDidUpdate"),i()):(e.$flags$|=64,ae(r,"componentDidLoad"),ce(t,"componentDidLoad"),i())},oe=e=>{{const t=_e(e),i=t.$hostElement$.isConnected;return i&&2==(18&t.$flags$)&&te(t,!1),i}},ae=(e,t,i)=>{if(e&&e[t])try{return e[t](i)}catch(e){we(e)}},le=(e,t)=>e&&e.then?e.then(t):t(),ce=(e,t)=>{},ue=(e,t,i)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const i=Object.entries(t.$members$),r=e.prototype;i.map((([e,[i]])=>{(31&i||32&i)&&Object.defineProperty(r,e,{get(){return t=e,_e(this).$instanceValues$.get(t);var t},set(i){((e,t,i,r)=>{const s=_e(e),n=e,o=s.$instanceValues$.get(t),a=s.$flags$,l=n;var c,u;c=i,u=r.$members$[t][0],i=null==c||A(c)?c:4&u?"false"!==c&&(""===c||!!c):2&u?parseFloat(c):1&u?String(c):c;const h=Number.isNaN(o)&&Number.isNaN(i);if(i!==o&&!h&&(s.$instanceValues$.set(t,i),1)){if(r.$watchers$&&128&a){const e=r.$watchers$[t];e&&e.map((e=>{try{l[e](i,o,t)}catch(e){we(e,n)}}))}if(2==(18&a)){if(l.componentShouldUpdate&&!1===l.componentShouldUpdate(i,o,t))return;te(s,!1)}}})(this,e,i,t)},configurable:!0,enumerable:!0})}));{const s=new Map;r.attributeChangedCallback=function(e,t,i){m.jmp((()=>{const t=s.get(e);if(this.hasOwnProperty(t))i=this[t],delete this[t];else if(r.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==i)return;this[t]=(null!==i||"boolean"!=typeof this[t])&&i}))},e.observedAttributes=i.filter((([e,t])=>15&t[0])).map((([e,i])=>{const r=i[1]||e;return s.set(r,e),512&i[0]&&t.$attrsToReflect$.push([e,r]),r}))}}return e},he=async(e,t,i,r,s)=>{if(0==(32&t.$flags$)&&(s=e.constructor,t.$flags$|=32,customElements.whenDefined(i.$tagName$).then((()=>t.$flags$|=128)),s.style)){let r=s.style;"string"!=typeof r&&(r=r[t.$modeName$=(e=>Ce.map((t=>t(e))).find((e=>!!e)))(e)]);const n=S(i,t.$modeName$);if(!xe.has(n)){const e=(i.$tagName$,()=>{});((e,t,i)=>{let r=xe.get(e);y&&i?(r=r||new CSSStyleSheet,r.replace(t)):r=t,xe.set(e,r)})(n,r,!!(1&i.$flags$)),e()}}t.$ancestorComponent$;const n=()=>te(t,!0);n()},de=e=>{},pe=e=>{const t=e["s-cr"]=p.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},fe=(e,t)=>{const i={$flags$:t[0],$tagName$:t[1]};i.$members$=t[2],i.$listeners$=t[3],i.$watchers$=e.$watchers$,i.$attrsToReflect$=[];const r=e.prototype.connectedCallback,s=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){ve(this,i)},connectedCallback(){(e=>{if(0==(1&m.$flags$)){const t=_e(e),i=t.$cmpMeta$,r=(i.$tagName$,()=>{});if(1&t.$flags$)_(e,t,i.$listeners$),de(t.$lazyInstance$);else{let r;t.$flags$|=1,!r&&12&i.$flags$&&pe(e),i.$members$&&Object.entries(i.$members$).map((([t,[i]])=>{if(31&i&&e.hasOwnProperty(t)){const i=e[t];delete e[t],e[t]=i}})),he(e,t,i)}r()}})(this),r&&r.call(this)},disconnectedCallback(){(e=>{if(0==(1&m.$flags$)){const t=_e(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this),s&&s.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(16&i.$flags$)})}}),e.is=i.$tagName$,ue(e,i)},me=e=>{const t=new URL(e,m.$resourcesUrl$);return t.origin!==d.location.origin?t.href:t.pathname},ge=e=>m.$resourcesUrl$=e,ye=new WeakMap,_e=e=>ye.get(e),ve=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return _(e,i,t.$listeners$),ye.set(e,i)},be=(e,t)=>t in e,we=(e,t)=>(0,console.error)(e,t),xe=new Map,Ce=[],Te=[],Se=[],Ee=(e,t)=>i=>{e.push(i),h||(h=!0,t&&4&m.$flags$?Oe(Me):m.raf(Me))},Ae=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){we(e)}e.length=0},Me=()=>{Ae(Te),Ae(Se),(h=Te.length>0)&&m.raf(Me)},Oe=e=>Promise.resolve(undefined).then(e),Re=Ee(Se,!0),Pe={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1}},41993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=41993,e.exports=t},99490:(e,t)=>{"use strict";function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},s.apply(this,arguments)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,i){return c=l()?Reflect.construct:function(e,t,i){var r=[null];r.push.apply(r,t);var s=new(Function.bind.apply(e,r));return i&&a(s,i.prototype),s},c.apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},u(e)}function h(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function p(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t}(u(Error)),m=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return n(t,e),t}(f),g=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return n(t,e),t}(f),y=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return n(t,e),t}(f),_=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t}(f),v=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return n(t,e),t}(f),b=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t}(f),w=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return n(t,e),t}(f),x="numeric",C="short",T="long",S={year:x,month:x,day:x},E={year:x,month:C,day:x},A={year:x,month:C,day:x,weekday:C},M={year:x,month:T,day:x},O={year:x,month:T,day:x,weekday:T},R={hour:x,minute:x},P={hour:x,minute:x,second:x},I={hour:x,minute:x,second:x,timeZoneName:C},L={hour:x,minute:x,second:x,timeZoneName:T},D={hour:x,minute:x,hourCycle:"h23"},N={hour:x,minute:x,second:x,hourCycle:"h23"},F={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:C},k={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:T},U={year:x,month:x,day:x,hour:x,minute:x},V={year:x,month:x,day:x,hour:x,minute:x,second:x},z={year:x,month:C,day:x,hour:x,minute:x},B={year:x,month:C,day:x,hour:x,minute:x,second:x},H={year:x,month:C,day:x,weekday:C,hour:x,minute:x},j={year:x,month:T,day:x,hour:x,minute:x,timeZoneName:C},G={year:x,month:T,day:x,hour:x,minute:x,second:x,timeZoneName:C},W={year:x,month:T,day:x,weekday:T,hour:x,minute:x,timeZoneName:T},Z={year:x,month:T,day:x,weekday:T,hour:x,minute:x,second:x,timeZoneName:T};function q(e){return void 0===e}function $(e){return"number"==typeof e}function Y(e){return"number"==typeof e&&e%1==0}function X(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function J(e,t,i){if(0!==e.length)return e.reduce((function(e,r){var s=[t(r),r];return e&&i(e[0],s[0])===e[0]?e:s}),null)[1]}function K(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e,t,i){return Y(e)&&e>=t&&e<=i}function ee(e,t){return void 0===t&&(t=2),e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function te(e){return q(e)||null===e||""===e?void 0:parseInt(e,10)}function ie(e){return q(e)||null===e||""===e?void 0:parseFloat(e)}function re(e){if(!q(e)&&null!==e&&""!==e){var t=1e3*parseFloat("0."+e);return Math.floor(t)}}function se(e,t,i){void 0===i&&(i=!1);var r=Math.pow(10,t);return(i?Math.trunc:Math.round)(e*r)/r}function ne(e){return e%4==0&&(e%100!=0||e%400==0)}function oe(e){return ne(e)?366:365}function ae(e,t){var i,r=(i=t-1)-12*Math.floor(i/12)+1;return 2===r?ne(e+(t-r)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function le(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function ce(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,i=e-1,r=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7;return 4===t||3===r?53:52}function ue(e){return e>99?e:e>60?1900+e:2e3+e}function he(e,t,i,r){void 0===r&&(r=null);var n=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);var a=s({timeZoneName:t},o),l=new Intl.DateTimeFormat(i,a).formatToParts(n).find((function(e){return"timezonename"===e.type.toLowerCase()}));return l?l.value:null}function de(e,t){var i=parseInt(e,10);Number.isNaN(i)&&(i=0);var r=parseInt(t,10)||0;return 60*i+(i<0||Object.is(i,-0)?-r:r)}function pe(e){var t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new b("Invalid unit value "+e);return t}function fe(e,t){var i={};for(var r in e)if(K(e,r)){var s=e[r];if(null==s)continue;i[t(r)]=pe(s)}return i}function me(e,t){var i=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-";switch(t){case"short":return""+s+ee(i,2)+":"+ee(r,2);case"narrow":return""+s+i+(r>0?":"+r:"");case"techie":return""+s+ee(i,2)+ee(r,2);default:throw new RangeError("Value format "+t+" is out of range for property format")}}function ge(e){return function(e,t){return["hour","minute","second","millisecond"].reduce((function(t,i){return t[i]=e[i],t}),{})}(e)}var ye=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,_e=["January","February","March","April","May","June","July","August","September","October","November","December"],ve=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],be=["J","F","M","A","M","J","J","A","S","O","N","D"];function we(e){switch(e){case"narrow":return[].concat(be);case"short":return[].concat(ve);case"long":return[].concat(_e);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var xe=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ce=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Te=["M","T","W","T","F","S","S"];function Se(e){switch(e){case"narrow":return[].concat(Te);case"short":return[].concat(Ce);case"long":return[].concat(xe);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var Ee=["AM","PM"],Ae=["Before Christ","Anno Domini"],Me=["BC","AD"],Oe=["B","A"];function Re(e){switch(e){case"narrow":return[].concat(Oe);case"short":return[].concat(Me);case"long":return[].concat(Ae);default:return null}}function Pe(e,t){for(var i,r="",s=p(e);!(i=s()).done;){var n=i.value;n.literal?r+=n.val:r+=t(n.val)}return r}var Ie={D:S,DD:E,DDD:M,DDDD:O,t:R,tt:P,ttt:I,tttt:L,T:D,TT:N,TTT:F,TTTT:k,f:U,ff:z,fff:j,ffff:W,F:V,FF:B,FFF:G,FFFF:Z},Le=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,i){return void 0===i&&(i={}),new e(t,i)},e.parseFormat=function(e){for(var t=null,i="",r=!1,s=[],n=0;n<e.length;n++){var o=e.charAt(n);"'"===o?(i.length>0&&s.push({literal:r,val:i}),t=null,i="",r=!r):r||o===t?i+=o:(i.length>0&&s.push({literal:!1,val:i}),i=o,t=o)}return i.length>0&&s.push({literal:r,val:i}),s},e.macroTokenToFormatOpts=function(e){return Ie[e]};var t=e.prototype;return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,s({},this.opts,t)).format()},t.formatDateTime=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,s({},this.opts,t)).format()},t.formatDateTimeParts=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,s({},this.opts,t)).formatToParts()},t.resolvedOptions=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,s({},this.opts,t)).resolvedOptions()},t.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return ee(e,t);var i=s({},this.opts);return t>0&&(i.padTo=t),this.loc.numberFormatter(i).format(e)},t.formatDateTimeFromString=function(t,i){var r=this,s="en"===this.loc.listingMode(),n=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=function(e,i){return r.loc.extract(t,e,i)},a=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},l=function(e,i){return s?function(e,t){return we(t)[e.month-1]}(t,e):o(i?{month:e}:{month:e,day:"numeric"},"month")},c=function(e,i){return s?function(e,t){return Se(t)[e.weekday-1]}(t,e):o(i?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},u=function(e){return s?function(e,t){return Re(t)[e.year<0?0:1]}(t,e):o({era:e},"era")};return Pe(e.parseFormat(i),(function(i){switch(i){case"S":return r.num(t.millisecond);case"u":case"SSS":return r.num(t.millisecond,3);case"s":return r.num(t.second);case"ss":return r.num(t.second,2);case"uu":return r.num(Math.floor(t.millisecond/10),2);case"uuu":return r.num(Math.floor(t.millisecond/100));case"m":return r.num(t.minute);case"mm":return r.num(t.minute,2);case"h":return r.num(t.hour%12==0?12:t.hour%12);case"hh":return r.num(t.hour%12==0?12:t.hour%12,2);case"H":return r.num(t.hour);case"HH":return r.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:r.opts.allowZ});case"ZZ":return a({format:"short",allowZ:r.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:r.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:r.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:r.loc.locale});case"z":return t.zoneName;case"a":return s?function(e){return Ee[e.hour<12?0:1]}(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return n?o({day:"numeric"},"day"):r.num(t.day);case"dd":return n?o({day:"2-digit"},"day"):r.num(t.day,2);case"c":case"E":return r.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return n?o({month:"numeric",day:"numeric"},"month"):r.num(t.month);case"LL":return n?o({month:"2-digit",day:"numeric"},"month"):r.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return n?o({month:"numeric"},"month"):r.num(t.month);case"MM":return n?o({month:"2-digit"},"month"):r.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return n?o({year:"numeric"},"year"):r.num(t.year);case"yy":return n?o({year:"2-digit"},"year"):r.num(t.year.toString().slice(-2),2);case"yyyy":return n?o({year:"numeric"},"year"):r.num(t.year,4);case"yyyyyy":return n?o({year:"numeric"},"year"):r.num(t.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return r.num(t.weekYear.toString().slice(-2),2);case"kkkk":return r.num(t.weekYear,4);case"W":return r.num(t.weekNumber);case"WW":return r.num(t.weekNumber,2);case"o":return r.num(t.ordinal);case"ooo":return r.num(t.ordinal,3);case"q":return r.num(t.quarter);case"qq":return r.num(t.quarter,2);case"X":return r.num(Math.floor(t.ts/1e3));case"x":return r.num(t.ts);default:return function(i){var s=e.macroTokenToFormatOpts(i);return s?r.formatWithSystemDefault(t,s):i}(i)}}))},t.formatDurationFromString=function(t,i){var r,s=this,n=function(e){switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=e.parseFormat(i),a=o.reduce((function(e,t){var i=t.literal,r=t.val;return i?e:e.concat(r)}),[]),l=t.shiftTo.apply(t,a.map(n).filter((function(e){return e})));return Pe(o,(r=l,function(e){var t=n(e);return t?s.num(r.get(t),e.length):e}))},e}(),De=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),Ne=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new w},t.formatOffset=function(e,t){throw new w},t.offset=function(e){throw new w},t.equals=function(e){throw new w},r(e,[{key:"type",get:function(){throw new w}},{key:"name",get:function(){throw new w}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new w}},{key:"isValid",get:function(){throw new w}}]),e}(),Fe=null,ke=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var i=t.prototype;return i.offsetName=function(e,t){return he(e,t.format,t.locale)},i.formatOffset=function(e,t){return me(this.offset(e),t)},i.offset=function(e){return-new Date(e).getTimezoneOffset()},i.equals=function(e){return"system"===e.type},r(t,[{key:"type",get:function(){return"system"}},{key:"name",get:function(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===Fe&&(Fe=new t),Fe}}]),t}(Ne),Ue={},Ve={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},ze={},Be=function(e){function t(i){var r;return(r=e.call(this)||this).zoneName=i,r.valid=t.isValidZone(i),r}n(t,e),t.create=function(e){return ze[e]||(ze[e]=new t(e)),ze[e]},t.resetCache=function(){ze={},Ue={}},t.isValidSpecifier=function(e){return this.isValidZone(e)},t.isValidZone=function(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}};var i=t.prototype;return i.offsetName=function(e,t){return he(e,t.format,t.locale,this.name)},i.formatOffset=function(e,t){return me(this.offset(e),t)},i.offset=function(e){var t=new Date(e);if(isNaN(t))return NaN;var i,r=(i=this.name,Ue[i]||(Ue[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ue[i]),s=r.formatToParts?function(e,t){for(var i=e.formatToParts(t),r=[],s=0;s<i.length;s++){var n=i[s],o=n.type,a=n.value,l=Ve[o];"era"===o?r[l]=a:q(l)||(r[l]=parseInt(a,10))}return r}(r,t):function(e,t){var i=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i),s=r[1],n=r[2];return[r[3],s,n,r[4],r[5],r[6],r[7]]}(r,t),n=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6];"BC"===l&&(n=1-Math.abs(n));var d=+t,p=d%1e3;return(le({year:n,month:o,day:a,hour:24===c?0:c,minute:u,second:h,millisecond:0})-(d-=p>=0?p:1e3+p))/6e4},i.equals=function(e){return"iana"===e.type&&e.name===this.name},r(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(Ne),He=null,je=function(e){function t(t){var i;return(i=e.call(this)||this).fixed=t,i}n(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new t(de(i[1],i[2]))}return null};var i=t.prototype;return i.offsetName=function(){return this.name},i.formatOffset=function(e,t){return me(this.fixed,t)},i.offset=function(){return this.fixed},i.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},r(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+me(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+me(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:function(){return null===He&&(He=new t(0)),He}}]),t}(Ne),Ge=function(e){function t(t){var i;return(i=e.call(this)||this).zoneName=t,i}n(t,e);var i=t.prototype;return i.offsetName=function(){return null},i.formatOffset=function(){return""},i.offset=function(){return NaN},i.equals=function(){return!1},r(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(Ne);function We(e,t){if(q(e)||null===e)return t;if(e instanceof Ne)return e;if("string"==typeof e){var i=e.toLowerCase();return"local"===i||"system"===i?t:"utc"===i||"gmt"===i?je.utcInstance:je.parseSpecifier(i)||Be.create(e)}return $(e)?je.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Ge(e)}var Ze,qe=function(){return Date.now()},$e="system",Ye=null,Xe=null,Je=null,Ke=function(){function e(){}return e.resetCaches=function(){ht.resetCache(),Be.resetCache()},r(e,null,[{key:"now",get:function(){return qe},set:function(e){qe=e}},{key:"defaultZone",get:function(){return We($e,ke.instance)},set:function(e){$e=e}},{key:"defaultLocale",get:function(){return Ye},set:function(e){Ye=e}},{key:"defaultNumberingSystem",get:function(){return Xe},set:function(e){Xe=e}},{key:"defaultOutputCalendar",get:function(){return Je},set:function(e){Je=e}},{key:"throwOnInvalid",get:function(){return Ze},set:function(e){Ze=e}}]),e}(),Qe=["base"],et=["padTo","floor"],tt={},it={};function rt(e,t){void 0===t&&(t={});var i=JSON.stringify([e,t]),r=it[i];return r||(r=new Intl.DateTimeFormat(e,t),it[i]=r),r}var st={},nt={},ot=null;function at(e,t,i,r,s){var n=e.listingMode(i);return"error"===n?null:"en"===n?r(t):s(t)}var lt=function(){function e(e,t,i){this.padTo=i.padTo||0,this.floor=i.floor||!1,i.padTo,i.floor;var r=h(i,et);if(!t||Object.keys(r).length>0){var n=s({useGrouping:!1},i);i.padTo>0&&(n.minimumIntegerDigits=i.padTo),this.inf=function(e,t){void 0===t&&(t={});var i=JSON.stringify([e,t]),r=st[i];return r||(r=new Intl.NumberFormat(e,t),st[i]=r),r}(e,n)}}return e.prototype.format=function(e){if(this.inf){var t=this.floor?Math.floor(e):e;return this.inf.format(t)}return ee(this.floor?Math.floor(e):se(e,3),this.padTo)},e}(),ct=function(){function e(e,t,i){var r;if(this.opts=i,e.zone.isUniversal){var n=e.offset/60*-1,o=n>=0?"Etc/GMT+"+n:"Etc/GMT"+n;0!==e.offset&&Be.create(o).valid?(r=o,this.dt=e):(r="UTC",i.timeZoneName?this.dt=e:this.dt=0===e.offset?e:ar.fromMillis(e.ts+60*e.offset*1e3))}else"system"===e.zone.type?this.dt=e:(this.dt=e,r=e.zone.name);var a=s({},this.opts);r&&(a.timeZone=r),this.dtf=rt(t,a)}var t=e.prototype;return t.format=function(){return this.dtf.format(this.dt.toJSDate())},t.formatToParts=function(){return this.dtf.formatToParts(this.dt.toJSDate())},t.resolvedOptions=function(){return this.dtf.resolvedOptions()},e}(),ut=function(){function e(e,t,i){this.opts=s({style:"long"},i),!t&&X()&&(this.rtf=function(e,t){void 0===t&&(t={});var i=t;i.base;var r=h(i,Qe),s=JSON.stringify([e,r]),n=nt[s];return n||(n=new Intl.RelativeTimeFormat(e,t),nt[s]=n),n}(e,i))}var t=e.prototype;return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,i,r){void 0===i&&(i="always"),void 0===r&&(r=!1);var s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},n=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===i&&n){var o="days"===e;switch(t){case 1:return o?"tomorrow":"next "+s[e][0];case-1:return o?"yesterday":"last "+s[e][0];case 0:return o?"today":"this "+s[e][0]}}var a=Object.is(t,-0)||t<0,l=Math.abs(t),c=1===l,u=s[e],h=r?c?u[1]:u[2]||u[1]:c?s[e][0]:e;return a?l+" "+h+" ago":"in "+l+" "+h}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),ht=function(){function e(e,t,i,r){var s=function(e){var t=e.indexOf("-u-");if(-1===t)return[e];var i,r=e.substring(0,t);try{i=rt(e).resolvedOptions()}catch(e){i=rt(r).resolvedOptions()}var s=i;return[r,s.numberingSystem,s.calendar]}(e),n=s[0],o=s[1],a=s[2];this.locale=n,this.numberingSystem=t||o||null,this.outputCalendar=i||a||null,this.intl=function(e,t,i){return i||t?(e+="-u",i&&(e+="-ca-"+i),t&&(e+="-nu-"+t),e):e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)},e.create=function(t,i,r,s){void 0===s&&(s=!1);var n=t||Ke.defaultLocale;return new e(n||(s?"en-US":ot||(ot=(new Intl.DateTimeFormat).resolvedOptions().locale)),i||Ke.defaultNumberingSystem,r||Ke.defaultOutputCalendar,n)},e.resetCache=function(){ot=null,it={},st={},nt={}},e.fromObject=function(t){var i=void 0===t?{}:t,r=i.locale,s=i.numberingSystem,n=i.outputCalendar;return e.create(r,s,n)};var t=e.prototype;return t.listingMode=function(){var e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e&&t?"en":"intl"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(s({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(s({},e,{defaultToEN:!1}))},t.months=function(e,t,i){var r=this;return void 0===t&&(t=!1),void 0===i&&(i=!0),at(this,e,i,we,(function(){var i=t?{month:e,day:"numeric"}:{month:e},s=t?"format":"standalone";return r.monthsCache[s][e]||(r.monthsCache[s][e]=function(e){for(var t=[],i=1;i<=12;i++){var r=ar.utc(2016,i,1);t.push(e(r))}return t}((function(e){return r.extract(e,i,"month")}))),r.monthsCache[s][e]}))},t.weekdays=function(e,t,i){var r=this;return void 0===t&&(t=!1),void 0===i&&(i=!0),at(this,e,i,Se,(function(){var i=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=t?"format":"standalone";return r.weekdaysCache[s][e]||(r.weekdaysCache[s][e]=function(e){for(var t=[],i=1;i<=7;i++){var r=ar.utc(2016,11,13+i);t.push(e(r))}return t}((function(e){return r.extract(e,i,"weekday")}))),r.weekdaysCache[s][e]}))},t.meridiems=function(e){var t=this;return void 0===e&&(e=!0),at(this,void 0,e,(function(){return Ee}),(function(){if(!t.meridiemCache){var e={hour:"numeric",hourCycle:"h12"};t.meridiemCache=[ar.utc(2016,11,13,9),ar.utc(2016,11,13,19)].map((function(i){return t.extract(i,e,"dayperiod")}))}return t.meridiemCache}))},t.eras=function(e,t){var i=this;return void 0===t&&(t=!0),at(this,e,t,Re,(function(){var t={era:e};return i.eraCache[e]||(i.eraCache[e]=[ar.utc(-40,1,1),ar.utc(2017,1,1)].map((function(e){return i.extract(e,t,"era")}))),i.eraCache[e]}))},t.extract=function(e,t,i){var r=this.dtFormatter(e,t).formatToParts().find((function(e){return e.type.toLowerCase()===i}));return r?r.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new lt(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new ct(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new ut(this.intl,this.isEnglish(),e)},t.listFormatter=function(e){return void 0===e&&(e={}),function(e,t){void 0===t&&(t={});var i=JSON.stringify([e,t]),r=tt[i];return r||(r=new Intl.ListFormat(e,t),tt[i]=r),r}(this.intl,e)},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},r(e,[{key:"fastNumbers",get:function(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),e}();function dt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=t.reduce((function(e,t){return e+t.source}),"");return RegExp("^"+r+"$")}function pt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce((function(t,i){var r=t[0],n=t[1],o=t[2],a=i(e,o),l=a[0],c=a[1],u=a[2];return[s({},r,l),c||n,u]}),[{},null,1]).slice(0,2)}}function ft(e){if(null==e)return[null,null];for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];for(var s=0,n=i;s<n.length;s++){var o=n[s],a=o[0],l=o[1],c=a.exec(e);if(c)return l(c)}return[null,null]}function mt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e,i){var r,s={};for(r=0;r<t.length;r++)s[t[r]]=te(e[i+r]);return[s,null,i+r]}}var gt=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,yt=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,_t=RegExp(yt.source+("(?:"+gt.source+"?(?:\\[("+ye.source+")\\])?)?")),vt=RegExp("(?:T"+_t.source+")?"),bt=mt("weekYear","weekNumber","weekDay"),wt=mt("year","ordinal"),xt=RegExp(yt.source+" ?(?:"+gt.source+"|("+ye.source+"))?"),Ct=RegExp("(?: "+xt.source+")?");function Tt(e,t,i){var r=e[t];return q(r)?i:te(r)}function St(e,t){return[{hours:Tt(e,t,0),minutes:Tt(e,t+1,0),seconds:Tt(e,t+2,0),milliseconds:re(e[t+3])},null,t+4]}function Et(e,t){var i=!e[t]&&!e[t+1],r=de(e[t+1],e[t+2]);return[{},i?null:je.instance(r),t+3]}function At(e,t){return[{},e[t]?Be.create(e[t]):null,t+1]}var Mt=RegExp("^T?"+yt.source+"$"),Ot=/^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function Rt(e){var t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u="-"===t[0],h=l&&"-"===l[0],d=function(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&u)?-e:e};return[{years:d(ie(i)),months:d(ie(r)),weeks:d(ie(s)),days:d(ie(n)),hours:d(ie(o)),minutes:d(ie(a)),seconds:d(ie(l),"-0"===l),milliseconds:d(re(c),h)}]}var Pt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function It(e,t,i,r,s,n,o){var a={year:2===t.length?ue(te(t)):te(t),month:ve.indexOf(i)+1,day:te(r),hour:te(s),minute:te(n)};return o&&(a.second=te(o)),e&&(a.weekday=e.length>3?xe.indexOf(e)+1:Ce.indexOf(e)+1),a}var Lt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Dt(e){var t,i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],h=e[10],d=e[11],p=It(i,n,s,r,o,a,l);return t=c?Pt[c]:u?0:de(h,d),[p,new je(t)]}var Nt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ft=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,kt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ut(e){var t=e[1],i=e[2],r=e[3];return[It(t,e[4],r,i,e[5],e[6],e[7]),je.utcInstance]}function Vt(e){var t=e[1],i=e[2],r=e[3],s=e[4],n=e[5],o=e[6];return[It(t,e[7],i,r,s,n,o),je.utcInstance]}var zt=dt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,vt),Bt=dt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,vt),Ht=dt(/(\d{4})-?(\d{3})/,vt),jt=dt(_t),Gt=pt((function(e,t){return[{year:Tt(e,t),month:Tt(e,t+1,1),day:Tt(e,t+2,1)},null,t+3]}),St,Et,At),Wt=pt(bt,St,Et,At),Zt=pt(wt,St,Et,At),qt=pt(St,Et,At),$t=pt(St),Yt=dt(/(\d{4})-(\d\d)-(\d\d)/,Ct),Xt=dt(xt),Jt=pt(St,Et,At),Kt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Qt=s({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},Kt),ei=s({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},Kt),ti=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ii=ti.slice(0).reverse();function ri(e,t,i){void 0===i&&(i=!1);var r={values:i?t.values:s({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy};return new ni(r)}function si(e,t,i,r,s){var n=e[s][i],o=t[i]/n,a=Math.sign(o)!==Math.sign(r[s])&&0!==r[s]&&Math.abs(o)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(o):Math.trunc(o);r[s]+=a,t[i]-=a*n}var ni=function(){function e(e){var t="longterm"===e.conversionAccuracy||!1;this.values=e.values,this.loc=e.loc||ht.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=t?ei:Qt,this.isLuxonDuration=!0}e.fromMillis=function(t,i){return e.fromObject({milliseconds:t},i)},e.fromObject=function(t,i){if(void 0===i&&(i={}),null==t||"object"!=typeof t)throw new b("Duration.fromObject: argument expected to be an object, got "+(null===t?"null":typeof t));return new e({values:fe(t,e.normalizeUnit),loc:ht.fromObject(i),conversionAccuracy:i.conversionAccuracy})},e.fromDurationLike=function(t){if($(t))return e.fromMillis(t);if(e.isDuration(t))return t;if("object"==typeof t)return e.fromObject(t);throw new b("Unknown duration argument "+t+" of type "+typeof t)},e.fromISO=function(t,i){var r=function(e){return ft(e,[Ot,Rt])}(t),s=r[0];return s?e.fromObject(s,i):e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.fromISOTime=function(t,i){var r=function(e){return ft(e,[Mt,$t])}(t),s=r[0];return s?e.fromObject(s,i):e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.invalid=function(t,i){if(void 0===i&&(i=null),!t)throw new b("need to specify a reason the Duration is invalid");var r=t instanceof De?t:new De(t,i);if(Ke.throwOnInvalid)throw new y(r);return new e({invalid:r})},e.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new v(e);return t},e.isDuration=function(e){return e&&e.isLuxonDuration||!1};var t=e.prototype;return t.toFormat=function(e,t){void 0===t&&(t={});var i=s({},t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?Le.create(this.loc,i).formatDurationFromString(this,e):"Invalid Duration"},t.toHuman=function(e){var t=this;void 0===e&&(e={});var i=ti.map((function(i){var r=t.values[i];return q(r)?null:t.loc.numberFormatter(s({style:"unit",unitDisplay:"long"},e,{unit:i.slice(0,-1)})).format(r)})).filter((function(e){return e}));return this.loc.listFormatter(s({type:"conjunction",style:e.listStyle||"narrow"},e)).format(i)},t.toObject=function(){return this.isValid?s({},this.values):{}},t.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=se(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},t.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var t=this.toMillis();if(t<0||t>=864e5)return null;e=s({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e);var i=this.shiftTo("hours","minutes","seconds","milliseconds"),r="basic"===e.format?"hhmm":"hh:mm";e.suppressSeconds&&0===i.seconds&&0===i.milliseconds||(r+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===i.milliseconds||(r+=".SSS"));var n=i.toFormat(r);return e.includePrefix&&(n="T"+n),n},t.toJSON=function(){return this.toISO()},t.toString=function(){return this.toISO()},t.toMillis=function(){return this.as("milliseconds")},t.valueOf=function(){return this.toMillis()},t.plus=function(t){if(!this.isValid)return this;for(var i,r=e.fromDurationLike(t),s={},n=p(ti);!(i=n()).done;){var o=i.value;(K(r.values,o)||K(this.values,o))&&(s[o]=r.get(o)+this.get(o))}return ri(this,{values:s},!0)},t.minus=function(t){if(!this.isValid)return this;var i=e.fromDurationLike(t);return this.plus(i.negate())},t.mapUnits=function(e){if(!this.isValid)return this;for(var t={},i=0,r=Object.keys(this.values);i<r.length;i++){var s=r[i];t[s]=pe(e(this.values[s],s))}return ri(this,{values:t},!0)},t.get=function(t){return this[e.normalizeUnit(t)]},t.set=function(t){return this.isValid?ri(this,{values:s({},this.values,fe(t,e.normalizeUnit))}):this},t.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,r=t.numberingSystem,s=t.conversionAccuracy,n={loc:this.loc.clone({locale:i,numberingSystem:r})};return s&&(n.conversionAccuracy=s),ri(this,n)},t.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},t.normalize=function(){if(!this.isValid)return this;var e=this.toObject();return function(e,t){ii.reduce((function(i,r){return q(t[r])?i:(i&&si(e,t,i,t,r),r)}),null)}(this.matrix,e),ri(this,{values:e},!0)},t.shiftTo=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];if(!this.isValid)return this;if(0===i.length)return this;i=i.map((function(t){return e.normalizeUnit(t)}));for(var s,n,o={},a={},l=this.toObject(),c=p(ti);!(n=c()).done;){var u=n.value;if(i.indexOf(u)>=0){s=u;var h=0;for(var d in a)h+=this.matrix[d][u]*a[d],a[d]=0;$(l[u])&&(h+=l[u]);var f=Math.trunc(h);for(var m in o[u]=f,a[u]=(1e3*h-1e3*f)/1e3,l)ti.indexOf(m)>ti.indexOf(u)&&si(this.matrix,l,m,o,u)}else $(l[u])&&(a[u]=l[u])}for(var g in a)0!==a[g]&&(o[s]+=g===s?a[g]:a[g]/this.matrix[s][g]);return ri(this,{values:o},!0).normalize()},t.negate=function(){if(!this.isValid)return this;for(var e={},t=0,i=Object.keys(this.values);t<i.length;t++){var r=i[t];e[r]=0===this.values[r]?0:-this.values[r]}return ri(this,{values:e},!0)},t.equals=function(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(var t,i=p(ti);!(t=i()).done;){var r=t.value;if(s=this.values[r],n=e.values[r],!(void 0===s||0===s?void 0===n||0===n:s===n))return!1}var s,n;return!0},r(e,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}(),oi="Invalid Interval";function ai(e,t){return e&&e.isValid?t&&t.isValid?t<e?li.invalid("end before start","The end of an interval must be after its start, but you had start="+e.toISO()+" and end="+t.toISO()):null:li.invalid("missing or invalid end"):li.invalid("missing or invalid start")}var li=function(){function e(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}e.invalid=function(t,i){if(void 0===i&&(i=null),!t)throw new b("need to specify a reason the Interval is invalid");var r=t instanceof De?t:new De(t,i);if(Ke.throwOnInvalid)throw new g(r);return new e({invalid:r})},e.fromDateTimes=function(t,i){var r=lr(t),s=lr(i),n=ai(r,s);return null==n?new e({start:r,end:s}):n},e.after=function(t,i){var r=ni.fromDurationLike(i),s=lr(t);return e.fromDateTimes(s,s.plus(r))},e.before=function(t,i){var r=ni.fromDurationLike(i),s=lr(t);return e.fromDateTimes(s.minus(r),s)},e.fromISO=function(t,i){var r=(t||"").split("/",2),s=r[0],n=r[1];if(s&&n){var o,a,l,c;try{a=(o=ar.fromISO(s,i)).isValid}catch(n){a=!1}try{c=(l=ar.fromISO(n,i)).isValid}catch(n){c=!1}if(a&&c)return e.fromDateTimes(o,l);if(a){var u=ni.fromISO(n,i);if(u.isValid)return e.after(o,u)}else if(c){var h=ni.fromISO(s,i);if(h.isValid)return e.before(l,h)}}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.isInterval=function(e){return e&&e.isLuxonInterval||!1};var t=e.prototype;return t.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},t.count=function(e){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN;var t=this.start.startOf(e),i=this.end.startOf(e);return Math.floor(i.diff(t,e).get(e))+1},t.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},t.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},t.isAfter=function(e){return!!this.isValid&&this.s>e},t.isBefore=function(e){return!!this.isValid&&this.e<=e},t.contains=function(e){return!!this.isValid&&this.s<=e&&this.e>e},t.set=function(t){var i=void 0===t?{}:t,r=i.start,s=i.end;return this.isValid?e.fromDateTimes(r||this.s,s||this.e):this},t.splitAt=function(){var t=this;if(!this.isValid)return[];for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];for(var n=r.map(lr).filter((function(e){return t.contains(e)})).sort(),o=[],a=this.s,l=0;a<this.e;){var c=n[l]||this.e,u=+c>+this.e?this.e:c;o.push(e.fromDateTimes(a,u)),a=u,l+=1}return o},t.splitBy=function(t){var i=ni.fromDurationLike(t);if(!this.isValid||!i.isValid||0===i.as("milliseconds"))return[];for(var r,s=this.s,n=1,o=[];s<this.e;){var a=this.start.plus(i.mapUnits((function(e){return e*n})));r=+a>+this.e?this.e:a,o.push(e.fromDateTimes(s,r)),s=r,n+=1}return o},t.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},t.overlaps=function(e){return this.e>e.s&&this.s<e.e},t.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},t.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},t.engulfs=function(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e},t.equals=function(e){return!(!this.isValid||!e.isValid)&&this.s.equals(e.s)&&this.e.equals(e.e)},t.intersection=function(t){if(!this.isValid)return this;var i=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return i>=r?null:e.fromDateTimes(i,r)},t.union=function(t){if(!this.isValid)return this;var i=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(i,r)},e.merge=function(e){var t=e.sort((function(e,t){return e.s-t.s})).reduce((function(e,t){var i=e[0],r=e[1];return r?r.overlaps(t)||r.abutsStart(t)?[i,r.union(t)]:[i.concat([r]),t]:[i,t]}),[[],null]),i=t[0],r=t[1];return r&&i.push(r),i},e.xor=function(t){for(var i,r,s=null,n=0,o=[],a=t.map((function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]})),l=p((i=Array.prototype).concat.apply(i,a).sort((function(e,t){return e.time-t.time})));!(r=l()).done;){var c=r.value;1===(n+="s"===c.type?1:-1)?s=c.time:(s&&+s!=+c.time&&o.push(e.fromDateTimes(s,c.time)),s=null)}return e.merge(o)},t.difference=function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e.xor([this].concat(r)).map((function(e){return t.intersection(e)})).filter((function(e){return e&&!e.isEmpty()}))},t.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":oi},t.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):oi},t.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():oi},t.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):oi},t.toFormat=function(e,t){var i=(void 0===t?{}:t).separator,r=void 0===i?" – ":i;return this.isValid?""+this.s.toFormat(e)+r+this.e.toFormat(e):oi},t.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):ni.invalid(this.invalidReason)},t.mapEndpoints=function(t){return e.fromDateTimes(t(this.s),t(this.e))},r(e,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}(),ci=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=Ke.defaultZone);var t=ar.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return Be.isValidZone(e)},e.normalizeZone=function(e){return We(e,Ke.defaultZone)},e.months=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,r=i.locale,s=void 0===r?null:r,n=i.numberingSystem,o=void 0===n?null:n,a=i.locObj,l=void 0===a?null:a,c=i.outputCalendar,u=void 0===c?"gregory":c;return(l||ht.create(s,o,u)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,r=i.locale,s=void 0===r?null:r,n=i.numberingSystem,o=void 0===n?null:n,a=i.locObj,l=void 0===a?null:a,c=i.outputCalendar,u=void 0===c?"gregory":c;return(l||ht.create(s,o,u)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,r=i.locale,s=void 0===r?null:r,n=i.numberingSystem,o=void 0===n?null:n,a=i.locObj;return((void 0===a?null:a)||ht.create(s,o,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var i=void 0===t?{}:t,r=i.locale,s=void 0===r?null:r,n=i.numberingSystem,o=void 0===n?null:n,a=i.locObj;return((void 0===a?null:a)||ht.create(s,o,null)).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale,i=void 0===t?null:t;return ht.create(i).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");var i=(void 0===t?{}:t).locale,r=void 0===i?null:i;return ht.create(r,null,"gregory").eras(e)},e.features=function(){return{relative:X()}},e}();function ui(e,t){var i=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},r=i(t)-i(e);return Math.floor(ni.fromMillis(r).as("days"))}var hi={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},di={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},pi=hi.hanidec.replace(/[\[|\]]/g,"").split("");function fi(e,t){var i=e.numberingSystem;return void 0===t&&(t=""),new RegExp(""+hi[i||"latn"]+t)}function mi(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var i=e[0];return t(function(e){var t=parseInt(e,10);if(isNaN(t)){t="";for(var i=0;i<e.length;i++){var r=e.charCodeAt(i);if(-1!==e[i].search(hi.hanidec))t+=pi.indexOf(e[i]);else for(var s in di){var n=di[s],o=n[0],a=n[1];r>=o&&r<=a&&(t+=r-o)}}return parseInt(t,10)}return t}(i))}}}var gi="[ "+String.fromCharCode(160)+"]",yi=new RegExp(gi,"g");function _i(e){return e.replace(/\./g,"\\.?").replace(yi,gi)}function vi(e){return e.replace(/\./g,"").replace(yi," ").toLowerCase()}function bi(e,t){return null===e?null:{regex:RegExp(e.map(_i).join("|")),deser:function(i){var r=i[0];return e.findIndex((function(e){return vi(r)===vi(e)}))+t}}}function wi(e,t){return{regex:e,deser:function(e){return de(e[1],e[2])},groups:t}}function xi(e){return{regex:e,deser:function(e){return e[0]}}}var Ci={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}},Ti=null;function Si(e,t,i){var r=function(e,t){var i;return(i=Array.prototype).concat.apply(i,e.map((function(e){return function(e,t){if(e.literal)return e;var i=Le.macroTokenToFormatOpts(e.val);if(!i)return e;var r=Le.create(t,i).formatDateTimeParts((Ti||(Ti=ar.fromMillis(1555555555555)),Ti)).map((function(e){return function(e,t,i){var r=e.type,s=e.value;if("literal"===r)return{literal:!0,val:s};var n=i[r],o=Ci[r];return"object"==typeof o&&(o=o[n]),o?{literal:!1,val:o}:void 0}(e,0,i)}));return r.includes(void 0)?e:r}(e,t)})))}(Le.parseFormat(i),e),s=r.map((function(t){return i=t,s=fi(r=e),n=fi(r,"{2}"),o=fi(r,"{3}"),a=fi(r,"{4}"),l=fi(r,"{6}"),c=fi(r,"{1,2}"),u=fi(r,"{1,3}"),h=fi(r,"{1,6}"),d=fi(r,"{1,9}"),p=fi(r,"{2,4}"),f=fi(r,"{4,6}"),m=function(e){return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:function(e){return e[0]},literal:!0};var t},g=function(e){if(i.literal)return m(e);switch(e.val){case"G":return bi(r.eras("short",!1),0);case"GG":return bi(r.eras("long",!1),0);case"y":return mi(h);case"yy":case"kk":return mi(p,ue);case"yyyy":case"kkkk":return mi(a);case"yyyyy":return mi(f);case"yyyyyy":return mi(l);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return mi(c);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return mi(n);case"MMM":return bi(r.months("short",!0,!1),1);case"MMMM":return bi(r.months("long",!0,!1),1);case"LLL":return bi(r.months("short",!1,!1),1);case"LLLL":return bi(r.months("long",!1,!1),1);case"o":case"S":return mi(u);case"ooo":case"SSS":return mi(o);case"u":return xi(d);case"uu":return xi(c);case"uuu":case"E":case"c":return mi(s);case"a":return bi(r.meridiems(),0);case"EEE":return bi(r.weekdays("short",!1,!1),1);case"EEEE":return bi(r.weekdays("long",!1,!1),1);case"ccc":return bi(r.weekdays("short",!0,!1),1);case"cccc":return bi(r.weekdays("long",!0,!1),1);case"Z":case"ZZ":return wi(new RegExp("([+-]"+c.source+")(?::("+n.source+"))?"),2);case"ZZZ":return wi(new RegExp("([+-]"+c.source+")("+n.source+")?"),2);case"z":return xi(/[a-z_+-/]{1,256}?/i);default:return m(e)}}(i)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"},g.token=i,g;var i,r,s,n,o,a,l,c,u,h,d,p,f,m,g})),n=s.find((function(e){return e.invalidReason}));if(n)return{input:t,tokens:r,invalidReason:n.invalidReason};var o=function(e){return["^"+e.map((function(e){return e.regex})).reduce((function(e,t){return e+"("+t.source+")"}),"")+"$",e]}(s),a=o[0],l=o[1],c=RegExp(a,"i"),u=function(e,t,i){var r=e.match(t);if(r){var s={},n=1;for(var o in i)if(K(i,o)){var a=i[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(s[a.token.val[0]]=a.deser(r.slice(n,n+l))),n+=l}return[r,s]}return[r,{}]}(t,c,l),h=u[0],d=u[1],p=d?function(e){var t,i=null;return q(e.z)||(i=Be.create(e.z)),q(e.Z)||(i||(i=new je(e.Z)),t=e.Z),q(e.q)||(e.M=3*(e.q-1)+1),q(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),q(e.u)||(e.S=re(e.u)),[Object.keys(e).reduce((function(t,i){var r=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}}(i);return r&&(t[r]=e[i]),t}),{}),i,t]}(d):[null,null,void 0],f=p[0],m=p[1],g=p[2];if(K(d,"a")&&K(d,"H"))throw new _("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:c,rawMatches:h,matches:d,result:f,zone:m,specificOffset:g}}var Ei=[0,31,59,90,120,151,181,212,243,273,304,334],Ai=[0,31,60,91,121,152,182,213,244,274,305,335];function Mi(e,t){return new De("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function Oi(e,t,i){var r=new Date(Date.UTC(e,t-1,i));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);var s=r.getUTCDay();return 0===s?7:s}function Ri(e,t,i){return i+(ne(e)?Ai:Ei)[t-1]}function Pi(e,t){var i=ne(e)?Ai:Ei,r=i.findIndex((function(e){return e<t}));return{month:r+1,day:t-i[r]}}function Ii(e){var t,i=e.year,r=e.month,n=e.day,o=Ri(i,r,n),a=Oi(i,r,n),l=Math.floor((o-a+10)/7);return l<1?l=ce(t=i-1):l>ce(i)?(t=i+1,l=1):t=i,s({weekYear:t,weekNumber:l,weekday:a},ge(e))}function Li(e){var t,i=e.weekYear,r=e.weekNumber,n=e.weekday,o=Oi(i,1,4),a=oe(i),l=7*r+n-o-3;l<1?l+=oe(t=i-1):l>a?(t=i+1,l-=oe(i)):t=i;var c=Pi(t,l);return s({year:t,month:c.month,day:c.day},ge(e))}function Di(e){var t=e.year;return s({year:t,ordinal:Ri(t,e.month,e.day)},ge(e))}function Ni(e){var t=e.year,i=Pi(t,e.ordinal);return s({year:t,month:i.month,day:i.day},ge(e))}function Fi(e){var t=Y(e.year),i=Q(e.month,1,12),r=Q(e.day,1,ae(e.year,e.month));return t?i?!r&&Mi("day",e.day):Mi("month",e.month):Mi("year",e.year)}function ki(e){var t=e.hour,i=e.minute,r=e.second,s=e.millisecond,n=Q(t,0,23)||24===t&&0===i&&0===r&&0===s,o=Q(i,0,59),a=Q(r,0,59),l=Q(s,0,999);return n?o?a?!l&&Mi("millisecond",s):Mi("second",r):Mi("minute",i):Mi("hour",t)}var Ui="Invalid DateTime",Vi=864e13;function zi(e){return new De("unsupported zone",'the zone "'+e.name+'" is not supported')}function Bi(e){return null===e.weekData&&(e.weekData=Ii(e.c)),e.weekData}function Hi(e,t){var i={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ar(s({},i,t,{old:i}))}function ji(e,t,i){var r=e-60*t*1e3,s=i.offset(r);if(t===s)return[r,t];r-=60*(s-t)*1e3;var n=i.offset(r);return s===n?[r,s]:[e-60*Math.min(s,n)*1e3,Math.max(s,n)]}function Gi(e,t){var i=new Date(e+=60*t*1e3);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function Wi(e,t,i){return ji(le(e),t,i)}function Zi(e,t){var i=e.o,r=e.c.year+Math.trunc(t.years),n=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),o=s({},e.c,{year:r,month:n,day:Math.min(e.c.day,ae(r,n))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),a=ni.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),l=ji(le(o),i,e.zone),c=l[0],u=l[1];return 0!==a&&(c+=a,u=e.zone.offset(c)),{ts:c,o:u}}function qi(e,t,i,r,n,o){var a=i.setZone,l=i.zone;if(e&&0!==Object.keys(e).length){var c=t||l,u=ar.fromObject(e,s({},i,{zone:c,specificOffset:o}));return a?u:u.setZone(l)}return ar.invalid(new De("unparsable",'the input "'+n+"\" can't be parsed as "+r))}function $i(e,t,i){return void 0===i&&(i=!0),e.isValid?Le.create(ht.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Yi(e,t){var i=e.c.year>9999||e.c.year<0,r="";return i&&e.c.year>=0&&(r+="+"),r+=ee(e.c.year,i?6:4),t?(r+="-",r+=ee(e.c.month),r+="-",r+=ee(e.c.day)):(r+=ee(e.c.month),r+=ee(e.c.day)),r}function Xi(e,t,i,r,s,n){var o=ee(e.c.hour);return t?(o+=":",o+=ee(e.c.minute),0===e.c.second&&i||(o+=":")):o+=ee(e.c.minute),0===e.c.second&&i||(o+=ee(e.c.second),0===e.c.millisecond&&r||(o+=".",o+=ee(e.c.millisecond,3))),s&&(e.isOffsetFixed&&0===e.offset&&!n?o+="Z":e.o<0?(o+="-",o+=ee(Math.trunc(-e.o/60)),o+=":",o+=ee(Math.trunc(-e.o%60))):(o+="+",o+=ee(Math.trunc(e.o/60)),o+=":",o+=ee(Math.trunc(e.o%60)))),n&&(o+="["+e.zone.ianaName+"]"),o}var Ji={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ki={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Qi={ordinal:1,hour:0,minute:0,second:0,millisecond:0},er=["year","month","day","hour","minute","second","millisecond"],tr=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ir=["year","ordinal","hour","minute","second","millisecond"];function rr(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new v(e);return t}function sr(e,t){var i,r,s=We(t.zone,Ke.defaultZone),n=ht.fromObject(t),o=Ke.now();if(q(e.year))i=o;else{for(var a,l=p(er);!(a=l()).done;){var c=a.value;q(e[c])&&(e[c]=Ji[c])}var u=Fi(e)||ki(e);if(u)return ar.invalid(u);var h=Wi(e,s.offset(o),s);i=h[0],r=h[1]}return new ar({ts:i,zone:s,loc:n,o:r})}function nr(e,t,i){var r=!!q(i.round)||i.round,s=function(e,s){return e=se(e,r||i.calendary?0:2,!0),t.loc.clone(i).relFormatter(i).format(e,s)},n=function(r){return i.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r)};if(i.unit)return s(n(i.unit),i.unit);for(var o,a=p(i.units);!(o=a()).done;){var l=o.value,c=n(l);if(Math.abs(c)>=1)return s(c,l)}return s(e>t?-0:0,i.units[i.units.length-1])}function or(e){var t,i={};return e.length>0&&"object"==typeof e[e.length-1]?(i=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[i,t]}var ar=function(){function e(e){var t=e.zone||Ke.defaultZone,i=e.invalid||(Number.isNaN(e.ts)?new De("invalid input"):null)||(t.isValid?null:zi(t));this.ts=q(e.ts)?Ke.now():e.ts;var r=null,s=null;if(!i)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var n=[e.old.c,e.old.o];r=n[0],s=n[1]}else{var o=t.offset(this.ts);r=Gi(this.ts,o),r=(i=Number.isNaN(r.year)?new De("invalid input"):null)?null:r,s=i?null:o}this._zone=t,this.loc=e.loc||ht.create(),this.invalid=i,this.weekData=null,this.c=r,this.o=s,this.isLuxonDateTime=!0}e.now=function(){return new e({})},e.local=function(){var e=or(arguments),t=e[0],i=e[1],r=i[0],s=i[1],n=i[2],o=i[3],a=i[4],l=i[5],c=i[6];return sr({year:r,month:s,day:n,hour:o,minute:a,second:l,millisecond:c},t)},e.utc=function(){var e=or(arguments),t=e[0],i=e[1],r=i[0],s=i[1],n=i[2],o=i[3],a=i[4],l=i[5],c=i[6];return t.zone=je.utcInstance,sr({year:r,month:s,day:n,hour:o,minute:a,second:l,millisecond:c},t)},e.fromJSDate=function(t,i){void 0===i&&(i={});var r,s=(r=t,"[object Date]"===Object.prototype.toString.call(r)?t.valueOf():NaN);if(Number.isNaN(s))return e.invalid("invalid input");var n=We(i.zone,Ke.defaultZone);return n.isValid?new e({ts:s,zone:n,loc:ht.fromObject(i)}):e.invalid(zi(n))},e.fromMillis=function(t,i){if(void 0===i&&(i={}),$(t))return t<-Vi||t>Vi?e.invalid("Timestamp out of range"):new e({ts:t,zone:We(i.zone,Ke.defaultZone),loc:ht.fromObject(i)});throw new b("fromMillis requires a numerical input, but received a "+typeof t+" with value "+t)},e.fromSeconds=function(t,i){if(void 0===i&&(i={}),$(t))return new e({ts:1e3*t,zone:We(i.zone,Ke.defaultZone),loc:ht.fromObject(i)});throw new b("fromSeconds requires a numerical input")},e.fromObject=function(t,i){void 0===i&&(i={}),t=t||{};var r=We(i.zone,Ke.defaultZone);if(!r.isValid)return e.invalid(zi(r));var s=Ke.now(),n=q(i.specificOffset)?r.offset(s):i.specificOffset,o=fe(t,rr),a=!q(o.ordinal),l=!q(o.year),c=!q(o.month)||!q(o.day),u=l||c,h=o.weekYear||o.weekNumber,d=ht.fromObject(i);if((u||a)&&h)throw new _("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new _("Can't mix ordinal dates with month/day");var f,m,g=h||o.weekday&&!u,y=Gi(s,n);g?(f=tr,m=Ki,y=Ii(y)):a?(f=ir,m=Qi,y=Di(y)):(f=er,m=Ji);for(var v,b=!1,w=p(f);!(v=w()).done;){var x=v.value;q(o[x])?o[x]=b?m[x]:y[x]:b=!0}var C=g?function(e){var t=Y(e.weekYear),i=Q(e.weekNumber,1,ce(e.weekYear)),r=Q(e.weekday,1,7);return t?i?!r&&Mi("weekday",e.weekday):Mi("week",e.week):Mi("weekYear",e.weekYear)}(o):a?function(e){var t=Y(e.year),i=Q(e.ordinal,1,oe(e.year));return t?!i&&Mi("ordinal",e.ordinal):Mi("year",e.year)}(o):Fi(o),T=C||ki(o);if(T)return e.invalid(T);var S=Wi(g?Li(o):a?Ni(o):o,n,r),E=new e({ts:S[0],zone:r,o:S[1],loc:d});return o.weekday&&u&&t.weekday!==E.weekday?e.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+E.toISO()):E},e.fromISO=function(e,t){void 0===t&&(t={});var i=function(e){return ft(e,[zt,Gt],[Bt,Wt],[Ht,Zt],[jt,qt])}(e);return qi(i[0],i[1],t,"ISO 8601",e)},e.fromRFC2822=function(e,t){void 0===t&&(t={});var i=function(e){return ft(function(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Lt,Dt])}(e);return qi(i[0],i[1],t,"RFC 2822",e)},e.fromHTTP=function(e,t){void 0===t&&(t={});var i=function(e){return ft(e,[Nt,Ut],[Ft,Ut],[kt,Vt])}(e);return qi(i[0],i[1],t,"HTTP",t)},e.fromFormat=function(t,i,r){if(void 0===r&&(r={}),q(t)||q(i))throw new b("fromFormat requires an input string and a format");var s=r,n=s.locale,o=void 0===n?null:n,a=s.numberingSystem,l=void 0===a?null:a,c=function(e,t,i){var r=Si(e,t,i);return[r.result,r.zone,r.specificOffset,r.invalidReason]}(ht.fromOpts({locale:o,numberingSystem:l,defaultToEN:!0}),t,i),u=c[0],h=c[1],d=c[2],p=c[3];return p?e.invalid(p):qi(u,h,r,"format "+i,t,d)},e.fromString=function(t,i,r){return void 0===r&&(r={}),e.fromFormat(t,i,r)},e.fromSQL=function(e,t){void 0===t&&(t={});var i=function(e){return ft(e,[Yt,Gt],[Xt,Jt])}(e);return qi(i[0],i[1],t,"SQL",e)},e.invalid=function(t,i){if(void 0===i&&(i=null),!t)throw new b("need to specify a reason the DateTime is invalid");var r=t instanceof De?t:new De(t,i);if(Ke.throwOnInvalid)throw new m(r);return new e({invalid:r})},e.isDateTime=function(e){return e&&e.isLuxonDateTime||!1};var t=e.prototype;return t.get=function(e){return this[e]},t.resolvedLocaleOptions=function(e){void 0===e&&(e={});var t=Le.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},t.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(je.instance(e),t)},t.toLocal=function(){return this.setZone(Ke.defaultZone)},t.setZone=function(t,i){var r=void 0===i?{}:i,s=r.keepLocalTime,n=void 0!==s&&s,o=r.keepCalendarTime,a=void 0!==o&&o;if((t=We(t,Ke.defaultZone)).equals(this.zone))return this;if(t.isValid){var l=this.ts;if(n||a){var c=t.offset(this.ts);l=Wi(this.toObject(),c,t)[0]}return Hi(this,{ts:l,zone:t})}return e.invalid(zi(t))},t.reconfigure=function(e){var t=void 0===e?{}:e,i=t.locale,r=t.numberingSystem,s=t.outputCalendar;return Hi(this,{loc:this.loc.clone({locale:i,numberingSystem:r,outputCalendar:s})})},t.setLocale=function(e){return this.reconfigure({locale:e})},t.set=function(e){if(!this.isValid)return this;var t,i=fe(e,rr),r=!q(i.weekYear)||!q(i.weekNumber)||!q(i.weekday),n=!q(i.ordinal),o=!q(i.year),a=!q(i.month)||!q(i.day),l=o||a,c=i.weekYear||i.weekNumber;if((l||n)&&c)throw new _("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&n)throw new _("Can't mix ordinal dates with month/day");r?t=Li(s({},Ii(this.c),i)):q(i.ordinal)?(t=s({},this.toObject(),i),q(i.day)&&(t.day=Math.min(ae(t.year,t.month),t.day))):t=Ni(s({},Di(this.c),i));var u=Wi(t,this.o,this.zone);return Hi(this,{ts:u[0],o:u[1]})},t.plus=function(e){return this.isValid?Hi(this,Zi(this,ni.fromDurationLike(e))):this},t.minus=function(e){return this.isValid?Hi(this,Zi(this,ni.fromDurationLike(e).negate())):this},t.startOf=function(e){if(!this.isValid)return this;var t={},i=ni.normalizeUnit(e);switch(i){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}if("weeks"===i&&(t.weekday=1),"quarters"===i){var r=Math.ceil(this.month/3);t.month=3*(r-1)+1}return this.set(t)},t.endOf=function(e){var t;return this.isValid?this.plus((t={},t[e]=1,t)).startOf(e).minus(1):this},t.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?Le.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Ui},t.toLocaleString=function(e,t){return void 0===e&&(e=S),void 0===t&&(t={}),this.isValid?Le.create(this.loc.clone(t),e).formatDateTime(this):Ui},t.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?Le.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},t.toISO=function(e){var t=void 0===e?{}:e,i=t.format,r=void 0===i?"extended":i,s=t.suppressSeconds,n=void 0!==s&&s,o=t.suppressMilliseconds,a=void 0!==o&&o,l=t.includeOffset,c=void 0===l||l,u=t.extendedZone,h=void 0!==u&&u;if(!this.isValid)return null;var d="extended"===r,p=Yi(this,d);return(p+="T")+Xi(this,d,n,a,c,h)},t.toISODate=function(e){var t=(void 0===e?{}:e).format,i=void 0===t?"extended":t;return this.isValid?Yi(this,"extended"===i):null},t.toISOWeekDate=function(){return $i(this,"kkkk-'W'WW-c")},t.toISOTime=function(e){var t=void 0===e?{}:e,i=t.suppressMilliseconds,r=void 0!==i&&i,s=t.suppressSeconds,n=void 0!==s&&s,o=t.includeOffset,a=void 0===o||o,l=t.includePrefix,c=void 0!==l&&l,u=t.extendedZone,h=void 0!==u&&u,d=t.format,p=void 0===d?"extended":d;return this.isValid?(c?"T":"")+Xi(this,"extended"===p,n,r,a,h):null},t.toRFC2822=function(){return $i(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},t.toHTTP=function(){return $i(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},t.toSQLDate=function(){return this.isValid?Yi(this,!0):null},t.toSQLTime=function(e){var t=void 0===e?{}:e,i=t.includeOffset,r=void 0===i||i,s=t.includeZone,n=void 0!==s&&s,o=t.includeOffsetSpace,a="HH:mm:ss.SSS";return(n||r)&&((void 0===o||o)&&(a+=" "),n?a+="z":r&&(a+="ZZ")),$i(this,a,!0)},t.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},t.toString=function(){return this.isValid?this.toISO():Ui},t.valueOf=function(){return this.toMillis()},t.toMillis=function(){return this.isValid?this.ts:NaN},t.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},t.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN},t.toJSON=function(){return this.toISO()},t.toBSON=function(){return this.toJSDate()},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=s({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},t.diff=function(e,t,i){if(void 0===t&&(t="milliseconds"),void 0===i&&(i={}),!this.isValid||!e.isValid)return ni.invalid("created by diffing an invalid DateTime");var r,n=s({locale:this.locale,numberingSystem:this.numberingSystem},i),o=(r=t,Array.isArray(r)?r:[r]).map(ni.normalizeUnit),a=e.valueOf()>this.valueOf(),l=function(e,t,i,r){var s,n=function(e,t,i){for(var r,s,n={},o=0,a=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){var i=ui(e,t);return(i-i%7)/7}],["days",ui]];o<a.length;o++){var l=a[o],c=l[0],u=l[1];if(i.indexOf(c)>=0){var h;r=c;var d,p=u(e,t);(s=e.plus(((h={})[c]=p,h)))>t?(e=e.plus(((d={})[c]=p-1,d)),p-=1):e=s,n[c]=p}}return[e,n,s,r]}(e,t,i),o=n[0],a=n[1],l=n[2],c=n[3],u=t-o,h=i.filter((function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0}));0===h.length&&(l<t&&(l=o.plus(((s={})[c]=1,s))),l!==o&&(a[c]=(a[c]||0)+u/(l-o)));var d,p=ni.fromObject(a,r);return h.length>0?(d=ni.fromMillis(u,r)).shiftTo.apply(d,h).plus(p):p}(a?this:e,a?e:this,o,n);return a?l.negate():l},t.diffNow=function(t,i){return void 0===t&&(t="milliseconds"),void 0===i&&(i={}),this.diff(e.now(),t,i)},t.until=function(e){return this.isValid?li.fromDateTimes(this,e):this},t.hasSame=function(e,t){if(!this.isValid)return!1;var i=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0});return r.startOf(t)<=i&&i<=r.endOf(t)},t.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},t.toRelative=function(t){if(void 0===t&&(t={}),!this.isValid)return null;var i=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<i?-t.padding:t.padding:0,n=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(n=t.unit,o=void 0),nr(i,this.plus(r),s({},t,{numeric:"always",units:n,unit:o}))},t.toRelativeCalendar=function(t){return void 0===t&&(t={}),this.isValid?nr(t.base||e.fromObject({},{zone:this.zone}),this,s({},t,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},e.min=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];if(!i.every(e.isDateTime))throw new b("min requires all arguments be DateTimes");return J(i,(function(e){return e.valueOf()}),Math.min)},e.max=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];if(!i.every(e.isDateTime))throw new b("max requires all arguments be DateTimes");return J(i,(function(e){return e.valueOf()}),Math.max)},e.fromFormatExplain=function(e,t,i){void 0===i&&(i={});var r=i,s=r.locale,n=void 0===s?null:s,o=r.numberingSystem,a=void 0===o?null:o;return Si(ht.fromOpts({locale:n,numberingSystem:a,defaultToEN:!0}),e,t)},e.fromStringExplain=function(t,i,r){return void 0===r&&(r={}),e.fromFormatExplain(t,i,r)},r(e,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?Bi(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?Bi(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?Bi(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?Di(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?ci.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?ci.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?ci.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?ci.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return ne(this.year)}},{key:"daysInMonth",get:function(){return ae(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?oe(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?ce(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return S}},{key:"DATE_MED",get:function(){return E}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return A}},{key:"DATE_FULL",get:function(){return M}},{key:"DATE_HUGE",get:function(){return O}},{key:"TIME_SIMPLE",get:function(){return R}},{key:"TIME_WITH_SECONDS",get:function(){return P}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return I}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return L}},{key:"TIME_24_SIMPLE",get:function(){return D}},{key:"TIME_24_WITH_SECONDS",get:function(){return N}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return F}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return k}},{key:"DATETIME_SHORT",get:function(){return U}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return V}},{key:"DATETIME_MED",get:function(){return z}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return B}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return H}},{key:"DATETIME_FULL",get:function(){return j}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return G}},{key:"DATETIME_HUGE",get:function(){return W}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return Z}}]),e}();function lr(e){if(ar.isDateTime(e))return e;if(e&&e.valueOf&&$(e.valueOf()))return ar.fromJSDate(e);if(e&&"object"==typeof e)return ar.fromObject(e);throw new b("Unknown datetime argument: "+e+", of type "+typeof e)}t.ou=ar},88355:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>A});var r,s=i(36663),n=i(41831),o=i(58811),a=i(59801),l=i(82064),c=i(67134),u=i(68309),h=i(63592),d=i(13802),p=i(61681),f=i(78668),m=i(3466),g=i(81977),y=(i(7283),i(40266)),_=i(39835),v=i(14685),b=i(26869),w=i(53110),x=i(2725),C=i(4e4);let T=0;const S=d.Z.getLogger("esri.Basemap");let E=r=class extends((0,l.eC)(u.Z)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+T++,this.baseLayers=new n.Z,this.referenceLayers=new n.Z;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&S.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=e=>{e.parent=null};this.baseLayers.on("after-add",(e=>t(e.item))),this.referenceLayers.on("after-add",(e=>t(e.item))),this.baseLayers.on("after-remove",(e=>i(e.item))),this.referenceLayers.on("after-remove",(e=>i(e.item)))}initialize(){this.when().catch((e=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.baseLayers.removeAll();for(const t of e)t.destroy();const t=this.referenceLayers.removeAll();for(const e of t)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),this.portalItem?.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",(0,o.Z)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,i){const r=[];e?(i={...i,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const t=(0,C.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,p.pC)(t)&&r.push(t)})),this.referenceLayers.forEach((e=>{const t=(0,C.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,p.pC)(t)&&(t.isReference=!0,r.push(t))})),t.baseMapLayers=r):t.baseMapLayers=r}set referenceLayers(e){this._set("referenceLayers",(0,o.Z)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return(0,h.G)(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new r({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const t=(0,c.d9)(e);return t.url&&(0,m.oC)(t.url)&&(t.url=`https:${t.url}`),t.templateUrl&&(0,m.oC)(t.templateUrl)&&(t.templateUrl=`https:${t.templateUrl}`),t}))),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:i}=this;(0,f.k_)(e);const r=[];if(t){const i=t.context?t.context.url:null;if(r.push(this._loadLayersFromJSON(t.data,i,e)),t.data.id&&!t.data.title){const e=t.data.id;r.push((0,x.g)(e).then((e=>{e&&this.read({title:e},t.context)})))}}else i&&r.push(this._loadFromItem(i,e));await Promise.all(r)}async _loadLayersFromJSON(e,t,r){const s=this.resourceInfo&&this.resourceInfo.context,n=this.portalItem&&this.portalItem.portal||s&&s.portal||null,o=s&&"web-scene"===s.origin?"web-scene":"web-map",{populateOperationalLayers:a}=await i.e(5423).then(i.bind(i,45423)),l=[];if((0,f.k_)(r),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const i={context:{origin:o,url:t,portal:n,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},r=a(this.baseLayers,e.baseMapLayers.filter((e=>!e.isReference)),i);l.push(r);const s=a(this.referenceLayers,e.baseMapLayers.filter((e=>e.isReference)),i);l.push(s)}await(0,f.as)(l)}async _loadFromItem(e,t){const i=await e.load(t),r=await i.fetchData("json",t),s=(0,m.mN)(e.itemUrl);return this._set("resourceInfo",{data:r.baseMap,context:{origin:"web-map",portal:e.portal||b.Z.getDefault(),url:s}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:r.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||b.Z.getDefault(),url:s}),this._loadLayersFromJSON(this.resourceInfo.data,s,t)}static fromId(e){const t=x.s[e];if(t){if(t.deprecated){let t=null;"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),(0,a.x9)(S,`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return r.fromJSON(t)}return null}};(0,s._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,i,r){this._writeBaseLayers(e,t,r)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:n.Z}},writer(e,t,i,r){this._writeBaseLayers(e,t,r)}}}}}})],E.prototype,"baseLayers",null),(0,s._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],E.prototype,"id",void 0),(0,s._)([(0,g.Cb)({type:w.default})],E.prototype,"portalItem",void 0),(0,s._)([(0,g.Cb)()],E.prototype,"referenceLayers",null),(0,s._)([(0,g.Cb)({readOnly:!0})],E.prototype,"resourceInfo",void 0),(0,s._)([(0,g.Cb)({type:v.Z})],E.prototype,"spatialReference",void 0),(0,s._)([(0,g.Cb)()],E.prototype,"thumbnailUrl",void 0),(0,s._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],E.prototype,"title",void 0),(0,s._)([(0,_.c)("title")],E.prototype,"writeTitle",null),E=r=(0,s._)([(0,y.j)("esri.Basemap")],E);const A=E},30936:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r,s,n=i(86875),o=i(19431),a=i(61681),l=i(7283);function c(e){return(0,o.uZ)((0,l.vU)(e),0,255)}function u(e,t,i){return e=Number(e),isNaN(e)?i:e<t?t:e>i?i:e}class h{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,i,r=new h){return r.r=Math.round(e.r+(t.r-e.r)*i),r.g=Math.round(e.g+(t.g-e.g)*i),r.b=Math.round(e.b+(t.b-e.b)*i),r.a=e.a+(t.a-e.a)*i,r._sanitize()}static fromRgb(e,t){const i=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const e=i[2].split(/\s*,\s*/),r=i[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const i=e[0];if("%"===i.charAt(i.length-1)){const i=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(i[3]=parseFloat(e[3])),h.fromArray(i,t)}return h.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return h.fromArray((0,n.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new h){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const i=4===e.length?4:8,r=(1<<i)-1;let s=Number("0x"+e.substr(1));return isNaN(s)?null:(["b","g","r"].forEach((e=>{const n=s&r;s>>=i,t[e]=4===i?17*n:n})),t.a=1,t)}static fromArray(e,t=new h){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const i=(0,n.St)(e)?(0,n.h$)(e):null;return i&&h.fromArray(i,t)||h.fromRgb(e,t)||h.fromHex(e,t)}static fromJSON(e){return e&&new h([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?h.fromString(e,this):Array.isArray(e)?h.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof h||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),i=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${i.length<2?"0"+i:i}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=h.AlphaMode.ALWAYS){const t=c(this.r),i=c(this.g),r=c(this.b);return e===h.AlphaMode.ALWAYS||1!==this.a?[t,i,r,c(255*this.a)]:[t,i,r]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,a.pC)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,i,r){this.r=e,this.g=t,this.b=i,this.a=r}}h.prototype.declaredClass="esri.Color",r=h||(h={}),(s=r.AlphaMode||(r.AlphaMode={}))[s.ALWAYS=0]="ALWAYS",s[s.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const d=h},80085:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var r=i(36663),s=i(91957),n=i(80020),o=i(4905),a=i(41151),l=i(82064),c=i(61681),u=i(7958),h=i(81977),d=(i(7753),i(39994),i(7283),i(40266)),p=i(53736);function f(e){if(!(0,c.pC)(e))return null;const t={};for(const i in e){const r=e[i];r&&(t[i]=r.toJSON())}return 0!==Object.keys(t).length?t:null}let m=class extends((0,a.J)(l.wq)){constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,u.D)(),configurable:!0})}normalizeCtorArgs(e,t,i,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:i,popupTemplate:r}}set aggregateGeometries(e){const t=this._get("aggregateGeometries");JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,c.pC)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const i=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",i,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:f(this.aggregateGeometries),geometry:(0,c.pC)(this.geometry)?this.geometry.toJSON():null,symbol:(0,c.pC)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}notifyMeshTransformChanged(){(0,c.pC)(this.geometry)&&"mesh"===this.geometry.type&&this._notifyLayer("transform",this.geometry.transform,this.geometry.transform)}_notifyLayer(e,t,i,r){if(!this.layer||!("graphicChanged"in this.layer))return;const s={graphic:this,property:e,oldValue:t,newValue:i};"attributes"===e&&(s.attributeName=r),this.layer.graphicChanged(s)}};(0,r._)([(0,h.Cb)({value:null,json:{read:function(e){if(!e)return null;const t={};for(const i in e){const r=(0,p.im)(e[i]);r&&(t[i]=r)}return 0!==Object.keys(t).length?t:null}}})],m.prototype,"aggregateGeometries",null),(0,r._)([(0,h.Cb)({value:null})],m.prototype,"attributes",null),(0,r._)([(0,h.Cb)({value:null,types:s.qM,json:{read:p.im}})],m.prototype,"geometry",null),(0,r._)([(0,h.Cb)({type:Boolean})],m.prototype,"isAggregate",void 0),(0,r._)([(0,h.Cb)({clonable:"reference"})],m.prototype,"layer",void 0),(0,r._)([(0,h.Cb)({type:n.Z})],m.prototype,"popupTemplate",void 0),(0,r._)([(0,h.Cb)({clonable:"reference"})],m.prototype,"sourceLayer",void 0),(0,r._)([(0,h.Cb)({value:null,types:o.LB})],m.prototype,"symbol",null),(0,r._)([(0,h.Cb)({type:Boolean,value:!0})],m.prototype,"visible",null),m=(0,r._)([(0,d.j)("esri.Graphic")],m),(m||(m={})).generateUID=u.D;const g=m},80020:(e,t,i)=>{"use strict";i.d(t,{Z:()=>G});var r=i(36663),s=i(41831),n=i(82064),o=i(67134),a=i(13802),l=i(78668),c=i(81977),u=i(69236),h=i(34248),d=i(40266),p=i(39835),f=i(7283),m=i(17095),g=i(24834),y=i(17814),_=i(15902),v=i(32776),b=i(29893),w=i(21363),x=i(58106);const C={base:null,key:"type",typeMap:{attachment:g.Z,media:w.Z,text:x.Z,expression:v.Z,field:b.Z}};var T,S=i(18228),E=i(78213);i(7753),i(39994);let A=T=class extends n.wq{constructor(e){super(e),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new T({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,r._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"returnTopmostRaster",void 0),(0,r._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"showNoDataRecords",void 0),A=T=(0,r._)([(0,d.j)("esri.popup.LayerOptions")],A);const M=A;var O,R=i(79163);let P=O=class extends n.wq{constructor(e){super(e),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new O({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,o.d9)(this.orderByFields):null})}};(0,r._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"showRelatedRecords",void 0),(0,r._)([(0,c.Cb)({type:[R.Z],json:{write:!0}})],P.prototype,"orderByFields",void 0),P=O=(0,r._)([(0,d.j)("esri.popup.RelatedRecordsInfo")],P);const I=P;var L,D=i(36598),N=i(83258),F=i(97837),k=i(15600);const U=s.Z.ofType({key:"type",defaultKeyValue:"button",base:N.Z,typeMap:{button:F.Z,toggle:k.Z}}),V={base:y.Z,key:"type",typeMap:{media:w.Z,custom:_.Z,text:x.Z,attachments:g.Z,fields:b.Z,expression:v.Z}},z="esri.PopupTemplate",B=a.Z.getLogger(z),H=["attachments","fields","media","text","expression"];let j=L=class extends n.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(e){return Array.isArray(e)?e.map((e=>(0,f.N7)(V,e))):"string"==typeof e||"function"==typeof e||e instanceof HTMLElement||(0,l.y8)(e)?e:(B.error("content error","unsupported content value",{value:e}),null)}readContent(e,t){const{popupElements:i}=t;return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(t):this._readPopupInfo(t)}writeContent(e,t,i,r){"string"!=typeof e?Array.isArray(e)&&(t.popupElements=e.filter((e=>H.includes(e.type))).map((e=>e&&e.toJSON(r))),t.popupElements.forEach((e=>{"attachments"===e.type?this._writeAttachmentContent(t):"media"===e.type?this._writeMediaContent(e,t):"text"===e.type&&this._writeTextContent(e,t)}))):t.description=e}writeFieldInfos(e,t,i,r){const{content:s}=this,n=Array.isArray(s)?s:null;if(e){const i=n?n.filter((e=>"fields"===e.type)):[],s=i.length&&i.every((e=>e.fieldInfos?.length));t.fieldInfos=e.filter(Boolean).map((e=>{const t=e.toJSON(r);return s&&(t.visible=!1),t}))}if(n)for(const e of n)"fields"===e.type&&this._writeFieldsContent(e,t)}writeLayerOptions(e,t,i,r){t[i]=!e||null===e.showNoDataRecords&&null===e.returnTopmostRaster?null:e.toJSON(r)}writeTitle(e,t){t.title=e||""}clone(){const{actions:e}=this,t=e?(0,o.d9)(e.toArray()):[];return new L({actions:t,content:Array.isArray(this.content)?(0,o.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,o.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,o.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,o.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,o.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,o.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(e,t){const i=this.expressionInfos||[];await this._collectExpressionInfoFields(e,t,[...i,...this._getContentExpressionInfos(this.content,i)]),(0,m.gd)(e,t,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(e){const t=new Set;return await this.collectRequiredFields(t,e),[...t].sort()}_writeFieldsContent(e,t){if(!Array.isArray(e.fieldInfos)||!e.fieldInfos.length)return;const i=(0,o.d9)(e.fieldInfos);Array.isArray(t.fieldInfos)?i.forEach((e=>{const i=t.fieldInfos.find((t=>t.fieldName.toLowerCase()===e.fieldName.toLowerCase()));i?i.visible=!0:t.fieldInfos.push(e)})):t.fieldInfos=i}_writeAttachmentContent(e){e.showAttachments||(e.showAttachments=!0)}_writeTextContent(e,t){!t.description&&e.text&&(t.description=e.text)}_writeMediaContent(e,t){if(!Array.isArray(e.mediaInfos)||!e.mediaInfos.length)return;const i=(0,o.d9)(e.mediaInfos);Array.isArray(t.mediaInfos)?t.mediaInfos=[...t.mediaInfos,...i]:t.mediaInfos=i}_readPopupInfoElements({description:e,mediaInfos:t,popupElements:i}){const r={description:!1,mediaInfos:!1};return i.map((i=>"media"===i.type?(i.mediaInfos||!t||r.mediaInfos||(i.mediaInfos=t,r.mediaInfos=!0),w.Z.fromJSON(i)):"text"===i.type?(i.text||!e||r.description||(i.text=e,r.description=!0),x.Z.fromJSON(i)):"attachments"===i.type?g.Z.fromJSON(i):"fields"===i.type?b.Z.fromJSON(i):"expression"===i.type?v.Z.fromJSON(i):void 0)).filter(Boolean)}_readPopupInfo({description:e,mediaInfos:t,showAttachments:i}){const r=[];return e?r.push(new x.Z({text:e})):r.push(new b.Z),Array.isArray(t)&&t.length&&r.push(w.Z.fromJSON({mediaInfos:t})),i&&r.push(g.Z.fromJSON({displayType:"auto"})),r.length?r:e}_getContentElementFields(e){const t=e?.type;if("attachments"===t)return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description)];if("custom"===t)return e.outFields||[];if("fields"===t)return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...this._getFieldInfoFields(e.fieldInfos||this.fieldInfos)];if("media"===t){const t=e.mediaInfos||[];return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...t.reduce(((e,t)=>[...e,...this._getMediaInfoFields(t)]),[])]}return"text"===t?this._extractFieldNames(e.text):[]}_getMediaInfoFields(e){const{caption:t,title:i,value:r}=e,s=r||{},{fields:n=[],normalizeField:o,tooltipField:a,sourceURL:l,linkURL:c}=s,u=[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(l),...this._extractFieldNames(c),...n];return o&&u.push(o),a&&u.push(a),u}_getContentExpressionInfos(e,t){return Array.isArray(e)?e.reduce(((e,t)=>[...e,..."expression"===t.type&&t.expressionInfo?[t.expressionInfo]:[]]),t):[]}_getContentFields(e){return"string"==typeof e?this._extractFieldNames(e):Array.isArray(e)?e.reduce(((e,t)=>[...e,...this._getContentElementFields(t)]),[]):[]}async _collectExpressionInfoFields(e,t,i){i&&await Promise.all(i.map((i=>(0,m.io)(e,t,i.expression))))}_getFieldInfoFields(e){return e?e.filter((e=>void 0===e.visible||!!e.visible)).map((e=>e.fieldName)).filter((e=>!e.includes("relationships/")&&!e.includes("expression/"))):[]}_getActionsFields(e){return e?e.toArray().reduce(((e,t)=>[...e,...this._getActionFields(t)]),[]):[]}_getActionFields(e){const{className:t,title:i,type:r}=e,s="button"===r||"toggle"===r?e.image:"";return[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(s)]}_getTitleFields(e){return"string"==typeof e?this._extractFieldNames(e):[]}_extractFieldNames(e){if(!e||"string"!=typeof e)return[];const t=e.match(/{[^}]*}/g);if(!t)return[];const i=/\{(\w+):.+\}/,r=t.filter((e=>!(0===e.indexOf("{relationships/")||0===e.indexOf("{expression/")))).map((e=>e.replace(i,"{$1}")));return r?r.map((e=>e.slice(1,-1))):[]}};(0,r._)([(0,c.Cb)({type:U})],j.prototype,"actions",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"content",void 0),(0,r._)([(0,u.p)("content")],j.prototype,"castContent",null),(0,r._)([(0,h.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],j.prototype,"readContent",null),(0,r._)([(0,p.c)("content",{popupElements:{type:s.Z.ofType(C)},showAttachments:{type:Boolean},mediaInfos:{type:s.Z.ofType(D.V)},description:{type:String}})],j.prototype,"writeContent",null),(0,r._)([(0,c.Cb)({type:[S.Z],json:{write:!0}})],j.prototype,"expressionInfos",void 0),(0,r._)([(0,c.Cb)({type:[E.Z]})],j.prototype,"fieldInfos",void 0),(0,r._)([(0,p.c)("fieldInfos")],j.prototype,"writeFieldInfos",null),(0,r._)([(0,c.Cb)({type:M})],j.prototype,"layerOptions",void 0),(0,r._)([(0,p.c)("layerOptions")],j.prototype,"writeLayerOptions",null),(0,r._)([(0,c.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],j.prototype,"lastEditInfoEnabled",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"outFields",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"overwriteActions",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"returnGeometry",void 0),(0,r._)([(0,c.Cb)({json:{type:String}})],j.prototype,"title",void 0),(0,r._)([(0,p.c)("title")],j.prototype,"writeTitle",null),(0,r._)([(0,c.Cb)({type:I,json:{write:!0}})],j.prototype,"relatedRecordsInfo",void 0),j=L=(0,r._)([(0,d.j)(z)],j);const G=j},37956:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var r,s=i(36663),n=i(82064),o=i(61681),a=i(807),l=i(81977),c=(i(7753),i(39994),i(7283),i(34248)),u=i(40266),h=i(39835);let d=r=class extends n.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return p}static get empty(){return f}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,o.pC)(this.start)?this.start.getTime():this.start,i=(0,o.pC)(this.end)?this.end.getTime():this.end,r=(0,o.pC)(e.start)?e.start.getTime():e.start,s=(0,o.pC)(e.end)?e.end.getTime():e.end;return t===r&&i===s}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,o.yw)(this.start,(t=>(0,a.JE)(t,e))),i=(0,o.yw)(this.end,(t=>(0,a.Nm)((0,a.JE)(t,e),1,e)));return new r({start:t,end:i})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,o.R2)(this.start,-1/0,(e=>e.getTime())),i=(0,o.R2)(this.end,1/0,(e=>e.getTime())),s=(0,o.R2)(e.start,-1/0,(e=>e.getTime())),n=(0,o.R2)(e.end,1/0,(e=>e.getTime()));let a,l;if(s>=t&&s<=i?a=s:t>=s&&t<=n&&(a=t),i>=s&&i<=n?l=i:n>=t&&n<=i&&(l=n),!isNaN(a)&&!isNaN(l)){const e=new r;return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:s,end:n}=this;return(0,o.pC)(s)&&(i.start=(0,a.Nm)(s,e,t)),(0,o.pC)(n)&&(i.end=(0,a.Nm)(n,e,t)),i}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return p.clone();const t=(0,o.pC)(this.start)&&(0,o.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,i=(0,o.pC)(this.end)&&(0,o.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:i})}};(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,s._)([(0,c.r)("end")],d.prototype,"readEnd",null),(0,s._)([(0,h.c)("end")],d.prototype,"writeEnd",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,s._)([(0,c.r)("start")],d.prototype,"readStart",null),(0,s._)([(0,h.c)("start")],d.prototype,"writeStart",null),d=r=(0,s._)([(0,u.j)("esri.TimeExtent")],d);const p=new d,f=new d({start:void 0,end:void 0}),m=d},74589:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var r,s=i(36663),n=i(82064),o=i(807),a=i(81977),l=(i(7753),i(39994),i(7283),i(40266)),c=i(80680);let u=r=class extends n.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,o.rJ)(this.value,this.unit,"milliseconds")}clone(){return new r({value:this.value,unit:this.unit})}};(0,s._)([(0,a.Cb)({type:Number,json:{write:!0},nonNullable:!0})],u.prototype,"value",void 0),(0,s._)([(0,a.Cb)({type:c.v.apiValues,json:{type:c.v.jsonValues,read:c.v.read,write:c.v.write},nonNullable:!0})],u.prototype,"unit",void 0),u=r=(0,s._)([(0,l.j)("esri.TimeInterval")],u);const h=u},30359:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});class r{constructor(e,t){this.definition=null,this.context=null,this.definition=e,this.context=t}}},58830:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});class r{constructor(e=[]){this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){const e=[];for(let t=0;t<this.length();t++)e.push(this.get(t));return e}}},46001:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(58830),s=i(8965);class n extends r.Z{constructor(e,t,i,r,s){super(e),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=i,this._hasM=r,this._spRef=t,this._cacheId=s}get(e){if(void 0===this._lazyPath[e]){const t=this._elements[e];if(void 0===t)return;this._lazyPath[e]=new s.Z(t,this._spRef,this._hasZ,this._hasM,this._cacheId,e)}return this._lazyPath[e]}equalityTest(e){return e===this||null!==e&&e instanceof n!=0&&e.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()}}},8965:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(58830),s=i(53446);class n extends r.Z{constructor(e,t,i,r,s,n){super(e),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=t,this._hasZ=i,this._hasM=r,this._cacheId=s,this._partId=n}get(e){if(void 0===this._lazyPt[e]){const t=this._elements[e];if(void 0===t)return;const i=this._hasZ,r=this._hasM;let n=null;n=i&&!r?new s.Z(t[0],t[1],t[2],void 0,this._spRef):r&&!i?new s.Z(t[0],t[1],void 0,t[2],this._spRef):i&&r?new s.Z(t[0],t[1],t[2],t[3],this._spRef):new s.Z(t[0],t[1],this._spRef),n.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+e.toString(),this._lazyPt[e]=n}return this._lazyPt[e]}equalityTest(e){return e===this||null!==e&&e instanceof n!=0&&e.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}},68673:(e,t,i)=>{"use strict";i.d(t,{Bj:()=>r,EI:()=>f,HD:()=>u,JW:()=>l,Lz:()=>g,Qk:()=>_,SV:()=>m,Sh:()=>c,US:()=>w,dj:()=>s,hd:()=>x,hj:()=>h,q2:()=>v,tI:()=>y,tt:()=>p,yE:()=>b});var r,s,n,o=i(91772),a=i(12512);function l(e){return a.Z.fromJSON(e.toJSON())}function c(e){return e.toJSON?e.toJSON():e}function u(e){return"string"==typeof e||e instanceof String}function h(e){return"number"==typeof e}function d(e){return e instanceof Date}function p(e,t){return e===t||!(!d(e)||!d(t))&&e.getTime()===t.getTime()}function f(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109413;case"kilometers":case"kilometer":case"km":return 109414}return null}function m(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new o.Z({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function g(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9035;case"kilometers":case"kilometer":case"km":return 9036}return null}(n=r||(r={}))[n.Standardised=0]="Standardised",n[n.StandardisedNoInterval=1]="StandardisedNoInterval",n[n.SqlServer=2]="SqlServer",n[n.Oracle=3]="Oracle",n[n.Postgres=4]="Postgres",n[n.PGDB=5]="PGDB",n[n.FILEGDB=6]="FILEGDB",n[n.NotEvaluated=7]="NotEvaluated",function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(s||(s={}));const y=1e3,_={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},v={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},b={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"eesriFieldTypeXML",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"eesriFieldTypeXML"};function w(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function x(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});const i="boolean"==typeof t.cycles&&t.cycles,r=t.cmp&&(s=t.cmp,function(e){return function(t,i){const r={key:t,value:e[t]},n={key:i,value:e[i]};return s(r,n)}});var s;const n=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0===t)return;if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);let s,o;if(Array.isArray(t)){for(o="[",s=0;s<t.length;s++)s&&(o+=","),o+=e(t[s])||"null";return o+"]"}if(null===t)return"null";if(n.includes(t)){if(i)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const a=n.push(t)-1,l=Object.keys(t).sort(r&&r(t));for(o="",s=0;s<l.length;s++){const i=l[s],r=e(t[i]);r&&(o&&(o+=","),o+=JSON.stringify(i)+":"+r)}return n.splice(a,1),"{"+o+"}"}(e)}},36567:(e,t,i)=>{"use strict";i.d(t,{V:()=>u,b:()=>c});var r=i(51366),s=i(66341),n=i(70375),o=i(13802),a=i(3466);const l=o.Z.getLogger("esri.assets");function c(e,t){return(0,s.default)(u(e),t)}function u(e){if(!r.Z.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(r.Z.assetsPath,e)}},33803:(e,t,i)=>{"use strict";i.d(t,{B:()=>r,a:()=>s,b:()=>y,c:()=>g});var r,s,n,o=i(61681),a=i(23998),l=i(61296),c=i(73721),u=i(78541),h=i(43036),d=i(24603),p=i(23410),f=i(3961),m=i(15176);function g(e){const t=new f.kG,i=e.output===r.GridOnly,n=e.output===r.GridComposite,g=n||i,y=e.output===r.ColorOnly,_=e.output===r.ColorComposite,v=_||y,b=n||_;if(t.include(c.T),v&&t.fragment.uniforms.add(new h.J("backgroundColor",(e=>e.backgroundColor))),e.baseOpacityMode!==s.One&&t.fragment.uniforms.add(new d.p("baseOpacity",(e=>e.baseOpacity))),g&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.include(l.H)),i||y)return t.fragment.code.add(p.H`
    void main() {
      gl_FragColor = ${y?p.H`vec4(backgroundColor, 1.0)`:p.H`gridColor(uv)`};
    }
  `),t;const w=e.blendMode!==a.iM.Normal,x=e.baseOpacityMode===s.OnBaseLayer,C=e.baseOpacityMode===s.OnBackground||e.baseOpacityMode===s.OnBaseLayer,T=e.premultipliedSource;return t.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),t.fragment.uniforms.add(new d.p("opacity",(e=>e.opacity))),(w||x||T)&&(t.fragment.uniforms.add(new m.A("fboColor",(e=>e.fboTexture))),t.fragment.uniforms.add(new d.p("tileSize",(e=>(0,o.pC)(e.fboTexture)?e.fboTexture.descriptor.width:1)))),t.fragment.include(u.d,e),t.fragment.code.add(p.H`
    void main() {
      ${b||x||T?p.H`
      vec4 bgColor = ${_?p.H`vec4(backgroundColor, 1.0)`:n?p.H`gridColor(uv)`:p.H`texture2D(fboColor, gl_FragCoord.xy / tileSize)`};
      ${C?p.H`bgColor *= baseOpacity;`:""}`:""}
      vec4 colorLayer = texture2D(tex, uv);
      ${w?p.H`
          vec4 fboTex = ${b?p.H`bgColor;`:p.H`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${x?" * baseOpacity":""};`}
          vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
          gl_FragColor = applyBlendMode(colorLayer.rgb, colorLayer.a * opacity, Cb, fboTex.a);`:p.H`
          vec4 pmColorLayer = vec4(colorLayer.xyz, 1.0);
          float composeAlpha = colorLayer.a * opacity;
          gl_FragColor = ${T?p.H`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`:b||x?p.H`mix(bgColor, pmColorLayer, composeAlpha);`:p.H`pmColorLayer * composeAlpha;`}`}
    }
  `),t}(n=r||(r={}))[n.Composite=0]="Composite",n[n.ColorOnly=1]="ColorOnly",n[n.GridOnly=2]="GridOnly",n[n.ColorComposite=3]="ColorComposite",n[n.GridComposite=4]="GridComposite",n[n.COUNT=5]="COUNT",function(e){e[e.One=0]="One",e[e.OnBackground=1]="OnBackground",e[e.OnBaseLayer=2]="OnBaseLayer",e[e.COUNT=3]="COUNT"}(s||(s={}));const y=Object.freeze(Object.defineProperty({__proto__:null,get BlendLayersOutput(){return r},get BaseOpacityMode(){return s},build:g},Symbol.toStringTag,{value:"Module"}))},53737:(e,t,i)=>{"use strict";i.d(t,{C:()=>w,b:()=>v});var r=i(24455),s=i(39100),n=i(82082),o=i(6665),a=i(76203),l=i(93072),c=i(74001),u=i(43036),h=i(96371),d=i(62869),p=i(39820),f=i(23410),m=i(87621),g=i(3961),y=i(57663),_=i(21414);function v(e){const t=new g.kG;t.attributes.add(_.T.POSITION,"vec2"),t.include(n.D,{textureCoordinateType:n.N.Default}),t.varyings.add("worldRay","vec3"),t.varyings.add("eyeDir","vec3");const{vertex:i,fragment:s}=t;return i.uniforms.add([new m.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new m.g("inverseViewMatrix",((e,t)=>(0,r.a)(b,t.camera.viewMatrix)))]),i.code.add(f.H`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),s.uniforms.add([new u.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new c.e("radii"),new p.d("scaleHeight"),new h.K("cameraPosition"),new d.y("heightParameters"),new p.d("innerFadeDistance"),new p.d("altitudeFade"),new y.Q("depthTex"),new h.K("betaRayleigh"),new h.K("betaCombined"),new p.d("betaMie"),new p.d("hazeStrength")]),t.include(a.D),e.haze&&(s.include(o.S),s.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar)))),s.code.add(f.H`vec2 sphereIntersect(vec3 start, vec3 dir, float radius, bool planet) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = planet ? heightParameters[1] - radius * radius : heightParameters[2];
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),s.code.add(f.H`float chapmanApproximation(float X, float h, float cosZenith) {
float c = sqrt(X + h);
float cExpH = c * exp(-h);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(X - x0) - cExpH / (1.0 - c * cosZenith);
}
}`),s.code.add(f.H`float getOpticalDepth(vec3 position, vec3 dir, float h) {
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h, dot(normalize(position), dir));
}`),s.code.add(f.H`
    const int STEPS = 6;

    float getGlow(float dist, float radius, float intensity) {
      return pow(radius / max(dist, 1e-6), intensity);
    }

    vec3 getAtmosphereColour(vec3 cameraPos, vec3 rayDir, vec3 lightDir, float terrainDepth) {
      float reducedPlanetRadius = radii[0] - 20000.0;
      vec2 rayPlanetIntersect = sphereIntersect(cameraPos, rayDir, reducedPlanetRadius, true);
      vec2 rayAtmosphereIntersect = sphereIntersect(cameraPos, rayDir, radii[1], false);
      bool hitsAtmosphere = (rayAtmosphereIntersect.x <= rayAtmosphereIntersect.y) && rayAtmosphereIntersect.x > 0.0;
      bool insideAtmosphere = heightParameters[0] < radii[1];

      if (!(hitsAtmosphere || insideAtmosphere)) {
        return vec3(0);
      }

      bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;

      float start = insideAtmosphere ? 0.0 : rayAtmosphereIntersect.x;

      if (heightParameters[0] < reducedPlanetRadius) {
        // Long light rays from the night side of the planet lead to numerical instability
        // Do not render the atmosphere in such cases
        if (dot(rayDir, normalize(cameraPos)) < -0.025) {
          return vec3(0);
        }
        start = rayPlanetIntersect.y;
      }

      float end = hitsPlanet ? rayPlanetIntersect.x : rayAtmosphereIntersect.y;
      float maxEnd = end;

      ${e.haze?f.H`if (terrainDepth != -1.0) { end = terrainDepth; }`:""}

      vec3 samplePoint = cameraPos + rayDir * end;
      float multiplier = hitsPlanet ? -1.0 : 1.0;

      vec3 scattering = vec3(0);
      float scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
      float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir, scaleFract);
      float stepSize = (end - start) / float(STEPS);
      for (int i = 0; i < STEPS; i++) {
        samplePoint -= stepSize * rayDir;
        scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
        float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier, scaleFract);

        if (i > 0) {
          scattering *= ${e.haze?f.H``:" mix(2.5, 1.0, clamp((length(cameraPos) - radii[0]) / 50e3, 0.0, 1.0)) * "} exp(-(mix(betaCombined, betaRayleigh, 0.5) + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {

          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);

          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${e.haze?"":f.H`scattering += scale * exp(-(0.25 * betaCombined ) * lightDepth);`}
        }

        lastOpticalDepth = opticalDepth;

      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;

      float phaseRayleigh = 0.05968310365 * mumu;

      ${e.haze?f.H`return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;`:f.H`
            const float g = 0.8;
            const float gg = g * g;
            float phaseMie = end == maxEnd ? 0.11936620731 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg)) : 0.0;
            phaseMie += getGlow(1.0 - mu, 5e-5, 3.0) * smoothstep(0.01, 0.1, length(scattering));
            phaseMie = clamp(phaseMie, 0.0, 128.0);
            return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`}
    }

    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
      vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, radii[0], true);
      if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
        return fragColor;
      }

      float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
      vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
      float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
      if (relDist > 1.0) {
        return surfaceColor;
      }

      return mix(gl_FragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${e.haze?f.H`
          vec4 depthSample = texture2D(depthTex, vuv0).rgba;
          if (depthSample != vec4(0)) {
            vec3 cameraSpaceRay = normalize(eyeDir);
            cameraSpaceRay /= cameraSpaceRay.z;
            cameraSpaceRay *= -linearDepthFromTexture(depthTex, vuv0, nearFar);
            terrainDepth = max(0.0, length(cameraSpaceRay));
          }`:f.H`
          float depthSample = texture2D(depthTex, vuv0).r;
          if (depthSample != 1.0) {
            gl_FragColor = vec4(0);
            return;
          }`}

      ${e.haze?f.H`
            vec3 col = vec3(0);
            float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
            if(depthSample != vec4(0)){
              col = (1.0 - fadeOut) * hazeStrength * getAtmosphereColour(cameraPosition, rayDir, lightingMainDirection, terrainDepth);
            }
            float alpha = 1.0 - fadeOut;`:f.H`
            vec3 col = getAtmosphereColour(cameraPosition, rayDir, lightingMainDirection, terrainDepth);;
            float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));`}
      col = tonemapACES(col);
      gl_FragColor = delinearizeGamma(vec4(col, alpha));
      ${e.haze?"":f.H`
          if (depthSample == 1.0) {
            gl_FragColor = applyUndergroundAtmosphere(rayDir, lightingMainDirection, gl_FragColor);
          }`}
    }
  `),t}const b=(0,s.c)(),w=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},11547:(e,t,i)=>{"use strict";i.d(t,{C:()=>d,a:()=>f,b:()=>p});var r=i(34344),s=i(25853),n=i(43175),o=i(41383),a=i(39820),l=i(23410),c=i(55784),u=i(3961),h=i(57663);class d extends l.K{constructor(){super(...arguments),this.viewMatrix=(0,r.c)()}}function p(e){const t=new u.kG;return t.include(o.k,!1),t.fragment.uniforms.add(new a.d("cloudRadius")),t.fragment.uniforms.add(new a.d("halfCubeMapSize")),t.fragment.uniforms.add(new a.d("power")),t.fragment.uniforms.add(new a.d("sigmaE")),t.fragment.uniforms.add(new a.d("density")),t.fragment.uniforms.add(new a.d("cloudSize")),t.fragment.uniforms.add(new a.d("detailSize")),t.fragment.uniforms.add(new a.d("smoothness")),t.fragment.uniforms.add(new a.d("cloudHeight")),t.fragment.uniforms.add(new a.d("coverage")),t.fragment.uniforms.add(new c.j("view",(e=>e.viewMatrix))),t.fragment.uniforms.add(new h.Q("cloudShapeTexture")),t.fragment.code.add(l.H`
    const int STEPS = ${e.steps===s.p.SIXTEEN?l.H`16`:e.steps===s.p.HUNDRED?l.H`100`:l.H`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`),t.fragment.code.add(l.H`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${l.H.float(n.IQ)};
      const float dataWidth = ${l.H.float(n.IQ)};
      const float tileRows = ${l.H.float(n.jy)};
      const vec3 atlasDimensions = vec3(${l.H.float(n.I_)}, ${l.H.float(n.I_)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${l.H.float(n.kR)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture2D(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Non-power-of-two textures can't be tiled using WebGL1
      // Get fractional part of uv to tile
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = fract((${l.H.float(n.QZ)} * p) / ${l.H.float(n.IQ)} + 0.5);

      return texture2D(cloudShapeTexture, uv).a;
    }
    `),t.fragment.code.add(l.H`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`),t.fragment.code.add(l.H`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = dot(start, start) - (radius * radius);
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}
float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}`),t.fragment.code.add("\n    vec3 multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation = 1.0;\n      float contribution = 1.0;\n      float phaseAttenuation = 1.0;\n      vec3 luminance = vec3(0);\n\n      for (int i = 0; i < 4; i++) {\n        float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *= 0.2;\n        contribution *= 0.6;\n        phaseAttenuation *= 0.5;\n      }\n\n      return luminance;\n    }"),t.fragment.code.add(l.H`vec3 lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
vec3 beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`),t.fragment.code.add(l.H`vec3 mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return vec3(0);
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
vec3 color = vec3(0.0);
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
vec3 luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
color += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return color;
}`),t.fragment.code.add(l.H`void main() {
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
if (hitsPlanet) {
gl_FragColor = vec4(vec3(0), 1);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
float totalTransmittance = 1.0;
vec3 sunDirection = normalize(vec3(0, 0, 1));
vec3 col = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance).rgb;
gl_FragColor = vec4(col, totalTransmittance);
}`),t}const f=Object.freeze(Object.defineProperty({__proto__:null,CloudsDrawParameters:d,build:p},Symbol.toStringTag,{value:"Module"}))},35127:(e,t,i)=>{"use strict";i.d(t,{C:()=>b,b:()=>_});var r=i(24455),s=i(39100),n=i(77787),o=i(76203),a=i(58749),l=i(3864),c=i(95509),u=i(86589),h=i(32394),d=i(9794),p=i(43036),f=i(23410),m=i(87621),g=i(3961),y=i(21414);function _(){const e=new g.kG;e.attributes.add(y.T.POSITION,"vec2"),e.varyings.add("worldRay","vec3");const{vertex:t,fragment:i}=e;return t.uniforms.add([new m.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new m.g("inverseViewMatrix",((e,t)=>(0,r.a)(v,t.camera.viewMatrix)))]),t.code.add(f.H`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`),i.include(h.Y),i.include(d.n),e.include(n._,{pbrMode:l.f7.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(c.e),e.include(o.D),e.include(a.k,{isGround:!1}),e.include(u.j,{instancedDoublePrecision:!1,isGround:!1}),i.uniforms.add([new p.J("cameraPosition",((e,t)=>t.camera.eye))]),i.code.add(f.H`void main() {
vec4 cloudsColor = renderClouds(normalize(worldRay), cameraPosition);
gl_FragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`),e}const v=(0,s.c)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},50152:(e,t,i)=>{"use strict";i.d(t,{C:()=>b,b:()=>v});var r=i(25714),s=i(5885),n=i(4731),o=i(6502),a=i(59004),l=i(55994),c=i(73393),u=i(44391),h=i(32394),d=i(84614),p=i(93072),f=i(63371),m=i(23410),g=i(3961),y=i(70984),_=i(21414);function v(e){const t=new g.kG,i=e.output===r.H.Depth,v=e.hasMultipassTerrain&&(e.output===r.H.Color||e.output===r.H.Alpha);(0,d.S)(t,e),t.include(n.w,{hasModelTransformation:!1,linearDepth:i}),t.include(o.c,e),t.attributes.add(_.T.POSITION,"vec3"),t.varyings.add("vpos","vec3"),v&&t.varyings.add("depth","float");const{vertex:b,fragment:w}=t;return i&&(t.include(a.F,e),b.uniforms.add(new p.A("nearFar",((e,t)=>t.camera.nearFar))),t.varyings.add("linearDepth","float")),b.code.add(m.H`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${v?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${i?m.H`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:m.H`transformPosition(proj, view, vpos);`}
    }
  `),t.include(s.f5,e),v&&t.include(c.l,e),w.include(h.Y),w.uniforms.add(new f.N("eColor",(e=>e.color))),e.output===r.H.Highlight&&t.include(l.bA),w.code.add(m.H`
  void main() {
    discardBySlice(vpos);
    ${v?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${e.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${m.H.float(u.b)}) {
      discard;
    }

    ${e.output===r.H.Alpha?m.H`gl_FragColor = vec4(fColor.a);`:""}

    ${e.output===r.H.Color?m.H`gl_FragColor = highlightSlice(fColor, vpos); ${e.transparencyPassType===y.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${e.output===r.H.Highlight?m.H`outputHighlight();`:""};
    ${e.output===r.H.Depth?m.H`outputDepth(linearDepth);`:""};
  }
  `),t}const b=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},9004:(e,t,i)=>{"use strict";i.d(t,{C:()=>H,a:()=>V,b:()=>z,g:()=>B});var r=i(14260),s=i(9812),n=i(68848),o=i(22919),a=i(98135),l=i(95650),c=i(25714),u=i(5885),h=i(90511),d=i(82082),p=i(6502),f=i(78549),m=i(62295),g=i(59004),y=i(55994),_=i(6665),v=i(16220),b=i(3417),w=i(91489),x=i(24623),C=i(73393),T=i(3864),S=i(14351),E=i(45416),A=i(97582),M=i(44391),O=i(41272),R=i(94283),P=i(43036),I=i(24603),L=i(23410),D=i(67948),N=i(3961),F=i(15176),k=i(70984),U=i(21414);const V=new Map([[U.T.POSITION,0],[U.T.NORMAL,1],[U.T.NORMALCOMPRESSED,1],[U.T.COLOR,2],[U.T.UV0,3],[U.T.UVREGION,4],[U.T.COMPONENTINDEX,5]]);function z(e){const t=new N.kG;t.include(m.up,e),t.include(f.Bb,e),t.include(p.c,e),t.include(d.D,e),t.include(l.q,e),t.include(o.AD,e),t.include(O.o,e),t.include(u.P_,e),t.include(S.s,e),t.include(a.z,e);const{vertex:i,fragment:s}=t;s.uniforms.add(new D.B("view")),e.pbrMode!==T.f7.Normal&&e.pbrMode!==T.f7.Schematic||(t.include(T.jV,e),e.hasNormalTexture&&t.include(b.Q,e)),e.output===c.H.Shadow&&e.componentData===o._N.Varying?i.code.add(L.H`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):i.code.add(L.H`#define discardShadows(castShadows) {}`);const U=e.integratedMeshMode===n.OH.ColorOverlay||e.integratedMeshMode===n.OH.ColorOverlayWithWater,V=U&&e.output===c.H.Color&&e.pbrMode===T.f7.WaterOnIntegratedMesh;return U&&(t.include(x.X,e),t.include(A.WB,e),e.spherical?i.code.add(L.H`
      const float invEllipsoidRadius = ${L.H.float(1/(e.ellipsoidMode===R.U.Earth?r.sv.radius:e.ellipsoidMode===R.U.Mars?r.yr.radius:r.Z1.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):i.code.add(L.H`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),V&&(t.varyings.add("tbnTangent","vec3"),t.varyings.add("tbnBiTangent","vec3"),t.varyings.add("groundNormal","vec3")),i.code.add(L.H`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${L.H.float(M.b)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${V?e.spherical?L.H`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:L.H`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
      ${U?L.H`setOverlayVTC(projectOverlay(position));`:""}
    }
  `),e.output===c.H.Alpha&&(s.include(_.S),t.include(C.l,e),t.include(v.P,e),U&&s.uniforms.add(new F.A("ovColorTex",((e,t)=>(0,A.Tw)(e,t)))),s.code.add(L.H`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?L.H`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${U?L.H`
                vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);
                materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),e.output===c.H.Color&&(s.include(_.S),t.include(C.l,e),t.include(v.P,e),t.include(w.B,e),t.include(x.X,e),e.receiveShadows?(t.include(E.hb,e),s.code.add(L.H`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):s.code.add(L.H`float evaluateShadow() { return 0.0; }`),U&&s.uniforms.add(new F.A("ovColorTex",((e,t)=>(0,A.Tw)(e,t)))),s.code.add(L.H`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?L.H`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${U?L.H`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?(s.uniforms.add(new P.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))),s.code.add(L.H`
        ${e.pbrMode===T.f7.Normal?L.H`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),e.hasNormalTexture?s.code.add(L.H`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):s.code.add(L.H`vec3 shadingNormal = normalVertex;`),s.code.add(L.H`${e.spherical?L.H`vec3 normalGround = normalize(positionWorld());`:L.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),s.code.add(L.H`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());

        ${e.snowCover?L.H`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);

                shadingNormal = mix(shadingNormal, surfaceNormal, snow);
                ssao = mix(ssao, 0.0, snow);
                mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                emission = mix(emission, vec3(0.0), snow);`:""}

        ${U?L.H` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e.receiveShadows?s.code.add(L.H`float shadow = evaluateShadow();`):e.spherical?(s.uniforms.add(new I.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor))),s.code.add(L.H`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)):s.code.add(L.H`float shadow = 0.0;`),V&&s.uniforms.add(new F.A("ovNormalTex",((e,t)=>B(t)))),e.snowCover&&(t.extensions.add("GL_OES_standard_derivatives"),s.code.add(L.H`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)),s.code.add(L.H`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${U?L.H` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${V?L.H`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
      `)),s.code.add(L.H`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.transparencyPassType===k.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output!==c.H.Depth&&e.output!==c.H.Shadow||(t.include(g.F,e),s.code.add(L.H`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),e.output===c.H.Normal&&(t.include(w.B,e),s.code.add(L.H`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${e.normalType===h.h.Ground?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),e.output===c.H.Highlight&&(t.include(y.bA),s.code.add(L.H`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${U?L.H`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  gl_FragColor = vec4(0.0);
                  return;
                }`:""}

        outputHighlight();
      }
    `)),t}function B(e){return 0===e.overlays.length?null:e.overlays[s.fu.INNER].getValidTexture(s.NH.Water)}const H=Object.freeze(Object.defineProperty({__proto__:null,attributeLocations:V,build:z,getOverlayNormalTexture:B},Symbol.toStringTag,{value:"Module"}))},73487:(e,t,i)=>{"use strict";i.d(t,{C:()=>h,a:()=>p,b:()=>d});var r=i(27755),s=i(41383),n=i(24603),o=i(59842),a=i(23410),l=i(3961),c=i(15176),u=i(42199);class h extends a.K{constructor(){super(...arguments),this.overlayIndex=0,this.opacity=1}}function d(e){const t=new l.kG;t.include(s.k);const i=t.fragment;switch(e.function){case u.v3.Standard:i.uniforms.add(new c.A("tex",(e=>e.texture))),e.hasOpacityFactor?(i.uniforms.add(new n.p("opacity",(e=>e.opacity))),i.code.add(a.H`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):i.code.add(a.H`void main() {
gl_FragColor = texture2D(tex, uv);
}`);break;case u.v3.OverlayWithTransparency:i.uniforms.add(new c.A("tex",(e=>e.texture))),i.uniforms.add(new o._("overlayIdx",(e=>e.overlayIndex))),e.hasOpacityFactor&&i.uniforms.add(new n.p("opacity",(e=>e.opacity))),i.code.add(a.H`
        void main() {
          vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
          gl_FragColor = texture2D(tex, overlayUV) ${e.hasOpacityFactor?"* opacity":""};
        }`);break;case u.v3.TransparentToHUDVisibility:i.uniforms.add(new c.A("tex",(e=>e.texture))),i.code.add(a.H`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`);break;case u.v3.Transparency:i.uniforms.add([new c.A("colorTexture",(e=>e.colorTexture)),new c.A("alphaTexture",(e=>e.alphaTexture)),new c.A("frontFaceTexture",(e=>e.frontFaceTexture))]),i.code.add(a.H`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`);break;case u.v3.COUNT:break;default:(0,r.Bg)(e.function)}return t}const p=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},45584:(e,t,i)=>{"use strict";i.d(t,{D:()=>G,b:()=>j});var r=i(61681),s=i(39100),n=i(95650),o=i(57218),a=i(25714),l=i(5885),c=i(4731),u=i(99163),h=i(90511),d=i(91636),p=i(92835),f=i(82082),m=i(6502),g=i(78549),y=i(77700),_=i(77546),v=i(3417),b=i(30786),w=i(24623),x=i(73393),C=i(2833),T=i(89585),S=i(3864),E=i(45416),A=i(12664),M=i(44391),O=i(41272),R=i(78115),P=i(27452),I=i(84614),L=i(43036),D=i(63371),N=i(24603),F=i(23410),k=i(87621),U=i(3961),V=i(15176),z=i(70984),B=i(21414),H=i(39501);function j(e){const t=new U.kG,i=t.vertex.code,j=t.fragment.code;t.include(R.a,{name:"Default Material Shader",output:e.output});const G=(0,I.S)(t,e);return t.include(d.f),t.varyings.add("vpos","vec3"),t.include(A.k,e),t.include(u.f,e),t.include(y.L,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||((0,I.h)(t.vertex,e),t.include(h.O,e),t.include(c.w,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===h.h.Attribute&&e.offsetBackfaces&&t.include(o.w),t.include(v.Q,e),t.include(g.Bb,e),e.instancedColor&&t.attributes.add(B.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(f.D,e),t.include(n.q,e),t.include(p.R,e),t.include(m.c,e),t.vertex.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new k.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:s.I))),i.add(F.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.H.float(M.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===h.h.Attribute?F.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===h.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===a.H.Alpha&&(t.include(l.f5,e),t.include(O.z,e),t.include(x.l,e),t.fragment.uniforms.add([new N.p("opacity",(e=>e.opacity)),new N.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new V.A("tex",(e=>e.texture))),t.fragment.include(P.y),j.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?F.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(l.f5,e),t.include(w.X,e),t.include(b.K,e),t.include(O.z,e),t.include(e.instancedDoublePrecision?E.hb:E.XE,e),t.include(x.l,e),(0,I.h)(t.fragment,e),t.fragment.uniforms.add([G,new L.J("ambient",(e=>e.ambient)),new L.J("diffuse",(e=>e.diffuse)),new N.p("opacity",(e=>e.opacity)),new N.p("layerOpacity",(e=>e.layerOpacity)),new N.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new L.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",H.V),e.hasColorTexture&&t.fragment.uniforms.add(new V.A("tex",(e=>e.texture))),t.include(S.jV,e),t.include(T.T,e),t.fragment.include(P.y),t.include(C.k,e),j.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===h.h.ScreenDerivative?F.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:F.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?F.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?F.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:F.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?F.H`normalize(vpos + localOrigin);`:F.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?F.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.f7.Normal||e.pbrMode===S.f7.Schematic?F.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?F.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:F.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===z.Am.Color?F.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_.s,e),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}))},94721:(e,t,i)=>{"use strict";i.d(t,{E:()=>T,b:()=>x});var r=i(55709),s=i(69666),n=i(5885),o=i(73393),a=i(93072),l=i(63371),c=i(24603),u=i(23410),h=i(67948),d=i(3961),p=i(21414),f=i(62467),m=i(57057),g=i(63922),y=i(70239),_=i(37630),v=i(99e3),b=i(50297),w=i(25926);function x(e){const t=new d.kG,i=t.vertex,s=t.fragment;return e.legacy&&i.uniforms.add(new h.B("model")),e.antialiasing&&(i.code.add(u.H`#define ANTIALIASING 1`),s.code.add(u.H`#define ANTIALIASING 1`)),t.include(f.g,e),t.include(_.UR,e),t.include(v.B,e),t.include(w.H,e),t.include(b.N,e),t.include(n.f5,e),t.include(g.o,e),t.include(m.S,e),t.include(y.l,e),t.include(o.l,e),t.varyings.add("vColor","vec4"),t.varyings.add("vRadius","float"),t.varyings.add("vPosition","vec3"),t.varyings.add("vWorldPosition","vec3"),t.varyings.add("vViewPos","vec3"),t.varyings.add("vLineLengthPixels","float"),t.varyings.add("vSizeFalloffFactor","float"),i.uniforms.add(new a.A("pixelToNDC",((e,t)=>(0,r.a)(C,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))),i.uniforms.add(new l.N("viewport",((e,t)=>t.camera.fullViewport))),i.uniforms.add(new c.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.attributes.add(p.T.POSITION0,"vec3"),t.attributes.add(p.T.POSITION1,"vec3"),t.attributes.add(p.T.VARIANTOFFSET,"float"),t.attributes.add(p.T.VARIANTSTROKE,"float"),t.attributes.add(p.T.VARIANTEXTENSION,"float"),i.code.add(u.H`const float opaqueCutoff = 1.0 / 255.0;
void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
vec2 sideness = unpackedAttributes.sideness;
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;
vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
vViewPos = viewPos;
vec4 projPosV0 = projFromViewPosition(viewPosV0);
vec4 projPosV1 = projFromViewPosition(viewPosV1);
vec4 projPos = projFromViewPosition(viewPos);
vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
vec2 ndcToPixel = viewport.zw * 0.5;
vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
float lineLengthPixels = length(screenSpaceLinePixels);
float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;
float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;
float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;
vSizeFalloffFactor = falloffFactor;
float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;
#ifdef ANTIALIASING
const float aaPaddingPixels = 1.0;
float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;
#else
float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;
#endif
vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;
vec2 ndcOffset = (
screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
+ perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
);
projPos.xy += ndcOffset * projPos.w;
projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;
projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));
float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;
float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;
vPosition = vec3(
halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
pixelPositionAlongLine,
pixelPositionAlongLine / extendedLineLengthPixels
);
vRadius = lineWidthPixels * 0.5;
vLineLengthPixels = extendedLineLengthPixels;
discardShortEdges(unpackedAttributes, lineLengthPixels);
gl_Position = projPos;
}
void main() {
ComponentData component = readComponentData();
UnpackedAttributes unpackedAttributes = unpackAttributes(component);
vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);
vColor = component.color;
if (vColor.a < opaqueCutoff) {
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return;
}
if (discardNonSilhouetteEdges(viewPosV0, worldPosV0)) {
return;
}
calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(), unpackedAttributes);
calculateStyleOutputs(unpackedAttributes);
}`),t.fragment.code.add(u.H`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float lineOffset = calculateLineOffset();
      float positionX = position.x - lineOffset;

      if (radius < 1.0) {
        // Handle this specifically for subpixel sizes:
        // 1. Compute correct coverage (note coverage is computed by
        //    0.5 - dist, so we make sure that that will lead to correct
        //    subpixel coverage
        // 2. Ignore rounded caps
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);

        float coverage = min(coverageX, coverageY);

        return vec2(0.5 - coverage, 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, vViewPos.z);":""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      float alpha = vColor.a * coverage;

      gl_FragColor = vec4(vColor.rgb, alpha);

    }
  `),t}const C=(0,s.a)(),T=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}))},28539:(e,t,i)=>{"use strict";i.d(t,{F:()=>_,b:()=>g});var r=i(24455),s=i(39100),n=i(82082),o=i(6665),a=i(76203),l=i(93072),c=i(96371),u=i(39820),h=i(23410),d=i(87621),p=i(3961),f=i(57663),m=i(21414);function g(e){const t=new p.kG;t.attributes.add(m.T.POSITION,"vec2"),t.include(n.D,{textureCoordinateType:n.N.Default}),t.varyings.add("worldRay","vec3"),t.varyings.add("eyeDir","vec3");const{vertex:i,fragment:s}=t;return i.uniforms.add([new d.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new d.g("inverseViewMatrix",((e,t)=>(0,r.a)(y,t.camera.viewMatrix)))]),i.code.add(h.H`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),s.uniforms.add(new u.d("atmosphereC")),s.uniforms.add(new c.K("cameraPosition")),s.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar))),s.uniforms.add(new f.Q("depthTex")),s.uniforms.add(new u.d("fogStrength")),s.uniforms.add(new u.d("fogAmount")),s.uniforms.add(new c.K("fogColor")),t.include(a.D),s.include(o.S),s.code.add(h.H`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),s.code.add(h.H`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`),s.code.add(h.H`
    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture2D(depthTex, vuv0).r;
      float zNorm = 2.0 * depthSample - 1.0;
      float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
      if(depthSample < 1.0 && depthSample > 0.0){
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;
        cameraSpaceRay *= linDepth;
        terrainDepth = max(0.0, length(cameraSpaceRay));
      }

      ${e.haze?h.H`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `),t}const y=(0,s.c)(),_=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},56444:(e,t,i)=>{"use strict";i.d(t,{H:()=>D,b:()=>R,c:()=>I});var r=i(61681),s=i(55709),n=i(69666),o=i(1983),a=i(57741),l=i(25714),c=i(5885),u=i(94728),h=i(21737),d=i(74319),p=i(55994),f=i(12664),m=i(44391),g=i(32394),y=i(9794),_=i(76774),v=i(93072),b=i(63371),w=i(36444),x=i(24603),C=i(40335),T=i(23410),S=i(3961),E=i(15176),A=i(70984),M=i(21414),O=i(67874);function R(e){const t=new S.kG,i=e.signedDistanceFieldEnabled;if(t.include(u.H),t.include(h.R,e),t.include(c.f5,e),e.output===l.H.Occlusion)return t.include(d.R,e),t;const{vertex:R,fragment:D}=t;t.include(_.cK),D.include(y.n),D.include(g.Y),t.include(f.k,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),R.uniforms.add([new b.N("viewport",((e,t)=>t.camera.fullViewport)),new v.A("screenOffset",((e,t)=>(0,s.a)(L,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new v.A("anchorPosition",(e=>I(e))),new b.N("materialColor",(e=>e.color)),new x.p("pixelRatio",((e,t)=>t.camera.pixelRatio))]),i&&(R.uniforms.add(new b.N("outlineColor",(e=>e.outlineColor))),D.uniforms.add([new b.N("outlineColor",(e=>P(e)?e.outlineColor:o.Z)),new x.p("outlineSize",(e=>P(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&((0,_.ww)(R),(0,_.m8)(R)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(M.T.UV0,"vec2"),t.attributes.add(M.T.COLOR,"vec4"),t.attributes.add(M.T.SIZE,"vec2"),t.attributes.add(M.T.AUXPOS2,"vec4"),R.code.add(T.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?T.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:T.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const N=T.H`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,F=e.pixelSnappingEnabled?i?T.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:T.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:T.H`posProj += quadOffset;`;e.vvColor&&R.uniforms.add([new w.b("vvColorColors",(e=>e.vvColorColors),O.x),new C.O("vvColorValues",(e=>e.vvColorValues),O.x)]),R.uniforms.add(new v.A("textureCoordinateScaleFactor",(e=>(0,r.pC)(e.texture)&&(0,r.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:n.O))),R.code.add(T.H`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${N}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${T.H.float(m.b)};
    ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${T.H.float(m.b)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${F}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?T.H`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),D.uniforms.add(new E.A("tex",(e=>e.texture)));const k=e.debugDrawLabelBorder?T.H`(isBorder > 0.0 ? 0.0 : ${T.H.float(m.F)})`:T.H.float(m.F),U=T.H`
    ${e.debugDrawLabelBorder?T.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?T.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${T.H.float(a.Ph)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${k} ||
          fillPixelColor.a + outlinePixelColor.a < ${T.H.float(m.b)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${k}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:T.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${k}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?T.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===l.H.Alpha&&D.code.add(T.H`
      void main() {
        ${U}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===l.H.Color&&D.code.add(T.H`
    void main() {
      ${U}
      ${e.transparencyPassType===A.Am.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===l.H.Highlight&&(t.include(p.bA),D.code.add(T.H`
    void main() {
      ${U}
      ${e.binaryHighlightOcclusionEnabled?T.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t}function P(e){return e.outlineColor[3]>0&&e.outlineSize>0}function I(e,t=L){return e.textureIsSignedDistanceField?(i=e.anchorPosition,n=e.distanceFieldBoundingBox,o=t,(0,r.pC)(n)?(0,s.a)(o,i[0]*(n[2]-n[0])+n[0],i[1]*(n[3]-n[1])+n[1]):(0,s.a)(o,0,0)):(0,s.c)(t,e.anchorPosition),t;var i,n,o}const L=(0,n.a)(),D=Object.freeze(Object.defineProperty({__proto__:null,build:R,calculateAnchorPosForRendering:I},Symbol.toStringTag,{value:"Module"}))},64183:(e,t,i)=>{"use strict";i.d(t,{H:()=>d,b:()=>u});var r=i(88589),s=i(1983),n=i(63371),o=i(23410),a=i(3961),l=i(15176),c=i(21414);function u(){const e=new a.kG,{vertex:t,fragment:i}=e,s=t.code,u=i.code;return e.attributes.add(c.T.POSITION,"vec2"),e.varyings.add("uv","vec2"),e.attributes.add(c.T.UV0,"vec2"),t.uniforms.add(new l.A("coverageTex",(e=>e.coverageTexture))),s.add(o.H`void main() {
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`),i.uniforms.add(new l.A("tex",(e=>e.blurColorTexture))),i.uniforms.add(new l.A("origin",(e=>e.highlightColorTexture))),i.uniforms.add(new n.N("uColor",(e=>e.color))),i.uniforms.add(new n.N("haloColor",(e=>e.haloColor))),i.uniforms.add(new n.N("opacities",(e=>(0,r.s)(h,e.haloOpacity,e.haloOpacityOccluded,e.fillOpacity,e.fillOpacityOccluded)))),i.constants.add("outlineSize","float",8.6),i.constants.add("blurSize","float",.4),u.add(o.H`void main() {
vec4 blurredHighlightValue = texture2D(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture2D(origin, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float inner = 1.0 - outlineSize / 9.0;
float outer = 1.0 - (outlineSize + blurSize) / 9.0;
float outlineFactor = smoothstep(outer, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
gl_FragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`),e}const h=(0,s.c)(),d=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},43930:(e,t,i)=>{"use strict";i.d(t,{H:()=>u,a:()=>d,b:()=>h});var r=i(69666),s=i(26482),n=i(23410),o=i(3961),a=i(37649),l=i(15176),c=i(21414);class u extends n.K{constructor(){super(...arguments),this.blurSize=(0,r.a)()}}function h(){const e=new o.kG,{vertex:t,fragment:i}=e,r=t.code,u=i.code;return e.attributes.add(c.T.POSITION,"vec2"),e.attributes.add(c.T.UV0,"vec2"),e.varyings.add("blurCoordinate","vec3"),t.uniforms.add(new l.A("coverageTex",(e=>e.coverageTexture))),i.uniforms.add(new s.q("blurSize",(e=>e.blurSize))),r.add(n.H`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
}`),i.uniforms.add(new a.R("tex",(e=>e.blurInputTexture))),u.add(n.H`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture2D(tex, uv);
if (blurCoordinate.z == 1.0) {
gl_FragColor = center;
} else {
vec4 sum = vec4(0.0);
sum += center * 0.204164;
sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture2D(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture2D(tex, uv - blurSize * 3.294215) * 0.093913;
gl_FragColor = sum;
}
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:u,build:h},Symbol.toStringTag,{value:"Module"}))},37738:(e,t,i)=>{"use strict";i.d(t,{H:()=>c,a:()=>h,b:()=>u});var r=i(69666),s=i(26482),n=i(23410),o=i(3961),a=i(37649),l=i(21414);class c extends n.K{constructor(){super(...arguments),this.invFramebufferDim=(0,r.a)()}}function u(){const e=new o.kG,{vertex:t,fragment:i}=e,r=t.code,c=i.code;return e.attributes.add(l.T.POSITION,"vec2"),r.add(n.H`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`),i.uniforms.add(new a.R("tex",(e=>e.inputTexture))),i.uniforms.add(new s.q("invFramebufferDim",(e=>e.invFramebufferDim))),c.add(n.H`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture2D(tex, coord);
float mx = floor(max(value.g, value.b));
gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:c,build:u},Symbol.toStringTag,{value:"Module"}))},1485:(e,t,i)=>{"use strict";i.d(t,{L:()=>w,b:()=>_});var r=i(61681),s=i(55709),n=i(69666),o=i(1983),a=i(5885),l=i(94728),c=i(21737),u=i(32078),h=i(76774),d=i(93072),p=i(63371),f=i(24603),m=i(23410),g=i(3961),y=i(21414);function _(e){const t=new g.kG;t.include(l.H),t.include(c.R,e),t.include(a.f5,e),t.attributes.add(y.T.UV0,"vec2");const{vertex:i,fragment:n}=t;return i.uniforms.add([new p.N("viewport",((e,t)=>t.camera.fullViewport)),new f.p("lineSize",((e,t)=>Math.ceil(e.size)*t.camera.pixelRatio)),new d.A("pixelToNDC",((e,t)=>(0,s.a)(b,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3]))),new f.p("borderSize",((e,t)=>(0,r.pC)(e.borderColor)?t.camera.pixelRatio:0)),new d.A("screenOffset",((e,t)=>(0,s.a)(b,e.screenOffset[0]*t.camera.pixelRatio,e.screenOffset[1]*t.camera.pixelRatio)))]),t.varyings.add("coverageSampling","vec4"),t.varyings.add("lineSizes","vec2"),e.hasMultipassGeometry&&t.varyings.add("depth","float"),e.hasScreenSizePerspective&&(0,h.m8)(i),i.code.add(m.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${e.occlusionTestEnabled?m.H`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${e.hasScreenSizePerspective?m.H`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:m.H`
      vec2 screenOffsetScaled = screenOffset;
        `}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly
      // used to get the correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${e.hasMultipassGeometry?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${e.depthHudEnabled?e.depthHudAlignStartEnabled?m.H`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:m.H`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.hasScreenSizePerspective?m.H`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:m.H`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;
      // Calculate a pixel offset from the edge of the pixel, s.t. we keep the line aligned
      // to pixels if it has a full pixel size. Since pixel aligned biases to the bottom-left,
      // we bias the size to the right (for odd sizes) to balance out the bias. Grow sub-pixel
      // sizes towards the left or right s.t. there is a smooth transition (e.g. from 2 to 3 px).
      float halfWholePixelSize = floor(lineSizeScaled) * 0.5;
      float halfPixelSizeInt = floor(halfWholePixelSize);

      // Sub-pixel offset if we need to grow sub-pixels to the left
      float subpixelOffset = -fract(lineSizeScaled) * float(halfWholePixelSize > 0.0);

      // Pixel offset aligning to whole pixels and adding subpixel offset if needed
      float pixelOffset = -halfPixelSizeInt + subpixelOffset;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (pixelOffset - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),n.uniforms.add([new p.N("uColor",(e=>v(e.color))),new p.N("borderColor",(e=>v(e.borderColor)))]),e.hasMultipassGeometry&&(n.include(u.S,e),n.uniforms.add(new d.A("inverseViewport",((e,t)=>t.inverseViewport)))),n.code.add(m.H`
    void main() {
      ${e.hasMultipassGeometry?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line
      // blends on top of the border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage
      // and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${e.depthHudEnabled?m.H`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:m.H`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      gl_FragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),t}function v(e){return(0,r.pC)(e)?e:o.Z}const b=(0,n.a)(),w=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},52331:(e,t,i)=>{"use strict";i.d(t,{a:()=>d});var r,s=i(36663),n=i(30936),o=i(82064),a=i(67134),l=i(81977),c=(i(7283),i(40266)),u=i(50264);let h=r=class extends o.wq{constructor(){super(...arguments),this.color=new n.Z("white")}clone(){return new r({color:(0,a.d9)(this.color)})}};(0,s._)([(0,l.Cb)(u.a)],h.prototype,"color",void 0),h=r=(0,s._)([(0,c.j)("esri.symbols.callouts.LineCallout3DBorder")],h);const d=h;Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}))},25625:(e,t,i)=>{"use strict";i.d(t,{L:()=>C,b:()=>x});var r=i(59225),s=i(25714),n=i(5885),o=i(65915),a=i(59004),l=i(73393),c=i(44391),u=i(32394),h=i(9794),d=i(84614),p=i(93072),f=i(63371),m=i(24603),g=i(23410),y=i(87621),_=i(3961),v=i(15176),b=i(70984),w=i(21414);function x(e){const t=new _.kG,i=e.hasMultipassTerrain&&(e.output===s.H.Color||e.output===s.H.Alpha);t.include(o.U,e),e.output===s.H.Depth&&t.include(a.F,e);const{vertex:x,fragment:C}=t;return C.include(h.n),(0,d.S)(t,e),t.attributes.add(w.T.POSITION,"vec3"),t.attributes.add(w.T.UV0,"vec2"),t.attributes.add(w.T.AUXPOS1,"vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vUV","vec2"),t.varyings.add("vSize","float"),t.varyings.add("linearDepth","float"),i&&t.varyings.add("depth","float"),x.code.add(g.H`#define PERPENDICULAR(v) vec2(v.y, -v.x)
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}`),x.uniforms.add([new p.A("nearFar",((e,t)=>t.camera.nearFar)),new f.N("viewport",((e,t)=>t.camera.fullViewport))]),x.code.add(g.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),x.code.add(g.H`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
}`),e.draped||(x.uniforms.add(new y.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix))),x.code.add(g.H`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),x.code.add(g.H`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),x.uniforms.add(new m.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),x.code.add(g.H`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += PERPENDICULAR(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),x.uniforms.add(new m.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),x.code.add(g.H`
    void main(void) {
      float coverage = 1.0;

      // Check for special value of uv0.y which is used by the Renderer when graphics
      // are removed before the VBO is recompacted. If this is the case, then we just
      // project outside of clip space.
      if (uv0.y == 0.0) {
        // Project out of clip space
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      }
      else {
        float lineSize = getSize();
        float lineWidth = max(lineSize, 1.0) * pixelRatio;

        vec4 pos  = view * vec4(position.xyz, 1.0);
        vec4 prev = view * vec4(auxpos1.xyz, 1.0);
        clip(pos, prev);

        vec4 posScreen = projectAndScale(pos);
        vec4 prevScreen = projectAndScale(prev);

        vec2 segment = posScreen.xy - prevScreen.xy;

        // normalize vector along line segment
        float segmentLen = length(segment);
        segment = (segmentLen > 0.001) ? segment / segmentLen : vec2(0.0, 0.0);

        // displace according to position in the texture
        vec2 displacementDirU = PERPENDICULAR(segment);
        vec2 displacementDirV = segment;

        float displacementLen = ${g.H.float(r.vT/r.CM)} * lineWidth;

        vec4 displacedPosScreen = posScreen;
        displacedPosScreen.xy += uv0.x * displacementDirU * displacementLen + uv0.y * displacementDirV * displacementLen;
  `),e.draped||x.code.add(g.H`vec3 posRight = inverseProject(posScreen + vec4(displacementDirU.xy, 0.0, 0.0) * lineWidth);
vec3 posLeft = pos.xyz + (pos.xyz - posRight);
pos = toFront(displacedPosScreen, posLeft, posRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`),x.code.add(g.H`
        ${i?"depth = pos.z;":""}
        linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1] and cancel out perspective correct interpolation
        vUV = (uv0 + 1.0) / 2.0;
        vUV *= displacedPosScreen.w;

        vSize = displacementLen;

        vColor = getColor();
        vColor.a *= coverage;

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),i&&t.include(l.l,e),t.include(n.f5,e),C.uniforms.add([new f.N("intrinsicColor",(e=>e.color)),new v.A("tex",(e=>e.texture))]),C.include(u.Y),C.code.add(g.H`
  void main() {
    discardBySlice(vpos);
    ${i?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    // Offset texture coordinate s.t. we sample texel centers
    float texelSize = ${g.H.float(1/r.vT)};
    vec2 samplePos = vUV * gl_FragCoord.w + vec2(0.5, -0.5) * texelSize;

    // Evaluate sdf
    float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
    float distance = sdf * vSize;

    // Grow by a halfpixel to make sure the line is fully covered by the cross marker
    // (otherwise there will be a halo if they are different colours)
    distance -= 0.5;

    finalColor.a *= clamp(0.5 - distance, 0.0, 1.0);

    if (finalColor.a < ${g.H.float(c.b)}) {
      discard;
    }

    ${e.output===s.H.Alpha?g.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===s.H.Color?g.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===s.H.Color&&e.transparencyPassType===b.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===s.H.Highlight?g.H`gl_FragColor = vec4(1.0);`:""}
    ${e.output===s.H.Depth?g.H`outputDepth(linearDepth);`:""}
  }
  `),t}const C=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}))},14179:(e,t,i)=>{"use strict";i.d(t,{N:()=>y,b:()=>g});var r=i(25714),s=i(5885),n=i(4731),o=i(6502),a=i(55994),l=i(37009),c=i(44391),u=i(84614),h=i(63371),d=i(24603),p=i(23410),f=i(3961),m=i(21414);function g(e){const t=new f.kG;t.include(n.w),t.include(o.c,e),t.include(l.q,e),(0,u.S)(t,e);const{vertex:i,fragment:g}=t;return e.stippleEnabled&&(t.attributes.add(m.T.UV0,"vec2"),t.attributes.add(m.T.AUXPOS1,"vec3"),i.uniforms.add(new h.N("viewport",((e,t)=>t.camera.fullViewport)))),t.attributes.add(m.T.POSITION,"vec3"),t.varyings.add("vpos","vec3"),i.code.add(p.H`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(i.code.add(p.H`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped?i.uniforms.add(new d.p("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):i.code.add(p.H`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.code.add(p.H`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?i.code.add(p.H`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):i.code.add(p.H`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.code.add(p.H`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),i.code.add(p.H`}`),e.output===r.H.Highlight&&t.include(a.bA),t.include(s.f5,e),g.uniforms.add(new d.p("alphaCoverage",((e,t)=>Math.min(1,e.width*t.camera.pixelRatio)))),e.hasVertexColors||g.uniforms.add(new h.N("constantColor",(e=>e.color))),g.code.add(p.H`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${p.H.float(c.b)}) {
      discard;
    }

    ${e.output===r.H.Color?p.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===r.H.Highlight?p.H`outputHighlight();`:""}
  }
  `),t}const y=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},3720:(e,t,i)=>{"use strict";i.d(t,{N:()=>u,b:()=>c});var r=i(13696),s=i(43175),n=i(41383),o=i(74001),a=i(23410),l=i(3961);function c(e){const t=new l.kG;if(t.include(n.k,!1),t.fragment.code.add(a.H`float remap(float x, float low1, float high1, float low2, float high2) {
return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}`),t.fragment.uniforms.add(new o.e("weatherTile")),e.mode===r.u.Full){const e=2,i=8;t.fragment.code.add(a.H`
    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }

    // Safer modulo for positive and negative values
    vec3 modulo(vec3 m, float n){
      return mod(mod(m, n) + n, n);
    }

    vec3 hash(vec3 p3, float frequency){
      p3 = modulo(p3, frequency);
      p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yxz + 33.33);
      return -1.0 + 2.0 * fract((p3.xxy + p3.yxx) * p3.zyx);
    }

    // 5th order polynomial interpolation
    vec3 fade(vec3 t){
      return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
    }

    float gradientNoise(vec3 p, float frequency){
      // Cell point is in
      vec3 i = floor(p);

      // Position in the cell in [0, 1]
      vec3 f = fract(p);

      // Interpolation value for gradient mixing
      vec3 u = fade(f);

      // Trilinear interpolation of gradients at cube vertices around point
      return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0), frequency), f - vec3(0.0,0.0,0.0) ),
                            dot( hash( i + vec3(1.0,0.0,0.0), frequency), f - vec3(1.0,0.0,0.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,0.0), frequency), f - vec3(0.0,1.0,0.0) ),
                            dot( hash( i + vec3(1.0,1.0,0.0), frequency), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                  mix( mix( dot( hash( i + vec3(0.0,0.0,1.0), frequency), f - vec3(0.0,0.0,1.0) ),
                            dot( hash( i + vec3(1.0,0.0,1.0), frequency), f - vec3(1.0,0.0,1.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,1.0), frequency), f - vec3(0.0,1.0,1.0) ),
                            dot( hash( i + vec3(1.0,1.0,1.0), frequency), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
    }

    float getPerlinNoise(vec3 pos, float frequency) {
      float octaveFrequencyFactor = 2.0;
      float sum = 0.0;
      float weightSum = 0.0;
      float weight = 1.0;

      for (int oct = 0; oct < 3; oct++) {
        vec3 p = pos * frequency;
        float val = 0.5 + 0.5 * gradientNoise(p, frequency);
        sum += val * weight;
        weightSum += weight;
        weight *= 0.5;
        frequency *= octaveFrequencyFactor;
      }

      float noise = (sum / weightSum);
      noise = saturate(noise);
      return noise;
    }

    float worley(vec3 pos, float numCells) {
      vec3 p = pos * numCells;
      float d = 1.0e10;

      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          for (int z = -1; z <= 1; z++) {
            vec3 tp = floor(p) + vec3(x, y, z);
            tp = p - tp - (hash(tp, numCells) * 0.5 + 0.5);
            d = min(d, dot(tp, tp));
          }
        }
      }

      return 1.0 - clamp(d, 0.0, 1.0);
    }

    vec3 get3Dfrom2D(vec2 uv) {
      vec2 tile = floor(uv);
      float z = floor(${a.H.float(s.jy)} * tile.y + tile.x);
      return vec3(fract(uv), z);
    }

    float getTextureForPointPerlinWorley(vec3 p) {
      float perlinNoise = getPerlinNoise(p, ${a.H.float(i)});

      float worley0 = worley(p, ${a.H.float(e)} * 2.0);
      float worley1 = worley(p, ${a.H.float(e)} * 8.0);
      float worley2 = worley(p, ${a.H.float(e)} * 14.0);

      float worleyFBM = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      return remap(perlinNoise, 0.0, 1.0, worleyFBM, 1.0);
    }

    float getTextureForPointWorley(vec3 p) {
      float worley0 = worley(p, ${a.H.float(e)});
      float worley1 = worley(p, ${a.H.float(e)} * 2.0);
      float worley2 = worley(p, ${a.H.float(e)} * 4.0);
      float worley3 = worley(p, ${a.H.float(e)} * 8.0);

      float FBM0 = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      float FBM1 = worley1 * 0.625 + worley2 * 0.25 + worley3 * 0.125;
      float FBM2 = worley2 * 0.75 + worley3 * 0.25;

      return FBM0 * 0.625 + FBM1 * 0.25 + FBM2 * 0.125;
    }
  `)}return t.fragment.code.add(a.H`
    vec2 modulo(vec2 m, float n){
      return mod(mod(m, n) + n, n);
    }

    vec2 hash(vec2 p){
      // Get position of p in weather tile
      p = modulo(p, ${a.H.float(s.A)});

      // Get global coordinates of p
      p += weatherTile * ${a.H.float(s.A)};

      // Limit position to avoid numerical instability
      p = modulo(p, ${a.H.float(s.iZ)});

      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return 2.0 * fract((p3.xx + p3.yz) * p3.zy) - 1.0;
    }

    vec2 fade(vec2 t){
      return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
    }

    float gradientNoise(vec2 p){
      vec2 i = floor( p );
      vec2 f = fract( p );

      vec2 u = fade(f);

      // Bilinear interpolation of gradients at cell vertices around point
      return  mix(
                mix(dot( hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                    dot( hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix(dot( hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                    dot( hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x),
                u.y);
    }

    float worley(vec2 p){
      float d = 1.0e10;
      for (int x = -1; x <= 1; x++){
        for (int y = -1; y <= 1; y++){
                vec2 tp = floor(p) + vec2(x, y);
                tp = p - tp - (0.5 + 0.5 * hash(tp));
                d = min(d, dot(tp, tp));
            }
        }
      return 1.0 - clamp(d, 0.0, 1.0);
    }
  `),t.fragment.code.add(a.H`void main() {`),e.mode===r.u.Full&&t.fragment.code.add(a.H`
        float padWidth = 1.0;
        float paddedSize = ${a.H.float(s.I_)} + 2.0 * padWidth;
        float tileCount = ${a.H.float(s.jy)} * ${a.H.float(s.jy)};
        vec2 tile = floor((gl_FragCoord.xy - 0.5) / paddedSize);

        bool padCell = false;
        if (mod(gl_FragCoord.x, paddedSize) == 0.5 || mod(gl_FragCoord.x, paddedSize) == paddedSize - 0.5) {
          padCell = true;
        }

        if (mod(gl_FragCoord.y, paddedSize) == 0.5 || mod(gl_FragCoord.y, paddedSize) == paddedSize - 0.5) {
          padCell = true;
        }

        bool startPadX = false;
        bool startPadY = false;
        bool endPadX = false;
        bool endPadY = false;

        if (gl_FragCoord.x == tile.x * paddedSize + 0.5) {
          startPadX = true;
        }

        if (gl_FragCoord.y == tile.y * paddedSize + 0.5) {
          startPadY = true;
        }

        if (gl_FragCoord.x == (tile.x + 1.0) * paddedSize - 0.5) {
          endPadX = true;
        }

        if (gl_FragCoord.y == (tile.y + 1.0) * paddedSize - 0.5) {
          endPadY = true;
        }

        vec2 padding = vec2(2.0 * padWidth) * tile;
        vec2 uv;

        if (padCell) {
          vec2 pixel = gl_FragCoord.xy - padWidth - padding;

          if (startPadX) {
            pixel.x += ${a.H.float(s.I_)};
          }

          if (startPadY) {
            pixel.y += ${a.H.float(s.I_)};
          }

          if (endPadX) {
            pixel.x -= ${a.H.float(s.I_)};
          }

          if (endPadY) {
            pixel.y -= ${a.H.float(s.I_)};
          }

          uv = vec2(pixel.xy / ${a.H.float(s.I_)});
        } else {
          vec2 pixel = gl_FragCoord.xy - padWidth - padding;
          uv = vec2(pixel.xy / ${a.H.float(s.I_)});
        }

        vec3 p_ = get3Dfrom2D(uv);
        vec3 p = p_;
        p.z /= (${a.H.float(s.jy)} * ${a.H.float(s.jy)});

        float worleyPerlinNoise = getTextureForPointPerlinWorley(p);
        float worleyNoise = getTextureForPointWorley(p);

        gl_FragColor.r = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));

        p_ = mod(p_ + 1.0, ${a.H.float(s.jy)} * ${a.H.float(s.jy)});
        p = p_;
        p.z /= (${a.H.float(s.jy)} * ${a.H.float(s.jy)});

        worleyPerlinNoise = getTextureForPointPerlinWorley(p);
        worleyNoise = getTextureForPointWorley(p);

        gl_FragColor.g = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));
      `),t.fragment.code.add(a.H`
      vec2 mapUV = ${a.H.float(s.A)} * (gl_FragCoord.xy / ${a.H.float(s.IQ)});
      float map = abs(gradientNoise(mapUV));
      map = remap(map, 0.25 * (1.0 - worley(8.0 * mapUV)), 1.0, 0.0, 1.0);

      ${e.mode===r.u.Full?a.H`gl_FragColor.ba = vec2(0.0, map);`:a.H`gl_FragColor = vec4(map);`};
    }
  `),t}const u=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}))},68490:(e,t,i)=>{"use strict";i.d(t,{P:()=>M,b:()=>A});var r=i(95650),s=i(25714),n=i(5885),o=i(4731),a=i(28881),l=i(59004),c=i(55994),u=i(30786),h=i(24623),d=i(73393),p=i(2833),f=i(37451),m=i(45416),g=i(32394),y=i(84614),_=i(93072),v=i(43036),b=i(62869),w=i(24603),x=i(23410),C=i(87621),T=i(3961),S=i(70984),E=i(39501);function A(e){const t=new T.kG,i=(0,y.S)(t,e),{vertex:A,fragment:M}=t;return t.varyings.add("vpos","vec3"),t.include(a.W,e),e.output!==s.H.Color&&e.output!==s.H.Alpha||(t.include(o.w),t.include(m.XE,e),t.include(r.q,e),t.varyings.add("vnormal","vec3"),t.varyings.add("vcolor","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),A.code.add(x.H`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${e.output===s.H.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),t.include(d.l,e),e.output===s.H.Alpha&&(t.include(n.f5,e),M.uniforms.add(new w.p("opacity",(e=>e.opacity))),M.code.add(x.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),e.output===s.H.Color&&(t.include(n.f5,e),t.include(h.X,e),t.include(u.K,e),t.include(m.XE,e),t.include(p.k,e),(0,y.h)(M,e),M.uniforms.add([i,new v.J("ambient",(e=>e.ambient)),new v.J("diffuse",(e=>e.diffuse)),new v.J("specular",(e=>e.specular)),new w.p("opacity",(e=>e.opacity)),new w.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new v.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),M.constants.add("ambientBoostFactor","float",E.V),M.include(g.Y),M.code.add(x.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===S.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output!==s.H.Depth&&e.output!==s.H.Shadow||(t.include(o.w,{hasModelTransformation:!1,linearDepth:!0}),A.uniforms.add(new _.A("nearFar",((e,t)=>t.camera.nearFar))),t.varyings.add("depth","float"),A.code.add(x.H`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),t.include(n.f5,e),t.include(l.F,e),M.code.add(x.H`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`)),e.output===s.H.Normal&&(t.include(o.w),t.include(f.n,e),A.uniforms.add(new C.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),t.varyings.add("vnormal","vec3"),A.code.add(x.H`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),t.include(n.f5,e),M.uniforms.add(new b.y("waterColor")),M.code.add(x.H`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`)),e.output===s.H.Highlight&&(t.include(o.w),t.include(f.n,e),t.varyings.add("vnormal","vec3"),A.code.add(x.H`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),t.include(n.f5,e),t.include(c.bA),M.code.add(x.H`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),t}const M=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))},46076:(e,t,i)=>{"use strict";i.d(t,{P:()=>T,b:()=>C});var r=i(25714),s=i(5885),n=i(4731),o=i(6502),a=i(59004),l=i(55994),c=i(73393),u=i(44391),h=i(32394),d=i(84614),p=i(93072),f=i(63371),m=i(24603),g=i(23410),y=i(3961),_=i(70984),v=i(21414),b=i(9066);const w=.70710678118,x=w;function C(e){const t=new y.kG,i=e.hasMultipassTerrain&&(e.output===r.H.Color||e.output===r.H.Alpha);e.draped||t.extensions.add("GL_OES_standard_derivatives");const C=e.output===r.H.Depth,{vertex:T,fragment:S}=t;(0,d.S)(t,e),t.include(n.w,{hasModelTransformation:!1,linearDepth:C}),t.include(o.c,e),C&&(t.include(a.F,e),T.uniforms.add(new p.A("nearFar",((e,t)=>t.camera.nearFar))),t.varyings.add("linearDepth","float")),e.draped?T.uniforms.add(new m.p("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):t.attributes.add(v.T.BOUNDINGRECT,"mat3"),t.attributes.add(v.T.POSITION,"vec3"),t.attributes.add(v.T.UVMAPSPACE,"vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),i&&t.varyings.add("depth","float");const E=e.style===b.b.ForwardDiagonal||e.style===b.b.BackwardDiagonal||e.style===b.b.DiagonalCross;return E&&T.code.add(g.H`
      const mat2 rotate45 = mat2(${g.H.float(w)}, ${g.H.float(-x)},
                                 ${g.H.float(x)}, ${g.H.float(w)});
    `),e.draped||((0,d.h)(T,e),T.uniforms.add(new m.p("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),T.code.add(g.H`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),T.code.add(g.H`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),T.code.add(g.H`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${g.H.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),T.code.add(g.H`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${E?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${E?" * rotate45":""};

      ${e.draped?"":g.H`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${g.H.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),T.code.add(g.H`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${i?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${C?g.H`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:g.H`transformPosition(proj, view, vpos);`}
    }
  `),t.include(s.f5,e),S.include(h.Y),e.draped&&S.uniforms.add(new m.p("texelSize",((e,t)=>1/t.camera.pixelRatio))),e.output===r.H.Highlight&&t.include(l.bA),i&&t.include(c.l,e),e.output!==r.H.Highlight&&(S.code.add(g.H`
      const float lineWidth = ${g.H.float(e.lineWidth)};
      const float spacing = ${g.H.float(e.patternSpacing)};
      const float spacingINV = ${g.H.float(1/e.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||S.code.add(g.H`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),S.uniforms.add(new f.N("uColor",(e=>e.color))),S.code.add(g.H`
    void main() {
      discardBySlice(vpos);
      ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${e.output!==r.H.Highlight?g.H`color.a *= ${function(e){function t(t){return e.draped?g.H`coverage(vuv.${t}, texelSize)`:g.H`sample(vuv.${t})`}switch(e.style){case b.b.ForwardDiagonal:case b.b.Horizontal:return t("y");case b.b.BackwardDiagonal:case b.b.Vertical:return t("x");case b.b.DiagonalCross:case b.b.Cross:return g.H`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}(e)};`:""}

      if (color.a < ${g.H.float(u.b)}) {
        discard;
      }

      ${e.output===r.H.Alpha?g.H`gl_FragColor = vec4(color.a);`:""}

      ${e.output===r.H.Color?g.H`gl_FragColor = color; ${e.transparencyPassType===_.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${e.output===r.H.Highlight?g.H`outputHighlight();`:""}
      ${e.output===r.H.Depth?g.H`outputDepth(linearDepth);`:""};
    }
  `),t}const T=Object.freeze(Object.defineProperty({__proto__:null,build:C},Symbol.toStringTag,{value:"Module"}))},74630:(e,t,i)=>{"use strict";i.d(t,{P:()=>d,b:()=>h});var r=i(15396),s=i(96371),n=i(39820),o=i(23410),a=i(87621),l=i(67948),c=i(3961),u=i(21414);function h(e){const t=new c.kG;return t.attributes.add(u.T.POSITION,"vec3"),t.attributes.add(u.T.INSTANCEFEATUREATTRIBUTE,"float"),t.vertex.uniforms.add(new s.K("cameraPosition")),t.vertex.uniforms.add(new s.K("offset")),t.vertex.uniforms.add(new n.d("width")),t.vertex.uniforms.add(new a.g("proj",((e,t)=>t.camera.projectionMatrix))),t.vertex.uniforms.add(new l.B("view")),t.vertex.uniforms.add(new n.d("time")),t.varyings.add("vUv","vec2"),t.vertex.code.add(o.H`
    vec3 hash31(float p){
      vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }

    float hash11(float p){
      p = fract(p * 0.1031);
      p *= p + 33.33;
      p *= p + p;
      return fract(p);
    }

    //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
      return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
    }

    void main(void) {

      vUv = position.xz;

      vec3 rand = hash31(instanceFeatureAttribute);

      // Set random position for all particles
      // The hash function space is not high resolution so offset particles by an additional random value
      // This creates grids of 1000 particles which are shifted by random hundreths of the tile width
      // overlaying multiple identical but offset grids
      vec3 randomPosition = 2.0 * (rand + (0.01 + 0.01 * rand) * floor(0.001 * instanceFeatureAttribute)) - 1.0;

      // Random orientation of rain drops
      float angle = 3.1415 * hash11(instanceFeatureAttribute);

      vec3 up = vec3(0, 0, 1);

      // Gravity and wind direction
      vec3 direction = normalize(cameraPosition);

      vec3 tangent = normalize(cross(direction, up));

      // Gravity
      vec3 animatedPos = randomPosition + direction * -time;

      // Rain particles fall straight down and are randomly oriented
      // Snow particles have random sinusoid trajectories and are rotated to face the camera
      ${e.type===r.H.Rain?o.H`
            // Random rotation for particle
            vec3 rotationAxis = up;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));
            vec3 transformedPos = rotateVectorByQuaternion(vec3(0.2, 0.2, 4.0) * (position - vec3(0.5, 0.0, 0.5)), quat);

            // Rotate particle to planetary position
            rotationAxis = tangent;
            angle = 0.5 * -acos(dot(direction, up));
            quat = vec4(rotationAxis * sin(angle), cos(angle));
            transformedPos = rotateVectorByQuaternion(transformedPos, quat);

            vec4 pos = mat4(mat3(view)) * vec4(transformedPos + (mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * pos;
      `:o.H`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
    }
  `),t.fragment.uniforms.add(new n.d("opacity")),t.fragment.uniforms.add(new s.K("particleColor")),t.fragment.code.add(o.H`
    void main() {

      // Cut off corners of the triangle
      if(vUv.x < 0.0 || vUv.y < 0.0){
        discard;
      }

      float d = length(vUv - vec2(0.5));

      ${e.type===r.H.Rain?o.H`d = 0.35 * smoothstep(0.5, 0.0, d);`:o.H`d = smoothstep(0.5, 0.1, d);`}
      gl_FragColor = opacity * vec4(particleColor * d, d);
    }
  `),t}const d=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},28624:(e,t,i)=>{"use strict";i.d(t,{C:()=>T,R:()=>M,a:()=>S,b:()=>E,c:()=>A});var r=i(61681),s=i(8909),n=i(84342),o=i(23998),a=i(35434),l=i(45979),c=i(61296),u=i(52191),h=i(73721),d=i(33803),p=i(78541),f=i(32394),m=i(71278),g=i(93072),y=i(43036),_=i(24603),v=i(40335),b=i(59842),w=i(23410),x=i(3961),C=i(15176);class T extends l.J{constructor(e,t,i,r,n,o){super(e,r,n),this.colormap=t,this.symbolizer=i,this.u_colormap=o,this.backgroundColor=s.Z,this.fboTexture=null,this.baseOpacity=1}}class S extends T{}class E extends T{}function A(e){const t=new x.kG;t.include(h.T),t.include(l.G),t.include(a.i),e.tileBlendInput===u.R.GridComposite&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.include(c.H));const i=e.tileBlendInput===u.R.ColorComposite;i&&t.fragment.uniforms.add(new y.J("backgroundColor",(e=>e.backgroundColor))),e.baseOpacityMode!==d.a.One&&t.fragment.uniforms.add(new _.p("baseOpacity",(e=>e.baseOpacity)));const s=e.baseOpacityMode===d.a.OnBaseLayer,T=e.baseOpacityMode===d.a.OnBackground||e.baseOpacityMode===d.a.OnBaseLayer,S=e.blendMode!==o.iM.Normal;t.fragment.include(p.d,e);const E=e.tileBlendInput!==u.R.LayerOnly;return(S&&!E||s)&&(t.fragment.uniforms.add(new C.A("fboColor",(e=>e.fboTexture))),t.fragment.uniforms.add(new _.p("tileSize",(e=>(0,r.pC)(e.fboTexture)?e.fboTexture.descriptor.width:1)))),t.fragment.code.add(w.H`
    vec4 applyBackgroundBlend(vec4 layerColor) {
      ${E||s?w.H`
          vec4 bgColor = ${s?w.H`texture2D(fboColor, gl_FragCoord.xy / tileSize)`:i?w.H`vec4(backgroundColor, 1.0)`:w.H`gridColor(vuv)`};
          ${T?w.H`bgColor *= baseOpacity;`:""}`:""}
      ${S?w.H`
            vec3 pmColorLayer = layerColor.rgb * layerColor.a;
            vec4 fboTex = ${E?w.H`bgColor;`:w.H`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${s?" * baseOpacity":""};`}
            vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
            return applyBlendMode(pmColorLayer.rgb, layerColor.a * u_opacity, Cb, fboTex.a);`:E||s?w.H`
            float composeAlpha = layerColor.a * u_opacity;
            vec4 pmColorLayer = vec4(layerColor.rgb, 1.0);
            return mix(bgColor, pmColorLayer, composeAlpha);`:w.H`
            return layerColor * layerColor.a * u_opacity;`}
    }
  `),e.colorizerType===n.U.Stretch?function(e,t){e.fragment.uniforms.add([new b._("u_bandCount",(e=>e.symbolizer.u_bandCount)),new v.O("u_minCutOff",(e=>e.symbolizer.u_minCutOff),3),new v.O("u_maxCutOff",(e=>e.symbolizer.u_maxCutOff),3),new v.O("u_factor",(e=>e.symbolizer.u_factor),3),new _.p("u_minOutput",(e=>e.symbolizer.u_minOutput)),new _.p("u_maxOutput",(e=>e.symbolizer.u_maxOutput)),new m.U("u_useGamma",(e=>e.symbolizer.u_useGamma)),new v.O("u_gamma",(e=>e.symbolizer.u_gamma),3),new v.O("u_gammaCorrection",(e=>e.symbolizer.u_gammaCorrection),3),new _.p("u_opacity",(e=>e.common.u_opacity))]),e.fragment.code.add(w.H`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);const i=t.applyColormap?w.H`gl_FragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:w.H`gl_FragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;e.fragment.code.add(w.H`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${t.stretchType===n.H.Noop?w.H`
        gl_FragColor = applyBackgroundBlend(currentPixel);`:w.H`
        if (currentPixel.a == 0.0) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }
        if (u_bandCount == 1) {
          float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          ${i}
        } else {
          float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
          float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
          gl_FragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
        }`}
      }`)}(t,e):e.colorizerType===n.U.Lut?t.fragment.code.add(w.H`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`):e.colorizerType===n.U.Hillshade&&function(e,t){const i=e.fragment;i.uniforms.add([new C.A("u_image",(e=>e.u_image)),new b._("u_hillshadeType",(e=>e.symbolizer.u_hillshadeType)),new v.O("u_sinZcosAs",(e=>e.symbolizer.u_sinZcosAs),6),new v.O("u_sinZsinAs",(e=>e.symbolizer.u_sinZsinAs),6),new v.O("u_cosZs",(e=>e.symbolizer.u_cosZs),6),new v.O("u_weights",(e=>e.symbolizer.u_weights),6),new g.A("u_factor",(e=>e.symbolizer.u_factor)),new _.p("u_minValue",(e=>e.symbolizer.u_minValue)),new _.p("u_maxValue",(e=>e.symbolizer.u_maxValue)),new g.A("u_srcImageSize",(e=>e.common.u_srcImageSize))]),i.include(f.Y),i.code.add(w.H`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec3 hsv = rgb2hsv(colormap(vec4(val, val, val, 1.0), false).rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv) * alpha, alpha);
}`),i.code.add(w.H`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);const r=t.applyColormap?w.H`gl_FragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:w.H`hillshade *= alpha;
gl_FragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;i.code.add(w.H`
    void main() {
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      //mirror edge pixels
      vec2 axy = vec2(-1.0, -1.0);
      vec2 bxy = vec2(0.0, -1.0);
      vec2 cxy = vec2(1.0, -1.0);
      vec2 dxy = vec2(-1.0, 0.0);
      vec2 fxy = vec2(1.0, 0.0);
      vec2 gxy = vec2(-1.0, 1.0);
      vec2 hxy = vec2(0.0, 1.0);
      vec2 ixy = vec2(1.0, 1.0);
      vec2 onePixel = 1.0 / u_srcImageSize;
      if (pixelLocation.s < onePixel.s) {
        axy[0] = 1.0;
        dxy[0] = 1.0;
        gxy[0] = 1.0;
      }
      if (pixelLocation.t < onePixel.t) {
        axy[1] = 1.0;
        bxy[1] = 1.0;
        cxy[1] = 1.0;
      }
      if (pixelLocation.s > 1.0 - onePixel.s) {
        cxy[0] = -1.0;
        fxy[0] = -1.0;
        ixy[0] = -1.0;
      }
      if (pixelLocation.t > 1.0 - onePixel.t) {
        gxy[1] = -1.0;
        hxy[1] = -1.0;
        ixy[1] = -1.0;
      }

      // calculate hillshade
      vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
      vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
      vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
      vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
      vec4 ve = texture2D(u_image, pixelLocation);
      vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
      vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
      vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
      vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);

      // calculate the rate of z change along the x, y, and diagonal direction
      float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
      float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
      float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
      float hillshade = 0.0;

      // traditional single light source
      if (u_hillshadeType == 0){
        float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
        float z = (u_cosZs[0] + cosDelta) / dzd;
        if (z < 0.0)  z = 0.0;
        hillshade = z;
      } else {
        // multi-directional with 6 light sources
        for (int k = 0; k < 6; k++) {
        float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
        float z = (u_cosZs[k] + cosDelta) / dzd;
        if (z < 0.0) z = 0.0;
        hillshade = hillshade + z * u_weights[k];
        if (k == 5) break;
        }
      }

      // set color
      float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
      alpha *= u_opacity;
      ${r}
    }
  `)}(t,e),t}const M=Object.freeze(Object.defineProperty({__proto__:null,ColorizerUniforms:T,ColorizerStretchUniforms:S,ColorizerHillshadeUniforms:E,build:A},Symbol.toStringTag,{value:"Module"}))},60926:(e,t,i)=>{"use strict";i.d(t,{R:()=>U,b:()=>k});var r=i(95650),s=i(57218),n=i(25714),o=i(5885),a=i(4731),l=i(99163),c=i(90511),u=i(91636),h=i(92835),d=i(82082),p=i(6502),f=i(77700),m=i(77546),g=i(30786),y=i(24623),_=i(73393),v=i(89585),b=i(3864),w=i(45416),x=i(12664),C=i(44391),T=i(41272),S=i(27452),E=i(84614),A=i(43036),M=i(63371),O=i(24603),R=i(23410),P=i(67948),I=i(3961),L=i(15176),D=i(70984),N=i(21414),F=i(39501);function k(e){const t=new I.kG,i=t.vertex.code,k=t.fragment.code,U=(0,E.S)(t,e);return t.include(u.f),t.varyings.add("vpos","vec3"),t.include(x.k,e),t.include(l.f,e),t.include(f.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,E.h)(t.vertex,e),t.include(c.O,e),t.include(a.w),e.offsetBackfaces&&t.include(s.w),e.instancedColor&&t.attributes.add(N.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(d.D,e),t.include(r.q,e),t.include(h.R,e),t.include(p.c,e),t.vertex.uniforms.add(new M.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),i.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(C.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(o.f5,e),t.include(T.z,e),t.include(_.l,e),t.fragment.uniforms.add([new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity)),new P.B("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new L.A("tex",(e=>e.texture))),t.fragment.include(S.y),k.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(o.f5,e),t.include(y.X,e),t.include(g.K,e),t.include(T.z,e),t.include(e.instancedDoublePrecision?w.hb:w.XE,e),t.include(_.l,e),(0,E.h)(t.fragment,e),t.fragment.uniforms.add([U,new A.J("ambient",(e=>e.ambient)),new A.J("diffuse",(e=>e.diffuse)),new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity)),new P.B("view"),new O.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new A.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",F.V),e.hasColorTexture&&t.fragment.uniforms.add(new L.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(v.T,e),t.fragment.include(S.y),t.extensions.add("GL_OES_standard_derivatives"),k.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===D.Am.Color?R.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:R.H``}
      }
    `)),t.include(m.s,e),t}const U=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}))},2013:(e,t,i)=>{"use strict";i.d(t,{N:()=>C,R:()=>S,b:()=>T});var r=i(61681),s=i(25714),n=i(5885),o=i(65915),a=i(59004),l=i(37009),c=i(73393),u=i(95509),h=i(44391),d=i(32394),p=i(84614),f=i(93072),m=i(63371),g=i(24603),y=i(23410),_=i(87621),v=i(3961),b=i(70984),w=i(21414),x=i(26531);const C=1;function T(e){const t=new v.kG,i=e.hasMultipassTerrain&&(e.output===s.H.Color||e.output===s.H.Alpha);t.include(u.e),t.include(o.U,e),t.include(l.q,e),e.output===s.H.Depth&&t.include(a.F,e),(0,p.S)(t,e);const{vertex:T,fragment:S}=t;T.uniforms.add([new _.g("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new f.A("nearFar",((e,t)=>t.camera.nearFar)),new g.p("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new m.N("viewport",((e,t)=>t.camera.fullViewport))]),T.constants.add("LARGE_HALF_FLOAT","float",65500),t.attributes.add(w.T.POSITION,"vec3"),t.attributes.add(w.T.SUBDIVISIONFACTOR,"float"),t.attributes.add(w.T.UV0,"vec2"),t.attributes.add(w.T.AUXPOS1,"vec3"),t.attributes.add(w.T.AUXPOS2,"vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),i&&t.varyings.add("depth","float");const E=e.capType===x.R.ROUND,A=e.stippleEnabled&&e.stippleScaleWithLineWidth||E;A&&t.varyings.add("vLineWidth","float");const M=e.stippleEnabled&&e.stippleScaleWithLineWidth;M&&t.varyings.add("vLineSizeInv","float");const O=e.innerColorEnabled||E;O&&t.varyings.add("vLineDistance","float");const R=e.stippleEnabled&&E,P=e.falloffEnabled||R;P&&t.varyings.add("vLineDistanceNorm","float"),E&&(t.varyings.add("vSegmentSDF","float"),t.varyings.add("vReverseSegmentSDF","float")),T.code.add(y.H`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),T.code.add(y.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),T.code.add(y.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${i?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),T.uniforms.add(new g.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),T.code.add(y.H`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${A?y.H`vLineWidth = lineWidth;`:""}
      ${M?y.H`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),(e.stippleEnabled||E)&&T.code.add(y.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${E?y.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),T.code.add(y.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?T.code.add(y.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?y.H`min(1.0, subdivisionFactor * ${y.H.float((C+2)/(C+1))})`:y.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):T.code.add(y.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const I=e.capType!==x.R.BUTT;return T.code.add(y.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I?y.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),T.code.add(y.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${P||O?y.H`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${O?y.H`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${P?y.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),E&&T.code.add(y.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?T.uniforms.add(new g.p("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):T.code.add(y.H`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),T.code.add(y.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?T.code.add(y.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):T.code.add(y.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),T.code.add(y.H`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),T.code.add(y.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `),i&&t.include(c.l,e),t.include(n.f5,e),S.include(d.Y),S.code.add(y.H`
  void main() {
    discardBySlice(vpos);
    ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?S.code.add(y.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(E&&S.code.add(y.H`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${y.H.float(h.b)}) {
        discard;
      }
    `),R?S.code.add(y.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${y.H.float(h.b)}, stippleCoverage);
      `):S.code.add(y.H`float stippleAlpha = getStippleAlpha();`),S.uniforms.add(new m.N("intrinsicColor",(e=>e.color))),S.code.add(y.H`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(S.uniforms.add(new m.N("innerColor",(e=>(0,r.Pt)(e.innerColor,e.color)))),S.uniforms.add(new g.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),S.code.add(y.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),S.code.add(y.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(S.uniforms.add(new g.p("falloff",(e=>e.falloff))),S.code.add(y.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),S.code.add(y.H`
    if (finalColor.a < ${y.H.float(h.b)}) {
      discard;
    }

    ${e.output===s.H.Alpha?y.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===s.H.Color?y.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===s.H.Color&&e.transparencyPassType===b.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===s.H.Highlight?y.H`gl_FragColor = vec4(1.0);`:""}
    ${e.output===s.H.Depth?y.H`outputDepth(linearDepth);`:""}
  }
  `),t}const S=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:C,build:T},Symbol.toStringTag,{value:"Module"}))},41490:(e,t,i)=>{"use strict";i.d(t,{S:()=>u,b:()=>c});var r=i(62869),s=i(23410),n=i(3961),o=i(57663),a=i(52694),l=i(21414);function c(e){const t=new n.kG;return e.output===a.f.EdgeDetector&&(t.attributes.add(l.T.POSITION,"vec2"),t.vertex.uniforms.add(new r.y("resolution")),t.varyings.add("fTexCoord","vec2"),t.varyings.add("fOffset[3]","vec4"),t.vertex.code.add(s.H`void SMAAEdgeDetectionVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 );
fOffset[2] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 );
}
void main() {
fTexCoord = (position + 1.0 ) * 0.5;
gl_Position = vec4(position, 0, 1);
SMAAEdgeDetectionVS( fTexCoord );
}`),t.fragment.uniforms.add(new o.Q("tColor")),t.fragment.code.add(s.H`
      vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
        vec2 threshold = vec2( ${s.H.float(.05)} );

        // Calculate color deltas:
        vec4 delta;
        vec3 C = texture2D( colorTex, texcoord ).rgb;

        vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
        vec3 t = abs( C - Cleft );
        delta.x = max( max( t.r, t.g ), t.b );

        vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
        t = abs( C - Ctop );
        delta.y = max( max( t.r, t.g ), t.b );

        // We do the usual threshold:
        vec2 edges = step( threshold, delta.xy );

        // Then discard if there is no edge:
        if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
            discard;

        // Calculate right and bottom deltas:
        vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
        t = abs( C - Cright );
        delta.z = max( max( t.r, t.g ), t.b );

        vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
        t = abs( C - Cbottom );
        delta.w = max( max( t.r, t.g ), t.b );

        // Calculate the maximum delta in the direct neighborhood:
        float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

        // Calculate left-left and top-top deltas:
        vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
        t = abs( C - Cleftleft );
        delta.z = max( max( t.r, t.g ), t.b );

        vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
        t = abs( C - Ctoptop );
        delta.w = max( max( t.r, t.g ), t.b );

        // Calculate the final maximum delta:
        maxDelta = max( max( maxDelta, delta.z ), delta.w );

        // Local contrast adaptation in action:
        edges.xy *= step( maxDelta, float(${s.H.float(2)}) * delta.xy );

        return vec4( edges, 0.0, 0.0 );
      }

      void main() {
        gl_FragColor = SMAAColorEdgeDetectionPS( fTexCoord, fOffset, tColor );
      }
    `)),e.output===a.f.BlendWeight&&(t.attributes.add(l.T.POSITION,"vec2"),t.vertex.uniforms.add(new r.y("resolution")),t.varyings.add("fTexCoord","vec2"),t.varyings.add("fOffset[3]","vec4"),t.varyings.add("fPixCoord","vec2"),t.vertex.code.add(s.H`
      void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
        fPixCoord = texcoord * resolution.zw;
        fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 );
        fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 );
        fOffset[2] = vec4( fOffset[0].xz, fOffset[1].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( ${s.H.int(8)} );
      }

      void main() {
        fTexCoord = (position + 1.0 ) * 0.5;
        gl_Position = vec4(position, 0, 1);
        SMAABlendingWeightCalculationVS( fTexCoord );
      }
    `),t.fragment.uniforms.add(new o.Q("tEdges")),t.fragment.uniforms.add(new o.Q("tArea")),t.fragment.uniforms.add(new o.Q("tSearch")),t.fragment.uniforms.add(new o.Q("tColor")),t.fragment.uniforms.add(new r.y("resolution")),t.fragment.code.add(s.H`
      #define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
      #define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )

      vec4 SMAASampleLevelZeroOffset(sampler2D texture, vec2 coord, vec2 offset) {
        return texture2D(texture, coord + offset.x * resolution.xy, 0.0);
      }

      vec2 round( vec2 x ) {
        return sign( x ) * floor( abs( x ) + 0.5 );
      }

      float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
        e.r = bias + e.r * scale;
        return 255.0 * texture2D( searchTex, e, 0.0 ).r;
      }

      float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${s.H.int(8)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x += 0.25 * resolution.x;
        texcoord.x += resolution.x;
        texcoord.x += 2.0 * resolution.x;
        texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);
        return texcoord.x;
      }

      float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${s.H.int(8)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x -= 0.25 * resolution.x;
        texcoord.x -= resolution.x;
        texcoord.x -= 2.0 * resolution.x;
        texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );
        return texcoord.x;
      }

      float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${s.H.int(8)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y -= 0.25 * resolution.y;
        texcoord.y -= resolution.y;
        texcoord.y -= 2.0 * resolution.y;
        texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 );
        return texcoord.y;
      }

      float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${s.H.int(8)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y += 0.25 * resolution.y;
        texcoord.y += resolution.y;
        texcoord.y += 2.0 * resolution.y;
        texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 );
        return texcoord.y;
      }

      vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
        vec2 texcoord = float( ${s.H.int(16)} ) * round( 4.0 * vec2( e1, e2 ) ) + dist;
        texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );
        texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;
        return texture2D( areaTex, texcoord, 0.0 ).rg;
      }

      vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
        vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );
        vec2 e = texture2D( edgesTex, texcoord ).rg;
        if ( e.g > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
          coords.y = offset[ 1 ].y;
          d.x = coords.x;
          float e1 = texture2D( edgesTex, coords, 0.0 ).r;
          coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
          d.y = coords.x;
          d = d * resolution.z - pixcoord.x;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 1.0, 0.0 ) ).r;
          weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
        }

        if ( e.r > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
          coords.x = offset[ 0 ].x;
          d.x = coords.y;
          float e1 = texture2D( edgesTex, coords, 0.0 ).g;
          coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
          d.y = coords.y;
          d = d * resolution.w - pixcoord.y;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 0.0, 1.0 ) ).g;
          weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );

          // for some reason the following lines are necessary to prevent
          // texture lookup precision issues on some Intel integrated graphics chips
          vec4 dbg = (offset[ 0 ]+offset[ 1 ]+offset[ 2 ] + coords.xyyx);
          weights.r += 0.00000001 * dot(vec4(0,1,0,1),dbg);
        }
        return weights;
      }

      void main() {
        gl_FragColor = SMAABlendingWeightCalculationPS( fTexCoord, fPixCoord, fOffset, tEdges, tArea, tSearch, ivec4( 0.0 ) );
      }
    `)),e.output===a.f.Blur&&(t.attributes.add(l.T.POSITION,"vec2"),t.vertex.uniforms.add(new r.y("resolution")),t.varyings.add("fTexCoord","vec2"),t.varyings.add("fOffset[2]","vec4"),t.vertex.code.add(s.H`void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}
void main() {
fTexCoord = (position + 1.0 ) * 0.5;
gl_Position = vec4(position, 0, 1);
SMAANeighborhoodBlendingVS(fTexCoord);
}`),t.fragment.uniforms.add(new o.Q("tBlendWeights")),t.fragment.uniforms.add(new o.Q("tColor")),t.fragment.uniforms.add(new r.y("resolution")),t.fragment.code.add(s.H`vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
vec4 a;
a.xz = texture2D( blendTex, texcoord ).xz;
a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
a.w = texture2D( blendTex, offset[ 1 ].xy ).a;
if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
return texture2D( colorTex, texcoord, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture2D( colorTex, texcoord, 0.0 );
texcoord += sign( offset ) * resolution.xy;
vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
vec4 mixed = mix(C, Cop, s);
return mixed;
}
}
void main() {
gl_FragColor = SMAANeighborhoodBlendingPS( fTexCoord, fOffset, tColor, tBlendWeights );
}`)),t}const u=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}))},91800:(e,t,i)=>{"use strict";i.d(t,{S:()=>f,b:()=>p});var r=i(41383),s=i(6665),n=i(77334),o=i(93072),a=i(74001),l=i(39820),c=i(23410),u=i(3961),h=i(57663),d=i(89158);function p(e){const t=new u.kG,i=t.fragment;if(t.include(r.k),e.output===d.Q.Blur){const e=2.5,t=1/(2*e*e);i.include(s.S),i.uniforms.add([new h.Q("normalMap"),new h.Q("depthMap"),new h.Q("tex"),new a.e("blurSize"),new l.d("projScale"),new o.A("nearFar",((e,t)=>t.camera.nearFar))]),i.code.add(c.H`
      void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
        float c = texture2D(tex, uv).r;
        float d = linearDepthFromTexture(depthMap, uv, nearFar);

        float ddiff = d - center_d;

        float w = exp(-r * r * ${c.H.float(t)} - ddiff * ddiff * sharpness);
        wTotal += w;
        bTotal += w * c;
      }
    `),i.code.add(c.H`
      void main(void) {
        float b = 0.0;
        float w_total = 0.0;

        float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

        float sharpness = -0.05 * projScale/center_d;
        for (int r = -${c.H.int(4)}; r <= ${c.H.int(4)}; ++r) {
          float rf = float(r);
          vec2 uvOffset = uv + rf * blurSize;
          blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
        }

        gl_FragColor = vec4(b / w_total);
      }
    `)}return e.output===d.Q.SSAO&&(i.include(s.S),t.include(n.G),i.uniforms.add(new h.Q("normalMap")),i.uniforms.add(new h.Q("depthMap")),i.uniforms.add(new h.Q("rnm")),i.uniforms.add(new l.d("intensity")),i.uniforms.add(new l.d("projScale")),i.uniforms.add(new l.d("radius")),i.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),i.uniforms.add(new a.e("screenSize")),i.uniforms.add(new a.e("rnmScale")),i.code.add(c.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),i.code.add(c.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.fragment.uniforms.add(new o.A("zScale",((e,t)=>(0,n.R)(t)))),i.code.add(c.H`
      void main(void) {
        fillSphere();
        vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
        float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

        if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

        // get the normal of current fragment
        vec4 norm4 = texture2D(normalMap, uv);
        vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
        bool isTerrain = norm4.w<0.5;

        float sum = .0;
        vec3 tapPixelPos;

        // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
        // bug or deviation from CE somewhere else?
        float ps = projScale/(2.0 * currentPixelPos.z * zScale.x + zScale.y);

        for(int i = 0; i < ${c.H.int(16)}; ++i) {
          vec2 unitOffset = reflect(sphere[i], fres).xy;
          vec2 offset = vec2(-unitOffset * radius * ps);

          //don't use current or very nearby samples
          if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

          vec2 tc = vec2(gl_FragCoord.xy + offset);
          if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
          vec2 tcTap = tc / screenSize;
          float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

          if (isTerrain) {
            bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
            if (isTerrainTap) {
              continue;
            }
          }

          tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

          sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
        }

        // output the result
        float A = max(1.0-sum*intensity/float(${c.H.int(16)}),0.0);

        // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
        gl_FragColor = vec4(A);
      }
    `)),t}const f=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:"Module"}))},89417:(e,t,i)=>{"use strict";i.d(t,{S:()=>m,a:()=>b,b:()=>_,s:()=>g});var r=i(24455),s=i(39100),n=i(41383),o=i(6665),a=i(45416),l=i(77334),c=i(9794),u=i(93072),h=i(23410),d=i(87621),p=i(3961),f=i(15176);class m extends a.ry{}const g=255,y=1/g;function _(){const e=new p.kG,t=e.fragment;return t.include(c.n),t.include(o.S),e.include(l.G),e.include(n.k),e.include(a.hb,{receiveShadows:!0}),t.uniforms.add([new f.A("depthMap",(e=>e.linearDepthTexture)),new d.g("inverseViewMatrix",((e,t)=>(0,r.a)(v,(0,r.j)(v,t.camera.viewMatrix,t.camera.center)))),new u.A("nearFar",((e,t)=>t.camera.nearFar))]),t.constants.add("sampleValue","float",y),t.code.add(h.H`void main(void) {
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
gl_FragColor = vec4(sampleValue);
}`),e}const v=(0,s.c)(),b=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastAccumulatePassParameters:m,shadowCastMaxSamples:g,build:_},Symbol.toStringTag,{value:"Module"}))},52436:(e,t,i)=>{"use strict";i.d(t,{S:()=>m,b:()=>f});var r=i(41383),s=i(6665),n=i(77334),o=i(9794),a=i(63371),l=i(24603),c=i(23410),u=i(3961),h=i(15176),d=i(89417),p=i(50740);function f(e){const t=new u.kG,i=t.fragment;i.include(o.n),i.include(s.S),t.include(n.G),t.include(r.k);const{visualization:f,bandsEnabled:m}=e;i.constants.add("inverseSampleValue","float",d.s),i.uniforms.add([new h.A("shadowCastMap",(e=>e.shadowCastMap)),new l.p("sampleScale",(e=>e.sampleScale)),new l.p("opacityFromElevation",(e=>e.opacityFromElevation)),new a.N("uColor",(e=>e.color))]);const g=f===p.w.Gradient,y=f===p.w.Threshold;return g&&m?i.uniforms.add(new l.p("bandSize",(e=>e.bandSize))):y&&i.uniforms.add(new l.p("threshold",(e=>e.threshold))),i.code.add(c.H`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${y?c.H`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${g&&m?c.H`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${g?c.H`* strength`:""});
      }
    `),t}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},23839:(e,t,i)=>{"use strict";i.d(t,{S:()=>O,b:()=>S});var r=i(61681),s=i(24455),n=i(39100),o=i(55709),a=i(69666),l=i(6766),c=i(8909),u=i(41383),h=i(55994),d=i(6665),p=i(45416),f=i(77334),m=i(9794),g=i(93072),y=i(43036),_=i(63371),v=i(24603),b=i(23410),w=i(87621),x=i(3961),C=i(15176),T=i(80876);function S(){const e=new x.kG;e.include(p.XE,{receiveShadows:!0});const t=e.fragment;return t.include(m.n),t.include(d.S),e.include(f.G),e.include(u.k),t.uniforms.add([new C.A("defaultDepthTex",((e,t)=>t.shadowMap.getSnapshot(T.i.Default))),new C.A("highlightDepthTex",((e,t)=>t.shadowMap.getSnapshot(T.i.Highlight))),new C.A("depthMap",((e,t)=>t.linearDepthTexture)),new C.A("highlightMap",((e,t)=>t.highlightColorTexture)),new _.N("uColor",(e=>e.shadowColor)),new g.A("nearFar",((e,t)=>t.camera.nearFar)),new v.p("opacity",(e=>e.shadowOpacity)),new v.p("occludedOpacity",(e=>e.occludedShadowOpacity)),new v.p("terminationFactor",(e=>e.opacityElevation*e.dayNightTerminator)),new y.J("lightingMainDirectionView",((e,t)=>(0,l.n)(A,(0,l.m)(A,t.lighting.lightingMainDirection,t.camera.viewInverseTransposeMatrix)))),new g.A("texelSize",((e,t)=>(0,r.pC)(t.linearDepthTexture)?(0,o.a)(M,1/t.linearDepthTexture.descriptor.width,1/t.linearDepthTexture.descriptor.height):a.Z)),new w.g("inverseViewMatrix",((e,t)=>(0,s.a)(E,(0,s.j)(E,t.camera.viewMatrix,t.camera.center))))]),t.constants.add("unoccludedHighlightFlag","vec4",h.ck).add("highlightedThreshold","float",.99999).add("selfShadowThreshold","float",.025),t.code.add(b.H`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
float leftPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(-1.0, 0.0) * texelSize, nearFar);
float rightPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(1.0, 0.0) * texelSize, nearFar);
float bottomPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, -1.0) * texelSize, nearFar);
float topPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, 1.0) * texelSize, nearFar);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`),t.code.add(b.H`void main(void) {
vec4 highlightInfo = texture2D(highlightMap, uv);
float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
if (visiblyHighlighted > highlightedThreshold) {
discard;
}
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
bool shadowHighlight = depthHighlight < lvpos.z;
if (!shadowHighlight) {
discard;
}
float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
bool shadowDefault = depthDefault < lvpos.z;
vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, uv, texelSize, depthMap, nearFar);
bool shaded = dot(normal, lightingMainDirectionView) < selfShadowThreshold;
float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
gl_FragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`),e}const E=(0,n.c)(),A=(0,c.c)(),M=(0,a.a)(),O=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}))},41938:(e,t,i)=>{"use strict";i.d(t,{S:()=>m,a:()=>y,b:()=>g});var r=i(28876),s=i(4731),n=i(74001),o=i(43036),a=i(96371),l=i(39820),c=i(23410),u=i(87621),h=i(67948),d=i(3961),p=i(15176),f=i(21414);class m extends c.K{}function g(e){const t=new d.kG,{vertex:i,fragment:m}=t;if(e.geometry===r.n.Underground)t.attributes.add(f.T.POSITION,"vec2"),t.varyings.add("color","vec4"),i.uniforms.add([new o.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new a.K("cameraPosition"),new l.d("undergroundFadeAlpha")]),i.code.add(c.H`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),m.code.add(c.H`void main() {
gl_FragColor = color;
}`);else{t.include(s.w),t.attributes.add(f.T.POSITION,"vec3"),t.varyings.add("vtc","vec2"),t.varyings.add("falloff","float");const d=e.geometry===r.n.Cylinder;i.uniforms.add([new u.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.B("view"),new o.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))]),d||(t.varyings.add("innerFactor","float"),i.uniforms.add(new a.K("silCircleCenter")),i.uniforms.add(new a.K("silCircleV1")),i.uniforms.add(new a.K("silCircleV2")),i.uniforms.add(new n.e("texV")),i.uniforms.add(new l.d("innerScale")));const g=6.2831853,y=1/128;i.code.add(c.H`
		void main(void) {
      ${d?c.H`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:c.H`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${c.H.float(g*y)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${c.H.float(y)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),m.uniforms.add(new p.A("tex",(e=>e.texture))),d||m.uniforms.add(new l.d("altitudeFade")),m.code.add(c.H`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${d?c.H`gl_FragColor = atmosphereColor;`:c.H`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`)}return t}const y=Object.freeze(Object.defineProperty({__proto__:null,SimpleAtmospherePassParameters:m,build:g},Symbol.toStringTag,{value:"Module"}))},26761:(e,t,i)=>{"use strict";i.d(t,{S:()=>f,b:()=>d});var r=i(24455),s=i(39100),n=i(94728),o=i(63371),a=i(24603),l=i(23410),c=i(87621),u=i(3961),h=i(21414);function d(){const e=new u.kG;return e.attributes.add(h.T.POSITION,"vec3"),e.attributes.add(h.T.COLOR,"vec4"),e.attributes.add(h.T.SIZE,"float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add([new c.g("transform",((e,t)=>function(e,t){const i=24e-8;return(0,r.c)(p,t.camera.projectionMatrix),p[10]=i-1,p[11]=-1,p[14]=(i-2)*t.camera.near,(0,r.m)(p,p,t.camera.viewMatrix),(0,r.m)(p,p,e.modelMatrix)}(e,t))),new o.N("viewport",((e,t)=>t.camera.fullViewport)),new a.p("pixelRatio",((e,t)=>t.camera.pixelRatio))]),e.include(n.H),e.vertex.code.add(l.H`void main(void) {
vec4 posProj = transform * vec4(position, 0);
gl_Position = alignToPixelCenter(posProj, viewport.zw);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`),e.fragment.code.add(l.H`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
gl_FragColor = vec4(vcolor.xyz, intensity);
}`),e}const p=(0,s.c)(),f=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}))},8106:(e,t,i)=>{"use strict";i.d(t,{T:()=>L,a:()=>k,b:()=>D});var r=i(24455),s=i(39100),n=i(6766),o=i(8909),a=i(9812),l=i(25714),c=i(5885),u=i(4731),h=i(14140),d=i(59004),p=i(55994),f=i(30786),m=i(24623),g=i(37451),y=i(3864),_=i(45416),v=i(97582),b=i(47096),w=i(78115),x=i(93072),C=i(32006),T=i(43036),S=i(24603),E=i(23410),A=i(3875),M=i(87621),O=i(3961),R=i(15176),P=i(21414),I=i(39501);class L extends v.uS{}function D(e){const t=new O.kG;t.include(w.a,{name:"Terrain Shader",output:e.output}),t.attributes.add(P.T.POSITION,"vec3"),t.attributes.add(P.T.UV0,"vec2"),t.attributes.add(P.T.NORMAL,"vec3");const{vertex:i,fragment:s}=t;if(i.uniforms.add([new M.g("proj",((e,t)=>t.camera.projectionMatrix)),new A.K("view",((e,t)=>(0,r.j)(N,t.camera.viewMatrix,e.origin))),new C.B("origin",(e=>e.origin))]),s.uniforms.add(new C.B("origin",(e=>e.origin))),e.output===l.H.Color){t.include(u.w),t.include(g.n,e),t.include(b.E,e),t.include(m.X,e);const o=e.overlayMode!==v.gT.Disabled,l=e.overlayMode===v.gT.EnabledWithWater;o&&t.include(v.yl,{...e,pbrMode:y.f7.Water}),l&&t.include(h.M,e),t.varyings.add("vnormal","vec3"),t.varyings.add("vpos","vec3"),(e.atmosphere||e.screenSizePerspective)&&i.uniforms.add(new M.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)));const d=e.receiveShadows&&!e.renderOccluded;d&&t.varyings.add("linearDepth","float"),e.tileBorders&&t.varyings.add("vuv","vec2"),e.atmosphere&&(i.uniforms.add(new T.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),t.varyings.add("wnormal","vec3"),t.varyings.add("wlight","vec3")),e.screenSizePerspective&&(t.varyings.add("screenSizeDistanceToCamera","float"),t.varyings.add("screenSizeCosAngle","float")),i.code.add(E.H`
      void main(void) {
        vpos = position;
        vnormal = ${e.shading?E.H`normal`:E.H`getLocalUp(vpos, origin)`};
        vec2 uv = uv0;
        ${e.atmosphere?E.H`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${e.tileBorders?E.H`vuv = uv;`:""}
        ${e.screenSizePerspective?E.H`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${d?E.H`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${o?E.H`setOverlayVTC(uv);`:""}
        ${l?E.H`forwardVertexTangent(vnormal);`:E.H``}
      }
    `),t.extensions.add("GL_OES_standard_derivatives"),t.extensions.add("GL_EXT_shader_texture_lod"),t.include(c.f5,e),t.include(m.X,e),t.include(f.K,e),t.include(_.XE,e),s.uniforms.add([new C.B("cameraPosition",((e,t)=>(0,n.b)(F,t.camera.eye,e.origin))),new T.J("viewDirection",((e,t)=>(0,n.n)(F,(0,n.s)(F,t.camera.viewMatrix[12],t.camera.viewMatrix[13],t.camera.viewMatrix[14])))),new S.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new T.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new T.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),s.constants.add("ambientBoostFactor","float",I.V),l&&s.uniforms.add([new R.A("ovWaterTex",((e,t)=>0===t.overlays.length?null:t.overlays[a.fu.INNER].getNormalTexture(e.overlaySource))),new A.K("view",((e,t)=>(0,r.j)(N,t.camera.viewMatrix,e.origin)))]),s.code.add(E.H`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),s.code.add(E.H`
      void main() {
        ${d?E.H`float shadow = readShadowMap(vpos, linearDepth);`:E.H`float shadow = 0.0;`}
        vec3 normal = normalize(vnormal);
        float vndl = dot(normal, lightingMainDirection);
        float ssao = evaluateAmbientOcclusionInverse();
        vec4 tileColor = getTileColor();
        ${o?E.H`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${e.atmosphere?E.H`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${e.atmosphere?E.H`atm + tileColor.rgb;`:E.H`tileColor.rgb;`}

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl${e.shading?"":E.H`*2.5`}, 0.0, 1.0));

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor ${e.shading?"":E.H`* lightingGlobalFactor`};

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${l?E.H`
            vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
            float waterNormalLength = length(overlayWaterMask);
            if (waterNormalLength > 0.95) {
              mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
              vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
              vec4 viewPosition = view*vec4(vpos, 1.0);
              vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + origin);
              vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
              // un-gamma the ground color to mix in linear space
              gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
            }`:""}
        ${e.screenSizePerspective?E.H`
          float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
          if (perspectiveScale <= 0.25) {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
          }
          else if (perspectiveScale <= 0.5) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
          }
          else if (perspectiveScale >= 0.99) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
          }
          else {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
          }`:""}
        ${e.tileBorders?E.H`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}return e.output!==l.H.Depth&&e.output!==l.H.Shadow||(t.include(u.w,{hasModelTransformation:!1,linearDepth:!0}),t.include(d.F,{output:e.output}),t.include(g.n,e),t.varyings.add("linearDepth","float"),i.uniforms.add(new x.A("nearFar",((e,t)=>t.camera.nearFar))),i.code.add(E.H`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),s.code.add(E.H`void main() {
outputDepth(linearDepth);
}`)),e.output===l.H.Normal&&(t.include(u.w),t.include(g.n,e),t.varyings.add("vnormal","vec3"),t.varyings.add("vpos","vec3"),i.uniforms.add(new M.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),i.code.add(E.H`
        void main(void) {
          vec3 normal = ${e.shading?E.H`normal`:E.H`getLocalUp(position, origin)`};
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
          vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
        }
    `),s.code.add(E.H`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`)),e.output===l.H.Highlight&&(t.include(u.w),t.include(g.n,e),t.include(v.yl,e),i.code.add(E.H`void main() {
setOverlayVTC(uv0);
gl_Position = transformPosition(proj, view, position);
}`),t.include(p.bA),s.code.add(E.H`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`)),t}const N=(0,s.c)(),F=(0,o.c)(),k=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:L,build:D},Symbol.toStringTag,{value:"Module"}))},86243:(e,t,i)=>{"use strict";i.d(t,{T:()=>c,b:()=>l});var r=i(41383),s=i(62869),n=i(23410),o=i(3961),a=i(57663);function l(){const e=new o.kG;return e.include(r.k),e.fragment.uniforms.add([new a.Q("tex"),new s.y("uColor")]),e.fragment.code.add(n.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const c=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}))},18406:(e,t,i)=>{"use strict";i.d(t,{W:()=>O,b:()=>M});var r=i(95650),s=i(25714),n=i(5885),o=i(4731),a=i(55994),l=i(77787),c=i(58749),u=i(73393),h=i(37451),d=i(3864),p=i(45416),f=i(81049),m=i(18995),g=i(44391),y=i(32394),_=i(84614),v=i(43036),b=i(63371),w=i(62869),x=i(24603),C=i(23410),T=i(67948),S=i(3961),E=i(70984),A=i(21414);function M(e){const t=new S.kG,{vertex:i,fragment:M}=t,O=(0,_.S)(t,e);return t.include(o.w),t.attributes.add(A.T.POSITION,"vec3"),t.attributes.add(A.T.UV0,"vec2"),i.uniforms.add(new b.N("waterColor",(e=>e.color))),e.output!==s.H.Color&&e.output!==s.H.Alpha||(t.include(h.n,e),t.include(r.q,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),M.uniforms.add(O),e.hasMultipassTerrain&&t.varyings.add("depth","float"),i.code.add(C.H`
      void main(void) {
        if (waterColor.a < ${C.H.float(g.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===s.H.Color?"forwardLinearDepth();":""}
      }
    `)),t.include(u.l,e),e.output===s.H.Alpha&&(t.include(n.f5,e),M.uniforms.add(new w.y("waterColor")),M.code.add(C.H`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),e.output===s.H.Color&&(t.include(c.k,{isGround:!1}),t.include(l._,{pbrMode:d.f7.Disabled,lightingSphericalHarmonicsOrder:2}),t.include(m.M),t.include(n.f5,e),t.include(p.XE,e),t.include(f.B,e),M.uniforms.add([new w.y("waterColor"),new v.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new v.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity)),new x.p("timeElapsed",(e=>e.timeElapsed)),new T.B("view")]),(0,_.h)(M,e),M.include(y.Y),M.code.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?C.H`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===E.Am.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output===s.H.Normal&&(t.include(h.n,e),t.include(m.M,e),t.include(n.f5,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),i.code.add(C.H`
        void main(void) {
          if (waterColor.a < ${C.H.float(g.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),M.uniforms.add(new x.p("timeElapsed",(e=>e.timeElapsed))),M.code.add(C.H`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),e.output===s.H.Draped&&(t.varyings.add("vpos","vec3"),i.code.add(C.H`
        void main(void) {
          if (waterColor.a < ${C.H.float(g.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),M.uniforms.add(new w.y("waterColor")),M.code.add(C.H`void main() {
gl_FragColor = waterColor;
}`)),e.output===s.H.Highlight&&(t.include(a.bA),t.varyings.add("vpos","vec3"),i.code.add(C.H`
      void main(void) {
        if (waterColor.a < ${C.H.float(g.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(n.f5,e),M.code.add(C.H`void main() {
discardBySlice(vpos);
outputHighlight();
float normalizedIndex = (componentIndex * 2.0 + 0.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return texture2D(componentColorTex, indexCoord);
}
float readElevationOffset() {
float normalizedIndex = (componentIndex * 2.0 + 1.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return (rgba2float(texture2D(componentColorTex, indexCoord)) - 0.5) * elevationScale;
}
vec4 forwardExternalColor(out bool castShadows) {
vec4 componentColor = _readComponentColor() * 255.0;
float shadowFlag = mod(componentColor.b * 255.0, 2.0);
componentColor.b -= shadowFlag;
castShadows = shadowFlag >= 1.0;
int decodedColorMixMode;
vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451;
vExternalColorMixMode = float(decodedColorMixMode) + 0.5;
return vExternalColor;
}`),i.code.add(f.H`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`)}(e);case d.Uniform:return function(e){const{vertex:t,fragment:i}=e;t.uniforms.add(new l.$("externalColor",(e=>e.componentParameters.externalColor))),i.uniforms.add(new h("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))),e.varyings.add("vExternalColor","vec4"),t.code.add(f.H`float readElevationOffset() {
return 0.0;
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),i.code.add(f.H`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`)}(e);case d.COUNT:return;default:(0,r.Bg)(t.componentData)}}},78804:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var r=i(66352),s=i(23410);function n(e){e.vertex.code.add(s.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},98135:(e,t,i)=>{"use strict";i.d(t,{a:()=>r,z:()=>o});var r,s,n=i(23410);function o(e,t){const i=e.vertex;switch(i.code.add(n.H`#define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)`),t.vertexDiscardMode){case r.None:i.code.add(n.H`#define vertexDiscardByOpacity(_opacity_) {}`);break;case r.Opaque:i.code.add(n.H`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);break;case r.Transparent:i.code.add(n.H`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`)}}(s=r||(r={}))[s.None=0]="None",s[s.Transparent=1]="Transparent",s[s.Opaque=2]="Opaque",s[s.COUNT=3]="COUNT"},67920:(e,t,i)=>{"use strict";i.d(t,{N:()=>o});var r=i(44685),s=i(82082),n=i(21414);function o(e){const t=(0,r.U$)().vec3f(n.T.POSITION);return e.normals&&t.vec2i16(n.T.NORMALCOMPRESSED,{glNormalized:!0}),e.textureCoordinates===s.N.Default?t.vec2f(n.T.UV0):e.textureCoordinates===s.N.Atlas&&(t.vec2f(n.T.UV0),t.vec4u16(n.T.UVREGION,{glNormalized:!0})),e.colors&&t.vec4u8(n.T.COLOR,{glNormalized:!0}),t.alignTo(4)}},17e3:(e,t,i)=>{"use strict";i.d(t,{SP:()=>c,T5:()=>h,kF:()=>u,o9:()=>r,zp:()=>s});var r,s,n,o=i(8909),a=i(78549);class l extends a.d4{constructor(){super(...arguments),this.slicePlaneLocalOrigin=(0,o.c)(),this.origin=this.slicePlaneLocalOrigin}}(n=r||(r={}))[n.Material=0]="Material",n[n.ShadowMap=1]="ShadowMap",n[n.Highlight=2]="Highlight",function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal"}(s||(s={}));class c extends l{constructor(){super(...arguments),this.identifier=r.Material,this.transparent=!1,this.integratedMesh=!1}}class u extends l{constructor(){super(...arguments),this.identifier=r.ShadowMap}}class h extends l{constructor(){super(...arguments),this.identifier=r.Highlight}}},95650:(e,t,i)=>{"use strict";i.d(t,{q:()=>a});var r=i(25714),s=i(62295),n=i(93072),o=i(23410);function a(e,t){t.output===r.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===r.H.Depth||t.output===r.H.Shadow?(e.include(s.up,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(o.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(o.H`void forwardLinearDepth() {}`)}},57218:(e,t,i)=>{"use strict";i.d(t,{w:()=>s});var r=i(23410);function s(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},41383:(e,t,i)=>{"use strict";i.d(t,{k:()=>n});var r=i(23410),s=i(21414);function n(e,t=!0){e.attributes.add(s.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(r.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?r.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},25714:(e,t,i)=>{"use strict";var r;i.d(t,{H:()=>r}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(r||(r={}))},5885:(e,t,i)=>{"use strict";i.d(t,{P_:()=>d,UT:()=>h,f5:()=>p});var r=i(61681),s=i(24455),n=i(39100),o=i(6766),a=i(8909),l=i(32006),c=i(43036),u=i(23410);class h extends u.K{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function d(e,t){f(e,t,[new c.J("slicePlaneOrigin",((e,i)=>_(t,e,i))),new c.J("slicePlaneBasis1",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis1))),new c.J("slicePlaneBasis2",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis2)))])}function p(e,t){f(e,t,[new l.B("slicePlaneOrigin",((e,i)=>_(t,e,i))),new l.B("slicePlaneBasis1",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis2)))])}function f(e,t,i){if(!t.hasSlicePlane){const i=u.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const r=u.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,s=u.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?u.H`
        ${s}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:u.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}function m(e,t,i){return e.instancedDoublePrecision?(0,o.s)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function g(e,t){return(0,r.pC)(e)?(0,o.b)(w,t.origin,e):t.origin}function y(e,t,i){return e.hasSliceTranslatedView?(0,r.pC)(t)?(0,s.j)(C,i.camera.viewMatrix,t):i.camera.viewMatrix:null}function _(e,t,i){if((0,r.Wi)(i.slicePlane))return a.Z;const s=m(e,t,i),n=g(s,i.slicePlane),l=y(e,s,i);return(0,r.pC)(l)?(0,o.m)(w,n,l):n}function v(e,t,i,s){if((0,r.Wi)(s)||(0,r.Wi)(i.slicePlane))return a.Z;const n=m(e,t,i),l=g(n,i.slicePlane),c=y(e,n,i);return(0,r.pC)(c)?((0,o.a)(x,s,l),(0,o.m)(w,l,c),(0,o.m)(x,x,c),(0,o.b)(x,x,w)):s}const b=(0,a.c)(),w=(0,a.c)(),x=(0,a.c)(),C=(0,n.c)()},4731:(e,t,i)=>{"use strict";i.d(t,{w:()=>s});var r=i(23410);function s(e,t={hasModelTransformation:!1,linearDepth:!1}){if(t.hasModelTransformation)return t.linearDepth?void e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.linearDepth?e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},99163:(e,t,i)=>{"use strict";i.d(t,{f:()=>d});var r=i(6766),s=i(8909),n=i(25714),o=i(5331),a=i(32006),l=i(23410),c=i(87621),u=i(21414),h=i(30560);function d(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(u.T.MODELORIGINHI,"vec3"),e.attributes.add(u.T.MODELORIGINLO,"vec3"),e.attributes.add(u.T.MODEL,"mat3"),e.attributes.add(u.T.MODELNORMAL,"mat3"));const i=e.vertex;t.instancedDoublePrecision&&(i.include(o.$,t),i.uniforms.add(new a.B("viewOriginHi",((e,t)=>(0,h.U8)((0,r.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p)))),i.uniforms.add(new a.B("viewOriginLo",((e,t)=>(0,h.GB)((0,r.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p))))),i.code.add(l.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),i.code.add(l.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?l.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(l.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===n.H.Normal&&(i.uniforms.add(new c.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),i.code.add(l.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&i.code.add(l.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const p=(0,s.c)()},90511:(e,t,i)=>{"use strict";i.d(t,{O:()=>l,h:()=>n});var r=i(23410);function s(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var n,o,a=i(21414);function l(e,t){t.normalType===n.Attribute&&(e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),t.normalType===n.CompressedAttribute&&(e.include(s),e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===n.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(o=n||(n={}))[o.Attribute=0]="Attribute",o[o.CompressedAttribute=1]="CompressedAttribute",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},28881:(e,t,i)=>{"use strict";i.d(t,{C:()=>p,W:()=>d});var r=i(69666),s=i(91636),n=i(93072),o=i(43036),a=i(36444),l=i(40335),c=i(23410),u=i(21414),h=i(67874);function d(e,t){e.attributes.add(u.T.FEATUREVALUE,"vec4");const i=e.vertex;i.code.add(c.H`bool isCapVertex() {
return featureValue.w == 1.0;
}`),i.uniforms.add(new n.A("size",(e=>e.size))),t.vvSize?(i.uniforms.add(new o.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new o.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new o.J("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new o.J("vvSizeFactor",(e=>e.vvSizeFactor))),i.code.add(c.H`vec2 getSize() {
return size * clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):i.code.add(c.H`vec2 getSize(){
return size;
}`),t.vvOpacity?(i.constants.add("vvOpacityNumber","int",8),i.uniforms.add([new l.O("vvOpacityValues",(e=>e.vvOpacityValues),8),new l.O("vvOpacityOpacities",(e=>e.vvOpacityOpacities),8)]),i.code.add(c.H`vec4 applyOpacity(vec4 color) {
float value = featureValue.z;
if (value <= vvOpacityValues[0]) {
return vec4( color.xyz, vvOpacityOpacities[0]);
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
}
}
return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
}`)):i.code.add(c.H`vec4 applyOpacity(vec4 color){
return color;
}`),t.vvColor?(i.constants.add("vvColorNumber","int",h.x),i.uniforms.add([new l.O("vvColorValues",(e=>e.vvColorValues),h.x),new a.b("vvColorColors",(e=>e.vvColorColors),h.x)]),i.code.add(c.H`vec4 getColor() {
float value = featureValue.y;
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):i.code.add(c.H`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),e.include(s.f),e.attributes.add(u.T.PROFILERIGHT,"vec4"),e.attributes.add(u.T.PROFILEUP,"vec4"),e.attributes.add(u.T.PROFILEVERTEXANDNORMAL,"vec4"),i.code.add(c.H`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),i.code.add(c.H`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),i.code.add(c.H`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),i.code.add(c.H`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}class p extends h.n{constructor(){super(...arguments),this.size=(0,r.f)(1,1)}}},91636:(e,t,i)=>{"use strict";i.d(t,{f:()=>n});var r=i(23410),s=i(21414);function n(e){e.attributes.add(s.T.POSITION,"vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},65915:(e,t,i)=>{"use strict";i.d(t,{U:()=>u});var r=i(43036),s=i(36444),n=i(24603),o=i(40335),a=i(23410),l=i(21414),c=i(67874);function u(e,t){const i=e.vertex;i.uniforms.add(new n.p("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.T.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new r.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new r.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new r.J("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new r.J("vvSizeFactor",(e=>e.vvSizeFactor))),i.code.add(a.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.T.SIZE,"float"),i.code.add(a.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.T.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add([new o.O("vvOpacityValues",(e=>e.vvOpacityValues),8),new o.O("vvOpacityOpacities",(e=>e.vvOpacityOpacities),8)]),i.code.add(a.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(a.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add(l.T.COLORFEATUREATTRIBUTE,"float"),i.constants.add("vvColorNumber","int",c.x),i.uniforms.add(new o.O("vvColorValues",(e=>e.vvColorValues),c.x)),i.uniforms.add(new s.b("vvColorColors",(e=>e.vvColorColors),c.x)),i.code.add(a.H`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.T.COLOR,"vec4"),i.code.add(a.H`vec4 getColor(){
return applyOpacity(color);
}`))}},92835:(e,t,i)=>{"use strict";i.d(t,{R:()=>l});var r=i(78804),s=i(59842),n=i(23410),o=i(21414),a=i(25584);function l(e,t){t.hasSymbolColors?(e.include(r.A),e.attributes.add(o.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new s._("colorMixMode",(e=>a.FZ[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82082:(e,t,i)=>{"use strict";i.d(t,{D:()=>l,N:()=>r});var r,s,n=i(27755),o=i(23410),a=i(21414);function l(e,t){switch(t.textureCoordinateType){case r.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case r.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case r.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);default:(0,n.Bg)(t.textureCoordinateType);case r.COUNT:return}}(s=r||(r={}))[s.None=0]="None",s[s.Default=1]="Default",s[s.Atlas=2]="Atlas",s[s.COUNT=3]="COUNT"},6502:(e,t,i)=>{"use strict";i.d(t,{c:()=>n});var r=i(23410),s=i(21414);function n(e,t){t.hasVertexColors?(e.attributes.add(s.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},78549:(e,t,i)=>{"use strict";i.d(t,{Bb:()=>u,Pf:()=>d,d4:()=>h});var r=i(34344),s=i(1983),n=i(90511),o=i(62295),a=i(23410),l=i(55784),c=i(11125);function u(e,t){t.normalType===n.h.Attribute||t.normalType===n.h.CompressedAttribute?(e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(a.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===n.h.Ground?(e.include(o.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?a.H`normalize(vPositionWorldCameraRelative);`:a.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.H`void forwardNormal() {}`)}class h extends o.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.c)()}}class d extends o.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,r.c)(),this.toMapSpace=(0,s.c)()}}},62295:(e,t,i)=>{"use strict";i.d(t,{OU:()=>y,su:()=>g,up:()=>m});var r=i(34344),s=i(39100),n=i(79912),o=i(8909),a=i(91636),l=i(5331),c=i(32006),u=i(43036),h=i(23410),d=i(55784),p=i(11125),f=i(87621);function m(e,t){e.include(a.f);const i=e.vertex;i.include(l.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),i.uniforms.add([new u.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new u.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new p.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),i.code.add(h.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),i.code.add(h.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?h.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:h.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new u.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),i.code.add(h.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(h.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class g extends h.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.c)(),this.transformWorldFromViewTL=(0,o.c)(),this.transformViewFromCameraRelativeRS=(0,r.c)(),this.transformProjFromView=(0,s.c)()}}class y extends h.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,r.c)(),this.transformWorldFromModelTH=(0,n.c)(),this.transformWorldFromModelTL=(0,n.c)()}}},14140:(e,t,i)=>{"use strict";i.d(t,{M:()=>s});var r=i(23410);function s(e,t){e.varyings.add("tbnTangent","vec3"),e.varyings.add("tbnBiTangent","vec3"),t.spherical?e.vertex.code.add(r.H`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`):e.vertex.code.add(r.H`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`),e.fragment.code.add(r.H`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`)}},94352:(e,t,i)=>{"use strict";i.d(t,{i:()=>a});var r=i(27755),s=i(82082),n=i(88862),o=i(23410);function a(e,t){switch(e.include(s.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case s.N.Default:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case s.N.Atlas:return e.include(n.r),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,r.Bg)(t.textureCoordinateType);case s.N.None:case s.N.COUNT:return}}},77700:(e,t,i)=>{"use strict";i.d(t,{L:()=>c,V:()=>h});var r=i(88589),s=i(1983),n=i(76774),o=i(84614),a=i(63371),l=i(23410);function c(e,t){const i=e.vertex;t.hasVerticalOffset?(h(i),t.hasScreenSizePerspective&&(e.include(n.cK),(0,n.m8)(i),(0,o.h)(e.vertex,t)),i.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):i.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,s.c)();function h(e){e.uniforms.add(new a.N("verticalOffset",((e,t)=>{const{minWorldLength:i,maxWorldLength:s,screenLength:n}=e.verticalOffset,o=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return(0,r.s)(u,n*a,o,i,s)})))}},77546:(e,t,i)=>{"use strict";i.d(t,{s:()=>y});var r=i(25714),s=i(5885),n=i(4731),o=i(90511),a=i(82082),l=i(78549),c=i(59004),u=i(55994),h=i(12664),d=i(41272),p=i(84614),f=i(93072),m=i(23410),g=i(15176);function y(e,t){const i=e.vertex.code,y=e.fragment.code,_=t.hasModelTransformation;t.output!==r.H.Depth&&t.output!==r.H.Shadow||((0,p.S)(e,t),e.include(n.w,{linearDepth:!0,hasModelTransformation:_}),e.include(a.D,t),e.include(h.k,t),e.include(c.F,t),e.include(s.f5,t),e.vertex.uniforms.add(new f.A("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new g.A("tex",(e=>e.texture))),i.add(m.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${_?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(d.z,t),y.add(m.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.H.Normal&&((0,p.S)(e,t),e.include(n.w,{linearDepth:!1,hasModelTransformation:_}),e.include(o.O,t),e.include(l.Bb,t),e.include(a.D,t),e.include(h.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new g.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),i.add(m.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===o.h.Attribute?m.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${_?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(s.f5,t),e.include(d.z,t),y.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===o.h.ScreenDerivative?m.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:m.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.H.Highlight&&((0,p.S)(e,t),e.include(n.w,{linearDepth:!1,hasModelTransformation:_}),e.include(a.D,t),e.include(h.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new g.A("tex",(e=>e.texture))),i.add(m.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${_?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(s.f5,t),e.include(d.z,t),e.include(u.bA),y.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},94728:(e,t,i)=>{"use strict";i.d(t,{H:()=>s});var r=i(23410);function s(e){const t=r.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,i=r.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}},21737:(e,t,i)=>{"use strict";i.d(t,{R:()=>m,d:()=>r});var r,s,n=i(77700),o=i(62912),a=i(76774),l=i(84614),c=i(63371),u=i(24603),h=i(23410),d=i(87621),p=i(15176),f=i(21414);function m(e,t){e.include(a.cK),e.attributes.add(f.T.POSITION,"vec3"),e.attributes.add(f.T.NORMAL,"vec3"),e.attributes.add(f.T.AUXPOS1,"vec4");const i=e.vertex;(0,l.S)(e,t),(0,l.h)(i,t),i.uniforms.add([new c.N("viewport",((e,t)=>t.camera.fullViewport)),new u.p("polygonOffset",(e=>e.shaderPolygonOffset)),new u.p("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new u.p("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===o.v.Occluded?1:t.renderTransparentlyOccludedHUD===o.v.NotOccluded?0:.75)),new p.A("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),t.hasVerticalOffset&&(0,n.V)(i),i.constants.add("smallOffsetAngle","float",.984807753012208),i.code.add(h.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(h.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped&&!t.hasVerticalOffset||i.uniforms.add(new d.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),t.isDraped||(i.uniforms.add(new u.p("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),i.code.add(h.H`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),t.screenCenterOffsetUnitsEnabled===r.Screen&&i.uniforms.add(new u.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.hasScreenSizePerspective&&(0,a.m8)(i),i.code.add(h.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled===r.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?h.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==r.Screen?h.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===r.Screen?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===r.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.code.add(h.H`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}(s=r||(r={}))[s.World=0]="World",s[s.Screen=1]="Screen",s[s.COUNT=2]="COUNT"},74319:(e,t,i)=>{"use strict";i.d(t,{R:()=>c});var r=i(6665),s=i(32078),n=i(9794),o=i(93072),a=i(23410),l=i(15176);function c(e,t){const{vertex:i,fragment:c}=e;t.hasMultipassGeometry&&i.include(s.S),t.hasMultipassTerrain&&e.varyings.add("depth","float"),i.code.add(a.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.hasMultipassGeometry?a.H`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.hasMultipassTerrain&&c.include(r.S),t.hasMultipassTerrain&&c.uniforms.add([new l.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture)),new o.A("nearFar",((e,t)=>t.camera.nearFar)),new o.A("inverseViewport",((e,t)=>t.inverseViewport))]),c.include(n.n),c.code.add(a.H`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.hasMultipassTerrain?a.H`
          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}},62912:(e,t,i)=>{"use strict";var r;i.d(t,{v:()=>r}),function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(r||(r={}))},23998:(e,t,i)=>{"use strict";var r,s;i.d(t,{MV:()=>o,iM:()=>s,pU:()=>n}),function(e){e[e.OneMinusSourceAlpha=0]="OneMinusSourceAlpha",e[e.SourceAlpha=1]="SourceAlpha",e[e.COUNT=2]="COUNT"}(r||(r={})),function(e){e[e.Normal=0]="Normal",e[e.Average=1]="Average",e[e.Lighten=2]="Lighten",e[e.Lighter=3]="Lighter",e[e.Plus=4]="Plus",e[e.Screen=5]="Screen",e[e.ColorDodge=6]="ColorDodge",e[e.Darken=7]="Darken",e[e.Multiply=8]="Multiply",e[e.ColorBurn=9]="ColorBurn",e[e.Overlay=10]="Overlay",e[e.SoftLight=11]="SoftLight",e[e.HardLight=12]="HardLight",e[e.VividLight=13]="VividLight",e[e.Hue=14]="Hue",e[e.Saturation=15]="Saturation",e[e.Luminosity=16]="Luminosity",e[e.Color=17]="Color",e[e.DestinationOver=18]="DestinationOver",e[e.DestinationAtop=19]="DestinationAtop",e[e.DestinationIn=20]="DestinationIn",e[e.DestinationOut=21]="DestinationOut",e[e.SourceAtop=22]="SourceAtop",e[e.SourceIn=23]="SourceIn",e[e.SourceOut=24]="SourceOut",e[e.Xor=25]="Xor",e[e.Difference=26]="Difference",e[e.Exclusion=27]="Exclusion",e[e.Minus=28]="Minus",e[e.Invert=29]="Invert",e[e.Reflect=30]="Reflect",e[e.COUNT=31]="COUNT"}(s||(s={}));const n={normal:s.Normal,average:s.Average,lighten:s.Lighten,lighter:s.Lighter,screen:s.Screen,plus:s.Plus,"color-dodge":s.ColorDodge,darken:s.Darken,multiply:s.Multiply,"color-burn":s.ColorBurn,overlay:s.Overlay,"soft-light":s.SoftLight,"hard-light":s.HardLight,"vivid-light":s.VividLight,hue:s.Hue,saturation:s.Saturation,luminosity:s.Luminosity,color:s.Color,difference:s.Difference,exclusion:s.Exclusion,minus:s.Minus,invert:s.Invert,reflect:s.Reflect,"destination-over":s.DestinationOver,"destination-atop":s.DestinationAtop,"destination-in":s.DestinationIn,"destination-out":s.DestinationOut,"source-atop":s.SourceAtop,"source-in":s.SourceIn,"source-out":s.SourceOut,xor:s.Xor};function o(e){return e===s.DestinationOver||e===s.DestinationAtop||e===s.DestinationIn||e===s.DestinationOut||e===s.SourceAtop||e===s.SourceIn||e===s.SourceOut||e===s.Xor}},59004:(e,t,i)=>{"use strict";i.d(t,{F:()=>o});var r=i(25714),s=i(9794),n=i(23410);function o(e,t){e.fragment.include(s.n),t.output===r.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===r.H.Depth&&e.fragment.code.add(n.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}},55994:(e,t,i)=>{"use strict";i.d(t,{bA:()=>c,ck:()=>l}),i(69666);var r=i(1983),s=i(93072),n=i(23410),o=i(15176);const a=(0,r.f)(1,1,0,1),l=(0,r.f)(1,0,1,1);function c(e){e.fragment.uniforms.add(new o.A("depthTex",((e,t)=>t.highlightDepthTexture))),e.fragment.uniforms.add(new s.A("highlightViewportPixelSz",((e,t)=>t.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",l),e.fragment.code.add(n.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}},6665:(e,t,i)=>{"use strict";i.d(t,{S:()=>n});var r=i(9794),s=i(23410);function n(e){e.include(r.n),e.code.add(s.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},35434:(e,t,i)=>{"use strict";i.d(t,{i:()=>o});var r=i(24603),s=i(23410),n=i(15176);function o(e){e.fragment.uniforms.add([new n.A("u_colormap",(e=>e.u_colormap)),new r.p("u_colormapOffset",(e=>e.colormap.u_colormapOffset)),new r.p("u_colormapMaxIndex",(e=>e.colormap.u_colormapMaxIndex)),new r.p("u_opacity",(e=>e.common.u_opacity))]),e.fragment.code.add(s.H`vec4 colormap(vec4 currentPixel, bool isFloat) {
float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
result = texture2D(u_colormap, clrPosition);
}
return result;
}`)}},45979:(e,t,i)=>{"use strict";i.d(t,{G:()=>u,J:()=>c});var r=i(93072),s=i(23410),n=i(15176);function o(e){e.fragment.uniforms.add(new n.A("u_transformGrid",(e=>e.u_transformGrid))),e.fragment.uniforms.add(new r.A("u_transformSpacing",(e=>e.common.u_transformSpacing))),e.fragment.uniforms.add(new r.A("u_transformGridSize",(e=>e.common.u_transformGridSize))),e.fragment.uniforms.add(new r.A("u_targetImageSize",(e=>e.common.u_targetImageSize))),e.fragment.code.add(s.H`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;;
}`)}var a=i(73721),l=i(71278);class c extends a.R{constructor(e,t,i){super(),this.common=e,this.u_image=t,this.u_transformGrid=i}}function u(e){e.include(o),e.fragment.uniforms.add([new n.A("u_image",(e=>e.u_image)),new l.U("u_flipY",(e=>e.common.u_flipY)),new l.U("u_applyTransform",(e=>e.common.u_applyTransform))]),e.fragment.code.add(s.H`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
return texture2D(u_image, pixelLocation);
}`)}},16220:(e,t,i)=>{"use strict";i.d(t,{P:()=>l});var r=i(6502),s=i(27452),n=i(40622),o=i(90261),a=i(23410);function l(e,t){e.include(r.c,t),e.fragment.include(s.y);const i=e.fragment;i.uniforms.add(new n.$("baseColor",(e=>e.baseColor))),i.uniforms.add(new o.p("objectOpacity",(e=>e.objectOpacity))),t.hasVertexColors?i.code.add(a.H`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):i.code.add(a.H`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`),i.code.add(a.H`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)}},3417:(e,t,i)=>{"use strict";i.d(t,{Q:()=>h});var r=i(82082),s=i(94352),n=i(2833),o=i(23410),a=i(37649),l=i(15176),c=i(40017),u=i(21414);function h(e,t){const i=e.fragment;if(t.hasVertexTangents?(e.attributes.add(u.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?i.code.add(o.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(o.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(o.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==r.N.None){e.include(s.i,t);const r=t.supportsTextureAtlas;i.uniforms.add(t.pbrTextureBindType===c.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),r):(0,a.F)("normalTexture",(e=>e.textureNormal),r)),i.code.add(o.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},91489:(e,t,i)=>{"use strict";i.d(t,{B:()=>c});var r=i(27755),s=i(90511),n=i(78549),o=i(62295),a=i(2833),l=i(23410);function c(e,t){const i=e.fragment;switch(t.doubleSidedMode){case a.q.None:i.code.add(l.H`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case a.q.View:e.include(o.up,t),i.code.add(l.H`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case a.q.WindingOrder:i.code.add(l.H`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:(0,r.Bg)(t.doubleSidedMode);case a.q.COUNT:}switch(t.normalType){case s.h.Attribute:case s.h.CompressedAttribute:e.include(n.Bb,t),i.code.add(l.H`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);break;case s.h.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.include(o.up,t),i.code.add(l.H`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);break;case s.h.Ground:t.spherical?(e.include(o.up,t),i.code.add(l.H`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)):i.code.add(l.H`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`),e.extensions.add("GL_OES_standard_derivatives"),i.code.add(l.H`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);break;default:(0,r.Bg)(t.normalType);case s.h.COUNT:}}},77787:(e,t,i)=>{"use strict";i.d(t,{_:()=>h});var r=i(6766),s=i(8909),n=i(88589),o=i(1983),a=i(3864),l=i(43036),c=i(63371),u=i(23410);function h(e,t){const i=e.fragment,s=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===s?(i.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(d,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===s?(i.uniforms.add([new c.N("lightingAmbientSH_R",((e,t)=>(0,n.s)(p,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.N("lightingAmbientSH_G",((e,t)=>(0,n.s)(p,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.N("lightingAmbientSH_B",((e,t)=>(0,n.s)(p,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===s&&(i.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(d,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.N("lightingAmbientSH_R1",((e,t)=>(0,n.s)(p,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.N("lightingAmbientSH_G1",((e,t)=>(0,n.s)(p,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.N("lightingAmbientSH_B1",((e,t)=>(0,n.s)(p,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.N("lightingAmbientSH_R2",((e,t)=>(0,n.s)(p,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.N("lightingAmbientSH_G2",((e,t)=>(0,n.s)(p,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.N("lightingAmbientSH_B2",((e,t)=>(0,n.s)(p,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||i.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const d=(0,s.c)(),p=(0,o.c)()},30786:(e,t,i)=>{"use strict";i.d(t,{K:()=>l});var r=i(88589),s=i(1983),n=i(63371),o=i(23410),a=i(15176);function l(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add([new a.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new n.N("viewportPixelSz",((e,t)=>(0,r.s)(c,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),i.code.add(o.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):i.code.add(o.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const c=(0,s.c)()},24623:(e,t,i)=>{"use strict";i.d(t,{X:()=>f});var r=i(77787),s=i(30786),n=i(58749),o=i(89585),a=i(3864),l=i(95509),c=i(71278),u=i(43036),h=i(24603),d=i(23410),p=i(39501);function f(e,t){const i=e.fragment;e.include(s.K,t),t.pbrMode!==a.f7.Disabled&&e.include(o.T,t),e.include(r._,t),i.constants.add("ambientBoostFactor","float",p.V),e.include(l.e),i.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===a.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.uniforms.add(new u.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),i.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.uniforms.add([new h.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new u.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===a.f7.Disabled||t.pbrMode===a.f7.WaterOnIntegratedMesh?(e.include(n.k,t),i.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(i.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?i.uniforms.add(new c.U("hasFillLights",((e,t)=>t.enableFillLights))):i.constants.add("hasFillLights","bool",!1),i.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.uniforms.add([new h.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new h.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),i.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===a.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},98016:(e,t,i)=>{"use strict";i.d(t,{E:()=>n,K:()=>s});var r=i(23410);function s(e){e.fragment.code.add(r.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function n(e){e.fragment.code.add(r.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},76203:(e,t,i)=>{"use strict";i.d(t,{D:()=>s});var r=i(23410);function s(e){e.fragment.code.add(r.H`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}},37009:(e,t,i)=>{"use strict";i.d(t,{q:()=>m});var r=i(9794),s=i(84614),n=i(63371),o=i(24603),a=i(39820),l=i(23410),c=i(57663),u=i(61681),h=i(88589),d=i(1983);function p(e){return(0,u.Wi)(e)?d.Z:4===e.length?e:(0,h.s)(f,e[0],e[1],e[2],1)}const f=(0,d.c)();function m(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?g(e,t):function(e){e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function g(e,t){const i=!(t.draped&&t.stipplePreferContinuous),{vertex:u,fragment:h}=e;h.include(r.n),u.uniforms.add(new a.d("stipplePatternPixelSize")),t.draped||((0,s.h)(u,t),u.uniforms.add(new o.p("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),u.code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),t.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),t.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),u.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${y};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),u.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),u.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),u.uniforms.add(new o.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),u.code.add(l.H`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${t.stippleRequiresStretchMeasure?l.H`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),h.uniforms.add(new c.Q("stipplePatternTexture")),h.uniforms.add(new a.d("stipplePatternSDFNormalizer")),h.uniforms.add(new a.d("stipplePatternTextureSize")),h.uniforms.add(new a.d("stipplePatternPixelSizeInv")),h.code.add(l.H`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),h.code.add(l.H`
    float getStippleSDF(out bool isClamped) {
      ${t.stippleRequiresClamp?l.H`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:l.H`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${t.stippleScaleWithLineWidth?l.H`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${t.stippleRequiresStretchMeasure?l.H`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:l.H`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${t.stippleScaleWithLineWidth?l.H`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:l.H`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),t.stippleOffColorEnabled?(h.uniforms.add(new n.N("stippleOffColor",(e=>p(e.stippleOffColor)))),h.code.add(l.H`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):h.code.add(l.H`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}const y=l.H.float(.4)},58749:(e,t,i)=>{"use strict";i.d(t,{k:()=>o});var r=i(43036),s=i(24603),n=i(23410);function o(e,t){const i=e.fragment;t.isGround?i.uniforms.add(new s.p("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):i.constants.add("lightingFixedFactor","float",0),i.uniforms.add([new r.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new r.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}},32078:(e,t,i)=>{"use strict";i.d(t,{S:()=>a,_:()=>l});var r=i(6665),s=i(93072),n=i(23410),o=i(15176);function a(e){e.include(r.S),e.uniforms.add([new o.A("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),e.code.add(n.H`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class l{constructor(){this.enabled=!1}}},73393:(e,t,i)=>{"use strict";i.d(t,{a:()=>l,l:()=>a});var r=i(6665),s=i(93072),n=i(23410),o=i(15176);function a(e,t){t.hasMultipassTerrain&&(e.fragment.include(r.S),e.fragment.uniforms.add(new o.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new s.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new s.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class l{constructor(){this.enabled=!1,this.cullAboveGround=!1}}},37451:(e,t,i)=>{"use strict";i.d(t,{n:()=>s});var r=i(23410);function s(e,t){t.spherical?e.vertex.code.add(r.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(r.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),t.spherical?e.vertex.code.add(r.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(r.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}},2833:(e,t,i)=>{"use strict";i.d(t,{k:()=>a,q:()=>r});var r,s,n=i(27755),o=i(23410);function a(e,t){const i=e.fragment;switch(i.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case r.COUNT:}}(s=r||(r={}))[s.None=0]="None",s[s.View=1]="View",s[s.WindingOrder=2]="WindingOrder",s[s.COUNT=3]="COUNT"},89585:(e,t,i)=>{"use strict";i.d(t,{T:()=>a});var r=i(23410);function s(e){const t=e.fragment.code;t.add(r.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=i(3864),o=i(95509);function a(e,t){const i=e.fragment.code;e.include(o.e),t.pbrMode===n.f7.Water||t.pbrMode===n.f7.WaterOnIntegratedMesh?(i.add(r.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(r.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(e.include(s),i.add(r.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(r.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3864:(e,t,i)=>{"use strict";i.d(t,{Fw:()=>h,f7:()=>d,jV:()=>f});var r=i(79912),s=i(94352),n=i(32006),o=i(43036),a=i(23410),l=i(37649),c=i(15176),u=i(40017);i(80776);const h=(0,r.f)(0,.6,.2);var d,p;function f(e,t){const i=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===d.Normal&&r&&e.include(s.i,t),t.pbrMode!==d.Schematic)if(t.pbrMode!==d.Disabled){if(t.pbrMode===d.Normal){i.code.add(a.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,s=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add(s===u.P.Pass?(0,c.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),i.code.add(a.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add(s===u.P.Pass?(0,c.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),i.code.add(a.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add(s===u.P.Pass?(0,c.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),i.code.add(a.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(a.H`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(s===u.P.Pass?[new o.J("emissionFactor",(e=>e.emissiveFactor)),new o.J("mrrFactors",(e=>e.mrrFactors))]:[new n.B("emissionFactor",(e=>e.emissiveFactor)),new n.B("mrrFactors",(e=>e.mrrFactors))]),i.code.add(a.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else i.code.add(a.H`float getBakedOcclusion() { return 1.0; }`);else i.code.add(a.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}(p=d||(d={}))[p.Disabled=0]="Disabled",p[p.Normal=1]="Normal",p[p.Schematic=2]="Schematic",p[p.Water=3]="Water",p[p.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",p[p.COUNT=5]="COUNT"},95509:(e,t,i)=>{"use strict";i.d(t,{e:()=>s});var r=i(23410);function s(e){e.vertex.code.add(r.H`const float PI = 3.141592653589793;`),e.fragment.code.add(r.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},14351:(e,t,i)=>{"use strict";i.d(t,{s:()=>l});var r=i(82082),s=i(94352),n=i(88862),o=i(23410),a=i(37649);function l(e,t){const i=e.fragment;if(t.hasBaseColorTexture){e.include(s.i,t);const l=t.textureCoordinateType===r.N.Atlas;i.uniforms.add((0,a.F)("baseColorTexture",(e=>e.texture),l)),l?(e.include(n.r),i.code.add(o.H`vec4 readBaseColorTexture() {
return textureAtlasLookup(baseColorTexture, baseColorTextureSize, vuv0, vuvRegion);
}`)):i.code.add(o.H`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)}else i.code.add(o.H`vec4 readBaseColorTexture() { return vec4(1.0); }`)}},45416:(e,t,i)=>{"use strict";i.d(t,{ry:()=>p,XE:()=>m,hb:()=>f});var r=i(8909),s=i(9794),n=i(63371),o=i(24603),a=i(59842),l=i(23410),c=i(91013),u=i(40017);class h extends c.x{constructor(e,t,i,r){switch(t){case u.P.Pass:case u.P.Draw:return void super(e,"mat4",t,((t,r,s)=>t.setUniformMatrix4fv(e,i(r,s))),r)}}}var d=i(15176);class p extends l.K{constructor(){super(...arguments),this.origin=(0,r.c)()}}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new h("shadowMapMatrix",u.P.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new h("shadowMapMatrix",u.P.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e))}function g(e){const t=e.fragment;t.include(s.n),t.uniforms.add([new d.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new o.p("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(l.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}},29594:(e,t,i)=>{"use strict";i.d(t,{O:()=>h,P:()=>u});var r=i(39100),s=i(6665),n=i(93072),o=i(24603),a=i(23410),l=i(87621),c=i(15176);function u(e,t){const i=e.fragment.uniforms;i.add(new n.A("nearFar",((e,t)=>t.camera.nearFar))),i.add(new c.A("depthMap",((e,t)=>t.linearDepthTexture))),i.add(new l.g("view",((e,t)=>t.ssr.camera.viewMatrix))),i.add(new l.g("proj",((e,t)=>t.ssr.camera.projectionMatrix))),i.add(new o.p("invResolutionHeight",((e,t)=>1/t.ssr.camera.height))),i.add(new c.A("lastFrameColorMap",((e,t)=>t.ssr.lastFrameColorTexture))),i.add(new l.g("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))),e.fragment.include(s.S),e.fragment.code.add(a.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class h{constructor(){this.reprojectionMatrix=(0,r.c)()}}},12664:(e,t,i)=>{"use strict";i.d(t,{k:()=>u});var r=i(43036),s=i(36444),n=i(40335),o=i(23410),a=i(11125),l=i(21414),c=i(67874);function u(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(l.T.INSTANCEFEATUREATTRIBUTE,"vec4");const i=e.vertex;t.vvSize?(i.uniforms.add(new r.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new r.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new r.J("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new r.J("vvSizeFactor",(e=>e.vvSizeFactor))),i.uniforms.add(new a.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),i.uniforms.add(new r.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),i.code.add(o.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),i.code.add(o.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?o.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):i.code.add(o.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(i.constants.add("vvColorNumber","int",c.x),t.hasVvInstancing&&i.uniforms.add([new n.O("vvColorValues",(e=>e.vvColorValues),c.x),new s.b("vvColorColors",(e=>e.vvColorColors),c.x)]),i.code.add(o.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?o.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):i.code.add(o.H`vec4 vvColor() { return vec4(1.0); }`)}},81049:(e,t,i)=>{"use strict";i.d(t,{B:()=>u});var r=i(98016),s=i(76203),n=i(89585),o=i(29594),a=i(86589),l=i(24603),c=i(23410);function u(e,t){e.include(n.T,t),e.include(s.D),e.include(r.E),t.hasCloudsReflections&&e.include(a.j,t),t.hasScreenSpaceReflections&&e.include(o.P,t);const i=e.fragment;i.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),i.code.add(c.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),i.uniforms.add([new l.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new l.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),i.code.add(c.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.hasCloudsReflections&&i.code.add(c.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),t.hasScreenSpaceReflections?i.code.add(c.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view *vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`):i.code.add(c.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.hasCloudsReflections?t.hasScreenSpaceReflections?i.code.add(c.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):i.code.add(c.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):i.code.add(c.H`return waterRenderedColor;
}`)}},18995:(e,t,i)=>{"use strict";i.d(t,{M:()=>d});var r=i(55709),s=i(69666),n=i(88589),o=i(1983),a=i(98016),l=i(93072),c=i(63371),u=i(23410),h=i(57663);function d(e){e.fragment.uniforms.add(new h.Q("texWaveNormal")),e.fragment.uniforms.add(new h.Q("texWavePerturbation")),e.fragment.uniforms.add([new c.N("waveParams",(e=>(0,n.s)(p,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new l.A("waveDirection",(e=>(0,r.a)(f,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))]),e.include(a.K),e.fragment.code.add(u.H`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const p=(0,o.c)(),f=(0,s.a)()},61296:(e,t,i)=>{"use strict";i.d(t,{H:()=>s});var r=i(23410);function s(e){e.code.add(r.H`
    float lineFactorAtPosition(float value) {
      float pos = value * ${r.H.float(257)};
      if(pos < 0.5 || pos > ${r.H.float(256.5)}) {
        return 1.0;
      }

      pos = pos + 0.5;
      float modulo = mod(pos, 16.0);
      return modulo <= 2.0 ?  1.0 - abs(modulo - 1.0) : 0.0;
    }

    float lineFactorAtUV(vec2 uv) {
      return max(lineFactorAtPosition(uv.x), lineFactorAtPosition(uv.y));
    }

    float lineFactor(vec2 uv) {
      vec2 offset = fwidth(uv) * 0.25;
      return (lineFactorAtUV(vec2(uv.x + offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x + offset.x, uv.y - offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y - offset.y))) / 4.0;
    }

    vec4 gridColor(vec2 uv) {
      float line = lineFactor(uv) * 0.1 + 0.9;
      return vec4(vec3(1.0, 0.972, 0.918) * line, 1.0);
    }`)}},97582:(e,t,i)=>{"use strict";i.d(t,{Tw:()=>w,WB:()=>v,gT:()=>r,uS:()=>y,yl:()=>_});var r,s,n=i(1983),o=i(24568),a=i(9812),l=i(17e3),c=i(3864),u=i(81049),h=i(43036),d=i(40622),p=i(62869),f=i(24603),m=i(23410),g=i(15176);(s=r||(r={}))[s.Disabled=0]="Disabled",s[s.Enabled=1]="Enabled",s[s.EnabledWithWater=2]="EnabledWithWater",s[s.COUNT=3]="COUNT";class y extends m.K{constructor(){super(...arguments),this.overlayOpacity=1}}function _(e,t){e.vertex.uniforms.add([new p.y("overlayTexOffset"),new p.y("overlayTexScale")]),e.fragment.uniforms.add([new f.p("overlayOpacity",(e=>e.overlayOpacity)),new g.A("ovColorTex",((e,t)=>0===t.overlays.length?null:t.overlays[a.fu.INNER].getColorTexture(e.overlaySource)))]),b(e,t)}function v(e,t){const{vertex:i,fragment:r}=e;i.uniforms.add([new d.$("overlayTexOffset",((e,t)=>function(e,t){for(const i of t.overlays){const{index:t,extent:r}=i;(0,o.SO)(r)>0&&(x[2*t]=e.toMapSpace[0]/(0,o.bf)(r)-r[0]/(0,o.bf)(r),x[2*t+1]=e.toMapSpace[1]/(0,o.Cb)(r)-r[1]/(0,o.Cb)(r))}return x}(e,t))),new d.$("overlayTexScale",((e,t)=>function(e,t){for(const i of t.overlays){const{index:t,extent:r}=i;(0,o.SO)(r)>0&&(x[2*t]=e.toMapSpace[2]/(0,o.bf)(r),x[2*t+1]=e.toMapSpace[3]/(0,o.Cb)(r))}return x}(e,t)))]),r.constants.add("overlayOpacity","float",1),r.uniforms.add(new g.A("ovColorTex",((e,t)=>w(e,t)))),b(e,t)}function b(e,t){e.extensions.add("GL_OES_standard_derivatives"),t.pbrMode!==c.f7.Water&&t.pbrMode!==c.f7.WaterOnIntegratedMesh||e.include(u.B,t);const{vertex:i,fragment:r}=e;e.varyings.add("vtcOverlay","vec4"),i.code.add(m.H`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),r.code.add(m.H`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),r.code.add(m.H`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),t.pbrMode!==c.f7.Water&&t.pbrMode!==c.f7.WaterOnIntegratedMesh||(r.uniforms.add([new h.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new h.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),r.code.add(m.H`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, lightingMainDirection, colorInput.rgb, lightingMainIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function w(e,t){return 0===t.overlays.length?null:e.identifier===l.o9.Material&&e.subPass===l.zp.Color?t.overlays[a.fu.INNER].getColorTextureNoRasterImage():e.identifier===l.o9.Highlight?t.overlays[a.fu.INNER].getValidTexture(a.NH.Highlight):null}const x=(0,n.c)()},47096:(e,t,i)=>{"use strict";i.d(t,{E:()=>u});var r=i(61296),s=i(52191),n=i(96371),o=i(62869),a=i(39820),l=i(23410),c=i(57663);function u(e,t){e.varyings.add("vtc","vec2"),e.vertex.uniforms.add(new o.y("texOffsetAndScale")),e.fragment.uniforms.add(new c.Q("tex")),e.fragment.uniforms.add(new n.K("textureOpacities"));const i=t.textureFadingEnabled&&!t.renderOccluded;i&&(e.vertex.uniforms.add(new o.y("nextTexOffsetAndScale")),e.varyings.add("nvtc","vec2"),e.fragment.uniforms.add(new c.Q("texNext")),e.fragment.uniforms.add(new n.K("nextTexOpacities")),e.fragment.uniforms.add(new a.d("fadeFactor")));const u=t.tileBlendInput===s.R.ColorComposite,h=t.tileBlendInput===s.R.GridComposite;h&&e.fragment.include(r.H),u&&e.fragment.uniforms.add(new n.K("backgroundColor")),e.vertex.code.add(l.H`
  void forwardTextureCoordinates(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${i?l.H`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:l.H``}
  }`),e.fragment.code.add(l.H`
    vec4 applyBaseOpacity(vec4 _color, vec3 _opacities) {
      return _opacities.z <= 0.0 ? _color : _color * _opacities.x;
    }

    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${h||u?l.H`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = ${u?l.H`vec4(backgroundColor, 1.0)`:l.H`gridColor(uv)`} * opacities.y;
              float alpha = opacities.z * color.a;
              return mix(bg, color, alpha) * opacities.x;`:l.H`return color;`}
    }`),i?e.fragment.code.add(l.H`vec4 getTileColor() {
vec4 color = getColor(texture2D(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture2D(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):e.fragment.code.add(l.H`vec4 getTileColor() {
return getColor(texture2D(tex, vtc), vtc, textureOpacities);
}`)}},52191:(e,t,i)=>{"use strict";var r;i.d(t,{R:()=>r}),function(e){e[e.LayerOnly=0]="LayerOnly",e[e.ColorComposite=1]="ColorComposite",e[e.GridComposite=2]="GridComposite",e[e.COUNT=3]="COUNT"}(r||(r={}))},73721:(e,t,i)=>{"use strict";i.d(t,{R:()=>l,T:()=>c});var r=i(69666),s=i(93072),n=i(24603),o=i(23410),a=i(21414);class l extends o.K{constructor(){super(...arguments),this.scale=1,this.offset=r.Z}}function c(e){e.attributes.add(a.T.POSITION,"vec2"),e.attributes.add(a.T.UV0,"vec2"),e.vertex.uniforms.add(new n.p("scale",(e=>e.scale))),e.vertex.uniforms.add(new s.A("offset",(e=>e.offset))),e.varyings.add("uv","vec2"),e.varyings.add("vuv","vec2"),e.vertex.code.add(o.H`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)}},44391:(e,t,i)=>{"use strict";i.d(t,{F:()=>r,b:()=>s});const r=.1,s=.001},41272:(e,t,i)=>{"use strict";i.d(t,{o:()=>c,z:()=>l});var r=i(97706),s=i(90261),n=i(24603),o=i(23410),a=i(70984);function l(e,t){u(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t){u(e,t,new s.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function u(e,t,i){const s=e.fragment;switch(t.alphaDiscardMode!==a.JJ.Mask&&t.alphaDiscardMode!==a.JJ.MaskBlend||s.uniforms.add(i),t.alphaDiscardMode){case a.JJ.Blend:return e.include(r.f);case a.JJ.Opaque:s.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case a.JJ.Mask:s.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case a.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},78541:(e,t,i)=>{"use strict";i.d(t,{d:()=>n});var r=i(23998),s=i(23410);function n(e,t){const i=t.blendMode;i!==r.iM.Normal&&(i===r.iM.Reflect&&e.code.add(s.H`float reflectBlend(in float cb, in float cl) {
return (cl == 1.0) ? cl : min(cb * cb / (1.0 - cl), 1.0);
}`),i!==r.iM.ColorDodge&&i!==r.iM.VividLight||e.code.add(s.H`float colorDodge(in float cb, in float cl) {
return (cb == 0.0) ? 0.0 : (cl == 1.0) ? 1.0 : min(1.0, cb / (1.0 - cl));
}`),i!==r.iM.ColorBurn&&i!==r.iM.VividLight||e.code.add(s.H`float colorBurn(in float cb, in float cl) {
return (cb == 1.0) ? 1.0 : (cl == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - cb) / cl);
}`),i===r.iM.Overlay&&e.code.add(s.H`float overlay(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (1.0 - 2.0 * (1.0 - cl ) * (1.0 - cb)) + step(0.5, cl) * (2.0 * cl * cb);
}`),i===r.iM.HardLight&&e.code.add(s.H`float hardLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (2.0 * cl * cb) + step(0.5, cl) * (1.0 - 2.0 * (1.0 - cl) * (1.0 - cb));
}`),i===r.iM.SoftLight&&e.code.add(s.H`float softLight(in float cb, in float cl) {
if (cl <= 0.5) {
return cb - (1.0 - 2.0 * cl) * cb * (1.0 - cb);
}
if (cb <= 0.25) {
return cb + (2.0 * cl - 1.0) * cb * ((16.0 * cb - 12.0) * cb + 3.0);
}
return cb + (2.0 * cl - 1.0) * (sqrt(cb) - cb);
}`),i===r.iM.VividLight&&e.code.add(s.H`float vividLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * colorBurn(cb, 2.0 * cl) + step(0.5, cl) * colorDodge(cb, (2.0 * (cl - 0.5)));
}`),i!==r.iM.Hue&&i!==r.iM.Saturation&&i!==r.iM.Color&&i!==r.iM.Luminosity||(e.code.add(s.H`float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
return clipColor(cbase + vec3(lumv3(clum) - lumv3(cbase)));
}`),i!==r.iM.Hue&&i!==r.iM.Saturation||e.code.add(s.H`float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
return setLum(sbase > 0.0 ? (cbase - minbase) * ssat / sbase : vec3(0.0), clum);
}`)),e.code.add(s.H`
    vec4 applyBlendMode(vec3 cl, float ol, vec3 cb, float ob) {
      ${i===r.iM.Multiply?s.H`return vec4(cl * ol * cb * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Average?s.H`return vec4((cb + cl) * 0.5 * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Lighten?s.H`return vec4(max(cb, cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Darken?s.H`return vec4(min(cl, cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Lighter?s.H`return vec4(cl * ol + cb * ob, ol + ob);`:i===r.iM.Plus?s.H`return clamp(vec4(cl.rgb + cb.rgb, ol + ob), 0.0, 1.0);`:i===r.iM.Minus?s.H`return vec4(clamp(vec3(cb.rgb - cl.rgb), 0.0, 1.0), ob * ol);`:i===r.iM.Screen?s.H`return vec4((cl + cb - cl * cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Difference?s.H`return vec4(abs(cb - cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Invert?s.H`return vec4((1.0 - cb) * ol * ob + cb * ob * (1.0 - ol), ob);`:i===r.iM.DestinationOver?s.H`return vec4(cl * ol * (1.0 - ob) + cb * ob, ol + ob - ol * ob);`:i===r.iM.DestinationAtop?s.H`return vec4(cl * ol * (1.0 - ob) + cb * ob * ol, ol);`:i===r.iM.DestinationOut?s.H`return vec4(cb * ob * (1.0 - ol), ob * (1.0 - ol));`:i===r.iM.SourceAtop?s.H`return vec4(cl * ol * ob + cb * ob * (1.0 - ol), ob);`:i===r.iM.SourceOut?s.H`return vec4(cl * ol * (1.0 - ob), ol * (1.0 - ob));`:i===r.iM.Xor?s.H`return vec4(cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), ol * (1.0 - ob) + ob * (1.0 - ol));`:i===r.iM.DestinationIn?s.H`return vec4(cb * ob * ol, ol * ob);`:i===r.iM.SourceIn?s.H`return vec4(cl * ol * ob, ol * ob);`:i===r.iM.Hue?s.H`
          vec3 f = setLumSat(cl, cb, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Saturation?s.H`
          vec3 f = setLumSat(cb, cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Color?s.H`
          vec3 f = setLum(cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Luminosity?s.H`
          vec3 f = setLum(cb, cl);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Exclusion?s.H`
          vec3 f = cl + cb - 2.0 * cl * cb;
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Reflect?s.H`
          vec3 f = vec3(reflectBlend(cb.r, cl.r), reflectBlend(cb.g, cl.g), reflectBlend(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.ColorDodge?s.H`
          vec3 f = vec3(colorDodge(cb.r, cl.r), colorDodge(cb.g, cl.g), colorDodge(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.ColorBurn?s.H`
          vec3 f = vec3(colorBurn(cb.r, cl.r), colorBurn(cb.g, cl.g), colorBurn(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.Overlay?s.H`
          vec3 f = vec3(overlay(cb.r, cl.r), overlay(cb.g, cl.g), overlay(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.SoftLight?s.H`
          vec3 f = vec3(softLight(cb.r, cl.r), softLight(cb.g, cl.g), softLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.HardLight?s.H`
          vec3 f = vec3(hardLight(cb.r, cl.r), hardLight(cb.g, cl.g), hardLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:i===r.iM.VividLight?s.H`
          vec3 f = vec3(vividLight(cb.r, cl.r), vividLight(cb.g, cl.g), vividLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:s.H``}
    }
  `))}},77334:(e,t,i)=>{"use strict";i.d(t,{G:()=>u,R:()=>d});var r=i(55709),s=i(69666),n=i(88589),o=i(1983),a=i(93072),l=i(63371),c=i(23410);function u(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(h,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(h,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new a.A("zScale",((e,t)=>d(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const h=(0,o.c)();function d(e){return 0===e.camera.projectionMatrix[11]?(0,r.a)(p,0,1):(0,r.a)(p,1,0)}const p=(0,s.a)()},86589:(e,t,i)=>{"use strict";i.d(t,{j:()=>_});var r=i(19431),s=i(61681),n=i(55709),o=i(69666),a=i(14260),l=i(57425),c=i(71278),u=i(93072),h=i(43036),d=i(24603),p=i(23410),f=i(87621),m=i(91013),g=i(40017);class y extends m.x{constructor(e,t){super(e,"samplerCube",g.P.Pass,((i,r,s)=>i.bindTexture(e,t(r,s))))}}function _(e){const t=e.fragment;t.uniforms.add([new f.g("rotationMatrixClouds",((e,t)=>t.clouds.parallax.transform)),new f.g("rotationMatrixCloudsCrossFade",((e,t)=>t.clouds.parallaxNew.transform)),new h.J("anchorPosition",((e,t)=>t.clouds.parallax.anchorPointClouds)),new h.J("anchorPositionCrossFade",((e,t)=>t.clouds.parallaxNew.anchorPointClouds)),new u.A("cloudVariables",((e,t)=>(0,s.pC)(t.clouds.data)?(0,n.a)(v,t.clouds.data.coverage,t.clouds.data.absorption):o.Z)),new d.p("cloudsHeight",((e,t)=>t.clouds.parallax.cloudsHeight)),new d.p("radiusCurvatureCorrectionFactor",((e,t)=>t.clouds.parallax.radiusCurvatureCorrectionFactor)),new d.p("totalFadeInOut",((e,t)=>t.clouds.fadeInOut.stage===l.co.FINISHED?t.clouds.fadeInOutHeight.factor+Math.max((0,r.uZ)(t.clouds.fadeIn.factor,0,1)):t.clouds.fadeInOutHeight.factor+Math.max((0,r.uZ)(t.clouds.fadeInOut.factor,0,1)))),new d.p("crossFadeAnchorFactor",((e,t)=>(0,r.uZ)(t.clouds.crossFade.factor,0,1))),new y("cubeMap",((e,t)=>(0,s.pC)(t.clouds.data)?t.clouds.data.cubeMap.colorTexture:null)),new c.U("crossFade",((e,t)=>t.clouds.crossFade.enabled))]),t.constants.add("planetRadius","float",a.sv.radius),t.code.add(p.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),t.code.add(p.H`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),t.code.add(p.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),t.uniforms.add([new h.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new h.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.code.add(p.H`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),t.code.add(p.H`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`),t.code.add(p.H`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),t.code.add(p.H`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),t.code.add(p.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}const v=(0,o.a)()},32394:(e,t,i)=>{"use strict";i.d(t,{Y:()=>s});var r=i(23410);function s(e){e.code.add(r.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}},97706:(e,t,i)=>{"use strict";i.d(t,{f:()=>n});var r=i(44391),s=i(23410);function n(e){e.fragment.code.add(s.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.H.float(r.b)}) { discard; } }
  `)}},5331:(e,t,i)=>{"use strict";i.d(t,{$:()=>n,I:()=>o});var r=i(39994),s=i(23410);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function o(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},94283:(e,t,i)=>{"use strict";i.d(t,{U:()=>r,j:()=>o});var r,s,n=i(35925);function o(e){return e&&(0,n.BZ)(e)?r.Mars:e&&(0,n.V2)(e)?r.Moon:r.Earth}(s=r||(r={}))[s.Earth=1]="Earth",s[s.Mars=2]="Mars",s[s.Moon=3]="Moon",s[s.COUNT=4]="COUNT"},78115:(e,t,i)=>{"use strict";i.d(t,{a:()=>o});var r=i(25714),s=i(23410),n=i(6174);function o(e,t){const i=s.H`
  /*
  *  ${t.name}
  *  ${t.output===r.H.Color?"RenderOutput: Color":t.output===r.H.Depth?"RenderOutput: Depth":t.output===r.H.Shadow?"RenderOutput: Shadow":t.output===r.H.Normal?"RenderOutput: Normal":t.output===r.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,n.CG)()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},27452:(e,t,i)=>{"use strict";i.d(t,{y:()=>o});var r=i(66352),s=i(32394),n=i(23410);function o(e){e.include(s.Y),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},9794:(e,t,i)=>{"use strict";i.d(t,{n:()=>s});var r=i(23410);function s(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},76774:(e,t,i)=>{"use strict";i.d(t,{cK:()=>a,m8:()=>c,ww:()=>l});var r=i(88589),s=i(1983),n=i(63371),o=i(23410);function a(e){e.vertex.code.add(o.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(o.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(o.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(o.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(o.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new n.N("screenSizePerspective",(e=>u(e.screenSizePerspective))))}function c(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>u(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function u(e){return(0,r.s)(h,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const h=(0,s.c)()},88862:(e,t,i)=>{"use strict";i.d(t,{r:()=>s});var r=i(23410);function s(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
{
return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}`;e.code.add(t)}var o=i(93072),a=i(11125),l=i(87621),c=i(67948);const u=(0,r.f)(.5,-4e-4);function h(e,t){const i=e.vertex;i.include(n),i.constants.add("depthBias","vec2",u),i.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),t.legacy?(i.uniforms.add(new c.B("localView")),i.uniforms.add(new l.g("proj",((e,t)=>t.camera.projectionMatrix))),i.code.add(s.H`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(i.uniforms.add(new a.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),i.uniforms.add(new l.g("transformProjFromView",(e=>e.transformProjFromView))),i.code.add(s.H`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)),i.code.add(s.H`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)}},57057:(e,t,i)=>{"use strict";i.d(t,{S:()=>s});var r=i(23410);function s(e,t){const i=e.fragment;i.constants.add("coverageTestThreshold","float",.01),t.antialiasing?i.code.add(r.H`#define discardByCoverage(radius, coverage) { if (coverage < coverageTestThreshold) discard; }`):i.code.add(r.H`#define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? coverageTestThreshold : 0.75; if (coverage < coverageLimit) discard; }`)}},63922:(e,t,i)=>{"use strict";i.d(t,{o:()=>s});var r=i(23410);function s(e,t){const i=e.vertex;t.silhouette?(i.code.add(r.H`bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
float faceAVisible = dot(viewDir, normalA);
float faceBVisible = dot(viewDir, normalB);
return faceAVisible * faceBVisible < 0.0;
}`),t.legacy?i.code.add(r.H`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
vec3 viewNormalA = _modelToViewNormal(normalA);
vec3 viewNormalB = _modelToViewNormal(normalB);
vec3 viewDir = -viewPos;
if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`):i.code.add(r.H`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
vec3 worldNormalA = _modelToWorldNormal(normalA);
vec3 worldNormalB = _modelToWorldNormal(normalB);
vec3 viewDir = -worldPos;
if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`)):i.code.add(r.H`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
return false;
}`)}},70239:(e,t,i)=>{"use strict";i.d(t,{l:()=>n});var r=i(23410),s=i(37630);function n(e,t){const i=e.vertex;switch(t.mode){case s.Jb.SKETCH:i.code.add(r.H`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case s.Jb.MIXED:i.code.add(r.H`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case s.Jb.SOLID:i.code.add(r.H`#define discardShortEdges(unpackedAttributes, lineLengthPixels) {}`)}}},37630:(e,t,i)=>{"use strict";i.d(t,{Jb:()=>r,UR:()=>_,lV:()=>v});var r,s,n=i(22919),o=i(5331),a=i(9794),l=i(74001),c=i(32006),u=i(43036),h=i(24603),d=i(23410),p=i(55784),f=i(11125),m=i(87621),g=i(57663),y=i(21414);function _(e,t){const i=e.vertex;i.include(a.n),i.uniforms.add(new h.p("distanceFalloffFactor",(e=>e.distanceFalloffFactor))),i.code.add(d.H`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),i.uniforms.add(new g.Q("componentDataTex")),i.uniforms.add(new l.e("componentDataTexInvDim")),e.attributes.add(y.T.COMPONENTINDEX,"float"),i.constants.add("componentColorFieldOffset","float",0),i.constants.add("componentOtherFieldOffset","float",1),i.constants.add("componentVerticalOffsetFieldOffset","float",2),i.constants.add("componentFieldCount","float",3),i.constants.add("lineWidthFractionFactor","float",8),i.constants.add("extensionLengthOffset","float",128),i.constants.add("componentTexWidth","float",4096),i.constants.add("verticalOffsetScale","float",2*n.E_),i.code.add(d.H`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
float rowIndex = floor(fieldIndex / componentTexWidth);
float colIndex = mod(fieldIndex, componentTexWidth);
vec2 linearIndex = vec2(
(colIndex + 0.5) / componentTexWidth,
(rowIndex + 0.5) * componentDataTexInvDim.y
);
return linearIndex;
}
struct ComponentData {
vec4 color;
float lineWidth;
float extensionLength;
float type;
float verticalOffset;
};
ComponentData readComponentData() {
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
vec4 colorValue = texture2D(componentDataTex, colorIndex);
vec4 otherValue = texture2D(componentDataTex, otherIndex);
float verticalOffset = (rgba2float(texture2D(componentDataTex, verticalOffsetIndex)) - 0.5) * verticalOffsetScale;
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5,
verticalOffset
);
}`),t.legacy?i.code.add(d.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(i.uniforms.add(new p.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),i.code.add(d.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),t.silhouette?(e.attributes.add(y.T.NORMALA,"vec3"),e.attributes.add(y.T.NORMALB,"vec3"),i.code.add(d.H`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(e.attributes.add(y.T.NORMAL,"vec3"),i.code.add(d.H`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`)),t.legacy?i.code.add(d.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(i.include(o.$,t),i.include(o.$,t),i.uniforms.add([new f.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new p.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new u.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))]),i.code.add(d.H`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${t.spherical?d.H`normalize(transformWorldFromModelTL + rotatedModelPosition);`:d.H`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),i.uniforms.add(new m.g("transformProjFromView",((e,t)=>t.camera.projectionMatrix))),i.code.add(d.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),i.code.add(d.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function v(e){return e.mode===r.SKETCH||e.mode===r.MIXED}(s=r||(r={}))[s.SOLID=0]="SOLID",s[s.SKETCH=1]="SKETCH",s[s.MIXED=2]="MIXED",s[s.COUNT=3]="COUNT"},99e3:(e,t,i)=>{"use strict";i.d(t,{B:()=>a});var r=i(39820),s=i(23410),n=i(37630),o=i(25926);function a(e,t){const i=e.vertex;switch(e.include(o.H,t),(0,n.lV)(t)&&i.uniforms.add(new r.d("strokesAmplitude")),t.mode){case n.Jb.SOLID:i.code.add(s.H`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case n.Jb.SKETCH:i.code.add(s.H`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case n.Jb.MIXED:i.code.add(s.H`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}}},50297:(e,t,i)=>{"use strict";i.d(t,{N:()=>u});var r=i(9794),s=i(74001),n=i(39820),o=i(23410),a=i(57663),l=i(37630),c=i(25926);function u(e,t){const i=e.vertex;e.include(c.H,t);const u=e.fragment;switch((0,l.lV)(t)&&(i.uniforms.add(new s.e("strokesTextureScale")),i.uniforms.add(new n.d("strokesLog2Resolution")),i.uniforms.add(new n.d("strokeVariants")),e.varyings.add("vStrokeUV","vec2"),u.uniforms.add(new a.Q("strokesTexture")),u.uniforms.add(new n.d("strokesNormalizationScale")),i.code.add(o.H`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) * strokesTextureScale;
vStrokeUV.x += variantOffset;
}`),e.fragment.include(r.n),u.code.add(o.H`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture2D(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture2D(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),t.mode){case l.Jb.SOLID:i.code.add(o.H`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),u.code.add(o.H`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case l.Jb.SKETCH:i.code.add(o.H`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),u.code.add(o.H`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case l.Jb.MIXED:e.varyings.add("vType","float"),i.code.add(o.H`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),u.code.add(o.H`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}}},25926:(e,t,i)=>{"use strict";i.d(t,{H:()=>a});var r=i(27755),s=i(23410),n=i(21414),o=i(37630);function a(e,t){const i=e.vertex;switch(e.attributes.add(n.T.SIDENESS,"vec2"),t.mode===o.Jb.MIXED?i.code.add(s.H`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`):i.code.add(s.H`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`),t.mode){case o.Jb.MIXED:i.code.add(s.H`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);break;case o.Jb.SKETCH:i.code.add(s.H`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case o.Jb.SOLID:i.code.add(s.H`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`),e.fragment.uniforms.add(new wC.Q("textureInput")),e.fragment.uniforms.add(new wC.Q("textureMask")),e.fragment.uniforms.add(new wC.Q("textureOverlay")),e.fragment.uniforms.add(new _C.U("maskEnabled",(e=>e.maskEnabled))),e.fragment.uniforms.add(new _C.U("overlayEnabled",(e=>e.overlayEnabled))),e.fragment.code.add(Pr.H`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture2D(textureMask, vUV).a : 1.0;
vec4 inputColor = texture2D(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture2D(textureOverlay, vUV) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;