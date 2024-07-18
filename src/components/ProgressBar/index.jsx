import React, { useState } from 'react'
import "./index.css";

export default function ProgressBar() {
    let [width, setWidth] = useState(0)

    function handleIncrement(){
        setWidth(width+5)
    }

    function handleDecrement(){
        if(width<=0){
            alert("Width don't be less 0");
            return;
        }
        setWidth(width-5);
    }

    return (
        <div className='ProgressBar'>
            <h1>ProgressBar</h1>
            <div className="content">
                <button onClick={handleDecrement} className='btn fs-3'>-</button>
                <div className='bar'>
                    <div className='progress' style={{ width: `${width}%` }}></div>
                </div>
                <button onClick={handleIncrement} className='btn fs-3'>+</button>
            </div>
        </div>
    )
}
