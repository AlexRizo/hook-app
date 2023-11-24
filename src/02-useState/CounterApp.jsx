import { useState } from "react"

export const CounterApp = () => {
    const [{ counter1, counter2, counter3 }, setState] = useState({
       counter1: 10, 
       counter2: 20, 
       counter3: 30, 
    });
    
  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>
        <hr />
        <button
            className="btn btn-success"
            onClick={
                () => setState({
                    counter1: counter1 + 1,
                    counter2, counter3
                })
            }
        >+1</button>
    </>
  )
}