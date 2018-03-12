import React from 'react';
import OpenModel from './openModel.jsx';
import ProdDescription from './prod-description.jsx';
import dataJson from '../script/cartData.json';
import FooterComponent from './footer.jsx';
import ImageModel from './imageModel.jsx'


let updatedSize = '',
    updatedQty = '',
    finalPriceTotal = 0;
    

class ProductMain extends React.Component {
    constructor(props) {
        super(props)
        
        const dataJSON = JSON.parse(JSON.stringify(dataJson.productsInCart))
        this.state = {
            data: dataJSON,
            grandTotal : 0,
            initialGrandTotal:0
        }
        this.handleGrandTotal = this.handleGrandTotal.bind(this);
        this.removeProdItem = this.removeProdItem.bind(this);
    }
    
    componentDidMount() {
        this.state.data.map(function(object, i) {
            finalPriceTotal  += parseInt(object.p_price);
         })

         this.setState(() => ({grandTotal : finalPriceTotal}))
    }

    handleGrandTotal(grandTot) {
        if(grandTot) {
            const totVal = grandTot + this.state.grandTotal
            this.setState ({grandTotal : totVal})
        }
    }

    removeProdItem(nodeId) {
        const currentState = this.state.data;
         const data = currentState.filter((el) => {
             return el.p_id !== nodeId
         })
         this.setState({data: data})
     }

    render() {
        return (
            <section>
                {this.state.data.map((object, i) => { 
                    return(
                        <ProductItems key={i} data={object} removeProducts = {this.removeProdItem} updateGrandTotal = {this.handleGrandTotal} />
                    )
                })}
               
                <FooterComponent data = {this.state.grandTotal} />
            </section>
        )
    }
}


class ProductItems extends React.Component {  
    constructor(props) {
        super(props)
        this.editClickHandle = this.editClickHandle.bind(this);
        this.closeHanldeClick = this.closeHanldeClick.bind(this);
        this.editSaveHandleClick = this.editSaveHandleClick.bind(this);
        this.onChangeSizeSelect = this.onChangeSizeSelect.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        
        this.state = {
            selectedOption : undefined,
            imageModel : undefined,
            selectedSize: '',
            selectedColor : '',
            totalPrice :'',
            selectedQty : 1,
            finalGrandTotal :0
        }
        this.updateGrandTotal = this.updateGrandTotal.bind(this);
        this.removeProdItem = this.removeProducts.bind(this);
        this.showImageModal = this.showImageModal.bind(this);
    }

    editClickHandle (e) {
        const editValue = e.target.value;
        this.setState (() => ({ 
           selectedOption : editValue 
        }));
        
    }

    closeHanldeClick() { 
        this.setState (() => ({
            selectedOption : undefined,
            imageModel : undefined,
        }));
    }
    
    editSaveHandleClick (e) {
        this.setState (() => ({
            selectedOption : undefined,
            imageModel : undefined,
            selectedSize: updatedSize,
            selectedQty: updatedQty,
            totalPrice : this.props.data.p_price * updatedQty,
            finalGrandTotal : this.state.totalPrice + this.state.finalGrandTotal
        }));

        const grandTot = parseInt(this.props.grandTotal - this.props.data.p_price);
        var prodTot = parseInt(this.props.data.p_price * updatedQty);
        if(updatedQty > 1){
            prodTot = parseInt(prodTot - this.props.data.p_price)
        }
        
      //  console.log(grandTot + "ProdPrice"+ prodTot);
        this.updateGrandTotal(parseInt(prodTot))
    }
    
    updateGrandTotal (prodGrandTotal) {
     this.props.updateGrandTotal(prodGrandTotal);
    }

    onChangeSizeSelect (e) {
        console.log("test"+e)
        updatedSize= e.target.value.toString(); 
        this.setState({selectedSize:updatedSize})
    }

    onChangeQuantity (e) {
        updatedQty = e.target.value;
        this.setState({selectedQty:updatedQty})
    }

    removeProducts(e) {
        this.props.removeProducts(this.props.data.p_id)
    }

    showImageModal() {
        const imageId= this.props.data.p_id;
        this.setState({imageModel: imageId})
    }

    render() {
        return (
            <div className="container-fluid product-container">
                <div className="product-header">
                    <div className="row product-details" id={this.props.data.p_id}>
                        <OpenModel 
                            selectedOption = {this.state.selectedOption} 
                            data={this.props.data} 
                            quantity={this.state.selectedQty}
                            selectedSize={this.state.selectedSize}
                            closeHanldeClick = {this.closeHanldeClick}
                            editSaveHandleClick = {this.editSaveHandleClick}
                            onChangeSizeSelect = {this.onChangeSizeSelect}
                            onChangeQuantity = {this.onChangeQuantity}
                            grandTotal = {this.state.finalGrandTotal}
                            updateGrandTotal = {this.updateGrandTotal}
                        />
                        <ImageModel
                        data={this.props.data}
                        imageModel={this.state.imageModel} 
                        closeHanldeClick = {this.closeHanldeClick} />
                        
                        <div className="col-md-9 product-description">
                            <div className="row">
                                <div className="col-md-3  col-5 image" >
                                    <img src={'./assets/T'+this.props.data.p_id+'.jpg'} onClick={this.showImageModal}/>
                                </div>
                                <ProdDescription data={this.props.data} 
                                editClickHandle = {this.editClickHandle }
                                removeProdItem = {this.removeProdItem} />
                            </div>
                        </div>
                        
                        <div className="col-md-1 product-size">
                            {!!this.state.selectedSize ? this.state.selectedSize : this.props.data.p_selected_size.code}
                        </div>
                        <div className="col-md-1 product-qty">
                            <input type="text" name="" value={this.state.selectedQty} readOnly></input>
                        </div>
                        <div className="col-md-1 product-prize">
                            <sup className="fa fa-dollar"></sup>
                            <span className="prize">{!!this.state.totalPrice ? this.state.totalPrice : this.props.data.p_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductMain;
