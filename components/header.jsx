import React from 'react';


  
const GridHeader =(props) => (
    <div>
        <div className="row">
            <h1>Shopping Cart Bag</h1>
            <section className="item-header">
                <div className="col-md-9 item-description">
                    <span className="item-count">4</span> Products
                </div>
                <div className="col-md-1 item-details">
                    Size
                </div>
                <div className="col-md-1 item-details">
                    Quantity
                </div>
                <div className="col-md-1 item-details">
                    Price 
                </div>
            </section>
        </div>
    </div>
)


export default GridHeader;
