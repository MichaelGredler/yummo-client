import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import InstructionGuides from './components/Recipes'
import InstructionGuide from './components/Recipe'
import EditInstructionGuide from './components/EditInstructionGuide'
import AddInstructionGuide from './components/AddInstructionGuide'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // State for storing Recipes
  const [instructionGuides, setInstructionGuides] = useState([])
  // State for storing the user's query
  const [query, setQuery] = useState('')
  // State for storing user details when they log in
  const [user, setUser] = useState(null)

  // The first thing that happens is useEffect(), which calls our search function. This sends an Axios request to our backend to get recipes passing in our query that we stored in state.
  // The response will be our recipes, which will be saved into state above. Once it's saved in state we can redner it onto our page.
  useEffect(() => {
    search()
    async function search() {
      let response = await axios.get(`http://localhost:8081/instructionguides?search=${query}`)
      setInstructionGuides(response.data)
    }
    let savedData = localStorage.getItem("user")
    savedData = JSON.parse(savedData)
    setUser(savedData);
  }, [query]);

// Here we are listening for any changes to query. 
// When it gets updated in state through our onQueryChange function this causes useEffect to run again.
// Another request is sent with the query saved in state passed as a query!
// Then getItem gets the user's details out of local storage.
// It's then converted to JSON and saved into state, otherwise the user would be logged out when the page is refreshed.


  const onSaveUser = (input) => {
    localStorage.setItem("user", JSON.stringify(input))
    setUser(input)
  }
// This saves the user to local storage and to our user state.
// This function is passed into our Login component below.


  const onLogout = (input) => {
    localStorage.removeItem("user");
    setUser(null)
  }

  const onQueryChange = (input) => {
    setQuery(input)
  }
  // The input from the user is received by Search.jsx, then passed through InstructionGuides.jsx, then into this function which saves it into our query state. 

  return (
    <Router>
      <div className="App">
        <Header user={user} logout={onLogout}></Header>
        <Switch>
          <Route path="/" exact>
            <InstructionGuides instructionGuides={instructionGuides} user={user} onChange={onQueryChange}></InstructionGuides>
            {/* Here is the first page. It's displaying the data we saved into state earlier */}
          </Route>
          <Route path="/register" render={(props) => <Register saveUser={onSaveUser} {...props} />} />
          <Route path="/login" render={(props) => <Login saveUser={onSaveUser} {...props} />} />
          <Route path="/instructionGuide/:id" component={InstructionGuide}></Route>
          <Route path="/editinstructionGuide/:id" render={(props) => <EditInstructionGuide user={user} {...props} />} />
          <Route path="/addinstructionGuide" component={AddInstructionGuide}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
