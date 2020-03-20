import React, { Component } from 'react';

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

class CalendarBody extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
        }
    }
    componentDidUpdate(nextProps) {
        if (nextProps.year !== this.props.year || nextProps.month !== this.props.month) {
            let url = "http://192.168.1.112/includes/calendarP.php?month=" + this.props.pad(this.props.month + 1, 2) + "&year=" + this.props.year;
            fetch(url).then(res => res.json()).then(res => this.setState({ events: res }, () => {
                console.log(this.state.events);
            })
            );
        }
    }


    render() {
        let rowArr = [];
        let cells = [];
        let keyV;
        let idV;
        let innerContent = "";
        let day = 1;
        const firstDay = (new Date(this.props.year, this.props.month)).getDay();
        let classList = "";

        for (let i = 0; i < 6; i++) {
            cells = [];
            for (let j = 0; j < 7; j++) {
                if (day > daysInMonth(this.props.month, this.props.year)) break;

                keyV = "" + i + j;
                idV = "";
                classList = "";
                innerContent = "";

                if (!(i === 0 && j < firstDay)) {
                    if (day === this.props.today.getDate() && this.props.year === this.props.today.getFullYear()
                        && this.props.month === this.props.today.getMonth()) {
                        classList += "today ";
                    }
                    innerContent = (j === 0 || j === 6) ? "" : this.props.printEvents(day, this.props.month, this.props.year, this.state.events);
                    innerContent = (<>
                        <p>{day}</p>
                        {innerContent}
                    </>);

                    idV = this.props.year + "-" + this.props.pad("" + parseInt(this.props.month + 1), 2) + "-" + this.props.pad("" + parseInt(day), 2);
                    day++;
                }

                cells.push(<td key={keyV} id={idV} className={classList}>{innerContent}</td>);
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