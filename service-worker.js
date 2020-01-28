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
    "revision": "9b7f3c7023ba0a3ac0ae4303a852c230"
  },
  {
    "url": "assets/css/0.styles.070d2bdc.css",
    "revision": "7fa4d05254495f50f318407ba924de3b"
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
    "url": "assets/js/19.8b6b4114.js",
    "revision": "3b1888ac505199ddea9dbe21dfc1d89a"
  },
  {
    "url": "assets/js/20.3602c8f4.js",
    "revision": "0bdbbfa9165efeeb55797115306bc3ed"
  },
  {
    "url": "assets/js/app.bac6dc62.js",
    "revision": "56ca6947c6ac30c203dd97ce55e7f4f1"
  },
  {
    "url": "assets/js/layout-BlogEntry.b0171510.js",
    "revision": "ec9cde6371d799c26a824610a734631a"
  },
  {
    "url": "assets/js/layout-BlogEntry~layout-Layout.87b0dc3a.js",
    "revision": "80b1fa56bca0230d907854d81934ec9f"
  },
  {
    "url": "assets/js/layout-Category.fd16c1ed.js",
    "revision": "1293b69eb6eeb30134f779428f1ffa6f"
  },
  {
    "url": "assets/js/layout-Layout.0b4d2739.js",
    "revision": "415c460631afafef77dcb190775e20c1"
  },
  {
    "url": "assets/js/layout-NotFound.424f036d.js",
    "revision": "c1053979ba4ff25c996030e6871d7935"
  },
  {
    "url": "assets/js/layout-Tag.ac8f6b92.js",
    "revision": "5de9e1313179cd86c72eb536421b1707"
  },
  {
    "url": "assets/js/page-Home.d50012fa.js",
    "revision": "d9b2bc9546b80064c52a49f9e42e61d2"
  },
  {
    "url": "assets/js/page-Markdown 增强.bd7b17aa.js",
    "revision": "a67f961f3a3128c91e2be51586fb5978"
  },
  {
    "url": "assets/js/page-内部链接页脚.191bdabf.js",
    "revision": "717e2ad1c9fd0cc237503b09f64a8348"
  },
  {
    "url": "assets/js/page-外部链接页脚.58262ab6.js",
    "revision": "f0f1bf60391a74e97fe877eb304b2ce4"
  },
  {
    "url": "assets/js/page-文字页脚.bf72486e.js",
    "revision": "f96bdc5a6428bfaec9033eed4c8995a7"
  },
  {
    "url": "assets/js/page-无页脚.8373d3b9.js",
    "revision": "a27ec6fd7ae3916c877476273c9dd996"
  },
  {
    "url": "assets/js/page-自定义页脚.461f7272.js",
    "revision": "9475ce72952c4d3c581cc0fb22cf4361"
  },
  {
    "url": "assets/js/page-页面布局.f3b73b34.js",
    "revision": "ecff97b5e9acd96e70f1ed9bfc951324"
  },
  {
    "url": "assets/js/page-页面配置.9920a8a9.js",
    "revision": "29cd394ce887088c9f26944e7a2e7476"
  },
  {
    "url": "assets/js/page-默认页脚.ebe87ff9.js",
    "revision": "f46497ed7f0d94fea382bbad2e6ec832"
  },
  {
    "url": "assets/js/vendors~layout-BlogEntry~layout-Layout.2e915cbc.js",
    "revision": "b066814b6bd432022d7b20a1c4780a44"
  },
  {
    "url": "category/index.html",
    "revision": "57576062dfa74001a8f8f15b3dbd9236"
  },
  {
    "url": "en/index.html",
    "revision": "ba091c37716ab6088fa5d7a4ace53df0"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "65264885672eb880e24454021befd0ff"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "6354a6ce9481ba2fc86252b0b0684a41"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "8cfdd20b360a2f7d0ed28eba02db330d"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "aa7372d8697be1b1bce453f5e5d5c506"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "555654a7e9422c67e484442c220b7c1c"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "d27235e61abad9cf29a1be4e39f849fc"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "5a2d20d6aec4a780a3f3fb35629aa969"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "e96a8b3ed3637305de05ee7bc38e8f5d"
  },
  {
    "url": "en/test/index.html",
    "revision": "11e1b588e6e97abbb788d0a5d00f426b"
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
    "revision": "3e85711e5dc73b378f7d02abeaeb36e9"
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
    "revision": "e35d2446cb0fa86a3318f2bbbd0b6607"
  },
  {
    "url": "test/detail/markdown.html",
    "revision": "5a4f765ce170bc36bd56d4092e319d9e"
  },
  {
    "url": "test/detail/page.html",
    "revision": "ca99dacb1182c7dc40be2ec353ae1b6c"
  },
  {
    "url": "test/footer/default.html",
    "revision": "43551de89254a7d1900a79a62574072b"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "ebbfa6dde059d31e694b4d35a462474e"
  },
  {
    "url": "test/footer/index.html",
    "revision": "10dadba1edcb26084163fcc1ba938eca"
  },
  {
    "url": "test/footer/link.html",
    "revision": "6d7d2625b112d18afb15bb8b4dbf9ae9"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "d958d388f5c670b70f8a6c7cd83a80a8"
  },
  {
    "url": "test/footer/text.html",
    "revision": "4d307596c4ec960f3bf905a23198fcc7"
  },
  {
    "url": "test/index.html",
    "revision": "cbf2412ccd158abc95450d6ebbea43d3"
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
