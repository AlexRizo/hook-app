import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

const initialState = [

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ]);
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add',
            payload: todo
        };

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] delete',
            payload: id
        };

        dispatch(action);
    }
    
    return (
        <>
            <h1>TodoApp 1 <small>Pendientes: 1</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo }></TodoList>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* TodoForm */}
                    <TodoForm onNewTodo={ handleNewTodo }></TodoForm>
                </div>
            </div>
        </>
    )
}
