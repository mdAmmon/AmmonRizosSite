import React, { Component } from 'react';
import DateHeader from '../components/Calendar/DateHeader';
import JumpToDate from '../components/Calendar/JumpToDate';
import CalendarTable from '../components/Calendar/CalendarTable';
import AddEventModal from '../components/Calendar/AddEventModal';
import CalendarEventsModal from '../components/Calendar/CalendarEventsModal';
import CalendarNavButtons from '../components/Calendar/CalendarNavButtons';
import '../styles/calendar.css';
import '../styles/principalsColors.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Icons that show the type of an event on the calendar.
const ICONS = {
    vacation: <i className="fas fa-cocktail"></i>,
    medical: <i className="fas fa-notes-medical"></i>,
    home_office: <i className="fas fa-home"></i>,
    visit: <i className="far fa-building"></i>,
    business_trip: <i className="fas fa-plane-departure"></i>,
    meeting: <i className="fas fa-users"></i>
}

//Given a number parsed as string if it is a single digit with the second argument set to 2, it adds zeroes to the left.
function pad(s, size) {
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

class Calendar extends Component {
    state = {
        day: "",
        month: "",
        year: "",
        today: new Date(),
        modalDate: "",
        modalEvents: [],
        updatePage: false,
    }

    goToToday() {
        this.setState({ month: this.state.today.getMonth(), year: this.state.today.getFullYear(), day: this.state.today.getDay() });
    }

    changeMonth = (e) => {
        this.setState({ month: parseInt(e.target.value) });
    }

    changeYear = (e) => {
        this.setState({ year: parseInt(e.target.value) });
    }

    goToNextMonth = () => {
        const updatedYear = (this.state.month === 11) ? this.state.year + 1 : this.state.year;
        if (updatedYear > this.state.today.getFullYear() + 2) return;
        const updatedMonth = (this.state.month + 1) % 12;

        this.setState({ year: updatedYear, month: updatedMonth });
    }

    goToPreviousMonth = () => {
        const updatedYear = (this.state.month === 0) ? this.state.year - 1 : this.state.year;

        if (updatedYear < this.state.today.getFullYear() - 1) return;

        const updatedMonth = (this.state.month === 0) ? 11 : this.state.month - 1;

        this.setState({ year: updatedYear, month: updatedMonth });
    }

    //Takes date and event array to determine which events happen within the specified date.
    getEventsforDate = (day, month, year, events) => {
        let str = year + "-" + pad(month + "", 2) + "-" + pad("" + day, 2);
        let eventsForTheMonth = events.filter(element => {
            if (str === element.fechaInicio) return true;
            if (element.fechaFin != null && element.fechaFin >= str && element.fechaInicio <= str) return true;
            return false;
        });

        return eventsForTheMonth;
    }

    displayEventsModal = (date, events) => {
        date = date.split("-").reverse();
        let dateEvents = this.getEventsforDate(date[0], parseInt(date[1]), date[2], events);
        this.setState({ modalDate: date.join("/"), modalEvents: dateEvents }, this.props.showModal());
    }
    //Function that shows at most 3 of the events that happen in a date in the calendar. Defined here so calendar body can take any other function.
    showFirst3Events = (day, month, year, events) => {
        let eventsForTheMonth = this.getEventsforDate(day, month, year, events);
        let calendarEvents = eventsForTheMonth.filter((element, index) => { return (index < 3) ? true : false })
            .map(element => { return <h6 key={element.id} className={element.principal}>{ICONS[element.tipo]} &nbsp; <span className="hideOnSmallDevice">{element.nombre}</span></h6> });

        if (eventsForTheMonth.length > 3) {
            calendarEvents.push(<div key={4} className="seeMoreEvents"></div>)
        }
        return calendarEvents;
    }

    componentDidMount() {
        document.title = "A&R Calendar";
        this.goToToday();
    }

    deleteEvent = (id) => {
        let body = new FormData();

        body.append('id', id);

        fetch("http://192.168.1.112/includes/calendarP.php", {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .catch(error => alert("something went wrong. :("))
            .then(response => {
                if (response) {
                    alert(response);
                    this.props.hide();
                    this.goToToday();
                    this.setState({updatePage: !this.state.updatePage});
                }
            });

    }


    addEvent = (object) => {
        const url = "http://192.168.1.112/includes/calendarP.php";

        fetch(url, {
            method: "POST",
            body: object,
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(response => {
                alert(response);
                this.setState({updatePage: !this.state.updatePage});
            })
            .catch(error => alert(error));      
    }


    render() {
        return (
            <div id="calendarContainer">
                <CalendarEventsModal
                    deleteEvent={this.deleteEvent}
                    date={this.state.modalDate}
                    events={this.state.modalEvents}
                    isLogged={this.props.isLogged}
                    show={this.props.show} hide={this.props.hide}
                    showModalAddEvent={this.props.showModalAddEvent} />

                <AddEventModal addEvent={this.addEvent} show={this.props.showAddEvent} hide={this.props.hideAddEvent} date={this.state.modalDate} />
                <DateHeader month={months[this.state.month]} year={this.state.year} />

                <JumpToDate today={this.state.today} year={this.state.year} month={this.state.month} changeYear={this.changeYear} changeMonth={this.changeMonth} />

                <CalendarTable updatePage={this.state.updatePage} displayEventsModal={this.displayEventsModal} today={this.state.today} year={this.state.year} month={this.state.month} printEvents={this.showFirst3Events} pad={pad} />

                <CalendarNavButtons next={this.goToNextMonth} previous={this.goToPreviousMonth} />



            </div>
        );

    }
}

export default Calendar;