if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"6497982ca580e2657f31b442fc5401af"},{url:"article/index.html",revision:"029471291b507b691d5e623a48262fa9"},{url:"assets/css/0.styles.be17cd1e.css",revision:"868da01301ee4dc15c44fce62b06f27c"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.5722d064.js",revision:"54a37dcdd5d01a03369a3fb1fad7e57b"},{url:"assets/js/layout-Blog.5b24068d.js",revision:"e67ab93b62604f16cbe0f1f7c1ba506f"},{url:"assets/js/layout-Blog~layout-Layout.852c4fae.js",revision:"e52dc9bbc2102af13637e8b7c92695c7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.e520de24.js",revision:"01b0686f9b577d2075b0da156ce86dc8"},{url:"assets/js/layout-Layout.c8218756.js",revision:"a8ec07949bcef4dbd15a7baea757f73b"},{url:"assets/js/layout-NotFound.64de382b.js",revision:"0e61814890d877a8ca7cbf080aed9fa6"},{url:"assets/js/page-Markdown增强--4d787654.5b7748ea.js",revision:"a0dc28cd66b030fb33c80ea41fdb3160"},{url:"assets/js/page-Markdown增强--87b26038.70dba297.js",revision:"a4649e1cd6eb5c2416b3206464e7530a"},{url:"assets/js/page-vuepress-theme-hope--145768b6.c8314927.js",revision:"aabb1af95567d1ebdf0e27f9ce2160e7"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.5a954162.js",revision:"bd69182040b3165fc210deb7653364f4"},{url:"assets/js/page-个人介绍--f358bcd4.6515b78a.js",revision:"11501fd143c2ebf31e5b118a6e080ed1"},{url:"assets/js/page-侧边栏auto--3a90cf96.adaf8230.js",revision:"6c7497fc5aea14bc7c991b072f4de30b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.ea752d0f.js",revision:"c66c2b03b5b907f4464ef38c6ff8e946"},{url:"assets/js/page-外部链接页脚--0f1c0bec.e085f6c4.js",revision:"3518b14c3778edcd72da3c67bd7bc8a9"},{url:"assets/js/page-密码测试--1d89700e.0c2caa8c.js",revision:"3fdc21280a20f540e39bbae8053e6b7b"},{url:"assets/js/page-文字页脚--5ea4d836.81ab8a7e.js",revision:"59ef6042deef5dff6f4b228305d1512e"},{url:"assets/js/page-文字页脚--854e1b54.3b33ae1f.js",revision:"917fd064d8ab4207c9ff913c3bac54cf"},{url:"assets/js/page-无页脚--727687b5.e931bdce.js",revision:"cabd7e5c1a987d24c00005024cbca662"},{url:"assets/js/page-无页脚--c5727fd6.8c5d644a.js",revision:"1ee8216938280c033dc910527da072c6"},{url:"assets/js/page-笔记列表--13847be8.98537a96.js",revision:"d3ba3c538f2c9c9c25c2d3ae3e160cb7"},{url:"assets/js/page-笔记列表--253f1d56.287fc395.js",revision:"d769b875fc9b07d0bccd15034dc76990"},{url:"assets/js/page-笔记列表--36afc214.aa2d179b.js",revision:"bbbc6203bfcdbc24384ece94b740b3f4"},{url:"assets/js/page-笔记列表--3706d596.c1b7f13f.js",revision:"863ac087343f84dec54d6c323577bf83"},{url:"assets/js/page-笔记列表--4395057e.8e8f3749.js",revision:"a8e44cb9f4cfdf0999c1641b4f8f5fbe"},{url:"assets/js/page-笔记列表--48777a54.d4a01797.js",revision:"9c8f349755add8ca563db057b3939a8c"},{url:"assets/js/page-笔记列表--4c6992b4.ee05b538.js",revision:"9921004ade7974e9752fd77085406598"},{url:"assets/js/page-笔记列表--5a3f3294.c236a139.js",revision:"9b516e5f8598b0cdabc4ce5383bafd4a"},{url:"assets/js/page-笔记列表--779dd3f6.04ee521c.js",revision:"de10344ca89bc356999216bbdd12c2e1"},{url:"assets/js/page-笔记列表--bfdc1d38.218ddb6b.js",revision:"e6b8bc28436c247fb227084218db1c1c"},{url:"assets/js/page-笔记列表--ed34e794.f6f0acd2.js",revision:"3b43b254a8188da0d0a1bdafbab44202"},{url:"assets/js/page-笔记列表--fefc9fd4.e3fa1112.js",revision:"85e2febeca81353a0052138a0e031049"},{url:"assets/js/page-组件测试--33a9d46e.9fa862a3.js",revision:"2acff6e59f08370f39137fb43921af52"},{url:"assets/js/page-组件禁用--412a7956.62f0cf9b.js",revision:"3e0d7e5da8f41408d9530102e9d6bdcd"},{url:"assets/js/page-置顶文章--bbc4e3a0.48db158e.js",revision:"a81e41e5f569011854a9007e80883645"},{url:"assets/js/page-自定义页脚--638ce0d4.760725e3.js",revision:"ffb7b10b951cd5fbd4b912f768def985"},{url:"assets/js/page-自定义页脚--76fb1e1e.5f97ff10.js",revision:"74ee804ecdc574be2d2151b0089718ca"},{url:"assets/js/page-页面信息--41bbd7b8.4980b7c9.js",revision:"8c0b8af6a2c3a2f9f0b8d3d5bdad1242"},{url:"assets/js/page-页面布局--0f63db56.750bdf98.js",revision:"9a12e48dc1f347cc8b65bb9ee60ea3f2"},{url:"assets/js/page-页面布局--c006385a.ca8d71e5.js",revision:"a0b0acfe6a2081c8b7c284eb0b515604"},{url:"assets/js/page-页面配置--36b78854.65a2021f.js",revision:"ff70c0fb995134d5c3d78ad9fc5f4030"},{url:"assets/js/page-默认页脚--9df0770c.39b09bc9.js",revision:"49f28ecc63c13e6d45ea150c7c398461"},{url:"assets/js/page-默认页脚--d5d7bcf8.711bedb2.js",revision:"ea97204a07ecabb054fbd7173e6ee837"},{url:"assets/js/vendors~layout-Layout.ad4c9f7c.js",revision:"77ed792d2c2c1b8bd3ea2287405afe74"},{url:"category/component/index.html",revision:"38d234c6f8c313f673cb489b8acde952"},{url:"category/index.html",revision:"58e75f7443eec8755019370a4bfa882c"},{url:"category/layout/index.html",revision:"2e0db6406a51846f0c54ee18c0b893c9"},{url:"category/note/index.html",revision:"aac9b7eca969a656ad7b2b4fc8ecbb9d"},{url:"category/note/page/2/index.html",revision:"48b66e1dd832e74f7249aa723ac20349"},{url:"component/disable/index.html",revision:"c92e969ba905c9c141a0babd3baf779b"},{url:"component/footer/default/index.html",revision:"d5e0030e17350a2eecc23afa576f4dca"},{url:"component/footer/diy/index.html",revision:"54c2e4c4e03277210e170bad229783ef"},{url:"component/footer/index.html",revision:"3cf6167f602b4f641aa0e81f2c5c14d1"},{url:"component/footer/text/index.html",revision:"30541af7e65d5feedc883d5524d11bbb"},{url:"component/index.html",revision:"40c872138ccb792ec6477ba2b6739296"},{url:"component/pageInfo/index.html",revision:"8ead8b9094085370c964205cac930a76"},{url:"en/index.html",revision:"2267c6d85a7e65f58c606441a5e497e0"},{url:"en/test/detail/markdown/index.html",revision:"04b551be65c21ffac5ed95575c09a023"},{url:"en/test/detail/page/index.html",revision:"942a5537d14b60da13133b342ffe44a2"},{url:"en/test/footer/default/index.html",revision:"02ccf925d59b837e71777cb297f26432"},{url:"en/test/footer/diy/index.html",revision:"7fea30f2a8a701fe667637ecb6cf6119"},{url:"en/test/footer/index.html",revision:"ca1325121165111a9650fa89abc1f1c1"},{url:"en/test/footer/link/index.html",revision:"35d49318d8c6546c392190afb2244e5d"},{url:"en/test/footer/outlink/index.html",revision:"cf0249db587b95e93340135ad0b4f691"},{url:"en/test/footer/text/index.html",revision:"0571a41311721c3a57675cf15297e2e2"},{url:"en/test/index.html",revision:"d38c0df458739426470945506fdc0afc"},{url:"encrypt/index.html",revision:"ae28b0b10384f8d51dfa8aa988d7d855"},{url:"index.html",revision:"9e0c5ee4b0a7d05879e78e47bea51bb5"},{url:"intro/index.html",revision:"9c11f876d8543dd5df2d8c2e83d575cd"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"7c8d6ef75db7f063660bc25db6926a21"},{url:"notes/1/index.html",revision:"b02e451075cc0464c7e4afd75f755704"},{url:"notes/10/index.html",revision:"e8e7056f4e62e2f4a3b4ad6ca614f5ad"},{url:"notes/11/index.html",revision:"0e97f626ad547b724af8ed1ac5bcd55b"},{url:"notes/12/index.html",revision:"df92acc319b7da4883fd003f27a672b4"},{url:"notes/2/index.html",revision:"b172b91dfc585a59b19e988701d27ad0"},{url:"notes/3/index.html",revision:"c3487ebf20cabc9053a2b459dcc4e423"},{url:"notes/4/index.html",revision:"e7cfa8ff6b8529ccf6b9eef94b360681"},{url:"notes/6/index.html",revision:"38421fe61a5d7def38e23ce7623e894c"},{url:"notes/7/index.html",revision:"9d71e2cd7e4ffaebd739dce6d661a4af"},{url:"notes/8/index.html",revision:"06fce7227aad649326310c72bebd5dbe"},{url:"notes/9/index.html",revision:"526d44342bf57de007cbf0cabfb0d36d"},{url:"notes/index.html",revision:"286439eeda95322769de4adf6196888d"},{url:"sticky/index.html",revision:"51558ccda784e069f71adde360bd2be2"},{url:"tag/footer/index.html",revision:"8646e3330e0ba93c28ce4e2abc140795"},{url:"tag/index.html",revision:"5fd9b10861550ccbb8595cfb5644b045"},{url:"tag/layout/index.html",revision:"f954337837615a329fc1a67fc2ee12af"},{url:"tag/markdown/index.html",revision:"5bac850640878597571341cdb3249ab9"},{url:"tag/note/index.html",revision:"420b74639aae91d0f7bea0bb97ebabd1"},{url:"tag/note/page/2/index.html",revision:"fd5cc545e2c717bbf472e5065c317e10"},{url:"test/auto/index.html",revision:"c2877f86c576ca3922a305c4d492c624"},{url:"test/index.html",revision:"9c19b8f811cfa4976ba1fcb55e70d806"},{url:"timeline/index.html",revision:"0956a7c7fa03df3a2ec7da4bf2543da9"}],{})}));
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
