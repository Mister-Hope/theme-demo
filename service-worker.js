if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"298974146414096b32fea456d267dd7b"},{url:"article/index.html",revision:"d2c6c8a6912d2c8c000e07e44761f461"},{url:"assets/css/0.styles.82afa578.css",revision:"69544039b7fd43883f69cb10bca42df0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.0aa56a40.js",revision:"b7d068c4b1bc9851fba5108db3daa385"},{url:"assets/js/app.e97c019b.js",revision:"4a6a5979b8043a098728398b3056dbab"},{url:"assets/js/layout-Blog.47ef5d35.js",revision:"88135342633b65fc972965d928b36775"},{url:"assets/js/layout-Blog~layout-Layout.0b908fa1.js",revision:"611d631a94cedf56c1e1d8d8e371bbdd"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a3fa02b0.js",revision:"64bbeae136ef00d7b69b43de9c1760ab"},{url:"assets/js/layout-Layout.fcd40ba3.js",revision:"765812ecf9cba7f599e2b3a0f0e0e16c"},{url:"assets/js/layout-NotFound.ce5695f9.js",revision:"e28a2cdf080a40acd9c481fea9087230"},{url:"assets/js/page-Home.a76d37a8.js",revision:"7100cb2091e3538d4b3d7d3b604d1c74"},{url:"assets/js/page-Markdown 增强.be9e489d.js",revision:"b704c4214be869db05d7fef2fe7d624e"},{url:"assets/js/page-个人介绍.b75699d4.js",revision:"4a2b62efdb92fff100722c03a51c751d"},{url:"assets/js/page-内部链接页脚.e093a6f2.js",revision:"def3ce8b6e3e292b2e155ef5e2369b73"},{url:"assets/js/page-外部链接页脚.fc4725ff.js",revision:"df835d4780fcbce7572faf7b6f3d1a1d"},{url:"assets/js/page-密码测试.667fbffe.js",revision:"b57143d0b18dd840f0609537a562c903"},{url:"assets/js/page-文字页脚.6e8e114b.js",revision:"8114c00504b485310154d9a7516acafa"},{url:"assets/js/page-无页脚.a4ded21f.js",revision:"924719b04cd3cafa1589fe9f0b025f54"},{url:"assets/js/page-组件测试.04d7fda6.js",revision:"791c36da402534d839b7672671153b98"},{url:"assets/js/page-组件禁用.f11b4c1a.js",revision:"064adfa9e0b2fe89a3c531730db6a509"},{url:"assets/js/page-置顶文章.0c21c80f.js",revision:"5b080afeb754b92dc947a1526bd1d036"},{url:"assets/js/page-自定义页脚.3e9a9c7a.js",revision:"a603b4afc63c4f833f00dad8f0c18111"},{url:"assets/js/page-页面信息.44130eb6.js",revision:"12d9ef07ede45420ee23fd8149144304"},{url:"assets/js/page-页面布局.12588394.js",revision:"907df1c0bd111832b4836c499b0adf0f"},{url:"assets/js/page-页面配置.5847b321.js",revision:"6566c3c6980f0f214a42fa9239a2399a"},{url:"assets/js/page-默认页脚.83b8e43a.js",revision:"f1e336cf01f561a569582852926dd277"},{url:"assets/js/vendors~layout-Layout.5cc45038.js",revision:"f682886a7a534c4ecdbed42539195689"},{url:"category/component/index.html",revision:"19e81c664701ee76652f2c4e9cd07834"},{url:"category/index.html",revision:"e781b30be22cb294ac58e686239a2190"},{url:"category/layout/index.html",revision:"09a9eb042564a3758d0dcc9a15eab9bd"},{url:"component/disable.html",revision:"d4ced761ed2fdecd89f2403a90b9ee13"},{url:"component/footer/default.html",revision:"d638dd88ba70dab4996253c35e2de17f"},{url:"component/footer/diy.html",revision:"1230db0feeb5312db50f363f558330b2"},{url:"component/footer/index.html",revision:"ed0d27d5b44865262707b8592243e7e3"},{url:"component/footer/link.html",revision:"e434b46a162c5a021a9a13c1fcca7883"},{url:"component/footer/outlink.html",revision:"60d6d923674c522277eacb2af2f4f608"},{url:"component/footer/text.html",revision:"6f479dca353d0bdc996aba4a514bd3e2"},{url:"component/index.html",revision:"a20614f80132c40e863fe629c56bb114"},{url:"component/pageInfo.html",revision:"948656ff137a9da66b5fbc6f0bb67bd2"},{url:"en/index.html",revision:"965e89e6945c781932ee9daf4c3a1b44"},{url:"en/test/detail/markdown.html",revision:"611dcf0a97986ea4ce1e69568a02034c"},{url:"en/test/detail/page.html",revision:"dfae3e866630e054212dfcbe37105879"},{url:"en/test/footer/default.html",revision:"0c1b6a2734f9cb0dac268495ffb93ef1"},{url:"en/test/footer/diy.html",revision:"16ee62755ff214695132da1563f7556c"},{url:"en/test/footer/index.html",revision:"9b72c0e097a1bcaf1ecdf81082e94f05"},{url:"en/test/footer/link.html",revision:"a97b1c2854217335af5b2b809994ed82"},{url:"en/test/footer/outlink.html",revision:"b1ed80055c917210b1376e13d8f0cac1"},{url:"en/test/footer/text.html",revision:"3bb959dd38e764fd4593b4d18d8c3a01"},{url:"en/test/index.html",revision:"21b06af869fb5910967778a6198b8703"},{url:"encrypt/index.html",revision:"2ee0ac6a9002df37dff3b3b5a623e7f2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"f0c8f3842517927e9fb5b7059ce5fcae"},{url:"intro.html",revision:"648834e78c2bfbccd606ef9f39960ba4"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"15ad081607877472fbb1a4ef2a44761f"},{url:"sticky.html",revision:"c504253d0083ce44e46210803078a9d5"},{url:"tag/footer/index.html",revision:"6237be0819280f1773a7355cb9c27b0e"},{url:"tag/index.html",revision:"0039196ac168aea80396ddc0fc1422f7"},{url:"tag/layout/index.html",revision:"e721b8dd9bfb0e38ed8f7e5c31931c93"},{url:"tag/markdown/index.html",revision:"48d8fe9094a82f56601f1f91701d0be0"},{url:"test/index.html",revision:"a4f938d3b5ff4beda04047cdaa9aa95b"},{url:"timeline/index.html",revision:"1ec125646a5b66aff64d94ec7b24f8b0"}],{})}));
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
