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
    constructor() {
        super();
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        this.loadEvents();
    }

    //Checks if current month is different from updated month and if it is, it fetches the events for the new month-year date.
    componentDidUpdate(nextProps) {
        if (nextProps.year !== this.props.year || nextProps.month !== this.props.month || nextProps.updatePage !== this.props.updatePage) {
            this.loadEvents();
        }
    }

    loadEvents() {
        // https://arizoslocal.herokuapp.com/includes/calendarP.php
        let url = "https://arback-node.herokuapp.com/calendar/?month=" + pad(this.props.month + 1, 2) + "&year=" + this.props.year;
        fetch(url).then(res => res.json()).then(res => this.setState({ events: res })).catch(err => console.log(err + " events."));
    }

    getEventsforDate = (day, month, year) => {
        let str = year + "-" + pad(month + "", 2) + "-" + pad("" + day, 2);

        let eventsForTheMonth = this.state.events.filter(element => {
            if (str === element.fechaInicio.slice(0,10)) return true;
            if (element.fechaFin != null && element.fechaFin >= str && element.fechaInicio <= str) return true;
            return false;
        });
        // return eventsForTheMonth;

        return [eventsForTheMonth, str];
    }

    //Generates calendar table with days and events for each day.
    render() {
        let rowArr = [];
        let cells = [];
        let keyV;
        let innerContent = "";
        let day = 1;
        const firstDay = (new Date(this.props.year, this.props.month)).getDay();
        let classList = "";

        for (let i = 0; i < 6; i++) {
            cells = [];
            if (day > daysInMonth(this.props.month, this.props.year)) break;
            for (let j = 0; j < 7; j++) {

                keyV = "" + i + j;

                if (day > daysInMonth(this.props.month, this.props.year)) {
                    cells.push(<td key={keyV}></td>);
                    continue;
                };


                classList = "";
                innerContent = "";

                if (!(i === 0 && j < firstDay)) {
                    if (day === this.props.today.getDate() && this.props.year === this.props.today.getFullYear()
                        && this.props.month === this.props.today.getMonth()) {
                        classList += "today ";
                    }
                    let funcDay = day;
                    let eventsForDate = this.getEventsforDate(funcDay, this.props.month + 1, this.props.year);
                    innerContent = (j === 0 || j === 6) ? "" : this.props.printEvents(eventsForDate);
                    innerContent = (<>
                        <p>{day}</p>
                        {innerContent}
                    </>);

                    cells.push(<td key={keyV} id={eventsForDate[1]} onClick={() => this.props.onClickFunc(eventsForDate)} className={classList}>{innerContent}</td>);
                    day++;
                } else {
                    cells.push(<td key={keyV}></td>);
                }

            }
            rowArr.push(<tr key={i}>{cells}</tr>);
        }

        return (
            <tbody>
                {rowArr}
            </tbody>
        );
    }
}

export default CalendarBody;