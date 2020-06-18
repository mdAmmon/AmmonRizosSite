(this["webpackJsonpar-site"]=this["webpackJsonpar-site"]||[]).push([[3],{71:function(e,t,a){"use strict";var r=a(6),n=a(7),o=a(9),s=a(8),c=a(0),i=a.n(c),l=(a(72),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-md-8 col-10 searchbar"},i.a.createElement("input",{type:"text",className:"form-control",autoComplete:"off",name:"name",id:this.props.id,placeholder:this.props.placeholder,onKeyUp:this.props.onEnter?this.props.onEnter:function(){},onChange:this.props.onKeyUp,value:this.props.value?this.props.value:""}),this.props.children)}}]),a}(c.Component));t.a=l},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(7),o=a(9),s=a(8),c=a(0),i=a.n(c),l=a(71),m=(a(78),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"tableTools"},i.a.createElement("div",{id:"pageContainer"},i.a.createElement("div",{className:"leftTriangle",id:"previousPage",onClick:function(){e.props.turnPage(-1)}}),i.a.createElement("input",{type:"text",name:"page",className:"form-control disable-selection",id:"pageNumber",disabled:!0,value:this.props.currentPage}),i.a.createElement("div",{className:"rightTriangle",id:"nextPage",onClick:function(){e.props.turnPage(1)}})),i.a.createElement("select",{className:"form-control",id:"itemsPerPage",onChange:this.props.updateNumOfItems},i.a.createElement("option",null,"10"),i.a.createElement("option",null,"25"),i.a.createElement("option",null,"50")))}}]),a}(c.Component)),d=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).displayModal=function(t){e.props.setActiveCross(t),e.props.displayModal()},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.currentPage,r=t.itemsPerPage,n=t.crosses;return i.a.createElement("tbody",{id:"tableBody"},n.slice(r*(a-1),r*a).map((function(t){return i.a.createElement("tr",{id:t.CROSS_ID,key:t.COMPETITOR_PART+","+t.GENERIC,onClick:function(){e.displayModal(t)}},i.a.createElement("td",null,t.COMPETITOR),i.a.createElement("td",null,t.COMPETITOR_PART),i.a.createElement("td",null,t.BRAND),i.a.createElement("td",null,t.GENERIC),i.a.createElement("td",null,t.direct),i.a.createElement("td",null,t.comments))})))}}]),a}(c.Component),p=(a(79),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return this.props.crosses.length?i.a.createElement("div",{id:"tableContainer"},i.a.createElement("table",{id:"tableCrosses"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"firstRow"},i.a.createElement("th",null,"Competitor"),i.a.createElement("th",null,"Part Number"),i.a.createElement("th",null,"A&R MFG"),i.a.createElement("th",null,"A&R MPN"),i.a.createElement("th",null,"Direct"),i.a.createElement("th",null,"Comments"))),i.a.createElement(d,{currentPage:this.props.currentPage,itemsPerPage:this.props.itemsPerPage,crosses:this.props.crosses,displayModal:this.props.displayModal,setActiveCross:this.props.setActiveCross}))):i.a.createElement("h2",{className:"centered"},"No records found...")}}]),a}(c.Component)),u=a(35),h=a(21),f=a(20),C=a(22),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={competitors:[],manufacturers:[],selectedCompetitor:"",competitorPart:"",selectedPrincipal:"",principalPart:"",direct:"YES",comments:"",addNewCompetitor:!1,newCompetitor:""},e.fetchCompetitors=function(){var t;fetch("https://arback-node.herokuapp.com/competitors").then((function(e){return e.json()})).then((function(a){t=a,e.setState({competitors:t,selectedCompetitor:t[0].competitor_id})}))},e.addNewCompetitor=function(){var t={};t.competitor=e.state.newCompetitor.toUpperCase(),fetch("https://arback-node.herokuapp.com/competitors",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return alert("something went wrong. :(")})).then((function(t){console.log(t),e.toggleAddCompetitorButton(),e.fetchCompetitors()}))},e.toggleAddCompetitorButton=function(){var t=e.state.addNewCompetitor,a={};a.addNewCompetitor=!t,t&&(a.newCompetitor=""),e.setState(a)},e.recordChange=function(t){var a={};a[t.target.id]=t.target.value,e.setState(a),"competitorPart"!==t.target.id&&"principalPart"!==t.target.id||e.validateForm(t)},e.validateForm=function(e){""===e.target.value?e.target.classList.add("redBorder"):e.target.classList.remove("redBorder")},e.insertCross=function(t){if(""!==e.state.competitorPart&&""!==e.state.selectedCompetitor&&""!==e.state.direct&&""!==e.state.selectedPrincipal&&""!==e.state.principalPart){var a=e.state,r={comp_id:a.selectedCompetitor,comp_model:a.competitorPart,brnd_id:a.selectedPrincipal,brnd_model:a.principalPart,direct:a.direct,comments:a.comments};console.log(JSON.stringify(r)),fetch("https://arback-node.herokuapp.com/crosses",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){return alert("something went wrong. :(")})).then((function(t){t.success?(alert(t.success),e.props.updateTable()):t.error&&alert(t.error),e.props.hide()}))}else alert("Error. Something went Wrong")},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;fetch("https://arback-node.herokuapp.com/principals").then((function(e){return e.json()})).then((function(a){e=a,t.setState({manufacturers:e,selectedPrincipal:e[0].brand_id})})),this.fetchCompetitors()}},{key:"render",value:function(){return i.a.createElement(u.a,{dialogClassName:"custom-dialog",show:this.props.show,onHide:this.props.hide,id:"insertCrossModal",centered:!0},i.a.createElement(h.a,{closeButton:!0},i.a.createElement(C.a,null,"Insert Cross")),i.a.createElement(f.a,{style:{transition:"all 0.5s ease-out"}},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("label",{htmlFor:"compSelect"},"Competitor:"),i.a.createElement("select",{name:"competitor",className:"custom-select col-10",style:{maxWidth:"88%"},id:"selectedCompetitor",onChange:this.recordChange},this.state.competitors.map((function(e){return i.a.createElement("option",{key:e.competitor_id,value:e.competitor_id},e.competitor_name)}))),i.a.createElement("button",{className:"form-control",style:{float:"right",width:"10%"},onClick:this.toggleAddCompetitorButton},this.state.addNewCompetitor?i.a.createElement("i",{className:"fa fa-minus red","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-plus green","aria-hidden":"true"}))))),this.state.addNewCompetitor?i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"text",name:"compName",id:"newCompetitor",className:"form-control form-group",onChange:this.recordChange,onBlur:this.validateForm,style:{float:"left",width:"78%"},placeholder:"New Competitor's name","aria-describedby":"newCompetitor"}),this.state.newCompetitor?i.a.createElement("button",{className:"btn btn-success form-group",id:"addComp",style:{width:"20%",float:"right"},onClick:this.addNewCompetitor},"Add"):i.a.createElement("button",{className:"btn btn-success form-group",disabled:!0,style:{width:"20%",float:"right"}},"Add"))):"",i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"text",name:"nombreR",id:"competitorPart",className:"form-control",onKeyUp:this.recordChange,onBlur:this.validateForm,placeholder:"Competitor's Part Number...","aria-describedby":"competitorPartNumber"}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"compSelect"},"A&R Manufacturer:"),i.a.createElement("select",{onChange:this.recordChange,name:"principal",className:"custom-select",id:"selectedPrincipal"},this.state.manufacturers.map((function(e){return i.a.createElement("option",{key:e.brand_id,value:e.brand_id},e.brand_name)})))),i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"text",name:"nombreR",id:"principalPart",className:"form-control",placeholder:"AR Manufacturer's Part Number...","aria-describedby":"helpId",onKeyUp:this.recordChange,onBlur:this.validateForm}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"directCross"},"Direct:"),i.a.createElement("select",{name:"direct",className:"custom-select",onChange:this.recordChange,id:"direct"},i.a.createElement("option",{value:"YES"},"Yes"),i.a.createElement("option",{value:"NO"},"No"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"comments"},"Comments"),i.a.createElement("textarea",{className:"form-control",onKeyUp:this.recordChange,id:"comments",rows:"2"})),""!==this.state.competitorPart&&""!==this.state.principalPart?i.a.createElement("button",{className:"btn btn-AR col-3",id:"sendReg",onClick:this.insertCross},"Send"):i.a.createElement("button",{disabled:!0,className:"btn btn-AR col-3",id:"sendReg"},"Send")))}}]),a}(i.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={competitors:[],manufacturers:[],selectedCompetitor:"",competitorPart:"",selectedPrincipal:"",principalPart:"",direct:"YES",comments:""},e.fetchCompetitors=function(){var t;fetch("https://arback-node.herokuapp.com/competitors").then((function(e){return e.json()})).then((function(a){t=a,e.setState({competitors:t,selectedCompetitor:t[0].competitor_id})}))},e.recordChange=function(t){var a={};a[t.target.id]=t.target.value,e.setState(a),"competitorPart"!==t.target.id&&"principalPart"!==t.target.id||e.validateForm(t)},e.validateForm=function(e){""===e.target.value?e.target.classList.add("redBorder"):e.target.classList.remove("redBorder")},e.deleteCross=function(t){fetch("https://arback-node.herokuapp.com/crosses/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){t&&(alert("Cross Deleted Successfully"),e.props.hide(),e.props.updateTable())})).catch((function(e){return alert(e)}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;fetch("https://arback-node.herokuapp.com/principals").then((function(e){return e.json()})).then((function(a){e=a,t.setState({manufacturers:e,selectedPrincipal:e[0].brand_id})})),this.fetchCompetitors()}},{key:"render",value:function(){var e=this,t=this.props.cross,a=t.CROSS_ID,r=t.BRAND,n=t.COMPETITOR,o=t.COMPETITOR_PART,s=t.GENERIC,c=t.comments,l=t.direct,m=this.state.manufacturers.find((function(e){return e.brand_name===r})),d=this.state.competitors.find((function(e){return e.competitor_name===n}));return i.a.createElement(u.a,{dialogClassName:"custom-dialog",show:this.props.show,onHide:this.props.hide,id:"manageCrossModal",centered:!0},i.a.createElement(h.a,{closeButton:!0},i.a.createElement(C.a,null,"Manage Cross No. ",a,"  ")),i.a.createElement(f.a,{style:{transition:"all 0.5s ease-out"}},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("label",{htmlFor:"compSelect"},"Competitor:"),i.a.createElement("select",{name:"competitor",className:"custom-select col-12",disabled:!0,defaultValue:d?d.competitor_id:"9",id:"selectedCompetitor",onChange:this.recordChange},this.state.competitors.map((function(e){return i.a.createElement("option",{key:e.competitor_id,value:e.competitor_id},e.competitor_name)})))))),i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"text",name:"nombreR",id:"competitorPart",className:"form-control",onChange:this.recordChange,onBlur:this.validateForm,placeholder:"Competitor's Part Number...",value:o,"aria-describedby":"competitorPartNumber"}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"compSelect"},"A&R Manufacturer:"),i.a.createElement("select",{disabled:!0,defaultValue:m?m.brand_id:"8",onChange:this.recordChange,name:"principal",className:"custom-select",id:"selectedPrincipal"},this.state.manufacturers.map((function(e){return i.a.createElement("option",{key:e.brand_id,value:e.brand_id},e.brand_name)})))),i.a.createElement("div",{className:"row form-group"},i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"text",name:"nombreR",id:"principalPart",className:"form-control",placeholder:"AR Manufacturer's Part Number...","aria-describedby":"helpId",onChange:this.recordChange,value:s,onBlur:this.validateForm}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"directCross"},"Direct:"),i.a.createElement("select",{name:"direct",className:"custom-select",defaultValue:l,onChange:this.recordChange,id:"direct"},i.a.createElement("option",{value:"YES"},"Yes"),i.a.createElement("option",{value:"NO"},"No"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"comments"},"Comments"),i.a.createElement("textarea",{className:"form-control",onChange:this.recordChange,value:c,id:"comments",rows:"2"})),""!==this.state.competitorPart&&""!==this.state.principalPart?i.a.createElement("button",{className:"btn btn-success col-3",id:"UpdateCrossBtn",onClick:function(){alert("Working on this feature")}},"Update"):i.a.createElement("button",{disabled:!0,className:"btn btn-success col-3",id:"UpdateCrossBtn"},"Update"),i.a.createElement("button",{style:{float:"right"},className:"btn btn-danger col-3",onClick:function(){window.confirm("Do you really want to delete this cross?")&&e.deleteCross(a)},id:"deleteCrossBtn"},"Delete")))}}]),a}(i.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={crosses:[],input:"",itemsPerPage:10,currentPage:1,activeCross:{CROSS_ID:"",BRAND:8,COMPETITOR:9,COMPETITOR_PART:"",GENERIC:"",comments:"",direct:"NO"}},e.updateInput=function(t){e.setState({input:t.target.value})},e.onEnter=function(t){"Enter"!==t.key||e.loadCrosses(t.target)},e.setActiveCross=function(t){e.setState({activeCross:t})},e.changeNumOfItemsPerPage=function(t){e.setState({itemsPerPage:parseInt(t.target.value),currentPage:1})},e.loadCrosses=function(){var t="https://arback-node.herokuapp.com/crosses";t+=""!==e.state.input?"?input="+e.state.input:"",fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({crosses:t,input:"",currentPage:1})}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.loadCrosses(),document.title="A&R Crosses"}},{key:"turnPage",value:function(e){var t=this.state,a=t.currentPage,r=t.crosses,n=t.itemsPerPage;a+e>Math.ceil(r.length/n)||a+e<1||this.setState({currentPage:a+e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"crossesComponent"},i.a.createElement(g,{show:this.props.showInsertCrossModal,updateTable:this.loadCrosses,hide:this.props.hideInsertCrossModal}),i.a.createElement(E,{show:this.props.showManageCrossModal,updateTable:this.loadCrosses,hide:this.props.hideManageCrossModal,cross:this.state.activeCross}),i.a.createElement(l.a,{placeholder:"Search Competitor's Part...",id:"searchCrossInput",onKeyUp:this.updateInput,onEnter:this.onEnter,value:this.state.input},i.a.createElement("button",{type:"button",className:"btn",onClick:this.loadCrosses,id:"searchButton"},"Search"),i.a.createElement("button",{type:"button",className:"btn",onClick:function(){e.setState({input:""}),e.loadCrosses()},id:"fullSearchButton"},"Full List")),i.a.createElement(m,{updateNumOfItems:this.changeNumOfItemsPerPage,turnPage:function(t){e.turnPage(t)},currentPage:this.state.currentPage}),i.a.createElement(p,{currentPage:this.state.currentPage,itemsPerPage:this.state.itemsPerPage,crosses:this.state.crosses,displayModal:this.props.displayManageCrossModal,setActiveCross:this.setActiveCross}),this.props.isLogged?i.a.createElement("button",{className:"btn btn-AR",onClick:this.props.displayInsertCrossModal,id:"insertCrossBtn"},"Add Cross"):null)}}]),a}(c.Component);t.default=b}}]);
//# sourceMappingURL=3.28ea533b.chunk.js.map