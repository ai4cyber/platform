(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),l=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),d=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,c=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),y=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),i=n.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(u.b)(l.Link,{className:N.link,to:""+i},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},r))))))},t}(o.a.Component),w=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,d=b.tabs,j=b.title,y=b.theme,N=b.description,x=b.keywords,k=Object(v.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=T?n.pathname.replace(T,""):n.pathname,S=d?C.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"",P=y||k;return Object(u.b)(i.a,{tabs:d,homepage:!1,theme:P,pageTitle:j,pageDescription:N,pageKeywords:x,titleType:m},Object(u.b)(h,{title:o?Object(u.b)(o,null):j,label:"label",tabs:d,theme:P}),d&&Object(u.b)(f,{title:j,slug:C,tabs:d,currentTab:S}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(O.a,{pageContext:t,location:n,slug:C,tabs:d,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},zeqw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},i=c("PageDescription"),b=c("AnchorLinks"),p=c("AnchorLink"),m={_frontmatter:l},d=s.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the development environment set up as quickly as possible so you can start contributing.")),Object(r.b)(b,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"Project setup"),Object(r.b)(p,{mdxType:"AnchorLink"},"Development"),Object(r.b)(p,{mdxType:"AnchorLink"},"Work in a branch"),Object(r.b)(p,{mdxType:"AnchorLink"},"Sass and CSS Modules"),Object(r.b)(p,{mdxType:"AnchorLink"},"VS Code"),Object(r.b)(p,{mdxType:"AnchorLink"},"Test pages"),Object(r.b)(p,{mdxType:"AnchorLink"},"Publishing")),Object(r.b)("h2",null,"Project setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon"}),"gatsby-theme-carbon")," and click the ",Object(r.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the contents.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When you clone your forked repo the ",Object(r.b)("inlineCode",{parentName:"p"},"origin")," is set to your fork by default. You’ll want to add a remote that points to the upstream repo."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your terminal, verify that the remotes have been set"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git remote -v\n")))),Object(r.b)("h2",null,"Development"),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"yarn")," and yarn workspaces to develop the Carbon Gatsby theme. This allows us to have a development environment that’s closely linked to the theme with minimal setup. Run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(r.b)("p",null,"This project has two packages: the actual theme package (",Object(r.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),") and the ",Object(r.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the theme. Its only dependencies are Gatsby, React, and the adjacent theme package. The ",Object(r.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gatsby-theme-carbon.now.sh"}),"website"),"; it’s deployed on every merge to master."),Object(r.b)("p",null,"New theme development will happen in the theme package while documentation and testing of that change will occur through changes in the example directory."),Object(r.b)("h3",null,"Development scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),Object(r.b)("h2",null,"Work in a branch"),Object(r.b)("p",null,"You should always start a new project by pulling upstream changes into master and then creating a new branch. This workflow ensures you don’t accidentally commit anything to your master branch and get stuck when trying to open a pull request."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull upstream master\ngit checkout -b my-branch-name\n")),Object(r.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"git push origin my-branch-name\n")),Object(r.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in the upstream repository. Navigate to that URL and be sure to give a detailed summary of your pull request in the title and body section of the form."),Object(r.b)("h2",null,"Sass and CSS Modules"),Object(r.b)("p",null,"For internal theme components we use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/documentation/syntax"}),"Sass")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#css-modules"}),"CSS Modules"),". This allows us to take advantage of the Carbon Design System resources while not worrying about className collisions. By default, each ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," file will be supplied with all of the Carbon Sass ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_vars.scss"}),"variables"),": color, spacing, theme, and motion, as well as type and layout mixins, are imported automatically."),Object(r.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the component is ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),". All contained within the ",Object(r.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(r.b)("h3",null,"CSS Modules"),Object(r.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class names for you. Import the class from the ",Object(r.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"}),".treeView {\n  color: $text-01;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import { treeView } from './style.css';\n\nconst TreeView = props => <div className={treeView} />;\n")),Object(r.b)("p",null,"For conditionally applying class names, use the ",Object(r.b)("inlineCode",{parentName:"p"},"classname")," library. Note how we’re using a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tylermcginnis.com/computed-property-names/"}),"computed property name")," for the property being based to ",Object(r.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally ",Object(r.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"long")," variable."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = props => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = props => <div className={className} />;\n};\n")),Object(r.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"global selector"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),Object(r.b)("h2",null,"VS Code"),Object(r.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code, install the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}),"stylelint")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"ESlint")," extensions. We use ESLint’s Prettier rules to format and lint all of our JavaScript in one pass. To get your code to format properly on save, add the following to a ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"}),'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(r.b)("p",null,"To lint the entire project and get errors in your ",Object(r.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add the following to a ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You can run these tasks with ",Object(r.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"}),'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),Object(r.b)("h2",null,"Test pages"),Object(r.b)("p",null,"If you want to add examples of what you are working on or see changes you’ve made, you can add an MDX file to ",Object(r.b)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible at ",Object(r.b)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a page to the ",Object(r.b)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and its purpose to be included with your pull request."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/ai4cyber/platform/test/spacing-audit"}),Object(r.b)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around components when combined in common patterns.")),Object(r.b)("h2",null,"Publishing"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"figure out if it’s patch or feature"),Object(r.b)("li",{parentName:"ol"},"from the root of the package run ",Object(r.b)("inlineCode",{parentName:"li"},"lerna publish patch")," or ",Object(r.b)("inlineCode",{parentName:"li"},"lerna publish minor")),Object(r.b)("li",{parentName:"ol"},"git push upstream master —follow-tags"),Object(r.b)("li",{parentName:"ol"},"In the project’s ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases"}),"release tab"),", edit the new release to include a summary of new changes")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-7353713063c6f41cc77d.js.map