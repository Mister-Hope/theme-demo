if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c59649d7.css",revision:"ec0d70a354d10d9fa171b37b1881eba2"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.4de4c9dc.js",revision:"be37f4749d2d3feb6f197157816d6bc7"},{url:"assets/js/31.cde17a99.js",revision:"824350bf411fbd5f1cb58de9e8618a5a"},{url:"assets/js/32.7099c2f0.js",revision:"5368c2ee08de977743902e048e378ff8"},{url:"assets/js/33.ee18aa2f.js",revision:"4ccd158c9a8e38974262b4da5e045ef7"},{url:"assets/js/34.9ef57ab3.js",revision:"5ffa38b74ebf4976d622e31a66e081e1"},{url:"assets/js/app.3866aee7.js",revision:"aa5f661c1341f65a2db8f19352a1dd8a"},{url:"assets/js/layout-Blog.dd1a7744.js",revision:"db0d1d57b712f4604ae4daca8611d508"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.592e64b6.js",revision:"0efae9e3a005893362d73bf8bf9d8048"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.bff0d20d.js",revision:"fd3c78c122330abddbdd8f760a1f1750"},{url:"assets/js/layout-Layout.53eed363.js",revision:"122d185abf172fede5b896600e6176bd"},{url:"assets/js/layout-NotFound.f9e6edbe.js",revision:"283c2baa4a1b0b066fd1e2b4c395973f"},{url:"assets/js/layout-Slide.77614b3b.js",revision:"50bd6451eb7ac905a122c4c623228dd3"},{url:"assets/js/page-Componentdisabled--742e8b14.d263a3c1.js",revision:"62c8a658fb70caf2c666a2308cca5254"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.7a68df44.js",revision:"b9331b4f56e8d357152ead33dac1fb3d"},{url:"assets/js/page-Guides--22306cea.04483a33.js",revision:"b87e709cfc49bbcd783f129cf7d6829a"},{url:"assets/js/page-IntroPage--f358bcd4.b4ea5fe4.js",revision:"58bcad9ed5efd7368eeb343b1ffb255c"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.071f8daf.js",revision:"ebc85339d6ec26638e32272ecdb481a7"},{url:"assets/js/page-Markdown增强--eec60994.99d5cc5b.js",revision:"f2026e5d60bb20a89c5fea624e9207a0"},{url:"assets/js/page-MrHope--145768b6.703097d9.js",revision:"9e4c52a243d246e2364f1e071bbce94d"},{url:"assets/js/page-MrHope--79004bd6.cb62c969.js",revision:"9e5f9ffd1198b5c204bb4871a421de32"},{url:"assets/js/page-pageconfig--55e15bfe.a98429a9.js",revision:"ec315a4cfddf45761a6fa76f544f9d73"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.bb60284d.js",revision:"f2f56e5ff2d51000700b2a55b9271e35"},{url:"assets/js/page-Slidepage--7a2d82be.270f197a.js",revision:"18730d64b1c0b15c6df74f301d87dde1"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.5008175d.js",revision:"f75ffa7467caf321698f41fcfc428908"},{url:"assets/js/page-密码加密的文章--64e181e0.a5bc5668.js",revision:"338da989c3d5576c1b9eaba49c4fc86b"},{url:"assets/js/page-幻灯片页--f6429394.71debf14.js",revision:"9b8225d363fbbb7a1cbc002b4cbd29c4"},{url:"assets/js/page-组件禁用--5650041a.59221135.js",revision:"377df23d14c7a664e926464703fdba61"},{url:"assets/js/page-页面配置--2847a8b6.4a7cff92.js",revision:"e13667ba9ea093816440f79be9331d06"},{url:"assets/js/page-项目主页展示--fb8d99d4.16c4594e.js",revision:"1969fec4725e0c0338f7f1b8fbe82614"},{url:"assets/js/vendors~flowchart.faca1eb2.js",revision:"7708d006370377134aa653e019163cda"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.82e2c0c5.js",revision:"3806d191b0e247266a554fd954e72fd4"},{url:"assets/js/vendors~photo-swipe.4013e7eb.js",revision:"ebe3049abbda3e7c40a91a9442f1b0d3"},{url:"assets/js/vendors~reveal.42050ef4.js",revision:"6216f00e1b0dd502a6c7eed14374dac7"},{url:"assets/js/vendors~valine.250f1ed1.js",revision:"ae4d3b4a5bcc33b5adb8cf81f43b9eb6"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"45ca8843768469db41317d1680d9dafa"},{url:"article/index.html",revision:"c57bcfeb6c6f8fdcc4c163798d576f75"},{url:"category/Guide/index.html",revision:"93610bb001dbe73b0f5798c3e2053e65"},{url:"category/index.html",revision:"41687938b1c8fe96489ab914538831d9"},{url:"category/使用指南/index.html",revision:"d0d028e010304bf28a7fb436c22a204f"},{url:"encrypt/index.html",revision:"3045949a008fbc2bdcecc56a33d0b936"},{url:"guide/disable/index.html",revision:"56d9a692fcce6c7107758710e26dfc38"},{url:"guide/encrypt/index.html",revision:"5eac8be12fb5c890563134118cdd2258"},{url:"guide/index.html",revision:"7d39f5a77b080c994b8733e552c0c0f4"},{url:"guide/markdown/index.html",revision:"0372194285664e14e25f049845159465"},{url:"guide/page/index.html",revision:"23ca4d471a172e146484515aff8e8930"},{url:"home/index.html",revision:"b2a2ef08f30b23acd541ed32ae628eb9"},{url:"index.html",revision:"d5e991c814645c7cb1bf07fee2d0b913"},{url:"intro/index.html",revision:"ddad64926a0bfb3035d3848ad14c114b"},{url:"slide/index.html",revision:"7a1385db7a2367f3deceee53753490aa"},{url:"slides/index.html",revision:"514f3c50d136bf57c0172b4a1298a980"},{url:"tag/encryption/index.html",revision:"71dd038bb39977d52f9d5f76236e5ec5"},{url:"tag/Guide/index.html",revision:"ee14cf55a3b43ed99555d750522c5867"},{url:"tag/index.html",revision:"eacd83aa71dc8f4a72b273df7bd7a25a"},{url:"tag/markdown/index.html",revision:"121a2b4d6602320b7126e18beb31fd45"},{url:"tag/Page config/index.html",revision:"c161632210fb6a5cad60c3eef0ed6ee8"},{url:"tag/使用指南/index.html",revision:"54d1682a43739633fad0cbc5ed2e0bd9"},{url:"tag/文章加密/index.html",revision:"b3c20171ff8f73cbb35f018fd97c0c06"},{url:"tag/页面配置/index.html",revision:"9782a28868f20895d1fb46dd0dce48dc"},{url:"timeline/index.html",revision:"323d1d166459e0827ed68143ac23bbfe"},{url:"zh/guide/disable/index.html",revision:"33b6bd06c0ad3c56c068cb15ebd48159"},{url:"zh/guide/encrypt/index.html",revision:"cfd46d713ca8a2051bb223f889e94bc4"},{url:"zh/guide/index.html",revision:"01f6ed8205e41eb54567a201ee295559"},{url:"zh/guide/markdown/index.html",revision:"0d04daeb1f024c60557377d07619db30"},{url:"zh/guide/page/index.html",revision:"bfd5f1beda53bc454fdd705fef80bdf7"},{url:"zh/home/index.html",revision:"c14ba73c9f66f8206ef4aeef62d681a0"},{url:"zh/index.html",revision:"d3e2172889d7797637560025815b03ff"},{url:"zh/slides/index.html",revision:"f2c1545ed63c4c018d16f4d31892dc58"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
