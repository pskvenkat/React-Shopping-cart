import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class OpenModel extends React.Component {
    constructor(props){
        super(props)
        this.editSaveHandleClicks = this.editSaveHandleClicks.bind(this)
    }
    renderQuantityOpts(len) {
        let arr = [];

        for (let i = 1; i <= len; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }

        return arr;        
    }

    editSaveHandleClicks (e) {
        this.props.editSaveHandleClick(e);
        //console.log(this.props.grandTotal);
        
    }

    
    render(props) { 
        return (
            <Modal
            isOpen={!!this.props.selectedOption}
            contentLabel="Modal"    
            onRequestClose={this.props.closeHanldeClick}
            >
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6 modal-details">
                    <hr/>
                        <h4 className="modal-title">{this.props.data.p_name}</h4>
                        <p className="modal-prize">
                            <sup className="fa fa-dollar"></sup>
                            <span className="prize-value">Price1: {this.props.data.p_price}</span>
                        </p>
                        <center>
                            <div className="modal-colour" id="modal-color-id">
                                {this.props.data.p_available_options.colors.map((obj,i) => 
                                    <label htmlFor={obj.name} key={i} style={{background: obj.hexcode}}></label>)}
                            </div>
                        </center>
                        <center>
                            <p>
                                <select className="modal-size-selection" id="modal-size-id" onChange = {this.props.onChangeSizeSelect}>
                                    {this.props.data.p_available_options.sizes.map((obj, i) => 
                                        <option value={obj.code} key={i}>{obj.name}</option>)}
                                </select>
                                
                                <select id="modal-qty-selection" onChange={this.props.onChangeQuantity}>
                                    {this.renderQuantityOpts(this.props.data.p_quantity)}
                                </select>	
                            </p>
                        </center>
                        <center>
                            <button className="modal-edit" type="button" onClick ={this.editSaveHandleClicks}>Update</button>
                        </center>
                        <p className="modal-product-details"><a href="#">See product details</a></p>
                    </div>
                    <div className="col-md-6 modal-image-content">
                        <img src={'./assets/T'+this.props.data.p_id+'.jpg'}/>
                    </div>
                </div>
                <button type="submit" className="close-model" onClick={this.props.closeHanldeClick}>X</button>
            </div>
            
            </Modal>
        )
    }
} 



export default OpenModel