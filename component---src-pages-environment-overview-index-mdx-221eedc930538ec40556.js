(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,s=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,s=new RegExp(o+"/?(#.*)?$"),b=n.replace(s,a);return Object(p.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(p.b)(i.Link,{className:j.link,to:""+b},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},r))))))},t}(o.a.Component),y=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,c=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=c.tabs,h=c.title,f=c.theme,j=c.description,k=c.keywords,w=Object(T.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,C=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",N=f||w;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:N,pageTitle:h,pageDescription:j,pageKeywords:k,titleType:d},Object(p.b)(x,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:N}),m&&Object(p.b)(v,{title:h,slug:I,tabs:m,currentTab:C}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:C}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wRKM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),s={_frontmatter:i},b=l.a;function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Cloud Pak for AI4Cyber on Red Hat Openshift Kubernetes Services"),Object(r.b)("p",null,"The DTE Team has launched the ability to provision Managed OpenShift clusters with the ability to manually install Cloud Paks on those managed clusters."),Object(r.b)("p",null,"After you follow this documentation, you will have a Cloud Pak for AI4Cyber v.13 running on a ROKS v4.3 environment. During the reservation process, you are able to define the expiration date of your environment, max of 14 days."),Object(r.b)("p",null,"Have you tried provisioning your own Cloud Pak for AI4Cyber on ROKS? If not, here you have all the steps to do it! It is a dedicated/personal environment with no extra cost for you."),Object(r.b)("p",null,"In the next steps you will learn how to request your environment and how to install Cloud Pak for AI4Cyber."),Object(r.b)("p",null,"If you have any issues or feedback, please share it on the slack channel called ","#","pak-roks. Enjoy it!!"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environment-overview-index-mdx-221eedc930538ec40556.js.map