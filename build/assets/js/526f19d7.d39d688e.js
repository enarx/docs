"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8557],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="TEE",l={unversionedId:"Start/TEE",id:"Start/TEE",isDocsHomePage:!1,title:"TEE",description:"Trusted Execution Environments (TEEs) allow organizations to run applications within a set of memory pages that are encrypted with a secret key by the host CPU in such a way that these pages are not accessible to the operating system or any other software, even running at the highest privilege level.",source:"@site/docs/Start/TEE.md",sourceDirName:"Start",slug:"/Start/TEE",permalink:"/docs/Start/TEE",editUrl:"https://github.com/enarx/docs/blob/main/docs/Start/TEE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Start/Introduction"},next:{title:"Enarx",permalink:"/docs/Start/Enarx"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tee"},"TEE"),(0,a.kt)("p",null,"Trusted Execution Environments (TEEs) allow organizations to run applications within a set of memory pages that are encrypted with a secret key by the host CPU in such a way that these pages are not accessible to the operating system or any other software, even running at the highest privilege level."),(0,a.kt)("p",null,"There are currently two leading models of TEEs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Process-based: current implementations of the process-based approach include Intel\u2019s SGX (Software Guard eXtensions)."),(0,a.kt)("li",{parentName:"ul"},"VM-based: current implementations include AMD\u2019s SEV (Secure Encrypted Virtualization).")),(0,a.kt)("p",null,"Applications that need to run in a TEE must be developed specifically for each platform, and they differ significantly depending if it\u2019s a process-based or VM-based TEE model. Additionally, they must implement something called attestation, which is a validation process for the TEE to prove that it\u2019s genuine before it can be trusted by the application. Rewriting the application or the custom VMM that runs it, as well as the attestation, for each hardware platform is extremely complex and time-consuming."),(0,a.kt)("p",null,"In the next section, we will introduce Enarx, an open source framework for running applications in TEEs that addresses many of the issues raised. We\u2019ll give a simplified overview of the component architecture of Enarx (and how it allows for support for multiple hardware platforms) and the process of creating and deploying applications to TEE instances using Enarx."))}f.isMDXComponent=!0}}]);