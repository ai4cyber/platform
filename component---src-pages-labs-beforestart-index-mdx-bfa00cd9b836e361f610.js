(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,a,t){"use strict";var c=t("q1tI"),i=t.n(c),s=t("NmYn"),b=t.n(s),o=t("Wbzz"),n=t("Xrax"),l=t("k4MR"),r=t("TSYQ"),p=t.n(r),m=t("QH2O"),d=t.n(m),g=t("qKvR"),u=function(e){var a,t=e.title,c=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(g.b)("div",{className:p()(d.a.pageHeader,(a={},a[d.a.withTabs]=s.length,a[d.a.darkMode]="dark"===c,a))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},t)))))},A=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,c=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||c,s=i.baseUrl,b=i.subDirectory,n=s+"/edit/"+i.branch+b+"/src/pages"+a;return s?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:n},"Edit this page on GitHub"))):null},h=t("FCXl"),y=t("dI71"),w=t("I8xM"),O=function(e){function a(){return e.apply(this,arguments)||this}return Object(y.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,c=e.slug,i=c.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var a,t=b()(e,{lower:!0,strict:!0}),s=t===i,n=new RegExp(i+"/?(#.*)?$"),l=c.replace(n,t);return Object(g.b)("li",{key:e,className:p()((a={},a[w.selectedItem]=s,a),w.listItem)},Object(g.b)(o.Link,{className:w.link,to:""+l},e))}));return Object(g.b)("div",{className:w.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":a},Object(g.b)("ul",{className:w.list},s))))))},a}(i.a.Component),j=t("MjG9"),x=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,c=e.location,i=e.Title,s=a.frontmatter,r=void 0===s?{}:s,p=a.relativePagePath,m=a.titleType,d=r.tabs,A=r.title,y=r.theme,w=r.description,v=r.keywords,k=Object(x.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,N=C?c.pathname.replace(C,""):c.pathname,E=d?N.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",B=y||k;return Object(g.b)(l.a,{tabs:d,homepage:!1,theme:B,pageTitle:A,pageDescription:w,pageKeywords:v,titleType:m},Object(g.b)(u,{title:i?Object(g.b)(i,null):A,label:"label",tabs:d,theme:B}),d&&Object(g.b)(O,{title:A,slug:N,tabs:d,currentTab:E}),Object(g.b)(j.a,{padded:!0},t,Object(g.b)(f,{relativePagePath:p})),Object(g.b)(h.a,{pageContext:a,location:c,slug:N,tabs:d,currentTab:E}),Object(g.b)(n.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},D9Tb:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return r}));var c=t("wx14"),i=t("zLVn"),s=(t("q1tI"),t("7ljp")),b=t("013z"),o=(t("qKvR"),{}),n={_frontmatter:o},l=b.a;function r(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(c.a)({},n,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You should have your CP4MCM environment on ROKS requested and installed. If not, please complete the ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," steps before start the labs. The following labs are specific for ROKS environment, in ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management"}),"IBM Demos site"),", you will find a similar version using Skytap (available to use with Customers and Business Partners)."),Object(s.b)("h2",null,"Accessing your CP4MCM console"),Object(s.b)("p",null,"If you have just requested your environment and installed your CP4MCM on ROKS, you should be on your CP4MCM Console Page, so you can skip this section."),Object(s.b)("p",null,"If not, follow the steps below to access the CP4MCM Console."),Object(s.b)("p",null,"1.Log in to ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"http://cloud.ibm.com"}),"IBM Cloud")," using your IBM credentials."),Object(s.b)("p",null,"2.First, confirm that you are on Digital Technical Engagement Account, if not click to change it."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVQ4y5WTS2gTURSGZy0UdKHZ1ScilaJWKYG+LMWIxjYlidBJYkRcVVxUN6JUqe2msYoLdadF1CroRqSlVrQVTWwbF6WIm24qVNA0j0mcTOY9v+fexBahih74ODP33vnvf889I4iiCL/fD5/Ph3A4jEgkwgmFQhw2HwgE+Bqeg0GIhz1o3LEVDds2o67aBdemKuyp3Y2794YhpFIpLC0tIZfLQVEUyLKMYrH4G2yMQ89qXsLnDwkMXruB2OAQgqeHUHekH9Erc/iWViBks1kwUSZmmiYMw/gjqmbSBiVaK8MwLbDQHaCgA1kZSGcyEAqFAgkZ+NcwaNMfioGSqkM3TDg2EzYJB8ycIKtAUXWgmw4cZ224kKYhX8hCVhWQFlTyoJK9kubAsstrWNkE2ykPMP4maFkWP4lpWdxNOZyVZ5u+T6W+Q2BCdkXQslax13hn2qzO9srmQGU/aJqOxS+LEPDfseqaZdu2y5mcS5IEoe9mEj39cZxjDMTRczWO3uszuHV/no+fH/hFAmcuv8Oz0QVoqkz1ksiVRoKsFBbV0uItJmxpfoqNBx7DVf+E53U1D3huEcewfu8I8QhVtQ+xYd8ILR5Gd2+cCqaiqGj86JX7ALsLuShD2O8dx67WUdS0jWJ70wtUu5+j1jMG8ex71Le/RIN/Am7fBBoDr/jcpdgcTDrmco5uXTZ5hxiVDuEOD/nfosn7Bs3eSRzsKNPaMYVo9zTcntdoOTbJaeucws76cfTFPqGkW/i6rCGd10FGSbTcQopCgidPfURXaBZieBZdRKd/Gse7ZnDh4jxCJ5Jg81EiEk3iaHsCt+8sUC/qJFhCRlK5EIO5ZD/JT7cYZql3toChAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud account",title:"ibmcloud account",src:"/ai4cyber/platform/static/0ec8deb588d7dc1fee2bcb4178926faf/3cbba/ibmcloud-account.png",srcSet:["/ai4cyber/platform/static/0ec8deb588d7dc1fee2bcb4178926faf/7fc1e/ibmcloud-account.png 288w","/ai4cyber/platform/static/0ec8deb588d7dc1fee2bcb4178926faf/a5df1/ibmcloud-account.png 576w","/ai4cyber/platform/static/0ec8deb588d7dc1fee2bcb4178926faf/3cbba/ibmcloud-account.png 1152w","/ai4cyber/platform/static/0ec8deb588d7dc1fee2bcb4178926faf/ce6f1/ibmcloud-account.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"3.On IBM Cloud Dashboard, click ",Object(s.b)("strong",{parentName:"p"},"Clusters")," to see your OpenShift Hub Cluster."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVQ4y5WTXUgUURTH5zkI6iF6iyCIEISiWIRSk0UfMl13VsP9aKOXwOjB6iEKA8snIYgoH7aHiMqCeglRzCiNWvGjh5KgByEMVmLddmZ2m53POzv/zr3jGkJFXfjxv3Pu4T/nnjkjxeNxyLKMSCSCZDKJVColSCQSAn4ei8VEDldONBpFT3c3YhTrjEQhx04gHG5FJpOBlM/nkcvloKoqDMOAruuoVCqb4DFd53tdwPO0soFSuYKRMRtnbrm4eJdh9ZsCSSGjQrEIwzTBGIPrun/Esl3Ks/GjXIKiqDBNC5rOkFcZCpqHYpEMS6oGR1MA5uJfluMy6AYT6lX99WigikKG+Y+fUfySg8Mo7Pu/hS/XtumKCnTLgOUAFr2fq2n7G8a8bZLneRQAeOxvhjyP0S0Yaa2iQIN9lQzW1vKQ+Ibjkavn+RsEsc3P3Jv3OdgHz+vvg207WPm6Agn/vX5VzbVarQZKlWuaBmnw5iL6r2dxnjOURf+1LAZuzOP2/SURvzBUYxZnr77Fs/Fl2JZO/dKoKpsMeSs86qUnRkza3fQUOw49xs7QE6Fb6h4IbY5PYNv+UeIRttY/xPYDo5R8D30DWWqYhYphi6vXPnSVqtRpRqWD7ZPY1zKOuvA49jSOYVfDc9S3TSB+7h1CHS9wWJ5CQ2QKR2IvxdmV4Q9gdM2CSl+dZrBi+XBZ0AZRYav8Bo3tr9HUPo2jnQEtnTNI982hoe0Vmo9PC8JdM9gbmsTg8CeYjofVgo3vJQdUKJnyEfLpDyLDU6ffozexgHhyAb1ElzyHnt55XLq8hMTJRfDzNJFKL+JYxyzujCzTLDpkaKKoWcKIw6ssl8v4CW2ibT1E7a+KAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud dashboard cluster",title:"ibmcloud dashboard cluster",src:"/ai4cyber/platform/static/89428fbb387100fb846eff119de920e4/3cbba/ibmcloud-dashboard-cluster.png",srcSet:["/ai4cyber/platform/static/89428fbb387100fb846eff119de920e4/7fc1e/ibmcloud-dashboard-cluster.png 288w","/ai4cyber/platform/static/89428fbb387100fb846eff119de920e4/a5df1/ibmcloud-dashboard-cluster.png 576w","/ai4cyber/platform/static/89428fbb387100fb846eff119de920e4/3cbba/ibmcloud-dashboard-cluster.png 1152w","/ai4cyber/platform/static/89428fbb387100fb846eff119de920e4/ce6f1/ibmcloud-dashboard-cluster.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"4.Click the OpenShift Hub cluster to open the cluster view."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVQ4y51STU/CQBDtPzQejMFEBGIC4ezPwKtHr/4Nj8azUUMCJQJtafmwX2xbaJ/z1haNMUZo8zI7O7Oz896s0W630Ww2Ua+fo9PpoNvtanDNGG2r1UKj0dB51Zq2Jf5p7QIntUscHZ+h17uGsVgs4LouVqsVsizbYbPZaPzm06ZpBhQZ7u6B7g1wdQu8jgIY4/EYpmliOp3CsizYtg3bcfTeZDLRviN+leeUMebyjDka420i8ekMM9eD4QcB5vM5fN/HuyCKIsRxjED2l9K1X+6FgmrNGBGVeXEcSccJlsslDCY40oVar3HoVxSflrIZwWiIt8cHzF6eMX9+QmJbOriWC6hTIdkEtdO+/KGKtc/9PM+13W63Wg4jlqrWYADLHCKWlhPPRRaG4KVMznlIHyxRFvm+5pemKfr9vnQolGeeh0xuKHYUioPgeRyKCG3LxJRSehhERWMf7DRkIU6H1UOhmiTJF9WK1l8opWBRPWUW4bOhyPhGOd8HPwvygZL65+QqDfFP/KDM5xFF8kClMPVTQpkyKJXsAYVEpkymHwIYzgCgHFbPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp hubcluster",title:"ocp hubcluster",src:"/ai4cyber/platform/static/8d948b07969e54c03a6d5d5c1af55a5e/3cbba/ocp-hubcluster.png",srcSet:["/ai4cyber/platform/static/8d948b07969e54c03a6d5d5c1af55a5e/7fc1e/ocp-hubcluster.png 288w","/ai4cyber/platform/static/8d948b07969e54c03a6d5d5c1af55a5e/a5df1/ocp-hubcluster.png 576w","/ai4cyber/platform/static/8d948b07969e54c03a6d5d5c1af55a5e/3cbba/ocp-hubcluster.png 1152w","/ai4cyber/platform/static/8d948b07969e54c03a6d5d5c1af55a5e/ce6f1/ocp-hubcluster.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"5.From the Hub Cluster details view, copy the ",Object(s.b)("strong",{parentName:"p"},"Ingress subdomain")," url."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACL0lEQVQ4y31S227UMBTMX6IudLUXCbLsX/CIVD6DJyR+o/DAA5RbKUu69JLdxMkmsRM7jjOc422qqgUsTewcx5OZ8QmePgsxnU4xHo8RLkIsny+xXC6xWCwQhqHHbDbDZDK5mWd4NJpg9GSOg8czHB5OMJ/PMToY4ejoCMH69yVEmiLLMsRxjI3YQtUKVVVBKQVjjIfWBr0zuEgsXr0FXr7p8eI1cPy1g6wNKmWR5QWCOL5GKgRSIi2KgooZmqZB27a3ZLxuaZZSQogcV5sYRaXpxxaNbv2+tZb2BILVzzNPxmBVrNY55z9igrqu4boOPLTR2FYRhDpHVl9QpYfpDBqrkZc77zKIkxSSrPFBVsjE/jC9S/pBj5vhgDSPkMkYYlMgqdaQOqd6i84qlIXYE67pkXNepIYJWbYlRSrZYhtF2F1fQVEM9fka2WaFtLkkqxW28hd0qwDTwlFEFfF4QrbFGC6BizV9kJ2d4tv7d1h9+ojoy2ekp9+hixKFFqQuQtXksG3nz/D5PM/3hEzEGIiTJPERNGWJKk3gyHpH71ZJ76Is9xfTWYeOnAzgPG8JB4UDKUMREStVA+qGWkf7W5e05lvt+35PTGiNfahwWP8VpJgvji1yv/LMyrTtUFOO2Y7yv5vh3Szv14Y6K/YqCbrRvr06Uml7R/1InUKxBP9VdU89k/WuR1wV1Hut7ya2zUNpQOyahwr/Ba+QLHN2sjWoPbmD83w9PvwwOD4p8QfLu8TlQSgF/gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ingress subdomain",title:"ingress subdomain",src:"/ai4cyber/platform/static/5e2a2cb99a25c2fe4fc9d273297c6e20/3cbba/ingress-subdomain.png",srcSet:["/ai4cyber/platform/static/5e2a2cb99a25c2fe4fc9d273297c6e20/7fc1e/ingress-subdomain.png 288w","/ai4cyber/platform/static/5e2a2cb99a25c2fe4fc9d273297c6e20/a5df1/ingress-subdomain.png 576w","/ai4cyber/platform/static/5e2a2cb99a25c2fe4fc9d273297c6e20/3cbba/ingress-subdomain.png 1152w","/ai4cyber/platform/static/5e2a2cb99a25c2fe4fc9d273297c6e20/ce6f1/ingress-subdomain.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"6.Open a new browser tab, and on the URL field, enter ",Object(s.b)("strong",{parentName:"p"},"https://icp-console.")," and paste the Ingress subdomain url that you copied in the previous step and press ",Object(s.b)("strong",{parentName:"p"},"Enter"),"."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1051px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.763888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiElEQVQI12PITIj6X9tY+X/tgkX/l82ZC8Yr5s3/v3/rtv+Hd+4C0tv/H9299/+WVav/1xSV/M9NTv1fkJYBxekInJT8PzEp5T/DwydP/j+5/+D/s3Pn/z+5dPn/4wsX/z8EskH0o/MX/j88ew7MB7HBGCx34f+Ti5eA+CJc/fNz5/6/ffv+PwA3X3q0qq0NCgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm console url",title:"cp4mcm console url",src:"/ai4cyber/platform/static/1beeb51b320f4caf9b2b0784006acccd/fb23a/cp4mcm-console-url.png",srcSet:["/ai4cyber/platform/static/1beeb51b320f4caf9b2b0784006acccd/7fc1e/cp4mcm-console-url.png 288w","/ai4cyber/platform/static/1beeb51b320f4caf9b2b0784006acccd/a5df1/cp4mcm-console-url.png 576w","/ai4cyber/platform/static/1beeb51b320f4caf9b2b0784006acccd/fb23a/cp4mcm-console-url.png 1051w"],sizes:"(max-width: 1051px) 100vw, 1051px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"7.Log in with your admin and password defined on ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," section."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVQ4y01TW08TQRjdP6u+eUHUR0300SdelYTE+IjRGEJihMgtUO6UAqUFWmzpbXvby9x2C8czsy3ycPLNfjtzvjPfnM+LZAKdpLhDChCGa5uziFWKQCTo9JRDyye6Cu2uus/5fY0gStAfGvftJWmKzRONmW8CM/MC68caySglWQKhSRgnqLck+oGBVCMSGNy0FWpNhb9EvaX4L0FvkKDBvKdMikrTYKOgsZZXKNcNQqrqctMwTjGMMoJhlELpO8TylmQaparExbVEmSheSZQqAtW6hGeVDLi5F6boEzc+FfkGlw2DWidxhBVuzJcUdgrZ4aOiwMGZBdfnAqeXk4IjeIJ96gUatVaMm06MTl+xAK8QGiq0xQwKZYFDkuR5eKcgsHloSSUOTgW2joQr1KQQC882fhBpEkm0e5I9M0hu4aDTW6o22DsRyOUFdhm3jwV+bwnsn0oWkVjdy/6dsOg2oycos+UPcHZ+gfPylYuliyqK5QpfbejasXEQY2U3znrGXi3nYvxcFfi+IjC/ZMkF6k2JfRb0RjTLr+UNPJ+axqvXb/D02QtMvZzGo8dPsPxnFcIAi+sBFtcikklUahKffwR4+2mI93Mh3s1GWFiL0WxL5I7iTGG3H6DRbKPbG9zD7/bpL+l8aO1xVSdIViV+rAT4MNvAx68DzC1IrPMG18xbN7gehkI735n0jn3LIA0tQt+FNLjUCaxfBfeEfCi/p6lIo+3bSB8OtcsrkzwglAqanlRj8FkwGmWT4kxOdAd6TGrQ6GhnbpuLpeG0JXSKzggncOM2xsJ2iuNK6qqGbGREWBPbKMYFLJFVb6NQxjnCm8xs5Aj/k39ZGiFXtLOdKcoIkvv4cD2JkvEfzp3H5noVmwYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm console login",title:"cp4mcm console login",src:"/ai4cyber/platform/static/c20a774aec0d9c7ba9359dabbb3ec654/3cbba/cp4mcm-console-login.png",srcSet:["/ai4cyber/platform/static/c20a774aec0d9c7ba9359dabbb3ec654/7fc1e/cp4mcm-console-login.png 288w","/ai4cyber/platform/static/c20a774aec0d9c7ba9359dabbb3ec654/a5df1/cp4mcm-console-login.png 576w","/ai4cyber/platform/static/c20a774aec0d9c7ba9359dabbb3ec654/3cbba/cp4mcm-console-login.png 1152w","/ai4cyber/platform/static/c20a774aec0d9c7ba9359dabbb3ec654/b53fa/cp4mcm-console-login.png 1310w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"8.Great, now you are ready to start your lab! Next section you will learn how to install Command Line Interface tools."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVQ4y1VSz3PSUBDO3+gA7dgyY0ftaC1Mq1WPevTi0Ysznrz1b/Dgj6kHb7ZToQVKgQApCfnxkryEQPu5uyGgh81u9n1v37e7n7G9tY29p3uo7ddQq9VQr9dxeHCInQc7KJVK2KhsoFKu5FapoFwuo1wqY5PizY1N8P1qtYqt+1tSw9BaIwgCBErlnsz3A0RRhDRNkCRrY+xsNsPd7QITL0EYp7hdLCTPFoYhDP4406nY1HXF244D1/Wg6BE+Z+NY6wRT28KXk3N8/HaH458KZ2encs4EmIzBwE73Gq1OF+2r7jK+Qn9gygMMZEwcx7BtB89oLM9fvkb9QwP3nrzH/v4uvv84wXw+h+d5OcPmZQvNVhsN8pftDv23cXXdE7ZxHK0YKBXixdERDl+9xeevIR6+Ocajx7s4PT2TUfi+XxRs48/FJRpsVJT9efNCGDGzou041shSjV+/hzj4pPDu2MXEsmS+xaOGoqA3GMAcjWR2E9sW45gBRbF/LdERdXSDycSlxen/Zm0wVX4hTVOhXRj/F9vN4/W/JrtdZIRLZVFFnu8Zs2wO14/oIBZG3GIUJ/CCdY7BviImYZyfR1G+cU9TvM7xYohhBp+1t9RgLEW1aDEI8lZEYyKLdWuc4yXxHbXMZVkGg1/njY7GlmyJgR55ls/AHAqQWx5bNySra2GSM9QwhyPBuSQXzklBBrc6HbpsygEDWdS9fo+8KyzyghZt/wJ9wjF7JmIOh4Trr/S6LDhDq2vBHDtLAZPeQo3hTUCzXW410Zg4Ado92qw9pZySgpajMLbVSg1c8C+DXKo2gWt2uAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm welcome page",title:"cp4mcm welcome page",src:"/ai4cyber/platform/static/04e26b3e103fd8339d4959c148003952/3cbba/cp4mcm-welcome-page.png",srcSet:["/ai4cyber/platform/static/04e26b3e103fd8339d4959c148003952/7fc1e/cp4mcm-welcome-page.png 288w","/ai4cyber/platform/static/04e26b3e103fd8339d4959c148003952/a5df1/cp4mcm-welcome-page.png 576w","/ai4cyber/platform/static/04e26b3e103fd8339d4959c148003952/3cbba/cp4mcm-welcome-page.png 1152w","/ai4cyber/platform/static/04e26b3e103fd8339d4959c148003952/ce6f1/cp4mcm-welcome-page.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}r.isMDXComponent=!0},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-labs-beforestart-index-mdx-bfa00cd9b836e361f610.js.map