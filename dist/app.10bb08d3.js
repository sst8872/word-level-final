parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wvdO":[function(require,module,exports) {

},{}],"Xuq8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={"level-1":"12RsjstgTSaRUhIjhPP--VCtERQqnpJwewXuN8xHr3PA","level-2":"135pBkxhZkSpZtMZCoghDq_FQKmJV8RVNGsBqOvZnx2U","level-3":"1YUJUlALBnPvtE5OiWNuZi1ZYYj-A2H0Hgx1MCVkY0hU",free:"1p642D-8jC90_ZljtXsU8Jz67MHL0qRs0Yq8Zcefgrp8"},t=e;exports.default=t;
},{}],"b8yP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={"level-1":"https://script.google.com/macros/s/AKfycbxA2JRgPgYF7jZERFgAgJJREF6ZCCUCcSk6E6x0FL7Kb-jScLwr/exec","level-2":"https://script.google.com/macros/s/AKfycbwFZ8uV7OH2HNsyjkW7iOcfoCVJ6xsfHWGXm0Hoel_RTMTTn3U/exec","level-3":"https://script.google.com/macros/s/AKfycbzymFulJIKvZJyxtm87DKMkgjN-NlQnZvfRYE5IXsvseWoDO35A/exec",free:"https://script.google.com/macros/s/AKfycbztpSSXsccuf-Ur22uzZ9Rk51dvYXLoB4iQOBKOhA/exec"},c=e;exports.default=c;
},{}],"PE0b":[function(require,module,exports) {
"use strict";function e(e,t){document.querySelector(".loader").style.display="block",fetch(e).then(function(e){return e.json()}).then(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"MtmZ":[function(require,module,exports) {
"use strict";function e(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>"+document.getElementById(e).innerHTML+"</body></html>",d=new Blob(["\ufeff",t],{type:"application/msword"}),n="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(t);o=o?o+".doc":"document.doc";var a=document.createElement("a");document.body.appendChild(a),navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(d,o):(a.href=n,a.download=o,a.click()),document.body.removeChild(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=e;exports.default=o;
},{}],"R8r9":[function(require,module,exports) {
"use strict";function e(e){console.log(e,"from buildTable");var t=document.createElement("table"),n=document.createElement("tr"),d=document.createElement("td");d.textContent="English";var r=document.createElement("td");r.textContent="Korean",n.appendChild(d),n.appendChild(r),t.appendChild(n),console.log(t);for(var o=0;o<e.length;o++){var a=document.createElement("tr");a.ind=o;var l=document.createElement("td");l.innerHTML=e[o].en,a.appendChild(l);var c=document.createElement("td");c.textContent=e[o].ko,a.appendChild(c),t.appendChild(a)}return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"zrG1":[function(require,module,exports) {
"use strict";function e(e){e.style.display="none",o(e,window.prompt("Password Please!",""))}function o(e,o){for(var s=1;s<3;){if(o||history.go(-1),"song"==o.toLowerCase()){alert("You Got it Right!"),e.style.display="block";break}s+=1;o=prompt("Access Denied - Password Incorrect, Please Try Again.","Password")}return"song"!=o.toLowerCase()&3==s&&history.go(-1)," "}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=e;exports.default=s;
},{}],"QdeU":[function(require,module,exports) {
"use strict";require("../css/loader.css"),require("../css/style.css"),require("../css/navbar.css");var e=a(require("../spreadSheet/sheetIDs")),t=a(require("../spreadSheet/apiURLs")),n=a(require("./fetchSheetsLength")),r=a(require("./exportToWords")),c=a(require("./makeTable")),o=a(require("./editPassword"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return s(e)||u(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var d=[],p={postPerpage:10,currentPage:0,results:null,currentSheetID:"12RsjstgTSaRUhIjhPP--VCtERQqnpJwewXuN8xHr3PA",currentApiURL:"https://script.google.com/macros/s/AKfycbxA2JRgPgYF7jZERFgAgJJREF6ZCCUCcSk6E6x0FL7Kb-jScLwr/exec",currentDay:0,currentActive:1},y=document.querySelector(".printer"),m=document.getElementById("exportContent"),f=document.querySelectorAll(".choice"),v=document.querySelector(".dropdown");function g(e){var t=document.createElement("div");t.setAttribute("class","message wrapper"),wrapper.appendChild(t);var r=document.createElement("button");r.type=r,r.setAttribute("class","start"),r.textContent="Start Study",r.addEventListener("click",function(){return(0,n.default)(p.currentApiURL,h)}),wrapper.appendChild(r);var c=document.createElement("div");c.classList.add("game"),wrapper.insertBefore(c,document.querySelector(".index"))}function h(e){for(var t=[],n=p.currentSheetID,r=1;r<=e;r++){var c="https://spreadsheets.google.com/feeds/list/".concat(n,"/").concat(r,"/public/values?alt=json");t=[].concat(l(t),[c])}Promise.all(t.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){var t=[];e.feed.title.$t;return e.feed.entry.forEach(function(e){var n={};for(var r in e)"english"===r.substring(4)?n.en=e[r].$t:"korean"===r.substring(4)&&(n.ko=e[r].$t);t=[].concat(l(t),[n])}),t})})).then(function(e){p.results=e,b(0,p.results),document.querySelector(".loader").style.display="none"})}function b(e){document.getElementById("mySidenav").style.width="300px",document.querySelector(".game").innerHTML="",document.querySelector(".open-box").style.display="block",p.currentPage=e,document.querySelector(".numday").innerHTML=parseInt(p.currentPage)+1,document.querySelector(".index").classList.remove("hidden"),document.querySelector(".start").style.display="none",L(),S();var t=x(p.results[e]),n=document.querySelector(".game");t.forEach(function(e){var t=document.createElement("div");t.classList.add("box"),t.classList.add("tooltip-message"),t.setAttribute("data-tooltip-message",e.en),t.innerText=e.en,t.addEventListener("mouseenter",function(n){t.style.backgroundColor="#4CAF50",t.innerText=e.ko,function(e){document.querySelectorAll(".tooltip-message");var t=document.querySelector(".tooltip-output");t.style.display="block";var n=e.target.getBoundingClientRect();t.style.top=n.y+-10+"px",t.style.left=n.x+"px",t.innerHTML=e.target.getAttribute("data-tooltip-message")}(n)}),t.addEventListener("mouseleave",function(n){t.style.backgroundColor="#3b5998",t.innerText=e.en,document.querySelector(".tooltip-output").style.display="none"}),n.appendChild(t)})}function S(){var e=document.querySelector(".numbers");e.innerHTML="",p.results.forEach(function(t,n){if(n<5){var r=document.createElement("span");r.classList.add("number"),r.textContent=n+1,r.addEventListener("click",function(t){e.innerHTML="",document.querySelector(".game").innerHTML="",b(parseInt(this.textContent)-1),p.currentDay=this.textContent}),n+1==p.currentPage+1&&(console.log(p.currentPage),r.classList.add("active")),e.appendChild(r)}})}function L(){document.querySelector(".navbar").classList.remove("hidden"),document.querySelector(".curday").innerHTML="Day-".concat(parseInt(p.currentPage)+1," in ").concat(p.results.length),document.querySelector(".openbtn").addEventListener("click",function(e){document.getElementById("mySidenav").style.width="300px"}),document.querySelector(".closebtn").addEventListener("click",function(e){document.getElementById("mySidenav").style.width="0"},!1)}function x(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}function q(e){A(e,"white","test"),A(e,"black","answer")}function A(e,t,n){var c=document.querySelector(".numday").textContent,o=parseInt(c)-1,a=p.results[o];m.innerHTML='<h3\n                                    style="text-align: center"\n                                >\n                                    Day-'.concat(o+1," ").concat(n," \n                                </h3><br>");for(var l='<table style="border: 1px solid black; border-collapse: collapse">\n                        <tr>\n                            <td \n                                style="border: 1px solid black;\n                                       font-weight: bold;\n                                       text-align: center;\n                                       color: black \n                                ">\n                                English\n                                </td> \n                            <td \n                                style="border: 1px solid black;\n                                       font-weight: bold;\n                                       text-align: center;\n                                       color: black;\n                                ">\n                                Korean\n                                </td> \n                        </tr> \n                    ',i="",u=0;u<a.length;u++){i+='<tr">\n                        <td \n                            style=" border: 1px solid black;\n                                    color: black;  \n                                    padding-left: 4px;\n                                    padding-right: 2px;\n                                   "\n                          >\n                            '.concat(u+1,". ").concat(a[u].en,'</td>\n                        <td \n                            style=" border: 1px solid black;\n                                    color: ').concat(t,';  \n                                    padding-left: 2px;\n                                    padding-right: 2px;\n                                    font-size: 12px;\n                                   "\n                           >\n                            ').concat(a[u].ko,"</td>\n                     </tr>\n                     ")}l+=i+"</table>",m.innerHTML+=l,(0,r.default)("exportContent","day-".concat(o+1,".").concat(n)),m.innerHTML=""}window.addEventListener("load",g),document.querySelector(".shuffleWords").addEventListener("click",function(e){document.querySelector(".game").innerHTML="",b(p.currentPage),document.getElementById("mySidenav").style.width="0"}),y.addEventListener("click",function(e){q(e)}),f.forEach(function(r){r.addEventListener("click",function(c){switch(f.forEach(function(e){e.classList.remove("active")}),document.getElementById("mySidenav").style.width=0,document.querySelector(".game").innerHTML="",document.querySelector(".open-box").style.display="none",this.dataset.level){case"1":p.currentSheetID=e.default["level-1"],p.currentApiURL=t.default["level-1"],p.currentActive=this.dataset.level,(0,n.default)(p.currentApiURL,h);break;case"2":p.currentSheetID=e.default["level-2"],p.currentApiURL=t.default["level-2"],p.currentActive=this.dataset.level,(0,n.default)(p.currentApiURL,h);break;case"3":p.currentSheetID=e.default["level-3"],p.currentApiURL=t.default["level-3"],p.currentActive=this.dataset.level,(0,n.default)(p.currentApiURL,h);break;case"4":p.currentSheetID=e.default.free,p.currentApiURL=t.default.free,p.currentActive=this.dataset.level,(0,n.default)(p.currentApiURL,h)}this.dataset.level===p.currentActive&&r.classList.add("active")})});
},{"../css/loader.css":"wvdO","../css/style.css":"wvdO","../css/navbar.css":"wvdO","../spreadSheet/sheetIDs":"Xuq8","../spreadSheet/apiURLs":"b8yP","./fetchSheetsLength":"PE0b","./exportToWords":"MtmZ","./makeTable":"R8r9","./editPassword":"zrG1"}]},{},["QdeU"], null)