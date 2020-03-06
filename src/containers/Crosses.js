import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import TableTools from '../components/TableTools';
import TableContainer from '../components/TableContainer';

class Crosses extends Component {
    render() {
        return (
            <div className="crossesComponent">
                <SearchBar placeholder="Search Competitor's Part..."
                    id="searchCrossInput">
                    <button type="button" class="btn" id="searchButton">Search</button>
                    <button type="button" class="btn" id="fullSearchButton">Full List</button>
                </SearchBar>

                <TableTools/>

                <TableContainer/>
            </div>

        );

    }
}

export default Crosses;