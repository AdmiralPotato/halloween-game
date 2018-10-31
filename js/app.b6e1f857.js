(function(e){function t(t){for(var n,r,s=t[0],i=t[1],l=t[2],d=0,v=[];d<s.length;d++)r=s[d],a[r]&&v.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,s=1;s<c.length;s++){var i=c[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0aeb":function(e,t,c){},"103f":function(e,t,c){},"105e":function(e,t,c){},2856:function(e,t,c){},"38c0":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("cadf"),c("551c"),c("097d");var n=c("2b0e"),a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{attrs:{id:"app"}},[c("GameThree"),"play"===e.mode?c("Controls"):e._e(),"levelSelect"===e.mode?c("LevelSelect"):e._e(),"levelWin"===e.mode?c("LevelWin"):e._e(),"characterSelect"===e.mode?c("CharacterSelect"):e._e()],1)},o=[],r=c("c93e"),s=(c("96cf"),c("3040")),i=c("2f62"),l=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"controls"},[c("div",{staticClass:"score-holder"},[c("score")],1),c("div",{staticClass:"menu-toggle"},[c("button",{staticClass:"control",attrs:{type:"button"},on:{mousedown:function(t){e.$store.dispatch("mode","levelSelect")},touchstart:function(t){e.$store.dispatch("mode","levelSelect")}}},[c("svg",{attrs:{viewBox:"0 0 32 32"}},[c("path",{attrs:{d:"M23.374,8.626H8.626 c-0.393,0-0.712,0.319-0.712,0.712v1.508c0,0.393,0.319,0.712,0.712,0.712h14.747c0.393,0,0.712-0.319,0.712-0.712V9.338 C24.086,8.945,23.767,8.626,23.374,8.626z M23.374,14.534H8.626c-0.393,0-0.712,0.319-0.712,0.712v1.508 c0,0.393,0.319,0.712,0.712,0.712h14.747c0.393,0,0.712-0.319,0.712-0.712v-1.508C24.086,14.853,23.767,14.534,23.374,14.534z M23.374,20.441H8.626c-0.393,0-0.712,0.319-0.712,0.712v1.508c0,0.393,0.319,0.712,0.712,0.712h14.747 c0.393,0,0.712-0.319,0.712-0.712v-1.508C24.086,20.76,23.767,20.441,23.374,20.441z"}})])])]),c("div",{staticClass:"arrows"},[c("div",{staticClass:"relative"},e._l(e.$options.buttons,function(t){return c("div",{key:t.action,staticClass:"control-spacer",class:t.direction},[c("button",{staticClass:"control",attrs:{type:"button"},on:{touchstart:function(c){c.preventDefault(),c.stopPropagation(),e.$store.dispatch("move",t.direction)},mousedown:function(c){e.$store.dispatch("move",t.direction)}}},[c("svg",{attrs:{viewBox:"0 0 32 32"}},[c("path",{attrs:{d:t.path}})])])])}))])])},u=[],d=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"score"},[c("div",[c("svg",{staticClass:"icon",attrs:{viewBox:"0 0 32 32"}},[c("g",{staticClass:"candy"},[c("path",{staticStyle:{fill:"#FEEB39"},attrs:{d:"M25.308,9.152c-0.04-0.38-0.08-0.759-0.12-1.139c0.073-0.596-0.1-1.094-0.476-1.579 c-0.573-0.74-1.071-1.539-1.606-2.321c0.015-0.008-0.035,0.002-0.057,0.031c-1.005,1.357-2.011,2.712-3.003,4.079 c-0.069,0.095-0.026,0.27-0.035,0.408c0,0-0.001,0-0.001,0.001c-0.377,0.234-0.665,0.52-0.605,1.014l0.009,0.001 c-0.032,0.049-0.064,0.098-0.096,0.146c-0.012,0.255-0.024,0.51-0.035,0.765c-0.124-0.001-0.247-0.001-0.371-0.002l0,0 c-0.056-0.008-0.111-0.016-0.167-0.023c-1.397-0.308-2.789-0.977-4.199-0.046c-0.475,0.191-0.951,0.383-1.426,0.574 c-0.029-0.016-0.053-0.01-0.07,0.019c-0.051,0.039-0.101,0.077-0.152,0.116c0,0,0.007-0.021,0.007-0.021 c-0.232,0.202-0.501,0.375-0.688,0.612c-0.416,0.525-0.771,1.098-1.188,1.621c-0.355,0.445-0.579,0.911-0.512,1.49 c-0.032,0.228-0.093,0.457-0.089,0.685c0.015,0.801-0.391,1.609,0.036,2.412c0.022,0.041-0.225,0.224-0.346,0.34 c-0.171,0.009-0.342,0.019-0.513,0.028C8.997,18.267,8.45,18.408,7.9,18.693c-1.053,0.545-2.147,1.012-3.199,1.558 c-0.461,0.239-0.862,0.593-1.29,0.895c-0.058,0.002-0.116,0.004-0.174,0.005c0.301,0.336,0.602,0.671,0.903,1.007l1.31,1.003 c0.632,0.282,1.27,0.552,1.892,0.854c0.211,0.103,0.458,0.25,0.556,0.444c0.208,0.412,0.329,0.869,0.485,1.307 c0.288,0.606,0.571,1.215,0.869,1.816c0.06,0.122,0.179,0.306,0.271,0.306c0.531-0.001,1.063-0.048,1.594-0.08l0,0 c0.03-0.054,0.059-0.107,0.089-0.161l0.068-0.232c0.086-0.21,0.171-0.42,0.257-0.63c0.254-0.301,0.507-0.601,0.761-0.902 c0.206-0.228,0.412-0.456,0.618-0.684l0.045,0.001L13,25.201c0.478-0.783,1.396-1.319,1.339-2.4 c0.252,0.033,0.504,0.065,0.756,0.098c0.126,0.016,0.252,0.033,0.378,0.049c1.072,0.305,2.062,0.269,3.178-0.114 c1.732-0.594,2.85-1.705,3.703-3.217c0.059-0.104,0.17-0.178,0.257-0.265c0.035-0.341,0.071-0.683,0.106-1.024l0.146-1.131 c-0.034-0.554-0.067-1.108-0.101-1.662c0.903,0.072,1.507-0.506,2.153-0.992l1.019-0.775c0.228-0.121,0.455-0.243,0.683-0.364 c0.069-0.018,0.137-0.036,0.206-0.055c0.054-0.014,0.11-0.024,0.168-0.033c0.229-0.034,0.473-0.038,0.667-0.138 c0.146-0.075,0.263-0.203,0.324-0.439c0.236-0.364,0.473-0.728,0.779-1.201C27.596,10.732,26.452,9.942,25.308,9.152z"}}),c("path",{staticStyle:{fill:"#FB691A"},attrs:{d:"M4.14,22.158c-0.301-0.336-0.602-0.671-0.903-1.007c0.058-0.002,0.116-0.004,0.174-0.005 c0.334-0.015,0.677,0.01,1.002-0.053c1.109-0.215,2.147-0.236,2.874,0.839c0.404,0.718,0.808,1.436,1.212,2.155 c0.107,0.252,0.23,0.498,0.318,0.757c0.272,0.796,0.605,1.53,1.543,1.729c0.222,0.359,0.445,0.718,0.667,1.077 c0.03,0.053,0.059,0.107,0.089,0.16c-0.531,0.032-1.063,0.079-1.594,0.08c-0.092,0-0.21-0.184-0.271-0.306 c-0.298-0.601-0.581-1.21-0.869-1.816c-0.157-0.438-0.277-0.895-0.485-1.307c-0.098-0.194-0.345-0.342-0.556-0.444 c-0.622-0.302-1.26-0.572-1.892-0.854C5.013,22.827,4.577,22.493,4.14,22.158z"}}),c("path",{staticStyle:{fill:"#FDA728"},attrs:{d:"M23.865,13.082c-0.79-0.322-1.139-1.103-1.338-1.887c-0.398-1.56-0.584-1.663-2.06-0.962 c-0.342,0.162-0.692,0.306-1.039,0.459c-0.002,0.042,0,0.083,0.006,0.125c0.671,0.607,1.441,1.138,1.984,1.844 c0.456,0.593,0.648,1.389,0.957,2.095c0.13,0.259,0.259,0.518,0.389,0.776c0.903,0.072,1.507-0.506,2.153-0.992 C24.919,13.799,24.577,13.373,23.865,13.082z M13.148,21.162c-0.522-0.245-0.979-0.605-0.959-1.209 c0.021-0.644-0.31-0.958-0.797-1.22c-0.407,0.426-0.803,0.864-1.225,1.275c-0.273,0.265-0.351,0.511-0.094,0.826 c0.079,0.097,0.135,0.217,0.18,0.336c0.35,0.929,0.993,1.362,2.005,1.272c0.2-0.018,0.419,0.182,0.629,0.282 c-0.157,0.241-0.314,0.482-0.471,0.722c-0.003,0.127-0.007,0.253-0.01,0.38c0.168,0.459,0.336,0.917,0.504,1.376l0.045,0.001 L13,25.201c0.478-0.783,1.396-1.319,1.339-2.4c-0.214-0.378-0.407-0.77-0.651-1.128C13.551,21.473,13.331,21.33,13.148,21.162z"}}),c("path",{staticStyle:{fill:"#FDDE36"},attrs:{d:"M13.712,17.365c-0.084,0.061-0.149,0.148-0.225,0.221c-0.518,0.499-0.722,0.453-0.952-0.228 c-0.06-0.178-0.086-0.367-0.128-0.551c-0.073-0.07-0.197-0.131-0.211-0.211c-0.305-1.724-0.247-3.383,1.227-4.601 c0.344-0.284,0.927-0.278,1.401-0.405c-0.04-0.171-0.079-0.342-0.119-0.513c-0.528-0.005-1.055-0.01-1.583-0.015 c-0.029-0.016-0.053-0.01-0.07,0.019c-0.051,0.039-0.101,0.077-0.152,0.116c0,0,0.007-0.021,0.007-0.021 c-0.217,0.379-0.396,0.787-0.659,1.13c-0.624,0.811-1.279,1.594-1.135,2.722c0.006,0.05-0.051,0.108-0.105,0.214 c-0.173-0.122-0.331-0.232-0.488-0.343c-0.031,0.228-0.093,0.457-0.089,0.685c0.015,0.801-0.391,1.609,0.036,2.412 c0.022,0.041-0.225,0.224-0.346,0.34c-0.332,0.524-0.669,1.045-0.991,1.575c-0.114,0.188-0.192,0.398-0.286,0.599 c0.438-0.486,0.848-1,1.323-1.446c0.271-0.254,0.647-0.397,0.975-0.591c0.085,0.087,0.169,0.173,0.254,0.26 c0.486,0.262,0.817,0.576,0.797,1.22c-0.019,0.604,0.437,0.964,0.959,1.209c0.35-0.345,0.7-0.69,1.05-1.035 c-0.953-0.925-0.925-0.884,0.232-1.672c0.62-0.422,1.127-1.012,1.685-1.527c-0.128-0.337-0.256-0.674-0.384-1.011 C15.058,16.399,14.383,16.879,13.712,17.365z M25.949,11.743c-0.656,0.14-0.908-0.227-1.105-0.668 c-0.236-0.529-0.478-1.084-0.555-1.65c-0.169-1.243-0.551-1.552-1.734-1.349c-0.563,0.096-1.151,0.045-1.727,0.061 c-0.272,0.165-0.543,0.33-0.816,0.495c-0.377,0.234-0.665,0.52-0.605,1.014l0.4,0.023c0.001-0.042,0.001-0.083,0.002-0.125 c0.14-0.494,0.502-0.693,0.979-0.764c0.477-0.071,0.956-0.146,1.424-0.258c1.041-0.248,1.497,0.034,1.526,1.112 c0.018,0.683,0.275,1.215,0.651,1.74c0.303,0.424,0.607,0.755,1.212,0.761c0.437,0.004,0.767,0.313,0.843,0.808 c0.024,0.158,0.115,0.306,0.175,0.459c0.069-0.018,0.137-0.036,0.206-0.055c0.021-0.167,0.044-0.334,0.064-0.501 C26.952,12.313,26.451,11.636,25.949,11.743z M10.19,23.581c-0.714,0.036-1.105-0.301-1.302-0.947 c-0.049-0.161-0.079-0.365-0.192-0.463c-0.515-0.444-0.481-0.906-0.111-1.407c-0.165,0.121-0.417,0.209-0.477,0.369 c-0.115,0.309-0.287,0.811-0.145,0.964c0.585,0.63,0.599,1.741,1.637,1.976c0.101,0.023,0.211,0.006,0.317,0.007 c0.233,0.001,0.466-0.002,0.699,0.001c0.773,0.01,0.844,0.114,0.523,0.8c-0.06,0.128-0.171,0.232-0.259,0.347 c-0.044,0.126-0.088,0.252-0.132,0.378c0.175,0.603,0.349,1.206,0.524,1.809c0.086-0.21,0.171-0.42,0.257-0.63 c-0.414-1.053-0.15-2.072,0.324-3.131C11.191,23.622,10.688,23.556,10.19,23.581z M11.117,27.809 c0.03-0.054,0.059-0.107,0.089-0.161c-0.059,0-0.119,0.001-0.178,0.001C11.058,27.703,11.088,27.756,11.117,27.809z M17.773,11.077 c0.001,0.128,0.001,0.255,0.002,0.383c0.385,0.089,0.858,0.067,1.138,0.288c0.652,0.516,1.232,1.13,1.787,1.754 c0.091,0.103-0.018,0.547-0.169,0.675c-0.62,0.528-1.288,1-1.949,1.478c-0.11,0.08-0.273,0.087-0.411,0.128 c0.164,0.555,0.329,1.11,0.493,1.666c0.249-0.102,0.528-0.162,0.741-0.315c0.629-0.449,1.133-1.1,2.006-1.129 c0.093-0.003,0.272-0.216,0.254-0.294c-0.182-0.753-0.221-1.623-0.642-2.218C20.227,12.37,19.356,11.203,17.773,11.077z"}}),c("path",{staticStyle:{fill:"#FEFE91"},attrs:{d:"M15.214,13.926c-0.044-0.057-0.088-0.114-0.132-0.171c-0.093-0.599-0.185-1.197-0.278-1.796 c0.016-0.034,0.03-0.069,0.041-0.105c0.937-0.446,1.894-0.666,2.906-0.253c0.004,0.163,0.009,0.326,0.013,0.489 c-0.478,0.298-0.972,0.575-1.43,0.902C15.94,13.273,15.586,13.612,15.214,13.926z"}}),c("path",{staticStyle:{fill:"#FEC32F"},attrs:{d:"M24.529,12.42c-0.078,0.003-0.189-0.105-0.235-0.188c-0.402-0.733-0.969-1.362-1.086-2.263 c-0.132-1.02-0.455-1.14-1.42-0.861c-0.647,0.187-1.318,0.293-1.978,0.435c-0.001,0.042-0.002,0.083-0.002,0.125 c-0.133,0.306-0.266,0.612-0.399,0.918c0.005,0.035,0.011,0.07,0.019,0.105c0.346-0.152,0.697-0.296,1.039-0.459 c1.476-0.702,1.662-0.599,2.06,0.962c0.2,0.784,0.549,1.565,1.338,1.887c0.712,0.291,1.054,0.717,1.052,1.459 c0.34-0.258,0.68-0.516,1.019-0.775C25.686,13.09,25.465,12.388,24.529,12.42z M11.965,24.923c0.08,0.328,0.216,0.641,0.327,0.961 c0.206-0.228,0.412-0.456,0.618-0.684c-0.168-0.459-0.336-0.917-0.503-1.376C11.849,24.025,11.853,24.466,11.965,24.923z M15.981,21.27c0.128-0.132,0.352-0.253,0.368-0.397c0.075-0.669,0.093-1.344,0.131-2.016c-0.719,0.425-1.439,0.85-2.158,1.275 C14.875,20.511,15.428,20.89,15.981,21.27z M12.887,22.723c-0.21-0.099-0.429-0.299-0.629-0.282 c-1.013,0.09-1.655-0.344-2.005-1.272c-0.045-0.118-0.101-0.239-0.18-0.336c-0.257-0.314-0.178-0.561,0.094-0.826 c0.423-0.41,0.818-0.848,1.225-1.275c-0.085-0.087-0.169-0.173-0.254-0.26c-0.387,0.408-0.782,0.809-1.16,1.226 c-0.355,0.391-0.904,0.763-0.976,1.207c-0.068,0.415,0.422,0.899,0.587,1.379c0.255,0.741,0.811,0.876,1.49,0.915 c0.449,0.026,0.892,0.16,1.337,0.245C12.573,23.204,12.73,22.964,12.887,22.723z"}}),c("path",{staticStyle:{fill:"#FECF32"},attrs:{d:"M26.444,12.943c-0.075-0.495-0.406-0.804-0.843-0.808c-0.605-0.006-0.908-0.337-1.212-0.761 c-0.375-0.524-0.632-1.057-0.651-1.74c-0.029-1.078-0.485-1.36-1.526-1.112c-0.469,0.112-0.947,0.187-1.424,0.258 c-0.477,0.071-0.839,0.27-0.979,0.764c0.66-0.142,1.331-0.248,1.978-0.435c0.965-0.279,1.288-0.159,1.42,0.861 c0.117,0.9,0.684,1.53,1.086,2.263c0.046,0.084,0.157,0.191,0.235,0.188c0.936-0.032,1.157,0.67,1.407,1.346 c0.228-0.121,0.455-0.243,0.683-0.364C26.559,13.249,26.468,13.101,26.444,12.943z M19.407,9.646l0.009,0.001 c0.001-0.001,0.001-0.002,0.002-0.003L19.407,9.646z M19.807,9.669l-0.391-0.022c-0.032,0.049-0.064,0.098-0.096,0.146 c-0.012,0.255-0.024,0.51-0.035,0.765c0.042,0.01,0.083,0.019,0.124,0.029C19.542,10.281,19.675,9.975,19.807,9.669z M9.589,22.285 c-0.166-0.48-0.655-0.964-0.587-1.379c0.073-0.444,0.621-0.816,0.976-1.207c0.378-0.416,0.773-0.818,1.16-1.226 c-0.329,0.193-0.704,0.336-0.975,0.591c-0.475,0.446-0.886,0.96-1.323,1.446c-0.085,0.085-0.17,0.17-0.255,0.256 c-0.37,0.501-0.404,0.963,0.111,1.407c0.113,0.098,0.143,0.302,0.192,0.463c0.197,0.645,0.587,0.983,1.302,0.947 c0.498-0.026,1.002,0.041,1.666,0.074c-0.474,1.059-0.738,2.078-0.324,3.131c0.254-0.301,0.507-0.601,0.761-0.902 c-0.111-0.32-0.247-0.634-0.327-0.961c-0.111-0.457-0.116-0.898,0.441-1.099c0.003-0.127,0.007-0.253,0.01-0.38 c-0.445-0.086-0.888-0.219-1.337-0.245C10.4,23.161,9.844,23.026,9.589,22.285z M18.913,11.748c-0.28-0.222-0.753-0.2-1.138-0.288 c-0.008,0.047-0.015,0.094-0.023,0.141c0.004,0.163,0.009,0.326,0.013,0.489c0.135,1.231,0.27,2.462,0.405,3.693 c0.138-0.041,0.301-0.048,0.411-0.128c0.661-0.478,1.329-0.951,1.949-1.478c0.151-0.128,0.261-0.572,0.169-0.675 C20.145,12.878,19.565,12.264,18.913,11.748z M14.43,18.455c-1.157,0.788-1.185,0.748-0.232,1.672 c0.041,0.002,0.083,0.003,0.124,0.004c0.719-0.425,1.439-0.85,2.158-1.275c-0.122-0.643-0.244-1.285-0.365-1.928 C15.557,17.443,15.05,18.032,14.43,18.455z M12.407,16.807c0.002-0.168,0.005-0.337,0.007-0.505 c-0.148-1.598,0.613-2.833,1.617-3.952c0.18-0.2,0.512-0.264,0.774-0.39c0.016-0.034,0.029-0.069,0.041-0.105 c-0.008-0.088-0.015-0.176-0.023-0.264c-0.473,0.127-1.057,0.121-1.401,0.405c-1.473,1.219-1.532,2.877-1.227,4.601 C12.21,16.676,12.334,16.737,12.407,16.807z"}}),c("path",{staticStyle:{fill:"#FDFD3E"},attrs:{d:"M22.375,14.756c-0.047,0.158-0.165,0.336-0.129,0.472c0.288,1.088-0.555,1.738-0.964,2.553 c-0.051,0.101-0.233,0.248-0.277,0.225c-0.751-0.396-1.259,0.286-1.888,0.406c-0.059,0.011-0.123,0.002-0.275,0.002 c-0.059-0.321-0.118-0.644-0.177-0.966c-0.164-0.555-0.329-1.11-0.493-1.666c-0.135-1.231-0.27-2.462-0.405-3.693 c-0.478,0.298-0.972,0.575-1.43,0.902c-0.395,0.282-0.749,0.621-1.121,0.935c0.172,0.664,0.344,1.327,0.517,1.991 c0.128,0.337,0.256,0.674,0.384,1.011c0.122,0.643,0.243,1.286,0.365,1.928c-0.038,0.673-0.056,1.348-0.131,2.016 c-0.016,0.144-0.24,0.266-0.368,0.397c-0.098,0.194-0.145,0.474-0.303,0.567c-0.528,0.312-0.642,0.646-0.205,1.11 c1.072,0.305,2.062,0.269,3.178-0.114c1.732-0.594,2.85-1.705,3.703-3.217c0.059-0.104,0.17-0.178,0.257-0.265 c0.035-0.341,0.071-0.683,0.106-1.024l0.146-1.131l-0.101-1.662C22.634,15.274,22.504,15.015,22.375,14.756z M7.9,18.693 c-1.053,0.545-2.147,1.012-3.199,1.558c-0.461,0.239-0.862,0.593-1.29,0.895c0.334-0.015,0.677,0.01,1.002-0.053 c1.109-0.215,2.147-0.236,2.874,0.839l2.318-3.569C8.997,18.267,8.45,18.408,7.9,18.693z M23.107,4.113 c0.015-0.008-0.035,0.002-0.057,0.031c-1.005,1.357-2.011,2.712-3.003,4.079c-0.069,0.095-0.026,0.27-0.035,0.409 c0.272-0.165,0.543-0.33,0.815-0.495c0.343-0.253,0.653-0.601,1.038-0.735c0.546-0.191,1.155-0.195,1.722-0.336 c0.523-0.13,0.902-0.061,1.156,0.465c0.091,0.189,0.293,0.323,0.445,0.483c0.073-0.596-0.1-1.094-0.476-1.579 C24.14,5.694,23.642,4.895,23.107,4.113z M14.823,11.59c0.008,0.088,0.015,0.176,0.023,0.264c0.937-0.446,1.894-0.666,2.906-0.253 c0.008-0.047,0.015-0.094,0.023-0.141c-0.001-0.128-0.002-0.255-0.002-0.383c-0.019-0.355,0.089-0.549,0.501-0.468 c0.147,0.029,0.315-0.048,0.473-0.076c-1.397-0.308-2.789-0.977-4.199-0.046c0.052,0.196,0.104,0.393,0.157,0.589 C14.744,11.247,14.783,11.418,14.823,11.59z M25.308,9.152c0.103,0.516,0.167,1.044,0.321,1.544 c0.13,0.422,0.459,0.603,0.907,0.407c0.52-0.227,0.888-0.014,1.094,0.444c0.168,0.374,0.239,0.792,0.353,1.191 c0.236-0.364,0.473-0.728,0.779-1.201C27.596,10.732,26.452,9.942,25.308,9.152z M19.428,10.692 c-0.008-0.035-0.014-0.07-0.019-0.105c-0.041-0.01-0.083-0.019-0.124-0.029c-0.124-0.001-0.247-0.001-0.371-0.002 c0.173,0.087,0.347,0.174,0.52,0.261C19.428,10.776,19.426,10.734,19.428,10.692z M10.565,24.465 c-0.693-0.1-1.378-0.25-2.066-0.378c0.107,0.252,0.23,0.498,0.318,0.757c0.272,0.796,0.605,1.53,1.543,1.729 c0.13-0.322,0.26-0.643,0.389-0.965c0.044-0.126,0.088-0.252,0.132-0.378C10.866,24.939,11.147,24.549,10.565,24.465z M14.031,12.349c-1.004,1.119-1.766,2.354-1.617,3.952c0.249-0.286,0.545-0.545,0.739-0.865c0.469-0.773,1.098-1.338,1.93-1.682 c-0.093-0.599-0.185-1.197-0.278-1.796C14.543,12.085,14.211,12.149,14.031,12.349z"}})])]),c("span",[e._v(": "+e._s(e.$store.getters.score))])]),c("div",[c("svg",{staticClass:"icon",attrs:{viewBox:"0 0 32 32"}},[c("path",{attrs:{fill:"#ddd",d:"M19.178,23.497l-1.028-3.702 c-0.102-0.369-0.45-0.614-0.832-0.587L5.595,20.046c-0.505,0.036-0.918-0.399-0.855-0.902l0.744-5.956 c0.05-0.402,0.392-0.704,0.798-0.704h12.282c0.393,0,0.728-0.284,0.793-0.672l0.538-3.225c0.116-0.694,1.003-0.915,1.431-0.357 l5.775,7.532c0.238,0.311,0.218,0.748-0.048,1.035l-6.51,7.031C20.115,24.29,19.346,24.103,19.178,23.497z"}})]),c("span",[e._v(": "+e._s(e.$store.getters.moves))])])])},v=[],h=(c("6641"),c("2877")),p={},f=Object(h["a"])(p,d,v,!1,null,"d054e188",null);f.options.__file="Score.vue";var m=f.exports,w={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right",8:"up",2:"down",5:"down",4:"left",6:"right"},C={name:"Controls",components:{Score:m},buttons:[{direction:"up",path:"M23.497,12.822l-3.702,1.028 c-0.369,0.102-0.614,0.45-0.587,0.832l0.837,11.723c0.036,0.505-0.399,0.918-0.902,0.855l-5.956-0.744 c-0.402-0.05-0.704-0.392-0.704-0.798V13.436c0-0.393-0.284-0.728-0.672-0.793l-3.225-0.538c-0.694-0.116-0.915-1.003-0.357-1.431 l7.532-5.775c0.311-0.238,0.748-0.218,1.035,0.048l7.031,6.51C24.29,11.885,24.103,12.654,23.497,12.822z"},{direction:"down",path:"M8.503,19.178l3.702-1.028 c0.369-0.102,0.614-0.45,0.587-0.832L11.954,5.595c-0.036-0.505,0.399-0.918,0.902-0.855l5.956,0.744 c0.402,0.05,0.704,0.392,0.704,0.798v12.282c0,0.393,0.284,0.728,0.672,0.793l3.225,0.538c0.694,0.116,0.915,1.003,0.357,1.431 l-7.532,5.775c-0.311,0.238-0.748,0.218-1.035-0.048l-7.031-6.51C7.71,20.115,7.897,19.346,8.503,19.178z"},{direction:"left",path:"M12.822,8.503l1.028,3.702 c0.102,0.369,0.45,0.614,0.832,0.587l11.723-0.837c0.505-0.036,0.918,0.399,0.855,0.902l-0.744,5.956 c-0.05,0.402-0.392,0.704-0.798,0.704H13.436c-0.393,0-0.728,0.284-0.793,0.672l-0.538,3.225c-0.116,0.694-1.003,0.915-1.431,0.357 l-5.775-7.532c-0.238-0.311-0.218-0.748,0.048-1.035l6.51-7.031C11.885,7.71,12.654,7.897,12.822,8.503z"},{direction:"right",path:"M19.178,23.497l-1.028-3.702 c-0.102-0.369-0.45-0.614-0.832-0.587L5.595,20.046c-0.505,0.036-0.918-0.399-0.855-0.902l0.744-5.956 c0.05-0.402,0.392-0.704,0.798-0.704h12.282c0.393,0,0.728-0.284,0.793-0.672l0.538-3.225c0.116-0.694,1.003-0.915,1.431-0.357 l5.775,7.532c0.238,0.311,0.218,0.748-0.048,1.035l-6.51,7.031C20.115,24.29,19.346,24.103,19.178,23.497z"}],mounted:function(){window.document.body.addEventListener("keydown",this.handleKeydown)},destroyed:function(){window.document.body.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown:function(e){var t=w[e.key];t&&(e.preventDefault(),e.stopPropagation(),this.$store.dispatch("move",t))}}},_=C,b=(c("b647"),Object(h["a"])(_,l,u,!1,null,"bcd7dfb4",null));b.options.__file="Controls.vue";var g=b.exports,M=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"level-select"},[c("h1",[e._v("Level Select")]),c("div",{staticClass:"close"},[c("button",{staticClass:"control",attrs:{type:"button"},on:{mousedown:function(t){e.$store.dispatch("mode",e.$store.getters.modePrevious)},touchstart:function(t){t.preventDefault(),t.stopPropagation(),e.$store.dispatch("mode",e.$store.getters.modePrevious)}}},[c("svg",{attrs:{viewBox:"0 0 32 32"}},[c("path",{attrs:{d:"M25.749,21.72c-1.507-1.994-3.014-3.988-4.521-5.982 c0.666-0.794,1.331-1.588,1.997-2.382c1.294-1.544,2.674-3.404,2.246-5.372c-0.059-0.272-0.159-0.548-0.359-0.742 c-0.704-0.687-1.457-1.33-2.444-1.6c-0.167-0.046-0.34-0.088-0.511-0.058c-0.21,0.037-0.384,0.179-0.547,0.317 c-1.615,1.374-3.072,2.924-4.396,4.58c-0.967-1.217-1.977-2.4-3.11-3.467c-0.741-0.697-1.936-2.02-2.955-2.275 C9.874,4.419,8.777,5.666,8.209,6.622c-0.866,1.456-1.339,2.4-0.244,3.887c1.41,1.915,2.838,3.824,4.308,5.696 c-2.26,2.054-4.247,4.387-6.227,6.712c-0.101,0.119-0.207,0.25-0.215,0.405c-0.01,0.196,0.138,0.361,0.278,0.5 c1.071,1.065,2.232,2.04,3.466,2.911c0.356,0.251,0.734,0.501,1.165,0.563c1.225,0.178,2.079-1.117,2.759-2.151 c0.577-0.877,1.253-1.684,1.928-2.489c0.386-0.461,0.772-0.921,1.158-1.382c0.795,0.852,1.596,1.698,2.447,2.497 c0.91,0.855,1.865,1.686,2.549,2.731c0.115,0.176,0.23,0.365,0.414,0.468c0.253,0.141,0.569,0.082,0.841-0.017 c1.515-0.552,2.411-2.089,3.1-3.547c0.128-0.27,0.256-0.557,0.228-0.855C26.135,22.239,25.939,21.97,25.749,21.72z"}})])])]),c("div",{staticClass:"controls"},[e._l(e.$store.getters.levels,function(t,n){return c("button",{key:n,staticClass:"control",class:{active:e.$store.getters.currentLevel===n},attrs:{type:"button"},on:{touchstart:function(t){t.preventDefault(),t.stopPropagation(),e.$store.dispatch("startLevel",n)},mousedown:function(t){e.$store.dispatch("startLevel",n)}}},[e._v(e._s(n+1))])}),c("div",{staticClass:"control characters",on:{mousedown:function(t){e.$store.dispatch("mode","characterSelect")},touchstart:function(t){t.preventDefault(),t.stopPropagation(),e.$store.dispatch("mode","characterSelect")}}},[e._v("Characters")])],2)])},L=[],y=(c("723f"),{}),x=Object(h["a"])(y,M,L,!1,null,"81d5abd0",null);x.options.__file="LevelSelect.vue";var S=x.exports,O=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"level-win"},[c("h1",[e._v("You Win!")]),c("score"),c("div",{staticClass:"controls"},[c("button",{staticClass:"control options",attrs:{type:"button"},on:{mousedown:function(t){e.$store.dispatch("startLevel",e.$store.getters.currentLevel)},touchstart:function(t){t.preventDefault(),t.stopPropagation(),e.$store.dispatch("startLevel",e.$store.getters.currentLevel)}}},[e._v("Replay")]),c("button",{staticClass:"control options",attrs:{type:"button"},on:{mousedown:function(t){e.$store.dispatch("nextLevel")},touchstart:function(t){t.preventDefault(),t.stopPropagation(),e.$store.dispatch("nextLevel")}}},[e._v("Next Level")])])],1)},z=[],P={components:{Score:m}},j=P,D=(c("75a8"),Object(h["a"])(j,O,z,!1,null,"8426deea",null));D.options.__file="LevelWin.vue";var $=D.exports,E=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"game-three"},[c("div",{staticClass:"has-to-be-here-for-reactivity"},[c("pre",[e._v("Mode: "+e._s(e.mode)+"\nCharacter: "+e._s(e.character)+"\nScore: "+e._s(e.score)+"\nMoves: "+e._s(e.moves)+"\n"+e._s(e.map)+"\n      ")])])])},A=[],k=c("8afe"),F=(c("4917"),c("7f7f"),c("ac6a"),c("682a")),T=c.n(F),I=c("5a89");window.THREE=I,c("ff19"),c("af90");var R=new I["GLTFLoader"],W=function(e){var t=0;e.animationNameMap={},e.animations.forEach(function(t){e.animationNameMap[t.name]=t}),e.update=function(c){var n=(c-t)/1e3;e.mixer.update(n),t=c},e.playAnimationByName=function(t){if(e.lastAnimation!==t){e.mixer=new I["AnimationMixer"](e.scene);var c=e.animationNameMap[t],n=e.mixer.clipAction(c);n.play(),e.lastAnimation=t}}},G={},H={},N=function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=[],t.forEach(function(e){if(!G[e]){var t,n,a=new Promise(function(e,c){t=e,n=c});R.load("models/".concat(e,".gltf"),function(c){G[e]=c,W(c),c.scene.children.forEach(function(e){H[e.name]=e}),t(c)},void 0,n),c.push(a)}}),e.next=4,Promise.all(c);case 4:return e.abrupt("return",G);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),B=new I["WebGLRenderer"]({alpha:!0,antialias:!0}),U=new I["PerspectiveCamera"](45,window.innerWidth/window.innerHeight,.1,1e4),V=new I["Scene"],Q=new I["Group"];V.add(Q);var q=new I["DirectionalLight"](16777215,.5);q.position.set(-2,2,2),q.castShadow=!0,V.add(q);var K=new I["DirectionalLight"](16777215,1);K.position.set(1,2,1),K.castShadow=!0,V.add(K);var X=new I["AmbientLight"](16777215,2);V.add(X);var Z=new I["HemisphereLight"](13565695,11791088,.5);V.add(Z),V.fog=new I["Fog"]("#5d3758",9,12);var J=Math.PI/4,Y={X:4*-J,Z:6*-J,A:6*-J,Q:0,W:0,E:2*-J,D:2*-J,C:4*-J,S:0," ":0,"┃":0,"━":2*-J,"┓":4*-J,"┛":6*-J,"┗":0,"┏":2*-J,",":2*-J,"┻":0,"┣":2*-J,"┳":4*-J,"┫":6*-J,"╋":0,"╻":4*-J,"╹":0,"╺":2*-J,"╸":6*-J,P:0,up:2*-J,down:6*-J,left:0,right:4*-J},ee={G:"ghost",Q:"house_corner",W:"house",E:"house_corner",D:"house",C:"house_corner",X:"house",Z:"house_corner",A:"house",S:"road_spawn"," ":"park","┃":"road_horizontal","━":"road_horizontal","┓":"road_corner","┛":"road_corner","┗":"road_corner","┏":"road_corner",",":"start","┻":"road_tee","┣":"road_tee","┳":"road_tee","┫":"road_tee","╋":"road_plus","╻":"road_end","╹":"road_end","╺":"road_end","╸":"road_end",P:"park"},te=["house_a","house_b","house_c"],ce=function(){var e=Math.floor(te.length*Math.random());return te[e]},ne=new I["Object3D"];ne.rotation.x=2*-J;var ae=null,oe={},re=new I["Object3D"],se=[],ie=function(){se.shift();var e=se[0];e&&e.start()},le=new I["Object3D"],ue=new I["Object3D"];le.scale.setScalar(2.5),ue.scale.setScalar(2.5),le.position.set(1,-.65,0),ue.position.set(-1,-.55,0),le.rotation.set(Math.PI/2,Math.PI,-Math.PI/2),ue.rotation.set(Math.PI/2,Math.PI,-Math.PI/2);var de,ve,he=function(e,t){"characterSelect"===e&&(V.remove(ne),V.add(le),V.add(ue),H.ghost_root.position.set(0,0,0),H.alien_root.position.set(0,0,0),le.add(H.ghost_root),ue.add(H.alien_root),U.position.set(0,0,-5),U.lookAt(new I["Vector3"](0,0,0)),me.update()),"play"===e&&(V.add(ne),V.remove(le),V.remove(ue),pe(t),U.position.set(-1,6,-5),U.lookAt(new I["Vector3"](0,0,0)),me.update())},pe=function(e){re.remove(re.children[0]);var t=H["".concat(e,"_root")];t.position.set(0,0,0),re.add(t)},fe=function(e){var t=e.map,c=e.mapRaw,n=e.currentLevel,a=e.lastDirection;if(ae!==n){var o=oe[ae];o&&ne.remove(o),ae=n}var r=oe[n],s=t.indexOf("\n",1)-1,i=(t.match(/\n/g)||[]).length-1,l=-s/2+.5,u=-i/2;if(!r){var d=Object(k["a"])(c);d.shift(),r=oe[n]=new I["Object3D"],d.forEach(function(e,t){var c=Math.floor(t/(s+1)),n=(t-c)%s,a=r.children[t];if(!a){if("\n"!==e){var o=e.toLocaleUpperCase(),i=ee[o]||"road_spawn";"house"===i&&(i=ce());var d=Y[o]||0;a=H[i].clone(),a.position.x=-(n+l),a.position.y=c+u,a.rotation.z=d,0===i.indexOf("house")&&a.add(H.candy_circle.clone())}else a=new I["Object3D"];r.add(a)}})}r.add(re);var v=Object(k["a"])(t);v.shift(),v.forEach(function(e,t){if("G"===e){var c=Math.floor(t/(s+1)),n=(t-c)%s,o=Y[a]||0,i=new T.a.Tween(re.position).to({x:-(n+l),y:c+u},100).easing(T.a.Easing.Quadratic.Out).onUpdate(function(){r.position.x=-re.position.x,r.position.y=-re.position.y}).onComplete(ie);se.push(i),se.length<2&&i.start(),re.rotation.z=o}var d=r.children[t];if(0===d.name.indexOf("house")){var v=e===e.toLocaleUpperCase();d.children[0].visible=v}}),ne.add(r)};B.shadowMap.enabled=!0,B.shadowMap.type=I["PCFSoftShadowMap"];var me,we=new I["Vector2"],Ce=Math.PI/180,_e=function(){var e=B.domElement.clientWidth,t=B.domElement.clientHeight,c=window.devicePixelRatio;if(de=e*c,ve=t*c,B.domElement.width!==de||B.domElement.height!==ve){var n=de/ve,a=J;U.fov=(n>=1?a:2*Math.atan(Math.tan(a/2)/n))/Ce,U.aspect=n,U.updateProjectionMatrix(),B.setPixelRatio(c),B.setSize(e,t,!1),we.set(de/2,ve/2)}},be=!0,ge=function e(t){be&&(requestAnimationFrame(e),_e(),Le(t))},Me=function(e){e.appendChild(B.domElement),me=new I["OrbitControls"](U,B.domElement),U.position.set(-1,6,-5),U.lookAt(new I["Vector3"](0,0,0)),me.enableDamping=!0,me.dampingFactor=.25,me.screenSpacePanning=!1,me.enablePan=!1,me.minDistance=1,me.maxDistance=10,me.minPolarAngle=-1/0,me.maxPolarAngle=Math.PI/2,requestAnimationFrame(ge)},Le=function(e){me.update(),T.a.update(e),B.render(V,U)},ye={data:function(){return{loaded:!1,lastMap:null}},computed:Object(r["a"])({},Object(i["b"])(["mode","character","currentLevel","lastDirection","levels","score","moves","map"])),mounted:function(){Me(this.$el),this.startLoad()},destroyed:function(){be=!1},beforeUpdate:function(){this.updateState()},methods:{startLoad:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N(["city","characters"]);case 2:console.log("Loaded",H),this.loaded=!0,this.updateState(),he(this.mode,this.character);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateState:function(){this.map&&this.loaded&&this.lastMap!==this.map&&null!==this.currentLevel&&(fe({map:this.map,mapRaw:this.levels[this.currentLevel],currentLevel:this.currentLevel,lastDirection:this.lastDirection}),this.lastMap=this.map)}},watch:{mode:function(){he(this.mode,this.character)},currentLevel:function(){this.updateState()}}},xe=ye,Se=(c("8089"),Object(h["a"])(xe,E,A,!1,null,null,null));Se.options.__file="GameThree.vue";var Oe=Se.exports,ze=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"character-select"},[c("h1",[e._v("Halloween Game!")]),c("p",[e._v("Pick a character")]),c("div",{staticClass:"characters"},[c("div",{staticClass:"characters-square"},e._l(e.$options.characters,function(t){return c("div",{key:t,staticClass:"character",class:t,on:{touchstart:function(c){c.preventDefault(),c.stopPropagation(),e.$store.dispatch("selectCharacter",t)},mousedown:function(c){e.$store.dispatch("selectCharacter",t)}}})}))])])},Pe=[],je={characters:["ghost","alien"],components:{Score:m}},De=je,$e=(c("93c5"),Object(h["a"])(De,ze,Pe,!1,null,"138b504c",null));$e.options.__file="CharacterSelect.vue";var Ee=$e.exports,Ae={name:"app",components:{CharacterSelect:Ee,Controls:g,LevelSelect:S,LevelWin:$,GameThree:Oe},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("loadLevels");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:Object(r["a"])({},Object(i["b"])(["mode"]))},ke=Ae,Fe=(c("5c0b"),Object(h["a"])(ke,a,o,!1,null,null,null));Fe.options.__file="App.vue";var Te=Fe.exports,Ie=(c("28a5"),c("a481"),c("6762"),c("2fdb"),c("0284")),Re=c.n(Ie);n["a"].use(i["a"]);var We=function(e,t,c,n){return e.slice(0,t)+n+e.slice(t+c)},Ge=/[QWEDCXZA]/gm,He=function(e,t){var c=e.map,n=c.indexOf("\n",1)-1,a=(c.match(/\n/g)||[]).length-1,o=c.indexOf("G",1),r=Math.floor((o-1)/(n+1)),s=(o-r)%n,i=s,l=r;"up"===t&&(l=Math.max(l-1,0)),"down"===t&&(l=Math.min(l+1,a)),"left"===t&&(i=Math.max(i-1,0)),"right"===t&&(i=Math.min(i+1,n));var u=l*n+l+i,d=o,v=e.moves,h=e.score,p=c,f=c.charAt(u);if(e.roadTiles.includes(f)){d=u;var m=e.levels[e.currentLevel].charAt(o);p=We(p,o,1,m),p=We(p,d,1,"G")}return f.match(Ge)&&(h+=1,p=We(p,u,1,f.toLocaleLowerCase())),d===o&&h===e.score||(v+=1),{charAtNewIndex:f,gIndexLast:o,newIndex:u,yLast:r,xLast:s,x:i,y:l,moves:v,score:h,map:p}},Ne=0,Be=new i["a"].Store({state:{charAtNewIndex:null,lastDirection:null,moves:0,score:0,levels:[],roadTiles:[],mode:"characterSelect",modePrevious:"characterSelect",character:null,currentLevel:null,map:null},getters:{score:function(e){return e.score},moves:function(e){return e.moves},map:function(e){return e.map},mode:function(e){return e.mode},modePrevious:function(e){return e.modePrevious},character:function(e){return e.character},levels:function(e){return e.levels},currentLevel:function(e){return e.currentLevel},lastDirection:function(e){return e.lastDirection}},mutations:{setLevels:function(e,t){console.log(t),e.roadTiles=t.roadTiles,e.levels=t.levels},startLevel:function(e,t){e.currentLevel=t,e.map=e.levels.length?e.levels[e.currentLevel].replace("S","G"):null,e.score=0,e.moves=0},mode:function(e,t){e.modePrevious=e.mode,e.mode=t},selectCharacter:function(e,t){e.character=t},move:function(e,t){var c=t,n=He(e,c);e.lastDirection=c,e.map=n.map,e.score=n.score,e.moves=n.moves,e.charAtNewIndex=n.charAtNewIndex}},actions:{loadLevels:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var c,n,a,o,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=t.dispatch,e.next=3,fetch("./levels.txt");case 3:return n=e.sent,e.next=6,n.text();case 6:a=e.sent,o=a.split("\n\n"),r=Object(k["a"])(o.shift()),s=o.map(function(e){return"\n"+e}),c("setLevels",{roadTiles:r,levels:s});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),setLevels:function(e,t){var c=e.commit;c("setLevels",t)},selectCharacter:function(e,t){var c=e.commit;c("selectCharacter",t),c("startLevel",0),c("mode","play"),Object(Ie["event"])("interaction","selectCharacter",t,null)},startLevel:function(e,t){var c=e.state,n=e.commit;n("startLevel",t),n("mode","play"),Object(Ie["event"])("interaction","startLevel",null,c.currentLevel)},mode:function(e,t){e.state;var c=e.commit;c("mode",t),Object(Ie["event"])("interaction","mode",t,null)},nextLevel:function(e){var t=e.state,c=e.commit,n=(t.currentLevel+1)%t.levels.length;c("startLevel",n),c("mode","play"),Object(Ie["event"])("interaction","nextLevel",null,t.currentLevel)},move:function(e,t){var c=e.state,n=e.commit;n("move",t);var a=!c.map.match(Ge),o="!"===c.charAtNewIndex;(a||o)&&(Ne+=1,Object(Ie["event"])("interaction","win","currentLevel: ".concat(c.currentLevel,", score: ").concat(c.score,", moves: ").concat(c.moves),Ne),Object(Ie["event"])("interaction","winMap",c.map,a?1:0),setTimeout(function(){n("mode","levelWin")},200))}}});n["a"].use(Re.a,{id:"UA-7088806-10",autoTracking:{exception:!0},debug:{sendHitTask:!0}}),n["a"].config.productionTip=!1,new n["a"]({store:Be,render:function(e){return e(Te)}}).$mount("#app")},"5c0b":function(e,t,c){"use strict";var n=c("2856"),a=c.n(n);a.a},6641:function(e,t,c){"use strict";var n=c("a24e"),a=c.n(n);a.a},"723f":function(e,t,c){"use strict";var n=c("103f"),a=c.n(n);a.a},"75a8":function(e,t,c){"use strict";var n=c("38c0"),a=c.n(n);a.a},8089:function(e,t,c){"use strict";var n=c("105e"),a=c.n(n);a.a},"93c5":function(e,t,c){"use strict";var n=c("df31"),a=c.n(n);a.a},a24e:function(e,t,c){},b647:function(e,t,c){"use strict";var n=c("0aeb"),a=c.n(n);a.a},df31:function(e,t,c){}});
//# sourceMappingURL=app.b6e1f857.js.map