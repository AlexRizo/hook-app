import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Swain',
        email: 'swain@noxus.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect(() => {
    //     console.log('formState init');
    // }, []);
    
    // useEffect(() => {
    //     console.log('formState changed');
    // }, [ formState ]);

    // useEffect(() => {
    //     console.log('email changed');
    // }, [ email ]);


    
    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            
            <input 
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                value={ username }  
                onChange={ onInputChange }
            />

            <input 
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                className="form-control mt-2"    
                value={ email }  
                onChange={ onInputChange }
            />

            {
                (username === 'Swain') && <Message />
            }
        </>
    )
}