if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"f20fc88b06a01589db3f9348b8a07e43"},{url:"article/index.html",revision:"b8997c636d67cdab6a13afea280d665a"},{url:"assets/css/0.styles.36b6c012.css",revision:"50933dc2e855ea78188d8186a57369b3"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/26.dbe474c9.js",revision:"3e26f70163f0062968379e5fcf8d83c9"},{url:"assets/js/app.5f04a8fd.js",revision:"fdf333e1872cbd7740f448eac775bf4a"},{url:"assets/js/layout-BlogEntry.a1c86d11.js",revision:"25820af7e4c7b1d150e7d50b58aca774"},{url:"assets/js/layout-BlogEntry~layout-Common~layout-Layout~layout-Timeline.b46bfebb.js",revision:"3aea80f069c0ce7a3ad4d9e0d3be5bf2"},{url:"assets/js/layout-BlogEntry~layout-Layout.4a147db0.js",revision:"9b3cdd162fbeda9ec69811935d52dc98"},{url:"assets/js/layout-Common.ec0a6324.js",revision:"b7f33fa6843092de963bc82678af02f3"},{url:"assets/js/layout-Layout.cf2b0e95.js",revision:"59d067f8956c8179559228a2be69030b"},{url:"assets/js/layout-NotFound.6bbc0143.js",revision:"b5a8dab0e4c0d942c4a29d74d569dc00"},{url:"assets/js/layout-Timeline.8dc4ff80.js",revision:"b2c54b457628029d5e8cee20afb8ccc2"},{url:"assets/js/page-Home.d143c3b1.js",revision:"8a539870cca37daca567fab82211c0e1"},{url:"assets/js/page-Markdown 增强.3a71f159.js",revision:"2d0b980474105bf70b2690bee0286fba"},{url:"assets/js/page-个人介绍.bca68e2b.js",revision:"0c0c5d181afcf4a88cf85a2b5b6b300b"},{url:"assets/js/page-内部链接页脚.42cbb2f1.js",revision:"79c74fa3c2e8ac481cc7393bcc073ddc"},{url:"assets/js/page-外部链接页脚.62b9d581.js",revision:"573ad0d978fc0f358cd0821ed4d3195a"},{url:"assets/js/page-密码测试.cac20629.js",revision:"2a2dc08c366b4ce2dc94c2d57bc266cd"},{url:"assets/js/page-文字页脚.162d7052.js",revision:"51c4b705915d575e090fc4f0a8d4e6bf"},{url:"assets/js/page-无页脚.e284cb21.js",revision:"67cea99ae4ff1eceb99eb36f3602f4ad"},{url:"assets/js/page-组件测试.9a726ce4.js",revision:"2c4763d1d7ea96d83bb5a53333bd7579"},{url:"assets/js/page-组件禁用.d690cef9.js",revision:"4b71258d1a01267d4bfbae6433ac7cdc"},{url:"assets/js/page-置顶文章.cd1953b8.js",revision:"dcd372de19466b400d9aa02c961b03d0"},{url:"assets/js/page-自定义页脚.4c683e05.js",revision:"f15801aa99c18d3d81f88991a3d5d8f6"},{url:"assets/js/page-页面信息.cb1809ae.js",revision:"9034b5203f042dfb940308672388128c"},{url:"assets/js/page-页面布局.cf2fbc36.js",revision:"040872be30c087dc5dd59507a8962f57"},{url:"assets/js/page-页面配置.8ddd92bd.js",revision:"02b2a8af1cab10806608d7bf5eead4ce"},{url:"assets/js/page-默认页脚.726c067a.js",revision:"72c2e8334c9013d92cdca33c72b8fa40"},{url:"assets/js/vendors~layout-Layout.5f1a29ad.js",revision:"2d42b737c4dd2779f592668c54d959f8"},{url:"category/component/index.html",revision:"6340b7fc45be36bc851c4713c1f32a81"},{url:"category/index.html",revision:"6bdbd89c258d9ec4b84ea42101bf9014"},{url:"category/layout/index.html",revision:"8e1297ba35865ebb579de0b01fc39d40"},{url:"component/disable.html",revision:"4dc0432132546b183cbb5cd7169114ff"},{url:"component/footer/default.html",revision:"31ec55c973f11d7035ffcf88e3c66217"},{url:"component/footer/diy.html",revision:"b6a3879cd365d56da28ecd7ec8a159f1"},{url:"component/footer/index.html",revision:"bb49136f9d899ddaac1b9a8b5de5f26e"},{url:"component/footer/link.html",revision:"1c8a259e7a682dcdab70ae37918e18ea"},{url:"component/footer/outlink.html",revision:"375ad45aa5b79ad1861360c48cb84842"},{url:"component/footer/text.html",revision:"610866d52fd9d1377cd9d90f87598a01"},{url:"component/index.html",revision:"d4d6bb11b4c7251e244b191be7591192"},{url:"component/pageInfo.html",revision:"a2629498950f7d40c79af4b29e3c9104"},{url:"en/index.html",revision:"8b080024f772ed5856bfa0f60e4653bd"},{url:"en/test/detail/markdown.html",revision:"33e4ff8c9a7b4411ac041a1b115bac58"},{url:"en/test/detail/page.html",revision:"4f35c8c2a86676c4de234d9e5aaa740b"},{url:"en/test/footer/default.html",revision:"92658358ea3862c4f255f8cdc409d8ad"},{url:"en/test/footer/diy.html",revision:"b21073beeba0998609734b79546855d4"},{url:"en/test/footer/index.html",revision:"2a3d2e75648e44dad691b973274768e1"},{url:"en/test/footer/link.html",revision:"9e612b9d70eebaa9d6263bd676d6fd2d"},{url:"en/test/footer/outlink.html",revision:"b4edf46e1432f75703b05b115f03ad86"},{url:"en/test/footer/text.html",revision:"00faaeef929f46324712b1f1b703bfc0"},{url:"en/test/index.html",revision:"da114e268312e7ab3360e03297b60a32"},{url:"encrypt/index.html",revision:"b01139dc2babf49513c986f4a773b0e3"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"ef76500d36d777d2e8112da17f03f24c"},{url:"intro.html",revision:"2c082068f89325ae8d7918e8fcf8cffb"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"2c5107df1fe0cc6fdf2ea4255c454619"},{url:"sticky.html",revision:"e44e6c1281324246994692a38735e9ab"},{url:"tag/footer/index.html",revision:"7e237c0b08cc3290bc6797924b119942"},{url:"tag/index.html",revision:"f49d9e8d3ee41af4505200ba7af15ebb"},{url:"tag/layout/index.html",revision:"bd32a41eb19251e68d5fc5594f06c632"},{url:"tag/markdown/index.html",revision:"93778406c727e3bc1fde737d14302ef0"},{url:"test/index.html",revision:"13ef4f3b8aa88980cde2b1156dd4f61b"},{url:"timeline/index.html",revision:"838731023202a2c729ed1dc6de5d9254"}],{})}));
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
