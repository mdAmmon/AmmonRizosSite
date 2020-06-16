import React, { Component } from 'react';
import "../styles/searchbar.css"
class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-8 col-10 searchbar">
                <input type="text" className="form-control" autoComplete="off" name="name" id={this.props.id}
                    placeholder={this.props.placeholder} onChange={this.props.onKeyUp} value={this.props.value?this.props.value: ""}/>
                {this.props.children}
            </div>
        );

    }
}

export default SearchBar;