(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Aip":function(e,t,a){e.exports=a.p+"static/rigelapphome-d20ec698463e52449f3ca3564b8d6a3a.png"},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=f(t||a||[]);return r&&r.src},f=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},A="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,x=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(G,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),G=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,m=e.draggable,g=e.ariaHidden,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));G.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!A&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(A||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,m=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,A=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,x=e.itemProp,E=e.loading,S=e.draggable,R=p||h;if(!R)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+b+"ms":"none"},l),j="boolean"==typeof A?"lightgray":A,Q={transitionDelay:b+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&Q,l,m),Y={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:x},L=this.state.isHydrated?f(R):R[0];if(p)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:L.maxWidth?L.maxWidth+"px":null,maxHeight:L.maxHeight?L.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),j&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&Q)}),L.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.base64,spreadProps:Y,imageVariants:R,generateSources:k}),L.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.tracedSVG,spreadProps:Y,imageVariants:R,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,w(R),d.default.createElement(G,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,o.default)({alt:a,title:t,loading:E},L,{imageVariants:R}))}}));if(h){var M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},j&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,width:L.width,opacity:this.state.imgLoaded?0:1,height:L.height},C&&Q)}),L.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.base64,spreadProps:Y,imageVariants:R,generateSources:k}),L.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:L.tracedSVG,spreadProps:Y,imageVariants:R,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,w(R),d.default.createElement(G,{alt:a,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,o.default)({alt:a,title:t,loading:E},L,{imageVariants:R}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:C,sizes:q,fixed:j(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:j(c.default.oneOfType([q,c.default.arrayOf(q)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=O;t.default=Q},OXoV:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.hideNav,n=void 0!==t&&t,s=Object(r.useState)(!1),l=s[0],o=s[1],d=Object(r.useState)(!1),c=d[0],u=d[1],m=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=function(e){if(!m.current.contains(e.target)){if(!c)return;u(!1)}};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[c,m]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{hidden:n,class:"relative pt-6 px-4 sm:px-6 lg:px-16 "},i.a.createElement("nav",{class:"relative flex items-center justify-between sm:h-10 lg:justify-start ","aria-label":"Global"},i.a.createElement("div",{class:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 "},i.a.createElement("div",{class:"flex items-center justify-end w-full md:w-auto"},i.a.createElement("a",{class:"hidden sm:flex ",style:{height:75},href:"/"},i.a.createElement("img",{style:{height:75},class:"h-8 w-auto sm:h-10",src:a("uK82")})),i.a.createElement("div",{class:"-mr-2 flex items-center md:hidden"},i.a.createElement("button",{type:"button",onClick:function(){return o(!l)},class:"bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",id:"main-menu","aria-haspopup":"true"},i.a.createElement("span",{class:"font-sans sr-only"},"Open main menu"),i.a.createElement("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},i.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})))))),i.a.createElement("div",{class:"hidden md:flex md:ml-10 "},i.a.createElement("a",{target:"_blank",href:"https://apps.apple.com/it/app/rigel/id1521924790",class:"font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5"},"iOS"),i.a.createElement("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.rigel",class:"font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5"},"Android"),i.a.createElement("a",{href:"/blog",class:"font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary pr-5"},"Blog"),i.a.createElement("a",{ref:m,onClick:function(){return u(!c)},class:"font-sans font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-primary"},"Contacts",c?i.a.createElement("div",{class:"origin-top-right absolute mt-2 rounded-md shadow-lg bg-darkbackg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},i.a.createElement("div",{class:"py-1"},i.a.createElement("a",{target:"_blank",href:"mailto:info.rigelapp@gmail.com",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Email"),i.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/rigelapp/",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Instagram"),i.a.createElement("a",{target:"_blank",href:"https://twitter.com/AppRigel",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Twitter"),i.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/rigelapp/",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Facebook"))):void 0)))),i.a.createElement("div",{class:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right "+(l?"show":"hidden")+" md:hidden"},i.a.createElement("div",{class:"rounded-lg shadow-md bg-white dark:bg-darkbackg ring-1 ring-black ring-opacity-5 overflow-hidden"},i.a.createElement("div",{class:"px-2 pt-4 flex items-center justify-end"},i.a.createElement("div",{class:"-mr-2"},i.a.createElement("button",{type:"button",onClick:function(){return o(!l)},class:"bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"},i.a.createElement("span",{class:"font-sans sr-only"},"Close main menu"),i.a.createElement("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},i.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}))))),i.a.createElement("div",{role:"menu","aria-orientation":"vertical","aria-labelledby":"main-menu"},i.a.createElement("div",{class:"px-2 pb-3 space-y-1",role:"none"},i.a.createElement("a",{href:"/",class:"font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary",role:"menuitem"},"Rigel"),i.a.createElement("a",{target:"_blank",href:"https://apps.apple.com/it/app/rigel/id1521924790",class:"font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary",role:"menuitem"},"iOS"),i.a.createElement("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.rigel",class:"font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary",role:"menuitem"},"Android"),i.a.createElement("a",{href:"/blog",class:"font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary",role:"menuitem"},"Blog"),i.a.createElement("a",{ref:m,onClick:function(){return u(!c)},class:"font-sans block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-white dark:hover:bg-primary",role:"menuitem"},"Contacts",c?i.a.createElement("div",{class:"origin-top-right absolute mt-2 rounded-md shadow-lg bg-darkbackg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},i.a.createElement("div",{class:"py-1"},i.a.createElement("a",{target:"_blank",href:"mailto:info.rigelapp@gmail.com",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Email"),i.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/rigelapp/",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Instagram"),i.a.createElement("a",{target:"_blank",href:"https://twitter.com/AppRigel",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Twitter"),i.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/rigelapp/",class:"font-sans block px-4 py-2 text-sm text-gray-100 hover:bg-primary hover:text-gray-100",role:"menuitem"},"Facebook"))):void 0))))))}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("Wbzz"),a("Bl7J"),a("9eSz"),a("vrFN"),a("OXoV"));t.default=function(){var e=Object(r.useState)(!1);e[0],e[1];return i.a.createElement("html",{class:"dark"},i.a.createElement("div",{class:"relative bg-white dark:bg-darkbackg overflow-y-auto w-screen h-full lg:h-screen"},i.a.createElement("div",{class:" h-full mx-auto"}," ",i.a.createElement("div",{class:"relative z-10 pb-8 h-full sm:pb-16 md:pb-20 lg:w-1/2"}," ",i.a.createElement(n.a,null),i.a.createElement("main",{class:"flex-col flex justify-center mx-auto h-full px-4 sm:px-6 pt-8 lg:pl-20"},i.a.createElement("div",{class:"md:text-center lg:text-left lg:w-full"},i.a.createElement("h1",{class:"text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl py-3"},i.a.createElement("span",{class:"font-sans block xl:inline"}," How much time do you spend on Social Media? ")),i.a.createElement("p",{class:"font-sans mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},"In a year, as much time as you'd spend ",i.a.createElement("b",null,"reading 200 books"),"!",i.a.createElement("br",null),i.a.createElement("br",null),"What if you could ",i.a.createElement("b",null,"nurture your mind")," or ",i.a.createElement("b",null,"interests")," instead?",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Rigel")," collects articles, videos and podcasts about History, Science, Technology and more topics to easily access them ",i.a.createElement("b",null,"whenever you want"),"."),i.a.createElement("div",{class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.a.createElement("div",{class:"rounded-md shadow"},i.a.createElement("a",{target:"_blank",href:"https://apps.apple.com/it/app/rigel/id1521924790",class:"font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10"},i.a.createElement("img",{style:{height:25,margin:0,padding:0,marginRight:10},class:"",src:a("wwC7")}),i.a.createElement("p",{style:{margin:0,padding:0},class:""},"iOS"))),i.a.createElement("div",{class:"mt-3 sm:mt-0 sm:ml-3"},i.a.createElement("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.rigel",class:"font-sans w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10"},i.a.createElement("img",{style:{height:25,margin:0,padding:0,marginRight:10},class:"",src:a("pSLc")}),i.a.createElement("p",{style:{margin:0,padding:0},class:""},"Android")))))))),i.a.createElement("div",{class:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},i.a.createElement("img",{class:"w-full object-contain sm:h-72 md:h-full lg:w-full lg:h-full",src:a("0Aip"),alt:""}))))}},pSLc:function(e,t){e.exports="data:image/png;base64,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"},uK82:function(e,t,a){e.exports=a.p+"static/rigel-icon-27cbdd8c697781de05b1f88160c870b9.png"},wwC7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACACAYAAADqFVwJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAbqADAAQAAAABAAAAgAAAAADAw2AHAAALI0lEQVR4Ae2de6wdVRXGvaCtpUKBWoxU7YNWkCIBqqEUqwgREOSPEk1JfKTEQBMqWFO1KMT+YyTRYEPxQa0aQXnIMwErJUGkpkYk1GoAK6VAe1EoQinvtpS2/r7mzM05c+ex9+w9c46nayVf5rXXWnu+7+w9rz1zBt5m5sTAnj17JlDwhBTGDwwM7HYKYIWaYwCxDgILwAaQZSOaq41lKmUAhaaAq8ArWWq1rTugNJgVqJ8BBBkPbgW728Qpmj2o/lpZhkIGUGcu2FqkUsa2QwuD2sb6GEAMtbIVGaK4rBpXX80sci4DKPNZ4NvKEkFfZGYgN7htqIcBSFfXuCtRocJ0ZT01c4u6n1ux/iqFSBewR78EIfv/1/5ipcf3BtEuAq5njUUN8awe39X+qR4qzCtSwnPb2P5hpof3BFGmge2e4uQVX9PtXQ3p47tdd+f8sK9bU78BI52digsuLd5sW6MwgHBX5DWdCus3t34IUepmQXIYgOSZIOS0P63td3JS2eqYDMD6qjTzAcs6Rh4Ws34WK4MBSD4xQKQsVzu2ZfAcfRXM357FfsV1g/gdGL2SFrCTAUj+IIh5bLML7k6K61lCtGUglulSoqesb+9uo9hmmH5PBLafI8YxjC15IUKsaCH68gIc0Y6AoRiibSXOGb0mmtTvS+HYr49p5wLtZfxPR7R/BMapxb1fhTs5kK3X8P80oj0UGMfcfRigq3w04KzkVXw/4ZPPykZiAOJ3VhTufvwmRaqGhfFlAPJf9xRO5S8BfXuW7cthV8ojwAsewq2m7NSuVNSSdjKAEE+XCPcm2zXw9QxgrayTPrcliIt+ZkvMx0GWaf03QYxrvKEdJF70fRgKnjPTyK+ttWMfog4ngRlgGng30LiNg8Er4CmwsTXVvLCBU/J/MfUy8l2Lg552D4JNrelGpo8Qbw9TLyOehpofB94P3teaaj6B9uNZ8GQG1pLzDdb//xg7rFHC3wPPg6q2Ccel4FTw9qb2nlzjwJfBCrADVLWXcbwGTG+q7pXzUMmPguuBjiUxbQvBrgOzwajKFcxxJObhQGeXuix4C8S2tQScD9TL9IZRmf2BhnTrLK0Je40kvwWfA6OrsoDvGHA+uBfEfAxEuFx7gy3LQeWXRqIc46iAjl169DG5KoGBfjqG3N3COqbrOa5k3s2nrnoYehQ4GpwDzgbvBN0wPcGYR13v9E0eLBxEXEzSK8E7fJPXXF539te38CrTI4FOkA4HvWa/pkJfRUDV2ckqC4dg7yLDcnCeUyYrVMbAMxS4EPFWlBXU9krCIZp+ubcBTc3iMrCMcBchYOFHAbwvHBFtDoEfBCZaXMGSaPOY+QU8FzYqL+EItpigNwF1k2b1MTCX0Bozkyte7oZ0nQiygHVL0uttuVYGfkKXOT8rg5NwiPZFnK8FTuWzEtm6ygxchXhqNB1WKgSinY6HznQau93UUUNbEAPfR7xF7VQUHuMQ7b0U1oW1idbOWrPzG0j3+3TKXOEQTdt0YWifhEiz1szyLtL8ABxLa1uVTlnUki6l8GlpB1tuhAFdjM9GMF12ZVrmMY7WpgGleg5WJGxmQFsZzIDutZ6JaINFkfK6ystwMtGKmKtn22rCnlwmmlIPa3G0tkms181ZE04MNWd/IdWpiLbdJWVWi/s2jiaaC3vxyvybUOe6iqa0HS2O1jaBdY+DXntEo7r2q21jx2Yh2hqfHUy3uG/hbKL5MBhe9mJf0ZRyqMXR2vQU+EUwShvMGmFAxzWdjHiPPGtvcbMIYqI1otfeJHreNr+KaPJuF073JM2aY+BniLa2arr2rlIv8B1bNZD5eTGg1jYV4TSAtpLtbXEc33Qz2USrRGElp5Uhoilj0lV+qlJ6c6rKwI+rOiZ+iXB2fEsYqX/6LClWhqZJhDs+NJD5OzPwB7rJwhFcLpES4fQGilkzDNwXI80AJyYHEkivOZk1w8BEWtym0FRqcdbaQll0998SQzSlM+HcSY9R8ukYQRTDhIvFpFucQbdi5aVMuHKOYpaI2uLGx6yZxSpkQM/eopha3ND9yigRLUgRAyOKNvpsk3DRfgU+iffRsiNj7beEcxqcEivhPh4nqnDW4pr7Nem7KFHMusooNDoHOcq5ZElB6ypLCIq8WR/s0S3GYLMWF0yhdwB9piPYTLhgCr0DRHmRRsI9553aHEIYOCvEOfHVYx09HYh2KyYJbNNcBvTe2zieEjh/jCYr0n4E0Lh1fXnHrBkG9ifN7NBU6iplehfOrDkGvhaaKhHun6GBzN+LgWM4RJ3p5ZEqnAi3LrXeFutn4OshKUy4EPbCfE+j1emTi5Vs7yMdAkzBW+/FmTXLwEbSHc0Jovf94qTFPUUAe0rQrGjKNhFcrhlf2ysciuvaYrWvs5WPwsA36PE+7hspaXHyG/b1Gt9gVr4SA3oD+DbEm+zj3S7c3T6OVjYqA/oPhrsQT/9v4GRDwtFd6iJcxzqz7jCgpwa/Q7wxLumHhGsVtlbnwlp9ZfQ6958Qr/SD3yZcfSJUjawXTP+MeIVPy9PC6U2SHVUzml80BiYS6SHE+wrIHD7ZIRzHOf3xwqpo6S1QCAOjcb4a3Id4k9KBOoRrbXT67n06kC3XxsApRH4Y8X4IhkaJDWuGbBxLQT2j0wdrzHqLgZ1U50ZwxbAWR3e5hQ039VZ9rTYtBnSx/iUwY1iLUwFa3XQm9h/YIqP3bJAqTRnW4lRPWp2+5PaA5s16joEr0WdnpnCtqv6o56psFXoeCn4uGoqEu4Xt/1Uhs55hQH8eoUu2fOEo8Cbbl/dMla0iGok39EWiohYnqq4Bb2nGrOsM/JTG9FJSi0LhKKjruTuSwjbtGgO6DbmkPXuhcK2CerSuCz+z7jGwhEa0uT19qXA46FP2dobZzlqz8+r1vptOmXkBni7EBbn+t1qjwPSk1qxZBubQeG5OpyxtcXLAUQfFxWlnW66dgT9miaasTi1OBWl1ellBn/+dpmWz2hnQ2fxxCPdoVianFidHAmgIX/DLClmVsHWZDFydJ5pKO7e4JDQt7y7mP5Ms27QWBnQGeSTC5X6O0rnFtVVvIfN2edBGSA2zC4tEUz5v4Qioy4OOi8EaKr4vh7wZjm8oI8C7q1RAukt9IedBYJ+8FyHx7D+E+jDCbS0L6d3iFJDAugXzeWAjwkRIHNP/68x1EU3pKgknRxI8wuRSzZtFYWApnN7rGqlSV5kEp8uU/z3A/nAiIaXaVK9yT0c451fdgoRTHRFPw6UfBodq2cybAR1uZiDa3308K3eVSRISPsP8BUB9tJkfA+LsfF/RlCJYOAUh8e1MFmnezIuBy+BO4yS9LbirbM9It6nruwXt62w+l4HliHZh7taSDbGFUzxdPJ5Xkndf37wSAs5BuMrDQqIKJzVodSOY6LXkKF+JU8w+Mz1h0b8Qa/BPZYsunGqCePqY5ipwvJbNhhgYZG4moukOSZDVIpxqhHiHMbkTnKjlBm03uZ4EGjyqB8C6fbQN6Mekd6zHAF3CTABN2t9Ipu5RZ+G9bYg3EvwK1Gm7Ca7Xby8BM8FoF1Yodwg4BVwOHgN12h0EP8ClXj1VhkqL1NcjM/ME8RaDyTF2ljgngWXgJRDLthFoEYhy2RVjP71jUPkPgFtAiImI68AsUEs3T9xR4AvgARBi9+M81ZuoXnVgZ9Q93Qp2AFdbT8GFYGyT+0W+jwB19duBi+2i0D3gXFDLDyvZ/1qDJ0mypuyY7m3OATPBpBYOZvoEeKwN65hfw0G9a7fUqKt+MLqR/klwAlDdDwEaCaD66mRIg3pupJ4bmdZu/wOSFbq47QIlLQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-0f6440a2b0db0fc6dd84.js.map