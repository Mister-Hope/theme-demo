/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d782b9a3faf5920b5a7f2086c338fe77"
  },
  {
    "url": "assets/css/0.styles.091adbf9.css",
    "revision": "184a3f55ea7945c75ecfb3f4d771a531"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/15.b47cff02.js",
    "revision": "d1b6135d873d4f66aa2730c7d2ecf740"
  },
  {
    "url": "assets/js/16.dd326451.js",
    "revision": "9a40f8cbe154116e251fc73d924e9e1e"
  },
  {
    "url": "assets/js/app.7d8b97b3.js",
    "revision": "16d51f8719e3254b02988a38b7643ba0"
  },
  {
    "url": "assets/js/layout-Layout.1aad168e.js",
    "revision": "21c42357e9a62ad09dcfbac9446feac0"
  },
  {
    "url": "assets/js/layout-NotFound.3a836711.js",
    "revision": "1931a50ee92ed9a03da2b112b3e43eee"
  },
  {
    "url": "assets/js/page-Home.51099bdb.js",
    "revision": "97d7fca68763c4cd00a9dd0a91658660"
  },
  {
    "url": "assets/js/page-Markdown 增强.2cea3137.js",
    "revision": "acfa914020ba3e91df686b973520af32"
  },
  {
    "url": "assets/js/page-内部链接页脚.61421609.js",
    "revision": "e8dee01a83defeccf79dbac52a854b9d"
  },
  {
    "url": "assets/js/page-外部链接页脚.addd1194.js",
    "revision": "20aa47fb53eb103f20cb13d37be9a952"
  },
  {
    "url": "assets/js/page-文字页脚.855cea3d.js",
    "revision": "bd15f3f78578c9afd890dc99cfc6143d"
  },
  {
    "url": "assets/js/page-无页脚.d6afa63d.js",
    "revision": "5eca56ba6a268e490c248b1d69928769"
  },
  {
    "url": "assets/js/page-自定义页脚.8cc35e4a.js",
    "revision": "855e0ce99a268068b4bb96173dbd7666"
  },
  {
    "url": "assets/js/page-页面布局.f2ef7e89.js",
    "revision": "d4e9a1fd0bdc32ec9c7776f42ef1780b"
  },
  {
    "url": "assets/js/page-页面配置.13d9890c.js",
    "revision": "90b65904e38951100855d3ea8397ee31"
  },
  {
    "url": "assets/js/page-默认页脚.0c205e0d.js",
    "revision": "af33016c6fa72951270926cddb8087ff"
  },
  {
    "url": "assets/js/vendors~layout-Layout.4beaa72e.js",
    "revision": "b5bfad02775f785196f1e231a001a682"
  },
  {
    "url": "en/index.html",
    "revision": "92a931c710adc3b48160dac44e59ec75"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "b414d2900919eee7f72bf1d2a332ba90"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "d6aa9706e8d8f0e78bf1b8f24a8778dc"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "4350a14b83de0868796b6026258ad411"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "6cf72e49b8b21c28a6f6347801f2158d"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "048624526996d585162b93857a4abc95"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "21b0da951cf5eb3d8ccfcbb62e4f16d4"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "ccf5f0c619a2fc6e09d3ed1ac9f369b1"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "f2d457a313e314482e5d8c9ae857e3d6"
  },
  {
    "url": "en/test/index.html",
    "revision": "5fc2531d567b40d5e19368973be71b02"
  },
  {
    "url": "img/icon/appleIcon152.png",
    "revision": "9172ed03ed0e66ca085720b7c02fcccc"
  },
  {
    "url": "img/icon/chrome192.png",
    "revision": "581c452b65c71f36375193f75bbb7b8c"
  },
  {
    "url": "img/icon/chrome512.png",
    "revision": "78af354a94a00054caa93bdba2560bce"
  },
  {
    "url": "img/icon/msIcon144.png",
    "revision": "2200b78e72efdcd597b384cf62947c1a"
  },
  {
    "url": "index.html",
    "revision": "6bbe26d4635a0c865e1d4724f73af016"
  },
  {
    "url": "logo.png",
    "revision": "13417285202b91bf6571ccef63c17039"
  },
  {
    "url": "logo.svg",
    "revision": "2ff99a4865a6eceeaf3d949e479c7990"
  },
  {
    "url": "test/detail/markdown.html",
    "revision": "0e6212b8cdba3ae96066ae125ca74080"
  },
  {
    "url": "test/detail/page.html",
    "revision": "497265d9d8b393aa0ace3d39d609cd74"
  },
  {
    "url": "test/footer/default.html",
    "revision": "3b616914eaa7044291f3f1dd5b2b4ca8"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "a5e3619a3a0b908eef5865c71b0df667"
  },
  {
    "url": "test/footer/index.html",
    "revision": "86fb056a953b737b1c74fa95c35fea16"
  },
  {
    "url": "test/footer/link.html",
    "revision": "cd26a81f935c86d33f6a9e4a543b8b98"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "7744d6fb637ee49aa4f68f8ed3995024"
  },
  {
    "url": "test/footer/text.html",
    "revision": "b2640ece3fe8ceaba097a40614bbc960"
  },
  {
    "url": "test/index.html",
    "revision": "fb6a64db3b053eb6bb27c97b9a704160"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
