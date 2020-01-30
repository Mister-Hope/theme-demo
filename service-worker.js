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
    "revision": "eec1daff0e3dbafd567b42011831984d"
  },
  {
    "url": "assets/css/0.styles.f114ea9f.css",
    "revision": "717e37df6ab76b3af34d75c137bc8e86"
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
    "url": "assets/js/15.c995660a.js",
    "revision": "423b1edcd5ac4906d91b27360cede0d5"
  },
  {
    "url": "assets/js/16.c0472250.js",
    "revision": "459369102676f8149fb0d5e17f3a161b"
  },
  {
    "url": "assets/js/app.4cebd542.js",
    "revision": "22e043234bec9680487c574b7e80d0ee"
  },
  {
    "url": "assets/js/layout-Layout.f8ad13b9.js",
    "revision": "1465b1122d63286c37f7fdaca571a629"
  },
  {
    "url": "assets/js/layout-NotFound.00d9fe1e.js",
    "revision": "baef031cb11d7aa3769688fedc2f7f11"
  },
  {
    "url": "assets/js/page-Home.d1c2ee34.js",
    "revision": "e0ebe23e05e64b36f07c6cb3d6c3bc1b"
  },
  {
    "url": "assets/js/page-Markdown 增强.1ec65b8a.js",
    "revision": "bf0cbeb5aa4a34cb215d4974a12f53c0"
  },
  {
    "url": "assets/js/page-内部链接页脚.fef331d9.js",
    "revision": "fb273388f48e6c69a570a251136a3f0d"
  },
  {
    "url": "assets/js/page-外部链接页脚.4253f4db.js",
    "revision": "b9edc0b253633c912a0939c5898f8d86"
  },
  {
    "url": "assets/js/page-文字页脚.8d13bbcd.js",
    "revision": "8142528de446e9708307c4521140fcac"
  },
  {
    "url": "assets/js/page-无页脚.875b140f.js",
    "revision": "9a3c5a9ef0d732c444adad795eb4acb7"
  },
  {
    "url": "assets/js/page-自定义页脚.931aa240.js",
    "revision": "f5ff021683e4fa0ab32b406a19f9d261"
  },
  {
    "url": "assets/js/page-页面布局.0f5c9c87.js",
    "revision": "2eb1cfc901d6ad9a04383078be893831"
  },
  {
    "url": "assets/js/page-页面配置.d3b208bf.js",
    "revision": "e26c7d2c5b4646bf0f76e6b83ad9f7cd"
  },
  {
    "url": "assets/js/page-默认页脚.731ebb40.js",
    "revision": "ccc8ab0061a4c2112242598da7a0bc41"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b0a848bd.js",
    "revision": "e242c744c727d4bb4cbe1f0ae8ff9255"
  },
  {
    "url": "en/index.html",
    "revision": "798a403381c1481746f4441cabe2a693"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "590536866dfba115d4b0488653fd7655"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "d2938fcbbfb602445333a70f249d2115"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "c571e9b9090b19bfa6a5ec8e22ab0c05"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "6a91e9b800a43aaf9912a63365301f93"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "82017aaa24cfb02f383e990e7f1d619d"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "9846fb99b53c06169fbf601ebb210eef"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "dc57e6e2804833158008c0c4cb546a5a"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "eb99d3af7a55fb06f474ddceddf968f8"
  },
  {
    "url": "en/test/index.html",
    "revision": "24890e5b266ce6b63db92f0b2cb7fcdf"
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
    "revision": "e8e101f42c37e95fd57c6a946157c2b2"
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
    "revision": "a1553947806f13547eb74184ad9f90c8"
  },
  {
    "url": "test/detail/page.html",
    "revision": "7fd691b006ea78a29cbb719eac42f16f"
  },
  {
    "url": "test/footer/default.html",
    "revision": "eca45bb827e3e9b61ece13c66cb2a8cf"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "6754979b62217e4471d90282f0482a6c"
  },
  {
    "url": "test/footer/index.html",
    "revision": "6729bc6ea3caf42d6b0af776c4e5a76a"
  },
  {
    "url": "test/footer/link.html",
    "revision": "8b4a42a4682c5dadc7531062be9a571d"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "2dec70f38d45183940b095fbbe09905f"
  },
  {
    "url": "test/footer/text.html",
    "revision": "693b772924e9e05f3ceb0e9e9d7e4e71"
  },
  {
    "url": "test/index.html",
    "revision": "76337fd1432aad086a0615a3acdf8e14"
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
