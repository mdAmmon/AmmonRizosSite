import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import TableTools from '../components/TableTools';
import TableContainer from '../components/TableContainer';

class Crosses extends Component {
    state = {
        crosses: [],
        input: "",
        itemsPerPage: 10,
        currentPage: 1,
    }

    componentDidMount() {
        this.loadCrosses();
    }

    updateInput = (e) => {
        if (e.key === 'Enter') {
            this.loadCrosses(e.target);
            return;
        }
        this.setState({ input: e.target.value });
    }

    changeNumOfItemsPerPage = (e) => {
        // console.log(e.target.value);
        this.setState({ itemsPerPage: parseInt(e.target.value), currentPage: 1 })
    }

    turnPage(dir) {
        const { currentPage, crosses, itemsPerPage } = this.state;

        if (currentPage + dir > Math.ceil(crosses.length / itemsPerPage)
            || currentPage + dir < 1) return;


        this.setState({ currentPage: currentPage + dir });

    }

    loadCrosses = () => {
        let url = "http://127.0.0.1/includes/crosses.php";
        url += (this.state.input !== "") ? "?input=" + this.state.input : "";
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ crosses: res, input: "", currentPage: 1 });
                document.getElementById("searchCrossInput").value ="";
                // console.log(res);
            });
    }

    render() {

        return (
            <div className="crossesComponent">
                <SearchBar placeholder="Search Competitor's Part..."
                    id="searchCrossInput"
                    onKeyUp={this.updateInput}>
                    <button type="button" className="btn" onClick={this.loadCrosses} id="searchButton">Search</button>
                    <button type="button" className="btn" onClick={()=>{this.setState({input: ""}); this.loadCrosses()}} id="fullSearchButton">Full List</button>
                </SearchBar>

                <TableTools
                    updateNumOfItems={this.changeNumOfItemsPerPage}
                    turnPage={(dir) => { this.turnPage(dir) }}
                    currentPage={this.state.currentPage} />

                <TableContainer currentPage={this.state.currentPage}
                    itemsPerPage={this.state.itemsPerPage}
                    crosses={this.state.crosses} />

                    {(this.props.isLogged)? <button className="btn btn-AR" id="insertCrossBtn" onClick={this.loadCrosses}>Add Cross</button>: (null)}

            </div>

        );

    }
}

export default Crosses;