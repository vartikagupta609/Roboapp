import React from 'react';
import './card.css';
import {robots} from './robots'
import Card from './Card'

const Popup=({closepopup,image,name,email})=>{

    return(
        <div className="popup-back">
         <div className="popup-content">
             <div className="popup-close" onClick={closepopup}>❌</div>  
             <div>
                  <div>
                  <img  src={image} width="200" height="200"/>
                  </div>
                  <div>
                  <h4>{name}</h4>
                  <h6>{email}</h6>
                  </div>
             </div>
              
         </div>
        </div>
    )
}
export default Popup;