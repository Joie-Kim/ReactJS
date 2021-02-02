!function(e){var r={},t={0:0};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(r){if(0!==t[r]){var n=require("./js/"+({1:"pages-BluePage",2:"pages-RedPage",3:"pages-UsersPage"}[r]||r)+".chunk.js"),o=n.modules,u=n.ids;for(var s in o)e[s]=o[s];for(var c=0;c<u.length;c++)t[u[c]]=0}return Promise.all([])},n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=25)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r,t){e.exports=t(23)},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r,t){"use strict";function n(e,r,t,n,o,u,s){try{var c=e[u](s),i=c.value}catch(e){return void t(e)}c.done?r(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,u){var s=e.apply(r,t);function c(e){n(s,o,u,c,i,"next",e)}function i(e){n(s,o,u,c,i,"throw",e)}c(void 0)}))}}t.d(r,"a",(function(){return o}))},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("@loadable/component")},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,"b",(function(){return b})),t.d(r,"c",(function(){return j})),t.d(r,"d",(function(){return g}));var s=t(1),c=t.n(s),i=t(6),a=t(13),l=t.n(a),p=t(4),d=c.a.mark(y),f=c.a.mark(g),v="users/GET_USER",h=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},b=function(e){return{type:v,payload:e}},j=function(){return function(){var e=Object(i.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,l.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(h(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},x=function(e){return l.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function y(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p.call)(x,e.payload);case 3:return r=t.sent,t.next=6,Object(p.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(p.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),d,null,[[0,8]])}function g(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.takeEvery)(v,y);case 2:case"end":return e.stop()}}),f)}var O={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};r.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!0}),error:u(u({},e.error),{},{users:null})});case"users/GET_USERS_SUCCESS":return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return u(u({},e),{},{loading:u(u({},e.loading),{},{users:!1}),error:u(u({},e.error),{},{users:r.payload})});case v:return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!0}),error:u(u({},e.error),{},{user:null})});case"users/GET_USER_SUCCESS":return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return u(u({},e),{},{loading:u(u({},e.loading),{},{user:!1}),error:u(u({},e.error),{},{user:r.payload})});default:return e}}},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("@loadable/server")},function(e,r){e.exports=require("react-redux")},function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"c",(function(){return s}));var n=t(3),o=Object(n.createContext)(null);r.b=o;var u=function(e){var r=e.resolve,t=Object(n.useContext)(o);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},s=function(e){var r=Object(n.useContext)(o);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},function(e,r,t){"use strict";var n=t(0),o=t.n(n),u=t(3),s=t.n(u),c=t(2),i=t.n(c),a=t(18),l=t(8),p=t.n(l),d=p()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2).then(t.bind(null,21))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 21}}),f=p()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(1).then(t.bind(null,22))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 22}}),v=p()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(3).then(t.bind(null,20))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 20}});function h(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(a.a,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(c.Route,{path:"/red",component:d}),Object(n.jsx)(c.Route,{path:"/blue",component:f}),Object(n.jsx)(c.Route,{path:"/users",component:v})]})}r.a=h},function(e,r,t){"use strict";var n=t(0),o=(t(3),t(2));r.a=function(){return Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.Link,{to:"/red",children:"Red"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.Link,{to:"/blue",children:"Blue"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.Link,{to:"/users",children:"Users"})})]})}},function(e,r){e.exports=require("redux-thunk")},,,,function(e,r){e.exports=require("regenerator-runtime")},function(e,r){e.exports=require("fs")},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),u=t(6),s=t(0),c=(t(3),t(10)),i=t.n(c),a=t(11),l=t.n(a),p=t(2),d=t(17),f=t(12),v=t.n(f),h=(t(24),t(5)),b=t(15),j=t(19),x=t.n(j),y=t(16),g=t(7),O=t.n(g),m=t(9),S=t(4),E=o.a.mark(P);function P(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.all)([Object(m.d)()]);case 2:case"end":return e.stop()}}),E)}var _=Object(h.combineReducers)({users:m.a}),R=t(14),w=v.a.resolve("./build/loadable-stats.json");function k(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      '.concat(r.styles,"\n      ").concat(r.links,'\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n    </body>\n    </html>\n      ")}var q=l()(),T=function(){var e=Object(u.a)(o.a.mark((function e(r,t,n){var u,c,a,l,f,v,j,m,S,E,q;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},c=O()(),a=Object(h.createStore)(_,Object(h.applyMiddleware)(x.a,c)),l=c.run(P).toPromise(),f={done:!1,promises:[]},v=new R.ChunkExtractor({statsFile:w}),j=Object(s.jsx)(R.ChunkExtractorManager,{extractor:v,children:Object(s.jsx)(y.b.Provider,{value:f,children:Object(s.jsx)(b.Provider,{store:a,children:Object(s.jsx)(p.StaticRouter,{location:r.url,context:u,children:Object(s.jsx)(d.a,{})})})})}),i.a.renderToStaticMarkup(j),a.dispatch(g.END),e.prev=9,e.next=12,l;case 12:return e.next=14,Promise.all(f.promises);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",t.staus(500));case 19:f.done=!0,m=i.a.renderToString(j),S=JSON.stringify(a.getState()).replace(/</g,"\\u003c"),E="<script>__PRELOADED_STATE__ = ".concat(S,"<\/script>"),q={scripts:E+v.getScriptTags(),links:v.getLinkTags(),styles:v.getStyleTags()},t.send(k(m,q));case 25:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(r,t,n){return e.apply(this,arguments)}}(),U=l.a.static(v.a.resolve("./build"),{index:!1});q.use(U),q.use(T),q.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);