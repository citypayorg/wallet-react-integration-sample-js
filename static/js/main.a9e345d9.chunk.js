(this["webpackJsonpwallet-react-integration-sample-js"]=this["webpackJsonpwallet-react-integration-sample-js"]||[]).push([[0],{210:function(n,e,t){n.exports=t.p+"static/media/logo.02850c4c.svg"},211:function(n,e,t){n.exports=t(495)},219:function(n,e,t){},231:function(n,e){},240:function(n,e){},258:function(n,e){},260:function(n,e){},277:function(n,e){},278:function(n,e){},280:function(n,e){},281:function(n,e){},357:function(n,e){},359:function(n,e){},368:function(n,e){},370:function(n,e){},395:function(n,e){},397:function(n,e){},403:function(n,e){},404:function(n,e){},406:function(n,e){},418:function(n,e){},421:function(n,e){},426:function(n,e){},437:function(n,e){},440:function(n,e){},492:function(n,e,t){},493:function(n,e,t){},494:function(n,e,t){},495:function(n,e,t){"use strict";t.r(e);var a=t(68),o=t(10),i=t.n(o),r=t(207),c=t.n(r),s=t(3),u=t(5),l=t(8),f=t(7),d=(t(219),t(14)),p=t.n(d),g=t(32),w=t(57),h=t(208),m=t.n(h),v=t(498),k=new v.a(!1),b=new v.a(!1);function y(){window.funwallet.sdk.openWalletAuthenticationPopUp()}function E(){window.funwallet.sdk.logout(),k.next(!1)}var j=void 0;function x(){return j||(j=new m.a(window.funwallet.sdk.ethereum))}function O(n){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(p.a.mark((function n(e){var t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.ethereumAddress();case 2:return t=n.sent,n.next=5,x().eth.personal.sign(e,t);case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n){return A.apply(this,arguments)}function A(){return(A=Object(g.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.ethereumAddress();case 2:t=n.sent,e.from=t,x().eth.sendTransaction(e).once("transactionHash",(function(n){console.log("Transaction hash test app",n)})).on("error",function(){var n=Object(g.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e.message,e);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.funwallet.sdk.kycModalOpen();case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t(492);var I=function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"logged-out"},i.a.createElement("button",{onClick:this.signAMessage},"Sign message"),i.a.createElement("button",{onClick:this.sendSignedTransaction},"Send signed transaction"),i.a.createElement("button",{onClick:M},"Start KYC"),i.a.createElement("button",{onClick:E},"Logout"))}},{key:"signAMessage",value:function(){var n=Object(g.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O("TESTME");case 2:e=n.sent,console.log("Sign message complete. sig -",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"sendSignedTransaction",value:function(){var n=Object(g.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C({to:"0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28",value:"0x00"});case 2:e=n.sent,console.log("Send signed transaction complete. sig -",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}]),t}(o.Component),W=(t(493),function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"logged-in"},i.a.createElement("button",{onClick:y},"Login"))}}]),t}(o.Component)),N=t(210),T=t.n(N),B=function(n){Object(l.a)(t,n);var e=Object(f.a)(t);function t(n){var a;return Object(s.a)(this,t),(a=e.call(this,n)).state={isLoggedIn:!1,loading:!0},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var n=this;k.subscribe((function(e){n.setState({isLoggedIn:e,loading:!b.value}),n.forceUpdate()})),b.subscribe((function(e){e&&(n.setState({isLoggedIn:k.value,loading:!1}),n.forceUpdate())}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-container"},i.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),i.a.createElement("div",{className:"action-buttons"},this.state.loading?i.a.createElement("p",null,"Loading please wait"):null,this.state.isLoggedIn||this.state.loading?null:i.a.createElement(W,null),this.state.isLoggedIn&&!this.state.loading?i.a.createElement(I,null):null),this.state.isLoggedIn?i.a.createElement(a.WalletFollower,{page:"/funds"}):null))}}]),t}(o.Component);t(494),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(a.WalletLeader,{registerEventListeners:function(){window.funwallet.sdk.on(w.MessageListeners.authenticationCompleted,(function(n){"https://wallet.funfair.io"===n.origin&&k.next(!0)})),window.funwallet.sdk.on(w.MessageListeners.restoreAuthenticationCompleted,(function(n){"https://wallet.funfair.io"===n.origin&&b.next(!0)})),window.funwallet.sdk.on(w.MessageListeners.isKycVerified,(function(n){"https://wallet.funfair.io"===n.origin&&(n.data.isVerified?console.error("Your client should not show the kyc logic if already kyced"):window.funwallet.sdk.showFunWalletModal())})),window.funwallet.sdk.on(w.MessageListeners.kycProcessCancelled,(function(n){"https://wallet.funfair.io"===n.origin&&n.data.cancelled&&window.funwallet.sdk.hideFunWalletModal()}))}}),i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.a9e345d9.chunk.js.map