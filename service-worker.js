if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a381791e.css",revision:"ed4972906c8e86ab21162dca16f4004d"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.c34f17f5.js",revision:"4cac492ba281c4d42a951bbb82f9f77c"},{url:"assets/js/31.ce93b67a.js",revision:"dfc8a40e8a516f6e4118ad26c21f0f72"},{url:"assets/js/32.099f0bc4.js",revision:"7a1abe3f176557f67269a5b51a963245"},{url:"assets/js/33.e8dab78d.js",revision:"229e3ca822de2a0d794900569a6ec2b3"},{url:"assets/js/34.b0eff179.js",revision:"047032adaa69df945536aadb7ad46e68"},{url:"assets/js/app.ba727dd2.js",revision:"e83cc84f7d701d23df304cc141eeb921"},{url:"assets/js/layout-Blog.69011d41.js",revision:"f150cf16563d97d0c80b628ae856a410"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bc67f84f.js",revision:"11e2804df04f5d13f912a187da63f261"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.6636afcd.js",revision:"ff1e8cde30a0b13b87cf6c70bf61a70e"},{url:"assets/js/layout-Layout.40945c11.js",revision:"e051f5301368af0099bdba1c1127bf14"},{url:"assets/js/layout-NotFound.f20be848.js",revision:"81167967ef96870570b3eafc8b74c60d"},{url:"assets/js/layout-Slide.2bca0022.js",revision:"c29bcbaa9828330941b5366dba558193"},{url:"assets/js/page-BlogHome.652d1d9d.js",revision:"4afd745b8804aaa876ef5b3cbd77034a"},{url:"assets/js/page-Componentdisabled.e3376a07.js",revision:"6799a4b6ead93810032e1057f6e3036d"},{url:"assets/js/page-Encryptionarticle.56ca01af.js",revision:"f6b39c54eaf209d2d5c36b1f6b68fc9b"},{url:"assets/js/page-Guides.b3d6be19.js",revision:"9875d8c045f32144270ea02c1d4e7ed6"},{url:"assets/js/page-IntroPage.55ebf1bf.js",revision:"bda3a536fdebf04df6ad3f26a190dc01"},{url:"assets/js/page-MarkdownEnhance.60ddb8b3.js",revision:"6c927ef96b2916ca1242fa1bcf6e5992"},{url:"assets/js/page-Markdown增强.902963ea.js",revision:"a6a23d5f07b96459509b3c8a81c4475e"},{url:"assets/js/page-pageconfig.5c71e92c.js",revision:"001c7dc8f8f3ad8a76532f12be974a89"},{url:"assets/js/page-Projecthome.4959eaba.js",revision:"f5185b9ae908714dc0fda115f36b3157"},{url:"assets/js/page-Slidepage.361b2634.js",revision:"7fa1fb870a0935996e574344eb8698fa"},{url:"assets/js/page-主要功能与配置演示.f1adecbd.js",revision:"ae0ded73c41d3398c923abfd91dff868"},{url:"assets/js/page-博客主页.2fe5e2bf.js",revision:"00a23e08e4a0463c83b8a1413e1df733"},{url:"assets/js/page-密码加密的文章.50808f0d.js",revision:"2f951a7c039e71fd126a7e13ccee30d0"},{url:"assets/js/page-幻灯片页.a6430e03.js",revision:"b906c07316523744aae730305b05f119"},{url:"assets/js/page-组件禁用.dbf471d2.js",revision:"855077ccf242c233695658427ceee966"},{url:"assets/js/page-页面配置.6d9d818d.js",revision:"0ffb3acae4be21b43855ba42eaa7700a"},{url:"assets/js/page-项目主页.19494332.js",revision:"160e03a92e42a064854fa035753b8bd0"},{url:"assets/js/vendors~flowchart.ca41b43d.js",revision:"94ce9c9cc95d1766311c92b151fe2263"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.bbb36c38.js",revision:"89484670dcb1124150c658f9b56809a9"},{url:"assets/js/vendors~photo-swipe.cd654892.js",revision:"09ff864c712a58f1e8f00d2d7d01c670"},{url:"assets/js/vendors~reveal.4913f373.js",revision:"b7993ed7b005a686909d7b629115e5de"},{url:"assets/js/vendors~valine.5e8071b0.js",revision:"de48b70448d838165c21fcaae42d07f7"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"5756079f10454f3bbda5ca9ade6339a3"},{url:"article/index.html",revision:"3f5af6bbfd7eb99130347579fadb8fdd"},{url:"category/Guide/index.html",revision:"d2359cd1efa511ee3f904ae2df4a17d6"},{url:"category/index.html",revision:"a47218b74157d084b12fa56b3b1e4154"},{url:"category/使用指南/index.html",revision:"b4ac55d49c550ae8ed427d3f8124afba"},{url:"encrypt/index.html",revision:"87c9766f205835199ed46583257871e6"},{url:"guide/disable/index.html",revision:"1d146850bb537db1feb1721d19d880ba"},{url:"guide/encrypt/index.html",revision:"84bc5c27127f4a22e656be359d85755c"},{url:"guide/index.html",revision:"b98ffebcfcc89549227ab40873ddd1f9"},{url:"guide/markdown/index.html",revision:"263a3335c41d407d34891d3c0ee942e5"},{url:"guide/page/index.html",revision:"b8c52fa5a22d59c769b5040fd20e2e63"},{url:"home/index.html",revision:"56e57b421eb110e1009aa0a7af89a617"},{url:"index.html",revision:"df41d36c325b1fe9914b1d405739a8d8"},{url:"intro/index.html",revision:"55a7b60cb5df28f38061d96ff29a0dad"},{url:"slide/index.html",revision:"272359f8d4c52d8d56b7bbf656ecfc16"},{url:"slides/index.html",revision:"b33259384d970c5c04ffab91787a1276"},{url:"star/index.html",revision:"e6d669c04f1dd623395d1854aa0b15cb"},{url:"tag/encryption/index.html",revision:"d0cfb2abb63d4b1997f6c3d87413feb1"},{url:"tag/Guide/index.html",revision:"3a32464904cb362eb675f2b60d5110f5"},{url:"tag/index.html",revision:"fbf50c21826f80c425affee13400e466"},{url:"tag/markdown/index.html",revision:"6c3cb49588eaf65668cb728b980f0a87"},{url:"tag/Page config/index.html",revision:"5f947e97af0c8e2ee525448e37da3b09"},{url:"tag/使用指南/index.html",revision:"f2f960d7b28d35180bb7be1eb21c76fb"},{url:"tag/文章加密/index.html",revision:"b318c380d92f28d064e588d365d489a5"},{url:"tag/页面配置/index.html",revision:"6162d4b5b1dc29956cf48848e594f3e1"},{url:"timeline/index.html",revision:"0437a7999ed21e6d496c76795a650527"},{url:"zh/guide/disable/index.html",revision:"82d87387a1b0341e79b81774707d6e69"},{url:"zh/guide/encrypt/index.html",revision:"4cb76e4fcc66cc737fbcc93430a857c7"},{url:"zh/guide/index.html",revision:"890be4399fc856fc421fd98940394fd9"},{url:"zh/guide/markdown/index.html",revision:"a41e4e8a8973be1403eee3a20487828f"},{url:"zh/guide/page/index.html",revision:"47083a335d0229a9506c484da154ea0f"},{url:"zh/home/index.html",revision:"513a5ca4931df557ba531cfa784e2329"},{url:"zh/index.html",revision:"4d49a6b5c153f510b6b92b0dfb8e1f3e"},{url:"zh/slides/index.html",revision:"6f4a513f32f06b7cd27c845ee21a3dac"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
