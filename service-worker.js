if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-5aa777fa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.cbb39138.css",revision:"a5209b5e8a8119c9ec9ed4b160fb38ac"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.9bb7621d.js",revision:"e697424517c128c6e776bb402a9a71b2"},{url:"assets/js/31.c9ae4d46.js",revision:"c0c3d2a85d47c2bd32c3f2973266bb16"},{url:"assets/js/32.8b2556fb.js",revision:"de153d2b3f790f0d99b50cc91045ec2a"},{url:"assets/js/33.502e8398.js",revision:"9aa1d1821cc8ad4055c9eff74e0d2a99"},{url:"assets/js/app.2e2d6bc9.js",revision:"e5a7749e02721c7195b7f06a5717d002"},{url:"assets/js/layout-Blog.6e485155.js",revision:"9d52cd197ab6c756edc919b4c049face"},{url:"assets/js/layout-Blog~layout-Layout.e462ecec.js",revision:"4a154368f5d0241ff6a863b4e4c79dbd"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.40c5520b.js",revision:"19b9e8ea0f78d4f7ac9795ffd65eb501"},{url:"assets/js/layout-Layout.91ecb6fe.js",revision:"0d06c0bd17381358161a692c50d9570b"},{url:"assets/js/layout-NotFound.dcdb46bf.js",revision:"a0396e17737a3b1958bdc80e4495a6cf"},{url:"assets/js/layout-Slides.a06f3f1e.js",revision:"e119c765321e6eddd4aa9c7c952d626d"},{url:"assets/js/page-Componentdisabled--2391395e.b8019640.js",revision:"b0e93e656283ae889507b592f546d548"},{url:"assets/js/page-Encryptionarticle--1d7a74d6.11a236d9.js",revision:"e2cc846669ff597285f3033cf0866e88"},{url:"assets/js/page-Guides--22306cea.3b5ddca0.js",revision:"c293bedafae5a68b7f060ffe6b328b5f"},{url:"assets/js/page-IntroPage--f358bcd4.b85016b7.js",revision:"b6c453f14ec64a18bd5c7743115754bc"},{url:"assets/js/page-MarkdownEnhance--1da77d3e.b4523b37.js",revision:"36c7a33685627d40d5c2de086ce413ae"},{url:"assets/js/page-Markdown增强--eec60994.8ee69c4e.js",revision:"e70f536c10133b48c424966c164f8941"},{url:"assets/js/page-MrHope--145768b6.5fb734da.js",revision:"6f0a7bf100593b791009d6554ebcc44c"},{url:"assets/js/page-MrHope--79004bd6.6bb45ed5.js",revision:"d8e5d1efe5bcd7903b342aa3a0790010"},{url:"assets/js/page-pageconfig--55e15bfe.0934fde3.js",revision:"8cfdadaedbc4ce1dd21aeee0cd2f93f3"},{url:"assets/js/page-Projecthomepagedemo--ed386af8.9156ba80.js",revision:"c1350b87561a3782e66fe999c5419621"},{url:"assets/js/page-Slidepage--7a2d82be.19b5f5d9.js",revision:"ca8c0234bc67505f4d8475fd4d2662a0"},{url:"assets/js/page-主要功能与配置演示--6fcd8275.627195a6.js",revision:"1fb023948369fcd21f3cf5c345180bd5"},{url:"assets/js/page-密码加密的文章--64e181e0.2dc8de94.js",revision:"4c719a352c342d51a8162a736733b5a0"},{url:"assets/js/page-幻灯片页--f6429394.68fe2085.js",revision:"8ca300af9dabff6471142f06530b6dd6"},{url:"assets/js/page-组件禁用--5650041a.032169ed.js",revision:"0417f624235d46aa621fc1de412664d9"},{url:"assets/js/page-页面配置--2847a8b6.7a00e6f9.js",revision:"4ff0c93c2ef49267e38c96203d46c5c8"},{url:"assets/js/page-项目主页展示--fb8d99d4.1312016d.js",revision:"5738493a986f60af37d3d8d87099f253"},{url:"assets/js/vendors~flowchart.4a32dc2b.js",revision:"2ab1bc8e1cdfcf5afc614f4807e684b8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e240c595.js",revision:"d48b76e3776fe974d3112e9916e2a9fb"},{url:"assets/js/vendors~photo-swipe.8e753b7d.js",revision:"587193acdfd5054a0b65c868aced8fe3"},{url:"assets/js/vendors~reveal.1add88f1.js",revision:"9c1f996ae898c346aa3934f15e98d117"},{url:"assets/js/vendors~valine.caf5b45b.js",revision:"89b0b57351f7e623be2f2b97045fc612"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"8122f9ce5dfdae99d9d86fb560fafa27"},{url:"article/index.html",revision:"580b7cb2ebb835968e55daa13869b9ce"},{url:"category/Guide/index.html",revision:"ca743f4d6f1e11dd48664ac1fd0a23e6"},{url:"category/index.html",revision:"a2da05883d01c5fae06e80015de7a9c4"},{url:"category/使用指南/index.html",revision:"7bbc3178f37c95339b48e36673c8814f"},{url:"guide/diable/index.html",revision:"58ad33788c271bd7275a96bd8cc04f83"},{url:"guide/encrypt/index.html",revision:"4170125c4e24d0e095c802177a1d88c9"},{url:"guide/index.html",revision:"58d240d22260cf9f82d5bd49c3823c18"},{url:"guide/markdown/index.html",revision:"169345f20615ef317643fab486db488d"},{url:"guide/page/index.html",revision:"656244f9f78fb2837e0cfe8a59e23cf5"},{url:"home/index.html",revision:"a5f56427f656080688b73c0c06d32067"},{url:"index.html",revision:"7b6ae819b16a368707e285f0ae6add26"},{url:"intro/index.html",revision:"6c2f858a8f305b4ab755f0c1ebac2354"},{url:"slides/index.html",revision:"08e4e1e8dc468673d98e7f4eaa80eed4"},{url:"tag/encryption/index.html",revision:"7bce23c4c40e71f7778fe252a4d691c7"},{url:"tag/Guide/index.html",revision:"ecdc7f68d5ad677fd5d7845b1812dda4"},{url:"tag/index.html",revision:"8ee8acc089825f8cb8ccc98eff2fcb31"},{url:"tag/markdown/index.html",revision:"adaaa62b7d8bb0482aa31e280993d73d"},{url:"tag/Page config/index.html",revision:"fee70f4670d2c87d2374657b9b920638"},{url:"tag/使用指南/index.html",revision:"a116550b103b8b3338b0431c406d2d5c"},{url:"tag/文章加密/index.html",revision:"e1f043ad3c74942664f6501e9a784507"},{url:"tag/页面配置/index.html",revision:"9b18bd35ebc7311bea75eb0305c4045c"},{url:"timeline/index.html",revision:"ad398488b45246eaf4244127b85ade94"},{url:"zh/guide/disable/index.html",revision:"0ed7bee140354be047fcf62167757e0c"},{url:"zh/guide/encrypt/index.html",revision:"3aea364a81ace91f25f8a927db09f095"},{url:"zh/guide/index.html",revision:"c228bcdfe899dbce97fcdab869d75988"},{url:"zh/guide/markdown/index.html",revision:"6cf9486591e99c3905871d52383bcdeb"},{url:"zh/guide/page/index.html",revision:"8787406bf22957b1cd9a9379368108fe"},{url:"zh/home/index.html",revision:"6de2dfdcfa02a51503d0754603e42637"},{url:"zh/index.html",revision:"7a7994783bd3916bab0e902e4ac3f2eb"},{url:"zh/slides/index.html",revision:"594f76f2977333a259488e028bfdada7"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
