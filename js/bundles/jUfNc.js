var pageComponent=webpackJsonppageComponent([63],{838:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=a(l),s=n(0),c=a(s);n(18),n(19),n(20),n(5),n(10),n(13),n(21),n(6),n(22),n(4),n(23),n(24),n(8),n(2),n(9),n(3),n(14),n(17),n(25),n(26),n(11),n(16),n(12),n(27),n(7),n(15),n(28),n(29),n(30),n(31),n(32),n(33),n(34);var p=n(839),d=a(p),f=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);c.default.register(f,d.default),t.default=f},839:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.jUfNc=void 0;var l,u=n(1),s=a(u),c=n(0),p=a(c);goog.loadModule(function(e){function t(e,t,a){var l=function(){o("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),r("h6"),o("article",null,null,"id","1"),o("p"),u({axisY:{label:"Y Axis Label"},axisY2:{label:"Y2 Axis Label",show:!0},data:[{id:"data1",data:[10,70,30,120,20,10],axis:"y"},{id:"data2",data:[100,150,120,90,10,55],axis:"y2"}]},null,a),r("p"),s({code:"{call ClayChart.render}\n    {param axisY: [\n        'label': 'Y Axis Label'\n    ] /}\n    {param axisY2: [\n        'label': 'Y2 Axis Label',\n        'show': true\n    ] /}\n    {param data: [\n        [\n            'id': 'data1',\n            'data': [10, 70, 30, 120, 20, 10],\n            'axis': 'y'\n        ],\n        [\n            'id': 'data2',\n            'data': [100, 150, 120, 90, 10, 55],\n            'axis': 'y2'\n        ]\n    ] /}\n{/call}",mode:"soy"},null,a),s({code:"<Chart\n    axisY={\n        label: 'Y Axis Label'\n    }\n    axisY2={\n        label: 'Y2 Axis Label',\n        show: true\n    }\n    data={[\n        {\n            id: 'data1',\n            data: [10, 70, 30, 120, 20, 10],\n            axis: 'y'\n        },\n        {\n            id: 'data2',\n            data: [100, 150, 120, 90, 10, 55],\n            axis: 'y2'\n        }\n    ]}\n/>",mode:"jsx"},null,a),r("article"),o("input",null,null,"type","hidden","value",e.page.title),r("input"),o("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:l},e),null,a)}goog.module("jUfNc.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var a=goog.require("incrementaldom"),o=a.elementOpen,r=a.elementClose,i=(a.elementVoid,a.elementOpenStart,a.elementOpenEnd,a.text),u=(a.attr,p.default.getTemplate("ClayChart.incrementaldom","render")),s=p.default.getTemplate("ElectricCode.incrementaldom","render"),c=p.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="jUfNc.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);p.default.register(d,l),t.jUfNc=d,t.templates=l,t.default=l}},[838]);