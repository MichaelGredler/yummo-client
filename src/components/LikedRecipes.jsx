import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Search from './common/Search'
import TagButtons from './common/TagButtons'
import { Link } from 'react-router-dom';



const LikedRecipes = (props) => {
    const { userState } = props;

    // The onQueryChange function has been passed to us from App.js and is deconstructed from the props
    // It's then passed into our Search component


    const [recipeState, setRecipes] = useState([])
    // State for storing user details when they log in
  
    // The first thing that happens is useEffect(), which calls our search function. This sends an Axios request to our backend to get recipes passing in our query that we stored in state.
    // The response will be our recipes, which will be saved into state above. Once it's saved in state we can redner it onto our page.
    useEffect(() => {
      searchForLikes()
      async function searchForLikes() {
          if(userState) {
              let response = await axios.get(`http://localhost:8081/likes?UserId=${userState.user.id}`)
              setRecipes(response.data)
          }
      }
    }, [userState]);

    return (
        <React.Fragment>
            <Container>
                <div className="row">
                    {recipeState && recipeState.map((recipe) => (
                        <div className="col-lg-4 col-sm-6 col-12 py-2" key={recipe.id}>

                            <Card>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Card.Img variant="top" src={"http://localhost:8081" + recipe.image} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text><b>Likes: </b>{recipe.likes}</Card.Text>
                                    <Card.Text>{recipe.instructions}</Card.Text>
                                    <Card.Text><b>Cooking Time: </b>{(recipe.cookingTimeHrs === "0" ? '' : recipe.cookingTimeHrs + "hrs ") + (recipe.cookingTimeMins === "0" ? '' : recipe.cookingTimeMins + "mins")}</Card.Text>
                                    <Card.Text><b>Difficulty: </b>{recipe.difficulty}</Card.Text>
                                    <Card.Text><b>Serves: </b>{recipe.serves}</Card.Text>
                                    

                                    {/* <Card.Text> */}
                                    {/* <b>Tags: </b>
                                    <TagButtons tags={recipe.tags} tagSearch={tagSearch}></TagButtons> */}

                                    {/* </Card.Text> */}


                                    <Link variant="success" className="main-btn btn btn-primary" to={`/recipe/${recipe.id}`}>View</Link>
                                    {/* <Link variant="success" className="w-50 btn btn-primary" to={`/recipe/${recipe.id}`}>View</Link> */}
                                    {/* {userState && <Link variant="warning" className="w-50 btn btn-warning" to={`/editinstructionGuide/${recipe.id}`}>Edit</Link>} */}
                                </Card.Body>
                            </Card>

                        </div >
                    ))}
                </div >
            </Container >
        </React.Fragment >
    )
}
export default LikedRecipes;
