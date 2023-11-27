import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    };
    
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                placeholder='Ingresa tu nombre'
                className='form-control'
            />

            <button 
                className='btn btn-primary mt-1'
                onClick={ onClick }
            >
                Set Focus
            </button>
        </>
    )
}
