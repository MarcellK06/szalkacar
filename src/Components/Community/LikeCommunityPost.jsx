import { useEffect, useRef, useState } from "react";
import CONFIG from "../../config.json";
import Cookie from 'js-cookie';
import $ from 'jquery';

function LikeCommunityPost() {
    var API = CONFIG.API;

    var postid = 0; //Add át a post idjét init-nél

    const LikePost = () => {
        var userid = Cookie.get("userid");
        var el = document.getElementById(`like-${postid}`);
        $.ajax({
            url: `${API}/community/like`,
            data: {
                userid: userid,
                postid: postid
            },
            success: (resp) => {
                el.classList.add("liked");
            },
            error: (resp) => {
                if (el.classList.contains("liked"))
                    el.classList.remove("liked");
            }
        });
    }

    return (<>
    <button value="LIKE" id={`like-${postid}`} onClick={LikePost}/>
    </>);

}

export default LikeCommunityPost;