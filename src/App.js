import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';

import Navigation from './components/Navigation';
import Home from './containers/Home';
import Directory from './containers/Directory';
import Calendar from './containers/Calendar';
import Crosses from './containers/Crosses';
import Diagrams from './containers/Diagrams';
import ToggleNavButton from './components/ToggleNavButton.js';
import LoginForm from './components/LoginForm';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

    state = {
        isLogged: false,
        user: {},
        loginModalShown: false,
        employeeModalShown: false,
    }

    componentDidMount() {
        const { cookies } = this.props;
        const name = cookies.get('name');
        if (name) {
            this.setState({ isLogged: true });
        }
    }

    handleModalHide = (modalId) => {
        switch (modalId) {
            case "loginModal": this.setState({ loginModalShown: false }); break;
            case "employeeModal": this.setState({ employeeModalShown: false }); break;
            default: break;
        }
    }

    handleModalShow = (modalId) => {
        switch (modalId) {
            case "loginModal": this.setState({ loginModalShown: true }); break;
            case "employeeModal": this.setState({ employeeModalShown: true }); break;
            default: break;
        }
    }

    logout = () => {
        const { cookies } = this.props;

        fetch('http://127.0.0.1/includes/logout.php', {
            method: 'POST',   
        }).then(res => {
            cookies.remove('name');
            alert("Godspeed my friend");
            this.setState({ isLogged: false });
        })
        return this.state.isLogged;
    }

    login = (name) => {
        const { cookies } = this.props;
        this.setState({ isLogged: true, user: { name } });
        const hour = 3600;
        cookies.set('name', name, { maxAge: 3 * hour });
    }

    render() {
        return (
            <Router >
                <Navigation showModal={() => this.handleModalShow("loginModal")} logout={this.logout} isLogged={this.state.isLogged} />
                <div id="content">
                    <ToggleNavButton />
                    <LoginForm isLogged={this.state.isLogged} login={this.login} show={this.state.loginModalShown} hide={() => { this.handleModalHide("loginModal") }} />
                    <Switch>
                        <Route exact path="/" render={() => { return <Home cookies={this.props.cookies} /> }} />
                        <Route path="/directory" component={Directory} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/crosses" component={Crosses} />
                        <Route path="/diagrams" component={Diagrams}/>
                    </Switch>

                </div>
            </Router >
        );
    }
}

export default withCookies(App);