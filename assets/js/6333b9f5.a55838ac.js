"use strict";(self.webpackChunkpmnnt_docs=self.webpackChunkpmnnt_docs||[]).push([[6759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||c;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),c=r(2991),a=r(3438);r(3322);const i={title:"commerce"},l=void 0,s={unversionedId:"commerce/index",id:"commerce/index",title:"commerce",description:"Paymennt Commerce Tools provide you with a variety of ways to help you do business online. You can find everything you need to showcase your products online, process payments, and to make your online shop work for you.",source:"@site/community/4-commerce/index.mdx",sourceDirName:"4-commerce",slug:"/commerce/",permalink:"/guides/commerce/",draft:!1,tags:[],version:"current",frontMatter:{title:"commerce"},sidebar:"guides",previous:{title:"payment refunds",permalink:"/guides/payments/refunds"},next:{title:"product catalog",permalink:"/guides/commerce/catalog/"}},m={},u=[],p={toc:u},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paymennt Commerce Tools provide you with a variety of ways to help you do business online. You can find everything you need to showcase your products online, process payments, and to make your online shop work for you."),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),c=r(3438),a=r(9960),i=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},3322:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=function(e){let{children:t,url:r,title:o}=e;return n.createElement("div",{class:"row"},n.createElement("div",{class:"col col--10"},n.createElement("div",{className:"video__wrapper"},n.createElement("iframe",{src:"https://www.youtube.com/embed/"+r,title:o,frameborder:"0",allow:"autoplay; encrypted-media;",allowfullscreen:!0,className:"video"}))))}}}]);