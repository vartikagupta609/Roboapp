import React from 'react';
import CardList from './cardList';
import './card.css';
import {robots} from './robots'
import Search from './Search'
import Card from './Card' 
import Popup from './Popup'
import Scroll from './Scroll'

class App extends React.Component{

constructor(props){
  super(props)
  this.state={
    message:"ROBOFANS",
    robots:[],
    searchfield:"",
    currentImage:"",
    currentName:"",
    popup:false
  }
};

onSearchChange=(event)=>{
  this.setState({searchfield : event.target.value});
}
popups=(event)=>{
  let currentImage=event.target.parentNode.children[0].src;
  let currentName=event.target.parentNode.children[1].children[0].innerText;
  console.log(currentName);
  // let currentEmail=document.getElementById("email").innerText;
  this.setState({currentImage:currentImage})
  this.setState({currentName:currentName})
 //  this.setState({currentEmail:currentEmail})
  this.setState({popup:true})
}
closepopup=()=>{
  this.setState({popup:false})
}
 componentDidMount() {
    console.log("will Mount");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
      return resp.json();
    })
    .then(user=>{
     this.setState({robots:user});
    })
  }

render(){
  const filteredRobots=this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
    return(
      <React.Fragment>
       {this.state.popup? <Popup closepopup={this.closepopup} image={this.state.currentImage} name={this.state.currentName}/>:""}
        <div className="main-div">
            {/*this.state.message mai render() call ho raha hai 2times 1 on page reload and second onclick of user jo maina nahi likha hai(create button apply on click and on onclick change the message)*/}
           <h1>{this.state.message}</h1> 
          <Search searchrobo={this.onSearchChange}/>
          <Scroll>
          <CardList robots={filteredRobots} popupwindow={this.popups}/>
          </Scroll>
        </div>
        </React.Fragment>
    )
}

}
export default App;