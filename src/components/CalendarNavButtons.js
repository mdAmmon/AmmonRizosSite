import React, { Component } from 'react';

class CalendarNavButtons extends Component {
    render() {
        return <div className="calendarNavBtn">
            <button className="btn" onClick={this.props.previous}>Previous</button>
            <button className="btn" onClick={this.props.next}>Next</button>
        </div >
    }
}

export default CalendarNavButtons;