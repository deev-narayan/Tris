import "./webPage.css";
import Flist from "./flist.jsx";
import Links from "./postCollect.jsx";
import Trendlist from "./trendlist.jsx";
import React, { useState } from 'react';
import Posts from "./posts.jsx";
export default function home({profile,name,fcount,fwcount}){
    let [post,setPost]=useState([]);
    const [file, setFile] = useState();

    function addPost() {
        const dat = {
            src:file,
        }
        setPost([dat,...post]);
        console.log(post);
    }
    return(
        <div id="main">
            <div id="nav">
                <div id="logo">
                    <img src="./lgo.png" alt="logo" id="log" />
                    <div>
                    <i className="ri-search-line"></i>
                    <input type="search" name="search" id="search" placeholder="Search for NFTs"/>
                    </div>
                </div>
                <div id="nav-links">
                <i className="ri-add-fill"></i>
                <i className="ri-wallet-fill"></i>
                <i className="ri-notification-4-fill"></i>
                    <div id="Prof">
                        <div id="pic">
                        <img src={profile} alt="" />
                        </div>
                        <p style={{ fontsize :"3rem"}}>@{name}</p>
                        <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
            <div id="left">
                <div id="myprof">
                    <div id="pic1">
                    <img src={profile} alt="" />
                    </div>
                    <div id="finfo">
                    <p  >@{name}</p>
                        <div id="lng">
                            <p> <span>Follower </span><br />{fcount} </p>
                          
                            <p> <span>Following </span><br />{fwcount} </p>
                        </div>
                        
                    </div>
                </div>
                <div id="recent">
                    <p>Followers</p>
                    <div id="recent-list">
                        <Flist />
                    </div>
                </div>
            </div>
            <div id="center2">
                <div id="newpost">
                <div id="pic2">
                    <img src={profile} alt="" />
                </div>
                <input type="file" onChange={(e)=>{
              setFile(URL.createObjectURL(e.target.files[0]))}} />
                <button id="post" onClick={addPost}>Post</button>
                </div>
                {post.map((item, index) => (
                <Posts key={post.length - index} imgsrc={item.src} alt="" name={"Divyansh"} id={"devkr_7"}  likeNo={0} ownimg={profile} />
                ))}
                <Links/>
            </div>
            <div id="right">
                <div id="upbar">
                <h2>Trend For You</h2>
                <i className="ri-settings-3-fill"></i>
                </div>
                <br />
                <Trendlist />
            </div>
        </div>
    )
}