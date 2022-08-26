import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { CheckNumber } from "."

const getInput = () => {
    return screen.getByPlaceholderText('Enter a number');
}

describe('<CheckNumber />', () => {
    test('renders a title', () => {
        render(<CheckNumber/>);

        const title = screen.getByText('Check number even or odd');
        expect(title).toBeInTheDocument();
    })

    test('renders a input', () => {
        render(<CheckNumber/>);

        const input = getInput();
        expect(input).toBeInTheDocument();
    })
})

describe('when the user types an even number', () => {
    test('renders even on the screen', () => {
        render(<CheckNumber/>);

        const input = getInput();

        userEvent.clear(input);
        userEvent.type(input, '2');      
        
        const section = screen.getByRole('presentation');
        expect(section).toHaveTextContent('Even');
    })
})

describe('when the user types an odd number', () => {
    test('renders Odd on the screen', () => {
        render(<CheckNumber/>);

        const input = getInput();

        userEvent.clear(input);
        userEvent.type(input, '1');
        
        const section = screen.getByRole('presentation');
        expect(section).toHaveTextContent('Odd');
    })
})

describe('when there is no error', () => {
    test('renders the error message section empty', () => {
        render(<CheckNumber/>);

        const alert = screen.getByRole('alert');
        expect(alert).toHaveTextContent('');
         
    })
})

describe('when the user types a not number value', () => {
    test('renders the error message on the screen', () => {
        render(<CheckNumber/>);

        const input = getInput();

        userEvent.clear(input);
        userEvent.type(input, 'anything');
        
        const alert = screen.getByRole('alert');
        expect(alert).toHaveTextContent('Please, enter a number');
    })
})

