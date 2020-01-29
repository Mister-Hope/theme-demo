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
    "revision": "793cf0e9c3eb4d5bb04d48d8b3989dca"
  },
  {
    "url": "assets/css/0.styles.7d5e0fdf.css",
    "revision": "9584872b7e1d9c7fe3948ee66f15f0ef"
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
    "url": "assets/img/homeImage.5ae9de9e.jpg",
    "revision": "5ae9de9e15120d94e9892d0c15da9896"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/19.09b96a63.js",
    "revision": "b2d515dc0264b0f83e27d9ff7f4c948c"
  },
  {
    "url": "assets/js/20.4105263a.js",
    "revision": "bc81aefc8485e418d8572e3181cfe46b"
  },
  {
    "url": "assets/js/app.76c020a8.js",
    "revision": "cd1e1cf6939a70f7f6324cfff1e159bf"
  },
  {
    "url": "assets/js/layout-BlogEntry.237e76e6.js",
    "revision": "c5a2a513faea960a1c12ba5622ce760d"
  },
  {
    "url": "assets/js/layout-BlogEntry~layout-Layout.1747ecf8.js",
    "revision": "0d4cc1601f8e2b61da2f303e5485eac9"
  },
  {
    "url": "assets/js/layout-Category.18e2644b.js",
    "revision": "e550d48e6a188a271799ca956f97cd7c"
  },
  {
    "url": "assets/js/layout-Layout.b3e40356.js",
    "revision": "d061dbba32e48d9b5dadf4f37fe317e5"
  },
  {
    "url": "assets/js/layout-NotFound.3b43fe3f.js",
    "revision": "beca013063c548ea56520ef13d2137c9"
  },
  {
    "url": "assets/js/layout-Tag.34b9204c.js",
    "revision": "bb0ad71fcec6da7abc6b08c3e3aae467"
  },
  {
    "url": "assets/js/page-Home.94b422e9.js",
    "revision": "7d1a70f9712ed4080ebcc9944eff234a"
  },
  {
    "url": "assets/js/page-Markdown 增强.948f3f29.js",
    "revision": "a9c07861237e67bb64fa7654d3c5047b"
  },
  {
    "url": "assets/js/page-内部链接页脚.1e6439fe.js",
    "revision": "9ed6fae1d9288f63c0bdc325542b9a99"
  },
  {
    "url": "assets/js/page-外部链接页脚.a6804214.js",
    "revision": "69f57257005892d71642a4b28d4ea9aa"
  },
  {
    "url": "assets/js/page-文字页脚.6a1b0182.js",
    "revision": "b6bd63ddf21705f82a46c43a9a1f40ed"
  },
  {
    "url": "assets/js/page-无页脚.39c7a667.js",
    "revision": "60a56703aecbd56ed1420cc8788f7fae"
  },
  {
    "url": "assets/js/page-自定义页脚.18978d69.js",
    "revision": "23785da308030faf733f44800bd6512b"
  },
  {
    "url": "assets/js/page-页面布局.746f43f7.js",
    "revision": "cb66bcc1507e424189464386a03dcd48"
  },
  {
    "url": "assets/js/page-页面配置.eebfd35d.js",
    "revision": "635f3515d8cde10cf01f15d782bc3e9a"
  },
  {
    "url": "assets/js/page-默认页脚.0b29a73c.js",
    "revision": "5edb0700632b44a4c41d8d718e76eebf"
  },
  {
    "url": "assets/js/vendors~layout-BlogEntry~layout-Layout.b0ae1671.js",
    "revision": "fc4869e683148d3d418ec0bfe46e00aa"
  },
  {
    "url": "category/index.html",
    "revision": "c82cdc4bfb901269ccbdcdb69a79e443"
  },
  {
    "url": "en/index.html",
    "revision": "78464fb339b2af819e509583ef914167"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "bfebab537d26432d65251f73e6935dac"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "45a597daf2dc4627a2e4cc2f260631ff"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "dd506e89f43490fb31a492f221b5bf93"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "3b2280ab52f8f8b92e2dedb264bb8609"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "9776735780ef67f326fe509a5e40023f"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "c89c03d3716c3e6257a85fec5fb32181"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "f17ef385699c3378624fd5b06233b355"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "86a14777eef7af5b07ea3990e2590aae"
  },
  {
    "url": "en/test/index.html",
    "revision": "87b4dcb768cc2613444434cf251c6a23"
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
    "revision": "06e2eb8550069840fdb2746ac1fe2a70"
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
    "url": "tag/index.html",
    "revision": "8bf4c1d7b6bfb9c6c71c35dd4d993aba"
  },
  {
    "url": "test/detail/markdown.html",
    "revision": "967bb9487c52a031b922ddba7f06905c"
  },
  {
    "url": "test/detail/page.html",
    "revision": "42bfda8adb3f2fa1a118989a38e1c52b"
  },
  {
    "url": "test/footer/default.html",
    "revision": "94074d44ef053c0efd638570cace700b"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "51b864d2e13bb43583c68028a55948aa"
  },
  {
    "url": "test/footer/index.html",
    "revision": "4a674e6b3f04cccf36ea7caec0f65b19"
  },
  {
    "url": "test/footer/link.html",
    "revision": "806f16e26277cc4c18e734fb51abc579"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "3e5fe693420db5274a51c4b65adccef7"
  },
  {
    "url": "test/footer/text.html",
    "revision": "18f038812d433f206d0879d4e0b42f3f"
  },
  {
    "url": "test/index.html",
    "revision": "b2e8bc7a5cba1554a32fe732e5381da0"
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
