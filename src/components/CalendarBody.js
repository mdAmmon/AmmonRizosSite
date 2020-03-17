import React, { Component } from 'react';

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function pad(s, size) {
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}


class CalendarBody extends Component {
    render() {
        let rowArr = [];
        let cells = [];
        let day = 1;
        const firstDay = (new Date(this.props.year, this.props.month)).getDay();
        let classList = "";

        for (let i = 0; i < 6; i++) {
            cells = [];
            for (let j = 0; j < 7; j++) {
                if (day > daysInMonth(this.props.month, this.props.year)) break;

                if (i === 0 && j < firstDay) {
                    cells.push(<td key={"" + i + j}></td>)
                } else {
                    classList = "";
                    if (day === this.props.today.getDate() && this.props.year === this.props.today.getFullYear()
                        && this.props.month === this.props.today.getMonth()) {
                        classList += "today ";
                    }
                    if (j === 0 || j === 6) {
                        classList += "weekend";
                    }
                    cells.push(<td
                        key={"" + i + j}
                        id={this.props.year + "-" + pad("" + parseInt(this.props.month + 1), 2) + "-" + pad("" + parseInt(day), 2)}
                        className={classList}>
                        <p>{day}</p>
                    </td>);

                    day++;
                }
            }
            rowArr.push(<tr key={i}>{cells}</tr>);
            if (day > daysInMonth(this.props.month, this.props.year)) break;
        }

        return (
            <tbody>
                {rowArr}
            </tbody>
        );
    }
}

export default CalendarBody;