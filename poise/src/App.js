import './App.css';
import React from 'react';
import './App.css';
//import axios from 'axios';
import Navigation from './components/navigation/navigation';


function App() {
  /*const data = {
    "description" : "superuser"
    };
  const addRoles = function(){
    console.log("here");
    axios.post('http://localhost:8080/roles' , data ).then((response)=>{
          console.log(response);
    })
  }*/
  return (
    <div className="App">
      
    <p>lear react</p>
    <Navigation></Navigation>
    </div>
  );
}

export default App;
