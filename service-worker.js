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
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "assets/css/0.styles.4df77c16.css",
    "revision": "e9c00af06693bbe93604458a774ec50d"
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
    "url": "assets/js/24.a62778a1.js",
    "revision": "02a952a1252398d2805a8585c7c985a3"
  },
  {
    "url": "assets/js/25.b9ed4fce.js",
    "revision": "df83042facf769acf90bce69d9342aa4"
  },
  {
    "url": "assets/js/app.30804415.js",
    "revision": "4dbf26fcb0ceb897d32da743f5009efb"
  },
  {
    "url": "assets/js/layout-Layout.91d4b1af.js",
    "revision": "1465b1122d63286c37f7fdaca571a629"
  },
  {
    "url": "assets/js/layout-NotFound.1cfeaa57.js",
    "revision": "baef031cb11d7aa3769688fedc2f7f11"
  },
  {
    "url": "assets/js/page-API Config.229f8dc4.js",
    "revision": "ba1b044eca9d140d9b023b6fa334fa76"
  },
  {
    "url": "assets/js/page-BitBucket OAuth Consumer.803a0b98.js",
    "revision": "e2b7b1e5308e433a47a4565b0f9c080e"
  },
  {
    "url": "assets/js/page-Gitee Third Party Application.2e8a1d27.js",
    "revision": "51edd61df8a910e0c3649e2e05db11de"
  },
  {
    "url": "assets/js/page-Gitee 第三方应用.f3200b46.js",
    "revision": "91e1f532306f155143219a31f34e036c"
  },
  {
    "url": "assets/js/page-GitHub OAuth App.661062c2.js",
    "revision": "094da36eb43e016681af90f94933abaa"
  },
  {
    "url": "assets/js/page-GitLab Application.6d86e093.js",
    "revision": "a1c1c2a6cd34cf52fce747c93d1e67be"
  },
  {
    "url": "assets/js/page-Guide.33029326.js",
    "revision": "5502a38b9fea6ce4dee14bc3028e1b58"
  },
  {
    "url": "assets/js/page-Home.35ef70f5.js",
    "revision": "043a514cc9da0f49f87c4f68f6a5245c"
  },
  {
    "url": "assets/js/page-Supported Platforms.9c1adaca.js",
    "revision": "086be3b5b7df0cb36c34b3b960dbbc31"
  },
  {
    "url": "assets/js/page-Using Vssue.11362689.js",
    "revision": "aca3269e33aa28a3a2c7c0bc41df42c9"
  },
  {
    "url": "assets/js/page-Valine Config.d6c91102.js",
    "revision": "bd42f3a69b284ca540c8c510c5df8895"
  },
  {
    "url": "assets/js/page-valine 配置.e5a7aa3c.js",
    "revision": "63da684e559ee12d5a5f804b5adee9c9"
  },
  {
    "url": "assets/js/page-Valine.4696535d.js",
    "revision": "9406054b44a94e313667763a193655d5"
  },
  {
    "url": "assets/js/page-Vssue Options.aaae2c3c.js",
    "revision": "01eaff4d499eabad1db98ed5ada8166b"
  },
  {
    "url": "assets/js/page-Vssue 配置.ea33b19a.js",
    "revision": "57026fe944f44570b9552cc2b2902b14"
  },
  {
    "url": "assets/js/page-使用 Vssue.ea6d3a8e.js",
    "revision": "4a23235f9b4987f13de999bbffa6f7da"
  },
  {
    "url": "assets/js/page-指南.0e71ef8b.js",
    "revision": "3847b46b55c9997ffb305a77844b9e5a"
  },
  {
    "url": "assets/js/page-支持的代码托管平台.e14fb1c1.js",
    "revision": "3e51080b3e15c257fcfaa19a478dd725"
  },
  {
    "url": "assets/js/page-配置.40c81dc3.js",
    "revision": "72453dd1b10d9fc8354e72dd8b85f624"
  },
  {
    "url": "assets/js/vendors~layout-Layout.cfb7da49.js",
    "revision": "67e27051046ab31c9222695bedd3c335"
  },
  {
    "url": "en/index.html",
    "revision": "93cfa1dccb40c233770518123619c889"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "en/test/index.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
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
    "revision": "90e68514cffe1a622adade56d895002b"
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
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/detail/page.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/default.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/index.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/link.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/footer/text.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
  },
  {
    "url": "test/index.html",
    "revision": "1284561ad2b05212d66675314ce3bc65"
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
