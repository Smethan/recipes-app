import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../Images/user-icon.png";
import Sidebar from "../Sidebar/Sidebar";
// import Profile
import "./Nav.scss"

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
      <Sidebar />
      <h4 className="small-link">About</h4>
      <h2>_nology Recipes</h2>
      <h4 className="small-link">All Recipes</h4>
      {/* Bottom line will be replaced with <Profile /> */}
      <img src={userIcon} className="profile" alt="user profile icon" width="50" height="50"   />
    </div>
    </div>
  )
}
 export default Nav;