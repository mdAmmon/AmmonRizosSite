import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import TableTools from '../components/Crosses/TableTools';
import TableContainer from '../components/Crosses/TableContainer';
import InsertCrossModal from '../components/Crosses/InsertCrossModal'
import ManageCrossModal from '../components/Crosses/ManageCrossModal'

class Crosses extends Component {
    state = {
        crosses: [],
        input: "",
        itemsPerPage: 10,
        currentPage: 1,
        activeCross: {
            CROSS_ID: "",
            BRAND: 8, 
            COMPETITOR: 9, 
            COMPETITOR_PART: "", 
            GENERIC: "", 
            comments: "", 
            direct: "NO"}
    }

    componentDidMount() {
        this.loadCrosses();
        document.title = "A&R Crosses"
    }

    updateInput = (e) => {
        this.setState({ input: e.target.value });
    }

    onEnter = (e) =>{
        if (e.key === 'Enter') {
            this.loadCrosses(e.target);
            return;
        }
    }

    setActiveCross = (cross) =>{
        this.setState({activeCross: cross});
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
        //https://arizoslocal.herokuapp.com/includes/crosses.php
        let url = "https://arback-node.herokuapp.com/crosses";
        url += (this.state.input !== "") ? "?input=" + this.state.input : "";
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ crosses: res, input: "", currentPage: 1 });
                // console.log(res);
            });
    }

    render() {

        return (
            <div className="crossesComponent">

                <InsertCrossModal show={this.props.showInsertCrossModal} updateTable={this.loadCrosses} hide={this.props.hideInsertCrossModal} />

                <ManageCrossModal show={this.props.showManageCrossModal}  updateTable={this.loadCrosses} hide={this.props.hideManageCrossModal} cross={this.state.activeCross}/>

                <SearchBar placeholder="Search Competitor's Part..."
                    id="searchCrossInput"
                    onKeyUp={this.updateInput}
                    onEnter = {this.onEnter}
                    value={this.state.input}>
                    <button type="button" className="btn" onClick={this.loadCrosses} id="searchButton">Search</button>
                    <button type="button" className="btn" onClick={() => { this.setState({ input: "" }); this.loadCrosses() }} id="fullSearchButton">Full List</button>
                </SearchBar>

                <TableTools
                    updateNumOfItems={this.changeNumOfItemsPerPage}
                    turnPage={(dir) => { this.turnPage(dir) }}
                    currentPage={this.state.currentPage} />

                <TableContainer currentPage={this.state.currentPage}
                    itemsPerPage={this.state.itemsPerPage}
                    crosses={this.state.crosses} 
                    displayModal={this.props.displayManageCrossModal}
                    setActiveCross={this.setActiveCross}
                />


                {(this.props.isLogged) ? <button className="btn btn-AR"  onClick={this.props.displayInsertCrossModal} id="insertCrossBtn">Add Cross</button> : (null)}

            </div>

        );

    }
}

export default Crosses;