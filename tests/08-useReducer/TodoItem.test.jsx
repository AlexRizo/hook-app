import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {
    const todo = {
        id: 1,
        desc: 'Aprender React',
        done: false
    };

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el Todo pendiente', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
            />
        ); 

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement).not.toContain('text-decoration-line-through');
    });
    
    test('debe de mostrar el Todo completado', () => {
        todo.done = true;
        
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
            />
        ); 
        
        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('debe de llamar ToggleTodo', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
            />
        ); 

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
    });

    test('debe de llamar deleteTodo', () => {
        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    });
});