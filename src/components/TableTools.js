import React, { Component } from 'react';
import "../styles/tableTools.css"
class TableTools extends Component {
    render() {
        return (
            <div id="tableTools">
                <div id="pageContainer">
                    <div className="leftTriangle" id="previousPage" onClick={()=>{this.props.turnPage(-1)}}></div>
                    <input type="text" name="page" className="form-control" id="pageNumber" disabled value={this.props.currentPage} />
                    <div className="rightTriangle" id="nextPage" onClick={()=>{this.props.turnPage(1)}}></div>
                </div>

                <select className="form-control" id="itemsPerPage" onChange={this.props.updateNumOfItems}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>

            </div>
        );

    }
}

export default TableTools;