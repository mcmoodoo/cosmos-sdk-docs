"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[27092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1},s="Transaction Lifecycle",r={unversionedId:"learn/beginner/tx-lifecycle",id:"version-0.50/learn/beginner/tx-lifecycle",title:"Transaction Lifecycle",description:"This document describes the lifecycle of a transaction from creation to committed state changes. Transaction definition is described in a different doc. The transaction is referred to as Tx.",source:"@site/versioned_docs/version-0.50/learn/beginner/01-tx-lifecycle.md",sourceDirName:"learn/beginner",slug:"/learn/beginner/tx-lifecycle",permalink:"/v0.50/learn/beginner/tx-lifecycle",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Anatomy of a Cosmos SDK Application",permalink:"/v0.50/learn/beginner/app-anatomy"},next:{title:"Query Lifecycle",permalink:"/v0.50/learn/beginner/query-lifecycle"}},l={},p=[{value:"Creation",id:"creation",level:2},{value:"Transaction Creation",id:"transaction-creation",level:3},{value:"Gas and Fees",id:"gas-and-fees",level:4},{value:"CLI Example",id:"cli-example",level:4},{value:"Other Transaction Creation Methods",id:"other-transaction-creation-methods",level:4},{value:"Addition to Mempool",id:"addition-to-mempool",level:2},{value:"Types of Checks",id:"types-of-checks",level:3},{value:"Decoding",id:"decoding",level:3},{value:"ValidateBasic (deprecated)",id:"validatebasic-deprecated",level:3},{value:"Guideline",id:"guideline",level:4},{value:"AnteHandler",id:"antehandler",level:3},{value:"Gas",id:"gas",level:3},{value:"Discard or Addition to Mempool",id:"discard-or-addition-to-mempool",level:3},{value:"Inclusion in a Block",id:"inclusion-in-a-block",level:2},{value:"State Changes",id:"state-changes",level:2},{value:"Transaction Execution",id:"transaction-execution",level:3},{value:"Commit",id:"commit",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This document describes the lifecycle of a transaction from creation to committed state changes. Transaction definition is described in a ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/transactions"},"different doc"),". The transaction is referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),".")),(0,i.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.50/learn/beginner/app-anatomy"},"Anatomy of a Cosmos SDK Application")))),(0,i.kt)("h2",{id:"creation"},"Creation"),(0,i.kt)("h3",{id:"transaction-creation"},"Transaction Creation"),(0,i.kt)("p",null,"One of the main application interfaces is the command-line interface. The transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," can be created by the user inputting a command in the following format from the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/cli"},"command-line"),", providing the type of transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"[command]"),", arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"[args]"),", and configurations such as gas prices in ",(0,i.kt)("inlineCode",{parentName:"p"},"[flags]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[appname] tx [command] [args] [flags]\n")),(0,i.kt)("p",null,"This command automatically ",(0,i.kt)("strong",{parentName:"p"},"creates")," the transaction, ",(0,i.kt)("strong",{parentName:"p"},"signs")," it using the account's private key, and ",(0,i.kt)("strong",{parentName:"p"},"broadcasts")," it to the specified peer node."),(0,i.kt)("p",null,"There are several required and optional flags for transaction creation. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--from")," flag specifies which ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/beginner/accounts"},"account")," the transaction is originating from. For example, if the transaction is sending coins, the funds are drawn from the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," address."),(0,i.kt)("h4",{id:"gas-and-fees"},"Gas and Fees"),(0,i.kt)("p",null,"Additionally, there are several ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/cli"},"flags")," users can use to indicate how much they are willing to pay in ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/beginner/gas-fees"},"fees"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gas")," refers to how much ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/learn/beginner/gas-fees"},"gas"),", which represents computational resources, ",(0,i.kt)("inlineCode",{parentName:"li"},"Tx")," consumes. Gas is dependent on the transaction and is not precisely calculated until execution, but can be estimated by providing ",(0,i.kt)("inlineCode",{parentName:"li"},"auto")," as the value for ",(0,i.kt)("inlineCode",{parentName:"li"},"--gas"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gas-adjustment")," (optional) can be used to scale ",(0,i.kt)("inlineCode",{parentName:"li"},"gas")," up in order to avoid underestimating. For example, users can specify their gas adjustment as 1.5 to use 1.5 times the estimated gas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gas-prices")," specifies how much the user is willing to pay per unit of gas, which can be one or multiple denominations of tokens. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"--gas-prices=0.025uatom, 0.025upho")," means the user is willing to pay 0.025uatom AND 0.025upho per unit of gas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--fees")," specifies how much in fees the user is willing to pay in total."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--timeout-height")," specifies a block timeout height to prevent the tx from being committed past a certain height.")),(0,i.kt)("p",null,"The ultimate value of the fees paid is equal to the gas multiplied by the gas prices. In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"fees = ceil(gas * gasPrices)"),". Thus, since fees can be calculated using gas prices and vice versa, the users specify only one of the two."),(0,i.kt)("p",null,"Later, validators decide whether or not to include the transaction in their block by comparing the given or calculated ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," to their local ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is rejected if its ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," is not high enough, so users are incentivized to pay more."),(0,i.kt)("h4",{id:"cli-example"},"CLI Example"),(0,i.kt)("p",null,"Users of the application ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," can enter the following command into their CLI to generate a transaction to send 1000uatom from a ",(0,i.kt)("inlineCode",{parentName:"p"},"senderAddress")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"recipientAddress"),". The command specifies how much gas they are willing to pay: an automatic estimate scaled up by 1.5 times, with a gas price of 0.025uatom per unit gas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"appd tx send <recipientAddress> 1000uatom --from <senderAddress> --gas auto --gas-adjustment 1.5 --gas-prices 0.025uatom\n")),(0,i.kt)("h4",{id:"other-transaction-creation-methods"},"Other Transaction Creation Methods"),(0,i.kt)("p",null,"The command-line is an easy way to interact with an application, but ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," can also be created using a ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/grpc_rest"},"gRPC or REST interface")," or some other entry point defined by the application developer. From the user's perspective, the interaction depends on the web interface or wallet they are using (e.g. creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," using ",(0,i.kt)("a",{parentName:"p",href:"https://lunie.io/#/"},"Lunie.io")," and signing it with a Ledger Nano S)."),(0,i.kt)("h2",{id:"addition-to-mempool"},"Addition to Mempool"),(0,i.kt)("p",null,"Each full-node (running CometBFT) that receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," sends an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/p2p/messages/"},"ABCI message"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", to the application layer to check for validity, and receives an ",(0,i.kt)("inlineCode",{parentName:"p"},"abci.ResponseCheckTx"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," passes the checks, it is held in the node's\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/p2p/messages/mempool/"},(0,i.kt)("strong",{parentName:"a"},"Mempool")),", an in-memory pool of transactions unique to each node, pending inclusion in a block - honest nodes discard a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," if it is found to be invalid. Prior to consensus, nodes continuously check incoming transactions and gossip them to their peers."),(0,i.kt)("h3",{id:"types-of-checks"},"Types of Checks"),(0,i.kt)("p",null,"The full-nodes perform stateless, then stateful checks on ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," during ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", with the goal to\nidentify and reject an invalid transaction as early on as possible to avoid wasted computation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stateless"))," checks do not require nodes to access state - light clients or offline nodes can do\nthem - and are thus less computationally expensive. Stateless checks include making sure addresses\nare not empty, enforcing nonnegative numbers, and other logic specified in the definitions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stateful"))," checks validate transactions and messages based on a committed state. Examples\ninclude checking that the relevant values exist and can be transacted with, the address\nhas sufficient funds, and the sender is authorized or has the correct ownership to transact.\nAt any given moment, full-nodes typically have ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#state-updates"},"multiple versions"),"\nof the application's internal state for different purposes. For example, nodes execute state\nchanges while in the process of verifying transactions, but still need a copy of the last committed\nstate in order to answer queries - they should not respond using state with uncommitted changes."),(0,i.kt)("p",null,"In order to verify a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", full-nodes call ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", which includes both ",(0,i.kt)("em",{parentName:"p"},"stateless")," and ",(0,i.kt)("em",{parentName:"p"},"stateful"),"\nchecks. Further validation happens later in the ",(0,i.kt)("a",{parentName:"p",href:"#delivertx"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliverTx"))," stage. ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," goes\nthrough several steps, beginning with decoding ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"."),(0,i.kt)("h3",{id:"decoding"},"Decoding"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is received by the application from the underlying consensus engine (e.g. CometBFT ), it is still in its ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/encoding"},"encoded")," ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form and needs to be unmarshaled in order to be processed. Then, the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#runtx-antehandler-runmsgs-posthandler"},(0,i.kt)("inlineCode",{parentName:"a"},"runTx"))," function is called to run in ",(0,i.kt)("inlineCode",{parentName:"p"},"runTxModeCheck")," mode, meaning the function runs all checks but exits before executing messages and writing state changes."),(0,i.kt)("h3",{id:"validatebasic-deprecated"},"ValidateBasic (deprecated)"),(0,i.kt)("p",null,"Messages (",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/transactions#messages"},(0,i.kt)("inlineCode",{parentName:"a"},"sdk.Msg")),") are extracted from transactions (",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface implemented by the module developer is run for each transaction.\nTo discard obviously invalid messages, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," type calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method very early in the processing of the message in the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#checktx"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckTx"))," and ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#delivertx"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliverTx"))," transactions.\n",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," can include only ",(0,i.kt)("strong",{parentName:"p"},"stateless")," checks (the checks that do not require access to the state). "),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method on messages has been deprecated in favor of validating messages directly in their respective ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/build/building-modules/msg-services#Validation"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," services"),"."),(0,i.kt)("p",{parentName:"admonition"},"Read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/rfc/rfc-001-tx-validation"},"RFC 001")," for more details.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," still calls ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," on messages that implements that method for backwards compatibility.")),(0,i.kt)("h4",{id:"guideline"},"Guideline"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," should not be used anymore. Message validation should be performed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service when ",(0,i.kt)("a",{parentName:"p",href:"../../build/building-modules/msg-services#Validation"},"handling a message")," in a module Msg Server."),(0,i.kt)("h3",{id:"antehandler"},"AnteHandler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler"),"s even though optional, are in practice very often used to perform signature verification, gas calculation, fee deduction, and other core operations related to blockchain transactions."),(0,i.kt)("p",null,"A copy of the cached context is provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler"),", which performs limited checks specified for the transaction type. Using a copy allows the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," to do stateful checks for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," without modifying the last committed state, and revert back to the original if the execution fails."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/auth/spec"},(0,i.kt)("inlineCode",{parentName:"a"},"auth"))," module ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," checks and increments sequence numbers, checks signatures and account numbers, and deducts fees from the first signer of the transaction - all state changes are made using the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Ante handlers only run on a transaction. If a transaction embed multiple messages (like some x/authz, x/gov transactions for instance), the ante handlers only have awareness of the outer message. Inner messages are mostly directly routed to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/baseapp#msg-service-router"},"message router")," and will skip the chain of ante handlers. Keep that in mind when designing your own ante handler.")),(0,i.kt)("h3",{id:"gas"},"Gas"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/context"},(0,i.kt)("inlineCode",{parentName:"a"},"Context")),", which keeps a ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," that tracks how much gas is used during the execution of ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", is initialized. The user-provided amount of gas for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is known as ",(0,i.kt)("inlineCode",{parentName:"p"},"GasWanted"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"GasConsumed"),", the amount of gas consumed during execution, ever exceeds ",(0,i.kt)("inlineCode",{parentName:"p"},"GasWanted"),", the execution stops and the changes made to the cached copy of the state are not committed. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," sets ",(0,i.kt)("inlineCode",{parentName:"p"},"GasUsed")," equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"GasConsumed")," and returns it in the result. After calculating the gas and fee values, validator-nodes check that the user-specified ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," is greater than their locally defined ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices"),"."),(0,i.kt)("h3",{id:"discard-or-addition-to-mempool"},"Discard or Addition to Mempool"),(0,i.kt)("p",null,"If at any point during ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," fails, it is discarded and the transaction lifecycle ends\nthere. Otherwise, if it passes ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," successfully, the default protocol is to relay it to peer\nnodes and add it to the Mempool so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," becomes a candidate to be included in the next block."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"mempool")," serves the purpose of keeping track of transactions seen by all full-nodes.\nFull-nodes keep a ",(0,i.kt)("strong",{parentName:"p"},"mempool cache")," of the last ",(0,i.kt)("inlineCode",{parentName:"p"},"mempool.cache_size")," transactions they have seen, as a first line of\ndefense to prevent replay attacks. Ideally, ",(0,i.kt)("inlineCode",{parentName:"p"},"mempool.cache_size")," is large enough to encompass all\nof the transactions in the full mempool. If the mempool cache is too small to keep track of all\nthe transactions, ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," is responsible for identifying and rejecting replayed transactions."),(0,i.kt)("p",null,"Currently existing preventative measures include fees and a ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence")," (nonce) counter to distinguish\nreplayed transactions from identical but valid ones. If an attacker tries to spam nodes with many\ncopies of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", full-nodes keeping a mempool cache reject all identical copies instead of running\n",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," on them. Even if the copies have incremented ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence")," numbers, attackers are\ndisincentivized by the need to pay fees."),(0,i.kt)("p",null,"Validator nodes keep a mempool to prevent replay attacks, just as full-nodes do, but also use it as\na pool of unconfirmed transactions in preparation of block inclusion. Note that even if a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"\npasses all checks at this stage, it is still possible to be found invalid later on, because\n",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," does not fully validate the transaction (that is, it does not actually execute the messages)."),(0,i.kt)("h2",{id:"inclusion-in-a-block"},"Inclusion in a Block"),(0,i.kt)("p",null,"Consensus, the process through which validator nodes come to agreement on which transactions to\naccept, happens in ",(0,i.kt)("strong",{parentName:"p"},"rounds"),". Each round begins with a proposer creating a block of the most\nrecent transactions and ends with ",(0,i.kt)("strong",{parentName:"p"},"validators"),", special full-nodes with voting power responsible\nfor consensus, agreeing to accept the block or go with a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," block instead. Validator nodes\nexecute the consensus algorithm, such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/consensus/"},"CometBFT"),",\nconfirming the transactions using ABCI requests to the application, in order to come to this agreement."),(0,i.kt)("p",null,"The first step of consensus is the ",(0,i.kt)("strong",{parentName:"p"},"block proposal"),". One proposer amongst the validators is chosen\nby the consensus algorithm to create and propose a block - in order for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," to be included, it\nmust be in this proposer's mempool."),(0,i.kt)("h2",{id:"state-changes"},"State Changes"),(0,i.kt)("p",null,"The next step of consensus is to execute the transactions to fully validate them. All full-nodes\nthat receive a block proposal from the correct proposer execute the transactions by calling the ABCI function ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),".\nAs mentioned throughout the documentation ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteTx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock")," are called within FinalizeBlock.\nAlthough every full-node operates individually and locally, the outcome is always consistent and unequivocal. This is because the state changes brought about by the messages are predictable, and the transactions are specifically sequenced in the proposed block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"        --------------------------\n        | Receive Block Proposal |\n        --------------------------\n                    |\n                    v\n        -------------------------\n        |     FinalizeBlock      |\n        -------------------------\n                    |\n                    v\n            -------------------\n            |   BeginBlock     | \n            -------------------\n                    |\n                    v\n            --------------------\n            | ExecuteTx(tx0)   |\n            | ExecuteTx(tx1)   |\n            | ExecuteTx(tx2)   |\n            | ExecuteTx(tx3)   |\n            |       .          |\n            |       .          |\n            |       .          |\n            -------------------\n                    |\n                    v\n            --------------------\n            |    EndBlock      |\n            --------------------\n                    |\n                    v\n        -------------------------\n        |       Consensus        |\n        -------------------------\n                    |\n                    v\n        -------------------------\n        |         Commit         |\n        -------------------------\n")),(0,i.kt)("h3",{id:"transaction-execution"},"Transaction Execution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," ABCI function defined in ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseApp"))," does the bulk of the\nstate transitions: it is run for each transaction in the block in sequential order as committed\nto during consensus. Under the hood, transaction execution is almost identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," but calls the\n",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#runtx"},(0,i.kt)("inlineCode",{parentName:"a"},"runTx"))," function in deliver mode instead of check mode.\nInstead of using their ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState"),", full-nodes use ",(0,i.kt)("inlineCode",{parentName:"p"},"finalizeblock"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Decoding:")," Since ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," is an ABCI call, ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is received in the encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form.\nNodes first unmarshal the transaction, using the ",(0,i.kt)("a",{parentName:"p",href:"./app-anatomy#register-codec"},(0,i.kt)("inlineCode",{parentName:"a"},"TxConfig"))," defined in the app, then call ",(0,i.kt)("inlineCode",{parentName:"p"},"runTx")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"execModeFinalize"),", which is very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," but also executes and writes state changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Checks and ",(0,i.kt)("inlineCode",{parentName:"strong"},"AnteHandler"),":")," Full-nodes call ",(0,i.kt)("inlineCode",{parentName:"p"},"validateBasicMsgs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," again. This second check\nhappens because they may not have seen the same transactions during the addition to Mempool stage\nand a malicious proposer may have included invalid ones. One difference here is that the\n",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," does not compare ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," to the node's ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices")," since that value is local\nto each node - differing values across nodes yield nondeterministic results.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MsgServiceRouter"),":")," After ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," exits, ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," continues to run\n",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#runtx-antehandler-runmsgs-posthandler"},(0,i.kt)("inlineCode",{parentName:"a"},"runMsgs"))," to fully execute each ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," within the transaction.\nSince the transaction may have messages from different modules, ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," needs to know which module\nto find the appropriate handler. This is achieved using ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgServiceRouter")," so that it can be processed by the module's Protobuf ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/build/building-modules/msg-services"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," service"),".\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyMsg")," routing, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," function is called via the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/build/building-modules/module-manager"},"module manager")," to retrieve the route name and find the legacy ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/build/building-modules/msg-services#handler-type"},(0,i.kt)("inlineCode",{parentName:"a"},"Handler"))," within the module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Msg")," service:")," Protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service is responsible for executing each message in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," and causes state transitions to persist in ",(0,i.kt)("inlineCode",{parentName:"p"},"finalizeBlockState"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PostHandlers:")," ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#posthandler"},(0,i.kt)("inlineCode",{parentName:"a"},"PostHandler")),"s run after the execution of the message. If they fail, the state change of ",(0,i.kt)("inlineCode",{parentName:"p"},"runMsgs"),", as well of ",(0,i.kt)("inlineCode",{parentName:"p"},"PostHandlers"),", are both reverted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Gas:")," While a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is being delivered, a ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," is used to keep track of how much\ngas is being used; if execution completes, ",(0,i.kt)("inlineCode",{parentName:"p"},"GasUsed")," is set and returned in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"abci.ExecTxResult"),". If execution halts because ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockGasMeter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," has run out or something else goes\nwrong, a deferred function at the end appropriately errors or panics."))),(0,i.kt)("p",null,"If there are any failed state changes resulting from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," being invalid or ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," running out,\nthe transaction processing terminates and any state changes are reverted. Invalid transactions in a\nblock proposal cause validator nodes to reject the block and vote for a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," block instead."),(0,i.kt)("h3",{id:"commit"},"Commit"),(0,i.kt)("p",null,"The final step is for nodes to commit the block and state changes. Validator nodes\nperform the previous step of executing state transitions in order to validate the transactions,\nthen sign the block to confirm it. Full nodes that are not validators do not\nparticipate in consensus - i.e. they cannot vote - but listen for votes to understand whether or\nnot they should commit the state changes."),(0,i.kt)("p",null,"When they receive enough validator votes (2/3+ ",(0,i.kt)("em",{parentName:"p"},"precommits")," weighted by voting power), full nodes commit to a new block to be added to the blockchain and\nfinalize the state transitions in the application layer. A new state root is generated to serve as\na merkle proof for the state transitions. Applications use the ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp#commit"},(0,i.kt)("inlineCode",{parentName:"a"},"Commit")),"\nABCI method inherited from ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/baseapp"},"Baseapp"),"; it syncs all the state transitions by\nwriting the ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState")," into the application's internal state. As soon as the state changes are\ncommitted, ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState")," starts afresh from the most recently committed state and ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState"),"\nresets to ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," in order to be consistent and reflect the changes."),(0,i.kt)("p",null,"Note that not all blocks have the same number of transactions and it is possible for consensus to\nresult in a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," block or one with none at all. In a public blockchain network, it is also possible\nfor validators to be ",(0,i.kt)("strong",{parentName:"p"},"byzantine"),", or malicious, which may prevent a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," from being committed in\nthe blockchain. Possible malicious behaviors include the proposer deciding to censor a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," by\nexcluding it from the block or a validator voting against the block."),(0,i.kt)("p",null,"At this point, the transaction lifecycle of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is over: nodes have verified its validity,\ndelivered it by executing its state changes, and committed those changes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," itself,\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form, is stored in a block and appended to the blockchain."))}m.isMDXComponent=!0}}]);