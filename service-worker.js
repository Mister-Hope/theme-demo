if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"eddf26abd231259dc4b49e1a2ecbdc22"},{url:"article/index.html",revision:"16bfd64467e4f1b62c87dc5c960dbc57"},{url:"assets/css/0.styles.6d4fcd15.css",revision:"6836422d3aadb03bc80d1c5d0dd95ebb"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.04f54a0a.js",revision:"69fa3b98d049a4ee2cd40011c40fb774"},{url:"assets/js/layout-Blog.bb32b699.js",revision:"0cecf95cb2a451a6525c8182517edc38"},{url:"assets/js/layout-Blog~layout-Layout.c4492564.js",revision:"94064f22260a2214b072bc5b178107e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.83e7bbc2.js",revision:"14852536d352d679fb3bc259501502db"},{url:"assets/js/layout-Layout.d91a799b.js",revision:"e9af2a07b25ba6d72fe8df88264cb121"},{url:"assets/js/layout-NotFound.69a219f3.js",revision:"599367be3fada65ee8ad3dee535646d7"},{url:"assets/js/page-Home--145768b6.e8b250f3.js",revision:"3d9c3157debddd1afa2bb9176511756f"},{url:"assets/js/page-Home--5dacd635.2db07053.js",revision:"1a95a22eeda24e3fa0f0e7c55f2e4216"},{url:"assets/js/page-Markdown增强--4d787654.8d98dde9.js",revision:"98acd8e5c5e3821c1b14f2019acb129a"},{url:"assets/js/page-Markdown增强--87b26038.344a5dd6.js",revision:"9e4e188dd89b541fa43ba0c698aed6b5"},{url:"assets/js/page-个人介绍--f358bcd4.41c7e769.js",revision:"46313ccc2200bf1e0bc02a4fe0038182"},{url:"assets/js/page-侧边栏auto--3a90cf96.6d4ab7a1.js",revision:"51921fcc432cd724aa35c5e582486767"},{url:"assets/js/page-内部链接页脚--31f3a4f6.1e2d1618.js",revision:"34feb23e0c0cfc733e4432bf673fa49e"},{url:"assets/js/page-外部链接页脚--0f1c0bec.73980295.js",revision:"794d308dd8cde829899798a8c29f78a1"},{url:"assets/js/page-密码测试--1d89700e.193783a4.js",revision:"966d284ba0bc5c7bb852a63be0757977"},{url:"assets/js/page-文字页脚--5ea4d836.47dbcead.js",revision:"28bb5c8acf7c7b5e4f665f7ec06320d4"},{url:"assets/js/page-文字页脚--854e1b54.99d375be.js",revision:"8d456a383878c3f2c2f752c7c4838c67"},{url:"assets/js/page-无页脚--727687b5.942ef2d6.js",revision:"21c25f409fb3f26f7d2ae704032727a1"},{url:"assets/js/page-无页脚--c5727fd6.195769cc.js",revision:"543730ba16862d35da92c2e8f17bd93e"},{url:"assets/js/page-笔记列表--13847be8.ac83db09.js",revision:"dac723d0d4d9b211f31b1f86fc5a7bcf"},{url:"assets/js/page-笔记列表--253f1d56.de518cbf.js",revision:"61dcec557df7bc532cf0ee00985fae4c"},{url:"assets/js/page-笔记列表--36afc214.cbe9e4b1.js",revision:"74e168206d3d55862f174bab6d769616"},{url:"assets/js/page-笔记列表--3706d596.61c6766a.js",revision:"f28ccd5a9ca28f68141fb48a81e41df8"},{url:"assets/js/page-笔记列表--4395057e.f8058fb6.js",revision:"d4b91db904b9083f8be3aad17de7206d"},{url:"assets/js/page-笔记列表--48777a54.d0eff557.js",revision:"38411121a752c1046c4a9b5ecf6a3519"},{url:"assets/js/page-笔记列表--4c6992b4.dc4fbba7.js",revision:"31bc6fb8e15494d773984c71d27ddec2"},{url:"assets/js/page-笔记列表--5a3f3294.eb992a20.js",revision:"a932ac3ec9166c6cf5004a55f46550f4"},{url:"assets/js/page-笔记列表--779dd3f6.0504bc63.js",revision:"3594cc0d388663d97c5783bf4ab6357c"},{url:"assets/js/page-笔记列表--bfdc1d38.b1b43297.js",revision:"25e89351e3bbfd2769c200dec4e1b264"},{url:"assets/js/page-笔记列表--ed34e794.540eee18.js",revision:"77e68a8a8f2d930c88aea6c8428fd6d3"},{url:"assets/js/page-笔记列表--fefc9fd4.c0dc1a0a.js",revision:"f65eea8cf68d97f6d989ae048224f06d"},{url:"assets/js/page-组件测试--33a9d46e.c5b464e6.js",revision:"d0c480f7c48b8d6ac9beccc556a740c4"},{url:"assets/js/page-组件禁用--412a7956.b3d03c17.js",revision:"3cac6dde2fff5c425dea7fcd314fdf0d"},{url:"assets/js/page-置顶文章--bbc4e3a0.71798cd2.js",revision:"3ff096f1af374ae7e9e9b8d4a9d6f551"},{url:"assets/js/page-自定义页脚--638ce0d4.9d990c2b.js",revision:"29ac3c21d5a5f362f7b4fea03d2b18b3"},{url:"assets/js/page-自定义页脚--76fb1e1e.3abd4e35.js",revision:"ca42da661c852a2fab6d460a1811d076"},{url:"assets/js/page-页面信息--41bbd7b8.f744f461.js",revision:"5107cddab843615db43522bafa4f3d61"},{url:"assets/js/page-页面布局--0f63db56.89991ef6.js",revision:"bf1435950820300643a54dc4df60ed2e"},{url:"assets/js/page-页面布局--c006385a.37310d81.js",revision:"c75d411e7a828c6e63f152292f7b0d30"},{url:"assets/js/page-页面配置--36b78854.d5033b2d.js",revision:"464882470c071dd71d77099ac5507edd"},{url:"assets/js/page-默认页脚--9df0770c.e3f9e5b3.js",revision:"eaadb4edc0d4e4032f44ea2edb1cf9e7"},{url:"assets/js/page-默认页脚--d5d7bcf8.e7d617bf.js",revision:"4af18f08d6181fd73623ebb2217396b7"},{url:"assets/js/vendors~layout-Layout.e4105ae7.js",revision:"b41e10aa68c05593e52869d0396213ff"},{url:"category/component/index.html",revision:"602f824a8e381f07bf91e3a0a928e23a"},{url:"category/index.html",revision:"18a93e5dcbe3393381c53842ea5a225b"},{url:"category/layout/index.html",revision:"ce8a34915e5137e525ff8f36adb9acd1"},{url:"category/note/index.html",revision:"30b64c2cd6fee512ef4fa86107528383"},{url:"category/note/page/2/index.html",revision:"9fd46f633e5038260073fcd22663e8d0"},{url:"component/disable/index.html",revision:"6fbfc0cb5d29a21b0155db76d00180d1"},{url:"component/footer/default/index.html",revision:"a03536e1df78e6486cb5b91e36f6f6f2"},{url:"component/footer/diy/index.html",revision:"9803b41262b314ddc787fcbba27381fa"},{url:"component/footer/index.html",revision:"c04394ee2bbee14fa6b1c7db996d9319"},{url:"component/footer/text/index.html",revision:"91f5a505fae2aca28b60683267a0baf5"},{url:"component/index.html",revision:"4f94b86cd1b907db6b22c78cfe01ed8b"},{url:"component/pageInfo/index.html",revision:"05246de4d65b628e64a4be834f020d20"},{url:"en/index.html",revision:"6c7b6e5612c7d2cf623bb9cfca1c8f6b"},{url:"en/test/detail/markdown/index.html",revision:"ae89ec04548006357da38a0b2dd24a7f"},{url:"en/test/detail/page/index.html",revision:"5a0afabf32625d9704b7b4bba0f11718"},{url:"en/test/footer/default/index.html",revision:"dec4227c1df9d2c4c91ebd673cbbefe1"},{url:"en/test/footer/diy/index.html",revision:"e1cfa0a8600ddb36fb4515cef2e80fd8"},{url:"en/test/footer/index.html",revision:"317b71b57750d5c57588a666cae6627c"},{url:"en/test/footer/link/index.html",revision:"f0bb518e6d2e4f1896d5606296aa4af8"},{url:"en/test/footer/outlink/index.html",revision:"92b3ad6c87512e08e1fa6ec6cb4e53d1"},{url:"en/test/footer/text/index.html",revision:"c680303aa8c74b9074ac1c42f3d2b9ca"},{url:"en/test/index.html",revision:"2f5a88972f455a70eb3509fd4609098a"},{url:"encrypt/index.html",revision:"f6bf21ed2f15d56be12ef9a4e397b49b"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"b1ffc604461532be2c8862f299f1c2af"},{url:"intro/index.html",revision:"b55997d7cadd24de82044445a9363700"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown/index.html",revision:"9387ee562788b9e4ca740f226f9e772d"},{url:"notes/1/index.html",revision:"0d4dfa0355cfc7727e476d7bec588dc7"},{url:"notes/10/index.html",revision:"80f8f4efe64d155adedb4db41862bffd"},{url:"notes/11/index.html",revision:"0a3322dd6d7370ceece35db202e1c143"},{url:"notes/12/index.html",revision:"c082dea45e65aa5066b95115e9eb30e1"},{url:"notes/2/index.html",revision:"40802085273499b4fa87619549047659"},{url:"notes/3/index.html",revision:"b4de576e867f63cd95bb955af3f75cf1"},{url:"notes/4/index.html",revision:"db377a800b038f4b5d4f0368b9699520"},{url:"notes/6/index.html",revision:"5c89e9f4180ac7f5fbc62dfbb2544875"},{url:"notes/7/index.html",revision:"939c31a6bf74cc71202606e3d19f4a7d"},{url:"notes/8/index.html",revision:"84bf5220f3d2a597a0ec06e4abb6e6aa"},{url:"notes/9/index.html",revision:"8edf9a9092a978fc58efe7fabbf38fab"},{url:"notes/index.html",revision:"d70965ecb838566f6fd2fd39e3fdc50e"},{url:"sticky/index.html",revision:"b858fc4d5be976f8c860d9ed91b61f67"},{url:"tag/footer/index.html",revision:"914979e619282343ea64fe343f0fe943"},{url:"tag/index.html",revision:"d6b4c73196b8ca0c89edbf51afc36777"},{url:"tag/layout/index.html",revision:"814a72ed0d35064e376024aa31ab9f3f"},{url:"tag/markdown/index.html",revision:"b7a46ad8019e22283d23335d835fb78f"},{url:"tag/note/index.html",revision:"e545db70ceae7804e4df9391a1d29364"},{url:"tag/note/page/2/index.html",revision:"a9e5984251791dea6fd9c26300785941"},{url:"test/auto/index.html",revision:"a5072e9d940ca6d772c17f844ef3e500"},{url:"test/index.html",revision:"0902304cc35453f578ff810f3fdf1d6d"},{url:"timeline/index.html",revision:"40227621352e6de445c20905e2704360"}],{})}));
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
