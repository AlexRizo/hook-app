import { useContext } from 'react'
import UserContext from './context/userContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log(user);
    
    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            
            <pre aria-label='pre'>{ JSON.stringify(user, null, 4) }</pre>

            <button 
                className='btn btn-primary'
                onClick={ () => setUser({ id: 1, name: 'David' }) }    
            >
                Establecer usuario
            </button>
        </>
    )
}
