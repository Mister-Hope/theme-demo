if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},a=async(a,s)=>{const i=await Promise.all(a.map(e));s(1===i.length?i[0]:i)};a.toUrl=e=>`./${e}`;const s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=new Promise(async s=>{let o={};const d={uri:location.origin+a.slice(1)},c=await Promise.all(i.map(a=>"exports"===a?o:"module"===a?d:e(a))),t=r(...c);o.default||(o.default=t),s(o)}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"8ffb076b3c16e9f95173cf7e9a6b17fc"},{url:"assets/css/0.styles.cb105d6c.css",revision:"d455c6a115c5edd34e372857b27eb91c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.76445128.js",revision:"90c51bea899116de1a63e6d6e9a246b7"},{url:"assets/js/24.5b09acc2.js",revision:"ac498c36706756302e8a8e4a1692db9d"},{url:"assets/js/app.0ad12950.js",revision:"95b2a4f9632f4ffd0befc4f58efbe70c"},{url:"assets/js/layout-BlogEntry.8f1b98a4.js",revision:"214d2ec1ea7a9df23bd91e80dff0a195"},{url:"assets/js/layout-BlogEntry~layout-Layout.b35ac7cb.js",revision:"ee9c4a00b8477b090bec6b0736b33112"},{url:"assets/js/layout-Category.97284eb5.js",revision:"2ae64ac811c9a3dade2d110a583fa10f"},{url:"assets/js/layout-Layout.a3c3e6af.js",revision:"5140d16bca721b88095de0a30360bee6"},{url:"assets/js/layout-NotFound.9e91a6b5.js",revision:"4dda37e47b33806da63504e2830e935a"},{url:"assets/js/layout-Tag.8dad267a.js",revision:"039d8e3b8540a08d48455f01cd8e502d"},{url:"assets/js/page-Home.7b187a7b.js",revision:"612a95827a5f0151136221eb4508e9e5"},{url:"assets/js/page-Markdown 增强.51bb6f40.js",revision:"32a8ef9d9ef63f5035447bc8417db44e"},{url:"assets/js/page-内部链接页脚.61ba7c81.js",revision:"f517099af78035eb35f17d3b7aab5896"},{url:"assets/js/page-外部链接页脚.79a05d32.js",revision:"b71e1bab881c470eb0886380973129ae"},{url:"assets/js/page-密码测试.94843d89.js",revision:"f4eec0ce83eabbadccbc5cc9a29356dc"},{url:"assets/js/page-文字页脚.77d57a8d.js",revision:"b87b0433f6e66e0214401f78252ac901"},{url:"assets/js/page-无页脚.8c171aa5.js",revision:"d6eb15e0819dad1cf13570104bde33ba"},{url:"assets/js/page-组件测试.69379e78.js",revision:"3a8acc717b5ec3fd914e750c2d6d52e8"},{url:"assets/js/page-组件禁用.c3c19684.js",revision:"3e91249a8ad4589d758784d891a42db2"},{url:"assets/js/page-自定义页脚.c70f5a94.js",revision:"a87ed317f149e6bb740ea610dffaf342"},{url:"assets/js/page-页面信息.472f439c.js",revision:"05bc384caf458d2bf441ec795073e307"},{url:"assets/js/page-页面布局.715f3ce5.js",revision:"7b5d73a4013d1cac2f9e9ca621d22407"},{url:"assets/js/page-页面配置.d2311224.js",revision:"72a527f99b00640be510eb05d7d3d1c0"},{url:"assets/js/page-默认页脚.e62b6f77.js",revision:"1bc21f7251c79e8eff702697dba0cb8b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.e89c0eee.js",revision:"2bb4da8d45b4552a6c27aaf6e40c4585"},{url:"category/component/index.html",revision:"59be29800284f7447f8829ba7c122327"},{url:"category/index.html",revision:"d7496fc4e5af612067a94d726b547b9e"},{url:"category/layout/index.html",revision:"1c34d69c3a6d68ee40f5556d9c69b17d"},{url:"component/disable.html",revision:"70f09646eaed707740756a43b771bab9"},{url:"component/footer/default.html",revision:"b667a5fc39dfa23588614f165dc969e3"},{url:"component/footer/diy.html",revision:"88e8b500ad626f7994d2a16f04417121"},{url:"component/footer/index.html",revision:"2112055fd53d9479ae255a389484e264"},{url:"component/footer/link.html",revision:"944067f00ad7f7b22e41ca4b3050c29e"},{url:"component/footer/outlink.html",revision:"85c60234f001fdbcc11cbc2cbfac2596"},{url:"component/footer/text.html",revision:"c050d80e7bbe6a336c625cc97565dda6"},{url:"component/index.html",revision:"c71b303db85a8500ddaf2a81e4cd6988"},{url:"component/pageInfo.html",revision:"7dfaa5e9e573483d607cac9e57a32a7b"},{url:"en/index.html",revision:"6f4abd6096219712f65c40344529a624"},{url:"en/test/detail/markdown.html",revision:"e342e44fc06aa1e42033a3a4491af580"},{url:"en/test/detail/page.html",revision:"cd0a49418f940f84289264ed0ca67ab8"},{url:"en/test/footer/default.html",revision:"882a8e3d6433f82e6e82d205cc8fdc2d"},{url:"en/test/footer/diy.html",revision:"d7d2c5c1a5852cb3440e439c5ce92202"},{url:"en/test/footer/index.html",revision:"526d669dfe36ad88b52c43d3188b8864"},{url:"en/test/footer/link.html",revision:"5c3f7f185837d5871acb4e239437c10f"},{url:"en/test/footer/outlink.html",revision:"050bd4881901f9ba26431785124e7fdd"},{url:"en/test/footer/text.html",revision:"bc3f0e5e3497966d293e05a1007cd132"},{url:"en/test/index.html",revision:"ec0ba80376645503caa7e9213da5a942"},{url:"encrypt/index.html",revision:"ee99aaf54d344e3018c673b6ecb32601"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"5d214f183198b4510a11c7b118820549"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"1f895a009a3fd7f2ba6b6c7579e21356"},{url:"tag/footer/index.html",revision:"7dda31bb1d51abc74812ce454e9917cc"},{url:"tag/index.html",revision:"1dc3143d73699d34420610d66fabbad5"},{url:"tag/layout/index.html",revision:"481e226d01fecd28e42c61464fe3606f"},{url:"tag/markdown/index.html",revision:"c88853a9a49c56e11d0b3e2837942dee"},{url:"test/index.html",revision:"e2a95ae19d74642405a7e005585741fe"}],{})}));
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
