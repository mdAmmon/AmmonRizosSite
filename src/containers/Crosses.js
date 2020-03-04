import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

class Crosses extends Component {
    render() {
        return (
            <div className="crossesComponent">
                <SearchBar placeholder="Search Competitor's Part..."
                    id="searchCrossInput">
                    <button type="button" class="btn" id="searchButton">Search</button>
                    <button type="button" class="btn" id="fullSearchButton">Full List</button>
                </SearchBar>
            </div>

        );

    }
}

export default Crosses;