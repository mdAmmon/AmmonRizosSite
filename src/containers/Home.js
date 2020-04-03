import React, { Component } from 'react';
import BoxTitle from '../components/DashBoard/BoxTitle';
import '../styles/dashboard.css';
import LineCards from '../components/DashBoard/LineCards';
import EmbeddedCalendar from '../components/DashBoard/EmbeddedCalendar';

class Home extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        document.title = "Ammon & Rizos";
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

                <LineCards id="lineCards" />

                <EmbeddedCalendar id="embeddedCalendar"
                    day={this.props.day} month={this.props.month} year={this.props.year}
                    today={this.props.today}
                    goToToday={this.props.goToToday}
                    goToNextMonth={this.props.goToNextMonth}
                    goToPreviousMonth={this.props.goToPreviousMonth}
                />


            </div>

        );

    }
}

export default Home;