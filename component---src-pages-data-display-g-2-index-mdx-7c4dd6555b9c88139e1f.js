(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),i=a.n(c),b=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,i=r.subDirectory,o=c+"/edit/"+r.branch+i+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),c=a===r,o=new RegExp(r+"/?(#.*)?$"),l=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=c,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},c))))))},t}(r.a.Component),A=a("MjG9"),w=a("CzIb"),k=a("Asxa"),v=a("OIbQ"),y=a.n(v),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:y.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,u=t.titleType,m=s.tabs,x=s.title,f=s.theme,h=s.description,k=s.keywords,v=s.date,y=Object(w.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=P?n.pathname.replace(P,""):n.pathname,C=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",B=f||y;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:B,pageTitle:x,pageDescription:h,pageKeywords:k,titleType:u},Object(p.b)(g,{title:r?Object(p.b)(r,null):x,label:"label",tabs:m,theme:B}),m&&Object(p.b)(T,{title:x,slug:E,tabs:m,currentTab:C}),Object(p.b)(A.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(N,{date:v})),Object(p.b)(O.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:C}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},Sk9c:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=o("FeatureCard"),s=o("AnchorLinks"),d=o("AnchorLink"),u={_frontmatter:b},m=i.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{title:"Data Display 3 - G2",color:"dark",mdxType:"FeatureCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1126px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVQoz12Sy2sTURTGZ+8/4Madm+5FXSgFFVy4qJvuVVDBjSBxE0Vq0S7cFBfaB25EqYKP+ChWahUKaRps2mJspUVNmzaPmmQymdxkMpN5/Lx3SmPrgcM5957Hd879ruZ8m8P+8IIA8D0X3/f3aBAEe3T3nef5uK6q+RfTZBdQQdnQk0HP88Kgkp2k/wGUdV2PHQkCX9Z6Ya2WvHaR2pMhaFn421Fs26FeF1iWheM48mzTbrdDX92pqZT8WMgSezxFvSGnlDsqEK3nUBdn9u+jeCfSQcxk1ojF3pNMzpFKLTA/vyjtYuhPT8+g63qYN3hrlN4jJ0mNf+3Uag8i57h+tIti90GCrRy7Jf19mcnJL8zEZ0Ob28xvr+iHu7Ce+UX88wTFQpnbL2e5+jSOFu09QeLSWYheIPi9iikENaOGMKoUNnNsyCYb0q6tZymVytTMOlXRwGw5HeDzz9Mc7j7NqePH0B5d7uHZSB/Dr0fJiiqiXKFaLGDnsljFPEa5jFmpUNeV6hilEpXlNGJlSbLY5o+wOTCQZOBGlKH+m2gi/5PIxEP6711hcOkTNC0s06BhGIiqTlOqJad1zBpes0FgNXHHhrHv94EwsVyfuwmdsTcfGX/3Fk29RiK/wtSrEVarhXAFX9LvSkadVgtHMqx8W/otCdaWvq++jsoLwgcNa3RJ/Jbl8xfcQIY2wlwlWAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/69af43b144c53abb01c4ccc23fc5691b/87c76/g2.png",srcSet:["/platform/static/69af43b144c53abb01c4ccc23fc5691b/7fc1e/g2.png 288w","/platform/static/69af43b144c53abb01c4ccc23fc5691b/a5df1/g2.png 576w","/platform/static/69af43b144c53abb01c4ccc23fc5691b/87c76/g2.png 1126w"],sizes:"(max-width: 1126px) 100vw, 1126px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)(s,{mdxType:"AnchorLinks"},Object(c.b)(d,{mdxType:"AnchorLink"},"Description"),Object(c.b)(d,{mdxType:"AnchorLink"},"Metadata"),Object(c.b)(d,{mdxType:"AnchorLink"},"Data")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Description"),Object(c.b)("hr",null),Object(c.b)("h2",null,"Metadata"),Object(c.b)("hr",null),Object(c.b)("h2",null,"Data"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-data-display-g-2-index-mdx-7c4dd6555b9c88139e1f.js.map