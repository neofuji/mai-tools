!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=82)}({6:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};function a(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0,t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io"],t.handleError=function(e){alert(e)},t.fetchPage=a,t.fetchGameVersion=function e(t){return r(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?n.value:e(t=yield a("/maimai-mobile/record/musicVersion/"))}))},t.getPostMessageFunc=function(e,t){return(n,r)=>{const a={action:n,payload:r};e.postMessage(a,t)}}},82:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const a=n(93),o=n(92),i=n(89),c=n(90),s=n(6);!function(e){const t={zh:{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating"},en:{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating"}}[i.LANG],n={};!function(){const i=document.location.host;if("maimaidx-eng.com"!==i&&"maimaidx.jp"!==i)return void s.handleError(t.pleaseLogIn);Array.from(e.querySelectorAll("img.friend_favorite_icon")).map(e=>e.parentElement).forEach(r=>{const a=r.querySelector("[name=idx]").value;const i={idx:a,name:o.getPlayerName(r),elem:r};n[a]=i,function(n){const r=n.elem.querySelector(".basic_block > .p_l_10");let a=n.elem.querySelector(".analyzeLink");a&&a.remove(),a=e.createElement("a"),a.className="analyzeLink f_r f_14",a.style.color="#1477e6",a.target="friendRating",a.innerText=t.analyze;const o=new URLSearchParams;o.set("friendIdx",n.idx),o.set("playerName",n.name),a.href="https://myjian.github.io/mai-tools/rating-calculator/?"+o.toString(),r.append(a)}(i)}),self.ratingCalcMsgListener&&window.removeEventListener("message",self.ratingCalcMsgListener),self.ratingCalcMsgListener=e=>{if(console.log(e.origin,e.data),s.ALLOWED_ORIGINS.includes(e.origin)&&"getFriendRecords"===e.data.action){const t=n[e.data.idx];t&&function(e,t){r(this,void 0,void 0,(function*(){const n=yield s.fetchGameVersion(document.body);t("gameVersion",n);const r=o.fetchPlayerGrade(e.elem);r&&t("playerGrade",r);const i=[];for(const n of a.DIFFICULTIES)t("appendPlayerScore",c.statusText(n,!1)),yield a.fetchScores(e.idx,n,i),t("appendPlayerScore",c.statusText(n,!0));t("replacePlayerScore","");for(let e=0;e<i.length;e+=50)t("appendPlayerScore",i.slice(e,e+50).join("\n"));t("calculateRating","")}))}(t,s.getPostMessageFunc(e.source,e.origin))}},window.addEventListener("message",self.ratingCalcMsgListener)}()}(document)},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const r=new URLSearchParams(document.location.search);let a="en";r.get("hl")?a=r.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(a="zh"),t.LANG=a},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const r={zh:{advStart:"🕓 下載黃譜成績中…",advDone:"✔ 黃譜成績下載完畢！",expStart:"🕓 下載紅譜成績中…",expDone:"✔ 紅譜成績下載完畢！",masStart:"🕓 下載紫譜成績中…",masDone:"✔ 紫譜成績下載完畢！",remStart:"🕓 下載白譜成績中…",remDone:"✔ 白譜成績下載完畢！"},en:{advStart:"🕓 Downloading Advanced scores…",advDone:"✔ Advanced scores downloaded!",expStart:"🕓 Downloading Expert scores…",expDone:"✔ Expert scores downloaded!",masStart:"🕓 Downloading Master scores…",masDone:"✔ Master scores downloaded!",remStart:"🕓 Downloading Re:Master scores…",remDone:"✔ Re:Master scores downloaded!"}}[n(89).LANG];t.statusText=function(e,t){switch(e){case"Re:MASTER":return t?r.remDone:r.remStart;case"MASTER":return t?r.masDone:r.masStart;case"EXPERT":return t?r.expDone:r.expStart;case"ADVANCED":return t?r.advDone:r.advStart}}},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlayerGrade=t.getPlayerName=t.getChartType=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0,t.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){const t=e.children[0].className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getChartType=function(e){return e.id?e.id.includes("sta_")?"STANDARD":"DX":e.children[1].src.includes("_standard")?"STANDARD":"DX"},t.getPlayerName=function(e){return e.querySelector(".name_block").innerText},t.fetchPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},93:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.DIFFICULTIES=void 0;const a=n(92),o=n(6),i=new Map([["Re:MASTER","/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=4&idx="],["MASTER","/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=3&idx="],["EXPERT","/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=2&idx="],["ADVANCED","/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=1&idx="]]);t.DIFFICULTIES=Array.from(i.keys()),t.fetchScores=function(e,t,n){return r(this,void 0,void 0,(function*(){let r=i.get(t);if(!r)return;r+=e;const c=(yield o.fetchPage(r)).querySelectorAll(".main_wrapper.t_c .m_15"),s={genre:"",scoreList:n};c.forEach(e=>function(e,t,n){const r=e.classList.contains("screw_block"),o=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_3")&&e.classList.contains("f_0");if(r)n.genre=e.innerText;else if(o){const r=a.getSongName(e),o=a.getChartLevel(e),i=a.getChartType(e),c=function(e){const t=e.querySelector("td.w_120.f_b:last-child"),n=t&&t.innerText;return"0"!==n?n:null}(e);if(!c)return;n.scoreList.push([r,n.genre,t,o,i,c].join("\t"))}}(e,t,s))}))}}});