if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-5fbcd7da"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"article/index.html",revision:"781f008c1b8fc377620d4797e9ef519a"},{url:"assets/css/0.styles.cd610b06.css",revision:"fb0f94768791523363164cbd2ee20b25"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.0e279fa5.js",revision:"4e39ca5a778a9a80ac477bb6d77bda73"},{url:"assets/js/app.ba2a2180.js",revision:"4f5e82cf5feb45e9ec5cdaf33e05fabd"},{url:"assets/js/layout-BlogEntry.6855bb89.js",revision:"bc80c4a8d9e4beabe7b6e2d7fa2f2d75"},{url:"assets/js/layout-BlogEntry~layout-Layout.2cbfa41f.js",revision:"a4c62d4e254aa40bad0f5999684c272c"},{url:"assets/js/layout-Layout.bc6d302e.js",revision:"673afa06bad50850bedb80b7469c26d6"},{url:"assets/js/layout-NotFound.6d0e8f3c.js",revision:"cb13ef5cd8fb45e7894e0963dfde8662"},{url:"assets/js/page-Home.b61e9585.js",revision:"c4d46cd76039e103a0ce480b44ff2941"},{url:"assets/js/page-Markdown 增强.5828b721.js",revision:"cebd937dde3f8acc1d60f09e46f697b2"},{url:"assets/js/page-个人介绍.d872ac53.js",revision:"489a0240106b1486666248145efee54d"},{url:"assets/js/page-内部链接页脚.454c8f73.js",revision:"aaaa002be938d16908d2b78157320c67"},{url:"assets/js/page-外部链接页脚.0470a652.js",revision:"dd66462d38af3bd10c55a760e5068e52"},{url:"assets/js/page-密码测试.83fdbf25.js",revision:"1c048585eccb4aa5ad72e980dfd67ded"},{url:"assets/js/page-文字页脚.94953e32.js",revision:"f1f846c2d00038373a481087d5d34578"},{url:"assets/js/page-无页脚.4546fe69.js",revision:"8e52fa46c75f325a57f7b4740a90d77a"},{url:"assets/js/page-组件测试.5f701761.js",revision:"33db05568c2384701ca5b0a93d611ba2"},{url:"assets/js/page-组件禁用.e79d8ca9.js",revision:"350e6b9cf550e86f7c02e291a3c226d8"},{url:"assets/js/page-置顶文章.0f3a1ae2.js",revision:"4694bb8207837c875bb4bf6860ced4f5"},{url:"assets/js/page-自定义页脚.618f9992.js",revision:"fb32ba2e74901723579f82dff530494e"},{url:"assets/js/page-页面信息.1a6914d9.js",revision:"728a40ecf81960f79ff76f4a6079a0ca"},{url:"assets/js/page-页面布局.0fb11856.js",revision:"035f294c0a899590e6b76fcea322a098"},{url:"assets/js/page-页面配置.ac70d999.js",revision:"68aea51cdc8de43fa63adb2e500566c7"},{url:"assets/js/page-默认页脚.3a762263.js",revision:"33e107811a653551cf95869a6e7adfc3"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.68c69d0d.js",revision:"2bdd3d8d77bb234a30d37dd5279a3c52"},{url:"assets/js/vendors~layout-Layout.227cf03a.js",revision:"95a74c5107f21d157e7bd4c04f5d298b"},{url:"category/component/index.html",revision:"bc0dc5285999a757816ad6aa631d1167"},{url:"category/index.html",revision:"beb1fba5c48b261bb8f4f844157a756d"},{url:"category/layout/index.html",revision:"3a2f15056cfbeb8f86816ba20facad47"},{url:"component/disable.html",revision:"00b70acbad9fdfdf57c49b12cf32a83e"},{url:"component/footer/default.html",revision:"98573da94b6c5637852673aeeb103cc0"},{url:"component/footer/diy.html",revision:"3ee833f7a5f2ebca9273945d808f1448"},{url:"component/footer/index.html",revision:"c49505140dbb940acb40e5a44e276f90"},{url:"component/footer/link.html",revision:"a05e0565b716de9ab4c80f19ed827efb"},{url:"component/footer/outlink.html",revision:"1da7c51950e3ca422b1da7318eb1534a"},{url:"component/footer/text.html",revision:"9a6eac14f49d56f0b7b51209bf4636a3"},{url:"component/index.html",revision:"ba8e453cfe0f6791b461d140bb6c68c0"},{url:"component/pageInfo.html",revision:"3802d9d53b6c67f6615c65dd3e37990d"},{url:"en/index.html",revision:"efc17790167f9a48d30f130fa4f76b82"},{url:"en/test/detail/markdown.html",revision:"09fe07d7cfa6797f329bacceaa0e7772"},{url:"en/test/detail/page.html",revision:"a27a10b2f29739779e8a3bef8a9d58a2"},{url:"en/test/footer/default.html",revision:"3bda89cebf134870a0787098724b8364"},{url:"en/test/footer/diy.html",revision:"24a93d54642ac4640b031a7f56620b81"},{url:"en/test/footer/index.html",revision:"5bdbf81e6d26a440edca9c87e784d077"},{url:"en/test/footer/link.html",revision:"ac54bcae00f61996f1af09143a807456"},{url:"en/test/footer/outlink.html",revision:"c87a75e7f729d44ecfc2bac10a1abb80"},{url:"en/test/footer/text.html",revision:"390261f9d551fec1769f72697d92efbe"},{url:"en/test/index.html",revision:"eeac9da0ff904f914fc4ba3b09337fec"},{url:"encrypt/index.html",revision:"fd13fce2a4bd461b66852c286f5b4420"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"1f3a0d8b1db5e6a36bfb590dd40918c3"},{url:"intro.html",revision:"3366133c215c624236d4051a2ca15369"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"407f6e63c802e6cc99f5517216468eae"},{url:"sticky.html",revision:"177a8a75c8f6c67d731931bdd83f578e"},{url:"tag/footer/index.html",revision:"335b6de5776a00f6dfc260eb98232bc0"},{url:"tag/index.html",revision:"41317c0a3306b25582d627b9eba8ea81"},{url:"tag/layout/index.html",revision:"51c52c7c1f27596fa259dadb8279f173"},{url:"tag/markdown/index.html",revision:"46cd4127d28faf0b5545194bd2cf2610"},{url:"test/index.html",revision:"e75b40781a999a79b19f339a4574d755"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
