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
                        url="gray_square.png" location={employee.location_name}
                        // url={employee.url}
                    />)
                })}
            </div>
        );

    }
}

export default DirectoryList;