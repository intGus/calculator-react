(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),u=n.n(r),c=n(2),a=n.n(c),l=(n(13),n(3));n(15);var o=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useState)(0),c=Object(l.a)(n,2),a=c[0],o=c[1];return u.a.createElement("div",{className:"App"},u.a.createElement("div",null,u.a.createElement("h1",null,"Simplest Working Calculator")),u.a.createElement("form",null,u.a.createElement("p",{ref:t},"Total: ",a),u.a.createElement("input",{pattern:"[0-9]",ref:e,type:"number",placeholder:"Type a number"}),u.a.createElement("button",{onClick:function(t){t.preventDefault();var n=Number(e.current.value);e.current.value="",e.current.focus(),o(function(e){return e+n}),console.log(a)}},"Add"),u.a.createElement("button",{onClick:function(t){t.preventDefault();var n=Number(e.current.value);e.current.value="",e.current.focus(),o(0!==a?function(e){return e-n}:function(e){return n})}},"Subtract"),u.a.createElement("button",{onClick:function(t){t.preventDefault();var n=Number(e.current.value);e.current.value="",e.current.focus(),o(0!==a?function(e){return e*n}:function(e){return n})}},"Multiply"),u.a.createElement("button",{onClick:function(t){t.preventDefault();var n=Number(e.current.value);if(e.current.value="",e.current.focus(),0!==a){var r=a/n;isFinite(r)?o(r):o(0)}else o(function(e){return n})}},"Divide"),u.a.createElement("button",{onClick:function(t){t.preventDefault(),e.current.value="",e.current.focus()}},"Reset Input"),u.a.createElement("button",{onClick:function(t){t.preventDefault(),o(0),e.current.value="",e.current.focus()}},"Reset Result")))};a.a.createRoot(document.getElementById("root")).render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(o,null)))},4:function(e,t,n){e.exports=n(17)}},[[4,2,1]]]);
//# sourceMappingURL=main.b5caeb45.chunk.js.map