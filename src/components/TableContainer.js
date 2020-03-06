
import React, { Component } from 'react';
import CrossesList from '../components/CrossesList';
import "../styles/crosses.css"
class TableContainer extends Component {
    render() {
        return (
            <div id="tableContainer">
                <table id="tableCrosses">
                    <thead>
                        <tr class="firstRow">
                            <th>Competitor</th>
                            <th>Part Number</th>
                            <th>A&R MFG</th>
                            <th>A&R MPN</th>
                            <th>Direct</th>
                            <th>Comments</th>
                        </tr>
                    </thead>


                    <CrossesList />

                </table>

            </div>
        );

    }
}

export default TableContainer;