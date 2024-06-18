"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[35378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Query Lifecycle",s={unversionedId:"learn/beginner/query-lifecycle",id:"learn/beginner/query-lifecycle",title:"Query Lifecycle",description:"This document describes the lifecycle of a query in a Cosmos SDK application, from the user interface to application stores and back. The query is referred to as MyQuery.",source:"@site/docs/learn/beginner/02-query-lifecycle.md",sourceDirName:"learn/beginner",slug:"/learn/beginner/query-lifecycle",permalink:"/main/learn/beginner/query-lifecycle",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Transaction Lifecycle",permalink:"/main/learn/beginner/tx-lifecycle"},next:{title:"Accounts",permalink:"/main/learn/beginner/accounts"}},l={},p=[{value:"Query Creation",id:"query-creation",level:2},{value:"CLI",id:"cli",level:3},{value:"gRPC",id:"grpc",level:3},{value:"REST",id:"rest",level:3},{value:"How Queries are Handled by the CLI",id:"how-queries-are-handled-by-the-cli",level:2},{value:"Context",id:"context",level:3},{value:"Arguments and Route Creation",id:"arguments-and-route-creation",level:3},{value:"Encoding",id:"encoding",level:4},{value:"gRPC Query Client Creation",id:"grpc-query-client-creation",level:4},{value:"RPC",id:"rpc",level:2},{value:"Application Query Handling",id:"application-query-handling",level:2},{value:"Response",id:"response",level:2},{value:"CLI Response",id:"cli-response",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-lifecycle"},"Query Lifecycle"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document describes the lifecycle of a query in a Cosmos SDK application, from the user interface to application stores and back. The query is referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery"),".")),(0,r.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/learn/beginner/tx-lifecycle"},"Transaction Lifecycle")))),(0,r.kt)("h2",{id:"query-creation"},"Query Creation"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/messages-and-queries#queries"},(0,r.kt)("strong",{parentName:"a"},"query"))," is a request for information made by end-users of applications through an interface and processed by a full-node. Users can query information about the network, the application itself, and application state directly from the application's stores or modules. Note that queries are different from ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/transactions"},"transactions")," (view the lifecycle ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/beginner/tx-lifecycle"},"here"),"), particularly in that they do not require consensus to be processed (as they do not trigger state-transitions); they can be fully handled by one full-node."),(0,r.kt)("p",null,"For the purpose of explaining the query lifecycle, let's say the query, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery"),", is requesting a list of delegations made by a certain delegator address in the application called ",(0,r.kt)("inlineCode",{parentName:"p"},"simapp"),". As is to be expected, the ",(0,r.kt)("a",{parentName:"p",href:"/main/build/modules/staking/"},(0,r.kt)("inlineCode",{parentName:"a"},"staking"))," module handles this query. But first, there are a few ways ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," can be created by users."),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("p",null,"The main interface for an application is the command-line interface. Users connect to a full-node and run the CLI directly from their machines - the CLI interacts directly with the full-node. To create ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," from their terminal, users type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd query staking delegations <delegatorAddress>\n")),(0,r.kt)("p",null,"This query command was defined by the ",(0,r.kt)("a",{parentName:"p",href:"/main/build/modules/staking/"},(0,r.kt)("inlineCode",{parentName:"a"},"staking"))," module developer and added to the list of subcommands by the application developer when creating the CLI."),(0,r.kt)("p",null,"Note that the general format is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd query [moduleName] [command] <arguments> --flag <flagArg>\n")),(0,r.kt)("p",null,"To provide values such as ",(0,r.kt)("inlineCode",{parentName:"p"},"--node")," (the full-node the CLI connects to), the user can use the ",(0,r.kt)("a",{parentName:"p",href:"/main/user/run-node/run-node#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml"))," config file to set them or provide them as flags."),(0,r.kt)("p",null,"The CLI understands a specific set of commands, defined in a hierarchical structure by the application developer: from the ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/cli#root-command"},"root command")," (",(0,r.kt)("inlineCode",{parentName:"p"},"simd"),"), the type of command (",(0,r.kt)("inlineCode",{parentName:"p"},"Myquery"),"), the module that contains the command (",(0,r.kt)("inlineCode",{parentName:"p"},"staking"),"), and command itself (",(0,r.kt)("inlineCode",{parentName:"p"},"delegations"),"). Thus, the CLI knows exactly which module handles this command and directly passes the call there."),(0,r.kt)("h3",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"Another interface through which users can make queries is ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC")," requests to a ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/grpc_rest#grpc-server"},"gRPC server"),". The endpoints are defined as ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers")," service methods inside ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," files, written in Protobuf's own language-agnostic interface definition language (IDL). The Protobuf ecosystem developed tools for code-generation from ",(0,r.kt)("inlineCode",{parentName:"p"},"*.proto")," files into various languages. These tools allow to build gRPC clients easily."),(0,r.kt)("p",null,"One such tool is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl"),", and a gRPC request for ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," using this client looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl \\\n    -plaintext                                           # We want results in plain test\n    -import-path ./proto \\                               # Import these .proto files\n    -proto ./proto/cosmos/staking/v1beta1/query.proto \\  # Look into this .proto file for the Query protobuf service\n    -d \'{"address":"$MY_DELEGATOR"}\' \\                   # Query arguments\n    localhost:9090 \\                                     # gRPC server endpoint\n    cosmos.staking.v1beta1.Query/Delegations             # Fully-qualified service method name\n')),(0,r.kt)("h3",{id:"rest"},"REST"),(0,r.kt)("p",null,"Another interface through which users can make queries is through HTTP Requests to a ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/grpc_rest#rest-server"},"REST server"),". The REST server is fully auto-generated from Protobuf services, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"gRPC-gateway"),"."),(0,r.kt)("p",null,"An example HTTP request for ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:1317/cosmos/staking/v1beta1/delegators/{delegatorAddr}/delegations\n")),(0,r.kt)("h2",{id:"how-queries-are-handled-by-the-cli"},"How Queries are Handled by the CLI"),(0,r.kt)("p",null,"The preceding examples show how an external user can interact with a node by querying its state. To understand in more detail the exact lifecycle of a query, let's dig into how the CLI prepares the query, and how the node handles it. The interactions from the users' perspective are a bit different, but the underlying functions are almost identical because they are implementations of the same command defined by the module developer. This step of processing happens within the CLI, gRPC, or REST server, and heavily involves a ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context"),"."),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"The first thing that is created in the execution of a CLI command is a ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," is an object that stores all the data needed to process a request on the user side. In particular, a ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," stores the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Codec"),": The ",(0,r.kt)("a",{parentName:"li",href:"/main/learn/advanced/encoding"},"encoder/decoder")," used by the application, used to marshal the parameters and query before making the CometBFT RPC request and unmarshal the returned response into a JSON object. The default codec used by the CLI is Protobuf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account Decoder"),": The account decoder from the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/build/modules/auth"},(0,r.kt)("inlineCode",{parentName:"a"},"auth"))," module, which translates ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte"),"s into accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RPC Client"),": The CometBFT RPC Client, or node, to which requests are relayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyring"),": A ",(0,r.kt)("a",{parentName:"li",href:"/main/learn/beginner/accounts#keyring"},"Key Manager")," used to sign transactions and handle other operations with keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output Writer"),": A ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/io/#Writer"},"Writer")," used to output the response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configurations"),": The flags configured by the user for this command, including ",(0,r.kt)("inlineCode",{parentName:"li"},"--height"),", specifying the height of the blockchain to query, and ",(0,r.kt)("inlineCode",{parentName:"li"},"--indent"),", which indicates to add an indent to the JSON response.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," also contains various functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Query()"),", which retrieves the RPC Client and makes an ABCI call to relay a query to a full-node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/client/context.go#L25-L68\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context"),"'s primary role is to store data used during interactions with the end-user and provide methods to interact with this data - it is used before and after the query is processed by the full-node. Specifically, in handling ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," is utilized to encode the query parameters, retrieve the full-node, and write the output. Prior to being relayed to a full-node, the query needs to be encoded into a ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," form, as full-nodes are application-agnostic and do not understand specific types. The full-node (RPC Client) itself is retrieved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context"),", which knows which node the user CLI is connected to. The query is relayed to this full-node to be processed. Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Writer")," to write output when the response is returned. These steps are further described in later sections."),(0,r.kt)("h3",{id:"arguments-and-route-creation"},"Arguments and Route Creation"),(0,r.kt)("p",null,"At this point in the lifecycle, the user has created a CLI command with all of the data they wish to include in their query. A ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," exists to assist in the rest of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery"),"'s journey. Now, the next step is to parse the command or request, extract the arguments, and encode everything. These steps all happen on the user side within the interface they are interacting with."),(0,r.kt)("h4",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"In our case (querying an address's delegations), ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," contains an ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/beginner/accounts#addresses"},"address")," ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatorAddress")," as its only argument. However, the request can only contain ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte"),"s, as it is ultimately relayed to a consensus engine (e.g. CometBFT) of a full-node that has no inherent knowledge of the application types. Thus, the ",(0,r.kt)("inlineCode",{parentName:"p"},"codec")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," is used to marshal the address."),(0,r.kt)("p",null,"Here is what the code looks like for the CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/staking/client/cli/query.go#L315-L318\n")),(0,r.kt)("h4",{id:"grpc-query-client-creation"},"gRPC Query Client Creation"),(0,r.kt)("p",null,"The Cosmos SDK leverages code generated from Protobuf services to make queries. The ",(0,r.kt)("inlineCode",{parentName:"p"},"staking")," module's ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," service generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"queryClient"),", which the CLI uses to make queries. Here is the relevant code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/staking/client/cli/query.go#L308-L343\n")),(0,r.kt)("p",null,"Under the hood, the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Query()")," function used to retrieve the pre-configured node and relay a query to it; the function takes the query fully-qualified service method name as path (in our case: ",(0,r.kt)("inlineCode",{parentName:"p"},"/cosmos.staking.v1beta1.Query/Delegations"),"), and arguments as parameters. It first retrieves the RPC Client (called the ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/node"},(0,r.kt)("strong",{parentName:"a"},"node")),") configured by the user to relay this query to, and creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIQueryOptions")," (parameters formatted for the ABCI call). The node is then used to make the ABCI call, ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIQueryWithOptions()"),"."),(0,r.kt)("p",null,"Here is what the code looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/client/query.go#L79-L113\n")),(0,r.kt)("h2",{id:"rpc"},"RPC"),(0,r.kt)("p",null,"With a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"ABCIQueryWithOptions()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," is received by a ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/encoding"},"full-node")," which then processes the request. Note that, while the RPC is made to the consensus engine (e.g. CometBFT) of a full-node, queries are not part of consensus and so are not broadcasted to the rest of the network, as they do not require anything the network needs to agree upon."),(0,r.kt)("p",null,"Read more about ABCI Clients and CometBFT RPC in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/spec/rpc/"},"CometBFT documentation"),"."),(0,r.kt)("h2",{id:"application-query-handling"},"Application Query Handling"),(0,r.kt)("p",null,"When a query is received by the full-node after it has been relayed from the underlying consensus engine, it is at that point being handled within an environment that understands application-specific types and has a copy of the state. ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/baseapp"},(0,r.kt)("inlineCode",{parentName:"a"},"baseapp"))," implements the ABCI ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/baseapp#query"},(0,r.kt)("inlineCode",{parentName:"a"},"Query()"))," function and handles gRPC queries. The query route is parsed, and it matches the fully-qualified service method name of an existing service method (most likely in one of the modules), then ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," relays the request to the relevant module."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQuery")," has a Protobuf fully-qualified service method name from the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking")," module (recall ",(0,r.kt)("inlineCode",{parentName:"p"},"/cosmos.staking.v1beta1.Query/Delegations"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," first parses the path, then uses its own internal ",(0,r.kt)("inlineCode",{parentName:"p"},"GRPCQueryRouter")," to retrieve the corresponding gRPC handler, and routes the query to the module. The gRPC handler is responsible for recognizing this query, retrieving the appropriate values from the application's stores, and returning a response. Read more about query services ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/query-services"},"here"),"."),(0,r.kt)("p",null,"Once a result is received from the querier, ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," begins the process of returning a response to the user."),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"Query()")," is an ABCI function, ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," returns the response as an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/spec/abci/abci++_app_requirements#query"},(0,r.kt)("inlineCode",{parentName:"a"},"abci.QueryResponse"))," type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Query()")," routine receives the response."),(0,r.kt)("h3",{id:"cli-response"},"CLI Response"),(0,r.kt)("p",null,"The application ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/encoding"},(0,r.kt)("inlineCode",{parentName:"a"},"codec"))," is used to unmarshal the response to a JSON and the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.Context")," prints the output to the command line, applying any configurations such as the output type (text, JSON or YAML)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/client/context.go#L341-L349\n")),(0,r.kt)("p",null,"And that's a wrap! The result of the query is outputted to the console by the CLI."))}u.isMDXComponent=!0}}]);