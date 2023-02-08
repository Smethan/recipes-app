import React from 'react'
import menuIcon from "../../Images/menu-icon.png";
import userIcon from "../../Images/user-icon.png";
import "./Nav.scss"

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
      <img src={menuIcon} className="ham" alt="menu icon" width="40" height="40"  />
      <h2>_nology Recipes</h2>
      <img src={userIcon} className="profile" alt="user profile icon" width="50" height="50"   />
    </div>
    </div>
  )
}

export default Nav