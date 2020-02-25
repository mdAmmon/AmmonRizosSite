import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Directory from './components/Directory';
import Calendar from './components/Calendar';
import Crosses from './components/Crosses';
import Diagrams from './components/Diagrams';
import ToggleNavButton from './components/ToggleNavButton.js';

class App extends Component {
    render() {
        return (
            <Router >
                <Navigation />
                <div id="content">
                    <ToggleNavButton/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/directory" component={Directory}/>
                        <Route path="/calendar" component={Calendar}/>
                        <Route path="/crosses" component={Crosses}/>
                        <Route path="/diagrams" component={Diagrams}/>
                    </Switch>

                </div>
            </Router >
        );
    }
}

export default App;