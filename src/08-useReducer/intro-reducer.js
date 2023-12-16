const initialState = [{
    id: 1,
    todo: 'Aprender React',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action && action.type === '[TODO] Add todo') {
        return [...state, action.payload];
    }

    return state; // ? Siempre debe retornar un estado
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Aprender Angular',
    done: false
};

const addTodoAction = {
    type: '[TODO] Add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);


// todos.push({ // ? No se debe mutar el estado de esta forma
//     id: 2,
//     todo: 'Aprender Angular',
//     done: false
// });

console.log({state: todos});