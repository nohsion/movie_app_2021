(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=n(8),o=n(2),j=(n(37),n(1));var l=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/about",children:"About"})]})},u=n(19),m=n.n(u),d=n(31),b=n(11),h=n(12),v=n(14),p=n(13),O=n(32),x=n.n(O);n(63);var _=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(j.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:c,alt:a,title:a}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:a}),Object(j.jsx)("h5",{className:"movie__year",children:n}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})})},f=(n(64),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({isLoading:!1,movies:a});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(65);var g=function(e){return console.log(e),Object(j.jsxs)("div",{className:"about__container",children:[Object(j.jsx)("a",{href:"https://github.com/nohsion/movie_app_2021",title:"github\ub85c \uc774\ub3d9",children:"\uc18c\uc2a4\ucf54\ub4dc \ubcf4\uae30"}),Object(j.jsx)("span",{children:"Clone coding  - Nomad coders -"})]})},y=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);n(66);var N=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/about",component:g}),Object(j.jsx)(o.a,{path:"/movie/:id",component:y})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a9306015.chunk.js.map