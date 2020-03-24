import React, { Component } from 'react';
import DateHeader from '../components/DateHeader';
import JumpToDate from '../components/JumpToDate';
import CalendarTable from '../components/CalendarTable';
import CalendarNavButtons from '../components/CalendarNavButtons';
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
        today: new Date()
    }

    goToToday(){
        this.setState({month: this.state.today.getMonth(), year: this.state.today.getFullYear(), day: this.state.today.getDay()}); 
    }

    changeMonth = (e) =>{
        this.setState({month: parseInt(e.target.value)});
    }

    changeYear = (e) =>{
        this.setState({year: parseInt(e.target.value)});
    }

    goToNextMonth = ()=>{
        const updatedYear = (this.state.month === 11)? this.state.year+1: this.state.year;
        if(updatedYear > this.state.today.getFullYear()+2) return;
        const updatedMonth = (this.state.month +1 ) % 12;

        this.setState({year: updatedYear, month: updatedMonth});
    }

    goToPreviousMonth = () =>{
        const updatedYear = (this.state.month === 0)? this.state.year-1: this.state.year;

        if(updatedYear<this.state.today.getFullYear()-1) return;

        const updatedMonth = (this.state.month === 0)? 11: this.state.month -1;

        this.setState({year: updatedYear, month: updatedMonth});
    }

    //Takes date and event array to determine which events happen within the specified date.
    getEventsforDate = (day, month, year, events) =>{
        let str = year + "-" + pad(month + 1 + "", 2) + "-" + pad("" + day, 2);
        let eventsForTheMonth = events.filter(element => {
            if (str === element.fechaInicio) return true;
            if (element.fechaFin != null && element.fechaFin >= str && element.fechaInicio <= str) return true;
            return false;
        });

        return eventsForTheMonth;
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

    render() {
        return (
            <div id="calendarContainer">
                <DateHeader month={months[this.state.month]} year={this.state.year} />

                <JumpToDate today={this.state.today} year={this.state.year} month={this.state.month} changeYear={this.changeYear} changeMonth={this.changeMonth}/>
            
                <CalendarTable today={this.state.today} year={this.state.year} month={this.state.month} printEvents={this.showFirst3Events} pad={pad}/> 

                <CalendarNavButtons next={this.goToNextMonth} previous={this.goToPreviousMonth}/>                
            </div>
        );

    }
}

export default Calendar;