(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <img src="https://image.tmdb.org/t/p/w500'+e.escapeExpression("function"==typeof(r=null!=(r=i(n,"poster_path")||(null!=t?i(t,"poster_path"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"poster_path",hash:{},data:o,loc:{start:{line:10,column:45},end:{line:10,column:60}}}):r)+'" class="modal-movie-poster" loading="lazy" />\r\n'},3:function(e,t,n,a,o){return'    <img src="https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg"\r\n        class="modal-movie-poster" loading="lazy" />\r\n'},5:function(e,t,n,a,o){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <span class="modal-movie-genre-name">'+e.escapeExpression("function"==typeof(r=null!=(r=i(n,"name")||(null!=t?i(t,"name"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:o,loc:{start:{line:38,column:57},end:{line:38,column:65}}}):r)+" </span>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,i,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<article class="modal-movie-wrapper" id="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:s)===c?i.call(l,{name:"id",hash:{},data:o,loc:{start:{line:1,column:41},end:{line:1,column:47}}}):i)+'">\r\n        <button class="close-button" type="button">\r\n            <svg class="icon-close" width="24px" height="24px" fill="#000000" viewbox="0 0 32 32"\r\n                xmlns="http://www.w3.org/2000/svg">\r\n                <path stroke="black" stroke-width="2.5" d="M8.533 8.533l14.933 14.933m-14.933.001L23.466 8.534" />\r\n            </svg>\r\n        </button>\r\n'+(null!=(r=d(n,"if").call(l,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.program(3,o,0),data:o,loc:{start:{line:8,column:4},end:{line:14,column:11}}}))?r:"")+'    <div class="modal-movie-information">\r\n        <h2 class="modal-movie-title">'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:s)===c?i.call(l,{name:"title",hash:{},data:o,loc:{start:{line:16,column:38},end:{line:16,column:47}}}):i)+'</h2>\r\n        <ul class="modal-movie-data">\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Vote / Votes</p>\r\n                <p class="modal-movie-description">\r\n                    <span class="modal-movie-description-vote">'+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:s)===c?i.call(l,{name:"vote_average",hash:{},data:o,loc:{start:{line:21,column:63},end:{line:21,column:79}}}):i)+'</span>\r\n                    <span class="modal-movie-data-slash">/</span>\r\n                    <span class="modal-movie-description-votes">'+u(typeof(i=null!=(i=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?i:s)===c?i.call(l,{name:"vote_count",hash:{},data:o,loc:{start:{line:23,column:64},end:{line:23,column:78}}}):i)+'</span>\r\n                </p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Popularity</p>\r\n                <p class="modal-movie-description">'+u(typeof(i=null!=(i=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?i:s)===c?i.call(l,{name:"popularity",hash:{},data:o,loc:{start:{line:28,column:51},end:{line:28,column:65}}}):i)+'</p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Original Title</p>\r\n                <p class="modal-movie-description-title">'+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:32,column:57},end:{line:32,column:75}}}):i)+'</p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Genre</p>\r\n                <p class="modal-movie-description">\r\n'+(null!=(r=d(n,"each").call(l,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(5,o,0),inverse:e.noop,data:o,loc:{start:{line:37,column:20},end:{line:39,column:29}}}))?r:"")+'                </p>\r\n            </li>\r\n        </ul>\r\n        <p class="modal-movie-about">About</p>\r\n        <p class="modal-movie-descript">'+u(typeof(i=null!=(i=d(n,"overview")||(null!=t?d(t,"overview"):t))?i:s)===c?i.call(l,{name:"overview",hash:{},data:o,loc:{start:{line:44,column:40},end:{line:44,column:52}}}):i)+'</p>\r\n        <div class="buttons-wrapper movie-button">\r\n            <input type="checkbox" class="visuallyhidden watched-checkbox">\r\n            <span class="button add-watched-button" data-movieId="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:s)===c?i.call(l,{name:"id",hash:{},data:o,loc:{start:{line:47,column:66},end:{line:47,column:72}}}):i)+'">add to watched</span>\r\n            <input type="checkbox" class="visuallyhidden queue-checkbox ">\r\n            <span class="button add-queue-button" data-movieId="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:s)===c?i.call(l,{name:"id",hash:{},data:o,loc:{start:{line:49,column:64},end:{line:49,column:70}}}):i)+'">add to queue</span>\r\n        </div>\r\n\r\n    </div>\r\n</article>'},useData:!0})},"2oSf":function(e,t){var n=document.querySelector(".theme-switch__toggle"),a=function(){"light-theme"!==localStorage.getItem("theme")&&localStorage.getItem("theme")||(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),"dark-theme"===localStorage.getItem("theme")&&(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),n.checked=!0)};a(),n.addEventListener("input",(function(e){e.target.checked?localStorage.setItem("theme","dark-theme"):localStorage.setItem("theme","light-theme"),a()}))},"Dv/5":function(e,t,n){},KHso:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="moviesList-item moviesList-item-js" data-movieId="'+c(typeof(r=null!=(r=u(n,"id")||(null!=t?u(t,"id"):t))?r:l)===s?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:3,column:65},end:{line:3,column:71}}}):r)+'">\r\n        <img src="https://image.tmdb.org/t/p/w300'+c(typeof(r=null!=(r=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:l)===s?r.call(i,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:49},end:{line:4,column:64}}}):r)+'" alt="It seems the poster is missing"\r\n            onerror="this.onerror=null;this.src=\'https://placeimg.com/200/300/animals\';" class="moviesList-poster"\r\n            data-movieId="'+c(typeof(r=null!=(r=u(n,"id")||(null!=t?u(t,"id"):t))?r:l)===s?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:6,column:26},end:{line:6,column:32}}}):r)+'" />\r\n        <a class="moviesList-movieName moviesList-movieName-js">'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:l)===s?r.call(i,{name:"title",hash:{},data:o,loc:{start:{line:7,column:64},end:{line:7,column:73}}}):r)+'</a>\r\n        <p class="moviesList-movieGenreAndYear moviesList-movieGenreAndYear-js">'+c(typeof(r=null!=(r=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?r:l)===s?r.call(i,{name:"genre_ids",hash:{},data:o,loc:{start:{line:8,column:80},end:{line:8,column:93}}}):r)+" | "+c(typeof(r=null!=(r=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?r:l)===s?r.call(i,{name:"release_date",hash:{},data:o,loc:{start:{line:8,column:96},end:{line:8,column:112}}}):r)+"</p>\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return'<ul class="moviesList moviesList-js">\r\n'+(null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:4},end:{line:10,column:13}}}))?r:"")+"</ul>\r\n\r\n\r\n\r\n"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("wcNg"),n("FdtR"),n("JBxO"),n("WB5j"),n("lmye"),n("IlJM"),n("D/wG");var a,o=n("2c84"),r=n.n(o),i=n("KHso"),l=n.n(i),s=((a={home:document.querySelector(".home-link"),library:document.querySelector(".lib-link"),header:document.querySelector(".header"),search:document.querySelector(".form-search"),buttonHeader:document.querySelector(".button-header"),hits:document.querySelector("movie-searchTag"),logo:document.querySelector(".logo-icon"),headerTitle:document.querySelector(".link-title"),backgroundHome:document.querySelector(".header-home"),gallery:document.querySelector(".movies-container"),pagination:document.querySelector(".pagination"),footer:document.querySelector("footer"),myLibraryBtn:document.querySelector(".lib-link"),inputForm:document.querySelector(".form-search"),homeBtn:document.querySelector(".home-link"),watchedBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queque"),body:document.querySelector("body"),errorContainerRef:document.querySelector(".error-container-js"),movieInputRef:document.querySelector(".movie-searchTag-js"),myLibraryButton:document.querySelector(".lib-link"),filmCard:document.querySelector(".film-card"),movieModal:document.querySelector(".movie-modal"),backdrop:document.querySelector(".backdrop"),movieContainer:document.querySelector(".movies-container-js"),openModalHeaderBtn:document.querySelector("[data-modal-header-open]"),modalHeader:document.querySelector(".js-lightbox-header"),closeModalHeaderBtn:document.querySelector(".lightbox-button-header"),overlayHeader:document.querySelector(".lightbox-overlay-header"),openModalFooterBtn:document.querySelector("[data-modal-footer-open]"),modalFooter:document.querySelector(".js-lightbox"),closeModalFooterBtn:document.querySelector(".lightbox-button"),overlayFooter:document.querySelector(".lightbox-overlay"),ourTeamRefs:document.querySelector(".footer-team-link")}).pagination=document.getElementById("pagination"),a);function c(e,t,n){t.innerHTML="",s.errorContainerRef.innerHTML="";var a=n(e);s.pagination.classList.remove("is-hidden"),t.insertAdjacentHTML("beforeend",a)}function u(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){u(r,a,o,i,l,"next",e)}function l(e){u(r,a,o,i,l,"throw",e)}i(void 0)}))}}var m="1690d1319b4e719ac3308f10c68ac649",h={moviesSearchActive:!1,searchTag:"",page:1,itemsPerPage:9,adult:"false",language:"en-US",validTimeWindow:"day",validMediaType:"movie",genresArray:[],errorHandler:function(e){s.pagination.classList.add("is-hidden"),s.errorContainerRef.innerHTML=e+". It is a server error , Pls just try again!"},fetchGenres:function(){var e=this,t="https://api.themoviedb.org/3/genre/movie/list?api_key="+m+"&language="+this.language;fetch(t).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.genres})).catch(this.errorHandler).then((function(t){e.genresArray=t.slice()}))},getMoviesWithGenreNames:function(e){var t=this;e.results.map((function(e){if(0===e.genre_ids.length)e.genre_ids.push("Genre");else{var n=e.genre_ids.map((function(e){return t.genresArray.find((function(t){return t.id===e})).name}));e.genre_ids=n.slice()}return""===e.release_date?e.release_date="Year":e.release_date=e.release_date.substring(0,4),e}))},resetPageToFirst:function(){this.page=1},get movieName(){return this.searchTag},set movieName(e){this.searchTag=e},searchMoviesbyTag:function(e){var t=this;void 0===e&&(e=1),this.moviesSearchActive=!0;var n="https://api.themoviedb.org/3/search/movie?api_key="+m+"&language="+this.language+"&query="+this.searchTag+"&page="+e+"&per_page="+this.itemsPerPage+"&include_adult="+this.adult;return this.fetchGenres(),fetch(n).then((function(e){if(e.ok)return e.json()})).then((function(e){return 0===e.results.length?(s.errorContainerRef.innerHTML="Search result not successful. Enter the correct movie name and try again",s.pagination.classList.add("is-hidden"),void(s.gallery.innerHTML="Search result not successful. Enter the correct movie name and try again")):(t.getMoviesWithGenreNames(e),e)})).catch(this.errorHandler)},getTrendingMovies:function(e){var t=this;void 0===e&&(e=1),this.moviesSearchActive=!1,s.movieInputRef.value="";var n="https://api.themoviedb.org/3/trending/"+this.validMediaType+"/"+this.validTimeWindow+"?api_key="+m+"&language="+this.language+"&page="+e+"&per_page="+this.itemsPerPage;return this.fetchGenres(),fetch(n).then((function(e){if(e.ok)return e.json()})).then((function(e){return t.getMoviesWithGenreNames(e),t.page+=1,e})).catch(this.errorHandler)},getFullMovieInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key="+m+"&language=en-US").then((function(e){if(e.ok)return e.json()})).then((function(e){return e})).catch(this.errorHandler)},searchMovies:function(e){var t=this;return d(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return void 0===e&&(e=1),s.pagination.classList.remove("is-hidden"),n.abrupt("return",t.searchMoviesbyTag(e).then((function(e){return c(e.results,s.gallery,l.a),e})));case 3:case"end":return n.stop()}}),n)})))()},showMoviesInTrend:function(e){var t=this;return d(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return void 0===e&&(e=1),s.pagination.classList.remove("is-hidden"),n.abrupt("return",t.getTrendingMovies(e).then((function(e){return c(e.results,s.gallery,l.a),e})));case 3:case"end":return n.stop()}}),n)})))()}},p=n("jffb"),v=n.n(p);function f(e){new r.a("pagination",{totalItems:e,itemsPerPage:20,visiblePages:5,template:{page:'<a href="#" class="tui-page-btn btn-page1 btn">{{page}}</a>',currentPage:'<a href="#" class="tui-page-btn btn-page1 active btn">{{page}}</a>',moveButton:'<a href ="#" class=" {{type}} custom-class-{{type}}"></a>',disabledMoveButton:'<a href ="#" class="{{type}} custom-class-{{type}}"></a>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",(function(e){console.log("poisk ili net",h.moviesSearchActive),!1===h.moviesSearchActive?h.showMoviesInTrend(e.page):!0===h.moviesSearchActive&&h.searchMovies(e.page)}))}function g(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){g(r,a,o,i,l,"next",e)}function l(e){g(r,a,o,i,l,"throw",e)}i(void 0)}))}}function b(){return k.apply(this,arguments)}function k(){return(k=y(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==h.moviesSearchActive){e.next=6;break}return e.next=3,h.showMoviesInTrend();case 3:t=e.sent,e.next=10;break;case 6:if(!0!==h.moviesSearchActive){e.next=10;break}return e.next=9,h.searchMovies();case 9:t=e.sent;case 10:f(t.total_results);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.movieInputRef.addEventListener("input",v()((function(e){var t=e.target.value;if(""==t)return h.moviesSearchActive=!1,void b();h.movieName=t,h.moviesSearchActive=!0,b()}),500)),b();n("Dv/5"),n("uQK7");var w=n("2mXJ"),L=n.n(w),S=(n("Xlt+"),{getFilms:function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):[]},putFilms:function(e,t){var n=this.getFilms(e),a=!1,o=n.indexOf(t);return-1===o?(n.unshift(t),a=!0):n.splice(o,1),localStorage.setItem(e,JSON.stringify(n)),{pushFilm:a,films:n}}}),M=n("jffb");function q(e){"Escape"===e.code&&x()}function x(){s.movieModal.classList.add("is-hidden"),s.body.classList.remove("modal-overflow"),window.removeEventListener("keydown",q),s.filmCard.innerHTML=""}function _(e,t,n,a,o){-1===e.indexOf(JSON.stringify(t.id))?(n.checked=!1,a.classList.remove("active"),a.textContent="ADD TO "+o):(n.checked=!0,a.classList.add("active"),a.textContent="REMOVE FROM "+o)}function E(e,t){var n=S.putFilms(t,e.target.dataset.movieid),a=n.pushFilm;n.films;a?(e.target.textContent="REMOVE FROM "+t,e.target.classList.add("active")):(e.target.textContent="ADD TO "+t,e.target.classList.remove("active"))}s.movieContainer.addEventListener("click",M((function(e){if("IMG"!==e.target.nodeName)return;s.movieModal.classList.remove("is-hidden"),s.body.classList.add("modal-overflow"),window.addEventListener("keydown",q),s.backdrop.addEventListener("click",x),h.getFullMovieInfo(e.target.dataset.movieid).then((function(e){var t=S.getFilms("watched"),n=S.getFilms("queue");s.filmCard.insertAdjacentHTML("beforeend",L()(e)),document.querySelector(".close-button").addEventListener("click",x);var a=document.querySelector(".watched-checkbox"),o=document.querySelector(".add-watched-button"),r=document.querySelector(".queue-checkbox"),i=document.querySelector(".add-queue-button");_(t,e,a,o,"watched"),_(n,e,r,i,"queue"),o.onclick=function(e){return E(e,"watched")},i.onclick=function(e){return E(e,"queue")}}))}),100));var T=n("yv2V"),P=n.n(T);function j(){window.removeEventListener("keydown",H),s.modalHeader.classList.remove("is-open")}function H(e){"Escape"===e.code&&j()}function F(e){e.target===e.currentTarget&&j()}function I(e){window.removeEventListener("keydown",O),s.modalFooter.classList.remove("is-open")}function O(e){"Escape"===e.code&&I()}function B(e){e.target===e.currentTarget&&I()}s.openModalHeaderBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",H),s.modalHeader.classList.add("is-open"),s.overlayHeader.addEventListener("click",F)})),s.closeModalHeaderBtn.addEventListener("click",j),s.openModalFooterBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",O),s.modalFooter.classList.add("is-open"),s.overlayFooter.addEventListener("click",B)})),s.closeModalFooterBtn.addEventListener("click",I);var A=P()([{photo:"https://avatars.githubusercontent.com/u/65783550?s=460&u=f03097692fcd208c83152edfe456583d97108396&v=4",name:"Marchenko Yaroslava",github:"https://github.com/FortuneFame",gmail:"fortunefame1710@gmail.com"}]);s.ourTeamRefs.insertAdjacentHTML("beforeend",A);n("y89P"),n("Muwe"),n("X5mX");s.home.addEventListener("click",(function(e){e.preventDefault(),s.header.classList.replace("header-lib","header-home"),s.search.classList.remove("is-hidden"),s.buttonHeader.classList.add("is-hidden"),s.library.classList.remove("is-active"),s.home.classList.add("is-active")})),s.home.addEventListener("click",b),s.library.addEventListener("click",(function(e){e.preventDefault(),s.header.classList.replace("header-home","header-lib"),s.buttonHeader.classList.remove("is-hidden"),s.search.classList.add("is-hidden"),s.home.classList.remove("is-active"),s.library.classList.add("is-active"),s.pagination.classList.add("is-hidden")}));var C=document.querySelector(".button-queque"),R=document.querySelector(".button-watched"),D=document.querySelector(".movies-container-js");function G(e){var t=S.getFilms(e),n=[];0===t.length&&(s.pagination.innerHTML=""),"watched"===e?(C.classList.remove("active"),R.classList.add("active")):(C.classList.add("active"),R.classList.remove("active")),D.innerHTML="<p>Movie list is empty</p>",t.map((function(t){h.getFullMovieInfo(t).then((function(t){n.push(t),function(e,t){new r.a("pagination",{totalItems:e.length,itemsPerPage:20,visiblePages:5,template:{page:'<a href="#" class="tui-page-btn btn-page1 btn">{{page}}</a>',currentPage:'<a href="#" class="tui-page-btn btn-page1 active btn">{{page}}</a>',moveButton:'<a href ="#" class=" {{type}} custom-class-{{type}}"></a>',disabledMoveButton:'<a href ="#" class="{{type}} custom-class-{{type}}"></a>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",(function(e){console.log(e.page);var n=S.getFilms(t),a=[];n.map((function(t){h.getFullMovieInfo(t).then((function(t){a.push(t),c(N(a,e.page),D,l.a)}))}))}))}(n,e),c(N(n,1),D,l.a)}))}))}function N(e,t){for(var n=[],a=20*(t-1);a<20*t;a++){if(null==e[a])return n;n.push(e[a])}return n}document.querySelector(".lib-link").addEventListener("click",(function(){return G("watched")})),R.addEventListener("click",(function(){return G("watched")})),C.addEventListener("click",(function(){return G("queue")}));n("2oSf")},yv2V:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="team">\r\n    <img src="'+s("function"==typeof(r=null!=(r=c(n,"photo")||(null!=t?c(t,"photo"):t))?r:l)?r.call(i,{name:"photo",hash:{},data:o,loc:{start:{line:3,column:14},end:{line:3,column:23}}}):r)+'" alt="team-photo" class="team-photo">\r\n    <h3 class="team-name">'+s("function"==typeof(r=null!=(r=c(n,"name")||(null!=t?c(t,"name"):t))?r:l)?r.call(i,{name:"name",hash:{},data:o,loc:{start:{line:4,column:26},end:{line:4,column:34}}}):r)+'</h3>\r\n    <ul class="team-social-links">\r\n        <li class="social-links">\r\n            <a href="'+s("function"==typeof(r=null!=(r=c(n,"github")||(null!=t?c(t,"github"):t))?r:l)?r.call(i,{name:"github",hash:{},data:o,loc:{start:{line:7,column:21},end:{line:7,column:31}}}):r)+'" target="_blank" aria-label="Github" class="social-link">\r\n                <svg class="" width="24" height="24">\r\n                    <use href="./images/symbol-defs.svg#icon-github"></use>\r\n                </svg>\r\n            </a>\r\n        </li>\r\n        <li class="social-links">\r\n            <a href="mailto:'+s("function"==typeof(r=null!=(r=c(n,"gmail")||(null!=t?c(t,"gmail"):t))?r:l)?r.call(i,{name:"gmail",hash:{},data:o,loc:{start:{line:14,column:28},end:{line:14,column:37}}}):r)+'" target="_blank" aria-label="mail" class="social-link">\r\n                <svg class="icon-gmail" width="24" height="24">\r\n                    <use href="./images/symbol-defs.svg#icon-gmail"></use>\r\n                </svg>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:22,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6e3414921ccb196cd56f.js.map