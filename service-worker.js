if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"75bc3f9676a15ca2bec5004067def4ea"},{url:"article/index.html",revision:"4584d6032cb4038c8ff07b3da4430632"},{url:"assets/css/0.styles.bd1db64f.css",revision:"2696f59a004f34867c2c9cb5a23672ef"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.e3e3c4ae.js",revision:"7b45e033acbe63d0f18f73f157ad95a5"},{url:"assets/js/layout-Blog.b4866ee2.js",revision:"e67ab93b62604f16cbe0f1f7c1ba506f"},{url:"assets/js/layout-Blog~layout-Layout.59694b66.js",revision:"e52dc9bbc2102af13637e8b7c92695c7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.c09951ea.js",revision:"01b0686f9b577d2075b0da156ce86dc8"},{url:"assets/js/layout-Layout.b0bcaa88.js",revision:"a8ec07949bcef4dbd15a7baea757f73b"},{url:"assets/js/layout-NotFound.aec68f50.js",revision:"0e61814890d877a8ca7cbf080aed9fa6"},{url:"assets/js/page-Home--145768b6.d4008240.js",revision:"162fd7d70af25cc0882d2b393a25d576"},{url:"assets/js/page-Home--5dacd635.fa397ca5.js",revision:"44d59d785347949f274653d227450157"},{url:"assets/js/page-Markdown增强--4d787654.7f64b602.js",revision:"7653136aa092fac246413264e1ce7412"},{url:"assets/js/page-Markdown增强--87b26038.a89fc0c1.js",revision:"5821df38e8f92f3e7230609b75400688"},{url:"assets/js/page-个人介绍--f358bcd4.793076bb.js",revision:"11501fd143c2ebf31e5b118a6e080ed1"},{url:"assets/js/page-侧边栏auto--3a90cf96.4f9a6294.js",revision:"6c7497fc5aea14bc7c991b072f4de30b"},{url:"assets/js/page-内部链接页脚--31f3a4f6.64b75270.js",revision:"c66c2b03b5b907f4464ef38c6ff8e946"},{url:"assets/js/page-外部链接页脚--0f1c0bec.6ae39894.js",revision:"3518b14c3778edcd72da3c67bd7bc8a9"},{url:"assets/js/page-密码测试--1d89700e.c9fa1187.js",revision:"3fdc21280a20f540e39bbae8053e6b7b"},{url:"assets/js/page-文字页脚--5ea4d836.c7e62b20.js",revision:"59ef6042deef5dff6f4b228305d1512e"},{url:"assets/js/page-文字页脚--854e1b54.5ceb263a.js",revision:"917fd064d8ab4207c9ff913c3bac54cf"},{url:"assets/js/page-无页脚--727687b5.17a3a1d1.js",revision:"cabd7e5c1a987d24c00005024cbca662"},{url:"assets/js/page-无页脚--c5727fd6.603ef52d.js",revision:"1ee8216938280c033dc910527da072c6"},{url:"assets/js/page-笔记列表--13847be8.f074696f.js",revision:"d3ba3c538f2c9c9c25c2d3ae3e160cb7"},{url:"assets/js/page-笔记列表--253f1d56.7894ab64.js",revision:"d769b875fc9b07d0bccd15034dc76990"},{url:"assets/js/page-笔记列表--36afc214.32647e6a.js",revision:"bbbc6203bfcdbc24384ece94b740b3f4"},{url:"assets/js/page-笔记列表--3706d596.9394ff96.js",revision:"863ac087343f84dec54d6c323577bf83"},{url:"assets/js/page-笔记列表--4395057e.12c58eed.js",revision:"a8e44cb9f4cfdf0999c1641b4f8f5fbe"},{url:"assets/js/page-笔记列表--48777a54.07c54167.js",revision:"9c8f349755add8ca563db057b3939a8c"},{url:"assets/js/page-笔记列表--4c6992b4.82f1bd41.js",revision:"9921004ade7974e9752fd77085406598"},{url:"assets/js/page-笔记列表--5a3f3294.cb62ca59.js",revision:"9b516e5f8598b0cdabc4ce5383bafd4a"},{url:"assets/js/page-笔记列表--779dd3f6.1529f332.js",revision:"de10344ca89bc356999216bbdd12c2e1"},{url:"assets/js/page-笔记列表--bfdc1d38.f30413e6.js",revision:"e6b8bc28436c247fb227084218db1c1c"},{url:"assets/js/page-笔记列表--ed34e794.89055695.js",revision:"3b43b254a8188da0d0a1bdafbab44202"},{url:"assets/js/page-笔记列表--fefc9fd4.030eb8e1.js",revision:"85e2febeca81353a0052138a0e031049"},{url:"assets/js/page-组件测试--33a9d46e.3c6a7d6a.js",revision:"2acff6e59f08370f39137fb43921af52"},{url:"assets/js/page-组件禁用--412a7956.2b2eb6ee.js",revision:"3e0d7e5da8f41408d9530102e9d6bdcd"},{url:"assets/js/page-置顶文章--bbc4e3a0.385a5a76.js",revision:"a81e41e5f569011854a9007e80883645"},{url:"assets/js/page-自定义页脚--638ce0d4.e7e83846.js",revision:"ffb7b10b951cd5fbd4b912f768def985"},{url:"assets/js/page-自定义页脚--76fb1e1e.8691e4b9.js",revision:"74ee804ecdc574be2d2151b0089718ca"},{url:"assets/js/page-页面信息--41bbd7b8.7af1828a.js",revision:"8c0b8af6a2c3a2f9f0b8d3d5bdad1242"},{url:"assets/js/page-页面布局--0f63db56.a0170e10.js",revision:"9a12e48dc1f347cc8b65bb9ee60ea3f2"},{url:"assets/js/page-页面布局--c006385a.9b3c6093.js",revision:"a0b0acfe6a2081c8b7c284eb0b515604"},{url:"assets/js/page-页面配置--36b78854.4ab1dbee.js",revision:"ff70c0fb995134d5c3d78ad9fc5f4030"},{url:"assets/js/page-默认页脚--9df0770c.b009d161.js",revision:"49f28ecc63c13e6d45ea150c7c398461"},{url:"assets/js/page-默认页脚--d5d7bcf8.6ba19cb3.js",revision:"ea97204a07ecabb054fbd7173e6ee837"},{url:"assets/js/vendors~layout-Layout.26206812.js",revision:"77ed792d2c2c1b8bd3ea2287405afe74"},{url:"category/component/index.html",revision:"1801a13bc51929f4901ea6d4672b1d90"},{url:"category/index.html",revision:"23d4e32c36f028676540d20e1b05efbc"},{url:"category/layout/index.html",revision:"83e9f3118548d597542cfd1bf1984f72"},{url:"category/note/index.html",revision:"91be7dc50ebea2a4d8ab4194518dd89b"},{url:"category/note/page/2/index.html",revision:"d6f4ef5d628f7e3b5c7631844c78a0c2"},{url:"component/disable/index.html",revision:"dd391086bf486b466f67e7d82ef8bf0f"},{url:"component/footer/default/index.html",revision:"3dc3c2fa85263e6b4aad3e19d8a802c9"},{url:"component/footer/diy/index.html",revision:"5050bdf562db85e7aa3980764515d828"},{url:"component/footer/index.html",revision:"3e65371e1ce42296d52c16346b3ea71c"},{url:"component/footer/text/index.html",revision:"2ef320a0eecdd084336610e35b63c021"},{url:"component/index.html",revision:"9df932348a89fe9ba81fb95814e90f44"},{url:"component/pageInfo/index.html",revision:"ce302611c9c1460e81477a0959cec3be"},{url:"en/index.html",revision:"d125d8f7ac637c6a2d3b739111a0f9a8"},{url:"en/test/detail/markdown/index.html",revision:"ec45b823ffcb57468e9bbbf33b2abf2a"},{url:"en/test/detail/page/index.html",revision:"db732eb48a3712c35d6f1af95f2ff66c"},{url:"en/test/footer/default/index.html",revision:"31b976b1343dd0ab7060d35d9c25db3d"},{url:"en/test/footer/diy/index.html",revision:"4675ec543441de96973b8d8ef7ff4fc8"},{url:"en/test/footer/index.html",revision:"bd678a9f18d95fc74bac000abb3bb9bb"},{url:"en/test/footer/link/index.html",revision:"4984c7eae315906346227d9350760b15"},{url:"en/test/footer/outlink/index.html",revision:"0674dcb9f2dd73818f65a10138baebcc"},{url:"en/test/footer/text/index.html",revision:"3caec314dd52da514e6013b90970b634"},{url:"en/test/index.html",revision:"db65d9b58a0bb415c9be4999dc610a67"},{url:"encrypt/index.html",revision:"f7fc11d6161faddab12f29e5456d3f4c"},{url:"index.html",revision:"a733ef8beca0360fa29f2d5c8beb8dd3"},{url:"intro/index.html",revision:"47a9a27ee8f787222579beb278db13ea"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"46fa891736c19771571f30ca6de8ed56"},{url:"notes/1/index.html",revision:"6c1db843c19972f0a1379f775dd8051f"},{url:"notes/10/index.html",revision:"cb19bd784b84b7ccf609bca7c8e43e6c"},{url:"notes/11/index.html",revision:"4ba99bbd60d60209bdcad251160d0b89"},{url:"notes/12/index.html",revision:"b811c6b70378a7dc671f61febe868325"},{url:"notes/2/index.html",revision:"4677fb1efb8f8e0662eda62d32ef3968"},{url:"notes/3/index.html",revision:"db6419da33d7be5ff2eefe2bf45bf0e3"},{url:"notes/4/index.html",revision:"7ecea2bb1b7f3c786abe6c1cbd71c437"},{url:"notes/6/index.html",revision:"9d94f7c2df2ba6b9da57362c78aaffce"},{url:"notes/7/index.html",revision:"e5cfe901474d00ece440f364410a0bd7"},{url:"notes/8/index.html",revision:"25e938388992d85408af3314db2ce94a"},{url:"notes/9/index.html",revision:"2dfffe031ef9cf295909efc9b8e4433d"},{url:"notes/index.html",revision:"9ea07955c0deed5be8b166248f777f26"},{url:"sticky/index.html",revision:"97795e49a0c457a6997d90b468b02bbf"},{url:"tag/footer/index.html",revision:"327e35f3c148026b81844fb0620260ea"},{url:"tag/index.html",revision:"f355c0a91488c3913606b2193f17c175"},{url:"tag/layout/index.html",revision:"25146286db68762b92c09b0f1eb3a85b"},{url:"tag/markdown/index.html",revision:"72e90eb298a9e293ed1330453166c4cf"},{url:"tag/note/index.html",revision:"8e04f2557df831430f70a683d5226c4f"},{url:"tag/note/page/2/index.html",revision:"eec0e50d924f56ca7be9137b96802ca6"},{url:"test/auto/index.html",revision:"a5fe58a4d87878a6f28895637e97d68e"},{url:"test/index.html",revision:"d8284359eb2fa62e769c3c266abc92ed"},{url:"timeline/index.html",revision:"a80cbb58bbe3270500d48f6749504a38"}],{})}));
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
