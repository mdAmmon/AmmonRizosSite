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
    state = {
        events: [],
    }
    
    componentDidMount(){

    }
    
    printEvent = (day) =>{
        return <h6>{day*2-1}</h6>
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
                    innerContent = (j === 0 || j === 6) ? "": this.printEvent(day); 
                    innerContent = (<>
                        <p>{day}</p>
                        {innerContent}
                    </>);

                    idV = this.props.year + "-" + pad("" + parseInt(this.props.month + 1), 2) + "-" + pad("" + parseInt(day), 2);
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