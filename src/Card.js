import React from 'react';
import './card.css';
import App from './App'
import Popup from './Popup'

const Card=({name,email,id,popupfun})=>{
    return(  

      <div className="card-container" onClick={popupfun}>
        <img src={`https://robohash.org/${id}`} alt="robotsImage"/>
          <div className="sub-container">
           <p className="name">{name}</p>
           <p id="email">{email}</p>
          </div>
       </div>
    )
} 
export default Card;