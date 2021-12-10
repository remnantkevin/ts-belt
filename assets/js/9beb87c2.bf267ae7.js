"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=l,v=m["".concat(d,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>c,toc:()=>p,default:()=>m});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={id:"changelog",title:"Changelog"},d=void 0,c={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"v3.2.0",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/ts-belt/docs/changelog",editUrl:"https://github.com/mobily/ts-belt/edit/master/docs/docs/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog"},sidebar:"sidebar",previous:{title:"Usage",permalink:"/ts-belt/docs/getting-started/usage"}},p=[{value:"<code>v3.2.0</code>",id:"v320",children:[],level:3},{value:"<code>v3.1.1</code>",id:"v311",children:[],level:3},{value:"<code>v3.1.0</code>",id:"v310",children:[],level:3},{value:"<code>v3.0.1</code>",id:"v301",children:[],level:3},{value:"<code>v3.0.0.</code>",id:"v300",children:[],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"v320"},(0,a.kt)("inlineCode",{parentName:"h3"},"v3.2.0")),(0,a.kt)("p",null,"This version provides much better support for the point-free style. For instance, the following should not throw an error in TypeScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"A.reduce([1, 2, 3], 0, N.add)\nA.reduce(['hello', 'world'], '', S.concat)\nA.filter(['hello', 'world'], S.startsWith('h'))\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"O.tap")),(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"R.tap")),(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"A.tap"))),(0,a.kt)("h3",{id:"v311"},(0,a.kt)("inlineCode",{parentName:"h3"},"v3.1.1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed arguments order of ",(0,a.kt)("inlineCode",{parentName:"li"},"A.*WithIndex")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"(index, value)")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"D.*WithKey")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"(key, value)"),"  functions")),(0,a.kt)("h3",{id:"v310"},(0,a.kt)("inlineCode",{parentName:"h3"},"v3.1.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"S.head")," return type"),(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"S.trimEnd")),(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"S.trimStart")),(0,a.kt)("li",{parentName:"ul"},"\u2728 added ",(0,a.kt)("inlineCode",{parentName:"li"},"S.last"))),(0,a.kt)("h3",{id:"v301"},(0,a.kt)("inlineCode",{parentName:"h3"},"v3.0.1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"A.uniqBy")," implementation")),(0,a.kt)("h3",{id:"v300"},(0,a.kt)("inlineCode",{parentName:"h3"},"v3.0.0.")),(0,a.kt)("p",null,"Initial ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," implementation."))}m.isMDXComponent=!0}}]);