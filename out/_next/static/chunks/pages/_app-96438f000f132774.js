(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7755)}])},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,a,r){{let i=n(2554).normalizeLocalePath,c=n(4643).detectDomainLocale,o=t||i(e,a).detectedLocale,l=c(r,void 0,o);if(l){let t="http".concat(l.http?"":"s","://"),n=o===l.defaultLocale?"":"/".concat(o);return"".concat(t).concat(l.domain).concat("").concat(n).concat(e)}return!1}},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,r=n(7273).Z,i=a(n(7294)),c=n(1003),o=n(7795),l=n(4465),s=n(2692),d=n(8245),u=n(9246),h=n(227),f=n(3468);let p=new Set;function m(e,t,n,a){if(c.isLocalURL(t)){if(!a.bypassPrefetchedCheck){let r=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(p.has(i))return;p.add(i)}Promise.resolve(e.prefetch(t,n,a)).catch(e=>{})}}function x(e){return"string"==typeof e?e:o.formatUrl(e)}let j=i.default.forwardRef(function(e,t){let n,a;let{href:o,as:p,children:j,prefetch:v,passHref:g,replace:b,shallow:_,scroll:y,locale:w,onClick:k,onMouseEnter:M,onTouchStart:C,legacyBehavior:N=!1}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,N&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let F=!1!==v,R=i.default.useContext(s.RouterContext),T=i.default.useContext(d.AppRouterContext),O=null!=R?R:T,E=!R,{href:S,as:W}=i.default.useMemo(()=>{if(!R){let e=x(o);return{href:e,as:p?x(p):e}}let[e,t]=c.resolveHref(R,o,!0);return{href:e,as:p?c.resolveHref(R,p):t||e}},[R,o,p]),H=i.default.useRef(S),P=i.default.useRef(W);N&&(a=i.default.Children.only(n));let z=N?a&&"object"==typeof a&&a.ref:t,[D,A,B]=u.useIntersection({rootMargin:"200px"}),I=i.default.useCallback(e=>{(P.current!==W||H.current!==S)&&(B(),P.current=W,H.current=S),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[W,z,S,B,D]);i.default.useEffect(()=>{O&&A&&F&&m(O,S,W,{locale:w})},[W,S,A,w,F,null==R?void 0:R.locale,O]);let J={ref:I,onClick(e){N||"function"!=typeof k||k(e),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,n,a,r,o,l,s,d,u){let{nodeName:h}=e.currentTarget,f="A"===h.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:o,locale:s,scroll:l}):t[r?"replace":"push"](a||n,{forceOptimisticNavigation:!u})};d?i.default.startTransition(p):p()}(e,O,S,W,b,_,y,w,E,F)},onMouseEnter(e){N||"function"!=typeof M||M(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),O&&(F||!E)&&m(O,S,W,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof C||C(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),O&&(F||!E)&&m(O,S,W,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||g||"a"===a.type&&!("href"in a.props)){let e=void 0!==w?w:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(W,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);J.href=t||f.addBasePath(l.addLocale(W,e,null==R?void 0:R.defaultLocale))}return N?i.default.cloneElement(a,J):i.default.createElement("a",Object.assign({},L,J),n)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;let a=(e,t)=>n(4769).normalizeLocalePath(e,t);t.normalizeLocalePath=a,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!i,[d,u]=a.useState(!1),h=a.useRef(null),f=a.useCallback(e=>{h.current=e},[]);a.useEffect(()=>{if(i){if(s||d)return;let e=h.current;if(e&&e.tagName){let a=function(e,t,n){let{id:a,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=o.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=c.get(a)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},o.push(n),c.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),c.delete(a);let e=o.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n});return a}}else if(!d){let e=r.requestIdleCallback(()=>u(!0));return()=>r.cancelIdleCallback(e)}},[s,n,t,d,h.current]);let p=a.useCallback(()=>{u(!1)},[]);return[f,d,p]};var a=n(7294),r=n(4686);let i="function"==typeof IntersectionObserver,c=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(5893),r=n(4879),i=n.n(r),c=n(1664),o=n.n(c),l=n(7294);let s=()=>{let[e,t]=(0,l.useState)(!1);return(0,a.jsxs)("nav",{className:i().container,children:[(0,a.jsx)("div",{className:i().brand,children:(0,a.jsx)(o(),{passHref:!0,href:"/",title:"Back to Homepage",children:"J. Monagas™"})}),(0,a.jsx)("div",{alt:"Display Menu Bar",title:"Display Menu Bar",onClick:()=>t(!e),children:(0,a.jsx)("span",{className:i().activate,children:(0,a.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:30,width:30,children:(0,a.jsx)("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})})})}),(0,a.jsx)("div",{className:i().hamburgerMenu,children:(0,a.jsxs)("ul",{onClick:()=>t(!1),className:i().hamburgerList,style:{right:e?"0px":"-300vw"},children:[(0,a.jsx)("li",{className:i().hamburgerItem,children:(0,a.jsxs)(o(),{href:"/",title:"Learn About Us",children:[(0,a.jsx)("span",{children:(0,a.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:22,width:22,children:(0,a.jsx)("path",{d:"M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0014.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0015.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 01512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 01-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"})})}),"\xa0\xa0About"]})}),(0,a.jsx)("li",{className:i().hamburgerItem,children:(0,a.jsxs)(o(),{href:"/services",title:"Get Our Services",children:[(0,a.jsx)("span",{children:(0,a.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:22,width:22,children:(0,a.jsx)("path",{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"})})}),"\xa0\xa0Services"]})}),(0,a.jsx)("li",{className:i().hamburgerItem,children:(0,a.jsxs)(o(),{href:"/contact",title:"Contact Us Now",children:[(0,a.jsx)("span",{children:(0,a.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:22,width:22,children:(0,a.jsx)("path",{d:"M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"})})}),"\xa0\xa0Contact"]})})]})})]})};var d=n(9994),u=n.n(d),h=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:u().container,id:"getFreeTrial",children:(0,a.jsxs)("div",{className:u().wrapper,alt:"Start A Free Trial Today",title:"Start A Free Trial Today",children:[(0,a.jsx)("h2",{className:u().h2,children:"Start a free trial and enjoy 2 weeks of Website Repair and Maintenance Services"}),(0,a.jsx)("p",{className:u().p,children:"Getting started takes just a moment. No credit card required"})]})})})},f=n(765),p=n.n(f),m=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("footer",{className:p().container,alt:"Menu Quick Reference",title:"Menu Quick Reference",children:[(0,a.jsxs)("div",{className:p().card,children:[(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/",title:"Click to Follow Link",children:"Who We Are"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/#introduction",title:"Click to Follow Link",children:"Our Expertise"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/#mainReasons",title:"Click to Follow Link",children:"Key Reasons"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/#introArticle",title:"Click to Follow Link",children:"The Benefits"})})]}),(0,a.jsxs)("div",{className:p().card,children:[(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)("h4",{children:(0,a.jsx)(o(),{href:"/services",title:"Click to Follow Link",children:"What We Do"})})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/services/#whatWeDo",title:"Click to Follow Link",children:"Our Services"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/services/#servicesArticle",title:"Click to Follow Link",children:"Maintenance"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/services/#servicesAccordion",title:"Click to Follow Link",children:"Development"})})]}),(0,a.jsxs)("div",{className:p().card,children:[(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)("h4",{children:(0,a.jsx)(o(),{href:"/contact",title:"Click to Follow Link",children:"How To Contact"})})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/contact/#howToOrder",title:"Click to Follow Link",children:"Order Today"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/contact/#contactAccordion",title:"Click to Follow Link",children:"Our Support"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/contact/#effectiveWebsites",title:"Click to Follow Link",children:"Consulting"})})]}),(0,a.jsxs)("div",{className:p().card,children:[(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)("h4",{children:(0,a.jsx)(o(),{href:"/#whyContractUs",title:"Click to Follow Link",children:"Background"})})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/#deadline",title:"Click to Follow Link",children:"Deadline"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/contact/#howToContact",title:"Click to Follow Link",children:"Requests"})}),(0,a.jsx)("div",{className:p().item,children:(0,a.jsx)(o(),{href:"/contact/#letUsProceed",title:"Click to Follow Link",children:"Proceed"})})]})]}),(0,a.jsx)("div",{className:p().copyright,children:(0,a.jsx)(o(),{href:"/",title:"Go Back to Homepage",children:(0,a.jsxs)("p",{children:["All\xa0Rights\xa0Reserved\xa0\xa9\xa0",new Date().getFullYear(),"–",new Date().getFullYear()+5]})})})]})};let x=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{}),(0,a.jsx)(m,{})]}),j=e=>{let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{}),t,(0,a.jsx)(x,{})]})};n(7475);var v=n(9008),g=n.n(v),b=function(e){let{Component:t,pageProps:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g(),{children:[(0,a.jsx)("title",{children:"J. Monagas™ Website Repair and Maintenance"}),(0,a.jsx)("meta",{name:"description",content:"Since December 2020, J. Monagas™ has been providing website repair and maintenance services to his clients in Canada and abroad"},"description"),(0,a.jsx)("meta",{name:"keywords",content:"monagas, website, repair, maintenance, front-end, back-end, full-stack, copyrighting, proofreading, SEO audits"},"keywords"),(0,a.jsx)("meta",{lang:"en"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_US"},"og:locale"),(0,a.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,a.jsx)("meta",{property:"og:url",content:"https://jmonagas.ml"},"og:url"),(0,a.jsx)("meta",{property:"og:site_name",content:"J. Monagas™ Website Repair and Maintenance"},"og:site_name"),(0,a.jsx)("meta",{property:"og:title",content:"J. Monagas™ Website Repair and Maintenance"},"og:title"),(0,a.jsx)("meta",{property:"og:description",content:"J. Monagas™ Website Repair and Maintenance"},"og:description"),(0,a.jsx)("meta",{property:"og:image",content:"https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"},"og:image"),(0,a.jsx)("meta",{property:"og:image:alt",content:"J. Monagas™ Website Repair and Maintenance"},"og:image:alt"),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,a.jsx)("meta",{property:"twitter:site",content:"https://jmonagas.ml"},"twitter:site"),(0,a.jsx)("meta",{property:"twitter:title",content:"J. Monagas™ Website Repair and Maintenance"},"twitter:title"),(0,a.jsx)("meta",{property:"twitter:description",content:"J. Monagas™ Website Repair and Maintenance"},"twitter:description"),(0,a.jsx)("meta",{property:"twitter:image",content:"https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"},"twitter:image"),(0,a.jsx)("meta",{property:"twitter:image:alt",content:"J. Monagas™ Website Repair and Maintenance"},"twitter:image:alt"),(0,a.jsx)("meta",{name:"language",content:"en-us"},"language"),(0,a.jsx)("meta",{name:"rating",content:"General"},"rating"),(0,a.jsx)("meta",{name:"distribution",content:"Global"},"distribution"),(0,a.jsx)("meta",{name:"classification",content:"website, development, front-end, back-end, full-stack, repair, maintenance"},"classification"),(0,a.jsx)("meta",{name:"robots",content:"index, follow, notranslate"},"robots"),(0,a.jsx)("meta",{name:"author",content:"J. Monagas™ Website Repair and Maintenance"},"author"),(0,a.jsx)("meta",{name:"creator",content:"Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"},"creator"),(0,a.jsx)("meta",{name:"publisher",content:"J. Monagas™ Website Repair and Maintenance in English and Spanish"},"publisher"),(0,a.jsx)("meta",{name:"copyright",content:"Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada"},"copyright"),(0,a.jsx)("link",{rel:"canonical",type:"canonical",href:"https://jmonagas.ml"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_960_720.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"})]}),(0,a.jsx)(j,{children:(0,a.jsx)(t,{...n})})]})}},9994:function(e){e.exports={container:"GetFreeTrial_container__LeEYT",wrapper:"GetFreeTrial_wrapper__LI5bd",h2:"GetFreeTrial_h2__m0oe7",p:"GetFreeTrial_p__DLnba"}},4879:function(e){e.exports={hamburgerMenu:"Navbar_hamburgerMenu__4lsAY",container:"Navbar_container__rxFeS",brand:"Navbar_brand__3jErn",menu:"Navbar_menu__66zmq",activate:"Navbar_activate__omEZR",hamburgerList:"Navbar_hamburgerList__TO_WU",hamburgerItem:"Navbar_hamburgerItem__aQwKB"}},765:function(e){e.exports={container:"WebsiteRefs_container__mMTdo",card:"WebsiteRefs_card__llQlO",item:"WebsiteRefs_item__h93GD",copyright:"WebsiteRefs_copyright__YYjnT"}},7475:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);