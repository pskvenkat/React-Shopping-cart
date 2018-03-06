import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import dataJson from './cartData.json';
import ShoppingCart from '../components/main.jsx';

class ShoppingCarts extends React.Component {
    render () {
        return (
            <ShoppingCart />
        )
    }
}

ReactDOM.render(<ShoppingCarts/>, document.getElementById('Myapp'));