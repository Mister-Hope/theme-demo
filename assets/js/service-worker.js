if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"bafd3dbdd80d21587a4a148b7a20297c"},{url:"article/index.html",revision:"18cad87452e1b1eb00231285c9ac98e1"},{url:"assets/css/0.styles.9a1bc931.css",revision:"fba4d15675aecd7dbdb22647fa0ac641"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/24.f0594097.js",revision:"854a949cffe810182ff40c1dca2976eb"},{url:"assets/js/app.4c4a4025.js",revision:"6a97cc94a31a9c0d3932a8300c409de8"},{url:"assets/js/layout-Blog.e3be2a32.js",revision:"9a718eb13e39ceb2f30f2b396f730895"},{url:"assets/js/layout-Blog~layout-Layout.13e5a72a.js",revision:"267c22b05f588360cc7d046d54f25aec"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f43ea80a.js",revision:"913eea400f1cabeeb3f0455e7df45781"},{url:"assets/js/layout-Layout.635b2699.js",revision:"461ada60bc8f9402abda31f3aa0cf646"},{url:"assets/js/layout-NotFound.b0849929.js",revision:"1ba2983e0fa05b0d59c2be50a7b3a9af"},{url:"assets/js/page-Home.0adda37b.js",revision:"4fd7b8a0d762322ccd9e36385852a5dc"},{url:"assets/js/page-Markdown 增强.4d51b191.js",revision:"0e81ba50cdb359f9d49569bbdc3c94e8"},{url:"assets/js/page-个人介绍.3ed22e11.js",revision:"0338df8a8839998d53eb5343a4e26ab7"},{url:"assets/js/page-内部链接页脚.c9850486.js",revision:"5acfa68d2a91c8bf4533dbd7bec75e6e"},{url:"assets/js/page-外部链接页脚.fdf3088f.js",revision:"54525a44f4c02a55546737f118282791"},{url:"assets/js/page-密码测试.a1c246ae.js",revision:"4977e8c848a7580f53e0432fa86d7f7a"},{url:"assets/js/page-文字页脚.03b9a9ae.js",revision:"0e0f193dab92ffbe29f5dbc8fd0fc674"},{url:"assets/js/page-无页脚.5326b30c.js",revision:"f379390a3799d489a3e7d69001bc91a5"},{url:"assets/js/page-组件测试.e0f2245d.js",revision:"ce8c9a06052f0187d361726ab0e855ea"},{url:"assets/js/page-组件禁用.acd1b21e.js",revision:"56c57e9b81d30027dbce6a10ade524e1"},{url:"assets/js/page-置顶文章.04672cf2.js",revision:"ea310efc5336e1440dcb3ae409090841"},{url:"assets/js/page-自定义页脚.0b7871f5.js",revision:"77fa57afac4916cd60e4a04699da41ed"},{url:"assets/js/page-页面信息.64e98591.js",revision:"db08bbde7e667790476f3f9b3cde5d30"},{url:"assets/js/page-页面布局.52532df6.js",revision:"c773b5e81a158f26517fd6ed6b444284"},{url:"assets/js/page-页面配置.f6fef426.js",revision:"5195f86d364d524efcceb937816354b7"},{url:"assets/js/page-默认页脚.7617702e.js",revision:"dc97ba1140cb40e789be48cc62736fab"},{url:"assets/js/vendors~layout-Layout.30e2251d.js",revision:"cef8a9f563bff02334050f6aead34882"},{url:"category/component/index.html",revision:"bfcbcad5a713c33003ac3d4135f2e42f"},{url:"category/index.html",revision:"912b32a9d26c53b09ac6cac28d57f5b9"},{url:"category/layout/index.html",revision:"e50daee51d9f2ddd48cccafda9efdf7d"},{url:"component/disable.html",revision:"543f739f92a91711189bd8f17d84f929"},{url:"component/footer/default.html",revision:"4944dd9ce5de38657d0a733eb3a38657"},{url:"component/footer/diy.html",revision:"26817ad3a4d930fea19b0d2c168df142"},{url:"component/footer/index.html",revision:"94c802a483b32c47626d3f108360cd29"},{url:"component/footer/link.html",revision:"924b7c84052e07110e6275296d8d559f"},{url:"component/footer/outlink.html",revision:"df5cad9ccca7059f214a2991a8847a3a"},{url:"component/footer/text.html",revision:"ac81a24265f0fc2b5f16f21aec34fa99"},{url:"component/index.html",revision:"d22ed310c566af8c161e78b31b369317"},{url:"component/pageInfo.html",revision:"28df0df7de08f60731b6d32ceb6235d3"},{url:"en/index.html",revision:"02924be7dcad5af7a3e840a9377ca067"},{url:"en/test/detail/markdown.html",revision:"f41a21915071afdfac644532f8a72d04"},{url:"en/test/detail/page.html",revision:"aea4c3d554f1327ebeabe5bc5860847d"},{url:"en/test/footer/default.html",revision:"edb640dbe34e2490e75859220c3a47b3"},{url:"en/test/footer/diy.html",revision:"b7863cfb71b925530a31f06eaf1d1512"},{url:"en/test/footer/index.html",revision:"c0d6d4882d7a6a04619f4fc9e35316d1"},{url:"en/test/footer/link.html",revision:"98f886461f88003de3b9b02971f46e0e"},{url:"en/test/footer/outlink.html",revision:"9b255b4a650a0c75305f255e9bdc981e"},{url:"en/test/footer/text.html",revision:"9b4e96a7007851eafa1b5f1f7721ded2"},{url:"en/test/index.html",revision:"2dc5188260d0a4b9f7a2fe2985a68994"},{url:"encrypt/index.html",revision:"80759c47af4e690324000f8a90704c7a"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"1b0ed4f98996180023c8e1faccb3359a"},{url:"intro.html",revision:"db16b72398dfe24c7108e141a8ee6683"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"b709082aff09940ed648a8e9ff6d48fa"},{url:"sticky.html",revision:"5cd6cf62c654e4f353e03f0b73d7ae63"},{url:"tag/footer/index.html",revision:"e9282cc042dc690eba08f71e461587a7"},{url:"tag/index.html",revision:"8aa5996727e875a469804beb6e89fe45"},{url:"tag/layout/index.html",revision:"a31b25672446f5f2e3fd8aaaeb2da745"},{url:"tag/markdown/index.html",revision:"840ae3f5d71fdb0d7220851625690cbf"},{url:"test/index.html",revision:"d05f1201d0f8d70455f6edcd0457b968"},{url:"timeline/index.html",revision:"a8ee6ad73f2dcdb66f2aa8e31d4d3c01"}],{})}));
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
