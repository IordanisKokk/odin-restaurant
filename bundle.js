(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(906),t.b),l=i()(o()),p=s()(d);l.push([e.id,`/* Reset default browser styles */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  /* Global styles */\n  body {\n    background: url(${p}) center/cover;\n    color: #fff;\n    font-family: 'Courier New', monospace;\n    height: 100vh;\n    width: 100vw;\n  }\n  \n  /* Header styling */\n  .header {\n    width: 100%;\n    color: #f0f0f0;\n    text-align: center;\n    padding: 20px;\n    font-family: 'Courier New', monospace;\n  }\n  \n  .restaurant-name {\n    font-size: 3rem;\n    margin-bottom: 10px;\n    letter-spacing: 2px;\n  }\n  \n  /* Navigation styling */\n  .button-nav {\n    background-color: transparent;\n    border: none;\n    color: #f0f0f0;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 10px 20px;\n    margin: 0 10px;\n    border-radius: 5px;\n    transition: color 0.3s;\n  }\n  \n  .button-nav.active {\n    color: #fff;\n  }\n  \n  /* Main content styling */\n  .content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    min-height: 100vh;\n    color: #f0f0f0;\n  }\n  \n  .main {\n    flex: 1;\n    width: 90%;\n    max-width: 1000px;\n    margin: 0;\n    padding: 30px;\n    background-color: #111;\n    border-radius: 15px;\n    animation: fadeIn 0.5s ease-in-out;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n  }\n  \n  .home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height:100%;\n    margin: 15%;\n}\n\n  \n  .contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height:100%;\n    margin: 15%;\n  }\n\n  /* Creative Menu item styling */\n  .menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n    justify-content: center;\n    flex-shrink: 1;\n\n  }\n  \n  .menu-item {\n    background-color: #1e1e1e;\n    padding: 20px;\n    border-radius: 15px;\n    transition: transform 0.3s, background-color 0.3s;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    animation: slideIn 0.5s ease-in-out;\n    flex-shrink: 1;\n  }\n  \n  .menu-item:hover {\n    transform: translateY(-5px);\n    background-color: #272727;\n  }\n  \n  \n  .menu-item h2 {\n    font-size: 1.5rem;\n    margin-bottom: 5px;\n  }\n  \n  .menu-item p {\n    font-size: 1rem;\n    color: #ccc;\n    flex-grow: 1;\n  }\n  \n  /* Footer styling */\n  .footer {\n    width: 100%;\n    text-align: center;\n    margin-top: 40px;\n    padding: 20px;\n    background-color: #111;\n    color: #f0f0f0;\n    border-radius: 0 0 15px 15px;\n  }\n  \n  .fa-github {\n    font-size: 1.5rem;\n    margin-left: 5px;\n  }\n  \n  /* Keyframes */\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  \n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      transform: translateY(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  `,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},906:(e,n,t)=>{e.exports=t.p+"images/galaxy.png"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(e){const n=document.createElement("p");return n.textContent=e,n}function n(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home"),n.appendChild(e("Welcome to the Cosmic Cafe")),n.appendChild(e("For culinary explorations ")),n.appendChild(e("Made with passion")),n.appendChild(e("Order Online via e-food.gr and wolt")),n}())}function a(e,n){const t=document.createElement("div");t.classList.add("menu-item");const a=document.createElement("h2"),o=document.createElement("p");return a.textContent=e,o.textContent=n,t.appendChild(a),t.appendChild(o),t}function o(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("restaurant-name"),t.textContent="Cosmic Cafe",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("button");t.classList.add("button-nav","home-button"),t.textContent="Home",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(r(t),n())}));const o=document.createElement("button");o.classList.add("button-nav","menu-button"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(r(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(a("Photon Pulled Pork Tacos","ender pulled pork infused with flavors from across the galaxy, nestled in cosmic tortillas. Served with nebula slaw and stardust salsa for an explosion of taste.")),e.appendChild(a("UFO Unagi Roll"," A delectable roll featuring smoked eel, cucumber, and avocado, rolled in black and green soy paper to mimic an otherworldly spacecraft. Drizzled with an alien teriyaki glaze.")),e.appendChild(a("Andromeda Ahi Poke Bowl","A starry bowl of diced ahi tuna marinated in celestial soy dressing, accompanied by quinoa asteroids, spiralized zucchini stardust, and a constellation of pickled ginger.")),e.appendChild(a("Stellar Steak Nebula","A succulent ribeye steak cooked to perfection, accompanied by truffle-infused space potatoes and a swirl of intergalactic mushroom gravy.")),e.appendChild(a("Galactic Gnocchi Geyser","Pillow-soft potato gnocchi erupting like geysers from a pool of cosmic tomato and roasted red pepper sauce. Topped with meteor-shower Parmesan.")),e.appendChild(a("Nova Nacho Platter","A supernova of flavor with layers of cosmic chips, black bean quasar dip, meteor cheese, and asteroid guacamole. Enhanced with a warp-speed jalapeño kick.")),e.appendChild(a("Stellar Steak Nebula","A succulent ribeye steak cooked to perfection, accompanied by truffle-infused space potatoes and a swirl of intergalactic mushroom gravy.")),e.appendChild(a("Galactic Gnocchi Geyser","Pillow-soft potato gnocchi erupting like geysers from a pool of cosmic tomato and roasted red pepper sauce. Topped with meteor-shower Parmesan.")),e.appendChild(a("Nova Nacho Platter","A supernova of flavor with layers of cosmic chips, black bean quasar dip, meteor cheese, and asteroid guacamole. Enhanced with a warp-speed jalapeño kick.")),e}())}())}));const i=document.createElement("button");return i.classList.add("button-nav","contact-button"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(r(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("p");n.textContent="Tel: +30 2310 547954";const t=document.createElement("p");t.textContent="Location: Egnatia Str. 86, Thessaloniki, Greece";const a=document.createElement("img");return a.src="../images/restaurant-location.png",a.alt="Cosmic Cafe Location Image",a.style.width="50%",e.appendChild(n),e.appendChild(t),e.appendChild(a),e}())}())})),e.appendChild(t),e.appendChild(o),e.appendChild(i),e}()),e}function r(e){document.querySelectorAll(".button-nav").forEach((n=>{n!==e&&n.classList.remove("active")})),e.classList.add("active")}var i=t(379),c=t.n(i),s=t(795),d=t.n(s),l=t(569),p=t.n(l),u=t(565),m=t.n(u),f=t(216),h=t.n(f),g=t(589),v=t.n(g),y=t(28),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),c()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,function(){const e=document.getElementById("content");e.appendChild(o()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p"),t=(new Date).getFullYear();n.textContent=`Copyright ©  ${t} IordanisKokk`;const a=document.createElement("a");a.href="https://github.com/IordanisKokk",a.textContent="Click for Github",a.target="blank";const o=document.createElement("i");return o.classList.add("fab"),o.classList.add("fa-github"),a.appendChild(o),e.appendChild(n),e.appendChild(a),e}()),r(document.querySelector(".home-button")),n()}(),console.log("HW")})()})();