import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home';
import Directory from './containers/Directory';
import Calendar from './containers/Calendar';
import Crosses from './containers/Crosses';
import Diagrams from './containers/Diagrams';
import ToggleNavButton from './components/ToggleNavButton.js';
import LoginForm from './components/Navigation/LoginForm';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

    state = {
        isLogged: false,
        user: {},
        modalStates: {
            loginModal: false,
            employeeModal: false,
            crossModal: false,
            calendarModal: false,
        }

    }

    componentDidMount() {
        const { cookies } = this.props;
        const name = cookies.get('name');
        if (name) {
            this.setState({ isLogged: true });
        }
    }

    handleModalHide = (modalId) => {
        let modals = Object.assign({}, this.state.modalStates);

        modals[modalId] = false;

        this.setState({ modalStates: modals })
    }

    handleModalShow = (modalId) => {
        let modals = Object.assign({}, this.state.modalStates);
        const keys = Object.keys(modals);

        for (const key of keys) {
            modals[key] = (key === modalId) ? true : false;
        }

        this.setState({ modalStates: modals })
    }

    logout = () => {
        const { cookies } = this.props;


        fetch('http://127.0.0.1/includes/logout.php', {
            method: 'POST',
        }).then(res => {
            cookies.remove('name');
            alert("Godspeed my friend");
            let modals = Object.assign({}, this.state.modalStates);
            modals.crossModal = false;
            this.setState({ isLogged: false, modalStates: modals });
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
                    <LoginForm isLogged={this.state.isLogged} login={this.login} show={this.state.modalStates.loginModal}
                        hide={() => { this.handleModalHide("loginModal") }} />
                    <Switch>
                        <Route exact path="/" render={() => { return <Home cookies={this.props.cookies} /> }} />
                        <Route path="/directory" render={() => {
                            return <Directory
                                showModal={() => this.handleModalShow("employeeModal")}
                                hide={() => { this.handleModalHide("employeeModal") }}
                                show={this.state.modalStates.employeeModal} />
                        }} />

                        <Route path="/calendar" render={() => {
                            return <Calendar
                                isLogged={this.state.isLogged}
                                showModal={() => this.handleModalShow("calendarModal")}
                                hide={() => this.handleModalHide("calendarModal")}
                                show={this.state.modalStates.calendarModal} />
                        }} />

                        <Route path="/crosses" render={() => {
                            return <Crosses
                                isLogged={this.state.isLogged}
                                showModal={() => this.handleModalShow("crossModal")}
                                hide={() => { this.handleModalHide("crossModal") }}
                                show={this.state.modalStates.crossModal} />
                        }} />
                        <Route path="/diagrams" component={Diagrams} />
                    </Switch>

                </div>
            </Router >
        );
    }
}

export default withCookies(App);