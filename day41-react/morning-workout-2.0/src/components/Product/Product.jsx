import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (

            <div className="product">

                <img src={this.props.product.img_url} alt={this.props.product.name}/>
                <div className="name">{this.props.product.name}</div>

           </div>
        )
    }
}