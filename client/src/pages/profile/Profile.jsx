import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
import "../../dummyData"


export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return  (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src= {PF + "post/post4.jpg"} alt="" className="profileCoverImg" />
                        <img src={PF + "person/profile1.jpg"} alt="" className="profileUserImg" />
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