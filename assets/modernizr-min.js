window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function i(e,t){return r(E.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&v[i]!==n)return"pfx"==t?i:!0}return!1}function s(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+w.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?c(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),s(i,t,n))}function u(){f.input=function(n){for(var r=0,i=n.length;i>r;r++)T[n[r]]=!!(n[r]in y);return T.list&&(T.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r=0,i,o,a,c=e.length;c>r;r++)y.setAttribute("type",o=e[r]),i="text"!==y.type,i&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&y.style.WebkitAppearance!==n?(p.appendChild(y),a=t.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,p.removeChild(y)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?y.checkValidity&&y.checkValidity()===!1:y.value!=b)),M[e[r]]=!!i;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",f={},m=!0,p=t.documentElement,h="modernizr",g=t.createElement(h),v=g.style,y=t.createElement("input"),b=":)",x={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",w=k.split(" "),C=k.toLowerCase().split(" "),z={},M={},T={},S=[],j=S.slice,F,N=function(e,n,r,i){var o,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=i?i[r]:h+(r+1),l.appendChild(c);return o=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),l.id=h,(u?l:d).innerHTML+=o,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),p.style.overflow=s),!!a},D={}.hasOwnProperty,L;L=o(D,"undefined")||o(D.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function _(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(j.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(j.call(arguments)))};return r}),z.flexbox=function(){return l("flexWrap")},z.flexboxlegacy=function(){return l("boxDirection")},z.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},z.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(v.backgroundColor,"rgba")||a(v.backgroundColor,"hsla")},z.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},z.backgroundsize=function(){return l("backgroundSize")},z.borderimage=function(){return l("borderImage")},z.borderradius=function(){return l("borderRadius")},z.boxshadow=function(){return l("boxShadow")},z.textshadow=function(){return""===t.createElement("div").style.textShadow},z.opacity=function(){return i("opacity:.55"),/^0.55$/.test(v.opacity)},z.cssanimations=function(){return l("animationName")},z.csscolumns=function(){return l("columnCount")},z.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(v.backgroundImage,"gradient")},z.cssreflections=function(){return l("boxReflect")},z.csstransforms=function(){return!!l("transform")},z.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in p.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},z.csstransitions=function(){return l("transition")},z.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},z.generatedcontent=function(){var e;return N(["#",h,"{font:0/0 a}#",h,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e};for(var H in z)L(z,H)&&(F=H.toLowerCase(),f[F]=z[H](),S.push((f[F]?"":"no-")+F));return f.input||u(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)L(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(p.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),g=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[p]];return t||(t={},h++,e[p]=h,g[h]=t),t}function o(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||d.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)o.createElement(c[a]);return o}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=i(e);return!y.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||c(e,r),e}var l="3.7.0",u=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m,p="_html5shiv",h=0,g={},v;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,v=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:u.shivCSS!==!1,supportsUnknownElements:v,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:s,createElement:o,createDocumentFragment:a};e.html5=y,s(t)}(this,t),f._version=d,f._prefixes=E,f._domPrefixes=C,f._cssomPrefixes=w,f.testProp=function(e){return c([e])},f.testAllProps=l,f.testStyles=N,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+S.join(" "):""),f}(this,this.document),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=document.createElement("div");return n.style.cssText=e+Modernizr._prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=document.createElement("modernizr"),r=n.style;return r.cssText=e+Modernizr._prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("placeholder",function(){return!!("placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea")))});