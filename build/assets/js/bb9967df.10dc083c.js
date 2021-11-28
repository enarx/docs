"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6966],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},s="Onboarding",c={unversionedId:"Contributing/Onboarding",id:"Contributing/Onboarding",isDocsHomePage:!1,title:"Onboarding",description:"Here are a few resources to help you get started with contributing to Enarx (and to free and open source projects in general).",source:"@site/docs/Contributing/Onboarding.md",sourceDirName:"Contributing",slug:"/Contributing/Onboarding",permalink:"/docs/Contributing/Onboarding",editUrl:"https://github.com/enarx/docs/blob/main/docs/Contributing/Onboarding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Contributing/Introduction"},next:{title:"Code",permalink:"/docs/Contributing/Code"}},l=[{value:"Learn about contributing to open source",id:"learn-about-contributing-to-open-source",children:[],level:2},{value:"Learn how to use Markdown",id:"learn-how-to-use-markdown",children:[{value:"About wrapping text",id:"about-wrapping-text",children:[],level:4}],level:2},{value:"Create a Github account",id:"create-a-github-account",children:[],level:2},{value:"Understand how &quot;issues&quot; work",id:"understand-how-issues-work",children:[],level:2},{value:"Join the chat",id:"join-the-chat",children:[],level:2},{value:"Join meetings &amp; board review",id:"join-meetings--board-review",children:[],level:2},{value:"Anything else?",id:"anything-else",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onboarding"},"Onboarding"),(0,a.kt)("p",null,"Here are a few resources to help you get started with contributing to Enarx (and to free and open source projects in general)."),(0,a.kt)("p",null,'The idea here is to get you familiarised with the contribution process and the tools in a general sense, and used to the project itself which is rather complex, allowing you to be "waiting, but not idle" as you find where you want to contribute.'),(0,a.kt)("h2",{id:"learn-about-contributing-to-open-source"},"Learn about contributing to open source"),(0,a.kt)("p",null,"If you are new to contributing, ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.guide/how-to-contribute/"},"Opensource.com's guide on how to contribute")," is a good place to start."),(0,a.kt)("h2",{id:"learn-how-to-use-markdown"},"Learn how to use Markdown"),(0,a.kt)("p",null,"Enarx makes extensive use of Markdown as a way to write and format text (both code and documents). If you are unfamiliar with Markdown, please check more at ",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"mastering Markdown"),"."),(0,a.kt)("h4",{id:"about-wrapping-text"},"About wrapping text"),(0,a.kt)("p",null,'It is common practice to "wrap" text at a certain number of characters, that is, make each line no more than a certain number of characters. In the Enarx project, we wrap text at 80 characters.'),(0,a.kt)("p",null,"How to configure your text editor or ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Integrated_development_environment"},"IDE")," to to do so will vary. However, you can always use the following command to show a wrapped version of your text at 80 characters, provided you are using a UNIX-based system (Linux, BSD, macOS):",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"fold -w 80 -s my_text_file.txt")),(0,a.kt)("p",null,"To directly save that output to a new file:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"fold -w 80 -s my_text_file.txt > my_text_file_wrapped.txt")),(0,a.kt)("h2",{id:"create-a-github-account"},"Create a Github account"),(0,a.kt)("p",null,"To contribute to Enarx, you will need a Github account to be able to open issues (see below), ",(0,a.kt)("a",{parentName:"p",href:"Code"},"contribute code")," or help ",(0,a.kt)("a",{parentName:"p",href:"Docs"},"improve the documentation"),". You can create one ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,a.kt)("p",null,"Note that you do not need to use your personal information to create an account if you don't feel comfortable using your real name, for instance. Friendly reminder however that the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/enarx/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct")," still applies, of course."),(0,a.kt)("h2",{id:"understand-how-issues-work"},'Understand how "issues" work'),(0,a.kt)("p",null,'One of the Github functionalities we make heavy use of are "issues", which is a generic term to describe things we want to keep track of, bugs or improvement ideas.\nGithub has several explainers on issues:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://guides.github.com/features/issues/"},"Mastering issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/managing-your-work-on-github/about-issues"},"About issues"))),(0,a.kt)("p",null,"You can see the Enarx issues ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/issues"},"here")),(0,a.kt)("h2",{id:"join-the-chat"},"Join the chat"),(0,a.kt)("p",null,"Join the chat at ",(0,a.kt)("a",{parentName:"p",href:"https://chat.enarx.dev"},"chat.enarx.dev")," and come say hi, ask questions, or just read the conversation."),(0,a.kt)("h2",{id:"join-meetings--board-review"},"Join meetings & board review"),(0,a.kt)("p",null,"The full Enarx calendar is available as a ",(0,a.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/embed?src=leatqk15m1f34loatvatftkm48%40group.calendar.google.com&ctz=America%2FNew_York"},"Google Calendar"),"."),(0,a.kt)("p",null,"The meetings happen on ",(0,a.kt)("a",{parentName:"p",href:"https://meet.jit.si/EnarxDaily"},"Jitsi Meet"),". (You do not need any account to join.)"),(0,a.kt)("p",null,"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://enarx.dev/meetings"},"Meetings")," page for more information."),(0,a.kt)("h2",{id:"anything-else"},"Anything else?"),(0,a.kt)("p",null,"That's it! At this point, you should have everything you need to start contributing. If you feel anything is missing here, please let us know."))}d.isMDXComponent=!0}}]);