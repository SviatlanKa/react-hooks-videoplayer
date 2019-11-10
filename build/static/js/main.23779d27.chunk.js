(this["webpackJsonpreact-hooks-videoplayer-start"]=this["webpackJsonpreact-hooks-videoplayer-start"]||[]).push([[0],{43:function(n,e,t){n.exports=t(59)},59:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(33),i=t.n(a),c=t(15),l=t(9),d=t(39),u=t(14),s=t(40),p=t(1),f=t(34),b=t.n(f),v=t(2);function m(){var n=Object(v.a)(["\n  width: 100%;\n  padding-bottom: 56.25%;\n  position: relative;\n"]);return m=function(){return n},n}var h=p.c.div(m());function g(){var n=Object(v.a)(["\n  position: relative;\n  flex: 2 0 900px;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return g=function(){return n},n}var y=p.c.div(g()),x=function(n){var e=n.active,t=n.autoplay,r=n.endCallback,a=n.progressCallback;return o.a.createElement(y,null,o.a.createElement(h,null,o.a.createElement(b.a,{width:"100%",height:"100%",style:{position:"absolute",top:"0"},playing:t,controls:!0,url:e.video,onEnded:r,onProgress:a})))};function w(){var n=Object(v.a)(['\n  background: #696969;\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: #fff;\n  padding: 0 20px;\n  margin: 0 0 20px 0;\n  min-height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n']);return w=function(){return n},n}var O=p.c.div(w());function k(){var n=Object(v.a)(["\n  background: #565656;\n  font-size: 0.8em;\n  padding: 2px 5px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n"]);return k=function(){return n},n}var E=p.c.div(k()),j=function(n){var e=n.active,t=n.total;return o.a.createElement(O,null,o.a.createElement("p",null,e.title),o.a.createElement(E,null,e.num," / ",t))};function P(){var n=Object(v.a)(['\n  font-family: "Hind", sans-serif;\n  background: none;\n  border: ',";\n  font-size: 1.6em;\n  color: ",";\n  min-height: 50px;\n  padding: 10px 20px;\n  margin: 0 0 10px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ",";\n  cursor: pointer;\n  position: relative;\n\n  ::before {\n    display: ",';\n    content: "";\n    width: 10px;\n    min-height: 10px;\n    background: #409f4e;\n    border-radius: 50px;\n    position: absolute;\n    left: 0;\n    top: 19px;\n  }\n\n  .wbn-player__video-nr {\n    flex-grow: 1; /* default 0 */\n    max-width: 30px;\n    padding-right: 20px;\n    border-right: 2px solid #565656;\n  }\n\n  .wbn-player__video-name,\n  .wbn-player__video-name a {\n    flex-grow: 10; /* default 0 */\n    padding: 0 0 0 10px;\n    color: ',";\n    text-align: left;\n    text-decoration: none;\n    display: block;\n  }\n\n  .wbn-player__video-time {\n    background: #565656;\n    min-width: 45px;\n    color: #fff;\n    font-size: 0.8em;\n    padding: 0px 5px;\n    height: 20px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 0 0 0 5px;\n  }\n\n  .wbn-player__video-download {\n    flex-grow: 1; /* default 0 */\n    color: ",';\n    margin: 0 0 0 20px;\n    max-width: 30px;\n    padding: 0 20px;\n    border-left: 2px solid #565656;\n    font-family: "fontello";\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  .wbn-player__video-download a {\n    color: ',";\n  }\n\n  .active {\n    opacity: 0.1;\n  }\n"]);return P=function(){return n},n}var _=p.c.div(P(),(function(n){return n.active?"2px dotted #696969":"none"}),(function(n){return n.theme.color}),(function(n){return n.active?"5px":"0"}),(function(n){return n.active||!n.played?"none":"block"}),(function(n){return n.theme.color}),(function(n){return n.played?"#fff":n.theme.color}),(function(n){return n.played&&!n.active?"#fff":n.theme.color})),M=function(n){var e=n.video,t=n.active,r=n.played;return o.a.createElement(_,{active:t,played:r},o.a.createElement("div",{className:"wbn-player__video-nr"},e.num),o.a.createElement("div",{className:"wbn-player__video-name"},e.title),o.a.createElement("div",{className:"wbn-player__video-time"},e.duration))};function S(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(t,!0).forEach((function(e){Object(u.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var V=function(n){return function(e){var t=I({},e,{video:I({},e.video,{title:o.a.createElement(c.b,{to:{pathname:"/".concat(e.video.id),autoplay:!0}},e.video.title)})});return o.a.createElement(n,t)}};function C(){var n=Object(v.a)(["\n  padding: 0 20px;\n  overflow-y: auto;\n  height: 28vw;\n  max-height: 500px;\n  \n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n  \n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  \n  ::-webkit-scrollbar-thumb {\n    color: #888;\n    border-radius: 2px;\n  }\n  \n  ::-webkit-scrollbar-thumb:hover {\n    color: #555;\n  } \n"]);return C=function(){return n},n}var N=p.c.div(C()),D=V(M),z=function(n){var e=n.videos,t=n.active;return o.a.createElement(N,null,e.map((function(n){return o.a.createElement(D,{key:n.id,video:n,active:n.id===t.id,played:n.played})})))};function H(){var n=Object(v.a)(['\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: ',';\n  padding: 0;\n  margin: 20px;\n\n  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: 0.4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: 0.4s;\n  }\n\n  input:checked + .slider {\n    background-color: #3d5138;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  input:checked + .slider:before {\n    transform: translateX(16px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 30px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n']);return H=function(){return n},n}var J=p.c.div(H(),(function(n){return n.theme.color})),T=function(n){var e=n.nightMode,t=n.nightModeCallback;return o.a.createElement(J,null,o.a.createElement("span",null,"Nightmode: "),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:e,onClick:t}),o.a.createElement("span",{className:"slider round"})))};function A(){var n=Object(v.a)(["\n    flex: 1 1 450px;\n    overflow: hidden;\n    color: white;\n    padding-top: 50px;\n    \n    @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n    }\n"]);return A=function(){return n},n}var B=p.c.div(A()),W=function(n){var e=n.videos,t=n.active,r=n.nightModeCallback,a=n.nightMode;return o.a.createElement(B,null,o.a.createElement(T,{nightModeCallback:r,nightMode:a}),o.a.createElement(j,{active:t,total:e.length}),o.a.createElement(z,{videos:e,active:t}))};function q(){var n=Object(v.a)(["\n    background: ",";\n    border: ",";\n    max-width: 1800px;\n    margin: 0 auto;\n    display: flex;\n    max-height: 863px;\n    transition: all 0.5s ease;\n    \n    @media screen and (max-width: 1400px) {\n        display: block;\n        max-height: 10000px;\n    }\n"]);return q=function(){return n},n}var F=p.c.div(q(),(function(n){return n.theme.bgcolor}),(function(n){return n.theme.border}));function L(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function R(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?L(t,!0).forEach((function(e){Object(u.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var X={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#406c63",bgcolorPlayed:"#526d4e",border:"none",borderPlayed:"none",color:"#fff"},$={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlayed:"#7d9979",border:"1px solid #353535",borderPlayed:"none",color:"#353535"},G=function(n){var e=n.match,t=n.history,a=n.location,i=JSON.parse(document.querySelector('[name="videos"]').value),c=JSON.parse(localStorage.getItem("".concat(i.playlistId))),l=Object(r.useState)({videos:c?c.videos:i.playlist,activeVideo:c?c.activeVideo:i.playlist[0],nightMode:!c||c.nightMode,playlistId:c?c.playlistId:i.playlistId,autoplay:!1}),u=Object(s.a)(l,2),f=u[0],b=u[1];Object(r.useEffect)((function(){localStorage.setItem("".concat(f.playlistId),JSON.stringify(R({},f)))}),[f]),Object(r.useEffect)((function(){var n=e.params.activeVideo;if(void 0!==n){var r=f.videos.findIndex((function(e){return e.id===n}));b((function(n){return R({},n,{activeVideo:n.videos[r],autoplay:a.autoplay})}))}else t.push({pathname:"/".concat(f.activeVideo.id),autoplay:!1})}),[t,a.autoplay,e.params.activeVideo,f.activeVideo.id,f.videos]);return o.a.createElement(p.a,{theme:f.nightMode?X:$},null!==f.videos?o.a.createElement(F,null,o.a.createElement(x,{active:f.activeVideo,autoplay:f.autoplay,endCallback:function(){var n=e.params.activeVideo,r=f.videos.findIndex((function(e){return e.id===n})),o=r===f.videos.length-1?0:r+1;t.push({pathname:"/".concat(f.videos[o],".id"),autoplay:!1})},progressCallback:function(n){if(n.playedSeconds>10&&n.playedSeconds<11){var e=Object(d.a)(f.videos);e.find((function(n){return n.id===f.activeVideo.id})).played=!0,b((function(n){return R({},n,{videos:e})}))}}}),o.a.createElement(W,{videos:f.videos,active:f.activeVideo,nightModeCallback:function(){b((function(n){return R({},n,{nightMode:!n.nightMode})}))},nightMode:f.nightMode})):null)};function K(){var n=Object(v.a)(["\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-size: 10px;\n        font-family: 'Hind', sans-serif;\n    }\n"]);return K=function(){return n},n}var Q=Object(p.b)(K()),U=function(){return o.a.createElement(c.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:G}),o.a.createElement(l.a,{exact:!0,path:"/:activeVideo",component:G})),o.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.23779d27.chunk.js.map