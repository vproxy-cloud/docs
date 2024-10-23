"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{6463:(e,t,n)=>{var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},1823:(e,t,n)=>{n.d(t,{Av:()=>c,pF:()=>r,xv:()=>a,zi:()=>o});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",c="--removed-body-scroll-bar-size"},5973:(e,t,n)=>{n.d(t,{jp:()=>p});var r=n(2265),o=n(8039),a=n(1823),c={left:0,top:0,right:0,gap:0},i=function(e){return parseInt(e||"",10)||0},u=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[i(n),i(r),i(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return c;var t=u(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},d=(0,o.Ws)(),s="data-scroll-locked",f=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(a.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(s,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.pF," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.zi," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.pF," .").concat(a.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.zi," .").concat(a.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(s,"] {\n    ").concat(a.Av,": ").concat(u,"px;\n  }\n")},h=function(){var e=parseInt(document.body.getAttribute(s)||"0",10);return isFinite(e)?e:0},v=function(){r.useEffect(function(){return document.body.setAttribute(s,(h()+1).toString()),function(){var e=h()-1;e<=0?document.body.removeAttribute(s):document.body.setAttribute(s,e.toString())}},[])},p=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o;v();var c=r.useMemo(function(){return l(a)},[a]);return r.createElement(d,{styles:f(c,!t,a,n?"":"!important")})}},9219:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(1735),o=n(2265),a=n(1823),c=n(8215),i=(0,n(5411)._)(),u=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:u}),l=a[0],d=a[1],s=e.forwardProps,f=e.children,h=e.className,v=e.removeScrollBar,p=e.enabled,m=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,E=e.as,C=e.gapMode,S=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(0,c.q)([n,t]),k=(0,r.pi)((0,r.pi)({},S),l);return o.createElement(o.Fragment,null,p&&o.createElement(g,{sideCar:i,removeScrollBar:v,shards:m,noIsolation:y,inert:b,setCallbacks:d,allowPinchZoom:!!w,lockRef:n,gapMode:C}),s?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},k),{ref:x})):o.createElement(void 0===E?"div":E,(0,r.pi)({},k,{className:h,ref:x}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF};var d=n(8776),s=n(5973),f=n(8039),h=!1;if("undefined"!=typeof window)try{var v=Object.defineProperty({},"passive",{get:function(){return h=!0,!0}});window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch(e){h=!1}var p=!!h&&{passive:!1},m=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),y(e,r)){var o=b(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y=function(e,t){return"v"===e?m(t,"overflowY"):m(t,"overflowX")},b=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},w=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,s=i>0,f=0,h=0;do{var v=b(e,u),p=v[0],m=v[1]-v[2]-c*p;(p||m)&&y(e,u)&&(f+=m,h+=p),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&1>Math.abs(f)||!o&&i>f)?d=!0:!s&&(o&&1>Math.abs(h)||!o&&-i>h)&&(d=!0),d},E=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},S=function(e){return e&&"current"in e?e.current:e},x=0,k=[];let R=(0,d.L)(i,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),c=o.useState(x++)[0],i=o.useState(f.Ws)[0],u=o.useRef(e);o.useEffect(function(){u.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(S),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var r,o=E(e),c=n.current,i="deltaX"in e?e.deltaX:c[0]-o[0],l="deltaY"in e?e.deltaY:c[1]-o[1],d=e.target,s=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=g(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=g(s,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(i||l)&&(a.current=r),!r)return!0;var h=a.current||r;return w(h,t,e,"h"===h?i:l,!0)},[]),d=o.useCallback(function(e){if(k.length&&k[k.length-1]===i){var n="deltaY"in e?C(e):E(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(S).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),v=o.useCallback(function(e){n.current=E(e),a.current=void 0},[]),m=o.useCallback(function(t){h(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),y=o.useCallback(function(t){h(t.type,E(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return k.push(i),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:y}),document.addEventListener("wheel",d,p),document.addEventListener("touchmove",d,p),document.addEventListener("touchstart",v,p),function(){k=k.filter(function(e){return e!==i}),document.removeEventListener("wheel",d,p),document.removeEventListener("touchmove",d,p),document.removeEventListener("touchstart",v,p)}},[]);var b=e.removeScrollBar,R=e.inert;return o.createElement(o.Fragment,null,R?o.createElement(i,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,b?o.createElement(s.jp,{gapMode:e.gapMode}):null)});var P=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:R}))});P.classNames=l.classNames;let N=P},8039:(e,t,n)=>{n.d(t,{Ws:()=>i});var r,o=n(2265),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},i=function(){var e=c();return function(t){return e(t.styles,t.dynamic),null}}},8215:(e,t,n)=>{n.d(t,{q:()=>i});var r=n(2265);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,c=new WeakMap;function i(e,t){var n,i,u,l=(n=t||null,i=function(t){return e.forEach(function(e){return o(e,t)})},(u=(0,r.useState)(function(){return{value:n,callback:i,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=i,u.facade);return a(function(){var t=c.get(l);if(t){var n=new Set(t),r=new Set(e),a=l.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,a)})}c.set(l,e)},[e]),l}},8776:(e,t,n)=>{n.d(t,{L:()=>c});var r=n(1735),o=n(2265),a=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},n))};function c(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},5411:(e,t,n)=>{n.d(t,{_:()=>a});var r=n(1735);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,c=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(o)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}});return c.options=(0,r.pi)({async:!0,ssr:!1},e),c}},7513:(e,t,n)=>{n.d(t,{_9:()=>c,gm:()=>i});var r=n(2265),o=n(7437),a=r.createContext(void 0),c=e=>{let{dir:t,children:n}=e;return(0,o.jsx)(a.Provider,{value:t,children:n})};function i(e){let t=r.useContext(a);return e||t||"ltr"}},7067:(e,t,n)=>{},9145:(e,t,n)=>{n.d(t,{Q:()=>a});var r=n(2265),o=(0,r.createContext)({text:{search:"Search",searchNoResult:"No results found",toc:"On this page",tocNoHeadings:"No Headings",lastUpdate:"Last updated on",chooseLanguage:"Choose a language",nextPage:"Next",previousPage:"Previous",chooseTheme:"Theme",editOnGithub:"Edit on GitHub"}});function a(){return(0,r.useContext)(o)}},894:(e,t,n)=>{},1735:(e,t,n)=>{n.d(t,{_T:()=>o,ev:()=>a,pi:()=>r});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);