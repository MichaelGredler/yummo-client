import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe("yummoHeader", () => {
    test('Should check for the Login button in the header', () => {
        render(<Header/>);
        let headerElement = screen.getByRole('button', {name: 'Login'});
        expect(headerElement).toBeInTheDocument();
    })
})


