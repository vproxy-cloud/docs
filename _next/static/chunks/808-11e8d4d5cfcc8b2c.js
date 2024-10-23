"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{5517:(e,t,a)=>{a.d(t,{D:()=>v,Y:()=>y});var n=a(4294),r=a(4631),s=a(6634),l=a(9744),o=a(3592),d=a(6164),c=a(8050),i=a(5763),m=a(2042),u=a(6463),f=a(2265),h=a(4275),x=a(3547),p=a(3525),g=a(7437),v=(0,p.j)(["flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4","data-[active=false]:hover:bg-fd-accent/50 data-[active=false]:hover:text-fd-accent-foreground/80 data-[active=false]:hover:transition-none","data-[active=true]:bg-fd-primary/10 data-[active=true]:font-medium data-[active=true]:text-fd-primary"]),b=(0,f.createContext)(void 0),y=(0,f.memo)(({components:e,defaultOpenLevel:t=0,prefetch:a=!0,...r})=>{let s=(0,c.A)().enabled&&!r.hideSearch,o=(0,f.useMemo)(()=>({defaultOpenLevel:t,components:{Folder:C,Separator:j,Item:k,...e},prefetch:a}),[e,t,a]);return(0,g.jsx)(m.wb,{id:"nd-sidebar",blockScrollingWidth:768,...r.aside,className:(0,d.m6)("fixed top-fd-layout-top z-30 bg-fd-card pt-2 text-sm md:sticky md:h-[var(--fd-sidebar-height)] md:flex-1 md:pt-4","max-md:inset-x-0 max-md:bottom-0 max-md:bg-fd-background/80 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible",r.aside?.className),style:{...r.aside?.style,"--fd-sidebar-height":"calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"},children:(0,g.jsxs)("div",{className:"flex size-full flex-col md:ms-auto md:w-[var(--fd-sidebar-width)] md:border-e",children:[r.banner,s?(0,g.jsx)(n.E,{className:"mx-4 rounded-lg max-md:hidden md:mx-3"}):null,(0,g.jsx)(l.xr,{className:"h-full",children:(0,g.jsxs)(l.fK,{style:{maskImage:"linear-gradient(to bottom, transparent 2px, white 16px)"},children:[r.children,(0,g.jsx)(b.Provider,{value:o,children:(0,g.jsx)(N,{})})]})}),r.footer]})})});y.displayName="Sidebar";var j=(0,f.memo)(({item:e})=>(0,g.jsx)("p",{className:"mb-2 mt-8 px-2 text-sm font-medium first:mt-0",children:e.name}));function N(){let{root:e}=(0,i.W)(),{components:t}=S();return(0,g.jsx)("div",{className:"px-2 py-4 md:px-3",children:w(e.children,0,t)})}function w(e,t,{Separator:a,Item:n,Folder:r}){return e.map((e,s)=>{let l=`${e.type}_${s.toString()}`;switch(e.type){case"separator":return(0,g.jsx)(a,{item:e},l);case"folder":return(0,g.jsx)(r,{item:e,level:t+1},l);default:return(0,g.jsx)(n,{item:e},e.url)}})}j.displayName="SeparatorNode";var k=(0,f.memo)(({item:e})=>{let t=(0,u.usePathname)(),a=(0,r.z)(e.url,t,!1),{prefetch:n}=S();return(0,g.jsxs)(h.Z,{href:e.url,external:e.external,"data-active":a,className:(0,d.m6)(v()),prefetch:n,children:[e.icon??(e.external?(0,g.jsx)(o.dL,{}):null),e.name]})});k.displayName="PageNode";var C=(0,f.memo)(({item:e,level:t})=>{let{defaultOpenLevel:a,prefetch:n,components:l}=S(),{path:c}=(0,i.W)(),m=(0,u.usePathname)(),p=void 0!==e.index&&(0,r.z)(e.index.url,m,!1),b=(0,d.m6)(v(),"w-full md:pe-1.5"),y=p||c.includes(e)||(e.defaultOpen??a>=t),[j,N]=(0,f.useState)(y);(0,x.p)(y,e=>{e&&N(e)});let k=(0,g.jsxs)(g.Fragment,{children:[e.icon,e.name,(0,g.jsx)(o._M,{"data-icon":!0,className:(0,d.m6)("ms-auto transition-transform",!j&&"-rotate-90")})]});return(0,g.jsxs)(s.zF,{open:j,onOpenChange:N,children:[e.index?(0,g.jsx)(h.Z,{"data-active":p,className:b,href:e.index.url,onClick:e=>{(e.target.hasAttribute("data-icon")||p)&&(N(e=>!e),e.preventDefault())},prefetch:n,children:k}):(0,g.jsx)(s.wy,{"data-active":p,className:b,children:k}),(0,g.jsx)(s.Fw,{children:(0,g.jsx)("div",{className:"ms-2 border-s py-1.5 ps-1",children:w(e.children,t,l)})})]})});function S(){let e=(0,f.useContext)(b);if(!e)throw Error("<Sidebar /> component required.");return e}C.displayName="FolderNode"},4631:(e,t,a)=>{a.d(t,{z:()=>n});function n(e,t,a=!0){return e===t||a&&t.startsWith(`${e}/`)}},8050:(e,t,a)=>{a.d(t,{A:()=>l,X:()=>o});var n=a(2265),r=a(7437),s=(0,n.createContext)({enabled:!1,hotKey:[],setOpenSearch:()=>void 0});function l(){return(0,n.useContext)(s)}function o({SearchDialog:e,children:t,preload:a=!0,options:l,hotKey:o=[{key:e=>e.metaKey||e.ctrlKey,display:"⌘"},{key:"k",display:"K"}],links:d}){let[c,i]=(0,n.useState)(!a&&void 0);return(0,n.useEffect)(()=>{let e=e=>{o.every(t=>"string"==typeof t.key?e.key===t.key:t.key(e))&&(i(!0),e.preventDefault())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[o]),(0,r.jsxs)(s.Provider,{value:(0,n.useMemo)(()=>({enabled:!0,hotKey:o,setOpenSearch:i}),[o]),children:[void 0!==c&&(0,r.jsx)(e,{open:c,onOpenChange:i,links:d,...l}),t]})}},8125:(e,t,a)=>{a.d(t,{L:()=>c,j:()=>d});var n=a(3950),r=a(620),s=a(6164),l=a(9145),o=a(7437);function d(e){let t=(0,l.Q)();if(!t.locales)throw Error("Missing `<I18nProvider />`");return(0,o.jsxs)(r.J2,{children:[(0,o.jsx)(r.xo,{"aria-label":t.text.chooseLanguage,...e,className:(0,s.m6)((0,n.d)({color:"ghost",className:"gap-1.5 p-1.5"}),e.className),children:e.children}),(0,o.jsxs)(r.yk,{className:"flex flex-col overflow-hidden p-0",children:[(0,o.jsx)("p",{className:"mb-1 p-2 text-xs font-medium text-fd-muted-foreground",children:t.text.chooseLanguage}),t.locales.map(e=>(0,o.jsx)("button",{type:"button",className:(0,s.m6)("p-2 text-start text-sm",e.locale===t.locale?"bg-fd-primary/10 font-medium text-fd-primary":"hover:bg-fd-accent hover:text-fd-accent-foreground"),onClick:()=>{t.onChange?.(e.locale)},children:e.name},e.locale))]})]})}function c(e){let t=(0,l.Q)(),a=t.locales?.find(e=>e.locale===t.locale)?.name;return(0,o.jsx)("span",{...e,children:a})}},8704:(e,t,a)=>{a.d(t,{Tl:()=>g,_R:()=>x,uc:()=>f,yO:()=>h});var n=a(4631),r=a(3950),s=a(3592),l=a(6164),o=a(4275),d=a(6463),c=a(2265),i=a(7437),m=a(3525),u=a(9512),f=(0,c.forwardRef)(({item:e,...t},a)=>{let r=(0,d.usePathname)(),s=e.active??"url",l="none"!==s&&(0,n.z)(e.url,r,"nested-url"===s);return(0,i.jsx)(o.Z,{ref:a,href:e.url,external:e.external,...t,"data-active":l,children:t.children})});f.displayName="BaseLinkItem";var h=(0,c.forwardRef)(({item:e,...t},a)=>(0,i.jsxs)(o.Z,{ref:a,href:e.url,external:e.external,...t,className:(0,l.m6)((0,r.d)({color:"secondary"}),"gap-1.5 [&_svg]:size-4",t.className),children:[e.icon,e.text]}));h.displayName="ButtonItem";var x=(0,c.forwardRef)(({item:e,...t},a)=>(0,i.jsx)(o.Z,{ref:a,"aria-label":e.label,href:e.url,external:e.external,...t,className:(0,l.m6)((0,r.d)({size:"icon",color:"ghost"}),t.className),children:e.icon}));x.displayName="IconItem";var p=(0,m.j)("size-6 rounded-full p-1 text-fd-muted-foreground",{variants:{dark:{true:"dark:bg-fd-accent dark:text-fd-accent-foreground",false:"bg-fd-accent text-fd-accent-foreground dark:bg-transparent dark:text-fd-muted-foreground"}}});function g({className:e,...t}){let{setTheme:a,resolvedTheme:n}=(0,u.F)();return(0,i.jsxs)("button",{type:"button",className:(0,l.m6)("inline-flex items-center rounded-full border p-0.5",e),"data-theme-toggle":"","aria-label":"Toggle Theme",onClick:()=>{a("dark"===n?"light":"dark")},...t,children:[(0,i.jsx)(s.kO,{className:(0,l.m6)(p({dark:!1}))}),(0,i.jsx)(s.JF,{className:(0,l.m6)(p({dark:!0}))})]})}},6634:(e,t,a)=>{a.d(t,{Fw:()=>c,wy:()=>d,zF:()=>o});var n=a(6164),r=a(882),s=a(2265),l=a(7437),o=r.fC,d=r.wy,c=(0,s.forwardRef)(({children:e,...t},a)=>(0,l.jsx)(r.Fw,{ref:a,...t,className:(0,n.m6)("overflow-hidden [--radix-collapsible-content-height:0px] data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down",t.className),children:e}));c.displayName=r.Fw.displayName},4294:(e,t,a)=>{a.d(t,{E:()=>i,_:()=>c});var n=a(3950),r=a(3592),s=a(6164),l=a(8050),o=a(9145),d=a(7437);function c(e){let{setOpenSearch:t}=(0,l.A)();return(0,d.jsx)("button",{type:"button",className:(0,s.m6)((0,n.d)({size:"icon",color:"ghost",className:e.className})),"data-search":"","aria-label":"Open Search",onClick:()=>{t(!0)},children:(0,d.jsx)(r.ol,{})})}function i(e){let{hotKey:t,setOpenSearch:a}=(0,l.A)(),{text:n}=(0,o.Q)();return(0,d.jsxs)("button",{type:"button","data-search-full":"",...e,className:(0,s.m6)("inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",e.className),onClick:()=>{a(!0)},children:[(0,d.jsx)(r.ol,{className:"ms-1 size-4"}),n.search,(0,d.jsx)("div",{className:"ms-auto inline-flex gap-0.5",children:t.map((e,t)=>(0,d.jsx)("kbd",{className:"rounded-md border bg-fd-background px-1.5",children:e.display},t))})]})}},2546:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(5517);a(4294),a(6634);var r=a(3950);a(9744);var s=a(3592),l=a(6164);a(8050),a(5763);var o=a(7753);a(9145),a(894);var d=a(2265),c=a(3547),i=a(7437);function m(e){let{collapsed:t,setCollapsed:a}=(0,o.A)(),[m,u]=(0,d.useState)(!1),f=(0,d.useRef)(0),h=(0,d.useRef)(0);(0,c.p)(t,()=>{u(!1),h.current=Date.now()+150});let x=(0,d.useCallback)(e=>{"touch"===e.pointerType||h.current>Date.now()||(window.clearTimeout(f.current),u(!0))},[]),p=(0,d.useCallback)(e=>{"touch"!==e.pointerType&&(window.clearTimeout(f.current),f.current=window.setTimeout(()=>{u(!1),h.current=Date.now()+150},Math.min(e.clientX,document.body.clientWidth-e.clientX)>100?0:500))},[]);return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"fixed inset-y-0 start-0 w-6 max-md:hidden",onPointerEnter:x,onPointerLeave:p}),(0,i.jsx)("button",{type:"button","aria-label":"Collapse Sidebar",className:(0,l.m6)((0,r.d)({color:"secondary",size:"icon",className:"fixed start-4 bottom-2 z-10 max-md:hidden"})),onClick:()=>{a(e=>!e)},children:(0,i.jsx)(s.aq,{})}),(0,i.jsx)("style",{children:"#nd-page { --fd-sidebar-width: 0px; }"})]}):null,(0,i.jsx)(n.Y,{...e,aside:(0,d.useMemo)(()=>({"data-collapse":t,"data-hover":m,onPointerEnter:t?x:void 0,onPointerLeave:t?p:void 0,"aria-hidden":!!(t&&!m),style:{"--fd-content-offset":"calc(var(--fd-sidebar-width) * -1)"},className:(0,l.m6)("md:transition-[transform,margin,flex]",t&&["md:me-[var(--fd-content-offset)] md:grow-0 md:shadow-md",m?"md:translate-x-0":"md:translate-x-[calc(var(--fd-sidebar-width)*-1)] rtl:md:translate-x-[var(--fd-sidebar-width)]"],"")}),[t,m,x,p])}),(0,i.jsx)("div",{role:"none",className:(0,l.m6)("transition-all max-md:hidden",t&&"flex-1")})]})}},802:(e,t,a)=>{a.d(t,{IconItem:()=>r._R,LanguageToggle:()=>l.j,LanguageToggleText:()=>l.L,LinksMenu:()=>E,MenuItem:()=>C,NavProvider:()=>y.N7,RootToggle:()=>p,Sidebar:()=>n.Y,SidebarCollapseTrigger:()=>T,SubNav:()=>S,ThemeToggle:()=>r.Tl,TreeContextProvider:()=>N.G});var n=a(5517),r=a(8704),s=a(4294),l=a(8125),o=a(4631),d=a(620),c=a(3592),i=a(6164),m=a(7753),u=a(2265),f=a(7138),h=a(6463),x=a(7437);function p({options:e,...t}){let[a,n]=(0,u.useState)(!1),{closeOnRedirect:r}=(0,m.A)(),s=(0,h.usePathname)(),l=(0,u.useMemo)(()=>e.find(e=>(0,o.z)(e.url,s,!0)),[e,s]),p=()=>{r.current=!1,n(!1)};return(0,x.jsxs)(d.J2,{open:a,onOpenChange:n,children:[(0,x.jsxs)(d.xo,{...t,className:(0,i.m6)("flex flex-row items-center gap-2.5 rounded-lg p-1 hover:bg-fd-accent/50 hover:text-fd-accent-foreground",t.className),children:[l?(0,x.jsx)(g,{...l}):null,(0,x.jsx)(c._M,{className:"size-4 text-fd-muted-foreground md:me-1.5"})]}),(0,x.jsx)(d.yk,{className:"w-[var(--radix-popover-trigger-width)] overflow-hidden p-0",children:e.map(e=>(0,x.jsx)(f.default,{href:e.url,onClick:p,...e.props,className:(0,i.m6)("flex w-full flex-row items-center gap-2.5 p-1.5",l===e?"bg-fd-accent text-fd-accent-foreground":"hover:bg-fd-accent/50",e.props?.className),children:(0,x.jsx)(g,{...e})},e.url))})]})}function g(e){return(0,x.jsxs)(x.Fragment,{children:[e.icon,(0,x.jsxs)("div",{className:"flex-1 text-left",children:[(0,x.jsx)("p",{className:"text-sm font-medium",children:e.title}),e.description?(0,x.jsx)("p",{className:"text-xs text-fd-muted-foreground",children:e.description}):null]})]})}var v=a(6634),b=a(3950),y=a(9471);a(9744);var j=a(8050),N=a(5763);a(9145),a(894);var w=a(2042),k=a(3547);function C(e){let{item:t,...a}=e;return"custom"===t.type?(0,x.jsx)("div",{...a,className:(0,i.m6)("grid",a.className),children:t.children}):"menu"===t.type?(0,x.jsxs)(v.zF,{className:"flex flex-col",children:[(0,x.jsxs)(v.wy,{...a,"data-active":!1,className:(0,i.m6)((0,n.D)(),"group/link",a.className),children:[t.icon,t.text,(0,x.jsx)(c._M,{className:"ms-auto transition-transform group-data-[state=closed]/link:-rotate-90"})]}),(0,x.jsx)(v.Fw,{children:(0,x.jsx)("div",{className:"ms-2 flex flex-col border-s py-2 ps-2",children:t.items.map((e,t)=>(0,x.jsx)(C,{item:e},t))})})]}):"button"===t.type?(0,x.jsx)(r.yO,{item:t,...a}):(0,x.jsxs)(r.uc,{item:t,...a,className:(0,i.m6)((0,n.D)(),a.className),children:[t.icon,t.text]})}function S(e){let{title:t,url:a,enableSearch:n=!0,...r}=e,{open:l}=(0,m.A)(),{isTransparent:o}=(0,u.useContext)(y.Ly),d=(0,j.A)();return(0,x.jsxs)("header",{id:"nd-subnav",...r,className:(0,i.m6)("sticky top-[var(--fd-banner-height)] z-40 flex flex-row items-center border-b border-fd-foreground/10 px-4 transition-colors",(!o||l)&&"bg-fd-background/80 backdrop-blur-lg",r.className),children:[(0,x.jsx)(y.Dx,{url:a,title:t}),(0,x.jsx)("div",{className:"flex flex-1 flex-row items-center gap-1",children:r.children}),d.enabled&&n?(0,x.jsx)(s._,{}):null,(0,x.jsx)(w.vP,{className:(0,i.m6)((0,b.d)({color:"ghost",size:"icon",className:"-me-2 md:hidden"})),children:l?(0,x.jsx)(c.X,{}):(0,x.jsx)(c.v2,{})})]})}function T(e){let{setCollapsed:t}=(0,m.A)();return(0,x.jsx)("button",{type:"button","aria-label":"Collapse Sidebar",...e,className:(0,i.m6)((0,b.d)({color:"ghost",size:"icon"}),e.className),onClick:()=>{t(e=>!e)},children:(0,x.jsx)(c.aq,{})})}function E(e){let{items:t,...a}=e,[n,r]=(0,u.useState)(!1),s=(0,h.usePathname)();return(0,k.p)(s,()=>{r(!1)}),(0,x.jsxs)(d.J2,{open:n,onOpenChange:r,children:[(0,x.jsx)(d.xo,{...a}),(0,x.jsx)(d.yk,{className:"flex flex-col p-1",children:t})]})}},9512:(e,t,a)=>{a.d(t,{F:()=>c,f:()=>i});var n=a(2265),r=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=n.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(o))?e:d},i=e=>n.useContext(o)?e.children:n.createElement(u,{...e}),m=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:l=!0,enableColorScheme:d=!0,storageKey:c="theme",themes:i=m,defaultTheme:u=l?"system":"light",attribute:g="data-theme",value:v,children:b,nonce:y}=e,[j,N]=n.useState(()=>h(c,u)),[w,k]=n.useState(()=>h(c)),C=v?Object.values(v):i,S=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=p());let n=v?v[t]:t,s=a?x():null,o=document.documentElement;if("class"===g?(o.classList.remove(...C),n&&o.classList.add(n)):n?o.setAttribute(g,n):o.removeAttribute(g),d){let e=r.includes(u)?u:null,a=r.includes(t)?t:e;o.style.colorScheme=a}null==s||s()},[]),T=n.useCallback(e=>{let t="function"==typeof e?e(e):e;N(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),E=n.useCallback(e=>{k(p(e)),"system"===j&&l&&!t&&S("system")},[j,t]);n.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),n.useEffect(()=>{let e=e=>{e.key===c&&T(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),n.useEffect(()=>{S(null!=t?t:j)},[t,j]);let z=n.useMemo(()=>({theme:j,setTheme:T,forcedTheme:t,resolvedTheme:"system"===j?w:j,themes:l?[...i,"system"]:i,systemTheme:l?w:void 0}),[j,T,t,w,l,i]);return n.createElement(o.Provider,{value:z},n.createElement(f,{forcedTheme:t,disableTransitionOnChange:a,enableSystem:l,enableColorScheme:d,storageKey:c,themes:i,defaultTheme:u,attribute:g,value:v,children:b,attrs:C,nonce:y}),b)},f=n.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:l,enableSystem:o,enableColorScheme:d,defaultTheme:c,value:i,attrs:m,nonce:u}=e,f="system"===c,h="class"===l?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),x=d?(r.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=i?i[e]:e,s=t?e+"|| ''":"'".concat(n,"'"),o="";return d&&a&&!t&&r.includes(e)&&(o+="d.style.colorScheme = '".concat(e,"';")),"class"===l?t||n?o+="c.add(".concat(s,")"):o+="null":n&&(o+="d[s](n,".concat(s,")")),o},g=t?"!function(){".concat(h).concat(p(t),"}()"):o?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(a,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(s,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(i?"var x=".concat(JSON.stringify(i),";"):"").concat(p(i?"x[e]":"e",!0),"}").concat(f?"":"else{"+p(c,!1,!1)+"}").concat(x,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(a,"');if(e){").concat(i?"var x=".concat(JSON.stringify(i),";"):"").concat(p(i?"x[e]":"e",!0),"}else{").concat(p(c,!1,!1),";}").concat(x,"}catch(t){}}();");return n.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),h=(e,t)=>{let a;if(!l){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},x=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}}]);