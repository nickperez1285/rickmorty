 import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import SearchForm from './SearchForm'

// set results to display  in props and when seperaate component initiated ?

// reteieve list, search list and display results, reset to original list 
const StyledDiv = styled.div`
 color:#0b35ad;
text-align:center
`;


export default function CharacterList() {
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [display, setDisplay] = useState([])


  useEffect(() => {
       axios.get("https://rickandmortyapi.com/api/character/")
      .then(res =>{
        setList(res.data.results)
        setDisplay(res.data.results)
        console.log(res.data.results)
        })       

  }        
,[] );  





 const handleChange = event => {
    setSearch(event.target.value)
  }

   const submitForm = (event) =>{ 
    event.preventDefault();
     const output = list.filter(data => 
      data.name.toLowerCase().includes(search));
      setDisplay(output)

    }
  



useEffect(() =>{

  const searchInput = document.getElementById("search")
  searchInput.value = ('')
 },[submitForm] )

 




  return (

    <StyledDiv  className="character-list">
    
    <SearchForm value={search} handleChange={handleChange} submitForm={submitForm}/>
    {display.map(i =>
      <div>
     <h2><img src = {i.image} width = '75'/> <br/> {i.name}  </h2>
     <h4>Origin: {i.origin.name}</h4>
     <h4>Species: {i.species}</h4>
     
     </div>
     )}

   
     
  
    </StyledDiv>
  );
}
