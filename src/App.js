import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Recipes from './components/Recipes'
import LikedRecipes from './components/LikedRecipes'
import Recipe from './components/Recipe'
import EditInstructionGuide from './components/EditInstructionGuide'
import AddInstructionGuide from './components/AddInstructionGuide'
import Register from './components/Register'
import Login from './components/Login'
import AddRecipe from './components/AddRecipe'
import NotFound from './components/NotFound'
import ComingSoon from './components/ComingSoon';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // State for storing Recipes
  const [recipeState, setRecipes] = useState([])
  // State for storing the user's query
  const [queryState, setQuery] = useState('')
  // State for storing user details when they log in
  const [userState, setUser] = useState(null)

  // The first thing that happens is useEffect(), which calls our search function. This sends an Axios request to our backend to get recipes passing in our query that we stored in state.
  // The response will be our recipes, which will be saved into state above. Once it's saved in state we can redner it onto our page.
  useEffect(() => {
    search()
    async function search() {
      let response = await axios.get(`http://localhost:8081/recipes?search=${queryState}`)
      setRecipes(response.data)
    }
    let savedData = localStorage.getItem("user")
    savedData = JSON.parse(savedData)
    setUser(savedData);
  }, [queryState]);

  // Here we are listening for any changes to query. 
  // When it gets updated in state through our onQueryChange function this causes useEffect to run again.
  // Another request is sent with the query saved in state passed as a query
  // Then getItem gets the user's details out of local storage.
  // It's then converted to JSON and saved into state, otherwise the user would be logged out when the page is refreshed.



  // async function searchTags(input){
  //   let response = await axios.get(`http://localhost:8081/recipes?search=${input}`);
  //   setRecipes(response.data);
  //   let savedData = localStorage.getItem("user");
  //   savedData = JSON.parse(savedData);
  //   setUser(savedData);
  // }
  const tagSearch = (query) => {
    console.log("tag search");
    setQuery(query)
  }

  // const tagSearch = (query) => {
  //   let response = await axios.get(`http://localhost:8081/recipes?search=${query}`)
  //   setRecipes(response.data)
  // }

  


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
        <Header userState={userState} logout={onLogout}></Header>
        <Switch>
        <Route path="/" exact>
            <Recipes recipeState={recipeState} tagSearch={tagSearch} userState={userState} onChange={onQueryChange}></Recipes>
            {/* Here is the first page. It's displaying the data we saved into state earlier */}
        </Route>
        <Route path="/likes" exact>
          <LikedRecipes userState={userState}></LikedRecipes>
        </Route>
        <Route path="/register" render={(props) => <Register saveUser={onSaveUser} {...props} />} />
        <Route path="/login" render={(props) => <Login saveUser={onSaveUser} {...props} />} />
        <Route path="/addrecipe" render={(props) => <AddRecipe saveUser={onSaveUser} {...props} />} />
        {/* <Route path="/recipe/:id" component={Recipe}></Route> */}

        <Route path="/comingsoon" render={(props) => <ComingSoon {...props} />} />

        <Route path="/recipe/:id" render={(props) => <Recipe userState={userState} {...props} />} />
        <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
