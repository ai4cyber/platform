(window.webpackJsonp=window.webpackJsonp||[]).push([[36,29],{"013z":function(a,e,t){"use strict";var i=t("q1tI"),A=t.n(i),c=t("NmYn"),n=t.n(c),s=t("Wbzz"),b=t("Xrax"),o=t("k4MR"),l=t("TSYQ"),r=t.n(l),p=t("QH2O"),d=t.n(p),m=t("qKvR"),g=function(a){var e,t=a.title,i=a.theme,A=a.tabs,c=void 0===A?[]:A;return Object(m.b)("div",{className:r()(d.a.pageHeader,(e={},e[d.a.withTabs]=c.length,e[d.a.darkMode]="dark"===i,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},t)))))},f=t("BAC9"),u=function(a){var e=a.relativePagePath,t=a.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,A=t||i,c=A.baseUrl,n=A.subDirectory,b=c+"/edit/"+A.branch+n+"/src/pages"+e;return c?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:b},"Edit this page on GitHub"))):null},h=t("FCXl"),O=t("dI71"),j=t("I8xM"),w=function(a){function e(){return a.apply(this,arguments)||this}return Object(O.a)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,i=a.slug,A=i.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(a){var e,t=n()(a,{lower:!0,strict:!0}),c=t===A,b=new RegExp(A+"/?(#.*)?$"),o=i.replace(b,t);return Object(m.b)("li",{key:a,className:r()((e={},e[j.selectedItem]=c,e),j.listItem)},Object(m.b)(s.Link,{className:j.link,to:""+o},a))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:j.list},c))))))},e}(A.a.Component),y=t("MjG9"),x=t("CzIb"),k=t("Asxa"),E=t("OIbQ"),B=t.n(E),v=function(a){var e=a.date,t=new Date(e);return e?Object(m.b)(k.c,{className:B.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:B.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(a){var e=a.pageContext,t=a.children,i=a.location,A=a.Title,c=e.frontmatter,l=void 0===c?{}:c,r=e.relativePagePath,p=e.titleType,d=l.tabs,f=l.title,O=l.theme,j=l.description,k=l.keywords,E=l.date,B=Object(x.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,Q=N?i.pathname.replace(N,""):i.pathname,C=d?Q.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"",I=O||B;return Object(m.b)(o.a,{tabs:d,homepage:!1,theme:I,pageTitle:f,pageDescription:j,pageKeywords:k,titleType:p},Object(m.b)(g,{title:A?Object(m.b)(A,null):f,label:"label",tabs:d,theme:I}),d&&Object(m.b)(w,{title:f,slug:Q,tabs:d,currentTab:C}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(u,{relativePagePath:r}),Object(m.b)(v,{date:E})),Object(m.b)(h.a,{pageContext:e,location:i,slug:Q,tabs:d,currentTab:C}),Object(m.b)(b.a,null))}},BAC9:function(a,e,t){a.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},H5UU:function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return m}));var i=t("wx14"),A=t("zLVn"),c=(t("q1tI"),t("7ljp")),n=t("013z"),s=(t("qKvR"),{}),b=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}},o=b("FeatureCard"),l=b("AnchorLinks"),r=b("AnchorLink"),p={_frontmatter:s},d=n.a;function m(a){var e=a.components,t=Object(A.a)(a,["components"]);return Object(c.b)(d,Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)(o,{title:"Diamond Models",color:"dark",mdxType:"FeatureCard"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABkDMH/8QAGhAAAgIDAAAAAAAAAAAAAAAAARIAAgMEEf/aAAgBAQABBQJWIDzY5bJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIUGx/9oACAEBAAY/Aloq8b8LOH//xAAaEAEAAgMBAAAAAAAAAAAAAAABEUEAECFR/9oACAEBAAE/IXkKhnFsIR5pA//aAAwDAQACAAMAAAAQ88//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAAIDAAAAAAAAAAAAAAABEQBxITHR/9oACAEBAAE/EBQeDhas9xi+jnZNhhGh0Oduf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/2e753/diamond.jpg",srcSet:["/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/69549/diamond.jpg 288w","/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/473e3/diamond.jpg 576w","/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/2e753/diamond.jpg 1152w","/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/74f4b/diamond.jpg 1728w","/platform/static/14b25cd5ecaa0dbf587d7c83d3a45c48/12e8d/diamond.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)(l,{mdxType:"AnchorLinks"},Object(c.b)(r,{mdxType:"AnchorLink"},"Unauthorized access to Cloud Infrastructure"),Object(c.b)(r,{mdxType:"AnchorLink"},"Vulnerable Mobile API Attack"),Object(c.b)(r,{mdxType:"AnchorLink"},"Physical Theft"),Object(c.b)(r,{mdxType:"AnchorLink"},"Vulnerability OS using Remote code execution"),Object(c.b)(r,{mdxType:"AnchorLink"},"Unauthorized Remote Access"),Object(c.b)(r,{mdxType:"AnchorLink"},"Firmware Attacks"),Object(c.b)(r,{mdxType:"AnchorLink"},"Healthcare PII Data Breach"),Object(c.b)(r,{mdxType:"AnchorLink"},"Ransomware attack (PII/HIPAA/PCI Breach)"),Object(c.b)(r,{mdxType:"AnchorLink"},"Ransomware Attack (ransom demand)"),Object(c.b)(r,{mdxType:"AnchorLink"},"Source Code Libraries"),Object(c.b)(r,{mdxType:"AnchorLink"},"GitHub PHI Test Data Leak"),Object(c.b)(r,{mdxType:"AnchorLink"},"GitHub Data Leak (HardCoded Credentials)"),Object(c.b)(r,{mdxType:"AnchorLink"},"Distributed Denial of Service Attack"),Object(c.b)(r,{mdxType:"AnchorLink"},"Cyber Spoofing Attack"),Object(c.b)(r,{mdxType:"AnchorLink"},"Ransomware Attack")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Unauthorized access to Cloud Infrastructure"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"972px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiElEQVQoz41STU/CQBTsj/PuxaN401/g3ZP+GRMRBDmoGA0hMSEQwbSUFqEHoCAl0qXfH+PbDRAgmDDJ5G2T19k3s0/CDtI0XddNciS+D8fowR8N0O92oSgKDMPY+kdKkgS7jIn7BHm1mQO2cOG6LhhjomKjT8KB4M2O6yEMI0HPD/b2Sc+vNdwXK3goVZF7rCBPzBYqMIdj2JqCmdyCb03hBSGiKFq6SIWoSxcEExMhMRiPEHsepLOLG5xkrpChenp+LXh0fInqRxNdvQNVVWHbTFjlYj5N5pM4P8/tBfqahu+2Anv6QyEnkMpvNdxmn5DNl1EoveMu/4Jc8R3meIo2NfZ69Aj0GAGJcDE+Hbfveb74juIYQRiK3IVlZs+hdVToWodqG7L8hQmNzxEE2zlxEZ4dJ7e8L2dp+YA4ZH042K8NRhFYlrXmbDYT+YoJ/xPbFNm8IJxO4JlDfDabqNfraDQaaLVaQpjnKjmOI/aJc3VeWd23h2LBqcqyDF3XMRgMBMU+Ev4ARD/1iw5zKv8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"unauthorized access",title:"unauthorized access",src:"/platform/static/99ec19a7e4e80cf4eac8b55f1f101803/1cc0f/unauthorized-access.png",srcSet:["/platform/static/99ec19a7e4e80cf4eac8b55f1f101803/7fc1e/unauthorized-access.png 288w","/platform/static/99ec19a7e4e80cf4eac8b55f1f101803/a5df1/unauthorized-access.png 576w","/platform/static/99ec19a7e4e80cf4eac8b55f1f101803/1cc0f/unauthorized-access.png 972w"],sizes:"(max-width: 972px) 100vw, 972px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Vulnerable Mobile API Attack"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVQoz31SPU/DMBTMn0JiROIvIDbEwILgRyBWJoQEDAgxMCAEG2JkQwJRwUCbQqENtE3SpmmTNGkS23Fy2OkHtCCedHmyY5/v3XsKZiLLskn+CRkpJYj1OlinjZauo21Z8H0flNLJHSUVH87TX0jTacJseAOB4yLs+9BqNajlMkzDgN3piPM8J1XwT2Qz65hQUJYgpgxRFIuHE1DOwbPvk4rR6uL27hmFxxfcPZTyfHtfRFO3wO02Qq0K5vZABEkck1xtknAQQS7BuzaYbYF0LKSMQTm7vMHcwjqWV7extrmDpZUtzC9u4Pj0Gm3hV/HpCdVKBa7n5zYwoVASSWLX7eOz8gq9+g6nZWIQBFDeqk3s7p/h4OgCJ6dXed47PIf6okHTangulvBZryMIBoKMDZuTphOFTJQskY2bIp0yjLowt4FG4wOm2RRo5CYTQvIOjrssSyYjD1mSzI7H0EMu2Kl4Wfoiyxlnuf/XOA36fbh2Fz2nB9u2cyQj8pHCf7r8xyxyz0Fg6igUClBVVdiiCeXxN2EURfA8D47jTP34OeCzKqV2SSTVhWE4Ndhfwx32cpDUZ3EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vulnerable mobile",title:"vulnerable mobile",src:"/platform/static/49cc627f09c1d65569b6d4771785a7ea/72da9/vulnerable-mobile.png",srcSet:["/platform/static/49cc627f09c1d65569b6d4771785a7ea/7fc1e/vulnerable-mobile.png 288w","/platform/static/49cc627f09c1d65569b6d4771785a7ea/a5df1/vulnerable-mobile.png 576w","/platform/static/49cc627f09c1d65569b6d4771785a7ea/72da9/vulnerable-mobile.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Physical Theft"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"985px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmUlEQVQoz4VSMU7DQBD0f+hoqPgBNBTQ0NDQUVJAwSN4BBIhCggKQEQCUSASic5KlMQhAYeYgImcc5w7n+0MtzYOVrDESCuvfHuze7OjYQ7T6XT2zQYh8gW8lw7kex/9ngmj3QZjDGEYzu5oURSpH38jj5DA2BjjsQfOOVzXTc4ydRr+xS/ZZMLhSwkpA3Dh51ZrDxUdhdItShf3KJ0nUTi9g2la8LoGWLOOYPgF7idE9CKaJCblAvJzADmwIO0PRIJD29k9xOLyNtY2D7C6sY+V9T0sLG3hqvwIU+nV6XQQBAFG6qmhIhNqMqHIidgZueg2mzCNFl4NA9zzoFWfajgqXOKkdIPiWRnHxWuVl/HW/0C9XkOj0VAk4ueZQhElWtF0wvchVTOhZPDVOYmj8YmnLtXR7T6j3W7BaDXinCBigmimD0034X6sXxCE+RpmFphrn6yFCK7DwJwRmMvUtsdx0LYpqLlGhZSkYudFtkEwtOH1e6hUq9B1XS3PhGVZsG07sQ0xO44TG5TEn59u3uwpyMxUn5o6xTdx6vbV5xf/UQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"physical theft",title:"physical theft",src:"/platform/static/c99a2e058f8c894ac55d36e297fc6ac9/9fe6f/physical-theft.png",srcSet:["/platform/static/c99a2e058f8c894ac55d36e297fc6ac9/7fc1e/physical-theft.png 288w","/platform/static/c99a2e058f8c894ac55d36e297fc6ac9/a5df1/physical-theft.png 576w","/platform/static/c99a2e058f8c894ac55d36e297fc6ac9/9fe6f/physical-theft.png 985w"],sizes:"(max-width: 985px) 100vw, 985px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Vulnerability OS using Remote code execution"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1021px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmklEQVQoz41SPU/DQAzNr2SAASRYGNj4AQwdWNlA4mNgBSQEAwMLI1M/+GqborYhadI2adKWXJq7JA/flZYCQcLSk23J9+xnn4YflmXZ3C9CGh+4iG0LoefC7nYxHo8xGo3AOZ+/0dI0RUKY+VmcSxiGCJwuhp6HarUKRjmPYyRJItmmhPinpUkKFk0QixQheUWSo06r6QaK5Toqj68oPTRQrOh4eGmC+T4mpgFOElOaIprEavIZZJ6xEKk/gPA9JO9jRaptbe9haXUHa5u7WNkoKCyvF/D8VEP9sQLPsUkaA2OTKVEUzwnNZgtmvYagYyGjpnIx2s3tPQ6OLnByeo3j0yvsH57h/PIOpmWjVCmjbRgkj2SGkZIpxBSMRXBpl06vBy6SL8kycBwLhtFEx3pTXpqgy7muq6aRJsnklDyZTvfX79Bkd84F4pgrL3OJvGJBsvxuD6MgwHA4hEcTSr/4G7S8TnlQlyZC0XPQajRQKtM62m3Ytv3tnRZQt36/j8GAriXEr8/9rdFnLOt1Xaf1GDBNk1bB5jUfFo35v7+LCtcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vulnerability os",title:"vulnerability os",src:"/platform/static/f6103045092fdfead5edbb7a66b7a7ff/b01ff/vulnerability-os.png",srcSet:["/platform/static/f6103045092fdfead5edbb7a66b7a7ff/7fc1e/vulnerability-os.png 288w","/platform/static/f6103045092fdfead5edbb7a66b7a7ff/a5df1/vulnerability-os.png 576w","/platform/static/f6103045092fdfead5edbb7a66b7a7ff/b01ff/vulnerability-os.png 1021w"],sizes:"(max-width: 1021px) 100vw, 1021px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Unauthorized Remote Access"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1012px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVQoz42STW/TQBCG/dvKtRVXeuBSqQeO4cqtUq+IHlqpqgRIXODEgYoDf4ADHEiI0ygfTvyRL2M7jvGu1/Y6L7PbJkrTVGKkVyPvjp/VvDMGtmK5XK7zplSUyQJi5CALfDiOiyAIwDm/V29UVQVJqra0C1gVOeKZDxYv4LouZrMZ5vM5pJSKeAvEf4Yq5pmAKCW4yB8rgtHte2iYfTRbFurNns4N00ISxRCeDe4MITlDlhcoy3LdgYKXdF6Gf1BEISTZofowXtReY2+/hsOjEzw/PsXTZ6/w5OAlfvxswu60YbXbYH9TpCwj0BJZlhNYoiBNR2OMe11Enov5dIKSWje+fvuON+cfcfn2M959uMbZxSdcvf8C15vgt9lEt9fXhYxnGqQkZQXGOESeo6A7Sa3KO9+1h2OanGNb8FwbVr8Dli60Jb7v6zbXHhK0IJgQxXpQ22Go1wWZrJSTT6u8a5WUd3EQIqCH1JQ9z9PZtm0MBgOyI3t8yvdWRmV1RsBiOobvOvhVb+Cm1YLZMjEcDjVUCAEjTVNEUYQwDMkX9mC5N1di9R3HMdo0LLXYSurfJEn0/T8o+/Xg3oWu1gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"unauthorized remote",title:"unauthorized remote",src:"/platform/static/9c4093a78b0172f7d497f8b328a9243b/83283/unauthorized-remote.png",srcSet:["/platform/static/9c4093a78b0172f7d497f8b328a9243b/7fc1e/unauthorized-remote.png 288w","/platform/static/9c4093a78b0172f7d497f8b328a9243b/a5df1/unauthorized-remote.png 576w","/platform/static/9c4093a78b0172f7d497f8b328a9243b/83283/unauthorized-remote.png 1012w"],sizes:"(max-width: 1012px) 100vw, 1012px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Firmware Attacks"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1007px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVQoz41Sy07jQBD0Z8GZK8sR8Q2cOLL7E3vhgJAAiQvXSByQ+IBFWjYoQATOyyQmxsHg2PHanofHLnoGAgEFiZZKY4+6q2uq28KnqKrq7ZyFDvU/AR+6YMEIruvC8zyMx2MIId5qrLIsoRSh/Ih5hFVRIA4ekcYxkQ0N4cj3kWfZOyG+GTo5ZxxcKjAu5+cQrK7j4ax+g7Nz25x/CecXHUzC6OV57i3KLAUXEgUpLF/Va/KCMajxE1QcQU1i3RXWxuYWFpfWsbL2C8urP/GDsED/f04v0O/Y6F5fYxJFSDNGZBWpE0SsUJBNwegBw04bj4M+Iv+erFOwjk9O8XvrELsHR9jZq2Fnv4bt3Rr6g3vYLRt2u03qhFEkZWHItMosZ3THkKQpBCmf+m489DwXg76D4d0A3U4LWTqhbgWuLi/RIlIhuPFIk0gi1M/XpPPCTFl35pxDSAlGSvTU8zxHs9lEr9ejO/ZiOuXGTyESmnJI6xKGIWL6nl21L6esG2lSfU7V6AL54CMZ+fhXr6PRaCAIgg97a6XkQUSma8wu6Ly1md5rTx3HMTVJkpjpT3OeAWtj9VQ2qO9AAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"firmware attacks",title:"firmware attacks",src:"/platform/static/deef8475271555c1a0ae9748a0dbfda8/62803/firmware-attacks.png",srcSet:["/platform/static/deef8475271555c1a0ae9748a0dbfda8/7fc1e/firmware-attacks.png 288w","/platform/static/deef8475271555c1a0ae9748a0dbfda8/a5df1/firmware-attacks.png 576w","/platform/static/deef8475271555c1a0ae9748a0dbfda8/62803/firmware-attacks.png 1007w"],sizes:"(max-width: 1007px) 100vw, 1007px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Healthcare PII Data Breach"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1009px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVQoz41SwU7bQBD1p/XQUzlwaU9FnOADql5641I+ACGhqhJCHJAqLhUSh4oP6KUBAmykWo1siN24McSOEq93bW/8mNnEUdTm0JGeJrE9b96bGQd/RV3Xi7wMjmqUQgX30MMnRFGELMsgpUSe54saZzqdwph/sYrQFAVG8SMmaYpWqwXP8xCGIaJ+H1pr+42D/wxunCuNkprJXJM6UqYUJD1T1MjMmzo3oovLtmvx4+onrii3rl1k6Qia7MkHDxXZUrrA1BhLzNBFiZpU1emQkKCW2YzwzeYOXq6/x8b2Lt5ufcSr1x/wYu0dhHDxS9wh9H1MxhNSpYiohlIFqsqgLA3CXoCuuIXXEfjte7MZnn/7jv1Pp/h89BWHx2fYO/iCk9ML9KMBRKeDXhBYIilzVKSQyQzlnBpIWsYwSZCQG86s3M4wJGu+36XhhrinTONHTjaFEPhD26yqynZnEp4hz5KJV4XDG+WC2XYNCppNo4I3x7nZMitIBjH0/Ez4//K5WctcUJalRVO4KvhNzZYHEeKgh+t2G67r2tOJ49iKsgr5KMfjsQWTrzrqBZoTot+snkUUdDKMRu0z2z/2hHroDD8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"healthcare pii",title:"healthcare pii",src:"/platform/static/ff7468a76d63421e4f4f19d309d6714c/38c30/healthcare-pii.png",srcSet:["/platform/static/ff7468a76d63421e4f4f19d309d6714c/7fc1e/healthcare-pii.png 288w","/platform/static/ff7468a76d63421e4f4f19d309d6714c/a5df1/healthcare-pii.png 576w","/platform/static/ff7468a76d63421e4f4f19d309d6714c/38c30/healthcare-pii.png 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Ransomware attack (PII/HIPAA/PCI Breach)"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"985px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsElEQVQoz42STU/bQBCG/e+4c+gNIS6o6qFH7lwQlfoveoCKckQqQYGCVBUBIVIaC1IHOxCLDzvGH9herzfrl9lVTQhCiJFGY8njx/POOwZeiaqqnmqdKiTLkTl9FNcu7H4fFqXneUjT9KnHkFJiTDlVx3IKVjfTA+IoRpqkGpIkCTjnUz838N6g5jxnKEuBgpcEKl9tM/4cmdjZO8Hu/ima+y00f7Ww3TyGfztCZluIz02UUQhGAAVTCtQkCsryHGLkg/se+MiDFCWMxc9f8WF+GQufvmBucQXzH1cxM7uEg99tDC8d9GlPcRwjecg0rCi4nk7KCkEQYmhZGLlDBJSC5BuN5iG+rW3h+2YDaxs/qW5j/UcDV8MbmKaJv92uBvL/MhVI0oSMFRpeCoHquWTfv0Ovd4be+Rlsm5z718PFhYWCMXQ6HTiOQyaNdXOuIEqqApH8lzt+0xRGwHa7Ddd16eOJAQ9xgoQypxPKaYfKbVXVOiZnQxPUWS9dVdUoxMQIFYIU3Ts2Tlqn6NI6lALf9yfALMsQhiGiKNK1vqu3Dp7TxIPBQB91EAR6yvr9I6wd9RvY4RV7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ranson pii 2",title:"ranson pii 2",src:"/platform/static/d01cba689492fcf7a4a61fbe0571234f/9fe6f/ranson-pii-2.png",srcSet:["/platform/static/d01cba689492fcf7a4a61fbe0571234f/7fc1e/ranson-pii-2.png 288w","/platform/static/d01cba689492fcf7a4a61fbe0571234f/a5df1/ranson-pii-2.png 576w","/platform/static/d01cba689492fcf7a4a61fbe0571234f/9fe6f/ranson-pii-2.png 985w"],sizes:"(max-width: 985px) 100vw, 985px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Ransomware Attack (ransom demand)"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1002px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVQoz41Sz2saURDef63XkluvObSHQMnRSyD3QHoutIUGDOSUS1LIqdDQY1XaQ2NbjbK4q6Yurqur7vp+7n6d90zVGIUMfAxv3sy8me99DtYsz/OFX4UxnUzBOj5Y0MNdt4vRaIQ4jqGUWtQ4WZZB68fY1DDXGnE4QEJNXNdFu93GdDKh+2W+gyeaSZ4xDiE1GJcQQtpYtpbj1Bs+vlV+o/KjhvL3P9aXyEf9COJvB2nLhZpOwIWCkgpmI6oE5wKSMegoJAyg46GNO4XDd3j+4gCv9t9gd+8IL18f49lOAddfK2g1aqhXq4iHQyTJjJrlNB01Is4MLYMwglevwSf0vBaklHA+fynh7ftzFM+ucHL6CR+Ll/hwcoGm6+PnzQ1uG01aU4LZdSV9gLZTpimjqQU4xQyEmk9vOVSSWeSZhFYCmRbkFcIwJK7E4lNmM0aFmhpRXpZt5Nr5nzwndYltFtOayXiMKIqsZCb0y5zzh7IxOlL3I6/LZV06oh8gDfsolcv4Rfz6vv+woTmYl8b0qiF1VdzbRK/Je56HIAhsXZqmi/t/56H5BWYRtdUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ranson demand 2",title:"ranson demand 2",src:"/platform/static/d616c129f4bd5bc50123d242e2246e81/a52e5/ranson-demand-2.png",srcSet:["/platform/static/d616c129f4bd5bc50123d242e2246e81/7fc1e/ranson-demand-2.png 288w","/platform/static/d616c129f4bd5bc50123d242e2246e81/a5df1/ranson-demand-2.png 576w","/platform/static/d616c129f4bd5bc50123d242e2246e81/a52e5/ranson-demand-2.png 1002w"],sizes:"(max-width: 1002px) 100vw, 1002px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Source Code Libraries"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1001px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrElEQVQoz5VSu07DQBD0n0EbBBUSvwEdAjp+AwoQIAoKCiQKnoIuAUIBTpzwsJMQOT7HCXYS++yzPeyZJAqvgpVWPt/dzs3sjoJvkabp+DuZMuJ+H0HdAG+ZMAwDuq6jT3uTdUqSJIjjmDL5kr8BpnT33eli4PXQ6XRg2zZCzoeAnzUK/hF+wBFGAjyMskd/qJMM1bKOk/MbXFwXcXFVxPnVHWURttVG0Kyj91yF8FwEPEJIQELEkKokeEByBWshskyINpM0oaytb2Iqt4jZhRXk5pcxt7CK6ZklnF0WoD9peLi/h9vtotf3CSgl4BARsYxpbbM2ntRHGNUKXjUNQRBAyd+WsLF1iO29I+zsH2Nr9wj7B6dovFkoa2WopVLGiA+B5Fr2Sv4PBj50Gk7TNOFQT6Mo+uwhYyYqWgkvJK9aKZM0P+tJo96A67rjofg+p/793cPhlFOin8BiDLVaDY7TyaTJ/G4lGS6du8TGcRwwi2WTli4ZuSGzjRDiS9FfXpS7wrbw3nxDvlCAqqowSa6sH91XOPlIyvI8bwz8mwcnHwrpnkGmHrGbPPsAw/X1b1hJJO0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"source code 2",title:"source code 2",src:"/platform/static/c1f455ae8d5c720b0f7044037dc614d3/5c17e/source-code-2.png",srcSet:["/platform/static/c1f455ae8d5c720b0f7044037dc614d3/7fc1e/source-code-2.png 288w","/platform/static/c1f455ae8d5c720b0f7044037dc614d3/a5df1/source-code-2.png 576w","/platform/static/c1f455ae8d5c720b0f7044037dc614d3/5c17e/source-code-2.png 1001w"],sizes:"(max-width: 1001px) 100vw, 1001px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"GitHub PHI Test Data Leak"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"988px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVQoz4WSS0vDQBSF87vcuHJTcCe4cueyC5fixr1/ROhCRdSKoCjU6kL6wkZtUkuLj1jaJmmaTCbJ5HhnpLGWghcOF5LLmW/OXA1zlaZp1mclSzAGv9tB+PmOV9OEQer3+5hMJtmMJoRAQhIzShKx0FD28XhCBj7Jg+u6iKLoD4CGf+vXzA8YGcTgPELIo4XT2nWphpPzMs4u7qnfoUj96LSE9zcLXrsF57mJyLHBwghxHKsbSHNOZMwPwL8+EfUtcFJK37TN/B6Wc1tYXd/B2sYucmvbWFrJ4/LmAZ1XE71uj4i4uqo0C0OuCGUsjjNGr22iaxroGi2acaFV6y3sF4o4PL4iulsUDi6ItgzLGqDZfCTpRMeIKFZmQqRKQcAUpcw/ThLVVYYiiYmigyf9EbVaBYbxQi9nqTyGwyE8z8vyYSwkc64kCRdmKE+TldAp8vnn12f2BWWNRzY8x6XrOkq2batIpnM/a0Nmsi/avz+i//FoAN/6QKVaRZVUr9eVcWYYBEF2mjSeJ5pfdlkys0ajAV3XlSTl9P83XWv1cxK/TLQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"github phi 2",title:"github phi 2",src:"/platform/static/445e4ab49f131c823b0b7ce22975aa8e/ec0db/github-phi-2.png",srcSet:["/platform/static/445e4ab49f131c823b0b7ce22975aa8e/7fc1e/github-phi-2.png 288w","/platform/static/445e4ab49f131c823b0b7ce22975aa8e/a5df1/github-phi-2.png 576w","/platform/static/445e4ab49f131c823b0b7ce22975aa8e/ec0db/github-phi-2.png 988w"],sizes:"(max-width: 988px) 100vw, 988px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"GitHub Data Leak (HardCoded Credentials)"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVQoz41STUvjUBTN/3MzGzduhsGN4h9wMTDLEf+BoILCLNwMODDLgVFErbRQS1tbdJqkn5omaZomecnLS473PW3QThdeOLx3yb0n59x3NSxEnufF+RYyRDAD6xlgTyPoug7TNMEYe9enZVkGIf7HMsJcCHhjG+HUh2VZCpxz+aWo0/DRoOKIxUhSAZZwZFm+tExr3Ok4u6ji6qahcFmq4/yyBseyEQ+6CDoP4P4UUZyAE1FKhNJVGDHEQQBO9rltIXHGLwq3v+3h09pXrG/t4vPGd3zZ3MHK6jb+npdx36zjX7uNwJ9hFkRKFSPiNE3VWB5Hj+g0G9DvmnBGwxeFVzd17B+d4vD4F45+/MbB8SlOfv5BtzfCba0GgwYvg5HduTqpROYSrufBdhzESfL6KCLFcNiDTtbarQZMowPfn9CwEwwGA7r7ikRGRDYTLqiZK4VLZyj/KqjBth0YhkmDZ1QsCpLFVZpSnee4cCcTuK5bwCOlYRhCk0Vvmxd3ssBrno6fYJk6rkslVMplVCoVVKtVtFot5UiL41ixz60t27/52sxzOS+51P1+X5HIs9uljaBXfwbAt/SA1OlZUAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"github data 2",title:"github data 2",src:"/platform/static/ee23049bbaf716b60654cfb869e8b11d/72da9/github-data-2.png",srcSet:["/platform/static/ee23049bbaf716b60654cfb869e8b11d/7fc1e/github-data-2.png 288w","/platform/static/ee23049bbaf716b60654cfb869e8b11d/a5df1/github-data-2.png 576w","/platform/static/ee23049bbaf716b60654cfb869e8b11d/72da9/github-data-2.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Distributed Denial of Service Attack"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"999px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVQoz41STUvDQBDNv/LuxbMnL4IeFES8+gM8CII/xIOCIJb6jQhqqXqwrVabFnPRWJMa87EfyWbz3F20ttqDA8PsJDszb94+C7+sKIp+HHRtIgpBnA7o6wvsdhuu68L3fWRZ1q+xpJTIcwkT5VdU+aiGMs/xEYSghCKOYyRJAkbp0D0L/zQ9iFCGTOTgPIVQcZRZ55U6ygcVHJxcYe+oiv3jKkoqf+96iFpNfDw2kapVmWqSK4Tatek8VehE14XwPYigh0INteaW1jExuYyZhTVMz69ianYFY+OLuK0/4qF5B7vVAlWFcUINSsq4QikMLe7LKxo317AbdTw7T4ZLq3pzj43NPeyUTrFbPsPW9iFK+xfw/B5qtVs4jmMaMd0oE+YsZQFCmGkQJwSJRirlD4dZysAZRaoipYlZiXMG27bheV5/Tao4ZDwz634/1B8OR/3QnzQSoVb7LaXQf0cSxYiiyLyyfm3O+bBsdKEwvORDMhnSoz5rSXldvCm+LisVRccTOp2O0WK/ISEEYRga1xNHCXsw15Yq7oIgMAA0kME7n9yC+QNbVUcBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ddos 2",title:"ddos 2",src:"/platform/static/05c4a6abc9a21ba1be83673572f6c1c1/7ac05/ddos-2.png",srcSet:["/platform/static/05c4a6abc9a21ba1be83673572f6c1c1/7fc1e/ddos-2.png 288w","/platform/static/05c4a6abc9a21ba1be83673572f6c1c1/a5df1/ddos-2.png 576w","/platform/static/05c4a6abc9a21ba1be83673572f6c1c1/7ac05/ddos-2.png 999w"],sizes:"(max-width: 999px) 100vw, 999px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Cyber Spoofing Attack"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"983px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVQoz42STU/bQBCG/cu49cCFSpwqceTIgUOPiB/QX1KBEAiqqicaCihCLY5QEgJNsBoTBDEEx1l/7K4/8jKzEcF8CHWl8Vizo8fvvB4LL854PJ7mcvAplETs/oPuX6PnduE4Dm49D0qpaY9VFAXy/HW8BeQsRIQoiiFlgjiOkabpMwEW/vNwc5xIAmTQBFFKP92V+qzdXza+buxifauC9c2KyWuUr6/6CJ2/uD9tILm7hdQpsiwDT8RwBsskQerdQHt9KLKh0BrW4tIXfPj4GXOfVkzML6xiZnYZlf1jOBdtdNodM6IIYwNjZZrgRTGG7wfodtrwej1Evk8mF7BOGhf49uMAWzs/Ke9j+/sewWq46d+h2Wzi7Oyc/JIGwjAGcSRSmVpKqnMCTUfmx+VlF39+H6FaPUSjfkLjKAoN27bRarVIYWSaJUEkQTl45Ld8th6/KMIQw2FgVLDJ7JdPY4RUL6+ToB5h+pRRniSTv53n+URheS1e7mKpMlkLesv9e4x6LuxaDfV6Ha7rYjAYIMsnii1WIITAaDQyat5b7OmCUw6CwFjBSlnd490D/UL1eZKzQ78AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cyber spoofing 2",title:"cyber spoofing 2",src:"/platform/static/33f4b1f0cd76deba9ad2c406a556904b/d6e0f/cyber-spoofing-2.png",srcSet:["/platform/static/33f4b1f0cd76deba9ad2c406a556904b/7fc1e/cyber-spoofing-2.png 288w","/platform/static/33f4b1f0cd76deba9ad2c406a556904b/a5df1/cyber-spoofing-2.png 576w","/platform/static/33f4b1f0cd76deba9ad2c406a556904b/d6e0f/cyber-spoofing-2.png 983w"],sizes:"(max-width: 983px) 100vw, 983px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Ransomware Attack"),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABm0lEQVQoz41TTUvDQBDNnxO8SMWDqDf/g3hQvPhrxFIsfiEWRK0IKqhQStPE2KRYmg/SNE02STdpn7tbLbHtwYFhspvZN+/NzkqYsfF4PI1555b2PRBdw9CxoGkadF2H67oYDAbIskzkSKPRiC3mfREgP+R5PuIoRhiG8H32Hcd/CEj4p/EihAGlDDSOExGnqnLqpJu7V5RO71C+eED5vIqTs3tcVp7Rtx34ch19pQHK2ETJEBM1mTjI10kQgFpdUNaC1OtNJG9sH2J5bRerWwcobO5jZX0PS4UdyM1PKHIDButTGBKEJGKADIizSzNQ5rZpo9WU0VYV2F9fophUfXzHUfEKx6VrFE8qIt5W3+A4Lmq1GlRVBaV0IjNNBUvuhBXgAPTXf/6JHkYkgPahQFVkBIEvqAdMTr1eR7fbFYkij/UwGVIWk+lFzZrEZcwa3+PVs1zjJ/sj+K4Hz+0J5p1OB6ZpCubTS1k0c/nq+fWYF7FNOG0DTy8v0FstWJb1d2y4NO58pgghc0O9CDhis2cYBptJT/Q3/yC+Adqt9v8EeKGpAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ranson attack 2",title:"ranson attack 2",src:"/platform/static/3014bb9f60eca3af419be52cebfaceba/dd401/ranson-attack-2.png",srcSet:["/platform/static/3014bb9f60eca3af419be52cebfaceba/7fc1e/ranson-attack-2.png 288w","/platform/static/3014bb9f60eca3af419be52cebfaceba/a5df1/ranson-attack-2.png 576w","/platform/static/3014bb9f60eca3af419be52cebfaceba/dd401/ranson-attack-2.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}m.isMDXComponent=!0},I8xM:function(a,e,t){a.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(a,e,t){a.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(a,e,t){a.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}}}]);
//# sourceMappingURL=component---src-pages-threat-diamonds-index-mdx-548c9903ae3764c34e5f.js.map