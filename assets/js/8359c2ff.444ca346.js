"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[41961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l="ADR 010: Modular AnteHandler",i={unversionedId:"build/architecture/adr-010-modular-antehandler",id:"build/architecture/adr-010-modular-antehandler",title:"ADR 010: Modular AnteHandler",description:"Changelog",source:"@site/docs/build/architecture/adr-010-modular-antehandler.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-010-modular-antehandler",permalink:"/main/build/architecture/adr-010-modular-antehandler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 009: Evidence Module",permalink:"/main/build/architecture/adr-009-evidence-module"},next:{title:"ADR 011: Generalize Genesis Accounts",permalink:"/main/build/architecture/adr-011-generalize-genesis-accounts"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Proposals",id:"proposals",level:2},{value:"Per-Module AnteHandler",id:"per-module-antehandler",level:3},{value:"Decorator Pattern",id:"decorator-pattern",level:3},{value:"Chained Micro-Functions",id:"chained-micro-functions",level:3},{value:"Default Workflow",id:"default-workflow",level:4},{value:"Cosmos SDK code",id:"cosmos-sdk-code",level:5},{value:"User Code",id:"user-code",level:5},{value:"Custom Workflow",id:"custom-workflow",level:4},{value:"User Code",id:"user-code-1",level:5},{value:"Simple Decorators",id:"simple-decorators",level:3},{value:"Example Code",id:"example-code",level:4},{value:"Consequences",id:"consequences",level:2},{value:"References",id:"references",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-010-modular-antehandler"},"ADR 010: Modular AnteHandler"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2019 Aug 31: Initial draft"),(0,r.kt)("li",{parentName:"ul"},"2021 Sep 14: Superseded by ADR-045")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"SUPERSEDED by ADR-045"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"The current AnteHandler design allows users to either use the default AnteHandler provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," or to build their own AnteHandler from scratch. Ideally AnteHandler functionality is split into multiple, modular functions that can be chained together along with custom ante-functions so that users do not have to rewrite common antehandler logic when they want to implement custom behavior."),(0,r.kt)("p",null,"For example, let's say a user wants to implement some custom signature verification logic. In the current codebase, the user would have to write their own Antehandler from scratch largely reimplementing much of the same code and then set their own custom, monolithic antehandler in the baseapp. Instead, we would like to allow users to specify custom behavior when necessary and combine them with default ante-handler functionality in a way that is as modular and flexible as possible."),(0,r.kt)("h2",{id:"proposals"},"Proposals"),(0,r.kt)("h3",{id:"per-module-antehandler"},"Per-Module AnteHandler"),(0,r.kt)("p",null,"One approach is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/types/module"},"ModuleManager")," and have each module implement its own antehandler if it requires custom antehandler logic. The ModuleManager can then be passed in an AnteHandler order in the same way it has an order for BeginBlockers and EndBlockers. The ModuleManager returns a single AnteHandler function that will take in a tx and run each module's ",(0,r.kt)("inlineCode",{parentName:"p"},"AnteHandle")," in the specified order. The module manager's AnteHandler is set as the baseapp's AnteHandler."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Simple to implement"),(0,r.kt)("li",{parentName:"ol"},"Utilizes the existing ModuleManager architecture")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Improves granularity but still cannot get more granular than a per-module basis. e.g. If auth's ",(0,r.kt)("inlineCode",{parentName:"li"},"AnteHandle")," function is in charge of validating memo and signatures, users cannot swap the signature-checking functionality while keeping the rest of auth's ",(0,r.kt)("inlineCode",{parentName:"li"},"AnteHandle")," functionality."),(0,r.kt)("li",{parentName:"ol"},'Module AnteHandler are run one after the other. There is no way for one AnteHandler to wrap or "decorate" another.')),(0,r.kt)("h3",{id:"decorator-pattern"},"Decorator Pattern"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iov-one/weave"},"weave project")," achieves AnteHandler modularity through the use of a decorator pattern. The interface is designed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Decorator wraps a Handler to provide common functionality\n// like authentication, or fee-handling, to many Handlers\ntype Decorator interface {\n    Check(ctx Context, store KVStore, tx Tx, next Checker) (*CheckResult, error)\n    Deliver(ctx Context, store KVStore, tx Tx, next Deliverer) (*DeliverResult, error)\n}\n")),(0,r.kt)("p",null,"Each decorator works like a modularized Cosmos SDK antehandler function, but it can take in a ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," argument that may be another decorator or a Handler (which does not take in a next argument). These decorators can be chained together, one decorator being passed in as the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," argument of the previous decorator in the chain. The chain ends in a Router which can take a tx and route to the appropriate msg handler."),(0,r.kt)("p",null,"A key benefit of this approach is that one Decorator can wrap its internal logic around the next Checker/Deliverer. A weave Decorator may do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Example Decorator's Deliver function\nfunc (example Decorator) Deliver(ctx Context, store KVStore, tx Tx, next Deliverer) {\n    // Do some pre-processing logic\n\n    res, err := next.Deliver(ctx, store, tx)\n\n    // Do some post-processing logic given the result and error\n}\n")),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Weave Decorators can wrap over the next decorator/handler in the chain. The ability to both pre-process and post-process may be useful in certain settings."),(0,r.kt)("li",{parentName:"ol"},"Provides a nested modular structure that isn't possible in the solution above, while also allowing for a linear one-after-the-other structure like the solution above.")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It is hard to understand at first glance the state updates that would occur after a Decorator runs given the ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"store"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"tx"),". A Decorator can have an arbitrary number of nested Decorators being called within its function body, each possibly doing some pre- and post-processing before calling the next decorator on the chain. Thus to understand what a Decorator is doing, one must also understand what every other decorator further along the chain is also doing. This can get quite complicated to understand. A linear, one-after-the-other approach while less powerful, may be much easier to reason about.")),(0,r.kt)("h3",{id:"chained-micro-functions"},"Chained Micro-Functions"),(0,r.kt)("p",null,"The benefit of Weave's approach is that the Decorators can be very concise, which when chained together allows for maximum customizability. However, the nested structure can get quite complex and thus hard to reason about."),(0,r.kt)("p",null,'Another approach is to split the AnteHandler functionality into tightly scoped "micro-functions", while preserving the one-after-the-other ordering that would come from the ModuleManager approach.'),(0,r.kt)("p",null,"We can then have a way to chain these micro-functions so that they run one after the other. Modules may define multiple ante micro-functions and then also provide a default per-module AnteHandler that implements a default, suggested order for these micro-functions."),(0,r.kt)("p",null,"Users can order the AnteHandlers easily by simply using the ModuleManager. The ModuleManager will take in a list of AnteHandlers and return a single AnteHandler that runs each AnteHandler in the order of the list provided. If the user is comfortable with the default ordering of each module, this is as simple as providing a list with each module's antehandler (exactly the same as BeginBlocker and EndBlocker)."),(0,r.kt)("p",null,"If however, users wish to change the order or add, modify, or delete ante micro-functions in anyway; they can always define their own ante micro-functions and add them explicitly to the list that gets passed into module manager."),(0,r.kt)("h4",{id:"default-workflow"},"Default Workflow"),(0,r.kt)("p",null,"This is an example of a user's AnteHandler if they choose not to make any custom micro-functions."),(0,r.kt)("h5",{id:"cosmos-sdk-code"},"Cosmos SDK code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Chains together a list of AnteHandler micro-functions that get run one after the other.\n// Returned AnteHandler will abort on first error.\nfunc Chainer(order []AnteHandler) AnteHandler {\n    return func(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n        for _, ante := range order {\n            ctx, err := ante(ctx, tx, simulate)\n            if err != nil {\n                return ctx, err\n            }\n        }\n        return ctx, err\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// AnteHandler micro-function to verify signatures\nfunc VerifySignatures(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n    // verify signatures\n    // Returns InvalidSignature Result and abort=true if sigs invalid\n    // Return OK result and abort=false if sigs are valid\n}\n\n// AnteHandler micro-function to validate memo\nfunc ValidateMemo(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n    // validate memo\n}\n\n// Auth defines its own default ante-handler by chaining its micro-functions in a recommended order\nAuthModuleAnteHandler := Chainer([]AnteHandler{VerifySignatures, ValidateMemo})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Distribution micro-function to deduct fees from tx\nfunc DeductFees(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n    // Deduct fees from tx\n    // Abort if insufficient funds in account to pay for fees\n}\n\n// Distribution micro-function to check if fees > mempool parameter\nfunc CheckMempoolFees(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n    // If CheckTx: Abort if the fees are less than the mempool's minFee parameter\n}\n\n// Distribution defines its own default ante-handler by chaining its micro-functions in a recommended order\nDistrModuleAnteHandler := Chainer([]AnteHandler{CheckMempoolFees, DeductFees})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type ModuleManager struct {\n    // other fields\n    AnteHandlerOrder []AnteHandler\n}\n\nfunc (mm ModuleManager) GetAnteHandler() AnteHandler {\n    return Chainer(mm.AnteHandlerOrder)\n}\n")),(0,r.kt)("h5",{id:"user-code"},"User Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Note: Since user is not making any custom modifications, we can just SetAnteHandlerOrder with the default AnteHandlers provided by each module in our preferred order\nmoduleManager.SetAnteHandlerOrder([]AnteHandler(AuthModuleAnteHandler, DistrModuleAnteHandler))\n\napp.SetAnteHandler(mm.GetAnteHandler())\n")),(0,r.kt)("h4",{id:"custom-workflow"},"Custom Workflow"),(0,r.kt)("p",null,"This is an example workflow for a user that wants to implement custom antehandler logic. In this example, the user wants to implement custom signature verification and change the order of antehandler so that validate memo runs before signature verification."),(0,r.kt)("h5",{id:"user-code-1"},"User Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// User can implement their own custom signature verification antehandler micro-function\nfunc CustomSigVerify(ctx Context, tx Tx, simulate bool) (newCtx Context, err error) {\n    // do some custom signature verification logic\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Micro-functions allow users to change order of when they get executed, and swap out default ante-functionality with their own custom logic.\n// Note that users can still chain the default distribution module handler, and auth micro-function along with their custom ante function\nmoduleManager.SetAnteHandlerOrder([]AnteHandler(ValidateMemo, CustomSigVerify, DistrModuleAnteHandler))\n")),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allows for ante functionality to be as modular as possible."),(0,r.kt)("li",{parentName:"ol"},"For users that do not need custom ante-functionality, there is little difference between how antehandlers work and how BeginBlock and EndBlock work in ModuleManager."),(0,r.kt)("li",{parentName:"ol"},"Still easy to understand")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cannot wrap antehandlers with decorators like you can with Weave.")),(0,r.kt)("h3",{id:"simple-decorators"},"Simple Decorators"),(0,r.kt)("p",null,"This approach takes inspiration from Weave's decorator design while trying to minimize the number of breaking changes to the Cosmos SDK and maximizing simplicity. Like Weave decorators, this approach allows one ",(0,r.kt)("inlineCode",{parentName:"p"},"AnteDecorator")," to wrap the next AnteHandler to do pre- and post-processing on the result. This is useful since decorators can do defer/cleanups after an AnteHandler returns as well as perform some setup beforehand. Unlike Weave decorators, these ",(0,r.kt)("inlineCode",{parentName:"p"},"AnteDecorator")," functions can only wrap over the AnteHandler rather than the entire handler execution path. This is deliberate as we want decorators from different modules to perform authentication/validation on a ",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),". However, we do not want decorators being capable of wrapping and modifying the results of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgHandler"),"."),(0,r.kt)("p",null,"In addition, this approach will not break any core Cosmos SDK API's. Since we preserve the notion of an AnteHandler and still set a single AnteHandler in baseapp, the decorator is simply an additional approach available for users that desire more customization. The API of modules (namely ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth"),") may break with this approach, but the core API remains untouched."),(0,r.kt)("p",null,"Allow Decorator interface that can be chained together to create a Cosmos SDK AnteHandler."),(0,r.kt)("p",null,"This allows users to choose between implementing an AnteHandler by themselves and setting it in the baseapp, or use the decorator pattern to chain their custom decorators with the Cosmos SDK provided decorators in the order they wish."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// An AnteDecorator wraps an AnteHandler, and can do pre- and post-processing on the next AnteHandler\ntype AnteDecorator interface {\n    AnteHandle(ctx Context, tx Tx, simulate bool, next AnteHandler) (newCtx Context, err error)\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// ChainAnteDecorators will recursively link all of the AnteDecorators in the chain and return a final AnteHandler function\n// This is done to preserve the ability to set a single AnteHandler function in the baseapp.\nfunc ChainAnteDecorators(chain ...AnteDecorator) AnteHandler {\n    if len(chain) == 1 {\n        return func(ctx Context, tx Tx, simulate bool) {\n            chain[0].AnteHandle(ctx, tx, simulate, nil)\n        }\n    }\n    return func(ctx Context, tx Tx, simulate bool) {\n        chain[0].AnteHandle(ctx, tx, simulate, ChainAnteDecorators(chain[1:]))\n    }\n}\n")),(0,r.kt)("h4",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"Define AnteDecorator functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Setup GasMeter, catch OutOfGasPanic and handle appropriately\ntype SetUpContextDecorator struct{}\n\nfunc (sud SetUpContextDecorator) AnteHandle(ctx Context, tx Tx, simulate bool, next AnteHandler) (newCtx Context, err error) {\n    ctx.GasMeter = NewGasMeter(tx.Gas)\n\n    defer func() {\n        // recover from OutOfGas panic and handle appropriately\n    }\n\n    return next(ctx, tx, simulate)\n}\n\n// Signature Verification decorator. Verify Signatures and move on\ntype SigVerifyDecorator struct{}\n\nfunc (svd SigVerifyDecorator) AnteHandle(ctx Context, tx Tx, simulate bool, next AnteHandler) (newCtx Context, err error) {\n    // verify sigs. Return error if invalid\n\n    // call next antehandler if sigs ok\n    return next(ctx, tx, simulate)\n}\n\n// User-defined Decorator. Can choose to pre- and post-process on AnteHandler\ntype UserDefinedDecorator struct{\n    // custom fields\n}\n\nfunc (udd UserDefinedDecorator) AnteHandle(ctx Context, tx Tx, simulate bool, next AnteHandler) (newCtx Context, err error) {\n    // pre-processing logic\n\n    ctx, err = next(ctx, tx, simulate)\n\n    // post-processing logic\n}\n")),(0,r.kt)("p",null,"Link AnteDecorators to create a final AnteHandler. Set this AnteHandler in baseapp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Create final antehandler by chaining the decorators together\nantehandler := ChainAnteDecorators(NewSetUpContextDecorator(), NewSigVerifyDecorator(), NewUserDefinedDecorator())\n\n// Set chained Antehandler in the baseapp\nbapp.SetAnteHandler(antehandler)\n")),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allows one decorator to pre- and post-process the next AnteHandler, similar to the Weave design."),(0,r.kt)("li",{parentName:"ol"},"Do not need to break baseapp API. Users can still set a single AnteHandler if they choose.")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decorator pattern may have a deeply nested structure that is hard to understand, this is mitigated by having the decorator order explicitly listed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainAnteDecorators")," function."),(0,r.kt)("li",{parentName:"ol"},"Does not make use of the ModuleManager design. Since this is already being used for BeginBlocker/EndBlocker, this proposal seems unaligned with that design pattern.")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"Since pros and cons are written for each approach, it is omitted from this section"),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4572"},"#4572"),":  Modular AnteHandler Issue"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/4583"},"#4582"),": Initial Implementation of Per-Module AnteHandler Approach"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iov-one/weave/blob/master/handler.go#L35"},"Weave Decorator Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vimeo.com/showcase/6189877"},"Weave Design Videos"))))}h.isMDXComponent=!0}}]);