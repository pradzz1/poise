import './App.css';
import React from 'react';
import './App.css';
//import axios from 'axios';
import Button from './components/button/button';
import Chart from './components/charts/chart';
import Navigation from './components/navigation/navigation';
import Layout from 'antd/lib/layout/layout';
import Cards from './components/cards/cards';

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
    <Button lable={'Hello'}></Button>
    <Chart></Chart>
    <Cards></Cards>
    <Layout></Layout>
    </div>
  );
}

export default App;
