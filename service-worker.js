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
    "revision": "ac76313aab78ee59603a3ded485045c8"
  },
  {
    "url": "assets/css/0.styles.1ea01ed5.css",
    "revision": "7c8d327838c07080aa27c39b0edd7628"
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
    "url": "assets/js/15.96123766.js",
    "revision": "787a38e9ecaaa4a34e516694d99f580f"
  },
  {
    "url": "assets/js/16.c0472250.js",
    "revision": "459369102676f8149fb0d5e17f3a161b"
  },
  {
    "url": "assets/js/app.e928e1b5.js",
    "revision": "7bd2911143d4c9b0fd3860c1b1bb295f"
  },
  {
    "url": "assets/js/layout-Layout.c3b4b40e.js",
    "revision": "43326a7a7a2039dc9bb57acaa12edc51"
  },
  {
    "url": "assets/js/layout-NotFound.ddeea063.js",
    "revision": "3c44dfa8133a18a55e698000a0c7b118"
  },
  {
    "url": "assets/js/page-Home.588e488c.js",
    "revision": "298cb280a5c63024ecacce1ea7879147"
  },
  {
    "url": "assets/js/page-Markdown 增强.6555a454.js",
    "revision": "c2ee8b6642c316ac4a3f581aeb6a950b"
  },
  {
    "url": "assets/js/page-内部链接页脚.a0859ea2.js",
    "revision": "3738653c68ce5547b3834e9043738f51"
  },
  {
    "url": "assets/js/page-外部链接页脚.2bbe754c.js",
    "revision": "8a240fca72947d799cbb0b071060e96a"
  },
  {
    "url": "assets/js/page-文字页脚.54dd8168.js",
    "revision": "789aef56c00514f149b64983bf6ae944"
  },
  {
    "url": "assets/js/page-无页脚.76e8492e.js",
    "revision": "8d4abb007c932fd2957ddc6592d994b3"
  },
  {
    "url": "assets/js/page-自定义页脚.766d27a3.js",
    "revision": "5c080e04a5fbdd3916f8e7c5231f24f2"
  },
  {
    "url": "assets/js/page-页面布局.567d59bd.js",
    "revision": "6e4ab88c7be68d32ed4c0891b2f0e7a4"
  },
  {
    "url": "assets/js/page-页面配置.63b7f32d.js",
    "revision": "7f8c2e3b750f6965314dd370c812f8ec"
  },
  {
    "url": "assets/js/page-默认页脚.36f1f6a0.js",
    "revision": "c50cf6b196be5883dc63e10f7f0dc1ed"
  },
  {
    "url": "assets/js/vendors~layout-Layout.1aab3af2.js",
    "revision": "60ba7dfa09c0c25f72c3d463afd1ad96"
  },
  {
    "url": "en/index.html",
    "revision": "2ee33c9ab75eabc31f63a06de6d5e3bd"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "f45360ff3cec3fbc1788619dca14e484"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "8c64dbfd0c57442c72af4fcc0acc1b26"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "9f9ad8ee656500b51639e4ad1cd058e4"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "fd3240e852becaa89a165e0bfc75e9fc"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "be30a7f94cea6c836dea129e5e94a97c"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "c59ec111db247ac85d41a398804cb702"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "d1d475dea8a6915d9180f767629375ca"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "ba3b3cba5abbaf1ae3e80c5097d172d7"
  },
  {
    "url": "en/test/index.html",
    "revision": "4c9a8b451d1670cfaa4af3652280afd2"
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
    "revision": "221436fd3a6d41777095df2fed494989"
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
    "revision": "91bcea845804f93b02bfadcbbaa4c7b7"
  },
  {
    "url": "test/detail/page.html",
    "revision": "3acbcf5ec4b63d24386d0b82dfd520e5"
  },
  {
    "url": "test/footer/default.html",
    "revision": "0895fb1b812a213186925d54fb2eceec"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "6f6e2a75bc085d003e78cb846ed12325"
  },
  {
    "url": "test/footer/index.html",
    "revision": "be657f235858e1f417b989b00cfea162"
  },
  {
    "url": "test/footer/link.html",
    "revision": "c050f212033c05fa160f676e98ccdbf2"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "6bb1325934c58ff372008343845f2cca"
  },
  {
    "url": "test/footer/text.html",
    "revision": "4c0b7d04ada7f76eacc38e74d0873e87"
  },
  {
    "url": "test/index.html",
    "revision": "c117cee90165325d7e5e69b8370fb05b"
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
