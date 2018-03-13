import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export default class ImageModel extends React.Component {
    render(props){
        return(
            <Modal
                isOpen={!!this.props.imageModel}
                contentLabel="Modal"    
                onRequestClose={this.props.closeHanldeClick}
                className="imageModal"
            >
            <div>
                <img src={'./assets/T'+this.props.data.p_id+'.jpg'}/>
                
            </div>
            <button type="submit" className="close-model" onClick={this.props.closeHanldeClick}>X</button>

            </Modal>
            
        )
    }
}