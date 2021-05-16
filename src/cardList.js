import React from 'react'
import Card from './Card';


const CardList=({robots,popupwindow})=>{

     const cardComponent= robots.map((user,i) => {
         return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i} popupfun={popupwindow}/>
       })
  return(
      <div>
      {/*<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>   */}
 {cardComponent}
      </div>
     
  )
} 

export default CardList;