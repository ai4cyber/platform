(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),i=a.n(A),r=a("NmYn"),n=a.n(r),o=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),b=a.n(c),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===A,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||A,r=i.baseUrl,n=i.subDirectory,s=r+"/edit/"+i.branch+n+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,i=A.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),l=A.replace(s,a);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(i.a.Component),E=a("MjG9"),B=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,p=c.tabs,u=c.title,x=c.theme,f=c.description,O=c.keywords,v=Object(B.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=y?A.pathname.replace(y,""):A.pathname,N=p?T.split("/").filter(Boolean).slice(-1)[0]||n()(p[0],{lower:!0}):"",k=x||v;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:k,pageTitle:u,pageDescription:f,pageKeywords:O,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):u,label:"label",tabs:p,theme:k}),p&&Object(m.b)(w,{title:u,slug:T,tabs:p,currentTab:N}),Object(m.b)(E.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:b})),Object(m.b)(h.a,{pageContext:t,location:A,slug:T,tabs:p,currentTab:N}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CRKn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var A=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),n=a("013z"),o=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=s("FeatureCard"),c=s("Row"),b=s("Profile"),d={_frontmatter:o},p=n.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(A.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{title:"Team roles",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAZ0Bng//xAAXEAEBAQEAAAAAAAAAAAAAAAABAhIE/9oACAEBAAEFAt5a6RKpX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAMAAwAAAAAAAAAAAAAAAAARIQEzQf/aAAgBAQAGPwJrhruCn//EABgQAAMBAQAAAAAAAAAAAAAAAAERIQBB/9oACAEBAAE/IblTA4JwZgzAV3//2gAMAwEAAgADAAAAEHAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMUFh/9oACAEBAAE/EAEoBpfcqOvqUfSorYqf/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/25585ff2f078927fe639a69e1d8a2cc1/2e753/roles.jpg",srcSet:["/platform/static/25585ff2f078927fe639a69e1d8a2cc1/69549/roles.jpg 288w","/platform/static/25585ff2f078927fe639a69e1d8a2cc1/473e3/roles.jpg 576w","/platform/static/25585ff2f078927fe639a69e1d8a2cc1/2e753/roles.jpg 1152w","/platform/static/25585ff2f078927fe639a69e1d8a2cc1/74f4b/roles.jpg 1728w","/platform/static/25585ff2f078927fe639a69e1d8a2cc1/12e8d/roles.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(c,{mdxType:"Row"},Object(r.b)(b,{name:"Xavier George Manayil Joseph",title:"Xavier is the team coordinator. He is the responsible to research on existing security technology solutions used in the healthcare industry and how an AI4Cyber solution could improve the technology portfolios. He contributes to the prototype with his basic technical skills and experience sitting at the intersection of business and technology with respect to security. He will also summarize the key insights and intelligence derived from the selected analytics.",mdxType:"Profile"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"172px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"125.5813953488372%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiElEQVQ4y71UWVBTZxQ+YWlBUBFkExQEAUWIhC2EVUgIhLCTsIhhLwGFgGIFxbJWsWyCIiBTRaEgS13QUVCqiMjWkUVE7NiHTp/a6eJD+0biPf1vvHQ6bXWmLz0z38y9/znn+8/ynwN8Ph9EIhG4u3PB3sEJGhvKWE5ObCCymcfj5aWk7BuUSqKnYmMiJpMSpf3e3t45RLfJ2toGWlvrWVpaumBmZgFubm7g6uoKQJzAheMOdva7aRIQi0MIuYe86HD+z50Xz+EhRTZGhgnVKDqci5UVJSjPzvjRxsY2QywOBUQEbW1dMDIyUZMCl+sJHp7eMHKnixUvjYbAwMAzZ5tr8Nn8Q8xKkSq9HK2Ucf4cVWqwmyphr7OS7++mHBy4hI0Np5DNZp8OjxBBR0cT64MP9Egg7gAbDYwhNFSo6eLiCh4e3ILGhmr86YdlZd3J4yohxxpbsvlUX2k8NVieRHUeiqbkkT6YvC9G9WJlSlVzqgzt7OzltrZ24Ovro7lly1Z1yix4KxaFipzfXjx7hC+XJ97kZyVhSawX1Xs0ivqySobXPk3DrpIkqlkhpWSSELw51KNaXBjHrKzUX4mvMU3g7MxmgYiOjsMh+bsfvdrdjq+WJ1ZXlh5jqSKdKojwwOIEPzxXEIV95fvxRIoQ8xP5KE+OoG7f7sXny5PKi583o5OTs8LR0RH4/EBNGBsd1Lh57RKQTg4/GbuBz+cfKFeePaaaj2dhQ2YQVqQI8Ex2KLbIBViZLsKTWWKsOCjFe8MD1NzTMeXovUGMjgofOtNQDR0XGjSYbEE7M33/wtLcfUL4lWpl8SHVfGQ/tivC8e7pDOw/JsGeo7HYXSzFa1WpWHWAEN7po2ZnRlUzU8MokyXOEo610v1JuEjI1ITfPB+nLlTlYV1aEPafSMLmA2I8mSHCUxlh2F4owfLcRBwdGaCmp0dUM5N3MeWvhAtfj2g8GOkDSVzUyPTjISTRKV8ujVMPbnViU04YtuSKsDYrDOuzY7E4MQjLkvnY+lkJTjwZpqanhpX3RwYwJjriVmN9JbS31mmAMJiv6ezsDGz2nmP9Pe34/bczq9+9msX56btUZbqQ1FGI5xUxWCePxKq0EMyP88OrXeephcVJXJgbW+28eBY5HNdC0mEQCgWab1v9ViwL8+W/Lz29j4O9bW+O5KdiZZqQKt3njyXJAvw4iY9ZET547CMJVVZ6GNta61WTE3cw72D2a+JrShPweN4s0NUzUD9Knrc3/XQKo8ODUcznKTNkcarL1XnYlBlElcsCqaJ4XyovZA/VVVuMZ5tqVFw3J6U0LhIFguDckJAQEAj4mhYWVgCenp6w2dgc6qqLQBDkTw94c5A/F0tLFHijo3q1LdNXefMTqaq7IEzVXZmjXJ4fX62tKUc/Hy76+wfU8ry4IBLuZfn4BpAx5oJ6Q5iaWcLWbTbqvE2MDGHXrl15keHi120tddh7rgK/KEnA3rJUHBsdwt6eKygUBP0SEBCQvV5/PVwIA/APCCTZeQI5e1s8ekGwXTiw09EJwvg8loPDTlKKjaaOu50PJslk1+PChbMJMeJZSbzkOsfFJdfbL9DYy4sH2yxMWeERURAZGUW2lBj+IdusrAmswG7HDi0jUgY2xw0ezc2pVxSNy71XwJXjCoKQcNjDZmvR28WDlOx9Qndck37oOkQMDDbq29ra6G83N9KzsTTRs95upW9oaKivp6enQ9swtqz3kWkRrCMwYDaIGYE5wRYG5syZMWOzjvH5V1J6sOmbDek3SUB3yZ5g599gz+gsGVsdxvedhJuYaLYT7GAIHBjYM2e0zoKxfSfhWsq6BBuY2+nUTJhJMGW+jRndBsZW6311XItUiyn6hwx0GKz9azM2GvAfhfUO/H/yB2BeRK2i+59NAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"xavier",title:"xavier",src:"/platform/static/caa4e7751d19e82ac81759ecede0d869/77fb9/xavier.png",srcSet:["/platform/static/caa4e7751d19e82ac81759ecede0d869/77fb9/xavier.png 172w"],sizes:"(max-width: 172px) 100vw, 172px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-about-roles-index-mdx-800f02d899ca2f7c4629.js.map