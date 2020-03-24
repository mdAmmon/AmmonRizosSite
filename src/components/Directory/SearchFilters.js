import React, { Component } from 'react';

class SearchFilters extends Component {

    setFilter(event) {
        let active = document.querySelector(".activeFilter");
    
        if (active === event.target) {
            return;
        }
    
        event.target.classList.add('activeFilter');
        active.classList.remove('activeFilter');
    
        document.getElementById("searchEmployee").value = "";

        this.props.setFilter(event.target.textContent);
        // loadEmployeeRecords(event)
    }
    

    
    render() {
        return (
            <ul id="searchFilters">
                <li className="activeFilter" onClick={(e)=>this.setFilter(e)}>All</li>
                <li onClick={(e)=>this.setFilter(e)}>Inside</li>
                <li onClick={(e)=>this.setFilter(e)}>Outside</li>
                <li onClick={(e)=>this.setFilter(e)}>FAE</li>
            </ul>
        );

    }
}

export default SearchFilters;