import React, { Component } from 'react';
import BoxTitle from '../components/DashBoard/BoxTitle';
import '../styles/dashboard.css';
import LineCards from '../components/DashBoard/LineCards';
import EmbeddedCalendar from '../components/DashBoard/EmbeddedCalendar';
import ProductOfMonth from '../components/DashBoard/ProductOfMonth';
import Birthdays from '../components/DashBoard/Birthdays';
import ColParagraph from '../components/DashBoard/ColParagraph';

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
                <BoxTitle id="welcoming" title="Hello There" imageUrl="/img/ar.jpeg" />

                <div className="shadowing roundEdges dashboardBox" id="weather">
                    {/* <a className="weatherwidget-io" href="https://forecast7.com/es/20d67n103d42/zapopan/"
                        data-label_1="Zapopan," data-label_2="Mexico" data-mode="Current" data-theme="pure">ZAPOPAN WEATHER
                    </a> */}
                </div>

                <LineCards id="lineCards" />


                <div className="flexContainerRow" id="secondRow">
                    <EmbeddedCalendar id="embeddedCalendar"
                        day={this.props.day} month={this.props.month} year={this.props.year}
                        today={this.props.today}
                        goToToday={this.props.goToToday}
                        goToNextMonth={this.props.goToNextMonth}
                        goToPreviousMonth={this.props.goToPreviousMonth}
                    />

                    <ProductOfMonth
                        backgroundColor='#0A471F'
                        principal="ON Semiconductor&#174;"
                        productInfo="NCV-RSL 10: Industry's Lowest Power BLE"
                        img="logo_On.png"
                    />

                    <Birthdays id="birthdays" />
                </div>


                <div id="coreValues" className="flexContainerRow">

                    <ColParagraph title="Our Mission" id="Mission">
                        <p>
                            Bring our principal’s market share to the top of the supply chain position in our territories as
                            well as be the number one solution provider for demand creation solutions. Meet and exceed our
                            customer’s support service needs.
                        </p>
                    </ColParagraph>

                    <ColParagraph title="Our Vision" id="Vision">
                        <p>To be the first choice for electronic manufacturers representation
                        in our territories based on honesty, technical knowledge and service support.
                        </p>
                    </ColParagraph>

                    <ColParagraph title="Our Values" id="Values">
                        <ul>
                            <li>&#8211; Customer Driven</li>
                            <li>&#8211; Integrity</li>
                            <li>&#8211; Passion for Excellence</li>
                            <li>&#8211; People Focused</li>
                            <li>&#8211; Innovative Problem Solving</li>
                            <li>&#8211; Innovative Problem Solving</li>
                            <li>&#8211; Teamwork</li>
                        </ul>
                    </ColParagraph>
                </div>


            </div>
        );

    }
}

export default Home;