import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";


export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
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
            </div>
        </div>
    );
}
