(this["webpackJsonpar-site"]=this["webpackJsonpar-site"]||[]).push([[3],{71:function(e,t,r){"use strict";var a=r(6),n=r(7),o=r(9),s=r(8),i=r(0),c=r.n(i),l=(r(72),function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-md-8 col-10 searchbar"},c.a.createElement("input",{type:"text",className:"form-control",autoComplete:"off",name:"name",id:this.props.id,placeholder:this.props.placeholder,onKeyUp:this.props.onEnter?this.props.onEnter:function(){},onChange:this.props.onKeyUp,value:this.props.value?this.props.value:""}),this.props.children)}}]),r}(i.Component));t.a=l},72:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){e.exports=r(81)},81:function(e,t,r){var a=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function i(e,t,r,a){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),s=new P(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return w()}for(r.method=n,r.arg=o;;){var s=r.delegate;if(s){var i=y(s,r);if(i){if(i===l)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var u=c(e,t,r);if("normal"===u.type){if(a=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a="completed",r.method="throw",r.arg=u.arg)}}}(e,r,s),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(a){return{type:"throw",arg:a}}}e.wrap=i;var l={};function u(){}function m(){}function p(){}var d={};d[n]=function(){return this};var h=Object.getPrototypeOf,f=h&&h(h(N([])));f&&f!==t&&r.call(f,n)&&(d=f);var g=p.prototype=u.prototype=Object.create(d);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e,t){var a;this._invoke=function(n,o){function s(){return new t((function(a,s){!function a(n,o,s,i){var l=c(e[n],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"===typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,s,i)}),(function(e){a("throw",e,s,i)})):t.resolve(m).then((function(e){u.value=e,s(u)}),(function(e){return a("throw",e,s,i)}))}i(l.arg)}(n,o,a,s)}))}return a=a?a.then(s,s):s()}}function y(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var a=c(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,l;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[n];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return m.prototype=g.constructor=p,p.constructor=m,p[s]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var s=new E(i(t,r,a,n),o);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},v(g),g[s]="Generator",g[n]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return s.type="throw",s.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},86:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(7),o=r(9),s=r(8),i=r(0),c=r.n(i),l=r(71),u=(r(78),function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"tableTools"},c.a.createElement("div",{id:"pageContainer"},c.a.createElement("div",{className:"leftTriangle",id:"previousPage",onClick:function(){e.props.turnPage(-1)}}),c.a.createElement("input",{type:"text",name:"page",className:"form-control disable-selection",id:"pageNumber",disabled:!0,value:this.props.currentPage}),c.a.createElement("div",{className:"rightTriangle",id:"nextPage",onClick:function(){e.props.turnPage(1)}})),c.a.createElement("select",{className:"form-control",id:"itemsPerPage",onChange:this.props.updateNumOfItems},c.a.createElement("option",null,"10"),c.a.createElement("option",null,"25"),c.a.createElement("option",null,"50")))}}]),r}(i.Component)),m=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).displayModal=function(t){e.props.setActiveCross(t),e.props.displayModal()},e}return Object(n.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.currentPage,a=t.itemsPerPage,n=t.crosses;return c.a.createElement("tbody",{id:"tableBody"},n.slice(a*(r-1),a*r).map((function(t){return c.a.createElement("tr",{id:t.CROSS_ID,key:t.COMPETITOR_PART+","+t.GENERIC,onClick:function(){e.props.isLogged&&e.displayModal(t)}},c.a.createElement("td",null,t.COMPETITOR),c.a.createElement("td",null,t.COMPETITOR_PART),c.a.createElement("td",null,t.BRAND),c.a.createElement("td",null,t.GENERIC),c.a.createElement("td",null,t.direct),c.a.createElement("td",null,t.comments))})))}}]),r}(i.Component),p=(r(79),function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return this.props.crosses.length?c.a.createElement("div",{id:"tableContainer"},c.a.createElement("table",{id:"tableCrosses"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"firstRow"},c.a.createElement("th",null,"Competitor"),c.a.createElement("th",null,"Part Number"),c.a.createElement("th",null,"A&R MFG"),c.a.createElement("th",null,"A&R MPN"),c.a.createElement("th",null,"Direct"),c.a.createElement("th",null,"Comments"))),c.a.createElement(m,{currentPage:this.props.currentPage,itemsPerPage:this.props.itemsPerPage,crosses:this.props.crosses,displayModal:this.props.displayModal,setActiveCross:this.props.setActiveCross,isLogged:this.props.isLogged}))):c.a.createElement("h2",{className:"centered"},"No records found...")}}]),r}(i.Component)),d=r(35),h=r(21),f=r(20),g=r(22),v=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={competitors:[],manufacturers:[],selectedCompetitor:"",competitorPart:"",selectedPrincipal:"",principalPart:"",direct:"YES",comments:"",addNewCompetitor:!1,newCompetitor:""},e.fetchCompetitors=function(){var t;fetch("https://arback-node.herokuapp.com/competitors").then((function(e){return e.json()})).then((function(r){t=r,e.setState({competitors:t,selectedCompetitor:t[0].competitor_id})}))},e.addNewCompetitor=function(){var t={};t.competitor=e.state.newCompetitor.toUpperCase(),fetch("https://arback-node.herokuapp.com/competitors",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return alert("something went wrong. :(")})).then((function(t){console.log(t),e.toggleAddCompetitorButton(),e.fetchCompetitors()}))},e.toggleAddCompetitorButton=function(){var t=e.state.addNewCompetitor,r={};r.addNewCompetitor=!t,t&&(r.newCompetitor=""),e.setState(r)},e.recordChange=function(t){var r={};r[t.target.id]=t.target.value,e.setState(r),"competitorPart"!==t.target.id&&"principalPart"!==t.target.id||e.validateForm(t)},e.validateForm=function(e){""===e.target.value?e.target.classList.add("redBorder"):e.target.classList.remove("redBorder")},e.insertCross=function(t){if(""!==e.state.competitorPart&&""!==e.state.selectedCompetitor&&""!==e.state.direct&&""!==e.state.selectedPrincipal&&""!==e.state.principalPart){var r=e.state,a={comp_id:r.selectedCompetitor,comp_model:r.competitorPart,brnd_id:r.selectedPrincipal,brnd_model:r.principalPart,direct:r.direct,comments:r.comments};console.log(JSON.stringify(a)),fetch("https://arback-node.herokuapp.com/crosses",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return alert("something went wrong. :(")})).then((function(t){t.success?(alert(t.success),e.props.updateTable()):t.error&&alert(t.error),e.props.hide()}))}else alert("Error. Something went Wrong")},e}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e,t=this;fetch("https://arback-node.herokuapp.com/principals").then((function(e){return e.json()})).then((function(r){e=r,t.setState({manufacturers:e,selectedPrincipal:e[0].brand_id})})),this.fetchCompetitors()}},{key:"render",value:function(){return c.a.createElement(d.a,{dialogClassName:"custom-dialog",show:this.props.show,onHide:this.props.hide,id:"insertCrossModal",centered:!0},c.a.createElement(h.a,{closeButton:!0},c.a.createElement(g.a,null,"Insert Cross")),c.a.createElement(f.a,{style:{transition:"all 0.5s ease-out"}},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("label",{htmlFor:"compSelect"},"Competitor:"),c.a.createElement("select",{name:"competitor",className:"custom-select col-10",style:{maxWidth:"88%"},id:"selectedCompetitor",onChange:this.recordChange},this.state.competitors.map((function(e){return c.a.createElement("option",{key:e.competitor_id,value:e.competitor_id},e.competitor_name)}))),c.a.createElement("button",{className:"form-control",style:{float:"right",width:"10%"},onClick:this.toggleAddCompetitorButton},this.state.addNewCompetitor?c.a.createElement("i",{className:"fa fa-minus red","aria-hidden":"true"}):c.a.createElement("i",{className:"fa fa-plus green","aria-hidden":"true"}))))),this.state.addNewCompetitor?c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",name:"compName",id:"newCompetitor",className:"form-control form-group",onChange:this.recordChange,onBlur:this.validateForm,style:{float:"left",width:"78%"},placeholder:"New Competitor's name","aria-describedby":"newCompetitor"}),this.state.newCompetitor?c.a.createElement("button",{className:"btn btn-success form-group",id:"addComp",style:{width:"20%",float:"right"},onClick:this.addNewCompetitor},"Add"):c.a.createElement("button",{className:"btn btn-success form-group",disabled:!0,style:{width:"20%",float:"right"}},"Add"))):"",c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",name:"nombreR",id:"competitorPart",className:"form-control",onKeyUp:this.recordChange,onBlur:this.validateForm,placeholder:"Competitor's Part Number...","aria-describedby":"competitorPartNumber"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"compSelect"},"A&R Manufacturer:"),c.a.createElement("select",{onChange:this.recordChange,name:"principal",className:"custom-select",id:"selectedPrincipal"},this.state.manufacturers.map((function(e){return c.a.createElement("option",{key:e.brand_id,value:e.brand_id},e.brand_name)})))),c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",name:"nombreR",id:"principalPart",className:"form-control",placeholder:"AR Manufacturer's Part Number...","aria-describedby":"helpId",onKeyUp:this.recordChange,onBlur:this.validateForm}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"directCross"},"Direct:"),c.a.createElement("select",{name:"direct",className:"custom-select",onChange:this.recordChange,id:"direct"},c.a.createElement("option",{value:"YES"},"Yes"),c.a.createElement("option",{value:"NO"},"No"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"comments"},"Comments"),c.a.createElement("textarea",{className:"form-control",onKeyUp:this.recordChange,id:"comments",rows:"2"})),""!==this.state.competitorPart&&""!==this.state.principalPart?c.a.createElement("button",{className:"btn btn-AR col-3",id:"sendReg",onClick:this.insertCross},"Send"):c.a.createElement("button",{disabled:!0,className:"btn btn-AR col-3",id:"sendReg"},"Send")))}}]),r}(c.a.Component),E=r(80),y=r.n(E);function b(e,t,r,a,n,o,s){try{var i=e[o](s),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(a,n)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){b(o,a,n,s,i,"next",e)}function i(e){b(o,a,n,s,i,"throw",e)}s(void 0)}))}}var P=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={competitors:[],manufacturers:[],selectedCompetitor:"",crossId:0,competitorPart:"",selectedPrincipal:"",principalPart:"",direct:"YES",comments:""},e.componentDidMount=C(y.a.mark((function t(){var r,a,n,o;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://arback-node.herokuapp.com/principals");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.next=8,fetch("https://arback-node.herokuapp.com/competitors");case 8:return n=t.sent,t.next=11,n.json();case 11:o=t.sent,e.setState({competitors:o,manufacturers:a});case 13:case"end":return t.stop()}}),t)}))),e.recordChange=function(t){var r={};r[t.target.id]=t.target.value,e.setState(r),"competitorPart"!==t.target.id&&"principalPart"!==t.target.id||e.validateForm(t)},e.validateForm=function(e){""===e.target.value?e.target.classList.add("redBorder"):e.target.classList.remove("redBorder")},e.updateCross=function(t){var r=e.state,a=r.crossId,n=r.selectedPrincipal,o=r.principalPart,s=r.direct,i=r.comments,c={selectedPrincipal:Number(n),principalPart:o,direct:s,comments:i};fetch("https://arback-node.herokuapp.com/crosses/".concat(a),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){alert(t),e.props.hide(),e.props.updateTable()})).catch((function(e){return alert(e)}))},e.deleteCross=function(t){fetch("https://arback-node.herokuapp.com/crosses/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){t&&(alert("Cross Deleted Successfully"),e.props.hide(),e.props.updateTable())})).catch((function(e){return alert(e)}))},e}return Object(n.a)(r,[{key:"componentDidUpdate",value:function(e,t){if(e!==this.props){var r=this.props.cross,a=r.CROSS_ID,n=r.BRAND,o=r.COMPETITOR,s=r.COMPETITOR_PART,i=r.GENERIC,c=r.comments,l=r.direct,u=this.state.manufacturers.find((function(e){return e.brand_name===n})),m=this.state.competitors.find((function(e){return e.competitor_name===o}));this.setState({crossId:a,selectedCompetitor:m?m.competitor_id:"",competitorPart:s,selectedPrincipal:u?u.brand_id:"",principalPart:i,direct:l,comments:c})}}},{key:"render",value:function(){var e=this,t=this.props.cross,r=t.CROSS_ID,a=t.BRAND,n=t.COMPETITOR,o=t.COMPETITOR_PART,s=t.direct,i=this.state.manufacturers.find((function(e){return e.brand_name===a})),l=this.state.competitors.find((function(e){return e.competitor_name===n}));return c.a.createElement(d.a,{dialogClassName:"custom-dialog",show:this.props.show,onHide:this.props.hide,id:"manageCrossModal",centered:!0},c.a.createElement(h.a,{closeButton:!0},c.a.createElement(g.a,null,"Manage Cross No. ",r,"  ")),c.a.createElement(f.a,{style:{transition:"all 0.5s ease-out"}},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("label",{htmlFor:"compSelect"},"Competitor:"),c.a.createElement("select",{name:"competitor",className:"custom-select col-12",disabled:!0,defaultValue:l?l.competitor_id:"9",id:"selectedCompetitor"},this.state.competitors.map((function(e){return c.a.createElement("option",{key:e.competitor_id,value:e.competitor_id},e.competitor_name)})))))),c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",name:"nombreR",id:"competitorPart",className:"form-control",disabled:!0,placeholder:"Competitor's Part Number...",value:o,"aria-describedby":"competitorPartNumber"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"compSelect"},"A&R Manufacturer:"),c.a.createElement("select",{defaultValue:i?i.brand_id:"8",onChange:this.recordChange,name:"principal",className:"custom-select",id:"selectedPrincipal"},this.state.manufacturers.map((function(e){return c.a.createElement("option",{key:e.brand_id,value:e.brand_id},e.brand_name)})))),c.a.createElement("div",{className:"row form-group"},c.a.createElement("div",{className:"col-12"},c.a.createElement("input",{type:"text",name:"nombreR",id:"principalPart",className:"form-control",placeholder:"AR Manufacturer's Part Number...","aria-describedby":"helpId",onChange:this.recordChange,value:this.state.principalPart,onBlur:this.validateForm}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"directCross"},"Direct:"),c.a.createElement("select",{name:"direct",className:"custom-select",defaultValue:s,onChange:this.recordChange,id:"direct"},c.a.createElement("option",{value:"YES"},"Yes"),c.a.createElement("option",{value:"NO"},"No"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"comments"},"Comments"),c.a.createElement("textarea",{className:"form-control",onChange:this.recordChange,value:this.state.comments?this.state.comments:"",id:"comments",rows:"2"})),""!==this.state.competitorPart&&""!==this.state.principalPart?c.a.createElement("button",{className:"btn btn-success col-3",id:"UpdateCrossBtn",onClick:function(){e.updateCross(r)}},"Update"):c.a.createElement("button",{disabled:!0,className:"btn btn-success col-3",id:"UpdateCrossBtn"},"Update"),c.a.createElement("button",{style:{float:"right"},className:"btn btn-danger col-3",onClick:function(){window.confirm("Do you really want to delete this cross?")&&e.deleteCross(r)},id:"deleteCrossBtn"},"Delete")))}}]),r}(c.a.Component),N=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={crosses:[],input:"",itemsPerPage:10,currentPage:1,activeCross:{CROSS_ID:"",BRAND:8,COMPETITOR:9,COMPETITOR_PART:"",GENERIC:"",comments:"",direct:"NO"}},e.updateInput=function(t){e.setState({input:t.target.value})},e.onEnter=function(t){"Enter"!==t.key||e.loadCrosses(t.target)},e.setActiveCross=function(t){e.setState({activeCross:t})},e.changeNumOfItemsPerPage=function(t){e.setState({itemsPerPage:parseInt(t.target.value),currentPage:1})},e.loadCrosses=function(){var t="https://arback-node.herokuapp.com/crosses";t+=""!==e.state.input?"?input="+e.state.input:"",fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({crosses:t,input:"",currentPage:1})}))},e}return Object(n.a)(r,[{key:"componentDidMount",value:function(){this.loadCrosses(),document.title="A&R Crosses"}},{key:"turnPage",value:function(e){var t=this.state,r=t.currentPage,a=t.crosses,n=t.itemsPerPage;r+e>Math.ceil(a.length/n)||r+e<1||this.setState({currentPage:r+e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"crossesComponent"},c.a.createElement(v,{show:this.props.showInsertCrossModal,updateTable:this.loadCrosses,hide:this.props.hideInsertCrossModal}),c.a.createElement(P,{show:this.props.showManageCrossModal,updateTable:this.loadCrosses,hide:this.props.hideManageCrossModal,cross:this.state.activeCross}),c.a.createElement(l.a,{placeholder:"Search Competitor's Part...",id:"searchCrossInput",onKeyUp:this.updateInput,onEnter:this.onEnter,value:this.state.input},c.a.createElement("button",{type:"button",className:"btn",onClick:this.loadCrosses,id:"searchButton"},"Search"),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){e.setState({input:""}),e.loadCrosses()},id:"fullSearchButton"},"Full List")),c.a.createElement(u,{updateNumOfItems:this.changeNumOfItemsPerPage,turnPage:function(t){e.turnPage(t)},currentPage:this.state.currentPage}),c.a.createElement(p,{currentPage:this.state.currentPage,itemsPerPage:this.state.itemsPerPage,crosses:this.state.crosses,displayModal:this.props.displayManageCrossModal,setActiveCross:this.setActiveCross,isLogged:this.props.isLogged}),this.props.isLogged?c.a.createElement("button",{className:"btn btn-AR",onClick:this.props.displayInsertCrossModal,id:"insertCrossBtn"},"Add Cross"):null)}}]),r}(i.Component);t.default=N}}]);
//# sourceMappingURL=3.1d089469.chunk.js.map