import React, { Component } from 'react';
import DateHeader from '../components/DateHeader';
import JumpToDate from '../components/JumpToDate';
import CalendarTable from '../components/CalendarTable';
import CalendarNavButtons from '../components/CalendarNavButtons';
import '../styles/calendar.css';
import '../styles/principalsColors.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


class Calendar extends Component {
    state = {
        day: "",
        month: "",
        year: "",
        today: new Date()
    }

    goToToday(){
        let today = new Date();
        this.setState({month: today.getMonth(), year: today.getFullYear(), day: today.getDay()});
        
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

    componentDidMount() {
        document.title = "A&R Calendar";
        this.goToToday();
    }

    render() {
        return (
            <div id="calendarContainer">
                <DateHeader month={months[this.state.month]} year={this.state.year} />

                <JumpToDate today={this.state.today} year={this.state.year} month={this.state.month} changeYear={this.changeYear} changeMonth={this.changeMonth}/>
            
                <CalendarTable today={this.state.today} year={this.state.year} month={this.state.month}/>

                <CalendarNavButtons next={this.goToNextMonth} previous={this.goToPreviousMonth}/>                
            </div>
        );

    }
}

export default Calendar;