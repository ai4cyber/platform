(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),r=a.n(A),i=a("NmYn"),n=a.n(i),s=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),c=a("TSYQ"),l=a.n(c),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:l()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===A,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,A=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||A,i=r.baseUrl,n=r.subDirectory,b=i+"/edit/"+r.branch+n+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),h=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,r=A.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),o=A.replace(b,a);return Object(p.b)("li",{key:e,className:l()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(s.Link,{className:h.link,to:""+o},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),E=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,l=t.relativePagePath,d=t.titleType,m=c.tabs,u=c.title,j=c.theme,h=c.description,B=c.keywords,O=Object(w.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=k?A.pathname.replace(k,""):A.pathname,v=m?T.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",P=j||O;return Object(p.b)(o.a,{tabs:m,homepage:!1,theme:P,pageTitle:u,pageDescription:h,pageKeywords:B,titleType:d},Object(p.b)(g,{title:r?Object(p.b)(r,null):u,label:"label",tabs:m,theme:P}),m&&Object(p.b)(N,{title:u,slug:T,tabs:m,currentTab:v}),Object(p.b)(E.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:l})),Object(p.b)(x.a,{pageContext:t,location:A,slug:T,tabs:m,currentTab:v}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},P4ut:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var A,r=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("013z"),b=(a("qKvR"),{}),o=(A="FeatureCard",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:b},l=s.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(l,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{title:"Group Members",color:"dark",mdxType:"FeatureCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABp1CIH//EABcQAQEBAQAAAAAAAAAAAAAAAAECAxH/2gAIAQEAAQUCyeNSUXoFf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAQADAAAAAAAAAAAAAAAAAAAhMaH/2gAIAQEABj8CxKn/xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMUGB/9oACAEBAAE/IUQfKJKsPaY0KvD/2gAMAwEAAgADAAAAEHAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAIDAQAAAAAAAAAAAAAAAREhADFBsf/aAAgBAQABPxAWC8ju59nGFuSQIN1jElHoDef/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/f64817c323d0da64f1aa125e2af99d98/2e753/about-us.jpg",srcSet:["/platform/static/f64817c323d0da64f1aa125e2af99d98/69549/about-us.jpg 288w","/platform/static/f64817c323d0da64f1aa125e2af99d98/473e3/about-us.jpg 576w","/platform/static/f64817c323d0da64f1aa125e2af99d98/2e753/about-us.jpg 1152w","/platform/static/f64817c323d0da64f1aa125e2af99d98/74f4b/about-us.jpg 1728w","/platform/static/f64817c323d0da64f1aa125e2af99d98/12e8d/about-us.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"  ",Object(n.b)("span",Object(r.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"906px"}}),"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVQoz22Sy08TURTG5y8y6s6VKzVoNC4MgRVGIwnKRhM0WhMjEmEBQcAFEMEQC2gIgg80sQaqRhZgmqYthE5pywwVaGnTaWf67vTnzI0l+PiSk3vuvef1nXMkLHxzuxh58hhVVSiXy+TzeSG5XE6IYRgUCgXblFRa5/38DPMTT9mNqVRNk3KpJP5L1in5Ams4Bxz0XD3Fq+kxAtZ9fX0Nr9eLLAeRg0GClqiqKgI+6B6ht72RwJgDn/stO3sJ/H4f0WiUZDKJ1NXTT+etK/S0XcT1aYF0Oo2ibJHNZvkfllcCDD/q4MXdy0T8q+hGXiTNZDLiXwpHFF7PzrH63Y2mZTAtCqViUXx6fqywYNHLZLQD6qZZJbS5yZelReue+yNZrVZDshWzZmJYDnb/7Ecbc+8+MnS7laGWM7yZnUIOhSxqfjY2NghZus/Sk8l9YWsXUfeT6tHtx8MYHB7nXtM5+k4fYWZygqyeJRwOk0gk+Kusg4Ciwmq1ivP5CHduXqevf4zEflrQ0rIGSx8WWJx8RnI/RaVSEa2IxxP0dj2k+cJZRkfH/+mxFImGudbUQGvDCZovNfJ12cPP2LaY7M7uLrlSBTtpndLikpuB+x3cOH+SY0ePs6VsE4vFxBbouo6kaWkcjk7aW9qYeTlFwarCNtA0jWKxgPk7WL0lW4rKnHOC6cFuXK7PYitkWSaVSoldFD1UYnt4AiHhYO9SJBIRE61P7rDYiMf3UBVF6IahC586fgEjLMGy73bLnwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"members",title:"members",src:"/platform/static/ba137dd1a8464cdfc6d86db14ec72e05/b8bf4/members.png",srcSet:["/platform/static/ba137dd1a8464cdfc6d86db14ec72e05/7fc1e/members.png 288w","/platform/static/ba137dd1a8464cdfc6d86db14ec72e05/a5df1/members.png 576w","/platform/static/ba137dd1a8464cdfc6d86db14ec72e05/b8bf4/members.png 906w"],sizes:"(max-width: 906px) 100vw, 906px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-about-members-index-mdx-be03be7bdc8e48fc3a6f.js.map