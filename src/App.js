import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js'
import SearchForm from './components/SearchForm.js'
import Register from "./components/Register"

// const cors = require('cors');


export default function App() {
    return (
        <main>
       <Link to="/"><Header /></Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/list" component={CharacterList} />
      <Route exact path="/reg" component={Register} />

     

    </main>
    );
}
