(window.webpackJsonp=window.webpackJsonp||[]).push([[23,34],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),s=t.n(i),n=t("NmYn"),l=t.n(n),o=t("Wbzz"),r=t("Xrax"),c=t("k4MR"),b=t("TSYQ"),p=t.n(b),d=t("QH2O"),m=t.n(d),g=t("qKvR"),A=function(e){var a,t=e.title,i=e.theme,s=e.tabs,n=void 0===s?[]:s;return Object(g.b)("div",{className:p()(m.a.pageHeader,(a={},a[m.a.withTabs]=n.length,a[m.a.darkMode]="dark"===i,a))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},t)))))},u=t("BAC9"),h=function(e){var a=e.relativePagePath,t=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=t||i,n=s.baseUrl,l=s.subDirectory,r=n+"/edit/"+s.branch+l+"/src/pages"+a;return n?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},f=t("FCXl"),O=t("dI71"),w=t("I8xM"),y=function(e){function a(){return e.apply(this,arguments)||this}return Object(O.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var a,t=l()(e,{lower:!0,strict:!0}),n=t===s,r=new RegExp(s+"/?(#.*)?$"),c=i.replace(r,t);return Object(g.b)("li",{key:e,className:p()((a={},a[w.selectedItem]=n,a),w.listItem)},Object(g.b)(o.Link,{className:w.link,to:""+c},e))}));return Object(g.b)("div",{className:w.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":a},Object(g.b)("ul",{className:w.list},n))))))},a}(s.a.Component),j=t("MjG9"),x=t("CzIb"),v=t("Asxa"),N=t("OIbQ"),k=t.n(N),T=function(e){var a=e.date,t=new Date(a);return a?Object(g.b)(v.c,{className:k.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:k.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,s=e.Title,n=a.frontmatter,b=void 0===n?{}:n,p=a.relativePagePath,d=a.titleType,m=b.tabs,u=b.title,O=b.theme,w=b.description,v=b.keywords,N=b.date,k=Object(x.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,S=C?i.pathname.replace(C,""):i.pathname,z=m?S.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=O||k;return Object(g.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:u,pageDescription:w,pageKeywords:v,titleType:d},Object(g.b)(A,{title:s?Object(g.b)(s,null):u,label:"label",tabs:m,theme:I}),m&&Object(g.b)(y,{title:u,slug:S,tabs:m,currentTab:z}),Object(g.b)(j.a,{padded:!0},t,Object(g.b)(h,{relativePagePath:p}),Object(g.b)(T,{date:N})),Object(g.b)(f.a,{pageContext:a,location:i,slug:S,tabs:m,currentTab:z}),Object(g.b)(r.a,null))}},"72wY":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return d}));var i,s=t("wx14"),n=t("zLVn"),l=(t("q1tI"),t("7ljp")),o=t("013z"),r=(t("qKvR"),{}),c=(i="FeatureCard",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:r},p=o.a;function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)(p,Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)(c,{title:"Approach 4 - Geospatial Analysis of Data Breaches",color:"dark",mdxType:"FeatureCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVQI1w3M7ysDcQCA8f1JK2+UqJXkkssrRYoXSo3UXvBih/KG/4DXa2nNssWLzURkVxRzXtiMufmxX3fsHPsex1KPe/H0vPv4VtcTbEQ1QisxhkbmCCubRKIqgYFRkpljSpU6B9c6uZtXzPdvHmo2hu1StRyKjw1OL4rsZHJsJfa50xv4ZGkSWZpgWBon0DOI3C/T3dXH2FSQJ7ONmi8QS6bZ3s1ypF5RqVm0xB9Gu4P56SLcDpb4pfnmcFv2wNnpZRbn1wjNKCwEl7wU/P5eIvE9DxSUqo53l3zhhVRaJZ46JHtyyZlW5tkQ6E2beusL6+OHc+2ef21MuaKuuvLHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/00e2cd92961460e0e959fe5302b980ca/3cbba/analytical-banner.png",srcSet:["/platform/static/00e2cd92961460e0e959fe5302b980ca/7fc1e/analytical-banner.png 288w","/platform/static/00e2cd92961460e0e959fe5302b980ca/a5df1/analytical-banner.png 576w","/platform/static/00e2cd92961460e0e959fe5302b980ca/3cbba/analytical-banner.png 1152w","/platform/static/00e2cd92961460e0e959fe5302b980ca/0b124/analytical-banner.png 1728w","/platform/static/00e2cd92961460e0e959fe5302b980ca/4ea69/analytical-banner.png 2304w","/platform/static/00e2cd92961460e0e959fe5302b980ca/9b536/analytical-banner.png 6016w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("p",null,"Our team collected data about healthcare data breach cases in the last 12 months. The data includes information about the entity, individuals affected, type of breach and state. The goal was to plot this data visually to highlight any anomalies and patterns which will help the government and organizations focus its cyber resources."),Object(l.b)("p",null,"Process:"),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.041666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVQY0x3M/0sacQDG8fub+gvaT7EfamNQiyyCNWoEsaLbIimZtpwRYgbN6AvhOTMi2NxoG1H9IA6kIk9HVJuMiCWDTNTurNPP+Z7e8+OL53mk61ye8MZHptw+llZC6LrO3XWOePADisPJ1vtFCoUCZr2nffmGthriNrpNtXSLfl9mXY3xajeMvBcmW7xB8ngVWtpe0NE1SOvjbkJbUXKzfj41P8T1pANb2yOUSATDu0C+s4+ifYrCtBfx44Cv8V3aZ0Z5sOKiac3BRGwTKXHwk+eDTl7KHp4NjJM6OSV/eIz/qY23vX3IPb0k02nEkcrNiJ2Sw032jYdi5g+X/654vTzLiOKnO+DieyqBpOt3+BY26B96x/CYj0bymsZ8IMBQ/wCTskytgYZBeWcfbVmhFIxg1mqWf96J4g7MYJ9zYuhlJCEEQpio6TOSqVPrUFQqVOt+kVT5q6Ytq1WrCNPEOP9N5eyXZWa9Ux+TyV6SyJxY9h9Aiz1lVn0AgQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial1",title:"Geospatial1",src:"/platform/static/e7923ae3d31c60ba46bf1a49ae77eb27/3cbba/Geospatial1.png",srcSet:["/platform/static/e7923ae3d31c60ba46bf1a49ae77eb27/7fc1e/Geospatial1.png 288w","/platform/static/e7923ae3d31c60ba46bf1a49ae77eb27/a5df1/Geospatial1.png 576w","/platform/static/e7923ae3d31c60ba46bf1a49ae77eb27/3cbba/Geospatial1.png 1152w","/platform/static/e7923ae3d31c60ba46bf1a49ae77eb27/ef674/Geospatial1.png 1230w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("hr",null),Object(l.b)("p",null,"First step, we ",Object(l.b)("em",{parentName:"p"},"collected")," the data breaches data from the ",Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf"}),"US HHS site")," and imported it in our data source database."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"857px"}},"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVQozz1R2W7TQBT1vxUJpLI8IgoS4u8QDzz1gVaAWirSOIuy0DQNTWI7tuPd4/Hu1JnDHT8w0tW5M+fcO3dRTNOEYRiwLAs7Qtu2sdvtoGka5vM5ZrMZptNp50utNKmRMZqmw7F3UCc6+r8XFKdBUVUV/X4fg8EAFxcXHQ5HI4zIvtF9OBzi8vISV1fXkNrz83NMJhOMx2P0ej3CEW5vx/jy+SthD4r8zXUdrFYrbDabrlJphq53gbJSw9Dh+z62201XsezAokpZHCMm0/Ut7u8XcBwHCktSFFUD1w/hkRVlA8Yz+GGMu8USfhAhJk3zdOxw7/rI8hJ7x4O1d5GSH8YJHDdA3TxBiZMMLC0QshR+lBCZIkpyeCGDZtiUOEEQ8/8aj+4hyzru71qHTYkeNzrmd0vwvILCOafMDbWz7QbOGEOeFx0+rteIoggRtdWQhvOUxuN2vByFHIM8ruvRWHZo2xYKVSSSrBSm7Qpz74kg4oIqEPSzoF+F40ci5rlIi7rjbCcQMma5WosZ8RbFGOZe/Fk8CEY6JSsPbZJVoqhbUR3EMS2alue1kG/EHaVPKFhaSv9Y1EfJdRrSCsL2cWuI8fRPy3jRKgm1UZQ1TGuPnWkhCCPwNAdLOL3Z1C7rrG4OkAt0aClpVnQo9XJBnh/A9XwcaHHKoWneH9unFzc3v55dX1+98Tz3A43l1Pfc5wNVfZsk7LSqyhN6e9fU1WueJCd1XZ0NBurLnz++n64elmdVWb4i/hMgPv4DVgrTiU8I4p0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial2",title:"Geospatial2",src:"/platform/static/04d45cb298fe06b37200634dad1c8fec/45167/Geospatial2.png",srcSet:["/platform/static/04d45cb298fe06b37200634dad1c8fec/7fc1e/Geospatial2.png 288w","/platform/static/04d45cb298fe06b37200634dad1c8fec/a5df1/Geospatial2.png 576w","/platform/static/04d45cb298fe06b37200634dad1c8fec/45167/Geospatial2.png 857w"],sizes:"(max-width: 857px) 100vw, 857px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("p",null,"Second, we ",Object(l.b)("em",{parentName:"p"},"prepared")," the data for a Geospatial Analysis. As part of this process, we cleaned the data and grouped the cases per state, including latitude and longitude, count of data breach cases and sum of individuals affected."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"696px"}},"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVQoz02Sy2/TQBDG/c8gUE+IE0VIvSGB4Mo/xoVzQRUIIYRAlEJBrWgb9ZU0ieM4TuI8nKftOE78XHu9H2MHEIeRVt/Ozs5vvpE+nxj49KuHdz90HJQG+HDUw+6+jreHPex90/Fqv4PD8wH2vut4fUDxVcfPSwO7BwO8eN/Bh+Mh3hwO8fKjji9nI0jDsQnL8WCMZ/DDGK4XYeUnRXghx2hq46qiwPXTQnM9hrnlYrmOcFFWcE6xXDPKaaB0WYc0ndtY+xEsy0KSJAiiBDHLEMYcLAXm5gL1RhshE4gYL2JmOggpT2lqqNZb8CMOTevQWaWCdOmsQipoI4ry7mKswxTrIKHEDN3+CA21j1XA4QUbfWousfJiaN0h1K4Baxmi1e6jqQ3yDhfUcoj5fA7GGD1iCKg7P0oRJ0B/OEalppImqPu00Mczm/JiyIpW3Lk+g9xoFdjSdGbCI2TTNJGmKSKqwpKMsDnSDBgaY9zUFMSEzxJOn3DYjlvkVaoyLss10gTUloaL6yokc7EqBmzbC0oiXEL2CPlvdHsjqB2DUPlGI+zJ3KE8hrZuoNHajKPbMwi5D2lC7TtuQMgm4v8K5rMK4gzD0Qw3cpvmmv0rOCOX8xk2tR5kVceSnM/xb3JTLNsRhCyooCBkQSiCkAUhC55BjEYTUakqghwnnQtCFovlWoRRLG6qcnHnh4mQ5Ya4KteEZDurYvcs26YO/5gSbUyJEiF6gzG5rOeOZ2RKlutTQs5NaWo6rze7Wb4VWlsXNVoviXYqIpcz2sOQkEVekPYq88M0CWkfTdsNlFaPefRJ4XKYRtZiHeSjaba6qCkdGk/KFbWNWkPLJGM03mIseTCZTu9kWfYw5XxHCGzT+R6AR4uFfbtcrtwVwFMhxDPSt9zV6laaJjvX1+XnJ6elJ1zgfuns9PHx8dH2bzLSbXWh6iL6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial3",title:"Geospatial3",src:"/platform/static/21ba0992cc1111783f06a05b6cb4aeb5/19b24/Geospatial3.png",srcSet:["/platform/static/21ba0992cc1111783f06a05b6cb4aeb5/7fc1e/Geospatial3.png 288w","/platform/static/21ba0992cc1111783f06a05b6cb4aeb5/a5df1/Geospatial3.png 576w","/platform/static/21ba0992cc1111783f06a05b6cb4aeb5/19b24/Geospatial3.png 696w"],sizes:"(max-width: 696px) 100vw, 696px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("hr",null),Object(l.b)("p",null,"The IP longitude/latitude data points for all data breach cases in the last 12 months were imported into the Tableau analytic tool. To create the map we used two dimensions, the sum of individuals affected (size of the bubble) and the count of data breach cases (color of the bubble)."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"987px"}},"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVQoz1WSW3OiQBCF+f9P+392vWTjmmhSgVEQBbkKzIARRH3Jip50z7JVCVWnhqK7vz5nCqM5HnEktW2L0+mk38/nM65dh9vt9k0dfeu6m66xcAf+fnzAzTOMnADy/Qhj6jh4Wa+xy3MURQGlFFRZouwVJAncMNS1930FKSXCNNUzThCgbhrUlwsCWeHQtDDGQmCyXKKQBTUXepCHWAyMaJHwt1jR8Eys4QYRFr6HJzLy8+0NCdUvlKxtanTXK4yHxQLsMtllSHuXDMvp5CWZVLCiBDMvwNT28LB0MBIWeG5kWXB9HyWlqvZ7XBn4mwqP9hK/5gJBnEIqiYxg+6rSDnd5QYsIXEisokhDGMYamiY25Lypa9QkvmPjkeJybAb7cYwky7S7lRdiGyaoSqWdu1GMP33vf+Cgj/z10XfIW4d8l7atoYpchuTW3PiYr12KaePHaI6BJTDmqOLfOSCH6nDQoPv9rmXYZNncbPBETaxXgnrbLdIkxqtjY2JamNL3qVjgmSC6rz9n1NvQ7/YV+Anpj0OV0kaYhAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial4",title:"Geospatial4",src:"/platform/static/0c1eead945ec70cf48d31347d8088d0e/befe7/Geospatial4.png",srcSet:["/platform/static/0c1eead945ec70cf48d31347d8088d0e/7fc1e/Geospatial4.png 288w","/platform/static/0c1eead945ec70cf48d31347d8088d0e/a5df1/Geospatial4.png 576w","/platform/static/0c1eead945ec70cf48d31347d8088d0e/befe7/Geospatial4.png 987w"],sizes:"(max-width: 987px) 100vw, 987px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("hr",null),Object(l.b)("h3",null,"Insights gathered from this analytic:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Results show a national data breach trend (845 cases), in all states (including Alaska and Hawaii), only exception is South Dakota."),Object(l.b)("li",{parentName:"ol"},"Some states (e.g.: FL and WI) have more big data breach cases impacting more individuals, other states have more cases in small organizations."),Object(l.b)("li",{parentName:"ol"},"Increased number of cases during the COVID Pandemic (when compared with previous reports)."),Object(l.b)("li",{parentName:"ol"},"More than 72% of  cases were caused by hacking and IT incidents."),Object(l.b)("li",{parentName:"ol"},"Map visualization tool helped us to easily visualize data distribution and made us ask questions and look for answers."),Object(l.b)("li",{parentName:"ol"},"This visualization helped us to identify anomaly and patterns to define a cybersecurity strategies."),Object(l.b)("li",{parentName:"ol"},"The map is a really good tool to create an executive dashboard (see slide 66) to help Government and Organizations define a cybersecurity plan, standard and laws (see examples below).")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://healthitsecurity.com/news/ca-attorney-general-calls-out-unreported-healthcare-data-breaches"}),"CA Attorney General Calls Out Unreported Healthcare Data Breaches - HealthITSecurity News"),"\n",Object(l.b)("span",Object(s.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"642px"}}),"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"130.20833333333331%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoElEQVRIx41VyW5jRRR9f4fEFokFCz6ADQKJBWqxYMeCFUJI0IqSKKQzdaKQeeqEDJ04k+14nhLH4/MQd9uOn99k53BuPTsddYTA8tG9r4ZT956quqVFIhEsLS1hbm5OYWdnB8vLyzg4OMD8/Lz63t7exsrKCtbX1zE+Po79/X1MTk4ilUrh45+WSCQU4e7uLhYWFh7Jp6amlD8xMYGxsTFFure3h5mZGaytrSny1dVVFItFRKNRSGDNZhNaMpnE69evVefIyAg2NzexsbGBw8NDLC4uYnp6WvVJhFtbWzg6OlKL+Xw+zM7OqrkSwOjoKMLhMLR6vQ5d11GpVCDk8l0oFNTKYqvVKrLZLEqlEsrlsuoXK22NRkP5MlbaVcoyQZhTJJPQY0Ry4GcyGQQCAUTYL9KEQyH4Ly/Vt/ihqyvVL1bmtdttaDUyh5h/LBHHOQdH43Fkbm4QicWQur5GmAOvGU3XstDudHBvGDDoG6aJDtGgbqqNvuO60Eyy1jihzbQb+TzeEU2m0Li99b5zOTQLRTxwHO7vgbag/RwkBhfU+ncNONEYnHgCPdpeJKrQp8+tQ5+ROkzJ8gdgXfoV7ItL2OfncAj77MzDyQlcSqW59Tt0Q2GYJLBobWpj0zffHqI0NwNjZxs2iS1qZQeCtEHYJHcoj8LFhYJ9egqX51IRmiSyqJVNsZ2rEHqxBBrry1hf20D01Z9wDvdhhSOKaEho+/3PCdNpaL07j9BMpGDF4kzNj9b7JipHfyNA5Hc2cDf6Eq7qG0TpfxKlENJ+IGSElqQboD4jv+BuewVZnqdSIonkxB844QLZhTn0Tn2eJCrCoEf+NHXq6BHycLaDIaS/+wrmF5/g3fdfI3oVRjR9g+z0K+zNzSK9/Bd6vhOmTWmCQY/0qZ6S/pBQNLQYTfDHH6B/+Tnan32K9M8/oR1PwqFu5toKjDfbcCQ62e3g1QfSQZSK9DHCWp0DQ2onu9TDePkb6i++edwg2XEhtgPeRthybJR2A/2Gx+fEx2OTGhDKKjwuct6cSAzGi2/R/v1XklzBfnsM+/gEju8UzukZIzl/JFE489rs4wGh2+AuyzmLxzyNGNU9J7dYbUxGYzISgXXh9w73AB/S9XsguZvOQLNbLXR4zTr5HDq5W3QLeTh6mdBhl4qwBEVBARarj8XrKLB5Je1bInvr4foGrl5hhLzQlm2j5zpwbQv9ngs8PPD/H4Bnn1XsGO/qOXXIlusI5+5QeW/g//yGXLFMA6uBBtbTBt4EytCksBaYgmHaaBkWOl1TRduXiB2CGfwb+n0X5WoLoVwTkaqFrH4PrcOSI1W3Qs3qtSrJc8hkc4jdFJHNF9Vi16yPedob2hy1u6XmAlXJqW0pn0WrUfNSlodlWPLLZR1VRlwsV5DT+TRUWe4HpV8yESuQ50AgbVLxDaOLLgtsv/8ATcq2rO4Rlgd+ARX6+mCy9Mm7I1b6pW04R4IxSebpSsJ7VmEZUKvV1GoyUaysrusV9S0PkLTJmGFUsrh8i23x6ImmilAa5U0VbeThFm3kcZKHaujH5Z2hveYbIzqKn+a9FQ0FMlaild8/1zxOQrCX068AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial5",title:"Geospatial5",src:"/platform/static/939d13d837394bb09a08af890d9c2ebb/20333/Geospatial5.png",srcSet:["/platform/static/939d13d837394bb09a08af890d9c2ebb/7fc1e/Geospatial5.png 288w","/platform/static/939d13d837394bb09a08af890d9c2ebb/a5df1/Geospatial5.png 576w","/platform/static/939d13d837394bb09a08af890d9c2ebb/20333/Geospatial5.png 642w"],sizes:"(max-width: 642px) 100vw, 642px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://healthitsecurity.com/news/growing-number-of-states-enact-new-genetic-data-privacy-laws"}),"Growing Number of States Enact New Genetic Data Privacy Laws - HealthITSecurity News"),"\n",Object(l.b)("span",Object(s.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"642px"}}),"\n      ",Object(l.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"129.86111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Geospatial6",title:"Geospatial6",src:"/platform/static/17fb27c1d5e9efa32be72797031d4f0b/20333/Geospatial6.png",srcSet:["/platform/static/17fb27c1d5e9efa32be72797031d4f0b/7fc1e/Geospatial6.png 288w","/platform/static/17fb27c1d5e9efa32be72797031d4f0b/a5df1/Geospatial6.png 576w","/platform/static/17fb27c1d5e9efa32be72797031d4f0b/20333/Geospatial6.png 642w"],sizes:"(max-width: 642px) 100vw, 642px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}d.isMDXComponent=!0},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}}}]);
//# sourceMappingURL=component---src-pages-analytical-geo-index-mdx-df510854dcdb2b63a932.js.map