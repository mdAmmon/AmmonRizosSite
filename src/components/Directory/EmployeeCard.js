import React, { Component } from 'react';
class EmployeeCard extends Component {

    render() {
        const {priority, name, position, email, phone, mobile, extension, manager} = this.props;
        const cardImageClass="employeeImage priority" + priority;
        return (
            <div onClick={()=>{this.props.showModal(name, position, email, phone, mobile, extension, manager, priority)} }
            
            className="card shadowing" key={email}>
                <div className={cardImageClass}></div>
                <h1 className="registryEmpTitle">{name}</h1>
                <p className="registryEmpPosition">{position}</p>
                <p className="registryEmpEmail">{email}</p>
            </div>
        );

    }
}

export default EmployeeCard;