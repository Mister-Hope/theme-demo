if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"6a7177935f09f3f892d0e3867a912ebb"},{url:"article/index.html",revision:"d1b6b8f561a61167964443dc734e1803"},{url:"assets/css/0.styles.c9a05fea.css",revision:"8ff80a97283271c96ab2b4121975d210"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.1405f1ec.js",revision:"1ea1d559e91e30d4e30b1128c5d44c3d"},{url:"assets/js/layout-Blog.3733c318.js",revision:"7219b785757a1b876f03f4bda98914be"},{url:"assets/js/layout-Blog~layout-Layout.a4efd0aa.js",revision:"40f2054382e998a9d5a7c22134941d5a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8cdb49c2.js",revision:"f9e1168b99fda5f3fb42b071d1418491"},{url:"assets/js/layout-Layout.37ac784f.js",revision:"c6139714ab33633d47eb7f41eb13cba2"},{url:"assets/js/layout-NotFound.bc2fa254.js",revision:"825dd905ad3be7336d3c9c59e350adee"},{url:"assets/js/page-Home.90594504.js",revision:"b66c5e35f8902999cce074a5581aed2a"},{url:"assets/js/page-Markdown 增强.76f39bef.js",revision:"8d0f4bc0bb7a34fc6f67eb3d22d3ed8a"},{url:"assets/js/page-个人介绍.31c92645.js",revision:"e62bdfb6a0c54933995e9e781ffd1679"},{url:"assets/js/page-内部链接页脚.2bb9e8b0.js",revision:"779ce90e45105e0c2b17433f1ca9fc55"},{url:"assets/js/page-外部链接页脚.bced73c3.js",revision:"5738a87d3020b3e1fdfb13a0b4a0e641"},{url:"assets/js/page-密码测试.125dbf42.js",revision:"ac203f69a9bdee3f3e0a9f22082bcbd7"},{url:"assets/js/page-文字页脚.73380293.js",revision:"46013faf3fceaf5c9ffbf68e6c9e47bb"},{url:"assets/js/page-无页脚.0cd48aea.js",revision:"11e119546f920c29e233a60e512c94ee"},{url:"assets/js/page-笔记列表.6068f457.js",revision:"3323a0b1a5adc54221e87593f259eecd"},{url:"assets/js/page-组件测试.ebc7f4b0.js",revision:"460e7f01342fdb5646bf0b6eb6f83243"},{url:"assets/js/page-组件禁用.d02108a2.js",revision:"ba758fa80ebc1201a574c2c34842364e"},{url:"assets/js/page-置顶文章.e86b5da6.js",revision:"8c45a83bb6085572fa0c3207574a377e"},{url:"assets/js/page-自定义页脚.31280f97.js",revision:"dd46b1b97786dc4cdcec76517baf5f2c"},{url:"assets/js/page-页面信息.04a4b6df.js",revision:"40f4afdd454b8032ef82ac06dc64ef45"},{url:"assets/js/page-页面布局.6cb9328d.js",revision:"9f15bef7bb33aa2bc03807f5395ce583"},{url:"assets/js/page-页面配置.712a2781.js",revision:"0eab484e1f77b6fcf3f77082448848c4"},{url:"assets/js/page-默认页脚.f7363123.js",revision:"c330782e3f90392bbfcce31baf55d5ee"},{url:"assets/js/vendors~layout-Layout.0b90c0cb.js",revision:"92fc47321c37839518b5d535fc1b99ca"},{url:"category/component/index.html",revision:"d992e88ccee2eb0773d46aebcf0c7989"},{url:"category/index.html",revision:"480c39e05382edbf8cb28769ad434b01"},{url:"category/layout/index.html",revision:"1a1d3f704306e0dd61d1bb2e2ff26a9e"},{url:"category/note/index.html",revision:"5662d8f17ccf34b45661a9dea7557e38"},{url:"category/note/page/2/index.html",revision:"578084a4ddf749bf6cba41fd5dc7785f"},{url:"component/disable.html",revision:"0b0ab773d022e26bb9a9aaf0398a188f"},{url:"component/footer/default.html",revision:"5c8142035a7f5d569624aca77e2e2955"},{url:"component/footer/diy.html",revision:"d17fff0bb9c416440c0973ba7d7f8045"},{url:"component/footer/index.html",revision:"8509f04544f8bd7fb5859e8c6c4e8913"},{url:"component/footer/text.html",revision:"2521b97e7afea7f096970c77cd7f56f9"},{url:"component/index.html",revision:"3040de50427fe2b899cbcf25eccede20"},{url:"component/pageInfo.html",revision:"b6bcd1b228a8b89faf901b9b80c50377"},{url:"en/index.html",revision:"0a738e4f80943c0481ccc4ca55dacdf6"},{url:"en/test/detail/markdown.html",revision:"0799076b9e97464d4e32a8061010988b"},{url:"en/test/detail/page.html",revision:"a6d293603cd61315f22196a29c55f1d3"},{url:"en/test/footer/default.html",revision:"2573ea6e13952ee394ca4ce3828a3753"},{url:"en/test/footer/diy.html",revision:"3d68194bc9ecf9b24317cb0d7e819624"},{url:"en/test/footer/index.html",revision:"c367cc43f33cbe986aed0edca46cd716"},{url:"en/test/footer/link.html",revision:"a8c93fddc4dd0ffddfd02b3c114052bd"},{url:"en/test/footer/outlink.html",revision:"ee1f87c1cfe3aeebb1b19bbaf2eae316"},{url:"en/test/footer/text.html",revision:"0be74c082a6f4504fbd05dd694b567e8"},{url:"en/test/index.html",revision:"76d2cd91eeae9ab7f6838159959bb2b1"},{url:"encrypt/index.html",revision:"6b2d9658bdb583ce5c2d77ef028c8dc3"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"6c54de18b8fdee77e3ef6ff2e291548f"},{url:"intro.html",revision:"5a8437bfd7fa947a9f8c583373798874"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"2bd59087633f97fdc3366bbd143892af"},{url:"notes/1.html",revision:"922cb11071aacf523267895996a06bec"},{url:"notes/10.html",revision:"f8520e40eae60aa9e93efd16807bc50f"},{url:"notes/11.html",revision:"23efdb9f04fa386447ccaf32bd7cedfd"},{url:"notes/12.html",revision:"4ab34ccc529ab473a6e13e20a3f24409"},{url:"notes/2.html",revision:"97657a9d76159ea072cf2971a1f5436f"},{url:"notes/3.html",revision:"1ad0b6d64cc16d6bfbe4618891f364c0"},{url:"notes/4.html",revision:"6b44374083ddcf76830edd83d8a3140c"},{url:"notes/6.html",revision:"7f8a4ee1f99a22469ce2de68fde1a9ce"},{url:"notes/7.html",revision:"dde00131400d593b5de724b8f8070fff"},{url:"notes/8.html",revision:"cc4e34a3929592c7710877eed7157357"},{url:"notes/9.html",revision:"8cbd6f12475e61bac2ec4ef8fb7d84f1"},{url:"notes/index.html",revision:"5faf25033b1bcdbcec0ffa400a15da20"},{url:"sticky.html",revision:"b20dc43a944b25fc63249e01e4983677"},{url:"tag/footer/index.html",revision:"5f50a8f65864b82effcacbeccd9be56e"},{url:"tag/index.html",revision:"f5be8531c8c1c9cbf82ee1c3303af80c"},{url:"tag/layout/index.html",revision:"8d640047e3b1a12d9dfde7979399e1c5"},{url:"tag/markdown/index.html",revision:"d1b1bbce1d2ee6a84485fae0d6d3bb76"},{url:"tag/note/index.html",revision:"8279531cbe56c4aa69cf307294235ebf"},{url:"tag/note/page/2/index.html",revision:"4656e33f36aef79f5ccc234da2e65e2f"},{url:"test/index.html",revision:"ec241557621b2a537e7b7598fe7d4561"},{url:"timeline/index.html",revision:"514e29c4d61f5713fa3c9ccf091e1279"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
