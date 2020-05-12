import React, { useState } from 'react';
import "./bootstrap.css"
import { Router } from "@reach/router"

import Header from "./components/Header"
import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"
import EditAuthorForm from "./components/EditAuthorForm"

function App() {

  const [counter, setCounter] = useState({count: 0})

  return (
    <div className="App">
      <Header />
      <Router>
        <AuthorsTable counter={counter} setCounter={setCounter} path="/"/>
        <CreateAuthorForm setCounter={setCounter} path="/new"/>
        <EditAuthorForm path="/:id"/>
      </Router>
    </div>
  );
}
      
export default App;
      