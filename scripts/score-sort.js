(()=>{"use strict";var e={8379:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.SSSPLUS_MIN_ACHIEVEMENT=n.DIFFICULTY_CLASSNAME_MAP=n.DIFFICULTIES=void 0,n.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],n.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),n.SSSPLUS_MIN_ACHIEVEMENT=100.5},2347:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getPlayerGrade=n.getPlayerName=n.getChartType=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0;const r=t(472);n.getSongName=function(e){return(0,r.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},n.getPlayerName=function(e){var n,t;return e.className.includes("friend_vs_friend_block")?null===(n=e.querySelector(".t_l"))||void 0===n?void 0:n.innerText:null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},n.getPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},6510:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const o=t(2347),c=t(6420);n.SELF_SCORE_URLS={"Re:MASTER":"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4",MASTER:"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3",EXPERT:"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2",ADVANCED:"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"},n.fetchScores=function(e,t){return r(this,void 0,void 0,(function*(){const r=n.SELF_SCORE_URLS[e];if(!r)return;const i=yield(0,c.fetchPage)(r),s=i.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:"",scoreList:t};return s.forEach((n=>function(e,n,t){const r=e.classList.contains("screw_block"),c=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(r)t.genre=e.innerText;else if(c){const r=(0,o.getSongName)(e),c=(0,o.getChartLevel)(e),i=1===(0,o.getChartType)(e)?"DX":"STANDARD",s=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!s)return;t.scoreList.push([r,t.genre,n,c,i,s].join("\t"))}}(n,e,a))),i}))}},8080:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getInitialLanguage=n.saveLanguage=n.SUPPORTED_LANGUAGES=void 0,n.SUPPORTED_LANGUAGES=["en_US","zh_TW"];const t="MaiToolsLang";n.saveLanguage=function(e){window.localStorage.setItem(t,e)},n.getInitialLanguage=function(){const e=new URLSearchParams(location.search);return function(){switch(window.localStorage.getItem(t)){case"en_US":return"en_US";case"zh_TW":return"zh_TW"}return null}()||(e.get("hl")?e.get("hl").startsWith("zh")?"zh_TW":"en_US":navigator.language.startsWith("zh")?"zh_TW":"en_US")}},9268:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDefaultLevel=n.getOfficialLevel=void 0,n.getOfficialLevel=function(e){const n=Math.floor(e);return e-n>.6?n+"+":n.toString()},n.getDefaultLevel=function(e){if(!e)return 1;const n=parseInt(e);return e.endsWith("+")?n+.7:n}},6685:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.iWantSomeMagic=void 0;const r={15:[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,116,113,109,98,116,105,47,107,116],16:[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,116,113,109,98,116,105,113,109,118,116,47,107,116],17:[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,118,111,106,119,102,115,116,102,47,107,116],18:[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,118,111,106,119,102,115,116,102,113,109,118,116,47,107,116],19:[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,103,102,116,117,106,119,98,109,47,107,116]};n.iWantSomeMagic=function(e){return t(this,void 0,void 0,(function*(){const n=(r[e]||r[18]).map((e=>e-1)),t=yield fetch(String.fromCharCode(...n));return yield t.text()}))}},472:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=n.normalizeSongName=n.RATING_TARGET_SONG_NAME_PREFIX=n.DX_SONG_NAME_SUFFIX=void 0;const o=t(6420);n.DX_SONG_NAME_SUFFIX=" [DX]",n.RATING_TARGET_SONG_NAME_PREFIX="▶ ",n.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,t,r){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),1===r?e+n.DX_SONG_NAME_SUFFIX:e};let c={};n.isNicoNicoLink=function(e){return r(this,void 0,void 0,(function*(){if(c.nico===e)return!0;if(c.original===e)return!1;const n=(yield(0,o.fetchPage)("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?c.nico=e:c.original=e,n}))}},87:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getSongsByVersion=n.filterSongsByVersion=n.getSongProperties=n.buildSongPropsMap=void 0;const r=t(8379),o=t(472),c=/\bdx\s*:\s*([0-9]+)/,i=/\blv\s*:\s*(\[.+?\])/,s=/\bv\s*:\s*(-?[0-9]+)/,a=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,l=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/,u=[{dx:1,debut:16,lv:[-2,-6,8.7,11,12.7],name:"秒針を噛む"},{dx:1,debut:16,lv:[-3,-6,8.8,12.8,0],name:"おジャ魔女カーニバル!!"},{dx:1,debut:15,lv:[-2,-6,8.8,11.8,0],name:"町かどタンジェント"},{dx:1,debut:16,lv:[-3,-6,9,12.9,0],name:"KING"},{dx:1,debut:16,lv:[-4,-7,9,12.2,0],name:"雨とペトラ"},{dx:1,debut:16,lv:[-3,-6,8.8,12.5,0],name:"ネガティブ進化論"},{dx:1,debut:16,lv:[-4,-6,9.2,12.8,0],name:"永遠にゲームで対戦したいキリタン",nickname:"キリタン"},{dx:1,debut:16,lv:[-4,-7,10,13.2,0],name:"ロストワードクロニカル"},{dx:1,debut:16,lv:[-3,-6,8.8,12.4,0],name:"今、誰が為のかがり火へ",nickname:"誰が為のかがり火へ"},{dx:1,debut:16,lv:[-3,-7,10.7,13.1,0],name:"Paradisoda"},{dx:1,debut:16,lv:[-4,7.8,10.8,13.8,0],name:"Never Give Up!"},{dx:1,debut:16,lv:[-4,7.8,11,14,0],name:"Starry Colors"},{dx:1,debut:16,lv:[-5,-7.7,10,13,0],name:"時計の国のジェミニ"},{dx:1,debut:15,lv:[-6,-8,12.8,14.7,0],name:"BREaK! BREaK! BREaK!"},{dx:1,debut:15,lv:[-5,-7.7,10.7,14.1,0],name:"ワンダーシャッフェンの法則",nickname:"ワンダーシャッフェン"},{dx:1,debut:16,lv:[5,8.2,12.2,14.4,0],name:"宿星審判"}];function f(e){const n=e.match(c),t=e.match(i),u=e.match(s),f=e.match(a),d=e.match(l);if(n&&t&&u&&f){let e=JSON.parse(t[1]);if(e.length>r.DIFFICULTIES.length){const n=e.pop();e[r.DIFFICULTIES.length-1]=n}return{dx:parseInt(n[1]),lv:e,debut:Math.abs(parseInt(u[1])),name:(0,o.normalizeSongName)(f[1]),nickname:d&&d[1]}}}function d(e,n){e.has(n.name)||e.set(n.name,[]);const t=e.get(n.name),r=t.findIndex((e=>n.dx===e.dx));r>=0?t[r]=n:t.push(n)}n.buildSongPropsMap=function(e){const n=e.split("\n"),t=new Map;for(const e of n){const n=f(e);n&&d(t,n)}for(const e of u)d(t,e);return t},n.getSongProperties=function(e,n,t,r){let c=e.get(n);if(c&&c.length>0){if(c.length>1&&(c=c.filter((e=>e.dx===r)),c.length>1)){const e=(0,o.getSongNickname)(n,t,r);c=c.filter((n=>n.nickname===e))}if(c.length)return c.length>1&&(console.warn(`Found multiple song properties for ${n} ${r}`),console.warn(c)),c[0]}console.warn(`Could not find song properties for ${n} ${r}`)},n.filterSongsByVersion=function(e,n,t,r){const o=[];for(const c of e){const{dx:e,name:i,nickname:s}=c;let a=n.get(i);a&&a.length>0&&(a.length>1&&(a=a.filter((n=>n.dx===e)),a.length>1&&(a=a.filter((e=>e.nickname===s)))),a.length)?(a.length>1&&(console.warn(`Found multiple song properties for ${i} ${e?"[DX]":""}`),console.warn(a)),(0===r&&a[0].debut===t||1===r&&a[0].debut<t)&&o.push(a[0])):console.warn(`Could not find song properties for ${i} ${e?"[DX]":""}`)}return o},n.getSongsByVersion=function(e,n){const t=[];return e.forEach((e=>e.forEach((e=>{e.debut===n&&t.push(e)})))),t}},6420:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const o=t(2347),c=t(6510),i=t(472);function s(e){return r(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function a(e){return r(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=(0,i.getSongIdx)(e),r=(0,o.getSongName)(e),c=(0,o.getChartType)(e);let s;"Link"===r&&(s=(yield(0,i.isNicoNicoLink)(n))?"Link(nico)":"Link(org)"),t.push({dx:c,name:r,nickname:s})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=s,n.fetchGameVersion=function e(n){return r(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?parseInt(t.value):e(n=yield s("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return r(this,void 0,void 0,(function*(){if(!e){const n=c.SELF_SCORE_URLS.MASTER;e=yield s(n)}return yield a(e)}))},n.fetchNewSongs=function(e){return r(this,void 0,void 0,(function*(){const n=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield a(n)}))},n.getPostMessageFunc=function(e,n){return(t,r)=>{const o={action:t,payload:r};e.postMessage(o,n)}}},3153:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(8379),c=t(2347),i=t(6510),s=t(8080),a=t(9268),l=t(6685),u=t(472),f=t(87),d=t(6420);!function(e){const n={en_US:{None:"-- Choose Sort Option --",RankAsc:"Rank (low → high)",RankDes:"Rank (high → low)",ApFcAsc:"AP/FC (FC → AP+)",ApFcDes:"AP/FC (AP+ → FC)",SyncAsc:"Sync (FS → FDX+)",SyncDes:"Sync (FDX+ → FS)",VsResultAsc:"VS Result (Lose → Win)",VsResultDes:"VS Result (Win → Lose)",LvAsc:"Level (low → high)",LvDes:"Level (high → low)",InLvAsc:"Internal Level (low → high)",InLvDes:"Internal Level (high → low)",DxStarDes:"DX-Star (5 → none)",DxStarAsc:"DX-Star (none → 5)"},zh_TW:{None:"-- 選擇排序方式 --",RankAsc:"達成率 (由低至高)",RankDes:"達成率 (由高至低)",ApFcAsc:"AP/FC (由 FC 到 AP+)",ApFcDes:"AP/FC (由 AP+ 到 FC)",SyncAsc:"Sync (由 FS 到 FDX+)",SyncDes:"Sync (由 FDX+ 到 FS)",VsResultAsc:"對戰結果 (由敗北到勝利)",VsResultDes:"對戰結果 (由勝利到敗北)",LvAsc:"譜面等級 (由低至高)",LvDes:"譜面等級 (由高至低)",InLvAsc:"內部譜面等級 (由低至高)",InLvDes:"內部譜面等級 (由高至低)",DxStarDes:"DX-Star (5 星至無星)",DxStarAsc:"DX-Star (無星至 5 星)"}}[(0,s.getInitialLanguage)()],t=["1","2","3","4","5","6","7","7+","8","8+","9","9+","10","10+","11","11+","12","12+","13","13+","14","14+","15"],h=["SSS+","SSS","SS+","SS","S+","S","AAA","AA","A","BBB","BB","B","C","D",null],g=["AP+","AP","FC+","FC",null],S=["FDX+","FDX","FS+","FS",null],m=["WIN","DRAW","LOSE"],p=[null,"✦","✦✦","✦✦✦","✦✦✦✦","✦✦✦✦✦"],_=location.pathname.includes("battleStart"),v=location.search.includes("scoreType=1"),y={};function L(e){const n=e-Math.floor(e);return n>.95?1:n>.65&&n<.69?.7:0}function A(e){const n=L(e);return n?n<1?"UNKNOWN LEVEL "+Math.floor(e)+"+":"UNKNOWN LEVEL "+e.toFixed(0):"INTERNAL LEVEL "+e.toFixed(1)}function E(e,n){const t=new Map;n&&e.reverse();for(const n of e)t.set(n,[]);return n&&e.reverse(),t}function x(n,t,r){let o=[];return n.forEach(((n,c)=>{if(n.length){const i=e.createElement("div");i.className="screw_block m_15 f_15",i.innerText=function(e,n,t,r){let o=3===e?"":"◖";switch(e){case 1:o+="LEVEL "+n;break;case 2:o+=n?"RANK "+n:"NO RANK";break;default:o+=n||" ― "}return 3!==e&&(o+="◗"),o+"　　　"+t+"/"+r}(t,c,n.length,r),o.push(i),o=o.concat(n)}})),o}function b(e){return e.getElementsByClassName("music_lv_block")[0]}function D(e,n="lv"){var t;return null===(t=b(e))||void 0===t?void 0:t.dataset[n]}function I(e,n){const t=b(e);if(!t.dataset.inlv){const e=L(n);t.dataset.inlv=n.toFixed(2);const r=(e?"*":"")+n.toFixed(1);r.length>4&&(t.classList.remove("f_14"),t.classList.add("f_13")),t.innerText=r}}function T(e,n,t){let r=0;return t&&(r=t.lv[n],"number"!=typeof r?r=0:r<0&&(r=Math.abs(r)-.02)),r||(0,a.getDefaultLevel)(D(e))-.02}function N(e,n){const t=D(e,"inlv");if(t)return parseFloat(t);const r=(0,c.getSongName)(e),i=(0,c.getChartType)(e),s=o.DIFFICULTIES.indexOf((0,c.getChartDifficulty)(e));let a;if("Link"===r){const t=_?null:(0,u.getSongIdx)(e);y.nicoLinkIdx===t?a=(0,f.getSongProperties)(n,r,"niconico",i):y.originalLinkIdx===t&&(a=(0,f.getSongProperties)(n,r,"",i)),console.log(a)}else a=(0,f.getSongProperties)(n,r,"",i);return T(e,s,a)}function k(e,n){const t=N(e,y.songProps),r=N(n,y.songProps);return t<r?-1:r<t?1:0}function F(e,n){const r=E(t,n);return e.forEach((e=>{const n=D(e);r.get(n).push(e)})),y.songProps&&r.forEach((e=>{e.sort(k),n&&e.reverse()})),x(r,1,e.length)}function w(e){const n=_?e.querySelector("tr:last-child td:last-child img:last-child"):e.children[0].querySelector("img.f_r:not(.music_kind_icon):last-of-type");if(!n)return null;const t=new URL(n.src).pathname,r=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf("."));return"back"===r?null:r.replace("p","+").toUpperCase()}function P(e){const n=_?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n?parseFloat(n.innerText):n}function M(e,n){const t=P(e),r=P(n);return null===t&&null===r?0:null===r?-1:null===t?1:t>r?-1:t<r?1:0}function R(e,n){const t=E(h,n);return e.forEach((e=>{const n=w(e);try{t.get(n).push(e)}catch(r){console.warn(n),t.get(null).push(e)}})),v||t.forEach(((e,t)=>{e.sort(M),null!==t&&n&&e.reverse()})),x(t,2,e.length)}function C(e){const n=_?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf("."),c=t.substring(r+1,o);return"back"===c?null:c.replace("ap","AP").replace("p","+").toUpperCase()}function $(e,n){const t=E(g,n);return e.forEach((e=>{const n=C(e);t.get(n).push(e)})),x(t,0,e.length)}function O(e){const n=_?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf("."),c=t.substring(r+1,o);return"back"===c?null:c.replace("sd","DX").replace("p","+").toUpperCase()}function U(e,n){const t=E(S,n);return e.forEach((e=>{const n=O(e);t.get(n).push(e)})),x(t,0,e.length)}function q(e,n){const t=E(m,n);return e.forEach((e=>{const n=function(e){const n=e.querySelector("tr:first-child td:nth-child(2) img").src.replace(/\?ver=.*$/,""),t=n.lastIndexOf("_"),r=n.lastIndexOf(".");return n.substring(t+1,r).toUpperCase()}(e);t.get(n).push(e)})),x(t,0,e.length)}function V(e){if(_){const n=e.querySelector("tr:first-child td:last-child img");if(!n)return null;const t=new URL(n.src).pathname,r=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf("."));try{const e=parseInt(r);return(e<0||e>=p.length)&&console.warn("invalid dx star "+r),p[e]}catch(e){console.warn("invalid dx star "+r)}return null}if(e.dataset.dxStar)return"null"===e.dataset.dxStar?null:e.dataset.dxStar;const n=function(e){const n=e.querySelectorAll(".music_score_block");if(2!==n.length)return null;const t=n[1].childNodes,r=t[t.length-1];if(!r.wholeText)return null;const o=r.wholeText.split("/");if(2!==o.length)return null;try{const e=parseInt(o[0].replace(",","").trim())/parseInt(o[1].replace(",","").trim());if(e>=.97)return p[5];if(e>=.95)return p[4];if(e>=.93)return p[3];if(e>=.9)return p[2];if(e>=.85)return p[1]}catch(e){console.warn(e)}return null}(e);return e.dataset.dxStar=n,n}function X(e,n){const t=E(p,n);return e.forEach((e=>{const n=V(e);t.get(n).push(e)})),x(t,3,e.length)}function G(e,n){const t=new Map,r=[];for(const n of Array.from(e)){const e=N(n,y.songProps);t.set(e,!0),r.push(e)}const o=Array.from(t.keys()).sort(((e,n)=>e>n?-1:e<n?1:0));n&&o.reverse();const c=new Map;return o.forEach((e=>{c.set(A(e),[])})),Array.from(e).forEach(((e,n)=>{c.get(A(r[n])).push(e)})),x(c,0,e.length)}function H(){return e.body.querySelectorAll(".main_wrapper.t_c .w_450.m_15.f_0")}function B(t,r){const o=n[t];let c=e.getElementsByClassName("option_"+t)[0];return c||(c=e.createElement("option"),c.className="option_"+t,c.innerText=o,c.value=t),r?c.classList.add("d_n"):c.classList.remove("d_n"),c}_?function(){var n,t;r(this,void 0,void 0,(function*(){const r=yield(0,d.fetchPage)(i.SELF_SCORE_URLS["Re:MASTER"]),o=null===(n=r.querySelector(".music_scorelist_table"))||void 0===n?void 0:n.parentElement;if(!o)return void console.warn("could not find summary table");v||null===(t=o.querySelector("tr:last-child"))||void 0===t||t.remove();const c=H(),s=c.length;setTimeout((function(){const e={};for(const n of h)e[n]=0;c.forEach((n=>{e[w(n)]++}));for(let n=1;n<9;n++)e[h[n]]+=e[h[n-1]];const n=o.querySelectorAll("tr:first-child .f_11");n[0].innerHTML=`${e.A}/${s}`,n[1].innerHTML=`${e.S}/${s}`,n[2].innerHTML=`${e["S+"]}/${s}`,n[3].innerHTML=`${e.SS}/${s}`,n[4].innerHTML=`${e["SS+"]}/${s}`,n[5].innerHTML=`${e.SSS}/${s}`,n[6].innerHTML=`${e["SSS+"]}/${s}`}),0),setTimeout((function(){const e={};for(const n of g)e[n]=0;c.forEach((n=>{e[C(n)]++}));for(let n=1;n<4;n++)e[g[n]]+=e[g[n-1]];const n=o.querySelectorAll("tr:nth-child(2) .f_11");n[0].innerHTML=`${e.FC}/${s}`,n[1].innerHTML=`${e["FC+"]}/${s}`,n[2].innerHTML=`${e.AP}/${s}`,n[3].innerHTML=`${e["AP+"]}/${s}`}),0),setTimeout((function(){const e={};for(const n of S)e[n]=0;c.forEach((n=>{e[O(n)]++}));for(let n=1;n<4;n++)e[S[n]]+=e[S[n-1]];const n=o.querySelectorAll("tr:nth-child(2) .f_11");n[4].innerHTML=`${e.FS}/${s}`,n[5].innerHTML=`${e["FS+"]}/${s}`,n[6].innerHTML=`${e.FDX}/${s}`,n[7].innerHTML=`${e["FDX+"]}/${s}`}),0),v&&setTimeout((function(){const e={};for(const n of p)e[n]=0;c.forEach((n=>{e[V(n)]++}));for(let n=4;n>=1;n--)e[p[n]]+=e[p[n+1]];const n=o.querySelectorAll("tr:last-child .f_11");n[0].innerHTML=`${e[p[1]]}/${s}`,n[1].innerHTML=`${e[p[2]]}/${s}`,n[2].innerHTML=`${e[p[3]]}/${s}`,n[3].innerHTML=`${e[p[4]]}/${s}`,n[4].innerHTML=`${e[p[5]]}/${s}`}),0),e.querySelector(".town_block + .see_through_block").insertAdjacentElement("afterend",o)}))}():e.querySelectorAll("div.w_450.m_15.p_r.f_0[id]").forEach((e=>{var n,t;e.style.removeProperty("display"),e.style.removeProperty("margin-top"),e.id.includes("sta_")?null===(n=e.querySelector(".music_kind_icon_dx"))||void 0===n||n.remove():null===(t=e.querySelector(".music_kind_icon_standard"))||void 0===t||t.remove();const r=e.querySelector("img:nth-child(2)");r.onclick=null,r.className="music_kind_icon"})),Array.from(e.getElementsByClassName("music_lv_block")).forEach((e=>{e.dataset.lv||(e.dataset.lv=e.innerText)}));const W=e.body.querySelector(".main_wrapper.t_c .screw_block");W&&(W.insertAdjacentElement("beforebegin",function(){const n="scoreSortContainer";let t=e.getElementById(n);if(t)return t;t=e.createElement("div"),t.id=n,t.className="w_450 m_15";const r=e.createElement("select");return r.className="w_300 m_10",r.addEventListener("change",(n=>{!function(n){const t=H(),r=Array.from(e.body.querySelectorAll(".main_wrapper.t_c .screw_block"));let o=null;switch(n){case"RankDes":o=R(t,!1);break;case"RankAsc":o=R(t,!0);break;case"ApFcDes":o=$(t,!1);break;case"ApFcAsc":o=$(t,!0);break;case"SyncDes":o=U(t,!1);break;case"SyncAsc":o=U(t,!0);break;case"VsResultAsc":o=q(t,!0);break;case"VsResultDes":o=q(t,!1);break;case"LvDes":o=F(t,!0);break;case"LvAsc":o=F(t,!1);break;case"InLvDes":o=G(t,!1);break;case"InLvAsc":o=G(t,!0);break;case"DxStarAsc":o=X(t,!1);break;case"DxStarDes":o=X(t,!0);break;default:return}for(let e=1;e<r.length;e++)r[e].remove();const c=r[0];for(let e=o.length-1;e>=1;e--)c.insertAdjacentElement("afterend",o[e]);c.innerText=o[0].innerText}(n.target.value)})),r.append(B("None")),r.append(B("RankAsc")),r.append(B("RankDes")),r.append(B("ApFcAsc")),r.append(B("ApFcDes")),r.append(B("SyncAsc")),r.append(B("SyncDes")),_?(v&&(r.append(B("DxStarDes")),r.append(B("DxStarAsc"))),r.append(B("VsResultAsc")),r.append(B("VsResultDes"))):(r.append(B("DxStarDes")),r.append(B("DxStarAsc"))),r.append(B("LvAsc")),r.append(B("LvDes")),r.append(B("InLvAsc",!0)),r.append(B("InLvDes",!0)),t.append(r),t}()),function(){r(this,void 0,void 0,(function*(){const n=yield(0,d.fetchGameVersion)(e.body),t=(0,f.buildSongPropsMap)(yield(0,l.iWantSomeMagic)(n)),r=Array.from(H());for(const e of r){const n=(0,c.getSongName)(e);if("Link"===n){const r=o.DIFFICULTIES.indexOf((0,c.getChartDifficulty)(e));try{const o=(0,u.getSongIdx)(e);let c;(yield(0,u.isNicoNicoLink)(o))?(y.nicoLinkIdx=o,c=(0,f.getSongProperties)(t,n,"niconico",0)):(y.originalLinkIdx=o,c=(0,f.getSongProperties)(t,n,"",0)),I(e,T(e,r,c))}catch(n){I(e,T(e,r))}}else I(e,N(e,t))}console.log("enabling internal level sort"),B("InLvAsc",!1),B("InLvDes",!1),y.songProps=t}))}())}(document)}},n={};!function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={exports:{}};return e[r].call(c.exports,c,c.exports,t),c.exports}(3153)})();