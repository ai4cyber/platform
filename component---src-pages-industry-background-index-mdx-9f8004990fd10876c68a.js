(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),A=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),b=a.n(s),d=a("QH2O"),p=a.n(d),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,A=i.subDirectory,l=r+"/edit/"+i.branch+A+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=A()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(o.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(i.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,p=s.tabs,h=s.title,f=s.theme,O=s.description,w=s.keywords,N=Object(v.a)().interiorTheme,E=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=E?n.pathname.replace(E,""):n.pathname,B=p?I.split("/").filter(Boolean).slice(-1)[0]||A()(p[0],{lower:!0}):"",k=f||N;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:k,pageTitle:h,pageDescription:O,pageKeywords:w,titleType:d},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:p,theme:k}),p&&Object(u.b)(x,{title:h,slug:I,tabs:p,currentTab:B}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:b})),Object(u.b)(j.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:B}),Object(u.b)(l.a,null))}},ACLI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),A=a("013z"),o=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("FeatureCard"),s=l("AnchorLinks"),b=l("AnchorLink"),d={_frontmatter:o},p=A.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{title:"Background of Industry",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABk0AxA//EABcQAQEBAQAAAAAAAAAAAAAAAAIAASH/2gAIAQEAAQUCEhmS4v/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQEAAwEAAAAAAAAAAAAAAAEAAhEhUf/aAAgBAQAGPwI3Yr5yS//EABgQAQADAQAAAAAAAAAAAAAAAAEAESFR/9oACAEBAAE/IXadEAsI4Qls48n/2gAMAwEAAgADAAAAEIAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRAAAgIBBQAAAAAAAAAAAAAAAREAMSFBUWGh0f/aAAgBAQABPxDPQpRGwekulUFpGiVR65h+GwU9n//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/362b8efa80ff14c4646b59860d2b61c2/2e753/background.jpg",srcSet:["/platform/static/362b8efa80ff14c4646b59860d2b61c2/69549/background.jpg 288w","/platform/static/362b8efa80ff14c4646b59860d2b61c2/473e3/background.jpg 576w","/platform/static/362b8efa80ff14c4646b59860d2b61c2/2e753/background.jpg 1152w","/platform/static/362b8efa80ff14c4646b59860d2b61c2/74f4b/background.jpg 1728w","/platform/static/362b8efa80ff14c4646b59860d2b61c2/12e8d/background.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(b,{mdxType:"AnchorLink"},"Key Services & Overall Size of Industry"),Object(r.b)(b,{mdxType:"AnchorLink"},"Industry Players"),Object(r.b)(b,{mdxType:"AnchorLink"},"Importance of IT for the Industry")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Key Services & Overall Size of Industry"),Object(r.b)("p",null,"The hospital industry in the US has three main services (IBISWorld, 2021)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Inpatient care – 45.7%"),Object(r.b)("li",{parentName:"ol"},"Outpatient care – 18.1%"),Object(r.b)("li",{parentName:"ol"},"Emergency room visits – 36.2%")),Object(r.b)("p",null,"Surprisingly, industry specific data shows that the market size for hospitals in the US has declined at an annual rate of 1.7% to $968.6 billion over the past 5 years, including a decline of 2.1% in 2021 alone (IBISWorld, 2021). However, industry market size is estimated to grow at an annual rate of 2.5% to $1.1 trillion over the next 5 years to 2026 (IBISWorld, 2021)."),Object(r.b)("p",null," \nAccording to the American Hospital Association, there are currently 6,090 hospitals in the US, with 5,141 being community hospitals (American Hospital Association, n.d.). There are also over 5 million individuals employed within the industry and this is expected to grow at an annual rate of 1.6% over the next 5 years (IBISWorld, 2021)."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Industry Players"),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Top Hospitals in the US in Terms of Revenue")),Object(r.b)("p",null,"1.New York-Presbyterian Hospital At Weill Cornell Medical Center (NY)\n2.Cleveland Clinic Main Campus (OH)\n3.Stanford Hospital (CA)\n4.NYU Langone Tisch Hospital (NY)\n5.Parnassus Heights (CA)\n15.",Object(r.b)("em",{parentName:"p"},"IU Health Methodist Hospital (IN)")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Source: (Definitive Healthcare, n.d.)")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Importance of IT for the Industry"),Object(r.b)("p",null,"The use of Information Technology (IT) within the hospital industry has been proven to significantly improve the quality of care that patients receive. "),Object(r.b)("p",null,"Benefits of IT within hospitals include "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Helps in delivering more accurate and accessible information related to a patient’s health that can be customized to fit their health needs"),Object(r.b)("li",{parentName:"ul"},"Better and faster decisions related to health risks to a patient and to the public "),Object(r.b)("li",{parentName:"ul"},"Supports communication between patients and healthcare professions "),Object(r.b)("li",{parentName:"ul"},"Improved medication safety through better legibility, which helps decrease medication errors")),Object(r.b)("p",null,"Examples of how IT is used within hospitals:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Electronic medical record systems (i.e., EMRs, EHRs, and PHRs), telehealth, medical equipment, remote patient monitoring, patient portals, electronic prescribing")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Source: (Fingent, 2020.)")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-industry-background-index-mdx-9f8004990fd10876c68a.js.map