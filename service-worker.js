if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},a=async(a,s)=>{const d=await Promise.all(a.map(e));s(1===d.length?d[0]:d)};a.toUrl=e=>`./${e}`;const s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=new Promise(async s=>{let r={};const o={uri:location.origin+a.slice(1)},c=await Promise.all(d.map(a=>"exports"===a?r:"module"===a?o:e(a))),f=i(...c);r.default||(r.default=f),s(r)}))}}define("./service-worker.js",["./workbox-7c50a1e6"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"cf10d8d3d86fed892f45860820c37195"},{url:"assets/css/0.styles.cb105d6c.css",revision:"d455c6a115c5edd34e372857b27eb91c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.76445128.js",revision:"90c51bea899116de1a63e6d6e9a246b7"},{url:"assets/js/24.5b09acc2.js",revision:"ac498c36706756302e8a8e4a1692db9d"},{url:"assets/js/app.6e9ffd3e.js",revision:"23bf4aaeaa885a07587118987e004bfd"},{url:"assets/js/layout-BlogEntry.16ffa9bf.js",revision:"214d2ec1ea7a9df23bd91e80dff0a195"},{url:"assets/js/layout-BlogEntry~layout-Layout.d3cc4791.js",revision:"ee9c4a00b8477b090bec6b0736b33112"},{url:"assets/js/layout-Category.cd2e1e48.js",revision:"2ae64ac811c9a3dade2d110a583fa10f"},{url:"assets/js/layout-Layout.efd6252a.js",revision:"5140d16bca721b88095de0a30360bee6"},{url:"assets/js/layout-NotFound.55f987b2.js",revision:"4dda37e47b33806da63504e2830e935a"},{url:"assets/js/layout-Tag.53c694c2.js",revision:"039d8e3b8540a08d48455f01cd8e502d"},{url:"assets/js/page-Home.9f5e9717.js",revision:"612a95827a5f0151136221eb4508e9e5"},{url:"assets/js/page-Markdown 增强.4d1be13b.js",revision:"32a8ef9d9ef63f5035447bc8417db44e"},{url:"assets/js/page-内部链接页脚.65e52dc0.js",revision:"f517099af78035eb35f17d3b7aab5896"},{url:"assets/js/page-外部链接页脚.31c4617f.js",revision:"b71e1bab881c470eb0886380973129ae"},{url:"assets/js/page-密码测试.14274136.js",revision:"f4eec0ce83eabbadccbc5cc9a29356dc"},{url:"assets/js/page-文字页脚.823c0015.js",revision:"b87b0433f6e66e0214401f78252ac901"},{url:"assets/js/page-无页脚.e2871ea2.js",revision:"d6eb15e0819dad1cf13570104bde33ba"},{url:"assets/js/page-组件测试.ba5bf8c9.js",revision:"3a8acc717b5ec3fd914e750c2d6d52e8"},{url:"assets/js/page-组件禁用.269f370f.js",revision:"3e91249a8ad4589d758784d891a42db2"},{url:"assets/js/page-自定义页脚.78067d23.js",revision:"a87ed317f149e6bb740ea610dffaf342"},{url:"assets/js/page-页面信息.fb40500f.js",revision:"05bc384caf458d2bf441ec795073e307"},{url:"assets/js/page-页面布局.2dbe5300.js",revision:"7b5d73a4013d1cac2f9e9ca621d22407"},{url:"assets/js/page-页面配置.25b3543d.js",revision:"72a527f99b00640be510eb05d7d3d1c0"},{url:"assets/js/page-默认页脚.3996c016.js",revision:"1bc21f7251c79e8eff702697dba0cb8b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.1a6713c9.js",revision:"aae53d51286925941926796ff7c35143"},{url:"category/component/index.html",revision:"084db5325d06c02a3534ebb2e1e4e4cc"},{url:"category/index.html",revision:"67d1a550c0eafead35a640fab79d5e61"},{url:"category/layout/index.html",revision:"3e6feb47bc4af95aec55d3bfa667651c"},{url:"component/disable.html",revision:"e30c2fad04ddbfc5511b0c93cc5bf4b5"},{url:"component/footer/default.html",revision:"ce0c7cd9c56d378f288f3a842ce97f79"},{url:"component/footer/diy.html",revision:"434ecd559ef5a58c0a066a41a25b6fe4"},{url:"component/footer/index.html",revision:"2bce782d3883dbafc8139fc329cb3810"},{url:"component/footer/link.html",revision:"268e40a3ba8d495c3a674b71f87fb56b"},{url:"component/footer/outlink.html",revision:"c4807fff037e291a5eb44dc1f9617553"},{url:"component/footer/text.html",revision:"1bbc39dc3a54a97e1e5e2db93a6be995"},{url:"component/index.html",revision:"8229bdcd217cd871800d98e24ab46e91"},{url:"component/pageInfo.html",revision:"865918677f0086bb7d97e2979297c5f7"},{url:"en/index.html",revision:"6d66d01a38dc022013fd7900220ad056"},{url:"en/test/detail/markdown.html",revision:"514d7228363fd29a41dccdd227259136"},{url:"en/test/detail/page.html",revision:"04c99ad3a695c466a5f5980feb3bdd81"},{url:"en/test/footer/default.html",revision:"0fcef64fa40abc68cc266bd3d2ad04cd"},{url:"en/test/footer/diy.html",revision:"92581f08b18dfb9e7bb091dc81a95c3b"},{url:"en/test/footer/index.html",revision:"030d6b80649dcd52199edbfeb924b436"},{url:"en/test/footer/link.html",revision:"92b5b8a60aadeb46dd86d8edacc33962"},{url:"en/test/footer/outlink.html",revision:"593ea333feb331f3b1e00e8854128a4b"},{url:"en/test/footer/text.html",revision:"99047b6fde228cf16cdae086d7c201df"},{url:"en/test/index.html",revision:"e550c9ee7a23e44b8ebe4424b3aa40e2"},{url:"encrypt/index.html",revision:"107c88887d8d33155ea20d0148eec446"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"97afbe50cc4ea830e71ff48dd610416b"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"321a23b023e76fa30f63f50f6d3c0c51"},{url:"tag/footer/index.html",revision:"e952f8064d034fa4c2c9d21c098de342"},{url:"tag/index.html",revision:"0246e92e428439c9fdf02a3a2529b7e9"},{url:"tag/layout/index.html",revision:"7fb176fda81c4f98767e278d4835d22e"},{url:"tag/markdown/index.html",revision:"3bdc552f1cd802a825faa8e721e3cf5b"},{url:"test/index.html",revision:"86689c9a90418a098c6c2d02f05222ea"}],{})}));
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
