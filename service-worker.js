if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"3c8063de5777714cb6999ff1fb884d5e"},{url:"article/index.html",revision:"a095df4b8ae26bbc684ff371be6f78b3"},{url:"assets/css/0.styles.be17cd1e.css",revision:"868da01301ee4dc15c44fce62b06f27c"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.6a36627c.js",revision:"39db6a227e14198edf233c63f80c9b45"},{url:"assets/js/layout-Blog.25e502bb.js",revision:"e67ab93b62604f16cbe0f1f7c1ba506f"},{url:"assets/js/layout-Blog~layout-Layout.15fcf576.js",revision:"e52dc9bbc2102af13637e8b7c92695c7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.59709a67.js",revision:"01b0686f9b577d2075b0da156ce86dc8"},{url:"assets/js/layout-Layout.a9d64e1c.js",revision:"a8ec07949bcef4dbd15a7baea757f73b"},{url:"assets/js/layout-NotFound.936032f6.js",revision:"0e61814890d877a8ca7cbf080aed9fa6"},{url:"assets/js/page-Markdown增强--4d787654.d8d83de3.js",revision:"a0dc28cd66b030fb33c80ea41fdb3160"},{url:"assets/js/page-Markdown增强--87b26038.175e400a.js",revision:"a4649e1cd6eb5c2416b3206464e7530a"},{url:"assets/js/page-vuepress-theme-hope--145768b6.d4043910.js",revision:"aabb1af95567d1ebdf0e27f9ce2160e7"},{url:"assets/js/page-vuepress-theme-hope--5dacd635.fe614ebd.js",revision:"bd69182040b3165fc210deb7653364f4"},{url:"assets/js/page-个人介绍--f358bcd4.52718f96.js",revision:"11501fd143c2ebf31e5b118a6e080ed1"},{url:"assets/js/page-侧边栏auto--3a90cf96.2d3cf412.js",revision:"6c7497fc5aea14bc7c991b072f4de30b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.d45ea1cf.js",revision:"c66c2b03b5b907f4464ef38c6ff8e946"},{url:"assets/js/page-外部链接页脚--0f1c0bec.71fafec0.js",revision:"3518b14c3778edcd72da3c67bd7bc8a9"},{url:"assets/js/page-密码测试--1d89700e.f03847bd.js",revision:"3fdc21280a20f540e39bbae8053e6b7b"},{url:"assets/js/page-文字页脚--5ea4d836.ef423e6c.js",revision:"59ef6042deef5dff6f4b228305d1512e"},{url:"assets/js/page-文字页脚--854e1b54.09d02510.js",revision:"917fd064d8ab4207c9ff913c3bac54cf"},{url:"assets/js/page-无页脚--727687b5.937f104e.js",revision:"cabd7e5c1a987d24c00005024cbca662"},{url:"assets/js/page-无页脚--c5727fd6.218f77be.js",revision:"1ee8216938280c033dc910527da072c6"},{url:"assets/js/page-笔记列表--13847be8.d4722a98.js",revision:"d3ba3c538f2c9c9c25c2d3ae3e160cb7"},{url:"assets/js/page-笔记列表--253f1d56.566c70b0.js",revision:"d769b875fc9b07d0bccd15034dc76990"},{url:"assets/js/page-笔记列表--36afc214.a6b2c911.js",revision:"bbbc6203bfcdbc24384ece94b740b3f4"},{url:"assets/js/page-笔记列表--3706d596.3c58997d.js",revision:"863ac087343f84dec54d6c323577bf83"},{url:"assets/js/page-笔记列表--4395057e.6faf2a03.js",revision:"a8e44cb9f4cfdf0999c1641b4f8f5fbe"},{url:"assets/js/page-笔记列表--48777a54.e2584a1b.js",revision:"9c8f349755add8ca563db057b3939a8c"},{url:"assets/js/page-笔记列表--4c6992b4.5970e83d.js",revision:"9921004ade7974e9752fd77085406598"},{url:"assets/js/page-笔记列表--5a3f3294.e5c42539.js",revision:"9b516e5f8598b0cdabc4ce5383bafd4a"},{url:"assets/js/page-笔记列表--779dd3f6.89d41aaa.js",revision:"de10344ca89bc356999216bbdd12c2e1"},{url:"assets/js/page-笔记列表--bfdc1d38.08c59f7a.js",revision:"e6b8bc28436c247fb227084218db1c1c"},{url:"assets/js/page-笔记列表--ed34e794.421cc081.js",revision:"3b43b254a8188da0d0a1bdafbab44202"},{url:"assets/js/page-笔记列表--fefc9fd4.bdf8f7f7.js",revision:"85e2febeca81353a0052138a0e031049"},{url:"assets/js/page-组件测试--33a9d46e.5b056245.js",revision:"2acff6e59f08370f39137fb43921af52"},{url:"assets/js/page-组件禁用--412a7956.1c150604.js",revision:"3e0d7e5da8f41408d9530102e9d6bdcd"},{url:"assets/js/page-置顶文章--bbc4e3a0.82785ced.js",revision:"a81e41e5f569011854a9007e80883645"},{url:"assets/js/page-自定义页脚--638ce0d4.dfbc1a5a.js",revision:"ffb7b10b951cd5fbd4b912f768def985"},{url:"assets/js/page-自定义页脚--76fb1e1e.38f37423.js",revision:"74ee804ecdc574be2d2151b0089718ca"},{url:"assets/js/page-页面信息--41bbd7b8.ce2f1abb.js",revision:"8c0b8af6a2c3a2f9f0b8d3d5bdad1242"},{url:"assets/js/page-页面布局--0f63db56.3c9dce81.js",revision:"9a12e48dc1f347cc8b65bb9ee60ea3f2"},{url:"assets/js/page-页面布局--c006385a.9bee2035.js",revision:"a0b0acfe6a2081c8b7c284eb0b515604"},{url:"assets/js/page-页面配置--36b78854.79d1b1eb.js",revision:"ff70c0fb995134d5c3d78ad9fc5f4030"},{url:"assets/js/page-默认页脚--9df0770c.7fe3f634.js",revision:"49f28ecc63c13e6d45ea150c7c398461"},{url:"assets/js/page-默认页脚--d5d7bcf8.72be8054.js",revision:"ea97204a07ecabb054fbd7173e6ee837"},{url:"assets/js/vendors~layout-Layout.330a9d3d.js",revision:"77ed792d2c2c1b8bd3ea2287405afe74"},{url:"category/component/index.html",revision:"f46d859141fca523038ff5d08d46e087"},{url:"category/index.html",revision:"370fd46e369a3feafa2b7e7be63ec313"},{url:"category/layout/index.html",revision:"b337049a1a6bdfa291940c53961ba98e"},{url:"category/note/index.html",revision:"c35d86a4f78215566faa4e5ce3ff9eb9"},{url:"category/note/page/2/index.html",revision:"60f81e086350dbc8b0d8fad95aaffc5b"},{url:"component/disable/index.html",revision:"7be24c854fbbc9b9f344b9703d860394"},{url:"component/footer/default/index.html",revision:"6a91b43559de2705a28382dd821139cb"},{url:"component/footer/diy/index.html",revision:"8dede0fb2ea52e757fa9fc068d64ef06"},{url:"component/footer/index.html",revision:"0a90ff3333d75d84989f97d8689aeb71"},{url:"component/footer/text/index.html",revision:"4377f25ba0163364a6bad5ab3d8143dd"},{url:"component/index.html",revision:"15c3f9e6c95cd9e45accb78a432cb52e"},{url:"component/pageInfo/index.html",revision:"866b5957ac927b96844400ac63da3ef1"},{url:"en/index.html",revision:"99eb5756aa62044adea7f0a6d075c7d6"},{url:"en/test/detail/markdown/index.html",revision:"e1555a6ff48977a7b6b9d2e8d8ec1f05"},{url:"en/test/detail/page/index.html",revision:"824141bbdb52880a02db85ac6649030c"},{url:"en/test/footer/default/index.html",revision:"1c9d33a3ae10c20fe1f63e294cc58912"},{url:"en/test/footer/diy/index.html",revision:"e4fc958a38ba39d193abe94feb50c066"},{url:"en/test/footer/index.html",revision:"5669da1c35b93a2b1f7894f28bc8a65a"},{url:"en/test/footer/link/index.html",revision:"38dd4392363b177256d5d77a10fa687d"},{url:"en/test/footer/outlink/index.html",revision:"0cc9aca47fdbdf4e8483f3ad808623ce"},{url:"en/test/footer/text/index.html",revision:"84674cb2cb870d3f8d8734a7c4346bce"},{url:"en/test/index.html",revision:"82f1bba0c40c79a824736e416529e1ad"},{url:"encrypt/index.html",revision:"5393fc0f10550ac39c88174e8902c4c0"},{url:"index.html",revision:"6cdce342c4a48805fa28c155ef8d299c"},{url:"intro/index.html",revision:"c7955bec700f86a3609689a28258a540"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"e33e8bd073c368763d0670806d43f200"},{url:"notes/1/index.html",revision:"59d47afa9db704e5154e575ac580cc4d"},{url:"notes/10/index.html",revision:"b58432bcd85f4f192b381b74b29c8a6c"},{url:"notes/11/index.html",revision:"e10b17ee7bd13a2eb06220f7aad09a1f"},{url:"notes/12/index.html",revision:"7033b6ec7e3303b0332ff17c9e5e33d6"},{url:"notes/2/index.html",revision:"70e61db63a06b48b8ebf44d366d87385"},{url:"notes/3/index.html",revision:"c7271649c616fb7db4c1eba0a9bb8330"},{url:"notes/4/index.html",revision:"0e024e911bd85ad5ab710e79ebddc6d6"},{url:"notes/6/index.html",revision:"b9eb92b5d8b675729cfaba75907557b7"},{url:"notes/7/index.html",revision:"a944b12716168633371bb05c3d606aed"},{url:"notes/8/index.html",revision:"bc3c73eac2cecd1e8ed0cb1067822c33"},{url:"notes/9/index.html",revision:"098f6c8663efff7ad155ddce0b75b0dd"},{url:"notes/index.html",revision:"82d57aa01a840e08e388978634636de5"},{url:"sticky/index.html",revision:"92d79a2ac2cd58ab9dde933fbd6011c7"},{url:"tag/footer/index.html",revision:"ab0673526f764b10d3bf768c4be7690f"},{url:"tag/index.html",revision:"cba2722adc1ac65a6ab36b95b0d546c7"},{url:"tag/layout/index.html",revision:"795c9355f975043b606085d52b14769a"},{url:"tag/markdown/index.html",revision:"e7e665385ee495d3a6d811bedc649224"},{url:"tag/note/index.html",revision:"4cff29fe48d47c92a621b387552509b1"},{url:"tag/note/page/2/index.html",revision:"4f1d3034451cb08c62e5bbf29e40d5b7"},{url:"test/auto/index.html",revision:"4c17955e3e162bb95c73b84f7f00fec8"},{url:"test/index.html",revision:"a448f759472eb00cc46912774d72f8ed"},{url:"timeline/index.html",revision:"98985be08be7fb3a0438056e9b314298"}],{})}));
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
