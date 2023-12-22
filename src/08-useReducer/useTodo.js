import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = (initialState = [], init) => {
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

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle',
            payload: id
        };

        dispatch(action);
    }
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
};