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
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "assets/css/0.styles.a4935617.css",
    "revision": "6d54054d4b3b699edc6f7a500dc6a871"
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
    "url": "assets/js/24.608309d5.js",
    "revision": "da33a90cf0e83d81d0b44f12fb551347"
  },
  {
    "url": "assets/js/25.b9ed4fce.js",
    "revision": "df83042facf769acf90bce69d9342aa4"
  },
  {
    "url": "assets/js/app.21737717.js",
    "revision": "f7ee92c92b97185e16abbdd3bcdc295c"
  },
  {
    "url": "assets/js/layout-Layout.4674e09e.js",
    "revision": "9c034419d8f8ae9fbb9c2e04574031cb"
  },
  {
    "url": "assets/js/layout-NotFound.087c8247.js",
    "revision": "3c44dfa8133a18a55e698000a0c7b118"
  },
  {
    "url": "assets/js/page-API Config.86cafe54.js",
    "revision": "04eedb78b68fd9abd2e9644f52172a8a"
  },
  {
    "url": "assets/js/page-BitBucket OAuth Consumer.b0a0ec45.js",
    "revision": "b40e548f7e4471fac3023961dcedc2a1"
  },
  {
    "url": "assets/js/page-Gitee Third Party Application.8c3dd4b4.js",
    "revision": "7fc76b4362e8ef5db5ed2cc79b1ddb13"
  },
  {
    "url": "assets/js/page-Gitee 第三方应用.8007f248.js",
    "revision": "9910ed18c92a187e97756d33004730b9"
  },
  {
    "url": "assets/js/page-GitHub OAuth App.e4c7e135.js",
    "revision": "f2894aff0157ddc2434f8c5821a2f1a8"
  },
  {
    "url": "assets/js/page-GitLab Application.01c538a0.js",
    "revision": "47005a795707f5790d5caf55d9698b61"
  },
  {
    "url": "assets/js/page-Guide.bcfabca4.js",
    "revision": "f7095e140b1dbf4e01dcd945b37720af"
  },
  {
    "url": "assets/js/page-Home.eab17b0c.js",
    "revision": "d7bd790125f6c39ae88aff4219a1da6f"
  },
  {
    "url": "assets/js/page-Supported Platforms.d557957c.js",
    "revision": "13cda2ebd17d1ab992e3d14a59831d37"
  },
  {
    "url": "assets/js/page-Using Vssue.9bd493dd.js",
    "revision": "019d93474f3e4a1dc134295824e04388"
  },
  {
    "url": "assets/js/page-Valine Config.8b39cccb.js",
    "revision": "0d3ed2531b9ce45bfb06412ee670138d"
  },
  {
    "url": "assets/js/page-valine 配置.edd16735.js",
    "revision": "8cfd651fc3df7372e25c2ae93a1d187a"
  },
  {
    "url": "assets/js/page-Valine.7faa64fe.js",
    "revision": "cfb4cdbdb30ceb88a93b0e2d5e3a933f"
  },
  {
    "url": "assets/js/page-Vssue Options.3df5a859.js",
    "revision": "7f69424736892244661506ce7fd1c1ad"
  },
  {
    "url": "assets/js/page-Vssue 配置.fe949fce.js",
    "revision": "e42ac159bf44f0e1abff4c41fb529337"
  },
  {
    "url": "assets/js/page-使用 Vssue.e0ac9157.js",
    "revision": "7ce0a265cb06b2b17511a0314d7151b9"
  },
  {
    "url": "assets/js/page-指南.615a1839.js",
    "revision": "60e81b940dd32aa46d7ee2e01a352215"
  },
  {
    "url": "assets/js/page-支持的代码托管平台.abda2be2.js",
    "revision": "de44cb760de7917e71e28382ce82afb5"
  },
  {
    "url": "assets/js/page-配置.95194a7e.js",
    "revision": "da46f5bb53643b5c928edd59f56c7be7"
  },
  {
    "url": "assets/js/vendors~layout-Layout.549dbac2.js",
    "revision": "4b382bf97be0f63cf109c602f5783dae"
  },
  {
    "url": "en/index.html",
    "revision": "e921dea0f1c2ccafe6fedb1933b10b28"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "en/test/index.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
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
    "revision": "27a7cbefd3c098793dba14dfdf72b65d"
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
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/detail/page.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/default.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/index.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/link.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/footer/text.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
  },
  {
    "url": "test/index.html",
    "revision": "a2751d4aa239f2555f27e1a5d8452153"
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
