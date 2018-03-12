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
            >
            
                <div>
                
                </div>
                    
            </Modal>
            
        )
    }
}