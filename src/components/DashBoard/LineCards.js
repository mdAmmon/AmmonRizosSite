import React, { Component } from 'react';
import Mexico from "../../img/mexico-flag.svg"
import US from "../../img/united-states-of-america-flag.svg"

class LineCards extends Component {

    render() {
        return (
            <div id={this.props.id} className="shadowing roundEdges dashboardBox">
                <h6>Line Cards</h6>
                <a href="#"><img id="Mexico" className="roundEdges" src={Mexico} alt="Mexico" /></a>
                <a href="#"><img id="US" className="roundEdges" src={US} alt="United States" /></a>
            </div>
        );

    }
}

export default LineCards;