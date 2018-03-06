
import React from 'react';

class FooterComponent extends React.Component {	
    render (props) {
        return (
            <div className="container-fluid footer-container">
			<div className="row">
				<div className="col-md-4 contact-info">
					<p className="title">Need help<br/>or have a question?</p>
					<p>Call customer servic at <br/><a href="tel:1805555555">1-80-555-5555</a></p>
					<p><a href="#">Chat with one of<br/> our customer care</a></p>
					<p><a href="#">See retun<br/> &amp; exchange policy</a></p>
				</div>
				<div className="col-md-8 cart-container">
					<div className="row promo-code-container">
						<div className="col-md-6 promo-code-title">
							Enter promo code <br/>(will apply automatically)
						</div>
						<div className="col-md-4 promo-code-input">
							<input type="text" name="" value="S_R0" readOnly/>
						</div>
						<div className="col-md-2 promo-code-button">
							<button>Apply</button>
						</div>
					</div>
					<div className="prize-container">
						<div className="prize-total">
							<span className="prize-title">
								Subtotal
							</span>
							<span className="prize-value">
								<sup className="fa fa-dollar"></sup>
								<span className="total-cost-value">{this.props.data}</span>
							</span>
						</div>
						<div className="prize-promo">
							<span className="prize-title">
								Promotion code <span className="coupn-code-applied"></span> applied
							</span>
							<span className="prize-value"> 
								<sup className="fa fa fa-minus"></sup>
								<sup className="fa fa-dollar"></sup>
								<span className="discount-cost-value">0.00</span>
							</span>
						</div>
						<div className="prize-shipping">
							<span className="prize-title">
								Estimated Shipping*<br/>
								<span className="prize-des">You qualify for free shipping<br/>for your order value</span>
							</span>
							<span className="shipping-value">
								free
							</span>
						</div>
						<div className="prize-grandtotal">
							<span className="grandtotal-title">
								Estimated Total<br/>
								<span className="grandtotal-des">Tax extra</span>
							</span>
							<span className="grandtotal-value">
								<sup className="fa fa-dollar"></sup>
								<span className="grandtotal-cost-value">{this.props.data}</span>
							</span>
						</div>
					</div>
					<div className="checkout-container">
						<div className="checkout-header">
							<a href="#">Continue shopping</a>
							<button>Checkout</button>
						</div>
						<div className="checkout-footer">
							<span className="lock"><img src="assets/lock.jpg" alt="image title"/></span>
                            Secure checkout. Shopping is always safe &amp; secure
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default FooterComponent