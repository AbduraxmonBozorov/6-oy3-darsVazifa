import React from 'react'

function Tabs() {

    function handleTabs(arg){
        alert(`Clicked ${arg} button`);
    }
    return (
        <div className='tabs'>
            <h1>Tabs</h1>
            <button onClick={()=>{
                handleTabs('Clear');
            }} className='btn btn-warning ms-5'>Clear</button>
            <button onClick={()=>{
                handleTabs('Submit');
            }} className='btn btn-success ms-2'>Submit</button>
            <button onClick={()=>{
                handleTabs('Delete');
            }} className='btn btn-danger ms-2'>Delete</button>
        </div>
    )
}

export default Tabs;
