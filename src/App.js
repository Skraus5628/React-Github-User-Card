import React from 'react';
import './App.css';
import User from "./Components/User";
import Followers from "./Components/Followers";
import styled from 'styled-components';


const Header = styled.header`

text-align: center;
font-size: 24px;
margin-bottom: 5rem;
text-shadow: 2px 2px indigo;
color: ghostwhite;

`
const Bodybox = styled.section`
    margin: 3rem auto;
    border: 1px solid indigo;
    border-radius: .5rem;
    padding: 1rem;
    width: 85%;
    background: gray;
    box-shadow: 0px 0px 15px 2px indigo;

`


function App() {

  return (


    <div className="App">
      <Header>
        <h1>GitHub User Card</h1>
      </Header>

      <Bodybox>
          <User  />
          <Followers />
      </Bodybox>

    </div>
  );
}

export default App; 