if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.049bc96b.css",revision:"3277ff58e015fa7fa6b6987230d5b7b2"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/32.d613a09c.js",revision:"3458317dfff1081278557f1928ba7ba1"},{url:"assets/js/33.81e2adf1.js",revision:"cf3fa66af8e5e3720f0ab84bc3684402"},{url:"assets/js/34.4b59de3b.js",revision:"8983cfd7b08361ea14f7a58c21a03fc0"},{url:"assets/js/35.58904da4.js",revision:"3a10cdc7276b4ae3c54785dec620084c"},{url:"assets/js/36.825912ba.js",revision:"4bbc06fbb0b8d60355a86ea35164aaa7"},{url:"assets/js/37.028a10f0.js",revision:"5856eb8d38dbf48e04a020ba2c68ee77"},{url:"assets/js/38.85f38c16.js",revision:"bbeeaabaaa6606a04d1076c0ef8d85b2"},{url:"assets/js/app.46494086.js",revision:"b6bd89be2e7ca1536911b65d31d48793"},{url:"assets/js/layout-Blog.542e3f87.js",revision:"480fbe6deb37d541818a852efdc6da00"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.9bd0dfb6.js",revision:"a2e74d1ef9512b11ee133c40d2f92dc4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.8fb3c9d6.js",revision:"743f953f42e2826fc9e2c5a575eb4cb0"},{url:"assets/js/layout-Layout.48ecc247.js",revision:"92f8099a4159c1d52606927a6a8f5514"},{url:"assets/js/layout-NotFound.be5206ac.js",revision:"101715da8ddbd0aca0ede02da4c6208c"},{url:"assets/js/layout-Slide.5a8d5813.js",revision:"99d28c2622be6a0a0523f7827d296e9c"},{url:"assets/js/mermaid.5c644e7b.js",revision:"7faded9b1c6813203bfc4f167302426a"},{url:"assets/js/page-BlogHome.9121997f.js",revision:"16e93ef767d8b2e2ec1e13af5e94dc27"},{url:"assets/js/page-Componentdisabled.958a177b.js",revision:"f86cc66e5143e4cbb225e6e6fceef146"},{url:"assets/js/page-Encryptionarticle.55e477f2.js",revision:"f803da62a09dbf4db83e8bb878111abf"},{url:"assets/js/page-Guides.5b87be40.js",revision:"b80f24997047f39f4e787db47f21eccb"},{url:"assets/js/page-IntroPage.aa9715c3.js",revision:"c8a00bc7967e973dea593c6acd32cf59"},{url:"assets/js/page-MarkdownEnhance.86d0e3f9.js",revision:"9cc6bcb388f375ae9bf71e4509edd1b0"},{url:"assets/js/page-Markdown增强.b9927cc2.js",revision:"4c6238719d0c47b0067745298ac24956"},{url:"assets/js/page-pageconfig.e92a1466.js",revision:"8ffbe2e7e4c482220e298b8cb7325988"},{url:"assets/js/page-Projecthome.48994ed0.js",revision:"15b251585bf8a32451b9d676c42f4948"},{url:"assets/js/page-Slidepage.ab86fca7.js",revision:"84d1e4ddff917a5aab842b7b0c499fe9"},{url:"assets/js/page-主要功能与配置演示.6a18317f.js",revision:"83b2400374fd8f772c2bcc4ff1764c2e"},{url:"assets/js/page-博客主页.5c8ff5a8.js",revision:"165f91d0640d01619df2a68e2aeacc0e"},{url:"assets/js/page-密码加密的文章.e13d88a1.js",revision:"22c7b406a7f7bb608e2ef85f9e3b06d6"},{url:"assets/js/page-幻灯片页.9320151e.js",revision:"30dcfeb3900bc52dbfe213a7874d52b7"},{url:"assets/js/page-组件禁用.99eb6be1.js",revision:"1efa45cccef76e276367c602097812aa"},{url:"assets/js/page-页面配置.3c484a65.js",revision:"9994d31138e1376d33262fa25ab8b686"},{url:"assets/js/page-项目主页.fa954ebf.js",revision:"9b0c60c22c62208bfc1331e67a1b70dd"},{url:"assets/js/vendors~flowchart.bc195e74.js",revision:"d4d6d626992f542852e79c3dc652091e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.0f9968f2.js",revision:"31c980ba5e63a09486ab04187b6d1bbb"},{url:"assets/js/vendors~mermaid.93a6255f.js",revision:"85a75c9a17d01314243be12d62415aa8"},{url:"assets/js/vendors~photo-swipe.73ba703d.js",revision:"9447e2e40e6f3cc566cc247474e21837"},{url:"assets/js/vendors~reveal.97370471.js",revision:"7c55805caf4fda766cae722de18fa472"},{url:"assets/js/vendors~valine.7a5bb645.js",revision:"ca99965fe6f139def9ed7474f8b7a619"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"19f0c3838e315ec301244bb19a708ed3"},{url:"article/index.html",revision:"ea3f4c96f33ab987cc80a10d630a64e1"},{url:"category/Guide/index.html",revision:"9b4d4f97eb7ecad873b10e35f120ac30"},{url:"category/index.html",revision:"cfa95b1cc9afcabba0a30d1a2b810ada"},{url:"category/使用指南/index.html",revision:"4b2233f8aa03c80d86d0bdb9541e5bc0"},{url:"encrypt/index.html",revision:"16ad4489f41d73ff302d7a5bf65745e2"},{url:"guide/disable/index.html",revision:"34270ede0607a20ff80face692b9ec8d"},{url:"guide/encrypt/index.html",revision:"5e4661482a8e704eccde69a9603b92f2"},{url:"guide/index.html",revision:"ecf368b7148a0997775691ea326c737d"},{url:"guide/markdown/index.html",revision:"ba5bac0c1898cd3ca9d697fd2af07cc0"},{url:"guide/page/index.html",revision:"d629e60dd76c592ac2718c33255c36b5"},{url:"home/index.html",revision:"443f3644c2e286e87a4103f33116d529"},{url:"index.html",revision:"ab5da7708d4e711f38f8ec75d3081202"},{url:"intro/index.html",revision:"18986fa714157819dcdc61ea275481d6"},{url:"slide/index.html",revision:"4008d8b069bb6fc5d0cee31ef5955657"},{url:"slides/index.html",revision:"94ff72ea0aa6a2731c70c9df631b62aa"},{url:"star/index.html",revision:"a63661c118baf4f1212589111b6168cb"},{url:"tag/encryption/index.html",revision:"6bbab761b29e48ce1f314baafbe82295"},{url:"tag/Guide/index.html",revision:"003f1609d13c516029938c216ab8b8cb"},{url:"tag/index.html",revision:"f2afb92178053ded64f1918719b13abe"},{url:"tag/markdown/index.html",revision:"d2db1a34f29ae1d1a99420ce4b48fce6"},{url:"tag/Page config/index.html",revision:"2c157774092d1d08f9e3f9fed22d12ee"},{url:"tag/使用指南/index.html",revision:"c54f647417cf4e3bf7e00606552eae0a"},{url:"tag/文章加密/index.html",revision:"19cb8648954773e205f27117ecb792d9"},{url:"tag/页面配置/index.html",revision:"34996a4923d3774d89efab306b2103c9"},{url:"timeline/index.html",revision:"a79a24fb07980ff788173c9c66372cb7"},{url:"zh/guide/disable/index.html",revision:"9ca17511c0339982b0a3eb9ad9722441"},{url:"zh/guide/encrypt/index.html",revision:"dc33cacfab66f984435ecd936f7fd865"},{url:"zh/guide/index.html",revision:"adc255875ae683c19492077a1095789d"},{url:"zh/guide/markdown/index.html",revision:"97862f65cb850f3e718862094a08d918"},{url:"zh/guide/page/index.html",revision:"f4e40b8487ccee41d8a32699fadc6fb5"},{url:"zh/home/index.html",revision:"7f84e6b7689b3c47d7c4c39e24ceda91"},{url:"zh/index.html",revision:"073b6ec40c6db536c3a5258e6c3aaf66"},{url:"zh/slides/index.html",revision:"ae9c2166edcb4cf6b69bc6557edd76bb"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
