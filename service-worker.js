if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7b2cd3a9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ed6f069c.css",revision:"d793ed2a34884b61450034e58adfc30f"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.7996d455.js",revision:"83d93c1321341be2e6d4b90fd06b5825"},{url:"assets/js/31.29ed7ec2.js",revision:"90aaf71adeef05a6b3ba036fb973c644"},{url:"assets/js/32.06bb5a85.js",revision:"5b8abb151f75501dec13a4144db9b5bb"},{url:"assets/js/33.73013c39.js",revision:"adee9c78120e17235063d5435d883b87"},{url:"assets/js/34.c292be2a.js",revision:"6fb9a005fa3c05b829d744afece2e780"},{url:"assets/js/app.46b432a0.js",revision:"5dc83417c16a8e43fb4838f88bb6b1fa"},{url:"assets/js/layout-Blog.0f15b10a.js",revision:"12f8fa168521ef0e80636c75ba82544c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.2e6c7dcf.js",revision:"b024dbbf3a105f8069705cb2226b61ee"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.c9b4d757.js",revision:"5108b657965cb2fe584dbf3bca00ff62"},{url:"assets/js/layout-Layout.a023bb48.js",revision:"a5d51ba881b472ac7696da7ef8a8aae0"},{url:"assets/js/layout-NotFound.9fef2b71.js",revision:"e24a649970c10aeddb9a66eb6a5d0f91"},{url:"assets/js/layout-Slide.bdfe7d41.js",revision:"9da27bd14b5b4592d4f0ef30b417adea"},{url:"assets/js/page-BlogHome.4a603a5c.js",revision:"80363ded012d0b4d9981f11974c0bc3f"},{url:"assets/js/page-Componentdisabled.fc6635fe.js",revision:"ddfcbee24106a3caed17bc5449bc6958"},{url:"assets/js/page-Encryptionarticle.2356acb9.js",revision:"1f00f4cc64dcf8ae55dfd2ce89700e68"},{url:"assets/js/page-Guides.61a2f6f8.js",revision:"b91596ba9565b27e5b72fe3009a304ec"},{url:"assets/js/page-IntroPage.13942b53.js",revision:"ab6af53173bcffc318a89e9787d49bd5"},{url:"assets/js/page-MarkdownEnhance.0b6bb9a6.js",revision:"26fb5fa2573e9bbae9daf9782b94b89c"},{url:"assets/js/page-Markdown增强.e28a7131.js",revision:"b651549ec3b39e89935f10ac4f3ebb05"},{url:"assets/js/page-pageconfig.71b7be4b.js",revision:"7eb8c4d37c6de67894559b5384ff7934"},{url:"assets/js/page-Projecthome.292ddf52.js",revision:"1a474e958a8c6b156359b7d247885626"},{url:"assets/js/page-Slidepage.ecc69801.js",revision:"a62914b180906742b5c8bdbf194ec826"},{url:"assets/js/page-主要功能与配置演示.45c1acd7.js",revision:"c21336c31d35391566390d4d23d73026"},{url:"assets/js/page-博客主页.fa13bedb.js",revision:"b55d0284a57872ca028b0bf76196ce9c"},{url:"assets/js/page-密码加密的文章.9b8e4a48.js",revision:"6e1ee5425dd58d3bdfac770a282724c7"},{url:"assets/js/page-幻灯片页.fdcda327.js",revision:"267f0d224d44e91da0d77c5c9c310a0c"},{url:"assets/js/page-组件禁用.676f49d9.js",revision:"f0e607fabaca5ce1f0fc2e885eff1b2c"},{url:"assets/js/page-页面配置.b881853a.js",revision:"fd5c4b3ed9f09a161f496a45c75cbf49"},{url:"assets/js/page-项目主页.aa828ce2.js",revision:"09ff4a738b8b28464aeac35a1548aa76"},{url:"assets/js/vendors~flowchart.14c628d8.js",revision:"9c71a31dfc9930dfa3a3fed2c12c43fe"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.37eb6f27.js",revision:"9f921643d6170ca5759abf05251409db"},{url:"assets/js/vendors~photo-swipe.3b0eaf1c.js",revision:"f728ffd9cc2d7a5b8df11ac4bc6fb2b5"},{url:"assets/js/vendors~reveal.48c88953.js",revision:"f649053782f4495f13dc7a1cff950cb6"},{url:"assets/js/vendors~valine.15ee9a67.js",revision:"ff67a37bf69ad7e8c205412adc31949b"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"b7d19ebc93279527fc10e8dd71a6ae16"},{url:"article/index.html",revision:"bb543f2c7e88ca49c7ae371d9cc1e4d6"},{url:"category/Guide/index.html",revision:"8922e637889a699ca823b63ee8046d91"},{url:"category/index.html",revision:"fb7dc4fb969a71e485ad2c93d825b93c"},{url:"category/使用指南/index.html",revision:"544f0974f47da2bc97f2678e985070e6"},{url:"encrypt/index.html",revision:"5eaa4d415c6abf7969311c8f83cf290f"},{url:"guide/disable/index.html",revision:"b0e3b6e8502671c2171e5169ef456749"},{url:"guide/encrypt/index.html",revision:"1e6075facd723c0550c02438222f2807"},{url:"guide/index.html",revision:"47236b732d72c0274f9d44189247d02e"},{url:"guide/markdown/index.html",revision:"49331e2e41e751eb9f6656962244304c"},{url:"guide/page/index.html",revision:"6944d88a4a5e7c61935cdfd6ea277749"},{url:"home/index.html",revision:"a818efefceeb8274f10c5fc8572f4896"},{url:"index.html",revision:"046448a429cbeb426ed2ea75758674e0"},{url:"intro/index.html",revision:"65502c14a19f840d57bb6ea82c72eaf9"},{url:"slide/index.html",revision:"9443c04269c18046ecc7567d301d90d1"},{url:"slides/index.html",revision:"a50aa801dc310db5e1786b4439de332a"},{url:"tag/encryption/index.html",revision:"0459e3d31c23edfb3168fe65de6dfae4"},{url:"tag/Guide/index.html",revision:"83ee3dad88b70e51fe3a087a69ed5f29"},{url:"tag/index.html",revision:"53a5a936d8dc4034fa357fa9dae7ff4e"},{url:"tag/markdown/index.html",revision:"8a2b45ca1f78913b1eba66007fc9c24d"},{url:"tag/Page config/index.html",revision:"311c24aa13b5a94be02761f709452000"},{url:"tag/使用指南/index.html",revision:"82ba85be3a45f5c27527b9f0d2253346"},{url:"tag/文章加密/index.html",revision:"49ffd2d65be7bedfb3e86e4c509d017b"},{url:"tag/页面配置/index.html",revision:"2454fba0c713447dcc9ebd06cfbe2020"},{url:"timeline/index.html",revision:"d9ba949d6993b69bc7f99a34fb82a0a0"},{url:"zh/guide/disable/index.html",revision:"67d31098f1f27691bcabbff832d13383"},{url:"zh/guide/encrypt/index.html",revision:"baab28b2f7e313286618a1fcd5326015"},{url:"zh/guide/index.html",revision:"50e50fe1e6d946928df6520d9d52efac"},{url:"zh/guide/markdown/index.html",revision:"d2cbb5da37b0d26912920a2bdcb90fbc"},{url:"zh/guide/page/index.html",revision:"bcb940e2c2a59da19eca322bb57707e4"},{url:"zh/home/index.html",revision:"d8db5ccb624f485a80ac2f3e57ed52da"},{url:"zh/index.html",revision:"7ba1c7ef69b5812e2454fe7d37ad1465"},{url:"zh/slides/index.html",revision:"f3cd9b386ed9a563e85ae6f18638f3b6"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
