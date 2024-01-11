import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

const callSubject = (initialValue = 0) => {
    const { result } = renderHook(() => useCounter(initialValue));

    return result.current;
}

describe('Pruebas en useCounter hook', () => {
    test('debería retornar los valores por defecto', () => {
        const { counter, decrement, increment, reset } = callSubject();

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debería generar el counter con el valor de 100', () => {
            const { counter } = callSubject(100);

            expect(counter).toBe(100);
    });

    test('debería modificar el contador', () => {
        const { result } = renderHook(() => useCounter(0));
        const { increment, decrement } = result.current;
        
        act(() => {
            increment(30);
            decrement(15);
            increment(5);
            decrement(1)
        });
        
        expect(result.current.counter).toBe(19);
    });

    test('debería de resetear el contador', () => {
        const { result } = renderHook(() => useCounter(0));
        const { decrement, increment, reset } = result.current;

        act(() => {
            decrement(50);
            increment(30);
            reset();
        });

        expect(result.current.counter).toBe(0);
    })
});