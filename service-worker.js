if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"27d12d78cdb8eb14462721a6fd07e2bf"},{url:"article/index.html",revision:"c3cf59968ca30afa9e2fce28d7b7a781"},{url:"assets/css/0.styles.4dee3710.css",revision:"0c14dcc7ed5b20af3fb8f370bdb2f9d5"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/26.dbe474c9.js",revision:"3e26f70163f0062968379e5fcf8d83c9"},{url:"assets/js/app.f6aa641f.js",revision:"2360d39b47754154eea92d20afb7ced3"},{url:"assets/js/layout-BlogEntry.e02fdf38.js",revision:"4cfd69d01e39575a4ff8f4a7e7978ed1"},{url:"assets/js/layout-BlogEntry~layout-Common~layout-Layout~layout-Timeline.2e6edf47.js",revision:"c57d10262ac0fcc61a2612a2fd224359"},{url:"assets/js/layout-BlogEntry~layout-Layout.c9f9466e.js",revision:"309e9336cffd2e977f9945b7230754b3"},{url:"assets/js/layout-Common.ec0a6324.js",revision:"b7f33fa6843092de963bc82678af02f3"},{url:"assets/js/layout-Layout.8ee97374.js",revision:"612080b18d4ed0078c560e568c969e32"},{url:"assets/js/layout-NotFound.e082b536.js",revision:"1072e011636c0306cf7e3242702649dc"},{url:"assets/js/layout-Timeline.bff4e564.js",revision:"b5e4854d283723e82f13df80149eeb99"},{url:"assets/js/page-Home.a0ecdee4.js",revision:"28c108db14a2205dec8d33ed7add93c8"},{url:"assets/js/page-Markdown 增强.81f689ec.js",revision:"363521c31f3a7ea0e1af5568f2c002e8"},{url:"assets/js/page-个人介绍.97e74b49.js",revision:"e1578fff2930096b5c959989d7150139"},{url:"assets/js/page-内部链接页脚.9bb3e211.js",revision:"969fb8d8c2e51ad1887b1c454741eba3"},{url:"assets/js/page-外部链接页脚.dd8d28bd.js",revision:"984bb5cf8e474ff836f6faa8a51048f5"},{url:"assets/js/page-密码测试.f8352ab1.js",revision:"9b79980be9f85b1819fb2c1d3296f031"},{url:"assets/js/page-文字页脚.67a2e093.js",revision:"c8d8cc497233ee960a96b2ca7c1b5637"},{url:"assets/js/page-无页脚.75985ed7.js",revision:"14be325d0e29170925c229c83974864c"},{url:"assets/js/page-组件测试.723075e1.js",revision:"2174d4f17df0c5a3d42d666a64e064c7"},{url:"assets/js/page-组件禁用.ac08a338.js",revision:"4e6a191f20c16ef9abd69e484e1e4499"},{url:"assets/js/page-置顶文章.a6d08760.js",revision:"1839672f265fb823face261e949ab7d1"},{url:"assets/js/page-自定义页脚.c1156f64.js",revision:"e74c6d4ef422b770a7b1a6653f91fdf8"},{url:"assets/js/page-页面信息.8e28cffa.js",revision:"576457e3187af2ab115bc52f43a6fdd0"},{url:"assets/js/page-页面布局.c32e8e99.js",revision:"acb280928e5555864d6d1fceebd18a8a"},{url:"assets/js/page-页面配置.c16f13ce.js",revision:"0313bf8e81bf828fd0feb66225e4ffc2"},{url:"assets/js/page-默认页脚.319e1206.js",revision:"167cd2b8bc9466ec49d71990467d3091"},{url:"assets/js/vendors~layout-Layout.97d2482c.js",revision:"9fb50d171ca0e17d36d5a5c238b83ee3"},{url:"category/component/index.html",revision:"1c48166fb2ac5416017c7672905e3184"},{url:"category/index.html",revision:"e0423f072eaeb1634d2e798bf16149b0"},{url:"category/layout/index.html",revision:"afcb1a936ce37ed67f0bf0c9679f9e01"},{url:"component/disable.html",revision:"21bd5e0bee7558931ea36983ae2ffaf0"},{url:"component/footer/default.html",revision:"c3b84eadc9c3149595277030f86ee841"},{url:"component/footer/diy.html",revision:"1c17cc8d77a174008b43ae1aa1378c5e"},{url:"component/footer/index.html",revision:"d0bc6e8a21dbe16154fe4576f0bfb5be"},{url:"component/footer/link.html",revision:"821c57667f505fb618eb358760dc1caf"},{url:"component/footer/outlink.html",revision:"4b3e7e3c1bea055d2f37c0ce8bcc6d66"},{url:"component/footer/text.html",revision:"4c947c10251e40fb78862fedcef7621e"},{url:"component/index.html",revision:"49f3623d71cc2e70bec7afb2db28c071"},{url:"component/pageInfo.html",revision:"d96c39c1a5d1e67922bf5103a243e76a"},{url:"en/index.html",revision:"f629d70b4689d202882d4ee655f47de6"},{url:"en/test/detail/markdown.html",revision:"53a788db2ef2425f459564dc86e73015"},{url:"en/test/detail/page.html",revision:"5b35ddbcbbae91171c33f70d17691d54"},{url:"en/test/footer/default.html",revision:"609ceb251c7db186e0abdb9a4a944fbd"},{url:"en/test/footer/diy.html",revision:"2ce44d047ed87dafa863ab812f146d43"},{url:"en/test/footer/index.html",revision:"a996e93f5644a713c58b3d6037ecd0c8"},{url:"en/test/footer/link.html",revision:"57ed52f91258f0858acb64fc8aa8e9e4"},{url:"en/test/footer/outlink.html",revision:"6c5ba29c0e98b1e72d31123960310515"},{url:"en/test/footer/text.html",revision:"930f345657efda7ea413d76871ab9363"},{url:"en/test/index.html",revision:"b74eb63e6482f6d775f9d4948085cba2"},{url:"encrypt/index.html",revision:"c2784b2a03f4ddbcf521d15b7649dae8"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"cc18ce1dd7daf8cc805bdddd03c96aa4"},{url:"intro.html",revision:"1b91005773c132e5eed7276b4a6ecf46"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"fba810bd554ee6a3ddf545c4c5553189"},{url:"sticky.html",revision:"ea2b0f76bcc4d56626fc9b624435a8dc"},{url:"tag/footer/index.html",revision:"44612badfa760a81dc49650aecaeb34b"},{url:"tag/index.html",revision:"177c0ee5729726e1331a9685ff376516"},{url:"tag/layout/index.html",revision:"a4073a60df58431ff0964307de860e9b"},{url:"tag/markdown/index.html",revision:"06e128e7f618a08448041f1cdd572a24"},{url:"test/index.html",revision:"d13e2140168df346f9cb130758e6ed65"},{url:"timeline/index.html",revision:"204879c8b3b7532d4b186d053ae292c2"}],{})}));
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
