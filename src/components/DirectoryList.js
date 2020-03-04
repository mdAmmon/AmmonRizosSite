import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
class DirectoryList extends Component {
    render() {
        return (
            <div id="employeeRegistry">
                {this.props.employees.map((employee) => {
                    return (<EmployeeCard showModal={this.props.showModal}
                        priority={employee.priority} key={employee.email} name={employee.nombre}
                        position={employee.position} email={employee.email} phone={employee.direct_phone}
                        extension={employee.ext} mobile={employee.mobile_phone} manager={employee.Manager} 
                        url={employee.url} location={employee.location_name}
                    />)
                })}
            </div>
        );

    }
}

export default DirectoryList;