(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{111:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":21,"1":171,"2":248,"3":45,"4":62,"5":150,"6":244,"7":41,"8":138,"9":18,"10":73,"11":250,"12":144,"13":33,"14":52,"15":37,"16":110,"17":117,"18":169,"19":13,"20":11,"21":62,"22":116,"23":185,"24":4,"25":226,"26":178,"27":191,"28":68,"29":124,"30":84,"31":156},"secretKey":{"0":131,"1":112,"2":47,"3":217,"4":125,"5":114,"6":172,"7":215,"8":249,"9":55,"10":136,"11":25,"12":152,"13":250,"14":158,"15":150,"16":208,"17":252,"18":68,"19":166,"20":229,"21":125,"22":65,"23":27,"24":163,"25":240,"26":226,"27":173,"28":233,"29":243,"30":236,"31":210,"32":21,"33":171,"34":248,"35":45,"36":62,"37":150,"38":244,"39":41,"40":138,"41":18,"42":73,"43":250,"44":144,"45":33,"46":52,"47":37,"48":110,"49":117,"50":169,"51":13,"52":11,"53":62,"54":116,"55":185,"56":4,"57":226,"58":178,"59":191,"60":68,"61":124,"62":84,"63":156}}}')},117:function(e,t,n){},119:function(e,t,n){},120:function(e,t){},123:function(e,t){},148:function(e,t){},149:function(e,t){},173:function(e,t,n){"use strict";n.r(t);var c=n(27),r=n.n(c),a=n(108),s=n.n(a),i=(n(117),n(3)),o=n(9),u=n(1),l=n.n(u),f=n.p+"static/media/twitter-logo.d89d9a86.svg",p=(n(119),n(8)),b=n(28),d=n(59),m=n(111),g=n(15),j=b.d.SystemProgram,v=(b.d.Keypair,Object.values(m._keypair.secretKey)),h=new Uint8Array(v),x=b.d.Keypair.fromSecretKey(h),y=new p.PublicKey(d.metadata.address),w=Object(p.clusterApiUrl)("devnet"),O="processed",k=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(o.a)(a,2),u=s[0],m=s[1],v=Object(c.useState)([]),h=Object(o.a)(v,2),k=h[0],S=h[1],K=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connect with Public Keys:",c.publicKey.toString()),r(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==u.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return m(""),console.log("Gif link:",u),e.prev=5,t=E(),n=new b.a(d,y,t),e.next=10,n.rpc.addGif(u,{accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",u),e.next=13,P();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.target.value;m(t)},E=function(){var e=new p.Connection(w,O);return new b.b(e,window.solana,O)},I=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new b.a(d,y,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:x.publicKey,user:t.wallet.publicKey,systemProgram:j.programId},signers:[x]});case 6:return console.log("Created a new BaseAccount w/ address:",x.publicKey.toString()),e.next=9,P();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var P=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new b.a(d,y,t),e.next=5,n.account.baseAccount.fetch(x.publicKey);case 5:c=e.sent,console.log("Got the account",c),S(c.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),S(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),P())}),[n]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:n?"authed-container":"container",children:[Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsx)("p",{className:"header",children:" \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb Matt's Favourite Gifs"}),Object(g.jsx)("p",{className:"sub-text",children:"View my GIF collection in the metaverse \ud83d\udcab"}),Object(g.jsx)("p",{className:"sub-text",children:"(connect wallet to view) \ud83d\ude09"}),!n&&Object(g.jsx)("button",{className:"cta-button connect-wallet-button",onClick:N,children:"Connect to Wallet"}),n&&(null===k?Object(g.jsx)("div",{className:"connected-container",children:Object(g.jsx)("button",{className:"cta-button submit-gif-button",onClick:I,children:"Do One-Time Initialization For GIF Program Account"})}):Object(g.jsxs)("div",{className:"connected-container",children:[Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A()},children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:u,onChange:G}),Object(g.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(g.jsx)("div",{className:"gif-grid",children:k.map((function(e,t){return Object(g.jsx)("div",{className:"gif-item",children:Object(g.jsx)("img",{src:e.gifLink})},t)}))})]}))]}),Object(g.jsxs)("div",{className:"footer-container",children:[Object(g.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:f}),Object(g.jsx)("a",{className:"footer-text",href:"https://twitter.com/mattespoz",target:"_blank",rel:"noreferrer",children:"built by @".concat("mattespoz")})]})]})})};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))},59:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"5xys7AzS942QqTGtnmECcovyiSBvLZD3cga357aXSPEC"}}')}},[[173,1,2]]]);
//# sourceMappingURL=main.65cd1e5a.chunk.js.map