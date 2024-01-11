import { render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"

describe('Purbeas en <MultipleCustomHooks/>', () => {
    test('debería de renderizar el componente', () => {
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Coutes'));
        
        const button = screen.getByRole('button', { name: 'Next Quote' });

        expect(button.disabled).toBeTruthy();        
        
        screen.debug();
    });

    test('debe de mostrar un quote', () => {
        
    })
});