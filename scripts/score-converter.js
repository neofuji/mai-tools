!function(e){var n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=86)}({86:function(e,n,i){"use strict";!function(e){const n=new Map([["S","/maimai-mobile/maimai-img/icon_s.png"],["S+","/maimai-mobile/maimai-img/icon_s_plus.png"],["SS","/maimai-mobile/maimai-img/icon_ss.png"],["SS+","/maimai-mobile/maimai-img/icon_ss_plus.png"],["SSS","/maimai-mobile/maimai-img/icon_sss.png"],["SSS+","/maimai-mobile/maimai-img/icon_sss_plus.png"]]),i=new Map([["AAA","/maimai-mobile/img/music_icon_aaa.png"],["AA","/maimai-mobile/img/music_icon_aa.png"],["A","/maimai-mobile/img/music_icon_a.png"]]),t=new Map([["fc","/maimai-mobile/maimai-img/icon_fc_silver.png"],["fcplus","/maimai-mobile/maimai-img/icon_fc_gold.png"],["ap","/maimai-mobile/maimai-img/icon_ap.png"]]),o=new Map([["applus","/maimai-mobile/img/music_icon_app.png"]]),a=new Map([["FS","/maimai-mobile/maimai-img/icon_maxfever_silver.png"],["FS+","/maimai-mobile/maimai-img/icon_maxfever_gold.png"]]),r=new Map([["FDX","/maimai-mobile/img/music_icon_fsd.png"],["FDX+","/maimai-mobile/img/music_icon_fsdp.png"]]);function c(e){return e.trim().replace(/\s+/g,"-")}function l(e,n){return n=n||2,e.toString().padStart(n,"0")}function m(e,n){let i=e.get(n);return i instanceof Blob?Promise.resolve(i):i?fetch(i).then(e=>e.blob()).then(i=>(e.set(n,i),i)):void 0}function s(n){const i=n.querySelector("img.music_img"),t=e.createElement("canvas");t.width=i.width,t.height=i.height;return t.getContext("2d").drawImage(i,0,0,t.width,t.height),t.toDataURL()}function u(e){return m(n,e)||m(i,e)||Promise.reject('invalid title "'+e+'"')}function g(e){const n=e.querySelector(".playlog_result_innerblock > img:nth-child(3)").src;switch(n.substring(n.lastIndexOf("/")+1,n.lastIndexOf("."))){case"fs":return"FS";case"fsplus":return"FS+";case"fsd":return"FDX";case"fsdplus":return"FDX+"}return null}if(("maimaidx-eng.com"===e.location.host||"maimaidx.jp"===e.location.host)&&e.location.pathname.includes("/maimai-mobile/record/playlogDetail/")){let n="https://myjian.github.io/mai-tools/classic-layout/?st="+encodeURIComponent(e.body.querySelector(".basic_block.break").childNodes[1].nodeValue)+"&ac="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_achievement_txt").innerText;return n.substring(0,n.length-1)}(e.body))+"&nd="+encodeURIComponent(function(e){return e.querySelector(".playlog_notes_detail").innerText.split("\n").slice(-5).map(c).join("_")}(e.body))+"&df="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,i=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf("."));return"remaster"===i?"Re:MASTER":i.toUpperCase()}(e.body))+"&tk="+encodeURIComponent(function(e){return e.querySelector(".playlog_top_container .sub_title .f_b").innerText.replace("0","")}(e.body))+"&dt="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_top_container .sub_title span:last-child").innerText.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),i=new Date(parseInt(n[1]),parseInt(n[2])-1,parseInt(n[3]),parseInt(n[4]),parseInt(n[5]));return(t=new Date(i.valueOf()-36e5)).getFullYear()+"-"+l(t.getMonth()+1)+"-"+l(t.getDate())+" "+l(t.getHours())+":"+l(t.getMinutes());var t}(e.body))+"&hs="+encodeURIComponent(function(e){return e.querySelector(".playlog_achievement_newrecord")?1:0}(e.body))+"&cb="+encodeURIComponent(function(e){return e.querySelector(".col2 .playlog_score_block .white").innerText}(e.body));const i=g(e.body);i&&(n+="&sc="+encodeURIComponent(i)),console.log(n),console.log("url length: "+n.length),window.open(n,"_blank"),window.addEventListener("message",n=>{if("https://myjian.github.io"===n.origin||"https://cdpn.io"===n.origin){const c=n.data,l=n.source;let p="";switch(c.action){case"ready":l.postMessage({action:"songImage",imgSrc:s(e.body)},n.origin),function(e){const n=e.querySelector(".playlog_result_innerblock > img:nth-child(2)").src,i=n.substring(n.lastIndexOf("/")+1,n.lastIndexOf("."));return"fc_dummy"===i?Promise.resolve(null):m(t,i)||m(o,i)||Promise.reject('invalid title "'+i+'"')}(e.body).then(e=>{e&&l.postMessage({action:"apFcImage",img:e},n.origin)}),(i=g(e.body),i?m(a,i)||m(r,i)||Promise.reject('invalid title "'+i+'"'):Promise.resolve(null)).then(e=>{e&&l.postMessage({action:"syncImage",img:e},n.origin)}),p=function(e){const n=e.querySelector(".playlog_scorerank").src;return n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")).toUpperCase().replace("PLUS","+")}(e.body),u(p).then(e=>{l.postMessage({action:"rankImage",title:p,img:e},n.origin)});break;case"getRankImage":p=c.payload,u(p).then(e=>{l.postMessage({action:"rankImage",title:p,img:e},n.origin)})}}var i})}}(document)}});