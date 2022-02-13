import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";

export default function Profile() {
    return  (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/post/post4.jpg" alt="" className="profileCoverImg" />
                        <img src="/assets/person/profile1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Tom Spears</h4>
                        <span className="profileInfoDesc">I am just a guy</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar Profile/>
                </div>
            </div>
        </div>
        </>   
    );
}