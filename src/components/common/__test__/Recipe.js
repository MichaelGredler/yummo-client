import { render, screen } from '@testing-library/react';
import Recipe from '../../Recipe';
import {BrowserRouter} from 'react-router-dom';

const mockSetRecipeState = jest.fn();

const MockRecipePage = ({userState, match}) => {
    return (
        <BrowserRouter>
            <Recipe userState={userState} id={match.params.id} setRecipeState={mockSetRecipeState}/>
        </BrowserRouter>
    )
}


test('Should check if like button is displayed',  () => {
    render(<MockRecipePage />);
    const likeButton = screen.getByRole('button');
    expect(likeButton).toHaveClass('like-btn');
})

