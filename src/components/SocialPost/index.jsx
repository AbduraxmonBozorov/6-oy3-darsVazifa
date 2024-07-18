import React, {useState} from 'react';
import "./index.css";

function SocialPost() {
    let [likeCount, setLikeCount] = useState(0);
    let [disLikeCount, setDisLikeCount] = useState(0);

    function clickLike(){
        setLikeCount(likeCount+1);
    }

    function clickDisLike(){
        setDisLikeCount(disLikeCount+1);
    }

    return (
        <div className='row justify-content-center'>
            <div className="col-3">
                <div className="card w-100">
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <div>
                            <i className="fa-solid fa-thumbs-up" onClick={clickLike}></i>
                            <span className='likeCount' >{likeCount}</span>
                            <i className="fa-solid fa-thumbs-down" onClick={clickDisLike}></i>
                            <span className='disLikeCount'>{disLikeCount}</span>
                           </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SocialPost
