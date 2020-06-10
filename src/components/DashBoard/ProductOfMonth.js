import React, { Component } from 'react';
import '../../styles/productOfTheMonth.css'

class ProductOfMonth extends Component {
    render() {
        return (
            <div id="productOfTheMonth" style={{ backgroundColor: this.props.backgroundColor}} className="shadowing roundEdges">
                <div id="productInfo">
                    <h1 id="principal">{this.props.principal}</h1>
                    <img src={require(`../../img/principals/${this.props.img}`)} id="productImage" alt="ON Semi" />

                    <h1>{this.props.productInfo}</h1>
                </div>

                <div id="productLabel">
                    <h2>Product of the Month</h2>
                </div>
            </div>

        )
    }
}

export default ProductOfMonth;
