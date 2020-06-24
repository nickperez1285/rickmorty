import React, { useState } from "react";

export default function SearchForm(props) {

  
  


  return (
    <section className="search-form">
    <form onSubmit={props.submitForm} >
	        <input id= 'search' name= "search" onChange= {props.handleChange} type="text" placeholder="search here" value={props.value}/>
	        <button type = "submit"> search </button> 

       
     </form>

    
    </section>
  );
}




