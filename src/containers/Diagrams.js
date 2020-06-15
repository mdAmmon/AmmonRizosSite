import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../styles/diagrams.css';



class Diagrams extends Component {
    componentDidMount() {
        document.title = "A&R Diagrams"
    }

    render() {
        return (
            <div style={{ height: '90%', width: '95%', margin: '0 auto' }}>
                <h1>Applications Block Diagrams</h1>
                <section id="main-block-diagrams" >
                    <Link to="/diagrams/automotive" className="shadowing">
                            <h2>AUTOMOTIVE</h2>
                    </Link>

                    <Link to='/diagrams/dc-dc' className="shadowing">
                            <h2>DC-DC</h2>
                    </Link>

                    <Link to='/diagrams/motor-control' className="shadowing">
                            <h2>MOTOR CONTROL</h2>
                    </Link>

                    <Link to='/diagrams/led-lightning' className="shadowing">
                            <h2>LED LIGHTNING</h2>
                    </Link>

                </section>

            </div>
        );

    }
}

export default withRouter(Diagrams);