import React, {
    Component
} from 'react';
import DirectoryList from '../components/DirectoryList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';

class Directory extends Component {
    state = {
        input: '',
        employees: [],
        filter: 'All',
    }

    componentDidMount() {
        this.loadEmployees();
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter
        }, ()=>{this.loadEmployees()});
    }

    onKeyUp = (e) => {
        if (e.target.value !== this.state.input) {
            this.setState({
                input: e.target.value
            }, ()=>{this.loadEmployees()});  
        }
    }

    loadEmployees = () => {

        fetch('http://127.0.0.1/includes/directory.php?filter=' + this.state.filter + '&input=' + this.state.input, {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({employees: res})
            });
    }


    render() {
        return ( <div >
            <SearchBar placeholder = "Search Name..."
            onKeyUp = { this.onKeyUp}
            id = "searchEmployee" / >
            <SearchFilters setFilter = {this.setFilter}/> 
            <DirectoryList employees = { this.state.employees}/> 
            </div>

        );

    }
}

export default Directory;