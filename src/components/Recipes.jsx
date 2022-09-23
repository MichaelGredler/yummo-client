import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Search from './common/Search'
import TagButtons from './common/TagButtons'
import { Link } from 'react-router-dom';
import { BsSearch, BsDice6Fill } from 'react-icons/bs';
import { RiThumbUpLine } from 'react-icons/ri';

const Recipes = (props) => {
    const { recipeState, query, onChange, user, tagSearch } = props;

    // The onQueryChange function has been passed to us from App.js and is deconstructed from the props
    // It's then passed into our Search component

    return (
        <React.Fragment>
            <Container>
                <div className="row">
                    <div className="two-column-section search-bar">
                        <div className="column-1">
                            <h4><span><BsSearch></BsSearch></span>What To Eat?</h4>
                            {/* Here the user may filter recipes by title */}
                            <Search query={query} onChange={onChange}></Search>
                        </div>
                        <div className="column-2">
                            <h4><span><BsDice6Fill></BsDice6Fill></span>I'm Feeling Lucky</h4>
                            <Button onClick={() => {alert("This feature is coming soon!")}} className="main-btn">Roll The Dice</Button>
                        </div>
                    </div>
                    {/* <h2 className="fancy-title">Recipes</h2>
                    <hr className="main-hr"/> */}
                    {/* <p>Likes</p> */}
                    <div className="test">
                    {/* The recipes loaded into state are mapped over and a card is genereated for each one */}
                    {recipeState && recipeState.map((recipe) => (
                        <div className="col-lg-4 col-sm-6 col-12 recipe-card" key={recipe.id}>
                            <Card>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Card.Img variant="top" src={"http://localhost:8081" + recipe.image} />
                                </Link>
                                <Card.Body>
                                    <div className="card-title-wrap">
                                        <Card.Title className="card-title"><h5>{recipe.title}</h5></Card.Title>
                                        <Card.Text className="thumb-up"><span><RiThumbUpLine></RiThumbUpLine></span>{recipe.likes}</Card.Text>
                                    </div>
                                    {/* Ternery operators are used here to hide or add hours or minutes depending on cooking time */}
                                    <Card.Text><b>Cooking Time: </b>{(recipe.cookingTimeHrs === "0" ? '' : recipe.cookingTimeHrs + "hrs ") + (recipe.cookingTimeMins === "0" ? '' : recipe.cookingTimeMins + "mins")}</Card.Text>
                                    <Card.Text><b>Difficulty: </b>{recipe.difficulty}</Card.Text>
                                    <Card.Text><b>Serves: </b>{recipe.serves}</Card.Text>
                                    <TagButtons tags={recipe.tags} tagSearch={tagSearch}></TagButtons>
                                    <Link variant="success" className="main-btn btn btn-primary" to={`/recipe/${recipe.id}`}>View</Link>
                                    {/* {user && <Link variant="warning" className="w-50 btn btn-warning" to={`/editinstructionGuide/${recipe.id}`}>Edit</Link>} */}
                                </Card.Body>
                            </Card>

                        </div >
                    ))}
                    </div>
                </div >
            </Container >
        </React.Fragment >
    )
}
export default Recipes;
