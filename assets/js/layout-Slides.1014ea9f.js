(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e,s){"use strict";const n=t=>"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1),c=t=>void 0!==t.componentInstance&&t.componentInstance.$isServer;e.a={bind:(t,e,s)=>{if(!n(e))return;const o=e=>{if(!s.context)return;const n=e.path||(e.composedPath?e.composedPath():[]);n&&n.length>0&&n.unshift(e.target),t.contains(e.target)||((t,e)=>{if(!t||!e)return!1;for(let s=0,n=e.length;s<n;s++)try{if(t.contains(e[s]))return!0;if(e[s].contains(t))return!1}catch(t){return!1}return!1})(s.context.popupItem,n)||t.$vueClickOutside&&t.$vueClickOutside.callback(e)};t.$vueClickOutside={handler:o,callback:e.value};const i="ontouchstart"in document.documentElement?"touchstart":"click";c(s)||document.addEventListener(i,o)},update:(t,e)=>{n(e)&&t.$vueClickOutside&&(t.$vueClickOutside.callback=e.value)},unbind:(t,e,s)=>{const n="ontouchstart"in document.documentElement?"touchstart":"click";!c(s)&&t.$vueClickOutside&&document.removeEventListener(n,t.$vueClickOutside.handler),delete t.$vueClickOutside}}},274:function(t,e,s){},462:function(t,e,s){"use strict";var n=s(274);s.n(n).a},489:function(t,e,s){"use strict";s.r(e);var n=s(2),c=s(0),o=s(237);let i=class extends c.e{constructor(){super(...arguments),this.showMenu=!1}destroyed(){document.querySelector("html").classList.remove("reveal-full-page"),document.body.classList.remove("reveal-viewport"),document.body.style.removeProperty("--slide-width"),document.body.style.removeProperty("--slide-height")}toggle(){this.showMenu=!this.showMenu}back(){window.history.go(-1),this.showMenu=!1}home(){this.$router.push("/"),this.showMenu=!1}clickOutside(){this.showMenu=!1}};i=Object(n.a)([Object(c.a)({directives:{"click-outside":o.a}})],i);var u=i,a=(s(462),s(3)),l=Object(a.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"presentation"},[s("Content",{key:t.$route.path,staticClass:"presentation-content"}),t._v(" "),s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutside,expression:"clickOutside"}],staticClass:"menu",class:{active:t.showMenu}},[s("button",{staticClass:"menu-button",on:{click:t.toggle}},[s("span",{staticClass:"icon"})]),t._v(" "),s("button",{staticClass:"back-button",on:{click:t.back}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"}})])]),t._v(" "),s("button",{staticClass:"home-button",on:{click:t.home}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}})])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);