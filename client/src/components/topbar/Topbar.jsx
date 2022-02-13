import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() { 
      return ( 
           <div className="topbarContainer">
                <div className="topbarLeft">
                     <span className="logo">GuitarSocial</span>
                     <span className="guiatarLogo"><img src="..\assets\GuitarSocialIcon.png" alt="GuitarSocial" height="35" width="104"></img></span>
                </div>
                <div className="topbarCenter">
                     <div className="searchbar">
                         <Search className="searchIcon"/>
                         <input placeholder="Search GuitarSocial for friends, posts, or videos" className="searchInput" />
                     </div>
                </div>
                <div className="topbarRight">
                     <div className="topbarLinks">
                          <span className="topbarLink">Home</span>
                          <span className="topbarLink">See What's Happening</span>
                     </div>
                     <div className="topbarIcons">
                          <div className="topbarIconItem">
                               <Person/>
                               <span className="topbarIconBadge">1</span>
                          </div>
                          <div className="topbarIconItem">
                               <Chat/>
                               <span className="topbarIconBadge">1</span>
                          </div>
                          <div className="topbarIconItem">
                               <Notifications/>
                               <span className="topbarIconBadge">1</span>
                          </div>
                     </div>
                     <img src="/assets/person/profile1.jpg" alt="" className="topbarImg" />
                </div>
           </div> 
      ) 
 }