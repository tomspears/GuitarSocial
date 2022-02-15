import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";
import Profile from "../../pages/profile/Profile";


export default function Rightbar({Profile}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Marco Piazza</b> and <b>5 other friends</b> have birthdays today</span>
                </div>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
                <h4 className="rightbarAdText">Sponsored By:</h4>
                <img src="/assets/ad.gif" alt="" className="rightbarAd" />
            </>
        );
    };

    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">About Me</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">New York, NY </span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From: </span>
                    <span className="rightbarInfoValue">Verona, NJ </span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">Single</span>              
                </div>
            </div>
            <h4 className="rightbarTitle">My Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile1.jpg"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile3.jpg"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile4.jpg" } alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile5.jpg"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile6.jpg"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF + "person/profile7.jpg"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
            </div>
            </>
        )
    };

    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                { Profile ? <ProfileRightbar /> : <HomeRightbar /> }
            </div>
        </div>
    );
};
