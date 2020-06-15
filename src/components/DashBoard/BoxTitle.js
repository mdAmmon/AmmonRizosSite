import React, { Component } from 'react';

class BoxTitle extends Component {
    componentDidMount() {
        document.title = "A&R Diagrams"
    }

    render() {
        return (
            <div id={this.props.id} className="shadowing roundEdges boxTitle" style={{backgroundImage: `url(${process.env.PUBLIC_URL+this.props.imageUrl})`}}>
                <div>
                    {this.props.children}
                </div>
                <h1>{this.props.title}</h1>
            </div>
        );

    }
}

export default BoxTitle;