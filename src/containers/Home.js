import React, { Component } from 'react';
import BoxTitle from '../components/DashBoard/BoxTitle';
import '../styles/dashboard.css';

class Home extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        document.title = "Ammon & Rizos"
    }


    render() {
        return (
            <div style={{ height: "100vh" }}>
                <BoxTitle id="welcoming" title="Hello There" imageUrl="./img/ar.jpeg" />

                <div className="shadowing roundEdges dashboardBox" id="weather">
                    <a className="weatherwidget-io" href="https://forecast7.com/es/20d67n103d42/zapopan/"
                        data-label_1="Zapopan," data-label_2="Mexico" data-mode="Current" data-theme="pure">ZAPOPAN WEATHER
                    </a>
                </div>

                



            </div>

        );

    }
}

export default Home;