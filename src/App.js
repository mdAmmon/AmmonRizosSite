import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { logout, loginSuccessSetUser } from './redux/User/user.actions';
import { selectIsLoggedIn } from './redux/User/user.selectors';


import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home';
import ToggleNavButton from './components/ToggleNavButton.js';
import LoginForm from './components/Navigation/LoginForm';
import ApplicationSubFields from './components/Diagrams/ApplicationSubFields';

import "bootstrap/dist/css/bootstrap.min.css";

const Directory = React.lazy(() => import('./containers/Directory'));
const Calendar = React.lazy(() => import('./containers/Calendar'));
const Crosses = React.lazy(() => import('./containers/Crosses'));
const Diagrams = React.lazy(() => import('./containers/Diagrams'));
const Diagram = React.lazy(() => import('./components/Diagrams/Diagram'));
const CrossFinder = React.lazy(() => import('./containers/CrossFinder'));


class App extends Component {

    state = {
        user: {},
        day: "",
        month: "",
        year: "",
        today: new Date(),
        modalStates: {
            loginModal: false,
            employeeModal: false,
            crossModal: false,
            calendarModal: false,
            addEventModal: false,
            manageCrossModal: false
        }
    }

    componentDidMount() {
        const username = localStorage.getItem('username')
        if (username) {
            console.log('already logged in');
            this.props.setUser({name: username});
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
        alert("Godspeed my friend");
        this.props.logout();
        let modals = Object.assign({}, this.state.modalStates);
        modals.crossModal = false;
        this.setState({ isLogged: false, modalStates: modals });

        return this.state.isLogged;
    }

    goToToday = () => {
        this.setState({ month: this.state.today.getMonth(), year: this.state.today.getFullYear(), day: this.state.today.getDay() });
    }

    changeMonth = (e) => {
        this.setState({ month: parseInt(e.target.value) });
    }

    changeYear = (e) => {
        this.setState({ year: parseInt(e.target.value) });
    }

    goToNextMonth = () => {
        const updatedYear = (this.state.month === 11) ? this.state.year + 1 : this.state.year;
        if (updatedYear > this.state.today.getFullYear() + 2) return;
        const updatedMonth = (this.state.month + 1) % 12;

        this.setState({ year: updatedYear, month: updatedMonth });
    }

    goToPreviousMonth = () => {
        const updatedYear = (this.state.month === 0) ? this.state.year - 1 : this.state.year;

        if (updatedYear < this.state.today.getFullYear() - 1) return;

        const updatedMonth = (this.state.month === 0) ? 11 : this.state.month - 1;

        this.setState({ year: updatedYear, month: updatedMonth });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL} fallback={() => <h1>Error. Unexpected Behavior</h1>} >
                <Navigation showModal={() => this.handleModalShow("loginModal")} logout={this.logout} isLogged={this.state.isLogged} />
                <ToggleNavButton />
                <div id="content">
                    <LoginForm isLogged={this.state.isLogged} show={this.state.modalStates.loginModal}
                        hide={() => { this.handleModalHide("loginModal") }} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" render={() => {
                                return <Home
                                    day={this.state.day} month={this.state.month} year={this.state.year}
                                    today={this.state.today}
                                    goToToday={this.goToToday}
                                    goToNextMonth={this.goToNextMonth}
                                    goToPreviousMonth={this.goToPreviousMonth}
                                />

                            }} />

                            <Route path="/directory" render={() => {
                                return <Directory
                                    showModal={() => this.handleModalShow("employeeModal")}
                                    hide={() => { this.handleModalHide("employeeModal") }}
                                    show={this.state.modalStates.employeeModal}
                                />
                            }} />

                            <Route path="/calendar" render={() => {
                                return <Calendar
                                    isLogged={this.state.isLogged}
                                    showModal={() => this.handleModalShow("calendarModal")}
                                    hide={() => this.handleModalHide("calendarModal")}
                                    show={this.state.modalStates.calendarModal}
                                    showModalAddEvent={() => this.handleModalShow("addEventModal")}
                                    hideAddEvent={() => { this.handleModalHide("addEventModal") }}
                                    showAddEvent={this.state.modalStates.addEventModal}
                                    day={this.state.day} month={this.state.month} year={this.state.year}
                                    today={this.state.today}
                                    goToToday={this.goToToday}
                                    goToNextMonth={this.goToNextMonth}
                                    goToPreviousMonth={this.goToPreviousMonth}
                                    changeMonth={this.changeMonth}
                                    changeYear={this.changeYear}
                                />
                            }} />

                            <Route path="/crosses/verify" component={CrossFinder} />

                            <Route path="/crosses" render={() => {
                                return <Crosses
                                    displayInsertCrossModal={() => this.handleModalShow("crossModal")}
                                    hideInsertCrossModal={() => { this.handleModalHide("crossModal") }}
                                    showInsertCrossModal={this.state.modalStates.crossModal}
                                    displayManageCrossModal={() => this.handleModalShow("manageCrossModal")}
                                    hideManageCrossModal={() => { this.handleModalHide("manageCrossModal") }}
                                    showManageCrossModal={this.state.modalStates.manageCrossModal}

                                />
                            }} />
                            <Route exact path="/diagrams" component={Diagrams} />
                            <Route path="/diagrams/:field/:diagram" component={Diagram} />
                            <Route path="/diagrams/:field" component={ApplicationSubFields} />

                        </Switch>
                    </Suspense>
                </div>
            </Router >
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isLogged: selectIsLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    setUser: user => dispatch(loginSuccessSetUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);