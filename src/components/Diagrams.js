import React, { Component } from 'react';

class Diagrams extends Component {
    setCookies = () => {
        const { cookies } = this.props;

        alert(cookies.get('name'));
    }

    render() {
        return (
            <div>
                <h1>Diagrams</h1>
                <button onClick={this.setCookies}>Get them Cookies!</button>
            </div>
        );

    }
}

export default Diagrams;