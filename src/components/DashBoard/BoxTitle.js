import React, { Component } from 'react';

class BoxTitle extends Component {
    componentDidMount() {
        document.title = "A&R Diagrams"
    }

    render() {
        return (
            <div>
                <h1>Hola mundo</h1>
                {this.props.children}
            </div>
        );

    }
}

export default BoxTitle;