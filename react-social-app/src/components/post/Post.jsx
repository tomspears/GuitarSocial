import "./post.css"
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/profile1.jpg" alt="" className="postProfileImg"/>
                        <span className="postUsername">Tom Spears</span>
                        <span className="postDate">5 mins. ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey it's my first post :)</span>
                    <img src="/assets/post/post1.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">420 People like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">69 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
