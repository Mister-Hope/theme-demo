if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-e8e31499"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/0.styles.a1366830.css",revision:"fa3be9a2d2bc60069a18deb76fc40aab"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/22.079ff694.js",revision:"dd3e82ae0bdb7ec1e8a57dc88c00de44"},{url:"assets/js/app.e227fb5f.js",revision:"818c1a99a1f9041e9efbf5bbc0358163"},{url:"assets/js/layout-BlogEntry.d38c836e.js",revision:"27f45bb658754ac86c118cf788c6794b"},{url:"assets/js/layout-BlogEntry~layout-Layout.4353cf1e.js",revision:"a9010837a9451af0efcad5d8a32fc290"},{url:"assets/js/layout-Layout.692f77dc.js",revision:"97b1880d5d53a916e8d990a3956c561b"},{url:"assets/js/layout-NotFound.b326349c.js",revision:"bdfd648f1e8fc2426738e1860aaff0d9"},{url:"assets/js/page-Home.f83e45e0.js",revision:"b1e27593a36251e319a8594a4c8a6269"},{url:"assets/js/page-Markdown 增强.8582430f.js",revision:"1016abfa63d0aa2ce657c7b95cb1238f"},{url:"assets/js/page-内部链接页脚.d57067b6.js",revision:"263f17d58691c5085ebe4596f34ccab5"},{url:"assets/js/page-外部链接页脚.0a20b179.js",revision:"1a385c82863f2274c655c3b96e2a4517"},{url:"assets/js/page-密码测试.2b9307ed.js",revision:"c9600daf3c6b9dd7f6b28c24399cafc7"},{url:"assets/js/page-文字页脚.3356dedd.js",revision:"b53d917fa803a1bf3f81ee31ede92f5a"},{url:"assets/js/page-无页脚.1526cb96.js",revision:"57f79b6b61a6683c52dee9c99711122f"},{url:"assets/js/page-组件测试.d2feff21.js",revision:"ba6b04f2eb01fcc5454454768f8c81b0"},{url:"assets/js/page-组件禁用.8024cfba.js",revision:"b5c4352399cf6436fc0f93d930208a89"},{url:"assets/js/page-置顶文章.2ca89663.js",revision:"16d546d58324f76c4621ad8b8ec79ec8"},{url:"assets/js/page-自定义页脚.93e67114.js",revision:"9132200168d0d36b9657069ae617a2d4"},{url:"assets/js/page-页面信息.56cffc05.js",revision:"e169c1929e052232ffe9c2fce09ab0a8"},{url:"assets/js/page-页面布局.13c0daa7.js",revision:"62be0febee0235cb874ffa964435fcae"},{url:"assets/js/page-页面配置.97e86b8b.js",revision:"1ef97d9df971c9e7671ab0a0a7e9b95a"},{url:"assets/js/page-默认页脚.4cca9dc6.js",revision:"01a380d84c57eadd88bda67411f9748d"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.bae9ebcb.js",revision:"9d9e89844e5f60242e58808b60c78b84"},{url:"category/component/index.html",revision:"925d7404abc72ccbadbb213a65812eb3"},{url:"category/index.html",revision:"2e500f136c3475c18b85b50e25bd24e2"},{url:"category/layout/index.html",revision:"f2183baecf71f6940107ff1bb2d00d33"},{url:"component/disable.html",revision:"cb5e6b690a1cdfe24c49f539dadebabd"},{url:"component/footer/default.html",revision:"466de269e3e930b893a2bfe46280ece0"},{url:"component/footer/diy.html",revision:"01d2cff60cd4e2b23edd2a7f0aaf37a4"},{url:"component/footer/index.html",revision:"3eb2b240ef69caf37bf527f6c9ac73bd"},{url:"component/footer/link.html",revision:"44e384040a4ced1c3330549702f39c4e"},{url:"component/footer/outlink.html",revision:"662e9c8ae2f66a0ba59a4d2a68bb6258"},{url:"component/footer/text.html",revision:"4b7ebe582aca0b4c4d3cf88785b3f610"},{url:"component/index.html",revision:"8a755c0aee495fe9bfdda6b3710d00af"},{url:"component/pageInfo.html",revision:"b97220b389318613b891a0a956a1f5cc"},{url:"en/index.html",revision:"53e50447c2e2d262a33a27b0b53f7819"},{url:"en/test/detail/markdown.html",revision:"483e9acdda84e8c57fc2d98022c86f65"},{url:"en/test/detail/page.html",revision:"1370c9bc928e7bafecea2dc27d88eb46"},{url:"en/test/footer/default.html",revision:"92f28bbd7556afc4c04fbfcb30122860"},{url:"en/test/footer/diy.html",revision:"1cc71e61821ce21779e62fd68a0381dc"},{url:"en/test/footer/index.html",revision:"14f084bd4bb6c0870636d6140b0a1942"},{url:"en/test/footer/link.html",revision:"66be6e59bce36f51fbfa85cb369a0326"},{url:"en/test/footer/outlink.html",revision:"810e832e5d8851a40f881cd93ce780ba"},{url:"en/test/footer/text.html",revision:"fded432d3ae8f83274583c196fb22363"},{url:"en/test/index.html",revision:"f86bd269020828c03f18768e353cd2ec"},{url:"encrypt/index.html",revision:"9cf7e7dc5022a72577126af2438f08b8"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"cd11ebc746cab0d3a0b4348cd024662f"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"a52cc9b2d34d0c4201a00ec5e58d891a"},{url:"sticky.html",revision:"08d47f6a6f599e80d053772cd4b0bc5e"},{url:"tag/footer/index.html",revision:"4d756056ee7be2378afe91e2d83d9e53"},{url:"tag/index.html",revision:"fd4c64d3e34e21dc606fd7137dcb9402"},{url:"tag/layout/index.html",revision:"545737842e0dd00bb367fa7a859200ec"},{url:"tag/markdown/index.html",revision:"98e569d0cdda48f77e77b87b5e782738"},{url:"test/index.html",revision:"afcb31d1ab006e8c937a854fa5dd6a55"}],{})}));
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
