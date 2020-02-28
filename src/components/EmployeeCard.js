import React, { Component } from 'react';
class EmployeeCard extends Component {

    render() {
        const {priority, nombre, position, email} = this.props;
        const cardImageClass="employeeImage priority" + priority;
        return (
            <div className="card shadowing" key={email}>
                <div className={cardImageClass}></div>
                <h1 className="registryEmpTitle">{nombre}</h1>
                <p className="registryEmpPosition">{position}</p>
                <p className="registryEmpEmail">{email}</p>
            </div>
        );

    }
}

export default EmployeeCard;