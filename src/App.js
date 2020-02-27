import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import {withCookies} from 'react-cookie';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Directory from './components/Directory';
import Calendar from './components/Calendar';
import Crosses from './components/Crosses';
import Diagrams from './components/Diagrams';
import ToggleNavButton from './components/ToggleNavButton.js';
import LoginForm from './components/LoginForm';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

    state = {
            isLogged: false,
            user: {},
            loginModalShown: false,
        }
       
    handleModalHide = (modalId) => {
        switch(modalId){
            case "loginModal": this.setState({loginModalShown: false}); break;
            default: break;
        }
    }

    handleModalShow = (modalId) => {
        switch(modalId){
            case "loginModal": this.setState({loginModalShown: true}); break;
            default: break;
        }
    }
    
    componentDidMount(){
        const {cookies} = this.props;
        const name = cookies.get('name');
        if(name){
            alert(name);
        } else{
            alert("You need to log in");
        }
    }

    render() {
        return (
            <Router >
                <Navigation showModal={()=>this.handleModalShow("loginModal")} cookies={this.props.cookies}/>
                <div id="content">
                    <ToggleNavButton/>
                    <LoginForm isLogged={this.state.isLogged} show={this.state.loginModalShown} hide={()=>{this.handleModalHide("loginModal")}} />
                    <Switch>
                        <Route exact path="/" render={()=> {return <Home cookies={this.props.cookies}/>} }/>
                        <Route path="/directory" component={Directory}/>
                        <Route path="/calendar" component={Calendar}/>
                        <Route path="/crosses" component={Crosses}/>
                        <Route path="/diagrams" render={()=> {return <Diagrams cookies={this.props.cookies}/>} }/>{/*</Route>component={Diagrams}/>*/}
                    </Switch>

                </div>
            </Router >
        );
    }
}

export default withCookies(App);