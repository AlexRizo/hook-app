import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodos } from "./useTodo";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const { todos, totalTodos, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos([], init);

    return (
        <>
            <h1>Total: { totalTodos } <small>Pendientes: { pendingTodos }</small></h1>
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
