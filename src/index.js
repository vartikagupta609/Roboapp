import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from './Search'


ReactDOM.render(
  <React.StrictMode>
    <div>
    <App/>
     
      </div>
  
    {/*<div>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>   
      </div>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
