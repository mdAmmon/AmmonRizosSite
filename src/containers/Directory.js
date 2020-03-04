import React, {
    Component
} from 'react';
import DirectoryList from '../components/DirectoryList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import EmployeeModal from '../components/EmployeeModal';

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
        priority: ''
    }

    modalSetup = (name, position, email, phone, mobile, extension, manager, priority) => {
        console.log(name + ' ' + position);
        this.setState({
            name: name,
            position: position,
            email: email,
            phone: phone,
            mobile: mobile,
            extension: extension,
            manager: manager,
            priority: priority
        }, this.props.showModal());

        

    }
    componentDidMount() {
        this.loadEmployees();
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter
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

        fetch('http://127.0.0.1/includes/directory.php?filter=' + this.state.filter + '&input=' + this.state.input, {
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
                extension={this.state.extension} mobile={this.state.mobile} manager={this.state.manager} />

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