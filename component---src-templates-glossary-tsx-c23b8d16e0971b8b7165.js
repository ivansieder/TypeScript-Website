(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[925],{2247:function(e,t,n){"use strict";n.r(t);var o=n(2784),i=n.n(o),r=n(7480),a=n(876),l=n(357),c=n(866),s=n(286),u=n(2332),d=function(e){var t=(0,l.D)((0,a.Z)()),n=e.data.markdownRemark;if(!n)return u.log("Could not render:",JSON.stringify(e)),i().createElement("div",null);(0,o.useEffect)((function(){(0,s.i)()}),[]);var c=e.pageContext.languageMeta;return i().createElement(r.A,{title:t("tsconfig_title"),description:t("tsconfig_description"),lang:e.pageContext.locale},i().createElement("div",{id:"glossary"},i().createElement("div",{className:"whitespace raised content main-content-block subheadline",style:{padding:"1rem",textAlign:"center"}},"This page is a work in progress, congrats on finding it!"),i().createElement("ul",{className:"filterable-quicklinks main-content-block"},c.terms.map((function(e){return i().createElement("li",{key:e.id},i().createElement("a",{href:"#"+e.id},e.display))}))),i().createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})))};t.default=function(e){return i().createElement(c.R,{locale:e.pageContext.locale},i().createElement(d,e))}},286:function(e,t){"use strict";t.i=void 0;var n=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},o=function e(t){return"pre"===t.nodeName.toLowerCase()?t.getBoundingClientRect():e(t.parentElement)},i=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return n();var i,r,a,l,c=t.getAttribute("lsp"),s=(i=t,r=document.body.getBoundingClientRect(),{top:(a=i.getBoundingClientRect()).top-r.top,left:a.left-r.left}),u=((l=document.getElementById("twoslash-mouse-hover-info"))||((l=document.createElement("div")).style.position="absolute",l.id="twoslash-mouse-hover-info",document.body.appendChild(l)),l),d=document.createElement("textarea");d.innerHTML=c,u.textContent=d.value;u.style.display="block",u.style.top=s.top+20+"px",u.style.left=s.left+"px";var m=o(t),f=s.left-m.x;u.style.maxWidth=m.width-f+"px"};t.i=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",i),e.addEventListener("mouseout",n)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",n)}))}}}}]);
//# sourceMappingURL=component---src-templates-glossary-tsx-c23b8d16e0971b8b7165.js.map