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
    "revision": "9636777b92bfcdf7623b9b1aa221d411"
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
    "url": "assets/js/23.75713e2a.js",
    "revision": "c21d8598ea121322f7934c50e304ce26"
  },
  {
    "url": "assets/js/24.434e7506.js",
    "revision": "34788e33236ffdf9ef0e0095c06b49a3"
  },
  {
    "url": "assets/js/app.8003fb01.js",
    "revision": "864ade8b0b7565b2e9961863895fb182"
  },
  {
    "url": "assets/js/layout-BlogEntry.18b3fe5d.js",
    "revision": "c872b32bb7e6d64bc67d7bbaf88c633e"
  },
  {
    "url": "assets/js/layout-BlogEntry~layout-Layout.d0744dce.js",
    "revision": "74a564d55ee4e02a4e168bdd6c68f933"
  },
  {
    "url": "assets/js/layout-Category.42e9a6fb.js",
    "revision": "88acff893f6ab04b77e27cc07cd1d9c5"
  },
  {
    "url": "assets/js/layout-Layout.4f1a3b83.js",
    "revision": "0863f9390e7e878be68c00869707afe2"
  },
  {
    "url": "assets/js/layout-NotFound.3d803180.js",
    "revision": "9d3ca0b0d74effe646a69c0cf0d3cec7"
  },
  {
    "url": "assets/js/layout-Tag.dc231364.js",
    "revision": "e5be34dc19fac7dabea4decb3e0a876a"
  },
  {
    "url": "assets/js/page-Home.1368255d.js",
    "revision": "f43ee9e0ec3dc2abc41a9c0288da3ef0"
  },
  {
    "url": "assets/js/page-Markdown 增强.a90d4881.js",
    "revision": "961b78eee431308c2dd44747e46551a3"
  },
  {
    "url": "assets/js/page-内部链接页脚.e41c0e47.js",
    "revision": "a68515ddca0ff4c55c0f94053c6cd12b"
  },
  {
    "url": "assets/js/page-外部链接页脚.9ef3a937.js",
    "revision": "4276594a9e4f4f6702d40f26812f6b52"
  },
  {
    "url": "assets/js/page-密码测试.a8f09680.js",
    "revision": "48ff7216758764b67511014cfbd17cd7"
  },
  {
    "url": "assets/js/page-文字页脚.92c43ca8.js",
    "revision": "7b88b5279fe302857a133b218b8600fb"
  },
  {
    "url": "assets/js/page-无页脚.c0bfb236.js",
    "revision": "53e0a11b2f013f29894229db229a89f4"
  },
  {
    "url": "assets/js/page-组件测试.633d6d13.js",
    "revision": "7b71909f09a84b4daa2e4aa95f0fe96d"
  },
  {
    "url": "assets/js/page-组件禁用.32b39182.js",
    "revision": "6612473f4217d02fbdbf55b66fe6808d"
  },
  {
    "url": "assets/js/page-自定义页脚.ef01963a.js",
    "revision": "cd3892b343c43a99e7ac4051b95579dd"
  },
  {
    "url": "assets/js/page-页面信息.0f3363fd.js",
    "revision": "deef7d506b5b0db8d970838a0e9744d1"
  },
  {
    "url": "assets/js/page-页面布局.9a3e19de.js",
    "revision": "389ab71cac85aad26d4ea69fa4f639e0"
  },
  {
    "url": "assets/js/page-页面配置.595e80cd.js",
    "revision": "c0ea94f4d389010b2762a756e3b338d5"
  },
  {
    "url": "assets/js/page-默认页脚.a70738b6.js",
    "revision": "a1cc139f673ab264a92df5a6fc1c668a"
  },
  {
    "url": "assets/js/vendors~layout-BlogEntry~layout-Layout.dd7c53bf.js",
    "revision": "0f4ca7e772943cca0b9b4f96f60c4e02"
  },
  {
    "url": "category/component/index.html",
    "revision": "581082644cdc0c41836644d4a79a37d8"
  },
  {
    "url": "category/index.html",
    "revision": "c47f705c6d2c4f8c86fa5b95fc1ad2d4"
  },
  {
    "url": "category/layout/index.html",
    "revision": "299dd4a89ec50de4e26333b232e9c19a"
  },
  {
    "url": "component/disable.html",
    "revision": "80b58d1d065e1cf0991859b1375eb69f"
  },
  {
    "url": "component/footer/default.html",
    "revision": "11141c046e7dd4bfc5062ec6c1004fe1"
  },
  {
    "url": "component/footer/diy.html",
    "revision": "f72cab43384b6d9c9686db5cfdb7e30f"
  },
  {
    "url": "component/footer/index.html",
    "revision": "abeadb3dc44f335fce83c0a626635876"
  },
  {
    "url": "component/footer/link.html",
    "revision": "9b402bf6b1cff1e30d29fc618e65a302"
  },
  {
    "url": "component/footer/outlink.html",
    "revision": "ce362acd53dfb54f3f6cb73ef162f02b"
  },
  {
    "url": "component/footer/text.html",
    "revision": "6495c081b87a8a0bbb0b9c2c11ecac70"
  },
  {
    "url": "component/index.html",
    "revision": "4e63566dbeeeb760816492b02fe96b3b"
  },
  {
    "url": "component/pageInfo.html",
    "revision": "6c9e0ea56498c3c7e3e923a142b197b6"
  },
  {
    "url": "en/index.html",
    "revision": "b5fc5dec5dad856eef9913181b90bdd0"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "8785cdd02a70355e59d8c11e1dd7fd84"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "385f32169b595edf26c0d48c51f7802b"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "ec868294c83b151d1b729a9dd5cecf12"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "c3e821ccf76acce3b72e3dc5c4f024db"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "8b0fe0e4374f04a0e47de214d08f7e99"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "30d63fb537f345181c654e82c14642e9"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "cd52bcff89f7dab86647ea6edd15ce95"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "aca4d492943f43d6e63b28625eb6c349"
  },
  {
    "url": "en/test/index.html",
    "revision": "9eecd35fa818d9cfa9ec412b0f14d3a4"
  },
  {
    "url": "encrypt/index.html",
    "revision": "242b67beb681d1eaef4dfc4f0a115d6d"
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
    "revision": "cc8d98b55582cec6501423a48b65ac26"
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
    "revision": "950d3fab250caca60625be9d448ba5d9"
  },
  {
    "url": "tag/footer/index.html",
    "revision": "c3363f0208b84e7df68132ae8b62760b"
  },
  {
    "url": "tag/index.html",
    "revision": "e5a61ef3ed33a75731c9d29db4f87b73"
  },
  {
    "url": "tag/layout/index.html",
    "revision": "5613df2b114218546a10cd4b3ae857eb"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "a29f568570ad58ed1f1bfed0404e2f6f"
  },
  {
    "url": "test/index.html",
    "revision": "546428873868a3a5bb43ce79c35b592c"
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
