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

class Calendar extends Component {
    state = {
        modalDate: "",
        modalEvents: [],
        updatePage: false,
    }

    

    displayEventsModal = (events) => {  
        let date = events[1].split("-");  
        
        this.setState({ modalDate: date.reverse().join("/"), modalEvents: events[0] }, this.props.showModal());
    }
    //Function that shows at most 3 of the events that happen in a date in the calendar. Defined here so calendar body can take any other function.
    showFirst3Events = (events) => {
        let eventsForTheMonth = events[0];
        let calendarEvents = eventsForTheMonth.filter((element, index) => { return (index < 3) ? true : false })
            .map(element => { return <h6 key={element.id} className={element.principal}>{ICONS[element.tipo]} &nbsp; <span className="hideOnSmallDevice">{element.nombre}</span></h6> });

        if (eventsForTheMonth.length > 3) {
            calendarEvents.push(<div key={4} className="seeMoreEvents"></div>)
        }
        return calendarEvents;
    }

    componentDidMount() {
        document.title = "A&R Calendar";
        this.props.goToToday();
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
                    this.props.goToToday();
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
                <DateHeader month={months[this.props.month]} year={this.props.year} />

                <JumpToDate today={this.props.today} year={this.props.year} month={this.props.month} changeYear={this.props.changeYear} changeMonth={this.props.changeMonth} />

                <CalendarTable updatePage={this.state.updatePage} displayEventsModal={this.displayEventsModal} today={this.props.today} year={this.props.year} month={this.props.month} printEvents={this.showFirst3Events} />

                <CalendarNavButtons next={this.props.goToNextMonth} previous={this.props.goToPreviousMonth} />



            </div>
        );

    }
}

export default Calendar;