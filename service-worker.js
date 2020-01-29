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
    "revision": "cddb94d7bf61abf78b491d5034706030"
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
    "url": "assets/js/19.874e46e9.js",
    "revision": "370d6bb1289f85c1875382b23ba03a8a"
  },
  {
    "url": "assets/js/20.159f9057.js",
    "revision": "6e385423a4fae43955817c25e62a1929"
  },
  {
    "url": "assets/js/app.c1b75420.js",
    "revision": "86cd5591a9225cf6d996f83eeb7c6c0b"
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
    "url": "assets/js/page-Home.16ac0c6c.js",
    "revision": "732a14d544d8afc2bcec14794a30b7d3"
  },
  {
    "url": "assets/js/page-Markdown 增强.f92cb5b4.js",
    "revision": "67217d9437806d7d254cb8180611ae4e"
  },
  {
    "url": "assets/js/page-内部链接页脚.d97e743d.js",
    "revision": "86fb53fd2ab6a62198b0f40cc0d6bd87"
  },
  {
    "url": "assets/js/page-外部链接页脚.00e284f5.js",
    "revision": "b858319a31362b9e5879490a32b9c4cb"
  },
  {
    "url": "assets/js/page-密码测试.add8351e.js",
    "revision": "ffa71f1bfe2b4ff97fa9e3b801d6ea30"
  },
  {
    "url": "assets/js/page-文字页脚.e603a59b.js",
    "revision": "fd5b4589f7e9f94aeba2689a6f6d2511"
  },
  {
    "url": "assets/js/page-无页脚.9191aff1.js",
    "revision": "cff4bfd0a99011a8de01cc6206c376ea"
  },
  {
    "url": "assets/js/page-组件测试.252fcf6f.js",
    "revision": "a4dea2adc416d4f6feb2cfdc88f06a7c"
  },
  {
    "url": "assets/js/page-组件禁用.7825194c.js",
    "revision": "ec9fdef737bc250f9dde4850e53910cd"
  },
  {
    "url": "assets/js/page-自定义页脚.45ddabb0.js",
    "revision": "c9731fc37bf45ff914b28248f93c1f59"
  },
  {
    "url": "assets/js/page-页面信息.6790d5eb.js",
    "revision": "85c00377227ebd4b09083f47fa8a3752"
  },
  {
    "url": "assets/js/page-页面布局.93bca660.js",
    "revision": "d1023e08db740efb336e5b9d26cba7cb"
  },
  {
    "url": "assets/js/page-页面配置.5b7a9c85.js",
    "revision": "c9820298e43de31ebca3c166ce7ecad0"
  },
  {
    "url": "assets/js/page-默认页脚.d7dda554.js",
    "revision": "6cd9c45eccb683a7da9b2cc4214aeba1"
  },
  {
    "url": "assets/js/vendors~layout-Layout.df9a7cd9.js",
    "revision": "28fff04c0b89d004cf509934a9a3e036"
  },
  {
    "url": "component/disable.html",
    "revision": "2566f6b94bdb098e5be9cc3c33723a7e"
  },
  {
    "url": "component/footer/default.html",
    "revision": "19294d86fae7673ac42da028162ad203"
  },
  {
    "url": "component/footer/diy.html",
    "revision": "7a151e06df19cf44a2663103a336f5fc"
  },
  {
    "url": "component/footer/index.html",
    "revision": "a7e787fa33164a49d4086821b9811e8b"
  },
  {
    "url": "component/footer/link.html",
    "revision": "48a0095804f74bb6d1ca48f5d1156532"
  },
  {
    "url": "component/footer/outlink.html",
    "revision": "cc0ecac98ca249302631856521cf03d6"
  },
  {
    "url": "component/footer/text.html",
    "revision": "224330777f282c8892359ded9571df8f"
  },
  {
    "url": "component/index.html",
    "revision": "11def73ee7492162e762c601d2da8562"
  },
  {
    "url": "component/pageInfo.html",
    "revision": "a04cad5f1ff8bcee11bfe2ba726e41aa"
  },
  {
    "url": "en/index.html",
    "revision": "542245de268cf53a8827829a1694d252"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "f960a6a2ff6705f2c09ed10ee8189f64"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "80ac7ea7c11e61f9c9faa8574231af47"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "54c2d2e4cdcfeb1a7ffd8c4aebd117fb"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "afa3f459c465bb8f49043345c81711c6"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "5bb80de9560c09d6497147303a3e0a7d"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "c30b28d43af5c57e114239aa32320001"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "49184066565a0596feb180caee972321"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "b5fe4de18d4614a9a9f90d086509f365"
  },
  {
    "url": "en/test/index.html",
    "revision": "4e40fc234fb95514e6955c968cac2681"
  },
  {
    "url": "encrypt/index.html",
    "revision": "99d101e4e5e97d6c440fc7181eee1fcc"
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
    "revision": "486a36d8bf78b92b664a266859880054"
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
    "url": "markdown.html",
    "revision": "70d1f62de479cebd557daf4fb7002e63"
  },
  {
    "url": "test/index.html",
    "revision": "88bd57d365eed8e6df67bf9436eb03f7"
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
