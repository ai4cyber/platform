(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),b=a.n(d),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},f=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},y=a("FCXl"),v=a("dI71"),x=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(p.b)("li",{key:e,className:b()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(p.b)(l.Link,{className:x.link,to:""+c},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},i))))))},t}(o.a.Component),j=a("MjG9"),O=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,d=void 0===i?{}:i,b=t.relativePagePath,u=t.titleType,m=d.tabs,f=d.title,v=d.theme,x=d.description,k=d.keywords,T=Object(O.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,N=m?I.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",C=v||T;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:f,pageDescription:x,pageKeywords:k,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):f,label:"label",tabs:m,theme:C}),m&&Object(p.b)(w,{title:f,slug:I,tabs:m,currentTab:N}),Object(p.b)(j.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:b})),Object(p.b)(y.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:N}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Xm5g:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},c=r.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To meet the unique needs of your business and remain competitive in today’s fast-moving environment, you may find yourself adopting infrastructure and solutions from a wide range of cloud vendors."),Object(i.b)("p",null,"A hybrid, multicloud world is quickly becoming the new normal. But managing your cloud-based services and data across multiple providers can feel overwhelming. With each set of cloud services coming with its own tools, you’re likely facing increased complexity and cost. New management solutions and delivery methods can help optimize performance, control costs, provide quick cloud access and secure your mix of applications, environments, and data, whether they are inside your data center or in the cloud."),Object(i.b)("p",null,"IBM Cloud Pak for Platform can manage Kubernetes clusters that are deployed on any target infrastructure - either in your own data center or in a public cloud. IBM Cloud Pak for Platform includes IBM Cloud App Management to simplify monitoring your applications across any cloud environment."),Object(i.b)("p",null,"IBM Cloud Pak for Platform helps companies make the transition from traditional monitoring systems to cloud-based ones more easily. It effectively monitors all kinds of IT resources in a hybrid environment. It helps Operation teams manage hybrid environments without hiring new personnel to support each new technology that is being used by developers."),Object(i.b)("p",null,"IBM Cloud Pak for Platform provides consistent visibility, automation, and governance across a range of multicloud management capabilities such as cost and asset management, infrastructure management, application management, multi-cluster management, edge management, and integration with existing tools and processes. Customers can leverage Cloud Pak for Platform to simplify their IT and application ops management, while increasing flexibility and cost savings with intelligent data analysis driven by predictive signals."),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"70.53571428571429%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",Object(n.a)({parentName:"div"},{src:"https://cdnapisec.kaltura.com/p/1773841/sp/177384100/embedIframeJs/uiconf_id/27941801/partner_id/1773841?iframeembed=true&playerId=ibm-dynid-1_playercontainer&entry_id=1_aiyo4xli&flashvars[streamerType]=auto",allowFullScreen:!0,webkitallowfullscreen:"",mozallowfullscreen:"",allow:"autoplay *; fullscreen *; encrypted-media *",frameBorder:"0",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("p",null,"For more information about IBM Cloud Pak for Platform, visit: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/cloud-pak-for-management"}),"https://www.ibm.com/cloud/cloud-pak-for-management")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-introduction-index-mdx-c377c164b5d26c0a0d86.js.map