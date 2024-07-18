import React, { useState } from 'react'
import "./index.css";

function Counter() {
    let [counter, setCounter] = useState(0);

    function handleClickIncrement() {
        setCounter(counter + 1)
    }

    function handleClickDecrement() {
        if (counter <= 0) {
            alert("You can not Decrement!")
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className='counter'>
            <h1>{counter}</h1>
            <div>
                <button className='btn btn-outline-warning' onClick={handleClickIncrement}>Increment</button>
                <button className='btn btn-outline-success' onClick={handleClickDecrement}>Decrement</button>
            </div>

        </div>
    )
}

export default Counter
