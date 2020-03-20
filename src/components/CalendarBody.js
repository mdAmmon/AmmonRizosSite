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

const ICONS = {
    vacation: <i className="fas fa-cocktail"></i>,
    medical: <i className="fas fa-notes-medical"></i>,
    home_office: <i className="fas fa-home"></i>,
    visit: <i className="far fa-building"></i>,
    business_trip: <i className="fas fa-plane-departure"></i>,
    meeting: <i className="fas fa-users"></i>
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
            let url = "http://127.0.0.1/includes/calendarP.php?month=" + pad(this.props.month + 1, 2) + "&year=" + this.props.year;
            fetch(url).then(res => res.json()).then(res => this.setState({ events: res }, () => {
                console.log(this.state.events);
            })
            );
        }
    }

    printEvents = (day, month, year) => {
        let str = year + "-" + pad(month+1+"", 2) + "-" + pad("" + day, 2);
        // console.log(str);
        let eventsForTheMonth = this.state.events.filter(element => {
            let [yearE, monthE, dayE] = element.fechaInicio.split('-');
            if (day === parseInt(dayE) && parseInt(monthE) == month && parseInt(yearE) === year) return true;
            if (element.fechaFin != null && element.fechaFin >= str && element.fechaInicio <= str) return true;
            return false;
        });


        // console.log(eventsForTheMonth);
        return eventsForTheMonth.filter((element, index) => { return (index < 3) ? true : false })
    .map(element => { return <h6 key={element.id}className={element.principal}>{ICONS[element.tipo]} &nbsp;&nbsp; {element.nombre}</h6> });
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
                    innerContent = (j === 0 || j === 6) ? "" : this.printEvents(day, this.props.month, this.props.year);
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