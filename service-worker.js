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
    "revision": "dbcb1129974b8789112bf0f6eac63eda"
  },
  {
    "url": "assets/css/0.styles.ca4d1fd2.css",
    "revision": "6ec7004b60433684e18e7bddd76e3353"
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
    "url": "assets/js/15.a7afab70.js",
    "revision": "71ed69ab2710889ebbb18fe03d4a6d80"
  },
  {
    "url": "assets/js/16.c0472250.js",
    "revision": "459369102676f8149fb0d5e17f3a161b"
  },
  {
    "url": "assets/js/app.d268a7fa.js",
    "revision": "a557e42eb0d4f5ce72e22623fc2c2241"
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
    "url": "assets/js/page-Home.f9288ce4.js",
    "revision": "8b21f997029b774d39b5ba004fe88c1b"
  },
  {
    "url": "assets/js/page-Markdown 增强.223edeab.js",
    "revision": "bf0cbeb5aa4a34cb215d4974a12f53c0"
  },
  {
    "url": "assets/js/page-内部链接页脚.caf3ef21.js",
    "revision": "919ffd409a467da4878d8a5033b42363"
  },
  {
    "url": "assets/js/page-外部链接页脚.e84ad6f4.js",
    "revision": "b9edc0b253633c912a0939c5898f8d86"
  },
  {
    "url": "assets/js/page-文字页脚.ffa5728d.js",
    "revision": "8142528de446e9708307c4521140fcac"
  },
  {
    "url": "assets/js/page-无页脚.63ce93e0.js",
    "revision": "9a3c5a9ef0d732c444adad795eb4acb7"
  },
  {
    "url": "assets/js/page-自定义页脚.6b22dfbf.js",
    "revision": "71107e83cc6e971810172ccffdb30240"
  },
  {
    "url": "assets/js/page-页面布局.2bbd1078.js",
    "revision": "d616908e78620361e8b8b8030634d6fb"
  },
  {
    "url": "assets/js/page-页面配置.907c3313.js",
    "revision": "3d3ba0c8011b4fcb577aaf901c5b6ab6"
  },
  {
    "url": "assets/js/page-默认页脚.2fffce0f.js",
    "revision": "ccc8ab0061a4c2112242598da7a0bc41"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9d121470.js",
    "revision": "1680ac0fac0ab25774aaa36d0bcd358e"
  },
  {
    "url": "en/index.html",
    "revision": "87bea087f63a923bf19fbf3e5a1fef26"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "d65c342ade7e6f6c75355de9c9d45435"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "67bd2dfb030c4ec6e44ae4e8f2aca2f4"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "92f4da4cc2ee932d44c2f6930eeda77b"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "a1f24944e32ab829b2e77cf994749f56"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "847770625b0010d274e903cda0e194ec"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "4577085d140b52ee1ebb8133ff5c3a9f"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "832b9a05250939f419807618955e36ea"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "2dcc46dae6363844196fc5980908bc2b"
  },
  {
    "url": "en/test/index.html",
    "revision": "c4a8abddeba7e2eb6328ddd603ab42d1"
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
    "revision": "5375abe54fc52a2ddf06d0956f8fe544"
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
    "revision": "8687e8340b6212d87cf55d196f542922"
  },
  {
    "url": "test/detail/page.html",
    "revision": "3723deeda8ca9cb673057517a07030fd"
  },
  {
    "url": "test/footer/default.html",
    "revision": "2659668ac24ed5866bf377078fe08e75"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "05104c232667e1e4b533adb82b1594a8"
  },
  {
    "url": "test/footer/index.html",
    "revision": "65ff5bae5bf9d4de61933a06f806614b"
  },
  {
    "url": "test/footer/link.html",
    "revision": "33b2c933447a4b6503c8f87445d62267"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "1927d51b5503f6ba31721fa5ce46089f"
  },
  {
    "url": "test/footer/text.html",
    "revision": "27ade02c80e12cd0a3c726febea1a7d9"
  },
  {
    "url": "test/index.html",
    "revision": "d911f7dd52c023cef907b058072d4d17"
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
