
import React, { Component } from 'react';
import CrossesList from './CrossesList';
import "../../styles/crosses.css"
class TableContainer extends Component {
    render() {
        return (this.props.crosses.length)? (
            <div id="tableContainer">
                <table id="tableCrosses">
                    <thead>
                        <tr className="firstRow">
                            <th>Competitor</th>
                            <th>Part Number</th>
                            <th>A&R MFG</th>
                            <th>A&R MPN</th>
                            <th>Direct</th>
                            <th>Comments</th>
                        </tr>
                    </thead>


                    <CrossesList
                        currentPage={this.props.currentPage}
                        itemsPerPage={this.props.itemsPerPage}
                        crosses={this.props.crosses}
                        displayModal={this.props.displayModal} 
                        setActiveCross={this.props.setActiveCross}
                        />

                </table>

            </div>
        ): <h2 className="centered">No records found...</h2>;

    }
}

export default TableContainer;