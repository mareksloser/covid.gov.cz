(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0H+L":function(e,t,i){e.exports={searchBox:"search-box-module--searchBox--1QskT",searchBoxInput:"search-box-module--searchBoxInput--1txFT"}},"1hry":function(e,t,i){e.exports={measure:"measure-module--measure--WXIA3",measureTitle:"measure-module--measureTitle--3X-J0",measureDescription:"measure-module--measureDescription--2X56J",measureDetails:"measure-module--measureDetails--2Ht0C",measureDetail:"measure-module--measureDetail--1sbVr",measureButton:"measure-module--measureButton--MP9hB"}},"8QBm":function(e,t,i){e.exports={title:"desktop-top-content-module--title--1qAHI",subtitle:"desktop-top-content-module--subtitle--1R9GZ"}},AebV:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i("q1tI"),n=i.n(a),o=function(e){var t=e.datetime,i=e.prefix,a=e.suffix,o=void 0===a?" ":a;return n.a.createElement("time",{dateTime:t},i,new Date(t).toLocaleString("cs-CZ",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Prague"}),o)}},BE1v:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return W}));var a=i("q1tI"),n=i.n(a),o=i("6Hpx"),l=i("jufJ"),u=i("21qS"),c=i("aXM8"),r=i("cNwE");var m=i("wx14"),d=i("A+CX");var s=function(e,t){void 0===e&&(e="sm");var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Object(c.a)(),n=Object(d.a)({theme:i,name:"MuiUseMediaQuery",props:{}}),o="function"==typeof e?e(i):e;o=o.replace(/^@media( ?)/m,"");var l="undefined"!=typeof window&&void 0!==window.matchMedia,u=Object(m.a)({},n,t),r=u.defaultMatches,s=void 0!==r&&r,g=u.matchMedia,b=void 0===g?l?window.matchMedia:null:g,p=u.noSsr,x=void 0!==p&&p,v=u.ssrMatchMedia,h=void 0===v?null:v,f=a.useState((function(){return x&&l?b(o).matches:h?h(o).matches:s})),E=f[0],B=f[1];return a.useEffect((function(){var e=!0;if(l){var t=b(o),i=function(){e&&B(t.matches)};return i(),t.addListener(i),function(){e=!1,t.removeListener(i)}}}),[o,b,l]),E}((Object(c.a)()||r.a).breakpoints.down(e),t);return"undefined"==typeof window||i},g=i("TSYQ"),b=i.n(g),p=i("zoQI"),x=i("uJxA"),v=i("ptG0"),h=i("1hry"),f=i.n(h),E=i("AebV"),B=i("dT4H"),T=function(e){var t=e.title,i=e.description,a=e.area,o=e.validFrom,u=e.validTo,c=e.link;return n.a.createElement("div",{className:f.a.measure},n.a.createElement("h3",{className:f.a.measureTitle},t),n.a.createElement("p",{className:f.a.measureDescription},i),n.a.createElement("div",{className:f.a.measureDetails},n.a.createElement("div",null,n.a.createElement("div",{className:f.a.measureDetail},Object(l.b)("applies_for")," ",a),n.a.createElement("div",{className:f.a.measureDetail},o&&n.a.createElement(E.a,{datetime:o,prefix:Object(l.b)("from")+" "}),u&&n.a.createElement(E.a,{datetime:u,prefix:Object(l.b)("to")+" "}))),n.a.createElement(B.a,{to:c,label:Object(l.b)("more")},n.a.createElement(p.a,{text:Object(l.b)("more"),variant:"outline-yellow",className:f.a.measureButton}))))},w=function(e){var t=e.measures,i=e.descriptions,a=s()?3:6;return n.a.createElement(n.a.Fragment,null,t.slice(0,a).map((function(e,t){var a,o=e.id,l=e.title,u=e.path,c=e.valid_from,r=e.valid_to,m=e.relationships;return n.a.createElement(T,{key:o,title:l,description:null!==(a=i[t])&&void 0!==a?a:"",validFrom:c,validTo:r,link:u.alias,area:m.region.map((function(e){return e.name})).join(", ")})})))},N=i("oCqU"),I=i("R99l"),_=i("Z3b4"),j=i.n(_),D=i("j++a"),y=function(e){var t,i,a=e.situation,o=a.name,l=a.path,u=null==a||null===(t=a.relationships)||void 0===t||null===(i=t.icon)||void 0===i?void 0:i.code;return n.a.createElement(B.a,{to:l.alias,className:j.a.situation},n.a.createElement("span",{className:j.a.situationTitle},n.a.createElement(D.a,{className:j.a.situationTitleIcon,code:u}),o),n.a.createElement(I.a,{style:{fontSize:16},className:"color-yellow"}))},O=i("uNCC"),k=i.n(O),C=function(e){var t=e.situations;return n.a.createElement("div",{className:k.a.situations},t.map((function(e){return n.a.createElement(y,{situation:e,key:"situation-"+e.id})})))},S=i("bH1b"),F=i.n(S),H=function(e){var t,i,a,o,u,c=e.title,r=e.buttonUrl,m=e.buttonText,d=e.iconCode,s=e.variant,g=e.description,v=e.area,h=e.validTo,f=e.validFrom;return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{col:12,colSm:6,colLg:4,className:"box"},n.a.createElement("div",{className:"box__inner"},n.a.createElement("div",{className:"d-flex flex-row"},d&&n.a.createElement(D.a,{code:d,className:b()(F.a.guideItemIcon,(t={},t[F.a.guideItemIconBlue]="white"===s,t))}),n.a.createElement("h3",{className:b()(F.a.guideItemTitle,(i={},i[F.a.guideItemTitleBlue]="white"===s,i))},c)),(v||f||h)&&n.a.createElement("div",{className:b()("d-flex","flex-row","flex-wrap","justify-content-between",F.a.guideItemSubTitle,(a={},a[F.a.guideItemSubTitleBlue]="white"===s,a))},n.a.createElement("p",null,v),n.a.createElement("p",null,f&&n.a.createElement(E.a,{datetime:f,prefix:Object(l.b)("from")+" "}),h&&n.a.createElement(E.a,{datetime:h,prefix:Object(l.b)("to")+" "}))),g&&n.a.createElement("p",{className:b()(F.a.guideItemDescriptionText,(o={},o[F.a.guideItemDescriptionTextBlue]="white"===s,o))},g),n.a.createElement(p.a,{variant:"outline-yellow",text:m,href:r,linkTitle:c,className:b()(F.a.guideItemBtn,(u={},u[F.a.guideItemBtnBlue]="white"===s,u))}))))},L=i("VWYs"),Y=i.n(L),M=function(e){return void 0!==(null==e?void 0:e.name)},q=function(e){var t,i,a,o,u=e.items,c=e.title,r=e.buttonText,m=e.description,d=e.buttonHref,g=void 0===d?"":d,h=e.variant,f=void 0===h?"blue":h,E=e.itemDescriptions,B=s(),T=M(u[0]);return c=c.replace("<p>","").replace("</p>",""),B?n.a.createElement(v.a,{title:c,boldedTitleCount:2,buttonText:r,buttonHref:g,variant:f},T?n.a.createElement(C,{situations:u}):n.a.createElement(w,{measures:u,descriptions:E})):n.a.createElement("div",null,T,n.a.createElement("div",{className:b()("guide","guide--visible","mt-0","mb-2",(t={},t[Y.a.guideWhite]="white"===f,t),Y.a.guide)},n.a.createElement("div",{className:"guide__inner"},n.a.createElement(N.a,null,n.a.createElement(x.a,{col:12,colLg:3},n.a.createElement("div",null,n.a.createElement("h2",{className:b()("guide__title",Y.a.guideTitle,(i={},i[Y.a.guideTitleBlue]="white"===f,i)),dangerouslySetInnerHTML:{__html:c}})),n.a.createElement("div",null,n.a.createElement("p",{className:b()(Y.a.guideDescriptionText,(a={},a[Y.a.guideDescriptionTextBlue]="white"===f,a))},m))),n.a.createElement(x.a,{col:12,colLg:9},n.a.createElement(N.a,{className:"boxes boxes--light boxes--eq"},T&&u.map((function(e,t){var i,a,o;return n.a.createElement(H,{key:e.id,title:e.name,buttonUrl:e.path.alias,buttonText:Object(l.b)("more"),description:null!==(i=E[t])&&void 0!==i?i:"",variant:f,iconCode:null===(a=e.relationships)||void 0===a||null===(o=a.icon)||void 0===o?void 0:o.code})})),!T&&u.map((function(e,t){var i,a,o;return n.a.createElement(H,{key:e.id,title:e.title,buttonUrl:e.path.alias,variant:f,buttonText:Object(l.b)("more"),description:null!==(i=E[t])&&void 0!==i?i:"",area:null===(a=e.relationships)||void 0===a||null===(o=a.region)||void 0===o?void 0:o.map((function(e){return e.name})).join(", "),validFrom:e.valid_from,validTo:e.valid_to})}))))),n.a.createElement(N.a,null,n.a.createElement(x.a,{col:12,colLg:3},n.a.createElement("div",{className:"guide__more"},n.a.createElement(p.a,{href:g,className:b()("btn--color-white",Y.a.guideBtn,(o={},o[Y.a.guideBtnBlue]="white"===f,o)),text:r})))))))},G=i("Xpzb"),J=i("0H+L"),P=i.n(J),V=function(e){var t=e.placeholder,i=void 0===t?Object(l.b)("search_placeholder"):t,o=e.onSearch,u=Object(a.useState)(""),c=u[0],r=u[1],m=function(){c.length<1||(o&&o(c),console.log("Search:",c))};return n.a.createElement("div",{className:"search"},n.a.createElement("div",{className:b()(P.a.searchBox,"search__input-holder search--with-icon")},n.a.createElement("input",{type:"text",className:b()(P.a.searchBoxInput,"form-control search__input"),placeholder:i,onChange:function(e){return r(e.currentTarget.value)},value:c,onKeyDown:function(e){"Enter"===e.key&&m()}}),n.a.createElement(p.a,{icon:n.a.createElement(G.a,{icon:"search",className:"search__button--icon"}),onClick:m,variant:"yellow",className:"search__button color-white"})))},X=i("8QBm"),R=i.n(X),Z=function(e){var t=e.title,i=e.subtitle,a=e.showSearch,o=void 0===a||a;return s()?null:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:b()("d-flex","flex-column","justify-content-center","align-items-center"),style:{height:250}},t&&n.a.createElement("h2",{className:R.a.title},t),o&&n.a.createElement(x.a,{col:10,colMd:8,colLg:4,colXl:3},n.a.createElement(V,null)),i&&n.a.createElement("p",{className:R.a.subtitle},i)))},Q=i("n214"),A=i("qhky"),U=i("Fjk4"),W=(t.default=function(e){var t=e.data,i=e.pageContext,a=t.homepage,c=a.situation_label,r=a.situation_text,m=a.measure_description,d=a.situation_description,s=a.meta_description,g=a.situation_link,b=a.measure_label,p=a.measure_link,x=a.measure_text,v=a.relationships,h=v.measure_items,f=v.situation_items;return n.a.createElement(u.a,{pageContext:i},n.a.createElement(Q.a,{title:Object(l.b)("homepage_meta_title"),description:null!=s?s:"CovidPortal",pagePath:"/",htmlLanguage:i.langCode}),n.a.createElement(U.a,{langCode:i.langCode,isBlogPost:!1,title:Object(l.b)("homepage_meta_title"),description:s,isHomePage:!0}),n.a.createElement(A.Helmet,{title:Object(l.b)("homepage_meta_title")}),n.a.createElement(Z,{title:Object(l.b)("header_headline"),showSearch:!1}),n.a.createElement(o.a,{className:"pt-2"},(null==f?void 0:f.length)?n.a.createElement(q,{items:f,title:c.processed,description:r,buttonHref:Object(l.b)("slug_situations"),buttonText:null==g?void 0:g.title,variant:"blue",itemDescriptions:d}):"",(null==h?void 0:h.length)?n.a.createElement(q,{items:h,title:b.processed,description:x,buttonHref:Object(l.b)("slug_measures"),buttonText:null==p?void 0:p.title,variant:"white",itemDescriptions:m}):""))},"3219856349")},Fjk4:function(e,t,i){"use strict";var a=i("+uiX");i.d(t,"a",(function(){return a.b}))},R99l:function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),o=i("LYUY");t.a=Object(o.a)(n.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight")},VWYs:function(e,t,i){e.exports={guide:"guide-module--guide--Y56gK","guide--white":"guide-module--guide--white--1V86G",guideWhite:"guide-module--guide--white--1V86G","guide-title":"guide-module--guide-title--3jpvv",guideTitle:"guide-module--guide-title--3jpvv","guide-title--blue":"guide-module--guide-title--blue--1sGBi",guideTitleBlue:"guide-module--guide-title--blue--1sGBi","guide-description-text":"guide-module--guide-description-text--2EYUo",guideDescriptionText:"guide-module--guide-description-text--2EYUo","guide-description-text--blue":"guide-module--guide-description-text--blue--3cTiV",guideDescriptionTextBlue:"guide-module--guide-description-text--blue--3cTiV","guide-btn":"guide-module--guide-btn--hutsJ",guideBtn:"guide-module--guide-btn--hutsJ","guide-btn--blue":"guide-module--guide-btn--blue--3IIZn",guideBtnBlue:"guide-module--guide-btn--blue--3IIZn"}},Z3b4:function(e,t,i){e.exports={situation:"situation-module--situation--2ele-",situationTitle:"situation-module--situationTitle--sXYSX",situationTitleIcon:"situation-module--situationTitleIcon--1hzX3"}},bH1b:function(e,t,i){e.exports={"guide-item-title":"guide-item-module--guide-item-title--18RmY",guideItemTitle:"guide-item-module--guide-item-title--18RmY","guide-item-title--blue":"guide-item-module--guide-item-title--blue--1bCig",guideItemTitleBlue:"guide-item-module--guide-item-title--blue--1bCig","guide-item-icon":"guide-item-module--guide-item-icon--3JFui",guideItemIcon:"guide-item-module--guide-item-icon--3JFui","guide-item-icon--blue":"guide-item-module--guide-item-icon--blue--DbqnR",guideItemIconBlue:"guide-item-module--guide-item-icon--blue--DbqnR","guide-item-btn":"guide-item-module--guide-item-btn--3geDl",guideItemBtn:"guide-item-module--guide-item-btn--3geDl","guide-item-btn--blue":"guide-item-module--guide-item-btn--blue--2acse",guideItemBtnBlue:"guide-item-module--guide-item-btn--blue--2acse","guide-item-sub-title":"guide-item-module--guide-item-sub-title--3lds0",guideItemSubTitle:"guide-item-module--guide-item-sub-title--3lds0","guide-item-sub-title--blue":"guide-item-module--guide-item-sub-title--blue--4elks",guideItemSubTitleBlue:"guide-item-module--guide-item-sub-title--blue--4elks","guide-item-description-text":"guide-item-module--guide-item-description-text--1LZoE",guideItemDescriptionText:"guide-item-module--guide-item-description-text--1LZoE","guide-item-description-text--blue":"guide-item-module--guide-item-description-text--blue--1GaGg",guideItemDescriptionTextBlue:"guide-item-module--guide-item-description-text--blue--1GaGg"}},"j++a":function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),o=i("TSYQ"),l=i.n(o);t.a=function(e){var t=e.className,i=e.code,a=l()(t,"material-icons");return n.a.createElement("i",{className:a},i||"folder")}},lYOF:function(e,t,i){e.exports={contentBoxTitle:"content-box-module--contentBoxTitle--3E5Vo",contentBoxDescription:"content-box-module--contentBoxDescription--O2FI4",contentBox:"content-box-module--contentBox--3WK0J",contentBoxNoPadding:"content-box-module--contentBoxNoPadding--2vKlZ","contentBox--white":"content-box-module--contentBox--white--2fBcG",contentBoxWhite:"content-box-module--contentBox--white--2fBcG","contentBox--blue":"content-box-module--contentBox--blue--243gT",contentBoxBlue:"content-box-module--contentBox--blue--243gT","content-box-btn":"content-box-module--content-box-btn--281FR",contentBoxBtn:"content-box-module--content-box-btn--281FR","content-box-btn--blue":"content-box-module--content-box-btn--blue--22dPm",contentBoxBtnBlue:"content-box-module--content-box-btn--blue--22dPm"}},ptG0:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var a=i("q1tI"),n=i.n(a),o=i("TSYQ"),l=i.n(o),u=i("zoQI"),c=i("uJxA"),r=i("lYOF"),m=i.n(r),d=function(e){var t,i=e.children,a=e.title,o=e.description,r=e.buttonVariant,d=e.buttonText,s=e.buttonHref,g=e.variant,b=void 0===g?"":g,p=e.noPadding;return n.a.createElement("div",{className:l()(m.a.contentBox,m.a["contentBox--"+b],p&&m.a.contentBoxNoPadding,"row")},n.a.createElement(c.a,{col:12},a&&n.a.createElement("h2",{className:m.a.contentBoxTitle,dangerouslySetInnerHTML:{__html:a}}),o&&n.a.createElement("p",{className:m.a.contentBoxDescription},o),i,d&&n.a.createElement(u.a,{href:s,variant:r,text:d,className:l()(m.a.contentBoxBtn,(t={},t[m.a.contentBoxBtnBlue]="white"===b,t))})))}},uNCC:function(e,t,i){e.exports={situations:"situations-box-module--situations--11Ejb"}}}]);
//# sourceMappingURL=component---src-templates-lists-index-tsx-d27953e2b9eac476605c.js.map