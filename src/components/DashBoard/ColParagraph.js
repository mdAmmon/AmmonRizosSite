import React, { Component } from 'react'

import '../../styles/colParagraph.css';

class ColParagraph extends Component {
    render() {
        return (
            <div id={this.props.id} className='colParagraph'>
                <h3 className='colTitle'>{this.props.title}</h3>
                <hr className='colHr'/>
                {this.props.children}

            </div>
        )
    }
}

export default ColParagraph