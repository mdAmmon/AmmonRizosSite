import React, { Component } from 'react';
import DirectoryList from '../components/Directory/DirectoryList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/Directory/SearchFilters';
import EmployeeModal from '../components/Directory/EmployeeModal';
import "../styles/directory.css"

class Directory extends Component {
    state = {
        input: '',
        employees: [],
        filter: 'All',
        name: '',
        position: '',
        email: '',
        phone: '',
        mobile: '',
        extension: '',
        manager: '',
        priority: '',
        url: 'gray_square.png',
    }

    //Updates state data and shows modal right after
    modalSetup = (name, position, email, phone, mobile, extension, manager, priority, url) => {
        console.log(name + ' ' + position);
        this.setState({
            name: name,
            position: position,
            email: email,
            phone: phone,
            mobile: mobile,
            extension: extension,
            manager: manager,
            priority: priority,
            url: url
        }, this.props.showModal());
    }
    componentDidMount() {
        this.loadEmployees();
        document.title = "A&R Directory"
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter,
            input: ''
        }, () => { this.loadEmployees() });
    }

    onKeyUp = (e) => {
        if (e.target.value !== this.state.input) {
            this.setState({
                input: e.target.value
            }, () => { this.loadEmployees() });
        }
    }

    loadEmployees = () => {
        fetch('https://arizoslocal.herokuapp.com/includes/directory.php?filter=' + this.state.filter + '&input=' + this.state.input, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ employees: res })
            });
    }

    render() {
        return (<div >
            <EmployeeModal show={this.props.show} hide={this.props.hide} priority={this.state.priority}
                name={this.state.name} position={this.state.position} email={this.state.email} phone={this.state.phone}
                extension={this.state.extension} mobile={this.state.mobile} manager={this.state.manager} url={this.state.url} />

            <SearchBar placeholder="Search Name..."
                onKeyUp={this.onKeyUp}
                id="searchEmployee" />
            <SearchFilters setFilter={this.setFilter} />
            <DirectoryList showModal={this.modalSetup} employees={this.state.employees} />
        </div>
        );
    }
}

export default Directory;