import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Here we go...');
    }

    return `${ iterations } iterations done.`;
};

export const MemoHook = () => {
    // Your component logic goes here
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])  // If second changes, first will be executed

    return (
        // Your JSX code goes here
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizeValue }</h4>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button 
                className="btn btn-outline-primary" 
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    );
};