import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/08-useReducer/useTodo"

jest.mock('../../src/08-useReducer/useTodo');

describe('pruebas en <TodoApp/>', () => {
    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                desc: 'Aprender React',
                done: false
            },
            {
                id: 2,
                desc: 'Aprender NodeJS',
                done: true
            },
            {
                id: 3,
                desc: 'Aprender JEST',
                done: false
            }
        ],
        totalTodos: 3,
        pendingTodos: 2,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });
    
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>);

        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender NodeJS')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
})