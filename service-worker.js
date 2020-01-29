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
    "revision": "39c4035a027b615a4c2645e82f6a9fb0"
  },
  {
    "url": "assets/css/0.styles.da6bc249.css",
    "revision": "ea8df8c5412463ad821eae0b8ac2a1ff"
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
    "url": "assets/js/19.1a364ab4.js",
    "revision": "93852b3ca42b93e941dd882eb07d6b60"
  },
  {
    "url": "assets/js/20.dcf3a5f7.js",
    "revision": "3be3aecad7cad39906f7270f4c06ab25"
  },
  {
    "url": "assets/js/app.bb11b130.js",
    "revision": "f44cf8cd1a3158ad345848263085cba7"
  },
  {
    "url": "assets/js/layout-Layout.90d991ed.js",
    "revision": "3855e77b9737da14774b910b2b70cdaf"
  },
  {
    "url": "assets/js/layout-NotFound.c1946639.js",
    "revision": "bbb42d713a186079c4384cbe3419c8b3"
  },
  {
    "url": "assets/js/page-Home.1d6a8720.js",
    "revision": "d8ef624cbe4e291407ecee5681e85947"
  },
  {
    "url": "assets/js/page-Markdown 增强.561ddc04.js",
    "revision": "686a4e8ca348ccfd917a1fef1a19701c"
  },
  {
    "url": "assets/js/page-内部链接页脚.b5901820.js",
    "revision": "770b74ab674c11723b1ecb2d5f33eccc"
  },
  {
    "url": "assets/js/page-外部链接页脚.b6d6f0a2.js",
    "revision": "0db2dc3f8fb8d2706efdfcf7af8a2221"
  },
  {
    "url": "assets/js/page-密码测试.87e83dbc.js",
    "revision": "6932d9809435d51c8523768bd43babf7"
  },
  {
    "url": "assets/js/page-文字页脚.28d313dd.js",
    "revision": "b0092b0b7ff2d6e24e121d67666c5b7c"
  },
  {
    "url": "assets/js/page-无页脚.a47fe766.js",
    "revision": "21ea40f298c8d8e26e6ed14bcbe88415"
  },
  {
    "url": "assets/js/page-组件测试.3666d5d7.js",
    "revision": "37a8f52b595a9a162042c00e7e902e27"
  },
  {
    "url": "assets/js/page-组件禁用.61b34f54.js",
    "revision": "8989ea12bee0dd77661b16ac20e46820"
  },
  {
    "url": "assets/js/page-自定义页脚.a1be666b.js",
    "revision": "6605601cecc40d7bfec940d7e7028303"
  },
  {
    "url": "assets/js/page-页面信息.b71639fb.js",
    "revision": "7d20b908a542a16311ca9717bc07dab3"
  },
  {
    "url": "assets/js/page-页面布局.3875de54.js",
    "revision": "89bddbca209b88a3ed1547a89546e4b8"
  },
  {
    "url": "assets/js/page-页面配置.93f04029.js",
    "revision": "55a35ef888c6757df90e15a1f6929701"
  },
  {
    "url": "assets/js/page-默认页脚.e755975e.js",
    "revision": "06121163e655e53dec29a29c706d7141"
  },
  {
    "url": "assets/js/vendors~layout-Layout.99b49987.js",
    "revision": "4bb2fee30a68b60cac42a8dd99a9ba28"
  },
  {
    "url": "component/disable.html",
    "revision": "42e0bf7369243a843f2f36025434a3eb"
  },
  {
    "url": "component/footer/default.html",
    "revision": "f40da4eff7c50d976340a53f52eaabef"
  },
  {
    "url": "component/footer/diy.html",
    "revision": "e71112c4140765f6fad954779f0f1563"
  },
  {
    "url": "component/footer/index.html",
    "revision": "119c537b6bd330556f55eb362ec7fd86"
  },
  {
    "url": "component/footer/link.html",
    "revision": "a4b72c829aa92648745a72e720822e36"
  },
  {
    "url": "component/footer/outlink.html",
    "revision": "237541459c39cca33f54a93ed88b6a73"
  },
  {
    "url": "component/footer/text.html",
    "revision": "0680bfcc0732d459b66965cbd91ba6fa"
  },
  {
    "url": "component/index.html",
    "revision": "92ece402c40c9d9998d39c57b09c5af3"
  },
  {
    "url": "component/pageInfo.html",
    "revision": "4907b153f3ff9bd929561b0999ae7797"
  },
  {
    "url": "en/index.html",
    "revision": "56871b863a498c85c46ff26b3397c73e"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "a2fd64a5a7e26930165b185a075f7a9c"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "bb073450654df7707c5a31f103a80bd4"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "52ac324e86aeb8ee2c2790bdedb78efa"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "fe6d16018840481484a53eeb2504fbe6"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "79cd1ae463e32549425cb3e34cfe15f8"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "3bfcda2fb8237c37e2744c24cd9e0f90"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "05b9430424f31a8b778e36f813e7fc1c"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "464a60777a40f1fe30fe03638c26086c"
  },
  {
    "url": "en/test/index.html",
    "revision": "6647c4536536609377810fa31087d3e1"
  },
  {
    "url": "encrypt/index.html",
    "revision": "ffe19f6c2898e7e04eadc336ef4513d2"
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
    "revision": "9eb12f2aad47c7a4beded0ed7f5821ee"
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
    "revision": "e019e973274e94c858a3728358ea68d3"
  },
  {
    "url": "test/index.html",
    "revision": "84cdb921f1e02a95d69e596101891838"
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
