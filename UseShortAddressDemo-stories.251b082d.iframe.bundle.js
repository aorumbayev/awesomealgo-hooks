/*! For license information please see UseShortAddressDemo-stories.251b082d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkawesomealgo_hooks=self.webpackChunkawesomealgo_hooks||[]).push([[708],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/UseShortAddressDemo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomAddress:()=>CustomAddress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UseShortAddressDemo_stories});const src_useShortAddress=(address,width=6)=>`${address.slice(0,width)}...${address.slice(-width)}`;__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UseShortAddressDemo=({address="Set your address to check the short address"})=>{const shortAddress=src_useShortAddress(address);return(0,jsx_runtime.jsxs)("div",{style:{color:"white"},children:[(0,jsx_runtime.jsxs)("div",{children:["shortened address: ",shortAddress," for width=6"]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("div",{children:["original address: ",shortAddress]})]})};UseShortAddressDemo.displayName="UseShortAddressDemo";try{UseShortAddressDemo.displayName="UseShortAddressDemo",UseShortAddressDemo.__docgenInfo={description:"",displayName:"UseShortAddressDemo",props:{address:{defaultValue:{value:"Set your address to check the short address"},description:"",name:"address",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/UseShortAddressDemo.tsx#UseShortAddressDemo"]={docgenInfo:UseShortAddressDemo.__docgenInfo,name:"UseShortAddressDemo",path:"stories/UseShortAddressDemo.tsx#UseShortAddressDemo"})}catch(__react_docgen_typescript_loader_error){}const UseShortAddressDemo_stories={title:"Example/UseShortAddressDemo",component:UseShortAddressDemo,tags:["autodocs"]},CustomAddress={args:{address:"2ZDXMASNGYLUX6FFSO5PH3BK3DRVOSIR64OL5IH73YZDNZHADORITA3S6E"}},__namedExportsOrder=["CustomAddress"];CustomAddress.parameters={...CustomAddress.parameters,docs:{...CustomAddress.parameters?.docs,source:{originalSource:"{\n  args: {\n    address: '2ZDXMASNGYLUX6FFSO5PH3BK3DRVOSIR64OL5IH73YZDNZHADORITA3S6E'\n  }\n}",...CustomAddress.parameters?.docs?.source}}}}}]);