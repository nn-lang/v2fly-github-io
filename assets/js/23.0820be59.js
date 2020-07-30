(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{381:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"policy-本地策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#policy-本地策略"}},[t._v("#")]),t._v(" Policy 本地策略")]),t._v(" "),a("p",[t._v("本地策略可以配置一些用户相关的权限，比如连接超时设置。V2Ray 处理的每一个连接，都对应到一个用户，按照这个用户的等级（level）应用不同的策略。本地策略可按照等级的不同而变化。")]),t._v(" "),a("h2",{attrs:{id:"policyobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#policyobject"}},[t._v("#")]),t._v(" PolicyObject")]),t._v(" "),a("p",[a("code",[t._v("PolicyObject")]),t._v(" 对应配置文件中的 "),a("code",[t._v("policy")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"levels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"handshake"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connIdle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uplinkOnly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"downlinkOnly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bufferSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": map{string: "),a("a",{attrs:{href:"#levelpolicyobject"}},[t._v("LevelPolicyObject")]),t._v("}")])]),t._v(" "),a("p",[t._v("一组键值对，每个键是一个字符串形式的数字（JSON 的要求），比如 "),a("code",[t._v('"0"')]),t._v("、"),a("code",[t._v('"1"')]),t._v(" 等，双引号不能省略，这个数字对应用户等级。每一个值是一个 "),a("a",{attrs:{href:"#levelpolicyobject"}},[t._v("LevelPolicyObject")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("每个入站出站代理现在都可以设置用户等级，V2Ray 会根据实际的用户等级应用不同的本地策略。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("system")]),t._v(": "),a("a",{attrs:{href:"#systempolicyobject"}},[t._v("SystemPolicyObject")])])]),t._v(" "),a("p",[t._v("V2Ray 系统的策略")]),t._v(" "),a("h3",{attrs:{id:"levelpolicyobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#levelpolicyobject"}},[t._v("#")]),t._v(" LevelPolicyObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"handshake"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connIdle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uplinkOnly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"downlinkOnly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bufferSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("handshake")]),t._v(": number")])]),t._v(" "),a("p",[t._v("连接建立时的握手时间限制。单位为秒。默认值为 "),a("code",[t._v("4")]),t._v("。在入站代理处理一个新连接时，在握手阶段（比如 VMess 读取头部数据，判断目标服务器地址），如果使用的时间超过这个时间，则中断该连接。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("connIdle")]),t._v(": number")])]),t._v(" "),a("p",[t._v("连接空闲的时间限制。单位为秒。默认值为 "),a("code",[t._v("300")]),t._v("。在入站出站代理处理一个连接时，如果在 "),a("code",[t._v("connIdle")]),t._v(" 时间内，没有任何数据被传输（包括上行和下行数据），则中断该连接。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("uplinkOnly")]),t._v(": number")])]),t._v(" "),a("p",[t._v("当连接下行线路关闭后的时间限制。单位为秒。默认值为 "),a("code",[t._v("2")]),t._v("。当服务器（如远端网站）关闭下行连接时，出站代理会在等待 "),a("code",[t._v("uplinkOnly")]),t._v(" 时间后中断连接。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("downlinkOnly")]),t._v(": number")])]),t._v(" "),a("p",[t._v("当连接上行线路关闭后的时间限制。单位为秒。默认值为 "),a("code",[t._v("5")]),t._v("。当客户端（如浏览器）关闭上行连接时，入站代理会在等待 "),a("code",[t._v("downlinkOnly")]),t._v(" 时间后中断连接。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 HTTP 浏览的场景中，可以将 "),a("code",[t._v("uplinkOnly")]),t._v(" 和 "),a("code",[t._v("downlinkOnly")]),t._v(" 设为 "),a("code",[t._v("0")]),t._v("，以提高连接关闭的效率。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("statsUserUplink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v("true")]),t._v(" 时，开启当前等级的所有用户的上行流量统计。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("statsUserDownlink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v("true")]),t._v(" 时，开启当前等级的所有用户的下行流量统计。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("bufferSize")]),t._v(": number")])]),t._v(" "),a("p",[t._v("每个连接的内部缓存大小。单位为 kB。当值为 "),a("code",[t._v("0")]),t._v(" 时，内部缓存被禁用。")]),t._v(" "),a("p",[t._v("默认值 (V2Ray 4.4+):")]),t._v(" "),a("ul",[a("li",[t._v("在 ARM、MIPS、MIPSLE 平台上，默认值为 "),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("li",[t._v("在 ARM64、MIPS64、MIPS64LE 平台上，默认值为 "),a("code",[t._v("4")]),t._v("。")]),t._v(" "),a("li",[t._v("在其它平台上，默认值为 "),a("code",[t._v("512")]),t._v("。")])]),t._v(" "),a("p",[t._v("默认值 (V2Ray 4.3-):")]),t._v(" "),a("ul",[a("li",[t._v("在 ARM、MIPS、MIPSLE、ARM64、MIPS64、MIPS64LE 平台上，默认值为 "),a("code",[t._v("16")]),t._v("。")]),t._v(" "),a("li",[t._v("在其它平台上，默认值为 "),a("code",[t._v("2048")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("bufferSize")]),t._v(" 选项会覆盖 "),a("RouterLink",{attrs:{to:"/chapter_02/env.html#每个连接的缓存大小"}},[t._v("环境变量")]),t._v("中 "),a("code",[t._v("v2ray.ray.buffer.size")]),t._v(" 的设定。")],1)]),t._v(" "),a("h3",{attrs:{id:"systempolicyobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systempolicyobject"}},[t._v("#")]),t._v(" SystemPolicyObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundUplink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundDownlink"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("statsInboundUplink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v("true")]),t._v(" 时，开启所有入站代理的上行流量统计。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("statsInboundDownlink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v("true")]),t._v(" 时，开启所有入站代理的下行流量统计。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("statsOutboundUplink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("（ V2Ray 4.26.0+ ）当值为 "),a("code",[t._v("true")]),t._v(" 时，开启所有出站代理的上行流量统计。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("statsOutboundDownlink")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("（ V2Ray 4.26.0+ ） 当值为 "),a("code",[t._v("true")]),t._v(" 时，开启所有出站代理的下行流量统计。")])])}),[],!1,null,null,null);s.default=n.exports}}]);