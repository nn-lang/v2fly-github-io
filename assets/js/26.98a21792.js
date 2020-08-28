(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{398:function(t,s,a){"use strict";a.r(s);var r=a(18),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vless"}},[t._v("#")]),t._v(" VLESS")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("vless")])]),t._v(" "),a("li",[t._v("类型：入站 / 出站")])]),t._v(" "),a("p",[a("strong",[t._v("当前版本：VLESS PREVIEW 1.5（v2ray-core v4.27.2+）")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("目前 VLESS 没有自带加密，请用于可靠信道，如 TLS。"),a("br"),t._v("\nVLESS 处于公测阶段，测试期间请确保客户端与服务端的 v2ray-core 均为最新版本。"),a("br"),t._v("\nVLESS 的内测仓库为 "),a("a",{attrs:{href:"https://github.com/rprx/v2ray-vless",target:"_blank",rel:"noopener noreferrer"}},[t._v("rprx/v2ray-vless"),a("OutboundLink")],1),t._v("，其中 PREVIEW 系列的新版本会在发布一段时间后并入 "),a("a",{attrs:{href:"https://github.com/v2fly/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2fly/v2ray-core"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 V2Ray 客户端和服务器之间的桥梁。")]),t._v(" "),a("p",[t._v("与 "),a("RouterLink",{attrs:{to:"/config/protocols/vmess.html"}},[t._v("VMess")]),t._v(" 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId。")],1),t._v(" "),a("p",[t._v("VLESS 的配置分为两部分，"),a("code",[t._v("InboundConfigurationObject")]),t._v(" 和 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的 "),a("code",[t._v("settings")]),t._v(" 项。")]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("vnext")]),t._v(": [ "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，包含一系列指向服务端的配置。")]),t._v(" "),a("h3",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("地址，指向服务端，支持域名、IPv4、IPv6。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("端口，通常与服务端监听的端口相同。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("users")]),t._v(": [ "),a("a",{attrs:{href:"#userobject"}},[t._v("UserObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一组服务端认可的用户。")]),t._v(" "),a("h3",{attrs:{id:"userobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userobject"}},[t._v("#")]),t._v(" UserObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("id")]),t._v(": string")])]),t._v(" "),a("p",[t._v("VLESS 的用户 ID，必须是一个合法的 UUID，你可以用 "),a("RouterLink",{attrs:{to:"/awesome/tools.html#在线工具"}},[t._v("在线工具")]),t._v(" 生成它。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("encryption")]),t._v(': "none"')])]),t._v(" "),a("p",[t._v("现阶段需要填 "),a("code",[t._v('"none"')]),t._v("，不能留空。该要求是为了提醒使用者没有加密，也为了以后出加密方式时，防止使用者填错属性名或填错位置导致裸奔。"),a("br"),t._v("\n若未正确设置 encryption 的值，使用 v2ray 或 -test 时会收到错误信息。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，详见 "),a("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"decryption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fallbacks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("clients")]),t._v(": [ "),a("a",{attrs:{href:"#clientobject"}},[t._v("ClientObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一组服务端认可的用户。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("decryption")]),t._v(': "none"')])]),t._v(" "),a("p",[t._v("注意这里是 decryption，和 clients 同级。现阶段同样需要填 "),a("code",[t._v('"none"')]),t._v("，不能留空。decryption 和 encryption 的位置不同，是因为若套一层约定加密，服务端需要先解密才能知道是哪个用户。"),a("br"),t._v("\n若未正确设置 decryption 的值，使用 v2ray 或 -test 时会收到错误信息。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("fallbacks")]),t._v(": [ "),a("a",{attrs:{href:"#fallbackobject"}},[t._v("FallbackObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("可选 & 强烈建议使用：基于首包长度分流（VLESS 原创）的新型协议回落模式，相较于其它协议回落方案，更简洁、高效、安全，功能也更强大。")]),t._v(" "),a("h3",{attrs:{id:"clientobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientobject"}},[t._v("#")]),t._v(" ClientObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("id")]),t._v(": string")])]),t._v(" "),a("p",[t._v("VLESS 的用户 ID，必须是一个合法的 UUID，你也可以用 "),a("RouterLink",{attrs:{to:"/guide/command.html#v2ctl"}},[t._v("V2Ctl")]),t._v(" 生成它。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，详见 "),a("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("用户邮箱，用于区分不同用户的流量（日志、统计）。")]),t._v(" "),a("h2",{attrs:{id:"fallbackobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fallbackobject"}},[t._v("#")]),t._v(" FallbackObject")]),t._v(" "),a("p",[a("strong",[t._v("强烈建议使用：基于首包长度分流（VLESS 原创）的新型协议回落模式，相较于其它协议回落方案，更简洁、高效、安全，功能也更强大。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"xver"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("fallbacks")])]),t._v(" 项是可选的，只能用于 TCP+TLS 传输组合。"),a("strong",[t._v("该项有子元素时，"),a("RouterLink",{attrs:{to:"/config/transport.html#tlsobject"}},[t._v("inbound TLS")]),t._v(" 需设置 "),a("code",[t._v('"alpn":["http/1.1"]')]),t._v("。")],1),a("br"),t._v("\nVLESS 会把首包长度 < 18，或协议版本无效或身份认证失败的流量转发到 "),a("code",[t._v("dest")]),t._v(" 指定的地址。"),a("br"),t._v("\n其它传输组合 "),a("strong",[t._v("必须删掉该项或所有子元素")]),t._v("，此时也不会开启协议回落模式，VLESS 会等待读够所需长度，协议版本无效或身份认证失败时，将直接断开连接。")]),t._v(" "),a("p",[t._v("注意："),a("strong",[a("code",[t._v("fallbacks")])]),t._v(" 是一个数组（v4.27.2+），这里是子元素的配置说明，参数不同于以前的 "),a("code",[t._v("fallback")]),t._v("。"),a("br"),t._v("\n通常，你需要先设置一组 "),a("code",[t._v("alpn")]),t._v(" 和 "),a("code",[t._v("path")]),t._v(" 均省略或为空的默认回落，然后再按需配置其它回落。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("alpn")]),t._v(": string")])]),t._v(" "),a("p",[t._v("（新手先忽略）尝试匹配 TLS ALPN "),a("strong",[t._v("协商结果")]),t._v("，空为任意，默认为空。建议只按需用两种值：留空或填 "),a("code",[t._v('"h2"')]),t._v("。")]),t._v(" "),a("p",[t._v("智能说明：有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info "),a("code",[t._v("realAlpn =")]),t._v(" 到日志。"),a("br"),t._v("\n实际用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，此时需要开两个 http 服务，分别是 1.1 和 2。"),a("br"),t._v("\n注意事项：fallbacks alpn 存在 "),a("code",[t._v('"h2"')]),t._v(" 时，"),a("RouterLink",{attrs:{to:"/config/transport.html#tlsobject"}},[t._v("inbound TLS")]),t._v(" 需设置 "),a("code",[t._v('"alpn":["h2","http/1.1"]')]),t._v("，以支持 h2 访问。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("path")]),t._v(": string")])]),t._v(" "),a("p",[t._v("（新手先忽略）尝试匹配首包中的 HTTP PATH，空为任意，默认为空。非空必须以 "),a("code",[t._v('"/"')]),t._v(" 开头，暂不支持 h2c。")]),t._v(" "),a("p",[t._v("智能说明：有需要时，VLESS 才会尝试看一眼 PATH（最快算法，并不完整解析 HTTP），若成功，输出 info "),a("code",[t._v("realPath =")]),t._v(" 到日志。"),a("br"),t._v("\n实际用途：分流其它 inbound 的 WebSocket 流量或 HTTP 伪装流量，没有多余处理、纯粹转发流量，实测比 Nginx 反代更强。"),a("br"),t._v("\n注意事项："),a("strong",[t._v("千万注意 fallbacks 所在入站本身必须是 TCP+TLS")]),t._v("，这是分流至其它 WS 入站用的，被分流的入站则无需配置 TLS 了。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("dest")]),t._v(": string | number")])]),t._v(" "),a("p",[t._v("决定流量的去向，目前支持两类地址：（该项必填，否则无法启动）")]),t._v(" "),a("ol",[a("li",[t._v("TCP，格式为 "),a("code",[t._v('"addr:port"')]),t._v("，其中 addr 支持域名、IPv4、IPv6，若填写域名，将直接发起连接（而不走内置的 DNS）。")]),t._v(" "),a("li",[t._v("Unix domain socket，格式为绝对路径，形如 "),a("code",[t._v('"/dev/shm/domain.socket"')]),t._v("，可在开头加 "),a("code",[t._v('"@"')]),t._v(" 代表 "),a("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("abstract"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("若只填 port，数字或字符串均可，形如 "),a("code",[t._v("80")]),t._v("、"),a("code",[t._v('"80"')]),t._v("，通常指向一个明文 http 服务（addr 会被补为 "),a("code",[t._v('"127.0.0.1"')]),t._v("）。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("xver")]),t._v(": number")])]),t._v(" "),a("p",[t._v("（新手先忽略）发送 "),a("a",{attrs:{href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("PROXY protocol"),a("OutboundLink")],1),t._v("，专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不启用。")]),t._v(" "),a("p",[t._v("目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。若有需要建议填 1。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若你正在 "),a("a",{attrs:{href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 Nginx 接收 PROXY protocol"),a("OutboundLink")],1),t._v("，除了设置 proxy_protocol 外，还需设置 set_real_ip_from，否则可能会出问题。")])]),t._v(" "),a("h2",{attrs:{id:"一些说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些说明"}},[t._v("#")]),t._v(" 一些说明")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/v2fly/v2ray-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2ray-examples"),a("OutboundLink")],1),t._v(" 有完整的 VLESS 配置示例供参考。（但目前不能保证其它协议的配置示例质量）")]),t._v(" "),a("p",[t._v("待补充")]),t._v(" "),a("h2",{attrs:{id:"新型协议回落模式解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新型协议回落模式解析"}},[t._v("#")]),t._v(" 新型协议回落模式解析")]),t._v(" "),a("p",[t._v("待补充")]),t._v(" "),a("h2",{attrs:{id:"客户端指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端指引"}},[t._v("#")]),t._v(" 客户端指引")]),t._v(" "),a("ol",[a("li",[t._v("VLESS 协议本身还会有不兼容升级，但客户端配置文件参数基本上是只增不减的。"),a("strong",[t._v("所以如果你开发了用 core 的客户端，现在就可以适配。")]),t._v(" iOS 客户端的协议实现则需紧跟升级。")]),t._v(" "),a("li",[a("strong",[t._v("视觉标准：UI 标识请统一用 VLESS")]),t._v("，而不是 VLess / Vless / vless，配置文件不受影响，代码内则顺其自然。")]),t._v(" "),a("li",[a("code",[t._v("encryption")]),t._v(" 应做成输入框而不是选择框，新配置的默认值应为 "),a("code",[t._v("none")]),t._v("，若用户置空则应代填 "),a("code",[t._v("none")]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("以下为已支持图形化配置 VLESS 的部分客户端列表，推荐使用：")]),t._v("（按实现时间先后顺序排列）")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qv2ray"),a("OutboundLink")],1),t._v("（v2.6.3+），支持 Linux、macOS、Windows")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/2dust/v2rayN",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayN"),a("OutboundLink")],1),t._v("（v3.21+），支持 Windows")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/2dust/v2rayNG",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayNG"),a("OutboundLink")],1),t._v("（v1.3.0+），支持 Android")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/xiaorouji/openwrt-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("PassWall"),a("OutboundLink")],1),t._v("（v3.9.35+），支持 OpenWrt")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mzz2017/v2rayA",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2rayA"),a("OutboundLink")],1),t._v("（v1.0.0+），支持 Linux")])]),t._v(" "),a("h2",{attrs:{id:"vless-分享链接标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vless-分享链接标准"}},[t._v("#")]),t._v(" VLESS 分享链接标准")]),t._v(" "),a("p",[t._v("v2ray-core v4.28.0 会增强 TLS，VLESS 的分享链接标准也会同时出炉。为了避免生态混乱，在此之前请勿支持分享，更勿自创分享链接方案。")])])}),[],!1,null,null,null);s.default=e.exports}}]);