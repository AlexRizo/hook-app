import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        desc: 'Demo Todo',
        done: false
    }];
    
    test('debe de retornar el estado por defecto', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toEqual(initialState);
    });

    test('debe de agregar un TODO', () => {
        const action = {
            type: '[TODO] add',
            payload: {
                id: 2,
                desc: 'Nuevo Todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContainEqual(action.payload);
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] delete',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type: '[TODO] toggle',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(!initialState[0].done);
    });
})