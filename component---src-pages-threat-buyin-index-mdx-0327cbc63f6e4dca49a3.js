(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),A=a.n(b),d=a("QH2O"),u=a.n(d),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:A()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),O=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),s=n.replace(c,a);return Object(m.b)("li",{key:e,className:A()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(m.b)(l.Link,{className:O.link,to:""+s},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},r))))))},t}(i.a.Component),x=a("MjG9"),w=a("CzIb"),N=a("Asxa"),k=a("OIbQ"),T=a.n(k),v=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(N.c,{className:T.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,A=t.relativePagePath,d=t.titleType,u=b.tabs,h=b.title,f=b.theme,O=b.description,N=b.keywords,k=b.date,T=Object(w.a)().interiorTheme,E=Object(l.useStaticQuery)("2456312558").site.pathPrefix,B=E?n.pathname.replace(E,""):n.pathname,C=u?B.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",I=f||T;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:O,pageKeywords:N,titleType:d},Object(m.b)(p,{title:i?Object(m.b)(i,null):h,label:"label",tabs:u,theme:I}),u&&Object(m.b)(y,{title:h,slug:B,tabs:u,currentTab:C}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:A}),Object(m.b)(v,{date:k})),Object(m.b)(g.a,{pageContext:t,location:n,slug:B,tabs:u,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},"z+kB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("FeatureCard"),b=c("AnchorLinks"),A=c("AnchorLink"),d={_frontmatter:l},u=o.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{title:"Intelligence Buy-in",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABnawZIT//xAAZEAADAAMAAAAAAAAAAAAAAAABAgMAERP/2gAIAQEAAQUCkyg6l1z/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BEX//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFn/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAEBES/9oACAEBAAY/AtZAREXnQa//xAAYEAEAAwEAAAAAAAAAAAAAAAABABEhof/aAAgBAQABPyHAJUkbsuGJrP/aAAwDAQACAAMAAAAQBA//xAAVEQEBAAAAAAAAAAAAAAAAAAAQMf/aAAgBAwEBPxCh/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EKC//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARIVFBYf/aAAgBAQABPxAcoKhWPp9hcLQICHe7HKkC+T//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/07b66afbc2549700df22b4157a4bb339/2e753/buyin.jpg",srcSet:["/platform/static/07b66afbc2549700df22b4157a4bb339/69549/buyin.jpg 288w","/platform/static/07b66afbc2549700df22b4157a4bb339/473e3/buyin.jpg 576w","/platform/static/07b66afbc2549700df22b4157a4bb339/2e753/buyin.jpg 1152w","/platform/static/07b66afbc2549700df22b4157a4bb339/74f4b/buyin.jpg 1728w","/platform/static/07b66afbc2549700df22b4157a4bb339/12e8d/buyin.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(b,{mdxType:"AnchorLinks"},Object(r.b)(A,{mdxType:"AnchorLink"},"Health care industry Cyberattack statistics"),Object(r.b)(A,{mdxType:"AnchorLink"},"Human Error or malicious activity"),Object(r.b)(A,{mdxType:"AnchorLink"},"Impact on hospitals due to cyber attack"),Object(r.b)(A,{mdxType:"AnchorLink"},"Challenges Cyber security team face due to data volume"),Object(r.b)(A,{mdxType:"AnchorLink"},"How can AI help Cyber Security team?")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Health care industry Cyberattack statistics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The total count of US healthcare breaches rose from 386 in 2019 to 599 in 2020, an increase of ",Object(r.b)("strong",{parentName:"li"},"55.1%"),"."),Object(r.b)("li",{parentName:"ul"},"Healthcare data breaches are the costliest with the average cost increasing by $2 million to ",Object(r.b)("strong",{parentName:"li"},"$9.42 million")," per incident."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"91.2%")," of breach incidents that resulted in theft of personal information were attributed to healthcare cyberattacks."),Object(r.b)("li",{parentName:"ul"},"About ",Object(r.b)("strong",{parentName:"li"},"26 million")," patient records were exposed to unauthorized parties in the US in 2020, with about 24.1 millions of those as the result of healthcare cyberattacks.")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Human Error or malicious activity"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Wyoming Department of Health became aware of an unintentional exposure of 53 files containing COVID-19 and influenza test result data and one file containing breath alcohol test results which was accidentally uploaded in GitHub."),Object(r.b)("li",{parentName:"ul"},"Med-Data says a former worker saved files containing PHI in personal folders on the GitHub platform sometime between December 2018 and September 2019.")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Impact on hospitals due to cyber attack"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In 2019, cybercriminals breached 130,000 records at Kalispell Regional Healthcare (KRH) in Montana. A lawsuit was brought against KRH, and they eventually reached a settlement of ",Object(r.b)("strong",{parentName:"li"},"$4.2 million")," with those affected."),Object(r.b)("li",{parentName:"ul"},"University of California San Francisco (UCSF) Hospital paid hackers ",Object(r.b)("strong",{parentName:"li"},"$1.14 million")," in bitcoin after a ransomware attack."),Object(r.b)("li",{parentName:"ul"},"A researcher at Vanderbuilt University determined that data breaches at hospitals could be linked to thousands of patient deaths. The research showed an increase in ",Object(r.b)("strong",{parentName:"li"},"mortality rate of 0.23 percent one-year")," post-breach and an increase of 0.36 percent two years post-breach. This came to over ",Object(r.b)("strong",{parentName:"li"},"2,100 deaths"),".")),Object(r.b)("p",null,"With digitalization of health care industry there is increase in IT systems and networks which includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Applications like  EMR , (electronic medical record), EHR (Electronic Health record), CIS (clinical information system), patient portal."),Object(r.b)("li",{parentName:"ul"},"Hardware medical IOT devices like Remote patience monitoring, Heart Rate monitoring, Glucose monitoring , CT Scan, MRI, Robotic Surgery which are connected to network."),Object(r.b)("li",{parentName:"ul"},"Many end points like laptop, mobile, or iPad used patient, medical staff or  vendors."),Object(r.b)("li",{parentName:"ul"},"Transmission of confidential data across internet for data exchange between IT systems.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"All the points above increases the attack surface for the hackers, and it is very difficult for the security analyst to cope up with these threats for this industry.")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Challenges Cyber security team face due to data volume"),Object(r.b)("p",null,"More than half (56%) of large companies handle at least 1,000 alerts per day because of"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Constant change to the type of security threats that must be blocked."),Object(r.b)("li",{parentName:"ul"},"Addition of new tools to monitor for these threats."),Object(r.b)("li",{parentName:"ul"},"Overall growth of business applications and services. "),Object(r.b)("li",{parentName:"ul"},"Increase in cloud infrastructure. "),Object(r.b)("li",{parentName:"ul"},"Growth in user endpoints to monitor.")),Object(r.b)("hr",null),Object(r.b)("h2",null,"How can AI help Cyber Security team?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy AI on network to detect all types of attacks and help  prioritize and prevent them."),Object(r.b)("li",{parentName:"ul"},"AI scans entire system and checks for any possible threats. Unlike humans, AI will identify threats extremely early and simplify your security tasks."),Object(r.b)("li",{parentName:"ul"},"AI has proven to be one of the best technologies in mapping and stopping unknown threats from ravaging a company"),Object(r.b)("li",{parentName:"ul"},"AI detect and identify any threats hidden in the sea of chaotic traffic."),Object(r.b)("li",{parentName:"ul"},"Identifies weak points in computer systems and business networks and helps businesses focus on important security tasks.      ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-threat-buyin-index-mdx-0327cbc63f6e4dca49a3.js.map