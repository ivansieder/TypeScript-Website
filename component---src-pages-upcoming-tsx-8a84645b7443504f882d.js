(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[531],{7615:function(e,t,a){"use strict";a.d(t,{a:function(){return o}});var n=a(2784),r=a(8447),s=a(653),l=a(6986),c=a(357),i=a(876),o=function(){var e=(0,i.Z)(),t=(0,c.D)(e),a=new Date(l.last_release_date),o=new Date(l.upcoming_beta_date),m=new Date(l.upcoming_rc_date),u=new Date(l.upcoming_release_date),d=new Date;!function(e,t,a,n){if(!(e&&t&&a&&n)){var r=[{name:"startDate",date:e},{name:"betaDate",date:t},{name:"rcDate",date:a},{name:"releaseDate",date:l}].filter((function(e){return e instanceof Date}));throw new Error("Dates in release-plan.json can't be converted into JS dates: "+r.join(" - "))}}(a,o,m,u);var p=864e5,h=Math.round(Math.abs((+a-+u)/p)),_=Math.round(Math.abs((+a-+o)/p)),f=Math.round(Math.abs((+a-+m)/p)),v=Math.round(Math.abs((+a-+d)/p)),E=-1;if(v>h||v<0);else if(v<_){E=v/_*.55*100}else if(v<f){E=v/f*.28*100+55}else{E=v/h*.17*100+83}var b=e.formatDateToParts(a,{month:"short",day:"numeric"}),g=e.formatDateToParts(o,{month:"short",day:"numeric"}),y=e.formatDateToParts(m,{month:"short",day:"numeric"}),D=e.formatDateToParts(u,{month:"short",day:"numeric"}),N=n.createElement("a",{href:l.iteration_plan_url},l.upcoming_version),M=n.createElement("a",{href:(0,r.withPrefix)(s.Lz)},t("index_releases_released")),w=s.hN?n.createElement("a",{href:s.ih},t("index_releases_beta")):n.createElement("span",null,t("index_releases_beta")),x=s.Pg?n.createElement("a",{href:s.ZM},t("index_releases_rc")):n.createElement("span",null,t("index_releases_rc"));return n.createElement("div",{className:"grey-box last"},n.createElement("p",null,t("index_releases_pt1")," ",N,t("index_releases_pt2")," ",D.map((function(e){return e.value})).join("")),n.createElement("div",{className:"release-info"},n.createElement("div",{className:"needle",style:{left:E+"%",display:-1===E?"none":"block"}}),n.createElement("div",{className:"needle-head",style:{left:E+"%",display:-1===E?"none":"block"}}),n.createElement("div",{className:"release"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,s.pJ.FA," ",M,n.createElement("br",null),b.map((function(e){return e.value})).join(""))),n.createElement("div",{className:"beta"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,l.upcoming_version," ",w,n.createElement("br",null),g.map((function(e){return e.value})).join(""))),n.createElement("div",{className:"rc"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,l.upcoming_version," ",x,n.createElement("br",null),y.map((function(e){return e.value})).join("")))))}},7763:function(e,t,a){"use strict";a.r(t);var n=a(2784),r=a(7480),s=a(866),l=a(7615),c=a(876),i=a(6986),o=function(e){var t=(0,c.Z)(),a=new Date,s=new Date(i.last_release_date),o=new Date(i.upcoming_beta_date),m=new Date(i.upcoming_rc_date),u=new Date(i.upcoming_release_date),d=864e5,p=Math.round(Math.abs((+s-+u)/d)),h=Math.round(Math.abs((+s-+o)/d)),_=Math.round(Math.abs((+s-+m)/d)),f=Math.round(Math.abs((+s-+a)/d)),v=t.formatDateToParts(o,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),E=t.formatDateToParts(m,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),b=t.formatDateToParts(u,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),g="Up next: "+(f>p||f<0?"Preparing details for the next release":f<h?i.upcoming_version+" Beta on "+v:f<_?i.upcoming_version+" RC on "+E:i.upcoming_version+" Final release on "+b);return n.createElement(n.Fragment,null,n.createElement(r.A,{title:"Release Cycle",description:g,lang:"en"},n.createElement("div",{id:"upcoming"},n.createElement("div",{className:"raised content main-content-block"},n.createElement("div",{className:"split-fivehundred"},n.createElement("h1",{style:{marginTop:"20px"}},"Release Cycle"),n.createElement("div",{id:"index"},n.createElement(l.a,null)))))))};t.default=function(e){return n.createElement(s.R,{locale:"en"},n.createElement(o,e))}},653:function(e){"use strict";e.exports=JSON.parse('{"pJ":{"FA":"4.3","SC":"4.3","ZL":"4.3"},"Pg":false,"hN":false,"Lz":"/docs/handbook/release-notes/typescript-4-3.html","ih":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/","ZM":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-rc/","vs":{"V":{"Y":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-43beta"}}}')},6986:function(e){"use strict";e.exports=JSON.parse('{"_format":"mm/dd/yyyy - these get put into new Date()","upcoming_version":"4.3","iteration_plan_url":"https://github.com/microsoft/TypeScript/issues/42762","last_release_date":"02/28/2021","upcoming_beta_date":"03/30/2021","upcoming_rc_date":"05/11/2021","upcoming_release_date":"05/25/2021"}')}}]);
//# sourceMappingURL=component---src-pages-upcoming-tsx-8a84645b7443504f882d.js.map