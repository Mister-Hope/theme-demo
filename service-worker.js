if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-e8e31499"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/0.styles.76d74767.css",revision:"d05b2423f8cac75aaf6b71ebb742bbc4"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.ea60c9c9.js",revision:"d74fb4ac45c2d8a40cb868a8662e568d"},{url:"assets/js/26.d636ce3f.js",revision:"c86e9411ea82d262d4b9ef1864c11647"},{url:"assets/js/app.c20dfefc.js",revision:"4b9213d96e3f3843c83562268af4b3b7"},{url:"assets/js/layout-BlogEntry.f2dc1722.js",revision:"9c901e240e85cb533aa1a53b5dbbd550"},{url:"assets/js/layout-BlogEntry~layout-Category~layout-Layout~layout-Tag.2df1eb92.js",revision:"f234973fc100057b5db764cefae3b588"},{url:"assets/js/layout-BlogEntry~layout-Layout.deb780b6.js",revision:"9b1c9f7fb7d1617ae8e844da682a68c4"},{url:"assets/js/layout-Category.a7d8cbce.js",revision:"18f515ac796b5a40f03d5e99e48a08e2"},{url:"assets/js/layout-Layout.1b7f7374.js",revision:"b4969bffab75a3267c0d496835655b97"},{url:"assets/js/layout-NotFound.e2ce6bcf.js",revision:"130e9d3d39745494d7720f488852b245"},{url:"assets/js/layout-Tag.6322b097.js",revision:"c012cbecddca8df22d260269ac66e133"},{url:"assets/js/page-Home.eb58a8a1.js",revision:"8bc454b0ef2c8a4eb03354ab886dc2b3"},{url:"assets/js/page-Markdown 增强.982ffa05.js",revision:"b35f22b8b183d17cd2eacae0e2b0e63e"},{url:"assets/js/page-内部链接页脚.1ac48f01.js",revision:"82197cea73f570a41f26baf860a3712d"},{url:"assets/js/page-外部链接页脚.b2e65516.js",revision:"0c085926e64901518ca2f8d924f762db"},{url:"assets/js/page-密码测试.f5cd6d68.js",revision:"844f7878a31dd0d0ecb62dfccd1d0fea"},{url:"assets/js/page-文字页脚.c556f6c2.js",revision:"171986b44998f042d46b361eb6643f4d"},{url:"assets/js/page-无页脚.ceb2b03b.js",revision:"72a0168cb74dcb77573859070681cbe4"},{url:"assets/js/page-组件测试.57de3423.js",revision:"200258c467176525b6f244e7b0aa7f3a"},{url:"assets/js/page-组件禁用.46ebac76.js",revision:"994aeb13785cb49c9b62a3a868328838"},{url:"assets/js/page-置顶文章.b429de21.js",revision:"3693ecf70e26a6dc80847f2986d73751"},{url:"assets/js/page-自定义页脚.4279cc0f.js",revision:"fd83dc00115375d0caa0d7e3154d94dc"},{url:"assets/js/page-页面信息.016f7291.js",revision:"64a645c1e2de4a73f8724487b0bca99d"},{url:"assets/js/page-页面布局.62af1130.js",revision:"757de049d240265b87d908bd652e6278"},{url:"assets/js/page-页面配置.54cd4fd4.js",revision:"4be74f0a102872271476b1aed61d8253"},{url:"assets/js/page-默认页脚.384340d2.js",revision:"f5bbf3b71b8c9eca98cc782c75aa2df2"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.0330e74b.js",revision:"7c9153af5cf694bd90901f64f5e434c6"},{url:"category/component/index.html",revision:"274ddfbb88afd2affd5c785b230ed90c"},{url:"category/index.html",revision:"ea0295f726e71074763daa8d9b886cb2"},{url:"category/layout/index.html",revision:"4e139ad4f31446dd8c13ad6c3d0f572c"},{url:"component/disable.html",revision:"c10e6efaebc0cc86508668adf4e54720"},{url:"component/footer/default.html",revision:"e9069810120807ac6efc9a9c50b64cbd"},{url:"component/footer/diy.html",revision:"6f7b8ce192e1835b430247879f334887"},{url:"component/footer/index.html",revision:"11bf3350de9fb718240140cf5b6b9257"},{url:"component/footer/link.html",revision:"78a4fd13e298877e1a1b992b2367de62"},{url:"component/footer/outlink.html",revision:"f8b978d2ec8adf7086b948beccf1706a"},{url:"component/footer/text.html",revision:"5ad6e782b5980c82960e8cd14687e57f"},{url:"component/index.html",revision:"7ce508306a86af3125c4c1d3c6acac5d"},{url:"component/pageInfo.html",revision:"33828494b8cf2b1d6a15a9f8f6bebd2e"},{url:"en/index.html",revision:"f13f8152f2f475ab2879f818b2dd2cba"},{url:"en/test/detail/markdown.html",revision:"e47365a4ea1ad1843451bf0fd43d8c12"},{url:"en/test/detail/page.html",revision:"40d0a23021ccae6751666aec8cb487e4"},{url:"en/test/footer/default.html",revision:"70601e178217c277f2c006ac2d9fb105"},{url:"en/test/footer/diy.html",revision:"82d0f6863c08a1fad8f1f4cac205af1d"},{url:"en/test/footer/index.html",revision:"bfe325683536f57b339eef723ef8b2d6"},{url:"en/test/footer/link.html",revision:"8a6dbd9ac2fd7534affc90f2363efb8a"},{url:"en/test/footer/outlink.html",revision:"c672350bf8df1bbed348b2342d6cd6bb"},{url:"en/test/footer/text.html",revision:"8569adb09e8cc0d67972cbca81791cdd"},{url:"en/test/index.html",revision:"88d801a886e0a05ed30dbc0a6b0c7b62"},{url:"encrypt/index.html",revision:"2e85cd10e8e708776c5d8812935acaee"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"a7e04588ecf109c3ce452da62469cd0c"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"779eeb460194af7e51907cebca6a8908"},{url:"sticky.html",revision:"b8ea821e40fa47c89b0eb26436cebc75"},{url:"tag/footer/index.html",revision:"d12e4a5293985b7838f4207234805d68"},{url:"tag/index.html",revision:"8537a7c7430e62af7ed17fc0b491fa8c"},{url:"tag/layout/index.html",revision:"33059f5dc563238bdab1bc02a360c9e9"},{url:"tag/markdown/index.html",revision:"f609985a148ad121af36b95994df0a28"},{url:"test/index.html",revision:"1d9df7952842338d2d23b6786ca709ad"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
