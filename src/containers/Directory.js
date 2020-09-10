import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchEmployeeDirectoryStart, setActiveEmployee } from '../redux/Directory/directory.actions';
import { createStructuredSelector } from 'reselect';
import { selectEmployeeDirectory, selectActiveEmployeeInfo } from '../redux/Directory/directory.selectors';

import DirectoryList from '../components/Directory/DirectoryList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/Directory/SearchFilters';
import EmployeeModal from '../components/Directory/EmployeeModal';
import "../styles/directory.css"

const Directory = ({ show, hide, showModal, employees, fetchEmployeeDirectory, setActiveEmployeeInfo, activeEmployeeInfo }) => {
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        document.title = "A&R Directory";
    }, []);

    useEffect(() => {
        fetchEmployeeDirectory({ filter, input });

    }, [fetchEmployeeDirectory, filter, input]);


    const modalSetup = (activeEmpInfo) => {
        setActiveEmployeeInfo(activeEmpInfo);
        showModal();
    }

    const setDirectoryFilter = (newFilter) => {
        setFilter(newFilter);
        setInput('');
    }

    const onSearchInputChange = (e) => {
        if (input !== e.target.value) setInput(e.target.value);
    }

    return (
        <div>
            <EmployeeModal show={show} hide={hide} />

            <SearchBar placeholder="Search Name..."
                onKeyUp={onSearchInputChange}
                value={input}
                id="searchEmployee" />
            <SearchFilters setFilter={setDirectoryFilter} />
            <DirectoryList showModal={modalSetup}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    employees: selectEmployeeDirectory,
    activeEmployeeInfo: selectActiveEmployeeInfo
});

const mapDispatchToProps = (dispatch) => ({
    fetchEmployeeDirectory: (requestParams) => dispatch(fetchEmployeeDirectoryStart(requestParams)),
    setActiveEmployeeInfo: (activeEmployeeInfo) => dispatch(setActiveEmployee(activeEmployeeInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory);