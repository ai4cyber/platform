(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),i=a.n(r),c=a("Wbzz"),l=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),u=a.n(m),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,i=b.subDirectory,l=r+"/edit/"+b.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},x=a("FCXl"),f=a("dI71"),h=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===b,l=new RegExp(b+"/?(#.*)?$"),o=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(p.b)(c.Link,{className:h.link,to:""+o},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},r))))))},t}(b.a.Component),w=a("MjG9"),v=a("CzIb"),T=a("Asxa"),k=a("OIbQ"),N=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:N.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,u=s.tabs,O=s.title,f=s.theme,h=s.description,T=s.keywords,k=s.date,N=Object(v.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=C?n.pathname.replace(C,""):n.pathname,D=u?E.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",Q=f||N;return Object(p.b)(o.a,{tabs:u,homepage:!1,theme:Q,pageTitle:O,pageDescription:h,pageKeywords:T,titleType:m},Object(p.b)(g,{title:b?Object(p.b)(b,null):O,label:"label",tabs:u,theme:Q}),u&&Object(p.b)(A,{title:O,slug:E,tabs:u,currentTab:D}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(y,{date:k})),Object(p.b)(x.a,{pageContext:t,location:n,slug:E,tabs:u,currentTab:D}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},iiJX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},o=l("FeatureCard"),s=l("AnchorLinks"),d=l("AnchorLink"),m={_frontmatter:c},u=i.a;function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o,{title:"Data Display 1 - Shodan",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVQY00WQ3VKDMBCFeYNOLT9JgCQQAghTKcW29m+q45U63nirXvseffHjQjv04szubJKTs5/zYC3KLEPAGCaTCabTKVzXxWw2g+/7CILgKh9s7AM6Iw3Vh+d5w5tezryusVmvUVUVVqsV2rZFWZaoaS6lHB4LwRHFEtIUUEpTH0EnElEUgQsBxvho7PRGp9MJTdNgt99hu93ieDzicDggTVO66IHxEI/LHH8fc8SxwlvF8fuaQ5sUJolpFl0Sk6mjpEaRl8iMhc3smK5XURTQSg04Einw3ilYo5DrGLVNcJ8rNFUCzvmIwrGlQbdp0D0t0CznZE4mWsMYA0t8FRmGYb+WgJAKXZtBRCFimvdMlZaUVCO48nY2nyW+z8/4Ob9g/1XDvaMV2Q1+/7sgTr2UjC/chhkfKqP0XNwS/gNcqqd4GYS0/wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/37e38fa959831456d4d5841a18a10abc/3cbba/shodan.png",srcSet:["/platform/static/37e38fa959831456d4d5841a18a10abc/7fc1e/shodan.png 288w","/platform/static/37e38fa959831456d4d5841a18a10abc/a5df1/shodan.png 576w","/platform/static/37e38fa959831456d4d5841a18a10abc/3cbba/shodan.png 1152w","/platform/static/37e38fa959831456d4d5841a18a10abc/bbb4b/shodan.png 1220w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Description"),Object(r.b)(d,{mdxType:"AnchorLink"},"Metadata"),Object(r.b)(d,{mdxType:"AnchorLink"},"Data")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Description"),Object(r.b)("p",null,"We used CIDR search on Shodan to collect a list of connected devices from top 2 hospitals in US: New York-Presbyterian (CIDR - 143.104.0.0/16) and Cleveland Clinic (CIDR - 192.35.79.0/24)"),Object(r.b)("p",null,"Number of Unique Records: 421"),Object(r.b)("p",null,"Date: Extracted from Shodan on October 3rd, 2021"),Object(r.b)("hr",null),Object(r.b)("h2",null,"Metadata"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"952px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVQoz01SS2sTURSev+ZGrG5E3UgRxVq1aMVKU3UhFq1GrEYrFEWRQkvpQkEEa5ImQReiadWlbfMyk8fM5DF5TzLJJPHznGMGPHC533l957uHqxw4chWHT1zHoWNzdDyjew4Hj87i1OQ9TM08wekLXkxceogzUw8wdvz/Oo+cMcJuXPGHthGg4w9FsRX5jkB4G8HIjtwcYxz69IP8qPhuXnLhHenxb0WxGfwmcQVkg36XL/wZOmhbDbjW6bRQq5qCLauJ6giz2ZQDhoLblLNtS7CiaToV1tDrOUgkkkgmU5Tsouc4+J1OY29vH41mE/uxmOQ6ti21mm5AzWRQNivIZHOCOx0bSqFQQKlcht3tgrFhGNTQQ7/fh6ZpaFkWBsMh0kSez+fh0KDBYIBsLodsNiuDVVVFPB5Hl/qUYqlEyhJot9tCkEqlpIgbzUpF4ox1GiQE1DSkAcViCa2WJYMNowCdFDuEFVcVN7ECl5ALeXKZ1LPCGD351+4ubxrvN79g2vMMnlsvcO3mMm7cfonLs0vYeBOBUiKFOZJfITWarv8jHD1ZJ5/jfXoiq1fVjCx+dSOI8XMLRPJUiM5feYTxibtYfvUOCjfxkyvVqhDzLlxC9jO0bFacJrVJGsb2eu0jTp69g8npRVyc8dFf9cmApedvoTQaDdTrdSnk2zRN2RET8n6rtZoQ5kkh75Qt/Pkn5u+vwPt4HQuLa/D61jHvXcGHwFf8BWjMqYYMy+cNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"metadata",title:"metadata",src:"/platform/static/93b8bea1dc2ef900e2022a44479f55a8/f26e3/metadata.png",srcSet:["/platform/static/93b8bea1dc2ef900e2022a44479f55a8/7fc1e/metadata.png 288w","/platform/static/93b8bea1dc2ef900e2022a44479f55a8/a5df1/metadata.png 576w","/platform/static/93b8bea1dc2ef900e2022a44479f55a8/f26e3/metadata.png 952w"],sizes:"(max-width: 952px) 100vw, 952px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("hr",null),Object(r.b)("h2",null,"Data"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"asn"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"dataa"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"git status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"git status")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"git status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"git status")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-data-display-shodan-index-mdx-a8e412cbf24892e3f775.js.map