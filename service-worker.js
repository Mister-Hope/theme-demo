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
    "revision": "9a4d82322e141b9aa03e600bfbf2d102"
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
    "url": "assets/js/app.633374a2.js",
    "revision": "9b16dc565126e238e99efacd82563b93"
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
    "revision": "30020a26c4bce1a05f961a36102138a4"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "1d466c9a4844af741b14b1d318b238ee"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "848aff1cd75655182e9e29ee96b1feb4"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "f66143e50744b8606993002fb02822be"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "f245ce2120ad765569ec284546023845"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "2a3e1457a2bc6611864a2bdff687e2c2"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "a475dd0c9d6b9e642e114a2811e75806"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "ef466dca08ad1e74ef631ee94be64e3c"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "ee2904bb920e3e445be553751ecb05bf"
  },
  {
    "url": "en/test/index.html",
    "revision": "7b3dc9e8564f4914329d18dbdefc8575"
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
    "revision": "84d4664d961e08a423e1a3b37281f04f"
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
    "revision": "7df64fbc4aa5b6466f65cfc5d54d7f16"
  },
  {
    "url": "test/detail/page.html",
    "revision": "05c3c894114e90861bb680e3039cdf73"
  },
  {
    "url": "test/footer/default.html",
    "revision": "62f2207a6c0a62fc59350afa22689483"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "7cc25940b102e23485ffeb2004a32826"
  },
  {
    "url": "test/footer/index.html",
    "revision": "b345b8bc4a33f35237cfe6b782dd0d72"
  },
  {
    "url": "test/footer/link.html",
    "revision": "076f4843643c4d35b8f6738e97d428aa"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "417e54ee3d18e3683f92ead8ad7936f7"
  },
  {
    "url": "test/footer/text.html",
    "revision": "608a6399debe0b0dabcdad46446e6c72"
  },
  {
    "url": "test/index.html",
    "revision": "6b420ff5b4969a804f4b1d8be446feb7"
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
