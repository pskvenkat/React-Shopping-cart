import React from 'react';
import dataJson from '../script/cartData.json';
import GridHeader from './header.jsx';
import ProductMain from './product-items.jsx';


class ShoppingBag extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            data: dataJson.productsInCart
        };
    }

    componentDidMount() {
        //console.log(dataJson.productsInCart);
        //this.setState({data: dataJson.productsInCart});
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <GridHeader />
                    <ProductMain  />
                </div>
            </div>
        )
    }
}

export default ShoppingBag;