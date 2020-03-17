import React, { Component } from 'react';

class CrossesList extends Component {


    render() {

        const { currentPage, itemsPerPage, crosses } = this.props;

        return (
            <tbody id="tableBody">
                {
                    crosses.slice(itemsPerPage * (currentPage - 1), itemsPerPage * (currentPage)).map(cross => {
                        return (
                            <tr key={cross.COMPETITOR_PART+","+cross.GENERIC}>
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