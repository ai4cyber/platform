(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),c=a.n(o),s=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,c=r.subDirectory,i=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),f=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),o=a===r,i=new RegExp(r+"/?(#.*)?$"),l=n.replace(i,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(s.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},o))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb"),y=a("Asxa"),T=a("OIbQ"),k=a.n(T),I=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:k.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=b.tabs,h=b.title,j=b.theme,f=b.description,y=b.keywords,T=b.date,k=Object(v.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=N?n.pathname.replace(N,""):n.pathname,L=p?C.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",B=j||k;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:B,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:u},Object(m.b)(g,{title:r?Object(m.b)(r,null):h,label:"label",tabs:p,theme:B}),p&&Object(m.b)(O,{title:h,slug:C,tabs:p,currentTab:L}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(A,{relativePagePath:d}),Object(m.b)(I,{date:T})),Object(m.b)(x.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:L}),Object(m.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},YB7Z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=i("FeatureCard"),b=i("AnchorLinks"),d=i("AnchorLink"),u={_frontmatter:s},p=c.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{title:"Data Source 1 - Shodan",color:"dark",mdxType:"FeatureCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVQY00WQ3VKDMBCFeYNOLT9JgCQQAghTKcW29m+q45U63nirXvseffHjQjv04szubJKTs5/zYC3KLEPAGCaTCabTKVzXxWw2g+/7CILgKh9s7AM6Iw3Vh+d5w5tezryusVmvUVUVVqsV2rZFWZaoaS6lHB4LwRHFEtIUUEpTH0EnElEUgQsBxvho7PRGp9MJTdNgt99hu93ieDzicDggTVO66IHxEI/LHH8fc8SxwlvF8fuaQ5sUJolpFl0Sk6mjpEaRl8iMhc3smK5XURTQSg04Einw3ilYo5DrGLVNcJ8rNFUCzvmIwrGlQbdp0D0t0CznZE4mWsMYA0t8FRmGYb+WgJAKXZtBRCFimvdMlZaUVCO48nY2nyW+z8/4Ob9g/1XDvaMV2Q1+/7sgTr2UjC/chhkfKqP0XNwS/gNcqqd4GYS0/wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/37e38fa959831456d4d5841a18a10abc/3cbba/shodan.png",srcSet:["/platform/static/37e38fa959831456d4d5841a18a10abc/7fc1e/shodan.png 288w","/platform/static/37e38fa959831456d4d5841a18a10abc/a5df1/shodan.png 576w","/platform/static/37e38fa959831456d4d5841a18a10abc/3cbba/shodan.png 1152w","/platform/static/37e38fa959831456d4d5841a18a10abc/bbb4b/shodan.png 1220w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)(b,{mdxType:"AnchorLinks"},Object(o.b)(d,{mdxType:"AnchorLink"},"Who generates the data?"),Object(o.b)(d,{mdxType:"AnchorLink"},"Is the data relevant?"),Object(o.b)(d,{mdxType:"AnchorLink"},"Is the data of high quality?"),Object(o.b)(d,{mdxType:"AnchorLink"},"Is the data accessible?"),Object(o.b)(d,{mdxType:"AnchorLink"},"Why did we select this data source and what value does it bring?"),Object(o.b)(d,{mdxType:"AnchorLink"},"What is the Collection Strategy?")),Object(o.b)("hr",null),Object(o.b)("h2",null,"Who generates the data?"),Object(o.b)("p",null,"Shodan is a search engine that searches for devices connected to the internet. It can be searched based on IP address, devices, city, etc."),Object(o.b)("hr",null),Object(o.b)("h2",null,"Is the data relevant?"),Object(o.b)("p",null,"Hospital CIDR’s were provided in the search to identify all the relevant devices connected to the internet.  "),Object(o.b)("hr",null),Object(o.b)("h2",null,"Is the data of high quality?"),Object(o.b)("p",null,"Shodan runs 24/7 and provides real time data. It “crawls” the Internet for publicly accessible devices, looking for specific IP addresses and hosts."),Object(o.b)("hr",null),Object(o.b)("h2",null,"Is the data accessible?"),Object(o.b)("p",null,"Shodan API provides access to all the data stored in Shodan and allows users to extract data in a usable format."),Object(o.b)("hr",null),Object(o.b)("h2",null,"Why did we select this data source and what value does it bring?"),Object(o.b)("p",null,"It provides list of hospital network devices which helps to narrow down the list of vulnerabilities relevant to those devices for further analysis. API feature allows us to collect, parse and store the data into MySQL database for easy analysis."),Object(o.b)("hr",null),Object(o.b)("h2",null,"What is the Collection Strategy?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Identify the top US hospitals networking (CIDR)."),Object(o.b)("li",{parentName:"ul"},"Extract all the hardware device information relevant to hospitals. Shodan API was used to extract the data from Shodan."),Object(o.b)("li",{parentName:"ul"},"Python to parse the JSON data and mySQL Server to store the data.")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1055px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVQoz2VRi26CQBDk/79LrIQqtI3Y4qNVEIQer7ujgIDTvVMbk24yucnOsplZjL7vwTmHlBLjOELV5XL5e/M8R5qmSJJE80dNlRBCa4wxVFUFo+s6HA4B4tOJFl6H7qU+yrIM0fGIKAw1vy+6V9M0CEgLglCbMlSzFiWamuuBYRiuILcjvap420Kez5qPN12lGW76cG7RNVJzo6gkpq8prLeYbGcoKJZyouIpMIpTWxbk00zzvCi0nmU3naI6OwZrw1Bwcjhxj7BdH7PXEN4uQ/sj6BYcnO5RkbN2sUBo24gdB+18rntao7s3tcA6KjHzQrirHezNN4xnL4Lp7GG+xFjvGWrJUZYlKkJZ15CeBzYxwcwp5HKpe1ojSFHhK84xfY9hrQK424RueBnhbRk2tIzz6+AjCvqLwvchPnyKxP/poirxGeXa6TD0+AW5HhHMR1rMPwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"collection strategy",title:"collection strategy",src:"/platform/static/e3aee41dcfd6c5cdfbeeacdbca39b043/2aaaf/shodan-collection-strategy.png",srcSet:["/platform/static/e3aee41dcfd6c5cdfbeeacdbca39b043/7fc1e/shodan-collection-strategy.png 288w","/platform/static/e3aee41dcfd6c5cdfbeeacdbca39b043/a5df1/shodan-collection-strategy.png 576w","/platform/static/e3aee41dcfd6c5cdfbeeacdbca39b043/2aaaf/shodan-collection-strategy.png 1055w"],sizes:"(max-width: 1055px) 100vw, 1055px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-data-details-shodan-index-mdx-dfddc4bd4fa80b877c16.js.map