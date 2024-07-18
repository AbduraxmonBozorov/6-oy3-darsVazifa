import React from 'react';
import "./index.css";

function Images() {

    function handleClick(event){
        let imgs=document.querySelectorAll("img");
        imgs.forEach(item=>{
            item.style.transform="scale(1)";
            item.style.zIndex="0"

        })
        let img=event.target;
        img.style.transform="scale(1.5)";
        img.style.position="relative"
        img.style.zIndex="10"

       
    }
    
  return (
    <div className='row gy-3' >
      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/id/237/200/300" className='w-100' alt="" />
      </div>

      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/200/300" className='w-100' alt="" />
      </div>

      
      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/seed/picsum/200/300" className='w-100' alt="" />
      </div>

      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/200/300?grayscale" className='w-100' alt="" />
      </div>

       <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/200/300/?blur=2" className='w-100' alt="" />
      </div>

      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/id/870/200/300?grayscale&blur=2" className='w-100' alt="" />
      </div>

      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/id/860/200/300?grayscale&blur=2" className='w-100' alt="880" />
      </div>

      <div className="col-3">
        <img onClick={handleClick} src="https://picsum.photos/id/2/200/300" className='w-100' alt="880" />
      </div>
    </div>
  )
}

export default Images
