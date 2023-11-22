import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            
            <form>
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

                <input 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="form-control mt-2"    
                    value={ password }  
                    onChange={ onInputChange }
                    autoComplete="on"
                />

                <button type="button" className="btn btn-primary mt-2" onClick={ onResetForm }>Reiniciar</button>
            </form>

        </>
    )
}