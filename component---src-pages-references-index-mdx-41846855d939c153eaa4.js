(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),s=a("NmYn"),n=a.n(s),c=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),h=a.n(b),m=a("QH2O"),p=a.n(m),d=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,r=e.tabs,s=void 0===r?[]:r;return Object(d.b)("div",{className:h()(p.a.pageHeader,(t={},t[p.a.withTabs]=s.length,t[p.a.darkMode]="dark"===i,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},w=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,s=r.baseUrl,n=r.subDirectory,o=s+"/edit/"+r.branch+n+"/src/pages"+t;return s?Object(d.b)("div",{className:"bx--row "+w.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:w.link,href:o},"Edit this page on GitHub"))):null},y=a("FCXl"),g=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,r=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),s=a===r,o=new RegExp(r+"/?(#.*)?$"),l=i.replace(o,a);return Object(d.b)("li",{key:e,className:h()((t={},t[j.selectedItem]=s,t),j.listItem)},Object(d.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:j.list},s))))))},t}(r.a.Component),v=a("MjG9"),k=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),T=a.n(x),A=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(N.c,{className:T.a.row},Object(d.b)(N.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,s=t.frontmatter,b=void 0===s?{}:s,h=t.relativePagePath,m=t.titleType,p=b.tabs,w=b.title,g=b.theme,j=b.description,N=b.keywords,x=b.date,T=Object(k.a)().interiorTheme,H=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=H?i.pathname.replace(H,""):i.pathname,S=p?I.split("/").filter(Boolean).slice(-1)[0]||n()(p[0],{lower:!0}):"",P=g||T;return Object(d.b)(l.a,{tabs:p,homepage:!1,theme:P,pageTitle:w,pageDescription:j,pageKeywords:N,titleType:m},Object(d.b)(u,{title:r?Object(d.b)(r,null):w,label:"label",tabs:p,theme:P}),p&&Object(d.b)(O,{title:w,slug:I,tabs:p,currentTab:S}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:h}),Object(d.b)(A,{date:x})),Object(d.b)(y.a,{pageContext:t,location:i,slug:I,tabs:p,currentTab:S}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--hr7u2",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--2Ypg_",text:"last-modified-date-module--text--1APsu",row:"last-modified-date-module--row--31a27"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},Vofb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),n=a("013z"),c=(a("qKvR"),{}),o={_frontmatter:c},l=n.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(l,Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"IBISWorld. (2021, May). Hospitals in the US. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://my-ibisworld-com.proxyiub.uits.iu.edu/download/us/en/industry/1587/1/0/pdf"}),"https://my-ibisworld-com.proxyiub.uits.iu.edu/download/us/en/industry/1587/1/0/pdf")),Object(s.b)("li",{parentName:"ul"},"Fast Facts on U.S. Hospitals, 2021 | AHA. (n.d.). American Hospital Association. Retrieved September 17, 2021, from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.aha.org/statistics/fast-facts-us-hospitals"}),"https://www.aha.org/statistics/fast-facts-us-hospitals")," "),Object(s.b)("li",{parentName:"ul"},"Top 50 Hospitals by Net Patient Revenue. (n.d.). Definitive Healthcare. Retrieved September 17, 2021, from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.definitivehc.com/resources/healthcare-insights/top-50-hospitals-by-net-patient-revenue"}),"https://www.definitivehc.com/resources/healthcare-insights/top-50-hospitals-by-net-patient-revenue")),Object(s.b)("li",{parentName:"ul"},"The Application and Impact of Information Technology in Healthcare. (2020, November 20). Fingent Technology. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.fingent.com/blog/the-application-and-impact-of-information-technology-in-healthcare/"}),"https://www.fingent.com/blog/the-application-and-impact-of-information-technology-in-healthcare/")),Object(s.b)("li",{parentName:"ul"},"Verizon. (2021). Verizon 2021 Data Breach Investigation Report. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://enterprise.verizon.com/resources/reports/2021-data-breach-investigations-report.pdf"}),"https://enterprise.verizon.com/resources/reports/2021-data-breach-investigations-report.pdf")),Object(s.b)("li",{parentName:"ul"},"Lovejoy, K. (2020, May 13). COVID-19: How healthcare providers can stay vigilant to cyber threats. EY - US. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.ey.com/en_us/consulting/covid-19-how-healthcare-providers-can-stay-vigilant"}),"https://www.ey.com/en_us/consulting/covid-19-how-healthcare-providers-can-stay-vigilant")),Object(s.b)("li",{parentName:"ul"},"Cyber threats to the healthcare and health insurance industries. (n.d.). FireEye. Retrieved September 3, 2021, from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.fireeye.com/content/dam/fireeye-www/global/en/solutions/pdfs/sb-healthcare-and-health-insurance.pdf"}),"https://www.fireeye.com/content/dam/fireeye-www/global/en/solutions/pdfs/sb-healthcare-and-health-insurance.pdf")),Object(s.b)("li",{parentName:"ul"},"Healthcare Information and Management System Society. (2020). 2020 HIMSS Cybersecurity Survey. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.himss.org/sites/hde/files/media/file/2020/11/16/2020_himss_cybersecurity_survey_final.pdf"}),"https://www.himss.org/sites/hde/files/media/file/2020/11/16/2020_himss_cybersecurity_survey_final.pdf")),Object(s.b)("li",{parentName:"ul"},"Healthcare Data Breaches & DDoS Attacks: A Rising Threat? (2021, January 27). Verizon,. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://enterprise.verizon.com/resources/articles/s/healthcare-data-breaches-and-ddos-in-healthcare/"}),"https://enterprise.verizon.com/resources/articles/s/healthcare-data-breaches-and-ddos-in-healthcare/")),Object(s.b)("li",{parentName:"ul"},"fhcsd.org (2021, June 14), Family Health Centers of San Diego Notifies Patients of Data Security Incident. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.fhcsd.org/notice-of-netgain-data-security-incident/"}),"https://www.fhcsd.org/notice-of-netgain-data-security-incident/")),Object(s.b)("li",{parentName:"ul"},"zimmreed.com (2021), Netgain Data Breach. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.zimmreed.com/case/netgain-data-breach/"}),"https://www.zimmreed.com/case/netgain-data-breach/")),Object(s.b)("li",{parentName:"ul"},"Horowitz, B (2021, Feb 24), Mobile health apps leak sensitive data through APIs, report finds. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.fiercehealthcare.com/tech/mobile-health-apps-leak-sensitive-data-through-apis-report-finds"}),"https://www.fiercehealthcare.com/tech/mobile-health-apps-leak-sensitive-data-through-apis-report-finds")),Object(s.b)("li",{parentName:"ul"},"Mitchell, H (2021, Sept 10), Dignity Health patient data exposed after laptop stolen from anesthesiology vendor. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.beckershospitalreview.com/cybersecurity/dignity-health-patient-data-exposed-after-laptop-stolen-from-anesthesiology-vendor.html?utm_campaign=bhr&utm_source=website&utm_content=latestarticles"}),"https://www.beckershospitalreview.com/cybersecurity/dignity-health-patient-data-exposed-after-laptop-stolen-from-anesthesiology-vendor.html?utm_campaign=bhr&utm_source=website&utm_content=latestarticles")),Object(s.b)("li",{parentName:"ul"},"Slabodkin, G (2021, June 22), Legacy medical devices, growing hacker threats create perfect storm of cybersecurity risks. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.medtechdive.com/news/legacy-medical-devices-growing-hacker-threats-create-medtech-cyber-risks/602157/"}),"https://www.medtechdive.com/news/legacy-medical-devices-growing-hacker-threats-create-medtech-cyber-risks/602157/")),Object(s.b)("li",{parentName:"ul"},"Slabodkin, G (2020, Aug 25), Insulin pumps among millions of devices facing risk from newly disclosed cyber vulnerability, IBM says. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.medtechdive.com/news/insulin-pumps-among-millions-of-iot-devices-vulnerable-to-hacker-attacks/584043/"}),"https://www.medtechdive.com/news/insulin-pumps-among-millions-of-iot-devices-vulnerable-to-hacker-attacks/584043/")),Object(s.b)("li",{parentName:"ul"},"Eclypsium (2020, Dec 20), Trickbot Now Offers ‘Trickboot’: Persist, Brick, Profit. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://eclypsium.com/2020/12/03/trickbot-now-offers-trickboot-persist-brick-profit/#iocs"}),"https://eclypsium.com/2020/12/03/trickbot-now-offers-trickboot-persist-brick-profit/#iocs")),Object(s.b)("li",{parentName:"ul"},"Alder, S. (2020, August 17). Healthcare Data Leaks on GitHub: Credentials, Corporate Data and the PHI of 150,000+ Patients Exposed. HIPAA Journal. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.hipaajournal.com/healthcare-data-leaks-on-github-credentials-corporate-data-and-the-phi-of-150000-patients-exposed/"}),"https://www.hipaajournal.com/healthcare-data-leaks-on-github-credentials-corporate-data-and-the-phi-of-150000-patients-exposed/")),Object(s.b)("li",{parentName:"ul"},"Brewster, T. (2021, July 21). A Hospital Employee Stole The Identities Of Dying Patients To Steal Covid Benefits, Feds Claim. Forbes. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.forbes.com/sites/thomasbrewster/2021/07/21/hospital-employee-steals-identities-of-dying-patients-for-covid-benefits-fraud-feds-claim/?sh=7063bf3778e7"}),"https://www.forbes.com/sites/thomasbrewster/2021/07/21/hospital-employee-steals-identities-of-dying-patients-for-covid-benefits-fraud-feds-claim/?sh=7063bf3778e7")," "),Object(s.b)("li",{parentName:"ul"},"McGee, M. K. (2021, April 30). GitHub Leaks: Lessons Learned. CareersInfoSecurity. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.careersinfosecurity.com/github-leaks-lessons-learned-a-16504"}),"https://www.careersinfosecurity.com/github-leaks-lessons-learned-a-16504")),Object(s.b)("li",{parentName:"ul"},"Palmer, D. (2021, August 4). Security researchers warn of TCP/IP stack flaws in operational technology devices. ZDNet. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.zdnet.com/article/security-researchers-warn-of-tcpip-stack-flaws-in-operational-technology-devices/"}),"https://www.zdnet.com/article/security-researchers-warn-of-tcpip-stack-flaws-in-operational-technology-devices/")),Object(s.b)("li",{parentName:"ul"},"Sebenius, A. (2020, November 2). Russia-Based Hackers Plan New Wave of Attacks Against U.S. Hospitals: Security Firm. Insurance Journal. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.insurancejournal.com/news/national/2020/11/02/589183.htm"}),"https://www.insurancejournal.com/news/national/2020/11/02/589183.htm")),Object(s.b)("li",{parentName:"ul"},"Site Editor. (2021, June 9). Ransomware Attacks Affect Sturdy Memorial Hospital and UF Health. CalHIPAA. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.calhipaa.com/ransomware-attacks-affect-sturdy-memorial-hospital-and-uf-health/"}),"https://www.calhipaa.com/ransomware-attacks-affect-sturdy-memorial-hospital-and-uf-health/")),Object(s.b)("li",{parentName:"ul"},"Ikeda, S. (2021, Feb 26), Healthcare Cyber Attacks Rise by 55%, Over 26 Million in the U.S. Impacted. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.cpomagazine.com/cyber-security/healthcare-cyber-attacks-rise-by-55-over-26-million-in-the-u-s-impacted/"}),"https://www.cpomagazine.com/cyber-security/healthcare-cyber-attacks-rise-by-55-over-26-million-in-the-u-s-impacted/")),Object(s.b)("li",{parentName:"ul"},"Skahill, E. and West, D. (2021, Aug 9), Why hospitals and healthcare organizations need to take cybersecurity more seriously. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.brookings.edu/blog/techtank/2021/08/09/why-hospitals-and-healthcare-organizations-need-to-take-cybersecurity-more-seriously/"}),"https://www.brookings.edu/blog/techtank/2021/08/09/why-hospitals-and-healthcare-organizations-need-to-take-cybersecurity-more-seriously/")),Object(s.b)("li",{parentName:"ul"},"Martin, D. (2021, May 4), 8 Benefits of Using AI for Cybersecurity. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.cm-alliance.com/cybersecurity-blog/8-benefits-of-using-ai-for-cybersecurity#:~:text=Artificial%20intelligence%20endeavours%20to%20simulate,protect%20sensitive%20data%20for%20organisations"}),"https://www.cm-alliance.com/cybersecurity-blog/8-benefits-of-using-ai-for-cybersecurity#:~:text=Artificial%20intelligence%20endeavours%20to%20simulate,protect%20sensitive%20data%20for%20organisations"),"."),Object(s.b)("li",{parentName:"ul"},"Scroxton, A. (2021, May 17), Conti ransomware syndicate behind attack on Irish health service. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.computerweekly.com/news/252500905/Conti-ransomware-syndicate-behind-attack-on-Irish-health-service"}),"https://www.computerweekly.com/news/252500905/Conti-ransomware-syndicate-behind-attack-on-Irish-health-service")),Object(s.b)("li",{parentName:"ul"},"Landi, H. (2021, May 24), FBI warns Conti ransomware hit Ireland system, targeted 16 U.S. medical, emergency networks. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.fiercehealthcare.com/tech/fbi-warns-conti-ransomware-hit-ireland-system-targeted-16-u-s-medical-emergency-networks"}),"https://www.fiercehealthcare.com/tech/fbi-warns-conti-ransomware-hit-ireland-system-targeted-16-u-s-medical-emergency-networks")),Object(s.b)("li",{parentName:"ul"},"Benishti, E. (2019, June 3), 3 Ways to Protect Hospital Data from Email Spoofing Attacks. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://hitconsultant.net/2019/06/03/3-ways-to-protect-hospital-data-from-email-spoofing-attacks/#.YT1TZp1KhPY"}),"https://hitconsultant.net/2019/06/03/3-ways-to-protect-hospital-data-from-email-spoofing-attacks/#.YT1TZp1KhPY")),Object(s.b)("li",{parentName:"ul"},"McGee, M. (2018, July 2), Humana Notifying Victims of ‘Identity Spoofing’ Attack. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.databreachtoday.asia/humana-notifying-victims-identity-spoofing-attack-a-11153"}),"https://www.databreachtoday.asia/humana-notifying-victims-identity-spoofing-attack-a-11153")),Object(s.b)("li",{parentName:"ul"},"Raths, D. (2018, Oct 17), Six Lessons From Boston Children’s ‘Hacktivist’ Attack. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.hcinnovationgroup.com/cybersecurity/article/13030808/six-lessons-from-boston-childrens-hacktivist-attack"}),"https://www.hcinnovationgroup.com/cybersecurity/article/13030808/six-lessons-from-boston-childrens-hacktivist-attack")),Object(s.b)("li",{parentName:"ul"},"HIPPA Journal (2021, Jul 29), The Average Cost of a Healthcare Data Breach is Now $9.42 Million. Retrieved from ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.hipaajournal.com/average-cost-of-a-healthcare-data-breach-9-42-million-2021/"}),"https://www.hipaajournal.com/average-cost-of-a-healthcare-data-breach-9-42-million-2021/")),Object(s.b)("li",{parentName:"ul"},"Martin, D. (2021, May 4). 8 Benefits of Using AI for Cybersecurity. CM Alliance. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.cm-alliance.com/cybersecurity-blog/8-benefits-of-using-ai-for-cybersecurity"}),"https://www.cm-alliance.com/cybersecurity-blog/8-benefits-of-using-ai-for-cybersecurity")),Object(s.b)("li",{parentName:"ul"},"Staff, D. R. (2021, September 10). 56% of Large Companies Handle 1,000+ Security Alerts Each Day. Dark Reading. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.darkreading.com/risk/56-of-large-companies-handle-1-000-security-alerts-each-day"}),"https://www.darkreading.com/risk/56-of-large-companies-handle-1-000-security-alerts-each-day")),Object(s.b)("li",{parentName:"ul"},"The Different Types of Healthcare Information Systems (with Examples) I Adracare. (2020, December 4). Adracare. ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.adracare.com/blog/types-of-healthcare-information-systems"}),"https://www.adracare.com/blog/types-of-healthcare-information-systems"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-index-mdx-41846855d939c153eaa4.js.map