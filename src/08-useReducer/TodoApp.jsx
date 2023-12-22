import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodo } from "./useTodo";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo([], init);

    return (
        <>
            <h1>TodoApp 1 <small>Pendientes: 1</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }></TodoList>
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
