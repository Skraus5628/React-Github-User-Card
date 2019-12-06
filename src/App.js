import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(){
    super(
      
    )

  }


  componentDidMount(){
    axios.get('https://api.github.com/users/skraus5628')
    .then(result =>{
     console.log(result);
  })
  .catch(error =>{
    console.log('error:', error)
  })
  }

  render(){
    return(
      <>
      <h1>Github Users</h1>
      </>
    )
  }

}

export default App;

