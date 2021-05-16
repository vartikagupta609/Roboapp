import React from 'react';
import './card.css';

const Search=({searchrobo})=>{
    return(
        <input className="pa3 ba b-green bg-light-blue " type="Search" placeholder="Search Robots..." onChange={searchrobo}/>
    )
}
export default Search