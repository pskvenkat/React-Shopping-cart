import React from 'react';

const ProdDescription = (props) => (
   
    <div className="col-md-9 col-7 description">
        <div className="description-content">
            <p className="heading">Heading : {props.data.p_name}</p>
            <p className="sytle">Style :{props.data.p_style} </p>
            <p className="colour">Colour :<span>{props.data.p_selected_color.name}</span></p>
        </div>
        <div className="description-function-desktop">
            <ul>
                <li>
                    <button type="button" className="btn edit-item" value={props.data.p_selected_color.name} onClick={props.editClickHandle} >Edit</button>
                </li>
                <li ><button type="button" data-control="userBtn" className="remove-item" onClick={props.removeProdItem}><span className="fa fa-times"></span>
                    Remove</button>
                </li>
            </ul>
        </div>	
    </div>
)

export default ProdDescription