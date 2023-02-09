import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../Images/user-icon.png";
import Sidebar from "../Sidebar/Sidebar";
import ProfileButton from "../ProfileButton/ProfileButton.jsx";
import "./Nav.scss"

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
      <Sidebar />
      <h4 className="small-link">About</h4>
      <h2>_nology Recipes</h2>
      <h4 className="small-link">All Recipes</h4>
      <ProfileButton />
    </div>
    </div>
  )
}
 export default Nav;