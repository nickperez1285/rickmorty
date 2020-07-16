import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import styled from 'styled-components';
import Login from "../components/Login"


const StyledDiv = styled.div`
 color:red
text-align:center

`;



export default function WelcomePage() {

    return (
        <div>
          <Login /> <br/>

        <StyledDiv className="welcome-page">
      <header>
       <center> <h1>Welcome to the ultimate fan site!</h1> </center>
        <img
        className="main-img"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="rick"
        /><br/>

      </header>
    </StyledDiv>
          </div>

    );
}
