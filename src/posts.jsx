import { useState } from "react";
import "./posts.css";

export default function Posts({imgsrc,ownimg,name,id,likeNo}) {
    let [isLiked,setIsLiked]=useState(false);
    let[count,setCount]=useState(likeNo);
    let clicked = ()=>{
        setIsLiked(!isLiked);
        if(isLiked==true){
            setCount(count-1);
        }else{
            setCount(count+1);
        }
    }
    let likeStyle = {color : "red"};
    return (
        <div className="posts">
            <div id="postown">
                <div id="myfy">
                <div id="owner"><img src={ownimg} alt="owner" /></div>
                <div id="owninfo"><p>{name} </p> <p id="tal">@{id}</p></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
            </div>
            <div id="imcon">
                <div id="pscontain">
                    <img src={imgsrc} alt="posts" />
                </div>
                <div id="numcount"></div>
            <div id="pinf">
            <p onClick={clicked}>
                likes = {count}
                {isLiked?<i className="ri-heart-fill" style={likeStyle}></i>:<i className="ri-heart-3-line"></i>}
            </p>
                <i className="ri-chat-smile-3-fill"></i>
                <i className="ri-shopping-bag-4-fill"></i>
            </div>
            <div id="captions">
                {"caption"}
            </div>
            </div>
        </div>
    )
}