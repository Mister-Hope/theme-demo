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
    "revision": "0499a51412d547165b7ca47252ef93af"
  },
  {
    "url": "assets/css/0.styles.50db1a2c.css",
    "revision": "2cb298fe6601019d5f50fa4189e13c22"
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
    "url": "assets/js/app.c45788c6.js",
    "revision": "1c94cb28b9c121f82db8a19e141f3147"
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
    "url": "assets/js/layout-Layout.38714e08.js",
    "revision": "94d3961cb7b32f00fa51f3fdf637ea77"
  },
  {
    "url": "assets/js/layout-NotFound.2ad053af.js",
    "revision": "ad77ab7cc4791d99b99fe0c306a310e0"
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
    "revision": "c53dd74578a3be1b5f733a6fe8b64680"
  },
  {
    "url": "category/index.html",
    "revision": "de4f03570e18fdcfb379cb86fc079436"
  },
  {
    "url": "category/layout/index.html",
    "revision": "315e30aee7efede1211f30573ad4f9b1"
  },
  {
    "url": "component/disable.html",
    "revision": "7bbc0f5efe151e5d874a6872bd76402d"
  },
  {
    "url": "component/footer/default.html",
    "revision": "9ab5fc94edce432a7dc5e1df6c5a6fad"
  },
  {
    "url": "component/footer/diy.html",
    "revision": "bbaf12b84adc196175cafac6ccf50658"
  },
  {
    "url": "component/footer/index.html",
    "revision": "540732dc2a46b4e6860a1821aab45b46"
  },
  {
    "url": "component/footer/link.html",
    "revision": "a645cec917a0d7f784eed3c917aff6cf"
  },
  {
    "url": "component/footer/outlink.html",
    "revision": "23ec4075dc83febb5fe4d73d9b406d47"
  },
  {
    "url": "component/footer/text.html",
    "revision": "ce2dabc62d6472b5b2fc7c99c51f1db2"
  },
  {
    "url": "component/index.html",
    "revision": "d9ebf1685fd1053088dcc36ba4103fbb"
  },
  {
    "url": "component/pageInfo.html",
    "revision": "e94c2d37e2d3096bbfb91d3d4cbdf7aa"
  },
  {
    "url": "en/index.html",
    "revision": "4bd25c654e0b6c2b83689c11ec42b133"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "41249bfe2eb1e258219293accbb33e1c"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "da4ac08e3b8b56894da39b615c3211f9"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "f3e008d4d008756c9b15c274daeb07c4"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "5283e1d05eaeb083b702ba955faf28ed"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "9b53ae63602244635dd6ce90951a7144"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "349ce524914aee26406199532794fabe"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "54e7f394bcea23a5a3ae4c8409b160f6"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "9f51be4172a01d12964621139bcc5a07"
  },
  {
    "url": "en/test/index.html",
    "revision": "f245366f78cbd899a09bd9ef11908daf"
  },
  {
    "url": "encrypt/index.html",
    "revision": "8ea0810237e5fe5064edb9ef9a715a6f"
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
    "revision": "d8d859705b494ebd1a3eebc957c93ca7"
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
    "revision": "35b1684641d1de0978d1a617b2e730a6"
  },
  {
    "url": "tag/footer/index.html",
    "revision": "858ede1a345205989e9f11d4febdb131"
  },
  {
    "url": "tag/index.html",
    "revision": "4a18d17603de765f440f62a1ac8c79d5"
  },
  {
    "url": "tag/layout/index.html",
    "revision": "80ecc11c48deafb6d977b880907092f8"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "fddee0ac7fa4fa39fe8ee9ce7fa36a66"
  },
  {
    "url": "test/index.html",
    "revision": "6ffe0e49e17d272344308431e7820f7e"
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
