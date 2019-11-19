(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{235:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),s("h2",{attrs:{id:"get-an-update-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-an-update-status"}},[t._v("#")]),t._v(" Get an update status")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index/updates/:update-id"}}),t._v(" "),s("p",[t._v("Get the status of an "),s("router-link",{attrs:{to:"/main_concept/indexes.html#Updates"}},[t._v("update")]),t._v(" in a given "),s("router-link",{attrs:{to:"/main_concept/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),s("td",[s("code",[t._v("$API_KEY")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Accept-encoding")])]),t._v(" "),s("td",[t._v("gzip, deflate")])])])]),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index")])]),t._v(" "),s("td",[t._v("The index UID")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("update-id")])]),t._v(" "),s("td",[t._v("An update identifier")])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --location "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/movies/updates/3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("p",[t._v("Here is an example response of an update that has been processed.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enqueued"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"update_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"update_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DocumentsAddition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19652")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enqueued_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-13T14:51:22.857056Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-all-update-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-all-update-status"}},[t._v("#")]),t._v(" Get all update status")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index/updates"}}),t._v(" "),s("p",[t._v("Get the status of all "),s("router-link",{attrs:{to:"/main_concept/indexes.html#updates"}},[t._v("updates")]),t._v(" in a given "),s("router-link",{attrs:{to:"/main_concept/indexes.html"}},[t._v("index")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"headers-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers-2"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("X-Meili-API-Key")])]),t._v(" "),s("td",[s("code",[t._v("$API_KEY")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Accept-encoding")])]),t._v(" "),s("td",[t._v("gzip, deflate")])])])]),t._v(" "),s("h4",{attrs:{id:"path-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index")])]),t._v(" "),s("td",[t._v("The index UID")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("update-id")])]),t._v(" "),s("td",[t._v("An update identifier")])])])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --location "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/indexes/movies/updates'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Meili-API-Key: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$API_KEY")]),t._v('"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("p",[t._v("Here is an example response of an update that have been processed.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enqueued"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"update_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"update_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DocumentsAddition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19652")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enqueued_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-13T14:51:22.857056Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);