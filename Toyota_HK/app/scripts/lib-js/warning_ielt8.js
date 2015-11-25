var $buoop = {
    reminder: 0,
    vs: {i:9,f:2,o:9.63,s:2,c:10},
    l: "zh",
    url: "//www.browser-update.org/zh/update.html"
};
function $buo_f(){
var e = document.createElement("script");
e.src = "//browser-update.org/update.min.js";
document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}