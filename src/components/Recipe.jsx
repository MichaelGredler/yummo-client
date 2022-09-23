import React, { useState, useEffect } from 'react';
import {Container, Button} from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import { createPopper } from '@popperjs/core';
import { RiThumbUpLine } from 'react-icons/ri';


const Recipe = (props) => {
    const { match, userState } = props;
    let id = match.params.id;
    const [recipeState, setRecipeState] = useState();

    useEffect(() => {
        async function getRecipeById() {
            let response = await axios.get(`http://localhost:8081/recipes/${id}`); // Gets the recipe that has the same id
            setRecipeState(response.data);
        }
        getRecipeById();
    }, [id]);

    const like = async (userId, recipeId, recipeTitle) => {
        try {
            // This happens when the user likes a recipe with the like button. 
            // Here we get the current total of likes for the recipe, then increase that number by one, then update the recipe in the database with the new total.

            let likesTotal = recipeState.likes;
            likesTotal++
            console.log(likesTotal)
            setRecipeState({ ...recipeState, "likes" : likesTotal});
            // The spread operator makes a copy of recipeState, then the attribute "likes" is given a new value of likesTotal
            recipeState.likes = likesTotal;
            await axios.put(`http://localhost:8081/recipes/${recipeId}`, recipeState);

            // Here we add a record of the like, with the user id and the liked recipe id to the database.
            const userLike = {
                "UserId": userId,
                "RecipeId": recipeId,
                "Title": recipeTitle
            }
            await axios.post(`http://localhost:8081/likes`, userLike)
           
        } catch (error) {
            console.log(error)
        }
    }

    // Popper tooltip for Like button
    // if(!userState){
        
        // const likeBtn = document.querySelector('.like-btn');
        // const likeLoginBtn = document.querySelector('.like-login-btn');
        // // console.log("Like btn: ", likeBtn)
        // // console.log("Like login btn: ", likeLoginBtn)
        // const tooltip = document.querySelector('#tooltip');
        // const popperInstance = createPopper(likeBtn, tooltip, {
        // modifiers: [
        //         {
        //             name: 'offset',
        //             placement: 'left',
        //             options: {
        //                 offset: [0, -75],
        //             },
        //         },
        //     ],
        // });
        
        // likeBtn.addEventListener('mouseenter', show);
        // likeBtn.addEventListener('mouseleave', hide);
    
        // Functions to adjust the display attribute for #tooltip
        // function show() {
        //     tooltip.setAttribute('data-show', '');
        //     popperInstance.update();
        // }
    
        // function toolTipHide() {
        //     tooltip.removeAttribute('data-show');
        // }
    
        // function loginShow() {
        //     console.log("working")
        //     likeLoginBtn.setAttribute('data-show', '');
        // }

        

        // likeBtn.addEventListener('click', loginShow);
    // }
    
    return (
        <Container>
            <div class="recipe-two-cols">
                <div class="column-1">
                    <h1 class="recipe-title">{recipeState && recipeState.title}</h1>
                    <hr/>
                    <div class="like-div">
                        <RiThumbUpLine className="thumb" size={24}/>
                        <h5>{recipeState && recipeState.likes}</h5>
                        {/* LIKE BUTTON - User logged in - this button likes the recipe*/}
                        {userState && 
                            <Button className="like-btn btn btn-sm" onClick={() => {
                                console.log("Logged in")
                                like(userState.user.id, recipeState.id, recipeState.title)
                            }}>Like</Button>
                        }

                        {/* LIKE BUTTON - User logged out - the button will not like the recipe and instead a popup message appears*/}
                        {!userState && 
                            <Button className="like-btn logged-out" aria-describedby="tooltip" onClick={() => {
                                console.log("Not logged in");
                                alert("Please log in to leave a like!");
                                // this.setAttribute('data-show', '');
                            }}>Like</Button>
                        }

                        {/* LOGIN BUTTON - User logged out */}
                        {!userState && 
                            <Button className="like-login-btn btn btn-outline-primary" href="/login"
                            >Login</Button>
                        }

                        {/* TOOLTIP - User logged out */}
                        {!userState && 
                            <div id="tooltip" role="tooltip">
                                Log in to leave a like!
                                <div id="arrow" data-popper-arrow></div>
                            </div>
                        }
                    </div>
                    <p><b>Author: </b>{recipeState && recipeState.author}</p>
                    <p><b>Cooking Time: </b>{recipeState && (recipeState.cookingTimeHrs === "0" ? '' : recipeState.cookingTimeHrs + "hrs ") + (recipeState.cookingTimeMins === "0" ? '' : recipeState.cookingTimeMins + "mins")}</p>
                    <p><b>Serves: </b>{recipeState && recipeState.serves}</p>
                    <p><b>Difficulty: </b>{recipeState && recipeState.difficulty}</p>
                    <p><b>Ingredients: </b></p>
                    <ul className="ingsList">
                        {/* An unordered list is created by mapping the array containing the ingredients*/}
                        {recipeState && recipeState.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p><b>Method: </b></p>
                    <ol className="methodList">
                        {/* An ordered list is created by mapping the array containing the method*/}
                        {recipeState && recipeState.method.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
                <div class="column-2">
                    <img src={recipeState && "http://localhost:8081" + recipeState.image} className="recipe-hero" alt={recipeState && recipeState.title} />
                </div>
            </div>


        </Container>

    )
}
export default Recipe;
