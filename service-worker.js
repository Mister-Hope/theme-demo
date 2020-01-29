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
    "revision": "2944d14299d0eb99d65966c1e144cb78"
  },
  {
    "url": "assets/css/0.styles.2758a37c.css",
    "revision": "a85c7bb3fcacf90c47a79325a83b3bd2"
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
    "url": "assets/js/19.5c5e8314.js",
    "revision": "689b4da15ac1c8b51f846ecafca35ef4"
  },
  {
    "url": "assets/js/20.4105263a.js",
    "revision": "bc81aefc8485e418d8572e3181cfe46b"
  },
  {
    "url": "assets/js/app.a715bd93.js",
    "revision": "4ce28da7129d968006b4132db36887fc"
  },
  {
    "url": "assets/js/layout-BlogEntry.a233684c.js",
    "revision": "b86891d50571feb87bcf6be2434be6fb"
  },
  {
    "url": "assets/js/layout-BlogEntry~layout-Layout.7d1a73d5.js",
    "revision": "ad675d87fe500c335d55beb82f705c74"
  },
  {
    "url": "assets/js/layout-Category.46d7d830.js",
    "revision": "6d276303c572ae8f33c4fa5a23202d8a"
  },
  {
    "url": "assets/js/layout-Layout.00e6ac85.js",
    "revision": "17b0904b1a9600649719d1c458e570f2"
  },
  {
    "url": "assets/js/layout-NotFound.4d08f99c.js",
    "revision": "adf5bec6a5899e69991ae89ab728cf0e"
  },
  {
    "url": "assets/js/layout-Tag.ec5652f4.js",
    "revision": "866820eb75d24d23c7248182dd7ec723"
  },
  {
    "url": "assets/js/page-Home.5f6a5ce5.js",
    "revision": "f3af5a67f3f56eab24e24cf971042f29"
  },
  {
    "url": "assets/js/page-Markdown 增强.7a729e8d.js",
    "revision": "feafc42787837670dcf552cb9928e95a"
  },
  {
    "url": "assets/js/page-内部链接页脚.762b1342.js",
    "revision": "762b18bef01fc483447a105c73cef181"
  },
  {
    "url": "assets/js/page-外部链接页脚.b7be89d3.js",
    "revision": "25b7dc4138d7bd935abb6d227b3e1d91"
  },
  {
    "url": "assets/js/page-文字页脚.0186f1d8.js",
    "revision": "3fc88a67143b405bd082ba5a4fa3c67f"
  },
  {
    "url": "assets/js/page-无页脚.0d8687fa.js",
    "revision": "2f102263798343394f2735fc4c3981bc"
  },
  {
    "url": "assets/js/page-自定义页脚.d1cf411c.js",
    "revision": "f3fee831ac25b83cbd6e986f04a2d948"
  },
  {
    "url": "assets/js/page-页面布局.85382fff.js",
    "revision": "a592595a2f106245c5d735be86eb3a1f"
  },
  {
    "url": "assets/js/page-页面配置.06f63ea6.js",
    "revision": "214774a5eca22aa9cea48e80e6637418"
  },
  {
    "url": "assets/js/page-默认页脚.124fd287.js",
    "revision": "a4a3ea30cf0ecb857870c47e1471db4d"
  },
  {
    "url": "assets/js/vendors~layout-BlogEntry~layout-Layout.75c95795.js",
    "revision": "6faf57ace02a6046e9a1b81dc4f2b33a"
  },
  {
    "url": "category/index.html",
    "revision": "cf65bbb148f72fd24bf25f27fec24da3"
  },
  {
    "url": "en/index.html",
    "revision": "a47bd71f72000a16376c4adb2b5387fe"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "acffba28b008db9faba14d30cd809e92"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "ac3455021c86f1991d0e3f999da734ce"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "70ceab859661d1ecbe30b1b0b13a6eaa"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "4500a64bb5db9846ccbc407e612131bc"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "b701f63d1c1eba970c636aaf67f13b00"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "1497f8d1cc6a69d6c5e74afdc47ecf84"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "b7e5b654a2089b2a704d0225c6638929"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "16c87fa9f7c158891f4086fbf1c6695c"
  },
  {
    "url": "en/test/index.html",
    "revision": "e72ea3deac5ff5734ce4b4c5911c60af"
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
    "revision": "e5e23f7f8e3a86f9dda36b5053dc45ec"
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
    "revision": "4be5310a498386968671bf9d43782ab0"
  },
  {
    "url": "test/detail/markdown.html",
    "revision": "1f913a7a6c7bf435dd6c5a75c9f27c2f"
  },
  {
    "url": "test/detail/page.html",
    "revision": "0ef7700ce95775b8eeca7df40a3f60e0"
  },
  {
    "url": "test/footer/default.html",
    "revision": "f9ce65d456da565b4aa9758c5e928eb8"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "4cbfebeadfaeefe3b7f3618cb3aebb43"
  },
  {
    "url": "test/footer/index.html",
    "revision": "8f5fba5911e22864459ccac1f7eab30f"
  },
  {
    "url": "test/footer/link.html",
    "revision": "51d824fba4caee840a599c93c277dced"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "4f3fd8742773f111c6d82fc70415cbd7"
  },
  {
    "url": "test/footer/text.html",
    "revision": "cdc6bf092ee4689dc55ac4c5c4541c76"
  },
  {
    "url": "test/index.html",
    "revision": "d029f143e630d01d394def10d3ab5b88"
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
