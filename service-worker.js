if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"e4cb6742cb1472b63ca5e5c96b1ca23e"},{url:"article/index.html",revision:"505b5a1bfc48a8c7d5557366c186ef27"},{url:"assets/css/0.styles.a5f2339d.css",revision:"8ec448f7eb5f414315310792b700a07d"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.1943308e.js",revision:"ace2b607273ccfc69b55b01917bc3d52"},{url:"assets/js/layout-Blog.b1b29713.js",revision:"0cecf95cb2a451a6525c8182517edc38"},{url:"assets/js/layout-Blog~layout-Layout.6f8e254c.js",revision:"94064f22260a2214b072bc5b178107e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.b2ffba1f.js",revision:"14852536d352d679fb3bc259501502db"},{url:"assets/js/layout-Layout.4ad544f9.js",revision:"e9af2a07b25ba6d72fe8df88264cb121"},{url:"assets/js/layout-NotFound.39ec5aee.js",revision:"599367be3fada65ee8ad3dee535646d7"},{url:"assets/js/page-Home--145768b6.d4008240.js",revision:"162fd7d70af25cc0882d2b393a25d576"},{url:"assets/js/page-Home--5dacd635.2db07053.js",revision:"1a95a22eeda24e3fa0f0e7c55f2e4216"},{url:"assets/js/page-Markdown增强--4d787654.8d98dde9.js",revision:"98acd8e5c5e3821c1b14f2019acb129a"},{url:"assets/js/page-Markdown增强--87b26038.344a5dd6.js",revision:"9e4e188dd89b541fa43ba0c698aed6b5"},{url:"assets/js/page-个人介绍--f358bcd4.42d33164.js",revision:"bd7a9a0b2d6f4cd67b9191d4a26fbb2a"},{url:"assets/js/page-侧边栏auto--3a90cf96.60e090fb.js",revision:"7cd5d72efb0a504c1e00a5fc019ffb07"},{url:"assets/js/page-内部链接页脚--31f3a4f6.1e2d1618.js",revision:"34feb23e0c0cfc733e4432bf673fa49e"},{url:"assets/js/page-外部链接页脚--0f1c0bec.73980295.js",revision:"794d308dd8cde829899798a8c29f78a1"},{url:"assets/js/page-密码测试--1d89700e.500012d0.js",revision:"2dbd4f8fe36db6fe6a358621b8c74b9f"},{url:"assets/js/page-文字页脚--5ea4d836.47dbcead.js",revision:"28bb5c8acf7c7b5e4f665f7ec06320d4"},{url:"assets/js/page-文字页脚--854e1b54.99d375be.js",revision:"8d456a383878c3f2c2f752c7c4838c67"},{url:"assets/js/page-无页脚--727687b5.942ef2d6.js",revision:"21c25f409fb3f26f7d2ae704032727a1"},{url:"assets/js/page-无页脚--c5727fd6.195769cc.js",revision:"543730ba16862d35da92c2e8f17bd93e"},{url:"assets/js/page-笔记列表--13847be8.4e670d84.js",revision:"4f11201bb1c6f7f4e920b454a8400e79"},{url:"assets/js/page-笔记列表--253f1d56.de518cbf.js",revision:"61dcec557df7bc532cf0ee00985fae4c"},{url:"assets/js/page-笔记列表--36afc214.df3ea214.js",revision:"026a1e451a2175498a5bdc71cf0895fc"},{url:"assets/js/page-笔记列表--3706d596.61c6766a.js",revision:"f28ccd5a9ca28f68141fb48a81e41df8"},{url:"assets/js/page-笔记列表--4395057e.f8058fb6.js",revision:"d4b91db904b9083f8be3aad17de7206d"},{url:"assets/js/page-笔记列表--48777a54.ed89487e.js",revision:"f2e18e0418b0d4c9807ec543f05bb4fa"},{url:"assets/js/page-笔记列表--4c6992b4.dc4fbba7.js",revision:"31bc6fb8e15494d773984c71d27ddec2"},{url:"assets/js/page-笔记列表--5a3f3294.eb992a20.js",revision:"a932ac3ec9166c6cf5004a55f46550f4"},{url:"assets/js/page-笔记列表--779dd3f6.0504bc63.js",revision:"3594cc0d388663d97c5783bf4ab6357c"},{url:"assets/js/page-笔记列表--bfdc1d38.b1b43297.js",revision:"25e89351e3bbfd2769c200dec4e1b264"},{url:"assets/js/page-笔记列表--ed34e794.3799be52.js",revision:"0b61007de0107b50c41925bdc77b0830"},{url:"assets/js/page-笔记列表--fefc9fd4.c0dc1a0a.js",revision:"f65eea8cf68d97f6d989ae048224f06d"},{url:"assets/js/page-组件测试--33a9d46e.c5b464e6.js",revision:"d0c480f7c48b8d6ac9beccc556a740c4"},{url:"assets/js/page-组件禁用--412a7956.b3d03c17.js",revision:"3cac6dde2fff5c425dea7fcd314fdf0d"},{url:"assets/js/page-置顶文章--bbc4e3a0.d2736eb8.js",revision:"6a34f2e5e6091e9d0ee1d647c3e36fd2"},{url:"assets/js/page-自定义页脚--638ce0d4.9d990c2b.js",revision:"29ac3c21d5a5f362f7b4fea03d2b18b3"},{url:"assets/js/page-自定义页脚--76fb1e1e.3abd4e35.js",revision:"ca42da661c852a2fab6d460a1811d076"},{url:"assets/js/page-页面信息--41bbd7b8.f744f461.js",revision:"5107cddab843615db43522bafa4f3d61"},{url:"assets/js/page-页面布局--0f63db56.89991ef6.js",revision:"bf1435950820300643a54dc4df60ed2e"},{url:"assets/js/page-页面布局--c006385a.37310d81.js",revision:"c75d411e7a828c6e63f152292f7b0d30"},{url:"assets/js/page-页面配置--36b78854.d5033b2d.js",revision:"464882470c071dd71d77099ac5507edd"},{url:"assets/js/page-默认页脚--9df0770c.e3f9e5b3.js",revision:"eaadb4edc0d4e4032f44ea2edb1cf9e7"},{url:"assets/js/page-默认页脚--d5d7bcf8.e7d617bf.js",revision:"4af18f08d6181fd73623ebb2217396b7"},{url:"assets/js/vendors~layout-Layout.e4105ae7.js",revision:"b41e10aa68c05593e52869d0396213ff"},{url:"category/component/index.html",revision:"b258dcab386a9aca23bcc6147b425f2b"},{url:"category/index.html",revision:"620f6837e97227ea30ba091e7ec5744d"},{url:"category/layout/index.html",revision:"f9dd1de8ccd580c9b1ef484c99c3f35b"},{url:"category/note/index.html",revision:"a4b7b012f58e92f1e45eea12b2fbd3ce"},{url:"category/note/page/2/index.html",revision:"e626627886fa457455699a8d48e83234"},{url:"component/disable/index.html",revision:"e2240e5b94e764047da9130900d80d43"},{url:"component/footer/default/index.html",revision:"3ebdbe6dbfb06c1c209fe72ac28c4710"},{url:"component/footer/diy/index.html",revision:"8b4cb5c213cec532b35b6dc4682fd3fa"},{url:"component/footer/index.html",revision:"c361d6fa2a06e322fdce9653939bb92d"},{url:"component/footer/text/index.html",revision:"9c153469119fe03127931efc7c2e74ef"},{url:"component/index.html",revision:"f936d958547b5e71b5934c01f47b7f73"},{url:"component/pageInfo/index.html",revision:"5375399dfaaa2bf08c6801575777b474"},{url:"en/index.html",revision:"d092e2218c2b01e712a4b5a75a7120e8"},{url:"en/test/detail/markdown/index.html",revision:"cab22bde4c870459da874008f81727e3"},{url:"en/test/detail/page/index.html",revision:"15f6fb0045bf9b58f64222f26b6fa129"},{url:"en/test/footer/default/index.html",revision:"266a75e7dd755bf199ea6336e3924cc4"},{url:"en/test/footer/diy/index.html",revision:"5546d82ba2446cbce6e46ce1179ab820"},{url:"en/test/footer/index.html",revision:"42ffc09abece04e1414e5e06b8aaec35"},{url:"en/test/footer/link/index.html",revision:"fad882e6e2b8c0d6ae24f6a8369eaca4"},{url:"en/test/footer/outlink/index.html",revision:"9d5c7e971771a032c50b130f0d6cc60f"},{url:"en/test/footer/text/index.html",revision:"637cc3ee27b7d465e185923bc955a777"},{url:"en/test/index.html",revision:"06c93be725014dbf86d92a5ab2c72e92"},{url:"encrypt/index.html",revision:"5af092ba92bdc87ead7c59796b14c4f2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"bd74eed048330433ef5dba31c1494373"},{url:"intro/index.html",revision:"643765ce2649bcd20bd37e039460ce9d"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"f7d9ab50fe2c787b033917ac3816d01b"},{url:"notes/1/index.html",revision:"a14b700c599e0d6245b894221fd6eb46"},{url:"notes/10/index.html",revision:"6eb0400de0468916c4296925300e346f"},{url:"notes/11/index.html",revision:"31976d11e5e618707004b17f2ebb222c"},{url:"notes/12/index.html",revision:"1f1dfc8ee34b3950e861e6fdd5007f1f"},{url:"notes/2/index.html",revision:"db94636c19976d2fd5b5dd58b2806814"},{url:"notes/3/index.html",revision:"e19c6e82c3d837de16d13b2c9db012c9"},{url:"notes/4/index.html",revision:"c3718eaabe0da5e4d6ee92efb52fbe0e"},{url:"notes/6/index.html",revision:"21047cd668f22d5bb01106eb1ae7f16e"},{url:"notes/7/index.html",revision:"e8e1190bc5b0639b2398a5a7efe84704"},{url:"notes/8/index.html",revision:"83afaa6d8650f5a7bcec744aae6b7a95"},{url:"notes/9/index.html",revision:"083a80f09fbf99a07d8efb751a58ba82"},{url:"notes/index.html",revision:"c6b84f4d73a1aac203a7c9a532e457b6"},{url:"sticky/index.html",revision:"e322b416ae1951cc6357589b321feef5"},{url:"tag/footer/index.html",revision:"e2f0c47c139c5fe72db7cb472ccef208"},{url:"tag/index.html",revision:"89d24908bed15237e74ec963990b061b"},{url:"tag/layout/index.html",revision:"8081cedc20755a152b36a06a0d062341"},{url:"tag/markdown/index.html",revision:"9cf56184df08a98e7174ae838c2ff69f"},{url:"tag/note/index.html",revision:"e37e2625a1436d12b0e62f894f96affc"},{url:"tag/note/page/2/index.html",revision:"ad0689a8f8bcb4c0dff0c344acb6c4d5"},{url:"test/auto/index.html",revision:"8895416524e140208d96e961418ccac5"},{url:"test/index.html",revision:"1d8de316d2d17f2b5831f622bff9c06d"},{url:"timeline/index.html",revision:"98ef6b0edc1fd95d6e22b277ca1f0352"}],{})}));
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
