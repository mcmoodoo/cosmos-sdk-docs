(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{533:function(e,t,s){e.exports=s.p+"assets/img/transaction_flow.1ee1ce97.svg"},652:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"msg-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-services"}},[e._v("#")]),e._v(" "),a("code",[e._v("Msg")]),e._v(" Services")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("A Protobuf "),a("code",[e._v("Msg")]),e._v(" service processes "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("messages")]),e._v(". Protobuf "),a("code",[e._v("Msg")]),e._v(" services are specific to the module in which they are defined, and only process messages defined within the said module. They are called from "),a("code",[e._v("BaseApp")]),e._v(" during "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("Messages and Queries")])],1)]),e._v(" "),a("h2",{attrs:{id:"implementation-of-a-module-msg-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-a-module-msg-service"}},[e._v("#")]),e._v(" Implementation of a module "),a("code",[e._v("Msg")]),e._v(" service")]),e._v(" "),a("p",[e._v("Each module should define a Protobuf "),a("code",[e._v("Msg")]),e._v(" service, which will be responsible for processing requests (implementing "),a("code",[e._v("sdk.Msg")]),e._v(") and returning responses.")]),e._v(" "),a("p",[e._v("As further described in "),a("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")]),e._v(", this approach has the advantage of clearly specifying return types and generating server and client code.")],1),e._v(" "),a("p",[e._v("Protobuf generates a "),a("code",[e._v("MsgServer")]),e._v(" interface based on a definition of "),a("code",[e._v("Msg")]),e._v(" service. It is the role of the module developer to implement this interface, by implementing the state transition logic that should happen upon receival of each "),a("code",[e._v("sdk.Msg")]),e._v(". As an example, here is the generated "),a("code",[e._v("MsgServer")]),e._v(" interface for "),a("code",[e._v("x/bank")]),e._v(", which exposes two "),a("code",[e._v("sdk.Msg")]),e._v("s:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTXNnU2VydmVyIGlzIHRoZSBzZXJ2ZXIgQVBJIGZvciBNc2cgc2VydmljZS4KdHlwZSBNc2dTZXJ2ZXIgaW50ZXJmYWNlIHsKCS8vIFNlbmQgZGVmaW5lcyBhIG1ldGhvZCBmb3Igc2VuZGluZyBjb2lucyBmcm9tIG9uZSBhY2NvdW50IHRvIGFub3RoZXIgYWNjb3VudC4KCVNlbmQoY29udGV4dC5Db250ZXh0LCAqTXNnU2VuZCkgKCpNc2dTZW5kUmVzcG9uc2UsIGVycm9yKQoJLy8gTXVsdGlTZW5kIGRlZmluZXMgYSBtZXRob2QgZm9yIHNlbmRpbmcgY29pbnMgZnJvbSBzb21lIGFjY291bnRzIHRvIG90aGVyIGFjY291bnRzLgoJTXVsdGlTZW5kKGNvbnRleHQuQ29udGV4dCwgKk1zZ011bHRpU2VuZCkgKCpNc2dNdWx0aVNlbmRSZXNwb25zZSwgZXJyb3IpCn0="}})],1),e._v(" "),a("p",[e._v("When possible, the existing module's "),a("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[a("code",[e._v("Keeper")])]),e._v(" should implement "),a("code",[e._v("MsgServer")]),e._v(", otherwise a "),a("code",[e._v("msgServer")]),e._v(" struct that embeds the "),a("code",[e._v("Keeper")]),e._v(" can be created, typically in "),a("code",[e._v("./keeper/msg_server.go")]),e._v(":")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBtc2dTZXJ2ZXIgc3RydWN0IHsKCUtlZXBlcgp9"}})],1),e._v(" "),a("p",[a("code",[e._v("msgServer")]),e._v(" methods can retrieve the "),a("code",[e._v("sdk.Context")]),e._v(" from the "),a("code",[e._v("context.Context")]),e._v(" parameter method using the "),a("code",[e._v("sdk.UnwrapSDKContext")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkK"}})],1),e._v(" "),a("p",[a("code",[e._v("sdk.Msg")]),e._v(" processing usually follows these 3 steps:")]),e._v(" "),a("h3",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),a("p",[e._v("Before a "),a("code",[e._v("msgServer")]),e._v(" method is executed, the message's "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#ValidateBasic"}},[a("code",[e._v("ValidateBasic()")])]),e._v(" method has already been called. Since "),a("code",[e._v("msg.ValidateBasic()")]),e._v("  performs only the most basic checks, this stage must perform all other validation (both "),a("em",[e._v("stateful")]),e._v(" and "),a("em",[e._v("stateless")]),e._v(") to make sure the "),a("code",[e._v("message")]),e._v(" is valid. Checks performed in the "),a("code",[e._v("msgServer")]),e._v(" method can be more expensive and the signer is charged gas for these operations.\nFor example, a "),a("code",[e._v("msgServer")]),e._v(" method for a "),a("code",[e._v("transfer")]),e._v(" message might check that the sending account has enough funds to actually perform the transfer.")],1),e._v(" "),a("p",[e._v("It is recommended to implement all validation checks in a separate function that passes state values as arguments. This implementation simplifies testing. As expected, expensive validation functions charge additional gas. Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"VmFsaWRhdGVNc2dBKG1zZyBNc2dBLCBub3cgVGltZSwgZ20gR2FzTWV0ZXIpIGVycm9yIHsKCWlmIG5vdy5CZWZvcmUobXNnLkV4cGlyZSkgewoJCXJldHVybiBzZGtlcnJyb3JzLkVyckludmFsaWRSZXF1ZXN0LldyYXAoJnF1b3Q7bXNnIGV4cGlyZWQmcXVvdDspCgl9CglnbS5Db25zdW1lR2FzKDEwMDAsICZxdW90O3NpZ25hdHVyZSB2ZXJpZmljYXRpb24mcXVvdDspCglyZXR1cm4gc2lnbmF0dXJlVmVyaWZpY2F0b24obXNnLlByb3ZlciwgbXNnLkRhdGEpCn0K"}}),e._v(" "),a("h3",{attrs:{id:"state-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-transition"}},[e._v("#")]),e._v(" State Transition")]),e._v(" "),a("p",[e._v("After the validation is successful, the "),a("code",[e._v("msgServer")]),e._v(" method uses the "),a("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[a("code",[e._v("keeper")])]),e._v(" functions to access the state and perform a state transition.")],1),e._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[e._v("Before returning, "),a("code",[e._v("msgServer")]),e._v(" methods generally emit one or more "),a("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" by using the "),a("code",[e._v("EventManager")]),e._v(" held in the "),a("code",[e._v("ctx")]),e._v(". Use the new "),a("code",[e._v("EmitTypedEvent")]),e._v(" function that uses protobuf-based event types:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRUeXBlZEV2ZW50KAoJJmFtcDtncm91cC5FdmVudEFCQ3tLZXkxOiBWYWx1ZTEsICBLZXkyLCBWYWx1ZTJ9KQo="}}),e._v(" "),a("p",[e._v("or the older "),a("code",[e._v("EmitEvent")]),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKCXNkay5OZXdFdmVudCgKCQlldmVudFR5cGUsICAvLyBlLmcuIHNkay5FdmVudFR5cGVNZXNzYWdlIGZvciBhIG1lc3NhZ2UsIHR5cGVzLkN1c3RvbUV2ZW50VHlwZSBmb3IgYSBjdXN0b20gZXZlbnQgZGVmaW5lZCBpbiB0aGUgbW9kdWxlCgkJc2RrLk5ld0F0dHJpYnV0ZShrZXkxLCB2YWx1ZTEpLAoJCXNkay5OZXdBdHRyaWJ1dGUoa2V5MiwgdmFsdWUyKSwKCSksCikK"}}),e._v(" "),a("p",[e._v("These events are relayed back to the underlying consensus engine and can be used by service providers to implement services around the application. Click "),a("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("here")]),e._v(" to learn more about events.")],1),e._v(" "),a("p",[e._v("The invoked "),a("code",[e._v("msgServer")]),e._v(" method returns a "),a("code",[e._v("proto.Message")]),e._v(" response and an "),a("code",[e._v("error")]),e._v(". These return values are then wrapped into an "),a("code",[e._v("*sdk.Result")]),e._v(" or an "),a("code",[e._v("error")]),e._v(" using "),a("code",[e._v("sdk.WrapServiceResult(ctx sdk.Context, res proto.Message, err error)")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkJcmV0dXJuIHNkay5XcmFwU2VydmljZVJlc3VsdChjdHgsIHJlc01zZywgZXJyKQ=="}})],1),e._v(" "),a("p",[e._v("This method takes care of marshaling the "),a("code",[e._v("res")]),e._v(" parameter to protobuf and attaching any events on the "),a("code",[e._v("ctx.EventManager()")]),e._v(" to the "),a("code",[e._v("sdk.Result")]),e._v(".")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUmVzdWx0IGlzIHRoZSB1bmlvbiBvZiBSZXNwb25zZUZvcm1hdCBhbmQgUmVzcG9uc2VDaGVja1R4LgptZXNzYWdlIFJlc3VsdCB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICAvLyBEYXRhIGlzIGFueSBkYXRhIHJldHVybmVkIGZyb20gbWVzc2FnZSBvciBoYW5kbGVyIGV4ZWN1dGlvbi4gSXQgTVVTVCBiZQogIC8vIGxlbmd0aCBwcmVmaXhlZCBpbiBvcmRlciB0byBzZXBhcmF0ZSBkYXRhIGZyb20gbXVsdGlwbGUgbWVzc2FnZSBleGVjdXRpb25zLgogIGJ5dGVzIGRhdGEgPSAxOwoKICAvLyBMb2cgY29udGFpbnMgdGhlIGxvZyBpbmZvcm1hdGlvbiBmcm9tIG1lc3NhZ2Ugb3IgaGFuZGxlciBleGVjdXRpb24uCiAgc3RyaW5nIGxvZyA9IDI7CgogIC8vIEV2ZW50cyBjb250YWlucyBhIHNsaWNlIG9mIEV2ZW50IG9iamVjdHMgdGhhdCB3ZXJlIGVtaXR0ZWQgZHVyaW5nIG1lc3NhZ2UKICAvLyBvciBoYW5kbGVyIGV4ZWN1dGlvbi4KICByZXBlYXRlZCB0ZW5kZXJtaW50LmFiY2kuRXZlbnQgZXZlbnRzID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),a("p",[e._v("This diagram shows a typical structure of a Protobuf "),a("code",[e._v("Msg")]),e._v(" service, and how the message propagates through the module.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(533),alt:"Transaction flow"}})]),e._v(" "),a("h2",{attrs:{id:"amino-legacymsgs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amino-legacymsgs"}},[e._v("#")]),e._v(" Amino "),a("code",[e._v("LegacyMsg")]),e._v("s")]),e._v(" "),a("h3",{attrs:{id:"handler-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler-type"}},[e._v("#")]),e._v(" "),a("code",[e._v("handler")]),e._v(" type")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("handler")]),e._v(" type defined in the Cosmos SDK will be deprecated in favor of "),a("a",{attrs:{href:"#implementation-of-a-module-msg-service"}},[a("code",[e._v("Msg")]),e._v(" Services")]),e._v(".")]),e._v(" "),a("p",[e._v("Here is the typical structure of a "),a("code",[e._v("handler")]),e._v(" function:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIYW5kbGVyIGZ1bmMoY3R4IENvbnRleHQsIG1zZyBNc2cpICgqUmVzdWx0LCBlcnJvcik="}})],1),e._v(" "),a("p",[e._v("Let us break it down:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("LegacyMsg")])]),e._v(" is the actual object being processed.")],1),e._v(" "),a("li",[e._v("The "),a("RouterLink",{attrs:{to:"/core/context.html"}},[a("code",[e._v("Context")])]),e._v(" contains all the necessary information needed to process the "),a("code",[e._v("msg")]),e._v(", as well as a branch of the latest state. If the "),a("code",[e._v("msg")]),e._v(" is successfully processed, the branched version of the state contained in the "),a("code",[e._v("ctx")]),e._v(" will be written to the main state (branch).")],1),e._v(" "),a("li",[e._v("The "),a("code",[e._v("*Result")]),e._v(" returned to "),a("code",[e._v("BaseApp")]),e._v(" contains (among other things) information on the execution of the "),a("code",[e._v("handler")]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Module "),a("code",[e._v("handler")]),e._v("s are typically implemented in a "),a("code",[e._v("./handler.go")]),e._v(" file inside the module's folder. The "),a("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("module manager")]),e._v(" is used to add the module's "),a("code",[e._v("handler")]),e._v("s to the\n"),a("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[e._v("application's "),a("code",[e._v("router")])]),e._v(" via the "),a("code",[e._v("Route()")]),e._v(" method. Typically,\nthe manager's "),a("code",[e._v("Route()")]),e._v(" method simply constructs a Route that calls a "),a("code",[e._v("NewHandler()")]),e._v(" method defined in "),a("code",[e._v("handler.go")]),e._v(".")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUm91dGUgcmV0dXJucyB0aGUgbWVzc2FnZSByb3V0aW5nIGtleSBmb3IgdGhlIGdvdiBtb2R1bGUuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgUm91dGUoKSBzZGsuUm91dGUgewoJcmV0dXJuIHNkay5OZXdSb3V0ZSh0eXBlcy5Sb3V0ZXJLZXksIE5ld0hhbmRsZXIoYW0ua2VlcGVyKSkKfQ=="}})],1),e._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[a("code",[e._v("NewHandler")]),e._v(" function dispatches a "),a("code",[e._v("LegacyMsg")]),e._v(" to appropriate handler function, usually by using a switch statement:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3SGFuZGxlciByZXR1cm5zIGEgaGFuZGxlciBmb3IgJnF1b3Q7YmFuayZxdW90OyB0eXBlIG1lc3NhZ2VzLgpmdW5jIE5ld0hhbmRsZXIoayBrZWVwZXIuS2VlcGVyKSBzZGsuSGFuZGxlciB7CglyZXR1cm4gZnVuYyhjdHggc2RrLkNvbnRleHQsIG1zZyBzZGsuTXNnKSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CgkJY3R4ID0gY3R4LldpdGhFdmVudE1hbmFnZXIoc2RrLk5ld0V2ZW50TWFuYWdlcigpKQoKCQlzd2l0Y2ggbXNnIDo9IG1zZy4odHlwZSkgewoJCWNhc2UgKnR5cGVzLk1zZ1NlbmQ6CgkJCXJldHVybiBoYW5kbGVNc2dTZW5kKGN0eCwgaywgbXNnKQoKCQljYXNlICp0eXBlcy5Nc2dNdWx0aVNlbmQ6CgkJCXJldHVybiBoYW5kbGVNc2dNdWx0aVNlbmQoY3R4LCBrLCBtc2cpCgoJCWRlZmF1bHQ6CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwZihzZGtlcnJvcnMuRXJyVW5rbm93blJlcXVlc3QsICZxdW90O3VucmVjb2duaXplZCBiYW5rIG1lc3NhZ2UgdHlwZTogJVQmcXVvdDssIG1zZykKCQl9Cgl9Cn0="}})],1),e._v(" "),a("p",[e._v("First, "),a("code",[e._v("NewHandler")]),e._v(" function sets a new "),a("code",[e._v("EventManager")]),e._v(" to the context to isolate events per "),a("code",[e._v("msg")]),e._v(".\nThen, a simple switch calls the appropriate "),a("code",[e._v("handler")]),e._v(" based on the "),a("code",[e._v("LegacyMsg")]),e._v(" type.")]),e._v(" "),a("p",[e._v("In this regard, "),a("code",[e._v("handler")]),e._v("s functions need to be implemented for each module "),a("code",[e._v("LegacyMsg")]),e._v(". This will also involve manual handler registration of "),a("code",[e._v("LegacyMsg")]),e._v(" types.\n"),a("code",[e._v("handler")]),e._v("s functions should return a "),a("code",[e._v("*Result")]),e._v(" and an "),a("code",[e._v("error")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),a("p",[e._v("New "),a("RouterLink",{attrs:{to:"/core/telemetry.html"}},[e._v("telemetry metrics")]),e._v(" can be created from "),a("code",[e._v("msgServer")]),e._v(" methods when handling messages.")],1),e._v(" "),a("p",[e._v("This is an example from the "),a("code",[e._v("x/auth/vesting")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWRlZmVyIGZ1bmMoKSB7CgkJdGVsZW1ldHJ5LkluY3JDb3VudGVyKDEsICZxdW90O25ldyZxdW90OywgJnF1b3Q7YWNjb3VudCZxdW90OykKCgkJZm9yIF8sIGEgOj0gcmFuZ2UgbXNnLkFtb3VudCB7CgkJCWlmIGEuQW1vdW50LklzSW50NjQoKSB7CgkJCQl0ZWxlbWV0cnkuU2V0R2F1Z2VXaXRoTGFiZWxzKAoJCQkJCVtdc3RyaW5neyZxdW90O3R4JnF1b3Q7LCAmcXVvdDttc2cmcXVvdDssICZxdW90O2NyZWF0ZV92ZXN0aW5nX2FjY291bnQmcXVvdDt9LAoJCQkJCWZsb2F0MzIoYS5BbW91bnQuSW50NjQoKSksCgkJCQkJW11tZXRyaWNzLkxhYmVse3RlbGVtZXRyeS5OZXdMYWJlbCgmcXVvdDtkZW5vbSZxdW90OywgYS5EZW5vbSl9LAoJCQkJKQoJCQl9CgkJfQoJfSgp"}})],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about "),a("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("query services")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);