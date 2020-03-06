import React, { Component } from 'react';
import "../styles/tableTools.css"
class TableTools extends Component {
    render() {
        return (
            <div id="tableTools">
                <div id="pageContainer">
                    <div className="leftTriangle" id="previousPage"></div>
                    <input type="text" name="page" class="form-control" id="pageNumber" disabled value="1" />
                    <div className="rightTriangle" id="nextPage"></div>
                </div>

                <select className="form-control" id="itemsPerPage">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>

            </div>
        );

    }
}

export default TableTools;