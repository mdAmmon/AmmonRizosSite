import React, { Component } from 'react'
import months from '../../assets/months';

class EmpBirthday extends Component {
    render() {
        const img = require(`../../img/${this.props.url}`);

        const date = this.props.birthday.split('/');
        const month = months[ parseInt(date[0])-1 ];

        return (
            <div className="employee">
                <div className="profilePic" style={{ backgroundImage: `url(${img})` }}></div>
                <h5>{this.props.name}</h5>
                <p>{month} {date[1]}</p>
            </div>
        )
    }
}

export default EmpBirthday;