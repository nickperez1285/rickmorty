import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import styled from 'styled-components';

const StyledDiv = styled.div`
 color:red
text-align:center

`;



export default function WelcomePage() {
  
  return (
    <StyledDiv className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /><br/>
          <Link to="/list">CHARACTER DATABASE</Link>

      </header>
    </StyledDiv>
  );
}
