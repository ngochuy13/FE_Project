/*!
* lazyYT (lazy load YouTube videos)
* v1.0.1 - 2014-12-30
* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
* http://creativecommons.org/licenses/by-sa/4.0/
* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
* 
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
*/


!function(t){"use strict";function a(a,e){var l,s,d,i=a.data("width"),c=a.data("height"),u=a.data("ratio")?a.data("ratio"):e.default_ratio,o=a.data("youtube-id"),n=[],p=a.text()?a.text():e.loading_text,h=a.data("parameters")||"";u=u.split(":"),"number"==typeof i&&"number"==typeof c?(a.width(i),l=c+"px"):"number"==typeof i?(a.width(i),l=i*u[1]/u[0]+"px"):(i=a.width(),0==i&&(i=a.parent().width()),l=u[1]/u[0]*100+"%"),n.push('<div class="ytp-thumbnail">'),n.push('<div class="ytp-large-play-button"'),640>=i&&n.push(' style="transform: scale(0.563888888888889);"'),n.push(">"),n.push("<svg>"),n.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>'),n.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>'),n.push("</svg>"),n.push("</div>"),n.push("</div>"),n.push('<div class="html5-info-bar">'),n.push('<div class="html5-title">'),n.push('<div class="html5-title-text-wrapper">'),n.push('<a id="lazyYT-title-',o,'" class="html5-title-text" target="_blank" tabindex="3100" href="https://www.youtube.com/watch?v=',o,'">'),n.push(p),n.push("</a>"),n.push("</div>"),n.push("</div>"),n.push("</div>"),a.css({"padding-bottom":l}).html(n.join("")),d=i>640?"maxresdefault.jpg":i>480?"sddefault.jpg":i>320?"hqdefault.jpg":i>120?"mqdefault.jpg":0==i?"hqdefault.jpg":"default.jpg",s=a.find(".ytp-thumbnail").css({"background-image":["url(http://img.youtube.com/vi/",o,"/",d,")"].join("")}).addClass("lazyYT-image-loaded").on("click",function(t){t.preventDefault(),!a.hasClass("lazyYT-video-loaded")&&s.hasClass("lazyYT-image-loaded")&&a.html('<iframe src="//www.youtube.com/embed/'+o+"?autoplay=1&"+h+'" frameborder="0" allowfullscreen></iframe>').addClass("lazyYT-video-loaded")}),t.getJSON("https://gdata.youtube.com/feeds/api/videos/"+o+"?v=2&alt=json",function(t){a.find("#lazyYT-title-"+o).text(t.entry.title.$t)})}t.fn.lazyYT=function(e){var l={loading_text:"Loading...",default_ratio:"16:9",callback:null,container_class:"lazyYT-container"},s=t.extend(l,e);return this.each(function(){var e=t(this).addClass(s.container_class);a(e,s)})}}(jQuery);
