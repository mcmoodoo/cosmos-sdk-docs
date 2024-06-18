"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[51052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},s="Running a Node",r={unversionedId:"user/run-node/run-node",id:"version-0.47/user/run-node/run-node",title:"Running a Node",description:"Now that the application is ready and the keyring populated, it's time to see how to run the blockchain node. In this section, the application we are running is called simapp, and its corresponding CLI binary simd.",source:"@site/versioned_docs/version-0.47/user/run-node/01-run-node.md",sourceDirName:"user/run-node",slug:"/user/run-node/run-node",permalink:"/v0.47/user/run-node/run-node",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Setting up the keyring",permalink:"/v0.47/user/run-node/keyring"},next:{title:"Interacting with the Node",permalink:"/v0.47/user/run-node/interact-node"}},l={},p=[{value:"Initialize the Chain",id:"initialize-the-chain",level:2},{value:"Updating Some Default Settings",id:"updating-some-default-settings",level:2},{value:"Client Interaction",id:"client-interaction",level:3},{value:"Adding Genesis Accounts",id:"adding-genesis-accounts",level:2},{value:"Configuring the Node Using <code>app.toml</code> and <code>config.toml</code>",id:"configuring-the-node-using-apptoml-and-configtoml",level:2},{value:"Run a Localnet",id:"run-a-localnet",level:2},{value:"Logging",id:"logging",level:2},{value:"State Sync",id:"state-sync",level:2},{value:"Local State Sync",id:"local-state-sync",level:3},{value:"Snapshots Commands",id:"snapshots-commands",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Now that the application is ready and the keyring populated, it's time to see how to run the blockchain node. In this section, the application we are running is called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/simapp"},(0,o.kt)("inlineCode",{parentName:"a"},"simapp")),", and its corresponding CLI binary ",(0,o.kt)("inlineCode",{parentName:"p"},"simd"),".")),(0,o.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../learn/beginner/00-app-anatomy.md"},"Anatomy of a Cosmos SDK Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.47/user/run-node/keyring"},"Setting up the keyring")))),(0,o.kt)("h2",{id:"initialize-the-chain"},"Initialize the Chain"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you can build your own binary, and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"simd")," with the name of your binary in the snippets.")),(0,o.kt)("p",null,"Before actually running the node, we need to initialize the chain, and most importantly its genesis file. This is done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," subcommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The argument <moniker> is the custom username of your node, it should be human-readable.\nsimd init <moniker> --chain-id my-test-chain\n")),(0,o.kt)("p",null,"The command above creates all the configuration files needed for your node to run, as well as a default genesis file, which defines the initial state of the network."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All these configuration files are in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simapp")," by default, but you can overwrite the location of this folder by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag to each commands,\nor set an ",(0,o.kt)("inlineCode",{parentName:"p"},"$APPD_HOME")," environment variable (where ",(0,o.kt)("inlineCode",{parentName:"p"},"APPD")," is the name of the binary).")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simapp")," folder has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".                                   # ~/.simapp\n  |- data                           # Contains the databases used by the node.\n  |- config/\n      |- app.toml                   # Application-related configuration file.\n      |- config.toml                # CometBFT-related configuration file.\n      |- genesis.json               # The genesis file.\n      |- node_key.json              # Private key to use for node authentication in the p2p protocol.\n      |- priv_validator_key.json    # Private key to use as a validator in the consensus protocol.\n")),(0,o.kt)("h2",{id:"updating-some-default-settings"},"Updating Some Default Settings"),(0,o.kt)("p",null,"If you want to change any field values in configuration files (for ex: genesis.json) you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," (",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"installation")," & ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/#Assignment"},"docs"),") & ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," commands to do that. Few examples are listed here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# to change the chain-id\njq '.chain_id = \"testing\"' genesis.json > temp.json && mv temp.json genesis.json\n\n# to enable the api server\nsed -i '/\\[api\\]/,+3 s/enable = false/enable = true/' app.toml\n\n# to change the voting_period\njq '.app_state.gov.voting_params.voting_period = \"600s\"' genesis.json > temp.json && mv temp.json genesis.json\n\n# to change the inflation\njq '.app_state.mint.minter.inflation = \"0.300000000000000000\"' genesis.json > temp.json && mv temp.json genesis.json\n")),(0,o.kt)("h3",{id:"client-interaction"},"Client Interaction"),(0,o.kt)("p",null,"When instantiating a node, GRPC and REST are defaulted to localhost to avoid unknown exposure of your node to the public. It is recommended to not expose these endpoints without a proxy that can handle load balancing or authentication is setup between your node and the public. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A commonly used tool for this is ",(0,o.kt)("a",{parentName:"p",href:"https://nginx.org"},"nginx"),".")),(0,o.kt)("h2",{id:"adding-genesis-accounts"},"Adding Genesis Accounts"),(0,o.kt)("p",null,"Before starting the chain, you need to populate the state with at least one account. To do so, first ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/user/run-node/keyring#adding-keys-to-the-keyring"},"create a new account in the keyring")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"my_validator")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," keyring backend (feel free to choose another name and another backend)."),(0,o.kt)("p",null,"Now that you have created a local account, go ahead and grant it some ",(0,o.kt)("inlineCode",{parentName:"p"},"stake")," tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd genesis add-genesis-account $MY_VALIDATOR_ADDRESS 100000000000stake\n")),(0,o.kt)("p",null,"Recall that ",(0,o.kt)("inlineCode",{parentName:"p"},"$MY_VALIDATOR_ADDRESS")," is a variable that holds the address of the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_validator")," key in the ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/user/run-node/keyring#adding-keys-to-the-keyring"},"keyring"),". Also note that the tokens in the Cosmos SDK have the ",(0,o.kt)("inlineCode",{parentName:"p"},"{amount}{denom}")," format: ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," is is a 18-digit-precision decimal number, and ",(0,o.kt)("inlineCode",{parentName:"p"},"denom")," is the unique token identifier with its denomination key (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"atom")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"uatom"),"). Here, we are granting ",(0,o.kt)("inlineCode",{parentName:"p"},"stake")," tokens, as ",(0,o.kt)("inlineCode",{parentName:"p"},"stake")," is the token identifier used for staking in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/simapp"},(0,o.kt)("inlineCode",{parentName:"a"},"simapp")),". For your own chain with its own staking denom, that token identifier should be used instead."),(0,o.kt)("p",null,"Now that your account has some tokens, you need to add a validator to your chain. Validators are special full-nodes that participate in the consensus process (implemented in the ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/learn/intro/sdk-app-architecture#cometbft"},"underlying consensus engine"),") in order to add new blocks to the chain. Any account can declare its intention to become a validator operator, but only those with sufficient delegation get to enter the active set (for example, only the top 125 validator candidates with the most delegation get to be validators in the Cosmos Hub). For this guide, you will add your local node (created via the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a gentx.\nsimd genesis gentx my_validator 100000000stake --chain-id my-test-chain --keyring-backend test\n\n# Add the gentx to the genesis file.\nsimd genesis collect-gentxs\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx")," does three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Registers the ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," account you created as a validator operator account (i.e. the account that controls the validator)."),(0,o.kt)("li",{parentName:"ol"},"Self-delegates the provided ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of staking tokens."),(0,o.kt)("li",{parentName:"ol"},"Link the operator account with a CometBFT node pubkey that will be used for signing blocks. If no ",(0,o.kt)("inlineCode",{parentName:"li"},"--pubkey")," flag is provided, it defaults to the local node pubkey created via the ",(0,o.kt)("inlineCode",{parentName:"li"},"simd init")," command above.")),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx"),", use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd genesis gentx --help\n")),(0,o.kt)("h2",{id:"configuring-the-node-using-apptoml-and-configtoml"},"Configuring the Node Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"app.toml")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"config.toml")),(0,o.kt)("p",null,"The Cosmos SDK automatically generates two configuration files inside ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simapp/config"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.toml"),": used to configure the CometBFT, learn more on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/configuration"},"CometBFT's documentation"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app.toml"),": generated by the Cosmos SDK, and used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync...")),(0,o.kt)("p",null,"Both files are heavily commented, please refer to them directly to tweak your node."),(0,o.kt)("p",null,"One example config to tweak is the ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum-gas-prices")," field inside ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),", which defines the minimum gas prices the validator node is willing to accept for processing a transaction. Depending on the chain, it might be an empty string or not. If it's empty, make sure to edit the field with some value, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"10token"),", or else the node will halt on startup. For the purpose of this tutorial, let's set the minimum gas price to 0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},' # The minimum gas prices a validator is willing to accept for processing a\n # transaction. A transaction\'s fees must meet the minimum of any denomination\n # specified in this config (e.g. 0.25token1;0.0001token2).\n minimum-gas-prices = "0stake"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When running a node (not a validator!) and not wanting to run the application mempool, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"max-txs")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[mempool]\n# Setting max-txs to 0 will allow for a unbounded amount of transactions in the mempool.\n# Setting max_txs to negative 1 (-1) will disable transactions from being inserted into the mempool.\n# Setting max_txs to a positive number (> 0) will limit the number of transactions in the mempool, by the specified amount.\n#\n# Note, this configuration only applies to SDK built-in app-side mempool\n# implementations.\nmax-txs = "-1"\n'))),(0,o.kt)("h2",{id:"run-a-localnet"},"Run a Localnet"),(0,o.kt)("p",null,"Now that everything is set up, you can finally start your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd start\n")),(0,o.kt)("p",null,"You should see blocks come in."),(0,o.kt)("p",null,"The previous command allow you to run a single node. This is enough for the next section on interacting with this node, but you may wish to run multiple nodes at the same time, and see how consensus happens between them."),(0,o.kt)("p",null,"The naive way would be to run the same commands again in separate terminal windows. This is possible, however in the Cosmos SDK, we leverage the power of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," to run a localnet. If you need inspiration on how to set up your own localnet with Docker Compose, you can have a look at the Cosmos SDK's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/docker-compose.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"docker-compose.yml")),"."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging provides a way to see what is going on with a node. By default the info level is set. This is a global level and all info logs will be outputted to the terminal. If you would like to filter specific logs to the terminal instead of all, then setting ",(0,o.kt)("inlineCode",{parentName:"p"},"module:log_level")," is how this can work. "),(0,o.kt)("p",null,"Example: "),(0,o.kt)("p",null,"In config.toml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'log_level: "state:info,p2p:info,consensus:info,x/staking:info,x/ibc:info,*error"\n')),(0,o.kt)("h2",{id:"state-sync"},"State Sync"),(0,o.kt)("p",null,"State sync is the act in which a node syncs the latest or close to the latest state of a blockchain. This is useful for users who don't want to sync all the blocks in history. Read more in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/core/state-sync"},"CometBFT documentation"),"."),(0,o.kt)("p",null,"State sync works thanks to snapshots. Read how the SDK handles snapshots ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/825245d/store/snapshots/README.md"},"here"),"."),(0,o.kt)("h3",{id:"local-state-sync"},"Local State Sync"),(0,o.kt)("p",null,"Local state sync work similar to normal state sync except that it works off a local snapshot of state instead of one provided via the p2p network. The steps to start local state sync are similar to normal state sync with a few different designs. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As mentioned in ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/state-sync"},"https://docs.cometbft.com/v0.37/core/state-sync"),", one must set a height and hash in the config.toml along with a few rpc servers (the afromentioned link has instructions on how to do this). "),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"<appd snapshot restore <height> <format>")," to restore a local snapshot (note: first load it from a file with the ",(0,o.kt)("em",{parentName:"li"},"load")," command). "),(0,o.kt)("li",{parentName:"ol"},"Bootsrapping Comet state in order to start the node after the snapshot has been ingested. This can be done with the bootstrap command ",(0,o.kt)("inlineCode",{parentName:"li"},"<app> comet bootstrap-state"))),(0,o.kt)("h3",{id:"snapshots-commands"},"Snapshots Commands"),(0,o.kt)("p",null,"The Cosmos SDK provides commands for managing snapshots.\nThese commands can be added in an app with the following snippet in ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd/<app>/root.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/cosmos/cosmos-sdk/client/snapshot"\n)\n\nfunc initRootCmd(/* ... */) {\n  // ...\n  rootCmd.AddCommand(\n    snapshot.Cmd(appCreator),\n  )\n}\n')),(0,o.kt)("p",null,"Then following commands are available at ",(0,o.kt)("inlineCode",{parentName:"p"},"<appd> snapshots [command]"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"list"),": list local snapshots"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"load"),": Load a snapshot archive file into snapshot store"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"restore"),": Restore app state from local snapshot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"export"),":  Export app state to snapshot store"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dump"),": Dump the snapshot as portable archive format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"delete"),": Delete a local snapshot")))}c.isMDXComponent=!0}}]);