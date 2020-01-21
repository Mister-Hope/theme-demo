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
    "revision": "6210b33544847934ed87c38459a506df"
  },
  {
    "url": "assets/css/0.styles.ca4d1fd2.css",
    "revision": "6ec7004b60433684e18e7bddd76e3353"
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
    "url": "assets/js/15.a7afab70.js",
    "revision": "71ed69ab2710889ebbb18fe03d4a6d80"
  },
  {
    "url": "assets/js/16.c0472250.js",
    "revision": "459369102676f8149fb0d5e17f3a161b"
  },
  {
    "url": "assets/js/app.ecfe65cf.js",
    "revision": "11a37d93ecbcb91e15039a8403adb410"
  },
  {
    "url": "assets/js/layout-Layout.91d4b1af.js",
    "revision": "1465b1122d63286c37f7fdaca571a629"
  },
  {
    "url": "assets/js/layout-NotFound.1cfeaa57.js",
    "revision": "baef031cb11d7aa3769688fedc2f7f11"
  },
  {
    "url": "assets/js/page-Home.4579b703.js",
    "revision": "e0ebe23e05e64b36f07c6cb3d6c3bc1b"
  },
  {
    "url": "assets/js/page-Markdown 增强.223edeab.js",
    "revision": "bf0cbeb5aa4a34cb215d4974a12f53c0"
  },
  {
    "url": "assets/js/page-内部链接页脚.caf3ef21.js",
    "revision": "919ffd409a467da4878d8a5033b42363"
  },
  {
    "url": "assets/js/page-外部链接页脚.e84ad6f4.js",
    "revision": "b9edc0b253633c912a0939c5898f8d86"
  },
  {
    "url": "assets/js/page-文字页脚.ffa5728d.js",
    "revision": "8142528de446e9708307c4521140fcac"
  },
  {
    "url": "assets/js/page-无页脚.63ce93e0.js",
    "revision": "9a3c5a9ef0d732c444adad795eb4acb7"
  },
  {
    "url": "assets/js/page-自定义页脚.6b22dfbf.js",
    "revision": "71107e83cc6e971810172ccffdb30240"
  },
  {
    "url": "assets/js/page-页面布局.2bbd1078.js",
    "revision": "d616908e78620361e8b8b8030634d6fb"
  },
  {
    "url": "assets/js/page-页面配置.45204ad2.js",
    "revision": "e26c7d2c5b4646bf0f76e6b83ad9f7cd"
  },
  {
    "url": "assets/js/page-默认页脚.2fffce0f.js",
    "revision": "ccc8ab0061a4c2112242598da7a0bc41"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9d121470.js",
    "revision": "1680ac0fac0ab25774aaa36d0bcd358e"
  },
  {
    "url": "en/index.html",
    "revision": "a74490a7711740ce43b8f3431bd12970"
  },
  {
    "url": "en/test/detail/markdown.html",
    "revision": "c90feab540df881bff0e1ab675595402"
  },
  {
    "url": "en/test/detail/page.html",
    "revision": "c0a56cab82d430499b2c03606a315a7b"
  },
  {
    "url": "en/test/footer/default.html",
    "revision": "b3cdf5ece0f5851c19f9cc0053877953"
  },
  {
    "url": "en/test/footer/diy.html",
    "revision": "a0b3f58e36d8fc688c7d113f4ad150c1"
  },
  {
    "url": "en/test/footer/index.html",
    "revision": "bfca56187a5856d3dbfcfa3f78f14a27"
  },
  {
    "url": "en/test/footer/link.html",
    "revision": "bfcce3d721e8197f0a1c1faa6cfef1c0"
  },
  {
    "url": "en/test/footer/outlink.html",
    "revision": "e66c6d0f71d93f0b8463cdd7e7e8ca28"
  },
  {
    "url": "en/test/footer/text.html",
    "revision": "837889dc78a74b6693e8e2009178475e"
  },
  {
    "url": "en/test/index.html",
    "revision": "f5731cf790c37ac9c183889a5b8399ca"
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
    "revision": "ba60eff651030148ded1e988b6518591"
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
    "revision": "9e06cb4600ffaf65c6a63de6d8e471b1"
  },
  {
    "url": "test/detail/page.html",
    "revision": "3a70e5d4a2b6e69c8d47f32084ec70f5"
  },
  {
    "url": "test/footer/default.html",
    "revision": "f8357c410764488adc8d7ba7bff7b821"
  },
  {
    "url": "test/footer/diy.html",
    "revision": "e78259412ccc96348a4e2d0e9a2dab95"
  },
  {
    "url": "test/footer/index.html",
    "revision": "1f5ec0699c0042e81cc53c80caaa89e3"
  },
  {
    "url": "test/footer/link.html",
    "revision": "9acd3f26046f419eccfd5e0d9fd83c3a"
  },
  {
    "url": "test/footer/outlink.html",
    "revision": "91f091a23c9db37bc4c0a163207e5166"
  },
  {
    "url": "test/footer/text.html",
    "revision": "653eeb89c37a2441172802850b5003ff"
  },
  {
    "url": "test/index.html",
    "revision": "f93a672a0cae1b6215fb2cb1f99f7baa"
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
