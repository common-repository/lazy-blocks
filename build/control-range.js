(()=>{var e={1991:(e,t)=>{var n;!function(){"use strict";var r=function(){function e(){}function t(e,t){for(var n=t.length,r=0;r<n;++r)o(e,t[r])}e.prototype=Object.create(null);var n={}.hasOwnProperty,r=/\s+/;function o(e,o){if(o){var l=typeof o;"string"===l?function(e,t){for(var n=t.split(r),o=n.length,l=0;l<o;++l)e[n[l]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===l?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var r in t)n.call(t,r)&&(e[r]=!!t[r]);else e[t.toString()]=!0}(e,o):"number"===l&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var l=new e;t(l,r);var a=[];for(var c in l)l[c]&&a.push(c);return a.join(" ")}}();e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.i18n,t=window.wp.hooks,r=window.wp.components;var o=n(1991),l=n.n(o),a=["label","help","className","children"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e){var t=e.label,n=e.help,r=e.className,o=e.children,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a);return wp.element.createElement("div",c({},i,{className:l()("lazyblocks-component-base-control",r)}),t?wp.element.createElement("div",{className:"lazyblocks-component-base-control__label"},t):null,o,n?wp.element.createElement("div",{className:"lazyblocks-component-base-control__help"},n):null)}var u=(window.lazyblocksConstructorData||window.lazyblocksGutenberg).controls,s=void 0===u?{}:u;function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var b=["className"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.className,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,b),a=(t=e.data.type)&&s[t]?s[t]:!!s.undefined&&s.undefined,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({label:!!a.restrictions.label_settings&&e.data.label,help:!!a.restrictions.help_settings&&e.data.help,className:l()("lazyblocks-control lazyblocks-control-".concat(e.data.type),r),"data-lazyblocks-control-name":e.data.name},o);return c}(0,t.addFilter)("lzb.editor.control.range.render","lzb.editor",(function(e,t){return wp.element.createElement(i,y(t,{label:!1}),wp.element.createElement(r.RangeControl,{label:t.data.label,min:""===t.data.min?-1/0:parseFloat(t.data.min),max:""===t.data.max?1/0:parseFloat(t.data.max),step:""===t.data.step?1:parseFloat(t.data.step),value:t.getValue(),onChange:function(e){t.onChange(parseFloat(e))}}))})),(0,t.addFilter)("lzb.constructor.control.range.settings","lzb.constructor",(function(t,n){var o=n.updateData,l=n.data;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(r.PanelBody,null,wp.element.createElement(r.TextControl,{label:(0,e.__)("Minimum Value","lazy-blocks"),type:"number",step:l.step,value:l.min,onChange:function(e){return o({min:e})}})),wp.element.createElement(r.PanelBody,null,wp.element.createElement(r.TextControl,{label:(0,e.__)("Maximum Value","lazy-blocks"),type:"number",step:l.step,value:l.max,onChange:function(e){return o({max:e})}})),wp.element.createElement(r.PanelBody,null,wp.element.createElement(r.TextControl,{label:(0,e.__)("Step Size","lazy-blocks"),type:"number",value:l.step,onChange:function(e){return o({step:e})}})))}))})()})();