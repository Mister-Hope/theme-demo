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
    "revision": "1a8c44e7e9125aeaada949f0a6b6414f"
  },
  {
    "url": "assets/css/0.styles.6bae3627.css",
    "revision": "3a3215ffed1af8393b37fa6704136802"
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
    "url": "assets/js/app.a6e0963c.js",
    "revision": "f9c988615e543820ba6a9e4f52d57dcc"
  },
  {
    "url": "assets/js/layout-Layout.783018a1.js",
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
    "revision": "359a1e3e3625c0256cfb60162cce5022"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "8f60c5b95c7c8229ea8c6eb35cc4f3dc"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "fb709b833905ee04650646e1fb0d75f0"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "a5d7e37c0aef43f9120d7f924a2d781c"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "9db2b8c2a9a110e41568fe6dcacef887"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "9780ccbe99b1388dc2b82a431001ecab"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "9f44a4d4b3e5f03ee4f3cfec3a615f13"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "7c327b332679af11e367077d0de0c5c0"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "d37fdff7f8939ceaa9efda379109ade7"
  },
  {
    "url": "en/test/index.html",
    "revision": "8b4fbd77f6e9cc0546fa4bfa9270bd58"
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
    "revision": "4e7316ab859854e2c5568410b7a28dfe"
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
    "revision": "5682db11532f7686e7e6f7f608de9772"
  },
  {
    "url": "test/detail/page.html",
    "revision": "03241712c850296d892f447ddb294d9a"
  },
  {
    "url": "test/footer/default.html",
    "revision": "d718b9d752a81bc22d7e45634e85f6ae"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "696c96bf786b10a93095d5613ff858b5"
  },
  {
    "url": "test/footer/index.html",
    "revision": "40796deb158a48ae7061f642f1b00ff8"
  },
  {
    "url": "test/footer/link.html",
    "revision": "4c2b4858bcbbb94f391b5885a1134642"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "90ab826594e0bb240f6f546f24510d8b"
  },
  {
    "url": "test/footer/text.html",
    "revision": "9c589233852734211d06b34cd6a1951c"
  },
  {
    "url": "test/index.html",
    "revision": "344abf328a9da0d6b791061c80d87af0"
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
