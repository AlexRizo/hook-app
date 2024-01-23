import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import UserContext from "../../src/09-useContext/context/userContext";

describe('Pruebas en <LoginPage/>', () => {
    const user = {
        id: 1,
        name: 'David'
    };

    test('debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe llamar setUser al dar click en el botón', () => {
        const setUser = jest.fn();
        render(
            <UserContext.Provider value={ { user: null, setUser } }>
                <LoginPage/>
            </UserContext.Provider>
        );

        const addUserButton = screen.getByRole('button');
        fireEvent.click(addUserButton);
        
        expect(setUser).toHaveBeenCalledWith(user);
    });
})