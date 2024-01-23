import { render, screen } from "@testing-library/react"
import { MainPage } from "../../src/09-useContext/MainPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Router from "../../src/09-useContext/Router";

describe('Pruebas en <MainPage/>', () => {
    test('should mostrar el <MainPage/>', () => {
        
        const router = createMemoryRouter(Router, { initialEntries: ["/"] });
        render(<RouterProvider router={ router }/>);
        
        expect(screen.getByText('MainPage')).toBeTruthy();
    });

    test('should mostrar el <LoginPage/>', () => {
        const router = createMemoryRouter(Router, { initialEntries: ["/login"] });
        render(<RouterProvider router={ router }/>);

        expect(screen.getByText('LoginPage')).toBeTruthy();
        screen.debug()
    });
})