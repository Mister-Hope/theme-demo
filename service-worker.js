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
    "revision": "61f3d33882770e1c9645e21c326ed469"
  },
  {
    "url": "assets/css/0.styles.059402a4.css",
    "revision": "046fdae2f6779f24744d44695a9e040c"
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
    "url": "assets/js/app.c5bcd3a4.js",
    "revision": "08308401e537d895adfb998ee0a64ba1"
  },
  {
    "url": "assets/js/layout-Layout.ea0c707b.js",
    "revision": "e6148064c01b70236e66df6805c1da7c"
  },
  {
    "url": "assets/js/layout-NotFound.13ebae36.js",
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
    "revision": "08aac44bf56a921457c96874aab34bdb"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "21ae87a868c4a80b4aab28246f6da312"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "d56c8e0413d97e246e5160f07e19cf51"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "e06202be147981453ac91f003b17c6c9"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "0ee4e4db847d1b644909003824fe4ef5"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "d7fd9dafd0c6021f7dda542d7dbfa5d8"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "fdd637ed80805d3adae2abff898d987c"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "892d33b9e8e67615ff3b8117c2a0b675"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "a588dbfa9efd81b4ebb8c35477dae51d"
  },
  {
    "url": "en/test/index.html",
    "revision": "d48bd322b0ce76878b7e8103381b0a30"
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
    "revision": "00cde51109212de26a70b14651c8a1a4"
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
    "revision": "08da275009097a477ac5a7bd7dbb24bc"
  },
  {
    "url": "test/detail/page.html",
    "revision": "0ad520e5bf40fbdec3adfc0d6a4afb26"
  },
  {
    "url": "test/footer/default.html",
    "revision": "be854cf884ae4316fca611f366d06c50"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "d86b62fce79507122ac17446b7fa6248"
  },
  {
    "url": "test/footer/index.html",
    "revision": "a019857d37baac60a59ab2e58f724936"
  },
  {
    "url": "test/footer/link.html",
    "revision": "ce6d39f59377107f55c3344d41953e77"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "1e3d0b74819e284acc95b218fe5db1d1"
  },
  {
    "url": "test/footer/text.html",
    "revision": "55a02830bc4039d5544d955aff567db5"
  },
  {
    "url": "test/index.html",
    "revision": "0b560112d2acbe53c0832c20c85d1e7e"
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
