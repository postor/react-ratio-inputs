_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+H4i":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;e.default=o},"1T3z":function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};e.__esModule=!0;var o=n("q1tI"),u=n("q1tI").forwardRef((function(t,e){var n=t.style,u=t.items,i=t.labels,a=t.controls;return o.createElement("div",{ref:e,style:r({position:"relative",userSelect:"none"},n),onSelect:function(){return!1}},o.createElement("div",{style:{position:"relative",height:32}},u),a,o.createElement("div",null,i))}));e.default=u},"9+Sh":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isDeepEqual=e.off=e.on=e.isClient=void 0;var r=n("i0/C").__importDefault(n("nkPT"));e.isClient="object"===typeof window,e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.removeEventListener.apply(t,e)},e.isDeepEqual=r.default},CFVE:function(t,e,n){"use strict";e.__esModule=!0;var r=n("q1tI"),o=n("q1tI");function u(t){return t.touches&&t.touches.length?t.touches[0].pageX:t.pageX}e.default=function(t){var e=t.offset,n=t.onChange,i=t.goUp,a=t.meta,c=o.useState(!1),f=c[0],l=c[1],s=o.useState(-1),d=s[0],v=s[1],p=o.useRef(),h=o.useRef(e);return o.useEffect((function(){h.current=e}),[e]),o.useEffect((function(){return function(t,e,n,r){var o=!1,i=0,a=0,c=0,f=function(n){n.target===t.current&&(o=!0,r(!0),i=u(n),a=e.current,c=a)},l=function(t){if(o){var e=u(t)-i;e&&n(c=e+a,!1)}},s=function(){o&&(o=!1,r(!1),c!==a&&n(c,!0))};return document.addEventListener("mousedown",f),document.addEventListener("mousemove",l),document.addEventListener("mouseup",s),document.addEventListener("touchstart",f),document.addEventListener("touchmove",l),document.addEventListener("touchcancle",s),document.addEventListener("touchend",s),function(){document.removeEventListener("mousedown",f),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",s),document.removeEventListener("touchstart",f),document.removeEventListener("touchmove",l),document.removeEventListener("touchcancle",s)}}(p,h,(function(t,e){var r=a.minEx,o=a.max,u=t<r?r:t>o?o:t;if(e)return v(-1),n(u,!0);v(u),n(u,!1)}),l)}),[a]),r.createElement("div",{draggable:"false",onDragStart:function(){return!1},style:{position:"absolute",width:0,height:0,borderBottom:"10px solid "+(f?"red":"gray"),borderLeft:"7px solid transparent",borderRight:"7px solid transparent",top:0,left:d<0?e-7:d-7,transform:i?"translate(0,-42px) rotate(180deg)":""},ref:p})}},DZFV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.shuffle=void 0;var r=n("O7A5");function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=function(t){return function(e){for(var n=e.slice(0),r=e.length,o=0,u=new Array(r);r;){var i=t(r);u[o++]=n[i],n[i]=n[--r]}return u}},c=function(){return Math.random()*Math.pow(2,32)|0},f=function(t){return function(e){return t()/Math.pow(2,32)*e|0}},l=function(t){var e=(0,r.newRandGen)(t);return function(t){var n=u((0,r.randRange)(0,t,e),2),o=n[0],i=n[1];return e=i,o}},s=function(t){return("function"===typeof t?f:l)(t)},d=function(t,e){if("object"===o(t)){var n=u(t,2),i=n[0],f=n[1];return function(t,e){var n=(0,r.newRandGen)(e);return[a((function(t){var e=u((0,r.randRange)(0,t,n),2),o=e[0],i=e[1];return n=i,o}))(t),(0,r.randNext)(n)[0]]}(i,void 0===f?c():f)}var l=s(t),d=a(l);return void 0===e?d:d(e)},v=d(c());e.shuffle=v;var p=d;e.default=p},IDxE:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var u=arguments[e],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r};e.__esModule=!0;var u=n("q1tI"),i=n("CFVE"),a=u.memo((function(t){var e=t.max,n=t.min,a=t.ratios,c=t.width,f=t.toFixed,l=t.onChange;if(!c)return null;var s=function(t,e,n,r){for(var o=new Array(n.length-1),u=0,i=0,a=0;a<o.length;a++){var c=n[a].value,f=t*c/e;o[a]={min:u,max:t,minValue:i,maxValue:e,offset:u+f,minEx:u,minValueEx:i},u+=f,i+=c,o[a-1]&&(o[a-1].max=u,o[a-1].maxValue=i),a===o.length-1&&void 0!==r&&(o[a].minValueEx=r,o[a].minEx=r/e*t)}return o}(c,e,a,n),d=e;return u.createElement("div",{style:{position:"relative",height:10}},s.map((function(t,e){var n=t.offset;return 0===a[e].value&&0===a[e+1].value?null:u.createElement(i.default,{key:e,offset:n,goUp:0!==e&&0===a[e].value,onChange:function(n,u){var i=t.min,s=t.max,v=t.minValue,p=t.maxValue,h=o(a),y=a[e].value+a[e+1].value;return h[e]=r(r({},a[e]),n<i?{value:v}:n>s?{value:p}:{value:Number.parseFloat(((n-i)/c*d).toFixed(f||0))}),h[e+1]=r(r({},a[e+1]),{value:y-h[e].value}),l(h,u)},meta:t})})))}),(function(t,e){return["ratios","width"].every((function(n){return t[n]===e[n]}))}));e.default=a},JlcV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("i0/C"),o=n("q1tI"),u=r.__importDefault(n("+H4i")),i=n("9+Sh"),a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.default=i.isClient&&window.ResizeObserver?function(){var t=o.useState(null),e=t[0],n=t[1],r=o.useState(a),i=r[0],c=r[1],f=o.useMemo((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,r=e.y,o=e.width,u=e.height,i=e.top,a=e.left,f=e.bottom,l=e.right;c({x:n,y:r,width:o,height:u,top:i,left:a,bottom:f,right:l})}}))}),[]);return u.default((function(){if(e)return f.observe(e),function(){f.disconnect()}}),[e]),[n,i]}:function(){return[function(){},a]}},O7A5:function(t,e,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var u=arguments[e],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r};Object.defineProperty(e,"__esModule",{value:!0});var o=parseInt(r(Array(1)).map((function(){return"1"})).reduce((function(t,e){return t+e})).concat(r(Array(31)).map((function(){return"0"})).reduce((function(t,e){return t+e})),""),2),u=parseInt(r(Array(1)).map((function(){return"0"})).reduce((function(t,e){return t+e})).concat(r(Array(31)).map((function(){return"1"})).reduce((function(t,e){return t+e})),""),2),i=function(t,e){var n=65535&t,r=65535&e;return((t>>>16)*r+n*(e>>>16)<<16)+n*r>>>0};e.newRandGen=function(t){for(var e={i:0,x:[t>>>0]},n=1;n<624;n++)e.x[n]=i(1812433253,e.x[n-1]^e.x[n-1]>>>30)+n;return e},e.randNext=function(t){var e=(t.i+1)%624,n=t.x[t.i]&o|t.x[e]&u,i={i:e,x:r(t.x,[t.x[(t.i+397)%624]^n>>>1^(0==(1&n)?0:2567483615)])},a=i.x[i.i];return a^=a>>>11,a^=a<<7&2636928640,a^=a<<15&4022730752,[(a^=a>>>18)>>>0,i]},e.randRange=function(t,n,r){var o=n-t;if(!(0<o&&o<4294967296)){var u=e.randNext(r);return[u[0]+t,u[1]]}if((o&1+~o)==o){var i=e.randNext(r);return[(o-1&i[0])+t,i[1]]}for(var a=e.randNext(r),c=a[0],f=a[1];o>4294967296-(c-(c%=o));){var l=e.randNext(f);c=l[0],f=l[1]}return[c+t,f]}},Q6or:function(t,e,n){"use strict";e.__esModule=!0;var r=n("cw9Q");e.default=r.default},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RNiq:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var o=n("nKUr"),u=n("q1tI"),i=n("Q6or"),a=n.n(i);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(t){var e=t.children,n=t.title;return Object(o.jsxs)("details",{children:[Object(o.jsx)("summary",{children:n}),Object(o.jsx)("div",{style:{padding:"10px 5px"},children:e})]})},s=[{name:"\u81ea\u5df1",value:98},{name:"\u6d77\u76d72",value:0},{name:"\u6d77\u76d73",value:1},{name:"\u6d77\u76d74",value:0},{name:"\u6d77\u76d75",value:1}];e.default=function(){var t=Object(u.useState)(s),e=t[0],n=t[1],r=Object(u.useState)(s),i=r[0],c=r[1],d=Object(u.useState)(s.map((function(t){return f(f({},t),{},{props:{style:{fontWeight:"bold"}}})}))),v=d[0],p=d[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"react-ratio-inputs"}),Object(o.jsx)("p",{children:"\u793a\u4f8b | demos"}),Object(o.jsx)(l,{title:"\u4ec5\u663e\u793a | show only",children:Object(o.jsx)(a.a,{ratios:e})}),Object(o.jsx)(l,{title:"\u66f4\u65b0 | update",children:Object(o.jsx)(a.a,{ratios:e,onChange:function(t){return n(t)}})}),Object(o.jsx)(l,{title:"\u6700\u5927\u6700\u5c0f\u503c | max and/or min",children:Object(o.jsx)(a.a,{ratios:i,onChange:function(t){return c(t)},min:80,max:120})}),Object(o.jsx)(l,{title:"\u6587\u672c\u989c\u8272 | texts and colors",children:Object(o.jsx)(a.a,{ratios:v,onChange:function(t){return p(t)},toText:function(t){var e=t.name,n=t.value;return"".concat(e,":").concat(n," ")},toTitle:function(t){var e=t.name,n=t.value;return"".concat(e," got ").concat(n," coins")},hue2color:function(t){return"hsl(".concat(t,", 80%, 90%)")},hue2backgroundColor:function(t){return"hsl(".concat((t+180)%360,", 30%, 50%)")}})})]})}},V6so:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};e.__esModule=!0,e.DefaultItem=void 0;var o=n("q1tI");e.DefaultItem=function(t){var e=t.offset,n=t.length,u=t.style,i=void 0===u?{}:u,a=t.colorScheme,c=void 0===a?{}:a,f=t.text,l=t.title,s=c.backgroundColor,d=void 0===s?"transparent":s,v=c.color,p=void 0===v?"#000":v;return o.createElement("div",{style:r({position:"absolute",bottom:0,left:e,width:n,backgroundColor:d,lineHeight:"32px",color:p,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden"},i),title:l},f)}},cw9Q:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var u=arguments[e],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r};e.__esModule=!0;var u=n("q1tI"),i=n("q1tI"),a=n("1T3z"),c=n("IDxE"),f=n("V6so"),l=n("DZFV").default,s=n("JlcV").default;e.default=function(t){var e=t.ratios,n=t.max,d=t.min,v=t.onChange,p=t.propForUnused,h=t.ControlsComponent,y=void 0===h?c.default:h,m=t.toFixed,b=void 0===m?0:m,g=t.ItemComponent,_=void 0===g?f.DefaultItem:g,w=t.ContainerComponent,O=void 0===w?a.default:w,j=t.nameForUnused,x=void 0===j?"\u672a\u4f7f\u7528":j,E=t.toText,S=void 0===E?function(t){return t.name+"("+t.value+")"}:E,P=t.toTitle,I=void 0===P?function(t){return t.name+"("+t.value+")"}:P,A=t.hue2color,C=void 0===A?function(t){return"hsl("+t+", 20%, 10%)"}:A,R=t.hue2backgroundColor,D=void 0===R?function(t){return"hsl("+t+", 80%, 90%)"}:R,k=s(),M=k[0],T=k[1].width,L=i.useState(0),V=L[0],q=L[1],N=i.useState(function(t){for(var e=new Array(t),n=0,r=Math.floor(360/t)||1,o=0;o<t;o++)n=(n+r)%360,e[o]={color:C(n),backgroundColor:D(n)};return l(1)(e)}(e.length+1))[0],F=i.useState(!1),G=F[0],U=F[1],Q=i.useState([]),z=Q[0],J=Q[1],X=i.useState([]),H=X[0],$=X[1];i.useEffect((function(){var t=e.reduce((function(t,e){return t+e.value}),0),r=n||t;if(r<t)throw"max less than sum of ratios";if(q(r),void 0!==d&&d>=r)throw"min larger than max or sum";U(void 0!==d&&d>0||r>t)}),[]);var B=i.useRef(T);i.useEffect((function(){B.current=T}),[T]),i.useEffect((function(){var t={name:x,value:V-e.reduce((function(t,e){return t+e.value}),0),props:p},n=G?o(e,[t]):e;$(n)}),[e,G]);var Z=0,K=z.length?z:H;return u.createElement(O,{ref:M,items:K.map((function(t,e){var n=t.value,o=t.name,i=t.props;if(!T)return null;var a=Z,c=T*n/V;return Z+=c,u.createElement(_,r({},i,{name:o,key:e,value:n,text:S(t),title:I(t),offset:a,length:c,colorScheme:N[e]}))})),controls:v&&T?u.createElement(y,{width:T,max:V,min:d,toFixed:b,ratios:H,onChange:function(t,e){if(!e)return J(t);J([]),G&&t.pop(),v(t)}}):null})}},"i0/C":function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return u})),n.d(e,"__rest",(function(){return i})),n.d(e,"__decorate",(function(){return a})),n.d(e,"__param",(function(){return c})),n.d(e,"__metadata",(function(){return f})),n.d(e,"__awaiter",(function(){return l})),n.d(e,"__generator",(function(){return s})),n.d(e,"__createBinding",(function(){return d})),n.d(e,"__exportStar",(function(){return v})),n.d(e,"__values",(function(){return p})),n.d(e,"__read",(function(){return h})),n.d(e,"__spread",(function(){return y})),n.d(e,"__spreadArrays",(function(){return m})),n.d(e,"__await",(function(){return b})),n.d(e,"__asyncGenerator",(function(){return g})),n.d(e,"__asyncDelegator",(function(){return _})),n.d(e,"__asyncValues",(function(){return w})),n.d(e,"__makeTemplateObject",(function(){return O})),n.d(e,"__importStar",(function(){return x})),n.d(e,"__importDefault",(function(){return E})),n.d(e,"__classPrivateFieldGet",(function(){return S})),n.d(e,"__classPrivateFieldSet",(function(){return P}));var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var u=function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function a(t,e,n,r){var o,u=arguments.length,i=u<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(u<3?o(i):u>3?o(e,n,i):o(e,n))||i);return u>3&&i&&Object.defineProperty(e,n,i),i}function c(t,e){return function(n,r){e(n,r,t)}}function f(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))((function(o,u){function i(t){try{c(r.next(t))}catch(e){u(e)}}function a(t){try{c(r.throw(t))}catch(e){u(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(a){u=[6,a],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function v(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||d(e,t,n)}function p(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,u=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}function m(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var u=arguments[e],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){u.push([t,e,n,r])>1||a(t,e)}))})}function a(t,e){try{(n=o[t](e)).value instanceof b?Promise.resolve(n.value.v).then(c,f):l(u[0][2],n)}catch(r){l(u[0][3],r)}var n}function c(t){a("next",t)}function f(t){a("throw",t)}function l(t,e){t(e),u.shift(),u.length&&a(u[0][0],u[0][1])}}function _(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:b(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function w(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function O(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var j=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function x(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&d(e,t,n);return j(e,t),e}function E(t){return t&&t.__esModule?t:{default:t}}function S(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function P(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},nkPT:function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,u;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!==o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(u=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,u[o]))return!1;for(o=r;0!==o--;){var i=u[o];if(("_owner"!==i||!e.$$typeof)&&!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);