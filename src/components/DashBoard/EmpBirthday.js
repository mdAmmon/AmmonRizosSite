import React, { Component } from 'react'

class EmpBirthday extends Component {
    render() {
        const img = require(`../../img/${this.props.url}`);

        return (
            <div className="employee">
                <div className="profilePic" style={{backgroundImage: `url(${img})`}}></div>
                <h5>{this.props.name}</h5>
                <p>{this.props.birthday}</p>
            </div>
        )
    }
}

export default EmpBirthday;