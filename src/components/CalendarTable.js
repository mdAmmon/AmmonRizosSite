import React, { Component } from 'react';
import CalendarBody from './CalendarBody';

class CalendarTable extends Component {
    
    render() {

        return (
            <table className="table table-bordered" id="calendarTable">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>

                <CalendarBody year={this.props.year} month={this.props.month} today={this.props.today} printEvents={this.props.printEvents} ICONS={this.props.ICONS} pad={this.props.pad}/>

            </table>
        )
    }
}

export default CalendarTable;