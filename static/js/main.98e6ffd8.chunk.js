(this["webpackJsonpcrypto-price"]=this["webpackJsonpcrypto-price"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){},13:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),r=t(4),a=t.n(r),i=t(5),o=t(3),j=(t(10),t(0)),l=function(e){var c=e.image,t=e.name,n=e.symbol,s=e.current_price,r=e.total_volume,a=e.price_change_percentage_24h,i=e.market_cap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:c,alt:n}),Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin price",children:["\u20ac",s]}),Object(j.jsxs)("p",{className:"coin-volume",children:["\u20ac",r.toLocaleString()]}),Object(j.jsxs)("p",{className:"coin-percent ".concat(a>0?"green":"red"),children:[a.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: \u20ac",i.toLocaleString()]})]})]})})},p=(t(12),function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(""),a=Object(o.a)(r,2),p=a[0],u=a[1];Object(n.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Cryptocurrency Prices by Market Cap"}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"coin-input",type:"text",placeholder:"Search",value:p,onChange:function(e){return u(e.target.value)}})})]}),d.map((function(e){return Object(j.jsx)(l,Object(i.a)({},e),e.id)}))]})});a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.98e6ffd8.chunk.js.map