(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(t,n,o){},446:function(t,n,o){"use strict";var e=o(274);o.n(e).a},471:function(t,n,o){"use strict";o.r(n);var e=o(2),a=o(1),s=o(301),i=o(181);let r=class extends a.e{get i18n(){return this.$themeLocaleConfig.error404||i.i18n.getDefaultLocale().error404}get msg(){return this.i18n.hint[Math.floor(Math.random()*this.i18n.hint.length)]}back(){window.history.go(-1)}};r=Object(e.a)([Object(a.a)({components:{Common:s.a}})],r);var c=r,l=(o(446),o(3)),u=Object(l.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Common",{attrs:{sidebar:!1}},[o("main",{staticClass:"page not-found"},[o("h1",[t._v("404")]),t._v(" "),o("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),o("div",{staticClass:"action-button",on:{click:t.back}},[t._v(t._s(t.i18n.back))]),t._v(" "),o("RouterLink",{staticClass:"action-button",attrs:{to:"/"}},[t._v(t._s(t.i18n.home))])],1)])}),[],!1,null,null,null);n.default=u.exports}}]);