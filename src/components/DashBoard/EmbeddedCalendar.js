import React, { Component } from 'react';
import CalendarBody from '../Calendar/CalendarBody';
class EmbeddedCalendar extends Component {

    render() {
        return (
            <div id={this.props.id} className="shadowing roundEdges dashboardBox">
                <table className="table roundEdges" id="calendarEmbeddedTable">
                    <thead>
                        <tr className="roundEdges">
                            <th className="roundEdges"><div className="leftTriangle" id="previousPage" ></div></th>
                            <th colSpan="5"></th>
                            <th className="roundEdges"><div className="rightTriangle" id="previousPage" ></div></th>
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
                    

                    {/* <CalendarBody updatePage={this.props.updatePage} displayEventsModal={this.props.displayEventsModal} year={this.props.year} month={this.props.month} today={this.props.today} printEvents={this.props.printEvents} pad={this.props.pad} /> */}
                </table>
            </div>
        );

    }
}

export default EmbeddedCalendar;