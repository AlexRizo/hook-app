import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

const callSubject = (initialForm = {}) => {
    const { result } = renderHook(() => useForm(initialForm));

    return result.current;
}

const initialForm = {
    name: 'David',
    email: 'david@email.com'
};

describe('Pruebas en useForm', () => {
    
    test('debería regresar los valores por defecto', () => {
        const result = callSubject(initialForm);

        expect(result).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          });
    });

    test('debería cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newValue = 'Alejandro';

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
        });

        expect(result.current.name).toBe(newValue);
    });

    test('debería resetear el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const newValue = 'Alejandro';

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });

            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
    });
})