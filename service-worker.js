if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-3ee14cc8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"e9dff5569d898123736bb7659b4b3652"},{url:"article/index.html",revision:"1bbfae5d0810b9d5c90f458e8cd66fa0"},{url:"assets/css/0.styles.3484c548.css",revision:"163436adbb9542ca6bc04fc20e774e98"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.d30f8a5d.js",revision:"d4039827f1e8c4c533c750bb7701053f"},{url:"assets/js/app.1a97906e.js",revision:"ab14ac4e5f28c6d8551ed5b9573e0105"},{url:"assets/js/layout-Blog.bb0f7e9a.js",revision:"29e8945058daf64fbde1d5ab1751880a"},{url:"assets/js/layout-Blog~layout-Layout.bdd8fea8.js",revision:"ce604759db60dfc345cb84010eb2907a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.7190e61e.js",revision:"549562ee7b1441a7e53f57f3bc717914"},{url:"assets/js/layout-Layout.aac47958.js",revision:"803a514115465330734235a3807d667f"},{url:"assets/js/layout-NotFound.e9a29920.js",revision:"2993b64e6bd303fadc6ace800a889003"},{url:"assets/js/page-Home.eb24a45a.js",revision:"c1c5a18c82d4551434ca2fdbb6d88f6f"},{url:"assets/js/page-Markdown 增强.f19c774f.js",revision:"551aa381d9c77a0bbc96d44c4759ddec"},{url:"assets/js/page-个人介绍.2e341e51.js",revision:"393f56b9458b0bd08ee1ef0be32ea75d"},{url:"assets/js/page-内部链接页脚.d1b286a0.js",revision:"a5028b77cf925bf61c7aaa08fa379bee"},{url:"assets/js/page-外部链接页脚.6972d265.js",revision:"338c7aac1ab7223aa55a54c3e0a80ce7"},{url:"assets/js/page-密码测试.4fe24a9c.js",revision:"7e868cdc4c0a01cb54f792217e30a1c1"},{url:"assets/js/page-文字页脚.4adb3b95.js",revision:"7024172ca4c076e2d0d940772635ce16"},{url:"assets/js/page-无页脚.471bdcb2.js",revision:"b4ddb081baea4d645f053beae5e523e5"},{url:"assets/js/page-笔记列表.315f28ca.js",revision:"9ecc1b41c4f482bcd855f9bfce5a4919"},{url:"assets/js/page-组件测试.8f0b9a1a.js",revision:"85fd3c7bcb1c81f5a7e6b3df6d888abf"},{url:"assets/js/page-组件禁用.793618e9.js",revision:"b692f2c211f8ce81cb585e2d0327dccf"},{url:"assets/js/page-置顶文章.f1556341.js",revision:"bd93c41a1c6a7715faf7527e1cace5fa"},{url:"assets/js/page-自定义页脚.eb3bbd51.js",revision:"0f9e8f274f4326fb0be65cf971931c08"},{url:"assets/js/page-页面信息.67dde7b2.js",revision:"66151bca5856e83b81a24a56091e2911"},{url:"assets/js/page-页面布局.43ec0569.js",revision:"e7d4ab8c2e69ebc3643ffeef3b6c783f"},{url:"assets/js/page-页面配置.0ea8a7d4.js",revision:"0aaaf5ca45c5715aab53312d0ba51245"},{url:"assets/js/page-默认页脚.34b513b2.js",revision:"3c29185eeb1d636afc5ac1e9411db225"},{url:"assets/js/vendors~layout-Layout.7cf9792c.js",revision:"e28711ed2353a9486c42726d19b04cf1"},{url:"category/component/index.html",revision:"fa419ee496e73f896c9b0d5b94a04577"},{url:"category/index.html",revision:"78518de2895837cac432b2ef8c608e26"},{url:"category/layout/index.html",revision:"0644179e7bb6604baaaf9c639185a60e"},{url:"category/note/index.html",revision:"79dfd48f93d53a9391bce13988f42343"},{url:"category/note/page/2/index.html",revision:"2f0f836fda73b97fe5a019f9f9551c0f"},{url:"component/disable.html",revision:"510666bfc74566c7e65ccf84eea89411"},{url:"component/footer/default.html",revision:"91df78d0669f2449ce84ae04e73cfa8f"},{url:"component/footer/diy.html",revision:"a7caa1dfd4333b35955655ab5266b35e"},{url:"component/footer/index.html",revision:"1ff8f500ad2f29d93c68107e79f81cc9"},{url:"component/footer/text.html",revision:"35005ef1dc95bf99d8b0f9d8c3fafdd1"},{url:"component/index.html",revision:"b39b477553c0023472ca22c06d4ef1d5"},{url:"component/pageInfo.html",revision:"f16b7fe9307946890f4e39cfb71ab4e7"},{url:"en/index.html",revision:"e67c3c6bde0d7a8115f260748674936c"},{url:"en/test/detail/markdown.html",revision:"333804baed3a38ad422ec68793752b27"},{url:"en/test/detail/page.html",revision:"61ee18afd1bf455ea49d39ee4398ee6c"},{url:"en/test/footer/default.html",revision:"beb8eb67d5fd88d664a4db69e2434d21"},{url:"en/test/footer/diy.html",revision:"199e10142c4a3f000f40d6e3b7eb29c2"},{url:"en/test/footer/index.html",revision:"55ea38e64b097870d8437c4f8afacff3"},{url:"en/test/footer/link.html",revision:"970ea822bdfb46772e8d2fae38de9095"},{url:"en/test/footer/outlink.html",revision:"4b769e7502195e1c054d4a5edec65a9b"},{url:"en/test/footer/text.html",revision:"6f33c12a9e7a08f0e44863b02841b602"},{url:"en/test/index.html",revision:"066b467b6621d54a8203a41e70292448"},{url:"encrypt/index.html",revision:"6bba798b0bcb6351aa6fb6753716f5dd"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"191a9fb694d08417df545f78bbb7dcd7"},{url:"intro.html",revision:"dda668d65122b7085a4d50fcc3bc23ce"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"markdown.html",revision:"27ba1c915817af6efae3c60edc901e61"},{url:"notes/1.html",revision:"51e396d938428fcd74aadd46eaec56c1"},{url:"notes/10.html",revision:"252471904eeb3c39ce382e19ab295eff"},{url:"notes/11.html",revision:"9047bccde719a6d16748e2d64c5ce180"},{url:"notes/12.html",revision:"552520ade1f6d37378679cd1869436c8"},{url:"notes/2.html",revision:"3a7d8fe4efb909b5ba04136ccbc2de7d"},{url:"notes/3.html",revision:"81624682948ec4d81390b9a6d4a33a20"},{url:"notes/4.html",revision:"8fa76ae8b613e495f99e4a769a881e86"},{url:"notes/6.html",revision:"45b463d42526f6a3a3679ada8fc669ed"},{url:"notes/7.html",revision:"94079d10dddfbcb227ed87493d204f23"},{url:"notes/8.html",revision:"eb6001787b3296a731317e135d47de56"},{url:"notes/9.html",revision:"7e75666ea6bc56ea2152e3090280b014"},{url:"notes/index.html",revision:"b17ac186066869def3415aec8678ce9a"},{url:"sticky.html",revision:"c9fd8eb4740c95b8f96b97b3c2e6e76b"},{url:"tag/footer/index.html",revision:"dc4a9831c9181135a0e4cd77f481a2ce"},{url:"tag/index.html",revision:"aa2caf8abee21774667bfb44fc38d15b"},{url:"tag/layout/index.html",revision:"3c061f1444115c184279281b5460594f"},{url:"tag/markdown/index.html",revision:"e4b5e748476624c2153fb4904b099c39"},{url:"tag/note/index.html",revision:"d974ce2de3fb938ba240349282e4e8ab"},{url:"tag/note/page/2/index.html",revision:"adfea70fbe7d8c072ffcb99eea106cad"},{url:"test/index.html",revision:"35b04c5f9564d8ba09a9a32e5ae7cf63"},{url:"timeline/index.html",revision:"a333c05e7807af1e0b1667899ffd0ade"}],{})}));
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
