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
    "revision": "a6ea0a4dc04602f7fc150d3653bf7e16"
  },
  {
    "url": "assets/css/0.styles.6bae3627.css",
    "revision": "3a3215ffed1af8393b37fa6704136802"
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
    "url": "assets/js/15.6390dd58.js",
    "revision": "c8d9b4ec83449954d31e3a06b154b9aa"
  },
  {
    "url": "assets/js/16.c0472250.js",
    "revision": "459369102676f8149fb0d5e17f3a161b"
  },
  {
    "url": "assets/js/app.4e102492.js",
    "revision": "c7312ecfd16c720b6a30fc59fb0ac478"
  },
  {
    "url": "assets/js/layout-Layout.65428444.js",
    "revision": "e6148064c01b70236e66df6805c1da7c"
  },
  {
    "url": "assets/js/layout-NotFound.7682b863.js",
    "revision": "93b0cdf99d2d3ecadde42e58b489d9e1"
  },
  {
    "url": "assets/js/page-Home.c8c3a9bc.js",
    "revision": "583f201a925d99f06f8569b5f764c342"
  },
  {
    "url": "assets/js/page-Markdown 增强.b4b68587.js",
    "revision": "f363d92c5dbbb86b0db3285d3c0b4f86"
  },
  {
    "url": "assets/js/page-内部链接页脚.a5cbd8d4.js",
    "revision": "a6d007cd193df8be913019d1d7cb4a4c"
  },
  {
    "url": "assets/js/page-外部链接页脚.e4b716e5.js",
    "revision": "a0a1a947d15a96544476856d6738e085"
  },
  {
    "url": "assets/js/page-文字页脚.6f8500f4.js",
    "revision": "d55bb5f0617e00b53a3b86a7029c238d"
  },
  {
    "url": "assets/js/page-无页脚.37948fdb.js",
    "revision": "5455c368eadd68ab7542a9c95f595623"
  },
  {
    "url": "assets/js/page-自定义页脚.0d8ef99e.js",
    "revision": "a31c0047ba9bc526295fa283fd70a78e"
  },
  {
    "url": "assets/js/page-页面布局.07e46305.js",
    "revision": "daa0b393e45e802f992b441a2c428742"
  },
  {
    "url": "assets/js/page-页面配置.05881fd8.js",
    "revision": "338f125bdca122551a32112232d29304"
  },
  {
    "url": "assets/js/page-默认页脚.77dbfb53.js",
    "revision": "104dc3aed8fa843c15b0da6894c19721"
  },
  {
    "url": "assets/js/vendors~layout-Layout.c67c3e9d.js",
    "revision": "d3002cbd1fff211d8704ceb9dff0e9f7"
  },
  {
    "url": "en/index.html",
    "revision": "6b624885d6443dc8ad431e377834e235"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "93966ed2273d368b687e1f89d1e5d869"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "96bd9d0766a6a2022a00b06d83958dbb"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "64b91ed327b651c5e6ce6ca400a35468"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "25bd06d64f27b4ecb0f68701e7a14625"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "3985d0be566e0e0628f430cd020e0724"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "6a185792485aa05ed79b9abe44088404"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "aa8b62c0a084d54b9b0a7e370e996d59"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "147c96a30b3dc0d8bd5e55401504dcad"
  },
  {
    "url": "en/test/index.html",
    "revision": "5695929152fe2370162c8187ed1f582e"
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
    "revision": "27b6bedff7d0abf7786f08ea8140dd49"
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
    "revision": "8166bd373e6dae07c8b9f5b777b7fd70"
  },
  {
    "url": "test/detail/page.html",
    "revision": "59c2aaaf222e31d2f8cd869d097ee2ad"
  },
  {
    "url": "test/footer/default.html",
    "revision": "26f8e1b41ae4a2a417ea2a2a930f4771"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "7c712d393ae999d8b7722aa597065022"
  },
  {
    "url": "test/footer/index.html",
    "revision": "f9f8200acb18a91ddf622faeec620394"
  },
  {
    "url": "test/footer/link.html",
    "revision": "09e2ccf94fded0c5c98d2de53c30e90e"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "3f00cde234022cc765c3b48a88fcba69"
  },
  {
    "url": "test/footer/text.html",
    "revision": "26dadabbe7a0435333f852c44d1f9049"
  },
  {
    "url": "test/index.html",
    "revision": "414d507e0a550b2c77411f8c656f05e4"
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
