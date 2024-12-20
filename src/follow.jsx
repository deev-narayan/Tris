import { useState } from 'react';
import './follow.css';
export default function Follow({sim,name,username}) {
  let [isFollowed,setIsFollowed]=useState(false);
  let clicked = ()=>{
      setIsFollowed(!isFollowed);
  }
  let likeStyle = {color : "white",backgroundColor:"black"};
    return (
      <div id="par">
        <div id="prof">
          <img src={sim} alt="profile picture" id="profilepic"/>
        </div>
        <div id="info">
            <p>{name}</p>
            <p>@{username}</p>
        </div>
        {isFollowed?<button onClick={clicked} style={likeStyle}><p>Following</p></button>:<button onClick={clicked}><p>Follow Back</p></button>}
        
      </div>
    )
  }