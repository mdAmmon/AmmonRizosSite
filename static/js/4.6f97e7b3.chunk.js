(this["webpackJsonpar-site"]=this["webpackJsonpar-site"]||[]).push([[4],{71:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(9),o=a(8),l=a(0),s=a.n(l),c=(a(72),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-8 col-10 searchbar"},s.a.createElement("input",{type:"text",className:"form-control",autoComplete:"off",name:"name",id:this.props.id,placeholder:this.props.placeholder,onKeyUp:this.props.onEnter?this.props.onEnter:function(){},onChange:this.props.onKeyUp,value:this.props.value?this.props.value:""}),this.props.children)}}]),a}(l.Component));t.a=c},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(7),r=a(9),o=a(8),l=a(0),s=a.n(l),c=function(e){Object(r.a)(l,e);var t=Object(o.a)(l);function l(){return Object(n.a)(this,l),t.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){var e=this,t=this.props,n=t.priority,i=t.name,r=t.position,o=t.email,l=t.phone,c=t.mobile,m=t.extension,p=t.manager,u=t.url,h="employeeImage priority"+n,d=a(43)("./".concat(this.props.url));return s.a.createElement("div",{onClick:function(){e.props.showModal(i,r,o,l,c,m,p,n,u)},className:"card shadowing",key:o},s.a.createElement("div",{className:h,style:{backgroundImage:"url(".concat(d,")")}}),s.a.createElement("h1",{className:"registryEmpTitle"},i),s.a.createElement("p",{className:"registryEmpPosition"},r),s.a.createElement("p",{className:"registryEmpEmail"},o))}}]),l}(l.Component),m=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"employeeRegistry"},this.props.employees.map((function(t){return s.a.createElement(c,{showModal:e.props.showModal,priority:t.priority,key:t.email,name:t.nombre,position:t.position,email:t.email,phone:t.direct_phone,extension:t.ext,mobile:t.mobile_phone,manager:t.Manager,url:"gray_square.png",location:t.location_name})})))}}]),a}(l.Component),p=a(71),u=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"setFilter",value:function(e){var t=document.querySelector(".activeFilter");t!==e.target&&(e.target.classList.add("activeFilter"),t.classList.remove("activeFilter"),document.getElementById("searchEmployee").value="",this.props.setFilter(e.target.textContent))}},{key:"render",value:function(){var e=this;return s.a.createElement("ul",{id:"searchFilters"},s.a.createElement("li",{className:"activeFilter",onClick:function(t){return e.setFilter(t)}},"All"),s.a.createElement("li",{onClick:function(t){return e.setFilter(t)}},"Inside"),s.a.createElement("li",{onClick:function(t){return e.setFilter(t)}},"Outside"),s.a.createElement("li",{onClick:function(t){return e.setFilter(t)}},"FAE"))}}]),a}(l.Component),h=a(35),d=a(20),E=(a(73),function(e){Object(r.a)(l,e);var t=Object(o.a)(l);function l(){return Object(n.a)(this,l),t.apply(this,arguments)}return Object(i.a)(l,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.position,i=e.email,r=e.phone,o=e.mobile,l=e.extension,c=e.manager,m=e.priority,p=a(43)("./".concat(this.props.url));return s.a.createElement(h.a,{dialogClassName:"custom-dialog",show:this.props.show,onHide:this.props.hide,id:"employeeDetailModal",centered:!0},s.a.createElement(d.a,null,s.a.createElement("button",{type:"button",id:"closeModal",className:"close","aria-label":"Close",onClick:this.props.hide},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")),s.a.createElement("div",{className:"employeeImage priority"+m,style:{backgroundImage:"url(".concat(p,")")},id:"modalEmpImage"}),s.a.createElement("div",{className:"employeeInfo"},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Name:"),s.a.createElement("p",{id:"EmpName"},t)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Position:"),s.a.createElement("p",{id:"Position"},n)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Email:"),s.a.createElement("p",{id:"Email"},i)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Phone:"),s.a.createElement("p",{id:"Phone"},r)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Mobile:"),s.a.createElement("p",{id:"Mobile"},o)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Extension:"),s.a.createElement("p",{id:"Ext"},l)),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Manager:"),s.a.createElement("p",{id:"Manager"},c)))))}}]),l}(s.a.Component)),y=(a(74),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={input:"",employees:[],filter:"All",name:"",position:"",email:"",phone:"",mobile:"",extension:"",manager:"",priority:"",url:"gray_square.png"},e.modalSetup=function(t,a,n,i,r,o,l,s,c){console.log(t+" "+a),e.setState({name:t,position:a,email:n,phone:i,mobile:r,extension:o,manager:l,priority:s,url:c},e.props.showModal())},e.setFilter=function(t){e.setState({filter:t,input:""},(function(){e.loadEmployees()}))},e.onKeyUp=function(t){t.target.value!==e.state.input&&e.setState({input:t.target.value},(function(){e.loadEmployees()}))},e.loadEmployees=function(){fetch("https://arback-node.herokuapp.com/directory?filter="+e.state.filter+"&input="+e.state.input,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({employees:t})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadEmployees(),document.title="A&R Directory"}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E,{show:this.props.show,hide:this.props.hide,priority:this.state.priority,name:this.state.name,position:this.state.position,email:this.state.email,phone:this.state.phone,extension:this.state.extension,mobile:this.state.mobile,manager:this.state.manager,url:this.state.url}),s.a.createElement(p.a,{placeholder:"Search Name...",onKeyUp:this.onKeyUp,value:this.state.input,id:"searchEmployee"}),s.a.createElement(u,{setFilter:this.setFilter}),s.a.createElement(m,{showModal:this.modalSetup,employees:this.state.employees}))}}]),a}(l.Component));t.default=y}}]);
//# sourceMappingURL=4.6f97e7b3.chunk.js.map