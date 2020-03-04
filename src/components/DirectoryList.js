import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
class DirectoryList extends Component {
    render() {
        return (
            <div id="employeeRegistry">
                {this.props.employees.map((employee)=>{
                    return (<EmployeeCard priority={employee.priority} key={employee.email} nombre={employee.nombre} 
                    position={employee.position} email={employee.email} />)
                })}
            </div>
        );

    }
}

export default DirectoryList;