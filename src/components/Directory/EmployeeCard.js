import React, { Component } from 'react';
class EmployeeCard extends Component {

    render() {
        const {priority, name, position, email, phone, mobile, extension, manager, url} = this.props;
        const cardImageClass="employeeImage priority" + priority;

        const img = require(`../../img/${this.props.url}`);
        return (
            <div onClick={()=>{this.props.showModal({name, position, email, phone, mobile, extension, manager, priority, url})} }
            
            className="card shadowing" key={email}>
                <div className={cardImageClass} style={{backgroundImage: `url(${img})`}}></div>
                <h1 className="registryEmpTitle">{name}</h1>
                <p className="registryEmpPosition">{position}</p>
                <p className="registryEmpEmail">{email}</p>
            </div>
        );

    }
}

export default EmployeeCard;