function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire723b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire723b=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.8ea2b058.js","iYZjP":"symbol.e0e566b2.svg","9bKPF":"no-poster.faaddcd9.png","eM9ss":"library.1538fba8.js"}'));var s,a=r("93eWd");const o=`<li class="movies-navigation__item">\n    <button\n      type="button"\n      class="movies-navigation__arrow-btn"\n      data-move="backward"\n    >\n      <svg class="movies-navigation__icon-arrow">\n        <use href="${s=new URL(r("kyEFX").resolve("iYZjP"),import.meta.url).toString()}#icon-arrow-left"></use>\n      </svg>\n    </button>\n  </li>\n  <li class="movies-navigation__item">\n    <ul class="number-page">\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">1</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">13</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">14</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">15</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">16</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">17</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">20</button>\n      </li>\n    </ul>\n  </li>\n  <li class="movies-navigation__item">\n    <button\n      type="button"\n      class="movies-navigation__arrow-btn"\n      data-move="forward"\n    >\n      <svg class="movies-navigation__icon-arrow">\n        <use href="${s}#icon-arrow-right"></use>\n      </svg>\n    </button>\n  </li>`,l=document.querySelector(".movies-navigation");function c(e,t){let n=1;l.innerHTML="",l.insertAdjacentHTML("afterbegin",o);const i=document.querySelector('[data-move="backward"]'),r=document.querySelector('[data-move="forward"]'),s=document.querySelector(".number-page"),a=document.querySelector(".card-set");function c(e){e.removeAttribute("disabled"),e.classList.remove("movies-navigation__arrow-btn--disabled")}function u(e){e.setAttribute("disabled",""),e.classList.add("movies-navigation__arrow-btn--disabled")}function d(){if(e<6)return r.style.display="none",i.style.display="none",function(){let t="";s.innerHTML="";for(let n=0;n<e+2;n+=1)t+=`<li class="number-page__item">\n                <button type="button" class="number-page__btn">${n}</button>\n              </li>`;s.insertAdjacentHTML("afterbegin",t)}(),g(),_(),void s.children[1].firstElementChild.classList.add("number-page__btn--current");g(),v(),s.children[1].firstElementChild.classList.add("number-page__btn--current"),s.lastElementChild.firstElementChild.textContent=String(e),u(i),c(r),h(),E()}function m(){document.querySelector(".number-page__btn--current").classList.remove("number-page__btn--current")}function f(){m(),s.children[n].firstElementChild.classList.add("number-page__btn--current")}function b(){m(),s.children[n-e+5].firstElementChild.classList.add("number-page__btn--current")}function _(){s.lastElementChild.style.display="none",s.children[s.children.length-2].style.marginRight="0px"}function g(){s.firstElementChild.style.display="none"}function p(){s.firstElementChild.style.display="list-item"}function v(){s.lastElementChild.style.display="list-item",s.children[s.children.length-2].style.marginRight="16px"}function y(){for(let e=1;e<s.children.length-1;e+=1){const t=n-3+e;s.children[e].firstElementChild.textContent=t.toString()}}function h(){for(let e=1;e<s.children.length-1;e+=1){const t=e;s.children[e].firstElementChild.textContent=t.toString()}}function w(){for(let t=1;t<s.children.length-1;t+=1){const n=e-5+t;s.children[t].firstElementChild.textContent=n.toString()}}function E(){window.innerWidth<768&&(g(),_())}d(),i.addEventListener("click",(function(){n-=1,t(n),a.scrollIntoView(),c(r),1===n&&u(i);if(n>e-3)return void b();n<4&&(g(),f());n>=3&&n<=e-3&&(v(),y());E()})),r.addEventListener("click",(function(){n+=1,t(n),a.scrollIntoView(),c(i),n===e&&u(r);if(n<4)return void f();n>e-3&&(_(),b());n>=4&&n<=e-2&&(p(),y());E()})),s.addEventListener("click",(function(o){if("BUTTON"!==o.target.nodeName)return;if(o.target.classList.contains("number-page__btn--current"))return;if(n=Number(o.target.textContent),t(n),a.scrollIntoView(),1===n)return m(),void d();if(n===e)return m(),void function(){_(),e>5&&p();if(s.children[e>=5?5:e].firstElementChild.classList.add("number-page__btn--current"),c(i),u(r),e<=5)return void h();w()}();n>=4&&n<=e-3&&(m(),s.children[3].firstElementChild.classList.add("number-page__btn--current"),p(),v(),c(r),c(i),y());if(n<4)return f(),g(),e>5&&v(),c(r),void h();n>e-3&&(b(),_(),e>5&&p(),c(r),c(i),w());E()}))}var u,d=r("epB3k");a=r("93eWd");u=new URL(r("kyEFX").resolve("9bKPF"),import.meta.url).toString();var m,f=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,g=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,h=v||y||Function("return this")(),w=Object.prototype.toString,E=Math.max,L=Math.min,S=function(){return h.Date.now()};function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==w.call(e)}(e))return NaN;if($(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=$(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=_.test(e);return n||g.test(e)?p(e.slice(2),n?2:8):b.test(e)?NaN:+e}m=function(e,t,n){var i,r,s,a,o,l,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,s=r;return i=r=void 0,c=t,a=e.apply(s,n)}function b(e){return c=e,o=setTimeout(g,t),u?f(e):a}function _(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=s}function g(){var e=S();if(_(e))return p(e);o=setTimeout(g,function(e){var n=t-(e-l);return d?L(n,s-(e-c)):n}(e))}function p(e){return o=void 0,m&&i?f(e):(i=r=void 0,a)}function v(){var e=S(),n=_(e);if(i=arguments,r=this,l=e,n){if(void 0===o)return b(l);if(d)return o=setTimeout(g,t),f(l)}return void 0===o&&(o=setTimeout(g,t)),a}return t=C(t)||0,$(n)&&(u=!!n.leading,s=(d="maxWait"in n)?E(C(n.maxWait)||0,t):s,m="trailing"in n?!!n.trailing:m),v.cancel=function(){void 0!==o&&clearTimeout(o),c=0,i=l=r=o=void 0},v.flush=function(){return void 0===o?a:p(S())},v};const x=document.querySelector(".card-set"),j=document.querySelector(".header__form-input"),T=document.getElementById("spinner");j.addEventListener("input",e(m)((function(e){e.preventDefault(),M=e.target.value.trim(),""===M?k():async function(){c(await O(),O)}()}),1e3));let M="";async function H(e){try{const{results:t,total_pages:n,total_results:i}=await(0,d.getSearchQuery)(M,e);return 0===i?(F.classList.remove("is-hidden"),setTimeout((()=>{F.classList.add("is-hidden")}),3e3),k()):F.classList.add("is-hidden"),{movies:t,totalPages:n}}catch(e){alert(e)}}async function O(e){T.classList.add("spinner");let t=null;localStorage.getItem("genres")?t=JSON.parse(localStorage.getItem("genres")):(t=await async function(){try{const{genres:e}=await(0,d.getGenreList)();return e}catch(e){alert(e)}}(),localStorage.setItem("genres",JSON.stringify(t)));const{movies:n,totalPages:i}=await H(e),r=n.map((e=>function(e,t){const{genre_ids:n,original_title:i,id:r,release_date:s,title:a,poster_path:o}=e,l=function(e){let t="";switch(e.length){case 0:t='<li class="card-set__genre-movie">Genre\'s list is empty</li>';break;case 1:t=`<li class="card-set__genre-movie">${e[0]}</li>`;break;case 2:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]}</li>`;break;case 3:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[2]}</li>`;break;default:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">Other</li>`}return t}(function(e,t){return e.map((e=>t.find((t=>t.id===e)).name))}(n,t)),c=s?new Date(s).getFullYear().toString():"Unknown";return`\n        <li class="card-set__item" data-id="${r}">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="${o?`https://image.tmdb.org/t/p/original${o}`:`${u}`}"\n                alt="${i}"\n                class="card-set__img"  \n            />\n            </div>\n            <h3 class="card-set__title">${a}</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ${l}\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ${c}</span>\n            </div>\n        </li>`}(e,t))).join("");return x.innerHTML="",x.insertAdjacentHTML("afterbegin",r),T.classList.remove("spinner"),i}async function k(){c(await(0,a.renderPopularMovies)(),a.renderPopularMovies)}const F=document.querySelector(".header__error-text");r("fQE3M"),r("cddKH"),async function(){c(await(0,a.renderPopularMovies)(),a.renderPopularMovies)}();
//# sourceMappingURL=index.8ea2b058.js.map