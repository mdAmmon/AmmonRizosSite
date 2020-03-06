import React, { Component } from 'react';

class CrossesList extends Component {


    render() {

        const { currentPage, itemsPerPage, crosses } = this.props;
        const records = [];
        for (let i = 0; i < itemsPerPage; i++) {
            let cross = crosses[itemsPerPage * (currentPage - 1) + i];


            records.push(
                <tr>
                    <th>cross.COMPETITOR</th>
                    <th>cross.COMPETITOR_PART</th>
                    <th>cross.BRAND</th>
                    <th>cross.GENERIC</th>
                    <th>cross.direct</th>
                    <th>cross.comments</th>
                </tr>
            );

        }

        return (
            <tbody id="tableBody">
                {
                    crosses.slice(itemsPerPage * (currentPage - 1), itemsPerPage * (currentPage)).map(cross => {
                        return (
                            <tr key={cross.COMPETITOR_PART+","+cross.GENERIC}>
                                <th>{cross.COMPETITOR}</th>
                                <th>{cross.COMPETITOR_PART}</th>
                                <th>{cross.BRAND}</th>
                                <th>{cross.GENERIC}</th>
                                <th>{cross.direct}</th>
                                <th>{cross.comments}</th>
                            </tr>
                        );
                    })
            }
            </tbody>
        );

    }
}

export default CrossesList;