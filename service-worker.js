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
    "revision": "07feb19e7c07c3b1ad2ddbf561fc2d04"
  },
  {
    "url": "assets/css/0.styles.12e52ea8.css",
    "revision": "f34d2be721d9f7d8526f9cc6c0ad7c1b"
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
    "url": "assets/js/app.c3ec9d9b.js",
    "revision": "64925056c8f56d510815002faeab789c"
  },
  {
    "url": "assets/js/layout-Layout.32538419.js",
    "revision": "d7e3be84265a7a36207cee79fcfd80d3"
  },
  {
    "url": "assets/js/layout-NotFound.c38dba24.js",
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
    "url": "assets/js/page-无页脚.6f3d9d8f.js",
    "revision": "f594a922f4b431e16864c9229cc39a26"
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
    "url": "assets/js/vendors~layout-Layout.91b32690.js",
    "revision": "833a5ebad3206e7fe523e411e660ab28"
  },
  {
    "url": "en/index.html",
    "revision": "d7498a0fbc4f4956f122717b2f1e4959"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "ef47667a1684b3e5fa9bfb6450cd525b"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "e4ff4f507b6ff63650a1615a17602c25"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "73172e4c585037f407c2b3709f6f2772"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "98dde3dee26fe9f2e86803c7d18f3c92"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "6555410a5a40c3428f5005f201d9be81"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "f1fd1cabf14b96bfe83984eb4dfe3ca8"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "f345abfa5faf7ffc88f7397b9191ca42"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "6cba87df8d8fe0a05de1f4ba6da9daea"
  },
  {
    "url": "en/test/index.html",
    "revision": "816ee68a0355e14d7f2fb4f63a8b0a65"
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
    "revision": "80d7b9e379e3f980f78e1d7daa694b87"
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
    "revision": "60dbdeaacc993611eee69393ace61df5"
  },
  {
    "url": "test/detail/page.html",
    "revision": "7ae00fa22c87b57bfab6524fffffcc86"
  },
  {
    "url": "test/footer/default.html",
    "revision": "dacaeba30f6c99bc6103795d0f72963f"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "434d1bf07ed57743a8ef9b5ed4b8fa6d"
  },
  {
    "url": "test/footer/index.html",
    "revision": "d33203b629042fc3653f4501e7cdfb05"
  },
  {
    "url": "test/footer/link.html",
    "revision": "98e7ed9ba3af54b060f9b7a1cac958f7"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "bed4e2c37985a0667ec0444b48cf2bb0"
  },
  {
    "url": "test/footer/text.html",
    "revision": "f42f17695301d01f0e48473687954769"
  },
  {
    "url": "test/index.html",
    "revision": "9b3ee3cca98f55d4eff87fa6d040a73d"
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
