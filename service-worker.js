if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-5dd93298"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b9b7bc93.css",revision:"78cd2239fc0bd78eeadda70fc2381768"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.15528197.js",revision:"f4f54ead3a1bd02abd7bc86530c2079a"},{url:"assets/js/35.2ac6b2be.js",revision:"f7ab8e1e4c79fd1fe04c6b73bf9f3232"},{url:"assets/js/36.4dee3f1e.js",revision:"b26e449308b7b67d7c441bad0a079492"},{url:"assets/js/37.e70173a9.js",revision:"08fbb928f969c1b11325c5a6fd716b5f"},{url:"assets/js/38.87d1166d.js",revision:"c2f07a93e0806eddec0bc8e1771aadbe"},{url:"assets/js/39.0114df62.js",revision:"be9394d470a343bea6bb6b2b9230186d"},{url:"assets/js/app.d7fc1f2c.js",revision:"64a011b8023f062092b114ad136a46c2"},{url:"assets/js/layout-Blog.10256aef.js",revision:"8b3a94d8b837b15aa0be5ca2e219c394"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.0c04cefe.js",revision:"da9aa721611a7f279316643f5badf825"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.7d14d2b7.js",revision:"9bb81b19411d54ba66fa26eb53fd7ff2"},{url:"assets/js/layout-Layout.5334c6d8.js",revision:"f22cfcfd50185f5817ce1492271f03ce"},{url:"assets/js/layout-NotFound.de056738.js",revision:"b176fcbe64f00d4029db3864168471ba"},{url:"assets/js/layout-Slide.a8abc1c1.js",revision:"e9b835f39d5f95a3c50784f364260c4b"},{url:"assets/js/mermaid.954119e0.js",revision:"ad08d138506ca739a4c919bb01bca2ca"},{url:"assets/js/page-BlogHome.a70d9246.js",revision:"2a2bf26efe1ed63fe11ee09390d725d5"},{url:"assets/js/page-Componentdisabled.e9aefacc.js",revision:"91814740a1b0d1dca48aabe6ae3fad71"},{url:"assets/js/page-CustomLayout.41364d20.js",revision:"d6485c5e953858f7049faa2e15d59eaa"},{url:"assets/js/page-Encryptionarticle.3f19a122.js",revision:"6c01385e2fdfa5e96805377c619153bb"},{url:"assets/js/page-Guides.f5384e22.js",revision:"5fdb28eb94a0dd174a7a433d0e5c368e"},{url:"assets/js/page-IntroPage.01c84525.js",revision:"b10b03a18c92de675922719bda7d20c2"},{url:"assets/js/page-MarkdownEnhance.33c0439a.js",revision:"883da757b771d82af643816834d63217"},{url:"assets/js/page-Markdown增强.165f4a8b.js",revision:"bc55804a82637ed670722ee7851f7aa6"},{url:"assets/js/page-pageconfig.d0ca8eb5.js",revision:"6e3c33ec192801b8f042ec24c70b2409"},{url:"assets/js/page-Projecthome.1d4144c2.js",revision:"b456ce9576ce838c30689f1864c8102b"},{url:"assets/js/page-Slidepage.826626bb.js",revision:"72180da447cfa9486734c3b277e4abcd"},{url:"assets/js/page-主要功能与配置演示.ed4a0f24.js",revision:"48cc35d70572c47efc62f9ec19756b99"},{url:"assets/js/page-博客主页.c07ad3da.js",revision:"3155cae29bc8bad23d2a9fc3c3932783"},{url:"assets/js/page-密码加密的文章.a3f1aa6b.js",revision:"4fdd91fb3c3125f3f875999ba9ed1d67"},{url:"assets/js/page-幻灯片页.6f543aaa.js",revision:"fc2099d9e129239948d7f9a60e3fb250"},{url:"assets/js/page-组件禁用.a64996b6.js",revision:"b643c8687f5fb11bd4d8cb30c1bca3c5"},{url:"assets/js/page-自定义布局.a083cde4.js",revision:"c1583c8018afa67e3094a1aae0ae978d"},{url:"assets/js/page-页面配置.a587775b.js",revision:"eb07033c57c1746216a83f3691267c4f"},{url:"assets/js/page-项目主页.a6887b28.js",revision:"80a7c33edd3cddd355f36d889d6bc8c9"},{url:"assets/js/vendors~flowchart.e378c2be.js",revision:"d86ec86ca693415ff5f4afb80ea48b12"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ca01ecfe.js",revision:"db6d14625d3e6665c27d69ad903ab00c"},{url:"assets/js/vendors~mermaid.773d157a.js",revision:"449f4a4084a257ecd5e34bfb7bed0535"},{url:"assets/js/vendors~photo-swipe.31d02ae1.js",revision:"adec830a313a1d279a345304551e75a2"},{url:"assets/js/vendors~reveal.0c5e29b6.js",revision:"bb11d20867cf563a7f833695a15a6138"},{url:"assets/js/vendors~waline.ffe5ba70.js",revision:"6aa41b7556e094acd3a6f3c90916779f"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"7a0a0acd05fabdac6ecf7803b5f2b1e1"},{url:"article/index.html",revision:"22e3fbf905399926fe1f516766a9b014"},{url:"category/Guide/index.html",revision:"be579df30c0ae0497d0be84868574aad"},{url:"category/index.html",revision:"13c1ee0bac739957a0b04dbc4ce6ccf4"},{url:"category/使用指南/index.html",revision:"67702f41ee99b4c95f16d47f95195d06"},{url:"encrypt/index.html",revision:"20a18c4fc43ca7d1441d7b011c84616b"},{url:"guide/disable/index.html",revision:"007902264dbb3c704475ec37e78ca291"},{url:"guide/encrypt/index.html",revision:"9b893ffccaa1d418b6992e39a9213ba2"},{url:"guide/index.html",revision:"1309db82d921af9ed93602b37cd01ff5"},{url:"guide/markdown/index.html",revision:"648040880b480ec7bad66e2e0c310c34"},{url:"guide/page/index.html",revision:"d358b40ba3ba1cc16ff3c59d9cc062d1"},{url:"home/index.html",revision:"93fd1ad5a342ff8d8d813137f427d924"},{url:"index.html",revision:"eea7aaab2509b14955c45a9389325aee"},{url:"intro/index.html",revision:"e46a1b659c03f22aa21f216376be9230"},{url:"layout/index.html",revision:"29499b1cdcb6f7b01c6f2c551f9052af"},{url:"slide/index.html",revision:"e131b1dbbf7ce1b93e6e5cc5e0e11920"},{url:"slides/index.html",revision:"8872c179ef109df857ba84b17d8a4f7e"},{url:"star/index.html",revision:"202b26492a30e250092b6f593b4f80a5"},{url:"tag/encryption/index.html",revision:"1bdb8934a448c8147c0c43f97b280b28"},{url:"tag/Guide/index.html",revision:"ed9e1cd868339ab4b4ce5295e908ad6c"},{url:"tag/index.html",revision:"a23c36ba1efe6d01e2438787bcc42129"},{url:"tag/markdown/index.html",revision:"080521254f973e45fb471c2877e064f7"},{url:"tag/Page config/index.html",revision:"10bbe57cca227625729ca3401e4e4bc2"},{url:"tag/使用指南/index.html",revision:"a3e5d90f234b0ad7c811224d0528848c"},{url:"tag/文章加密/index.html",revision:"72423ecadfbd816965eecc5f99129b6d"},{url:"tag/页面配置/index.html",revision:"b0aedb75f07e8693f36cee81b9961900"},{url:"timeline/index.html",revision:"6de8d93c7b1f5c513d36a744be31930e"},{url:"zh/guide/disable/index.html",revision:"c5e608cd307b86ed35ad581f809ec9c8"},{url:"zh/guide/encrypt/index.html",revision:"9916ca0b7e7b67ac9e5dae4a63046e1e"},{url:"zh/guide/index.html",revision:"7a7a5e6311346db3c06b6d3e29dbf102"},{url:"zh/guide/markdown/index.html",revision:"50e241acb5c710cd979f68d052e3a455"},{url:"zh/guide/page/index.html",revision:"0bbe512fbc5e87a720e0d007571083c5"},{url:"zh/home/index.html",revision:"94f239c8a8ef3a7bbf91f7bb5b4d9e44"},{url:"zh/index.html",revision:"4ea039a7fab7365afd645d9e5fa1edb9"},{url:"zh/layout/index.html",revision:"5b1639090d1684c25f23bebf0987bbe3"},{url:"zh/slides/index.html",revision:"96de9396fe9e11d4d8095e999fecfe01"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
