import React, { Component } from 'react';
class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-8 col-10 searchbar">
                <input type="text" className="form-control" autoComplete="off" name="name" id="searchEmployee"
                    placeholder={this.props.placeholder} onKeyUp={this.props.onKeyUp}/>
            </div>
        );

    }
}

export default SearchBar;