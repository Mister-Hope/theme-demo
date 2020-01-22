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
    "revision": "62121b4de23f9feb2b526e30bfb15a8c"
  },
  {
    "url": "assets/css/0.styles.bfe788ed.css",
    "revision": "39e0834c6a11dd50016b9e03f26e954e"
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
    "url": "assets/js/15.ae0e2c1c.js",
    "revision": "c6e7a2d8269a684a315019050b61a6f7"
  },
  {
    "url": "assets/js/16.22d282a6.js",
    "revision": "3c1f22a1f23a719c55261e67e6a2148c"
  },
  {
    "url": "assets/js/app.b9e3c61d.js",
    "revision": "98dcc89cb9dbcb189586a948233b70e7"
  },
  {
    "url": "assets/js/layout-Layout.9e35d41d.js",
    "revision": "b22eab9ad1788e802ba90cae76c1bb5b"
  },
  {
    "url": "assets/js/layout-NotFound.149babc4.js",
    "revision": "31791f4ef882dca5338f1be6be1a11e5"
  },
  {
    "url": "assets/js/page-Home.f72badba.js",
    "revision": "208e70da214c78149b8155707ff8127a"
  },
  {
    "url": "assets/js/page-Markdown 增强.06659c9b.js",
    "revision": "545a5dfd75c94eaf6f52bfd7085bcfd3"
  },
  {
    "url": "assets/js/page-内部链接页脚.73f86d07.js",
    "revision": "0ae8747021d28fa8ec2dc1293d3afa37"
  },
  {
    "url": "assets/js/page-外部链接页脚.544f82ee.js",
    "revision": "cd38f5a677731c3608d68b0817cf0606"
  },
  {
    "url": "assets/js/page-文字页脚.417230e6.js",
    "revision": "b98deac4a6537524a44045bbd38e6471"
  },
  {
    "url": "assets/js/page-无页脚.b8b805ef.js",
    "revision": "2911dbb6684fc9fc67814321f4e69848"
  },
  {
    "url": "assets/js/page-自定义页脚.38ceea05.js",
    "revision": "3ebe97592a58e38b9057ef6c04e16250"
  },
  {
    "url": "assets/js/page-页面布局.8dab3a2d.js",
    "revision": "3b1246ca42afc770d365925e752140a2"
  },
  {
    "url": "assets/js/page-页面配置.5631b919.js",
    "revision": "bd48e25eee87a32e43f1f56d05610fe6"
  },
  {
    "url": "assets/js/page-默认页脚.205f7673.js",
    "revision": "844eb7524471f70193295c4a788b78d5"
  },
  {
    "url": "assets/js/vendors~layout-Layout.15bbfc55.js",
    "revision": "96ce02b3ed74f2e0c6f0559bef17179d"
  },
  {
    "url": "en/index.html",
    "revision": "0ae3b1a22f3051879b67940dc54e1862"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "a5bc26887545eeb19012c6044e54d969"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "39553ffc329b35fe2cf3d823781b826f"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "22f96d19d3eac85e5efeab1543d71849"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "0a5662d44ebf6547e621a1f1901109ea"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "30c2dc86f5fd7abe4677b2ded23e12f2"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "6ec003dfb30fe5d3ada235f9a202c668"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "10da343f2b5075dee7bf505531cce2c4"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "2e2a08aa4a946b1b3323fbf6bc81e408"
  },
  {
    "url": "en/test/index.html",
    "revision": "f86a46a1c194210cb9b86a50f52883f2"
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
    "revision": "20f5cc449f719817757e7caee298a14f"
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
    "revision": "638fb4d121b38369a0358069a3d79cc8"
  },
  {
    "url": "test/detail/page.html",
    "revision": "55c304a25eb069d03a666a22130044b5"
  },
  {
    "url": "test/footer/default.html",
    "revision": "be25bd86630744b4a9de4034282bcab8"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "9013268f098c3fe56840ac4d57f360e3"
  },
  {
    "url": "test/footer/index.html",
    "revision": "249bc1a35b2a8663413a2b9ba703d6e1"
  },
  {
    "url": "test/footer/link.html",
    "revision": "1a71302c014b40f4b2e3f72a555f5956"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "a40e79a1f0aa0b6845bb925aaebbc708"
  },
  {
    "url": "test/footer/text.html",
    "revision": "db72e56b9437e028f2a9850948c1f096"
  },
  {
    "url": "test/index.html",
    "revision": "be1e0f4d4141f1d8f908ae8d08cc6531"
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
