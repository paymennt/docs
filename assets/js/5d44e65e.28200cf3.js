"use strict";(self.webpackChunkpmnnt_docs=self.webpackChunkpmnnt_docs||[]).push([[1156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},5945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"drop-in frames integration",sidebar_label:"drop-in frames"},s=void 0,u={unversionedId:"payment/frames/index",id:"payment/frames/index",title:"drop-in frames integration",description:"make getting paid faster and easier than ever! paymennt APIs provide an easy way to let",source:"@site/docs/1-payment/1-frames/index.mdx",sourceDirName:"1-payment/1-frames",slug:"/payment/frames/",permalink:"/docs/payment/frames/",draft:!1,tags:[],version:"current",frontMatter:{title:"drop-in frames integration",sidebar_label:"drop-in frames"},sidebar:"docs",previous:{title:"accept payments",permalink:"/docs/category/accept-payments"},next:{title:"hosted checkout",permalink:"/docs/payment/hosted/"}},p={},c=[{value:"Integration flow",id:"integration-flow",level:2},{value:"Integration details",id:"integration-details",level:2},{value:"Full example",id:"full-example",level:2},{value:"Test the Integration",id:"test-the-integration",level:2}],m={toc:c},d="wrapper";function y(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"make getting paid faster and easier than ever! ",(0,r.kt)("strong",{parentName:"p"},"paymennt")," APIs provide an easy way to let\nyour customers pay for their orders easily and securely."),(0,r.kt)("p",null,"frames is an iframe solution that handles payment information. Your customer inputs their\ncard details directly into our iframes, then we send you a token representing of the card details,\nso you can request a payment."),(0,r.kt)("h2",{id:"integration-flow"},"Integration flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You embed the Frames payment form in your website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the customer checkouts, they can enter payment details directly on the checkout page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We process the customer's sensitive information and return a token representing those details.\nThis process is called tokenization.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your site backend system gathers the ",(0,r.kt)("strong",{parentName:"p"},"order details")," and the received ",(0,r.kt)("strong",{parentName:"p"}," payment token")," in a request\nto make the ",(0,r.kt)("a",{parentName:"p",href:"/api#tag/Payment/operation/create-payment"},"Create token payment")," API call to ",(0,r.kt)("strong",{parentName:"p"},"paymennt"),"\nand obtains the payment response with status and payment ID. Depending on the status-"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CAPTURED"),": the payment has been successfully processed (without 3D-Secure redirect).\nYou should update your order status on your backend system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"REDIRECT"),": the payment needs 3D-Secure to be processed, for this the customer should be\nredirected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," present in the response of ",(0,r.kt)("a",{parentName:"p",href:"/api#tag/Payment/operation/create-payment"},"Create token payment"),"\nAPI call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"any other status"),": they imply that the payment could not be processed. You may ask the customer\nto checkout again.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"CAPTURED")," status, you should update order status on your backend system and lead the customer\nto desired confirmation page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"REDIRECT")," status, once the customer has been redirected back to your website, make the\n",(0,r.kt)("a",{parentName:"p",href:"/api/#operation/get-payment"},"Get payment")," API call using the payment ID received in step 4,\nto retrieve the status. If status is ",(0,r.kt)("strong",{parentName:"p"},"CAPTURED")," the payment has succeeded, you should confirm order status on your backend system,\nfor other statuses the payment has failed and you may follow checkout flow again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For any other status, the customer is finally redirected back to your website using the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"returnUrl")," specified in the ",(0,r.kt)("a",{parentName:"p",href:"/api/#operation/create-token-payment"},"Create token payment")," API call."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Website integration flow",src:n(1024).Z,width:"1101",height:"1051"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure to check the ",(0,r.kt)("a",{parentName:"li",href:"/docs/golive/checklist"},"Website Checklist")," before going live.")),(0,r.kt)("p",null,"That's it! You're ready to start testing."),(0,r.kt)("h2",{id:"integration-details"},"Integration details"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import PaymenntJS JavaScript file into the payment page")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://pay.paymennt.com/static/js/paymennt-frames.js"><\/script>\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In your page JavaScript initialize PaymenntJS with your public key obtained from ",(0,r.kt)("strong",{parentName:"li"},"paymennt"),",")),(0,r.kt)("p",null,"Sample code :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'PaymenntJS.init({\n  publicKey: "{PAYMENNT_PUBLIC_KEY}",\n  selector: "#paymennt-card-frame"\n  mode: PaymenntJS.modes.LIVE,\n  onTokenized: function (data) {\n    // send data.token to server\n  },\n  onTokenizationFailed: function (data) {\n    // show data.error message\n  },\n  onValidationUpdate: function (data) {\n    if (data.valid) {\n      // enable pay button;\n    } else {\n      // disable pay button;\n    }\n  },\n});\n')),(0,r.kt)("p",null,"3- In your page, add an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element and pass its selector to ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymenntJS.init()")," method\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="paymennt-card-frame" class="card-frame"></div>\n')),(0,r.kt)("h2",{id:"full-example"},"Full example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},'var payButton = document.getElementById("pay-button");\nvar errorMessage = document.querySelector(".error-message");\nvar infoMessage = document.querySelector(".info-message");\n\npayButton.disabled = true;\n\nPaymenntJS.init({\n  publicKey: "pk_test_a941633441f48b73b9b9e1822227829a",\n  mode: PaymenntJS.modes.TEST,\n  onTokenized: function (data) {\n    infoMessage.innerText = data.token;\n  },\n  onTokenizationFailed: function (data) {\n    errorMessage.innerText = data.error;\n  },\n\n  onValidationUpdate: function (data) {\n    payButton.disabled = !data.valid;\n    if (!data.valid) {\n      var message = null;\n      for (var i = 0; i < data.validationErrors.length; ++i) {\n        var fieldValidation = data.validationErrors[i];\n        if (!message || fieldValidation.field === data.lastActiveField) {\n          message = fieldValidation.message;\n        }\n      }\n      if (!message) {\n        message = data.error ? data.error : "Invalid card details";\n      }\n      errorMessage.innerText = message;\n    } else {\n      errorMessage.innerText = "";\n    }\n  },\n});\n\npayButton.addEventListener("click", function (event) {\n  event.preventDefault();\n  PaymenntJS.submitPayment();\n});\n'))),(0,r.kt)(i.Z,{value:"html",label:"Html",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Paymennt.com Frames</title>\n    <link rel="stylesheet" href="style.css" />\n  </head>\n\n  <body>\n    <div id="paymennt-frame" class="card-frame"></div>\n    <p class="info-message"></p>\n    <p class="error-message"></p>\n\n    <button id="pay-button" type="submit">Pay</button>\n\n    <script src="https://pay.paymennt.com/static/js/paymennt-frames.js"><\/script>\n    <script src="app.js"><\/script>\n  </body>\n</html>\n'))),(0,r.kt)(i.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},"body {\n  text-align: center;\n}\n\n#paymennt-frame {\n  max-width: 370px;\n  margin: 0 auto;\n}\n\n#pay-button {\n  border: none;\n  border-radius: 3px;\n  color: #fff;\n  font-weight: 500;\n  height: 40px;\n  width: 120px;\n  background-color: #13395e;\n  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.4);\n}\n\n#pay-button:active {\n  background-color: #0b2a49;\n  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.4);\n}\n\n#pay-button:hover {\n  background-color: #15406b;\n  box-shadow: 0 2px 5px 0 rgba(19, 57, 94, 0.4);\n}\n\n#pay-button:disabled {\n  background-color: #697887;\n  box-shadow: none;\n}\n\n#pay-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.card-frame {\n  border: solid 1px #13395e;\n  border-radius: 3px;\n  width: 100%;\n  padding: 5px;\n  margin-bottom: 8px;\n  height: 100px;\n  box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.2);\n}\n\n.error-message {\n  color: red;\n  font-weight: 600;\n}\n\n.info-message {\n  color: green;\n  font-weight: 600;\n}\n")))),(0,r.kt)("h2",{id:"test-the-integration"},"Test the Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to your website, and add products to your cart."),(0,r.kt)("li",{parentName:"ol"},"Go to your cart then proceed to the checkout, Enter the required customer and billing details ... ."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"paymennt.com payment method"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the following card details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Number: ",(0,r.kt)("inlineCode",{parentName:"li"},"4012 8888 8888 1881")," (to demonstrate payment without 3D-Secure)"),(0,r.kt)("li",{parentName:"ul"},"Number: ",(0,r.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242")," (to demonstrate payment requiring 3D-Secure redirect)"),(0,r.kt)("li",{parentName:"ul"},"Expiry date: ",(0,r.kt)("inlineCode",{parentName:"li"},"12/25")),(0,r.kt)("li",{parentName:"ul"},"CVV: ",(0,r.kt)("inlineCode",{parentName:"li"},"100")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"TEST USER")))),(0,r.kt)("li",{parentName:"ol"},"Check the status of the payment on your backend administration panel.")))}y.isMDXComponent=!0},1024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web-payment-frames-flow-570c1a6c065d05747459cba11996b779.png"}}]);