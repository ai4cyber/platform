(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),A=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),b=a.n(l),p=a("QH2O"),d=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:b()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,A=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:A},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),w=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,A=new RegExp(n+"/?(#.*)?$"),c=i.replace(A,a);return Object(m.b)("li",{key:e,className:b()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},r))))))},t}(n.a.Component),y=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,l=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,d=l.tabs,h=l.title,j=l.theme,w=l.description,E=l.keywords,v=Object(x.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,N=k?i.pathname.replace(k,""):i.pathname,T=d?N.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",Q=j||v;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:Q,pageTitle:h,pageDescription:w,pageKeywords:E,titleType:p},Object(m.b)(g,{title:n?Object(m.b)(n,null):h,label:"label",tabs:d,theme:Q}),d&&Object(m.b)(O,{title:h,slug:N,tabs:d,currentTab:T}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(u,{relativePagePath:b})),Object(m.b)(f.a,{pageContext:t,location:i,slug:N,tabs:d,currentTab:T}),Object(m.b)(A.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"l9+4":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),A=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=A("FeatureCard"),l=A("AnchorLinks"),b=A("AnchorLink"),p={_frontmatter:s},d=o.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(d,Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{title:"Relevant Threat Trends within Hospitals",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABggNEtQp//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERAyH/2gAIAQEAAQUC0L11H//EABYRAAMAAAAAAAAAAAAAAAAAAAIQMf/aAAgBAwEBPwEIv//EABYRAAMAAAAAAAAAAAAAAAAAAAMQMf/aAAgBAgEBPwE1X//EABYQAAMAAAAAAAAAAAAAAAAAAAAQMf/aAAgBAQAGPwJU/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARITFRkf/aAAgBAQABPyFYLxDZ7lihez//2gAMAwEAAgADAAAAEPw//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxAv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EHgsL//EABoQAQACAwEAAAAAAAAAAAAAAAEAIRExUXH/2gAIAQEAAT8QC8wFreohcwuxJDPU/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/978a406feb8f6402c8ef2e0679cb47df/2e753/new-trends.jpg",srcSet:["/platform/static/978a406feb8f6402c8ef2e0679cb47df/69549/new-trends.jpg 288w","/platform/static/978a406feb8f6402c8ef2e0679cb47df/473e3/new-trends.jpg 576w","/platform/static/978a406feb8f6402c8ef2e0679cb47df/2e753/new-trends.jpg 1152w","/platform/static/978a406feb8f6402c8ef2e0679cb47df/74f4b/new-trends.jpg 1728w","/platform/static/978a406feb8f6402c8ef2e0679cb47df/12e8d/new-trends.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(l,{mdxType:"AnchorLinks"},Object(r.b)(b,{mdxType:"AnchorLink"},"Relevant Threats"),Object(r.b)(b,{mdxType:"AnchorLink"},"Malware & Ransomware"),Object(r.b)(b,{mdxType:"AnchorLink"},"Social Engineering & Phishing"),Object(r.b)(b,{mdxType:"AnchorLink"},"Distributed Denial of Service (DDoS)")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Relevant Threats"),Object(r.b)("p",null,"According to EY the most relevant threats include (Lovejoy, 2020)."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Malware"),Object(r.b)("li",{parentName:"ol"},"Ransomware"),Object(r.b)("li",{parentName:"ol"},"Social Engineering & Phishing"),Object(r.b)("li",{parentName:"ol"},"Distributed Denial of Service (DDoS)")),Object(r.b)("p",null,"Verizon’s 2021 Data Breach Report stated that the healthcare industry has seen a shift from breaches caused by internal actors to primarily external actors (Verizon, 2020)."),Object(r.b)("p",null,"Additionally, the data compromised from most hospital breaches include personal, medical, financial and credential information (Verizon, 2020). "),Object(r.b)("p",null,"The pie chart below shows the actors motives according to Verizon (Verizon, 2020)."),Object(r.b)("p",null,"  ",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"501px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.29166666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVQ4y4VU72tSURj2rxplhW7T+aOprdnsQ7/G+qVumdt0m6OVUgv7EBQFw2CjIioYjIpGBUJEn4qi+roRbKjTXe9Sr1PUq0/nHD0XtdkOHN7Dved9zvO853mPqlargY72WCwWIQgCRFFEKpVCOp2GJEnKHr6vfajawfi6XCrVgQjg9rbAwLPZ7P6A/Ee1Wq0DVSpI7+aRkXJ7JnQCamFYrdY3JZMJ/Pz+FX9CYSwHwvDPL+HZiw/YSorKoe2l+QeQMxPEHCILiwiFvNiw2PGkfxhd1kmoe5ywOgJ4H/3SArrXVBiWyxU4vXfRY76CufkgPnlcWHW4oT05C/OAD70WLw4bRhH9+I0lyXK1YzkY4FMi60CvE302H06MXMPL4DTeDXuhGZyGwTYO43E/uo9exdDZG8jm8grTUqlMZolNWZbrDEuE3fnRO9CaPSTRB03/BPzj17EaCEFvn4HeOo6+Y5MwDfqh1rsV6VRVMikgHo8jFospllKltndgHpyC3jbBEnUkmgYmcXvuHiykdroGIGWp1rmxsPi6IVtGJptBJpNplbyVEmEkdeKAHNRADjE0fafsKcOHj1bqycRe+XgCG5ubSCQShG2yznC3UMTpi7dYjQyEGQegsXlNJR/UufDq7WdFcjolMLkUkHaWcssPIivsUsz2qRamHIwypdL7h2ZAFXHJ2ZzEuqdZNgMUd3JwnAsya1AmFICypZHWjsau7st4vhztaBvuRZXcMPb67zhOXbhJmLpwxDgGLSmBxuTBIVI3GiNLb2haR1O3GJufKEkF5skx332cuTSPEWKnUPgxfvxaJwky1tbWmOf+23rtjwMfUr7AjMsH7/f9Hoi/4Ook4Hsv6XgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"actor motives",title:"actor motives",src:"/platform/static/ba72dda24a0d4e5ddb7f48db9dbae0af/e6093/actor-motives.png",srcSet:["/platform/static/ba72dda24a0d4e5ddb7f48db9dbae0af/7fc1e/actor-motives.png 288w","/platform/static/ba72dda24a0d4e5ddb7f48db9dbae0af/e6093/actor-motives.png 501w"],sizes:"(max-width: 501px) 100vw, 501px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Malware & Ransomware"),Object(r.b)("p",null,"Malware and Ransomware continue to be two of the most severe threats facing the hospital industry today. According to EY, cybercrime groups are targeting hospitals by conducting widespread scans of the internet for vulnerable enterprise assets, such as unpatched VPN servers (Lovejoy, 2020). If found, these actors can use publicly available exploits or credentials from third-party leaks to gain access to the network. They can then find and steal sensitive information and encrypt it with ransomware. This could prevent hospitals from accessing patient medical records, dosages of drugs that patients require, or other critical information (Lovejoy, 2020)."),Object(r.b)("h3",null,"Top 5 Malware Families"),Object(r.b)("p",null,"Below is a pie chart that identifies the top 5 malware families within healthcare according to FireEye (FireEye, n.d.)."),Object(r.b)("p",null,"  ",Object(r.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"516px"}}),"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVQ4y42T3UtTcRjH9+9021UuL5Ztc767qRMULIpBpjnc2c6auc1TLlFhN4pF4EVU0AsxKKISakQ0i1XgsLoxZnvDbWfLvR73+u13zrbTFKSew4/f4fzO8znf7/M8R1KtViFcZOfyefBRKpXQHOVyRTjno7EfF5LGTYW8uLf/G/EYi03Pe7jfbeLr1g44rlA7r1T/CyopFos4KNcU+R48xWnFCPq62qEZ0uFMjwmjF6/j9RuvCGqGHl0CkGVZxFIpcDedSJyUQduqwdnOXpw7r4dSfRWyTj1a5JfxxOWuK60cq5B/XrP86i2yJ6SoSFXwKrWQd2sxOjYFZb8ZKrURij4K8l4KP/1h0T5fZ95dY+c/JNbQs7YK3+AIWNUg0NKB9a5hDFyg0d5PC7COARpSonL1jktIYhMp7O4GEIlEhOX3+5FOp+s1LBzA6WQwx1BYY8x4MTWJH7px0HoHZD0UgRqh0pjQqpyEyXpLSEpnMgiHw4jH4wgEAiJMsFwgwJUlOxwzVzBvN8BGwMsLNEwUQ5piJLYpEUhbb9eKlc0iEY1iLxZDjOy8ylw+99fyvfUVMJYJLM5RWLBOY9Guh4GahbzPJAA7NMSyYgLO1UekZgdIRKII/QogEAwKCnmlfB1F4PbWZ9joS1hkjFiwUwQ8jRmLVQCq1KZ6Uwzwbe8gkYiDTSYRIpYjZMWIykNd5rvEcRxcj+9i1qiDgyhcYgxg7DaijkZb9zROtY3j/sMNMTFHLPOqQqEwMqSezcMuyZLDIJFeLpfh3niO5RtmzF+bgM1iJDADhsbsePbyg5jUGI+j83d4DpsitZ/EN98XeD958NH7nXQw98+/pPnZH5JtX/IVXYepAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"top 5 malware families",title:"top 5 malware families",src:"/platform/static/2c73048394c438a2e1e7f47649067b9f/31011/top-5-malware-families.png",srcSet:["/platform/static/2c73048394c438a2e1e7f47649067b9f/7fc1e/top-5-malware-families.png 288w","/platform/static/2c73048394c438a2e1e7f47649067b9f/31011/top-5-malware-families.png 516w"],sizes:"(max-width: 516px) 100vw, 516px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Social Engineering & Phishing"),Object(r.b)("p",null,"According to the 2020 Healthcare Information and Management System Society (HIMSS) Cybersecurity Report, social engineering and phishing are considered two of the primary means of how threat actors can gain access to a health organizations systems and networks (Healthcare Information and Management System Society, 2020). FireEye states that most threats are either general phishing or spear-phishing that occur via e-mail (FireEye, n.d.). The motives of these threat actors are mainly for financial information, but also include patient information and disruption to the organizations systems and networks."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Distributed Denial of Service (DDoS)"),Object(r.b)("p",null,"According to Verizon, with the recent explosion of the Internet of Things (IoT) and cloud computing, we’ve seen a spike in the number of DDoS attacks over the last several years (Verizon, 2021). In 2018, a hacktivist was convicted for launching a massive DDoS attack on Boston Children’s Hospital that disrupted their network for 2 weeks. EY states that DDoS attacks can severely impact hospitals with lesser defense capabilities, essentially halting its operations (Verizon, 2020). Ramifications of a DDoS attack can be catastrophic, especially right now because of the pandemic."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-industry-trends-index-mdx-1a8bfe3cb81885fa7b7c.js.map