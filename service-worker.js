if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2ccb7b8d.css",revision:"3b3af98690e43d0d144fbd498c4297d4"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/32.76289c3e.js",revision:"6c365496d4580e6cced2f5baf26d9902"},{url:"assets/js/33.b78cf12b.js",revision:"89f048a17a991b74753292b97a470b8d"},{url:"assets/js/34.c09d7a0d.js",revision:"738c722a369f9ebce059bc6da8cbf812"},{url:"assets/js/35.9543e794.js",revision:"b7b4e0046568da8dc3d97d7b0a95171c"},{url:"assets/js/36.1cc22fe2.js",revision:"587261e80ad31c80b3e1c2127f2eb372"},{url:"assets/js/37.d8532859.js",revision:"f1d6ae37867a91d6e8a4ead81e4ac843"},{url:"assets/js/38.e507c447.js",revision:"40d64f4e2e17e9c6e7c3a3fd3f095d4e"},{url:"assets/js/app.e54889bf.js",revision:"494eabb83046d2ba576ed50e9e963c10"},{url:"assets/js/layout-Blog.c42a88ca.js",revision:"56d435bfa59f724018c530e16aa6396c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.87c86cd4.js",revision:"6b60bae21df994b22973663f84680ffe"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.429c3e2c.js",revision:"c96636e592dae33667a19235d1464260"},{url:"assets/js/layout-Layout.db166597.js",revision:"73ad0b94d940f27b0680e31819c624d8"},{url:"assets/js/layout-NotFound.4040b392.js",revision:"4941e20d7389af5dee0fb2df68bd7747"},{url:"assets/js/layout-Slide.8737dbc4.js",revision:"2b1c9712547d3b746f6ae084430b52e3"},{url:"assets/js/mermaid.56d05c9d.js",revision:"b03e74f43d51f8ca71bc0f67fc7087eb"},{url:"assets/js/page-BlogHome.b128455f.js",revision:"73a0abed4cfffa78f343ea2a56cb8e71"},{url:"assets/js/page-Componentdisabled.44a66041.js",revision:"6d9edd5c126ee5956b4e8dca1198376e"},{url:"assets/js/page-Encryptionarticle.8c3b7af2.js",revision:"50215ea50ca65cebb174423a17afc244"},{url:"assets/js/page-Guides.51c642a9.js",revision:"bef62d6a4e0ea4d01fbfe07b7f7f3085"},{url:"assets/js/page-IntroPage.43ea9491.js",revision:"002dbb9c65571cfe3e4e71fe495070f0"},{url:"assets/js/page-MarkdownEnhance.c830b8f4.js",revision:"25caeb398c7c12fc32e082d5f6d24077"},{url:"assets/js/page-Markdown增强.4eededfb.js",revision:"c6c1567d3dc0effaf22650f45da7839b"},{url:"assets/js/page-pageconfig.661cd780.js",revision:"08cb42f97bef20effb32dde00df09c88"},{url:"assets/js/page-Projecthome.8df37b60.js",revision:"f33096f755943cd6b0c2966326d3b80f"},{url:"assets/js/page-Slidepage.c1f69803.js",revision:"b82a56981bcc5ae53bdb544bf6567503"},{url:"assets/js/page-主要功能与配置演示.6a18317f.js",revision:"83b2400374fd8f772c2bcc4ff1764c2e"},{url:"assets/js/page-博客主页.5c8ff5a8.js",revision:"165f91d0640d01619df2a68e2aeacc0e"},{url:"assets/js/page-密码加密的文章.6843ed6a.js",revision:"0056e75f5834245e707bd33038ca461a"},{url:"assets/js/page-幻灯片页.95a6d35b.js",revision:"d6b3ed88716bab2a0f3b887f8629c755"},{url:"assets/js/page-组件禁用.74c1b1e9.js",revision:"70cf40380a63dae415f6b2c60d12d95d"},{url:"assets/js/page-页面配置.3c484a65.js",revision:"9994d31138e1376d33262fa25ab8b686"},{url:"assets/js/page-项目主页.fa954ebf.js",revision:"9b0c60c22c62208bfc1331e67a1b70dd"},{url:"assets/js/vendors~flowchart.f5b54dbd.js",revision:"89b965687c7b69d3617eee0205b54ef4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.66a1f2dc.js",revision:"774fa8b3acd4e314ab39e19204e5b9d5"},{url:"assets/js/vendors~mermaid.6885363e.js",revision:"b3809ff14ef965f8c5220a90c73f8552"},{url:"assets/js/vendors~photo-swipe.5a0ca44c.js",revision:"adeea2313833bc0334b56f8c3f29b063"},{url:"assets/js/vendors~reveal.0de11c22.js",revision:"a1f3161c132ddc8b3a463fdf214e1598"},{url:"assets/js/vendors~valine.57e5ca0d.js",revision:"86dd925af1a6b4ab3dcf8c4a915f9b3a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"92be2445b9e91527edee20549fed8af6"},{url:"article/index.html",revision:"3923df6cbe785e1aff7e9b6a273b083a"},{url:"category/Guide/index.html",revision:"e4aca121bbd2e8bb8f76705875466241"},{url:"category/index.html",revision:"70109c475a731b4b9db5ac17a5da192e"},{url:"category/使用指南/index.html",revision:"6a03096a6bb586d102aa191f51ddf261"},{url:"encrypt/index.html",revision:"04c73cd680594630189f916cbc42502e"},{url:"guide/disable/index.html",revision:"01272864652462e926258e2cc24e2b32"},{url:"guide/encrypt/index.html",revision:"6e1ca69920c0421e68b46089f8aea8b6"},{url:"guide/index.html",revision:"a3439db8ffb8978a6fd7962ed2ebe5ec"},{url:"guide/markdown/index.html",revision:"6639695d5f8dd2e27ecd295d20a3445f"},{url:"guide/page/index.html",revision:"63c6a0a2bed5dba0429bc10e5ff2696b"},{url:"home/index.html",revision:"602358f44f2c8561a45d8723a4197c30"},{url:"index.html",revision:"28bcdfd728fd57f03cf63b79d2fcc073"},{url:"intro/index.html",revision:"e71ab35c777adc7a80ae0938b6c666a1"},{url:"slide/index.html",revision:"7cd9af146209989dd5a88401a372b102"},{url:"slides/index.html",revision:"f2e3d53846f2c0ebb0875988da327695"},{url:"star/index.html",revision:"8651fe522155f36b1dd94e5f233a9bac"},{url:"tag/encryption/index.html",revision:"33bfd069e3a946a05982804ff30eb8d6"},{url:"tag/Guide/index.html",revision:"44356a20a90b66084530bb18d5b2a5a9"},{url:"tag/index.html",revision:"e1e9b3900f9c9fc018360c2695ac367f"},{url:"tag/markdown/index.html",revision:"2aa6a310efd22a71e87b2ff0a5a291e1"},{url:"tag/Page config/index.html",revision:"1db28503466a05d7cd516ac81e51dc61"},{url:"tag/使用指南/index.html",revision:"ae96d8a3dbc7878de74fe81dbde839c9"},{url:"tag/文章加密/index.html",revision:"cd8b9796c9813924b3b940e8e621803e"},{url:"tag/页面配置/index.html",revision:"a56e37080305c8641a1854e9184953f7"},{url:"timeline/index.html",revision:"65861ac7a15d625acebe1a96ebdc36a9"},{url:"zh/guide/disable/index.html",revision:"b4440ab0ed3798e89c3519f45eaf3428"},{url:"zh/guide/encrypt/index.html",revision:"e342ada68e93351b54a4bc3b4339cd7f"},{url:"zh/guide/index.html",revision:"36935dcac30a832f237177649c12a772"},{url:"zh/guide/markdown/index.html",revision:"390c66b979da9915398afc51d6413927"},{url:"zh/guide/page/index.html",revision:"5e1aa0041a943759e57ad5a52fcf721a"},{url:"zh/home/index.html",revision:"7b1a7c4a74bf421b40a3ce85263979b8"},{url:"zh/index.html",revision:"7229e09c06d5ded77412d1d75bbedbbf"},{url:"zh/slides/index.html",revision:"f2570e11b1beca8176d14378d950ac29"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
