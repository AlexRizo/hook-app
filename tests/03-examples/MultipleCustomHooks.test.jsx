import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Purbeas en <MultipleCustomHooks/>', () => {
    test('debería de renderizar el componente', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Coutes'));
        
        const button = screen.getByRole('button', { name: 'Next Quote' });

        expect(button.disabled).toBeTruthy();        
        
        // screen.debug();
    });

    test('debe de mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{author: 'David', quote: 'Hola mundo'}],
            loading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('David')).toBeTruthy();

        const button = screen.getByRole('button', { name: 'Next Quote' });
        expect(button.disabled).toBeFalsy();
    });

    test('should llamar la función de incrementar', () => {
        const increment = jest.fn();
        
        useFetch.mockReturnValue({
            data: [{author: 'David', quote: 'Hola mundo'}],
            loading: false,
            hasError: null,
            increment
        });

        render(<MultipleCustomHooks/>);
        const button = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(button);

        expect(increment).toHaveBeenCalledTimes(1);
    });
});