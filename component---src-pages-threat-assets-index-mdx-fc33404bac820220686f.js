(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),i=a.n(s),r=a("NmYn"),n=a.n(r),c=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),A=a("TSYQ"),d=a.n(A),b=a("QH2O"),p=a.n(b),u=a("qKvR"),m=function(e){var t,a=e.title,s=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===s,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,s=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||s,r=i.baseUrl,n=i.subDirectory,o=r+"/edit/"+i.branch+n+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,i=s.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),r=a===i,o=new RegExp(i+"/?(#.*)?$"),l=s.replace(o,a);return Object(u.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(c.Link,{className:O.link,to:""+l},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(i.a.Component),x=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,i=e.Title,r=t.frontmatter,A=void 0===r?{}:r,d=t.relativePagePath,b=t.titleType,p=A.tabs,h=A.title,j=A.theme,O=A.description,w=A.keywords,k=Object(y.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=T?s.pathname.replace(T,""):s.pathname,N=p?E.split("/").filter(Boolean).slice(-1)[0]||n()(p[0],{lower:!0}):"",B=j||k;return Object(u.b)(l.a,{tabs:p,homepage:!1,theme:B,pageTitle:h,pageDescription:O,pageKeywords:w,titleType:b},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:p,theme:B}),p&&Object(u.b)(v,{title:h,slug:E,tabs:p,currentTab:N}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:d})),Object(u.b)(g.a,{pageContext:t,location:s,slug:E,tabs:p,currentTab:N}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},oF5j:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var s=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),n=a("013z"),c=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=o("FeatureCard"),A=o("AnchorLinks"),d=o("AnchorLink"),b={_frontmatter:c},p=n.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{title:"Critical Assets Identification",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHOiUjSC//EABcQAQADAAAAAAAAAAAAAAAAAAACAzH/2gAIAQEAAQUCqT1//8QAFREBAQAAAAAAAAAAAAAAAAAAEEL/2gAIAQMBAT8Bo//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/AYf/xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAYEAADAQEAAAAAAAAAAAAAAAAAAREhUf/aAAgBAQABPyF9kOYz/9oADAMBAAIAAwAAABAAH//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/EKP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/EB//xAAZEAEAAwEBAAAAAAAAAAAAAAABABExIWH/2gAIAQEAAT8QKyD7H3gupqf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/2e753/assets.jpg",srcSet:["/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/69549/assets.jpg 288w","/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/473e3/assets.jpg 576w","/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/2e753/assets.jpg 1152w","/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/74f4b/assets.jpg 1728w","/platform/static/5d89c0f0838c0fd03a6f9ffe58763ec9/12e8d/assets.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(A,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Critical Assets Overview"),Object(r.b)(d,{mdxType:"AnchorLink"},"Hardware"),Object(r.b)(d,{mdxType:"AnchorLink"},"Medical Devices/Integrated IoT Devices"),Object(r.b)(d,{mdxType:"AnchorLink"},"Data"),Object(r.b)(d,{mdxType:"AnchorLink"},"Source Code"),Object(r.b)(d,{mdxType:"AnchorLink"},"Networks")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Critical Assets Overview"),Object(r.b)("p",null,"We believe that hardware, medical devices/integrated IoT devices, data, source code and network are the critical assets that our industry need to protect. "),Object(r.b)("p",null,"  ",Object(r.b)("span",Object(s.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"766px"}}),"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.319444444444446%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzUlEQVQI1zWPXU+CUACG+f+/oc2t67a2SjZzzIJcikCpN24BTvkq5MAhCYmbp5Oti/fi/bh4Xq2sjiSpIFZq2w4pj5jWnEdzhhCSruuJ4gNxIpB1w+nU/e2VL4qavu/PPslK0kyg+WHKrf6EPnomP0j20TsXgysGl9cEYUJVNTxYK+4Nh11UqE3JaDznTp/ieBu+FMTEfOVmaDGzN2i7fc7C87HdN0X0SaE0NmyMicNHXlErqv/+l7RpWtyXgIXrE2wz9eAbbxmes+V6yw+5h9ahzSoHLAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"critical assets",title:"critical assets",src:"/platform/static/a4f6e9d34df8ce2421712a28ac5daf40/c6902/critical-assets.png",srcSet:["/platform/static/a4f6e9d34df8ce2421712a28ac5daf40/7fc1e/critical-assets.png 288w","/platform/static/a4f6e9d34df8ce2421712a28ac5daf40/a5df1/critical-assets.png 576w","/platform/static/a4f6e9d34df8ce2421712a28ac5daf40/c6902/critical-assets.png 766w"],sizes:"(max-width: 766px) 100vw, 766px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Hardware"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hardware")," includes tools such as servers, laptops, smartphones, desktops, tablets, pagers, etc. These are devices that are intelligently integrated in hospitals to make the right information available at the right place at the right time. They are essential to the functionality of the day-to-day operations at a hospital. These items are used by most individuals in the hospital. This includes employees such as doctors, nurses, technicians, pharmacists, clerical/administrative staff, IT staff, business staff, etc. If this asset is breached, hospitals won’t be able to perform daily tasks resulting in loss of revenue. "),Object(r.b)("hr",null),Object(r.b)("h2",null,"Medical Devices/Integrated IoT Devices"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Medical Devices/Integrated IoT Devices")," play an important role in delivery of many health care services. This includes devices such as remote patient monitoring, EKG machines, MRI machines, cardiac pacemakers, CT scanners and other networked medical devices. This asset is crucial in the day-today well-being for hospital patients. Individuals who use this asset include doctors, nurses, technicians and other frontline hospital workers. These devices cause security vulnerabilities and if breached can cause serious harm. It’s more than just a threat to data security, but hackers accessing medical devices can threaten the health of patients as well."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Data"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Data")," is considered one of the most critical assets for hospitals. This includes data such as medical records, personally identifiable information(PII/PHI), administrative information, financial information, credentials, clinical trial data, patient surveys and much more. This information is extremely vital because most of the critical assets identified tie back to data. The main individuals who use this asset include doctors, nurses, technicians and administrative staff. However, other business units such as billing/accounting, supply chain, marketing and IT can use this asset as well. If breached, this can cause a loss of sensitive data, operational downtime, reputational damage and financial losses for both patients and hospitals."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Source Code"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Source Code")," is an asset that includes but not limited to coding best practices, repository stores, test data, third party open libraries, encryption-at-rest/transit and credentials store. Hardcoded credentials are vulnerable in GitHub repositories. Another issue is test data, which if gets uploaded to GitHub, it could be compromised easily. Third party source code libraries used in medical devices have vulnerabilities like we see with NicheStack Libraries. SSL certs and credentials stored in any format should also follow best practices and secured at all times. Any of these threat vectors could always present a dangerous leverage for cyber theft and compromise application and data integrity."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Networks"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Networks")," are considered critical as it is the backbone of hospitals. Networks consist of electronic devices (i.e., firewalls, switches, routers, proxy servers etc.) that are linked with one another in order to share resources, exchange files and communicate electronically. Almost all patients and hospital employees use the network in order to access information such as medical records, patient information, prescriptions, etc. If breached, this will severely impact the day-to-day operations of the hospital including loss of valuable time and ability to care for patients. "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-threat-assets-index-mdx-fc33404bac820220686f.js.map