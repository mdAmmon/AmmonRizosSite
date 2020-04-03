import React, { Component } from 'react';
import CalendarBody from '../Calendar/CalendarBody';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class EmbeddedCalendar extends Component {
    componentDidMount(){
        this.props.goToToday();
    }

    showEventsMark = (events) => {
        return (events[0].length > 0) ? <div className="calendarCircle"></div> : "";
    }

    onClickFunc = (e) => {
        alert("you need to redirect to calendar");
    }

    render() {
        return (
            <div id={this.props.id} className="shadowing roundEdges dashboardBox">
                <table className="roundEdges" id="calendarEmbeddedTable">
                    <thead>
                        <tr className="roundEdges">
                            <th className="roundEdges" onClick={this.props.goToPreviousMonth}><div className="leftTriangle" id="previousPage" ></div></th>
                            <th colSpan="5">{months[this.props.month] + " " + this.props.year}</th>
                            <th className="roundEdges" onClick={this.props.goToNextMonth}><div className="rightTriangle" id="nextPage"></div></th>
                        </tr>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                    </thead>

                    <CalendarBody updatePage={false} onClickFunc={this.onClickFunc} year={this.props.year} month={this.props.month} today={this.props.today} printEvents={this.showEventsMark} />

                </table>
            </div>
        );

    }
}

export default EmbeddedCalendar;