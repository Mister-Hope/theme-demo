if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"25eeed96e61c3d7ecd076a3e7f0975a2"},{url:"article/index.html",revision:"61246cc465dd60831e4dd79eefc1e999"},{url:"assets/css/0.styles.203870cb.css",revision:"d2067f309e3e932b93f9038da0b7fe2c"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.3cc7c8b5.js",revision:"3dfdca526c1e51f78c95e0ab0d28aaf7"},{url:"assets/js/layout-Blog.2a851ea8.js",revision:"900547d6f1ed8aa3967973969812e711"},{url:"assets/js/layout-Blog~layout-Layout.c3eae498.js",revision:"8f558c31e1dfb6b8796a104cec196649"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.948d52f3.js",revision:"2c707305be621a360ca93fba78c6223e"},{url:"assets/js/layout-Layout.1b2ed156.js",revision:"9f142da0527c5f8fe1d4e75f10148e4c"},{url:"assets/js/layout-NotFound.98b0ddda.js",revision:"08f7d493b2f5e9699d944b1f33a0d0e2"},{url:"assets/js/page-Home.8bf2dac7.js",revision:"9a024ee93c4c4244c707ac6ee06b76f0"},{url:"assets/js/page-Markdown 增强.943041f2.js",revision:"fcd60675f06922ad5410be103dc597f7"},{url:"assets/js/page-个人介绍.7297bc1b.js",revision:"c128f430f2cf7e287fe9d79a6abed603"},{url:"assets/js/page-内部链接页脚.035ee083.js",revision:"c4135951267d0b7399db88290b9407b8"},{url:"assets/js/page-外部链接页脚.a5e1f229.js",revision:"d3808039932c49cb75e1f83cb201a327"},{url:"assets/js/page-密码测试.942ff206.js",revision:"6120ee052ae79335e8533b61202d5ec3"},{url:"assets/js/page-文字页脚.5f13865b.js",revision:"d5bf10cf452515f5f962463f7dfe76b3"},{url:"assets/js/page-无页脚.2c8e8236.js",revision:"61aa452a186995aa5b079435c4bc9eb5"},{url:"assets/js/page-笔记列表.f691432f.js",revision:"edc5dd9fa9807855421f1ec592150fc4"},{url:"assets/js/page-组件测试.a8f268d3.js",revision:"48ee0298ce2f2301ba6b61a66537ea65"},{url:"assets/js/page-组件禁用.4ee6b96c.js",revision:"de035507f2dd0675f3221a22d202827e"},{url:"assets/js/page-置顶文章.d2e33ebc.js",revision:"2174e1b0216296beff720df1e6d07ce3"},{url:"assets/js/page-自定义页脚.0c0a4b4d.js",revision:"f8a264c38b63dbc8c20fd87ff89973e7"},{url:"assets/js/page-页面信息.351aa84b.js",revision:"6694149dae86f3a04b3a3cc82e78d1fd"},{url:"assets/js/page-页面布局.7b3ecffc.js",revision:"085c9b6cf79c510fb1735aa57b2d668b"},{url:"assets/js/page-页面配置.9e5fbe3f.js",revision:"24dd4b79dc28061477655ce2c3c736d0"},{url:"assets/js/page-默认页脚.4fd42446.js",revision:"48f0f567aed974f6477fb6ea9c0df66d"},{url:"assets/js/vendors~layout-Layout.c248af33.js",revision:"bd52a2dbd252d58dc79855fd363a7685"},{url:"category/component/index.html",revision:"bf2fe4a4572f2592da7a694ba7182358"},{url:"category/index.html",revision:"aeee199e3af5d655041ce2b87b320c3a"},{url:"category/layout/index.html",revision:"88a505b355d70dd4c13a8802c4a00a2c"},{url:"category/note/index.html",revision:"d892727cc508f0dcd52317f6429c33a5"},{url:"category/note/page/2/index.html",revision:"a059af64097c6846694de1f505f02d15"},{url:"component/disable/index.html",revision:"96e12a94c8b8cbd791be02c147120d00"},{url:"component/footer/default/index.html",revision:"52a33be9ed836ca2e4d4d81894c7ad08"},{url:"component/footer/diy/index.html",revision:"c64a79488e737bb56c1ab6ad42a3d89e"},{url:"component/footer/index.html",revision:"ebe761051acdde5cdd4faa69563d287a"},{url:"component/footer/text/index.html",revision:"69ffc02c8a38cc970e03086515d72fbe"},{url:"component/index.html",revision:"2852e8436e626efa4d51d0b7ad2df6ba"},{url:"component/pageInfo/index.html",revision:"3a82a0a67c61ae2baeb3c2cc845b17b4"},{url:"en/index.html",revision:"1906dc481ea1958d7ef17b7eb1e6c5c2"},{url:"en/test/detail/markdown/index.html",revision:"091e5917bfb573ae99b16744410c7446"},{url:"en/test/detail/page/index.html",revision:"d7ad29639f9c5149ba73986fdd70cfdc"},{url:"en/test/footer/default/index.html",revision:"aaabef6522ee533ad93a2b9ae32d04f4"},{url:"en/test/footer/diy/index.html",revision:"47af3015dcc7804ae2a27aab913d59d5"},{url:"en/test/footer/index.html",revision:"29dea8488394c1edc0a4c2c459c85467"},{url:"en/test/footer/link/index.html",revision:"8c276430c8c7f71b9f0db0584e71936e"},{url:"en/test/footer/outlink/index.html",revision:"9b2e81981b2067130e52f42082f06bf6"},{url:"en/test/footer/text/index.html",revision:"f515a6dd42b7b97fd3942db77db39f64"},{url:"en/test/index.html",revision:"915dcbfd3beb39d9a7f6f1e5e8ee7e7f"},{url:"encrypt/index.html",revision:"cc8c34f01faa7be9faed867aa1314046"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"a28e49152d43d231ff270d671b20a32f"},{url:"intro/index.html",revision:"3fc74c3faf51073287c19d3c898eb01c"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"cc2eb2926a306a81d04a769d400cc39d"},{url:"notes/1/index.html",revision:"f450661f490173c78826fb617a0b9fbb"},{url:"notes/10/index.html",revision:"e56e33cfde5fd2514fea55c0fbaaf96d"},{url:"notes/11/index.html",revision:"5b5eb24a306189f02e30b90626bda173"},{url:"notes/12/index.html",revision:"bd405daf97c5c41c45ced7a5db42081e"},{url:"notes/2/index.html",revision:"f812a1a5f182ccb1dce3b6a01298a835"},{url:"notes/3/index.html",revision:"892fbc95894e17a44c0861b87f52d1ca"},{url:"notes/4/index.html",revision:"e5fd1e650d41fc9a779bbc8861aed276"},{url:"notes/6/index.html",revision:"8a53b458879a43aea477ef77b6fb0fad"},{url:"notes/7/index.html",revision:"e10c27dd0a7bff36fc21b23f76a209b8"},{url:"notes/8/index.html",revision:"9ff71ca7b44ae791c70663f9fd7cf7a8"},{url:"notes/9/index.html",revision:"1d9a168f063c6863d866003f63efe6a1"},{url:"notes/index.html",revision:"553883b43e9f5306b5a832e7e6e43510"},{url:"sticky/index.html",revision:"ab6056adfed2d9b0f5952aabed336e1a"},{url:"tag/footer/index.html",revision:"b2f478b4a58cee74d4b4ad8252f2a044"},{url:"tag/index.html",revision:"8800c811f9f02517910b44c6cd000dec"},{url:"tag/layout/index.html",revision:"cdfa47f4f804aaffb192f0cf5b938ec0"},{url:"tag/markdown/index.html",revision:"5e54c9aaad9ad0207ea386cb5f8fe4d0"},{url:"tag/note/index.html",revision:"dc58d9c856000603107b9efce47e95cb"},{url:"tag/note/page/2/index.html",revision:"1d8669c4b329c926f05fe22e5de7750c"},{url:"test/index.html",revision:"e816f8bf54fd02d76fcfecebe1857f20"},{url:"timeline/index.html",revision:"e77c6839fd03f9385ecc1b045d9f9725"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
