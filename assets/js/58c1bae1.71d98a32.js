"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[29912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,h=c["".concat(s,".").concat(p)]||c[p]||d[p]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={},o="ADR 058: Auto-Generated CLI",l={unversionedId:"build/architecture/adr-058-auto-generated-cli",id:"version-0.47/build/architecture/adr-058-auto-generated-cli",title:"ADR 058: Auto-Generated CLI",description:"Changelog",source:"@site/versioned_docs/version-0.47/build/architecture/adr-058-auto-generated-cli.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-058-auto-generated-cli",permalink:"/v0.47/build/architecture/adr-058-auto-generated-cli",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 057: App Wiring",permalink:"/v0.47/build/architecture/adr-057-app-wiring"},next:{title:"ADR 059: Test Scopes",permalink:"/v0.47/build/architecture/adr-059-test-scopes"}},s={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-058-auto-generated-cli"},"ADR 058: Auto-Generated CLI"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022-05-04: Initial Draft")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"ACCEPTED Partially Implemented"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"In order to make it easier for developers to write Cosmos SDK modules, we provide infrastructure which automatically\ngenerates CLI commands based on protobuf definitions."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Current Cosmos SDK modules generally implement a CLI command for every transaction and every query supported by the\nmodule. These are handwritten for each command and essentially amount to providing some CLI flags or positional\narguments for specific fields in protobuf messages."),(0,i.kt)("p",null,"In order to make sure CLI commands are correctly implemented as well as to make sure that the application works\nin end-to-end scenarios, we do integration tests using CLI commands. While these tests are valuable on some-level,\nthey can be hard to write and maintain, and run slowly. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/issues/1041"},"Some teams have contemplated"),"\nmoving away from CLI-style integration tests (which are really end-to-end tests) towards narrower integration tests\nwhich exercise ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgClient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," directly. This might involve replacing the current end-to-end CLI\ntests with unit tests as there still needs to be some way to test these CLI commands for full quality assurance."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"To make module development simpler, we provide infrastructure - in the new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/client/v2"},(0,i.kt)("inlineCode",{parentName:"a"},"client/v2")),"\ngo module - for automatically generating CLI commands based on protobuf definitions to either replace or complement\nhandwritten CLI commands. This will mean that when developing a module, it will be possible to skip both writing and\ntesting CLI commands as that can all be taken care of by the framework."),(0,i.kt)("p",null,"The basic design for automatically generating CLI commands is to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create one CLI command for each ",(0,i.kt)("inlineCode",{parentName:"li"},"rpc")," method in a protobuf ",(0,i.kt)("inlineCode",{parentName:"li"},"Query")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg")," service"),(0,i.kt)("li",{parentName:"ul"},"create a CLI flag for each field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"rpc")," request type"),(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," commands call gRPC and print the response as protobuf JSON or YAML (via the ",(0,i.kt)("inlineCode",{parentName:"li"},"-o"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"--output")," flag)"),(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"tx")," commands, create a transaction and apply common transaction flags")),(0,i.kt)("p",null,"In order to make the auto-generated CLI as easy to use (or easier) than handwritten CLI, we need to do custom handling\nof specific protobuf field types so that the input format is easy for humans:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Coin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Coins"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DecCoin"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"DecCoins")," should be input using the existing format (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"1000uatom"),")"),(0,i.kt)("li",{parentName:"ul"},"it should be possible to specify an address using either the bech32 address string or a named key in the keyring"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Timestamp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Duration")," should accept strings like ",(0,i.kt)("inlineCode",{parentName:"li"},"2001-01-01T00:00:00Z")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"1h3m")," respectively"),(0,i.kt)("li",{parentName:"ul"},"pagination should be handled with flags like ",(0,i.kt)("inlineCode",{parentName:"li"},"--page-limit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--page-offset"),", etc."),(0,i.kt)("li",{parentName:"ul"},"it should be possible to customize any other protobuf type either via its message name or a ",(0,i.kt)("inlineCode",{parentName:"li"},"cosmos_proto.scalar")," annotation")),(0,i.kt)("p",null,"At a basic level it should be possible to generate a command for a single ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc")," method as well as all the commands for\na whole protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," definition. It should be possible to mix and match auto-generated and handwritten commands."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"Existing modules can mix and match auto-generated and handwritten CLI commands so it is up to them as to whether they\nmake breaking changes by replacing handwritten commands with slightly different auto-generated ones."),(0,i.kt)("p",null,"For now the SDK will maintain the existing set of CLI commands for backwards compatibility but new commands will use\nthis functionality."),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"module developers will not need to write CLI commands"),(0,i.kt)("li",{parentName:"ul"},"module developers will not need to test CLI commands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strangelove-ventures/lens"},"lens")," may benefit from this")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.kt)("p",null,"We would like to be able to customize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"short and long usage strings for commands"),(0,i.kt)("li",{parentName:"ul"},"aliases for flags (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"-a")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"--amount"),")"),(0,i.kt)("li",{parentName:"ul"},"which fields are positional parameters rather than flags")),(0,i.kt)("p",null,"It is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/11725#issuecomment-1108676129"},"open discussion"),"\nas to whether these customizations options should line in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the .proto files themselves,"),(0,i.kt)("li",{parentName:"ul"},"separate config files (ex. YAML), or"),(0,i.kt)("li",{parentName:"ul"},"directly in code")),(0,i.kt)("p",null,"Providing the options in .proto files would allow a dynamic client to automatically generate\nCLI commands on the fly. However, that may pollute the .proto files themselves with information that is only relevant\nfor a small subset of users."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/regen-network/regen-ledger/issues/1041"},"https://github.com/regen-network/regen-ledger/issues/1041")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/main/client/v2"},"https://github.com/cosmos/cosmos-sdk/tree/main/client/v2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/11725#issuecomment-1108676129"},"https://github.com/cosmos/cosmos-sdk/pull/11725#issuecomment-1108676129"))))}d.isMDXComponent=!0}}]);