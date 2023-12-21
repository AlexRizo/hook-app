import { useForm } from "../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''

    });

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        if (description.trim().length <= 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        onResetForm();

        onNewTodo && onNewTodo(newTodo);
    }
    
    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text"
                name="description"
                placeholder="Aprender..."
                autoComplete="off"
                className="form-control"
                onChange={ onInputChange }
                value={ description }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
    )
}
