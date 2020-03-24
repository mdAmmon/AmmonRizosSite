import React, { Component } from 'react';

class DateHeader extends Component {
    render() {
    return <h1 id="dateHeader">{this.props.month + " " + this.props.year}</h1>
    }
}

export default DateHeader;