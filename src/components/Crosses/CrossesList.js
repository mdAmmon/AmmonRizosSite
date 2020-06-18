import React, { Component } from 'react';

class CrossesList extends Component {

    displayModal = (cross) =>{
        this.props.setActiveCross(cross);
        this.props.displayModal();
    }
    render() {
        const { currentPage, itemsPerPage, crosses } = this.props;

        return (
            <tbody id="tableBody">
                {
                    crosses.slice(itemsPerPage * (currentPage - 1), itemsPerPage * (currentPage)).map(cross => {
                        return (
                            <tr id={cross.CROSS_ID} key={cross.COMPETITOR_PART+","+cross.GENERIC} onClick={()=>{this.displayModal(cross)}}>
                                <td>{cross.COMPETITOR}</td>
                                <td>{cross.COMPETITOR_PART}</td>
                                <td>{cross.BRAND}</td>
                                <td>{cross.GENERIC}</td>
                                <td>{cross.direct}</td>
                                <td>{cross.comments}</td>
                            </tr>
                        );
                    })
            }
            </tbody>
        );

    }
}

export default CrossesList;