import React from 'react';

import { connect } from 'react-redux';
import { selectEmployeeDirectory } from '../../redux/Directory/directory.selectors';

import EmployeeCard from './EmployeeCard';

const DirectoryList = ({ employees, showModal }) => (
    <div id="employeeRegistry">
        {employees && employees.map((employee) =>
            (<EmployeeCard key={employee.email} showModal={showModal} employee={employee} />)
        )}
    </div>
);

const mapStateToProps = state => ({
    employees: selectEmployeeDirectory(state)
})

export default connect(mapStateToProps)(DirectoryList);