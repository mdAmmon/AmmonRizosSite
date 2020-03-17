import React, { Component } from 'react';
import CalendarBody from './CalendarBody';

const ICONS = {
    vacation: `<i class="fas fa-cocktail"></i>`,
    medical: `<i class="fas fa-notes-medical"></i>`,
    home_office: `<i class="fas fa-home"></i>`,
    visit: `<i class="far fa-building"></i>`,
    business_trip: `<i class="fas fa-plane-departure"></i>`,
    meeting: `<i class="fas fa-users"></i>`
}




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

                <CalendarBody year={this.props.year} month={this.props.month} today={this.props.today}/>

            </table>
        )
    }
}

export default CalendarTable;