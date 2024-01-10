import { createBrowserRouter } from 'react-router-dom';
import { MainPage, AboutPage, HomePage, LoginPage, ErrorPage } from './';

const Router = () => {
    const router = createBrowserRouter([
        { 
            path: '/',
            element: <MainPage/>,
            errorElement: <ErrorPage/>,
            children: [
                { path: 'home', element: <HomePage/> },
                { path: 'about', element: <AboutPage/> },
                { path: 'login', element: <LoginPage/> },
            ]
        },
    ]);

    return router;
}

export default Router;