import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import UserContext from "../../src/09-useContext/context/userContext";

describe('Pruebas en <HomePage/>', () => {
    const user = {
        id: 1,
        name: 'David'
    };
    
    test('debe de mostrar el componente correctamente (sin el usuario)', () => {
        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de mostrar el componente correctamente (con el usuario)', () => {
        render(
            <UserContext.Provider value={ { user } }>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 4));

    });
})